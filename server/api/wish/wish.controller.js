'use strict';

var _ = require('lodash');
var Wish = require('./wish.model');

// Get list of wishs
exports.index = function(req, res) {
  Wish.find(function (err, wishs) {
    if(err) { return handleError(res, err); }
    return res.json(200, wishs);
  });
};

// Get a single wish
exports.show = function(req, res) {
  Wish.findById(req.params.id, function (err, wish) {
    if(err) { return handleError(res, err); }
    if(!wish) { return res.send(404); }
    return res.json(wish);
  });
};

// Creates a new wish in the DB.
exports.create = function(req, res) {
  Wish.create(req.body, function(err, wish) {
    if(err) { return handleError(res, err); }
    return res.json(201, wish);
  });
};

// Updates an existing wish in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Wish.findById(req.params.id, function (err, wish) {
    if (err) { return handleError(res, err); }
    if(!wish) { return res.send(404); }
    var updated = _.merge(wish, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, wish);
    });
  });
};

// Deletes a wish from the DB.
exports.destroy = function(req, res) {
  Wish.findById(req.params.id, function (err, wish) {
    if(err) { return handleError(res, err); }
    if(!wish) { return res.send(404); }
    wish.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}