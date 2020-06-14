export function openModalCart(open: boolean) {
  return {
    type: '@cart/OPEN',
    open,
  };
}

export function putProductInCart(product: object) {
  return {
    type: '@cart/PUT_PRODUCT_IN_CART',
    newProduct: product,
  };
}

export function removeProductFromCart(idRemove: number) {
  return {
    type: '@cart/REMOVE_PRODUCT_FROM_CART',
    idRemove,
  };
}

export function cartQuantity(amount: number) {
  return {
    type: '@cart/CART_QUANTITY',
    amount,
  };
}
