import axios from "axios"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const GET_ALL_RESTAURANT = "GET_ALL_RESTAURANT"
export const ADD_RESTAURANT = "ADD_RESTAURANT"

export const userLogin = (userEmail, userPassword) => {
    
    return async (dispatch) => {

        const userCred = {
            email: userEmail,
            pass: userPassword
        }

        const response = await axios.post('/api/login', userCred)

        const userData = response.data
        console.log(`🚀 ~ return ~ userData`, userData)

        localStorage.setItem('userToken', userData.token)
        localStorage.setItem('userLoggedIn', true)

        dispatch({
            type: USER_LOGIN,
            payload: {
                token: userData.token,
                isLoggedIn: true
            }
        })

    }
}


export const userLogout = () => {

    localStorage.removeItem('userToken')
    localStorage.removeItem('userLoggedIn')

    return {
        type: USER_LOGOUT,
        payload: {
            token: null,
            isLoggedIn: false
        }
    }

}


export const getRestaurant = () => {
    
    return async (dispatch, getState) => {
        
        const reduxState = getState()
        console.log(`🚀 ~ return ~ state`, reduxState)

        const config = {
            headers: {
                token: reduxState.user.token
            }
        }

        const response = await axios.get('/api/restaurants', config )
        
        const restaurants = response.data
        console.log(`🚀 ~ return ~ restaurants`, restaurants)

        dispatch({
            type: GET_ALL_RESTAURANT,
            payload: restaurants
        })

    }
}

export const addRestaurant = (restaurantData) => {

    return async (dis, getState) => {

        const reduxState = getState()
        console.log(`🚀 ~ return ~ state`, reduxState)

        const config = {
            headers: {
                token: reduxState.user.token,
                "content-type": "multipart/form-data"
            }
        }

        const response = await axios.post('/api/restaurants', restaurantData, config)
        console.log(`🚀 ~ addRestaurant ~ response.data`, response.data)

        

        dis({
            type: ADD_RESTAURANT,
            payload: response.data
        })
        
    }
}