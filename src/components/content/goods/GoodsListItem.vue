<template>
  <div class="goods-item">
    <a :href="item.link">
      <img :src="item.show.img" alt="" @load="imgLoaded" />
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.orgPrice }}</span> ♥
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoaded() {
      this.$bus.$emit('itemImgLoaded');
    }
  }
};
</script>

<style>
.goods-item {
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 14px;
  text-align: center;
}
.goods-info p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-info::before {
  content: '';
  background: url(~assets/img/common/collect.svg);
}
.price {
  color: var(--color-high-text);
}
</style>