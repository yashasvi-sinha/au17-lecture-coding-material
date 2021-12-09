import { useState } from "react";
import withCount from "./withCount";

function LikeButton(props) {


    return (
        <>
            <button onClick={props.handleIncrement}>I Like This 👍</button>
            <span>{props.countValue} ❤</span>
        </>
    )
}


export default withCount(LikeButton)
// export default LikeButton
