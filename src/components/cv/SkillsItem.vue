<template>
  <generic-item
    :titleLine="title"
    :firstLine="_level"
    :secondLine="_techs"
  ></generic-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    level: String,
    techs: Array,
  },
  components: {
    GenericItem,
  },
  computed: {
    _level(): string {
      const levelStr = `${this.$t("skills.level.level")} ${this.level}`;
      return this.level ? levelStr : "";
    },
    _techs(): string {
      const techsStr = this.techs?.join(", ");
      return this.techs ? `[${techsStr}]` : "";
    },
  },
});
</script>
