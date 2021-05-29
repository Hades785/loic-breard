<template>
  <generic-item
    :titleLine="title"
    :firstLine="_level"
    :secondLine="_techs"
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
    const i18n = useI18n();
    const _level = computed((): string => {
      const levelStr = `${i18n.t("skills.level.level")} ${props.level}`;
      return props.level ? levelStr : "";
    });
    const _techs = computed((): string => {
      const techsStr = props.techs?.join(", ");
      return props.techs ? `[${techsStr}]` : "";
    });

    return {
      _level,
      _techs,
    };
  },
});
</script>
