import { createRouter, createWebHistory } from "vue-router";
import routes from "../router/router.js";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
