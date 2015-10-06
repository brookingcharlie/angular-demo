'use strict';

angular
  .module('app.home', [
    'ngRoute',
    'app.echo',
    'app.navbar',
    'app.tabs'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        controllerAs: 'ctrl',
        templateUrl: 'home/home.html'
      });
  }]);
