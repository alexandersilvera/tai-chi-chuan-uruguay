import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{r as k,R as A}from"./index.BJfUAbRs.js";import{g as D,a as j,o as Ce,s as Ue,b as Pe,c as je,G as Ie,d as J,F as Se,_ as De,C as Le,r as Q,S as ze,e as Be,f as Me,h as Fe,i as H,j as He,k as $e,l as Ve,u as We}from"./firebase.client.D67RmNpa.js";const ae=k.createContext();function qe({children:e}){const[t,n]=k.useState(null),[r,s]=k.useState(!0);k.useEffect(()=>{const l=D(j),c=Ce(l,u=>{n(u),s(!1)});return()=>c()},[]);const o=async()=>{const l=D(j);l.currentUser&&l.currentUser.reload&&(await l.currentUser.reload(),n({...l.currentUser}))},i=async()=>{const l=D(j);await Ue(l),n(null)};return a.jsx(ae.Provider,{value:{user:t,loading:r,logout:i,refreshUser:o},children:e})}function le(){return k.useContext(ae)}var ce={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ee=A.createContext&&A.createContext(ce),Ge=["attr","size","title"];function Ke(e,t){if(e==null)return{};var n=Xe(e,t),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Xe(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(r){Ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ye(e,t,n){return t=Ze(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){var t=Je(e,"string");return typeof t=="symbol"?t:t+""}function Je(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ue(e){return e&&e.map((t,n)=>A.createElement(t.tag,F({key:n},t.attr),ue(t.child)))}function de(e){return t=>A.createElement(Qe,M({attr:F({},e.attr)},t),ue(e.child))}function Qe(e){var t=n=>{var{attr:r,size:s,title:o}=e,i=Ke(e,Ge),l=s||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),A.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:c,style:F(F({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&A.createElement("title",null,o),e.children)};return ee!==void 0?A.createElement(ee.Consumer,null,n=>t(n)):t(ce)}function et(e){return de({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}function tt(e){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function nt({open:e,onClose:t}){const[n,r]=k.useState("login"),[s,o]=k.useState(""),[i,l]=k.useState(""),[c,u]=k.useState(""),{user:b}=le();if(!e)return null;const g=D(j),m=async d=>{d.preventDefault(),u("");try{n==="login"?await Pe(g,s,i):await je(g,s,i),t()}catch(p){u(p.message)}},y=async()=>{u("");try{const d=new Ie;await J(g,d),t()}catch(d){u(d.message)}},v=async()=>{u("");try{const d=new Se;await J(g,d),t()}catch(d){u(d.message)}};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60",children:a.jsxs("div",{className:"bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md p-8 relative animate-fade-in",children:[a.jsx("button",{className:"absolute top-2 right-2 text-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white",onClick:t,children:"×"}),a.jsxs("div",{className:"flex mb-6",children:[a.jsx("button",{className:`flex-1 py-2 text-lg font-semibold rounded-t-lg ${n==="login"?"bg-emerald-600 text-white":"bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"}`,onClick:()=>r("login"),children:"Iniciar sesión"}),a.jsx("button",{className:`flex-1 py-2 text-lg font-semibold rounded-t-lg ${n==="register"?"bg-emerald-600 text-white":"bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"}`,onClick:()=>r("register"),children:"Registrarse"})]}),a.jsxs("form",{onSubmit:m,className:"space-y-4",children:[a.jsx("input",{type:"email",className:"w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400",placeholder:"Correo electrónico",value:s,onChange:d=>o(d.target.value),required:!0}),a.jsx("input",{type:"password",className:"w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400",placeholder:"Contraseña",value:i,onChange:d=>l(d.target.value),required:!0}),c&&a.jsx("div",{className:"text-red-500 text-sm",children:c}),a.jsx("button",{type:"submit",className:"w-full py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors",children:n==="login"?"Entrar":"Registrarse"})]}),a.jsxs("div",{className:"my-6 flex items-center gap-2",children:[a.jsx("div",{className:"flex-1 h-px bg-zinc-300 dark:bg-zinc-700"}),a.jsx("span",{className:"text-zinc-500 dark:text-zinc-400 text-sm",children:"o continúa con"}),a.jsx("div",{className:"flex-1 h-px bg-zinc-300 dark:bg-zinc-700"})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("button",{onClick:y,className:"flex items-center justify-center gap-3 w-full py-2 rounded bg-white border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-semibold",children:[a.jsx(et,{className:"text-xl"})," Google"]}),a.jsxs("button",{onClick:v,className:"flex items-center justify-center gap-3 w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors",children:[a.jsx(tt,{className:"text-xl"})," Facebook"]})]})]})})}/**
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
 */const he="firebasestorage.googleapis.com",fe="storageBucket",rt=2*60*1e3,st=10*60*1e3;/**
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
 */class f extends Me{constructor(t,n,r=0){super(V(t),`Firebase Storage: ${n} (${V(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return V(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function V(e){return"storage/"+e}function G(){const e="An unknown error occurred, please check the error payload for server response.";return new f(h.UNKNOWN,e)}function ot(e){return new f(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function it(e){return new f(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function at(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f(h.UNAUTHENTICATED,e)}function lt(){return new f(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ct(e){return new f(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ut(){return new f(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dt(){return new f(h.CANCELED,"User canceled the upload/download.")}function ht(e){return new f(h.INVALID_URL,"Invalid URL '"+e+"'.")}function ft(e){return new f(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function pt(){return new f(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fe+"' property when initializing the app?")}function gt(){return new f(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mt(){return new f(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bt(e){return new f(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function q(e){return new f(h.INVALID_ARGUMENT,e)}function pe(){return new f(h.APP_DELETED,"The Firebase app was deleted.")}function _t(e){return new f(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function L(e,t){return new f(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new f(h.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class R{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=R.makeFromUrl(t,n)}catch{return new R(t,"")}if(r.path==="")return r;throw ft(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const b="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${g}/${b}/b/${s}/o${m}`,"i"),v={bucket:1,path:3},d=n===he?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",N=new RegExp(`^https?://${d}/${s}/${p}`,"i"),_=[{regex:l,indices:c,postModify:o},{regex:y,indices:v,postModify:u},{regex:N,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<_.length;w++){const P=_[w],I=P.regex.exec(t);if(I){const Ae=I[P.indices.bucket];let $=I[P.indices.path];$||($=""),r=new R(Ae,$),P.postModify(r);break}}if(r==null)throw ht(t);return r}}class wt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xt(e,t,n){let r=1,s=null,o=null,i=!1,l=0;function c(){return l===2}let u=!1;function b(...p){u||(u=!0,t.apply(null,p))}function g(p){s=setTimeout(()=>{s=null,e(y,c())},p)}function m(){o&&clearTimeout(o)}function y(p,...N){if(u){m();return}if(p){m(),b.call(null,p,...N);return}if(c()||i){m(),b.call(null,p,...N);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,g(_)}let v=!1;function d(p){v||(v=!0,m(),!u&&(s!==null?(p||(l=2),clearTimeout(s),g(0)):p||(l=1)))}return g(0),o=setTimeout(()=>{i=!0,d(!0)},n),d}function yt(e){e(!1)}/**
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
 */function vt(e){return e!==void 0}function kt(e){return typeof e=="object"&&!Array.isArray(e)}function K(e){return typeof e=="string"||e instanceof String}function ne(e){return X()&&e instanceof Blob}function X(){return typeof Blob<"u"}function re(e,t,n,r){if(r<t)throw q(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw q(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Y(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function ge(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var C;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(C||(C={}));/**
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
 */function Rt(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||s||o}/**
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
 */class Tt{constructor(t,n,r,s,o,i,l,c,u,b,g,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=b,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new z(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===C.NO_ERROR,c=o.getStatus();if(!l||Rt(c,this.additionalRetryCodes_)&&this.retry){const b=o.getErrorCode()===C.ABORT;r(!1,new z(!1,null,b));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new z(u,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());vt(c)?o(c):o()}catch(c){i(c)}else if(l!==null){const c=G();c.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,c)):i(c)}else if(s.canceled){const c=this.appDelete_?pe():dt();i(c)}else{const c=ut();i(c)}};this.canceled_?n(!1,new z(!1,null,!0)):this.backoffId_=xt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&yt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Nt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Et(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ot(e,t){t&&(e["X-Firebase-GMPID"]=t)}function At(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Ct(e,t,n,r,s,o,i=!0){const l=ge(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return Ot(u,t),Nt(u,n),Et(u,o),At(u,r),new Tt(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}/**
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
 */function Ut(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Pt(...e){const t=Ut();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(X())return new Blob(e);throw new f(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function It(e){if(typeof atob>"u")throw bt("base-64");return atob(e)}/**
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
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class W{constructor(t,n){this.data=t,this.contentType=n||null}}function St(e,t){switch(e){case E.RAW:return new W(me(t));case E.BASE64:case E.BASE64URL:return new W(be(e,t));case E.DATA_URL:return new W(Lt(t),zt(t))}throw G()}function me(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,i=e.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Dt(e){let t;try{t=decodeURIComponent(e)}catch{throw L(E.DATA_URL,"Malformed data URL.")}return me(t)}function be(e,t){switch(e){case E.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw L(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw L(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=It(t)}catch(s){throw s.message.includes("polyfill")?s:L(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class _e{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw L(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Bt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Lt(e){const t=new _e(e);return t.base64?be(E.BASE64,t.rest):Dt(t.rest)}function zt(e){return new _e(e).contentType}function Bt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class O{constructor(t,n){let r=0,s="";ne(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(ne(this.data_)){const r=this.data_,s=jt(r,t,n);return s===null?null:new O(s)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new O(r,!0)}}static getBlob(...t){if(X()){const n=t.map(r=>r instanceof O?r.data_:r);return new O(Pt.apply(null,n))}else{const n=t.map(i=>K(i)?St(E.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let l=0;l<i.length;l++)s[o++]=i[l]}),new O(s,!0)}}uploadData(){return this.data_}}/**
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
 */function we(e){let t;try{t=JSON.parse(e)}catch{return null}return kt(t)?t:null}/**
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
 */function Mt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ft(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function xe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ht(e,t){return t}class x{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||Ht}}let B=null;function $t(e){return!K(e)||e.length<2?e:xe(e)}function ye(){if(B)return B;const e=[];e.push(new x("bucket")),e.push(new x("generation")),e.push(new x("metageneration")),e.push(new x("name","fullPath",!0));function t(o,i){return $t(i)}const n=new x("name");n.xform=t,e.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new x("size");return s.xform=r,e.push(s),e.push(new x("timeCreated")),e.push(new x("updated")),e.push(new x("md5Hash",null,!0)),e.push(new x("cacheControl",null,!0)),e.push(new x("contentDisposition",null,!0)),e.push(new x("contentEncoding",null,!0)),e.push(new x("contentLanguage",null,!0)),e.push(new x("contentType",null,!0)),e.push(new x("metadata","customMetadata",!0)),B=e,B}function Vt(e,t){function n(){const r=e.bucket,s=e.fullPath,o=new R(r,s);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Wt(e,t,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,t[i.server])}return Vt(r,e),r}function ve(e,t,n){const r=we(t);return r===null?null:Wt(e,r,n)}function qt(e,t,n,r){const s=we(t);if(s===null||!K(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const b=e.bucket,g=e.fullPath,m="/b/"+i(b)+"/o/"+i(g),y=Y(m,n,r),v=ge({alt:"media",token:u});return y+v})[0]}function Gt(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class ke{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Re(e){if(!e)throw G()}function Kt(e,t){function n(r,s){const o=ve(e,s,t);return Re(o!==null),o}return n}function Xt(e,t){function n(r,s){const o=ve(e,s,t);return Re(o!==null),qt(o,s,e.host,e._protocol)}return n}function Te(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=lt():s=at():n.getStatus()===402?s=it(e.bucket):n.getStatus()===403?s=ct(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function Yt(e){const t=Te(e);function n(r,s){let o=t(r,s);return r.getStatus()===404&&(o=ot(e.path)),o.serverResponse=s.serverResponse,o}return n}function Zt(e,t,n){const r=t.fullServerUrl(),s=Y(r,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,l=new ke(s,o,Xt(e,n),i);return l.errorHandler=Yt(t),l}function Jt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Qt(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=Jt(null,t)),r}function en(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let _="";for(let w=0;w<2;w++)_=_+Math.random().toString().slice(2);return _}const c=l();i["Content-Type"]="multipart/related; boundary="+c;const u=Qt(t,r,s),b=Gt(u,n),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+b+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",y=O.getBlob(g,r,m);if(y===null)throw gt();const v={name:u.fullPath},d=Y(o,e.host,e._protocol),p="POST",N=e.maxUploadRetryTime,T=new ke(d,p,Kt(e,n),N);return T.urlParams=v,T.headers=i,T.body=y.uploadData(),T.errorHandler=Te(t),T}class tn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=C.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=C.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=C.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class nn extends tn{initXhr(){this.xhr_.responseType="text"}}function Ne(){return new nn}/**
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
 */class U{constructor(t,n){this._service=t,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new U(t,n)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xe(this._location.path)}get storage(){return this._service}get parent(){const t=Mt(this._location.path);if(t===null)return null;const n=new R(this._location.bucket,t);return new U(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw _t(t)}}function rn(e,t,n){e._throwIfRoot("uploadBytes");const r=en(e.storage,e._location,ye(),new O(t,!0),n);return e.storage.makeRequestWithTokens(r,Ne).then(s=>({metadata:s,ref:e}))}function sn(e){e._throwIfRoot("getDownloadURL");const t=Zt(e.storage,e._location,ye());return e.storage.makeRequestWithTokens(t,Ne).then(n=>{if(n===null)throw mt();return n})}function on(e,t){const n=Ft(e._location.path,t),r=new R(e._location.bucket,n);return new U(e.storage,r)}/**
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
 */function an(e){return/^[A-Za-z]+:\/\//.test(e)}function ln(e,t){return new U(e,t)}function Ee(e,t){if(e instanceof Z){const n=e;if(n._bucket==null)throw pt();const r=new U(n,n._bucket);return t!=null?Ee(r,t):r}else return t!==void 0?on(e,t):e}function cn(e,t){if(t&&an(t)){if(e instanceof Z)return ln(e,t);throw q("To use ref(service, url), the first argument must be a Storage instance.")}else return Ee(e,t)}function se(e,t){const n=t?.[fe];return n==null?null:R.makeFromBucketSpec(n,e)}function un(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:Ve(s,e.app.options.projectId))}class Z{constructor(t,n,r,s,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=he,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rt,this._maxUploadRetryTime=st,this._requests=new Set,s!=null?this._bucket=R.makeFromBucketSpec(s,this._host):this._bucket=se(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=se(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,n,r,s,o=!0){if(this._deleted)return new wt(pe());{const i=Ct(t,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const oe="@firebase/storage",ie="0.13.7";/**
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
 */const Oe="storage";function dn(e,t,n){return e=H(e),rn(e,t,n)}function hn(e){return e=H(e),sn(e)}function fn(e,t){return e=H(e),cn(e,t)}function pn(e=Fe(),t){e=H(e);const r=He(e,Oe).getImmediate({identifier:t}),s=$e("storage");return s&&gn(r,...s),r}function gn(e,t,n,r={}){un(e,t,n,r)}function mn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Z(n,r,s,t,ze)}function bn(){De(new Le(Oe,mn,"PUBLIC").setMultipleInstances(!0)),Q(oe,ie,""),Q(oe,ie,"esm2017")}bn();function _n(){const{user:e,logout:t,refreshUser:n}=le(),[r,s]=k.useState(!1),[o,i]=k.useState(!1),[l,c]=k.useState(""),[u,b]=k.useState(!1),[g,m]=k.useState(!1),y="https://ui-avatars.com/api/?name=User&background=22c55e&color=fff&size=128",v=async d=>{const p=d.target.files[0];if(p){if(p.size>2*1024*1024){b(!0),d.target.value="";return}try{i(!0),c("");const N=pn(j),T=fn(N,`avatars/${e.uid}.jpg`);await dn(T,p);let _=null;try{_=await hn(T)}catch{c("No se pudo obtener la imagen subida");return}const P=D(j).currentUser;try{await We(P,{photoURL:_})}catch{c("No se pudo actualizar el perfil");return}typeof n=="function"&&await n()}catch{c("Error inesperado al cambiar avatar")}finally{i(!1)}}};return typeof window<"u"&&(window.onerror=(d,p,N,T,_)=>(c("[GLOBAL JS ERROR] "+d+(_?.message?" | "+_.message:"")),!1)),e?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("div",{className:"relative flex items-center",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[a.jsx("img",{src:e.photoURL||y,alt:"avatar",className:"w-9 h-9 rounded-full border-2 border-emerald-600 shadow-sm object-cover transition-transform cursor-pointer"}),a.jsxs("div",{className:`pointer-events-none transition-all duration-200 absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-yellow-100 border border-yellow-400 text-yellow-900 text-xs rounded px-3 py-2 shadow-lg z-[999] whitespace-nowrap flex items-center gap-1 ${g?"opacity-100":"opacity-0"}`,children:[a.jsx("svg",{className:"h-4 w-4 text-yellow-500 mr-1 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"})}),a.jsxs("span",{children:[a.jsx("b",{children:"No selecciones imágenes mayores a 2MB."})," Si tu navegador falla, prueba con otro navegador o reduce el tamaño antes de subir."]})]}),o&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 rounded-full z-10",children:a.jsxs("svg",{className:"animate-spin h-6 w-6 text-emerald-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]})}),a.jsxs("label",{className:"absolute bottom-0 right-0 bg-emerald-600 rounded-full p-1 text-white text-xs cursor-pointer opacity-90 hover:opacity-100 transition-opacity block",title:"Cambiar foto",children:[a.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:v,disabled:o}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 00-3-3l-9 9v3h3zm0 0v6a2 2 0 002 2h6a2 2 0 002-2v-6"})})]}),u&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-lg px-8 py-6 max-w-xs w-full flex flex-col items-center text-center",children:[a.jsx("svg",{className:"h-10 w-10 text-red-500 mb-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"})}),a.jsx("div",{className:"font-semibold text-red-600 mb-2",children:"Debes subir una imagen menor a 2MB."}),a.jsx("div",{className:"text-xs text-gray-500 mb-3",children:"Si la pantalla se pone negra, prueba con otro navegador o reduce el tamaño de la imagen."}),a.jsx("button",{className:"mt-2 px-4 py-1 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors",onClick:()=>b(!1),children:"Cerrar"})]})})]}),l&&a.jsx("span",{className:"ml-2 text-xs text-red-500",children:l}),a.jsx("button",{className:"ml-2 px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-emerald-600 hover:text-white font-semibold text-sm transition-colors",onClick:t,children:"Cerrar sesión"})]}):a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors",onClick:()=>s(!0),children:"Iniciar sesión"}),a.jsx(nt,{open:r,onClose:()=>s(!1)})]})}function vn(){return a.jsx(qe,{children:a.jsx(_n,{})})}export{vn as default};
