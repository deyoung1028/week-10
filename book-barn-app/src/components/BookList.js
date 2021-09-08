import { Component } from "react";
import './BookList.css'


class BookList extends Component {

    render() {
        const imgURL = ' https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
        const bookItems = this.props.books.map((book, index) => {
            return <li key = {index}>
                <img className ='bookImage'src={imgURL+book.imageLink}/>
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