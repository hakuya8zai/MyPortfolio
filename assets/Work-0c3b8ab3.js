import{_ as f,g as k,o as _,c as p,b as e,h as r,v as u,t as m,p as w,f as x,i as M,F as y,j as V,W as A,k as W,d as v,w as D,l as h,r as I}from"./index-7ab067db.js";const c=i=>(w("data-v-4e2ae736"),i=i(),x(),i),L={class:"bg-black container-fluid pt-5"},S={class:"row justify-content-center"},F={class:"col-12 col-md-10 overflow-scroll"},N={class:"btn-group",role:"group"},R=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"AllTag"},"All",-1)),B=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),P=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"LatestTag"},"Latest",-1)),Y=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),E=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"RecommendedTag"},"Recommended",-1)),X=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),H=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"PMTag"},"PM",-1)),O=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),q=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"FrontendTag"},"Frontend",-1)),z=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),G=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"UiuxTag"},"UIUX",-1)),J=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),K=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"CommercialTag"},"Commercial",-1)),Q=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),Z=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"WebTag"},"Web",-1)),j=c(()=>e("p",{class:"text-white p-1 m-0"},"/",-1)),ee=c(()=>e("label",{class:"btn tags-btn btn-outline-dark",for:"AppTag"},"App",-1)),te=c(()=>e("div",{class:"col-12 col-md-10"},[e("div",{class:"divider mb-4 mt-0"})],-1)),ae={class:"sort-title row justify-content-center"},oe={class:"col-12 col-md-10"},se={class:"text-white fs-3"},le={__name:"Tags",setup(i){const a=k("All");return(g,l)=>(_(),p("section",L,[e("div",S,[e("div",F,[e("div",N,[r(e("input",{value:"All",type:"radio",class:"btn-check",name:"tagradio",id:"AllTag",autocomplete:"off","onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),checked:""},null,512),[[u,a.value]]),R,B,r(e("input",{value:"Latest",type:"radio",class:"btn-check",name:"tagradio",id:"LatestTag",autocomplete:"off","onUpdate:modelValue":l[1]||(l[1]=n=>a.value=n)},null,512),[[u,a.value]]),P,Y,r(e("input",{value:"Recommended",type:"radio",class:"btn-check",name:"tagradio",id:"RecommendedTag",autocomplete:"off","onUpdate:modelValue":l[2]||(l[2]=n=>a.value=n)},null,512),[[u,a.value]]),E,X,r(e("input",{value:"PM",type:"radio",class:"btn-check",name:"tagradio",id:"PMTag",autocomplete:"off","onUpdate:modelValue":l[3]||(l[3]=n=>a.value=n)},null,512),[[u,a.value]]),H,O,r(e("input",{value:"Frontend",type:"radio",class:"btn-check",name:"tagradio",id:"FrontendTag",autocomplete:"off","onUpdate:modelValue":l[4]||(l[4]=n=>a.value=n)},null,512),[[u,a.value]]),q,z,r(e("input",{value:"UIUX",type:"radio",class:"btn-check",name:"tagradio",id:"UiuxTag",autocomplete:"off","onUpdate:modelValue":l[5]||(l[5]=n=>a.value=n)},null,512),[[u,a.value]]),G,J,r(e("input",{value:"Commercial",type:"radio",class:"btn-check",name:"tagradio",id:"CommercialTag",autocomplete:"off","onUpdate:modelValue":l[6]||(l[6]=n=>a.value=n)},null,512),[[u,a.value]]),K,Q,r(e("input",{value:"Web",type:"radio",class:"btn-check",name:"tagradio",id:"WebTag",autocomplete:"off","onUpdate:modelValue":l[7]||(l[7]=n=>a.value=n)},null,512),[[u,a.value]]),Z,j,r(e("input",{value:"App",type:"radio",class:"btn-check",name:"tagradio",id:"AppTag",autocomplete:"off","onUpdate:modelValue":l[8]||(l[8]=n=>a.value=n)},null,512),[[u,a.value]]),ee])]),te]),e("div",ae,[e("div",oe,[e("p",se,m(a.value),1)])])]))}},ne=f(le,[["__scopeId","data-v-4e2ae736"]]);const b=i=>(w("data-v-cba8ae13"),i=i(),x(),i),de={class:"bg-black container-fluid pt-0",style:{"min-height":"500px"}},ce={class:"project-wall row justify-content-center"},ie={class:"col-12 col-md-10"},re={class:"row"},ue={class:"project-card col-lg-4 col-md-6 col-12"},_e={class:"card text-white bg-black p-0 mb-3"},pe=["src"],me={class:"card-text m-0"},ge={class:"card-text m-0"},he={class:"text-muted"},ve={class:"card-text mt-0"},be={class:"text-muted"},fe={key:0},ke={key:1},we={key:2},xe={key:3},ye=b(()=>e("span",null," ago",-1)),$e=b(()=>e("span",null,"・",-1)),Te=b(()=>e("span",null," views",-1)),Ue={__name:"Carousel",setup(i){const a=k([]);console.log(a);const g=document.getElementsByName("tagradio");for(let s=0;s<g.length;s++)g[s].addEventListener("click",()=>{let o=g[s].value;console.log(o),T(o)});l();function l(){M(A).then(s=>{if(s.exists()){const o=s.val();$(o)}else console.log("No data available")}).catch(s=>{console.error(s)})}function n(s){let o=new Date(s.donedate).getMonth(),d=new Date(s.donedate).getYear(),t=new Date().getMonth(),U=new Date().getYear(),C=t-o+(U-d)*12;s.donedate=C}function $(s){const o=Object.keys(s).map(t=>s[t]);for(let t=0;t<o.length;t++)n(o[t]);let d=o.length;for(;d>1;){d--;for(let t=0;t<d;t++)o[t].donedate>o[t+1].donedate&&([o[t],o[t+1]]=[o[t+1],o[t]])}for(let t=0;t<o.length;t++)o[t].screened=!0;a.value=o}function T(s){for(let o=0;o<a.value.length;o++)if(s!=null)if(s=="Latest"||s=="All"){let d=0;for(let t=0;t<a.value.length;t++)s=="Latest"?d<4?(a.value[t].screened=!0,d++):a.value[t].screened=!1:a.value[t].screened=!0}else for(let d=0;d<a.value[o].tag.length;d++){if(a.value[o].tag[d]==s){a.value[o].screened=!0;break}a.value[o].screened=!1}else for(let d=0;d<a.value.length;d++)a.value[d].screened=!0}return(s,o)=>{const d=I("router-link");return _(),p("section",de,[e("div",ce,[e("div",ie,[e("div",re,[(_(!0),p(y,null,V(a.value,t=>r((_(),p("div",ue,[v(d,{to:t.route},{default:D(()=>[e("div",_e,[e("img",{src:t.image,class:"card-img-top mb-3",alt:"Click Here"},null,8,pe),e("h5",me,m(t.title),1),e("p",ge,[e("small",he,[e("span",null,m(t.comment),1)])]),e("p",ve,[e("small",be,[Math.floor(t.donedate/12)?(_(),p("span",fe,m(Math.floor(t.donedate/12)),1)):h("",!0),Math.floor(t.donedate/12)?(_(),p("span",ke," year ")):h("",!0),t.donedate%12?(_(),p("span",we,m(t.donedate%12),1)):h("",!0),t.donedate%12?(_(),p("span",xe," months ")):h("",!0),ye,$e,e("span",null,m(t.viewcounts),1),Te])])])]),_:2},1032,["to"])],512)),[[W,t.screened]])),256))])])])])}}},Ce=f(Ue,[["__scopeId","data-v-cba8ae13"]]),Ve={__name:"Work",setup(i){return(a,g)=>(_(),p(y,null,[v(ne),v(Ce)],64))}};export{Ve as default};
