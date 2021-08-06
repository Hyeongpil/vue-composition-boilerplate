import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import store from "@/store/index";

@Module({ dynamic: true, store, name: "test", namespaced: true })
class TestStore extends VuexModule {
  test = 1;
  abc = "abc";

  @Mutation
  initTest() {
    this.test = 0;
    this.abc = "";
  }

  @Mutation
  setTest(test: number) {
    this.test = test;
  }
}

export const testStore = getModule(TestStore, store);
