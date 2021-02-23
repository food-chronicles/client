const initialState = {

}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer