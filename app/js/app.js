'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });
}]);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.value = "foo";
}]);
