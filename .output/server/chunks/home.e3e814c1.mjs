import { _ as _sfc_main$1, a as _imports_0 } from './TopNav.882dcbc3.mjs';
import { a as __nuxt_component_0$1 } from './server.mjs';
import { u as useUi, o as obj2Str } from './index.8cd9be93.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'unenv/runtime/npm/cross-fetch';
import 'events';
import 'unenv/runtime/npm/debug';
import 'util';
import 'crypto';
import 'url';
import 'bufferutil';
import 'buffer';
import 'utf-8-validate';
import 'http';
import 'https';
import 'typedarray-to-buffer';
import 'yaeti';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { logo, homelayoutbottomcontentwrap } = useUi();
    const coverObj = {
      "background-image": "url('/images/background_1920x1080v3.jpg')",
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": "cover"
    };
    const coverStyle = ref(obj2Str(coverObj));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopNav = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-screen font-body overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TopNav, { class: "h-[56px] px-2" }, null, _parent));
      _push(`<div class="grid grid-cols-2 relative content">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/",
        class: unref(logo)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div aria-label="slides" class="relative w-full h-40% overflow-hidden landscape:h-full landscape:w-40%"><div aria-label="slide" class="h-full w-full flex items-center justify-center" style="${ssrRenderStyle(unref(coverStyle))}"></div></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home.e3e814c1.mjs.map
