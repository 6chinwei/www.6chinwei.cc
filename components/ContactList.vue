<template>
  <nav class="contact">
    <p class="find-me">Find <span class="id">@6chinwei</span> on</p>
    <ul>
      <li v-for="contact of contactList" :key="contact.type" :class="`link-${contact.type}`" :data-text="contact.text">
        <a :href="contact.url" target="_blank">{{ contact.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface ContactListProps {
  contactList: Array<{
    type: string;
    text: string;
    url: string;
  }>;
}

const { contactList } = defineProps<ContactListProps>();
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins.scss" as *;

.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  @include for-desktop {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0;
  }

  .find-me {
    font-size: 0.875rem;
    color: var(--color-gray);
    align-items: flex-end;
    margin: 0;

    @include for-desktop {
      padding-right: 0.875rem;
    }
  }

  .id {
    color: var(--color-blue);
    font-weight: bold;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace; // Reference from GitHub
  }

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
    --size: 3.75rem;

    position: relative;
    width: var(--size);
    height: var(--size);
    border-radius: 25%;
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

    // Tooltip
    &::before {
      content: attr(data-text);
      position: absolute;
      display: flex;
      top: -7px;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      width: auto;
      height: auto;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background-color: var(--color-gray);
      color: var(--color-white);
      border-radius: 0.5rem;
      opacity: 0;
      transition: opacity 0.25s ease;
    }

    // Tooltip Arrow
    &::after {
      content: '';
      position: absolute;
      display: flex;
      top: 0px;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      width: auto;
      height: auto;
      width: 0;
      height: 0;
      border-top: 8px solid var(--color-gray);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      opacity: 0;
      transition: opacity 0.25s ease;
    }

    &:hover {
      opacity: 1;

      &::before, &::after {
        opacity: 1;
      }
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
  }
}
</style>
