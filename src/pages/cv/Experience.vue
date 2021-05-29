<template>
  <h2>{{ $t("experience.title") }}</h2>
  <ul>
    <experience-item
      date="2020"
      :title="$t('experience.iridessence-demo.title')"
      :location="$t('experience.iridessence-demo.location')"
      :description="$t('experience.iridessence-demo.description')"
      :tools="[$t('tools.unity.unity'), $t('tools.csharp')]"
    ></experience-item>
    <experience-item
      date="2018"
      :title="$t('experience.ubinet2.title')"
      :location="$t('experience.ubinet2.location')"
      :description="$t('experience.ubinet2.description')"
      :tools="[
        $t('tools.html5'),
        $t('tools.css3'),
        $t('tools.js-es3'),
        $t('tools.php5'),
        $t('tools.snmp'),
      ]"
    ></experience-item>
    <experience-item
      date="2018"
      :title="$t('experience.ubinet.title')"
      :location="$t('experience.ubinet.location')"
      :description="$t('experience.ubinet.description')"
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
      date="2017"
      :title="$t('experience.nuit-info.title')"
      :location="$t('experience.nuit-info.location')"
      :description="$t('experience.nuit-info.description')"
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
