<template>
  <h2>{{ $t("cv.about.title") }}</h2>
  <p>{{ $t("cv.about.paragraph") }}</p>
  <div id="cv-contacts">
    <div>
      {{ $t("cv.about.email") }}
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
    <div>
      {{ $t("cv.about.portfolio") }}
      <a :href="itch">{{ itch }}</a>
    </div>
    <div>
      {{ $t("cv.about.cv") }}
      <a :href="cv">{{ cv }}</a>
    </div>
    <div>
      {{ $t("cv.about.linkedin") }}
      <a :href="linkedin">{{ linkedin }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const email = "loic.breard@outlook.com";
    const itch = "https://hades785.itch.io/";
    const cv = "https://loic-breard.ovh/cv.pdf";
    const linkedin = "https://linkedin.com/in/loïc-bréard-69978b157/";

    return {
      email,
      itch,
      cv,
      linkedin,
    };
  },
});
</script>

<style lang="stylus">
#cv-contacts
  line-height 1.6em
</style>
