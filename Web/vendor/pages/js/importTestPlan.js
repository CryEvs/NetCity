var importTestPlan;

importTestPlan = function(params) {

  /*
  	todo 
  		валидация расширения файла
   */
  var _datasubmit, attachBtn, dialog, fileDialogContent;
  fileDialogContent = '<form name="form" method="POST" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kImportFile + '<input type="file" id="fileupload" name="file"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> </form>';
  _datasubmit = null;
  attachBtn = function(dialog) {
    var ext, fileName;
    if (!$('#fileName').val()) {
      alert('Необходимо выбрать файл');
      return;
    }
    if ($('#fileName').val()) {
      fileName = $('#fileName').val();
      ext = fileName.split('.');
      if (ext[ext.length - 1] !== "xls") {
        alert('Необходимо выбрать файл импорта формата "xls".');
        return false;
      }
    }
    $(document).trigger('showProcessing');
    _datasubmit.submit();
  };
  dialog = $.show.dialog({
    title: 'Импорт плана контрольной работы',
    onshown: function(dialog) {
      $('input[name="file"]').on('change', function() {
        var elements;
        elements = this.value.split('\\');
        $('#fileName').val(elements[elements.length - 1]);
        return $(this).attr('title', elements[elements.length - 1]);
      });
      $('#fileupload').bind('fileuploadsubmit', function(e, data) {
        data.formData = params;
      });
      $('#fileupload').fileupload({
        url: urlHelper.makeUrl("/asp/Grade/QA/CheckExcelTestPlan.asp", {
          "_AJAXCALL_": 1
        }),
        dataType: 'json',
        add: function(e, data) {
          _datasubmit = data;
        },
        done: function(e, response) {
          var confirm, i, j, len, len1, messages, ref, ref1, warning;
          if (!response.result) {
            return $.show.error(language.Generic.Common.kUnexpErr);
          } else if (response.result.isError) {
            return $.show.error(response.result.message);
          } else {
            if (response.result.data.showWarnings) {
              dialog.close();
              messages = [];
              ref = response.result.data.warnings;
              for (i = 0, len = ref.length; i < len; i++) {
                warning = ref[i];
                if (warning && warning !== "") {
                  messages.push($.show.getConfirmation(warning));
                }
              }
              ref1 = response.result.data.confirms;
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                confirm = ref1[j];
                if (confirm && confirm !== "") {
                  messages.push($.show.getConfirmation(confirm));
                }
              }
              return extDeferred.when(messages).then(function() {
                return jsSubmit({
                  action: urlHelper.makeUrl("/asp/Grade/QA/ImportTestPlan.asp", {
                    "_AJAXCALL_": 1
                  }),
                  showProcessing: true
                }).then(function() {
                  return DoSubmit(document.TestPlan);
                });
              });
            } else {
              return DoSubmit(document.TestPlan);
            }
          }
        },
        fail: function(e, response) {
          if (response.jqXHR.responseJSON.isError) {
            return $.show.error(response.jqXHR.responseJSON.message);
          }
        },
        always: function(e, data) {
          $(document).trigger('closeProcessing');
          return dialog.close();
        }
      });
    },
    message: fileDialogContent,
    buttons: [
      {
        label: 'Импорт',
        action: attachBtn,
        cssClass: 'btn-primary'
      }
    ]
  });
};

//# sourceMappingURL=importTestPlan.js.map
