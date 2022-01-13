const path = require('path');

const express = require('express');

const homeRoute = require('./routes/index');
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(userRoute);

app.listen(3000);
