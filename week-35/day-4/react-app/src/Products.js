import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'

function Products(props) {

    const [samans, setSamans] = useState([])
    
    const [query] = useSearchParams()
    console.log(`🚀 ~ Products ~ query`, query)

    

    useEffect(async () => {

        
        
        const limitSamanQuantity = query.get('only')
        const order = query.get('sort')
        console.log(`🚀 ~ useEffect ~ order`, order)

        console.log(`🚀 ~ useEffect ~ value`, limitSamanQuantity)
        let url = `https://fakestoreapi.com/products`

        if (limitSamanQuantity && limitSamanQuantity > 0) {
            url = `${url}?limit=${limitSamanQuantity}`
        }

        // const response = await fetch(`https://fakestoreapi.com/products${limitSamanQuantity && `?limit=${limitSamanQuantity}`}`)
        const response = await fetch(url)

        const allProducts = await response.json()
        console.log(`🚀 ~ useEffect ~ allProducts`, allProducts)

        setSamans(allProducts)

    }, [])

    return (
        <div>
            {samans.map(saman => {
                return (
                    <div key={saman.id}>
                        <h2>{saman.title}</h2>
                        <h3>{saman.price}</h3>
                        <img src={saman.image} width={100} height="auto" />
                    </div>
                )
            })}
        </div>
    )
}

export default Products