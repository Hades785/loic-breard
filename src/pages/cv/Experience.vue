<template>
  <h2>{{ $t("cv.experience.title") }}</h2>
  <ul>
    <experience-item
      date="2020-02"
      :title="$t('cv.experience.iridessence-demo.title')"
      :location="$t('cv.experience.iridessence-demo.location')"
      :description="$t('cv.experience.iridessence-demo.description')"
      :tools="[$t('tools.unity.unity'), $t('tools.csharp')]"
      :link="'https://ludichat.itch.io/iridessence-ggj20/'"
    ></experience-item>
    <experience-item
      date="2018-07"
      :title="$t('cv.experience.ubinet2.title')"
      :location="$t('cv.experience.ubinet2.location')"
      :description="$t('cv.experience.ubinet2.description')"
      :tools="[
        $t('tools.html5'),
        $t('tools.css3'),
        $t('tools.js-es3'),
        $t('tools.php5'),
        $t('tools.snmp'),
      ]"
    ></experience-item>
    <experience-item
      date="2018-04 — 2018-06"
      :title="$t('cv.experience.ubinet.title')"
      :location="$t('cv.experience.ubinet.location')"
      :description="$t('cv.experience.ubinet.description')"
      :tools="[
        $t('tools.html5'),
        $t('tools.css3'),
        $t('tools.js-es3'),
        $t('tools.php5'),
        $t('tools.python27'),
        $t('tools.snmp'),
      ]"
    ></experience-item>
    <experience-item
      date="2017-12"
      :title="$t('cv.experience.nuit-info.title')"
      :location="$t('cv.experience.nuit-info.location')"
      :description="$t('cv.experience.nuit-info.description')"
      :tools="[$t('tools.html5'), $t('tools.css3'), $t('tools.php5')]"
    ></experience-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExperienceItem from "@/components/cv/ExperienceItem.vue";

export default defineComponent({
  components: {
    ExperienceItem,
  },
});
</script>
