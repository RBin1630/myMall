<template>
  <div v-if="Object.keys(detailsInfo).length !== 0" class="details-goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="goods-desc">
        {{detailsInfo.desc}}
      </div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailsInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item, index) in detailsInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailsGoodsInfo',
  props: {
    detailsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imageListLength: 0,
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imageListLength) {
        this.$emit('imgLoad');
      }
    },
  },
  watch: {
    detailsInfo() {
      this.imageListLength = this.detailsInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style>
.details-goods-info {
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  position: relative;
  padding: 0 15px;
}
.start,
.end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.end::after {
  content: '';
  position: absolute;
  /* bottom: 0; */
  width: 5px;
  height: 5px;
  background-color: #333;
}
.end::after {
  right: 10px;
}
.goods-desc {
  padding: 15px 0;
  font-size: 14px;
  text-align: center;
}
.info-key {
  padding: 10px 0 10px 15px;
}
.info-list img {
  width: 100%;
}
</style>