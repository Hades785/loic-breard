<template>
  <h2>{{ $t("home.welcome") }}</h2>
  <p>
    {{ $t("home.message") }}
  </p>
  <pre>{{ presentation }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { trimIndent } from "@/trimIndent";

export default defineComponent({
  setup() {
    const { locale, t } = useI18n();

    const age = (
      new Date(Date.now() - Date.parse("1998-11-09")).getFullYear() -
      new Date(0).getFullYear()
    ).toString();

    const presentation = ref("");

    const refreshPresentation = () => {
      presentation.value = trimIndent(`
        ${`${t("home.presentation.age")}
        ${t("punctuation.colon")}`.padEnd(10)}
        ${age}

        ${`${t("home.presentation.os")}
        ${t("punctuation.colon")}`.padEnd(10)}
        ${t("tools.os.linux.arch")}
        ${t("punctuation.comma")}
        ${t("tools.os.windows")}
        ${t("punctuation.comma")}
        ${t("tools.os.linux.nixos")}
        ${t("punctuation.comma")}
        ${t("tools.os.linux.ubuntu")}
      `).replace(/\n(?!\n)/g, "");
    };

    refreshPresentation();
    watch(locale, refreshPresentation);

    return {
      presentation,
    };
  },
});
</script>

<style lang="stylus" scoped>
*
  text-align left
</style>
