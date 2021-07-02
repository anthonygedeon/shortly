<template>
  <div class="hero container hero__container">
    <div class="hero__row">
      <div class="hero__img-container">
        <img
          class="hero__img"
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
  padding: 2rem 0;

  &__cta {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__row {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__img-container {
    margin-top: 2rem;
    @media (min-width: 768px) {
      order: 20;
    }
  }

  &__cta {
    @media (min-width: 768px) {
      order: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 4rem;
    }
  }

  &__heading {
    text-align: center;
    line-height: 1.125;
    color: var(--neutral-dark-violet-color);
    margin-bottom: 0.75rem;
    font-size: 2.5rem;

    @media (min-width: 768px) {
      font-size: 4.5rem;
      text-align: left;
    }

  }

  &__text {
    text-align: center;
    font-size: var(--main-font-size);
    color: var(--neutral-gray-violet-color);
    margin: 0 0 2rem 0;
    @media (min-width: 768px) {
      font-size: 1.125rem;
      text-align: left;
    }
  }
}
</style>
