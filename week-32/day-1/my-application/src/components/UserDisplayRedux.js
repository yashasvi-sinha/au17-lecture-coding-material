import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions'

function UserDisplayRedux() {
    const allUsers = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {allUsers.map(u => <h1>{u.name}</h1>)}
        </div>
    )
}

export default UserDisplayRedux
