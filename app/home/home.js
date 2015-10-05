'use strict';

angular
  .module('app.home', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'home/home.html'
      });
  }]);
