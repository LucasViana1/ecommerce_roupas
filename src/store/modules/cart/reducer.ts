import produce from 'immer';

interface CartState {
  readonly openCart: boolean;
  readonly productList: any;
  readonly idRemove: number;
  readonly amount: number;
}

// interface cartProps {
//   openCart: boolean;
// }

const INITIAL_STATE: CartState = {
  openCart: false,
  productList: [],
  idRemove: -1,
  amount: 0,
};

const product: any = {};
let count: number;
let productFound: any;
const productsInCartString = '';
let productsInCart: any = [];
let index: number;

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
      console.log('state - action product in cart');
      console.log(state);
      console.log(action);

      // // localstorage anterior
      // productsInCartString =
      //   window.localStorage.getItem('productsInCart') || '';
      // // insere localstorage
      // productsInCart = JSON.parse(productsInCartString);
      // console.log('productsInCart json');
      // console.log(productsInCart);
      // window.localStorage.setItem(
      //   'productsInCart',
      //   JSON.stringify(productsInCart)
      // );

      return {
        ...state,
        productList: [...state.productList, action.newProduct],
      };

    case '@cart/REMOVE_PRODUCT_FROM_CART':
      console.log('state - remove from cart');
      console.log(state);
      console.log(action);

      productsInCart = state.productList;
      console.log('productsInCart antes');
      console.log(productsInCart);
      index = productsInCart.findIndex((p: any) => p.id === action.idRemove);
      console.log('index');
      console.log(index);
      productsInCart.splice(index, 1);
      console.log('productsInCart depois');
      console.log(productsInCart);

      // remove localstorage

      return {
        ...state,
        productList: productsInCart,
      };
    case '@cart/CART_QUANTITY':
      console.log('state quantity');
      console.log(state);
      return {
        ...state,
        amount: state.amount + action.amount,
      };
    default:
      return state;
  }
};

export default cart;
