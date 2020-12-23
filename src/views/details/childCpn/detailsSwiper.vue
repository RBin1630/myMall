<template>
  <swiper class="details-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <a href="">
        <img :src="item" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "detailsSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.details-swiper {
  height: 300px;
  overflow: hidden;
}
</style>