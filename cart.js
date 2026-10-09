function addItem(cart, item, quantity) {
  if(typeof cart !== 'object' || !cart  ) {
    return {};
  }
  if(!item || typeof item !== 'string') {
    return cart;
  }
  const itemQuantity = Number(quantity);
  if(itemQuantity <= 0 || isNaN(itemQuantity)) {
    return cart;
  }
  cart[item] = (cart[item] || 0) + itemQuantity;
  return cart;

}
function removeItem(cart, item) {
  if(typeof cart !== 'object' || !cart) {
    return {};
  }
  if(item && item in cart) {
    delete cart[item];
  }
  return cart;

}
function getTotalItems(cart) {
  if(typeof cart !== 'object' || !cart) {
    return 0;
  }
  let total = 0;
  for(const item in cart) {
    const quantity = Number(cart[item]);

    if(quantity > 0) {
      total = total + quantity;
    }
  }
  return total;

}

module.exports = {
  addItem,
  removeItem,
  getTotalItems

}