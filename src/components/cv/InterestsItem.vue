<template>
  <generic-item :titleLine="title" :firstLine="description"></generic-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  components: {
    GenericItem,
  },
});
</script>
