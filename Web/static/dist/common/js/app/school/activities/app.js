(function(angular) {
  angular.module('irtech.netcity.school.activities', ['ngRoute', 'ngSanitize', 'ngMessages', 'ui.select', 'uikit.alerts', 'uikit.dialogs', 'ui.bootstrap', 'ui.bootstrap.tooltip']).filter('propsFilter', function() {
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
    $scope.pagetitle = language.Generic.MenuFolders.kFNLearningApplications;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }).config(function($routeProvider, $locationProvider) {
    return $routeProvider.otherwise({
      redirectTo: '/',
      templateUrl: '/js/app/school/activities/template.html',
      controller: 'learningApplicationsController',
      resolve: {
        style: function() {
          return angular.element('head').append('<link href="/js/app/school/activities/style/activities.css" rel="stylesheet">');
        }
      }
    });
  }).run(function($rootScope, $http) {
    var rights;
    rights = [35];
    if (_.intersection(context.rights, rights).length === 0) {
      console.log("Access denied");
      postTo("/asp/errorAccess.asp");
    }
    $rootScope.$on('$routeChangeError', function(event) {
      console.log("$routeChangeError");
      return event.preventDefault();
    });
    $http.defaults.withCredentials = true;
    $http.defaults.headers.common['at'] = strATTok;
    return document.onkeydown = function(e) {
      if (e.key === 'F5' || e.keyCode === 116 || (e.key === 'r' || e.key === 'R' || e.keyCode === 82) && e.ctrlKey) {
        return postTo('/angular/school/activities');
      }
    };
  });
})(window.angular);
