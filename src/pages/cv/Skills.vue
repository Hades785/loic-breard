<template>
  <h2>{{ $t("cv.skills.title") }}</h2>
  <ul>
    <skills-list :title="$t('cv.skills.computer-science')">
      <skills-list :title="$t('cv.skills.programming')">
        <skills-item
          :title="$t('tools.java')"
          :level="$t('cv.skills.level.advanced')"
          :techs="[
            $t('tools.maven'),
            $t('tools.gradle'),
            $t('tools.java-swing'),
            $t('tools.javafx'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.kotlin')"
          :level="$t('cv.skills.level.intermediate')"
          :techs="[$t('tools.maven'), $t('tools.gradle')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.csharp')"
          :level="$t('cv.skills.level.advanced')"
          :techs="[$t('tools.harmony'), $t('tools.unity.unity')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.haskell')"
          :level="$t('cv.skills.level.basics')"
          :techs="[$t('tools.haskell-stack')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.js')"
          :level="$t('cv.skills.level.advanced')"
          :techs="[$t('tools.ts'), $t('tools.vue3')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.python')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.c')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.rust.rust')"
          :level="$t('cv.skills.level.basics')"
          :techs="[$t('tools.rust.bevy')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.html5')"
          :level="$t('cv.skills.level.advanced')"
        ></skills-item>
        <skills-item
          :title="$t('tools.css3')"
          :level="$t('cv.skills.level.advanced')"
          :techs="[
            $t('tools.css-stylus'),
            $t('tools.css-less'),
            $t('tools.css-sass'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.cpp')"
          :level="$t('cv.skills.level.basics')"
          :techs="[
            $t('tools.cmake'),
            $t('tools.opengl'),
            $t('tools.qt5'),
            $t('tools.sfml'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.php')"
          :level="$t('cv.skills.level.intermediate')"
          :techs="[$t('tools.php-phalcon')]"
        ></skills-item>
        <skills-item
          :title="$t('tools.sql')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.cobol')"
          :level="$t('cv.skills.level.basics')"
        ></skills-item>
      </skills-list>
      <skills-list :title="$t('cv.skills.software.software')">
        <skills-list :title="$t('cv.skills.software.game-engines')">
          <skills-item
            :title="$t('tools.unity.unity')"
            :level="$t('cv.skills.level.advanced')"
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
            :level="$t('cv.skills.level.advanced')"
          ></skills-item>
        </skills-list>
      </skills-list>
      <skills-list :title="$t('cv.skills.operating-systems')">
        <skills-list :title="$t('tools.os.dos')">
          <skills-item
            :title="$t('tools.os.windows')"
            :level="$t('cv.skills.level.intermediate')"
          ></skills-item>
        </skills-list>
        <skills-list :title="$t('tools.os.unix')">
          <skills-item
            :title="$t('tools.os.linux.linux')"
            :level="$t('cv.skills.level.advanced')"
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
            :level="$t('cv.skills.level.intermediate')"
          ></skills-item>
        </skills-list>
      </skills-list>
    </skills-list>
    <skills-list :title="$t('cv.skills.computer-graphics')">
      <skills-list :title="$t('cv.skills.software.software')">
        <skills-item
          :title="$t('tools.clip-studio-paint')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.adobe-suite')"
          :level="$t('cv.skills.level.intermediate')"
          :techs="[
            $t('tools.photoshop'),
            $t('tools.illustrator'),
            $t('tools.premiere'),
            $t('tools.animate'),
          ]"
        ></skills-item>
        <skills-item
          :title="$t('tools.krita')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.inkscape')"
          :level="$t('cv.skills.level.intermediate')"
        ></skills-item>
        <skills-item
          :title="$t('tools.gimp')"
          :level="$t('cv.skills.level.basics')"
        ></skills-item>
      </skills-list>
    </skills-list>
    <skills-list :title="$t('cv.skills.langs.title')">
      <skills-item
        :title="$t('lang.frFR')"
        :level="$t('cv.skills.langs.native')"
      ></skills-item>
      <skills-item
        :title="$t('lang.enGB')"
        :level="`${$t('cv.skills.langs.fluent')} (${$t('cv.skills.langs.c1')})`"
      ></skills-item>
      <skills-item
        :title="$t('lang.esES')"
        :level="`${$t('cv.skills.langs.basics')} (${$t('cv.skills.langs.a2')})`"
      ></skills-item>
      <skills-item
        :title="$t('lang.jpJP')"
        :level="`${$t('cv.skills.langs.basics')}`"
      ></skills-item>
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
