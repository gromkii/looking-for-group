'use strict'

var express = require('express'),
    router  = express.Router(),
    User = require('../models/user'),
    Session = require('../models/session');

router.route('/')
  // Return a list of all users.
  .get((req, res) => {
    User.fetchAll().then(users => {
      res.send(users.toJSON());
    });
  })

  // Create a new user and hash the password.
  .post((req, res) => {
    var newUser = req.body,
        hash    = bcrypt.hashSync( newUser.password, 8);

    User.forge({
      username:newUser.username,
      email:newUser.email,
      avatar_url:newUser.avatar_url,
      full_name:newUser.full_name,
      password: hash,
      location:newUser.location
    }).save().then(() => {
      res.redirect('/');
    });
  });

router.route('/:user_id')
  // Get a user by ID.
  .get((req, res) => {
    User
      .where('id', req.params.user_id)
      .fetch()
      .then( user => {
        res.json(user.toJSON());
      });
  });

router.route('/:user_id/sessions')
  // Get a user by ID's sessions.
  .get((req, res) => {
    User
      .getSessions(req.params.user_id)
      .then( results => {
        var user = results.toJSON();
        res.json(user);
      })
  })

router.route('/:user_id/sessions/host')
  .get((req, res) => {
    var user = req.user ? req.user.id : req.body.user_id;

    if (user) {
      Session
        .where('host_id', user)
        .fetchAll({withRelated:['users','applications.users']})
        .then( results => {
          var sessions = results.toJSON();

          res.json(sessions);
        })
    } else {
      res.json({error:'Not Logged In'})
    }
  })

router.route('/:user_id/applications')
  .get((req, res) => {
    User
      .where('id', req.params.user_id)
      .fetch({withRelated:['applications', 'applications.users']})
      .then( results => {
        if (results){
          res.json(results.toJSON())
        } else {
          res.json({error:'No results found.'})
        }
      })
  })

router.route('/:user_id/messages/sent')
  .get((req, res) =>{
    User
      .where('id', req.params.user_id)
      .fetch({withRelated: ['sentMessages']})
      .then( results => {
        let user = results ? results.toJSON() : null;

        user ? res.json(user) : res.json({error:'No results found.'});
      })
  })

router.route('/:user_id/messages/received')
  .get((req, res) => {
    User
      .where('id',req.params.user_id)
      .fetch({withRelated: ['receivedMessages']})
      .then( results => {
        let user = results ? results.toJSON() : null;

        user ? res.json(user) : res.json({error:'No results found.'});
      })
  })


module.exports = router;
