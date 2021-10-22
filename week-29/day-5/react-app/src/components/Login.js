import { Component } from "react";

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            userLoggedIn: false,
            email: "",
            password: ""
        }
        
    }

    // old approach
    // handleData(e) {
    //     e.preventDefault()
    //     console.log("Submitted")
    //     console.log("Value of this", this)
    // }

    //newer approach (ES2022) (Not have to use the bind in this approach)
    handleData = (e) => {
        e.preventDefault()
        console.log("Submitted")
        
        // console.log(e.target.value)
        
        this.setState({userLoggedIn: true})
        
        
        // console.log("Value of this", this)

        console.log(`Email: ${this.state.email}`)
        console.log(`Password: ${this.state.password}`)
        
    }


    //triggered when password value is changed
    handlePassword = (e) => {
        console.log(e.target.value)
        this.setState((prevState) => {

            prevState.password = e.target.value
            return prevState
        })
    }

    //triggered when email value is changed
    handleEmail = (e) => {
        console.log(e.target.value)
        this.setState((prevState) => {
            
            prevState.email = e.target.value
            return prevState
        })
    }

    render(){

        if (this.state.userLoggedIn === true) {
            return (
                <h1>You logged in</h1>
            )
        }

        return (
            <form onSubmit={this.handleData} action="/handleFormSubmit" method="get">
                <div>
                    <input onChange={this.handleEmail} type="email" placeholder="Enter email" required/>
                </div>
                <div>
                    <input onChange={this.handlePassword} type="password" placeholder="Enter password" required/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login