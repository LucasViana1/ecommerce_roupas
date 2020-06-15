import produce from 'immer';

interface CartState {
  readonly openCart: boolean;
  readonly productList: any;
  readonly idRemove: number;
  readonly amount: number;
  readonly total: number;
}

// interface cartProps {
//   openCart: boolean;
// }

const INITIAL_STATE: CartState = {
  openCart: false,
  productList: [],
  idRemove: -1,
  amount: 0,
  total: 0,
};

const product: any = {};
let count: number;
let productFound: any;
let productsInCartString: any;
let productsInCart: any = [];
let index: number;

function cart(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@cart/OPEN':
      return {
        ...state,
        openCart: action.open,
      };
    case '@cart/PUT_PRODUCT_IN_CART':
      // productsInCartString = window.localStorage.getItem('productsInCart');
      // productsInCartString
      //   ? (productsInCart = JSON.parse(productsInCartString))
      //   : (productsInCart = []);

      // productsInCart.push(action.newProduct);

      // window.localStorage.setItem(
      //   'productsInCart',
      //   JSON.stringify(productsInCart)
      // );

      return {
        ...state,
        // productList: productsInCart,
        productList: [...state.productList, action.newProduct],
      };

    case '@cart/REMOVE_PRODUCT_FROM_CART':
      productsInCart = state.productList;
      // productsInCartString =
      //   window.localStorage.getItem('productsInCart') || [];
      // productsInCart = JSON.parse(productsInCartString);

      index = productsInCart.findIndex((p: any) => p.id === action.idRemove);

      productsInCart.splice(index, 1);

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
    case '@cart/CART_TOTAL':
      console.log('state total');
      console.log(state);
      return {
        ...state,
        total: state.total + action.total,
      };
    case '@cart/CHECK_OUT':
      return {
        ...state,
        productList: [],
        amount: 0,
        total: 0,
      };
    // case '@cart/CART_LOAD':
    //   productsInCartString = window.localStorage.getItem('productsInCart');

    //   productsInCartString
    //     ? (productsInCart = JSON.parse(productsInCartString))
    //     : (productsInCart = []);
    //   return {
    //     ...state,
    //     productList: productsInCart,
    //   };
    default:
      return state;
  }
}

export default cart;
