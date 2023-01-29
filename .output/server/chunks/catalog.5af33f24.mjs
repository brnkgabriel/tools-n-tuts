import { _ as _sfc_main$2 } from './TopNav.882dcbc3.mjs';
import { i as imgSrc, u as useUi } from './index.8cd9be93.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BottomNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { btmnavwrap, subline_small, bottomNavLink, bottomNavLinkIcon } = useUi();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "aria-label": "btmnavwrap",
        class: unref(btmnavwrap)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopNav = _sfc_main$2;
  const _component_BottomNav = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-full mx-auto h-full w-screen flex flex-col justify-between items-center font-body relative bg-rcngray-500" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TopNav, {
    avatar: unref(imgSrc)(""),
    "user-name": "user",
    class: "h-[56px] w-full p-2"
  }, null, _parent));
  _push(`<div class="px-2 h-middle w-full my-2 text-sm">`);
  {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_BottomNav, { class: "h-[56px] w-full" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/catalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const catalog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { catalog as default };
//# sourceMappingURL=catalog.5af33f24.mjs.map
