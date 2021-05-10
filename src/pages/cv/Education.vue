<template>
  <h2>{{ $t("education.title") }}</h2>
  <ul>
    <education-item
      date="2019-202x"
      :title="$t('education.3.title')"
      :school="$t('education.3.school')"
    ></education-item>
    <education-item
      date="2018-2019"
      :title="$t('education.2.title')"
      :school="$t('education.2.school')"
      ranking="2 / 32"
    ></education-item>
    <education-item
      date="2016-2018"
      :title="$t('education.1.title')"
      :school="$t('education.1.school')"
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
