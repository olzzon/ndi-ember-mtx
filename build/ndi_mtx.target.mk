# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := ndi_mtx
### Generated for copy rule.
$(srcdir)/build/Release/libndi.4.dylib: TOOLSET := $(TOOLSET)
$(srcdir)/build/Release/libndi.4.dylib: $(srcdir)/lib/mac_x64/libndi.4.dylib FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(srcdir)/build/Release/libndi.4.dylib
binding_gyp_ndi_mtx_target_copies = $(srcdir)/build/Release/libndi.4.dylib

DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=ndi_mtx' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++1y \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-std=c++11 \
	-stdlib=libc++ \
	-fexceptions

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/include/node \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/src \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/openssl/config \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/openssl/openssl/include \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/uv/include \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/zlib \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/v8/include \
	-I$(srcdir)/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=ndi_mtx' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-gdwarf-2 \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++1y \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-std=c++11 \
	-stdlib=libc++ \
	-fexceptions

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/include/node \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/src \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/openssl/config \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/openssl/openssl/include \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/uv/include \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/zlib \
	-I/Users/olzzon/Library/Caches/node-gyp/12.22.1/deps/v8/include \
	-I$(srcdir)/include

OBJS := \
	$(obj).target/$(TARGET)/src_c/ndi_mtx.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# Make sure our actions/rules run before any of us.
$(OBJS): | $(binding_gyp_ndi_mtx_target_copies)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
# Build our special outputs first.
$(builddir)/ndi_mtx.node: | $(binding_gyp_ndi_mtx_target_copies)

# Preserve order dependency of special output on deps.
$(binding_gyp_ndi_mtx_target_copies): | 

LDFLAGS_Debug := \
	-Wl,-rpath,/Users/olzzon/coding/ndi-ember-mtx/build/Release \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-Wl,-rpath,/Users/olzzon/coding/ndi-ember-mtx/build/Release \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-Wl,-rpath,/Users/olzzon/coding/ndi-ember-mtx/build/Release \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-Wl,-rpath,/Users/olzzon/coding/ndi-ember-mtx/build/Release \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LIBS := \
	/Users/olzzon/coding/ndi-ember-mtx/build/Release/libndi.4.dylib

$(builddir)/ndi_mtx.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/ndi_mtx.node: LIBS := $(LIBS)
$(builddir)/ndi_mtx.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/ndi_mtx.node: TOOLSET := $(TOOLSET)
$(builddir)/ndi_mtx.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/ndi_mtx.node
# Add target alias
.PHONY: ndi_mtx
ndi_mtx: $(builddir)/ndi_mtx.node

# Short alias for building this executable.
.PHONY: ndi_mtx.node
ndi_mtx.node: $(builddir)/ndi_mtx.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/ndi_mtx.node

