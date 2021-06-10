<template>
  <generic-item
    :titleLine="title"
    :firstLine="computed_level"
    :secondLine="computed_techs"
  ></generic-item>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import GenericItem from "./GenericItem.vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    level: String,
    techs: Array,
  },
  components: {
    GenericItem,
  },
  setup(props) {
    const { t } = useI18n();
    const computed_level = computed((): string => {
      const levelStr = `${t("cv.skills.level.level")} ${props.level}`;
      return props.level ? levelStr : "";
    });
    const computed_techs = computed((): string => {
      const techsStr = props.techs?.join(", ");
      return props.techs ? `[${techsStr}]` : "";
    });

    return {
      computed_level,
      computed_techs,
    };
  },
});
</script>
