window.showQueuedTasks = function() {
  var source, template;
  source = "<table class=\"table\"> <tr> <th>{{language.Generic.MySettings.kEnqueueDate}}</th> <th>{{language.Generic.MySettings.kStartProcessingDate}}</th> <th>{{language.Generic.MySettings.kNumberInQueue}}</th> <th>{{language.Generic.Common.kFileName}}</th> <th>{{language.Generic.ServAdmin.kDocNumber}}</th> <th>{{language.Generic.Movement.kDocDate}}</th> <th>{{language.Generic.MySettings.kQueueCurrentStatus}}</th> </tr> {{#each tasks}} <tr> <td>{{EnqueueDate}}</td> <td>{{StartDate}}</td> <td>{{QueuePosition}}</td> <td>{{FileName}}</td> <td>{{DocNumber}}</td> <td>{{DocDate}}</td> <td>{{Status}}</td> </tr> {{/each}} </table>";
  template = Handlebars.compile(source);
  return jsSubmit({
    action: "/asp/ajax/GetQueuedTasks.asp",
    showProcessing: true,
    onSuccess: function(response) {
      var message, model;
      model = $.extend({}, response.data, {
        language: language
      });
      if (response.data.tasks.length > 0) {
        message = template(model);
      } else {
        message = language.Generic.Movement.kMsgNoActiveQueuedImportProcesses;
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
              return showQueuedTasks();
            }
          }, {
            label: language.Generic.Calendar.kClose,
            action: function(dialog) {
              return dialog.close();
            }
          }
        ]
      });
    }
  });
};

//# sourceMappingURL=queue.js.map
