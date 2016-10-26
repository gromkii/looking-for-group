'use strict'

const express = require('express'),
  router = express.Router(),
  User = require('../models/user'),
  Session = require('../models/session'),
  Application = require('../models/application');

router.route('/')
  .get((req, res) => {
    Session
      .fetchAll({ withRelated: ['users']})
      .then( sessions => {
        res.json(sessions);
      });
  })
  .post((req, res) => {
    var s    = req.body,
        host = req.user ? req.user.id : req.body.user_id;
    Session.forge({
      session_name:s.session_name,
      game_name:s.game_name,
      session_desc:s.session_desc,
      header_url:s.header_url,
      start_date:s.start_date,
      runtime:s.runtime,
      skill_level:s.skill_level,
      num_players:s.num_players,
      host_id:host
    }).save()
      .then(post => {
        var id = post.toJSON().id;
        res.redirect(`/dashboard/sessions/${id}`);
      })
  });

router.route('/:session_id')
  .get((req, res) => {
    Session
      .where("id", req.params.session_id)
      .fetch({withRelated: ['users','host']})
      .then( session => {
        session = session.toJSON();
        res.json(session);
      })
  })
  .delete((req, res) => {
    Session
      .where('id', req.params.session_id)
      .destroy()
      .then( results => {

      })
  })

router.route('/:session_id/chat')
  .get((req, res) => {
    Session
      .where('id', req.params.session_id)
      .fetch({withRelated:['chats']})
      .then( results => {
        if (results) {
          let chat = results.toJSON();
          console.log(chat);

          res.json(chat);
        } else {
          res.json({error: 'Session/Chat not found.'});
        }
      })
  })

module.exports = router;
