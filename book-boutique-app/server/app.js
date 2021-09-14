const express = require('express')
const cors = require('cors')
const app = express()
const pgp = require('pg-promise')()
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
const connectionString = ('postgres://bpmujsls:D9nCutqF-8-SAThjbHaIheIHUT5mCkKw@chunee.db.elephantsql.com/bpmujsls')
global.db=pgp(connectionString)
global.bcrypt = require('bcryptjs')


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


// app.post('/signup', (req,res) =>{
//     const first_name = req.body.first_name;
//     const last_name = req.body.last_name;
//     const email = req.req.body.email;
//     const user_name = req.body.user_name;
//     const password = req.body.password;

//     db.one('INSERT INTO users(first_name, last_name, email, user_name, password) VALUES ($1, $2, $3. $4, $5)', [first_name, last_name, email, user_name, hash])
//     res.redirect(login)

// })



app.listen(8080,()=>{
    console.log("server is running, but what about your page?")
})