<template>
  <h2>{{ $t("home.welcome") }}</h2>
  <p>
    {{ $t("home.message") }}
  </p>
  <pre>{{ uwufetch }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const uwufetch = `
        /\\        OS          Arch Linux
       /  \\       KERNEL      Linux 5.10.32-1-MANJARO x86_64
      /\\   \\      CPU         AMD Ryzen 5 PRO 4650U with Radeon Graphics
     / > w <\\     GPU         Renoir
    /   __   \\    RAM         15290 MB
   / __|  |__-\\   SHELL       /bin/zsh
  /_-''    ''-_\\  `;

    return {
      uwufetch,
    };
  },
});
</script>

<style lang="stylus" scoped>
*
  text-align left
</style>
