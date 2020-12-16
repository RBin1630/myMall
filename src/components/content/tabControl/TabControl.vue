<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles"
    :class="{active: index === currentIndex}"
    @click="itemClick(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
  }

  .tab-control div {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .tab-control span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>