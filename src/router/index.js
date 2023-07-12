import { async } from "@firebase/util";
import { nextTick, onMounted } from "vue";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "../router/router.js";

const router = createRouter({
  history: createWebHistory(),
  base: "/MyPortfolio/",
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // 在切換路由前，顯示 Loading 畫面
  showLoading();

  // 延遲執行下一步，以確保 Loading 畫面正確顯示
  setTimeout(next, 400);
});

router.afterEach(async (to, from, failure) => {
  // 使用 Vue 的 nextTick 方法等待 DOM 更新循環完成
  // 在下一個 DOM 更新循環中執行相應的操作
  if (!failure) {
    await nextTick();
    console.log("ticked");
    checkImagesLoaded();
  }
});

function showLoading() {
  const loadingOverlay = document.querySelector(".loading-container");
  loadingOverlay.classList.remove("hideLoad");
  loadingOverlay.classList.remove("fadeOut");
}

function hideLoading() {
  console.log("hide");
  const loadingOverlay = document.querySelector(".loading-container");
  loadingOverlay.classList.add("fadeOut");
  setTimeout(() => {
    loadingOverlay.classList.add("hideLoad");
  }, 400); //要等 fadeOut 跑完才移除 loading layer，至少 0.4 秒
}

function checkImagesLoaded() {
  const Images = document.querySelectorAll("img");
  const AllImagePromise = [];
  for (const Image of Images) {
    const ImgPromise = new Promise((resolve) => {
      if (Image.complete) {
        // 圖片已載入完成
        resolve();
      } else {
        // 監聽圖片載入完成事件
        Image.addEventListener("load", resolve);
        // 監聽圖片載入失敗事件
        Image.addEventListener("error", resolve);
      }
    });
    AllImagePromise.push(ImgPromise);
  }
  Promise.all(AllImagePromise)
    .then(() => {
      console.log("All images loaded");
      // 所有圖片已載入完成，可以執行需要的操作
      hideLoading();
    })
    .catch((error) => {
      console.error("Error loading images", error);
      // 圖片載入失敗或發生錯誤，也可以執行需要的操作
      hideLoading();
    });
}

export default router;
