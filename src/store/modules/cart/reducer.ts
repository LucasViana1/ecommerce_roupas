import produce from 'immer';

interface CartState {
  readonly openCart: boolean;
  readonly productList: any;
}

// interface cartProps {
//   openCart: boolean;
// }

const INITIAL_STATE: CartState = {
  openCart: false,
  productList: [],
};

const product: any = {};
let count: number;
let productFound: any;

const cart = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case '@cart/OPEN':
      // console.log('state - action');
      // console.log(state);
      // console.log(action);
      return {
        ...state,
        openCart: action.open,
      };
    case '@cart/PUT_PRODUCT_IN_CART':
      return produce(state, (draft) => {
        console.log('state');
        console.log(state);
        console.log('draft');
        console.log(draft);
      });
    // console.log('state - action product in cart');
    // console.log(state);
    // console.log(action);
    // productFound = state.productList.filter(
    //   (item: any) => item.id === action.newProduct.id
    // );
    // console.log('productFound quantity and length');
    // console.log(productFound);
    // console.log([productFound.quantity]);
    // console.log(productFound.length);
    // // AJUSTAR LOGICA DE ADICIONAR MAIS UM NO CARRINHO
    // productFound.length === 0
    //   ? (count = 1)
    //   : (count = productFound.quantity + 1);

    // product = {
    //   quantity: count,
    //   ...action.newProduct,
    // };
    // return {
    //   ...state,
    //   productList: [...state.productList, product],
    // };
    default:
      return state;
  }
};

export default cart;
