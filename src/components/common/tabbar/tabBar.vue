<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
}
</script>

<style>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    background-clip: #f6f6f6;
    background-color: #f6f6f6;
    font-size: 14px;
    box-shadow: 0 -1px 3px rgba(100, 100, 100, .2);
  }
</style>