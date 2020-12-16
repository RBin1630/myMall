<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="topscrollposition"
      :pullUpLoad="true"
      @pullingUp="loadMore">

      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoaded="swiperImgLoaded"></home-swiper>

      <!-- 推荐模块 -->
      <home-recommend :recommends="recommends"></home-recommend>

      <!-- 流行模块 -->
      <in-fathion></in-fathion>

      <!-- 导航控制 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"></tab-control>

      <!-- 商品展示 -->
      <goods-list :list="goods[currentType].list"></goods-list>
    </scroll>

    <!-- 返回顶部按钮 -->
    <back-top @click.native="topClick" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
// 导入私有的组件
import homeSwiper from "./childCpn/homeSwiper";
import homeRecommend from "./childCpn/homeRecommend";
import inFathion from "./childCpn/inFathion";

// 导入一些公共的组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import backTop from "components/common/backtop/backTop";
import {debounce} from 'common/utils';

// 网络请求导入
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowTop: false,
      tabControlTop: 0,
    };
  },
  components: {
    NavBar,
    homeSwiper,
    homeRecommend,
    inFathion,
    TabControl,
    GoodsList,
    Scroll,
    backTop,
  },
  created() {
    // 获取轮播图和推荐模块的数据
    this.getHomeMultidata(),
    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);

    this.$bus.$on("itemImgLoaded", () => {
      refresh();
    });
  },
  methods: {
    // 事件监听
    tabClick(index) {
      console.log(index);
      if (index === 0) {
        this.currentType = "pop";
      } else if (index === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
    },
    topClick() {
      // 实现点击回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 判断当前页面滚动的位置 控制v-show是否显示
    topscrollposition(position) {
      // 当拉到1000的位置就把isShowTop设置为true
      this.isShowTop = -position.y > 1000;
    },
    // 加载更多的方法
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoaded() {
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
    },


    // 网络请求
    // 获取轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.recommend.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 当数据加载完后我们要告诉scroll实例 我们已经完成了一次加载 可以进行下一次加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 44px;
  padding-bottom: 49px; */
  height: 100vh;
}
.nav-home {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>
