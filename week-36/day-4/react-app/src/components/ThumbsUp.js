import React from 'react'
import withCount from './withCount'

function ThumbsUp(props) {

    return (
        <div>
            <button onClick={props.handleIncrement}>This was amazing</button>
            <h1>{props.countValue}</h1>
        </div>
    )
}

export default withCount(ThumbsUp)
