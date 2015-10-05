'use strict';

angular
  .module('app.home')
  .controller('HomeController', ['$scope', HomeController]);

function HomeController($scope) {
  $scope.value = "foo";
}
