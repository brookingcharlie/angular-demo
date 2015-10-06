'use strict';

angular
  .module('app.echo')
  .directive('appEchoTwo', [function() {
    return {
      restrict: 'E',
      scope: {value: '='},
      template: '<input ng-model="value" /> says "{{value}}"'
    };
  }]);
