const express = require('express');
const app = express();
const port = 3008;

const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { items });
});

app.post('/', (req, res) => {
    const newItem = {
        id: items.length + 1,
        title: req.body.item,
    };
    items.push(newItem);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Access the app at http://localhost:${port}`);
});
