'use strict';

angular
  .module('app.navbar')
  .directive('appNavbar', ['$location', function($location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(
          function() {
            return $location.path();
          },
          function(newValue, oldValue) {
            var locationHref = '#!' + newValue;
            $('.navbar-nav li').each(function(i, e) {
              var linkHref = $(e).find('a').attr('href');
              $(e).toggleClass('active', locationHref === linkHref);
            });
          }
        );
      }
    };
  }]);
