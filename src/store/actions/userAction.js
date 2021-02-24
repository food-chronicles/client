import axios from 'axios'
import { successToaster, errorToaster } from "../../utils/toaster";
const serverUrl = process.env.REACT_APP_SERVER_URL

export function register (data) {
    return async (dispatch) => {
    try {
      let url = `${serverUrl}/register`
      let payload = {
          username: data.username,
          password: data.password,
          email: data.email,
          company_name: data.company_name,
          category: data.category
      }

      const response = await axios({
          url,
          method: 'POST',
          data: payload
      })

        successToaster('Registration complete!', 'Please check your email')
        dispatch({
          type: 'SUCCESS_REGISTER',
          payload: true
        })
      } catch (error) {
        errorToaster("Oops!", error.response.data.message)
      }
    } 
}

function setError(error) {
    return {
      type: "SET_ERROR",
      payload: error,
    };
}