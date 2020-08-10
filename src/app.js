const express = require("express");
const bodyParser = require('body-parser');


const bank = require('./routes/bank');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (request, response) => {
    response.render('index');
});

app.use('/bank', bank);

module.exports = app;