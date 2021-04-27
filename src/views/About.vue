<template>
  <div class="about">
    <h1>This is an about page</h1>
    <select v-model="$i18n.locale">
      <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <option value="fr-FR">Français</option>
      <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <option value="en-GB">English</option>
      <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <option value="jp-JP">日本語</option>
    </select>

    <hello></hello>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import helloI18n from "@/components/HelloI18n.vue";

@Options({
  name: "About",
  components: {
    hello: helloI18n,
  },
})
export default class About extends Vue {}
</script>
