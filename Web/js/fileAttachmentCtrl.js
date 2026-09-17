var FileAttachmentCtrl, FileAttachments,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

FileAttachments = (function() {

  /*
  		@param files {array of files}
  		
  		@param file.Id					{number}
  		@param file.Name				{string}	имя файла
  		@param file.Description			{string}	описание файла
  		@param file.isNew				{bool}		привязан ли к сущности в базе
  		@param file.isCanDeleteFromDb	{bool}		может ли быть удален из базы
   */
  function FileAttachments(files) {
    this.files = !files ? [] : files;
    if (!this.files.join) {
      this.files = [this.files];
    }
    this.mapFiles();
  }

  FileAttachments.prototype.add = function(file) {
    this.files.push(file);
    return this.files = _.sortBy(this.files, (function(_this) {
      return function(item) {
        return [item.AttachmentType, item.Name];
      };
    })(this));
  };

  FileAttachments.prototype.removeById = function(ids) {
    if (!ids) {
      return;
    }
    if (!ids.join) {
      ids = [ids];
    }
    if (!ids.length) {
      return;
    }
    return this.files = _.reject(this.files, function(file) {
      return _.contains(ids, file.Id);
    });
  };

  FileAttachments.prototype.exist = function() {
    return !!this.files.length;
  };

  FileAttachments.prototype.current = function() {
    return this.files[0];
  };

  FileAttachments.prototype.getById = function(id) {
    if (!id) {
      return;
    }
    return _.find(this.files, function(file) {
      return file.Id === id;
    });
  };

  FileAttachments.prototype.mapFiles = function() {
    if (this.files && this.files.length > 0 && "FileAttachmentId" in this.files[0]) {
      return this.files = _.map(this.files, function(file) {
        var res;
        res = {
          Id: file.FileAttachmentId,
          Name: file.FileName,
          Description: file.Description,
          AttachmentType: file.AttachmentType,
          isNew: false,
          isCanDeleteFromDb: file.IsCanDeleteFromDb
        };
        return res;
      });
    } else {
      return this.files = _.map(this.files, function(file) {
        var res;
        res = {
          Id: file.fileAttachmentId,
          Name: file.fileName,
          Description: file.description,
          AttachmentType: file.attachmentType,
          isNew: false,
          isCanDeleteFromDb: file.isCanDeleteFromDb
        };
        return res;
      });
    }
  };

  FileAttachments.prototype.updateDescription = function(id, description) {
    var file;
    file = this.getById(id);
    if (file) {
      return file.Description = description;
    }
  };

  return FileAttachments;

})();

