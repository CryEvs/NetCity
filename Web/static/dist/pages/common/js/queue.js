var taskQueue;

taskQueue = (function() {
  var getTemplate, prepareHub;
  getTemplate = $.ajax({
    url: '/vendor/pages/templates/queueTasks.html',
    dataType: 'html'
  });
  prepareHub = function(progressHandler, completeHandler, errorHandler) {
    var connDeferr, connectionInfo;
    connDeferr = $.Deferred();
    if (connectionInfo && connectionInfo.queueHub) {
      console.log("connection is ready");
      connDeferr.resolve(connectionInfo);
      return connDeferr.promise();
    }
    connectionInfo = {
      connection: $.connection.hub,
      queueHub: $.connection.queueHub
    };
    connectionInfo.connection.qs = {
      "at": appContext.at
    };
    connectionInfo.queueHub.client.progress = function(data) {
      console.log("progress");
      return progressHandler(data);
    };
    connectionInfo.queueHub.client.complete = function(data) {
      console.log("complete");
      completeHandler(data);
      connectionInfo.queueHub = null;
      return connectionInfo.connection.stop();
    };
    connectionInfo.queueHub.client.error = function(data) {
      console.log("error");
      errorHandler(data);
      connectionInfo.queueHub = null;
      return connectionInfo.connection.stop();
    };
    connectionInfo.connection.start().done(function() {
      console.log("connection started");
      return connDeferr.resolve(connectionInfo);
    }).fail(function() {
      console.log("connection start fail");
      connectionInfo = null;
      return connDeferr.reject("Ошибка соединения с сервером");
    });
    return connDeferr.promise();
  };
  return {
    execute: function(opt) {
      var ctx, defOpts, dialogSettings, dialogShowed, onComplete, onError, onErrorCommon, onErrorUser, onProgress, opts, processingDialog, setProgress, workDefer;
      defOpts = {
        getTaskFunc: null,
        closeOnStart: false,
        hint: "",
        userErrorHandler: null,
        userCloseHandler: null
      };
      opts = $.extend({}, defOpts, opt);
      workDefer = $.Deferred();
      ctx = {
        taskId: null,
        error: false,
        progress: false,
        connectionInfo: null
      };
      dialogShowed = $.Deferred();
      dialogSettings = {
        closable: true,
        closeByBackdrop: true,
        closeByKeyboard: true,
        buttons: [
          {
            id: 'queue-task-btn-close',
            cssClass: 'btn-primary hide',
            label: "Закрыть",
            hotkey: 13,
            icon: "glyphicon glyphicon-ok-sign",
            action: function(dialog) {
              return dialog.close();
            }
          }
        ],
        onshown: function() {
          return dialogShowed.resolve();
        },
        onhide: function() {
          if (!ctx.taskId && !ctx.error) {
            return false;
          }
          if (!ctx.connectionInfo) {
            return false;
          }
          ctx.connectionInfo.queueHub = null;
          if (!ctx.connectionInfo.connection) {
            return false;
          }
          ctx.connectionInfo.connection.stop();
          if (ctx.taskId && !ctx.error && opts.userCloseHandler) {
            return opts.userCloseHandler();
          }
        }
      };
      if (opts.hint) {
        dialogSettings.content = "<div id='queue-task-hint' class='alert alert-danger hide' role='alert'><strong>Внимание!</strong> " + opts.hint + " </div>";
      }
      processingDialog = $.show.longWork("Постановка в очередь обработки", "Подождите", dialogSettings);
      setProgress = function(progressText) {
        console.log(progressText);
        return $("div.bootstrap-dialog-message span.dialog-message").text(progressText);
      };
      onProgress = function(progressInfo) {
        ctx.progress = true;
        return setProgress(progressInfo.Status);
      };
      onComplete = function(completeInfo) {
        processingDialog.close();
        return workDefer.resolve(completeInfo.Data);
      };
      onErrorCommon = function(errorInfo) {
        ctx.error = true;
        processingDialog.close();
        return console.log(errorInfo);
      };
      onError = function(errorInfo) {
        var errMessage;
        onErrorCommon(errorInfo);
        errMessage = errorInfo.Details || language.Generic.Common.kUnexpErr;
        $.show.error(errMessage);
        return workDefer.reject(errMessage);
      };
      onErrorUser = function(errorInfo) {
        var errMessage;
        onErrorCommon(errorInfo);
        errMessage = errorInfo.Details || language.Generic.Common.kUnexpErr;
        if (!opts.userErrorHandler) {
          $.show.error(errMessage);
        } else {
          opts.userErrorHandler(errMessage);
        }
        return workDefer.reject(errMessage);
      };
      prepareHub(onProgress, onComplete, onErrorUser).fail(onError).then(function(connectionInfo) {
        ctx.connectionInfo = connectionInfo;
        return dialogShowed.then(function() {
          return opts.getTaskFunc().fail(function() {
            ctx.error = true;
            processingDialog.close();
            return workDefer.reject();
          }).then(function(enqueueInfo) {
            var activeConnectionTask, taskId;
            taskId = enqueueInfo.taskId || enqueueInfo;
            activeConnectionTask = enqueueInfo.activeConnectionExec;
            console.log("Успешно создана задача " + taskId);
            return connectionInfo.queueHub.server.startTask(taskId).done(function() {
              console.log("Успешно запущена в обработку задача " + taskId);
              if (!enqueueInfo.activeConnectionExec) {
                $("#queue-task-btn-close").removeClass("hide");
                $("#queue-task-hint").removeClass("hide");
              } else {
                $("#queue-task-btn-close").removeClass("hide").removeClass("btn-primary").empty().append("<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle\"></span>" + language.Generic.Buttons.kCancel);
              }
              ctx.taskId = taskId;
              if (opts.closeOnStart) {
                connectionInfo.connection.stop();
                $.show.message("Отчет поставлен в очередь на обработку. \n Результат выполнения придет Вам на внутреннюю почту.");
                processingDialog.close();
                return;
              }
              if (!ctx.progress) {
                return setProgress("В очереди обработки");
              }
            }).fail(onError);
          });
        });
      });
      return workDefer.promise();
    },
    showQueuedTasks: function() {
      var ctrl;
      ctrl = this;
      return jsSubmit({
        action: "/webapi/queue/tasks",
        method: "GET",
        showProcessing: true,
        onSuccess: function(tasks) {
          var model;
          model = {
            tasks: tasks,
            language: language
          };
          return getTemplate.then(function(html) {
            var compiledTpl, message;
            compiledTpl = Handlebars.compile(html);
            if (model.tasks.length) {
              message = compiledTpl(model);
            } else {
              message = language.Movement.kMsgNoActiveQueuedImportProcesses;
            }
            return $.show.dialog({
              title: language.Generic.Movement.kQueuedImportProcesses,
              size: BootstrapDialog.SIZE_WIDE,
              message: message,
              buttons: [
                {
                  label: language.Generic.Buttons.kRefresh,
                  action: function(dialog) {
                    dialog.successClose();
                    return ctrl.showQueuedTasks();
                  }
                }, {
                  label: language.Generic.Calendar.kClose,
                  action: function(dialog) {
                    return dialog.close();
                  }
                }
              ]
            });
          });
        }
      });
    }
  };
})();

(function(exp, name) {
  var exported, exports;
  exported = false;
  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(taskQueue, "taskQueue");
