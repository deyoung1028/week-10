import { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from '../store/creators/actionCreators'
import './BookList.css'


class BookList extends Component {


    handleAddToCart = (book) => {
        console.log(book)
    }

    render() {

        const bookItems = this.props.books.map((book, index) => {
            return <li key = {index}>
                <img className ='bookImage'src={book.image}/>
                <button className = 'cartbtn' onClick={() =>this.handleAddToCart(book)}>Add to Cart</button>
                </li>
        })


        return (
            <ul>
                {bookItems}
            </ul>
        )
    }

}
const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (book) => dispatch(actionCreators.addToCart(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList) 