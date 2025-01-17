<template>
  <div class="image">
    <div class="background">
      <div class="block-1" />
      <div class="block-2" />
      <div class="block-3" />
    </div>
    <div class="foreground">
      <div class="letter">6</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">

.image {
  width: 300px;
  height: auto;
  aspect-ratio: 1 / 1;
  margin: 60px auto;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
}

.block-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: var(--color-dark-blue);
}

.block-2 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: var(--color-white);
}

.block-3 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: var(--color-green);
}

.foreground {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.letter {
  font-size: 240px;
  font-weight: bold;
  color: var(--color-black);
  font-weight: bold;
}
</style>
