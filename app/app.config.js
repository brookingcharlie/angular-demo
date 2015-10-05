'use strict';

angular
  .module('app')
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}
