'use strict'

var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex');

describe('Application Route Tests', () => {
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

  // TODO: actually write test for applications.
  
  it('Should return list of applications.', done => {
    done();
  })
});
