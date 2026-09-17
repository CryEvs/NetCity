(function(angular) {
  'use strict';
  angular.module('irtech.netcity.em.diagnosticworks').controller('DiagnosticWorksListCtrl', function($scope, $http, $alerts, $uibModal, $longWork, $dialogs, $q) {
    var DiagnosticWork, Variant, getSelectedDiagnosticWorks, gradeConstants, initingFilters, loader, modalDiagnosticWork, promise;
    $scope.$parent.pagetitle = "Диагностические работы";
    DiagnosticWork = (function() {
      function DiagnosticWork() {
        this.id = 0;
        this.name = '';
        this.globalYearId = null;
        this.subjectFipi = null;
        this.startDay = null;
        this.endDay = null;
        this.grades = [];
        this.variants = [];
        this.emId = null;
        this.published = false;
        return;
      }

      return DiagnosticWork;

    })();
    Variant = (function() {
      function Variant() {
        this.diagnosticWork = {
          id: 0,
          name: ''
        };
        this.id = 0;
        this.name = '';
        this.testPlanId = null;
        this.schools = [];
        this.appointedType = {
          id: -1
        };
        return;
      }

      return Variant;

    })();
    $.extend($scope, {
      viewReady: false,
      tableReady: false,
      data: {
        globalYears: [],
        globalYear: null,
        subjects: [],
        subject: null,
        responseSubjects: [],
        diagnosticWorks: [],
        diagnosticWork: new DiagnosticWork(),
        variant: new Variant(),
        defaultVal: {
          id: -1,
          name: "Все"
        },
        idSelected: []
      },
      urls: {
        year: "/webapi/em/years?main=true",
        subjects: "/webapi/em/years/subjectFipi"
      }
    });
    gradeConstants = require("./../../../../../vendor/pages/grade/js/journal-constants.js");
    $scope.updateTable = function() {
      loader.getDiagnosticWorks($scope.data.globalYear.id, $scope.data.subject.id).success(function(response) {
        var diagnosticWorkIndex, variantIndex;
        $scope.data.diagnosticWorks = response;
        $scope.data.variants = [];
        if (response.length > 0) {
          variantIndex = 0;
          diagnosticWorkIndex = 0;
          _.each($scope.data.diagnosticWorks, function(diagnosticWork) {
            var date;
            diagnosticWork.startDay = dateUtils.date2str(new Date(diagnosticWork.startDay));
            date = diagnosticWork.startDay;
            if (diagnosticWork.endDay) {
              diagnosticWork.endDay = dateUtils.date2str(new Date(diagnosticWork.endDay));
              date = date + " - " + diagnosticWork.endDay;
            }
            diagnosticWork.date = date;
            diagnosticWork.gradesForShow = diagnosticWork.grades.join(", ");
            _.each(diagnosticWork.variants, function(variant, index) {
              if (index === 0) {
                variant.isFirstVariant = true;
                diagnosticWorkIndex = diagnosticWorkIndex + 1;
                variant.diagnosticWorkIndex = diagnosticWorkIndex;
              }
              variant.diagnosticWork = diagnosticWork;
              variant.index = variantIndex;
              $scope.data.variants.push(variant);
              variantIndex = variantIndex + 1;
            });
          });
          $scope.tableReady = true;
        } else {
          $scope.tableReady = false;
        }
      });
    };
    loader = {
      getGlobalYears: function() {
        return $http.get("/webapi/em/years");
      },
      getDiagnosticWorks: function(yearId, subjectId) {
        return $http.get("/webapi/em/years/" + yearId + "/diagnosticWorks/" + subjectId);
      },
      getVariants: function(id) {
        return $http.get("/webapi/em/years/" + yearId + "/diagnosticWorks/" + id + "/variants");
      }
    };
    initingFilters = true;
    promise = [];
    promise.push($http.get($scope.urls.subjects).then(function(response) {
      $scope.data.responseSubjects = angular.copy(response.data);
      response.data.unshift({
        id: -1,
        name: "Все"
      });
      return $scope.data.subjects = response.data;
    }));
    promise.push(loader.getGlobalYears().success(function(response) {
      $scope.data.globalYears = response;
      if (!$scope.data.globalYear) {
        return $scope.data.globalYear = _.first($scope.data.globalYears);
      }
    })["catch"](function(response) {
      if (response != null ? response.data : void 0) {
        return $.show.error(response.data.message || language.Generic.Common.kErrorMsg);
      } else {
        return $.show.error(language.Generic.Common.kErrorMsg);
      }
    }));
    $q.all(promise).then(function() {
      $scope.updateTable();
      return $scope.viewReady = true;
    });
    modalDiagnosticWork = function(diagnosticWork) {
      var modalInstance;
      modalInstance = $uibModal.open({
        templateUrl: '/js/app/em/diagnosticworks/edit/template.html',
        controller: 'DiagnosticWorkCtrl',
        size: "lg",
        resolve: {
          model: function() {
            return {
              diagnosticWork: diagnosticWork,
              subjects: $scope.data.responseSubjects
            };
          }
        }
      });
      modalInstance.rendered.then(function() {
        return dateInput.initDateInputs();
      });
      modalInstance.result.then((function() {
        return $scope.updateTable();
      }));
    };
    $scope.addDiagnosticWork = function() {
      var diagnosticWork;
      if ($scope.data.globalYear.id === -1) {
        $dialogs.message("Пожалуйста, выберите учебный год");
        return;
      }
      diagnosticWork = new DiagnosticWork();
      diagnosticWork.subjectFipi = $scope.data.subject;
      diagnosticWork.globalYearId = $scope.data.globalYear.id;
      modalDiagnosticWork(diagnosticWork);
    };
    $scope.editDiagnosticWork = function(diagnosticWork) {
      modalDiagnosticWork(diagnosticWork);
    };
    $scope.publish = function() {
      var diagnosticWorksId;
      diagnosticWorksId = getSelectedDiagnosticWorks();
      if (diagnosticWorksId.length === 0) {
        $dialogs.message("Пожалуйста, выберите диагностические работы для опубликования");
        return;
      }
      $.show.dialog({
        title: "Опубликование диагностических работ",
        size: "lg",
        message: "Опубликовать выбранные диагностические работы",
        buttons: [
          {
            label: "Да",
            action: function(dialog) {
              $http.post("/webapi/em/years/diagnosticWorks/publish/", diagnosticWorksId).success(function() {
                dialog.close();
                $scope.updateTable();
                return $alerts.success("Диагностические работы опубликованы");
              })["catch"](function(response) {
                return $alerts.error(response.data.message || response.data.details);
              });
            }
          }
        ]
      });
    };
    $scope.unpublish = function(diagnosticWork) {
      $.show.dialog({
        title: "Отозвать публикацию диагностической работы",
        size: "lg",
        message: "Отозвать публикацию выбранной диагностической работы",
        buttons: [
          {
            label: "Да",
            action: function(dialog) {
              $http.post("/webapi/em/years/diagnosticWorks/unpublish/", diagnosticWork.id).success(function() {
                dialog.close();
                $scope.updateTable();
                return $alerts.success("Публикация диагностической работы отозвана");
              })["catch"](function(response) {
                return $alerts.error(response.data.message || response.data.details);
              });
            }
          }
        ]
      });
    };
    getSelectedDiagnosticWorks = function() {
      var diagnosticWorksId;
      diagnosticWorksId = [];
      $scope.data.diagnosticWorks.forEach(function(dw) {
        if (dw.selected) {
          return diagnosticWorksId.push(dw.id);
        }
      });
      _.reject(diagnosticWorksId, function(ind) {
        return typeof ind === 'undefined' || ind === '' || ind === null;
      });
      return diagnosticWorksId;
    };
    $scope.removeDiagnosticWorks = function() {
      var diagnosticWorksId;
      diagnosticWorksId = getSelectedDiagnosticWorks();
      if (diagnosticWorksId.length === 0) {
        $dialogs.message("Пожалуйста, выберите диагностические работы для удаления");
        return;
      }
      $.show.dialog({
        title: "Удаление диагностических работ",
        size: "lg",
        message: "Удалить выбранные диагностические работы",
        buttons: [
          {
            label: "Да",
            action: function(dialog) {
              $http.post("/webapi/em/years/diagnosticWorks/", diagnosticWorksId).success(function() {
                dialog.close();
                $scope.updateTable();
                return $alerts.success("Диагностические работы удалены");
              })["catch"](function(response) {
                return $alerts.error(response.data.message || response.data.details);
              });
            }
          }
        ]
      });
    };
    $scope.editVariant = function(diagnosticWork, variant) {
      var modalInstance;
      if (variant === null) {
        variant = new Variant();
        variant.diagnosticWork.id = diagnosticWork.id;
      }
      modalInstance = $uibModal.open({
        templateUrl: '/js/app/em/diagnosticworks/editVariant/template.html',
        controller: 'EditVariantCtrl',
        size: "lg",
        resolve: {
          model: function() {
            return {
              diagnosticWork: diagnosticWork,
              variant: variant
            };
          }
        }
      });
      modalInstance.result.then(function(response) {
        if (response.isNewVariant) {
          $scope.showDialogEditTestPlan(diagnosticWork, response);
        }
        return $scope.updateTable();
      });
    };
    $scope.showDialogEditTestPlan = function(diagnosticWork, variant) {
      $.show.dialog({
        title: "Сохранен вариант диагностической работы",
        size: "lg",
        message: "Вариант сохранен, желаете перейти к редактированию плана работы",
        variant: variant,
        buttons: [
          {
            label: "Да",
            action: function(dialog) {
              $scope.editTestPlan(diagnosticWork, variant);
            }
          }
        ]
      });
    };
    $scope.editTestPlan = function(diagnosticWork, variant) {
      $scope.viewReady = false;
      postTo("/asp/Grade/QA/TestPlan.asp", {
        TestPlanId: variant.testPlanId,
        SubjectId: diagnosticWork.subjectFipi.id,
        GlobalYearId: diagnosticWork.globalYearId,
        MinGrade: _.min(diagnosticWork.grades),
        ATYPE: gradeConstants.assignmentTypes.DKR,
        Published: diagnosticWork.published
      });
    };
    $scope.delVariant = function(diagnosticWork, variant) {
      if (diagnosticWork.variants.length <= 1) {
        $dialogs.message("Нельзя удалить последний вариант для диагностической работы");
        return;
      }
      $.show.dialog({
        title: "Удаление варианта диагностической работы",
        size: "lg",
        message: "Удалить вариант диагностической работы",
        buttons: [
          {
            label: "Да",
            action: function(dialog) {
              $http["delete"]("/webapi/em/years/diagnosticWork/variant/" + variant.id).success(function(response) {
                dialog.close();
                $scope.updateTable();
                $alerts.success("Вариант диагностической работы удален");
              })["catch"](function(response) {
                return $.show.error(response.data.message || response.data.details || "Ошибка удаления варианта диагностической работы");
              });
            }
          }
        ]
      });
    };
  });
})(window.angular);
