(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function pc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Le(s)?Nv(s):pc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Le(t))return t;if(Ee(t))return t}}const Av=/;(?![^(]*\))/g,Sv=/:([^]+)/,Rv=/\/\*.*?\*\//gs;function Nv(t){const e={};return t.replace(Rv,"").split(Av).forEach(n=>{if(n){const s=n.split(Sv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _c(t){let e="";if(Le(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=_c(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kv=fc(Ov);function Mf(t){return!!t||t===""}function Pv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vo(t[s],e[s]);return n}function vo(t,e){if(t===e)return!0;let n=Qu(t),s=Qu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Qi(t),s=Qi(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?Pv(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vo(t[o],e[o]))return!1}}return String(t)===String(e)}const vL=t=>Le(t)?t:t==null?"":q(t)||Ee(t)&&(t.toString===Bf||!X(t.toString))?JSON.stringify(t,$f,2):String(t),$f=(t,e)=>e&&e.__v_isRef?$f(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ff(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!q(e)&&!Hf(e)?String(e):e,Te={},Ms=[],St=()=>{},Dv=()=>!1,xv=/^on[^a-z]/,Qo=t=>xv.test(t),gc=t=>t.startsWith("onUpdate:"),Ve=Object.assign,mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lv=Object.prototype.hasOwnProperty,ce=(t,e)=>Lv.call(t,e),q=Array.isArray,$s=t=>vr(t)==="[object Map]",Ff=t=>vr(t)==="[object Set]",Qu=t=>vr(t)==="[object Date]",X=t=>typeof t=="function",Le=t=>typeof t=="string",Qi=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Uf=t=>Ee(t)&&X(t.then)&&X(t.catch),Bf=Object.prototype.toString,vr=t=>Bf.call(t),Mv=t=>vr(t).slice(8,-1),Hf=t=>vr(t)==="[object Object]",vc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,Kt=Xo(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Fv=/\B([A-Z])/g,li=Xo(t=>t.replace(Fv,"-$1").toLowerCase()),Jo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=Xo(t=>t?`on${Jo(t)}`:""),Xi=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const Uv=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bt;class Bv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Hv(t,e=bt){e&&e.active&&e.effects.push(t)}function Wv(){return bt}const yc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wf=t=>(t.w&Dn)>0,Vf=t=>(t.n&Dn)>0,Vv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},jv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Wf(i)&&!Vf(i)?i.delete(t):e[n++]=i,i.w&=~Dn,i.n&=~Dn}e.length=n}},Tl=new WeakMap;let xi=0,Dn=1;const Cl=30;let wt;const os=Symbol(""),Il=Symbol("");class Ec{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hv(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Sn=!0,Dn=1<<++xi,xi<=Cl?Vv(this):Ju(this),this.fn()}finally{xi<=Cl&&jv(this),Dn=1<<--xi,wt=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const jf=[];function ci(){jf.push(Sn),Sn=!1}function ui(){const t=jf.pop();Sn=t===void 0?!0:t}function et(t,e,n){if(Sn&&wt){let s=Tl.get(t);s||Tl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=yc()),Kf(i)}}function Kf(t,e){let n=!1;xi<=Cl?Vf(t)||(t.n|=Dn,n=!Wf(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function an(t,e,n,s,i,r){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?vc(n)&&a.push(o.get("length")):(a.push(o.get(os)),$s(t)&&a.push(o.get(Il)));break;case"delete":q(t)||(a.push(o.get(os)),$s(t)&&a.push(o.get(Il)));break;case"set":$s(t)&&a.push(o.get(os));break}if(a.length===1)a[0]&&Al(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Al(yc(l))}}function Al(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Zu(s);for(const s of n)s.computed||Zu(s)}function Zu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kv=fc("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi)),zv=bc(),qv=bc(!1,!0),Gv=bc(!0),eh=Yv();function Yv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ci();const s=he(this)[e].apply(this,n);return ui(),s}}),t}function Qv(t){const e=he(this);return et(e,"has",t),e.hasOwnProperty(t)}function bc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?dy:Xf:e?Qf:Yf).get(s))return s;const o=q(s);if(!t){if(o&&ce(eh,i))return Reflect.get(eh,i,r);if(i==="hasOwnProperty")return Qv}const a=Reflect.get(s,i,r);return(Qi(i)?zf.has(i):Kv(i))||(t||et(s,"get",i),e)?a:Re(a)?o&&vc(i)?a:a.value:Ee(a)?t?Jf(a):yr(a):a}}const Xv=qf(),Jv=qf(!0);function qf(t=!1){return function(n,s,i,r){let o=n[s];if(Ks(o)&&Re(o)&&!Re(i))return!1;if(!t&&(!Eo(i)&&!Ks(i)&&(o=he(o),i=he(i)),!q(n)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=q(n)&&vc(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===he(r)&&(a?Xi(i,o)&&an(n,"set",s,i):an(n,"add",s,i)),l}}function Zv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&an(t,"delete",e,void 0),s}function ey(t,e){const n=Reflect.has(t,e);return(!Qi(e)||!zf.has(e))&&et(t,"has",e),n}function ty(t){return et(t,"iterate",q(t)?"length":os),Reflect.ownKeys(t)}const Gf={get:zv,set:Xv,deleteProperty:Zv,has:ey,ownKeys:ty},ny={get:Gv,set(t,e){return!0},deleteProperty(t,e){return!0}},sy=Ve({},Gf,{get:qv,set:Jv}),wc=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function $r(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=Zo(i),a=s?wc:n?Ic:Ji;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Fr(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ur(t,e=!1){return t=t.__v_raw,!e&&et(he(t),"iterate",os),Reflect.get(t,"size",t)}function th(t){t=he(t);const e=he(this);return Zo(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function nh(t,e){e=he(e);const n=he(this),{has:s,get:i}=Zo(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Xi(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function sh(t){const e=he(this),{has:n,get:s}=Zo(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&an(e,"delete",t,void 0),r}function ih(){const t=he(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Br(t,e){return function(s,i){const r=this,o=r.__v_raw,a=he(o),l=e?wc:t?Ic:Ji;return!t&&et(a,"iterate",os),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Hr(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=$s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?wc:e?Ic:Ji;return!e&&et(r,"iterate",l?Il:os),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function iy(){const t={get(r){return $r(this,r)},get size(){return Ur(this)},has:Fr,add:th,set:nh,delete:sh,clear:ih,forEach:Br(!1,!1)},e={get(r){return $r(this,r,!1,!0)},get size(){return Ur(this)},has:Fr,add:th,set:nh,delete:sh,clear:ih,forEach:Br(!1,!0)},n={get(r){return $r(this,r,!0)},get size(){return Ur(this,!0)},has(r){return Fr.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Br(!0,!1)},s={get(r){return $r(this,r,!0,!0)},get size(){return Ur(this,!0)},has(r){return Fr.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hr(r,!1,!1),n[r]=Hr(r,!0,!1),e[r]=Hr(r,!1,!0),s[r]=Hr(r,!0,!0)}),[t,n,e,s]}const[ry,oy,ay,ly]=iy();function Tc(t,e){const n=e?t?ly:ay:t?oy:ry;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const cy={get:Tc(!1,!1)},uy={get:Tc(!1,!0)},hy={get:Tc(!0,!1)},Yf=new WeakMap,Qf=new WeakMap,Xf=new WeakMap,dy=new WeakMap;function fy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function py(t){return t.__v_skip||!Object.isExtensible(t)?0:fy(Mv(t))}function yr(t){return Ks(t)?t:Cc(t,!1,Gf,cy,Yf)}function _y(t){return Cc(t,!1,sy,uy,Qf)}function Jf(t){return Cc(t,!0,ny,hy,Xf)}function Cc(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=py(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Fs(t){return Ks(t)?Fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function Eo(t){return!!(t&&t.__v_isShallow)}function Zf(t){return Fs(t)||Ks(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ep(t){return yo(t,"__v_skip",!0),t}const Ji=t=>Ee(t)?yr(t):t,Ic=t=>Ee(t)?Jf(t):t;function tp(t){Sn&&wt&&(t=he(t),Kf(t.dep||(t.dep=yc())))}function np(t,e){t=he(t);const n=t.dep;n&&Al(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Mt(t){return sp(t,!1)}function gy(t){return sp(t,!0)}function sp(t,e){return Re(t)?t:new my(t,e)}class my{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Ji(e)}get value(){return tp(this),this._value}set value(e){const n=this.__v_isShallow||Eo(e)||Ks(e);e=n?e:he(e),Xi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ji(e),np(this))}}function ht(t){return Re(t)?t.value:t}const vy={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ip(t){return Fs(t)?t:new Proxy(t,vy)}var rp;class yy{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rp]=!1,this._dirty=!0,this.effect=new Ec(e,()=>{this._dirty||(this._dirty=!0,np(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rp="__v_isReadonly";function Ey(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=St):(s=t.get,i=t.set),new yy(s,i,r||!i,n)}function Rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ea(r,e,n)}return i}function ft(t,e,n,s){if(X(t)){const r=Rn(t,e,n,s);return r&&Uf(r)&&r.catch(o=>{ea(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ft(t[r],e,n,s));return i}function ea(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}by(t,n,i,s)}function by(t,e,n,s=!0){console.error(t)}let Zi=!1,Sl=!1;const We=[];let Ft=0;const Us=[];let Qt=null,Xn=0;const op=Promise.resolve();let Ac=null;function ap(t){const e=Ac||op;return t?e.then(this?t.bind(this):t):e}function wy(t){let e=Ft+1,n=We.length;for(;e<n;){const s=e+n>>>1;er(We[s])<t?e=s+1:n=s}return e}function Sc(t){(!We.length||!We.includes(t,Zi&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?We.push(t):We.splice(wy(t.id),0,t),lp())}function lp(){!Zi&&!Sl&&(Sl=!0,Ac=op.then(up))}function Ty(t){const e=We.indexOf(t);e>Ft&&We.splice(e,1)}function Cy(t){q(t)?Us.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Xn+1:Xn))&&Us.push(t),lp()}function rh(t,e=Zi?Ft+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function cp(t){if(Us.length){const e=[...new Set(Us)];if(Us.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>er(n)-er(s)),Xn=0;Xn<Qt.length;Xn++)Qt[Xn]();Qt=null,Xn=0}}const er=t=>t.id==null?1/0:t.id,Iy=(t,e)=>{const n=er(t)-er(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function up(t){Sl=!1,Zi=!0,We.sort(Iy);const e=St;try{for(Ft=0;Ft<We.length;Ft++){const n=We[Ft];n&&n.active!==!1&&Rn(n,null,14)}}finally{Ft=0,We.length=0,cp(),Zi=!1,Ac=null,(We.length||Us.length)&&up()}}function Ay(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Te;d&&(i=n.map(p=>Le(p)?p.trim():p)),h&&(i=n.map(wl))}let a,l=s[a=Fa(e)]||s[a=Fa(Kt(e))];!l&&r&&(l=s[a=Fa(li(e))]),l&&ft(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,i)}}function hp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=hp(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(q(r)?r.forEach(l=>o[l]=null):Ve(o,r),Ee(t)&&s.set(t,o),o)}function ta(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,li(e))||ce(t,e))}let rt=null,na=null;function bo(t){const e=rt;return rt=t,na=t&&t.type.__scopeId||null,e}function Sy(t){na=t}function Ry(){na=null}function Li(t,e=rt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_h(-1);const r=bo(e);let o;try{o=t(...i)}finally{bo(r),s._d&&_h(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ua(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let b,y;const C=bo(t);try{if(n.shapeFlag&4){const R=i||s;b=$t(u.call(R,R,h,r,p,d,g)),y=l}else{const R=e;b=$t(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),y=e.props?l:Ny(l)}}catch(R){Ui.length=0,ea(R,t,1),b=Ce(Rt)}let w=b;if(y&&m!==!1){const R=Object.keys(y),{shapeFlag:U}=w;R.length&&U&7&&(o&&R.some(gc)&&(y=Oy(y,o)),w=Ln(w,y))}return n.dirs&&(w=Ln(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,bo(C),b}const Ny=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},Oy=(t,e)=>{const n={};for(const s in t)(!gc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ky(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?oh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ta(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?oh(s,o,c):!0:!!o;return!1}function oh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ta(n,r))return!0}return!1}function Py({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dy=t=>t.__isSuspense;function xy(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Cy(t)}function io(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function tn(t,e,n=!1){const s=Ne||rt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Wr={};function ro(t,e,n){return dp(t,e,n)}function dp(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Te){const a=Wv()===(Ne==null?void 0:Ne.scope)?Ne:null;let l,c=!1,u=!1;if(Re(t)?(l=()=>t.value,c=Eo(t)):Fs(t)?(l=()=>t,s=!0):q(t)?(u=!0,c=t.some(w=>Fs(w)||Eo(w)),l=()=>t.map(w=>{if(Re(w))return w.value;if(Fs(w))return ts(w);if(X(w))return Rn(w,a,2)})):X(t)?e?l=()=>Rn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ft(t,a,3,[d])}:l=St,e&&s){const w=l;l=()=>ts(w())}let h,d=w=>{h=y.onStop=()=>{Rn(w,a,4)}},p;if(nr)if(d=St,e?n&&ft(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const w=OE();p=w.__watcherHandles||(w.__watcherHandles=[])}else return St;let g=u?new Array(t.length).fill(Wr):Wr;const m=()=>{if(y.active)if(e){const w=y.run();(s||c||(u?w.some((R,U)=>Xi(R,g[U])):Xi(w,g)))&&(h&&h(),ft(e,a,3,[w,g===Wr?void 0:u&&g[0]===Wr?[]:g,d]),g=w)}else y.run()};m.allowRecurse=!!e;let b;i==="sync"?b=m:i==="post"?b=()=>Xe(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),b=()=>Sc(m));const y=new Ec(l,b);e?n?m():g=y.run():i==="post"?Xe(y.run.bind(y),a&&a.suspense):y.run();const C=()=>{y.stop(),a&&a.scope&&mc(a.scope.effects,y)};return p&&p.push(C),C}function Ly(t,e,n){const s=this.proxy,i=Le(t)?t.includes(".")?fp(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Ne;zs(this);const a=dp(i,r.bind(s),n);return o?zs(o):as(),a}function fp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ts(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ts(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Ff(t)||$s(t))t.forEach(n=>{ts(n,e)});else if(Hf(t))for(const n in t)ts(t[n],e);return t}function My(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vp(()=>{t.isMounted=!0}),yp(()=>{t.isUnmounting=!0}),t}const ut=[Function,Array],$y={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},setup(t,{slots:e}){const n=wE(),s=My();let i;return()=>{const r=e.default&&_p(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Rt){o=m;break}}const a=he(t),{mode:l}=a;if(s.isLeaving)return Ba(o);const c=ah(o);if(!c)return Ba(o);const u=Rl(c,a,s,n);Nl(c,u);const h=n.subTree,d=h&&ah(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(d&&d.type!==Rt&&(!Jn(c,d)||p)){const m=Rl(d,a,s,n);if(Nl(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ba(o);l==="in-out"&&c.type!==Rt&&(m.delayLeave=(b,y,C)=>{const w=pp(s,d);w[String(d.key)]=d,b._leaveCb=()=>{y(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},Fy=$y;function pp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:b,onAfterAppear:y,onAppearCancelled:C}=e,w=String(t.key),R=pp(n,t),U=($,G)=>{$&&ft($,s,9,G)},W=($,G)=>{const j=G[1];U($,G),q($)?$.every(ae=>ae.length<=1)&&j():$.length<=1&&j()},Y={mode:r,persisted:o,beforeEnter($){let G=a;if(!n.isMounted)if(i)G=m||a;else return;$._leaveCb&&$._leaveCb(!0);const j=R[w];j&&Jn(t,j)&&j.el._leaveCb&&j.el._leaveCb(),U(G,[$])},enter($){let G=l,j=c,ae=u;if(!n.isMounted)if(i)G=b||l,j=y||c,ae=C||u;else return;let _e=!1;const ge=$._enterCb=Be=>{_e||(_e=!0,Be?U(ae,[$]):U(j,[$]),Y.delayedLeave&&Y.delayedLeave(),$._enterCb=void 0)};G?W(G,[$,ge]):ge()},leave($,G){const j=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return G();U(h,[$]);let ae=!1;const _e=$._leaveCb=ge=>{ae||(ae=!0,G(),ge?U(g,[$]):U(p,[$]),$._leaveCb=void 0,R[j]===t&&delete R[j])};R[j]=t,d?W(d,[$,_e]):_e()},clone($){return Rl($,e,n,s)}};return Y}function Ba(t){if(sa(t))return t=Ln(t),t.children=null,t}function ah(t){return sa(t)?t.children?t.children[0]:void 0:t}function Nl(t,e){t.shapeFlag&6&&t.component?Nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _p(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===it?(o.patchFlag&128&&i++,s=s.concat(_p(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function gp(t){return X(t)?{setup:t,name:t.name}:t}const oo=t=>!!t.type.__asyncLoader,sa=t=>t.type.__isKeepAlive;function Uy(t,e){mp(t,"a",e)}function By(t,e){mp(t,"da",e)}function mp(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ia(e,s,n),n){let i=n.parent;for(;i&&i.parent;)sa(i.parent.vnode)&&Hy(s,e,n,i),i=i.parent}}function Hy(t,e,n,s){const i=ia(e,t,s,!0);Ep(()=>{mc(s[e],i)},n)}function ia(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ci(),zs(n);const a=ft(e,n,t,o);return as(),ui(),a});return s?i.unshift(r):i.push(r),r}}const hn=t=>(e,n=Ne)=>(!nr||t==="sp")&&ia(t,(...s)=>e(...s),n),Wy=hn("bm"),vp=hn("m"),Vy=hn("bu"),jy=hn("u"),yp=hn("bum"),Ep=hn("um"),Ky=hn("sp"),zy=hn("rtg"),qy=hn("rtc");function Gy(t,e=Ne){ia("ec",t,e)}function Ti(t,e){const n=rt;if(n===null)return t;const s=la(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Te]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function zn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ci(),ft(l,n,8,[t.el,a,t,e]),ui())}}const bp="components";function wp(t,e){return Qy(bp,t,!0,e)||t}const Yy=Symbol();function Qy(t,e,n=!0,s=!1){const i=rt||Ne;if(i){const r=i.type;if(t===bp){const a=SE(r,!1);if(a&&(a===e||a===Kt(e)||a===Jo(Kt(e))))return r}const o=lh(i[t]||r[t],e)||lh(i.appContext[t],e);return!o&&s?r:o}}function lh(t,e){return t&&(t[e]||t[Kt(e)]||t[Jo(Kt(e))])}function yL(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ol=t=>t?xp(t)?la(t)||t.proxy:Ol(t.parent):null,Fi=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>Sc(t.update)),$nextTick:t=>t.n||(t.n=ap.bind(t.proxy)),$watch:t=>Ly.bind(t)}),Ha=(t,e)=>t!==Te&&!t.__isScriptSetup&&ce(t,e),Xy={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ha(s,e))return o[e]=1,s[e];if(i!==Te&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Te&&ce(n,e))return o[e]=4,n[e];kl&&(o[e]=0)}}const u=Fi[e];let h,d;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ha(i,e)?(i[e]=n,!0):s!==Te&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Te&&ce(t,o)||Ha(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(Fi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let kl=!0;function Jy(t){const e=Rc(t),n=t.proxy,s=t.ctx;kl=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:b,beforeDestroy:y,beforeUnmount:C,destroyed:w,unmounted:R,render:U,renderTracked:W,renderTriggered:Y,errorCaptured:$,serverPrefetch:G,expose:j,inheritAttrs:ae,components:_e,directives:ge,filters:Be}=e;if(c&&Zy(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const le=o[te];X(le)&&(s[te]=le.bind(n))}if(i){const te=i.call(n,n);Ee(te)&&(t.data=yr(te))}if(kl=!0,r)for(const te in r){const le=r[te],Pe=X(le)?le.bind(n,n):X(le.get)?le.get.bind(n,n):St,ct=!X(le)&&X(le.set)?le.set.bind(n):St,Ke=dt({get:Pe,set:ct});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Oe=>Ke.value=Oe})}if(a)for(const te in a)Tp(a[te],s,n,te);if(l){const te=X(l)?l.call(n):l;Reflect.ownKeys(te).forEach(le=>{io(le,te[le])})}u&&ch(u,t,"c");function oe(te,le){q(le)?le.forEach(Pe=>te(Pe.bind(n))):le&&te(le.bind(n))}if(oe(Wy,h),oe(vp,d),oe(Vy,p),oe(jy,g),oe(Uy,m),oe(By,b),oe(Gy,$),oe(qy,W),oe(zy,Y),oe(yp,C),oe(Ep,R),oe(Ky,G),q(j))if(j.length){const te=t.exposed||(t.exposed={});j.forEach(le=>{Object.defineProperty(te,le,{get:()=>n[le],set:Pe=>n[le]=Pe})})}else t.exposed||(t.exposed={});U&&t.render===St&&(t.render=U),ae!=null&&(t.inheritAttrs=ae),_e&&(t.components=_e),ge&&(t.directives=ge)}function Zy(t,e,n=St,s=!1){q(t)&&(t=Pl(t));for(const i in t){const r=t[i];let o;Ee(r)?"default"in r?o=tn(r.from||i,r.default,!0):o=tn(r.from||i):o=tn(r),Re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ch(t,e,n){ft(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,s){const i=s.includes(".")?fp(n,s):()=>n[s];if(Le(t)){const r=e[t];X(r)&&ro(i,r)}else if(X(t))ro(i,t.bind(n));else if(Ee(t))if(q(t))t.forEach(r=>Tp(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&ro(i,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wo(l,c,o,!0)),wo(l,e,o)),Ee(e)&&r.set(e,l),l}function wo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wo(t,r,n,!0),i&&i.forEach(o=>wo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=eE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eE={data:uh,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Gn,directives:Gn,watch:nE,provide:uh,inject:tE};function uh(t,e){return e?t?function(){return Ve(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function tE(t,e){return Gn(Pl(t),Pl(e))}function Pl(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Ve(Ve(Object.create(null),t),e):e}function nE(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const s in e)n[s]=qe(t[s],e[s]);return n}function sE(t,e,n,s=!1){const i={},r={};yo(r,oa,1),t.propsDefaults=Object.create(null),Cp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_y(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function iE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ta(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Kt(d);i[g]=Dl(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Cp(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=li(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Dl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],c=!0)}c&&an(t,"set","$attrs")}function Cp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;i&&ce(i,u=Kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ta(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=he(n),c=a||Te;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Dl(i,l,h,c[h],t,!ce(c,h))}}return o}function Dl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(zs(i),s=c[n]=l.call(null,e),as())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===li(n))&&(s=!0))}return s}function Ip(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=h=>{l=!0;const[d,p]=Ip(h,e,!0);Ve(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,Ms),Ms;if(q(r))for(let u=0;u<r.length;u++){const h=Kt(r[u]);hh(h)&&(o[h]=Te)}else if(r)for(const u in r){const h=Kt(u);if(hh(h)){const d=r[u],p=o[h]=q(d)||X(d)?{type:d}:Object.assign({},d);if(p){const g=ph(Boolean,p.type),m=ph(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function hh(t){return t[0]!=="$"}function dh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function fh(t,e){return dh(t)===dh(e)}function ph(t,e){return q(e)?e.findIndex(n=>fh(n,t)):X(e)&&fh(e,t)?0:-1}const Ap=t=>t[0]==="_"||t==="$stable",Nc=t=>q(t)?t.map($t):[$t(t)],rE=(t,e,n)=>{if(e._n)return e;const s=Li((...i)=>Nc(e(...i)),n);return s._c=!1,s},Sp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ap(i))continue;const r=t[i];if(X(r))e[i]=rE(i,r,s);else if(r!=null){const o=Nc(r);e[i]=()=>o}}},Rp=(t,e)=>{const n=Nc(e);t.slots.default=()=>n},oE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),yo(e,"_",n)):Sp(e,t.slots={})}else t.slots={},e&&Rp(t,e);yo(t.slots,oa,1)},aE=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ve(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Sp(e,i)),o=e}else e&&(Rp(t,e),o={default:1});if(r)for(const a in i)!Ap(a)&&!(a in o)&&delete i[a]};function Np(){return{app:null,config:{isNativeTag:Dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lE=0;function cE(t,e){return function(s,i=null){X(s)||(s=Object.assign({},s)),i!=null&&!Ee(i)&&(i=null);const r=Np(),o=new Set;let a=!1;const l=r.app={_uid:lE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:kE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ce(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,la(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function xl(t,e,n,s,i=!1){if(q(t)){t.forEach((d,p)=>xl(d,e&&(q(e)?e[p]:e),n,s,i));return}if(oo(s)&&!i)return;const r=s.shapeFlag&4?la(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):Re(c)&&(c.value=null)),X(l))Rn(l,a,12,[o,u]);else{const d=Le(l),p=Re(l);if(d||p){const g=()=>{if(t.f){const m=d?ce(h,l)?h[l]:u[l]:l.value;i?q(m)&&mc(m,r):q(m)?m.includes(r)||m.push(r):d?(u[l]=[r],ce(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Xe(g,n)):g()}}}const Xe=xy;function uE(t){return hE(t)}function hE(t,e){const n=Uv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:g}=t,m=(f,_,v,E=null,I=null,k=null,L=!1,N=null,P=!!_.dynamicChildren)=>{if(f===_)return;f&&!Jn(f,_)&&(E=D(f),Oe(f,I,k,!0),f=null),_.patchFlag===-2&&(P=!1,_.dynamicChildren=null);const{type:A,ref:H,shapeFlag:M}=_;switch(A){case ra:b(f,_,v,E);break;case Rt:y(f,_,v,E);break;case ao:f==null&&C(_,v,E,L);break;case it:_e(f,_,v,E,I,k,L,N,P);break;default:M&1?U(f,_,v,E,I,k,L,N,P):M&6?ge(f,_,v,E,I,k,L,N,P):(M&64||M&128)&&A.process(f,_,v,E,I,k,L,N,P,se)}H!=null&&I&&xl(H,f&&f.ref,k,_||f,!_)},b=(f,_,v,E)=>{if(f==null)s(_.el=a(_.children),v,E);else{const I=_.el=f.el;_.children!==f.children&&c(I,_.children)}},y=(f,_,v,E)=>{f==null?s(_.el=l(_.children||""),v,E):_.el=f.el},C=(f,_,v,E)=>{[f.el,f.anchor]=g(f.children,_,v,E,f.el,f.anchor)},w=({el:f,anchor:_},v,E)=>{let I;for(;f&&f!==_;)I=d(f),s(f,v,E),f=I;s(_,v,E)},R=({el:f,anchor:_})=>{let v;for(;f&&f!==_;)v=d(f),i(f),f=v;i(_)},U=(f,_,v,E,I,k,L,N,P)=>{L=L||_.type==="svg",f==null?W(_,v,E,I,k,L,N,P):G(f,_,I,k,L,N,P)},W=(f,_,v,E,I,k,L,N)=>{let P,A;const{type:H,props:M,shapeFlag:B,transition:K,dirs:Z}=f;if(P=f.el=o(f.type,k,M&&M.is,M),B&8?u(P,f.children):B&16&&$(f.children,P,null,E,I,k&&H!=="foreignObject",L,N),Z&&zn(f,null,E,"created"),Y(P,f,f.scopeId,L,E),M){for(const de in M)de!=="value"&&!no(de)&&r(P,de,null,M[de],k,f.children,E,I,x);"value"in M&&r(P,"value",null,M.value),(A=M.onVnodeBeforeMount)&&Lt(A,E,f)}Z&&zn(f,null,E,"beforeMount");const fe=(!I||I&&!I.pendingBranch)&&K&&!K.persisted;fe&&K.beforeEnter(P),s(P,_,v),((A=M&&M.onVnodeMounted)||fe||Z)&&Xe(()=>{A&&Lt(A,E,f),fe&&K.enter(P),Z&&zn(f,null,E,"mounted")},I)},Y=(f,_,v,E,I)=>{if(v&&p(f,v),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(I){let k=I.subTree;if(_===k){const L=I.vnode;Y(f,L,L.scopeId,L.slotScopeIds,I.parent)}}},$=(f,_,v,E,I,k,L,N,P=0)=>{for(let A=P;A<f.length;A++){const H=f[A]=N?En(f[A]):$t(f[A]);m(null,H,_,v,E,I,k,L,N)}},G=(f,_,v,E,I,k,L)=>{const N=_.el=f.el;let{patchFlag:P,dynamicChildren:A,dirs:H}=_;P|=f.patchFlag&16;const M=f.props||Te,B=_.props||Te;let K;v&&qn(v,!1),(K=B.onVnodeBeforeUpdate)&&Lt(K,v,_,f),H&&zn(_,f,v,"beforeUpdate"),v&&qn(v,!0);const Z=I&&_.type!=="foreignObject";if(A?j(f.dynamicChildren,A,N,v,E,Z,k):L||le(f,_,N,null,v,E,Z,k,!1),P>0){if(P&16)ae(N,_,M,B,v,E,I);else if(P&2&&M.class!==B.class&&r(N,"class",null,B.class,I),P&4&&r(N,"style",M.style,B.style,I),P&8){const fe=_.dynamicProps;for(let de=0;de<fe.length;de++){const ke=fe[de],Et=M[ke],Cs=B[ke];(Cs!==Et||ke==="value")&&r(N,ke,Et,Cs,I,f.children,v,E,x)}}P&1&&f.children!==_.children&&u(N,_.children)}else!L&&A==null&&ae(N,_,M,B,v,E,I);((K=B.onVnodeUpdated)||H)&&Xe(()=>{K&&Lt(K,v,_,f),H&&zn(_,f,v,"updated")},E)},j=(f,_,v,E,I,k,L)=>{for(let N=0;N<_.length;N++){const P=f[N],A=_[N],H=P.el&&(P.type===it||!Jn(P,A)||P.shapeFlag&70)?h(P.el):v;m(P,A,H,null,E,I,k,L,!0)}},ae=(f,_,v,E,I,k,L)=>{if(v!==E){if(v!==Te)for(const N in v)!no(N)&&!(N in E)&&r(f,N,v[N],null,L,_.children,I,k,x);for(const N in E){if(no(N))continue;const P=E[N],A=v[N];P!==A&&N!=="value"&&r(f,N,A,P,L,_.children,I,k,x)}"value"in E&&r(f,"value",v.value,E.value)}},_e=(f,_,v,E,I,k,L,N,P)=>{const A=_.el=f?f.el:a(""),H=_.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:K}=_;K&&(N=N?N.concat(K):K),f==null?(s(A,v,E),s(H,v,E),$(_.children,v,H,I,k,L,N,P)):M>0&&M&64&&B&&f.dynamicChildren?(j(f.dynamicChildren,B,v,I,k,L,N),(_.key!=null||I&&_===I.subTree)&&Op(f,_,!0)):le(f,_,v,H,I,k,L,N,P)},ge=(f,_,v,E,I,k,L,N,P)=>{_.slotScopeIds=N,f==null?_.shapeFlag&512?I.ctx.activate(_,v,E,L,P):Be(_,v,E,I,k,L,P):nt(f,_,P)},Be=(f,_,v,E,I,k,L)=>{const N=f.component=bE(f,E,I);if(sa(f)&&(N.ctx.renderer=se),TE(N),N.asyncDep){if(I&&I.registerDep(N,oe),!f.el){const P=N.subTree=Ce(Rt);y(null,P,_,v)}return}oe(N,f,_,v,I,k,L)},nt=(f,_,v)=>{const E=_.component=f.component;if(ky(f,_,v))if(E.asyncDep&&!E.asyncResolved){te(E,_,v);return}else E.next=_,Ty(E.update),E.update();else _.el=f.el,E.vnode=_},oe=(f,_,v,E,I,k,L)=>{const N=()=>{if(f.isMounted){let{next:H,bu:M,u:B,parent:K,vnode:Z}=f,fe=H,de;qn(f,!1),H?(H.el=Z.el,te(f,H,L)):H=Z,M&&so(M),(de=H.props&&H.props.onVnodeBeforeUpdate)&&Lt(de,K,H,Z),qn(f,!0);const ke=Ua(f),Et=f.subTree;f.subTree=ke,m(Et,ke,h(Et.el),D(Et),f,I,k),H.el=ke.el,fe===null&&Py(f,ke.el),B&&Xe(B,I),(de=H.props&&H.props.onVnodeUpdated)&&Xe(()=>Lt(de,K,H,Z),I)}else{let H;const{el:M,props:B}=_,{bm:K,m:Z,parent:fe}=f,de=oo(_);if(qn(f,!1),K&&so(K),!de&&(H=B&&B.onVnodeBeforeMount)&&Lt(H,fe,_),qn(f,!0),M&&Q){const ke=()=>{f.subTree=Ua(f),Q(M,f.subTree,f,I,null)};de?_.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Ua(f);m(null,ke,v,E,f,I,k),_.el=ke.el}if(Z&&Xe(Z,I),!de&&(H=B&&B.onVnodeMounted)){const ke=_;Xe(()=>Lt(H,fe,ke),I)}(_.shapeFlag&256||fe&&oo(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Xe(f.a,I),f.isMounted=!0,_=v=E=null}},P=f.effect=new Ec(N,()=>Sc(A),f.scope),A=f.update=()=>P.run();A.id=f.uid,qn(f,!0),A()},te=(f,_,v)=>{_.component=f;const E=f.vnode.props;f.vnode=_,f.next=null,iE(f,_.props,E,v),aE(f,_.children,v),ci(),rh(),ui()},le=(f,_,v,E,I,k,L,N,P=!1)=>{const A=f&&f.children,H=f?f.shapeFlag:0,M=_.children,{patchFlag:B,shapeFlag:K}=_;if(B>0){if(B&128){ct(A,M,v,E,I,k,L,N,P);return}else if(B&256){Pe(A,M,v,E,I,k,L,N,P);return}}K&8?(H&16&&x(A,I,k),M!==A&&u(v,M)):H&16?K&16?ct(A,M,v,E,I,k,L,N,P):x(A,I,k,!0):(H&8&&u(v,""),K&16&&$(M,v,E,I,k,L,N,P))},Pe=(f,_,v,E,I,k,L,N,P)=>{f=f||Ms,_=_||Ms;const A=f.length,H=_.length,M=Math.min(A,H);let B;for(B=0;B<M;B++){const K=_[B]=P?En(_[B]):$t(_[B]);m(f[B],K,v,null,I,k,L,N,P)}A>H?x(f,I,k,!0,!1,M):$(_,v,E,I,k,L,N,P,M)},ct=(f,_,v,E,I,k,L,N,P)=>{let A=0;const H=_.length;let M=f.length-1,B=H-1;for(;A<=M&&A<=B;){const K=f[A],Z=_[A]=P?En(_[A]):$t(_[A]);if(Jn(K,Z))m(K,Z,v,null,I,k,L,N,P);else break;A++}for(;A<=M&&A<=B;){const K=f[M],Z=_[B]=P?En(_[B]):$t(_[B]);if(Jn(K,Z))m(K,Z,v,null,I,k,L,N,P);else break;M--,B--}if(A>M){if(A<=B){const K=B+1,Z=K<H?_[K].el:E;for(;A<=B;)m(null,_[A]=P?En(_[A]):$t(_[A]),v,Z,I,k,L,N,P),A++}}else if(A>B)for(;A<=M;)Oe(f[A],I,k,!0),A++;else{const K=A,Z=A,fe=new Map;for(A=Z;A<=B;A++){const st=_[A]=P?En(_[A]):$t(_[A]);st.key!=null&&fe.set(st.key,A)}let de,ke=0;const Et=B-Z+1;let Cs=!1,qu=0;const wi=new Array(Et);for(A=0;A<Et;A++)wi[A]=0;for(A=K;A<=M;A++){const st=f[A];if(ke>=Et){Oe(st,I,k,!0);continue}let xt;if(st.key!=null)xt=fe.get(st.key);else for(de=Z;de<=B;de++)if(wi[de-Z]===0&&Jn(st,_[de])){xt=de;break}xt===void 0?Oe(st,I,k,!0):(wi[xt-Z]=A+1,xt>=qu?qu=xt:Cs=!0,m(st,_[xt],v,null,I,k,L,N,P),ke++)}const Gu=Cs?dE(wi):Ms;for(de=Gu.length-1,A=Et-1;A>=0;A--){const st=Z+A,xt=_[st],Yu=st+1<H?_[st+1].el:E;wi[A]===0?m(null,xt,v,Yu,I,k,L,N,P):Cs&&(de<0||A!==Gu[de]?Ke(xt,v,Yu,2):de--)}}},Ke=(f,_,v,E,I=null)=>{const{el:k,type:L,transition:N,children:P,shapeFlag:A}=f;if(A&6){Ke(f.component.subTree,_,v,E);return}if(A&128){f.suspense.move(_,v,E);return}if(A&64){L.move(f,_,v,se);return}if(L===it){s(k,_,v);for(let M=0;M<P.length;M++)Ke(P[M],_,v,E);s(f.anchor,_,v);return}if(L===ao){w(f,_,v);return}if(E!==2&&A&1&&N)if(E===0)N.beforeEnter(k),s(k,_,v),Xe(()=>N.enter(k),I);else{const{leave:M,delayLeave:B,afterLeave:K}=N,Z=()=>s(k,_,v),fe=()=>{M(k,()=>{Z(),K&&K()})};B?B(k,Z,fe):fe()}else s(k,_,v)},Oe=(f,_,v,E=!1,I=!1)=>{const{type:k,props:L,ref:N,children:P,dynamicChildren:A,shapeFlag:H,patchFlag:M,dirs:B}=f;if(N!=null&&xl(N,null,v,f,!0),H&256){_.ctx.deactivate(f);return}const K=H&1&&B,Z=!oo(f);let fe;if(Z&&(fe=L&&L.onVnodeBeforeUnmount)&&Lt(fe,_,f),H&6)T(f.component,v,E);else{if(H&128){f.suspense.unmount(v,E);return}K&&zn(f,null,_,"beforeUnmount"),H&64?f.type.remove(f,_,v,I,se,E):A&&(k!==it||M>0&&M&64)?x(A,_,v,!1,!0):(k===it&&M&384||!I&&H&16)&&x(P,_,v),E&&vt(f)}(Z&&(fe=L&&L.onVnodeUnmounted)||K)&&Xe(()=>{fe&&Lt(fe,_,f),K&&zn(f,null,_,"unmounted")},v)},vt=f=>{const{type:_,el:v,anchor:E,transition:I}=f;if(_===it){yt(v,E);return}if(_===ao){R(f);return}const k=()=>{i(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,P=()=>L(v,k);N?N(f.el,k,P):P()}else k()},yt=(f,_)=>{let v;for(;f!==_;)v=d(f),i(f),f=v;i(_)},T=(f,_,v)=>{const{bum:E,scope:I,update:k,subTree:L,um:N}=f;E&&so(E),I.stop(),k&&(k.active=!1,Oe(L,f,_,v)),N&&Xe(N,_),Xe(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},x=(f,_,v,E=!1,I=!1,k=0)=>{for(let L=k;L<f.length;L++)Oe(f[L],_,v,E,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,_,v)=>{f==null?_._vnode&&Oe(_._vnode,null,null,!0):m(_._vnode||null,f,_,null,null,null,v),rh(),cp(),_._vnode=f},se={p:m,um:Oe,m:Ke,r:vt,mt:Be,mc:$,pc:le,pbc:j,n:D,o:t};let be,Q;return e&&([be,Q]=e(se)),{render:F,hydrate:be,createApp:cE(F,be)}}function qn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Op(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=En(i[r]),a.el=o.el),n||Op(o,a)),a.type===ra&&(a.el=o.el)}}function dE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const fE=t=>t.__isTeleport,it=Symbol(void 0),ra=Symbol(void 0),Rt=Symbol(void 0),ao=Symbol(void 0),Ui=[];let Ct=null;function zt(t=!1){Ui.push(Ct=t?null:[])}function pE(){Ui.pop(),Ct=Ui[Ui.length-1]||null}let tr=1;function _h(t){tr+=t}function kp(t){return t.dynamicChildren=tr>0?Ct||Ms:null,pE(),tr>0&&Ct&&Ct.push(t),t}function xn(t,e,n,s,i,r){return kp(ee(t,e,n,s,i,r,!0))}function Pp(t,e,n,s,i){return kp(Ce(t,e,n,s,i,!0))}function Ll(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const oa="__vInternal",Dp=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Re(t)||X(t)?{i:rt,r:t,k:e,f:!!n}:t:null;function ee(t,e=null,n=null,s=0,i=null,r=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dp(e),ref:e&&lo(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rt};return a?(Oc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),tr>0&&!o&&Ct&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ct.push(l),l}const Ce=_E;function _E(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Yy)&&(t=Rt),Ll(t)){const a=Ln(t,e,!0);return n&&Oc(a,n),tr>0&&!r&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(RE(t)&&(t=t.__vccOpts),e){e=gE(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=_c(a)),Ee(l)&&(Zf(l)&&!q(l)&&(l=Ve({},l)),e.style=pc(l))}const o=Le(t)?1:Dy(t)?128:fE(t)?64:Ee(t)?4:X(t)?2:0;return ee(t,e,n,s,i,o,r,!0)}function gE(t){return t?Zf(t)||oa in t?Ve({},t):t:null}function Ln(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?vE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dp(a),ref:e&&e.ref?n&&i?q(i)?i.concat(lo(e)):[i,lo(e)]:lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function co(t=" ",e=0){return Ce(ra,null,t,e)}function aa(t,e){const n=Ce(ao,null,t);return n.staticCount=e,n}function mE(t="",e=!1){return e?(zt(),Pp(Rt,null,t)):Ce(Rt,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ce(Rt):q(t)?Ce(it,null,t.slice()):typeof t=="object"?En(t):Ce(ra,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function Oc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Oc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(oa in e)?e._ctx=rt:i===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[co(e)]):n=8);t.children=e,t.shapeFlag|=n}function vE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_c([e.class,s.class]));else if(i==="style")e.style=pc([e.style,s.style]);else if(Qo(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){ft(t,e,7,[n,s])}const yE=Np();let EE=0;function bE(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||yE,r={uid:EE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ip(s,i),emitsOptions:hp(s,i),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ay.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const wE=()=>Ne||rt,zs=t=>{Ne=t,t.scope.on()},as=()=>{Ne&&Ne.scope.off(),Ne=null};function xp(t){return t.vnode.shapeFlag&4}let nr=!1;function TE(t,e=!1){nr=e;const{props:n,children:s}=t.vnode,i=xp(t);sE(t,n,i,e),oE(t,s);const r=i?CE(t,e):void 0;return nr=!1,r}function CE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ep(new Proxy(t.ctx,Xy));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?AE(t):null;zs(t),ci();const r=Rn(s,t,0,[t.props,i]);if(ui(),as(),Uf(r)){if(r.then(as,as),e)return r.then(o=>{gh(t,o,e)}).catch(o=>{ea(o,t,0)});t.asyncDep=r}else gh(t,r,e)}else Lp(t,e)}function gh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=ip(e)),Lp(t,n)}let mh;function Lp(t,e,n){const s=t.type;if(!t.render){if(!e&&mh&&!s.render){const i=s.template||Rc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ve(Ve({isCustomElement:r,delimiters:a},o),l);s.render=mh(i,c)}}t.render=s.render||St}zs(t),ci(),Jy(t),ui(),as()}function IE(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function AE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=IE(t))},slots:t.slots,emit:t.emit,expose:e}}function la(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(ep(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}}))}function SE(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function RE(t){return X(t)&&"__vccOpts"in t}const dt=(t,e)=>Ey(t,e,nr);function Mp(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!q(e)?Ll(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ll(n)&&(n=[n]),Ce(t,e,n))}const NE=Symbol(""),OE=()=>tn(NE),kE="3.2.47",PE="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,vh=Zn&&Zn.createElement("template"),DE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zn.createElementNS(PE,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vh.innerHTML=s?`<svg>${t}</svg>`:t;const a=vh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LE(t,e,n){const s=t.style,i=Le(n);if(n&&!i){if(e&&!Le(e))for(const r in e)n[r]==null&&Ml(s,r,"");for(const r in n)Ml(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yh=/\s*!important$/;function Ml(t,e,n){if(q(n))n.forEach(s=>Ml(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ME(t,e);yh.test(n)?t.setProperty(li(s),n.replace(yh,""),"important"):t[s]=n}}const Eh=["Webkit","Moz","ms"],Wa={};function ME(t,e){const n=Wa[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=Jo(s);for(let i=0;i<Eh.length;i++){const r=Eh[i]+s;if(r in t)return Wa[e]=r}return e}const bh="http://www.w3.org/1999/xlink";function $E(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bh,e.slice(6,e.length)):t.setAttributeNS(bh,e,n);else{const r=kv(e);n==null||r&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function FE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function UE(t,e,n,s){t.removeEventListener(e,n,s)}function BE(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=HE(e);if(s){const c=r[e]=jE(s,i);es(t,a,c,l)}else o&&(UE(t,a,o,l),r[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function HE(t){let e;if(wh.test(t)){e={};let s;for(;s=t.match(wh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):li(t.slice(2)),e]}let Va=0;const WE=Promise.resolve(),VE=()=>Va||(WE.then(()=>Va=0),Va=Date.now());function jE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ft(KE(s,n.value),e,5,[s])};return n.value=t,n.attached=VE(),n}function KE(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Th=/^on[a-z]/,zE=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?xE(t,s,i):e==="style"?LE(t,n,s):Qo(e)?gc(e)||BE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qE(t,e,s,i))?FE(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$E(t,e,s,i))};function qE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&Le(n)?!1:e in t}const GE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fy.props;const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>so(e,n):e};function YE(t){t.target.composing=!0}function Ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=To(i);const r=s||i.props&&i.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=wl(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",YE),es(t,"compositionend",Ch),es(t,"change",Ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=To(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&wl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},EL={created(t,{value:e},n){t.checked=vo(e,n.props.value),t._assign=To(n),es(t,"change",()=>{t._assign(QE(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=To(s),e!==n&&(t.checked=vo(e,s.props.value))}};function QE(t){return"_value"in t?t._value:t.value}const bL={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ii(t,!0),s.enter(t)):s.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t._vod:"none"}const XE=Ve({patchProp:zE},DE);let Ih;function JE(){return Ih||(Ih=uE(XE))}const ZE=(...t)=>{const e=JE().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=eb(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function eb(t){return Le(t)?document.querySelector(t):t}const tb="/MyPortfolio/assets/Frank_logo-98eaea7f.svg";const ca=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Er=t=>(Sy("data-v-e5a2133f"),t=t(),Ry(),t),nb={class:"navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white fixed-top"},sb={class:"container-fluid"},ib=Er(()=>ee("img",{src:tb,alt:""},null,-1)),rb=Er(()=>ee("div",{class:"line1"},null,-1)),ob=Er(()=>ee("div",{class:"line2"},null,-1)),ab=[rb,ob],lb={class:"collapse navbar-collapse",id:"navbarNav"},cb={class:"navbar-nav ms-lg-auto"},ub={class:"nav-item bt-border text-center ms-lg-auto"},hb={class:"nav-item bt-border text-center ms-lg-auto"},db={class:"nav-item bt-border text-center ms-lg-auto"},fb=Er(()=>ee("li",{class:"nav-item text-center ms-lg-auto"},[ee("a",{href:"https://medium.com/@huikaichung1999",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Medium")],-1)),pb=Er(()=>ee("div",{class:"m-5"},null,-1)),_b={__name:"Header",setup(t){function e(){const n=document.querySelector(".line1"),s=document.querySelector(".line2");n.classList.toggle("open"),s.classList.toggle("open")}return(n,s)=>{const i=wp("router-link");return zt(),xn(it,null,[ee("nav",nb,[ee("div",sb,[Ce(i,{to:"/MyPortfolio",class:"navbar-brand"},{default:Li(()=>[ib]),_:1}),ee("button",{onClick:e,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},ab),ee("div",lb,[ee("ul",cb,[ee("li",ub,[Ce(i,{to:"/MyPortfolio/About",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Li(()=>[co("About")]),_:1})]),ee("li",hb,[Ce(i,{to:"/MyPortfolio/Work",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Li(()=>[co("Work")]),_:1})]),ee("li",db,[Ce(i,{to:"/MyPortfolio/Resume",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Li(()=>[co("Resume")]),_:1})]),fb])])])]),pb],64)}}},gb=ca(_b,[["__scopeId","data-v-e5a2133f"]]);const mb={},vb={class:"bg-black text-bg-black text-center text-lg-start border-top border-1 border-white"},yb=aa('<div class="text-center m-2 p-0 text-secondary font-sm" data-v-b79f9a76> interested in working together? </div><div class="text-center" data-v-b79f9a76><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://www.linkedin.com/in/hui-kai-chung-970ab6140/" data-v-b79f9a76>-&gt; linkedin</a><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://medium.com/@huikaichung1999" data-v-b79f9a76>-&gt; Medium</a></div><div class="text-center" data-v-b79f9a76><a class="m-2 text-secondary text-decoration-none hover-underline font-sm" href="#" data-v-b79f9a76>hakuya8zai@gmail.com</a></div><div class="text-center p-0 m-2 text-secondary font-sm" data-v-b79f9a76> Copyright @2023 FrankChung. </div>',4),Eb=[yb];function bb(t,e){return zt(),xn("footer",vb,Eb)}const wb=ca(mb,[["render",bb],["__scopeId","data-v-b79f9a76"]]),Tb={__name:"App",setup(t){return(e,n)=>{const s=wp("router-view");return zt(),xn(it,null,[Ce(gb),Ce(s),Ce(wb)],64)}}};var Ye="top",at="bottom",lt="right",Qe="left",ua="auto",hi=[Ye,at,lt,Qe],ds="start",qs="end",$p="clippingParents",kc="viewport",Ns="popper",Fp="reference",$l=hi.reduce(function(t,e){return t.concat([e+"-"+ds,e+"-"+qs])},[]),Pc=[].concat(hi,[ua]).reduce(function(t,e){return t.concat([e,e+"-"+ds,e+"-"+qs])},[]),Up="beforeRead",Bp="read",Hp="afterRead",Wp="beforeMain",Vp="main",jp="afterMain",Kp="beforeWrite",zp="write",qp="afterWrite",Gp=[Up,Bp,Hp,Wp,Vp,jp,Kp,zp,qp];function qt(t){return t?(t.nodeName||"").toLowerCase():null}function gt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function fs(t){var e=gt(t).Element;return t instanceof e||t instanceof Element}function pt(t){var e=gt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Dc(t){if(typeof ShadowRoot>"u")return!1;var e=gt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Cb(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!pt(r)||!qt(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Ib(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!pt(i)||!qt(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const xc={name:"applyStyles",enabled:!0,phase:"write",fn:Cb,effect:Ib,requires:["computeStyles"]};function Bt(t){return t.split("-")[0]}var ls=Math.max,Co=Math.min,Gs=Math.round;function Fl(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Yp(){return!/^((?!chrome|android).)*safari/i.test(Fl())}function Ys(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&pt(t)&&(i=t.offsetWidth>0&&Gs(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Gs(s.height)/t.offsetHeight||1);var o=fs(t)?gt(t):window,a=o.visualViewport,l=!Yp()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Lc(t){var e=Ys(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function Qp(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Dc(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function ln(t){return gt(t).getComputedStyle(t)}function Ab(t){return["table","td","th"].indexOf(qt(t))>=0}function Vn(t){return((fs(t)?t.ownerDocument:t.document)||window.document).documentElement}function ha(t){return qt(t)==="html"?t:t.assignedSlot||t.parentNode||(Dc(t)?t.host:null)||Vn(t)}function Ah(t){return!pt(t)||ln(t).position==="fixed"?null:t.offsetParent}function Sb(t){var e=/firefox/i.test(Fl()),n=/Trident/i.test(Fl());if(n&&pt(t)){var s=ln(t);if(s.position==="fixed")return null}var i=ha(t);for(Dc(i)&&(i=i.host);pt(i)&&["html","body"].indexOf(qt(i))<0;){var r=ln(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function br(t){for(var e=gt(t),n=Ah(t);n&&Ab(n)&&ln(n).position==="static";)n=Ah(n);return n&&(qt(n)==="html"||qt(n)==="body"&&ln(n).position==="static")?e:n||Sb(t)||e}function Mc(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Bi(t,e,n){return ls(t,Co(e,n))}function Rb(t,e,n){var s=Bi(t,e,n);return s>n?n:s}function Xp(){return{top:0,right:0,bottom:0,left:0}}function Jp(t){return Object.assign({},Xp(),t)}function Zp(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var Nb=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Jp(typeof e!="number"?e:Zp(e,hi))};function Ob(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Bt(n.placement),l=Mc(a),c=[Qe,lt].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=Nb(i.padding,n),d=Lc(r),p=l==="y"?Ye:Qe,g=l==="y"?at:lt,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],b=o[l]-n.rects.reference[l],y=br(r),C=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,w=m/2-b/2,R=h[p],U=C-d[u]-h[g],W=C/2-d[u]/2+w,Y=Bi(R,W,U),$=l;n.modifiersData[s]=(e={},e[$]=Y,e.centerOffset=Y-W,e)}}function kb(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||Qp(e.elements.popper,i)&&(e.elements.arrow=i))}const e_={name:"arrow",enabled:!0,phase:"main",fn:Ob,effect:kb,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qs(t){return t.split("-")[1]}var Pb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Db(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:Gs(e*i)/i||0,y:Gs(n*i)/i||0}}function Sh(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,m=g===void 0?0:g,b=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=b.x,m=b.y;var y=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),w=Qe,R=Ye,U=window;if(c){var W=br(n),Y="clientHeight",$="clientWidth";if(W===gt(n)&&(W=Vn(n),ln(W).position!=="static"&&a==="absolute"&&(Y="scrollHeight",$="scrollWidth")),W=W,i===Ye||(i===Qe||i===lt)&&r===qs){R=at;var G=h&&W===U&&U.visualViewport?U.visualViewport.height:W[Y];m-=G-s.height,m*=l?1:-1}if(i===Qe||(i===Ye||i===at)&&r===qs){w=lt;var j=h&&W===U&&U.visualViewport?U.visualViewport.width:W[$];p-=j-s.width,p*=l?1:-1}}var ae=Object.assign({position:a},c&&Pb),_e=u===!0?Db({x:p,y:m}):{x:p,y:m};if(p=_e.x,m=_e.y,l){var ge;return Object.assign({},ae,(ge={},ge[R]=C?"0":"",ge[w]=y?"0":"",ge.transform=(U.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",ge))}return Object.assign({},ae,(e={},e[R]=C?m+"px":"",e[w]=y?p+"px":"",e.transform="",e))}function xb(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Bt(e.placement),variation:Qs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Sh(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Sh(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const $c={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xb,data:{}};var Vr={passive:!0};function Lb(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=gt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Vr)}),a&&l.addEventListener("resize",n.update,Vr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Vr)}),a&&l.removeEventListener("resize",n.update,Vr)}}const Fc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Lb,data:{}};var Mb={left:"right",right:"left",bottom:"top",top:"bottom"};function uo(t){return t.replace(/left|right|bottom|top/g,function(e){return Mb[e]})}var $b={start:"end",end:"start"};function Rh(t){return t.replace(/start|end/g,function(e){return $b[e]})}function Uc(t){var e=gt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Bc(t){return Ys(Vn(t)).left+Uc(t).scrollLeft}function Fb(t,e){var n=gt(t),s=Vn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=Yp();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Bc(t),y:l}}function Ub(t){var e,n=Vn(t),s=Uc(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=ls(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=ls(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Bc(t),l=-s.scrollTop;return ln(i||n).direction==="rtl"&&(a+=ls(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Hc(t){var e=ln(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function t_(t){return["html","body","#document"].indexOf(qt(t))>=0?t.ownerDocument.body:pt(t)&&Hc(t)?t:t_(ha(t))}function Hi(t,e){var n;e===void 0&&(e=[]);var s=t_(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=gt(s),o=i?[r].concat(r.visualViewport||[],Hc(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Hi(ha(o)))}function Ul(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Bb(t,e){var n=Ys(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Nh(t,e,n){return e===kc?Ul(Fb(t,n)):fs(e)?Bb(e,n):Ul(Ub(Vn(t)))}function Hb(t){var e=Hi(ha(t)),n=["absolute","fixed"].indexOf(ln(t).position)>=0,s=n&&pt(t)?br(t):t;return fs(s)?e.filter(function(i){return fs(i)&&Qp(i,s)&&qt(i)!=="body"}):[]}function Wb(t,e,n,s){var i=e==="clippingParents"?Hb(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=Nh(t,c,s);return l.top=ls(u.top,l.top),l.right=Co(u.right,l.right),l.bottom=Co(u.bottom,l.bottom),l.left=ls(u.left,l.left),l},Nh(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function n_(t){var e=t.reference,n=t.element,s=t.placement,i=s?Bt(s):null,r=s?Qs(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ye:l={x:o,y:e.y-n.height};break;case at:l={x:o,y:e.y+e.height};break;case lt:l={x:e.x+e.width,y:a};break;case Qe:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Mc(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case ds:l[c]=l[c]-(e[u]/2-n[u]/2);break;case qs:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Xs(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?$p:a,c=n.rootBoundary,u=c===void 0?kc:c,h=n.elementContext,d=h===void 0?Ns:h,p=n.altBoundary,g=p===void 0?!1:p,m=n.padding,b=m===void 0?0:m,y=Jp(typeof b!="number"?b:Zp(b,hi)),C=d===Ns?Fp:Ns,w=t.rects.popper,R=t.elements[g?C:d],U=Wb(fs(R)?R:R.contextElement||Vn(t.elements.popper),l,u,o),W=Ys(t.elements.reference),Y=n_({reference:W,element:w,strategy:"absolute",placement:i}),$=Ul(Object.assign({},w,Y)),G=d===Ns?$:W,j={top:U.top-G.top+y.top,bottom:G.bottom-U.bottom+y.bottom,left:U.left-G.left+y.left,right:G.right-U.right+y.right},ae=t.modifiersData.offset;if(d===Ns&&ae){var _e=ae[i];Object.keys(j).forEach(function(ge){var Be=[lt,at].indexOf(ge)>=0?1:-1,nt=[Ye,at].indexOf(ge)>=0?"y":"x";j[ge]+=_e[nt]*Be})}return j}function Vb(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Pc:l,u=Qs(s),h=u?a?$l:$l.filter(function(g){return Qs(g)===u}):hi,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,m){return g[m]=Xs(t,{placement:m,boundary:i,rootBoundary:r,padding:o})[Bt(m)],g},{});return Object.keys(p).sort(function(g,m){return p[g]-p[m]})}function jb(t){if(Bt(t)===ua)return[];var e=uo(t);return[Rh(t),e,Rh(e)]}function Kb(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,m=n.allowedAutoPlacements,b=e.options.placement,y=Bt(b),C=y===b,w=l||(C||!g?[uo(b)]:jb(b)),R=[b].concat(w).reduce(function(yt,T){return yt.concat(Bt(T)===ua?Vb(e,{placement:T,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):T)},[]),U=e.rects.reference,W=e.rects.popper,Y=new Map,$=!0,G=R[0],j=0;j<R.length;j++){var ae=R[j],_e=Bt(ae),ge=Qs(ae)===ds,Be=[Ye,at].indexOf(_e)>=0,nt=Be?"width":"height",oe=Xs(e,{placement:ae,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),te=Be?ge?lt:Qe:ge?at:Ye;U[nt]>W[nt]&&(te=uo(te));var le=uo(te),Pe=[];if(r&&Pe.push(oe[_e]<=0),a&&Pe.push(oe[te]<=0,oe[le]<=0),Pe.every(function(yt){return yt})){G=ae,$=!1;break}Y.set(ae,Pe)}if($)for(var ct=g?3:1,Ke=function(T){var x=R.find(function(D){var F=Y.get(D);if(F)return F.slice(0,T).every(function(se){return se})});if(x)return G=x,"break"},Oe=ct;Oe>0;Oe--){var vt=Ke(Oe);if(vt==="break")break}e.placement!==G&&(e.modifiersData[s]._skip=!0,e.placement=G,e.reset=!0)}}const s_={name:"flip",enabled:!0,phase:"main",fn:Kb,requiresIfExists:["offset"],data:{_skip:!1}};function Oh(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function kh(t){return[Ye,lt,at,Qe].some(function(e){return t[e]>=0})}function zb(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Xs(e,{elementContext:"reference"}),a=Xs(e,{altBoundary:!0}),l=Oh(o,s),c=Oh(a,i,r),u=kh(l),h=kh(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const i_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zb};function qb(t,e,n){var s=Bt(t),i=[Qe,Ye].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Qe,lt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Gb(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Pc.reduce(function(u,h){return u[h]=qb(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const r_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Gb};function Yb(t){var e=t.state,n=t.name;e.modifiersData[n]=n_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Wc={name:"popperOffsets",enabled:!0,phase:"read",fn:Yb,data:{}};function Qb(t){return t==="x"?"y":"x"}function Xb(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,p=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,b=Xs(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),y=Bt(e.placement),C=Qs(e.placement),w=!C,R=Mc(y),U=Qb(R),W=e.modifiersData.popperOffsets,Y=e.rects.reference,$=e.rects.popper,G=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,j=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),ae=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,_e={x:0,y:0};if(W){if(r){var ge,Be=R==="y"?Ye:Qe,nt=R==="y"?at:lt,oe=R==="y"?"height":"width",te=W[R],le=te+b[Be],Pe=te-b[nt],ct=p?-$[oe]/2:0,Ke=C===ds?Y[oe]:$[oe],Oe=C===ds?-$[oe]:-Y[oe],vt=e.elements.arrow,yt=p&&vt?Lc(vt):{width:0,height:0},T=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Xp(),x=T[Be],D=T[nt],F=Bi(0,Y[oe],yt[oe]),se=w?Y[oe]/2-ct-F-x-j.mainAxis:Ke-F-x-j.mainAxis,be=w?-Y[oe]/2+ct+F+D+j.mainAxis:Oe+F+D+j.mainAxis,Q=e.elements.arrow&&br(e.elements.arrow),f=Q?R==="y"?Q.clientTop||0:Q.clientLeft||0:0,_=(ge=ae==null?void 0:ae[R])!=null?ge:0,v=te+se-_-f,E=te+be-_,I=Bi(p?Co(le,v):le,te,p?ls(Pe,E):Pe);W[R]=I,_e[R]=I-te}if(a){var k,L=R==="x"?Ye:Qe,N=R==="x"?at:lt,P=W[U],A=U==="y"?"height":"width",H=P+b[L],M=P-b[N],B=[Ye,Qe].indexOf(y)!==-1,K=(k=ae==null?void 0:ae[U])!=null?k:0,Z=B?H:P-Y[A]-$[A]-K+j.altAxis,fe=B?P+Y[A]+$[A]-K-j.altAxis:M,de=p&&B?Rb(Z,P,fe):Bi(p?Z:H,P,p?fe:M);W[U]=de,_e[U]=de-P}e.modifiersData[s]=_e}}const o_={name:"preventOverflow",enabled:!0,phase:"main",fn:Xb,requiresIfExists:["offset"]};function Jb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Zb(t){return t===gt(t)||!pt(t)?Uc(t):Jb(t)}function ew(t){var e=t.getBoundingClientRect(),n=Gs(e.width)/t.offsetWidth||1,s=Gs(e.height)/t.offsetHeight||1;return n!==1||s!==1}function tw(t,e,n){n===void 0&&(n=!1);var s=pt(e),i=pt(e)&&ew(e),r=Vn(e),o=Ys(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((qt(e)!=="body"||Hc(r))&&(a=Zb(e)),pt(e)?(l=Ys(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Bc(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function nw(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function sw(t){var e=nw(t);return Gp.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function iw(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function rw(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ph={placement:"bottom",modifiers:[],strategy:"absolute"};function Dh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function da(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Ph:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ph,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(y){var C=typeof y=="function"?y(u.options):y;m(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:fs(a)?Hi(a):a.contextElement?Hi(a.contextElement):[],popper:Hi(l)};var w=sw(rw([].concat(s,u.options.modifiers)));return u.orderedModifiers=w.filter(function(R){return R.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var y=u.elements,C=y.reference,w=y.popper;if(Dh(C,w)){u.rects={reference:tw(C,br(w),u.options.strategy==="fixed"),popper:Lc(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(j){return u.modifiersData[j.name]=Object.assign({},j.data)});for(var R=0;R<u.orderedModifiers.length;R++){if(u.reset===!0){u.reset=!1,R=-1;continue}var U=u.orderedModifiers[R],W=U.fn,Y=U.options,$=Y===void 0?{}:Y,G=U.name;typeof W=="function"&&(u=W({state:u,options:$,name:G,instance:p})||u)}}}},update:iw(function(){return new Promise(function(b){p.forceUpdate(),b(u)})}),destroy:function(){m(),d=!0}};if(!Dh(a,l))return p;p.setOptions(c).then(function(b){!d&&c.onFirstUpdate&&c.onFirstUpdate(b)});function g(){u.orderedModifiers.forEach(function(b){var y=b.name,C=b.options,w=C===void 0?{}:C,R=b.effect;if(typeof R=="function"){var U=R({state:u,name:y,instance:p,options:w}),W=function(){};h.push(U||W)}})}function m(){h.forEach(function(b){return b()}),h=[]}return p}}var ow=da(),aw=[Fc,Wc,$c,xc],lw=da({defaultModifiers:aw}),cw=[Fc,Wc,$c,xc,r_,s_,o_,e_,i_],Vc=da({defaultModifiers:cw});const a_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:jp,afterRead:Hp,afterWrite:qp,applyStyles:xc,arrow:e_,auto:ua,basePlacements:hi,beforeMain:Wp,beforeRead:Up,beforeWrite:Kp,bottom:at,clippingParents:$p,computeStyles:$c,createPopper:Vc,createPopperBase:ow,createPopperLite:lw,detectOverflow:Xs,end:qs,eventListeners:Fc,flip:s_,hide:i_,left:Qe,main:Vp,modifierPhases:Gp,offset:r_,placements:Pc,popper:Ns,popperGenerator:da,popperOffsets:Wc,preventOverflow:o_,read:Bp,reference:Fp,right:lt,start:ds,top:Ye,variationPlacements:$l,viewport:kc,write:zp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const uw=1e6,hw=1e3,Bl="transitionend",dw=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),fw=t=>{do t+=Math.floor(Math.random()*uw);while(document.getElementById(t));return t},l_=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},c_=t=>{const e=l_(t);return e&&document.querySelector(e)?e:null},nn=t=>{const e=l_(t);return e?document.querySelector(e):null},pw=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*hw)},u_=t=>{t.dispatchEvent(new Event(Bl))},sn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Mn=t=>sn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,di=t=>{if(!sn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},$n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",h_=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h_(t.parentNode):null},Io=()=>{},wr=t=>{t.offsetHeight},d_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ja=[],_w=t=>{document.readyState==="loading"?(ja.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of ja)e()}),ja.push(t)):t()},_t=()=>document.documentElement.dir==="rtl",mt=t=>{_w(()=>{const e=d_();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Xt=t=>{typeof t=="function"&&t()},f_=(t,e,n=!0)=>{if(!n){Xt(t);return}const s=5,i=pw(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Bl,o),Xt(t))};e.addEventListener(Bl,o),setTimeout(()=>{r||u_(e)},i)},jc=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},gw=/[^.]*(?=\..*)\.|.*/,mw=/\..*/,vw=/::\d+$/,Ka={};let xh=1;const p_={mouseenter:"mouseover",mouseleave:"mouseout"},yw=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function __(t,e){return e&&`${e}::${xh++}`||t.uidEvent||xh++}function g_(t){const e=__(t);return t.uidEvent=e,Ka[e]=Ka[e]||{},Ka[e]}function Ew(t,e){return function n(s){return Kc(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function bw(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Kc(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function m_(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function v_(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=y_(t);return yw.has(r)||(r=t),[s,i,r]}function Lh(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=v_(e,n,s);e in p_&&(o=(g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)})(o));const l=g_(t),c=l[a]||(l[a]={}),u=m_(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=__(o,e.replace(gw,"")),d=r?bw(t,n,o):Ew(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function Hl(t,e,n,s,i){const r=m_(e[n],s,i);r&&(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function ww(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];Hl(t,e,n,o.callable,o.delegationSelector)}}function y_(t){return t=t.replace(mw,""),p_[t]||t}const S={on(t,e,n,s){Lh(t,e,n,s,!1)},one(t,e,n,s){Lh(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=v_(e,n,s),a=o!==e,l=g_(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;Hl(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))ww(t,l,h,e.slice(1));for(const h of Object.keys(c)){const d=h.replace(vw,"");if(!a||e.includes(d)){const p=c[h];Hl(t,l,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=d_(),i=y_(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=Kc(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Kc(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const mn=new Map,za={set(t,e,n){mn.has(t)||mn.set(t,new Map);const s=mn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return mn.has(t)&&mn.get(t).get(e)||null},remove(t,e){if(!mn.has(t))return;const n=mn.get(t);n.delete(e),n.size===0&&mn.delete(t)}};function Mh(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function qa(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const rn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${qa(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${qa(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Mh(t.dataset[s])}return e},getDataAttribute(t,e){return Mh(t.getAttribute(`data-bs-${qa(e)}`))}};class Tr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=sn(n)?rn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...sn(n)?rn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=sn(r)?"element":dw(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const Tw="5.2.3";class Pt extends Tr{constructor(e,n){super(),e=Mn(e),e&&(this._element=e,this._config=this._getConfig(n),za.set(this._element,this.constructor.DATA_KEY,this))}dispose(){za.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){f_(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return za.get(Mn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return Tw}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const fa=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),$n(this))return;const r=nn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},Cw="alert",Iw="bs.alert",E_=`.${Iw}`,Aw=`close${E_}`,Sw=`closed${E_}`,Rw="fade",Nw="show";class pa extends Pt{static get NAME(){return Cw}close(){if(S.trigger(this._element,Aw).defaultPrevented)return;this._element.classList.remove(Nw);const n=this._element.classList.contains(Rw);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,Sw),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=pa.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}fa(pa,"close");mt(pa);const Ow="button",kw="bs.button",Pw=`.${kw}`,Dw=".data-api",xw="active",$h='[data-bs-toggle="button"]',Lw=`click${Pw}${Dw}`;class _a extends Pt{static get NAME(){return Ow}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(xw))}static jQueryInterface(e){return this.each(function(){const n=_a.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,Lw,$h,t=>{t.preventDefault();const e=t.target.closest($h);_a.getOrCreateInstance(e).toggle()});mt(_a);const J={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!$n(n)&&di(n))}},Mw="swipe",fi=".bs.swipe",$w=`touchstart${fi}`,Fw=`touchmove${fi}`,Uw=`touchend${fi}`,Bw=`pointerdown${fi}`,Hw=`pointerup${fi}`,Ww="touch",Vw="pen",jw="pointer-event",Kw=40,zw={endCallback:null,leftCallback:null,rightCallback:null},qw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ao extends Tr{constructor(e,n){super(),this._element=e,!(!e||!Ao.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return zw}static get DefaultType(){return qw}static get NAME(){return Mw}dispose(){S.off(this._element,fi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Xt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Kw)return;const n=e/this._deltaX;this._deltaX=0,n&&Xt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,Bw,e=>this._start(e)),S.on(this._element,Hw,e=>this._end(e)),this._element.classList.add(jw)):(S.on(this._element,$w,e=>this._start(e)),S.on(this._element,Fw,e=>this._move(e)),S.on(this._element,Uw,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Vw||e.pointerType===Ww)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Gw="carousel",Yw="bs.carousel",jn=`.${Yw}`,b_=".data-api",Qw="ArrowLeft",Xw="ArrowRight",Jw=500,Ai="next",Is="prev",Os="left",ho="right",Zw=`slide${jn}`,Ga=`slid${jn}`,eT=`keydown${jn}`,tT=`mouseenter${jn}`,nT=`mouseleave${jn}`,sT=`dragstart${jn}`,iT=`load${jn}${b_}`,rT=`click${jn}${b_}`,w_="carousel",jr="active",oT="slide",aT="carousel-item-end",lT="carousel-item-start",cT="carousel-item-next",uT="carousel-item-prev",T_=".active",C_=".carousel-item",hT=T_+C_,dT=".carousel-item img",fT=".carousel-indicators",pT="[data-bs-slide], [data-bs-slide-to]",_T='[data-bs-ride="carousel"]',gT={[Qw]:ho,[Xw]:Os},mT={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},vT={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Cr extends Pt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=J.findOne(fT,this._element),this._addEventListeners(),this._config.ride===w_&&this.cycle()}static get Default(){return mT}static get DefaultType(){return vT}static get NAME(){return Gw}next(){this._slide(Ai)}nextWhenVisible(){!document.hidden&&di(this._element)&&this.next()}prev(){this._slide(Is)}pause(){this._isSliding&&u_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,Ga,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,Ga,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Ai:Is;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,eT,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,tT,()=>this.pause()),S.on(this._element,nT,()=>this._maybeEnableCycle())),this._config.touch&&Ao.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of J.find(dT,this._element))S.on(s,sT,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Os)),rightCallback:()=>this._slide(this._directionToOrder(ho)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Jw+this._config.interval))}};this._swipeHelper=new Ao(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=gT[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=J.findOne(T_,this._indicatorsElement);n.classList.remove(jr),n.removeAttribute("aria-current");const s=J.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(jr),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Ai,r=n||jc(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(Zw).defaultPrevented||!s||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?lT:aT,h=i?cT:uT;r.classList.add(h),wr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(jr),s.classList.remove(jr,h,u),this._isSliding=!1,a(Ga)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(oT)}_getActive(){return J.findOne(hT,this._element)}_getItems(){return J.find(C_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return _t()?e===Os?Is:Ai:e===Os?Ai:Is}_orderToDirection(e){return _t()?e===Is?Os:ho:e===Is?ho:Os}static jQueryInterface(e){return this.each(function(){const n=Cr.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,rT,pT,function(t){const e=nn(this);if(!e||!e.classList.contains(w_))return;t.preventDefault();const n=Cr.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(rn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,iT,()=>{const t=J.find(_T);for(const e of t)Cr.getOrCreateInstance(e)});mt(Cr);const yT="collapse",ET="bs.collapse",Ir=`.${ET}`,bT=".data-api",wT=`show${Ir}`,TT=`shown${Ir}`,CT=`hide${Ir}`,IT=`hidden${Ir}`,AT=`click${Ir}${bT}`,Ya="show",Ds="collapse",Kr="collapsing",ST="collapsed",RT=`:scope .${Ds} .${Ds}`,NT="collapse-horizontal",OT="width",kT="height",PT=".collapse.show, .collapse.collapsing",Wl='[data-bs-toggle="collapse"]',DT={parent:null,toggle:!0},xT={parent:"(null|element)",toggle:"boolean"};class sr extends Pt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=J.find(Wl);for(const i of s){const r=c_(i),o=J.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return DT}static get DefaultType(){return xT}static get NAME(){return yT}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(PT).filter(a=>a!==this._element).map(a=>sr.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,wT).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Ds),this._element.classList.add(Kr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Ds,Ya),this._element.style[s]="",S.trigger(this._element,TT)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,CT).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,wr(this._element),this._element.classList.add(Kr),this._element.classList.remove(Ds,Ya);for(const i of this._triggerArray){const r=nn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Ds),S.trigger(this._element,IT)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ya)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Mn(e.parent),e}_getDimension(){return this._element.classList.contains(NT)?OT:kT}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Wl);for(const n of e){const s=nn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=J.find(RT,this._config.parent);return J.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(ST,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=sr.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,AT,Wl,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=c_(this),n=J.find(e);for(const s of n)sr.getOrCreateInstance(s,{toggle:!1}).toggle()});mt(sr);const Fh="dropdown",LT="bs.dropdown",bs=`.${LT}`,zc=".data-api",MT="Escape",Uh="Tab",$T="ArrowUp",Bh="ArrowDown",FT=2,UT=`hide${bs}`,BT=`hidden${bs}`,HT=`show${bs}`,WT=`shown${bs}`,I_=`click${bs}${zc}`,A_=`keydown${bs}${zc}`,VT=`keyup${bs}${zc}`,ks="show",jT="dropup",KT="dropend",zT="dropstart",qT="dropup-center",GT="dropdown-center",ns='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',YT=`${ns}.${ks}`,fo=".dropdown-menu",QT=".navbar",XT=".navbar-nav",JT=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ZT=_t()?"top-end":"top-start",eC=_t()?"top-start":"top-end",tC=_t()?"bottom-end":"bottom-start",nC=_t()?"bottom-start":"bottom-end",sC=_t()?"left-start":"right-start",iC=_t()?"right-start":"left-start",rC="top",oC="bottom",aC={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},lC={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ht extends Pt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=J.next(this._element,fo)[0]||J.prev(this._element,fo)[0]||J.findOne(fo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return aC}static get DefaultType(){return lC}static get NAME(){return Fh}toggle(){return this._isShown()?this.hide():this.show()}show(){if($n(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,HT,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(XT))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",Io);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ks),this._element.classList.add(ks),S.trigger(this._element,WT,e)}}hide(){if($n(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,UT,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",Io);this._popper&&this._popper.destroy(),this._menu.classList.remove(ks),this._element.classList.remove(ks),this._element.setAttribute("aria-expanded","false"),rn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,BT,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!sn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Fh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof a_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:sn(this._config.reference)?e=Mn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Vc(e,this._menu,n)}_isShown(){return this._menu.classList.contains(ks)}_getPlacement(){const e=this._parent;if(e.classList.contains(KT))return sC;if(e.classList.contains(zT))return iC;if(e.classList.contains(qT))return rC;if(e.classList.contains(GT))return oC;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(jT)?n?eC:ZT:n?nC:tC}_detectNavbar(){return this._element.closest(QT)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(rn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=J.find(JT,this._menu).filter(i=>di(i));s.length&&jc(s,n,e===Bh,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Ht.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===FT||e.type==="keyup"&&e.key!==Uh)return;const n=J.find(YT);for(const s of n){const i=Ht.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Uh||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===MT,i=[$T,Bh].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(ns)?this:J.prev(this,ns)[0]||J.next(this,ns)[0]||J.findOne(ns,e.delegateTarget.parentNode),o=Ht.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,A_,ns,Ht.dataApiKeydownHandler);S.on(document,A_,fo,Ht.dataApiKeydownHandler);S.on(document,I_,Ht.clearMenus);S.on(document,VT,Ht.clearMenus);S.on(document,I_,ns,function(t){t.preventDefault(),Ht.getOrCreateInstance(this).toggle()});mt(Ht);const Hh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Wh=".sticky-top",zr="padding-right",Vh="margin-right";class Vl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,zr,n=>n+e),this._setElementAttributes(Hh,zr,n=>n+e),this._setElementAttributes(Wh,Vh,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,zr),this._resetElementAttributes(Hh,zr),this._resetElementAttributes(Wh,Vh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&rn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=rn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}rn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(sn(e)){n(e);return}for(const s of J.find(e,this._element))n(s)}}const S_="backdrop",cC="fade",jh="show",Kh=`mousedown.bs.${S_}`,uC={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},hC={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class R_ extends Tr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return uC}static get DefaultType(){return hC}static get NAME(){return S_}show(e){if(!this._config.isVisible){Xt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&wr(n),n.classList.add(jh),this._emulateAnimation(()=>{Xt(e)})}hide(e){if(!this._config.isVisible){Xt(e);return}this._getElement().classList.remove(jh),this._emulateAnimation(()=>{this.dispose(),Xt(e)})}dispose(){this._isAppended&&(S.off(this._element,Kh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(cC),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Mn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,Kh,()=>{Xt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){f_(e,this._getElement(),this._config.isAnimated)}}const dC="focustrap",fC="bs.focustrap",So=`.${fC}`,pC=`focusin${So}`,_C=`keydown.tab${So}`,gC="Tab",mC="forward",zh="backward",vC={autofocus:!0,trapElement:null},yC={autofocus:"boolean",trapElement:"element"};class N_ extends Tr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return vC}static get DefaultType(){return yC}static get NAME(){return dC}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,So),S.on(document,pC,e=>this._handleFocusin(e)),S.on(document,_C,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,So))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=J.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===zh?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===gC&&(this._lastTabNavDirection=e.shiftKey?zh:mC)}}const EC="modal",bC="bs.modal",Dt=`.${bC}`,wC=".data-api",TC="Escape",CC=`hide${Dt}`,IC=`hidePrevented${Dt}`,O_=`hidden${Dt}`,k_=`show${Dt}`,AC=`shown${Dt}`,SC=`resize${Dt}`,RC=`click.dismiss${Dt}`,NC=`mousedown.dismiss${Dt}`,OC=`keydown.dismiss${Dt}`,kC=`click${Dt}${wC}`,qh="modal-open",PC="fade",Gh="show",Qa="modal-static",DC=".modal.show",xC=".modal-dialog",LC=".modal-body",MC='[data-bs-toggle="modal"]',$C={backdrop:!0,focus:!0,keyboard:!0},FC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Js extends Pt{constructor(e,n){super(e,n),this._dialog=J.findOne(xC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Vl,this._addEventListeners()}static get Default(){return $C}static get DefaultType(){return FC}static get NAME(){return EC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,k_,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(qh),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,CC).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Gh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,Dt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new R_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new N_({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=J.findOne(LC,this._dialog);n&&(n.scrollTop=0),wr(this._element),this._element.classList.add(Gh);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,AC,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,OC,e=>{if(e.key===TC){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,SC,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,NC,e=>{S.one(this._element,RC,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(qh),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,O_)})}_isAnimated(){return this._element.classList.contains(PC)}_triggerBackdropTransition(){if(S.trigger(this._element,IC).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Qa)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Qa),this._queueCallback(()=>{this._element.classList.remove(Qa),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=_t()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=_t()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Js.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,kC,MC,function(t){const e=nn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,k_,i=>{i.defaultPrevented||S.one(e,O_,()=>{di(this)&&this.focus()})});const n=J.findOne(DC);n&&Js.getInstance(n).hide(),Js.getOrCreateInstance(e).toggle(this)});fa(Js);mt(Js);const UC="offcanvas",BC="bs.offcanvas",dn=`.${BC}`,P_=".data-api",HC=`load${dn}${P_}`,WC="Escape",Yh="show",Qh="showing",Xh="hiding",VC="offcanvas-backdrop",D_=".offcanvas.show",jC=`show${dn}`,KC=`shown${dn}`,zC=`hide${dn}`,Jh=`hidePrevented${dn}`,x_=`hidden${dn}`,qC=`resize${dn}`,GC=`click${dn}${P_}`,YC=`keydown.dismiss${dn}`,QC='[data-bs-toggle="offcanvas"]',XC={backdrop:!0,keyboard:!0,scroll:!1},JC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Fn extends Pt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return XC}static get DefaultType(){return JC}static get NAME(){return UC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,jC,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Vl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Qh);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Yh),this._element.classList.remove(Qh),S.trigger(this._element,KC,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,zC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Xh),this._backdrop.hide();const n=()=>{this._element.classList.remove(Yh,Xh),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Vl().reset(),S.trigger(this._element,x_)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,Jh);return}this.hide()},n=Boolean(this._config.backdrop);return new R_({className:VC,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new N_({trapElement:this._element})}_addEventListeners(){S.on(this._element,YC,e=>{if(e.key===WC){if(!this._config.keyboard){S.trigger(this._element,Jh);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Fn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,GC,QC,function(t){const e=nn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),$n(this))return;S.one(e,x_,()=>{di(this)&&this.focus()});const n=J.findOne(D_);n&&n!==e&&Fn.getInstance(n).hide(),Fn.getOrCreateInstance(e).toggle(this)});S.on(window,HC,()=>{for(const t of J.find(D_))Fn.getOrCreateInstance(t).show()});S.on(window,qC,()=>{for(const t of J.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Fn.getOrCreateInstance(t).hide()});fa(Fn);mt(Fn);const ZC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eI=/^aria-[\w-]*$/i,tI=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,nI=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,sI=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?ZC.has(n)?Boolean(tI.test(t.nodeValue)||nI.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},L_={"*":["class","dir","id","lang","role",eI],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function iI(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)sI(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const rI="TemplateFactory",oI={allowList:L_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},aI={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},lI={entry:"(string|element|function|null)",selector:"(string|element)"};class cI extends Tr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return oI}static get DefaultType(){return aI}static get NAME(){return rI}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},lI)}_setContent(e,n,s){const i=J.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(sn(n)){this._putElementInTemplate(Mn(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?iI(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const uI="tooltip",hI=new Set(["sanitize","allowList","sanitizeFn"]),Xa="fade",dI="modal",qr="show",fI=".tooltip-inner",Zh=`.${dI}`,ed="hide.bs.modal",Si="hover",Ja="focus",pI="click",_I="manual",gI="hide",mI="hidden",vI="show",yI="shown",EI="inserted",bI="click",wI="focusin",TI="focusout",CI="mouseenter",II="mouseleave",AI={AUTO:"auto",TOP:"top",RIGHT:_t()?"left":"right",BOTTOM:"bottom",LEFT:_t()?"right":"left"},SI={allowList:L_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},RI={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class pi extends Pt{constructor(e,n){if(typeof a_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return SI}static get DefaultType(){return RI}static get NAME(){return uI}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(Zh),ed,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(vI)),s=(h_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(EI))),this._popper=this._createPopper(i),i.classList.add(qr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",Io);const o=()=>{S.trigger(this._element,this.constructor.eventName(yI)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(gI)).defaultPrevented)return;if(this._getTipElement().classList.remove(qr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",Io);this._activeTrigger[pI]=!1,this._activeTrigger[Ja]=!1,this._activeTrigger[Si]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(mI)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Xa,qr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=fw(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Xa),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new cI({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[fI]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xa)}_isShown(){return this.tip&&this.tip.classList.contains(qr)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=AI[n.toUpperCase()];return Vc(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(bI),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==_I){const s=n===Si?this.constructor.eventName(CI):this.constructor.eventName(wI),i=n===Si?this.constructor.eventName(II):this.constructor.eventName(TI);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Ja:Si]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Ja:Si]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(Zh),ed,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=rn.getDataAttributes(this._element);for(const s of Object.keys(n))hI.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Mn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=pi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}mt(pi);const NI="popover",OI=".popover-header",kI=".popover-body",PI={...pi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},DI={...pi.DefaultType,content:"(null|string|element|function)"};class qc extends pi{static get Default(){return PI}static get DefaultType(){return DI}static get NAME(){return NI}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[OI]:this._getTitle(),[kI]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=qc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}mt(qc);const xI="scrollspy",LI="bs.scrollspy",Gc=`.${LI}`,MI=".data-api",$I=`activate${Gc}`,td=`click${Gc}`,FI=`load${Gc}${MI}`,UI="dropdown-item",As="active",BI='[data-bs-spy="scroll"]',Za="[href]",HI=".nav, .list-group",nd=".nav-link",WI=".nav-item",VI=".list-group-item",jI=`${nd}, ${WI} > ${nd}, ${VI}`,KI=".dropdown",zI=".dropdown-toggle",qI={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},GI={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ga extends Pt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return qI}static get DefaultType(){return GI}static get NAME(){return xI}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Mn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,td),S.on(this._config.target,td,Za,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=J.find(Za,this._config.target);for(const n of e){if(!n.hash||$n(n))continue;const s=J.findOne(n.hash,this._element);di(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(As),this._activateParents(e),S.trigger(this._element,$I,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(UI)){J.findOne(zI,e.closest(KI)).classList.add(As);return}for(const n of J.parents(e,HI))for(const s of J.prev(n,jI))s.classList.add(As)}_clearActiveClass(e){e.classList.remove(As);const n=J.find(`${Za}.${As}`,e);for(const s of n)s.classList.remove(As)}static jQueryInterface(e){return this.each(function(){const n=ga.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,FI,()=>{for(const t of J.find(BI))ga.getOrCreateInstance(t)});mt(ga);const YI="tab",QI="bs.tab",ws=`.${QI}`,XI=`hide${ws}`,JI=`hidden${ws}`,ZI=`show${ws}`,eA=`shown${ws}`,tA=`click${ws}`,nA=`keydown${ws}`,sA=`load${ws}`,iA="ArrowLeft",sd="ArrowRight",rA="ArrowUp",id="ArrowDown",ss="active",rd="fade",el="show",oA="dropdown",aA=".dropdown-toggle",lA=".dropdown-menu",tl=":not(.dropdown-toggle)",cA='.list-group, .nav, [role="tablist"]',uA=".nav-item, .list-group-item",hA=`.nav-link${tl}, .list-group-item${tl}, [role="tab"]${tl}`,M_='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',nl=`${hA}, ${M_}`,dA=`.${ss}[data-bs-toggle="tab"], .${ss}[data-bs-toggle="pill"], .${ss}[data-bs-toggle="list"]`;class Zs extends Pt{constructor(e){super(e),this._parent=this._element.closest(cA),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,nA,n=>this._keydown(n)))}static get NAME(){return YI}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,XI,{relatedTarget:e}):null;S.trigger(e,ZI,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ss),this._activate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(el);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,eA,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(rd))}_deactivate(e,n){if(!e)return;e.classList.remove(ss),e.blur(),this._deactivate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(el);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,JI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(rd))}_keydown(e){if(![iA,sd,rA,id].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[sd,id].includes(e.key),s=jc(this._getChildren().filter(i=>!$n(i)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),Zs.getOrCreateInstance(s).show())}_getChildren(){return J.find(nl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=nn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(oA))return;const i=(r,o)=>{const a=J.findOne(r,s);a&&a.classList.toggle(o,n)};i(aA,ss),i(lA,el),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ss)}_getInnerElement(e){return e.matches(nl)?e:J.findOne(nl,e)}_getOuterElement(e){return e.closest(uA)||e}static jQueryInterface(e){return this.each(function(){const n=Zs.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,tA,M_,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!$n(this)&&Zs.getOrCreateInstance(this).show()});S.on(window,sA,()=>{for(const t of J.find(dA))Zs.getOrCreateInstance(t)});mt(Zs);const fA="toast",pA="bs.toast",Kn=`.${pA}`,_A=`mouseover${Kn}`,gA=`mouseout${Kn}`,mA=`focusin${Kn}`,vA=`focusout${Kn}`,yA=`hide${Kn}`,EA=`hidden${Kn}`,bA=`show${Kn}`,wA=`shown${Kn}`,TA="fade",od="hide",Gr="show",Yr="showing",CA={animation:"boolean",autohide:"boolean",delay:"number"},IA={animation:!0,autohide:!0,delay:5e3};class ma extends Pt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return IA}static get DefaultType(){return CA}static get NAME(){return fA}show(){if(S.trigger(this._element,bA).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(TA);const n=()=>{this._element.classList.remove(Yr),S.trigger(this._element,wA),this._maybeScheduleHide()};this._element.classList.remove(od),wr(this._element),this._element.classList.add(Gr,Yr),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,yA).defaultPrevented)return;const n=()=>{this._element.classList.add(od),this._element.classList.remove(Yr,Gr),S.trigger(this._element,EA)};this._element.classList.add(Yr),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Gr),super.dispose()}isShown(){return this._element.classList.contains(Gr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,_A,e=>this._onInteraction(e,!0)),S.on(this._element,gA,e=>this._onInteraction(e,!1)),S.on(this._element,mA,e=>this._onInteraction(e,!0)),S.on(this._element,vA,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=ma.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}fa(ma);mt(ma);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function AA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function sl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const Wi=()=>{},Ot=Array.isArray,SA=/\/$/,RA=t=>t.replace(SA,"");function il(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=PA(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function NA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OA(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ei(e.matched[s],n.matched[i])&&$_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kA(t[n],e[n]))return!1;return!0}function kA(t,e){return Ot(t)?ld(t,e):Ot(e)?ld(e,t):t===e}function ld(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function PA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ir;(function(t){t.pop="pop",t.push="push"})(ir||(ir={}));var Vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vi||(Vi={}));function DA(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RA(t)}const xA=/^[^#]+#/;function LA(t,e){return t.replace(xA,"#")+e}function MA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const va=()=>({left:window.pageXOffset,top:window.pageYOffset});function $A(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=MA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function FA(t,e){jl.set(t,e)}function UA(t){const e=jl.get(t);return jl.delete(t),e}let BA=()=>location.protocol+"//"+location.host;function F_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ad(l,"")}return ad(n,t)+s+i}function HA(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=F_(t,location),g=n.value,m=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}b=m?d.position-m.position:0}else s(p);i.forEach(y=>{y(n.value,g,{delta:b,type:ir.pop,direction:b?b>0?Vi.forward:Vi.back:Vi.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:va()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ud(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?va():null}}function WA(t){const{history:e,location:n}=window,s={value:F_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:BA()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,ud(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:va()});r(u.current,u,!0);const h=pe({},ud(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function VA(t){t=DA(t);const e=WA(t),n=HA(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:LA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function jA(t){return typeof t=="string"||t&&typeof t=="object"}function U_(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B_=Symbol("");var hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hd||(hd={}));function ti(t,e){return pe(new Error,{type:t,[B_]:!0},e)}function Yt(t,e){return t instanceof Error&&B_ in t&&(e==null||!!(t.type&e))}const dd="[^/]+?",KA={sensitive:!1,strict:!1,start:!0,end:!0},zA=/[.+*?^${}()[\]/\\]/g;function qA(t,e){const n=pe({},KA,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(zA,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:b,regexp:y}=d;r.push({name:g,repeatable:m,optional:b});const C=y||dd;if(C!==dd){p+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+R.message)}}let w=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(w=b&&c.length<2?`(?:/${w})`:"/"+w),b&&(w+="?"),i+=w,p+=20,b&&(p+=-8),m&&(p+=-20),C===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:b}=p,y=g in c?c[g]:"";if(Ot(y)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=Ot(y)?y.join("/"):y;if(!C)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function GA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function YA(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=GA(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(fd(s))return 1;if(fd(i))return-1}return i.length-s.length}function fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const QA={type:0,value:""},XA=/[a-zA-Z0-9_]/;function JA(t){if(!t)return[[]];if(t==="/")return[[QA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:XA.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ZA(t,e,n){const s=qA(JA(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function eS(t,e){const n=[],s=new Map;e=gd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,g=tS(u);g.aliasOf=d&&d.record;const m=gd(e,u),b=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of w)b.push(pe({},g,{components:d?d.record.components:g.components,path:R,aliasOf:d?d.record:g}))}let y,C;for(const w of b){const{path:R}=w;if(h&&R[0]!=="/"){const U=h.record.path,W=U[U.length-1]==="/"?"":"/";w.path=h.record.path+(R&&W+R)}if(y=ZA(w,h,m),d?d.alias.push(y):(C=C||y,C!==y&&C.alias.push(y),p&&u.name&&!_d(y)&&o(u.name)),g.children){const U=g.children;for(let W=0;W<U.length;W++)r(U[W],y,d&&d.children[W])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return C?()=>{o(C)}:Wi}function o(u){if(U_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&YA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!H_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_d(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ti(1,{location:u});m=d.record.name,p=pe(pd(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&pd(u.params,d.keys.map(C=>C.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(C=>C.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw ti(1,{location:u,currentLocation:h});m=d.record.name,p=pe({},h.params,u.params),g=d.stringify(p)}const b=[];let y=d;for(;y;)b.unshift(y.record),y=y.parent;return{name:m,path:g,params:p,matched:b,meta:sS(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function pd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function tS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function nS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function _d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sS(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function gd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function H_(t,e){return e.children.some(n=>n===t||H_(t,n))}const W_=/#/g,iS=/&/g,rS=/\//g,oS=/=/g,aS=/\?/g,V_=/\+/g,lS=/%5B/g,cS=/%5D/g,j_=/%5E/g,uS=/%60/g,K_=/%7B/g,hS=/%7C/g,z_=/%7D/g,dS=/%20/g;function Yc(t){return encodeURI(""+t).replace(hS,"|").replace(lS,"[").replace(cS,"]")}function fS(t){return Yc(t).replace(K_,"{").replace(z_,"}").replace(j_,"^")}function Kl(t){return Yc(t).replace(V_,"%2B").replace(dS,"+").replace(W_,"%23").replace(iS,"%26").replace(uS,"`").replace(K_,"{").replace(z_,"}").replace(j_,"^")}function pS(t){return Kl(t).replace(oS,"%3D")}function _S(t){return Yc(t).replace(W_,"%23").replace(aS,"%3F")}function gS(t){return t==null?"":_S(t).replace(rS,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(V_," "),o=r.indexOf("="),a=Ro(o<0?r:r.slice(0,o)),l=o<0?null:Ro(r.slice(o+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function md(t){let e="";for(let n in t){const s=t[n];if(n=pS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(r=>r&&Kl(r)):[s&&Kl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function vS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const yS=Symbol(""),vd=Symbol(""),Qc=Symbol(""),q_=Symbol(""),zl=Symbol("");function Ri(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ti(4,{from:n,to:e})):h instanceof Error?a(h):jA(h)?a(ti(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ES(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=AA(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,r,o)()}))}}return i}function ES(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yd(t){const e=tn(Qc),n=tn(q_),s=dt(()=>e.resolve(ht(t.to))),i=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ei.bind(null,u));if(d>-1)return d;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&h[h.length-1].path!==p?h.findIndex(ei.bind(null,l[c-2])):d}),r=dt(()=>i.value>-1&&CS(n.params,s.value.params)),o=dt(()=>i.value>-1&&i.value===n.matched.length-1&&$_(n.params,s.value.params));function a(l={}){return TS(l)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Wi):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const bS=gp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yd,setup(t,{slots:e}){const n=yr(yd(t)),{options:s}=tn(Qc),i=dt(()=>({[bd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),wS=bS;function TS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bd=(t,e,n)=>t??e??n,IS=gp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=tn(zl),i=dt(()=>t.route||s.value),r=tn(vd,0),o=dt(()=>{let c=ht(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>i.value.matched[o.value]);io(vd,dt(()=>o.value+1)),io(yS,a),io(zl,i);const l=Mt();return ro(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ei(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return wd(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Mp(d,pe({},g,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return wd(n.default,{Component:b,route:c})||b}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const AS=IS;function SS(t){const e=eS(t.routes,t),n=t.parseQuery||mS,s=t.stringifyQuery||md,i=t.history,r=Ri(),o=Ri(),a=Ri(),l=gy(vn);let c=vn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,T=>""+T),h=sl.bind(null,gS),d=sl.bind(null,Ro);function p(T,x){let D,F;return U_(T)?(D=e.getRecordMatcher(T),F=x):F=T,e.addRoute(F,D)}function g(T){const x=e.getRecordMatcher(T);x&&e.removeRoute(x)}function m(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function y(T,x){if(x=pe({},x||l.value),typeof T=="string"){const f=il(n,T,x.path),_=e.resolve({path:f.path},x),v=i.createHref(f.fullPath);return pe(f,_,{params:d(_.params),hash:Ro(f.hash),redirectedFrom:void 0,href:v})}let D;if("path"in T)D=pe({},T,{path:il(n,T.path,x.path).path});else{const f=pe({},T.params);for(const _ in f)f[_]==null&&delete f[_];D=pe({},T,{params:h(T.params)}),x.params=h(x.params)}const F=e.resolve(D,x),se=T.hash||"";F.params=u(d(F.params));const be=NA(s,pe({},T,{hash:fS(se),path:F.path})),Q=i.createHref(be);return pe({fullPath:be,hash:se,query:s===md?vS(T.query):T.query||{}},F,{redirectedFrom:void 0,href:Q})}function C(T){return typeof T=="string"?il(n,T,l.value.path):pe({},T)}function w(T,x){if(c!==T)return ti(8,{from:x,to:T})}function R(T){return Y(T)}function U(T){return R(pe(C(T),{replace:!0}))}function W(T){const x=T.matched[T.matched.length-1];if(x&&x.redirect){const{redirect:D}=x;let F=typeof D=="function"?D(T):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=C(F):{path:F},F.params={}),pe({query:T.query,hash:T.hash,params:"path"in F?{}:T.params},F)}}function Y(T,x){const D=c=y(T),F=l.value,se=T.state,be=T.force,Q=T.replace===!0,f=W(D);if(f)return Y(pe(C(f),{state:typeof f=="object"?pe({},se,f.state):se,force:be,replace:Q}),x||D);const _=D;_.redirectedFrom=x;let v;return!be&&OA(s,F,D)&&(v=ti(16,{to:_,from:F}),ct(F,F,!0,!1)),(v?Promise.resolve(v):G(_,F)).catch(E=>Yt(E)?Yt(E,2)?E:Pe(E):te(E,_,F)).then(E=>{if(E){if(Yt(E,2))return Y(pe({replace:Q},C(E.to),{state:typeof E.to=="object"?pe({},se,E.to.state):se,force:be}),x||_)}else E=ae(_,F,!0,Q,se);return j(_,F,E),E})}function $(T,x){const D=w(T,x);return D?Promise.reject(D):Promise.resolve()}function G(T,x){let D;const[F,se,be]=RS(T,x);D=rl(F.reverse(),"beforeRouteLeave",T,x);for(const f of F)f.leaveGuards.forEach(_=>{D.push(bn(_,T,x))});const Q=$.bind(null,T,x);return D.push(Q),Ss(D).then(()=>{D=[];for(const f of r.list())D.push(bn(f,T,x));return D.push(Q),Ss(D)}).then(()=>{D=rl(se,"beforeRouteUpdate",T,x);for(const f of se)f.updateGuards.forEach(_=>{D.push(bn(_,T,x))});return D.push(Q),Ss(D)}).then(()=>{D=[];for(const f of T.matched)if(f.beforeEnter&&!x.matched.includes(f))if(Ot(f.beforeEnter))for(const _ of f.beforeEnter)D.push(bn(_,T,x));else D.push(bn(f.beforeEnter,T,x));return D.push(Q),Ss(D)}).then(()=>(T.matched.forEach(f=>f.enterCallbacks={}),D=rl(be,"beforeRouteEnter",T,x),D.push(Q),Ss(D))).then(()=>{D=[];for(const f of o.list())D.push(bn(f,T,x));return D.push(Q),Ss(D)}).catch(f=>Yt(f,8)?f:Promise.reject(f))}function j(T,x,D){for(const F of a.list())F(T,x,D)}function ae(T,x,D,F,se){const be=w(T,x);if(be)return be;const Q=x===vn,f=Ps?history.state:{};D&&(F||Q?i.replace(T.fullPath,pe({scroll:Q&&f&&f.scroll},se)):i.push(T.fullPath,se)),l.value=T,ct(T,x,D,Q),Pe()}let _e;function ge(){_e||(_e=i.listen((T,x,D)=>{if(!yt.listening)return;const F=y(T),se=W(F);if(se){Y(pe(se,{replace:!0}),F).catch(Wi);return}c=F;const be=l.value;Ps&&FA(cd(be.fullPath,D.delta),va()),G(F,be).catch(Q=>Yt(Q,12)?Q:Yt(Q,2)?(Y(Q.to,F).then(f=>{Yt(f,20)&&!D.delta&&D.type===ir.pop&&i.go(-1,!1)}).catch(Wi),Promise.reject()):(D.delta&&i.go(-D.delta,!1),te(Q,F,be))).then(Q=>{Q=Q||ae(F,be,!1),Q&&(D.delta&&!Yt(Q,8)?i.go(-D.delta,!1):D.type===ir.pop&&Yt(Q,20)&&i.go(-1,!1)),j(F,be,Q)}).catch(Wi)}))}let Be=Ri(),nt=Ri(),oe;function te(T,x,D){Pe(T);const F=nt.list();return F.length?F.forEach(se=>se(T,x,D)):console.error(T),Promise.reject(T)}function le(){return oe&&l.value!==vn?Promise.resolve():new Promise((T,x)=>{Be.add([T,x])})}function Pe(T){return oe||(oe=!T,ge(),Be.list().forEach(([x,D])=>T?D(T):x()),Be.reset()),T}function ct(T,x,D,F){const{scrollBehavior:se}=t;if(!Ps||!se)return Promise.resolve();const be=!D&&UA(cd(T.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return ap().then(()=>se(T,x,be)).then(Q=>Q&&$A(Q)).catch(Q=>te(Q,T,x))}const Ke=T=>i.go(T);let Oe;const vt=new Set,yt={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:b,getRoutes:m,resolve:y,options:t,push:R,replace:U,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:le,install(T){const x=this;T.component("RouterLink",wS),T.component("RouterView",AS),T.config.globalProperties.$router=x,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Ps&&!Oe&&l.value===vn&&(Oe=!0,R(i.location).catch(se=>{}));const D={};for(const se in vn)D[se]=dt(()=>l.value[se]);T.provide(Qc,x),T.provide(q_,yr(D)),T.provide(zl,l);const F=T.unmount;vt.add(T),T.unmount=function(){vt.delete(T),vt.size<1&&(c=vn,_e&&_e(),_e=null,l.value=vn,Oe=!1,oe=!1),F()}}};return yt}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function RS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ei(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ei(c,l))||i.push(l))}return[n,s,i]}const NS="modulepreload",OS=function(t){return"/MyPortfolio/"+t},Td={},Qr=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=OS(r),r in Td)return;Td[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":NS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const kS={},PS={class:"bg-black text-bg-dark m-0 container-fluid row justify-content-center"},DS=aa('<section class="banner col-md-10 col-12 ps-0 pe-0" data-v-6b130a05><div class="row pt-5" data-v-6b130a05><div class="col-12 text-center text-md-start display-2" data-v-6b130a05> Hi, I&#39;m <div class="m-0 d-sm-none" data-v-6b130a05></div> Frank Chung. </div></div><div class="row" data-v-6b130a05><div class="ms-lg-5 ms-md-5 col-12 text-center text-md-start d-none d-md-block" data-v-6b130a05><p class="display-2 blur" data-v-6b130a05>Hi, I&#39;m Frank Chung.</p></div></div><div class="row justify-content-lg-end mt-5" data-v-6b130a05><div class="col-12 text-center text-md-end display-2" data-v-6b130a05> I&#39;m a <div class="m-0 d-sm-none" data-v-6b130a05></div> UX Designer. </div></div><div class="row justify-content-lg-end" data-v-6b130a05><div class="col-12 text-center text-md-end d-none d-md-block" data-v-6b130a05><p class="display-2 blur delete-decoration mb-0" data-v-6b130a05>Frontend Engineer</p></div></div><div class="row justify-content-lg-end" data-v-6b130a05><div class="col-12 text-center text-md-end d-none d-md-block" data-v-6b130a05><p class="display-2 blur delete-decoration" data-v-6b130a05>Product Manager</p></div></div><div class="row mt-5" data-v-6b130a05><div class="col-lg-3 col-md-6 col-12 mb-3 d-grid" data-v-6b130a05><button class="btn btn-outline-warning btn-lg" data-v-6b130a05>More Frank</button></div><div class="col-lg-3 col-md-6 col-12 mb-3 d-grid" data-v-6b130a05><button class="btn btn-outline-light btn-lg" data-v-6b130a05>Resume</button></div></div></section>',1),xS=[DS];function LS(t,e){return zt(),xn("div",PS,xS)}const MS=ca(kS,[["render",LS],["__scopeId","data-v-6b130a05"]]),$S="/MyPortfolio/assets/TravelMaker_Mockup_Phone-d746af42.png",FS="/MyPortfolio/assets/Inshone_Mockup_Phone-0aae0aec.png",US="/MyPortfolio/assets/Lily_Mockup_Phone-245e7916.png",BS="/MyPortfolio/assets/Junyi_Mockup_Phone-8f8029ec.png";const HS={},WS={class:"bg-black text-bg-black container-fluid"},VS=aa('<div class="project-group top-0 row g-0 justify-content-center pb-5" data-v-c39caf62><div class="col-md-10 col-12" data-v-c39caf62><div class="row row-cols-lg-2 row-cols-1 card-deck justify-content-center justify-content-lg-between" data-v-c39caf62><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+$S+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>TravelMaker</h2><h4 class="card-text" data-v-c39caf62>幫助旅行者快速找到替代方案的旅遊行程管理軟體</h4><h6 class="card-text" data-v-c39caf62>Product Manager, UX Designer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+FS+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>影相設計</h2><h4 class="card-text" data-v-c39caf62>提供模組化影像製作方案的選購平台</h4><h6 class="card-text" data-v-c39caf62>Product Designer, Frontend Developer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+US+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>Lily Chen Website</h2><h4 class="card-text" data-v-c39caf62>攝影師 Lily Chen 的個人品牌網站</h4><h6 class="card-text" data-v-c39caf62>Product Manager, UI/UX Designer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+BS+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>學習風格測驗</h2><h4 class="card-text" data-v-c39caf62>均一教育平台的心理測驗互動式網頁</h4><h6 class="card-text" data-v-c39caf62>Product Designer, Frontend Developer</h6></div></div></div></div></div></div>',1),jS=[VS];function KS(t,e){return zt(),xn("div",WS,jS)}const zS=ca(HS,[["render",KS],["__scopeId","data-v-c39caf62"]]),qS={__name:"Home",setup(t){return(e,n)=>(zt(),xn(it,null,[Ce(MS),Ce(zS)],64))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+G_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new YS;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q_=function(t){const e=Y_(t);return Xc.encodeByteArray(e,!0)},No=function(t){return Q_(t).replace(/\./g,"")},Oo=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){return X_(void 0,t)}function X_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XS(n)||(t[n]=X_(t[n],e[n]));return t}function XS(t){return t!=="__proto__"}/**
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
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZS=()=>JS().__FIREBASE_DEFAULTS__,eR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return ZS()||eR()||tR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z_=t=>{const e=J_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nR=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},eg=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function tg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[No(JSON.stringify(n)),No(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function sR(){var t;const e=(t=ya())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rR(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sg(){return G_.NODE_ADMIN===!0}function oR(){try{return typeof indexedDB=="object"}catch{return!1}}function aR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lR,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,s)}}function cR(t,e){return t.replace(uR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const uR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rr(Oo(r[0])||""),n=rr(Oo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},hR=function(t){const e=ig(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dR=function(t){const e=ig(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ql(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Cd(r)&&Cd(o)){if(!Po(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Cd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pR(t,e){const n=new _R(t,e);return n.subscribe.bind(n)}class _R{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}function Zc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ba=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class vR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ea;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ER(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yR(t){return t===Yn?void 0:t}function ER(t){return t.instantiationMode==="EAGER"}/**
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
 */class bR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const wR={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},TR=me.INFO,CR={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},IR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=CR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=TR,this._logHandler=IR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const AR=(t,e)=>e.some(n=>t instanceof n);let Id,Ad;function SR(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RR(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,Gl=new WeakMap,og=new WeakMap,al=new WeakMap,tu=new WeakMap;function NR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rg.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function OR(t){if(Gl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){Yl=t(Yl)}function PR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ll(this),e,...n);return og.set(s,e.sort?e.sort():[e]),Nn(s)}:RR().includes(t)?function(...e){return t.apply(ll(this),e),Nn(rg.get(this))}:function(...e){return Nn(t.apply(ll(this),e))}}function DR(t){return typeof t=="function"?PR(t):(t instanceof IDBTransaction&&OR(t),AR(t,SR())?new Proxy(t,Yl):t)}function Nn(t){if(t instanceof IDBRequest)return NR(t);if(al.has(t))return al.get(t);const e=DR(t);return e!==t&&(al.set(t,e),tu.set(e,t)),e}const ll=t=>tu.get(t);function xR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const LR=["get","getKey","getAll","getAllKeys","count"],MR=["put","add","delete","clear"],cl=new Map;function Sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=MR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||LR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return cl.set(e,r),r}kR(t=>({...t,get:(e,n,s)=>Sd(e,n)||t.get(e,n,s),has:(e,n)=>!!Sd(e,n)||t.has(e,n)}));/**
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
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ql="@firebase/app",Rd="0.9.4";/**
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
 */const ps=new eu("@firebase/app"),UR="@firebase/app-compat",BR="@firebase/analytics-compat",HR="@firebase/analytics",WR="@firebase/app-check-compat",VR="@firebase/app-check",jR="@firebase/auth",KR="@firebase/auth-compat",zR="@firebase/database",qR="@firebase/database-compat",GR="@firebase/functions",YR="@firebase/functions-compat",QR="@firebase/installations",XR="@firebase/installations-compat",JR="@firebase/messaging",ZR="@firebase/messaging-compat",eN="@firebase/performance",tN="@firebase/performance-compat",nN="@firebase/remote-config",sN="@firebase/remote-config-compat",iN="@firebase/storage",rN="@firebase/storage-compat",oN="@firebase/firestore",aN="@firebase/firestore-compat",lN="firebase",cN="9.17.2";/**
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
 */const Xl="[DEFAULT]",uN={[Ql]:"fire-core",[UR]:"fire-core-compat",[HR]:"fire-analytics",[BR]:"fire-analytics-compat",[VR]:"fire-app-check",[WR]:"fire-app-check-compat",[jR]:"fire-auth",[KR]:"fire-auth-compat",[zR]:"fire-rtdb",[qR]:"fire-rtdb-compat",[GR]:"fire-fn",[YR]:"fire-fn-compat",[QR]:"fire-iid",[XR]:"fire-iid-compat",[JR]:"fire-fcm",[ZR]:"fire-fcm-compat",[eN]:"fire-perf",[tN]:"fire-perf-compat",[nN]:"fire-rc",[sN]:"fire-rc-compat",[iN]:"fire-gcs",[rN]:"fire-gcs-compat",[oN]:"fire-fst",[aN]:"fire-fst-compat","fire-js":"fire-js",[lN]:"fire-js-all"};/**
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
 */const Do=new Map,Jl=new Map;function hN(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Jl.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,t);for(const n of Do.values())hN(n,t);return!0}function wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new Ar("app","Firebase",dN);/**
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
 */class fN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=cN;function ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=nR()),!n)throw On.create("no-options");const r=Do.get(i);if(r){if(Po(n,r.options)&&Po(s,r.config))return r;throw On.create("duplicate-app",{appName:i})}const o=new bR(i);for(const l of Jl.values())o.addComponent(l);const a=new fN(n,s,o);return Do.set(i,a),a}function nu(t=Xl){const e=Do.get(t);if(!e&&t===Xl)return ag();if(!e)throw On.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=(s=uN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ps.warn(a.join(" "));return}_s(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pN="firebase-heartbeat-database",_N=1,or="firebase-heartbeat-store";let ul=null;function lg(){return ul||(ul=xR(pN,_N,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(or)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),ul}async function gN(t){try{return(await lg()).transaction(or).objectStore(or).get(cg(t))}catch(e){if(e instanceof fn)ps.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ps.warn(n.message)}}}async function Nd(t,e){try{const s=(await lg()).transaction(or,"readwrite");return await s.objectStore(or).put(e,cg(t)),s.done}catch(n){if(n instanceof fn)ps.warn(n.message);else{const s=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ps.warn(s.message)}}}function cg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mN=1024,vN=30*24*60*60*1e3;class yN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Od(),{heartbeatsToSend:n,unsentEntries:s}=EN(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Od(){return new Date().toISOString().substring(0,10)}function EN(t,e=mN){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),kd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oR()?aR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kd(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wN(t){_s(new Un("platform-logger",e=>new $R(e),"PRIVATE")),_s(new Un("heartbeat",e=>new yN(e),"PRIVATE")),Wt(Ql,Rd,t),Wt(Ql,Rd,"esm2017"),Wt("fire-js","")}wN("");const Pd="@firebase/database",Dd="0.14.4";/**
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
 */let ug="";function TN(t){ug=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CN(e)}}catch{}return new IN},is=hg("localStorage"),Zl=hg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new eu("@firebase/database"),AN=function(){let t=1;return function(){return t++}}(),dg=function(t){const e=mR(t),n=new fR;n.update(e);const s=n.digest();return Xc.encodeByteArray(s)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Sr.apply(null,s):typeof s=="object"?e+=De(s):e+=s,e+=" "}return e};let cs=null,xd=!0;const SN=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Bs.logLevel=me.VERBOSE,cs=Bs.log.bind(Bs),e&&Zl.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,Zl.remove("logging_enabled"))},He=function(...t){if(xd===!0&&(xd=!1,cs===null&&Zl.get("logging_enabled")===!0&&SN(!0)),cs){const e=Sr.apply(null,t);cs(e)}},Rr=function(t){return function(...e){He(t,...e)}},ec=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);Bs.error(e)},cn=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw Bs.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+Sr(...t);Bs.warn(e)},RN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},si="[MIN_NAME]",gs="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===si||e===gs)return-1;if(e===si||t===gs)return 1;{const n=Ld(t),s=Ld(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ON=function(t,e){return t===e?0:t<e?-1:1},Ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},su=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=De(e[s]),n+=":",n+=su(t[e[s]]);return n+="}",n},pg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _g=function(t){O(!fg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},kN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const xN=new RegExp("^-?(0*)\\d{1,10}$"),LN=-2147483648,MN=2147483647,Ld=function(t){if(xN.test(t)){const e=Number(t);if(e>=LN&&e<=MN)return e}return null},yi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},$N=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="5",gg="v",mg="s",vg="r",yg="f",Eg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bg="ls",wg="p",tc="ac",Tg="websocket",Cg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ag(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Tg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BN(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.counters_={}}incrementCounter(e,n=1){pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return QS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={},dl={};function ru(t){const e=t.toString();return hl[e]||(hl[e]=new HN),hl[e]}function WN(t,e){const n=t.toString();return dl[n]||(dl[n]=e()),dl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="start",jN="close",KN="pLPCommand",zN="pRTLPCB",Sg="id",Rg="pw",Ng="ser",qN="cb",GN="seg",YN="ts",QN="d",XN="dframe",Og=1870,kg=30,JN=Og-kg,ZN=25e3,e0=3e4;class xs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rr(e),this.stats_=ru(n),this.urlFn=l=>(this.appCheckToken&&(l[tc]=this.appCheckToken),Ag(n,Cg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(e0)),NN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ou((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Md)this.id=a,this.password=l;else if(o===jN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Md]="t",s[Ng]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gg]=iu,this.transportSessionId&&(s[mg]=this.transportSessionId),this.lastSessionId&&(s[bg]=this.lastSessionId),this.applicationId&&(s[wg]=this.applicationId),this.appCheckToken&&(s[tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Eg.test(location.hostname)&&(s[vg]=yg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xs.forceAllow_=!0}static forceDisallow(){xs.forceDisallow_=!0}static isAvailable(){return xs.forceAllow_?!0:!xs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kN()&&!PN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Q_(n),i=pg(s,JN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[XN]="t",s[Sg]=e,s[Rg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ou{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AN(),window[KN+this.uniqueCallbackIdentifier]=e,window[zN+this.uniqueCallbackIdentifier]=n,this.myIFrame=ou.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sg]=this.myID,e[Rg]=this.myPW,e[Ng]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kg+s.length<=Og;){const o=this.pendingSegs.shift();s=s+"&"+GN+i+"="+o.seg+"&"+YN+i+"="+o.ts+"&"+QN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(ZN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=16384,n0=45e3;let xo=null;typeof MozWebSocket<"u"?xo=MozWebSocket:typeof WebSocket<"u"&&(xo=WebSocket);class Tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rr(this.connId),this.stats_=ru(n),this.connURL=Tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gg]=iu,typeof location<"u"&&location.hostname&&Eg.test(location.hostname)&&(o[vg]=yg),n&&(o[mg]=n),s&&(o[bg]=s),i&&(o[tc]=i),r&&(o[wg]=r),Ag(e,Tg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,is.set("previous_websocket_failure",!0);try{let s;sg(),this.mySock=new xo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xo!==null&&!Tt.forceDisallow_}static previouslyFailed(){return is.isInMemoryStorage||is.get("previous_websocket_failure")===!0}markConnectionHealthy(){is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pg(n,t0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(n0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xs,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const i=this.transports_=[];for(const r of ar.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ar.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=6e4,i0=5e3,r0=10*1024,o0=100*1024,fl="t",$d="d",a0="s",Fd="r",l0="e",Ud="o",Bd="a",Hd="n",Wd="p",c0="h";class u0{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rr("c:"+this.id+":"),this.transportManager_=new ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>o0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>r0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fl in e){const n=e[fl];n===Bd?this.upgradeIfSecondaryHealthy_():n===Fd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ud&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ni(fl,e);if($d in e){const s=e[$d];if(n===c0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===a0?this.onConnectionShutdown_(s):n===Fd?this.onReset_(s):n===l0?ec("Server Error: "+s):n===Ud?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ec("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),iu!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Dg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lo}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=32,jd=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function xg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Lg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Ge(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $g(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function It(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class d0{constructor(e,n){this.errorPrefix_=n,this.parts_=Lg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ba(this.parts_[s]);Fg(this)}}function f0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ba(e),Fg(t)}function p0(t){const e=t.parts_.pop();t.byteLength_-=ba(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fg(t){if(t.byteLength_>jd)throw new Error(t.errorPrefix_+"has a key path longer than "+jd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vd+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Dg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new au}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=1e3,_0=60*5*1e3,Kd=30*1e3,g0=1.3,m0=3e4,v0="server_kill",zd=3;class on extends Pg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Rr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oi,this.maxReconnectDelay_=_0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");au.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(De(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ea,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pn(e,"w")){const s=ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ec("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>m0&&(this.reconnectDelay_=Oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new u0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(v0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ze(h),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ql(this.interruptReasons_)&&(this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>su(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zd&&(this.reconnectDelay_=Kd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ug.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:ng()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lo.getInstance().currentlyOnline();return ql(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ta{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(si,e),i=new ne(si,n);return this.compare(s,i)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr;class Ug extends Ta{static get __EMPTY_NODE(){return Xr}static set __EMPTY_NODE(e){Xr=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(gs,Xr)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Xr)}toString(){return".key"}}const Ws=new Ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??$e.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new $e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class y0{copy(e,n,s,i,r){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new y0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){return vi(t.name,e.name)}function lu(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;function b0(t){nc=t}const Bg=function(t){return typeof t=="number"?"number:"+_g(t):"string:"+t},Hg=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pn(e,".sv"),"Priority must be a string or number.")}else O(t===nc||t.isEmpty(),"priority of unexpected type.");O(t===nc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hg(this.priorityNode_)}static set __childrenNodeConstructor(e){qd=e}static get __childrenNodeConstructor(){return qd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_g(this.value_):e+=this.value_,this.lazyHash_=dg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg,Vg;function w0(t){Wg=t}function T0(t){Vg=t}class C0 extends Ta{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(gs,new Me("[PRIORITY-POST]",Vg))}makePost(e,n){const s=Wg(e);return new ne(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new C0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=Math.log(2);class A0{constructor(e){const n=r=>parseInt(Math.log(r)/I0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new $e(d,h.node,$e.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],d=n?n(h):h,new $e(d,h.node,$e.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const b=h-g,y=h;h-=g;const C=i(b+1,y),w=t[b],R=n?n(w):w;p(new $e(R,w.node,m,null,C))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));m?d(b,$e.BLACK):(d(b,$e.BLACK),d(b,$e.RED))}return u},o=new A0(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;const Rs={};class Jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Rs&&Ie,"ChildrenNode.ts has not been loaded"),pl=pl||new Jt({".priority":Rs},{".priority":Ie}),pl}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return pn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ne.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Mo(s,e.getCompare()):a=Rs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Jt(u,c)}addToIndexes(e,n){const s=ko(this.indexes_,(i,r)=>{const o=ni(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Rs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Mo(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Jt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ko(this.indexes_,i=>{if(i===Rs)return i;{const r=n.get(e.name);return r?i.remove(new ne(e.name,r)):i}});return new Jt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ki||(ki=new V(new Je(lu),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ki:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{O(re(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bg(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nr?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class S0 extends V{constructor(){super(new Je(lu),V.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Nr=new S0;Object.defineProperties(ne,{MIN:{value:new ne(si,V.EMPTY_NODE)},MAX:{value:new ne(gs,Nr)}});Ug.__EMPTY_NODE=V.EMPTY_NODE;Me.__childrenNodeConstructor=V;b0(Nr);T0(Nr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=!0;function Fe(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Fe(e))}if(!(t instanceof Array)&&R0){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=Mo(n,E0,o=>o.name,lu);if(s){const o=Mo(n,Ie.getCompare());return new V(r,Fe(e),new Jt({".priority":o},{".priority":Ie}))}else return new V(r,Fe(e),Jt.Default)}else{let n=V.EMPTY_NODE;return tt(t,(s,i)=>{if(pn(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}w0(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends Ta{constructor(e){super(),this.indexPath_=e,O(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Nr);return new ne(gs,e)}toString(){return Lg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0 extends Ta{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Fe(e);return new ne(n,s)}toString(){return".value"}}const k0=new O0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function P0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(lr(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,s)):o.trackChildChange(cr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(lr(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cr(i,r,o))}else s.trackChildChange(ii(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.indexedFilter_=new cu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ur.getStartPost_(e),this.endPost_=ur.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ne(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new ne(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ur(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ne(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ne(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(cr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(lr(n,h));const m=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ii(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(lr(c.name,c.node)),r.trackChildChange(ii(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:si}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function x0(t){return t.loadsAllData()?new cu(t.getIndex()):t.hasLimit()?new D0(t):new ur(t)}function Gd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===k0?n="$value":t.index_===Ws?n="$key":(O(t.index_ instanceof N0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=De(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+De(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=De(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Pg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Rr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$o.getListenId_(e,s),a={};this.listens_[o]=a;const l=Gd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ni(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=$o.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gd(e._queryParams),s=e._path.toString(),i=new Ea;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rr(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){return{value:null,children:new Map}}function Kg(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,Fo());const i=t.children.get(s);e=ye(e),Kg(i,e,n)}}function sc(t,e,n){t.value!==null?n(e,t.value):M0(t,(s,i)=>{const r=new ve(e.toString()+"/"+s);sc(i,r,n)})}function M0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=10*1e3,F0=30*1e3,U0=5*60*1e3;class B0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $0(e);const s=Qd+(F0-Qd)*Math.random();ji(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&pn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*U0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function du(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=At.ACK_USER_WRITE,this.source=zg()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Uo(ue(),n,this.revert)}}else return O(re(this.path)===e,"operationForChild called for unrelated child."),new Uo(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new hr(this.source,ue()):new hr(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=At.OVERWRITE}operationForChild(e){return ie(this.path)?new ms(this.source,ue(),this.snap.getImmediateChild(e)):new ms(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=At.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new ms(this.source,ue(),n.value):new dr(this.source,ue(),n)}else return O(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dr(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W0(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(P0(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,s,n),Pi(t,i,"child_added",e,s,n),Pi(t,i,"child_moved",r,s,n),Pi(t,i,"child_changed",e,s,n),Pi(t,i,"value",e,s,n),i}function Pi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>j0(t,a,l)),o.forEach(a=>{const l=V0(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function V0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function j0(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,s){return Ca(new Hn(e,n,s),t.serverCache)}function qg(t,e,n,s){return Ca(t.eventCache,new Hn(e,n,s))}function Bo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;const K0=()=>(_l||(_l=new Je(ON)),_l);class we{constructor(e,n=K0()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return tt(e,(s,i)=>{n=n.set(new ve(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:xe(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new we(null)}}set(e,n){if(ie(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(ye(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(ie(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ie(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),xe(n,i),s):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new we(null))}}function zi(t,e,n){if(ie(e))return new Nt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ge(i,e);return r=r.updateChild(o,n),new Nt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Nt(r)}}}function Xd(t,e,n){let s=t;return tt(n,(i,r)=>{s=zi(s,xe(e,i),r)}),s}function Jd(t,e){if(ie(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Nt(n)}}function ic(t,e){return Ts(t,e)!=null}function Ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function Zd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new ne(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ne(s,i.value))}),e}function kn(t,e){if(ie(e))return t;{const n=Ts(t,e);return n!=null?new Nt(new we(n)):new Nt(t.writeTree_.subtree(e))}}function rc(t){return t.writeTree_.isEmpty()}function ri(t,e){return Gg(ue(),t.writeTree_,e)}function Gg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gg(xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e){return Jg(e,t)}function z0(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=s}function q0(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function G0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Y0(a,s.path)?i=!1:It(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Q0(t),!0;if(s.snap)t.visibleWrites=Jd(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=Jd(t.visibleWrites,xe(s.path,l))})}return!0}else return!1}function Y0(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(xe(t.path,n),e))return!0;return!1}function Q0(t){t.visibleWrites=Yg(t.allWrites,X0,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X0(t){return t.visible}function Yg(t,e,n){let s=Nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)It(n,o)?(a=Ge(n,o),s=zi(s,a,r.snap)):It(o,n)&&(a=Ge(o,n),s=zi(s,ue(),r.snap.getChild(a)));else if(r.children){if(It(n,o))a=Ge(n,o),s=Xd(s,a,r.children);else if(It(o,n))if(a=Ge(o,n),ie(a))s=Xd(s,ue(),r.children);else{const l=ni(r.children,re(a));if(l){const c=l.getChild(ye(a));s=zi(s,ue(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return s}function Qg(t,e,n,s,i){if(!s&&!i){const r=Ts(t.visibleWrites,e);if(r!=null)return r;{const o=kn(t.visibleWrites,e);if(rc(o))return n;if(n==null&&!ic(o,ue()))return null;{const a=n||V.EMPTY_NODE;return ri(o,a)}}}else{const r=kn(t.visibleWrites,e);if(!i&&rc(r))return n;if(!i&&n==null&&!ic(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},a=Yg(t.allWrites,o,e),l=n||V.EMPTY_NODE;return ri(a,l)}}}function J0(t,e,n){let s=V.EMPTY_NODE;const i=Ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=ri(kn(r,new ve(o)),a);s=s.updateImmediateChild(o,l)}),Zd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kn(t.visibleWrites,e);return Zd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Z0(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(ic(t.visibleWrites,r))return null;{const o=kn(t.visibleWrites,r);return rc(o)?i.getChild(n):ri(o,i.getChild(n))}}function eO(t,e,n,s){const i=xe(e,n),r=Ts(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return ri(o,s.getNode().getImmediateChild(n))}else return null}function tO(t,e){return Ts(t.visibleWrites,e)}function nO(t,e,n,s,i,r,o){let a;const l=kn(t.visibleWrites,e),c=Ts(l,ue());if(c!=null)a=c;else if(n!=null)a=ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function sO(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function Ho(t,e,n,s){return Qg(t.writeTree,t.treePath,e,n,s)}function fu(t,e){return J0(t.writeTree,t.treePath,e)}function ef(t,e,n,s){return Z0(t.writeTree,t.treePath,e,n,s)}function Wo(t,e){return tO(t.writeTree,xe(t.treePath,e))}function iO(t,e,n,s,i,r){return nO(t.writeTree,t.treePath,e,n,s,i,r)}function pu(t,e,n){return eO(t.writeTree,t.treePath,e,n)}function Xg(t,e){return Jg(xe(t.treePath,e),t.writeTree)}function Jg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,lr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ii(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cr(s,e.snapshotNode,i.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zg=new oO;class _u{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),r=iO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t){return{filter:t}}function lO(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cO(t,e,n,s,i){const r=new rO;let o,a;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=oc(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Vo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=hO(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,c.path,c.children,s,i,a,r))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=pO(t,e,c.path,s,i,r):o=dO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===At.LISTEN_COMPLETE)o=fO(t,e,n.path,s,r);else throw _i("Unknown operation type: "+n.type);const l=r.getChanges();return uO(e,o,l),{viewCache:o,changes:l}}function uO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Bo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(jg(Bo(e)))}}function em(t,e,n,s,i,r){const o=e.eventCache;if(Wo(s,n)!=null)return e;{let a,l;if(ie(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vs(e),u=c instanceof V?c:V.EMPTY_NODE,h=fu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ho(s,vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){O(Bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ef(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ef(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=pu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Vo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const g=ye(n),b=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,g,Zg,null)}const h=qg(e,c,l.isFullyInitialized()||ie(n),u.filtersNodes()),d=new _u(i,h,r);return em(t,h,n,i,d,a)}function oc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new _u(i,e,r);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ki(e,c,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),p=a.getNode().getImmediateChild(h);let g;if(ie(d))g=s;else{const m=u.getCompleteChild(h);m!=null?xg(d)===".priority"&&m.getChild(Mg(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=V.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Ki(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function tf(t,e){return t.eventCache.isCompleteForChild(e)}function hO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=xe(n,l);tf(e,re(u))&&(a=oc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=xe(n,l);tf(e,re(u))||(a=oc(t,a,u,c,i,r,o))}),a}function nf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ac(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=nf(t,p,d);l=Vo(t,l,new ve(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=nf(t,g,d);l=Vo(t,l,new ve(h),m,i,r,o,a)}}),l}function dO(t,e,n,s,i,r,o){if(Wo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ie(n)){let c=new we(null);return l.getNode().forEachChild(Ws,(u,h)=>{c=c.set(new ve(u),h)}),ac(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ac(t,e,n,c,i,r,a,o)}}function fO(t,e,n,s,i){const r=e.serverCache,o=qg(e,r.getNode(),r.isFullyInitialized()||ie(n),r.isFiltered());return em(t,o,n,s,Zg,i)}function pO(t,e,n,s,i,r){let o;if(Wo(s,n)!=null)return e;{const a=new _u(s,e,i),l=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ho(s,vs(e));else{const h=e.serverCache.getNode();O(h instanceof V,"serverChildren would be complete if leaf node"),u=fu(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let h=pu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ho(s,vs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Wo(s,ue())!=null,Ki(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cu(s.getIndex()),r=x0(s);this.processor_=aO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Hn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Hn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ca(h,u),this.eventGenerator_=new H0(this.query_)}get query(){return this.query_}}function gO(t){return t.viewCache_.serverCache.getNode()}function mO(t){return Bo(t.viewCache_)}function vO(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function sf(t){return t.eventRegistrations_.length===0}function yO(t,e){t.eventRegistrations_.push(e)}function rf(t,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function of(t,e,n,s){e.type===At.MERGE&&e.source.queryId!==null&&(O(vs(t.viewCache_),"We should always have a full cache before handling merges"),O(Bo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=cO(t.processor_,i,e,n,s);return lO(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,tm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function EO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(ii(r,o))}),n.isFullyInitialized()&&s.push(jg(n.getNode())),tm(t,s,n.getNode(),e)}function tm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return W0(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class nm{constructor(){this.views=new Map}}function bO(t){O(!jo,"__referenceConstructor has already been defined"),jo=t}function wO(){return O(jo,"Reference.ts has not been loaded"),jo}function TO(t){return t.views.size===0}function gu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),of(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(of(o,e,n,s));return r}}function sm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ho(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=fu(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Ca(new Hn(a,l,!1),new Hn(s,i,!1));return new _O(e,c)}return o}function CO(t,e,n,s,i,r){const o=sm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yO(o,n),EO(o,n)}function IO(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Wn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(rf(c,n,s)),sf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(rf(l,n,s)),sf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Wn(t)&&r.push(new(wO())(e._repo,e._path)),{removed:r,events:o}}function im(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const s of t.views.values())n=n||vO(s,e);return n}function rm(t,e){if(e._queryParams.loadsAllData())return Aa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function om(t,e){return rm(t,e)!=null}function Wn(t){return Aa(t)!=null}function Aa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;function AO(t){O(!Ko,"__referenceConstructor has already been defined"),Ko=t}function SO(){return O(Ko,"Reference.ts has not been loaded"),Ko}let RO=1;class af{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=sO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function am(t,e,n,s,i){return z0(t.pendingWriteTree_,e,n,s,i),i?kr(t,new ms(zg(),e,n)):[]}function rs(t,e,n=!1){const s=q0(t.pendingWriteTree_,e);if(G0(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ue(),!0):tt(s.children,o=>{r=r.set(new ve(o),!0)}),kr(t,new Uo(s.path,r,n))}else return[]}function Or(t,e,n){return kr(t,new ms(hu(),e,n))}function NO(t,e,n){const s=we.fromObject(n);return kr(t,new dr(hu(),e,s))}function OO(t,e){return kr(t,new hr(hu(),e))}function kO(t,e,n){const s=vu(t,n);if(s){const i=yu(s),r=i.path,o=i.queryId,a=Ge(r,e),l=new hr(du(o),a);return Eu(t,r,l)}else return[]}function lm(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||om(o,e))){const l=IO(o,e,n,s);TO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>Wn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=LO(d);for(let g=0;g<p.length;++g){const m=p[g],b=m.query,y=dm(t,m);t.listenProvider_.startListening(qi(b),fr(t,b),y.hashFn,y.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(qi(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Sa(d));t.listenProvider_.stopListening(qi(d),p)}))}MO(t,c)}return a}function cm(t,e,n,s){const i=vu(t,s);if(i!=null){const r=yu(i),o=r.path,a=r.queryId,l=Ge(o,e),c=new ms(du(a),l,n);return Eu(t,o,c)}else return[]}function PO(t,e,n,s){const i=vu(t,s);if(i){const r=yu(i),o=r.path,a=r.queryId,l=Ge(o,e),c=we.fromObject(n),u=new dr(du(a),l,c);return Eu(t,o,u)}else return[]}function DO(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=Ge(d,i);r=r||Pn(p,g),o=o||Wn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Wn(a),r=r||Pn(a,ue())):(a=new nm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const m=Pn(g,ue());m&&(r=r.updateImmediateChild(p,m))}));const c=om(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Sa(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=$O();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Ia(t.pendingWriteTree_,i);let h=CO(a,e,n,u,r,l);if(!c&&!o&&!s){const d=rm(a,e);h=h.concat(FO(t,e,d))}return h}function mu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ge(o,e),c=Pn(a,l);if(c)return c});return Qg(i,e,r,n,!0)}function xO(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ge(c,n);s=s||Pn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pn(i,ue()):(i=new nm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Hn(s,!0,!1):null,a=Ia(t.pendingWriteTree_,e._path),l=sm(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return mO(l)}function kr(t,e){return um(e,t.syncPointTree_,null,Ia(t.pendingWriteTree_,ue()))}function um(t,e,n,s){if(ie(t.path))return hm(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Xg(s,o);r=r.concat(um(a,l,c,u))}return i&&(r=r.concat(gu(i,t,s,n))),r}}function hm(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Xg(s,o),u=t.operationForChild(o);u&&(r=r.concat(hm(u,a,l,c)))}),i&&(r=r.concat(gu(i,t,s,n))),r}function dm(t,e){const n=e.query,s=fr(t,n);return{hashFn:()=>(gO(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kO(t,n._path,s):OO(t,n._path);{const r=DN(i,n);return lm(t,n,null,r)}}}}function fr(t,e){const n=Sa(e);return t.queryToTagMap.get(n)}function Sa(t){return t._path.toString()+"$"+t._queryIdentifier}function vu(t,e){return t.tagToQueryMap.get(e)}function yu(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Eu(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Ia(t.pendingWriteTree_,e);return gu(s,n,i,null)}function LO(t){return t.fold((e,n,s)=>{if(n&&Wn(n))return[Aa(n)];{let i=[];return n&&(i=im(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SO())(t._repo,t._path):t}function MO(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Sa(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $O(){return RO++}function FO(t,e,n){const s=e._path,i=fr(t,e),r=dm(t,n),o=t.listenProvider_.startListening(qi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)O(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ie(c)&&u&&Wn(u))return[Aa(u).query];{let d=[];return u&&(d=d.concat(im(u).map(p=>p.query))),tt(h,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(qi(u),fr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bu(n)}node(){return this.node_}}class wu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new wu(this.syncTree_,n)}node(){return mu(this.syncTree_,this.path_)}}const UO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HO(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},HO=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},WO=function(t,e,n,s){return Tu(e,new wu(n,t),s)},fm=function(t,e,n){return Tu(t,new bu(e),n)};function Tu(t,e,n){const s=t.getPriority().val(),i=lf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=lf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Me(i))),o.forEachChild(Ie,(a,l)=>{const c=Tu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Iu(t,e){let n=e instanceof ve?e:new ve(e),s=t,i=re(n);for(;i!==null;){const r=ni(s.node.children,i)||{children:{},childCount:0};s=new Cu(i,s,r),n=ye(n),i=re(n)}return s}function Ei(t){return t.node.value}function pm(t,e){t.node.value=e,lc(t)}function _m(t){return t.node.childCount>0}function VO(t){return Ei(t)===void 0&&!_m(t)}function Ra(t,e){tt(t.node.children,(n,s)=>{e(new Cu(n,t,s))})}function gm(t,e,n,s){n&&!s&&e(t),Ra(t,i=>{gm(i,e,!0,s)}),n&&s&&e(t)}function jO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Pr(t){return new ve(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function lc(t){t.parent!==null&&KO(t.parent,t.name,t)}function KO(t,e,n){const s=VO(n),i=pn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=/[\[\].#$\/\u0000-\u001F\u007F]/,qO=/[\[\].#$\u0000-\u001F\u007F]/,gl=10*1024*1024,mm=function(t){return typeof t=="string"&&t.length!==0&&!zO.test(t)},vm=function(t){return typeof t=="string"&&t.length!==0&&!qO.test(t)},GO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vm(t)},ym=function(t,e,n,s){s&&e===void 0||Au(Zc(t,"value"),e,n)},Au=function(t,e,n){const s=n instanceof ve?new d0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(s)+" with contents = "+e.toString());if(fg(e))throw new Error(t+"contains "+e.toString()+" "+Qn(s));if(typeof e=="string"&&e.length>gl/3&&ba(e)>gl)throw new Error(t+"contains a string greater than "+gl+" utf8 bytes "+Qn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!mm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f0(s,o),Au(t,a,s),p0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qn(s)+" in addition to actual children.")}},Em=function(t,e,n,s){if(!(s&&n===void 0)&&!vm(n))throw new Error(Zc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YO=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Em(t,e,n,s)},bm=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},QO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GO(n))throw new Error(Zc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$g(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gt(t,e,n){wm(t,n),JO(t,s=>It(s,e)||It(e,s))}function JO(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ZO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cs&&He("event: "+n.toString()),yi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="repo_interrupt",tk=25;class nk{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fo(),this.transactionQueueTree_=new Cu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sk(t,e,n){if(t.stats_=ru(t.repoInfo_),t.forceRestClient_||$N())t.server_=new $o(t.repoInfo_,(s,i,r,o)=>{cf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new on(t.repoInfo_,e,(s,i,r,o)=>{cf(t,s,i,r,o)},s=>{uf(t,s)},s=>{ik(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=WN(t.repoInfo_,()=>new B0(t.stats_,t.server_)),t.infoData_=new L0,t.infoSyncTree_=new af({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Or(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ru(t,"connected",!1),t.serverSyncTree_=new af({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Gt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Tm(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return UO({timestamp:Tm(t)})}function cf(t,e,n,s,i){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ko(n,c=>Fe(c));o=PO(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=cm(t.serverSyncTree_,r,l,i)}else if(s){const l=ko(n,c=>Fe(c));o=NO(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=Or(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oa(t,r)),Gt(t.eventQueue_,a,o)}function uf(t,e){Ru(t,"connected",e),e===!1&&ak(t)}function ik(t,e){tt(e,(n,s)=>{Ru(t,n,s)})}function Ru(t,e,n){const s=new ve("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=Or(t.infoSyncTree_,s,i);Gt(t.eventQueue_,s,r)}function Cm(t){return t.nextWriteId_++}function rk(t,e,n){const s=xO(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Fe(i).withIndex(e._queryParams.getIndex());DO(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Or(t.serverSyncTree_,e._path,r);else{const a=fr(t.serverSyncTree_,e);o=cm(t.serverSyncTree_,e._path,r,a)}return Gt(t.eventQueue_,e._path,o),lm(t.serverSyncTree_,e,n,null,!0),r},i=>(Na(t,"get for query "+De(e)+" failed: "+i),Promise.reject(new Error(i))))}function ok(t,e,n,s,i){Na(t,"set",{path:e.toString(),value:n,priority:s});const r=Su(t),o=Fe(n,s),a=mu(t.serverSyncTree_,e),l=fm(o,a,r),c=Cm(t),u=am(t.serverSyncTree_,e,l,c,!0);wm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Ze("set at "+e+" failed: "+d);const m=rs(t.serverSyncTree_,c,!g);Gt(t.eventQueue_,e,m),ck(t,i,d,p)});const h=Nm(t,e);Oa(t,h),Gt(t.eventQueue_,h,[])}function ak(t){Na(t,"onDisconnectEvents");const e=Su(t),n=Fo();sc(t.onDisconnect_,ue(),(i,r)=>{const o=WO(i,r,t.serverSyncTree_,e);Kg(n,i,o)});let s=[];sc(n,ue(),(i,r)=>{s=s.concat(Or(t.serverSyncTree_,i,r));const o=Nm(t,i);Oa(t,o)}),t.onDisconnect_=Fo(),Gt(t.eventQueue_,ue(),s)}function lk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ek)}function Na(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function ck(t,e,n,s){e&&yi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Im(t,e,n){return mu(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Nu(t,e=t.transactionQueueTree_){if(e||ka(t,e),Ei(e)){const n=Sm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uk(t,Pr(e),n)}else _m(e)&&Ra(e,n=>{Nu(t,n)})}function uk(t,e,n){const s=n.map(c=>c.currentWriteId),i=Im(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ge(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Na(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(rs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ka(t,Iu(t.transactionQueueTree_,e)),Nu(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)yi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Oa(t,e)}},o)}function Oa(t,e){const n=Am(t,e),s=Pr(n),i=Sm(t,n);return hk(t,i,s),s}function hk(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ge(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tk)u=!0,h="maxretry",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Im(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Au("transaction failed: Data returned ",p,l.path);let g=Fe(p);typeof p=="object"&&p!=null&&pn(p,".priority")||(g=g.updatePriority(d.getPriority()));const b=l.currentWriteId,y=Su(t),C=fm(g,d,y);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=Cm(t),o.splice(o.indexOf(b),1),i=i.concat(am(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(rs(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ka(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)yi(s[a]);Nu(t,t.transactionQueueTree_)}function Am(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&Ei(s)===void 0;)s=Iu(s,n),e=ye(e),n=re(e);return s}function Sm(t,e){const n=[];return Rm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Rm(t,e,n){const s=Ei(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ra(e,i=>{Rm(t,i,n)})}function ka(t,e){const n=Ei(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,pm(e,n.length>0?n:void 0)}Ra(e,s=>{ka(t,s)})}function Nm(t,e){const n=Pr(Am(t,e)),s=Iu(t.transactionQueueTree_,e);return jO(s,i=>{ml(t,i)}),ml(t,s),gm(s,i=>{ml(t,i)}),n}function ml(t,e){const n=Ei(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pm(e,void 0):n.length=r+1,Gt(t.eventQueue_,Pr(e),i);for(let o=0;o<s.length;o++)yi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const hf=function(t,e){const n=pk(t),s=n.namespace;n.domain==="firebase.com"&&cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ig(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ve(n.pathString)}},pk=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=dk(t.substring(u,h)));const d=fk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_k=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=df.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=df.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class mk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ou{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ie(this._path)?null:xg(this._path)}get ref(){return new _n(this._repo,this._path)}get _queryIdentifier(){const e=Yd(this._queryParams),n=su(e);return n==="{}"?"default":n}get _queryObject(){return Yd(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof Ou))return!1;const n=this._repo===e._repo,s=$g(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h0(this._path)}}class _n extends Ou{constructor(e,n){super(e,n,new uu,!1)}get parent(){const e=Mg(this._path);return e===null?null:new _n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=oi(this.ref,e);return new pr(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new pr(i,oi(this.ref,s),Ie)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Om(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?oi(t._root,e):t._root}function oi(t,e){return t=Ue(t),re(t._path)===null?YO("child","path",e,!1):Em("child","path",e,!1),new _n(t._repo,xe(t._path,e))}function yk(t,e){t=Ue(t),bm("push",t._path),ym("push",e,t._path,!0);const n=Tm(t._repo),s=_k(n),i=oi(t,s),r=oi(t,s);let o;return e!=null?o=km(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function km(t,e){t=Ue(t),bm("set",t._path),ym("set",e,t._path,!1);const n=new Ea;return ok(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wL(t){t=Ue(t);const e=new vk(()=>{}),n=new ku(e);return rk(t._repo,t,n).then(s=>new pr(s,new _n(t._repo,t._path),t._queryParams.getIndex()))}class ku{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new gk("value",this,new pr(e.snapshotNode,new _n(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mk(this,e,n):null}matches(e){return e instanceof ku?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}bO(_n);AO(_n);/**
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
 */const Ek="FIREBASE_DATABASE_EMULATOR_HOST",cc={};let bk=!1;function wk(t,e,n,s){t.repoInfo_=new Ig(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Tk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Ek]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=hf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Hs(Hs.OWNER):new UN(t.name,t.options,e);QO("Invalid Firebase Database URL",o),ie(o.path)||cn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ik(a,t,u,new FN(t.name,n));return new Ak(h,t)}function Ck(t,e){const n=cc[e];(!n||n[t.key]!==t)&&cn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lk(t),delete n[t.key]}function Ik(t,e,n,s){let i=cc[e.name];i||(i={},cc[e.name]=i);let r=i[t.toURLString()];return r&&cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nk(t,bk,n,s),i[t.toURLString()]=r,r}class Ak{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _n(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ck(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&cn("Cannot call "+e+" on a deleted database.")}}function Sk(t=nu(),e){const n=wa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Z_("database");s&&Rk(n,...s)}return n}function Rk(t,e,n,s={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&cn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Hs(Hs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:tg(s.mockUserToken,t.app.options.projectId);r=new Hs(o)}wk(i,e,n,r)}/**
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
 */function Nk(t){TN(mi),_s(new Un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Tk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Pd,Dd,t),Wt(Pd,Dd,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Nk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebasestorage.googleapis.com",Dm="storageBucket",Ok=2*60*1e3,kk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends fn{constructor(e,n,s=0){super(vl(e),`Firebase Storage: ${n} (${vl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function vl(t){return"storage/"+t}function Pu(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ae.UNKNOWN,t)}function Pk(t){return new Se(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Dk(t){return new Se(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ae.UNAUTHENTICATED,t)}function Lk(){return new Se(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Mk(t){return new Se(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $k(){return new Se(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Fk(){return new Se(Ae.CANCELED,"User canceled the upload/download.")}function Uk(t){return new Se(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function Bk(t){return new Se(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hk(){return new Se(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Dm+"' property when initializing the app?")}function Wk(){return new Se(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Vk(){return new Se(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jk(t){return new Se(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uc(t){return new Se(Ae.INVALID_ARGUMENT,t)}function xm(){return new Se(Ae.APP_DELETED,"The Firebase app was deleted.")}function Kk(t){return new Se(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(t,e){return new Se(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Di(t){throw new Se(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(s.path==="")return s;throw Bk(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===Pm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",y=new RegExp(`^https?://${m}/${i}/${b}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<w.length;R++){const U=w[R],W=U.regex.exec(e);if(W){const Y=W[U.indices.bucket];let $=W[U.indices.path];$||($=""),s=new ot(Y,$),U.postModify(s);break}}if(s==null)throw Uk(e);return s}}class zk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,l())},b)}function d(){r&&clearTimeout(r)}function p(b,...y){if(c){d();return}if(b){d(),u.call(null,b,...y);return}if(l()||o){d(),u.call(null,b,...y);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,h(w)}let g=!1;function m(b){g||(g=!0,d(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function Gk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){return t!==void 0}function Qk(t){return typeof t=="object"&&!Array.isArray(t)}function Du(t){return typeof t=="string"||t instanceof String}function ff(t){return xu()&&t instanceof Blob}function xu(){return typeof Blob<"u"&&!sR()}function pf(t,e,n,s){if(s<e)throw uc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw uc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Lm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function Xk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Zr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===us.NO_ERROR,l=r.getStatus();if(!a||Xk(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===us.ABORT;s(!1,new Zr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Zr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Yk(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Pu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xm():Fk();o(l)}else{const l=$k();o(l)}};this.canceled_?n(!1,new Zr(!1,null,!0)):this.backoffId_=qk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Zk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sP(t,e,n,s,i,r,o=!0){const a=Lm(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return tP(c,e),Zk(c,n),eP(c,r),nP(c,s),new Jk(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rP(...t){const e=iP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(xu())return new Blob(t);throw new Se(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aP(t){if(typeof atob>"u")throw jk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yl{constructor(e,n){this.data=e,this.contentType=n||null}}function lP(t,e){switch(t){case Ut.RAW:return new yl(Mm(e));case Ut.BASE64:case Ut.BASE64URL:return new yl($m(t,e));case Ut.DATA_URL:return new yl(uP(e),hP(e))}throw Pu()}function Mm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function cP(t){let e;try{e=decodeURIComponent(t)}catch{throw Gi(Ut.DATA_URL,"Malformed data URL.")}return Mm(e)}function $m(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Gi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Gi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aP(e)}catch(i){throw i.message.includes("polyfill")?i:Gi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Fm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gi(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=dP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function uP(t){const e=new Fm(t);return e.base64?$m(Ut.BASE64,e.rest):cP(e.rest)}function hP(t){return new Fm(t).contentType}function dP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){let s=0,i="";ff(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ff(this.data_)){const s=this.data_,i=oP(s,e,n);return i===null?null:new wn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wn(s,!0)}}static getBlob(...e){if(xu()){const n=e.map(s=>s instanceof wn?s.data_:s);return new wn(rP.apply(null,n))}else{const n=e.map(o=>Du(o)?lP(Ut.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new wn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){let e;try{e=JSON.parse(t)}catch{return null}return Qk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Bm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){return e}class ze{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||_P}}let eo=null;function gP(t){return!Du(t)||t.length<2?t:Bm(t)}function Hm(){if(eo)return eo;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(r,o){return gP(o)}const n=new ze("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new ze("size");return i.xform=s,t.push(i),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),eo=t,eo}function mP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new ot(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function vP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return mP(s,t),s}function Wm(t,e,n){const s=Um(e);return s===null?null:vP(t,s,n)}function yP(t,e,n,s){const i=Um(e);if(i===null||!Du(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Lu(d,n,s),g=Lm({alt:"media",token:c});return p+g})[0]}function EP(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Vm{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){if(!t)throw Pu()}function bP(t,e){function n(s,i){const r=Wm(t,i,e);return jm(r!==null),r}return n}function wP(t,e){function n(s,i){const r=Wm(t,i,e);return jm(r!==null),yP(r,i,t.host,t._protocol)}return n}function Km(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Lk():i=xk():n.getStatus()===402?i=Dk(t.bucket):n.getStatus()===403?i=Mk(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function TP(t){const e=Km(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Pk(t.path)),r.serverResponse=i.serverResponse,r}return n}function CP(t,e,n){const s=e.fullServerUrl(),i=Lu(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Vm(i,r,wP(t,n),o);return a.errorHandler=TP(e),a}function IP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=IP(null,e)),s}function SP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let R=0;R<2;R++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=AP(e,s,i),u=EP(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=wn.getBlob(h,s,d);if(p===null)throw Wk();const g={name:c.fullPath},m=Lu(r,t.host,t._protocol),b="POST",y=t.maxUploadRetryTime,C=new Vm(m,b,bP(t,n),y);return C.urlParams=g,C.headers=o,C.body=p.uploadData(),C.errorHandler=Km(e),C}class RP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Di("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Di("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class NP extends RP{initXhr(){this.xhr_.responseType="text"}}function zm(){return new NP}/**
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
 */class ys{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ys(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bm(this._location.path)}get storage(){return this._service}get parent(){const e=fP(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new ys(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Kk(e)}}function OP(t,e,n){t._throwIfRoot("uploadBytes");const s=SP(t.storage,t._location,Hm(),new wn(e,!0),n);return t.storage.makeRequestWithTokens(s,zm).then(i=>({metadata:i,ref:t}))}function kP(t){t._throwIfRoot("getDownloadURL");const e=CP(t.storage,t._location,Hm());return t.storage.makeRequestWithTokens(e,zm).then(n=>{if(n===null)throw Vk();return n})}function PP(t,e){const n=pP(t._location.path,e),s=new ot(t._location.bucket,n);return new ys(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return/^[A-Za-z]+:\/\//.test(t)}function xP(t,e){return new ys(t,e)}function qm(t,e){if(t instanceof Mu){const n=t;if(n._bucket==null)throw Hk();const s=new ys(n,n._bucket);return e!=null?qm(s,e):s}else return e!==void 0?PP(t,e):t}function LP(t,e){if(e&&DP(e)){if(t instanceof Mu)return xP(t,e);throw uc("To use ref(service, url), the first argument must be a Storage instance.")}else return qm(t,e)}function _f(t,e){const n=e==null?void 0:e[Dm];return n==null?null:ot.makeFromBucketSpec(n,t)}function MP(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:tg(i,t.app.options.projectId))}class Mu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Pm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ok,this._maxUploadRetryTime=kk,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=_f(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=_f(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ys(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new zk(xm());{const o=sP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const gf="@firebase/storage",mf="0.11.2";/**
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
 */const Gm="storage";function $P(t,e,n){return t=Ue(t),OP(t,e,n)}function FP(t){return t=Ue(t),kP(t)}function vf(t,e){return t=Ue(t),LP(t,e)}function UP(t=nu(),e){t=Ue(t);const s=wa(t,Gm).getImmediate({identifier:e}),i=Z_("storage");return i&&BP(s,...i),s}function BP(t,e,n,s={}){MP(t,e,n,s)}function HP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Mu(n,s,i,e,mi)}function WP(){_s(new Un(Gm,HP,"PUBLIC").setMultipleInstances(!0)),Wt(gf,mf,""),Wt(gf,mf,"esm2017")}WP();const VP={class:"container bg-light pt-5"},jP={class:"col-10 mb-3"},KP=ee("label",{for:"inputTheme",class:"form-label"},"Title",-1),zP={class:"col-10 mb-3"},qP=ee("label",{for:"inputRoute",class:"form-label"},"Route",-1),GP=aa('<div class="col-10 mb-3"><p>Tags</p><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM"><label class="form-check-label" for="tagCheckbox1">PM</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend"><label class="form-check-label" for="tagCheckbox2">Frontend</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX"><label class="form-check-label" for="tagCheckbox3">UIUX</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App"><label class="form-check-label" for="tagCheckbox4">App</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web"><label class="form-check-label" for="tagCheckbox5">Web</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial"><label class="form-check-label" for="tagCheckbox6">Commercial</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended"><label class="form-check-label" for="tagCheckbox0">Recommended</label></div></div>',1),YP={class:"col-10 mb-3"},QP=ee("label",{for:"inputComment",class:"form-label"},"Comment",-1),XP={class:"col-10 mb-3"},JP=ee("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),ZP={class:"col-10 mb-3"},eD=ee("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),tD={class:"col-10 mb-3"},nD=ee("label",{for:"file-input",class:"form-label"},"選擇封面(720*420)",-1),sD={key:0,class:"mt-3"},iD=["src"],rD=["disabled"],oD={class:"col-10 mb-3"},aD=["disabled"],lD={__name:"WorkWallBS",setup(t){const e=vf(_L,"workCovers"),n=yk(oi(gL,"works")).key;let s=[],i=Mt(""),r=Mt(""),o=Mt(""),a=Mt(""),l=Mt("2023-01"),c=Mt("");const u=Mt(null),h=Mt(null),d=Mt(null);window.onload=function(){const y=document.getElementsByClassName("tag-Checkbox");for(let C=0;C<y.length;C++)y[C].addEventListener("click",()=>{p(y)})};function p(y){let C=[];for(let w=0;w<y.length;w++)y[w].checked&&C.push(y[w].value);s=C}function g(y){u.value=y.target.files[0];const C=new FileReader;C.readAsDataURL(u.value),C.onload=()=>{h.value=C.result}}async function m(){const y=vf(e,u.value.name);await $P(y,u.value),r=await FP(y),u.value=null,h.value=null,d.value="",alert("文件上傳成功，URL: "+r)}async function b(){mL(n,s,"/Work/"+i.value,r,o.value,a.value,l.value,c.value)}return(y,C)=>(zt(),xn("section",VP,[ee("form",{onSubmit:b,class:"row justify-content-center"},[ee("div",jP,[KP,Ti(ee("input",{type:"text","onUpdate:modelValue":C[0]||(C[0]=w=>Re(o)?o.value=w:o=w),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[Ci,ht(o)]])]),ee("div",zP,[qP,Ti(ee("input",{type:"text","onUpdate:modelValue":C[1]||(C[1]=w=>Re(i)?i.value=w:i=w),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[Ci,ht(i)]])]),GP,ee("div",YP,[QP,Ti(ee("input",{type:"text","onUpdate:modelValue":C[2]||(C[2]=w=>Re(a)?a.value=w:a=w),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[Ci,ht(a)]])]),ee("div",XP,[JP,Ti(ee("input",{type:"month","onUpdate:modelValue":C[3]||(C[3]=w=>Re(l)?l.value=w:l=w),class:"form-control",id:"inputDonedate"},null,512),[[Ci,ht(l)]])]),ee("div",ZP,[eD,Ti(ee("input",{type:"text","onUpdate:modelValue":C[4]||(C[4]=w=>Re(c)?c.value=w:c=w),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[Ci,ht(c)]])]),ee("div",tD,[nD,ee("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:d,onChange:g,accept:"image/*"},null,544),h.value?(zt(),xn("div",sD,[ee("img",{src:h.value,class:"img-fluid",alt:"Selected Image"},null,8,iD)])):mE("",!0),ee("button",{type:"button",class:"btn btn-primary mt-3",onClick:m,disabled:!u.value},"上傳圖片",8,rD)]),ee("div",oD,[ee("button",{type:"submit",disabled:!ht(o),class:"btn btn-primary mb-3"},"確認送出",8,aD)])],32)]))}},cD={__name:"WorkBS",setup(t){return(e,n)=>(zt(),Pp(lD))}},uD=[{path:"/MyPortfolio",name:"Home",component:qS},{path:"/MyPortfolio/About",name:"About",component:()=>Qr(()=>import("./About-d9e05c52.js"),["assets/About-d9e05c52.js","assets/About-e43a0279.css"])},{path:"/MyPortfolio/Work",name:"Work",component:()=>Qr(()=>import("./Work-7a0460f6.js"),["assets/Work-7a0460f6.js","assets/Work-79bce94e.css"])},{path:"/:domain(.*)*",name:"NotFound",component:()=>Qr(()=>import("./404-893e0a1c.js"),[])},{path:"/MyPortfolio/Login",name:"Login",component:()=>Qr(()=>import("./Login-7eba08b9.js"),[])},{path:"/MyPortfolio/backstage/workwall",name:"workwall",component:cD}],hD=SS({history:VA(),routes:uD});var dD="firebase",fD="9.17.2";/**
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
 */Wt(dD,fD,"app");function $u(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ym(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pD=Ym,Qm=new Ar("auth","Firebase",Ym());/**
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
 */const yf=new eu("@firebase/auth");function po(t,...e){yf.logLevel<=me.ERROR&&yf.error(`Auth (${mi}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw Fu(t,...e)}function Vt(t,...e){return Fu(t,...e)}function _D(t,e,n){const s=Object.assign(Object.assign({},pD()),{[e]:n});return new Ar("auth","Firebase",s).create(e,{appName:t.name})}function Fu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qm.create(t,...e)}function z(t,e,...n){if(!t)throw Fu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function un(t,e){t||Zt(e)}/**
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
 */const Ef=new Map;function en(t){un(t instanceof Function,"Expected a class definition");let e=Ef.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ef.set(t,e),e)}/**
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
 */function gD(t,e){const n=wa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Po(r,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function mD(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vD(){return bf()==="http:"||bf()==="https:"}function bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vD()||iR()||"connection"in navigator)?navigator.onLine:!0}function ED(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||ng()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uu(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wD=new Dr(3e4,6e4);function Pa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,s,i={}){return Jm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xm.fetch()(Zm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Jm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bD),e);try{const i=new TD(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw to(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _D(t,u,c);kt(t,u)}}catch(i){if(i instanceof fn)throw i;kt(t,"internal-error",{message:String(i)})}}async function Da(t,e,n,s,i={}){const r=await xr(t,e,n,s,i);return"mfaPendingCredential"in r&&kt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Uu(t.config,i):`${t.config.apiScheme}://${i}`}class TD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),wD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Vt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function CD(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function ID(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AD(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),i=Bu(s);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yi(El(i.auth_time)),issuedAtTime:Yi(El(i.iat)),expirationTime:Yi(El(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(t){return Number(t)*1e3}function Bu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oo(n);return i?JSON.parse(i):(po("Failed to decode base64 JWT payload"),null)}catch(i){return po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function SD(t){const e=Bu(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fn&&RD(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function RD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ND{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ev{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _r(t,ID(n,{idToken:s}));z(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?PD(r.providerUserInfo):[],a=kD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ev(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function OD(t){const e=Ue(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kD(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function PD(t){return t.map(e=>{var{providerId:n}=e,s=$u(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function DD(t,e){const n=await Jm(t,{},async()=>{const s=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Zm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):SD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await DD(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new gr;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function yn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=$u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ND(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ev(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _r(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AD(this,e)}reload(){return OD(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _r(this,CD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:R,isAnonymous:U,providerData:W,stsTokenManager:Y}=n;z(w&&Y,e,"internal-error");const $=gr.fromJSON(this.name,Y);z(typeof w=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),z(typeof R=="boolean",e,"internal-error"),z(typeof U=="boolean",e,"internal-error"),yn(p,e.name),yn(g,e.name),yn(m,e.name),yn(b,e.name),yn(y,e.name),yn(C,e.name);const G=new hs({uid:w,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:$,createdAt:y,lastLoginAt:C});return W&&Array.isArray(W)&&(G.providerData=W.map(j=>Object.assign({},j))),b&&(G._redirectEventId=b),G}static async _fromIdTokenResponse(e,n,s=!1){const i=new gr;i.updateFromServerResponse(n);const r=new hs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await zo(r),r}}/**
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
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tv.type="NONE";const wf=tv;/**
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
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,r),this.fullPersistenceKey=_o("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Vs(en(wf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||en(wf);const o=_o(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=hs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vs(r,e,s))}}/**
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
 */function Tf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ov(e))return"Blackberry";if(av(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function nv(t=je()){return/firefox\//i.test(t)}function Hu(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=je()){return/crios\//i.test(t)}function iv(t=je()){return/iemobile/i.test(t)}function rv(t=je()){return/android/i.test(t)}function ov(t=je()){return/blackberry/i.test(t)}function av(t=je()){return/webos/i.test(t)}function xa(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xD(t=je()){var e;return xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LD(){return rR()&&document.documentMode===10}function lv(t=je()){return xa(t)||rv(t)||av(t)||ov(t)||/windows phone/i.test(t)||iv(t)}function MD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cv(t,e=[]){let n;switch(t){case"Browser":n=Tf(je());break;case"Worker":n=`${Tf(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${s}`}/**
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
 */class $D{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class FD{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cf(this),this.idTokenSubscription=new Cf(this),this.beforeStateQueue=new $D(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ED()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function La(t){return Ue(t)}class Cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=pR(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function UD(t,e,n){const s=La(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=uv(e),{host:o,port:a}=BD(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HD()}function uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BD(t){const e=uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:If(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:If(o)}}}function If(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function WD(t,e){return xr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function VD(t,e){return Da(t,"POST","/v1/accounts:signInWithPassword",Pa(t,e))}/**
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
 */async function jD(t,e){return Da(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}async function KD(t,e){return Da(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}/**
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
 */class mr extends Wu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return VD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jD(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return WD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KD(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function js(t,e){return Da(t,"POST","/v1/accounts:signInWithIdp",Pa(t,e))}/**
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
 */const zD="http://localhost";class Es extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=$u(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Es(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:zD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
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
 */function qD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=Mi($i(t)).link,n=e?Mi($i(e)).deep_link_id:null,s=Mi($i(t)).deep_link_id;return(s?Mi($i(s)).link:null)||s||n||e||t}class Vu{constructor(e){var n,s,i,r,o,a;const l=Mi($i(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=qD((i=l.mode)!==null&&i!==void 0?i:null);z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GD(e);try{return new Vu(n)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vu.parseLink(n);return z(s,"argument-error"),mr._fromEmailAndCode(e,s.code,s.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends hv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tn extends Lr{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class In extends Lr{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class An extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return An.credential(n,s)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await hs._fromIdTokenResponse(e,s,i),o=Af(s);return new ai({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Af(s);return new ai({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qo extends fn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new qo(e,n,s,i)}}function dv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,r,e,s):r})}async function YD(t,e,n=!1){const s=await _r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",s)}/**
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
 */async function QD(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await _r(t,dv(s,i,e,t),n);z(r.idToken,s,"internal-error");const o=Bu(r.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),ai._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&kt(s,"user-mismatch"),r}}/**
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
 */async function fv(t,e,n=!1){const s="signIn",i=await dv(t,s,e),r=await ai._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function XD(t,e){return fv(La(t),e)}function TL(t,e,n){return XD(Ue(t),bi.credential(e,n))}function JD(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function ZD(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const Go="__sak";/**
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
 */class pv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ex(){const t=je();return Hu(t)||xa(t)}const tx=1e3,nx=10;class _v extends pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ex()&&MD(),this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);LD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const sx=_v;/**
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
 */class gv extends pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gv.type="SESSION";const mv=gv;/**
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
 */function ix(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await ix(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function ju(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ju("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function ox(t){jt().location.href=t}/**
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
 */function vv(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function ax(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cx(){return vv()?self:null}/**
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
 */const yv="firebaseLocalStorageDb",ux=1,Yo="firebaseLocalStorage",Ev="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function hx(){const t=indexedDB.deleteDatabase(yv);return new Mr(t).toPromise()}function dc(){const t=indexedDB.open(yv,ux);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Yo,{keyPath:Ev})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Yo)?e(s):(s.close(),await hx(),e(await dc()))})})}async function Sf(t,e,n){const s=$a(t,!0).put({[Ev]:e,value:n});return new Mr(s).toPromise()}async function dx(t,e){const n=$a(t,!1).get(e),s=await new Mr(n).toPromise();return s===void 0?null:s.value}function Rf(t,e){const n=$a(t,!0).delete(e);return new Mr(n).toPromise()}const fx=800,px=3;class bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>px)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(cx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ax(),!this.activeServiceWorker)return;this.sender=new rx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await Sf(e,Go,"1"),await Rf(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=$a(i,!1).getAll();return new Mr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bv.type="LOCAL";const _x=bv;/**
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
 */function gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mx(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Vt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",gx().appendChild(s)})}function vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Dr(3e4,6e4);/**
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
 */function yx(t,e){return e?en(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ku extends Wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ex(t){return fv(t.auth,new Ku(t),t.bypassAuthState)}function bx(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),QD(n,new Ku(t),t.bypassAuthState)}async function wx(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),YD(n,new Ku(t),t.bypassAuthState)}/**
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
 */class wv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ex;case"linkViaPopup":case"linkViaRedirect":return wx;case"reauthViaPopup":case"reauthViaRedirect":return bx;default:kt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tx=new Dr(2e3,1e4);class Ls extends wv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Tx.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const Cx="pendingRedirect",go=new Map;class Ix extends wv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const s=await Ax(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ax(t,e){const n=Nx(e),s=Rx(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Sx(t,e){go.set(t._key(),e)}function Rx(t){return en(t._redirectPersistence)}function Nx(t){return _o(Cx,t.config.apiKey,t.name)}async function Ox(t,e,n=!1){const s=La(t),i=yx(s,e),o=await new Ix(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const kx=10*60*1e3;class Px{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(t);default:return!1}}/**
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
 */async function xx(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
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
 */const Lx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mx=/^https?/;async function $x(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xx(t);for(const n of e)try{if(Fx(n))return}catch{}kt(t,"unauthorized-domain")}function Fx(t){const e=hc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Mx.test(n))return!1;if(Lx.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Ux=new Dr(3e4,6e4);function Of(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bx(t){return new Promise((e,n)=>{var s,i,r;function o(){Of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Of(),n(Vt(t,"network-request-failed"))},timeout:Ux.get()})}if(!((i=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=jt().gapi)===null||r===void 0)&&r.load)o();else{const a=vx("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},mx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mo=null,e})}let mo=null;function Hx(t){return mo=mo||Bx(t),mo}/**
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
 */const Wx=new Dr(5e3,15e3),Vx="__/auth/iframe",jx="emulator/auth/iframe",Kx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qx(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uu(e,jx):`https://${t.config.authDomain}/${Vx}`,s={apiKey:e.apiKey,appName:t.name,v:mi},i=zx.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${gi(s).slice(1)}`}async function Gx(t){const e=await Hx(t),n=jt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:qx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kx,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=jt().setTimeout(()=>{r(o)},Wx.get());function l(){jt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Yx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qx=500,Xx=600,Jx="_blank",Zx="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eL(t,e,n,s=Qx,i=Xx){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yx),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=sv(c)?Jx:n),nv(c)&&(e=e||Zx,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(xD(c)&&a!=="_self")return tL(e||"",a),new kf(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new kf(h)}function tL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nL="__/auth/handler",sL="emulator/auth/handler";function Pf(t,e,n,s,i,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:mi,eventId:i};if(e instanceof hv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ql(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Lr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iL(t)}?${gi(a).slice(1)}`}function iL({config:t}){return t.emulator?Uu(t,sL):`https://${t.authDomain}/${nL}`}/**
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
 */const bl="webStorageSupport";class rL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=Ox,this._overrideRedirectResult=Sx}async _openPopup(e,n,s,i){var r;un((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Pf(e,n,s,hc(),i);return eL(e,o,ju())}async _openRedirect(e,n,s,i){return await this._originValidation(e),ox(Pf(e,n,s,hc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(un(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Gx(e),s=new Px(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[bl];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$x(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||Hu()||xa()}}const oL=rL;var Df="@firebase/auth",xf="0.21.4";/**
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
 */class aL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cL(t){_s(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{z(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cv(t)},u=new FD(a,l,c);return mD(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Un("auth-internal",e=>{const n=La(e.getProvider("auth").getImmediate());return(s=>new aL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Df,xf,lL(t)),Wt(Df,xf,"esm2017")}/**
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
 */const uL=5*60,hL=eg("authIdTokenMaxAge")||uL;let Lf=null;const dL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hL)return;const i=n==null?void 0:n.token;Lf!==i&&(Lf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fL(t=nu()){const e=wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gD(t,{popupRedirectResolver:oL,persistence:[_x,sx,mv]}),s=eg("authTokenSyncURL");if(s){const r=dL(s);ZD(n,r,()=>r(n.currentUser)),JD(n,o=>r(o))}const i=J_("auth");return i&&UD(n,`http://${i}`),n}cL("Browser");const Cv=ZE(Tb);Cv.use(hD);Cv.mount("#app");const pL={apiKey:"AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",authDomain:"frankportfolio-e3ae3.firebaseapp.com",databaseURL:"https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"frankportfolio-e3ae3",storageBucket:"frankportfolio-e3ae3.appspot.com",messagingSenderId:"483448448603",appId:"1:483448448603:web:d914b32657440240fc017e"},zu=ag(pL),Iv=Sk(zu),_L=UP(zu),gL=Om(Iv,"works/"),CL=fL(zu);function mL(t,e,n,s,i,r,o,a){km(Om(Iv,"works/"+i+t),{uid:t,tag:e,route:n,image:s,title:i,comment:r,donedate:o,viewcounts:a})}export{it as F,gL as W,ca as _,ee as a,Ce as b,xn as c,aa as d,Ry as e,co as f,Mt as g,Ti as h,wL as i,yL as j,bL as k,mE as l,vp as m,Ci as n,zt as o,Sy as p,CL as q,wp as r,TL as s,vL as t,hD as u,EL as v,Li as w};
