const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');


// console.log(__dirname);
app.use(express.static('public'));
// app.use(express.json());

const cards = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", 
    "0", "0", "A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H" ];

const win = [
    '🎊', '', '', '', '', '🎊', 
    '', '', '', '', '', '', 
    '', '','Y', 'O', 'U', '🎈', 
    '', 'W', 'I', 'N', '🎉', '',
    '', '', '', '', '', '', 
    '', '', '', '', '', ''
    ]; 
    
// Function to shuffle cards
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Shuffle cards
var random_cards = shuffle([...cards]);

app.get('/', (req, res)=>
    {   
        // res.json(books);             
        res.render("index", { title:'Home', random_cards });         
    });

app.get('*', (req, res) => {
        res.status(404).render('404', { title: '404' });
    });


app.listen(port, () => { console.log(`Server started on port ${port}`);  });
