'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WishSchema = new Schema({
  contains: String,
  email: String,
  hasPhone: Boolean,
  phone: String,
  active: Boolean
});

module.exports = mongoose.model('Wish', WishSchema);