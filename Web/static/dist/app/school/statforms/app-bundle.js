/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 448);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackChangesDirective = exports.StrictlyMaxValueDirective = exports.SaveStateDirective = exports.OnlyDigitsValidationDirective = exports.OnlyDigitsDirective = exports.NsLinkifyDirective = exports.NsInputAllowedLengthDirective = exports.NsDateModelDirective = exports.NsDateModel2Directive = exports.IndeterminateDirective = exports.HighliteInputTableRowDirective = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*@ngInject*/
var TrackChangesDirective = function TrackChangesDirective(changeTracker) {
  return {
    link: function link(scope, element, attrs) {
      if (attrs.trackChanges == "false") {
        return;
      }
      var modalDialog = $(element).closest("div.modal.fade");
      var isDatepicker = element[0].tagName === "DATE-INPUT-COMPONENT";
      var isUiSelect = $(element).hasClass("ui-select-container");
      var context = modalDialog.length ? modalDialog : undefined;
      var wasChangedFunc = function wasChangedFunc() {
        changeTracker.dataWasChanged(context);
        scope.$applyAsync();
      };
      //костыль для календаря. в момент инициализации вызывается change. см. dateInput.coffee
      var wasChangedDatePicker = function wasChangedDatePicker() {
        var initingCalendar = element.find("div.input-group.date").prop("initingCalendar");
        if (initingCalendar === true) {
          return;
        }
        wasChangedFunc();
      };
      if (isUiSelect) {
        element.on("click", wasChangedFunc);
        element.on("keydown", wasChangedFunc);
      } else if (isDatepicker) {
        element.on("change", wasChangedDatePicker);
      } else {
        element.on("change", wasChangedFunc);
      }
    }
  };
};
TrackChangesDirective.$inject = ["changeTracker"];
exports.TrackChangesDirective = TrackChangesDirective;
var IndeterminateDirective = function IndeterminateDirective() {
  return {
    restrict: "A",
    link: function link(scope, element, attributes) {
      scope.$watch(attributes["ngIndeterminate"], function (value) {
        element.prop("indeterminate", !!value);
      });
    }
  };
};
exports.IndeterminateDirective = IndeterminateDirective;
var HighliteInputTableRowDirective = function HighliteInputTableRowDirective() {
  return {
    restrict: 'A',
    link: function link(scope, element) {
      element.on("blur", "td.input-cell > input", function () {
        var row = $(this).closest("tr");
        row.removeClass("selected");
      });
      element.on("focus", "td.input-cell > input", function () {
        var row = $(this).closest("tr");
        row.addClass("selected");
      });
    }
  };
};
/*@ngInject*/
exports.HighliteInputTableRowDirective = HighliteInputTableRowDirective;
var NsDateModelDirective = function NsDateModelDirective(dateUtils) {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2str(new Date(dateParam)) : null;
  };
  return {
    restrict: 'A',
    scope: {
      date: "=nsDateModel"
    },
    replace: false,
    link: function link(scope, element) {
      var isoDate = scope.date;
      var strDate = toStr(isoDate);
      $(element).val(strDate);
      $(element).on("change", function () {
        var strVal = element.val();
        var date = dateUtils.str2date(strVal);
        if (date) {
          scope.date = date.toISOString();
        } else {
          scope.date = null;
        }
        scope.$apply();
      });
    }
  };
};
NsDateModelDirective.$inject = ["dateUtils"];
exports.NsDateModelDirective = NsDateModelDirective;
/*@ngInject*/
var NsDateModel2Directive = function NsDateModel2Directive($timeout, dateUtils) {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2str(new Date(dateParam)) : null;
  };
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link(scope, element, attr, ngModel) {
      ngModel.$formatters.push(function (raw) {
        if (raw == null || raw == "") {
          return "";
        }
        if (typeof raw == "string") {
          return toStr(raw);
        }
        var str = dateUtils.date2str(raw);
        return str;
      });
      ngModel.$parsers.push(function (raw) {
        if (raw == null || raw == "") {
          return null;
        }
        var date = dateUtils.str2date(raw);
        return date;
      });
      element.on('paste', function ($event) {
        var data = $event.originalEvent.clipboardData;
        if (typeof data !== "undefined") {
          var pastValue = data.getData("text/plain");
          $timeout(function () {
            ngModel.$setViewValue(pastValue);
          });
          return;
        }
        $timeout(function () {
          var pastValue = element.val();
          ngModel.$setViewValue(pastValue);
        }, 100);
      });
    }
  };
};
NsDateModel2Directive.$inject = ["$timeout", "dateUtils"];
exports.NsDateModel2Directive = NsDateModel2Directive;
var NsLinkifyDirective = function NsLinkifyDirective($timeout) {
  return {
    restrict: "A",
    link: function link(scope, element) {
      var jqElement = $(element);
      $timeout(50).then(function () {
        return jqElement.linkify();
      });
    }
  };
};
/*
 Директива для жестого ограничения вводимых чисел в рамки max
*/
exports.NsLinkifyDirective = NsLinkifyDirective;
var StrictlyMaxValueDirective = function StrictlyMaxValueDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      if (attrs.max) {
        ngModel.$parsers.push(function (value) {
          var maxValue = parseInt(attrs.max);
          if (value || value === 0) {
            if (value > maxValue) {
              ngModel.$setViewValue(maxValue.toString());
              return maxValue.toString();
            }
            return value;
          }
        });
      }
    }
  };
};
exports.StrictlyMaxValueDirective = StrictlyMaxValueDirective;
var OnlyDigitsDirective = function OnlyDigitsDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (text) {
        if (text === " ") {
          return "";
        }
        var transformedInput = text.replace(/[^0-9,]/g, "");
        if (transformedInput !== text) {
          ngModel.$setViewValue(transformedInput);
          ngModel.$render();
        }
        return transformedInput;
      });
    }
  };
};
/*@ngInject*/
exports.OnlyDigitsDirective = OnlyDigitsDirective;
var OnlyDigitsValidationDirective = function OnlyDigitsValidationDirective($parse) {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      var enabled = $parse(attrs.onlyDigitsValidation)(scope);
      if (enabled) {
        ngModel.$validators.onlydigits = function (modelValue, viewValue) {
          if (ngModel.$isEmpty(modelValue)) {
            return true;
          }
          return /^\d+$/.test(modelValue);
        };
      }
    }
  };
};
OnlyDigitsValidationDirective.$inject = ["$parse"];
exports.OnlyDigitsValidationDirective = OnlyDigitsValidationDirective;
OnlyDigitsValidationDirective.selector = "onlyDigitsValidation";
//проверяет длину поля на список возможных
/*@ngInject*/
var NsInputAllowedLengthDirective = function NsInputAllowedLengthDirective($parse) {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      var lengths = $parse(attrs.nsInputAllowedLength)(scope);
      if (!lengths) {
        return;
      }
      ngModel.$validators.allowedlength = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        return lengths.some(function (l) {
          return modelValue.length == l;
        });
      };
    }
  };
};
NsInputAllowedLengthDirective.$inject = ["$parse"];
exports.NsInputAllowedLengthDirective = NsInputAllowedLengthDirective;
NsInputAllowedLengthDirective.selector = "nsInputAllowedLength";
var SaveStateDirective = function SaveStateDirective() {
  return {
    restrict: 'A',
    link: function link(scope, element, attributes) {
      var supportLocalStorage = function supportLocalStorage() {
        try {
          return window.localStorage && _typeof(window['localStorage']) === 'object';
        } catch (error) {
          return false;
        }
      };
      var simpleHash = function simpleHash(str) {
        var hash = 0;
        if (str.length === 0) {
          return hash;
        }
        for (var i = 0, end = str.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
          var _char = str.charCodeAt(i);
          hash = (hash << 5) - hash + _char;
          hash = hash & hash;
        }
        return hash;
      };
      var id = attributes.ngModel;
      var url = /^https?:\/\/([^?#]*)/.exec(document.URL)[1];
      // Ключ берётся через хэш функцию, что бы уменьшить вероятность пересечения ключей
      var key = "H" + simpleHash(url + "|" + attributes.ngModel);
      //console.log id
      var get, set;
      if (supportLocalStorage()) {
        get = function get() {
          return localStorage[key];
        };
        set = function set(value) {
          return localStorage[key] = value;
        };
      } else {
        get = function get() {
          return $.cookie(key);
        };
        set = function set(value) {
          return $.cookie(key, value);
        };
      }
      var load = function load() {
        scope;
        var value = get();
        if (value && "undefined" !== value) {
          return eval("scope." + id + "=" + value);
        }
      };
      var save = function save() {
        scope;
        var value = JSON.stringify(eval("scope." + id));
        return set(value);
      };
      load();
      element.on('change', function (event) {
        return setTimeout(save, 1);
      }); // Отложить выполнение в конец стека обработчиков
    }
  };
};
exports.SaveStateDirective = SaveStateDirective;
SaveStateDirective.selector = "saveState";

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var staticInstance = null;
var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository($http, $dialogs, $alerts) {
    _classCallCheck(this, BaseRepository);
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    staticInstance = this;
  }
  _createClass(BaseRepository, [{
    key: "handleResponse",
    value: function handleResponse(response) {
      return response.data;
    }
  }, {
    key: "handleError",
    value: function handleError(response) {
      var errInformer = function errInformer(message) {
        return staticInstance.$dialogs.error(message);
      };
      var messageInformer = function messageInformer(message) {
        return staticInstance.$dialogs.message(message);
      };
      return new _common.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
    }
  }]);
  return BaseRepository;
}();
exports.BaseRepository = BaseRepository;
BaseRepository.$inject = ["$http", "$dialogs", "$alerts"];

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(449);


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _inputRow = _interopRequireDefault(__webpack_require__(450));
var _boolInput = _interopRequireDefault(__webpack_require__(451));
var _textInput = _interopRequireDefault(__webpack_require__(452));
var _boolInputRow = _interopRequireDefault(__webpack_require__(453));
var _numberInput = _interopRequireDefault(__webpack_require__(454));
var _floatNumberInput = _interopRequireDefault(__webpack_require__(455));
var _floatSingleInput = _interopRequireDefault(__webpack_require__(456));
var _listInput = _interopRequireDefault(__webpack_require__(457));
var _repository = __webpack_require__(458);
var _page = __webpack_require__(459);
var _formList = __webpack_require__(462);
var _importError = __webpack_require__(463);
var _common = __webpack_require__(26);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var angularRuntime = window.location.pathname.startsWith("/angular/");
var dependecies = ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common"];
if (angularRuntime) {
  dependecies.push("irtech.netcity.ui-components");
}
var _module = angular.module("irtech.netcity.school.statforms", dependecies);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/forms/", {
    templateUrl: "/static/dist/app/school/statforms/list/formList.component.html",
    controllerAs: "$ctrl",
    controller: "StatFormListCtrl"
  }).when("/forms/:formId/", {
    templateUrl: "/static/dist/app/school/statforms/page/page.component.html",
    reloadOnSearch: false,
    controllerAs: "$ctrl",
    controller: "StatFormPageCtrl"
  }).otherwise({
    templateUrl: "/static/dist/app/school/statforms/list/formList.component.html",
    controllerAs: "$ctrl",
    controller: "StatFormListCtrl"
  });
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
/*@ngInject*/
var formSectionDirective = function formSectionDirective($compile) {
  return {
    scope: {
      section: "=",
      schoolData: "="
    },
    link: function link(scope, element, attrs) {
      scope.$watch(function (scope) {
        return scope.section;
      }, function (section) {
        if (section) {
          scope.section.processor = new _page.SectionTableProcessor(scope.section.data, {
            sumRows: scope.section.sumRows,
            sumCols: scope.section.sumCols
          });
        }
        element.html(section.template);
        $compile(element.contents())(scope);
        if (section) {
          scope.section.processor.validate();
        }
      });
    }
  };
};
formSectionDirective.$inject = ["$compile"];
_module.controller("StatFormPageCtrl", _page.StatFormPageCtrl).controller("StatFormListCtrl", _formList.StatFormListCtrl).service("statFormsRepository", _repository.StatFormsRepository).service("statFormImportService", _importError.StatFormImportService).directive("onlyDigits", _common.OnlyDigitsDirective).directive("nsFormBoolInput", _boolInput["default"]).directive("nsFormInputRow", _inputRow["default"]).directive("nsFormTextInput", _textInput["default"]).directive("nsFormBoolInputRow", _boolInputRow["default"]).directive("nsFormNumberInput", _numberInput["default"]).directive("nsFormSection", formSectionDirective).directive("nsFloatNumberInput", _floatNumberInput["default"]).directive("nsFloatSingleInput", _floatSingleInput["default"]).directive("nsFormListInput", _listInput["default"]);
if (angularRuntime) {
  _module.config(config);
}

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - отрисовывающая строку числовых инпутов
var _default = function _default($compile) {
  return {
    restrict: "A",
    scope: {
      config: "=",
      section: "="
    },
    replace: true,
    template: "<td ng-repeat='input in inputs'><input type='text' only-digits ng-readonly='section.readOnly' class='form-control' size='7' maxlength='8' ng-model='input.value' ng-change='$parent.onChange(input)' ng-class='input.cssClass' ng-disabled='input.disabled' track-changes></td>",
    link: function link(scope, element, attrs) {
      var config = scope.config;
      var checkZero = parseInt(scope.section.number) < 10;
      var sectionNum = "T" + (checkZero ? "0" : "") + scope.section.number;
      var rowNum = config.row.toString().padStart(2, "0");
      var colStart = config.colStart;
      var colEnd = config.colEnd;
      var inputs = [];
      var processor = scope.section.processor;
      scope.onChange = function (input) {
        processor.changeAndValidate(input.row, input.col, input.value);
      };
      var sumCols = processor.getRowSumCells(config.row, config.colStart, config.colEnd);
      for (var col = colStart; col <= colEnd; col++) {
        var cellName = sectionNum + rowNum + col.toString().padStart(2, "0");
        var cell = processor.getCell(col, config.row, cellName);
        var input = {
          row: config.row,
          col: col,
          cellName: cellName,
          cssClass: "",
          disabled: sumCols.indexOf(col) > -1 && (!config.totals || config.totals.indexOf(col) > -1),
          value: cell.cellValue
        };
        cell.input = input;
        inputs.push(input);
      }
      scope.inputs = inputs;
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - булевого контрола - выпадающего списка
var _default = function _default($compile) {
  return {
    restrict: "E",
    scope: {
      section: "=",
      param: "=",
      config: "="
    },
    replace: true,
    template: "<select ng-class='[config.cssClass, input.cssClass]' class='form-control' ng-disabled='section.readOnly' ng-options='option.val as option.title for option in options' ng-model='paramData' track-changes></select>",
    link: function link(scope, element) {
      var currentModel = _.findWhere(scope.section.data, {
        cellName: scope.param
      });
      scope.options = [{
        title: "",
        val: ""
      }, {
        title: language.Generic.Common.kYes,
        val: "1"
      }, {
        title: language.Generic.Common.kNo,
        val: "0"
      }];
      //Переопределяем стандартные значения для Да/Нет
      if (scope.config) {
        if (scope.config.options) {
          scope.options = [{
            title: '',
            val: null
          }, {
            title: language.Generic.Common.kYes,
            val: scope.config.options[0]
          }, {
            title: language.Generic.Common.kNo,
            val: scope.config.options[1]
          }];
        }
      }
      // todo: чтобы закрыть задачу по 85к, такая же ерунда и в других местах,
      // todo: где номер строки содержит более двух симолов
      var sectionNum = "T" + (parseInt(scope.section.number) < 10 ? "0" : "") + scope.section.number;
      var address = scope.param.slice(sectionNum.length);
      var col = parseInt(address.slice(-2));
      var row = parseInt(address.slice(0, -2));
      $(element).change(function () {
        if (currentModel) {
          currentModel.cellValue = scope.paramData;
          scope.section.processor.changeAndValidate(currentModel.cellRow, currentModel.cellCol, currentModel.cellValue);
          return;
        }
        currentModel = {
          cellName: scope.param,
          cellCol: col,
          cellRow: row,
          cellValue: scope.paramData,
          input: {
            cssClass: ""
          }
        };
        scope.input = currentModel.input;
        scope.section.data.push(currentModel);
      });
      scope.paramData = currentModel && currentModel.cellValue || "";
      if (!currentModel) {
        currentModel = {
          cellName: scope.param,
          cellCol: col,
          cellRow: row,
          cellValue: scope.paramData,
          input: {
            cssClass: ""
          }
        };
        scope.section.data.push(currentModel);
      } else {
        currentModel.input = {
          cssClass: ""
        };
      }
      scope.input = currentModel.input;
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - контрола для ввода текста
var _default = function _default() {
  return {
    restrict: "E",
    scope: {
      section: "=",
      param: "=",
      config: "=",
      // опциональные параметры
      textlength: "=?",
      size: "=inputsize"
    },
    replace: true,
    template: "<input type='text' ng-class='[config.cssClass, input.cssClass]' class='form-control' ng-readonly='section.readOnly' size='4' maxlength='150' ng-model='input.value' ng-change='onChange(input)' ng-disabled='input.disabled' track-changes>",
    link: function link(scope, element) {
      element.prop("maxlength", scope.textlength || 150);
      element.prop("size", scope.size || 4);
      var processor = scope.section.processor;
      scope.onChange = function (input) {
        processor.changeAndValidate(input.row, input.col, input.value, input.cellName);
      };
      scope.$on('cells_clean', function () {
        scope.input.value = null;
      });
      var selection = {
        cellCol: 0,
        cellRow: 0
      };
      if (scope.param.indexOf('_') < 0) {
        selection.cellCol = parseInt(scope.param.slice(-2));
        selection.cellRow = parseInt(scope.param.slice(-4, -2));
      }
      var cell = processor.getCell(selection.cellCol, selection.cellRow, scope.param);
      scope.input = {
        row: selection.cellRow,
        col: selection.cellCol,
        cellName: scope.param,
        cssClass: "",
        disabled: false,
        value: cell.cellValue
      };
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - отрисовывающая строку числовых инпутов
var _default = function _default($compile) {
  return {
    restrict: "A",
    scope: {
      config: "=",
      section: "="
    },
    replace: true,
    template: "<td ng-repeat='input in inputs'><ns-form-bool-input param='input.cellName' section='section' config='input.config'></ns-form-bool-input></td>",
    link: function link(scope, element, attrs) {
      var config = scope.config;
      var checkZero = parseInt(scope.section.number) < 10;
      var sectionNum = "T" + (checkZero ? "0" : "") + scope.section.number;
      var rowNum = config.row.toString().padStart(2, "0");
      var colStart = config.colStart;
      var colEnd = config.colEnd;
      var inputs = [];
      // #38025 костыль
      var boolListConfig = null;
      if (config.options) {
        boolListConfig = {
          options: config.options
        };
      }
      for (var col = colStart; col <= colEnd; col++) {
        var cellName = sectionNum + rowNum + col.toString().padStart(2, "0");
        var cell = scope.section.processor.getCell(col, config.row, cellName);
        var input = {
          cellName: cellName,
          config: boolListConfig // #38025 костыль
        };

        cell.input = input;
        inputs.push(input);
      }
      scope.inputs = inputs;
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - отрисовывающая строку числовых инпутов
var _default = function _default($compile) {
  return {
    restrict: "E",
    scope: {
      section: "=",
      param: "=",
      config: "="
    },
    replace: true,
    template: "<input type='text' only-digits class='form-control' ng-class='[config.cssClass, input.cssClass]'  ng-readonly='section.readOnly' size='7' maxlength='8' ng-model='value' ng-disabled='section.readOnly' track-changes>",
    link: function link(scope, element) {
      var currentModel = _.findWhere(scope.section.data, {
        cellName: scope.param
      });
      $(element).on("change", function () {
        if (currentModel) {
          scope.section.processor.changeAndValidate(currentModel.cellRow, currentModel.cellCol, scope.value);
          return;
        }
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.value,
          input: {
            cssClass: ""
          }
        };
        scope.input = currentModel.input;
        scope.section.data.push(currentModel);
        scope.section.processor.changeAndValidate(currentModel.cellRow, currentModel.cellCol, scope.value);
      });
      if (!currentModel) {
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.value,
          input: {
            cssClass: ""
          }
        };
        scope.section.data.push(currentModel);
      } else {
        currentModel.input = {
          cssClass: ""
        };
      }
      scope.input = currentModel.input;
      scope.value = currentModel && currentModel.cellValue || "";
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - отрисовывающая строку числовых инпутов
var _default = function _default($compile) {
  return {
    restrict: "A",
    scope: {
      config: "=",
      section: "=",
      decimalPlaces: "=?"
    },
    replace: true,
    template: "<td ng-repeat='input in inputs'><input type='text' ng-readonly='section.readOnly' class='form-control' size='5' maxlength='8' ng-model='input.value' ng-blur='$parent.onChange(input)' ng-class='[config.cssClass, input.cssClass]' ng-disabled='input.disabled' track-changes></td>",
    link: function link(scope, element, attrs) {
      var config = scope.config;
      var checkZero = parseInt(scope.section.number) < 10;
      var sectionNum = "T" + (checkZero ? "0" : "") + scope.section.number;
      var rowNum = config.row.toString().padStart(2, "0");
      var colStart = config.colStart;
      var colEnd = config.colEnd;
      var inputs = [];
      scope.onChange = function (input) {
        scope.section.processor.changeAndValidateFloatNumber(input.row, input.col, input.value, scope.decimalPlaces);
      };
      var sumCols = scope.section.processor.getRowSumCells(config.row, config.colStart, config.colEnd);
      for (var col = colStart; col <= colEnd; col++) {
        var cellName = sectionNum + rowNum + col.toString().padStart(2, "0");
        var cell = scope.section.processor.getCell(col, config.row, cellName);
        var input = {
          row: config.row,
          col: col,
          cellName: cellName,
          cssClass: "",
          disabled: sumCols.indexOf(col) > -1,
          value: cell.cellValue
        };
        cell.input = input;
        inputs.push(input);
      }
      scope.inputs = inputs;
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - отрисовывающая строку числовых инпутов
var _default = function _default($compile) {
  return {
    restrict: "E",
    scope: {
      section: "=",
      param: "=",
      config: "=",
      decimalPlaces: "=?"
    },
    replace: true,
    template: "<input type='text' class='form-control' ng-class='[config.cssClass, input.cssClass]'  ng-readonly='section.readOnly' size='7' maxlength='8' ng-model='value' ng-disabled='section.readOnly' track-changes>",
    link: function link(scope, element) {
      var currentModel = _.findWhere(scope.section.data, {
        cellName: scope.param
      });
      $(element).on("change", function () {
        if (currentModel) {
          scope.section.processor.changeAndValidateFloatNumber(currentModel.cellRow, currentModel.cellCol, scope.value, scope.decimalPlaces);
          return;
        }
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.value,
          input: {
            cssClass: ""
          }
        };
        scope.input = currentModel.input;
        scope.section.data.push(currentModel);
        scope.section.processor.changeAndValidateFloatNumber(currentModel.cellRow, currentModel.cellCol, scope.value, scope.decimalPlaces);
      });
      if (!currentModel) {
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.value,
          input: {
            cssClass: ""
          }
        };
        scope.section.data.push(currentModel);
      } else {
        currentModel.input = {
          cssClass: ""
        };
      }
      scope.input = currentModel.input;
      scope.value = currentModel && currentModel.cellValue || "";
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//директива - выпадающего списка
var _default = function _default($compile) {
  return {
    restrict: "E",
    scope: {
      section: "=",
      param: "=",
      config: "=",
      range: "="
    },
    replace: true,
    template: "<select ng-class='[config.cssClass, input.cssClass]' class='form-control' ng-disabled='section.readOnly' ng-options='option.val as option.title for option in options' ng-model='paramData' track-changes></select>",
    link: function link(scope, element) {
      var range = scope.range;
      var currentModel = _.findWhere(scope.section.data, {
        cellName: scope.param
      });
      $(element).on("change", function () {
        if (currentModel) {
          currentModel.cellValue = scope.paramData;
          scope.section.processor.changeAndValidate(currentModel.cellRow, currentModel.cellCol, currentModel.cellValue);
          return;
        }
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.paramData,
          input: {
            cssClass: ""
          }
        };
        scope.input = currentModel.input;
        scope.section.data.push(currentModel);
      });
      scope.paramData = currentModel && currentModel.cellValue || "";
      var options = [{
        title: "",
        val: ""
      }];
      if (Array.isArray(range)) {
        range.forEach(function (item) {
          return options.push({
            title: item.toString(),
            val: item.toString()
          });
        });
      } else {
        for (var i = range.start; i <= range.end; i++) {
          options.push({
            title: i.toString(),
            val: i.toString()
          });
        }
      }
      scope.options = options;
      if (!currentModel) {
        currentModel = {
          cellName: scope.param,
          cellCol: parseInt(scope.param.slice(-2)),
          cellRow: parseInt(scope.param.slice(-4, -2)),
          cellValue: scope.paramData,
          input: {
            cssClass: ""
          }
        };
        scope.section.data.push(currentModel);
      } else {
        currentModel.input = {
          cssClass: ""
        };
      }
      scope.input = currentModel.input;
    }
  };
};
exports["default"] = _default;

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormsRepository = void 0;
var _repository = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var StatFormsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(StatFormsRepository, _BaseRepository);
  var _super = _createSuper(StatFormsRepository);
  function StatFormsRepository() {
    _classCallCheck(this, StatFormsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(StatFormsRepository, [{
    key: "getFormList",
    value: function getFormList(schoolYearId) {
      return this.$http.get("/webapi/schools/statforms", {
        params: {
          schoolYearId: schoolYearId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getPageList",
    value: function getPageList(formId, globalYearId) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/pages"), {
        params: {
          globalYearId: globalYearId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getPageInfo",
    value: function getPageInfo(formId, globalYearId, pageNum) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/page"), {
        params: {
          globalYearId: globalYearId,
          pageNum: pageNum
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getPageData",
    value: function getPageData(formId, schoolYearId, pageNum) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/data"), {
        params: {
          schoolYearId: schoolYearId,
          pageNum: pageNum
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getCalcStatFormSections",
    value: function getCalcStatFormSections(statForm, yearid, page) {
      return this.$http.get("/webapi/schools/statforms/".concat(statForm, "/years/").concat(yearid, "/page/").concat(page, "/autocalc2")).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "savePageData",
    value: function savePageData(formId, schoolYearId, pageNum, data) {
      var params = {
        schoolYearId: schoolYearId,
        pageNum: pageNum
      };
      return this.$http.post("/webapi/schools/statforms/".concat(formId, "/data"), data, {
        params: params
      })["catch"](this.handleError);
    }
  }, {
    key: "import",
    value: function _import(formId, isMns) {
      var _this = this;
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/import")).then(function () {
        _this.$alerts.success("Импорт формы успешно произведен");
      }, this.handleError);
    }
  }, {
    key: "closeForm",
    value: function closeForm(formId, schoolId, schoolYearId, isMns) {
      var params = {
        schoolId: schoolId,
        schoolYearId: schoolYearId,
        isMns: isMns
      };
      return this.$http.post("/webapi/schools/statforms/".concat(formId, "/close"), null, {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getFormClosed",
    value: function getFormClosed(formId, schoolYearId, isMns) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/closed"), {
        params: {
          schoolYearId: schoolYearId,
          isMns: isMns
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getSchoolInfoValues",
    value: function getSchoolInfoValues(schoolId) {
      return this.$http.get("/webapi/schools/infovalues", {
        params: {
          schoolId: schoolId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return StatFormsRepository;
}(_repository.BaseRepository);
exports.StatFormsRepository = StatFormsRepository;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormPageCtrl = exports.SectionTableProcessor = void 0;
var _tableProcessor = __webpack_require__(460);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//todo. перенесены из CommonPage_inc. todo локализовать 
var closeMessageConfirm = "Вы не сможете больше вносить изменения в \"form\" за этот учебный год.\nВы желаете закрыть \"form\" для этого года и подготовить Форму для следующего учебного года ?\n";
var closeMessageConfirm2 = "ВНИМАНИЕ! Последнее предупреждение!\n\nВы не сможете больше вносить изменения в \"form\" для этого учебного года, Вы сможете только просматривать или печатать её содержимое.\nВы действительно желаете закрыть Форму?";
var kBtnClose = "Закрыть form";
var StatFormPageCtrl = /*#__PURE__*/function () {
  StatFormPageCtrl.$inject = ["language", "$scope", "pageContext", "appContext", "statFormsRepository", "$routeParams", "$appLoader", "$http", "$alerts", "$location", "$q", "$dialogs", "changeTracker", "statFormImportService", "downloadService", "$longWork"];
  /*@ngInject*/
  function StatFormPageCtrl(language, $scope, pageContext,
  //appContext: AppContext,
  appContext, statFormsRepository, $routeParams, $appLoader, $http, $alerts, $location, $q, $dialogs, changeTracker, statFormImportService, downloadService, $longWork) {
    _classCallCheck(this, StatFormPageCtrl);
    this.language = language;
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.statFormsRepository = statFormsRepository;
    this.$appLoader = $appLoader;
    this.$http = $http;
    this.$alerts = $alerts;
    this.$location = $location;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.changeTracker = changeTracker;
    this.statFormImportService = statFormImportService;
    this.downloadService = downloadService;
    this.$longWork = $longWork;
    // информация по странице
    this.page = null;
    this.pageInfo = null;
    this.pageList = null;
    this.pageData = null;
    this.sections = null;
    this.schoolInfoValues = null;
    pageContext.back = {
      href: "/forms/"
    };
    pageContext.parent = {
      title: language.Generic.StatReports.kStatReports,
      href: "forms"
    };
    var search = $location.search();
    this.formId = $routeParams.formId;
    this.pageNum = search && search.page || 1;
    this.globalYearId = appContext.globalYearId;
    this.schoolYearId = appContext.yearId;
    this.schoolId = appContext.schoolId;
    this.fullSchoolName = appContext.fullSchoolName;
    this.schoolName = appContext.organization ? appContext.organization.name : appContext.schoolName;
    this.schoolData = {
      schoolInfoValues: null,
      fullSchoolName: this.fullSchoolName,
      schoolName: this.schoolName,
      globalYearId: this.globalYearId,
      currYearStart: appContext.currYear.split("/")[0],
      currYearEnd: appContext.currYear.split("/")[1]
    };
    this.init();
  }
  _createClass(StatFormPageCtrl, [{
    key: "checkForChanges",
    value: function checkForChanges() {
      if (this.changeTracker.isDataChanged()) {
        return this.$dialogs.confirm(this.language.Generic.Common.kDataWereChanged);
      }
      return this.$q.when();
    }
  }, {
    key: "changePage",
    value: function changePage() {
      var _this = this;
      // todo: доработать переключение select
      this.checkForChanges().then(function () {
        _this.$appLoader.show();
        _this.$location.search("page", _this.page.id);
        _this.pageNum = _this.page.id;
        _this.load().then(function () {
          _this.$appLoader.hide();
        });
      });
    }
    //загрузка данных страницы
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var sections = [];
      //todo. для титульного листа необходимо дополнительно запршивать:
      //todo. - данные карточки ОО, для отображения ИНН, КПП, ОКПО и т.д.
      //todo. - данные по учебному году - для отображения даты предоставления формы и т.д.
      var loader = new SectionDataLoader(this.$http);
      var preparePageInfo = this.statFormsRepository.getPageInfo(this.formId, this.globalYearId, this.pageNum).then(function (pageInfo) {
        _this2.pageInfo = pageInfo;
      }).then(function () {
        _this2.pageContext.title = _this2.pageInfo.formName;
        var promises = [];
        sections = angular.copy(_this2.pageInfo.sections);
        var _iterator = _createForOfIteratorHelper(sections),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var section = _step.value;
            var prepareSection = loader.loadData(section);
            promises.push(prepareSection);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return Promise.all(promises);
      });
      var loadPageData = this.statFormsRepository.getPageData(this.formId, this.schoolYearId, this.pageNum).then(function (pageData) {
        _this2.pageData = pageData;
      });
      var loadFormClosed = this.statFormsRepository.getFormClosed(this.formId, this.schoolYearId).then(function (formClosed) {
        _this2.formClosed = formClosed;
      });
      var loadSchoolInfoValues = this.statFormsRepository.getSchoolInfoValues(this.schoolId).then(function (schoolInfoValues) {
        _this2.schoolInfoValues = schoolInfoValues;
        _this2.schoolData.schoolInfoValues = schoolInfoValues;
      });
      return Promise.all([loadPageData, preparePageInfo, loadFormClosed, loadSchoolInfoValues]).then(function () {
        var _iterator2 = _createForOfIteratorHelper(sections),
          _step2;
        try {
          var _loop = function _loop() {
            var section = _step2.value;
            section.readOnly = _this2.pageInfo.readOnly || _this2.formClosed;
            section.data = _this2.pageData.filter(function (d) {
              if (d.sectionPoint) {
                return d.sectionPoint === section.number;
              }
              return d.sectionNum.toString() === section.number;
            });
            if (_this2.formId === "oo2" && section.number === "1.1.1") _this2.fixOO2(section);
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        _this2.sections = sections;
        _this2.$scope.$apply();
        _this2.changeTracker.clearDataChanges();
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "fixOO2",
    value: function fixOO2(section) {
      var _loop2 = function _loop2(i) {
        var data = section.data.find(function (x) {
          return x.cellCol === 1 && x.cellRow === i;
        });
        if (!data) {
          item = {
            letter: null,
            sectionNum: 1,
            sectionPoint: "1.1.1",
            cellRow: i,
            cellCol: 1,
            destCellRow: 0,
            destCellCol: 0,
            cellName: "T01.1.1" + i.toString().padStart(2, "0") + "01",
            cellValue: "Здание " + i.toString()
          };
          section.data.push(item);
        }
      };
      for (var i = 1; i <= 26; i++) {
        var item;
        _loop2(i);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;
      this.load().then(function () {
        return _this3.$alerts.success(_this3.language.Generic.Common.kResetChanges);
      });
    }
    // сохранение изменений
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      if (this.valid()) {
        var data = _.chain(this.sections).pluck("data").flatten().value();
        this.statFormsRepository.savePageData(this.formId, this.schoolYearId, this.pageNum, data).then(function () {
          _this4.changeTracker.clearDataChanges();
          _this4.$alerts.success(_this4.language.Generic.Common.kDataSaved);
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kIncorrectData);
      }
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.sections.reduce(function (result, section) {
        return result && section.processor.valid();
      }, true);
    }
    // закрытие формы
    // todo: пока не проверял
  }, {
    key: "close",
    value: function close() {
      var _this5 = this;
      var promises = [function () {
        return _this5.$dialogs.confirm(closeMessageConfirm.split("form").join("Форму № " + _this5.pageInfo.formName));
      }, function () {
        return _this5.$dialogs.confirm(closeMessageConfirm2.split("form").join("Форму № " + _this5.pageInfo.formName));
      }];
      extDeferred.when(promises).then(function () {
        return _this5.statFormsRepository.closeForm(_this5.formId, _this5.schoolId, _this5.schoolYearId);
      }).then(function () {
        _this5.formClosed = true;
      });
      //todo. реализовать закрытие форм
    }
    //импорт формы
  }, {
    key: "import",
    value: function _import() {
      //todo. реализовать импорт
      this.statFormImportService["import"](this.formId, this.schoolYearId);
    }
    // экспорт формы
  }, {
    key: "export",
    value: function _export() {
      //todo. реализовать экспорт
      var downloadPromise = this.downloadService.downloadFile("/webapi/schools/statforms/".concat(this.formId, "/export"), {
        method: "get"
      });
      this.$longWork.execute(downloadPromise);
    }
  }, {
    key: "autoCalc",
    value: function autoCalc() {
      var _this6 = this;
      this.$dialogs.confirm(this.language.Generic.SchoolInfo.kWarnAutoCalc).then(function () {
        var calcPromise = _this6.statFormsRepository.getCalcStatFormSections(_this6.formId, _this6.schoolYearId, _this6.pageNum).then(function (calculatedSections) {
          _this6.fillSections(calculatedSections);
          _this6.autoSum();
          _this6.$alerts.success(_this6.language.Generic.StatReports.kCalcWasSuccess);
        });
        _this6.$longWork.execute(calcPromise);
      });
    }
  }, {
    key: "autoSum",
    value: function autoSum() {
      this.sections.forEach(function (section) {
        return section.processor.sumAndValidate();
      });
    }
  }, {
    key: "print",
    value: function print() {
      angular.element(".print-block").printUtils().toPrint();
    }
  }, {
    key: "fillSections",
    value: function fillSections(calculatedSections) {
      this.sections.forEach(function (s) {
        var calculatedSection = calculatedSections.find(function (cs) {
          return cs.name === s.number;
        });
        var calculatedCells = calculatedSection.statFormCells;
        if (!calculatedCells) return;
        var cells = s.data;
        cells.forEach(function (c) {
          var calculatedCell = calculatedCells.find(function (cc) {
            return cc.cellRow == c.cellRow && cc.cellCol === c.cellCol;
          });
          // заполнение модели
          if (calculatedCell) {
            // todo: нужно бы привести к единому
            c.input.value = c.cellValue = calculatedCell.cellValue; // для модели и для сохранения
          }
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this7 = this;
      var preparePageList = this.statFormsRepository.getPageList(this.formId, this.globalYearId).then(function (pageList) {
        _this7.pageList = pageList;
      }).then(function () {
        _this7.page = _.findWhere(_this7.pageList, {
          id: _this7.pageNum
        });
      });
      var pageInit = this.load();
      Promise.all([pageInit, preparePageList]).then(function () {
        _this7.$appLoader.hide();
      });
    }
  }]);
  return StatFormPageCtrl;
}();
exports.StatFormPageCtrl = StatFormPageCtrl;
var SectionDataLoader = /*#__PURE__*/function () {
  SectionDataLoader.$inject = ["$http"];
  /*@ngInject*/
  function SectionDataLoader($http) {
    _classCallCheck(this, SectionDataLoader);
    this.$http = $http;
    this.$http = $http;
    this.templateDir = "/static/dist/app/school/statforms/templates/";
  }
  _createClass(SectionDataLoader, [{
    key: "loadData",
    value: function loadData(section) {
      var _this8 = this;
      var teplateUrl = this.templateDir + section.templatePath;
      var promises = [];
      //загрузка шаблона
      var prepareTemplate = new Promise(function (resolve) {
        _this8.$http({
          url: teplateUrl,
          method: "GET",
          responseType: "text"
        }).then(function (response) {
          var template = response.data;
          section.template = template;
          resolve(section);
        }, function (response) {
          //в случае ошибки - отобразится текст
          section.template = "Ошибка загрузки раздела. Файл шаблона не найден";
          resolve(section);
        });
      });
      promises.push(prepareTemplate);
      // загрузка настроек раздела
      var settingsPath = teplateUrl.replace(".html", ".json");
      var prepareSettings = new Promise(function (resolve) {
        _this8.$http.get(settingsPath).then(function (response) {
          var settings = response.data;
          if (settings) {
            _this8.expandRanges(settings);
            if (!settings.sumRows) {
              settings.sumRows = [];
            }
            section = angular.extend(section, settings);
          }
          resolve(settings);
        }, function (response) {
          //настройки могут отсутствовать
          resolve();
        });
      });
      promises.push(prepareSettings);
      return Promise.all(promises);
    }
  }, {
    key: "expandRanges",
    value: function expandRanges(settings) {
      if (settings.sumCols) {
        var _iterator3 = _createForOfIteratorHelper(settings.sumCols),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var sumCol = _step3.value;
            if (sumCol.subCols.start && sumCol.subCols.end) {
              var range = [];
              for (var i = sumCol.subCols.start; i <= sumCol.subCols.end; i++) {
                range.push(i);
              }
              sumCol.subCols = range;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (settings.sumRows) {
        var _iterator4 = _createForOfIteratorHelper(settings.sumRows),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var sumCow = _step4.value;
            if (sumCow.subRows.start && sumCow.subRows.end) {
              var _range = [];
              for (var _i = sumCow.subRows.start; _i <= sumCow.subRows.end; _i++) {
                _range.push(_i);
              }
              sumCow.subRows = _range;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }]);
  return SectionDataLoader;
}(); //процессор с перекрытими обработчиками для отображения изменений на странице
var SectionTableProcessor = /*#__PURE__*/function (_TableProcessor) {
  _inherits(SectionTableProcessor, _TableProcessor);
  var _super = _createSuper(SectionTableProcessor);
  function SectionTableProcessor(tableData, tableRules) {
    _classCallCheck(this, SectionTableProcessor);
    return _super.call(this, tableData, tableRules);
  }
  _createClass(SectionTableProcessor, [{
    key: "onChangeCellValue",
    value: function onChangeCellValue(cell) {
      //установка значения в angular модель директивы
      cell.input.value = cell.cellValue;
    }
  }, {
    key: "onChangeCellStatus",
    value: function onChangeCellStatus(cell, status) {
      if (status === "invalid") {
        status = "form-cell-invalid";
      }
      if (status === "overflow") {
        status = "form-cell-dependent-invalid";
      }
      if (cell && cell.input) {
        // установка значения в angular модель директивы
        cell.input.cssClass = status;
      }
    }
    // todo: костыль
  }, {
    key: "valid",
    value: function valid() {
      var cells = this.tableData;
      return !cells.some(function (x) {
        return x.input && (x.input.cssClass === "form-cell-invalid" || x.input.cssClass === "form-cell-dependent-invalid");
      });
    }
  }, {
    key: "clean",
    value: function clean() {
      this.tableData.forEach(function (x) {
        x.cellValue = null;
        if (x && x.input) {
          x.input.value = null;
          x.input.cssClass = null;
        }
      });
    }
  }]);
  return SectionTableProcessor;
}(_tableProcessor.TableProcessor);
exports.SectionTableProcessor = SectionTableProcessor;

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProcessor = void 0;
var _numberUtils = __webpack_require__(461);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ValuesHelper = /*#__PURE__*/function () {
  function ValuesHelper() {
    _classCallCheck(this, ValuesHelper);
  }
  _createClass(ValuesHelper, [{
    key: "crop",
    value: function crop(value, x) {
      var a = value.split(".");
      if (a.length >= 2) {
        a[1] = a[1] || "";
        return parseFloat("".concat(a[0], ".").concat(a[1].substring(0, x)));
      }
      return parseFloat(value);
    }
  }, {
    key: "str2floatEx",
    value: function str2floatEx(value, decimalPlaces) {
      var zero = "0";
      var strVal;
      var fVal = 0;
      if (value) {
        strVal = value.trim();
      } else {
        return zero;
      }
      strVal = strVal.replace(",", ".");
      if (decimalPlaces) {
        fVal = this.crop(strVal, decimalPlaces);
      } else {
        fVal = parseFloat(strVal);
      }
      if (isNaN(fVal)) {
        return zero;
      }
      return fVal.toString();
    }
  }, {
    key: "toNumber",
    value: function toNumber(val) {
      if (isNaN(parseFloat(val))) {
        return 0;
      }
      return parseFloat(val);
    }
  }]);
  return ValuesHelper;
}(); //класс ответственный за перекрестные проверки в таблицах
var TableProcessor = /*#__PURE__*/function () {
  function TableProcessor(tableData, tableRules) {
    _classCallCheck(this, TableProcessor);
    this.tableData = tableData;
    this.tableRules = tableRules;
    this.helper = new ValuesHelper();
  }
  _createClass(TableProcessor, [{
    key: "clean",
    value: function clean() {
      this.tableData.forEach(function (x) {
        x.cellValue = null;
        if (x && x.input) {
          x.input.value = null;
          x.input.cssClass = null;
        }
      });
    }
  }, {
    key: "changeAndValidateFloatNumber",
    value: function changeAndValidateFloatNumber(row, col, val, decimalPlaces) {
      this.changeAndValidate(row, col, this.helper.str2floatEx(val, decimalPlaces));
    }
  }, {
    key: "clearCellsStatus",
    value: function clearCellsStatus() {
      var cells = this.tableData;
      cells.forEach(function (x) {
        if (x && x.input) x.input.cssClass = "";
      });
    }
    // установка значения ячейки и валидация
  }, {
    key: "changeAndValidate",
    value: function changeAndValidate(row, col, val, cellName) {
      var cell = this.getCell(col, row, cellName);
      // в модель ставится значение из cell.input.value ?
      cell.cellValue = val;
      if (cell.input) {
        cell.input.value = val;
      }
      this.sumAndValidate();
      /*this.clearCellsStatus();
      this.applyColSum();
      this.applyRowSum();
      this.validateCols();
      this.validateRows();*/
      // случай, когда редактируется общая ячейка
      //this.validateCell(cell, row, col);
    }
    // суммирует и валидирует ячейки
  }, {
    key: "sumAndValidate",
    value: function sumAndValidate() {
      this.applyColSum();
      this.applyRowSumWithDependencies();
      this.validate();
    }
  }, {
    key: "validate",
    value: function validate() {
      this.clearCellsStatus();
      this.validateCols();
      this.validateRows();
    }
  }, {
    key: "applyColSum",
    value: function applyColSum() {
      var _this = this;
      if (!this.tableRules || !this.tableRules.sumCols) {
        return;
      }
      var sumRules = this.tableRules.sumCols.filter(function (c) {
        return c.type === "sum";
      });
      sumRules.forEach(function (x) {
        var rows = x.rows || _this.allRows;
        var _iterator = _createForOfIteratorHelper(rows),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            var totalColCell = _this.getCell(x.col, row);
            var sum = _this.getRowSum(row, x.subCols);
            totalColCell.cellValue = sum;
            if (totalColCell.input) {
              totalColCell.input.value = sum;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "allRows",
    get: function get() {
      var rows = _.chain(this.tableData || []).groupBy(function (x) {
        return x.cellRow;
      }).keys().map(function (x) {
        return parseInt(x);
      }).value();
      return rows;
    }
  }, {
    key: "applyRowSum",
    value: function applyRowSum() {
      var _this2 = this;
      if (!this.tableRules || !this.tableRules.sumRows) {
        return;
      }
      var sumRules = this.tableRules.sumRows.filter(function (c) {
        return c.type === "sum";
      });
      sumRules.forEach(function (x) {
        var cols = x.cols || _this2.allCols;
        var _iterator2 = _createForOfIteratorHelper(cols),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var col = _step2.value;
            var totalRowCell = _this2.getCell(col, x.row);
            var sum = _this2.getColSum(col, x.subRows);
            totalRowCell.cellValue = sum;
            if (totalRowCell.input) {
              totalRowCell.input.value = sum;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
  }, {
    key: "flattenSumRows",
    value: function flattenSumRows() {
      var sumRules = angular.copy(this.tableRules.sumRows.filter(function (c) {
        return c.type === "sum";
      }));
      return sumRules.map(function (x) {
        var index;
        var _loop = function _loop() {
          var _x$subRows;
          var subRow = x.subRows[index];
          var childSubRows = sumRules.find(function (rule) {
            return rule.row == subRow;
          }).subRows;
          (_x$subRows = x.subRows).splice.apply(_x$subRows, [index, 1].concat(_toConsumableArray(childSubRows)));
        };
        while ((index = x.subRows.findIndex(function (row) {
          return sumRules.some(function (rule) {
            return rule.row == row;
          });
        })) >= 0) {
          _loop();
        }
        return x;
      });
    }
  }, {
    key: "applyRowSumWithDependencies",
    value: function applyRowSumWithDependencies() {
      var _this3 = this;
      if (!this.tableRules || !this.tableRules.sumRows) {
        return;
      }
      var sumRules = this.flattenSumRows();
      sumRules.forEach(function (x) {
        var cols = x.cols || _this3.allCols;
        var _iterator3 = _createForOfIteratorHelper(cols),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var col = _step3.value;
            var totalRowCell = _this3.getCell(col, x.row);
            var sum = _this3.getColSum(col, x.subRows);
            totalRowCell.cellValue = sum;
            if (totalRowCell.input) {
              totalRowCell.input.value = sum;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    }
  }, {
    key: "allCols",
    get: function get() {
      var cols = _.chain(this.tableData || []).filter(function (x) {
        return !!x.cellCol;
      }).groupBy(function (x) {
        return x.cellCol;
      }).keys().map(function (x) {
        return parseInt(x);
      }).value();
      return cols;
    }
  }, {
    key: "validateCols",
    value: function validateCols() {
      var _this4 = this;
      if (!this.tableRules || !this.tableRules.sumCols) {
        return;
      }
      var rules = this.tableRules.sumCols.filter(function (c) {
        return c.type !== "sum";
      });
      rules.forEach(function (x) {
        _this4.validateCol(x);
      });
    }
  }, {
    key: "validateRows",
    value: function validateRows() {
      var _this5 = this;
      if (!this.tableRules || !this.tableRules.sumRows) {
        return;
      }
      var rules = this.tableRules.sumRows.filter(function (c) {
        return c.type !== "sum";
      });
      rules.forEach(function (x) {
        _this5.validateRow(x);
      });
    }
  }, {
    key: "validateCol",
    value: function validateCol(rule) {
      if (rule.type === "ofthem") {
        this.checkOfThemColCell(rule);
      } else if (rule.type === "eq") {
        this.checkEqColCell(rule);
      } else if (rule.type === "include") {
        this.checkIncludeColCell(rule);
      } else if (rule.type === "suminclude") {
        this.checkSumIncludeColCell(rule);
      } else if (rule.type === "bool1") {
        this.checkBoolColCell(rule);
      } else if (rule.type == "bool1One") {
        this.checkBoolIsOneThenOneColCell(rule);
      } else if (rule.type === "bool1any") {
        this.checkBoolIsOneThenAnyColCell(rule);
      } else if (rule.type === "eqany") {
        this.checkEqAnyColCell(rule);
      } else if (rule.type === "cell") {
        this.checkColCell(rule);
      } else if (rule.type === "eqmax") {
        this.checkEqMaxColCell(rule);
      }
    }
  }, {
    key: "validateRow",
    value: function validateRow(rule) {
      if (rule.type === "ofthem") {
        this.checkOfThemRowCell(rule);
      } else if (rule.type === "eq") {
        this.checkEqRowCell(rule);
      } else if (rule.type === "include") {
        this.checkIncludeRowCell(rule);
      } else if (rule.type === "suminclude") {
        this.checkSumIncludeRowCell(rule);
      } else if (rule.type === "bool1") {
        this.checkBoolRowCell(rule);
      } else if (rule.type == "bool1One") {
        this.checkBoolIsOneThenOneRowCell(rule);
      } else if (rule.type === "bool1any") {
        this.checkBoolIsOneThenAnyRowCell(rule);
      } else if (rule.type === "eqany") {
        this.checkEqAnyRowCell(rule);
      } else if (rule.type === "cell") {
        this.checkRowCell(rule);
      } else if (rule.type === "eqmax") {
        this.checkEqMaxRowCell(rule);
      }
    }
  }, {
    key: "checkSumCols",
    value: function checkSumCols() {
      return this.tableRules && this.tableRules.sumCols;
    }
    //проверка итоговой ячейки "из них". выставление соответствующих статусов
  }, {
    key: "checkOfThemRowCell",
    value: function checkOfThemRowCell(ofthemTotalRow) {
      var totalCellStatus = "valid";
      var cols = ofthemTotalRow.cols || this.allCols;
      var _iterator4 = _createForOfIteratorHelper(cols),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var col = _step4.value;
          totalCellStatus = "valid";
          var totalCell = this.getCell(col, ofthemTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator5 = _createForOfIteratorHelper(ofthemTotalRow.subRows),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var ofRow = _step5.value;
              var subCell = this.getCell(col, ofRow);
              var cellValue = subCell.cellValue && parseFloat(TableProcessor.fixCommaSign(subCell.cellValue));
              if (cellValue > totalValue) {
                this.onChangeCellStatus(subCell, "overflow");
                totalCellStatus = "invalid";
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          if (totalCellStatus === "invalid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    //проверка итоговой ячейки "из них". выставление соответствующих статусов
  }, {
    key: "checkOfThemColCell",
    value: function checkOfThemColCell(ofthemTotalCol) {
      var totalCellStatus = "";
      var rows = ofthemTotalCol.rows || this.allRows;
      var _iterator6 = _createForOfIteratorHelper(rows),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var row = _step6.value;
          totalCellStatus = "valid";
          var totalCell = this.getCell(ofthemTotalCol.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator7 = _createForOfIteratorHelper(ofthemTotalCol.subCols),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var ofCol = _step7.value;
              var subCell = this.getCell(ofCol, row);
              var cellValue = subCell.cellValue && parseFloat(TableProcessor.fixCommaSign(subCell.cellValue));
              if (cellValue > totalValue) {
                totalCellStatus = "invalid";
                this.onChangeCellStatus(subCell, "overflow");
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          if (totalCellStatus === "invalid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    // проверка суммы столбцов на равенство значению "общей" ячейки
  }, {
    key: "checkEqColCell",
    value: function checkEqColCell(eqTotalCol) {
      var rows = eqTotalCol.rows || this.allRows;
      var _iterator8 = _createForOfIteratorHelper(rows),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var row = _step8.value;
          var totalCell = this.getCell(eqTotalCol.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getRowSum(row, eqTotalCol.subCols);
          if (checkValue !== totalValue) {
            subCellsStatus = "overflow";
            totalCellStatus = "invalid";
          }
          if (totalCellStatus === "invalid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus === "overflow") {
            var _iterator9 = _createForOfIteratorHelper(eqTotalCol.subCols),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var ofCol = _step9.value;
                var subCell = this.getCell(ofCol, row);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "checkEqRowCell",
    value: function checkEqRowCell(eqTotalRow) {
      var cols = eqTotalRow.cols || this.allCols;
      var _iterator10 = _createForOfIteratorHelper(cols),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var col = _step10.value;
          var totalCell = this.getCell(col, eqTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getColSum(col, eqTotalRow.subRows);
          //иначе проверяем сумму строк на равенство
          if (checkValue !== totalValue) {
            subCellsStatus = "overflow";
            totalCellStatus = "invalid";
          }
          if (totalCellStatus === "invalid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus === "overflow") {
            var _iterator11 = _createForOfIteratorHelper(eqTotalRow.subRows),
              _step11;
            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var ofRow = _step11.value;
                var subCell = this.getCell(col, ofRow);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
    // проверка на равенство хотя бы одного значения значению "общей" ячейки
  }, {
    key: "checkEqAnyColCell",
    value: function checkEqAnyColCell(eqTotalCol) {
      var rows = eqTotalCol.rows || this.allRows;
      var _iterator12 = _createForOfIteratorHelper(rows),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var row = _step12.value;
          var totalCell = this.getCell(eqTotalCol.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "invalid";
          var _iterator13 = _createForOfIteratorHelper(eqTotalCol.subCols),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var ofCol = _step13.value;
              var subCell = this.getCell(ofCol, row);
              if (parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0) === totalValue) {
                totalCellStatus = "valid";
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "checkEqAnyRowCell",
    value: function checkEqAnyRowCell(eqTotalRow) {
      var cols = eqTotalRow.cols || this.allCols;
      var _iterator14 = _createForOfIteratorHelper(cols),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var col = _step14.value;
          var totalCell = this.getCell(col, eqTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "invalid";
          var _iterator15 = _createForOfIteratorHelper(eqTotalRow.subRows),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var ofRow = _step15.value;
              var subCell = this.getCell(col, ofRow);
              if (parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0) === totalValue) {
                totalCellStatus = "valid";
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    // проверка на равенство максимального значения значению "общей" ячейки
  }, {
    key: "checkEqMaxColCell",
    value: function checkEqMaxColCell(eqTotalCol) {
      var rows = eqTotalCol.rows || this.allRows;
      var orders = null;
      var rule = eqTotalCol;
      if (rule.orders) {
        orders = rule.orders;
      }
      var parseCell = function parseCell(cell) {
        var value = parseFloat(TableProcessor.fixCommaSign(cell.cellValue) || 0);
        if (orders) {
          var order = orders[value === null || value === void 0 ? void 0 : value.toString()];
          return order == undefined ? null : order;
        }
        return value;
      };
      var _iterator16 = _createForOfIteratorHelper(rows),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var row = _step16.value;
          var totalCell = this.getCell(eqTotalCol.col, row);
          var totalValue = parseCell(totalCell) || 0;
          var totalCellStatus = "invalid";
          var maxValue = 0;
          var _iterator17 = _createForOfIteratorHelper(eqTotalCol.subCols),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var ofCol = _step17.value;
              var subCell = this.getCell(ofCol, row);
              var cellValue = parseCell(subCell) || 0;
              if (cellValue > maxValue) {
                maxValue = cellValue;
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
          if (maxValue === totalValue) totalCellStatus = "valid";
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  }, {
    key: "checkEqMaxRowCell",
    value: function checkEqMaxRowCell(eqTotalRow) {
      var cols = eqTotalRow.cols || this.allCols;
      var orders = null;
      var rule = eqTotalRow;
      if (rule.orders) {
        orders = rule.orders;
      }
      var parseCell = function parseCell(cell) {
        var value = parseFloat(TableProcessor.fixCommaSign(cell.cellValue) || 0);
        if (orders) {
          var order = orders[value === null || value === void 0 ? void 0 : value.toString()];
          return order == undefined ? null : order;
        }
        return value;
      };
      var _iterator18 = _createForOfIteratorHelper(cols),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var col = _step18.value;
          var totalCell = this.getCell(col, eqTotalRow.row);
          var totalValue = parseCell(totalCell) || 0;
          var totalCellStatus = "invalid";
          var maxValue = 0;
          var _iterator19 = _createForOfIteratorHelper(eqTotalRow.subRows),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var ofRow = _step19.value;
              var subCell = this.getCell(col, ofRow);
              var cellValue = parseCell(subCell) || 0;
              if (cellValue > maxValue) {
                maxValue = cellValue;
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          if (maxValue === totalValue) totalCellStatus = "valid";
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
    // проверка суммы столбцов на нестрогое равенство значению "общей" ячейки
  }, {
    key: "checkIncludeColCell",
    value: function checkIncludeColCell(includeTotalCol) {
      var rows = includeTotalCol.rows || this.allRows;
      var _iterator20 = _createForOfIteratorHelper(rows),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var row = _step20.value;
          var totalCell = this.getCell(includeTotalCol.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getRowSum(row, includeTotalCol.subCols);
          if (checkValue > totalValue) {
            subCellsStatus = "overflow";
            totalCellStatus = "invalid";
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus !== "valid") {
            var _iterator21 = _createForOfIteratorHelper(includeTotalCol.subCols),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var ofCol = _step21.value;
                var subCell = this.getCell(ofCol, row);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }
  }, {
    key: "checkIncludeRowCell",
    value: function checkIncludeRowCell(includeTotalRow) {
      var cols = includeTotalRow.cols || this.allCols;
      var _iterator22 = _createForOfIteratorHelper(cols),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var col = _step22.value;
          var totalCell = this.getCell(col, includeTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getColSum(col, includeTotalRow.subRows);
          //иначе проверяем сумму строк на равенство
          if (checkValue > totalValue) {
            subCellsStatus = "overflow";
            totalCellStatus = "invalid";
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus !== "valid") {
            var _iterator23 = _createForOfIteratorHelper(includeTotalRow.subRows),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var ofRow = _step23.value;
                var subCell = this.getCell(col, ofRow);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }
  }, {
    key: "checkSumIncludeColCell",
    value: function checkSumIncludeColCell(sumIncludeTotalCol) {
      var rows = sumIncludeTotalCol.rows || this.allRows;
      var _iterator24 = _createForOfIteratorHelper(rows),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var row = _step24.value;
          var totalCell = this.getCell(sumIncludeTotalCol.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getRowSum(row, sumIncludeTotalCol.subCols);
          if (checkValue < totalValue) {
            subCellsStatus = "invalid";
            totalCellStatus = "overflow";
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus !== "valid") {
            var _iterator25 = _createForOfIteratorHelper(sumIncludeTotalCol.subCols),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var ofCol = _step25.value;
                var subCell = this.getCell(ofCol, row);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  }, {
    key: "checkSumIncludeRowCell",
    value: function checkSumIncludeRowCell(sumIncludeTotalRow) {
      var cols = sumIncludeTotalRow.cols || this.allCols;
      var _iterator26 = _createForOfIteratorHelper(cols),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var col = _step26.value;
          var totalCell = this.getCell(col, sumIncludeTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getColSum(col, sumIncludeTotalRow.subRows);
          if (checkValue < totalValue) {
            subCellsStatus = "invalid";
            totalCellStatus = "overflow";
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus !== "valid") {
            var _iterator27 = _createForOfIteratorHelper(sumIncludeTotalRow.subRows),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var ofRow = _step27.value;
                var subCell = this.getCell(col, ofRow);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "checkBoolRowCell",
    value: function checkBoolRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator28 = _createForOfIteratorHelper(cols),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var col = _step28.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator29 = _createForOfIteratorHelper(totalRow.subRows),
              _step29;
            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _ofRow = _step29.value;
                var subCellValue = this.getCell(col, _ofRow).cellValue;
                if (!(subCellValue == '0' || subCellValue == '2')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator30 = _createForOfIteratorHelper(totalRow.subRows),
                _step30;
              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var ofRow = _step30.value;
                  var subCell = this.getCell(col, ofRow);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
    }
  }, {
    key: "checkBoolColCell",
    value: function checkBoolColCell(totalCol) {
      var rows = totalCol.rows || this.allRows;
      var _iterator31 = _createForOfIteratorHelper(rows),
        _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var row = _step31.value;
          var totalCell = this.getCell(totalCol.col, row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator32 = _createForOfIteratorHelper(totalCol.subCols),
              _step32;
            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _ofCol = _step32.value;
                var subCellValue = this.getCell(_ofCol, row).cellValue;
                if (!(subCellValue == '0' || subCellValue == '2')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator33 = _createForOfIteratorHelper(totalCol.subCols),
                _step33;
              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var ofCol = _step33.value;
                  var subCell = this.getCell(ofCol, row);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenOneRowCell",
    value: function checkBoolIsOneThenOneRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator34 = _createForOfIteratorHelper(cols),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var col = _step34.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator35 = _createForOfIteratorHelper(totalRow.subRows),
              _step35;
            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _ofRow2 = _step35.value;
                var subCellValue = this.getCell(col, _ofRow2).cellValue;
                if (!(subCellValue == '1')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator36 = _createForOfIteratorHelper(totalRow.subRows),
                _step36;
              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                  var ofRow = _step36.value;
                  var subCell = this.getCell(col, ofRow);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenOneColCell",
    value: function checkBoolIsOneThenOneColCell(totalCol) {
      var rows = totalCol.rows || this.allRows;
      var _iterator37 = _createForOfIteratorHelper(rows),
        _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var row = _step37.value;
          var totalCell = this.getCell(totalCol.col, row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator38 = _createForOfIteratorHelper(totalCol.subCols),
              _step38;
            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _ofCol2 = _step38.value;
                var subCellValue = this.getCell(_ofCol2, row).cellValue;
                if (!(subCellValue == '1')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator39 = _createForOfIteratorHelper(totalCol.subCols),
                _step39;
              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var ofCol = _step39.value;
                  var subCell = this.getCell(ofCol, row);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenAnyRowCell",
    value: function checkBoolIsOneThenAnyRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator40 = _createForOfIteratorHelper(cols),
        _step40;
      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var col = _step40.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "invalid";
          if (totalValue == '1') {
            var _iterator41 = _createForOfIteratorHelper(totalRow.subRows),
              _step41;
            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var ofRow = _step41.value;
                var subCellValue = this.getCell(col, ofRow).cellValue;
                if (!(subCellValue == null || subCellValue == '' || subCellValue == '0' || subCellValue == '2')) {
                  totalCellStatus = "valid";
                  return;
                }
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          }
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenAnyColCell",
    value: function checkBoolIsOneThenAnyColCell(totalCol) {
      var rows = totalCol.rows || this.allRows;
      var _iterator42 = _createForOfIteratorHelper(rows),
        _step42;
      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var row = _step42.value;
          var totalCell = this.getCell(totalCol.col, row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "invalid";
          if (totalValue == '1') {
            var _iterator43 = _createForOfIteratorHelper(totalCol.subCols),
              _step43;
            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var ofCol = _step43.value;
                var subCellValue = this.getCell(ofCol, row).cellValue;
                if (!(subCellValue == '' || subCellValue == '0' || subCellValue == '2')) {
                  totalCellStatus = "valid";
                  return;
                }
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          }
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }
    }
  }, {
    key: "checkRowCell",
    value: function checkRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator44 = _createForOfIteratorHelper(cols),
        _step44;
      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var col = _step44.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator45 = _createForOfIteratorHelper(totalRow.subRows),
            _step45;
          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var ofRow = _step45.value;
              var subCell = this.getCell(col, ofRow);
              var subCellValue = parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0);
              if (subCellValue > totalValue) {
                this.onChangeCellStatus(totalCell, "invalid");
                this.onChangeCellStatus(subCell, "overflow");
              }
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }
    }
  }, {
    key: "checkColCell",
    value: function checkColCell(totalRow) {
      var rows = totalRow.rows || this.allRows;
      var _iterator46 = _createForOfIteratorHelper(rows),
        _step46;
      try {
        for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
          var row = _step46.value;
          var totalCell = this.getCell(totalRow.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator47 = _createForOfIteratorHelper(totalRow.subCols),
            _step47;
          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var ofCol = _step47.value;
              var subCell = this.getCell(ofCol, row);
              var subCellValue = parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0);
              if (subCellValue > totalValue) {
                this.onChangeCellStatus(totalCell, "invalid");
                this.onChangeCellStatus(subCell, "overflow");
              }
            }
          } catch (err) {
            _iterator47.e(err);
          } finally {
            _iterator47.f();
          }
        }
      } catch (err) {
        _iterator46.e(err);
      } finally {
        _iterator46.f();
      }
    }
    //обработчик изменения значения в ячейках при автосуммировании
  }, {
    key: "onChangeCellValue",
    value: function onChangeCellValue(cell) {}
    //обработчик изменения статуса ячейки
  }, {
    key: "onChangeCellStatus",
    value: function onChangeCellStatus(cell, status) {}
    // валидирует данные страницы
  }, {
    key: "valid",
    value: function valid() {
      return true;
    }
    //получение автосуммируемых столбцов в строке
  }, {
    key: "getRowSumCells",
    value: function getRowSumCells(row, colStart, colEnd) {
      var _this6 = this;
      var cols = [];
      if (!this.tableRules || !this.tableRules.sumRows) {
        return cols;
      }
      var sumRow = this.tableRules.sumRows.find(function (sr) {
        return sr.row == row && sr.type == "sum";
      });
      if (sumRow) {
        for (var i = colStart; i <= colEnd; i++) {
          cols.push(i);
        }
      } else {
        if (!this.checkSumCols()) {
          return cols;
        }
        var _loop2 = function _loop2(col) {
          var sumCol = _this6.tableRules.sumCols.find(function (sc) {
            return sc.col == col && sc.type == "sum";
          });
          if (sumCol) {
            if (sumCol.rows) {
              //TODO: костыль
              if (sumCol.rows.includes(row)) {
                cols.push(col);
              }
            } else {
              cols.push(col);
            }
          }
        };
        for (var col = colStart; col <= colEnd; col++) {
          _loop2(col);
        }
      }
      return cols;
    }
    //получение суммы значений в столбце
  }, {
    key: "getColSum",
    value: function getColSum(col, rows) {
      var sum = this.tableData.filter(function (x) {
        return x.cellCol == col;
      }).filter(function (x) {
        return rows.indexOf(x.cellRow) >= 0;
      }).map(function (x) {
        if (typeof x.cellValue === "string") {
          if (x.cellValue.includes(',')) {
            x.cellValue = x.cellValue.replace(',', '.');
          }
        }
        return x;
      }).filter(function (x) {
        return x.cellValue !== "" && parseFloat(x.cellValue) > 0;
      }).map(function (x) {
        return parseFloat(x.cellValue);
      }).reduce(function (memo, num) {
        return memo + num;
      }, 0);
      var res = new _numberUtils.NumberUtils().numberToFixed(sum);
      return res;
    }
    //получение суммы значений в строке
  }, {
    key: "getRowSum",
    value: function getRowSum(row, cols) {
      var sum = this.tableData.filter(function (x) {
        return x.cellRow == row;
      }).filter(function (x) {
        return cols.indexOf(x.cellCol) >= 0;
      }).map(function (x) {
        if (typeof x.cellValue === "string") {
          if (x.cellValue.includes(',')) {
            x.cellValue = x.cellValue.replace(',', '.');
          }
        }
        return x;
      }).filter(function (x) {
        return x.cellValue !== "" && parseFloat(x.cellValue) > 0;
      }).map(function (x) {
        return parseFloat(x.cellValue);
      }).reduce(function (memo, num) {
        return memo + num;
      }, 0);
      var res = new _numberUtils.NumberUtils().numberToFixed(sum);
      return res;
    }
    // поиск ячейки по координатам
  }, {
    key: "getCell",
    value: function getCell(col, row, cellName) {
      // поиск
      var foundCell = this.findCell(col, row, cellName);
      if (foundCell) {
        return foundCell;
      }
      var dummyCell = {
        cellName: cellName,
        cellRow: row,
        cellCol: col
      };
      if (cellName) {
        this.tableData.push(dummyCell);
      }
      return dummyCell;
    }
  }, {
    key: "findCell",
    value: function findCell(col, row, cellName) {
      var foundCell = null;
      // поиск
      if (cellName) {
        foundCell = this.tableData.find(function (cell) {
          return cell.cellName === cellName;
        });
      } else {
        foundCell = this.tableData.find(function (cell) {
          return cell.cellCol === col && cell.cellRow === row;
        });
      }
      return foundCell;
    }
  }], [{
    key: "fixCommaSign",
    value: function fixCommaSign(x) {
      if (typeof x === "string") {
        if (x.includes(',')) {
          return x.replace(',', '.');
        }
      }
      return x;
    }
  }]);
  return TableProcessor;
}();
exports.TableProcessor = TableProcessor;

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberUtils = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NumberUtils = /*#__PURE__*/function () {
  //инициализация
  /*@ngInject*/
  function NumberUtils() {
    _classCallCheck(this, NumberUtils);
    this.delta = 1e-12;
  }
  _createClass(NumberUtils, [{
    key: "numberToFixed",
    value: function numberToFixed(num) {
      var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      // use this method with integer digits between (-10, 10)
      var base = Math.pow(10, Math.round(digits));
      var ret = Math.round((num + this.delta) * base) / base;
      return ret;
    }
  }, {
    key: "isEqual",
    value: function isEqual(num1, num2) {
      return this.compareNumbers(num1, num2) == 0;
    }
  }, {
    key: "isGreaterThan",
    value: function isGreaterThan(num1, num2) {
      return this.compareNumbers(num1, num2) == 1;
    }
  }, {
    key: "isGreaterThanOrEqual",
    value: function isGreaterThanOrEqual(num1, num2) {
      return this.compareNumbers(num1, num2) >= 0;
    }
  }, {
    key: "isLessThan",
    value: function isLessThan(num1, num2) {
      return this.compareNumbers(num1, num2) == -1;
    }
  }, {
    key: "isLessThanOrEqual",
    value: function isLessThanOrEqual(num1, num2) {
      return this.compareNumbers(num1, num2) <= 0;
    }
  }, {
    key: "compareNumbers",
    value: function compareNumbers(num1, num2) {
      var diff = num1 - num2;
      if (Math.abs(diff) < this.delta) {
        return 0;
      }
      return diff > 0 ? 1 : -1;
    }
  }]);
  return NumberUtils;
}();
exports.NumberUtils = NumberUtils;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormListCtrl = void 0;
var _common = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StatFormListCtrl = /*#__PURE__*/function () {
  StatFormListCtrl.$inject = ["language", "$scope", "pageContext", "appContext", "statFormsRepository", "$http", "$appLoader", "$dialogs", "$longWork", "contextService", "changeTracker", "$q", "$location"];
  /*@ngInject*/
  function StatFormListCtrl(language, $scope, pageContext, appContext, statFormsRepository, $http, $appLoader, $dialogs, $longWork, contextService, changeTracker, $q, $location) {
    _classCallCheck(this, StatFormListCtrl);
    this.language = language;
    this.$scope = $scope;
    this.appContext = appContext;
    this.statFormsRepository = statFormsRepository;
    this.$http = $http;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.changeTracker = changeTracker;
    this.$q = $q;
    this.$location = $location;
    pageContext.title = language.Generic.StatReports.kStatReports;
    pageContext.parent = null;
    pageContext.back = null;
    this.data = {
      years: null,
      yearId: parseInt(appContext.yearId),
      formList: null
    };
    this.load();
  }
  _createClass(StatFormListCtrl, [{
    key: "goForm",
    value: function goForm(form) {
      if (this.isAngularImplementation(form)) {
        this.$location.path("/forms/".concat(form.id.toLowerCase(), "/"));
      } else {
        this.openFormNew(form);
      }
    }
  }, {
    key: "isAngularImplementation",
    value: function isAngularImplementation(form) {
      if (this.appContext.globalYearId >= 20 && this.appContext.funcType == 2 && form.id.toUpperCase() === 'OO1') {
        return true;
      }
      if (this.appContext.globalYearId < 19) {
        return false;
      }
      if (this.appContext.funcType == 1) {
        return true;
      }
      if (this.appContext.funcType == 2 && form.id.toUpperCase() === 'OO2') {
        return true;
      }
      if (this.appContext.funcType == 3 && (form.id.toUpperCase() === 'DOP1' || form.id.toUpperCase() === 'DOD1')) {
        return true;
      }
      return false;
    }
  }, {
    key: "getInverseFormName",
    value: function getInverseFormName(formName) {
      if (formName === "DO1") {
        return "1DO";
      }
      if (formName === "DOP1") {
        return "1DOP";
      }
      if (formName === "RIK83") {
        return "83RIK";
      }
      if (formName === "K85") {
        return "85K";
      }
      return null;
    }
  }, {
    key: "getBeginUrl",
    value: function getBeginUrl(formName, revPath) {
      var beginUrl = '/asp/SetupSchool/SchoolForms/' + formName + '/' + revPath + '/Page1.asp';
      // todo: что делать  с МНС
      // if (folderName == "OSH1_MNS") {
      // 	beginUrl = beginUrl.replace(folderName, 'OSH1') + '?MNS=1';
      // }
      return beginUrl;
    }
  }, {
    key: "openFormNew",
    value: function openFormNew(form) {
      var formName = this.getInverseFormName(form.id.toUpperCase()) || form.id.toUpperCase();
      var revPath = form.note;
      var beginUrl = this.getBeginUrl(formName, revPath);
      this.changeTracker.check().then(function () {
        (0, _common.postTo)(beginUrl);
      });
    }
  }, {
    key: "changeYear",
    value: function changeYear() {
      this.$longWork.show();
      this.contextService.changeYear(this.data.yearId).then(function (result) {
        var page = result.page || window.location.pathname;
        (0, _common.postTo)(page);
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      var loadYears = this.$http.get("/webapi/context/years").then(function (response) {
        _this.data.years = (response.data || []).filter(function (year) {
          return year.closed != "Future";
        });
      });
      var loadForms = this.statFormsRepository.getFormList(this.data.yearId).then(function (formList) {
        _this.data.formList = formList;
      });
      this.$q.all([loadForms, loadYears]).then(function () {
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "openFillStatIndicators",
    value: function openFillStatIndicators() {
      (0, _common.postTo)('/angular/school/statreports/fill');
    }
  }]);
  return StatFormListCtrl;
}();
exports.StatFormListCtrl = StatFormListCtrl;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormImportService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StatFormImportService = /*#__PURE__*/function () {
  StatFormImportService.$inject = ["language", "$dialogs", "statFormsRepository", "$uibModal", "$longWork"];
  /*@ngInject*/
  function StatFormImportService(language, $dialogs, statFormsRepository, $uibModal, $longWork) {
    _classCallCheck(this, StatFormImportService);
    this.language = language;
    this.$dialogs = $dialogs;
    this.statFormsRepository = statFormsRepository;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
  }
  _createClass(StatFormImportService, [{
    key: "import",
    value: function _import(formId, yearId) {
      var _this = this;
      var options = {
        url: "/webapi/schools/statforms/".concat(formId, "/years/").concat(yearId, "/validate"),
        fileExts: function fileExts() {
          return ["xls", "xlsx"];
        }
      };
      this.$dialogs.uploadFile(this.language.Generic.Common.kSelectFile, options).then(function (uploadResult) {
        var errors = uploadResult.result;
        if (errors.length) {
          return _this.showErrorDialog(errors);
        }
        return Promise.resolve();
      }).then(function (result) {
        var importPromise = _this.statFormsRepository["import"](formId);
        _this.$longWork.execute(importPromise);
      });
    }
  }, {
    key: "showErrorDialog",
    value: function showErrorDialog(_errors) {
      var settings = {
        templateUrl: "/static/dist/app/school/statforms/import/importError.component.html",
        controller: /*#__PURE__*/function () {
          controller.$inject = ["language", "$uibModalInstance", "errors"];
          /*@ngInject*/
          function controller(language, $uibModalInstance, errors) {
            _classCallCheck(this, controller);
            this.language = language;
            this.$uibModalInstance = $uibModalInstance;
            this.errors = errors;
          }
          _createClass(controller, [{
            key: "continue",
            value: function _continue() {
              this.$uibModalInstance.close();
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.$uibModalInstance.dismiss("cancel");
            }
          }]);
          return controller;
        }(),
        controllerAs: "$ctrl",
        resolve: {
          errors: function errors() {
            return _errors;
          }
        }
      };
      return this.$uibModal.open(settings).result;
    }
  }]);
  return StatFormImportService;
}();
exports.StatFormImportService = StatFormImportService;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommonXhrErrorHandler = /*#__PURE__*/function () {
  function CommonXhrErrorHandler(errorInformer, messageInformer, appContextAccessor, language) {
    _classCallCheck(this, CommonXhrErrorHandler);
    this.errorInformer = errorInformer;
    this.messageInformer = messageInformer;
    this.appContextAccessor = appContextAccessor;
    this.language = language;
    this.errorInformer = errorInformer || $.show.error;
    this.messageInformer = messageInformer || $.show.message;
    this.appContextAccessor = appContextAccessor || function () {
      return window.appContext;
    };
    this.language = language || window.language;
  }
  _createClass(CommonXhrErrorHandler, [{
    key: "getErrorResponseMessage",
    value: function getErrorResponseMessage(response) {
      var _a;
      if (response.status === 401) {
        var authError = response.headers("auth-error");
        if (authError === "SessionExpired") {
          return this.language.Generic.Common.kTimeOutOccured4Ajax;
        } else {
          return this.language.Generic.Common.kErrPageAccess;
        }
      }
      if (response.status === 503) {
        return response.statusText;
      }
      if (response.status === 404 && response.config) {
        var errMessage = response.statusText + " " + response.config.url;
        return errMessage;
      }
      var message = response.data && (response.data.message || response.data.details);
      var details = response.data && response.data.details;
      var stackTrace = response.data && response.data.stackTrace;
      if (response.data && response.data.isInformation) {
        return message;
      }
      var displayMsg = message;
      var environment = (_a = this.appContextAccessor()) === null || _a === void 0 ? void 0 : _a.environment;
      if (environment != "prod" && (details || stackTrace)) {
        var debugPanel = "<div class='debug-panel'>";
        if (details) {
          debugPanel += "<p class='title'>Details:</span><div>" + details + "</div>";
        }
        if (stackTrace) {
          debugPanel += "<p class='title'>StackTrace:</span><div class='stack'>" + stackTrace + "</div>";
        }
        displayMsg += debugPanel + "</div>";
      }
      return displayMsg || this.language.Generic.Common.kUnexpErr;
    }
  }, {
    key: "handleErrorResponse",
    value: function handleErrorResponse(response) {
      var _a;
      $(document).trigger("closeProcessing");
      if (response.status === 401) {
        var authError = response.headers("auth-error");
        if (authError === "SessionExpired") {
          this.messageInformer(this.language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return (0, _common.postTo)({
              path: "/",
              method: "GET"
            });
          });
        } else {
          this.messageInformer(this.language.Generic.Common.kErrPageAccess);
        }
        return Promise.reject(response);
      }
      if (response.status === 503) {
        this.errorInformer(response.statusText);
        return Promise.reject(response);
      }
      if (response.status === 404 && response.config) {
        var errMessage = response.statusText + " " + response.config.url;
        this.errorInformer(errMessage);
        return Promise.reject(response);
      }
      var message = response.data && (response.data.message || response.data.details);
      var details = response.data && response.data.details;
      var stackTrace = response.data && response.data.stackTrace;
      if (response.data && response.data.isInformation) {
        this.messageInformer(message);
        return Promise.reject(response);
      }
      var displayMsg = message;
      var environment = (_a = this.appContextAccessor()) === null || _a === void 0 ? void 0 : _a.environment;
      if (environment != "prod" && (details || stackTrace)) {
        var debugPanel = "<div class='debug-panel'>";
        if (details) {
          debugPanel += "<p class='title'>Details:</span><div>" + details + "</div>";
        }
        if (stackTrace) {
          debugPanel += "<p class='title'>StackTrace:</span><div class='stack'>" + stackTrace + "</div>";
        }
        displayMsg += debugPanel + "</div>";
      }
      this.errorInformer(displayMsg || this.language.Generic.Common.kUnexpErr);
      return Promise.reject(response);
    }
  }]);
  return CommonXhrErrorHandler;
}();
exports.CommonXhrErrorHandler = CommonXhrErrorHandler;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(7);
var postTo = function postTo(path, params, formParams, auth) {
  var _a;
  var parameters;
  var defparams = {
    path: '',
    method: "POST",
    params: void 0,
    formParams: void 0,
    auth: true,
    nocache: true
  };
  if (typeof path === 'string') {
    parameters = defparams;
    if (path) {
      parameters.path = path;
    }
    if (params) {
      parameters.params = params;
    }
    if (formParams) {
      parameters.formParams = formParams;
    }
    if (auth === false) {
      parameters.auth = false;
    }
  } else {
    parameters = $.extend({}, defparams, path);
  }
  var createHiddenField = function createHiddenField(form, key, value) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    return form.appendChild(hiddenField);
  };
  var form = document.createElement("form");
  form.setAttribute("method", parameters.method);
  form.setAttribute("action", parameters.path);
  if (parameters.formParams !== "undefined") {
    for (var key in parameters.formParams) {
      form.setAttribute(key, parameters.formParams[key]);
    }
  }
  var at = typeof appContext != "undefined" && appContext.at || window.strATTok;
  parameters.auth = parameters.auth && at;
  if (parameters.auth) {
    createHiddenField(form, 'at', at);
  }
  var vers = null;
  if (parameters.nocache && typeof window.getVer == "function") {
    vers = (_a = window.getVer()) === null || _a === void 0 ? void 0 : _a.toString();
    createHiddenField(form, 'VER', vers);
  }
  if (parameters.formParams && parameters.formParams.download) {
    var fileDownloadCheckTimer = null;
    var finishDownload = function finishDownload() {
      window.clearInterval(fileDownloadCheckTimer);
      $.cookie('fileDownloadToken', null);
      return $(document).trigger('closeProcessing');
    };
    var checkFunc = function checkFunc() {
      var cookieVal = $.cookie('fileDownloadToken');
      if (cookieVal !== vers) {
        return;
      }
      return finishDownload();
    };
    fileDownloadCheckTimer = window.setInterval(checkFunc, 1000);
    $(document).trigger('showProcessing');
  }
  _urlHelper.UrlHelperInstance.iterateParams(parameters.params, function (name, value) {
    if (parameters.auth && name === 'AT') {
      return;
    }
    createHiddenField(form, name, value);
  });
  document.body.appendChild(form);
  window.isHaveToLogout = false;
  return form.submit();
};
exports.postTo = postTo;
var saveFormPosition = function saveFormPosition(key, path) {
  var arrPanels = [];
  $.each($('[data-toggle="collapse"]'), function (index, value) {
    var $value = $(value);
    var panelId = $value.attr('data-target');
    var isPanelExpanded = $value.attr('aria-expanded');
    arrPanels[index] = {
      "id": panelId,
      "isExpanded": isPanelExpanded
    };
  });
  var position = $(window).scrollTop();
  var data = {
    "position": position,
    "panels": arrPanels
  };
  var date = new Date();
  var minutes = 30;
  date.setTime(date.getTime() + minutes * 60 * 1000);
  var params = {
    expires: date
  };
  if (path) {
    params = $.extend(params, {
      path: path
    });
  }
  $.cookie(key, JSON.stringify(data), params);
};
exports.saveFormPosition = saveFormPosition;
var restoreFormPosition = function restoreFormPosition(key) {
  return new Promise(function (resolve) {
    if (!$.cookie(key)) {
      resolve();
      return;
    }
    var param = JSON.parse($.cookie(key));
    var panelsStatus = param["panels"];
    panelsStatus.forEach(function (panelStatus) {
      var isExpanded = $("[data-target=\"".concat(panelStatus.id, "\"]")).attr("aria-expanded");
      if (panelStatus.isExpanded != isExpanded) {
        $(panelStatus.id).collapse("toggle");
      }
    });
    setTimeout(function () {
      resolve();
      $("html, body").animate({
        scrollTop: param["position"]
      }, 200);
    }, 1000);
    document.cookie = "".concat(key, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
  });
};
exports.restoreFormPosition = restoreFormPosition;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlHelperInstance = exports.UrlHelper = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var url = /*#__PURE__*/function () {
  function url(address) {
    _classCallCheck(this, url);
    this._url = address;
    this._params = "";
  }
  _createClass(url, [{
    key: "url",
    value: function url() {
      return this._url;
    }
  }, {
    key: "params",
    value: function params() {
      return this._params;
    }
  }, {
    key: "addParam",
    value: function addParam(paramName, paramValue) {
      if (this._params.length !== 0) {
        this._params += "&";
      }
      this._params += encodeURIComponent(paramName) + "=" + encodeURIComponent(paramValue);
    }
  }, {
    key: "getFullUrl",
    value: function getFullUrl() {
      if (this._params.length > 0) {
        if (this._url.indexOf('?') > 0) return this._url + '&' + this._params;else return this._url + '?' + this._params;
      } else return this._url;
    }
  }]);
  return url;
}();
var UrlHelper = /*#__PURE__*/function () {
  function UrlHelper() {
    _classCallCheck(this, UrlHelper);
  }
  _createClass(UrlHelper, [{
    key: "iterateParams",
    value: function iterateParams(params, func) {
      if (typeof params === 'string') {
        var arrParamValues = params.split('&');
        var _iterator = _createForOfIteratorHelper(arrParamValues),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var keyvalue = _step.value;
            var split = keyvalue.split('=');
            func(split[0], split[1]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return;
      }
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var item = params[key];
          if (Array.isArray(item)) {
            var _iterator2 = _createForOfIteratorHelper(item),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subItem = _step2.value;
                func(key, subItem);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else if (item && _typeof(item) === "object" && typeof item.name !== "undefined") {
            func(item.name, item.value);
          } else {
            func(key, item);
          }
        }
      }
    }
  }, {
    key: "makeUrl",
    value: function makeUrl(in_url, params, withoutObligatory) {
      var retUrl = new url(in_url);
      if (!withoutObligatory) {
        var vers = this.getVer();
        retUrl.addParam('ver', vers);
        if (typeof window.appContext !== "undefined" && window.appContext.at) {
          retUrl.addParam('at', window.appContext.at);
        } else if (typeof window.strATTok !== "undefined") {
          retUrl.addParam('at', window.strATTok);
        }
      }
      this.iterateParams(params, function (name, value) {
        return retUrl.addParam(name, value);
      });
      return retUrl.getFullUrl();
    }
  }, {
    key: "getParameterByName",
    value: function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      var value = results[2].replace(/\+/g, " ");
      return decodeURIComponent(value);
    }
  }, {
    key: "getParameters",
    value: function getParameters(url) {
      var startQuery = url.indexOf("?");
      if (startQuery == -1) {
        return {};
      }
      var query = url.substring(startQuery + 1);
      return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce(function (params, param) {
        var _param$split = param.split('='),
          _param$split2 = _slicedToArray(_param$split, 2),
          key = _param$split2[0],
          value = _param$split2[1];
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, {}) : {};
    }
  }, {
    key: "getVer",
    value: function getVer() {
      var d;
      d = new Date();
      return d.getTime();
    }
  }]);
  return UrlHelper;
}();
exports.UrlHelper = UrlHelper;
var UrlHelperInstance = new UrlHelper();
exports.UrlHelperInstance = UrlHelperInstance;

/***/ })

/******/ });