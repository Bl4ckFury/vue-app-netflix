import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref([
    {
      id: 1,
      title: "Проект Адам",
      image: "/assets/image/slider-movies/1.jpeg",
    },
    {
      id: 2,
      title: "Думаю, как всё закончить",
      image: "/assets/image/slider-movies/2.jpg",
    },
    {
      id: 3,
      title: "Они клонировали Тайрона",
      image: "/assets/image/slider-movies/3.jpg",
    },
    {
      id: 4,
      title: "Убийство в Париже",
      image: "/assets/image/slider-movies/4.jpg",
    },
    {
      id: 5,
      title: "Улица страха",
      image: "/assets/image/slider-movies/5.jpg",
    },
    {
      id: 6,
      title: "Отомсти за меня",
      image: "/assets/image/slider-movies/6.jpg",
    },
    { id: 7, title: "Проект Адам", image: "/assets/image/slider-movies/7.jpg" },
    { id: 8, title: "Проект Адам", image: "/assets/image/slider-movies/8.jpg" },
    { id: 9, title: "Проект Адам", image: "/assets/image/slider-movies/9.jpg" },
    {
      id: 10,
      title: "Проект Адам",
      image: "/assets/image/slider-movies/10.jpg",
    },
    {
      id: 11,
      title: "Проект Адам",
      image: "/assets/image/slider-movies/11.jpg",
    },
    {
      id: 12,
      title: "Проект Адам",
      image: "/assets/image/slider-movies/12.jpg",
    },
  ]);

  return { movies };
});
