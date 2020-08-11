const express = require("express");
const bodyParser = require('body-parser');


const banks = require('./routes/banks');

const concessionaires = require('./routes/concessionaires');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (request, response) => {
    response.render('index');
});

app.use('/banks', banks);
app.use('/concessionaires', concessionaires);

module.exports = app;