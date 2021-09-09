import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Name from './Name'
 
class App extends Component {
  constructor() {
    super()
    this.state=
    {name:''}
  }


valueSubmitted = (value) => {
  this.setState({
    name:value
  })
}

render() {

  return(
    <div>
      {this.state.name}
      <Name onValueSubmitted = {this.valueSubmitted}/>

    </div>
  )
}
}

export default App;
