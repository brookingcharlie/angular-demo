'use strict';

angular
  .module('app.tabs')
  .directive('appTab', [function() {
    return {
      restrict: 'E',
      scope: {},
      require: '^appTabs',
      transclude: true,
      template: '<div class="tab-pane" ng-show="tab.active" ng-transclude></div>',
      link: function(scope, element, attrs, tabs) {
        scope.tab = {title: attrs.title, active: false};
        tabs.addTab(scope.tab);
      }
    };
  }]);
