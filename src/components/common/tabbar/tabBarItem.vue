<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!Active"><slot name="tab-bar-item-icon"></slot></div>
      <div v-else><slot name="tab-bar-item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="tab-bar-item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: {
      type: String,
      default: true,
    },
    activeColor: {
      type: String,
      default: 'blue',
    }
  },
  computed: {
    Active() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.Active ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 55px;
    text-align: center;
    padding: 3px 0;
  }
  .tab-bar-item img {
    margin-top: 3px;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
</style>
