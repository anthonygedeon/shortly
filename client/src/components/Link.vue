<template>
  <div class="posted-link">
    <header class="posted-link__header">
      <div class="posted-link__pad posted-link__pad--top">
        <span class="posted-link__long-url">{{ longUrl }}</span>
      </div>
    </header>
    <hr class="posted-link__line" />
    <div class="posted-link__container">
      <div class="posted-link__pad posted-link__pad--bottom">
        <a ref="textToCopy" class="posted-link__short-url">{{ shortUrl }}</a>
        <button
          @click="updateButtonText(), copyToClipboard()"
          class="button button--lg button--box"
          :class="{ active: isClick }"
        >
          {{ buttonTextState }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["longUrl", "shortUrl", "hash"],
  data() {
    return {
      buttonTextState: "Copy",
      isClick: false,
    };
  },
  methods: {
    updateButtonText() {
      setTimeout(() => {
        this.buttonTextState = "Copy";
        this.isClick = false;
      }, 1500);
      this.buttonTextState = "Copied!";
      this.isClick = true;
    },
    copyToClipboard() {
      const referenceNode = this.$refs.textToCopy;

      const range = document.createRange();
      range.selectNode(referenceNode);

      window.getSelection().removeAllRanges(); // remove any previous selections
      window.getSelection().addRange(range); // select
      document.execCommand("copy"); // copy to clipboard
      window.getSelection().removeAllRanges(); // remove selection
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: var(--main-bg-color);
}

.posted-link {
  background-color: var(--white-color);
  border-radius: 5px;
  position: relative;

  & + & {
    margin-top: 2rem;
  }

  &__header {
    margin-bottom: 1rem;
  }

  &__line {
    border-color: var(--neutral-gray-color);
    opacity: 0.1;
  }

  .posted-link__pad {
    padding: 1.125rem;

    &--top {
      padding-bottom: 0;
    }

    &--bottom {
      padding-top: 0;
    }
  }

  &__long-url,
  &__short-url {
    font-weight: var(--weight-medium);
  }

  &__long-url {
    color: var(--neutral-dark-violet-color);
  }

  &__short-url {
    color: var(--main-accent-color);
    margin-bottom: 1rem;
    display: block;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }
}
</style>