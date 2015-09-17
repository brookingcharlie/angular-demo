'use strict';

angular
  .module('app')
  .controller('AboutController', ['$scope', AboutController]);

function AboutController($scope) {
  $scope.value = "foo";
}
