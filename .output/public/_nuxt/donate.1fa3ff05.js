import{u as Z,c as ie}from"./index.3334e9f0.js";import{a as le,r as w,b as G,e as ce,f as U,w as F,u as v,h as ue,i as x,j as pe,k as de,l as L,F as q,m as H,p as fe,q as B,s as V,t as K,o as P,v as R,x as k,y as W,z as A,A as he,B as N,C as ye,D as me,E as _e,G as ge,c as ve}from"./entry.74a160eb.js";const be=()=>null;function we(...t){var p,g,D,S,d,_,b;const s=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(s);let[r,e,n={}]=t;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=(p=n.server)!=null?p:!0,n.default=(g=n.default)!=null?g:be,n.lazy=(D=n.lazy)!=null?D:!1,n.immediate=(S=n.immediate)!=null?S:!0;const a=le(),i=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],l=()=>i()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:w((b=(_=i())!=null?_:(d=n.default)==null?void 0:d.call(n))!=null?b:null),pending:w(!l()),error:w(a.payload._errors[r]?G(a.payload._errors[r]):null)});const o={...a._asyncData[r]};o.refresh=o.execute=(y={})=>{if(a._asyncDataPromises[r]){if(y.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(y._initial&&l())return i();o.pending.value=!0;const m=new Promise((f,j)=>{try{f(e(a))}catch($){j($)}}).then(f=>{if(m.cancelled)return a._asyncDataPromises[r];n.transform&&(f=n.transform(f)),n.pick&&(f=Se(f,n.pick)),o.data.value=f,o.error.value=null}).catch(f=>{var j,$;if(m.cancelled)return a._asyncDataPromises[r];o.error.value=f,o.data.value=v(($=(j=n.default)==null?void 0:j.call(n))!=null?$:null)}).finally(()=>{m.cancelled||(o.pending.value=!1,a.payload.data[r]=o.data.value,o.error.value&&(a.payload._errors[r]=G(o.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=m,a._asyncDataPromises[r]};const u=()=>o.refresh({_initial:!0}),c=n.server!==!1&&a.payload.serverRendered;{const y=ue();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const f=y._nuxtOnBeforeMountCbs;y&&(ce(()=>{f.forEach(j=>{j()}),f.splice(0,f.length)}),U(()=>f.splice(0,f.length)))}c&&a.isHydrating&&l()?o.pending.value=!1:y&&(a.payload.serverRendered&&a.isHydrating||n.lazy)&&n.immediate?y._nuxtOnBeforeMountCbs.push(u):n.immediate&&u(),n.watch&&F(n.watch,()=>o.refresh());const m=a.hook("app:data:refresh",f=>{if(!f||f.includes(r))return o.refresh()});y&&U(m)}const h=Promise.resolve(a._asyncDataPromises[r]).then(()=>o);return Object.assign(h,o),h}function Se(t,s){const r={};for(const e of s)r[e]=t[e];return r}const ke={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function xe(t,s={}){s={...ke,...s};const r=Q(s);return r.dispatch(t),r.toString()}function Q(t){const s=[];let r=[];const e=n=>{s.push(n)};return{toString(){return s.join("")},getContext(){return r},dispatch(n){return t.replacer&&(n=t.replacer(n)),this["_"+(n===null?"null":typeof n)](n)},_object(n){const a=/\[object (.*)]/i,i=Object.prototype.toString.call(n),l=a.exec(i),o=l?l[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let u=null;if((u=r.indexOf(n))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(n),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(n))return e("buffer:"),e(n.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](n);else{if(t.ignoreUnknown)return e("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let c=Object.keys(n);t.unorderedObjects&&(c=c.sort()),t.respectType!==!1&&!J(n)&&c.splice(0,0,"prototype","__proto__","letructor"),t.excludeKeys&&(c=c.filter(function(h){return!t.excludeKeys(h)})),e("object:"+c.length+":");for(const h of c)this.dispatch(h),e(":"),t.excludeValues||this.dispatch(n[h]),e(",")}},_array(n,a){if(a=typeof a<"u"?a:t.unorderedArrays!==!1,e("array:"+n.length+":"),!a||n.length<=1){for(const o of n)this.dispatch(o);return}const i=[],l=n.map(o=>{const u=Q(t);return u.dispatch(o),i.push(u.getContext()),u.toString()});return r=[...r,...i],l.sort(),this._array(l,!1)},_date(n){return e("date:"+n.toJSON())},_symbol(n){return e("symbol:"+n.toString())},_error(n){return e("error:"+n.toString())},_boolean(n){return e("bool:"+n.toString())},_string(n){e("string:"+n.length+":"),e(n.toString())},_function(n){e("fn:"),J(n)?this.dispatch("[native]"):this.dispatch(n.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),t.respectFunctionProperties&&this._object(n)},_number(n){return e("number:"+n.toString())},_xml(n){return e("xml:"+n.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(n){return e("regex:"+n.toString())},_uint8array(n){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint8clampedarray(n){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},_int8array(n){return e("int8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint16array(n){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},_int16array(n){return e("int16array:"),this.dispatch(Array.prototype.slice.call(n))},_uint32array(n){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},_int32array(n){return e("int32array:"),this.dispatch(Array.prototype.slice.call(n))},_float32array(n){return e("float32array:"),this.dispatch(Array.prototype.slice.call(n))},_float64array(n){return e("float64array:"),this.dispatch(Array.prototype.slice.call(n))},_arraybuffer(n){return e("arraybuffer:"),this.dispatch(new Uint8Array(n))},_url(n){return e("url:"+n.toString())},_map(n){e("map:");const a=[...n];return this._array(a,t.unorderedSets!==!1)},_set(n){e("set:");const a=[...n];return this._array(a,t.unorderedSets!==!1)},_file(n){return e("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},_blob(){if(t.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(n){return e("bigint:"+n.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function J(t){return typeof t!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(t))!=null}class O{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||Be).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new O([...this.words])}}const Be={stringify(t){const s=[];for(let r=0;r<t.sigBytes;r++){const e=t.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},De={stringify(t){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<t.sigBytes;e+=3){const n=t.words[e>>>2]>>>24-e%4*8&255,a=t.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=t.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=n<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<t.sigBytes*8;o++)r.push(s.charAt(l>>>6*(3-o)&63))}return r.join("")}},je={parse(t){const s=t.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(t.charCodeAt(e)&255)<<24-e%4*8;return new O(r,s)}},Ce={parse(t){return je.parse(unescape(encodeURIComponent(t)))}};class Oe{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new O,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Ce.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const n=e*this.blockSize,a=Math.min(n*4,this._data.sigBytes);if(n){for(let i=0;i<n;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,n),this._data.sigBytes-=a}return new O(r,a)}}class Pe extends Oe{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const Ee=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],$e=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],C=[];class Ae extends Pe{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new O([...Ee])}_doProcessBlock(s,r){const e=this._hash.words;let n=e[0],a=e[1],i=e[2],l=e[3],o=e[4],u=e[5],c=e[6],h=e[7];for(let p=0;p<64;p++){if(p<16)C[p]=s[r+p]|0;else{const y=C[p-15],m=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,f=C[p-2],j=(f<<15|f>>>17)^(f<<13|f>>>19)^f>>>10;C[p]=m+C[p-7]+j+C[p-16]}const g=o&u^~o&c,D=n&a^n&i^a&i,S=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),d=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),_=h+d+g+$e[p]+C[p],b=S+D;h=c,c=u,u=o,o=l+_|0,l=i,i=a,a=n,n=_+b|0}e[0]=e[0]+n|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+l|0,e[4]=e[4]+o|0,e[5]=e[5]+u|0,e[6]=e[6]+c|0,e[7]=e[7]+h|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Ne(t){return new Ae().finalize(t).toString(De)}function Te(t,s={}){const r=typeof t=="string"?t:xe(t,s);return Ne(r).slice(0,10)}function Ue(t,s,r){const[e={},n]=typeof s=="string"?[{},s]:[s,r],a=e.key||Te([n,v(e.baseURL),typeof t=="string"?t:"",v(e.params)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const i=a===n?"$f"+a:a,l=x(()=>{let m=t;return typeof m=="function"&&(m=m()),v(m)}),{server:o,lazy:u,default:c,transform:h,pick:p,watch:g,immediate:D,...S}=e,d=pe({...S,cache:typeof e.cache=="boolean"?void 0:e.cache}),_={server:o,lazy:u,default:c,transform:h,pick:p,immediate:D,watch:[d,l,...g||[]]};let b;return we(i,()=>{var m;return(m=b==null?void 0:b.abort)==null||m.call(b),b=typeof AbortController<"u"?new AbortController:{},$fetch(l.value,{signal:b.signal,...d})},_)}function X(t,s,...r){if(t in s){let n=s[t];return typeof n=="function"?n(...r):n}let e=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(s).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,X),e}var He=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(He||{}),Re=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Re||{});function E({visible:t=!0,features:s=0,ourProps:r,theirProps:e,...n}){var a;let i=ze(e,r),l=Object.assign(n,{props:i});if(t||s&2&&i.static)return z(l);if(s&1){let o=(a=i.unmount)==null||a?0:1;return X(o,{[0](){return null},[1](){return z({...n,props:{...i,hidden:!0,style:{display:"none"}}})}})}return z(l)}function z({props:t,attrs:s,slots:r,slot:e,name:n}){var a;let{as:i,...l}=te(t,["unmount","static"]),o=(a=r.default)==null?void 0:a.call(r,e),u={};if(e){let c=!1,h=[];for(let[p,g]of Object.entries(e))typeof g=="boolean"&&(c=!0),g===!0&&h.push(p);c&&(u["data-headlessui-state"]=h.join(" "))}if(i==="template"){if(o=ee(o!=null?o:[]),Object.keys(l).length>0||Object.keys(s).length>0){let[c,...h]=o!=null?o:[];if(!Me(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(s)).sort((p,g)=>p.localeCompare(g)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return de(c,Object.assign({},l,u))}return Array.isArray(o)&&o.length===1?o[0]:o}return L(i,Object.assign({},l,u),{default:()=>o})}function ee(t){return t.flatMap(s=>s.type===q?ee(s.children):[s])}function ze(...t){if(t.length===0)return{};if(t.length===1)return t[0];let s={},r={};for(let e of t)for(let n in e)n.startsWith("on")&&typeof e[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(e[n])):s[n]=e[n];if(s.disabled||s["aria-disabled"])return Object.assign(s,Object.fromEntries(Object.keys(r).map(e=>[e,void 0])));for(let e in r)Object.assign(s,{[e](n,...a){let i=r[e];for(let l of i){if(n instanceof Event&&n.defaultPrevented)return;l(n,...a)}}});return s}function Le(t){let s=Object.assign({},t);for(let r in s)s[r]===void 0&&delete s[r];return s}function te(t,s=[]){let r=Object.assign({},t);for(let e of s)e in r&&delete r[e];return r}function Me(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let Fe=0;function Ve(){return++Fe}function I(){return Ve()}var M=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(M||{});function T(t){var s;return t==null||t.value==null?null:(s=t.value.$el)!=null?s:t.value}function Y(t,s){if(t)return t;let r=s!=null?s:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ke(t,s){let r=w(Y(t.value.type,t.value.as));return H(()=>{r.value=Y(t.value.type,t.value.as)}),fe(()=>{var e;r.value||!T(s)||T(s)instanceof HTMLButtonElement&&!((e=T(s))!=null&&e.hasAttribute("type"))&&(r.value="button")}),r}var ne=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(ne||{});let Ie=B({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:s,attrs:r}){return()=>{let{features:e,...n}=t,a={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return E({ourProps:a,theirProps:n,slot:{},attrs:r,slots:s,name:"Hidden"})}}});function Ge(t){var s;let r=(s=t==null?void 0:t.form)!=null?s:t.closest("form");if(r){for(let e of r.elements)if(e.tagName==="INPUT"&&e.type==="submit"||e.tagName==="BUTTON"&&e.type==="submit"||e.nodeName==="INPUT"&&e.type==="image"){e.click();return}}}function We(t,s,r){let e=w(r==null?void 0:r.value),n=x(()=>t.value!==void 0);return[x(()=>n.value?t.value:e.value),function(a){return n.value||(e.value=a),s==null?void 0:s(a)}]}let re=Symbol("DescriptionContext");function Je(){let t=K(re,null);if(t===null)throw new Error("Missing parent");return t}function Ye({slot:t=w({}),name:s="Description",props:r={}}={}){let e=w([]);function n(a){return e.value.push(a),()=>{let i=e.value.indexOf(a);i!==-1&&e.value.splice(i,1)}}return V(re,{register:n,slot:t,name:s,props:r}),x(()=>e.value.length>0?e.value.join(" "):void 0)}let ft=B({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${I()}`}},setup(t,{attrs:s,slots:r}){let e=Je();return H(()=>U(e.register(t.id))),()=>{let{name:n="Description",slot:a=w({}),props:i={}}=e,{id:l,...o}=t,u={...Object.entries(i).reduce((c,[h,p])=>Object.assign(c,{[h]:v(p)}),{}),id:l};return E({ourProps:u,theirProps:o,slot:a.value,attrs:s,slots:r,name:n})}}}),se=Symbol("LabelContext");function ae(){let t=K(se,null);if(t===null){let s=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(s,ae),s}return t}function Ze({slot:t={},name:s="Label",props:r={}}={}){let e=w([]);function n(a){return e.value.push(a),()=>{let i=e.value.indexOf(a);i!==-1&&e.value.splice(i,1)}}return V(se,{register:n,slot:t,name:s,props:r}),x(()=>e.value.length>0?e.value.join(" "):void 0)}let ht=B({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${I()}`}},setup(t,{slots:s,attrs:r}){let e=ae();return H(()=>U(e.register(t.id))),()=>{let{name:n="Label",slot:a={},props:i={}}=e,{id:l,passive:o,...u}=t,c={...Object.entries(i).reduce((h,[p,g])=>Object.assign(h,{[p]:v(g)}),{}),id:l};return o&&(delete c.onClick,delete u.onClick),E({ourProps:c,theirProps:u,slot:a,attrs:r,slots:s,name:n})}}}),oe=Symbol("GroupContext");B({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:s,attrs:r}){let e=w(null),n=Ze({name:"SwitchLabel",props:{onClick(){!e.value||(e.value.click(),e.value.focus({preventScroll:!0}))}}}),a=Ye({name:"SwitchDescription"});return V(oe,{switchRef:e,labelledby:n,describedby:a}),()=>E({theirProps:t,ourProps:{},slot:{},slots:s,attrs:r,name:"SwitchGroup"})}});let qe=B({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${I()}`}},inheritAttrs:!1,setup(t,{emit:s,attrs:r,slots:e,expose:n}){let a=K(oe,null),[i,l]=We(x(()=>t.modelValue),d=>s("update:modelValue",d),x(()=>t.defaultChecked));function o(){l(!i.value)}let u=w(null),c=a===null?u:a.switchRef,h=Ke(x(()=>({as:t.as,type:r.type})),c);n({el:c,$el:c});function p(d){d.preventDefault(),o()}function g(d){d.key===M.Space?(d.preventDefault(),o()):d.key===M.Enter&&Ge(d.currentTarget)}function D(d){d.preventDefault()}let S=x(()=>{var d,_;return(_=(d=T(c))==null?void 0:d.closest)==null?void 0:_.call(d,"form")});return H(()=>{F([S],()=>{if(!S.value||t.defaultChecked===void 0)return;function d(){l(t.defaultChecked)}return S.value.addEventListener("reset",d),()=>{var _;(_=S.value)==null||_.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{id:d,name:_,value:b,...y}=t,m={checked:i.value},f={id:d,ref:c,role:"switch",type:h.value,tabIndex:0,"aria-checked":i.value,"aria-labelledby":a==null?void 0:a.labelledby.value,"aria-describedby":a==null?void 0:a.describedby.value,onClick:p,onKeyup:g,onKeypress:D};return L(q,[_!=null&&i.value!=null?L(Ie,Le({features:ne.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,name:_,value:b})):null,E({ourProps:f,theirProps:{...r,...te(y,["modelValue","defaultChecked"])},slot:m,attrs:r,slots:e,name:"Switch"})])}}});const Qe=k("span",{class:"sr-only"},"Enable notifications",-1),Xe=B({__name:"SwitchComp",props:{left:null,right:null,name:null,value:null},setup(t){const s=t,r=w(!1),{switchwrap:e,switchcomponent:n,switchcomponentspan:a}=Z(),i=()=>{const l=r.value?s.right:s.left;s.value(l)};return i(),F(r,()=>i()),(l,o)=>(P(),R("div",{"aria-label":"switchwrap","data-name":"form-group gender",class:N(v(e))},[k("span",null,W(s.left),1),A(v(qe),{modelValue:v(r),"onUpdate:modelValue":o[0]||(o[0]=u=>ye(r)?r.value=u:null),name:s.name,class:N(v(n)({enabled:v(r),left:"bg-pink-400",right:"bg-blue-400"}))},{default:he(()=>[Qe,k("span",{class:N(v(a)({enabled:v(r),left:"translate-x-6",right:"translate-x-1"}))},null,2)]),_:1},8,["modelValue","name","class"]),k("span",null,W(s.right),1)],2))}});const et={},tt={"aria-label":"spinloader",class:"spin-loader"};function nt(t,s){return P(),R("div",tt)}const rt=me(et,[["render",nt]]),st={viewBox:"0 0 44.979167 44.979166",version:"1.1",id:"svg5","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},at=k("defs",{id:"defs2"},null,-1),ot=k("path",{id:"path1000",style:{fill:"#000000","fill-opacity":"1","stroke-width":"0.752043"},d:"m 35.298233,17.6994 a 9.6076927,9.6076927 0 0 0 -9.607683,9.607683 9.6076927,9.6076927 0 0 0 9.607683,9.607682 9.6076927,9.6076927 0 0 0 9.607682,-9.607682 9.6076927,9.6076927 0 0 0 -9.607682,-9.607683 z m -0.28112,2.927987 h 1.116211 v 1.509469 c 0.856501,0.126369 1.52811,0.479523 2.014864,1.059883 0.491436,0.575682 0.737423,1.308019 0.737423,2.197282 h -2.372982 c 0,-0.486754 -0.09339,-0.86083 -0.280603,-1.122929 -0.187214,-0.262098 -0.454124,-0.393257 -0.800468,-0.393257 -0.308902,0 -0.549781,0.0985 -0.722953,0.295072 -0.168493,0.191894 -0.253215,0.458287 -0.253215,0.799951 0,0.346345 0.0985,0.622439 0.295073,0.828373 0.196573,0.201255 0.512475,0.395697 0.947745,0.582911 0.435271,0.182533 0.845078,0.374421 1.228866,0.575675 0.388468,0.196574 0.722736,0.421122 1.003556,0.673861 0.28082,0.252738 0.500777,0.547716 0.659908,0.8847 0.159132,0.336984 0.238745,0.741683 0.238745,1.214396 0,0.800338 -0.255171,1.453578 -0.765328,1.959054 -0.505476,0.505476 -1.195452,0.799938 -2.070674,0.884184 v 1.411283 H 34.87707 V 32.569294 C 33.856757,32.461646 33.072357,32.113085 32.524759,31.523363 31.98184,30.92896 31.710855,30.147115 31.710855,29.178286 h 2.365747 c 0,0.533558 0.116867,0.940811 0.350883,1.221631 0.238697,0.27614 0.57552,0.413928 1.010791,0.413928 0.318263,0 0.568842,-0.09339 0.751375,-0.280603 0.182533,-0.191893 0.273885,-0.454211 0.273885,-0.786515 0,-0.369746 -0.09135,-0.659616 -0.273885,-0.870231 -0.182533,-0.210614 -0.503025,-0.409649 -0.961698,-0.596863 -0.458673,-0.187213 -0.882256,-0.376547 -1.270724,-0.568441 -0.388467,-0.191893 -0.723253,-0.414405 -1.004073,-0.667142 -0.28082,-0.252739 -0.496185,-0.545162 -0.645955,-0.877466 -0.149771,-0.332304 -0.224276,-0.734965 -0.224276,-1.207678 0,-0.790977 0.266394,-1.441663 0.799951,-1.951819 0.533558,-0.514837 1.244973,-0.814407 2.134237,-0.898653 z"},null,-1),it=B({__name:"DonateIcon",props:{fill:null},setup(t){const s=t,r=w(`fill:${s.fill?s.fill:"#282828"};stroke-width:0.264583`);return(e,n)=>(P(),R("svg",st,[at,k("path",{id:"path302",style:_e(v(r)),d:"M 12.54975,2.9121893 C 9.3576998,2.9390098 6.1440144,4.1787041 3.735818,6.5869004 -0.18689806,10.509617 -1.0459263,16.36616 1.5824611,21.271792 2.0734606,22.188201 5.3190052,25.696904 11.820079,32.340367 l 9.518282,9.727055 3.088701,-3.080949 2.977079,-2.968811 a 11.696321,11.696321 0 0 1 -3.941362,-8.737968 11.696321,11.696321 0 0 1 11.695927,-11.696444 11.696321,11.696321 0 0 1 7.467245,2.695443 c 0.06195,-0.294943 0.149184,-1.118791 0.213424,-2.059306 C 43.091834,12.523081 41.848617,9.2031677 39.23236,6.5869004 34.713154,2.067695 27.300398,1.6700892 22.598233,5.6949651 L 21.484089,6.6494289 20.379247,5.7037501 C 18.165699,3.8090364 15.366266,2.8885241 12.54975,2.9121893 Z"},null,4),ot]))}});const lt=k("div",null,"Kindly make your selection",-1),ct=k("div",null,"Submit",-1),ut=B({__name:"DonateComponent",setup(t){const s=w({txReference:`john-doe${Date.now()}`,amount:"500",currency:"NGN",customer:{email:"john.doe@gmail.com",name:"John Doe",phonenumber:"+234 815 310 8276"},meta:{consumer_id:Date.now(),consumer_mac:`john-doe${Date.now()}`}}),{btn:r}=Z(),e=a=>s.value.currency=a,n=async()=>{const a={headers:{"Content-type":"multipart/form-data"},method:"POST",body:s.value},{data:i}=await Ue(ie.donateApiUrl,a,"$b0E5OmSRaO"),l=i.value;ge(l.data.link,{external:!0})};return(a,i)=>{const l=Xe,o=rt,u=it;return P(),R("div",null,[lt,A(l,{left:"NGN",right:"USD",name:"currency",value:e}),k("div",{class:N(v(r)),onClick:n},[A(o),A(u),ct],2)])}}}),yt=B({__name:"donate",setup(t){return(s,r)=>{const e=ut;return P(),ve(e)}}});export{yt as default};