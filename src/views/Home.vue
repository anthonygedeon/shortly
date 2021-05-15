<template>
  <header class="header">
    <Navbar />
    <Hero />
  </header>
</template>

<script>
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 2rem;
}
</style>
