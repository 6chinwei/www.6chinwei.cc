// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@zadigetvoltaire/nuxt-gtm',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      link: [
        // Google Fonts for Montserrat
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
      ],
    },
  },
  gtm: {
    id: 'GTM-T5L3CX5R',
  },
  runtimeConfig: {
    public: {
      APP_URL: process.env.APP_URL,
    },
  },
});
