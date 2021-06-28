<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="computed_description"
    :secondLine="computed_tools"
    :link="link"
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
    link: String,
  },
  components: {
    GenericItem,
  },
  setup(props) {
    const computed_description = computed((): string => {
      const locationStr = props.location ? `${props.location} - ` : "";
      return `${locationStr}${props.description}`;
    });
    const computed_tools = computed((): string => {
      const toolsStr = props.tools?.join(", ");
      return toolsStr ? `[${toolsStr}]` : "";
    });

    return {
      computed_description,
      computed_tools,
    };
  },
});
</script>
