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
  
  @media (min-width: 768px) {
    background-image: url("../assets/bg-boost-desktop.svg");
    background-size: cover;
  }

  &__heading {
    text-align: center;
    font-weight: var(--weight-bold);
    color: var(--white-color);
    font-size: 1.5rem;
    margin-top: 0;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
}
</style>
