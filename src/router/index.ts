import Vue from "vue";
import VueRouter from "vue-router";

import { routes } from "@/router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

// 라우팅 이전 조치
router.beforeEach(async (to, from, next) => {
  return next();
});

// 라우팅 이후 조치
router.afterEach(() => {
  //
});

export default router;
