'use strict';

angular
  .module('app.tabs')
  .directive('appTabs', [function() {
    return {
      restrict: 'E',
      scope: true,
      transclude: true,
      template:
        '<ul class="nav nav-tabs">\n' +
        '  <li ng-repeat="tab in tabs" ng-class="{active: $index === activeTab}">\n' +
        '    <a href="" ng-click="setActiveTab($index); $event.preventDefault();">{{tab.title}}</a>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<div class="tab-content" ng-transclude></div>',
      controller: function($scope) {
        $scope.tabs = [];
        $scope.activeTab = null;
        $scope.setActiveTab = function(index) {
          $scope.activeTab = index;
          $scope.tabs.forEach(function(tab, i) {
            tab.active = (i === $scope.activeTab);
          });
        };
        this.addTab = function(tab) {
          $scope.tabs.push(tab);
          $scope.activeTab || $scope.setActiveTab(0);
        }
      }
    };
  }]);
