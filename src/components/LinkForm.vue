<template>
  <form class="link-creator" method="post">
    <div class="link-creator__input-container">
      <input
        type="text"
        placeholder="Shorten a link here..."
        class="link-creator__input"
        required
      />
    </div>
    <button class="button button--lg button--box">Shorten It!</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link-creator {
  padding: 1.25rem;
  border-radius: 7px;
  background: url("../assets/bg-shorten-mobile.svg") no-repeat,
    var(--main-bg-color);
  background-position: right top;
  position: relative;
  top: -65px;

  &__input-container {
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    border: none;
    padding: 0.9rem 0 0.9rem;
    border-radius: 5px;

    &::placeholder {
      padding-left: 0.9rem;
      font-weight: var(--weight-medium);
      font-size: 1rem;
    }
  }
}
</style>
