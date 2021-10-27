import React, { useState } from 'react'
import Dummy from './Dummy'

function Test(props) {

    const [testValue, setTestValue] = useState("This is GREAT")
    const [abc, setAbc] = useState("This !!!!!")


    return (
        <div>
            <h1>Power to Us</h1>
            {props.shopDummy && <Dummy />}
        </div>
    )
}

export default Test
