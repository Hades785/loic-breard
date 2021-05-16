<template>
  <h2>{{ $t("projects.title") }}</h2>
  <ul>
    <project-item
      date="2021-2xxx"
      :title="$t('projects.website-vue.title')"
      :description="$t('projects.website-vue.description')"
      :tools="[
        $t('tools.vue3'),
        $t('tools.html5'),
        $t('tools.css-stylus'),
        $t('tools.ts'),
      ]"
    ></project-item>
    <project-item
      date="2020"
      :title="$t('projects.aminj-hololens.title')"
      :location="$t('education.aminj.school')"
      :description="$t('projects.aminj-hololens.description')"
      :tools="[
        $t('tools.hololens2'),
        $t('tools.mrtk'),
        $t('tools.unity'),
        $t('tools.csharp'),
      ]"
    ></project-item>
    <project-item
      date="2020"
      :title="$t('projects.aminj-nsggp.title')"
      :location="$t('education.aminj.school')"
      :description="$t('projects.aminj-nsggp.description')"
      :tools="[$t('tools.phaser'), $t('tools.electron'), $t('tools.js-es6')]"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('projects.aminj-cinema.title')"
      :location="$t('education.aminj.school')"
      :description="$t('projects.aminj-cinema.description')"
      :tools="[$t('tools.scorm'), $t('tools.unity'), $t('tools.csharp')]"
    ></project-item>
    <project-item
      date="2019-2020"
      :title="$t('projects.aminj-tumble.title')"
      :location="$t('education.aminj.school')"
      :description="$t('projects.aminj-tumble.description')"
      :tools="[$t('tools.unity'), $t('tools.csharp')]"
    ></project-item>
    <project-item
      date="2019-2020"
      :title="$t('projects.website-raw.title')"
      :description="$t('projects.website-raw.description')"
      :tools="[$t('tools.html5'), $t('tools.css3'), $t('tools.js-es6')]"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('projects.opengl-renderer.title')"
      :description="$t('projects.opengl-renderer.description')"
      :tools="[$t('tools.cpp'), $t('tools.opengl')]"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('projects.upssitech-robot.title')"
      :location="$t('education.upssitech.school')"
      :description="$t('projects.upssitech-robot.description')"
      :tools="[
        $t('tools.arduino'),
        $t('tools.processing'),
        $t('tools.cpp'),
        $t('tools.java'),
      ]"
    ></project-item>
    <project-item
      date="2018-2019"
      :title="$t('projects.upssitech-search.title')"
      :location="$t('education.upssitech.school')"
      :description="$t('projects.upssitech-search.description')"
      :tools="[$t('tools.c'), $t('tools.java')]"
    ></project-item>
    <project-item
      date="2018"
      :title="$t('projects.iut-blagnacrace.title')"
      :location="$t('education.iut.school')"
      :description="$t('projects.iut-blagnacrace.description')"
      :tools="[$t('tools.android'), $t('tools.java')]"
    ></project-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectItem from "@/components/cv/ProjectItem.vue";

export default defineComponent({
  components: {
    ProjectItem,
  },
});
</script>
