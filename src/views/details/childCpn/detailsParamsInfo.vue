<template>
  <div v-if="Object.keys(itemParams).length !== 0" class="params-info">
    <table class="info-size" v-for="(tables, index) in itemParams.rule.tables" :key="index">
      <tr v-for="(tr, indey) in tables" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(item, indey) in itemParams.info.set" :key="indey">
        <td class="key">{{item.key}} ：</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'detailsParamsInfo',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    },
  }
}
</script>

<style scoped>
.params-info {
  background-color: #fff;
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.info-params {
  border-top: 1px solid rgba(0,0,0,.1);
}
.info-params .key {
  width: 55px;
}
.info-params .value {
  color: #eb4868;
}
</style>
