import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'lib-flexible/flexible';

// 导入fastclick插件
import fastclick from 'fastclick';
// 在Body标签中使用
fastclick.attach(document.body);

// 导入图片懒加载插件
import lazyLoad from 'vue-lazyload';
// 使用插件
Vue.use(lazyLoad, {
  loading: require('./assets/img/common/placeholder.png'),
})

// 导入toast文件夹中index.js导出的对象
import toast from 'components/common/toast';
// 调用use方法 会去调用toast中的install方法
Vue.use(toast);

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
