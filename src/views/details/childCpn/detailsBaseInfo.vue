<template>
  <div v-if="Object.keys(detailsData).length !== 0" class="details-base-info">
    <div class="info-title">{{detailsData.title}}</div>
    <div class="info-price">
      <span class="new-price">{{detailsData.price}}</span>
      <span class="old-price">{{detailsData.oldPrice}}</span>
      <span class="discount">{{detailsData.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{detailsData.columns[0]}}</span>
      <span>{{detailsData.columns[1]}}</span>
      <span>{{detailsData.services[detailsData.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in detailsData.services.length-1">
        <img :src="detailsData.services[index-1].icon" alt="">
        <span>{{detailsData.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailsBaseInfo',
  props: {
    detailsData: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style>
.details-base-info {
  margin-top: 15px;
  padding: 0 7px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.info-title {
  padding-bottom: 10px;
  color: var(--color-text);
  font-size: 16px;
}
.info-price {
  margin-bottom: 20px;
}
.new-price {
  color: var(--color-high-text);
  font-size: 24px;
  margin-right: 5px;
}
.old-price {
  font-size: 14px;
  text-decoration: line-through;
  margin-right: 5px;
}
.discount {
  font-size: 12px;
  font-weight: 500;
  background-color: var(--color-high-text);
  color: #fff;
  padding: 2px 5px;
  border-radius: 8px;

  position: relative;
  top: -5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item {
  font-size: 13px;
}
.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
}
</style>