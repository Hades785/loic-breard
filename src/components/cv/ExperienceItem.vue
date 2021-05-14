<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="`${location} - ${description}`"
    :secondLine="_tools"
  ></generic-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    date: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    tools: Array,
  },
  components: {
    GenericItem,
  },
  computed: {
    _tools(): string {
      const toolsStr = this.tools?.join(", ");
      return toolsStr ? `[${toolsStr}]` : "";
    },
  },
});
</script>
