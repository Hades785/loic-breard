<template>
  <h2>{{ $t("cv.interests.title") }}</h2>
  <ul>
    <interests-item
      :title="$t('cv.interests.japan.title')"
      :description="$t('cv.interests.japan.description')"
    ></interests-item>
    <interests-item
      :title="$t('cv.interests.games.title')"
      :description="$t('cv.interests.games.description')"
    ></interests-item>
    <interests-item
      :title="$t('cv.interests.music.title')"
      :description="$t('cv.interests.music.description')"
    ></interests-item>
    <interests-item
      :title="$t('cv.interests.sys-admin.title')"
      :description="$t('cv.interests.sys-admin.description')"
    ></interests-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InterestsItem from "@/components/cv/InterestsItem.vue";

export default defineComponent({
  components: {
    InterestsItem,
  },
});
</script>
