import axios from 'axios';
import { successToaster, errorToaster } from "../../utils/toaster";

export function getDetails(id) {
return async (dispatch) => {
    try {
      let details = await axios.get(`http://localhost:4000/product/${id}`)

      dispatch(setLoading(false))
      dispatch(setError(null))
      dispatch({
        type: 'BLOCKCHAIN_DETAIL',
        payload: details.data
      })
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError(error))
      errorToaster('Oops!', error.message)
    }
  }
}

function setLoading (status) {
  return {
    type: 'SET_LOADING',
    payload: status
  }
}

function setError (error) {
  return {
    type: 'SET_ERROR',
    payload: error
  }
}