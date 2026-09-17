'use strict';
angular.module('netcity.em.statReports', ["netcity.helpers", "netcity.validation", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "netcity.em.statReports.controllers", "netcity.resources"]).run(function($http) {
  $http.defaults.withCredentials = true;
  $http.defaults.headers.common['at'] = strATTok;
});
