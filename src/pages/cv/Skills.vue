<template>
  <h2>{{ $t("skills.title") }}</h2>
  <ul>
    <skills-list :title="$t('skills.technical')">
      <skills-list :title="$t('skills.programming')">
        <skills-item
          :title="$t('tools.java')"
          :level="$t('skills.level.advanced')"
          :techs="[
            $t('tools.maven'),
            $t('tools.gradle'),
            $t('tools.java-swing'),
            $t('tools.javafx'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.csharp')"
          :level="$t('skills.level.advanced')"
          :techs="[$t('tools.harmony'), $t('tools.unity.unity')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.js')"
          :level="$t('skills.level.advanced')"
          :techs="[$t('tools.ts'), $t('tools.vue3')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.python')"
          :level="$t('skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.c')"
          :level="$t('skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.rust.rust')"
          :level="$t('skills.level.basics')"
          :techs="[$t('tools.rust.bevy')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.html5')"
          :level="$t('skills.level.advanced')"
        ></skills-item>
        <skills-item
          :title="$t('tools.css3')"
          :level="$t('skills.level.advanced')"
          :techs="[
            $t('tools.css-stylus'),
            $t('tools.css-less'),
            $t('tools.css-sass'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.cpp')"
          :level="$t('skills.level.basics')"
          :techs="[
            $t('tools.cmake'),
            $t('tools.opengl'),
            $t('tools.qt5'),
            $t('tools.sfml'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.php')"
          :level="$t('skills.level.intermediate')"
          :techs="[$t('tools.php-phalcon')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.sql')"
          :level="$t('skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.cobol')"
          :level="$t('skills.level.basics')"
        ></skills-item>
      </skills-list>
      <skills-list :title="$t('skills.software.software')">
        <skills-list :title="$t('skills.software.game-engines')">
          <skills-item
            :title="$t('tools.unity.unity')"
            :level="$t('skills.level.advanced')"
            :techs="[
              $t('tools.unity.input-system'),
              $t('tools.unity.2d-tools'),
              $t('tools.unity.animator'),
              $t('tools.unity.ui'),
              $t('tools.openxr'),
              $t('tools.mrtk'),
            ]"
          ></skills-item>
          <skills-item
            :title="$t('tools.godot.godot')"
            :level="$t('skills.level.advanced')"
          ></skills-item>
        </skills-list>
        <skills-list :title="$t('skills.software.graphics')">
          <skills-item
            :title="$t('tools.clip-studio-paint')"
            :level="$t('skills.level.intermediate')"
          ></skills-item>
          <skills-item
            :title="$t('tools.adobe-suite')"
            :level="$t('skills.level.intermediate')"
            :techs="[
              $t('tools.photoshop'),
              $t('tools.illustrator'),
              $t('tools.premiere'),
              $t('tools.animate'),
            ]"
          ></skills-item>
          <skills-item
            :title="$t('tools.krita')"
            :level="$t('skills.level.intermediate')"
          ></skills-item>
          <skills-item
            :title="$t('tools.inkscape')"
            :level="$t('skills.level.intermediate')"
          ></skills-item>
          <skills-item
            :title="$t('tools.gimp')"
            :level="$t('skills.level.basics')"
          ></skills-item>
        </skills-list>
      </skills-list>
      <skills-list :title="$t('skills.operating-systems')">
        <skills-list :title="$t('tools.os.dos')">
          <skills-item
            :title="$t('tools.os.windows')"
            :level="$t('skills.level.intermediate')"
          ></skills-item>
        </skills-list>
        <skills-list :title="$t('tools.os.unix')">
          <skills-item
            :title="$t('tools.os.linux.linux')"
            :level="$t('skills.level.advanced')"
            :techs="[
              $t('tools.os.linux.arch'),
              $t('tools.os.linux.manjaro'),
              $t('tools.os.linux.ubuntu'),
              $t('tools.os.linux.kde-neon'),
              $t('tools.os.linux.elementary'),
            ]"
          ></skills-item>
        </skills-list>
        <skills-list :title="$t('tools.os.mobile')">
          <skills-item
            :title="$t('tools.android')"
            :level="$t('skills.level.intermediate')"
          ></skills-item>
        </skills-list>
      </skills-list>
    </skills-list>
    <skills-list :title="$t('skills.general')">
      <skills-list :title="$t('skills.langs.title')">
        <skills-item
          :title="$t('lang.frFR')"
          :level="$t('skills.langs.native')"
        ></skills-item>
        <skills-item
          :title="$t('lang.enGB')"
          :level="`${$t('skills.langs.fluent')} (${$t('skills.langs.c1')})`"
        ></skills-item>
        <skills-item
          :title="$t('lang.esES')"
          :level="`${$t('skills.langs.basics')} (${$t('skills.langs.a2')})`"
        ></skills-item>
        <skills-item
          :title="$t('lang.jpJP')"
          :level="`${$t('skills.langs.basics')}`"
        ></skills-item>
      </skills-list>
    </skills-list>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillsItem from "@/components/cv/SkillsItem.vue";
import SkillsList from "@/components/cv/SkillsList.vue";

export default defineComponent({
  components: {
    SkillsItem,
    SkillsList,
  },
});
</script>
