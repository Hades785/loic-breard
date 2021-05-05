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
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
