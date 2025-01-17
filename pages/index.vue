<template>
  <div class="page">
    <div class="container">
      <AppWindow>
        <div class="content">
          <h1 class="title">
            <span class="prefix">Hello! I’m </span>
            <span class="name">ROCKY LIU </span>
            <span class="suffix">A <span class="highlight">Web-Tech Pathfinder</span> transforming challenges into elegant solutions.</span>
          </h1>
          <p class="skills">Specializing in {{ appConfig.skills.join(' / ') }}</p>

          <ContactList :contact-list="appConfig.contactList" />
        </div>
      </AppWindow>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins.scss" as *;

.page {
  color: var(--color-black);
  background-image: radial-gradient(circle at 50% 50%, var(--color-light-blue) 20%, var(--color-dark-blue) 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 360px;
  min-height: 100%;
  min-height: 100vh;
  min-height: 100svh;
  height: auto;
  overflow: scroll;

  @include for-desktop {
    padding: 1rem;
  }

  // TEMP
  &.bg-2 {
    background-image: linear-gradient(135deg, var(--color-light-blue) 0%, var(--color-light-blue) 50%, var(--color-dark-blue) 50%, var(--color-dark-blue) 100%);
  }

  // TEMP
  &.bg-3 {
    background-image: repeating-linear-gradient(135deg, var(--color-dark-blue), var(--color-dark-blue) 10rem, var(--color-light-blue) 10rem, var(--color-light-blue) 15rem);
  }
}

.container {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;

  @include for-desktop {
    padding: 0 2rem;
  }
}

.content {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem; // Add the height of the contact bar
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  position: relative;


  @include for-desktop {
    min-height: unset;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.title {
  font-size: 1.125rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--color-black);

  @include for-desktop {
    font-size: 1.375rem;
  }

  .prefix {
    display: block;
  }

  .name {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
    margin-left: -0.25rem; // Reduce the padding-left of letter 'R'
    margin-bottom: 0.5rem;

    @include for-desktop {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
  }

  .suffix .highlight {
    font-weight: bold;
  }
}

.skills {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 4rem;
}

</style>
