<template>
  <div id="details">
    <details-nav-bar @titleClick="titleClick" class="details-nav" ref="nav"></details-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <details-swiper :topImages="topImages"></details-swiper>

      <details-base-info :detailsData="detailsData"></details-base-info>

      <details-shop-info :shopInfo="shopInfo"></details-shop-info>

      <details-goods-info :detailsInfo="detailsInfo" @imgLoad="imgLoad"></details-goods-info>

      <details-params-info ref="params" :itemParams="itemParams" :rate="rate"></details-params-info>

      <details-comment-info ref="comment" :rate="rate"></details-comment-info>

      <goods-list ref="recommend" class="recommend" :list="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import detailsNavBar from "./childCpn/detailsNavBar";
import detailsSwiper from "./childCpn/detailsSwiper";
import detailsBaseInfo from "./childCpn/detailsBaseInfo";
import detailsShopInfo from "./childCpn/detailsShopInfo";
import detailsGoodsInfo from './childCpn/detailsGoodsInfo';
import detailsParamsInfo from './childCpn/detailsParamsInfo';
import detailsCommentInfo from './childCpn/detailsCommentInfo';

import Scroll from "components/common/scroll/Scroll";
import GoodsList from 'components/content/goods/GoodsList';

// import {debounce} from 'common/utils';
import {imgLoadedMixin} from 'common/mixin';

import { getDetailsData, detailGoods, shopInfo, getRecommend } from "network/details";

export default {
  name: "Details",
  mixins: [imgLoadedMixin],
  components: {
    Scroll,
    detailsNavBar,
    detailsSwiper,
    detailsBaseInfo,
    detailsShopInfo,
    detailsGoodsInfo,
    detailsParamsInfo,
    detailsCommentInfo,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      detailsData: {},
      shopInfo: {},
      // 商品详细数据
      detailsInfo: {},
      // 商品尺码数据
      itemParams: {},
      // 评论数据
      rate: {},
      // 详情页推荐数据
      recommend: [],
      // 保存每个模块的位置信息
      viewOffsetTops: [],
      // 保存导航栏点击后的index值
      currentIndex: 0,
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;

    // 获取详情页数据
    getDetailsData(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 保存详情页的轮播图图片
      this.topImages = data.itemInfo.topImages;
      // 把整合好的数据保存到detailsData中
      // console.log(new detailGoods(data.itemInfo, data.columns, data.shopInfo));
      this.detailsData = new detailGoods(
        data.itemInfo,
        data.columns,
        data.shopInfo
      );
      this.shopInfo = new shopInfo(data.shopInfo);
      // 保存商品详情数据
      this.detailsInfo = data.detailInfo;
      
      // 保存商品尺码数据
      this.itemParams = data.itemParams;
      // console.log(this.itemParams);

      // 保存评论数据
      this.rate = data.rate;
      // console.log(this.rate);

    });

    // 获取详情页推荐数据
    getRecommend().then(res => {
      console.log(res.data.list);
      this.recommend = res.data.list;
    })
  },

  destroyed() {
    // 当页面被销毁时 我们让这个事件不再继续监听
    this.$bus.$off('itemImgLoaded', this.imgLoaded);
  },
  methods: {
    // 详情页商品的图片加载传过来的自定义事件的方法
    imgLoad() {
      this.$refs.scroll.refresh();

      this.viewOffsetTops.push(0);
      this.viewOffsetTops.push(this.$refs.params.$el.offsetTop);
      this.viewOffsetTops.push(this.$refs.comment.$el.offsetTop);
      this.viewOffsetTops.push(this.$refs.recommend.$el.offsetTop);
    },
    titleClick(index) {
      // console.log(index);
      // console.log(this.viewOffsetTops);
      this.$refs.scroll.scrollTo(0, -this.viewOffsetTops[index], 500);
    },
    contentScroll(position) {
      // 保存当前位置的y值
      const positionY = -position.y
      // console.log(positionY);
      // [0, 2897, 3911, 4134]
      for(let i = 0; i < this.viewOffsetTops.length; i++) {
        if ((i < this.viewOffsetTops.length - 1 && positionY >= this.viewOffsetTops[i] && positionY < this.viewOffsetTops[i+1] || (i === this.viewOffsetTops.length - 1 && positionY >= this.viewOffsetTops[i]))) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    }
  },
};
</script>

<style scoped>
#details {
  position: relative;
  height: 100vh;
}
.details-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 9;
  background-color: #fff;
}
.recommend {
  background-color: #fff;
}
</style>