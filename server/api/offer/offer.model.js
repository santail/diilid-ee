'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfferSchema = new Schema({
  url: String,
  title: Schema.Types.Mixed,
  description: Schema.Types.Mixed,
  price: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  active: Boolean,
  language: String
});

OfferSchema.index({
  'url': 1
}, {
  name: 'idx_offer_url'
});

OfferSchema.index({
  'title': "text",
  'description': "text",
  'description.long': "text",
  'description.short': "text"
}, {
  name: 'idx_offer_title_description',
  default_language: "russian"
});

module.exports = mongoose.model('Offer', OfferSchema);