var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');

var bodyParser = require('body-parser');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
var passport = require('passport');
var environment = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile.js')[environment];
var knex = require('knex')(knexConfig);
var bcrypt = require('bcrypt-as-promised');
var bodyParser = require('body-parser');


//body parser middleware
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/register', function (req, res) {
  res.render('register');
});

app.post('/register', function (req, res, next) {
  const {
    name,
    username,
    email,
    password,
  } = req.body;
  console.log(req.body);
  bcrypt.hash(password, 12)
    .then(function (hashed_password) {
      return knex('register').insert({
        name,
        username,
        email,
        hashed_password,
      });
    })
    .then(function () {
      res.redirect('/login');
    })
    .catch(function (err) {
      next(err);
    });
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res, next) {
  const {
    username,
    password,
  } = req.body;
  //  console.log("username: "+username);
  knex('register')
    .where('username', username)
    .first()
    .then(function (user) {
      // console.log("user: "+user.username)
      // console.log("password: "+password);
      // console.log("user.hashed_password" +user.hashed_password);
      bcrypt.compare(password, user.hashed_password)
        .then(function () {
          res.render('profile', {
            user,
          });
        })
        .catch(function (err) {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(function (err) {
      console.log(err);
      res.redirect('/login');
    });

});

app.get('/profile/:id', function (req, res) {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then(function (user) {
      console.log(user);
      res.render('profile', {
        user,
      });
    });

});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

//arms
app.get('/arms', (_req, res, next) => {
  knex('arms')
    .orderBy('name')
    .then((rows) => {
      // console.log(rows);

      res.render('arms', {
        rows,
      });

    })
    .catch((err) => {
      console.log(err);
    });
});
//chest
app.get('/chest', (_req, res, next) => {
  knex('chest')
    .orderBy('name')
    .then((rows) => {
      // console.log(rows);

      res.render('chest', {
        rows,
      });

    })
    .catch((err) => {
      console.log(err);
    });
});
//abs
app.get('/abs', (_req, res, next) => {
  knex('abs')
    .orderBy('name')
    .then((rows) => {
      // console.log(rows);

      res.render('abs', {
        rows,
      });

    })
    .catch((err) => {
      console.log(err);
    });
});
//glutes
app.get('/glutes', (_req, res, next) => {
  knex('glutes')
    .orderBy('name')
    .then((rows) => {
      // console.log(rows);

      res.render('glutes', {
        rows,
      });

    })
    .catch((err) => {
      console.log(err);
    });
});
//legs
app.get('/legs', (_req, res, next) => {
  knex('legs')
    .orderBy('name')
    .then((rows) => {
      // console.log(rows);

      res.render('legs', {
        rows,
      });

    })
    .catch((err) => {
      console.log(err);
    });
});



//recipes

app.get('/users/:id', function (req, res, next) {

  knex('users')
    .where('id', req.params.id)
    .first()
    .then(function (user) {
      knex('recipes')
        .where('user_id', req.params.id)
        .then(function (recipe) {
          console.log('!!!', user);
          res.render('recipes', {
            user,
            recipe,
          });
        });

    });
});

app.post('/users/:user_id/recipes', function (req, res, next) {
  const register_id = req.params.user_id;
  knex('recipes')
    .insert({
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      register_id: register_id,
    })
    .then(function () {
      res.redirect('/users/' + register_id + '/recipes');
    })
    .catch(function (err) {
      next(err);
    });
});

app.get('/users/:user_id/recipes', function (req, res, next) {
  const register_id = req.params.user_id;
  knex('register')
    .where('id', register_id)
    .first()
    .then(function (user) {
      knex('recipes')
        .where('register_id', register_id)
        .then(function (recipes) {
          console.log('!!!', user, recipes);
          res.render('recipes', {
            user,
            recipes,
          });
        });

    });
});

app.get('/recipe', function (req, res, next) {
  knex('recipes')
    .then(function (recipe) {
      console.log('this is recipe ', recipe);
      res.render('recipes', {
        recipe,
      });
    });
});

app.get('/breakfast', function (req, res) {
  res.render('breakfast');
});

app.get('/lunch', function (req, res) {
  res.render('lunch');
});

app.get('/dinner', function (req, res) {
  res.render('dinner');
});

app.listen(port, function () {
  console.log('connecting to port ', port);
});
