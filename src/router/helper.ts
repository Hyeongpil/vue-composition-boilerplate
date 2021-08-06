//https://router.vuejs.org/kr/guide/advanced/lazy-loading.html

export const lazyLoadPage = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    `@/views/${page}.vue`
  );

export const lazyLoadLayout = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    `@/layouts/${page}.vue`
  );

export const preFetchLoadPage = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    /* webpackPrefetch: true */
    `@/views/${page}.vue`
  );
