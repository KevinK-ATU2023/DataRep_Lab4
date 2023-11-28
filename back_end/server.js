// imports 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const body_parser = require('body-parser')

const app = express()
const port = 4000

// body parser
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// cors
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});    

// mongo Database
mongo_database().catch((e) => console.log(e))

async function mongo_database() {
    await mongoose.connect('mongodb+srv://hello:there@datarepdb.fhnaepc.mongodb.net/?retryWrites=true&w=majority')
    console.log('Connected to Database!')
}

const book_schema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

const book_model = mongoose.model('books', book_schema);

// server 
app.get('/', (req, res) => {
    res.send('Hello from server');
})

// books api get request
app.get('/api/books', async (req, res) => {
    let books = await book_model.find({})
    // console.log(books)
    res.json(books)
})

// books api post request 
app.post('/api/books', (req, res) => {
    // console.log(`Title: ${req.body.title}\nISBN: ${req.body.code}\nPoster URL: ${req.body.poster_url}`)
    // console.log(req.body)

    book_model.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    }).then(() => {
        console.log(`Data Received\n
        Title: ${req.body.title}\n
        Author: ${req.body.author}
        Cover URL: ${req.body.cover}`)
    })
    res.redirect('http://localhost:3000/read')
})

app.get('/api/books/:id', async (req, res)=>{
    // console.log(req.params.id);
    let book = await book_model.findById({_id:req.params.id})
    res.send(book);
})

app.put('/api/books/:id', async (req, res)=>{
    console.log("Update: "+req.params.id);
    // console.log(req.body)
    let book = await book_model.findByIdAndUpdate(req.params.id, req.body, {new:true});
    console.log(book);
})

app.post('/api/books/delete/:id', async (req, res) => {
    console.log('Deleted: ' +req.params.id);
    let book = await book_model.findByIdAndDelete(req.params.id)
    console.log(book);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`Go to http://localhost:${port}`);
})