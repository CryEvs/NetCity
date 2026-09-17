(function(angular) {
  'use strict';
  angular.module('irtech.netcity.em.diagnosticworks').controller('DiagnosticWorkCtrl', function($scope, $http, $q, $alerts, $dialogs, $uibModalInstance, $longWork, model) {
    var validate, validateCurrGrades;
    $scope.header = "Создание/редактирование диагностической работы";
    $.extend($scope, {
      language: language,
      data: {
        diagnosticWork: model.diagnosticWork,
        subjects: model.subjects
      }
    });
    $scope.grades = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function(x) {
      return x.toString();
    });
    $scope.addDiagnosticWork = function() {
      var dwData;
      dwData = _.pick($scope.data.diagnosticWork, 'id', 'name', 'globalYearId', 'subjectFipi', 'startDay', 'endDay', 'grades', 'emId');
      if (dwData.startDay) {
        dwData.startDay = str2date(dwData.startDay);
      }
      if (dwData.endDay) {
        dwData.endDay = str2date(dwData.endDay);
      }
      if (!validate(dwData)) {
        return;
      }
      return $http.post("/webapi/em/years/" + $scope.data.diagnosticWork.globalYearId + "/diagnosticWorks/", dwData).success(function(response) {
        $uibModalInstance.close(response);
        return $alerts.success("Диагностическая работа сохранена");
      })["catch"](function(response) {
        return $alerts.error(response.message || response.details);
      });
    };
    $scope.cancel = function() {
      return $uibModalInstance.dismiss('cancel');
    };
    validate = function(dwData) {
      if (!dwData.subjectFipi || dwData.subjectFipi.id === -1) {
        $dialogs.message("Пожалуйста, выберите предмет");
        return false;
      }
      if (dwData.grades.length === 0) {
        $dialogs.message("Пожалуйста, выберите параллель");
        return false;
      } else if (!validateCurrGrades(dwData)) {
        $dialogs.message("Пожалуйста, выберите параллель из одного уровня аттестации");
        return false;
      }
      if (dwData.endDay && dwData.startDay > dwData.endDay) {
        $dialogs.message("Дата начала периода проведения не может быть позже даты окончания");
        return false;
      }
      if (!dwData.name) {
        $dialogs.message("Наименование не может быть пустым");
        return false;
      }
      if (!dwData.startDay) {
        $dialogs.message("Пожалуйста, укажите период проведения");
        return false;
      }
      return true;
    };
    validateCurrGrades = function(dwData) {
      var gradeSchool, grades, hightSchool, inGroup, middleSchool;
      grades = _.map(dwData.grades, function(o) {
        return Number(o);
      });
      inGroup = function(group) {
        return _.intersection(grades, group).length > 0;
      };
      gradeSchool = inGroup([1, 2, 3, 4]);
      middleSchool = inGroup([5, 6, 7, 8, 9]);
      hightSchool = inGroup([10, 11, 12]);
      return !((gradeSchool && middleSchool) || (middleSchool && hightSchool) || (gradeSchool && hightSchool));
    };
    $scope.ready = true;
    $('.input-daterange input').each(function() {
      $(this).datepicker("clearDates");
    });
    $('.input-daterange').datepicker({
      todayBtn: "linked"
    });
  });
})(window.angular);
