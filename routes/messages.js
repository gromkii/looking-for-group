const express = require('express'),
  router = express.Router(),
  User = require('../models/user'),
  Message = require('../models/message');

router.route('/')
  .get((req, res) => {
    Message
      .fetchAll()
      .then( results => {
        let messages = results.toJSON();
        res.json(messages);
      })
  })
  .post((req, res) => {
    let m = req.body,
        r, u;

    // The iphone app doesn't have a signed user, but rather
    // sends an ID in the post request from stored information
    // in NSUserDefaults. If there's neither? Handle it I guess.
    u = req.user ? req.user.id : m.user_id;


    // The new message form will let you put in receipient by name,
    // or possibly by id? Shouldn't really matter.

    // REFACTOR : findUserByUsername
    User
      .where('username', m.receiver_id)
      .fetch()
      .then( results => {
        r = results ? results.toJSON().id : null;
        if (u && r) {
          Message.forge({
            msg_title:m.msg_title,
            msg_body:m.msg_body,
            sender_id:u,
            receiver_id:r
          }).save()
          .then( results => {
            res.json({message: 'Message sent, gj.'});
          })
        } else {
          res.json({message: 'Error, invalid sender or receiver.', u, r})
        }
      })

    // Check to see if there's both a receipient and sender.

  })

router.route('/:message_id')
  .get((req, res) => {
    Message
      .where('id', req.params.message_id)
      .fetch({withRelated:['sender', 'receiver']})
      .then( results => {
        let message = results ? results.toJSON() : null;

        message ? res.json({message}) : res.json({error:'Message not found'});
      })
  })
module.exports = router;
