/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Offer = require('../api/offer/offer.model');
var User = require('../api/user/user.model');

Offer.find({}).remove(function() {
  Offer.create({
    name: 'offer 1',
    info: 'test@test.com',
    active: true
  }, {
    name: 'offer 2',
    info: 'test@test.com',
    active: true
  }, function() {
      console.log('finished populating offers');
    }
  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});