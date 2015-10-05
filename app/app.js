'use strict';

angular
  .module('app', [
    'ngRoute',
    'app.home',
    'app.about'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
