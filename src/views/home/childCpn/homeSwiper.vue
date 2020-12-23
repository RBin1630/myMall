<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoaded"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isloaded: true
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperLoaded() {
      if (this.isloaded) {
        this.$emit('swiperImgLoaded');
        // 只需要发送一次就够了
        this.isloaded = false;
      }
    }
  }
};
</script>

<style>
</style>