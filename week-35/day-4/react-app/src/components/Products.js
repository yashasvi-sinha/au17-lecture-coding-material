import { useEffect, useState, Fragment } from "react"
import { useSearchParams } from 'react-router-dom'
import CartItems from "./CartItems"
import ProductContextComponent from "./ProductContext"
import Table from "./Table"

function Products(props) {

    const [samans, setSamans] = useState([])

    useEffect(async () => {

        let url = `https://fakestoreapi.com/products`


        // const response = await fetch(`https://fakestoreapi.com/products${limitSamanQuantity && `?limit=${limitSamanQuantity}`}`)
        const response = await fetch(url)

        const allProducts = await response.json()

        setSamans(allProducts)

    }, [])

    // {samans.map(saman => {
    //     return (
    //         <div key={saman.id}>
    //             <h2>{saman.title}</h2>
    //             <h3>{saman.price}</h3>
    //             <img src={saman.image} width={100} height="auto" />
    //         </div>
    //     )
    // })}
    return (
        <ProductContextComponent>
            <CartItems />
            <Table rows={samans}/>
        </ProductContextComponent>
    )
}

export default Products