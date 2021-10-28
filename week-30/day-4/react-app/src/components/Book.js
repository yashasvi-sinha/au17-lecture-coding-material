import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Book() {

    const test = useLocation()
    console.log(`🚀 ~ Book ~ test`, test)

    const pathParams = useParams()
    console.log(`🚀 ~ Book ~ pathParams`, pathParams)

    return (
        <div>
            <h1>This is Books page</h1>            

            {pathParams.bookCategory && <h2>{pathParams.bookCategory}</h2>}
        </div>
    )
}

export default Book
