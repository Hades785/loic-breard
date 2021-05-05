module.exports = {
  pluginOptions: {
    i18n: {
      locale: "fr-FR",
      fallbackLocale: "en-GB",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      args[0].canonical = process.env.VUE_APP_CANONICAL;
      return args;
    });
  },
};
