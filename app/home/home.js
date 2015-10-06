'use strict';

angular
  .module('app.home', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        controllerAs: 'ctrl',
        templateUrl: 'home/home.html'
      });
  }]);
