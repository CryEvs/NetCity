angular.module('netcity.indicators.controllers', []).controller('FillIndicators.View', function($scope, fillIndicatorsRepository, $alerts, $dialogs, $errorHandler, $collectionHelper) {
  var fillCalculatedValues, initIndicatorGroups, initIndicators, mappingAddValue, mappingToIndicatorValue;
  $scope.bDataWasChanged;

  /* mappingAddValue - добавляет ко всем объектам indicator свойство Value */
  mappingAddValue = function(indicatorList) {
    return $collectionHelper.treeForEach(indicatorList, function(ind) {
      return ind.subIndicators;
    }, function(ind) {
      var indicatorValue;
      indicatorValue = $scope.indicatorValuesIndexer[ind.id];
      if (typeof indicatorValue !== 'undefined') {
        return ind.value = indicatorValue.value;
      }
    });
  };
  mappingToIndicatorValue = function(list) {
    return _.map(list, function(indicator) {
      return {
        indicatorId: indicator.id,
        value: indicator.value
      };
    });
  };
  $scope.existsIndicatorGroups = function() {
    return typeof $scope.indicatorGroupsList !== 'undefined' && $scope.indicatorGroupsList.length > 0;
  };

  /*Подгружается список индикаторов и их значений */
  initIndicators = function() {
    $scope.bDataWasChanged = false;
    if ($scope.existsIndicatorGroups()) {
      fillIndicatorsRepository.getIndicatorValues($scope.indicatorGroup.id).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillIndicatorsRepository.get($scope.indicatorGroup.id).then(function(response) {
          $scope.indicatorList = mappingAddValue(response.data);
          $scope.indicator = $scope.indicatorList[0];
          return $scope.isApprovedIndicatorGroup = $scope.indicator.isApproved;
        }, function(response) {
          return $errorHandler.responseHandler(response, language.Generic.StatReports.kErrIndicatorListLoading);
        });
      });
    }
  };
  fillCalculatedValues = function(indicatorGroupId) {
    _.each($scope.indicatorList, function(indicatorGroup, index) {
      if (indicatorGroup.id === indicatorGroupId) {
        $scope.indicatorList[index] = mappingAddValue([$scope.indicatorList[index]])[0];
      }
    });
  };

  /*Загрузка списка групп индикаторов для селекта */
  initIndicatorGroups = function() {
    fillIndicatorsRepository.getIndicatorGroups().then(function(result) {
      $scope.indicatorGroupsList = result.data;
      if (typeof $scope.indicatorGroup === 'undefined' || $scope.indicatorGroup === null) {
        $scope.indicatorGroup = result.data[0];
      } else {
        $scope.indicatorGroup = _.findWhere($scope.indicatorGroupsList, {
          id: $scope.indicatorGroup.id
        });
      }
      $scope.previousIndicator = $scope.indicatorGroup;
      _.each($scope.indicatorGroupsList, function(indicatorGroup) {
        if (indicatorGroup.number === '') {
          indicatorGroup.name = indicatorGroup.name;
        } else {
          indicatorGroup.name = indicatorGroup.number + '. ' + indicatorGroup.name;
        }
        return indicatorGroup;
      });
      initIndicators();
    });
  };
  $.extend($scope, {
    calculate: function(indicatorGroupId) {
      return fillIndicatorsRepository.getCalculatedIndicatorValues(indicatorGroupId).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillCalculatedValues(indicatorGroupId);
        return $scope.bDataWasChanged = true;
      }, function(response) {
        return $errorHandler.responseHandler(response, language.Generic.StatReports.kAutomaticCalculationErr);
      });
    },
    inputChange: function() {
      return $scope.bDataWasChanged = true;
    },
    indicatorGroupChange: function() {
      if ($scope.bDataWasChanged) {
        $dialogs.confirm(language.Generic.StatReports.kConfirm, language.Generic.StatReports.kDataWasChangedContinueWithoutChangingData).result.then(function() {
          initIndicatorGroups();
        }, function() {
          return $scope.indicatorGroup = $scope.previousIndicator;
        });
      } else {
        initIndicatorGroups();
      }
    },
    prepareSaveData: function() {
      var flatArray, indValues;
      flatArray = $collectionHelper.treeToFlatArray(this.indicatorList, function(ind) {
        return ind.subIndicators;
      });
      indValues = mappingToIndicatorValue(flatArray);
      return _.reject(indValues, function(indValue) {
        return typeof indValue.value === 'undefined' || indValue.value === '' || indValue.value === null;
      });
    },
    approveIndicatorGroup: function(groupId) {
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      return $dialogs.confirm(language.Generic.StatReports.kConfirm, language.Generic.StatReports.kImpossibleMakeChangesAfterApproval).result.then(function() {
        var saveData;
        if ($scope.bDataWasChanged) {
          saveData = $scope.prepareSaveData();
          return fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
            $scope.bDataWasChanged = false;
            $scope.approve(groupId);
          }, function(data) {
            $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
            initIndicators();
          });
        } else {
          $scope.approve(groupId);
        }
      });
    },
    approve: function(groupId) {
      fillIndicatorsRepository.approve([groupId]).then(function() {
        return initIndicators();
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kErrApproving);
        return initIndicators();
      });
    },
    save: function() {
      var saveData;
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      saveData = this.prepareSaveData();
      fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
        return $scope.bDataWasChanged = false;
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
        initIndicators();
      });
    }
  });
  initIndicatorGroups();
});
