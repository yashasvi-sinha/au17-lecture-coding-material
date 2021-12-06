import React, {useContext} from 'react'
import { ProductContext } from './ProductContext'

function CartItems() {
    
    const { state } = useContext(ProductContext)
    console.log(`🚀 ~ CartItems ~ state`, state)

    return (
        <>
            <h2>Car Items</h2>
            {state.addedProducts.map( (prod) => <p>{prod.title}</p>)}
        </>
    )
}

export default CartItems
