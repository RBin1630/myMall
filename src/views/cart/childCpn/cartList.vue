<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import cartListItem from './cartListItem';

export default {
  name: 'cartList',
  components: {
    cartListItem,
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style>

</style>