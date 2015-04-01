'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WishSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Wish', WishSchema);