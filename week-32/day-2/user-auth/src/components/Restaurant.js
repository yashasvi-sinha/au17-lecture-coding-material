import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { getRestaurant } from '../actions'
import Logout from './Logout'
function Restaurant() {

    const userLoggedIn = useSelector(state => state.user.isLoggedIn)
    const allRestaurants = useSelector(state => state.restaurant)
    const dispatch = useDispatch()


    useEffect(() => {
        
        if (userLoggedIn === true) {
            dispatch(getRestaurant())
        }

    }, [])


    if (userLoggedIn === false) {
        return <Navigate to="/login" /> 
    }

    

    return (
        <div>
            <Logout />
            <h1>Restaurant</h1>
            ul
            <ul>
                {allRestaurants.map(rest => <li key={rest._id}>{rest.name}</li>)}
            </ul>
            <Link to="/restaurants/add" >Add Restaurant</Link>
        </div>
    )
}

export default Restaurant
