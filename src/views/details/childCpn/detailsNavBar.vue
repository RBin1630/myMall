<template>
  <div class="details-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(title, index) in titles" 
        class="titleItem"
        @click="titleClick(index)"
        :class="{active: currentIndex === index}">
        {{title}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailsNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: relative;
}
.titles {
  display: flex;
  font-size: 14px;
}
.titleItem {
  flex: 1;
}
.back {
  position: absolute;
  top: 7px;
  left: 15px;
}
.active {
  color: var(--color-high-text);
}
</style>