import { useState } from "react"
import { userLogin } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Joi from 'joi';

function Login() {
    
    const userStore = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    console.log(`🚀 ~ Joi`, Joi)
    console.log(`🚀 ~ Login ~ userStore`, userStore)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErr, setValidationErr] = useState({})


    const userCredSchema = Joi.object({
        email: Joi.string().required().min(4).label("E-Mail"),
        pass: Joi.string().required().min(6)
    })




    if (userStore.isLoggedIn === true) {
        return <Navigate to="/restaurants"/>
    }
    
    const handleLoginClick = () => {

        //validation
        
        
        const result = userCredSchema.validate({ email: email, pass: password })

        console.log(`🚀 ~ handleLoginClick ~ result`, result)
        
        if (result.error) {
            setValidationErr(result.error)
        }else{
            dispatch(userLogin(email, password))
        }
        
    }


    return (
        <div>
            <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
            <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
            <button onClick={handleLoginClick}>Login</button>
            {validationErr.message && <span>{validationErr.message}</span>}
        </div>
    )
}

export default Login
