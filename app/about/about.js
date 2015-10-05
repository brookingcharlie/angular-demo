'use strict';

angular
  .module('app.about', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/about', {
        controller: 'AboutController',
        controllerAs: 'controller',
        templateUrl: 'about/about.html'
      });
  }]);
