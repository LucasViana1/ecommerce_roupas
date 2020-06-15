interface SearchState {
  readonly openSearch: boolean;
}

const INITIAL_STATE: SearchState = {
  openSearch: false,
};

const search = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case '@search/OPEN':
      return {
        ...state,
        openSearch: action.open,
      };
    default:
      return state;
  }
};

export default search;
