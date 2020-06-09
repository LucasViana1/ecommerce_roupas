const INITIAL_STATE = {
  data: [],
};

let product;

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@product/SET_PRODUCTS':
      console.log('state - action set product');
      console.log(state);
      console.log(action);
      return {
        ...state,
        data: action.data,
      };
    case '@product/GET_PRODUCT_BY_ID':
      console.log('state - action get by id product');
      console.log(state);
      console.log(action);
      product = state.data.filter((item) => item.id === Number(action.id));
      console.log(product);
      [product] = product;

      return {
        ...state,
        product,
      };
    default:
      return state;
  }
}
