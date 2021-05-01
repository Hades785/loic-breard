const appTitle = "Loïc Bréard";

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
      args[0].title = appTitle;
      return args;
    });
  },
};
