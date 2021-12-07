import React, { useEffect, useState } from 'react'
import { useLocalStorage, useToggle } from '../customHooks'

export default function ShowHide() {

    // const [showContent, setShowContent] = useState(true)
    
    const [showContentLocal, setShowContentLocal] = useLocalStorage('shouldShow', false)
    const [showContent, setShowContent] =  useToggle(showContentLocal)
   

    useEffect(() => {
        setShowContentLocal(showContent)
    }, [showContent])

    return (
        <div>
            <button onClick={setShowContent} >Toggle</button>

            {showContent && <h1>My Big Content</h1>}
        </div>
    )
}
