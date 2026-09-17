var importTestPlan;

importTestPlan = function(params) {
  var $dialog, buttons, drawDialog, _clear, _datasubmit;
  drawDialog = function() {
    var dialog;
    if (!$('#fileAttachment').length) {
      dialog = $('<div id="fileAttachment" style="display: none;"></div>').html('<form name="form" method="POST" enctype="multipart/form-data"> <div class="upload"> <div id="button"> <div style="margin-right: 1px;">' + language.Generic.Common.kImportFile + '</div> <input type="file" id="fileupload" name="file" /> </div> <input type="text" id="fileName" disabled /> </div> </form>');
      $('body').append(dialog);
    }
    return $('#fileAttachment');
  };
  _clear = function() {
    $('#fileName').val('');
    $('input[name="file"]').attr('title', '');
  };
  _datasubmit = null;
  buttons = {};
  buttons['Импорт'] = function() {
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
  buttons[language.Generic.Curriculum.kBtnCancel] = function() {
    _clear();
    return $(this).dialog("close");
  };
  $dialog = drawDialog().dialog({
    title: 'Импорт',
    buttons: buttons,
    closeOnEscape: true,
    modal: true,
    resizable: false,
    draggable: true,
    width: 400,
    close: function() {
      return _clear();
    },
    open: function(event, ui) {
      $('input[name="file"]').change(function() {
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
        forceIframeTransport: true,
        dataType: 'json',
        add: function(e, data) {
          return _datasubmit = data;
        },
        done: function(e, response) {
          var confirm, messages, warning, _i, _j, _len, _len1, _ref, _ref1;
          if (response.result.isError) {
            alert(response.result.message);
            return $(document).trigger('closeProcessing');
          } else {
            if (response.result.data.showWarnings) {
              messages = [];
              _ref = response.result.data.warnings;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                warning = _ref[_i];
                if (warning && warning !== "") {
                  messages.push($.show.getConfirmation("<div style='text-align: left; white-space: pre-line;'>" + warning + "</div>"));
                }
              }
              _ref1 = response.result.data.confirms;
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                confirm = _ref1[_j];
                if (confirm && confirm !== "") {
                  messages.push($.show.getConfirmation("<div style='text-align: left; white-space: pre-line;'>" + confirm + "</div>"));
                }
              }
              return window.when(messages).then(function() {
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
        always: function(e, data) {
          _clear();
          return $("#fileAttachment").dialog("close");
        }
      });
    }
  });
};

//# sourceMappingURL=importTestPlan.js.map
