<template>
  <div class="bottom-bar">
    <div class="item-bar item-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="item-bar item-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailsBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;

    display: flex;
    text-align: center;

    box-shadow: 0 1px 4px rgba(100, 100, 100, .3);
  }
  .item-bar {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-bar>div {
    flex: 1;
  }
  .item-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 0 auto;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
  }
  .item-left .service {
    background-position: 0 -52px;
  }
  .item-left .shop {
    background-position: 0 -98px;
  }
  .item-left .text {
    font-size: 13px;
  }
  .item-right {
    line-height: 49px;
    color: #fff;
    font-size: 15px;
  }
  .cart {
    background-color: #ffe817;
    color: #333;
  }
  .buy {
    background-color: #f69;
  }
</style>