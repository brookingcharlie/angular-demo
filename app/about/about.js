'use strict';

angular
  .module('app.about', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/about', {
        controller: 'AboutController',
        templateUrl: 'about/about.html'
      });
  }]);
