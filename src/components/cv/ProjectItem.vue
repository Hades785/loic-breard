<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="_description"
    :secondLine="_tools"
  ></generic-item>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
  setup(props) {
    const _description = computed((): string => {
      const locationStr = props.location ? `${props.location} - ` : "";
      return `${locationStr}${props.description}`;
    });
    const _tools = computed((): string => {
      const toolsStr = props.tools?.join(", ");
      return toolsStr ? `[${toolsStr}]` : "";
    });

    return {
      _description,
      _tools,
    };
  },
});
</script>
