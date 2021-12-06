import React, { Fragment } from 'react'


function TableRow(props) {
    return (
        <Fragment>
            <tr>
                <td>{props.product.title}</td>
                <td>{props.product.price}</td>
                <td><img src={props.product.image} width={80} /></td>
            </tr>
        </Fragment>
    )
}

export default TableRow
