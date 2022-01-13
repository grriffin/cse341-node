const path = require('path');

const express = require('express');

const homeRoute = require('./routes/index');
const userRoute = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(userRoute);

/* app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  res.send('<h1>Hello</h2>');
});
 */

app.use('/users', (req, res, next) => {
  console.log('/users middlware');
  res.send('<p>This middlware is for /users');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.send('<p>This middleware is for the root');
});

app.listen(3000);
