'use strict';

angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'partials/home.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'partials/about.html'
    });
}
