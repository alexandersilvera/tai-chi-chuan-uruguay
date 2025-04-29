import{j as Z}from"./jsx-runtime.D_zvdyIk.js";import{r as Rt}from"./index.BJfUAbRs.js";import{d as ie,e as fl,f as dl,h as ml,i as pl,j as gl,k as _l,L as yl,l as Lt,m as Tl,n as El,S as vl,o as Il,C as Al,r as Qi,p as wl,q as Rl,g as Pl,b as Jo}from"./preload-helper.eeUbMvnu.js";import{A as Vl}from"./AuthButton.KdZlvgWJ.js";var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Zo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,A){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],T=E.g[2];var A=E.g[3],g=p+(A^_&(T^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(y[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,y),T=0;break}}else for(;A<p;)if(y[T++]=E[A++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function u(E,p){this.h=p;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;y&&A==p||(_[T]=A,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return b(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new u(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return b(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=v,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var v=h(0),R=h(1),C=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-b(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+b(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var T=st(_,p).g;_=B(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,D(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=B(this,E),x(E)?-1:D(E)?0:1};function b(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return x(this)?b(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=p;T++){var A=y+(this.i(T)&65535)+(E.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function B(E,p){return E.add(b(p))}r.j=function(E){if(D(this)||D(E))return v;if(x(this))return x(E)?b(this).j(b(E)):b(b(this).j(E));if(x(E))return b(this.j(b(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,kt=E.i(T)>>>16,Me=E.i(T)&65535;_[2*y+2*T]+=g*Me,j(_,2*y+2*T),_[2*y+2*T+1]+=A*Me,j(_,2*y+2*T+1),_[2*y+2*T+1]+=g*kt,j(_,2*y+2*T+1),_[2*y+2*T+2]+=A*kt,j(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function j(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function st(E,p){if(D(p))throw Error("division by zero");if(D(E))return new K(v,v);if(x(E))return p=st(b(E),p),new K(b(p.g),b(p.h));if(x(p))return p=st(E,b(p)),new K(b(p.g),p.h);if(30<E.g.length){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(E);)_=Nt(_),y=Nt(y);var T=ot(_,1),A=ot(y,1);for(y=ot(y,2),_=ot(_,2);!D(y);){var g=A.add(y);0>=g.l(E)&&(T=T.add(_),A=g),y=ot(y,1),_=ot(_,1)}return p=B(E,T.j(p)),new K(T,p)}for(T=v;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(p);x(g)||0<g.l(E);)_-=y,A=f(_),g=A.j(p);D(A)&&(A=R),T=T.add(A),E=B(E,g)}return new K(T,E)}r.A=function(E){return st(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Nt(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function ot(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,T=[],A=0;A<y;A++)T[A]=0<p?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,Kt=u}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,Je,ea,$n,Wr,na,ra,sa;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function v(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,R.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,w){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return a.prototype[I].apply(d,S)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,w=d.length||0;s.length=I+w;for(let S=0;S<w;S++)s[I+S]=d[S]}else s.push(d)}}class B{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function st(s){return st[" "](s),s}st[" "]=function(){};var Nt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ot(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Er;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const d=Me.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Me=new B(()=>new Du,s=>s.reset());class Du{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Oe=!1,Er=new kt,Qs=()=>{const s=c.Promise.resolve(void 0);Le=()=>{s.then(Nu)}};var Nu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var a=Me;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Oe=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ku=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Fe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Nt){t:{try{st(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:xu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Fe.aa.h.call(this)}}D(Fe,ht);var xu={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Mu=0;function Lu(s,a,l,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++Mu,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,l,d,I){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=Ir(s,a,d,I);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new Lu(a,this.src,w,!!d,I),a.fa=l,s.push(a)),a};function vr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(vn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ir(s,a,l,d){for(var I=0;I<s.length;++I){var w=s[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var Ar="closure_lm_"+(1e6*Math.random()|0),wr={};function Ws(s,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ws(s,a[w],l,d,I);return null}return l=Ys(l),s&&s[En]?s.K(a,l,f(d)?!!d.capture:!1,I):Ou(s,a,l,!1,d,I)}function Ou(s,a,l,d,I,w){if(!a)throw Error("Invalid event type");var S=f(I)?!!I.capture:!!I,Q=Pr(s);if(Q||(s[Ar]=Q=new In(s)),l=Q.add(a,l,d,S,w),l.proxy)return l;if(d=Fu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)ku||(I=S),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(Xs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Fu(){function s(l){return a.call(s.src,s.listener,l)}const a=Uu;return s}function Hs(s,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)Hs(s,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=Ys(l),s&&s[En]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Ir(w,l,d,I),-1<l&&(vn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Pr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ir(a,l,d,I)),(l=-1<s?a[s]:null)&&Rr(l))}function Rr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[En])vr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Xs(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Pr(a))?(vr(l,s),l.h==0&&(l.src=null,a[Ar]=null)):vn(s)}}}function Xs(s){return s in wr?wr[s]:wr[s]="on"+s}function Uu(s,a){if(s.da)s=!0;else{a=new Fe(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Rr(s),s=l.call(d,a)}return s}function Pr(s){return s=s[Ar],s instanceof In?s:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ys(s){return typeof s=="function"?s:(s[Vr]||(s[Vr]=function(a){return s.handleEvent(a)}),s[Vr])}function ft(){qt.call(this),this.i=new In(this),this.M=this,this.F=null}D(ft,qt),ft.prototype[En]=!0,ft.prototype.removeEventListener=function(s,a,l,d){Hs(this,s,a,l,d)};function yt(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var I=a;a=new ht(d,s),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];I=An(S,d,!0,a)&&I}if(S=a.g=s,I=An(S,d,!0,a)&&I,I=An(S,d,!1,a)&&I,l)for(w=0;w<l.length;w++)S=a.g=l[w],I=An(S,d,!1,a)&&I}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)vn(l[d]);delete s.g[a],s.h--}}this.F=null},ft.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},ft.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function An(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var Q=S.listener,at=S.ha||S.src;S.fa&&vr(s.i,S),I=Q.call(at,d)!==!1&&I}}return I&&!d.defaultPrevented}function Js(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Zs(s){s.g=Js(()=>{s.g=null,s.i&&(s.i=!1,Zs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class qu extends qt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Zs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(s){qt.call(this),this.h=s,this.g={}}D(Ue,qt);var ti=[];function ei(s){ot(s.g,function(a,l){this.g.hasOwnProperty(l)&&Rr(a)},s),s.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),ei(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cr=c.JSON.stringify,ju=c.JSON.parse,Bu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Sr(){}Sr.prototype.h=null;function ni(s){return s.h||(s.h=s.i())}function ri(){}var qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){ht.call(this,"d")}D(br,ht);function Dr(){ht.call(this,"c")}D(Dr,ht);var Zt={},si=null;function wn(){return si=si||new ft}Zt.La="serverreachability";function ii(s){ht.call(this,Zt.La,s)}D(ii,ht);function je(s){const a=wn();yt(a,new ii(a))}Zt.STAT_EVENT="statevent";function oi(s,a){ht.call(this,Zt.STAT_EVENT,s),this.stat=a}D(oi,ht);function Tt(s){const a=wn();yt(a,new oi(a,s))}Zt.Ma="timingevent";function ai(s,a){ht.call(this,Zt.Ma,s),this.size=a}D(ai,ht);function Be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function ze(){this.g=!0}ze.prototype.xa=function(){this.g=!1};function zu(s,a,l,d,I,w){s.info(function(){if(s.g)if(w)for(var S="",Q=w.split("&"),at=0;at<Q.length;at++){var $=Q[at].split("=");if(1<$.length){var dt=$[0];$=$[1];var mt=dt.split("_");S=2<=mt.length&&mt[1]=="type"?S+(dt+"="+$+"&"):S+(dt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+S})}function $u(s,a,l,d,I,w,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+S})}function de(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Gu(s,l)+(d?" "+d:"")})}function Ku(s,a){s.info(function(){return"TIMEOUT: "+a})}ze.prototype.info=function(){};function Gu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return Cr(l)}catch{return a}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nr;function Pn(){}D(Pn,Sr),Pn.prototype.g=function(){return new XMLHttpRequest},Pn.prototype.i=function(){return{}},Nr=new Pn;function jt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new li}function li(){this.i=null,this.g="",this.h=!1}var ci={},kr={};function xr(s,a,l){s.L=1,s.v=bn(xt(a)),s.m=l,s.P=!0,hi(s,null)}function hi(s,a){s.F=Date.now(),Vn(s),s.A=xt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ri(l.i,"t",d),s.C=0,l=s.j.J,s.h=new li,s.g=zi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new qu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(ti[0]=I.toString()),I=ti);for(var w=0;w<I.length;w++){var S=Ws(l,I[w],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),zu(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Mt(s)==3?a.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Mt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ni(this.g)))){this.J||mt!=4||a==7||(a==8||0>=ge?je(3):je(2)),Mr(this);var l=this.g.Z();this.X=l;e:if(fi(this)){var d=Ni(this.g);s="";var I=d.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),$e(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,$u(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Q)){var $=Q;break e}}$=null}if(l=$)de(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,l);else{this.o=!1,this.s=3,Tt(12),te(this),$e(this);break t}}if(this.P){l=!0;let wt;for(;!this.J&&this.C<S.length;)if(wt=Qu(this,S),wt==kr){mt==4&&(this.s=4,Tt(14),l=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==ci){this.s=4,Tt(15),de(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else de(this.i,this.l,wt,null),Lr(this,wt);if(fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||S.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)de(this.i,this.l,S,"[Invalid Chunked Response]"),te(this),$e(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Br(dt),dt.M=!0,Tt(11))}}else de(this.i,this.l,S,null),Lr(this,S);mt==4&&te(this),this.o&&!this.J&&(mt==4?Ui(this.j,this):(this.o=!1,Vn(this)))}else cl(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),te(this),$e(this)}}}catch{}finally{}};function fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Qu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?kr:(l=Number(a.substring(l,d)),isNaN(l)?ci:(d+=1,d+l>a.length?kr:(a=a.slice(d,d+l),s.C=d+l,a)))}jt.prototype.cancel=function(){this.J=!0,te(this)};function Vn(s){s.S=Date.now()+s.I,di(s,s.I)}function di(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Be(R(s.ba,s),a)}function Mr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ku(this.i,this.A),this.L!=2&&(je(),Tt(17)),te(this),this.s=2,$e(this)):di(this,this.S-s)};function $e(s){s.j.G==0||s.J||Ui(s.j,s)}function te(s){Mr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ei(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Lr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Or(l.h,s))){if(!s.K&&Or(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Ln(l),xn(l);else break t;jr(l),Tt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Be(R(l.Za,l),6e3));if(1>=gi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ne(l,11)}else if((s.K||l.g==s)&&Ln(l),!j(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let $=I[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const dt=$[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const mt=$[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const ge=$[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const wt=s.g;if(wt){const Fn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var w=d.h;w.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Fr(w,w.h),w.h=null))}if(d.D){const zr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;zr&&(d.ya=zr,W(d.I,d.D,zr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=s;if(d.qa=Bi(d,d.J?d.ia:null,d.W),S.K){_i(d.h,S);var Q=S,at=d.L;at&&(Q.I=at),Q.B&&(Mr(Q),Vn(Q)),d.g=S}else Oi(d);0<l.i.length&&Mn(l)}else $[0]!="stop"&&$[0]!="close"||ne(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ne(l,7):qr(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}je(4)}catch{}}var Wu=class{constructor(s,a){this.g=s,this.map=a}};function mi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function gi(s){return s.h?1:s.g?s.g.size:0}function Or(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Fr(s,a){s.g?s.g.add(a):s.h=a}function _i(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}mi.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function yi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function Xu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function Ti(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Xu(s),d=Hu(s),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],s)}var Ei=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var w=s[l].substring(0,d);I=s[l].substring(d+1)}else w=s[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ee(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ee){this.h=s.h,Cn(this,s.j),this.o=s.o,this.g=s.g,Sn(this,s.s),this.l=s.l;var a=s.i,l=new Qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),vi(this,l),this.m=s.m}else s&&(a=String(s).match(Ei))?(this.h=!1,Cn(this,a[1]||"",!0),this.o=Ke(a[2]||""),this.g=Ke(a[3]||"",!0),Sn(this,a[4]),this.l=Ke(a[5]||"",!0),vi(this,a[6]||"",!0),this.m=Ke(a[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}ee.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ge(a,Ii,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ge(a,Ii,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ge(l,l.charAt(0)=="/"?tl:Zu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ge(l,nl)),s.join("")};function xt(s){return new ee(s)}function Cn(s,a,l){s.j=l?Ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Sn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function vi(s,a,l){a instanceof Qe?(s.i=a,rl(s.i,s.h)):(l||(a=Ge(a,el)),s.i=new Qe(a,s.h))}function W(s,a,l){s.i.set(a,l)}function bn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ju),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ju(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ii=/[#\/\?@]/g,Zu=/[#\?:]/g,tl=/[#\?]/g,el=/[#\?@]/g,nl=/#/g;function Qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&Yu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Qe.prototype,r.add=function(s,a){Bt(this),this.i=null,s=me(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ai(s,a){Bt(s),a=me(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function wi(s,a){return Bt(s),a=me(s,a),s.g.has(a)}r.forEach=function(s,a){Bt(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(a,I,d,this)},this)},this)},r.na=function(){Bt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=s[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},r.V=function(s){Bt(this);let a=[];if(typeof s=="string")wi(this,s)&&(a=a.concat(this.g.get(me(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Bt(this),this.i=null,s=me(this,s),wi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ri(s,a,l){Ai(s,a),0<l.length&&(s.i=null,s.g.set(me(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var I=w;S[d]!==""&&(I+="="+encodeURIComponent(String(S[d]))),s.push(I)}}return this.i=s.join("&")};function me(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function rl(s,a){a&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Ai(this,d),Ri(this,I,l))},s)),s.j=a}function sl(s,a){const l=new ze;if(c.Image){const d=new Image;d.onload=C(zt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(zt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(zt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(zt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function il(s,a){const l=new ze,d=new AbortController,I=setTimeout(()=>{d.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),zt(l,"TestPingServer: error",!1,a)})}function zt(s,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function ol(){this.g=new Bu}function al(s,a,l){const d=l||"";try{Ti(s,function(I,w){let S=I;f(I)&&(S=Cr(I)),a.push(d+w+"="+encodeURIComponent(S))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Dn,Sr),Dn.prototype.g=function(){return new Nn(this.l,this.j)},Dn.prototype.i=function(s){return function(){return s}}({});function Nn(s,a){ft.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Nn,ft),r=Nn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,He(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,He(this)),this.g&&(this.readyState=3,He(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?We(this):He(this),this.readyState==3&&Pi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,We(this))},r.Qa=function(s){this.g&&(this.response=s,We(this))},r.ga=function(){this.g&&We(this)};function We(s){s.readyState=4,s.l=null,s.j=null,s.v=null,He(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function He(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Vi(s){let a="";return ot(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Ur(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Vi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function Y(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Y,ft);var ul=/^https?$/i,ll=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nr.g(),this.v=this.o?ni(this.o):ni(Nr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ci(this,w);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ll,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Di(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ci(this,w)}};function Ci(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Si(s),kn(s)}function Si(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?bi(this):this.bb())},r.bb=function(){bi(this)};function bi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Mt(s)!=4||s.Z()!=2)){if(s.u&&Mt(s)==4)Js(s.Ea,0,s);else if(yt(s,"readystatechange"),Mt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var I=String(s.D).match(Ei)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!ul.test(I?I.toLowerCase():"")}l=d}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var w=2<Mt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Si(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){Di(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=d}catch{}}}function Di(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Mt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ju(a)}};function Ni(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function cl(s){const a={};s=(s.g&&2<=Mt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(j(s[d]))continue;var l=T(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function ki(s){this.Aa=0,this.i=[],this.j=new ze,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,s),this.cb=Xe("retryDelaySeedMs",1e4,s),this.Wa=Xe("forwardChannelMaxRetries",2,s),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new mi(s&&s.concurrentRequestLimit),this.Da=new ol,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ki.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){Tt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Bi(this,null,this.W),Mn(this)};function qr(s){if(xi(s),s.G==3){var a=s.U++,l=xt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ye(s,l),a=new jt(s,s.j,a),a.L=2,a.v=bn(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=zi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Vn(a)}ji(s)}function xn(s){s.g&&(Br(s),s.g.cancel(),s.g=null)}function xi(s){xn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Ln(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Mn(s){if(!pi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Le||Qs(),Oe||(Le(),Oe=!0),Er.add(a,s),s.B=0}}function hl(s,a){return gi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Be(R(s.Ga,s,a),qi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new jt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Li(this,I,a),l=xt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ye(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Vi(w)))+"&"+a:this.m&&Ur(l,this.m,w)),Fr(this.h,I),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),I.T=!0,xr(I,l,null)):xr(I,l,a),this.G=2}}else this.G==3&&(s?Mi(this,s):this.i.length==0||pi(this.h)||Mi(this))};function Mi(s,a){var l;a?l=a.l:l=s.U++;const d=xt(s.I);W(d,"SID",s.K),W(d,"RID",l),W(d,"AID",s.T),Ye(s,d),s.m&&s.o&&Ur(d,s.m,s.o),l=new jt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Li(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Fr(s.h,l),xr(l,d,a)}function Ye(s,a){s.H&&ot(s.H,function(l,d){W(a,d,l)}),s.l&&Ti({},function(l,d){W(a,d,l)})}function Li(s,a,l){l=Math.min(s.i.length,l);var d=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=I[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let Q=!0;for(let at=0;at<l;at++){let $=I[at].g;const dt=I[at].map;if($-=w,0>$)w=Math.max(0,I[at].g-100),Q=!1;else try{al(dt,S,"req"+$+"_")}catch{d&&d(dt)}}if(Q){d=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Oi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Le||Qs(),Oe||(Le(),Oe=!0),Er.add(a,s),s.v=0}}function jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Be(R(s.Fa,s),qi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Fi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Be(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),xn(this),Fi(this))};function Br(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Fi(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=xt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ye(s,a),s.m&&s.o&&Ur(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=bn(xt(a)),l.m=null,l.P=!0,hi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),jr(this),Tt(19))};function Ln(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ui(s,a){var l=null;if(s.g==a){Ln(s),Br(s),s.g=null;var d=2}else if(Or(s.h,a))l=a.D,_i(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=wn(),yt(d,new ai(d,l)),Mn(s)}else Oi(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&hl(s,a)||d==2&&jr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:ne(s,5);break;case 4:ne(s,10);break;case 3:ne(s,6);break;default:ne(s,2)}}}function qi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ne(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),d=s.Xa;const I=!d;d=new ee(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cn(d,"https"),bn(d),I?sl(d.toString(),l):il(d.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(a),ji(s),xi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function ji(s){if(s.G=0,s.ka=[],s.l){const a=yi(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Bi(s,a,l){var d=l instanceof ee?xt(l):new ee(l);if(d.g!="")a&&(d.g=a+"."+d.g),Sn(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ee(null);d&&Cn(w,d),a&&(w.g=a),I&&Sn(w,I),l&&(w.l=l),d=w}return l=s.D,a=s.ya,l&&a&&W(d,l,a),W(d,"VER",s.la),Ye(s,d),d}function zi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Dn({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function $i(){}r=$i.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function On(){}On.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ft.call(this),this.g=new ki(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!j(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new pe(this)}D(vt,ft),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){qr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Cr(s),s=l);a.i.push(new Wu(a.Ya++,s)),a.G==3&&Mn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,vt.aa.N.call(this)};function Ki(s){br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Ki,br);function Gi(){Dr.call(this),this.status=1}D(Gi,Dr);function pe(s){this.g=s}D(pe,$i),pe.prototype.ua=function(){yt(this.g,"a")},pe.prototype.ta=function(s){yt(this.g,new Ki(s))},pe.prototype.sa=function(s){yt(this.g,new Gi)},pe.prototype.ra=function(){yt(this.g,"b")},On.prototype.createWebChannel=On.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,sa=function(){return new On},ra=function(){return wn()},na=Zt,Wr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,$n=Rn,ui.COMPLETE="complete",ea=ui,ri.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Je=ri,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ta=Y}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const Hi="@firebase/firestore",Xi="4.7.10";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let be="11.5.0";/**
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
 */const oe=new yl("@firebase/firestore");function _e(){return oe.logLevel}function N(r,...t){if(oe.logLevel<=Lt.DEBUG){const e=t.map(hs);oe.debug(`Firestore (${be}): ${r}`,...e)}}function Ft(r,...t){if(oe.logLevel<=Lt.ERROR){const e=t.map(hs);oe.error(`Firestore (${be}): ${r}`,...e)}}function Ae(r,...t){if(oe.logLevel<=Lt.WARN){const e=t.map(hs);oe.warn(`Firestore (${be}): ${r}`,...e)}}function hs(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function L(r="Unexpected state"){const t=`FIRESTORE (${be}) INTERNAL ASSERTION FAILED: `+r;throw Ft(t),new Error(t)}function G(r,t){r||L()}function F(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends pl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ia{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Sl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class bl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new se;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new se,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new se)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new ia(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new gt(t)}}class Dl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Nl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Dl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kl{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,wl(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){G(this.o===void 0);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Yi(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new Yi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function oa(){return new TextEncoder}/**
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
 */class aa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=xl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function Hr(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=oa(),u=Ml(o.encode(Ji(r,e)),o.encode(Ji(t,e)));return u!==0?u:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function Ji(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Ml(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function we(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const Zi=-62135596800,to=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*to);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Zi)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/to}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Zi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new nt(0,0))}static max(){return new O(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const eo="__name__";class Ct{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ct.isNumericId(t),i=Ct.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):Hr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class H extends Ct{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Ll=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ct{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return Ll.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===eo}static keyField(){return new lt([eo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new k(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new k(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(H.fromString(t))}static fromName(t){return new M(H.fromString(t).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new H(t.slice()))}}/**
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
 */const un=-1;function Ol(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Qt(i,M.empty(),t)}function Fl(r){return new Qt(r.readTime,r.key,un)}class Qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qt(O.min(),M.empty(),un)}static max(){return new Qt(O.max(),M.empty(),un)}}function Ul(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
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
 */const ql="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function De(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==ql)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>i(m))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Bl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ne(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ar.ae=-1;/**
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
 */const fs=-1;function ur(r){return r==null}function Xn(r){return r===0&&1/r==-1/0}function zl(r){return typeof r=="number"&&Number.isInteger(r)&&!Xn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ua="";function $l(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=no(t)),t=Kl(r.get(e),t);return no(t)}function Kl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ua:e+="";break;default:e+=o}}return e}function no(r){return r+ua+""}/**
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
 */function ro(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ue(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function la(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ut(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new so(this.data.getIterator())}getIteratorFrom(t){return new so(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class so{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new rt(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ca("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Gl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(r){if(G(!!r),typeof r=="string"){let t=0;const e=Gl.exec(r);if(G(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?ct.fromBase64String(r):ct.fromUint8Array(r)}/**
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
 */const ha="server_timestamp",fa="__type__",da="__previous_value__",ma="__local_write_time__";function ds(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[fa])===null||e===void 0?void 0:e.stringValue)===ha}function lr(r){const t=r.mapValue.fields[da];return ds(t)?lr(t):t}function ln(r){const t=Wt(r.mapValue.fields[ma].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class Ql{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}const Yn="(default)";class cn{constructor(t,e){this.projectId=t,this.database=e||Yn}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database===Yn}isEqual(t){return t instanceof cn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const pa="__type__",Wl="__max__",jn={mapValue:{}},ga="__vector__",Jn="value";function Xt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ds(r)?4:Xl(r)?9007199254740991:Hl(r)?10:11:L()}function Dt(r,t){if(r===t)return!0;const e=Xt(r);if(e!==Xt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ln(r).isEqual(ln(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Wt(i.timestampValue),c=Wt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Ht(i.bytesValue).isEqual(Ht(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?Xn(u)===Xn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return we(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ro(u)!==ro(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Dt(u[h],c[h])))return!1;return!0}(r,t);default:return L()}}function hn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Re(r,t){if(r===t)return 0;const e=Xt(r),n=Xt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),h=J(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return io(r.timestampValue,t.timestampValue);case 4:return io(ln(r),ln(t));case 5:return Hr(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Ht(o),h=Ht(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=U(c[f],h[f]);if(m!==0)return m}return U(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(J(o.latitude),J(u.latitude));return c!==0?c:U(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return oo(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,m;const v=o.fields||{},R=u.fields||{},C=(c=v[Jn])===null||c===void 0?void 0:c.arrayValue,D=(h=R[Jn])===null||h===void 0?void 0:h.arrayValue,x=U(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((m=D?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:oo(C,D)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===jn.mapValue&&u===jn.mapValue)return 0;if(o===jn.mapValue)return 1;if(u===jn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const R=Hr(h[v],m[v]);if(R!==0)return R;const C=Re(c[h[v]],f[m[v]]);if(C!==0)return C}return U(h.length,m.length)}(r.mapValue,t.mapValue);default:throw L()}}function io(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Wt(r),n=Wt(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function oo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Re(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Pe(r){return Xr(r)}function Xr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Wt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Ht(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Xr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Xr(e.fields[u])}`;return i+"}"}(r.mapValue):L()}function Kn(r){switch(Xt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lr(r);return t?16+Kn(t):16;case 5:return 2*r.stringValue.length;case 6:return Ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Kn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return ue(n.fields,(o,u)=>{i+=o.length+Kn(u)}),i}(r.mapValue);default:throw L()}}function ao(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Yr(r){return!!r&&"integerValue"in r}function ms(r){return!!r&&"arrayValue"in r}function uo(r){return!!r&&"nullValue"in r}function lo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gn(r){return!!r&&"mapValue"in r}function Hl(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[pa])===null||e===void 0?void 0:e.stringValue)===ga}function nn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ue(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=nn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Xl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Wl}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nn(e)}setAll(t){let e=lt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=nn(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new At(nn(this.value))}}function _a(r){const t=[];return ue(r.fields,(e,n)=>{const i=new lt([e]);if(Gn(n)){const o=_a(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Pt(t)}/**
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
 */class _t{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,O.min(),O.min(),O.min(),At.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,O.min(),O.min(),At.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,O.min(),O.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function co(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Re(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ho(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class fn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ya{}class et extends ya{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Zl(t,e,n):e==="array-contains"?new nc(t,n):e==="in"?new rc(t,n):e==="not-in"?new sc(t,n):e==="array-contains-any"?new ic(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new tc(t,n):new ec(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Re(e,this.value)):e!==null&&Xt(this.value)===Xt(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Vt(t,e)}matches(t){return Ta(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ta(r){return r.op==="and"}function Ea(r){return Jl(r)&&Ta(r)}function Jl(r){for(const t of r.filters)if(t instanceof Vt)return!1;return!0}function Jr(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Pe(r.value);if(Ea(r))return r.filters.map(t=>Jr(t)).join(",");{const t=r.filters.map(e=>Jr(e)).join(",");return`${r.op}(${t})`}}function va(r,t){return r instanceof et?function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(r,t):r instanceof Vt?function(n,i){return i instanceof Vt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&va(u,i.filters[c]),!0):!1}(r,t):void L()}function Ia(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`}(r):r instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ia).join(" ,")+"}"}(r):"Filter"}class Zl extends et{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class tc extends et{constructor(t,e){super(t,"in",e),this.keys=Aa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ec extends et{constructor(t,e){super(t,"not-in",e),this.keys=Aa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Aa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class nc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ms(e)&&hn(e.arrayValue,this.value)}}class rc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hn(this.value.arrayValue,e)}}class sc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!hn(this.value.arrayValue,e)}}class ic extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>hn(this.value.arrayValue,n))}}/**
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
 */class oc{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function fo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new oc(r,t,e,n,i,o,u)}function ps(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Pe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Pe(n)).join(",")),t.le=e}return t.le}function gs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Yl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!va(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ho(r.startAt,t.startAt)&&ho(r.endAt,t.endAt)}function Zr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class ke{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ac(r,t,e,n,i,o,u,c){return new ke(r,t,e,n,i,o,u,c)}function _s(r){return new ke(r)}function mo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wa(r){return r.collectionGroup!==null}function rn(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new rt(lt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new fn(o,n))}),e.has(lt.keyField().canonicalString())||t.he.push(new fn(lt.keyField(),n))}return t.he}function St(r){const t=F(r);return t.Pe||(t.Pe=uc(t,rn(r))),t.Pe}function uc(r,t){if(r.limitType==="F")return fo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new fn(i.field,o)});const e=r.endAt?new Zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zn(r.startAt.position,r.startAt.inclusive):null;return fo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ts(r,t){const e=r.filters.concat([t]);return new ke(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function es(r,t,e){return new ke(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function cr(r,t){return gs(St(r),St(t))&&r.limitType===t.limitType}function Ra(r){return`${ps(St(r))}|lt:${r.limitType}`}function ye(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Ia(i)).join(", ")}]`),ur(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pe(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pe(i)).join(",")),`Target(${n})`}(St(r))}; limitType=${r.limitType})`}function hr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of rn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=co(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,rn(n),i)||n.endAt&&!function(u,c,h){const f=co(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,rn(n),i))}(r,t)}function lc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Pa(r){return(t,e)=>{let n=!1;for(const i of rn(r)){const o=cc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function cc(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Re(h,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
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
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return la(this.inner)}size(){return this.innerSize}}/**
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
 */const hc=new X(M.comparator);function Ut(){return hc}const Va=new X(M.comparator);function Ze(...r){let t=Va;for(const e of r)t=t.insert(e.key,e);return t}function Ca(r){let t=Va;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function re(){return sn()}function Sa(){return sn()}function sn(){return new le(r=>r.toString(),(r,t)=>r.isEqual(t))}const fc=new X(M.comparator),dc=new rt(M.comparator);function q(...r){let t=dc;for(const e of r)t=t.add(e);return t}const mc=new rt(U);function pc(){return mc}/**
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
 */function ys(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(t)?"-0":t}}function ba(r){return{integerValue:""+r}}function gc(r,t){return zl(t)?ba(t):ys(r,t)}/**
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
 */class fr{constructor(){this._=void 0}}function _c(r,t,e){return r instanceof dn?function(i,o){const u={fields:{[fa]:{stringValue:ha},[ma]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ds(o)&&(o=lr(o)),o&&(u.fields[da]=o),{mapValue:u}}(e,t):r instanceof mn?Na(r,t):r instanceof pn?ka(r,t):function(i,o){const u=Da(i,o),c=po(u)+po(i.Ie);return Yr(u)&&Yr(i.Ie)?ba(c):ys(i.serializer,c)}(r,t)}function yc(r,t,e){return r instanceof mn?Na(r,t):r instanceof pn?ka(r,t):e}function Da(r,t){return r instanceof tr?function(n){return Yr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class dn extends fr{}class mn extends fr{constructor(t){super(),this.elements=t}}function Na(r,t){const e=xa(t);for(const n of r.elements)e.some(i=>Dt(i,n))||e.push(n);return{arrayValue:{values:e}}}class pn extends fr{constructor(t){super(),this.elements=t}}function ka(r,t){let e=xa(t);for(const n of r.elements)e=e.filter(i=>!Dt(i,n));return{arrayValue:{values:e}}}class tr extends fr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function po(r){return J(r.integerValue||r.doubleValue)}function xa(r){return ms(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Tc{constructor(t,e){this.field=t,this.transform=e}}function Ec(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof mn&&i instanceof mn||n instanceof pn&&i instanceof pn?we(n.elements,i.elements,Dt):n instanceof tr&&i instanceof tr?Dt(n.Ie,i.Ie):n instanceof dn&&i instanceof dn}(r.transform,t.transform)}class vc{constructor(t,e){this.version=t,this.transformResults=e}}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class dr{}function Ma(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Oa(r.key,Ot.none()):new gn(r.key,r.data,Ot.none());{const e=r.data,n=At.empty();let i=new rt(lt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ce(r.key,n,new Pt(i.toArray()),Ot.none())}}function Ic(r,t,e){r instanceof gn?function(i,o,u){const c=i.value.clone(),h=_o(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ce?function(i,o,u){if(!Qn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=_o(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(La(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function on(r,t,e,n){return r instanceof gn?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=o.value.clone(),m=yo(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ce?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=yo(o.fieldTransforms,h,u),m=u.data;return m.setAll(La(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(r,t,e,n):function(o,u,c){return Qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Ac(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Da(n.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(n.field,o))}return e||null}function go(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&we(n,i,(o,u)=>Ec(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class gn extends dr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends dr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function La(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function _o(r,t,e){const n=new Map;G(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,yc(u,c,e[i]))}return n}function yo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,_c(o,u,t))}return n}class Oa extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wc extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ic(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=on(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=on(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Sa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=Ma(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(e,n)=>go(e,n))&&we(this.baseMutations,t.baseMutations,(e,n)=>go(e,n))}}class Ts{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length);let i=function(){return fc}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Ts(t,e,n,i)}}/**
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
 */class Pc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Vc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,z;function Cc(r){switch(r){case V.OK:return L();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return L()}}function Fa(r){if(r===void 0)return Ft("GRPC error has no .code"),V.UNKNOWN;switch(r){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(z=tt||(tt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Sc=new Kt([4294967295,4294967295],0);function To(r){const t=oa().encode(r),e=new Zo;return e.update(t),new Uint8Array(e.digest())}function Eo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,n],0),new Kt([i,o],0)]}class Es{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new tn(`Invalid padding: ${e}`);if(n<0)throw new tn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new tn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Kt.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(Kt.fromNumber(n)));return i.compare(Sc)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=To(t),[n,i]=Eo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Es(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ee===0)return;const e=To(t),[n,i]=Eo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mr(O.min(),i,new X(U),Ut(),q())}}class _n{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new _n(n,e,q(),q(),q())}}/**
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
 */class Wn{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class Ua{constructor(t,e){this.targetId=t,this.ge=e}}class qa{constructor(t,e,n=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class vo{constructor(){this.pe=0,this.ye=Io(),this.we=ct.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=q(),e=q(),n=q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new _n(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=Io()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,G(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class bc{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ut(),this.$e=Bn(),this.Ue=Bn(),this.Ke=new X(U)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(Zr(o))if(n===0){const u=new M(o.path);this.ze(e,u,_t.newNoDocument(u,O.min()))}else G(n===1);else{const u=this.et(e);if(u!==n){const c=this.tt(t),h=c?this.nt(c,t,u):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Ht(n).toUint8Array()}catch(h){if(h instanceof ca)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Es(u,i,o)}catch(h){return Ae(h instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ke.it(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const c=this.Xe(u);if(c){if(o.current&&Zr(c.target)){const h=new M(c.target.path);this._t(h).has(u)||this.ut(u,h)||this.ze(u,h,_t.newNoDocument(h,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let n=q();this.Ue.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new mr(t,e,this.Ke,this.Qe,n);return this.Qe=Ut(),this.$e=Bn(),this.Ue=Bn(),this.Ke=new X(U),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new vo,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new rt(U),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new rt(U),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new vo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Bn(){return new X(M.comparator)}function Io(){return new X(M.comparator)}const Dc={asc:"ASCENDING",desc:"DESCENDING"},Nc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kc={and:"AND",or:"OR"};class xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ns(r,t){return r.useProto3Json||ur(t)?t:{value:t}}function er(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ja(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Mc(r,t){return er(r,t.toTimestamp())}function bt(r){return G(!!r),O.fromTimestamp(function(e){const n=Wt(e);return new nt(n.seconds,n.nanos)}(r))}function vs(r,t){return rs(r,t).canonicalString()}function rs(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ba(r){const t=H.fromString(r);return G(Qa(t)),t}function ss(r,t){return vs(r.databaseId,t.path)}function $r(r,t){const e=Ba(t);if(e.get(1)!==r.databaseId.projectId)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M($a(e))}function za(r,t){return vs(r.databaseId,t)}function Lc(r){const t=Ba(r);return t.length===4?H.emptyPath():$a(t)}function is(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $a(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ao(r,t,e){return{name:ss(r,t),fields:e.value.mapValue.fields}}function Oc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string"),ct.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ct.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?V.UNKNOWN:Fa(f.code);return new k(m,f.message||"")}(u);e=new qa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=$r(r,n.document.name),o=bt(n.document.updateTime),u=n.document.createTime?bt(n.document.createTime):O.min(),c=new At({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(i,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Wn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=$r(r,n.document),o=n.readTime?bt(n.readTime):O.min(),u=_t.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Wn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=$r(r,n.document),o=n.removedTargetIds||[];e=new Wn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Vc(i,o),c=n.targetId;e=new Ua(c,u)}}return e}function Fc(r,t){let e;if(t instanceof gn)e={update:Ao(r,t.key,t.value)};else if(t instanceof Oa)e={delete:ss(r,t.key)};else if(t instanceof ce)e={update:Ao(r,t.key,t.data),updateMask:Qc(t.fieldMask)};else{if(!(t instanceof wc))return L();e={verify:ss(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof dn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof tr)return{fieldPath:u.field.canonicalString(),increment:c.Ie};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Mc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Uc(r,t){return r&&r.length>0?(G(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(O.min())&&(u=bt(o)),new vc(u,i.transformResults||[])}(e,t))):[]}function qc(r,t){return{documents:[za(r,t.path)]}}function jc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=za(r,i);const o=function(f){if(f.length!==0)return Ga(Vt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:Te(R.field),direction:$c(R.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ns(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:i}}function Bc(r){let t=Lc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(v){const R=Ka(v);return R instanceof Vt&&Ea(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(v){return v.map(R=>function(D){return new fn(Ee(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(v){let R;return R=typeof v=="object"?v.value:v,ur(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(v){const R=!!v.before,C=v.values||[];return new Zn(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(v){const R=!v.before,C=v.values||[];return new Zn(C,R)}(e.endAt)),ac(t,i,u,o,c,"F",h,f)}function zc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ka(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ee(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ee(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ee(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ee(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return et.create(Ee(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>Ka(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function $c(r){return Dc[r]}function Kc(r){return Nc[r]}function Gc(r){return kc[r]}function Te(r){return{fieldPath:r.canonicalString()}}function Ee(r){return lt.fromServerFormat(r.fieldPath)}function Ga(r){return r instanceof et?function(e){if(e.op==="=="){if(lo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(uo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(lo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(uo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Kc(e.op),value:e.value}}}(r):r instanceof Vt?function(e){const n=e.getFilters().map(i=>Ga(i));return n.length===1?n[0]:{compositeFilter:{op:Gc(e.op),filters:n}}}(r):L()}function Qc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class $t{constructor(t,e,n,i,o=O.min(),u=O.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Wc{constructor(t){this.Tt=t}}function Hc(r){const t=Bc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?es(t,t.limit,"L"):t}/**
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
 */class Xc{constructor(){this.Tn=new Yc}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Qt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Yc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rt(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rt(H.comparator)).toArray()}}/**
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
 */const wo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wa=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Wa,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class Ve{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ve(0)}static Kn(){return new Ve(-1)}}/**
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
 */const Ro="LruGarbageCollector",Jc=1048576;function Po([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Zc{constructor(t){this.Hn=t,this.buffer=new rt(Po),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Po(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class th{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){N(Ro,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ne(e)?N(Ro,"Ignoring IndexedDB error during garbage collection: ",e):await De(e)}await this.er(3e5)})}}class eh{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ar.ae);const n=new Zc(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(wo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,u,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,u=Date.now(),this.nthSequenceNumber(t,i))).next(v=>(n=v,c=Date.now(),this.removeTargets(t,n,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(v=>(f=Date.now(),_e()<=Lt.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-m}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function nh(r,t){return new eh(r,t)}/**
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
 */class rh{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class sh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ih{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&on(n.mutation,i,Pt.empty(),nt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=re();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Ze();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=re();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Ut();const u=sn(),c=function(){return sn()}();return e.forEach((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof ce)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),on(m.mutation,f,m.mutation.getFieldMask(),nt.now())):u.set(f.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var v;return c.set(f,new sh(m,(v=u.get(f))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const n=sn();let i=new X((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||Pt.empty();m=c.applyToLocalView(f,m),n.set(h,m);const v=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,v)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,v=Sa();m.forEach(R=>{if(!o.has(R)){const C=Ma(e.get(R),n.get(R));C!==null&&v.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,v))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(re());let c=un,h=o;return u.next(f=>P.forEach(f,(m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:c,changes:Ca(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Ze();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Ze();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const f=function(v,R){return new ke(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(m=>{m.forEach((v,R)=>{u=u.insert(v,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,_t.newInvalidDocument(m)))});let c=Ze();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&on(m.mutation,f,Pt.empty(),nt.now()),hr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class oh{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Hc(i.bundledQuery),readTime:bt(i.readTime)}}(e)),P.resolve()}}/**
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
 */class ah{constructor(){this.overlays=new X(M.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=re();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=re(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=re(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=re(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return P.resolve(c)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Pc(e,n));let o=this.Rr.get(e);o===void 0&&(o=q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
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
 */class uh{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class Is{constructor(){this.Vr=new rt(it.mr),this.gr=new rt(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new it(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new M(new H([])),n=new it(e,t),i=new it(e,t+1),o=[];return this.gr.forEachInRange([n,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new H([])),n=new it(e,t),i=new it(e,t+1);let o=q();return this.gr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
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
 */class lh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(it.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Rc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Mr=this.Mr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?fs:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],u=>{const c=this.Or(u.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(U);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{n=n.add(c.Cr)})}),P.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new rt(U);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Cr)),!0)},u),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return P.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new it(e,0),i=this.Mr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ch{constructor(t){this.kr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ut();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Ul(Fl(m),n)<=0||(i.has(m.key)||hr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}qr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new hh(this)}getSize(t){return P.resolve(this.size)}}class hh extends rh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class fh{constructor(t){this.persistence=t,this.Qr=new le(e=>ps(e),gs),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Is,this.targetCount=0,this.Kr=Ve.Un()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
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
 */class Ha{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new ar(0),this.zr=!1,this.zr=!0,this.jr=new uh,this.referenceDelegate=t(this),this.Hr=new fh(this),this.indexManager=new Xc,this.remoteDocumentCache=function(i){return new ch(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Wc(e),this.Yr=new oh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new lh(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new dh(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class dh extends jl{constructor(t){super(),this.currentSequenceNumber=t}}class As{constructor(t){this.persistence=t,this.ti=new Is,this.ni=null}static ri(t){return new As(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,n=>{const i=M.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class nr{constructor(t,e){this.persistence=t,this.oi=new le(n=>$l(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=nh(this,e)}static ri(t,e){return new nr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(c=>{c||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Kn(t.data.value)),e}ar(t,e,n){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ws{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ws(t,e.fromCache,n,i)}}/**
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
 */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ph{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Tl()?8:Bl(El())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new mh;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(_e()<=Lt.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(_e()<=Lt.DEBUG&&N("QueryEngine","Query:",ye(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(_e()<=Lt.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):P.resolve())}rs(t,e){if(mo(e))return P.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=es(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.cs(e,c);return this.ls(e,f,u,h.readTime)?this.rs(t,es(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,n,i){return mo(e)||i.isEqual(O.min())?P.resolve(null):this.ns.getDocuments(t,n).next(o=>{const u=this.cs(e,o);return this.ls(e,u,n,i)?P.resolve(null):(_e()<=Lt.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ye(e)),this.hs(t,u,e,Ol(i,un)).next(c=>c))})}cs(t,e){let n=new rt(Pa(t));return e.forEach((i,o)=>{hr(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return _e()<=Lt.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ye(e)),this.ns.getDocumentsMatchingQuery(t,e,Qt.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const Rs="LocalStore",gh=3e8;class _h{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new X(U),this.Is=new le(o=>ps(o),gs),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ih(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function yh(r,t,e,n){return new _h(r,t,e,n)}async function Xa(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Rs:f,removedBatchIds:u,addedBatchIds:c}))})})}function Th(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const v=f.batch,R=v.keys();let C=P.resolve();return R.forEach(D=>{C=C.next(()=>m.getEntry(h,D)).next(x=>{const b=f.docVersions.get(D);G(b!==null),x.version.compareTo(b)<0&&(v.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ya(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Eh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((m,v)=>{const R=i.get(v);if(!R)return;c.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,v).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,v)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?C=C.withResumeToken(ct.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,n)),i=i.insert(v,C),function(x,b,B){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=gh?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(R,C,m)&&c.push(e.Hr.updateTargetData(o,C))});let h=Ut(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(vh(o,u,t.documentUpdates).next(m=>{h=m.Vs,f=m.fs})),!n.isEqual(O.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(v=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=i,o))}function vh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(O.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):N(Rs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Vs:u,fs:i}})}function Ih(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=fs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Ah(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Hr.allocateTargetId(n).next(u=>(i=new $t(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function os(r,t,e){const n=F(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ne(u))throw u;N(Rs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function Vo(r,t,e){const n=F(r);let i=O.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const v=F(h),R=v.Is.get(m);return R!==void 0?P.resolve(v.Ts.get(R)):v.Hr.getTargetData(f,m)}(n,u,St(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.Ps.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:q())).next(c=>(wh(n,lc(t),c),{documents:c,gs:o})))}function wh(r,t,e){let n=r.Es.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class Co{constructor(){this.activeTargetIds=pc()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rh{constructor(){this.ho=new Co,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Co,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ph{To(t){}shutdown(){}}/**
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
 */const So="ConnectivityMonitor";class bo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){N(So,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){N(So,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zn=null;function as(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
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
 */const Kr="RestConnection",Vh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ch{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Yn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const u=as(),c=this.bo(t,e.toUriEncodedString());N(Kr,`Sending RPC '${t}' ${u}:`,c,n);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,c,h,n).then(f=>(N(Kr,`Received RPC '${t}' ${u}: `,f),f),f=>{throw Ae(Kr,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",n),f})}Co(t,e,n,i,o,u){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+be}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=Vh[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Sh{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const pt="WebChannelConnection";class bh extends Ch{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=as();return new Promise((u,c)=>{const h=new ta;h.setWithCredentials(!0),h.listenOnce(ea.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $n.NO_ERROR:const m=h.getResponseJson();N(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case $n.TIMEOUT:N(pt,`RPC '${t}' ${o} timed out`),c(new k(V.DEADLINE_EXCEEDED,"Request time out"));break;case $n.HTTP_ERROR:const v=h.getStatus();if(N(pt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const D=function(b){const B=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN}(C.status);c(new k(D,C.message))}else c(new k(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new k(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{N(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);N(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}Wo(t,e,n){const i=as(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=sa(),c=ra(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");N(pt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const v=u.createWebChannel(m,h);let R=!1,C=!1;const D=new Sh({Fo:b=>{C?N(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(R||(N(pt,`Opening RPC '${t}' stream ${i} transport.`),v.open(),R=!0),N(pt,`RPC '${t}' stream ${i} sending:`,b),v.send(b))},Mo:()=>v.close()}),x=(b,B,j)=>{b.listen(B,K=>{try{j(K)}catch(st){setTimeout(()=>{throw st},0)}})};return x(v,Je.EventType.OPEN,()=>{C||(N(pt,`RPC '${t}' stream ${i} transport opened.`),D.Qo())}),x(v,Je.EventType.CLOSE,()=>{C||(C=!0,N(pt,`RPC '${t}' stream ${i} transport closed`),D.Uo())}),x(v,Je.EventType.ERROR,b=>{C||(C=!0,Ae(pt,`RPC '${t}' stream ${i} transport errored:`,b),D.Uo(new k(V.UNAVAILABLE,"The operation could not be completed")))}),x(v,Je.EventType.MESSAGE,b=>{var B;if(!C){const j=b.data[0];G(!!j);const K=j,st=K?.error||((B=K[0])===null||B===void 0?void 0:B.error);if(st){N(pt,`RPC '${t}' stream ${i} received error:`,st);const Nt=st.status;let ot=function(_){const y=tt[_];if(y!==void 0)return Fa(y)}(Nt),E=st.message;ot===void 0&&(ot=V.INTERNAL,E="Unknown error status: "+Nt+" with message "+st.message),C=!0,D.Uo(new k(ot,E)),v.close()}else N(pt,`RPC '${t}' stream ${i} received:`,j),D.Ko(j)}}),x(c,na.STAT_EVENT,b=>{b.stat===Wr.PROXY?N(pt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Wr.NOPROXY&&N(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Gr(){return typeof document<"u"?document:null}/**
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
 */function pr(r){return new xc(r,!0)}/**
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
 */class Ja{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Do="PersistentStream";class Za{constructor(t,e,n,i,o,u,c,h){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ja(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new k(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return N(Do,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(N(Do,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dh extends Za{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Oc(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?bt(u.readTime):O.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=is(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Zr(h)?{documents:qc(o,h)}:{query:jc(o,h).ht},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ja(o,u.resumeToken);const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=er(o,u.snapshotVersion.toTimestamp());const f=ns(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=zc(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=is(this.serializer),e.removeTarget=t,this.I_(e)}}class Nh extends Za{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Uc(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=is(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Fc(this.serializer,n))};this.I_(e)}}/**
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
 */class kh{}class xh extends kh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,rs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(V.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,rs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(V.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Mh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ft(e),this.N_=!1):N("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ae="RemoteStore";class Lh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{n.enqueueAndForget(async()=>{he(this)&&(N(ae,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.W_.add(4),await yn(f),f.j_.set("Unknown"),f.W_.delete(4),await gr(f)}(this))})}),this.j_=new Mh(n,i)}}async function gr(r){if(he(r))for(const t of r.G_)await t(!0)}async function yn(r){for(const t of r.G_)await t(!1)}function tu(r,t){const e=F(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Ss(e)?Cs(e):xe(e).c_()&&Vs(e,t))}function Ps(r,t){const e=F(r),n=xe(e);e.K_.delete(t),n.c_()&&eu(e,t),e.K_.size===0&&(n.c_()?n.P_():he(e)&&e.j_.set("Unknown"))}function Vs(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xe(r).y_(t)}function eu(r,t){r.H_.Ne(t),xe(r).w_(t)}function Cs(r){r.H_=new bc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),xe(r).start(),r.j_.B_()}function Ss(r){return he(r)&&!xe(r).u_()&&r.K_.size>0}function he(r){return F(r).W_.size===0}function nu(r){r.H_=void 0}async function Oh(r){r.j_.set("Online")}async function Fh(r){r.K_.forEach((t,e)=>{Vs(r,t)})}async function Uh(r,t){nu(r),Ss(r)?(r.j_.q_(t),Cs(r)):r.j_.set("Unknown")}async function qh(r,t,e){if(r.j_.set("Online"),t instanceof qa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.K_.delete(c),i.H_.removeTarget(c))}(r,t)}catch(n){N(ae,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rr(r,n)}else if(t instanceof Wn?r.H_.We(t):t instanceof Ua?r.H_.Ze(t):r.H_.je(t),!e.isEqual(O.min()))try{const n=await Ya(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.H_.ot(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(f);m&&o.K_.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(ct.EMPTY_BYTE_STRING,m.snapshotVersion)),eu(o,h);const v=new $t(m.target,h,f,m.sequenceNumber);Vs(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){N(ae,"Failed to raise snapshot:",n),await rr(r,n)}}async function rr(r,t,e){if(!Ne(t))throw t;r.W_.add(1),await yn(r),r.j_.set("Offline"),e||(e=()=>Ya(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(ae,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await gr(r)})}function ru(r,t){return t().catch(e=>rr(r,e,t))}async function _r(r){const t=F(r),e=Yt(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:fs;for(;jh(t);)try{const i=await Ih(t.localStore,n);if(i===null){t.U_.length===0&&e.P_();break}n=i.batchId,Bh(t,i)}catch(i){await rr(t,i)}su(t)&&iu(t)}function jh(r){return he(r)&&r.U_.length<10}function Bh(r,t){r.U_.push(t);const e=Yt(r);e.c_()&&e.S_&&e.b_(t.mutations)}function su(r){return he(r)&&!Yt(r).u_()&&r.U_.length>0}function iu(r){Yt(r).start()}async function zh(r){Yt(r).C_()}async function $h(r){const t=Yt(r);for(const e of r.U_)t.b_(e.mutations)}async function Kh(r,t,e){const n=r.U_.shift(),i=Ts.from(n,t,e);await ru(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await _r(r)}async function Gh(r,t){t&&Yt(r).S_&&await async function(n,i){if(function(u){return Cc(u)&&u!==V.ABORTED}(i.code)){const o=n.U_.shift();Yt(n).h_(),await ru(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await _r(n)}}(r,t),su(r)&&iu(r)}async function No(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(ae,"RemoteStore received new credentials");const n=he(e);e.W_.add(3),await yn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await gr(e)}async function Qh(r,t){const e=F(r);t?(e.W_.delete(2),await gr(e)):t||(e.W_.add(2),await yn(e),e.j_.set("Unknown"))}function xe(r){return r.J_||(r.J_=function(e,n,i){const o=F(e);return o.M_(),new Dh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:Oh.bind(null,r),No:Fh.bind(null,r),Lo:Uh.bind(null,r),p_:qh.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Ss(r)?Cs(r):r.j_.set("Unknown")):(await r.J_.stop(),nu(r))})),r.J_}function Yt(r){return r.Y_||(r.Y_=function(e,n,i){const o=F(e);return o.M_(),new Nh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:zh.bind(null,r),Lo:Gh.bind(null,r),D_:$h.bind(null,r),v_:Kh.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await _r(r)):(await r.Y_.stop(),r.U_.length>0&&(N(ae,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class bs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new bs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ds(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),Ne(r))return new k(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Ze(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ie;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class ko{constructor(){this.Z_=new X(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ce{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ce(t,e,Ie.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Wh{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Hh{constructor(){this.queries=xo(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=xo(),o.forEach((u,c)=>{for(const h of c.ta)h.onError(n)})})(this,new k(V.ABORTED,"Firestore shutting down"))}}function xo(){return new le(r=>Ra(r),cr)}async function Xh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new Wh,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Ds(u,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Ns(e)}async function Yh(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Jh(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.ta)c.oa(i)&&(n=!0);u.ea=i}}n&&Ns(e)}function Zh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function Ns(r){r.ia.forEach(t=>{t.next()})}var us,Mo;(Mo=us||(us={}))._a="default",Mo.Cache="cache";class tf{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ce(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==us.Cache}}/**
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
 */class ou{constructor(t){this.key=t}}class au{constructor(t){this.key=t}}class ef{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=q(),this.mutatedKeys=q(),this.ya=Pa(t),this.wa=new Ie(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new ko,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,v)=>{const R=i.get(m),C=hr(this.query,v)?v:null,D=!!R&&this.mutatedKeys.has(R.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;R&&C?R.data.isEqual(C.data)?D!==x&&(n.track({type:3,doc:C}),b=!0):this.va(R,C)||(n.track({type:2,doc:C}),b=!0,(h&&this.ya(C,h)>0||f&&this.ya(C,f)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),b=!0):R&&!C&&(n.track({type:1,doc:R}),b=!0,(h||f)&&(c=!0)),b&&(C?(u=u.add(C),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{wa:u,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((m,v)=>function(C,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(C)-x(D)}(m.type,v.type)||this.ya(m.doc,v.doc)),this.Ca(n),i=i!=null&&i;const c=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,f=h!==this.ga;return this.ga=h,u.length!==0||f?{snapshot:new Ce(this.query,t.wa,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ko,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=q(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new au(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new ou(n))}),e}Oa(t){this.fa=t.gs,this.pa=q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Ce.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ks="SyncEngine";class nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rf{constructor(t){this.key=t,this.Ba=!1}}class sf{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new le(c=>Ra(c),cr),this.qa=new Map,this.Qa=new Set,this.$a=new X(M.comparator),this.Ua=new Map,this.Ka=new Is,this.Wa={},this.Ga=new Map,this.za=Ve.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function of(r,t,e=!0){const n=du(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await uu(n,t,e,!0),i}async function af(r,t){const e=du(r);await uu(e,t,!0,!1)}async function uu(r,t,e,n){const i=await Ah(r.localStore,St(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await uf(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&tu(r.remoteStore,i),c}async function uf(r,t,e,n,i){r.Ha=(v,R,C)=>async function(x,b,B,j){let K=b.view.ba(B);K.ls&&(K=await Vo(x.localStore,b.query,!1).then(({documents:E})=>b.view.ba(E,K)));const st=j&&j.targetChanges.get(b.targetId),Nt=j&&j.targetMismatches.get(b.targetId)!=null,ot=b.view.applyChanges(K,x.isPrimaryClient,st,Nt);return Oo(x,b.targetId,ot.Ma),ot.snapshot}(r,v,R,C);const o=await Vo(r.localStore,t,!0),u=new ef(t,o.gs),c=u.ba(o.documents),h=_n.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);Oo(r,e,f.Ma);const m=new nf(t,e,u);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),f.snapshot}async function lf(r,t,e){const n=F(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(u=>!cr(u,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await os(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ps(n.remoteStore,i.targetId),ls(n,i.targetId)}).catch(De)):(ls(n,i.targetId),await os(n.localStore,i.targetId,!0))}async function cf(r,t){const e=F(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ps(e.remoteStore,n.targetId))}async function hf(r,t,e){const n=yf(r);try{const i=await function(u,c){const h=F(u),f=nt.now(),m=c.reduce((C,D)=>C.add(D.key),q());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Ut(),x=q();return h.ds.getEntries(C,m).next(b=>{D=b,D.forEach((B,j)=>{j.isValidDocument()||(x=x.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,D)).next(b=>{v=b;const B=[];for(const j of c){const K=Ac(j,v.get(j.key).overlayedDocument);K!=null&&B.push(new ce(j.key,K,_a(K.value.mapValue),Ot.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,B,c)}).next(b=>{R=b;const B=b.applyToLocalDocumentSet(v,x);return h.documentOverlayCache.saveOverlays(C,b.batchId,B)})}).then(()=>({batchId:R.batchId,changes:Ca(v)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.Wa[u.currentUser.toKey()];f||(f=new X(U)),f=f.insert(c,h),u.Wa[u.currentUser.toKey()]=f}(n,i.batchId,e),await Tn(n,i.changes),await _r(n.remoteStore)}catch(i){const o=Ds(i,"Failed to persist write");e.reject(o)}}async function lu(r,t){const e=F(r);try{const n=await Eh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ua.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?G(u.Ba):i.removedDocuments.size>0&&(G(u.Ba),u.Ba=!1))}),await Tn(e,n,t)}catch(n){await De(n)}}function Lo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((m,v)=>{for(const R of v.ta)R.sa(c)&&(f=!0)}),f&&Ns(h)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ff(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ua.get(t),o=i&&i.key;if(o){let u=new X(M.comparator);u=u.insert(o,_t.newNoDocument(o,O.min()));const c=q().add(o),h=new mr(O.min(),new Map,new X(U),u,c);await lu(n,h),n.$a=n.$a.remove(o),n.Ua.delete(t),xs(n)}else await os(n.localStore,t,!1).then(()=>ls(n,t,e)).catch(De)}async function df(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Th(e.localStore,t);hu(e,n,null),cu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Tn(e,i)}catch(i){await De(i)}}async function mf(r,t,e){const n=F(r);try{const i=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(v=>(G(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);hu(n,t,e),cu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Tn(n,i)}catch(i){await De(i)}}function cu(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function hu(r,t,e){const n=F(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function ls(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||fu(r,n)})}function fu(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Ps(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),xs(r))}function Oo(r,t,e){for(const n of e)n instanceof ou?(r.Ka.addReference(n.key,t),pf(r,n)):n instanceof au?(N(ks,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||fu(r,n.key)):L()}function pf(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(N(ks,"New document in limbo: "+e),r.Qa.add(n),xs(r))}function xs(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(H.fromString(t)),n=r.za.next();r.Ua.set(n,new rf(e)),r.$a=r.$a.insert(e,n),tu(r.remoteStore,new $t(St(_s(e.path)),n,"TargetPurposeLimboResolution",ar.ae))}}async function Tn(r,t,e){const n=F(r),i=[],o=[],u=[];n.ka.isEmpty()||(n.ka.forEach((c,h)=>{u.push(n.Ha(h,t,e).then(f=>{var m;if((f||e)&&n.isPrimaryClient){const v=f?!f.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){i.push(f);const v=ws.Yi(h.targetId,f);o.push(v)}}))}),await Promise.all(u),n.La.p_(i),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>P.forEach(f,R=>P.forEach(R.Hi,C=>m.persistence.referenceDelegate.addReference(v,R.targetId,C)).next(()=>P.forEach(R.Ji,C=>m.persistence.referenceDelegate.removeReference(v,R.targetId,C)))))}catch(v){if(!Ne(v))throw v;N(Rs,"Failed to update sequence numbers: "+v)}for(const v of f){const R=v.targetId;if(!v.fromCache){const C=m.Ts.get(R),D=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(D);m.Ts=m.Ts.insert(R,x)}}}(n.localStore,o))}async function gf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(ks,"User change. New user:",t.toKey());const n=await Xa(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new k(V.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tn(e,n.Rs)}}function _f(r,t){const e=F(r),n=e.Ua.get(t);if(n&&n.Ba)return q().add(n.key);{let i=q();const o=e.qa.get(t);if(!o)return i;for(const u of o){const c=e.ka.get(u);i=i.unionWith(c.view.Sa)}return i}}function du(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_f.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.La.p_=Jh.bind(null,t.eventManager),t.La.Ja=Zh.bind(null,t.eventManager),t}function yf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,t),t}class sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return yh(this.persistence,new ph,t.initialUser,this.serializer)}Xa(t){return new Ha(As.ri,this.serializer)}Za(t){return new Rh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sr.provider={build:()=>new sr};class Tf extends sr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){G(this.persistence.referenceDelegate instanceof nr);const n=this.persistence.referenceDelegate.garbageCollector;return new th(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Ha(n=>nr.ri(n,e),this.serializer)}}class cs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=gf.bind(null,this.syncEngine),await Qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hh}()}createDatastore(t){const e=pr(t.databaseInfo.databaseId),n=function(o){return new bh(o)}(t.databaseInfo);return function(o,u,c,h){return new xh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Lh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Lo(this.syncEngine,e,0),function(){return bo.D()?new bo:new Ph}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,m){const v=new sf(i,o,u,c,h,f);return m&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N(ae,"RemoteStore shutting down."),o.W_.add(5),await yn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}cs.provider={build:()=>new cs};/**
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
 */class Ef{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Jt="FirestoreClient";class vf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=aa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N(Jt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N(Jt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ds(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Qr(r,t){r.asyncQueue.verifyOperationInProgress(),N(Jt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Xa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Fo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await If(r);N(Jt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>No(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>No(t.remoteStore,i)),r._onlineComponents=t}async function If(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(Jt,"Using user provided OfflineComponentProvider");try{await Qr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await Qr(r,new sr)}}else N(Jt,"Using default OfflineComponentProvider"),await Qr(r,new Tf(void 0));return r._offlineComponents}async function mu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(Jt,"Using user provided OnlineComponentProvider"),await Fo(r,r._uninitializedComponentsProvider._online)):(N(Jt,"Using default OnlineComponentProvider"),await Fo(r,new cs))),r._onlineComponents}function Af(r){return mu(r).then(t=>t.syncEngine)}async function Uo(r){const t=await mu(r),e=t.eventManager;return e.onListen=of.bind(null,t.syncEngine),e.onUnlisten=lf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=af.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cf.bind(null,t.syncEngine),e}/**
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
 */function pu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const qo=new Map;/**
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
 */function gu(r,t,e){if(!e)throw new k(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function wf(r,t,e,n){if(t===!0&&n===!0)throw new k(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function jo(r){if(!M.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Bo(r){if(M.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function an(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=yr(r);throw new k(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const _u="firestore.googleapis.com",zo=!0;class $o{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_u,this.ssl=zo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:zo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Wa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jc)throw new k(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $o({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $o(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cl;switch(n.type){case"firstParty":return new Nl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qo.get(e);n&&(N("ComponentProvider","Removing Datastore"),qo.delete(e),n.terminate())}(this),Promise.resolve()}}function Rf(r,t,e,n={}){var i;const o=(r=an(r,Tr))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==_u&&o.host!==c&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!gl(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=gt.MOCK_USER;else{f=_l(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new k(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new gt(v)}r._authCredentials=new Sl(new ia(f,m))}}/**
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
 */class fe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new fe(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Gt extends fe{constructor(t,e,n){super(t,e,_s(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new M(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function Ko(r,t,...e){if(r=ie(r),gu("collection","path",t),r instanceof Tr){const n=H.fromString(t,...e);return Bo(n),new Gt(r,null,n)}{if(!(r instanceof It||r instanceof Gt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Bo(n),new Gt(r.firestore,null,n)}}function Pf(r,t,...e){if(r=ie(r),arguments.length===1&&(t=aa.newId()),gu("doc","path",t),r instanceof Tr){const n=H.fromString(t,...e);return jo(n),new It(r,null,new M(n))}{if(!(r instanceof It||r instanceof Gt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return jo(n),new It(r.firestore,r instanceof Gt?r.converter:null,new M(n))}}/**
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
 */const Go="AsyncQueue";class Qo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ja(this,"async_queue_retry"),this.Su=()=>{const n=Gr();n&&N(Go,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=Gr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Gr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new se;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ne(t))throw t;N(Go,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ft("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=bs.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Wo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class ir extends Tr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Qo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qo(t),this._firestoreClient=void 0,await t}}}function Vf(r,t){const e=typeof r=="object"?r:fl(),n=typeof r=="string"?r:Yn,i=dl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=ml("firestore");o&&Rf(i,...o)}return i}function yu(r){if(r._terminated)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Cf(r),r._firestoreClient}function Cf(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,m){return new Ql(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,pu(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new vf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(ct.fromBase64String(t))}catch(e){throw new k(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Se(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ms{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ls{constructor(t){this._methodName=t}}/**
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
 */class Os{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
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
 */class Fs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Sf=/^__.*__$/;class bf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new gn(t,this.data,e,this.fieldTransforms)}}function Tu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Us{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Us(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return or(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Tu(this.Lu)&&Sf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Df{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pr(t)}ju(t,e,n,i=!1){return new Us({Lu:t,methodName:e,zu:n,path:lt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eu(r){const t=r._freezeSettings(),e=pr(r._databaseId);return new Df(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Nf(r,t,e,n,i,o={}){const u=r.ju(o.merge||o.mergeFields?2:0,t,e,i);Au("Data must be an object, but it was:",u,n);const c=vu(n,u);let h,f;if(o.merge)h=new Pt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const R=xf(t,v,e);if(!u.contains(R))throw new k(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Lf(m,R)||m.push(R)}h=new Pt(m),f=u.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=u.fieldTransforms;return new bf(new At(c),h,f)}class qs extends Ls{_toFieldTransform(t){return new Tc(t.path,new dn)}isEqual(t){return t instanceof qs}}function kf(r,t,e,n=!1){return js(e,r.ju(n?4:3,t))}function js(r,t){if(Iu(r=ie(r)))return Au("Unsupported field value:",t,r),vu(r,t);if(r instanceof Ls)return function(n,i){if(!Tu(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=js(c,i.Ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:er(i.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:er(i.serializer,o)}}if(n instanceof Os)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Se)return{bytesValue:ja(i.serializer,n._byteString)};if(n instanceof It){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Fs)return function(u,c){return{mapValue:{fields:{[pa]:{stringValue:ga},[Jn]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Wu("VectorValues must only contain numeric values.");return ys(c.serializer,f)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${yr(n)}`)}(r,t)}function vu(r,t){const e={};return la(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(r,(n,i)=>{const o=js(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Iu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Os||r instanceof Se||r instanceof It||r instanceof Ls||r instanceof Fs)}function Au(r,t,e){if(!Iu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=yr(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function xf(r,t,e){if((t=ie(t))instanceof Ms)return t._internalPath;if(typeof t=="string")return wu(r,t);throw or("Field path arguments must be of type string or ",r,!1,void 0,e)}const Mf=new RegExp("[~\\*/\\[\\]]");function wu(r,t,e){if(t.search(Mf)>=0)throw or(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ms(...t.split("."))._internalPath}catch{throw or(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function or(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new k(V.INVALID_ARGUMENT,c+r+h)}function Lf(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Ru{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Of extends Ru{data(){return super.data()}}function Bs(r,t){return typeof t=="string"?wu(r,t):t instanceof Ms?t._internalPath:t._delegate._internalPath}/**
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
 */function Ff(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zs{}class Pu extends zs{}function Uf(r,t,...e){let n=[];t instanceof zs&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof Ks).length,c=o.filter(h=>h instanceof $s).length;if(u>1||u>0&&c>0)throw new k(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class $s extends Pu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new $s(t,e,n)}_apply(t){const e=this._parse(t);return Vu(t._query,e),new fe(t.firestore,t.converter,ts(t._query,e))}_parse(t){const e=Eu(t.firestore);return function(o,u,c,h,f,m,v){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Xo(v,m);const D=[];for(const x of v)D.push(Ho(h,o,x));R={arrayValue:{values:D}}}else R=Ho(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Xo(v,m),R=kf(c,u,v,m==="in"||m==="not-in");return et.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ks extends zs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ks(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)Vu(u,h),u=ts(u,h)}(t._query,e),new fe(t.firestore,t.converter,ts(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gs extends Pu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Gs(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new k(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fn(o,u)}(t._query,this._field,this._direction);return new fe(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new ke(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function qf(r,t="asc"){const e=t,n=Bs("orderBy",r);return Gs._create(n,e)}function Ho(r,t,e){if(typeof(e=ie(e))=="string"){if(e==="")throw new k(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wa(t)&&e.indexOf("/")!==-1)throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!M.isDocumentKey(n))throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ao(r,new M(n))}if(e instanceof It)return ao(r,e._key);throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yr(e)}.`)}function Xo(r,t){if(!Array.isArray(r)||r.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Vu(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class jf{convertValue(t,e="none"){switch(Xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Jn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Fs(o)}convertGeoPoint(t){return new Os(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=lr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ln(t));default:return null}}convertTimestamp(t){const e=Wt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);G(Qa(n));const i=new cn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Bf(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class en{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cu extends Ru{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Bs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Hn extends Cu{data(t={}){return super.data(t)}}class zf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new en(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Hn(this._firestore,this._userDataWriter,n.key,n,new en(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Hn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new en(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Hn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new en(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:$f(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function $f(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Su extends jf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Se(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Kf(r,t){const e=an(r.firestore,ir),n=Pf(r),i=Bf(r.converter,t);return Qf(e,[Nf(Eu(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ot.exists(!1))]).then(()=>n)}function Gf(r,...t){var e,n,i;r=ie(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Wo(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Wo(t[u])){const v=t[u];t[u]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[u+1]=(n=v.error)===null||n===void 0?void 0:n.bind(v),t[u+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,f,m;if(r instanceof It)f=an(r.firestore,ir),m=_s(r._key.path),h={next:v=>{t[u]&&t[u](Wf(f,r,v))},error:t[u+1],complete:t[u+2]};else{const v=an(r,fe);f=an(v.firestore,ir),m=v._query;const R=new Su(f);h={next:C=>{t[u]&&t[u](new zf(f,R,v,C))},error:t[u+1],complete:t[u+2]},Ff(r._query)}return function(R,C,D,x){const b=new Ef(x),B=new tf(C,b,D);return R.asyncQueue.enqueueAndForget(async()=>Xh(await Uo(R),B)),()=>{b.su(),R.asyncQueue.enqueueAndForget(async()=>Yh(await Uo(R),B))}}(yu(f),m,c,h)}function Qf(r,t){return function(n,i){const o=new se;return n.asyncQueue.enqueueAndForget(async()=>hf(await Af(n),i,o)),o.promise}(yu(r),t)}function Wf(r,t,e){const n=e.docs.get(t._key),i=new Su(r);return new Cu(r,i,t._key,n,new en(e.hasPendingWrites,e.fromCache),t.converter)}function Hf(){return new qs("serverTimestamp")}(function(t,e=!0){(function(i){be=i})(vl),Il(new Al("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ir(new bl(n.getProvider("auth-internal")),new kl(u,n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(f.options.projectId,m)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Qi(Hi,Xi,t),Qi(Hi,Xi,"esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Xf(r,t,e,n){function i(o){return o instanceof e?o:new e(function(u){u(o)})}return new(e||(e=Promise))(function(o,u){function c(m){try{f(n.next(m))}catch(v){u(v)}}function h(m){try{f(n.throw(m))}catch(v){u(v)}}function f(m){m.done?o(m.value):i(m.value).then(c,h)}f((n=n.apply(r,[])).next())})}function Yf(r,t){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(f){return function(m){return h([f,m])}}function h(f){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(o=f[0]&2?i.return:f[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,f[1])).done)return o;switch(i=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return e.label++,{value:f[1],done:!1};case 5:e.label++,i=f[1],f=[0];continue;case 7:f=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){e=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){e.label=f[1];break}if(f[0]===6&&e.label<o[1]){e.label=o[1],o=f;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(f);break}o[2]&&e.ops.pop(),e.trys.pop();continue}f=t.call(r,e)}catch(m){f=[6,m],i=0}finally{n=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ve=function(){return ve=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},ve.apply(this,arguments)},bu=function(r){return{loading:r==null,value:r}},Jf=function(){return function(r,t){switch(t.type){case"error":return ve(ve({},r),{error:t.error,loading:!1,value:void 0});case"reset":return bu(t.defaultValue);case"value":return ve(ve({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},Zf=function(r){var t=r?r():void 0,e=Rt.useReducer(Jf(),bu(t)),n=e[0],i=e[1],o=Rt.useCallback(function(){var h=r?r():void 0;i({type:"reset",defaultValue:h})},[r]),u=Rt.useCallback(function(h){i({type:"error",error:h})},[]),c=Rt.useCallback(function(h){i({type:"value",value:h})},[]);return Rt.useMemo(function(){return{error:n.error,loading:n.loading,reset:o,setError:u,setValue:c,value:n.value}},[n.error,n.loading,o,u,c,n.value])},td=function(r,t){var e=Zf(function(){return r.currentUser}),n=e.error,i=e.loading,o=e.setError,u=e.setValue,c=e.value;return Rt.useEffect(function(){var h=Rl(r,function(f){return Xf(void 0,void 0,void 0,function(){var m;return Yf(this,function(v){switch(v.label){case 0:return[3,4];case 1:return v.trys.push([1,3,,4]),[4,t.onUserChanged(f)];case 2:return v.sent(),[3,4];case 3:return m=v.sent(),o(m),[3,4];case 4:return u(f),[2]}})})},o);return function(){h()}},[r]),[c,i,n]};const Yo=Vf(Jo),ed=Pl(Jo);function ad({slug:r}){const[t,e]=Rt.useState([]),[n,i]=Rt.useState(""),[o,u]=Rt.useState(!0),[c,h]=Rt.useState(""),[f,m,v]=td(ed);Rt.useEffect(()=>{if(!r)return;u(!0),h(""),console.log(`Setting up Firestore listener for comments on slug: ${r}`);const C=Ko(Yo,"articles",r,"comments"),D=Uf(C,qf("timestamp","asc")),x=Gf(D,b=>{const B=[];b.forEach(j=>{const K=j.data().timestamp&&j.data().timestamp.toDate?new Date(j.data().timestamp.toDate()).toLocaleString():"";B.push({id:j.id,...j.data(),timestamp:K})}),e(B),u(!1)},b=>{console.error("Error fetching comments: ",b),h("Error al cargar comentarios."),u(!1)});return()=>x()},[r]);const R=async C=>{if(C.preventDefault(),!!n.trim()){if(!f){h("Necesitas iniciar sesión para comentar.");return}h("");try{const D=Ko(Yo,"articles",r,"comments");await Kf(D,{text:n,userId:f.uid,userName:f.displayName||(f.email?f.email.split("@")[0]:"Anónimo"),userPhotoURL:f.photoURL||"/default-avatar.png",timestamp:Hf()}),i("")}catch(D){console.error("Error adding comment: ",D),h("Error al enviar el comentario.")}}};return Z.jsxs("div",{className:"mt-12 pt-8 border-t border-zinc-700",children:[Z.jsx("h2",{className:"text-2xl font-semibold mb-6 text-emerald-400",children:"Comentarios"}),o&&Z.jsx("p",{className:"text-zinc-400",children:"Cargando comentarios..."}),c&&Z.jsx("p",{className:"text-red-500 bg-red-900/30 p-3 rounded mb-4",children:c}),!o&&t.length===0&&Z.jsx("p",{className:"text-zinc-500 mb-6",children:"Sé el primero en comentar."}),Z.jsx("div",{className:"space-y-6 mb-8",children:t.map(C=>Z.jsxs("div",{className:"flex items-start gap-3 bg-zinc-800/50 p-4 rounded-lg shadow",children:[Z.jsx("img",{src:C.userPhotoURL||"/default-avatar.png",alt:C.userName,className:"w-10 h-10 rounded-full flex-shrink-0 border border-zinc-600"}),Z.jsxs("div",{className:"flex-grow",children:[Z.jsxs("p",{className:"font-semibold text-emerald-500 text-sm mb-1",children:[C.userName,Z.jsx("span",{className:"text-zinc-500 text-xs font-normal ml-2",children:C.timestamp&&C.timestamp.toDate?new Date(C.timestamp.toDate()).toLocaleString():""})]}),Z.jsx("p",{className:"text-zinc-300 text-sm whitespace-pre-wrap break-words",children:C.text})]})]},C.id))}),f?Z.jsxs("form",{onSubmit:R,className:"flex flex-col gap-2 mb-8",children:[Z.jsx("textarea",{className:"bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-emerald-500 resize-none min-h-[60px]",placeholder:"Escribe tu comentario...",value:n,onChange:C=>i(C.target.value),disabled:o||m,maxLength:2e3}),Z.jsxs("div",{className:"flex items-center gap-2",children:[Z.jsx("button",{type:"submit",className:"px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors disabled:opacity-60",disabled:o||m||!n.trim(),children:"Enviar"}),c&&Z.jsx("span",{className:"text-red-500 text-sm ml-2",children:c})]})]}):Z.jsxs("div",{className:"mb-8 flex flex-col items-start gap-2",children:[Z.jsx("span",{className:"text-zinc-400 text-sm",children:"Necesitas iniciar sesión para comentar."}),Z.jsx(Vl,{})]})]})}export{ad as default};
