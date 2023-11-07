<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="xmark"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.xmark {
  color: $white;
  width: 38px;
  transition: all .2s;
  &:hover {
    color: $red;
  }
}
</style>
