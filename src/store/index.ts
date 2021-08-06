import Vue from "vue";
import Vuex, { createLogger } from "vuex";

Vue.use(Vuex);

const noProd = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  plugins: noProd ? [createLogger({})] : [],
  strict: noProd,
});
