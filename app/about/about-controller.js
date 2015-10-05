'use strict';

angular
  .module('app.about')
  .controller('AboutController', ['$scope', AboutController]);

function AboutController($scope) {
  $scope.value = "bar";
}
