<template>
  <h2>{{ $t("cv.projects.title") }}</h2>
  <ul>
    <project-item
      date="2021-2xxx"
      :title="$t('cv.projects.website-vue.title')"
      :description="$t('cv.projects.website-vue.description')"
      :tools="[
        $t('tools.vue3'),
        $t('tools.html5'),
        $t('tools.css-stylus'),
        $t('tools.ts'),
      ]"
      :link="'https://github.com/Hades785/loic-breard/'"
    ></project-item>
    <project-item
      date="2020"
      :title="$t('cv.projects.aminj-hololens.title')"
      :location="$t('cv.education.aminj.school')"
      :description="$t('cv.projects.aminj-hololens.description')"
      :tools="[
        $t('tools.hololens2'),
        $t('tools.mrtk'),
        $t('tools.unity.unity'),
        $t('tools.csharp'),
      ]"
    ></project-item>
    <project-item
      date="2020"
      :title="$t('cv.projects.aminj-nsggp.title')"
      :location="$t('cv.education.aminj.school')"
      :description="$t('cv.projects.aminj-nsggp.description')"
      :tools="[$t('tools.phaser'), $t('tools.electron'), $t('tools.js-es6')]"
      :link="'https://github.com/Hades785/nsggp-game/'"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('cv.projects.aminj-cinema.title')"
      :location="$t('cv.education.aminj.school')"
      :description="$t('cv.projects.aminj-cinema.description')"
      :tools="[$t('tools.scorm'), $t('tools.unity.unity'), $t('tools.csharp')]"
    ></project-item>
    <project-item
      date="2019-2020"
      :title="$t('cv.projects.aminj-tumble.title')"
      :location="$t('cv.education.aminj.school')"
      :description="$t('cv.projects.aminj-tumble.description')"
      :tools="[$t('tools.unity.unity'), $t('tools.csharp')]"
      :link="'https://ludichat.itch.io/Tumble/'"
    ></project-item>
    <project-item
      date="2019-2020"
      :title="$t('cv.projects.website-raw.title')"
      :description="$t('cv.projects.website-raw.description')"
      :tools="[$t('tools.html5'), $t('tools.css3'), $t('tools.js-es6')]"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('cv.projects.opengl-renderer.title')"
      :description="$t('cv.projects.opengl-renderer.description')"
      :tools="[$t('tools.cpp'), $t('tools.opengl')]"
      :link="'https://github.com/Hades785/opengl-2d-renderer-proto/'"
    ></project-item>
    <project-item
      date="2019"
      :title="$t('cv.projects.upssitech-robot.title')"
      :location="$t('cv.education.upssitech.school')"
      :description="$t('cv.projects.upssitech-robot.description')"
      :tools="[
        $t('tools.arduino'),
        $t('tools.processing'),
        $t('tools.cpp'),
        $t('tools.java'),
      ]"
    ></project-item>
    <project-item
      date="2018-2019"
      :title="$t('cv.projects.upssitech-search.title')"
      :location="$t('cv.education.upssitech.school')"
      :description="$t('cv.projects.upssitech-search.description')"
      :tools="[$t('tools.c'), $t('tools.java')]"
      :link="'https://github.com/Hades785/upssitech-filrouge'"
    ></project-item>
    <project-item
      date="2018"
      :title="$t('cv.projects.iut-blagnacrace.title')"
      :location="$t('cv.education.iut.school')"
      :description="$t('cv.projects.iut-blagnacrace.description')"
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
