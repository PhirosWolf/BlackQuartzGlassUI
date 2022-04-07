import type { Plugin } from 'postcss';
import { defineNuxtConfig } from 'nuxt3';

// https://github.com/nuxt-community/tailwindcss-module/issues/433#issuecomment-1063576650
const order = (names: Plugin[]) => {
  const tailwindNesting = names.splice(
    names.findIndex((plugin) => plugin.postcssPlugin === 'tailwindcss/nesting'),
    1
  )[0];
  names.unshift(tailwindNesting);
};

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {}
    }
  },
  hooks: {
    'vite:extend'({ config }) {
      order(config.css.postcss.plugins);
    }
  }
});
