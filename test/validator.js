'use strict';

let assert = require('chai').assert;
let checkInput = require('../bin/validator').checkInput;

describe('Validator Tests', function() {
    let test_re = /^(\w{5,25})$/;
    it('Should not pass null strings', function(done) {
        let input = null;
        let result = checkInput(input, 'string', test_re);
        assert.isFalse(result, 'Null String');
        done();
    });
    it('Should not pass object strings', function(done) {
        let input = {
        code: 'super malware',
        payload: '9sf98s7df987sd98f7ds9f8d'
        };
        let result = checkInput(input, 'string', test_re);
        assert.isFalse(result, 'Object String');
        done();
    });
    it('Should not pass invalid strings', function(done) {
        let input = 'sdflkjdf<<executeCode()><>Sdf';
        let result = checkInput(input, 'string', test_re);
        assert.isFalse(result, 'Invalid String');
        done();
    });
    it('Should pass valid strings', function(done) {
        let input = 'Hell0World';
        let result = checkInput(input, 'string', test_re);
        assert.isNotFalse(result, 'Valid String');
        done();
    });
    it('Should not pass null numbers', function(done) {
        let input = null;
        let result = checkInput(input, 'number', null);
        assert.isFalse(result, 'Null Number');
        done();
    });
    it('Should not pass object numbers', function(done) {
        let input = {
        code: 'super malware',
        payload: '9sf98s7df987sd98f7ds9f8d'
        };
        let result = checkInput(input, 'number', null);
        assert.isFalse(result, 'Object Number');
        done();
    });
    it('Should pass valid numbers', function(done) {
        let input = 404.404;
        let result = checkInput(input, 'number', null);
        assert.isNotFalse(result, 'Valid Number');
        done();
    });
});
