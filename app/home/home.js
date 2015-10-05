'use strict';

angular
  .module('app.home', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        controllerAs: 'controller',
        templateUrl: 'home/home.html'
      });
  }]);
