const path = require('path');
const express = require('express');
const { route } = require('.');

const router = express.Router();

const users = [
  {
    name: 'Homer Simpson',
  },
];

router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User',
    users: users,
    hasUsers: users.length > 0,
  });
});

router.post('/add-user', (req, res, next) => {
  const name = req.body.username;
  users.push({ name });
  console.log(users);
  res.redirect('/users');
});

module.exports = router;
