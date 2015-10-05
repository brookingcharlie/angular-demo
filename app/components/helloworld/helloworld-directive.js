'use strict';

angular
  .module('app.helloworld')
  .directive('appHelloWorld', [function() {
    return {
      restrict: 'E',
      scope: {
        oneWayValue: '@',
        twoWayValue: '='
      },
      templateUrl: 'components/helloworld/helloworld-directive.html'
    };
  }]);
