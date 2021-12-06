import React, { useEffect, useRef } from 'react'

function DomExample() {

    const h1Ref = useRef(null)
    console.log(`🚀 ~ DomExample ~ h1Ref`, h1Ref)
    
    // setTimeout(() => {
        
        //     document.getElementById('mastH1').classList.add('changeColor')
        
        // }, 5000)
        
        // useEffect(() => {
            //     document.getElementById('mastH1').classList.add('changeColor')
            // }, [])
            
            
    const handleClick = () => {
                
        console.log(`🚀 ~ DomExample ~ h1Ref`, h1Ref)
        h1Ref.current.classList.add('changeColor')
        h1Ref.current.addEventListener('mouseenter', () => {console.log('Entered!!')})
        
        // document.getElementById('mastH1').classList.add('changeColor')
    }

    return (
        <div>
            <h1 ref={h1Ref}  onClick={handleClick}>Hello World</h1>
        </div>
    )
}

export default DomExample
