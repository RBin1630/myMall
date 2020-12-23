<template>
  <div class="goods-item" @click="GoodsItemClick">
      <img v-lazy="showImage" alt="" @load="imgLoaded" />
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.orgPrice }}</span> ♥
        <span class="collect">{{ item.cfav }}</span>
      </div>
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
  computed: {
    showImage() {
      return this.item.image || this.item.show.img;
    }
  },
  methods: {
    imgLoaded() {
      this.$bus.$emit('itemImgLoaded');
    },
    GoodsItemClick() {
      this.$router.push('/details/' + this.item.iid);
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