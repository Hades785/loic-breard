<template>
  <div id="nav">
    <router-link to="/cv/about">{{ $t("about.title") }}</router-link>
    <router-link to="/cv/skills">{{ $t("skills.title") }}</router-link>
    <router-link to="/cv/education">{{ $t("education.title") }}</router-link>
    <router-link to="/cv/experience">{{ $t("experience.title") }}</router-link>
    <router-link to="/cv/projects">{{ $t("projects.title") }}</router-link>
    <router-link to="/cv/interests">{{ $t("interests.title") }}</router-link>
  </div>
  <router-view />
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
