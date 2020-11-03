
const express = require('express');
const path = require('path');
const port = 4568;
var bodyParser = require('body-parser')

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(' show html page ');
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});




