import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { lazyLoadPage, preFetchLoadPage } from "@/router/helper";
import { testRouter } from "@/router/modules";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  testRouter,
  {
    path: "/",
    name: "MainPage",
    component: () => preFetchLoadPage("Main"),
  },
  {
    path: "*",
    component: () => lazyLoadPage("errors/NotFound"),
  },
];
