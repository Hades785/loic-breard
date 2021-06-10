<template>
  <div id="cv-nav">
    <router-link to="/cv/about">{{ $t("cv.about.title") }}</router-link>
    <router-link to="/cv/skills">{{ $t("cv.skills.title") }}</router-link>
    <router-link to="/cv/education">{{ $t("cv.education.title") }}</router-link>
    <router-link to="/cv/experience">{{
      $t("cv.experience.title")
    }}</router-link>
    <router-link to="/cv/projects">{{ $t("cv.projects.title") }}</router-link>
    <router-link to="/cv/interests">{{ $t("cv.interests.title") }}</router-link>
  </div>
  <div id="cv-content">
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" scoped>
#cv-nav
  display grid

  *
    grid-row 1
    text-decoration none

#cv-content
  text-align left
</style>
