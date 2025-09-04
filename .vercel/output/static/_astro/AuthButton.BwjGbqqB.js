const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/AuthModal.Bc6YgWGs.js","_astro/jsx-runtime.D_zvdyIk.js","_astro/index.BJfUAbRs.js","_astro/preload-helper.CpCMFT4X.js"])))=>i.map(i=>d[i]);
import{o as be,C as we,r as X,S as Re,p as xe,i as ye,e as ke,d as B,f as Te,h as Ee,k as Ae,_ as Ne,u as ve,b as K,g as Ue,t as Oe}from"./preload-helper.CpCMFT4X.js";import{j as c}from"./jsx-runtime.D_zvdyIk.js";import{r as v}from"./index.BJfUAbRs.js";/**
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
 */const ee="firebasestorage.googleapis.com",te="storageBucket",Ce=2*60*1e3,Ie=10*60*1e3;/**
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
 */class d extends ye{constructor(t,n,s=0){super(M(t),`Firebase Storage: ${n} (${M(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return M(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function M(e){return"storage/"+e}function H(){const e="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,e)}function Pe(e){return new d(h.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function De(e){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Le(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,e)}function Se(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Be(e){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function je(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Me(){return new d(h.CANCELED,"User canceled the upload/download.")}function Fe(e){return new d(h.INVALID_URL,"Invalid URL '"+e+"'.")}function ze(e){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function He(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+te+"' property when initializing the app?")}function $e(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ve(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qe(e){return new d(h.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function z(e){return new d(h.INVALID_ARGUMENT,e)}function ne(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function We(e){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new d(h.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new d(h.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class R{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=R.makeFromUrl(t,n)}catch{return new R(t,"")}if(s.path==="")return s;throw ze(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const m="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",x=new RegExp(`^https?://${w}/${m}/b/${r}/o${_}`,"i"),y={bucket:1,path:3},k=n===ee?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",E=new RegExp(`^https?://${k}/${r}/${f}`,"i"),p=[{regex:l,indices:a,postModify:o},{regex:x,indices:y,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<p.length;g++){const C=p[g],I=C.regex.exec(t);if(I){const ge=I[C.indices.bucket];let j=I[C.indices.path];j||(j=""),s=new R(ge,j),C.postModify(s);break}}if(s==null)throw Fe(t);return s}}class Xe{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ke(e,t,n){let s=1,r=null,o=null,i=!1,l=0;function a(){return l===2}let u=!1;function m(...f){u||(u=!0,t.apply(null,f))}function w(f){r=setTimeout(()=>{r=null,e(x,a())},f)}function _(){o&&clearTimeout(o)}function x(f,...E){if(u){_();return}if(f){_(),m.call(null,f,...E);return}if(a()||i){_(),m.call(null,f,...E);return}s<64&&(s*=2);let p;l===1?(l=2,p=0):p=(s+Math.random())*1e3,w(p)}let y=!1;function k(f){y||(y=!0,_(),!u&&(r!==null?(f||(l=2),clearTimeout(r),w(0)):f||(l=1)))}return w(0),o=setTimeout(()=>{i=!0,k(!0)},n),k}function Ge(e){e(!1)}/**
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
 */function Ye(e){return e!==void 0}function Ze(e){return typeof e=="object"&&!Array.isArray(e)}function $(e){return typeof e=="string"||e instanceof String}function G(e){return V()&&e instanceof Blob}function V(){return typeof Blob<"u"}function Y(e,t,n,s){if(s<t)throw z(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw z(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function q(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function se(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var U;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function Je(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Qe{constructor(t,n,s,r,o,i,l,a,u,m,w,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=m,this.connectionFactory_=w,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,y)=>{this.resolve_=x,this.reject_=y,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===U.NO_ERROR,a=o.getStatus();if(!l||Je(a,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===U.ABORT;s(!1,new L(!1,null,m));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new L(u,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Ye(a)?o(a):o()}catch(a){i(a)}else if(l!==null){const a=H();a.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,a)):i(a)}else if(r.canceled){const a=this.appDelete_?ne():Me();i(a)}else{const a=je();i(a)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=Ke(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ge(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function et(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function tt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function nt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function st(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function rt(e,t,n,s,r,o,i=!0){const l=se(e.urlParams),a=e.url+l,u=Object.assign({},e.headers);return nt(u,t),et(u,n),tt(u,o),st(u,s),new Qe(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function ot(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function it(...e){const t=ot();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(V())return new Blob(e);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function at(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function lt(e){if(typeof atob>"u")throw qe("base-64");return atob(e)}/**
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
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(t,n){this.data=t,this.contentType=n||null}}function ct(e,t){switch(e){case A.RAW:return new F(re(t));case A.BASE64:case A.BASE64URL:return new F(oe(e,t));case A.DATA_URL:return new F(ht(t),dt(t))}throw H()}function re(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function ut(e){let t;try{t=decodeURIComponent(e)}catch{throw D(A.DATA_URL,"Malformed data URL.")}return re(t)}function oe(e,t){switch(e){case A.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw D(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw D(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lt(t)}catch(r){throw r.message.includes("polyfill")?r:D(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ie{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw D(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ft(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function ht(e){const t=new ie(e);return t.base64?oe(A.BASE64,t.rest):ut(t.rest)}function dt(e){return new ie(e).contentType}function ft(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class N{constructor(t,n){let s=0,r="";G(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(G(this.data_)){const s=this.data_,r=at(s,t,n);return r===null?null:new N(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new N(s,!0)}}static getBlob(...t){if(V()){const n=t.map(s=>s instanceof N?s.data_:s);return new N(it.apply(null,n))}else{const n=t.map(i=>$(i)?ct(A.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let l=0;l<i.length;l++)r[o++]=i[l]}),new N(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ae(e){let t;try{t=JSON.parse(e)}catch{return null}return Ze(t)?t:null}/**
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
 */function pt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function mt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function le(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function _t(e,t){return t}class b{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||_t}}let S=null;function gt(e){return!$(e)||e.length<2?e:le(e)}function ce(){if(S)return S;const e=[];e.push(new b("bucket")),e.push(new b("generation")),e.push(new b("metageneration")),e.push(new b("name","fullPath",!0));function t(o,i){return gt(i)}const n=new b("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new b("size");return r.xform=s,e.push(r),e.push(new b("timeCreated")),e.push(new b("updated")),e.push(new b("md5Hash",null,!0)),e.push(new b("cacheControl",null,!0)),e.push(new b("contentDisposition",null,!0)),e.push(new b("contentEncoding",null,!0)),e.push(new b("contentLanguage",null,!0)),e.push(new b("contentType",null,!0)),e.push(new b("metadata","customMetadata",!0)),S=e,S}function bt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new R(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function wt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return bt(s,e),s}function ue(e,t,n){const s=ae(t);return s===null?null:wt(e,s,n)}function Rt(e,t,n,s){const r=ae(t);if(r===null||!$(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const m=e.bucket,w=e.fullPath,_="/b/"+i(m)+"/o/"+i(w),x=q(_,n,s),y=se({alt:"media",token:u});return x+y})[0]}function xt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class he{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function de(e){if(!e)throw H()}function yt(e,t){function n(s,r){const o=ue(e,r,t);return de(o!==null),o}return n}function kt(e,t){function n(s,r){const o=ue(e,r,t);return de(o!==null),Rt(o,r,e.host,e._protocol)}return n}function fe(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Se():r=Le():n.getStatus()===402?r=De(e.bucket):n.getStatus()===403?r=Be(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Tt(e){const t=fe(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Pe(e.path)),o.serverResponse=r.serverResponse,o}return n}function Et(e,t,n){const s=t.fullServerUrl(),r=q(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,l=new he(r,o,kt(e,n),i);return l.errorHandler=Tt(t),l}function At(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Nt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=At(null,t)),s}function vt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let p="";for(let g=0;g<2;g++)p=p+Math.random().toString().slice(2);return p}const a=l();i["Content-Type"]="multipart/related; boundary="+a;const u=Nt(t,s,r),m=xt(u,n),w="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+a+"--",x=N.getBlob(w,s,_);if(x===null)throw $e();const y={name:u.fullPath},k=q(o,e.host,e._protocol),f="POST",E=e.maxUploadRetryTime,T=new he(k,f,yt(e,n),E);return T.urlParams=y,T.headers=i,T.body=x.uploadData(),T.errorHandler=fe(t),T}class Ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ot extends Ut{initXhr(){this.xhr_.responseType="text"}}function pe(){return new Ot}/**
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
 */class O{constructor(t,n){this._service=t,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new O(t,n)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return le(this._location.path)}get storage(){return this._service}get parent(){const t=pt(this._location.path);if(t===null)return null;const n=new R(this._location.bucket,t);return new O(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw We(t)}}function Ct(e,t,n){e._throwIfRoot("uploadBytes");const s=vt(e.storage,e._location,ce(),new N(t,!0),n);return e.storage.makeRequestWithTokens(s,pe).then(r=>({metadata:r,ref:e}))}function It(e){e._throwIfRoot("getDownloadURL");const t=Et(e.storage,e._location,ce());return e.storage.makeRequestWithTokens(t,pe).then(n=>{if(n===null)throw Ve();return n})}function Pt(e,t){const n=mt(e._location.path,t),s=new R(e._location.bucket,n);return new O(e.storage,s)}/**
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
 */function Dt(e){return/^[A-Za-z]+:\/\//.test(e)}function Lt(e,t){return new O(e,t)}function me(e,t){if(e instanceof W){const n=e;if(n._bucket==null)throw He();const s=new O(n,n._bucket);return t!=null?me(s,t):s}else return t!==void 0?Pt(e,t):e}function St(e,t){if(t&&Dt(t)){if(e instanceof W)return Lt(e,t);throw z("To use ref(service, url), the first argument must be a Storage instance.")}else return me(e,t)}function Z(e,t){const n=t?.[te];return n==null?null:R.makeFromBucketSpec(n,e)}function Bt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Ae(r,e.app.options.projectId))}class W{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ee,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ce,this._maxUploadRetryTime=Ie,this._requests=new Set,r!=null?this._bucket=R.makeFromBucketSpec(r,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=Z(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Y("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Y("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Xe(ne());{const i=rt(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const J="@firebase/storage",Q="0.13.7";/**
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
 */const _e="storage";function jt(e,t,n){return e=B(e),Ct(e,t,n)}function Mt(e){return e=B(e),It(e)}function Ft(e,t){return e=B(e),St(e,t)}function zt(e=ke(),t){e=B(e);const s=Te(e,_e).getImmediate({identifier:t}),r=Ee("storage");return r&&Ht(s,...r),s}function Ht(e,t,n,s={}){Bt(e,t,n,s)}function $t(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new W(n,s,r,t,Re)}function Vt(){be(new we(_e,$t,"PUBLIC").setMultipleInstances(!0)),X(J,Q,""),X(J,Q,"esm2017")}Vt();const qt=v.lazy(()=>Ne(()=>import("./AuthModal.Bc6YgWGs.js"),__vite__mapDeps([0,1,2,3])));function Gt(){const{user:e,logout:t,refreshUser:n}=ve(),[s,r]=v.useState(!1),[o,i]=v.useState(!1),[l,a]=v.useState(""),[u,m]=v.useState(!1),[w,_]=v.useState(!1),x="https://ui-avatars.com/api/?name=User&background=22c55e&color=fff&size=128",y=async k=>{const f=k.target.files[0];if(f){if(f.size>2*1024*1024){m(!0),k.target.value="";return}try{i(!0),a("");const E=zt(K),T=Ft(E,`avatars/${e.uid}.jpg`);await jt(T,f);let p=null;try{p=await Mt(T)}catch{a("No se pudo obtener la imagen subida");return}const C=Ue(K).currentUser;try{await Oe(C,{photoURL:p})}catch{a("No se pudo actualizar el perfil");return}typeof n=="function"&&await n()}catch{a("Error inesperado al cambiar avatar")}finally{i(!1)}}};return typeof window<"u"&&(window.onerror=(k,f,E,T,p)=>(a("[GLOBAL JS ERROR] "+k+(p?.message?" | "+p.message:"")),!1)),e?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("div",{className:"relative flex items-center",onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[c.jsx("img",{src:e.photoURL||x,alt:"avatar",className:"w-9 h-9 rounded-full border-2 border-emerald-600 shadow-sm object-cover transition-transform cursor-pointer"}),c.jsxs("div",{className:`pointer-events-none transition-all duration-200 absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-yellow-100 border border-yellow-400 text-yellow-900 text-xs rounded px-3 py-2 shadow-lg z-[999] whitespace-nowrap flex items-center gap-1 ${w?"opacity-100":"opacity-0"}`,children:[c.jsx("svg",{className:"h-4 w-4 text-yellow-500 mr-1 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"})}),c.jsxs("span",{children:[c.jsx("b",{children:"No selecciones imágenes mayores a 2MB."})," Si tu navegador falla, prueba con otro navegador o reduce el tamaño antes de subir."]})]}),o&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 rounded-full z-10",children:c.jsxs("svg",{className:"animate-spin h-6 w-6 text-emerald-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]})}),c.jsxs("label",{className:"absolute bottom-0 right-0 bg-emerald-600 rounded-full p-1 text-white text-xs cursor-pointer opacity-90 hover:opacity-100 transition-opacity block",title:"Cambiar foto",children:[c.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:y,disabled:o}),c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 00-3-3l-9 9v3h3zm0 0v6a2 2 0 002 2h6a2 2 0 002-2v-6"})})]}),u&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-lg px-8 py-6 max-w-xs w-full flex flex-col items-center text-center",children:[c.jsx("svg",{className:"h-10 w-10 text-red-500 mb-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"})}),c.jsx("div",{className:"font-semibold text-red-600 mb-2",children:"Debes subir una imagen menor a 2MB."}),c.jsx("div",{className:"text-xs text-gray-500 mb-3",children:"Si la pantalla se pone negra, prueba con otro navegador o reduce el tamaño de la imagen."}),c.jsx("button",{className:"mt-2 px-4 py-1 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors",onClick:()=>m(!1),children:"Cerrar"})]})})]}),l&&c.jsx("span",{className:"ml-2 text-xs text-red-500",children:l}),c.jsx("button",{className:"ml-2 px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-emerald-600 hover:text-white font-semibold text-sm transition-colors",onClick:t,children:"Cerrar sesión"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors",onClick:()=>r(!0),children:"Iniciar sesión"}),s&&c.jsx(v.Suspense,{fallback:c.jsx("div",{className:"fixed inset-0 z-40 bg-black/30 flex items-center justify-center",children:c.jsx("p",{className:"text-white",children:"Cargando..."})}),children:c.jsx(qt,{open:s,onClose:()=>r(!1)})})]})}export{Gt as A};
