'use strict';

var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  });
}]);

demoApp.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.value = "foo";
}]);
