const INITIAL_STATE = {
  openCart: false,
};

export default function cart(state = INITIAL_STATE, action) {
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
}
