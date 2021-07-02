<template>
  <div class="form-container">
    <form class="link-creator" method="post">
      <div class="link-creator__input-container">
        <input
          type="text"
          placeholder="Shorten a link here..."
          class="link-creator__input"
          required
        />
      </div>
      <button class="button button--lg button--box link-creator__button">
        Shorten It!
      </button>
    </form>
    <Link
      v-for="link in links"
      :key="link.hash"
      :longUrl="link.long_url"
      :shortUrl="link.short_url"
    />
  </div>
</template>

<script>
import Link from "./Link.vue";

export default {
  components: { Link },
  data() {
    return {
      links: [
        {
          hash: "udf3d2j",
          long_url: "https://www.youtube.com",
          short_url: "https://shortly.com/udf32j",
        },
        {
          hash: "udf332j",
          long_url: "https://www.youtube.com",
          short_url: "https://shortly.com/udf32j",
        },
        {
          hash: "uddf32j",
          long_url: "https://www.youtube.com",
          short_url: "https://shortly.com/udf32j",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  margin-bottom: 3rem;
}

.link-creator {
  padding: 1.5rem;
  border-radius: 7px;
  background: url("../assets/bg-shorten-mobile.svg") no-repeat,
    var(--main-bg-color);
  background-position: right top;
  position: relative;
  top: -65px;

  @media (min-width: 768px) {
    &__button {
      flex: 3 0 0;
      margin-left: 3rem;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem;
    display: flex;
    background-image: url("../assets/bg-shorten-desktop.svg");
    background-size: cover;
  }

  &__input-container {
    margin-bottom: 1rem;
    width: 100%;
    @media (min-width: 768px) {
      margin-bottom: 0;
      height: 100%;
      flex: 15 0 0;
    }
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
