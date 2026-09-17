(function($) {
  var deferredArgs, mapButtons, mapOpts2VendorOpts, mergeBtn, opts;
  mapButtons = function(btnsObject) {
    var action, btnName, results;
    if (btnsObject.length) {
      return btnsObject;
    } else {
      results = [];
      for (btnName in btnsObject) {
        action = btnsObject[btnName];
        results.push({
          label: btnName,
          action: action
        });
      }
      return results;
    }
  };
  mergeBtn = function(btnArr, addBtn) {
    var btn, btnInd, i, len1;
    for (btnInd = i = 0, len1 = btnArr.length; i < len1; btnInd = ++i) {
      btn = btnArr[btnInd];
      if (btn.label === addBtn.label) {
        btnArr[btnInd] = $.extend(addBtn, btn);
        return;
      }
    }
    return btnArr.push(addBtn);
  };
  mapOpts2VendorOpts = function(options) {
    var mappedObg;
    if (!options) {
      return {};
    }
    mappedObg = $.extend({}, options);
    mappedObg.onhide = options.close;
    return mappedObg;
  };
  deferredArgs = [];
  opts = {};
  $.show = {
    defaults: {
      okText: language.Generic.Common.kOk,
      errorTitle: language.Generic.Common.kErrorMsgEmotional,
      messageTitle: language.Generic.Announcement.kDescription,
      confirmationTitle: language.Generic.Common.kAttention,
      yesText: language.Generic.Common.kYes,
      noText: language.Generic.Common.kNo,
      processingTitle: language.Generic.Common.kWait,
      processingText: language.Generic.Common.kProcessing,
      loadingText: language.Generic.Common.kLoad,
      selfErrorText: language.Generic.Common.kPageErrWrongCall,
      noAskText: language.Generic.Common.kNoAsk,
      checkBoxId: 'MyCheckBox',
      cancelText: language.Generic.Buttons.kCancel
    },

    /*
    		* @method message - базовый метод для показа сообщений. По умолчанию содержит одну кнопку ОК - закрывающиее окно
    		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов	или jQuery-объектом).
    		* @param {String} title - текст заголовка.
     */
    message: function(message, title, options) {
      var defOpts, deferred, extHandler, messageDialog, msgOptions;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.message"');
        return;
      }
      deferred = $.Deferred();
      defOpts = {
        title: typeof title === 'string' ? title : opts.messageTitle,
        message: message,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [
          {
            label: opts.okText,
            hotkey: 13,
            icon: 'glyphicon glyphicon-ok-sign',
            action: function(dialog) {
              return dialog.close();
            }
          }
        ]
      };
      msgOptions = $.extend({}, defOpts, mapOpts2VendorOpts(options));
      if (msgOptions.onhide) {
        extHandler = msgOptions.onhide;
        msgOptions.onhide = function(dialog) {
          extHandler(dialog);
          return deferred.resolve(dialog);
        };
      } else {
        msgOptions.onhide = function(dialog) {
          return deferred.resolve(dialog);
        };
      }
      messageDialog = BootstrapDialog.show(msgOptions);
      messageDialog.getModal().on('keyup', function(event) {
        if (event.which === 32) {
          return messageDialog.close();
        }
      });
      messageDialog.isMessage = true;
      return deferred.promise();
    },

    /*
    		@method dialog - показывает окно с произвольным контентом.
    		@param {Object} options - настройки диалога
    			content - jquery объект - содержимое.
    			title - заголовок
    			buttons - массив кнопок
     */
    dialog: function(options) {
      var button, dialog, existsCancel, ext_onhide, i, len1, ref, ref1, setDefButtonStyle;
      if (((ref = options.message) != null ? ref.jquery : void 0) && options.message.prop("tagName").toLowerCase() === "script") {
        options.message = options.message.html().replace(/(?:\r\n|\r|\n)/g, '');
      }
      options.draggable = true;
      setDefButtonStyle = function(btn, icon, cssClass) {
        if (!btn.icon) {
          btn.icon = icon;
        }
        if (!btn.cssClass) {
          return btn.cssClass = cssClass;
        }
      };
      if (options.buttons) {
        existsCancel = false;
        ref1 = options.buttons;
        for (i = 0, len1 = ref1.length; i < len1; i++) {
          button = ref1[i];
          switch (button.label) {
            case language.Generic.Common.kOk:
              setDefButtonStyle(button, "glyphicon glyphicon-ok-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kAdd:
              setDefButtonStyle(button, "glyphicon glyphicon-plus-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kCreate:
              setDefButtonStyle(button, "glyphicon glyphicon-file", "btn-primary");
              break;
            case language.Generic.Buttons.kApply:
              setDefButtonStyle(button, "glyphicon glyphicon-ok-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kSave:
              setDefButtonStyle(button, "glyphicon glyphicon-floppy-save", "btn-primary");
              break;
            case language.Generic.Buttons.kEdit:
              setDefButtonStyle(button, "glyphicon glyphicon-pencil", "btn-primary");
              break;
            case language.Generic.Buttons.kRemove:
              setDefButtonStyle(button, "glyphicon glyphicon-minus-sign", "btn-danger");
              break;
            case language.Generic.Buttons.kContinue:
              setDefButtonStyle(button, "glyphicon glyphicon-new-window", "btn-primary");
              break;
            case language.Generic.Buttons.kRefresh:
              setDefButtonStyle(button, "glyphicon glyphicon-refresh", "btn-default");
              break;
            case language.Generic.Calendar.kClose:
              existsCancel = true;
              setDefButtonStyle(button, "glyphicon glyphicon-remove", "btn-default");
              break;
            case language.Generic.Buttons.kCancel:
              existsCancel = true;
              setDefButtonStyle(button, "glyphicon glyphicon-ban-circle", "btn-default");
          }
        }
        if (!existsCancel) {
          options.closeByKeyboard = false;
          options.buttons.push({
            hotkey: 27,
            label: language.Generic.Buttons.kCancel,
            action: function(dialog) {
              $(document.activeElement).blur();
              return dialog.close();
            },
            icon: "glyphicon glyphicon-ban-circle",
            cssClass: "btn-default"
          });
        }
      }
      ext_onhide = options.onhide;
      options.onhide = function(dialog) {
        if (dialog.$modal.prop("forceClose")) {
          return true;
        }
        if (!dialog.$modal.prop("dataWereChanged")) {
          return !ext_onhide || ext_onhide(dialog);
        }
        $.show.confirmation(kDataWereChanged).then(function() {
          if (!ext_onhide || ext_onhide(dialog)) {
            dialog.forceClose();
          }
          return dialog.$modal.prop("dataWereChanged", false);
        });
        return false;
      };
      dialog = BootstrapDialog.show(options);
      dialog = $.extend(dialog, {
        forceClose: function() {
          dialog.$modal.prop("forceClose", true);
          return dialog.close();
        },
        successClose: function() {
          dialog.$modal.prop("dataWereChanged", false);
          return dialog.forceClose();
        }
      });
      $(document).trigger('dialog-opened');
      return dialog;
    },

    /*
    		* @method confirmation - показывает окно-подтвержние, может содержать несколько кнопок, см. описание параметров.
    		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов
    		* 		или jQuery-объектом).
    		* @param {String} title - текст заголовка.
    		*
    		* @param {JSON Object} objButtons - набор соответствий "Название кнопки" -> Функция, функция вызывается
    		* 		после закрытия окна. К передаваемому набору добавляются две дефолтные кпопки opts.yesText, opts.noText,
    		* 		но только если их явно нет в передаваемом наборе.
    		*
    		* @param {Bool} isEscapeDisabled - запрещение реакции на нажатие кнопки Escape.
    		* @param {String} escapeCookie - выводится чекбокс "Больше не спрашивать", и соответствующая работа с куками.
    		*
     */
    confirmation: function(message, title, objButtons, isEscapeDisabled, escapeCookie) {
      var btn, btnYesAction, buttons, cfrmOpts, defBtn, defButtons, deferred, i, j, k, len1, len2, len3;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.confirmation" (p1)');
        return;
      }
      defButtons = [
        {
          label: opts.yesText,
          cssClass: 'btn-primary',
          icon: 'glyphicon glyphicon-ok-sign',
          hotkey: 13,
          action: function() {}
        }, {
          label: opts.noText,
          icon: 'glyphicon glyphicon-remove-sign',
          action: function() {}
        }
      ];
      if (!objButtons) {
        objButtons = [];
      }
      buttons = mapButtons(objButtons);
      for (i = 0, len1 = defButtons.length; i < len1; i++) {
        defBtn = defButtons[i];
        mergeBtn(buttons, defBtn);
      }
      deferred = $.Deferred();
      if (typeof escapeCookie !== 'undefined') {
        for (j = 0, len2 = buttons.length; j < len2; j++) {
          btn = buttons[j];
          if (btn.label === opts.yesText) {
            btnYesAction = btn.action;
          }
        }
        if ($.cookie(escapeCookie) === "1") {
          btnYesAction();
          deferred.resolve(opts.yesText);
          return deferred.promise();
        }
        buttons.unshift({
          label: opts.yesText + ", " + opts.noAskText,
          action: function() {
            $.cookie(escapeCookie, 1, {
              expires: 30,
              path: '/'
            });
            return btnYesAction();
          }
        });
      }
      for (k = 0, len3 = buttons.length; k < len3; k++) {
        btn = buttons[k];
        if (typeof btn.action !== 'function') {
          $.show.error(opts.selfErrorText + ' "$.show.confirmation" ' + btn.label + '');
          return;
        }
        btn.action = (function() {
          var btninfo;
          btninfo = {
            action: btn.action,
            label: btn.label
          };
          return function(dialog) {
            dialog.close();
            btninfo.action();
            if (btninfo.label === opts.noText) {
              return deferred.reject(btninfo.label);
            } else {
              return deferred.resolve(btninfo.label);
            }
          };
        })();
      }
      cfrmOpts = {
        title: typeof title === 'string' ? title : opts.confirmationTitle,
        message: message,
        type: BootstrapDialog.TYPE_PRIMARY,
        buttons: buttons
      };
      if (typeof isEscapeDisabled !== 'undefined' && isEscapeDisabled) {
        cfrmOpts.closable = false;
      }
      BootstrapDialog.show(cfrmOpts);
      return deferred.promise();
    },
    getConfirmation: function(message, title, objButtons, isEscapeDisabled, escapeCookie) {
      return function() {
        return $.show.confirmation(message, title, objButtons, isEscapeDisabled, escapeCookie);
      };
    },
    prompt: function(message, title, checkFuncExt) {
      var checkFunc, content, deferred, getText, options;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.message"');
        return;
      }
      content = message + ': <input type="text" class="form-control">';
      deferred = $.Deferred();
      getText = function(dialog) {
        return $('input', dialog.getModalContent()).val();
      };
      checkFunc = function(dialog) {
        var text;
        text = getText(dialog);
        if (!checkFuncExt) {
          return true;
        }
        return checkFuncExt(text);
      };
      options = {
        title: typeof title === 'string' ? title : opts.messageTitle,
        message: content,
        closable: true,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [
          {
            label: opts.okText,
            hotkey: 13,
            action: function(dialog) {
              var text;
              if (!checkFunc(dialog)) {
                return false;
              }
              text = getText(dialog);
              dialog.close();
              return deferred.resolve(text);
            }
          }, {
            label: opts.cancelText,
            action: function(dialog) {
              var text;
              text = getText(dialog);
              dialog.close();
              return deferred.reject;
            }
          }
        ]
      };
      BootstrapDialog.show(options);
      return deferred.promise();
    },
    fileDialog: function(options) {

      /* возможные опции
      				title					- заголовок
      				content					- текст внутри окна
      				fileExts				- разрешенные расширения файлов (массив)
      				url						- для сабмита формы
      				target					- в это же окно, или в отдельное
      				submitParams			- дополнительные параметры для сабмита
      				invalidFileExtMsg		- сообщение о разрешенных файловых расширений
      				additionalContent		- дополнительный контент в HTML
      				handlerApplyBtn			- дополнительные действия после выбора файла
      				customCheck				- уникальные проверки
      				onShownDlg				- дополнительные действия при открытии диалогового окна
      				contentHtml				- html-содержимое внутри окна
      				isAjax					- выполнение добавления файла Ajax-запросом
      				handlerAjaxSuccess		- обработчик success callback
       */
      var _check, _createHiddenField, _datasubmit, applyBtn, cancelBtn, content;
      _createHiddenField = function(_form, key, value) {
        var hiddenField;
        hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", value);
        return _form.appendChild(hiddenField);
      };
      _check = function() {
        var elements, fileExt, fileName, fullFileName, i, isMatch, len, len1, lowerFileName, ref;
        fullFileName = $('#fileName').val();
        if (!fullFileName) {
          alert(language.Generic.SetupSchoolUI.kMsgSelectFileName);
          return false;
        }
        if (options.fileExts) {
          elements = fullFileName.split('\\');
          fileName = elements[elements.length - 1];
          lowerFileName = fileName.toLowerCase();
          isMatch = false;
          ref = options.fileExts;
          for (i = 0, len1 = ref.length; i < len1; i++) {
            fileExt = ref[i];
            len = fileExt.length;
            if (lowerFileName.substr(lowerFileName.length - len, len) === fileExt) {
              isMatch = true;
            }
          }
          if (!isMatch) {
            alert(options.invalidFileExtMsg ? options.invalidFileExtMsg : language.Generic.Curriculum.kInvalidImportFileFormat);
            return false;
          }
        }
        if (options.customCheck) {
          return options.customCheck();
        }
        return true;
      };
      _datasubmit = null;
      cancelBtn = function(dialog) {
        return dialog.close();
      };
      applyBtn = function(dialog) {
        return extDeferred.when(_check).then(function() {
          var form, key, winOptions, wnd;
          if (options.isAjax) {
            _datasubmit.submit();
            $(document).trigger('showProcessing');
          } else {
            form = document.forms.selectFile;
            if (options.target) {
              form.target = options.target;
              winOptions = {
                url: '/asp/blank.htm',
                name: options.target,
                specs: 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no, width=1200px, height=500px'
              };
              windowOpen(winOptions);
              wnd = winOptions.winChild;
            } else {
              $(document).trigger('showProcessing');
            }
            if (options.handlerApplyBtn) {
              options.handlerApplyBtn(wnd);
            }
            _createHiddenField(form, 'VER', getVer());
            _createHiddenField(form, 'AT', strATTok);
            if (options.submitParams) {
              for (key in options.submitParams) {
                _createHiddenField(form, key, options.submitParams[key]);
              }
            }
            if (options.isHeavyAction) {
              heavyAction(function() {
                return DoSubmit(form, options.url);
              }, function() {
                return wnd.close();
              });
            } else {
              DoSubmit(form, options.url);
            }
            dialog.close();
          }
        });
      };
      content = '{0} <form name="selectFile" method="post" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kSelectFile + '<input type="file" name="file" id="fileupload"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> {1} <div class="alert alert-info" role="alert" style="display: none;" id="explanation"></div> </form>';
      content = content.replace('{0}', typeof options.contentHtml !== 'undefined' ? options.contentHtml : "");
      content = content.replace('{1}', typeof options.additionalContent !== 'undefined' ? options.additionalContent : "");
      return $.show.dialog({
        title: options.title,
        message: content,
        onshown: function(dialog) {
          $('input[name="file"]').on('change', function() {
            var elements;
            elements = this.value.split('\\');
            $('#fileName').val(elements[elements.length - 1]);
            return $(this).attr('title', elements[elements.length - 1]);
          });
          if (options.content) {
            $('#explanation').show();
            $('#explanation').text(options.content);
          }
          if (options.onShownDlg) {
            options.onShownDlg();
          }
          if (options.isAjax) {
            $('#fileupload').bind('fileuploadsubmit', function(e, data) {
              var _params;
              _params = {
                fileName: $('#fileName').val()
              };
              if ($('input[name="Separator"]').length) {
                _params.Separator = $('input[name="Separator"]').val();
              }
              data.formData = $.extend({}, _params, options.submitParams);
            });
            return $('#fileupload').fileupload({
              url: urlHelper.makeUrl(options.url, {
                "_AJAXCALL_": 1
              }),
              dataType: 'json',
              add: function(e, data) {
                return _datasubmit = data;
              },
              done: function(e, response) {
                $(document).trigger('closeProcessing');
                if (!response.result) {
                  return $.show.error(language.Generic.Common.kUnexpErr);
                } else if (response.result.isError) {
                  return $.show.error(response.result.message);
                } else {
                  if (options.handlerAjaxSuccess) {
                    options.handlerAjaxSuccess(response.result);
                  }
                  return dialog.close();
                }
              },
              fail: function(e, response) {
                $(document).trigger('closeProcessing');
                if (response.jqXHR.responseJSON.isError) {
                  $.show.error(response.jqXHR.responseJSON.message);
                }
                if (response.jqXHR.responseJSON.message) {
                  return $.show.error(response.jqXHR.responseJSON.message);
                }
              }
            });
          }
        },
        buttons: [
          {
            label: language.Generic.Common.kOk,
            action: applyBtn
          }, {
            label: language.Generic.Buttons.kCancel,
            action: cancelBtn
          }
        ]
      });
    },
    alert: function(message, options) {
      var activeElementTagName, exists, focusElement;
      exists = false;
      $.each(BootstrapDialog.dialogs, function(id, dialog) {
        if (!dialog.closing && dialog.isMessage) {
          return exists = true;
        }
      });
      if (exists) {
        deferredArgs.push(arguments);
        return;
      }
      focusElement = null;
      if (document.activeElement) {
        activeElementTagName = document.activeElement.tagName.toUpperCase();
        if (activeElementTagName === "INPUT" || activeElementTagName === "SELECT") {
          focusElement = document.activeElement;
        }
      }
      return $.show.message(message, language.Generic.Common.kAttention, options).then(function(closeDlg) {
        closeDlg.closing = true;
        if (focusElement) {
          setTimeout((function() {
            return focusElement.focus();
          }), 200);
        }
        if (deferredArgs.length > 0) {
          $.show.alert.apply(this, deferredArgs[0]);
          return deferredArgs.shift();
        }
      });
    },
    longWork: function(message, title) {
      var content, inc, setProgress, timer;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.longWork"');
        return;
      }
      if (typeof title === 'undefined') {
        title = language.Generic.Curriculum.kPleaseWait;
      }
      content = $("<div><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' style='width: 1%'></div></div></div>");
      content.prepend(message);
      setProgress = function() {
        var current, incr, progressBar;
        progressBar = $('.progress-bar', content);
        current = progressBar.width() / progressBar.parent().width() * 100;
        incr = inc(current / 100) * 100 * 2;
        current = current + incr;
        return progressBar.css('width', current + '%');
      };
      timer = null;
      setTimeout(function() {
        return timer = setInterval(setProgress, 100);
      }, 200);
      inc = function(current) {
        var rnd;
        if (current >= 1) {
          clearInterval(timer);
          return 0;
        }
        rnd = 0;
        if (current >= 0 && current < 0.25) {
          rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (current >= 0.25 && current < 0.65) {
          rnd = (Math.random() * 3) / 100;
        } else if (current >= 0.65 && current < 0.9) {
          rnd = Math.random() / 100;
        } else if (current >= 0.9 && current < 0.99) {
          rnd = 0.001;
        } else {
          clearInterval(timer);
          rnd = 0;
        }
        return rnd;
      };
      return BootstrapDialog.show({
        message: content,
        title: title,
        onshow: function() {
          return $('body').css("cursor", "wait");
        },
        onhide: function() {
          clearInterval(timer);
          return $('body').css("cursor", "");
        },
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false
      });
    },
    error: function(message, title) {
      return $.show.message(message, title || opts.errorTitle, {
        type: BootstrapDialog.TYPE_DANGER
      });
    },
    success: function(message, title) {
      return $.show.message(message, title || opts.messageTitle, {
        type: BootstrapDialog.TYPE_SUCCESS
      });
    },
    processing: function(message, title) {
      return $.show.processing.current = $.show.longWork(message != null ? message : opts.processingText, "<span class=\"glyphicon glyphicon-time\"></span> " + (title || opts.processingTitle));
    },
    loading: function() {
      return $.show.loading.current = $.show.longWork(opts.loadingText, opts.loadingText);
    },
    modelDialog: function(parametrs) {
      var cancelButton, cancelButtonHandler, content, okButton, okButtonHanler, promiseSubst, tmp;
      okButtonHanler = function() {};
      cancelButtonHandler = function() {};
      cancelButton = function(dialog) {
        dialog.close();
        return cancelButtonHandler(dialog);
      };
      okButton = function(dialog) {
        return okButtonHanler(dialog);
      };
      tmp = Handlebars.compile(parametrs.template);
      content = tmp(parametrs.model);
      parametrs.message = content;
      parametrs.buttons = [
        {
          label: language.Generic.Buttons.kSave,
          action: okButton
        }, {
          label: language.Generic.Buttons.kCancel,
          action: cancelButton
        }
      ];
      promiseSubst = {
        then: function(okHandler, cancelHandler) {
          okButtonHanler = okHandler;
          if (cancelHandler) {
            cancelButtonHandler = cancelHandler;
          }
        },
        done: function(okHandler) {
          okButtonHanler = okHandler;
        },
        fail: function(cancelHandler) {
          cancelButtonHandler = cancelHandler;
        }
      };
      $.show.dialog(parametrs);
      return promiseSubst;
    }
  };
  opts = $.extend({}, $.show.defaults);
  window.alert = $.show.alert;
  $(function() {
    var $doc;
    $doc = $(document);
    $doc.bind('showError', function(event, data) {
      return $.show.error(data.message, data.onClose);
    });
    $doc.bind('showMessage', function(event, data) {
      return $.show.message(data.message, data.title);
    });
    $doc.bind('showConfirmation', function(event, data) {
      return $.show.confirmation(data.message, data.title, data.yesFunc, data.noFunc);
    });
    $doc.bind('showProcessing', function(event, data) {
      if (!$.show.processing.current) {
        return $.show.processing();
      }
    });
    $doc.bind('closeProcessing', function(event, data) {
      if ($.show.processing.current) {
        $.show.processing.current.close();
        return $.show.processing.current = null;
      }
    });
    $doc.bind('showLoading', function(event, data) {
      return $.show.loading();
    });
    return $doc.bind('closeLoading', function(event, data) {
      if ($.show.processing.current) {
        return $.show.loading.current.close();
      }
    });
  });
})(jQuery);

//# sourceMappingURL=shower.js.map
