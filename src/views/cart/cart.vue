<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <div slot="center">
        购物车({{cartListLength}})
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';

import cartList from './childCpn/cartList';
import cartBottomBar from './childCpn/cartBottomBar';

export default {
  name: 'cart',
  components: {
    Scroll,
    NavBar,
    cartList,
    cartBottomBar,
  },
  computed: {
    ...mapGetters(['cartListLength'])
  },
  activated() {
    // 每次添加了商品我们就让滚动的内容refresh 使其得到正确的高度
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
}
.cart-navbar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
}
</style>