<template>
  <section class="cta">
    <h3 class="cta__heading">Boost your links today</h3>
    <button class="button button--md">Get Started</button>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/bg-boost-mobile.svg") no-repeat top right
    var(--main-bg-color);

  &__heading {
    text-align: center;
    font-weight: var(--weight-bold);
    color: var(--white-color);
    font-size: 1.5rem;
    margin-top: 0;
  }
}
</style>
