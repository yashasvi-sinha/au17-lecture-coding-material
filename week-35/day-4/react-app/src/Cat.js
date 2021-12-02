import React from 'react'

import { useParams } from 'react-router-dom'

function Cat(props) {

    const pathParams = useParams()
    console.log(`🚀 ~ Cat ~ pathParams`, pathParams)


    return (
        <div>
            This page is for asdasd
        </div>
    )
}

export default Cat
