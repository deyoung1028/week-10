import React, {Component} from 'react'

class SwitchView extends Component {
    constructor(){
        super()
        this.state = {
            isOn: false
        }
    }
    handleSwitchClick = () => {
        this.setState({
            isOn: !this.state.isOn})
    }
    render(){
        return <div>
            <button onClick = {this.handleSwitchClick}>
                {this.state.isOn ? "ON" : "OFF"}
            </button>
               
        </div>
    }
}






export default SwitchView
