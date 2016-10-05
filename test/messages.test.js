'use strict'

var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex');

describe('Message API Routes', () => {
  before(done => {
    knex.migrate.latest().then(()=>{
      knex.seed.run().then(()=> {
        done();
      })
    })
  })

  after(done => {
    knex.migrate.rollback().then(()=>{
      done()
    })
  })

  it('Should return a list of all messages.', done => {
    request
      .get('/api/messages')
      .expect(200)
      .end((err, res) => {
        let messages = res.body;
        expect(messages.length).to.eq(3);
        done();
      })
  })
})
