'use strict';

angular
  .module('app.tabs')
  .directive('appTab', [function() {
    return {
      restrict: 'E',
      scope: {
        id: '@tabId',
        title: '@'
      },
      require: '^appTabs',
      transclude: true,
      replace: true,
      template:
        '<div role="tabpanel" class="tab-pane" id="{{id}}" ng-transclude>\n' +
        '</div>',
      link: function(scope, element, attrs, tabs) {
        tabs.addTab({id: scope.id, title: scope.title});
      }
    };
  }]);
