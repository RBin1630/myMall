<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/category.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/shopcart.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/profile.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "components/common/tabbar/tabBar.vue";
import tabBarItem from "components/common/tabbar/tabBarItem.vue";
export default {
  name: "mainTabbar",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style>
  
</style>