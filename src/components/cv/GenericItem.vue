<template>
  <li>
    <strong>
      <span v-if="date">{{ date }}</span>
      <span>{{ titleLine }}</span>
    </strong>
    <small v-if="firstLine || secondLine">
      <span v-if="firstLine">{{ firstLine }}</span>
      <span v-if="secondLine">{{ secondLine }}</span>
      <span v-if="link">
        <link-icon></link-icon>
        <a :href="link">{{ link }}</a>
      </span>
    </small>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkIcon from "vue-ionicons/dist/md-link.vue";

export default defineComponent({
  name: "GenericItem",
  props: {
    date: String,
    titleLine: { type: String, required: true },
    firstLine: String,
    secondLine: String,
    link: String,
  },
  components: {
    "link-icon": LinkIcon,
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

  .ion
    fill var(--accent-colour)

.ion
  display inline
  padding-right .5em
</style>
