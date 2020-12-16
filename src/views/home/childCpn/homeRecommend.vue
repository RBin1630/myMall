<template>
  <div class="home-recom">
    <div v-for="item in recommends" class="home-recom-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommends: {
      tupe: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
  .home-recom {
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .home-recom-item {
    flex: 1;
    padding: 10px;
  }

  .home-recom-item img {
    width: 100%;
    margin-bottom: 5px;
  }
</style>