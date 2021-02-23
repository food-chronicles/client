const initialState = {
  blockchainDetail: {
    chain: []
  },
  qrCodeLink: '',
  isLoading: false,
  error: null
}

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BLOCKCHAIN_DETAIL':
      return {
        ...state,
        blockchainDetail: action.payload
      }

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default blockchainReducer