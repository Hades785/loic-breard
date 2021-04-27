module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@intlify/vue-i18n/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",

    // vue-i18n
    "@intlify/vue-i18n/no-dynamic-keys": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        extensions: [".js", ".vue"],
      },
    ],
  },

  settings: {
    "vue-i18n": {
      localeDir: "src/i18n/*.{json,json5,yaml,yml}",

      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
