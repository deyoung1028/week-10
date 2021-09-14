import { connect } from "react-redux"


function Cart(props) {

    const postBooks = props.books.map((book,index) => {
        return <li key = {index}>
            <img className ='bookImage'src={book.image}/>
        </li>
    })

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {postBooks}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
} 

export default connect(mapStateToProps)(Cart)