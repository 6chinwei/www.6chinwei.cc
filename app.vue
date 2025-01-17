<script setup>
import ogImage from '~/assets/images/og.png';

const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: appConfig.seo.title,
  ogTitle: appConfig.seo.title,
  description: appConfig.seo.description,
  keywords: appConfig.seo.keywords,
  ogUrl: runtimeConfig.public.APP_URL,
  ogType: 'website',
  ogDescription: appConfig.seo.description,
  ogImage: {
    url: `${ runtimeConfig.public.APP_URL }${ ogImage }`,
    width: 1200,
    height: 630
  },
  twitterCard: 'summary_large_image'
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
