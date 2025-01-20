<script setup>
import ogImagePath from '~/assets/images/og.png';

const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

// The result of imported `ogImage` in server-side is a relative path,
// but in client-side is an absolute path based on the browser.
const ogImageUrl = import.meta.server
  ? `${ runtimeConfig.public.APP_URL }${ ogImagePath }`
  : ogImagePath;

useSeoMeta({
  title: appConfig.seo.title,
  ogTitle: appConfig.seo.title,
  description: appConfig.seo.description,
  keywords: appConfig.seo.keywords,
  ogUrl: runtimeConfig.public.APP_URL,
  ogType: 'website',
  ogDescription: appConfig.seo.description,
  ogImage: {
    url: ogImageUrl,
    width: 1200,
    height: 630
  },
  twitterCard: 'summary_large_image'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  }
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/scss/colors.scss';
@use '~/assets/scss/reset.scss';
</style>
