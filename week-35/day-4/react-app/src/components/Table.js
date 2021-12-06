import React, {useContext} from 'react'
import { ProductContext } from './ProductContext'
import TableRow from './TableRow'




function Table(props) {

    const { productDispatch } = useContext(ProductContext)
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Thumbnail</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {props.rows.map( row => {

                    return (
                        <>
                            <tr>
                                <td><img src={row.image} width={80} height="auto" /></td>
                                <td>{row.title}</td>
                                <td>{row.price}</td>
                                <td>
                                    <button onClick={() => productDispatch( { type: "ADD_ITEM", payload: row } )}>Add</button>
                                    <button onClick={() => productDispatch( { type: "REMOVE_ITEM" , payload: row } )}>Remove</button>
                                </td>
                            </tr>
                        </>
                    )

                } )}
            </tbody>
        </table>
    )
}

export default Table
