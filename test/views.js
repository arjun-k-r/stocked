'use strict';

let express = require('express');
let app = require('../app');
let request = require('supertest');
let chai = require('chai');

describe('Core View Tests', function() {
    it('Should get lost response', function(done) {
        request(app)
        .get('/derp')
        .expect(404)
        .end(function(err, res) {
          if (err) done(err);
          chai.expect(res.text).to.be.equal('Looks like you\'re lost...');
          done();
        });
    });

    it('Should get home page', function(done) {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
          if (err) done(err);
          chai.expect(res.text).to.not.be.empty;
          done();
        });
    });
});
