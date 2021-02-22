import axios from 'axios'
export function template () {

}

export const register = (data) => {
    try {
        return async (dispatch) => {
            let url = `http://localhost:4000/register`
            let payload = {
                username: data.username,
                password: data.password,
                email: data.email,
                company_name: data.company_name,
                category: data.category,
                history: data.history
            }
            const response = await axios({
                method: 'POST',
                url,
                data: payload
            }
            )
            console.log(payload, 'from redux');
            return response
        }
    } catch (error) {
        console.log(error)
    }
}