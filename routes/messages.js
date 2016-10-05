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

module.exports = router;
