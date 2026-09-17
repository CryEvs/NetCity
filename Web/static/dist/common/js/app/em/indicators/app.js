'use strict';
angular.module('netcity.em.indicators', ["netcity.helpers", "netcity.validation", "netcity.indicators.directives", "uikit.alerts", "uikit.dialogs", "uikit.controls", "ui.bootstrap", "ui.tree", "angularTreeview", "netcity.em.indicators.controllers", "netcity.resources"]).run(function($http) {
  $http.defaults.withCredentials = true;
  $http.defaults.headers.common['at'] = strATTok;
});
