"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// контроллер для стат. отчетности
var StatFormsCtrl =
/*#__PURE__*/
function () {
  function StatFormsCtrl(yearId, formId, isMns) {
    _classCallCheck(this, StatFormsCtrl);

    // учебный год
    this.yearId = yearId; // идентификатор формы

    this.formId = formId; // МНС

    this.isMns = isMns; // шаблон

    this.statFormValidateErrorsTemplate = null;
  } // импорт форм фгсн


  _createClass(StatFormsCtrl, [{
    key: "ImportStatForm",
    value: function ImportStatForm() {
      var self = this; // инициализирует шаблон

      var getStatFormValidateErrorsTemplate = $.ajax({
        url: "/vendor/pages/templates/statforms/validateErrors.html",
        cache: true,
        success: function success(data) {
          self.statFormValidateErrorsTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
        }
      });

      var importShowDialogWrap = function importShowDialogWrap(html) {
        // отложенный объект
        var deferred = $.Deferred();
        $.show.dialog({
          message: $(html),
          buttons: [{
            label: language.Generic.Buttons.kContinue,
            action: function action(dialog) {
              jsSubmit({
                action: "/webapi/schools/statforms/".concat(self.formId, "/import"),
                data: {
                  isMns: self.isMns
                },
                method: "GET",
                showProcessing: true
              }).then(function () {
                // закрыть диалог
                dialog.successClose(); // успех

                deferred.resolve();
              });
            },
            cssClass: 'btn-primary'
          }]
        });
        return deferred.promise();
      }; // функция импорта


      var importFunc = function importFunc() {
        // инициализирует файловый диалог
        $.show.fileDialog({
          title: language.Generic.Common.kSelectFile,
          fileExts: ['.xls'],
          url: "/webapi/schools/statforms/".concat(self.formId, "/years/").concat(self.yearId, "/validate"),
          invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileFormat,
          isAjax: true
        }).then(function (data) {
          if (data.length) {
            // шаблон
            var template = Handlebars.compile(self.statFormValidateErrorsTemplate);
            var html = template({
              errors: data,
              language: language
            });
            return importShowDialogWrap(html);
          } else {
            return jsSubmit({
              action: "/webapi/schools/statforms/".concat(self.formId, "/import"),
              data: {
                isMns: self.isMns
              },
              method: "GET",
              showProcessing: true
            });
          }
        }).then(function () {
          alert(language.Generic.Import.kImportFGSNSuccess);
        });
      }; // коллекция последовательных запросов


      var queries = [getStatFormValidateErrorsTemplate]; // выполнение запроса

      extDeferred.when(queries).then(function () {
        importFunc();
      });
    }
  }]);

  return StatFormsCtrl;
}();

module.exports = StatFormsCtrl;