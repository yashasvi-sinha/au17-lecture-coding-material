import React, { Component } from 'react'

export default class Dummy extends Component {

    constructor(props){
        super(props)
        this.state = {
            dummyStateValue: "Doc Oc"
        }
    }

    
    render() {
        return (
            <div>
                <h2>Dummy Component</h2>
            </div>
        )
    }
}
