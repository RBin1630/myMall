<template>
  <div class="cart-list-item">
    <div class="checkbutton">
      <check-button :isChecked="product.checked" @click.native="checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.img" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <span class="item-price left">{{product.realPrice}}</span>
        <span class="item-count right">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: "cartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checked() {
      // 点击后我们要去修改模型中的checked
      this.product.checked = !this.product.checked;
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.checkbutton {
  width: 20px;
  height: 20px;
}
.checkbutton img {
  padding: 5px;
}
.item-img {
  padding: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-bottom {
  margin-top: 20px;
}
.info-bottom .item-price {
  color: orangered;
}
.left {
  float: left;
}
.rigth {
  float: right;
}
</style>