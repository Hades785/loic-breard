<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="computed_school"
  ></generic-item>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
  setup(props) {
    const computed_school = computed((): string => {
      return props.ranking
        ? `${props.school} [${props.ranking}]`
        : props.school;
    });

    return {
      computed_school,
    };
  },
});
</script>
