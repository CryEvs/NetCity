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
/******/ 	return __webpack_require__(__webpack_require__.s = 359);
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusOrganization = exports.RoleGroup = exports.Gender = exports.FuncType = exports.AppConstants = void 0;
var FuncType;
exports.FuncType = FuncType;
(function (FuncType) {
  FuncType[FuncType["educMgr"] = 0] = "educMgr";
  FuncType[FuncType["preSchool"] = 1] = "preSchool";
  FuncType[FuncType["school"] = 2] = "school";
  FuncType[FuncType["addSchool"] = 3] = "addSchool";
  FuncType[FuncType["profSchool"] = 4] = "profSchool";
  FuncType[FuncType["orphanage"] = 5] = "orphanage";
  FuncType[FuncType["university"] = 6] = "university";
})(FuncType || (exports.FuncType = FuncType = {}));
var StatusOrganization;
exports.StatusOrganization = StatusOrganization;
(function (StatusOrganization) {
  StatusOrganization[StatusOrganization["functions"] = 1] = "functions";
  StatusOrganization[StatusOrganization["overhaul"] = 2] = "overhaul";
  StatusOrganization[StatusOrganization["reconstruction"] = 3] = "reconstruction";
  StatusOrganization[StatusOrganization["suspendedActivities"] = 4] = "suspendedActivities";
  StatusOrganization[StatusOrganization["noContingent"] = 5] = "noContingent";
  StatusOrganization[StatusOrganization["expectsOpening"] = 6] = "expectsOpening";
  StatusOrganization[StatusOrganization["liquidated"] = 7] = "liquidated";
  StatusOrganization[StatusOrganization["closed"] = 8] = "closed";
  StatusOrganization[StatusOrganization["attachedToAnotherOrganization"] = 9] = "attachedToAnotherOrganization";
})(StatusOrganization || (exports.StatusOrganization = StatusOrganization = {}));
var Gender;
exports.Gender = Gender;
(function (Gender) {
  Gender["Male"] = "Male";
  Gender["Female"] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var RoleGroup;
exports.RoleGroup = RoleGroup;
(function (RoleGroup) {
  RoleGroup["Staffs"] = "Staffs";
  RoleGroup["Students"] = "Students";
  RoleGroup["Parents"] = "Parents";
  RoleGroup["EducManagers"] = "EducManagers";
})(RoleGroup || (exports.RoleGroup = RoleGroup = {}));
var AppConstants;
exports.AppConstants = AppConstants;
(function (AppConstants) {
  AppConstants["adminName"] = "ADMIN";
})(AppConstants || (exports.AppConstants = AppConstants = {}));

/***/ }),

