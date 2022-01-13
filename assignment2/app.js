const http = require('http');

const express = require('express');

const app = express();

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
