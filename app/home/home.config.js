'use strict';

angular
  .module('app.home')
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home/home.html'
    });
}
