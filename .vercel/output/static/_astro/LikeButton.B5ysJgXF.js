import{j as Nn}from"./jsx-runtime.D_zvdyIk.js";import{r as fe}from"./index.BVOCwoKb.js";const El="modulepreload",vl=function(n){return"/"+n},Hi={},ra=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),c=u?.nonce||u?.getAttribute("nonce");i=Promise.allSettled(e.map(d=>{if(d=vl(d),d in Hi)return;Hi[d]=!0;const f=d.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const w=document.createElement("link");if(w.rel=f?"stylesheet":El,f||(w.as="script"),w.crossOrigin="",w.href=d,c&&w.setAttribute("nonce",c),document.head.appendChild(w),f)return new Promise((C,S)=>{w.addEventListener("load",C),w.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return i.then(u=>{for(const c of u||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},Tl=()=>{};var Ki={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Il=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,w=(o&3)<<4|c>>4;let C=(c&15)<<2|f>>6,S=f&63;d||(S=64,u||(C=64)),r.push(e[_],e[w],e[C],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(sa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Il(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new wl;const C=o<<2|c>>4;if(r.push(C),f!==64){const S=c<<4&240|f>>2;if(r.push(S),w!==64){const D=f<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Al=function(n){const t=sa(n);return ia.encodeByteArray(t,!0)},qn=function(n){return Al(n).replace(/\./g,"")},Rl=function(n){try{return ia.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=()=>Cl().__FIREBASE_DEFAULTS__,Pl=()=>{if(typeof process>"u"||typeof Ki>"u")return;const n=Ki.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Rl(n[1]);return t&&JSON.parse(t)},gs=()=>{try{return Tl()||Sl()||Pl()||bl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vl=n=>{var t,e;return(e=(t=gs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},oa=n=>{const t=Vl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},aa=()=>{var n;return(n=gs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qn(JSON.stringify(e)),qn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xl(){var n;const t=(n=gs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ol(){return!xl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function Ml(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="FirebaseError";class be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Fl,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Ul(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new be(i,c,r)}}function Ul(n,t){return n.replace(Bl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Bl=/\{\$([^}]+)}/g;function zn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Gi(o)&&Gi(u)){if(!zn(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Gi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){return n&&n._delegate?n._delegate:n}class ve{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ql(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jl(n){return n===ne?void 0:n}function ql(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new $l(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Hl={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Kl=B.INFO,Gl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ql=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Gl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class la{constructor(t){this.name=t,this._logLevel=Kl,this._logHandler=Ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Wl=(n,t)=>t.some(e=>n instanceof e);let Qi,Wi;function Xl(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jl(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ca=new WeakMap,Kr=new WeakMap,ha=new WeakMap,Lr=new WeakMap,ys=new WeakMap;function Yl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(jt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ca.set(e,n)}).catch(()=>{}),ys.set(t,n),t}function Zl(n){if(Kr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Kr.set(n,t)}let Gr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Kr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ha.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function tc(n){Gr=n(Gr)}function ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Mr(this),t,...e);return ha.set(r,t.sort?t.sort():[t]),jt(r)}:Jl().includes(n)?function(...t){return n.apply(Mr(this),t),jt(ca.get(this))}:function(...t){return jt(n.apply(Mr(this),t))}}function nc(n){return typeof n=="function"?ec(n):(n instanceof IDBTransaction&&Zl(n),Wl(n,Xl())?new Proxy(n,Gr):n)}function jt(n){if(n instanceof IDBRequest)return Yl(n);if(Lr.has(n))return Lr.get(n);const t=nc(n);return t!==n&&(Lr.set(n,t),ys.set(t,n)),t}const Mr=n=>ys.get(n);function rc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=jt(u);return r&&u.addEventListener("upgradeneeded",d=>{r(jt(u.result),d.oldVersion,d.newVersion,jt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const sc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],Fr=new Map;function Xi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fr.get(t))return Fr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ic.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sc.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return Fr.set(t,o),o}tc(n=>({...n,get:(t,e,r)=>Xi(t,e)||n.get(t,e,r),has:(t,e)=>!!Xi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ac(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ac(n){const t=n.getComponent();return t?.type==="VERSION"}const Qr="@firebase/app",Ji="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new la("@firebase/app"),uc="@firebase/app-compat",lc="@firebase/analytics-compat",cc="@firebase/analytics",hc="@firebase/app-check-compat",dc="@firebase/app-check",fc="@firebase/auth",pc="@firebase/auth-compat",mc="@firebase/database",gc="@firebase/data-connect",_c="@firebase/database-compat",yc="@firebase/functions",Ec="@firebase/functions-compat",vc="@firebase/installations",Tc="@firebase/installations-compat",Ic="@firebase/messaging",wc="@firebase/messaging-compat",Ac="@firebase/performance",Rc="@firebase/performance-compat",Cc="@firebase/remote-config",Sc="@firebase/remote-config-compat",Pc="@firebase/storage",bc="@firebase/storage-compat",Vc="@firebase/firestore",Dc="@firebase/vertexai",kc="@firebase/firestore-compat",Nc="firebase",xc="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]",Oc={[Qr]:"fire-core",[uc]:"fire-core-compat",[cc]:"fire-analytics",[lc]:"fire-analytics-compat",[dc]:"fire-app-check",[hc]:"fire-app-check-compat",[fc]:"fire-auth",[pc]:"fire-auth-compat",[mc]:"fire-rtdb",[gc]:"fire-data-connect",[_c]:"fire-rtdb-compat",[yc]:"fire-fn",[Ec]:"fire-fn-compat",[vc]:"fire-iid",[Tc]:"fire-iid-compat",[Ic]:"fire-fcm",[wc]:"fire-fcm-compat",[Ac]:"fire-perf",[Rc]:"fire-perf-compat",[Cc]:"fire-rc",[Sc]:"fire-rc-compat",[Pc]:"fire-gcs",[bc]:"fire-gcs-compat",[Vc]:"fire-fst",[kc]:"fire-fst-compat",[Dc]:"fire-vertex","fire-js":"fire-js",[Nc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,Lc=new Map,Xr=new Map;function Yi(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function rn(n){const t=n.name;if(Xr.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,n);for(const e of Hn.values())Yi(e,n);for(const e of Lc.values())Yi(e,n);return!0}function da(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function fa(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new ua("app","Firebase",Mc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=xc;function pa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(e||(e=aa()),!e)throw qt.create("no-options");const o=Hn.get(i);if(o){if(zn(e,o.options)&&zn(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const u=new zl(i);for(const d of Xr.values())u.addComponent(d);const c=new Fc(e,r,u);return Hn.set(i,c),c}function ma(n=Wr){const t=Hn.get(n);if(!t&&n===Wr&&aa())return pa();if(!t)throw qt.create("no-app",{appName:n});return t}function zt(n,t,e){var r;let i=(r=Oc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(c.join(" "));return}rn(new ve(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="firebase-heartbeat-database",$c=1,sn="firebase-heartbeat-store";let Ur=null;function ga(){return Ur||(Ur=rc(Bc,$c,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Ur}async function jc(n){try{const e=(await ga()).transaction(sn),r=await e.objectStore(sn).get(_a(n));return await e.done,r}catch(t){if(t instanceof be)xt.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t?.message});xt.warn(e.message)}}}async function Zi(n,t){try{const r=(await ga()).transaction(sn,"readwrite");await r.objectStore(sn).put(t,_a(n)),await r.done}catch(e){if(e instanceof be)xt.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e?.message});xt.warn(r.message)}}}function _a(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=1024,zc=30;class Hc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=to();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>zc){const u=Qc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=to(),{heartbeatsToSend:r,unsentEntries:i}=Kc(this._heartbeatsCache.heartbeats),o=qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function to(){return new Date().toISOString().substring(0,10)}function Kc(n,t=qc){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),eo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),eo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?Ml().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await jc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function eo(n){return qn(JSON.stringify({version:2,heartbeats:n})).length}function Qc(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){rn(new ve("platform-logger",t=>new oc(t),"PRIVATE")),rn(new ve("heartbeat",t=>new Hc(t),"PRIVATE")),zt(Qr,Ji,n),zt(Qr,Ji,"esm2017"),zt("fire-js","")}Wc("");var Xc="firebase",Jc="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Xc,Jc,"app");var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,ya;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)m[Dt-2]=arguments[Dt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return k(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var w=d(0),C=d(1),S=d(16777216);n=u.prototype,n.m=function(){if(O(this))return-k(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(O(this))return"-"+k(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=rt(g,p).g;g=Q(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,D(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=Q(this,v),O(v)?-1:D(v)?0:1};function k(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(C)}n.abs=function(){return O(this)?k(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function Q(v,p){return v.add(k(p))}n.j=function(v){if(D(this)||D(v))return w;if(O(this))return O(v)?k(this).j(k(v)):k(k(this).j(v));if(O(v))return k(this.j(k(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Dt=v.i(E)>>>16,Ne=v.i(E)&65535;g[2*y+2*E]+=m*Ne,z(g,2*y+2*E),g[2*y+2*E+1]+=I*Ne,z(g,2*y+2*E+1),g[2*y+2*E+1]+=m*Dt,z(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Dt,z(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function z(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function K(v,p){this.g=v,this.h=p}function rt(v,p){if(D(p))throw Error("division by zero");if(D(v))return new K(w,w);if(O(v))return p=rt(k(v),p),new K(k(p.g),k(p.h));if(O(p))return p=rt(v,k(p)),new K(k(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=C,y=p;0>=y.l(v);)g=Vt(g),y=Vt(y);var E=ot(g,1),I=ot(y,1);for(y=ot(y,2),g=ot(g,2);!D(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(g),I=m),y=ot(y,1),g=ot(g,1)}return p=Q(v,E.j(p)),new K(E,p)}for(E=w;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);O(m)||0<m.l(v);)g-=y,I=f(g),m=I.j(p);D(I)&&(I=C),E=E.add(I),v=Q(v,m)}return new K(E,v)}n.A=function(v){return rt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Vt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function ot(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ya=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Ht=u}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});var xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ea,Xe,va,Un,Jr,Ta,Ia,wa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof xn=="object"&&xn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,T={next:function(){if(!h&&l<s.length){var A=l++;return{value:a(A,s[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function w(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function C(s,a,l){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,C.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,T,A){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return a.prototype[T].apply(h,P)}}function O(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function k(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const T=s.length||0,A=h.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=h[P]}else s.push(h)}}class Q{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Vt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ot(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=dr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,l){const h=Ne.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Ne=new Q(()=>new Fu,s=>s.reset());class Fu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Oe=!1,dr=new Dt,Hs=()=>{const s=c.Promise.resolve(void 0);xe=()=>{s.then(Uu)}};var Uu=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){I(l)}var a=Ne;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Oe=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Bu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Le(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Vt){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$u[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Le.aa.h.call(this)}}D(Le,ct);var $u={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),ju=0;function qu(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++ju,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,l,h,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=pr(s,a,h,T);return-1<P?(a=s[P],l||(a.fa=!1)):(a=new qu(a,this.src,A,!!h,T),a.fa=l,s.push(a)),a};function fr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(mn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function pr(s,a,l,h){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return T}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),gr={};function Ks(s,a,l,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ks(s,a[A],l,h,T);return null}return l=Ws(l),s&&s[pn]?s.K(a,l,f(h)?!!h.capture:!1,T):zu(s,a,l,!1,h,T)}function zu(s,a,l,h,T,A){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,H=yr(s);if(H||(s[mr]=H=new gn(s)),l=H.add(a,l,h,P,A),l.proxy)return l;if(h=Hu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)Bu||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Qs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Hu(){function s(l){return a.call(s.src,s.listener,l)}const a=Ku;return s}function Gs(s,a,l,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Gs(s,a[A],l,h,T);else h=f(h)?!!h.capture:!!h,l=Ws(l),s&&s[pn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],l=pr(A,l,h,T),-1<l&&(mn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=yr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=pr(a,l,h,T)),(l=-1<s?a[s]:null)&&_r(l))}function _r(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[pn])fr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(Qs(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=yr(a))?(fr(l,s),l.h==0&&(l.src=null,a[mr]=null)):mn(s)}}}function Qs(s){return s in gr?gr[s]:gr[s]="on"+s}function Ku(s,a){if(s.da)s=!0;else{a=new Le(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&_r(s),s=l.call(h,a)}return s}function yr(s){return s=s[mr],s instanceof gn?s:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ws(s){return typeof s=="function"?s:(s[Er]||(s[Er]=function(a){return s.handleEvent(a)}),s[Er])}function ht(){Lt.call(this),this.i=new gn(this),this.M=this,this.F=null}D(ht,Lt),ht.prototype[pn]=!0,ht.prototype.removeEventListener=function(s,a,l,h){Gs(this,s,a,l,h)};function yt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var T=a;a=new ct(h,s),y(a,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var P=a.g=l[A];T=_n(P,h,!0,a)&&T}if(P=a.g=s,T=_n(P,h,!0,a)&&T,T=_n(P,h,!1,a)&&T,l)for(A=0;A<l.length;A++)P=a.g=l[A],T=_n(P,h,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)mn(l[h]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ht.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function _n(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==l){var H=P.listener,at=P.ha||P.src;P.fa&&fr(s.i,P),T=H.call(at,h)!==!1&&T}}return T&&!h.defaultPrevented}function Xs(s,a,l){if(typeof s=="function")l&&(s=C(s,l));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Js(s){s.g=Xs(()=>{s.g=null,s.i&&(s.i=!1,Js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Gu extends Lt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Js(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(s){Lt.call(this),this.h=s,this.g={}}D(Me,Lt);var Ys=[];function Zs(s){ot(s.g,function(a,l){this.g.hasOwnProperty(l)&&_r(a)},s),s.g={}}Me.prototype.N=function(){Me.aa.N.call(this),Zs(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=c.JSON.stringify,Qu=c.JSON.parse,Wu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Tr(){}Tr.prototype.h=null;function ti(s){return s.h||(s.h=s.i())}function ei(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){ct.call(this,"d")}D(Ir,ct);function wr(){ct.call(this,"c")}D(wr,ct);var Yt={},ni=null;function yn(){return ni=ni||new ht}Yt.La="serverreachability";function ri(s){ct.call(this,Yt.La,s)}D(ri,ct);function Ue(s){const a=yn();yt(a,new ri(a))}Yt.STAT_EVENT="statevent";function si(s,a){ct.call(this,Yt.STAT_EVENT,s),this.stat=a}D(si,ct);function Et(s){const a=yn();yt(a,new si(a,s))}Yt.Ma="timingevent";function ii(s,a){ct.call(this,Yt.Ma,s),this.size=a}D(ii,ct);function Be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function Xu(s,a,l,h,T,A){s.info(function(){if(s.g)if(A)for(var P="",H=A.split("&"),at=0;at<H.length;at++){var q=H[at].split("=");if(1<q.length){var dt=q[0];q=q[1];var ft=dt.split("_");P=2<=ft.length&&ft[1]=="type"?P+(dt+"="+q+"&"):P+(dt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function Ju(s,a,l,h,T,A,P){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+P})}function le(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Zu(s,l)+(h?" "+h:"")})}function Yu(s,a){s.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function Zu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return vr(l)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ar;function vn(){}D(vn,Tr),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Ar=new vn;function Mt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ai}function ai(){this.i=null,this.g="",this.h=!1}var ui={},Rr={};function Cr(s,a,l){s.L=1,s.v=An(kt(a)),s.m=l,s.P=!0,li(s,null)}function li(s,a){s.F=Date.now(),Tn(s),s.A=kt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),wi(l.i,"t",h),s.C=0,l=s.j.J,s.h=new ai,s.g=$i(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Gu(C(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ys[0]=T.toString()),T=Ys);for(var A=0;A<T.length;A++){var P=Ks(l,T[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ue(),Xu(s.i,s.u,s.A,s.l,s.R,s.m)}Mt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Nt(this.g);var a=this.g.Ba();const de=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Vi(this.g)))){this.J||ft!=4||a==7||(a==8||0>=de?Ue(3):Ue(2)),Sr(this);var l=this.g.Z();this.X=l;e:if(ci(this)){var h=Vi(this.g);s="";var T=h.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),je(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,Ju(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,at=this.g;if((H=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(H)){var q=H;break e}}q=null}if(l=q)le(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,l);else{this.o=!1,this.s=3,Et(12),Zt(this),je(this);break t}}if(this.P){l=!0;let wt;for(;!this.J&&this.C<P.length;)if(wt=tl(this,P),wt==Rr){ft==4&&(this.s=4,Et(14),l=!1),le(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==ui){this.s=4,Et(15),le(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else le(this.i,this.l,wt,null),Pr(this,wt);if(ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||P.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)le(this.i,this.l,P,"[Invalid Chunked Response]"),Zt(this),je(this);else if(0<P.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),xr(dt),dt.M=!0,Et(11))}}else le(this.i,this.l,P,null),Pr(this,P);ft==4&&Zt(this),this.o&&!this.J&&(ft==4?Mi(this.j,this):(this.o=!1,Tn(this)))}else _l(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Zt(this),je(this)}}}catch{}finally{}};function ci(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function tl(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Rr:(l=Number(a.substring(l,h)),isNaN(l)?ui:(h+=1,h+l>a.length?Rr:(a=a.slice(h,h+l),s.C=h+l,a)))}Mt.prototype.cancel=function(){this.J=!0,Zt(this)};function Tn(s){s.S=Date.now()+s.I,hi(s,s.I)}function hi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Be(C(s.ba,s),a)}function Sr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Mt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Yu(this.i,this.A),this.L!=2&&(Ue(),Et(17)),Zt(this),this.s=2,je(this)):hi(this,this.S-s)};function je(s){s.j.G==0||s.J||Mi(s.j,s)}function Zt(s){Sr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Zs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Pr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||br(l.h,s))){if(!s.K&&br(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Vn(l),Pn(l);else break t;Nr(l),Et(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Be(C(l.Za,l),6e3));if(1>=pi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ee(l,11)}else if((s.K||l.g==s)&&Vn(l),!z(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let q=T[a];if(l.T=q[0],q=q[1],l.G==2)if(q[0]=="c"){l.K=q[1],l.ia=q[2];const dt=q[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=q[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const de=q[5];de!=null&&typeof de=="number"&&0<de&&(h=1.5*de,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const wt=s.g;if(wt){const kn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var A=h.h;A.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Vr(A,A.h),A.h=null))}if(h.D){const Or=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(h.ya=Or,G(h.I,h.D,Or))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var P=s;if(h.qa=Bi(h,h.J?h.ia:null,h.W),P.K){mi(h.h,P);var H=P,at=h.L;at&&(H.I=at),H.B&&(Sr(H),Tn(H)),h.g=P}else Oi(h);0<l.i.length&&bn(l)}else q[0]!="stop"&&q[0]!="close"||ee(l,7);else l.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?ee(l,7):kr(l):q[0]!="noop"&&l.l&&l.l.ta(q),l.v=0)}}Ue(4)}catch{}}var el=class{constructor(s,a){this.g=s,this.map=a}};function di(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function pi(s){return s.h?1:s.g?s.g.size:0}function br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Vr(s,a){s.g?s.g.add(a):s.h=a}function mi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}di.prototype.cancel=function(){if(this.i=gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function gi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return O(s.i)}function nl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function rl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function _i(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=rl(s),h=nl(s),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],l&&l[A],s)}var yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sl(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),T=null;if(0<=h){var A=s[l].substring(0,h);T=s[l].substring(h+1)}else A=s[l];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function te(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof te){this.h=s.h,In(this,s.j),this.o=s.o,this.g=s.g,wn(this,s.s),this.l=s.l;var a=s.i,l=new He;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ei(this,l),this.m=s.m}else s&&(a=String(s).match(yi))?(this.h=!1,In(this,a[1]||"",!0),this.o=qe(a[2]||""),this.g=qe(a[3]||"",!0),wn(this,a[4]),this.l=qe(a[5]||"",!0),Ei(this,a[6]||"",!0),this.m=qe(a[7]||"")):(this.h=!1,this.i=new He(null,this.h))}te.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ze(a,vi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ze(a,vi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(ze(l,l.charAt(0)=="/"?al:ol,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",ze(l,ll)),s.join("")};function kt(s){return new te(s)}function In(s,a,l){s.j=l?qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function wn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ei(s,a,l){a instanceof He?(s.i=a,cl(s.i,s.h)):(l||(a=ze(a,ul)),s.i=new He(a,s.h))}function G(s,a,l){s.i.set(a,l)}function An(s){return G(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ze(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,il),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function il(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var vi=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ul=/[#\?@]/g,ll=/#/g;function He(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ft(s){s.g||(s.g=new Map,s.h=0,s.i&&sl(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=He.prototype,n.add=function(s,a){Ft(this),this.i=null,s=ce(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ti(s,a){Ft(s),a=ce(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ii(s,a){return Ft(s),a=ce(s,a),s.g.has(a)}n.forEach=function(s,a){Ft(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)},n.na=function(){Ft(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=s[h];for(let A=0;A<T.length;A++)l.push(a[h])}return l},n.V=function(s){Ft(this);let a=[];if(typeof s=="string")Ii(this,s)&&(a=a.concat(this.g.get(ce(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return Ft(this),this.i=null,s=ce(this,s),Ii(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function wi(s,a,l){Ti(s,a),0<l.length&&(s.i=null,s.g.set(ce(s,a),O(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var T=A;P[h]!==""&&(T+="="+encodeURIComponent(String(P[h]))),s.push(T)}}return this.i=s.join("&")};function ce(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function cl(s,a){a&&!s.j&&(Ft(s),s.i=null,s.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(Ti(this,h),wi(this,T,l))},s)),s.j=a}function hl(s,a){const l=new $e;if(c.Image){const h=new Image;h.onload=S(Ut,l,"TestLoadImage: loaded",!0,a,h),h.onerror=S(Ut,l,"TestLoadImage: error",!1,a,h),h.onabort=S(Ut,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(Ut,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function dl(s,a){const l=new $e,h=new AbortController,T=setTimeout(()=>{h.abort(),Ut(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Ut(l,"TestPingServer: ok",!0,a):Ut(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ut(l,"TestPingServer: error",!1,a)})}function Ut(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function fl(){this.g=new Wu}function pl(s,a,l){const h=l||"";try{_i(s,function(T,A){let P=T;f(T)&&(P=vr(T)),a.push(h+A+"="+encodeURIComponent(P))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function Rn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Rn,Tr),Rn.prototype.g=function(){return new Cn(this.l,this.j)},Rn.prototype.i=function(s){return function(){return s}}({});function Cn(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Cn,ht),n=Cn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ge(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ai(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ai(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ke(this):Ge(this),this.readyState==3&&Ai(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ke(this))},n.Qa=function(s){this.g&&(this.response=s,Ke(this))},n.ga=function(){this.g&&Ke(this)};function Ke(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ge(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ge(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ri(s){let a="";return ot(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Dr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Ri(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):G(s,a,l))}function X(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(X,ht);var ml=/^https?$/i,gl=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ar.g(),this.v=this.o?ti(this.o):ti(Ar),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){Ci(this,A);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gl,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bi(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Ci(this,A)}};function Ci(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Si(s),Sn(s)}function Si(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),Sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pi(this):this.bb())},n.bb=function(){Pi(this)};function Pi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)Xs(s.Ea,0,s);else if(yt(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=P===0){var T=String(s.D).match(yi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!ml.test(T?T.toLowerCase():"")}l=h}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var A=2<Nt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Si(s)}}finally{Sn(s)}}}}function Sn(s,a){if(s.g){bi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=h}catch{}}}function bi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Qu(a)}};function Vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function _l(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(z(s[h]))continue;var l=E(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Di(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qe("baseRetryDelayMs",5e3,s),this.cb=Qe("retryDelaySeedMs",1e4,s),this.Wa=Qe("forwardChannelMaxRetries",2,s),this.wa=Qe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new di(s&&s.concurrentRequestLimit),this.Da=new fl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Di.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,h){Et(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Bi(this,null,this.W),bn(this)};function kr(s){if(ki(s),s.G==3){var a=s.U++,l=kt(s.I);if(G(l,"SID",s.K),G(l,"RID",a),G(l,"TYPE","terminate"),We(s,l),a=new Mt(s,s.j,a),a.L=2,a.v=An(kt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=$i(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Ui(s)}function Pn(s){s.g&&(xr(s),s.g.cancel(),s.g=null)}function ki(s){Pn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Vn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function bn(s){if(!fi(s.h)&&!s.s){s.s=!0;var a=s.Ga;xe||Hs(),Oe||(xe(),Oe=!0),dr.add(a,s),s.B=0}}function yl(s,a){return pi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Be(C(s.Ga,s,a),Fi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Mt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=xi(this,T,a),l=kt(this.I),G(l,"RID",s),G(l,"CVER",22),this.D&&G(l,"X-HTTP-Session-Id",this.D),We(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Ri(A)))+"&"+a:this.m&&Dr(l,this.m,A)),Vr(this.h,T),this.Ua&&G(l,"TYPE","init"),this.P?(G(l,"$req",a),G(l,"SID","null"),T.T=!0,Cr(T,l,null)):Cr(T,l,a),this.G=2}}else this.G==3&&(s?Ni(this,s):this.i.length==0||fi(this.h)||Ni(this))};function Ni(s,a){var l;a?l=a.l:l=s.U++;const h=kt(s.I);G(h,"SID",s.K),G(h,"RID",l),G(h,"AID",s.T),We(s,h),s.m&&s.o&&Dr(h,s.m,s.o),l=new Mt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=xi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Vr(s.h,l),Cr(l,h,a)}function We(s,a){s.H&&ot(s.H,function(l,h){G(a,h,l)}),s.l&&_i({},function(l,h){G(a,h,l)})}function xi(s,a,l){l=Math.min(s.i.length,l);var h=s.l?C(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const P=["count="+l];A==-1?0<l?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let H=!0;for(let at=0;at<l;at++){let q=T[at].g;const dt=T[at].map;if(q-=A,0>q)A=Math.max(0,T[at].g-100),H=!1;else try{pl(dt,P,"req"+q+"_")}catch{h&&h(dt)}}if(H){h=P.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Oi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;xe||Hs(),Oe||(xe(),Oe=!0),dr.add(a,s),s.v=0}}function Nr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Be(C(s.Fa,s),Fi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Li(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Be(C(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Pn(this),Li(this))};function xr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Li(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);G(a,"RID","rpc"),G(a,"SID",s.K),G(a,"AID",s.T),G(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&G(a,"TO",s.ja),G(a,"TYPE","xmlhttp"),We(s,a),s.m&&s.o&&Dr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=An(kt(a)),l.m=null,l.P=!0,li(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Pn(this),Nr(this),Et(19))};function Vn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Mi(s,a){var l=null;if(s.g==a){Vn(s),xr(s),s.g=null;var h=2}else if(br(s.h,a))l=a.D,mi(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=yn(),yt(h,new ii(h,l)),bn(s)}else Oi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&yl(s,a)||h==2&&Nr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:ee(s,5);break;case 4:ee(s,10);break;case 3:ee(s,6);break;default:ee(s,2)}}}function Fi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ee(s,a){if(s.j.info("Error code "+a),a==2){var l=C(s.fb,s),h=s.Xa;const T=!h;h=new te(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||In(h,"https"),An(h),T?hl(h.toString(),l):dl(h.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),Ui(s),ki(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ui(s){if(s.G=0,s.ka=[],s.l){const a=gi(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Bi(s,a,l){var h=l instanceof te?kt(l):new te(l);if(h.g!="")a&&(h.g=a+"."+h.g),wn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new te(null);h&&In(A,h),a&&(A.g=a),T&&wn(A,T),l&&(A.l=l),h=A}return l=s.D,a=s.ya,l&&a&&G(h,l,a),G(h,"VER",s.la),We(s,h),h}function $i(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new X(new Rn({eb:l})):new X(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ji(){}n=ji.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dn(){}Dn.prototype.g=function(s,a){return new It(s,a)};function It(s,a){ht.call(this),this.g=new Di(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!z(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new he(this)}D(It,ht),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){kr(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=vr(s),s=l);a.i.push(new el(a.Ya++,s)),a.G==3&&bn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,It.aa.N.call(this)};function qi(s){Ir.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(qi,Ir);function zi(){wr.call(this),this.status=1}D(zi,wr);function he(s){this.g=s}D(he,ji),he.prototype.ua=function(){yt(this.g,"a")},he.prototype.ta=function(s){yt(this.g,new qi(s))},he.prototype.sa=function(s){yt(this.g,new zi)},he.prototype.ra=function(){yt(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,wa=function(){return new Dn},Ia=function(){return yn()},Ta=Yt,Jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Un=En,oi.COMPLETE="complete",va=oi,ei.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Xe=ei,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,Ea=X}).apply(typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{});const ro="@firebase/firestore",so="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new la("@firebase/firestore");function pe(){return oe.logLevel}function V(n,...t){if(oe.logLevel<=B.DEBUG){const e=t.map(Es);oe.debug(`Firestore (${Ve}): ${n}`,...e)}}function Ot(n,...t){if(oe.logLevel<=B.ERROR){const e=t.map(Es);oe.error(`Firestore (${Ve}): ${n}`,...e)}}function ae(n,...t){if(oe.logLevel<=B.WARN){const e=t.map(Es);oe.warn(`Firestore (${Ve}): ${n}`,...e)}}function Es(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ve}) INTERNAL ASSERTION FAILED: `+n;throw Ot(t),new Error(t)}function W(n,t){n||M()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ra{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Yc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zc{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new se;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new se,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new se)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new Aa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new mt(t)}}class th{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class eh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new th(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class io{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,fa(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){W(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new io(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new io(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=rh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function Yr(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return F(r,i);{const o=Ca(),u=sh(o.encode(oo(n,e)),o.encode(oo(t,e)));return u!==0?u:F(r,i)}}e+=r>65535?2:1}return F(n.length,t.length)}function oo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function sh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return F(n[e],t[e]);return F(n.length,t.length)}function Te(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=-62135596800,uo=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*uo);return new vt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ao)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uo}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ao;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new vt(0,0))}static max(){return new L(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="__name__";class At{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return At.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof At?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=At.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=At.isNumericId(t),i=At.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?At.extractNumericId(t).compare(At.extractNumericId(e)):Yr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class J extends At{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new J(e)}static emptyPath(){return new J([])}}const ih=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends At{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return ih.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lo}static keyField(){return new _t([lo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(J.fromString(t))}static fromName(t){return new x(J.fromString(t).popFirst(5))}static empty(){return new x(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new J(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=-1;function oh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new Kt(i,x.empty(),t)}function ah(n){return new Kt(n.readTime,n.key,on)}class Kt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Kt(L.min(),x.empty(),on)}static max(){return new Kt(L.max(),x.empty(),on)}}function uh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ch{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==lh)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},d=>r(d))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++c,c===o&&r(u)},_=>i(_))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function hh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function De(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}er.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=-1;function nr(n){return n==null}function Zr(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="";function fh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=co(t)),t=ph(n.get(e),t);return co(t)}function ph(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Sa:e+="";break;default:e+=o}}return e}function co(n){return n+Sa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function cn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function mh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fo(this.data.getIterator())}getIteratorFrom(t){return new fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new nt(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pa("Invalid base64 string: "+o):o}}(t);return new it(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new it(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const gh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(W(!!n),typeof n=="string"){let t=0;const e=gh.exec(n);if(W(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qt(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="server_timestamp",Va="__type__",Da="__previous_value__",ka="__local_write_time__";function Ts(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Va])===null||e===void 0?void 0:e.stringValue)===ba}function rr(n){const t=n.mapValue.fields[Da];return Ts(t)?rr(t):t}function an(n){const t=Gt(n.mapValue.fields[ka].timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,r,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}const Kn="(default)";class Ie{constructor(t,e){this.projectId=t,this.database=e||Kn}static empty(){return new Ie("","")}get isDefaultDatabase(){return this.database===Kn}isEqual(t){return t instanceof Ie&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__type__",Eh="__max__",Ln={mapValue:{}},vh="__vector__",ts="value";function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ts(n)?4:Ih(n)?9007199254740991:Th(n)?10:11:M()}function Pt(n,t){if(n===t)return!0;const e=Wt(n);if(e!==Wt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return an(n).isEqual(an(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Gt(i.timestampValue),c=Gt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Qt(i.bytesValue).isEqual(Qt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Y(i.geoPointValue.latitude)===Y(o.geoPointValue.latitude)&&Y(i.geoPointValue.longitude)===Y(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Y(i.integerValue)===Y(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Y(i.doubleValue),c=Y(o.doubleValue);return u===c?Zr(u)===Zr(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ho(u)!==ho(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Pt(u[d],c[d])))return!1;return!0}(n,t);default:return M()}}function un(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function we(n,t){if(n===t)return 0;const e=Wt(n),r=Wt(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Y(o.integerValue||o.doubleValue),d=Y(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return po(n.timestampValue,t.timestampValue);case 4:return po(an(n),an(t));case 5:return Yr(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Qt(o),d=Qt(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=F(c[f],d[f]);if(_!==0)return _}return F(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=F(Y(o.latitude),Y(u.latitude));return c!==0?c:F(Y(o.longitude),Y(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return mo(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,d,f,_;const w=o.fields||{},C=u.fields||{},S=(c=w[ts])===null||c===void 0?void 0:c.arrayValue,D=(d=C[ts])===null||d===void 0?void 0:d.arrayValue,O=F(((f=S?.values)===null||f===void 0?void 0:f.length)||0,((_=D?.values)===null||_===void 0?void 0:_.length)||0);return O!==0?O:mo(S,D)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Ln.mapValue&&u===Ln.mapValue)return 0;if(o===Ln.mapValue)return 1;if(u===Ln.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const C=Yr(d[w],_[w]);if(C!==0)return C;const S=we(c[d[w]],f[_[w]]);if(S!==0)return S}return F(d.length,_.length)}(n.mapValue,t.mapValue);default:throw M()}}function po(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=Gt(n),r=Gt(t),i=F(e.seconds,r.seconds);return i!==0?i:F(e.nanos,r.nanos)}function mo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=we(e[i],r[i]);if(o)return o}return F(e.length,r.length)}function Ae(n){return es(n)}function es(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Gt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Qt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=es(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${es(e.fields[u])}`;return i+"}"}(n.mapValue):M()}function Bn(n){switch(Wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=rr(n);return t?16+Bn(t):16;case 5:return 2*n.stringValue.length;case 6:return Qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Bn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return cn(r.fields,(o,u)=>{i+=o.length+Bn(u)}),i}(n.mapValue);default:throw M()}}function ns(n){return!!n&&"integerValue"in n}function Is(n){return!!n&&"arrayValue"in n}function go(n){return!!n&&"nullValue"in n}function _o(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Br(n){return!!n&&"mapValue"in n}function Th(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[yh])===null||e===void 0?void 0:e.stringValue)===vh}function Ze(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return cn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ze(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ih(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Eh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=_t.emptyPath(),r={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=Ze(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){cn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(Ze(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e){this.position=t,this.inclusive=e}}function yo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(u.referenceValue),e.key):r=we(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function wh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{}class et extends Na{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Rh(t,e,r):e==="array-contains"?new Ph(t,r):e==="in"?new bh(t,r):e==="not-in"?new Vh(t,r):e==="array-contains-any"?new Dh(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ch(t,r):new Sh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(we(e,this.value)):e!==null&&Wt(this.value)===Wt(e)&&this.matchesComparison(we(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Na{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new bt(t,e)}matches(t){return xa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function xa(n){return n.op==="and"}function Oa(n){return Ah(n)&&xa(n)}function Ah(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function rs(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(Oa(n))return n.filters.map(t=>rs(t)).join(",");{const t=n.filters.map(e=>rs(e)).join(",");return`${n.op}(${t})`}}function La(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,t):n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,c)=>o&&La(u,i.filters[c]),!0):!1}(n,t):void M()}function Ma(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(n):n instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ma).join(" ,")+"}"}(n):"Filter"}class Rh extends et{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ch extends et{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Sh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Ph extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Is(e)&&un(e.arrayValue,this.value)}}class bh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class Vh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!un(this.value.arrayValue,e)}}class Dh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Is(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>un(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function vo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new kh(n,t,e,r,i,o,u)}function ws(n){const t=$(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>rs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ae(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ae(r)).join(",")),t.le=e}return t.le}function As(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!wh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!La(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Eo(n.startAt,t.startAt)&&Eo(n.endAt,t.endAt)}function ss(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Nh(n,t,e,r,i,o,u,c){return new sr(n,t,e,r,i,o,u,c)}function Rs(n){return new sr(n)}function To(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function tn(n){const t=$(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(_t.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Qn(o,r))}),e.has(_t.keyField().canonicalString())||t.he.push(new Qn(_t.keyField(),r))}return t.he}function Ct(n){const t=$(n);return t.Pe||(t.Pe=Oh(t,tn(n))),t.Pe}function Oh(n,t){if(n.limitType==="F")return vo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Qn(i.field,o)});const e=n.endAt?new Gn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gn(n.startAt.position,n.startAt.inclusive):null;return vo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function is(n,t,e){return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ir(n,t){return As(Ct(n),Ct(t))&&n.limitType===t.limitType}function Ua(n){return`${ws(Ct(n))}|lt:${n.limitType}`}function me(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Ma(i)).join(", ")}]`),nr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ae(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ae(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function or(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of tn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,c,d){const f=yo(u,c,d);return u.inclusive?f<=0:f<0}(r.startAt,tn(r),i)||r.endAt&&!function(u,c,d){const f=yo(u,c,d);return u.inclusive?f>=0:f>0}(r.endAt,tn(r),i))}(n,t)}function Lh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ba(n){return(t,e)=>{let r=!1;for(const i of tn(n)){const o=Mh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Mh(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?we(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Z(x.comparator);function Xt(){return Fh}const $a=new Z(x.comparator);function Je(...n){let t=$a;for(const e of n)t=t.insert(e.key,e);return t}function Uh(n){let t=$a;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function re(){return en()}function ja(){return en()}function en(){return new ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bh=new nt(x.comparator);function j(...n){let t=Bh;for(const e of n)t=t.add(e);return t}const $h=new nt(F);function jh(){return $h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(t)?"-0":t}}function zh(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._=void 0}}function Hh(n,t,e){return n instanceof os?function(i,o){const u={fields:{[Va]:{stringValue:ba},[ka]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ts(o)&&(o=rr(o)),o&&(u.fields[Da]=o),{mapValue:u}}(e,t):n instanceof Wn?qa(n,t):n instanceof Xn?za(n,t):function(i,o){const u=Gh(i,o),c=Io(u)+Io(i.Ie);return ns(u)&&ns(i.Ie)?zh(c):qh(i.serializer,c)}(n,t)}function Kh(n,t,e){return n instanceof Wn?qa(n,t):n instanceof Xn?za(n,t):e}function Gh(n,t){return n instanceof as?function(r){return ns(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class os extends ar{}class Wn extends ar{constructor(t){super(),this.elements=t}}function qa(n,t){const e=Ha(t);for(const r of n.elements)e.some(i=>Pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Xn extends ar{constructor(t){super(),this.elements=t}}function za(n,t){let e=Ha(t);for(const r of n.elements)e=e.filter(i=>!Pt(i,r));return{arrayValue:{values:e}}}class as extends ar{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Io(n){return Y(n.integerValue||n.doubleValue)}function Ha(n){return Is(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Wn&&i instanceof Wn||r instanceof Xn&&i instanceof Xn?Te(r.elements,i.elements,Pt):r instanceof as&&i instanceof as?Pt(r.Ie,i.Ie):r instanceof os&&i instanceof os}(n.transform,t.transform)}class ie{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ie}static exists(t){return new ie(void 0,t)}static updateTime(t){return new ie(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Cs{}function Ka(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Xh(n.key,ie.none()):new Ss(n.key,n.data,ie.none());{const e=n.data,r=Rt.empty();let i=new nt(_t.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new ur(n.key,r,new Bt(i.toArray()),ie.none())}}function Wh(n,t,e){n instanceof Ss?function(i,o,u){const c=i.value.clone(),d=Ao(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ur?function(i,o,u){if(!$n(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ao(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ga(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(n,t,e,r){return n instanceof Ss?function(o,u,c,d){if(!$n(o.precondition,u))return c;const f=o.value.clone(),_=Ro(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ur?function(o,u,c,d){if(!$n(o.precondition,u))return c;const f=Ro(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ga(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,u,c){return $n(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function wo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(o,u)=>Qh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ss extends Cs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Cs{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ga(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ao(n,t,e){const r=new Map;W(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Kh(u,c,e[i]))}return r}function Ro(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Hh(o,u,t))}return r}class Xh extends Cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Wh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ja();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=Ka(u,c);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,r)=>wo(e,r))&&Te(this.baseMutations,t.baseMutations,(e,r)=>wo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,U;function Qa(n){if(n===void 0)return Ot("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Ht([4294967295,4294967295],0);function Co(n){const t=Ca().encode(n),e=new ya;return e.update(t),new Uint8Array(e.digest())}function So(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ht([e,r],0),new Ht([i,o],0)]}class Ps{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ye(`Invalid padding: ${e}`);if(r<0)throw new Ye(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ye(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ye(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Ht.fromNumber(this.Ee)}Ae(t,e,r){let i=t.add(e.multiply(Ht.fromNumber(r)));return i.compare(td)===1&&(i=new Ht([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Co(t),[r,i]=So(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ps(o,i,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ee===0)return;const e=Co(t),[r,i]=So(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ye extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new lr(L.min(),i,new Z(F),Xt(),j())}}class hn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new hn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,r,i){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=i}}class Wa{constructor(t,e){this.targetId=t,this.ge=e}}class Xa{constructor(t,e,r=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Po{constructor(){this.pe=0,this.ye=bo(),this.we=it.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=j(),e=j(),r=j();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new hn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=bo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,W(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ed{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Xt(),this.$e=Mn(),this.Ue=Mn(),this.Ke=new Z(F)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,r=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(ss(o))if(r===0){const u=new x(o.path);this.ze(e,u,gt.newNoDocument(u,L.min()))}else W(r===1);else{const u=this.et(e);if(u!==r){const c=this.tt(t),d=c?this.nt(c,t,u):1;if(d!==0){this.Ye(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Qt(r).toUint8Array()}catch(d){if(d instanceof Pa)return ae("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Ps(u,i,o)}catch(d){return ae(d instanceof Ye?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ee===0?null:c}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.ke.it(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const c=this.Xe(u);if(c){if(o.current&&ss(c.target)){const d=new x(c.target.path);this._t(d).has(u)||this.ut(u,d)||this.ze(u,d,gt.newNoDocument(d,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let r=j();this.Ue.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const f=this.Xe(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new lr(t,e,this.Ke,this.Qe,r);return this.Qe=Xt(),this.$e=Mn(),this.Ue=Mn(),this.Ke=new Z(F),i}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Po,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new nt(F),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new nt(F),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Po),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Mn(){return new Z(x.comparator)}function bo(){return new Z(x.comparator)}const nd={asc:"ASCENDING",desc:"DESCENDING"},rd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sd={and:"AND",or:"OR"};class id{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function us(n,t){return n.useProto3Json||nr(t)?t:{value:t}}function od(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ad(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ye(n){return W(!!n),L.fromTimestamp(function(e){const r=Gt(e);return new vt(r.seconds,r.nanos)}(n))}function ud(n,t){return ls(n,t).canonicalString()}function ls(n,t){const e=function(i){return new J(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ja(n){const t=J.fromString(n);return W(nu(t)),t}function $r(n,t){const e=Ja(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Za(e))}function Ya(n,t){return ud(n.databaseId,t)}function ld(n){const t=Ja(n);return t.length===4?J.emptyPath():Za(t)}function Vo(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Za(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(W(_===void 0||typeof _=="string"),it.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),it.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?b.UNKNOWN:Qa(f.code);return new N(_,f.message||"")}(u);e=new Xa(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=$r(n,r.document.name),o=ye(r.document.updateTime),u=r.document.createTime?ye(r.document.createTime):L.min(),c=new Rt({mapValue:{fields:r.document.fields}}),d=gt.newFoundDocument(i,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new jn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=$r(n,r.document),o=r.readTime?ye(r.readTime):L.min(),u=gt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new jn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=$r(n,r.document),o=r.removedTargetIds||[];e=new jn([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Zh(i,o),c=r.targetId;e=new Wa(c,u)}}return e}function hd(n,t){return{documents:[Ya(n,t.path)]}}function dd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ya(n,i);const o=function(f){if(f.length!==0)return eu(bt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(C){return{field:ge(C.field),direction:md(C.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=us(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:i}}function fd(n){let t=ld(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){W(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const C=tu(w);return C instanceof bt&&Oa(C)?C.getFilters():[C]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(C=>function(D){return new Qn(_e(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(C))}(e.orderBy));let c=null;e.limit&&(c=function(w){let C;return C=typeof w=="object"?w.value:w,nr(C)?null:C}(e.limit));let d=null;e.startAt&&(d=function(w){const C=!!w.before,S=w.values||[];return new Gn(S,C)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const C=!w.before,S=w.values||[];return new Gn(S,C)}(e.endAt)),Nh(t,i,u,o,c,"F",d,f)}function pd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function tu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_e(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_e(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_e(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=_e(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(_e(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(r=>tu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function md(n){return nd[n]}function gd(n){return rd[n]}function _d(n){return sd[n]}function ge(n){return{fieldPath:n.canonicalString()}}function _e(n){return _t.fromServerFormat(n.fieldPath)}function eu(n){return n instanceof et?function(e){if(e.op==="=="){if(_o(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(go(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_o(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(go(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:gd(e.op),value:e.value}}}(n):n instanceof bt?function(e){const r=e.getFilters().map(i=>eu(i));return r.length===1?r[0]:{compositeFilter:{op:_d(e.op),filters:r}}}(n):M()}function nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,r,i,o=L.min(),u=L.min(),c=it.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.Tt=t}}function Ed(n){const t=fd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?is(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.Tn=new Td}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Kt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Td{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new nt(J.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new nt(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ru=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(ru,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Re(0)}static Kn(){return new Re(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="LruGarbageCollector",Id=1048576;function No([n,t],[e,r]){const i=F(n,e);return i===0?F(t,r):i}class wd{constructor(t){this.Hn=t,this.buffer=new nt(No),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();No(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ad{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(ko,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?V(ko,"Ignoring IndexedDB error during garbage collection: ",e):await tr(e)}await this.er(3e5)})}}class Rd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(er.ae);const r=new wd(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Do)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Do):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,u,c,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,u=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,c=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,d=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(f=Date.now(),pe()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${w} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Cd(n,t){return new Rd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&nn(r.mutation,i,Bt.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=re();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=Je();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=re();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,i){let o=Xt();const u=en(),c=function(){return en()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof ur)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),nn(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return c.set(f,new Pd(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const r=en();let i=new Z((u,c)=>u-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Bt.empty();_=c.applyToLocalView(f,_),r.set(d,_);const w=(i.get(c.batchId)||j()).add(d);i=i.insert(c.batchId,w)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,w=ja();_.forEach(C=>{if(!o.has(C)){const S=Ka(e.get(C),r.get(C));S!==null&&w.set(C,S),o=o.add(C)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return R.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(re());let c=on,d=o;return u.next(f=>R.forEach(f,(_,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(C=>{d=d.insert(_,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,j())).next(_=>({batchId:c,changes:Uh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let i=Je();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Je();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,d=>{const f=function(w,C){return new sr(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((w,C)=>{u=u.insert(w,C)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let c=Je();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&nn(_.mutation,f,Bt.empty(),vt.now()),or(e,f)&&(c=c.insert(d,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ye(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Ed(i.bundledQuery),readTime:ye(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.overlays=new Z(x.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=re();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=re(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=re(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=re(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return R.resolve(c)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Yh(e,r));let o=this.Rr.get(e);o===void 0&&(o=j(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new st(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new x(new J([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.gr.forEachInRange([r,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new x(new J([])),r=new st(e,t),i=new st(e,t+1);let o=j();return this.gr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return x.comparator(t.key,e.key)||F(t.Cr,e.Cr)}static pr(t,e){return F(t.Cr,e.Cr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Jh(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.Mr=this.Mr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?dh:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],u=>{const c=this.Or(u.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new nt(F);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{r=r.add(c.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const u=new st(new x(o),0);let c=new nt(F);return this.Mr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.Cr)),!0)},u),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){W(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new st(e,0),i=this.Mr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.kr=t,this.docs=function(){return new Z(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Xt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Xt();const u=e.path,c=new x(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||uh(ah(_),r)<=0||(i.has(_.key)||or(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}qr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Od(this)}getSize(t){return R.resolve(this.size)}}class Od extends Sd{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.persistence=t,this.Qr=new ue(e=>ws(e),As),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.$r=0,this.Ur=new bs,this.targetCount=0,this.Kr=Re.Un()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new er(0),this.zr=!1,this.zr=!0,this.jr=new kd,this.referenceDelegate=t(this),this.Hr=new Ld(this),this.indexManager=new vd,this.remoteDocumentCache=function(i){return new xd(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new yd(e),this.Yr=new Vd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Nd(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Md(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Md extends ch{constructor(t){super(),this.currentSequenceNumber=t}}class Vs{constructor(t){this.persistence=t,this.ti=new bs,this.ni=null}static ri(t){return new Vs(t)}get ii(){if(this.ni)return this.ni;throw M()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const i=x.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.oi=new ue(r=>fh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Cd(this,e)}static ri(t,e){return new Jn(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(c=>{c||(r++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bn(t.data.value)),e}ar(t,e,r){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ds(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ol()?8:hh(Nl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Fd;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(pe()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(pe()<=B.DEBUG&&V("QueryEngine","Query:",me(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(pe()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):R.resolve())}rs(t,e){if(To(e))return R.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=is(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=j(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.cs(e,c);return this.ls(e,f,u,d.readTime)?this.rs(t,is(e,null,"F")):this.hs(t,f,e,d)}))})))}ss(t,e,r,i){return To(e)||i.isEqual(L.min())?R.resolve(null):this.ns.getDocuments(t,r).next(o=>{const u=this.cs(e,o);return this.ls(e,u,r,i)?R.resolve(null):(pe()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),me(e)),this.hs(t,u,e,oh(i,on)).next(c=>c))})}cs(t,e){let r=new nt(Ba(t));return e.forEach((i,o)=>{or(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return pe()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",me(e)),this.ns.getDocumentsMatchingQuery(t,e,Kt.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="LocalStore",Bd=3e8;class $d{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Z(F),this.Is=new ue(o=>ws(o),As),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function jd(n,t,e,r){return new $d(n,t,e,r)}async function iu(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let d=j();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({Rs:f,removedBatchIds:u,addedBatchIds:c}))})})}function ou(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function qd(n,t){const e=$(n),r=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((_,w)=>{const C=i.get(w);if(!C)return;c.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,w)));let S=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(it.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),i=i.insert(w,S),function(O,k,Q){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Bd?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(C,S,_)&&c.push(e.Hr.updateTargetData(o,S))});let d=Xt(),f=j();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(zd(o,u,t.documentUpdates).next(_=>{d=_.Vs,f=_.fs})),!r.isEqual(L.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(w=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return R.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.Ts=i,o))}function zd(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Xt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(L.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):V(ks,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{Vs:u,fs:i}})}function Hd(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Hr.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.Hr.allocateTargetId(r).next(u=>(i=new $t(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function cs(n,t,e){const r=$(n),i=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!De(u))throw u;V(ks,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function xo(n,t,e){const r=$(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=$(d),C=w.Is.get(_);return C!==void 0?R.resolve(w.Ts.get(C)):w.Hr.getTargetData(f,_)}(r,u,Ct(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j())).next(c=>(Kd(r,Lh(t),c),{documents:c,gs:o})))}function Kd(n,t,e){let r=n.Es.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class Oo{constructor(){this.activeTargetIds=jh()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gd{constructor(){this.ho=new Oo,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Oo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="ConnectivityMonitor";class Mo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(Lo,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(Lo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn=null;function hs(){return Fn===null?Fn=function(){return 268435456+Math.round(2147483648*Math.random())}():Fn++,"0x"+Fn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="RestConnection",Wd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xd{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Kn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(t,e,r,i,o){const u=hs(),c=this.bo(t,e.toUriEncodedString());V(jr,`Sending RPC '${t}' ${u}:`,c,r);const d={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(d,i,o),this.vo(t,c,d,r).then(f=>(V(jr,`Received RPC '${t}' ${u}: `,f),f),f=>{throw ae(jr,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",r),f})}Co(t,e,r,i,o,u){return this.So(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ve}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const r=Wd[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Yd extends Xd{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=hs();return new Promise((u,c)=>{const d=new Ea;d.setWithCredentials(!0),d.listenOnce(va.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Un.NO_ERROR:const _=d.getResponseJson();V(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Un.TIMEOUT:V(pt,`RPC '${t}' ${o} timed out`),c(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const w=d.getStatus();if(V(pt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const S=C?.error;if(S&&S.status&&S.message){const D=function(k){const Q=k.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Q)>=0?Q:b.UNKNOWN}(S.status);c(new N(D,S.message))}else c(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(pt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Wo(t,e,r){const i=hs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=wa(),c=Ia(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Do(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=u.createWebChannel(_,d);let C=!1,S=!1;const D=new Jd({Fo:k=>{S?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(C||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),C=!0),V(pt,`RPC '${t}' stream ${i} sending:`,k),w.send(k))},Mo:()=>w.close()}),O=(k,Q,z)=>{k.listen(Q,K=>{try{z(K)}catch(rt){setTimeout(()=>{throw rt},0)}})};return O(w,Xe.EventType.OPEN,()=>{S||(V(pt,`RPC '${t}' stream ${i} transport opened.`),D.Qo())}),O(w,Xe.EventType.CLOSE,()=>{S||(S=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),D.Uo())}),O(w,Xe.EventType.ERROR,k=>{S||(S=!0,ae(pt,`RPC '${t}' stream ${i} transport errored:`,k),D.Uo(new N(b.UNAVAILABLE,"The operation could not be completed")))}),O(w,Xe.EventType.MESSAGE,k=>{var Q;if(!S){const z=k.data[0];W(!!z);const K=z,rt=K?.error||((Q=K[0])===null||Q===void 0?void 0:Q.error);if(rt){V(pt,`RPC '${t}' stream ${i} received error:`,rt);const Vt=rt.status;let ot=function(g){const y=tt[g];if(y!==void 0)return Qa(y)}(Vt),v=rt.message;ot===void 0&&(ot=b.INTERNAL,v="Unknown error status: "+Vt+" with message "+rt.message),S=!0,D.Uo(new N(ot,v)),w.close()}else V(pt,`RPC '${t}' stream ${i} received:`,z),D.Ko(z)}}),O(c,Ta.STAT_EVENT,k=>{k.stat===Jr.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Jr.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n){return new id(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="PersistentStream";class Zd{constructor(t,e,r,i,o,u,c,d){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new uu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(Fo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(Fo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tf extends Zd{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=cd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?ye(u.readTime):L.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Vo(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=ss(d)?{documents:hd(o,d)}:{query:dd(o,d).ht},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ad(o,u.resumeToken);const f=us(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=od(o,u.snapshotVersion.toTimestamp());const f=us(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=pd(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Vo(this.serializer),e.removeTarget=t,this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{}class nf extends ef{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,ls(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,ls(e,r),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(b.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class rf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ot(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="RemoteStore";class sf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{fn(this)&&(V(Ce,"Restarting streams for network reachability change."),await async function(d){const f=$(d);f.W_.add(4),await dn(f),f.j_.set("Unknown"),f.W_.delete(4),await cr(f)}(this))})}),this.j_=new rf(r,i)}}async function cr(n){if(fn(n))for(const t of n.G_)await t(!0)}async function dn(n){for(const t of n.G_)await t(!1)}function lu(n,t){const e=$(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Ls(e)?Os(e):ke(e).c_()&&xs(e,t))}function Ns(n,t){const e=$(n),r=ke(e);e.K_.delete(t),r.c_()&&cu(e,t),e.K_.size===0&&(r.c_()?r.P_():fn(e)&&e.j_.set("Unknown"))}function xs(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(n).y_(t)}function cu(n,t){n.H_.Ne(t),ke(n).w_(t)}function Os(n){n.H_=new ed({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),ke(n).start(),n.j_.B_()}function Ls(n){return fn(n)&&!ke(n).u_()&&n.K_.size>0}function fn(n){return $(n).W_.size===0}function hu(n){n.H_=void 0}async function of(n){n.j_.set("Online")}async function af(n){n.K_.forEach((t,e)=>{xs(n,t)})}async function uf(n,t){hu(n),Ls(n)?(n.j_.q_(t),Os(n)):n.j_.set("Unknown")}async function lf(n,t,e){if(n.j_.set("Online"),t instanceof Xa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.K_.delete(c),i.H_.removeTarget(c))}(n,t)}catch(r){V(Ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Uo(n,r)}else if(t instanceof jn?n.H_.We(t):t instanceof Wa?n.H_.Ze(t):n.H_.je(t),!e.isEqual(L.min()))try{const r=await ou(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.H_.ot(u);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.K_.get(f);_&&o.K_.set(f,_.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,f)=>{const _=o.K_.get(d);if(!_)return;o.K_.set(d,_.withResumeToken(it.EMPTY_BYTE_STRING,_.snapshotVersion)),cu(o,d);const w=new $t(_.target,d,f,_.sequenceNumber);xs(o,w)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){V(Ce,"Failed to raise snapshot:",r),await Uo(n,r)}}async function Uo(n,t,e){if(!De(t))throw t;n.W_.add(1),await dn(n),n.j_.set("Offline"),e||(e=()=>ou(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(Ce,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await cr(n)})}async function Bo(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(Ce,"RemoteStore received new credentials");const r=fn(e);e.W_.add(3),await dn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await cr(e)}async function cf(n,t){const e=$(n);t?(e.W_.delete(2),await cr(e)):t||(e.W_.add(2),await dn(e),e.j_.set("Unknown"))}function ke(n){return n.J_||(n.J_=function(e,r,i){const o=$(e);return o.M_(),new tf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:of.bind(null,n),No:af.bind(null,n),Lo:uf.bind(null,n),p_:lf.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Ls(n)?Os(n):n.j_.set("Unknown")):(await n.J_.stop(),hu(n))})),n.J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Ms(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(n,t){if(Ot("AsyncQueue",`${t}: ${n}`),De(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static emptySet(t){return new Ee(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=Je(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ee;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.Z_=new Z(x.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):M():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Se{constructor(t,e,r,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Se(t,e,Ee.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class df{constructor(){this.queries=jo(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=jo(),o.forEach((u,c)=>{for(const d of c.ta)d.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function jo(){return new ue(n=>Ua(n),ir)}async function ff(n,t){const e=$(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(r=2):(o=new hf,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=du(u,`Initialization of query '${me(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Fs(e)}async function pf(n,t){const e=$(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function mf(n,t){const e=$(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.ta)c.oa(i)&&(r=!0);u.ea=i}}r&&Fs(e)}function gf(n,t,e){const r=$(n),i=r.queries.get(t);if(i)for(const o of i.ta)o.onError(e);r.queries.delete(t)}function Fs(n){n.ia.forEach(t=>{t.next()})}var ds,qo;(qo=ds||(ds={}))._a="default",qo.Cache="cache";class _f{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==ds.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this.key=t}}class pu{constructor(t){this.key=t}}class yf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=j(),this.mutatedKeys=j(),this.ya=Ba(t),this.wa=new Ee(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new $o,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const C=i.get(_),S=or(this.query,w)?w:null,D=!!C&&this.mutatedKeys.has(C.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;C&&S?C.data.isEqual(S.data)?D!==O&&(r.track({type:3,doc:S}),k=!0):this.va(C,S)||(r.track({type:2,doc:S}),k=!0,(d&&this.ya(S,d)>0||f&&this.ya(S,f)<0)&&(c=!0)):!C&&S?(r.track({type:0,doc:S}),k=!0):C&&!S&&(r.track({type:1,doc:C}),k=!0,(d||f)&&(c=!0)),k&&(S?(u=u.add(S),o=O?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{wa:u,Da:r,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((_,w)=>function(S,D){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(S)-O(D)}(_.type,w.type)||this.ya(_.doc,w.doc)),this.Ca(r),i=i!=null&&i;const c=e&&!i?this.Fa():[],d=this.pa.size===0&&this.current&&!i?1:0,f=d!==this.ga;return this.ga=d,u.length!==0||f?{snapshot:new Se(this.query,t.wa,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new $o,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=j(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new pu(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new fu(r))}),e}Oa(t){this.fa=t.gs,this.pa=j();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Se.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Us="SyncEngine";class Ef{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class vf{constructor(t){this.key=t,this.Ba=!1}}class Tf{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ue(c=>Ua(c),ir),this.qa=new Map,this.Qa=new Set,this.$a=new Z(x.comparator),this.Ua=new Map,this.Ka=new bs,this.Wa={},this.Ga=new Map,this.za=Re.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function If(n,t,e=!0){const r=Eu(n);let i;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await mu(r,t,e,!0),i}async function wf(n,t){const e=Eu(n);await mu(e,t,!0,!1)}async function mu(n,t,e,r){const i=await Hd(n.localStore,Ct(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Af(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&lu(n.remoteStore,i),c}async function Af(n,t,e,r,i){n.Ha=(w,C,S)=>async function(O,k,Q,z){let K=k.view.ba(Q);K.ls&&(K=await xo(O.localStore,k.query,!1).then(({documents:v})=>k.view.ba(v,K)));const rt=z&&z.targetChanges.get(k.targetId),Vt=z&&z.targetMismatches.get(k.targetId)!=null,ot=k.view.applyChanges(K,O.isPrimaryClient,rt,Vt);return Ho(O,k.targetId,ot.Ma),ot.snapshot}(n,w,C,S);const o=await xo(n.localStore,t,!0),u=new yf(t,o.gs),c=u.ba(o.documents),d=hn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,d);Ho(n,e,f.Ma);const _=new Ef(t,e,u);return n.ka.set(t,_),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Rf(n,t,e){const r=$(n),i=r.ka.get(t),o=r.qa.get(i.targetId);if(o.length>1)return r.qa.set(i.targetId,o.filter(u=>!ir(u,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ns(r.remoteStore,i.targetId),fs(r,i.targetId)}).catch(tr)):(fs(r,i.targetId),await cs(r.localStore,i.targetId,!0))}async function Cf(n,t){const e=$(n),r=e.ka.get(t),i=e.qa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ns(e.remoteStore,r.targetId))}async function gu(n,t){const e=$(n);try{const r=await qd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ua.get(o);u&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?W(u.Ba):i.removedDocuments.size>0&&(W(u.Ba),u.Ba=!1))}),await yu(e,r,t)}catch(r){await tr(r)}}function zo(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const d=$(u);d.onlineState=c;let f=!1;d.queries.forEach((_,w)=>{for(const C of w.ta)C.sa(c)&&(f=!0)}),f&&Fs(d)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sf(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ua.get(t),o=i&&i.key;if(o){let u=new Z(x.comparator);u=u.insert(o,gt.newNoDocument(o,L.min()));const c=j().add(o),d=new lr(L.min(),new Map,new Z(F),u,c);await gu(r,d),r.$a=r.$a.remove(o),r.Ua.delete(t),Bs(r)}else await cs(r.localStore,t,!1).then(()=>fs(r,t,e)).catch(tr)}function fs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||_u(n,r)})}function _u(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Ns(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),Bs(n))}function Ho(n,t,e){for(const r of e)r instanceof fu?(n.Ka.addReference(r.key,t),Pf(n,r)):r instanceof pu?(V(Us,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||_u(n,r.key)):M()}function Pf(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(V(Us,"New document in limbo: "+e),n.Qa.add(r),Bs(n))}function Bs(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new x(J.fromString(t)),r=n.za.next();n.Ua.set(r,new vf(e)),n.$a=n.$a.insert(e,r),lu(n.remoteStore,new $t(Ct(Rs(e.path)),r,"TargetPurposeLimboResolution",er.ae))}}async function yu(n,t,e){const r=$(n),i=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((c,d)=>{u.push(r.Ha(d,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e?.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Ds.Yi(d.targetId,f);o.push(w)}}))}),await Promise.all(u),r.La.p_(i),await async function(d,f){const _=$(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,C=>R.forEach(C.Hi,S=>_.persistence.referenceDelegate.addReference(w,C.targetId,S)).next(()=>R.forEach(C.Ji,S=>_.persistence.referenceDelegate.removeReference(w,C.targetId,S)))))}catch(w){if(!De(w))throw w;V(ks,"Failed to update sequence numbers: "+w)}for(const w of f){const C=w.targetId;if(!w.fromCache){const S=_.Ts.get(C),D=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(D);_.Ts=_.Ts.insert(C,O)}}}(r.localStore,o))}async function bf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(Us,"User change. New user:",t.toKey());const r=await iu(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(d=>{d.reject(new N(b.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yu(e,r.Rs)}}function Vf(n,t){const e=$(n),r=e.Ua.get(t);if(r&&r.Ba)return j().add(r.key);{let i=j();const o=e.qa.get(t);if(!o)return i;for(const u of o){const c=e.ka.get(u);i=i.unionWith(c.view.Sa)}return i}}function Eu(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sf.bind(null,t),t.La.p_=mf.bind(null,t.eventManager),t.La.Ja=gf.bind(null,t.eventManager),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=au(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return jd(this.persistence,new Ud,t.initialUser,this.serializer)}Xa(t){return new su(Vs.ri,this.serializer)}Za(t){return new Gd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Df extends Yn{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){W(this.persistence.referenceDelegate instanceof Jn);const r=this.persistence.referenceDelegate.garbageCollector;return new Ad(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new su(r=>Jn.ri(r,e),this.serializer)}}class ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bf.bind(null,this.syncEngine),await cf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new df}()}createDatastore(t){const e=au(t.databaseInfo.databaseId),r=function(o){return new Yd(o)}(t.databaseInfo);return function(o,u,c,d){return new nf(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,c){return new sf(r,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>zo(this.syncEngine,e,0),function(){return Mo.D()?new Mo:new Qd}())}createSyncEngine(t,e){return function(i,o,u,c,d,f,_){const w=new Tf(i,o,u,c,d,f);return _&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=$(i);V(Ce,"RemoteStore shutting down."),o.W_.add(5),await dn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ps.provider={build:()=>new ps};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class Nf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=vs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{V(Jt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(V(Jt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=du(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function zr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Jt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ko(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xf(n);V(Jt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Bo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Bo(t.remoteStore,i)),n._onlineComponents=t}async function xf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Jt,"Using user provided OfflineComponentProvider");try{await zr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ae("Error using user provided cache. Falling back to memory cache: "+e),await zr(n,new Yn)}}else V(Jt,"Using default OfflineComponentProvider"),await zr(n,new Df(void 0));return n._offlineComponents}async function Of(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Jt,"Using user provided OnlineComponentProvider"),await Ko(n,n._uninitializedComponentsProvider._online)):(V(Jt,"Using default OnlineComponentProvider"),await Ko(n,new ps))),n._onlineComponents}async function Lf(n){const t=await Of(n),e=t.eventManager;return e.onListen=If.bind(null,t.syncEngine),e.onUnlisten=Rf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=wf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cf.bind(null,t.syncEngine),e}function Mf(n,t,e={}){const r=new se;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,f){const _=new kf({next:C=>{_.su(),u.enqueueAndForget(()=>pf(o,w));const S=C.docs.has(c);!S&&C.fromCache?f.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&C.fromCache&&d&&d.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(C)},error:C=>f.reject(C)}),w=new _f(Rs(c.path),_,{includeMetadataChanges:!0,Ta:!0});return ff(o,w)}(await Lf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Tu(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qo(n){if(!x.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Zn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Uf(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firestore.googleapis.com",Wo=!0;class Xo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iu,this.ssl=Wo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Wo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ru;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Id)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $s{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ra;switch(r.type){case"firstParty":return new eh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Go.get(e);r&&(V("ComponentProvider","Removing Datastore"),Go.delete(e),r.terminate())}(this),Promise.resolve()}}function wu(n,t,e,r={}){var i;const o=(n=Zn(n,$s))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==Iu&&o.host!==c&&ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!zn(d,u)&&(n._setSettings(d),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=mt.MOCK_USER;else{f=kl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new mt(w)}n._authCredentials=new Yc(new Aa(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new hr(this.firestore,t,this._query)}}class St{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Pe extends hr{constructor(t,e,r){super(t,e,Rs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new x(t))}withConverter(t){return new Pe(this.firestore,t,this._path)}}function Bf(n,t,...e){if(n=_s(n),arguments.length===1&&(t=vs.newId()),Ff("doc","path",t),n instanceof $s){const r=J.fromString(t,...e);return Qo(r),new St(n,null,new x(r))}{if(!(n instanceof St||n instanceof Pe))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Qo(r),new St(n.firestore,n instanceof Pe?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="AsyncQueue";class Yo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new uu(this,"async_queue_retry"),this.Su=()=>{const r=qr();r&&V(Jo,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=qr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=qr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new se;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!De(t))throw t;V(Jo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Ms.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class js extends $s{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Yo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Yo(t),this._firestoreClient=void 0,await t}}}function Au(n,t){const e=typeof n=="object"?n:ma(),r=typeof n=="string"?n:Kn,i=da(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=oa("firestore");o&&wu(i,...o)}return i}function Ru(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$f(n),n._firestoreClient}function $f(n){var t,e,r;const i=n._freezeSettings(),o=function(c,d,f,_){return new _h(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,vu(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Nf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const d=c?._online.build();return{_offline:c?._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(it.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ln(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const jf=new RegExp("[~\\*/\\[\\]]");function qf(n,t,e){if(t.search(jf)>=0)throw Zo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new qs(...t.split("."))._internalPath}catch{throw Zo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Zo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new N(b.INVALID_ARGUMENT,o+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zf extends Pu{data(){return super.data()}}function bu(n,t){return typeof t=="string"?qf(n,t):t instanceof qs?t._internalPath:t._delegate._internalPath}class Vu{convertValue(t,e="none"){switch(Wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return cn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[ts].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>Y(u.doubleValue));return new Su(o)}convertGeoPoint(t){return new Cu(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=J.fromString(t);W(nu(r));const i=new Ie(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zs extends Pu{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ku extends zs{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){n=Zn(n,St);const t=Zn(n.firestore,js);return Mf(Ru(t),n._key).then(e=>Gf(t,n,e))}class Kf extends Vu{constructor(t){super(),this.firestore=t}convertBytes(t){return new ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function Gf(n,t,e){const r=e.docs.get(t._key),i=new Kf(n);return new zs(n,i,t._key,r,new Du(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ve=i})(Uc),rn(new ve("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new js(new Zc(r.getProvider("auth-internal")),new nh(u,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ie(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),zt(ro,so,t),zt(ro,so,"esm2017")})();const Nu=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Vu,Bytes:ln,CollectionReference:Pe,DocumentReference:St,DocumentSnapshot:zs,FieldPath:qs,Firestore:js,FirestoreError:N,GeoPoint:Cu,Query:hr,QueryDocumentSnapshot:ku,SnapshotMetadata:Du,Timestamp:vt,VectorValue:Su,_AutoId:vs,_ByteString:it,_DatabaseId:Ie,_DocumentKey:x,_EmptyAuthCredentialsProvider:Ra,_FieldPath:_t,_cast:Zn,_logWarn:ae,_validateIsNotUsedTogether:Tu,connectFirestoreEmulator:wu,doc:Bf,ensureFirestoreConfigured:Ru,getDoc:Hf,getFirestore:Au},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,e,r,i){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,fa(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=e.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||e.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||i?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const e=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(t){const e=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(t);return{authToken:e,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="us-central1";class Wf{constructor(t,e,r,i,o=ms,u=(...c)=>fetch(...c)){this.app=t,this.fetchImpl=u,this.emulatorOrigin=null,this.contextProvider=new Qf(t,e,r,i),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(o);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=ms}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${e}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function Xf(n,t,e){n.emulatorOrigin=`http://${t}:${e}`}const ta="@firebase/functions",ea="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="auth-internal",Yf="app-check-internal",Zf="messaging-internal";function tp(n){const t=(e,{instanceIdentifier:r})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider(Jf),u=e.getProvider(Zf),c=e.getProvider(Yf);return new Wf(i,o,u,c,r)};rn(new ve(xu,t,"PUBLIC").setMultipleInstances(!0)),zt(ta,ea,n),zt(ta,ea,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n=ma(),t=ms){const r=da(_s(n),xu).getImmediate({identifier:t}),i=oa("functions");return i&&Ou(r,...i),r}function Ou(n,t,e){Xf(_s(n),t,e)}tp();const np={apiKey:"AIzaSyDJCw6SF-NJIcfa3HNBc4kGA-1uSZTh0Hw",authDomain:"reino-da-mata-160a9.firebaseapp.com",projectId:"reino-da-mata-160a9",storageBucket:"reino-da-mata-160a9.appspot.com",messagingSenderId:"345009196252",appId:"1:345009196252:web:c6e50079b36005b4a7b819"},Lu=pa(np),Mu=Au(Lu);let rp=ep(Lu,"us-central1");typeof window<"u"&&window.location.hostname==="localhost"&&((async()=>{const{connectFirestoreEmulator:n}=await ra(async()=>{const{connectFirestoreEmulator:t}=await Promise.resolve().then(()=>Nu);return{connectFirestoreEmulator:t}},void 0);n(Mu,"localhost",8080)})(),Ou(rp,"localhost",5001));const ut=[];for(let n=0;n<256;++n)ut.push((n+256).toString(16).slice(1));function sp(n,t=0){return(ut[n[t+0]]+ut[n[t+1]]+ut[n[t+2]]+ut[n[t+3]]+"-"+ut[n[t+4]]+ut[n[t+5]]+"-"+ut[n[t+6]]+ut[n[t+7]]+"-"+ut[n[t+8]]+ut[n[t+9]]+"-"+ut[n[t+10]]+ut[n[t+11]]+ut[n[t+12]]+ut[n[t+13]]+ut[n[t+14]]+ut[n[t+15]]).toLowerCase()}let Hr;const ip=new Uint8Array(16);function op(){if(!Hr){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Hr=crypto.getRandomValues.bind(crypto)}return Hr(ip)}const ap=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),na={randomUUID:ap};function up(n,t,e){if(na.randomUUID&&!n)return na.randomUUID();n=n||{};const r=n.random??n.rng?.()??op();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,sp(r)}const lp=async({slug:n,userId:t})=>await(await fetch("https://handlelike-3hjph2wfea-uc.a.run.app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:n,userId:t}),credentials:"omit"})).json();function fp({slug:n,initialLikes:t}){console.log("[LikeButton] RENDER - slug:",n,"initialLikes:",t);const[e,r]=fe.useState(t),[i,o]=fe.useState(!1),[u,c]=fe.useState(""),[d,f]=fe.useState(null),[_,w]=fe.useState(!1);fe.useEffect(()=>{if(typeof window<"u"){let D=localStorage.getItem("userId");D||(D=up(),localStorage.setItem("userId",D)),f(D),w(localStorage.getItem(`liked-${n}-${D}`)==="true")}async function S(){if(n)try{const{doc:D,getDoc:O}=await ra(async()=>{const{doc:z,getDoc:K}=await Promise.resolve().then(()=>Nu);return{doc:z,getDoc:K}},void 0),k=D(Mu,"likes",n),Q=await O(k);if(Q.exists()){const z=Q.data();r(z.count||0)}}catch(D){console.error("Error consultando likes en Firestore:",D)}}S()},[n]);const C=async()=>{if(console.log("[LikeButton] handleLike - slug:",n,"userId:",d),!n){console.error("Intentando dar like sin slug disponible."),c("No se pudo identificar el artículo.");return}if(!d){console.error("Intentando dar like sin userId disponible."),c("Espera un momento e inténtalo de nuevo.");return}o(!0),c("");try{console.log("[LikeButton] handleLike - Calling function with:",{slug:n,userId:d});const S=await lp({slug:n,userId:d});console.log("[LikeButton] handleLike - Function result:",S),S.data.success?(r(S.data.newLikes),typeof window<"u"&&(localStorage.setItem(`liked-${n}-${d}`,"true"),w(!0))):c(S.data.message||"Error al dar like")}catch(S){console.error("Error calling handleLike function:",S),c(S.message||"Ocurrió un error")}finally{o(!1)}};return Nn.jsxs("div",{children:[Nn.jsxs("button",{className:`px-4 py-2 rounded font-semibold transition-colors duration-200 flex items-center gap-2 ${_?"bg-emerald-700 text-emerald-100 cursor-not-allowed":"bg-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:text-white"} ${i?"opacity-50 cursor-wait":""}`,onClick:C,disabled:i||_,"aria-label":_?"Ya diste like":"Dar like",children:[Nn.jsx("span",{className:"icon",children:"❤️"})," ",e]}),u&&Nn.jsx("div",{className:"error",children:u})]})}export{fp as default};
