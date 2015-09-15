'use strict';

angular
  .module('app')
  .controller('HomeController', ['$scope', HomeController]);

function HomeController($scope) {
  $scope.value = "foo";
}
