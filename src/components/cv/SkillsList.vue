<template>
  <li :class="collapsed">
    <strong :onclick="toggle">{{ title }}</strong>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
  },
  data() {
    let show = false;
    return {
      show,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
  computed: {
    collapsed(): string {
      return this.show ? "" : "collapsed";
    },
  },
});
</script>

<style lang="stylus" scoped>
li
  color var(--text-colour)
  list-style "\2014\a0"

  > strong
    cursor pointer

  + li
    padding-top .75em

  li
    padding-top .5em

li.collapsed
  list-style "\203a\a0"

  > ul
    display none

li:hover
  color var(--accent-colour)
</style>
