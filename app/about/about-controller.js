'use strict';

angular
  .module('app.about')
  .controller('AboutController', ['$scope', function($scope) {
    $scope.value = "bar";
  }]);
