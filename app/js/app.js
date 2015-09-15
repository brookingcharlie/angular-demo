'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  });
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.value = "foo";
}]);
