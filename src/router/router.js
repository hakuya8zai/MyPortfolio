import App from "../App.vue";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/MyPortfolio",
    redirect: "/Home",
    component: () => import("../views/Home.vue"), //這是靜態載入，一開始就抓，點了以後不會再用網路，建議大的用這個
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"), //這是靜態載入，一開始就抓，點了以後不會再用網路，建議大的用這個
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"), //這是動態載入，點了才抓，建議小的用這個
  },
  {
    path: "/:domain(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

export default routes;
