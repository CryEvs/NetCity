(function(angular) {
  angular.module('irtech.netcity.school.summerbusy', ['ngRoute', 'ngSanitize', 'ngMessages', 'ui.select', 'uikit.alerts', 'uikit.dialogs', 'ui.bootstrap', 'irtech.netcity.directive', 'ui.bootstrap.tooltip']).filter('propsFilter', function() {
    return function(items, props) {
      var out;
      out = [];
      if (angular.isArray(items)) {
        items.forEach(function(item) {
          var i, itemMatches, keys, len, prop, text;
          itemMatches = false;
          keys = Object.keys(props);
          for (i = 0, len = keys.length; i < len; i++) {
            prop = keys[i];
            text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
          if (itemMatches) {
            return out.push(item);
          }
        });
      } else {
        out = items;
      }
      return out;
    };
  }).controller('NetCityController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.pagetitle = "Летняя занятость";
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }).config(function($routeProvider, $locationProvider) {
    return $routeProvider.otherwise({
      redirectTo: '/',
      templateUrl: '/js/app/school/summerbusy/template.html',
      controller: 'SummerBusyController'
    });
  }).run(function($rootScope, $http) {
    $rootScope.$on('$routeChangeError', function(event) {
      console.log("$routeChangeError");
      return event.preventDefault();
    });
    $http.defaults.withCredentials = true;
    $http.defaults.headers.common['at'] = strATTok;
    return document.onkeydown = function(e) {
      if (e.key === 'F5' || e.keyCode === 116 || (e.key === 'r' || e.key === 'R' || e.keyCode === 82) && e.ctrlKey) {
        return postTo('/angular/school/summerbusy/');
      }
    };
  });
})(window.angular);
