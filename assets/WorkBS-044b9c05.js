import{j as y,k as T,l as C,W as D,g as o,o as h,c as W,b as e,m as i,v as u,u as a,n as c,q as B,S,s as I,x as F,y as L,z as j}from"./index-1b256044.js";const N={class:"container bg-light pt-5"},q={class:"col-10 mb-3"},z=e("label",{for:"inputTheme",class:"form-label"},"Title",-1),A={class:"col-10 mb-3"},E=e("label",{for:"inputRoute",class:"form-label"},"Route",-1),K={class:"col-10 mb-3"},M=e("label",{for:"inputTag",class:"form-label"},"Tag",-1),G={class:"col-10 mb-3"},H=e("label",{for:"inputComment",class:"form-label"},"Comment",-1),J={class:"col-10 mb-3"},O=e("label",{for:"inputDonedate",class:"form-label"},"Donedate",-1),P={class:"col-10 mb-3"},Q=e("label",{for:"inputViewcount",class:"form-label"},"Viewcounts",-1),X={class:"col-10 mb-3"},Y=e("label",{for:"file-input",class:"form-label"},"選擇封面",-1),Z={key:0,class:"mb-3"},$=["src"],ee=["disabled"],le={class:"col-10 mb-3"},te=["disabled"],oe={__name:"WorkWallBS",setup(R){const k=y(S,"workCovers"),g=T(C(D,"works")).key;let r=o(""),d=o(""),v=o(""),n=o(""),m=o(""),p=o(""),f=o("");const s=o(null),b=o(null),w=o(null);function V(_){s.value=_.target.files[0],console.log(s.value);const t=new FileReader;t.readAsDataURL(s.value),t.onload=()=>{b.value=t.result}}async function x(){const _=y(k,s.value.name);await I(_,s.value),v=await F(_),s.value=null,b.value=null,w.value="",alert("文件上传成功！下载URL: "+v)}async function U(){L(g,r.value,"/Work/"+d.value,v,n.value,m.value,p.value,f.value)}return(_,t)=>(h(),W("section",N,[e("form",{onSubmit:U,class:"row justify-content-center"},[e("div",q,[z,i(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>c(n)?n.value=l:n=l),class:"form-control",id:"inputTheme",placeholder:"請輸入主題"},null,512),[[u,a(n)]])]),e("div",A,[E,i(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>c(d)?d.value=l:d=l),class:"form-control",id:"inputRoute",placeholder:"請輸入路徑"},null,512),[[u,a(d)]])]),e("div",K,[M,i(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>c(r)?r.value=l:r=l),class:"form-control",id:"inputTag",placeholder:"請輸入 Tag"},null,512),[[u,a(r)]])]),e("div",G,[H,i(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>c(m)?m.value=l:m=l),class:"form-control",id:"inputComment",placeholder:"請輸入 Comment"},null,512),[[u,a(m)]])]),e("div",J,[O,i(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=l=>c(p)?p.value=l:p=l),class:"form-control",id:"inputDonedate",placeholder:"請輸入日期"},null,512),[[u,a(p)]])]),e("div",P,[Q,i(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=l=>c(f)?f.value=l:f=l),class:"form-control",id:"inputViewcount",placeholder:"請輸入觀看數"},null,512),[[u,a(f)]])]),e("div",X,[Y,e("input",{type:"file",class:"form-control",id:"file-input",ref_key:"fileInput",ref:w,onChange:V,accept:"image/*"},null,544),b.value?(h(),W("div",Z,[e("img",{src:b.value,class:"img-fluid",alt:"Selected Image"},null,8,$)])):B("",!0),e("button",{type:"button",class:"btn btn-primary mt-3",onClick:x,disabled:!s.value},"上傳圖片",8,ee)]),e("div",le,[e("button",{type:"submit",disabled:!a(n),class:"btn btn-primary mb-3"},"確認送出",8,te)])],32)]))}},ae={__name:"WorkBS",setup(R){return(k,g)=>(h(),j(oe))}};export{ae as default};
