<template>
  <template v-if="ranking">
    <generic-item
      :date="date"
      :titleLine="title"
      :firstLine="`${school} [${ranking}]`"
    ></generic-item>
  </template>
  <template v-else>
    <generic-item
      :date="date"
      :titleLine="title"
      :firstLine="school"
    ></generic-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    date: { type: String, required: true },
    title: { type: String, required: true },
    school: { type: String, required: true },
    ranking: String,
  },
  components: {
    GenericItem,
  },
});
</script>
