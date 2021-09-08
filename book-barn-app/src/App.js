import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Genre from './components/Genre'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allBooks:[]
    }
  }

  componentDidMount() {
    console.log(this.componentDidMount)
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      this.setState({
        allBooks:books
      })
    })
  }


render() {

  return (
    <div>
     <Header/>
     <Genre/>
     <BookList books = {this.state.allBooks}/>
    </div>
  )
}

}


export default App;
