import React, {Component} from 'react'
import './App.css';
import Stepper from './Stepper';
import SwitchView from './SwitchView'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fullName: '',
      city:''
    }
  }

  handleOnClick = (e) => {
    this.setState({
      fullName: e.target.value,
      city: e.target.value
    })
  }

  render()
   {
  return(
      <div>
        <Stepper />
        <SwitchView />
        <input type = "text" />
        <input type = "text" />
        <button onClick ={this.handleOnClick}>Submit</button>
        <h1>{this.state.fullName}, {this.state.city}</h1>

      </div>
    )
  }

}


export default App;
