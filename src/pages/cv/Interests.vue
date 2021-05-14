<template>
  <h2>{{ $t("interests.title") }}</h2>
  <ul>
    <interests-item
      :title="$t('interets.japan.title')"
      :description="$t('interests.japan.description')"
    ></interests-item>
    <interests-item
      :title="$t('interets.games.title')"
      :description="$t('interests.games.description')"
    ></interests-item>
    <interests-item
      :title="$t('interets.music.title')"
      :description="$t('interests.music.description')"
    ></interests-item>
    <interests-item
      :title="$t('interets.sys-admin.title')"
      :description="$t('interests.sys-admin.description')"
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
