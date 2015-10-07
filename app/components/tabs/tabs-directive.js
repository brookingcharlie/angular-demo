'use strict';

angular
  .module('app.tabs')
  .directive('appTabs', [function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template:
        '<ul class="nav nav-tabs">\n' +
        '  <li ng-repeat="tab in ctrl.tabs" ng-class="{active: $index === ctrl.activeTab}">\n' +
        '    <a href="" ng-click="ctrl.setActiveTab($index); $event.preventDefault();">{{tab.title}}</a>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<div class="tab-content" ng-transclude></div>',
      controllerAs: 'ctrl',
      controller: function() {
        var that = this;
        that.tabs = [];
        that.activeTab = null;
        that.setActiveTab = function(index) {
          that.activeTab = index;
          that.tabs.forEach(function(tab, i) {
            tab.active = (i === that.activeTab);
          });
        };
        that.addTab = function(tab) {
          that.tabs.push(tab);
          that.activeTab || that.setActiveTab(0);
        }
      }
    };
  }]);
