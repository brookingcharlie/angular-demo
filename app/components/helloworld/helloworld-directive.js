'use strict';

angular
  .module('app.helloworld')
  .directive('helloWorld', [function() {
    return {
      restrict: 'E',
      scope: true,
      template: '<input ng-model="value" /> contains "{{value}}".'
    };
  }]);
