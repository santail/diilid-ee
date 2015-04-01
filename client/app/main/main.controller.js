'use strict';

angular.module('workspaceApp').controller('MainCtrl', ['$scope', 'Wish', 'Offer' , function ($scope, Wish, Offer) {
  $scope.wish = new Wish();
  $scope.errors = {};

  $scope.addWish = function(form) {
    $scope.$broadcast('show-errors-check-validity');

    if ($scope.form.$valid) {
      $scope.wish.$save().then(
        function (data) {
          console.log('saved', data);

          $scope.wish = new Wish();
          $scope.$broadcast('show-errors-reset');

          $scope.alerts = [
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
          ];
        },
        function (error) {
            $scope.alerts = [
              { type: 'danger', msg: 'Well done! You successfully read this important alert message.' }
            ];
        });
    }
  };

  $scope.reset = function () {
    $scope.wish = new Wish();
    $scope.$broadcast('show-errors-reset');
  };

  $scope.proposeOffer = function (contains) {
    return Offer.query({
      'contains': contains
    });
  };
}]);
