const AppReducers = (
  state = { searchrow: false, searchrowposts: {} },
  action
) => {
  switch (action.type) {
    case "APPLY_DATA":
      return {
        ...state,
        data: action.data
      };
    case "SEARCH_ROW_POSTS":
      return {
        ...state,
        searchrowposts: action.data
      };
    default:
      return state;
  }
};

export default AppReducers;
