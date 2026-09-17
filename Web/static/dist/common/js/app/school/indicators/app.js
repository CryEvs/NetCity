var app;

app = angular.module('netcity.school.indicators', ["netcity.indicators.controllers", "netcity.indicators.directives", "netcity.helpers", "netcity.validation", "netcity.resources", "uikit.dialogs", "uikit.alerts"]).run(function($http) {
  $http.defaults.withCredentials = true;
  $http.defaults.headers.common['at'] = strATTok;
});

angular.module('netcity.resources').factory('fillIndicatorsRepository', function(indicatorsRepository) {
  var baseRep;
  baseRep = indicatorsRepository.educInstIndicators;
  return {
    get: function(indicatorGroupId) {
      return baseRep.get(indicatorGroupId);
    },
    save: function(indicatorValues, groupIndicatorId) {
      return baseRep.saveIndicatorValues(indicatorValues, groupIndicatorId);
    },
    approve: function(arrIndicatorGroups) {
      return baseRep.approveIndicatorGroups(arrIndicatorGroups);
    },
    getIndicatorGroups: function() {
      return baseRep.getGroups();
    },
    getIndicatorValues: function(indicatorGroupId) {
      return baseRep.getIndicatorValues(indicatorGroupId);
    },
    getCalculatedIndicatorValues: function(indicatorGroupId) {
      return baseRep.getCalculatedIndicatorValues(indicatorGroupId);
    }
  };
});
