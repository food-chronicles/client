import axios from 'axios'
import { successToaster, errorToaster } from "../../utils/toaster";

export const register = (data) => {
    try {
        return async (dispatch) => {
            let url = `http://localhost:4000/register`
            let payload = {
                username: data.username,
                password: data.password,
                email: data.email,
                company_name: data.company_name,
                category: data.category
            }
            const response = await axios({
                method: 'POST',
                url,
                data: payload
            }
            )
            return response
        }
    } catch (error) {
        errorToaster("Oops!", error.message)
        console.log(error)
    }
}

function setError(error) {
    return {
      type: "SET_ERROR",
      payload: error,
    };
}