'use strict';

angular
  .module('app', [
    'ngRoute',
    'app.home',
    'app.about',
    'app.helloworld',
    'app.navbar',
    'app.tabs'
  ])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix("!");
  }]);
