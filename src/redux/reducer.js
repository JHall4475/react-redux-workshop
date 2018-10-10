const initialState = {
  name: "",
  luckyNumber: ""
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "UPDATE_NAME_AND_NUMBER":
      return {
        ...state,
        name: actions.payload.nameInput,
        luckyNumber: actions.payload.luckyNumber
      };
    default: return state
  }
};

export default reducer;
