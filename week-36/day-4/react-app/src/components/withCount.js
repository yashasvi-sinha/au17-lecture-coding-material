import { Component, useState } from 'react'

// function withCount() {

//     return class TestComp extends Component{

//     }

// }


//Higher Order Component which accepts React Component as a parameter and needs to return a new component (functional/class-based)
function withCount(PassedComponent) {
    
    return function Enhanced(){
        const [count, setCount] = useState(0)
    
        const increment = () => {
            setCount(count + 1)
        }

        return (
            <div>
                <h1>With HigherOrder Comp</h1>
                <PassedComponent countValue={count}  handleIncrement={increment} />
            </div>
        )
    }
}

export default withCount
