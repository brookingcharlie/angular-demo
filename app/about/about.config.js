'use strict';

angular
  .module('app.about')
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'about/about.html'
    });
}
