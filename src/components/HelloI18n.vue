<template>
  <p>{{ $t("hello") }}</p>
  <p>Boop?</p>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "HelloI18n",
})
export default class HelloI18n extends Vue {}
</script>
