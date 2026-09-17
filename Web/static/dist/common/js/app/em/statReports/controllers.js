angular.module('netcity.em.statReports.controllers', []).controller('EmStatReports.View', function($scope, $alerts, $dialogs, $collectionHelper, indicatorsRepository, $errorHandler) {
  var FlatData, IndicatorInfo, getIndicatorLevelName, levels, loadGroups, recurs;
  IndicatorInfo = (function() {
    function IndicatorInfo(dto, parent) {
      this.getParent = function() {
        return parent;
      };
      angular.extend(this, dto);
    }

    IndicatorInfo.prototype.getFullNumber = function() {
      var parent;
      parent = this.getParent();
      if (parent) {
        return parent.getFullNumber() + '.' + this.number;
      } else {
        return this.number;
      }
    };

    return IndicatorInfo;

  })();
  levels = [];
  recurs = function(indicatorInfo, levels) {
    var parent;
    parent = indicatorInfo.getParent();
    if (parent) {
      recurs(parent, levels);
    }
    return levels.push(indicatorInfo.name);
  };
  getIndicatorLevelName = function(depth) {
    if (depth > 0) {
      return language.Generic.StatReports.kStatReportIndicatorGroupLevel + ' ' + depth;
    } else {
      return language.Generic.StatReports.kStatReportIndicatorGroupTitle;
    }
  };
  $scope.dataLoaded = false;
  FlatData = (function() {
    function FlatData(dto) {
      var educInstInfo, emInfo, i, index, indicator, j, len, len1, levelName, ref;
      indicator = $scope.$indicatorsIndex[dto.indicatorId];
      if (dto.educInstId) {
        educInstInfo = $scope.educInstitutions[dto.educInstId];
        if (educInstInfo) {
          this["Регион"] = educInstInfo.stateName;
          this["Город"] = educInstInfo.cityName;
          this["УО"] = educInstInfo.emName;
          this["Функциональность ОО"] = educInstInfo.functionalityName;
          this["Тип ОО"] = educInstInfo.typeName;
          this["ОО"] = educInstInfo.educInstName;
        }
      } else if (dto.emId) {
        emInfo = $scope.educManagements[dto.emId];
        this["Регион"] = emInfo.stateName;
        this["УО"] = emInfo.emName;
      }
      this["Значение"] = dto.value;
      ref = $scope.levels;
      for (i = 0, len = ref.length; i < len; i++) {
        levelName = ref[i];
        this[levelName] = "";
      }
      levels = [];
      recurs(indicator, levels);
      for (index = j = 0, len1 = levels.length; j < len1; index = ++j) {
        levelName = levels[index];
        this[getIndicatorLevelName(index)] = levelName;
      }
    }

    return FlatData;

  })();
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
  $scope.educInstitutions = {};
  $scope.educManagements = {};
  $scope.$indicatorsIndex = {};
  loadGroups = function() {
    var getGroups;
    if ($scope.reportGroup.value === 1) {
      getGroups = indicatorsRepository.emIndicators.published.getRegionRootGroups;
    } else {
      getGroups = indicatorsRepository.emIndicators.published.getRootGroups;
    }
    return getGroups($scope.indicatorLevel.value).then(function(response) {
      return $scope.rootGroups = response.data;
    })["catch"](function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  $scope.reportGroup = $scope.reportGroups[0];
  $scope.indicatorLevel = $scope.indicatorLevels[0];
  $scope.$watch('indicatorLevel', loadGroups);
  indicatorsRepository.educInstitutions.get().then(function(response) {
    return $scope.educInstitutions = _.indexBy(response.data, "educInstId");
  })["catch"](function(response) {
    return $errorHandler.responseHandler(response);
  });
  indicatorsRepository.educManagements.get().then(function(response) {
    return $scope.educManagements = _.indexBy(response.data, "emId");
  })["catch"](function(response) {
    return $errorHandler.responseHandler(response);
  });
  require(["wpt/WebPivotTable", "dojo/domReady!"], function(WebPivotTable) {
    var options;
    options = {
      customOptions: {
        locale: 'ru',
        uiFlags: {
          menuBtn: 0,
          dataSourceBtn: 0,
          languageSwitchBtn: 0,
          helpBtn: 0,
          aboutBtn: 0,
          openWptMenu: 0,
          saveWptMenu: 0,
          sourceDataMenu: 0,
          settingMenu: 0,
          nonEmptyBtn: 0,
          mdxBtn: 0,
          pivotFieldsPaneBtn: 1,
          positionPivotContentBtn: 1,
          gridOptionBtn: 1,
          gridStyleBtn: 1,
          gridZoomBtn: 1,
          gridFullScreenBtn: 1,
          gridExportExcelBtn: 1,
          chartOptionBtn: 1,
          chartZoomBtn: 1,
          chartFullScreenBtn: 1,
          csvGridSizeBtn: 1,
          csvGridZoomBtn: 1,
          csvGridExportExcelBtn: 1
        },
        expandRows: 1,
        expandCols: 1,
        pivotLayout: 2,
        grid: {
          showColSubtotals: 0,
          showColTotals: 0,
          compactForm: 0
        }
      }
    };
    return $scope.wpt = new WebPivotTable(options, "wpt-container");
  });
  $scope.dataLoaded = false;
  $.extend($scope, {
    "export": function() {
      if (!$scope.indicatorGroup) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kMustSelectIndicatorGroup);
        return;
      }
      return postTo({
        path: "/webapi/em/indicators/published/groups/" + $scope.indicatorGroup.id + "/report",
        method: "GET",
        formParams: {
          download: true
        }
      });
    },
    exportAll: function() {
      var ref;
      if (((ref = $scope.rootGroups) != null ? ref.length : void 0) === 0) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kIndicatorGroupListIsEmpty);
        return;
      }
      return postTo({
        path: "/webapi/em/indicators/published/groups/report/" + $scope.indicatorLevel.value,
        method: "GET",
        formParams: {
          download: true
        }
      });
    },
    show: function() {
      var indicatorInfoLoad;
      if (!$scope.indicatorGroup) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kMustSelectIndicatorGroup);
        return;
      }
      indicatorInfoLoad = indicatorsRepository.emIndicators.published.get($scope.indicatorLevel.value, $scope.indicatorGroup.id).then(function(response) {
        $scope.$indicatorsIndex = {};
        return $collectionHelper.treeTransform(response.data, function(dto, parentDto) {
          var indInfo;
          indInfo = new IndicatorInfo(dto, parentDto);
          $scope.$indicatorsIndex[indInfo.id] = indInfo;
          return indInfo;
        }, function(item) {
          return item.subIndicators;
        });
      });
      indicatorsRepository.emIndicators.published.getIndicatorValues($scope.indicatorGroup.id, $scope.indicatorLevel.value).then(function(response) {
        $scope.indicatorsValues = response.data;
        return indicatorInfoLoad.then(function() {
          var cols, dataFields, depthLevel, i, ind, indicatorInfo, j, len, level, levelName, ref, ref1, rows, wptData;
          $scope.dataLoaded = true;
          indicatorInfo = $scope.$indicatorsIndex[$scope.indicatorGroup.id];
          $scope.indicatorGroupDepth = 0;
          $collectionHelper.treeForEach(indicatorInfo, function(ind) {
            return ind.subIndicators;
          }, function(ind) {
            var parent;
            parent = ind.getParent();
            if (parent != null ? parent.depth : void 0) {
              ind.depth = parent.depth + 1;
            } else {
              ind.depth = 1;
            }
            if (ind.depth > $scope.indicatorGroupDepth) {
              return $scope.indicatorGroupDepth = ind.depth;
            }
          });
          $scope.levels = [];
          for (depthLevel = i = 0, ref = $scope.indicatorGroupDepth - 1; 0 <= ref ? i <= ref : i >= ref; depthLevel = 0 <= ref ? ++i : --i) {
            levelName = getIndicatorLevelName(depthLevel);
            $scope.levels.push(levelName);
          }
          $scope.flatData = _.chain($scope.indicatorsValues).map(function(dto) {
            return new FlatData(dto);
          }).filter(function(flat) {
            return flat["Регион"];
          }).value();
          dataFields = _.keys(_.first($scope.flatData));
          $scope.CsvFields = _.union(dataFields, $scope.levels);
          $scope.CsvData = _.map($scope.flatData, function(flat) {
            return _.toArray(flat);
          });
          cols = [];
          ref1 = $scope.levels;
          for (ind = j = 0, len = ref1.length; j < len; ind = ++j) {
            level = ref1[ind];
            cols.unshift(dataFields.length - ind - 1);
          }
          if ($scope.indicatorLevel.value === 0) {
            rows = [2, 5];
          } else {
            rows = [0, 1];
          }
          wptData = {
            format: "WPT",
            version: "1.0",
            mode: "CSV",
            data: $scope.CsvData,
            fields: $scope.CsvFields,
            rows: rows,
            cols: cols,
            values: [
              {
                id: 1,
                label: "Значение показателей",
                fieldIndex: dataFields.length - $scope.levels.length - 1,
                stats: "Sum",
                showValueAs: 0,
                format: {
                  category: "GENERAL",
                  decimal: 2,
                  separatorFlag: true,
                  symbol: "$",
                  symbolSuffix: 0,
                  negative: 0
                }
              }
            ]
          };
          $scope.wpt.setCsvData($scope.CsvFields, $scope.CsvData, wptData);
        });
      })["catch"](function(response) {
        return $errorHandler.responseHandler(response);
      });
    }
  });
});
