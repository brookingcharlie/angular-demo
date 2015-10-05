'use strict';

angular
  .module('app.helloworld')
  .directive('helloWorld', [function() {
    return {
      restrict: 'E',
      scope: {
        oneWayValue: '@',
        twoWayValue: '='
      },
      templateUrl: 'components/helloworld/helloworld-directive.html'
    };
  }]);
