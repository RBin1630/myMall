export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 把payload中的数据保存到cartList中
      // 当iid不一样时我们给payload添加一个count属性赋值为1，并添加到cartlist中
      // 当iid一样的情况下 我们给payload的count属性加1
      let oldProduce = context.state.cartList.find(item => {
        // 数组的find方法：当返回值为true时 就把当前这个item作为返回值
        return payload.iid === item.iid;
      });
      // 当匹配不到iid相等的情况 oldProduct为undefined 说明这个商品是新添加的 
      if (!oldProduce) {
        // 当oldProduct为空时执行
        payload.count = 1;
        // state.cartList.push(payload);
        context.commit('addToCart', payload);
        
        resolve('添加到购物车成功');
      } else {
        // 当oldProduce不为空时执行
        // oldProduce.count += 1;
        context.commit('addCounter', oldProduce);
        
        resolve('商品数目加1');
      }
    })
  }
}