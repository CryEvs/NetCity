var importValidation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

importValidation = (function() {
  var importTypeOnlyValidColumns, importTypeOnlyValidStudents;

  function importValidation() {
    this.modalOnshown = bind(this.modalOnshown, this);
    this.addEventToRadioButton = bind(this.addEventToRadioButton, this);
    this.enableImportButton = bind(this.enableImportButton, this);
    this.disableImportButton = bind(this.disableImportButton, this);
    this.addToolTipToButtons = bind(this.addToolTipToButtons, this);
    this.skipInvalidData = bind(this.skipInvalidData, this);
    this.skipInvalidStudents = bind(this.skipInvalidStudents, this);
    this["import"] = bind(this["import"], this);
    this.errorsPrint = bind(this.errorsPrint, this);
    this.showModalValidationError = bind(this.showModalValidationError, this);
    console.log('importValidatorError_Constructor');
  }

  importValidation.prototype.showModalValidationError = function(result, addAction, docSubType) {
    this.result = result;
    this.addAction = addAction;
    this.docSubType = docSubType;
    $.ajax({
      url: '/vendor/pages/movement/templates/ImportValidationErrorsTemplate.html',
      cache: true,
      success: (function(_this) {
        return function(data) {
          var err, errWrap, errorsWraps, i, len, ref, template;
          if (_this.result.status === 'IncorrectFormat') {
            alert(_this.result.message);
            return;
          }
          _this._template = data.replace(/(?:\r\n|\r|\n)/g, '');
          _this.showColumnEnabledValues = _.some(_this.result.errors, function(error) {
            return error.enabledValues !== null;
          });
          errorsWraps = [];
          ref = _this.result.errors;
          for (i = 0, len = ref.length; i < len; i++) {
            err = ref[i];
            errWrap = {
              error: err,
              showEnabledValues: err.enabledValues === null || err.enabledValues.length < 6,
              showSpoilerButtonEnabledValues: err.enabledValues !== null && err.enabledValues.length > 6,
              emptyEnabledValues: err.enabledValues === null
            };
            errorsWraps.push(errWrap);
          }
          _this.model = {
            language: language,
            errorsWraps: errorsWraps,
            showColumnEnabledValues: _this.showColumnEnabledValues,
            isAllRowsHasCriticalErrors: _this.result.isAllRowsHasCriticalErrors
          };
          template = Handlebars.compile(_this._template);
          _this.html = template(_this.model);
          return _this.dialog = $.show.dialog({
            size: BootstrapDialog.SIZE_FULL_SCREEN,
            title: "Ошибки",
            message: _this.html,
            onshown: function(dialog) {
              return _this.modalOnshown();
            },
            buttons: [
              {
                label: "Продолжить",
                action: function(dialog) {
                  return _this["import"]();
                },
                cssClass: "Import"
              }, {
                label: language.Generic.Buttons.kCancel,
                action: function(dialog) {
                  return dialog.close();
                }
              }, {
                label: language.Generic.Buttons.kPrint,
                action: function(dialog) {
                  return _this.errorsPrint();
                }
              }
            ]
          });
        };
      })(this)
    });
  };

  importValidation.prototype.errorsPrint = function() {
    var err, errWrapPrint, errorsWrapsPrint, htmlView, i, len, ref, template;
    errorsWrapsPrint = [];
    ref = this.result.errors;
    for (i = 0, len = ref.length; i < len; i++) {
      err = ref[i];
      errWrapPrint = {
        error: err,
        showEnabledValues: true,
        showSpoilerButtonEnabledValues: false,
        emptyEnabledValues: err.enabledValues === null
      };
      errorsWrapsPrint.push(errWrapPrint);
    }
    this.modelPrint = {
      language: language,
      errorsWraps: errorsWrapsPrint,
      showColumnEnabledValues: this.showColumnEnabledValues
    };
    template = Handlebars.compile(this._template);
    htmlView = template(this.modelPrint);
    htmlView = htmlView.replace('similar-user-resolve-dialog', '');
    htmlView = htmlView.replace('errorDescription', '');
    htmlView = htmlView.replace('radioImportOption', 'hideBtn');
    $(htmlView).printUtils().toPrint();
  };

  importTypeOnlyValidStudents = 1;

  importTypeOnlyValidColumns = 2;

  importValidation.prototype["import"] = function() {
    if ($('#skipInvalidData').is(':checked')) {
      return this.skipInvalidData();
    } else {
      return this.skipInvalidStudents();
    }
  };

  importValidation.prototype.skipInvalidStudents = function() {
    if (this.result.isAllRowsHasValidationErrors) {
      alert("Нет корректных записей");
      return;
    }
    return jsSubmit({
      action: "/webapi/movement/import/setImportType",
      method: "POST",
      data: "=" + importTypeOnlyValidStudents,
      showProcessing: true,
      onSuccess: (function(_this) {
        return function() {};
      })(this)
    }, this.addAction());
  };

  importValidation.prototype.skipInvalidData = function() {
    if (this.result.isAllRowsHasCriticalErrors) {
      alert("Импорт невозможен т.к. все записи содержат КРИТИЧЕСКИЕ ошибки.");
      return;
    }
    return jsSubmit({
      action: "/webapi/movement/import/setImportType",
      method: "POST",
      data: "=" + importTypeOnlyValidColumns,
      showProcessing: true,
      onSuccess: (function(_this) {
        return function() {};
      })(this)
    }, this.addAction());
  };

  importValidation.prototype.addToolTipToButtons = function() {
    return $('.Import').attr('title', 'Необходимо выбрать один из вариантов обработки ошибок');
  };

  importValidation.prototype.disableImportButton = function() {
    return $('.Import').attr('disabled', 'disabled');
  };

  importValidation.prototype.enableImportButton = function() {
    return $('.Import').prop('disabled', false);
  };

  importValidation.prototype.addEventToRadioButton = function() {
    $('#skipInvalidData').on("change", (function(_this) {
      return function() {
        return _this.enableImportButton();
      };
    })(this));
    return $('#skipInvalidStudents').on("change", (function(_this) {
      return function() {
        return _this.enableImportButton();
      };
    })(this));
  };

  importValidation.prototype.modalOnshown = function() {
    this.addToolTipToButtons();
    this.disableImportButton();
    return this.addEventToRadioButton();
  };

  return importValidation;

})();
