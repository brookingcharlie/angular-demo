'use strict';

angular
  .module('app', [
    'ngRoute',
    'app.home',
    'app.about'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix("!");
  }]);
