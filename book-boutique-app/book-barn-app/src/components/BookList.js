import { Component } from "react";
import './BookList.css'


class BookList extends Component {

    render() {
        const bookItems = this.props.books.map((book, index) => {
            return <li key = {index}>
                <img className ='bookImage'src={book.image}/>
                </li>
        })


        return (
            <ul>
                {bookItems}
            </ul>
        )
    }

}

export default BookList 