import{g as i,m as r,o as u,c as m,a as t,h as d,n,d as p,s as v,q as b,u as f}from"./index-e27a894c.js";const g="/MyPortfolio/assets/Backdoor-9e43b37c.svg",_={class:"container-fluid bg-dark pt-5 mt-5"},w=p('<div class="row text-bg-dark justify-content-center"><div class="col-10 col-md-3"><img src="'+g+'" alt=""></div><div class="col-10 col-md-5 pt-5"><div class="display-5 fw-semibold mb-3">謝謝你認真玩我的網站！ </div><div class="display-5 fw-semibold">這是展示後台的入口</div><div class="display-5 fw-semibold mb-3">請回到上一頁～</div><div class="text-danger">拜託不要破壞它 （┬＿┬）</div></div></div>',1),h={class:"col-10 col-md-8 pb-5"},y=t("label",{for:"inputEmail",class:"form-label"},"Email",-1),P=t("label",{for:"inputPassword",class:"form-label"},"Password",-1),E={class:"d-grid gap-2"},k=["disabled"],M={__name:"Login",setup(x){const l=i(""),a=i("");async function c(){await v(b,l.value,a.value).then(o=>{const s=o.user;console.log("user = "+s),f.push("/MyPortfolio/backstage/workwall")}).catch(o=>{const s=o.code,e=o.message;console.log(s),console.log(e)})}return r(()=>{const o=document.getElementById("userPassword");console.log(o),o.addEventListener("submit",function(s){s.preventDefault()})}),(o,s)=>(u(),m("section",_,[w,t("form",{onSubmit:c,class:"row justify-content-center",id:"userPassword"},[t("div",h,[y,d(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),class:"form-control",id:"inputEmail",placeholder:"請輸入使用者帳號"},null,512),[[n,l.value]]),P,d(t("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),class:"form-control",id:"inputPassword",placeholder:"請輸入密碼"},null,512),[[n,a.value]]),t("div",E,[t("button",{type:"submit",disabled:!a.value,class:"btn btn-outline-light mt-5 mb-3 ms-auto"},"Login",8,k)])])],32)]))}};export{M as default};
