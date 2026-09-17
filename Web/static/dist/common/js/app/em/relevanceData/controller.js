angular.module('netcity.indicators.controllers', []).controller('RelevanceData.View', function($scope, indicatorsRepository, $alerts, $dialogs, $errorHandler, $collectionHelper) {
  var loadEMs, loadFuncTypes, loadGroups, refreshFilters;
  $scope.cnstApprovedValues = 1;
  $scope.cnstDisapprovedValues = 2;
  $scope.indicatorLevels = [
    {
      name: language.Generic.StatReports.kEducInst,
      value: 0
    }, {
      name: language.Generic.StatReports.kEducManagements,
      value: 1
    }
  ];
  $scope.reportGroups = [
    {
      name: language.Generic.StatReports.kMunicipalReports,
      value: 0
    }, {
      name: language.Generic.StatReports.kRegionReports,
      value: 1
    }
  ];
  $scope.indicatorLevel = $scope.indicatorLevels[1];
  $scope.reportGroup = $scope.reportGroups[0];
  $scope.indicatorAccessJournals = [];
  $scope.show = function() {
    if (typeof $scope.indicatorGroup === 'undefined' || $scope.indicatorGroup === null) {
      $alerts.info(language.Generic.StatReports.kNotSelectedIndicatorGroups);
      return;
    }
    if ($scope.indicatorLevel.value === 0) {
      indicatorsRepository.emIndicators.published.getEducInstAccessJournal($scope.indicatorGroup.id, $scope.funcType.id, $scope.em.id).then(function(response) {
        $scope.indicatorAccessJournals = response.data;
      });
    } else {
      indicatorsRepository.emIndicators.published.getEmAccessJournal($scope.indicatorGroup.id).then(function(response) {
        $scope.indicatorAccessJournals = response.data;
      });
    }
  };
  $scope.showAuthorAndDate = function(author, date) {
    var result;
    result = '';
    if (date !== null) {
      result = date;
    }
    if (author !== null) {
      result += ' ' + author;
    }
    return result;
  };
  $scope.approveEm = function(emId, accessType) {
    var text;
    text = accessType === $scope.cnstApprovedValues ? language.Generic.StatReports.kIndicatorGroupSuccessApproved : language.Generic.StatReports.kDataOpenedForEditing;
    return indicatorsRepository.emIndicators.subscribed.approveIndicatorGroup($scope.indicatorGroup.id, emId, accessType, text).then(function(response) {
      return $scope.show();
    }, function(response) {
      $errorHandler.responseHandler(response, language.Generic.StatReports.kErrApproving);
      return $scope.show();
    });
  };
  $scope.approveEducInst = function(syId, accessType) {
    var text;
    text = accessType === $scope.cnstApprovedValues ? language.Generic.StatReports.kIndicatorGroupSuccessApproved : language.Generic.StatReports.kDataOpenedForEditing;
    return indicatorsRepository.educInstIndicators.approveIndicatorGroup($scope.indicatorGroup.id, syId, accessType, text).then(function(response) {
      return $scope.show();
    }, function(response) {
      $errorHandler.responseHandler(response, language.Generic.StatReports.kErrApproving);
      return $scope.show();
    });
  };
  loadGroups = function() {
    var getGroups;
    if ($scope.reportGroup.value === 1) {
      getGroups = indicatorsRepository.emIndicators.published.getRegionRootGroups;
    } else {
      getGroups = indicatorsRepository.emIndicators.published.getRootGroups;
    }
    return getGroups($scope.indicatorLevel.value).then(function(response) {
      return $scope.rootGroups = response.data;
    }, function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  loadEMs = function() {
    if ($scope.indicatorLevel.value !== $scope.indicatorLevels[0].value) {
      return;
    }
    return indicatorsRepository.filters.getChildEMs().then(function(response) {
      $scope.ems = [
        {
          id: -1,
          name: language.Generic.Common.kAll
        }
      ];
      $scope.ems = _.union($scope.ems, response.data);
      return $scope.em = $scope.ems[0];
    }, function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  loadFuncTypes = function() {
    var currEmId;
    if ($scope.indicatorLevel.value !== $scope.indicatorLevels[0].value) {
      return;
    }
    currEmId = typeof $scope.em === 'undefined' ? -1 : $scope.em.id;
    return indicatorsRepository.filters.getFuncTypes(currEmId).then(function(response) {
      $scope.funcTypes = [
        {
          id: -1,
          name: language.Generic.Common.kAll
        }
      ];
      $scope.funcTypes = _.union($scope.funcTypes, response.data);
      return $scope.funcType = $scope.funcTypes[0];
    }, function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  refreshFilters = function() {
    $scope.indicatorGroup = null;
    $scope.indicatorAccessJournals = [];
    loadGroups();
    return loadEMs();
  };
  $scope.$watch('indicatorLevel', function() {
    return refreshFilters();
  });
  $scope.$watch('reportGroup', function() {
    return refreshFilters();
  });
  return $scope.$watch('em', function() {
    return loadFuncTypes();
  });
});
