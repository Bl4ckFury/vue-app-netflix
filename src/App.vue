<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView></RouterView>
</template>

<style scoped>
@import "./assets/styles/main.scss";
</style>
