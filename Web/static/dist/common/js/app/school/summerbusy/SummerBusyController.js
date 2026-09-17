(function(angular) {
  return angular.module('irtech.netcity.school.summerbusy').controller('SummerBusyController', function($scope, $http, $alerts, $longWork, $dialogs, $q) {
    var checkChanges, defaultErrorCatcher, getChildsBusy, inverseMap, jobs, mapGroupBusy, requests;
    $scope.$parent.pagetitle = "Летняя занятость";
    $.extend($scope, {
      readonly: true,
      viewReady: false,
      tableReady: false,
      filterWork: false,
      globalYears: [],
      months: [
        {
          id: -1,
          name: "Все",
          selected: false,
          errors: []
        }, {
          id: 6,
          name: "Июнь",
          selected: false,
          errors: []
        }, {
          id: 7,
          name: "Июль",
          selected: false,
          errors: []
        }, {
          id: 8,
          name: "Август",
          selected: false,
          errors: []
        }
      ],
      hasData: false,
      urls: {
        busyinfo: "/webapi/summer/busyinfo",
        busyforms: "/webapi/summer/busyForms",
        schoolGlobalYears: "/webapi/summer/getYears",
        classes: "/webapi/summer/getClasses",
        readWriteRight: "/webapi/summer/getReadWriteRights"
      }
    });
    requests = {
      getChildsBusy: function(globalYearId, monthNum, classId) {
        if (classId == null) {
          classId = null;
        }
        return $http.get($scope.urls.busyinfo + ("?globalYearId=" + globalYearId + "&monthNum=" + monthNum + "&classId=" + classId)).success(function(response) {
          var num;
          num = 1;
          $scope.data = _.chain(response).groupBy(function(o) {
            return o.student.id;
          }).map(mapGroupBusy).sortBy(function(o) {
            return o.student.name;
          }).each(function(o) {
            return o.id = num++;
          }).each($scope.checkRow).value();
          $scope.hasData = _.some($scope.data);
          $scope.globalYear = _.findWhere($scope.globalYears, {
            id: globalYearId
          });
          $scope["class"] = _.findWhere($scope.classes, {
            id: classId
          });
          $scope.globalYear_filter = $scope.globalYear;
          return $scope.class_filter = $scope["class"];
        })["catch"](defaultErrorCatcher);
      },
      saveChildsBusy: function(globalYearId, monthNum, classId) {
        var dataNotComplete;
        if (classId == null) {
          classId = null;
        }
        dataNotComplete = _.chain($scope.months).pluck("errors").flatten().some().value();
        if (dataNotComplete) {
          $dialogs.notify("Форма должна быть заполнена полностью", "Нельзя сохранить, пока не будет заполнена информация для всех детей за весь летний период");
          return;
        }
        return $http.post($scope.urls.busyinfo + ("?globalYearId=" + globalYearId + "&monthNum=" + monthNum + "&classId=" + classId), inverseMap(monthNum)).success(function(response) {
          return $dialogs.message("Информация о летней занятости успешно сохранена");
        })["catch"](defaultErrorCatcher);
      },
      getBusyTypes: function() {
        return $http.get($scope.urls.busyforms).success(function(response) {
          return $scope.busyForms = response;
        })["catch"](defaultErrorCatcher);
      },
      getGlobalYears: function() {
        return $http.get($scope.urls.schoolGlobalYears).success(function(response) {
          $scope.globalYears = response;
          if (!$scope.globalYear_filter) {
            return $scope.globalYear_filter = _.first(response);
          }
        })["catch"](defaultErrorCatcher);
      },
      getClasses: function() {
        var globalYearId;
        globalYearId = $scope.globalYear_filter.id;
        return $http.get($scope.urls.classes + ("?globalYearId=" + globalYearId)).success(function(response) {
          $scope.classes = response;
          if (!$scope.class_filter || !_.chain(response).pluck('id').contains($scope.class_filter.id).value()) {
            return $scope.class_filter = _.first(response);
          }
        })["catch"](defaultErrorCatcher);
      },
      getReadWriteRights: function() {
        var globalYearId;
        $scope.globalYear = $scope.globalYear_filter;
        $scope["class"] = $scope.class_filter;
        globalYearId = $scope.globalYear.id;
        return $http.get($scope.urls.readWriteRight + ("?globalYearId=" + globalYearId)).success(function(response) {
          return $scope.readonly = response;
        })["catch"](defaultErrorCatcher);
      }
    };
    defaultErrorCatcher = function(response) {
      if (response != null ? response.data : void 0) {
        return $.show.error(response.data.message || language.Generic.Common.kErrorMsg);
      } else {
        return $.show.error(language.Generic.Common.kErrorMsg);
      }
    };
    mapGroupBusy = function(groupBusy, student) {
      var allMonths, busy, element, group, i, j, len, len1, mapSubGroup, ref;
      allMonths = _.chain($scope.months).filter(function(m) {
        return m.id > 0;
      }).pluck('id').value();
      mapSubGroup = function(subgroup) {
        var busyform, i, len, ref, result;
        result = [];
        ref = $scope.busyForms;
        for (i = 0, len = ref.length; i < len; i++) {
          busyform = ref[i];
          if (!_.contains(allMonths, subgroup.monthNum)) {
            return;
          }
          result.push({
            id: busyform.id,
            name: busyform.name,
            checked: _.contains(subgroup.busyForms, busyform.id) || (busyform.id === 256 && subgroup.busyFormDescription && subgroup.busyFormDescription.length > 0),
            monthNum: subgroup.monthNum,
            busyFormDescription: subgroup.busyFormDescription,
            trackNumber: student + '_' + subgroup.monthNum + '_' + busyform.id
          });
        }
        return result;
      };
      busy = [];
      for (i = 0, len = groupBusy.length; i < len; i++) {
        group = groupBusy[i];
        ref = mapSubGroup(group);
        for (j = 0, len1 = ref.length; j < len1; j++) {
          element = ref[j];
          busy.push(element);
        }
      }
      busy = _.sortBy(busy, function(o) {
        var busyLevel, orderNum;
        orderNum = [128, 1, 2, 4, 8, 16, 32, 64, 256];
        busyLevel = orderNum.indexOf(o.id);
        return o.monthNum + busyLevel / orderNum.length;
      });
      return {
        student: groupBusy[0].student,
        globalYearId: groupBusy[0].globalYearId,
        busy: busy,
        errors: []
      };
    };
    inverseMap = function(monthNum) {
      var data, getCheckedForms, getDescription, groupedBusy, i, len, ref, result;
      getCheckedForms = function(busy) {
        return _.chain(busy).where({
          checked: true
        }).map(function(busy) {
          return busy.id;
        }).value();
      };
      getDescription = function(busy) {
        return _.chain(busy).findWhere({
          id: 256
        }).value().busyFormDescription;
      };
      result = [];
      ref = $scope.data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        groupedBusy = _.chain(data.busy).groupBy(function(o) {
          return o.monthNum;
        }).value();
        for (monthNum in groupedBusy) {
          result.push({
            student: data.student,
            globalYearId: $scope.globalYear.id,
            monthNum: monthNum,
            busyForms: getCheckedForms(groupedBusy[monthNum]),
            BusyFormDescription: getDescription(groupedBusy[monthNum])
          });
        }
      }
      return result;
    };
    getChildsBusy = function(monthnum, classId) {
      return requests.getChildsBusy($scope.globalYear.id, monthnum, $scope["class"].id);
    };
    $scope.applyFilters = function() {
      return checkChanges(function() {
        $scope.tableReady = false;
        $scope.filterWork = true;
        $scope.readonly = true;
        _.each($scope.months, function(o) {
          return o.errors = [];
        });
        return requests.getReadWriteRights().then(function() {
          return getChildsBusy(null, null).then(function() {
            window.dataWereChanged = false;
            $scope.filterWork = false;
            return $scope.tableReady = true;
          });
        });
      });
    };
    $scope.getClasses = function() {
      return requests.getClasses();
    };
    $scope.checkRow = function(row) {
      var allMonths, diff, rowMonths;
      allMonths = _.chain($scope.months).filter(function(o) {
        return o.id > 0;
      }).pluck('id').value();
      row.hasNotChoise = !_.chain(row.busy).filter(function(b) {
        return _.contains(allMonths, b.monthNum);
      }).pluck('checked').some().value();
      if (row.hasNotChoise) {
        _.chain($scope.months).each(function(m) {
          return m.errors = _.without(m.errors, row.id);
        }).each(function(m) {
          return m.hasErrors = _.some(m.errors);
        }).value();
        row.errors = [];
        row.hasErrors = false;
        return;
      }
      rowMonths = _.chain(row.busy).where({
        checked: true
      }).pluck('monthNum').intersection(allMonths).value();
      diff = _.chain(allMonths).difference(rowMonths).value();
      _.chain($scope.months).each(function(m) {
        if (_.contains(diff, m.id)) {
          return m.errors.push(row.id);
        } else {
          return m.errors = _.without(m.errors, row.id);
        }
      }).each(function(m) {
        return m.hasErrors = _.some(m.errors);
      }).value();
      row.errors = diff;
      row.hasErrors = _.some(diff);
      return window.dataWereChanged = true;
    };
    $scope.changeOther = function(busy) {
      return busy.checked = busy.busyFormDescription.length > 0;
    };
    $scope.save = function() {
      return requests.saveChildsBusy($scope.globalYear.id, null, $scope["class"].id).then(window.dataWereChanged = false);
    };
    $scope.cancel = function() {
      return $scope.applyFilters();
    };
    checkChanges = function(handler) {
      return checkForChanges().done(handler);
    };
    $scope.selectMonth = function(month) {
      $scope.month.selected = false;
      $scope.month = month;
      $scope.month.selected = true;
      return _.chain($scope.data).each($scope.checkRow).value();
    };
    document.global = {
      applyFilters: $scope.applyFilters,
      saveButton: $scope.save,
      cancelButton: $scope.cancel
    };
    $scope.month = _.first($scope.months);
    $scope.month.selected = true;
    jobs = [];
    jobs.push(requests.getGlobalYears().then(function() {
      return requests.getClasses();
    }));
    jobs.push(requests.getBusyTypes());
    return $q.all(jobs).then(function() {
      return $scope.viewReady = true;
    });
  });
})(window.angular);
