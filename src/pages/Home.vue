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

export default defineComponent({
  setup() {
    const { locale, t } = useI18n();

    const age = (
      new Date(Date.now() - Date.parse("1998-11-09")).getFullYear() -
      new Date(0).getFullYear()
    ).toString();

    const presentation = ref("");

    const refreshPresentation = () => {
      presentation.value = `
${`${t("home.presentation.age")}${t("punctuation.colon")}`.padEnd(10)}${age}
`;
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
