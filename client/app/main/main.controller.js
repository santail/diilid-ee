'use strict';

angular.module('workspaceApp').controller('MainCtrl', ['$scope', 'Wish', 'Offer', '$modal', '$log', function ($scope, Wish, Offer, $modal, $log) {
  $scope.wish = new Wish();
  $scope.alerts = [];

  $scope.addWish = function(form) {
    $scope.$broadcast('show-errors-check-validity');

    if ($scope.form.$valid) {
      $scope.wish.$save().then(function (data) {
        console.log('saved', data);

        $scope.offers = [data];
        $scope.wish = new Wish();
        $scope.$broadcast('show-errors-reset');

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            offers: function () {
              return $scope.offers;
            }
          }
        });

        modalInstance.result.then(function (selectedOffer) {
          $scope.selected = selectedOffer;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });

        $scope.alerts = [
          { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];
      },
      function (error) {
          $scope.alerts = [
            { type: 'danger', msg: error }
          ];
      });
    }
  };

  $scope.reset = function () {
    $scope.wish = new Wish();
    $scope.alerts = [];
    $scope.$broadcast('show-errors-reset');
  };

  $scope.proposeOffer = function (contains) {
    return Offer.query({
      'contains': contains
    });
  };
}])
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, offers) {

  $scope.offers = offers;
  $scope.selected = {
    item: $scope.offers[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.offer);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});