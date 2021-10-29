import React, { useState } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

function Login() {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    
    const handleBtnClick = async () => {
        
        console.log(`🚀 ~ Login ~ userEmail`, userEmail)
        console.log(`🚀 ~ Login ~ userPassword`, userPassword)     


        const jsonData = {
            email: userEmail,
            pass: userPassword
        }

        const response = await axios.post('/api/login', jsonData)
        

        const token = response.data.token
        console.log(`🚀 ~ handleBtnClick ~ token`, token)

        if (token) {
            localStorage.setItem('authToken', token)
            setUserLoggedIn(true)
        }


        
        
    }


    if (userLoggedIn === true) {
        return <Redirect  to="/all-restaurants" />
    }


    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input onChange={e => setUserEmail(e.target.value) } type="email" className="form-control" value={userEmail} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={e => setUserPassword(e.target.value)} type="password" className="form-control" value={userPassword}/>
            </div>
            <button onClick={handleBtnClick} className="btn btn-primary btn-lg">Submit</button>
        </div>
    )
}

export default Login
