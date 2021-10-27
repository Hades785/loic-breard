<template>
  <h2>{{ $t("cv.education.title") }}</h2>
  <ul>
    <education-item
      date="2019–2021"
      :title="$t('cv.education.aminj.title')"
      :school="$t('cv.education.aminj.school')"
    ></education-item>
    <education-item
      date="2018–2019"
      :title="$t('cv.education.upssitech.title')"
      :school="$t('cv.education.upssitech.school')"
      ranking="2 / 32"
    ></education-item>
    <education-item
      date="2016–2018"
      :title="$t('cv.education.iut.title')"
      :school="$t('cv.education.iut.school')"
      ranking="20 / 72"
    ></education-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationItem from "@/components/cv/EducationItem.vue";

export default defineComponent({
  components: {
    EducationItem,
  },
});
</script>
