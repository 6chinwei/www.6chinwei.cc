<template>
  <div class="app-window">
    <div class="header">
      <div class="traffic-lights">
        <div class="light-red" />
        <div class="light-orange" />
        <div class="light-green" />
      </div>
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-window {
  --header-height: 1.75rem;
  --light-size: 0.75rem;

  background-color: var(--color-white);
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-black);
    height: var(--header-height);
    padding: 0 var(--light-size);
  }

  .traffic-lights {
    display: flex;
    gap: calc(var(--light-size) * 0.75);

    %light {
      width: var(--light-size);
      height: var(--light-size);
      border-radius: 50%;
    }

    .light-red {
      @extend %light;
      background-color: var(--color-red);
    }

    .light-orange {
      @extend %light;
      background-color: var(--color-orange);
    }

    .light-green {
      @extend %light;
      background-color: var(--color-green);
    }
  }

  .content-wrapper {
    height: calc(100% - var(--header-height));
  }
}
</style>
