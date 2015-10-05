'use strict';

angular
  .module('app.home')
  .controller('HomeController', ['$scope', function($scope) {
    $scope.value = "foo";
  }]);
