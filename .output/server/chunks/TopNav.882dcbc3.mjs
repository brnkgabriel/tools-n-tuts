import { a as __nuxt_component_0$1 } from './server.mjs';
import { u as useUi } from './index.8cd9be93.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + globalThis.__publicAssetsURL("icons/logo.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TopNav",
  __ssrInlineRender: true,
  props: {
    avatar: null,
    userName: null
  },
  setup(__props) {
    const {
      topnavwrap,
      topnavlogo,
      btn
    } = useUi();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(topnavwrap) }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/",
        class: "flex justify-center items-center gap-x-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="${ssrRenderClass(unref(topnavlogo))}"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}><div class="font-medium text-sm"${_scopeId}>Tools n Tuts</div>`);
          } else {
            return [
              createVNode("img", {
                class: unref(topnavlogo),
                src: _imports_0,
                alt: "logo"
              }, null, 2),
              createVNode("div", { class: "font-medium text-sm" }, "Tools n Tuts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/donate",
        class: unref(btn)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate `);
          } else {
            return [
              createTextVNode(" Donate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _imports_0 as a };
//# sourceMappingURL=TopNav.882dcbc3.mjs.map
