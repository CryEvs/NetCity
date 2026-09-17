angular.module('uikit.dialogs.controllers', ['ui.bootstrap', 'ui.bootstrap.modal']).controller('errorDialogCtrl', function($scope, $uibModalInstance, header, msg, defaultStrings) {
  $scope.header = angular.isDefined(header) ? header : defaultStrings.error;
  $scope.msg = angular.isDefined(msg) ? msg : defaultStrings.errorMessage;
  $scope.defaultStrings = defaultStrings;
  $scope.close = function() {
    $uibModalInstance.close();
    return $scope.$destroy();
  };
}).controller('waitDialogCtrl', function($scope, $uibModalInstance, $timeout, msg, progress, defaultStrings) {
  $scope.header = defaultStrings.pleaseWaitEllipsis;
  $scope.msg = angular.isDefined(msg) ? msg : defaultStrings.pleaseWaitMessage;
  $scope.progress = angular.isDefined(progress) ? progress : 100;
  $scope.defaultStrings = defaultStrings;
  $scope.$on('dialogs.wait.complete', function() {
    return $timeout(function() {
      $uibModalInstance.close();
      $scope.$destroy();
    });
  });
  $scope.$on('dialogs.wait.message', function(evt, args) {
    $scope.msg = angular.isDefined(args.msg) ? args.msg : $scope.msg;
  });
  $scope.$on('dialogs.wait.progress', function(evt, args) {
    $scope.msg = angular.isDefined(args.msg) ? args.msg : $scope.msg;
    $scope.progress = angular.isDefined(args.progress) ? args.progress : $scope.progress;
  });
  return $scope.getProgress = function() {
    return {
      width: $scope.progress + '%'
    };
  };
}).controller('notifyDialogCtrl', function($scope, $uibModalInstance, header, msg, defaultStrings) {
  $scope.header = angular.isDefined(header) ? header : defaultStrings.notification;
  $scope.msg = angular.isDefined(msg) ? msg : defaultStrings.notificationMessage;
  $scope.defaultStrings = defaultStrings;
  return $scope.close = function() {
    $uibModalInstance.close();
    $scope.$destroy();
  };
}).controller('confirmDialogCtrl', function($scope, $uibModalInstance, header, msg, defaultStrings) {
  $scope.header = angular.isDefined(header) ? header : defaultStrings.confirmation;
  $scope.msg = angular.isDefined(msg) ? msg : defaultStrings.confirmationMessage;
  $scope.defaultStrings = defaultStrings;
  $scope.no = function() {
    return $uibModalInstance.dismiss('no');
  };
  return $scope.yes = function() {
    return $uibModalInstance.close('yes');
  };
});

angular.module('uikit.dialogs.services', ['ui.bootstrap.modal', 'uikit.dialogs.controllers']).service('$showerModalDialog', function($dialogs) {
  var counter, wait;
  wait = null;
  counter = 0;
  return {
    show: function() {
      if (counter === 0) {
        wait = $dialogs.wait(language.Generic.Curriculum.kPleaseWait);
      }
      return counter++;
    },
    close: function() {
      return setTimeout(function() {
        counter--;
        if (counter === 0) {
          return wait.close();
        }
      }, 100);
    }
  };
}).service('$longWork', function($dialogs) {
  var counter, wait;
  wait = null;
  counter = 0;
  return {
    execute: function(work, message) {
      this.show();
      work["finally"]((function(_this) {
        return function() {
          return _this.close();
        };
      })(this));
      return work;
    },
    show: function() {
      if (counter === 0) {
        wait = $dialogs.wait(language.Generic.Curriculum.kPleaseWait);
      }
      return counter++;
    },
    close: function() {
      return setTimeout(function() {
        counter--;
        if (counter === 0) {
          return wait.close();
        }
      }, 100);
    }
  };
}).factory('$dialogs', [
  '$uibModal', 'defaultStrings', function($modal, defaultStrings) {
    return {
      error: function(header, msg, isStatic) {
        return $modal.open({
          templateUrl: '/dialogs/error.html',
          controller: 'errorDialogCtrl',
          backdrop: isStatic ? 'static' : true,
          keyboard: isStatic ? false : true,
          resolve: {
            header: function() {
              return angular.copy(header);
            },
            msg: function() {
              return angular.copy(msg);
            }
          }
        });
      },
      wait: function(msg, progress) {
        return $modal.open({
          templateUrl: '/dialogs/wait.html',
          controller: 'waitDialogCtrl',
          backdrop: 'static',
          keyboard: false,
          resolve: {
            msg: function() {
              return angular.copy(msg);
            },
            progress: function() {
              return angular.copy(progress);
            }
          }
        });
      },
      message: function(msg, isStatic) {
        return $modal.open({
          templateUrl: '/dialogs/notify.html',
          controller: 'notifyDialogCtrl',
          backdrop: isStatic ? 'static' : true,
          keyboard: isStatic ? false : true,
          resolve: {
            header: function() {
              return angular.copy("Внимание!");
            },
            msg: function() {
              return angular.copy(msg);
            }
          }
        });
      },
      notify: function(header, msg, isStatic) {
        return $modal.open({
          templateUrl: '/dialogs/notify.html',
          controller: 'notifyDialogCtrl',
          backdrop: isStatic ? 'static' : true,
          keyboard: isStatic ? false : true,
          resolve: {
            header: function() {
              return angular.copy(header);
            },
            msg: function() {
              return angular.copy(msg);
            }
          }
        });
      },
      confirm: function(header, msg, isStatic) {
        return $modal.open({
          templateUrl: '/dialogs/confirm.html',
          controller: 'confirmDialogCtrl',
          backdrop: isStatic ? 'static' : true,
          keyboard: isStatic ? false : true,
          resolve: {
            header: function() {
              return angular.copy(header);
            },
            msg: function() {
              return angular.copy(msg);
            }
          }
        });
      },
      create: function(url, ctrlr, data, opts) {
        var b, k, w;
        opts = angular.isDefined(opts) ? opts : {};
        k = angular.isDefined(opts.keyboard) ? opts.keyboard : true;
        b = angular.isDefined(opts.backdrop) ? opts.backdrop : true;
        w = angular.isDefined(opts.windowClass) ? opts.windowClass : 'dialogs-default';
        return $modal.open({
          templateUrl: url,
          controller: ctrlr,
          keyboard: k,
          backdrop: b,
          windowClass: w,
          resolve: {
            data: function() {
              return angular.copy(data);
            }
          }
        });
      },
      translate: function(newStrings) {
        return angular.extend(defaultStrings, newStrings);
      }
    };
  }
]);

