<template>
  <div class="hero container hero__container">
    <div class="hero__row">
      <div class="hero__img-container">
        <img
          src="../assets/illustration-working.svg"
          alt="person on computer working"
        />
      </div>
      <header class="hero__cta">
        <h1 class="hero__heading">More than Just shorter links</h1>
        <p class="hero__text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button class="button button--md">Get Started</button>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.hero {
  &__cta {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__img-container {
    margin-top: 2rem;
  }

  &__heading {
    text-align: center;
    line-height: 1.125;
    color: var(--neutral-dark-violet-color);
    margin-bottom: 0.75rem;
    font-size: 2.5rem;
  }

  &__text {
    text-align: center;
    font-size: var(--main-font-size);
    color: var(--neutral-gray-violet-color);
    margin: 0 0 2rem 0;
  }
}
</style>
