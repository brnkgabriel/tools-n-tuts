import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode } from 'vue';
import { u as useUi } from './index.8cd9be93.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { Switch } from '@headlessui/vue';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SwitchComp",
  __ssrInlineRender: true,
  props: {
    left: null,
    right: null,
    name: null,
    value: null
  },
  setup(__props) {
    const props = __props;
    const enabled = ref(false);
    const {
      switchwrap,
      switchcomponent,
      switchcomponentspan
    } = useUi();
    const setGender = () => {
      const gender = enabled.value ? props.right : props.left;
      props.value(gender);
    };
    setGender();
    watch(enabled, () => setGender());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "aria-label": "switchwrap",
        "data-name": "form-group gender",
        class: unref(switchwrap)
      }, _attrs))}><span>${ssrInterpolate(props.left)}</span>`);
      _push(ssrRenderComponent(unref(Switch), {
        modelValue: unref(enabled),
        "onUpdate:modelValue": ($event) => isRef(enabled) ? enabled.value = $event : null,
        name: props.name,
        class: unref(switchcomponent)({ enabled: unref(enabled), left: "bg-pink-400", right: "bg-blue-400" })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Enable notifications</span><span class="${ssrRenderClass(unref(switchcomponentspan)({ enabled: unref(enabled), left: "translate-x-6", right: "translate-x-1" }))}"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Enable notifications"),
              createVNode("span", {
                class: unref(switchcomponentspan)({ enabled: unref(enabled), left: "translate-x-6", right: "translate-x-1" })
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>${ssrInterpolate(props.right)}</span></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SwitchComp.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    "aria-label": "spinloader",
    class: "spin-loader"
  }, _attrs))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Spinloader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DonateIcon",
  __ssrInlineRender: true,
  props: {
    fill: null
  },
  setup(__props) {
    const props = __props;
    const style = ref(`fill:${props.fill ? props.fill : "#282828"};stroke-width:0.264583`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 44.979167 44.979166",
        version: "1.1",
        id: "svg5",
        "xml:space": "preserve",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:svg": "http://www.w3.org/2000/svg"
      }, _attrs))}><defs id="defs2"></defs><path id="path302" style="${ssrRenderStyle(unref(style))}" d="M 12.54975,2.9121893 C 9.3576998,2.9390098 6.1440144,4.1787041 3.735818,6.5869004 -0.18689806,10.509617 -1.0459263,16.36616 1.5824611,21.271792 2.0734606,22.188201 5.3190052,25.696904 11.820079,32.340367 l 9.518282,9.727055 3.088701,-3.080949 2.977079,-2.968811 a 11.696321,11.696321 0 0 1 -3.941362,-8.737968 11.696321,11.696321 0 0 1 11.695927,-11.696444 11.696321,11.696321 0 0 1 7.467245,2.695443 c 0.06195,-0.294943 0.149184,-1.118791 0.213424,-2.059306 C 43.091834,12.523081 41.848617,9.2031677 39.23236,6.5869004 34.713154,2.067695 27.300398,1.6700892 22.598233,5.6949651 L 21.484089,6.6494289 20.379247,5.7037501 C 18.165699,3.8090364 15.366266,2.8885241 12.54975,2.9121893 Z"></path><path id="path1000" style="${ssrRenderStyle({ "fill": "#000000", "fill-opacity": "1", "stroke-width": "0.752043" })}" d="m 35.298233,17.6994 a 9.6076927,9.6076927 0 0 0 -9.607683,9.607683 9.6076927,9.6076927 0 0 0 9.607683,9.607682 9.6076927,9.6076927 0 0 0 9.607682,-9.607682 9.6076927,9.6076927 0 0 0 -9.607682,-9.607683 z m -0.28112,2.927987 h 1.116211 v 1.509469 c 0.856501,0.126369 1.52811,0.479523 2.014864,1.059883 0.491436,0.575682 0.737423,1.308019 0.737423,2.197282 h -2.372982 c 0,-0.486754 -0.09339,-0.86083 -0.280603,-1.122929 -0.187214,-0.262098 -0.454124,-0.393257 -0.800468,-0.393257 -0.308902,0 -0.549781,0.0985 -0.722953,0.295072 -0.168493,0.191894 -0.253215,0.458287 -0.253215,0.799951 0,0.346345 0.0985,0.622439 0.295073,0.828373 0.196573,0.201255 0.512475,0.395697 0.947745,0.582911 0.435271,0.182533 0.845078,0.374421 1.228866,0.575675 0.388468,0.196574 0.722736,0.421122 1.003556,0.673861 0.28082,0.252738 0.500777,0.547716 0.659908,0.8847 0.159132,0.336984 0.238745,0.741683 0.238745,1.214396 0,0.800338 -0.255171,1.453578 -0.765328,1.959054 -0.505476,0.505476 -1.195452,0.799938 -2.070674,0.884184 v 1.411283 H 34.87707 V 32.569294 C 33.856757,32.461646 33.072357,32.113085 32.524759,31.523363 31.98184,30.92896 31.710855,30.147115 31.710855,29.178286 h 2.365747 c 0,0.533558 0.116867,0.940811 0.350883,1.221631 0.238697,0.27614 0.57552,0.413928 1.010791,0.413928 0.318263,0 0.568842,-0.09339 0.751375,-0.280603 0.182533,-0.191893 0.273885,-0.454211 0.273885,-0.786515 0,-0.369746 -0.09135,-0.659616 -0.273885,-0.870231 -0.182533,-0.210614 -0.503025,-0.409649 -0.961698,-0.596863 -0.458673,-0.187213 -0.882256,-0.376547 -1.270724,-0.568441 -0.388467,-0.191893 -0.723253,-0.414405 -1.004073,-0.667142 -0.28082,-0.252739 -0.496185,-0.545162 -0.645955,-0.877466 -0.149771,-0.332304 -0.224276,-0.734965 -0.224276,-1.207678 0,-0.790977 0.266394,-1.441663 0.799951,-1.951819 0.533558,-0.514837 1.244973,-0.814407 2.134237,-0.898653 z"></path></svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DonateIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DonateComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const donateRef = ref({
      txReference: `john-doe${Date.now()}`,
      amount: "500",
      currency: "NGN",
      customer: {
        email: "john.doe@gmail.com",
        name: "John Doe",
        phonenumber: "+234 815 310 8276"
      },
      meta: {
        consumer_id: Date.now(),
        consumer_mac: `john-doe${Date.now()}`
      }
    });
    const { btn } = useUi();
    const updateCurrency = (value) => donateRef.value.currency = value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SwitchComp = _sfc_main$4;
      const _component_Spinloader = __nuxt_component_1;
      const _component_DonateIcon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>Kindly make your selection</div>`);
      _push(ssrRenderComponent(_component_SwitchComp, {
        left: "NGN",
        right: "USD",
        name: "currency",
        value: updateCurrency
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(unref(btn))}">`);
      _push(ssrRenderComponent(_component_Spinloader, null, null, _parent));
      _push(ssrRenderComponent(_component_DonateIcon, null, null, _parent));
      _push(`<div>Submit</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DonateComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "donate",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DonateComponent = _sfc_main$1;
      _push(ssrRenderComponent(_component_DonateComponent, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/donate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=donate.f76dea1e.mjs.map
