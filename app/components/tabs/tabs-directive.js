'use strict';

angular
  .module('app.tabs')
  .directive('appTabs', [function() {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<ul class="nav nav-tabs" role="tablist">\n' +
        '  <li ng-repeat="tab in tabs" role="presentation">\n' +
        '    <a href="#{{tab.id}}" aria-controls="{{tab.id}}" role="tab" data-toggle="tab">{{tab.title}}</a>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<div class="tab-content" ng-transclude>\n' +
        '</div>',
      controller: function($scope) {
        $scope.tabs = [];
        this.addTab = function(tab) {
          $scope.tabs.push(tab);
        }
      }
    };
  }]);
