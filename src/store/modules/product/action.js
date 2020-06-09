export function setProductsStorage(data) {
  return {
    type: '@product/SET_PRODUCTS',
    data,
  };
}

export function getProductById(id) {
  return {
    type: '@product/GET_PRODUCT_BY_ID',
    id,
  };
}
