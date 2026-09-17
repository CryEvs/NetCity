(function($) {
  var fields, methods;
  fields = {};
  methods = {
    deleteAttachmentAjax: function(params, onSuccessCallBack) {
      return jsSubmit({
        action: '/asp/ajax/Attachments/DeleteAttachments.asp',
        data: params,
        showProcessing: true,
        onSuccess: function() {
          return onSuccessCallBack();
        }
      });
    },
    deleteAttachment: function() {
      var attachments, params, trs;
      attachments = [];
      if (fields.options.multiple) {
        trs = $('tr[name="fileInfo"]').find('input:checked').parent().parent();
        $.each(trs, function() {
          return attachments.push(parseInt($(this).attr('id'), 10));
        });
        if (!attachments.length) {
          return;
        }
      } else {
        if (typeof $('tr[name="fileInfo"]').attr('id') === 'undefined') {
          return;
        }
        if (!$('tr[name="fileInfo"]').has('input[name="notDeletedFromDb"]').length) {
          attachments = [parseInt($('tr[name="fileInfo"]').attr('id'), 10)];
        }
        if (!attachments.length) {
          $('#attachFilesTable').remove();
          methods.showButtons();
          return;
        }
      }
      params = {
        attachments: attachments
      };
      return methods.deleteAttachmentAjax(params, function() {
        if (fields.options.multiple) {
          if (trs.length === $('tr[name="fileInfo"]').length) {
            $('#attachFilesTable').remove();
          } else {
            trs.remove();
          }
        } else {
          $('#attachFilesTable').remove();
        }
        methods.showButtons();
        return window.dataWereChanged = true;
      });
    },
    deleteButton: function(clickHandler) {
      return $.uicontrols.button({
        id: 'delete',
        size: 'btn-sm',
        label: language.Generic.Common.kRemove,
        icon: 'trash',
        click: clickHandler
      });
    },
    attachButton: function(opts) {
      return $.uicontrols.button({
        id: 'attach',
        size: 'btn-sm',
        label: opts.textButton,
        icon: 'paperclip',
        click: function() {
          return methods.addFileAttachment(opts);
        }
      });
    },
    showButtons: function() {
      var attachButton, bExistAttachments, buttons, deleteButton;
      $('#buttons').remove();
      buttons = $('<div></div>').attr('id', 'buttons').addClass('btn-group');
      if (!fields.options.multiple) {
        if (!$('tr[name="fileInfo"]').length) {
          attachButton = this.attachButton({
            textButton: language.Generic.Buttons.kAttachFile,
            textHeader: language.Generic.Buttons.kAttachFile
          });
          buttons.append(attachButton);
        } else {
          attachButton = this.attachButton({
            textButton: language.Generic.Buttons.kEditAttachment,
            textHeader: language.Generic.Buttons.kEditAttachment,
            description: $('td[name="description"]').text()
          });
          deleteButton = this.deleteButton(function() {
            return methods.deleteAttachment();
          });
          buttons.append(attachButton);
          buttons.append(deleteButton);
        }
      } else {
        attachButton = this.attachButton({
          textButton: language.Generic.Buttons.kAttachFile,
          textHeader: language.Generic.Buttons.kAttachFile
        });
        buttons.append(attachButton);
        bExistAttachments = $('tr[name="fileInfo"]').length > 0;
        if (bExistAttachments) {
          deleteButton = this.deleteButton(function() {
            return methods.deleteAttachment();
          });
          buttons.append(deleteButton);
        }
      }
      return fields.fileAttachmentsBlock.prepend(buttons);
    },
    attachFileDialogContent: '<form name="form" method="POST" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kSelectFile + '<input type="file" id="fileupload" name="fileAttachment"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> {{#if description}} <div class="form-group" name="description"> <label class="control-label">' + language.Generic.Curriculum.kDescription + '</label> <textarea class="form-control" rows="10" name="descriptionVal" style="border: 1px solid #8baed8;"></textarea> </div> {{/if}} </form>',
    addFileAttachment: function(opts) {
      var _datasubmit, attachBtn, cancelBtn, content, dialog, html;
      _datasubmit = null;
      content = Handlebars.compile(methods.attachFileDialogContent);
      html = content({
        description: fields.options.showDescription
      });
      cancelBtn = function(dialog) {
        return dialog.close();
      };
      attachBtn = function(dialog) {
        if (!$('#fileName').val()) {
          return alert('Необходимо выбрать файл');
        }
        if (_datasubmit.files[0].size && _datasubmit.files[0].size > 30000000) {
          return $.show.error(language.Generic.LearnApp.kServErrFileTooLarge + '28.6 Мб');
        }
        $(document).trigger('showProcessing');
        methods.deleteAttachment();
        _datasubmit.submit();
      };
      dialog = $.show.dialog({
        title: opts.textHeader,
        onshown: function(dialog) {
          if (opts.description) {
            $('textarea[name="descriptionVal"]').val(opts.description);
          }
          $('input[name="fileAttachment"]').on('change', function() {
            var elements;
            elements = this.value.split('\\');
            $('#fileName').val(elements[elements.length - 1]);
            return $(this).attr('title', elements[elements.length - 1]);
          });
          $('#fileupload').bind('fileuploadsubmit', function(e, data) {
            var description;
            if ($('textarea[name="descriptionVal"]')) {
              description = $('textarea[name="descriptionVal"]').val();
            }
            data.formData = $.extend({}, {
              description: description,
              fileName: $('#fileName').val()
            }, fields.params);
          });
          $('#fileupload').fileupload({
            url: '/asp/ajax/Attachments/AttachFile.asp?_AJAXCALL_=1&AT=' + strATTok,
            dataType: 'json',
            add: function(e, data) {
              return _datasubmit = data;
            },
            done: function(e, data) {
              if (!data.result) {
                return $.show.error(language.Generic.Common.kUnexpErr);
              } else if (data.result.isError) {
                return alert(language.Generic.Common.kErrAttachFile + ': ' + data.result.message);
              }
              methods.attachFiles({
                FileAttachmentId: data.result.data.attachmentId,
                FileName: $('#fileName').val(),
                Description: $('textarea[name="descriptionVal"]').val(),
                isNew: true
              });
              methods.showButtons();
              window.dataWereChanged = true;
              return alert(language.Generic.Common.kSuccessAttachFile);
            },
            fail: function(e, response) {
              if (response.jqXHR.responseJSON && response.jqXHR.responseJSON.isError) {
                return $.show.error(response.jqXHR.responseJSON.message);
              } else {
                return $.show.error(language.Generic.Common.kUnexpErr);
              }
            },
            always: function(e, data) {
              $(document).trigger('closeProcessing');
              return dialog.close();
            }
          });
        },
        message: html,
        buttons: [
          {
            label: opts.textButton,
            action: attachBtn,
            cssClass: 'btn-primary'
          }, {
            label: language.Generic.Curriculum.kBtnCancel,
            action: cancelBtn
          }
        ]
      });
    },
    attachFiles: function(files) {
      if (files == null) {
        return;
      }
      if (!$.isArray(files)) {
        files = [files];
      }
      if (!$('#attachFilesTable').length) {
        this.addFileTable();
      }
      return $.each(files, function(index, file) {
        var editButton, hiddenInput, link, span, spanDescr, tdCheckBox, tdDescription, tdLink, trFileInfo;
        link = $('<a></a>').append(file.FileName).attr('href', "JavaScript:$.openAttachment('/doc/" + file.FileName + "'," + file.FileAttachmentId + ");");
        span = $('<span></span>').addClass('AttachmentSpan').append(link);
        tdLink = $('<td></td>').append(span);
        trFileInfo = $('<tr></tr>').attr('id', file.FileAttachmentId).attr('name', 'fileInfo').append(tdLink);
        if (fields.options.showDescription) {
          spanDescr = $('<span name="description"></span>').append(file.Description.escapeHTML());
          tdDescription = $('<td></td>').attr('name', 'description').append(spanDescr);
          if (!fields.options.readonly) {
            tdDescription.css('cursor', 'pointer').attr('title', language.Generic.Buttons.kEdit).click(function() {
              return $.editAttachmentDescr(file.FileAttachmentId);
            });
            editButton = $('<i></i>').addClass('icon-edit').css('margin-left', '20px');
            tdDescription.append(editButton);
          }
          trFileInfo.append(tdDescription);
        }
        if (fields.options.multiple) {
          tdCheckBox = $('<td></td>').append($('<input type="checkbox" />'));
          trFileInfo.append(tdCheckBox);
        }
        hiddenInput = $('<input type="hidden" value="' + file.FileAttachmentId + '" />');
        hiddenInput.attr('name', file.isNew ? 'newAttachment' : 'currAttachment');
        trFileInfo.append(hiddenInput);
        if (file.notDeletedFromDb) {
          trFileInfo.append($('<input type="hidden" name="notDeletedFromDb" value="' + 1 + '" />'));
        }
        return $('#attachFilesTable').append(trFileInfo);
      });
    },
    addFileTable: function() {
      var table, tdDescriptionHeader, trHeaders;
      table = $('<table></table>').addClass('table table-bordered table-condensed table-striped').css({
        'margin-top': '10px'
      }).attr('id', 'attachFilesTable');
      trHeaders = $('<tr></tr>').attr('name', 'headers').append($('<th></th>').append(language.Generic.Common.kLinkFile));
      if (fields.options.showDescription) {
        tdDescriptionHeader = $('<th></th>').append(language.Generic.Curriculum.kDescription);
        trHeaders.append(tdDescriptionHeader);
      }
      if (fields.options.multiple) {
        trHeaders.append($('<th style="width: 1%;"></th>'));
      }
      table.append(trHeaders);
      return fields.fileAttachmentsBlock.append(table);
    }
  };
  $.fn.fileAttachments = function(data) {
    fields.fileAttachmentsBlock = this;
    fields.options = data.options;
    fields.params = data.params;
    if (data.params) {
      methods.attachFiles(data.params.files);
    }
    if (!data.options.hasOwnProperty('readonly')) {
      return methods.showButtons();
    } else if (!data.options.readonly) {
      return methods.showButtons();
    }
  };
  $.editAttachmentDescr = function(attachmentId) {
    var applyBtn, cancelBtn, content, descr;
    content = '<form name="form"> <div class="form-group"> <label class="control-label">' + language.Generic.Curriculum.kDescription + '</label> <textarea class="form-control" rows="10" name="attachmentDescr" style="border: 1px solid #8baed8;"></textarea> </div> </form>';
    cancelBtn = function(dialog) {
      return dialog.close();
    };
    applyBtn = function(dialog) {
      var newAttachmentDescr;
      newAttachmentDescr = $('textarea[name="attachmentDescr"]').val();
      return jsSubmit({
        action: '/asp/ajax/Attachments/EditAttachmentDescription.asp',
        data: {
          attachmentId: attachmentId,
          attachmentDescr: newAttachmentDescr
        },
        showProcessing: true,
        onSuccess: function(response) {
          var elDescr;
          elDescr = $('tr#' + attachmentId).find('span[name="description"]');
          elDescr.empty();
          elDescr.append(newAttachmentDescr.escapeHTML());
          alert(language.Generic.Common.kSuccessEditAttachmentDescription);
          dialog.successClose();
        }
      });
    };
    descr = $('tr#' + attachmentId).find('span[name="description"]').text();
    return $.show.dialog({
      title: language.Generic.Common.kEditAttachmentDescription,
      onshown: function(dialog) {
        return $('textarea[name="attachmentDescr"]').val(descr);
      },
      message: content,
      buttons: [
        {
          label: language.Generic.Buttons.kApply,
          action: applyBtn,
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Curriculum.kBtnCancel,
          action: cancelBtn
        }
      ]
    });
  };
  $.openAttachment = function(strUrl, attachId) {
    return postTo(strUrl, {
      attachmentId: attachId
    });
  };
  $.attachFilesFromEditAssignment = function(file) {
    var _attachFile, attachments;
    _attachFile = function(file) {
      $('#attachFilesTable').remove();
      methods.attachFiles(file);
      return methods.showButtons();
    };
    if (!$('tr[name="fileInfo"]').length) {
      methods.attachFiles(file);
      return methods.showButtons();
    } else {
      attachments = [];
      if (!$('tr[name="fileInfo"]').has('input[name="notDeletedFromDb"]').length) {
        attachments = [parseInt($('tr[name="fileInfo"]').attr('id'), 10)];
      }
      if (!attachments.length) {
        return _attachFile(file);
      } else {
        return methods.deleteAttachmentAjax({
          attachments: attachments
        }, function() {
          return _attachFile(file);
        });
      }
    }
  };
})(jQuery);

//# sourceMappingURL=fileAttachments.js.map
