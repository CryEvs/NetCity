(function(angular) {
  'use strict';
  angular.module('irtech.netcity.em.diagnosticworks').controller('EditVariantCtrl', function($scope, $http, $q, $alerts, $dialogs, $uibModalInstance, $longWork, model) {
    var appointedTypes, validate;
    $scope.header = "Создание/редактирование варианта диагностической работы";
    appointedTypes = {
      all: {
        id: -1,
        name: "Назначено всем"
      },
      schools: {
        id: 0,
        name: "Назначено школам"
      }
    };
    $.extend($scope, {
      language: language,
      data: {
        variant: model.variant,
        diagnosticWork: model.diagnosticWork,
        appointedTypes: appointedTypes,
        schools: []
      }
    });
    $http.get("/webapi/em/years/schools").success(function(response) {
      return $scope.data.schools = response;
    }).then(function() {
      $scope.ready = true;
      return window.setTimeout((function() {
        var initingFilters;
        return initingFilters = false;
      }), 1000);
    })["catch"](function(response) {
      if (response != null ? response.data : void 0) {
        return $.show.error(response.data.message || language.Generic.Common.kErrorMsg);
      } else {
        return $.show.error(language.Generic.Common.kErrorMsg);
      }
    });
    $scope.showAppointedSchools = function() {
      return $scope.data.variant.appointedType.id === appointedTypes.schools.id;
    };
    validate = function() {
      if (!$scope.data.variant.name) {
        $dialogs.message("Наименование не может быть пустым");
        return false;
      }
      if ($scope.data.variant.appointedType.id === appointedTypes.schools.id && $scope.data.variant.schools.length <= 0) {
        $dialogs.message("Выбирите школы для назначения");
        return false;
      }
      return true;
    };
    $scope.ok = function() {
      var dwVariant;
      dwVariant = _.pick($scope.data.variant, 'id', 'name', 'testPlanId', 'schools', 'appointedType');
      dwVariant.diagnosticWork = _.pick($scope.data.variant.diagnosticWork, 'id', 'name');
      if (!validate()) {
        return;
      }
      return $http.post("/webapi/em/years/diagnosticWorks/variant", dwVariant).success(function(response) {
        $uibModalInstance.close(response);
        return $alerts.success("Сохранен вариант");
      })["catch"](function(response) {
        return $alerts.error(response.message || response.details);
      });
    };
    $scope.cancel = function() {
      return $uibModalInstance.dismiss('cancel');
    };
  });
})(window.angular);
