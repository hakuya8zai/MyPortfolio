import { createRouter, createWebHistory } from "vue-router";
import routes from "../router/router.js";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
