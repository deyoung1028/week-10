const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const books = [
    {name: 'The Duke & I', author: 'Julia Quinn', isbn:'0062911414', image:'https://m.media-amazon.com/images/I/510GRvgpNRL._SY346_.jpg'},
    {name:'The Viscount Who Loved Me', author:'Julia Quinn', isbn:'006313862X', image: 'https://images-na.ssl-images-amazon.com/images/I/51DcgMYEeWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
]

app.get('/api/books',(req,res) =>{
    res.json(books)
})

app.post('/api/books', (req, res)=>{

    const name = req.body.name
    const author = req.body.author
    const isbn = req.body.isbn
    const image = req.body.image

    const book = {name:name, author:author, isbn:isbn, image:image}

    books.push(book)
    res.json({success:true})


})


app.listen(8080,()=>{
    console.log("server is running, but what about your page?")
})