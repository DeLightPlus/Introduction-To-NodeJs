const express = require("express");
const app = express();
const port = 8000;

const fs = require('fs');
const filePath = './books.json';

app.use(express.json());


// Check if file exists, if not create it
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }

// Read books from file
let books = JSON.parse(fs.readFileSync(filePath, 'utf8'));

app.get('/', (req, res)=>
    {        
        res.json(books);       
        
        // res.send("Hello, World!");         
    });

app.get('/books', (req, res)=>
    {        
        res.json(books);

        // res.send("Hello, World!");
    });

app.get('/books/:id', (req, res)=>
    {
        const id = req.params.id;       
        
         res.send(`about/id=${id} /Hello, World!`);
    });

// POST /books - Create a new book
app.post('/books', (req, res) => {
    console.log(req.body);
  
    const { title, author, publisher, publishedDate, isbn } = req.body;
  
    if (!title || !author || !publisher || !publishedDate || !isbn) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const newBook = { id: books.length+1, title, author, publisher, publishedDate, isbn };
    books.push(newBook);
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
    res.json(newBook);
  });

    app.listen(port, () => { console.log(`Server started on port ${port}`);  });