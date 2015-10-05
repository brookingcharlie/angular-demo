'use strict';

angular
  .module('app', [
    'ngRoute',
    'app.home',
    'app.about',
    'app.helloworld'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
