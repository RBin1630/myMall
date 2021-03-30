<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        v-show="isTabFixed"
        :class="{fixed: isTabFixed}"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
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
        :class="{fixed: isTabFixed}"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"></tab-control>

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
// import {debounce} from 'common/utils';
import {imgLoadedMixin, backTopMixin} from 'common/mixin';

// 网络请求导入
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  mixins: [imgLoadedMixin, backTopMixin],
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
      tabControlTop: 0,
      isTabFixed: false,
      saveY: 0,
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
  },
  created() {
    // 获取轮播图和推荐模块的数据
    this.getHomeMultidata(),
    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  
  activated() {
    // 解决有时候会回弹 我们刷新一下
    this.$refs.scroll.refresh();
    // 回来时滚动到 记录的位置saveY
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 记录离开时的位置 保存到saveY
    // console.log(this.$refs.scroll.scroll.y);
    this.saveY = this.$refs.scroll.getScrollY();

    // 当首页处于非活跃状态 我们把事件总线的方法取消 (没必要继续刷新)
    this.$bus.$off('itemImgLoaded', this.imgLoaded)
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    topClick() {
      // 实现点击回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听滚动
    contentScroll(position) {
      // 当拉到1000的位置就把isShowTop设置为true
      this.isShowTop = (-position.y) > 1000;

      // 当到达tabcontrol的offsetTop的位置时 我们让isFixed为True
      this.isTabFixed = (-position.y) > this.tabControlTop;
    },
    // 加载更多的方法
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoaded() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
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

  position: relative;
  z-index: 9;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; */
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.fixed {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>
