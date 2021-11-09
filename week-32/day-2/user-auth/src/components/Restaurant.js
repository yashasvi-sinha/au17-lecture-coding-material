import { Navigate } from 'react-router-dom'
function Restaurant() {
    const userLoggedIn = false

    if (userLoggedIn === false) {
        return <Navigate to="/login" /> 
    }

    return (
        <div>
            <h1>Restaurant</h1>            
        </div>
    )
}

export default Restaurant
