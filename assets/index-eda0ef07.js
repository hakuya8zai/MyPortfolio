(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function hc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function pc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Me(s)?Nv(s):pc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Me(t))return t;if(ye(t))return t}}const Iv=/;(?![^(]*\))/g,Sv=/:([^]+)/,Rv=/\/\*.*?\*\//gs;function Nv(t){const e={};return t.replace(Rv,"").split(Iv).forEach(n=>{if(n){const s=n.split(Sv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _c(t){let e="";if(Me(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=_c(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ov=hc(kv);function Lh(t){return!!t||t===""}function Pv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bo(t[s],e[s]);return n}function bo(t,e){if(t===e)return!0;let n=Qu(t),s=Qu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Qi(t),s=Qi(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?Pv(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bo(t[o],e[o]))return!1}}return String(t)===String(e)}const QM=t=>Me(t)?t:t==null?"":z(t)||ye(t)&&(t.toString===$h||!X(t.toString))?JSON.stringify(t,Fh,2):String(t),Fh=(t,e)=>e&&e.__v_isRef?Fh(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Uh(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!z(e)&&!Hh(e)?String(e):e,Te={},Ls=[],St=()=>{},xv=()=>!1,Dv=/^on[^a-z]/,Xo=t=>Dv.test(t),mc=t=>t.startsWith("onUpdate:"),Ve=Object.assign,gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mv=Object.prototype.hasOwnProperty,ce=(t,e)=>Mv.call(t,e),z=Array.isArray,Fs=t=>vr(t)==="[object Map]",Uh=t=>vr(t)==="[object Set]",Qu=t=>vr(t)==="[object Date]",X=t=>typeof t=="function",Me=t=>typeof t=="string",Qi=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Bh=t=>ye(t)&&X(t.then)&&X(t.catch),$h=Object.prototype.toString,vr=t=>$h.call(t),Lv=t=>vr(t).slice(8,-1),Hh=t=>vr(t)==="[object Object]",vc=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fv=/-(\w)/g,qt=Jo(t=>t.replace(Fv,(e,n)=>n?n.toUpperCase():"")),Uv=/\B([A-Z])/g,li=Jo(t=>t.replace(Uv,"-$1").toLowerCase()),Zo=Jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Jo(t=>t?`on${Zo(t)}`:""),Xi=(t,e)=>!Object.is(t,e),io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const Bv=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class $v{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Hv(t,e=Et){e&&e.active&&e.effects.push(t)}function Wv(){return Et}const bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wh=t=>(t.w&Dn)>0,Vh=t=>(t.n&Dn)>0,Vv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},jv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Wh(i)&&!Vh(i)?i.delete(t):e[n++]=i,i.w&=~Dn,i.n&=~Dn}e.length=n}},Tl=new WeakMap;let Di=0,Dn=1;const Cl=30;let wt;const os=Symbol(""),Al=Symbol("");class yc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hv(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Rn=!0,Dn=1<<++Di,Di<=Cl?Vv(this):Ju(this),this.fn()}finally{Di<=Cl&&jv(this),Dn=1<<--Di,wt=this.parent,Rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rn=!0;const jh=[];function ci(){jh.push(Rn),Rn=!1}function ui(){const t=jh.pop();Rn=t===void 0?!0:t}function et(t,e,n){if(Rn&&wt){let s=Tl.get(t);s||Tl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=bc()),Kh(i)}}function Kh(t,e){let n=!1;Di<=Cl?Vh(t)||(t.n|=Dn,n=!Wh(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function an(t,e,n,s,i,r){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?vc(n)&&a.push(o.get("length")):(a.push(o.get(os)),Fs(t)&&a.push(o.get(Al)));break;case"delete":z(t)||(a.push(o.get(os)),Fs(t)&&a.push(o.get(Al)));break;case"set":Fs(t)&&a.push(o.get(os));break}if(a.length===1)a[0]&&Il(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Il(bc(l))}}function Il(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Zu(s);for(const s of n)s.computed||Zu(s)}function Zu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kv=hc("__proto__,__v_isRef,__isVue"),qh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi)),qv=Ec(),zv=Ec(!1,!0),Gv=Ec(!0),ed=Yv();function Yv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=de(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ci();const s=de(this)[e].apply(this,n);return ui(),s}}),t}function Qv(t){const e=de(this);return et(e,"has",t),e.hasOwnProperty(t)}function Ec(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?fb:Xh:e?Qh:Yh).get(s))return s;const o=z(s);if(!t){if(o&&ce(ed,i))return Reflect.get(ed,i,r);if(i==="hasOwnProperty")return Qv}const a=Reflect.get(s,i,r);return(Qi(i)?qh.has(i):Kv(i))||(t||et(s,"get",i),e)?a:Re(a)?o&&vc(i)?a:a.value:ye(a)?t?Jh(a):br(a):a}}const Xv=zh(),Jv=zh(!0);function zh(t=!1){return function(n,s,i,r){let o=n[s];if(Ks(o)&&Re(o)&&!Re(i))return!1;if(!t&&(!Eo(i)&&!Ks(i)&&(o=de(o),i=de(i)),!z(n)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=z(n)&&vc(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===de(r)&&(a?Xi(i,o)&&an(n,"set",s,i):an(n,"add",s,i)),l}}function Zv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&an(t,"delete",e,void 0),s}function eb(t,e){const n=Reflect.has(t,e);return(!Qi(e)||!qh.has(e))&&et(t,"has",e),n}function tb(t){return et(t,"iterate",z(t)?"length":os),Reflect.ownKeys(t)}const Gh={get:qv,set:Xv,deleteProperty:Zv,has:eb,ownKeys:tb},nb={get:Gv,set(t,e){return!0},deleteProperty(t,e){return!0}},sb=Ve({},Gh,{get:zv,set:Jv}),wc=t=>t,ea=t=>Reflect.getPrototypeOf(t);function Ur(t,e,n=!1,s=!1){t=t.__v_raw;const i=de(t),r=de(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=ea(i),a=s?wc:n?Ac:Ji;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Br(t,e=!1){const n=this.__v_raw,s=de(n),i=de(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function $r(t,e=!1){return t=t.__v_raw,!e&&et(de(t),"iterate",os),Reflect.get(t,"size",t)}function td(t){t=de(t);const e=de(this);return ea(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function nd(t,e){e=de(e);const n=de(this),{has:s,get:i}=ea(n);let r=s.call(n,t);r||(t=de(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Xi(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function sd(t){const e=de(this),{has:n,get:s}=ea(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&an(e,"delete",t,void 0),r}function id(){const t=de(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Hr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=de(o),l=e?wc:t?Ac:Ji;return!t&&et(a,"iterate",os),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Wr(t,e,n){return function(...s){const i=this.__v_raw,r=de(i),o=Fs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?wc:e?Ac:Ji;return!e&&et(r,"iterate",l?Al:os),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function ib(){const t={get(r){return Ur(this,r)},get size(){return $r(this)},has:Br,add:td,set:nd,delete:sd,clear:id,forEach:Hr(!1,!1)},e={get(r){return Ur(this,r,!1,!0)},get size(){return $r(this)},has:Br,add:td,set:nd,delete:sd,clear:id,forEach:Hr(!1,!0)},n={get(r){return Ur(this,r,!0)},get size(){return $r(this,!0)},has(r){return Br.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Hr(!0,!1)},s={get(r){return Ur(this,r,!0,!0)},get size(){return $r(this,!0)},has(r){return Br.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wr(r,!1,!1),n[r]=Wr(r,!0,!1),e[r]=Wr(r,!1,!0),s[r]=Wr(r,!0,!0)}),[t,n,e,s]}const[rb,ob,ab,lb]=ib();function Tc(t,e){const n=e?t?lb:ab:t?ob:rb;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const cb={get:Tc(!1,!1)},ub={get:Tc(!1,!0)},db={get:Tc(!0,!1)},Yh=new WeakMap,Qh=new WeakMap,Xh=new WeakMap,fb=new WeakMap;function hb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pb(t){return t.__v_skip||!Object.isExtensible(t)?0:hb(Lv(t))}function br(t){return Ks(t)?t:Cc(t,!1,Gh,cb,Yh)}function _b(t){return Cc(t,!1,sb,ub,Qh)}function Jh(t){return Cc(t,!0,nb,db,Xh)}function Cc(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Us(t){return Ks(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function Eo(t){return!!(t&&t.__v_isShallow)}function Zh(t){return Us(t)||Ks(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function ep(t){return yo(t,"__v_skip",!0),t}const Ji=t=>ye(t)?br(t):t,Ac=t=>ye(t)?Jh(t):t;function tp(t){Rn&&wt&&(t=de(t),Kh(t.dep||(t.dep=bc())))}function np(t,e){t=de(t);const n=t.dep;n&&Il(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Ft(t){return sp(t,!1)}function mb(t){return sp(t,!0)}function sp(t,e){return Re(t)?t:new gb(t,e)}class gb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Ji(e)}get value(){return tp(this),this._value}set value(e){const n=this.__v_isShallow||Eo(e)||Ks(e);e=n?e:de(e),Xi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ji(e),np(this))}}function ut(t){return Re(t)?t.value:t}const vb={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ip(t){return Us(t)?t:new Proxy(t,vb)}var rp;class bb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rp]=!1,this._dirty=!0,this.effect=new yc(e,()=>{this._dirty||(this._dirty=!0,np(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=de(this);return tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rp="__v_isReadonly";function yb(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=St):(s=t.get,i=t.set),new bb(s,i,r||!i,n)}function Nn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ta(r,e,n)}return i}function ht(t,e,n,s){if(X(t)){const r=Nn(t,e,n,s);return r&&Bh(r)&&r.catch(o=>{ta(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function ta(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Nn(l,null,10,[t,o,a]);return}}Eb(t,n,i,s)}function Eb(t,e,n,s=!0){console.error(t)}let Zi=!1,Sl=!1;const We=[];let Bt=0;const Bs=[];let Qt=null,Xn=0;const op=Promise.resolve();let Ic=null;function ap(t){const e=Ic||op;return t?e.then(this?t.bind(this):t):e}function wb(t){let e=Bt+1,n=We.length;for(;e<n;){const s=e+n>>>1;er(We[s])<t?e=s+1:n=s}return e}function Sc(t){(!We.length||!We.includes(t,Zi&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?We.push(t):We.splice(wb(t.id),0,t),lp())}function lp(){!Zi&&!Sl&&(Sl=!0,Ic=op.then(up))}function Tb(t){const e=We.indexOf(t);e>Bt&&We.splice(e,1)}function Cb(t){z(t)?Bs.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Xn+1:Xn))&&Bs.push(t),lp()}function rd(t,e=Zi?Bt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function cp(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>er(n)-er(s)),Xn=0;Xn<Qt.length;Xn++)Qt[Xn]();Qt=null,Xn=0}}const er=t=>t.id==null?1/0:t.id,Ab=(t,e)=>{const n=er(t)-er(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function up(t){Sl=!1,Zi=!0,We.sort(Ab);const e=St;try{for(Bt=0;Bt<We.length;Bt++){const n=We[Bt];n&&n.active!==!1&&Nn(n,null,14)}}finally{Bt=0,We.length=0,cp(),Zi=!1,Ic=null,(We.length||Bs.length)&&up()}}function Ib(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||Te;f&&(i=n.map(p=>Me(p)?p.trim():p)),d&&(i=n.map(wl))}let a,l=s[a=Ua(e)]||s[a=Ua(qt(e))];!l&&r&&(l=s[a=Ua(li(e))]),l&&ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(c,t,6,i)}}function dp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const l=c=>{const u=dp(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):Ve(o,r),ye(t)&&s.set(t,o),o)}function na(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,li(e))||ce(t,e))}let it=null,sa=null;function wo(t){const e=it;return it=t,sa=t&&t.type.__scopeId||null,e}function Sb(t){sa=t}function Rb(){sa=null}function Mi(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_d(-1);const r=wo(e);let o;try{o=t(...i)}finally{wo(r),s._d&&_d(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ba(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=t;let E,b;const C=wo(t);try{if(n.shapeFlag&4){const R=i||s;E=Ut(u.call(R,R,d,r,p,f,m)),b=l}else{const R=e;E=Ut(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),b=e.props?l:Nb(l)}}catch(R){Bi.length=0,ta(R,t,1),E=Ce(Rt)}let w=E;if(b&&g!==!1){const R=Object.keys(b),{shapeFlag:B}=w;R.length&&B&7&&(o&&R.some(mc)&&(b=kb(b,o)),w=Mn(w,b))}return n.dirs&&(w=Mn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),E=w,wo(C),E}const Nb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},kb=(t,e)=>{const n={};for(const s in t)(!mc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ob(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?od(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!na(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?od(s,o,c):!0:!!o;return!1}function od(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!na(n,r))return!0}return!1}function Pb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xb=t=>t.__isSuspense;function Db(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Cb(t)}function ro(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function tn(t,e,n=!1){const s=Ne||it;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Vr={};function oo(t,e,n){return fp(t,e,n)}function fp(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Te){const a=Wv()===(Ne==null?void 0:Ne.scope)?Ne:null;let l,c=!1,u=!1;if(Re(t)?(l=()=>t.value,c=Eo(t)):Us(t)?(l=()=>t,s=!0):z(t)?(u=!0,c=t.some(w=>Us(w)||Eo(w)),l=()=>t.map(w=>{if(Re(w))return w.value;if(Us(w))return ts(w);if(X(w))return Nn(w,a,2)})):X(t)?e?l=()=>Nn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ht(t,a,3,[f])}:l=St,e&&s){const w=l;l=()=>ts(w())}let d,f=w=>{d=b.onStop=()=>{Nn(w,a,4)}},p;if(nr)if(f=St,e?n&&ht(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const w=ky();p=w.__watcherHandles||(w.__watcherHandles=[])}else return St;let m=u?new Array(t.length).fill(Vr):Vr;const g=()=>{if(b.active)if(e){const w=b.run();(s||c||(u?w.some((R,B)=>Xi(R,m[B])):Xi(w,m)))&&(d&&d(),ht(e,a,3,[w,m===Vr?void 0:u&&m[0]===Vr?[]:m,f]),m=w)}else b.run()};g.allowRecurse=!!e;let E;i==="sync"?E=g:i==="post"?E=()=>Xe(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),E=()=>Sc(g));const b=new yc(l,E);e?n?g():m=b.run():i==="post"?Xe(b.run.bind(b),a&&a.suspense):b.run();const C=()=>{b.stop(),a&&a.scope&&gc(a.scope.effects,b)};return p&&p.push(C),C}function Mb(t,e,n){const s=this.proxy,i=Me(t)?t.includes(".")?hp(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Ne;qs(this);const a=fp(i,r.bind(s),n);return o?qs(o):as(),a}function hp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ts(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ts(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Uh(t)||Fs(t))t.forEach(n=>{ts(n,e)});else if(Hh(t))for(const n in t)ts(t[n],e);return t}function Lb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vp(()=>{t.isMounted=!0}),bp(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],Fb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(t,{slots:e}){const n=wy(),s=Lb();let i;return()=>{const r=e.default&&_p(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==Rt){o=g;break}}const a=de(t),{mode:l}=a;if(s.isLeaving)return $a(o);const c=ad(o);if(!c)return $a(o);const u=Rl(c,a,s,n);Nl(c,u);const d=n.subTree,f=d&&ad(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const g=m();i===void 0?i=g:g!==i&&(i=g,p=!0)}if(f&&f.type!==Rt&&(!Jn(c,f)||p)){const g=Rl(f,a,s,n);if(Nl(f,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},$a(o);l==="in-out"&&c.type!==Rt&&(g.delayLeave=(E,b,C)=>{const w=pp(s,f);w[String(f.key)]=f,E._leaveCb=()=>{b(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},Ub=Fb;function pp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:E,onAfterAppear:b,onAppearCancelled:C}=e,w=String(t.key),R=pp(n,t),B=(F,G)=>{F&&ht(F,s,9,G)},W=(F,G)=>{const j=G[1];B(F,G),z(F)?F.every(ae=>ae.length<=1)&&j():F.length<=1&&j()},Y={mode:r,persisted:o,beforeEnter(F){let G=a;if(!n.isMounted)if(i)G=g||a;else return;F._leaveCb&&F._leaveCb(!0);const j=R[w];j&&Jn(t,j)&&j.el._leaveCb&&j.el._leaveCb(),B(G,[F])},enter(F){let G=l,j=c,ae=u;if(!n.isMounted)if(i)G=E||l,j=b||c,ae=C||u;else return;let _e=!1;const me=F._enterCb=$e=>{_e||(_e=!0,$e?B(ae,[F]):B(j,[F]),Y.delayedLeave&&Y.delayedLeave(),F._enterCb=void 0)};G?W(G,[F,me]):me()},leave(F,G){const j=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return G();B(d,[F]);let ae=!1;const _e=F._leaveCb=me=>{ae||(ae=!0,G(),me?B(m,[F]):B(p,[F]),F._leaveCb=void 0,R[j]===t&&delete R[j])};R[j]=t,f?W(f,[F,_e]):_e()},clone(F){return Rl(F,e,n,s)}};return Y}function $a(t){if(ia(t))return t=Mn(t),t.children=null,t}function ad(t){return ia(t)?t.children?t.children[0]:void 0:t}function Nl(t,e){t.shapeFlag&6&&t.component?Nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _p(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===dt?(o.patchFlag&128&&i++,s=s.concat(_p(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function mp(t){return X(t)?{setup:t,name:t.name}:t}const ao=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function Bb(t,e){gp(t,"a",e)}function $b(t,e){gp(t,"da",e)}function gp(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ra(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ia(i.parent.vnode)&&Hb(s,e,n,i),i=i.parent}}function Hb(t,e,n,s){const i=ra(e,t,s,!0);yp(()=>{gc(s[e],i)},n)}function ra(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ci(),qs(n);const a=ht(e,n,t,o);return as(),ui(),a});return s?i.unshift(r):i.push(r),r}}const fn=t=>(e,n=Ne)=>(!nr||t==="sp")&&ra(t,(...s)=>e(...s),n),Wb=fn("bm"),vp=fn("m"),Vb=fn("bu"),jb=fn("u"),bp=fn("bum"),yp=fn("um"),Kb=fn("sp"),qb=fn("rtg"),zb=fn("rtc");function Gb(t,e=Ne){ra("ec",t,e)}function Ti(t,e){const n=it;if(n===null)return t;const s=la(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Te]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function qn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ci(),ht(l,n,8,[t.el,a,t,e]),ui())}}const Ep="components";function wp(t,e){return Qb(Ep,t,!0,e)||t}const Yb=Symbol();function Qb(t,e,n=!0,s=!1){const i=it||Ne;if(i){const r=i.type;if(t===Ep){const a=Sy(r,!1);if(a&&(a===e||a===qt(e)||a===Zo(qt(e))))return r}const o=ld(i[t]||r[t],e)||ld(i.appContext[t],e);return!o&&s?r:o}}function ld(t,e){return t&&(t[e]||t[qt(e)]||t[Zo(qt(e))])}function XM(t,e,n,s){let i;const r=n&&n[s];if(z(t)||Me(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const kl=t=>t?Dp(t)?la(t)||t.proxy:kl(t.parent):null,Ui=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>Sc(t.update)),$nextTick:t=>t.n||(t.n=ap.bind(t.proxy)),$watch:t=>Mb.bind(t)}),Ha=(t,e)=>t!==Te&&!t.__isScriptSetup&&ce(t,e),Xb={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ha(s,e))return o[e]=1,s[e];if(i!==Te&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==Te&&ce(n,e))return o[e]=4,n[e];Ol&&(o[e]=0)}}const u=Ui[e];let d,f;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Te&&ce(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ha(i,e)?(i[e]=n,!0):s!==Te&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Te&&ce(t,o)||Ha(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(Ui,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ol=!0;function Jb(t){const e=Rc(t),n=t.proxy,s=t.ctx;Ol=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:E,beforeDestroy:b,beforeUnmount:C,destroyed:w,unmounted:R,render:B,renderTracked:W,renderTriggered:Y,errorCaptured:F,serverPrefetch:G,expose:j,inheritAttrs:ae,components:_e,directives:me,filters:$e}=e;if(c&&Zb(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const le=o[ee];X(le)&&(s[ee]=le.bind(n))}if(i){const ee=i.call(n,n);ye(ee)&&(t.data=br(ee))}if(Ol=!0,r)for(const ee in r){const le=r[ee],Pe=X(le)?le.bind(n,n):X(le.get)?le.get.bind(n,n):St,lt=!X(le)&&X(le.set)?le.set.bind(n):St,Ke=ft({get:Pe,set:lt});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:ke=>Ke.value=ke})}if(a)for(const ee in a)Tp(a[ee],s,n,ee);if(l){const ee=X(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(le=>{ro(le,ee[le])})}u&&cd(u,t,"c");function oe(ee,le){z(le)?le.forEach(Pe=>ee(Pe.bind(n))):le&&ee(le.bind(n))}if(oe(Wb,d),oe(vp,f),oe(Vb,p),oe(jb,m),oe(Bb,g),oe($b,E),oe(Gb,F),oe(zb,W),oe(qb,Y),oe(bp,C),oe(yp,R),oe(Kb,G),z(j))if(j.length){const ee=t.exposed||(t.exposed={});j.forEach(le=>{Object.defineProperty(ee,le,{get:()=>n[le],set:Pe=>n[le]=Pe})})}else t.exposed||(t.exposed={});B&&t.render===St&&(t.render=B),ae!=null&&(t.inheritAttrs=ae),_e&&(t.components=_e),me&&(t.directives=me)}function Zb(t,e,n=St,s=!1){z(t)&&(t=Pl(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=tn(r.from||i,r.default,!0):o=tn(r.from||i):o=tn(r),Re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function cd(t,e,n){ht(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,s){const i=s.includes(".")?hp(n,s):()=>n[s];if(Me(t)){const r=e[t];X(r)&&oo(i,r)}else if(X(t))oo(i,t.bind(n));else if(ye(t))if(z(t))t.forEach(r=>Tp(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&oo(i,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>To(l,c,o,!0)),To(l,e,o)),ye(e)&&r.set(e,l),l}function To(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&To(t,r,n,!0),i&&i.forEach(o=>To(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ey[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ey={data:ud,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Gn,directives:Gn,watch:ny,provide:ud,inject:ty};function ud(t,e){return e?t?function(){return Ve(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function ty(t,e){return Gn(Pl(t),Pl(e))}function Pl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?Ve(Ve(Object.create(null),t),e):e}function ny(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function sy(t,e,n,s=!1){const i={},r={};yo(r,aa,1),t.propsDefaults=Object.create(null),Cp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:_b(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function iy(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(na(t.emitsOptions,f))continue;const p=e[f];if(l)if(ce(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const m=qt(f);i[m]=xl(l,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Cp(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=li(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=xl(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d))&&(delete r[d],c=!0)}c&&an(t,"set","$attrs")}function Cp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(so(l))continue;const c=e[l];let u;i&&ce(i,u=qt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:na(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=de(n),c=a||Te;for(let u=0;u<r.length;u++){const d=r[u];n[d]=xl(i,l,d,c[d],t,!ce(c,d))}}return o}function xl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&X(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(qs(i),s=c[n]=l.call(null,e),as())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===li(n))&&(s=!0))}return s}function Ap(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!X(t)){const u=d=>{l=!0;const[f,p]=Ap(d,e,!0);Ve(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,Ls),Ls;if(z(r))for(let u=0;u<r.length;u++){const d=qt(r[u]);dd(d)&&(o[d]=Te)}else if(r)for(const u in r){const d=qt(u);if(dd(d)){const f=r[u],p=o[d]=z(f)||X(f)?{type:f}:Object.assign({},f);if(p){const m=pd(Boolean,p.type),g=pd(String,p.type);p[0]=m>-1,p[1]=g<0||m<g,(m>-1||ce(p,"default"))&&a.push(d)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function dd(t){return t[0]!=="$"}function fd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function hd(t,e){return fd(t)===fd(e)}function pd(t,e){return z(e)?e.findIndex(n=>hd(n,t)):X(e)&&hd(e,t)?0:-1}const Ip=t=>t[0]==="_"||t==="$stable",Nc=t=>z(t)?t.map(Ut):[Ut(t)],ry=(t,e,n)=>{if(e._n)return e;const s=Mi((...i)=>Nc(e(...i)),n);return s._c=!1,s},Sp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ip(i))continue;const r=t[i];if(X(r))e[i]=ry(i,r,s);else if(r!=null){const o=Nc(r);e[i]=()=>o}}},Rp=(t,e)=>{const n=Nc(e);t.slots.default=()=>n},oy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),yo(e,"_",n)):Sp(e,t.slots={})}else t.slots={},e&&Rp(t,e);yo(t.slots,aa,1)},ay=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ve(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Sp(e,i)),o=e}else e&&(Rp(t,e),o={default:1});if(r)for(const a in i)!Ip(a)&&!(a in o)&&delete i[a]};function Np(){return{app:null,config:{isNativeTag:xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ly=0;function cy(t,e){return function(s,i=null){X(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Np(),o=new Set;let a=!1;const l=r.app={_uid:ly++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Oy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&X(c.install)?(o.add(c),c.install(l,...u)):X(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const f=Ce(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,la(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Dl(t,e,n,s,i=!1){if(z(t)){t.forEach((f,p)=>Dl(f,e&&(z(e)?e[p]:e),n,s,i));return}if(ao(s)&&!i)return;const r=s.shapeFlag&4?la(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,ce(d,c)&&(d[c]=null)):Re(c)&&(c.value=null)),X(l))Nn(l,a,12,[o,u]);else{const f=Me(l),p=Re(l);if(f||p){const m=()=>{if(t.f){const g=f?ce(d,l)?d[l]:u[l]:l.value;i?z(g)&&gc(g,r):z(g)?g.includes(r)||g.push(r):f?(u[l]=[r],ce(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ce(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Xe(m,n)):m()}}}const Xe=Db;function uy(t){return dy(t)}function dy(t,e){const n=Bv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=St,insertStaticContent:m}=t,g=(h,_,v,y=null,A=null,O=null,M=!1,N=null,P=!!_.dynamicChildren)=>{if(h===_)return;h&&!Jn(h,_)&&(y=x(h),ke(h,A,O,!0),h=null),_.patchFlag===-2&&(P=!1,_.dynamicChildren=null);const{type:I,ref:H,shapeFlag:L}=_;switch(I){case oa:E(h,_,v,y);break;case Rt:b(h,_,v,y);break;case lo:h==null&&C(_,v,y,M);break;case dt:_e(h,_,v,y,A,O,M,N,P);break;default:L&1?B(h,_,v,y,A,O,M,N,P):L&6?me(h,_,v,y,A,O,M,N,P):(L&64||L&128)&&I.process(h,_,v,y,A,O,M,N,P,ne)}H!=null&&A&&Dl(H,h&&h.ref,O,_||h,!_)},E=(h,_,v,y)=>{if(h==null)s(_.el=a(_.children),v,y);else{const A=_.el=h.el;_.children!==h.children&&c(A,_.children)}},b=(h,_,v,y)=>{h==null?s(_.el=l(_.children||""),v,y):_.el=h.el},C=(h,_,v,y)=>{[h.el,h.anchor]=m(h.children,_,v,y,h.el,h.anchor)},w=({el:h,anchor:_},v,y)=>{let A;for(;h&&h!==_;)A=f(h),s(h,v,y),h=A;s(_,v,y)},R=({el:h,anchor:_})=>{let v;for(;h&&h!==_;)v=f(h),i(h),h=v;i(_)},B=(h,_,v,y,A,O,M,N,P)=>{M=M||_.type==="svg",h==null?W(_,v,y,A,O,M,N,P):G(h,_,A,O,M,N,P)},W=(h,_,v,y,A,O,M,N)=>{let P,I;const{type:H,props:L,shapeFlag:$,transition:K,dirs:Z}=h;if(P=h.el=o(h.type,O,L&&L.is,L),$&8?u(P,h.children):$&16&&F(h.children,P,null,y,A,O&&H!=="foreignObject",M,N),Z&&qn(h,null,y,"created"),Y(P,h,h.scopeId,M,y),L){for(const fe in L)fe!=="value"&&!so(fe)&&r(P,fe,null,L[fe],O,h.children,y,A,D);"value"in L&&r(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Lt(I,y,h)}Z&&qn(h,null,y,"beforeMount");const he=(!A||A&&!A.pendingBranch)&&K&&!K.persisted;he&&K.beforeEnter(P),s(P,_,v),((I=L&&L.onVnodeMounted)||he||Z)&&Xe(()=>{I&&Lt(I,y,h),he&&K.enter(P),Z&&qn(h,null,y,"mounted")},A)},Y=(h,_,v,y,A)=>{if(v&&p(h,v),y)for(let O=0;O<y.length;O++)p(h,y[O]);if(A){let O=A.subTree;if(_===O){const M=A.vnode;Y(h,M,M.scopeId,M.slotScopeIds,A.parent)}}},F=(h,_,v,y,A,O,M,N,P=0)=>{for(let I=P;I<h.length;I++){const H=h[I]=N?En(h[I]):Ut(h[I]);g(null,H,_,v,y,A,O,M,N)}},G=(h,_,v,y,A,O,M)=>{const N=_.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:H}=_;P|=h.patchFlag&16;const L=h.props||Te,$=_.props||Te;let K;v&&zn(v,!1),(K=$.onVnodeBeforeUpdate)&&Lt(K,v,_,h),H&&qn(_,h,v,"beforeUpdate"),v&&zn(v,!0);const Z=A&&_.type!=="foreignObject";if(I?j(h.dynamicChildren,I,N,v,y,Z,O):M||le(h,_,N,null,v,y,Z,O,!1),P>0){if(P&16)ae(N,_,L,$,v,y,A);else if(P&2&&L.class!==$.class&&r(N,"class",null,$.class,A),P&4&&r(N,"style",L.style,$.style,A),P&8){const he=_.dynamicProps;for(let fe=0;fe<he.length;fe++){const Oe=he[fe],yt=L[Oe],Cs=$[Oe];(Cs!==yt||Oe==="value")&&r(N,Oe,yt,Cs,A,h.children,v,y,D)}}P&1&&h.children!==_.children&&u(N,_.children)}else!M&&I==null&&ae(N,_,L,$,v,y,A);((K=$.onVnodeUpdated)||H)&&Xe(()=>{K&&Lt(K,v,_,h),H&&qn(_,h,v,"updated")},y)},j=(h,_,v,y,A,O,M)=>{for(let N=0;N<_.length;N++){const P=h[N],I=_[N],H=P.el&&(P.type===dt||!Jn(P,I)||P.shapeFlag&70)?d(P.el):v;g(P,I,H,null,y,A,O,M,!0)}},ae=(h,_,v,y,A,O,M)=>{if(v!==y){if(v!==Te)for(const N in v)!so(N)&&!(N in y)&&r(h,N,v[N],null,M,_.children,A,O,D);for(const N in y){if(so(N))continue;const P=y[N],I=v[N];P!==I&&N!=="value"&&r(h,N,I,P,M,_.children,A,O,D)}"value"in y&&r(h,"value",v.value,y.value)}},_e=(h,_,v,y,A,O,M,N,P)=>{const I=_.el=h?h.el:a(""),H=_.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:K}=_;K&&(N=N?N.concat(K):K),h==null?(s(I,v,y),s(H,v,y),F(_.children,v,H,A,O,M,N,P)):L>0&&L&64&&$&&h.dynamicChildren?(j(h.dynamicChildren,$,v,A,O,M,N),(_.key!=null||A&&_===A.subTree)&&kp(h,_,!0)):le(h,_,v,H,A,O,M,N,P)},me=(h,_,v,y,A,O,M,N,P)=>{_.slotScopeIds=N,h==null?_.shapeFlag&512?A.ctx.activate(_,v,y,M,P):$e(_,v,y,A,O,M,P):nt(h,_,P)},$e=(h,_,v,y,A,O,M)=>{const N=h.component=Ey(h,y,A);if(ia(h)&&(N.ctx.renderer=ne),Ty(N),N.asyncDep){if(A&&A.registerDep(N,oe),!h.el){const P=N.subTree=Ce(Rt);b(null,P,_,v)}return}oe(N,h,_,v,A,O,M)},nt=(h,_,v)=>{const y=_.component=h.component;if(Ob(h,_,v))if(y.asyncDep&&!y.asyncResolved){ee(y,_,v);return}else y.next=_,Tb(y.update),y.update();else _.el=h.el,y.vnode=_},oe=(h,_,v,y,A,O,M)=>{const N=()=>{if(h.isMounted){let{next:H,bu:L,u:$,parent:K,vnode:Z}=h,he=H,fe;zn(h,!1),H?(H.el=Z.el,ee(h,H,M)):H=Z,L&&io(L),(fe=H.props&&H.props.onVnodeBeforeUpdate)&&Lt(fe,K,H,Z),zn(h,!0);const Oe=Ba(h),yt=h.subTree;h.subTree=Oe,g(yt,Oe,d(yt.el),x(yt),h,A,O),H.el=Oe.el,he===null&&Pb(h,Oe.el),$&&Xe($,A),(fe=H.props&&H.props.onVnodeUpdated)&&Xe(()=>Lt(fe,K,H,Z),A)}else{let H;const{el:L,props:$}=_,{bm:K,m:Z,parent:he}=h,fe=ao(_);if(zn(h,!1),K&&io(K),!fe&&(H=$&&$.onVnodeBeforeMount)&&Lt(H,he,_),zn(h,!0),L&&Q){const Oe=()=>{h.subTree=Ba(h),Q(L,h.subTree,h,A,null)};fe?_.type.__asyncLoader().then(()=>!h.isUnmounted&&Oe()):Oe()}else{const Oe=h.subTree=Ba(h);g(null,Oe,v,y,h,A,O),_.el=Oe.el}if(Z&&Xe(Z,A),!fe&&(H=$&&$.onVnodeMounted)){const Oe=_;Xe(()=>Lt(H,he,Oe),A)}(_.shapeFlag&256||he&&ao(he.vnode)&&he.vnode.shapeFlag&256)&&h.a&&Xe(h.a,A),h.isMounted=!0,_=v=y=null}},P=h.effect=new yc(N,()=>Sc(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,zn(h,!0),I()},ee=(h,_,v)=>{_.component=h;const y=h.vnode.props;h.vnode=_,h.next=null,iy(h,_.props,y,v),ay(h,_.children,v),ci(),rd(),ui()},le=(h,_,v,y,A,O,M,N,P=!1)=>{const I=h&&h.children,H=h?h.shapeFlag:0,L=_.children,{patchFlag:$,shapeFlag:K}=_;if($>0){if($&128){lt(I,L,v,y,A,O,M,N,P);return}else if($&256){Pe(I,L,v,y,A,O,M,N,P);return}}K&8?(H&16&&D(I,A,O),L!==I&&u(v,L)):H&16?K&16?lt(I,L,v,y,A,O,M,N,P):D(I,A,O,!0):(H&8&&u(v,""),K&16&&F(L,v,y,A,O,M,N,P))},Pe=(h,_,v,y,A,O,M,N,P)=>{h=h||Ls,_=_||Ls;const I=h.length,H=_.length,L=Math.min(I,H);let $;for($=0;$<L;$++){const K=_[$]=P?En(_[$]):Ut(_[$]);g(h[$],K,v,null,A,O,M,N,P)}I>H?D(h,A,O,!0,!1,L):F(_,v,y,A,O,M,N,P,L)},lt=(h,_,v,y,A,O,M,N,P)=>{let I=0;const H=_.length;let L=h.length-1,$=H-1;for(;I<=L&&I<=$;){const K=h[I],Z=_[I]=P?En(_[I]):Ut(_[I]);if(Jn(K,Z))g(K,Z,v,null,A,O,M,N,P);else break;I++}for(;I<=L&&I<=$;){const K=h[L],Z=_[$]=P?En(_[$]):Ut(_[$]);if(Jn(K,Z))g(K,Z,v,null,A,O,M,N,P);else break;L--,$--}if(I>L){if(I<=$){const K=$+1,Z=K<H?_[K].el:y;for(;I<=$;)g(null,_[I]=P?En(_[I]):Ut(_[I]),v,Z,A,O,M,N,P),I++}}else if(I>$)for(;I<=L;)ke(h[I],A,O,!0),I++;else{const K=I,Z=I,he=new Map;for(I=Z;I<=$;I++){const st=_[I]=P?En(_[I]):Ut(_[I]);st.key!=null&&he.set(st.key,I)}let fe,Oe=0;const yt=$-Z+1;let Cs=!1,zu=0;const wi=new Array(yt);for(I=0;I<yt;I++)wi[I]=0;for(I=K;I<=L;I++){const st=h[I];if(Oe>=yt){ke(st,A,O,!0);continue}let Mt;if(st.key!=null)Mt=he.get(st.key);else for(fe=Z;fe<=$;fe++)if(wi[fe-Z]===0&&Jn(st,_[fe])){Mt=fe;break}Mt===void 0?ke(st,A,O,!0):(wi[Mt-Z]=I+1,Mt>=zu?zu=Mt:Cs=!0,g(st,_[Mt],v,null,A,O,M,N,P),Oe++)}const Gu=Cs?fy(wi):Ls;for(fe=Gu.length-1,I=yt-1;I>=0;I--){const st=Z+I,Mt=_[st],Yu=st+1<H?_[st+1].el:y;wi[I]===0?g(null,Mt,v,Yu,A,O,M,N,P):Cs&&(fe<0||I!==Gu[fe]?Ke(Mt,v,Yu,2):fe--)}}},Ke=(h,_,v,y,A=null)=>{const{el:O,type:M,transition:N,children:P,shapeFlag:I}=h;if(I&6){Ke(h.component.subTree,_,v,y);return}if(I&128){h.suspense.move(_,v,y);return}if(I&64){M.move(h,_,v,ne);return}if(M===dt){s(O,_,v);for(let L=0;L<P.length;L++)Ke(P[L],_,v,y);s(h.anchor,_,v);return}if(M===lo){w(h,_,v);return}if(y!==2&&I&1&&N)if(y===0)N.beforeEnter(O),s(O,_,v),Xe(()=>N.enter(O),A);else{const{leave:L,delayLeave:$,afterLeave:K}=N,Z=()=>s(O,_,v),he=()=>{L(O,()=>{Z(),K&&K()})};$?$(O,Z,he):he()}else s(O,_,v)},ke=(h,_,v,y=!1,A=!1)=>{const{type:O,props:M,ref:N,children:P,dynamicChildren:I,shapeFlag:H,patchFlag:L,dirs:$}=h;if(N!=null&&Dl(N,null,v,h,!0),H&256){_.ctx.deactivate(h);return}const K=H&1&&$,Z=!ao(h);let he;if(Z&&(he=M&&M.onVnodeBeforeUnmount)&&Lt(he,_,h),H&6)T(h.component,v,y);else{if(H&128){h.suspense.unmount(v,y);return}K&&qn(h,null,_,"beforeUnmount"),H&64?h.type.remove(h,_,v,A,ne,y):I&&(O!==dt||L>0&&L&64)?D(I,_,v,!1,!0):(O===dt&&L&384||!A&&H&16)&&D(P,_,v),y&&vt(h)}(Z&&(he=M&&M.onVnodeUnmounted)||K)&&Xe(()=>{he&&Lt(he,_,h),K&&qn(h,null,_,"unmounted")},v)},vt=h=>{const{type:_,el:v,anchor:y,transition:A}=h;if(_===dt){bt(v,y);return}if(_===lo){R(h);return}const O=()=>{i(v),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(h.shapeFlag&1&&A&&!A.persisted){const{leave:M,delayLeave:N}=A,P=()=>M(v,O);N?N(h.el,O,P):P()}else O()},bt=(h,_)=>{let v;for(;h!==_;)v=f(h),i(h),h=v;i(_)},T=(h,_,v)=>{const{bum:y,scope:A,update:O,subTree:M,um:N}=h;y&&io(y),A.stop(),O&&(O.active=!1,ke(M,h,_,v)),N&&Xe(N,_),Xe(()=>{h.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},D=(h,_,v,y=!1,A=!1,O=0)=>{for(let M=O;M<h.length;M++)ke(h[M],_,v,y,A)},x=h=>h.shapeFlag&6?x(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),U=(h,_,v)=>{h==null?_._vnode&&ke(_._vnode,null,null,!0):g(_._vnode||null,h,_,null,null,null,v),rd(),cp(),_._vnode=h},ne={p:g,um:ke,m:Ke,r:vt,mt:$e,mc:F,pc:le,pbc:j,n:x,o:t};let Ee,Q;return e&&([Ee,Q]=e(ne)),{render:U,hydrate:Ee,createApp:cy(U,Ee)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kp(t,e,n=!1){const s=t.children,i=e.children;if(z(s)&&z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=En(i[r]),a.el=o.el),n||kp(o,a)),a.type===oa&&(a.el=o.el)}}function fy(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const hy=t=>t.__isTeleport,dt=Symbol(void 0),oa=Symbol(void 0),Rt=Symbol(void 0),lo=Symbol(void 0),Bi=[];let Ct=null;function kt(t=!1){Bi.push(Ct=t?null:[])}function py(){Bi.pop(),Ct=Bi[Bi.length-1]||null}let tr=1;function _d(t){tr+=t}function Op(t){return t.dynamicChildren=tr>0?Ct||Ls:null,py(),tr>0&&Ct&&Ct.push(t),t}function ln(t,e,n,s,i,r){return Op(se(t,e,n,s,i,r,!0))}function Pp(t,e,n,s,i){return Op(Ce(t,e,n,s,i,!0))}function Ml(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const aa="__vInternal",xp=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Re(t)||X(t)?{i:it,r:t,k:e,f:!!n}:t:null;function se(t,e=null,n=null,s=0,i=null,r=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xp(e),ref:e&&co(e),scopeId:sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return a?(kc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),tr>0&&!o&&Ct&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ct.push(l),l}const Ce=_y;function _y(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Yb)&&(t=Rt),Ml(t)){const a=Mn(t,e,!0);return n&&kc(a,n),tr>0&&!r&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(Ry(t)&&(t=t.__vccOpts),e){e=my(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=_c(a)),ye(l)&&(Zh(l)&&!z(l)&&(l=Ve({},l)),e.style=pc(l))}const o=Me(t)?1:xb(t)?128:hy(t)?64:ye(t)?4:X(t)?2:0;return se(t,e,n,s,i,o,r,!0)}function my(t){return t?Zh(t)||aa in t?Ve({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?vy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xp(a),ref:e&&e.ref?n&&i?z(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function uo(t=" ",e=0){return Ce(oa,null,t,e)}function yr(t,e){const n=Ce(lo,null,t);return n.staticCount=e,n}function gy(t="",e=!1){return e?(kt(),Pp(Rt,null,t)):Ce(Rt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Ce(Rt):z(t)?Ce(dt,null,t.slice()):typeof t=="object"?En(t):Ce(oa,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function kc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),kc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(aa in e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[uo(e)]):n=8);t.children=e,t.shapeFlag|=n}function vy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_c([e.class,s.class]));else if(i==="style")e.style=pc([e.style,s.style]);else if(Xo(i)){const r=e[i],o=s[i];o&&r!==o&&!(z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){ht(t,e,7,[n,s])}const by=Np();let yy=0;function Ey(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||by,r={uid:yy++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(s,i),emitsOptions:dp(s,i),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ib.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const wy=()=>Ne||it,qs=t=>{Ne=t,t.scope.on()},as=()=>{Ne&&Ne.scope.off(),Ne=null};function Dp(t){return t.vnode.shapeFlag&4}let nr=!1;function Ty(t,e=!1){nr=e;const{props:n,children:s}=t.vnode,i=Dp(t);sy(t,n,i,e),oy(t,s);const r=i?Cy(t,e):void 0;return nr=!1,r}function Cy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ep(new Proxy(t.ctx,Xb));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Iy(t):null;qs(t),ci();const r=Nn(s,t,0,[t.props,i]);if(ui(),as(),Bh(r)){if(r.then(as,as),e)return r.then(o=>{md(t,o,e)}).catch(o=>{ta(o,t,0)});t.asyncDep=r}else md(t,r,e)}else Mp(t,e)}function md(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=ip(e)),Mp(t,n)}let gd;function Mp(t,e,n){const s=t.type;if(!t.render){if(!e&&gd&&!s.render){const i=s.template||Rc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ve(Ve({isCustomElement:r,delimiters:a},o),l);s.render=gd(i,c)}}t.render=s.render||St}qs(t),ci(),Jb(t),ui(),as()}function Ay(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function Iy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Ay(t))},slots:t.slots,emit:t.emit,expose:e}}function la(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(ep(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)},has(e,n){return n in e||n in Ui}}))}function Sy(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Ry(t){return X(t)&&"__vccOpts"in t}const ft=(t,e)=>yb(t,e,nr);function Lp(t,e,n){const s=arguments.length;return s===2?ye(e)&&!z(e)?Ml(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ml(n)&&(n=[n]),Ce(t,e,n))}const Ny=Symbol(""),ky=()=>tn(Ny),Oy="3.2.47",Py="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,vd=Zn&&Zn.createElement("template"),xy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zn.createElementNS(Py,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{vd.innerHTML=s?`<svg>${t}</svg>`:t;const a=vd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Dy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function My(t,e,n){const s=t.style,i=Me(n);if(n&&!i){if(e&&!Me(e))for(const r in e)n[r]==null&&Ll(s,r,"");for(const r in n)Ll(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const bd=/\s*!important$/;function Ll(t,e,n){if(z(n))n.forEach(s=>Ll(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ly(t,e);bd.test(n)?t.setProperty(li(s),n.replace(bd,""),"important"):t[s]=n}}const yd=["Webkit","Moz","ms"],Wa={};function Ly(t,e){const n=Wa[e];if(n)return n;let s=qt(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=Zo(s);for(let i=0;i<yd.length;i++){const r=yd[i]+s;if(r in t)return Wa[e]=r}return e}const Ed="http://www.w3.org/1999/xlink";function Fy(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ed,e.slice(6,e.length)):t.setAttributeNS(Ed,e,n);else{const r=Ov(e);n==null||r&&!Lh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Uy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function By(t,e,n,s){t.removeEventListener(e,n,s)}function $y(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Hy(e);if(s){const c=r[e]=jy(s,i);es(t,a,c,l)}else o&&(By(t,a,o,l),r[e]=void 0)}}const wd=/(?:Once|Passive|Capture)$/;function Hy(t){let e;if(wd.test(t)){e={};let s;for(;s=t.match(wd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):li(t.slice(2)),e]}let Va=0;const Wy=Promise.resolve(),Vy=()=>Va||(Wy.then(()=>Va=0),Va=Date.now());function jy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(Ky(s,n.value),e,5,[s])};return n.value=t,n.attached=Vy(),n}function Ky(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Td=/^on[a-z]/,qy=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Dy(t,s,i):e==="style"?My(t,n,s):Xo(e)?mc(e)||$y(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zy(t,e,s,i))?Uy(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fy(t,e,s,i))};function zy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Td.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Td.test(e)&&Me(n)?!1:e in t}const Gy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ub.props;const Co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>io(e,n):e};function Yy(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Co(i);const r=s||i.props&&i.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=wl(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",Yy),es(t,"compositionend",Cd),es(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Co(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&wl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},JM={created(t,{value:e},n){t.checked=bo(e,n.props.value),t._assign=Co(n),es(t,"change",()=>{t._assign(Qy(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Co(s),e!==n&&(t.checked=bo(e,s.props.value))}};function Qy(t){return"_value"in t?t._value:t.value}const ZM={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ai(t,!0),s.enter(t)):s.leave(t,()=>{Ai(t,!1)}):Ai(t,e))},beforeUnmount(t,{value:e}){Ai(t,e)}};function Ai(t,e){t.style.display=e?t._vod:"none"}const Xy=Ve({patchProp:qy},xy);let Ad;function Jy(){return Ad||(Ad=uy(Xy))}const Zy=(...t)=>{const e=Jy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=eE(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function eE(t){return Me(t)?document.querySelector(t):t}const tE="/MyPortfolio/assets/Frank_logo-98eaea7f.svg";const Er=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ca=t=>(Sb("data-v-22f95812"),t=t(),Rb(),t),nE={class:"navbar navbar-expand-lg navbar-black bg-black border-bottom border-1 border-white sticky-top"},sE={class:"container-fluid"},iE=ca(()=>se("img",{src:tE,alt:""},null,-1)),rE=ca(()=>se("div",{class:"line1"},null,-1)),oE=ca(()=>se("div",{class:"line2"},null,-1)),aE=[rE,oE],lE={class:"collapse navbar-collapse",id:"navbarNav"},cE={class:"navbar-nav ms-lg-auto"},uE={class:"nav-item bt-border text-center ms-lg-auto"},dE={class:"nav-item bt-border text-center ms-lg-auto"},fE={class:"nav-item bt-border text-center ms-lg-auto"},hE=ca(()=>se("li",{class:"nav-item text-center ms-lg-auto"},[se("a",{href:"https://medium.com/@huikaichung1999",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},"Medium")],-1)),pE={__name:"Header",setup(t){function e(){const n=document.querySelector(".line1"),s=document.querySelector(".line2");n.classList.toggle("open"),s.classList.toggle("open")}return(n,s)=>{const i=wp("router-link");return kt(),ln("nav",nE,[se("div",sE,[Ce(i,{to:"/MyPortfolio",class:"navbar-brand"},{default:Mi(()=>[iE]),_:1}),se("button",{onClick:e,class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},aE),se("div",lE,[se("ul",cE,[se("li",uE,[Ce(i,{to:"/MyPortfolio/About",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Mi(()=>[uo("About")]),_:1})]),se("li",dE,[Ce(i,{to:"/MyPortfolio/Work",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Mi(()=>[uo("Work")]),_:1})]),se("li",fE,[Ce(i,{to:"/MyPortfolio/Resume",class:"nav-link nlink-style hover-underline-animation ps-3 pe-3"},{default:Mi(()=>[uo("Resume")]),_:1})]),hE])])])])}}},_E=Er(pE,[["__scopeId","data-v-22f95812"]]);const mE={},gE={class:"bg-black text-bg-black text-center text-lg-start border-top border-1 border-white"},vE=yr('<div class="text-center m-2 p-0 text-secondary font-sm" data-v-b79f9a76> interested in working together? </div><div class="text-center" data-v-b79f9a76><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://www.linkedin.com/in/hui-kai-chung-970ab6140/" data-v-b79f9a76>-&gt; linkedin</a><a class="underlink m-2 fs-7 text-decoration-none hover-underline" href="https://medium.com/@huikaichung1999" data-v-b79f9a76>-&gt; Medium</a></div><div class="text-center" data-v-b79f9a76><a class="m-2 text-secondary text-decoration-none hover-underline font-sm" href="#" data-v-b79f9a76>hakuya8zai@gmail.com</a></div><div class="text-center p-0 m-2 text-secondary font-sm" data-v-b79f9a76> Copyright @2023 FrankChung. </div>',4),bE=[vE];function yE(t,e){return kt(),ln("footer",gE,bE)}const EE=Er(mE,[["render",yE],["__scopeId","data-v-b79f9a76"]]),wE={__name:"App",setup(t){return(e,n)=>{const s=wp("router-view");return kt(),ln(dt,null,[Ce(_E),Ce(s),Ce(EE)],64)}}};var Ye="top",ot="bottom",at="right",Qe="left",ua="auto",di=[Ye,ot,at,Qe],fs="start",zs="end",Fp="clippingParents",Oc="viewport",Ns="popper",Up="reference",Fl=di.reduce(function(t,e){return t.concat([e+"-"+fs,e+"-"+zs])},[]),Pc=[].concat(di,[ua]).reduce(function(t,e){return t.concat([e,e+"-"+fs,e+"-"+zs])},[]),Bp="beforeRead",$p="read",Hp="afterRead",Wp="beforeMain",Vp="main",jp="afterMain",Kp="beforeWrite",qp="write",zp="afterWrite",Gp=[Bp,$p,Hp,Wp,Vp,jp,Kp,qp,zp];function zt(t){return t?(t.nodeName||"").toLowerCase():null}function mt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function hs(t){var e=mt(t).Element;return t instanceof e||t instanceof Element}function pt(t){var e=mt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function xc(t){if(typeof ShadowRoot>"u")return!1;var e=mt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function TE(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!pt(r)||!zt(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function CE(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!pt(i)||!zt(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Dc={name:"applyStyles",enabled:!0,phase:"write",fn:TE,effect:CE,requires:["computeStyles"]};function Ht(t){return t.split("-")[0]}var ls=Math.max,Ao=Math.min,Gs=Math.round;function Ul(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Yp(){return!/^((?!chrome|android).)*safari/i.test(Ul())}function Ys(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&pt(t)&&(i=t.offsetWidth>0&&Gs(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Gs(s.height)/t.offsetHeight||1);var o=hs(t)?mt(t):window,a=o.visualViewport,l=!Yp()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,d=s.width/i,f=s.height/r;return{width:d,height:f,top:u,right:c+d,bottom:u+f,left:c,x:c,y:u}}function Mc(t){var e=Ys(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function Qp(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&xc(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function cn(t){return mt(t).getComputedStyle(t)}function AE(t){return["table","td","th"].indexOf(zt(t))>=0}function Vn(t){return((hs(t)?t.ownerDocument:t.document)||window.document).documentElement}function da(t){return zt(t)==="html"?t:t.assignedSlot||t.parentNode||(xc(t)?t.host:null)||Vn(t)}function Id(t){return!pt(t)||cn(t).position==="fixed"?null:t.offsetParent}function IE(t){var e=/firefox/i.test(Ul()),n=/Trident/i.test(Ul());if(n&&pt(t)){var s=cn(t);if(s.position==="fixed")return null}var i=da(t);for(xc(i)&&(i=i.host);pt(i)&&["html","body"].indexOf(zt(i))<0;){var r=cn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function wr(t){for(var e=mt(t),n=Id(t);n&&AE(n)&&cn(n).position==="static";)n=Id(n);return n&&(zt(n)==="html"||zt(n)==="body"&&cn(n).position==="static")?e:n||IE(t)||e}function Lc(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function $i(t,e,n){return ls(t,Ao(e,n))}function SE(t,e,n){var s=$i(t,e,n);return s>n?n:s}function Xp(){return{top:0,right:0,bottom:0,left:0}}function Jp(t){return Object.assign({},Xp(),t)}function Zp(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var RE=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Jp(typeof e!="number"?e:Zp(e,di))};function NE(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Ht(n.placement),l=Lc(a),c=[Qe,at].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var d=RE(i.padding,n),f=Mc(r),p=l==="y"?Ye:Qe,m=l==="y"?ot:at,g=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],E=o[l]-n.rects.reference[l],b=wr(r),C=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,w=g/2-E/2,R=d[p],B=C-f[u]-d[m],W=C/2-f[u]/2+w,Y=$i(R,W,B),F=l;n.modifiersData[s]=(e={},e[F]=Y,e.centerOffset=Y-W,e)}}function kE(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||Qp(e.elements.popper,i)&&(e.elements.arrow=i))}const e_={name:"arrow",enabled:!0,phase:"main",fn:NE,effect:kE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qs(t){return t.split("-")[1]}var OE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function PE(t){var e=t.x,n=t.y,s=window,i=s.devicePixelRatio||1;return{x:Gs(e*i)/i||0,y:Gs(n*i)/i||0}}function Sd(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,g=m===void 0?0:m,E=typeof u=="function"?u({x:p,y:g}):{x:p,y:g};p=E.x,g=E.y;var b=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),w=Qe,R=Ye,B=window;if(c){var W=wr(n),Y="clientHeight",F="clientWidth";if(W===mt(n)&&(W=Vn(n),cn(W).position!=="static"&&a==="absolute"&&(Y="scrollHeight",F="scrollWidth")),W=W,i===Ye||(i===Qe||i===at)&&r===zs){R=ot;var G=d&&W===B&&B.visualViewport?B.visualViewport.height:W[Y];g-=G-s.height,g*=l?1:-1}if(i===Qe||(i===Ye||i===ot)&&r===zs){w=at;var j=d&&W===B&&B.visualViewport?B.visualViewport.width:W[F];p-=j-s.width,p*=l?1:-1}}var ae=Object.assign({position:a},c&&OE),_e=u===!0?PE({x:p,y:g}):{x:p,y:g};if(p=_e.x,g=_e.y,l){var me;return Object.assign({},ae,(me={},me[R]=C?"0":"",me[w]=b?"0":"",me.transform=(B.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",me))}return Object.assign({},ae,(e={},e[R]=C?g+"px":"",e[w]=b?p+"px":"",e.transform="",e))}function xE(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:Ht(e.placement),variation:Qs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Sd(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Sd(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Fc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:xE,data:{}};var jr={passive:!0};function DE(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=mt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,jr)}),a&&l.addEventListener("resize",n.update,jr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,jr)}),a&&l.removeEventListener("resize",n.update,jr)}}const Uc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:DE,data:{}};var ME={left:"right",right:"left",bottom:"top",top:"bottom"};function fo(t){return t.replace(/left|right|bottom|top/g,function(e){return ME[e]})}var LE={start:"end",end:"start"};function Rd(t){return t.replace(/start|end/g,function(e){return LE[e]})}function Bc(t){var e=mt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function $c(t){return Ys(Vn(t)).left+Bc(t).scrollLeft}function FE(t,e){var n=mt(t),s=Vn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=Yp();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+$c(t),y:l}}function UE(t){var e,n=Vn(t),s=Bc(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=ls(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=ls(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+$c(t),l=-s.scrollTop;return cn(i||n).direction==="rtl"&&(a+=ls(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Hc(t){var e=cn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function t_(t){return["html","body","#document"].indexOf(zt(t))>=0?t.ownerDocument.body:pt(t)&&Hc(t)?t:t_(da(t))}function Hi(t,e){var n;e===void 0&&(e=[]);var s=t_(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=mt(s),o=i?[r].concat(r.visualViewport||[],Hc(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Hi(da(o)))}function Bl(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function BE(t,e){var n=Ys(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Nd(t,e,n){return e===Oc?Bl(FE(t,n)):hs(e)?BE(e,n):Bl(UE(Vn(t)))}function $E(t){var e=Hi(da(t)),n=["absolute","fixed"].indexOf(cn(t).position)>=0,s=n&&pt(t)?wr(t):t;return hs(s)?e.filter(function(i){return hs(i)&&Qp(i,s)&&zt(i)!=="body"}):[]}function HE(t,e,n,s){var i=e==="clippingParents"?$E(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=Nd(t,c,s);return l.top=ls(u.top,l.top),l.right=Ao(u.right,l.right),l.bottom=Ao(u.bottom,l.bottom),l.left=ls(u.left,l.left),l},Nd(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function n_(t){var e=t.reference,n=t.element,s=t.placement,i=s?Ht(s):null,r=s?Qs(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ye:l={x:o,y:e.y-n.height};break;case ot:l={x:o,y:e.y+e.height};break;case at:l={x:e.x+e.width,y:a};break;case Qe:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Lc(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case fs:l[c]=l[c]-(e[u]/2-n[u]/2);break;case zs:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Xs(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Fp:a,c=n.rootBoundary,u=c===void 0?Oc:c,d=n.elementContext,f=d===void 0?Ns:d,p=n.altBoundary,m=p===void 0?!1:p,g=n.padding,E=g===void 0?0:g,b=Jp(typeof E!="number"?E:Zp(E,di)),C=f===Ns?Up:Ns,w=t.rects.popper,R=t.elements[m?C:f],B=HE(hs(R)?R:R.contextElement||Vn(t.elements.popper),l,u,o),W=Ys(t.elements.reference),Y=n_({reference:W,element:w,strategy:"absolute",placement:i}),F=Bl(Object.assign({},w,Y)),G=f===Ns?F:W,j={top:B.top-G.top+b.top,bottom:G.bottom-B.bottom+b.bottom,left:B.left-G.left+b.left,right:G.right-B.right+b.right},ae=t.modifiersData.offset;if(f===Ns&&ae){var _e=ae[i];Object.keys(j).forEach(function(me){var $e=[at,ot].indexOf(me)>=0?1:-1,nt=[Ye,ot].indexOf(me)>=0?"y":"x";j[me]+=_e[nt]*$e})}return j}function WE(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Pc:l,u=Qs(s),d=u?a?Fl:Fl.filter(function(m){return Qs(m)===u}):di,f=d.filter(function(m){return c.indexOf(m)>=0});f.length===0&&(f=d);var p=f.reduce(function(m,g){return m[g]=Xs(t,{placement:g,boundary:i,rootBoundary:r,padding:o})[Ht(g)],m},{});return Object.keys(p).sort(function(m,g){return p[m]-p[g]})}function VE(t){if(Ht(t)===ua)return[];var e=fo(t);return[Rd(t),e,Rd(e)]}function jE(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,g=n.allowedAutoPlacements,E=e.options.placement,b=Ht(E),C=b===E,w=l||(C||!m?[fo(E)]:VE(E)),R=[E].concat(w).reduce(function(bt,T){return bt.concat(Ht(T)===ua?WE(e,{placement:T,boundary:u,rootBoundary:d,padding:c,flipVariations:m,allowedAutoPlacements:g}):T)},[]),B=e.rects.reference,W=e.rects.popper,Y=new Map,F=!0,G=R[0],j=0;j<R.length;j++){var ae=R[j],_e=Ht(ae),me=Qs(ae)===fs,$e=[Ye,ot].indexOf(_e)>=0,nt=$e?"width":"height",oe=Xs(e,{placement:ae,boundary:u,rootBoundary:d,altBoundary:f,padding:c}),ee=$e?me?at:Qe:me?ot:Ye;B[nt]>W[nt]&&(ee=fo(ee));var le=fo(ee),Pe=[];if(r&&Pe.push(oe[_e]<=0),a&&Pe.push(oe[ee]<=0,oe[le]<=0),Pe.every(function(bt){return bt})){G=ae,F=!1;break}Y.set(ae,Pe)}if(F)for(var lt=m?3:1,Ke=function(T){var D=R.find(function(x){var U=Y.get(x);if(U)return U.slice(0,T).every(function(ne){return ne})});if(D)return G=D,"break"},ke=lt;ke>0;ke--){var vt=Ke(ke);if(vt==="break")break}e.placement!==G&&(e.modifiersData[s]._skip=!0,e.placement=G,e.reset=!0)}}const s_={name:"flip",enabled:!0,phase:"main",fn:jE,requiresIfExists:["offset"],data:{_skip:!1}};function kd(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Od(t){return[Ye,at,ot,Qe].some(function(e){return t[e]>=0})}function KE(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Xs(e,{elementContext:"reference"}),a=Xs(e,{altBoundary:!0}),l=kd(o,s),c=kd(a,i,r),u=Od(l),d=Od(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const i_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:KE};function qE(t,e,n){var s=Ht(t),i=[Qe,Ye].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Qe,at].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function zE(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Pc.reduce(function(u,d){return u[d]=qE(d,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const r_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zE};function GE(t){var e=t.state,n=t.name;e.modifiersData[n]=n_({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Wc={name:"popperOffsets",enabled:!0,phase:"read",fn:GE,data:{}};function YE(t){return t==="x"?"y":"x"}function QE(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0?!0:f,m=n.tetherOffset,g=m===void 0?0:m,E=Xs(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),b=Ht(e.placement),C=Qs(e.placement),w=!C,R=Lc(b),B=YE(R),W=e.modifiersData.popperOffsets,Y=e.rects.reference,F=e.rects.popper,G=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,j=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),ae=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,_e={x:0,y:0};if(W){if(r){var me,$e=R==="y"?Ye:Qe,nt=R==="y"?ot:at,oe=R==="y"?"height":"width",ee=W[R],le=ee+E[$e],Pe=ee-E[nt],lt=p?-F[oe]/2:0,Ke=C===fs?Y[oe]:F[oe],ke=C===fs?-F[oe]:-Y[oe],vt=e.elements.arrow,bt=p&&vt?Mc(vt):{width:0,height:0},T=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Xp(),D=T[$e],x=T[nt],U=$i(0,Y[oe],bt[oe]),ne=w?Y[oe]/2-lt-U-D-j.mainAxis:Ke-U-D-j.mainAxis,Ee=w?-Y[oe]/2+lt+U+x+j.mainAxis:ke+U+x+j.mainAxis,Q=e.elements.arrow&&wr(e.elements.arrow),h=Q?R==="y"?Q.clientTop||0:Q.clientLeft||0:0,_=(me=ae==null?void 0:ae[R])!=null?me:0,v=ee+ne-_-h,y=ee+Ee-_,A=$i(p?Ao(le,v):le,ee,p?ls(Pe,y):Pe);W[R]=A,_e[R]=A-ee}if(a){var O,M=R==="x"?Ye:Qe,N=R==="x"?ot:at,P=W[B],I=B==="y"?"height":"width",H=P+E[M],L=P-E[N],$=[Ye,Qe].indexOf(b)!==-1,K=(O=ae==null?void 0:ae[B])!=null?O:0,Z=$?H:P-Y[I]-F[I]-K+j.altAxis,he=$?P+Y[I]+F[I]-K-j.altAxis:L,fe=p&&$?SE(Z,P,he):$i(p?Z:H,P,p?he:L);W[B]=fe,_e[B]=fe-P}e.modifiersData[s]=_e}}const o_={name:"preventOverflow",enabled:!0,phase:"main",fn:QE,requiresIfExists:["offset"]};function XE(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function JE(t){return t===mt(t)||!pt(t)?Bc(t):XE(t)}function ZE(t){var e=t.getBoundingClientRect(),n=Gs(e.width)/t.offsetWidth||1,s=Gs(e.height)/t.offsetHeight||1;return n!==1||s!==1}function ew(t,e,n){n===void 0&&(n=!1);var s=pt(e),i=pt(e)&&ZE(e),r=Vn(e),o=Ys(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((zt(e)!=="body"||Hc(r))&&(a=JE(e)),pt(e)?(l=Ys(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=$c(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function tw(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function nw(t){var e=tw(t);return Gp.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function sw(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function iw(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Pd={placement:"bottom",modifiers:[],strategy:"absolute"};function xd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function fa(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Pd:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pd,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],f=!1,p={state:u,setOptions:function(b){var C=typeof b=="function"?b(u.options):b;g(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:hs(a)?Hi(a):a.contextElement?Hi(a.contextElement):[],popper:Hi(l)};var w=nw(iw([].concat(s,u.options.modifiers)));return u.orderedModifiers=w.filter(function(R){return R.enabled}),m(),p.update()},forceUpdate:function(){if(!f){var b=u.elements,C=b.reference,w=b.popper;if(xd(C,w)){u.rects={reference:ew(C,wr(w),u.options.strategy==="fixed"),popper:Mc(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(j){return u.modifiersData[j.name]=Object.assign({},j.data)});for(var R=0;R<u.orderedModifiers.length;R++){if(u.reset===!0){u.reset=!1,R=-1;continue}var B=u.orderedModifiers[R],W=B.fn,Y=B.options,F=Y===void 0?{}:Y,G=B.name;typeof W=="function"&&(u=W({state:u,options:F,name:G,instance:p})||u)}}}},update:sw(function(){return new Promise(function(E){p.forceUpdate(),E(u)})}),destroy:function(){g(),f=!0}};if(!xd(a,l))return p;p.setOptions(c).then(function(E){!f&&c.onFirstUpdate&&c.onFirstUpdate(E)});function m(){u.orderedModifiers.forEach(function(E){var b=E.name,C=E.options,w=C===void 0?{}:C,R=E.effect;if(typeof R=="function"){var B=R({state:u,name:b,instance:p,options:w}),W=function(){};d.push(B||W)}})}function g(){d.forEach(function(E){return E()}),d=[]}return p}}var rw=fa(),ow=[Uc,Wc,Fc,Dc],aw=fa({defaultModifiers:ow}),lw=[Uc,Wc,Fc,Dc,r_,s_,o_,e_,i_],Vc=fa({defaultModifiers:lw});const a_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:jp,afterRead:Hp,afterWrite:zp,applyStyles:Dc,arrow:e_,auto:ua,basePlacements:di,beforeMain:Wp,beforeRead:Bp,beforeWrite:Kp,bottom:ot,clippingParents:Fp,computeStyles:Fc,createPopper:Vc,createPopperBase:rw,createPopperLite:aw,detectOverflow:Xs,end:zs,eventListeners:Uc,flip:s_,hide:i_,left:Qe,main:Vp,modifierPhases:Gp,offset:r_,placements:Pc,popper:Ns,popperGenerator:fa,popperOffsets:Wc,preventOverflow:o_,read:$p,reference:Up,right:at,start:fs,top:Ye,variationPlacements:Fl,viewport:Oc,write:qp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const cw=1e6,uw=1e3,$l="transitionend",dw=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),fw=t=>{do t+=Math.floor(Math.random()*cw);while(document.getElementById(t));return t},l_=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},c_=t=>{const e=l_(t);return e&&document.querySelector(e)?e:null},nn=t=>{const e=l_(t);return e?document.querySelector(e):null},hw=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*uw)},u_=t=>{t.dispatchEvent(new Event($l))},sn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Ln=t=>sn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,fi=t=>{if(!sn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Fn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",d_=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d_(t.parentNode):null},Io=()=>{},Tr=t=>{t.offsetHeight},f_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ja=[],pw=t=>{document.readyState==="loading"?(ja.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of ja)e()}),ja.push(t)):t()},_t=()=>document.documentElement.dir==="rtl",gt=t=>{pw(()=>{const e=f_();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Xt=t=>{typeof t=="function"&&t()},h_=(t,e,n=!0)=>{if(!n){Xt(t);return}const s=5,i=hw(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener($l,o),Xt(t))};e.addEventListener($l,o),setTimeout(()=>{r||u_(e)},i)},jc=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},_w=/[^.]*(?=\..*)\.|.*/,mw=/\..*/,gw=/::\d+$/,Ka={};let Dd=1;const p_={mouseenter:"mouseover",mouseleave:"mouseout"},vw=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function __(t,e){return e&&`${e}::${Dd++}`||t.uidEvent||Dd++}function m_(t){const e=__(t);return t.uidEvent=e,Ka[e]=Ka[e]||{},Ka[e]}function bw(t,e){return function n(s){return Kc(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function yw(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Kc(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function g_(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function v_(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=b_(t);return vw.has(r)||(r=t),[s,i,r]}function Md(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=v_(e,n,s);e in p_&&(o=(m=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return m.call(this,g)})(o));const l=m_(t),c=l[a]||(l[a]={}),u=g_(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const d=__(o,e.replace(_w,"")),f=r?yw(t,n,o):bw(t,o);f.delegationSelector=r?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,c[d]=f,t.addEventListener(a,f,r)}function Hl(t,e,n,s,i){const r=g_(e[n],s,i);r&&(t.removeEventListener(n,r,Boolean(i)),delete e[n][r.uidEvent])}function Ew(t,e,n,s){const i=e[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];Hl(t,e,n,o.callable,o.delegationSelector)}}function b_(t){return t=t.replace(mw,""),p_[t]||t}const S={on(t,e,n,s){Md(t,e,n,s,!1)},one(t,e,n,s){Md(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=v_(e,n,s),a=o!==e,l=m_(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;Hl(t,l,o,r,i?n:null);return}if(u)for(const d of Object.keys(l))Ew(t,l,d,e.slice(1));for(const d of Object.keys(c)){const f=d.replace(gw,"");if(!a||e.includes(f)){const p=c[d];Hl(t,l,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=f_(),i=b_(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=Kc(u,n),c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Kc(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const vn=new Map,qa={set(t,e,n){vn.has(t)||vn.set(t,new Map);const s=vn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return vn.has(t)&&vn.get(t).get(e)||null},remove(t,e){if(!vn.has(t))return;const n=vn.get(t);n.delete(e),n.size===0&&vn.delete(t)}};function Ld(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function za(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const rn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${za(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${za(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Ld(t.dataset[s])}return e},getDataAttribute(t,e){return Ld(t.getAttribute(`data-bs-${za(e)}`))}};class Cr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=sn(n)?rn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...sn(n)?rn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=e[s],o=sn(r)?"element":dw(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const ww="5.2.3";class xt extends Cr{constructor(e,n){super(),e=Ln(e),e&&(this._element=e,this._config=this._getConfig(n),qa.set(this._element,this.constructor.DATA_KEY,this))}dispose(){qa.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){h_(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return qa.get(Ln(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return ww}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ha=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Fn(this))return;const r=nn(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},Tw="alert",Cw="bs.alert",y_=`.${Cw}`,Aw=`close${y_}`,Iw=`closed${y_}`,Sw="fade",Rw="show";class pa extends xt{static get NAME(){return Tw}close(){if(S.trigger(this._element,Aw).defaultPrevented)return;this._element.classList.remove(Rw);const n=this._element.classList.contains(Sw);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,Iw),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=pa.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ha(pa,"close");gt(pa);const Nw="button",kw="bs.button",Ow=`.${kw}`,Pw=".data-api",xw="active",Fd='[data-bs-toggle="button"]',Dw=`click${Ow}${Pw}`;class _a extends xt{static get NAME(){return Nw}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(xw))}static jQueryInterface(e){return this.each(function(){const n=_a.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,Dw,Fd,t=>{t.preventDefault();const e=t.target.closest(Fd);_a.getOrCreateInstance(e).toggle()});gt(_a);const J={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Fn(n)&&fi(n))}},Mw="swipe",hi=".bs.swipe",Lw=`touchstart${hi}`,Fw=`touchmove${hi}`,Uw=`touchend${hi}`,Bw=`pointerdown${hi}`,$w=`pointerup${hi}`,Hw="touch",Ww="pen",Vw="pointer-event",jw=40,Kw={endCallback:null,leftCallback:null,rightCallback:null},qw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class So extends Cr{constructor(e,n){super(),this._element=e,!(!e||!So.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Kw}static get DefaultType(){return qw}static get NAME(){return Mw}dispose(){S.off(this._element,hi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Xt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=jw)return;const n=e/this._deltaX;this._deltaX=0,n&&Xt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,Bw,e=>this._start(e)),S.on(this._element,$w,e=>this._end(e)),this._element.classList.add(Vw)):(S.on(this._element,Lw,e=>this._start(e)),S.on(this._element,Fw,e=>this._move(e)),S.on(this._element,Uw,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Ww||e.pointerType===Hw)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const zw="carousel",Gw="bs.carousel",jn=`.${Gw}`,E_=".data-api",Yw="ArrowLeft",Qw="ArrowRight",Xw=500,Ii="next",As="prev",ks="left",ho="right",Jw=`slide${jn}`,Ga=`slid${jn}`,Zw=`keydown${jn}`,eT=`mouseenter${jn}`,tT=`mouseleave${jn}`,nT=`dragstart${jn}`,sT=`load${jn}${E_}`,iT=`click${jn}${E_}`,w_="carousel",Kr="active",rT="slide",oT="carousel-item-end",aT="carousel-item-start",lT="carousel-item-next",cT="carousel-item-prev",T_=".active",C_=".carousel-item",uT=T_+C_,dT=".carousel-item img",fT=".carousel-indicators",hT="[data-bs-slide], [data-bs-slide-to]",pT='[data-bs-ride="carousel"]',_T={[Yw]:ho,[Qw]:ks},mT={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},gT={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ar extends xt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=J.findOne(fT,this._element),this._addEventListeners(),this._config.ride===w_&&this.cycle()}static get Default(){return mT}static get DefaultType(){return gT}static get NAME(){return zw}next(){this._slide(Ii)}nextWhenVisible(){!document.hidden&&fi(this._element)&&this.next()}prev(){this._slide(As)}pause(){this._isSliding&&u_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,Ga,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,Ga,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Ii:As;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,Zw,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,eT,()=>this.pause()),S.on(this._element,tT,()=>this._maybeEnableCycle())),this._config.touch&&So.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of J.find(dT,this._element))S.on(s,nT,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ks)),rightCallback:()=>this._slide(this._directionToOrder(ho)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Xw+this._config.interval))}};this._swipeHelper=new So(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=_T[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=J.findOne(T_,this._indicatorsElement);n.classList.remove(Kr),n.removeAttribute("aria-current");const s=J.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Kr),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Ii,r=n||jc(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=p=>S.trigger(this._element,p,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(Jw).defaultPrevented||!s||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?aT:oT,d=i?lT:cT;r.classList.add(d),Tr(r),s.classList.add(u),r.classList.add(u);const f=()=>{r.classList.remove(u,d),r.classList.add(Kr),s.classList.remove(Kr,d,u),this._isSliding=!1,a(Ga)};this._queueCallback(f,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(rT)}_getActive(){return J.findOne(uT,this._element)}_getItems(){return J.find(C_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return _t()?e===ks?As:Ii:e===ks?Ii:As}_orderToDirection(e){return _t()?e===As?ks:ho:e===As?ho:ks}static jQueryInterface(e){return this.each(function(){const n=Ar.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,iT,hT,function(t){const e=nn(this);if(!e||!e.classList.contains(w_))return;t.preventDefault();const n=Ar.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(rn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,sT,()=>{const t=J.find(pT);for(const e of t)Ar.getOrCreateInstance(e)});gt(Ar);const vT="collapse",bT="bs.collapse",Ir=`.${bT}`,yT=".data-api",ET=`show${Ir}`,wT=`shown${Ir}`,TT=`hide${Ir}`,CT=`hidden${Ir}`,AT=`click${Ir}${yT}`,Ya="show",xs="collapse",qr="collapsing",IT="collapsed",ST=`:scope .${xs} .${xs}`,RT="collapse-horizontal",NT="width",kT="height",OT=".collapse.show, .collapse.collapsing",Wl='[data-bs-toggle="collapse"]',PT={parent:null,toggle:!0},xT={parent:"(null|element)",toggle:"boolean"};class sr extends xt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=J.find(Wl);for(const i of s){const r=c_(i),o=J.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return PT}static get DefaultType(){return xT}static get NAME(){return vT}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(OT).filter(a=>a!==this._element).map(a=>sr.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,ET).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(xs),this._element.classList.add(qr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(qr),this._element.classList.add(xs,Ya),this._element.style[s]="",S.trigger(this._element,wT)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,TT).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Tr(this._element),this._element.classList.add(qr),this._element.classList.remove(xs,Ya);for(const i of this._triggerArray){const r=nn(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(qr),this._element.classList.add(xs),S.trigger(this._element,CT)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ya)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Ln(e.parent),e}_getDimension(){return this._element.classList.contains(RT)?NT:kT}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Wl);for(const n of e){const s=nn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=J.find(ST,this._config.parent);return J.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(IT,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=sr.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,AT,Wl,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=c_(this),n=J.find(e);for(const s of n)sr.getOrCreateInstance(s,{toggle:!1}).toggle()});gt(sr);const Ud="dropdown",DT="bs.dropdown",Es=`.${DT}`,qc=".data-api",MT="Escape",Bd="Tab",LT="ArrowUp",$d="ArrowDown",FT=2,UT=`hide${Es}`,BT=`hidden${Es}`,$T=`show${Es}`,HT=`shown${Es}`,A_=`click${Es}${qc}`,I_=`keydown${Es}${qc}`,WT=`keyup${Es}${qc}`,Os="show",VT="dropup",jT="dropend",KT="dropstart",qT="dropup-center",zT="dropdown-center",ns='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',GT=`${ns}.${Os}`,po=".dropdown-menu",YT=".navbar",QT=".navbar-nav",XT=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",JT=_t()?"top-end":"top-start",ZT=_t()?"top-start":"top-end",eC=_t()?"bottom-end":"bottom-start",tC=_t()?"bottom-start":"bottom-end",nC=_t()?"left-start":"right-start",sC=_t()?"right-start":"left-start",iC="top",rC="bottom",oC={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},aC={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Wt extends xt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=J.next(this._element,po)[0]||J.prev(this._element,po)[0]||J.findOne(po,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return oC}static get DefaultType(){return aC}static get NAME(){return Ud}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Fn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,$T,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(QT))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",Io);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Os),this._element.classList.add(Os),S.trigger(this._element,HT,e)}}hide(){if(Fn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,UT,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",Io);this._popper&&this._popper.destroy(),this._menu.classList.remove(Os),this._element.classList.remove(Os),this._element.setAttribute("aria-expanded","false"),rn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,BT,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!sn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Ud.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof a_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:sn(this._config.reference)?e=Ln(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Vc(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Os)}_getPlacement(){const e=this._parent;if(e.classList.contains(jT))return nC;if(e.classList.contains(KT))return sC;if(e.classList.contains(qT))return iC;if(e.classList.contains(zT))return rC;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(VT)?n?ZT:JT:n?tC:eC}_detectNavbar(){return this._element.closest(YT)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(rn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=J.find(XT,this._menu).filter(i=>fi(i));s.length&&jc(s,n,e===$d,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Wt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===FT||e.type==="keyup"&&e.key!==Bd)return;const n=J.find(GT);for(const s of n){const i=Wt.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Bd||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===MT,i=[LT,$d].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(ns)?this:J.prev(this,ns)[0]||J.next(this,ns)[0]||J.findOne(ns,e.delegateTarget.parentNode),o=Wt.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,I_,ns,Wt.dataApiKeydownHandler);S.on(document,I_,po,Wt.dataApiKeydownHandler);S.on(document,A_,Wt.clearMenus);S.on(document,WT,Wt.clearMenus);S.on(document,A_,ns,function(t){t.preventDefault(),Wt.getOrCreateInstance(this).toggle()});gt(Wt);const Hd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Wd=".sticky-top",zr="padding-right",Vd="margin-right";class Vl{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,zr,n=>n+e),this._setElementAttributes(Hd,zr,n=>n+e),this._setElementAttributes(Wd,Vd,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,zr),this._resetElementAttributes(Hd,zr),this._resetElementAttributes(Wd,Vd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&rn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=rn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}rn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(sn(e)){n(e);return}for(const s of J.find(e,this._element))n(s)}}const S_="backdrop",lC="fade",jd="show",Kd=`mousedown.bs.${S_}`,cC={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},uC={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class R_ extends Cr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return cC}static get DefaultType(){return uC}static get NAME(){return S_}show(e){if(!this._config.isVisible){Xt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Tr(n),n.classList.add(jd),this._emulateAnimation(()=>{Xt(e)})}hide(e){if(!this._config.isVisible){Xt(e);return}this._getElement().classList.remove(jd),this._emulateAnimation(()=>{this.dispose(),Xt(e)})}dispose(){this._isAppended&&(S.off(this._element,Kd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(lC),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ln(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,Kd,()=>{Xt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){h_(e,this._getElement(),this._config.isAnimated)}}const dC="focustrap",fC="bs.focustrap",Ro=`.${fC}`,hC=`focusin${Ro}`,pC=`keydown.tab${Ro}`,_C="Tab",mC="forward",qd="backward",gC={autofocus:!0,trapElement:null},vC={autofocus:"boolean",trapElement:"element"};class N_ extends Cr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return gC}static get DefaultType(){return vC}static get NAME(){return dC}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Ro),S.on(document,hC,e=>this._handleFocusin(e)),S.on(document,pC,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Ro))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=J.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===qd?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===_C&&(this._lastTabNavDirection=e.shiftKey?qd:mC)}}const bC="modal",yC="bs.modal",Dt=`.${yC}`,EC=".data-api",wC="Escape",TC=`hide${Dt}`,CC=`hidePrevented${Dt}`,k_=`hidden${Dt}`,O_=`show${Dt}`,AC=`shown${Dt}`,IC=`resize${Dt}`,SC=`click.dismiss${Dt}`,RC=`mousedown.dismiss${Dt}`,NC=`keydown.dismiss${Dt}`,kC=`click${Dt}${EC}`,zd="modal-open",OC="fade",Gd="show",Qa="modal-static",PC=".modal.show",xC=".modal-dialog",DC=".modal-body",MC='[data-bs-toggle="modal"]',LC={backdrop:!0,focus:!0,keyboard:!0},FC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Js extends xt{constructor(e,n){super(e,n),this._dialog=J.findOne(xC,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Vl,this._addEventListeners()}static get Default(){return LC}static get DefaultType(){return FC}static get NAME(){return bC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,O_,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(zd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,TC).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Gd),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])S.off(e,Dt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new R_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new N_({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=J.findOne(DC,this._dialog);n&&(n.scrollTop=0),Tr(this._element),this._element.classList.add(Gd);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,AC,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,NC,e=>{if(e.key===wC){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),S.on(window,IC,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,RC,e=>{S.one(this._element,SC,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(zd),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,k_)})}_isAnimated(){return this._element.classList.contains(OC)}_triggerBackdropTransition(){if(S.trigger(this._element,CC).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Qa)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Qa),this._queueCallback(()=>{this._element.classList.remove(Qa),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=_t()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=_t()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Js.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,kC,MC,function(t){const e=nn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,O_,i=>{i.defaultPrevented||S.one(e,k_,()=>{fi(this)&&this.focus()})});const n=J.findOne(PC);n&&Js.getInstance(n).hide(),Js.getOrCreateInstance(e).toggle(this)});ha(Js);gt(Js);const UC="offcanvas",BC="bs.offcanvas",hn=`.${BC}`,P_=".data-api",$C=`load${hn}${P_}`,HC="Escape",Yd="show",Qd="showing",Xd="hiding",WC="offcanvas-backdrop",x_=".offcanvas.show",VC=`show${hn}`,jC=`shown${hn}`,KC=`hide${hn}`,Jd=`hidePrevented${hn}`,D_=`hidden${hn}`,qC=`resize${hn}`,zC=`click${hn}${P_}`,GC=`keydown.dismiss${hn}`,YC='[data-bs-toggle="offcanvas"]',QC={backdrop:!0,keyboard:!0,scroll:!1},XC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Un extends xt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return QC}static get DefaultType(){return XC}static get NAME(){return UC}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,VC,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Vl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Qd);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Yd),this._element.classList.remove(Qd),S.trigger(this._element,jC,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,KC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Xd),this._backdrop.hide();const n=()=>{this._element.classList.remove(Yd,Xd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Vl().reset(),S.trigger(this._element,D_)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,Jd);return}this.hide()},n=Boolean(this._config.backdrop);return new R_({className:WC,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new N_({trapElement:this._element})}_addEventListeners(){S.on(this._element,GC,e=>{if(e.key===HC){if(!this._config.keyboard){S.trigger(this._element,Jd);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Un.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,zC,YC,function(t){const e=nn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Fn(this))return;S.one(e,D_,()=>{fi(this)&&this.focus()});const n=J.findOne(x_);n&&n!==e&&Un.getInstance(n).hide(),Un.getOrCreateInstance(e).toggle(this)});S.on(window,$C,()=>{for(const t of J.find(x_))Un.getOrCreateInstance(t).show()});S.on(window,qC,()=>{for(const t of J.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Un.getOrCreateInstance(t).hide()});ha(Un);gt(Un);const JC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ZC=/^aria-[\w-]*$/i,eA=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,tA=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,nA=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?JC.has(n)?Boolean(eA.test(t.nodeValue)||tA.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},M_={"*":["class","dir","id","lang","role",ZC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function sA(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)nA(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const iA="TemplateFactory",rA={allowList:M_,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},oA={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},aA={entry:"(string|element|function|null)",selector:"(string|element)"};class lA extends Cr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return rA}static get DefaultType(){return oA}static get NAME(){return iA}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},aA)}_setContent(e,n,s){const i=J.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(sn(n)){this._putElementInTemplate(Ln(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?sA(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const cA="tooltip",uA=new Set(["sanitize","allowList","sanitizeFn"]),Xa="fade",dA="modal",Gr="show",fA=".tooltip-inner",Zd=`.${dA}`,ef="hide.bs.modal",Si="hover",Ja="focus",hA="click",pA="manual",_A="hide",mA="hidden",gA="show",vA="shown",bA="inserted",yA="click",EA="focusin",wA="focusout",TA="mouseenter",CA="mouseleave",AA={AUTO:"auto",TOP:"top",RIGHT:_t()?"left":"right",BOTTOM:"bottom",LEFT:_t()?"right":"left"},IA={allowList:M_,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},SA={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class pi extends xt{constructor(e,n){if(typeof a_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return IA}static get DefaultType(){return SA}static get NAME(){return cA}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(Zd),ef,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(gA)),s=(d_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(bA))),this._popper=this._createPopper(i),i.classList.add(Gr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",Io);const o=()=>{S.trigger(this._element,this.constructor.eventName(vA)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(_A)).defaultPrevented)return;if(this._getTipElement().classList.remove(Gr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",Io);this._activeTrigger[hA]=!1,this._activeTrigger[Ja]=!1,this._activeTrigger[Si]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(mA)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(Xa,Gr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=fw(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Xa),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new lA({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[fA]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xa)}_isShown(){return this.tip&&this.tip.classList.contains(Gr)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=AA[n.toUpperCase()];return Vc(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(yA),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==pA){const s=n===Si?this.constructor.eventName(TA):this.constructor.eventName(EA),i=n===Si?this.constructor.eventName(CA):this.constructor.eventName(wA);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Ja:Si]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Ja:Si]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(Zd),ef,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=rn.getDataAttributes(this._element);for(const s of Object.keys(n))uA.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Ln(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=pi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}gt(pi);const RA="popover",NA=".popover-header",kA=".popover-body",OA={...pi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},PA={...pi.DefaultType,content:"(null|string|element|function)"};class zc extends pi{static get Default(){return OA}static get DefaultType(){return PA}static get NAME(){return RA}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[NA]:this._getTitle(),[kA]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=zc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}gt(zc);const xA="scrollspy",DA="bs.scrollspy",Gc=`.${DA}`,MA=".data-api",LA=`activate${Gc}`,tf=`click${Gc}`,FA=`load${Gc}${MA}`,UA="dropdown-item",Is="active",BA='[data-bs-spy="scroll"]',Za="[href]",$A=".nav, .list-group",nf=".nav-link",HA=".nav-item",WA=".list-group-item",VA=`${nf}, ${HA} > ${nf}, ${WA}`,jA=".dropdown",KA=".dropdown-toggle",qA={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},zA={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ma extends xt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return qA}static get DefaultType(){return zA}static get NAME(){return xA}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ln(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,tf),S.on(this._config.target,tf,Za,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=J.find(Za,this._config.target);for(const n of e){if(!n.hash||Fn(n))continue;const s=J.findOne(n.hash,this._element);fi(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Is),this._activateParents(e),S.trigger(this._element,LA,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(UA)){J.findOne(KA,e.closest(jA)).classList.add(Is);return}for(const n of J.parents(e,$A))for(const s of J.prev(n,VA))s.classList.add(Is)}_clearActiveClass(e){e.classList.remove(Is);const n=J.find(`${Za}.${Is}`,e);for(const s of n)s.classList.remove(Is)}static jQueryInterface(e){return this.each(function(){const n=ma.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,FA,()=>{for(const t of J.find(BA))ma.getOrCreateInstance(t)});gt(ma);const GA="tab",YA="bs.tab",ws=`.${YA}`,QA=`hide${ws}`,XA=`hidden${ws}`,JA=`show${ws}`,ZA=`shown${ws}`,eI=`click${ws}`,tI=`keydown${ws}`,nI=`load${ws}`,sI="ArrowLeft",sf="ArrowRight",iI="ArrowUp",rf="ArrowDown",ss="active",of="fade",el="show",rI="dropdown",oI=".dropdown-toggle",aI=".dropdown-menu",tl=":not(.dropdown-toggle)",lI='.list-group, .nav, [role="tablist"]',cI=".nav-item, .list-group-item",uI=`.nav-link${tl}, .list-group-item${tl}, [role="tab"]${tl}`,L_='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',nl=`${uI}, ${L_}`,dI=`.${ss}[data-bs-toggle="tab"], .${ss}[data-bs-toggle="pill"], .${ss}[data-bs-toggle="list"]`;class Zs extends xt{constructor(e){super(e),this._parent=this._element.closest(lI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,tI,n=>this._keydown(n)))}static get NAME(){return GA}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,QA,{relatedTarget:e}):null;S.trigger(e,JA,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ss),this._activate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(el);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,ZA,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(of))}_deactivate(e,n){if(!e)return;e.classList.remove(ss),e.blur(),this._deactivate(nn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(el);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,XA,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(of))}_keydown(e){if(![sI,sf,iI,rf].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[sf,rf].includes(e.key),s=jc(this._getChildren().filter(i=>!Fn(i)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),Zs.getOrCreateInstance(s).show())}_getChildren(){return J.find(nl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=nn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(rI))return;const i=(r,o)=>{const a=J.findOne(r,s);a&&a.classList.toggle(o,n)};i(oI,ss),i(aI,el),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ss)}_getInnerElement(e){return e.matches(nl)?e:J.findOne(nl,e)}_getOuterElement(e){return e.closest(cI)||e}static jQueryInterface(e){return this.each(function(){const n=Zs.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,eI,L_,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Fn(this)&&Zs.getOrCreateInstance(this).show()});S.on(window,nI,()=>{for(const t of J.find(dI))Zs.getOrCreateInstance(t)});gt(Zs);const fI="toast",hI="bs.toast",Kn=`.${hI}`,pI=`mouseover${Kn}`,_I=`mouseout${Kn}`,mI=`focusin${Kn}`,gI=`focusout${Kn}`,vI=`hide${Kn}`,bI=`hidden${Kn}`,yI=`show${Kn}`,EI=`shown${Kn}`,wI="fade",af="hide",Yr="show",Qr="showing",TI={animation:"boolean",autohide:"boolean",delay:"number"},CI={animation:!0,autohide:!0,delay:5e3};class ga extends xt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return CI}static get DefaultType(){return TI}static get NAME(){return fI}show(){if(S.trigger(this._element,yI).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(wI);const n=()=>{this._element.classList.remove(Qr),S.trigger(this._element,EI),this._maybeScheduleHide()};this._element.classList.remove(af),Tr(this._element),this._element.classList.add(Yr,Qr),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,vI).defaultPrevented)return;const n=()=>{this._element.classList.add(af),this._element.classList.remove(Qr,Yr),S.trigger(this._element,bI)};this._element.classList.add(Qr),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Yr),super.dispose()}isShown(){return this._element.classList.contains(Yr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,pI,e=>this._onInteraction(e,!0)),S.on(this._element,_I,e=>this._onInteraction(e,!1)),S.on(this._element,mI,e=>this._onInteraction(e,!0)),S.on(this._element,gI,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=ga.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ha(ga);gt(ga);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof window<"u";function AI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function sl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const Wi=()=>{},Ot=Array.isArray,II=/\/$/,SI=t=>t.replace(II,"");function il(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=OI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function RI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function NI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ei(e.matched[s],n.matched[i])&&F_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function F_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kI(t[n],e[n]))return!1;return!0}function kI(t,e){return Ot(t)?cf(t,e):Ot(e)?cf(e,t):t===e}function cf(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function OI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ir;(function(t){t.pop="pop",t.push="push"})(ir||(ir={}));var Vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vi||(Vi={}));function PI(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SI(t)}const xI=/^[^#]+#/;function DI(t,e){return t.replace(xI,"#")+e}function MI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const va=()=>({left:window.pageXOffset,top:window.pageYOffset});function LI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=MI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function FI(t,e){jl.set(t,e)}function UI(t){const e=jl.get(t);return jl.delete(t),e}let BI=()=>location.protocol+"//"+location.host;function U_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),lf(l,"")}return lf(n,t)+s+i}function $I(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=U_(t,location),m=n.value,g=e.value;let E=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}E=g?f.position-g.position:0}else s(p);i.forEach(b=>{b(n.value,m,{delta:E,type:ir.pop,direction:E?E>0?Vi.forward:Vi.back:Vi.unknown})})};function l(){o=n.value}function c(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:va()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function df(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?va():null}}function HI(t){const{history:e,location:n}=window,s={value:U_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:BI()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=pe({},e.state,df(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:va()});r(u.current,u,!0);const d=pe({},df(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function WI(t){t=PI(t);const e=HI(t),n=$I(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:DI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function VI(t){return typeof t=="string"||t&&typeof t=="object"}function B_(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$_=Symbol("");var ff;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ff||(ff={}));function ti(t,e){return pe(new Error,{type:t,[$_]:!0},e)}function Yt(t,e){return t instanceof Error&&$_ in t&&(e==null||!!(t.type&e))}const hf="[^/]+?",jI={sensitive:!1,strict:!1,start:!0,end:!0},KI=/[.+*?^${}()[\]/\\]/g;function qI(t,e){const n=pe({},jI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(KI,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:g,optional:E,regexp:b}=f;r.push({name:m,repeatable:g,optional:E});const C=b||hf;if(C!==hf){p+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+R.message)}}let w=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(w=E&&c.length<2?`(?:/${w})`:"/"+w),E&&(w+="?"),i+=w,p+=20,E&&(p+=-8),g&&(p+=-20),C===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:g,optional:E}=p,b=m in c?c[m]:"";if(Ot(b)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Ot(b)?b.join("/"):b;if(!C)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function zI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function GI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=zI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pf(s))return 1;if(pf(i))return-1}return i.length-s.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YI={type:0,value:""},QI=/[a-zA-Z0-9_]/;function XI(t){if(!t)return[[]];if(t==="/")return[[YI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:QI.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function JI(t,e,n){const s=qI(XI(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ZI(t,e){const n=[],s=new Map;e=gf({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,f){const p=!f,m=eS(u);m.aliasOf=f&&f.record;const g=gf(e,u),E=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of w)E.push(pe({},m,{components:f?f.record.components:m.components,path:R,aliasOf:f?f.record:m}))}let b,C;for(const w of E){const{path:R}=w;if(d&&R[0]!=="/"){const B=d.record.path,W=B[B.length-1]==="/"?"":"/";w.path=d.record.path+(R&&W+R)}if(b=JI(w,d,g),f?f.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),p&&u.name&&!mf(b)&&o(u.name)),m.children){const B=m.children;for(let W=0;W<B.length;W++)r(B[W],b,f&&f.children[W])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return C?()=>{o(C)}:Wi}function o(u){if(B_(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&GI(u,n[d])>=0&&(u.record.path!==n[d].record.path||!H_(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!mf(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,g;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ti(1,{location:u});g=f.record.name,p=pe(_f(d.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&_f(u.params,f.keys.map(C=>C.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(C=>C.re.test(m)),f&&(p=f.parse(m),g=f.record.name);else{if(f=d.name?s.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw ti(1,{location:u,currentLocation:d});g=f.record.name,p=pe({},d.params,u.params),m=f.stringify(p)}const E=[];let b=f;for(;b;)E.unshift(b.record),b=b.parent;return{name:g,path:m,params:p,matched:E,meta:nS(E)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _f(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function eS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function tS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nS(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function gf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function H_(t,e){return e.children.some(n=>n===t||H_(t,n))}const W_=/#/g,sS=/&/g,iS=/\//g,rS=/=/g,oS=/\?/g,V_=/\+/g,aS=/%5B/g,lS=/%5D/g,j_=/%5E/g,cS=/%60/g,K_=/%7B/g,uS=/%7C/g,q_=/%7D/g,dS=/%20/g;function Yc(t){return encodeURI(""+t).replace(uS,"|").replace(aS,"[").replace(lS,"]")}function fS(t){return Yc(t).replace(K_,"{").replace(q_,"}").replace(j_,"^")}function Kl(t){return Yc(t).replace(V_,"%2B").replace(dS,"+").replace(W_,"%23").replace(sS,"%26").replace(cS,"`").replace(K_,"{").replace(q_,"}").replace(j_,"^")}function hS(t){return Kl(t).replace(rS,"%3D")}function pS(t){return Yc(t).replace(W_,"%23").replace(oS,"%3F")}function _S(t){return t==null?"":pS(t).replace(iS,"%2F")}function No(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(V_," "),o=r.indexOf("="),a=No(o<0?r:r.slice(0,o)),l=o<0?null:No(r.slice(o+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vf(t){let e="";for(let n in t){const s=t[n];if(n=hS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(r=>r&&Kl(r)):[s&&Kl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function gS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const vS=Symbol(""),bf=Symbol(""),Qc=Symbol(""),z_=Symbol(""),ql=Symbol("");function Ri(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(ti(4,{from:n,to:e})):d instanceof Error?a(d):VI(d)?a(ti(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function rl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(bS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(wn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=AI(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&wn(f,n,s,r,o)()}))}}return i}function bS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yf(t){const e=tn(Qc),n=tn(z_),s=ft(()=>e.resolve(ut(t.to))),i=ft(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(ei.bind(null,u));if(f>-1)return f;const p=Ef(l[c-2]);return c>1&&Ef(u)===p&&d[d.length-1].path!==p?d.findIndex(ei.bind(null,l[c-2])):f}),r=ft(()=>i.value>-1&&TS(n.params,s.value.params)),o=ft(()=>i.value>-1&&i.value===n.matched.length-1&&F_(n.params,s.value.params));function a(l={}){return wS(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(Wi):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const yS=mp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yf,setup(t,{slots:e}){const n=br(yf(t)),{options:s}=tn(Qc),i=ft(()=>({[wf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Lp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ES=yS;function wS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ef(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wf=(t,e,n)=>t??e??n,CS=mp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=tn(ql),i=ft(()=>t.route||s.value),r=tn(bf,0),o=ft(()=>{let c=ut(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ft(()=>i.value.matched[o.value]);ro(bf,ft(()=>o.value+1)),ro(vS,a),ro(ql,i);const l=Ft();return oo(()=>[l.value,a.value,t.name],([c,u,d],[f,p,m])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ei(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Tf(n.default,{Component:f,route:c});const p=d.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=Lp(f,pe({},m,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Tf(n.default,{Component:E,route:c})||E}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const AS=CS;function IS(t){const e=ZI(t.routes,t),n=t.parseQuery||mS,s=t.stringifyQuery||vf,i=t.history,r=Ri(),o=Ri(),a=Ri(),l=mb(bn);let c=bn;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,T=>""+T),d=sl.bind(null,_S),f=sl.bind(null,No);function p(T,D){let x,U;return B_(T)?(x=e.getRecordMatcher(T),U=D):U=T,e.addRoute(U,x)}function m(T){const D=e.getRecordMatcher(T);D&&e.removeRoute(D)}function g(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function b(T,D){if(D=pe({},D||l.value),typeof T=="string"){const h=il(n,T,D.path),_=e.resolve({path:h.path},D),v=i.createHref(h.fullPath);return pe(h,_,{params:f(_.params),hash:No(h.hash),redirectedFrom:void 0,href:v})}let x;if("path"in T)x=pe({},T,{path:il(n,T.path,D.path).path});else{const h=pe({},T.params);for(const _ in h)h[_]==null&&delete h[_];x=pe({},T,{params:d(T.params)}),D.params=d(D.params)}const U=e.resolve(x,D),ne=T.hash||"";U.params=u(f(U.params));const Ee=RI(s,pe({},T,{hash:fS(ne),path:U.path})),Q=i.createHref(Ee);return pe({fullPath:Ee,hash:ne,query:s===vf?gS(T.query):T.query||{}},U,{redirectedFrom:void 0,href:Q})}function C(T){return typeof T=="string"?il(n,T,l.value.path):pe({},T)}function w(T,D){if(c!==T)return ti(8,{from:D,to:T})}function R(T){return Y(T)}function B(T){return R(pe(C(T),{replace:!0}))}function W(T){const D=T.matched[T.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let U=typeof x=="function"?x(T):x;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=C(U):{path:U},U.params={}),pe({query:T.query,hash:T.hash,params:"path"in U?{}:T.params},U)}}function Y(T,D){const x=c=b(T),U=l.value,ne=T.state,Ee=T.force,Q=T.replace===!0,h=W(x);if(h)return Y(pe(C(h),{state:typeof h=="object"?pe({},ne,h.state):ne,force:Ee,replace:Q}),D||x);const _=x;_.redirectedFrom=D;let v;return!Ee&&NI(s,U,x)&&(v=ti(16,{to:_,from:U}),lt(U,U,!0,!1)),(v?Promise.resolve(v):G(_,U)).catch(y=>Yt(y)?Yt(y,2)?y:Pe(y):ee(y,_,U)).then(y=>{if(y){if(Yt(y,2))return Y(pe({replace:Q},C(y.to),{state:typeof y.to=="object"?pe({},ne,y.to.state):ne,force:Ee}),D||_)}else y=ae(_,U,!0,Q,ne);return j(_,U,y),y})}function F(T,D){const x=w(T,D);return x?Promise.reject(x):Promise.resolve()}function G(T,D){let x;const[U,ne,Ee]=SS(T,D);x=rl(U.reverse(),"beforeRouteLeave",T,D);for(const h of U)h.leaveGuards.forEach(_=>{x.push(wn(_,T,D))});const Q=F.bind(null,T,D);return x.push(Q),Ss(x).then(()=>{x=[];for(const h of r.list())x.push(wn(h,T,D));return x.push(Q),Ss(x)}).then(()=>{x=rl(ne,"beforeRouteUpdate",T,D);for(const h of ne)h.updateGuards.forEach(_=>{x.push(wn(_,T,D))});return x.push(Q),Ss(x)}).then(()=>{x=[];for(const h of T.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Ot(h.beforeEnter))for(const _ of h.beforeEnter)x.push(wn(_,T,D));else x.push(wn(h.beforeEnter,T,D));return x.push(Q),Ss(x)}).then(()=>(T.matched.forEach(h=>h.enterCallbacks={}),x=rl(Ee,"beforeRouteEnter",T,D),x.push(Q),Ss(x))).then(()=>{x=[];for(const h of o.list())x.push(wn(h,T,D));return x.push(Q),Ss(x)}).catch(h=>Yt(h,8)?h:Promise.reject(h))}function j(T,D,x){for(const U of a.list())U(T,D,x)}function ae(T,D,x,U,ne){const Ee=w(T,D);if(Ee)return Ee;const Q=D===bn,h=Ps?history.state:{};x&&(U||Q?i.replace(T.fullPath,pe({scroll:Q&&h&&h.scroll},ne)):i.push(T.fullPath,ne)),l.value=T,lt(T,D,x,Q),Pe()}let _e;function me(){_e||(_e=i.listen((T,D,x)=>{if(!bt.listening)return;const U=b(T),ne=W(U);if(ne){Y(pe(ne,{replace:!0}),U).catch(Wi);return}c=U;const Ee=l.value;Ps&&FI(uf(Ee.fullPath,x.delta),va()),G(U,Ee).catch(Q=>Yt(Q,12)?Q:Yt(Q,2)?(Y(Q.to,U).then(h=>{Yt(h,20)&&!x.delta&&x.type===ir.pop&&i.go(-1,!1)}).catch(Wi),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ee(Q,U,Ee))).then(Q=>{Q=Q||ae(U,Ee,!1),Q&&(x.delta&&!Yt(Q,8)?i.go(-x.delta,!1):x.type===ir.pop&&Yt(Q,20)&&i.go(-1,!1)),j(U,Ee,Q)}).catch(Wi)}))}let $e=Ri(),nt=Ri(),oe;function ee(T,D,x){Pe(T);const U=nt.list();return U.length?U.forEach(ne=>ne(T,D,x)):console.error(T),Promise.reject(T)}function le(){return oe&&l.value!==bn?Promise.resolve():new Promise((T,D)=>{$e.add([T,D])})}function Pe(T){return oe||(oe=!T,me(),$e.list().forEach(([D,x])=>T?x(T):D()),$e.reset()),T}function lt(T,D,x,U){const{scrollBehavior:ne}=t;if(!Ps||!ne)return Promise.resolve();const Ee=!x&&UI(uf(T.fullPath,0))||(U||!x)&&history.state&&history.state.scroll||null;return ap().then(()=>ne(T,D,Ee)).then(Q=>Q&&LI(Q)).catch(Q=>ee(Q,T,D))}const Ke=T=>i.go(T);let ke;const vt=new Set,bt={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:E,getRoutes:g,resolve:b,options:t,push:R,replace:B,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:le,install(T){const D=this;T.component("RouterLink",ES),T.component("RouterView",AS),T.config.globalProperties.$router=D,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Ps&&!ke&&l.value===bn&&(ke=!0,R(i.location).catch(ne=>{}));const x={};for(const ne in bn)x[ne]=ft(()=>l.value[ne]);T.provide(Qc,D),T.provide(z_,br(x)),T.provide(ql,l);const U=T.unmount;vt.add(T),T.unmount=function(){vt.delete(T),vt.size<1&&(c=bn,_e&&_e(),_e=null,l.value=bn,ke=!1,oe=!1),U()}}};return bt}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function SS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ei(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ei(c,l))||i.push(l))}return[n,s,i]}const RS="modulepreload",NS=function(t){return"/MyPortfolio/"+t},Cf={},Xr=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=NS(r),r in Cf)return;Cf[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":RS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const kS={},OS={class:"bg-black text-bg-dark m-0 container-fluid row justify-content-center"},PS=yr('<section class="banner col-md-10 col-12 ps-0 pe-0" data-v-6b130a05><div class="row pt-5" data-v-6b130a05><div class="col-12 text-center text-md-start display-2" data-v-6b130a05> Hi, I&#39;m <div class="m-0 d-sm-none" data-v-6b130a05></div> Frank Chung. </div></div><div class="row" data-v-6b130a05><div class="ms-lg-5 ms-md-5 col-12 text-center text-md-start d-none d-md-block" data-v-6b130a05><p class="display-2 blur" data-v-6b130a05>Hi, I&#39;m Frank Chung.</p></div></div><div class="row justify-content-lg-end mt-5" data-v-6b130a05><div class="col-12 text-center text-md-end display-2" data-v-6b130a05> I&#39;m a <div class="m-0 d-sm-none" data-v-6b130a05></div> UX Designer. </div></div><div class="row justify-content-lg-end" data-v-6b130a05><div class="col-12 text-center text-md-end d-none d-md-block" data-v-6b130a05><p class="display-2 blur delete-decoration mb-0" data-v-6b130a05>Frontend Engineer</p></div></div><div class="row justify-content-lg-end" data-v-6b130a05><div class="col-12 text-center text-md-end d-none d-md-block" data-v-6b130a05><p class="display-2 blur delete-decoration" data-v-6b130a05>Product Manager</p></div></div><div class="row mt-5" data-v-6b130a05><div class="col-lg-3 col-md-6 col-12 mb-3 d-grid" data-v-6b130a05><button class="btn btn-outline-warning btn-lg" data-v-6b130a05>More Frank</button></div><div class="col-lg-3 col-md-6 col-12 mb-3 d-grid" data-v-6b130a05><button class="btn btn-outline-light btn-lg" data-v-6b130a05>Resume</button></div></div></section>',1),xS=[PS];function DS(t,e){return kt(),ln("div",OS,xS)}const MS=Er(kS,[["render",DS],["__scopeId","data-v-6b130a05"]]),LS="/MyPortfolio/assets/TravelMaker_Mockup_Phone-d746af42.png",FS="/MyPortfolio/assets/Inshone_Mockup_Phone-0aae0aec.png",US="/MyPortfolio/assets/Lily_Mockup_Phone-245e7916.png",BS="/MyPortfolio/assets/Junyi_Mockup_Phone-8f8029ec.png";const $S={},HS={class:"bg-black text-bg-black container-fluid"},WS=yr('<div class="project-group top-0 row g-0 justify-content-center pb-5" data-v-c39caf62><div class="col-md-10 col-12" data-v-c39caf62><div class="row row-cols-lg-2 row-cols-1 card-deck justify-content-center justify-content-lg-between" data-v-c39caf62><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+LS+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>TravelMaker</h2><h4 class="card-text" data-v-c39caf62>幫助旅行者快速找到替代方案的旅遊行程管理軟體</h4><h6 class="card-text" data-v-c39caf62>Product Manager, UX Designer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+FS+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>影相設計</h2><h4 class="card-text" data-v-c39caf62>提供模組化影像製作方案的選購平台</h4><h6 class="card-text" data-v-c39caf62>Product Designer, Frontend Developer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+US+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>Lily Chen Website</h2><h4 class="card-text" data-v-c39caf62>攝影師 Lily Chen 的個人品牌網站</h4><h6 class="card-text" data-v-c39caf62>Product Manager, UI/UX Designer</h6></div></div></div><div class="col pt-2 pb-2" data-v-c39caf62><div class="card bg-light text-center" data-v-c39caf62><img src="'+BS+'" class="card-img" alt="..." data-v-c39caf62><div class="card-img-overlay" data-v-c39caf62><h2 class="card-title" data-v-c39caf62>學習風格測驗</h2><h4 class="card-text" data-v-c39caf62>均一教育平台的心理測驗互動式網頁</h4><h6 class="card-text" data-v-c39caf62>Product Designer, Frontend Developer</h6></div></div></div></div></div></div>',1),VS=[WS];function jS(t,e){return kt(),ln("div",HS,VS)}const KS=Er($S,[["render",jS],["__scopeId","data-v-c39caf62"]]),qS={__name:"Home",setup(t){return(e,n)=>(kt(),ln(dt,null,[Ce(MS),Ce(KS)],64))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const k=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+G_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new GS;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q_=function(t){const e=Y_(t);return Xc.encodeByteArray(e,!0)},ko=function(t){return Q_(t).replace(/\./g,"")},Oo=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){return X_(void 0,t)}function X_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!QS(n)||(t[n]=X_(t[n],e[n]));return t}function QS(t){return t!=="__proto__"}/**
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
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JS=()=>XS().__FIREBASE_DEFAULTS__,ZS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return JS()||ZS()||eR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J_=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z_=t=>{const e=J_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tR=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},em=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function tm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function nR(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iR(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sm(){return G_.NODE_ADMIN===!0}function rR(){try{return typeof indexedDB=="object"}catch{return!1}}function oR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=aR,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sr.prototype.create)}}class Sr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function lR(t,e){return t.replace(cR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const cR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=rr(Oo(r[0])||""),n=rr(Oo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},uR=function(t){const e=im(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dR=function(t){const e=im(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Af(r)&&Af(o)){if(!xo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hR(t,e){const n=new pR(t,e);return n.subscribe.bind(n)}class pR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_R(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _R(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}function Zc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ea=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class gR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ya;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bR(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(t){return t===Yn?void 0:t}function bR(t){return t.instantiationMode==="EAGER"}/**
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
 */class yR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const ER={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},wR=ge.INFO,TR={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},CR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=TR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=wR,this._logHandler=CR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ER[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const AR=(t,e)=>e.some(n=>t instanceof n);let If,Sf;function IR(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SR(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rm=new WeakMap,Gl=new WeakMap,om=new WeakMap,al=new WeakMap,tu=new WeakMap;function RR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rm.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function NR(t){if(Gl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||om.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){Yl=t(Yl)}function OR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ll(this),e,...n);return om.set(s,e.sort?e.sort():[e]),kn(s)}:SR().includes(t)?function(...e){return t.apply(ll(this),e),kn(rm.get(this))}:function(...e){return kn(t.apply(ll(this),e))}}function PR(t){return typeof t=="function"?OR(t):(t instanceof IDBTransaction&&NR(t),AR(t,IR())?new Proxy(t,Yl):t)}function kn(t){if(t instanceof IDBRequest)return RR(t);if(al.has(t))return al.get(t);const e=PR(t);return e!==t&&(al.set(t,e),tu.set(e,t)),e}const ll=t=>tu.get(t);function xR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const DR=["get","getKey","getAll","getAllKeys","count"],MR=["put","add","delete","clear"],cl=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=MR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||DR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return cl.set(e,r),r}kR(t=>({...t,get:(e,n,s)=>Rf(e,n)||t.get(e,n,s),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
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
 */class LR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ql="@firebase/app",Nf="0.9.4";/**
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
 */const ps=new eu("@firebase/app"),UR="@firebase/app-compat",BR="@firebase/analytics-compat",$R="@firebase/analytics",HR="@firebase/app-check-compat",WR="@firebase/app-check",VR="@firebase/auth",jR="@firebase/auth-compat",KR="@firebase/database",qR="@firebase/database-compat",zR="@firebase/functions",GR="@firebase/functions-compat",YR="@firebase/installations",QR="@firebase/installations-compat",XR="@firebase/messaging",JR="@firebase/messaging-compat",ZR="@firebase/performance",e0="@firebase/performance-compat",t0="@firebase/remote-config",n0="@firebase/remote-config-compat",s0="@firebase/storage",i0="@firebase/storage-compat",r0="@firebase/firestore",o0="@firebase/firestore-compat",a0="firebase",l0="9.17.2";/**
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
 */const Xl="[DEFAULT]",c0={[Ql]:"fire-core",[UR]:"fire-core-compat",[$R]:"fire-analytics",[BR]:"fire-analytics-compat",[WR]:"fire-app-check",[HR]:"fire-app-check-compat",[VR]:"fire-auth",[jR]:"fire-auth-compat",[KR]:"fire-rtdb",[qR]:"fire-rtdb-compat",[zR]:"fire-fn",[GR]:"fire-fn-compat",[YR]:"fire-iid",[QR]:"fire-iid-compat",[XR]:"fire-fcm",[JR]:"fire-fcm-compat",[ZR]:"fire-perf",[e0]:"fire-perf-compat",[t0]:"fire-rc",[n0]:"fire-rc-compat",[s0]:"fire-gcs",[i0]:"fire-gcs-compat",[r0]:"fire-fst",[o0]:"fire-fst-compat","fire-js":"fire-js",[a0]:"fire-js-all"};/**
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
 */const Do=new Map,Jl=new Map;function u0(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Jl.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,t);for(const n of Do.values())u0(n,t);return!0}function wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const d0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new Sr("app","Firebase",d0);/**
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
 */class f0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=l0;function am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=tR()),!n)throw On.create("no-options");const r=Do.get(i);if(r){if(xo(n,r.options)&&xo(s,r.config))return r;throw On.create("duplicate-app",{appName:i})}const o=new yR(i);for(const l of Jl.values())o.addComponent(l);const a=new f0(n,s,o);return Do.set(i,a),a}function nu(t=Xl){const e=Do.get(t);if(!e&&t===Xl)return am();if(!e)throw On.create("no-app",{appName:t});return e}function Vt(t,e,n){var s;let i=(s=c0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ps.warn(a.join(" "));return}_s(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const h0="firebase-heartbeat-database",p0=1,or="firebase-heartbeat-store";let ul=null;function lm(){return ul||(ul=xR(h0,p0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(or)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),ul}async function _0(t){try{return(await lm()).transaction(or).objectStore(or).get(cm(t))}catch(e){if(e instanceof pn)ps.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ps.warn(n.message)}}}async function kf(t,e){try{const s=(await lm()).transaction(or,"readwrite");return await s.objectStore(or).put(e,cm(t)),s.done}catch(n){if(n instanceof pn)ps.warn(n.message);else{const s=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ps.warn(s.message)}}}function cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const m0=1024,g0=30*24*60*60*1e3;class v0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Of();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=g0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Of(),{heartbeatsToSend:n,unsentEntries:s}=b0(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Of(){return new Date().toISOString().substring(0,10)}function b0(t,e=m0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rR()?oR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function E0(t){_s(new Bn("platform-logger",e=>new LR(e),"PRIVATE")),_s(new Bn("heartbeat",e=>new v0(e),"PRIVATE")),Vt(Ql,Nf,t),Vt(Ql,Nf,"esm2017"),Vt("fire-js","")}E0("");const xf="@firebase/database",Df="0.14.4";/**
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
 */let um="";function w0(t){um=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new T0(e)}}catch{}return new C0},is=dm("localStorage"),Zl=dm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new eu("@firebase/database"),A0=function(){let t=1;return function(){return t++}}(),fm=function(t){const e=mR(t),n=new fR;n.update(e);const s=n.digest();return Xc.encodeByteArray(s)},Rr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rr.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let cs=null,Mf=!0;const I0=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($s.logLevel=ge.VERBOSE,cs=$s.log.bind($s),e&&Zl.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,Zl.remove("logging_enabled"))},He=function(...t){if(Mf===!0&&(Mf=!1,cs===null&&Zl.get("logging_enabled")===!0&&I0(!0)),cs){const e=Rr.apply(null,t);cs(e)}},Nr=function(t){return function(...e){He(t,...e)}},ec=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rr(...t);$s.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Rr(...t)}`;throw $s.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+Rr(...t);$s.warn(e)},S0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},si="[MIN_NAME]",ms="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===si||e===ms)return-1;if(e===si||t===ms)return 1;{const n=Lf(t),s=Lf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},N0=function(t,e){return t===e?0:t<e?-1:1},Ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},su=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=su(t[e[s]]);return n+="}",n},pm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _m=function(t){k(!hm(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},k0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const x0=new RegExp("^-?(0*)\\d{1,10}$"),D0=-2147483648,M0=2147483647,Lf=function(t){if(x0.test(t)){const e=Number(t);if(e>=D0&&e<=M0)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},L0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class F0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class Hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="5",mm="v",gm="s",vm="r",bm="f",ym=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Em="ls",wm="p",tc="ac",Tm="websocket",Cm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function B0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Im(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===Tm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B0(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return YS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={},fl={};function ru(t){const e=t.toString();return dl[e]||(dl[e]=new $0),dl[e]}function H0(t,e){const n=t.toString();return fl[n]||(fl[n]=e()),fl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="start",V0="close",j0="pLPCommand",K0="pRTLPCB",Sm="id",Rm="pw",Nm="ser",q0="cb",z0="seg",G0="ts",Y0="d",Q0="dframe",km=1870,Om=30,X0=km-Om,J0=25e3,Z0=3e4;class Ds{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nr(e),this.stats_=ru(n),this.urlFn=l=>(this.appCheckToken&&(l[tc]=this.appCheckToken),Im(n,Cm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z0)),R0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ou((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ff)this.id=a,this.password=l;else if(o===V0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ff]="t",s[Nm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[q0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mm]=iu,this.transportSessionId&&(s[gm]=this.transportSessionId),this.lastSessionId&&(s[Em]=this.lastSessionId),this.applicationId&&(s[wm]=this.applicationId),this.appCheckToken&&(s[tc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ym.test(location.hostname)&&(s[vm]=bm);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!k0()&&!O0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Q_(n),i=pm(s,X0);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q0]="t",s[Sm]=e,s[Rm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ou{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=A0(),window[j0+this.uniqueCallbackIdentifier]=e,window[K0+this.uniqueCallbackIdentifier]=n,this.myIFrame=ou.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sm]=this.myID,e[Rm]=this.myPW,e[Nm]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Om+s.length<=km;){const o=this.pendingSegs.shift();s=s+"&"+z0+i+"="+o.seg+"&"+G0+i+"="+o.ts+"&"+Y0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(J0)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=16384,tN=45e3;let Mo=null;typeof MozWebSocket<"u"?Mo=MozWebSocket:typeof WebSocket<"u"&&(Mo=WebSocket);class Tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nr(this.connId),this.stats_=ru(n),this.connURL=Tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[mm]=iu,typeof location<"u"&&location.hostname&&ym.test(location.hostname)&&(o[vm]=bm),n&&(o[gm]=n),s&&(o[Em]=s),i&&(o[tc]=i),r&&(o[wm]=r),Im(e,Tm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,is.set("previous_websocket_failure",!0);try{let s;sm(),this.mySock=new Mo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Mo!==null&&!Tt.forceDisallow_}static previouslyFailed(){return is.isInMemoryStorage||is.get("previous_websocket_failure")===!0}markConnectionHealthy(){is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=rr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pm(n,eN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ds,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const i=this.transports_=[];for(const r of ar.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ar.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=6e4,sN=5e3,iN=10*1024,rN=100*1024,hl="t",Uf="d",oN="s",Bf="r",aN="e",$f="o",Hf="a",Wf="n",Vf="p",lN="h";class cN{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nr("c:"+this.id+":"),this.transportManager_=new ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hl in e){const n=e[hl];n===Hf?this.upgradeIfSecondaryHealthy_():n===Bf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$f&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ni(hl,e);if(Uf in e){const s=e[Uf];if(n===lN){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oN?this.onConnectionShutdown_(s):n===Bf?this.onReset_(s):n===aN?ec("Server Error: "+s):n===$f?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ec("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),iu!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends xm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lo}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=32,Kf=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $n(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Dm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Ge(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fm(t,e){if($n(t)!==$n(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function At(t,e){let n=t.pieceNum_,s=e.pieceNum_;if($n(t)>$n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dN{constructor(e,n){this.errorPrefix_=n,this.parts_=Mm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ea(this.parts_[s]);Um(this)}}function fN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ea(e),Um(t)}function hN(t){const e=t.parts_.pop();t.byteLength_-=Ea(e),t.parts_.length>0&&(t.byteLength_-=1)}function Um(t){if(t.byteLength_>Kf)throw new Error(t.errorPrefix_+"has a key path longer than "+Kf+" bytes ("+t.byteLength_+").");if(t.parts_.length>jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jf+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends xm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new au}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,pN=60*5*1e3,qf=30*1e3,_N=1.3,mN=3e4,gN="server_kill",zf=3;class on extends Pm{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Nr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=pN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");au.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(xe(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ya,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ec("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mN&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_N)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new cN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gN)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ze(d),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zl(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>su(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zf&&(this.reconnectDelay_=qf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+um.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:nm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lo.getInstance().currentlyOnline();return zl(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(si,e),i=new te(si,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class Bm extends Ta{static get __EMPTY_NODE(){return Jr}static set __EMPTY_NODE(e){Jr=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(ms,Jr)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Jr)}toString(){return".key"}}const Ws=new Bm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=i??Je.EMPTY_NODE,this.right=r??Je.EMPTY_NODE}copy(e,n,s,i,r){return new Fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class vN{copy(e,n,s,i,r){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zr(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new vN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e){return vi(t.name,e.name)}function lu(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;function yN(t){nc=t}const $m=function(t){return typeof t=="number"?"number:"+_m(t):"string:"+t},Hm=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else k(t===nc||t.isEmpty(),"priority of unexpected type.");k(t===nc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gf;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hm(this.priorityNode_)}static set __childrenNodeConstructor(e){Gf=e}static get __childrenNodeConstructor(){return Gf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:re(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||$n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$m(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_m(this.value_):e+=this.value_,this.lazyHash_=fm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),r=Le.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm,Vm;function EN(t){Wm=t}function wN(t){Vm=t}class TN extends Ta{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(ms,new Le("[PRIORITY-POST]",Vm))}makePost(e,n){const s=Wm(e);return new te(n,new Le("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new TN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=Math.log(2);class AN{constructor(e){const n=r=>parseInt(Math.log(r)/CN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),g=i(p+1,c);return d=t[p],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,m,g)}},r=function(l){let c=null,u=null,d=t.length;const f=function(m,g){const E=d-m,b=d;d-=m;const C=i(E+1,b),w=t[E],R=n?n(w):w;p(new Fe(R,w.node,g,null,C))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));g?f(E,Fe.BLACK):(f(E,Fe.BLACK),f(E,Fe.RED))}return u},o=new AN(t.length),a=r(o);return new Je(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;const Rs={};class Jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Rs&&Ae,"ChildrenNode.ts has not been loaded"),pl=pl||new Jt({".priority":Rs},{".priority":Ae}),pl}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Fo(s,e.getCompare()):a=Rs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Jt(u,c)}addToIndexes(e,n){const s=Po(this.indexes_,(i,r)=>{const o=ni(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Rs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Fo(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Jt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Po(this.indexes_,i=>{if(i===Rs)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new Jt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hm(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new V(new Je(lu),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Oi:this.priorityNode_;return new V(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{k(re(e)!==".priority"||$n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),s++,r&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$m(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kr?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),i=n.getIterator(Ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IN extends V{constructor(){super(new Je(lu),V.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const kr=new IN;Object.defineProperties(te,{MIN:{value:new te(si,V.EMPTY_NODE)},MAX:{value:new te(ms,kr)}});Bm.__EMPTY_NODE=V.EMPTY_NODE;Le.__childrenNodeConstructor=V;yN(kr);wN(kr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=!0;function Ue(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Ue(e))}if(!(t instanceof Array)&&SN){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return V.EMPTY_NODE;const r=Fo(n,bN,o=>o.name,lu);if(s){const o=Fo(n,Ae.getCompare());return new V(r,Ue(e),new Jt({".priority":o},{".priority":Ae}))}else return new V(r,Ue(e),Jt.Default)}else{let n=V.EMPTY_NODE;return tt(t,(s,i)=>{if(_n(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}EN(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN extends Ta{constructor(e){super(),this.indexPath_=e,k(!ie(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,kr);return new te(ms,e)}toString(){return Mm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN extends Ta{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Ue(e);return new te(n,s)}toString(){return".value"}}const kN=new NN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ON(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(lr(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,s)):o.trackChildChange(cr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(lr(i,r))}),n.isLeafNode()||n.forEachChild(Ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cr(i,r,o))}else s.trackChildChange(ii(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.indexedFilter_=new cu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ur.getStartPost_(e),this.endPost_=ur.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const r=this;return n.forEachChild(Ae,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ur(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new te(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(cr(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(lr(n,d));const g=a.updateImmediateChild(n,V.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(ii(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(lr(c.name,c.node)),r.trackChildChange(ii(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:si}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xN(t){return t.loadsAllData()?new cu(t.getIndex()):t.hasLimit()?new PN(t):new ur(t)}function Yf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===kN?n="$value":t.index_===Ws?n="$key":(k(t.index_ instanceof RN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Pm{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Nr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Uo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Yf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),ni(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Uo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yf(e._queryParams),s=e._path.toString(),i=new ya;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rr(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(){return{value:null,children:new Map}}function Km(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,Bo());const i=t.children.get(s);e=be(e),Km(i,e,n)}}function sc(t,e,n){t.value!==null?n(e,t.value):MN(t,(s,i)=>{const r=new ve(e.toString()+"/"+s);sc(i,r,n)})}function MN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=10*1e3,FN=30*1e3,UN=5*60*1e3;class BN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LN(e);const s=Xf+(FN-Xf)*Math.random();ji(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&_n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*UN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function qm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function du(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=It.ACK_USER_WRITE,this.source=qm()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new $o(ue(),n,this.revert)}}else return k(re(this.path)===e,"operationForChild called for unrelated child."),new $o(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new dr(this.source,ue()):new dr(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=It.OVERWRITE}operationForChild(e){return ie(this.path)?new gs(this.source,ue(),this.snap.getImmediateChild(e)):new gs(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=It.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new gs(this.source,ue(),n.value):new fr(this.source,ue(),n)}else return k(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $N{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ON(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,s,n),Pi(t,i,"child_added",e,s,n),Pi(t,i,"child_moved",r,s,n),Pi(t,i,"child_changed",e,s,n),Pi(t,i,"value",e,s,n),i}function Pi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>VN(t,a,l)),o.forEach(a=>{const l=WN(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function WN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VN(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e){return{eventCache:t,serverCache:e}}function Ki(t,e,n,s){return Ca(new Hn(e,n,s),t.serverCache)}function zm(t,e,n,s){return Ca(t.eventCache,new Hn(e,n,s))}function Ho(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;const jN=()=>(_l||(_l=new Je(N0)),_l);class we{constructor(e,n=jN()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return tt(e,(s,i)=>{n=n.set(new ve(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(ie(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:De(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new we(null)}}set(e,n){if(ie(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(be(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ie(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(ie(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ie(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(be(e),De(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),De(n,i),s):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new we(null))}}function qi(t,e,n){if(ie(e))return new Nt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ge(i,e);return r=r.updateChild(o,n),new Nt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Nt(r)}}}function Jf(t,e,n){let s=t;return tt(n,(i,r)=>{s=qi(s,De(e,i),r)}),s}function Zf(t,e){if(ie(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Nt(n)}}function ic(t,e){return Ts(t,e)!=null}function Ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function eh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function Pn(t,e){if(ie(e))return t;{const n=Ts(t,e);return n!=null?new Nt(new we(n)):new Nt(t.writeTree_.subtree(e))}}function rc(t){return t.writeTree_.isEmpty()}function ri(t,e){return Gm(ue(),t.writeTree_,e)}function Gm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gm(De(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t,e){return Jm(e,t)}function KN(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qi(t.visibleWrites,e,n)),t.lastWriteId=s}function qN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GN(a,s.path)?i=!1:At(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return YN(t),!0;if(s.snap)t.visibleWrites=Zf(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=Zf(t.visibleWrites,De(s.path,l))})}return!0}else return!1}function GN(t,e){if(t.snap)return At(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&At(De(t.path,n),e))return!0;return!1}function YN(t){t.visibleWrites=Ym(t.allWrites,QN,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QN(t){return t.visible}function Ym(t,e,n){let s=Nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)At(n,o)?(a=Ge(n,o),s=qi(s,a,r.snap)):At(o,n)&&(a=Ge(o,n),s=qi(s,ue(),r.snap.getChild(a)));else if(r.children){if(At(n,o))a=Ge(n,o),s=Jf(s,a,r.children);else if(At(o,n))if(a=Ge(o,n),ie(a))s=Jf(s,ue(),r.children);else{const l=ni(r.children,re(a));if(l){const c=l.getChild(be(a));s=qi(s,ue(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return s}function Qm(t,e,n,s,i){if(!s&&!i){const r=Ts(t.visibleWrites,e);if(r!=null)return r;{const o=Pn(t.visibleWrites,e);if(rc(o))return n;if(n==null&&!ic(o,ue()))return null;{const a=n||V.EMPTY_NODE;return ri(o,a)}}}else{const r=Pn(t.visibleWrites,e);if(!i&&rc(r))return n;if(!i&&n==null&&!ic(r,ue()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},a=Ym(t.allWrites,o,e),l=n||V.EMPTY_NODE;return ri(a,l)}}}function XN(t,e,n){let s=V.EMPTY_NODE;const i=Ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Pn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=ri(Pn(r,new ve(o)),a);s=s.updateImmediateChild(o,l)}),eh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pn(t.visibleWrites,e);return eh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function JN(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,n);if(ic(t.visibleWrites,r))return null;{const o=Pn(t.visibleWrites,r);return rc(o)?i.getChild(n):ri(o,i.getChild(n))}}function ZN(t,e,n,s){const i=De(e,n),r=Ts(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return ri(o,s.getNode().getImmediateChild(n))}else return null}function ek(t,e){return Ts(t.visibleWrites,e)}function tk(t,e,n,s,i,r,o){let a;const l=Pn(t.visibleWrites,e),c=Ts(l,ue());if(c!=null)a=c;else if(n!=null)a=ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function nk(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function Wo(t,e,n,s){return Qm(t.writeTree,t.treePath,e,n,s)}function hu(t,e){return XN(t.writeTree,t.treePath,e)}function th(t,e,n,s){return JN(t.writeTree,t.treePath,e,n,s)}function Vo(t,e){return ek(t.writeTree,De(t.treePath,e))}function sk(t,e,n,s,i,r){return tk(t.writeTree,t.treePath,e,n,s,i,r)}function pu(t,e,n){return ZN(t.writeTree,t.treePath,e,n)}function Xm(t,e){return Jm(De(t.treePath,e),t.writeTree)}function Jm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,lr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ii(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cr(s,e.snapshotNode,i.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zm=new rk;class _u{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),r=sk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){return{filter:t}}function ak(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lk(t,e,n,s,i){const r=new ik;let o,a;if(n.type===It.OVERWRITE){const c=n;c.source.fromUser?o=oc(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=jo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===It.MERGE){const c=n;c.source.fromUser?o=uk(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,c.path,c.children,s,i,a,r))}else if(n.type===It.ACK_USER_WRITE){const c=n;c.revert?o=hk(t,e,c.path,s,i,r):o=dk(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===It.LISTEN_COMPLETE)o=fk(t,e,n.path,s,r);else throw _i("Unknown operation type: "+n.type);const l=r.getChanges();return ck(e,o,l),{viewCache:o,changes:l}}function ck(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ho(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(jm(Ho(e)))}}function eg(t,e,n,s,i,r){const o=e.eventCache;if(Vo(s,n)!=null)return e;{let a,l;if(ie(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vs(e),u=c instanceof V?c:V.EMPTY_NODE,d=hu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Wo(s,vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){k($n(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=th(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=be(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=th(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=pu(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function jo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&$n(n)>1)return e;const m=be(n),E=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),p,E,m,Zm,null)}const d=zm(e,c,l.isFullyInitialized()||ie(n),u.filtersNodes()),f=new _u(i,d,r);return eg(t,d,n,i,f,a)}function oc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new _u(i,e,r);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ki(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),p=a.getNode().getImmediateChild(d);let m;if(ie(f))m=s;else{const g=u.getCompleteChild(d);g!=null?Dm(f)===".priority"&&g.getChild(Lm(f)).isEmpty()?m=g:m=g.updateChild(f,s):m=V.EMPTY_NODE}if(p.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Ki(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nh(t,e){return t.eventCache.isCompleteForChild(e)}function uk(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=De(n,l);nh(e,re(u))&&(a=oc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=De(n,l);nh(e,re(u))||(a=oc(t,a,u,c,i,r,o))}),a}function sh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ac(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ie(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=sh(t,p,f);l=jo(t,l,new ve(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),g=sh(t,m,f);l=jo(t,l,new ve(d),g,i,r,o,a)}}),l}function dk(t,e,n,s,i,r,o){if(Vo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return jo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ie(n)){let c=new we(null);return l.getNode().forEachChild(Ws,(u,d)=>{c=c.set(new ve(u),d)}),ac(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,d)=>{const f=De(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ac(t,e,n,c,i,r,a,o)}}function fk(t,e,n,s,i){const r=e.serverCache,o=zm(e,r.getNode(),r.isFullyInitialized()||ie(n),r.isFiltered());return eg(t,o,n,s,Zm,i)}function hk(t,e,n,s,i,r){let o;if(Vo(s,n)!=null)return e;{const a=new _u(s,e,i),l=e.eventCache.getNode();let c;if(ie(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wo(s,vs(e));else{const d=e.serverCache.getNode();k(d instanceof V,"serverChildren would be complete if leaf node"),u=hu(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let d=pu(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wo(s,vs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Vo(s,ue())!=null,Ki(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cu(s.getIndex()),r=xN(s);this.processor_=ok(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Hn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Hn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ca(d,u),this.eventGenerator_=new $N(this.query_)}get query(){return this.query_}}function _k(t){return t.viewCache_.serverCache.getNode()}function mk(t){return Ho(t.viewCache_)}function gk(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function ih(t){return t.eventRegistrations_.length===0}function vk(t,e){t.eventRegistrations_.push(e)}function rh(t,e,n){const s=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function oh(t,e,n,s){e.type===It.MERGE&&e.source.queryId!==null&&(k(vs(t.viewCache_),"We should always have a full cache before handling merges"),k(Ho(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lk(t.processor_,i,e,n,s);return ak(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,tg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bk(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(r,o)=>{s.push(ii(r,o))}),n.isFullyInitialized()&&s.push(jm(n.getNode())),tg(t,s,n.getNode(),e)}function tg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return HN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class ng{constructor(){this.views=new Map}}function yk(t){k(!Ko,"__referenceConstructor has already been defined"),Ko=t}function Ek(){return k(Ko,"Reference.ts has not been loaded"),Ko}function wk(t){return t.views.size===0}function mu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),oh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(oh(o,e,n,s));return r}}function sg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Wo(n,i?s:null),l=!1;a?l=!0:s instanceof V?(a=hu(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Ca(new Hn(a,l,!1),new Hn(s,i,!1));return new pk(e,c)}return o}function Tk(t,e,n,s,i,r){const o=sg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vk(o,n),bk(o,n)}function Ck(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Wn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(rh(c,n,s)),ih(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(rh(l,n,s)),ih(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Wn(t)&&r.push(new(Ek())(e._repo,e._path)),{removed:r,events:o}}function ig(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const s of t.views.values())n=n||gk(s,e);return n}function rg(t,e){if(e._queryParams.loadsAllData())return Ia(t);{const s=e._queryIdentifier;return t.views.get(s)}}function og(t,e){return rg(t,e)!=null}function Wn(t){return Ia(t)!=null}function Ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;function Ak(t){k(!qo,"__referenceConstructor has already been defined"),qo=t}function Ik(){return k(qo,"Reference.ts has not been loaded"),qo}let Sk=1;class ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=nk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ag(t,e,n,s,i){return KN(t.pendingWriteTree_,e,n,s,i),i?Pr(t,new gs(qm(),e,n)):[]}function rs(t,e,n=!1){const s=qN(t.pendingWriteTree_,e);if(zN(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ue(),!0):tt(s.children,o=>{r=r.set(new ve(o),!0)}),Pr(t,new $o(s.path,r,n))}else return[]}function Or(t,e,n){return Pr(t,new gs(du(),e,n))}function Rk(t,e,n){const s=we.fromObject(n);return Pr(t,new fr(du(),e,s))}function Nk(t,e){return Pr(t,new dr(du(),e))}function kk(t,e,n){const s=vu(t,n);if(s){const i=bu(s),r=i.path,o=i.queryId,a=Ge(r,e),l=new dr(fu(o),a);return yu(t,r,l)}else return[]}function lg(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||og(o,e))){const l=Ck(o,e,n,s);wk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,p)=>Wn(p));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Dk(f);for(let m=0;m<p.length;++m){const g=p[m],E=g.query,b=fg(t,g);t.listenProvider_.startListening(zi(E),hr(t,E),b.hashFn,b.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(zi(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(Sa(f));t.listenProvider_.stopListening(zi(f),p)}))}Mk(t,c)}return a}function cg(t,e,n,s){const i=vu(t,s);if(i!=null){const r=bu(i),o=r.path,a=r.queryId,l=Ge(o,e),c=new gs(fu(a),l,n);return yu(t,o,c)}else return[]}function Ok(t,e,n,s){const i=vu(t,s);if(i){const r=bu(i),o=r.path,a=r.queryId,l=Ge(o,e),c=we.fromObject(n),u=new fr(fu(a),l,c);return yu(t,o,u)}else return[]}function Pk(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=Ge(f,i);r=r||xn(p,m),o=o||Wn(p)});let a=t.syncPointTree_.get(i);a?(o=o||Wn(a),r=r||xn(a,ue())):(a=new ng,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const g=xn(m,ue());g&&(r=r.updateImmediateChild(p,g))}));const c=og(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Sa(e);k(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Lk();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=Aa(t.pendingWriteTree_,i);let d=Tk(a,e,n,u,r,l);if(!c&&!o&&!s){const f=rg(a,e);d=d.concat(Fk(t,e,f))}return d}function gu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ge(o,e),c=xn(a,l);if(c)return c});return Qm(i,e,r,n,!0)}function xk(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ge(c,n);s=s||xn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||xn(i,ue()):(i=new ng,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Hn(s,!0,!1):null,a=Aa(t.pendingWriteTree_,e._path),l=sg(i,e,a,r?o.getNode():V.EMPTY_NODE,r);return mk(l)}function Pr(t,e){return ug(e,t.syncPointTree_,null,Aa(t.pendingWriteTree_,ue()))}function ug(t,e,n,s){if(ie(t.path))return dg(t,e,n,s);{const i=e.get(ue());n==null&&i!=null&&(n=xn(i,ue()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Xm(s,o);r=r.concat(ug(a,l,c,u))}return i&&(r=r.concat(mu(i,t,s,n))),r}}function dg(t,e,n,s){const i=e.get(ue());n==null&&i!=null&&(n=xn(i,ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Xm(s,o),u=t.operationForChild(o);u&&(r=r.concat(dg(u,a,l,c)))}),i&&(r=r.concat(mu(i,t,s,n))),r}function fg(t,e){const n=e.query,s=hr(t,n);return{hashFn:()=>(_k(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kk(t,n._path,s):Nk(t,n._path);{const r=P0(i,n);return lg(t,n,null,r)}}}}function hr(t,e){const n=Sa(e);return t.queryToTagMap.get(n)}function Sa(t){return t._path.toString()+"$"+t._queryIdentifier}function vu(t,e){return t.tagToQueryMap.get(e)}function bu(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function yu(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=Aa(t.pendingWriteTree_,e);return mu(s,n,i,null)}function Dk(t){return t.fold((e,n,s)=>{if(n&&Wn(n))return[Ia(n)];{let i=[];return n&&(i=ig(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ik())(t._repo,t._path):t}function Mk(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Sa(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Lk(){return Sk++}function Fk(t,e,n){const s=e._path,i=hr(t,e),r=fg(t,n),o=t.listenProvider_.startListening(zi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)k(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ie(c)&&u&&Wn(u))return[Ia(u).query];{let f=[];return u&&(f=f.concat(ig(u).map(p=>p.query))),tt(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(zi(u),hr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eu(n)}node(){return this.node_}}class wu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new wu(this.syncTree_,n)}node(){return gu(this.syncTree_,this.path_)}}const Uk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lh=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Bk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $k(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Bk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},$k=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Hk=function(t,e,n,s){return Tu(e,new wu(n,t),s)},hg=function(t,e,n){return Tu(t,new Eu(e),n)};function Tu(t,e,n){const s=t.getPriority().val(),i=lh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=lh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Le(i))),o.forEachChild(Ae,(a,l)=>{const c=Tu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Au(t,e){let n=e instanceof ve?e:new ve(e),s=t,i=re(n);for(;i!==null;){const r=ni(s.node.children,i)||{children:{},childCount:0};s=new Cu(i,s,r),n=be(n),i=re(n)}return s}function yi(t){return t.node.value}function pg(t,e){t.node.value=e,lc(t)}function _g(t){return t.node.childCount>0}function Wk(t){return yi(t)===void 0&&!_g(t)}function Ra(t,e){tt(t.node.children,(n,s)=>{e(new Cu(n,t,s))})}function mg(t,e,n,s){n&&!s&&e(t),Ra(t,i=>{mg(i,e,!0,s)}),n&&s&&e(t)}function Vk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xr(t){return new ve(t.parent===null?t.name:xr(t.parent)+"/"+t.name)}function lc(t){t.parent!==null&&jk(t.parent,t.name,t)}function jk(t,e,n){const s=Wk(n),i=_n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=/[\[\].#$\/\u0000-\u001F\u007F]/,qk=/[\[\].#$\u0000-\u001F\u007F]/,ml=10*1024*1024,gg=function(t){return typeof t=="string"&&t.length!==0&&!Kk.test(t)},vg=function(t){return typeof t=="string"&&t.length!==0&&!qk.test(t)},zk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vg(t)},bg=function(t,e,n,s){s&&e===void 0||Iu(Zc(t,"value"),e,n)},Iu=function(t,e,n){const s=n instanceof ve?new dN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(s)+" with contents = "+e.toString());if(hm(e))throw new Error(t+"contains "+e.toString()+" "+Qn(s));if(typeof e=="string"&&e.length>ml/3&&Ea(e)>ml)throw new Error(t+"contains a string greater than "+ml+" utf8 bytes "+Qn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fN(s,o),Iu(t,a,s),hN(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qn(s)+" in addition to actual children.")}},yg=function(t,e,n,s){if(!(s&&n===void 0)&&!vg(n))throw new Error(Zc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gk=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yg(t,e,n,s)},Eg=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Yk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zk(n))throw new Error(Zc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fm(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gt(t,e,n){wg(t,n),Xk(t,s=>At(s,e)||At(e,s))}function Xk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Jk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Jk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();cs&&He("event: "+n.toString()),bi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="repo_interrupt",eO=25;class tO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new Cu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nO(t,e,n){if(t.stats_=ru(t.repoInfo_),t.forceRestClient_||L0())t.server_=new Uo(t.repoInfo_,(s,i,r,o)=>{ch(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new on(t.repoInfo_,e,(s,i,r,o)=>{ch(t,s,i,r,o)},s=>{uh(t,s)},s=>{sO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=H0(t.repoInfo_,()=>new BN(t.stats_,t.server_)),t.infoData_=new DN,t.infoSyncTree_=new ah({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Or(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ru(t,"connected",!1),t.serverSyncTree_=new ah({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Gt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Tg(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return Uk({timestamp:Tg(t)})}function ch(t,e,n,s,i){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Po(n,c=>Ue(c));o=Ok(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=cg(t.serverSyncTree_,r,l,i)}else if(s){const l=Po(n,c=>Ue(c));o=Rk(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=Or(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ka(t,r)),Gt(t.eventQueue_,a,o)}function uh(t,e){Ru(t,"connected",e),e===!1&&oO(t)}function sO(t,e){tt(e,(n,s)=>{Ru(t,n,s)})}function Ru(t,e,n){const s=new ve("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=Or(t.infoSyncTree_,s,i);Gt(t.eventQueue_,s,r)}function Cg(t){return t.nextWriteId_++}function iO(t,e,n){const s=xk(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ue(i).withIndex(e._queryParams.getIndex());Pk(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Or(t.serverSyncTree_,e._path,r);else{const a=hr(t.serverSyncTree_,e);o=cg(t.serverSyncTree_,e._path,r,a)}return Gt(t.eventQueue_,e._path,o),lg(t.serverSyncTree_,e,n,null,!0),r},i=>(Na(t,"get for query "+xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function rO(t,e,n,s,i){Na(t,"set",{path:e.toString(),value:n,priority:s});const r=Su(t),o=Ue(n,s),a=gu(t.serverSyncTree_,e),l=hg(o,a,r),c=Cg(t),u=ag(t.serverSyncTree_,e,l,c,!0);wg(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||Ze("set at "+e+" failed: "+f);const g=rs(t.serverSyncTree_,c,!m);Gt(t.eventQueue_,e,g),lO(t,i,f,p)});const d=Ng(t,e);ka(t,d),Gt(t.eventQueue_,d,[])}function oO(t){Na(t,"onDisconnectEvents");const e=Su(t),n=Bo();sc(t.onDisconnect_,ue(),(i,r)=>{const o=Hk(i,r,t.serverSyncTree_,e);Km(n,i,o)});let s=[];sc(n,ue(),(i,r)=>{s=s.concat(Or(t.serverSyncTree_,i,r));const o=Ng(t,i);ka(t,o)}),t.onDisconnect_=Bo(),Gt(t.eventQueue_,ue(),s)}function aO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zk)}function Na(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function lO(t,e,n,s){e&&bi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ag(t,e,n){return gu(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Nu(t,e=t.transactionQueueTree_){if(e||Oa(t,e),yi(e)){const n=Sg(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cO(t,xr(e),n)}else _g(e)&&Ra(e,n=>{Nu(t,n)})}function cO(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ag(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ge(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Na(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(rs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Oa(t,Au(t.transactionQueueTree_,e)),Nu(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)bi(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ka(t,e)}},o)}function ka(t,e){const n=Ig(t,e),s=xr(n),i=Sg(t,n);return uO(t,i,s),s}function uO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ge(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eO)u=!0,d="maxretry",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ag(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Iu("transaction failed: Data returned ",p,l.path);let m=Ue(p);typeof p=="object"&&p!=null&&_n(p,".priority")||(m=m.updatePriority(f.getPriority()));const E=l.currentWriteId,b=Su(t),C=hg(m,f,b);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=C,l.currentWriteId=Cg(t),o.splice(o.indexOf(E),1),i=i.concat(ag(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(rs(t.serverSyncTree_,E,!0))}else u=!0,d="nodata",i=i.concat(rs(t.serverSyncTree_,l.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Oa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)bi(s[a]);Nu(t,t.transactionQueueTree_)}function Ig(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&yi(s)===void 0;)s=Au(s,n),e=be(e),n=re(e);return s}function Sg(t,e){const n=[];return Rg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Rg(t,e,n){const s=yi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ra(e,i=>{Rg(t,i,n)})}function Oa(t,e){const n=yi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,pg(e,n.length>0?n:void 0)}Ra(e,s=>{Oa(t,s)})}function Ng(t,e){const n=xr(Ig(t,e)),s=Au(t.transactionQueueTree_,e);return Vk(s,i=>{gl(t,i)}),gl(t,s),mg(s,i=>{gl(t,i)}),n}function gl(t,e){const n=yi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pg(e,void 0):n.length=r+1,Gt(t.eventQueue_,xr(e),i);for(let o=0;o<s.length;o++)bi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const dh=function(t,e){const n=hO(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Am(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ve(n.pathString)}},hO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=dO(t.substring(u,d)));const f=fO(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pO=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=fh.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=fh.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class mO{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ie(this._path)?null:Dm(this._path)}get ref(){return new mn(this._repo,this._path)}get _queryIdentifier(){const e=Qf(this._queryParams),n=su(e);return n==="{}"?"default":n}get _queryObject(){return Qf(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof ku))return!1;const n=this._repo===e._repo,s=Fm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uN(this._path)}}class mn extends ku{constructor(e,n){super(e,n,new uu,!1)}get parent(){const e=Lm(this._path);return e===null?null:new mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=oi(this.ref,e);return new pr(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new pr(i,oi(this.ref,s),Ae)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kg(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?oi(t._root,e):t._root}function oi(t,e){return t=Be(t),re(t._path)===null?Gk("child","path",e,!1):yg("child","path",e,!1),new mn(t._repo,De(t._path,e))}function vO(t,e){t=Be(t),Eg("push",t._path),bg("push",e,t._path,!0);const n=Tg(t._repo),s=pO(n),i=oi(t,s),r=oi(t,s);let o;return e!=null?o=Og(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Og(t,e){t=Be(t),Eg("set",t._path),bg("set",e,t._path,!1);const n=new ya;return rO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eL(t){t=Be(t);const e=new gO(()=>{}),n=new Ou(e);return iO(t._repo,t,n).then(s=>new pr(s,new mn(t._repo,t._path),t._queryParams.getIndex()))}class Ou{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _O("value",this,new pr(e.snapshotNode,new mn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mO(this,e,n):null}matches(e){return e instanceof Ou?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}yk(mn);Ak(mn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="FIREBASE_DATABASE_EMULATOR_HOST",cc={};let yO=!1;function EO(t,e,n,s){t.repoInfo_=new Am(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function wO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dh(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[bO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=dh(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Hs(Hs.OWNER):new U0(t.name,t.options,e);Yk("Invalid Firebase Database URL",o),ie(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CO(a,t,u,new F0(t.name,n));return new AO(d,t)}function TO(t,e){const n=cc[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aO(t),delete n[t.key]}function CO(t,e,n,s){let i=cc[e.name];i||(i={},cc[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tO(t,yO,n,s),i[t.toURLString()]=r,r}class AO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function IO(t=nu(),e){const n=wa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Z_("database");s&&SO(n,...s)}return n}function SO(t,e,n,s={}){t=Be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Hs(Hs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:tm(s.mockUserToken,t.app.options.projectId);r=new Hs(o)}EO(i,e,n,r)}/**
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
 */function RO(t){w0(gi),_s(new Bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Vt(xf,Df,t),Vt(xf,Df,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};RO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firebasestorage.googleapis.com",xg="storageBucket",NO=2*60*1e3,kO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends pn{constructor(e,n,s=0){super(vl(e),`Firebase Storage: ${n} (${vl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function vl(t){return"storage/"+t}function Pu(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function OO(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PO(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function DO(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MO(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LO(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FO(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function UO(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function BO(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $O(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xg+"' property when initializing the app?")}function HO(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WO(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VO(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uc(t){return new Se(Ie.INVALID_ARGUMENT,t)}function Dg(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function jO(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xi(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw BO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},g=n===Pg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",b=new RegExp(`^https?://${g}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<w.length;R++){const B=w[R],W=B.regex.exec(e);if(W){const Y=W[B.indices.bucket];let F=W[B.indices.path];F||(F=""),s=new rt(Y,F),B.postModify(s);break}}if(s==null)throw UO(e);return s}}class KO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function f(){r&&clearTimeout(r)}function p(E,...b){if(c){f();return}if(E){f(),u.call(null,E,...b);return}if(l()||o){f(),u.call(null,E,...b);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,d(w)}let m=!1;function g(E){m||(m=!0,f(),!c&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function zO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){return t!==void 0}function YO(t){return typeof t=="object"&&!Array.isArray(t)}function xu(t){return typeof t=="string"||t instanceof String}function hh(t){return Du()&&t instanceof Blob}function Du(){return typeof Blob<"u"&&!nR()}function ph(t,e,n,s){if(s<e)throw uc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw uc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Mg(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function QO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n,s,i,r,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new eo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===us.NO_ERROR,l=r.getStatus();if(!a||QO(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===us.ABORT;s(!1,new eo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new eo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());GO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Pu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Dg():FO();o(l)}else{const l=LO();o(l)}};this.canceled_?n(!1,new eo(!1,null,!0)):this.backoffId_=qO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function JO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nP(t,e,n,s,i,r,o=!0){const a=Mg(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return eP(c,e),JO(c,n),ZO(c,r),tP(c,s),new XO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iP(...t){const e=sP();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Du())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function oP(t){if(typeof atob>"u")throw VO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bl{constructor(e,n){this.data=e,this.contentType=n||null}}function aP(t,e){switch(t){case $t.RAW:return new bl(Lg(e));case $t.BASE64:case $t.BASE64URL:return new bl(Fg(t,e));case $t.DATA_URL:return new bl(cP(e),uP(e))}throw Pu()}function Lg(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function lP(t){let e;try{e=decodeURIComponent(t)}catch{throw Gi($t.DATA_URL,"Malformed data URL.")}return Lg(e)}function Fg(t,e){switch(t){case $t.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Gi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Gi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oP(e)}catch(i){throw i.message.includes("polyfill")?i:Gi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Ug{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gi($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=dP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function cP(t){const e=new Ug(t);return e.base64?Fg($t.BASE64,e.rest):lP(e.rest)}function uP(t){return new Ug(t).contentType}function dP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){let s=0,i="";hh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(hh(this.data_)){const s=this.data_,i=rP(s,e,n);return i===null?null:new Tn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Tn(s,!0)}}static getBlob(...e){if(Du()){const n=e.map(s=>s instanceof Tn?s.data_:s);return new Tn(iP.apply(null,n))}else{const n=e.map(o=>xu(o)?aP($t.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Tn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){let e;try{e=JSON.parse(t)}catch{return null}return YO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hP(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function $g(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e){return e}class qe{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||pP}}let to=null;function _P(t){return!xu(t)||t.length<2?t:$g(t)}function Hg(){if(to)return to;const t=[];t.push(new qe("bucket")),t.push(new qe("generation")),t.push(new qe("metageneration")),t.push(new qe("name","fullPath",!0));function e(r,o){return _P(o)}const n=new qe("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new qe("size");return i.xform=s,t.push(i),t.push(new qe("timeCreated")),t.push(new qe("updated")),t.push(new qe("md5Hash",null,!0)),t.push(new qe("cacheControl",null,!0)),t.push(new qe("contentDisposition",null,!0)),t.push(new qe("contentEncoding",null,!0)),t.push(new qe("contentLanguage",null,!0)),t.push(new qe("contentType",null,!0)),t.push(new qe("metadata","customMetadata",!0)),to=t,to}function mP(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new rt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function gP(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return mP(s,t),s}function Wg(t,e,n){const s=Bg(e);return s===null?null:gP(t,s,n)}function vP(t,e,n,s){const i=Bg(e);if(i===null||!xu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),p=Mu(f,n,s),m=Mg({alt:"media",token:c});return p+m})[0]}function bP(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Vg{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){if(!t)throw Pu()}function yP(t,e){function n(s,i){const r=Wg(t,i,e);return jg(r!==null),r}return n}function EP(t,e){function n(s,i){const r=Wg(t,i,e);return jg(r!==null),vP(r,i,t.host,t._protocol)}return n}function Kg(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DO():i=xO():n.getStatus()===402?i=PO(t.bucket):n.getStatus()===403?i=MO(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function wP(t){const e=Kg(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=OO(t.path)),r.serverResponse=i.serverResponse,r}return n}function TP(t,e,n){const s=e.fullServerUrl(),i=Mu(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Vg(i,r,EP(t,n),o);return a.errorHandler=wP(e),a}function CP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AP(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=CP(null,e)),s}function IP(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let R=0;R<2;R++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=AP(e,s,i),u=bP(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Tn.getBlob(d,s,f);if(p===null)throw HO();const m={name:c.fullPath},g=Mu(r,t.host,t._protocol),E="POST",b=t.maxUploadRetryTime,C=new Vg(g,E,yP(t,n),b);return C.urlParams=m,C.headers=o,C.body=p.uploadData(),C.errorHandler=Kg(e),C}class SP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RP extends SP{initXhr(){this.xhr_.responseType="text"}}function qg(){return new RP}/**
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
 */class bs{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bs(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $g(this._location.path)}get storage(){return this._service}get parent(){const e=fP(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jO(e)}}function NP(t,e,n){t._throwIfRoot("uploadBytes");const s=IP(t.storage,t._location,Hg(),new Tn(e,!0),n);return t.storage.makeRequestWithTokens(s,qg).then(i=>({metadata:i,ref:t}))}function kP(t){t._throwIfRoot("getDownloadURL");const e=TP(t.storage,t._location,Hg());return t.storage.makeRequestWithTokens(e,qg).then(n=>{if(n===null)throw WO();return n})}function OP(t,e){const n=hP(t._location.path,e),s=new rt(t._location.bucket,n);return new bs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t){return/^[A-Za-z]+:\/\//.test(t)}function xP(t,e){return new bs(t,e)}function zg(t,e){if(t instanceof Lu){const n=t;if(n._bucket==null)throw $O();const s=new bs(n,n._bucket);return e!=null?zg(s,e):s}else return e!==void 0?OP(t,e):t}function DP(t,e){if(e&&PP(e)){if(t instanceof Lu)return xP(t,e);throw uc("To use ref(service, url), the first argument must be a Storage instance.")}else return zg(t,e)}function _h(t,e){const n=e==null?void 0:e[xg];return n==null?null:rt.makeFromBucketSpec(n,t)}function MP(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:tm(i,t.app.options.projectId))}class Lu{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Pg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NO,this._maxUploadRetryTime=kO,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new KO(Dg());{const o=nP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const mh="@firebase/storage",gh="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="storage";function LP(t,e,n){return t=Be(t),NP(t,e,n)}function FP(t){return t=Be(t),kP(t)}function vh(t,e){return t=Be(t),DP(t,e)}function UP(t=nu(),e){t=Be(t);const s=wa(t,Gg).getImmediate({identifier:e}),i=Z_("storage");return i&&BP(s,...i),s}function BP(t,e,n,s={}){MP(t,e,n,s)}function $P(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Lu(n,s,i,e,gi)}function HP(){_s(new Bn(Gg,$P,"PUBLIC").setMultipleInstances(!0)),Vt(mh,gh,""),Vt(mh,gh,"esm2017")}HP();const WP={class:"container bg-light pt-5"},VP={class:"col-10 mb-3"},jP=se("label",{for:"inputTheme",class:"form-label"},"Title",-1),KP={class:"col-10 mb-3"},qP=se("label",{for:"inputRoute",class:"form-label"},"Route",-1),zP=yr('<div class="col-10 mb-3"><p>Tags</p><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox1" value="PM"><label class="form-check-label" for="tagCheckbox1">PM</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox2" value="Frontend"><label class="form-check-label" for="tagCheckbox2">Frontend</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox3" value="UIUX"><label class="form-check-label" for="tagCheckbox3">UIUX</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox4" value="App"><label class="form-check-label" for="tagCheckbox4">App</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox5" value="Web"><label class="form-check-label" for="tagCheckbox5">Web</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox6" value="Commercial"><label class="form-check-label" for="tagCheckbox6">Commercial</label></div><div class="form-check form-check-inline"><input class="form-check-input tag-Checkbox" type="checkbox" id="tagCheckbox0" value="Recommended"><label class="form-check-label" for="tagCheckbox0">Recommended</label></div></div>',1),GP={class:"col-10 mb-3"},YP=se("label",{for:"inputComment",class:"form-label"},"Comment",-1),QP={class:"col-10 mb-3"},XP=se("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),JP={class:"col-10 mb-3"},ZP=se("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),ex={class:"col-10 mb-3"},tx=se("label",{for:"file-input",class:"form-label"},"選擇封面(720*420)",-1),nx={key:0,class:"mt-3"},sx=["src"],ix=["disabled"],rx={class:"col-10 mb-3"},ox=["disabled"],ax={__name:"WorkWallBS",setup(t){const e=vh(zM,"workCovers"),n=vO(oi(GM,"works")).key;let s=[],i=Ft(""),r=Ft(""),o=Ft(""),a=Ft(""),l=Ft("2023-01"),c=Ft("");const u=Ft(null),d=Ft(null),f=Ft(null);window.onload=function(){const b=document.getElementsByClassName("tag-Checkbox");for(let C=0;C<b.length;C++)b[C].addEventListener("click",()=>{p(b)})};function p(b){let C=[];for(let w=0;w<b.length;w++)b[w].checked&&C.push(b[w].value);s=C}function m(b){u.value=b.target.files[0];const C=new FileReader;C.readAsDataURL(u.value),C.onload=()=>{d.value=C.result}}async function g(){const b=vh(e,u.value.name);await LP(b,u.value),r=await FP(b),u.value=null,d.value=null,f.value="",alert("文件上傳成功，URL: "+r)}async function E(){YM(n,s,"/MyPortfolio/Work/"+i.value,r,o.value,a.value,l.value,c.value)}return(b,C)=>(kt(),ln("section",WP,[se("form",{onSubmit:E,class:"row justify-content-center"},[se("div",VP,[jP,Ti(se("input",{type:"text","onUpdate:modelValue":C[0]||(C[0]=w=>Re(o)?o.value=w:o=w),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[Ci,ut(o)]])]),se("div",KP,[qP,Ti(se("input",{type:"text","onUpdate:modelValue":C[1]||(C[1]=w=>Re(i)?i.value=w:i=w),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[Ci,ut(i)]])]),zP,se("div",GP,[YP,Ti(se("input",{type:"text","onUpdate:modelValue":C[2]||(C[2]=w=>Re(a)?a.value=w:a=w),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[Ci,ut(a)]])]),se("div",QP,[XP,Ti(se("input",{type:"month","onUpdate:modelValue":C[3]||(C[3]=w=>Re(l)?l.value=w:l=w),class:"form-control",id:"inputDonedate"},null,512),[[Ci,ut(l)]])]),se("div",JP,[ZP,Ti(se("input",{type:"text","onUpdate:modelValue":C[4]||(C[4]=w=>Re(c)?c.value=w:c=w),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[Ci,ut(c)]])]),se("div",ex,[tx,se("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:f,onChange:m,accept:"image/*"},null,544),d.value?(kt(),ln("div",nx,[se("img",{src:d.value,class:"img-fluid",alt:"Selected Image"},null,8,sx)])):gy("",!0),se("button",{type:"button",class:"btn btn-primary mt-3",onClick:g,disabled:!u.value},"上傳圖片",8,ix)]),se("div",rx,[se("button",{type:"submit",disabled:!ut(o),class:"btn btn-primary mb-3"},"確認送出",8,ox)])],32)]))}},lx={__name:"WorkBS",setup(t){return(e,n)=>(kt(),Pp(ax))}},cx="/MyPortfolio/assets/TravelMaker_Banner-7430852c.png",ux="/MyPortfolio/assets/TravelMaker_Intro-d8fb542b.png",dx="/MyPortfolio/assets/TravelMaker_Plan-d65319fc.png",fx="/MyPortfolio/assets/TravelMaker_RIP-b0abb2ed.png",hx="/MyPortfolio/assets/TravelMaker_SurveyResult-995de646.png",px="/MyPortfolio/assets/TravelMaker_Insight-a9bdff22.png",_x="/MyPortfolio/assets/TravelMaker_Insight2-cafa1eed.png",mx="/MyPortfolio/assets/TravelMaker_Reschedule-2b6cb04d.png",gx="/MyPortfolio/assets/TravelMaker_Persona-553546a2.png",vx="/MyPortfolio/assets/TravelMaker_CompetitiveAnalysis-775563ae.png",bx="/MyPortfolio/assets/TravelMaker_Reschedule2-7cb4af8e.png",yx="/MyPortfolio/assets/TravelMaker_Reschedule3-cd5024db.png",Ex="/MyPortfolio/assets/TravelMaker_TA-95395ec4.png",wx="/MyPortfolio/assets/TravelMaker_HeroPage-1794a6aa.png",Tx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7d1BchJBGEDhfwYPwhmMWYMbKE8RbxFZmaxS3kKPkWwc11Y8AxfJtDNYWFqlkMk0Dbx63yJZBEioV9NhepomQpIkSdlVkdmn+8cUR9RGe7taXt6ENuoQmoHhDAxnYDgDwxkY7lWUVFVNm56+xUh11B9Dz1I0cB83xzlqd65t4GdyiIYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeGKzkX3FwmcRy7LIxjOwHAGhjMwnIHhDAyX/TSpf+vIkNvX1WQWKc1zPV53hyb0W/b3Jg11d//9ZtciuuvlxdH/xnPmEA1nYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGC7/RmgPP74OukNK0+7r9L8/r6omBmgjfVktLj5HJncPj+/rqK7iiK4Xr9/GC+VfVbnj0l+Zx2tHbxHx9+9vp91AN48z5RANZ2A4A8MZGM7AcGU3QotYpyqtY6QqVfM4Ed3zaWKk7vlMY9ep4ghlN0KLtjtHzbIR2lE3Hf/Th8WbF5+jbu1beDiGQzRc6SH64Loj4aqbTZtFLr9m2s4WLnD0/8vOPEpODtFwBoYzMJyB4QwMR3wVnWW2bOuQs0wl4ALnmi3bOuQsUwkO0XClN0LLM8uUTmYqevgatH854MRM6SGaN8uUew1aZg7RcAaGMzCcgeEMDJf9VfTQNUr7ZooGr3l6qteRU1uv02T8uqtjcSM0OIdoOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBw2Sfy+4sHQ25/iI/VWb27bEIb2S8XDl5DvGeF5NDHa+u2/9aENhyi4QwMZ2A4A8MZGM7AcKU3QrtdLVkboZ06j2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRiu7EZo1WQ2dM2Wxim7EVpK8zrqeagYh2g4A8MZGM7AcAaGM7AkSZI01E/9nZ+cu91TLwAAAABJRU5ErkJggg==",Cx="/MyPortfolio/assets/TravelMaker_IA-170a7884.png",Ax="/MyPortfolio/assets/TravelMaker_Sketch-0611eb33.png",Ix="/MyPortfolio/assets/TravelMaker_Wireflow-47ea7183.png",Sx="/MyPortfolio/assets/TravelMaker_Prototype-1691cd41.png",Rx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApnSURBVHgB7Z3Nchu5EccbGK6+7IPeIPQTmCrbqcrJ1GH9kRwiP4HpJ7B8sezdg6RDosg5yHoCy09g7yGlSHsQfUrVOlpyn8CzTxClahPLMgdI95C0FK0IDMnBoIfCr0r+KIBkif8B0N1oNAACgUAgEAgEArkjYEJYe9Oan77aqUmQNaHhutaiBqDnsal6rmuMv/YRtsVaw89K6KZQn9vP7/8uhgmk1AKnol5RSxLEQwG6hoLNw8iINoq9DclJc5LELqXAJOyVq/BYa7U8nqgXIwTsJMnJ+iQIXSqBXQt7nkkQujQCb3z/vi6VfAW/XlNdcwQa1lfu3XgJJaQUAm/utVYB1Bp4pKyjmbXANCXPXVWvtIIl4EGs1MlimURmKzCJOzOrmjhyrsOQ4GuOtEY3SIg2KPi3FurotE3+Bl2kKlreo1rdpRKZpcAk7uycasEQ6y2JqhS8RgPs7afjSnvtwcKR7TUv9n+oaRXV8Vt4DMOt7fhZJwtlEJmlwH/5+2F7iJGLIwpwbbyxA2Owsfu+LiKxKrSoZ3xJKUYyO4HRoNpCg2rZ1o9GbJKo7ef3b61BjmzsHjakBDTqMo3o+ON/5UKW2cIXEhjxYr/1OIu4SIwW7ULe4hI0EyglF4WEtxm6V+euqC1gDJsRvLHbqkaRatkMH2z/6fijrBcxanDaXpNSrtr6JaAffHP3ZpYHonDYjOCoorasVi2OqqLEJWiGUEqt2/pFIF6RYQgMYSHwxv5hw+br0sj9+It8VPR6RyKjy7Vt6YZWfyfL0lI4LKbozb3DD2A2aoayWCmsWYHKbaV1HZ+Mav+9U/8Yd41w5ylOhHr9/OtbTcjI5v6PB0DvN5gjNLiucTO4KuAZck/AYrF23SC7uKlfC5UtULquMMJxnu4SoOsa/y21bOCDFSuB733H7mKpRDyKIm2yEfqjeA0Y4X2KllI0TO0aY8BZfFyywLWOWpZRdp6q1PDqxf6hdQ19fn8h7nRs67F8DMzwKvDWAX2p4qGpj8YAP1igzQiMYI2824OjsjE7pw9sIn/z+1v0GbGhyzwtD8AIrwKfnCR1U3t39Jqn5vx2mnSNRLZ3U0aDSySCy8ZIiu8p2mw5oyFkaifrO99tRF376/ctY+BiarqyQ8baoHYhxB+BEZ4FlqZ4c2yzcnH9tAYhhgX93mXTNPtkcQE3GvQ7w1tUOfnEngXWtYEtWv8EBrqj1x4v1kI3cY3dRqt6HZ8IijbFttdIZTaW0M1qmtopuxOY4M1N+tPffjB+CbYvUabGmTZ1udB3ppColMmaxbir0ygc5NN2Et2smL65ru/NAm8jGN0j4zSmImgPakutb7M7NDAwQu7Oyt2bDVwsm4bXo0872ACcm/sqBhNaVIEJbAU2cXxsmQI1bSOarW+VJGb3yzAKaR02G1qUNcIDbwIrYRG404kHNY0z+vtgjLlpEklLowFIvjPbPeCzsNoPzso4D8dZyiLSOJRS4EB2/K3BWptHT6VSBd5UBzVg2PRnYII3gTFwHxs7MHI1zmNz8SSjqd+bwDZXQyjJJlhwnkpFVo0dhIiBCd4EtroaFivWJ2ic1U3t1tmpQLwaWcaYLgYyuOY5oZ9729B89O0ffmt104rCq8C2cOTsbKcBzOiuv8YY+jtghFeBKaZr7CAjVltvBK6/xuQ6rQWr9FmvAvemsnhgB5ymOWVI0EaFLQMF4KQJjPAe6MD9V+Omfu/QNwu6u1CDwen5O25nlbwLPDNTeWmyppHq5t77NfBMltGrIz1yXpgrvAvcy5B4be4lV23BBZd095CVLV8rHibPuihYxKK1jmyjGI2b6M3G7j+q4AEZaWttEMrdBoawEJg24ekoqKUbjqKpg6JFppxpe661fjvu+WRXsNlNorUY7PlSqcgVAc431IWGeTquQjnTtr5KfX4CTGEjcHctVo8ydK3idLgG7lnKdEpCqyecT/mz2g+mLIssxzW5QIn5K/dusbOcz8Juw797at9mVbMgPv6PZDs192GZ0ZFmPYJgE7C/gDRrk3Ntjj5sU3ampkTWOhlFU6o6WWwFJqPr6dc3HmQ4XV8YdEqCquqUqdId+6S7Z/duLqOPzGKtEzpqT88cs9yjHkQpsirpXK5S8hpkOFfkFrWMfvgHCn74iqoNS2nSZrtHTm5cQx+YfOUYPELBj7IIXbq86LRQmeAR9y2D0CHxPQc4Cx0EzhGOQnsvo+QTWtMHtY1QffYLPaGpTNNbJdW2z33iMIIHQHHxZ3duLmJsfJH8XxiNJankAe1K+cotCwJbyEVo3JXqC/3nvX8WWoUnCJyRvISOQLyh0o29GiPOCQIPSU5Td1phLxXasTEWBB6R3ISWUy2XCYVB4DE5FZpCqSPtY89XKpGzXLMgcE70q/eMKPS8jKadJPgHgXNmZKEdHdMJAjtiFKFdFDL1HsmiM8BfXflclULMf/ol24VWZYKExr8aG7utNVuFvV4h01yvBvAmcHqbqI5WQas66CitSjg7p2Bz78e2ELqdALxTkLS/vcPnMPU4nAr9fkdKOegYTBVypnCB03M+dBREUc7xRbUm05u8a7h2NCREdLLgCP/fxMUEBVdtjud/hmGcCn+jUKjAXw5x6exPau+OhCVQGNdFlTE4QM9FDCVF4QMsC7wLpTAj68wJvSqMTxVKCu5ODQxqCJF/qnAhAucsbqkxFSrVoHI3MJ0LHMQ9j6GAiwJjEfRRcCpwEPf/sRZBF2hM5owzI2sYcSm5XWvRljI9zXcdf1W2Ve7GwVYhT0md+xTtRODhRq5af3bvyzWxO/QHBT+mZzo1KWQNIn0bVCp4hvfijc2CpkAP5EzuAg8r7srdX98B3ItmNXs/L0/fN0EfWdRB6uv4RdWst5UyQ4roNvl9F0EWtIsoXu4Ca93BeKqlWOfpx3+AjPQiQfTz5UAa3VWYJFGtNFO74YF0YUETTjzurBcrd5GNlbsLuZwH7k/tn475xbTpIpGTE/WvQe1kh9A5LMgZZyEVXyJzhdJwDTHotBSEi2oBztykrLdnd1E7m3uthzDBSAHG5SPLRSIjfS44JIh8igZRNbW7sKAJ55GsIHIXS4HzI1c2QyGx6CByWht78BSN+9/giMJ2ky6zyGRBm3x2FzHoPoXmZF1WkW1X8eHojsERhSfdXUaRfVnQ6WeDBy6byL4saMJb2uxlEtmXBU14zYu+LCL7sqAJ74nvky4ybfL7sqAJJgXBJ1dkW5qsSws6/XxgwqSK7NOCTj8fGDGJIqMFXTe1u7SgCZb1oidJZFOaLDi2oAmWpwsnS2R/FjTB9vjoJIhsS5N1bUETrM8Hl11kW5qsawu6+xklYJj0nzTHWmin61pWelmU9UHtSqpF16clSyEwMVyOVymITaUU86JE9aKHma7LgCokybA0I7jPhIzkQkYvUcKC4OUeyXQJJ93aAgVRuhHcZ2P3sCElOKkt5ZBYiOTB0wLrjpS2jFJa2l/Ja2OUESwUugaPruR5WnBRmdKO4LN0Tw2IBjA6n0RTMbpssVL6O4DOTpnuWgoEAoFAIBAIBAKBQCAQCASK53/7mZ4144sPdQAAAABJRU5ErkJggg==",Nx="/MyPortfolio/assets/TravelMaker_ABTest_A-6704b59a.png",kx="/MyPortfolio/assets/TravelMaker_ABTest_B-5b6e6e65.png",Ox="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAubSURBVHgB7Z1NUhxHFsdfZrUk9BHhvoF6TiAISRMxK0HEWB8zC6ETSDqBYDGWsBaCxZhBswBOADoBrcWELLygtZoI25jWCaZ0AybCIGi6Mv1eVZeNcVdmVlVmdTWRvwiFHVTR1dQ/8+XL9/JlAng8Ho/H4/F4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6PxxYMzgGLW3vNi1eiacZYkwmY5By+kMBaIGWLrjMGTSmhOeRXQ7y6j29hH+/dx3s+sQBCAaJ7/HOju/hoah/GnLEUePm7H6Y58EkQcAfFm84QrzT42SR6Bzh8INEXvrzdgTFjLASmHnrpqpjlEh66FFRHKrhg8Pb4gLfHoYfXWuC4p8rgFQM5OSpRNbQjkG++vnerDTWldgJTb716DZ5JKeZqKuowQgDeFuJofeHBX0KoEbURePndXosxMYcO0uMxEvYPoBnfjKLeUl2EHrnA1GMvX4nW8Ks8hnNEXYQemcCOTXEIIPfR+w2lxGmQgP9LJn7nEDHJm3j9C8ZkPIVikrXwxy2wDOd88R9fTi3BiBiJwLHzJPgGlHyh5NUKkF0Q7KPk0A0g6h4eXAjLeLevt79Hh463sGFMA5c3GP23PCF63ksLd29uQsVUKjD12ivXxIYUMAvFwV4Jb7Hnt4+PqglGLL/7AYMofBYb1EMo0ShHYbYrE7hMr6WeGkViHf+3s/BgtMGG1BksIXaIU6v5qqZWlQi88n5vFUDMQU4kkx0ZyaVRi5rFyvsfZyWDZ0XMeFVjs1OBqbXzQG5gnHc6z+/VXdizxH8njxbzzwRYV4jjRy5NtjOBE2cl2IIcZmzchD1LQaFDIXozrkR2IjCa5Mc4Tq3lmP7gHymejquwZyHTja8WhyXjxo2OIp97fm/qDVjGusCvt/dobrtmcm/qPKGwi3AOQe97EcfaV6b3uxiXrQqMPRf/GLFoci/27o9S9mZdmaZfc8SYqAgYvx5bE8wXp9fx52EkxSfMG3eZOOm6+h6J2RY7YNibbYtsTeB84sr1F/dv5faqdaTRMUFOXU7HLnZ4mFyHqNdxIXae3mxTZCsCm4o7MMmPbI+1xb3Y4bgKSOQZm22JXFrgHD3XibdIYz4930E8ex9f8prtMTGPybYhcimByVvGl7upu4+mP0cHwSObYcWic+zcMNYR0fFTmw1zdWevedI3DdnyJ2W868IC0zwXINjR9xz55vm9W0/AInkdFws4sT5osjcNhpX9fj+aefn3P3ehABwKQC+Yghh6ccXSORCXwGde3Fl+998WWITeDc7/dSa42WgEW0WfXUhgDGJQoLylvovEtTu/LSIuOXaY9mtjY1wX+J3oH/0//QzivLExTkSmGADNKkD37ODSBhQgt4k2c6rsm+Vk5YfYAwNx4zyxgDeUUtR57IP8L07Z2B0wazjh50M+ZTtNaWKuB07fPOQgl8DfoJsfANtS3UMO1Yu7t2bAMqYZKeoNR5+DxbwC5JlqFXnRJqy8/wkbsJxU3SO4mMmzPttYYEPz6Kp10/xR2bCSOTbMLzwot2pi+d3ukyCAVZ1/kfdFm0Deda+ntVK53rHxGJy0bvWDydN0s8IiDg5kX6VxFqKZsuISyWdEM8lnZjNYvGCV+ZkpHFq47tktjNaZx7dNblre3n2iM1045jlZipI8Wzc2RjNf3S02jRgGfRZF3DS3tQbfzSoLD6ZCskSqe9DznqMVMmCAkcBc6lqMWLLRe4Y+WzsmiiWb4qaQc4YiK180d7TUl96lzrMmC0KOJ2jQCpx4zWrTbHs6lELjviZS5ezZxNd/u71GkazMG/C72Z42pVy6FCyCehrXunylr3U6lQKnC8xU99C4C47grK8M5aGj8xQcI6JIGYjgrFFmhWgmyXis+/v4M10vVgpMjpXamxRul4Dy4KHialhFOSeZapXTg/nkaXD4bI2pbuocrkyBY/OoHmPQXW8YrdwoClPMCfEPfwsVIYTMDPYzFgdInEGmWtXAYodLMUxkCjyYFkH2B8OSy0XnNCdUWQ8ZyErWFRP4gjuKy00TZ6coZKoHa8IzCYKLmb14qMAmvdeV15xyeHjSUt7Q74dQEUIESi/90sSRM4GJiYnYUoZZ17EjPMlqZEMF1vbeCpwbzpnypVVZ/kFzU+UNjUYLHJI4XKB09rI86gwTzW9ABjjmjOVeFeOOzmIyNtwhHSqwEFGmA4POzaRpFMVjD13ULK6yHMJQgQc2PxPaNwOc0whVV10FGIY/i3ySbERPOnM2U3TRRBn1hprwoQKTzaecLmR+mpz+Js7wuGNiQhPs5xeUaTW79Fuqqye9CyE4JFlYmB1NlAw2s3ySzGkSeo6LoADzwquupwfKAIOEaagI9DtUjXnf5XQxWR6ljiZm9V4iU2DyHDVRlFxpqyJggOFD1jV86ZXt6YHPyo6oMWk90XEaXZpW1Xvj3wcFJlGUf/7ne2emEiNZHcXlZhXOHlX3gyrZItxF1JK/L7shxxuzKXovoRTYJIrSaDQ2XJlqIRvKaFUVzh7n6sS+kH0nETV6p7pFBWi6tftyadOFuigKrSFyZarjAIMmXbfy7a71GqcUbaqUyY6rgMvlK2AlTasV2CRtRabalVctIqle1c9g1YWpThb2q1ePiohZr+clkjmvLk0LRiUtxovu/vXtj2vobDxT3IINoTflokWvvN/9H6hbc6nV/2cxrNrAHnTzT2AZ8pqDQOwpEy3oWL24e9MoXGy86M5ghUGTFoa7GI/1ie949f+OjTVSSb2VviSHdsoBy6QrV3UNS+dYncZYYLMVBtC6fFVugWUMEt9EE6M9G6+3dzeKRLmoYQ7WXm/qxKXv4mIbJJOKkSiS83msZO7KBgNTHdfXfmVoQkwxXDOcElIO9wSi9ZeaBXk0frOIz+bYBNXJ2m9qmJT2U9+VvxyoUHXhyvZPO7qyTRf7TRQsPAvxX5e260/3q6R9KrEBXC+wubijKkN91QZtefHi/s3cMYdCApu+6BqJbIORiVvm2YUEJkzrg13U8ZyX+mATs5xWbRRd+11YYILqeHDsMinhaOO49XQcK/yTzdlOrFb4x5WS5IwafHec7z4tszyqlMBEjt1jnPQCen4Q8Ge29+iI47wCnZr7t9fAIvmsT/ka60IF4KehAmaDKnUiLqC2HfGi50cRn1Lmr3Mik112pqyLix47BTGgInGJ0j04ZVT7QP3+O9DKCzHNucRpHMvlcQ72yfxwfNRYc5Hfzbfjrr3dEawJTOTcus/pJpyDgu5JgckQxvh1lLCVXkvOP2L4T3ziwLqfD4OOq6T9oPynjc+8YfYbdre+sCowUYf9GevCv7/be5XrTAop5m0PC9YFJkyr5E8RQiDnn/+1vgdM5SHv7va2dicY+tngiII74tTqzKG8pCe15Zy6YVg1euSixplwJjCRiEzJB5nL4Rk3oQsK62SOfRanAqfkHZd/hbFOJMV6Xc8GLCos4WrH3bNUIjBRYBf00wyO0umtjbpXk6gNaNwpcaBXpbvbVyYwYWnb30TsQLSrqJGKj7a91p+klGLZc5MwrNT+/LPdkK2OSgVOGcSwdYvKzEAzLoX8KGg8YyJ8WcJZITEvXD1pcQgm6SRxxtkNS0fbjuxMipEInFJ4bNZDqzFDOrZ9sK3h0LML46PgY/FYC0dFErEFFknPpHAVHTP6DjBibO/WXhconn10wOdHfUr4yAVOOQ9C/7YJ6uidwZTaCJySxG6juUE9UAvGgDqY4ixqJ/Bp4qkVh8cgmNUUow3So23rflJbrQVOiacqE2KWN+RDOghyVEfAx1ko9NaFZG+PD3i7br11GGMh8Fmo4o8zPokJijsuBU8FhYh9EFJ0x/HovbEU+CxJD+9PkugSx20WyOvJse3xFGjo9CfJCSelsShiiD8J46PgOXQ5Tq9c5og9Ho/H4/F4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6Px+PxeDwej8fj8Qz4Bee/4ARcC+3aAAAAAElFTkSuQmCC",Px="/MyPortfolio/assets/TravelMaker_Styleguide-71e16778.png",xx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPfSURBVHgB7d09ThwxGMbx116UL6XgCJsTBAQpUgUaCB05AXuEpCKbhk0RIUjFCYATQBNFS4qQFoSGI+wRqFGwMw6MlERh1561x/Y7z09CbDFT/TW7M+OxhwgAAAAAAAAAACAHgmraPrnoSRIbgvSc1jRL4J0QdKVJXCrSh/2VhQOqwTnw9teiKzt6n7ReImjSSKnr5f7ay5HLTk6Bf8eV6nv5sUsQg3NkSQ4QN7ry2/PhvssO1oHNby4hbnzlT+NdCyvWgc0JFUESXFpYBzZnywRp0PYtZmw3HHspJMSp0jc/CLyRovNqzJWK9WWpdeBxTNz+6osBgTfbw/OBJLlEU3I6i4b8IDBzCMwcAjOHwMwhMHMIzBwCM4fAzHm5k5Wb3ZOzOa07W+ZzOb76znUQPSetO4JNXKKOGddeN39SPig+fTljO5DSqsBV3H8GTmZnZjrFzrBgORzamsD3xP2DOvj8rdgiZloReHLcW0qpAbfI7APbxq1wi8w6sGvciom8e3Lh9HBbqtgGrhu3Uu7X4xCZZeBp41ZM5MFRkfWsDXY3OszD+VqrIyJMpzFYHcG+Z15orfcGb+avKGNsAvufVqMP379efEuZYxE4RNzN1cUeMZB9YMQdL+vAiDtZtoER106WgRHXXnaBEddNVoER1102gRG3niwCI259yQcOcfuxLXGNpAP7P3LVRw63H10kGzhE3M0WTlJPMjDi+pNcYDPALoQ6JsT1IqnAJu6jx+pUCHpOXrQ7rpFMYMQNI4nAiBtO9MCIG1bUwIgbXrTAiNuMaIERtxnRAiNuMzJ/8N0urrkzRvJnjyKKtZZnxoHt497e9pRdimtAEWT60J1r3PauVJ9hYMR1kVlgxHWVUWDErSOTwIhbVwaBEXca0S6TNlcXar838X/6a/Oj8t8zgr9grUrmEJg5BGYOgZlDYOYQmDkEZg6BmUNg5hCYOQRmrrF70WYF2Bst1gms3L0gmqbVSOBqeV+JFWDtjY9rvUBq8MBY3jcAoS9tNw36G4wx2jDUjTi03TZYYMQNZtRfWziw3ThIYDPvCHGDGCl1veyyg/fA1aQyQlyvtNCnJq7rexa9n2Q9ear2tfI176jdhKArRfpSadr7sLJ4TDV4DWxeQ1PGtbjWxYSxpnj7it4ZFlvmNTSTt0TcJnk5giXJjTJcd/KWiNs0X0dwd/ImiBtDQ4MNiBtLA4ERN6bAgRE3toCBETcFgQIjbioCBEbclHgOjLip8RgYcVPkKTDipspDYMRN2ZSBETd1UwRG3BzUDIy4uagRGHFz4hgYcdnaGZ4PCAAAAAAAAAAAACCIX2gnColSszdKAAAAAElFTkSuQmCC",Dx="/MyPortfolio/assets/TravelMaker_UsabilityTest-bc219839.png",Mx="/MyPortfolio/assets/TravelMaker_Nextsteps-125b26d6.png",Lx="/MyPortfolio/assets/Travelmaker_Logo-810e2de1.svg";const Fx={class:"container-fluid"},Ux=yr('<div class="row" data-bs-spy="scroll" data-bs-target="#sideNav" data-bs-smooth-scroll="true" tabindex="0" data-v-fffd7b96><div class="col-12 banner p-0" data-v-fffd7b96><img src="'+cx+'" class="img-fluid" alt="..." data-v-fffd7b96></div><div class="col-3 d-none d-lg-block" data-v-fffd7b96></div><div class="col-12 col-lg-6 content" data-v-fffd7b96><div class="pt-5 border-start" data-v-fffd7b96><div class="pt-5 pb-5 row justify-content-center" id="item-1" data-v-fffd7b96><div class="col-12 col-md-8" data-v-fffd7b96><img src="'+ux+'" class="img-fluid" alt="" data-v-fffd7b96></div></div><div id="item-2" class="mt-5 mb-5" data-v-fffd7b96><h2 class="text-center display-5 mt-5 mb-3 fw-bold" data-v-fffd7b96>規劃旅遊行程</h2><img src="'+dx+'" class="img-fluid" alt="" data-v-fffd7b96><div class="row justify-content-center" data-v-fffd7b96><div class="col-12 col-md-10 mt-4 mb-4" data-v-fffd7b96><h5 class="text-center m-0" data-v-fffd7b96>每次旅遊前，總是浪費大把時間排行程嗎？</h5><h5 class="text-center m-0" data-v-fffd7b96>快來嘗試專為旅遊設計的行程規劃 App 吧！</h5></div><div class="d-grid gap-2 col-8 col-lg-4 mx-auto mb-5" data-v-fffd7b96><button class="btn btn-bts btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#PlanningPopup" data-v-fffd7b96>Behind the scene</button></div><div class="modal fade" id="PlanningPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>Kickoff &amp; Survey</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p class="p-0" data-v-fffd7b96>Google 曾經推出旅遊行程規劃 App - Google Trip，僅上架一年後便停止營運。</p><img src="'+fx+'" class="img-fluid px-5" alt="" data-v-fffd7b96><p class="pt-3" data-v-fffd7b96>於是我們團隊以年齡、職業、規劃方式、情境等方向設計了一份問卷，透過不同社群管道蒐集到超過兩百份的回饋，希望可以了解各族群規劃旅遊的方式。</p><img src="'+hx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 不同年齡層之規劃方式比例分布 </figcaption><p data-v-fffd7b96>其中不規劃旅程的人僅佔不到一成，而 30 歲以下的族群使用手機規劃的比率要大於電腦規劃，<strong data-v-fffd7b96>仍存在用手機規劃旅遊的需求。</strong></p><p data-v-fffd7b96>取使用手機規劃行程比例最高的 19-22 歲作為目標族群，探究其使用習慣。</p><img src="'+px+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 目標族群之不同旅遊規劃方式比例 </figcaption><img src="'+_x+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 目標族群規劃旅遊行程的參考資訊來源 </figcaption><p data-v-fffd7b96>由此歸納，目標族群規劃旅程的主要習慣為文字紀錄＋Google 搜尋。</p></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div></div><div id="item-3" class="mt-5" data-v-fffd7b96><h2 class="text-center display-5 mb-5 fw-bold" data-v-fffd7b96>選擇替代方案</h2><img src="'+mx+'" class="img-fluid" alt="" data-v-fffd7b96><div class="row justify-content-center" data-v-fffd7b96><div class="col-12 col-md-10 mt-4 mb-4" data-v-fffd7b96><h5 class="text-center m-0" data-v-fffd7b96>旅遊時總是計劃趕不上變化嗎？</h5><h5 class="text-center m-0" data-v-fffd7b96>輕鬆選擇鄰近的五星景點吧！</h5></div><div class="d-grid gap-2 col-8 col-lg-4 mx-auto mb-5" data-v-fffd7b96><button class="btn btn-bts btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#ReschedulePopup" data-v-fffd7b96>Behind the scene</button></div><div class="modal fade" id="ReschedulePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>Interview &amp; Competitive Analysis</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p data-v-fffd7b96>為深入探索 TA 的目標、需求與痛點，尋找了三名 19-22 歲使用手機規劃旅遊行程，且每月至少出遊一次的旅遊愛好者作訪談對象。</p><p data-v-fffd7b96>在訪談過程中，請受訪者描述旅遊的過程、遇到的阻礙、使用手機的情境、前往下個行程的行動。</p><img src="'+gx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Persona of TravelMaker users. </figcaption><p data-v-fffd7b96>透過訪談，我們發現受訪者開始不使用軟體的契機是在旅遊時計畫有變，臨時修改行程時會直接拿出 Google 搜尋景點，找到後就<strong data-v-fffd7b96>懶得回去修改行程了。</strong></p><img src="'+vx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 市面上旅遊軟體的競品分析 </figcaption><p data-v-fffd7b96>競品分析中可以發現，替代行程功能是現有的旅遊相關產品中，尚未被強調、提供的服務，可能有未被滿足的需求。</p><p data-v-fffd7b96>為了快速找到理想行程給使用者，我們分析訪談內容，從中建構出行程推薦的邏輯。</p><img src="'+bx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 分析訪談內容 </figcaption><img src="'+yx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 行程推薦邏輯 </figcaption></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div></div><div id="item-4" class="mt-5 pb-5" data-v-fffd7b96><img src="'+Ex+'" class="img-fluid" alt="" data-v-fffd7b96></div></div></div><div class="col-3 d-none d-lg-block" data-v-fffd7b96><nav id="sideNav" class="me-5" data-v-fffd7b96><nav class="nav nav-pills flex-column me-5" data-v-fffd7b96><a class="nav-link cursorDefault" href="#item-1" data-v-fffd7b96>TravelMaker</a><a class="nav-link cursorDefault" href="#item-2" data-v-fffd7b96>Planning</a><a class="nav-link cursorDefault" href="#item-3" data-v-fffd7b96>Reschedule</a><a class="nav-link cursorDefault" href="#item-4" data-v-fffd7b96>Target Audience</a><a class="nav-link cursorDefault" href="#item-5" data-v-fffd7b96>Mockup</a><a class="nav-link cursorDefault" href="#item-6" data-v-fffd7b96>User Experience</a><a class="nav-link cursorDefault" href="#item-7" data-v-fffd7b96>Role &amp; Try</a></nav></nav></div><div id="item-5" class="col-12 heroPage mb-5 p-0" data-v-fffd7b96><img src="'+wx+'" class="img-fluid" alt="" data-v-fffd7b96></div><div class="col-3 d-none d-lg-block" data-v-fffd7b96></div><div id="item-6" class="col-12 col-lg-6 content mb-5" data-v-fffd7b96><div class="row g-4 justify-content-center" data-v-fffd7b96><div class="col-12" data-v-fffd7b96><h2 class="text-center display-6 fw-bold" data-v-fffd7b96>我們也重視您的使用體驗</h2></div><div class="col-10 col-md-5 col-lg-6 card-flow" data-v-fffd7b96><div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#IAPopup" data-v-fffd7b96><img src="'+Tx+'" class="p-3 card-img-top" style="max-width:150px;max-height:150px;" alt="..." data-v-fffd7b96><div class="card-body" data-v-fffd7b96><h5 class="card-title text-center" data-v-fffd7b96>有跡可循的資訊架構</h5><p class="card-text text-center" data-v-fffd7b96>我們了解遲遲找不到功能、按鈕的煩躁感，我們精心規劃的資訊分層架構讓旅人快速完成操作、繼續旅程。</p></div></div><div class="modal fade" id="IAPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>IA &amp; Flow</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p class="p-0" data-v-fffd7b96>首先整理使用者在每個階段需要的資訊。</p><img src="'+Cx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Information Architecture </figcaption><p class="p-0" data-v-fffd7b96>再進一步思考版面、資訊配置，並以手繪方式溝通。</p><img src="'+Ax+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Sketch </figcaption><p class="p-0" data-v-fffd7b96>得出共識後排出 low-fi wireflow 作為雛形。</p><img src="'+Ix+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Wireflow </figcaption><p class="p-0" data-v-fffd7b96>最終將設計發展為可驗證操作的 Prototype 以進行後續應用。</p><img src="'+Sx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Prototype </figcaption></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div><div class="col-10 col-md-5 col-lg-6 card-use" data-v-fffd7b96><div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#UXPopup" data-v-fffd7b96><img src="'+Rx+'" class="p-3 card-img-top" style="max-width:150px;max-height:150px;" alt="..." data-v-fffd7b96><div class="card-body" data-v-fffd7b96><h5 class="card-title text-center" data-v-fffd7b96>經過驗證的操作方式</h5><p class="card-text text-center" data-v-fffd7b96>透過不斷的迭代驗證，我們找出最直覺的操作方式，減少旅人的阻礙，不必費力學習困難的操作流程。</p></div></div><div class="modal fade" id="UXPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>A/B Test</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p class="p-0" data-v-fffd7b96>團隊在規劃替代行程功能時，遭遇到一個挑戰：<strong data-v-fffd7b96>「如何讓使用者在旅遊的當下決定是否重新規劃行程？」</strong></p><p data-v-fffd7b96>為此，我帶領大家做了 A/B testing ，分別將兩組不同的版面交給不同的使用者，並且觀察他們的行動。</p><div class="row" data-v-fffd7b96><div class="col-6" data-v-fffd7b96><img src="'+Nx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 延伸按鈕方式 </figcaption></div><div class="col-6" data-v-fffd7b96><img src="'+kx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 跳出視窗方式 </figcaption></div></div><p data-v-fffd7b96>我們注意到，pop up 的組別雖然會更快的點擊「不重新規劃」的按鈕，但是使用者的回饋表示跳出的視窗有一點干擾，並且只會想「快點關掉它」，因此團隊決定使用延伸按鈕的作法。</p></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div><div class="col-10 col-md-5 col-lg-6 card-see" data-v-fffd7b96><div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#StylePopup" data-v-fffd7b96><img src="'+Ox+'" class="p-3 card-img-top" style="max-width:150px;max-height:150px;" alt="..." data-v-fffd7b96><div class="card-body" data-v-fffd7b96><h5 class="card-title text-center" data-v-fffd7b96>統一簡潔的視覺風格</h5><p class="card-text text-center" data-v-fffd7b96>能夠在各種旅遊情境下清楚顯示的視覺設計，不再被複雜花俏的風格樣式弄得眼花撩亂。</p></div></div><div class="modal fade" id="StylePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>StyleGuide</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p class="p-0" data-v-fffd7b96>根據目標族群的喜好以及 Apple 的 Human Interface Guideline 建立專屬於 TravelMaker 的 Style Guide.</p><img src="'+Px+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Style Guide </figcaption></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div><div class="col-10 col-md-5 col-lg-6 card-test" data-v-fffd7b96><div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#NextPopup" data-v-fffd7b96><img src="'+xx+'" class="p-3 card-img-top" style="max-width:150px;max-height:150px;" alt="..." data-v-fffd7b96><div class="card-body" data-v-fffd7b96><h5 class="card-title text-center" data-v-fffd7b96>傾聽意見不斷改進</h5><p class="card-text text-center" data-v-fffd7b96>旅遊管家持續搜集使用者的意見與回饋並進行修正，同時積極規劃後續發展，帶給旅人更方便的服務。</p></div></div><div class="modal fade" id="NextPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fffd7b96><div class="modal-dialog modal-dialog-scrollable" data-v-fffd7b96><div class="modal-content" data-v-fffd7b96><div class="modal-header" data-v-fffd7b96><h4 data-v-fffd7b96>Usability Test &amp; Next Steps</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fffd7b96></button></div><div class="modal-body" data-v-fffd7b96><p class="p-0" data-v-fffd7b96>後續規劃進行易用性測試以持續優化使用體驗。</p><img src="'+Dx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> Usability Test Plan </figcaption><p class="p-0" data-v-fffd7b96>持續優化既有產品，並納入更多功能以提供更全面的旅遊助理服務。</p><img src="'+Mx+'" class="img-fluid" alt="" data-v-fffd7b96><figcaption class="blockquote-footer text-center pt-3" data-v-fffd7b96> 可發展功能與優化項目 </figcaption></div><div class="modal-footer" data-v-fffd7b96><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fffd7b96>Continue</button></div></div></div></div></div></div></div><div class="col-3 d-none d-lg-block" data-v-fffd7b96></div><div id="item-7" class="col-12" data-v-fffd7b96><div class="row justify-content-center" data-v-fffd7b96><div class="col-12 col-md-5 col-lg-3 align-content-center pb-5" data-v-fffd7b96><h4 class="text-center fw-bold text-white pt-5" data-v-fffd7b96>Role</h4><p class="text-center text-white mb-0" data-v-fffd7b96>Project Manage</p><p class="text-center text-white mb-0" data-v-fffd7b96>Research</p><p class="text-center text-white mb-0" data-v-fffd7b96>Interaction Design</p><p class="text-center text-white mb-0" data-v-fffd7b96>Information Architecture</p><h4 class="text-center fw-bold text-white pt-3" data-v-fffd7b96>Duration</h4><p class="text-center text-white mb-0" data-v-fffd7b96>Fall 2021</p></div><div class="col-6 col-md-5 col-lg-3 mt-md-5 pt-2 pb-5 d-grid gap-1" data-v-fffd7b96><div class="text-center" data-v-fffd7b96><img src="'+Lx+'" class="img-fluid" alt="" data-v-fffd7b96></div><a href="https://www.figma.com/proto/prrQCaOrDpzMd3DmCon6VX/Travel-Maker?kind=&amp;node-id=364%3A3631&amp;page-id=364%3A366&amp;scaling=scale-down&amp;show-proto-sidebar=1&amp;starting-point-node-id=364%3A3631" class="btn btn-cta mt-4 mb-2 fs-5 fw-bold" type="button" data-v-fffd7b96>Try TravelMaker</a></div></div></div></div>',1),Bx=[Ux],$x={__name:"TravelMaker",setup(t){return window.addEventListener("DOMContentLoaded",e=>{const n=document.querySelector("#sideNav"),s=n.getElementsByClassName("nav-link"),i=document.querySelector(".banner");window.addEventListener("scroll",()=>{if(i.getBoundingClientRect().bottom<=150){n.style.opacity=1;for(let o=0;o<s.length;o++)s[o].classList.remove("cursorDefault")}else{n.style.opacity=0;for(let o=0;o<s.length;o++)s[o].classList.add("cursorDefault")}})}),(e,n)=>(kt(),ln("section",Fx,Bx))}},Hx=Er($x,[["__scopeId","data-v-fffd7b96"]]),Wx=[{path:"/MyPortfolio",name:"Home",component:qS},{path:"/MyPortfolio/About",name:"About",component:()=>Xr(()=>import("./About-477300da.js"),["assets/About-477300da.js","assets/About-e43a0279.css"])},{path:"/MyPortfolio/Work",name:"Work",component:()=>Xr(()=>import("./Work-ac62130c.js"),["assets/Work-ac62130c.js","assets/Work-79bce94e.css"])},{path:"/:domain(.*)*",name:"NotFound",component:()=>Xr(()=>import("./404-b7c464f8.js"),[])},{path:"/MyPortfolio/Login",name:"Login",component:()=>Xr(()=>import("./Login-6573f735.js"),[])},{path:"/MyPortfolio/backstage/workwall",name:"workwall",component:lx},{path:"/MyPortfolio/Work/TravelMaker",name:"TravelMaker",component:Hx}],Vx=IS({history:WI(),routes:Wx});var jx="firebase",Kx="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(jx,Kx,"app");function Fu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Yg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qx=Yg,Qg=new Sr("auth","Firebase",Yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new eu("@firebase/auth");function _o(t,...e){bh.logLevel<=ge.ERROR&&bh.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw Uu(t,...e)}function jt(t,...e){return Uu(t,...e)}function zx(t,e,n){const s=Object.assign(Object.assign({},qx()),{[e]:n});return new Sr("auth","Firebase",s).create(e,{appName:t.name})}function Uu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qg.create(t,...e)}function q(t,e,...n){if(!t)throw Uu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function dn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Map;function en(t){dn(t instanceof Function,"Expected a class definition");let e=yh.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t,e){const n=wa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(xo(r,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function Yx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qx(){return Eh()==="http:"||Eh()==="https:"}function Eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qx()||sR()||"connection"in navigator)?navigator.onLine:!0}function Jx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||nm()}get(){return Xx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=new Dr(3e4,6e4);function Pa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,s,i={}){return Jg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xg.fetch()(Zg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Jg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Zx),e);try{const i=new tD(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw no(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zx(t,u,c);Pt(t,u)}}catch(i){if(i instanceof pn)throw i;Pt(t,"internal-error",{message:String(i)})}}async function xa(t,e,n,s,i={}){const r=await Mr(t,e,n,s,i);return"mfaPendingCredential"in r&&Pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Zg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Bu(t.config,i):`${t.config.apiScheme}://${i}`}class tD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),eD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=jt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function sD(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iD(t,e=!1){const n=Be(t),s=await n.getIdToken(e),i=$u(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yi(yl(i.auth_time)),issuedAtTime:Yi(yl(i.iat)),expirationTime:Yi(yl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yl(t){return Number(t)*1e3}function $u(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oo(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rD(t){const e=$u(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&oD(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function zo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _r(t,sD(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?uD(r.providerUserInfo):[],a=cD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ev(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function lD(t){const e=Be(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cD(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function uD(t){return t.map(e=>{var{providerId:n}=e,s=Fu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){const n=await Jg(t,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Zg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await dD(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mr;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ds{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ev(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _r(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iD(this,e)}reload(){return lD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _r(this,nD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:R,isAnonymous:B,providerData:W,stsTokenManager:Y}=n;q(w&&Y,e,"internal-error");const F=mr.fromJSON(this.name,Y);q(typeof w=="string",e,"internal-error"),yn(d,e.name),yn(f,e.name),q(typeof R=="boolean",e,"internal-error"),q(typeof B=="boolean",e,"internal-error"),yn(p,e.name),yn(m,e.name),yn(g,e.name),yn(E,e.name),yn(b,e.name),yn(C,e.name);const G=new ds({uid:w,auth:e,email:f,emailVerified:R,displayName:d,isAnonymous:B,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:F,createdAt:b,lastLoginAt:C});return W&&Array.isArray(W)&&(G.providerData=W.map(j=>Object.assign({},j))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,s=!1){const i=new mr;i.updateFromServerResponse(n);const r=new ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await zo(r),r}}/**
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
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tv.type="NONE";const wh=tv;/**
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
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,r),this.fullPersistenceKey=mo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Vs(en(wh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||en(wh);const o=mo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ds._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ov(e))return"Blackberry";if(av(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function nv(t=je()){return/firefox\//i.test(t)}function Hu(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=je()){return/crios\//i.test(t)}function iv(t=je()){return/iemobile/i.test(t)}function rv(t=je()){return/android/i.test(t)}function ov(t=je()){return/blackberry/i.test(t)}function av(t=je()){return/webos/i.test(t)}function Da(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fD(t=je()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hD(){return iR()&&document.documentMode===10}function lv(t=je()){return Da(t)||rv(t)||av(t)||ov(t)||/windows phone/i.test(t)||iv(t)}function pD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,e=[]){let n;switch(t){case"Browser":n=Th(je());break;case"Worker":n=`${Th(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${s}`}/**
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
 */class _D{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ch(this),this.idTokenSubscription=new Ch(this),this.beforeStateQueue=new _D(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ma(t){return Be(t)}class Ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=hR(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gD(t,e,n){const s=Ma(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=uv(e),{host:o,port:a}=vD(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bD()}function uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vD(t){const e=uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ah(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ah(o)}}}function Ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function yD(t,e){return Mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(t,e){return xa(t,"POST","/v1/accounts:signInWithPassword",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}async function TD(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Wu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ED(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wD(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TD(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return xa(t,"POST","/v1/accounts:signInWithIdp",Pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="http://localhost";class ys extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:CD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ID(t){const e=Li(Fi(t)).link,n=e?Li(Fi(e)).deep_link_id:null,s=Li(Fi(t)).deep_link_id;return(s?Li(Fi(s)).link:null)||s||n||e||t}class Vu{constructor(e){var n,s,i,r,o,a;const l=Li(Fi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=AD((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ID(e);try{return new Vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vu.parseLink(n);return q(s,"argument-error"),gr._fromEmailAndCode(e,s.code,s.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Lr{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return An.credential(n,s)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Lr{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Lr{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ds._fromIdTokenResponse(e,s,i),o=Ih(s);return new ai({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ih(s);return new ai({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ih(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Go(e,n,s,i)}}function fv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,r,e,s):r})}async function SD(t,e,n=!1){const s=await _r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",s)}/**
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
 */async function RD(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await _r(t,fv(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=$u(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),ai._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(t,e,n=!1){const s="signIn",i=await fv(t,s,e),r=await ai._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ND(t,e){return hv(Ma(t),e)}function tL(t,e,n){return ND(Be(t),Ei.credential(e,n))}function kD(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function OD(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const Yo="__sak";/**
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
 */class pv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(){const t=je();return Hu(t)||Da(t)}const xD=1e3,DD=10;class _v extends pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PD()&&pD(),this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);hD()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DD):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const MD=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv extends pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mv.type="SESSION";const gv=mv;/**
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
 */function LD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class La{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new La(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await LD(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}La.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ju("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function UD(t){Kt().location.href=t}/**
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
 */function vv(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function BD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $D(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HD(){return vv()?self:null}/**
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
 */const bv="firebaseLocalStorageDb",WD=1,Qo="firebaseLocalStorage",yv="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fa(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function VD(){const t=indexedDB.deleteDatabase(bv);return new Fr(t).toPromise()}function fc(){const t=indexedDB.open(bv,WD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Qo,{keyPath:yv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Qo)?e(s):(s.close(),await VD(),e(await fc()))})})}async function Sh(t,e,n){const s=Fa(t,!0).put({[yv]:e,value:n});return new Fr(s).toPromise()}async function jD(t,e){const n=Fa(t,!1).get(e),s=await new Fr(n).toPromise();return s===void 0?null:s.value}function Rh(t,e){const n=Fa(t,!0).delete(e);return new Fr(n).toPromise()}const KD=800,qD=3;class Ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=La._getInstance(HD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BD(),!this.activeServiceWorker)return;this.sender=new FD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$D()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Sh(e,Yo,"1"),await Rh(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fa(i,!1).getAll();return new Fr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ev.type="LOCAL";const zD=Ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YD(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=jt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",GD().appendChild(s)})}function QD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Dr(3e4,6e4);/**
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
 */function XD(t,e){return e?en(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ku extends Wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JD(t){return hv(t.auth,new Ku(t),t.bypassAuthState)}function ZD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),RD(n,new Ku(t),t.bypassAuthState)}async function eM(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),SD(n,new Ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JD;case"linkViaPopup":case"linkViaRedirect":return eM;case"reauthViaPopup":case"reauthViaRedirect":return ZD;default:Pt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new Dr(2e3,1e4);class Ms extends wv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tM.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM="pendingRedirect",go=new Map;class sM extends wv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const s=await iM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iM(t,e){const n=aM(e),s=oM(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function rM(t,e){go.set(t._key(),e)}function oM(t){return en(t._redirectPersistence)}function aM(t){return mo(nM,t.config.apiKey,t.name)}async function lM(t,e,n=!1){const s=Ma(t),i=XD(s,e),o=await new sM(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=10*60*1e3;class uM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nh(e))}saveEventToCache(e){this.cachedEventUids.add(Nh(e)),this.lastProcessedEventTime=Date.now()}}function Nh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pM=/^https?/;async function _M(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fM(t);for(const n of e)try{if(mM(n))return}catch{}Pt(t,"unauthorized-domain")}function mM(t){const e=dc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!pM.test(n))return!1;if(hM.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const gM=new Dr(3e4,6e4);function kh(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vM(t){return new Promise((e,n)=>{var s,i,r;function o(){kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kh(),n(jt(t,"network-request-failed"))},timeout:gM.get()})}if(!((i=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Kt().gapi)===null||r===void 0)&&r.load)o();else{const a=QD("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},YD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vo=null,e})}let vo=null;function bM(t){return vo=vo||vM(t),vo}/**
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
 */const yM=new Dr(5e3,15e3),EM="__/auth/iframe",wM="emulator/auth/iframe",TM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AM(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,wM):`https://${t.config.authDomain}/${EM}`,s={apiKey:e.apiKey,appName:t.name,v:gi},i=CM.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${mi(s).slice(1)}`}async function IM(t){const e=await bM(t),n=Kt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:AM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TM,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=Kt().setTimeout(()=>{r(o)},yM.get());function l(){Kt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const SM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RM=500,NM=600,kM="_blank",OM="http://localhost";class Oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PM(t,e,n,s=RM,i=NM){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SM),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=sv(c)?kM:n),nv(c)&&(e=e||OM,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(fD(c)&&a!=="_self")return xM(e||"",a),new Oh(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new Oh(d)}function xM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const DM="__/auth/handler",MM="emulator/auth/handler";function Ph(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gi,eventId:i};if(e instanceof dv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Lr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${LM(t)}?${mi(a).slice(1)}`}function LM({config:t}){return t.emulator?Bu(t,MM):`https://${t.authDomain}/${DM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="webStorageSupport";class FM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gv,this._completeRedirectFn=lM,this._overrideRedirectResult=rM}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ph(e,n,s,dc(),i);return PM(e,o,ju())}async _openRedirect(e,n,s,i){return await this._originValidation(e),UD(Ph(e,n,s,dc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await IM(e),s=new uM(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[El];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_M(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||Hu()||Da()}}const UM=FM;var xh="@firebase/auth",Dh="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HM(t){_s(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{q(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cv(t)},u=new mD(a,l,c);return Yx(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Bn("auth-internal",e=>{const n=Ma(e.getProvider("auth").getImmediate());return(s=>new BM(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(xh,Dh,$M(t)),Vt(xh,Dh,"esm2017")}/**
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
 */const WM=5*60,VM=em("authIdTokenMaxAge")||WM;let Mh=null;const jM=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>VM)return;const i=n==null?void 0:n.token;Mh!==i&&(Mh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KM(t=nu()){const e=wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gx(t,{popupRedirectResolver:UM,persistence:[zD,MD,gv]}),s=em("authTokenSyncURL");if(s){const r=jM(s);OD(n,r,()=>r(n.currentUser)),kD(n,o=>r(o))}const i=J_("auth");return i&&gD(n,`http://${i}`),n}HM("Browser");const Cv=Zy(wE);Cv.use(Vx);Cv.mount("#app");const qM={apiKey:"AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",authDomain:"frankportfolio-e3ae3.firebaseapp.com",databaseURL:"https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"frankportfolio-e3ae3",storageBucket:"frankportfolio-e3ae3.appspot.com",messagingSenderId:"483448448603",appId:"1:483448448603:web:d914b32657440240fc017e"},qu=am(qM),Av=IO(qu),zM=UP(qu),GM=kg(Av,"works/"),nL=KM(qu);function YM(t,e,n,s,i,r,o,a){Og(kg(Av,"works/"+i+t),{uid:t,tag:e,route:n,image:s,title:i,comment:r,donedate:o,viewcounts:a})}export{dt as F,GM as W,Er as _,se as a,Ce as b,ln as c,yr as d,Rb as e,uo as f,Ft as g,Ti as h,eL as i,XM as j,ZM as k,gy as l,vp as m,Ci as n,kt as o,Sb as p,nL as q,wp as r,tL as s,QM as t,Vx as u,JM as v,Mi as w};
