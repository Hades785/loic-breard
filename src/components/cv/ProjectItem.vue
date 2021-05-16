<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="_description"
    :secondLine="_tools"
  ></generic-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    date: String,
    title: { type: String, required: true },
    location: String,
    description: { type: String, required: true },
    tools: Array,
  },
  components: {
    GenericItem,
  },
  computed: {
    _description(): string {
      const locationStr = this.location ? `${this.location} - ` : "";
      return `${locationStr}${this.description}`;
    },
    _tools(): string {
      const toolsStr = this.tools?.join(", ");
      return toolsStr ? `[${toolsStr}]` : "";
    },
  },
});
</script>
