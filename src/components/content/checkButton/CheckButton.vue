<template>
    <div class="checkbutton" :class="{check: isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.checkbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaa;
  border-radius: 50%;
}
.check {
  border-color: red;
  background-color: red;
}
</style>