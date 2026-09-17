'use strict';
angular.module('netcity.resources', []).factory('indicatorsRepository', function($http, $dialogs, $alerts, $showerModalDialog) {
  var longWork, notify;
  notify = function(action, message) {
    action.then(function() {
      return $alerts.success(message);
    });
    return action;
  };
  longWork = function(work, message) {
    $showerModalDialog.show();
    work["finally"](function() {
      return $showerModalDialog.close();
    });
    return work;
  };
  return {
    calculators: {
      get: function(indicatorLevel, indicatorValueType) {
        return longWork($http.get("/webapi/calculators/?indicatorLevel=" + indicatorLevel + "&valueType=" + indicatorValueType));
      }
    },
    indicators: {
      getPredefinedGroups: function(indicatorLevel) {
        return longWork(notify($http.get("/webapi/indicators/predefinedGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorGroupsWasLoaded));
      }
    },
    filters: {
      getChildEMs: function() {
        return longWork($http.get("/webapi/em/childEMs"));
      },
      getFuncTypes: function(emId) {
        return longWork($http.get("/webapi/em/" + emId + "/funcTypes"));
      }
    },
    educInstitutions: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educInstitutions"), language.Generic.StatReports.kEducInstitutionsWasLoaded));
      }
    },
    educManagements: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educManagements"), language.Generic.StatReports.kSubEmListWasLoaded));
      }
    },
    educInstIndicators: {
      get: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded));
      },
      getGroups: function() {
        return longWork($http.get("/webapi/educInstitution/indicators/groups"));
      },
      getIndicatorValues: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
      },
      saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
        return notify($http.post("/webapi/educInstitution/indicators/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
      },
      approveIndicatorGroups: function(indicatorGroupIds) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
      },
      approveIndicatorGroup: function(indicatorGroupId, syId, accessType, text) {
        return notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType + "&syId=" + syId), text);
      },
      disapproveIndicatorsGroups: function(indicatorGroupId, syId) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kDataOpenedForEditing);
      },
      getCalculatedIndicatorValues: function(indicatorGroupId) {
        return longWork($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess);
      }
    },
    emIndicators: {
      subscribed: {
        get: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded), language.Generic.StatReports.kIndicatorListLoading);
        },
        getGroups: function() {
          return $http.get("/webapi/em/indicators/subscribed/groups");
        },
        getIndicatorGroup: function(indicatorGroupId, indicatorLevel) {
          return longWork($http.get("/webapi/em/indicators/subscribed/groups/" + indicatorGroupId + "/?indicatorLevel=" + indicatorLevel));
        },
        saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
          return notify($http.post("/webapi/em/indicators/subscribed/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
        },
        approveIndicatorGroups: function(indicatorGroupIds) {
          return notify($http.post("/webapi/em/indicators/subscribed/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
        },
        approveIndicatorGroup: function(indicatorGroupId, emId, accessType, text) {
          return notify($http.get("/webapi/em/" + emId + "/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType), text);
        },
        getIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getCalculatedIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess));
        }
      },
      published: {
        get: function(indicatorLevel, indicatorGroupId) {
          return longWork($http.get("/webapi/em/indicators/published/groups/" + (indicatorGroupId ? indicatorGroupId + '/' : '') + "?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorListLoading);
        },
        getGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/roots/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRegionRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/regionGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        renumber: function(numbers) {
          return $http.post("/webapi/em/indicators/published/renumber", numbers);
        },
        regionPublish: function(indicatorLevel) {
          return longWork($http.post("/webapi/em/indicators/published/regionpublish", indicatorLevel));
        },
        getIndicatorValues: function(indicatorGroupId, indicatorLevel) {
          var src;
          src = indicatorLevel === 0 ? "educInst" : "em";
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/values/" + src), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getEmAccessJournal: function(indicatorGroupId, funcTypeId) {
          return longWork($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/emAccessJournal"));
        },
        getEducInstAccessJournal: function(indicatorGroupId, funcTypeId, emId) {
          return longWork($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/educInstAccessJournal/?eoFuncType=" + funcTypeId + "&emId=" + emId));
        },
        editExplanation: function(indicatorGroupInfo) {
          return longWork($http.post("/webapi/em/indicators/published/edit/explanation", indicatorGroupInfo));
        },
        add: function(indicator) {
          return longWork($http.put("/webapi/em/indicators/published", indicator));
        },
        update: function(indicator) {
          return longWork(notify($http.post("/webapi/em/indicators/published", indicator), language.Generic.StatReports.kIndicatorWasSaved));
        },
        remove: function(indicatorId) {
          return longWork($http["delete"]("/webapi/em/indicators/published/" + indicatorId));
        }
      }
    }
  };
});
