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

  it('Should post a new message', done => {
    let m = {
      msg_title:'Test',
      msg_body:'This is a test',
      user_id: 1,
      receiver_id: 'pcage'
    }

    request
      .post('/api/messages')
      .expect(200)
      .send(m)
      .end((err, res) => {
        request
          .get('/api/messages')
          .expect(200)
          .end((err, res) => {
            let messages = res.body;

            expect(messages.length).to.eq(4);
            done();
          })
      })
  })

  it('Should return a message by specified id', done => {
    request
      .get('/api/messages/1')
      .expect(200)
      .end((err, res) => {
        let m = res.body.message;

        expect(m).to.have.property('msg_title')
        expect(m).to.have.property('msg_body')
        done();
      })
  })
})
