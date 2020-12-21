import {debounce} from 'common/utils';

export const imgLoadedMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);

    this.imgLoaded = () => {
      refresh();
    } 
    this.$bus.$on("itemImgLoaded", this.imgLoaded);
  },
  data() {
    return {
      // 保存监听图片加载完后执行的函数
      imgLoaded: null,
    }
  }
}