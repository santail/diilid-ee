'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/offers').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('offer', $scope.awesomeThings);
    });

    $scope.addOffer = function() {
      if($scope.newOffer === '') {
        return;
      }
      $http.post('/api/offers', { name: $scope.newOffer });
      $scope.newOffer = '';
    };

    $scope.deleteOffer = function(offer) {
      $http.delete('/api/offers/' + offer._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('offer');
    });
  });
