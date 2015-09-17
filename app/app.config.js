'use strict';

angular
  .module('app')
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home/home.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'about/about.html'
    });
}
