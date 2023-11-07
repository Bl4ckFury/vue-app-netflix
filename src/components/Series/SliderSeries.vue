<script setup>

import { useSeriesStore } from "../../stores/series";

const SeriesStore = useSeriesStore();

defineProps({
  series: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  

  
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.series {
}
</style>
