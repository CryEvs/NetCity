(function(angular) {
  'use strict';
  return angular.module('irtech.netcity.admin.schools').controller('AdminListCtrl', function($scope, $http, $q, $uibModalInstance, school) {
    var changePasswordCtrl, ctrl;
    ctrl = null;
    $scope.school = school;
    $scope.header = "Администрирование образовательной организации";
    changePasswordCtrl = require("../../../../../vendor/pages/users/js/changePassword.coffee");
    ctrl = new changePasswordCtrl({});
    $http.get("/webapi/schools/" + school.id + "/admins").then(function(response) {
      $scope.ready = true;
      return $scope.admins = response.data;
    });
    $scope.changePassword = function(userId) {
      $(".modal-backdrop.fade.in").css("z-index", "inherit");
      $(".modal.fade.in").css("z-index", "inherit");
      return ctrl.changePassword(userId);
    };
    return $scope.cancel = function() {
      return $uibModalInstance.dismiss('cancel');
    };
  });
})(window.angular);
