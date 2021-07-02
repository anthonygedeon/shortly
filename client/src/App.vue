<template>
  <router-view />
</template>

<style lang="scss">
$break-points: (
  "small": 640px,
  "medium": 768px,
  "large": 1024px,
  "extra-large": 1280px,
) !default;

/// Mixin to manage responsive breakpoints
/// @param {String} $breakpoint - Breakpoint name
/// @require $breakpoints
@mixin respond-to($breakpoint) {
  // If the key exists in the map
  @if map-has-key($break-points, $breakpoint) {
    // Prints a media query based on the value
    @media (min-width: map-get($break-points, $breakpoint)) {
      @content;
    }
  }

  // If the key doesn't exist in the map
  @else {
    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "
              + "Available breakpoints are: #{map-keys($break-points)}.";
  }
}

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
  margin: 0;
}

img {
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 1080px) {
    max-width: 1190px
  }

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

  &--box {
    border-radius: 5px;
  }

  &--lg {
    width: 100%;
  }
}
</style>
