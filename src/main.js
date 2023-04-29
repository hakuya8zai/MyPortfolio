import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");

// 下面是 firebase 的設定和功能

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDW1RF6zB2qXmWNIT1Tfgu38fveb8lAOiA",
  authDomain: "frankportfolio-e3ae3.firebaseapp.com",
  databaseURL:
    "https://frankportfolio-e3ae3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frankportfolio-e3ae3",
  storageBucket: "frankportfolio-e3ae3.appspot.com",
  messagingSenderId: "483448448603",
  appId: "1:483448448603:web:d914b32657440240fc017e",
};
const firebaseApp = initializeApp(firebaseConfig);
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { getStorage } from "firebase/storage";

const RtDb = getDatabase(firebaseApp); //從初始化的 app 再初始化 db
const Storage = getStorage(firebaseApp); //初始化 storage
const WorkRef = ref(RtDb, "works/");

function addWorkData(
  new_id,
  new_tag,
  new_route,
  new_image,
  new_title,
  new_comment,
  new_donedate,
  new_viewcounts
) {
  set(ref(RtDb, "works/" + new_title + new_id), {
    uid: new_id,
    tag: new_tag,
    route: new_route,
    image: new_image,
    title: new_title,
    comment: new_comment,
    donedate: new_donedate,
    viewcounts: new_viewcounts,
  });
}

export { addWorkData, WorkRef, Storage };
