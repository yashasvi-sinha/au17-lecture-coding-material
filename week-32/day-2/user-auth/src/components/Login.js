import { useState } from "react"
import { userLogin } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Login() {

    const userStore = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    console.log(`🚀 ~ Login ~ userStore`, userStore)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if (userStore.isLoggedIn === true) {
        return <Navigate to="/restaurants"/>
    }
    
    const handleLoginClick = () => {
        dispatch(userLogin(email, password))
    }

    return (
        <div>
            <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
            <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
            <button onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default Login
