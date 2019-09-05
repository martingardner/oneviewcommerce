const AppReducers = (state = {}, action) => {
  switch (action.type) {
    case "APPLY_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default AppReducers;
