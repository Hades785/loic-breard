<script lang="ts">
import { defineComponent } from "vue";
import ProjectItem from "./ProjectItem.vue";

export default defineComponent({
  extends: ProjectItem,
  props: {
    location: { type: String, required: true },
  },
  setup(props, context) {
    return ProjectItem.setup?.(props, context);
  },
});
</script>
