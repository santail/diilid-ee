'use strict';

angular.module('workspaceApp')
  .factory('Wish', function ($resource) {
    return $resource('/api/wishes/:id/:controller', {
      id: '@_id'
    }, {
      save: {
        method: 'POST',
        isArray: true
      }
    });
  });
