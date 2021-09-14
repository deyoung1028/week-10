import React, { Component } from 'react'
import './Home.css';
import BookList from '../components/BookList';
import Genre from '../components/Genre'



class App extends Component {
  constructor() {
    super()
    this.state = {
      allBooks:[]
    }
  }

  componentDidMount() {
    console.log(this.componentDidMount)
    fetch('http://localhost:8080/api/books')
    .then(response => response.json())
    .then(books => {
      this.setState({
        allBooks:books
      })
    })
  }


render() {

  return (
    <>
     <Genre/>
     <BookList books = {this.state.allBooks}/>
    </>
  )
}

}


export default App;
