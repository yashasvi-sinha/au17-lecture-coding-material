import axios from "axios"
export const USER_LOGIN = "USER_LOGIN"


export const userLogin = (userEmail, userPassword) => {
    
    return async (dispatch) => {

        const userCred = {
            email: userEmail,
            pass: userPassword
        }

        const response = await axios.post('/api/login', userCred)

        const userData = response.data
        console.log(`🚀 ~ return ~ userData`, userData)

        dispatch({
            type: USER_LOGIN,
            payload: {
                token: userData.token,
                isLoggedIn: true
            }
        })

    }
}