<template>
  <div class="override">
    <IndexPage />
  </div>
</template>

<script setup lang="ts">
import IndexPage from '~/pages/index.vue';
</script>

<style lang="scss">
html {
  font-size: 31px;
}

.override {
  .page {
    background-image: none;
    background-color: var(--color-blue);
  }

  .container {
    max-width: unset;
    width: unset;
    padding: 0;
  }

  .app-window {
    width: 1200px;
    height: 630px;
  }

  .title {
    margin-bottom: 1.25rem;
  }

  .skills {
    display: none;
  }

  .find-me {
    display: none;
  }

  .contact li[class^="link-"] {
    background-image: none;
    --size: 2.5rem;
  }
}
</style>
