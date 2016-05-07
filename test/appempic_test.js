'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Juan', function () {
    appempic.getName().should.equal('Juan');
  });

  it('El apellido debe ser Restrepo', function () {
    appempic.getLastName().should.equal('Restrepo');
  });

});
