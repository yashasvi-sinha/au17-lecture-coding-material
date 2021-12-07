import React, { useEffect, useState } from 'react'
import { useDocumentTitle, useToggle } from '../customHooks'

function Title() {

    const [count, setCount] = useState(0)
    const title = `You have clicked ${count} times`
    useDocumentTitle(title)

    const [showPeekaboo, setShowPeekaboo] = useToggle(false)

    const handleClick = () => {
        setCount(count + 1)
        setShowPeekaboo()
    }

    return (
        <div>
            {showPeekaboo && <h1>Peek A Boo</h1>}
            <button onClick={handleClick} >Click Me</button>

        </div>
    )
}

export default Title
