<template>
  <div id="nav">
    <router-link to="/" id="home">
      <h1>{{ $t("title") }}</h1>
    </router-link>
    <div id="base-nav">
      <router-link to="/cv/">{{ $t("cv") }}</router-link>
    </div>
  </div>
  <div id="lang-select">
    <span>{{ $t("lang.language") }}</span>
    <select v-model="$i18n.locale">
      <option value="fr-FR">{{ $t("lang.frFR") }}</option>
      <option value="en-GB">{{ $t("lang.enGB") }}</option>
      <option value="jp-JP">{{ $t("lang.jpJP") }}</option>
    </select>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap')
@import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap')

html, body
  width 100vw
  background-color rgb(20.4, 20.4, 12.75)
  color rgb(229.5, 178.5, 178.5)
  font-family "JetBrainsMono", "Space Mono", monospace

#app
  text-align center
  margin-top 60px
  display grid
  grid-template-columns 2fr 8fr 2fr

  > *
    grid-column 2

  a
    color: inherit

#nav
  grid-row 1
  display grid

  a
    text-decoration none

  #home
    grid-row 1

  #base-nav
    grid-row 2
    display grid

    *
      grid-row 1

#lang-select
  grid-row 1
  grid-column 3
  display grid

  > *
    height min-content
    width 50%

  > span
    grid-row 1

  > select
    grid-row 2
    appearance none
    border none
    background inherit
    color inherit
    text-align center

#content
  grid-row 2
</style>
