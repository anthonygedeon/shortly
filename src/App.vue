<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --white-color: hsl(0, 0%, 100%);
  --main-accent-color: hsl(180, 66%, 49%);
  --main-bg-color: hsl(257, 27%, 26%);

  --secondary-color: hsl(0, 87%, 67%);

  --neutral-gray-color: hsl(0, 0%, 75%);
  --neutral-gray-violet-color: hsl(257, 7%, 63%);
  --neutral-dark-blue-color: hsl(255, 11%, 22%);
  --neutral-dark-violet-color: hsl(260, 8%, 14%);

  --main-font-size: 1.125rem;
  --main-font-family: "Poppins", sans-serif;

  --weight-bold: 700;
  --weight-medium: 500;
}

body {
  font-family: var(--main-font-family);
}

img {
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  & .row {
    display: flex;
    justify-content: space-between;
  }
}

.button {
  border-radius: 200px;
  background-color: var(--main-accent-color);
  border-width: 0;
  text-align: center;

  padding: 0.9rem 0;
  color: var(--white-color);
  font-size: var(--main-font-size);
  font-weight: var(--weight-bold);

  &--md {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &--lg {
    width: 100%;
  }
}
</style>
