const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
// const cors = require('cors');


const banks = require('./routes/banks');

const concessionaires = require('./routes/concessionaires');

const app = express();

app.use(express.json());


app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars',);

app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(
//     cors({
//         credentials: true,
//         origin: ["http://localhost:3001"],
//     })
// )

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/banks', banks);
app.use('/concessionaires', concessionaires);

module.exports = app;