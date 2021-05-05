<template>
  <div id="cv-nav">
    <router-link to="/cv/about">{{ $t("about.title") }}</router-link>
    <router-link to="/cv/skills">{{ $t("skills.title") }}</router-link>
    <router-link to="/cv/education">{{ $t("education.title") }}</router-link>
    <router-link to="/cv/experience">{{ $t("experience.title") }}</router-link>
    <router-link to="/cv/projects">{{ $t("projects.title") }}</router-link>
    <router-link to="/cv/interests">{{ $t("interests.title") }}</router-link>
  </div>
  <div id="cv-content">
  <router-view></router-view>
  </div>
</template>
