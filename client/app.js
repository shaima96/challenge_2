
const express = require('express');
const path = require('path');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    res.render('index');
  });
  

app.post('/upload_json', (req, res) =>
{ 

})


  module.exports = app;