#include <node_api.h>
#include <assert.h>
#include <iostream>
#include <Processing.NDI.Lib.h>

NDIlib_routing_instance_t pNDI_routing[100];

napi_value changeRoutingSource(napi_env env, napi_callback_info info)
{
    napi_valuetype type;
    napi_status status;
    napi_value result;

    // Read arguments passed to promise
    size_t argc = 3;
    napi_value args[3];
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc != (size_t)3)
    {
        status = napi_create_string_utf8(env, "Error : wrong args", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    // Parse URL Source from args
    const char *url_source = NULL;
    size_t url_sourcel;

    status = napi_typeof(env, args[0], &type);
    if (type != napi_string)
    {
        status = napi_create_string_utf8(env, "Error : Wrong type - NDI url_source", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &url_sourcel);
    url_source = (char *)malloc(url_sourcel + 1);
    status = napi_get_value_string_utf8(env, args[0], (char *)url_source, url_sourcel + 1, &url_sourcel);

    // Parse DNS Source from args
    const char *dns_source = NULL;
    size_t dns_sourcel;

    status = napi_typeof(env, args[1], &type);
    if (type != napi_string)
    {
        status = napi_create_string_utf8(env, "Error : Wrong type - NDI dns_source", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    status = napi_get_value_string_utf8(env, args[1], NULL, 0, &dns_sourcel);
    dns_source = (char *)malloc(dns_sourcel + 1);
    status = napi_get_value_string_utf8(env, args[1], (char *)dns_source, dns_sourcel + 1, &dns_sourcel);

    printf("NDI dns_source Url : %s \n", dns_source);



    // Populate carrier with new instance
    NDIlib_source_t *ndi_source = new NDIlib_source_t();
    ndi_source->p_ndi_name = dns_source;
    ndi_source->p_url_address = url_source;


    // Parse Target from args
    int target_index;
    status = napi_get_value_int32(env, args[2], &target_index);

    NDIlib_routing_change(pNDI_routing[target_index], ndi_source);

    printf("NDI Changing Target Index %i to url_source %s \n", target_index, url_source);
    status = napi_create_string_utf8(env, "completed", NAPI_AUTO_LENGTH, &result);

    assert(status == napi_ok);
    return result;
}

napi_value initializeRouting(napi_env env, napi_callback_info info)
{
    napi_valuetype type;
    napi_status status;
    napi_value result;

    // Read arguments passed to promise
    size_t argc = 3;
    napi_value args[3];
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc != (size_t)3)
    {
        status = napi_create_string_utf8(env, "Error : wrong args", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    const char *url_source = NULL;
    size_t url_sourcel;

    status = napi_typeof(env, args[0], &type);
    if (type != napi_string)
    {
        status = napi_create_string_utf8(env, "Error : Wrong type - NDI url_source", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &url_sourcel);
    url_source = (char *)malloc(url_sourcel + 1);
    status = napi_get_value_string_utf8(env, args[0], (char *)url_source, url_sourcel + 1, &url_sourcel);

    printf("NDI url_source Url : %s \n", url_source);

    const char *target = NULL;
    size_t targetl;

    status = napi_typeof(env, args[1], &type);
    if (type != napi_string)
    {
        printf("Wrong type - NDI Target \n");
        return NULL;
    }

    status = napi_get_value_string_utf8(env, args[1], NULL, 0, &targetl);
    target = (char *)malloc(targetl + 1);
    status = napi_get_value_string_utf8(env, args[1], (char *)target, targetl + 1, &targetl);

    printf("NDI Target Name : %s \n", target);

    int target_index;
    status = napi_get_value_int32(env, args[2], &target_index);

    // Populate carrier with new instance
    NDIlib_source_t *ndi_source = new NDIlib_source_t();
    ndi_source->p_ndi_name = "";
    ndi_source->p_url_address = url_source;


    // Create NDI target
    NDIlib_routing_create_t NDI_send_create_desc;
    NDI_send_create_desc.p_ndi_name = target;


    // We create the NDI routing
    pNDI_routing[target_index] = NDIlib_routing_create(&NDI_send_create_desc);
    if (!pNDI_routing[target_index])
        return NULL;

    NDIlib_routing_change(pNDI_routing[target_index], ndi_source);

    printf("NDI Routing initialized!!!! \n");
    status = napi_create_string_utf8(env, "completed", NAPI_AUTO_LENGTH, &result);

    assert(status == napi_ok);
    return result;
}

static napi_value Init(napi_env env, napi_value exports)
{
    napi_value initialize_fn;
    napi_status status;
    status = napi_create_function(
        env, "", NAPI_AUTO_LENGTH, initializeRouting, NULL, &initialize_fn);

    status = napi_set_named_property(env, exports, "initializeRouting", initialize_fn);
    if (status != napi_ok)
        return NULL;

    napi_value change_source_fn;
    status = napi_create_function(
        env, "", NAPI_AUTO_LENGTH, changeRoutingSource, NULL, &change_source_fn);

    status = napi_set_named_property(env, exports, "changeRoutingSource", change_source_fn);
    if (status != napi_ok)
        return NULL;

    assert(status == napi_ok);
    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
