export function setProductsStorage(data: any) {
  return {
    type: '@product/SET_PRODUCTS',
    data,
  };
}

export function getProductById(id: number) {
  return {
    type: '@product/GET_PRODUCT_BY_ID',
    id,
  };
}
