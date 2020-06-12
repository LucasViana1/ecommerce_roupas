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
