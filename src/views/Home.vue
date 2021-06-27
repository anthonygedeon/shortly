<template>
  <header class="header">
    <Navbar />
    <Hero />
  </header>
  <main class="content">
    <div class="container">
      <LinkForm />
      <section class="info">
        <h2 class="info__heading">Advance Statistics</h2>
        <p class="info__text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LinkForm from "@/components/LinkForm";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    LinkForm,
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 2rem;
}

.content {
  background-color: #eff1f7;
  margin-top: 10rem;
}

.info {
  &__heading {
    font-weight: var(--weight-bold);
    color: var(--neutral-dark-blue-color);
  }

  &__text {
    color: var(--neutral-gray-violet-color);
  }

  &__heading,
  &__text {
    text-align: center;
  }
}
</style>
