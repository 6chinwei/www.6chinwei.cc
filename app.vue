<script setup>
import ogImage from '~/assets/images/og.png';

const appConfig = useAppConfig();

useSeoMeta({
  title: appConfig.seo.title,
  ogTitle: appConfig.seo.title,
  description: appConfig.seo.description,
  keywords: appConfig.seo.keywords,
  canonical: appConfig.appUrl,
  ogUrl: appConfig.appUrl,
  ogType: 'website',
  ogDescription: appConfig.seo.description,
  ogImage: {
    url: `${ appConfig.appUrl }${ ogImage }`,
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
