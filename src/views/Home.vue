<script setup>
import { useSeriesStore } from "../stores/series";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Play from "../components/icons/Play.vue";
import Plus from "../components/icons/Plus.vue";
import XMark from "../components/icons/XMark.vue";

const SeriesStore = useSeriesStore();
const MoviesStore = useMoviesStore();
</script>

<template>
  <main class="main">
    <div class="series">
      <h1 class="title1">Сериалы</h1>
      <div class="slider">
        <swiper :slides-per-view="4" :space-between="40">
          <swiper-slide v-for="series in SeriesStore.series" :key="series.id">
            <div class="series" v-if="SeriesStore.preview">
              <button class="series-btn" @click="SeriesStore.openSeries">
                <img
                  class="slider-img"
                  :src="series.image"
                  :alt="series.title"
                />
              </button>
            </div>
            <div class="open-series" v-else>
              <div class="series-card">
                <img
                  class="slider-img"
                  :src="series.image"
                  :alt="series.title"
                />

                <div class="block-info">
                  <div class="block-ratin">
                    <h2 class="title2">{{ series.title }}</h2>
                    <span class="rating"
                      >Рейтинг:
                      <span class="rating-number">{{
                        series.rating
                      }}</span></span
                    >
                  </div>
                  <button class="xmark-btn" @click="SeriesStore.removeSeries">
                    <XMark />
                  </button>
                </div>
                <p class="description">
                  {{ series.description }}
                </p>
                <div class="block-btn">
                  <button class="play-btn"><Play /> Смотреть</button>
                  <button class="plus-btn"><Plus /> Мой Список</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="movies">
      <h1 class="title1">Фильмы</h1>
      <div class="slider">
        <swiper :slides-per-view="4" :space-between="40">
          <swiper-slide v-for="movies in MoviesStore.movies" :key="movies.id">
            <div class="movies" v-if="MoviesStore.preview">
              <button class="series-btn" @click="MoviesStore.openSeries">
                <img
                  class="slider-img"
                  :src="series.image"
                  :alt="series.title"
                />
              </button>
            </div>
            <div class="open-series" v-else>
              <div class="series-card">
                <img
                  class="slider-img"
                  :src="series.image"
                  :alt="series.title"
                />

                <div class="block-info">
                  <div class="block-ratin">
                    <h2 class="title2">{{ series.title }}</h2>
                    <span class="rating"
                      >Рейтинг:
                      <span class="rating-number">{{
                        series.rating
                      }}</span></span
                    >
                  </div>
                  <button class="xmark-btn" @click="MoviesStore.removeSeries">
                    <XMark />
                  </button>
                </div>
                <p class="description">
                  {{ series.description }}
                </p>
                <div class="block-btn">
                  <button class="play-btn"><Play /> Смотреть</button>
                  <button class="plus-btn"><Plus /> Мой Список</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
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
      padding-bottom: 30px;
    }
    .series-btn {
      border: none;
      cursor: pointer;
      background: none;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
    & .slider-img {
      width: 350px;
      height: 190px;
    }
  }
  & .open-series {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    & .title2 {
      color: $white;
      font-weight: 500;
      margin-top: 10px;
    }
    & .description {
      font-size: 14px;
      color: $half;
      margin: 15px 0;
    }
    & .block-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .rating {
        color: $white;
        font-size: 16px;
        font-weight: 500;
        padding-top: 20px;
        margin-bottom: 120px;
      }
      & .rating-number {
        color: $red;
        font-size: 20px;
        font-weight: 700;
        margin-left: 5px;
      }
      & .xmark-btn {
        border: none;
        cursor: pointer;
        background: none;
      }
    }
    & .block-btn {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-top: 10px;
      & .play-btn {
        display: flex;
        align-items: center;
        flex-direction: row;
        transition: all .2s;
        margin-right: 10px;
        border-radius: 5px;
        padding: 7px 15px;
        cursor: pointer;
        font-size: 18px;
        color: $black;
        border: none;
        &:hover {
          transform: scale(1.05);
        }
      }
      & .plus-btn {
        display: flex;
        align-items: center;
        flex-direction: row;
        transition: all .2s;
        background-color: $half;
        border-radius: 5px;
        padding: 7px 15px;
        cursor: pointer;
        font-size: 18px;
        color: $white;
        border: none;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
