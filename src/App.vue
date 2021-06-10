<template>
  <div id="nav">
    <router-link to="/" id="home">
      <h1>{{ $t("title") }}</h1>
    </router-link>
    <nav>
      <div id="base-nav">
        <router-link to="/cv/">{{ $t("cv.cv") }}</router-link>
      </div>
      <div id="section-nav">
        <template v-for="link in navLinks" :key="link.to">
          <router-link :to="link.to">
            {{ link.name }}
          </router-link>
        </template>
      </div>
    </nav>
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

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

interface RouterLink {
  to: string;
  name: string;
}

export default defineComponent({
  setup() {
    const { locale, t } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const navLinks = ref<RouterLink[]>([]);

    const updateNav = () => {
      let matchedRoute = "";
      navLinks.value.splice(0, navLinks.value.length);
      router.options.routes
        .find((r) => {
          matchedRoute = r.path;
          return route.fullPath.startsWith(r.path);
        })
        ?.children?.forEach((r) => {
          const i18nKey = `${matchedRoute}/${r.path}`
            .replaceAll("/", ".")
            .replace(/^\./, "");
          // eslint-disable-next-line @intlify/vue-i18n/no-dynamic-keys
          navLinks.value.push({ to: r.path, name: t(`${i18nKey}.title`) });
        });
    };

    // Reverse so `/` is at the end.
    router.options.routes.reverse();

    watch(() => route.name, updateNav);
    watch(locale, updateNav);

    return {
      navLinks,
    };
  },
});
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap')
@import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap')

@media (prefers-color-scheme: dark)
  :root
    --bg-colour: rgb(20.4, 20.4, 12.75)
    --text-colour: rgb(229.5, 178.5, 178.5)
    --accent-colour: rgb(127.5, 178.5, 229.5)

@media (prefers-color-scheme: light)
  :root
    --bg-colour: rgb(229.5, 229.5, 229.5)
    --text-colour: rgb(63.75, 89.25, 229.5)
    --accent-colour: rgb(229.5, 89.25, 89.25)

html, body
  width 100vw
  overflow-x hidden
  background-color var(--bg-colour)
  color var(--text-colour)
  font-family "JetBrains Mono", "Space Mono", monospace

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

  #section-nav
    display grid

    *
      grid-row 1
      text-decoration none

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
