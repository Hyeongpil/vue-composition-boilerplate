<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>
