<script setup>
import { useSeriesStore } from "../../stores/series";

const SeriesStore = useSeriesStore();
</script>

<template>
  <form class="form" @submit.prevent="" method="get">
    <input class="input" v-model="SeriesStore.inputSearch" type="text" placeholder="Введите название" />
    <button class="remove-btn" @click="SeriesStore.removeSearch">
      Закрыть
    </button>
    <button class="search-btn" @click="SeriesStore.searchBtn">Найти</button>
  </form>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.form {
  display: flex;
  align-items: center;
  flex-direction: row;
  & .input {
    height: 45px;
    width: 500px;
    padding: 10px;
    outline: none;
    color: $black;
    font-size: 20px;
    border: 2px solid $white;
    border-radius: 10px 0 0 10px;
  }
  & .search-btn {
    height: 45px;
    border: none;
    color: $white;
    font-size: 18px;
    cursor: pointer;
    padding: 0 10px;
    transition: all .2s;
    background-color: $red;
    border-radius: 0px 7px 7px 0;
    &:hover {
      color: $black;
    }
  }
  & .remove-btn {
    height: 45px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 0 10px;
    transition: all .2s;
    background-color: $white;
    &:hover {
      color: $white;
      background-color: $half;
    }
  }
}
</style>
