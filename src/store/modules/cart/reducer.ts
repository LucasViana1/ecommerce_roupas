interface CartState {
  readonly openCart: boolean;
}

// interface cartProps {
//   openCart: boolean;
// }

const INITIAL_STATE: CartState = {
  openCart: false,
};

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
    default:
      return state;
  }
};

export default cart;
