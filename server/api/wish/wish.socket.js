/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Wish = require('./wish.model');

exports.register = function(socket) {
  Wish.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Wish.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('wish:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('wish:remove', doc);
}