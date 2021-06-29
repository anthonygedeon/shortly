<template>
  <article class="card">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "card",
  props: ["heading", "text"],
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white-color);
  border-radius: 5px;
  padding: 0 2rem 1rem 2rem;
  position: relative;

  & + & {
    margin-top: 6rem;
  }

  &__img-container {
    background-color: var(--main-bg-color);
    border-radius: 50%;
    padding: 1.25rem;
    display: flex;
    justify-items: center;
    position: relative;
    top: calc(-1.25rem * 2);
  }

  &__heading {
    font-weight: var(--weight-bold);
    color: var(--neutral-dark-blue-color);
    margin-bottom: 0.125rem;
    margin-top: 0;
  }

  &__text {
    color: var(--neutral-gray-violet-color);
    text-align: center;
    font-size: 0.95rem;
  }
}
</style>
