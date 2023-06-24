import Home from "../views/Home.vue";
import WorkBS from "../views/WorkBS.vue";

const routes = [
  {
    path: "/MyPortfolio",
    name: "Home",
    component: Home, //這是靜態載入，一開始就抓，點了以後不會再用網路，建議大的用這個
  },
  {
    path: "/MyPortfolio/About",
    name: "About",
    component: () => import("../views/About.vue"), //這是動態載入，點了才抓，建議小的用這個
  },
  {
    path: "/MyPortfolio/Resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"), //這是動態載入，點了才抓，建議小的用這個
  },
  {
    path: "/MyPortfolio/Work",
    name: "Work",
    component: () => import("../views/Work.vue"), //這是動態載入，點了才抓，建議小的用這個
  },
  {
    path: "/:domain(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/MyPortfolio/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/MyPortfolio/backstage/workwall",
    name: "workwall",
    component: WorkBS,
  },
  {
    path: "/MyPortfolio/Work/TravelMaker",
    name: "TravelMaker",
    component: () => import("../views/TravelMaker.vue"),
  },
  {
    path: "/MyPortfolio/Work/PersonalityQuiz",
    name: "PersonalityQuiz",
    redirect: () => {
      window.open(
        "https://cookie-place-537.notion.site/Junyi-f89612e0e20b4feca5a710e2fd46f147",
        "_blank"
      );
    },
  },
  {
    path: "/MyPortfolio/Work/InshoneDesign",
    name: "InshoneDesign",
    redirect: () => {
      window.open(
        "https://cookie-place-537.notion.site/7ea75a0f43c64179b934cc40b70b4656",
        "_blank"
      );
    },
  },
  {
    path: "/MyPortfolio/Work/LilyChen",
    name: "LilyChen",
    redirect: () => {
      window.open(
        "https://cookie-place-537.notion.site/Lily-Chen-Website-4af5b9ec108d4a1888da1803646fc3b7",
        "_blank"
      );
    },
  },
  {
    path: "/MyPortfolio/Work/AwardHunter",
    name: "AwardHunter",
    redirect: () => {
      window.open(
        "https://cookie-place-537.notion.site/App-Redesign-25de4cd8b9f445628d217de9fd78e5a9",
        "_blank"
      );
    },
  },
  {
    path: "/MyPortfolio/Work/BinaryCube",
    name: "BinaryCube",
    redirect: () => {
      window.open(
        "https://play.google.com/store/apps/developer?id=Forced_Dev",
        "_blank"
      );
    },
  },
];

export default routes;
