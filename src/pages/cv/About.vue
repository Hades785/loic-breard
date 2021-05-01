<template>
  <h2>{{ $t("about.title") }}</h2>
  <p>{{ $t("about.paragraph") }}</p>
  <div>
    {{ $t("about.email") }}
    <a :href="`mailto:${email}`">{{ email }}</a>
  </div>
  <div>
    {{ $t("about.portfolio") }}
    <a :href="itch">{{ itch }}</a>
  </div>
  <div>
    {{ $t("about.cv") }}
    <a :href="cv">{{ cv }}</a>
  </div>
  <div>
    {{ $t("about.linkedin") }}
    <a :href="linkedin">{{ linkedin }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
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