/***/ 123:
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MultiSelectable = /*#__PURE__*/function () {
  function MultiSelectable() {
    _classCallCheck(this, MultiSelectable);
    this.items = [];
  }
  _createClass(MultiSelectable, [{
    key: "selected",
    get: function get() {
      return this.items;
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      var currIdx = this.items.indexOf(val);
      return currIdx !== -1;
    }
  }, {
    key: "select",
    value: function select(val) {
      var currIdx = this.items.indexOf(val);
      if (currIdx !== -1) {
        this.items.splice(currIdx, 1);
      } else {
        this.items.push(val);
      }
    }
  }, {
    key: "dropSelect",
    value: function dropSelect() {
      this.items = [];
    }
  }, {
    key: "toggleSelectAll",
    value: function toggleSelectAll(possible) {
      var _this = this;
      if (this.items.length == possible.length) {
        this.dropSelect();
      } else {
        this.dropSelect();
        possible.forEach(function (s) {
          return _this.select(s);
        });
      }
    }
  }]);
  return MultiSelectable;
}();
exports["default"] = MultiSelectable;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(4);
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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(123);
var _floatInput = __webpack_require__(96);
var _parentpay = __webpack_require__(361);
var _doupay = __webpack_require__(362);
var _editpaynorms = __webpack_require__(363);
var _payaccess = __webpack_require__(364);
var _paynormsCommon = __webpack_require__(365);
var _paynorms = __webpack_require__(366);
var _schoolcodes = __webpack_require__(367);
var _module = angular.module("irtech.netcity.em.doupay", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
_module.component(_payaccess.PayAccessComponent.selector, _payaccess.PayAccessComponent).component(_paynorms.PayNormsComponent.selector, _paynorms.PayNormsComponent).component(_editpaynorms.EditPayNormsComponent.selector, _editpaynorms.EditPayNormsComponent).service("douPayRepository", _doupay.DouPayRepository).service("parentPayRepository", _parentpay.ParentPayRepository).directive("onlyDigits", _common.OnlyDigitsDirective).directive("floatInput", _floatInput.FloatInputDirective).directive(_editpaynorms.abbrevUnique.selector, _editpaynorms.abbrevUnique).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/schoolcodes/", _schoolcodes.SchoolCodesComponent).when("/paynorms/", _paynormsCommon.PayNormsCommonComponent).when("/paynorms/:decreeId", _editpaynorms.EditPayNormsComponent).otherwise(_schoolcodes.SchoolCodesComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentPayRepository = void 0;
var _baseRepository = __webpack_require__(41);
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
var ParentPayRepository = /*#__PURE__*/function (_BaseRepository) {
  ParentPayRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(ParentPayRepository, _BaseRepository);
  var _super = _createSuper(ParentPayRepository);
  /*@ngInject*/
  function ParentPayRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, ParentPayRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    _this.filterpanelUrl = "/webapi/parentpay/filter";
    return _this;
  }
  _createClass(ParentPayRepository, [{
    key: "getMainFilterPanelUrl",
    value: function getMainFilterPanelUrl() {
      var withMonths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var url = "".concat(this.filterpanelUrl, "?withMonths=").concat(withMonths);
      return url;
    }
  }, {
    key: "getStudentLinks",
    value: function getStudentLinks(paymentIds) {
      return this.$http.get("/webapi/school/parentpay/payrecords/getStudentLinks", {
        params: {
          paymentId: paymentIds
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setStudentLink",
    value: function setStudentLink(studentId, paymentIds) {
      return this.$http.post("/webapi/school/parentpay/payrecords/students", paymentIds, {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "clearStudentLink",
    value: function clearStudentLink(paymentId) {
      return this.$http["delete"]("/webapi/school/parentpay/payrecords/students", {
        params: {
          paymentId: paymentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getParamValue",
    value: function getParamValue(userId, paramId) {
      return this.$http.get("/webapi/userinfo/parameter/value", {
        params: {
          userId: userId,
          paramId: paramId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getMonthParentPay",
    value: function getMonthParentPay(classId, year, month) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.get("/webapi/parentpay/", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveMonthParentPay",
    value: function saveMonthParentPay(classId, year, month, data) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.post("/webapi/parentpay/", data, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecree",
    value: function getPayNormDecree(year, month) {
      var params = {
        year: year,
        month: month,
        schoolId: this.appContext.schoolId
      };
      return this.$http.get("/webapi/parentpay/paynormdecree", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAccessMonth",
    value: function getAccessMonth(emId) {
      var params = {
        emId: emId
      };
      return this.$http.get("/webapi/parentpay/accessmonth", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentParentPayInfo",
    value: function getStudentParentPayInfo(classId, year, month) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.get("/webapi/parentpay/students", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getYearClassStudents",
    value: function getYearClassStudents(classId) {
      var params = {
        classId: classId
      };
      return this.$http.get("/webapi/parentpay/year-class-students", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getInitDebts",
    value: function getInitDebts(studentIds) {
      return this.$http.post("/webapi/parentpay/debts", {
        studentId: studentIds
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getClassIdsIdForClassChief",
    value: function getClassIdsIdForClassChief(userId) {
      return this.$http.get("/webapi/parentpay/classIds", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPrevRepresents",
    value: function getPrevRepresents(studentIds, month) {
      var data = {
        studentId: studentIds,
        month: month
      };
      if (studentIds.length < 10) {
        return this.$http.get("/webapi/parentpay/prevrepresents", {
          params: data
        }).then(this.handleResponse)["catch"](this.handleError);
      }
      return this.$http.post("/webapi/parentpay/prevrepresents", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return ParentPayRepository;
}(_baseRepository.BaseRepository);
exports.ParentPayRepository = ParentPayRepository;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DouPayRepository = void 0;
var _baseRepository = __webpack_require__(41);
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
var DouPayRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(DouPayRepository, _BaseRepository);
  var _super = _createSuper(DouPayRepository);
  function DouPayRepository() {
    _classCallCheck(this, DouPayRepository);
    return _super.apply(this, arguments);
  }
  _createClass(DouPayRepository, [{
    key: "getEmSchools",
    value: function getEmSchools(funcType, emId, founderId, expand) {
      return this.$http.get("/webapi/em/schools", {
        params: {
          funcType: funcType,
          emId: emId,
          expand: expand,
          founderId: founderId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveSchoolCode",
    value: function saveSchoolCode(schoolId, schoolCode) {
      return this.$http.post("/webapi/em/schools/code", null, {
        params: {
          schoolId: schoolId,
          schoolCode: schoolCode
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecrees",
    value: function getPayNormDecrees(emId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees", {
        params: {
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecreeMinMaxYears",
    value: function getPayNormDecreeMinMaxYears(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId, "/years")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecree",
    value: function getPayNormDecree(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deletePayNormDecree",
    value: function deletePayNormDecree(decreeId) {
      return this.$http["delete"]("/webapi/parentpay/paynormdecrees/".concat(decreeId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deletePayNorms",
    value: function deletePayNorms(ids) {
      return this.$http["delete"]("/webapi/parentpay/paynorms", {
        params: {
          ids: ids
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "savePayNormDecree",
    value: function savePayNormDecree(payNormDecree) {
      return this.$http.post("/webapi/parentpay/paynormdecrees", payNormDecree).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNorms",
    value: function getPayNorms(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId, "/paynorms")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveAccessMonth",
    value: function saveAccessMonth(emId, month) {
      return this.$http.post("/webapi/parentpay/accessmonth", null, {
        params: {
          emId: emId,
          month: month
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return DouPayRepository;
}(_baseRepository.BaseRepository);
exports.DouPayRepository = DouPayRepository;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abbrevUnique = exports.EditPayNormsController = exports.EditPayNormsComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(44));
var _multiSelectable = _interopRequireDefault(__webpack_require__(28));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditPayNormsController = /*#__PURE__*/function () {
  EditPayNormsController.$inject = ["language", "appContext", "changeTracker", "$q", "douPayRepository", "dateUtils", "$dialogs", "$alerts", "$longWork", "pageContext", "$routeParams", "$appLoader", "$location"];
  /*@ngInject*/
  function EditPayNormsController(language, appContext, changeTracker, $q, douPayRepository, dateUtils, $dialogs, $alerts, $longWork, pageContext, $routeParams, $appLoader, $location) {
    var _this = this;
    _classCallCheck(this, EditPayNormsController);
    this.language = language;
    this.appContext = appContext;
    this.changeTracker = changeTracker;
    this.$q = $q;
    this.douPayRepository = douPayRepository;
    this.dateUtils = dateUtils;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.selected = new _multiSelectable["default"]();
    this.decreeId = 0;
    this.readonly = !appContext.hasRights([Rights.arEMDouPayNormEdit]);
    this.decimalInputSettings = {
      maxIntegerLength: 3,
      maxDecimalLength: 2
    };
    pageContext.title = language.Generic.EM.kTitleEditPayNorms;
    pageContext.parent = {
      title: language.Generic.EM.kTitlePayNorms,
      href: "paynorms"
    };
    pageContext.back = {
      history: true,
      href: "paynorms"
    };
    this.monthList = [{
      id: 1,
      name: this.language.Generic.Common.kJanuary
    }, {
      id: 2,
      name: this.language.Generic.Common.kFebruary
    }, {
      id: 3,
      name: this.language.Generic.Common.kMarch
    }, {
      id: 4,
      name: this.language.Generic.Common.kApril
    }, {
      id: 5,
      name: this.language.Generic.Common.kMay
    }, {
      id: 6,
      name: this.language.Generic.Common.kJune
    }, {
      id: 7,
      name: this.language.Generic.Common.kJuly
    }, {
      id: 8,
      name: this.language.Generic.Common.kAugust
    }, {
      id: 9,
      name: this.language.Generic.Common.kSeptember
    }, {
      id: 10,
      name: this.language.Generic.Common.kOctober
    }, {
      id: 11,
      name: this.language.Generic.Common.kNovember
    }, {
      id: 12,
      name: this.language.Generic.Common.kDecember
    }];
    var decreeIdParam = $routeParams.decreeId;
    if (decreeIdParam === "new") {
      this.payNormDecree = {
        educManagement: null,
        payNorms: null,
        startDate: new Date(),
        decree: {
          id: 0,
          name: ""
        },
        used: false
      };
      this.payNormList = [];
      this.selectedMonthId = new Date().getMonth() + 1;
      this.selectedYear = new Date().getFullYear();
      this.$longWork.execute(this.defineYearList().then(function () {
        _this.ready = true;
        _this.$appLoader.hide();
      }));
    } else {
      this.decreeId = Number(decreeIdParam);
      this.$longWork.execute(this.load());
    }
  }
  _createClass(EditPayNormsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.ready = false;
      this.selected.dropSelect();
      return this.douPayRepository.getPayNormDecree(this.decreeId).then(function (data) {
        if (data == null) {
          _this2.payNormList = []; // ???
        }

        data.startDate = new Date(data.startDate);
        _this2.payNormDecree = data;
        _this2.selectedMonthId = _this2.payNormDecree.startDate.getMonth() + 1;
        _this2.selectedYear = _this2.payNormDecree.startDate.getFullYear();
      }).then(function () {
        var promises = [];
        promises.push(_this2.loadPayNorms());
        promises.push(_this2.defineYearList());
        return _this2.$q.all(promises).then(function () {
          _this2.ready = true;
          _this2.$appLoader.hide();
        });
      });
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(item) {
      return this.selected.select(item);
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.normForm.$valid || !this.normDecreeForm.$valid) return this.$alerts.error("Не все обязательные поля заполнены");
      if (this.changeTracker.isDataChanged()) {
        this.payNormDecree.startDate = this.dateUtils.asUTC(new Date(this.selectedYear, this.selectedMonthId - 1, 1));
        this.payNormDecree.payNorms = this.payNormList;
        this.payNormDecree.educManagement = {
          id: this.appContext.emId
        };
        this.$longWork.execute(this.douPayRepository.savePayNormDecree(this.payNormDecree).then(function (decreeId) {
          _this3.decreeId = decreeId;
          _this3.$longWork.execute(_this3.load());
        }).then(function () {
          _this3.changeTracker.clearDataChanges();
          _this3.$alerts.success("Таблица нормативов успешно сохранена");
        }));
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "defineYearList",
    value: function defineYearList() {
      var _this4 = this;
      return this.douPayRepository.getPayNormDecreeMinMaxYears(this.decreeId).then(function (years) {
        _this4.yearList = [];
        for (var i = years.item1; i <= years.item2; i++) {
          _this4.yearList.unshift({
            id: i,
            name: i.toString()
          });
        }
      });
    }
  }, {
    key: "loadPayNorms",
    value: function loadPayNorms() {
      var _this5 = this;
      return this.douPayRepository.getPayNorms(this.payNormDecree.decree.id).then(function (data) {
        return _this5.payNormList = data;
      });
    }
  }, {
    key: "addRow",
    value: function addRow() {
      this.changeTracker.dataWasChanged();
      var item = {
        id: 0,
        abbrev: "",
        avgValue: 0,
        normValue: 0,
        comment: "",
        noAttendance: false,
        used: false
      };
      this.payNormList.push(item);
    }
  }, {
    key: "deleteSelectedNorms",
    value: function deleteSelectedNorms() {
      var _this6 = this;
      if (this.selected.items.length == 0) {
        return this.$dialogs.message(this.language.Generic.Common.kErrMsgNoChecks);
      }
      this.$dialogs.confirm(this.language.Generic.EM.kConfirmOnDeleteSelectedNorms).then(function () {
        var ids = _this6.selected.items.filter(function (x) {
          return x.id > 0;
        }).map(function (x) {
          return x.id;
        });
        var promise = ids.length > 0 ? _this6.$longWork.execute(_this6.douPayRepository.deletePayNorms(ids)) : new Promise(function (resolve) {
          return resolve();
        });
        promise.then(function () {
          _this6.selected.dropSelect();
          _this6.$longWork.execute(_this6.load());
        }).then(function () {
          _this6.changeTracker.clearDataChanges();
          _this6.$alerts.success(_this6.language.Generic.EM.kPayNormsWasDelete);
        });
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this7 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$longWork.execute(this.load().then(function () {
          _this7.changeTracker.clearDataChanges();
          _this7.$alerts.info(_this7.language.Generic.Common.kResetChanges);
        }));
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "deleteDecree",
    value: function deleteDecree() {
      var _this8 = this;
      this.$dialogs.confirm(this.language.Generic.EM.kConfirmOnDeleteNormsInfo).then(function () {
        if (_this8.payNormDecree.decree.id == 0) {
          _this8.$location.path("/paynorms/");
        } else {
          _this8.$longWork.execute(_this8.douPayRepository.deletePayNormDecree(_this8.payNormDecree.decree.id).then(function () {
            return _this8.$location.path("/paynorms/");
          }));
        }
      }).then(function () {
        _this8.$alerts.success(_this8.language.Generic.EM.kPayNormTableWasDelete);
      });
    }
  }]);
  return EditPayNormsController;
}();
exports.EditPayNormsController = EditPayNormsController;
var EditPayNormsComponent = {
  templateUrl: "/static/dist/app/em/doupay/paynorms/editpaynorms.component.html",
  controller: EditPayNormsController,
  controllerAs: "$ctrl",
  selector: "editPayNorms"
};
/*@ngInject*/
exports.EditPayNormsComponent = EditPayNormsComponent;
var abbrevUnique = function abbrevUnique($timeout) {
  return {
    require: 'ngModel',
    scope: {
      norm: "=norm"
    },
    link: function link(scope, element, attr, ngModel) {
      var ctrl = scope.$parent.$parent.$ctrl;
      ngModel.$validators["unique"] = function (abbrev) {
        return ctrl.payNormList.filter(function (x) {
          return x != scope.norm;
        }).findIndex(function (x) {
          return x.abbrev && x.abbrev.toLowerCase() == abbrev.toLowerCase();
        }) == -1;
      };
    }
  };
};
abbrevUnique.$inject = ["$timeout"];
exports.abbrevUnique = abbrevUnique;
abbrevUnique.selector = "abbrevUnique";

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayAccessController = exports.PayAccessComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PayAccessController = /*#__PURE__*/function () {
  PayAccessController.$inject = ["language", "appContext", "changeTracker", "$q", "$appLoader", "parentPayRepository", "$alerts", "douPayRepository", "$longWork"];
  /*@ngInject*/
  function PayAccessController(language, appContext, changeTracker, $q, $appLoader, parentPayRepository, $alerts, douPayRepository, $longWork) {
    var _this = this;
    _classCallCheck(this, PayAccessController);
    this.language = language;
    this.appContext = appContext;
    this.changeTracker = changeTracker;
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.parentPayRepository = parentPayRepository;
    this.$alerts = $alerts;
    this.douPayRepository = douPayRepository;
    this.$longWork = $longWork;
    this.payAccessValues = [{
      id: -1,
      name: this.language.Generic.EM.kFullAccess
    }, {
      id: 0,
      name: this.language.Generic.EM.kFullDenied
    }, {
      id: 1,
      name: this.language.Generic.Common.kJanuary
    }, {
      id: 2,
      name: this.language.Generic.Common.kFebruary
    }, {
      id: 3,
      name: this.language.Generic.Common.kMarch
    }, {
      id: 4,
      name: this.language.Generic.Common.kApril
    }, {
      id: 5,
      name: this.language.Generic.Common.kMay
    }, {
      id: 6,
      name: this.language.Generic.Common.kJune
    }, {
      id: 7,
      name: this.language.Generic.Common.kJuly
    }, {
      id: 8,
      name: this.language.Generic.Common.kAugust
    }, {
      id: 9,
      name: this.language.Generic.Common.kSeptember
    }, {
      id: 10,
      name: this.language.Generic.Common.kOctober
    }, {
      id: 11,
      name: this.language.Generic.Common.kNovember
    }, {
      id: 12,
      name: this.language.Generic.Common.kDecember
    }];
    this.$longWork.execute(this.load().then(function () {
      _this.ready = true;
      _this.$appLoader.hide();
    }));
  }
  _createClass(PayAccessController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      return this.parentPayRepository.getAccessMonth(this.appContext.emId).then(function (id) {
        return _this2.payAccessId = id;
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (this.changeTracker.isDataChanged()) {
        return this.$longWork.execute(this.douPayRepository.saveAccessMonth(this.appContext.emId, this.payAccessId).then(function () {
          _this3.$alerts.success(_this3.language.Generic.EM.kSaveParentPayAccessWasSaved);
        }));
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$longWork.execute(this.load()).then(function () {
          _this4.$alerts.info(_this4.language.Generic.Common.kResetChanges);
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }]);
  return PayAccessController;
}();
exports.PayAccessController = PayAccessController;
var PayAccessComponent = {
  controller: PayAccessController,
  controllerAs: "$ctrl",
  selector: "payAccess",
  template: "\n\t\t<div ng-form name=\"$ctrl.form\" ng-if=\"$ctrl.ready\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"buttons-panel\">\n\t\t\t\t\t<button title=\"{{$ctrl.language.Generic.Common.kSave}}\" type=\"button\" class=\"btn btn-primary\" ng-click=\"$ctrl.save()\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-floppy-save\"></span>\n\t\t\t\t\t\t<span>{{$ctrl.language.Generic.Buttons.kSave}}</span>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button title=\"{{$ctrl.language.Generic.Buttons.kReset}}\" type=\"button\" class=\"btn btn-info\" ng-click=\"$ctrl.reset()\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-repeat\"></span>\n\t\t\t\t\t\t<span>{{$ctrl.language.Generic.Buttons.kReset}}</span>\n\t\t\t\t\t</button>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label col-md-2 col-lg-2\">{{$ctrl.language.Generic.EM.kAllowEdit}}</label>\n\t\t\t\t<div class=\"col-md-10 col-lg-10\">\n\t\t\t\t\t<select track-changes class=\"form-control\" name=\"recoveryQuestion\" ng-model=\"$ctrl.payAccessId\" ng-options=\"item.id as item.name for item in $ctrl.payAccessValues\"></select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};
exports.PayAccessComponent = PayAccessComponent;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayNormsCommonComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PayNormsCommonController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", function PayNormsCommonController(pageContext, language) {
  _classCallCheck(this, PayNormsCommonController);
  this.language = language;
  pageContext.title = language.Generic.EM.kTitlePayNorms;
  pageContext.back = null;
  pageContext.parent = null;
}]);
var PayNormsCommonComponent = {
  controller: PayNormsCommonController,
  controllerAs: "$ctrl",
  selector: "payNormsCommon",
  template: "\n\t\t<form class=\"form-horizontal form-edit form-xs ns-cloak\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t\t<ns-panel panel-id=\"commonInfo\" class=\"info\" title=\"{{$ctrl.language.Generic.EM.kParentPayAccess}}\" expanded=\"true\">\n\t\t\t\t\t\t<pay-access></pay-access>\n\t\t\t\t\t</ns-panel>\n\t\t\t\t\t<ns-panel panel-id=\"commonInfo\" class=\"info\" title=\"{{$ctrl.language.Generic.EM.kTitlePayNorms}}\" expanded=\"true\">\n\t\t\t\t\t\t<pay-norms></pay-norms>\n\t\t\t\t\t</ns-panel>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t"
};
exports.PayNormsCommonComponent = PayNormsCommonComponent;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayNormsController = exports.PayNormsComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(44));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PayNormsController = /*#__PURE__*/function () {
  PayNormsController.$inject = ["language", "appContext", "douPayRepository", "dateUtils", "$longWork", "$location"];
  /*@ngInject*/
  function PayNormsController(language, appContext, douPayRepository, dateUtils, $longWork, $location) {
    _classCallCheck(this, PayNormsController);
    this.language = language;
    this.appContext = appContext;
    this.douPayRepository = douPayRepository;
    this.dateUtils = dateUtils;
    this.$longWork = $longWork;
    this.$location = $location;
    this.readonly = !appContext.hasRights([Rights.arEMDouPayNormEdit]);
    this.$longWork.execute(this.load());
  }
  _createClass(PayNormsController, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.ready = false;
      return this.douPayRepository.getPayNormDecrees(this.appContext.emId).then(function (data) {
        if (data == null || data.length == 0) {
          _this.payNormDecreeList = [];
          _this.payNormList = [];
          _this.lastPayNormDecreeId = 0;
          _this.ready = true;
        } else {
          data.forEach(function (x) {
            return x.startDate = new Date(x.startDate);
          });
          _this.payNormDecreeList = data;
          _this.selectedPayNormDecree = _this.payNormDecreeList[0];
          _this.lastPayNormDecreeId = _this.payNormDecreeList[0].decree.id;
          _this.isLastPayNormDecree = true;
          return _this.loadPayNorms().then(function () {
            return _this.ready = true;
          });
        }
      });
    }
  }, {
    key: "loadPayNorms",
    value: function loadPayNorms() {
      var _this2 = this;
      return this.$longWork.execute(this.douPayRepository.getPayNorms(this.selectedPayNormDecree.decree.id).then(function (data) {
        return _this2.payNormList = data;
      }));
    }
  }, {
    key: "add",
    value: function add() {
      this.$location.path("/paynorms/new");
    }
  }, {
    key: "edit",
    value: function edit() {
      this.$location.path("/paynorms/".concat(this.selectedPayNormDecree.decree.id));
    }
  }]);
  return PayNormsController;
}();
exports.PayNormsController = PayNormsController;
var PayNormsComponent = {
  templateUrl: "/static/dist/app/em/doupay/paynorms/paynorms.component.html",
  controller: PayNormsController,
  controllerAs: "$ctrl",
  selector: "payNorms",
  bindings: {
    "mySettingsCtrl": "<ctrl"
  }
};
exports.PayNormsComponent = PayNormsComponent;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolCodesComponent = void 0;
var _common = __webpack_require__(105);
var _uiHelper = __webpack_require__(368);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SchoolCodesController = /*#__PURE__*/function () {
  SchoolCodesController.$inject = ["$scope", "pageContext", "$appLoader", "$q", "$timeout", "douPayRepository", "language"];
  /*@ngInject*/
  function SchoolCodesController($scope, pageContext, $appLoader, $q, $timeout, douPayRepository, language) {
    var _this = this;
    _classCallCheck(this, SchoolCodesController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.$timeout = $timeout;
    this.douPayRepository = douPayRepository;
    this.language = language;
    pageContext.back = {
      history: true
    };
    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('funcType')) {
      this.funcType = searchParams.get('funcType');
    } else {
      this.funcType = _common.FuncType.preSchool;
    }
    pageContext.title = this.funcType == _common.FuncType.preSchool ? this.language.Generic.EM.kPreSchoolsCodes : this.language.Generic.EM.kEOsCodes;
    this.uiHelper = new _uiHelper.DouPayUIHelper();
    this.uiHelper.init(function () {
      return _this.toggle();
    });
    this.load().then(function () {
      _this.ready = true;
      _this.$appLoader.hide();
    });
  }
  _createClass(SchoolCodesController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var getEmSchools = this.douPayRepository.getEmSchools(this.funcType, null, null, true).then(function (emSchools) {
        _this2.emSchools = emSchools;
      });
      return this.$q.when(getEmSchools);
    }
  }, {
    key: "save",
    value: function save(emSchool) {
      return this.douPayRepository.saveSchoolCode(emSchool.id, emSchool.schoolCode).then(function (savedSchoolCode) {
        emSchool.schoolCode = savedSchoolCode;
      });
    }
  }, {
    key: "toggle",
    value: function toggle(emSchool) {
      var _this3 = this;
      // сохранение
      var savedEmSchool = this.emSchools.find(function (es) {
        return es.editCode;
      });
      var saveCode = savedEmSchool && savedEmSchool.id != (emSchool === null || emSchool === void 0 ? void 0 : emSchool.id) && savedEmSchool.schoolCode !== savedEmSchool.editedSchoolCode;
      if (saveCode) {
        var oldCode = savedEmSchool.schoolCode;
        savedEmSchool.schoolCode = savedEmSchool.editedSchoolCode;
        this.save(savedEmSchool)["catch"](function () {
          savedEmSchool.schoolCode = oldCode;
        });
      }
      // редактирование
      if (emSchool === null || emSchool === void 0 ? void 0 : emSchool.editCode) {
        // если уже редактируется, то выйти
        return;
      }
      if (emSchool) {
        emSchool.editCode = true; // режим редактирования кода ОО
        emSchool.editedSchoolCode = emSchool.schoolCode;
        // todo: костыль
        this.$timeout(function () {
          return _this3.uiHelper.setInputCodeFocus();
        });
      }
      this.emSchools.filter(function (es) {
        return es.id != (emSchool === null || emSchool === void 0 ? void 0 : emSchool.id);
      }).forEach(function (es) {
        es.editCode = false;
        es.editedSchoolCode = null;
      });
      this.$scope.$applyAsync();
    }
  }]);
  return SchoolCodesController;
}();
var SchoolCodesComponent = {
  controller: SchoolCodesController,
  controllerAs: "$ctrl",
  template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 col-lg-8\">\n\t\t\t\t<div ng-if=\"$ctrl.ready\">\n\t\t\t\t\t<div class=\"alert alert-info\" role=\"alert\">\n\t\t\t\t\t\t{{$ctrl.language.Generic.EM.kSchoolCodeLegend}}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<table class=\"table table-bordered table-condensed school-codes-table table-striped table-hover table-sm\" id=\"dataTable\">\n\t\t\t\t\t\t<tr ng-click=\"$ctrl.toggle()\">\n\t\t\t\t\t\t\t<th><b>{{$ctrl.language.Generic.Common.kCity}}</b></th>\n\t\t\t\t\t\t\t<th><b>{{$ctrl.language.Generic.SchoolInfo.kEOName}}</b></th>\n\t\t\t\t\t\t\t<th><b>{{$ctrl.language.Generic.SetupSchoolUI.kOUCode}}</b></th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr ng-repeat=\"emSchool in $ctrl.emSchools\" ng-click=\"$ctrl.toggle(emSchool)\">\n\t\t\t\t\t\t\t<td>{{emSchool.cityName}}</td>\n\t\t\t\t\t\t\t<td>{{emSchool.shortName}}</td>\n\t\t\t\t\t\t\t<td class=\"input-cell text-center\">\n\t\t\t\t\t\t\t\t<input ng-if=\"emSchool.editCode\" type=\"text\" only-digits class=\"form-control school-code\" ng-model=\"emSchool.editedSchoolCode\" maxlength=\"6\" style=\"border: none; font-size: 14px; color: red;\" autocomplete=\"off\" size=\"7\">\n\t\t\t\t\t\t\t\t{{emSchool.schoolCode}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"width: 1%; cursor:pointer;\">\n\t\t\t\t\t\t\t\t<i title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u0434 \u041E\u041E\" class=\"icon-edit\"></i>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};
exports.SchoolCodesComponent = SchoolCodesComponent;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DouPayUIHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DouPayUIHelper = /*#__PURE__*/function () {
  function DouPayUIHelper() {
    _classCallCheck(this, DouPayUIHelper);
  }
  _createClass(DouPayUIHelper, [{
    key: "init",
    value: function init(callback) {
      var _this = this;
      // todo: костыль
      angular.element(document).on("click", function (event) {
        var target = angular.element(event.target);
        var parent = target.closest("table.school-codes-table");
        if (!parent || !parent.length) {
          callback();
        }
      });
      angular.element(document).on("keyup", function (e) {
        _this.setInputCodeFocus();
      });
    }
  }, {
    key: "setInputCodeFocus",
    value: function setInputCodeFocus() {
      angular.element(".school-code").trigger("focus");
    }
  }]);
  return DouPayUIHelper;
}();
exports.DouPayUIHelper = DouPayUIHelper;

/***/ }),

/***/ 4:
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

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var staticInstance = null;
var BaseRepository = /*#__PURE__*/function () {
  BaseRepository.$inject = ["$http", "$dialogs", "$longWork"];
  /*@ngInject*/
  function BaseRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, BaseRepository);
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    staticInstance = this;
  }
  _createClass(BaseRepository, [{
    key: "handleResponse",
    value: function handleResponse(response) {
      $(document).trigger("closeProcessing");
      if (response.status == 204) return null;
      return response.data;
    }
  }, {
    key: "handleResponseSimple",
    value: function handleResponseSimple(response) {
      return response.data;
    }
  }, {
    key: "handleError",
    value: function handleError(response) {
      if (staticInstance.$longWork) {
        staticInstance.$longWork.close();
      }
      var errInformer = function errInformer(message) {
        return staticInstance.$dialogs.error(message);
      };
      var messageInformer = function messageInformer(message) {
        return staticInstance.$dialogs.message(message);
      };
      return new _common.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
    }
  }, {
    key: "get",
    value: function get(url, options) {
      if (window.appContext.environment === "dev") {
        console.log("url:", url);
        console.log("options:", options);
      }
      $(document).trigger("showProcessing");
      return this.$http.get(url, options).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "post",
    value: function post(url, options) {
      if (window.appContext.environment === "dev") {
        console.log("url:", url);
        console.log("options:", options);
      }
      $(document).trigger("showProcessing");
      return this.$http.post(url, options).then(this.handleResponse, this.handleError);
    }
  }]);
  return BaseRepository;
}();
exports.BaseRepository = BaseRepository;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arSchoolDocsView = exports.arSchoolDocsEdit = exports.arReportsViewSpecialEducNeeds = exports.arReportsViewForAssignedClass = exports.arReportsViewAdministrativeReports = exports.arReportsViewAdditionalReports = exports.arReportsUseReportConstructor = exports.arReportsForAssignedClass = exports.arReportsForAllClasses = exports.arProfileViewSchoolInfo = exports.arProfileEditSchoolInfo = exports.arProfileEditRegionalSettings = exports.arProfileDefineSecurityRoles = exports.arPostSchoolEvent = exports.arPostFoodPayStudentOrders = exports.arPostAwardEvents = exports.arMovePoolStudents = exports.arMovePoolStaff = exports.arMoveBookView = exports.arMoveBookEdit = exports.arMessagesSendReceive = exports.arLAViewSelf = exports.arLAViewMaterials = exports.arLAViewAll = exports.arLASetPolicies = exports.arLAEditSelf = exports.arLACreateGradingScales = exports.arJournalViewSelf = exports.arJournalViewAll = exports.arJournalEditSelf = exports.arJournalEditHAOnlyOnFuture = exports.arJournalEditAll = exports.arIndividualSupportStudentsReestrView = exports.arIndividualSupportMeasuresEditSelf = exports.arIndividualSupportMeasuresEditAll = exports.arForumSendReceive = exports.arForumEdit = exports.arFoodPayPayment = exports.arFillStatReports = exports.arEnrollSelf = exports.arEditSelfAwardEventResults = exports.arEditSchoolTermTypes = exports.arEditSchoolSettings = exports.arEditSchoolResources = exports.arEditReferenceBook = exports.arEditInfoSelf = exports.arEditHealthMonitoring = exports.arEditFoodPayStudentOrdersSelf = exports.arEditFoodPayStudentOrdersAll = exports.arEditFoodPayOrders = exports.arEditFoodPayNorms = exports.arEditFoodPayBalanceSelf = exports.arEditFoodPayBalanceAll = exports.arEditAwardEventMembers = exports.arEMUsersView = exports.arEMUsersEdit = exports.arEMStats = exports.arEMReports = exports.arEMPersonDataReports = exports.arEMODView = exports.arEMODEdit = exports.arEMMsoko = exports.arEMMovement = exports.arEMEventsView = exports.arEMEventsMembersView = exports.arEMEventsMembersEdit = exports.arEMEventsEdit = exports.arEMEgeView = exports.arEMEgeImport = exports.arEMDouPayNormView = exports.arEMDouPayNormEdit = exports.arEMCuratorsODView = exports.arEMCuratorsODEdit = exports.arEMAddReportsView = exports.arEMAddReportsEdit = exports.arDeleteUsers = exports.arCurrMgmViewSelf = exports.arCurrMgmViewAll = exports.arCurrMgmCreateAll = exports.arCurrMgmCreate = exports.arCreateEditTerm = exports.arCreateCloseEditYear = exports.arClassMgmViewClassSubjAll = exports.arClassMgmPostClassEventSelf = exports.arClassMgmPostClassEventAll = exports.arClassMgmEnrollClass = exports.arClassMgmEditSubjects = exports.arClassMgmCreateClass = exports.arCalendarViewSelf = exports.arCalendarViewAll = exports.arCalendarCreateCalendar = exports.arBrowseStatReports = exports.arBrowseResultsEGEHisClassesOrSubjects = exports.arBrowseResultsEGEAllClasses = exports.arBrowseAccessJournal = exports.arAssignmentsViewComplete = exports.arAnnouncementView = exports.arAnnouncementPost = exports.arAddLA = exports.arAddIndividualSupportStudents = void 0;
exports.arViewSelfAwardEvents = exports.arViewHealthMonitoring = exports.arViewFoodPayOrders = exports.arViewAwardEvents = exports.arUsersEditStudentsPsyInfo = exports.arUsersEditStudentsMedInfo = exports.arUsersEditStudents = exports.arUsersEditStaffMedInfo = exports.arUsersEditStaff = exports.arUsersEditAccountStudentsParentsInClass = exports.arUsersEditAccountStudentsParents = exports.arUsersEditAccountStaff = exports.arUserStat = exports.arTotalsViewSelf = exports.arTotalsViewAll = exports.arTotalsEditSelf = exports.arTotalsEditAll = exports.arShortInfoStudents = exports.arShortInfoStaff = exports.arSetPhoto = exports.arSelfRegisterForAwardEvents = exports.arSchoolSubjects = exports.arSchoolPublicDocsView = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу Right.cs

var arProfileEditSchoolInfo = 1;
exports.arProfileEditSchoolInfo = arProfileEditSchoolInfo;
var arProfileViewSchoolInfo = 65;
exports.arProfileViewSchoolInfo = arProfileViewSchoolInfo;
var arProfileEditRegionalSettings = 2;
exports.arProfileEditRegionalSettings = arProfileEditRegionalSettings;
var arProfileDefineSecurityRoles = 3;
exports.arProfileDefineSecurityRoles = arProfileDefineSecurityRoles;
var arEditReferenceBook = 45;
exports.arEditReferenceBook = arEditReferenceBook;
var arEditSchoolSettings = 58;
exports.arEditSchoolSettings = arEditSchoolSettings;
var arUsersEditStaff = 5;
exports.arUsersEditStaff = arUsersEditStaff;
var arUsersEditStaffMedInfo = 66;
exports.arUsersEditStaffMedInfo = arUsersEditStaffMedInfo;
var arUsersEditStudents = 6;
exports.arUsersEditStudents = arUsersEditStudents;
var arUsersEditStudentsMedInfo = 67;
exports.arUsersEditStudentsMedInfo = arUsersEditStudentsMedInfo;
var arUsersEditStudentsPsyInfo = 68;
exports.arUsersEditStudentsPsyInfo = arUsersEditStudentsPsyInfo;
var arUsersEditAccountStaff = 73;
exports.arUsersEditAccountStaff = arUsersEditAccountStaff;
var arUsersEditAccountStudentsParents = 74;
exports.arUsersEditAccountStudentsParents = arUsersEditAccountStudentsParents;
var arUsersEditAccountStudentsParentsInClass = 75;
exports.arUsersEditAccountStudentsParentsInClass = arUsersEditAccountStudentsParentsInClass;
var arCreateCloseEditYear = 29;
exports.arCreateCloseEditYear = arCreateCloseEditYear;
var arSchoolSubjects = 37;
exports.arSchoolSubjects = arSchoolSubjects;
var arCreateEditTerm = 30;
exports.arCreateEditTerm = arCreateEditTerm;
var arEditSchoolTermTypes = 44;
exports.arEditSchoolTermTypes = arEditSchoolTermTypes;
var arMoveBookView = 50;
exports.arMoveBookView = arMoveBookView;
var arMoveBookEdit = 51;
exports.arMoveBookEdit = arMoveBookEdit;
var arMovePoolStudents = 52;
exports.arMovePoolStudents = arMovePoolStudents;
var arMovePoolStaff = 53;
exports.arMovePoolStaff = arMovePoolStaff;
var arSchoolDocsView = 61;
exports.arSchoolDocsView = arSchoolDocsView;
var arSchoolDocsEdit = 62;
exports.arSchoolDocsEdit = arSchoolDocsEdit;
var arClassMgmViewClassSubjAll = 36;
exports.arClassMgmViewClassSubjAll = arClassMgmViewClassSubjAll;
var arClassMgmCreateClass = 7;
exports.arClassMgmCreateClass = arClassMgmCreateClass;
var arClassMgmEditSubjects = 38;
exports.arClassMgmEditSubjects = arClassMgmEditSubjects;
var arClassMgmEnrollClass = 8;
exports.arClassMgmEnrollClass = arClassMgmEnrollClass;
var arClassMgmPostClassEventSelf = 11;
exports.arClassMgmPostClassEventSelf = arClassMgmPostClassEventSelf;
var arClassMgmPostClassEventAll = 14;
exports.arClassMgmPostClassEventAll = arClassMgmPostClassEventAll;
var arCurrMgmViewSelf = 40;
exports.arCurrMgmViewSelf = arCurrMgmViewSelf;
var arCurrMgmViewAll = 39;
exports.arCurrMgmViewAll = arCurrMgmViewAll;
var arCurrMgmCreate = 12;
exports.arCurrMgmCreate = arCurrMgmCreate;
var arCurrMgmCreateAll = 13;
exports.arCurrMgmCreateAll = arCurrMgmCreateAll;
var arAddLA = 60;
exports.arAddLA = arAddLA;
var arCalendarViewSelf = 15;
exports.arCalendarViewSelf = arCalendarViewSelf;
var arCalendarViewAll = 16;
exports.arCalendarViewAll = arCalendarViewAll;
var arCalendarCreateCalendar = 19;
exports.arCalendarCreateCalendar = arCalendarCreateCalendar;
var arPostSchoolEvent = 33;
exports.arPostSchoolEvent = arPostSchoolEvent;
var arViewAwardEvents = 83;
exports.arViewAwardEvents = arViewAwardEvents;
var arPostAwardEvents = 84;
exports.arPostAwardEvents = arPostAwardEvents;
var arEditAwardEventMembers = 85;
exports.arEditAwardEventMembers = arEditAwardEventMembers;
var arViewSelfAwardEvents = 86;
exports.arViewSelfAwardEvents = arViewSelfAwardEvents;
var arSelfRegisterForAwardEvents = 87;
exports.arSelfRegisterForAwardEvents = arSelfRegisterForAwardEvents;
var arEditSelfAwardEventResults = 88;
exports.arEditSelfAwardEventResults = arEditSelfAwardEventResults;
var arJournalViewSelf = 20;
exports.arJournalViewSelf = arJournalViewSelf;
var arJournalViewAll = 18;
exports.arJournalViewAll = arJournalViewAll;
var arJournalEditSelf = 17;
exports.arJournalEditSelf = arJournalEditSelf;
var arJournalEditAll = 23;
exports.arJournalEditAll = arJournalEditAll;
var arJournalEditHAOnlyOnFuture = 59;
exports.arJournalEditHAOnlyOnFuture = arJournalEditHAOnlyOnFuture;
var arTotalsViewSelf = 34;
exports.arTotalsViewSelf = arTotalsViewSelf;
var arTotalsViewAll = 31;
exports.arTotalsViewAll = arTotalsViewAll;
var arTotalsEditSelf = 41;
exports.arTotalsEditSelf = arTotalsEditSelf;
var arTotalsEditAll = 32;
exports.arTotalsEditAll = arTotalsEditAll;
var arLASetPolicies = 9;
exports.arLASetPolicies = arLASetPolicies;
var arLACreateGradingScales = 10;
exports.arLACreateGradingScales = arLACreateGradingScales;
var arLAViewMaterials = 35;
exports.arLAViewMaterials = arLAViewMaterials;
var arLAEditSelf = 4;
exports.arLAEditSelf = arLAEditSelf;
var arLAViewSelf = 42;
exports.arLAViewSelf = arLAViewSelf;
var arLAViewAll = 43;
exports.arLAViewAll = arLAViewAll;
var arReportsForAssignedClass = 21;
exports.arReportsForAssignedClass = arReportsForAssignedClass;
var arReportsForAllClasses = 22;
exports.arReportsForAllClasses = arReportsForAllClasses;
var arReportsViewForAssignedClass = 24;
exports.arReportsViewForAssignedClass = arReportsViewForAssignedClass;
var arReportsViewAdditionalReports = 54;
exports.arReportsViewAdditionalReports = arReportsViewAdditionalReports;
var arReportsUseReportConstructor = 55;
exports.arReportsUseReportConstructor = arReportsUseReportConstructor;
var arReportsViewAdministrativeReports = 64;
exports.arReportsViewAdministrativeReports = arReportsViewAdministrativeReports;
var arAnnouncementView = 25;
exports.arAnnouncementView = arAnnouncementView;
var arAnnouncementPost = 26;
exports.arAnnouncementPost = arAnnouncementPost;
var arMessagesSendReceive = 27;
exports.arMessagesSendReceive = arMessagesSendReceive;
var arForumSendReceive = 56;
exports.arForumSendReceive = arForumSendReceive;
var arForumEdit = 57;
exports.arForumEdit = arForumEdit;
var arAssignmentsViewComplete = 28;
exports.arAssignmentsViewComplete = arAssignmentsViewComplete;
var arShortInfoStaff = 46;
exports.arShortInfoStaff = arShortInfoStaff;
var arShortInfoStudents = 47;
exports.arShortInfoStudents = arShortInfoStudents;
var arEditInfoSelf = 48;
exports.arEditInfoSelf = arEditInfoSelf;
var arEnrollSelf = 49;
exports.arEnrollSelf = arEnrollSelf;
var arDeleteUsers = 63;
exports.arDeleteUsers = arDeleteUsers;
var arEditSchoolResources = 69;
exports.arEditSchoolResources = arEditSchoolResources;
var arSetPhoto = 72;
exports.arSetPhoto = arSetPhoto;
var arBrowseResultsEGEAllClasses = 76;
exports.arBrowseResultsEGEAllClasses = arBrowseResultsEGEAllClasses;
var arBrowseResultsEGEHisClassesOrSubjects = 77;
exports.arBrowseResultsEGEHisClassesOrSubjects = arBrowseResultsEGEHisClassesOrSubjects;
var arSchoolPublicDocsView = 78;
exports.arSchoolPublicDocsView = arSchoolPublicDocsView;
var arBrowseStatReports = 79;
exports.arBrowseStatReports = arBrowseStatReports;
var arFillStatReports = 80;
exports.arFillStatReports = arFillStatReports;
var arBrowseAccessJournal = 81;
exports.arBrowseAccessJournal = arBrowseAccessJournal;
var arUserStat = 82;

/* Индивидуальная поддержка обучающихся */
exports.arUserStat = arUserStat;
var arIndividualSupportStudentsReestrView = 91; // Просмотр реестра учащихся индивидуальной поддержки
exports.arIndividualSupportStudentsReestrView = arIndividualSupportStudentsReestrView;
var arAddIndividualSupportStudents = 92; // Добавление учащихся в систему индивидуальной поддержки
exports.arAddIndividualSupportStudents = arAddIndividualSupportStudents;
var arIndividualSupportMeasuresEditAll = 93; // Редактирование мероприятий индивидуальной поддержки.Всех мероприятий
exports.arIndividualSupportMeasuresEditAll = arIndividualSupportMeasuresEditAll;
var arIndividualSupportMeasuresEditSelf = 94; // Редактирование мероприятий индивидуальной поддержки.Своих мероприятий
exports.arIndividualSupportMeasuresEditSelf = arIndividualSupportMeasuresEditSelf;
var arReportsViewSpecialEducNeeds = 100;
exports.arReportsViewSpecialEducNeeds = arReportsViewSpecialEducNeeds;
var arEMUsersView = 1001;
exports.arEMUsersView = arEMUsersView;
var arEMUsersEdit = 1002;
exports.arEMUsersEdit = arEMUsersEdit;
var arEMEventsView = 1003;
exports.arEMEventsView = arEMEventsView;
var arEMEventsEdit = 1004;
exports.arEMEventsEdit = arEMEventsEdit;
var arEMReports = 1005;
exports.arEMReports = arEMReports;
var arEMPersonDataReports = 1006;
exports.arEMPersonDataReports = arEMPersonDataReports;
var arEMAddReportsView = 1007;
exports.arEMAddReportsView = arEMAddReportsView;
var arEMAddReportsEdit = 1008;
exports.arEMAddReportsEdit = arEMAddReportsEdit;
var arEMMovement = 1009;
exports.arEMMovement = arEMMovement;
var arEMStats = 1010;
exports.arEMStats = arEMStats;
var arEMEgeView = 1011;
exports.arEMEgeView = arEMEgeView;
var arEMEgeImport = 1012;
exports.arEMEgeImport = arEMEgeImport;
var arEMMsoko = 1013;
exports.arEMMsoko = arEMMsoko;
var arEMDouPayNormView = 1014;
exports.arEMDouPayNormView = arEMDouPayNormView;
var arEMDouPayNormEdit = 1015;
exports.arEMDouPayNormEdit = arEMDouPayNormEdit;
var arEMCuratorsODView = 1016;
exports.arEMCuratorsODView = arEMCuratorsODView;
var arEMCuratorsODEdit = 1017;
exports.arEMCuratorsODEdit = arEMCuratorsODEdit;
var arEMODView = 1018;
exports.arEMODView = arEMODView;
var arEMODEdit = 1019;
exports.arEMODEdit = arEMODEdit;
var arEMEventsMembersView = 1020;
exports.arEMEventsMembersView = arEMEventsMembersView;
var arEMEventsMembersEdit = 1021;
exports.arEMEventsMembersEdit = arEMEventsMembersEdit;
var arViewHealthMonitoring = 101;
exports.arViewHealthMonitoring = arViewHealthMonitoring;
var arEditHealthMonitoring = 102;
exports.arEditHealthMonitoring = arEditHealthMonitoring;
var arViewFoodPayOrders = 104;
exports.arViewFoodPayOrders = arViewFoodPayOrders;
var arEditFoodPayOrders = 105;
exports.arEditFoodPayOrders = arEditFoodPayOrders;
var arEditFoodPayStudentOrdersAll = 106;
exports.arEditFoodPayStudentOrdersAll = arEditFoodPayStudentOrdersAll;
var arEditFoodPayStudentOrdersSelf = 107;
exports.arEditFoodPayStudentOrdersSelf = arEditFoodPayStudentOrdersSelf;
var arEditFoodPayBalanceAll = 108;
exports.arEditFoodPayBalanceAll = arEditFoodPayBalanceAll;
var arEditFoodPayBalanceSelf = 109;
exports.arEditFoodPayBalanceSelf = arEditFoodPayBalanceSelf;
var arPostFoodPayStudentOrders = 110;
exports.arPostFoodPayStudentOrders = arPostFoodPayStudentOrders;
var arFoodPayPayment = 111;
exports.arFoodPayPayment = arFoodPayPayment;
var arEditFoodPayNorms = 112;
exports.arEditFoodPayNorms = arEditFoodPayNorms;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(3);
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatInputDirective = void 0;
var _floatInput = __webpack_require__(97);
/**Универсальная директива float-input с настройкой точности.<br>
 * Для настройки точности необходимо передать структуру типа FloatInputOptions.
 * @example
 *<input type="number" float-input="$ctrl.decimalInputSettings" ng-model="inp">
 */
var FloatInputDirective = function FloatInputDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      floatInputOptions: "=floatInput"
    },
    link: function link(scope, element, attrs, ngModel) {
      var options = scope.floatInputOptions;
      ngModel.$parsers.unshift(function (val) {
        var service = new _floatInput.FloatInputService(val, options.maxIntegerLength, options.maxDecimalLength);
        return service.validate(ngModel);
      });
      ngModel.$parsers.unshift(function (value) {
        return value;
      });
      ngModel.$parsers.push(function (value) {
        if (!value) return value;
        return value;
      });
      //Если пользователь вводит знаки '-' или '+' то отменяет событие
      element.on('keydown', function (e) {
        if (e.key == '-' || e.key == '+') {
          e.stopPropagation();
          e.preventDefault();
        }
      });
      //Дополнительная проверка на вставку текста из буфера обмена
      //Сначала валидирует значение потом устанавливает его в поле
      element.on('paste', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var val = (e.originalEvent || e).clipboardData.getData('text/plain');
        var service = new _floatInput.FloatInputService(val, options.maxIntegerLength, options.maxDecimalLength);
        service.validate(ngModel, true, true);
      });
    }
  };
};
exports.FloatInputDirective = FloatInputDirective;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatInputService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FloatInputService = /*#__PURE__*/function () {
  function FloatInputService(val, allowedIntegerLength, allowedDecimalLength) {
    var _this = this;
    _classCallCheck(this, FloatInputService);
    this.hasChanged = false;
    this.isNotANumber = function () {
      return isNaN(Number(_this.val)) || _this.val[_this.val.length - 1] === '.';
    };
    this.hasDecimals = function () {
      return _this.val.indexOf(".") !== -1;
    };
    this.hasTooMuchDecimals = function () {
      return _this.decimalsLength > _this.allowedDecimalLength;
    };
    this.hasTooMuchIntegers = function () {
      return _this.integersLength > _this.allowedIntegerLength;
    };
    this.didItChanged = function () {
      return _this.hasChanged;
    };
    val = val.replace('-', '');
    val = val.replace('+', '');
    val = val.replace(',', '.');
    this.val = val;
    this.pointIndex = val.indexOf(".");
    this.integersLength = this.pointIndex !== -1 ? val.substring(0, this.pointIndex).length : val.length;
    this.decimalsLength = this.pointIndex !== -1 ? val.substring(this.pointIndex + 1).length : 0;
    this.allowedIntegerLength = allowedIntegerLength;
    this.allowedDecimalLength = allowedDecimalLength;
    this.decimalEnabled = this.allowedDecimalLength > 0;
  }
  _createClass(FloatInputService, [{
    key: "handleIsNaN",
    value: function handleIsNaN() {
      while (true) {
        if (this.isNotANumber()) {
          this.val = this.val.substr(0, this.val.length - 1);
        } else {
          break;
        }
      }
      this.hasChanged = true;
    }
  }, {
    key: "throwDecimals",
    value: function throwDecimals() {
      var incrementer = this.allowedDecimalLength ? this.allowedDecimalLength + 1 : 0;
      this.val = this.val.substring(0, this.pointIndex + incrementer);
      this.hasChanged = true;
    }
  }, {
    key: "throwIntegers",
    value: function throwIntegers() {
      var integersLength = this.allowedIntegerLength;
      if (this.pointIndex !== -1) {
        integersLength = this.pointIndex <= this.allowedIntegerLength ? this.pointIndex : this.allowedIntegerLength;
      }
      this.val = this.val.substr(0, integersLength);
      this.hasChanged = true;
    }
  }, {
    key: "validate",
    value: function validate(ngModel) {
      var ignoreChangedFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkAfterHandle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.isNotANumber()) {
        this.handleIsNaN();
      }
      if (this.hasDecimals()) {
        if (this.decimalEnabled) {
          if (this.hasTooMuchDecimals()) {
            this.throwDecimals();
          }
        } else {
          this.throwDecimals();
        }
      }
      if (this.hasTooMuchIntegers()) {
        this.throwIntegers();
      }
      if (checkAfterHandle) {
        if (this.val == '') return null;
      }
      if (this.didItChanged() || ignoreChangedFlag) {
        ngModel.$setViewValue(this.val);
      }
      ngModel.$render();
      return this.val;
    }
  }]);
  return FloatInputService;
}();
exports.FloatInputService = FloatInputService;

/***/ })

/******/ });