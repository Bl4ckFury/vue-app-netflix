import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMyListStore = defineStore("my-list", () => {
  const list = ref([]);
  const addMyList = () => {
    list.value.unshift();
  };
  return { list };
});
