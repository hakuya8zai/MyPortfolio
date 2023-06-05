(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function _c(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Le(s)?MA(s):_c(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Le(t))return t;if(ye(t))return t}}const PA=/;(?![^(]*\))/g,xA=/:([^]+)/,LA=/\/\*.*?\*\//gs;function MA(t){const e={};return t.replace(LA,"").split(PA).forEach(n=>{if(n){const s=n.split(xA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gc(t){let e="";if(Le(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=gc(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $A="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",BA=pc($A);function Hf(t){return!!t||t===""}function FA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=mo(t[s],e[s]);return n}function mo(t,e){if(t===e)return!0;let n=th(t),s=th(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Xi(t),s=Xi(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?FA(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!mo(t[o],e[o]))return!1}}return String(t)===String(e)}const xL=t=>Le(t)?t:t==null?"":z(t)||ye(t)&&(t.toString===Gf||!J(t.toString))?JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>e&&e.__v_isRef?Wf(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Vf(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!z(e)&&!Qf(e)?String(e):e,we={},$s=[],St=()=>{},UA=()=>!1,HA=/^on[^a-z]/,qo=t=>HA.test(t),mc=t=>t.startsWith("onUpdate:"),Ve=Object.assign,Ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WA=Object.prototype.hasOwnProperty,ce=(t,e)=>WA.call(t,e),z=Array.isArray,Bs=t=>vr(t)==="[object Map]",Vf=t=>vr(t)==="[object Set]",th=t=>vr(t)==="[object Date]",J=t=>typeof t=="function",Le=t=>typeof t=="string",Xi=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",jf=t=>ye(t)&&J(t.then)&&J(t.catch),Gf=Object.prototype.toString,vr=t=>Gf.call(t),VA=t=>vr(t).slice(8,-1),Qf=t=>vr(t)==="[object Object]",vc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jA=/-(\w)/g,Kt=Yo(t=>t.replace(jA,(e,n)=>n?n.toUpperCase():"")),GA=/\B([A-Z])/g,ci=Yo(t=>t.replace(GA,"-$1").toLowerCase()),Xo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Yo(t=>t?`on${Xo(t)}`:""),Ji=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nh;const QA=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yt;class KA{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function zA(t,e=yt){e&&e.active&&e.effects.push(t)}function qA(){return yt}const Ec=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kf=t=>(t.w&xn)>0,zf=t=>(t.n&xn)>0,YA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},XA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Kf(i)&&!zf(i)?i.delete(t):e[n++]=i,i.w&=~xn,i.n&=~xn}e.length=n}},Cl=new WeakMap;let Mi=0,xn=1;const wl=30;let bt;const as=Symbol(""),Tl=Symbol("");class yc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zA(this,s)}run(){if(!this.active)return this.fn();let e=bt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,Nn=!0,xn=1<<++Mi,Mi<=wl?YA(this):sh(this),this.fn()}finally{Mi<=wl&&XA(this),xn=1<<--Mi,bt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(sh(this),this.onStop&&this.onStop(),this.active=!1)}}function sh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const qf=[];function ui(){qf.push(Nn),Nn=!1}function hi(){const t=qf.pop();Nn=t===void 0?!0:t}function et(t,e,n){if(Nn&&bt){let s=Cl.get(t);s||Cl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ec()),Yf(i)}}function Yf(t,e){let n=!1;Mi<=wl?zf(t)||(t.n|=xn,n=!Kf(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function ln(t,e,n,s,i,r){const o=Cl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?vc(n)&&a.push(o.get("length")):(a.push(o.get(as)),Bs(t)&&a.push(o.get(Tl)));break;case"delete":z(t)||(a.push(o.get(as)),Bs(t)&&a.push(o.get(Tl)));break;case"set":Bs(t)&&a.push(o.get(as));break}if(a.length===1)a[0]&&Il(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Il(Ec(l))}}function Il(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&ih(s);for(const s of n)s.computed||ih(s)}function ih(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const JA=pc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xi)),ZA=bc(),ev=bc(!1,!0),tv=bc(!0),rh=nv();function nv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ui();const s=he(this)[e].apply(this,n);return hi(),s}}),t}function sv(t){const e=he(this);return et(e,"has",t),e.hasOwnProperty(t)}function bc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?vv:np:e?tp:ep).get(s))return s;const o=z(s);if(!t){if(o&&ce(rh,i))return Reflect.get(rh,i,r);if(i==="hasOwnProperty")return sv}const a=Reflect.get(s,i,r);return(Xi(i)?Xf.has(i):JA(i))||(t||et(s,"get",i),e)?a:Ne(a)?o&&vc(i)?a:a.value:ye(a)?t?sp(a):Er(a):a}}const iv=Jf(),rv=Jf(!0);function Jf(t=!1){return function(n,s,i,r){let o=n[s];if(Qs(o)&&Ne(o)&&!Ne(i))return!1;if(!t&&(!vo(i)&&!Qs(i)&&(o=he(o),i=he(i)),!z(n)&&Ne(o)&&!Ne(i)))return o.value=i,!0;const a=z(n)&&vc(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===he(r)&&(a?Ji(i,o)&&ln(n,"set",s,i):ln(n,"add",s,i)),l}}function ov(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ln(t,"delete",e,void 0),s}function av(t,e){const n=Reflect.has(t,e);return(!Xi(e)||!Xf.has(e))&&et(t,"has",e),n}function lv(t){return et(t,"iterate",z(t)?"length":as),Reflect.ownKeys(t)}const Zf={get:ZA,set:iv,deleteProperty:ov,has:av,ownKeys:lv},cv={get:tv,set(t,e){return!0},deleteProperty(t,e){return!0}},uv=Ve({},Zf,{get:ev,set:rv}),Cc=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Br(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=Jo(i),a=s?Cc:n?Ic:Zi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Fr(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ur(t,e=!1){return t=t.__v_raw,!e&&et(he(t),"iterate",as),Reflect.get(t,"size",t)}function oh(t){t=he(t);const e=he(this);return Jo(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function ah(t,e){e=he(e);const n=he(this),{has:s,get:i}=Jo(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ji(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function lh(t){const e=he(this),{has:n,get:s}=Jo(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ln(e,"delete",t,void 0),r}function ch(){const t=he(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Hr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=he(o),l=e?Cc:t?Ic:Zi;return!t&&et(a,"iterate",as),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Wr(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=Bs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Cc:e?Ic:Zi;return!e&&et(r,"iterate",l?Tl:as),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:this}}function hv(){const t={get(r){return Br(this,r)},get size(){return Ur(this)},has:Fr,add:oh,set:ah,delete:lh,clear:ch,forEach:Hr(!1,!1)},e={get(r){return Br(this,r,!1,!0)},get size(){return Ur(this)},has:Fr,add:oh,set:ah,delete:lh,clear:ch,forEach:Hr(!1,!0)},n={get(r){return Br(this,r,!0)},get size(){return Ur(this,!0)},has(r){return Fr.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Hr(!0,!1)},s={get(r){return Br(this,r,!0,!0)},get size(){return Ur(this,!0)},has(r){return Fr.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wr(r,!1,!1),n[r]=Wr(r,!0,!1),e[r]=Wr(r,!1,!0),s[r]=Wr(r,!0,!0)}),[t,n,e,s]}const[dv,fv,pv,_v]=hv();function wc(t,e){const n=e?t?_v:pv:t?fv:dv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const gv={get:wc(!1,!1)},mv={get:wc(!1,!0)},Av={get:wc(!0,!1)},ep=new WeakMap,tp=new WeakMap,np=new WeakMap,vv=new WeakMap;function Ev(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yv(t){return t.__v_skip||!Object.isExtensible(t)?0:Ev(VA(t))}function Er(t){return Qs(t)?t:Tc(t,!1,Zf,gv,ep)}function bv(t){return Tc(t,!1,uv,mv,tp)}function sp(t){return Tc(t,!0,cv,Av,np)}function Tc(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=yv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Fs(t){return Qs(t)?Fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function vo(t){return!!(t&&t.__v_isShallow)}function ip(t){return Fs(t)||Qs(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function rp(t){return Ao(t,"__v_skip",!0),t}const Zi=t=>ye(t)?Er(t):t,Ic=t=>ye(t)?sp(t):t;function op(t){Nn&&bt&&(t=he(t),Yf(t.dep||(t.dep=Ec())))}function ap(t,e){t=he(t);const n=t.dep;n&&Il(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Mt(t){return lp(t,!1)}function Cv(t){return lp(t,!0)}function lp(t,e){return Ne(t)?t:new wv(t,e)}class wv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Zi(e)}get value(){return op(this),this._value}set value(e){const n=this.__v_isShallow||vo(e)||Qs(e);e=n?e:he(e),Ji(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zi(e),ap(this))}}function ut(t){return Ne(t)?t.value:t}const Tv={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cp(t){return Fs(t)?t:new Proxy(t,Tv)}var up;class Iv{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[up]=!1,this._dirty=!0,this.effect=new yc(e,()=>{this._dirty||(this._dirty=!0,ap(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return op(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}up="__v_isReadonly";function Sv(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=St):(s=t.get,i=t.set),new Iv(s,i,r||!i,n)}function Rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Zo(r,e,n)}return i}function ft(t,e,n,s){if(J(t)){const r=Rn(t,e,n,s);return r&&jf(r)&&r.catch(o=>{Zo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}function Zo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}Nv(t,n,i,s)}function Nv(t,e,n,s=!0){console.error(t)}let er=!1,Sl=!1;const We=[];let Bt=0;const Us=[];let Jt=null,Jn=0;const hp=Promise.resolve();let Sc=null;function dp(t){const e=Sc||hp;return t?e.then(this?t.bind(this):t):e}function Rv(t){let e=Bt+1,n=We.length;for(;e<n;){const s=e+n>>>1;tr(We[s])<t?e=s+1:n=s}return e}function Nc(t){(!We.length||!We.includes(t,er&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?We.push(t):We.splice(Rv(t.id),0,t),fp())}function fp(){!er&&!Sl&&(Sl=!0,Sc=hp.then(_p))}function Ov(t){const e=We.indexOf(t);e>Bt&&We.splice(e,1)}function kv(t){z(t)?Us.push(...t):(!Jt||!Jt.includes(t,t.allowRecurse?Jn+1:Jn))&&Us.push(t),fp()}function uh(t,e=er?Bt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function pp(t){if(Us.length){const e=[...new Set(Us)];if(Us.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>tr(n)-tr(s)),Jn=0;Jn<Jt.length;Jn++)Jt[Jn]();Jt=null,Jn=0}}const tr=t=>t.id==null?1/0:t.id,Dv=(t,e)=>{const n=tr(t)-tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _p(t){Sl=!1,er=!0,We.sort(Dv);const e=St;try{for(Bt=0;Bt<We.length;Bt++){const n=We[Bt];n&&n.active!==!1&&Rn(n,null,14)}}finally{Bt=0,We.length=0,pp(),er=!1,Sc=null,(We.length||Us.length)&&_p()}}function Pv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(i=n.map(p=>Le(p)?p.trim():p)),h&&(i=n.map(bl))}let a,l=s[a=Ba(e)]||s[a=Ba(Kt(e))];!l&&r&&(l=s[a=Ba(ci(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function gp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const l=c=>{const u=gp(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):Ve(o,r),ye(t)&&s.set(t,o),o)}function ea(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ci(e))||ce(t,e))}let it=null,ta=null;function Eo(t){const e=it;return it=t,ta=t&&t.type.__scopeId||null,e}function Rc(t){ta=t}function Oc(){ta=null}function Ft(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Eh(-1);const r=Eo(e);let o;try{o=t(...i)}finally{Eo(r),s._d&&Eh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Fa(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const w=Eo(t);try{if(n.shapeFlag&4){const N=i||s;y=$t(u.call(N,N,h,r,p,d,g)),v=l}else{const N=e;y=$t(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),v=e.props?l:xv(l)}}catch(N){Ui.length=0,Zo(N,t,1),y=ge(Nt)}let b=y;if(v&&m!==!1){const N=Object.keys(v),{shapeFlag:U}=b;N.length&&U&7&&(o&&N.some(mc)&&(v=Lv(v,o)),b=Mn(b,v))}return n.dirs&&(b=Mn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,Eo(w),y}const xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},Lv=(t,e)=>{const n={};for(const s in t)(!mc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Mv(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ea(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hh(s,o,c):!0:!!o;return!1}function hh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ea(n,r))return!0}return!1}function $v({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bv=t=>t.__isSuspense;function Fv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):kv(t)}function io(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Re||it;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Vr={};function ro(t,e,n){return mp(t,e,n)}function mp(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=we){const a=qA()===(Re==null?void 0:Re.scope)?Re:null;let l,c=!1,u=!1;if(Ne(t)?(l=()=>t.value,c=vo(t)):Fs(t)?(l=()=>t,s=!0):z(t)?(u=!0,c=t.some(b=>Fs(b)||vo(b)),l=()=>t.map(b=>{if(Ne(b))return b.value;if(Fs(b))return ns(b);if(J(b))return Rn(b,a,2)})):J(t)?e?l=()=>Rn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ft(t,a,3,[d])}:l=St,e&&s){const b=l;l=()=>ns(b())}let h,d=b=>{h=v.onStop=()=>{Rn(b,a,4)}},p;if(sr)if(d=St,e?n&&ft(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const b=PE();p=b.__watcherHandles||(b.__watcherHandles=[])}else return St;let g=u?new Array(t.length).fill(Vr):Vr;const m=()=>{if(v.active)if(e){const b=v.run();(s||c||(u?b.some((N,U)=>Ji(N,g[U])):Ji(b,g)))&&(h&&h(),ft(e,a,3,[b,g===Vr?void 0:u&&g[0]===Vr?[]:g,d]),g=b)}else v.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Xe(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Nc(m));const v=new yc(l,y);e?n?m():g=v.run():i==="post"?Xe(v.run.bind(v),a&&a.suspense):v.run();const w=()=>{v.stop(),a&&a.scope&&Ac(a.scope.effects,v)};return p&&p.push(w),w}function Uv(t,e,n){const s=this.proxy,i=Le(t)?t.includes(".")?Ap(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Re;Ks(this);const a=mp(i,r.bind(s),n);return o?Ks(o):ls(),a}function Ap(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ns(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))ns(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ns(t[n],e);else if(Vf(t)||Bs(t))t.forEach(n=>{ns(n,e)});else if(Qf(t))for(const n in t)ns(t[n],e);return t}function Hv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tp(()=>{t.isMounted=!0}),Ip(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],Wv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(t,{slots:e}){const n=TE(),s=Hv();let i;return()=>{const r=e.default&&Ep(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Nt){o=m;break}}const a=he(t),{mode:l}=a;if(s.isLeaving)return Ua(o);const c=dh(o);if(!c)return Ua(o);const u=Nl(c,a,s,n);Rl(c,u);const h=n.subTree,d=h&&dh(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(d&&d.type!==Nt&&(!Zn(c,d)||p)){const m=Nl(d,a,s,n);if(Rl(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ua(o);l==="in-out"&&c.type!==Nt&&(m.delayLeave=(y,v,w)=>{const b=vp(s,d);b[String(d.key)]=d,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Vv=Wv;function vp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Nl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=e,b=String(t.key),N=vp(n,t),U=(B,q)=>{B&&ft(B,s,9,q)},V=(B,q)=>{const G=q[1];U(B,q),z(B)?B.every(ae=>ae.length<=1)&&G():B.length<=1&&G()},Y={mode:r,persisted:o,beforeEnter(B){let q=a;if(!n.isMounted)if(i)q=m||a;else return;B._leaveCb&&B._leaveCb(!0);const G=N[b];G&&Zn(t,G)&&G.el._leaveCb&&G.el._leaveCb(),U(q,[B])},enter(B){let q=l,G=c,ae=u;if(!n.isMounted)if(i)q=y||l,G=v||c,ae=w||u;else return;let _e=!1;const me=B._enterCb=Ue=>{_e||(_e=!0,Ue?U(ae,[B]):U(G,[B]),Y.delayedLeave&&Y.delayedLeave(),B._enterCb=void 0)};q?V(q,[B,me]):me()},leave(B,q){const G=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return q();U(h,[B]);let ae=!1;const _e=B._leaveCb=me=>{ae||(ae=!0,q(),me?U(g,[B]):U(p,[B]),B._leaveCb=void 0,N[G]===t&&delete N[G])};N[G]=t,d?V(d,[B,_e]):_e()},clone(B){return Nl(B,e,n,s)}};return Y}function Ua(t){if(na(t))return t=Mn(t),t.children=null,t}function dh(t){return na(t)?t.children?t.children[0]:void 0:t}function Rl(t,e){t.shapeFlag&6&&t.component?Rl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ep(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ht?(o.patchFlag&128&&i++,s=s.concat(Ep(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function yp(t){return J(t)?{setup:t,name:t.name}:t}const oo=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function bp(t,e){wp(t,"a",e)}function Cp(t,e){wp(t,"da",e)}function wp(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(sa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&jv(s,e,n,i),i=i.parent}}function jv(t,e,n,s){const i=sa(e,t,s,!0);kc(()=>{Ac(s[e],i)},n)}function sa(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ui(),Ks(n);const a=ft(e,n,t,o);return ls(),hi(),a});return s?i.unshift(r):i.push(r),r}}const dn=t=>(e,n=Re)=>(!sr||t==="sp")&&sa(t,(...s)=>e(...s),n),Gv=dn("bm"),Tp=dn("m"),Qv=dn("bu"),Kv=dn("u"),Ip=dn("bum"),kc=dn("um"),zv=dn("sp"),qv=dn("rtg"),Yv=dn("rtc");function Xv(t,e=Re){sa("ec",t,e)}function wi(t,e){const n=it;if(n===null)return t;const s=aa(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=we]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&ns(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ui(),ft(l,n,8,[t.el,a,t,e]),hi())}}const Sp="components";function ia(t,e){return Zv(Sp,t,!0,e)||t}const Jv=Symbol();function Zv(t,e,n=!0,s=!1){const i=it||Re;if(i){const r=i.type;if(t===Sp){const a=OE(r,!1);if(a&&(a===e||a===Kt(e)||a===Xo(Kt(e))))return r}const o=fh(i[t]||r[t],e)||fh(i.appContext[t],e);return!o&&s?r:o}}function fh(t,e){return t&&(t[e]||t[Kt(e)]||t[Xo(Kt(e))])}function LL(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ol=t=>t?Fp(t)?aa(t)||t.proxy:Ol(t.parent):null,Fi=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$emit:t=>t.emit,$options:t=>Dc(t),$forceUpdate:t=>t.f||(t.f=()=>Nc(t.update)),$nextTick:t=>t.n||(t.n=dp.bind(t.proxy)),$watch:t=>Uv.bind(t)}),Ha=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),eE={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ha(s,e))return o[e]=1,s[e];if(i!==we&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];kl&&(o[e]=0)}}const u=Fi[e];let h,d;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ha(i,e)?(i[e]=n,!0):s!==we&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==we&&ce(t,o)||Ha(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(Fi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let kl=!0;function tE(t){const e=Dc(t),n=t.proxy,s=t.ctx;kl=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:b,unmounted:N,render:U,renderTracked:V,renderTriggered:Y,errorCaptured:B,serverPrefetch:q,expose:G,inheritAttrs:ae,components:_e,directives:me,filters:Ue}=e;if(c&&nE(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const le=o[te];J(le)&&(s[te]=le.bind(n))}if(i){const te=i.call(n,n);ye(te)&&(t.data=Er(te))}if(kl=!0,r)for(const te in r){const le=r[te],De=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):St,lt=!J(le)&&J(le.set)?le.set.bind(n):St,Ge=dt({get:De,set:lt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Oe=>Ge.value=Oe})}if(a)for(const te in a)Np(a[te],s,n,te);if(l){const te=J(l)?l.call(n):l;Reflect.ownKeys(te).forEach(le=>{io(le,te[le])})}u&&ph(u,t,"c");function oe(te,le){z(le)?le.forEach(De=>te(De.bind(n))):le&&te(le.bind(n))}if(oe(Gv,h),oe(Tp,d),oe(Qv,p),oe(Kv,g),oe(bp,m),oe(Cp,y),oe(Xv,B),oe(Yv,V),oe(qv,Y),oe(Ip,w),oe(kc,N),oe(zv,q),z(G))if(G.length){const te=t.exposed||(t.exposed={});G.forEach(le=>{Object.defineProperty(te,le,{get:()=>n[le],set:De=>n[le]=De})})}else t.exposed||(t.exposed={});U&&t.render===St&&(t.render=U),ae!=null&&(t.inheritAttrs=ae),_e&&(t.components=_e),me&&(t.directives=me)}function nE(t,e,n=St,s=!1){z(t)&&(t=Dl(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Ht(r.from||i,r.default,!0):o=Ht(r.from||i):o=Ht(r),Ne(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ph(t,e,n){ft(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Np(t,e,n,s){const i=s.includes(".")?Ap(n,s):()=>n[s];if(Le(t)){const r=e[t];J(r)&&ro(i,r)}else if(J(t))ro(i,t.bind(n));else if(ye(t))if(z(t))t.forEach(r=>Np(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&ro(i,r,t)}}function Dc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>yo(l,c,o,!0)),yo(l,e,o)),ye(e)&&r.set(e,l),l}function yo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&yo(t,r,n,!0),i&&i.forEach(o=>yo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sE={data:_h,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:qn,directives:qn,watch:rE,provide:_h,inject:iE};function _h(t,e){return e?t?function(){return Ve(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function iE(t,e){return qn(Dl(t),Dl(e))}function Dl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?Ve(Ve(Object.create(null),t),e):e}function rE(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function oE(t,e,n,s=!1){const i={},r={};Ao(r,oa,1),t.propsDefaults=Object.create(null),Rp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:bv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function aE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ea(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Kt(d);i[g]=Pl(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Rp(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ci(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Pl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],c=!0)}c&&ln(t,"set","$attrs")}function Rp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;i&&ce(i,u=Kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ea(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=he(n),c=a||we;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Pl(i,l,h,c[h],t,!ce(c,h))}}return o}function Pl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&J(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ks(i),s=c[n]=l.call(null,e),ls())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ci(n))&&(s=!0))}return s}function Op(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!J(t)){const u=h=>{l=!0;const[d,p]=Op(h,e,!0);Ve(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,$s),$s;if(z(r))for(let u=0;u<r.length;u++){const h=Kt(r[u]);gh(h)&&(o[h]=we)}else if(r)for(const u in r){const h=Kt(u);if(gh(h)){const d=r[u],p=o[h]=z(d)||J(d)?{type:d}:Object.assign({},d);if(p){const g=vh(Boolean,p.type),m=vh(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function gh(t){return t[0]!=="$"}function mh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ah(t,e){return mh(t)===mh(e)}function vh(t,e){return z(e)?e.findIndex(n=>Ah(n,t)):J(e)&&Ah(e,t)?0:-1}const kp=t=>t[0]==="_"||t==="$stable",Pc=t=>z(t)?t.map($t):[$t(t)],lE=(t,e,n)=>{if(e._n)return e;const s=Ft((...i)=>Pc(e(...i)),n);return s._c=!1,s},Dp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(kp(i))continue;const r=t[i];if(J(r))e[i]=lE(i,r,s);else if(r!=null){const o=Pc(r);e[i]=()=>o}}},Pp=(t,e)=>{const n=Pc(e);t.slots.default=()=>n},cE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Ao(e,"_",n)):Dp(e,t.slots={})}else t.slots={},e&&Pp(t,e);Ao(t.slots,oa,1)},uE=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ve(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Dp(e,i)),o=e}else e&&(Pp(t,e),o={default:1});if(r)for(const a in i)!kp(a)&&!(a in o)&&delete i[a]};function xp(){return{app:null,config:{isNativeTag:UA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hE=0;function dE(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=xp(),o=new Set;let a=!1;const l=r.app={_uid:hE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(l,...u)):J(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ge(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,aa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function xl(t,e,n,s,i=!1){if(z(t)){t.forEach((d,p)=>xl(d,e&&(z(e)?e[p]:e),n,s,i));return}if(oo(s)&&!i)return;const r=s.shapeFlag&4?aa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),J(l))Rn(l,a,12,[o,u]);else{const d=Le(l),p=Ne(l);if(d||p){const g=()=>{if(t.f){const m=d?ce(h,l)?h[l]:u[l]:l.value;i?z(m)&&Ac(m,r):z(m)?m.includes(r)||m.push(r):d?(u[l]=[r],ce(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Xe(g,n)):g()}}}const Xe=Fv;function fE(t){return pE(t)}function pE(t,e){const n=QA();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:g}=t,m=(f,_,A,E=null,T=null,k=null,M=!1,R=null,D=!!_.dynamicChildren)=>{if(f===_)return;f&&!Zn(f,_)&&(E=P(f),Oe(f,T,k,!0),f=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:I,ref:W,shapeFlag:$}=_;switch(I){case ra:y(f,_,A,E);break;case Nt:v(f,_,A,E);break;case ao:f==null&&w(_,A,E,M);break;case ht:_e(f,_,A,E,T,k,M,R,D);break;default:$&1?U(f,_,A,E,T,k,M,R,D):$&6?me(f,_,A,E,T,k,M,R,D):($&64||$&128)&&I.process(f,_,A,E,T,k,M,R,D,se)}W!=null&&T&&xl(W,f&&f.ref,k,_||f,!_)},y=(f,_,A,E)=>{if(f==null)s(_.el=a(_.children),A,E);else{const T=_.el=f.el;_.children!==f.children&&c(T,_.children)}},v=(f,_,A,E)=>{f==null?s(_.el=l(_.children||""),A,E):_.el=f.el},w=(f,_,A,E)=>{[f.el,f.anchor]=g(f.children,_,A,E,f.el,f.anchor)},b=({el:f,anchor:_},A,E)=>{let T;for(;f&&f!==_;)T=d(f),s(f,A,E),f=T;s(_,A,E)},N=({el:f,anchor:_})=>{let A;for(;f&&f!==_;)A=d(f),i(f),f=A;i(_)},U=(f,_,A,E,T,k,M,R,D)=>{M=M||_.type==="svg",f==null?V(_,A,E,T,k,M,R,D):q(f,_,T,k,M,R,D)},V=(f,_,A,E,T,k,M,R)=>{let D,I;const{type:W,props:$,shapeFlag:H,transition:Q,dirs:ee}=f;if(D=f.el=o(f.type,k,$&&$.is,$),H&8?u(D,f.children):H&16&&B(f.children,D,null,E,T,k&&W!=="foreignObject",M,R),ee&&Kn(f,null,E,"created"),Y(D,f,f.scopeId,M,E),$){for(const de in $)de!=="value"&&!no(de)&&r(D,de,null,$[de],k,f.children,E,T,L);"value"in $&&r(D,"value",null,$.value),(I=$.onVnodeBeforeMount)&&Lt(I,E,f)}ee&&Kn(f,null,E,"beforeMount");const fe=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;fe&&Q.beforeEnter(D),s(D,_,A),((I=$&&$.onVnodeMounted)||fe||ee)&&Xe(()=>{I&&Lt(I,E,f),fe&&Q.enter(D),ee&&Kn(f,null,E,"mounted")},T)},Y=(f,_,A,E,T)=>{if(A&&p(f,A),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(T){let k=T.subTree;if(_===k){const M=T.vnode;Y(f,M,M.scopeId,M.slotScopeIds,T.parent)}}},B=(f,_,A,E,T,k,M,R,D=0)=>{for(let I=D;I<f.length;I++){const W=f[I]=R?yn(f[I]):$t(f[I]);m(null,W,_,A,E,T,k,M,R)}},q=(f,_,A,E,T,k,M)=>{const R=_.el=f.el;let{patchFlag:D,dynamicChildren:I,dirs:W}=_;D|=f.patchFlag&16;const $=f.props||we,H=_.props||we;let Q;A&&zn(A,!1),(Q=H.onVnodeBeforeUpdate)&&Lt(Q,A,_,f),W&&Kn(_,f,A,"beforeUpdate"),A&&zn(A,!0);const ee=T&&_.type!=="foreignObject";if(I?G(f.dynamicChildren,I,R,A,E,ee,k):M||le(f,_,R,null,A,E,ee,k,!1),D>0){if(D&16)ae(R,_,$,H,A,E,T);else if(D&2&&$.class!==H.class&&r(R,"class",null,H.class,T),D&4&&r(R,"style",$.style,H.style,T),D&8){const fe=_.dynamicProps;for(let de=0;de<fe.length;de++){const ke=fe[de],Et=$[ke],Ts=H[ke];(Ts!==Et||ke==="value")&&r(R,ke,Et,Ts,T,f.children,A,E,L)}}D&1&&f.children!==_.children&&u(R,_.children)}else!M&&I==null&&ae(R,_,$,H,A,E,T);((Q=H.onVnodeUpdated)||W)&&Xe(()=>{Q&&Lt(Q,A,_,f),W&&Kn(_,f,A,"updated")},E)},G=(f,_,A,E,T,k,M)=>{for(let R=0;R<_.length;R++){const D=f[R],I=_[R],W=D.el&&(D.type===ht||!Zn(D,I)||D.shapeFlag&70)?h(D.el):A;m(D,I,W,null,E,T,k,M,!0)}},ae=(f,_,A,E,T,k,M)=>{if(A!==E){if(A!==we)for(const R in A)!no(R)&&!(R in E)&&r(f,R,A[R],null,M,_.children,T,k,L);for(const R in E){if(no(R))continue;const D=E[R],I=A[R];D!==I&&R!=="value"&&r(f,R,I,D,M,_.children,T,k,L)}"value"in E&&r(f,"value",A.value,E.value)}},_e=(f,_,A,E,T,k,M,R,D)=>{const I=_.el=f?f.el:a(""),W=_.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:Q}=_;Q&&(R=R?R.concat(Q):Q),f==null?(s(I,A,E),s(W,A,E),B(_.children,A,W,T,k,M,R,D)):$>0&&$&64&&H&&f.dynamicChildren?(G(f.dynamicChildren,H,A,T,k,M,R),(_.key!=null||T&&_===T.subTree)&&Lp(f,_,!0)):le(f,_,A,W,T,k,M,R,D)},me=(f,_,A,E,T,k,M,R,D)=>{_.slotScopeIds=R,f==null?_.shapeFlag&512?T.ctx.activate(_,A,E,M,D):Ue(_,A,E,T,k,M,D):nt(f,_,D)},Ue=(f,_,A,E,T,k,M)=>{const R=f.component=wE(f,E,T);if(na(f)&&(R.ctx.renderer=se),IE(R),R.asyncDep){if(T&&T.registerDep(R,oe),!f.el){const D=R.subTree=ge(Nt);v(null,D,_,A)}return}oe(R,f,_,A,T,k,M)},nt=(f,_,A)=>{const E=_.component=f.component;if(Mv(f,_,A))if(E.asyncDep&&!E.asyncResolved){te(E,_,A);return}else E.next=_,Ov(E.update),E.update();else _.el=f.el,E.vnode=_},oe=(f,_,A,E,T,k,M)=>{const R=()=>{if(f.isMounted){let{next:W,bu:$,u:H,parent:Q,vnode:ee}=f,fe=W,de;zn(f,!1),W?(W.el=ee.el,te(f,W,M)):W=ee,$&&so($),(de=W.props&&W.props.onVnodeBeforeUpdate)&&Lt(de,Q,W,ee),zn(f,!0);const ke=Fa(f),Et=f.subTree;f.subTree=ke,m(Et,ke,h(Et.el),P(Et),f,T,k),W.el=ke.el,fe===null&&$v(f,ke.el),H&&Xe(H,T),(de=W.props&&W.props.onVnodeUpdated)&&Xe(()=>Lt(de,Q,W,ee),T)}else{let W;const{el:$,props:H}=_,{bm:Q,m:ee,parent:fe}=f,de=oo(_);if(zn(f,!1),Q&&so(Q),!de&&(W=H&&H.onVnodeBeforeMount)&&Lt(W,fe,_),zn(f,!0),$&&X){const ke=()=>{f.subTree=Fa(f),X($,f.subTree,f,T,null)};de?_.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Fa(f);m(null,ke,A,E,f,T,k),_.el=ke.el}if(ee&&Xe(ee,T),!de&&(W=H&&H.onVnodeMounted)){const ke=_;Xe(()=>Lt(W,fe,ke),T)}(_.shapeFlag&256||fe&&oo(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Xe(f.a,T),f.isMounted=!0,_=A=E=null}},D=f.effect=new yc(R,()=>Nc(I),f.scope),I=f.update=()=>D.run();I.id=f.uid,zn(f,!0),I()},te=(f,_,A)=>{_.component=f;const E=f.vnode.props;f.vnode=_,f.next=null,aE(f,_.props,E,A),uE(f,_.children,A),ui(),uh(),hi()},le=(f,_,A,E,T,k,M,R,D=!1)=>{const I=f&&f.children,W=f?f.shapeFlag:0,$=_.children,{patchFlag:H,shapeFlag:Q}=_;if(H>0){if(H&128){lt(I,$,A,E,T,k,M,R,D);return}else if(H&256){De(I,$,A,E,T,k,M,R,D);return}}Q&8?(W&16&&L(I,T,k),$!==I&&u(A,$)):W&16?Q&16?lt(I,$,A,E,T,k,M,R,D):L(I,T,k,!0):(W&8&&u(A,""),Q&16&&B($,A,E,T,k,M,R,D))},De=(f,_,A,E,T,k,M,R,D)=>{f=f||$s,_=_||$s;const I=f.length,W=_.length,$=Math.min(I,W);let H;for(H=0;H<$;H++){const Q=_[H]=D?yn(_[H]):$t(_[H]);m(f[H],Q,A,null,T,k,M,R,D)}I>W?L(f,T,k,!0,!1,$):B(_,A,E,T,k,M,R,D,$)},lt=(f,_,A,E,T,k,M,R,D)=>{let I=0;const W=_.length;let $=f.length-1,H=W-1;for(;I<=$&&I<=H;){const Q=f[I],ee=_[I]=D?yn(_[I]):$t(_[I]);if(Zn(Q,ee))m(Q,ee,A,null,T,k,M,R,D);else break;I++}for(;I<=$&&I<=H;){const Q=f[$],ee=_[H]=D?yn(_[H]):$t(_[H]);if(Zn(Q,ee))m(Q,ee,A,null,T,k,M,R,D);else break;$--,H--}if(I>$){if(I<=H){const Q=H+1,ee=Q<W?_[Q].el:E;for(;I<=H;)m(null,_[I]=D?yn(_[I]):$t(_[I]),A,ee,T,k,M,R,D),I++}}else if(I>H)for(;I<=$;)Oe(f[I],T,k,!0),I++;else{const Q=I,ee=I,fe=new Map;for(I=ee;I<=H;I++){const st=_[I]=D?yn(_[I]):$t(_[I]);st.key!=null&&fe.set(st.key,I)}let de,ke=0;const Et=H-ee+1;let Ts=!1,Ju=0;const Ci=new Array(Et);for(I=0;I<Et;I++)Ci[I]=0;for(I=Q;I<=$;I++){const st=f[I];if(ke>=Et){Oe(st,T,k,!0);continue}let xt;if(st.key!=null)xt=fe.get(st.key);else for(de=ee;de<=H;de++)if(Ci[de-ee]===0&&Zn(st,_[de])){xt=de;break}xt===void 0?Oe(st,T,k,!0):(Ci[xt-ee]=I+1,xt>=Ju?Ju=xt:Ts=!0,m(st,_[xt],A,null,T,k,M,R,D),ke++)}const Zu=Ts?_E(Ci):$s;for(de=Zu.length-1,I=Et-1;I>=0;I--){const st=ee+I,xt=_[st],eh=st+1<W?_[st+1].el:E;Ci[I]===0?m(null,xt,A,eh,T,k,M,R,D):Ts&&(de<0||I!==Zu[de]?Ge(xt,A,eh,2):de--)}}},Ge=(f,_,A,E,T=null)=>{const{el:k,type:M,transition:R,children:D,shapeFlag:I}=f;if(I&6){Ge(f.component.subTree,_,A,E);return}if(I&128){f.suspense.move(_,A,E);return}if(I&64){M.move(f,_,A,se);return}if(M===ht){s(k,_,A);for(let $=0;$<D.length;$++)Ge(D[$],_,A,E);s(f.anchor,_,A);return}if(M===ao){b(f,_,A);return}if(E!==2&&I&1&&R)if(E===0)R.beforeEnter(k),s(k,_,A),Xe(()=>R.enter(k),T);else{const{leave:$,delayLeave:H,afterLeave:Q}=R,ee=()=>s(k,_,A),fe=()=>{$(k,()=>{ee(),Q&&Q()})};H?H(k,ee,fe):fe()}else s(k,_,A)},Oe=(f,_,A,E=!1,T=!1)=>{const{type:k,props:M,ref:R,children:D,dynamicChildren:I,shapeFlag:W,patchFlag:$,dirs:H}=f;if(R!=null&&xl(R,null,A,f,!0),W&256){_.ctx.deactivate(f);return}const Q=W&1&&H,ee=!oo(f);let fe;if(ee&&(fe=M&&M.onVnodeBeforeUnmount)&&Lt(fe,_,f),W&6)C(f.component,A,E);else{if(W&128){f.suspense.unmount(A,E);return}Q&&Kn(f,null,_,"beforeUnmount"),W&64?f.type.remove(f,_,A,T,se,E):I&&(k!==ht||$>0&&$&64)?L(I,_,A,!1,!0):(k===ht&&$&384||!T&&W&16)&&L(D,_,A),E&&At(f)}(ee&&(fe=M&&M.onVnodeUnmounted)||Q)&&Xe(()=>{fe&&Lt(fe,_,f),Q&&Kn(f,null,_,"unmounted")},A)},At=f=>{const{type:_,el:A,anchor:E,transition:T}=f;if(_===ht){vt(A,E);return}if(_===ao){N(f);return}const k=()=>{i(A),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:R}=T,D=()=>M(A,k);R?R(f.el,k,D):D()}else k()},vt=(f,_)=>{let A;for(;f!==_;)A=d(f),i(f),f=A;i(_)},C=(f,_,A)=>{const{bum:E,scope:T,update:k,subTree:M,um:R}=f;E&&so(E),T.stop(),k&&(k.active=!1,Oe(M,f,_,A)),R&&Xe(R,_),Xe(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},L=(f,_,A,E=!1,T=!1,k=0)=>{for(let M=k;M<f.length;M++)Oe(f[M],_,A,E,T)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,_,A)=>{f==null?_._vnode&&Oe(_._vnode,null,null,!0):m(_._vnode||null,f,_,null,null,null,A),uh(),pp(),_._vnode=f},se={p:m,um:Oe,m:Ge,r:At,mt:Ue,mc:B,pc:le,pbc:G,n:P,o:t};let be,X;return e&&([be,X]=e(se)),{render:F,hydrate:be,createApp:dE(F,be)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lp(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=yn(i[r]),a.el=o.el),n||Lp(o,a)),a.type===ra&&(a.el=o.el)}}function _E(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gE=t=>t.__isTeleport,ht=Symbol(void 0),ra=Symbol(void 0),Nt=Symbol(void 0),ao=Symbol(void 0),Ui=[];let wt=null;function zt(t=!1){Ui.push(wt=t?null:[])}function mE(){Ui.pop(),wt=Ui[Ui.length-1]||null}let nr=1;function Eh(t){nr+=t}function Mp(t){return t.dynamicChildren=nr>0?wt||$s:null,mE(),nr>0&&wt&&wt.push(t),t}function Ln(t,e,n,s,i,r){return Mp(x(t,e,n,s,i,r,!0))}function $p(t,e,n,s,i){return Mp(ge(t,e,n,s,i,!0))}function Ll(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const oa="__vInternal",Bp=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Ne(t)||J(t)?{i:it,r:t,k:e,f:!!n}:t:null;function x(t,e=null,n=null,s=0,i=null,r=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bp(e),ref:e&&lo(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return a?(Lc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),nr>0&&!o&&wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wt.push(l),l}const ge=AE;function AE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jv)&&(t=Nt),Ll(t)){const a=Mn(t,e,!0);return n&&Lc(a,n),nr>0&&!r&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(kE(t)&&(t=t.__vccOpts),e){e=vE(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=gc(a)),ye(l)&&(ip(l)&&!z(l)&&(l=Ve({},l)),e.style=_c(l))}const o=Le(t)?1:Bv(t)?128:gE(t)?64:ye(t)?4:J(t)?2:0;return x(t,e,n,s,i,o,r,!0)}function vE(t){return t?ip(t)||oa in t?Ve({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?yE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bp(a),ref:e&&e.ref?n&&i?z(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ml(t=" ",e=0){return ge(ra,null,t,e)}function xc(t,e){const n=ge(ao,null,t);return n.staticCount=e,n}function EE(t="",e=!1){return e?(zt(),$p(Nt,null,t)):ge(Nt,null,t)}function $t(t){return t==null||typeof t=="boolean"?ge(Nt):z(t)?ge(ht,null,t.slice()):typeof t=="object"?yn(t):ge(ra,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function Lc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Lc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(oa in e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[Ml(e)]):n=8);t.children=e,t.shapeFlag|=n}function yE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=gc([e.class,s.class]));else if(i==="style")e.style=_c([e.style,s.style]);else if(qo(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){ft(t,e,7,[n,s])}const bE=xp();let CE=0;function wE(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bE,r={uid:CE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new KA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Op(s,i),emitsOptions:gp(s,i),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Pv.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const TE=()=>Re||it,Ks=t=>{Re=t,t.scope.on()},ls=()=>{Re&&Re.scope.off(),Re=null};function Fp(t){return t.vnode.shapeFlag&4}let sr=!1;function IE(t,e=!1){sr=e;const{props:n,children:s}=t.vnode,i=Fp(t);oE(t,n,i,e),cE(t,s);const r=i?SE(t,e):void 0;return sr=!1,r}function SE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rp(new Proxy(t.ctx,eE));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?RE(t):null;Ks(t),ui();const r=Rn(s,t,0,[t.props,i]);if(hi(),ls(),jf(r)){if(r.then(ls,ls),e)return r.then(o=>{yh(t,o,e)}).catch(o=>{Zo(o,t,0)});t.asyncDep=r}else yh(t,r,e)}else Up(t,e)}function yh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=cp(e)),Up(t,n)}let bh;function Up(t,e,n){const s=t.type;if(!t.render){if(!e&&bh&&!s.render){const i=s.template||Dc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ve(Ve({isCustomElement:r,delimiters:a},o),l);s.render=bh(i,c)}}t.render=s.render||St}Ks(t),ui(),tE(t),hi(),ls()}function NE(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function RE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=NE(t))},slots:t.slots,emit:t.emit,expose:e}}function aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cp(rp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}}))}function OE(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function kE(t){return J(t)&&"__vccOpts"in t}const dt=(t,e)=>Sv(t,e,sr);function Hp(t,e,n){const s=arguments.length;return s===2?ye(e)&&!z(e)?Ll(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ll(n)&&(n=[n]),ge(t,e,n))}const DE=Symbol(""),PE=()=>Ht(DE),xE="3.2.47",LE="http://www.w3.org/2000/svg",es=typeof document<"u"?document:null,Ch=es&&es.createElement("template"),ME={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?es.createElementNS(LE,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ch.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ch.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $E(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function BE(t,e,n){const s=t.style,i=Le(n);if(n&&!i){if(e&&!Le(e))for(const r in e)n[r]==null&&$l(s,r,"");for(const r in n)$l(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const wh=/\s*!important$/;function $l(t,e,n){if(z(n))n.forEach(s=>$l(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=FE(t,e);wh.test(n)?t.setProperty(ci(s),n.replace(wh,""),"important"):t[s]=n}}const Th=["Webkit","Moz","ms"],Wa={};function FE(t,e){const n=Wa[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=Xo(s);for(let i=0;i<Th.length;i++){const r=Th[i]+s;if(r in t)return Wa[e]=r}return e}const Ih="http://www.w3.org/1999/xlink";function UE(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const r=BA(e);n==null||r&&!Hf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function HE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Hf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ts(t,e,n,s){t.addEventListener(e,n,s)}function WE(t,e,n,s){t.removeEventListener(e,n,s)}function VE(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=jE(e);if(s){const c=r[e]=KE(s,i);ts(t,a,c,l)}else o&&(WE(t,a,o,l),r[e]=void 0)}}const Sh=/(?:Once|Passive|Capture)$/;function jE(t){let e;if(Sh.test(t)){e={};let s;for(;s=t.match(Sh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}let Va=0;const GE=Promise.resolve(),QE=()=>Va||(GE.then(()=>Va=0),Va=Date.now());function KE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(zE(s,n.value),e,5,[s])};return n.value=t,n.attached=QE(),n}function zE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Nh=/^on[a-z]/,qE=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?$E(t,s,i):e==="style"?BE(t,n,s):qo(e)?mc(e)||VE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YE(t,e,s,i))?HE(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),UE(t,e,s,i))};function YE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Nh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Nh.test(e)&&Le(n)?!1:e in t}const XE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vv.props;const bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>so(e,n):e};function JE(t){t.target.composing=!0}function Rh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ti={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=bo(i);const r=s||i.props&&i.props.type==="number";ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bl(a)),t._assign(a)}),n&&ts(t,"change",()=>{t.value=t.value.trim()}),e||(ts(t,"compositionstart",JE),ts(t,"compositionend",Rh),ts(t,"change",Rh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=bo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&bl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ML={created(t,{value:e},n){t.checked=mo(e,n.props.value),t._assign=bo(n),ts(t,"change",()=>{t._assign(ZE(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=bo(s),e!==n&&(t.checked=mo(e,s.props.value))}};function ZE(t){return"_value"in t?t._value:t.value}const $L={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ii(t,!0),s.enter(t)):s.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t._vod:"none"}const ey=Ve({patchProp:qE},ME);let Oh;function ty(){return Oh||(Oh=fE(ey))}const ny=(...t)=>{const e=ty().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=sy(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function sy(t){return Le(t)?document.querySelector(t):t}const iy="/MyPortfolio/assets/Frank_logo-98eaea7f.svg";const la=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},yr=t=>(Rc("data-v-7ab89b72"),t=t(),Oc(),t),ry={class:"navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white sticky-top"},oy={class:"container-fluid"},ay=yr(()=>x("img",{src:iy,alt:""},null,-1)),ly=yr(()=>x("div",{class:"line1"},null,-1)),cy=yr(()=>x("div",{class:"line2"},null,-1)),uy=[ly,cy],hy={class:"collapse navbar-collapse",id:"navbarNav"},dy={class:"navbar-nav ms-lg-auto"},fy={class:"nav-item bt-border text-center ms-lg-auto"},py={class:"nav-item bt-border text-center ms-lg-auto"},_y=yr(()=>x("li",{class:"nav-item bt-border text-center ms-lg-auto"},[x("a",{href:"../assets/Resume/FrankResume.pdf",target:"_blank",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Resume")],-1)),gy=yr(()=>x("li",{class:"nav-item text-center ms-lg-auto"},[x("a",{href:"https://medium.com/@huikaichung1999",target:"_blank",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Medium")],-1)),my={__name:"Header",setup(t){function e(){const n=document.querySelector(".line1"),s=document.querySelector(".line2");n.classList.toggle("open"),s.classList.toggle("open")}return(n,s)=>{const i=ia("router-link");return zt(),Ln("nav",ry,[x("div",oy,[ge(i,{to:"/MyPortfolio",class:"navbar-brand"},{default:Ft(()=>[ay]),_:1}),x("button",{onClick:e,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},uy),x("div",hy,[x("ul",dy,[x("li",fy,[ge(i,{to:"/MyPortfolio/About",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Ft(()=>[Ml("About")]),_:1})]),x("li",py,[ge(i,{to:"/MyPortfolio/Work",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Ft(()=>[Ml("Work")]),_:1})]),_y,gy])])])])}}},Ay=la(my,[["__scopeId","data-v-7ab89b72"]]);const vy={},Ey={class:"bg-black text-bg-black text-center text-lg-start border-top border-1 border-white"},yy=xc('<div class="text-center m-2 p-0 text-secondary font-sm" data-v-b79f9a76> interested in working together? </div><div class="text-center" data-v-b79f9a76><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://www.linkedin.com/in/hui-kai-chung-970ab6140/" data-v-b79f9a76>-&gt; linkedin</a><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://medium.com/@huikaichung1999" data-v-b79f9a76>-&gt; Medium</a></div><div class="text-center" data-v-b79f9a76><a class="m-2 text-secondary text-decoration-none hover-underline font-sm" href="#" data-v-b79f9a76>hakuya8zai@gmail.com</a></div><div class="text-center p-0 m-2 text-secondary font-sm" data-v-b79f9a76> Copyright @2023 FrankChung. </div>',4),by=[yy];function Cy(t,e){return zt(),Ln("footer",Ey,by)}const wy=la(vy,[["render",Cy],["__scopeId","data-v-b79f9a76"]]),Ty={__name:"App",setup(t){return(e,n)=>{const s=ia("router-view");return zt(),Ln(ht,null,[ge(Ay),ge(s),ge(wy)],64)}}};var qe="top",ot="bottom",at="right",Ye="left",ca="auto",di=[qe,ot,at,Ye],fs="start",zs="end",Wp="clippingParents",Mc="viewport",Os="popper",Vp="reference",Bl=di.reduce(function(t,e){return t.concat([e+"-"+fs,e+"-"+zs])},[]),$c=[].concat(di,[ca]).reduce(function(t,e){return t.concat([e,e+"-"+fs,e+"-"+zs])},[]),jp="beforeRead",Gp="read",Qp="afterRead",Kp="beforeMain",zp="main",qp="afterMain",Yp="beforeWrite",Xp="write",Jp="afterWrite",Zp=[jp,Gp,Qp,Kp,zp,qp,Yp,Xp,Jp];function qt(t){return t?(t.nodeName||"").toLowerCase():null}function gt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ps(t){var e=gt(t).Element;return t instanceof e||t instanceof Element}function pt(t){var e=gt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Bc(t){if(typeof ShadowRoot>"u")return!1;var e=gt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Iy(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!pt(r)||!qt(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Sy(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!pt(i)||!qt(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Fc={name:"applyStyles",enabled:!0,phase:"write",fn:Iy,effect:Sy,requires:["computeStyles"]};function Wt(t){return t.split("-")[0]}var cs=Math.max,Co=Math.min,qs=Math.round;function Fl(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function e_(){return!/^((?!chrome|android).)*safari/i.test(Fl())}function Ys(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&pt(t)&&(i=t.offsetWidth>0&&qs(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&qs(s.height)/t.offsetHeight||1);var o=ps(t)?gt(t):window,a=o.visualViewport,l=!e_()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Uc(t){var e=Ys(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function t_(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Bc(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function cn(t){return gt(t).getComputedStyle(t)}function Ny(t){return["table","td","th"].indexOf(qt(t))>=0}function jn(t){return((ps(t)?t.ownerDocument:t.document)||window.document).documentElement}function ua(t){return qt(t)==="html"?t:t.assignedSlot||t.parentNode||(Bc(t)?t.host:null)||jn(t)}function kh(t){return!pt(t)||cn(t).position==="fixed"?null:t.offsetParent}function Ry(t){var e=/firefox/i.test(Fl()),n=/Trident/i.test(Fl());if(n&&pt(t)){var s=cn(t);if(s.position==="fixed")return null}var i=ua(t);for(Bc(i)&&(i=i.host);pt(i)&&["html","body"].indexOf(qt(i))<0;){var r=cn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function br(t){for(var e=gt(t),n=kh(t);n&&Ny(n)&&cn(n).position==="static";)n=kh(n);return n&&(qt(n)==="html"||qt(n)==="body"&&cn(n).position==="static")?e:n||Ry(t)||e}function Hc(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Hi(t,e,n){return cs(t,Co(e,n))}function Oy(t,e,n){var s=Hi(t,e,n);return s>n?n:s}function n_(){return{top:0,right:0,bottom:0,left:0}}function s_(t){return Object.assign({},n_(),t)}function i_(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var ky=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,s_(typeof e!="number"?e:i_(e,di))};function Dy(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Wt(n.placement),l=Hc(a),c=[Ye,at].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=ky(i.padding,n),d=Uc(r),p=l==="y"?qe:Ye,g=l==="y"?ot:at,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],v=br(r),w=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,b=m/2-y/2,N=h[p],U=w-d[u]-h[g],V=w/2-d[u]/2+b,Y=Hi(N,V,U),B=l;n.modifiersData[s]=(e={},e[B]=Y,e.centerOffset=Y-V,e)}}function Py(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||t_(e.elements.popper,i)&&(e.elements.arrow=i))}const r_={name:"arrow",enabled:!0,phase:"main",fn:Dy,effect:Py,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Xs(t){return t.split("-")[1]}var xy={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ly(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:qs(e*i)/i||0,y:qs(n*i)/i||0}}function Dh(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,m=g===void 0?0:g,y=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=y.x,m=y.y;var v=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),b=Ye,N=qe,U=window;if(c){var V=br(n),Y="clientHeight",B="clientWidth";if(V===gt(n)&&(V=jn(n),cn(V).position!=="static"&&a==="absolute"&&(Y="scrollHeight",B="scrollWidth")),V=V,i===qe||(i===Ye||i===at)&&r===zs){N=ot;var q=h&&V===U&&U.visualViewport?U.visualViewport.height:V[Y];m-=q-s.height,m*=l?1:-1}if(i===Ye||(i===qe||i===ot)&&r===zs){b=at;var G=h&&V===U&&U.visualViewport?U.visualViewport.width:V[B];p-=G-s.width,p*=l?1:-1}}var ae=Object.assign({position:a},c&&xy),_e=u===!0?Ly({x:p,y:m}):{x:p,y:m};if(p=_e.x,m=_e.y,l){var me;return Object.assign({},ae,(me={},me[N]=w?"0":"",me[b]=v?"0":"",me.transform=(U.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",me))}return Object.assign({},ae,(e={},e[N]=w?m+"px":"",e[b]=v?p+"px":"",e.transform="",e))}function My(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Wt(e.placement),variation:Xs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Dh(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Dh(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Wc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:My,data:{}};var jr={passive:!0};function $y(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=gt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,jr)}),a&&l.addEventListener("resize",n.update,jr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,jr)}),a&&l.removeEventListener("resize",n.update,jr)}}const Vc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$y,data:{}};var By={left:"right",right:"left",bottom:"top",top:"bottom"};function co(t){return t.replace(/left|right|bottom|top/g,function(e){return By[e]})}var Fy={start:"end",end:"start"};function Ph(t){return t.replace(/start|end/g,function(e){return Fy[e]})}function jc(t){var e=gt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Gc(t){return Ys(jn(t)).left+jc(t).scrollLeft}function Uy(t,e){var n=gt(t),s=jn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=e_();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Gc(t),y:l}}function Hy(t){var e,n=jn(t),s=jc(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=cs(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=cs(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Gc(t),l=-s.scrollTop;return cn(i||n).direction==="rtl"&&(a+=cs(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Qc(t){var e=cn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function o_(t){return["html","body","#document"].indexOf(qt(t))>=0?t.ownerDocument.body:pt(t)&&Qc(t)?t:o_(ua(t))}function Wi(t,e){var n;e===void 0&&(e=[]);var s=o_(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=gt(s),o=i?[r].concat(r.visualViewport||[],Qc(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Wi(ua(o)))}function Ul(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Wy(t,e){var n=Ys(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function xh(t,e,n){return e===Mc?Ul(Uy(t,n)):ps(e)?Wy(e,n):Ul(Hy(jn(t)))}function Vy(t){var e=Wi(ua(t)),n=["absolute","fixed"].indexOf(cn(t).position)>=0,s=n&&pt(t)?br(t):t;return ps(s)?e.filter(function(i){return ps(i)&&t_(i,s)&&qt(i)!=="body"}):[]}function jy(t,e,n,s){var i=e==="clippingParents"?Vy(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=xh(t,c,s);return l.top=cs(u.top,l.top),l.right=Co(u.right,l.right),l.bottom=Co(u.bottom,l.bottom),l.left=cs(u.left,l.left),l},xh(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function a_(t){var e=t.reference,n=t.element,s=t.placement,i=s?Wt(s):null,r=s?Xs(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case qe:l={x:o,y:e.y-n.height};break;case ot:l={x:o,y:e.y+e.height};break;case at:l={x:e.x+e.width,y:a};break;case Ye:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Hc(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case fs:l[c]=l[c]-(e[u]/2-n[u]/2);break;case zs:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Js(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Wp:a,c=n.rootBoundary,u=c===void 0?Mc:c,h=n.elementContext,d=h===void 0?Os:h,p=n.altBoundary,g=p===void 0?!1:p,m=n.padding,y=m===void 0?0:m,v=s_(typeof y!="number"?y:i_(y,di)),w=d===Os?Vp:Os,b=t.rects.popper,N=t.elements[g?w:d],U=jy(ps(N)?N:N.contextElement||jn(t.elements.popper),l,u,o),V=Ys(t.elements.reference),Y=a_({reference:V,element:b,strategy:"absolute",placement:i}),B=Ul(Object.assign({},b,Y)),q=d===Os?B:V,G={top:U.top-q.top+v.top,bottom:q.bottom-U.bottom+v.bottom,left:U.left-q.left+v.left,right:q.right-U.right+v.right},ae=t.modifiersData.offset;if(d===Os&&ae){var _e=ae[i];Object.keys(G).forEach(function(me){var Ue=[at,ot].indexOf(me)>=0?1:-1,nt=[qe,ot].indexOf(me)>=0?"y":"x";G[me]+=_e[nt]*Ue})}return G}function Gy(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?$c:l,u=Xs(s),h=u?a?Bl:Bl.filter(function(g){return Xs(g)===u}):di,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,m){return g[m]=Js(t,{placement:m,boundary:i,rootBoundary:r,padding:o})[Wt(m)],g},{});return Object.keys(p).sort(function(g,m){return p[g]-p[m]})}function Qy(t){if(Wt(t)===ca)return[];var e=co(t);return[Ph(t),e,Ph(e)]}function Ky(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,m=n.allowedAutoPlacements,y=e.options.placement,v=Wt(y),w=v===y,b=l||(w||!g?[co(y)]:Qy(y)),N=[y].concat(b).reduce(function(vt,C){return vt.concat(Wt(C)===ca?Gy(e,{placement:C,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):C)},[]),U=e.rects.reference,V=e.rects.popper,Y=new Map,B=!0,q=N[0],G=0;G<N.length;G++){var ae=N[G],_e=Wt(ae),me=Xs(ae)===fs,Ue=[qe,ot].indexOf(_e)>=0,nt=Ue?"width":"height",oe=Js(e,{placement:ae,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),te=Ue?me?at:Ye:me?ot:qe;U[nt]>V[nt]&&(te=co(te));var le=co(te),De=[];if(r&&De.push(oe[_e]<=0),a&&De.push(oe[te]<=0,oe[le]<=0),De.every(function(vt){return vt})){q=ae,B=!1;break}Y.set(ae,De)}if(B)for(var lt=g?3:1,Ge=function(C){var L=N.find(function(P){var F=Y.get(P);if(F)return F.slice(0,C).every(function(se){return se})});if(L)return q=L,"break"},Oe=lt;Oe>0;Oe--){var At=Ge(Oe);if(At==="break")break}e.placement!==q&&(e.modifiersData[s]._skip=!0,e.placement=q,e.reset=!0)}}const l_={name:"flip",enabled:!0,phase:"main",fn:Ky,requiresIfExists:["offset"],data:{_skip:!1}};function Lh(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Mh(t){return[qe,at,ot,Ye].some(function(e){return t[e]>=0})}function zy(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Js(e,{elementContext:"reference"}),a=Js(e,{altBoundary:!0}),l=Lh(o,s),c=Lh(a,i,r),u=Mh(l),h=Mh(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const c_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zy};function qy(t,e,n){var s=Wt(t),i=[Ye,qe].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Ye,at].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Yy(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=$c.reduce(function(u,h){return u[h]=qy(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const u_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yy};function Xy(t){var e=t.state,n=t.name;e.modifiersData[n]=a_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Kc={name:"popperOffsets",enabled:!0,phase:"read",fn:Xy,data:{}};function Jy(t){return t==="x"?"y":"x"}function Zy(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,p=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,y=Js(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),v=Wt(e.placement),w=Xs(e.placement),b=!w,N=Hc(v),U=Jy(N),V=e.modifiersData.popperOffsets,Y=e.rects.reference,B=e.rects.popper,q=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,G=typeof q=="number"?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),ae=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,_e={x:0,y:0};if(V){if(r){var me,Ue=N==="y"?qe:Ye,nt=N==="y"?ot:at,oe=N==="y"?"height":"width",te=V[N],le=te+y[Ue],De=te-y[nt],lt=p?-B[oe]/2:0,Ge=w===fs?Y[oe]:B[oe],Oe=w===fs?-B[oe]:-Y[oe],At=e.elements.arrow,vt=p&&At?Uc(At):{width:0,height:0},C=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:n_(),L=C[Ue],P=C[nt],F=Hi(0,Y[oe],vt[oe]),se=b?Y[oe]/2-lt-F-L-G.mainAxis:Ge-F-L-G.mainAxis,be=b?-Y[oe]/2+lt+F+P+G.mainAxis:Oe+F+P+G.mainAxis,X=e.elements.arrow&&br(e.elements.arrow),f=X?N==="y"?X.clientTop||0:X.clientLeft||0:0,_=(me=ae==null?void 0:ae[N])!=null?me:0,A=te+se-_-f,E=te+be-_,T=Hi(p?Co(le,A):le,te,p?cs(De,E):De);V[N]=T,_e[N]=T-te}if(a){var k,M=N==="x"?qe:Ye,R=N==="x"?ot:at,D=V[U],I=U==="y"?"height":"width",W=D+y[M],$=D-y[R],H=[qe,Ye].indexOf(v)!==-1,Q=(k=ae==null?void 0:ae[U])!=null?k:0,ee=H?W:D-Y[I]-B[I]-Q+G.altAxis,fe=H?D+Y[I]+B[I]-Q-G.altAxis:$,de=p&&H?Oy(ee,D,fe):Hi(p?ee:W,D,p?fe:$);V[U]=de,_e[U]=de-D}e.modifiersData[s]=_e}}const h_={name:"preventOverflow",enabled:!0,phase:"main",fn:Zy,requiresIfExists:["offset"]};function eb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function tb(t){return t===gt(t)||!pt(t)?jc(t):eb(t)}function nb(t){var e=t.getBoundingClientRect(),n=qs(e.width)/t.offsetWidth||1,s=qs(e.height)/t.offsetHeight||1;return n!==1||s!==1}function sb(t,e,n){n===void 0&&(n=!1);var s=pt(e),i=pt(e)&&nb(e),r=jn(e),o=Ys(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((qt(e)!=="body"||Qc(r))&&(a=tb(e)),pt(e)?(l=Ys(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Gc(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function ib(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function rb(t){var e=ib(t);return Zp.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function ob(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function ab(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var $h={placement:"bottom",modifiers:[],strategy:"absolute"};function Bh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ha(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?$h:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},$h,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(v){var w=typeof v=="function"?v(u.options):v;m(),u.options=Object.assign({},r,u.options,w),u.scrollParents={reference:ps(a)?Wi(a):a.contextElement?Wi(a.contextElement):[],popper:Wi(l)};var b=rb(ab([].concat(s,u.options.modifiers)));return u.orderedModifiers=b.filter(function(N){return N.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var v=u.elements,w=v.reference,b=v.popper;if(Bh(w,b)){u.rects={reference:sb(w,br(b),u.options.strategy==="fixed"),popper:Uc(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(G){return u.modifiersData[G.name]=Object.assign({},G.data)});for(var N=0;N<u.orderedModifiers.length;N++){if(u.reset===!0){u.reset=!1,N=-1;continue}var U=u.orderedModifiers[N],V=U.fn,Y=U.options,B=Y===void 0?{}:Y,q=U.name;typeof V=="function"&&(u=V({state:u,options:B,name:q,instance:p})||u)}}}},update:ob(function(){return new Promise(function(y){p.forceUpdate(),y(u)})}),destroy:function(){m(),d=!0}};if(!Bh(a,l))return p;p.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function g(){u.orderedModifiers.forEach(function(y){var v=y.name,w=y.options,b=w===void 0?{}:w,N=y.effect;if(typeof N=="function"){var U=N({state:u,name:v,instance:p,options:b}),V=function(){};h.push(U||V)}})}function m(){h.forEach(function(y){return y()}),h=[]}return p}}var lb=ha(),cb=[Vc,Kc,Wc,Fc],ub=ha({defaultModifiers:cb}),hb=[Vc,Kc,Wc,Fc,u_,l_,h_,r_,c_],zc=ha({defaultModifiers:hb});const d_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qp,afterRead:Qp,afterWrite:Jp,applyStyles:Fc,arrow:r_,auto:ca,basePlacements:di,beforeMain:Kp,beforeRead:jp,beforeWrite:Yp,bottom:ot,clippingParents:Wp,computeStyles:Wc,createPopper:zc,createPopperBase:lb,createPopperLite:ub,detectOverflow:Js,end:zs,eventListeners:Vc,flip:l_,hide:c_,left:Ye,main:zp,modifierPhases:Zp,offset:u_,placements:$c,popper:Os,popperGenerator:ha,popperOffsets:Kc,preventOverflow:h_,read:Gp,reference:Vp,right:at,start:fs,top:qe,variationPlacements:Bl,viewport:Mc,write:Xp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const db=1e6,fb=1e3,Hl="transitionend",pb=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),_b=t=>{do t+=Math.floor(Math.random()*db);while(document.getElementById(t));return t},f_=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},p_=t=>{const e=f_(t);return e&&document.querySelector(e)?e:null},sn=t=>{const e=f_(t);return e?document.querySelector(e):null},gb=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*fb)},__=t=>{t.dispatchEvent(new Event(Hl))},rn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),$n=t=>rn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,fi=t=>{if(!rn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Bn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",g_=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?g_(t.parentNode):null},wo=()=>{},Cr=t=>{t.offsetHeight},m_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ja=[],mb=t=>{document.readyState==="loading"?(ja.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of ja)e()}),ja.push(t)):t()},_t=()=>document.documentElement.dir==="rtl",mt=t=>{mb(()=>{const e=m_();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Zt=t=>{typeof t=="function"&&t()},A_=(t,e,n=!0)=>{if(!n){Zt(t);return}const s=5,i=gb(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Hl,o),Zt(t))};e.addEventListener(Hl,o),setTimeout(()=>{r||__(e)},i)},qc=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},Ab=/[^.]*(?=\..*)\.|.*/,vb=/\..*/,Eb=/::\d+$/,Ga={};let Fh=1;const v_={mouseenter:"mouseover",mouseleave:"mouseout"},yb=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E_(t,e){return e&&`${e}::${Fh++}`||t.uidEvent||Fh++}function y_(t){const e=E_(t);return t.uidEvent=e,Ga[e]=Ga[e]||{},Ga[e]}function bb(t,e){return function n(s){return Yc(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function Cb(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Yc(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function b_(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function C_(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=w_(t);return yb.has(r)||(r=t),[s,i,r]}function Uh(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=C_(e,n,s);e in v_&&(o=(g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)})(o));const l=y_(t),c=l[a]||(l[a]={}),u=b_(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=E_(o,e.replace(Ab,"")),d=r?Cb(t,n,o):bb(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function Wl(t,e,n,s,i){const r=b_(e[n],s,i);r&&(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function wb(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];Wl(t,e,n,o.callable,o.delegationSelector)}}function w_(t){return t=t.replace(vb,""),v_[t]||t}const S={on(t,e,n,s){Uh(t,e,n,s,!1)},one(t,e,n,s){Uh(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=C_(e,n,s),a=o!==e,l=y_(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;Wl(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))wb(t,l,h,e.slice(1));for(const h of Object.keys(c)){const d=h.replace(Eb,"");if(!a||e.includes(d)){const p=c[h];Wl(t,l,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=m_(),i=w_(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=Yc(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Yc(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const An=new Map,Qa={set(t,e,n){An.has(t)||An.set(t,new Map);const s=An.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return An.has(t)&&An.get(t).get(e)||null},remove(t,e){if(!An.has(t))return;const n=An.get(t);n.delete(e),n.size===0&&An.delete(t)}};function Hh(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Ka(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const on={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Ka(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Ka(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Hh(t.dataset[s])}return e},getDataAttribute(t,e){return Hh(t.getAttribute(`data-bs-${Ka(e)}`))}};class wr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=rn(n)?on.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...rn(n)?on.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=rn(r)?"element":pb(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const Tb="5.2.3";class Dt extends wr{constructor(e,n){super(),e=$n(e),e&&(this._element=e,this._config=this._getConfig(n),Qa.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Qa.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){A_(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Qa.get($n(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return Tb}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const da=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Bn(this))return;const r=sn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},Ib="alert",Sb="bs.alert",T_=`.${Sb}`,Nb=`close${T_}`,Rb=`closed${T_}`,Ob="fade",kb="show";class fa extends Dt{static get NAME(){return Ib}close(){if(S.trigger(this._element,Nb).defaultPrevented)return;this._element.classList.remove(kb);const n=this._element.classList.contains(Ob);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,Rb),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=fa.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}da(fa,"close");mt(fa);const Db="button",Pb="bs.button",xb=`.${Pb}`,Lb=".data-api",Mb="active",Wh='[data-bs-toggle="button"]',$b=`click${xb}${Lb}`;class pa extends Dt{static get NAME(){return Db}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Mb))}static jQueryInterface(e){return this.each(function(){const n=pa.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,$b,Wh,t=>{t.preventDefault();const e=t.target.closest(Wh);pa.getOrCreateInstance(e).toggle()});mt(pa);const Z={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Bn(n)&&fi(n))}},Bb="swipe",pi=".bs.swipe",Fb=`touchstart${pi}`,Ub=`touchmove${pi}`,Hb=`touchend${pi}`,Wb=`pointerdown${pi}`,Vb=`pointerup${pi}`,jb="touch",Gb="pen",Qb="pointer-event",Kb=40,zb={endCallback:null,leftCallback:null,rightCallback:null},qb={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class To extends wr{constructor(e,n){super(),this._element=e,!(!e||!To.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return zb}static get DefaultType(){return qb}static get NAME(){return Bb}dispose(){S.off(this._element,pi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Zt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Kb)return;const n=e/this._deltaX;this._deltaX=0,n&&Zt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,Wb,e=>this._start(e)),S.on(this._element,Vb,e=>this._end(e)),this._element.classList.add(Qb)):(S.on(this._element,Fb,e=>this._start(e)),S.on(this._element,Ub,e=>this._move(e)),S.on(this._element,Hb,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Gb||e.pointerType===jb)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Yb="carousel",Xb="bs.carousel",Gn=`.${Xb}`,I_=".data-api",Jb="ArrowLeft",Zb="ArrowRight",eC=500,Si="next",Is="prev",ks="left",uo="right",tC=`slide${Gn}`,za=`slid${Gn}`,nC=`keydown${Gn}`,sC=`mouseenter${Gn}`,iC=`mouseleave${Gn}`,rC=`dragstart${Gn}`,oC=`load${Gn}${I_}`,aC=`click${Gn}${I_}`,S_="carousel",Gr="active",lC="slide",cC="carousel-item-end",uC="carousel-item-start",hC="carousel-item-next",dC="carousel-item-prev",N_=".active",R_=".carousel-item",fC=N_+R_,pC=".carousel-item img",_C=".carousel-indicators",gC="[data-bs-slide], [data-bs-slide-to]",mC='[data-bs-ride="carousel"]',AC={[Jb]:uo,[Zb]:ks},vC={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},EC={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Tr extends Dt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Z.findOne(_C,this._element),this._addEventListeners(),this._config.ride===S_&&this.cycle()}static get Default(){return vC}static get DefaultType(){return EC}static get NAME(){return Yb}next(){this._slide(Si)}nextWhenVisible(){!document.hidden&&fi(this._element)&&this.next()}prev(){this._slide(Is)}pause(){this._isSliding&&__(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,za,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,za,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Si:Is;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,nC,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,sC,()=>this.pause()),S.on(this._element,iC,()=>this._maybeEnableCycle())),this._config.touch&&To.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Z.find(pC,this._element))S.on(s,rC,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ks)),rightCallback:()=>this._slide(this._directionToOrder(uo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),eC+this._config.interval))}};this._swipeHelper=new To(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=AC[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=Z.findOne(N_,this._indicatorsElement);n.classList.remove(Gr),n.removeAttribute("aria-current");const s=Z.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Gr),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Si,r=n||qc(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(tC).defaultPrevented||!s||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?uC:cC,h=i?hC:dC;r.classList.add(h),Cr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Gr),s.classList.remove(Gr,h,u),this._isSliding=!1,a(za)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(lC)}_getActive(){return Z.findOne(fC,this._element)}_getItems(){return Z.find(R_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return _t()?e===ks?Is:Si:e===ks?Si:Is}_orderToDirection(e){return _t()?e===Is?ks:uo:e===Is?uo:ks}static jQueryInterface(e){return this.each(function(){const n=Tr.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,aC,gC,function(t){const e=sn(this);if(!e||!e.classList.contains(S_))return;t.preventDefault();const n=Tr.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(on.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,oC,()=>{const t=Z.find(mC);for(const e of t)Tr.getOrCreateInstance(e)});mt(Tr);const yC="collapse",bC="bs.collapse",Ir=`.${bC}`,CC=".data-api",wC=`show${Ir}`,TC=`shown${Ir}`,IC=`hide${Ir}`,SC=`hidden${Ir}`,NC=`click${Ir}${CC}`,qa="show",xs="collapse",Qr="collapsing",RC="collapsed",OC=`:scope .${xs} .${xs}`,kC="collapse-horizontal",DC="width",PC="height",xC=".collapse.show, .collapse.collapsing",Vl='[data-bs-toggle="collapse"]',LC={parent:null,toggle:!0},MC={parent:"(null|element)",toggle:"boolean"};class ir extends Dt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=Z.find(Vl);for(const i of s){const r=p_(i),o=Z.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return LC}static get DefaultType(){return MC}static get NAME(){return yC}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(xC).filter(a=>a!==this._element).map(a=>ir.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,wC).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(xs),this._element.classList.add(Qr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Qr),this._element.classList.add(xs,qa),this._element.style[s]="",S.trigger(this._element,TC)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,IC).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Cr(this._element),this._element.classList.add(Qr),this._element.classList.remove(xs,qa);for(const i of this._triggerArray){const r=sn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Qr),this._element.classList.add(xs),S.trigger(this._element,SC)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(qa)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=$n(e.parent),e}_getDimension(){return this._element.classList.contains(kC)?DC:PC}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Vl);for(const n of e){const s=sn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=Z.find(OC,this._config.parent);return Z.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(RC,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=ir.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,NC,Vl,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=p_(this),n=Z.find(e);for(const s of n)ir.getOrCreateInstance(s,{toggle:!1}).toggle()});mt(ir);const Vh="dropdown",$C="bs.dropdown",bs=`.${$C}`,Xc=".data-api",BC="Escape",jh="Tab",FC="ArrowUp",Gh="ArrowDown",UC=2,HC=`hide${bs}`,WC=`hidden${bs}`,VC=`show${bs}`,jC=`shown${bs}`,O_=`click${bs}${Xc}`,k_=`keydown${bs}${Xc}`,GC=`keyup${bs}${Xc}`,Ds="show",QC="dropup",KC="dropend",zC="dropstart",qC="dropup-center",YC="dropdown-center",ss='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',XC=`${ss}.${Ds}`,ho=".dropdown-menu",JC=".navbar",ZC=".navbar-nav",ew=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",tw=_t()?"top-end":"top-start",nw=_t()?"top-start":"top-end",sw=_t()?"bottom-end":"bottom-start",iw=_t()?"bottom-start":"bottom-end",rw=_t()?"left-start":"right-start",ow=_t()?"right-start":"left-start",aw="top",lw="bottom",cw={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},uw={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Vt extends Dt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Z.next(this._element,ho)[0]||Z.prev(this._element,ho)[0]||Z.findOne(ho,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return cw}static get DefaultType(){return uw}static get NAME(){return Vh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Bn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,VC,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ZC))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",wo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ds),this._element.classList.add(Ds),S.trigger(this._element,jC,e)}}hide(){if(Bn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,HC,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",wo);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ds),this._element.classList.remove(Ds),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,WC,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!rn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Vh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof d_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:rn(this._config.reference)?e=$n(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=zc(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Ds)}_getPlacement(){const e=this._parent;if(e.classList.contains(KC))return rw;if(e.classList.contains(zC))return ow;if(e.classList.contains(qC))return aw;if(e.classList.contains(YC))return lw;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(QC)?n?nw:tw:n?iw:sw}_detectNavbar(){return this._element.closest(JC)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=Z.find(ew,this._menu).filter(i=>fi(i));s.length&&qc(s,n,e===Gh,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Vt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===UC||e.type==="keyup"&&e.key!==jh)return;const n=Z.find(XC);for(const s of n){const i=Vt.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===jh||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===BC,i=[FC,Gh].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(ss)?this:Z.prev(this,ss)[0]||Z.next(this,ss)[0]||Z.findOne(ss,e.delegateTarget.parentNode),o=Vt.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,k_,ss,Vt.dataApiKeydownHandler);S.on(document,k_,ho,Vt.dataApiKeydownHandler);S.on(document,O_,Vt.clearMenus);S.on(document,GC,Vt.clearMenus);S.on(document,O_,ss,function(t){t.preventDefault(),Vt.getOrCreateInstance(this).toggle()});mt(Vt);const Qh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Kh=".sticky-top",Kr="padding-right",zh="margin-right";class jl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Kr,n=>n+e),this._setElementAttributes(Qh,Kr,n=>n+e),this._setElementAttributes(Kh,zh,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Kr),this._resetElementAttributes(Qh,Kr),this._resetElementAttributes(Kh,zh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&on.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=on.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}on.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(rn(e)){n(e);return}for(const s of Z.find(e,this._element))n(s)}}const D_="backdrop",hw="fade",qh="show",Yh=`mousedown.bs.${D_}`,dw={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},fw={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class P_ extends wr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return dw}static get DefaultType(){return fw}static get NAME(){return D_}show(e){if(!this._config.isVisible){Zt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Cr(n),n.classList.add(qh),this._emulateAnimation(()=>{Zt(e)})}hide(e){if(!this._config.isVisible){Zt(e);return}this._getElement().classList.remove(qh),this._emulateAnimation(()=>{this.dispose(),Zt(e)})}dispose(){this._isAppended&&(S.off(this._element,Yh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(hw),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=$n(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,Yh,()=>{Zt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){A_(e,this._getElement(),this._config.isAnimated)}}const pw="focustrap",_w="bs.focustrap",Io=`.${_w}`,gw=`focusin${Io}`,mw=`keydown.tab${Io}`,Aw="Tab",vw="forward",Xh="backward",Ew={autofocus:!0,trapElement:null},yw={autofocus:"boolean",trapElement:"element"};class x_ extends wr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ew}static get DefaultType(){return yw}static get NAME(){return pw}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Io),S.on(document,gw,e=>this._handleFocusin(e)),S.on(document,mw,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Io))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=Z.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Xh?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===Aw&&(this._lastTabNavDirection=e.shiftKey?Xh:vw)}}const bw="modal",Cw="bs.modal",Pt=`.${Cw}`,ww=".data-api",Tw="Escape",Iw=`hide${Pt}`,Sw=`hidePrevented${Pt}`,L_=`hidden${Pt}`,M_=`show${Pt}`,Nw=`shown${Pt}`,Rw=`resize${Pt}`,Ow=`click.dismiss${Pt}`,kw=`mousedown.dismiss${Pt}`,Dw=`keydown.dismiss${Pt}`,Pw=`click${Pt}${ww}`,Jh="modal-open",xw="fade",Zh="show",Ya="modal-static",Lw=".modal.show",Mw=".modal-dialog",$w=".modal-body",Bw='[data-bs-toggle="modal"]',Fw={backdrop:!0,focus:!0,keyboard:!0},Uw={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Zs extends Dt{constructor(e,n){super(e,n),this._dialog=Z.findOne(Mw,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new jl,this._addEventListeners()}static get Default(){return Fw}static get DefaultType(){return Uw}static get NAME(){return bw}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,M_,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Jh),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,Iw).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Zh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,Pt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new P_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new x_({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Z.findOne($w,this._dialog);n&&(n.scrollTop=0),Cr(this._element),this._element.classList.add(Zh);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,Nw,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,Dw,e=>{if(e.key===Tw){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,Rw,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,kw,e=>{S.one(this._element,Ow,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Jh),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,L_)})}_isAnimated(){return this._element.classList.contains(xw)}_triggerBackdropTransition(){if(S.trigger(this._element,Sw).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Ya)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Ya),this._queueCallback(()=>{this._element.classList.remove(Ya),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=_t()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=_t()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Zs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,Pw,Bw,function(t){const e=sn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,M_,i=>{i.defaultPrevented||S.one(e,L_,()=>{fi(this)&&this.focus()})});const n=Z.findOne(Lw);n&&Zs.getInstance(n).hide(),Zs.getOrCreateInstance(e).toggle(this)});da(Zs);mt(Zs);const Hw="offcanvas",Ww="bs.offcanvas",fn=`.${Ww}`,$_=".data-api",Vw=`load${fn}${$_}`,jw="Escape",ed="show",td="showing",nd="hiding",Gw="offcanvas-backdrop",B_=".offcanvas.show",Qw=`show${fn}`,Kw=`shown${fn}`,zw=`hide${fn}`,sd=`hidePrevented${fn}`,F_=`hidden${fn}`,qw=`resize${fn}`,Yw=`click${fn}${$_}`,Xw=`keydown.dismiss${fn}`,Jw='[data-bs-toggle="offcanvas"]',Zw={backdrop:!0,keyboard:!0,scroll:!1},eT={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Fn extends Dt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Zw}static get DefaultType(){return eT}static get NAME(){return Hw}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,Qw,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new jl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(td);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ed),this._element.classList.remove(td),S.trigger(this._element,Kw,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,zw).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(nd),this._backdrop.hide();const n=()=>{this._element.classList.remove(ed,nd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new jl().reset(),S.trigger(this._element,F_)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,sd);return}this.hide()},n=Boolean(this._config.backdrop);return new P_({className:Gw,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new x_({trapElement:this._element})}_addEventListeners(){S.on(this._element,Xw,e=>{if(e.key===jw){if(!this._config.keyboard){S.trigger(this._element,sd);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Fn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,Yw,Jw,function(t){const e=sn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Bn(this))return;S.one(e,F_,()=>{fi(this)&&this.focus()});const n=Z.findOne(B_);n&&n!==e&&Fn.getInstance(n).hide(),Fn.getOrCreateInstance(e).toggle(this)});S.on(window,Vw,()=>{for(const t of Z.find(B_))Fn.getOrCreateInstance(t).show()});S.on(window,qw,()=>{for(const t of Z.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Fn.getOrCreateInstance(t).hide()});da(Fn);mt(Fn);const tT=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),nT=/^aria-[\w-]*$/i,sT=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,iT=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,rT=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?tT.has(n)?Boolean(sT.test(t.nodeValue)||iT.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},U_={"*":["class","dir","id","lang","role",nT],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function oT(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)rT(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const aT="TemplateFactory",lT={allowList:U_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},cT={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},uT={entry:"(string|element|function|null)",selector:"(string|element)"};class hT extends wr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return lT}static get DefaultType(){return cT}static get NAME(){return aT}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},uT)}_setContent(e,n,s){const i=Z.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(rn(n)){this._putElementInTemplate($n(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?oT(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const dT="tooltip",fT=new Set(["sanitize","allowList","sanitizeFn"]),Xa="fade",pT="modal",zr="show",_T=".tooltip-inner",id=`.${pT}`,rd="hide.bs.modal",Ni="hover",Ja="focus",gT="click",mT="manual",AT="hide",vT="hidden",ET="show",yT="shown",bT="inserted",CT="click",wT="focusin",TT="focusout",IT="mouseenter",ST="mouseleave",NT={AUTO:"auto",TOP:"top",RIGHT:_t()?"left":"right",BOTTOM:"bottom",LEFT:_t()?"right":"left"},RT={allowList:U_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},OT={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class _i extends Dt{constructor(e,n){if(typeof d_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return RT}static get DefaultType(){return OT}static get NAME(){return dT}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(id),rd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(ET)),s=(g_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(bT))),this._popper=this._createPopper(i),i.classList.add(zr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",wo);const o=()=>{S.trigger(this._element,this.constructor.eventName(yT)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(AT)).defaultPrevented)return;if(this._getTipElement().classList.remove(zr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",wo);this._activeTrigger[gT]=!1,this._activeTrigger[Ja]=!1,this._activeTrigger[Ni]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(vT)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Xa,zr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=_b(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Xa),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new hT({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[_T]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xa)}_isShown(){return this.tip&&this.tip.classList.contains(zr)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=NT[n.toUpperCase()];return zc(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(CT),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==mT){const s=n===Ni?this.constructor.eventName(IT):this.constructor.eventName(wT),i=n===Ni?this.constructor.eventName(ST):this.constructor.eventName(TT);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Ja:Ni]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Ja:Ni]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(id),rd,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=on.getDataAttributes(this._element);for(const s of Object.keys(n))fT.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:$n(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=_i.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}mt(_i);const kT="popover",DT=".popover-header",PT=".popover-body",xT={..._i.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},LT={..._i.DefaultType,content:"(null|string|element|function)"};class Jc extends _i{static get Default(){return xT}static get DefaultType(){return LT}static get NAME(){return kT}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[DT]:this._getTitle(),[PT]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Jc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}mt(Jc);const MT="scrollspy",$T="bs.scrollspy",Zc=`.${$T}`,BT=".data-api",FT=`activate${Zc}`,od=`click${Zc}`,UT=`load${Zc}${BT}`,HT="dropdown-item",Ss="active",WT='[data-bs-spy="scroll"]',Za="[href]",VT=".nav, .list-group",ad=".nav-link",jT=".nav-item",GT=".list-group-item",QT=`${ad}, ${jT} > ${ad}, ${GT}`,KT=".dropdown",zT=".dropdown-toggle",qT={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},YT={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _a extends Dt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return qT}static get DefaultType(){return YT}static get NAME(){return MT}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=$n(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,od),S.on(this._config.target,od,Za,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Z.find(Za,this._config.target);for(const n of e){if(!n.hash||Bn(n))continue;const s=Z.findOne(n.hash,this._element);fi(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ss),this._activateParents(e),S.trigger(this._element,FT,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(HT)){Z.findOne(zT,e.closest(KT)).classList.add(Ss);return}for(const n of Z.parents(e,VT))for(const s of Z.prev(n,QT))s.classList.add(Ss)}_clearActiveClass(e){e.classList.remove(Ss);const n=Z.find(`${Za}.${Ss}`,e);for(const s of n)s.classList.remove(Ss)}static jQueryInterface(e){return this.each(function(){const n=_a.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,UT,()=>{for(const t of Z.find(WT))_a.getOrCreateInstance(t)});mt(_a);const XT="tab",JT="bs.tab",Cs=`.${JT}`,ZT=`hide${Cs}`,eI=`hidden${Cs}`,tI=`show${Cs}`,nI=`shown${Cs}`,sI=`click${Cs}`,iI=`keydown${Cs}`,rI=`load${Cs}`,oI="ArrowLeft",ld="ArrowRight",aI="ArrowUp",cd="ArrowDown",is="active",ud="fade",el="show",lI="dropdown",cI=".dropdown-toggle",uI=".dropdown-menu",tl=":not(.dropdown-toggle)",hI='.list-group, .nav, [role="tablist"]',dI=".nav-item, .list-group-item",fI=`.nav-link${tl}, .list-group-item${tl}, [role="tab"]${tl}`,H_='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',nl=`${fI}, ${H_}`,pI=`.${is}[data-bs-toggle="tab"], .${is}[data-bs-toggle="pill"], .${is}[data-bs-toggle="list"]`;class ei extends Dt{constructor(e){super(e),this._parent=this._element.closest(hI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,iI,n=>this._keydown(n)))}static get NAME(){return XT}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,ZT,{relatedTarget:e}):null;S.trigger(e,tI,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(is),this._activate(sn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(el);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,nI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(ud))}_deactivate(e,n){if(!e)return;e.classList.remove(is),e.blur(),this._deactivate(sn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(el);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,eI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(ud))}_keydown(e){if(![oI,ld,aI,cd].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[ld,cd].includes(e.key),s=qc(this._getChildren().filter(i=>!Bn(i)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),ei.getOrCreateInstance(s).show())}_getChildren(){return Z.find(nl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=sn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(lI))return;const i=(r,o)=>{const a=Z.findOne(r,s);a&&a.classList.toggle(o,n)};i(cI,is),i(uI,el),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(is)}_getInnerElement(e){return e.matches(nl)?e:Z.findOne(nl,e)}_getOuterElement(e){return e.closest(dI)||e}static jQueryInterface(e){return this.each(function(){const n=ei.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,sI,H_,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Bn(this)&&ei.getOrCreateInstance(this).show()});S.on(window,rI,()=>{for(const t of Z.find(pI))ei.getOrCreateInstance(t)});mt(ei);const _I="toast",gI="bs.toast",Qn=`.${gI}`,mI=`mouseover${Qn}`,AI=`mouseout${Qn}`,vI=`focusin${Qn}`,EI=`focusout${Qn}`,yI=`hide${Qn}`,bI=`hidden${Qn}`,CI=`show${Qn}`,wI=`shown${Qn}`,TI="fade",hd="hide",qr="show",Yr="showing",II={animation:"boolean",autohide:"boolean",delay:"number"},SI={animation:!0,autohide:!0,delay:5e3};class ga extends Dt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return SI}static get DefaultType(){return II}static get NAME(){return _I}show(){if(S.trigger(this._element,CI).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(TI);const n=()=>{this._element.classList.remove(Yr),S.trigger(this._element,wI),this._maybeScheduleHide()};this._element.classList.remove(hd),Cr(this._element),this._element.classList.add(qr,Yr),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,yI).defaultPrevented)return;const n=()=>{this._element.classList.add(hd),this._element.classList.remove(Yr,qr),S.trigger(this._element,bI)};this._element.classList.add(Yr),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(qr),super.dispose()}isShown(){return this._element.classList.contains(qr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,mI,e=>this._onInteraction(e,!0)),S.on(this._element,AI,e=>this._onInteraction(e,!1)),S.on(this._element,vI,e=>this._onInteraction(e,!0)),S.on(this._element,EI,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=ga.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}da(ga);mt(ga);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function NI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function sl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const Vi=()=>{},Ot=Array.isArray,RI=/\/$/,OI=t=>t.replace(RI,"");function il(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=xI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function kI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ti(e.matched[s],n.matched[i])&&W_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ti(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function W_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PI(t[n],e[n]))return!1;return!0}function PI(t,e){return Ot(t)?fd(t,e):Ot(e)?fd(e,t):t===e}function fd(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function xI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var rr;(function(t){t.pop="pop",t.push="push"})(rr||(rr={}));var ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ji||(ji={}));function LI(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),OI(t)}const MI=/^[^#]+#/;function $I(t,e){return t.replace(MI,"#")+e}function BI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function FI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=BI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pd(t,e){return(history.state?history.state.position-e:-1)+t}const Gl=new Map;function UI(t,e){Gl.set(t,e)}function HI(t){const e=Gl.get(t);return Gl.delete(t),e}let WI=()=>location.protocol+"//"+location.host;function V_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),dd(l,"")}return dd(n,t)+s+i}function VI(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=V_(t,location),g=n.value,m=e.value;let y=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}y=m?d.position-m.position:0}else s(p);i.forEach(v=>{v(n.value,g,{delta:y,type:rr.pop,direction:y?y>0?ji.forward:ji.back:ji.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:ma()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function _d(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ma():null}}function jI(t){const{history:e,location:n}=window,s={value:V_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:WI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,_d(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:ma()});r(u.current,u,!0);const h=pe({},_d(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function GI(t){t=LI(t);const e=jI(t),n=VI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:$I.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function QI(t){return typeof t=="string"||t&&typeof t=="object"}function j_(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G_=Symbol("");var gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gd||(gd={}));function ni(t,e){return pe(new Error,{type:t,[G_]:!0},e)}function Xt(t,e){return t instanceof Error&&G_ in t&&(e==null||!!(t.type&e))}const md="[^/]+?",KI={sensitive:!1,strict:!1,start:!0,end:!0},zI=/[.+*?^${}()[\]/\\]/g;function qI(t,e){const n=pe({},KI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(zI,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:y,regexp:v}=d;r.push({name:g,repeatable:m,optional:y});const w=v||md;if(w!==md){p+=10;try{new RegExp(`(${w})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+N.message)}}let b=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),i+=b,p+=20,y&&(p+=-8),m&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:y}=p,v=g in c?c[g]:"";if(Ot(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Ot(v)?v.join("/"):v;if(!w)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function YI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function XI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=YI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ad(s))return 1;if(Ad(i))return-1}return i.length-s.length}function Ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JI={type:0,value:""},ZI=/[a-zA-Z0-9_]/;function eS(t){if(!t)return[[]];if(t==="/")return[[JI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:ZI.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function tS(t,e,n){const s=qI(eS(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function nS(t,e){const n=[],s=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,g=sS(u);g.aliasOf=d&&d.record;const m=yd(e,u),y=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of b)y.push(pe({},g,{components:d?d.record.components:g.components,path:N,aliasOf:d?d.record:g}))}let v,w;for(const b of y){const{path:N}=b;if(h&&N[0]!=="/"){const U=h.record.path,V=U[U.length-1]==="/"?"":"/";b.path=h.record.path+(N&&V+N)}if(v=tS(b,h,m),d?d.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),p&&u.name&&!Ed(v)&&o(u.name)),g.children){const U=g.children;for(let V=0;V<U.length;V++)r(U[V],v,d&&d.children[V])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return w?()=>{o(w)}:Vi}function o(u){if(j_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&XI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Q_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ed(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ni(1,{location:u});m=d.record.name,p=pe(vd(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&vd(u.params,d.keys.map(w=>w.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(w=>w.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw ni(1,{location:u,currentLocation:h});m=d.record.name,p=pe({},h.params,u.params),g=d.stringify(p)}const y=[];let v=d;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:y,meta:rS(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function vd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rS(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Q_(t,e){return e.children.some(n=>n===t||Q_(t,n))}const K_=/#/g,oS=/&/g,aS=/\//g,lS=/=/g,cS=/\?/g,z_=/\+/g,uS=/%5B/g,hS=/%5D/g,q_=/%5E/g,dS=/%60/g,Y_=/%7B/g,fS=/%7C/g,X_=/%7D/g,pS=/%20/g;function eu(t){return encodeURI(""+t).replace(fS,"|").replace(uS,"[").replace(hS,"]")}function _S(t){return eu(t).replace(Y_,"{").replace(X_,"}").replace(q_,"^")}function Ql(t){return eu(t).replace(z_,"%2B").replace(pS,"+").replace(K_,"%23").replace(oS,"%26").replace(dS,"`").replace(Y_,"{").replace(X_,"}").replace(q_,"^")}function gS(t){return Ql(t).replace(lS,"%3D")}function mS(t){return eu(t).replace(K_,"%23").replace(cS,"%3F")}function AS(t){return t==null?"":mS(t).replace(aS,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function vS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(z_," "),o=r.indexOf("="),a=So(o<0?r:r.slice(0,o)),l=o<0?null:So(r.slice(o+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bd(t){let e="";for(let n in t){const s=t[n];if(n=gS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(r=>r&&Ql(r)):[s&&Ql(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ES(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const J_=Symbol(""),Cd=Symbol(""),tu=Symbol(""),Z_=Symbol(""),Kl=Symbol("");function Ri(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yS(t,e,n){const s=()=>{t[e].delete(n)};kc(s),Cp(s),bp(()=>{t[e].add(n)}),t[e].add(n)}function BL(t){const e=Ht(J_,{}).value;e&&yS(e,"leaveGuards",t)}function bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ni(4,{from:n,to:e})):h instanceof Error?a(h):QI(h)?a(ni(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(bS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=NI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,r,o)()}))}}return i}function bS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wd(t){const e=Ht(tu),n=Ht(Z_),s=dt(()=>e.resolve(ut(t.to))),i=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ti.bind(null,u));if(d>-1)return d;const p=Td(l[c-2]);return c>1&&Td(u)===p&&h[h.length-1].path!==p?h.findIndex(ti.bind(null,l[c-2])):d}),r=dt(()=>i.value>-1&&IS(n.params,s.value.params)),o=dt(()=>i.value>-1&&i.value===n.matched.length-1&&W_(n.params,s.value.params));function a(l={}){return TS(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(Vi):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const CS=yp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wd,setup(t,{slots:e}){const n=Er(wd(t)),{options:s}=Ht(tu),i=dt(()=>({[Id(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Hp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),wS=CS;function TS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,SS=yp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(Kl),i=dt(()=>t.route||s.value),r=Ht(Cd,0),o=dt(()=>{let c=ut(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>i.value.matched[o.value]);io(Cd,dt(()=>o.value+1)),io(J_,a),io(Kl,i);const l=Mt();return ro(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ti(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sd(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,y=Hp(d,pe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Sd(n.default,{Component:y,route:c})||y}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const NS=SS;function RS(t){const e=nS(t.routes,t),n=t.parseQuery||vS,s=t.stringifyQuery||bd,i=t.history,r=Ri(),o=Ri(),a=Ri(),l=Cv(vn);let c=vn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,C=>""+C),h=sl.bind(null,AS),d=sl.bind(null,So);function p(C,L){let P,F;return j_(C)?(P=e.getRecordMatcher(C),F=L):F=C,e.addRoute(F,P)}function g(C){const L=e.getRecordMatcher(C);L&&e.removeRoute(L)}function m(){return e.getRoutes().map(C=>C.record)}function y(C){return!!e.getRecordMatcher(C)}function v(C,L){if(L=pe({},L||l.value),typeof C=="string"){const f=il(n,C,L.path),_=e.resolve({path:f.path},L),A=i.createHref(f.fullPath);return pe(f,_,{params:d(_.params),hash:So(f.hash),redirectedFrom:void 0,href:A})}let P;if("path"in C)P=pe({},C,{path:il(n,C.path,L.path).path});else{const f=pe({},C.params);for(const _ in f)f[_]==null&&delete f[_];P=pe({},C,{params:h(C.params)}),L.params=h(L.params)}const F=e.resolve(P,L),se=C.hash||"";F.params=u(d(F.params));const be=kI(s,pe({},C,{hash:_S(se),path:F.path})),X=i.createHref(be);return pe({fullPath:be,hash:se,query:s===bd?ES(C.query):C.query||{}},F,{redirectedFrom:void 0,href:X})}function w(C){return typeof C=="string"?il(n,C,l.value.path):pe({},C)}function b(C,L){if(c!==C)return ni(8,{from:L,to:C})}function N(C){return Y(C)}function U(C){return N(pe(w(C),{replace:!0}))}function V(C){const L=C.matched[C.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let F=typeof P=="function"?P(C):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),pe({query:C.query,hash:C.hash,params:"path"in F?{}:C.params},F)}}function Y(C,L){const P=c=v(C),F=l.value,se=C.state,be=C.force,X=C.replace===!0,f=V(P);if(f)return Y(pe(w(f),{state:typeof f=="object"?pe({},se,f.state):se,force:be,replace:X}),L||P);const _=P;_.redirectedFrom=L;let A;return!be&&DI(s,F,P)&&(A=ni(16,{to:_,from:F}),lt(F,F,!0,!1)),(A?Promise.resolve(A):q(_,F)).catch(E=>Xt(E)?Xt(E,2)?E:De(E):te(E,_,F)).then(E=>{if(E){if(Xt(E,2))return Y(pe({replace:X},w(E.to),{state:typeof E.to=="object"?pe({},se,E.to.state):se,force:be}),L||_)}else E=ae(_,F,!0,X,se);return G(_,F,E),E})}function B(C,L){const P=b(C,L);return P?Promise.reject(P):Promise.resolve()}function q(C,L){let P;const[F,se,be]=OS(C,L);P=rl(F.reverse(),"beforeRouteLeave",C,L);for(const f of F)f.leaveGuards.forEach(_=>{P.push(bn(_,C,L))});const X=B.bind(null,C,L);return P.push(X),Ns(P).then(()=>{P=[];for(const f of r.list())P.push(bn(f,C,L));return P.push(X),Ns(P)}).then(()=>{P=rl(se,"beforeRouteUpdate",C,L);for(const f of se)f.updateGuards.forEach(_=>{P.push(bn(_,C,L))});return P.push(X),Ns(P)}).then(()=>{P=[];for(const f of C.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Ot(f.beforeEnter))for(const _ of f.beforeEnter)P.push(bn(_,C,L));else P.push(bn(f.beforeEnter,C,L));return P.push(X),Ns(P)}).then(()=>(C.matched.forEach(f=>f.enterCallbacks={}),P=rl(be,"beforeRouteEnter",C,L),P.push(X),Ns(P))).then(()=>{P=[];for(const f of o.list())P.push(bn(f,C,L));return P.push(X),Ns(P)}).catch(f=>Xt(f,8)?f:Promise.reject(f))}function G(C,L,P){for(const F of a.list())F(C,L,P)}function ae(C,L,P,F,se){const be=b(C,L);if(be)return be;const X=L===vn,f=Ps?history.state:{};P&&(F||X?i.replace(C.fullPath,pe({scroll:X&&f&&f.scroll},se)):i.push(C.fullPath,se)),l.value=C,lt(C,L,P,X),De()}let _e;function me(){_e||(_e=i.listen((C,L,P)=>{if(!vt.listening)return;const F=v(C),se=V(F);if(se){Y(pe(se,{replace:!0}),F).catch(Vi);return}c=F;const be=l.value;Ps&&UI(pd(be.fullPath,P.delta),ma()),q(F,be).catch(X=>Xt(X,12)?X:Xt(X,2)?(Y(X.to,F).then(f=>{Xt(f,20)&&!P.delta&&P.type===rr.pop&&i.go(-1,!1)}).catch(Vi),Promise.reject()):(P.delta&&i.go(-P.delta,!1),te(X,F,be))).then(X=>{X=X||ae(F,be,!1),X&&(P.delta&&!Xt(X,8)?i.go(-P.delta,!1):P.type===rr.pop&&Xt(X,20)&&i.go(-1,!1)),G(F,be,X)}).catch(Vi)}))}let Ue=Ri(),nt=Ri(),oe;function te(C,L,P){De(C);const F=nt.list();return F.length?F.forEach(se=>se(C,L,P)):console.error(C),Promise.reject(C)}function le(){return oe&&l.value!==vn?Promise.resolve():new Promise((C,L)=>{Ue.add([C,L])})}function De(C){return oe||(oe=!C,me(),Ue.list().forEach(([L,P])=>C?P(C):L()),Ue.reset()),C}function lt(C,L,P,F){const{scrollBehavior:se}=t;if(!Ps||!se)return Promise.resolve();const be=!P&&HI(pd(C.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return dp().then(()=>se(C,L,be)).then(X=>X&&FI(X)).catch(X=>te(X,C,L))}const Ge=C=>i.go(C);let Oe;const At=new Set,vt={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:y,getRoutes:m,resolve:v,options:t,push:N,replace:U,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:le,install(C){const L=this;C.component("RouterLink",wS),C.component("RouterView",NS),C.config.globalProperties.$router=L,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Ps&&!Oe&&l.value===vn&&(Oe=!0,N(i.location).catch(se=>{}));const P={};for(const se in vn)P[se]=dt(()=>l.value[se]);C.provide(tu,L),C.provide(Z_,Er(P)),C.provide(Kl,l);const F=C.unmount;At.add(C),C.unmount=function(){At.delete(C),At.size<1&&(c=vn,_e&&_e(),_e=null,l.value=vn,Oe=!1,oe=!1),F()}}};return vt}function Ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function OS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ti(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ti(c,l))||i.push(l))}return[n,s,i]}const kS="modulepreload",DS=function(t){return"/MyPortfolio/"+t},Nd={},Oi=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=DS(r),r in Nd)return;Nd[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":kS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const PS={},eg=t=>(Rc("data-v-071d184d"),t=t(),Oc(),t),xS={class:"bg-black text-bg-dark m-0 container-fluid row justify-content-center"},LS={class:"banner col-md-10 col-12 ps-0 pe-0"},MS=xc('<div class="row pt-5" data-v-071d184d><div class="col-12 text-center text-md-start display-2" data-v-071d184d> Hi, I&#39;m <div class="m-0 d-sm-none" data-v-071d184d></div> Frank Chung. </div></div><div class="row" data-v-071d184d><div class="ms-lg-5 ms-md-5 col-12 text-center text-md-start d-none d-md-block" data-v-071d184d><p class="display-2 blur" data-v-071d184d>Hi, I&#39;m Frank Chung.</p></div></div><div class="row justify-content-lg-end mt-5" data-v-071d184d><div class="col-12 text-center text-md-end display-2" data-v-071d184d> I&#39;m a <div class="m-0 d-sm-none" data-v-071d184d></div> UX Designer. </div></div><div class="row justify-content-lg-end" data-v-071d184d><div class="col-12 text-center text-md-end d-none d-md-block" data-v-071d184d><p class="display-2 blur mb-0" data-v-071d184d>Frontend Engineer</p></div></div><div class="row justify-content-lg-end" data-v-071d184d><div class="col-12 text-center text-md-end d-none d-md-block" data-v-071d184d><p class="display-2 blur" data-v-071d184d>Product Manager</p></div></div>',5),$S={class:"row mt-5"},BS={class:"col-lg-3 col-md-6 col-12 mb-3"},FS=eg(()=>x("button",{class:"btn btn-outline-warning btn-lg cursorFix"}," More Frank ",-1)),US={class:"col-lg-3 col-md-6 col-12 mb-3"},HS=eg(()=>x("button",{class:"btn btn-outline-light btn-lg cursorFix"},"Resume",-1));function WS(t,e){const n=ia("router-link");return zt(),Ln("div",xS,[x("section",LS,[MS,x("div",$S,[x("div",BS,[ge(n,{to:"/MyPortfolio/About",class:"d-grid text-decoration-none"},{default:Ft(()=>[FS]),_:1})]),x("div",US,[ge(n,{to:"../assets/Resume/FrankResume.pdf",target:"_blank",class:"d-grid text-decoration-none"},{default:Ft(()=>[HS]),_:1},8,["to"])])])])])}const VS=la(PS,[["render",WS],["__scopeId","data-v-071d184d"]]),jS="/MyPortfolio/assets/TravelMaker_Cover-462d72d7.png",GS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAGkCAYAAAAYDBLWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsOSURBVHgB7d09j5VpGcDxG0Mp8wFkKxIiZzsTF7YzarY04my5L7DturIdmaAl4EQqQTZ2vkRLxkks2dXY7YCJHfABGD/AwR55MGZjVrLzL+bAM+f3SyYzxZNTTPU/V67nvo+dOr14OgAAgAP52gAAAA5MQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAILjA2CNvXnu7Lj00YdjsTgzNjY2xmF7vL8/9vbuj5u3bj//G4D5OXbq9OLpAFhDH//kx+PSs5+X5eq17fGb3/1+ADAvVjiAtfSy43nys59uPZ+AAzAvJtDA2nnt5Mnxt7/eHa+CaY3jO999awAwHybQwNo5d+6N8aqYYt4UGmBeBDSwdl5fnBmvkpMnvzEAmA8BDaydjROHf9oGAEeXgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIXKQCHAkbJ06MN988O976/vfG2bNnx8bGiWc/8z9tY7lcjsf7/xwPHz4aO3/aHZ/v3RsAvFwCGpi9Dy689/xa7qMQzF9lurnw5q3b487O7gDg5RDQwGxNt/j9YvvaOLeGN/lNAX312s/H8smTAcBqCWhglqZ4/uMffvv897p68PDReOfdCyIaYMW8RAjMjnj+j+lK8l9/cmsAsFoCGpidad953eP5v6b1lY+f/T8AWB0BDczKFIxvb54ffOHihfefn0ICwGoIaGBWphM3+F/TkX0fXHx/ALAaXiIEZmMKxX/8fW/wZcvlk/Gtb58bABw+E2hgNtbxuLqDmr5c2AsHWA0BDczG62fODF5ssVgMAA6fgAZmY5qy8mIbG18fABw+O9DAbNzYvj42ncBxZF3euuKKcmAWTKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAguMDgCPh8taVcWdndwBwuEyggdl4vL8/eLHl8l8DgMMnoIHZePDo0eDF9vcfDwAOn4AGZmNv797g/3v8eH88eOgLBsAqCGhgNpbLJyL6Bfbu3R8ArIaABmbll7/6ZPBlN2/dHgCshoAGZmWaQH/66WeDL0zx7AVLgNU5dur04ukAmJGNjRPjz7s747XXTo51N+09/+CHmwOA1TGBBmZn2oV+572Lz1+cW2dTPL/z7oUBwGoJaGCWppWFdY7o6cKUKZ6XT54MAFbLCgcwe29v/mhc+ujDtVjpmL4wXL2+Pe7aAwd4aQQ0cGRMIX3u7Bvj9cU3x2KxGEfBcrkc+8+m7Z/v3R93P/uLY/wAXgECGgAAAjvQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAMG/AZesDFKdWOECAAAAAElFTkSuQmCC",QS="/MyPortfolio/assets/LilyChen_Cover-c7487f1a.png",KS="/MyPortfolio/assets/PersonalityQuiz_Cover-02ac9aa1.png";const zS={},Aa=t=>(Rc("data-v-495c9efe"),t=t(),Oc(),t),qS={class:"bg-black text-bg-black container-fluid"},YS={class:"project-group top-0 row g-0 justify-content-center pb-5"},XS={class:"col-md-10 col-12"},JS={class:"row row-cols-lg-2 row-cols-1 card-deck justify-content-center justify-content-lg-between"},ZS={class:"col pt-2 pb-2"},eN=Aa(()=>x("div",{class:"card bg-light text-center"},[x("img",{src:jS,class:"card-img",alt:"..."}),x("div",{class:"card-img-overlay"},[x("h2",{class:"card-title"},"TravelMaker"),x("h4",{class:"card-text"},"幫助旅行者快速找到替代方案的旅遊行程管理軟體"),x("h6",{class:"card-text"},"Product Manager, UX Designer")])],-1)),tN={class:"col pt-2 pb-2"},nN=Aa(()=>x("div",{class:"card bg-light text-center"},[x("img",{src:GS,class:"card-img",alt:"..."}),x("div",{class:"card-img-overlay"},[x("h2",{class:"card-title"},"影相設計"),x("h4",{class:"card-text"},"提供模組化影像製作方案的選購平台"),x("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1)),sN={class:"col pt-2 pb-2"},iN=Aa(()=>x("div",{class:"card bg-light text-center"},[x("img",{src:QS,class:"card-img",alt:"..."}),x("div",{class:"card-img-overlay"},[x("h2",{class:"card-title"},"Lily Chen Website"),x("h4",{class:"card-text"},"攝影師 Lily Chen 的個人品牌網站"),x("h6",{class:"card-text"},"Product Manager, UI/UX Designer")])],-1)),rN={class:"col pt-2 pb-2"},oN=Aa(()=>x("div",{class:"card bg-light text-center"},[x("img",{src:KS,class:"card-img",alt:"..."}),x("div",{class:"card-img-overlay"},[x("h2",{class:"card-title"},"學習風格測驗"),x("h4",{class:"card-text"},"均一教育平台的心理測驗互動式網頁"),x("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1));function aN(t,e){const n=ia("router-link");return zt(),Ln("div",qS,[x("div",YS,[x("div",XS,[x("div",JS,[x("div",ZS,[ge(n,{to:"/MyPortfolio/Work/TravelMaker"},{default:Ft(()=>[eN]),_:1})]),x("div",tN,[ge(n,{to:"/MyPortfolio/Work/InshoneDesign"},{default:Ft(()=>[nN]),_:1})]),x("div",sN,[ge(n,{to:"/MyPortfolio/Work/LilyChen"},{default:Ft(()=>[iN]),_:1})]),x("div",rN,[ge(n,{to:"/MyPortfolio/Work/PersonalityQuiz"},{default:Ft(()=>[oN]),_:1})])])])])])}const lN=la(zS,[["render",aN],["__scopeId","data-v-495c9efe"]]),cN={__name:"Home",setup(t){return(e,n)=>(zt(),Ln(ht,null,[ge(VS),ge(lN)],64))}};/**
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
 */const tg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+tg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ng=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uN=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new hN;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=ng(t);return nu.encodeByteArray(e,!0)},No=function(t){return sg(t).replace(/\./g,"")},Ro=function(t){try{return nu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dN(t){return ig(void 0,t)}function ig(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fN(n)||(t[n]=ig(t[n],e[n]));return t}function fN(t){return t!=="__proto__"}/**
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
 */function pN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _N=()=>pN().__FIREBASE_DEFAULTS__,gN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ro(t[1]);return e&&JSON.parse(e)},va=()=>{try{return _N()||gN()||mN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rg=t=>{var e,n;return(n=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},og=t=>{const e=rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},AN=()=>{var t;return(t=va())===null||t===void 0?void 0:t.config},ag=t=>{var e;return(e=va())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[No(JSON.stringify(n)),No(JSON.stringify(o)),a].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function vN(){var t;const e=(t=va())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yN(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ug(){return tg.NODE_ADMIN===!0}function bN(){try{return typeof indexedDB=="object"}catch{return!1}}function CN(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const wN="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wN,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?TN(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function TN(t,e){return t.replace(IN,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const IN=/\{\$([^}]+)}/g;/**
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
 */function or(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const hg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=or(Ro(r[0])||""),n=or(Ro(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},SN=function(t){const e=hg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NN=function(t){const e=hg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rd(r)&&Rd(o)){if(!ko(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
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
 */function mi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class RN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ON(t,e){const n=new kN(t,e);return n.subscribe.bind(n)}class kN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");DN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}function iu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const PN=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ya=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class xN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ea;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MN(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:LN(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LN(t){return t===Yn?void 0:t}function MN(t){return t.instantiationMode==="EAGER"}/**
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
 */class $N{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const BN={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},FN=Ae.INFO,UN={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},HN=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=UN[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=FN,this._logHandler=HN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const WN=(t,e)=>e.some(n=>t instanceof n);let Od,kd;function VN(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jN(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,ql=new WeakMap,fg=new WeakMap,al=new WeakMap,ou=new WeakMap;function GN(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(On(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),ou.set(e,t),e}function QN(t){if(ql.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ql.set(t,e)}let Yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KN(t){Yl=t(Yl)}function zN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ll(this),e,...n);return fg.set(s,e.sort?e.sort():[e]),On(s)}:jN().includes(t)?function(...e){return t.apply(ll(this),e),On(dg.get(this))}:function(...e){return On(t.apply(ll(this),e))}}function qN(t){return typeof t=="function"?zN(t):(t instanceof IDBTransaction&&QN(t),WN(t,VN())?new Proxy(t,Yl):t)}function On(t){if(t instanceof IDBRequest)return GN(t);if(al.has(t))return al.get(t);const e=qN(t);return e!==t&&(al.set(t,e),ou.set(e,t)),e}const ll=t=>ou.get(t);function YN(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=On(o);return s&&o.addEventListener("upgradeneeded",l=>{s(On(o.result),l.oldVersion,l.newVersion,On(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const XN=["get","getKey","getAll","getAllKeys","count"],JN=["put","add","delete","clear"],cl=new Map;function Dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=JN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||XN.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return cl.set(e,r),r}KN(t=>({...t,get:(e,n,s)=>Dd(e,n)||t.get(e,n,s),has:(e,n)=>!!Dd(e,n)||t.has(e,n)}));/**
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
 */class ZN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xl="@firebase/app",Pd="0.9.4";/**
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
 */const _s=new ru("@firebase/app"),tR="@firebase/app-compat",nR="@firebase/analytics-compat",sR="@firebase/analytics",iR="@firebase/app-check-compat",rR="@firebase/app-check",oR="@firebase/auth",aR="@firebase/auth-compat",lR="@firebase/database",cR="@firebase/database-compat",uR="@firebase/functions",hR="@firebase/functions-compat",dR="@firebase/installations",fR="@firebase/installations-compat",pR="@firebase/messaging",_R="@firebase/messaging-compat",gR="@firebase/performance",mR="@firebase/performance-compat",AR="@firebase/remote-config",vR="@firebase/remote-config-compat",ER="@firebase/storage",yR="@firebase/storage-compat",bR="@firebase/firestore",CR="@firebase/firestore-compat",wR="firebase",TR="9.17.2";/**
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
 */const Jl="[DEFAULT]",IR={[Xl]:"fire-core",[tR]:"fire-core-compat",[sR]:"fire-analytics",[nR]:"fire-analytics-compat",[rR]:"fire-app-check",[iR]:"fire-app-check-compat",[oR]:"fire-auth",[aR]:"fire-auth-compat",[lR]:"fire-rtdb",[cR]:"fire-rtdb-compat",[uR]:"fire-fn",[hR]:"fire-fn-compat",[dR]:"fire-iid",[fR]:"fire-iid-compat",[pR]:"fire-fcm",[_R]:"fire-fcm-compat",[gR]:"fire-perf",[mR]:"fire-perf-compat",[AR]:"fire-rc",[vR]:"fire-rc-compat",[ER]:"fire-gcs",[yR]:"fire-gcs-compat",[bR]:"fire-fst",[CR]:"fire-fst-compat","fire-js":"fire-js",[wR]:"fire-js-all"};/**
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
 */const Do=new Map,Zl=new Map;function SR(t,e){try{t.container.addComponent(e)}catch(n){_s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(Zl.has(e))return _s.debug(`There were multiple attempts to register component ${e}.`),!1;Zl.set(e,t);for(const n of Do.values())SR(n,t);return!0}function ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const NR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new Sr("app","Firebase",NR);/**
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
 */class RR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=TR;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=AN()),!n)throw kn.create("no-options");const r=Do.get(i);if(r){if(ko(n,r.options)&&ko(s,r.config))return r;throw kn.create("duplicate-app",{appName:i})}const o=new $N(i);for(const l of Zl.values())o.addComponent(l);const a=new RR(n,s,o);return Do.set(i,a),a}function au(t=Jl){const e=Do.get(t);if(!e&&t===Jl)return pg();if(!e)throw kn.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let i=(s=IR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}gs(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OR="firebase-heartbeat-database",kR=1,ar="firebase-heartbeat-store";let ul=null;function _g(){return ul||(ul=YN(OR,kR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ar)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),ul}async function DR(t){try{return(await _g()).transaction(ar).objectStore(ar).get(gg(t))}catch(e){if(e instanceof pn)_s.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_s.warn(n.message)}}}async function xd(t,e){try{const s=(await _g()).transaction(ar,"readwrite");return await s.objectStore(ar).put(e,gg(t)),s.done}catch(n){if(n instanceof pn)_s.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_s.warn(s.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PR=1024,xR=30*24*60*60*1e3;class LR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $R(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=xR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ld(),{heartbeatsToSend:n,unsentEntries:s}=MR(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ld(){return new Date().toISOString().substring(0,10)}function MR(t,e=PR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Md(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bN()?CN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BR(t){gs(new Un("platform-logger",e=>new ZN(e),"PRIVATE")),gs(new Un("heartbeat",e=>new LR(e),"PRIVATE")),jt(Xl,Pd,t),jt(Xl,Pd,"esm2017"),jt("fire-js","")}BR("");const $d="@firebase/database",Bd="0.14.4";/**
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
 */let mg="";function FR(t){mg=t}/**
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
 */class UR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:or(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class HR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ag=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UR(e)}}catch{}return new HR},rs=Ag("localStorage"),ec=Ag("sessionStorage");/**
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
 */const Hs=new ru("@firebase/database"),WR=function(){let t=1;return function(){return t++}}(),vg=function(t){const e=PN(t),n=new RN;n.update(e);const s=n.digest();return nu.encodeByteArray(s)},Nr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Nr.apply(null,s):typeof s=="object"?e+=Pe(s):e+=s,e+=" "}return e};let us=null,Fd=!0;const VR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hs.logLevel=Ae.VERBOSE,us=Hs.log.bind(Hs),e&&ec.set("logging_enabled",!0)):typeof t=="function"?us=t:(us=null,ec.remove("logging_enabled"))},He=function(...t){if(Fd===!0&&(Fd=!1,us===null&&ec.get("logging_enabled")===!0&&VR(!0)),us){const e=Nr.apply(null,t);us(e)}},Rr=function(t){return function(...e){He(t,...e)}},tc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nr(...t);Hs.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Nr(...t)}`;throw Hs.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+Nr(...t);Hs.warn(e)},jR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",ms="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===ii||e===ms)return-1;if(e===ii||t===ms)return 1;{const n=Ud(t),s=Ud(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},QR=function(t,e){return t===e?0:t<e?-1:1},ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},lu=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Pe(e[s]),n+=":",n+=lu(t[e[s]]);return n+="}",n},yg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bg=function(t){O(!Eg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},KR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const YR=new RegExp("^-?(0*)\\d{1,10}$"),XR=-2147483648,JR=2147483647,Ud=function(t){if(YR.test(t)){const e=Number(t);if(e>=XR&&e<=JR)return e}return null},Ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class e0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class t0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class Ws{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ws.OWNER="owner";/**
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
 */const cu="5",Cg="v",wg="s",Tg="r",Ig="f",Sg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ng="ls",Rg="p",nc="ac",Og="websocket",kg="long_polling";/**
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
 */class Dg{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function n0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Og)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);n0(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class s0{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dN(this.counters_)}}/**
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
 */const hl={},dl={};function uu(t){const e=t.toString();return hl[e]||(hl[e]=new s0),hl[e]}function i0(t,e){const n=t.toString();return dl[n]||(dl[n]=e()),dl[n]}/**
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
 */class r0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ei(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hd="start",o0="close",a0="pLPCommand",l0="pRTLPCB",xg="id",Lg="pw",Mg="ser",c0="cb",u0="seg",h0="ts",d0="d",f0="dframe",$g=1870,Bg=30,p0=$g-Bg,_0=25e3,g0=3e4;class Ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rr(e),this.stats_=uu(n),this.urlFn=l=>(this.appCheckToken&&(l[nc]=this.appCheckToken),Pg(n,kg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new r0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(g0)),GR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hd)this.id=a,this.password=l;else if(o===o0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hd]="t",s[Mg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[c0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Cg]=cu,this.transportSessionId&&(s[wg]=this.transportSessionId),this.lastSessionId&&(s[Ng]=this.lastSessionId),this.applicationId&&(s[Rg]=this.applicationId),this.appCheckToken&&(s[nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(s[Tg]=Ig);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KR()&&!zR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sg(n),i=yg(s,p0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[f0]="t",s[xg]=e,s[Lg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WR(),window[a0+this.uniqueCallbackIdentifier]=e,window[l0+this.uniqueCallbackIdentifier]=n,this.myIFrame=hu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xg]=this.myID,e[Lg]=this.myPW,e[Mg]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bg+s.length<=$g;){const o=this.pendingSegs.shift();s=s+"&"+u0+i+"="+o.seg+"&"+h0+i+"="+o.ts+"&"+d0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(_0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const m0=16384,A0=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class Ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rr(this.connId),this.stats_=uu(n),this.connURL=Ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Cg]=cu,typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(o[Tg]=Ig),n&&(o[wg]=n),s&&(o[Ng]=s),i&&(o[nc]=i),r&&(o[Rg]=r),Pg(e,Og,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let s;ug(),this.mySock=new Po(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Po!==null&&!Ct.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=or(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yg(n,m0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(A0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class lr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ls,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let s=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ct];else{const i=this.transports_=[];for(const r of lr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);lr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lr.globalTransportInitialized_=!1;/**
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
 */const v0=6e4,E0=5e3,y0=10*1024,b0=100*1024,fl="t",Wd="d",C0="s",Vd="r",w0="e",jd="o",Gd="a",Qd="n",Kd="p",T0="h";class I0{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rr("c:"+this.id+":"),this.transportManager_=new lr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>b0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>y0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fl in e){const n=e[fl];n===Gd?this.upgradeIfSecondaryHealthy_():n===Vd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ki("t",e),s=ki("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ki("t",e),s=ki("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ki(fl,e);if(Wd in e){const s=e[Wd];if(n===T0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===C0?this.onConnectionShutdown_(s):n===Vd?this.onReset_(s):n===w0?tc("Server Error: "+s):n===jd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cu!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(v0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(E0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Fg{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ug{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xo extends Ug{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!su()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xo}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zd=32,qd=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hn(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Hg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function S0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return ze(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jg(t,e){if(Hn(t)!==Hn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Hn(t)>Hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class N0{constructor(e,n){this.errorPrefix_=n,this.parts_=Wg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ya(this.parts_[s]);Gg(this)}}function R0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ya(e),Gg(t)}function O0(t){const e=t.parts_.pop();t.byteLength_-=ya(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gg(t){if(t.byteLength_>qd)throw new Error(t.errorPrefix_+"has a key path longer than "+qd+" bytes ("+t.byteLength_+").");if(t.parts_.length>zd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zd+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class du extends Ug{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new du}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Di=1e3,k0=60*5*1e3,Yd=30*1e3,D0=1.3,P0=3e4,x0="server_kill",Xd=3;class an extends Fg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=Rr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=k0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ug())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");du.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Pe(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ea,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=si(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=SN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tc("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>P0&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*D0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new I0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(x0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ze(h),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zl(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>lu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xd&&(this.reconnectDelay_=Yd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mg.replace(/\./g,"-")]=1,su()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return zl(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
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
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
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
 */class Ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(ii,e),i=new ne(ii,n);return this.compare(s,i)!==0}minPost(){return ne.MIN}}/**
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
 */let Xr;class Qg extends Ca{static get __EMPTY_NODE(){return Xr}static set __EMPTY_NODE(e){Xr=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(ms,Xr)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Xr)}toString(){return".key"}}const Vs=new Qg;/**
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
 */class Jr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??$e.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new $e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class L0{copy(e,n,s,i,r){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new L0;/**
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
 */function M0(t,e){return vi(t.name,e.name)}function fu(t,e){return vi(t,e)}/**
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
 */let sc;function $0(t){sc=t}const Kg=function(t){return typeof t=="number"?"number:"+bg(t):"string:"+t},zg=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else O(t===sc||t.isEmpty(),"priority of unexpected type.");O(t===sc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jd;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zg(this.priorityNode_)}static set __childrenNodeConstructor(e){Jd=e}static get __childrenNodeConstructor(){return Jd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bg(this.value_):e+=this.value_,this.lazyHash_=vg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qg,Yg;function B0(t){qg=t}function F0(t){Yg=t}class U0 extends Ca{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(ms,new Me("[PRIORITY-POST]",Yg))}makePost(e,n){const s=qg(e);return new ne(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new U0;/**
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
 */const H0=Math.log(2);class W0{constructor(e){const n=r=>parseInt(Math.log(r)/H0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new $e(d,h.node,$e.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],d=n?n(h):h,new $e(d,h.node,$e.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const y=h-g,v=h;h-=g;const w=i(y+1,v),b=t[y],N=n?n(b):b;p(new $e(N,b.node,m,null,w))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));m?d(y,$e.BLACK):(d(y,$e.BLACK),d(y,$e.RED))}return u},o=new W0(t.length),a=r(o);return new Je(s||e,a)};/**
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
 */let pl;const Rs={};class en{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Rs&&Te,"ChildrenNode.ts has not been loaded"),pl=pl||new en({".priority":Rs},{".priority":Te}),pl}get(e){const n=si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ne.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Lo(s,e.getCompare()):a=Rs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new en(u,c)}addToIndexes(e,n){const s=Oo(this.indexes_,(i,r)=>{const o=si(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Rs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Lo(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new en(s,this.indexSet_)}removeFromIndexes(e,n){const s=Oo(this.indexes_,i=>{if(i===Rs)return i;{const r=n.get(e.name);return r?i.remove(new ne(e.name,r)):i}});return new en(s,this.indexSet_)}}/**
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
 */let Pi;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pi||(Pi=new j(new Je(fu),null,en.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pi:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{O(re(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kg(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Or?-1:0}withIndex(e){if(e===Vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class V0 extends j{constructor(){super(new Je(fu),j.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Or=new V0;Object.defineProperties(ne,{MIN:{value:new ne(ii,j.EMPTY_NODE)},MAX:{value:new ne(ms,Or)}});Qg.__EMPTY_NODE=j.EMPTY_NODE;Me.__childrenNodeConstructor=j;$0(Or);F0(Or);/**
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
 */const j0=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Be(e))}if(!(t instanceof Array)&&j0){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Lo(n,M0,o=>o.name,fu);if(s){const o=Lo(n,Te.getCompare());return new j(r,Be(e),new en({".priority":o},{".priority":Te}))}else return new j(r,Be(e),en.Default)}else{let n=j.EMPTY_NODE;return tt(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Be(e))}}B0(Be);/**
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
 */class G0 extends Ca{constructor(e){super(),this.indexPath_=e,O(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=Be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Or);return new ne(ms,e)}toString(){return Wg(this.indexPath_,0).join("/")}}/**
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
 */class Q0 extends Ca{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Be(e);return new ne(n,s)}toString(){return".value"}}const K0=new Q0;/**
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
 */function Xg(t){return{type:"value",snapshotNode:t}}function ri(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ur(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function z0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(cr(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ri(n,s)):o.trackChildChange(ur(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(cr(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ur(i,r,o))}else s.trackChildChange(ri(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hr{constructor(e){this.indexedFilter_=new pu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hr.getStartPost_(e),this.endPost_=hr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ne(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new ne(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class q0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ne(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ne(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ur(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(cr(n,h));const m=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ri(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(cr(c.name,c.node)),r.trackChildChange(ri(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class _u{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new _u;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Y0(t){return t.loadsAllData()?new pu(t.getIndex()):t.hasLimit()?new q0(t):new hr(t)}function Zd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===K0?n="$value":t.index_===Vs?n="$key":(O(t.index_ instanceof G0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class Mo extends Fg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Rr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Zd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),si(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Mo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zd(e._queryParams),s=e._path.toString(),i=new Ea;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=or(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class X0{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $o(){return{value:null,children:new Map}}function Jg(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,$o());const i=t.children.get(s);e=Ee(e),Jg(i,e,n)}}function ic(t,e,n){t.value!==null?n(e,t.value):J0(t,(s,i)=>{const r=new ve(e.toString()+"/"+s);ic(i,r,n)})}function J0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Z0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const tf=10*1e3,eO=30*1e3,tO=5*60*1e3;class nO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Z0(e);const s=tf+(eO-tf)*Math.random();Gi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*tO))}}/**
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
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function Zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Bo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=It.ACK_USER_WRITE,this.source=Zg()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Bo(ue(),n,this.revert)}}else return O(re(this.path)===e,"operationForChild called for unrelated child."),new Bo(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class dr{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new dr(this.source,ue()):new dr(this.source,Ee(this.path))}}/**
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
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=It.OVERWRITE}operationForChild(e){return ie(this.path)?new As(this.source,ue(),this.snap.getImmediateChild(e)):new As(this.source,Ee(this.path),this.snap)}}/**
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
 */class fr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=It.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new As(this.source,ue(),n.value):new fr(this.source,ue(),n)}else return O(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fr(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class sO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(z0(o.childName,o.snapshotNode))}),xi(t,i,"child_removed",e,s,n),xi(t,i,"child_added",e,s,n),xi(t,i,"child_moved",r,s,n),xi(t,i,"child_changed",e,s,n),xi(t,i,"value",e,s,n),i}function xi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>oO(t,a,l)),o.forEach(a=>{const l=rO(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oO(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function wa(t,e){return{eventCache:t,serverCache:e}}function Qi(t,e,n,s){return wa(new Wn(e,n,s),t.serverCache)}function em(t,e,n,s){return wa(t.eventCache,new Wn(e,n,s))}function Fo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let _l;const aO=()=>(_l||(_l=new Je(QR)),_l);class Ce{constructor(e,n=aO()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return tt(e,(s,i)=>{n=n.set(new ve(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:xe(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const s=re(e),r=(this.children.get(s)||new Ce(null)).set(Ee(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(ie(e))return n;{const s=re(e),r=(this.children.get(s)||new Ce(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ie(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),xe(n,i),s):new Ce(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new Ce(null))}}function Ki(t,e,n){if(ie(e))return new Rt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ze(i,e);return r=r.updateChild(o,n),new Rt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new Rt(r)}}}function nf(t,e,n){let s=t;return tt(n,(i,r)=>{s=Ki(s,xe(e,i),r)}),s}function sf(t,e){if(ie(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Rt(n)}}function rc(t,e){return ws(t,e)!=null}function ws(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function rf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new ne(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ne(s,i.value))}),e}function Dn(t,e){if(ie(e))return t;{const n=ws(t,e);return n!=null?new Rt(new Ce(n)):new Rt(t.writeTree_.subtree(e))}}function oc(t){return t.writeTree_.isEmpty()}function oi(t,e){return tm(ue(),t.writeTree_,e)}function tm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=tm(xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
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
 */function Ta(t,e){return rm(e,t)}function lO(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ki(t.visibleWrites,e,n)),t.lastWriteId=s}function cO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hO(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return dO(t),!0;if(s.snap)t.visibleWrites=sf(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=sf(t.visibleWrites,xe(s.path,l))})}return!0}else return!1}function hO(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(xe(t.path,n),e))return!0;return!1}function dO(t){t.visibleWrites=nm(t.allWrites,fO,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fO(t){return t.visible}function nm(t,e,n){let s=Rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=ze(n,o),s=Ki(s,a,r.snap)):Tt(o,n)&&(a=ze(o,n),s=Ki(s,ue(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=ze(n,o),s=nf(s,a,r.children);else if(Tt(o,n))if(a=ze(o,n),ie(a))s=nf(s,ue(),r.children);else{const l=si(r.children,re(a));if(l){const c=l.getChild(Ee(a));s=Ki(s,ue(),c)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function sm(t,e,n,s,i){if(!s&&!i){const r=ws(t.visibleWrites,e);if(r!=null)return r;{const o=Dn(t.visibleWrites,e);if(oc(o))return n;if(n==null&&!rc(o,ue()))return null;{const a=n||j.EMPTY_NODE;return oi(o,a)}}}else{const r=Dn(t.visibleWrites,e);if(!i&&oc(r))return n;if(!i&&n==null&&!rc(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=nm(t.allWrites,o,e),l=n||j.EMPTY_NODE;return oi(a,l)}}}function pO(t,e,n){let s=j.EMPTY_NODE;const i=ws(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=oi(Dn(r,new ve(o)),a);s=s.updateImmediateChild(o,l)}),rf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dn(t.visibleWrites,e);return rf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _O(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(rc(t.visibleWrites,r))return null;{const o=Dn(t.visibleWrites,r);return oc(o)?i.getChild(n):oi(o,i.getChild(n))}}function gO(t,e,n,s){const i=xe(e,n),r=ws(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dn(t.visibleWrites,i);return oi(o,s.getNode().getImmediateChild(n))}else return null}function mO(t,e){return ws(t.visibleWrites,e)}function AO(t,e,n,s,i,r,o){let a;const l=Dn(t.visibleWrites,e),c=ws(l,ue());if(c!=null)a=c;else if(n!=null)a=oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function vO(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function Uo(t,e,n,s){return sm(t.writeTree,t.treePath,e,n,s)}function Au(t,e){return pO(t.writeTree,t.treePath,e)}function of(t,e,n,s){return _O(t.writeTree,t.treePath,e,n,s)}function Ho(t,e){return mO(t.writeTree,xe(t.treePath,e))}function EO(t,e,n,s,i,r){return AO(t.writeTree,t.treePath,e,n,s,i,r)}function vu(t,e,n){return gO(t.writeTree,t.treePath,e,n)}function im(t,e){return rm(xe(t.treePath,e),t.writeTree)}function rm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ur(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,cr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ri(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ur(s,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const om=new bO;class Eu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),r=EO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function CO(t){return{filter:t}}function wO(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TO(t,e,n,s,i){const r=new yO;let o,a;if(n.type===It.OVERWRITE){const c=n;c.source.fromUser?o=ac(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Wo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===It.MERGE){const c=n;c.source.fromUser?o=SO(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=lc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===It.ACK_USER_WRITE){const c=n;c.revert?o=OO(t,e,c.path,s,i,r):o=NO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===It.LISTEN_COMPLETE)o=RO(t,e,n.path,s,r);else throw gi("Unknown operation type: "+n.type);const l=r.getChanges();return IO(e,o,l),{viewCache:o,changes:l}}function IO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Fo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xg(Fo(e)))}}function am(t,e,n,s,i,r){const o=e.eventCache;if(Ho(s,n)!=null)return e;{let a,l;if(ie(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vs(e),u=c instanceof j?c:j.EMPTY_NODE,h=Au(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Uo(s,vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){O(Hn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=of(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ee(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=of(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=vu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Qi(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Wo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&Hn(n)>1)return e;const g=Ee(n),y=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),p,y,g,om,null)}const h=em(e,c,l.isFullyInitialized()||ie(n),u.filtersNodes()),d=new Eu(i,h,r);return am(t,h,n,i,d,a)}function ac(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Eu(i,e,r);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Qi(e,c,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Qi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ee(n),p=a.getNode().getImmediateChild(h);let g;if(ie(d))g=s;else{const m=u.getCompleteChild(h);m!=null?Hg(d)===".priority"&&m.getChild(Vg(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=j.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Qi(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function af(t,e){return t.eventCache.isCompleteForChild(e)}function SO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=xe(n,l);af(e,re(u))&&(a=ac(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=xe(n,l);af(e,re(u))||(a=ac(t,a,u,c,i,r,o))}),a}function lf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function lc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=s:c=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=lf(t,p,d);l=Wo(t,l,new ve(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=lf(t,g,d);l=Wo(t,l,new ve(h),m,i,r,o,a)}}),l}function NO(t,e,n,s,i,r,o){if(Ho(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ie(n)){let c=new Ce(null);return l.getNode().forEachChild(Vs,(u,h)=>{c=c.set(new ve(u),h)}),lc(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ce(null);return s.foreach((u,h)=>{const d=xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),lc(t,e,n,c,i,r,a,o)}}function RO(t,e,n,s,i){const r=e.serverCache,o=em(e,r.getNode(),r.isFullyInitialized()||ie(n),r.isFiltered());return am(t,o,n,s,om,i)}function OO(t,e,n,s,i,r){let o;if(Ho(s,n)!=null)return e;{const a=new Eu(s,e,i),l=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Uo(s,vs(e));else{const h=e.serverCache.getNode();O(h instanceof j,"serverChildren would be complete if leaf node"),u=Au(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let h=vu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,Ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Uo(s,vs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ho(s,ue())!=null,Qi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class kO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new pu(s.getIndex()),r=Y0(s);this.processor_=CO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Wn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Wn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=wa(h,u),this.eventGenerator_=new sO(this.query_)}get query(){return this.query_}}function DO(t){return t.viewCache_.serverCache.getNode()}function PO(t){return Fo(t.viewCache_)}function xO(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function cf(t){return t.eventRegistrations_.length===0}function LO(t,e){t.eventRegistrations_.push(e)}function uf(t,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hf(t,e,n,s){e.type===It.MERGE&&e.source.queryId!==null&&(O(vs(t.viewCache_),"We should always have a full cache before handling merges"),O(Fo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TO(t.processor_,i,e,n,s);return wO(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function MO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(ri(r,o))}),n.isFullyInitialized()&&s.push(Xg(n.getNode())),lm(t,s,n.getNode(),e)}function lm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return iO(t.eventGenerator_,e,n,i)}/**
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
 */let Vo;class cm{constructor(){this.views=new Map}}function $O(t){O(!Vo,"__referenceConstructor has already been defined"),Vo=t}function BO(){return O(Vo,"Reference.ts has not been loaded"),Vo}function FO(t){return t.views.size===0}function yu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),hf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hf(o,e,n,s));return r}}function um(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Uo(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=Au(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=wa(new Wn(a,l,!1),new Wn(s,i,!1));return new kO(e,c)}return o}function UO(t,e,n,s,i,r){const o=um(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LO(o,n),MO(o,n)}function HO(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Vn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(uf(c,n,s)),cf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(uf(l,n,s)),cf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Vn(t)&&r.push(new(BO())(e._repo,e._path)),{removed:r,events:o}}function hm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const s of t.views.values())n=n||xO(s,e);return n}function dm(t,e){if(e._queryParams.loadsAllData())return Ia(t);{const s=e._queryIdentifier;return t.views.get(s)}}function fm(t,e){return dm(t,e)!=null}function Vn(t){return Ia(t)!=null}function Ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let jo;function WO(t){O(!jo,"__referenceConstructor has already been defined"),jo=t}function VO(){return O(jo,"Reference.ts has not been loaded"),jo}let jO=1;class df{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=vO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pm(t,e,n,s,i){return lO(t.pendingWriteTree_,e,n,s,i),i?Dr(t,new As(Zg(),e,n)):[]}function os(t,e,n=!1){const s=cO(t.pendingWriteTree_,e);if(uO(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(ue(),!0):tt(s.children,o=>{r=r.set(new ve(o),!0)}),Dr(t,new Bo(s.path,r,n))}else return[]}function kr(t,e,n){return Dr(t,new As(gu(),e,n))}function GO(t,e,n){const s=Ce.fromObject(n);return Dr(t,new fr(gu(),e,s))}function QO(t,e){return Dr(t,new dr(gu(),e))}function KO(t,e,n){const s=Cu(t,n);if(s){const i=wu(s),r=i.path,o=i.queryId,a=ze(r,e),l=new dr(mu(o),a);return Tu(t,r,l)}else return[]}function _m(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||fm(o,e))){const l=HO(o,e,n,s);FO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>Vn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=XO(d);for(let g=0;g<p.length;++g){const m=p[g],y=m.query,v=vm(t,m);t.listenProvider_.startListening(zi(y),pr(t,y),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(zi(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Sa(d));t.listenProvider_.stopListening(zi(d),p)}))}JO(t,c)}return a}function gm(t,e,n,s){const i=Cu(t,s);if(i!=null){const r=wu(i),o=r.path,a=r.queryId,l=ze(o,e),c=new As(mu(a),l,n);return Tu(t,o,c)}else return[]}function zO(t,e,n,s){const i=Cu(t,s);if(i){const r=wu(i),o=r.path,a=r.queryId,l=ze(o,e),c=Ce.fromObject(n),u=new fr(mu(a),l,c);return Tu(t,o,u)}else return[]}function qO(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=ze(d,i);r=r||Pn(p,g),o=o||Vn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Vn(a),r=r||Pn(a,ue())):(a=new cm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const m=Pn(g,ue());m&&(r=r.updateImmediateChild(p,m))}));const c=fm(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Sa(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=ZO();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Ta(t.pendingWriteTree_,i);let h=UO(a,e,n,u,r,l);if(!c&&!o&&!s){const d=dm(a,e);h=h.concat(ek(t,e,d))}return h}function bu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=Pn(a,l);if(c)return c});return sm(i,e,r,n,!0)}function YO(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ze(c,n);s=s||Pn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pn(i,ue()):(i=new cm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wn(s,!0,!1):null,a=Ta(t.pendingWriteTree_,e._path),l=um(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return PO(l)}function Dr(t,e){return mm(e,t.syncPointTree_,null,Ta(t.pendingWriteTree_,ue()))}function mm(t,e,n,s){if(ie(t.path))return Am(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=im(s,o);r=r.concat(mm(a,l,c,u))}return i&&(r=r.concat(yu(i,t,s,n))),r}}function Am(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=im(s,o),u=t.operationForChild(o);u&&(r=r.concat(Am(u,a,l,c)))}),i&&(r=r.concat(yu(i,t,s,n))),r}function vm(t,e){const n=e.query,s=pr(t,n);return{hashFn:()=>(DO(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?KO(t,n._path,s):QO(t,n._path);{const r=qR(i,n);return _m(t,n,null,r)}}}}function pr(t,e){const n=Sa(e);return t.queryToTagMap.get(n)}function Sa(t){return t._path.toString()+"$"+t._queryIdentifier}function Cu(t,e){return t.tagToQueryMap.get(e)}function wu(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Tu(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Ta(t.pendingWriteTree_,e);return yu(s,n,i,null)}function XO(t){return t.fold((e,n,s)=>{if(n&&Vn(n))return[Ia(n)];{let i=[];return n&&(i=hm(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(VO())(t._repo,t._path):t}function JO(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Sa(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ZO(){return jO++}function ek(t,e,n){const s=e._path,i=pr(t,e),r=vm(t,n),o=t.listenProvider_.startListening(zi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)O(!Vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ie(c)&&u&&Vn(u))return[Ia(u).query];{let d=[];return u&&(d=d.concat(hm(u).map(p=>p.query))),tt(h,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(zi(u),pr(t,u))}}return o}/**
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
 */class Iu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Iu(n)}node(){return this.node_}}class Su{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Su(this.syncTree_,n)}node(){return bu(this.syncTree_,this.path_)}}const tk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ff=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},sk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ik=function(t,e,n,s){return Nu(e,new Su(n,t),s)},Em=function(t,e,n){return Nu(t,new Iu(e),n)};function Nu(t,e,n){const s=t.getPriority().val(),i=ff(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ff(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,Be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Me(i))),o.forEachChild(Te,(a,l)=>{const c=Nu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ru{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ou(t,e){let n=e instanceof ve?e:new ve(e),s=t,i=re(n);for(;i!==null;){const r=si(s.node.children,i)||{children:{},childCount:0};s=new Ru(i,s,r),n=Ee(n),i=re(n)}return s}function yi(t){return t.node.value}function ym(t,e){t.node.value=e,cc(t)}function bm(t){return t.node.childCount>0}function rk(t){return yi(t)===void 0&&!bm(t)}function Na(t,e){tt(t.node.children,(n,s)=>{e(new Ru(n,t,s))})}function Cm(t,e,n,s){n&&!s&&e(t),Na(t,i=>{Cm(i,e,!0,s)}),n&&s&&e(t)}function ok(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Pr(t){return new ve(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&ak(t.parent,t.name,t)}function ak(t,e,n){const s=rk(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,cc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
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
 */const lk=/[\[\].#$\/\u0000-\u001F\u007F]/,ck=/[\[\].#$\u0000-\u001F\u007F]/,gl=10*1024*1024,wm=function(t){return typeof t=="string"&&t.length!==0&&!lk.test(t)},Tm=function(t){return typeof t=="string"&&t.length!==0&&!ck.test(t)},uk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tm(t)},Im=function(t,e,n,s){s&&e===void 0||ku(iu(t,"value"),e,n)},ku=function(t,e,n){const s=n instanceof ve?new N0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(s)+" with contents = "+e.toString());if(Eg(e))throw new Error(t+"contains "+e.toString()+" "+Xn(s));if(typeof e=="string"&&e.length>gl/3&&ya(e)>gl)throw new Error(t+"contains a string greater than "+gl+" utf8 bytes "+Xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!wm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);R0(s,o),ku(t,a,s),O0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xn(s)+" in addition to actual children.")}},Sm=function(t,e,n,s){if(!(s&&n===void 0)&&!Tm(n))throw new Error(iu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hk=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sm(t,e,n,s)},Nm=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uk(n))throw new Error(iu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!jg(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yt(t,e,n){Rm(t,n),pk(t,s=>Tt(s,e)||Tt(e,s))}function pk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(_k(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _k(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();us&&He("event: "+n.toString()),Ei(s)}}}/**
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
 */const gk="repo_interrupt",mk=25;class Ak{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$o(),this.transactionQueueTree_=new Ru,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vk(t,e,n){if(t.stats_=uu(t.repoInfo_),t.forceRestClient_||ZR())t.server_=new Mo(t.repoInfo_,(s,i,r,o)=>{pf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_f(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new an(t.repoInfo_,e,(s,i,r,o)=>{pf(t,s,i,r,o)},s=>{_f(t,s)},s=>{Ek(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=i0(t.repoInfo_,()=>new nO(t.stats_,t.server_)),t.infoData_=new X0,t.infoSyncTree_=new df({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=kr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pu(t,"connected",!1),t.serverSyncTree_=new df({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Yt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Om(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Du(t){return tk({timestamp:Om(t)})}function pf(t,e,n,s,i){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Oo(n,c=>Be(c));o=zO(t.serverSyncTree_,r,l,i)}else{const l=Be(n);o=gm(t.serverSyncTree_,r,l,i)}else if(s){const l=Oo(n,c=>Be(c));o=GO(t.serverSyncTree_,r,l)}else{const l=Be(n);o=kr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oa(t,r)),Yt(t.eventQueue_,a,o)}function _f(t,e){Pu(t,"connected",e),e===!1&&Ck(t)}function Ek(t,e){tt(e,(n,s)=>{Pu(t,n,s)})}function Pu(t,e,n){const s=new ve("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(s,i);const r=kr(t.infoSyncTree_,s,i);Yt(t.eventQueue_,s,r)}function km(t){return t.nextWriteId_++}function yk(t,e,n){const s=YO(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Be(i).withIndex(e._queryParams.getIndex());qO(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=kr(t.serverSyncTree_,e._path,r);else{const a=pr(t.serverSyncTree_,e);o=gm(t.serverSyncTree_,e._path,r,a)}return Yt(t.eventQueue_,e._path,o),_m(t.serverSyncTree_,e,n,null,!0),r},i=>(Ra(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function bk(t,e,n,s,i){Ra(t,"set",{path:e.toString(),value:n,priority:s});const r=Du(t),o=Be(n,s),a=bu(t.serverSyncTree_,e),l=Em(o,a,r),c=km(t),u=pm(t.serverSyncTree_,e,l,c,!0);Rm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Ze("set at "+e+" failed: "+d);const m=os(t.serverSyncTree_,c,!g);Yt(t.eventQueue_,e,m),Tk(t,i,d,p)});const h=Mm(t,e);Oa(t,h),Yt(t.eventQueue_,h,[])}function Ck(t){Ra(t,"onDisconnectEvents");const e=Du(t),n=$o();ic(t.onDisconnect_,ue(),(i,r)=>{const o=ik(i,r,t.serverSyncTree_,e);Jg(n,i,o)});let s=[];ic(n,ue(),(i,r)=>{s=s.concat(kr(t.serverSyncTree_,i,r));const o=Mm(t,i);Oa(t,o)}),t.onDisconnect_=$o(),Yt(t.eventQueue_,ue(),s)}function wk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gk)}function Ra(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function Tk(t,e,n,s){e&&Ei(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Dm(t,e,n){return bu(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function xu(t,e=t.transactionQueueTree_){if(e||ka(t,e),yi(e)){const n=xm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ik(t,Pr(e),n)}else bm(e)&&Na(e,n=>{xu(t,n)})}function Ik(t,e,n){const s=n.map(c=>c.currentWriteId),i=Dm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ze(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ra(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(os(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ka(t,Ou(t.transactionQueueTree_,e)),xu(t,t.transactionQueueTree_),Yt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ei(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Oa(t,e)}},o)}function Oa(t,e){const n=Pm(t,e),s=Pr(n),i=xm(t,n);return Sk(t,i,s),s}function Sk(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mk)u=!0,h="maxretry",i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Dm(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){ku("transaction failed: Data returned ",p,l.path);let g=Be(p);typeof p=="object"&&p!=null&&_n(p,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,v=Du(t),w=Em(g,d,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=km(t),o.splice(o.indexOf(y),1),i=i.concat(pm(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(os(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0))}Yt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ka(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ei(s[a]);xu(t,t.transactionQueueTree_)}function Pm(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&yi(s)===void 0;)s=Ou(s,n),e=Ee(e),n=re(e);return s}function xm(t,e){const n=[];return Lm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Lm(t,e,n){const s=yi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Na(e,i=>{Lm(t,i,n)})}function ka(t,e){const n=yi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ym(e,n.length>0?n:void 0)}Na(e,s=>{ka(t,s)})}function Mm(t,e){const n=Pr(Pm(t,e)),s=Ou(t.transactionQueueTree_,e);return ok(s,i=>{ml(t,i)}),ml(t,s),Cm(s,i=>{ml(t,i)}),n}function ml(t,e){const n=yi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(os(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ym(e,void 0):n.length=r+1,Yt(t.eventQueue_,Pr(e),i);for(let o=0;o<s.length;o++)Ei(s[o])}}/**
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
 */function Nk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Rk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const gf=function(t,e){const n=Ok(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dg(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ve(n.pathString)}},Ok=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Nk(t.substring(u,h)));const d=Rk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const mf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kk=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=mf.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=mf.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Dk{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class Pk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Lu{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ie(this._path)?null:Hg(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=ef(this._queryParams),n=lu(e);return n==="{}"?"default":n}get _queryObject(){return ef(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Lu))return!1;const n=this._repo===e._repo,s=jg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+S0(this._path)}}class gn extends Lu{constructor(e,n){super(e,n,new _u,!1)}get parent(){const e=Vg(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _r{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=ai(this.ref,e);return new _r(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new _r(i,ai(this.ref,s),Te)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $m(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?ai(t._root,e):t._root}function ai(t,e){return t=Fe(t),re(t._path)===null?hk("child","path",e,!1):Sm("child","path",e,!1),new gn(t._repo,xe(t._path,e))}function Lk(t,e){t=Fe(t),Nm("push",t._path),Im("push",e,t._path,!0);const n=Om(t._repo),s=kk(n),i=ai(t,s),r=ai(t,s);let o;return e!=null?o=Bm(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Bm(t,e){t=Fe(t),Nm("set",t._path),Im("set",e,t._path,!1);const n=new Ea;return bk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function FL(t){t=Fe(t);const e=new xk(()=>{}),n=new Mu(e);return yk(t._repo,t,n).then(s=>new _r(s,new gn(t._repo,t._path),t._queryParams.getIndex()))}class Mu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Dk("value",this,new _r(e.snapshotNode,new gn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pk(this,e,n):null}matches(e){return e instanceof Mu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}$O(gn);WO(gn);/**
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
 */const Mk="FIREBASE_DATABASE_EMULATOR_HOST",uc={};let $k=!1;function Bk(t,e,n,s){t.repoInfo_=new Dg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Fk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Mk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=gf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ws(Ws.OWNER):new t0(t.name,t.options,e);dk("Invalid Firebase Database URL",o),ie(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hk(a,t,u,new e0(t.name,n));return new Wk(h,t)}function Uk(t,e){const n=uc[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wk(t),delete n[t.key]}function Hk(t,e,n,s){let i=uc[e.name];i||(i={},uc[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ak(t,$k,n,s),i[t.toURLString()]=r,r}class Wk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function Vk(t=au(),e){const n=ba(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=og("database");s&&jk(n,...s)}return n}function jk(t,e,n,s={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ws(Ws.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:lg(s.mockUserToken,t.app.options.projectId);r=new Ws(o)}Bk(i,e,n,r)}/**
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
 */function Gk(t){FR(Ai),gs(new Un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Fk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),jt($d,Bd,t),jt($d,Bd,"esm2017")}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gk();/**
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
 */const Fm="firebasestorage.googleapis.com",Um="storageBucket",Qk=2*60*1e3,Kk=10*60*1e3;/**
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
 */class Se extends pn{constructor(e,n,s=0){super(Al(e),`Firebase Storage: ${n} (${Al(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Al(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Al(t){return"storage/"+t}function $u(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function zk(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qk(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function Xk(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Jk(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Zk(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eD(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function tD(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function nD(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sD(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Um+"' property when initializing the app?")}function iD(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rD(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oD(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hc(t){return new Se(Ie.INVALID_ARGUMENT,t)}function Hm(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function aD(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qi(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Li(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw nD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===Fm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${y}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<b.length;N++){const U=b[N],V=U.regex.exec(e);if(V){const Y=V[U.indices.bucket];let B=V[U.indices.path];B||(B=""),s=new rt(Y,B),U.postModify(s);break}}if(s==null)throw tD(e);return s}}class lD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(p,l())},y)}function d(){r&&clearTimeout(r)}function p(y,...v){if(c){d();return}if(y){d(),u.call(null,y,...v);return}if(l()||o){d(),u.call(null,y,...v);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let g=!1;function m(y){g||(g=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function uD(t){t(!1)}/**
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
 */function hD(t){return t!==void 0}function dD(t){return typeof t=="object"&&!Array.isArray(t)}function Bu(t){return typeof t=="string"||t instanceof String}function Af(t){return Fu()&&t instanceof Blob}function Fu(){return typeof Blob<"u"&&!vN()}function vf(t,e,n,s){if(s<e)throw hc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw hc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Uu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Wm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hs||(hs={}));/**
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
 */function fD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class pD{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Zr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===hs.NO_ERROR,l=r.getStatus();if(!a||fD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===hs.ABORT;s(!1,new Zr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Zr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=$u();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Hm():eD();o(l)}else{const l=Zk();o(l)}};this.canceled_?n(!1,new Zr(!1,null,!0)):this.backoffId_=cD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function _D(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vD(t,e,n,s,i,r,o=!0){const a=Wm(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return mD(c,e),_D(c,n),gD(c,r),AD(c,s),new pD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ED(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yD(...t){const e=ED();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Fu())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function CD(t){if(typeof atob>"u")throw oD("base-64");return atob(t)}/**
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
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vl{constructor(e,n){this.data=e,this.contentType=n||null}}function wD(t,e){switch(t){case Ut.RAW:return new vl(Vm(e));case Ut.BASE64:case Ut.BASE64URL:return new vl(jm(t,e));case Ut.DATA_URL:return new vl(ID(e),SD(e))}throw $u()}function Vm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function TD(t){let e;try{e=decodeURIComponent(t)}catch{throw qi(Ut.DATA_URL,"Malformed data URL.")}return Vm(e)}function jm(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw qi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw qi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CD(e)}catch(i){throw i.message.includes("polyfill")?i:qi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Gm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qi(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ND(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ID(t){const e=new Gm(t);return e.base64?jm(Ut.BASE64,e.rest):TD(e.rest)}function SD(t){return new Gm(t).contentType}function ND(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cn{constructor(e,n){let s=0,i="";Af(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Af(this.data_)){const s=this.data_,i=bD(s,e,n);return i===null?null:new Cn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(s,!0)}}static getBlob(...e){if(Fu()){const n=e.map(s=>s instanceof Cn?s.data_:s);return new Cn(yD.apply(null,n))}else{const n=e.map(o=>Bu(o)?wD(Ut.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Cn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Qm(t){let e;try{e=JSON.parse(t)}catch{return null}return dD(e)?e:null}/**
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
 */function RD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OD(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Km(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function kD(t,e){return e}class Qe{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||kD}}let eo=null;function DD(t){return!Bu(t)||t.length<2?t:Km(t)}function zm(){if(eo)return eo;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(r,o){return DD(o)}const n=new Qe("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Qe("size");return i.xform=s,t.push(i),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),eo=t,eo}function PD(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new rt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function xD(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return PD(s,t),s}function qm(t,e,n){const s=Qm(e);return s===null?null:xD(t,s,n)}function LD(t,e,n,s){const i=Qm(e);if(i===null||!Bu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Uu(d,n,s),g=Wm({alt:"media",token:c});return p+g})[0]}function MD(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Ym{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Xm(t){if(!t)throw $u()}function $D(t,e){function n(s,i){const r=qm(t,i,e);return Xm(r!==null),r}return n}function BD(t,e){function n(s,i){const r=qm(t,i,e);return Xm(r!==null),LD(r,i,t.host,t._protocol)}return n}function Jm(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Xk():i=Yk():n.getStatus()===402?i=qk(t.bucket):n.getStatus()===403?i=Jk(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function FD(t){const e=Jm(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=zk(t.path)),r.serverResponse=i.serverResponse,r}return n}function UD(t,e,n){const s=e.fullServerUrl(),i=Uu(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ym(i,r,BD(t,n),o);return a.errorHandler=FD(e),a}function HD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function WD(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=HD(null,e)),s}function VD(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let N=0;N<2;N++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=WD(e,s,i),u=MD(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Cn.getBlob(h,s,d);if(p===null)throw iD();const g={name:c.fullPath},m=Uu(r,t.host,t._protocol),y="POST",v=t.maxUploadRetryTime,w=new Ym(m,y,$D(t,n),v);return w.urlParams=g,w.headers=o,w.body=p.uploadData(),w.errorHandler=Jm(e),w}class jD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GD extends jD{initXhr(){this.xhr_.responseType="text"}}function Zm(){return new GD}/**
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
 */class Es{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Es(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Km(this._location.path)}get storage(){return this._service}get parent(){const e=RD(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aD(e)}}function QD(t,e,n){t._throwIfRoot("uploadBytes");const s=VD(t.storage,t._location,zm(),new Cn(e,!0),n);return t.storage.makeRequestWithTokens(s,Zm).then(i=>({metadata:i,ref:t}))}function KD(t){t._throwIfRoot("getDownloadURL");const e=UD(t.storage,t._location,zm());return t.storage.makeRequestWithTokens(e,Zm).then(n=>{if(n===null)throw rD();return n})}function zD(t,e){const n=OD(t._location.path,e),s=new rt(t._location.bucket,n);return new Es(t.storage,s)}/**
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
 */function qD(t){return/^[A-Za-z]+:\/\//.test(t)}function YD(t,e){return new Es(t,e)}function eA(t,e){if(t instanceof Hu){const n=t;if(n._bucket==null)throw sD();const s=new Es(n,n._bucket);return e!=null?eA(s,e):s}else return e!==void 0?zD(t,e):t}function XD(t,e){if(e&&qD(e)){if(t instanceof Hu)return YD(t,e);throw hc("To use ref(service, url), the first argument must be a Storage instance.")}else return eA(t,e)}function Ef(t,e){const n=e==null?void 0:e[Um];return n==null?null:rt.makeFromBucketSpec(n,t)}function JD(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:lg(i,t.app.options.projectId))}class Hu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Fm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qk,this._maxUploadRetryTime=Kk,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=Ef(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Ef(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new lD(Hm());{const o=vD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const yf="@firebase/storage",bf="0.11.2";/**
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
 */const tA="storage";function ZD(t,e,n){return t=Fe(t),QD(t,e,n)}function eP(t){return t=Fe(t),KD(t)}function Cf(t,e){return t=Fe(t),XD(t,e)}function tP(t=au(),e){t=Fe(t);const s=ba(t,tA).getImmediate({identifier:e}),i=og("storage");return i&&nP(s,...i),s}function nP(t,e,n,s={}){JD(t,e,n,s)}function sP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hu(n,s,i,e,Ai)}function iP(){gs(new Un(tA,sP,"PUBLIC").setMultipleInstances(!0)),jt(yf,bf,""),jt(yf,bf,"esm2017")}iP();const rP={class:"container bg-light pt-5"},oP={class:"col-10 mb-3"},aP=x("label",{for:"inputTheme",class:"form-label"},"Title",-1),lP={class:"col-10 mb-3"},cP=x("label",{for:"inputRoute",class:"form-label"},"Route",-1),uP=xc('<div class="col-10 mb-3"><p>Tags</p><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM"><label class="form-check-label" for="tagCheckbox1">PM</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend"><label class="form-check-label" for="tagCheckbox2">Frontend</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX"><label class="form-check-label" for="tagCheckbox3">UIUX</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App"><label class="form-check-label" for="tagCheckbox4">App</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web"><label class="form-check-label" for="tagCheckbox5">Web</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial"><label class="form-check-label" for="tagCheckbox6">Commercial</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended"><label class="form-check-label" for="tagCheckbox0">Recommended</label></div></div>',1),hP={class:"col-10 mb-3"},dP=x("label",{for:"inputComment",class:"form-label"},"Comment",-1),fP={class:"col-10 mb-3"},pP=x("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),_P={class:"col-10 mb-3"},gP=x("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),mP={class:"col-10 mb-3"},AP=x("label",{for:"file-input",class:"form-label"},"選擇封面(720*420)",-1),vP={key:0,class:"mt-3"},EP=["src"],yP=["disabled"],bP={class:"col-10 mb-3"},CP=["disabled"],wP={__name:"WorkWallBS",setup(t){const e=Cf(kL,"workCovers"),n=Lk(ai(DL,"works")).key;let s=[],i=Mt(""),r=Mt(""),o=Mt(""),a=Mt(""),l=Mt("2023-01"),c=Mt("");const u=Mt(null),h=Mt(null),d=Mt(null);window.onload=function(){const v=document.getElementsByClassName("tag-Checkbox");for(let w=0;w<v.length;w++)v[w].addEventListener("click",()=>{p(v)})};function p(v){let w=[];for(let b=0;b<v.length;b++)v[b].checked&&w.push(v[b].value);s=w}function g(v){u.value=v.target.files[0];const w=new FileReader;w.readAsDataURL(u.value),w.onload=()=>{h.value=w.result}}async function m(){const v=Cf(e,u.value.name);await ZD(v,u.value),r=await eP(v),u.value=null,h.value=null,d.value="",alert("文件上傳成功，URL: "+r)}async function y(){PL(n,s,"/MyPortfolio/Work/"+i.value,r,o.value,a.value,l.value,c.value)}return(v,w)=>(zt(),Ln("section",rP,[x("form",{onSubmit:y,class:"row justify-content-center"},[x("div",oP,[aP,wi(x("input",{type:"text","onUpdate:modelValue":w[0]||(w[0]=b=>Ne(o)?o.value=b:o=b),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[Ti,ut(o)]])]),x("div",lP,[cP,wi(x("input",{type:"text","onUpdate:modelValue":w[1]||(w[1]=b=>Ne(i)?i.value=b:i=b),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[Ti,ut(i)]])]),uP,x("div",hP,[dP,wi(x("input",{type:"text","onUpdate:modelValue":w[2]||(w[2]=b=>Ne(a)?a.value=b:a=b),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[Ti,ut(a)]])]),x("div",fP,[pP,wi(x("input",{type:"month","onUpdate:modelValue":w[3]||(w[3]=b=>Ne(l)?l.value=b:l=b),class:"form-control",id:"inputDonedate"},null,512),[[Ti,ut(l)]])]),x("div",_P,[gP,wi(x("input",{type:"text","onUpdate:modelValue":w[4]||(w[4]=b=>Ne(c)?c.value=b:c=b),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[Ti,ut(c)]])]),x("div",mP,[AP,x("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:d,onChange:g,accept:"image/*"},null,544),h.value?(zt(),Ln("div",vP,[x("img",{src:h.value,class:"img-fluid",alt:"Selected Image"},null,8,EP)])):EE("",!0),x("button",{type:"button",class:"btn btn-primary mt-3",onClick:m,disabled:!u.value},"上傳圖片",8,yP)]),x("div",bP,[x("button",{type:"submit",disabled:!ut(o),class:"btn btn-primary mb-3"},"確認送出",8,CP)])],32)]))}},TP={__name:"WorkBS",setup(t){return(e,n)=>(zt(),$p(wP))}},IP=[{path:"/MyPortfolio",name:"Home",component:cN},{path:"/MyPortfolio/About",name:"About",component:()=>Oi(()=>import("./About-23bd3452.js"),["assets/About-23bd3452.js","assets/About-e43a0279.css"])},{path:"/MyPortfolio/Work",name:"Work",component:()=>Oi(()=>import("./Work-d1e7fdf0.js"),["assets/Work-d1e7fdf0.js","assets/Work-b963d041.css"])},{path:"/:domain(.*)*",name:"NotFound",component:()=>Oi(()=>import("./404-f38acf5b.js"),[])},{path:"/MyPortfolio/Login",name:"Login",component:()=>Oi(()=>import("./Login-8ff371b9.js"),[])},{path:"/MyPortfolio/backstage/workwall",name:"workwall",component:TP},{path:"/MyPortfolio/Work/TravelMaker",name:"TravelMaker",component:()=>Oi(()=>import("./TravelMaker-f1b77f37.js"),["assets/TravelMaker-f1b77f37.js","assets/TravelMaker-e7c18669.css"])},{path:"/MyPortfolio/Work/PersonalityQuiz",name:"PersonalityQuiz",redirect:"https://cookie-place-537.notion.site/Junyi-f89612e0e20b4feca5a710e2fd46f147"},{path:"/MyPortfolio/Work/InshoneDesign",name:"InshoneDesign",redirect:"https://cookie-place-537.notion.site/7ea75a0f43c64179b934cc40b70b4656"},{path:"/MyPortfolio/Work/LilyChen",name:"LilyChen",redirect:"https://cookie-place-537.notion.site/Lily-Chen-Website-4af5b9ec108d4a1888da1803646fc3b7"},{path:"/MyPortfolio/Work/AwardHunter",name:"AwardHunter",redirect:"https://cookie-place-537.notion.site/App-Redesign-25de4cd8b9f445628d217de9fd78e5a9"},{path:"/MyPortfolio/Work/BinaryCube",name:"BinaryCube",redirect:"https://play.google.com/store/apps/developer?id=Forced_Dev"}],SP=RS({history:GI(),routes:IP,scrollBehavior(t,e,n){return{top:0}}});var NP="firebase",RP="9.17.2";/**
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
 */jt(NP,RP,"app");function Wu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function nA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OP=nA,sA=new Sr("auth","Firebase",nA());/**
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
 */const wf=new ru("@firebase/auth");function fo(t,...e){wf.logLevel<=Ae.ERROR&&wf.error(`Auth (${Ai}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw Vu(t,...e)}function Gt(t,...e){return Vu(t,...e)}function kP(t,e,n){const s=Object.assign(Object.assign({},OP()),{[e]:n});return new Sr("auth","Firebase",s).create(e,{appName:t.name})}function Vu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sA.create(t,...e)}function K(t,e,...n){if(!t)throw Vu(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function hn(t,e){t||tn(e)}/**
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
 */const Tf=new Map;function nn(t){hn(t instanceof Function,"Expected a class definition");let e=Tf.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tf.set(t,e),e)}/**
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
 */function DP(t,e){const n=ba(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ko(r,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xP(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xP()||EN()||"connection"in navigator)?navigator.onLine:!0}function MP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=su()||cg()}get(){return LP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ju(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iA{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const BP=new xr(3e4,6e4);function Da(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,s,i={}){return rA(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iA.fetch()(oA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rA(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$P),e);try{const i=new FP(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw to(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kP(t,u,c);kt(t,u)}}catch(i){if(i instanceof pn)throw i;kt(t,"internal-error",{message:String(i)})}}async function Pa(t,e,n,s,i={}){const r=await Lr(t,e,n,s,i);return"mfaPendingCredential"in r&&kt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function oA(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ju(t.config,i):`${t.config.apiScheme}://${i}`}class FP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),BP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Gt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function UP(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function HP(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WP(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),i=Gu(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yi(El(i.auth_time)),issuedAtTime:Yi(El(i.iat)),expirationTime:Yi(El(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(t){return Number(t)*1e3}function Gu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ro(n);return i?JSON.parse(i):(fo("Failed to decode base64 JWT payload"),null)}catch(i){return fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VP(t){const e=Gu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&jP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,s=await t.getIdToken(),i=await gr(t,HP(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?zP(r.providerUserInfo):[],a=KP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new aA(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function QP(t){const e=Fe(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KP(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function zP(t){return t.map(e=>{var{providerId:n}=e,s=Wu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qP(t,e){const n=await rA(t,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=oA(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iA.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await qP(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function En(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ds{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new aA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WP(this,e)}reload(){return QP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gr(this,UP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:N,isAnonymous:U,providerData:V,stsTokenManager:Y}=n;K(b&&Y,e,"internal-error");const B=mr.fromJSON(this.name,Y);K(typeof b=="string",e,"internal-error"),En(h,e.name),En(d,e.name),K(typeof N=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),En(p,e.name),En(g,e.name),En(m,e.name),En(y,e.name),En(v,e.name),En(w,e.name);const q=new ds({uid:b,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:B,createdAt:v,lastLoginAt:w});return V&&Array.isArray(V)&&(q.providerData=V.map(G=>Object.assign({},G))),y&&(q._redirectEventId=y),q}static async _fromIdTokenResponse(e,n,s=!1){const i=new mr;i.updateFromServerResponse(n);const r=new ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Go(r),r}}/**
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
 */class lA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lA.type="NONE";const Sf=lA;/**
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
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,r),this.fullPersistenceKey=po("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new js(nn(Sf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||nn(Sf);const o=po(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ds._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new js(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new js(r,e,s))}}/**
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
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fA(e))return"Blackberry";if(pA(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||uA(e))&&!e.includes("edge/"))return"Chrome";if(dA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cA(t=je()){return/firefox\//i.test(t)}function Qu(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uA(t=je()){return/crios\//i.test(t)}function hA(t=je()){return/iemobile/i.test(t)}function dA(t=je()){return/android/i.test(t)}function fA(t=je()){return/blackberry/i.test(t)}function pA(t=je()){return/webos/i.test(t)}function xa(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YP(t=je()){var e;return xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XP(){return yN()&&document.documentMode===10}function _A(t=je()){return xa(t)||dA(t)||pA(t)||fA(t)||/windows phone/i.test(t)||hA(t)}function JP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gA(t,e=[]){let n;switch(t){case"Browser":n=Nf(je());break;case"Worker":n=`${Nf(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${s}`}/**
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
 */class ZP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class ex{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new ZP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sA,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function La(t){return Fe(t)}class Rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ON(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tx(t,e,n){const s=La(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=mA(e),{host:o,port:a}=nx(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sx()}function mA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nx(t){const e=mA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Of(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Of(o)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function ix(t,e){return Lr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function rx(t,e){return Pa(t,"POST","/v1/accounts:signInWithPassword",Da(t,e))}/**
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
 */async function ox(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",Da(t,e))}async function ax(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",Da(t,e))}/**
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
 */class Ar extends Ku{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ar(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ox(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ix(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ax(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return Pa(t,"POST","/v1/accounts:signInWithIdp",Da(t,e))}/**
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
 */const lx="http://localhost";class ys extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Wu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
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
 */function cx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ux(t){const e=$i(Bi(t)).link,n=e?$i(Bi(e)).deep_link_id:null,s=$i(Bi(t)).deep_link_id;return(s?$i(Bi(s)).link:null)||s||n||e||t}class zu{constructor(e){var n,s,i,r,o,a;const l=$i(Bi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=cx((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ux(e);try{return new zu(n)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zu.parseLink(n);return K(s,"argument-error"),Ar._fromEmailAndCode(e,s.code,s.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class AA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends AA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Mr{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class In extends Mr{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Sn extends Mr{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ds._fromIdTokenResponse(e,s,i),o=kf(s);return new li({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kf(s);return new li({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Qo(e,n,s,i)}}function vA(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,r,e,s):r})}async function hx(t,e,n=!1){const s=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",s)}/**
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
 */async function dx(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await gr(t,vA(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Gu(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),li._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&kt(s,"user-mismatch"),r}}/**
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
 */async function EA(t,e,n=!1){const s="signIn",i=await vA(t,s,e),r=await li._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fx(t,e){return EA(La(t),e)}function UL(t,e,n){return fx(Fe(t),bi.credential(e,n))}function px(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function _x(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}const Ko="__sak";/**
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
 */class yA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gx(){const t=je();return Qu(t)||xa(t)}const mx=1e3,Ax=10;class bA extends yA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gx()&&JP(),this.fallbackToPolling=_A(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);XP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ax):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bA.type="LOCAL";const vx=bA;/**
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
 */class CA extends yA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CA.type="SESSION";const wA=CA;/**
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
 */function Ex(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Ex(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function qu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=qu("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function bx(t){Qt().location.href=t}/**
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
 */function TA(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function Cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tx(){return TA()?self:null}/**
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
 */const IA="firebaseLocalStorageDb",Ix=1,zo="firebaseLocalStorage",SA="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function Sx(){const t=indexedDB.deleteDatabase(IA);return new $r(t).toPromise()}function fc(){const t=indexedDB.open(IA,Ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zo,{keyPath:SA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zo)?e(s):(s.close(),await Sx(),e(await fc()))})})}async function Df(t,e,n){const s=$a(t,!0).put({[SA]:e,value:n});return new $r(s).toPromise()}async function Nx(t,e){const n=$a(t,!1).get(e),s=await new $r(n).toPromise();return s===void 0?null:s.value}function Pf(t,e){const n=$a(t,!0).delete(e);return new $r(n).toPromise()}const Rx=800,Ox=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ox)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(Tx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cx(),!this.activeServiceWorker)return;this.sender=new yx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Df(e,Ko,"1"),await Pf(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Df(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Nx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=$a(i,!1).getAll();return new $r(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const kx=NA;/**
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
 */function Dx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Px(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Dx().appendChild(s)})}function xx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xr(3e4,6e4);/**
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
 */function Lx(t,e){return e?nn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yu extends Ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mx(t){return EA(t.auth,new Yu(t),t.bypassAuthState)}function $x(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),dx(n,new Yu(t),t.bypassAuthState)}async function Bx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hx(n,new Yu(t),t.bypassAuthState)}/**
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
 */class RA{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mx;case"linkViaPopup":case"linkViaRedirect":return Bx;case"reauthViaPopup":case"reauthViaRedirect":return $x;default:kt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fx=new xr(2e3,1e4);class Ms extends RA{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Fx.get())};e()}}Ms.currentPopupAction=null;/**
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
 */const Ux="pendingRedirect",_o=new Map;class Hx extends RA{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const s=await Wx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wx(t,e){const n=Gx(e),s=jx(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Vx(t,e){_o.set(t._key(),e)}function jx(t){return nn(t._redirectPersistence)}function Gx(t){return po(Ux,t.config.apiKey,t.name)}async function Qx(t,e,n=!1){const s=La(t),i=Lx(s,e),o=await new Hx(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Kx=10*60*1e3;class zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!OA(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(e))}saveEventToCache(e){this.cachedEventUids.add(xf(e)),this.lastProcessedEventTime=Date.now()}}function xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OA(t);default:return!1}}/**
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
 */async function Yx(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const Xx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jx=/^https?/;async function Zx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yx(t);for(const n of e)try{if(eL(n))return}catch{}kt(t,"unauthorized-domain")}function eL(t){const e=dc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Jx.test(n))return!1;if(Xx.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const tL=new xr(3e4,6e4);function Lf(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nL(t){return new Promise((e,n)=>{var s,i,r;function o(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(Gt(t,"network-request-failed"))},timeout:tL.get()})}if(!((i=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Qt().gapi)===null||r===void 0)&&r.load)o();else{const a=xx("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},Px(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function sL(t){return go=go||nL(t),go}/**
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
 */const iL=new xr(5e3,15e3),rL="__/auth/iframe",oL="emulator/auth/iframe",aL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cL(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ju(e,oL):`https://${t.config.authDomain}/${rL}`,s={apiKey:e.apiKey,appName:t.name,v:Ai},i=lL.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${mi(s).slice(1)}`}async function uL(t){const e=await sL(t),n=Qt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:cL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aL,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{r(o)},iL.get());function l(){Qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const hL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dL=500,fL=600,pL="_blank",_L="http://localhost";class Mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gL(t,e,n,s=dL,i=fL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hL),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=uA(c)?pL:n),cA(c)&&(e=e||_L,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(YP(c)&&a!=="_self")return mL(e||"",a),new Mf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Mf(h)}function mL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const AL="__/auth/handler",vL="emulator/auth/handler";function $f(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ai,eventId:i};if(e instanceof AA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Mr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${EL(t)}?${mi(a).slice(1)}`}function EL({config:t}){return t.emulator?ju(t,vL):`https://${t.authDomain}/${AL}`}/**
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
 */const yl="webStorageSupport";class yL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wA,this._completeRedirectFn=Qx,this._overrideRedirectResult=Vx}async _openPopup(e,n,s,i){var r;hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=$f(e,n,s,dc(),i);return gL(e,o,qu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),bx($f(e,n,s,dc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await uL(e),s=new zx(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yl,{type:yl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[yl];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _A()||Qu()||xa()}}const bL=yL;var Bf="@firebase/auth",Ff="0.21.4";/**
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
 */class CL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TL(t){gs(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{K(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gA(t)},u=new ex(a,l,c);return PP(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gs(new Un("auth-internal",e=>{const n=La(e.getProvider("auth").getImmediate());return(s=>new CL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Bf,Ff,wL(t)),jt(Bf,Ff,"esm2017")}/**
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
 */const IL=5*60,SL=ag("authIdTokenMaxAge")||IL;let Uf=null;const NL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SL)return;const i=n==null?void 0:n.token;Uf!==i&&(Uf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RL(t=au()){const e=ba(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DP(t,{popupRedirectResolver:bL,persistence:[kx,vx,wA]}),s=ag("authTokenSyncURL");if(s){const r=NL(s);_x(n,r,()=>r(n.currentUser)),px(n,o=>r(o))}const i=rg("auth");return i&&tx(n,`http://${i}`),n}TL("Browser");const kA=ny(Ty);kA.use(SP);kA.mount("#app");const OL={apiKey:"AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",authDomain:"frankportfolio-e3ae3.firebaseapp.com",databaseURL:"https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"frankportfolio-e3ae3",storageBucket:"frankportfolio-e3ae3.appspot.com",messagingSenderId:"483448448603",appId:"1:483448448603:web:d914b32657440240fc017e"},Xu=pg(OL),DA=Vk(Xu),kL=tP(Xu),DL=$m(DA,"works/"),HL=RL(Xu);function PL(t,e,n,s,i,r,o,a){Bm($m(DA,"works/"+i+t),{uid:t,tag:e,route:n,image:s,title:i,comment:r,donedate:o,viewcounts:a})}export{ht as F,DL as W,la as _,x as a,ge as b,Ln as c,xc as d,Oc as e,Ml as f,Mt as g,wi as h,FL as i,LL as j,$L as k,EE as l,Tp as m,Ti as n,zt as o,Rc as p,HL as q,ia as r,UL as s,xL as t,SP as u,ML as v,Ft as w,BL as x};
