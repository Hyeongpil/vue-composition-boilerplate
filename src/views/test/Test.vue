<template>
  <div>{{ people }}</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "@vue/composition-api";

import { fetchPeople } from "@/apis/service/peopleService";
import { getDefaultPeople } from "@/models/people";
export default defineComponent({
  setup() {
    let people = ref(getDefaultPeople());

    onBeforeMount(async () => {
      people.value = await fetchPeople(1);
    });

    return {
      people,
    };
  },
});
</script>
