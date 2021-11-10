import { useDispatch } from "react-redux"
import { userLogout } from "../actions"

function Logout() {

    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(userLogout())

    }


    return (
        <div>
            <button onClick={handleClick} >Log Out</button>
        </div>
    )
}

export default Logout
