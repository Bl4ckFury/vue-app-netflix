<script setup>
import { ref } from "vue";
import { useSeriesStore } from "../../stores/series";
import SearchIcon from "../icons/Search.vue";
import Search from "../Search/Search.vue";

const SeriesStore = useSeriesStore();
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <img src="../../assets/image/logo/logo-net.png" alt="logo" />
      <div class="router-links">
        <RouterLink class="link" to="/">Главная</RouterLink>
        <RouterLink class="link" to="/series">Сериалы</RouterLink>
        <RouterLink class="link" to="/movies">Фильмы</RouterLink>
        <RouterLink class="link" to="/lastese">Последнее</RouterLink>
        <RouterLink class="link" to="/my-list">Мой список</RouterLink>
      </div>
    </div>
    <div class="nav-right">
      <button v-if="SeriesStore.search" @click="SeriesStore.openSearch" class="btn-search">
        <SearchIcon />
      </button>
      <Search v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  & .btn-search {
    border: none;
    cursor: pointer;
    background: none;
  }
  & .nav-left {
    display: flex;
    align-items: center;
    flex-direction: row;
    & .router-links {
      margin-left: 50px;
      & .link {
        font-size: 18px;
        margin-right: 30px;
        color: $white;
        transition: all 0.2s;
        text-decoration: none;
        &:hover {
          color: $red;
        }
        &:focus {
          color: $red;
        }
      }
    }
  }
}
</style>
