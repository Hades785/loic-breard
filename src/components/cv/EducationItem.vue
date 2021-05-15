<template>
  <generic-item
    :date="date"
    :titleLine="title"
    :firstLine="_school"
  ></generic-item>
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
  computed: {
    _school(): string {
      return this.ranking ? `${this.school} [${this.ranking}]` : this.school;
    },
  },
});
</script>
