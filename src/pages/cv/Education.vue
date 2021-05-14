<template>
  <h2>{{ $t("education.title") }}</h2>
  <ul>
    <education-item
      date="2019-202x"
      :title="$t('education.aminj.title')"
      :school="$t('education.aminj.school')"
    ></education-item>
    <education-item
      date="2018-2019"
      :title="$t('education.upssitech.title')"
      :school="$t('education.upssitech.school')"
      ranking="2 / 32"
    ></education-item>
    <education-item
      date="2016-2018"
      :title="$t('education.iut.title')"
      :school="$t('education.iut.school')"
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
