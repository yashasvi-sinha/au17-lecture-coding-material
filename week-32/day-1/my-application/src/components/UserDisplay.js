import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserDisplay() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        
        getUsers()
        
    }, [])

    const getUsers = async () => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(`🚀 ~ getUsers ~ response`, response)
        console.log(`🚀 ~ getUsers ~ response.data`, response.data)
        
        setUsers(response.data)
    }

    // const userH1 = users.map((u) => {
    //     return <h1>{u.name}</h1>
    // })

    return (
        <div>
            {users.map(u => <h1>{u.name}</h1>)}
        </div>
    )
}

export default UserDisplay
