<template>
  <div class="bottom-bar">
    <div class="check-all" @click="checkedAll">
      <check-button class="check-button" :isChecked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：</span>
      <span class="sum">{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="goCalc">
      <div>去结算({{cartListLength}})</div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: 'cartBottomBar',
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked;
      }).reduce((preVal, Val) => {
        return preVal + Val.realPrice * Val.count;
      }, 0).toFixed(2);
    },
    // 判断购物车中被选中商品额长度
    cartListLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      // 判断全选按钮处于选中还是不选中
      // 根据cartList中的checked来决定，只要有一个checked为false就返回false

      // 购物车内没商品时 全选按钮应为false
      if (this.$store.state.cartList.length === 0) return false;
      return !(this.$store.state.cartList.find(item => !item.checked));
    }
  },
  methods: {
    checkedAll() {
      // 当商品全部都处于选中状态状态时，把商品的全部checked改为false
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      } else {  // 当商品部分处于选中状态时，把全部商品的checked改为true
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      }
    },
    goCalc() {
      if (this.cartListLength === 0) {
        // 当购物车中的商品为空或者都没被选中时执行
        this.$toast.showToast('请选择要购买的商品', 1000);
      } else {
        this.$toast.showToast('去结算还没做~')
      }
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  font-size: 14px;
  background-color: #eee;
}
.check-all {
  display: flex;
  line-height: 40px;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
}
.check-all span {
  margin-left: 5px;
}
.total-price {
  flex: 1;
  margin-left: 15px;
}
.total-price .sum {
  color: orangered;
}
.calculate {
  width: 100px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background-color: orangered;
}
</style>