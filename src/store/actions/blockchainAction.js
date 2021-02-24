import axios from 'axios';
import { successToaster, errorToaster } from "../../utils/toaster";
const serverUrl = process.env.REACT_APP_SERVER_URL

export function getDetails(id) {
return async (dispatch) => {
    try {
      let details = await axios.get(`${serverUrl}/product/${id}`)

      dispatch(setLoading(false))
      dispatch(setError(null))
      dispatch({
        type: 'BLOCKCHAIN_DETAIL',
        payload: details.data
      })
    } catch (error) {
      dispatch(setLoading(false))
      errorToaster('Oops!', error.response.data.message)
      if(error.response.status === 404){
        dispatch(setError(404))
        dispatch(setError(null))
      }
      dispatch(setError(error))
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