FileAttachmentCtrl = (function() {
  var getButton, newImage, templates;

  newImage = null;

  templates = {
    attachFile: '<form name="form" method="POST" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kSelectFile + '<input type="file" id="fileupload" name="fileAttachment"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> {{#if types}} <div class="form-group"> <div> <label for="attachmentType" class="control-label">Тип вложения</label> </div> <div> <select class="form-control" name="attachmentType"> {{#each types}} <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{/if}} {{#if description}} <div class="form-group"> <label class="control-label">' + language.Generic.Curriculum.kDescription + '</label> <textarea class="form-control" rows="10" name="description" style="border: 1px solid #8baed8;"></textarea> </div> {{/if}} </form>',
    fileAttachmentBlock: '<div class="file-attachment-block {{#if multiple}}multiple{{/if}}"> {{#if files.length}} {{#each files}} <div class="file-attachment" title="{{Name}} {{#if Description}}{{Description}}{{/if}}"> <div class="file-info" onclick="FileAttachmentCtrl.openAttachment(\'{{Name}}\', {{Id}});"> <span class="file-name">{{Name}}</span> {{#if @root.showDescription}} {{#if Description}} <span class="file-description">{{Description}}</span> {{/if}} {{/if}} </div> {{#unless @root.readonly}} <div id="{{Id}}" class="buttons"> {{#if @root.showDescription}} <span class="glyphicon glyphicon-pencil edit-description-button" aria-hidden="true" title="Редактировать описание"></span> {{/if}} <span class="glyphicon glyphicon-trash remove-button" aria-hidden="true" title="Удалить файл"></span> </div> {{/unless}} </div> {{/each}} {{/if}} </div>'
  };

  getButton = function(options) {
    var defaultOptions;
    defaultOptions = {
      id: 'attach',
      label: language.Generic.Buttons.kAttachFile,
      icon: 'paperclip',
      title: '',
      size: ''
    };
    options = $.extend({}, defaultOptions, options);
    if (options.label) {
      options.title = options.label;
    }
    return $.uicontrols.button({
      id: options.id,
      label: options.label,
      icon: options.icon,
      click: options.click,
      title: options.title,
      size: options.size
    });
  };

  FileAttachmentCtrl.openAttachment = function(fileName, attachmentId) {
    postTo({
      path: "/webapi/attachments/" + attachmentId,
      method: "get",
      formParams: {
        target: "_blank"
      }
    });
  };

  function FileAttachmentCtrl(options1, params, attachmentsTypes) {
    this.options = options1;
    this.params = params;
    this.attachmentsTypes = attachmentsTypes;
    this.loadUploadLimits = bind(this.loadUploadLimits, this);
    this.maxFileSizeToResize = bind(this.maxFileSizeToResize, this);
    this.maxWidth = bind(this.maxWidth, this);
    this.fileAttachments = new FileAttachments(this.params.files);
    this.block = this.options.block;
    this.types = this.attachmentsTypes;
    this.showBlock();
  }

  FileAttachmentCtrl.prototype.appendInputToForm = function(form, inputName) {
    var $form;
    $form = $(form);
    inputName = inputName || "attachment";
    $('input[name="' + inputName + '"]', form).remove();
    return this.fileAttachments.files.forEach(function(file) {
      var input;
      input = $('<input type="hidden" name="' + inputName + '" />');
      input.attr('value', file.Id);
      return $form.append(input);
    });
  };

  FileAttachmentCtrl.prototype.addFile = function(file) {
    if (_.some(this.fileAttachments.files, function(item) {
      return item.Id === file.Id;
    })) {
      return;
    }
    this.fileAttachments.add(file);
    return this.showBlock();
  };

  FileAttachmentCtrl.prototype.clearBlock = function() {
    return this.block.empty();
  };

  FileAttachmentCtrl.prototype.showBlock = function() {
    var button, context, editHandler, faBlock, html, removeHandler, template;
    this.clearBlock();
    if (!this.fileAttachments.exist() && this.options.readonly) {
      return;
    }
    context = {
      files: [],
      readonly: true,
      showDescription: this.options.showDescription,
      multiple: this.options.multiple
    };
    if (this.fileAttachments.exist()) {
      context.files = this.fileAttachments.files;
      _.each(context.files, function(file) {
        return file.DownloadUrl = "/webapi/attachments/" + file.Id + "/" + encodeURIComponent(file.Name);
      });
    }
    if (!this.options.readonly) {
      context.readonly = false;
      if (this.options.multiple || !this.fileAttachments.exist()) {
        button = getButton({
          id: 'attach',
          click: (function(_this) {
            return function() {
              return _this.attachFile(language.Generic.Buttons.kAttachFile, language.Generic.Buttons.kAttachFile);
            };
          })(this),
          size: this.options.multiple ? 'btn-sm' : ''
        });
      }
    }
    template = Handlebars.compile(templates.fileAttachmentBlock);
    html = template(context);
    this.block.append(html);
    if (!this.options.readonly && this.fileAttachments.exist()) {
      if (this.options.showDescription) {
        editHandler = function(_this) {
          return function() {
            return _this.editDescription(+$(this).parent()[0].id);
          };
        };
        this.block.find('.edit-description-button').on('click', editHandler(this));
      }
      removeHandler = function(_this) {
        return function() {
          return _this.deleteFile(+$(this).parent()[0].id);
        };
      };
      this.block.find('.remove-button').on('click', removeHandler(this));
    }
    if (button) {
      faBlock = this.block.find('.file-attachment-block');
      return button.prependTo(faBlock);
    }
  };

  FileAttachmentCtrl.prototype.maxWidth = function(context) {
    if (context.MessageId >= 0) {
      return this.uploadLimits.resizeMailImageWidth;
    }
    if (context.AssignmentId >= 0) {
      return this.uploadLimits.resizeAssignmentImageWidth;
    }
    return null;
  };

  FileAttachmentCtrl.prototype.maxFileSizeToResize = function(context) {
    if (context.MessageId >= 0) {
      return this.uploadLimits.resizeMailImageMaxFileSize;
    }
    if (context.AssignmentId >= 0) {
      return this.uploadLimits.resizeAssignmentImageMaxFileSize;
    }
    return null;
  };

  FileAttachmentCtrl.prototype.loadUploadLimits = function() {
    var deferred;
    if (!this.uploadLimits) {
      return jsSubmit({
        action: '/webapi/attachments/uploadLimits',
        method: 'GET',
        auth: false,
        showProcessing: true,
        onSuccess: (function(_this) {
          return function(uploadLimits) {
            return _this.uploadLimits = uploadLimits;
          };
        })(this)
      });
    } else {
      deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    }
  };

  FileAttachmentCtrl.prototype.deleteFile = function(deletedFile) {
    var file;
    if (!deletedFile) {
      return;
    }
    file = this.fileAttachments.getById(deletedFile);
    if (file.isCanDeleteFromDb !== void 0 && !file.isCanDeleteFromDb) {
      extDeferred.when($.show.getConfirmation('Удалить файл "' + file.Name.escapeHTML() + '"?')).then((function(_this) {
        return function() {
          _this.fileAttachments.removeById(deletedFile);
          return _this.showBlock();
        };
      })(this));
      return;
    }
    return extDeferred.when($.show.getConfirmation('Удалить файл "' + file.Name.escapeHTML() + '"?')).then((function(_this) {
      return function() {
        return jsSubmit({
          action: '/webapi/attachments/' + deletedFile,
          data: _this.params.context,
          showProcessing: true,
          method: 'DELETE',
          onSuccess: function() {
            _this.fileAttachments.removeById(deletedFile);
            _this.showBlock();
            if (_this.options.onSuccessDetach) {
              return _this.options.onSuccessDetach(file);
            }
          },
          onError: function(xhr, message, error) {
            if (xhr.status === 401) {
              return $.show.message(language.Generic.Common.kTimeOutOccured4Ajax).then(function() {
                window.location.pathname = "/";
              });
            } else {
              return $.show.error(message ? message : language.Generic.Common.kUnexpErr);
            }
          }
        });
      };
    })(this));
  };

  FileAttachmentCtrl.prototype.attachFile = function(dialogTitle, buttonName) {
    var _datasubmit, content, dialog, html, onAttach;
    _datasubmit = null;
    content = Handlebars.compile(templates.attachFile);
    html = content({
      description: this.options.showDescription,
      types: this.types
    });
    onAttach = (function(_this) {
      return function(dialog) {
        var ext, i, isExtensionsCorrect, len, ref;
        if (!$('#fileName').val()) {
          return alert('Необходимо выбрать файл');
        }
        isExtensionsCorrect = true;
        if (_this.options.filesExtensions) {
          isExtensionsCorrect = false;
          ref = _this.options.filesExtensions;
          for (i = 0, len = ref.length; i < len; i++) {
            ext = ref[i];
            if ($('#fileName').val().endsWith(ext)) {
              isExtensionsCorrect = true;
              break;
            }
          }
        }
        if (!isExtensionsCorrect) {
          return alert('Неверное расширение файла');
        }
        return _this.loadUploadLimits().then(function() {
          var fileSizeLimit;
          fileSizeLimit = _this.uploadLimits.fileSizeLimit;
          if (_this.params.context && _this.params.context.PlanId) {
            fileSizeLimit = _this.uploadLimits.plannerDocFileNoteSizeLimit;
          }
          if (_datasubmit.files[0].size && _datasubmit.files[0].size > _this.uploadLimits.fileSizeLimit * 1024) {
            return $.show.error(language.Generic.LearnApp.kServErrFileTooLarge + _this.uploadLimits.fileSizeLimit / 1024 + ' Мб');
          }
          $(document).trigger('showProcessing');
          return _datasubmit.submit();
        });
      };
    })(this);
    return dialog = $.show.dialog({
      title: dialogTitle,
      onshown: (function(_this) {
        return function(dialog) {
          $('input[name="fileAttachment"]').on('change', function(e) {
            var elements;
            elements = this.value.split('\\');
            return $('#fileName').val(elements[elements.length - 1]).attr('title', elements[elements.length - 1]);
          });
          $('#fileupload').bind('fileuploadsubmit', function(e, data) {
            var description, parameters;
            description = $('textarea[name="description"]').val() || "";
            parameters = $.extend({}, _this.params.context, {
              Description: description,
              AttachmentType: $('select[name="attachmentType"]').val()
            });
            return data.formData = {
              data: encodeURIComponent(JSON.stringify(parameters)),
              at: strATTok
            };
          });
          return $('#fileupload').fileupload({
            url: '/webapi/attachments',
            dataType: 'json',
            add: function(e, data) {
              return _this.loadUploadLimits().then(function() {
                var isLargeFile, maxFileToResize, maxWidth;
                maxWidth = _this.maxWidth(_this.params.context);
                maxFileToResize = _this.maxFileSizeToResize(_this.params.context);
                isLargeFile = maxFileToResize && data.files[0].size > maxFileToResize * 1024;
                if (maxWidth && isLargeFile) {
                  return loadImage(data.files[0], {
                    meta: true,
                    canvas: true
                  }).then(function(img) {
                    if (img.imageHead || img.image) {
                      newImage = loadImage.scale(img.image, {
                        maxWidth: maxWidth
                      });
                      if (newImage && newImage.type !== "error") {
                        newImage.toBlob(function(blob) {
                          var newFile;
                          if (img.imageHead) {
                            return loadImage.replaceHead(blob, img.imageHead, (function(_this) {
                              return function(newBlob) {
                                var newFile;
                                newFile = new File([newBlob], data.files[0].name, {
                                  type: newBlob.type
                                });
                                data.files[0] = newFile;
                                _datasubmit = data;
                              };
                            })(this));
                          } else {
                            newFile = new File([blob], data.files[0].name, {
                              type: "image/jpg"
                            });
                            data.files[0] = newFile;
                            return _datasubmit = data;
                          }
                        }, 'image/jpeg');
                      }
                      return;
                    }
                    _datasubmit = data;
                  }, function(result) {
                    _datasubmit = data;
                  });
                } else {
                  _datasubmit = data;
                }
              });
            },
            done: function(e, data) {
              var file;
              if (!data.result) {
                return $.show.error(language.Generic.Common.kUnexpErr);
              }
              file = {
                Id: data.result,
                Name: $('#fileName').val(),
                Description: ($('select[name="attachmentType"] option:selected').length ? '(' + $('select[name="attachmentType"] option:selected').text() + ') ' : "") + $('textarea[name="description"]').val(),
                AttachmentType: $('select[name="attachmentType"]').val(),
                isNew: true
              };
              _this.addFile(file);
              if (_this.params.wasChanged) {
                window.dataWereChanged = true;
              }
              if (_this.options.onSuccessAttach) {
                _this.options.onSuccessAttach(file);
              }
              return alert(language.Generic.Common.kSuccessAttachFile);
            },
            fail: function(e, response) {
              var errorMessage;
              if (response && response.jqXHR && response.jqXHR.status === 401) {
                return $.show.message(language.Generic.Common.kTimeOutOccured4Ajax).then(function() {
                  window.location.pathname = "/";
                });
              } else if (response.jqXHR.responseJSON && response.jqXHR.responseJSON.message) {
                errorMessage = response.jqXHR.responseJSON.message;
                if (response.jqXHR.responseJSON.details) {
                  errorMessage += ' (' + response.jqXHR.responseJSON.details + ')';
                }
                return $.show.error(errorMessage);
              } else {
                return $.show.error(language.Generic.Common.kUnexpErr);
              }
            },
            always: function(e, data) {
              $(document).trigger('closeProcessing');
              return dialog.close();
            }
          });
        };
      })(this),
      message: html,
      buttons: [
        {
          label: buttonName,
          action: onAttach,
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Buttons.kCancel,
          action: function(dialog) {
            return dialog.close();
          }
        }
      ]
    });
  };

  FileAttachmentCtrl.prototype.editDescription = function(attachmentId) {
    var apply, content, description, type;
    content = '<form name="form"> <div class="form-group" {{#if notType}}style="display:none;"{{/if}}> <div> <label for="attachmentTypeText" class="control-label">Тип вложения</label> </div> <div> <input class="form-control" type="text" disabled name="attachmentTypeText"> </div> </div> <div class="form-group"> <label class="control-label">' + language.Generic.Curriculum.kDescription + '</label> <textarea class="form-control" rows="10" name="description" style="border: 1px solid #8baed8;"></textarea> </div> </form>';
    apply = (function(_this) {
      return function(dialog) {
        var description;
        description = $('textarea[name="description"]').val();
        return jsSubmit({
          action: '/webapi/attachments/' + attachmentId + '/description',
          data: '=' + description,
          showProcessing: true,
          onSuccess: function(description) {
            _this.fileAttachments.updateDescription(attachmentId, description);
            _this.showBlock();
            alert(language.Generic.Common.kSuccessEditAttachmentDescription);
            return dialog.successClose();
          }
        });
      };
    })(this);
    description = this.fileAttachments.getById(attachmentId).Description;
    if (description && description.charAt(0) === '(' && description.indexOf(')')) {
      type = description.substring(1).split(')')[0];
      description = description.replace(/^ *\([^)]*\) */g, "");
    }
    return $.show.dialog({
      title: language.Generic.Common.kEditAttachmentDescription,
      onshown: function() {
        if (description) {
          $('textarea[name="description"]').val(description);
        }
        if (type) {
          return $('input[name="attachmentTypeText"]').val(type);
        }
      },
      message: Handlebars.compile(content)({
        notType: !type
      }),
      buttons: [
        {
          label: language.Generic.Buttons.kApply,
          action: apply,
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Buttons.kCancel,
          action: function(dialog) {
            return dialog.close();
          }
        }
      ]
    });
  };

  return FileAttachmentCtrl;

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
})(FileAttachmentCtrl);
