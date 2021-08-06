import { RouteConfig } from "vue-router";

import { lazyLoadLayout, lazyLoadPage } from "@/router/helper";

export const TestRouter = {
  TestPage: "TestPage",
} as const;

export const testRouter: RouteConfig = {
  path: "/test",
  component: () => lazyLoadLayout("Default"),
  children: [
    {
      path: "",
      name: TestRouter.TestPage,
      component: () => lazyLoadPage("test/Test"),
    },
  ],
};
