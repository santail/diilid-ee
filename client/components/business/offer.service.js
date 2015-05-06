'use strict';

angular.module('workspaceApp')
  .factory('Offer', function ($resource) {
    return $resource('/api/offers/:id/:controller', {
      id: '@_id'
    }, {
      query: {
        method: 'GET',
        params: {
          contains: '@contains'
        },
        isArray: true
      }
    });
  });
