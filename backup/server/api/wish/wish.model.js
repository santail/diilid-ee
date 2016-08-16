'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WishSchema = new Schema({
	contains: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	phone: {
		type: String,
		trim: true
	},
	language: {
		type: String,
		default: 'none',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	active: {
	  type: Boolean,
	  default: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
}, {
	autoIndex: process.env.NODE_ENV === 'development'
});

module.exports = mongoose.model('Wish', WishSchema);