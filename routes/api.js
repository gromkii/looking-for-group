var express = require('express'),
  router = express.Router(),
  bcrypt = require('bcrypt'),
  knex = require('../db/knex'),
  User = require('../models/user'),
  Session = require('../models/session'),
  Application = require('../models/application');



router.route('/application')
  .get((req, res) =>{
    Application
      .fetchAll()
      .then( results => {
        res.json(results)
      })
  })

  .post((req, res) => {
    var a = req.body;

    new Application({
      has_played:a.has_played,
      years_played:a.years_played,
      used_platform:a.used_platform,
      exp_level:a.exp_level,
      application:a.application
    }).save()
      .then( results => {

        var r    = results.toJSON().id,
            user = req.user ? req.user.id : req.body.user;
        knex('approve_applications').insert({
          app_id:r,
          session_id:a.session_id,
          applicant_id: parseInt(user)
        }).then(() => {

          res.redirect('/dashboard');
        })
      })
  })

router.route('/application/:application_id/approve')
  .get((req, res) => {
    Application
      .where('id', req.params.application_id)
      .fetch({withRelated:['users']})
      .then( results => {
        if (results) {
          res.json(results.toJSON())
        } else {
          res.json({error: 'No results found.'})
        }
      })
  })

  .post((req, res) => {
    // Update approved status
    Application
      .forge({
        id:req.params.application_id
      })
      .fetch({withRelated:['users','sessions.users']})
      .then( results => {
        results.save({
          approved:true
        }).then( results => {
          var a = results.toJSON();

          // Add the user to the session they applied to.
          // TODO: Only add them if there's space available.
          knex('user_sessions').insert({
            session_id:a.sessions[0].id,
            user_id:a.users[0].id
          }).then(() => {
            console.log('Did the thing!');
            res.json({success:"Approved Application"})
          });
        })
      })
  })

router.route('/application/:application_id/deny')
  .delete((req, res) => {
    Application
      .where('id', req.params.application_id)
      .destroy()
      .then(() => {
        res.json({success:"Denied Application"});
      })
  })

module.exports = router;
