import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRestaurant } from '../actions'
import { useNavigate } from 'react-router-dom'



function RestaurantForm() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [restName, setRestName] = useState("")
    const [restLocation, setRestLocation] = useState("")
    const [restContact, setRestContact] = useState("")
    const [restCuisine, setRestCuisine] = useState("")
    const [restImage, setRestImage] = useState(null)
    
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        console.log(`🚀 ~ RestaurantForm ~ restImage`, restImage)
        // const restaurant = {
        //     name: restName,
        //     location: restLocation,
        //     contactNumber: restContact,
        //     cuisine: restCuisine,
        //     imageURL: restImage,
        // }
      

        //Only if you need to send file related data
        const rd = new FormData()
        rd.append("name", restName)
        rd.append("location", restLocation)
        rd.append("contactNumber", restContact)
        rd.append("cuisine", restCuisine)


        rd.append("restaurantImage", restImage)

        dispatch(addRestaurant(rd))
        
        navigate("/restaurants")
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>

                <input type="text" onChange={ e => setRestName(e.target.value) } value={restName} placeholder="Restaurant Name" />
                <input type="text" onChange={ e => setRestLocation(e.target.value)} value={restLocation} placeholder="Location" />
                <input type="text" onChange={ e => setRestContact(e.target.value)} value={restContact} placeholder="Contact" />
                <input type="text" onChange={ e => setRestCuisine(e.target.value)} value={restCuisine} placeholder="Cuisine" />
                <input type="file" onChange={ e => setRestImage(e.target.files[0])} placeholder="image" />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default RestaurantForm
