'use strict'

const express      = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    passport       = require('passport'),
    cookieParser   = require('cookie-parser'),
    session        = require('express-session'),
  	LocalStrategy  = require('passport-local').Strategy,
    bcrypt         = require('bcrypt'),
    api            = require('./routes/api.js'),
    authRoute      = require('./routes/auth.js'),
    usersRoute     = require('./routes/users.js'),
    sessionRoute   = require('./routes/sessions.js'),
    User           = require('./models/user.js');

require('dotenv').config(); // Allows local env elements.

// --- Middleware --- //
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use(express.static('public'))
  .use('/bower_components', express.static(__dirname + '/bower_components'))
  .use(cookieParser())
  .use(session({
    secret: process.env.KEY,
    resave:true,
    saveUninitialized: true
  }))



// --- Passport --- //
app.use(passport.initialize())
  .use(passport.session());
passport.use(new LocalStrategy((username, password, done) => {
  User
    .where('username', username)
    .fetch({withRelated: ['userGroup']})
    .then( user => {
      if (user) {
        user = user.toJSON();
      }
      if (user && bcrypt.compareSync(password, user.password)){
        return done(null, user);
      }

      return done(null, false);
    });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User
    .where('id', id)
    .fetch()
    .then( user => {
      user = user.toJSON();
      var signed = {
        id:user.id,
        username:user.username
      }
      done(null, signed);
    })
})

// --- Routing --- //
app.use('/api', api)
  .use('/api/sessions', sessionRoute)
  .use('/api/users', usersRoute)
  .use('/auth', authRoute)

app.get('/dashboard', (req, res, next) => {

  if (!req.isAuthenticated()) {
    res.redirect('/');
  } else {
    next();
  }
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
});

// --- Server --- //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});

module.exports = app;
