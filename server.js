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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(' show html page ');
});

app.post('/', (req, res) => {
    convrtFile = convertor(req.body.data);
    console.log("ssssssss", req.body);
    res.end(JSON.stringify(req.body));
});

var convertor = (obj) => {
    obj = JSON.parse(obj);
    var finalResult = '';
    finalResult += Object.keys(obj).slice(0, -1).join(',');

    var final = (obj) => {
        finalResultt += Object.values(obj).slice(0, -1).join(',');

    }
    final(obj)
    return finalResult;
}

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});




