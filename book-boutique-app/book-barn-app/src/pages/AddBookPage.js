import { Component } from "react";

class AddBookPage extends Component {
    constructor(){
        super()

        this.state = {
            bookName:'',
            bookAuthor:'',
            bookISBN:'',
            bookImage:''

        }
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleBookSubmit = ()=> {
        fetch('http://localhost:8080/api/books', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name:this.state.bookName,
                author:this.state.bookAuthor,
                isbn:this.state.bookISBN,
                image:this.state.bookImage
            })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('books')
            }
        })
    }





    render() {
        return(
            <>
            <h1>Add a Book!!</h1>
            <input type = 'text' name = 'bookName' onChange = {this.handleOnChange} placeholder = 'Enter Title'/>
            <input type = 'text' name = 'bookAuthor' onChange = {this.handleOnChange} placeholder = 'Enter Author'/>
            <input type = 'text' name = 'bookISBN' onChange = {this.handleOnChange} placeholder = 'Enter ISBN'/>
            <input type = 'text' name = 'bookImage' onChange = {this.handleOnChange} placeholder = 'Enter Image'/>
            <button onClick = {this.handleBookSubmit}>Submit</button>
            </>

        )
    }
}

export default AddBookPage