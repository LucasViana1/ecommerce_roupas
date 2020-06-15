const INITIAL_STATE = {
  data: [],
};

let product;

export default function cart(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@product/SET_PRODUCTS':
      return {
        ...state,
        data: action.data,
      };
    case '@product/GET_PRODUCT_BY_ID':
      product = state.data.filter((item: any) => item.id === Number(action.id));
      [product] = product;

      return {
        ...state,
        product,
      };
    default:
      return state;
  }
}
