'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  contains: String,
  hasEmail: Boolean,
  email: String,
  hasPhone: Boolean,
  phone: String
});

module.exports = mongoose.model('Request', RequestSchema);