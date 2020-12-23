export default {
  addCounter(state, oldProduce) {
    oldProduce.count++;
  },
  addToCart(state, payload) {
    payload.checked = false;
    state.cartList.push(payload);
  },
}
