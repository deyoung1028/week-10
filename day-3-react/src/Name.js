import { Component } from "react";

class Name extends Component {
    constructor() {
        super()
        this.state = {
            nameValue: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            nameValue:(e.target.nameValue)
        })
    }

    handleSubmit = () => {
        this.props.onValueSubmitted(this.state.nameValue)
    }

    render(){
        return(
            <div>
                <h1>Name</h1>
                <input type = 'text' onChange ={this.handleNameChange} placeholder="Enter Name"/>
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Name