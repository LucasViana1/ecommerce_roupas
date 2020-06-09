interface SearchState {
  readonly openSearch: boolean;
}

const INITIAL_STATE: SearchState = {
  openSearch: false,
};

const search = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case '@search/OPEN':
      // console.log('state - action');
      // console.log(state);
      // console.log(action);
      return {
        ...state,
        openSearch: action.open,
      };
    default:
      return state;
  }
};

export default search;