angular.module('uikit.dialogs', ['uikit.dialogs.services', 'ngSanitize']).run([
  '$templateCache', '$interpolate', function($templateCache, $interpolate) {
    var endSym, startSym;
    startSym = $interpolate.startSymbol();
    endSym = $interpolate.endSymbol();
    $templateCache.put('/dialogs/error.html', '<div class="bootstrap-dialog type-primary"> <div class="modal-header" style="background-color: #d2322d;"> <div class="bootstrap-dialog-header"> <div class="bootstrap-dialog-close-button" style="display: block;"> <button class="close" ng-click="no()">&times;</button> </div> <div class="bootstrap-dialog-title"><span class="glyphicon glyphicon-warning-sign"></span> ' + startSym + 'header' + endSym + '</div> </div> </div> <div class="modal-body"> <div class="bootstrap-dialog-body"> <div class="bootstrap-dialog-message text-danger" ng-bind-html="msg"></div> </div> </div> <div class="modal-footer"> <div class="bootstrap-dialog-footer"> <div class="bootstrap-dialog-footer-buttons"> <button type="button" class="btn btn-default" ng-click="close()"> <span class="bootstrap-dialog-button-icon glyphicon glyphicon-remove-sign"></span>' + startSym + 'defaultStrings.close' + endSym + '</button> </div> </div> </div> </div>');
    $templateCache.put('/dialogs/notify.html', '<div class="bootstrap-dialog type-primary"> <div class="modal-header"> <div class="bootstrap-dialog-header"> <div class="bootstrap-dialog-close-button" style="display: block;"> <button class="close" ng-click="no()">&times;</button> </div> <div class="bootstrap-dialog-title"><span class="glyphicon glyphicon-info-sign"></span> ' + startSym + 'header' + endSym + '</div> </div> </div> <div class="modal-body"> <div class="bootstrap-dialog-body"> <div class="bootstrap-dialog-message" ng-bind-html="msg"></div> </div> </div> <div class="modal-footer"> <div class="bootstrap-dialog-footer"> <div class="bootstrap-dialog-footer-buttons"> <button type="button" class="btn btn-primary" ng-click="close()">' + startSym + 'defaultStrings.ok' + endSym + '</button> </div> </div> </div> </div>');
    $templateCache.put('/dialogs/wait.html', '<div class="bootstrap-dialog type-primary"> <div class="modal-header"> <div class="bootstrap-dialog-header"> <div class="bootstrap-dialog-title"> <span class="glyphicon glyphicon-time"></span> ' + startSym + 'header' + endSym + '</div> </div> </div> <div class="modal-body"> <div class="bootstrap-dialog-body"> <div class="bootstrap-dialog-message"> <p ng-bind-html="msg"></p> <div class="progress progress-striped active"> <div class="progress-bar progress-bar-info" ng-style="getProgress()"></div> <span class="sr-only">' + startSym + 'progress' + endSym + '' + startSym + 'defaultStrings.percentComplete' + endSym + '</span> </div> </div> </div> </div> </div>');
    return $templateCache.put('/dialogs/confirm.html', '<div class="bootstrap-dialog type-primary"> <div class="modal-header"> <div class="bootstrap-dialog-header"> <div class="bootstrap-dialog-close-button" style="display: block;"> <button class="close" ng-click="no()">&times;</button> </div> <div class="bootstrap-dialog-title"> ' + startSym + 'header' + endSym + '</div> </div> </div> <div class="modal-body"> <div class="bootstrap-dialog-body"> <div class="bootstrap-dialog-message" ng-bind-html="msg"></div> </div> </div> <div class="modal-footer"> <div class="bootstrap-dialog-footer"> <div class="bootstrap-dialog-footer-buttons"> <button class="btn btn-primary" autofocus ng-click="yes()"> <span class="bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign"></span>' + startSym + 'defaultStrings.yes' + endSym + '</button> <button class="btn btn-default" ng-click="no()"> <span class="bootstrap-dialog-button-icon glyphicon glyphicon-remove-sign"></span>' + startSym + 'defaultStrings.no' + endSym + '</button> </div> </div> </div> </div>');
  }
]);

angular.module("uikit.dialogs").value("defaultStrings", {
  error: "Ошибка",
  errorMessage: "Неожиданная ошибка.",
  close: "Закрыть",
  pleaseWait: "Пожалуйста, подождите",
  pleaseWaitEllipsis: "Пожалуйста, подождите...",
  pleaseWaitMessage: "Waiting on operation to complete.",
  percentComplete: "% Завершено",
  notification: "Уведомление",
  notificationMessage: "Неизвестное уведомление.",
  confirmation: "Подтверждение",
  confirmationMessage: "Требуется подтверждение.",
  ok: "ОК",
  yes: "Да",
  no: "Нет"
});
