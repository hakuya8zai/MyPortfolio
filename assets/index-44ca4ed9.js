(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function yc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function bc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ke(s)?eA(s):bc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ke(t))return t;if(Ae(t))return t}}const Xv=/;(?![^(]*\))/g,Jv=/:([^]+)/,Zv=/\/\*.*?\*\//gs;function eA(t){const e={};return t.replace(Zv,"").split(Xv).forEach(n=>{if(n){const s=n.split(Jv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cc(t){let e="";if(ke(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Cc(t[n]);s&&(e+=s+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nA=yc(tA);function op(t){return!!t||t===""}function sA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Co(t[s],e[s]);return n}function Co(t,e){if(t===e)return!0;let n=ph(t),s=ph(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=sr(t),s=sr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?sA(t,e):!1;if(n=Ae(t),s=Ae(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Co(t[o],e[o]))return!1}}return String(t)===String(e)}const iA=t=>ke(t)?t:t==null?"":z(t)||Ae(t)&&(t.toString===up||!ee(t.toString))?JSON.stringify(t,ap,2):String(t),ap=(t,e)=>e&&e.__v_isRef?ap(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:lp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!z(e)&&!hp(e)?String(e):e,Te={},Ws=[],Ot=()=>{},rA=()=>!1,oA=/^on[^a-z]/,ta=t=>oA.test(t),wc=t=>t.startsWith("onUpdate:"),He=Object.assign,Tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aA=Object.prototype.hasOwnProperty,he=(t,e)=>aA.call(t,e),z=Array.isArray,Vs=t=>Tr(t)==="[object Map]",lp=t=>Tr(t)==="[object Set]",ph=t=>Tr(t)==="[object Date]",ee=t=>typeof t=="function",ke=t=>typeof t=="string",sr=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",cp=t=>Ae(t)&&ee(t.then)&&ee(t.catch),up=Object.prototype.toString,Tr=t=>up.call(t),lA=t=>Tr(t).slice(8,-1),hp=t=>Tr(t)==="[object Object]",Ic=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ao=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cA=/-(\w)/g,zt=na(t=>t.replace(cA,(e,n)=>n?n.toUpperCase():"")),uA=/\B([A-Z])/g,pi=na(t=>t.replace(uA,"-$1").toLowerCase()),sa=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=na(t=>t?`on${sa(t)}`:""),ir=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hA=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let _h;const dA=()=>_h||(_h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bt;class fA{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function pA(t,e=bt){e&&e.active&&e.effects.push(t)}function _A(){return bt}const Sc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dp=t=>(t.w&Mn)>0,fp=t=>(t.n&Mn)>0,gA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mn},mA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];dp(i)&&!fp(i)?i.delete(t):e[n++]=i,i.w&=~Mn,i.n&=~Mn}e.length=n}},kl=new WeakMap;let Wi=0,Mn=1;const Dl=30;let Tt;const hs=Symbol(""),Pl=Symbol("");class Nc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pA(this,s)}run(){if(!this.active)return this.fn();let e=Tt,n=On;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,On=!0,Mn=1<<++Wi,Wi<=Dl?gA(this):gh(this),this.fn()}finally{Wi<=Dl&&mA(this),Mn=1<<--Wi,Tt=this.parent,On=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(gh(this),this.onStop&&this.onStop(),this.active=!1)}}function gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let On=!0;const pp=[];function _i(){pp.push(On),On=!1}function gi(){const t=pp.pop();On=t===void 0?!0:t}function tt(t,e,n){if(On&&Tt){let s=kl.get(t);s||kl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Sc()),_p(i)}}function _p(t,e){let n=!1;Wi<=Dl?fp(t)||(t.n|=Mn,n=!dp(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function ln(t,e,n,s,i,r){const o=kl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Ic(n)&&a.push(o.get("length")):(a.push(o.get(hs)),Vs(t)&&a.push(o.get(Pl)));break;case"delete":z(t)||(a.push(o.get(hs)),Vs(t)&&a.push(o.get(Pl)));break;case"set":Vs(t)&&a.push(o.get(hs));break}if(a.length===1)a[0]&&xl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);xl(Sc(l))}}function xl(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&mh(s);for(const s of n)s.computed||mh(s)}function mh(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vA=yc("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sr)),AA=Rc(),EA=Rc(!1,!0),yA=Rc(!0),vh=bA();function bA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let r=0,o=this.length;r<o;r++)tt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(fe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_i();const s=fe(this)[e].apply(this,n);return gi(),s}}),t}function CA(t){const e=fe(this);return tt(e,"has",t),e.hasOwnProperty(t)}function Rc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?FA:yp:e?Ep:Ap).get(s))return s;const o=z(s);if(!t){if(o&&he(vh,i))return Reflect.get(vh,i,r);if(i==="hasOwnProperty")return CA}const a=Reflect.get(s,i,r);return(sr(i)?gp.has(i):vA(i))||(t||tt(s,"get",i),e)?a:Re(a)?o&&Ic(i)?a:a.value:Ae(a)?t?bp(a):Ir(a):a}}const wA=mp(),TA=mp(!0);function mp(t=!1){return function(n,s,i,r){let o=n[s];if(Xs(o)&&Re(o)&&!Re(i))return!1;if(!t&&(!To(i)&&!Xs(i)&&(o=fe(o),i=fe(i)),!z(n)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=z(n)&&Ic(s)?Number(s)<n.length:he(n,s),l=Reflect.set(n,s,i,r);return n===fe(r)&&(a?ir(i,o)&&ln(n,"set",s,i):ln(n,"add",s,i)),l}}function IA(t,e){const n=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ln(t,"delete",e,void 0),s}function SA(t,e){const n=Reflect.has(t,e);return(!sr(e)||!gp.has(e))&&tt(t,"has",e),n}function NA(t){return tt(t,"iterate",z(t)?"length":hs),Reflect.ownKeys(t)}const vp={get:AA,set:wA,deleteProperty:IA,has:SA,ownKeys:NA},RA={get:yA,set(t,e){return!0},deleteProperty(t,e){return!0}},OA=He({},vp,{get:EA,set:TA}),Oc=t=>t,ia=t=>Reflect.getPrototypeOf(t);function Vr(t,e,n=!1,s=!1){t=t.__v_raw;const i=fe(t),r=fe(e);n||(e!==r&&tt(i,"get",e),tt(i,"get",r));const{has:o}=ia(i),a=s?Oc:n?Pc:rr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function jr(t,e=!1){const n=this.__v_raw,s=fe(n),i=fe(t);return e||(t!==i&&tt(s,"has",t),tt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Gr(t,e=!1){return t=t.__v_raw,!e&&tt(fe(t),"iterate",hs),Reflect.get(t,"size",t)}function Ah(t){t=fe(t);const e=fe(this);return ia(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function Eh(t,e){e=fe(e);const n=fe(this),{has:s,get:i}=ia(n);let r=s.call(n,t);r||(t=fe(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ir(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function yh(t){const e=fe(this),{has:n,get:s}=ia(e);let i=n.call(e,t);i||(t=fe(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ln(e,"delete",t,void 0),r}function bh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Qr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=fe(o),l=e?Oc:t?Pc:rr;return!t&&tt(a,"iterate",hs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Kr(t,e,n){return function(...s){const i=this.__v_raw,r=fe(i),o=Vs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Oc:e?Pc:rr;return!e&&tt(r,"iterate",l?Pl:hs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:this}}function kA(){const t={get(r){return Vr(this,r)},get size(){return Gr(this)},has:jr,add:Ah,set:Eh,delete:yh,clear:bh,forEach:Qr(!1,!1)},e={get(r){return Vr(this,r,!1,!0)},get size(){return Gr(this)},has:jr,add:Ah,set:Eh,delete:yh,clear:bh,forEach:Qr(!1,!0)},n={get(r){return Vr(this,r,!0)},get size(){return Gr(this,!0)},has(r){return jr.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Qr(!0,!1)},s={get(r){return Vr(this,r,!0,!0)},get size(){return Gr(this,!0)},has(r){return jr.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Kr(r,!1,!1),n[r]=Kr(r,!0,!1),e[r]=Kr(r,!1,!0),s[r]=Kr(r,!0,!0)}),[t,n,e,s]}const[DA,PA,xA,LA]=kA();function kc(t,e){const n=e?t?LA:xA:t?PA:DA;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const MA={get:kc(!1,!1)},$A={get:kc(!1,!0)},BA={get:kc(!0,!1)},Ap=new WeakMap,Ep=new WeakMap,yp=new WeakMap,FA=new WeakMap;function UA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HA(t){return t.__v_skip||!Object.isExtensible(t)?0:UA(lA(t))}function Ir(t){return Xs(t)?t:Dc(t,!1,vp,MA,Ap)}function WA(t){return Dc(t,!1,OA,$A,Ep)}function bp(t){return Dc(t,!0,RA,BA,yp)}function Dc(t,e,n,s,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=HA(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function js(t){return Xs(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function Xs(t){return!!(t&&t.__v_isReadonly)}function To(t){return!!(t&&t.__v_isShallow)}function Cp(t){return js(t)||Xs(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function wp(t){return wo(t,"__v_skip",!0),t}const rr=t=>Ae(t)?Ir(t):t,Pc=t=>Ae(t)?bp(t):t;function Tp(t){On&&Tt&&(t=fe(t),_p(t.dep||(t.dep=Sc())))}function Ip(t,e){t=fe(t);const n=t.dep;n&&xl(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Ct(t){return Sp(t,!1)}function VA(t){return Sp(t,!0)}function Sp(t,e){return Re(t)?t:new jA(t,e)}class jA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:rr(e)}get value(){return Tp(this),this._value}set value(e){const n=this.__v_isShallow||To(e)||Xs(e);e=n?e:fe(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rr(e),Ip(this))}}function ut(t){return Re(t)?t.value:t}const GA={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Np(t){return js(t)?t:new Proxy(t,GA)}var Rp;class QA{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rp]=!1,this._dirty=!0,this.effect=new Nc(e,()=>{this._dirty||(this._dirty=!0,Ip(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=fe(this);return Tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rp="__v_isReadonly";function KA(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=Ot):(s=t.get,i=t.set),new QA(s,i,r||!i,n)}function kn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ra(r,e,n)}return i}function ft(t,e,n,s){if(ee(t)){const r=kn(t,e,n,s);return r&&cp(r)&&r.catch(o=>{ra(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}function ra(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){kn(l,null,10,[t,o,a]);return}}zA(t,n,i,s)}function zA(t,e,n,s=!0){console.error(t)}let or=!1,Ll=!1;const je=[];let Ut=0;const Gs=[];let Jt=null,ns=0;const Op=Promise.resolve();let xc=null;function Lc(t){const e=xc||Op;return t?e.then(this?t.bind(this):t):e}function qA(t){let e=Ut+1,n=je.length;for(;e<n;){const s=e+n>>>1;ar(je[s])<t?e=s+1:n=s}return e}function Mc(t){(!je.length||!je.includes(t,or&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?je.push(t):je.splice(qA(t.id),0,t),kp())}function kp(){!or&&!Ll&&(Ll=!0,xc=Op.then(Pp))}function YA(t){const e=je.indexOf(t);e>Ut&&je.splice(e,1)}function XA(t){z(t)?Gs.push(...t):(!Jt||!Jt.includes(t,t.allowRecurse?ns+1:ns))&&Gs.push(t),kp()}function Ch(t,e=or?Ut+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function Dp(t){if(Gs.length){const e=[...new Set(Gs)];if(Gs.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>ar(n)-ar(s)),ns=0;ns<Jt.length;ns++)Jt[ns]();Jt=null,ns=0}}const ar=t=>t.id==null?1/0:t.id,JA=(t,e)=>{const n=ar(t)-ar(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pp(t){Ll=!1,or=!0,je.sort(JA);const e=Ot;try{for(Ut=0;Ut<je.length;Ut++){const n=je[Ut];n&&n.active!==!1&&kn(n,null,14)}}finally{Ut=0,je.length=0,Dp(),or=!1,xc=null,(je.length||Gs.length)&&Pp()}}function ZA(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Te;d&&(i=n.map(p=>ke(p)?p.trim():p)),h&&(i=n.map(Ol))}let a,l=s[a=Ga(e)]||s[a=Ga(zt(e))];!l&&r&&(l=s[a=Ga(pi(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function xp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=xp(c,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ae(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):He(o,r),Ae(t)&&s.set(t,o),o)}function oa(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,pi(e))||he(t,e))}let it=null,aa=null;function Io(t){const e=it;return it=t,aa=t&&t.type.__scopeId||null,e}function la(t){aa=t}function ca(){aa=null}function ht(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ph(-1);const r=Io(e);let o;try{o=t(...i)}finally{Io(r),s._d&&Ph(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qa(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,A;const w=Io(t);try{if(n.shapeFlag&4){const N=i||s;y=Ft(u.call(N,N,h,r,p,d,g)),A=l}else{const N=e;y=Ft(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),A=e.props?l:eE(l)}}catch(N){Qi.length=0,ra(N,t,1),y=me(kt)}let E=y;if(A&&m!==!1){const N=Object.keys(A),{shapeFlag:F}=E;N.length&&F&7&&(o&&N.some(wc)&&(A=tE(A,o)),E=Bn(E,A))}return n.dirs&&(E=Bn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,Io(w),y}const eE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},tE=(t,e)=>{const n={};for(const s in t)(!wc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?wh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!oa(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wh(s,o,c):!0:!!o;return!1}function wh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!oa(n,r))return!0}return!1}function sE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const iE=t=>t.__isSuspense;function rE(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):XA(t)}function co(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Wt(t,e,n=!1){const s=Oe||it;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}function oE(t,e){return $c(t,null,e)}const zr={};function uo(t,e,n){return $c(t,e,n)}function $c(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Te){const a=_A()===(Oe==null?void 0:Oe.scope)?Oe:null;let l,c=!1,u=!1;if(Re(t)?(l=()=>t.value,c=To(t)):js(t)?(l=()=>t,s=!0):z(t)?(u=!0,c=t.some(E=>js(E)||To(E)),l=()=>t.map(E=>{if(Re(E))return E.value;if(js(E))return os(E);if(ee(E))return kn(E,a,2)})):ee(t)?e?l=()=>kn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ft(t,a,3,[d])}:l=Ot,e&&s){const E=l;l=()=>os(E())}let h,d=E=>{h=A.onStop=()=>{kn(E,a,4)}},p;if(cr)if(d=Ot,e?n&&ft(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const E=JE();p=E.__watcherHandles||(E.__watcherHandles=[])}else return Ot;let g=u?new Array(t.length).fill(zr):zr;const m=()=>{if(A.active)if(e){const E=A.run();(s||c||(u?E.some((N,F)=>ir(N,g[F])):ir(E,g)))&&(h&&h(),ft(e,a,3,[E,g===zr?void 0:u&&g[0]===zr?[]:g,d]),g=E)}else A.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Je(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Mc(m));const A=new Nc(l,y);e?n?m():g=A.run():i==="post"?Je(A.run.bind(A),a&&a.suspense):A.run();const w=()=>{A.stop(),a&&a.scope&&Tc(a.scope.effects,A)};return p&&p.push(w),w}function aE(t,e,n){const s=this.proxy,i=ke(t)?t.includes(".")?Lp(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=Oe;Js(this);const a=$c(i,r.bind(s),n);return o?Js(o):ds(),a}function Lp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function os(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))os(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)os(t[n],e);else if(lp(t)||Vs(t))t.forEach(n=>{os(n,e)});else if(hp(t))for(const n in t)os(t[n],e);return t}function lE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vp(()=>{t.isMounted=!0}),jp(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],cE={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(t,{slots:e}){const n=jE(),s=lE();let i;return()=>{const r=e.default&&Bp(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==kt){o=m;break}}const a=fe(t),{mode:l}=a;if(s.isLeaving)return Ka(o);const c=Th(o);if(!c)return Ka(o);const u=Ml(c,a,s,n);$l(c,u);const h=n.subTree,d=h&&Th(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(d&&d.type!==kt&&(!ss(c,d)||p)){const m=Ml(d,a,s,n);if($l(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ka(o);l==="in-out"&&c.type!==kt&&(m.delayLeave=(y,A,w)=>{const E=$p(s,d);E[String(d.key)]=d,y._leaveCb=()=>{A(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Mp=cE;function $p(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ml(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:A,onAppearCancelled:w}=e,E=String(t.key),N=$p(n,t),F=(B,K)=>{B&&ft(B,s,9,K)},j=(B,K)=>{const G=K[1];F(B,K),z(B)?B.every(le=>le.length<=1)&&G():B.length<=1&&G()},X={mode:r,persisted:o,beforeEnter(B){let K=a;if(!n.isMounted)if(i)K=m||a;else return;B._leaveCb&&B._leaveCb(!0);const G=N[E];G&&ss(t,G)&&G.el._leaveCb&&G.el._leaveCb(),F(K,[B])},enter(B){let K=l,G=c,le=u;if(!n.isMounted)if(i)K=y||l,G=A||c,le=w||u;else return;let M=!1;const Z=B._enterCb=be=>{M||(M=!0,be?F(le,[B]):F(G,[B]),X.delayedLeave&&X.delayedLeave(),B._enterCb=void 0)};K?j(K,[B,Z]):Z()},leave(B,K){const G=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return K();F(h,[B]);let le=!1;const M=B._leaveCb=Z=>{le||(le=!0,K(),Z?F(g,[B]):F(p,[B]),B._leaveCb=void 0,N[G]===t&&delete N[G])};N[G]=t,d?j(d,[B,M]):M()},clone(B){return Ml(B,e,n,s)}};return X}function Ka(t){if(ua(t))return t=Bn(t),t.children=null,t}function Th(t){return ua(t)?t.children?t.children[0]:void 0:t}function $l(t,e){t.shapeFlag&6&&t.component?$l(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bp(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===wt?(o.patchFlag&128&&i++,s=s.concat(Bp(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?Bn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Fp(t){return ee(t)?{setup:t,name:t.name}:t}const ho=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function Up(t,e){Wp(t,"a",e)}function Hp(t,e){Wp(t,"da",e)}function Wp(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ha(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ua(i.parent.vnode)&&uE(s,e,n,i),i=i.parent}}function uE(t,e,n,s){const i=ha(e,t,s,!0);Bc(()=>{Tc(s[e],i)},n)}function ha(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_i(),Js(n);const a=ft(e,n,t,o);return ds(),gi(),a});return s?i.unshift(r):i.push(r),r}}const dn=t=>(e,n=Oe)=>(!cr||t==="sp")&&ha(t,(...s)=>e(...s),n),hE=dn("bm"),Vp=dn("m"),dE=dn("bu"),fE=dn("u"),jp=dn("bum"),Bc=dn("um"),pE=dn("sp"),_E=dn("rtg"),gE=dn("rtc");function mE(t,e=Oe){ha("ec",t,e)}function Oi(t,e){const n=it;if(n===null)return t;const s=_a(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Te]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function qn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(_i(),ft(l,n,8,[t.el,a,t,e]),gi())}}const Fc="components";function Uc(t,e){return Qp(Fc,t,!0,e)||t}const Gp=Symbol();function vE(t){return ke(t)?Qp(Fc,t,!1)||t:t||Gp}function Qp(t,e,n=!0,s=!1){const i=it||Oe;if(i){const r=i.type;if(t===Fc){const a=qE(r,!1);if(a&&(a===e||a===zt(e)||a===sa(zt(e))))return r}const o=Ih(i[t]||r[t],e)||Ih(i.appContext[t],e);return!o&&s?r:o}}function Ih(t,e){return t&&(t[e]||t[zt(e)]||t[sa(zt(e))])}function pM(t,e,n,s){let i;const r=n&&n[s];if(z(t)||ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Bl=t=>t?s_(t)?_a(t)||t.proxy:Bl(t.parent):null,Gi=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bl(t.parent),$root:t=>Bl(t.root),$emit:t=>t.emit,$options:t=>Hc(t),$forceUpdate:t=>t.f||(t.f=()=>Mc(t.update)),$nextTick:t=>t.n||(t.n=Lc.bind(t.proxy)),$watch:t=>aE.bind(t)}),za=(t,e)=>t!==Te&&!t.__isScriptSetup&&he(t,e),AE={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(za(s,e))return o[e]=1,s[e];if(i!==Te&&he(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,r[e];if(n!==Te&&he(n,e))return o[e]=4,n[e];Fl&&(o[e]=0)}}const u=Gi[e];let h,d;if(u)return e==="$attrs"&&tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&he(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,he(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return za(i,e)?(i[e]=n,!0):s!==Te&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Te&&he(t,o)||za(e,o)||(a=r[0])&&he(a,o)||he(s,o)||he(Gi,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fl=!0;function EE(t){const e=Hc(t),n=t.proxy,s=t.ctx;Fl=!1,e.beforeCreate&&Sh(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:A,beforeUnmount:w,destroyed:E,unmounted:N,render:F,renderTracked:j,renderTriggered:X,errorCaptured:B,serverPrefetch:K,expose:G,inheritAttrs:le,components:M,directives:Z,filters:be}=e;if(c&&yE(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const ue=o[se];ee(ue)&&(s[se]=ue.bind(n))}if(i){const se=i.call(n,n);Ae(se)&&(t.data=Ir(se))}if(Fl=!0,r)for(const se in r){const ue=r[se],xe=ee(ue)?ue.bind(n,n):ee(ue.get)?ue.get.bind(n,n):Ot,lt=!ee(ue)&&ee(ue.set)?ue.set.bind(n):Ot,Qe=dt({get:xe,set:lt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:De=>Qe.value=De})}if(a)for(const se in a)Kp(a[se],s,n,se);if(l){const se=ee(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ue=>{co(ue,se[ue])})}u&&Sh(u,t,"c");function re(se,ue){z(ue)?ue.forEach(xe=>se(xe.bind(n))):ue&&se(ue.bind(n))}if(re(hE,h),re(Vp,d),re(dE,p),re(fE,g),re(Up,m),re(Hp,y),re(mE,B),re(gE,j),re(_E,X),re(jp,w),re(Bc,N),re(pE,K),z(G))if(G.length){const se=t.exposed||(t.exposed={});G.forEach(ue=>{Object.defineProperty(se,ue,{get:()=>n[ue],set:xe=>n[ue]=xe})})}else t.exposed||(t.exposed={});F&&t.render===Ot&&(t.render=F),le!=null&&(t.inheritAttrs=le),M&&(t.components=M),Z&&(t.directives=Z)}function yE(t,e,n=Ot,s=!1){z(t)&&(t=Ul(t));for(const i in t){const r=t[i];let o;Ae(r)?"default"in r?o=Wt(r.from||i,r.default,!0):o=Wt(r.from||i):o=Wt(r),Re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Sh(t,e,n){ft(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kp(t,e,n,s){const i=s.includes(".")?Lp(n,s):()=>n[s];if(ke(t)){const r=e[t];ee(r)&&uo(i,r)}else if(ee(t))uo(i,t.bind(n));else if(Ae(t))if(z(t))t.forEach(r=>Kp(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&uo(i,r,t)}}function Hc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>So(l,c,o,!0)),So(l,e,o)),Ae(e)&&r.set(e,l),l}function So(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&So(t,r,n,!0),i&&i.forEach(o=>So(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bE={data:Nh,props:Zn,emits:Zn,methods:Zn,computed:Zn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Zn,directives:Zn,watch:wE,provide:Nh,inject:CE};function Nh(t,e){return e?t?function(){return He(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function CE(t,e){return Zn(Ul(t),Ul(e))}function Ul(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?He(He(Object.create(null),t),e):e}function wE(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function TE(t,e,n,s=!1){const i={},r={};wo(r,pa,1),t.propsDefaults=Object.create(null),zp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:WA(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function IE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=fe(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(oa(t.emitsOptions,d))continue;const p=e[d];if(l)if(he(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=zt(d);i[g]=Hl(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{zp(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=pi(h))===h||!he(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!he(e,h))&&(delete r[h],c=!0)}c&&ln(t,"set","$attrs")}function zp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ao(l))continue;const c=e[l];let u;i&&he(i,u=zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:oa(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=fe(n),c=a||Te;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hl(i,l,h,c[h],t,!he(c,h))}}return o}function Hl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Js(i),s=c[n]=l.call(null,e),ds())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===pi(n))&&(s=!0))}return s}function qp(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,p]=qp(h,e,!0);He(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ae(t)&&s.set(t,Ws),Ws;if(z(r))for(let u=0;u<r.length;u++){const h=zt(r[u]);Rh(h)&&(o[h]=Te)}else if(r)for(const u in r){const h=zt(u);if(Rh(h)){const d=r[u],p=o[h]=z(d)||ee(d)?{type:d}:Object.assign({},d);if(p){const g=Dh(Boolean,p.type),m=Dh(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||he(p,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&s.set(t,c),c}function Rh(t){return t[0]!=="$"}function Oh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function kh(t,e){return Oh(t)===Oh(e)}function Dh(t,e){return z(e)?e.findIndex(n=>kh(n,t)):ee(e)&&kh(e,t)?0:-1}const Yp=t=>t[0]==="_"||t==="$stable",Wc=t=>z(t)?t.map(Ft):[Ft(t)],SE=(t,e,n)=>{if(e._n)return e;const s=ht((...i)=>Wc(e(...i)),n);return s._c=!1,s},Xp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Yp(i))continue;const r=t[i];if(ee(r))e[i]=SE(i,r,s);else if(r!=null){const o=Wc(r);e[i]=()=>o}}},Jp=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},NE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),wo(e,"_",n)):Xp(e,t.slots={})}else t.slots={},e&&Jp(t,e);wo(t.slots,pa,1)},RE=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(He(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Xp(e,i)),o=e}else e&&(Jp(t,e),o={default:1});if(r)for(const a in i)!Yp(a)&&!(a in o)&&delete i[a]};function Zp(){return{app:null,config:{isNativeTag:rA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let OE=0;function kE(t,e){return function(s,i=null){ee(s)||(s=Object.assign({},s)),i!=null&&!Ae(i)&&(i=null);const r=Zp(),o=new Set;let a=!1;const l=r.app={_uid:OE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ZE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=me(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,_a(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wl(t,e,n,s,i=!1){if(z(t)){t.forEach((d,p)=>Wl(d,e&&(z(e)?e[p]:e),n,s,i));return}if(ho(s)&&!i)return;const r=s.shapeFlag&4?_a(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,he(h,c)&&(h[c]=null)):Re(c)&&(c.value=null)),ee(l))kn(l,a,12,[o,u]);else{const d=ke(l),p=Re(l);if(d||p){const g=()=>{if(t.f){const m=d?he(h,l)?h[l]:u[l]:l.value;i?z(m)&&Tc(m,r):z(m)?m.includes(r)||m.push(r):d?(u[l]=[r],he(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,he(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Je(g,n)):g()}}}const Je=rE;function DE(t){return PE(t)}function PE(t,e){const n=dA();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Ot,insertStaticContent:g}=t,m=(f,_,v,b=null,T=null,k=null,$=!1,R=null,D=!!_.dynamicChildren)=>{if(f===_)return;f&&!ss(f,_)&&(b=x(f),De(f,T,k,!0),f=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:I,ref:V,shapeFlag:U}=_;switch(I){case da:y(f,_,v,b);break;case kt:A(f,_,v,b);break;case fo:f==null&&w(_,v,b,$);break;case wt:M(f,_,v,b,T,k,$,R,D);break;default:U&1?F(f,_,v,b,T,k,$,R,D):U&6?Z(f,_,v,b,T,k,$,R,D):(U&64||U&128)&&I.process(f,_,v,b,T,k,$,R,D,oe)}V!=null&&T&&Wl(V,f&&f.ref,k,_||f,!_)},y=(f,_,v,b)=>{if(f==null)s(_.el=a(_.children),v,b);else{const T=_.el=f.el;_.children!==f.children&&c(T,_.children)}},A=(f,_,v,b)=>{f==null?s(_.el=l(_.children||""),v,b):_.el=f.el},w=(f,_,v,b)=>{[f.el,f.anchor]=g(f.children,_,v,b,f.el,f.anchor)},E=({el:f,anchor:_},v,b)=>{let T;for(;f&&f!==_;)T=d(f),s(f,v,b),f=T;s(_,v,b)},N=({el:f,anchor:_})=>{let v;for(;f&&f!==_;)v=d(f),i(f),f=v;i(_)},F=(f,_,v,b,T,k,$,R,D)=>{$=$||_.type==="svg",f==null?j(_,v,b,T,k,$,R,D):K(f,_,T,k,$,R,D)},j=(f,_,v,b,T,k,$,R)=>{let D,I;const{type:V,props:U,shapeFlag:W,transition:q,dirs:ne}=f;if(D=f.el=o(f.type,k,U&&U.is,U),W&8?u(D,f.children):W&16&&B(f.children,D,null,b,T,k&&V!=="foreignObject",$,R),ne&&qn(f,null,b,"created"),X(D,f,f.scopeId,$,b),U){for(const pe in U)pe!=="value"&&!ao(pe)&&r(D,pe,null,U[pe],k,f.children,b,T,L);"value"in U&&r(D,"value",null,U.value),(I=U.onVnodeBeforeMount)&&Bt(I,b,f)}ne&&qn(f,null,b,"beforeMount");const _e=(!T||T&&!T.pendingBranch)&&q&&!q.persisted;_e&&q.beforeEnter(D),s(D,_,v),((I=U&&U.onVnodeMounted)||_e||ne)&&Je(()=>{I&&Bt(I,b,f),_e&&q.enter(D),ne&&qn(f,null,b,"mounted")},T)},X=(f,_,v,b,T)=>{if(v&&p(f,v),b)for(let k=0;k<b.length;k++)p(f,b[k]);if(T){let k=T.subTree;if(_===k){const $=T.vnode;X(f,$,$.scopeId,$.slotScopeIds,T.parent)}}},B=(f,_,v,b,T,k,$,R,D=0)=>{for(let I=D;I<f.length;I++){const V=f[I]=R?Cn(f[I]):Ft(f[I]);m(null,V,_,v,b,T,k,$,R)}},K=(f,_,v,b,T,k,$)=>{const R=_.el=f.el;let{patchFlag:D,dynamicChildren:I,dirs:V}=_;D|=f.patchFlag&16;const U=f.props||Te,W=_.props||Te;let q;v&&Yn(v,!1),(q=W.onVnodeBeforeUpdate)&&Bt(q,v,_,f),V&&qn(_,f,v,"beforeUpdate"),v&&Yn(v,!0);const ne=T&&_.type!=="foreignObject";if(I?G(f.dynamicChildren,I,R,v,b,ne,k):$||ue(f,_,R,null,v,b,ne,k,!1),D>0){if(D&16)le(R,_,U,W,v,b,T);else if(D&2&&U.class!==W.class&&r(R,"class",null,W.class,T),D&4&&r(R,"style",U.style,W.style,T),D&8){const _e=_.dynamicProps;for(let pe=0;pe<_e.length;pe++){const Pe=_e[pe],yt=U[Pe],Rs=W[Pe];(Rs!==yt||Pe==="value")&&r(R,Pe,yt,Rs,T,f.children,v,b,L)}}D&1&&f.children!==_.children&&u(R,_.children)}else!$&&I==null&&le(R,_,U,W,v,b,T);((q=W.onVnodeUpdated)||V)&&Je(()=>{q&&Bt(q,v,_,f),V&&qn(_,f,v,"updated")},b)},G=(f,_,v,b,T,k,$)=>{for(let R=0;R<_.length;R++){const D=f[R],I=_[R],V=D.el&&(D.type===wt||!ss(D,I)||D.shapeFlag&70)?h(D.el):v;m(D,I,V,null,b,T,k,$,!0)}},le=(f,_,v,b,T,k,$)=>{if(v!==b){if(v!==Te)for(const R in v)!ao(R)&&!(R in b)&&r(f,R,v[R],null,$,_.children,T,k,L);for(const R in b){if(ao(R))continue;const D=b[R],I=v[R];D!==I&&R!=="value"&&r(f,R,I,D,$,_.children,T,k,L)}"value"in b&&r(f,"value",v.value,b.value)}},M=(f,_,v,b,T,k,$,R,D)=>{const I=_.el=f?f.el:a(""),V=_.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:q}=_;q&&(R=R?R.concat(q):q),f==null?(s(I,v,b),s(V,v,b),B(_.children,v,V,T,k,$,R,D)):U>0&&U&64&&W&&f.dynamicChildren?(G(f.dynamicChildren,W,v,T,k,$,R),(_.key!=null||T&&_===T.subTree)&&e_(f,_,!0)):ue(f,_,v,V,T,k,$,R,D)},Z=(f,_,v,b,T,k,$,R,D)=>{_.slotScopeIds=R,f==null?_.shapeFlag&512?T.ctx.activate(_,v,b,$,D):be(_,v,b,T,k,$,D):We(f,_,D)},be=(f,_,v,b,T,k,$)=>{const R=f.component=VE(f,b,T);if(ua(f)&&(R.ctx.renderer=oe),GE(R),R.asyncDep){if(T&&T.registerDep(R,re),!f.el){const D=R.subTree=me(kt);A(null,D,_,v)}return}re(R,f,_,v,T,k,$)},We=(f,_,v)=>{const b=_.component=f.component;if(nE(f,_,v))if(b.asyncDep&&!b.asyncResolved){se(b,_,v);return}else b.next=_,YA(b.update),b.update();else _.el=f.el,b.vnode=_},re=(f,_,v,b,T,k,$)=>{const R=()=>{if(f.isMounted){let{next:V,bu:U,u:W,parent:q,vnode:ne}=f,_e=V,pe;Yn(f,!1),V?(V.el=ne.el,se(f,V,$)):V=ne,U&&lo(U),(pe=V.props&&V.props.onVnodeBeforeUpdate)&&Bt(pe,q,V,ne),Yn(f,!0);const Pe=Qa(f),yt=f.subTree;f.subTree=Pe,m(yt,Pe,h(yt.el),x(yt),f,T,k),V.el=Pe.el,_e===null&&sE(f,Pe.el),W&&Je(W,T),(pe=V.props&&V.props.onVnodeUpdated)&&Je(()=>Bt(pe,q,V,ne),T)}else{let V;const{el:U,props:W}=_,{bm:q,m:ne,parent:_e}=f,pe=ho(_);if(Yn(f,!1),q&&lo(q),!pe&&(V=W&&W.onVnodeBeforeMount)&&Bt(V,_e,_),Yn(f,!0),U&&J){const Pe=()=>{f.subTree=Qa(f),J(U,f.subTree,f,T,null)};pe?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=Qa(f);m(null,Pe,v,b,f,T,k),_.el=Pe.el}if(ne&&Je(ne,T),!pe&&(V=W&&W.onVnodeMounted)){const Pe=_;Je(()=>Bt(V,_e,Pe),T)}(_.shapeFlag&256||_e&&ho(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&Je(f.a,T),f.isMounted=!0,_=v=b=null}},D=f.effect=new Nc(R,()=>Mc(I),f.scope),I=f.update=()=>D.run();I.id=f.uid,Yn(f,!0),I()},se=(f,_,v)=>{_.component=f;const b=f.vnode.props;f.vnode=_,f.next=null,IE(f,_.props,b,v),RE(f,_.children,v),_i(),Ch(),gi()},ue=(f,_,v,b,T,k,$,R,D=!1)=>{const I=f&&f.children,V=f?f.shapeFlag:0,U=_.children,{patchFlag:W,shapeFlag:q}=_;if(W>0){if(W&128){lt(I,U,v,b,T,k,$,R,D);return}else if(W&256){xe(I,U,v,b,T,k,$,R,D);return}}q&8?(V&16&&L(I,T,k),U!==I&&u(v,U)):V&16?q&16?lt(I,U,v,b,T,k,$,R,D):L(I,T,k,!0):(V&8&&u(v,""),q&16&&B(U,v,b,T,k,$,R,D))},xe=(f,_,v,b,T,k,$,R,D)=>{f=f||Ws,_=_||Ws;const I=f.length,V=_.length,U=Math.min(I,V);let W;for(W=0;W<U;W++){const q=_[W]=D?Cn(_[W]):Ft(_[W]);m(f[W],q,v,null,T,k,$,R,D)}I>V?L(f,T,k,!0,!1,U):B(_,v,b,T,k,$,R,D,U)},lt=(f,_,v,b,T,k,$,R,D)=>{let I=0;const V=_.length;let U=f.length-1,W=V-1;for(;I<=U&&I<=W;){const q=f[I],ne=_[I]=D?Cn(_[I]):Ft(_[I]);if(ss(q,ne))m(q,ne,v,null,T,k,$,R,D);else break;I++}for(;I<=U&&I<=W;){const q=f[U],ne=_[W]=D?Cn(_[W]):Ft(_[W]);if(ss(q,ne))m(q,ne,v,null,T,k,$,R,D);else break;U--,W--}if(I>U){if(I<=W){const q=W+1,ne=q<V?_[q].el:b;for(;I<=W;)m(null,_[I]=D?Cn(_[I]):Ft(_[I]),v,ne,T,k,$,R,D),I++}}else if(I>W)for(;I<=U;)De(f[I],T,k,!0),I++;else{const q=I,ne=I,_e=new Map;for(I=ne;I<=W;I++){const st=_[I]=D?Cn(_[I]):Ft(_[I]);st.key!=null&&_e.set(st.key,I)}let pe,Pe=0;const yt=W-ne+1;let Rs=!1,hh=0;const Ri=new Array(yt);for(I=0;I<yt;I++)Ri[I]=0;for(I=q;I<=U;I++){const st=f[I];if(Pe>=yt){De(st,T,k,!0);continue}let $t;if(st.key!=null)$t=_e.get(st.key);else for(pe=ne;pe<=W;pe++)if(Ri[pe-ne]===0&&ss(st,_[pe])){$t=pe;break}$t===void 0?De(st,T,k,!0):(Ri[$t-ne]=I+1,$t>=hh?hh=$t:Rs=!0,m(st,_[$t],v,null,T,k,$,R,D),Pe++)}const dh=Rs?xE(Ri):Ws;for(pe=dh.length-1,I=yt-1;I>=0;I--){const st=ne+I,$t=_[st],fh=st+1<V?_[st+1].el:b;Ri[I]===0?m(null,$t,v,fh,T,k,$,R,D):Rs&&(pe<0||I!==dh[pe]?Qe($t,v,fh,2):pe--)}}},Qe=(f,_,v,b,T=null)=>{const{el:k,type:$,transition:R,children:D,shapeFlag:I}=f;if(I&6){Qe(f.component.subTree,_,v,b);return}if(I&128){f.suspense.move(_,v,b);return}if(I&64){$.move(f,_,v,oe);return}if($===wt){s(k,_,v);for(let U=0;U<D.length;U++)Qe(D[U],_,v,b);s(f.anchor,_,v);return}if($===fo){E(f,_,v);return}if(b!==2&&I&1&&R)if(b===0)R.beforeEnter(k),s(k,_,v),Je(()=>R.enter(k),T);else{const{leave:U,delayLeave:W,afterLeave:q}=R,ne=()=>s(k,_,v),_e=()=>{U(k,()=>{ne(),q&&q()})};W?W(k,ne,_e):_e()}else s(k,_,v)},De=(f,_,v,b=!1,T=!1)=>{const{type:k,props:$,ref:R,children:D,dynamicChildren:I,shapeFlag:V,patchFlag:U,dirs:W}=f;if(R!=null&&Wl(R,null,v,f,!0),V&256){_.ctx.deactivate(f);return}const q=V&1&&W,ne=!ho(f);let _e;if(ne&&(_e=$&&$.onVnodeBeforeUnmount)&&Bt(_e,_,f),V&6)C(f.component,v,b);else{if(V&128){f.suspense.unmount(v,b);return}q&&qn(f,null,_,"beforeUnmount"),V&64?f.type.remove(f,_,v,T,oe,b):I&&(k!==wt||U>0&&U&64)?L(I,_,v,!1,!0):(k===wt&&U&384||!T&&V&16)&&L(D,_,v),b&&At(f)}(ne&&(_e=$&&$.onVnodeUnmounted)||q)&&Je(()=>{_e&&Bt(_e,_,f),q&&qn(f,null,_,"unmounted")},v)},At=f=>{const{type:_,el:v,anchor:b,transition:T}=f;if(_===wt){Et(v,b);return}if(_===fo){N(f);return}const k=()=>{i(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:$,delayLeave:R}=T,D=()=>$(v,k);R?R(f.el,k,D):D()}else k()},Et=(f,_)=>{let v;for(;f!==_;)v=d(f),i(f),f=v;i(_)},C=(f,_,v)=>{const{bum:b,scope:T,update:k,subTree:$,um:R}=f;b&&lo(b),T.stop(),k&&(k.active=!1,De($,f,_,v)),R&&Je(R,_),Je(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},L=(f,_,v,b=!1,T=!1,k=0)=>{for(let $=k;$<f.length;$++)De(f[$],_,v,b,T)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),H=(f,_,v)=>{f==null?_._vnode&&De(_._vnode,null,null,!0):m(_._vnode||null,f,_,null,null,null,v),Ch(),Dp(),_._vnode=f},oe={p:m,um:De,m:Qe,r:At,mt:be,mc:B,pc:ue,pbc:G,n:x,o:t};let Ce,J;return e&&([Ce,J]=e(oe)),{render:H,hydrate:Ce,createApp:kE(H,Ce)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function e_(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Cn(i[r]),a.el=o.el),n||e_(o,a)),a.type===da&&(a.el=o.el)}}function xE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const LE=t=>t.__isTeleport,wt=Symbol(void 0),da=Symbol(void 0),kt=Symbol(void 0),fo=Symbol(void 0),Qi=[];let St=null;function _t(t=!1){Qi.push(St=t?null:[])}function ME(){Qi.pop(),St=Qi[Qi.length-1]||null}let lr=1;function Ph(t){lr+=t}function t_(t){return t.dynamicChildren=lr>0?St||Ws:null,ME(),lr>0&&St&&St.push(t),t}function $n(t,e,n,s,i,r){return t_(P(t,e,n,s,i,r,!0))}function fa(t,e,n,s,i){return t_(me(t,e,n,s,i,!0))}function Vl(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const pa="__vInternal",n_=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>t!=null?ke(t)||Re(t)||ee(t)?{i:it,r:t,k:e,f:!!n}:t:null;function P(t,e=null,n=null,s=0,i=null,r=t===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&n_(e),ref:e&&po(e),scopeId:aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return a?(jc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),lr>0&&!o&&St&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&St.push(l),l}const me=$E;function $E(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Gp)&&(t=kt),Vl(t)){const a=Bn(t,e,!0);return n&&jc(a,n),lr>0&&!r&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(YE(t)&&(t=t.__vccOpts),e){e=BE(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=Cc(a)),Ae(l)&&(Cp(l)&&!z(l)&&(l=He({},l)),e.style=bc(l))}const o=ke(t)?1:iE(t)?128:LE(t)?64:Ae(t)?4:ee(t)?2:0;return P(t,e,n,s,i,o,r,!0)}function BE(t){return t?Cp(t)||pa in t?He({},t):t:null}function Bn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?UE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&n_(a),ref:e&&e.ref?n&&i?z(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _o(t=" ",e=0){return me(da,null,t,e)}function Vc(t,e){const n=me(fo,null,t);return n.staticCount=e,n}function FE(t="",e=!1){return e?(_t(),fa(kt,null,t)):me(kt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?me(kt):z(t)?me(wt,null,t.slice()):typeof t=="object"?Cn(t):me(da,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function jc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),jc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pa in e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[_o(e)]):n=8);t.children=e,t.shapeFlag|=n}function UE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Cc([e.class,s.class]));else if(i==="style")e.style=bc([e.style,s.style]);else if(ta(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Bt(t,e,n,s=null){ft(t,e,7,[n,s])}const HE=Zp();let WE=0;function VE(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||HE,r={uid:WE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(s,i),emitsOptions:xp(s,i),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ZA.bind(null,r),t.ce&&t.ce(r),r}let Oe=null;const jE=()=>Oe||it,Js=t=>{Oe=t,t.scope.on()},ds=()=>{Oe&&Oe.scope.off(),Oe=null};function s_(t){return t.vnode.shapeFlag&4}let cr=!1;function GE(t,e=!1){cr=e;const{props:n,children:s}=t.vnode,i=s_(t);TE(t,n,i,e),NE(t,s);const r=i?QE(t,e):void 0;return cr=!1,r}function QE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wp(new Proxy(t.ctx,AE));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?zE(t):null;Js(t),_i();const r=kn(s,t,0,[t.props,i]);if(gi(),ds(),cp(r)){if(r.then(ds,ds),e)return r.then(o=>{xh(t,o,e)}).catch(o=>{ra(o,t,0)});t.asyncDep=r}else xh(t,r,e)}else i_(t,e)}function xh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Np(e)),i_(t,n)}let Lh;function i_(t,e,n){const s=t.type;if(!t.render){if(!e&&Lh&&!s.render){const i=s.template||Hc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=He(He({isCustomElement:r,delimiters:a},o),l);s.render=Lh(i,c)}}t.render=s.render||Ot}Js(t),_i(),EE(t),gi(),ds()}function KE(t){return new Proxy(t.attrs,{get(e,n){return tt(t,"get","$attrs"),e[n]}})}function zE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=KE(t))},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Np(wp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gi)return Gi[n](t)},has(e,n){return n in e||n in Gi}}))}function qE(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function YE(t){return ee(t)&&"__vccOpts"in t}const dt=(t,e)=>KA(t,e,cr);function Gc(t,e,n){const s=arguments.length;return s===2?Ae(e)&&!z(e)?Vl(e)?me(t,null,[e]):me(t,e):me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vl(n)&&(n=[n]),me(t,e,n))}const XE=Symbol(""),JE=()=>Wt(XE),ZE="3.2.47",ey="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,Mh=is&&is.createElement("template"),ty={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?is.createElementNS(ey,t):is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>is.createTextNode(t),createComment:t=>is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Mh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Mh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ny(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sy(t,e,n){const s=t.style,i=ke(n);if(n&&!i){if(e&&!ke(e))for(const r in e)n[r]==null&&jl(s,r,"");for(const r in n)jl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $h=/\s*!important$/;function jl(t,e,n){if(z(n))n.forEach(s=>jl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=iy(t,e);$h.test(n)?t.setProperty(pi(s),n.replace($h,""),"important"):t[s]=n}}const Bh=["Webkit","Moz","ms"],qa={};function iy(t,e){const n=qa[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return qa[e]=s;s=sa(s);for(let i=0;i<Bh.length;i++){const r=Bh[i]+s;if(r in t)return qa[e]=r}return e}const Fh="http://www.w3.org/1999/xlink";function ry(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fh,e.slice(6,e.length)):t.setAttributeNS(Fh,e,n);else{const r=nA(e);n==null||r&&!op(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=op(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function rs(t,e,n,s){t.addEventListener(e,n,s)}function ay(t,e,n,s){t.removeEventListener(e,n,s)}function ly(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=cy(e);if(s){const c=r[e]=dy(s,i);rs(t,a,c,l)}else o&&(ay(t,a,o,l),r[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function cy(t){let e;if(Uh.test(t)){e={};let s;for(;s=t.match(Uh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}let Ya=0;const uy=Promise.resolve(),hy=()=>Ya||(uy.then(()=>Ya=0),Ya=Date.now());function dy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(fy(s,n.value),e,5,[s])};return n.value=t,n.attached=hy(),n}function fy(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Hh=/^on[a-z]/,py=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?ny(t,s,i):e==="style"?sy(t,n,s):ta(e)?wc(e)||ly(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_y(t,e,s,i))?oy(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ry(t,e,s,i))};function _y(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hh.test(e)&&ke(n)?!1:e in t}const vn="transition",ki="animation",Qc=(t,{slots:e})=>Gc(Mp,gy(t),e);Qc.displayName="Transition";const r_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qc.props=He({},Mp.props,r_);const Xn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wh=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function gy(t){const e={};for(const M in t)M in r_||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=my(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:A,onEnter:w,onEnterCancelled:E,onLeave:N,onLeaveCancelled:F,onBeforeAppear:j=A,onAppear:X=w,onAppearCancelled:B=E}=e,K=(M,Z,be)=>{Jn(M,Z?u:a),Jn(M,Z?c:o),be&&be()},G=(M,Z)=>{M._isLeaving=!1,Jn(M,h),Jn(M,p),Jn(M,d),Z&&Z()},le=M=>(Z,be)=>{const We=M?X:w,re=()=>K(Z,M,be);Xn(We,[Z,re]),Vh(()=>{Jn(Z,M?l:r),An(Z,M?u:a),Wh(We)||jh(Z,s,m,re)})};return He(e,{onBeforeEnter(M){Xn(A,[M]),An(M,r),An(M,o)},onBeforeAppear(M){Xn(j,[M]),An(M,l),An(M,c)},onEnter:le(!1),onAppear:le(!0),onLeave(M,Z){M._isLeaving=!0;const be=()=>G(M,Z);An(M,h),Ey(),An(M,d),Vh(()=>{M._isLeaving&&(Jn(M,h),An(M,p),Wh(N)||jh(M,s,y,be))}),Xn(N,[M,be])},onEnterCancelled(M){K(M,!1),Xn(E,[M])},onAppearCancelled(M){K(M,!0),Xn(B,[M])},onLeaveCancelled(M){G(M),Xn(F,[M])}})}function my(t){if(t==null)return null;if(Ae(t))return[Xa(t.enter),Xa(t.leave)];{const e=Xa(t);return[e,e]}}function Xa(t){return hA(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Jn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vy=0;function jh(t,e,n,s){const i=t._endId=++vy,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Ay(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Ay(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${vn}Delay`),r=s(`${vn}Duration`),o=Gh(i,r),a=s(`${ki}Delay`),l=s(`${ki}Duration`),c=Gh(a,l);let u=null,h=0,d=0;e===vn?o>0&&(u=vn,h=o,d=r.length):e===ki?c>0&&(u=ki,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?vn:ki:null,d=u?u===vn?r.length:l.length:0);const p=u===vn&&/\b(transform|all)(,|$)/.test(s(`${vn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Gh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Qh(n)+Qh(t[s])))}function Qh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ey(){return document.body.offsetHeight}const No=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>lo(e,n):e};function yy(t){t.target.composing=!0}function Kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Di={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=No(i);const r=s||i.props&&i.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ol(a)),t._assign(a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",yy),rs(t,"compositionend",Kh),rs(t,"change",Kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=No(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ol(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},_M={created(t,{value:e},n){t.checked=Co(e,n.props.value),t._assign=No(n),rs(t,"change",()=>{t._assign(by(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=No(s),e!==n&&(t.checked=Co(e,s.props.value))}};function by(t){return"_value"in t?t._value:t.value}const gM={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pi(t,!0),s.enter(t)):s.leave(t,()=>{Pi(t,!1)}):Pi(t,e))},beforeUnmount(t,{value:e}){Pi(t,e)}};function Pi(t,e){t.style.display=e?t._vod:"none"}const Cy=He({patchProp:py},ty);let zh;function wy(){return zh||(zh=DE(Cy))}const Ty=(...t)=>{const e=wy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Iy(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Iy(t){return ke(t)?document.querySelector(t):t}const Sy="/MyPortfolio/assets/Frank_logo-98eaea7f.svg";const Sr=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ga=t=>(la("data-v-9d2463c8"),t=t(),ca(),t),Ny={class:"navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white sticky-top"},Ry={class:"container-fluid"},Oy=ga(()=>P("img",{src:Sy,alt:""},null,-1)),ky=ga(()=>P("div",{class:"line1"},null,-1)),Dy=ga(()=>P("div",{class:"line2"},null,-1)),Py=[ky,Dy],xy={class:"collapse navbar-collapse",id:"navbarNav"},Ly={class:"navbar-nav ms-lg-auto"},My={class:"nav-item bt-border text-center ms-lg-auto"},$y={class:"nav-item bt-border text-center ms-lg-auto"},By={class:"nav-item bt-border text-center ms-lg-auto"},Fy=ga(()=>P("li",{class:"nav-item text-center ms-lg-auto"},[P("a",{href:"https://medium.com/@huikaichung1999",target:"_blank",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Medium")],-1)),Uy={__name:"Header",setup(t){function e(){const n=document.querySelector(".line1"),s=document.querySelector(".line2");n.classList.toggle("open"),s.classList.toggle("open")}return(n,s)=>{const i=Uc("router-link");return _t(),$n("nav",Ny,[P("div",Ry,[me(i,{to:"/MyPortfolio",class:"navbar-brand"},{default:ht(()=>[Oy]),_:1}),P("button",{onClick:e,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},Py),P("div",xy,[P("ul",Ly,[P("li",My,[me(i,{to:"/MyPortfolio/About",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:ht(()=>[_o("About")]),_:1})]),P("li",$y,[me(i,{to:"/MyPortfolio/Work",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:ht(()=>[_o("Work")]),_:1})]),P("li",By,[me(i,{to:"/MyPortfolio/Resume",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:ht(()=>[_o("Resume")]),_:1})]),Fy])])])])}}},Hy=Sr(Uy,[["__scopeId","data-v-9d2463c8"]]);const Wy={},Vy={class:"bg-black text-bg-black text-center text-lg-start border-top border-1 border-white"},jy=Vc('<div class="text-center m-2 p-0 text-secondary font-sm" data-v-f7835877> interested in working together? </div><div class="text-center" data-v-f7835877><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://www.linkedin.com/in/hui-kai-chung-970ab6140/" data-v-f7835877>-&gt; linkedin</a><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://medium.com/@huikaichung1999" data-v-f7835877>-&gt; Medium</a></div><div class="text-center" data-v-f7835877><a class="m-2 text-secondary text-decoration-none hover-underline font-sm" data-v-f7835877>huikaichung1999@gmail.com</a></div><div class="text-center p-0 m-2 text-secondary font-sm" data-v-f7835877> Copyright @2023 FrankChung. </div>',4),Gy=[jy];function Qy(t,e){return _t(),$n("footer",Vy,Gy)}const Ky=Sr(Wy,[["render",Qy],["__scopeId","data-v-f7835877"]]);const zy={},qy=t=>(la("data-v-2f0b3c16"),t=t(),ca(),t),Yy={class:"frame bg-dark"},Xy=qy(()=>P("div",{class:"wrapper"},[P("span"),P("span"),P("span"),P("span"),P("span")],-1)),Jy=[Xy];function Zy(t,e){return _t(),$n("div",Yy,Jy)}const eb=Sr(zy,[["render",Zy],["__scopeId","data-v-2f0b3c16"]]);const tb=t=>(la("data-v-5076443d"),t=t(),ca(),t),nb={class:"loading-container"},sb=tb(()=>P("div",{class:"loading-overlay bg-dark"},null,-1)),ib={class:"spinner"},rb={__name:"Loading",setup(t){return(e,n)=>(_t(),$n("div",nb,[sb,P("div",ib,[me(eb)])]))}},ob=Sr(rb,[["__scopeId","data-v-5076443d"]]),ab={__name:"App",setup(t){return(e,n)=>{const s=Uc("router-view");return _t(),$n(wt,null,[me(Hy),me(ob),me(s,null,{default:ht(({Component:i})=>[me(Qc,{name:"page"},{default:ht(()=>[(_t(),fa(vE(i)))]),_:2},1024)]),_:1}),me(Ky)],64)}}};var Ye="top",ot="bottom",at="right",Xe="left",ma="auto",mi=[Ye,ot,at,Xe],ms="start",Zs="end",o_="clippingParents",Kc="viewport",Ls="popper",a_="reference",Gl=mi.reduce(function(t,e){return t.concat([e+"-"+ms,e+"-"+Zs])},[]),zc=[].concat(mi,[ma]).reduce(function(t,e){return t.concat([e,e+"-"+ms,e+"-"+Zs])},[]),l_="beforeRead",c_="read",u_="afterRead",h_="beforeMain",d_="main",f_="afterMain",p_="beforeWrite",__="write",g_="afterWrite",m_=[l_,c_,u_,h_,d_,f_,p_,__,g_];function qt(t){return t?(t.nodeName||"").toLowerCase():null}function mt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function vs(t){var e=mt(t).Element;return t instanceof e||t instanceof Element}function pt(t){var e=mt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function qc(t){if(typeof ShadowRoot>"u")return!1;var e=mt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function lb(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!pt(r)||!qt(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function cb(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!pt(i)||!qt(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Yc={name:"applyStyles",enabled:!0,phase:"write",fn:lb,effect:cb,requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var fs=Math.max,Ro=Math.min,ei=Math.round;function Ql(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function v_(){return!/^((?!chrome|android).)*safari/i.test(Ql())}function ti(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&pt(t)&&(i=t.offsetWidth>0&&ei(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&ei(s.height)/t.offsetHeight||1);var o=vs(t)?mt(t):window,a=o.visualViewport,l=!v_()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Xc(t){var e=ti(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function A_(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&qc(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function cn(t){return mt(t).getComputedStyle(t)}function ub(t){return["table","td","th"].indexOf(qt(t))>=0}function Qn(t){return((vs(t)?t.ownerDocument:t.document)||window.document).documentElement}function va(t){return qt(t)==="html"?t:t.assignedSlot||t.parentNode||(qc(t)?t.host:null)||Qn(t)}function qh(t){return!pt(t)||cn(t).position==="fixed"?null:t.offsetParent}function hb(t){var e=/firefox/i.test(Ql()),n=/Trident/i.test(Ql());if(n&&pt(t)){var s=cn(t);if(s.position==="fixed")return null}var i=va(t);for(qc(i)&&(i=i.host);pt(i)&&["html","body"].indexOf(qt(i))<0;){var r=cn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function Nr(t){for(var e=mt(t),n=qh(t);n&&ub(n)&&cn(n).position==="static";)n=qh(n);return n&&(qt(n)==="html"||qt(n)==="body"&&cn(n).position==="static")?e:n||hb(t)||e}function Jc(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ki(t,e,n){return fs(t,Ro(e,n))}function db(t,e,n){var s=Ki(t,e,n);return s>n?n:s}function E_(){return{top:0,right:0,bottom:0,left:0}}function y_(t){return Object.assign({},E_(),t)}function b_(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var fb=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,y_(typeof e!="number"?e:b_(e,mi))};function pb(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Vt(n.placement),l=Jc(a),c=[Xe,at].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=fb(i.padding,n),d=Xc(r),p=l==="y"?Ye:Xe,g=l==="y"?ot:at,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],A=Nr(r),w=A?l==="y"?A.clientHeight||0:A.clientWidth||0:0,E=m/2-y/2,N=h[p],F=w-d[u]-h[g],j=w/2-d[u]/2+E,X=Ki(N,j,F),B=l;n.modifiersData[s]=(e={},e[B]=X,e.centerOffset=X-j,e)}}function _b(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||A_(e.elements.popper,i)&&(e.elements.arrow=i))}const C_={name:"arrow",enabled:!0,phase:"main",fn:pb,effect:_b,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ni(t){return t.split("-")[1]}var gb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mb(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:ei(e*i)/i||0,y:ei(n*i)/i||0}}function Yh(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,m=g===void 0?0:g,y=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=y.x,m=y.y;var A=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),E=Xe,N=Ye,F=window;if(c){var j=Nr(n),X="clientHeight",B="clientWidth";if(j===mt(n)&&(j=Qn(n),cn(j).position!=="static"&&a==="absolute"&&(X="scrollHeight",B="scrollWidth")),j=j,i===Ye||(i===Xe||i===at)&&r===Zs){N=ot;var K=h&&j===F&&F.visualViewport?F.visualViewport.height:j[X];m-=K-s.height,m*=l?1:-1}if(i===Xe||(i===Ye||i===ot)&&r===Zs){E=at;var G=h&&j===F&&F.visualViewport?F.visualViewport.width:j[B];p-=G-s.width,p*=l?1:-1}}var le=Object.assign({position:a},c&&gb),M=u===!0?mb({x:p,y:m}):{x:p,y:m};if(p=M.x,m=M.y,l){var Z;return Object.assign({},le,(Z={},Z[N]=w?"0":"",Z[E]=A?"0":"",Z.transform=(F.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",Z))}return Object.assign({},le,(e={},e[N]=w?m+"px":"",e[E]=A?p+"px":"",e.transform="",e))}function vb(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Vt(e.placement),variation:ni(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Yh(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Yh(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Zc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vb,data:{}};var qr={passive:!0};function Ab(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=mt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,qr)}),a&&l.addEventListener("resize",n.update,qr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,qr)}),a&&l.removeEventListener("resize",n.update,qr)}}const eu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ab,data:{}};var Eb={left:"right",right:"left",bottom:"top",top:"bottom"};function go(t){return t.replace(/left|right|bottom|top/g,function(e){return Eb[e]})}var yb={start:"end",end:"start"};function Xh(t){return t.replace(/start|end/g,function(e){return yb[e]})}function tu(t){var e=mt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function nu(t){return ti(Qn(t)).left+tu(t).scrollLeft}function bb(t,e){var n=mt(t),s=Qn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=v_();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+nu(t),y:l}}function Cb(t){var e,n=Qn(t),s=tu(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=fs(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=fs(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+nu(t),l=-s.scrollTop;return cn(i||n).direction==="rtl"&&(a+=fs(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function su(t){var e=cn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function w_(t){return["html","body","#document"].indexOf(qt(t))>=0?t.ownerDocument.body:pt(t)&&su(t)?t:w_(va(t))}function zi(t,e){var n;e===void 0&&(e=[]);var s=w_(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=mt(s),o=i?[r].concat(r.visualViewport||[],su(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(zi(va(o)))}function Kl(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wb(t,e){var n=ti(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Jh(t,e,n){return e===Kc?Kl(bb(t,n)):vs(e)?wb(e,n):Kl(Cb(Qn(t)))}function Tb(t){var e=zi(va(t)),n=["absolute","fixed"].indexOf(cn(t).position)>=0,s=n&&pt(t)?Nr(t):t;return vs(s)?e.filter(function(i){return vs(i)&&A_(i,s)&&qt(i)!=="body"}):[]}function Ib(t,e,n,s){var i=e==="clippingParents"?Tb(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=Jh(t,c,s);return l.top=fs(u.top,l.top),l.right=Ro(u.right,l.right),l.bottom=Ro(u.bottom,l.bottom),l.left=fs(u.left,l.left),l},Jh(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function T_(t){var e=t.reference,n=t.element,s=t.placement,i=s?Vt(s):null,r=s?ni(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ye:l={x:o,y:e.y-n.height};break;case ot:l={x:o,y:e.y+e.height};break;case at:l={x:e.x+e.width,y:a};break;case Xe:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Jc(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case ms:l[c]=l[c]-(e[u]/2-n[u]/2);break;case Zs:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function si(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?o_:a,c=n.rootBoundary,u=c===void 0?Kc:c,h=n.elementContext,d=h===void 0?Ls:h,p=n.altBoundary,g=p===void 0?!1:p,m=n.padding,y=m===void 0?0:m,A=y_(typeof y!="number"?y:b_(y,mi)),w=d===Ls?a_:Ls,E=t.rects.popper,N=t.elements[g?w:d],F=Ib(vs(N)?N:N.contextElement||Qn(t.elements.popper),l,u,o),j=ti(t.elements.reference),X=T_({reference:j,element:E,strategy:"absolute",placement:i}),B=Kl(Object.assign({},E,X)),K=d===Ls?B:j,G={top:F.top-K.top+A.top,bottom:K.bottom-F.bottom+A.bottom,left:F.left-K.left+A.left,right:K.right-F.right+A.right},le=t.modifiersData.offset;if(d===Ls&&le){var M=le[i];Object.keys(G).forEach(function(Z){var be=[at,ot].indexOf(Z)>=0?1:-1,We=[Ye,ot].indexOf(Z)>=0?"y":"x";G[Z]+=M[We]*be})}return G}function Sb(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?zc:l,u=ni(s),h=u?a?Gl:Gl.filter(function(g){return ni(g)===u}):mi,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,m){return g[m]=si(t,{placement:m,boundary:i,rootBoundary:r,padding:o})[Vt(m)],g},{});return Object.keys(p).sort(function(g,m){return p[g]-p[m]})}function Nb(t){if(Vt(t)===ma)return[];var e=go(t);return[Xh(t),e,Xh(e)]}function Rb(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,m=n.allowedAutoPlacements,y=e.options.placement,A=Vt(y),w=A===y,E=l||(w||!g?[go(y)]:Nb(y)),N=[y].concat(E).reduce(function(Et,C){return Et.concat(Vt(C)===ma?Sb(e,{placement:C,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):C)},[]),F=e.rects.reference,j=e.rects.popper,X=new Map,B=!0,K=N[0],G=0;G<N.length;G++){var le=N[G],M=Vt(le),Z=ni(le)===ms,be=[Ye,ot].indexOf(M)>=0,We=be?"width":"height",re=si(e,{placement:le,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),se=be?Z?at:Xe:Z?ot:Ye;F[We]>j[We]&&(se=go(se));var ue=go(se),xe=[];if(r&&xe.push(re[M]<=0),a&&xe.push(re[se]<=0,re[ue]<=0),xe.every(function(Et){return Et})){K=le,B=!1;break}X.set(le,xe)}if(B)for(var lt=g?3:1,Qe=function(C){var L=N.find(function(x){var H=X.get(x);if(H)return H.slice(0,C).every(function(oe){return oe})});if(L)return K=L,"break"},De=lt;De>0;De--){var At=Qe(De);if(At==="break")break}e.placement!==K&&(e.modifiersData[s]._skip=!0,e.placement=K,e.reset=!0)}}const I_={name:"flip",enabled:!0,phase:"main",fn:Rb,requiresIfExists:["offset"],data:{_skip:!1}};function Zh(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function ed(t){return[Ye,at,ot,Xe].some(function(e){return t[e]>=0})}function Ob(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=si(e,{elementContext:"reference"}),a=si(e,{altBoundary:!0}),l=Zh(o,s),c=Zh(a,i,r),u=ed(l),h=ed(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const S_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ob};function kb(t,e,n){var s=Vt(t),i=[Xe,Ye].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Xe,at].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Db(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=zc.reduce(function(u,h){return u[h]=kb(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const N_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Db};function Pb(t){var e=t.state,n=t.name;e.modifiersData[n]=T_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const iu={name:"popperOffsets",enabled:!0,phase:"read",fn:Pb,data:{}};function xb(t){return t==="x"?"y":"x"}function Lb(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,p=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,y=si(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),A=Vt(e.placement),w=ni(e.placement),E=!w,N=Jc(A),F=xb(N),j=e.modifiersData.popperOffsets,X=e.rects.reference,B=e.rects.popper,K=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,G=typeof K=="number"?{mainAxis:K,altAxis:K}:Object.assign({mainAxis:0,altAxis:0},K),le=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(j){if(r){var Z,be=N==="y"?Ye:Xe,We=N==="y"?ot:at,re=N==="y"?"height":"width",se=j[N],ue=se+y[be],xe=se-y[We],lt=p?-B[re]/2:0,Qe=w===ms?X[re]:B[re],De=w===ms?-B[re]:-X[re],At=e.elements.arrow,Et=p&&At?Xc(At):{width:0,height:0},C=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:E_(),L=C[be],x=C[We],H=Ki(0,X[re],Et[re]),oe=E?X[re]/2-lt-H-L-G.mainAxis:Qe-H-L-G.mainAxis,Ce=E?-X[re]/2+lt+H+x+G.mainAxis:De+H+x+G.mainAxis,J=e.elements.arrow&&Nr(e.elements.arrow),f=J?N==="y"?J.clientTop||0:J.clientLeft||0:0,_=(Z=le==null?void 0:le[N])!=null?Z:0,v=se+oe-_-f,b=se+Ce-_,T=Ki(p?Ro(ue,v):ue,se,p?fs(xe,b):xe);j[N]=T,M[N]=T-se}if(a){var k,$=N==="x"?Ye:Xe,R=N==="x"?ot:at,D=j[F],I=F==="y"?"height":"width",V=D+y[$],U=D-y[R],W=[Ye,Xe].indexOf(A)!==-1,q=(k=le==null?void 0:le[F])!=null?k:0,ne=W?V:D-X[I]-B[I]-q+G.altAxis,_e=W?D+X[I]+B[I]-q-G.altAxis:U,pe=p&&W?db(ne,D,_e):Ki(p?ne:V,D,p?_e:U);j[F]=pe,M[F]=pe-D}e.modifiersData[s]=M}}const R_={name:"preventOverflow",enabled:!0,phase:"main",fn:Lb,requiresIfExists:["offset"]};function Mb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function $b(t){return t===mt(t)||!pt(t)?tu(t):Mb(t)}function Bb(t){var e=t.getBoundingClientRect(),n=ei(e.width)/t.offsetWidth||1,s=ei(e.height)/t.offsetHeight||1;return n!==1||s!==1}function Fb(t,e,n){n===void 0&&(n=!1);var s=pt(e),i=pt(e)&&Bb(e),r=Qn(e),o=ti(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((qt(e)!=="body"||su(r))&&(a=$b(e)),pt(e)?(l=ti(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=nu(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Ub(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function Hb(t){var e=Ub(t);return m_.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function Wb(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Vb(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var td={placement:"bottom",modifiers:[],strategy:"absolute"};function nd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Aa(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?td:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},td,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(A){var w=typeof A=="function"?A(u.options):A;m(),u.options=Object.assign({},r,u.options,w),u.scrollParents={reference:vs(a)?zi(a):a.contextElement?zi(a.contextElement):[],popper:zi(l)};var E=Hb(Vb([].concat(s,u.options.modifiers)));return u.orderedModifiers=E.filter(function(N){return N.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var A=u.elements,w=A.reference,E=A.popper;if(nd(w,E)){u.rects={reference:Fb(w,Nr(E),u.options.strategy==="fixed"),popper:Xc(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(G){return u.modifiersData[G.name]=Object.assign({},G.data)});for(var N=0;N<u.orderedModifiers.length;N++){if(u.reset===!0){u.reset=!1,N=-1;continue}var F=u.orderedModifiers[N],j=F.fn,X=F.options,B=X===void 0?{}:X,K=F.name;typeof j=="function"&&(u=j({state:u,options:B,name:K,instance:p})||u)}}}},update:Wb(function(){return new Promise(function(y){p.forceUpdate(),y(u)})}),destroy:function(){m(),d=!0}};if(!nd(a,l))return p;p.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function g(){u.orderedModifiers.forEach(function(y){var A=y.name,w=y.options,E=w===void 0?{}:w,N=y.effect;if(typeof N=="function"){var F=N({state:u,name:A,instance:p,options:E}),j=function(){};h.push(F||j)}})}function m(){h.forEach(function(y){return y()}),h=[]}return p}}var jb=Aa(),Gb=[eu,iu,Zc,Yc],Qb=Aa({defaultModifiers:Gb}),Kb=[eu,iu,Zc,Yc,N_,I_,R_,C_,S_],ru=Aa({defaultModifiers:Kb});const O_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:f_,afterRead:u_,afterWrite:g_,applyStyles:Yc,arrow:C_,auto:ma,basePlacements:mi,beforeMain:h_,beforeRead:l_,beforeWrite:p_,bottom:ot,clippingParents:o_,computeStyles:Zc,createPopper:ru,createPopperBase:jb,createPopperLite:Qb,detectOverflow:si,end:Zs,eventListeners:eu,flip:I_,hide:S_,left:Xe,main:d_,modifierPhases:m_,offset:N_,placements:zc,popper:Ls,popperGenerator:Aa,popperOffsets:iu,preventOverflow:R_,read:c_,reference:a_,right:at,start:ms,top:Ye,variationPlacements:Gl,viewport:Kc,write:__},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const zb=1e6,qb=1e3,zl="transitionend",Yb=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),Xb=t=>{do t+=Math.floor(Math.random()*zb);while(document.getElementById(t));return t},k_=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},D_=t=>{const e=k_(t);return e&&document.querySelector(e)?e:null},sn=t=>{const e=k_(t);return e?document.querySelector(e):null},Jb=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*qb)},P_=t=>{t.dispatchEvent(new Event(zl))},rn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Fn=t=>rn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,vi=t=>{if(!rn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Un=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",x_=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?x_(t.parentNode):null},Oo=()=>{},Rr=t=>{t.offsetHeight},L_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ja=[],Zb=t=>{document.readyState==="loading"?(Ja.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Ja)e()}),Ja.push(t)):t()},gt=()=>document.documentElement.dir==="rtl",vt=t=>{Zb(()=>{const e=L_();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Zt=t=>{typeof t=="function"&&t()},M_=(t,e,n=!0)=>{if(!n){Zt(t);return}const s=5,i=Jb(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(zl,o),Zt(t))};e.addEventListener(zl,o),setTimeout(()=>{r||P_(e)},i)},ou=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},eC=/[^.]*(?=\..*)\.|.*/,tC=/\..*/,nC=/::\d+$/,Za={};let sd=1;const $_={mouseenter:"mouseover",mouseleave:"mouseout"},sC=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function B_(t,e){return e&&`${e}::${sd++}`||t.uidEvent||sd++}function F_(t){const e=B_(t);return t.uidEvent=e,Za[e]=Za[e]||{},Za[e]}function iC(t,e){return function n(s){return au(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function rC(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return au(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function U_(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function H_(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=W_(t);return sC.has(r)||(r=t),[s,i,r]}function id(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=H_(e,n,s);e in $_&&(o=(g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)})(o));const l=F_(t),c=l[a]||(l[a]={}),u=U_(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=B_(o,e.replace(eC,"")),d=r?rC(t,n,o):iC(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function ql(t,e,n,s,i){const r=U_(e[n],s,i);r&&(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function oC(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];ql(t,e,n,o.callable,o.delegationSelector)}}function W_(t){return t=t.replace(tC,""),$_[t]||t}const S={on(t,e,n,s){id(t,e,n,s,!1)},one(t,e,n,s){id(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=H_(e,n,s),a=o!==e,l=F_(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;ql(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))oC(t,l,h,e.slice(1));for(const h of Object.keys(c)){const d=h.replace(nC,"");if(!a||e.includes(d)){const p=c[h];ql(t,l,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=L_(),i=W_(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=au(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function au(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const En=new Map,el={set(t,e,n){En.has(t)||En.set(t,new Map);const s=En.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return En.has(t)&&En.get(t).get(e)||null},remove(t,e){if(!En.has(t))return;const n=En.get(t);n.delete(e),n.size===0&&En.delete(t)}};function rd(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function tl(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const on={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${tl(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${tl(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=rd(t.dataset[s])}return e},getDataAttribute(t,e){return rd(t.getAttribute(`data-bs-${tl(e)}`))}};class Or{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=rn(n)?on.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...rn(n)?on.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=rn(r)?"element":Yb(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const aC="5.2.3";class Lt extends Or{constructor(e,n){super(),e=Fn(e),e&&(this._element=e,this._config=this._getConfig(n),el.set(this._element,this.constructor.DATA_KEY,this))}dispose(){el.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){M_(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return el.get(Fn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return aC}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Ea=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Un(this))return;const r=sn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},lC="alert",cC="bs.alert",V_=`.${cC}`,uC=`close${V_}`,hC=`closed${V_}`,dC="fade",fC="show";class ya extends Lt{static get NAME(){return lC}close(){if(S.trigger(this._element,uC).defaultPrevented)return;this._element.classList.remove(fC);const n=this._element.classList.contains(dC);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,hC),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=ya.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Ea(ya,"close");vt(ya);const pC="button",_C="bs.button",gC=`.${_C}`,mC=".data-api",vC="active",od='[data-bs-toggle="button"]',AC=`click${gC}${mC}`;class ba extends Lt{static get NAME(){return pC}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(vC))}static jQueryInterface(e){return this.each(function(){const n=ba.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,AC,od,t=>{t.preventDefault();const e=t.target.closest(od);ba.getOrCreateInstance(e).toggle()});vt(ba);const te={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Un(n)&&vi(n))}},EC="swipe",Ai=".bs.swipe",yC=`touchstart${Ai}`,bC=`touchmove${Ai}`,CC=`touchend${Ai}`,wC=`pointerdown${Ai}`,TC=`pointerup${Ai}`,IC="touch",SC="pen",NC="pointer-event",RC=40,OC={endCallback:null,leftCallback:null,rightCallback:null},kC={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ko extends Or{constructor(e,n){super(),this._element=e,!(!e||!ko.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return OC}static get DefaultType(){return kC}static get NAME(){return EC}dispose(){S.off(this._element,Ai)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Zt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=RC)return;const n=e/this._deltaX;this._deltaX=0,n&&Zt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,wC,e=>this._start(e)),S.on(this._element,TC,e=>this._end(e)),this._element.classList.add(NC)):(S.on(this._element,yC,e=>this._start(e)),S.on(this._element,bC,e=>this._move(e)),S.on(this._element,CC,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===SC||e.pointerType===IC)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const DC="carousel",PC="bs.carousel",Kn=`.${PC}`,j_=".data-api",xC="ArrowLeft",LC="ArrowRight",MC=500,xi="next",Os="prev",Ms="left",mo="right",$C=`slide${Kn}`,nl=`slid${Kn}`,BC=`keydown${Kn}`,FC=`mouseenter${Kn}`,UC=`mouseleave${Kn}`,HC=`dragstart${Kn}`,WC=`load${Kn}${j_}`,VC=`click${Kn}${j_}`,G_="carousel",Yr="active",jC="slide",GC="carousel-item-end",QC="carousel-item-start",KC="carousel-item-next",zC="carousel-item-prev",Q_=".active",K_=".carousel-item",qC=Q_+K_,YC=".carousel-item img",XC=".carousel-indicators",JC="[data-bs-slide], [data-bs-slide-to]",ZC='[data-bs-ride="carousel"]',ew={[xC]:mo,[LC]:Ms},tw={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},nw={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};let lu=class z_ extends Lt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(XC,this._element),this._addEventListeners(),this._config.ride===G_&&this.cycle()}static get Default(){return tw}static get DefaultType(){return nw}static get NAME(){return DC}next(){this._slide(xi)}nextWhenVisible(){!document.hidden&&vi(this._element)&&this.next()}prev(){this._slide(Os)}pause(){this._isSliding&&P_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,nl,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,nl,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?xi:Os;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,BC,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,FC,()=>this.pause()),S.on(this._element,UC,()=>this._maybeEnableCycle())),this._config.touch&&ko.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of te.find(YC,this._element))S.on(s,HC,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Ms)),rightCallback:()=>this._slide(this._directionToOrder(mo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),MC+this._config.interval))}};this._swipeHelper=new ko(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=ew[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=te.findOne(Q_,this._indicatorsElement);n.classList.remove(Yr),n.removeAttribute("aria-current");const s=te.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Yr),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===xi,r=n||ou(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a($C).defaultPrevented||!s||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?QC:GC,h=i?KC:zC;r.classList.add(h),Rr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Yr),s.classList.remove(Yr,h,u),this._isSliding=!1,a(nl)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(jC)}_getActive(){return te.findOne(qC,this._element)}_getItems(){return te.find(K_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return gt()?e===Ms?Os:xi:e===Ms?xi:Os}_orderToDirection(e){return gt()?e===Os?Ms:mo:e===Os?mo:Ms}static jQueryInterface(e){return this.each(function(){const n=z_.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}};S.on(document,VC,JC,function(t){const e=sn(this);if(!e||!e.classList.contains(G_))return;t.preventDefault();const n=lu.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(on.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,WC,()=>{const t=te.find(ZC);for(const e of t)lu.getOrCreateInstance(e)});vt(lu);const sw="collapse",iw="bs.collapse",kr=`.${iw}`,rw=".data-api",ow=`show${kr}`,aw=`shown${kr}`,lw=`hide${kr}`,cw=`hidden${kr}`,uw=`click${kr}${rw}`,sl="show",Fs="collapse",Xr="collapsing",hw="collapsed",dw=`:scope .${Fs} .${Fs}`,fw="collapse-horizontal",pw="width",_w="height",gw=".collapse.show, .collapse.collapsing",Yl='[data-bs-toggle="collapse"]',mw={parent:null,toggle:!0},vw={parent:"(null|element)",toggle:"boolean"};class ur extends Lt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=te.find(Yl);for(const i of s){const r=D_(i),o=te.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mw}static get DefaultType(){return vw}static get NAME(){return sw}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(gw).filter(a=>a!==this._element).map(a=>ur.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,ow).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Fs),this._element.classList.add(Xr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Xr),this._element.classList.add(Fs,sl),this._element.style[s]="",S.trigger(this._element,aw)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,lw).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Rr(this._element),this._element.classList.add(Xr),this._element.classList.remove(Fs,sl);for(const i of this._triggerArray){const r=sn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Xr),this._element.classList.add(Fs),S.trigger(this._element,cw)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(sl)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Fn(e.parent),e}_getDimension(){return this._element.classList.contains(fw)?pw:_w}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Yl);for(const n of e){const s=sn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=te.find(dw,this._config.parent);return te.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(hw,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=ur.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,uw,Yl,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=D_(this),n=te.find(e);for(const s of n)ur.getOrCreateInstance(s,{toggle:!1}).toggle()});vt(ur);const ad="dropdown",Aw="bs.dropdown",Is=`.${Aw}`,cu=".data-api",Ew="Escape",ld="Tab",yw="ArrowUp",cd="ArrowDown",bw=2,Cw=`hide${Is}`,ww=`hidden${Is}`,Tw=`show${Is}`,Iw=`shown${Is}`,q_=`click${Is}${cu}`,Y_=`keydown${Is}${cu}`,Sw=`keyup${Is}${cu}`,$s="show",Nw="dropup",Rw="dropend",Ow="dropstart",kw="dropup-center",Dw="dropdown-center",as='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Pw=`${as}.${$s}`,vo=".dropdown-menu",xw=".navbar",Lw=".navbar-nav",Mw=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",$w=gt()?"top-end":"top-start",Bw=gt()?"top-start":"top-end",Fw=gt()?"bottom-end":"bottom-start",Uw=gt()?"bottom-start":"bottom-end",Hw=gt()?"left-start":"right-start",Ww=gt()?"right-start":"left-start",Vw="top",jw="bottom",Gw={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Qw={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class jt extends Lt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,vo)[0]||te.prev(this._element,vo)[0]||te.findOne(vo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Gw}static get DefaultType(){return Qw}static get NAME(){return ad}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Un(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,Tw,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Lw))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",Oo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($s),this._element.classList.add($s),S.trigger(this._element,Iw,e)}}hide(){if(Un(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,Cw,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",Oo);this._popper&&this._popper.destroy(),this._menu.classList.remove($s),this._element.classList.remove($s),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,ww,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!rn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${ad.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof O_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:rn(this._config.reference)?e=Fn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=ru(e,this._menu,n)}_isShown(){return this._menu.classList.contains($s)}_getPlacement(){const e=this._parent;if(e.classList.contains(Rw))return Hw;if(e.classList.contains(Ow))return Ww;if(e.classList.contains(kw))return Vw;if(e.classList.contains(Dw))return jw;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Nw)?n?Bw:$w:n?Uw:Fw}_detectNavbar(){return this._element.closest(xw)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=te.find(Mw,this._menu).filter(i=>vi(i));s.length&&ou(s,n,e===cd,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=jt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===bw||e.type==="keyup"&&e.key!==ld)return;const n=te.find(Pw);for(const s of n){const i=jt.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===ld||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===Ew,i=[yw,cd].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(as)?this:te.prev(this,as)[0]||te.next(this,as)[0]||te.findOne(as,e.delegateTarget.parentNode),o=jt.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,Y_,as,jt.dataApiKeydownHandler);S.on(document,Y_,vo,jt.dataApiKeydownHandler);S.on(document,q_,jt.clearMenus);S.on(document,Sw,jt.clearMenus);S.on(document,q_,as,function(t){t.preventDefault(),jt.getOrCreateInstance(this).toggle()});vt(jt);const ud=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hd=".sticky-top",Jr="padding-right",dd="margin-right";class Xl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Jr,n=>n+e),this._setElementAttributes(ud,Jr,n=>n+e),this._setElementAttributes(hd,dd,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Jr),this._resetElementAttributes(ud,Jr),this._resetElementAttributes(hd,dd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&on.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=on.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}on.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(rn(e)){n(e);return}for(const s of te.find(e,this._element))n(s)}}const X_="backdrop",Kw="fade",fd="show",pd=`mousedown.bs.${X_}`,zw={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},qw={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class J_ extends Or{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return zw}static get DefaultType(){return qw}static get NAME(){return X_}show(e){if(!this._config.isVisible){Zt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Rr(n),n.classList.add(fd),this._emulateAnimation(()=>{Zt(e)})}hide(e){if(!this._config.isVisible){Zt(e);return}this._getElement().classList.remove(fd),this._emulateAnimation(()=>{this.dispose(),Zt(e)})}dispose(){this._isAppended&&(S.off(this._element,pd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Kw),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Fn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,pd,()=>{Zt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){M_(e,this._getElement(),this._config.isAnimated)}}const Yw="focustrap",Xw="bs.focustrap",Do=`.${Xw}`,Jw=`focusin${Do}`,Zw=`keydown.tab${Do}`,eT="Tab",tT="forward",_d="backward",nT={autofocus:!0,trapElement:null},sT={autofocus:"boolean",trapElement:"element"};class Z_ extends Or{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return nT}static get DefaultType(){return sT}static get NAME(){return Yw}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Do),S.on(document,Jw,e=>this._handleFocusin(e)),S.on(document,Zw,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Do))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=te.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===_d?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===eT&&(this._lastTabNavDirection=e.shiftKey?_d:tT)}}const iT="modal",rT="bs.modal",Mt=`.${rT}`,oT=".data-api",aT="Escape",lT=`hide${Mt}`,cT=`hidePrevented${Mt}`,eg=`hidden${Mt}`,tg=`show${Mt}`,uT=`shown${Mt}`,hT=`resize${Mt}`,dT=`click.dismiss${Mt}`,fT=`mousedown.dismiss${Mt}`,pT=`keydown.dismiss${Mt}`,_T=`click${Mt}${oT}`,gd="modal-open",gT="fade",md="show",il="modal-static",mT=".modal.show",vT=".modal-dialog",AT=".modal-body",ET='[data-bs-toggle="modal"]',yT={backdrop:!0,focus:!0,keyboard:!0},bT={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ii extends Lt{constructor(e,n){super(e,n),this._dialog=te.findOne(vT,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xl,this._addEventListeners()}static get Default(){return yT}static get DefaultType(){return bT}static get NAME(){return iT}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,tg,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(gd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,lT).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(md),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,Mt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new J_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Z_({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=te.findOne(AT,this._dialog);n&&(n.scrollTop=0),Rr(this._element),this._element.classList.add(md);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,uT,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,pT,e=>{if(e.key===aT){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,hT,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,fT,e=>{S.one(this._element,dT,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(gd),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,eg)})}_isAnimated(){return this._element.classList.contains(gT)}_triggerBackdropTransition(){if(S.trigger(this._element,cT).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(il)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(il),this._queueCallback(()=>{this._element.classList.remove(il),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=gt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=gt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=ii.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,_T,ET,function(t){const e=sn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,tg,i=>{i.defaultPrevented||S.one(e,eg,()=>{vi(this)&&this.focus()})});const n=te.findOne(mT);n&&ii.getInstance(n).hide(),ii.getOrCreateInstance(e).toggle(this)});Ea(ii);vt(ii);const CT="offcanvas",wT="bs.offcanvas",fn=`.${wT}`,ng=".data-api",TT=`load${fn}${ng}`,IT="Escape",vd="show",Ad="showing",Ed="hiding",ST="offcanvas-backdrop",sg=".offcanvas.show",NT=`show${fn}`,RT=`shown${fn}`,OT=`hide${fn}`,yd=`hidePrevented${fn}`,ig=`hidden${fn}`,kT=`resize${fn}`,DT=`click${fn}${ng}`,PT=`keydown.dismiss${fn}`,xT='[data-bs-toggle="offcanvas"]',LT={backdrop:!0,keyboard:!0,scroll:!1},MT={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Hn extends Lt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return LT}static get DefaultType(){return MT}static get NAME(){return CT}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,NT,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Xl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ad);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(vd),this._element.classList.remove(Ad),S.trigger(this._element,RT,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,OT).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ed),this._backdrop.hide();const n=()=>{this._element.classList.remove(vd,Ed),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Xl().reset(),S.trigger(this._element,ig)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,yd);return}this.hide()},n=Boolean(this._config.backdrop);return new J_({className:ST,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Z_({trapElement:this._element})}_addEventListeners(){S.on(this._element,PT,e=>{if(e.key===IT){if(!this._config.keyboard){S.trigger(this._element,yd);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Hn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,DT,xT,function(t){const e=sn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Un(this))return;S.one(e,ig,()=>{vi(this)&&this.focus()});const n=te.findOne(sg);n&&n!==e&&Hn.getInstance(n).hide(),Hn.getOrCreateInstance(e).toggle(this)});S.on(window,TT,()=>{for(const t of te.find(sg))Hn.getOrCreateInstance(t).show()});S.on(window,kT,()=>{for(const t of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Hn.getOrCreateInstance(t).hide()});Ea(Hn);vt(Hn);const $T=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),BT=/^aria-[\w-]*$/i,FT=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,UT=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,HT=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?$T.has(n)?Boolean(FT.test(t.nodeValue)||UT.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},rg={"*":["class","dir","id","lang","role",BT],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function WT(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)HT(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const VT="TemplateFactory",jT={allowList:rg,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},GT={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},QT={entry:"(string|element|function|null)",selector:"(string|element)"};class KT extends Or{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return jT}static get DefaultType(){return GT}static get NAME(){return VT}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},QT)}_setContent(e,n,s){const i=te.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(rn(n)){this._putElementInTemplate(Fn(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?WT(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const zT="tooltip",qT=new Set(["sanitize","allowList","sanitizeFn"]),rl="fade",YT="modal",Zr="show",XT=".tooltip-inner",bd=`.${YT}`,Cd="hide.bs.modal",Li="hover",ol="focus",JT="click",ZT="manual",eI="hide",tI="hidden",nI="show",sI="shown",iI="inserted",rI="click",oI="focusin",aI="focusout",lI="mouseenter",cI="mouseleave",uI={AUTO:"auto",TOP:"top",RIGHT:gt()?"left":"right",BOTTOM:"bottom",LEFT:gt()?"right":"left"},hI={allowList:rg,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},dI={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ei extends Lt{constructor(e,n){if(typeof O_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hI}static get DefaultType(){return dI}static get NAME(){return zT}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(bd),Cd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(nI)),s=(x_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(iI))),this._popper=this._createPopper(i),i.classList.add(Zr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",Oo);const o=()=>{S.trigger(this._element,this.constructor.eventName(sI)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(eI)).defaultPrevented)return;if(this._getTipElement().classList.remove(Zr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",Oo);this._activeTrigger[JT]=!1,this._activeTrigger[ol]=!1,this._activeTrigger[Li]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(tI)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(rl,Zr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Xb(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(rl),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new KT({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[XT]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(rl)}_isShown(){return this.tip&&this.tip.classList.contains(Zr)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=uI[n.toUpperCase()];return ru(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(rI),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==ZT){const s=n===Li?this.constructor.eventName(lI):this.constructor.eventName(oI),i=n===Li?this.constructor.eventName(cI):this.constructor.eventName(aI);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?ol:Li]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?ol:Li]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(bd),Cd,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=on.getDataAttributes(this._element);for(const s of Object.keys(n))qT.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Fn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Ei.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}vt(Ei);const fI="popover",pI=".popover-header",_I=".popover-body",gI={...Ei.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},mI={...Ei.DefaultType,content:"(null|string|element|function)"};class uu extends Ei{static get Default(){return gI}static get DefaultType(){return mI}static get NAME(){return fI}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[pI]:this._getTitle(),[_I]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=uu.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}vt(uu);const vI="scrollspy",AI="bs.scrollspy",hu=`.${AI}`,EI=".data-api",yI=`activate${hu}`,wd=`click${hu}`,bI=`load${hu}${EI}`,CI="dropdown-item",ks="active",wI='[data-bs-spy="scroll"]',al="[href]",TI=".nav, .list-group",Td=".nav-link",II=".nav-item",SI=".list-group-item",NI=`${Td}, ${II} > ${Td}, ${SI}`,RI=".dropdown",OI=".dropdown-toggle",kI={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},DI={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ca extends Lt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return kI}static get DefaultType(){return DI}static get NAME(){return vI}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Fn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,wd),S.on(this._config.target,wd,al,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=te.find(al,this._config.target);for(const n of e){if(!n.hash||Un(n))continue;const s=te.findOne(n.hash,this._element);vi(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(ks),this._activateParents(e),S.trigger(this._element,yI,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(CI)){te.findOne(OI,e.closest(RI)).classList.add(ks);return}for(const n of te.parents(e,TI))for(const s of te.prev(n,NI))s.classList.add(ks)}_clearActiveClass(e){e.classList.remove(ks);const n=te.find(`${al}.${ks}`,e);for(const s of n)s.classList.remove(ks)}static jQueryInterface(e){return this.each(function(){const n=Ca.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,bI,()=>{for(const t of te.find(wI))Ca.getOrCreateInstance(t)});vt(Ca);const PI="tab",xI="bs.tab",Ss=`.${xI}`,LI=`hide${Ss}`,MI=`hidden${Ss}`,$I=`show${Ss}`,BI=`shown${Ss}`,FI=`click${Ss}`,UI=`keydown${Ss}`,HI=`load${Ss}`,WI="ArrowLeft",Id="ArrowRight",VI="ArrowUp",Sd="ArrowDown",ls="active",Nd="fade",ll="show",jI="dropdown",GI=".dropdown-toggle",QI=".dropdown-menu",cl=":not(.dropdown-toggle)",KI='.list-group, .nav, [role="tablist"]',zI=".nav-item, .list-group-item",qI=`.nav-link${cl}, .list-group-item${cl}, [role="tab"]${cl}`,og='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ul=`${qI}, ${og}`,YI=`.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`;class ri extends Lt{constructor(e){super(e),this._parent=this._element.closest(KI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,UI,n=>this._keydown(n)))}static get NAME(){return PI}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,LI,{relatedTarget:e}):null;S.trigger(e,$I,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ls),this._activate(sn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ll);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,BI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Nd))}_deactivate(e,n){if(!e)return;e.classList.remove(ls),e.blur(),this._deactivate(sn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ll);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,MI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Nd))}_keydown(e){if(![WI,Id,VI,Sd].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[Id,Sd].includes(e.key),s=ou(this._getChildren().filter(i=>!Un(i)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),ri.getOrCreateInstance(s).show())}_getChildren(){return te.find(ul,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=sn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(jI))return;const i=(r,o)=>{const a=te.findOne(r,s);a&&a.classList.toggle(o,n)};i(GI,ls),i(QI,ll),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ls)}_getInnerElement(e){return e.matches(ul)?e:te.findOne(ul,e)}_getOuterElement(e){return e.closest(zI)||e}static jQueryInterface(e){return this.each(function(){const n=ri.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,FI,og,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Un(this)&&ri.getOrCreateInstance(this).show()});S.on(window,HI,()=>{for(const t of te.find(YI))ri.getOrCreateInstance(t)});vt(ri);const XI="toast",JI="bs.toast",zn=`.${JI}`,ZI=`mouseover${zn}`,eS=`mouseout${zn}`,tS=`focusin${zn}`,nS=`focusout${zn}`,sS=`hide${zn}`,iS=`hidden${zn}`,rS=`show${zn}`,oS=`shown${zn}`,aS="fade",Rd="hide",eo="show",to="showing",lS={animation:"boolean",autohide:"boolean",delay:"number"},cS={animation:!0,autohide:!0,delay:5e3};class wa extends Lt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cS}static get DefaultType(){return lS}static get NAME(){return XI}show(){if(S.trigger(this._element,rS).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(aS);const n=()=>{this._element.classList.remove(to),S.trigger(this._element,oS),this._maybeScheduleHide()};this._element.classList.remove(Rd),Rr(this._element),this._element.classList.add(eo,to),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,sS).defaultPrevented)return;const n=()=>{this._element.classList.add(Rd),this._element.classList.remove(to,eo),S.trigger(this._element,iS)};this._element.classList.add(to),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(eo),super.dispose()}isShown(){return this._element.classList.contains(eo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,ZI,e=>this._onInteraction(e,!0)),S.on(this._element,eS,e=>this._onInteraction(e,!1)),S.on(this._element,tS,e=>this._onInteraction(e,!0)),S.on(this._element,nS,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=wa.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Ea(wa);vt(wa);/**
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
 */const ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw yi(e)},yi=function(t){return new Error("Firebase Database ("+ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const lg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new hS;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cg=function(t){const e=lg(t);return du.encodeByteArray(e,!0)},Po=function(t){return cg(t).replace(/\./g,"")},xo=function(t){try{return du.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dS(t){return ug(void 0,t)}function ug(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fS(n)||(t[n]=ug(t[n],e[n]));return t}function fS(t){return t!=="__proto__"}/**
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
 */function pS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _S=()=>pS().__FIREBASE_DEFAULTS__,gS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xo(t[1]);return e&&JSON.parse(e)},Ta=()=>{try{return _S()||gS()||mS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hg=t=>{var e,n;return(n=(e=Ta())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dg=t=>{const e=hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vS=()=>{var t;return(t=Ta())===null||t===void 0?void 0:t.config},fg=t=>{var e;return(e=Ta())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ia{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),a].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function AS(){var t;const e=(t=Ta())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ES(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gg(){return ag.NODE_ADMIN===!0}function bS(){try{return typeof indexedDB=="object"}catch{return!1}}function CS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const wS="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wS,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?TS(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function TS(t,e){return t.replace(IS,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const IS=/\{\$([^}]+)}/g;/**
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
 */function hr(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
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
 */const mg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hr(xo(r[0])||""),n=hr(xo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},SS=function(t){const e=mg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NS=function(t){const e=mg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Mo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Od(r)&&Od(o)){if(!Mo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Od(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class RS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function OS(t,e){const n=new kS(t,e);return n.subscribe.bind(n)}class kS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");DS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=hl),i.error===void 0&&(i.error=hl),i.complete===void 0&&(i.complete=hl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}function pu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const PS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Bs=typeof window<"u";function xS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function dl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pt(i)?i.map(t):t(i)}return n}const qi=()=>{},Pt=Array.isArray,LS=/\/$/,MS=t=>t.replace(LS,"");function fl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=US(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $S(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ai(e.matched[s],n.matched[i])&&vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FS(t[n],e[n]))return!1;return!0}function FS(t,e){return Pt(t)?Dd(t,e):Pt(e)?Dd(e,t):t===e}function Dd(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function US(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function HS(t){if(!t)if(Bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MS(t)}const WS=/^[^#]+#/;function VS(t,e){return t.replace(WS,"#")+e}function jS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Na=()=>({left:window.pageXOffset,top:window.pageYOffset});function GS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=jS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pd(t,e){return(history.state?history.state.position-e:-1)+t}const Zl=new Map;function QS(t,e){Zl.set(t,e)}function KS(t){const e=Zl.get(t);return Zl.delete(t),e}let zS=()=>location.protocol+"//"+location.host;function Ag(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),kd(l,"")}return kd(n,t)+s+i}function qS(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Ag(t,location),g=n.value,m=e.value;let y=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}y=m?d.position-m.position:0}else s(p);i.forEach(A=>{A(n.value,g,{delta:y,type:dr.pop,direction:y?y>0?Yi.forward:Yi.back:Yi.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Na()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function xd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Na():null}}function YS(t){const{history:e,location:n}=window,s={value:Ag(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:zS()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ge({},e.state,xd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ge({},i.value,e.state,{forward:l,scroll:Na()});r(u.current,u,!0);const h=ge({},xd(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function XS(t){t=HS(t);const e=YS(t),n=qS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ge({location:"",base:t,go:s,createHref:VS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function JS(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yg=Symbol("");var Ld;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ld||(Ld={}));function li(t,e){return ge(new Error,{type:t,[yg]:!0},e)}function Xt(t,e){return t instanceof Error&&yg in t&&(e==null||!!(t.type&e))}const Md="[^/]+?",ZS={sensitive:!1,strict:!1,start:!0,end:!0},eN=/[.+*?^${}()[\]/\\]/g;function tN(t,e){const n=ge({},ZS,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(eN,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:y,regexp:A}=d;r.push({name:g,repeatable:m,optional:y});const w=A||Md;if(w!==Md){p+=10;try{new RegExp(`(${w})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+N.message)}}let E=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,p+=20,y&&(p+=-8),m&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:y}=p,A=g in c?c[g]:"";if(Pt(A)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Pt(A)?A.join("/"):A;if(!w)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function nN(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sN(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=nN(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if($d(s))return 1;if($d(i))return-1}return i.length-s.length}function $d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iN={type:0,value:""},rN=/[a-zA-Z0-9_]/;function oN(t){if(!t)return[[]];if(t==="/")return[[iN]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:rN.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function aN(t,e,n){const s=tN(oN(t.path),n),i=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function lN(t,e){const n=[],s=new Map;e=Ud({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,g=cN(u);g.aliasOf=d&&d.record;const m=Ud(e,u),y=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of E)y.push(ge({},g,{components:d?d.record.components:g.components,path:N,aliasOf:d?d.record:g}))}let A,w;for(const E of y){const{path:N}=E;if(h&&N[0]!=="/"){const F=h.record.path,j=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(N&&j+N)}if(A=aN(E,h,m),d?d.alias.push(A):(w=w||A,w!==A&&w.alias.push(A),p&&u.name&&!Fd(A)&&o(u.name)),g.children){const F=g.children;for(let j=0;j<F.length;j++)r(F[j],A,d&&d.children[j])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return w?()=>{o(w)}:qi}function o(u){if(Eg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&sN(u,n[h])>=0&&(u.record.path!==n[h].record.path||!bg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Fd(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw li(1,{location:u});m=d.record.name,p=ge(Bd(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Bd(u.params,d.keys.map(w=>w.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(w=>w.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw li(1,{location:u,currentLocation:h});m=d.record.name,p=ge({},h.params,u.params),g=d.stringify(p)}const y=[];let A=d;for(;A;)y.unshift(A.record),A=A.parent;return{name:m,path:g,params:p,matched:y,meta:hN(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Bd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Fd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hN(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Ud(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function bg(t,e){return e.children.some(n=>n===t||bg(t,n))}const Cg=/#/g,dN=/&/g,fN=/\//g,pN=/=/g,_N=/\?/g,wg=/\+/g,gN=/%5B/g,mN=/%5D/g,Tg=/%5E/g,vN=/%60/g,Ig=/%7B/g,AN=/%7C/g,Sg=/%7D/g,EN=/%20/g;function _u(t){return encodeURI(""+t).replace(AN,"|").replace(gN,"[").replace(mN,"]")}function yN(t){return _u(t).replace(Ig,"{").replace(Sg,"}").replace(Tg,"^")}function ec(t){return _u(t).replace(wg,"%2B").replace(EN,"+").replace(Cg,"%23").replace(dN,"%26").replace(vN,"`").replace(Ig,"{").replace(Sg,"}").replace(Tg,"^")}function bN(t){return ec(t).replace(pN,"%3D")}function CN(t){return _u(t).replace(Cg,"%23").replace(_N,"%3F")}function wN(t){return t==null?"":CN(t).replace(fN,"%2F")}function $o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(wg," "),o=r.indexOf("="),a=$o(o<0?r:r.slice(0,o)),l=o<0?null:$o(r.slice(o+1));if(a in e){let c=e[a];Pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Hd(t){let e="";for(let n in t){const s=t[n];if(n=bN(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(r=>r&&ec(r)):[s&&ec(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function IN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Ng=Symbol(""),Wd=Symbol(""),gu=Symbol(""),Rg=Symbol(""),tc=Symbol("");function Mi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function SN(t,e,n){const s=()=>{t[e].delete(n)};Bc(s),Hp(s),Up(()=>{t[e].add(n)}),t[e].add(n)}function mM(t){const e=Wt(Ng,{}).value;e&&SN(e,"leaveGuards",t)}function wn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(li(4,{from:n,to:e})):h instanceof Error?a(h):JS(h)?a(li(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function pl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(NN(a)){const c=(a.__vccOpts||a)[e];c&&i.push(wn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=xS(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&wn(d,n,s,r,o)()}))}}return i}function NN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vd(t){const e=Wt(gu),n=Wt(Rg),s=dt(()=>e.resolve(ut(t.to))),i=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ai.bind(null,u));if(d>-1)return d;const p=jd(l[c-2]);return c>1&&jd(u)===p&&h[h.length-1].path!==p?h.findIndex(ai.bind(null,l[c-2])):d}),r=dt(()=>i.value>-1&&DN(n.params,s.value.params)),o=dt(()=>i.value>-1&&i.value===n.matched.length-1&&vg(n.params,s.value.params));function a(l={}){return kN(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(qi):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const RN=Fp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vd,setup(t,{slots:e}){const n=Ir(Vd(t)),{options:s}=Wt(gu),i=dt(()=>({[Gd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Gd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ON=RN;function kN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function jd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gd=(t,e,n)=>t??e??n,PN=Fp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Wt(tc),i=dt(()=>t.route||s.value),r=Wt(Wd,0),o=dt(()=>{let c=ut(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>i.value.matched[o.value]);co(Wd,dt(()=>o.value+1)),co(Ng,a),co(tc,i);const l=Ct();return uo(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ai(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Qd(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,y=Gc(d,ge({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Qd(n.default,{Component:y,route:c})||y}}});function Qd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xN=PN;function LN(t){const e=lN(t.routes,t),n=t.parseQuery||TN,s=t.stringifyQuery||Hd,i=t.history,r=Mi(),o=Mi(),a=Mi(),l=VA(yn);let c=yn;Bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dl.bind(null,C=>""+C),h=dl.bind(null,wN),d=dl.bind(null,$o);function p(C,L){let x,H;return Eg(C)?(x=e.getRecordMatcher(C),H=L):H=C,e.addRoute(H,x)}function g(C){const L=e.getRecordMatcher(C);L&&e.removeRoute(L)}function m(){return e.getRoutes().map(C=>C.record)}function y(C){return!!e.getRecordMatcher(C)}function A(C,L){if(L=ge({},L||l.value),typeof C=="string"){const f=fl(n,C,L.path),_=e.resolve({path:f.path},L),v=i.createHref(f.fullPath);return ge(f,_,{params:d(_.params),hash:$o(f.hash),redirectedFrom:void 0,href:v})}let x;if("path"in C)x=ge({},C,{path:fl(n,C.path,L.path).path});else{const f=ge({},C.params);for(const _ in f)f[_]==null&&delete f[_];x=ge({},C,{params:h(C.params)}),L.params=h(L.params)}const H=e.resolve(x,L),oe=C.hash||"";H.params=u(d(H.params));const Ce=$S(s,ge({},C,{hash:yN(oe),path:H.path})),J=i.createHref(Ce);return ge({fullPath:Ce,hash:oe,query:s===Hd?IN(C.query):C.query||{}},H,{redirectedFrom:void 0,href:J})}function w(C){return typeof C=="string"?fl(n,C,l.value.path):ge({},C)}function E(C,L){if(c!==C)return li(8,{from:L,to:C})}function N(C){return X(C)}function F(C){return N(ge(w(C),{replace:!0}))}function j(C){const L=C.matched[C.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let H=typeof x=="function"?x(C):x;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=w(H):{path:H},H.params={}),ge({query:C.query,hash:C.hash,params:"path"in H?{}:C.params},H)}}function X(C,L){const x=c=A(C),H=l.value,oe=C.state,Ce=C.force,J=C.replace===!0,f=j(x);if(f)return X(ge(w(f),{state:typeof f=="object"?ge({},oe,f.state):oe,force:Ce,replace:J}),L||x);const _=x;_.redirectedFrom=L;let v;return!Ce&&BS(s,H,x)&&(v=li(16,{to:_,from:H}),lt(H,H,!0,!1)),(v?Promise.resolve(v):K(_,H)).catch(b=>Xt(b)?Xt(b,2)?b:xe(b):se(b,_,H)).then(b=>{if(b){if(Xt(b,2))return X(ge({replace:J},w(b.to),{state:typeof b.to=="object"?ge({},oe,b.to.state):oe,force:Ce}),L||_)}else b=le(_,H,!0,J,oe);return G(_,H,b),b})}function B(C,L){const x=E(C,L);return x?Promise.reject(x):Promise.resolve()}function K(C,L){let x;const[H,oe,Ce]=MN(C,L);x=pl(H.reverse(),"beforeRouteLeave",C,L);for(const f of H)f.leaveGuards.forEach(_=>{x.push(wn(_,C,L))});const J=B.bind(null,C,L);return x.push(J),Ds(x).then(()=>{x=[];for(const f of r.list())x.push(wn(f,C,L));return x.push(J),Ds(x)}).then(()=>{x=pl(oe,"beforeRouteUpdate",C,L);for(const f of oe)f.updateGuards.forEach(_=>{x.push(wn(_,C,L))});return x.push(J),Ds(x)}).then(()=>{x=[];for(const f of C.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Pt(f.beforeEnter))for(const _ of f.beforeEnter)x.push(wn(_,C,L));else x.push(wn(f.beforeEnter,C,L));return x.push(J),Ds(x)}).then(()=>(C.matched.forEach(f=>f.enterCallbacks={}),x=pl(Ce,"beforeRouteEnter",C,L),x.push(J),Ds(x))).then(()=>{x=[];for(const f of o.list())x.push(wn(f,C,L));return x.push(J),Ds(x)}).catch(f=>Xt(f,8)?f:Promise.reject(f))}function G(C,L,x){for(const H of a.list())H(C,L,x)}function le(C,L,x,H,oe){const Ce=E(C,L);if(Ce)return Ce;const J=L===yn,f=Bs?history.state:{};x&&(H||J?i.replace(C.fullPath,ge({scroll:J&&f&&f.scroll},oe)):i.push(C.fullPath,oe)),l.value=C,lt(C,L,x,J),xe()}let M;function Z(){M||(M=i.listen((C,L,x)=>{if(!Et.listening)return;const H=A(C),oe=j(H);if(oe){X(ge(oe,{replace:!0}),H).catch(qi);return}c=H;const Ce=l.value;Bs&&QS(Pd(Ce.fullPath,x.delta),Na()),K(H,Ce).catch(J=>Xt(J,12)?J:Xt(J,2)?(X(J.to,H).then(f=>{Xt(f,20)&&!x.delta&&x.type===dr.pop&&i.go(-1,!1)}).catch(qi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),se(J,H,Ce))).then(J=>{J=J||le(H,Ce,!1),J&&(x.delta&&!Xt(J,8)?i.go(-x.delta,!1):x.type===dr.pop&&Xt(J,20)&&i.go(-1,!1)),G(H,Ce,J)}).catch(qi)}))}let be=Mi(),We=Mi(),re;function se(C,L,x){xe(C);const H=We.list();return H.length?H.forEach(oe=>oe(C,L,x)):console.error(C),Promise.reject(C)}function ue(){return re&&l.value!==yn?Promise.resolve():new Promise((C,L)=>{be.add([C,L])})}function xe(C){return re||(re=!C,Z(),be.list().forEach(([L,x])=>C?x(C):L()),be.reset()),C}function lt(C,L,x,H){const{scrollBehavior:oe}=t;if(!Bs||!oe)return Promise.resolve();const Ce=!x&&KS(Pd(C.fullPath,0))||(H||!x)&&history.state&&history.state.scroll||null;return Lc().then(()=>oe(C,L,Ce)).then(J=>J&&GS(J)).catch(J=>se(J,C,L))}const Qe=C=>i.go(C);let De;const At=new Set,Et={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:y,getRoutes:m,resolve:A,options:t,push:N,replace:F,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:ue,install(C){const L=this;C.component("RouterLink",ON),C.component("RouterView",xN),C.config.globalProperties.$router=L,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Bs&&!De&&l.value===yn&&(De=!0,N(i.location).catch(oe=>{}));const x={};for(const oe in yn)x[oe]=dt(()=>l.value[oe]);C.provide(gu,L),C.provide(Rg,Ir(x)),C.provide(tc,l);const H=C.unmount;At.add(C),C.unmount=function(){At.delete(C),At.size<1&&(c=yn,M&&M(),M=null,l.value=yn,De=!1,re=!1),H()}}};return Et}function Ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function MN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ai(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ai(c,l))||i.push(l))}return[n,s,i]}const $N="modulepreload",BN=function(t){return"/MyPortfolio/"+t},Kd={},Ps=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=BN(r),r in Kd)return;Kd[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":$N,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const FN="/MyPortfolio/assets/TravelMaker_Cover-462d72d7.png",UN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAGkCAYAAAAYDBLWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsOSURBVHgB7d09j5VpGcDxG0Mp8wFkKxIiZzsTF7YzarY04my5L7DturIdmaAl4EQqQTZ2vkRLxkks2dXY7YCJHfABGD/AwR55MGZjVrLzL+bAM+f3SyYzxZNTTPU/V67nvo+dOr14OgAAgAP52gAAAA5MQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAILjA2CNvXnu7Lj00YdjsTgzNjY2xmF7vL8/9vbuj5u3bj//G4D5OXbq9OLpAFhDH//kx+PSs5+X5eq17fGb3/1+ADAvVjiAtfSy43nys59uPZ+AAzAvJtDA2nnt5Mnxt7/eHa+CaY3jO999awAwHybQwNo5d+6N8aqYYt4UGmBeBDSwdl5fnBmvkpMnvzEAmA8BDaydjROHf9oGAEeXgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIXKQCHAkbJ06MN988O976/vfG2bNnx8bGiWc/8z9tY7lcjsf7/xwPHz4aO3/aHZ/v3RsAvFwCGpi9Dy689/xa7qMQzF9lurnw5q3b487O7gDg5RDQwGxNt/j9YvvaOLeGN/lNAX312s/H8smTAcBqCWhglqZ4/uMffvv897p68PDReOfdCyIaYMW8RAjMjnj+j+lK8l9/cmsAsFoCGpidad953eP5v6b1lY+f/T8AWB0BDczKFIxvb54ffOHihfefn0ICwGoIaGBWphM3+F/TkX0fXHx/ALAaXiIEZmMKxX/8fW/wZcvlk/Gtb58bABw+E2hgNtbxuLqDmr5c2AsHWA0BDczG62fODF5ssVgMAA6fgAZmY5qy8mIbG18fABw+O9DAbNzYvj42ncBxZF3euuKKcmAWTKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAguMDgCPh8taVcWdndwBwuEyggdl4vL8/eLHl8l8DgMMnoIHZePDo0eDF9vcfDwAOn4AGZmNv797g/3v8eH88eOgLBsAqCGhgNpbLJyL6Bfbu3R8ArIaABmbll7/6ZPBlN2/dHgCshoAGZmWaQH/66WeDL0zx7AVLgNU5dur04ukAmJGNjRPjz7s747XXTo51N+09/+CHmwOA1TGBBmZn2oV+572Lz1+cW2dTPL/z7oUBwGoJaGCWppWFdY7o6cKUKZ6XT54MAFbLCgcwe29v/mhc+ujDtVjpmL4wXL2+Pe7aAwd4aQQ0cGRMIX3u7Bvj9cU3x2KxGEfBcrkc+8+m7Z/v3R93P/uLY/wAXgECGgAAAjvQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAMG/AZesDFKdWOECAAAAAElFTkSuQmCC",HN="/MyPortfolio/assets/PersonalityQuiz_Cover-02ac9aa1.png";const Ci=t=>(la("data-v-a0ec966e"),t=t(),ca(),t),WN={class:"bg-black text-bg-dark m-0 container-fluid"},VN={class:"fill-height row mx-0 justify-content-center align-items-center"},jN={class:"banner col-lg-5 col-md-8 col-12 ps-0 pe-0"},GN={class:"row mx-0 mt-md-5 mt-lg-0"},QN=Ci(()=>P("div",{class:"col-12 text-center"},[P("p",{class:"display-2",id:"myname"},"Frank Chung")],-1)),KN={class:"col-12 text-center"},zN={class:"display-4",id:"jobs"},qN={class:"row mx-0 mt-4 mt-md-5 justify-content-center"},YN={class:"col-lg-5 col-12 mb-3 mt-md-5 mt-lg-0"},XN=Ci(()=>P("button",{class:"btn btn-outline-warning btn-lg cursorFix"}," More Frank ",-1)),JN={class:"col-lg-5 col-12 mb-3 d-grid"},ZN=Ci(()=>P("button",{class:"btn btn-outline-light btn-lg cursorFix"}," Resume ",-1)),e0={class:"carousel col-lg-4 col-md-8 col-12 mb-md-5 mb-lg-0"},t0={id:"carouselExampleFade",class:"carousel slide","data-bs-ride":"carousel"},n0={class:"carousel-inner"},s0={class:"carousel-item active"},i0=Ci(()=>P("div",{class:"card bg-light text-center"},[P("img",{src:FN,class:"card-img",alt:"..."}),P("div",{class:"card-img-overlay"},[P("h2",{class:"card-title"},"TravelMaker"),P("h4",{class:"card-text"},"幫助旅行者快速找到替代方案的旅遊軟體"),P("h6",{class:"card-text"},"Product Manager, UX Designer")])],-1)),r0={class:"carousel-item"},o0=Ci(()=>P("div",{class:"card bg-light text-center"},[P("img",{src:UN,class:"card-img",alt:"..."}),P("div",{class:"card-img-overlay"},[P("h2",{class:"card-title"},"影相設計"),P("h4",{class:"card-text"},"提供模組化影像製作方案的選購平台"),P("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1)),a0={class:"carousel-item"},l0=Ci(()=>P("div",{class:"card bg-light text-center"},[P("img",{src:HN,class:"card-img",alt:"..."}),P("div",{class:"card-img-overlay"},[P("h2",{class:"card-title"},"學習風格測驗"),P("h4",{class:"card-text"},"均一教育平台的心理測驗互動式網頁"),P("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1)),c0=Vc('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" data-v-a0ec966e><span class="carousel-control-prev-icon" aria-hidden="true" data-v-a0ec966e></span><span class="visually-hidden" data-v-a0ec966e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" data-v-a0ec966e><span class="carousel-control-next-icon" aria-hidden="true" data-v-a0ec966e></span><span class="visually-hidden" data-v-a0ec966e>Next</span></button>',2),u0={__name:"NewHome",setup(t){const e=Ct("Product Manager"),n=["Product Manager","Frontend Engineer","UX Designer","Frontend Designer"];let s=0;return oE(()=>{setInterval(()=>{s=(s+1)%n.length,e.value=n[s]},4e3)}),(i,r)=>{const o=Uc("router-link");return _t(),$n("div",WN,[P("div",VN,[P("section",jN,[P("div",GN,[QN,P("div",KN,[P("p",zN,iA(e.value),1)])]),P("div",qN,[P("div",YN,[me(o,{to:"/MyPortfolio/About",class:"d-grid text-decoration-none"},{default:ht(()=>[XN]),_:1})]),P("div",JN,[me(o,{to:"/MyPortfolio/Resume",class:"d-grid text-decoration-none"},{default:ht(()=>[ZN]),_:1})])])]),P("section",e0,[P("div",t0,[P("div",n0,[P("div",s0,[me(o,{to:"/MyPortfolio/Work/TravelMaker"},{default:ht(()=>[i0]),_:1})]),P("div",r0,[me(o,{to:"/MyPortfolio/Work/InshoneDesign"},{default:ht(()=>[o0]),_:1})]),P("div",a0,[me(o,{to:"/MyPortfolio/Work/PersonalityQuiz"},{default:ht(()=>[l0]),_:1})])]),c0])])])])}}},h0=Sr(u0,[["__scopeId","data-v-a0ec966e"]]),d0={__name:"Home",setup(t){return(e,n)=>(_t(),fa(h0))}};class Wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class f0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ia;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_0(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(t){return t===es?void 0:t}function _0(t){return t.instantiationMode==="EAGER"}/**
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
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const m0={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},v0=ve.INFO,A0={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},E0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=A0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=v0,this._logHandler=E0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const y0=(t,e)=>e.some(n=>t instanceof n);let zd,qd;function b0(){return zd||(zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C0(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,nc=new WeakMap,kg=new WeakMap,_l=new WeakMap,vu=new WeakMap;function w0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Dn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function T0(t){if(nc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});nc.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I0(t){sc=t(sc)}function S0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gl(this),e,...n);return kg.set(s,e.sort?e.sort():[e]),Dn(s)}:C0().includes(t)?function(...e){return t.apply(gl(this),e),Dn(Og.get(this))}:function(...e){return Dn(t.apply(gl(this),e))}}function N0(t){return typeof t=="function"?S0(t):(t instanceof IDBTransaction&&T0(t),y0(t,b0())?new Proxy(t,sc):t)}function Dn(t){if(t instanceof IDBRequest)return w0(t);if(_l.has(t))return _l.get(t);const e=N0(t);return e!==t&&(_l.set(t,e),vu.set(e,t)),e}const gl=t=>vu.get(t);function R0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Dn(o.result),l.oldVersion,l.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const O0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],ml=new Map;function Yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ml.get(e))return ml.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=k0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||O0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ml.set(e,r),r}I0(t=>({...t,get:(e,n,s)=>Yd(e,n)||t.get(e,n,s),has:(e,n)=>!!Yd(e,n)||t.has(e,n)}));/**
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
 */class D0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(P0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function P0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",Xd="0.9.4";/**
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
 */const As=new mu("@firebase/app"),x0="@firebase/app-compat",L0="@firebase/analytics-compat",M0="@firebase/analytics",$0="@firebase/app-check-compat",B0="@firebase/app-check",F0="@firebase/auth",U0="@firebase/auth-compat",H0="@firebase/database",W0="@firebase/database-compat",V0="@firebase/functions",j0="@firebase/functions-compat",G0="@firebase/installations",Q0="@firebase/installations-compat",K0="@firebase/messaging",z0="@firebase/messaging-compat",q0="@firebase/performance",Y0="@firebase/performance-compat",X0="@firebase/remote-config",J0="@firebase/remote-config-compat",Z0="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/firestore-compat",sR="firebase",iR="9.17.2";/**
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
 */const rc="[DEFAULT]",rR={[ic]:"fire-core",[x0]:"fire-core-compat",[M0]:"fire-analytics",[L0]:"fire-analytics-compat",[B0]:"fire-app-check",[$0]:"fire-app-check-compat",[F0]:"fire-auth",[U0]:"fire-auth-compat",[H0]:"fire-rtdb",[W0]:"fire-rtdb-compat",[V0]:"fire-fn",[j0]:"fire-fn-compat",[G0]:"fire-iid",[Q0]:"fire-iid-compat",[K0]:"fire-fcm",[z0]:"fire-fcm-compat",[q0]:"fire-perf",[Y0]:"fire-perf-compat",[X0]:"fire-rc",[J0]:"fire-rc-compat",[Z0]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[nR]:"fire-fst-compat","fire-js":"fire-js",[sR]:"fire-js-all"};/**
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
 */const Bo=new Map,oc=new Map;function oR(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(oc.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Bo.values())oR(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Dr("app","Firebase",aR);/**
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
 */class lR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=iR;function Dg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=vS()),!n)throw Pn.create("no-options");const r=Bo.get(i);if(r){if(Mo(n,r.options)&&Mo(s,r.config))return r;throw Pn.create("duplicate-app",{appName:i})}const o=new g0(i);for(const l of oc.values())o.addComponent(l);const a=new lR(n,s,o);return Bo.set(i,a),a}function Au(t=rc){const e=Bo.get(t);if(!e&&t===rc)return Dg();if(!e)throw Pn.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let i=(s=rR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(a.join(" "));return}Es(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cR="firebase-heartbeat-database",uR=1,fr="firebase-heartbeat-store";let vl=null;function Pg(){return vl||(vl=R0(cR,uR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),vl}async function hR(t){try{return(await Pg()).transaction(fr).objectStore(fr).get(xg(t))}catch(e){if(e instanceof pn)As.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(n.message)}}}async function Jd(t,e){try{const s=(await Pg()).transaction(fr,"readwrite");return await s.objectStore(fr).put(e,xg(t)),s.done}catch(n){if(n instanceof pn)As.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});As.warn(s.message)}}}function xg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dR=1024,fR=30*24*60*60*1e3;class pR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zd(),{heartbeatsToSend:n,unsentEntries:s}=_R(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zd(){return new Date().toISOString().substring(0,10)}function _R(t,e=dR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ef(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ef(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bS()?CS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ef(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mR(t){Es(new Wn("platform-logger",e=>new D0(e),"PRIVATE")),Es(new Wn("heartbeat",e=>new pR(e),"PRIVATE")),Gt(ic,Xd,t),Gt(ic,Xd,"esm2017"),Gt("fire-js","")}mR("");const tf="@firebase/database",nf="0.14.4";/**
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
 */let Lg="";function vR(t){Lg=t}/**
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
 */class AR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ER{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Mg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AR(e)}}catch{}return new ER},cs=Mg("localStorage"),ac=Mg("sessionStorage");/**
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
 */const Qs=new mu("@firebase/database"),yR=function(){let t=1;return function(){return t++}}(),$g=function(t){const e=PS(t),n=new RS;n.update(e);const s=n.digest();return du.encodeByteArray(s)},Pr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pr.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let ps=null,sf=!0;const bR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qs.logLevel=ve.VERBOSE,ps=Qs.log.bind(Qs),e&&ac.set("logging_enabled",!0)):typeof t=="function"?ps=t:(ps=null,ac.remove("logging_enabled"))},Ve=function(...t){if(sf===!0&&(sf=!1,ps===null&&ac.get("logging_enabled")===!0&&bR(!0)),ps){const e=Pr.apply(null,t);ps(e)}},xr=function(t){return function(...e){Ve(t,...e)}},lc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pr(...t);Qs.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Pr(...t)}`;throw Qs.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+Pr(...t);Qs.warn(e)},CR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",ys="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===ci||e===ys)return-1;if(e===ci||t===ys)return 1;{const n=rf(t),s=rf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},TR=function(t,e){return t===e?0:t<e?-1:1},$i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Eu=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=Eu(t[e[s]]);return n+="}",n},Fg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ug=function(t){O(!Bg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},IR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const RR=new RegExp("^-?(0*)\\d{1,10}$"),OR=-2147483648,kR=2147483647,rf=function(t){if(RR.test(t)){const e=Number(t);if(e>=OR&&e<=kR)return e}return null},Ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},DR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xR{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class Ks{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ks.OWNER="owner";/**
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
 */const yu="5",Hg="v",Wg="s",Vg="r",jg="f",Gg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qg="ls",Kg="p",cc="ac",zg="websocket",qg="long_polling";/**
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
 */class Yg{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===zg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LR(t)&&(n.ns=t.namespace);const i=[];return nt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class MR{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dS(this.counters_)}}/**
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
 */const Al={},El={};function bu(t){const e=t.toString();return Al[e]||(Al[e]=new MR),Al[e]}function $R(t,e){const n=t.toString();return El[n]||(El[n]=e()),El[n]}/**
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
 */class BR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ii(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const of="start",FR="close",UR="pLPCommand",HR="pRTLPCB",Jg="id",Zg="pw",em="ser",WR="cb",VR="seg",jR="ts",GR="d",QR="dframe",tm=1870,nm=30,KR=tm-nm,zR=25e3,qR=3e4;class Us{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xr(e),this.stats_=bu(n),this.urlFn=l=>(this.appCheckToken&&(l[cc]=this.appCheckToken),Xg(n,qg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qR)),wR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===of)this.id=a,this.password=l;else if(o===FR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[of]="t",s[em]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Hg]=yu,this.transportSessionId&&(s[Wg]=this.transportSessionId),this.lastSessionId&&(s[Qg]=this.lastSessionId),this.applicationId&&(s[Kg]=this.applicationId),this.appCheckToken&&(s[cc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(s[Vg]=jg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Us.forceAllow_=!0}static forceDisallow(){Us.forceDisallow_=!0}static isAvailable(){return Us.forceAllow_?!0:!Us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IR()&&!SR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cg(n),i=Fg(s,KR);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QR]="t",s[Jg]=e,s[Zg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yR(),window[UR+this.uniqueCallbackIdentifier]=e,window[HR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jg]=this.myID,e[Zg]=this.myPW,e[em]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nm+s.length<=tm;){const o=this.pendingSegs.shift();s=s+"&"+VR+i+"="+o.seg+"&"+jR+i+"="+o.ts+"&"+GR+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(zR)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const YR=16384,XR=45e3;let Fo=null;typeof MozWebSocket<"u"?Fo=MozWebSocket:typeof WebSocket<"u"&&(Fo=WebSocket);class It{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xr(this.connId),this.stats_=bu(n),this.connURL=It.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Hg]=yu,typeof location<"u"&&location.hostname&&Gg.test(location.hostname)&&(o[Vg]=jg),n&&(o[Wg]=n),s&&(o[Qg]=s),i&&(o[cc]=i),r&&(o[Kg]=r),Xg(e,zg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cs.set("previous_websocket_failure",!0);try{let s;gg(),this.mySock=new Fo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){It.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fo!==null&&!It.forceDisallow_}static previouslyFailed(){return cs.isInMemoryStorage||cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fg(n,YR);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}It.responsesRequiredToBeHealthy=2;It.healthyTimeout=3e4;/**
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
 */class pr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Us,It]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=It&&It.isAvailable();let s=n&&!It.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[It];else{const i=this.transports_=[];for(const r of pr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);pr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pr.globalTransportInitialized_=!1;/**
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
 */const JR=6e4,ZR=5e3,eO=10*1024,tO=100*1024,yl="t",af="d",nO="s",lf="r",sO="e",cf="o",uf="a",hf="n",df="p",iO="h";class rO{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xr("c:"+this.id+":"),this.transportManager_=new pr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yl in e){const n=e[yl];n===uf?this.upgradeIfSecondaryHealthy_():n===lf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$i("t",e),s=$i("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:df,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$i("t",e),s=$i("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$i(yl,e);if(af in e){const s=e[af];if(n===iO){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nO?this.onConnectionShutdown_(s):n===lf?this.onReset_(s):n===sO?lc("Server Error: "+s):n===cf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yu!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:df,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sm{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class im{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Uo extends im{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Uo}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ff=32,pf=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new Ee("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function rm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function om(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function am(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ee(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=ce(t),s=ce(e);if(n===null)return e;if(n===s)return qe(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lm(t,e){if(Vn(t)!==Vn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vn(t)>Vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class aO{constructor(e,n){this.errorPrefix_=n,this.parts_=om(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sa(this.parts_[s]);cm(this)}}function lO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sa(e),cm(t)}function cO(t){const e=t.parts_.pop();t.byteLength_-=Sa(e),t.parts_.length>0&&(t.byteLength_-=1)}function cm(t){if(t.byteLength_>pf)throw new Error(t.errorPrefix_+"has a key path longer than "+pf+" bytes ("+t.byteLength_+").");if(t.parts_.length>ff)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ff+") or object contains a cycle "+ts(t))}function ts(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wu extends im{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new wu}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bi=1e3,uO=60*5*1e3,_f=30*1e3,hO=1.3,dO=3e4,fO="server_kill",gf=3;class an extends sm{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=uO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Le(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ia,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lc("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dO&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new rO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(fO)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jl(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Eu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gf&&(this.reconnectDelay_=_f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lg.replace(/\./g,"-")]=1,fu()?e["framework.cordova"]=1:_g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uo.getInstance().currentlyOnline();return Jl(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class Oa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(ci,e),i=new ie(ci,n);return this.compare(s,i)!==0}minPost(){return ie.MIN}}/**
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
 */let no;class um extends Oa{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(ys,no)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,no)}toString(){return".key"}}const zs=new um;/**
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
 */class so{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Be.RED,this.left=i??Ze.EMPTY_NODE,this.right=r??Ze.EMPTY_NODE}copy(e,n,s,i,r){return new Be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class pO{copy(e,n,s,i,r){return this}insert(e,n,s){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new pO;/**
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
 */function _O(t,e){return Ti(t.name,e.name)}function Tu(t,e){return Ti(t,e)}/**
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
 */let uc;function gO(t){uc=t}const hm=function(t){return typeof t=="number"?"number:"+Ug(t):"string:"+t},dm=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else O(t===uc||t.isEmpty(),"priority of unexpected type.");O(t===uc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mf;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dm(this.priorityNode_)}static set __childrenNodeConstructor(e){mf=e}static get __childrenNodeConstructor(){return mf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ce(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ug(this.value_):e+=this.value_,this.lazyHash_=$g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let fm,pm;function mO(t){fm=t}function vO(t){pm=t}class AO extends Oa{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(ys,new $e("[PRIORITY-POST]",pm))}makePost(e,n){const s=fm(e);return new ie(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new AO;/**
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
 */const EO=Math.log(2);class yO{constructor(e){const n=r=>parseInt(Math.log(r)/EO,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ho=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Be(d,h.node,Be.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],d=n?n(h):h,new Be(d,h.node,Be.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const y=h-g,A=h;h-=g;const w=i(y+1,A),E=t[y],N=n?n(E):E;p(new Be(N,E.node,m,null,w))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));m?d(y,Be.BLACK):(d(y,Be.BLACK),d(y,Be.RED))}return u},o=new yO(t.length),a=r(o);return new Ze(s||e,a)};/**
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
 */let bl;const xs={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(xs&&Ie,"ChildrenNode.ts has not been loaded"),bl=bl||new en({".priority":xs},{".priority":Ie}),bl}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){O(e!==zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ie.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ho(s,e.getCompare()):a=xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new en(u,c)}addToIndexes(e,n){const s=Lo(this.indexes_,(i,r)=>{const o=oi(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ho(a,o.getCompare())}else return xs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new en(s,this.indexSet_)}removeFromIndexes(e,n){const s=Lo(this.indexes_,i=>{if(i===xs)return i;{const r=n.get(e.name);return r?i.remove(new ie(e.name,r)):i}});return new en(s,this.indexSet_)}}/**
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
 */let Fi;class Q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dm(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fi||(Fi=new Q(new Ze(Tu),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fi}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fi:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fi:this.priorityNode_;return new Q(i,o,r)}}updateChild(e,n){const s=ce(e);if(s===null)return n;{O(ce(e)!==".priority"||Vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hm(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":$g(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lr?-1:0}withIndex(e){if(e===zs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zs?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bO extends Q{constructor(){super(new Ze(Tu),Q.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const Lr=new bO;Object.defineProperties(ie,{MIN:{value:new ie(ci,Q.EMPTY_NODE)},MAX:{value:new ie(ys,Lr)}});um.__EMPTY_NODE=Q.EMPTY_NODE;$e.__childrenNodeConstructor=Q;gO(Lr);vO(Lr);/**
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
 */const CO=!0;function Fe(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,Fe(e))}if(!(t instanceof Array)&&CO){const n=[];let s=!1;if(nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return Q.EMPTY_NODE;const r=Ho(n,_O,o=>o.name,Tu);if(s){const o=Ho(n,Ie.getCompare());return new Q(r,Fe(e),new en({".priority":o},{".priority":Ie}))}else return new Q(r,Fe(e),en.Default)}else{let n=Q.EMPTY_NODE;return nt(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}mO(Fe);/**
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
 */class wO extends Oa{constructor(e){super(),this.indexPath_=e,O(!ae(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ti(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,Lr);return new ie(ys,e)}toString(){return om(this.indexPath_,0).join("/")}}/**
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
 */class TO extends Oa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ti(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=Fe(e);return new ie(n,s)}toString(){return".value"}}const IO=new TO;/**
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
 */function _m(t){return{type:"value",snapshotNode:t}}function ui(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _r(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Iu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_r(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ui(n,s)):o.trackChildChange(gr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(_r(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gr(i,r,o))}else s.trackChildChange(ui(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class mr{constructor(e){this.indexedFilter_=new Iu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mr.getStartPost_(e),this.endPost_=mr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ie(n,s))||(s=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new ie(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ie(n,s))||(s=Q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ie(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(gr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_r(n,h));const m=a.updateImmediateChild(n,Q.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ui(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_r(c.name,c.node)),r.trackChildChange(ui(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,Q.EMPTY_NODE)):e}}/**
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
 */class Su{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Su;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RO(t){return t.loadsAllData()?new Iu(t.getIndex()):t.hasLimit()?new NO(t):new mr(t)}function vf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===IO?n="$value":t.index_===zs?n="$key":(O(t.index_ instanceof wO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Le(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Le(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Le(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Af(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
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
 */class Wo extends sm{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=xr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wo.getListenId_(e,s),a={};this.listens_[o]=a;const l=vf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),oi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Wo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vf(e._queryParams),s=e._path.toString(),i=new Ia;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hr(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class OO{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vo(){return{value:null,children:new Map}}function gm(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ce(e);t.children.has(s)||t.children.set(s,Vo());const i=t.children.get(s);e=ye(e),gm(i,e,n)}}function hc(t,e,n){t.value!==null?n(e,t.value):kO(t,(s,i)=>{const r=new Ee(e.toString()+"/"+s);hc(i,r,n)})}function kO(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class DO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ef=10*1e3,PO=30*1e3,xO=5*60*1e3;class LO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DO(e);const s=Ef+(PO-Ef)*Math.random();Xi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nt(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xi(this.reportStats_.bind(this),Math.floor(Math.random()*2*xO))}}/**
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
 */var Rt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rt||(Rt={}));function mm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ru(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class jo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Rt.ACK_USER_WRITE,this.source=mm()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new jo(de(),n,this.revert)}}else return O(ce(this.path)===e,"operationForChild called for unrelated child."),new jo(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class vr{constructor(e,n){this.source=e,this.path=n,this.type=Rt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new vr(this.source,de()):new vr(this.source,ye(this.path))}}/**
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
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Rt.OVERWRITE}operationForChild(e){return ae(this.path)?new bs(this.source,de(),this.snap.getImmediateChild(e)):new bs(this.source,ye(this.path),this.snap)}}/**
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
 */class Ar{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Rt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new bs(this.source,de(),n.value):new Ar(this.source,de(),n)}else return O(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ar(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class MO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $O(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(SO(o.childName,o.snapshotNode))}),Ui(t,i,"child_removed",e,s,n),Ui(t,i,"child_added",e,s,n),Ui(t,i,"child_moved",r,s,n),Ui(t,i,"child_changed",e,s,n),Ui(t,i,"value",e,s,n),i}function Ui(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>FO(t,a,l)),o.forEach(a=>{const l=BO(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function BO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FO(t,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ka(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,s){return ka(new jn(e,n,s),t.serverCache)}function vm(t,e,n,s){return ka(t.eventCache,new jn(e,n,s))}function Go(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Cl;const UO=()=>(Cl||(Cl=new Ze(TR)),Cl);class we{constructor(e,n=UO()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return nt(e,(s,i)=>{n=n.set(new Ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ae(e))return null;{const s=ce(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Me(new Ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ce(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new we(null)}}set(e,n){if(ae(e))return new we(n,this.children);{const s=ce(e),r=(this.children.get(s)||new we(null)).set(ye(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ce(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ce(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ce(e),r=(this.children.get(s)||new we(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ce(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ce(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Me(n,i),s):new we(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new we(null))}}function Zi(t,e,n){if(ae(e))return new Dt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=qe(i,e);return r=r.updateChild(o,n),new Dt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Dt(r)}}}function yf(t,e,n){let s=t;return nt(n,(i,r)=>{s=Zi(s,Me(e,i),r)}),s}function bf(t,e){if(ae(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Dt(n)}}function dc(t,e){return Ns(t,e)!=null}function Ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function Cf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new ie(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ie(s,i.value))}),e}function xn(t,e){if(ae(e))return t;{const n=Ns(t,e);return n!=null?new Dt(new we(n)):new Dt(t.writeTree_.subtree(e))}}function fc(t){return t.writeTree_.isEmpty()}function hi(t,e){return Am(de(),t.writeTree_,e)}function Am(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Am(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
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
 */function Da(t,e){return Cm(e,t)}function HO(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=s}function WO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function VO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jO(a,s.path)?i=!1:Nt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return GO(t),!0;if(s.snap)t.visibleWrites=bf(t.visibleWrites,s.path);else{const a=s.children;nt(a,l=>{t.visibleWrites=bf(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function jO(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Me(t.path,n),e))return!0;return!1}function GO(t){t.visibleWrites=Em(t.allWrites,QO,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QO(t){return t.visible}function Em(t,e,n){let s=Dt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Nt(n,o)?(a=qe(n,o),s=Zi(s,a,r.snap)):Nt(o,n)&&(a=qe(o,n),s=Zi(s,de(),r.snap.getChild(a)));else if(r.children){if(Nt(n,o))a=qe(n,o),s=yf(s,a,r.children);else if(Nt(o,n))if(a=qe(o,n),ae(a))s=yf(s,de(),r.children);else{const l=oi(r.children,ce(a));if(l){const c=l.getChild(ye(a));s=Zi(s,de(),c)}}}else throw yi("WriteRecord should have .snap or .children")}}return s}function ym(t,e,n,s,i){if(!s&&!i){const r=Ns(t.visibleWrites,e);if(r!=null)return r;{const o=xn(t.visibleWrites,e);if(fc(o))return n;if(n==null&&!dc(o,de()))return null;{const a=n||Q.EMPTY_NODE;return hi(o,a)}}}else{const r=xn(t.visibleWrites,e);if(!i&&fc(r))return n;if(!i&&n==null&&!dc(r,de()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=Em(t.allWrites,o,e),l=n||Q.EMPTY_NODE;return hi(a,l)}}}function KO(t,e,n){let s=Q.EMPTY_NODE;const i=Ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=hi(xn(r,new Ee(o)),a);s=s.updateImmediateChild(o,l)}),Cf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xn(t.visibleWrites,e);return Cf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zO(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(dc(t.visibleWrites,r))return null;{const o=xn(t.visibleWrites,r);return fc(o)?i.getChild(n):hi(o,i.getChild(n))}}function qO(t,e,n,s){const i=Me(e,n),r=Ns(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return hi(o,s.getNode().getImmediateChild(n))}else return null}function YO(t,e){return Ns(t.visibleWrites,e)}function XO(t,e,n,s,i,r,o){let a;const l=xn(t.visibleWrites,e),c=Ns(l,de());if(c!=null)a=c;else if(n!=null)a=hi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function JO(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function Qo(t,e,n,s){return ym(t.writeTree,t.treePath,e,n,s)}function Ou(t,e){return KO(t.writeTree,t.treePath,e)}function wf(t,e,n,s){return zO(t.writeTree,t.treePath,e,n,s)}function Ko(t,e){return YO(t.writeTree,Me(t.treePath,e))}function ZO(t,e,n,s,i,r){return XO(t.writeTree,t.treePath,e,n,s,i,r)}function ku(t,e,n){return qO(t.writeTree,t.treePath,e,n)}function bm(t,e){return Cm(Me(t.treePath,e),t.writeTree)}function Cm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ek{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_r(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ui(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gr(s,e.snapshotNode,i.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const wm=new tk;class Du{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ku(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cs(this.viewCache_),r=ZO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function nk(t){return{filter:t}}function sk(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ik(t,e,n,s,i){const r=new ek;let o,a;if(n.type===Rt.OVERWRITE){const c=n;c.source.fromUser?o=pc(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=zo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Rt.MERGE){const c=n;c.source.fromUser?o=ok(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_c(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Rt.ACK_USER_WRITE){const c=n;c.revert?o=ck(t,e,c.path,s,i,r):o=ak(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Rt.LISTEN_COMPLETE)o=lk(t,e,n.path,s,r);else throw yi("Unknown operation type: "+n.type);const l=r.getChanges();return rk(e,o,l),{viewCache:o,changes:l}}function rk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Go(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_m(Go(e)))}}function Tm(t,e,n,s,i,r){const o=e.eventCache;if(Ko(s,n)!=null)return e;{let a,l;if(ae(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Cs(e),u=c instanceof Q?c:Q.EMPTY_NODE,h=Ou(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Qo(s,Cs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ce(n);if(c===".priority"){O(Vn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=wf(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=wf(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ku(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ji(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function zo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ce(n);if(!l.isCompleteForPath(n)&&Vn(n)>1)return e;const g=ye(n),y=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),p,y,g,wm,null)}const h=vm(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),d=new Du(i,h,r);return Tm(t,h,n,i,d,a)}function pc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Du(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ji(e,c,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ji(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),p=a.getNode().getImmediateChild(h);let g;if(ae(d))g=s;else{const m=u.getCompleteChild(h);m!=null?rm(d)===".priority"&&m.getChild(am(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=Q.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Ji(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tf(t,e){return t.eventCache.isCompleteForChild(e)}function ok(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Me(n,l);Tf(e,ce(u))&&(a=pc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Me(n,l);Tf(e,ce(u))||(a=pc(t,a,u,c,i,r,o))}),a}function If(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function _c(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=If(t,p,d);l=zo(t,l,new Ee(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=If(t,g,d);l=zo(t,l,new Ee(h),m,i,r,o,a)}}),l}function ak(t,e,n,s,i,r,o){if(Ko(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new we(null);return l.getNode().forEachChild(zs,(u,h)=>{c=c.set(new Ee(u),h)}),_c(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=Me(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),_c(t,e,n,c,i,r,a,o)}}function lk(t,e,n,s,i){const r=e.serverCache,o=vm(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Tm(t,o,n,s,wm,i)}function ck(t,e,n,s,i,r){let o;if(Ko(s,n)!=null)return e;{const a=new Du(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||ce(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qo(s,Cs(e));else{const h=e.serverCache.getNode();O(h instanceof Q,"serverChildren would be complete if leaf node"),u=Ou(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ce(n);let h=ku(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Q.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qo(s,Cs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ko(s,de())!=null,Ji(e,c,o,t.filter.filtersNodes())}}/**
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
 */class uk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Iu(s.getIndex()),r=RO(s);this.processor_=nk(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new jn(l,o.isFullyInitialized(),i.filtersNodes()),h=new jn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ka(h,u),this.eventGenerator_=new MO(this.query_)}get query(){return this.query_}}function hk(t){return t.viewCache_.serverCache.getNode()}function dk(t){return Go(t.viewCache_)}function fk(t,e){const n=Cs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Sf(t){return t.eventRegistrations_.length===0}function pk(t,e){t.eventRegistrations_.push(e)}function Nf(t,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Rf(t,e,n,s){e.type===Rt.MERGE&&e.source.queryId!==null&&(O(Cs(t.viewCache_),"We should always have a full cache before handling merges"),O(Go(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ik(t.processor_,i,e,n,s);return sk(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Im(t,r.changes,r.viewCache.eventCache.getNode(),null)}function _k(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(ui(r,o))}),n.isFullyInitialized()&&s.push(_m(n.getNode())),Im(t,s,n.getNode(),e)}function Im(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return $O(t.eventGenerator_,e,n,i)}/**
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
 */let qo;class Sm{constructor(){this.views=new Map}}function gk(t){O(!qo,"__referenceConstructor has already been defined"),qo=t}function mk(){return O(qo,"Reference.ts has not been loaded"),qo}function vk(t){return t.views.size===0}function Pu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Rf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Rf(o,e,n,s));return r}}function Nm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Qo(n,i?s:null),l=!1;a?l=!0:s instanceof Q?(a=Ou(n,s),l=!1):(a=Q.EMPTY_NODE,l=!1);const c=ka(new jn(a,l,!1),new jn(s,i,!1));return new uk(e,c)}return o}function Ak(t,e,n,s,i,r){const o=Nm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pk(o,n),_k(o,n)}function Ek(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Gn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Nf(c,n,s)),Sf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Nf(l,n,s)),Sf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Gn(t)&&r.push(new(mk())(e._repo,e._path)),{removed:r,events:o}}function Rm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ln(t,e){let n=null;for(const s of t.views.values())n=n||fk(s,e);return n}function Om(t,e){if(e._queryParams.loadsAllData())return Pa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function km(t,e){return Om(t,e)!=null}function Gn(t){return Pa(t)!=null}function Pa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Yo;function yk(t){O(!Yo,"__referenceConstructor has already been defined"),Yo=t}function bk(){return O(Yo,"Reference.ts has not been loaded"),Yo}let Ck=1;class Of{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=JO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dm(t,e,n,s,i){return HO(t.pendingWriteTree_,e,n,s,i),i?$r(t,new bs(mm(),e,n)):[]}function us(t,e,n=!1){const s=WO(t.pendingWriteTree_,e);if(VO(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(de(),!0):nt(s.children,o=>{r=r.set(new Ee(o),!0)}),$r(t,new jo(s.path,r,n))}else return[]}function Mr(t,e,n){return $r(t,new bs(Nu(),e,n))}function wk(t,e,n){const s=we.fromObject(n);return $r(t,new Ar(Nu(),e,s))}function Tk(t,e){return $r(t,new vr(Nu(),e))}function Ik(t,e,n){const s=Lu(t,n);if(s){const i=Mu(s),r=i.path,o=i.queryId,a=qe(r,e),l=new vr(Ru(o),a);return $u(t,r,l)}else return[]}function Pm(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||km(o,e))){const l=Ek(o,e,n,s);vk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>Gn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=Ok(d);for(let g=0;g<p.length;++g){const m=p[g],y=m.query,A=$m(t,m);t.listenProvider_.startListening(er(y),Er(t,y),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(er(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(xa(d));t.listenProvider_.stopListening(er(d),p)}))}kk(t,c)}return a}function xm(t,e,n,s){const i=Lu(t,s);if(i!=null){const r=Mu(i),o=r.path,a=r.queryId,l=qe(o,e),c=new bs(Ru(a),l,n);return $u(t,o,c)}else return[]}function Sk(t,e,n,s){const i=Lu(t,s);if(i){const r=Mu(i),o=r.path,a=r.queryId,l=qe(o,e),c=we.fromObject(n),u=new Ar(Ru(a),l,c);return $u(t,o,u)}else return[]}function Nk(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=qe(d,i);r=r||Ln(p,g),o=o||Gn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Gn(a),r=r||Ln(a,de())):(a=new Sm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const m=Ln(g,de());m&&(r=r.updateImmediateChild(p,m))}));const c=km(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=xa(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=Dk();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Da(t.pendingWriteTree_,i);let h=Ak(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Om(a,e);h=h.concat(Pk(t,e,d))}return h}function xu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=Ln(a,l);if(c)return c});return ym(i,e,r,n,!0)}function Rk(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=qe(c,n);s=s||Ln(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Ln(i,de()):(i=new Sm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new jn(s,!0,!1):null,a=Da(t.pendingWriteTree_,e._path),l=Nm(i,e,a,r?o.getNode():Q.EMPTY_NODE,r);return dk(l)}function $r(t,e){return Lm(e,t.syncPointTree_,null,Da(t.pendingWriteTree_,de()))}function Lm(t,e,n,s){if(ae(t.path))return Mm(t,e,n,s);{const i=e.get(de());n==null&&i!=null&&(n=Ln(i,de()));let r=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=bm(s,o);r=r.concat(Lm(a,l,c,u))}return i&&(r=r.concat(Pu(i,t,s,n))),r}}function Mm(t,e,n,s){const i=e.get(de());n==null&&i!=null&&(n=Ln(i,de()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bm(s,o),u=t.operationForChild(o);u&&(r=r.concat(Mm(u,a,l,c)))}),i&&(r=r.concat(Pu(i,t,s,n))),r}function $m(t,e){const n=e.query,s=Er(t,n);return{hashFn:()=>(hk(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ik(t,n._path,s):Tk(t,n._path);{const r=NR(i,n);return Pm(t,n,null,r)}}}}function Er(t,e){const n=xa(e);return t.queryToTagMap.get(n)}function xa(t){return t._path.toString()+"$"+t._queryIdentifier}function Lu(t,e){return t.tagToQueryMap.get(e)}function Mu(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function $u(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Da(t.pendingWriteTree_,e);return Pu(s,n,i,null)}function Ok(t){return t.fold((e,n,s)=>{if(n&&Gn(n))return[Pa(n)];{let i=[];return n&&(i=Rm(n)),nt(s,(r,o)=>{i=i.concat(o)}),i}})}function er(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bk())(t._repo,t._path):t}function kk(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=xa(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Dk(){return Ck++}function Pk(t,e,n){const s=e._path,i=Er(t,e),r=$m(t,n),o=t.listenProvider_.startListening(er(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)O(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ae(c)&&u&&Gn(u))return[Pa(u).query];{let d=[];return u&&(d=d.concat(Rm(u).map(p=>p.query))),nt(h,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(er(u),Er(t,u))}}return o}/**
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
 */class Bu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bu(n)}node(){return this.node_}}class Fu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Fu(this.syncTree_,n)}node(){return xu(this.syncTree_,this.path_)}}const xk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},Mk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},$k=function(t,e,n,s){return Uu(e,new Fu(n,t),s)},Bm=function(t,e,n){return Uu(t,new Bu(e),n)};function Uu(t,e,n){const s=t.getPriority().val(),i=kf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=kf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(Ie,(a,l)=>{const c=Uu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Hu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Wu(t,e){let n=e instanceof Ee?e:new Ee(e),s=t,i=ce(n);for(;i!==null;){const r=oi(s.node.children,i)||{children:{},childCount:0};s=new Hu(i,s,r),n=ye(n),i=ce(n)}return s}function Si(t){return t.node.value}function Fm(t,e){t.node.value=e,gc(t)}function Um(t){return t.node.childCount>0}function Bk(t){return Si(t)===void 0&&!Um(t)}function La(t,e){nt(t.node.children,(n,s)=>{e(new Hu(n,t,s))})}function Hm(t,e,n,s){n&&!s&&e(t),La(t,i=>{Hm(i,e,!0,s)}),n&&s&&e(t)}function Fk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Br(t){return new Ee(t.parent===null?t.name:Br(t.parent)+"/"+t.name)}function gc(t){t.parent!==null&&Uk(t.parent,t.name,t)}function Uk(t,e,n){const s=Bk(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gc(t))}/**
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
 */const Hk=/[\[\].#$\/\u0000-\u001F\u007F]/,Wk=/[\[\].#$\u0000-\u001F\u007F]/,wl=10*1024*1024,Wm=function(t){return typeof t=="string"&&t.length!==0&&!Hk.test(t)},Vm=function(t){return typeof t=="string"&&t.length!==0&&!Wk.test(t)},Vk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vm(t)},jm=function(t,e,n,s){s&&e===void 0||Vu(pu(t,"value"),e,n)},Vu=function(t,e,n){const s=n instanceof Ee?new aO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ts(s));if(typeof e=="function")throw new Error(t+"contains a function "+ts(s)+" with contents = "+e.toString());if(Bg(e))throw new Error(t+"contains "+e.toString()+" "+ts(s));if(typeof e=="string"&&e.length>wl/3&&Sa(e)>wl)throw new Error(t+"contains a string greater than "+wl+" utf8 bytes "+ts(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wm(o)))throw new Error(t+" contains an invalid key ("+o+") "+ts(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lO(s,o),Vu(t,a,s),cO(s)}),i&&r)throw new Error(t+' contains ".value" child '+ts(s)+" in addition to actual children.")}},Gm=function(t,e,n,s){if(!(s&&n===void 0)&&!Vm(n))throw new Error(pu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jk=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gm(t,e,n,s)},Qm=function(t,e){if(ce(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vk(n))throw new Error(pu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Qk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Km(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lm(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yt(t,e,n){Km(t,n),Kk(t,s=>Nt(s,e)||Nt(e,s))}function Kk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ps&&Ve("event: "+n.toString()),Ii(s)}}}/**
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
 */const qk="repo_interrupt",Yk=25;class Xk{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vo(),this.transactionQueueTree_=new Hu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jk(t,e,n){if(t.stats_=bu(t.repoInfo_),t.forceRestClient_||DR())t.server_=new Wo(t.repoInfo_,(s,i,r,o)=>{Df(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Pf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new an(t.repoInfo_,e,(s,i,r,o)=>{Df(t,s,i,r,o)},s=>{Pf(t,s)},s=>{Zk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$R(t.repoInfo_,()=>new LO(t.stats_,t.server_)),t.infoData_=new OO,t.infoSyncTree_=new Of({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Mr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gu(t,"connected",!1),t.serverSyncTree_=new Of({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Yt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function zm(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ju(t){return xk({timestamp:zm(t)})}function Df(t,e,n,s,i){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Lo(n,c=>Fe(c));o=Sk(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=xm(t.serverSyncTree_,r,l,i)}else if(s){const l=Lo(n,c=>Fe(c));o=wk(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=Mr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$a(t,r)),Yt(t.eventQueue_,a,o)}function Pf(t,e){Gu(t,"connected",e),e===!1&&nD(t)}function Zk(t,e){nt(e,(n,s)=>{Gu(t,n,s)})}function Gu(t,e,n){const s=new Ee("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=Mr(t.infoSyncTree_,s,i);Yt(t.eventQueue_,s,r)}function qm(t){return t.nextWriteId_++}function eD(t,e,n){const s=Rk(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());Nk(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Mr(t.serverSyncTree_,e._path,r);else{const a=Er(t.serverSyncTree_,e);o=xm(t.serverSyncTree_,e._path,r,a)}return Yt(t.eventQueue_,e._path,o),Pm(t.serverSyncTree_,e,n,null,!0),r},i=>(Ma(t,"get for query "+Le(e)+" failed: "+i),Promise.reject(new Error(i))))}function tD(t,e,n,s,i){Ma(t,"set",{path:e.toString(),value:n,priority:s});const r=ju(t),o=Fe(n,s),a=xu(t.serverSyncTree_,e),l=Bm(o,a,r),c=qm(t),u=Dm(t.serverSyncTree_,e,l,c,!0);Km(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||et("set at "+e+" failed: "+d);const m=us(t.serverSyncTree_,c,!g);Yt(t.eventQueue_,e,m),iD(t,i,d,p)});const h=ev(t,e);$a(t,h),Yt(t.eventQueue_,h,[])}function nD(t){Ma(t,"onDisconnectEvents");const e=ju(t),n=Vo();hc(t.onDisconnect_,de(),(i,r)=>{const o=$k(i,r,t.serverSyncTree_,e);gm(n,i,o)});let s=[];hc(n,de(),(i,r)=>{s=s.concat(Mr(t.serverSyncTree_,i,r));const o=ev(t,i);$a(t,o)}),t.onDisconnect_=Vo(),Yt(t.eventQueue_,de(),s)}function sD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qk)}function Ma(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function iD(t,e,n,s){e&&Ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ym(t,e,n){return xu(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function Qu(t,e=t.transactionQueueTree_){if(e||Ba(t,e),Si(e)){const n=Jm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rD(t,Br(e),n)}else Um(e)&&La(e,n=>{Qu(t,n)})}function rD(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ym(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ma(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(us(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ba(t,Wu(t.transactionQueueTree_,e)),Qu(t,t.transactionQueueTree_),Yt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ii(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{et("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}$a(t,e)}},o)}function $a(t,e){const n=Xm(t,e),s=Br(n),i=Jm(t,n);return oD(t,i,s),s}function oD(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Yk)u=!0,h="maxretry",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ym(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Vu("transaction failed: Data returned ",p,l.path);let g=Fe(p);typeof p=="object"&&p!=null&&_n(p,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,A=ju(t),w=Bm(g,d,A);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=qm(t),o.splice(o.indexOf(y),1),i=i.concat(Dm(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(us(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(us(t.serverSyncTree_,l.currentWriteId,!0))}Yt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ba(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ii(s[a]);Qu(t,t.transactionQueueTree_)}function Xm(t,e){let n,s=t.transactionQueueTree_;for(n=ce(e);n!==null&&Si(s)===void 0;)s=Wu(s,n),e=ye(e),n=ce(e);return s}function Jm(t,e){const n=[];return Zm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zm(t,e,n){const s=Si(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);La(e,i=>{Zm(t,i,n)})}function Ba(t,e){const n=Si(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Fm(e,n.length>0?n:void 0)}La(e,s=>{Ba(t,s)})}function ev(t,e){const n=Br(Xm(t,e)),s=Wu(t.transactionQueueTree_,e);return Fk(s,i=>{Tl(t,i)}),Tl(t,s),Hm(s,i=>{Tl(t,i)}),n}function Tl(t,e){const n=Si(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fm(e,void 0):n.length=r+1,Yt(t.eventQueue_,Br(e),i);for(let o=0;o<s.length;o++)Ii(s[o])}}/**
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
 */function aD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const xf=function(t,e){const n=cD(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yg(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},cD=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=aD(t.substring(u,h)));const d=lD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Lf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uD=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Lf.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Lf.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class hD{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class dD{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class fD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ku{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:rm(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=Af(this._queryParams),n=Eu(e);return n==="{}"?"default":n}get _queryObject(){return Af(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof Ku))return!1;const n=this._repo===e._repo,s=lm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+oO(this._path)}}class gn extends Ku{constructor(e,n){super(e,n,new Su,!1)}get parent(){const e=am(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),s=di(this.ref,e);return new yr(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new yr(i,di(this.ref,s),Ie)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tv(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?di(t._root,e):t._root}function di(t,e){return t=Ue(t),ce(t._path)===null?jk("child","path",e,!1):Gm("child","path",e,!1),new gn(t._repo,Me(t._path,e))}function pD(t,e){t=Ue(t),Qm("push",t._path),jm("push",e,t._path,!0);const n=zm(t._repo),s=uD(n),i=di(t,s),r=di(t,s);let o;return e!=null?o=nv(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function nv(t,e){t=Ue(t),Qm("set",t._path),jm("set",e,t._path,!1);const n=new Ia;return tD(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function vM(t){t=Ue(t);const e=new fD(()=>{}),n=new zu(e);return eD(t._repo,t,n).then(s=>new yr(s,new gn(t._repo,t._path),t._queryParams.getIndex()))}class zu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hD("value",this,new yr(e.snapshotNode,new gn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dD(this,e,n):null}matches(e){return e instanceof zu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}gk(gn);yk(gn);/**
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
 */const _D="FIREBASE_DATABASE_EMULATOR_HOST",mc={};let gD=!1;function mD(t,e,n,s){t.repoInfo_=new Yg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function vD(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[_D]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=xf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ks(Ks.OWNER):new xR(t.name,t.options,e);Gk("Invalid Firebase Database URL",o),ae(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ED(a,t,u,new PR(t.name,n));return new yD(h,t)}function AD(t,e){const n=mc[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sD(t),delete n[t.key]}function ED(t,e,n,s){let i=mc[e.name];i||(i={},mc[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xk(t,gD,n,s),i[t.toURLString()]=r,r}class yD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function bD(t=Au(),e){const n=Ra(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=dg("database");s&&CD(n,...s)}return n}function CD(t,e,n,s={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ks(Ks.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:pg(s.mockUserToken,t.app.options.projectId);r=new Ks(o)}mD(i,e,n,r)}/**
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
 */function wD(t){vR(wi),Es(new Wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vD(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Gt(tf,nf,t),Gt(tf,nf,"esm2017")}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wD();/**
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
 */const sv="firebasestorage.googleapis.com",iv="storageBucket",TD=2*60*1e3,ID=10*60*1e3;/**
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
 */class Ne extends pn{constructor(e,n,s=0){super(Il(e),`Firebase Storage: ${n} (${Il(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Il(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Il(t){return"storage/"+t}function qu(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Se.UNKNOWN,t)}function SD(t){return new Ne(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ND(t){return new Ne(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Se.UNAUTHENTICATED,t)}function OD(){return new Ne(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kD(t){return new Ne(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DD(){return new Ne(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PD(){return new Ne(Se.CANCELED,"User canceled the upload/download.")}function xD(t){return new Ne(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function LD(t){return new Ne(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function MD(){return new Ne(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+iv+"' property when initializing the app?")}function $D(){return new Ne(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BD(){return new Ne(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FD(t){return new Ne(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vc(t){return new Ne(Se.INVALID_ARGUMENT,t)}function rv(){return new Ne(Se.APP_DELETED,"The Firebase app was deleted.")}function UD(t){return new Ne(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function tr(t,e){return new Ne(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hi(t){throw new Ne(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw LD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===sv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",A=new RegExp(`^https?://${m}/${i}/${y}`,"i"),E=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<E.length;N++){const F=E[N],j=F.regex.exec(e);if(j){const X=j[F.indices.bucket];let B=j[F.indices.path];B||(B=""),s=new rt(X,B),F.postModify(s);break}}if(s==null)throw xD(e);return s}}class HD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(p,l())},y)}function d(){r&&clearTimeout(r)}function p(y,...A){if(c){d();return}if(y){d(),u.call(null,y,...A);return}if(l()||o){d(),u.call(null,y,...A);return}s<64&&(s*=2);let E;a===1?(a=2,E=0):E=(s+Math.random())*1e3,h(E)}let g=!1;function m(y){g||(g=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function VD(t){t(!1)}/**
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
 */function jD(t){return t!==void 0}function GD(t){return typeof t=="object"&&!Array.isArray(t)}function Yu(t){return typeof t=="string"||t instanceof String}function Mf(t){return Xu()&&t instanceof Blob}function Xu(){return typeof Blob<"u"&&!AS()}function $f(t,e,n,s){if(s<e)throw vc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ju(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ov(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _s;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_s||(_s={}));/**
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
 */function QD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class KD{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new io(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===_s.NO_ERROR,l=r.getStatus();if(!a||QD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===_s.ABORT;s(!1,new io(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new io(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());jD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=qu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?rv():PD();o(l)}else{const l=DD();o(l)}};this.canceled_?n(!1,new io(!1,null,!0)):this.backoffId_=WD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class io{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function zD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JD(t,e,n,s,i,r,o=!0){const a=ov(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return YD(c,e),zD(c,n),qD(c,r),XD(c,s),new KD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ZD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eP(...t){const e=ZD();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Xu())return new Blob(t);throw new Ne(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function nP(t){if(typeof atob>"u")throw FD("base-64");return atob(t)}/**
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
 */const Ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sl{constructor(e,n){this.data=e,this.contentType=n||null}}function sP(t,e){switch(t){case Ht.RAW:return new Sl(av(e));case Ht.BASE64:case Ht.BASE64URL:return new Sl(lv(t,e));case Ht.DATA_URL:return new Sl(rP(e),oP(e))}throw qu()}function av(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function iP(t){let e;try{e=decodeURIComponent(t)}catch{throw tr(Ht.DATA_URL,"Malformed data URL.")}return av(e)}function lv(t,e){switch(t){case Ht.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw tr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ht.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw tr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nP(e)}catch(i){throw i.message.includes("polyfill")?i:tr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class cv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw tr(Ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=aP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rP(t){const e=new cv(t);return e.base64?lv(Ht.BASE64,e.rest):iP(e.rest)}function oP(t){return new cv(t).contentType}function aP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Tn{constructor(e,n){let s=0,i="";Mf(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mf(this.data_)){const s=this.data_,i=tP(s,e,n);return i===null?null:new Tn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Tn(s,!0)}}static getBlob(...e){if(Xu()){const n=e.map(s=>s instanceof Tn?s.data_:s);return new Tn(eP.apply(null,n))}else{const n=e.map(o=>Yu(o)?sP(Ht.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Tn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function uv(t){let e;try{e=JSON.parse(t)}catch{return null}return GD(e)?e:null}/**
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
 */function lP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function hv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function uP(t,e){return e}class Ke{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||uP}}let ro=null;function hP(t){return!Yu(t)||t.length<2?t:hv(t)}function dv(){if(ro)return ro;const t=[];t.push(new Ke("bucket")),t.push(new Ke("generation")),t.push(new Ke("metageneration")),t.push(new Ke("name","fullPath",!0));function e(r,o){return hP(o)}const n=new Ke("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=s,t.push(i),t.push(new Ke("timeCreated")),t.push(new Ke("updated")),t.push(new Ke("md5Hash",null,!0)),t.push(new Ke("cacheControl",null,!0)),t.push(new Ke("contentDisposition",null,!0)),t.push(new Ke("contentEncoding",null,!0)),t.push(new Ke("contentLanguage",null,!0)),t.push(new Ke("contentType",null,!0)),t.push(new Ke("metadata","customMetadata",!0)),ro=t,ro}function dP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new rt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function fP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return dP(s,t),s}function fv(t,e,n){const s=uv(e);return s===null?null:fP(t,s,n)}function pP(t,e,n,s){const i=uv(e);if(i===null||!Yu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Ju(d,n,s),g=ov({alt:"media",token:c});return p+g})[0]}function _P(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class pv{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _v(t){if(!t)throw qu()}function gP(t,e){function n(s,i){const r=fv(t,i,e);return _v(r!==null),r}return n}function mP(t,e){function n(s,i){const r=fv(t,i,e);return _v(r!==null),pP(r,i,t.host,t._protocol)}return n}function gv(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=OD():i=RD():n.getStatus()===402?i=ND(t.bucket):n.getStatus()===403?i=kD(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function vP(t){const e=gv(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=SD(t.path)),r.serverResponse=i.serverResponse,r}return n}function AP(t,e,n){const s=e.fullServerUrl(),i=Ju(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new pv(i,r,mP(t,n),o);return a.errorHandler=vP(e),a}function EP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=EP(null,e)),s}function bP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=yP(e,s,i),u=_P(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Tn.getBlob(h,s,d);if(p===null)throw $D();const g={name:c.fullPath},m=Ju(r,t.host,t._protocol),y="POST",A=t.maxUploadRetryTime,w=new pv(m,y,gP(t,n),A);return w.urlParams=g,w.headers=o,w.body=p.uploadData(),w.errorHandler=gv(e),w}class CP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wP extends CP{initXhr(){this.xhr_.responseType="text"}}function mv(){return new wP}/**
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
 */class ws{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ws(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hv(this._location.path)}get storage(){return this._service}get parent(){const e=lP(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UD(e)}}function TP(t,e,n){t._throwIfRoot("uploadBytes");const s=bP(t.storage,t._location,dv(),new Tn(e,!0),n);return t.storage.makeRequestWithTokens(s,mv).then(i=>({metadata:i,ref:t}))}function IP(t){t._throwIfRoot("getDownloadURL");const e=AP(t.storage,t._location,dv());return t.storage.makeRequestWithTokens(e,mv).then(n=>{if(n===null)throw BD();return n})}function SP(t,e){const n=cP(t._location.path,e),s=new rt(t._location.bucket,n);return new ws(t.storage,s)}/**
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
 */function NP(t){return/^[A-Za-z]+:\/\//.test(t)}function RP(t,e){return new ws(t,e)}function vv(t,e){if(t instanceof Zu){const n=t;if(n._bucket==null)throw MD();const s=new ws(n,n._bucket);return e!=null?vv(s,e):s}else return e!==void 0?SP(t,e):t}function OP(t,e){if(e&&NP(e)){if(t instanceof Zu)return RP(t,e);throw vc("To use ref(service, url), the first argument must be a Storage instance.")}else return vv(t,e)}function Bf(t,e){const n=e==null?void 0:e[iv];return n==null?null:rt.makeFromBucketSpec(n,t)}function kP(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:pg(i,t.app.options.projectId))}class Zu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=sv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TD,this._maxUploadRetryTime=ID,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=Bf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Bf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$f("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$f("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ws(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new HD(rv());{const o=JD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ff="@firebase/storage",Uf="0.11.2";/**
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
 */const Av="storage";function DP(t,e,n){return t=Ue(t),TP(t,e,n)}function PP(t){return t=Ue(t),IP(t)}function Hf(t,e){return t=Ue(t),OP(t,e)}function xP(t=Au(),e){t=Ue(t);const s=Ra(t,Av).getImmediate({identifier:e}),i=dg("storage");return i&&LP(s,...i),s}function LP(t,e,n,s={}){kP(t,e,n,s)}function MP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zu(n,s,i,e,wi)}function $P(){Es(new Wn(Av,MP,"PUBLIC").setMultipleInstances(!0)),Gt(Ff,Uf,""),Gt(Ff,Uf,"esm2017")}$P();const BP={class:"container bg-light pt-5"},FP={class:"col-10 mb-3"},UP=P("label",{for:"inputTheme",class:"form-label"},"Title",-1),HP={class:"col-10 mb-3"},WP=P("label",{for:"inputRoute",class:"form-label"},"Route",-1),VP=Vc('<div class="col-10 mb-3"><p>Tags</p><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM"><label class="form-check-label" for="tagCheckbox1">PM</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend"><label class="form-check-label" for="tagCheckbox2">Frontend</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX"><label class="form-check-label" for="tagCheckbox3">UIUX</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App"><label class="form-check-label" for="tagCheckbox4">App</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web"><label class="form-check-label" for="tagCheckbox5">Web</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial"><label class="form-check-label" for="tagCheckbox6">Commercial</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended"><label class="form-check-label" for="tagCheckbox0">Recommended</label></div></div>',1),jP={class:"col-10 mb-3"},GP=P("label",{for:"inputComment",class:"form-label"},"Comment",-1),QP={class:"col-10 mb-3"},KP=P("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),zP={class:"col-10 mb-3"},qP=P("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),YP={class:"col-10 mb-3"},XP=P("label",{for:"file-input",class:"form-label"},"選擇封面(720*420)",-1),JP={key:0,class:"mt-3"},ZP=["src"],ex=["disabled"],tx={class:"col-10 mb-3"},nx=["disabled"],sx={__name:"WorkWallBS",setup(t){const e=Hf(hM,"workCovers"),n=pD(di(dM,"works")).key;let s=[],i=Ct(""),r=Ct(""),o=Ct(""),a=Ct(""),l=Ct("2023-01"),c=Ct("");const u=Ct(null),h=Ct(null),d=Ct(null);window.onload=function(){const A=document.getElementsByClassName("tag-Checkbox");for(let w=0;w<A.length;w++)A[w].addEventListener("click",()=>{p(A)})};function p(A){let w=[];for(let E=0;E<A.length;E++)A[E].checked&&w.push(A[E].value);s=w}function g(A){u.value=A.target.files[0];const w=new FileReader;w.readAsDataURL(u.value),w.onload=()=>{h.value=w.result}}async function m(){const A=Hf(e,u.value.name);await DP(A,u.value),r=await PP(A),u.value=null,h.value=null,d.value="",alert("文件上傳成功，URL: "+r)}async function y(){fM(n,s,"/MyPortfolio/Work/"+i.value,r,o.value,a.value,l.value,c.value)}return(A,w)=>(_t(),$n("section",BP,[P("form",{onSubmit:y,class:"row justify-content-center"},[P("div",FP,[UP,Oi(P("input",{type:"text","onUpdate:modelValue":w[0]||(w[0]=E=>Re(o)?o.value=E:o=E),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[Di,ut(o)]])]),P("div",HP,[WP,Oi(P("input",{type:"text","onUpdate:modelValue":w[1]||(w[1]=E=>Re(i)?i.value=E:i=E),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[Di,ut(i)]])]),VP,P("div",jP,[GP,Oi(P("input",{type:"text","onUpdate:modelValue":w[2]||(w[2]=E=>Re(a)?a.value=E:a=E),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[Di,ut(a)]])]),P("div",QP,[KP,Oi(P("input",{type:"month","onUpdate:modelValue":w[3]||(w[3]=E=>Re(l)?l.value=E:l=E),class:"form-control",id:"inputDonedate"},null,512),[[Di,ut(l)]])]),P("div",zP,[qP,Oi(P("input",{type:"text","onUpdate:modelValue":w[4]||(w[4]=E=>Re(c)?c.value=E:c=E),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[Di,ut(c)]])]),P("div",YP,[XP,P("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:d,onChange:g,accept:"image/*"},null,544),h.value?(_t(),$n("div",JP,[P("img",{src:h.value,class:"img-fluid",alt:"Selected Image"},null,8,ZP)])):FE("",!0),P("button",{type:"button",class:"btn btn-primary mt-3",onClick:m,disabled:!u.value},"上傳圖片",8,ex)]),P("div",tx,[P("button",{type:"submit",disabled:!ut(o),class:"btn btn-primary mb-3"},"確認送出",8,nx)])],32)]))}},ix={__name:"WorkBS",setup(t){return(e,n)=>(_t(),fa(sx))}},rx=[{path:"/MyPortfolio",name:"Home",component:d0},{path:"/MyPortfolio/About",name:"About",component:()=>Ps(()=>import("./About-e194ec9a.js"),["assets/About-e194ec9a.js","assets/About-425ed802.css"])},{path:"/MyPortfolio/Resume",name:"Resume",component:()=>Ps(()=>import("./Resume-2014cf63.js"),["assets/Resume-2014cf63.js","assets/Resume-e1896223.css"])},{path:"/MyPortfolio/Work",name:"Work",component:()=>Ps(()=>import("./Work-d6b3f206.js"),["assets/Work-d6b3f206.js","assets/Work-61f6e110.css"])},{path:"/:domain(.*)*",name:"NotFound",component:()=>Ps(()=>import("./404-b9058a0d.js"),[])},{path:"/MyPortfolio/Login",name:"Login",component:()=>Ps(()=>import("./Login-722b3aae.js"),[])},{path:"/MyPortfolio/backstage/workwall",name:"workwall",component:ix},{path:"/MyPortfolio/Work/TravelMaker",name:"TravelMaker",component:()=>Ps(()=>import("./TravelMaker-74438e9d.js"),["assets/TravelMaker-74438e9d.js","assets/TravelMaker-e7c18669.css"])},{path:"/MyPortfolio/Work/PersonalityQuiz",name:"PersonalityQuiz",redirect:()=>{window.open("https://cookie-place-537.notion.site/Junyi-f89612e0e20b4feca5a710e2fd46f147","_blank")}},{path:"/MyPortfolio/Work/InshoneDesign",name:"InshoneDesign",redirect:()=>{window.open("https://cookie-place-537.notion.site/7ea75a0f43c64179b934cc40b70b4656","_blank")}},{path:"/MyPortfolio/Work/LilyChen",name:"LilyChen",redirect:()=>{window.open("https://cookie-place-537.notion.site/Lily-Chen-Website-4af5b9ec108d4a1888da1803646fc3b7","_blank")}},{path:"/MyPortfolio/Work/AwardHunter",name:"AwardHunter",redirect:()=>{window.open("https://cookie-place-537.notion.site/App-Redesign-25de4cd8b9f445628d217de9fd78e5a9","_blank")}},{path:"/MyPortfolio/Work/BinaryCube",name:"BinaryCube",redirect:()=>{window.open("https://play.google.com/store/apps/developer?id=Forced_Dev","_blank")}}],eh=LN({history:XS(),base:"/MyPortfolio/",routes:rx,scrollBehavior(t,e,n){return{top:0}}});eh.beforeEach((t,e,n)=>{ox(),setTimeout(n,400)});eh.afterEach(async(t,e,n)=>{n||(await Lc(),console.log("ticked"),ax())});function ox(){const t=document.querySelector(".loading-container");t.classList.remove("hideLoad"),t.classList.remove("fadeOut")}function Wf(){console.log("hide");const t=document.querySelector(".loading-container");t.classList.add("fadeOut"),setTimeout(()=>{t.classList.add("hideLoad")},400)}function ax(){const t=document.querySelectorAll("img"),e=[];for(const n of t){const s=new Promise(i=>{n.complete?i():(n.addEventListener("load",i),n.addEventListener("error",i))});e.push(s)}Promise.all(e).then(()=>{console.log("All images loaded"),Wf()}).catch(n=>{console.error("Error loading images",n),Wf()})}var lx="firebase",cx="9.17.2";/**
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
 */Gt(lx,cx,"app");function th(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ev(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ux=Ev,yv=new Dr("auth","Firebase",Ev());/**
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
 */const Vf=new mu("@firebase/auth");function Ao(t,...e){Vf.logLevel<=ve.ERROR&&Vf.error(`Auth (${wi}): ${t}`,...e)}/**
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
 */function xt(t,...e){throw nh(t,...e)}function Qt(t,...e){return nh(t,...e)}function hx(t,e,n){const s=Object.assign(Object.assign({},ux()),{[e]:n});return new Dr("auth","Firebase",s).create(e,{appName:t.name})}function nh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yv.create(t,...e)}function Y(t,e,...n){if(!t)throw nh(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ao(e),new Error(e)}function hn(t,e){t||tn(e)}/**
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
 */const jf=new Map;function nn(t){hn(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
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
 */function dx(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Mo(r,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function fx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function px(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _x(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(px()||ES()||"connection"in navigator)?navigator.onLine:!0}function gx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fr{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=fu()||_g()}get(){return _x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sh(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vx=new Fr(3e4,6e4);function Fa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,s,i={}){return Cv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=bi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bv.fetch()(wv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Cv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mx),e);try{const i=new Ax(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hx(t,u,c);xt(t,u)}}catch(i){if(i instanceof pn)throw i;xt(t,"internal-error",{message:String(i)})}}async function Ua(t,e,n,s,i={}){const r=await Ur(t,e,n,s,i);return"mfaPendingCredential"in r&&xt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function wv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?sh(t.config,i):`${t.config.apiScheme}://${i}`}class Ax{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),vx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Qt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Ex(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function yx(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bx(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),i=ih(s);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:nr(Nl(i.auth_time)),issuedAtTime:nr(Nl(i.iat)),expirationTime:nr(Nl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Nl(t){return Number(t)*1e3}function ih(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=xo(n);return i?JSON.parse(i):(Ao("Failed to decode base64 JWT payload"),null)}catch(i){return Ao("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cx(t){const e=ih(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&wx(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function wx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await br(t,yx(n,{idToken:s}));Y(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Nx(r.providerUserInfo):[],a=Sx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Tv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ix(t){const e=Ue(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sx(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Nx(t){return t.map(e=>{var{providerId:n}=e,s=th(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Rx(t,e){const n=await Cv(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=wv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Rx(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Cr;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function bn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Tv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await br(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bx(this,e)}reload(){return Ix(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await br(this,Ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:N,isAnonymous:F,providerData:j,stsTokenManager:X}=n;Y(E&&X,e,"internal-error");const B=Cr.fromJSON(this.name,X);Y(typeof E=="string",e,"internal-error"),bn(h,e.name),bn(d,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof F=="boolean",e,"internal-error"),bn(p,e.name),bn(g,e.name),bn(m,e.name),bn(y,e.name),bn(A,e.name),bn(w,e.name);const K=new gs({uid:E,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:F,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:B,createdAt:A,lastLoginAt:w});return j&&Array.isArray(j)&&(K.providerData=j.map(G=>Object.assign({},G))),y&&(K._redirectEventId=y),K}static async _fromIdTokenResponse(e,n,s=!1){const i=new Cr;i.updateFromServerResponse(n);const r=new gs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Xo(r),r}}/**
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
 */class Iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iv.type="NONE";const Qf=Iv;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Eo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Eo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qs(nn(Qf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||nn(Qf);const o=Eo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new qs(r,e,s))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kv(e))return"Blackberry";if(Dv(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||Nv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sv(t=Ge()){return/firefox\//i.test(t)}function rh(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nv(t=Ge()){return/crios\//i.test(t)}function Rv(t=Ge()){return/iemobile/i.test(t)}function Ov(t=Ge()){return/android/i.test(t)}function kv(t=Ge()){return/blackberry/i.test(t)}function Dv(t=Ge()){return/webos/i.test(t)}function Ha(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ox(t=Ge()){var e;return Ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kx(){return yS()&&document.documentMode===10}function Pv(t=Ge()){return Ha(t)||Ov(t)||Dv(t)||kv(t)||/windows phone/i.test(t)||Rv(t)}function Dx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xv(t,e=[]){let n;switch(t){case"Browser":n=Kf(Ge());break;case"Worker":n=`${Kf(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${s}`}/**
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
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class xx{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zf(this),this.idTokenSubscription=new zf(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Wa(t){return Ue(t)}class zf{constructor(e){this.auth=e,this.observer=null,this.addObserver=OS(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lx(t,e,n){const s=Wa(t);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Lv(e),{host:o,port:a}=Mx(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$x()}function Lv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mx(t){const e=Lv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qf(o)}}}function qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function Bx(t,e){return Ur(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Fx(t,e){return Ua(t,"POST","/v1/accounts:signInWithPassword",Fa(t,e))}/**
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
 */async function Ux(t,e){return Ua(t,"POST","/v1/accounts:signInWithEmailLink",Fa(t,e))}async function Hx(t,e){return Ua(t,"POST","/v1/accounts:signInWithEmailLink",Fa(t,e))}/**
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
 */class wr extends oh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Fx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ux(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Bx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hx(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Ua(t,"POST","/v1/accounts:signInWithIdp",Fa(t,e))}/**
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
 */const Wx="http://localhost";class Ts extends oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=th(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ts(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:Wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */function Vx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jx(t){const e=Vi(ji(t)).link,n=e?Vi(ji(e)).deep_link_id:null,s=Vi(ji(t)).deep_link_id;return(s?Vi(ji(s)).link:null)||s||n||e||t}class ah{constructor(e){var n,s,i,r,o,a;const l=Vi(ji(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Vx((i=l.mode)!==null&&i!==void 0?i:null);Y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jx(e);try{return new ah(n)}catch{return null}}}/**
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
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ah.parseLink(n);return Y(s,"argument-error"),wr._fromEmailAndCode(e,s.code,s.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hr extends Mv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends Hr{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class Nn extends Hr{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Rn extends Hr{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rn.credential(n,s)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await gs._fromIdTokenResponse(e,s,i),o=Yf(s);return new fi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Yf(s);return new fi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Jo(e,n,s,i)}}function $v(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,r,e,s):r})}async function Gx(t,e,n=!1){const s=await br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",s)}/**
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
 */async function Qx(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await br(t,$v(s,i,e,t),n);Y(r.idToken,s,"internal-error");const o=ih(r.idToken);Y(o,s,"internal-error");const{sub:a}=o;return Y(t.uid===a,s,"user-mismatch"),fi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&xt(s,"user-mismatch"),r}}/**
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
 */async function Bv(t,e,n=!1){const s="signIn",i=await $v(t,s,e),r=await fi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Kx(t,e){return Bv(Wa(t),e)}function AM(t,e,n){return Kx(Ue(t),Ni.credential(e,n))}function zx(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function qx(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const Zo="__sak";/**
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
 */class Fv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Yx(){const t=Ge();return rh(t)||Ha(t)}const Xx=1e3,Jx=10;class Uv extends Fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yx()&&Dx(),this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);kx()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uv.type="LOCAL";const Zx=Uv;/**
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
 */class Hv extends Fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hv.type="SESSION";const Wv=Hv;/**
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
 */function eL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Va(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await eL(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
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
 */function lh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=lh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kt(){return window}function nL(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function sL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rL(){return Vv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",oL=1,ea="firebaseLocalStorage",Gv="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function aL(){const t=indexedDB.deleteDatabase(jv);return new Wr(t).toPromise()}function Ec(){const t=indexedDB.open(jv,oL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ea,{keyPath:Gv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ea)?e(s):(s.close(),await aL(),e(await Ec()))})})}async function Xf(t,e,n){const s=ja(t,!0).put({[Gv]:e,value:n});return new Wr(s).toPromise()}async function lL(t,e){const n=ja(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function Jf(t,e){const n=ja(t,!0).delete(e);return new Wr(n).toPromise()}const cL=800,uL=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uL)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(rL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sL(),!this.activeServiceWorker)return;this.sender=new tL(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await Xf(e,Zo,"1"),await Jf(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>lL(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ja(i,!1).getAll();return new Wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const hL=Qv;/**
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
 */function dL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fL(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Qt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",dL().appendChild(s)})}function pL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Fr(3e4,6e4);/**
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
 */function _L(t,e){return e?nn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gL(t){return Bv(t.auth,new ch(t),t.bypassAuthState)}function mL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Qx(n,new ch(t),t.bypassAuthState)}async function vL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Gx(n,new ch(t),t.bypassAuthState)}/**
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
 */class Kv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gL;case"linkViaPopup":case"linkViaRedirect":return vL;case"reauthViaPopup":case"reauthViaRedirect":return mL;default:xt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AL=new Fr(2e3,1e4);class Hs extends Kv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,AL.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const EL="pendingRedirect",yo=new Map;class yL extends Kv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const s=await bL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bL(t,e){const n=TL(e),s=wL(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function CL(t,e){yo.set(t._key(),e)}function wL(t){return nn(t._redirectPersistence)}function TL(t){return Eo(EL,t.config.apiKey,t.name)}async function IL(t,e,n=!1){const s=Wa(t),i=_L(s,e),o=await new yL(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const SL=10*60*1e3;class NL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(e))}saveEventToCache(e){this.cachedEventUids.add(Zf(e)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zv(t);default:return!1}}/**
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
 */async function OL(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
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
 */const kL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DL=/^https?/;async function PL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OL(t);for(const n of e)try{if(xL(n))return}catch{}xt(t,"unauthorized-domain")}function xL(t){const e=Ac(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!DL.test(n))return!1;if(kL.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=new Fr(3e4,6e4);function ep(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ML(t){return new Promise((e,n)=>{var s,i,r;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(Qt(t,"network-request-failed"))},timeout:LL.get()})}if(!((i=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Kt().gapi)===null||r===void 0)&&r.load)o();else{const a=pL("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},fL(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bo=null,e})}let bo=null;function $L(t){return bo=bo||ML(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=new Fr(5e3,15e3),FL="__/auth/iframe",UL="emulator/auth/iframe",HL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VL(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sh(e,UL):`https://${t.config.authDomain}/${FL}`,s={apiKey:e.apiKey,appName:t.name,v:wi},i=WL.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${bi(s).slice(1)}`}async function jL(t){const e=await $L(t),n=Kt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:VL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HL,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Kt().setTimeout(()=>{r(o)},BL.get());function l(){Kt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QL=500,KL=600,zL="_blank",qL="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YL(t,e,n,s=QL,i=KL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GL),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ge().toLowerCase();n&&(a=Nv(c)?zL:n),Sv(c)&&(e=e||qL,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Ox(c)&&a!=="_self")return XL(e||"",a),new tp(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new tp(h)}function XL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const JL="__/auth/handler",ZL="emulator/auth/handler";function np(t,e,n,s,i,r){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:wi,eventId:i};if(e instanceof Mv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Hr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${eM(t)}?${bi(a).slice(1)}`}function eM({config:t}){return t.emulator?sh(t,ZL):`https://${t.authDomain}/${JL}`}/**
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
 */const Rl="webStorageSupport";class tM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=IL,this._overrideRedirectResult=CL}async _openPopup(e,n,s,i){var r;hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=np(e,n,s,Ac(),i);return YL(e,o,lh())}async _openRedirect(e,n,s,i){return await this._originValidation(e),nL(np(e,n,s,Ac(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await jL(e),s=new NL(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Rl];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pv()||rh()||Ha()}}const nM=tM;var sp="@firebase/auth",ip="0.21.4";/**
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
 */class sM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rM(t){Es(new Wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Y(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(t)},u=new xx(a,l,c);return fx(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Es(new Wn("auth-internal",e=>{const n=Wa(e.getProvider("auth").getImmediate());return(s=>new sM(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(sp,ip,iM(t)),Gt(sp,ip,"esm2017")}/**
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
 */const oM=5*60,aM=fg("authIdTokenMaxAge")||oM;let rp=null;const lM=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aM)return;const i=n==null?void 0:n.token;rp!==i&&(rp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cM(t=Au()){const e=Ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dx(t,{popupRedirectResolver:nM,persistence:[hL,Zx,Wv]}),s=fg("authTokenSyncURL");if(s){const r=lM(s);qx(n,r,()=>r(n.currentUser)),zx(n,o=>r(o))}const i=hg("auth");return i&&Lx(n,`http://${i}`),n}rM("Browser");const qv=Ty(ab);qv.use(eh);qv.mount("#app");const uM={apiKey:"AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",authDomain:"frankportfolio-e3ae3.firebaseapp.com",databaseURL:"https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"frankportfolio-e3ae3",storageBucket:"frankportfolio-e3ae3.appspot.com",messagingSenderId:"483448448603",appId:"1:483448448603:web:d914b32657440240fc017e"},uh=Dg(uM),Yv=bD(uh),hM=xP(uh),dM=tv(Yv,"works/"),EM=cM(uh);function fM(t,e,n,s,i,r,o,a){nv(tv(Yv,"works/"+i+t),{uid:t,tag:e,route:n,image:s,title:i,comment:r,donedate:o,viewcounts:a})}export{wt as F,dM as W,Sr as _,P as a,me as b,$n as c,Vc as d,ca as e,_o as f,Ct as g,Oi as h,_M as i,vM as j,pM as k,FE as l,Vp as m,Di as n,_t as o,la as p,EM as q,Uc as r,AM as s,iA as t,eh as u,gM as v,ht as w,mM as x};
