// 先把Toast组件导入进来
import Toast from './Toast';

const obj = {};
// 调用install方法的时候默认传入一个Vue实例
obj.install = function(Vue) {
  // 1.创建组件构造器， 此时传过来的Toast组件在Vue中并没有创建出来
  const toastConstruct = Vue.extend(Toast);

  // 2.使用new关键字，实例化这个组件对象
  const toast = new toastConstruct();

  // 3.手动的把这个组件对象挂载到某个节点中 这里手动创建了一个div进行挂载
  toast.$mount(document.createElement('div'));

  // 4.挂载完成后 就能得到toast.$el -> 就是上面的div
  // 把这个元素添加到body中
  document.body.appendChild(toast.$el);

  // 给Vue的原型对象添加一个新的属性$toast 并且这个属性指向已经挂载到某个节点的toast组件对象
  Vue.prototype.$toast = toast;
}

export default obj;