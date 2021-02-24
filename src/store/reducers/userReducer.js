const initialState = {
  error: null,
  success: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_REGISTER":
      return {
        ...state,
        success: action.payload
      }
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