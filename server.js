
const express = require('express');
const path = require('path');
const port = 4568;

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.end(' show html page ');
  });
  

app.post('/csv', (req, res) =>
{ 
    // req.body.json
    res.send("ggggggggg");

});


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});




