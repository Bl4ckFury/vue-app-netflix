<script setup></script>

<template>
  <main class="main">
    <div class="series">
      <h1 class="title1">Мой список</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.main {
  display: flex;
  flex-direction: column;
  & .series {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    & .title1 {
      color: $white;
      font-size: 40px;
      padding-bottom: 50px;
    }
  }
}
</style>
