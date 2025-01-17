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

          <nav class="contact">
            <ul>
              <li class="link-codepen">
                <a href="https://codepen.io/6chinwei" target="_blank">Codepen</a>
              </li>
              <li class="link-linkedin">
                <a href="https://www.linkedin.com/in/6chinwei/" target="_blank">LinkedIn</a>
              </li>
              <li class="link-github">
                <a href="https://github.com/6chinwei" target="_blank">Github</a>
              </li>
              <li class="link-mail">
                <a href="mailto:6chinwei@gmail.com" target="_blank">Mail</a>
              </li>
            </ul>
          </nav>
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
  background-color: var(--color-dark-blue);
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
  padding-bottom: calc(1.25rem * 2 + 3.25rem); // Add the height of the contact bar
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  height: 100%;
  position: relative;

  @include for-desktop {
    min-height: unset;
    padding-top: 1.5rem;
    padding-bottom: calc(1.5rem * 2 + 4rem);
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
    line-height: 1.25;
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
  margin-bottom: 1.5rem;
}

.contact {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.125rem;

    @include for-desktop {
      gap: 1.5rem;
    }
  }

  %link {
    --size: 3.25rem;

    width: var(--size);
    height: var(--size);
    border-radius: 1rem;
    overflow: hidden;
    opacity: 0.75;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 1.25rem;

    @include for-desktop {
      --size: 4rem;
      background-size: 1.5rem;
    }

    a {
      font-size: 0.75rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: transparent;
    }

    &:hover {
        opacity: 1;
      }
  }

  .link-linkedin {
    @extend %link;
    background-color: var(--color-blue);
    background-image: url('~/assets/images/icon-linkedin.svg');
  }

  .link-github {
    @extend %link;
    background-color: var(--color-orange);
    background-image: url('~/assets/images/icon-github.svg');
  }

  .link-codepen {
    @extend %link;
    background-color: var(--color-green);
    background-image: url('~/assets/images/icon-codepen.svg');
  }

  .link-mail {
    @extend %link;
    background-color: var(--color-red);
    background-image: url('~/assets/images/icon-mail.svg');
    background-size: 1.125rem; // Adjust to smaller size for the mail icon

    @include for-desktop {
      background-size: 1.25rem;
    }
  }
}
</style>
