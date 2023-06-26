(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function hc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function dc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Le(s)?MA(s):dc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Le(t))return t;if(ye(t))return t}}const PA=/;(?![^(]*\))/g,xA=/:([^]+)/,LA=/\/\*.*?\*\//gs;function MA(t){const e={};return t.replace(LA,"").split(PA).forEach(n=>{if(n){const s=n.split(xA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fc(t){let e="";if(Le(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=fc(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $A="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",BA=hc($A);function Hf(t){return!!t||t===""}function FA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=mo(t[s],e[s]);return n}function mo(t,e){if(t===e)return!0;let n=th(t),s=th(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ji(t),s=Ji(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?FA(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!mo(t[o],e[o]))return!1}}return String(t)===String(e)}const UA=t=>Le(t)?t:t==null?"":z(t)||ye(t)&&(t.toString===Gf||!J(t.toString))?JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>e&&e.__v_isRef?Wf(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Vf(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!z(e)&&!Qf(e)?String(e):e,Ce={},$s=[],Nt=()=>{},HA=()=>!1,WA=/^on[^a-z]/,qo=t=>WA.test(t),pc=t=>t.startsWith("onUpdate:"),Ve=Object.assign,_c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},VA=Object.prototype.hasOwnProperty,ce=(t,e)=>VA.call(t,e),z=Array.isArray,Bs=t=>Er(t)==="[object Map]",Vf=t=>Er(t)==="[object Set]",th=t=>Er(t)==="[object Date]",J=t=>typeof t=="function",Le=t=>typeof t=="string",Ji=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",jf=t=>ye(t)&&J(t.then)&&J(t.catch),Gf=Object.prototype.toString,Er=t=>Gf.call(t),jA=t=>Er(t).slice(8,-1),Qf=t=>Er(t)==="[object Object]",gc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,to=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GA=/-(\w)/g,Kt=Yo(t=>t.replace(GA,(e,n)=>n?n.toUpperCase():"")),QA=/\B([A-Z])/g,ui=Yo(t=>t.replace(QA,"-$1").toLowerCase()),Xo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=Yo(t=>t?`on${Xo(t)}`:""),Zi=(t,e)=>!Object.is(t,e),no=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},El=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nh;const KA=()=>nh||(nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class zA{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qA(t,e=Et){e&&e.active&&e.effects.push(t)}function YA(){return Et}const mc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kf=t=>(t.w&xn)>0,zf=t=>(t.n&xn)>0,XA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},JA=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Kf(i)&&!zf(i)?i.delete(t):e[n++]=i,i.w&=~xn,i.n&=~xn}e.length=n}},yl=new WeakMap;let $i=0,xn=1;const bl=30;let wt;const os=Symbol(""),wl=Symbol("");class Ac{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qA(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Nn=!0,xn=1<<++$i,$i<=bl?XA(this):sh(this),this.fn()}finally{$i<=bl&&JA(this),xn=1<<--$i,wt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(sh(this),this.onStop&&this.onStop(),this.active=!1)}}function sh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const qf=[];function hi(){qf.push(Nn),Nn=!1}function di(){const t=qf.pop();Nn=t===void 0?!0:t}function et(t,e,n){if(Nn&&wt){let s=yl.get(t);s||yl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=mc()),Yf(i)}}function Yf(t,e){let n=!1;$i<=bl?zf(t)||(t.n|=xn,n=!Kf(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function an(t,e,n,s,i,r){const o=yl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?gc(n)&&a.push(o.get("length")):(a.push(o.get(os)),Bs(t)&&a.push(o.get(wl)));break;case"delete":z(t)||(a.push(o.get(os)),Bs(t)&&a.push(o.get(wl)));break;case"set":Bs(t)&&a.push(o.get(os));break}if(a.length===1)a[0]&&Cl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Cl(mc(l))}}function Cl(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&ih(s);for(const s of n)s.computed||ih(s)}function ih(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ZA=hc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ji)),ev=vc(),tv=vc(!1,!0),nv=vc(!0),rh=sv();function sv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hi();const s=he(this)[e].apply(this,n);return di(),s}}),t}function iv(t){const e=he(this);return et(e,"has",t),e.hasOwnProperty(t)}function vc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ev:np:e?tp:ep).get(s))return s;const o=z(s);if(!t){if(o&&ce(rh,i))return Reflect.get(rh,i,r);if(i==="hasOwnProperty")return iv}const a=Reflect.get(s,i,r);return(Ji(i)?Xf.has(i):ZA(i))||(t||et(s,"get",i),e)?a:Ne(a)?o&&gc(i)?a:a.value:ye(a)?t?sp(a):yr(a):a}}const rv=Jf(),ov=Jf(!0);function Jf(t=!1){return function(n,s,i,r){let o=n[s];if(Qs(o)&&Ne(o)&&!Ne(i))return!1;if(!t&&(!vo(i)&&!Qs(i)&&(o=he(o),i=he(i)),!z(n)&&Ne(o)&&!Ne(i)))return o.value=i,!0;const a=z(n)&&gc(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===he(r)&&(a?Zi(i,o)&&an(n,"set",s,i):an(n,"add",s,i)),l}}function av(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&an(t,"delete",e,void 0),s}function lv(t,e){const n=Reflect.has(t,e);return(!Ji(e)||!Xf.has(e))&&et(t,"has",e),n}function cv(t){return et(t,"iterate",z(t)?"length":os),Reflect.ownKeys(t)}const Zf={get:ev,set:rv,deleteProperty:av,has:lv,ownKeys:cv},uv={get:nv,set(t,e){return!0},deleteProperty(t,e){return!0}},hv=Ve({},Zf,{get:tv,set:ov}),Ec=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function $r(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=Jo(i),a=s?Ec:n?wc:er;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Br(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fr(t,e=!1){return t=t.__v_raw,!e&&et(he(t),"iterate",os),Reflect.get(t,"size",t)}function oh(t){t=he(t);const e=he(this);return Jo(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function ah(t,e){e=he(e);const n=he(this),{has:s,get:i}=Jo(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Zi(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function lh(t){const e=he(this),{has:n,get:s}=Jo(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&an(e,"delete",t,void 0),r}function ch(){const t=he(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Ur(t,e){return function(s,i){const r=this,o=r.__v_raw,a=he(o),l=e?Ec:t?wc:er;return!t&&et(a,"iterate",os),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Hr(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=Bs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ec:e?wc:er;return!e&&et(r,"iterate",l?wl:os),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:this}}function dv(){const t={get(r){return $r(this,r)},get size(){return Fr(this)},has:Br,add:oh,set:ah,delete:lh,clear:ch,forEach:Ur(!1,!1)},e={get(r){return $r(this,r,!1,!0)},get size(){return Fr(this)},has:Br,add:oh,set:ah,delete:lh,clear:ch,forEach:Ur(!1,!0)},n={get(r){return $r(this,r,!0)},get size(){return Fr(this,!0)},has(r){return Br.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Ur(!0,!1)},s={get(r){return $r(this,r,!0,!0)},get size(){return Fr(this,!0)},has(r){return Br.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hr(r,!1,!1),n[r]=Hr(r,!0,!1),e[r]=Hr(r,!1,!0),s[r]=Hr(r,!0,!0)}),[t,n,e,s]}const[fv,pv,_v,gv]=dv();function yc(t,e){const n=e?t?gv:_v:t?pv:fv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const mv={get:yc(!1,!1)},Av={get:yc(!1,!0)},vv={get:yc(!0,!1)},ep=new WeakMap,tp=new WeakMap,np=new WeakMap,Ev=new WeakMap;function yv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bv(t){return t.__v_skip||!Object.isExtensible(t)?0:yv(jA(t))}function yr(t){return Qs(t)?t:bc(t,!1,Zf,mv,ep)}function wv(t){return bc(t,!1,hv,Av,tp)}function sp(t){return bc(t,!0,uv,vv,np)}function bc(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=bv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Fs(t){return Qs(t)?Fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function vo(t){return!!(t&&t.__v_isShallow)}function ip(t){return Fs(t)||Qs(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function rp(t){return Ao(t,"__v_skip",!0),t}const er=t=>ye(t)?yr(t):t,wc=t=>ye(t)?sp(t):t;function op(t){Nn&&wt&&(t=he(t),Yf(t.dep||(t.dep=mc())))}function ap(t,e){t=he(t);const n=t.dep;n&&Cl(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return lp(t,!1)}function Cv(t){return lp(t,!0)}function lp(t,e){return Ne(t)?t:new Tv(t,e)}class Tv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:er(e)}get value(){return op(this),this._value}set value(e){const n=this.__v_isShallow||vo(e)||Qs(e);e=n?e:he(e),Zi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:er(e),ap(this))}}function ut(t){return Ne(t)?t.value:t}const Iv={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cp(t){return Fs(t)?t:new Proxy(t,Iv)}var up;class Sv{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[up]=!1,this._dirty=!0,this.effect=new Ac(e,()=>{this._dirty||(this._dirty=!0,ap(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return op(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}up="__v_isReadonly";function Nv(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=Nt):(s=t.get,i=t.set),new Sv(s,i,r||!i,n)}function Rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Zo(r,e,n)}return i}function dt(t,e,n,s){if(J(t)){const r=Rn(t,e,n,s);return r&&jf(r)&&r.catch(o=>{Zo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}function Zo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}Rv(t,n,i,s)}function Rv(t,e,n,s=!0){console.error(t)}let tr=!1,Tl=!1;const We=[];let Bt=0;const Us=[];let Xt=null,Xn=0;const hp=Promise.resolve();let Cc=null;function dp(t){const e=Cc||hp;return t?e.then(this?t.bind(this):t):e}function Ov(t){let e=Bt+1,n=We.length;for(;e<n;){const s=e+n>>>1;nr(We[s])<t?e=s+1:n=s}return e}function Tc(t){(!We.length||!We.includes(t,tr&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?We.push(t):We.splice(Ov(t.id),0,t),fp())}function fp(){!tr&&!Tl&&(Tl=!0,Cc=hp.then(_p))}function kv(t){const e=We.indexOf(t);e>Bt&&We.splice(e,1)}function Dv(t){z(t)?Us.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?Xn+1:Xn))&&Us.push(t),fp()}function uh(t,e=tr?Bt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function pp(t){if(Us.length){const e=[...new Set(Us)];if(Us.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>nr(n)-nr(s)),Xn=0;Xn<Xt.length;Xn++)Xt[Xn]();Xt=null,Xn=0}}const nr=t=>t.id==null?1/0:t.id,Pv=(t,e)=>{const n=nr(t)-nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _p(t){Tl=!1,tr=!0,We.sort(Pv);const e=Nt;try{for(Bt=0;Bt<We.length;Bt++){const n=We[Bt];n&&n.active!==!1&&Rn(n,null,14)}}finally{Bt=0,We.length=0,pp(),tr=!1,Cc=null,(We.length||Us.length)&&_p()}}function xv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ce;d&&(i=n.map(p=>Le(p)?p.trim():p)),h&&(i=n.map(El))}let a,l=s[a=Ma(e)]||s[a=Ma(Kt(e))];!l&&r&&(l=s[a=Ma(ui(e))]),l&&dt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(c,t,6,i)}}function gp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const l=c=>{const u=gp(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):Ve(o,r),ye(t)&&s.set(t,o),o)}function ea(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ui(e))||ce(t,e))}let it=null,ta=null;function Eo(t){const e=it;return it=t,ta=t&&t.type.__scopeId||null,e}function mp(t){ta=t}function Ap(){ta=null}function Ft(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Eh(-1);const r=Eo(e);let o;try{o=t(...i)}finally{Eo(r),s._d&&Eh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $a(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const C=Eo(t);try{if(n.shapeFlag&4){const N=i||s;y=$t(u.call(N,N,h,r,p,d,g)),v=l}else{const N=e;y=$t(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),v=e.props?l:Lv(l)}}catch(N){Hi.length=0,Zo(N,t,1),y=Ee(Rt)}let b=y;if(v&&m!==!1){const N=Object.keys(v),{shapeFlag:U}=b;N.length&&U&7&&(o&&N.some(pc)&&(v=Mv(v,o)),b=Ln(b,v))}return n.dirs&&(b=Ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,Eo(C),y}const Lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const s in t)(!pc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $v(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ea(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hh(s,o,c):!0:!!o;return!1}function hh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ea(n,r))return!0}return!1}function Bv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fv=t=>t.__isSuspense;function Uv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Dv(t)}function so(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Re||it;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}function Hv(t,e){return Ic(t,null,e)}const Wr={};function io(t,e,n){return Ic(t,e,n)}function Ic(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){const a=YA()===(Re==null?void 0:Re.scope)?Re:null;let l,c=!1,u=!1;if(Ne(t)?(l=()=>t.value,c=vo(t)):Fs(t)?(l=()=>t,s=!0):z(t)?(u=!0,c=t.some(b=>Fs(b)||vo(b)),l=()=>t.map(b=>{if(Ne(b))return b.value;if(Fs(b))return ts(b);if(J(b))return Rn(b,a,2)})):J(t)?e?l=()=>Rn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),dt(t,a,3,[d])}:l=Nt,e&&s){const b=l;l=()=>ts(b())}let h,d=b=>{h=v.onStop=()=>{Rn(b,a,4)}},p;if(ir)if(d=Nt,e?n&&dt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const b=LE();p=b.__watcherHandles||(b.__watcherHandles=[])}else return Nt;let g=u?new Array(t.length).fill(Wr):Wr;const m=()=>{if(v.active)if(e){const b=v.run();(s||c||(u?b.some((N,U)=>Zi(N,g[U])):Zi(b,g)))&&(h&&h(),dt(e,a,3,[b,g===Wr?void 0:u&&g[0]===Wr?[]:g,d]),g=b)}else v.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Xe(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Tc(m));const v=new Ac(l,y);e?n?m():g=v.run():i==="post"?Xe(v.run.bind(v),a&&a.suspense):v.run();const C=()=>{v.stop(),a&&a.scope&&_c(a.scope.effects,v)};return p&&p.push(C),C}function Wv(t,e,n){const s=this.proxy,i=Le(t)?t.includes(".")?vp(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Re;zs(this);const a=Ic(i,r.bind(s),n);return o?zs(o):as(),a}function vp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ts(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))ts(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Vf(t)||Bs(t))t.forEach(n=>{ts(n,e)});else if(Qf(t))for(const n in t)ts(t[n],e);return t}function Vv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ip(()=>{t.isMounted=!0}),Sp(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],jv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(t,{slots:e}){const n=SE(),s=Vv();let i;return()=>{const r=e.default&&yp(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Rt){o=m;break}}const a=he(t),{mode:l}=a;if(s.isLeaving)return Ba(o);const c=dh(o);if(!c)return Ba(o);const u=Il(c,a,s,n);Sl(c,u);const h=n.subTree,d=h&&dh(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(d&&d.type!==Rt&&(!Jn(c,d)||p)){const m=Il(d,a,s,n);if(Sl(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ba(o);l==="in-out"&&c.type!==Rt&&(m.delayLeave=(y,v,C)=>{const b=Ep(s,d);b[String(d.key)]=d,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},Gv=jv;function Ep(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Il(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:C}=e,b=String(t.key),N=Ep(n,t),U=(B,q)=>{B&&dt(B,s,9,q)},V=(B,q)=>{const G=q[1];U(B,q),z(B)?B.every(ae=>ae.length<=1)&&G():B.length<=1&&G()},Y={mode:r,persisted:o,beforeEnter(B){let q=a;if(!n.isMounted)if(i)q=m||a;else return;B._leaveCb&&B._leaveCb(!0);const G=N[b];G&&Jn(t,G)&&G.el._leaveCb&&G.el._leaveCb(),U(q,[B])},enter(B){let q=l,G=c,ae=u;if(!n.isMounted)if(i)q=y||l,G=v||c,ae=C||u;else return;let _e=!1;const ge=B._enterCb=Ue=>{_e||(_e=!0,Ue?U(ae,[B]):U(G,[B]),Y.delayedLeave&&Y.delayedLeave(),B._enterCb=void 0)};q?V(q,[B,ge]):ge()},leave(B,q){const G=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return q();U(h,[B]);let ae=!1;const _e=B._leaveCb=ge=>{ae||(ae=!0,q(),ge?U(g,[B]):U(p,[B]),B._leaveCb=void 0,N[G]===t&&delete N[G])};N[G]=t,d?V(d,[B,_e]):_e()},clone(B){return Il(B,e,n,s)}};return Y}function Ba(t){if(na(t))return t=Ln(t),t.children=null,t}function dh(t){return na(t)?t.children?t.children[0]:void 0:t}function Sl(t,e){t.shapeFlag&6&&t.component?Sl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===bt?(o.patchFlag&128&&i++,s=s.concat(yp(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function bp(t){return J(t)?{setup:t,name:t.name}:t}const ro=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function wp(t,e){Tp(t,"a",e)}function Cp(t,e){Tp(t,"da",e)}function Tp(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(sa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)na(i.parent.vnode)&&Qv(s,e,n,i),i=i.parent}}function Qv(t,e,n,s){const i=sa(e,t,s,!0);Sc(()=>{_c(s[e],i)},n)}function sa(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hi(),zs(n);const a=dt(e,n,t,o);return as(),di(),a});return s?i.unshift(r):i.push(r),r}}const dn=t=>(e,n=Re)=>(!ir||t==="sp")&&sa(t,(...s)=>e(...s),n),Kv=dn("bm"),Ip=dn("m"),zv=dn("bu"),qv=dn("u"),Sp=dn("bum"),Sc=dn("um"),Yv=dn("sp"),Xv=dn("rtg"),Jv=dn("rtc");function Zv(t,e=Re){sa("ec",t,e)}function Ii(t,e){const n=it;if(n===null)return t;const s=oa(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Qn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hi(),dt(l,n,8,[t.el,a,t,e]),di())}}const Np="components";function Nc(t,e){return tE(Np,t,!0,e)||t}const eE=Symbol();function tE(t,e,n=!0,s=!1){const i=it||Re;if(i){const r=i.type;if(t===Np){const a=DE(r,!1);if(a&&(a===e||a===Kt(e)||a===Xo(Kt(e))))return r}const o=fh(i[t]||r[t],e)||fh(i.appContext[t],e);return!o&&s?r:o}}function fh(t,e){return t&&(t[e]||t[Kt(e)]||t[Xo(Kt(e))])}function PL(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Nl=t=>t?Fp(t)?oa(t)||t.proxy:Nl(t.parent):null,Ui=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nl(t.parent),$root:t=>Nl(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>Tc(t.update)),$nextTick:t=>t.n||(t.n=dp.bind(t.proxy)),$watch:t=>Wv.bind(t)}),Fa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ce(t,e),nE={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fa(s,e))return o[e]=1,s[e];if(i!==Ce&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Ce&&ce(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const u=Ui[e];let h,d;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fa(i,e)?(i[e]=n,!0):s!==Ce&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&ce(t,o)||Fa(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(Ui,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Rl=!0;function sE(t){const e=Rc(t),n=t.proxy,s=t.ctx;Rl=!1,e.beforeCreate&&ph(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:C,destroyed:b,unmounted:N,render:U,renderTracked:V,renderTriggered:Y,errorCaptured:B,serverPrefetch:q,expose:G,inheritAttrs:ae,components:_e,directives:ge,filters:Ue}=e;if(c&&iE(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const le=o[te];J(le)&&(s[te]=le.bind(n))}if(i){const te=i.call(n,n);ye(te)&&(t.data=yr(te))}if(Rl=!0,r)for(const te in r){const le=r[te],De=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):Nt,lt=!J(le)&&J(le.set)?le.set.bind(n):Nt,Ge=ht({get:De,set:lt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Oe=>Ge.value=Oe})}if(a)for(const te in a)Rp(a[te],s,n,te);if(l){const te=J(l)?l.call(n):l;Reflect.ownKeys(te).forEach(le=>{so(le,te[le])})}u&&ph(u,t,"c");function oe(te,le){z(le)?le.forEach(De=>te(De.bind(n))):le&&te(le.bind(n))}if(oe(Kv,h),oe(Ip,d),oe(zv,p),oe(qv,g),oe(wp,m),oe(Cp,y),oe(Zv,B),oe(Jv,V),oe(Xv,Y),oe(Sp,C),oe(Sc,N),oe(Yv,q),z(G))if(G.length){const te=t.exposed||(t.exposed={});G.forEach(le=>{Object.defineProperty(te,le,{get:()=>n[le],set:De=>n[le]=De})})}else t.exposed||(t.exposed={});U&&t.render===Nt&&(t.render=U),ae!=null&&(t.inheritAttrs=ae),_e&&(t.components=_e),ge&&(t.directives=ge)}function iE(t,e,n=Nt,s=!1){z(t)&&(t=Ol(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Ht(r.from||i,r.default,!0):o=Ht(r.from||i):o=Ht(r),Ne(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ph(t,e,n){dt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,s){const i=s.includes(".")?vp(n,s):()=>n[s];if(Le(t)){const r=e[t];J(r)&&io(i,r)}else if(J(t))io(i,t.bind(n));else if(ye(t))if(z(t))t.forEach(r=>Rp(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&io(i,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>yo(l,c,o,!0)),yo(l,e,o)),ye(e)&&r.set(e,l),l}function yo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&yo(t,r,n,!0),i&&i.forEach(o=>yo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=rE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rE={data:_h,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:zn,directives:zn,watch:aE,provide:_h,inject:oE};function _h(t,e){return e?t?function(){return Ve(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function oE(t,e){return zn(Ol(t),Ol(e))}function Ol(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Ve(Ve(Object.create(null),t),e):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function lE(t,e,n,s=!1){const i={},r={};Ao(r,ra,1),t.propsDefaults=Object.create(null),Op(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:wv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ea(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Kt(d);i[g]=kl(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Op(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ui(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],c=!0)}c&&an(t,"set","$attrs")}function Op(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(to(l))continue;const c=e[l];let u;i&&ce(i,u=Kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ea(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=he(n),c=a||Ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=kl(i,l,h,c[h],t,!ce(c,h))}}return o}function kl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&J(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(zs(i),s=c[n]=l.call(null,e),as())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ui(n))&&(s=!0))}return s}function kp(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!J(t)){const u=h=>{l=!0;const[d,p]=kp(h,e,!0);Ve(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,$s),$s;if(z(r))for(let u=0;u<r.length;u++){const h=Kt(r[u]);gh(h)&&(o[h]=Ce)}else if(r)for(const u in r){const h=Kt(u);if(gh(h)){const d=r[u],p=o[h]=z(d)||J(d)?{type:d}:Object.assign({},d);if(p){const g=vh(Boolean,p.type),m=vh(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function gh(t){return t[0]!=="$"}function mh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ah(t,e){return mh(t)===mh(e)}function vh(t,e){return z(e)?e.findIndex(n=>Ah(n,t)):J(e)&&Ah(e,t)?0:-1}const Dp=t=>t[0]==="_"||t==="$stable",Oc=t=>z(t)?t.map($t):[$t(t)],uE=(t,e,n)=>{if(e._n)return e;const s=Ft((...i)=>Oc(e(...i)),n);return s._c=!1,s},Pp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Dp(i))continue;const r=t[i];if(J(r))e[i]=uE(i,r,s);else if(r!=null){const o=Oc(r);e[i]=()=>o}}},xp=(t,e)=>{const n=Oc(e);t.slots.default=()=>n},hE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Ao(e,"_",n)):Pp(e,t.slots={})}else t.slots={},e&&xp(t,e);Ao(t.slots,ra,1)},dE=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ve(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Pp(e,i)),o=e}else e&&(xp(t,e),o={default:1});if(r)for(const a in i)!Dp(a)&&!(a in o)&&delete i[a]};function Lp(){return{app:null,config:{isNativeTag:HA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fE=0;function pE(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Lp(),o=new Set;let a=!1;const l=r.app={_uid:fE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ME,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(l,...u)):J(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ee(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,oa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Dl(t,e,n,s,i=!1){if(z(t)){t.forEach((d,p)=>Dl(d,e&&(z(e)?e[p]:e),n,s,i));return}if(ro(s)&&!i)return;const r=s.shapeFlag&4?oa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),J(l))Rn(l,a,12,[o,u]);else{const d=Le(l),p=Ne(l);if(d||p){const g=()=>{if(t.f){const m=d?ce(h,l)?h[l]:u[l]:l.value;i?z(m)&&_c(m,r):z(m)?m.includes(r)||m.push(r):d?(u[l]=[r],ce(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Xe(g,n)):g()}}}const Xe=Uv;function _E(t){return gE(t)}function gE(t,e){const n=KA();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Nt,insertStaticContent:g}=t,m=(f,_,A,E=null,T=null,k=null,M=!1,R=null,D=!!_.dynamicChildren)=>{if(f===_)return;f&&!Jn(f,_)&&(E=P(f),Oe(f,T,k,!0),f=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:I,ref:W,shapeFlag:$}=_;switch(I){case ia:y(f,_,A,E);break;case Rt:v(f,_,A,E);break;case oo:f==null&&C(_,A,E,M);break;case bt:_e(f,_,A,E,T,k,M,R,D);break;default:$&1?U(f,_,A,E,T,k,M,R,D):$&6?ge(f,_,A,E,T,k,M,R,D):($&64||$&128)&&I.process(f,_,A,E,T,k,M,R,D,se)}W!=null&&T&&Dl(W,f&&f.ref,k,_||f,!_)},y=(f,_,A,E)=>{if(f==null)s(_.el=a(_.children),A,E);else{const T=_.el=f.el;_.children!==f.children&&c(T,_.children)}},v=(f,_,A,E)=>{f==null?s(_.el=l(_.children||""),A,E):_.el=f.el},C=(f,_,A,E)=>{[f.el,f.anchor]=g(f.children,_,A,E,f.el,f.anchor)},b=({el:f,anchor:_},A,E)=>{let T;for(;f&&f!==_;)T=d(f),s(f,A,E),f=T;s(_,A,E)},N=({el:f,anchor:_})=>{let A;for(;f&&f!==_;)A=d(f),i(f),f=A;i(_)},U=(f,_,A,E,T,k,M,R,D)=>{M=M||_.type==="svg",f==null?V(_,A,E,T,k,M,R,D):q(f,_,T,k,M,R,D)},V=(f,_,A,E,T,k,M,R)=>{let D,I;const{type:W,props:$,shapeFlag:H,transition:Q,dirs:ee}=f;if(D=f.el=o(f.type,k,$&&$.is,$),H&8?u(D,f.children):H&16&&B(f.children,D,null,E,T,k&&W!=="foreignObject",M,R),ee&&Qn(f,null,E,"created"),Y(D,f,f.scopeId,M,E),$){for(const de in $)de!=="value"&&!to(de)&&r(D,de,null,$[de],k,f.children,E,T,x);"value"in $&&r(D,"value",null,$.value),(I=$.onVnodeBeforeMount)&&Mt(I,E,f)}ee&&Qn(f,null,E,"beforeMount");const fe=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;fe&&Q.beforeEnter(D),s(D,_,A),((I=$&&$.onVnodeMounted)||fe||ee)&&Xe(()=>{I&&Mt(I,E,f),fe&&Q.enter(D),ee&&Qn(f,null,E,"mounted")},T)},Y=(f,_,A,E,T)=>{if(A&&p(f,A),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(T){let k=T.subTree;if(_===k){const M=T.vnode;Y(f,M,M.scopeId,M.slotScopeIds,T.parent)}}},B=(f,_,A,E,T,k,M,R,D=0)=>{for(let I=D;I<f.length;I++){const W=f[I]=R?yn(f[I]):$t(f[I]);m(null,W,_,A,E,T,k,M,R)}},q=(f,_,A,E,T,k,M)=>{const R=_.el=f.el;let{patchFlag:D,dynamicChildren:I,dirs:W}=_;D|=f.patchFlag&16;const $=f.props||Ce,H=_.props||Ce;let Q;A&&Kn(A,!1),(Q=H.onVnodeBeforeUpdate)&&Mt(Q,A,_,f),W&&Qn(_,f,A,"beforeUpdate"),A&&Kn(A,!0);const ee=T&&_.type!=="foreignObject";if(I?G(f.dynamicChildren,I,R,A,E,ee,k):M||le(f,_,R,null,A,E,ee,k,!1),D>0){if(D&16)ae(R,_,$,H,A,E,T);else if(D&2&&$.class!==H.class&&r(R,"class",null,H.class,T),D&4&&r(R,"style",$.style,H.style,T),D&8){const fe=_.dynamicProps;for(let de=0;de<fe.length;de++){const ke=fe[de],vt=$[ke],Cs=H[ke];(Cs!==vt||ke==="value")&&r(R,ke,vt,Cs,T,f.children,A,E,x)}}D&1&&f.children!==_.children&&u(R,_.children)}else!M&&I==null&&ae(R,_,$,H,A,E,T);((Q=H.onVnodeUpdated)||W)&&Xe(()=>{Q&&Mt(Q,A,_,f),W&&Qn(_,f,A,"updated")},E)},G=(f,_,A,E,T,k,M)=>{for(let R=0;R<_.length;R++){const D=f[R],I=_[R],W=D.el&&(D.type===bt||!Jn(D,I)||D.shapeFlag&70)?h(D.el):A;m(D,I,W,null,E,T,k,M,!0)}},ae=(f,_,A,E,T,k,M)=>{if(A!==E){if(A!==Ce)for(const R in A)!to(R)&&!(R in E)&&r(f,R,A[R],null,M,_.children,T,k,x);for(const R in E){if(to(R))continue;const D=E[R],I=A[R];D!==I&&R!=="value"&&r(f,R,I,D,M,_.children,T,k,x)}"value"in E&&r(f,"value",A.value,E.value)}},_e=(f,_,A,E,T,k,M,R,D)=>{const I=_.el=f?f.el:a(""),W=_.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:Q}=_;Q&&(R=R?R.concat(Q):Q),f==null?(s(I,A,E),s(W,A,E),B(_.children,A,W,T,k,M,R,D)):$>0&&$&64&&H&&f.dynamicChildren?(G(f.dynamicChildren,H,A,T,k,M,R),(_.key!=null||T&&_===T.subTree)&&Mp(f,_,!0)):le(f,_,A,W,T,k,M,R,D)},ge=(f,_,A,E,T,k,M,R,D)=>{_.slotScopeIds=R,f==null?_.shapeFlag&512?T.ctx.activate(_,A,E,M,D):Ue(_,A,E,T,k,M,D):nt(f,_,D)},Ue=(f,_,A,E,T,k,M)=>{const R=f.component=IE(f,E,T);if(na(f)&&(R.ctx.renderer=se),NE(R),R.asyncDep){if(T&&T.registerDep(R,oe),!f.el){const D=R.subTree=Ee(Rt);v(null,D,_,A)}return}oe(R,f,_,A,T,k,M)},nt=(f,_,A)=>{const E=_.component=f.component;if($v(f,_,A))if(E.asyncDep&&!E.asyncResolved){te(E,_,A);return}else E.next=_,kv(E.update),E.update();else _.el=f.el,E.vnode=_},oe=(f,_,A,E,T,k,M)=>{const R=()=>{if(f.isMounted){let{next:W,bu:$,u:H,parent:Q,vnode:ee}=f,fe=W,de;Kn(f,!1),W?(W.el=ee.el,te(f,W,M)):W=ee,$&&no($),(de=W.props&&W.props.onVnodeBeforeUpdate)&&Mt(de,Q,W,ee),Kn(f,!0);const ke=$a(f),vt=f.subTree;f.subTree=ke,m(vt,ke,h(vt.el),P(vt),f,T,k),W.el=ke.el,fe===null&&Bv(f,ke.el),H&&Xe(H,T),(de=W.props&&W.props.onVnodeUpdated)&&Xe(()=>Mt(de,Q,W,ee),T)}else{let W;const{el:$,props:H}=_,{bm:Q,m:ee,parent:fe}=f,de=ro(_);if(Kn(f,!1),Q&&no(Q),!de&&(W=H&&H.onVnodeBeforeMount)&&Mt(W,fe,_),Kn(f,!0),$&&X){const ke=()=>{f.subTree=$a(f),X($,f.subTree,f,T,null)};de?_.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=$a(f);m(null,ke,A,E,f,T,k),_.el=ke.el}if(ee&&Xe(ee,T),!de&&(W=H&&H.onVnodeMounted)){const ke=_;Xe(()=>Mt(W,fe,ke),T)}(_.shapeFlag&256||fe&&ro(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Xe(f.a,T),f.isMounted=!0,_=A=E=null}},D=f.effect=new Ac(R,()=>Tc(I),f.scope),I=f.update=()=>D.run();I.id=f.uid,Kn(f,!0),I()},te=(f,_,A)=>{_.component=f;const E=f.vnode.props;f.vnode=_,f.next=null,cE(f,_.props,E,A),dE(f,_.children,A),hi(),uh(),di()},le=(f,_,A,E,T,k,M,R,D=!1)=>{const I=f&&f.children,W=f?f.shapeFlag:0,$=_.children,{patchFlag:H,shapeFlag:Q}=_;if(H>0){if(H&128){lt(I,$,A,E,T,k,M,R,D);return}else if(H&256){De(I,$,A,E,T,k,M,R,D);return}}Q&8?(W&16&&x(I,T,k),$!==I&&u(A,$)):W&16?Q&16?lt(I,$,A,E,T,k,M,R,D):x(I,T,k,!0):(W&8&&u(A,""),Q&16&&B($,A,E,T,k,M,R,D))},De=(f,_,A,E,T,k,M,R,D)=>{f=f||$s,_=_||$s;const I=f.length,W=_.length,$=Math.min(I,W);let H;for(H=0;H<$;H++){const Q=_[H]=D?yn(_[H]):$t(_[H]);m(f[H],Q,A,null,T,k,M,R,D)}I>W?x(f,T,k,!0,!1,$):B(_,A,E,T,k,M,R,D,$)},lt=(f,_,A,E,T,k,M,R,D)=>{let I=0;const W=_.length;let $=f.length-1,H=W-1;for(;I<=$&&I<=H;){const Q=f[I],ee=_[I]=D?yn(_[I]):$t(_[I]);if(Jn(Q,ee))m(Q,ee,A,null,T,k,M,R,D);else break;I++}for(;I<=$&&I<=H;){const Q=f[$],ee=_[H]=D?yn(_[H]):$t(_[H]);if(Jn(Q,ee))m(Q,ee,A,null,T,k,M,R,D);else break;$--,H--}if(I>$){if(I<=H){const Q=H+1,ee=Q<W?_[Q].el:E;for(;I<=H;)m(null,_[I]=D?yn(_[I]):$t(_[I]),A,ee,T,k,M,R,D),I++}}else if(I>H)for(;I<=$;)Oe(f[I],T,k,!0),I++;else{const Q=I,ee=I,fe=new Map;for(I=ee;I<=H;I++){const st=_[I]=D?yn(_[I]):$t(_[I]);st.key!=null&&fe.set(st.key,I)}let de,ke=0;const vt=H-ee+1;let Cs=!1,Ju=0;const Ti=new Array(vt);for(I=0;I<vt;I++)Ti[I]=0;for(I=Q;I<=$;I++){const st=f[I];if(ke>=vt){Oe(st,T,k,!0);continue}let Lt;if(st.key!=null)Lt=fe.get(st.key);else for(de=ee;de<=H;de++)if(Ti[de-ee]===0&&Jn(st,_[de])){Lt=de;break}Lt===void 0?Oe(st,T,k,!0):(Ti[Lt-ee]=I+1,Lt>=Ju?Ju=Lt:Cs=!0,m(st,_[Lt],A,null,T,k,M,R,D),ke++)}const Zu=Cs?mE(Ti):$s;for(de=Zu.length-1,I=vt-1;I>=0;I--){const st=ee+I,Lt=_[st],eh=st+1<W?_[st+1].el:E;Ti[I]===0?m(null,Lt,A,eh,T,k,M,R,D):Cs&&(de<0||I!==Zu[de]?Ge(Lt,A,eh,2):de--)}}},Ge=(f,_,A,E,T=null)=>{const{el:k,type:M,transition:R,children:D,shapeFlag:I}=f;if(I&6){Ge(f.component.subTree,_,A,E);return}if(I&128){f.suspense.move(_,A,E);return}if(I&64){M.move(f,_,A,se);return}if(M===bt){s(k,_,A);for(let $=0;$<D.length;$++)Ge(D[$],_,A,E);s(f.anchor,_,A);return}if(M===oo){b(f,_,A);return}if(E!==2&&I&1&&R)if(E===0)R.beforeEnter(k),s(k,_,A),Xe(()=>R.enter(k),T);else{const{leave:$,delayLeave:H,afterLeave:Q}=R,ee=()=>s(k,_,A),fe=()=>{$(k,()=>{ee(),Q&&Q()})};H?H(k,ee,fe):fe()}else s(k,_,A)},Oe=(f,_,A,E=!1,T=!1)=>{const{type:k,props:M,ref:R,children:D,dynamicChildren:I,shapeFlag:W,patchFlag:$,dirs:H}=f;if(R!=null&&Dl(R,null,A,f,!0),W&256){_.ctx.deactivate(f);return}const Q=W&1&&H,ee=!ro(f);let fe;if(ee&&(fe=M&&M.onVnodeBeforeUnmount)&&Mt(fe,_,f),W&6)w(f.component,A,E);else{if(W&128){f.suspense.unmount(A,E);return}Q&&Qn(f,null,_,"beforeUnmount"),W&64?f.type.remove(f,_,A,T,se,E):I&&(k!==bt||$>0&&$&64)?x(I,_,A,!1,!0):(k===bt&&$&384||!T&&W&16)&&x(D,_,A),E&&mt(f)}(ee&&(fe=M&&M.onVnodeUnmounted)||Q)&&Xe(()=>{fe&&Mt(fe,_,f),Q&&Qn(f,null,_,"unmounted")},A)},mt=f=>{const{type:_,el:A,anchor:E,transition:T}=f;if(_===bt){At(A,E);return}if(_===oo){N(f);return}const k=()=>{i(A),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:R}=T,D=()=>M(A,k);R?R(f.el,k,D):D()}else k()},At=(f,_)=>{let A;for(;f!==_;)A=d(f),i(f),f=A;i(_)},w=(f,_,A)=>{const{bum:E,scope:T,update:k,subTree:M,um:R}=f;E&&no(E),T.stop(),k&&(k.active=!1,Oe(M,f,_,A)),R&&Xe(R,_),Xe(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},x=(f,_,A,E=!1,T=!1,k=0)=>{for(let M=k;M<f.length;M++)Oe(f[M],_,A,E,T)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,_,A)=>{f==null?_._vnode&&Oe(_._vnode,null,null,!0):m(_._vnode||null,f,_,null,null,null,A),uh(),pp(),_._vnode=f},se={p:m,um:Oe,m:Ge,r:mt,mt:Ue,mc:B,pc:le,pbc:G,n:P,o:t};let be,X;return e&&([be,X]=e(se)),{render:F,hydrate:be,createApp:pE(F,be)}}function Kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Mp(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=yn(i[r]),a.el=o.el),n||Mp(o,a)),a.type===ia&&(a.el=o.el)}}function mE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const AE=t=>t.__isTeleport,bt=Symbol(void 0),ia=Symbol(void 0),Rt=Symbol(void 0),oo=Symbol(void 0),Hi=[];let Tt=null;function ln(t=!1){Hi.push(Tt=t?null:[])}function vE(){Hi.pop(),Tt=Hi[Hi.length-1]||null}let sr=1;function Eh(t){sr+=t}function $p(t){return t.dynamicChildren=sr>0?Tt||$s:null,vE(),sr>0&&Tt&&Tt.push(t),t}function Ks(t,e,n,s,i,r){return $p(L(t,e,n,s,i,r,!0))}function kc(t,e,n,s,i){return $p(Ee(t,e,n,s,i,!0))}function Pl(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const ra="__vInternal",Bp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Ne(t)||J(t)?{i:it,r:t,k:e,f:!!n}:t:null;function L(t,e=null,n=null,s=0,i=null,r=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bp(e),ref:e&&ao(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return a?(Pc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),sr>0&&!o&&Tt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Tt.push(l),l}const Ee=EE;function EE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===eE)&&(t=Rt),Pl(t)){const a=Ln(t,e,!0);return n&&Pc(a,n),sr>0&&!r&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(PE(t)&&(t=t.__vccOpts),e){e=yE(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=fc(a)),ye(l)&&(ip(l)&&!z(l)&&(l=Ve({},l)),e.style=dc(l))}const o=Le(t)?1:Fv(t)?128:AE(t)?64:ye(t)?4:J(t)?2:0;return L(t,e,n,s,i,o,r,!0)}function yE(t){return t?ip(t)||ra in t?Ve({},t):t:null}function Ln(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?wE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bp(a),ref:e&&e.ref?n&&i?z(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lo(t=" ",e=0){return Ee(ia,null,t,e)}function Dc(t,e){const n=Ee(oo,null,t);return n.staticCount=e,n}function bE(t="",e=!1){return e?(ln(),kc(Rt,null,t)):Ee(Rt,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ee(Rt):z(t)?Ee(bt,null,t.slice()):typeof t=="object"?yn(t):Ee(ia,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function Pc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Pc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ra in e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[lo(e)]):n=8);t.children=e,t.shapeFlag|=n}function wE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fc([e.class,s.class]));else if(i==="style")e.style=dc([e.style,s.style]);else if(qo(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Mt(t,e,n,s=null){dt(t,e,7,[n,s])}const CE=Lp();let TE=0;function IE(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||CE,r={uid:TE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(s,i),emitsOptions:gp(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xv.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const SE=()=>Re||it,zs=t=>{Re=t,t.scope.on()},as=()=>{Re&&Re.scope.off(),Re=null};function Fp(t){return t.vnode.shapeFlag&4}let ir=!1;function NE(t,e=!1){ir=e;const{props:n,children:s}=t.vnode,i=Fp(t);lE(t,n,i,e),hE(t,s);const r=i?RE(t,e):void 0;return ir=!1,r}function RE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rp(new Proxy(t.ctx,nE));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?kE(t):null;zs(t),hi();const r=Rn(s,t,0,[t.props,i]);if(di(),as(),jf(r)){if(r.then(as,as),e)return r.then(o=>{yh(t,o,e)}).catch(o=>{Zo(o,t,0)});t.asyncDep=r}else yh(t,r,e)}else Up(t,e)}function yh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=cp(e)),Up(t,n)}let bh;function Up(t,e,n){const s=t.type;if(!t.render){if(!e&&bh&&!s.render){const i=s.template||Rc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ve(Ve({isCustomElement:r,delimiters:a},o),l);s.render=bh(i,c)}}t.render=s.render||Nt}zs(t),hi(),sE(t),di(),as()}function OE(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function kE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=OE(t))},slots:t.slots,emit:t.emit,expose:e}}function oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cp(rp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)},has(e,n){return n in e||n in Ui}}))}function DE(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function PE(t){return J(t)&&"__vccOpts"in t}const ht=(t,e)=>Nv(t,e,ir);function Hp(t,e,n){const s=arguments.length;return s===2?ye(e)&&!z(e)?Pl(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pl(n)&&(n=[n]),Ee(t,e,n))}const xE=Symbol(""),LE=()=>Ht(xE),ME="3.2.47",$E="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,wh=Zn&&Zn.createElement("template"),BE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zn.createElementNS($E,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wh.innerHTML=s?`<svg>${t}</svg>`:t;const a=wh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function FE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function UE(t,e,n){const s=t.style,i=Le(n);if(n&&!i){if(e&&!Le(e))for(const r in e)n[r]==null&&xl(s,r,"");for(const r in n)xl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ch=/\s*!important$/;function xl(t,e,n){if(z(n))n.forEach(s=>xl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=HE(t,e);Ch.test(n)?t.setProperty(ui(s),n.replace(Ch,""),"important"):t[s]=n}}const Th=["Webkit","Moz","ms"],Ua={};function HE(t,e){const n=Ua[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return Ua[e]=s;s=Xo(s);for(let i=0;i<Th.length;i++){const r=Th[i]+s;if(r in t)return Ua[e]=r}return e}const Ih="http://www.w3.org/1999/xlink";function WE(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const r=BA(e);n==null||r&&!Hf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function VE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Hf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function jE(t,e,n,s){t.removeEventListener(e,n,s)}function GE(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=QE(e);if(s){const c=r[e]=qE(s,i);es(t,a,c,l)}else o&&(jE(t,a,o,l),r[e]=void 0)}}const Sh=/(?:Once|Passive|Capture)$/;function QE(t){let e;if(Sh.test(t)){e={};let s;for(;s=t.match(Sh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let Ha=0;const KE=Promise.resolve(),zE=()=>Ha||(KE.then(()=>Ha=0),Ha=Date.now());function qE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(YE(s,n.value),e,5,[s])};return n.value=t,n.attached=zE(),n}function YE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Nh=/^on[a-z]/,XE=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?FE(t,s,i):e==="style"?UE(t,n,s):qo(e)?pc(e)||GE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JE(t,e,s,i))?VE(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),WE(t,e,s,i))};function JE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Nh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Nh.test(e)&&Le(n)?!1:e in t}const ZE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gv.props;const bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>no(e,n):e};function ey(t){t.target.composing=!0}function Rh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Si={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=bo(i);const r=s||i.props&&i.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=El(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",ey),es(t,"compositionend",Rh),es(t,"change",Rh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=bo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&El(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},xL={created(t,{value:e},n){t.checked=mo(e,n.props.value),t._assign=bo(n),es(t,"change",()=>{t._assign(ty(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=bo(s),e!==n&&(t.checked=mo(e,s.props.value))}};function ty(t){return"_value"in t?t._value:t.value}const LL={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ni(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ni(t,!0),s.enter(t)):s.leave(t,()=>{Ni(t,!1)}):Ni(t,e))},beforeUnmount(t,{value:e}){Ni(t,e)}};function Ni(t,e){t.style.display=e?t._vod:"none"}const ny=Ve({patchProp:XE},BE);let Oh;function sy(){return Oh||(Oh=_E(ny))}const iy=(...t)=>{const e=sy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ry(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ry(t){return Le(t)?document.querySelector(t):t}const oy="/MyPortfolio/assets/Frank_logo-98eaea7f.svg";const xc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},aa=t=>(mp("data-v-9d2463c8"),t=t(),Ap(),t),ay={class:"navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white sticky-top"},ly={class:"container-fluid"},cy=aa(()=>L("img",{src:oy,alt:""},null,-1)),uy=aa(()=>L("div",{class:"line1"},null,-1)),hy=aa(()=>L("div",{class:"line2"},null,-1)),dy=[uy,hy],fy={class:"collapse navbar-collapse",id:"navbarNav"},py={class:"navbar-nav ms-lg-auto"},_y={class:"nav-item bt-border text-center ms-lg-auto"},gy={class:"nav-item bt-border text-center ms-lg-auto"},my={class:"nav-item bt-border text-center ms-lg-auto"},Ay=aa(()=>L("li",{class:"nav-item text-center ms-lg-auto"},[L("a",{href:"https://medium.com/@huikaichung1999",target:"_blank",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Medium")],-1)),vy={__name:"Header",setup(t){function e(){const n=document.querySelector(".line1"),s=document.querySelector(".line2");n.classList.toggle("open"),s.classList.toggle("open")}return(n,s)=>{const i=Nc("router-link");return ln(),Ks("nav",ay,[L("div",ly,[Ee(i,{to:"/MyPortfolio",class:"navbar-brand"},{default:Ft(()=>[cy]),_:1}),L("button",{onClick:e,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},dy),L("div",fy,[L("ul",py,[L("li",_y,[Ee(i,{to:"/MyPortfolio/About",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Ft(()=>[lo("About")]),_:1})]),L("li",gy,[Ee(i,{to:"/MyPortfolio/Work",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Ft(()=>[lo("Work")]),_:1})]),L("li",my,[Ee(i,{to:"/MyPortfolio/Resume",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Ft(()=>[lo("Resume")]),_:1})]),Ay])])])])}}},Ey=xc(vy,[["__scopeId","data-v-9d2463c8"]]);const yy={},by={class:"bg-black text-bg-black text-center text-lg-start border-top border-1 border-white"},wy=Dc('<div class="text-center m-2 p-0 text-secondary font-sm" data-v-f7835877> interested in working together? </div><div class="text-center" data-v-f7835877><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://www.linkedin.com/in/hui-kai-chung-970ab6140/" data-v-f7835877>-&gt; linkedin</a><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://medium.com/@huikaichung1999" data-v-f7835877>-&gt; Medium</a></div><div class="text-center" data-v-f7835877><a class="m-2 text-secondary text-decoration-none hover-underline font-sm" data-v-f7835877>huikaichung1999@gmail.com</a></div><div class="text-center p-0 m-2 text-secondary font-sm" data-v-f7835877> Copyright @2023 FrankChung. </div>',4),Cy=[wy];function Ty(t,e){return ln(),Ks("footer",by,Cy)}const Iy=xc(yy,[["render",Ty],["__scopeId","data-v-f7835877"]]),Sy={__name:"App",setup(t){return(e,n)=>{const s=Nc("router-view");return ln(),Ks(bt,null,[Ee(Ey),Ee(s),Ee(Iy)],64)}}};var qe="top",ot="bottom",at="right",Ye="left",la="auto",fi=[qe,ot,at,Ye],ds="start",qs="end",Wp="clippingParents",Lc="viewport",Os="popper",Vp="reference",Ll=fi.reduce(function(t,e){return t.concat([e+"-"+ds,e+"-"+qs])},[]),Mc=[].concat(fi,[la]).reduce(function(t,e){return t.concat([e,e+"-"+ds,e+"-"+qs])},[]),jp="beforeRead",Gp="read",Qp="afterRead",Kp="beforeMain",zp="main",qp="afterMain",Yp="beforeWrite",Xp="write",Jp="afterWrite",Zp=[jp,Gp,Qp,Kp,zp,qp,Yp,Xp,Jp];function zt(t){return t?(t.nodeName||"").toLowerCase():null}function _t(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function fs(t){var e=_t(t).Element;return t instanceof e||t instanceof Element}function ft(t){var e=_t(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function $c(t){if(typeof ShadowRoot>"u")return!1;var e=_t(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ny(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!ft(r)||!zt(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Ry(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!ft(i)||!zt(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Bc={name:"applyStyles",enabled:!0,phase:"write",fn:Ny,effect:Ry,requires:["computeStyles"]};function Wt(t){return t.split("-")[0]}var ls=Math.max,wo=Math.min,Ys=Math.round;function Ml(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function e_(){return!/^((?!chrome|android).)*safari/i.test(Ml())}function Xs(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&ft(t)&&(i=t.offsetWidth>0&&Ys(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Ys(s.height)/t.offsetHeight||1);var o=fs(t)?_t(t):window,a=o.visualViewport,l=!e_()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Fc(t){var e=Xs(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function t_(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&$c(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function cn(t){return _t(t).getComputedStyle(t)}function Oy(t){return["table","td","th"].indexOf(zt(t))>=0}function Vn(t){return((fs(t)?t.ownerDocument:t.document)||window.document).documentElement}function ca(t){return zt(t)==="html"?t:t.assignedSlot||t.parentNode||($c(t)?t.host:null)||Vn(t)}function kh(t){return!ft(t)||cn(t).position==="fixed"?null:t.offsetParent}function ky(t){var e=/firefox/i.test(Ml()),n=/Trident/i.test(Ml());if(n&&ft(t)){var s=cn(t);if(s.position==="fixed")return null}var i=ca(t);for($c(i)&&(i=i.host);ft(i)&&["html","body"].indexOf(zt(i))<0;){var r=cn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function br(t){for(var e=_t(t),n=kh(t);n&&Oy(n)&&cn(n).position==="static";)n=kh(n);return n&&(zt(n)==="html"||zt(n)==="body"&&cn(n).position==="static")?e:n||ky(t)||e}function Uc(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Wi(t,e,n){return ls(t,wo(e,n))}function Dy(t,e,n){var s=Wi(t,e,n);return s>n?n:s}function n_(){return{top:0,right:0,bottom:0,left:0}}function s_(t){return Object.assign({},n_(),t)}function i_(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var Py=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,s_(typeof e!="number"?e:i_(e,fi))};function xy(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Wt(n.placement),l=Uc(a),c=[Ye,at].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=Py(i.padding,n),d=Fc(r),p=l==="y"?qe:Ye,g=l==="y"?ot:at,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],v=br(r),C=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,b=m/2-y/2,N=h[p],U=C-d[u]-h[g],V=C/2-d[u]/2+b,Y=Wi(N,V,U),B=l;n.modifiersData[s]=(e={},e[B]=Y,e.centerOffset=Y-V,e)}}function Ly(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||t_(e.elements.popper,i)&&(e.elements.arrow=i))}const r_={name:"arrow",enabled:!0,phase:"main",fn:xy,effect:Ly,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Js(t){return t.split("-")[1]}var My={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $y(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:Ys(e*i)/i||0,y:Ys(n*i)/i||0}}function Dh(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,p=d===void 0?0:d,g=o.y,m=g===void 0?0:g,y=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=y.x,m=y.y;var v=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),b=Ye,N=qe,U=window;if(c){var V=br(n),Y="clientHeight",B="clientWidth";if(V===_t(n)&&(V=Vn(n),cn(V).position!=="static"&&a==="absolute"&&(Y="scrollHeight",B="scrollWidth")),V=V,i===qe||(i===Ye||i===at)&&r===qs){N=ot;var q=h&&V===U&&U.visualViewport?U.visualViewport.height:V[Y];m-=q-s.height,m*=l?1:-1}if(i===Ye||(i===qe||i===ot)&&r===qs){b=at;var G=h&&V===U&&U.visualViewport?U.visualViewport.width:V[B];p-=G-s.width,p*=l?1:-1}}var ae=Object.assign({position:a},c&&My),_e=u===!0?$y({x:p,y:m}):{x:p,y:m};if(p=_e.x,m=_e.y,l){var ge;return Object.assign({},ae,(ge={},ge[N]=C?"0":"",ge[b]=v?"0":"",ge.transform=(U.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",ge))}return Object.assign({},ae,(e={},e[N]=C?m+"px":"",e[b]=v?p+"px":"",e.transform="",e))}function By(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Wt(e.placement),variation:Js(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Dh(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Dh(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Hc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:By,data:{}};var Vr={passive:!0};function Fy(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=_t(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Vr)}),a&&l.addEventListener("resize",n.update,Vr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Vr)}),a&&l.removeEventListener("resize",n.update,Vr)}}const Wc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Fy,data:{}};var Uy={left:"right",right:"left",bottom:"top",top:"bottom"};function co(t){return t.replace(/left|right|bottom|top/g,function(e){return Uy[e]})}var Hy={start:"end",end:"start"};function Ph(t){return t.replace(/start|end/g,function(e){return Hy[e]})}function Vc(t){var e=_t(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function jc(t){return Xs(Vn(t)).left+Vc(t).scrollLeft}function Wy(t,e){var n=_t(t),s=Vn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=e_();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+jc(t),y:l}}function Vy(t){var e,n=Vn(t),s=Vc(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=ls(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=ls(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+jc(t),l=-s.scrollTop;return cn(i||n).direction==="rtl"&&(a+=ls(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Gc(t){var e=cn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function o_(t){return["html","body","#document"].indexOf(zt(t))>=0?t.ownerDocument.body:ft(t)&&Gc(t)?t:o_(ca(t))}function Vi(t,e){var n;e===void 0&&(e=[]);var s=o_(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=_t(s),o=i?[r].concat(r.visualViewport||[],Gc(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Vi(ca(o)))}function $l(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function jy(t,e){var n=Xs(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function xh(t,e,n){return e===Lc?$l(Wy(t,n)):fs(e)?jy(e,n):$l(Vy(Vn(t)))}function Gy(t){var e=Vi(ca(t)),n=["absolute","fixed"].indexOf(cn(t).position)>=0,s=n&&ft(t)?br(t):t;return fs(s)?e.filter(function(i){return fs(i)&&t_(i,s)&&zt(i)!=="body"}):[]}function Qy(t,e,n,s){var i=e==="clippingParents"?Gy(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=xh(t,c,s);return l.top=ls(u.top,l.top),l.right=wo(u.right,l.right),l.bottom=wo(u.bottom,l.bottom),l.left=ls(u.left,l.left),l},xh(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function a_(t){var e=t.reference,n=t.element,s=t.placement,i=s?Wt(s):null,r=s?Js(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case qe:l={x:o,y:e.y-n.height};break;case ot:l={x:o,y:e.y+e.height};break;case at:l={x:e.x+e.width,y:a};break;case Ye:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Uc(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case ds:l[c]=l[c]-(e[u]/2-n[u]/2);break;case qs:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Zs(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Wp:a,c=n.rootBoundary,u=c===void 0?Lc:c,h=n.elementContext,d=h===void 0?Os:h,p=n.altBoundary,g=p===void 0?!1:p,m=n.padding,y=m===void 0?0:m,v=s_(typeof y!="number"?y:i_(y,fi)),C=d===Os?Vp:Os,b=t.rects.popper,N=t.elements[g?C:d],U=Qy(fs(N)?N:N.contextElement||Vn(t.elements.popper),l,u,o),V=Xs(t.elements.reference),Y=a_({reference:V,element:b,strategy:"absolute",placement:i}),B=$l(Object.assign({},b,Y)),q=d===Os?B:V,G={top:U.top-q.top+v.top,bottom:q.bottom-U.bottom+v.bottom,left:U.left-q.left+v.left,right:q.right-U.right+v.right},ae=t.modifiersData.offset;if(d===Os&&ae){var _e=ae[i];Object.keys(G).forEach(function(ge){var Ue=[at,ot].indexOf(ge)>=0?1:-1,nt=[qe,ot].indexOf(ge)>=0?"y":"x";G[ge]+=_e[nt]*Ue})}return G}function Ky(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Mc:l,u=Js(s),h=u?a?Ll:Ll.filter(function(g){return Js(g)===u}):fi,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var p=d.reduce(function(g,m){return g[m]=Zs(t,{placement:m,boundary:i,rootBoundary:r,padding:o})[Wt(m)],g},{});return Object.keys(p).sort(function(g,m){return p[g]-p[m]})}function zy(t){if(Wt(t)===la)return[];var e=co(t);return[Ph(t),e,Ph(e)]}function qy(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,g=p===void 0?!0:p,m=n.allowedAutoPlacements,y=e.options.placement,v=Wt(y),C=v===y,b=l||(C||!g?[co(y)]:zy(y)),N=[y].concat(b).reduce(function(At,w){return At.concat(Wt(w)===la?Ky(e,{placement:w,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):w)},[]),U=e.rects.reference,V=e.rects.popper,Y=new Map,B=!0,q=N[0],G=0;G<N.length;G++){var ae=N[G],_e=Wt(ae),ge=Js(ae)===ds,Ue=[qe,ot].indexOf(_e)>=0,nt=Ue?"width":"height",oe=Zs(e,{placement:ae,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),te=Ue?ge?at:Ye:ge?ot:qe;U[nt]>V[nt]&&(te=co(te));var le=co(te),De=[];if(r&&De.push(oe[_e]<=0),a&&De.push(oe[te]<=0,oe[le]<=0),De.every(function(At){return At})){q=ae,B=!1;break}Y.set(ae,De)}if(B)for(var lt=g?3:1,Ge=function(w){var x=N.find(function(P){var F=Y.get(P);if(F)return F.slice(0,w).every(function(se){return se})});if(x)return q=x,"break"},Oe=lt;Oe>0;Oe--){var mt=Ge(Oe);if(mt==="break")break}e.placement!==q&&(e.modifiersData[s]._skip=!0,e.placement=q,e.reset=!0)}}const l_={name:"flip",enabled:!0,phase:"main",fn:qy,requiresIfExists:["offset"],data:{_skip:!1}};function Lh(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Mh(t){return[qe,at,ot,Ye].some(function(e){return t[e]>=0})}function Yy(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Zs(e,{elementContext:"reference"}),a=Zs(e,{altBoundary:!0}),l=Lh(o,s),c=Lh(a,i,r),u=Mh(l),h=Mh(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const c_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yy};function Xy(t,e,n){var s=Wt(t),i=[Ye,qe].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Ye,at].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Jy(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Mc.reduce(function(u,h){return u[h]=Xy(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const u_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jy};function Zy(t){var e=t.state,n=t.name;e.modifiersData[n]=a_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Qc={name:"popperOffsets",enabled:!0,phase:"read",fn:Zy,data:{}};function eb(t){return t==="x"?"y":"x"}function tb(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,p=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,y=Zs(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),v=Wt(e.placement),C=Js(e.placement),b=!C,N=Uc(v),U=eb(N),V=e.modifiersData.popperOffsets,Y=e.rects.reference,B=e.rects.popper,q=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,G=typeof q=="number"?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),ae=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,_e={x:0,y:0};if(V){if(r){var ge,Ue=N==="y"?qe:Ye,nt=N==="y"?ot:at,oe=N==="y"?"height":"width",te=V[N],le=te+y[Ue],De=te-y[nt],lt=p?-B[oe]/2:0,Ge=C===ds?Y[oe]:B[oe],Oe=C===ds?-B[oe]:-Y[oe],mt=e.elements.arrow,At=p&&mt?Fc(mt):{width:0,height:0},w=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:n_(),x=w[Ue],P=w[nt],F=Wi(0,Y[oe],At[oe]),se=b?Y[oe]/2-lt-F-x-G.mainAxis:Ge-F-x-G.mainAxis,be=b?-Y[oe]/2+lt+F+P+G.mainAxis:Oe+F+P+G.mainAxis,X=e.elements.arrow&&br(e.elements.arrow),f=X?N==="y"?X.clientTop||0:X.clientLeft||0:0,_=(ge=ae==null?void 0:ae[N])!=null?ge:0,A=te+se-_-f,E=te+be-_,T=Wi(p?wo(le,A):le,te,p?ls(De,E):De);V[N]=T,_e[N]=T-te}if(a){var k,M=N==="x"?qe:Ye,R=N==="x"?ot:at,D=V[U],I=U==="y"?"height":"width",W=D+y[M],$=D-y[R],H=[qe,Ye].indexOf(v)!==-1,Q=(k=ae==null?void 0:ae[U])!=null?k:0,ee=H?W:D-Y[I]-B[I]-Q+G.altAxis,fe=H?D+Y[I]+B[I]-Q-G.altAxis:$,de=p&&H?Dy(ee,D,fe):Wi(p?ee:W,D,p?fe:$);V[U]=de,_e[U]=de-D}e.modifiersData[s]=_e}}const h_={name:"preventOverflow",enabled:!0,phase:"main",fn:tb,requiresIfExists:["offset"]};function nb(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function sb(t){return t===_t(t)||!ft(t)?Vc(t):nb(t)}function ib(t){var e=t.getBoundingClientRect(),n=Ys(e.width)/t.offsetWidth||1,s=Ys(e.height)/t.offsetHeight||1;return n!==1||s!==1}function rb(t,e,n){n===void 0&&(n=!1);var s=ft(e),i=ft(e)&&ib(e),r=Vn(e),o=Xs(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((zt(e)!=="body"||Gc(r))&&(a=sb(e)),ft(e)?(l=Xs(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=jc(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function ob(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function ab(t){var e=ob(t);return Zp.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function lb(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function cb(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var $h={placement:"bottom",modifiers:[],strategy:"absolute"};function Bh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ua(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?$h:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},$h,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,p={state:u,setOptions:function(v){var C=typeof v=="function"?v(u.options):v;m(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:fs(a)?Vi(a):a.contextElement?Vi(a.contextElement):[],popper:Vi(l)};var b=ab(cb([].concat(s,u.options.modifiers)));return u.orderedModifiers=b.filter(function(N){return N.enabled}),g(),p.update()},forceUpdate:function(){if(!d){var v=u.elements,C=v.reference,b=v.popper;if(Bh(C,b)){u.rects={reference:rb(C,br(b),u.options.strategy==="fixed"),popper:Fc(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(G){return u.modifiersData[G.name]=Object.assign({},G.data)});for(var N=0;N<u.orderedModifiers.length;N++){if(u.reset===!0){u.reset=!1,N=-1;continue}var U=u.orderedModifiers[N],V=U.fn,Y=U.options,B=Y===void 0?{}:Y,q=U.name;typeof V=="function"&&(u=V({state:u,options:B,name:q,instance:p})||u)}}}},update:lb(function(){return new Promise(function(y){p.forceUpdate(),y(u)})}),destroy:function(){m(),d=!0}};if(!Bh(a,l))return p;p.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function g(){u.orderedModifiers.forEach(function(y){var v=y.name,C=y.options,b=C===void 0?{}:C,N=y.effect;if(typeof N=="function"){var U=N({state:u,name:v,instance:p,options:b}),V=function(){};h.push(U||V)}})}function m(){h.forEach(function(y){return y()}),h=[]}return p}}var ub=ua(),hb=[Wc,Qc,Hc,Bc],db=ua({defaultModifiers:hb}),fb=[Wc,Qc,Hc,Bc,u_,l_,h_,r_,c_],Kc=ua({defaultModifiers:fb});const d_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qp,afterRead:Qp,afterWrite:Jp,applyStyles:Bc,arrow:r_,auto:la,basePlacements:fi,beforeMain:Kp,beforeRead:jp,beforeWrite:Yp,bottom:ot,clippingParents:Wp,computeStyles:Hc,createPopper:Kc,createPopperBase:ub,createPopperLite:db,detectOverflow:Zs,end:qs,eventListeners:Wc,flip:l_,hide:c_,left:Ye,main:zp,modifierPhases:Zp,offset:u_,placements:Mc,popper:Os,popperGenerator:ua,popperOffsets:Qc,preventOverflow:h_,read:Gp,reference:Vp,right:at,start:ds,top:qe,variationPlacements:Ll,viewport:Lc,write:Xp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const pb=1e6,_b=1e3,Bl="transitionend",gb=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),mb=t=>{do t+=Math.floor(Math.random()*pb);while(document.getElementById(t));return t},f_=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},p_=t=>{const e=f_(t);return e&&document.querySelector(e)?e:null},nn=t=>{const e=f_(t);return e?document.querySelector(e):null},Ab=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*_b)},__=t=>{t.dispatchEvent(new Event(Bl))},sn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Mn=t=>sn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,pi=t=>{if(!sn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},$n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",g_=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?g_(t.parentNode):null},Co=()=>{},wr=t=>{t.offsetHeight},m_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Wa=[],vb=t=>{document.readyState==="loading"?(Wa.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Wa)e()}),Wa.push(t)):t()},pt=()=>document.documentElement.dir==="rtl",gt=t=>{vb(()=>{const e=m_();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Jt=t=>{typeof t=="function"&&t()},A_=(t,e,n=!0)=>{if(!n){Jt(t);return}const s=5,i=Ab(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Bl,o),Jt(t))};e.addEventListener(Bl,o),setTimeout(()=>{r||__(e)},i)},zc=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},Eb=/[^.]*(?=\..*)\.|.*/,yb=/\..*/,bb=/::\d+$/,Va={};let Fh=1;const v_={mouseenter:"mouseover",mouseleave:"mouseout"},wb=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E_(t,e){return e&&`${e}::${Fh++}`||t.uidEvent||Fh++}function y_(t){const e=E_(t);return t.uidEvent=e,Va[e]=Va[e]||{},Va[e]}function Cb(t,e){return function n(s){return qc(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function Tb(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return qc(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function b_(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function w_(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=C_(t);return wb.has(r)||(r=t),[s,i,r]}function Uh(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=w_(e,n,s);e in v_&&(o=(g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)})(o));const l=y_(t),c=l[a]||(l[a]={}),u=b_(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=E_(o,e.replace(Eb,"")),d=r?Tb(t,n,o):Cb(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function Fl(t,e,n,s,i){const r=b_(e[n],s,i);r&&(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function Ib(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];Fl(t,e,n,o.callable,o.delegationSelector)}}function C_(t){return t=t.replace(yb,""),v_[t]||t}const S={on(t,e,n,s){Uh(t,e,n,s,!1)},one(t,e,n,s){Uh(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=w_(e,n,s),a=o!==e,l=y_(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;Fl(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))Ib(t,l,h,e.slice(1));for(const h of Object.keys(c)){const d=h.replace(bb,"");if(!a||e.includes(d)){const p=c[h];Fl(t,l,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=m_(),i=C_(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=qc(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function qc(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const An=new Map,ja={set(t,e,n){An.has(t)||An.set(t,new Map);const s=An.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return An.has(t)&&An.get(t).get(e)||null},remove(t,e){if(!An.has(t))return;const n=An.get(t);n.delete(e),n.size===0&&An.delete(t)}};function Hh(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Ga(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const rn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Ga(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Ga(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Hh(t.dataset[s])}return e},getDataAttribute(t,e){return Hh(t.getAttribute(`data-bs-${Ga(e)}`))}};class Cr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=sn(n)?rn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...sn(n)?rn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=sn(r)?"element":gb(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const Sb="5.2.3";class Pt extends Cr{constructor(e,n){super(),e=Mn(e),e&&(this._element=e,this._config=this._getConfig(n),ja.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ja.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){A_(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return ja.get(Mn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return Sb}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ha=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),$n(this))return;const r=nn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},Nb="alert",Rb="bs.alert",T_=`.${Rb}`,Ob=`close${T_}`,kb=`closed${T_}`,Db="fade",Pb="show";class da extends Pt{static get NAME(){return Nb}close(){if(S.trigger(this._element,Ob).defaultPrevented)return;this._element.classList.remove(Pb);const n=this._element.classList.contains(Db);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,kb),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=da.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ha(da,"close");gt(da);const xb="button",Lb="bs.button",Mb=`.${Lb}`,$b=".data-api",Bb="active",Wh='[data-bs-toggle="button"]',Fb=`click${Mb}${$b}`;class fa extends Pt{static get NAME(){return xb}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Bb))}static jQueryInterface(e){return this.each(function(){const n=fa.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,Fb,Wh,t=>{t.preventDefault();const e=t.target.closest(Wh);fa.getOrCreateInstance(e).toggle()});gt(fa);const Z={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!$n(n)&&pi(n))}},Ub="swipe",_i=".bs.swipe",Hb=`touchstart${_i}`,Wb=`touchmove${_i}`,Vb=`touchend${_i}`,jb=`pointerdown${_i}`,Gb=`pointerup${_i}`,Qb="touch",Kb="pen",zb="pointer-event",qb=40,Yb={endCallback:null,leftCallback:null,rightCallback:null},Xb={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class To extends Cr{constructor(e,n){super(),this._element=e,!(!e||!To.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Yb}static get DefaultType(){return Xb}static get NAME(){return Ub}dispose(){S.off(this._element,_i)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Jt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=qb)return;const n=e/this._deltaX;this._deltaX=0,n&&Jt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,jb,e=>this._start(e)),S.on(this._element,Gb,e=>this._end(e)),this._element.classList.add(zb)):(S.on(this._element,Hb,e=>this._start(e)),S.on(this._element,Wb,e=>this._move(e)),S.on(this._element,Vb,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Kb||e.pointerType===Qb)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Jb="carousel",Zb="bs.carousel",jn=`.${Zb}`,I_=".data-api",ew="ArrowLeft",tw="ArrowRight",nw=500,Ri="next",Ts="prev",ks="left",uo="right",sw=`slide${jn}`,Qa=`slid${jn}`,iw=`keydown${jn}`,rw=`mouseenter${jn}`,ow=`mouseleave${jn}`,aw=`dragstart${jn}`,lw=`load${jn}${I_}`,cw=`click${jn}${I_}`,S_="carousel",jr="active",uw="slide",hw="carousel-item-end",dw="carousel-item-start",fw="carousel-item-next",pw="carousel-item-prev",N_=".active",R_=".carousel-item",_w=N_+R_,gw=".carousel-item img",mw=".carousel-indicators",Aw="[data-bs-slide], [data-bs-slide-to]",vw='[data-bs-ride="carousel"]',Ew={[ew]:uo,[tw]:ks},yw={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},bw={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};let Yc=class O_ extends Pt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Z.findOne(mw,this._element),this._addEventListeners(),this._config.ride===S_&&this.cycle()}static get Default(){return yw}static get DefaultType(){return bw}static get NAME(){return Jb}next(){this._slide(Ri)}nextWhenVisible(){!document.hidden&&pi(this._element)&&this.next()}prev(){this._slide(Ts)}pause(){this._isSliding&&__(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,Qa,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,Qa,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Ri:Ts;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,iw,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,rw,()=>this.pause()),S.on(this._element,ow,()=>this._maybeEnableCycle())),this._config.touch&&To.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Z.find(gw,this._element))S.on(s,aw,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ks)),rightCallback:()=>this._slide(this._directionToOrder(uo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),nw+this._config.interval))}};this._swipeHelper=new To(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=Ew[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=Z.findOne(N_,this._indicatorsElement);n.classList.remove(jr),n.removeAttribute("aria-current");const s=Z.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(jr),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Ri,r=n||zc(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(sw).defaultPrevented||!s||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?dw:hw,h=i?fw:pw;r.classList.add(h),wr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(jr),s.classList.remove(jr,h,u),this._isSliding=!1,a(Qa)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(uw)}_getActive(){return Z.findOne(_w,this._element)}_getItems(){return Z.find(R_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return pt()?e===ks?Ts:Ri:e===ks?Ri:Ts}_orderToDirection(e){return pt()?e===Ts?ks:uo:e===Ts?uo:ks}static jQueryInterface(e){return this.each(function(){const n=O_.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}};S.on(document,cw,Aw,function(t){const e=nn(this);if(!e||!e.classList.contains(S_))return;t.preventDefault();const n=Yc.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(rn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,lw,()=>{const t=Z.find(vw);for(const e of t)Yc.getOrCreateInstance(e)});gt(Yc);const ww="collapse",Cw="bs.collapse",Tr=`.${Cw}`,Tw=".data-api",Iw=`show${Tr}`,Sw=`shown${Tr}`,Nw=`hide${Tr}`,Rw=`hidden${Tr}`,Ow=`click${Tr}${Tw}`,Ka="show",xs="collapse",Gr="collapsing",kw="collapsed",Dw=`:scope .${xs} .${xs}`,Pw="collapse-horizontal",xw="width",Lw="height",Mw=".collapse.show, .collapse.collapsing",Ul='[data-bs-toggle="collapse"]',$w={parent:null,toggle:!0},Bw={parent:"(null|element)",toggle:"boolean"};class rr extends Pt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=Z.find(Ul);for(const i of s){const r=p_(i),o=Z.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return $w}static get DefaultType(){return Bw}static get NAME(){return ww}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Mw).filter(a=>a!==this._element).map(a=>rr.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,Iw).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(xs),this._element.classList.add(Gr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Gr),this._element.classList.add(xs,Ka),this._element.style[s]="",S.trigger(this._element,Sw)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,Nw).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,wr(this._element),this._element.classList.add(Gr),this._element.classList.remove(xs,Ka);for(const i of this._triggerArray){const r=nn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Gr),this._element.classList.add(xs),S.trigger(this._element,Rw)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ka)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Mn(e.parent),e}_getDimension(){return this._element.classList.contains(Pw)?xw:Lw}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Ul);for(const n of e){const s=nn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=Z.find(Dw,this._config.parent);return Z.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(kw,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=rr.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,Ow,Ul,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=p_(this),n=Z.find(e);for(const s of n)rr.getOrCreateInstance(s,{toggle:!1}).toggle()});gt(rr);const Vh="dropdown",Fw="bs.dropdown",ys=`.${Fw}`,Xc=".data-api",Uw="Escape",jh="Tab",Hw="ArrowUp",Gh="ArrowDown",Ww=2,Vw=`hide${ys}`,jw=`hidden${ys}`,Gw=`show${ys}`,Qw=`shown${ys}`,k_=`click${ys}${Xc}`,D_=`keydown${ys}${Xc}`,Kw=`keyup${ys}${Xc}`,Ds="show",zw="dropup",qw="dropend",Yw="dropstart",Xw="dropup-center",Jw="dropdown-center",ns='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Zw=`${ns}.${Ds}`,ho=".dropdown-menu",eC=".navbar",tC=".navbar-nav",nC=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",sC=pt()?"top-end":"top-start",iC=pt()?"top-start":"top-end",rC=pt()?"bottom-end":"bottom-start",oC=pt()?"bottom-start":"bottom-end",aC=pt()?"left-start":"right-start",lC=pt()?"right-start":"left-start",cC="top",uC="bottom",hC={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},dC={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Vt extends Pt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Z.next(this._element,ho)[0]||Z.prev(this._element,ho)[0]||Z.findOne(ho,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return hC}static get DefaultType(){return dC}static get NAME(){return Vh}toggle(){return this._isShown()?this.hide():this.show()}show(){if($n(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,Gw,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(tC))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",Co);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ds),this._element.classList.add(Ds),S.trigger(this._element,Qw,e)}}hide(){if($n(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,Vw,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",Co);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ds),this._element.classList.remove(Ds),this._element.setAttribute("aria-expanded","false"),rn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,jw,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!sn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Vh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof d_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:sn(this._config.reference)?e=Mn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Kc(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Ds)}_getPlacement(){const e=this._parent;if(e.classList.contains(qw))return aC;if(e.classList.contains(Yw))return lC;if(e.classList.contains(Xw))return cC;if(e.classList.contains(Jw))return uC;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(zw)?n?iC:sC:n?oC:rC}_detectNavbar(){return this._element.closest(eC)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(rn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=Z.find(nC,this._menu).filter(i=>pi(i));s.length&&zc(s,n,e===Gh,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Vt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===Ww||e.type==="keyup"&&e.key!==jh)return;const n=Z.find(Zw);for(const s of n){const i=Vt.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===jh||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===Uw,i=[Hw,Gh].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(ns)?this:Z.prev(this,ns)[0]||Z.next(this,ns)[0]||Z.findOne(ns,e.delegateTarget.parentNode),o=Vt.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,D_,ns,Vt.dataApiKeydownHandler);S.on(document,D_,ho,Vt.dataApiKeydownHandler);S.on(document,k_,Vt.clearMenus);S.on(document,Kw,Vt.clearMenus);S.on(document,k_,ns,function(t){t.preventDefault(),Vt.getOrCreateInstance(this).toggle()});gt(Vt);const Qh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Kh=".sticky-top",Qr="padding-right",zh="margin-right";class Hl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Qr,n=>n+e),this._setElementAttributes(Qh,Qr,n=>n+e),this._setElementAttributes(Kh,zh,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Qr),this._resetElementAttributes(Qh,Qr),this._resetElementAttributes(Kh,zh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&rn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=rn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}rn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(sn(e)){n(e);return}for(const s of Z.find(e,this._element))n(s)}}const P_="backdrop",fC="fade",qh="show",Yh=`mousedown.bs.${P_}`,pC={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_C={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class x_ extends Cr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return pC}static get DefaultType(){return _C}static get NAME(){return P_}show(e){if(!this._config.isVisible){Jt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&wr(n),n.classList.add(qh),this._emulateAnimation(()=>{Jt(e)})}hide(e){if(!this._config.isVisible){Jt(e);return}this._getElement().classList.remove(qh),this._emulateAnimation(()=>{this.dispose(),Jt(e)})}dispose(){this._isAppended&&(S.off(this._element,Yh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(fC),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Mn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,Yh,()=>{Jt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){A_(e,this._getElement(),this._config.isAnimated)}}const gC="focustrap",mC="bs.focustrap",Io=`.${mC}`,AC=`focusin${Io}`,vC=`keydown.tab${Io}`,EC="Tab",yC="forward",Xh="backward",bC={autofocus:!0,trapElement:null},wC={autofocus:"boolean",trapElement:"element"};class L_ extends Cr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return bC}static get DefaultType(){return wC}static get NAME(){return gC}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Io),S.on(document,AC,e=>this._handleFocusin(e)),S.on(document,vC,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Io))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=Z.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Xh?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===EC&&(this._lastTabNavDirection=e.shiftKey?Xh:yC)}}const CC="modal",TC="bs.modal",xt=`.${TC}`,IC=".data-api",SC="Escape",NC=`hide${xt}`,RC=`hidePrevented${xt}`,M_=`hidden${xt}`,$_=`show${xt}`,OC=`shown${xt}`,kC=`resize${xt}`,DC=`click.dismiss${xt}`,PC=`mousedown.dismiss${xt}`,xC=`keydown.dismiss${xt}`,LC=`click${xt}${IC}`,Jh="modal-open",MC="fade",Zh="show",za="modal-static",$C=".modal.show",BC=".modal-dialog",FC=".modal-body",UC='[data-bs-toggle="modal"]',HC={backdrop:!0,focus:!0,keyboard:!0},WC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ei extends Pt{constructor(e,n){super(e,n),this._dialog=Z.findOne(BC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Hl,this._addEventListeners()}static get Default(){return HC}static get DefaultType(){return WC}static get NAME(){return CC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,$_,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Jh),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,NC).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Zh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,xt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new x_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new L_({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Z.findOne(FC,this._dialog);n&&(n.scrollTop=0),wr(this._element),this._element.classList.add(Zh);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,OC,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,xC,e=>{if(e.key===SC){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,kC,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,PC,e=>{S.one(this._element,DC,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Jh),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,M_)})}_isAnimated(){return this._element.classList.contains(MC)}_triggerBackdropTransition(){if(S.trigger(this._element,RC).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(za)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(za),this._queueCallback(()=>{this._element.classList.remove(za),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=pt()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=pt()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=ei.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,LC,UC,function(t){const e=nn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,$_,i=>{i.defaultPrevented||S.one(e,M_,()=>{pi(this)&&this.focus()})});const n=Z.findOne($C);n&&ei.getInstance(n).hide(),ei.getOrCreateInstance(e).toggle(this)});ha(ei);gt(ei);const VC="offcanvas",jC="bs.offcanvas",fn=`.${jC}`,B_=".data-api",GC=`load${fn}${B_}`,QC="Escape",ed="show",td="showing",nd="hiding",KC="offcanvas-backdrop",F_=".offcanvas.show",zC=`show${fn}`,qC=`shown${fn}`,YC=`hide${fn}`,sd=`hidePrevented${fn}`,U_=`hidden${fn}`,XC=`resize${fn}`,JC=`click${fn}${B_}`,ZC=`keydown.dismiss${fn}`,eT='[data-bs-toggle="offcanvas"]',tT={backdrop:!0,keyboard:!0,scroll:!1},nT={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bn extends Pt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return tT}static get DefaultType(){return nT}static get NAME(){return VC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,zC,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Hl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(td);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ed),this._element.classList.remove(td),S.trigger(this._element,qC,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,YC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(nd),this._backdrop.hide();const n=()=>{this._element.classList.remove(ed,nd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Hl().reset(),S.trigger(this._element,U_)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,sd);return}this.hide()},n=Boolean(this._config.backdrop);return new x_({className:KC,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new L_({trapElement:this._element})}_addEventListeners(){S.on(this._element,ZC,e=>{if(e.key===QC){if(!this._config.keyboard){S.trigger(this._element,sd);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Bn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,JC,eT,function(t){const e=nn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),$n(this))return;S.one(e,U_,()=>{pi(this)&&this.focus()});const n=Z.findOne(F_);n&&n!==e&&Bn.getInstance(n).hide(),Bn.getOrCreateInstance(e).toggle(this)});S.on(window,GC,()=>{for(const t of Z.find(F_))Bn.getOrCreateInstance(t).show()});S.on(window,XC,()=>{for(const t of Z.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Bn.getOrCreateInstance(t).hide()});ha(Bn);gt(Bn);const sT=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),iT=/^aria-[\w-]*$/i,rT=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,oT=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,aT=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?sT.has(n)?Boolean(rT.test(t.nodeValue)||oT.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},H_={"*":["class","dir","id","lang","role",iT],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function lT(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)aT(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const cT="TemplateFactory",uT={allowList:H_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},hT={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},dT={entry:"(string|element|function|null)",selector:"(string|element)"};class fT extends Cr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return uT}static get DefaultType(){return hT}static get NAME(){return cT}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},dT)}_setContent(e,n,s){const i=Z.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(sn(n)){this._putElementInTemplate(Mn(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?lT(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const pT="tooltip",_T=new Set(["sanitize","allowList","sanitizeFn"]),qa="fade",gT="modal",Kr="show",mT=".tooltip-inner",id=`.${gT}`,rd="hide.bs.modal",Oi="hover",Ya="focus",AT="click",vT="manual",ET="hide",yT="hidden",bT="show",wT="shown",CT="inserted",TT="click",IT="focusin",ST="focusout",NT="mouseenter",RT="mouseleave",OT={AUTO:"auto",TOP:"top",RIGHT:pt()?"left":"right",BOTTOM:"bottom",LEFT:pt()?"right":"left"},kT={allowList:H_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},DT={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class gi extends Pt{constructor(e,n){if(typeof d_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return kT}static get DefaultType(){return DT}static get NAME(){return pT}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(id),rd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(bT)),s=(g_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(CT))),this._popper=this._createPopper(i),i.classList.add(Kr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",Co);const o=()=>{S.trigger(this._element,this.constructor.eventName(wT)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(ET)).defaultPrevented)return;if(this._getTipElement().classList.remove(Kr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",Co);this._activeTrigger[AT]=!1,this._activeTrigger[Ya]=!1,this._activeTrigger[Oi]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(yT)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(qa,Kr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=mb(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(qa),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new fT({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[mT]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(qa)}_isShown(){return this.tip&&this.tip.classList.contains(Kr)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=OT[n.toUpperCase()];return Kc(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(TT),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==vT){const s=n===Oi?this.constructor.eventName(NT):this.constructor.eventName(IT),i=n===Oi?this.constructor.eventName(RT):this.constructor.eventName(ST);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Ya:Oi]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Ya:Oi]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(id),rd,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=rn.getDataAttributes(this._element);for(const s of Object.keys(n))_T.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Mn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=gi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}gt(gi);const PT="popover",xT=".popover-header",LT=".popover-body",MT={...gi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},$T={...gi.DefaultType,content:"(null|string|element|function)"};class Jc extends gi{static get Default(){return MT}static get DefaultType(){return $T}static get NAME(){return PT}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[xT]:this._getTitle(),[LT]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Jc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}gt(Jc);const BT="scrollspy",FT="bs.scrollspy",Zc=`.${FT}`,UT=".data-api",HT=`activate${Zc}`,od=`click${Zc}`,WT=`load${Zc}${UT}`,VT="dropdown-item",Is="active",jT='[data-bs-spy="scroll"]',Xa="[href]",GT=".nav, .list-group",ad=".nav-link",QT=".nav-item",KT=".list-group-item",zT=`${ad}, ${QT} > ${ad}, ${KT}`,qT=".dropdown",YT=".dropdown-toggle",XT={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},JT={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class pa extends Pt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return XT}static get DefaultType(){return JT}static get NAME(){return BT}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Mn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,od),S.on(this._config.target,od,Xa,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Z.find(Xa,this._config.target);for(const n of e){if(!n.hash||$n(n))continue;const s=Z.findOne(n.hash,this._element);pi(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Is),this._activateParents(e),S.trigger(this._element,HT,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(VT)){Z.findOne(YT,e.closest(qT)).classList.add(Is);return}for(const n of Z.parents(e,GT))for(const s of Z.prev(n,zT))s.classList.add(Is)}_clearActiveClass(e){e.classList.remove(Is);const n=Z.find(`${Xa}.${Is}`,e);for(const s of n)s.classList.remove(Is)}static jQueryInterface(e){return this.each(function(){const n=pa.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,WT,()=>{for(const t of Z.find(jT))pa.getOrCreateInstance(t)});gt(pa);const ZT="tab",eI="bs.tab",bs=`.${eI}`,tI=`hide${bs}`,nI=`hidden${bs}`,sI=`show${bs}`,iI=`shown${bs}`,rI=`click${bs}`,oI=`keydown${bs}`,aI=`load${bs}`,lI="ArrowLeft",ld="ArrowRight",cI="ArrowUp",cd="ArrowDown",ss="active",ud="fade",Ja="show",uI="dropdown",hI=".dropdown-toggle",dI=".dropdown-menu",Za=":not(.dropdown-toggle)",fI='.list-group, .nav, [role="tablist"]',pI=".nav-item, .list-group-item",_I=`.nav-link${Za}, .list-group-item${Za}, [role="tab"]${Za}`,W_='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',el=`${_I}, ${W_}`,gI=`.${ss}[data-bs-toggle="tab"], .${ss}[data-bs-toggle="pill"], .${ss}[data-bs-toggle="list"]`;class ti extends Pt{constructor(e){super(e),this._parent=this._element.closest(fI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,oI,n=>this._keydown(n)))}static get NAME(){return ZT}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,tI,{relatedTarget:e}):null;S.trigger(e,sI,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ss),this._activate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Ja);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,iI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(ud))}_deactivate(e,n){if(!e)return;e.classList.remove(ss),e.blur(),this._deactivate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Ja);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,nI,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(ud))}_keydown(e){if(![lI,ld,cI,cd].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[ld,cd].includes(e.key),s=zc(this._getChildren().filter(i=>!$n(i)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),ti.getOrCreateInstance(s).show())}_getChildren(){return Z.find(el,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=nn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(uI))return;const i=(r,o)=>{const a=Z.findOne(r,s);a&&a.classList.toggle(o,n)};i(hI,ss),i(dI,Ja),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ss)}_getInnerElement(e){return e.matches(el)?e:Z.findOne(el,e)}_getOuterElement(e){return e.closest(pI)||e}static jQueryInterface(e){return this.each(function(){const n=ti.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,rI,W_,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!$n(this)&&ti.getOrCreateInstance(this).show()});S.on(window,aI,()=>{for(const t of Z.find(gI))ti.getOrCreateInstance(t)});gt(ti);const mI="toast",AI="bs.toast",Gn=`.${AI}`,vI=`mouseover${Gn}`,EI=`mouseout${Gn}`,yI=`focusin${Gn}`,bI=`focusout${Gn}`,wI=`hide${Gn}`,CI=`hidden${Gn}`,TI=`show${Gn}`,II=`shown${Gn}`,SI="fade",hd="hide",zr="show",qr="showing",NI={animation:"boolean",autohide:"boolean",delay:"number"},RI={animation:!0,autohide:!0,delay:5e3};class _a extends Pt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return RI}static get DefaultType(){return NI}static get NAME(){return mI}show(){if(S.trigger(this._element,TI).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(SI);const n=()=>{this._element.classList.remove(qr),S.trigger(this._element,II),this._maybeScheduleHide()};this._element.classList.remove(hd),wr(this._element),this._element.classList.add(zr,qr),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,wI).defaultPrevented)return;const n=()=>{this._element.classList.add(hd),this._element.classList.remove(qr,zr),S.trigger(this._element,CI)};this._element.classList.add(qr),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(zr),super.dispose()}isShown(){return this._element.classList.contains(zr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,vI,e=>this._onInteraction(e,!0)),S.on(this._element,EI,e=>this._onInteraction(e,!1)),S.on(this._element,yI,e=>this._onInteraction(e,!0)),S.on(this._element,bI,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=_a.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ha(_a);gt(_a);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function OI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function tl(t,e){const n={};for(const s in e){const i=e[s];n[s]=kt(i)?i.map(t):t(i)}return n}const ji=()=>{},kt=Array.isArray,kI=/\/$/,DI=t=>t.replace(kI,"");function nl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=MI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function PI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ni(e.matched[s],n.matched[i])&&V_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ni(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LI(t[n],e[n]))return!1;return!0}function LI(t,e){return kt(t)?fd(t,e):kt(e)?fd(e,t):t===e}function fd(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function MI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function $I(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DI(t)}const BI=/^[^#]+#/;function FI(t,e){return t.replace(BI,"#")+e}function UI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ga=()=>({left:window.pageXOffset,top:window.pageYOffset});function HI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=UI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pd(t,e){return(history.state?history.state.position-e:-1)+t}const Wl=new Map;function WI(t,e){Wl.set(t,e)}function VI(t){const e=Wl.get(t);return Wl.delete(t),e}let jI=()=>location.protocol+"//"+location.host;function j_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),dd(l,"")}return dd(n,t)+s+i}function GI(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=j_(t,location),g=n.value,m=e.value;let y=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}y=m?d.position-m.position:0}else s(p);i.forEach(v=>{v(n.value,g,{delta:y,type:or.pop,direction:y?y>0?Gi.forward:Gi.back:Gi.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:ga()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function _d(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ga():null}}function QI(t){const{history:e,location:n}=window,s={value:j_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:jI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,_d(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:ga()});r(u.current,u,!0);const h=pe({},_d(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function KI(t){t=$I(t);const e=QI(t),n=GI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:FI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function zI(t){return typeof t=="string"||t&&typeof t=="object"}function G_(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q_=Symbol("");var gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gd||(gd={}));function si(t,e){return pe(new Error,{type:t,[Q_]:!0},e)}function Yt(t,e){return t instanceof Error&&Q_ in t&&(e==null||!!(t.type&e))}const md="[^/]+?",qI={sensitive:!1,strict:!1,start:!0,end:!0},YI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=pe({},qI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(YI,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:y,regexp:v}=d;r.push({name:g,repeatable:m,optional:y});const C=v||md;if(C!==md){p+=10;try{new RegExp(`(${C})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+N.message)}}let b=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),i+=b,p+=20,y&&(p+=-8),m&&(p+=-20),C===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:y}=p,v=g in c?c[g]:"";if(kt(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=kt(v)?v.join("/"):v;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function JI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ZI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=JI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ad(s))return 1;if(Ad(i))return-1}return i.length-s.length}function Ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eS={type:0,value:""},tS=/[a-zA-Z0-9_]/;function nS(t){if(!t)return[[]];if(t==="/")return[[eS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:tS.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function sS(t,e,n){const s=XI(nS(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function iS(t,e){const n=[],s=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,g=rS(u);g.aliasOf=d&&d.record;const m=yd(e,u),y=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of b)y.push(pe({},g,{components:d?d.record.components:g.components,path:N,aliasOf:d?d.record:g}))}let v,C;for(const b of y){const{path:N}=b;if(h&&N[0]!=="/"){const U=h.record.path,V=U[U.length-1]==="/"?"":"/";b.path=h.record.path+(N&&V+N)}if(v=sS(b,h,m),d?d.alias.push(v):(C=C||v,C!==v&&C.alias.push(v),p&&u.name&&!Ed(v)&&o(u.name)),g.children){const U=g.children;for(let V=0;V<U.length;V++)r(U[V],v,d&&d.children[V])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return C?()=>{o(C)}:ji}function o(u){if(G_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ZI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!K_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ed(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw si(1,{location:u});m=d.record.name,p=pe(vd(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&vd(u.params,d.keys.map(C=>C.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(C=>C.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw si(1,{location:u,currentLocation:h});m=d.record.name,p=pe({},h.params,u.params),g=d.stringify(p)}const y=[];let v=d;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:y,meta:aS(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function vd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aS(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function yd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function K_(t,e){return e.children.some(n=>n===t||K_(t,n))}const z_=/#/g,lS=/&/g,cS=/\//g,uS=/=/g,hS=/\?/g,q_=/\+/g,dS=/%5B/g,fS=/%5D/g,Y_=/%5E/g,pS=/%60/g,X_=/%7B/g,_S=/%7C/g,J_=/%7D/g,gS=/%20/g;function eu(t){return encodeURI(""+t).replace(_S,"|").replace(dS,"[").replace(fS,"]")}function mS(t){return eu(t).replace(X_,"{").replace(J_,"}").replace(Y_,"^")}function Vl(t){return eu(t).replace(q_,"%2B").replace(gS,"+").replace(z_,"%23").replace(lS,"%26").replace(pS,"`").replace(X_,"{").replace(J_,"}").replace(Y_,"^")}function AS(t){return Vl(t).replace(uS,"%3D")}function vS(t){return eu(t).replace(z_,"%23").replace(hS,"%3F")}function ES(t){return t==null?"":vS(t).replace(cS,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(q_," "),o=r.indexOf("="),a=So(o<0?r:r.slice(0,o)),l=o<0?null:So(r.slice(o+1));if(a in e){let c=e[a];kt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bd(t){let e="";for(let n in t){const s=t[n];if(n=AS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(r=>r&&Vl(r)):[s&&Vl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function bS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Z_=Symbol(""),wd=Symbol(""),tu=Symbol(""),eg=Symbol(""),jl=Symbol("");function ki(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wS(t,e,n){const s=()=>{t[e].delete(n)};Sc(s),Cp(s),wp(()=>{t[e].add(n)}),t[e].add(n)}function ML(t){const e=Ht(Z_,{}).value;e&&wS(e,"leaveGuards",t)}function bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(si(4,{from:n,to:e})):h instanceof Error?a(h):zI(h)?a(si(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function sl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(CS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=OI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,r,o)()}))}}return i}function CS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cd(t){const e=Ht(tu),n=Ht(eg),s=ht(()=>e.resolve(ut(t.to))),i=ht(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ni.bind(null,u));if(d>-1)return d;const p=Td(l[c-2]);return c>1&&Td(u)===p&&h[h.length-1].path!==p?h.findIndex(ni.bind(null,l[c-2])):d}),r=ht(()=>i.value>-1&&NS(n.params,s.value.params)),o=ht(()=>i.value>-1&&i.value===n.matched.length-1&&V_(n.params,s.value.params));function a(l={}){return SS(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(ji):Promise.resolve()}return{route:s,href:ht(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const TS=bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cd,setup(t,{slots:e}){const n=yr(Cd(t)),{options:s}=Ht(tu),i=ht(()=>({[Id(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Hp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),IS=TS;function SS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!kt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,RS=bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(jl),i=ht(()=>t.route||s.value),r=Ht(wd,0),o=ht(()=>{let c=ut(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ht(()=>i.value.matched[o.value]);so(wd,ht(()=>o.value+1)),so(Z_,a),so(jl,i);const l=yt();return io(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ni(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sd(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,y=Hp(d,pe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Sd(n.default,{Component:y,route:c})||y}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OS=RS;function kS(t){const e=iS(t.routes,t),n=t.parseQuery||yS,s=t.stringifyQuery||bd,i=t.history,r=ki(),o=ki(),a=ki(),l=Cv(vn);let c=vn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,w=>""+w),h=tl.bind(null,ES),d=tl.bind(null,So);function p(w,x){let P,F;return G_(w)?(P=e.getRecordMatcher(w),F=x):F=w,e.addRoute(F,P)}function g(w){const x=e.getRecordMatcher(w);x&&e.removeRoute(x)}function m(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function v(w,x){if(x=pe({},x||l.value),typeof w=="string"){const f=nl(n,w,x.path),_=e.resolve({path:f.path},x),A=i.createHref(f.fullPath);return pe(f,_,{params:d(_.params),hash:So(f.hash),redirectedFrom:void 0,href:A})}let P;if("path"in w)P=pe({},w,{path:nl(n,w.path,x.path).path});else{const f=pe({},w.params);for(const _ in f)f[_]==null&&delete f[_];P=pe({},w,{params:h(w.params)}),x.params=h(x.params)}const F=e.resolve(P,x),se=w.hash||"";F.params=u(d(F.params));const be=PI(s,pe({},w,{hash:mS(se),path:F.path})),X=i.createHref(be);return pe({fullPath:be,hash:se,query:s===bd?bS(w.query):w.query||{}},F,{redirectedFrom:void 0,href:X})}function C(w){return typeof w=="string"?nl(n,w,l.value.path):pe({},w)}function b(w,x){if(c!==w)return si(8,{from:x,to:w})}function N(w){return Y(w)}function U(w){return N(pe(C(w),{replace:!0}))}function V(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let F=typeof P=="function"?P(w):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=C(F):{path:F},F.params={}),pe({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function Y(w,x){const P=c=v(w),F=l.value,se=w.state,be=w.force,X=w.replace===!0,f=V(P);if(f)return Y(pe(C(f),{state:typeof f=="object"?pe({},se,f.state):se,force:be,replace:X}),x||P);const _=P;_.redirectedFrom=x;let A;return!be&&xI(s,F,P)&&(A=si(16,{to:_,from:F}),lt(F,F,!0,!1)),(A?Promise.resolve(A):q(_,F)).catch(E=>Yt(E)?Yt(E,2)?E:De(E):te(E,_,F)).then(E=>{if(E){if(Yt(E,2))return Y(pe({replace:X},C(E.to),{state:typeof E.to=="object"?pe({},se,E.to.state):se,force:be}),x||_)}else E=ae(_,F,!0,X,se);return G(_,F,E),E})}function B(w,x){const P=b(w,x);return P?Promise.reject(P):Promise.resolve()}function q(w,x){let P;const[F,se,be]=DS(w,x);P=sl(F.reverse(),"beforeRouteLeave",w,x);for(const f of F)f.leaveGuards.forEach(_=>{P.push(bn(_,w,x))});const X=B.bind(null,w,x);return P.push(X),Ss(P).then(()=>{P=[];for(const f of r.list())P.push(bn(f,w,x));return P.push(X),Ss(P)}).then(()=>{P=sl(se,"beforeRouteUpdate",w,x);for(const f of se)f.updateGuards.forEach(_=>{P.push(bn(_,w,x))});return P.push(X),Ss(P)}).then(()=>{P=[];for(const f of w.matched)if(f.beforeEnter&&!x.matched.includes(f))if(kt(f.beforeEnter))for(const _ of f.beforeEnter)P.push(bn(_,w,x));else P.push(bn(f.beforeEnter,w,x));return P.push(X),Ss(P)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),P=sl(be,"beforeRouteEnter",w,x),P.push(X),Ss(P))).then(()=>{P=[];for(const f of o.list())P.push(bn(f,w,x));return P.push(X),Ss(P)}).catch(f=>Yt(f,8)?f:Promise.reject(f))}function G(w,x,P){for(const F of a.list())F(w,x,P)}function ae(w,x,P,F,se){const be=b(w,x);if(be)return be;const X=x===vn,f=Ps?history.state:{};P&&(F||X?i.replace(w.fullPath,pe({scroll:X&&f&&f.scroll},se)):i.push(w.fullPath,se)),l.value=w,lt(w,x,P,X),De()}let _e;function ge(){_e||(_e=i.listen((w,x,P)=>{if(!At.listening)return;const F=v(w),se=V(F);if(se){Y(pe(se,{replace:!0}),F).catch(ji);return}c=F;const be=l.value;Ps&&WI(pd(be.fullPath,P.delta),ga()),q(F,be).catch(X=>Yt(X,12)?X:Yt(X,2)?(Y(X.to,F).then(f=>{Yt(f,20)&&!P.delta&&P.type===or.pop&&i.go(-1,!1)}).catch(ji),Promise.reject()):(P.delta&&i.go(-P.delta,!1),te(X,F,be))).then(X=>{X=X||ae(F,be,!1),X&&(P.delta&&!Yt(X,8)?i.go(-P.delta,!1):P.type===or.pop&&Yt(X,20)&&i.go(-1,!1)),G(F,be,X)}).catch(ji)}))}let Ue=ki(),nt=ki(),oe;function te(w,x,P){De(w);const F=nt.list();return F.length?F.forEach(se=>se(w,x,P)):console.error(w),Promise.reject(w)}function le(){return oe&&l.value!==vn?Promise.resolve():new Promise((w,x)=>{Ue.add([w,x])})}function De(w){return oe||(oe=!w,ge(),Ue.list().forEach(([x,P])=>w?P(w):x()),Ue.reset()),w}function lt(w,x,P,F){const{scrollBehavior:se}=t;if(!Ps||!se)return Promise.resolve();const be=!P&&VI(pd(w.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return dp().then(()=>se(w,x,be)).then(X=>X&&HI(X)).catch(X=>te(X,w,x))}const Ge=w=>i.go(w);let Oe;const mt=new Set,At={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:y,getRoutes:m,resolve:v,options:t,push:N,replace:U,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:le,install(w){const x=this;w.component("RouterLink",IS),w.component("RouterView",OS),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Ps&&!Oe&&l.value===vn&&(Oe=!0,N(i.location).catch(se=>{}));const P={};for(const se in vn)P[se]=ht(()=>l.value[se]);w.provide(tu,x),w.provide(eg,yr(P)),w.provide(jl,l);const F=w.unmount;mt.add(w),w.unmount=function(){mt.delete(w),mt.size<1&&(c=vn,_e&&_e(),_e=null,l.value=vn,Oe=!1,oe=!1),F()}}};return At}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function DS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ni(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ni(c,l))||i.push(l))}return[n,s,i]}const PS="modulepreload",xS=function(t){return"/MyPortfolio/"+t},Nd={},Ns=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=xS(r),r in Nd)return;Nd[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":PS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const LS="/MyPortfolio/assets/TravelMaker_Cover-462d72d7.png",MS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAGkCAYAAAAYDBLWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsOSURBVHgB7d09j5VpGcDxG0Mp8wFkKxIiZzsTF7YzarY04my5L7DturIdmaAl4EQqQTZ2vkRLxkks2dXY7YCJHfABGD/AwR55MGZjVrLzL+bAM+f3SyYzxZNTTPU/V67nvo+dOr14OgAAgAP52gAAAA5MQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAILjA2CNvXnu7Lj00YdjsTgzNjY2xmF7vL8/9vbuj5u3bj//G4D5OXbq9OLpAFhDH//kx+PSs5+X5eq17fGb3/1+ADAvVjiAtfSy43nys59uPZ+AAzAvJtDA2nnt5Mnxt7/eHa+CaY3jO999awAwHybQwNo5d+6N8aqYYt4UGmBeBDSwdl5fnBmvkpMnvzEAmA8BDaydjROHf9oGAEeXgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIXKQCHAkbJ06MN988O976/vfG2bNnx8bGiWc/8z9tY7lcjsf7/xwPHz4aO3/aHZ/v3RsAvFwCGpi9Dy689/xa7qMQzF9lurnw5q3b487O7gDg5RDQwGxNt/j9YvvaOLeGN/lNAX312s/H8smTAcBqCWhglqZ4/uMffvv897p68PDReOfdCyIaYMW8RAjMjnj+j+lK8l9/cmsAsFoCGpidad953eP5v6b1lY+f/T8AWB0BDczKFIxvb54ffOHihfefn0ICwGoIaGBWphM3+F/TkX0fXHx/ALAaXiIEZmMKxX/8fW/wZcvlk/Gtb58bABw+E2hgNtbxuLqDmr5c2AsHWA0BDczG62fODF5ssVgMAA6fgAZmY5qy8mIbG18fABw+O9DAbNzYvj42ncBxZF3euuKKcmAWTKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIjg8AVuLy1pVxZ2f3wM/f2L4+NjfPH/j5uX8+wFyYQAMAQCCgAQAgENAAABAIaAAACAQ0AAAEAhoAAAIBDQAAgYAGAIBAQAMAQCCgAQAgENAAABAcO3V68XQAzMCN7etjc/P84Gi6vHVl3NnZHQCvOhNoAAAIBDQAAAQCGgAAAgENAACBgAYAgEBAAwBAIKABACAQ0AAAEAhoAAAIBDQAAAQCGgAAguMDgCPh8taVcWdndwBwuEyggdl4vL8/eLHl8l8DgMMnoIHZePDo0eDF9vcfDwAOn4AGZmNv797g/3v8eH88eOgLBsAqCGhgNpbLJyL6Bfbu3R8ArIaABmbll7/6ZPBlN2/dHgCshoAGZmWaQH/66WeDL0zx7AVLgNU5dur04ukAmJGNjRPjz7s747XXTo51N+09/+CHmwOA1TGBBmZn2oV+572Lz1+cW2dTPL/z7oUBwGoJaGCWppWFdY7o6cKUKZ6XT54MAFbLCgcwe29v/mhc+ujDtVjpmL4wXL2+Pe7aAwd4aQQ0cGRMIX3u7Bvj9cU3x2KxGEfBcrkc+8+m7Z/v3R93P/uLY/wAXgECGgAAAjvQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAIGABgCAQEADAEAgoAEAIBDQAAAQCGgAAAgENAAABAIaAAACAQ0AAMG/AZesDFKdWOECAAAAAElFTkSuQmCC",$S="/MyPortfolio/assets/PersonalityQuiz_Cover-02ac9aa1.png";const mi=t=>(mp("data-v-a0ec966e"),t=t(),Ap(),t),BS={class:"bg-black text-bg-dark m-0 container-fluid"},FS={class:"fill-height row mx-0 justify-content-center align-items-center"},US={class:"banner col-lg-5 col-md-8 col-12 ps-0 pe-0"},HS={class:"row mx-0 mt-md-5 mt-lg-0"},WS=mi(()=>L("div",{class:"col-12 text-center"},[L("p",{class:"display-2",id:"myname"},"Frank Chung")],-1)),VS={class:"col-12 text-center"},jS={class:"display-4",id:"jobs"},GS={class:"row mx-0 mt-4 mt-md-5 justify-content-center"},QS={class:"col-lg-5 col-12 mb-3 mt-md-5 mt-lg-0"},KS=mi(()=>L("button",{class:"btn btn-outline-warning btn-lg cursorFix"}," More Frank ",-1)),zS={class:"col-lg-5 col-12 mb-3 d-grid"},qS=mi(()=>L("button",{class:"btn btn-outline-light btn-lg cursorFix"}," Resume ",-1)),YS={class:"carousel col-lg-4 col-md-8 col-12 mb-md-5 mb-lg-0"},XS={id:"carouselExampleFade",class:"carousel slide","data-bs-ride":"carousel"},JS={class:"carousel-inner"},ZS={class:"carousel-item active"},eN=mi(()=>L("div",{class:"card bg-light text-center"},[L("img",{src:LS,class:"card-img",alt:"..."}),L("div",{class:"card-img-overlay"},[L("h2",{class:"card-title"},"TravelMaker"),L("h4",{class:"card-text"},"幫助旅行者快速找到替代方案的旅遊軟體"),L("h6",{class:"card-text"},"Product Manager, UX Designer")])],-1)),tN={class:"carousel-item"},nN=mi(()=>L("div",{class:"card bg-light text-center"},[L("img",{src:MS,class:"card-img",alt:"..."}),L("div",{class:"card-img-overlay"},[L("h2",{class:"card-title"},"影相設計"),L("h4",{class:"card-text"},"提供模組化影像製作方案的選購平台"),L("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1)),sN={class:"carousel-item"},iN=mi(()=>L("div",{class:"card bg-light text-center"},[L("img",{src:$S,class:"card-img",alt:"..."}),L("div",{class:"card-img-overlay"},[L("h2",{class:"card-title"},"學習風格測驗"),L("h4",{class:"card-text"},"均一教育平台的心理測驗互動式網頁"),L("h6",{class:"card-text"},"Product Designer, Frontend Developer")])],-1)),rN=Dc('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" data-v-a0ec966e><span class="carousel-control-prev-icon" aria-hidden="true" data-v-a0ec966e></span><span class="visually-hidden" data-v-a0ec966e>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" data-v-a0ec966e><span class="carousel-control-next-icon" aria-hidden="true" data-v-a0ec966e></span><span class="visually-hidden" data-v-a0ec966e>Next</span></button>',2),oN={__name:"NewHome",setup(t){const e=yt("Product Manager"),n=["Product Manager","Frontend Engineer","UX Designer","Frontend Designer"];let s=0;return Hv(()=>{setInterval(()=>{s=(s+1)%n.length,e.value=n[s]},4e3)}),(i,r)=>{const o=Nc("router-link");return ln(),Ks("div",BS,[L("div",FS,[L("section",US,[L("div",HS,[WS,L("div",VS,[L("p",jS,UA(e.value),1)])]),L("div",GS,[L("div",QS,[Ee(o,{to:"/MyPortfolio/About",class:"d-grid text-decoration-none"},{default:Ft(()=>[KS]),_:1})]),L("div",zS,[Ee(o,{to:"/MyPortfolio/Resume",class:"d-grid text-decoration-none"},{default:Ft(()=>[qS]),_:1})])])]),L("section",YS,[L("div",XS,[L("div",JS,[L("div",ZS,[Ee(o,{to:"/MyPortfolio/Work/TravelMaker"},{default:Ft(()=>[eN]),_:1})]),L("div",tN,[Ee(o,{to:"/MyPortfolio/Work/InshoneDesign"},{default:Ft(()=>[nN]),_:1})]),L("div",sN,[Ee(o,{to:"/MyPortfolio/Work/PersonalityQuiz"},{default:Ft(()=>[iN]),_:1})])]),rN])])])])}}},aN=xc(oN,[["__scopeId","data-v-a0ec966e"]]),lN={__name:"Home",setup(t){return(e,n)=>(ln(),kc(aN))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const O=function(t,e){if(!t)throw Ai(e)},Ai=function(t){return new Error("Firebase Database ("+tg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cN=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new uN;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=ng(t);return nu.encodeByteArray(e,!0)},No=function(t){return sg(t).replace(/\./g,"")},Ro=function(t){try{return nu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){return ig(void 0,t)}function ig(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dN(n)||(t[n]=ig(t[n],e[n]));return t}function dN(t){return t!=="__proto__"}/**
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
 */function fN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pN=()=>fN().__FIREBASE_DEFAULTS__,_N=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ro(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return pN()||_N()||gN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rg=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},og=t=>{const e=rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},mN=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},ag=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function AN(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EN(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ug(){return tg.NODE_ADMIN===!0}function yN(){try{return typeof indexedDB=="object"}catch{return!1}}function bN(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wN,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?CN(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function CN(t,e){return t.replace(TN,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const TN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ar(Ro(r[0])||""),n=ar(Ro(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},IN=function(t){const e=hg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SN=function(t){const e=hg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rd(r)&&Rd(o)){if(!ko(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function RN(t,e){const n=new ON(t,e);return n.subscribe.bind(n)}class ON{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=il),i.error===void 0&&(i.error=il),i.complete===void 0&&(i.complete=il);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}function iu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},va=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class PN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Aa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LN(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xN(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xN(t){return t===qn?void 0:t}function LN(t){return t.instantiationMode==="EAGER"}/**
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
 */class MN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const $N={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},BN=me.INFO,FN={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},UN=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=FN[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=BN,this._logHandler=UN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$N[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const HN=(t,e)=>e.some(n=>t instanceof n);let Od,kd;function WN(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VN(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,Ql=new WeakMap,fg=new WeakMap,rl=new WeakMap,ou=new WeakMap;function jN(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(On(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),ou.set(e,t),e}function GN(t){if(Ql.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ql.set(t,e)}let Kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QN(t){Kl=t(Kl)}function KN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ol(this),e,...n);return fg.set(s,e.sort?e.sort():[e]),On(s)}:VN().includes(t)?function(...e){return t.apply(ol(this),e),On(dg.get(this))}:function(...e){return On(t.apply(ol(this),e))}}function zN(t){return typeof t=="function"?KN(t):(t instanceof IDBTransaction&&GN(t),HN(t,WN())?new Proxy(t,Kl):t)}function On(t){if(t instanceof IDBRequest)return jN(t);if(rl.has(t))return rl.get(t);const e=zN(t);return e!==t&&(rl.set(t,e),ou.set(e,t)),e}const ol=t=>ou.get(t);function qN(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=On(o);return s&&o.addEventListener("upgradeneeded",l=>{s(On(o.result),l.oldVersion,l.newVersion,On(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const YN=["get","getKey","getAll","getAllKeys","count"],XN=["put","add","delete","clear"],al=new Map;function Dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(al.get(e))return al.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=XN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||YN.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return al.set(e,r),r}QN(t=>({...t,get:(e,n,s)=>Dd(e,n)||t.get(e,n,s),has:(e,n)=>!!Dd(e,n)||t.has(e,n)}));/**
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
 */class JN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZN(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ZN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zl="@firebase/app",Pd="0.9.4";/**
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
 */const ps=new ru("@firebase/app"),eR="@firebase/app-compat",tR="@firebase/analytics-compat",nR="@firebase/analytics",sR="@firebase/app-check-compat",iR="@firebase/app-check",rR="@firebase/auth",oR="@firebase/auth-compat",aR="@firebase/database",lR="@firebase/database-compat",cR="@firebase/functions",uR="@firebase/functions-compat",hR="@firebase/installations",dR="@firebase/installations-compat",fR="@firebase/messaging",pR="@firebase/messaging-compat",_R="@firebase/performance",gR="@firebase/performance-compat",mR="@firebase/remote-config",AR="@firebase/remote-config-compat",vR="@firebase/storage",ER="@firebase/storage-compat",yR="@firebase/firestore",bR="@firebase/firestore-compat",wR="firebase",CR="9.17.2";/**
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
 */const ql="[DEFAULT]",TR={[zl]:"fire-core",[eR]:"fire-core-compat",[nR]:"fire-analytics",[tR]:"fire-analytics-compat",[iR]:"fire-app-check",[sR]:"fire-app-check-compat",[rR]:"fire-auth",[oR]:"fire-auth-compat",[aR]:"fire-rtdb",[lR]:"fire-rtdb-compat",[cR]:"fire-fn",[uR]:"fire-fn-compat",[hR]:"fire-iid",[dR]:"fire-iid-compat",[fR]:"fire-fcm",[pR]:"fire-fcm-compat",[_R]:"fire-perf",[gR]:"fire-perf-compat",[mR]:"fire-rc",[AR]:"fire-rc-compat",[vR]:"fire-gcs",[ER]:"fire-gcs-compat",[yR]:"fire-fst",[bR]:"fire-fst-compat","fire-js":"fire-js",[wR]:"fire-js-all"};/**
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
 */const Do=new Map,Yl=new Map;function IR(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Yl.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;Yl.set(e,t);for(const n of Do.values())IR(n,t);return!0}function Ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new Ir("app","Firebase",SR);/**
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
 */class NR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=CR;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ql,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=mN()),!n)throw kn.create("no-options");const r=Do.get(i);if(r){if(ko(n,r.options)&&ko(s,r.config))return r;throw kn.create("duplicate-app",{appName:i})}const o=new MN(i);for(const l of Yl.values())o.addComponent(l);const a=new NR(n,s,o);return Do.set(i,a),a}function au(t=ql){const e=Do.get(t);if(!e&&t===ql)return pg();if(!e)throw kn.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let i=(s=TR[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ps.warn(a.join(" "));return}_s(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RR="firebase-heartbeat-database",OR=1,lr="firebase-heartbeat-store";let ll=null;function _g(){return ll||(ll=qN(RR,OR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),ll}async function kR(t){try{return(await _g()).transaction(lr).objectStore(lr).get(gg(t))}catch(e){if(e instanceof pn)ps.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ps.warn(n.message)}}}async function xd(t,e){try{const s=(await _g()).transaction(lr,"readwrite");return await s.objectStore(lr).put(e,gg(t)),s.done}catch(n){if(n instanceof pn)ps.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ps.warn(s.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DR=1024,PR=30*24*60*60*1e3;class xR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=PR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ld(),{heartbeatsToSend:n,unsentEntries:s}=LR(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ld(){return new Date().toISOString().substring(0,10)}function LR(t,e=DR){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Md(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class MR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yN()?bN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $R(t){_s(new Fn("platform-logger",e=>new JN(e),"PRIVATE")),_s(new Fn("heartbeat",e=>new xR(e),"PRIVATE")),jt(zl,Pd,t),jt(zl,Pd,"esm2017"),jt("fire-js","")}$R("");const $d="@firebase/database",Bd="0.14.4";/**
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
 */let mg="";function BR(t){mg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ar(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FR(e)}}catch{}return new UR},is=Ag("localStorage"),Xl=Ag("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new ru("@firebase/database"),HR=function(){let t=1;return function(){return t++}}(),vg=function(t){const e=DN(t),n=new NN;n.update(e);const s=n.digest();return nu.encodeByteArray(s)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Sr.apply(null,s):typeof s=="object"?e+=Pe(s):e+=s,e+=" "}return e};let cs=null,Fd=!0;const WR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hs.logLevel=me.VERBOSE,cs=Hs.log.bind(Hs),e&&Xl.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,Xl.remove("logging_enabled"))},He=function(...t){if(Fd===!0&&(Fd=!1,cs===null&&Xl.get("logging_enabled")===!0&&WR(!0)),cs){const e=Sr.apply(null,t);cs(e)}},Nr=function(t){return function(...e){He(t,...e)}},Jl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);Hs.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw Hs.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+Sr(...t);Hs.warn(e)},VR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",gs="[MAX_NAME]",yi=function(t,e){if(t===e)return 0;if(t===ri||e===gs)return-1;if(e===ri||t===gs)return 1;{const n=Ud(t),s=Ud(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},GR=function(t,e){return t===e?0:t<e?-1:1},Di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},lu=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Pe(e[s]),n+=":",n+=lu(t[e[s]]);return n+="}",n},yg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bg=function(t){O(!Eg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},QR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const qR=new RegExp("^-?(0*)\\d{1,10}$"),YR=-2147483648,XR=2147483647,Ud=function(t){if(qR.test(t)){const e=Number(t);if(e>=YR&&e<=XR)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},JR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ZR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class Ws{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ws.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="5",wg="v",Cg="s",Tg="r",Ig="f",Sg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ng="ls",Rg="p",Zl="ac",Og="websocket",kg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function t0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Og)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);t0(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl={},ul={};function uu(t){const e=t.toString();return cl[e]||(cl[e]=new n0),cl[e]}function s0(t,e){const n=t.toString();return ul[n]||(ul[n]=e()),ul[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="start",r0="close",o0="pLPCommand",a0="pRTLPCB",xg="id",Lg="pw",Mg="ser",l0="cb",c0="seg",u0="ts",h0="d",d0="dframe",$g=1870,Bg=30,f0=$g-Bg,p0=25e3,_0=3e4;class Ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(e),this.stats_=uu(n),this.urlFn=l=>(this.appCheckToken&&(l[Zl]=this.appCheckToken),Pg(n,kg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new i0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_0)),jR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hd)this.id=a,this.password=l;else if(o===r0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hd]="t",s[Mg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[l0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wg]=cu,this.transportSessionId&&(s[Cg]=this.transportSessionId),this.lastSessionId&&(s[Ng]=this.lastSessionId),this.applicationId&&(s[Rg]=this.applicationId),this.appCheckToken&&(s[Zl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(s[Tg]=Ig);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QR()&&!KR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sg(n),i=yg(s,f0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[d0]="t",s[xg]=e,s[Lg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HR(),window[o0+this.uniqueCallbackIdentifier]=e,window[a0+this.uniqueCallbackIdentifier]=n,this.myIFrame=hu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xg]=this.myID,e[Lg]=this.myPW,e[Mg]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bg+s.length<=$g;){const o=this.pendingSegs.shift();s=s+"&"+c0+i+"="+o.seg+"&"+u0+i+"="+o.ts+"&"+h0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(p0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=16384,m0=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class Ct{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=uu(n),this.connURL=Ct.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wg]=cu,typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(o[Tg]=Ig),n&&(o[Cg]=n),s&&(o[Ng]=s),i&&(o[Zl]=i),r&&(o[Rg]=r),Pg(e,Og,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,is.set("previous_websocket_failure",!0);try{let s;ug(),this.mySock=new Po(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Po!==null&&!Ct.forceDisallow_}static previouslyFailed(){return is.isInMemoryStorage||is.get("previous_websocket_failure")===!0}markConnectionHealthy(){is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ar(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yg(n,g0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ls,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ct&&Ct.isAvailable();let s=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ct];else{const i=this.transports_=[];for(const r of cr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=6e4,v0=5e3,E0=10*1024,y0=100*1024,hl="t",Wd="d",b0="s",Vd="r",w0="e",jd="o",Gd="a",Qd="n",Kd="p",C0="h";class T0{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new cr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>y0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>E0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hl in e){const n=e[hl];n===Gd?this.upgradeIfSecondaryHealthy_():n===Vd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Di("t",e),s=Di("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Di("t",e),s=Di("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Di(hl,e);if(Wd in e){const s=e[Wd];if(n===C0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===b0?this.onConnectionShutdown_(s):n===Vd?this.onReset_(s):n===w0?Jl("Server Error: "+s):n===jd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cu!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(v0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zd=32,qd=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new Ae("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Un(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ae(t.pieces_,e)}function Hg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function I0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ae(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ae(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return ze(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jg(t,e){if(Un(t)!==Un(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function It(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Un(t)>Un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class S0{constructor(e,n){this.errorPrefix_=n,this.parts_=Wg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=va(this.parts_[s]);Gg(this)}}function N0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=va(e),Gg(t)}function R0(t){const e=t.parts_.pop();t.byteLength_-=va(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gg(t){if(t.byteLength_>qd)throw new Error(t.errorPrefix_+"has a key path longer than "+qd+" bytes ("+t.byteLength_+").");if(t.parts_.length>zd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zd+") or object contains a cycle "+Yn(t))}function Yn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Pi=1e3,O0=60*5*1e3,Yd=30*1e3,k0=1.3,D0=3e4,P0="server_kill",Xd=3;class on extends Fg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=O0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ug())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");du.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Pe(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Aa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=IN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jl("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>D0&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*k0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new T0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(P0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ze(h),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gl(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>lu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xd&&(this.reconnectDelay_=Yd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mg.replace(/\./g,"-")]=1,su()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return Gl(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(ri,e),i=new ne(ri,n);return this.compare(s,i)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr;class Qg extends ya{static get __EMPTY_NODE(){return Yr}static set __EMPTY_NODE(e){Yr=e}compare(e,n){return yi(e.name,n.name)}isDefinedOn(e){throw Ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(gs,Yr)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,Yr)}toString(){return".key"}}const Vs=new Qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??$e.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new $e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class x0{copy(e,n,s,i,r){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xr(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new x0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t,e){return yi(t.name,e.name)}function fu(t,e){return yi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;function M0(t){ec=t}const Kg=function(t){return typeof t=="number"?"number:"+bg(t):"string:"+t},zg=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else O(t===ec||t.isEmpty(),"priority of unexpected type.");O(t===ec||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zg(this.priorityNode_)}static set __childrenNodeConstructor(e){Jd=e}static get __childrenNodeConstructor(){return Jd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bg(this.value_):e+=this.value_,this.lazyHash_=vg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg,Yg;function $0(t){qg=t}function B0(t){Yg=t}class F0 extends ya{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(gs,new Me("[PRIORITY-POST]",Yg))}makePost(e,n){const s=qg(e);return new ne(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new F0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=Math.log(2);class H0{constructor(e){const n=r=>parseInt(Math.log(r)/U0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new $e(d,h.node,$e.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],d=n?n(h):h,new $e(d,h.node,$e.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const y=h-g,v=h;h-=g;const C=i(y+1,v),b=t[y],N=n?n(b):b;p(new $e(N,b.node,m,null,C))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));m?d(y,$e.BLACK):(d(y,$e.BLACK),d(y,$e.RED))}return u},o=new H0(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;const Rs={};class Zt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Rs&&Te,"ChildrenNode.ts has not been loaded"),dl=dl||new Zt({".priority":Rs},{".priority":Te}),dl}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ne.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Lo(s,e.getCompare()):a=Rs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Zt(u,c)}addToIndexes(e,n){const s=Oo(this.indexes_,(i,r)=>{const o=ii(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Rs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Lo(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Zt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Oo(this.indexes_,i=>{if(i===Rs)return i;{const r=n.get(e.name);return r?i.remove(new ne(e.name,r)):i}});return new Zt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xi||(xi=new j(new Je(fu),null,Zt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xi:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xi:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{O(re(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kg(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ne(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===Vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W0 extends j{constructor(){super(new Je(fu),j.EMPTY_NODE,Zt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Rr=new W0;Object.defineProperties(ne,{MIN:{value:new ne(ri,j.EMPTY_NODE)},MAX:{value:new ne(gs,Rr)}});Qg.__EMPTY_NODE=j.EMPTY_NODE;Me.__childrenNodeConstructor=j;M0(Rr);B0(Rr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Be(e))}if(!(t instanceof Array)&&V0){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Lo(n,L0,o=>o.name,fu);if(s){const o=Lo(n,Te.getCompare());return new j(r,Be(e),new Zt({".priority":o},{".priority":Te}))}else return new j(r,Be(e),Zt.Default)}else{let n=j.EMPTY_NODE;return tt(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Be(e))}}$0(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends ya{constructor(e){super(),this.indexPath_=e,O(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yi(e.name,n.name):r}makePost(e,n){const s=Be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new ne(gs,e)}toString(){return Wg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends ya{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=Be(e);return new ne(n,s)}toString(){return".value"}}const Q0=new G0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){return{type:"value",snapshotNode:t}}function oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ur(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function K0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ur(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(oi(n,s)):o.trackChildChange(hr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(ur(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hr(i,r,o))}else s.trackChildChange(oi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.indexedFilter_=new pu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dr.getStartPost_(e),this.endPost_=dr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ne(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new ne(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ne(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ne(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(hr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ur(n,h));const m=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(oi(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ur(c.name,c.node)),r.trackChildChange(oi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new _u;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function q0(t){return t.loadsAllData()?new pu(t.getIndex()):t.hasLimit()?new z0(t):new dr(t)}function Zd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===Q0?n="$value":t.index_===Vs?n="$key":(O(t.index_ instanceof j0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Pe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Pe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Pe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Fg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Nr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Zd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ii(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Mo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zd(e._queryParams),s=e._path.toString(),i=new Aa;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ar(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return{value:null,children:new Map}}function Jg(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,$o());const i=t.children.get(s);e=ve(e),Jg(i,e,n)}}function tc(t,e,n){t.value!==null?n(e,t.value):X0(t,(s,i)=>{const r=new Ae(e.toString()+"/"+s);tc(i,r,n)})}function X0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=10*1e3,Z0=30*1e3,eO=5*60*1e3;class tO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new J0(e);const s=tf+(Z0-tf)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*eO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Zg()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new Bo(ue(),n,this.revert)}}else return O(re(this.path)===e,"operationForChild called for unrelated child."),new Bo(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new fr(this.source,ue()):new fr(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return ie(this.path)?new ms(this.source,ue(),this.snap.getImmediateChild(e)):new ms(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new ms(this.source,ue(),n.value):new pr(this.source,ue(),n)}else return O(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pr(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(K0(o.childName,o.snapshotNode))}),Li(t,i,"child_removed",e,s,n),Li(t,i,"child_added",e,s,n),Li(t,i,"child_moved",r,s,n),Li(t,i,"child_changed",e,s,n),Li(t,i,"value",e,s,n),i}function Li(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>rO(t,a,l)),o.forEach(a=>{const l=iO(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function iO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rO(t,e,n){if(e.childName==null||n.childName==null)throw Ai("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,s){return ba(new Hn(e,n,s),t.serverCache)}function em(t,e,n,s){return ba(t.eventCache,new Hn(e,n,s))}function Fo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function As(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;const oO=()=>(fl||(fl=new Je(GR)),fl);class we{constructor(e,n=oO()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return tt(e,(s,i)=>{n=n.set(new Ae(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:xe(new Ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new we(null)}}set(e,n){if(ie(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(ve(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(ie(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(xe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ie(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),xe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),xe(n,i),s):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new we(null))}}function zi(t,e,n){if(ie(e))return new Ot(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ze(i,e);return r=r.updateChild(o,n),new Ot(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Ot(r)}}}function nf(t,e,n){let s=t;return tt(n,(i,r)=>{s=zi(s,xe(e,i),r)}),s}function sf(t,e){if(ie(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Ot(n)}}function nc(t,e){return ws(t,e)!=null}function ws(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function rf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new ne(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ne(s,i.value))}),e}function Dn(t,e){if(ie(e))return t;{const n=ws(t,e);return n!=null?new Ot(new we(n)):new Ot(t.writeTree_.subtree(e))}}function sc(t){return t.writeTree_.isEmpty()}function ai(t,e){return tm(ue(),t.writeTree_,e)}function tm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=tm(xe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e){return rm(e,t)}function aO(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=s}function lO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function cO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&uO(a,s.path)?i=!1:It(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return hO(t),!0;if(s.snap)t.visibleWrites=sf(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=sf(t.visibleWrites,xe(s.path,l))})}return!0}else return!1}function uO(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(xe(t.path,n),e))return!0;return!1}function hO(t){t.visibleWrites=nm(t.allWrites,dO,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dO(t){return t.visible}function nm(t,e,n){let s=Ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)It(n,o)?(a=ze(n,o),s=zi(s,a,r.snap)):It(o,n)&&(a=ze(o,n),s=zi(s,ue(),r.snap.getChild(a)));else if(r.children){if(It(n,o))a=ze(n,o),s=nf(s,a,r.children);else if(It(o,n))if(a=ze(o,n),ie(a))s=nf(s,ue(),r.children);else{const l=ii(r.children,re(a));if(l){const c=l.getChild(ve(a));s=zi(s,ue(),c)}}}else throw Ai("WriteRecord should have .snap or .children")}}return s}function sm(t,e,n,s,i){if(!s&&!i){const r=ws(t.visibleWrites,e);if(r!=null)return r;{const o=Dn(t.visibleWrites,e);if(sc(o))return n;if(n==null&&!nc(o,ue()))return null;{const a=n||j.EMPTY_NODE;return ai(o,a)}}}else{const r=Dn(t.visibleWrites,e);if(!i&&sc(r))return n;if(!i&&n==null&&!nc(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},a=nm(t.allWrites,o,e),l=n||j.EMPTY_NODE;return ai(a,l)}}}function fO(t,e,n){let s=j.EMPTY_NODE;const i=ws(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=ai(Dn(r,new Ae(o)),a);s=s.updateImmediateChild(o,l)}),rf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dn(t.visibleWrites,e);return rf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function pO(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(nc(t.visibleWrites,r))return null;{const o=Dn(t.visibleWrites,r);return sc(o)?i.getChild(n):ai(o,i.getChild(n))}}function _O(t,e,n,s){const i=xe(e,n),r=ws(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dn(t.visibleWrites,i);return ai(o,s.getNode().getImmediateChild(n))}else return null}function gO(t,e){return ws(t.visibleWrites,e)}function mO(t,e,n,s,i,r,o){let a;const l=Dn(t.visibleWrites,e),c=ws(l,ue());if(c!=null)a=c;else if(n!=null)a=ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function AO(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Uo(t,e,n,s){return sm(t.writeTree,t.treePath,e,n,s)}function Au(t,e){return fO(t.writeTree,t.treePath,e)}function of(t,e,n,s){return pO(t.writeTree,t.treePath,e,n,s)}function Ho(t,e){return gO(t.writeTree,xe(t.treePath,e))}function vO(t,e,n,s,i,r){return mO(t.writeTree,t.treePath,e,n,s,i,r)}function vu(t,e,n){return _O(t.writeTree,t.treePath,e,n)}function im(t,e){return rm(xe(t.treePath,e),t.writeTree)}function rm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ur(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,oi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hr(s,e.snapshotNode,i.oldSnap));else throw Ai("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const om=new yO;class Eu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:As(this.viewCache_),r=vO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){return{filter:t}}function wO(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CO(t,e,n,s,i){const r=new EO;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=ic(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Wo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=IO(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=RO(t,e,c.path,s,i,r):o=SO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===St.LISTEN_COMPLETE)o=NO(t,e,n.path,s,r);else throw Ai("Unknown operation type: "+n.type);const l=r.getChanges();return TO(e,o,l),{viewCache:o,changes:l}}function TO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Fo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xg(Fo(e)))}}function am(t,e,n,s,i,r){const o=e.eventCache;if(Ho(s,n)!=null)return e;{let a,l;if(ie(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=As(e),u=c instanceof j?c:j.EMPTY_NODE,h=Au(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Uo(s,As(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){O(Un(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=of(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=of(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=vu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Wo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&Un(n)>1)return e;const g=ve(n),y=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),p,y,g,om,null)}const h=em(e,c,l.isFullyInitialized()||ie(n),u.filtersNodes()),d=new Eu(i,h,r);return am(t,h,n,i,d,a)}function ic(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Eu(i,e,r);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ki(e,c,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ve(n),p=a.getNode().getImmediateChild(h);let g;if(ie(d))g=s;else{const m=u.getCompleteChild(h);m!=null?Hg(d)===".priority"&&m.getChild(Vg(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=j.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Ki(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function af(t,e){return t.eventCache.isCompleteForChild(e)}function IO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=xe(n,l);af(e,re(u))&&(a=ic(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=xe(n,l);af(e,re(u))||(a=ic(t,a,u,c,i,r,o))}),a}function lf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function rc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=lf(t,p,d);l=Wo(t,l,new Ae(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=lf(t,g,d);l=Wo(t,l,new Ae(h),m,i,r,o,a)}}),l}function SO(t,e,n,s,i,r,o){if(Ho(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ie(n)){let c=new we(null);return l.getNode().forEachChild(Vs,(u,h)=>{c=c.set(new Ae(u),h)}),rc(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),rc(t,e,n,c,i,r,a,o)}}function NO(t,e,n,s,i){const r=e.serverCache,o=em(e,r.getNode(),r.isFullyInitialized()||ie(n),r.isFiltered());return am(t,o,n,s,om,i)}function RO(t,e,n,s,i,r){let o;if(Ho(s,n)!=null)return e;{const a=new Eu(s,e,i),l=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Uo(s,As(e));else{const h=e.serverCache.getNode();O(h instanceof j,"serverChildren would be complete if leaf node"),u=Au(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let h=vu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Uo(s,As(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ho(s,ue())!=null,Ki(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new pu(s.getIndex()),r=q0(s);this.processor_=bO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Hn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Hn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ba(h,u),this.eventGenerator_=new nO(this.query_)}get query(){return this.query_}}function kO(t){return t.viewCache_.serverCache.getNode()}function DO(t){return Fo(t.viewCache_)}function PO(t,e){const n=As(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function cf(t){return t.eventRegistrations_.length===0}function xO(t,e){t.eventRegistrations_.push(e)}function uf(t,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hf(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(O(As(t.viewCache_),"We should always have a full cache before handling merges"),O(Fo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=CO(t.processor_,i,e,n,s);return wO(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function LO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(oi(r,o))}),n.isFullyInitialized()&&s.push(Xg(n.getNode())),lm(t,s,n.getNode(),e)}function lm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return sO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;class cm{constructor(){this.views=new Map}}function MO(t){O(!Vo,"__referenceConstructor has already been defined"),Vo=t}function $O(){return O(Vo,"Reference.ts has not been loaded"),Vo}function BO(t){return t.views.size===0}function yu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),hf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hf(o,e,n,s));return r}}function um(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Uo(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=Au(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=ba(new Hn(a,l,!1),new Hn(s,i,!1));return new OO(e,c)}return o}function FO(t,e,n,s,i,r){const o=um(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xO(o,n),LO(o,n)}function UO(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Wn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(uf(c,n,s)),cf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(uf(l,n,s)),cf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Wn(t)&&r.push(new($O())(e._repo,e._path)),{removed:r,events:o}}function hm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const s of t.views.values())n=n||PO(s,e);return n}function dm(t,e){if(e._queryParams.loadsAllData())return Ca(t);{const s=e._queryIdentifier;return t.views.get(s)}}function fm(t,e){return dm(t,e)!=null}function Wn(t){return Ca(t)!=null}function Ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;function HO(t){O(!jo,"__referenceConstructor has already been defined"),jo=t}function WO(){return O(jo,"Reference.ts has not been loaded"),jo}let VO=1;class df{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=AO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pm(t,e,n,s,i){return aO(t.pendingWriteTree_,e,n,s,i),i?kr(t,new ms(Zg(),e,n)):[]}function rs(t,e,n=!1){const s=lO(t.pendingWriteTree_,e);if(cO(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ue(),!0):tt(s.children,o=>{r=r.set(new Ae(o),!0)}),kr(t,new Bo(s.path,r,n))}else return[]}function Or(t,e,n){return kr(t,new ms(gu(),e,n))}function jO(t,e,n){const s=we.fromObject(n);return kr(t,new pr(gu(),e,s))}function GO(t,e){return kr(t,new fr(gu(),e))}function QO(t,e,n){const s=wu(t,n);if(s){const i=Cu(s),r=i.path,o=i.queryId,a=ze(r,e),l=new fr(mu(o),a);return Tu(t,r,l)}else return[]}function _m(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||fm(o,e))){const l=UO(o,e,n,s);BO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>Wn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=YO(d);for(let g=0;g<p.length;++g){const m=p[g],y=m.query,v=vm(t,m);t.listenProvider_.startListening(qi(y),_r(t,y),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(qi(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ta(d));t.listenProvider_.stopListening(qi(d),p)}))}XO(t,c)}return a}function gm(t,e,n,s){const i=wu(t,s);if(i!=null){const r=Cu(i),o=r.path,a=r.queryId,l=ze(o,e),c=new ms(mu(a),l,n);return Tu(t,o,c)}else return[]}function KO(t,e,n,s){const i=wu(t,s);if(i){const r=Cu(i),o=r.path,a=r.queryId,l=ze(o,e),c=we.fromObject(n),u=new pr(mu(a),l,c);return Tu(t,o,u)}else return[]}function zO(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=ze(d,i);r=r||Pn(p,g),o=o||Wn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Wn(a),r=r||Pn(a,ue())):(a=new cm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const m=Pn(g,ue());m&&(r=r.updateImmediateChild(p,m))}));const c=fm(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ta(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=JO();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=wa(t.pendingWriteTree_,i);let h=FO(a,e,n,u,r,l);if(!c&&!o&&!s){const d=dm(a,e);h=h.concat(ZO(t,e,d))}return h}function bu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=Pn(a,l);if(c)return c});return sm(i,e,r,n,!0)}function qO(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ze(c,n);s=s||Pn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Pn(i,ue()):(i=new cm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Hn(s,!0,!1):null,a=wa(t.pendingWriteTree_,e._path),l=um(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return DO(l)}function kr(t,e){return mm(e,t.syncPointTree_,null,wa(t.pendingWriteTree_,ue()))}function mm(t,e,n,s){if(ie(t.path))return Am(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=im(s,o);r=r.concat(mm(a,l,c,u))}return i&&(r=r.concat(yu(i,t,s,n))),r}}function Am(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=Pn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=im(s,o),u=t.operationForChild(o);u&&(r=r.concat(Am(u,a,l,c)))}),i&&(r=r.concat(yu(i,t,s,n))),r}function vm(t,e){const n=e.query,s=_r(t,n);return{hashFn:()=>(kO(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?QO(t,n._path,s):GO(t,n._path);{const r=zR(i,n);return _m(t,n,null,r)}}}}function _r(t,e){const n=Ta(e);return t.queryToTagMap.get(n)}function Ta(t){return t._path.toString()+"$"+t._queryIdentifier}function wu(t,e){return t.tagToQueryMap.get(e)}function Cu(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ae(t.substr(0,e))}}function Tu(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=wa(t.pendingWriteTree_,e);return yu(s,n,i,null)}function YO(t){return t.fold((e,n,s)=>{if(n&&Wn(n))return[Ca(n)];{let i=[];return n&&(i=hm(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(WO())(t._repo,t._path):t}function XO(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ta(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function JO(){return VO++}function ZO(t,e,n){const s=e._path,i=_r(t,e),r=vm(t,n),o=t.listenProvider_.startListening(qi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)O(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ie(c)&&u&&Wn(u))return[Ca(u).query];{let d=[];return u&&(d=d.concat(hm(u).map(p=>p.query))),tt(h,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(qi(u),_r(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Iu(n)}node(){return this.node_}}class Su{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Su(this.syncTree_,n)}node(){return bu(this.syncTree_,this.path_)}}const ek=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ff=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},nk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sk=function(t,e,n,s){return Nu(e,new Su(n,t),s)},Em=function(t,e,n){return Nu(t,new Iu(e),n)};function Nu(t,e,n){const s=t.getPriority().val(),i=ff(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ff(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,Be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Me(i))),o.forEachChild(Te,(a,l)=>{const c=Nu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ou(t,e){let n=e instanceof Ae?e:new Ae(e),s=t,i=re(n);for(;i!==null;){const r=ii(s.node.children,i)||{children:{},childCount:0};s=new Ru(i,s,r),n=ve(n),i=re(n)}return s}function wi(t){return t.node.value}function ym(t,e){t.node.value=e,oc(t)}function bm(t){return t.node.childCount>0}function ik(t){return wi(t)===void 0&&!bm(t)}function Ia(t,e){tt(t.node.children,(n,s)=>{e(new Ru(n,t,s))})}function wm(t,e,n,s){n&&!s&&e(t),Ia(t,i=>{wm(i,e,!0,s)}),n&&s&&e(t)}function rk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Dr(t){return new Ae(t.parent===null?t.name:Dr(t.parent)+"/"+t.name)}function oc(t){t.parent!==null&&ok(t.parent,t.name,t)}function ok(t,e,n){const s=ik(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/[\[\].#$\/\u0000-\u001F\u007F]/,lk=/[\[\].#$\u0000-\u001F\u007F]/,pl=10*1024*1024,Cm=function(t){return typeof t=="string"&&t.length!==0&&!ak.test(t)},Tm=function(t){return typeof t=="string"&&t.length!==0&&!lk.test(t)},ck=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tm(t)},Im=function(t,e,n,s){s&&e===void 0||ku(iu(t,"value"),e,n)},ku=function(t,e,n){const s=n instanceof Ae?new S0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Yn(s)+" with contents = "+e.toString());if(Eg(e))throw new Error(t+"contains "+e.toString()+" "+Yn(s));if(typeof e=="string"&&e.length>pl/3&&va(e)>pl)throw new Error(t+"contains a string greater than "+pl+" utf8 bytes "+Yn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Cm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);N0(s,o),ku(t,a,s),R0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Yn(s)+" in addition to actual children.")}},Sm=function(t,e,n,s){if(!(s&&n===void 0)&&!Tm(n))throw new Error(iu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uk=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sm(t,e,n,s)},Nm=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ck(n))throw new Error(iu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rm(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!jg(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function qt(t,e,n){Rm(t,n),fk(t,s=>It(s,e)||It(e,s))}function fk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(pk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cs&&He("event: "+n.toString()),bi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="repo_interrupt",gk=25;class mk{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$o(),this.transactionQueueTree_=new Ru,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ak(t,e,n){if(t.stats_=uu(t.repoInfo_),t.forceRestClient_||JR())t.server_=new Mo(t.repoInfo_,(s,i,r,o)=>{pf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_f(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new on(t.repoInfo_,e,(s,i,r,o)=>{pf(t,s,i,r,o)},s=>{_f(t,s)},s=>{vk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=s0(t.repoInfo_,()=>new tO(t.stats_,t.server_)),t.infoData_=new Y0,t.infoSyncTree_=new df({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Or(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pu(t,"connected",!1),t.serverSyncTree_=new df({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);qt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Om(t){const n=t.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Du(t){return ek({timestamp:Om(t)})}function pf(t,e,n,s,i){t.dataUpdateCount++;const r=new Ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Oo(n,c=>Be(c));o=KO(t.serverSyncTree_,r,l,i)}else{const l=Be(n);o=gm(t.serverSyncTree_,r,l,i)}else if(s){const l=Oo(n,c=>Be(c));o=jO(t.serverSyncTree_,r,l)}else{const l=Be(n);o=Or(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Na(t,r)),qt(t.eventQueue_,a,o)}function _f(t,e){Pu(t,"connected",e),e===!1&&bk(t)}function vk(t,e){tt(e,(n,s)=>{Pu(t,n,s)})}function Pu(t,e,n){const s=new Ae("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(s,i);const r=Or(t.infoSyncTree_,s,i);qt(t.eventQueue_,s,r)}function km(t){return t.nextWriteId_++}function Ek(t,e,n){const s=qO(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Be(i).withIndex(e._queryParams.getIndex());zO(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Or(t.serverSyncTree_,e._path,r);else{const a=_r(t.serverSyncTree_,e);o=gm(t.serverSyncTree_,e._path,r,a)}return qt(t.eventQueue_,e._path,o),_m(t.serverSyncTree_,e,n,null,!0),r},i=>(Sa(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function yk(t,e,n,s,i){Sa(t,"set",{path:e.toString(),value:n,priority:s});const r=Du(t),o=Be(n,s),a=bu(t.serverSyncTree_,e),l=Em(o,a,r),c=km(t),u=pm(t.serverSyncTree_,e,l,c,!0);Rm(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Ze("set at "+e+" failed: "+d);const m=rs(t.serverSyncTree_,c,!g);qt(t.eventQueue_,e,m),Ck(t,i,d,p)});const h=Mm(t,e);Na(t,h),qt(t.eventQueue_,h,[])}function bk(t){Sa(t,"onDisconnectEvents");const e=Du(t),n=$o();tc(t.onDisconnect_,ue(),(i,r)=>{const o=sk(i,r,t.serverSyncTree_,e);Jg(n,i,o)});let s=[];tc(n,ue(),(i,r)=>{s=s.concat(Or(t.serverSyncTree_,i,r));const o=Mm(t,i);Na(t,o)}),t.onDisconnect_=$o(),qt(t.eventQueue_,ue(),s)}function wk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_k)}function Sa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function Ck(t,e,n,s){e&&bi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Dm(t,e,n){return bu(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function xu(t,e=t.transactionQueueTree_){if(e||Ra(t,e),wi(e)){const n=xm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tk(t,Dr(e),n)}else bm(e)&&Ia(e,n=>{xu(t,n)})}function Tk(t,e,n){const s=n.map(c=>c.currentWriteId),i=Dm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ze(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sa(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(rs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ra(t,Ou(t.transactionQueueTree_,e)),xu(t,t.transactionQueueTree_),qt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)bi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Na(t,e)}},o)}function Na(t,e){const n=Pm(t,e),s=Dr(n),i=xm(t,n);return Ik(t,i,s),s}function Ik(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gk)u=!0,h="maxretry",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Dm(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){ku("transaction failed: Data returned ",p,l.path);let g=Be(p);typeof p=="object"&&p!=null&&_n(p,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,v=Du(t),C=Em(g,d,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=km(t),o.splice(o.indexOf(y),1),i=i.concat(pm(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(rs(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ra(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)bi(s[a]);xu(t,t.transactionQueueTree_)}function Pm(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&wi(s)===void 0;)s=Ou(s,n),e=ve(e),n=re(e);return s}function xm(t,e){const n=[];return Lm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Lm(t,e,n){const s=wi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ia(e,i=>{Lm(t,i,n)})}function Ra(t,e){const n=wi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ym(e,n.length>0?n:void 0)}Ia(e,s=>{Ra(t,s)})}function Mm(t,e){const n=Dr(Pm(t,e)),s=Ou(t.transactionQueueTree_,e);return rk(s,i=>{_l(t,i)}),_l(t,s),wm(s,i=>{_l(t,i)}),n}function _l(t,e){const n=wi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ym(e,void 0):n.length=r+1,qt(t.eventQueue_,Dr(e),i);for(let o=0;o<s.length;o++)bi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const gf=function(t,e){const n=Rk(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dg(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ae(n.pathString)}},Rk=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Sk(t.substring(u,h)));const d=Nk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ok=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=mf.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=mf.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class Dk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Lu{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ie(this._path)?null:Hg(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=ef(this._queryParams),n=lu(e);return n==="{}"?"default":n}get _queryObject(){return ef(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Lu))return!1;const n=this._repo===e._repo,s=jg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+I0(this._path)}}class gn extends Lu{constructor(e,n){super(e,n,new _u,!1)}get parent(){const e=Vg(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ae(e),s=li(this.ref,e);return new gr(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gr(i,li(this.ref,s),Te)))}hasChild(e){const n=new Ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $m(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?li(t._root,e):t._root}function li(t,e){return t=Fe(t),re(t._path)===null?uk("child","path",e,!1):Sm("child","path",e,!1),new gn(t._repo,xe(t._path,e))}function xk(t,e){t=Fe(t),Nm("push",t._path),Im("push",e,t._path,!0);const n=Om(t._repo),s=Ok(n),i=li(t,s),r=li(t,s);let o;return e!=null?o=Bm(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Bm(t,e){t=Fe(t),Nm("set",t._path),Im("set",e,t._path,!1);const n=new Aa;return yk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $L(t){t=Fe(t);const e=new Pk(()=>{}),n=new Mu(e);return Ek(t._repo,t,n).then(s=>new gr(s,new gn(t._repo,t._path),t._queryParams.getIndex()))}class Mu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new kk("value",this,new gr(e.snapshotNode,new gn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dk(this,e,n):null}matches(e){return e instanceof Mu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}MO(gn);HO(gn);/**
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
 */const Lk="FIREBASE_DATABASE_EMULATOR_HOST",ac={};let Mk=!1;function $k(t,e,n,s){t.repoInfo_=new Dg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Bk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Lk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=gf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ws(Ws.OWNER):new e0(t.name,t.options,e);hk("Invalid Firebase Database URL",o),ie(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Uk(a,t,u,new ZR(t.name,n));return new Hk(h,t)}function Fk(t,e){const n=ac[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wk(t),delete n[t.key]}function Uk(t,e,n,s){let i=ac[e.name];i||(i={},ac[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mk(t,Mk,n,s),i[t.toURLString()]=r,r}class Hk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ak(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function Wk(t=au(),e){const n=Ea(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=og("database");s&&Vk(n,...s)}return n}function Vk(t,e,n,s={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ws(Ws.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:lg(s.mockUserToken,t.app.options.projectId);r=new Ws(o)}$k(i,e,n,r)}/**
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
 */function jk(t){BR(Ei),_s(new Fn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Bk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),jt($d,Bd,t),jt($d,Bd,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebasestorage.googleapis.com",Um="storageBucket",Gk=2*60*1e3,Qk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends pn{constructor(e,n,s=0){super(gl(e),`Firebase Storage: ${n} (${gl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function gl(t){return"storage/"+t}function $u(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function Kk(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zk(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function Yk(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Xk(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Jk(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zk(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function eD(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function tD(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nD(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Um+"' property when initializing the app?")}function sD(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iD(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rD(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lc(t){return new Se(Ie.INVALID_ARGUMENT,t)}function Hm(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function oD(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yi(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mi(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw tD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===Fm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${y}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<b.length;N++){const U=b[N],V=U.regex.exec(e);if(V){const Y=V[U.indices.bucket];let B=V[U.indices.path];B||(B=""),s=new rt(Y,B),U.postModify(s);break}}if(s==null)throw eD(e);return s}}class aD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(p,l())},y)}function d(){r&&clearTimeout(r)}function p(y,...v){if(c){d();return}if(y){d(),u.call(null,y,...v);return}if(l()||o){d(),u.call(null,y,...v);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let g=!1;function m(y){g||(g=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function cD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){return t!==void 0}function hD(t){return typeof t=="object"&&!Array.isArray(t)}function Bu(t){return typeof t=="string"||t instanceof String}function Af(t){return Fu()&&t instanceof Blob}function Fu(){return typeof Blob<"u"&&!AN()}function vf(t,e,n,s){if(s<e)throw lc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw lc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Jr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===us.NO_ERROR,l=r.getStatus();if(!a||dD(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===us.ABORT;s(!1,new Jr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Jr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=$u();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Hm():Zk();o(l)}else{const l=Jk();o(l)}};this.canceled_?n(!1,new Jr(!1,null,!0)):this.backoffId_=lD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function pD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _D(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AD(t,e,n,s,i,r,o=!0){const a=Wm(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gD(c,e),pD(c,n),_D(c,r),mD(c,s),new fD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ED(...t){const e=vD();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Fu())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bD(t){if(typeof atob>"u")throw rD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ml{constructor(e,n){this.data=e,this.contentType=n||null}}function wD(t,e){switch(t){case Ut.RAW:return new ml(Vm(e));case Ut.BASE64:case Ut.BASE64URL:return new ml(jm(t,e));case Ut.DATA_URL:return new ml(TD(e),ID(e))}throw $u()}function Vm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function CD(t){let e;try{e=decodeURIComponent(t)}catch{throw Yi(Ut.DATA_URL,"Malformed data URL.")}return Vm(e)}function jm(t,e){switch(t){case Ut.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Yi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Yi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bD(e)}catch(i){throw i.message.includes("polyfill")?i:Yi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Gm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Yi(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=SD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function TD(t){const e=new Gm(t);return e.base64?jm(Ut.BASE64,e.rest):CD(e.rest)}function ID(t){return new Gm(t).contentType}function SD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){let s=0,i="";Af(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Af(this.data_)){const s=this.data_,i=yD(s,e,n);return i===null?null:new wn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wn(s,!0)}}static getBlob(...e){if(Fu()){const n=e.map(s=>s instanceof wn?s.data_:s);return new wn(ED.apply(null,n))}else{const n=e.map(o=>Bu(o)?wD(Ut.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new wn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){let e;try{e=JSON.parse(t)}catch{return null}return hD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RD(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Km(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t,e){return e}class Qe{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||OD}}let Zr=null;function kD(t){return!Bu(t)||t.length<2?t:Km(t)}function zm(){if(Zr)return Zr;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(r,o){return kD(o)}const n=new Qe("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Qe("size");return i.xform=s,t.push(i),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),Zr=t,Zr}function DD(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new rt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function PD(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return DD(s,t),s}function qm(t,e,n){const s=Qm(e);return s===null?null:PD(t,s,n)}function xD(t,e,n,s){const i=Qm(e);if(i===null||!Bu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Uu(d,n,s),g=Wm({alt:"media",token:c});return p+g})[0]}function LD(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Ym{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){if(!t)throw $u()}function MD(t,e){function n(s,i){const r=qm(t,i,e);return Xm(r!==null),r}return n}function $D(t,e){function n(s,i){const r=qm(t,i,e);return Xm(r!==null),xD(r,i,t.host,t._protocol)}return n}function Jm(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Yk():i=qk():n.getStatus()===402?i=zk(t.bucket):n.getStatus()===403?i=Xk(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function BD(t){const e=Jm(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Kk(t.path)),r.serverResponse=i.serverResponse,r}return n}function FD(t,e,n){const s=e.fullServerUrl(),i=Uu(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ym(i,r,$D(t,n),o);return a.errorHandler=BD(e),a}function UD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HD(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=UD(null,e)),s}function WD(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let N=0;N<2;N++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=HD(e,s,i),u=LD(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=wn.getBlob(h,s,d);if(p===null)throw sD();const g={name:c.fullPath},m=Uu(r,t.host,t._protocol),y="POST",v=t.maxUploadRetryTime,C=new Ym(m,y,MD(t,n),v);return C.urlParams=g,C.headers=o,C.body=p.uploadData(),C.errorHandler=Jm(e),C}class VD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jD extends VD{initXhr(){this.xhr_.responseType="text"}}function Zm(){return new jD}/**
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
 */class vs{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vs(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Km(this._location.path)}get storage(){return this._service}get parent(){const e=ND(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oD(e)}}function GD(t,e,n){t._throwIfRoot("uploadBytes");const s=WD(t.storage,t._location,zm(),new wn(e,!0),n);return t.storage.makeRequestWithTokens(s,Zm).then(i=>({metadata:i,ref:t}))}function QD(t){t._throwIfRoot("getDownloadURL");const e=FD(t.storage,t._location,zm());return t.storage.makeRequestWithTokens(e,Zm).then(n=>{if(n===null)throw iD();return n})}function KD(t,e){const n=RD(t._location.path,e),s=new rt(t._location.bucket,n);return new vs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){return/^[A-Za-z]+:\/\//.test(t)}function qD(t,e){return new vs(t,e)}function eA(t,e){if(t instanceof Hu){const n=t;if(n._bucket==null)throw nD();const s=new vs(n,n._bucket);return e!=null?eA(s,e):s}else return e!==void 0?KD(t,e):t}function YD(t,e){if(e&&zD(e)){if(t instanceof Hu)return qD(t,e);throw lc("To use ref(service, url), the first argument must be a Storage instance.")}else return eA(t,e)}function Ef(t,e){const n=e==null?void 0:e[Um];return n==null?null:rt.makeFromBucketSpec(n,t)}function XD(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:lg(i,t.app.options.projectId))}class Hu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Fm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Gk,this._maxUploadRetryTime=Qk,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=Ef(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Ef(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new aD(Hm());{const o=AD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const yf="@firebase/storage",bf="0.11.2";/**
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
 */const tA="storage";function JD(t,e,n){return t=Fe(t),GD(t,e,n)}function ZD(t){return t=Fe(t),QD(t)}function wf(t,e){return t=Fe(t),YD(t,e)}function eP(t=au(),e){t=Fe(t);const s=Ea(t,tA).getImmediate({identifier:e}),i=og("storage");return i&&tP(s,...i),s}function tP(t,e,n,s={}){XD(t,e,n,s)}function nP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hu(n,s,i,e,Ei)}function sP(){_s(new Fn(tA,nP,"PUBLIC").setMultipleInstances(!0)),jt(yf,bf,""),jt(yf,bf,"esm2017")}sP();const iP={class:"container bg-light pt-5"},rP={class:"col-10 mb-3"},oP=L("label",{for:"inputTheme",class:"form-label"},"Title",-1),aP={class:"col-10 mb-3"},lP=L("label",{for:"inputRoute",class:"form-label"},"Route",-1),cP=Dc('<div class="col-10 mb-3"><p>Tags</p><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM"><label class="form-check-label" for="tagCheckbox1">PM</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend"><label class="form-check-label" for="tagCheckbox2">Frontend</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX"><label class="form-check-label" for="tagCheckbox3">UIUX</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App"><label class="form-check-label" for="tagCheckbox4">App</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web"><label class="form-check-label" for="tagCheckbox5">Web</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial"><label class="form-check-label" for="tagCheckbox6">Commercial</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended"><label class="form-check-label" for="tagCheckbox0">Recommended</label></div></div>',1),uP={class:"col-10 mb-3"},hP=L("label",{for:"inputComment",class:"form-label"},"Comment",-1),dP={class:"col-10 mb-3"},fP=L("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),pP={class:"col-10 mb-3"},_P=L("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),gP={class:"col-10 mb-3"},mP=L("label",{for:"file-input",class:"form-label"},"選擇封面(720*420)",-1),AP={key:0,class:"mt-3"},vP=["src"],EP=["disabled"],yP={class:"col-10 mb-3"},bP=["disabled"],wP={__name:"WorkWallBS",setup(t){const e=wf(OL,"workCovers"),n=xk(li(kL,"works")).key;let s=[],i=yt(""),r=yt(""),o=yt(""),a=yt(""),l=yt("2023-01"),c=yt("");const u=yt(null),h=yt(null),d=yt(null);window.onload=function(){const v=document.getElementsByClassName("tag-Checkbox");for(let C=0;C<v.length;C++)v[C].addEventListener("click",()=>{p(v)})};function p(v){let C=[];for(let b=0;b<v.length;b++)v[b].checked&&C.push(v[b].value);s=C}function g(v){u.value=v.target.files[0];const C=new FileReader;C.readAsDataURL(u.value),C.onload=()=>{h.value=C.result}}async function m(){const v=wf(e,u.value.name);await JD(v,u.value),r=await ZD(v),u.value=null,h.value=null,d.value="",alert("文件上傳成功，URL: "+r)}async function y(){DL(n,s,"/MyPortfolio/Work/"+i.value,r,o.value,a.value,l.value,c.value)}return(v,C)=>(ln(),Ks("section",iP,[L("form",{onSubmit:y,class:"row justify-content-center"},[L("div",rP,[oP,Ii(L("input",{type:"text","onUpdate:modelValue":C[0]||(C[0]=b=>Ne(o)?o.value=b:o=b),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[Si,ut(o)]])]),L("div",aP,[lP,Ii(L("input",{type:"text","onUpdate:modelValue":C[1]||(C[1]=b=>Ne(i)?i.value=b:i=b),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[Si,ut(i)]])]),cP,L("div",uP,[hP,Ii(L("input",{type:"text","onUpdate:modelValue":C[2]||(C[2]=b=>Ne(a)?a.value=b:a=b),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[Si,ut(a)]])]),L("div",dP,[fP,Ii(L("input",{type:"month","onUpdate:modelValue":C[3]||(C[3]=b=>Ne(l)?l.value=b:l=b),class:"form-control",id:"inputDonedate"},null,512),[[Si,ut(l)]])]),L("div",pP,[_P,Ii(L("input",{type:"text","onUpdate:modelValue":C[4]||(C[4]=b=>Ne(c)?c.value=b:c=b),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[Si,ut(c)]])]),L("div",gP,[mP,L("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:d,onChange:g,accept:"image/*"},null,544),h.value?(ln(),Ks("div",AP,[L("img",{src:h.value,class:"img-fluid",alt:"Selected Image"},null,8,vP)])):bE("",!0),L("button",{type:"button",class:"btn btn-primary mt-3",onClick:m,disabled:!u.value},"上傳圖片",8,EP)]),L("div",yP,[L("button",{type:"submit",disabled:!ut(o),class:"btn btn-primary mb-3"},"確認送出",8,bP)])],32)]))}},CP={__name:"WorkBS",setup(t){return(e,n)=>(ln(),kc(wP))}},TP=[{path:"/MyPortfolio",name:"Home",component:lN},{path:"/MyPortfolio/About",name:"About",component:()=>Ns(()=>import("./About-c992ea1c.js"),["assets/About-c992ea1c.js","assets/About-425ed802.css"])},{path:"/MyPortfolio/Resume",name:"Resume",component:()=>Ns(()=>import("./Resume-98b0c5a3.js"),["assets/Resume-98b0c5a3.js","assets/Resume-37bd9012.css"])},{path:"/MyPortfolio/Work",name:"Work",component:()=>Ns(()=>import("./Work-869baa41.js"),["assets/Work-869baa41.js","assets/Work-ecb10bdd.css"])},{path:"/:domain(.*)*",name:"NotFound",component:()=>Ns(()=>import("./404-73dc70b4.js"),[])},{path:"/MyPortfolio/Login",name:"Login",component:()=>Ns(()=>import("./Login-22529a1e.js"),[])},{path:"/MyPortfolio/backstage/workwall",name:"workwall",component:CP},{path:"/MyPortfolio/Work/TravelMaker",name:"TravelMaker",component:()=>Ns(()=>import("./TravelMaker-23a7a618.js"),["assets/TravelMaker-23a7a618.js","assets/TravelMaker-e7c18669.css"])},{path:"/MyPortfolio/Work/PersonalityQuiz",name:"PersonalityQuiz",redirect:()=>{window.open("https://cookie-place-537.notion.site/Junyi-f89612e0e20b4feca5a710e2fd46f147","_blank")}},{path:"/MyPortfolio/Work/InshoneDesign",name:"InshoneDesign",redirect:()=>{window.open("https://cookie-place-537.notion.site/7ea75a0f43c64179b934cc40b70b4656","_blank")}},{path:"/MyPortfolio/Work/LilyChen",name:"LilyChen",redirect:()=>{window.open("https://cookie-place-537.notion.site/Lily-Chen-Website-4af5b9ec108d4a1888da1803646fc3b7","_blank")}},{path:"/MyPortfolio/Work/AwardHunter",name:"AwardHunter",redirect:()=>{window.open("https://cookie-place-537.notion.site/App-Redesign-25de4cd8b9f445628d217de9fd78e5a9","_blank")}},{path:"/MyPortfolio/Work/BinaryCube",name:"BinaryCube",redirect:()=>{window.open("https://play.google.com/store/apps/developer?id=Forced_Dev","_blank")}}],IP=kS({history:KI(),base:"/MyPortfolio/",routes:TP,scrollBehavior(t,e,n){return{top:0}}});var SP="firebase",NP="9.17.2";/**
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
 */jt(SP,NP,"app");function Wu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function nA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RP=nA,sA=new Ir("auth","Firebase",nA());/**
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
 */const Cf=new ru("@firebase/auth");function fo(t,...e){Cf.logLevel<=me.ERROR&&Cf.error(`Auth (${Ei}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Vu(t,...e)}function Gt(t,...e){return Vu(t,...e)}function OP(t,e,n){const s=Object.assign(Object.assign({},RP()),{[e]:n});return new Ir("auth","Firebase",s).create(e,{appName:t.name})}function Vu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sA.create(t,...e)}function K(t,e,...n){if(!t)throw Vu(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function hn(t,e){t||en(e)}/**
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
 */const Tf=new Map;function tn(t){hn(t instanceof Function,"Expected a class definition");let e=Tf.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tf.set(t,e),e)}/**
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
 */function kP(t,e){const n=Ea(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ko(r,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function DP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PP(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PP()||vN()||"connection"in navigator)?navigator.onLine:!0}function LP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=su()||cg()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class iA{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const $P=new Pr(3e4,6e4);function Oa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,s,i={}){return rA(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iA.fetch()(oA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rA(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},MP),e);try{const i=new BP(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw eo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw OP(t,u,c);Dt(t,u)}}catch(i){if(i instanceof pn)throw i;Dt(t,"internal-error",{message:String(i)})}}async function ka(t,e,n,s,i={}){const r=await xr(t,e,n,s,i);return"mfaPendingCredential"in r&&Dt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function oA(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ju(t.config,i):`${t.config.apiScheme}://${i}`}class BP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),$P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Gt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function FP(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function UP(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HP(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),i=Gu(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xi(Al(i.auth_time)),issuedAtTime:Xi(Al(i.iat)),expirationTime:Xi(Al(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Gu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ro(n);return i?JSON.parse(i):(fo("Failed to decode base64 JWT payload"),null)}catch(i){return fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function WP(t){const e=Gu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&VP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,s=await t.getIdToken(),i=await mr(t,UP(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?KP(r.providerUserInfo):[],a=QP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new aA(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function GP(t){const e=Fe(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QP(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function KP(t){return t.map(e=>{var{providerId:n}=e,s=Wu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zP(t,e){const n=await rA(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=oA(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iA.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zP(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ar;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function En(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new aA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HP(this,e)}reload(){return GP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mr(this,FP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:N,isAnonymous:U,providerData:V,stsTokenManager:Y}=n;K(b&&Y,e,"internal-error");const B=Ar.fromJSON(this.name,Y);K(typeof b=="string",e,"internal-error"),En(h,e.name),En(d,e.name),K(typeof N=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),En(p,e.name),En(g,e.name),En(m,e.name),En(y,e.name),En(v,e.name),En(C,e.name);const q=new hs({uid:b,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:B,createdAt:v,lastLoginAt:C});return V&&Array.isArray(V)&&(q.providerData=V.map(G=>Object.assign({},G))),y&&(q._redirectEventId=y),q}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ar;i.updateFromServerResponse(n);const r=new hs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Go(r),r}}/**
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
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,r),this.fullPersistenceKey=po("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new js(tn(Sf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||tn(Sf);const o=po(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=hs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new js(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new js(r,e,s))}}/**
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
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fA(e))return"Blackberry";if(pA(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||uA(e))&&!e.includes("edge/"))return"Chrome";if(dA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cA(t=je()){return/firefox\//i.test(t)}function Qu(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uA(t=je()){return/crios\//i.test(t)}function hA(t=je()){return/iemobile/i.test(t)}function dA(t=je()){return/android/i.test(t)}function fA(t=je()){return/blackberry/i.test(t)}function pA(t=je()){return/webos/i.test(t)}function Da(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qP(t=je()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return EN()&&document.documentMode===10}function _A(t=je()){return Da(t)||dA(t)||pA(t)||fA(t)||/windows phone/i.test(t)||hA(t)}function XP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gA(t,e=[]){let n;switch(t){case"Browser":n=Nf(je());break;case"Worker":n=`${Nf(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${s}`}/**
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
 */class JP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class ZP{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new JP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sA,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Pa(t){return Fe(t)}class Rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=RN(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ex(t,e,n){const s=Pa(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=mA(e),{host:o,port:a}=tx(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nx()}function mA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tx(t){const e=mA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Of(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Of(o)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function sx(t,e){return xr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ix(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",Oa(t,e))}/**
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
 */async function rx(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Oa(t,e))}async function ox(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Oa(t,e))}/**
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
 */class vr extends Ku{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ix(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rx(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ox(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gs(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",Oa(t,e))}/**
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
 */const ax="http://localhost";class Es extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Wu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Es(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function lx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cx(t){const e=Bi(Fi(t)).link,n=e?Bi(Fi(e)).deep_link_id:null,s=Bi(Fi(t)).deep_link_id;return(s?Bi(Fi(s)).link:null)||s||n||e||t}class zu{constructor(e){var n,s,i,r,o,a;const l=Bi(Fi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=lx((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cx(e);try{return new zu(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return vr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zu.parseLink(n);return K(s,"argument-error"),vr._fromEmailAndCode(e,s.code,s.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lr extends AA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Lr{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class Sn extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await hs._fromIdTokenResponse(e,s,i),o=kf(s);return new ci({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kf(s);return new ci({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Qo(e,n,s,i)}}function vA(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,r,e,s):r})}async function ux(t,e,n=!1){const s=await mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",s)}/**
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
 */async function hx(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await mr(t,vA(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Gu(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),ci._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),r}}/**
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
 */async function EA(t,e,n=!1){const s="signIn",i=await vA(t,s,e),r=await ci._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function dx(t,e){return EA(Pa(t),e)}function BL(t,e,n){return dx(Fe(t),Ci.credential(e,n))}function fx(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function px(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}const Ko="__sak";/**
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
 */function _x(){const t=je();return Qu(t)||Da(t)}const gx=1e3,mx=10;class bA extends yA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_x()&&XP(),this.fallbackToPolling=_A(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);YP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bA.type="LOCAL";const Ax=bA;/**
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
 */class wA extends yA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wA.type="SESSION";const CA=wA;/**
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
 */function vx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new xa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await vx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
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
 */class Ex{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=qu("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function yx(t){Qt().location.href=t}/**
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
 */function TA(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cx(){return TA()?self:null}/**
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
 */const IA="firebaseLocalStorageDb",Tx=1,zo="firebaseLocalStorage",SA="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function Ix(){const t=indexedDB.deleteDatabase(IA);return new Mr(t).toPromise()}function uc(){const t=indexedDB.open(IA,Tx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zo,{keyPath:SA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zo)?e(s):(s.close(),await Ix(),e(await uc()))})})}async function Df(t,e,n){const s=La(t,!0).put({[SA]:e,value:n});return new Mr(s).toPromise()}async function Sx(t,e){const n=La(t,!1).get(e),s=await new Mr(n).toPromise();return s===void 0?null:s.value}function Pf(t,e){const n=La(t,!0).delete(e);return new Mr(n).toPromise()}const Nx=800,Rx=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Rx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(Cx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bx(),!this.activeServiceWorker)return;this.sender=new Ex(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await Df(e,Ko,"1"),await Pf(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Df(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Sx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=La(i,!1).getAll();return new Mr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const Ox=NA;/**
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
 */function kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dx(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",kx().appendChild(s)})}function Px(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Pr(3e4,6e4);/**
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
 */function xx(t,e){return e?tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yu extends Ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lx(t){return EA(t.auth,new Yu(t),t.bypassAuthState)}function Mx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hx(n,new Yu(t),t.bypassAuthState)}async function $x(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ux(n,new Yu(t),t.bypassAuthState)}/**
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
 */class RA{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lx;case"linkViaPopup":case"linkViaRedirect":return $x;case"reauthViaPopup":case"reauthViaRedirect":return Mx;default:Dt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bx=new Pr(2e3,1e4);class Ms extends RA{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Bx.get())};e()}}Ms.currentPopupAction=null;/**
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
 */const Fx="pendingRedirect",_o=new Map;class Ux extends RA{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const s=await Hx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hx(t,e){const n=jx(e),s=Vx(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Wx(t,e){_o.set(t._key(),e)}function Vx(t){return tn(t._redirectPersistence)}function jx(t){return po(Fx,t.config.apiKey,t.name)}async function Gx(t,e,n=!1){const s=Pa(t),i=xx(s,e),o=await new Ux(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Qx=10*60*1e3;class Kx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!OA(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qx&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(e))}saveEventToCache(e){this.cachedEventUids.add(xf(e)),this.lastProcessedEventTime=Date.now()}}function xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OA(t);default:return!1}}/**
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
 */async function qx(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
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
 */const Yx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xx=/^https?/;async function Jx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qx(t);for(const n of e)try{if(Zx(n))return}catch{}Dt(t,"unauthorized-domain")}function Zx(t){const e=cc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Xx.test(n))return!1;if(Yx.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const eL=new Pr(3e4,6e4);function Lf(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tL(t){return new Promise((e,n)=>{var s,i,r;function o(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(Gt(t,"network-request-failed"))},timeout:eL.get()})}if(!((i=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Qt().gapi)===null||r===void 0)&&r.load)o();else{const a=Px("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},Dx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function nL(t){return go=go||tL(t),go}/**
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
 */const sL=new Pr(5e3,15e3),iL="__/auth/iframe",rL="emulator/auth/iframe",oL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lL(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ju(e,rL):`https://${t.config.authDomain}/${iL}`,s={apiKey:e.apiKey,appName:t.name,v:Ei},i=aL.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vi(s).slice(1)}`}async function cL(t){const e=await nL(t),n=Qt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:lL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oL,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{r(o)},sL.get());function l(){Qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const uL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hL=500,dL=600,fL="_blank",pL="http://localhost";class Mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _L(t,e,n,s=hL,i=dL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uL),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=uA(c)?fL:n),cA(c)&&(e=e||pL,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(qP(c)&&a!=="_self")return gL(e||"",a),new Mf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Mf(h)}function gL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mL="__/auth/handler",AL="emulator/auth/handler";function $f(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ei,eventId:i};if(e instanceof AA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Lr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vL(t)}?${vi(a).slice(1)}`}function vL({config:t}){return t.emulator?ju(t,AL):`https://${t.authDomain}/${mL}`}/**
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
 */const vl="webStorageSupport";class EL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CA,this._completeRedirectFn=Gx,this._overrideRedirectResult=Wx}async _openPopup(e,n,s,i){var r;hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=$f(e,n,s,cc(),i);return _L(e,o,qu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),yx($f(e,n,s,cc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await cL(e),s=new Kx(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vl,{type:vl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[vl];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _A()||Qu()||Da()}}const yL=EL;var Bf="@firebase/auth",Ff="0.21.4";/**
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
 */class bL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CL(t){_s(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{K(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gA(t)},u=new ZP(a,l,c);return DP(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Fn("auth-internal",e=>{const n=Pa(e.getProvider("auth").getImmediate());return(s=>new bL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Bf,Ff,wL(t)),jt(Bf,Ff,"esm2017")}/**
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
 */const TL=5*60,IL=ag("authIdTokenMaxAge")||TL;let Uf=null;const SL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>IL)return;const i=n==null?void 0:n.token;Uf!==i&&(Uf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NL(t=au()){const e=Ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kP(t,{popupRedirectResolver:yL,persistence:[Ox,Ax,CA]}),s=ag("authTokenSyncURL");if(s){const r=SL(s);px(n,r,()=>r(n.currentUser)),fx(n,o=>r(o))}const i=rg("auth");return i&&ex(n,`http://${i}`),n}CL("Browser");const kA=iy(Sy);kA.use(IP);kA.mount("#app");const RL={apiKey:"AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",authDomain:"frankportfolio-e3ae3.firebaseapp.com",databaseURL:"https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"frankportfolio-e3ae3",storageBucket:"frankportfolio-e3ae3.appspot.com",messagingSenderId:"483448448603",appId:"1:483448448603:web:d914b32657440240fc017e"},Xu=pg(RL),DA=Wk(Xu),OL=eP(Xu),kL=$m(DA,"works/"),FL=NL(Xu);function DL(t,e,n,s,i,r,o,a){Bm($m(DA,"works/"+i+t),{uid:t,tag:e,route:n,image:s,title:i,comment:r,donedate:o,viewcounts:a})}export{bt as F,kL as W,xc as _,L as a,Ee as b,Ks as c,Dc as d,Ap as e,lo as f,yt as g,Ii as h,xL as i,$L as j,PL as k,bE as l,Ip as m,Si as n,ln as o,mp as p,FL as q,Nc as r,BL as s,UA as t,IP as u,LL as v,Ft as w,ML as x};
