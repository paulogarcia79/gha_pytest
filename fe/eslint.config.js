import eslint from '@eslint/js';
import eslintPrettier from 'eslint-config-prettier';
import eslintPluginPrettierVue from 'eslint-plugin-prettier-vue';
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
// ];

export default [
  {languageOptions: { globals: globals.browser }},
  eslint.configs.recommended,
  ...eslintPluginVue.configs["flat/essential"],
  eslintPluginPrettierVue.configs["recommended"],
  eslintPrettier.configs.recommended,
]