'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfferSchema = new Schema({
  title: Schema.Types.Mixed,
  description: Schema.Types.Mixed,
  price: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model('Offer', OfferSchema);