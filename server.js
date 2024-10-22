const express = require("express");
const app = express();
const port = 8000;

const fs = require('fs');
const { title } = require("process");
const filePath = './books.json';

app.use(express.json());

// Check if file exists, if not create it
if (!fs.existsSync(filePath)) 
{
    fs.writeFileSync(filePath, '[]');
}

// Read books from file
let books = JSON.parse(fs.readFileSync(filePath, 'utf8'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>
    {        
        // res.json(books);             
        res.render("index", {title:'Home'});         
    });

app.get('/about', (req, res)=>
    {        
            // res.json(books);             
        res.render("about");         
    });

app.get('/404', (req, res)=>
    {        
        // res.json(books);             
        res.render("404");         
    });


app.listen(port, () => { console.log(`Server started on port ${port}`);  });

// curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Book Title", "author": "Updated Author"}' http://localhost:8000/books/1
// curl -X POST -H "Content-Type": "application/json" -d '{"title": "New Book 2", "author": "New Author 2",  "publisher": "New Publisher 2", "publishedDate": "2023-11-19","isbn": "1234567890128"}' http://localhost:8000/books