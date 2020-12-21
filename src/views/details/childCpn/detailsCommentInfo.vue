<template>
  <div v-if="Object.keys(rate).length !== 0" class="comment">
    <div class="title">
      <span>用户评价({{ rate.cRate }})</span>
      <a>更多</a>
    </div>
    <div class="content">
      <div class="head">
        <img :src="rate.list[0].user.avatar" alt="" />
        <div>{{ rate.list[0].user.uname }}</div>
      </div>
      <div class="body">
        <p class="body-comment">{{ rate.list[0].content }}</p>
        <div class="body-info">
          <span>{{ rate.list[0].created | showDate}}</span>
          <span class="body-style">{{ rate.list[0].style }}</span>
        </div>
        <img v-if="rate.list[0].images" v-for="img in rate.list[0].images" :src="img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {farmatDate} from 'common/utils';

export default {
  name: "detailsCommentInfo",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);

      return farmatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
};
</script>

<style scoped>
.comment {
  padding: 20px 15px;
  background-color: #fff;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.title span {
  font-size: 16px;
}
.content {
  padding: 10px 0;
}
.head {
  display: flex;
  padding: 10px 0;
}
.head img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #f2f5f8;
}
.head div {
  line-height: 40px;
  padding-left: 15px;
}
.body img{
  width: 70px;
  margin-right: 5px;
}
.body-comment {
  padding: 10px 5px;
}
.body-info {
  font-size: 14px;
  padding-bottom: 10px;
}
.body-style {
  color: #999;
  padding: 10px 5px;
}
</style>