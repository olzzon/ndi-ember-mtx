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
    size_t argc = 2;
    napi_value args[2];
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

    if (argc != (size_t)2)
    {
        status = napi_create_string_utf8(env, "Error : wrong args", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    const char *source = NULL;
    size_t sourcel;

    status = napi_typeof(env, args[0], &type);
    if (type != napi_string)
    {
        status = napi_create_string_utf8(env, "Error : Wrong type - NDI Source", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &sourcel);
    source = (char *)malloc(sourcel + 1);
    status = napi_get_value_string_utf8(env, args[0], (char *)source, sourcel + 1, &sourcel);

    printf("NDI Source Url : %s \n", source);

    // Populate carrier with new instance
    NDIlib_source_t *ndi_source = new NDIlib_source_t();
    ndi_source->p_ndi_name = "";
    ndi_source->p_url_address = source;


    int target_index;
    status = napi_get_value_int32(env, args[1], &target_index);

    NDIlib_routing_change(pNDI_routing[target_index], ndi_source);

    printf("NDI Changing Target Index %i to Source %s \n", target_index, source);
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

    const char *source = NULL;
    size_t sourcel;

    status = napi_typeof(env, args[0], &type);
    if (type != napi_string)
    {
        status = napi_create_string_utf8(env, "Error : Wrong type - NDI Source", NAPI_AUTO_LENGTH, &result);
        return result;
    }

    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &sourcel);
    source = (char *)malloc(sourcel + 1);
    status = napi_get_value_string_utf8(env, args[0], (char *)source, sourcel + 1, &sourcel);

    printf("NDI Source Url : %s \n", source);

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
    ndi_source->p_url_address = source;


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
