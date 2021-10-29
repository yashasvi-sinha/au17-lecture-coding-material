import React, { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'

function AllRestaurants() {

    const [authToken] = useState(localStorage.getItem('authToken') || null)

    const [restaurants , setRestaurants ] = useState([])


    useEffect(() => {
        
        if (authToken != null) {
            getAllRestaurants()
        }

    }, [])



    if (authToken === null) {
        
        return <Redirect to="/login"/>

    }


    


    async function getAllRestaurants(){

        
        const response = await axios.get('/api/restaurants', { headers: { token:  authToken}  })
        console.log(`🚀 ~ getAllRestaurants ~ response`, response)

        setRestaurants(response.data)
    }



    const allRestaurants = restaurants.map(rest => {
        return (
            <div key={rest._id}>
                <h1>{rest.name}</h1>
                <h2>{rest.avgRating}</h2>
            </div>
        )
    })

    return (
        <div>
            <h1>All Restaurants</h1>
            {allRestaurants}
        </div>
    )
}

export default AllRestaurants
