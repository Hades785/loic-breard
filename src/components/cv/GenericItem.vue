<template>
  <li>
    <strong>
      <span v-if="date">{{ date }}</span>
      <span>{{ titleLine }}</span>
    </strong>
    <small v-if="firstLine || secondLine">
      <span v-if="firstLine">{{ firstLine }}</span>
      <span v-if="secondLine">{{ secondLine }}</span>
    </small>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GenericItem",
  props: {
    date: String,
    titleLine: { type: String, required: true },
    firstLine: String,
    secondLine: String,
  },
});
</script>

<style lang="stylus" scoped>
li
  color var(--text-colour)
  list-style "\2014\a0"

  + li
    padding-top .75em

  strong
    display block

    span
      padding-right 1em

  small
    display block
    padding-left 1em

    span
      display block

li:hover
  color var(--accent-colour)
</style>
