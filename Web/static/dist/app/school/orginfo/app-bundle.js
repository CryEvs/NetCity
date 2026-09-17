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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);
var _addServicesListCtrl = __webpack_require__(14);
var _editAddServiceCtrl = __webpack_require__(16);
var _repository = __webpack_require__(19);
var _curriculumConstants = __webpack_require__(24);
var _refbookCtrl = __webpack_require__(26);
var _editRefItemCtrl = __webpack_require__(27);
var _repository2 = __webpack_require__(28);
var _settingsList = __webpack_require__(29);
var _schoolsettings = __webpack_require__(33);
var _maintenanceCtrl = __webpack_require__(35);
var _repository3 = __webpack_require__(38);
var _educContractBlanks = __webpack_require__(39);
var _securityrights = __webpack_require__(40);
var _announcements = __webpack_require__(44);
var _securityrights2 = __webpack_require__(45);
var _groupRights = __webpack_require__(46);
var _subgroupRights = __webpack_require__(47);
var _settingsProvider = __webpack_require__(31);
var _groupSettings = __webpack_require__(48);
var _rightsDependencies = __webpack_require__(49);
var _journaleditlimits = __webpack_require__(51);
var _editlimit = __webpack_require__(52);
var _editlimits = __webpack_require__(53);
var _editLimits = __webpack_require__(54);
var _orginfo = __webpack_require__(55);
var _orginfo2 = __webpack_require__(77);
var _repositories = __webpack_require__(78);
var _schooladdress = __webpack_require__(79);
var _charterParameter = __webpack_require__(58);
var _tagsParameter = __webpack_require__(61);
var _okvedParameter = __webpack_require__(59);
var _internetaccesstechnologyParameter = __webpack_require__(60);
var _directorParameter = __webpack_require__(62);
var _emailParameter = __webpack_require__(63);
var _addressParameter = __webpack_require__(72);
var _webParameter = __webpack_require__(64);
var _phonesParameter = __webpack_require__(65);
var _foodpaykppParameter = __webpack_require__(66);
var _kppParameter = __webpack_require__(68);
var _ogrnParameter = __webpack_require__(69);
var _licenses = __webpack_require__(80);
var _license = __webpack_require__(84);
var _licenses2 = __webpack_require__(85);
var _users = __webpack_require__(86);
var _userinfoEmail = __webpack_require__(87);
var _regionalSettings = __webpack_require__(89);
var _regionalSettings2 = __webpack_require__(90);
var _innParameter = __webpack_require__(70);
var _foodpayinnParameter = __webpack_require__(71);
var _chats = __webpack_require__(91);
var _addressedit = __webpack_require__(92);
var _fiasclient = __webpack_require__(94);
var _module = angular.module("irtech.netcity.school.orginfo", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", "irtech.netcity.global.formparameters"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/addservices/", {
    templateUrl: "/static/dist/app/school/orginfo/addservices/list/template.html",
    controller: _addServicesListCtrl.AddServiceListCtrl,
    controllerAs: "ctrl"
  }).when("/refbook/", {
    templateUrl: "/static/dist/app/school/orginfo/refbook/list/template.html",
    controller: _refbookCtrl.RefBookCtrl,
    controllerAs: "ctrl"
  }).when("/refbook/edit/", {
    templateUrl: "/static/dist/app/school/orginfo/refbook/edit/template.html",
    controller: _editRefItemCtrl.EditRefItemCtrl,
    controllerAs: "ctrl"
  }).when("/", _orginfo.OrgInfoComponent).when("/licenses/", _licenses.LicensesComponent).when("/settings/", _settingsList.SchoolSettingsComponent).when("/securityrights/", _securityrights.SecurityRolesSetupComponent).when("/maintenance/", {
    templateUrl: "/static/dist/app/school/orginfo/maintenance/template.html",
    controller: _maintenanceCtrl.MaintenanceCtrl,
    controllerAs: "ctrl"
  }).when("/regional-settings/", _regionalSettings.SchoolRegionalSettingsComponent).otherwise(_settingsList.SchoolSettingsComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.service("schoolSettingsRepository", _schoolsettings.SchoolSettingsRepository).service("schoolRegionalSettingsRepository", _regionalSettings2.SchoolRegionalSettingsRepository).service("refBookRepository", _repository2.RefBookRepository).service("addServicesRepository", _repository.AddServicesRepository).service("curriculumConstants", _curriculumConstants.CurriculumConstants).service("maintenanceRepository", _repository3.MaintenanceRepository).service("announcementsRepository", _announcements.AnnouncementsRepository).service("securityRightsRepository", _securityrights2.SecurityRightsRepository).service("journalEditLimitsRepository", _journaleditlimits.JournalEditLimitsRepository).service("settingsProvider", _settingsProvider.SettingsProvider).service("rightsDependenciesService", _rightsDependencies.RightsDependenciesService).service("editLimitsService", _editLimits.EditLimitsService).service("chatsRepository", _chats.ChatsRepository).component(_educContractBlanks.EducContractBlanks.selector, _educContractBlanks.EducContractBlanks).component(_addressedit.AddressEditComponent.selector, _addressedit.AddressEditComponent).component(_educContractBlanks.FileIconComponent.selector, _educContractBlanks.FileIconComponent).component(_groupRights.GroupRightsComponent.selector, _groupRights.GroupRightsComponent).component(_subgroupRights.SubgroupRightsComponent.selector, _subgroupRights.SubgroupRightsComponent).component(_groupSettings.GroupSettingsComponent.selector, _groupSettings.GroupSettingsComponent).component(_editlimit.EditLimitComponent.selector, _editlimit.EditLimitComponent).component(_editlimits.EditLimitsComponent.selector, _editlimits.EditLimitsComponent).component(_charterParameter.CharterFormParameterComponent.selector, _charterParameter.CharterFormParameterComponent).component(_tagsParameter.TagsFormParameterComponent.selector, _tagsParameter.TagsFormParameterComponent).component(_okvedParameter.OkvedFormParameterComponent.selector, _okvedParameter.OkvedFormParameterComponent).component(_internetaccesstechnologyParameter.InternetAccessTechnologyFormParameterComponent.selector, _internetaccesstechnologyParameter.InternetAccessTechnologyFormParameterComponent).component(_directorParameter.DirectorFormParameterComponent.selector, _directorParameter.DirectorFormParameterComponent).component(_emailParameter.EmailFormParameterComponent.selector, _emailParameter.EmailFormParameterComponent).component(_addressParameter.AddressFormParameterComponent.selector, _addressParameter.AddressFormParameterComponent).component(_webParameter.WebFormParameterComponent.selector, _webParameter.WebFormParameterComponent).component(_phonesParameter.PhonesFormParameterComponent.selector, _phonesParameter.PhonesFormParameterComponent).component(_foodpaykppParameter.FoodPayKppFormParameterComponent.selector, _foodpaykppParameter.FoodPayKppFormParameterComponent).component(_kppParameter.KppFormParameterComponent.selector, _kppParameter.KppFormParameterComponent).component(_ogrnParameter.OgrnFormParameterComponent.selector, _ogrnParameter.OgrnFormParameterComponent).component(_innParameter.InnFormParameterComponent.selector, _innParameter.InnFormParameterComponent).component(_foodpayinnParameter.FoodPayInnFormParameterComponent.selector, _foodpayinnParameter.FoodPayInnFormParameterComponent).component(_license.LicenseComponent.selector, _license.LicenseComponent).component(_tagsParameter.ProjectTypeFormParameterComponent.selector, _tagsParameter.ProjectTypeFormParameterComponent).controller("AddServiceListCtrl", _addServicesListCtrl.AddServiceListCtrl).controller("EditAddServiceCtrl", _editAddServiceCtrl.EditAddServiceCtrl).controller("MaintenanceCtrl", _maintenanceCtrl.MaintenanceCtrl).controller("EditRefItemCtrl", _editRefItemCtrl.EditRefItemCtrl).service("orgInfoRepository", _orginfo2.OrgInfoRepository).service("licensesRepository", _licenses2.LicensesRepository).service("referencesRepository", _repositories.ReferencesRepository).service("schoolAddressRepository", _schooladdress.SchoolAddressRepository).service("usersRepository", _users.UsersRepository).service("fiasClient", _fiasclient.FiasClient).directive("emailInput", _userinfoEmail.EmailInputDirective).directive("kppInput", _kppParameter.KppInputDirective).directive("ogrnInput", _ogrnParameter.OgrnInputDirective).directive("innInput", _innParameter.InnInputDirective).directive('yrInteger', function () {
  return {
    restrict: 'A',
    link: function link(scope, element, attrs) {
      element.on('keypress', function (event) {
        if (!isIntegerChar()) event.preventDefault();
        function isIntegerChar() {
          return /[0-9]/.test(String.fromCharCode(event.which));
        }
      });
    }
  };
}).config(config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(3);
var _areaParameter = __webpack_require__(4);
var _boolParameter = __webpack_require__(7);
var _dateParameter = __webpack_require__(8);
var _groupParameter = __webpack_require__(9);
var _listParameter = __webpack_require__(10);
var _parameter = __webpack_require__(11);
var _parametersForm = __webpack_require__(13);
var _stringParameter = __webpack_require__(12);
angular.module("irtech.netcity.global.formparameters", []).component(_parametersForm.ParametersFormComponent.selector, _parametersForm.ParametersFormComponent).directive(_parametersForm.ParametersFormDirective.selector, _parametersForm.ParametersFormDirective).component(_parameter.FormParameterComponent.selector, _parameter.FormParameterComponent).component(_listParameter.ListFormParameterComponent.selector, _listParameter.ListFormParameterComponent).component(_dateParameter.DateFormParameterComponent.selector, _dateParameter.DateFormParameterComponent).component(_areaParameter.AreaFormParameterComponent.selector, _areaParameter.AreaFormParameterComponent).component(_stringParameter.StringFormParameterComponent.selector, _stringParameter.StringFormParameterComponent).component(_groupParameter.GroupFormParameterComponent.selector, _groupParameter.GroupFormParameterComponent).component(_boolParameter.BoolFormParameterComponent.selector, _boolParameter.BoolFormParameterComponent).directive(_common.OnlyDigitsValidationDirective.selector, _common.OnlyDigitsValidationDirective).directive(_common.NsInputAllowedLengthDirective.selector, _common.NsInputAllowedLengthDirective);

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AreaFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var AreaFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(AreaFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(AreaFormParameterController);
  function AreaFormParameterController() {
    _classCallCheck(this, AreaFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(AreaFormParameterController, [{
    key: "onChange",
    value: function onChange() {
      var value = {
        text: this.model
      };
      this.service.updateValues(this.parameter.id, [value]);
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      this.maxLength = this.parameter.extraInfo || 200;
      if (this.values.length) {
        this.model = this.values[0].text;
      }
    }
  }, {
    key: "getAreaRows",
    value: function getAreaRows() {
      if (this.maxLength >= 800) {
        return 8;
      } else if (this.maxLength < 200) {
        return 2;
      } else {
        return this.maxLength / 100;
      }
    }
  }]);
  return AreaFormParameterController;
}(_baseParameter.BaseFormParameterController);
var AreaFormParameterComponent = {
  controller: AreaFormParameterController,
  selector: "areaFormParameter",
  template: "\n\t\t<textarea ng-model=\"$ctrl.model\" track-changes rows=\"{{$ctrl.getAreaRows()}}\" cols=\"50\" maxlength=\"{{$ctrl.parameter.extraInfo}}\" class=\"form-control\" ng-disabled=\"$ctrl.readonly\" ng-change=\"$ctrl.onChange()\"></textarea>\n\t",
  bindings: {
    parameter: "=parameter",
    values: "=values",
    service: "<"
  }
};
exports.AreaFormParameterComponent = AreaFormParameterComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseFormParameterController = void 0;
var _formparameters = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseFormParameterController = /*#__PURE__*/function () {
  BaseFormParameterController.$inject = ["language"];
  /*@ngInject*/
  function BaseFormParameterController(language) {
    _classCallCheck(this, BaseFormParameterController);
    this.language = language;
  }
  _createClass(BaseFormParameterController, [{
    key: "baseOnInit",
    value: function baseOnInit() {
      this.readonly = this.service.readonly() || this.parameter.accessType !== _formparameters.ParamAccessType.Full;
      //this.wizard = this.editUserInfoService.wizard;
    }
  }, {
    key: "name",
    get: function get() {
      var _a;
      return ((_a = this.parameter) === null || _a === void 0 ? void 0 : _a.name) || "FP_" + this.parameter.id;
    }
  }]);
  return BaseFormParameterController;
}();
exports.BaseFormParameterController = BaseFormParameterController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParamAccessType = exports.FormParamType = void 0;
var FormParamType;
exports.FormParamType = FormParamType;
(function (FormParamType) {
  /// <summary>
  /// тип - дата
  /// </summary>
  FormParamType["Date"] = "Date";
  /// <summary>
  /// тип - списочный. выбор значения осуществляется из списка
  /// </summary>
  FormParamType["List"] = "List";
  /// <summary>
  /// тип - строковый. свободный ввод
  /// </summary>
  FormParamType["String"] = "String";
  /// <summary>
  /// тип - списочный с возможностью множественного выбора
  /// </summary>
  FormParamType["MultiChoice"] = "MultiChoice";
  /// <summary>
  /// тип - группировочный. не имеет собственного значения. служит для группировки нескольких параметров
  /// </summary>
  FormParamType["Group"] = "Group";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр <see cref="List"/>
  /// </summary>
  FormParamType["Pointer"] = "Pointer";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр с множественными значениями <see cref="MultiChoice"/>
  /// </summary>
  FormParamType["Relation"] = "Relation";
  /// <summary>
  /// тип - свободный. ввод обрабатывается отдельно.
  /// </summary>
  FormParamType["Free"] = "Free";
  /// <summary>
  /// тип - текстовое поле
  /// </summary>
  FormParamType["Area"] = "Area";
  /// <summary>
  /// тип - логический. да/нет
  /// </summary>
  /// <remarks>
  /// пока не используется. заведен на будущее
  /// </remarks>
  FormParamType["Bool"] = "Bool";
})(FormParamType || (exports.FormParamType = FormParamType = {}));
var ParamAccessType;
exports.ParamAccessType = ParamAccessType;
(function (ParamAccessType) {
  ParamAccessType["Full"] = "Full";
  ParamAccessType["ReadOnly"] = "ReadOnly";
  ParamAccessType["Hidden"] = "Hidden";
})(ParamAccessType || (exports.ParamAccessType = ParamAccessType = {}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoolFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var BoolFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(BoolFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(BoolFormParameterController);
  function BoolFormParameterController() {
    _classCallCheck(this, BoolFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(BoolFormParameterController, [{
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      if (this.model) {
        setValue.push({
          text: this.model
        });
      }
      this.service.updateValues(this.parameter.id, setValue);
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.baseOnInit();
      this.displayItems = [{
        id: "0",
        name: "Нет"
      }, {
        id: "1",
        name: "Да"
      }];
      if (this.values.length) {
        this.model = this.values[0].text;
        this.item = this.displayItems.find(function (i) {
          return i.id === _this.model;
        });
      } else {
        this.model = null;
        this.item = null;
      }
    }
  }]);
  return BoolFormParameterController;
}(_baseParameter.BaseFormParameterController);
var BoolFormParameterComponent = {
  controller: BoolFormParameterController,
  selector: "boolFormParameter",
  template: "\n\t\t<select ng-if=\"!$ctrl.readonly\" ng-disabled=\"$ctrl.parameter.isDisabled($ctrl.parameter.id, $ctrl.service)\" track-changes ng-model=\"$ctrl.model\" class=\"form-control\" ng-options=\"item.id as item.name for item in $ctrl.displayItems\" ng-change=\"$ctrl.onChange()\">\n\t\t\t<option value=\"\"></option>\n\t\t</select>\n\t\t<input ng-if=\"$ctrl.readonly\" class=\"form-control\" type=\"text\" disabled=\"disabled\" ng-value=\"$ctrl.item && $ctrl.item.name\">\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.BoolFormParameterComponent = BoolFormParameterComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var DateFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(DateFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(DateFormParameterController);
  function DateFormParameterController() {
    _classCallCheck(this, DateFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(DateFormParameterController, [{
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      if (this.model) {
        setValue.push({
          date: this.model
        });
      }
      this.service.updateValues(this.parameter.id, setValue);
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].date;
      }
      // инициализация
      this.initTotalDateRange();
      this.options = {
        calendarMinDate: this.minDate,
        calendarMaxDate: this.maxDate
      };
      console.log("options", this.options);
      switch (this.parameter.name) {
        case "REQ_ATT_DATE": // Заявка на аттест. по Осн. должности
        case "REQ_ATT_DATE2":
          {
            // Заявка на аттест. по Доп. должности
            this.options.calendarMaxDate = new Date(new Date().getFullYear() + 5, 11, 31);
            break;
          }
        case "START_DATE_MILITARY": // Воинский учет.Дата начала службы
        case "END_DATE_MILITARY":
          {
            // Воинский учет.Дата окончания службы
            this.options.calendarMaxDate = new Date(new Date().getFullYear() + 10, 11, 31);
            break;
          }
      }
    }
  }, {
    key: "initTotalDateRange",
    value: function initTotalDateRange() {
      this.minDate = new Date(new Date().getFullYear() - 90, 0, 1);
      this.maxDate = new Date(new Date().getFullYear() + 1, 11, 31);
    }
  }]);
  return DateFormParameterController;
}(_baseParameter.BaseFormParameterController);
var DateFormParameterComponent = {
  controller: DateFormParameterController,
  selector: "dateFormParameter",
  template: "<date-input-component readonly=\"$ctrl.readonly\" date-model=\"$ctrl.model\" name=\"{{$ctrl.parameter.name}}\" options=\"$ctrl.options\" date-change=\"$ctrl.onChange()\"></date-input-component>",
  bindings: {
    parameter: "=parameter",
    values: "=values",
    service: "<"
  }
};
exports.DateFormParameterComponent = DateFormParameterComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupFormParameterController = exports.GroupFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var GroupFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(GroupFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(GroupFormParameterController);
  function GroupFormParameterController() {
    _classCallCheck(this, GroupFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(GroupFormParameterController, [{
    key: "$postLink",
    value: function $postLink() {
      //todo. разобраться
      //this.editUserInfoService.forms.push(this.form); // todo: какой-то костыль, верхняя форма не валидируется, добавляю форму еще и  для группового параметра, сделал по аналогии со снилс
    }
  }, {
    key: "dateFormatMessage",
    value: function dateFormatMessage() {
      return "".concat(this.language.Generic.Common.kEnterDateInFormat, " ").concat(dateUtils.getLocaleFormat());
    }
  }]);
  return GroupFormParameterController;
}(_baseParameter.BaseFormParameterController);
exports.GroupFormParameterController = GroupFormParameterController;
var GroupFormParameterComponent = {
  controller: GroupFormParameterController,
  selector: "groupFormParameter",
  template: "\n\t\t<ng-form name=\"$ctrl.form\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 group-item\" ng-repeat=\"innerParam in $ctrl.parameter.parameters\" ng-show=\"innerParam.show\" ng-class=\"{'has-error': $ctrl.form[innerParam.name].$invalid}\">\n\t\t\t\t\t<label class=\"control-label\" for=\"{{$ctrl.parameter.name + '_' + innerParam.name}}\">{{innerParam.title}}</label>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<form-parameter parameter=\"innerParam\"></form-parameter>\n\n\t\t\t\t\t\t<div ng-messages=\"$ctrl.form[innerParam.name].$error\">\n\t\t\t\t\t\t\t<span class=\"help-block\" ng-message=\"required\">{{$ctrl.language.Generic.Common.kEnterDate}}</span>\n\t\t\t\t\t\t\t<span class=\"help-block\" ng-message=\"dateFormat\">{{$ctrl.dateFormatMessage()}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-form>\n\t",
  bindings: {
    parameter: "=parameter",
    service: "<"
  }
};
exports.GroupFormParameterComponent = GroupFormParameterComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var ListFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(ListFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(ListFormParameterController);
  function ListFormParameterController() {
    _classCallCheck(this, ListFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(ListFormParameterController, [{
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      var itemId = null;
      if (_typeof(this.model) != undefined) {
        itemId = this.model;
      }
      setValue.push({
        itemId: itemId
      });
      this.service.updateValues(this.parameter.id, setValue);
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      this.initItems();
      this.initModel(this.values);
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(changes) {
      this.initItems();
      this.initModel(changes.values && changes.values.currentValue);
    }
  }, {
    key: "initItems",
    value: function initItems() {
      var _this = this;
      var items = this.parameter.items;
      if (this.parameter.itemsStatus) {
        items = items.filter(function (i) {
          var itemStatus = _this.parameter.itemsStatus.find(function (is) {
            return is.orderNo == i.orderNo;
          });
          if (!itemStatus) {
            return true;
          }
          return itemStatus.show;
        });
      }
      if (items) {
        this.displayItems = _.sortBy(items, function (x) {
          return x.name;
        });
      }
    }
  }, {
    key: "initModel",
    value: function initModel(values) {
      var _this2 = this;
      if (values && values.length) {
        this.model = values[0].itemId;
        this.item = this.parameter.items.find(function (i) {
          return i.id == _this2.model;
        });
      } else {
        this.item = null;
        this.model = null;
      }
    }
  }]);
  return ListFormParameterController;
}(_baseParameter.BaseFormParameterController);
var ListFormParameterComponent = {
  controller: ListFormParameterController,
  selector: "listFormParameter",
  template: "\n\t\t<select ng-if=\"!$ctrl.readonly\" track-changes ng-model=\"$ctrl.model\" class=\"form-control\" ng-options=\"item.id as item.name for item in $ctrl.displayItems\" ng-change=\"$ctrl.onChange()\">\n\t\t\t<option value=\"\" ng-if=\"!$ctrl.parameter.required\"></option>\n\t\t</select>\n\t\t<input ng-if=\"$ctrl.readonly\" class=\"form-control\" type=\"text\" disabled=\"disabled\" ng-value=\"$ctrl.item && $ctrl.item.name\">\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.ListFormParameterComponent = ListFormParameterComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormParameterComponent = void 0;
var _groupParameter = __webpack_require__(9);
var _listParameter = __webpack_require__(10);
var _stringParameter = __webpack_require__(12);
var _dateParameter = __webpack_require__(8);
var _areaParameter = __webpack_require__(4);
var _boolParameter = __webpack_require__(7);
var _formparameters = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormParameterController = /*#__PURE__*/function () {
  FormParameterController.$inject = ["$scope", "$element", "$compile"];
  /*@ngInject*/
  function FormParameterController($scope, $element, $compile) {
    _classCallCheck(this, FormParameterController);
    this.$scope = $scope;
    this.$element = $element;
    this.$compile = $compile;
  }
  _createClass(FormParameterController, [{
    key: "getComponentTag",
    value: function getComponentTag(componentName) {
      var tagName = componentName.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
        return "-" + y.toLowerCase();
      }).replace(/^-/, "");
      return tagName;
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      var _a, _b;
      //var newScope = this.$scope.$new();
      this.service = ((_a = this.parametersForm) === null || _a === void 0 ? void 0 : _a.service) || ((_b = this.parametersFormDir) === null || _b === void 0 ? void 0 : _b.service);
      var component = this.resolveComponent();
      if (component) {
        var tagName = this.getComponentTag(component.selector);
        this.values = this.service.getValues(this.parameter.id);
        this.service.parameterValues.on(function () {
          var newValues = _this.service.getValues(_this.parameter.id);
          //todo. более точная проверка
          if (_this.values != newValues) {
            _this.values = newValues;
            _this.$scope.$applyAsync();
          }
        });
        var html = '<' + tagName + ' parameter="$ctrl.parameter" values="$ctrl.values" service="$ctrl.service"></' + tagName + '>';
        var element = angular.element(html);
        this.$element.append(element);
        this.$compile(element)(this.$scope);
      }
    }
  }, {
    key: "resolveComponent",
    value: function resolveComponent() {
      var component;
      component = this.service.resolveComponent(this.parameter);
      if (component != undefined && component != null) {
        return component;
      }
      component = this.resolveCommonComponent();
      return component;
    }
  }, {
    key: "resolveCommonComponent",
    value: function resolveCommonComponent() {
      if (this.parameter.paramType === _formparameters.FormParamType.Group) {
        return _groupParameter.GroupFormParameterComponent;
      } else if (this.parameter.paramType === _formparameters.FormParamType.List || this.parameter.paramType === _formparameters.FormParamType.Pointer) {
        return _listParameter.ListFormParameterComponent;
      } else if (this.parameter.paramType === _formparameters.FormParamType.String) {
        return _stringParameter.StringFormParameterComponent;
      } else if (this.parameter.paramType === _formparameters.FormParamType.Date) {
        return _dateParameter.DateFormParameterComponent;
      } else if (this.parameter.paramType === _formparameters.FormParamType.Area) {
        return _areaParameter.AreaFormParameterComponent;
      }
      // else if (this.parameter.paramType === FormParamType.MultiChoice || this.parameter.paramType === FormParamType.Relation) {
      // 	return MchoiceFormParameterComponent;
      // }
      else if (this.parameter.paramType === _formparameters.FormParamType.Bool) {
        return _boolParameter.BoolFormParameterComponent;
      }
      var customComponent = this.service.resolveComponent(this.parameter);
      if (customComponent) {
        return customComponent;
      }
      throw "неизвестный тип поля";
    }
  }]);
  return FormParameterController;
}();
var FormParameterComponent = {
  controller: FormParameterController,
  selector: "formParameter",
  bindings: {
    parameter: "=parameter"
  },
  require: {
    parametersForm: "?^^nsParametersForm",
    parametersFormDir: "?^^nsParametersFormDir"
  }
};
exports.FormParameterComponent = FormParameterComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var StringFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(StringFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(StringFormParameterController);
  function StringFormParameterController() {
    _classCallCheck(this, StringFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(StringFormParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }, {
    key: "lengths",
    get: function get() {
      return this.parameter.lengths;
    }
  }, {
    key: "maxLength",
    get: function get() {
      return this.parameter.maxLength;
    }
  }, {
    key: "minLength",
    get: function get() {
      return this.parameter.minLength;
    }
  }, {
    key: "form",
    get: function get() {
      return this.service.form;
    }
  }, {
    key: "digitsOnly",
    get: function get() {
      return this.parameter.digitsOnly;
    }
  }, {
    key: "ngModel",
    get: function get() {
      var form = this.service.form;
      if (!form) {
        return null;
      }
      return form[this.name];
    }
  }, {
    key: "$error",
    get: function get() {
      var form = this.service.form;
      if (!form) {
        return {};
      }
      var ngModel = form[this.name];
      if (!ngModel) {
        return {};
      }
      return ngModel.$error;
    }
  }, {
    key: "minLengthMessage",
    get: function get() {
      if (this.minLength == this.maxLength) {
        return "\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ".concat(this.minLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C");
      }
      return "\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ".concat(this.minLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    }
  }, {
    key: "maxLengthMessage",
    get: function get() {
      if (this.minLength == this.maxLength) {
        return "\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ".concat(this.minLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C");
      }
      return "\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ".concat(this.minLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    }
  }, {
    key: "allowedLengthMessage",
    get: function get() {
      var lengthsStr = this.lengths.reduce(function (a, l) {
        return a += " или " + l;
      }, "").substr(5);
      return "\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ".concat(lengthsStr, " \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C");
    }
  }]);
  return StringFormParameterController;
}(_baseParameter.BaseFormParameterController);
var StringFormParameterComponent = {
  controller: StringFormParameterController,
  selector: "stringFormParameter",
  template: "\n\t\t\t<input track-changes type=\"text\" name=\"{{$ctrl.name}}\" ng-minlength=\"$ctrl.minLength\" ng-maxlength=\"$ctrl.maxLength\" ng-model=\"$ctrl.model\" only-digits-validation=\"$ctrl.digitsOnly\" ns-input-allowed-length=\"$ctrl.lengths\" ng-disabled=\"$ctrl.readonly\" maxlength=\"{{$ctrl.maxLength}}\" class=\"form-control {{$ctrl.classes}}\" ng-change=\"$ctrl.onChange()\" ng-required=\"$ctrl.parameter.required\" ></select>\t\n\t\t\t<div ng-messages=\"$ctrl.$error\">\n\t\t\t\t<span class=\"help-block\" ng-message=\"required\">{{$ctrl.language.Generic.Messages.kRequiredField}}</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"onlydigits\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"allowedlength\">{{$ctrl.allowedLengthMessage}}</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"minlength\">{{$ctrl.minLengthMessage}}</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"maxlength\">{{$ctrl.maxLengthMessage}}</span>\n\t\t\t</div>\n\t",
  bindings: {
    parameter: "=parameter",
    values: "=values",
    service: "<"
  }
};
exports.StringFormParameterComponent = StringFormParameterComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParametersFormDirective = exports.ParametersFormController = exports.ParametersFormComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ParametersFormController = /*#__PURE__*/_createClass(function ParametersFormController() {
  _classCallCheck(this, ParametersFormController);
});
exports.ParametersFormController = ParametersFormController;
var ParametersFormComponent = {
  controller: ParametersFormController,
  controllerAs: "$ctrl",
  selector: 'nsParametersForm',
  restrict: 'EA',
  transclude: true,
  template: "<ng-transclude></ng-transclude>",
  bindings: {
    service: "<",
    form: "<"
  }
};
exports.ParametersFormComponent = ParametersFormComponent;
var ParametersFormDirective = function ParametersFormDirective() {
  return {
    restrict: 'A',
    scope: {
      service: "<",
      form: "<"
    },
    bindToController: true,
    controller: ParametersFormController
  };
};
exports.ParametersFormDirective = ParametersFormDirective;
ParametersFormDirective.selector = "nsParametersFormDir";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddServiceListCtrl = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(15));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AddServiceListCtrl = /*#__PURE__*/function () {
  AddServiceListCtrl.$inject = ["pageContext", "$appLoader", "$uibModal", "addServicesRepository", "$longWork"];
  /*@ngInject*/
  function AddServiceListCtrl(pageContext, $appLoader, $uibModal, addServicesRepository, $longWork) {
    _classCallCheck(this, AddServiceListCtrl);
    this.appLoader = $appLoader;
    this.uibModal = $uibModal;
    this.addServicesRepository = addServicesRepository;
    this.$longWork = $longWork;
    pageContext.title = language.Generic.MenuFolders.kAddServices;
    angular.extend(this, {
      paging: {
        page: 1,
        pageSize: 20,
        totalcount: 0
      }
    });
    this.language = language;
    this.data = {
      addServices: [],
      selection: new _selectable["default"]()
    };
    this.state = {
      dataReady: false,
      emptyData: false,
      viewReady: true,
      readOnlyContext: appContext.readOnly
    };
    this.load();
  }

  //редактировать
  _createClass(AddServiceListCtrl, [{
    key: "editService",
    value: function editService(_addService2) {
      var _this = this;
      var modalInstance = this.uibModal.open({
        templateUrl: '/static/dist/app/school/orginfo/addservices/edit/template.html',
        controller: 'EditAddServiceCtrl as ctrl',
        backdrop: false,
        resolve: {
          addService: function addService() {
            return angular.copy(_addService2);
          },
          mode: function mode() {
            return new Object({
              edit: true
            });
          }
        }
      });
      modalInstance.result.then(function () {
        return _this.load();
      });
      modalInstance.closed.then(function () {
        return _this.load();
      });
    }

    //добавить
  }, {
    key: "addService",
    value: function addService(_addService) {
      var _this2 = this;
      var modalInstance = this.uibModal.open({
        templateUrl: '/static/dist/app/school/orginfo/addservices/edit/template.html',
        controller: 'EditAddServiceCtrl as ctrl',
        backdrop: false,
        resolve: {
          addService: _addService,
          mode: function mode() {
            return new Object({
              create: true
            });
          }
        }
      });
      modalInstance.result.then(function () {
        return _this2.load();
      });
      modalInstance.closed.then(function () {
        return _this2.load();
      });
    }

    //удалить
  }, {
    key: "removeService",
    value: function removeService(addService) {
      var _this3 = this;
      $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0443\u0441\u043B\u0443\u0433\u0443 \"".concat(addService.name, "\"?").escapeHTML()).then(function () {
        _this3.$longWork.show();
        return _this3.addServicesRepository.remove(addService.id);
      }).then(function () {
        var params = {
          page: _this3.paging.page,
          pageSize: _this3.paging.pageSize
        };
        return _this3.addServicesRepository.getAll(params).then(function (addServices) {
          // paging
          _this3.paging.totalcount = addServices.totalcount;
          _this3.paging.show = _this3.paging.totalcount > _this3.paging.pageSize && _this3.paging.page > 0;
          _this3.data.addServices = addServices;
          _this3.data.selection.selected = false;
          _this3.state.emptyData = !addServices.length;
          _this3.state.dataReady = true;
          _this3.appLoader.hide();
        });
      }).then(function () {
        _this3.$longWork.close();
      });
    }

    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      var params = {
        page: this.paging.page,
        pageSize: this.paging.pageSize
      };
      this.addServicesRepository.getAll(params).then(function (addServices) {
        // paging
        _this4.paging.totalcount = addServices.totalcount;
        _this4.paging.show = _this4.paging.totalcount > _this4.paging.pageSize && _this4.paging.page > 0;
        _this4.data.addServices = addServices;
        _this4.data.selection.selected = false;
        _this4.state.emptyData = !addServices.length;
        _this4.state.dataReady = true;
        _this4.appLoader.hide();
      });
    }
  }]);
  return AddServiceListCtrl;
}();
exports.AddServiceListCtrl = AddServiceListCtrl;

/***/ }),
/* 15 */
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
var Selectable = /*#__PURE__*/function () {
  function Selectable() {
    _classCallCheck(this, Selectable);
    this.item = null;
  }
  _createClass(Selectable, [{
    key: "selected",
    get: function get() {
      return this.item;
    },
    set: function set(val) {
      this.item = val;
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      return this.item === val;
    }
  }, {
    key: "select",
    value: function select(val) {
      if (val === this.item) {
        this.item = null;
      } else {
        this.item = val;
      }
    }
  }, {
    key: "dropSelect",
    value: function dropSelect() {
      this.item = null;
    }
  }]);
  return Selectable;
}();
exports["default"] = Selectable;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAddServiceCtrl = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(15));
var AddServicesRefs = _interopRequireWildcard(__webpack_require__(17));
var _netcityModalCtrl = __webpack_require__(18);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var EditAddServiceCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  EditAddServiceCtrl.$inject = ["pageContext", "$scope", "addServicesRepository", "$dialogs", "$appLoader", "$uibModalInstance", "addService", "mode", "changeTracker"];
  _inherits(EditAddServiceCtrl, _NetCityModalControll);
  var _super = _createSuper(EditAddServiceCtrl);
  /*@ngInject*/
  function EditAddServiceCtrl(pageContext, $scope, addServicesRepository, $dialogs, $appLoader, $uibModalInstance, addService, mode, changeTracker) {
    var _this;
    _classCallCheck(this, EditAddServiceCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.addServicesRepository = addServicesRepository;
    _this.uibModalInstance = $uibModalInstance;
    _this.appLoader = $appLoader;
    _this.mode = mode;
    _this.header = mode.edit ? "Редактировать дополнительную услугу" : "Добавить дополнительную услугу";
    _this.language = language;
    _this.state = {
      dataReady: false,
      emptyData: false,
      viewReady: true,
      contentWasChanged: false
    };
    _this.data = {
      addService: addService,
      selection: new _selectable["default"](),
      addServiceTypes: AddServicesRefs["default"].addServicesTypes
    };
    _this.load();
    return _this;
  }
  _createClass(EditAddServiceCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "save",
    value: function save(valid, addService) {
      var _this2 = this;
      if (valid) {
        if (addService) {
          this.addServicesRepository.edit(addService).then(function (addService) {
            _this2.state.dataReady = true;
            _this2.appLoader.hide();
            _this2.uibModalInstance.close(addService);
          });
        } else {
          this.addServicesRepository.create(this.data.addService.item).then(function (addService) {
            _this2.appLoader.hide();
            if (addService) {
              _this2.state.dataReady = true;
              _this2.mode.edit = true;
              _this2.mode.create = false;
              _this2.data.addService.item = addService;
              _this2.uibModalInstance.close(addService);
            }
          });
        }
      }
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.addServicesRepository.getStaffList(appContext.yearId, this.data.addService ? this.data.addService.item : null).then(function (staffList) {
        _this3.data.users = staffList;
        _this3.appLoader.hide();
      });
    }
  }]);
  return EditAddServiceCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.EditAddServiceCtrl = EditAddServiceCtrl;

/***/ }),
/* 17 */
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
var AddServicesRefs = /*#__PURE__*/function () {
  function AddServicesRefs() {
    _classCallCheck(this, AddServicesRefs);
  }
  _createClass(AddServicesRefs, [{
    key: "addServicesTypes",
    get: function get() {
      return [{
        id: 1,
        name: "Платная"
      }, {
        id: 2,
        name: "Бесплатная"
      }];
    }
  }]);
  return AddServicesRefs;
}();
var instance = new AddServicesRefs();
var _default = instance;
exports["default"] = _default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetCityModalController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var closeReasons = ["backdrop click", "cancel", "escape key press"];
var NetCityModalController = /*#__PURE__*/function () {
  NetCityModalController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs"];
  /*@ngInject*/
  function NetCityModalController($scope, $uibModalInstance, changeTracker, $dialogs) {
    var _this = this;
    _classCallCheck(this, NetCityModalController);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.changeTracker = changeTracker;
    this.$dialogs = $dialogs;
    $scope.$on("modal.closing", function (event, reason) {
      var modalCtx = _this.modalCtx;
      var changed = changeTracker.isDataChanged(modalCtx);
      if (!changed) {
        return;
      }
      if (closeReasons.indexOf(reason) == -1) {
        return;
      }
      event.preventDefault();
      $dialogs.confirm(language.Generic.Common.kDataWereChanged).then(function () {
        changeTracker.clearDataChanges(modalCtx);
        $uibModalInstance.dismiss(reason);
      });
    });
  }
  _createClass(NetCityModalController, [{
    key: "modalCtx",
    get: function get() {
      return $("div.modal.fade");
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return NetCityModalController;
}();
exports.NetCityModalController = NetCityModalController;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddServicesRepository = void 0;
var _repository = __webpack_require__(20);
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
var AddServicesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AddServicesRepository, _BaseRepository);
  var _super = _createSuper(AddServicesRepository);
  function AddServicesRepository() {
    _classCallCheck(this, AddServicesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AddServicesRepository, [{
    key: "getAll",
    value: function getAll(params) {
      params = params || {};
      params.yearId = appContext.yearId;
      return this.$http.get("/webapi/addServices/school", {
        params: params
      }).then(function (response) {
        var addServices = response.data;
        if (response.headers("count")) {
          addServices.totalcount = parseInt(response.headers("count"));
        }
        return addServices;
      });
    }
  }, {
    key: "getStaffList",
    value: function getStaffList(yearId, addService) {
      var params = {};
      params.yearId = yearId;
      params.userId = addService && addService.user ? addService.user.id : -1;
      return this.$http.get("/webapi/addServices/staff", {
        params: params
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "create",
    value: function create(service) {
      var _this = this;
      service.schoolYearId = appContext.yearId;
      return this.$http.post("/webapi/addServices", service).then(function (response) {
        _this.$alerts.success("Добавлена новая дополнительная услуга");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var _this2 = this;
      return this.$http["delete"]("/webapi/addServices?addServiceId=".concat(id)).then(function () {
        _this2.$alerts.success("Дополнительная услуга удалена");
      })["catch"](this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(service) {
      var _this3 = this;
      return this.$http.put("/webapi/addServices", service).then(function (response) {
        _this3.$alerts.success("Дополнительная услуга отредактирована");
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return AddServicesRepository;
}(_repository.BaseRepository);
exports.AddServicesRepository = AddServicesRepository;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(21);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(22);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(23);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumConstants = void 0;
var _common = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CurriculumConstants = /*#__PURE__*/function () {
  CurriculumConstants.$inject = ["language"];
  /*@ngInject*/
  function CurriculumConstants(language) {
    _classCallCheck(this, CurriculumConstants);
    this.language = language;
  }
  _createClass(CurriculumConstants, [{
    key: "getAllPossibleGrades",
    value: function getAllPossibleGrades(funcType, inSingular) {
      if (funcType === _common.FuncType.preSchool) {
        if (inSingular) {
          return [{
            id: 0,
            name: this.language.Generic.Common.kGr0
          }, {
            id: 1,
            name: this.language.Generic.Common.kGr1
          }, {
            id: 2,
            name: this.language.Generic.Common.kGr2
          }, {
            id: 3,
            name: this.language.Generic.Common.kGr3
          }, {
            id: 4,
            name: this.language.Generic.Common.kGr4
          }, {
            id: 5,
            name: this.language.Generic.Common.kGr5
          }, {
            id: 6,
            name: this.language.Generic.Common.kGr6
          }, {
            id: 7,
            name: this.language.Generic.Common.kGr7
          }, {
            id: 8,
            name: this.language.Generic.Common.kGr8
          }];
        }
        return [{
          id: 0,
          name: this.language.Generic.Common.kGr0_s
        }, {
          id: 1,
          name: this.language.Generic.Common.kGr1_s
        }, {
          id: 2,
          name: this.language.Generic.Common.kGr2_s
        }, {
          id: 3,
          name: this.language.Generic.Common.kGr3_s
        }, {
          id: 4,
          name: this.language.Generic.Common.kGr4_s
        }, {
          id: 5,
          name: this.language.Generic.Common.kGr5_s
        }, {
          id: 6,
          name: this.language.Generic.Common.kGr6_s
        }, {
          id: 7,
          name: this.language.Generic.Common.kGr7_s
        }, {
          id: 8,
          name: this.language.Generic.Common.kGr8_s
        }];
      }
      return [{
        id: 0,
        name: "0"
      }, {
        id: 1,
        name: "1"
      }, {
        id: 2,
        name: "2"
      }, {
        id: 3,
        name: "3"
      }, {
        id: 4,
        name: "4"
      }, {
        id: 5,
        name: "5"
      }, {
        id: 6,
        name: "6"
      }, {
        id: 7,
        name: "7"
      }, {
        id: 8,
        name: "8"
      }, {
        id: 9,
        name: "9"
      }, {
        id: 10,
        name: "10"
      }, {
        id: 11,
        name: "11"
      }, {
        id: 12,
        name: "12"
      }];
    }
  }]);
  return CurriculumConstants;
}();
exports.CurriculumConstants = CurriculumConstants;

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefBookCtrl = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RefBookCtrl = /*#__PURE__*/function () {
  RefBookCtrl.$inject = ["pageContext", "$appLoader", "refBookRepository", "$uibModal"];
  /*@ngInject*/
  function RefBookCtrl(pageContext, $appLoader, refBookRepository, $uibModal) {
    var _this = this;
    _classCallCheck(this, RefBookCtrl);
    this.refBookRepository = refBookRepository;
    this.appLoader = $appLoader;
    this.uibModal = $uibModal;
    this.language = language;
    this.state = {
      dataReady: false,
      emptyData: false
    };
    this.data = {
      refType: null,
      checked: [],
      refTypes: [],
      refItems: []
    };
    pageContext.title = language.Generic.SetupSchool.kTitleRefBooks;
    refBookRepository.getRefs().then(function (refTypes) {
      _this.data.refTypes = _.map(refTypes, function (item) {
        item.id = item.refType + item.parameterId;
        return item;
      });
      _this.data.refType = refTypes[0];
    }).then(function () {
      _this.load();
    });
  }
  _createClass(RefBookCtrl, [{
    key: "toggleChecks",
    value: function toggleChecks(id) {
      var idx = this.data.checked.indexOf(id);
      if (idx > -1) {
        this.data.checked.splice(idx, 1);
      } else {
        this.data.checked.push(id);
      }
    }
  }, {
    key: "add",
    value: function add() {
      this.edit({
        name: "",
        shortName: ""
      });
    }
  }, {
    key: "edit",
    value: function edit(_refItem) {
      var _this2 = this;
      var modalInstance = this.uibModal.open({
        templateUrl: "/static/dist/app/school/orginfo/refbook/edit/template.html",
        controller: "EditRefItemCtrl as ctrl",
        resolve: {
          refType: function refType() {
            return _this2.data.refType;
          },
          refItem: function refItem() {
            return angular.copy(_refItem);
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.load();
      });
    }
  }, {
    key: "delete",
    value:
    //todo. обработку чекбокса

    function _delete() {
      var _this3 = this;
      $.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function () {
        _this3.refBookRepository.deleteRefItems(_this3.data.refType.refType, _this3.data.checked).then(function () {
          _this3.load();
        });
      });
    }
  }, {
    key: "load",
    value:
    //загрузка данных
    function load() {
      var _this4 = this;
      this.state.dataReady = false;
      this.refBookRepository.getRefItems(this.data.refType.refType, this.data.refType.parameterId).then(function (refItems) {
        _this4.data.checked = [];
        _this4.appLoader.hide();
        _this4.data.refItems = refItems;
        _this4.state.dataReady = true;
        _this4.state.emptyData = _this4.data.refItems.length === 0;
      });
    }
  }]);
  return RefBookCtrl;
}();
exports.RefBookCtrl = RefBookCtrl;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditRefItemCtrl = void 0;
var _netcityModalCtrl = __webpack_require__(18);
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
var EditRefItemCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  EditRefItemCtrl.$inject = ["$scope", "refBookRepository", "refType", "refItem", "$uibModalInstance", "$dialogs", "changeTracker"];
  _inherits(EditRefItemCtrl, _NetCityModalControll);
  var _super = _createSuper(EditRefItemCtrl);
  /*@ngInject*/
  function EditRefItemCtrl($scope, refBookRepository, refType, refItem, $uibModalInstance, $dialogs, changeTracker) {
    var _this;
    _classCallCheck(this, EditRefItemCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.refBookRepository = refBookRepository;
    _this.refType = refType;
    _this.refItem = refItem;
    _this.uibModalInstance = $uibModalInstance;
    _this.language = language;
    _this.data = {
      refType: refType,
      refItem: refItem
    };
    if (refItem.id) {
      _this.header = language.Generic.SetupSchool.kPageTitle_Edit + " \"" + refType.name + "\"";
    } else {
      _this.header = language.Generic.SetupSchool.kPageTitle_New + " \"" + refType.name + "\"";
    }
    return _this;
  }
  _createClass(EditRefItemCtrl, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.data.refItem.name.trim()) {
        alert("Необходимо заполнить полное название");
        return;
      }
      this.refBookRepository.saveRefItems(this.refType.refType, this.data.refItem, this.refType.parameterId).then(function (item) {
        if (!item) {
          return;
        }
        _this2.uibModalInstance.close(_this2.data.refItem);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.uibModalInstance.dismiss('cancel');
    }
  }]);
  return EditRefItemCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.EditRefItemCtrl = EditRefItemCtrl;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefBookRepository = void 0;
var _repository = __webpack_require__(20);
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
var RefBookRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(RefBookRepository, _BaseRepository);
  var _super = _createSuper(RefBookRepository);
  function RefBookRepository() {
    _classCallCheck(this, RefBookRepository);
    return _super.apply(this, arguments);
  }
  _createClass(RefBookRepository, [{
    key: "getRefs",
    value: function getRefs() {
      return this.$http.get("/webapi/refbook").then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getRefItems",
    value: function getRefItems(refType, parameterId) {
      var params = {};
      if (parameterId) {
        params.parameterId = parameterId;
      }
      return this.$http.get("/webapi/refbook/".concat(refType), {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "saveRefItems",
    value: function saveRefItems(refType, item, parameterId) {
      var _this = this;
      var params = {};
      if (parameterId) {
        params.parameterId = parameterId;
      }
      return this.$http.post("/webapi/refbook/".concat(refType), item, {
        params: params
      }).then(function () {
        _this.$alerts.success("Справочник успешно сохранён");
        return item;
      }, this.handleError);
    }
  }, {
    key: "deleteRefItems",
    value: function deleteRefItems(refType, id) {
      var _this2 = this;
      var params = {
        id: id
      };
      return this.$http["delete"]("/webapi/refbook/".concat(refType), {
        params: params
      }).then(function (response) {
        _this2.$alerts.success("Значения справочника успешно удалены");
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return RefBookRepository;
}(_repository.BaseRepository);
exports.RefBookRepository = RefBookRepository;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolSettingsComponent = void 0;
var _assignmentTypeWeights = __webpack_require__(30);
var _settingsProvider = __webpack_require__(31);
var _common = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var SettingsListCtrl = /*#__PURE__*/function () {
  SettingsListCtrl.$inject = ["pageContext", "$appLoader", "schoolSettingsRepository", "$uibModal", "$alerts", "$q", "$dialogs", "$longWork", "changeTracker", "appContext", "settingsProvider", "chatsRepository", "language", "curriculumConstants"];
  /*@ngInject*/
  function SettingsListCtrl(pageContext, $appLoader, schoolSettingsRepository, $uibModal, $alerts, $q, $dialogs, $longWork, changeTracker, appContext, settingsProvider, chatsRepository, language, curriculumConstants) {
    var _this = this;
    _classCallCheck(this, SettingsListCtrl);
    this.$appLoader = $appLoader;
    this.schoolSettingsRepository = schoolSettingsRepository;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.appContext = appContext;
    this.settingsProvider = settingsProvider;
    this.chatsRepository = chatsRepository;
    this.language = language;
    this.curriculumConstants = curriculumConstants;
    pageContext.title = this.language.MenuFolders.kFNSchoolSettings;
    settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (val) {
      _this.eesPfdoIntegration = val == _settingsProvider.PfdoIntegrationType.IRTechEes;
    });
    this.state = {
      dataReady: false,
      moduleChatsError: ""
    };
    this.data = {
      schoolSettings: {},
      grades: this.curriculumConstants.getAllPossibleGrades(appContext.funcType),
      funcType: appContext.funcType,
      windowsAuth: false,
      oldMinMark: null,
      oldMaxMark: null,
      vkAccessToken: null,
      vkGroupId: null
    };
    this.load();
  }
  _createClass(SettingsListCtrl, [{
    key: "load",
    value: function load() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var getSchoolSettings, getWindowsAuth, waits, getVkEduGroup;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.state.dataReady = false;
              this.state.moduleChatsError = "";
              _context.next = 4;
              return this.settingsProvider.ServerSettings.SystemSettings.ModuleChats();
            case 4:
              this.moduleChats = _context.sent;
              getSchoolSettings = this.schoolSettingsRepository.getSchoolSettings().then(function (settings) {
                _this2.data.schoolSettings = settings;
                _this2.data.oldMinMark = _this2.data.schoolSettings.minMark;
                _this2.data.oldMaxMark = _this2.data.schoolSettings.maxMark;
              });
              getWindowsAuth = this.schoolSettingsRepository.getWindowsAuth().then(function (windowsAuth) {
                _this2.data.windowsAuth = windowsAuth;
              });
              waits = [getSchoolSettings, getWindowsAuth];
              if (this.moduleChats) {
                this.data.vkAccessToken = null;
                this.data.vkGroupId = null;
                getVkEduGroup = this.chatsRepository.getVkEduGroup().then(function (result) {
                  if (result) {
                    _this2.data.vkAccessToken = result.vkAccessToken;
                    _this2.data.vkGroupId = result.vkGroupId;
                  }
                }, function (error) {
                  var _a;
                  $(document).trigger("closeProcessing");
                  _this2.state.moduleChatsError = (_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.message;
                });
                waits.push(getVkEduGroup);
              }
              ;
              this.$longWork.execute(this.$q.all(waits)).then(function () {
                _this2.state.dataReady = true;
                _this2.$appLoader.hide();
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "saveExecute",
    value: function saveExecute() {
      var _this3 = this;
      var saveSchoolSettings = this.schoolSettingsRepository.saveSchoolSettings(this.data.schoolSettings).then(function (result) {
        _this3.data.schoolSettings = angular.copy(result);
        _this3.data.oldMinMark = _this3.data.schoolSettings.minMark;
        _this3.data.oldMaxMark = _this3.data.schoolSettings.maxMark;
      });
      var saves = [saveSchoolSettings];
      if (this.moduleChats && !this.state.moduleChatsError) {
        var saveVkEduGroup = this.chatsRepository.editVkEduGroup(this.data.vkAccessToken, this.data.vkGroupId).then(function (result) {
          _this3.data.vkAccessToken = result.vkAccessToken;
          _this3.data.vkGroupId = result.vkGroupId;
        });
        saves.push(saveVkEduGroup);
      }
      this.$longWork.execute(this.$q.all(saves)).then(function () {
        _this3.changeTracker.clearDataChanges();
        _this3.$alerts.success(_this3.language.Generic.SchoolSettings.kTitleSettings + _this3.language.Common.kOfSchool + _this3.language.Generic.SchoolSettings.kSuccessfulSaved);
      });
    }
  }, {
    key: "save",
    value: function save(valid) {
      var _this4 = this;
      var juniorRange = {
        start: this.data.schoolSettings.juniorStepGrade.start,
        end: this.data.schoolSettings.juniorStepGrade.end
      };
      var middleRange = {
        start: this.data.schoolSettings.middleStepGrade.start,
        end: this.data.schoolSettings.middleStepGrade.end
      };
      var seniorRange = {
        start: this.data.schoolSettings.seniorStepGrade.start,
        end: this.data.schoolSettings.seniorStepGrade.end
      };
      if (valid && this.isValidRange(juniorRange) && this.isValidRange(middleRange) && this.isValidRange(seniorRange) && !this.isIntersectedGradesRanges() && !this.isGradesRangesWrongOrder() && !this.emptySpaceBetweenRanges()) {
        if (this.data.schoolSettings.minMark !== this.data.oldMinMark || this.data.schoolSettings.maxMark !== this.data.oldMaxMark) {
          this.$dialogs.confirm(this.language.Generic.SchoolSettings.kConChangeMarkRange).then(function () {
            _this4.saveExecute();
          });
        } else {
          this.saveExecute();
        }
      }
    }
  }, {
    key: "enabledMaxMark",
    value: function enabledMaxMark() {
      if (+this.settingsForm.MinMark.value && !this.data.schoolSettings.minMark) {
        this.data.schoolSettings.minMark = +this.settingsForm.MinMark.value;
      }
      if (+this.settingsForm.MaxMark.value && !this.data.schoolSettings.maxMark) {
        this.data.schoolSettings.maxMark = +this.settingsForm.MaxMark.value;
      }
      var minMark = Math.min(this.data.schoolSettings.minMark || +this.settingsForm.MinMark.value, 99);
      var maxMark = this.data.schoolSettings.maxMark || +this.settingsForm.MaxMark.value;
      return minMark && minMark >= 1 && minMark < 100 && maxMark <= minMark ? minMark + 1 : (maxMark || 1) > 100 ? (minMark || 1) + 1 : maxMark || 1;
    }
  }, {
    key: "enabledMinMark",
    value: function enabledMinMark() {
      if (+this.settingsForm.MaxMark.value && !this.data.schoolSettings.maxMark) {
        this.data.schoolSettings.maxMark = +this.settingsForm.MaxMark.value;
      }
      if (+this.settingsForm.MinMark.value && !this.data.schoolSettings.minMark) {
        this.data.schoolSettings.minMark = +this.settingsForm.MinMark.value;
      }
      var minMark = this.data.schoolSettings.minMark || +this.settingsForm.MinMark.value;
      var maxMark = Math.min(this.data.schoolSettings.maxMark || +this.settingsForm.MaxMark.value, 100);
      return maxMark && maxMark > 1 && maxMark <= 100 && minMark >= maxMark ? maxMark - 1 : Math.min(minMark, 99) || (maxMark || 100) - 1;
    }
  }, {
    key: "isValidRange",
    value: function isValidRange(range) {
      return range.end >= range.start;
    }
  }, {
    key: "isIntersectedOrInvalidRanges",
    value: function isIntersectedOrInvalidRanges(firstRange, secondRange) {
      return !(this.isValidRange(firstRange) && this.isValidRange(secondRange) && (firstRange.end < secondRange.start || secondRange.end < firstRange.start));
    }
  }, {
    key: "isIntersectedGradesRanges",
    value: function isIntersectedGradesRanges() {
      if (this.data.schoolSettings.juniorStepGrade && this.data.schoolSettings.middleStepGrade && this.data.schoolSettings.seniorStepGrade) {
        var juniorRange = {
          start: this.data.schoolSettings.juniorStepGrade.start,
          end: this.data.schoolSettings.juniorStepGrade.end
        };
        var middleRange = {
          start: this.data.schoolSettings.middleStepGrade.start,
          end: this.data.schoolSettings.middleStepGrade.end
        };
        var seniorRange = {
          start: this.data.schoolSettings.seniorStepGrade.start,
          end: this.data.schoolSettings.seniorStepGrade.end
        };
        return this.isValidRange(juniorRange) && this.isValidRange(middleRange) && this.isValidRange(seniorRange) && (this.isIntersectedOrInvalidRanges(juniorRange, middleRange) || this.isIntersectedOrInvalidRanges(juniorRange, seniorRange) || this.isIntersectedOrInvalidRanges(seniorRange, middleRange));
      } else {
        return false;
      }
    }
  }, {
    key: "isSchool",
    value: function isSchool() {
      return this.data.funcType == _common.FuncType.school;
    }
  }, {
    key: "emptySpaceBetweenRanges",
    value: function emptySpaceBetweenRanges() {
      if (this.data.schoolSettings.juniorStepGrade && this.data.schoolSettings.middleStepGrade && this.data.schoolSettings.seniorStepGrade) {
        return this.data.schoolSettings.juniorStepGrade.end !== this.data.schoolSettings.middleStepGrade.start - 1 || this.data.schoolSettings.middleStepGrade.end !== this.data.schoolSettings.seniorStepGrade.start - 1;
      } else {
        return false;
      }
    }
  }, {
    key: "isGradesRangesWrongOrder",
    value: function isGradesRangesWrongOrder() {
      if (this.data.schoolSettings.juniorStepGrade && this.data.schoolSettings.middleStepGrade && this.data.schoolSettings.seniorStepGrade) {
        return this.data.schoolSettings.juniorStepGrade.start >= this.data.schoolSettings.middleStepGrade.start || this.data.schoolSettings.juniorStepGrade.start >= this.data.schoolSettings.seniorStepGrade.start || this.data.schoolSettings.middleStepGrade.start >= this.data.schoolSettings.seniorStepGrade.start;
      } else {
        return false;
      }
    }
  }, {
    key: "weights",
    value: function weights() {
      var modalInstance = this.$uibModal.open({
        templateUrl: _assignmentTypeWeights.AssignmentTypeWeightsComponent.templateUrl,
        controller: _assignmentTypeWeights.AssignmentTypeWeightsComponent.controller,
        controllerAs: _assignmentTypeWeights.AssignmentTypeWeightsComponent.controllerAs,
        size: "md"
      });
      modalInstance.rendered.then(function () {});
      //modalInstance.result.then((options) => resolve(options));
    }
  }, {
    key: "changeEducContractBlank",
    value: function changeEducContractBlank() {
      var modalInstance = this.$uibModal.open({
        template: "",
        controller: _assignmentTypeWeights.AssignmentTypeWeightsComponent.controller,
        controllerAs: _assignmentTypeWeights.AssignmentTypeWeightsComponent.controllerAs,
        size: "md"
      });
    }
  }]);
  return SettingsListCtrl;
}();
var SchoolSettingsComponent = {
  controller: SettingsListCtrl,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/orginfo/settings/list/settingsList.component.html"
};
exports.SchoolSettingsComponent = SchoolSettingsComponent;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignmentTypeWeightsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(18);
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
var AssignmentTypeWeightsController = /*#__PURE__*/function (_NetCityModalControll) {
  AssignmentTypeWeightsController.$inject = ["$scope", "$uibModalInstance", "$alerts", "$q", "$appLoader", "$dialogs", "schoolSettingsRepository", "changeTracker", "appContext", "language"];
  _inherits(AssignmentTypeWeightsController, _NetCityModalControll);
  var _super = _createSuper(AssignmentTypeWeightsController);
  /*@ngInject*/
  function AssignmentTypeWeightsController($scope, $uibModalInstance, $alerts, $q, $appLoader, $dialogs, schoolSettingsRepository, changeTracker, appContext, language) {
    var _this;
    _classCallCheck(this, AssignmentTypeWeightsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$scope = $scope;
    _this.$uibModalInstance = $uibModalInstance;
    _this.$alerts = $alerts;
    _this.$q = $q;
    _this.$appLoader = $appLoader;
    _this.$dialogs = $dialogs;
    _this.schoolSettingsRepository = schoolSettingsRepository;
    _this.changeTracker = changeTracker;
    _this.appContext = appContext;
    _this.language = language;
    _this.header = language.Generic.SchoolSettings.kAssignmentTypeWeightsSetup;
    _this.data = {
      assignmentTypes: [],
      assignmentTypesWeights: [],
      weights: []
    };
    _this.state = {
      dataReady: false
    };
    _this.messages = {
      from1Before100: language.Generic.Messages.kIntFromBefore.replace(/\{(\d+)\}/g, function (match, index) {
        return Array.prototype.slice.call([0, 100], 0)[index];
      })
    };
    _this.load();
    return _this;
  }
  _createClass(AssignmentTypeWeightsController, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var valid = this.weightsForm.$valid;
      if (!valid) {
        return;
      }
      var data = this.data.weights.map(function (item) {
        return {
          assignmentTypeId: item.id,
          schoolId: +_this2.appContext.schoolId,
          weight: item.weight
        };
      });
      this.schoolSettingsRepository.saveAssignmentTypesWeights(data).then(function () {
        _this2.changeTracker.clearDataChanges($("div.modal.fade"));
        _this2.$alerts.success(_this2.language.Generic.Assignment.kAssignmentTypesWeightsWasSaved);
        _this2.cancel();
      });
    }
  }, {
    key: "getWeight",
    value: function getWeight(assignTypeId) {
      var typeWeightInfo = _.find(this.data.assignmentTypesWeights, function (wt) {
        return wt.assignmentTypeId === assignTypeId;
      }) || {
        assignmentTypeId: assignTypeId,
        weight: 10
      };
      return typeWeightInfo.weight;
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.state.dataReady = false;
      var getAssignmentTypes = this.schoolSettingsRepository.getAssignmentTypes().then(function (types) {
        _this3.data.assignmentTypes = types;
      });
      var getAssignmentTypesWeights = this.schoolSettingsRepository.getAssignmentTypesWeights().then(function (weights) {
        _this3.data.assignmentTypesWeights = weights;
      });
      var waits = [getAssignmentTypes, getAssignmentTypesWeights];
      this.$q.all(waits).then(function () {
        _this3.data.weights = _this3.data.assignmentTypes.map(function (item) {
          return {
            id: item.id,
            name: item.name,
            order: item.order,
            weight: _this3.getWeight(item.id)
          };
        }).sort(function (item1, item2) {
          return item1.order > item2.order ? 1 : item1.order < item2.order ? -1 : 0;
        });
        _this3.state.dataReady = true;
        _this3.$appLoader.hide();
      });
    }
  }]);
  return AssignmentTypeWeightsController;
}(_netcityModalCtrl.NetCityModalController);
var AssignmentTypeWeightsComponent = {
  controller: AssignmentTypeWeightsController,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/orginfo/settings/edit/assignmentTypeWeights.component.html"
};
exports.AssignmentTypeWeightsComponent = AssignmentTypeWeightsComponent;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsProvider = exports.PfdoIntegrationType = void 0;
var ServerSettingsInfo = _interopRequireWildcard(__webpack_require__(32));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SettingsCache = /*#__PURE__*/function () {
  function SettingsCache() {
    _classCallCheck(this, SettingsCache);
    this.cache = {
      // SystemSettings
      enableLessonMaps: undefined,
      moduleQA: {},
      // LocalSettings
      isDefaultLangRus: undefined
    };
  }
  _createClass(SettingsCache, [{
    key: "checkCache",
    value: function checkCache(settingName, extKey) {
      var cachedData = extKey ? this.cache[settingName][extKey] : this.cache[settingName];
      if (cachedData === undefined) {
        return undefined;
      }
      return cachedData;
    }
  }, {
    key: "putCache",
    value: function putCache(data, settingName, extKey) {
      if (extKey) {
        this.cache[settingName][extKey] = data;
      } else {
        this.cache[settingName] = data;
      }
    }
  }]);
  return SettingsCache;
}();
var CommonServerSettings = /*#__PURE__*/function () {
  function CommonServerSettings($http) {
    _classCallCheck(this, CommonServerSettings);
    this.$http = $http;
  }
  _createClass(CommonServerSettings, [{
    key: "AllowEditTimezoneInOo",
    value: function AllowEditTimezoneInOo() {
      return this.$http.get("/webapi/settings/common/allowEditTimezoneInOo").then(function (response) {
        return response.data;
      });
    }
  }]);
  return CommonServerSettings;
}();
var SystemSettings = /*#__PURE__*/function () {
  function SystemSettings($http, settingsCache, appContext) {
    _classCallCheck(this, SystemSettings);
    this.$http = $http;
    this.settingsCache = settingsCache;
    this.appContext = appContext;
  }
  _createClass(SystemSettings, [{
    key: "getSetting",
    value: function getSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getSettingByKey",
    value: function getSettingByKey(key) {
      return this.$http.get("/webapi/settings/" + key).then(function (response) {
        return response.data;
      });
    }
    // См. ServersController.GetSetting
  }, {
    key: "getBoolSetting",
    value: function getBoolSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data == "1";
      });
    }
  }, {
    key: "IsRegionEMForSchool",
    value: function IsRegionEMForSchool() {
      return this.getBoolSetting(ServerSettingsInfo.IsRegionEMForSchool);
    }
  }, {
    key: "LaIntegrationCourses",
    value: function LaIntegrationCourses() {
      return this.getBoolSetting(ServerSettingsInfo.LaIntegrationCourses);
    }
  }, {
    key: "EnableLessonMaps",
    value: function EnableLessonMaps() {
      var _this = this;
      var settingName = "enableLessonMaps";
      var cachedData = this.settingsCache.checkCache(settingName);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.getBoolSetting(ServerSettingsInfo.EnableLessonMaps).then(function (val) {
        _this.settingsCache.putCache(val, settingName);
        return val;
      }));
    }
  }, {
    key: "ModuleQA",
    value: function ModuleQA() {
      var _this2 = this;
      // В общем случае - недостаточно кэшировать только по названию этой настройки, т.к. модуль МСОКО может быть доступен одной школе, но недоступен другой (соседней),
      // и при этом может быть заход УО.
      var settingName = "moduleQA";
      var cachedData = this.settingsCache.checkCache(settingName, this.appContext.at);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.$http.get("/webapi/settings/ModuleQA").then(function (response) {
        _this2.settingsCache.putCache(response.data, settingName, _this2.appContext.at);
        return response.data;
      }));
    }
  }, {
    key: "ModuleDistanceLearning",
    value: function ModuleDistanceLearning() {
      return this.$http.get("/webapi/settings/moduleDistanceLearning").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ProjectHealthyChildren",
    value: function ProjectHealthyChildren() {
      return this.$http.get("/webapi/settings/projectHealthyChildren").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EditableDefaultPortfolioGroups",
    value: function EditableDefaultPortfolioGroups() {
      return this.$http.get("/webapi/settings/editableDefaultPortfolioGroups").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleFoodPay",
    value: function ModuleFoodPay() {
      return this.$http.get("/webapi/settings/moduleFoodPay").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleTalentStudents",
    value: function ModuleTalentStudents() {
      return this.$http.get("/webapi/settings/moduleTalentStudents").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleStaffAttest",
    value: function ModuleStaffAttest() {
      return this.$http.get("/webapi/settings/moduleStaffAttest").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleRegion",
    value: function ModuleRegion() {
      return this.$http.get("/webapi/settings/moduleRegion").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MinLoginLength",
    value: function MinLoginLength() {
      return this.getSettingByKey("minLoginLength");
    }
  }, {
    key: "SecureApi",
    value: function SecureApi() {
      return this.getBoolSetting(ServerSettingsInfo.SecureApi);
    }
  }, {
    key: "IntegrationPFDOType",
    value: function IntegrationPFDOType() {
      return this.$http.get("/webapi/settings/IntegrationPFDOType").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModulePfrIntegration",
    value: function ModulePfrIntegration() {
      return this.$http.get("/webapi/settings/ModulePfrIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleChats",
    value: function ModuleChats(config) {
      return this.$http.get("/webapi/settings/moduleChats", config).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "PfdoIntegrationDontRequireEmail",
    value: function PfdoIntegrationDontRequireEmail() {
      return this.$http.get("/webapi/settings/PfdoIntegrationDontRequireEmail").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "SoloIntegration",
    value: function SoloIntegration() {
      return this.$http.get("/webapi/settings/system-settings/SoloIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "GisRuoIntegration",
    value: function GisRuoIntegration() {
      return this.$http.get("/webapi/settings/gisRuoIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MyEducationIntegration",
    value: function MyEducationIntegration() {
      return this.$http.get("/webapi/settings/myEducationIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MobileAppAdPage",
    value: function MobileAppAdPage() {
      return this.$http.get("/webapi/settings/system-settings/MobileAppAdPage").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "JournalCorrection",
    value: function JournalCorrection() {
      return this.$http.get("/webapi/settings/JournalCorrection").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EditCertificatesDOOnlyByRegion",
    value: function EditCertificatesDOOnlyByRegion() {
      return this.getBoolSetting(ServerSettingsInfo.EditCertificatesDOOnlyByRegion);
    }
  }, {
    key: "PushNotificationsEnabled",
    value: function PushNotificationsEnabled() {
      return this.$http.get("/webapi/settings/system-settings/PushNotificationsEnabled").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EnableStudentsDataQuality",
    value: function EnableStudentsDataQuality() {
      return this.$http.get("/webapi/settings/system-settings/enableStudentsDataQuality").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleInlearnoIntegration",
    value: function ModuleInlearnoIntegration() {
      return this.$http.get("/webapi/settings/system-settings/moduleInlearnoIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleSchoolAwardEvents",
    value: function ModuleSchoolAwardEvents() {
      return this.$http.get("/webapi/settings/system-settings/moduleSchoolAwardEvents").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleNationOlympiad",
    value: function ModuleNationOlympiad() {
      return this.$http.get("/webapi/settings/system-settings/moduleNationOlympiad").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EnableCertificatesDo",
    value: function EnableCertificatesDo() {
      return this.$http.get("/webapi/settings/system-settings/enableCertificatesDo").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ExternalAccessEmUserToSchool",
    value: function ExternalAccessEmUserToSchool() {
      return this.$http.get("/webapi/settings/system-settings/externalAccessEmUserToSchool").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModulePoo",
    value: function ModulePoo() {
      return this.$http.get("/webapi/settings/system-settings/ModulePoo").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleMedSysIntegration",
    value: function ModuleMedSysIntegration() {
      return this.$http.get("/webapi/settings/system-settings/ModuleMedSysIntegration").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SystemSettings;
}();
var UserAuthorizationSettings = /*#__PURE__*/function () {
  function UserAuthorizationSettings($http) {
    _classCallCheck(this, UserAuthorizationSettings);
    this.$http = $http;
  }
  _createClass(UserAuthorizationSettings, [{
    key: "WindowsAuth",
    value: function WindowsAuth() {
      return this.$http.get("/webapi/settings/windowsAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EsiaAuth",
    value: function EsiaAuth() {
      return this.$http.get("/webapi/settings/esiaAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "IrtechAuth",
    value: function IrtechAuth() {
      return this.$http.get("/webapi/settings/irtechAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EsaAuth",
    value: function EsaAuth() {
      return this.$http.get("/webapi/settings/esaAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "QueueImportMode",
    value: function QueueImportMode() {
      return this.$http.get("/webapi/settings/queueImportMode").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ImportStaffFromOtherOrgs",
    value: function ImportStaffFromOtherOrgs() {
      return this.$http.get("/webapi/settings/importStaffFromOtherOrgs").then(function (response) {
        return response.data;
      });
    }
  }]);
  return UserAuthorizationSettings;
}();
var IntegrationSettings = /*#__PURE__*/function () {
  function IntegrationSettings($http) {
    _classCallCheck(this, IntegrationSettings);
    this.$http = $http;
  }
  _createClass(IntegrationSettings, [{
    key: "NetCityPooUrl",
    value: function NetCityPooUrl() {
      return this.$http.get("/webapi/settings/netCityPooUrl").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "NetCityPooManagementUrl",
    value: function NetCityPooManagementUrl() {
      return this.$http.get("/webapi/settings/netCityPooManagementUrl").then(function (response) {
        return response.data;
      });
    }
  }]);
  return IntegrationSettings;
}();
var SchoolInfoSettings = /*#__PURE__*/function () {
  function SchoolInfoSettings($http) {
    _classCallCheck(this, SchoolInfoSettings);
    this.$http = $http;
  }
  _createClass(SchoolInfoSettings, [{
    key: "RequireReasonChangeSchoolCard",
    value: function RequireReasonChangeSchoolCard() {
      return this.$http.get("/webapi/settings/schoolinfo-settings/requirereasonchangeschoolcard").then(function (response) {
        return response.data == "1";
      });
    }
  }, {
    key: "EM_MayEditExtraSchoolInfo",
    value: function EM_MayEditExtraSchoolInfo() {
      return this.$http.get("/webapi/settings/schoolinfo-settings/em_mayeditextraschoolinfo").then(function (response) {
        return response.data == "1";
      });
    }
  }]);
  return SchoolInfoSettings;
}();
var UserAccountsSettings = /*#__PURE__*/function () {
  function UserAccountsSettings($http) {
    _classCallCheck(this, UserAccountsSettings);
    this.$http = $http;
  }
  _createClass(UserAccountsSettings, [{
    key: "RequireParentBirthDate",
    value: function RequireParentBirthDate() {
      return this.$http.get("/webapi/settings/requireParentBirthDate").then(function (response) {
        return response.data;
      });
    }
  }]);
  return UserAccountsSettings;
}();
var SecuritySettings = /*#__PURE__*/function () {
  function SecuritySettings($http) {
    _classCallCheck(this, SecuritySettings);
    this.$http = $http;
  }
  _createClass(SecuritySettings, [{
    key: "MinPasswordLength",
    value: function MinPasswordLength() {
      return this.$http.get("/webapi/settings/minPasswordLength").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MinLoginLength",
    value: function MinLoginLength() {
      return this.$http.get("/webapi/settings/minLoginLength").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "RestrictNumericPasswords",
    value: function RestrictNumericPasswords() {
      return this.$http.get("/webapi/settings/restrictNumericPasswords").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MaxSessionIdleTime",
    value: function MaxSessionIdleTime() {
      return this.$http.get("/webapi/settings/maxSessionIdleTime").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SecuritySettings;
}();
var ServerSettings = /*#__PURE__*/_createClass(function ServerSettings($http, settingsCache, appContext) {
  _classCallCheck(this, ServerSettings);
  this.$http = $http;
  this.settingsCache = settingsCache;
  this.appContext = appContext;
  this.CommonServerSettings = new CommonServerSettings(this.$http);
  this.SystemSettings = new SystemSettings($http, settingsCache, appContext);
  this.UserAuthorizationSettings = new UserAuthorizationSettings($http);
  this.SchoolInfoSettings = new SchoolInfoSettings($http);
  this.UserAccountsSettings = new UserAccountsSettings($http);
});
var LocalSettings = /*#__PURE__*/function () {
  function LocalSettings($http, settingsCache, appContext) {
    _classCallCheck(this, LocalSettings);
    this.$http = $http;
    this.settingsCache = settingsCache;
    this.appContext = appContext;
  }
  _createClass(LocalSettings, [{
    key: "getSetting",
    value: function getSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getSettingByKey",
    value: function getSettingByKey(key) {
      return this.$http.get("/webapi/settings/" + key).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "RegExpAlphabet",
    value: function RegExpAlphabet() {
      return this.getSettingByKey("regExpAlphabet");
    }
  }, {
    key: "RegExpFio",
    value: function RegExpFio() {
      return this.getSettingByKey("regExpFio");
    }
  }, {
    key: "IsDefaultLangRus",
    value: function IsDefaultLangRus() {
      var _this3 = this;
      var settingName = "isDefaultLangRus";
      var cachedData = this.settingsCache.checkCache(settingName);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.getSettingByKey("defaultLanguage").then(function (res) {
        var val = res == "ru";
        _this3.settingsCache.putCache(val, settingName);
        return val;
      }));
    }
  }, {
    key: "FirstLetter",
    value: function FirstLetter() {
      return this.getSettingByKey("firstLetter");
    }
  }, {
    key: "LastLetter",
    value: function LastLetter() {
      return this.getSettingByKey("lastLetter");
    }
  }, {
    key: "PhoneStateCode",
    value: function PhoneStateCode() {
      return this.getSettingByKey("phoneStateCode");
    }
  }, {
    key: "PhoneNumberLength",
    value: function PhoneNumberLength() {
      return this.getSettingByKey("phoneNumberLength");
    }
  }, {
    key: "PhoneTemplate",
    value: function PhoneTemplate() {
      return this.getSettingByKey("phoneTemplate");
    }
  }]);
  return LocalSettings;
}();
var AppFlags = /*#__PURE__*/function () {
  function AppFlags($http) {
    _classCallCheck(this, AppFlags);
    this.$http = $http;
  }
  _createClass(AppFlags, [{
    key: "PersonData",
    value: function PersonData() {
      return this.$http.get("/webapi/appflags/persondata").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleSocialPassport",
    value: function ModuleSocialPassport() {
      return this.$http.get("/webapi/settings/ModuleSocialPassport").then(function (response) {
        return response.data;
      });
    }
  }]);
  return AppFlags;
}();
var SysInfo = /*#__PURE__*/function () {
  function SysInfo($http) {
    _classCallCheck(this, SysInfo);
    this.$http = $http;
  }
  _createClass(SysInfo, [{
    key: "HaveModuleAddSchool",
    value: function HaveModuleAddSchool() {
      return this.$http.get("/webapi/addschoolmodule").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SysInfo;
}();
var SettingsProvider = /*#__PURE__*/function () {
  SettingsProvider.$inject = ["$http", "appContext"];
  /*@ngInject*/
  function SettingsProvider($http, appContext) {
    _classCallCheck(this, SettingsProvider);
    this.$http = $http;
    this.appContext = appContext;
    this.SettingsCache = new SettingsCache();
    this.ServerSettings = new ServerSettings($http, this.SettingsCache, this.appContext);
    this.SecuritySettings = new SecuritySettings($http);
    this.IntegrationSettings = new IntegrationSettings($http);
    this.LocalSettings = new LocalSettings($http, this.SettingsCache, this.appContext);
    this.AppFlags = new AppFlags($http);
    this.SysInfo = new SysInfo($http);
  }
  _createClass(SettingsProvider, [{
    key: "UploadLimits",
    get: function get() {
      return this.$http.get("/webapi/attachments/uploadLimits").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SettingsProvider;
}();
exports.SettingsProvider = SettingsProvider;
var PfdoIntegrationType;
exports.PfdoIntegrationType = PfdoIntegrationType;
(function (PfdoIntegrationType) {
  /// <summary>
  /// Самарский ПФДО ИРТех
  /// </summary>
  PfdoIntegrationType["IRTechEes"] = "IRTechEes";
  /// <summary>
  /// Челябинский образовательный портал - Навигатор доп. образования
  /// </summary>
  PfdoIntegrationType["IRTech"] = "IRTech";
  /// <summary>
  /// ПФДО Славин (Волгоград, Томск) 
  /// </summary>
  PfdoIntegrationType["Slavin"] = "Slavin";
  /// <summary>
  /// Региональный Навигатор доп.образования "Навигатор-47"
  /// </summary>
  PfdoIntegrationType["InlearnoNavigator"] = "InlearnoNavigator";
})(PfdoIntegrationType || (exports.PfdoIntegrationType = PfdoIntegrationType = {}));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YaCountersOff = exports.YaCounterCode = exports.YaClassUrl = exports.WindowsAuth = exports.TrustedAppCode = exports.StaffAttestUrl = exports.StaffAttestSecret = exports.StaffAttestLogin = exports.ShowMnsForms = exports.ServAdminMail = exports.SecureApi = exports.SchoolCardUrl = exports.RestrictStudentsAndParents = exports.RestrictNumericPasswords = exports.RequireIdentityData = exports.RequireEsiaAdminLoginNever = exports.RequireEsiaAdminLoginFirstEntrance = exports.RequireEsiaAdminLoginEachEntrance = exports.RequireEsiaAdminLoginAfterChangePass = exports.RegionUrl = exports.ProxyAddress = exports.PopUpStartDate = exports.PopUpEndDate = exports.PopUpDisplayText = exports.PopUpButtonText = exports.PaidServicesUrl = exports.PFDOUserName = exports.PFDOPassword = exports.PFDOClientSecret = exports.PFDOClientId = exports.OpenAuthPublicKey = exports.OnOrderImportMode = exports.NoticeTitle = exports.NoticeStartDate = exports.NoticeEndDate = exports.NoticeDisplayText = exports.NoticeButtonText = exports.NetCitySpoUrl = exports.MsokoUrl = exports.ModuleTalentStudents = exports.ModuleStatReportsSchoolsCondition = exports.ModuleStatReports = exports.ModuleRegion = exports.ModuleQaSchoolsCondition = exports.ModuleQaEnabledForAll = exports.ModuleEServices = exports.MinLoginLength = exports.MailUser = exports.MailUseSsl = exports.MailPort = exports.MailPassword = exports.MailHost = exports.MailFrom = exports.MODULE_StaffAttest = exports.LaIntegrationCourses = exports.IsRegionEMForSchool = exports.IrtechAuth = exports.IpFilter = exports.IntegrationNewDiskTokens = exports.IntegrationNewDiskSchoolsCondition = exports.IntegrationNewDiskMainToken = exports.IntegrationNewDiskEnabledForAll = exports.IdInstall = exports.FiasAddressServiceUrl = exports.ExternalFiasAddressServiceUrl = exports.EsiaMainAuth = exports.EsiaLogoutUserPage = exports.EsiaLoginPage = exports.EsiaLinkUserPage = exports.EsiaButtonAuth = exports.EsiaAuth = exports.EnableStudentsDataQuality = exports.EnablePopUp = exports.EnableNotice = exports.EnableLessonMaps = exports.EducPortalUrl = exports.EducPortalApiUrl = exports.EditCertificatesDOOnlyByRegion = exports.EServicesUrl = exports.ContingentUrl = exports.ClientIdForSync = exports.BlockSimilars = exports.BlockFastInput = exports.BlockEsiaUserLogin = exports.BlockByIp = exports.BlockByEducOrgAndLogin = exports.AllowedReturnUrl = exports.Address = void 0;
var IdInstall = 0;
exports.IdInstall = IdInstall;
var Address = 1;
exports.Address = Address;
var ProxyAddress = 12;
exports.ProxyAddress = ProxyAddress;
var TrustedAppCode = 2;
exports.TrustedAppCode = TrustedAppCode;
var MailHost = 4;
exports.MailHost = MailHost;
var MailUseSsl = 10;
exports.MailUseSsl = MailUseSsl;
var MailPort = 5;
exports.MailPort = MailPort;
var MailUser = 6;
exports.MailUser = MailUser;
var MailPassword = 7;
exports.MailPassword = MailPassword;
var MailFrom = 8;
exports.MailFrom = MailFrom;
var ServAdminMail = 11;

// Настройки интеграции
exports.ServAdminMail = ServAdminMail;
var EServicesUrl = 101;
exports.EServicesUrl = EServicesUrl;
var ContingentUrl = 102;
exports.ContingentUrl = ContingentUrl;
var NetCitySpoUrl = 103;
exports.NetCitySpoUrl = NetCitySpoUrl;
var RegionUrl = 104;
exports.RegionUrl = RegionUrl;
var ClientIdForSync = 105;
exports.ClientIdForSync = ClientIdForSync;
var MsokoUrl = 106;
exports.MsokoUrl = MsokoUrl;
var YaCounterCode = 107;
exports.YaCounterCode = YaCounterCode;
var StaffAttestUrl = 109;
exports.StaffAttestUrl = StaffAttestUrl;
var StaffAttestLogin = 110;
exports.StaffAttestLogin = StaffAttestLogin;
var StaffAttestSecret = 111;
exports.StaffAttestSecret = StaffAttestSecret;
var FiasAddressServiceUrl = 112;
exports.FiasAddressServiceUrl = FiasAddressServiceUrl;
var ExternalFiasAddressServiceUrl = 114;
exports.ExternalFiasAddressServiceUrl = ExternalFiasAddressServiceUrl;
var EducPortalUrl = 115;
exports.EducPortalUrl = EducPortalUrl;
var EducPortalApiUrl = 121;
exports.EducPortalApiUrl = EducPortalApiUrl;
var PFDOClientId = 117;
exports.PFDOClientId = PFDOClientId;
var PFDOClientSecret = 118;
exports.PFDOClientSecret = PFDOClientSecret;
var PFDOUserName = 119;
exports.PFDOUserName = PFDOUserName;
var PFDOPassword = 120;

// Учетные записи пользователей
exports.PFDOPassword = PFDOPassword;
var BlockSimilars = 201;
exports.BlockSimilars = BlockSimilars;
var BlockFastInput = 202;
exports.BlockFastInput = BlockFastInput;
var OnOrderImportMode = 203;
exports.OnOrderImportMode = OnOrderImportMode;
var RequireIdentityData = 204;

// Настройки авторизации пользователей
exports.RequireIdentityData = RequireIdentityData;
var EsiaAuth = 301;
exports.EsiaAuth = EsiaAuth;
var EsiaLoginPage = 302;
exports.EsiaLoginPage = EsiaLoginPage;
var EsiaLogoutUserPage = 303;
exports.EsiaLogoutUserPage = EsiaLogoutUserPage;
var EsiaLinkUserPage = 304;
exports.EsiaLinkUserPage = EsiaLinkUserPage;
var IrtechAuth = 305;
exports.IrtechAuth = IrtechAuth;
var EsiaButtonAuth = 306;
exports.EsiaButtonAuth = EsiaButtonAuth;
var EsiaMainAuth = 307;
exports.EsiaMainAuth = EsiaMainAuth;
var WindowsAuth = 308;
exports.WindowsAuth = WindowsAuth;
var BlockEsiaUserLogin = 309;
exports.BlockEsiaUserLogin = BlockEsiaUserLogin;
var RequireEsiaAdminLoginEachEntrance = 310;
exports.RequireEsiaAdminLoginEachEntrance = RequireEsiaAdminLoginEachEntrance;
var RequireEsiaAdminLoginFirstEntrance = 326;
exports.RequireEsiaAdminLoginFirstEntrance = RequireEsiaAdminLoginFirstEntrance;
var RequireEsiaAdminLoginAfterChangePass = 311;
exports.RequireEsiaAdminLoginAfterChangePass = RequireEsiaAdminLoginAfterChangePass;
var RequireEsiaAdminLoginNever = 327;
exports.RequireEsiaAdminLoginNever = RequireEsiaAdminLoginNever;
var EnableNotice = 312;
exports.EnableNotice = EnableNotice;
var NoticeTitle = 316;
exports.NoticeTitle = NoticeTitle;
var NoticeDisplayText = 313;
exports.NoticeDisplayText = NoticeDisplayText;
var NoticeButtonText = 317;
exports.NoticeButtonText = NoticeButtonText;
var NoticeStartDate = 314;
exports.NoticeStartDate = NoticeStartDate;
var NoticeEndDate = 315;
exports.NoticeEndDate = NoticeEndDate;
var AllowedReturnUrl = 323;
exports.AllowedReturnUrl = AllowedReturnUrl;
var OpenAuthPublicKey = 325;

// Системные настройки (не отображаются в интерфейсе)
exports.OpenAuthPublicKey = OpenAuthPublicKey;
var ModuleQaEnabledForAll = 401;
exports.ModuleQaEnabledForAll = ModuleQaEnabledForAll;
var ModuleQaSchoolsCondition = 402;
exports.ModuleQaSchoolsCondition = ModuleQaSchoolsCondition;
var ModuleStatReports = 403;
exports.ModuleStatReports = ModuleStatReports;
var ModuleStatReportsSchoolsCondition = 404;
exports.ModuleStatReportsSchoolsCondition = ModuleStatReportsSchoolsCondition;
var IntegrationNewDiskEnabledForAll = 405;
exports.IntegrationNewDiskEnabledForAll = IntegrationNewDiskEnabledForAll;
var IntegrationNewDiskSchoolsCondition = 406;
exports.IntegrationNewDiskSchoolsCondition = IntegrationNewDiskSchoolsCondition;
var ShowMnsForms = 407;
exports.ShowMnsForms = ShowMnsForms;
var YaCountersOff = 408;
exports.YaCountersOff = YaCountersOff;
var ModuleRegion = 409;
exports.ModuleRegion = ModuleRegion;
var IsRegionEMForSchool = 410;
exports.IsRegionEMForSchool = IsRegionEMForSchool;
var ModuleEServices = 411;
exports.ModuleEServices = ModuleEServices;
var IntegrationNewDiskTokens = 412;
exports.IntegrationNewDiskTokens = IntegrationNewDiskTokens;
var IntegrationNewDiskMainToken = 413;
exports.IntegrationNewDiskMainToken = IntegrationNewDiskMainToken;
var PaidServicesUrl = 414;
exports.PaidServicesUrl = PaidServicesUrl;
var SchoolCardUrl = 415;
exports.SchoolCardUrl = SchoolCardUrl;
var YaClassUrl = 416;
exports.YaClassUrl = YaClassUrl;
var MODULE_StaffAttest = 417;
exports.MODULE_StaffAttest = MODULE_StaffAttest;
var ModuleTalentStudents = 418;
exports.ModuleTalentStudents = ModuleTalentStudents;
var RestrictStudentsAndParents = 419;
exports.RestrictStudentsAndParents = RestrictStudentsAndParents;
var EnableStudentsDataQuality = 420;
exports.EnableStudentsDataQuality = EnableStudentsDataQuality;
var LaIntegrationCourses = 422;
exports.LaIntegrationCourses = LaIntegrationCourses;
var EnableLessonMaps = 426;
exports.EnableLessonMaps = EnableLessonMaps;
var EditCertificatesDOOnlyByRegion = 434;

// Настройки безопасности
exports.EditCertificatesDOOnlyByRegion = EditCertificatesDOOnlyByRegion;
var IpFilter = 501;
exports.IpFilter = IpFilter;
var RestrictNumericPasswords = 502;
exports.RestrictNumericPasswords = RestrictNumericPasswords;
var BlockByIp = 503;
exports.BlockByIp = BlockByIp;
var BlockByEducOrgAndLogin = 504;
exports.BlockByEducOrgAndLogin = BlockByEducOrgAndLogin;
var MinLoginLength = 506; // Минимальная длина логина пользователя
exports.MinLoginLength = MinLoginLength;
var SecureApi = 510; // Признак включенной защиты api

// Настройки для всплывающего окна на экране входа
exports.SecureApi = SecureApi;
var EnablePopUp = 601;
exports.EnablePopUp = EnablePopUp;
var PopUpDisplayText = 602;
exports.PopUpDisplayText = PopUpDisplayText;
var PopUpButtonText = 603;
exports.PopUpButtonText = PopUpButtonText;
var PopUpStartDate = 604;
exports.PopUpStartDate = PopUpStartDate;
var PopUpEndDate = 605;
exports.PopUpEndDate = PopUpEndDate;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolSettingsRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var SchoolSettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  SchoolSettingsRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(SchoolSettingsRepository, _BaseRepository);
  var _super = _createSuper(SchoolSettingsRepository);
  /*@ngInject*/
  function SchoolSettingsRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, SchoolSettingsRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    return _this;
  }
  _createClass(SchoolSettingsRepository, [{
    key: "getSchoolSettings",
    value: function getSchoolSettings() {
      return this.$http.get("/webapi/school/settings", {
        params: {
          yearId: this.appContext.yearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveSchoolSettings",
    value: function saveSchoolSettings(schoolSettings) {
      return this.$http.post("/webapi/school/settings", schoolSettings).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getWindowsAuth",
    value: function getWindowsAuth() {
      return this.$http.get("/webapi/settings/windowsAuth").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAssignmentTypes",
    value: function getAssignmentTypes() {
      return this.$http.get("/webapi/grade/assignment/types").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAssignmentTypesWeights",
    value: function getAssignmentTypesWeights() {
      return this.$http.get("/webapi/grade/journal/assignments/types/weights").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAssignmentTypeWeight",
    value: function getAssignmentTypeWeight(typeId) {
      return this.$http.get("/webapi/grade/journal/assignments/types/".concat(typeId, "/weights")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveAssignmentTypesWeights",
    value: function saveAssignmentTypesWeights(weights) {
      return this.$http.post("/webapi/grade/journal/assignments/types/weights", weights).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SchoolSettingsRepository;
}(_baseRepository.BaseRepository);
exports.SchoolSettingsRepository = SchoolSettingsRepository;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(21);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaintenanceCtrl = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(36));
var Specialty = _interopRequireWildcard(__webpack_require__(37));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MaintenanceCtrl = /*#__PURE__*/function () {
  function MaintenanceCtrl(pageContext, $appLoader, $q, $alerts, maintenanceRepository, changeTracker) {
    _classCallCheck(this, MaintenanceCtrl);
    this.language = language;
    pageContext.title = language.Generic.Maintenance.kTitleMaintenance;
    pageContext.parent = null;
    this.readonly = appContext.readOnly || !appContext.hasAnyRight([Rights.arProfileEditSchoolInfo]);
    this.state = {
      dataReady: false
    };
    this.data = {
      maintenance: {}
    };
    this.specialty = Specialty;
    this.appLoader = $appLoader;
    this.q = $q;
    this.alerts = $alerts;
    this.repository = maintenanceRepository;
    this.changeTracker = changeTracker;
    this.load();
  }

  // загрузка данных
  _createClass(MaintenanceCtrl, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.state.dataReady = false;
      var getMaintenance = this.repository.getMaintenance().then(function (maintenance) {
        _this.data.maintenance = maintenance;
      });
      var queries = this.q.all([getMaintenance]);
      return queries.then(function () {
        _this.state.dataReady = true;
        _this.changeTracker.clearDataChanges();
        _this.appLoader.hide();
      });
    }
  }, {
    key: "checkDefects",
    value: function checkDefects(defectologist, isStaff) {
      var _this2 = this;
      if (defectologist.specialty.id !== this.specialty.defectologist) return true;
      var oligophren = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this2.specialty.oligophren;
      }).value();
      var surdo = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this2.specialty.surdo;
      }).value();
      var tiflo = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this2.specialty.tiflo;
      }).value();
      if (isStaff && defectologist.specNumber1 === 0 && (oligophren.specNumber1 !== 0 || surdo.specNumber1 !== 0 || tiflo.specNumber1 !== 0)) return false;
      if (!isStaff && defectologist.specNumber2 === 0 && (oligophren.specNumber2 !== 0 || surdo.specNumber2 !== 0 || tiflo.specNumber2 !== 0)) return false;
      return true;
    }
  }, {
    key: "checkMedicals",
    value: function checkMedicals(med, isStaff) {
      var _this3 = this;
      if (med.specialty.id !== this.specialty.med) return true;
      var pediatr = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this3.specialty.pediatr;
      }).value();
      var neurolog = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this3.specialty.neurolog;
      }).value();
      var ophthalmologist = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this3.specialty.ophthalmologist;
      }).value();
      var audiologist = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this3.specialty.audiologist;
      }).value();
      if (isStaff && med.specNumber1 === 0 && (pediatr.specNumber1 !== 0 || neurolog.specNumber1 !== 0 || ophthalmologist.specNumber1 !== 0 || audiologist.specNumber1 !== 0)) return false;
      if (!isStaff && med.specNumber2 === 0 && (pediatr.specNumber2 !== 0 || neurolog.specNumber2 !== 0 || ophthalmologist.specNumber2 !== 0 || audiologist.specNumber2 !== 0)) return false;
      return true;
    }
  }, {
    key: "save",
    value: function save(valid) {
      var _this4 = this;
      if (!valid) {
        return;
      }
      var defectologist = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this4.specialty.defectologist;
      }).value();
      var med = _.chain(this.data.maintenance).find(function (x) {
        return x.specialty.id === _this4.specialty.med;
      }).value();
      if (!(this.checkDefects(defectologist, true) && this.checkDefects(defectologist, false) && this.checkMedicals(med, true) && this.checkMedicals(med, false))) {
        return;
      }
      var processing = $.show.processing();
      this.repository.save(this.data.maintenance).then(function () {
        //this.load();
        processing.close();
        _this4.state.dataReady = true;
        _this4.changeTracker.clearDataChanges();
        _this4.alerts.success(language.Generic.Common.kDataSaved);
      }, function () {
        processing.close();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;
      this.load().then(function () {
        _this5.alerts.success(language.Generic.Common.kResetChanges);
      });
    }
  }]);
  return MaintenanceCtrl;
}();
exports.MaintenanceCtrl = MaintenanceCtrl;
MaintenanceCtrl.$inject = ["pageContext", "$appLoader", "$q", "$alerts", "maintenanceRepository", "changeTracker"];
module.exports = {
  MaintenanceCtrl: MaintenanceCtrl
};

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tiflo = exports.surdo = exports.social = exports.psychologist = exports.pediatr = exports.ophthalmologist = exports.oligophren = exports.neurolog = exports.med = exports.logopedist = exports.lfk = exports.defectologist = exports.audiologist = exports.afk = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу MaintainSpecialty.cs

var psychologist = 1;
exports.psychologist = psychologist;
var logopedist = 2;
exports.logopedist = logopedist;
var defectologist = 3;
exports.defectologist = defectologist;
var oligophren = 4;
exports.oligophren = oligophren;
var surdo = 5;
exports.surdo = surdo;
var tiflo = 6;
exports.tiflo = tiflo;
var lfk = 7;
exports.lfk = lfk;
var afk = 8;
exports.afk = afk;
var social = 9;
exports.social = social;
var med = 10;
exports.med = med;
var pediatr = 11;
exports.pediatr = pediatr;
var neurolog = 12;
exports.neurolog = neurolog;
var ophthalmologist = 13;
exports.ophthalmologist = ophthalmologist;
var audiologist = 14;
exports.audiologist = audiologist;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaintenanceRepository = void 0;
var _repository = __webpack_require__(20);
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
var MaintenanceRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(MaintenanceRepository, _BaseRepository);
  var _super = _createSuper(MaintenanceRepository);
  function MaintenanceRepository() {
    _classCallCheck(this, MaintenanceRepository);
    return _super.apply(this, arguments);
  }
  _createClass(MaintenanceRepository, [{
    key: "getMaintenance",
    value: function getMaintenance() {
      return this.$http.get("/webapi/school/maintenance").then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "save",
    value: function save(maintenance) {
      return this.$http.post("/webapi/school/maintenance", maintenance)["catch"](this.handleError);
    }
  }]);
  return MaintenanceRepository;
}(_repository.BaseRepository);
exports.MaintenanceRepository = MaintenanceRepository;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileIconComponent = exports.EducContractBlanks = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EducContractsController = /*#__PURE__*/function () {
  EducContractsController.$inject = ["fileAttachmentsServiceProvider", "$alerts", "appContext", "downloadService", "$scope"];
  /*@ngInject*/
  function EducContractsController(fileAttachmentsServiceProvider, $alerts, appContext, downloadService, $scope) {
    _classCallCheck(this, EducContractsController);
    this.$alerts = $alerts;
    this.downloadService = downloadService;
    this.$scope = $scope;
    var _filesExtensions = [".doc", ".docx", ".pdf", ".rtf"];
    this.faOptions = {
      multiple: false,
      showDescription: false,
      filesExtensions: function filesExtensions(uploadLimits) {
        return _filesExtensions;
      },
      uploadLimits: {
        fileSizeLimit: 5120 //5Mb
      }
    };

    this.editAttachmentsService = fileAttachmentsServiceProvider.getEditAttachmentsService(this.faOptions, {
      educContractPfdoBlankSchoolId: appContext.schoolId
    });
  }
  _createClass(EducContractsController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.schoolSettings.educContractPfdoBlank) {
        this.pfdoBlank = {
          id: this.schoolSettings.educContractPfdoBlank.id,
          isNew: false,
          description: this.schoolSettings.educContractPfdoBlank.description,
          name: this.schoolSettings.educContractPfdoBlank.name
        };
      }
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this = this;
      this.editAttachmentsService.attachFile().then(function (file) {
        _this.$alerts.success("Бланк договора успешно загружен");
        _this.pfdoBlank = file;
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this2 = this;
      this.editAttachmentsService["delete"](this.pfdoBlank).then(function () {
        _this2.$alerts.success("Бланк договора успешно удалён");
        _this2.pfdoBlank = null;
        _this2.$scope.$applyAsync();
      });
    }
  }, {
    key: "download",
    value: function download() {
      this.downloadService.downloadAttachment(this.pfdoBlank.id, this.pfdoBlank.name);
    }
  }]);
  return EducContractsController;
}();
var EducContractBlanks = {
  selector: "educContractBlanks",
  controller: EducContractsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/settings/educContractBlanks/educContractBlanks.component.html",
  bindings: {
    schoolSettings: "<"
  }
};
exports.EducContractBlanks = EducContractBlanks;
var FileIconComponent = {
  controller: /*#__PURE__*/function () {
    function FileIconController() {
      _classCallCheck(this, FileIconController);
    }
    _createClass(FileIconController, [{
      key: "$onInit",
      value: function $onInit() {
        this.extension = this.file.substr(this.file.lastIndexOf(".") + 1);
      }
    }]);
    return FileIconController;
  }(),
  selector: "fileIcon",
  template: "<img ng-if=\"$ctrl.extension\" src=\"/vendor/custom/img/files/{{$ctrl.extension}}.png\" valign=\"top\">",
  controllerAs: "$ctrl",
  bindings: {
    file: "<"
  }
};
exports.FileIconComponent = FileIconComponent;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityRolesSetupComponent = void 0;
var _securityrights = __webpack_require__(41);
var _gridRights = __webpack_require__(42);
var _panelExpand = __webpack_require__(43);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*@ngInject*/
var RightsListCtrl = /*#__PURE__*/function () {
  function RightsListCtrl(pageContext, $appLoader, $longWork, $alerts, $dialogs, $q, securityRightsRepository, settingsProvider, rightsDependenciesService, editLimitsService, changeTracker, language) {
    _classCallCheck(this, RightsListCtrl);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$q = $q;
    this.securityRightsRepository = securityRightsRepository;
    this.settingsProvider = settingsProvider;
    this.rightsDependenciesService = rightsDependenciesService;
    this.editLimitsService = editLimitsService;
    this.changeTracker = changeTracker;
    this.language = language;
    this.minTimeout = 3;
    pageContext.title = this.language.Generic.Secure.kTitleSecure;
    this.service = new _gridRights.GridRightsService();
    this.panelExpandHelper = new _panelExpand.PanelExpandHelper();
    this.data = {
      roles: null,
      role: null,
      setRights: null,
      schoolRights: null,
      groupsRights: null,
      logoutGroupSettings: null,
      gridInfo: null,
      selected: [],
      expanded: [],
      timeLimits: {
        journalEditTimeLimit: 0,
        totalsPastEditTimeLimit: 0,
        futureEditTimeLimit: 0
      },
      flags: {
        personData: false
      }
    };
    this.buildLogoutSettings();
    this.buildEvents();
    this.state = {
      dataReady: false,
      accessClosed: false
    };
    this.filterPanel = null;
    this.init();
  }
  _createClass(RightsListCtrl, [{
    key: "buildEvents",
    value: function buildEvents() {
      var _this = this;
      this.rightsDependenciesService.onSelect.on(function (right) {
        var _a;
        var roleRights = _this.getRoleRights();
        var subgroup = (_a = roleRights.find(function (x) {
          return x.key == right;
        })) === null || _a === void 0 ? void 0 : _a.subgroup;
        if (subgroup) {
          roleRights.filter(function (x) {
            var _a;
            return ((_a = x.subgroup) === null || _a === void 0 ? void 0 : _a.id) == subgroup.id;
          }).map(function (x) {
            return x.key;
          }).forEach(function (x) {
            return _this.unselect(x);
          });
        }
        _this.data.selected.push(right);
      });
    }
  }, {
    key: "buildLogoutSettings",
    value: function buildLogoutSettings() {
      var maxIdleTimeSetting = {
        title: this.language.Generic.Secure.kThrogh,
        value: null
      };
      maxIdleTimeSetting.validateRules = [new _securityrights.MinValidateRule(this.minTimeout, maxIdleTimeSetting, this.language.Generic.Secure.kIdleTimeMustNotBeLessThan.replace("%", this.minTimeout))];
      this.data.logoutGroupSettings = {
        id: "logout",
        title: this.language.Generic.Secure.kLogout,
        settings: [maxIdleTimeSetting]
      };
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      var promises = [];
      var schoolRightsReady = this.securityRightsRepository.getSchoolRights().then(function (schoolRights) {
        _this2.data.schoolRights = schoolRights;
      });
      promises.push(schoolRightsReady);
      promises.push(this.loadFlags());
      promises.push(this.loadTimeLimits());
      this.$q.all(promises).then(function () {
        _this2.filterPanelSettings = {
          url: "/webapi/securityrights/control/filter",
          initUrl: "/webapi/securityrights/control/initfilters",
          styles: {
            compact: false
          },
          events: {
            ready: function ready() {
              _this2.data.expanded = [];
              _this2.load();
            },
            emptyChoice: function emptyChoice() {
              _this2.$appLoader.hide();
            }
          }
        };
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var processing = this.$longWork.show();
      var fpValues = this.filterPanel.getValues();
      this.data.role = fpValues.ROLEID;
      var promises = [];
      promises.push(this.loadSetRights());
      promises.push(this.loadSchoolLogoutTime());
      // загрузка limits
      if (this.data.role == _securityrights.Role.Teacher) {
        promises.push(this.editLimitsService.load());
      }
      return this.$q.all(promises).then(function () {
        _this3.onReady();
        processing.close();
        _this3.$appLoader.hide();
      });
    }
  }, {
    key: "loadSetRights",
    value: function loadSetRights() {
      var _this4 = this;
      return this.securityRightsRepository.getSchoolRolesRights().then(function (rolesRights) {
        _this4.data.setRights = rolesRights;
      });
    }
  }, {
    key: "loadSchoolLogoutTime",
    value: function loadSchoolLogoutTime() {
      var _this5 = this;
      return this.securityRightsRepository.getSchoolLogoutTime(this.data.role).then(function (schoolLogoutTime) {
        _this5.data.logoutGroupSettings.settings[0].value = schoolLogoutTime;
      });
    }
  }, {
    key: "loadFlags",
    value: function loadFlags() {
      var _this6 = this;
      return this.settingsProvider.AppFlags.PersonData().then(function (personData) {
        return _this6.data.flags.personData = personData;
      });
    }
  }, {
    key: "loadTimeLimits",
    value: function loadTimeLimits() {
      var _this7 = this;
      var promises = [];
      var getMaxSessionIdleTime = this.settingsProvider.SecuritySettings.MaxSessionIdleTime().then(function (maxSessionIdleTime) {
        _this7.data.timeLimits.maxSessionIdleTime = maxSessionIdleTime;
      });
      promises.push(getMaxSessionIdleTime);
      return this.$q.all(promises);
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this8 = this;
      this.data.selected = this.data.setRights.filter(function (x) {
        return x.role == _this8.data.role;
      }).map(function (x) {
        return x.right;
      });
      var roleRights = this.getRoleRights();
      this.data.groupsRights = _.chain(roleRights).groupBy(function (x) {
        return x.group.id;
      }).map(function (groupRights) {
        return {
          group: groupRights.find(function (x) {
            return true;
          }).group,
          subgroups: _.chain(groupRights).groupBy(function (x) {
            var _a;
            return (_a = x.subgroup) === null || _a === void 0 ? void 0 : _a.id;
          }).map(function (subgroupRights) {
            return new _securityrights.SubgroupRights(subgroupRights.find(function (x) {
              return true;
            }).subgroup, subgroupRights);
          }).value()
        };
      }).value();
      this.data.groupsRights.push(this.data.logoutGroupSettings);
      this.restoreExpanded();
      this.data.gridInfo = this.service.getGridInfo(this.data.groupsRights);
      this.state.dataReady = true;
    }
  }, {
    key: "checkIncluded",
    value: function checkIncluded(dto) {
      var role = this.data.role;
      return dto.excludedRoles.indexOf(role) < 0 && (!dto.includedRoles || !dto.includedRoles.length || dto.includedRoles.indexOf(role) >= 0);
    }
  }, {
    key: "getRoleRights",
    value: function getRoleRights() {
      var _this9 = this;
      return this.data.schoolRights.filter(function (x) {
        return _this9.checkIncluded(x);
      }).filter(function (x) {
        return !x.rules.some(function (rule) {
          return !rule;
        });
      });
    }
  }, {
    key: "isGroupSettings",
    value: function isGroupSettings(group) {
      return !!group.settings;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this10 = this;
      if (this.changeTracker.isDataChanged()) {
        this.state.dataReady = false;
        this.rememberExpanded();
        this.$longWork.execute(this.loadSchoolLogoutTime().then(function () {
          _this10.onReady();
          _this10.$alerts.success(_this10.language.Generic.Common.kResetChanges);
        }));
      } else {
        this.$alerts.info(this.language.Generic.SetupSchoolUI.kDataNotModified);
      }
    }
  }, {
    key: "saveReady",
    value: function saveReady() {
      var _this11 = this;
      this.load().then(function () {
        _this11.changeTracker.clearDataChanges();
        _this11.$alerts.success(_this11.language.Generic.Secure.kRightsSaved);
      });
    }
  }, {
    key: "rememberExpanded",
    value: function rememberExpanded() {
      var _this12 = this;
      this.data.expanded = [];
      this.data.groupsRights.forEach(function (x) {
        var _a;
        if (x.expanded) {
          _this12.data.expanded.push(((_a = x.group) === null || _a === void 0 ? void 0 : _a.id) || x.id);
        }
      });
    }
  }, {
    key: "restoreExpanded",
    value: function restoreExpanded() {
      var _this13 = this;
      this.data.groupsRights.forEach(function (x) {
        var _a;
        x.expanded = _this13.data.expanded.indexOf(((_a = x.group) === null || _a === void 0 ? void 0 : _a.id) || x.id) >= 0;
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this14 = this;
      if (!this.data.flags.personData) {
        this.$alerts.info(this.language.Generic.Secure.kEditRightsInLocalAccess);
      } else if (this.validate()) {
        var args = {
          role: this.data.role,
          rights: this.data.selected,
          logoutTime: this.data.role == _securityrights.Role.Student ? this.getLogoutTime(60) : this.getLogoutTime(15)
        };
        this.rememberExpanded();
        var promises = [];
        promises.push(this.securityRightsRepository.saveSchoolRolesRights(args));
        // сохранение limits'ов
        if (this.data.role == _securityrights.Role.Teacher) {
          promises.push(this.editLimitsService.save());
        }
        // todo: load наверное много
        this.$longWork.execute(this.$q.all(promises).then(function () {
          return _this14.saveReady();
        }));
      }
    }
  }, {
    key: "getLogoutTime",
    value: function getLogoutTime(roleMaxSessionIdleTime) {
      var logoutTimeSetting = this.data.logoutGroupSettings.settings[0];
      if (logoutTimeSetting.value) {
        return logoutTimeSetting.value;
      }
      if (this.data.timeLimits.maxSessionIdleTime) {
        return roleMaxSessionIdleTime > this.data.timeLimits.maxSessionIdleTime ? this.data.timeLimits.maxSessionIdleTime : roleMaxSessionIdleTime;
      }
      return roleMaxSessionIdleTime;
    }
  }, {
    key: "validate",
    value: function validate() {
      return this.data.logoutGroupSettings.settings[0].validateRules.every(function (r) {
        return r.validate();
      });
    }
  }, {
    key: "setDefaultRigths",
    value: function setDefaultRigths() {
      var _this15 = this;
      if (!this.data.flags.personData) {
        this.$alerts.info(this.language.Generic.Secure.kEditRightsInLocalAccess);
      } else {
        this.$dialogs.confirm(this.language.Generic.Secure.kAreYouSureToSetByDefault + '\n\n' + this.language.Generic.Common.kMsgAreYouSure).then(function () {
          _this15.rememberExpanded();
          _this15.$longWork.execute(_this15.securityRightsRepository.setDefaultRights(_this15.data.role).then(function () {
            return _this15.saveReady();
          }));
        });
      }
    }
  }, {
    key: "closeAccess",
    value: function closeAccess() {
      var _this16 = this;
      var checkRights = [_securityrights.Right.arMovePoolStudents, _securityrights.Right.arReportsViewAdditionalReports, _securityrights.Right.arReportsViewAdministrativeReports, _securityrights.Right.arUsersEditAccountStaff, _securityrights.Right.arUsersEditAccountStudentsParents, _securityrights.Right.arUsersEditAccountStudentsParentsInClass, _securityrights.Right.arDeleteUsers, _securityrights.Right.arBrowseAccessJournal,
      // Сведения о сотруднике
      _securityrights.Right.arUsersEditStaff, _securityrights.Right.arUsersEditStaffMedInfo, _securityrights.Right.arShortInfoStaff,
      // Сведения об ученике и родителе
      _securityrights.Right.arUsersEditStudents, _securityrights.Right.arUsersEditStudentsPsyInfo, _securityrights.Right.arUsersEditStudentsMedInfo, _securityrights.Right.arShortInfoStudents, _securityrights.Right.arViewHealthMonitoring, _securityrights.Right.arEditHealthMonitoring];
      checkRights.forEach(function (x) {
        return _this16.unselect(x);
      });
      this.state.accessClosed = true;
      this.changeTracker.isDataChanged();
    }
  }, {
    key: "unselect",
    value: function unselect(right) {
      var index = this.data.selected.indexOf(right);
      if (index >= 0) {
        this.data.selected.splice(index, 1);
      }
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      this.panelExpandHelper.collapseAll();
      this.data.groupsRights.forEach(function (x) {
        return x.expanded = false;
      });
    }
  }, {
    key: "expandAll",
    value: function expandAll() {
      this.panelExpandHelper.expandAll();
      this.data.groupsRights.forEach(function (x) {
        return x.expanded = true;
      });
    }
  }]);
  return RightsListCtrl;
}();
var SecurityRolesSetupComponent = {
  controller: RightsListCtrl,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/orginfo/securityrights/securityrights.component.html"
};
exports.SecurityRolesSetupComponent = SecurityRolesSetupComponent;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupRights = exports.Role = exports.Right = exports.MinValidateRule = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Role;
exports.Role = Role;
(function (Role) {
  Role["Admin"] = "Admin";
  Role["Principal"] = "Principal";
  Role["Teacher"] = "Teacher";
  Role["Student"] = "Student";
  Role["Parent"] = "Parent";
  Role["MinorStaff"] = "MinorStaff";
  Role["Secretary"] = "Secretary";
  Role["MedicalStaff"] = "MedicalStaff";
  Role["Psychologist"] = "Psychologist";
  Role["SpecialistStaff"] = "SpecialistStaff";
  Role["EmAdmin"] = "EmAdmin";
  Role["EMHDEM"] = "EMHDEM";
  Role["EmOFREM"] = "EmOFREM";
  Role["EmOper"] = "EmOper";
  Role["EmCoordOD"] = "EmCoordOD";
  Role["EmCoordMer"] = "EmCoordMer";
})(Role || (exports.Role = Role = {}));
var Right;
exports.Right = Right;
(function (Right) {
  Right["arProfileEditSchoolInfo"] = "arProfileEditSchoolInfo";
  Right["arProfileViewSchoolInfo"] = "arProfileViewSchoolInfo";
  Right["arProfileEditRegionalSettings"] = "arProfileEditRegionalSettings";
  Right["arProfileDefineSecurityRoles"] = "arProfileDefineSecurityRoles";
  Right["arEditReferenceBook"] = "arEditReferenceBook";
  Right["arEditSchoolSettings"] = "arEditSchoolSettings";
  // Редактировать все сведения о сотрудниках
  Right["arUsersEditStaff"] = "arUsersEditStaff";
  Right["arUsersEditStaffMedInfo"] = "arUsersEditStaffMedInfo";
  // Редактировать все сведения об учениках и родителях
  Right["arUsersEditStudents"] = "arUsersEditStudents";
  Right["arUsersEditStudentsMedInfo"] = "arUsersEditStudentsMedInfo";
  Right["arUsersEditStudentsPsyInfo"] = "arUsersEditStudentsPsyInfo";
  // Редактировать имена пользователей и пароли сотрудников
  Right["arUsersEditAccountStaff"] = "arUsersEditAccountStaff";
  // Редактировать имена пользователей и пароли учеников и родителей
  Right["arUsersEditAccountStudentsParents"] = "arUsersEditAccountStudentsParents";
  Right["arUsersEditAccountStudentsParentsInClass"] = "arUsersEditAccountStudentsParentsInClass";
  Right["arCreateCloseEditYear"] = "arCreateCloseEditYear";
  Right["arSchoolSubjects"] = "arSchoolSubjects";
  Right["arCreateEditTerm"] = "arCreateEditTerm";
  Right["arEditSchoolTermTypes"] = "arEditSchoolTermTypes";
  Right["arMoveBookView"] = "arMoveBookView";
  Right["arMoveBookEdit"] = "arMoveBookEdit";
  Right["arMovePoolStudents"] = "arMovePoolStudents";
  Right["arMovePoolStaff"] = "arMovePoolStaff";
  Right["arSchoolDocsView"] = "arSchoolDocsView";
  Right["arSchoolDocsEdit"] = "arSchoolDocsEdit";
  Right["arClassMgmViewClassSubjAll"] = "arClassMgmViewClassSubjAll";
  Right["arClassMgmCreateClass"] = "arClassMgmCreateClass";
  Right["arClassMgmEditSubjects"] = "arClassMgmEditSubjects";
  Right["arClassMgmEnrollClass"] = "arClassMgmEnrollClass";
  // Право определять мероприятия в своём классе/группе>
  Right["arClassMgmPostClassEventSelf"] = "arClassMgmPostClassEventSelf";
  // Право определять мероприятия во всех классах/группах
  Right["arClassMgmPostClassEventAll"] = "arClassMgmPostClassEventAll";
  Right["arCurrMgmViewSelf"] = "arCurrMgmViewSelf";
  Right["arCurrMgmViewAll"] = "arCurrMgmViewAll";
  Right["arCurrMgmCreate"] = "arCurrMgmCreate";
  Right["arCurrMgmCreateAll"] = "arCurrMgmCreateAll";
  Right["arAddLA"] = "arAddLA";
  Right["arCalendarViewSelf"] = "arCalendarViewSelf";
  Right["arCalendarViewAll"] = "arCalendarViewAll";
  Right["arCalendarCreateCalendar"] = "arCalendarCreateCalendar";
  // Определять мероприятия ОО, каникулы, праздники
  Right["arPostSchoolEvent"] = "arPostSchoolEvent";
  Right["arViewAwardEvents"] = "arViewAwardEvents";
  Right["arPostAwardEvents"] = "arPostAwardEvents";
  Right["arEditAwardEventMembers"] = "arEditAwardEventMembers";
  Right["arViewSelfAwardEvents"] = "arViewSelfAwardEvents";
  Right["arSelfRegisterForAwardEvents"] = "arSelfRegisterForAwardEvents";
  Right["arEditSelfAwardEventResults"] = "arEditSelfAwardEventResults";
  Right["arJournalViewSelf"] = "arJournalViewSelf";
  Right["arJournalViewAll"] = "arJournalViewAll";
  Right["arJournalEditSelf"] = "arJournalEditSelf";
  Right["arJournalEditAll"] = "arJournalEditAll";
  Right["arJournalEditHAOnlyOnFuture"] = "arJournalEditHAOnlyOnFuture";
  Right["arTotalsViewSelf"] = "arTotalsViewSelf";
  Right["arTotalsViewAll"] = "arTotalsViewAll";
  Right["arTotalsEditSelf"] = "arTotalsEditSelf";
  Right["arTotalsEditAll"] = "arTotalsEditAll";
  // Задавать настройки учебных курсов
  Right["arLASetPolicies"] = "arLASetPolicies";
  // Задавать оценочные шкалы
  Right["arLACreateGradingScales"] = "arLACreateGradingScales";
  // Просматривать материал учебных курсов
  Right["arLAViewMaterials"] = "arLAViewMaterials";
  // Редактировать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAEditSelf"] = "arLAEditSelf";
  // Просматривать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAViewSelf"] = "arLAViewSelf";
  // Просматривать задания и оценки по учебным курсам для всех групп/классов/объединений
  Right["arLAViewAll"] = "arLAViewAll";
  // Просмотр отчетов для своих групп/классов/объединений
  Right["arReportsForAssignedClass"] = "arReportsForAssignedClass";
  // Просматривать отчеты во всех группах/классах/объединениях
  Right["arReportsForAllClasses"] = "arReportsForAllClasses";
  // Просматривать отчеты в своей группе/классе/объединении
  Right["arReportsViewForAssignedClass"] = "arReportsViewForAssignedClass";
  // Просматривать дополнительные отчеты
  Right["arReportsViewAdditionalReports"] = "arReportsViewAdditionalReports";
  // Использовать конструктор отчетов
  Right["arReportsUseReportConstructor"] = "arReportsUseReportConstructor";
  // Просмотр административных отчётов
  Right["arReportsViewAdministrativeReports"] = "arReportsViewAdministrativeReports";
  Right["arAnnouncementView"] = "arAnnouncementView";
  Right["arAnnouncementPost"] = "arAnnouncementPost";
  Right["arMessagesSendReceive"] = "arMessagesSendReceive";
  Right["arForumSendReceive"] = "arForumSendReceive";
  Right["arForumEdit"] = "arForumEdit";
  Right["arAssignmentsViewComplete"] = "arAssignmentsViewComplete";
  Right["arShortInfoStaff"] = "arShortInfoStaff";
  Right["arShortInfoStudents"] = "arShortInfoStudents";
  Right["arEditInfoSelf"] = "arEditInfoSelf";
  Right["arEnrollSelf"] = "arEditInfoSelf";
  Right["arDeleteUsers"] = "arDeleteUsers";
  Right["arEditSchoolResources"] = "arEditSchoolResources";
  Right["arSetPhoto"] = "arSetPhoto";
  Right["arBrowseResultsEGEAllClasses"] = "arBrowseResultsEGEAllClasses";
  Right["arBrowseResultsEGEHisClassesOrSubjects"] = "arBrowseResultsEGEHisClassesOrSubjects";
  Right["arSchoolPublicDocsView"] = "arSchoolPublicDocsView";
  Right["arBrowseStatReports"] = "arBrowseStatReports";
  Right["arFillStatReports"] = "arFillStatReports";
  Right["arBrowseAccessJournal"] = "arBrowseAccessJournal";
  Right["arUserStat"] = "arUserStat";
  /* Индивидуальная поддержка обучающихся */
  Right["arIndividualSupportStudentsReestrView"] = "arIndividualSupportStudentsReestrView";
  Right["arAddIndividualSupportStudents"] = "arAddIndividualSupportStudents";
  Right["arIndividualSupportMeasuresEditAll"] = "arIndividualSupportMeasuresEditAll";
  Right["arIndividualSupportMeasuresEditSelf"] = "arIndividualSupportMeasuresEditSelf";
  // Просматривать отчеты по детям с особыми образовательными потребностями
  Right["arReportsViewSpecialEducNeeds"] = "arReportsViewSpecialEducNeeds";
  Right["arViewHealthMonitoring"] = "arViewHealthMonitoring";
  Right["arEditHealthMonitoring"] = "arEditHealthMonitoring";
  Right["arViewFoodPayOrders"] = "arViewFoodPayOrders";
  Right["arEditFoodPayOrders"] = "arEditFoodPayOrders";
  Right["arEditFoodPayStudentOrdersAll"] = "arEditFoodPayStudentOrdersAll";
  Right["arEditFoodPayStudentOrdersSelf"] = "arEditFoodPayStudentOrdersSelf";
  Right["arEditFoodPayBalanceAll"] = "arEditFoodPayBalanceAll";
  Right["arEditFoodPayBalanceSelf"] = "arEditFoodPayBalanceSelf";
  Right["arPostFoodPayStudentOrders"] = "arPostFoodPayStudentOrders";
  Right["arFoodPayPayment"] = "arFoodPayPayment";
  // #17155. EM rights.
  Right["arEMUsersView"] = "arEMUsersView";
  Right["arEMUsersEdit"] = "arEMUsersEdit";
  Right["arEMEventsView"] = "arEMEventsView";
  Right["arEMEventsEdit"] = "arEMEventsEdit";
  Right["arEMReports"] = "arEMReports";
  Right["arEMPersonDataReports"] = "arEMPersonDataReports";
  Right["arEMAddReportsView"] = "arEMAddReportsView";
  Right["arEMAddReportsEdit"] = "arEMAddReportsEdit";
  Right["arEMMovement"] = "arEMMovement";
  Right["arEMStats"] = "arEMStats";
  Right["arEMEgeView"] = "arEMEgeView";
  Right["arEMEgeImport"] = "arEMEgeImport";
  Right["arEMMsoko"] = "arEMMsoko";
  Right["arEMDouPayNormView"] = "arEMDouPayNormView";
  Right["arEMDouPayNormEdit"] = "arEMDouPayNormEdit";
  Right["arEMCuratorsODView"] = "arEMCuratorsODView";
  Right["arEMCuratorsODEdit"] = "arEMCuratorsODEdit";
  Right["arEMODView"] = "arEMODView";
  Right["arEMODEdit"] = "arEMODEdit";
  Right["arEMEventsMembersView"] = "arEMEventsMembersView";
  Right["arEMEventsMembersEdit"] = "arEMEventsMembersEdit";
})(Right || (exports.Right = Right = {}));
// подгруппа прав
var SubgroupRights = /*#__PURE__*/function () {
  function SubgroupRights(subgroup, rights) {
    _classCallCheck(this, SubgroupRights);
    this.subgroup = subgroup;
    this.rights = rights;
    this.prepare();
  }
  _createClass(SubgroupRights, [{
    key: "prepare",
    value: function prepare() {
      if (this.isList()) {
        this.rights = this.rights.sort(function (a, b) {
          return a.order - b.order;
        });
      }
    }
  }, {
    key: "isList",
    value: function isList() {
      return !!this.subgroup && this.rights.length > 1 || this.rights.length == 1 && this.rights[0].key == Right.arIndividualSupportMeasuresEditSelf;
    }
  }]);
  return SubgroupRights;
}();
exports.SubgroupRights = SubgroupRights;
var MinValidateRule = /*#__PURE__*/function () {
  function MinValidateRule(min, setting, message) {
    _classCallCheck(this, MinValidateRule);
    this.min = min;
    this.setting = setting;
    this.message = message;
  }
  _createClass(MinValidateRule, [{
    key: "validate",
    value: function validate() {
      return this.setting.value >= this.min;
    }
  }]);
  return MinValidateRule;
}();
exports.MinValidateRule = MinValidateRule;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridRightsService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GridRightsService = /*#__PURE__*/function () {
  function GridRightsService() {
    _classCallCheck(this, GridRightsService);
  }
  _createClass(GridRightsService, [{
    key: "getGridInfo",
    value: function getGridInfo(groups) {
      // todo: жестко задается количество столбцов
      var gridInfo = {
        cols: 3,
        colRows: null,
        gridGroups: []
      };
      this.initMaxItems(groups.length, gridInfo);
      var startIndex = 0,
        i = 0;
      while (i < gridInfo.cols) {
        var rows = gridInfo.colRows[i];
        if (startIndex > groups.length - 1) break;
        var endIndex = startIndex + rows > groups.length ? groups.length : startIndex + rows;
        gridInfo.gridGroups.push(groups.slice(startIndex, endIndex));
        startIndex += rows;
        i++;
      }
      return gridInfo;
    }
  }, {
    key: "initMaxItems",
    value: function initMaxItems(groupsCount, gridInfo) {
      var div = groupsCount % gridInfo.cols;
      var minRows = (groupsCount - div) / gridInfo.cols;
      gridInfo.colRows = [minRows, minRows, minRows];
      if (div == 1) {
        gridInfo.colRows[0] += 1;
      } else if (div == 2) {
        gridInfo.colRows[0] += 1;
        gridInfo.colRows[1] += 1;
      }
    }
  }]);
  return GridRightsService;
}();
exports.GridRightsService = GridRightsService;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelExpandHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PanelExpandHelper = /*#__PURE__*/function () {
  function PanelExpandHelper() {
    _classCallCheck(this, PanelExpandHelper);
  }
  _createClass(PanelExpandHelper, [{
    key: "expandAll",
    value: function expandAll() {
      $(".panel-collapse").collapse("show");
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      $(".panel-collapse").collapse("hide");
    }
  }]);
  return PanelExpandHelper;
}();
exports.PanelExpandHelper = PanelExpandHelper;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnouncementsRepository = void 0;
var _repository = __webpack_require__(20);
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
var AnnouncementsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AnnouncementsRepository, _BaseRepository);
  var _super = _createSuper(AnnouncementsRepository);
  function AnnouncementsRepository() {
    _classCallCheck(this, AnnouncementsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AnnouncementsRepository, [{
    key: "getAll",
    value: function getAll() {
      return this.$http.get("/webapi/announcements", {
        params: {
          take: -1
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEdit",
    value: function getEdit(id) {
      return this.$http.get("/webapi/announcements/edit", {
        params: {
          id: id
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolRoles",
    value: function getSchoolRoles(language) {
      return this.$http.get("/webapi/refs/schoolroles", {
        params: {
          language: language
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.$http["delete"]("/webapi/announcements", {
        params: {
          id: id
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "save",
    value: function save(editAnnounce) {
      return this.$http.post("/webapi/announcements", editAnnounce).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return AnnouncementsRepository;
}(_repository.BaseRepository);
exports.AnnouncementsRepository = AnnouncementsRepository;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityRightsRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var SecurityRightsRepository = /*#__PURE__*/function (_BaseRepository) {
  SecurityRightsRepository.$inject = ["$http", "$dialogs", "$longWork"];
  _inherits(SecurityRightsRepository, _BaseRepository);
  var _super = _createSuper(SecurityRightsRepository);
  /*@ngInject*/
  function SecurityRightsRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, SecurityRightsRepository);
    return _super.call(this, $http, $dialogs, $longWork);
  }
  _createClass(SecurityRightsRepository, [{
    key: "getSchoolRolesRights",
    value: function getSchoolRolesRights() {
      return this.$http.get("/webapi/securityrights/rolesrights").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveSchoolRolesRights",
    value: function saveSchoolRolesRights(args) {
      var data = {
        role: args.role,
        rights: args.rights,
        logoutTime: args.logoutTime
      };
      return this.$http.post("/webapi/securityrights/rolesrights", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setDefaultRights",
    value: function setDefaultRights(role) {
      return this.$http.post("/webapi/securityrights/defaultrights", null, {
        params: {
          role: role
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolRights",
    value: function getSchoolRights() {
      return this.$http.get("/webapi/refs/schoolrights").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolLogoutTime",
    value: function getSchoolLogoutTime(role) {
      return this.$http.get("/webapi/securityrights/schoolLogoutTime", {
        params: {
          role: role
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getJournalEditTimeLimit",
    value: function getJournalEditTimeLimit() {
      return this.$http.get("/webapi/securityrights/journalEditTimeLimit").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTotalsPastEditTimeLimit",
    value: function getTotalsPastEditTimeLimit() {
      return this.$http.get("/webapi/securityrights/totalsPastEditTimeLimit").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFutureEditTimeLimit",
    value: function getFutureEditTimeLimit(futureForTotals) {
      var params = {};
      if (futureForTotals || futureForTotals == false) {
        params.futureForTotals = futureForTotals;
      }
      return this.$http.get("/webapi/securityrights/futureEditTimeLimit", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SecurityRightsRepository;
}(_baseRepository.BaseRepository);
exports.SecurityRightsRepository = SecurityRightsRepository;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupRightsComponent = void 0;
var _securityrights = __webpack_require__(41);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GroupRightsController = /*#__PURE__*/function () {
  GroupRightsController.$inject = ["appContext", "editLimitsService"];
  /*@ngInject*/
  function GroupRightsController(appContext, editLimitsService) {
    _classCallCheck(this, GroupRightsController);
    this.appContext = appContext;
    this.editLimitsService = editLimitsService;
  }
  _createClass(GroupRightsController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.showEditLimits()) {
        this.editLimitsData = this.editLimitsService.data;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.group.expanded = !this.group.expanded;
    }
  }, {
    key: "showEditLimits",
    value: function showEditLimits() {
      var _a;
      return ((_a = this.group.group) === null || _a === void 0 ? void 0 : _a.id) == 8 && this.appContext.funcType != 1 && this.role == _securityrights.Role.Teacher;
    }
  }]);
  return GroupRightsController;
}();
var GroupRightsComponent = {
  selector: "groupRights",
  controller: GroupRightsController,
  controllerAs: "ctrl",
  template: "\n\t\t<ns-panel panel-id=\"{{ctrl.group.group.id}}\" class=\"default\" title=\"{{ctrl.group.group.name}}\" expanded=\"ctrl.group.expanded\" toggle=\"ctrl.toggle()\">\n\t\t\t<subgroup-rights ng-repeat=\"subgroup in ctrl.group.subgroups\" subgroup=\"subgroup\" selected=\"ctrl.selected\" role=\"ctrl.role\"></subgroup-rights>\n\t\t\t<div ng-if=\"ctrl.showEditLimits()\">\n\t\t\t\t<edit-limits \n\t\t\t\t\tresults-attendance-past-edit-days =\"ctrl.editLimitsData.resultsAttendancePastEdit.days\" \n\t\t\t\t\tresults-attendance-past-edit-checked=\"ctrl.editLimitsData.resultsAttendancePastEdit.checked\"\n\t\t\t\t\tresults-attendance-past-edit-actual=\"ctrl.editLimitsData.resultsAttendancePastEdit.actual\"\n\t\t\t\t\ttotals-past-edit-days=\"ctrl.editLimitsData.totalsPastEdit.days\" \n\t\t\t\t\ttotals-past-edit-checked=\"ctrl.editLimitsData.totalsPastEdit.checked\"\n\t\t\t\t\ttotals-past-edit-actual=\"ctrl.editLimitsData.totalsPastEdit.actual\"\n\t\t\t\t\tfuture-edit-days=\"ctrl.editLimitsData.futureEdit.days\"\n\t\t\t\t\tfuture-edit-checked=\"ctrl.editLimitsData.futureEdit.checked\"\n\t\t\t\t\tfuture-edit-actual=\"ctrl.editLimitsData.futureEdit.actual\"\n\t\t\t\t></edit-limits>\n\t\t\t</div>\n\t\t</ns-panel>",
  bindings: {
    group: "=",
    selected: "=",
    role: "="
  }
};
exports.GroupRightsComponent = GroupRightsComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupRightsComponent = void 0;
var _securityrights = __webpack_require__(41);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubgroupRightsController = /*#__PURE__*/function () {
  function SubgroupRightsController(language, rightsDependenciesService) {
    _classCallCheck(this, SubgroupRightsController);
    this.language = language;
    this.rightsDependenciesService = rightsDependenciesService;
    // нередактируемые права
    this.nonEditableRights = [];
  }
  _createClass(SubgroupRightsController, [{
    key: "$onInit",
    value: function $onInit() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.nonEditableRights = this.getNonEditableRights();
      if (this.nonEditableRights.length) {
        var _this$selected;
        // нужно добавить
        var added = this.nonEditableRights.filter(function (x) {
          return x.value;
        }).filter(function (x) {
          return _this.selected.indexOf(x.right) == -1;
        }).map(function (x) {
          return x.right;
        });
        (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(added));
      }
      // сервис зависимостей прав
      this.rightsDependenciesService.resolveDependencies(this.selected);
    }
  }, {
    key: "getNonEditableRights",
    value: function getNonEditableRights() {
      if (this.role == _securityrights.Role.Admin) {
        return [{
          right: _securityrights.Right.arProfileDefineSecurityRoles,
          value: true
        }];
      }
      return [];
    }
  }, {
    key: "isNonEditable",
    value: function isNonEditable(right) {
      return this.nonEditableRights.some(function (x) {
        return x.right == (right === null || right === void 0 ? void 0 : right.key);
      });
    }
  }, {
    key: "toggle",
    value: function toggle(right) {
      var index = this.selected.indexOf(right.key);
      var isList = this.subgroup.isList();
      if (isList) {
        this.clearList();
      }
      if (index >= 0 && !isList) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(right.key);
        this.rightsDependenciesService.resolveDependency(right.key, this.selected);
      }
    }
  }, {
    key: "toggleNoAccess",
    value: function toggleNoAccess() {
      this.clearList();
    }
  }, {
    key: "noAccess",
    value: function noAccess() {
      var _this2 = this;
      return !this.subgroup.rights.some(function (r) {
        return _this2.selected.indexOf(r.key) >= 0;
      });
    }
  }, {
    key: "isSelected",
    value: function isSelected(right) {
      return this.selected.indexOf(right.key) >= 0;
    }
  }, {
    key: "hasSelection",
    value: function hasSelection() {
      return this.selected && this.selected.length > 0;
    }
  }, {
    key: "isDependent",
    value: function isDependent(right) {
      return this.rightsDependenciesService.isDependent(right.key, this.selected);
    }
    // todo: на мой взгляд очень затратные проверки
  }, {
    key: "noDeselect",
    value: function noDeselect(right) {
      var _this3 = this;
      if (!this.hasSelection()) {
        return false;
      }
      // todo: правильно ли
      if (right && this.isDependent(right)) {
        if (this.subgroup.isList()) {
          return false;
        }
        if (this.isSelected(right)) {
          return true;
        }
      }
      if (this.subgroup.isList()) {
        return this.subgroup.rights.some(function (x) {
          return _this3.isDependent(x) && _this3.isSelected(x);
        });
      }
      if (this.isNonEditable(right)) {
        return true;
      }
      return false;
    }
  }, {
    key: "clearList",
    value: function clearList() {
      var _this4 = this;
      this.subgroup.rights.map(function (x) {
        return x.key;
      }).forEach(function (x) {
        var index = _this4.selected.indexOf(x);
        if (index >= 0) {
          _this4.selected.splice(index, 1);
        }
      });
    }
  }]);
  return SubgroupRightsController;
}();
var SubgroupRightsComponent = {
  selector: "subgroupRights",
  controller: SubgroupRightsController,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/orginfo/securityrights/subgrouprights/subgroup.rights.component.html",
  bindings: {
    subgroup: "=",
    selected: "=",
    role: "=?"
  }
};
exports.SubgroupRightsComponent = SubgroupRightsComponent;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupSettingsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GroupSettingsController = /*#__PURE__*/function () {
  function GroupSettingsController() {
    _classCallCheck(this, GroupSettingsController);
  }
  _createClass(GroupSettingsController, [{
    key: "validate",
    value: function validate(setting) {
      var rules = setting.validateRules;
      if (rules && rules.length) {
        return rules.every(function (x) {
          return x.validate();
        });
      }
      return true;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.group.expanded = !this.group.expanded;
    }
  }]);
  return GroupSettingsController;
}();
var GroupSettingsComponent = {
  selector: "groupSettings",
  controller: GroupSettingsController,
  controllerAs: "ctrl",
  template: "\n\t\t<ns-panel panel-id=\"{{ctrl.group.id}}\" class=\"default\" title=\"{{ctrl.group.title}}\" expanded=\"ctrl.group.expanded\" toggle=\"ctrl.toggle()\">\n\t\t\t<div ng-repeat=\"setting in ctrl.group.settings\"  ng-class=\"{ 'has-error': !ctrl.validate(setting) }\">\n\t\t\t\t<span>{{setting.title}}</span>&nbsp;<input type=\"text\" size=\"5\" maxlength=\"3\" ng-model=\"setting.value\" track-changes>\n\n\t\t\t\t<!-- \u0412\u0410\u041B\u0418\u0414\u0410\u0426\u0418\u042F -->\n\t\t\t\t<div class=\"error\" ng-if=\"!ctrl.validate(setting)\">\n\t\t\t\t\t<p ng-repeat=\"rule in setting.validateRules\" ng-if=\"!rule.validate()\" class=\"help-block\">\n\t\t\t\t\t\t{{rule.message}}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- \u0412\u0410\u041B\u0418\u0414\u0410\u0426\u0418\u042F -->\n\t\t\t</div>\n\t\t</ns-panel>",
  bindings: {
    group: "="
  }
};
exports.GroupSettingsComponent = GroupSettingsComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightsDependenciesService = void 0;
var _common = __webpack_require__(50);
var _securityrights = __webpack_require__(41);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RightsDependenciesService = /*#__PURE__*/function () {
  function RightsDependenciesService() {
    _classCallCheck(this, RightsDependenciesService);
    this.init();
  }
  _createClass(RightsDependenciesService, [{
    key: "init",
    value: function init() {
      this.rightsDependencies = {};
      this.onSelect = new _common.EventEmitter();
      this.rightsDependencies[_securityrights.Right.arProfileEditSchoolInfo] = [_securityrights.Right.arProfileViewSchoolInfo];
      this.rightsDependencies[_securityrights.Right.arClassMgmCreateClass] = [_securityrights.Right.arClassMgmViewClassSubjAll];
      this.rightsDependencies[_securityrights.Right.arClassMgmEditSubjects] = [_securityrights.Right.arClassMgmViewClassSubjAll];
      this.rightsDependencies[_securityrights.Right.arClassMgmPostClassEventAll] = [_securityrights.Right.arCalendarViewAll];
      this.rightsDependencies[_securityrights.Right.arClassMgmPostClassEventSelf] = [_securityrights.Right.arCalendarViewSelf, _securityrights.Right.arCalendarViewAll];
      this.rightsDependencies[_securityrights.Right.arLAEditSelf] = [_securityrights.Right.arLAViewSelf, _securityrights.Right.arLAViewAll];
      this.rightsDependencies[_securityrights.Right.arJournalEditAll] = [_securityrights.Right.arJournalViewAll];
      this.rightsDependencies[_securityrights.Right.arJournalEditSelf] = [_securityrights.Right.arJournalViewSelf, _securityrights.Right.arJournalViewAll];
      this.rightsDependencies[_securityrights.Right.arTotalsEditAll] = [_securityrights.Right.arTotalsViewAll];
      this.rightsDependencies[_securityrights.Right.arTotalsEditSelf] = [_securityrights.Right.arTotalsViewSelf, _securityrights.Right.arTotalsViewAll];
      this.rightsDependencies[_securityrights.Right.arAnnouncementPost] = [_securityrights.Right.arAnnouncementView];
      this.rightsDependencies[_securityrights.Right.arCurrMgmCreateAll] = [_securityrights.Right.arCurrMgmViewAll];
      this.rightsDependencies[_securityrights.Right.arCurrMgmCreate] = [_securityrights.Right.arCurrMgmViewSelf, _securityrights.Right.arCurrMgmViewAll];
      this.rightsDependencies[_securityrights.Right.arSchoolDocsEdit] = [_securityrights.Right.arSchoolDocsView];
      this.rightsDependencies[_securityrights.Right.arUsersEditAccountStudentsParents] = [_securityrights.Right.arUsersEditAccountStudentsParentsInClass];
      this.rightsDependencies[_securityrights.Right.arEditHealthMonitoring] = [_securityrights.Right.arViewHealthMonitoring];
      this.rightsDependencies[_securityrights.Right.arReportsForAllClasses] = [_securityrights.Right.arReportsForAssignedClass];
      this.rightsDependencies[_securityrights.Right.arReportsUseReportConstructor] = [_securityrights.Right.arReportsViewAdditionalReports];
      this.rightsDependencies[_securityrights.Right.arAddIndividualSupportStudents] = [_securityrights.Right.arIndividualSupportStudentsReestrView];
      this.rightsDependencies[_securityrights.Right.arPostAwardEvents] = [_securityrights.Right.arViewAwardEvents];
      this.rightsDependencies[_securityrights.Right.arSelfRegisterForAwardEvents] = [_securityrights.Right.arViewSelfAwardEvents];
      this.rightsDependencies[_securityrights.Right.arEditSelfAwardEventResults] = [_securityrights.Right.arViewSelfAwardEvents];
    }
  }, {
    key: "resolveDependency",
    value: function resolveDependency(right, selected) {
      var dependencies = this.rightsDependencies[right];
      if (!dependencies) {
        return;
      }
      if (!selected.some(function (x) {
        return dependencies.indexOf(x) >= 0;
      })) {
        this.onSelect.emit(dependencies[0]);
      }
    }
  }, {
    key: "resolveDependencies",
    value: function resolveDependencies(selected) {
      var _this = this;
      Object.keys(this.rightsDependencies).forEach(function (x) {
        if (selected.indexOf(x) >= 0) {
          _this.resolveDependency(x, selected);
        }
      });
    }
  }, {
    key: "isDependent",
    value: function isDependent(right, selected) {
      var _this2 = this;
      return Object.keys(this.rightsDependencies).some(function (x) {
        return _this2.rightsDependencies[x].indexOf(right) >= 0 && selected.indexOf(x) >= 0;
      });
    }
  }]);
  return RightsDependenciesService;
}();
exports.RightsDependenciesService = RightsDependenciesService;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subject = exports.EventEmitter = exports.BehaviorSubject = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this.hadlers = [];
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(handler) {
      this.hadlers.push(handler);
    }
  }, {
    key: "emit",
    value: function emit(data) {
      this.hadlers.forEach(function (h) {
        return h(data);
      });
    }
  }, {
    key: "off",
    value: function off() {
      this.hadlers = [];
    }
  }]);
  return EventEmitter;
}();
exports.EventEmitter = EventEmitter;
var Subject = /*#__PURE__*/function () {
  function Subject() {
    _classCallCheck(this, Subject);
    this.subject = null;
    this.handlers = [];
  }
  _createClass(Subject, [{
    key: "fireHandlers",
    value: function fireHandlers(data) {
      this.handlers.forEach(function (h) {
        return h(data);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subject = data;
      this.fireHandlers(data);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.subject;
    }
  }]);
  return Subject;
}();
exports.Subject = Subject;
var BehaviorSubject = /*#__PURE__*/function (_Subject) {
  _inherits(BehaviorSubject, _Subject);
  var _super = _createSuper(BehaviorSubject);
  function BehaviorSubject() {
    _classCallCheck(this, BehaviorSubject);
    return _super.apply(this, arguments);
  }
  _createClass(BehaviorSubject, [{
    key: "subscribe",
    value: function subscribe(handler) {
      _get(_getPrototypeOf(BehaviorSubject.prototype), "subscribe", this).call(this, handler);
      if (this.subject) {
        _get(_getPrototypeOf(BehaviorSubject.prototype), "fireHandlers", this).call(this, this.subject);
      }
    }
  }]);
  return BehaviorSubject;
}(Subject);
exports.BehaviorSubject = BehaviorSubject;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JournalEditLimitsRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var JournalEditLimitsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(JournalEditLimitsRepository, _BaseRepository);
  var _super = _createSuper(JournalEditLimitsRepository);
  function JournalEditLimitsRepository() {
    _classCallCheck(this, JournalEditLimitsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(JournalEditLimitsRepository, [{
    key: "getEditLimits",
    value: function getEditLimits(schoolId, emId) {
      var params = {
        schoolId: schoolId,
        emId: emId
      };
      return this.$http.get("/webapi/journaleditlimits", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getActualEditLimits",
    value: function getActualEditLimits(schoolId) {
      var params = {
        schoolId: schoolId
      };
      return this.$http.get("/webapi/journaleditlimits/actual", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setEditLimit",
    value: function setEditLimit(limitationType, schoolId, emId, value) {
      var params = {
        limitationType: limitationType,
        schoolId: schoolId,
        emId: emId,
        value: value
      };
      return this.$http.post("/webapi/journaleditlimits", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setEditLimits",
    value: function setEditLimits(schoolId, emId, values) {
      var params = {
        schoolId: schoolId,
        emId: emId
      };
      return this.$http.post("/webapi/journaleditlimits", values, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkTotalsPastEdit",
    value: function checkTotalsPastEdit(termId) {
      var params = {
        termId: termId
      };
      return this.$http.get("/webapi/journaleditlimits/checktotalspastedit", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return JournalEditLimitsRepository;
}(_baseRepository.BaseRepository);
exports.JournalEditLimitsRepository = JournalEditLimitsRepository;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLimitComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EditLimitComponentController = /*#__PURE__*/_createClass( /*@ngInject*/["language", function EditLimitComponentController(language) {
  _classCallCheck(this, EditLimitComponentController);
}]);
var EditLimitComponent = {
  bindings: {
    limitTitle: "=",
    value: "=?",
    specSymbol: "=",
    checkedLimit: "=",
    actualValue: "<?"
  },
  selector: "editLimit",
  template: "<div class=\"checkbox\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"ctrl.checkedLimit\">\n\t\t\t\t\t\t<span>{{ctrl.limitTitle.slice(0, ctrl.limitTitle.indexOf(ctrl.specSymbol))}}\n\t\t\t\t\t\t\t<input ng-model=\"ctrl.value\" type=\"text\" size=\"5\" maxlength=\"3\" ng-disabled=\"!ctrl.checkedLimit\">\n\t\t\t\t\t\t\t {{ctrl.limitTitle.slice(ctrl.limitTitle.indexOf(ctrl.specSymbol) + ctrl.specSymbol.length)}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>",
  controller: EditLimitComponentController,
  controllerAs: "ctrl"
};
exports.EditLimitComponent = EditLimitComponent;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLimitsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditLimitsComponentController = /*#__PURE__*/function () {
  EditLimitsComponentController.$inject = ["language"];
  /*@ngInject*/
  function EditLimitsComponentController(language) {
    _classCallCheck(this, EditLimitsComponentController);
    this.paramSpecSymbl = language.Generic.Secure.kParamSpecSymbl;
    this.rightJournalEditLimitedTime = language.Generic.Security.kRightJournalEditLimitedTime;
    this.rightTotalsPastEditLimitedTime = language.Generic.Security.kRightTotalsPastEditLimitedTime;
    this.rightFutureEditLimitedTime = language.Generic.Security.kRightFutureEditLimitedTime;
  }
  _createClass(EditLimitsComponentController, [{
    key: "showStrongValue",
    value: function showStrongValue(actual, value) {
      return actual && actual.emSchoolStrongLimitationValue && (value > actual.emSchoolStrongLimitationValue.limitationValue || !actual.currentLimitationValue);
    }
  }, {
    key: "showStrongValues",
    value: function showStrongValues() {
      return this.showStrongValue(this.resultsAttendancePastEditActual, this.resultsAttendancePastEditDays) || this.showStrongValue(this.totalsPastEditActual, this.totalsPastEditDays) || this.showStrongValue(this.futureEditActual, this.futureEditDays);
    }
  }, {
    key: "limitTitle",
    value: function limitTitle(_limitTitle, value) {
      return _limitTitle.replace(this.paramSpecSymbl, value.toString());
    }
  }]);
  return EditLimitsComponentController;
}();
var EditLimitsComponent = {
  bindings: {
    resultsAttendancePastEditChecked: "=",
    resultsAttendancePastEditActual: "=",
    resultsAttendancePastEditDays: "=",
    totalsPastEditChecked: "=",
    totalsPastEditActual: "=",
    totalsPastEditDays: "=",
    futureEditChecked: "=",
    futureEditDays: "=",
    futureEditActual: "="
  },
  selector: "editLimits",
  template: "<edit-limit \n\t\t\t\t\tvalue=\"ctrl.resultsAttendancePastEditDays\" \n\t\t\t\t\tlimit-title=\"ctrl.rightJournalEditLimitedTime\"\n\t\t\t\t\tspec-symbol=\"ctrl.paramSpecSymbl\"\n\t\t\t\t\tchecked-limit=\"ctrl.resultsAttendancePastEditChecked\"\n\t\t\t\t\tactual-value=\"ctrl.resultsAttendancePastEditActual\">\n\t\t\t\t</edit-limit>\n\t\t\t\t<edit-limit \n\t\t\t\t\tvalue=\"ctrl.totalsPastEditDays\" \n\t\t\t\t\tlimit-title=\"ctrl.rightTotalsPastEditLimitedTime\"\n\t\t\t\t\tspec-symbol=\"ctrl.paramSpecSymbl\"\n\t\t\t\t\tchecked-limit=\"ctrl.totalsPastEditChecked\"\n\t\t\t\t\tactual-value=\"ctrl.totalsPastEditActual\">\n\t\t\t\t</edit-limit>\n\t\t\t\t<edit-limit \n\t\t\t\t\tvalue=\"ctrl.futureEditDays\" \n\t\t\t\t\tlimit-title=\"ctrl.rightFutureEditLimitedTime\"\n\t\t\t\t\tspec-symbol=\"ctrl.paramSpecSymbl\"\n\t\t\t\t\tchecked-limit=\"ctrl.futureEditChecked\"\n\t\t\t\t\tactual-value=\"ctrl.futureEditActual\">\n\t\t\t\t</edit-limit>\n\t\t\t\t<div class=\"row\" ng-if=\"ctrl.showStrongValues()\">\n\t\t\t\t\t<div class=\"col-md-12 col-lg-12\">\n\t\t\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\t\t<div>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u043F\u0440\u0435\u0442\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u043A, \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u0438/\u0438\u043B\u0438 \u0438\u0442\u043E\u0433\u043E\u0432\u044B\u0445 \u043E\u0442\u043C\u0435\u0442\u043E\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p ng-if=\"ctrl.showStrongValue(ctrl.resultsAttendancePastEditActual, ctrl.resultsAttendancePastEditDays)\">\n\t\t\t\t\t\t\t\t\t<b>{{ctrl.limitTitle(ctrl.rightJournalEditLimitedTime, ctrl.resultsAttendancePastEditActual.emSchoolStrongLimitationValue.limitationValue)}}</b> ({{ctrl.resultsAttendancePastEditActual.emSchoolStrongLimitationValue.educManagement.name}})\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p ng-if=\"ctrl.showStrongValue(ctrl.totalsPastEditActual, ctrl.totalsPastEditDays)\">\n\t\t\t\t\t\t\t\t\t<b>{{ctrl.limitTitle(ctrl.rightTotalsPastEditLimitedTime, ctrl.totalsPastEditActual.emSchoolStrongLimitationValue.limitationValue)}}</b> ({{ctrl.totalsPastEditActual.emSchoolStrongLimitationValue.educManagement.name}})\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p ng-if=\"ctrl.showStrongValue(ctrl.futureEditActual, ctrl.futureEditDays)\">\n\t\t\t\t\t\t\t\t\t<b>{{ctrl.limitTitle(ctrl.rightFutureEditLimitedTime, ctrl.futureEditActual.emSchoolStrongLimitationValue.limitationValue)}}</b> ({{ctrl.futureEditActual.emSchoolStrongLimitationValue.educManagement.name}})\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\n",
  controller: EditLimitsComponentController,
  controllerAs: "ctrl"
};
exports.EditLimitsComponent = EditLimitsComponent;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLimitsService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditLimitsService = /*#__PURE__*/function () {
  function EditLimitsService(appContext, $alerts, $q, journalEditLimitsRepository) {
    _classCallCheck(this, EditLimitsService);
    this.appContext = appContext;
    this.$alerts = $alerts;
    this.$q = $q;
    this.journalEditLimitsRepository = journalEditLimitsRepository;
  }
  _createClass(EditLimitsService, [{
    key: "init",
    value: function init() {
      this.data = {
        resultsAttendancePastEdit: {
          checked: false,
          actual: null
        },
        totalsPastEdit: {
          checked: false,
          actual: null
        },
        futureEdit: {
          checked: false,
          actual: null
        }
      };
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      var promises = [];
      var schoolId = parseInt(this.appContext.schoolId);
      this.init();
      promises.push(this.journalEditLimitsRepository.getEditLimits(schoolId, null).then(function (result) {
        _this.data.resultsAttendancePastEdit.days = result.resultsAttendancePastEditValue;
        _this.data.resultsAttendancePastEdit.checked = result.resultsAttendancePastEditValue > 0;
        _this.data.totalsPastEdit.days = result.totalsPastEditValue;
        _this.data.totalsPastEdit.checked = result.totalsPastEditValue > 0;
        _this.data.futureEdit.days = result.futureEdit;
        _this.data.futureEdit.checked = result.futureEdit > 0;
      }));
      promises.push(this.journalEditLimitsRepository.getActualEditLimits(schoolId).then(function (result) {
        _this.data.resultsAttendancePastEdit.actual = result.resultsAttendancePastEditActualValue;
        _this.data.totalsPastEdit.actual = result.totalsPastEditActualValue;
        _this.data.futureEdit.actual = result.futureEditActualValue;
      }));
      return this.$q.all(promises);
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var promises = [];
      var schoolId = parseInt(this.appContext.schoolId);
      var editJournalLimitsDto = {
        resultsAttendancePastEditValue: this.data.resultsAttendancePastEdit.checked ? this.data.resultsAttendancePastEdit.days : 0,
        totalsPastEditValue: this.data.totalsPastEdit.checked ? this.data.totalsPastEdit.days : 0,
        futureEdit: this.data.futureEdit.checked ? this.data.futureEdit.days : 0
      };
      promises.push(this.journalEditLimitsRepository.setEditLimits(schoolId, null, editJournalLimitsDto).then(function () {
        _this2.$alerts.success("Данные о лимитах сохранены");
      }));
      return this.$q.all(promises);
    }
  }]);
  return EditLimitsService;
}();
exports.EditLimitsService = EditLimitsService;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgInfoComponent = void 0;
var _formparameters = __webpack_require__(6);
var _formValidationHelper = __webpack_require__(56);
var _common = __webpack_require__(25);
var _settingsProvider = __webpack_require__(31);
var Rights = _interopRequireWildcard(__webpack_require__(36));
var _orginfoParameters = __webpack_require__(57);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var OrgInfoController = /*#__PURE__*/function () {
  OrgInfoController.$inject = ["pageContext", "$scope", "$appLoader", "$dialogs", "appContext", "orgInfoRepository", "referencesRepository", "settingsProvider", "$location", "dateUtils", "$alerts", "$longWork", "changeTracker", "language"];
  /*@ngInject*/
  function OrgInfoController(pageContext, $scope, $appLoader, $dialogs, appContext, orgInfoRepository, referencesRepository, settingsProvider, $location, dateUtils, $alerts, $longWork, changeTracker, language) {
    _classCallCheck(this, OrgInfoController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.appContext = appContext;
    this.orgInfoRepository = orgInfoRepository;
    this.referencesRepository = referencesRepository;
    this.settingsProvider = settingsProvider;
    this.$location = $location;
    this.dateUtils = dateUtils;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.language = language;
    pageContext.title = this.language.Generic.SchoolInfo.kTitleSchoolInfoCard;
    pageContext.parent = null;
    pageContext.back = null;
    this.isSchool = this.appContext.funcType == _common.FuncType.school;
    this.isAddSchool = this.appContext.funcType == _common.FuncType.addSchool;
    this.isPreSchool = this.appContext.funcType == _common.FuncType.preSchool;
    this.isOrphanage = this.appContext.funcType == _common.FuncType.orphanage;
    this.init();
  }
  _createClass(OrgInfoController, [{
    key: "init",
    value: function init() {
      var _a, _b, _c, _d, _e, _f;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var ems, founders, mainSchoolInfo, excludeIds, values;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.ready = false;
              this.schoolId = parseInt(this.appContext.schoolId);
              _context.next = 4;
              return this.initAccessFlags();
            case 4:
              this.changeTracker.clearDataChanges();
              _context.next = 7;
              return this.orgInfoRepository.loadCommonInfo(this.schoolId);
            case 7:
              this.schoolInfo = _context.sent;
              _context.next = 10;
              return this.referencesRepository.getEducOrgReferences();
            case 10:
              this.references = _context.sent;
              _context.next = 13;
              return this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType();
            case 13:
              this.pfdoIntegrationType = _context.sent;
              this.updateOrganizationPublishStatus();
              _context.next = 17;
              return this.settingsProvider.ServerSettings.SystemSettings.ModuleFoodPay().then(function (result) {
                _this.moduleFoodPay = result;
                return _this.buildParameters();
              });
            case 17:
              _context.next = 19;
              return this.settingsProvider.ServerSettings.SchoolInfoSettings.RequireReasonChangeSchoolCard();
            case 19:
              this.requireReasonChangeSchoolCard = _context.sent;
              _context.next = 22;
              return this.orgInfoRepository.loadEducmanagements();
            case 22:
              ems = _context.sent;
              this.emsText = this.schoolInfo.ownEducManagementsIds.map(function (emId) {
                var _a;
                return ((_a = ems.find(function (em) {
                  return em.id == emId;
                })) === null || _a === void 0 ? void 0 : _a.name) + ";";
              }).join("\n") || "нет";
              if (!this.canEditExtraSchoolInfo) {
                _context.next = 28;
                break;
              }
              _context.next = 27;
              return this.orgInfoRepository.loadAuthorities(this.schoolId);
            case 27:
              this.authorities = _context.sent;
            case 28:
              _context.next = 30;
              return this.orgInfoRepository.loadFounders();
            case 30:
              founders = _context.sent;
              this.foundersText = this.schoolInfo.educOrganization.foundersIds.map(function (fid) {
                var _a;
                return ((_a = founders.find(function (f) {
                  return f.id == fid;
                })) === null || _a === void 0 ? void 0 : _a.name) + ";";
              }).join("\n") || "нет";
              this.authority = ems.find(function (a) {
                return a.id == _this.schoolInfo.emId;
              });
              if (!((_a = this.schoolInfo.department) === null || _a === void 0 ? void 0 : _a.mainSchoolId)) {
                _context.next = 38;
                break;
              }
              _context.next = 36;
              return this.orgInfoRepository.loadCommonInfo((_b = this.schoolInfo.department) === null || _b === void 0 ? void 0 : _b.mainSchoolId);
            case 36:
              mainSchoolInfo = _context.sent;
              this.mainSchool = {
                id: mainSchoolInfo.id,
                name: mainSchoolInfo.name
              };
            case 38:
              excludeIds = [];
              if (this.schoolInfo.department) {
                excludeIds.push(1);
                excludeIds.push(this.schoolInfo.department.isBranch ? 3 : 2);
              } else {
                excludeIds.push(2, 3);
              }
              this.commonParameters.independ.items = this.commonParameters.independ.items.filter(function (x) {
                return excludeIds.findIndex(function (y) {
                  return y == x.id;
                }) == -1;
              });
              this.legalForm = (_c = this.references.legalForms.find(function (x) {
                return x.id == _this.schoolInfo.educOrganization.eoLegalFormId;
              })) === null || _c === void 0 ? void 0 : _c.name;
              this.legalForm83 = (_d = this.references.legalForms83.find(function (x) {
                return x.id == _this.schoolInfo.educOrganization.eoLegalFormId83;
              })) === null || _d === void 0 ? void 0 : _d.name;
              this.eoType = this.references.types.find(function (x) {
                return x.id == _this.schoolInfo.educOrganization.eoTypeId;
              });
              this.eoForm = (_e = this.eoType.eoForms.find(function (x) {
                return x.id == _this.schoolInfo.educOrganization.eoFormId;
              })) === null || _e === void 0 ? void 0 : _e.name;
              this.status = (_f = this.references.statusOrganizations.find(function (s) {
                return s.id == _this.schoolInfo.schoolInformation.statusOrganization;
              })) === null || _f === void 0 ? void 0 : _f.name;
              _context.next = 48;
              return this.orgInfoRepository.loadOrgParamInfo(this.schoolId);
            case 48:
              values = _context.sent;
              this.parameters.forEach(function (p) {
                var paramInfo = values.find(function (v) {
                  return v.parameterName == p.name;
                });
                p.id = paramInfo === null || paramInfo === void 0 ? void 0 : paramInfo.parameterId;
              });
              this.parameterValues = values.map(function (x) {
                var parameter = _this.parameters.find(function (p) {
                  return p.id == x.parameterId;
                });
                var value = {
                  text: x.value
                };
                if ((parameter === null || parameter === void 0 ? void 0 : parameter.paramType) == _formparameters.FormParamType.List || (parameter === null || parameter === void 0 ? void 0 : parameter.paramType) == _formparameters.FormParamType.MultiChoice) {
                  var parseVal = parseInt(x.value);
                  value.itemId = isNaN(parseVal) ? null : parseVal;
                }
                return {
                  parameterId: x.parameterId,
                  value: value
                };
              });
              this.orginfoParametersService = new _orginfoParameters.OrgInfoFormParametersService(this.parameters, this.parameterValues, this.form, !this.canEditParamValues);
              this.orginfoParametersService.parameterValues.on(function (values) {
                return _this.parameterValues = values;
              });
              this.orginfoParametersService.schoolId = this.schoolId;
              this.$scope.$watch(function () {
                return _this.form;
              }, function (val) {
                _this.orginfoParametersService.form = val;
              });
              _context.next = 57;
              return this.initFileAttachments();
            case 57:
              this.ready = true;
              this.$appLoader.hide();
              this.$scope.$applyAsync();
            case 60:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "reset",
    value: function reset() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.changeTracker.isDataChanged()) {
                _context2.next = 3;
                break;
              }
              this.$dialogs.message(this.language.Generic.Common.kNoChanges);
              return _context2.abrupt("return");
            case 3:
              this.$appLoader.show();
              this.init().then(function () {
                _this2.$dialogs.message(_this2.language.Generic.Common.kResetChanges);
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "updateOrganizationPublishStatus",
    value: function updateOrganizationPublishStatus() {
      var _this3 = this;
      if (!this.isAddSchool || this.pfdoIntegrationType != _settingsProvider.PfdoIntegrationType.IRTechEes) {
        return;
      }
      if (!this.schoolInfo.schoolInformation.pfdoNavId) {
        return;
      }
      this.orgInfoRepository.getPfdoPublishStatus(parseInt(this.appContext.schoolId)).then(function (state) {
        _this3.pfdoPublishState = state;
      });
    }
  }, {
    key: "pfdoPublish",
    value: function pfdoPublish() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this4 = this;
        var state;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.$dialogs.confirm("Внимание! Сейчас будет отправлена заявка на публикацию сведений о поставщике услуг дополнительного образования. Вы желаете продолжить?");
            case 2:
              _context3.next = 4;
              return this.orgInfoRepository.pfdoPublish(parseInt(this.appContext.schoolId))["catch"](function (err) {
                _this4.updateOrganizationPublishStatus();
                return Promise.reject(err);
              });
            case 4:
              state = _context3.sent;
              this.pfdoPublishState = state;
              this.$dialogs.message('Заявка на публикацию успешно отправлена');
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "initAccessFlags",
    value: function initAccessFlags() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var hasRightProfileEditSchoolInfo, externalEmAccess;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              hasRightProfileEditSchoolInfo = this.appContext.hasAnyRight([Rights.arProfileEditSchoolInfo]);
              if (!(this.appContext.emId > 0 || this.appContext.isEmForSchool)) {
                _context4.next = 13;
                break;
              }
              this.simpleSchool = false;
              _context4.next = 5;
              return this.settingsProvider.ServerSettings.SystemSettings.ExternalAccessEmUserToSchool();
            case 5:
              externalEmAccess = _context4.sent;
              _context4.next = 8;
              return this.settingsProvider.ServerSettings.SchoolInfoSettings.EM_MayEditExtraSchoolInfo();
            case 8:
              this.canEditExtraSchoolInfo = _context4.sent;
              this.canEditParamValues = externalEmAccess;
              this.readonly = !externalEmAccess && !this.canEditExtraSchoolInfo;
              _context4.next = 17;
              break;
            case 13:
              this.simpleSchool = true;
              this.canEditExtraSchoolInfo = false;
              this.readonly = this.appContext.readOnly || !hasRightProfileEditSchoolInfo;
              this.canEditParamValues = !this.readonly;
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "initFileAttachments",
    value: function initFileAttachments() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var charterAttachType, photoFileExts, schoolfiles, files, photoAttachmentTypes, photoFiles;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              //todo. загрузка лимита для файловых вложений
              charterAttachType = 200;
              photoFileExts = ['.tiff', '.pjp', '.jfif', '.bmp', '.gif', '.svg', '.png', '.xbm', '.dlib', '.jxl', '.jpeg', '.svgz', '.jpg', '.webp', '.ico', '.tif', '.pjpeg', '.avif'];
              _context5.next = 4;
              return this.orgInfoRepository.loadFiles(this.schoolId);
            case 4:
              _context5.t0 = _context5.sent;
              if (_context5.t0) {
                _context5.next = 7;
                break;
              }
              _context5.t0 = [];
            case 7:
              schoolfiles = _context5.t0;
              files = schoolfiles.map(function (x) {
                return {
                  id: x.fileAttachmentId,
                  name: x.fileName,
                  description: x.description,
                  attachmentType: x.attachmentType
                };
              });
              this.orginfoParametersService.charterFile = files.find(function (f) {
                return f.attachmentType == charterAttachType;
              });
              _context5.next = 12;
              return this.orgInfoRepository.loadAttachmentTypes(1);
            case 12:
              photoAttachmentTypes = _context5.sent;
              photoFiles = files.filter(function (f) {
                return photoAttachmentTypes.findIndex(function (x) {
                  return x.id == f.attachmentType;
                }) > -1;
              });
              this.photofilesSettings = {
                options: {
                  multiple: true,
                  showDescription: true,
                  filesExtensions: function filesExtensions(uploadLimits) {
                    return photoFileExts;
                  },
                  readonly: !this.canEditParamValues,
                  attachmentTypes: photoAttachmentTypes
                },
                data: {
                  files: photoFiles,
                  context: {
                    schoolId: this.schoolId
                  }
                }
              };
              console.log(this.photofilesSettings);
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "buildParameters",
    value: function buildParameters() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this$parameters2;
        var orginfoParameters, _this$parameters;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return new _orginfoParameters.OrgInfoBuildParametersService(this.appContext, this.referencesRepository, this.language).buildParameters(this.canEditParamValues);
            case 2:
              orginfoParameters = _context6.sent;
              this.commonParameters = orginfoParameters.commonParameters;
              this.adminParameters = orginfoParameters.adminParameters;
              this.bankParameters = orginfoParameters.bankParameters;
              this.contactparameters = orginfoParameters.contactparameters;
              this.foodParameters = orginfoParameters.foodParameters;
              this.internetParameters = orginfoParameters.internetParameters;
              this.otherParameters = orginfoParameters.otherParameters;
              this.parameters = [].concat(_toConsumableArray(this.adminParameters), _toConsumableArray(this.bankParameters));
              if (this.moduleFoodPay) {
                (_this$parameters = this.parameters).push.apply(_this$parameters, _toConsumableArray(this.foodParameters));
              }
              (_this$parameters2 = this.parameters).push.apply(_this$parameters2, _toConsumableArray(this.contactparameters).concat(_toConsumableArray(this.otherParameters), _toConsumableArray(this.internetParameters)));
              this.parameters.push(this.commonParameters.about);
              this.parameters.push(this.commonParameters.smallOrg);
              this.parameters.push(this.commonParameters.additionalName);
              this.parameters.push(this.commonParameters.independ);
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this5 = this;
        var saveValues, directorParameter, directorInfo, saveDirector, reason, saves, saveCommon, work;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (this.changeTracker.isDataChanged()) {
                _context7.next = 3;
                break;
              }
              this.$dialogs.message(this.language.Generic.Common.kNoChanges);
              return _context7.abrupt("return");
            case 3:
              if (!this.form.$invalid) {
                _context7.next = 6;
                break;
              }
              new _formValidationHelper.FormValidationHelper(this.$dialogs, this.language).focusInvalidFormControl(this.form);
              return _context7.abrupt("return");
            case 6:
              saveValues = this.parameterValues.map(function (x) {
                var paramInfo = _this5.parameters.find(function (p) {
                  return p.id == x.parameterId;
                });
                if (!paramInfo) {
                  return null;
                }
                var value = x.value.text;
                if (x.value.itemId != undefined && paramInfo.name != "T00fio1") {
                  value = x.value.itemId.toString();
                } else if (x.value.date != undefined) {
                  value = _this5.dateUtils.date2str(x.value.date);
                }
                return {
                  parameterId: x.parameterId,
                  parameterName: paramInfo.name,
                  value: value
                };
              }).filter(function (x) {
                return x != null;
              });
              directorParameter = this.parameters.find(function (x) {
                return x.name == "T00fio1";
              });
              if (directorParameter && directorParameter.id) {
                directorInfo = this.parameterValues.find(function (x) {
                  return x.parameterId == directorParameter.id;
                });
                if (directorInfo) {
                  this.schoolInfo.schoolInformation.director = null;
                  if (directorInfo.value && directorInfo.value.itemId) {
                    if (directorInfo.value.itemId == -2) {
                      // "<Не указано>" => сохраняем пустую строку
                      saveDirector = saveValues.find(function (x) {
                        return x.parameterId == directorParameter.id;
                      });
                      if (saveDirector) {
                        saveDirector.value = "";
                      }
                    } else {
                      this.schoolInfo.schoolInformation.director = {
                        id: directorInfo.value.itemId,
                        name: directorInfo.value.text
                      };
                    }
                  }
                }
              }
              reason = {
                reason: null,
                reasonDocId: null
              };
              if (!this.requireReasonChangeSchoolCard) {
                _context7.next = 22;
                break;
              }
              _context7.prev = 11;
              _context7.next = 14;
              return this.requestReasonForChange();
            case 14:
              reason = _context7.sent;
              _context7.next = 21;
              break;
            case 17:
              _context7.prev = 17;
              _context7.t0 = _context7["catch"](11);
              if (!(_context7.t0 != 'cancel')) {
                _context7.next = 21;
                break;
              }
              throw _context7.t0;
            case 21:
              ;
            case 22:
              if (!(!this.requireReasonChangeSchoolCard || (reason === null || reason === void 0 ? void 0 : reason.reason) || (reason === null || reason === void 0 ? void 0 : reason.reasonDocId))) {
                _context7.next = 33;
                break;
              }
              saves = [];
              saveCommon = this.orgInfoRepository.editSchool(this.schoolInfo);
              saves.push(saveCommon);
              if (this.canEditParamValues) {
                saves.push(this.orgInfoRepository.saveOrgParamInfo(parseInt(this.appContext.schoolId), saveValues, reason));
              }
              work = Promise.all(saves);
              _context7.next = 30;
              return this.$longWork.execute(work);
            case 30:
              this.$alerts.success(this.language.Common.kSchoolInfoWasSaved);
              this.changeTracker.clearDataChanges();
              this.$scope.$applyAsync();
            case 33:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[11, 17]]);
      }));
    }
  }, {
    key: "requestReasonForChange",
    value: function requestReasonForChange() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this6 = this;
        var reason, appendContent, reasonDocId;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              reason = {
                reason: null,
                reasonDocId: null
              };
              appendContent = "\n\t\t<div class=\"form-group\"> \n\t\t\t<label class=\"control-label\">\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435</label> \n\t\t\t<div><input type=\"text\" class=\"form-control\" name=\"reasonText\" size=\"4\" maxlength=\"200\" value=\"\" required /></div> \n\t\t</div>\n\t\t<label class=\"control-label\">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442</label>";
              _context8.next = 4;
              return this.$dialogs.uploadFile("Основания для внесения изменений", {
                contentHtml: appendContent,
                preUploadCheck: function preUploadCheck() {
                  var reasonElement = $("input[name=reasonText]");
                  reasonElement.on('input', _this6.onChangeReasonText);
                  var reasonText = reasonElement.val();
                  if (!reasonText) {
                    reasonElement.trigger('input');
                    return false;
                  }
                  reason.reason = reasonText;
                  return true;
                },
                maxFileSize: 20480,
                url: "/webapi/files",
                overrideStrings: {
                  ok: this.language.Generic.Buttons.kSave
                }
              });
            case 4:
              reasonDocId = _context8.sent;
              if (reasonDocId) {
                _context8.next = 7;
                break;
              }
              return _context8.abrupt("return", Promise.reject());
            case 7:
              reason.reasonDocId = reasonDocId;
              return _context8.abrupt("return", Promise.resolve(reason));
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "onChangeReasonText",
    value: function onChangeReasonText(e) {
      var reasonText = $(this).val();
      if (!reasonText) {
        if (!$(this).parent().hasClass("has-error")) {
          $(this).parent().addClass("has-error");
          $(this).parent().append("<div class=\"help-block\">Пожалуйста, заполните основание</div>");
        }
      } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().find(".help-block").remove();
      }
    }
  }, {
    key: "browseAccessJournal",
    value: function browseAccessJournal() {
      //todo. переписать на ангулар
      var ctrl = __webpack_require__(76);
      var browseSchoolInfoAccessJournalCtrl = new ctrl({
        schoolId: this.schoolId
      });
      browseSchoolInfoAccessJournalCtrl.browseAccessJournal();
    }
  }, {
    key: "gotoLicences",
    value: function gotoLicences() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.changeTracker.check();
            case 2:
              this.$location.path("/licenses/");
              this.$scope.$applyAsync();
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "print",
    value: function print() {
      new PrintOrgInfoService().print();
    }
  }, {
    key: "export",
    value: function _export() {
      new PrintOrgInfoService()["export"]();
    }
  }]);
  return OrgInfoController;
}();
var PrintOrgInfoService = /*#__PURE__*/function () {
  function PrintOrgInfoService() {
    _classCallCheck(this, PrintOrgInfoService);
    this.getSchoolCard = function () {
      var container = $('<div>');
      var schoolCard = $('div.print-block');
      var schoolCardClone = schoolCard.clone();
      schoolCardClone.find('#T00fio1').remove();
      var selects = schoolCard.find('select');
      schoolCardClone.find('select').each(function (index) {
        var options = $(this).find('option');
        selects.eq(index).children(':selected').each(function () {
          options.eq($(this).index()).prop('selected', true);
        });
      });
      schoolCardClone.find('.form-group').appendTo(container);
      return container;
    };
    this.preparePrint = function (printBlock, copyBlock) {
      $('div.text-left.text-nowrap', copyBlock).each(function () {
        $(this).replaceWith(this.innerHTML);
      });
      $('table', copyBlock).addClass('table table-xs');
      $('th', copyBlock).addClass('text-left');
      $('td', copyBlock).removeClass().addClass('cell-text');
    };
    this.printOptions = {
      viewHeader: true,
      processingFunc: [this.preparePrint]
    };
  }
  _createClass(PrintOrgInfoService, [{
    key: "print",
    value: function print() {
      this.getSchoolCard().printUtils().toPrint(this.printOptions);
    }
  }, {
    key: "export",
    value: function _export() {
      this.getSchoolCard().printUtils().toExcel(this.printOptions);
    }
  }]);
  return PrintOrgInfoService;
}();
var OrgInfoComponent = {
  controller: OrgInfoController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/orginfo/orginfo.component.html"
};
exports.OrgInfoComponent = OrgInfoComponent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JQueryHelper = exports.FormValidationHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var JQueryHelper = /*#__PURE__*/function () {
  function JQueryHelper() {
    _classCallCheck(this, JQueryHelper);
  }
  _createClass(JQueryHelper, null, [{
    key: "SingleOn",
    value:
    //подпись на событие, с отпиской после первого выполнения
    function SingleOn(element, event, handler) {
      var proxiedHandler = function proxiedHandler() {
        var result = handler();
        if (typeof result !== "boolean" || result) {
          element.off(event, proxiedHandler);
        }
      };
      element.on(event, proxiedHandler);
    }
  }]);
  return JQueryHelper;
}();
exports.JQueryHelper = JQueryHelper;
var FormValidationHelper = /*#__PURE__*/function () {
  function FormValidationHelper($dialogs, language, localSettings) {
    _classCallCheck(this, FormValidationHelper);
    this.$dialogs = $dialogs;
    this.language = language;
    this.localSettings = localSettings;
    this.localSettings = localSettings || {};
  }
  _createClass(FormValidationHelper, [{
    key: "checkNotEmpty",
    value: function checkNotEmpty(el, fieldname) {
      el.value = el.value.trim();
      if (el.value == "") {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrEmpty + fieldname);
        el.focus();
        return true;
      }
      return false;
    }
  }, {
    key: "badFio",
    value: function badFio(el, bCheck, bNoShowMessage, fieldName) {
      if (this.localSettings.regExpFio == null || this.localSettings.regExpFio == undefined || this.localSettings.regExpFio == "") {
        return this.badFirstLetter(el, bCheck, bNoShowMessage);
      }
      el.value = el.value.trim();
      if (el.value == "") {
        return false;
      }
      var firstLetter = el.value.slice(0, 1).toUpperCase();
      if (bCheck) {
        var namePattern = new RegExp(this.localSettings.regExpFio, "i");
        if (!namePattern.test(el.value)) {
          var badMessage = this.language.Generic.Common.kbadFio.replace("{0}", fieldName);
          if (!bNoShowMessage) {
            el.focus();
            this.$dialogs.message(badMessage);
          }
          return true;
        }
      }
      el.value = firstLetter + el.value.slice(1);
      return false;
    }
  }, {
    key: "badFirstLetter",
    value: function badFirstLetter(el, bCheck, bNoShowMessage) {
      el.value = el.value.trim();
      if (el.value == "") {
        return false;
      }
      var firstLetter = el.value.slice(0, 1).toUpperCase();
      if (bCheck) {
        var namePattern = new RegExp("[" + this.localSettings.regExpAlphabet + "]");
        if (!namePattern.test(firstLetter)) {
          var badMessage = this.language.Generic.Common.kbadFirstLetter.replace("{0}", this.localSettings.firstLetter).replace("{1}", this.localSettings.lastLetter);
          if (!bNoShowMessage) {
            el.focus();
            this.$dialogs.message(badMessage);
          }
          return true;
        }
      }
      el.value = firstLetter + el.value.slice(1);
      return false;
    }
  }, {
    key: "focusFormControl",
    value: function focusFormControl(form, controlName) {
      var control = form.$$controls.find(function (c) {
        return c.$name == controlName;
      });
      if (!control) {
        return;
      }
      this.focusInvalidControl(control.$$element);
    }
  }, {
    key: "focusInvalidFormControl",
    value: function focusInvalidFormControl(form) {
      var invalidControl = this.findInvalidControl(form.$$controls);
      if (!invalidControl) {
        return;
      }
      this.focusInvalidControl(invalidControl.$$element);
    }
  }, {
    key: "findInvalidControl",
    value: function findInvalidControl(controls) {
      var _a;
      if (!(controls === null || controls === void 0 ? void 0 : controls.length)) {
        return null;
      }
      var invalidControl = controls.find(function (c) {
        return c.$invalid;
      });
      if (!invalidControl) {
        return null;
      }
      if (invalidControl && !((_a = invalidControl.$$controls) === null || _a === void 0 ? void 0 : _a.length)) {
        return invalidControl;
      }
      return this.findInvalidControl(invalidControl.$$controls);
    }
  }, {
    key: "focusInvalidControl",
    value: function focusInvalidControl(invalidControl) {
      var panel = $(invalidControl).closest(".panel-collapse");
      if (panel && panel.length && !panel.hasClass("in")) {
        JQueryHelper.SingleOn(panel, "shown.bs.collapse", function () {
          invalidControl.trigger("focus");
        });
        panel.collapse("show");
      } else {
        invalidControl.trigger("focus");
      }
    }
  }]);
  return FormValidationHelper;
}();
exports.FormValidationHelper = FormValidationHelper;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgInfoFormParametersService = exports.OrgInfoBuildParametersService = void 0;
var _formparameters = __webpack_require__(6);
var _common = __webpack_require__(50);
var _charterParameter = __webpack_require__(58);
var _okvedParameter = __webpack_require__(59);
var _internetaccesstechnologyParameter = __webpack_require__(60);
var _tagsParameter = __webpack_require__(61);
var _common2 = __webpack_require__(25);
var _directorParameter = __webpack_require__(62);
var _emailParameter = __webpack_require__(63);
var _webParameter = __webpack_require__(64);
var _phonesParameter = __webpack_require__(65);
var _foodpaykppParameter = __webpack_require__(66);
var _kppParameter = __webpack_require__(68);
var _ogrnParameter = __webpack_require__(69);
var _innParameter = __webpack_require__(70);
var _foodpayinnParameter = __webpack_require__(71);
var _addressParameter = __webpack_require__(72);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var OrgInfoBuildParametersService = /*#__PURE__*/function () {
  OrgInfoBuildParametersService.$inject = ["appContext", "referencesRepository", "language"];
  /*@ngInject*/
  function OrgInfoBuildParametersService(appContext, referencesRepository, language) {
    _classCallCheck(this, OrgInfoBuildParametersService);
    this.appContext = appContext;
    this.referencesRepository = referencesRepository;
    this.language = language;
    this.isSchool = this.appContext.funcType == _common2.FuncType.school;
    this.isAddSchool = this.appContext.funcType == _common2.FuncType.addSchool;
    this.isPreSchool = this.appContext.funcType == _common2.FuncType.preSchool;
    this.isOrphanage = this.appContext.funcType == _common2.FuncType.orphanage;
  }
  _createClass(OrgInfoBuildParametersService, [{
    key: "buildParameters",
    value: function buildParameters(canEditParamValues) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var order, buildFormParam, aboutParameter, additionalNameParameter, smallOrgParameter, independParameter, ret, collegiateManagementFp, projectTypeForSchoolValues, projectForSchoolFp, okfsFp, okvedFp, typeOfOwnerships;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              order = 1;
              buildFormParam = function buildFormParam(name, type, title, options) {
                return {
                  id: order++,
                  name: name,
                  order: order++,
                  paramType: type,
                  title: title,
                  show: true,
                  required: options === null || options === void 0 ? void 0 : options.required,
                  minLength: options === null || options === void 0 ? void 0 : options.minLength,
                  maxLength: options === null || options === void 0 ? void 0 : options.maxLength,
                  lengths: options === null || options === void 0 ? void 0 : options.lengths,
                  digitsOnly: options === null || options === void 0 ? void 0 : options.digitsOnly,
                  isDisabled: function isDisabled(parameterId, editFormParamsSevice) {
                    return !canEditParamValues;
                  },
                  accessType: _formparameters.ParamAccessType.Full
                };
              };
              aboutParameter = buildFormParam("T00about", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kAbout, {
                maxLength: 400
              });
              additionalNameParameter = buildFormParam("T00additionalName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kAdditionalName, {
                maxLength: 250
              });
              smallOrgParameter = buildFormParam("T00SmallOrganization", _formparameters.FormParamType.List, this.language.Generic.SchoolInfo.kSmallOrganization);
              smallOrgParameter.items = [{
                id: 1,
                name: this.language.Generic.SchoolInfo.kIsSmallOrg
              }, {
                id: 0,
                name: this.language.Generic.SchoolInfo.kIsNotSmallOrg
              }];
              independParameter = buildFormParam("T00Independ", _formparameters.FormParamType.List, this.language.Generic.SchoolInfo.kIndepend, {
                required: true
              });
              independParameter.items = [{
                id: 1,
                name: this.language.Generic.SchoolInfo.kIndepend1
              }, {
                id: 2,
                name: this.language.Generic.SchoolInfo.kIndepend2
              }, {
                id: 3,
                name: this.language.Generic.SchoolInfo.kIndepend3
              }, {
                id: 4,
                name: this.language.Generic.SchoolInfo.kIndepend4
              }, {
                id: 5,
                name: this.language.Generic.SchoolInfo.kIndepend5
              }, {
                id: 6,
                name: this.language.Generic.SchoolInfo.kIndepend6
              }, {
                id: 7,
                name: this.language.Generic.SchoolInfo.kIndepend7
              }];
              ret = {
                commonParameters: {
                  about: aboutParameter,
                  additionalName: additionalNameParameter,
                  smallOrg: smallOrgParameter,
                  independ: independParameter
                },
                adminParameters: [],
                contactparameters: [],
                otherParameters: [],
                bankParameters: [],
                foodParameters: [],
                internetParameters: []
              };
              collegiateManagementFp = buildFormParam("T00CollegiateManagement", _formparameters.FormParamType.List, this.language.Generic.SchoolInfo.kCollegiateManagement);
              collegiateManagementFp.items = [{
                id: 1,
                name: this.language.Generic.SchoolInfo.kGeneralMeetingOfWorkers
              }, {
                id: 2,
                name: this.language.Generic.SchoolInfo.kPedagogicalCouncil
              }, {
                id: 3,
                name: this.language.Generic.SchoolInfo.kSupervisorsBoard
              }, {
                id: 4,
                name: this.language.Generic.SchoolInfo.kGoverningBoard
              }, {
                id: 5,
                name: this.language.Generic.SchoolInfo.kSupervisoryBoard
              }, {
                id: 6,
                name: this.language.Generic.SchoolInfo.kParentalCommittee
              }];
              _context.next = 13;
              return this.referencesRepository.getProjectTypeForSchoolTypes().then(function (referenceResponse) {
                return referenceResponse.map(function (entity) {
                  entity.name = entity.id + ". " + entity.name;
                  return entity;
                });
              });
            case 13:
              projectTypeForSchoolValues = _context.sent;
              projectForSchoolFp = buildFormParam("T00ProjectTypeForSchool", _formparameters.FormParamType.List, this.language.Generic.SchoolInfo.kProjectTypeForSchool);
              projectForSchoolFp.items = projectTypeForSchoolValues;
              ret.adminParameters = [buildFormParam("T00fio1", _formparameters.FormParamType.String, this.isPreSchool ? this.language.Generic.SchoolInfo.kFIODirectorPreSchool : this.language.Generic.SchoolInfo.kFIODirector), buildFormParam("T00fio2", _formparameters.FormParamType.String, this.isPreSchool ? this.language.Generic.SchoolInfo.kFIOPrincipalUVR_PreSchool : this.language.Generic.SchoolInfo.kFIOPrincipalUVR), buildFormParam("T00fio3", _formparameters.FormParamType.String, this.isPreSchool ? this.language.Generic.SchoolInfo.kFIOPrincipalAHR_PreSchool : this.isAddSchool ? this.language.Generic.SchoolInfo.kFIOPrincipalAHR_Add : this.language.Generic.SchoolInfo.kFIOPrincipalAHC)];
              if (!this.isAddSchool && !this.isPreSchool) {
                ret.adminParameters.push(buildFormParam("T00fio4", _formparameters.FormParamType.String, this.isOrphanage ? this.language.Generic.SchoolInfo.kFIOPrincipalBZh : this.language.Generic.SchoolInfo.kFIOPrincipalIT));
              }
              ret.adminParameters.push(collegiateManagementFp);
              ret.contactparameters = [buildFormParam("T00address", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kPostAddress), buildFormParam("T00juridicalAddress", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kJuridicalAddress), buildFormParam("T00phones", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kPhones), buildFormParam("T00fax", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kFax), buildFormParam("T00email", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kEMailAddress), buildFormParam("T00web", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kWeb), buildFormParam("T00addressesAdditionalBuildings", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kAddressesAdditionalBuildings)];
              okfsFp = buildFormParam("T00okfs", _formparameters.FormParamType.List, this.language.Generic.SchoolInfo.kOKFS);
              okfsFp.multiple = false;
              okvedFp = buildFormParam("T00okved", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kOKVED, {
                required: false
              });
              ret.otherParameters = [buildFormParam("T00inn", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kINN, {
                digitsOnly: true,
                required: true,
                lengths: [10, 12]
              }), buildFormParam("T00kpp", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kKPP, {
                digitsOnly: true,
                lengths: [9]
              }), buildFormParam("T00ogrn", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kOGRN, {
                digitsOnly: true,
                required: true,
                lengths: [13, 15]
              }), buildFormParam("T00okpo", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kIDOKPO, {
                digitsOnly: true,
                lengths: [8, 10]
              }), buildFormParam("T00okato", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kIDOKATO, {
                required: true,
                digitsOnly: true,
                lengths: [8, 11]
              }), buildFormParam("T00okogu", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kIDOKOGU, {
                digitsOnly: true,
                minLength: 7,
                maxLength: 7
              }), buildFormParam("T00okopf", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kOKOPF, {
                digitsOnly: true,
                minLength: 5,
                maxLength: 5
              }), okfsFp, okvedFp, {
                id: order++,
                title: "Устав",
                name: "charter",
                order: order++,
                paramType: _formparameters.FormParamType.Free,
                show: true,
                isDisabled: function isDisabled(parameterId, editFormParamsSevice) {
                  return !canEditParamValues;
                },
                accessType: _formparameters.ParamAccessType.Full
              }, buildFormParam("T00SocialPartnership", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kSocialPartnership), buildFormParam("T00PresenceOfPool", _formparameters.FormParamType.Bool, this.language.Generic.SchoolInfo.kPresenceOfPool), buildFormParam("T00BarrierFreeEnvironment", _formparameters.FormParamType.Bool, this.language.Generic.SchoolInfo.kBarrierFreeEnvironment), buildFormParam("T00VideoSurveillance", _formparameters.FormParamType.Bool, this.language.Generic.SchoolInfo.kVideoSurveillance), buildFormParam("T00maxOccupancy", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.maxOccupancy, {
                digitsOnly: true,
                maxLength: 6
              }), buildFormParam("T00maxOccupancyOnShift", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.maxOccupancyOnShift, {
                digitsOnly: true,
                maxLength: 6
              }), buildFormParam("T00spec", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kSpecialization), buildFormParam("T00EducationProcessStructure", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kEducationProcessStructure), buildFormParam("T00Timetable", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kTimetable), buildFormParam("T00ConditionsEducation", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kConditionsEducation), projectForSchoolFp];
              ret.bankParameters = [buildFormParam("T00bankName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBankName), buildFormParam("T00bankScore", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBankScore, {
                digitsOnly: true,
                minLength: 20,
                maxLength: 20
              }), buildFormParam("T00corrScore", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kCorrScore, {
                digitsOnly: true,
                minLength: 20,
                maxLength: 20
              }), buildFormParam("T00personalAccount", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kPersonalAccount), buildFormParam("T00bik", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBIK, {
                digitsOnly: true,
                minLength: 9,
                maxLength: 9
              }), buildFormParam("T00bankKpp", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBankKpp, {
                digitsOnly: true,
                minLength: 9,
                maxLength: 9
              }), buildFormParam("T00bankNote", _formparameters.FormParamType.Area, this.language.Generic.SchoolInfo.kNote)];
              ret.foodParameters = [buildFormParam("T00FoodPayOrgName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kOrgName), buildFormParam("T00FoodPayInn", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kINN, {
                digitsOnly: true,
                lengths: [10, 12]
              }), buildFormParam("T00FoodPayKpp", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kKPP, {
                digitsOnly: true,
                minLength: 9,
                maxLength: 9
              }), buildFormParam("T00FoodPayBankName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBankName), buildFormParam("T00FoodPayBankScore", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kFoodPayScore, {
                digitsOnly: true,
                minLength: 20,
                maxLength: 20
              }), buildFormParam("T00FoodPayBankCorrScore", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kCorrScore, {
                digitsOnly: true,
                minLength: 20,
                maxLength: 20
              }), buildFormParam("T00FoodPayBankBik", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBIK, {
                digitsOnly: true,
                minLength: 9,
                maxLength: 9
              }), buildFormParam("T00FoodPayBankKpp", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kBankKpp, {
                digitsOnly: true,
                minLength: 9,
                maxLength: 9
              })];
              ret.internetParameters = [buildFormParam("T00computersCount", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kComputersCount), buildFormParam("T00contentFilteringName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kContentFilteringName), buildFormParam("T00internetSpeedUnderContract", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kInternetSpeedUnderContract, {
                digitsOnly: true
              }), buildFormParam("T00internetSpeedInFact", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kInternetSpeedInFact, {
                digitsOnly: true
              }), buildFormParam("T00internetProviderName", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kInternetProviderName), buildFormParam("T00internetAccessTechnology", _formparameters.FormParamType.String, this.language.Generic.SchoolInfo.kInternetAccessTechnology)];
              //справочник форм собственности
              typeOfOwnerships = [{
                id: 11,
                name: '11. Государственная собственность'
              }, {
                id: 12,
                name: '12. Федеральная собственность'
              }, {
                id: 13,
                name: '13. Собственность субъектов Российской Федерации'
              }, {
                id: 14,
                name: '14. Муниципальная собственность'
              }, {
                id: 16,
                name: '16. Частная собственность'
              }, {
                id: 18,
                name: '18. Собственность российских граждан, постоянно проживающих за границей'
              }, {
                id: 19,
                name: '19. Собственность потребительской кооперации'
              }, {
                id: 15,
                name: '15. Собственность общественных и религиозных организаций (объединений)'
              }, {
                id: 50,
                name: '50. Собственность благотворительных организаций'
              }, {
                id: 51,
                name: '51. Собственность политических общественных объединений'
              }, {
                id: 52,
                name: '52. Собственность профессиональных союзов'
              }, {
                id: 53,
                name: '53. Собственность общественных объединений'
              }, {
                id: 54,
                name: '54. Собственность религиозных объединений'
              }, {
                id: 17,
                name: '17. Смешанная российская собственность'
              }, {
                id: 21,
                name: '21. Собственность международных организаций'
              }, {
                id: 22,
                name: '22. Собственность иностранных государств'
              }, {
                id: 23,
                name: '23. Собственность иностранных юридических лиц'
              }, {
                id: 24,
                name: '24. Собственность иностранных граждан и лиц без гражданства'
              }, {
                id: 27,
                name: '27. Смешанная иностранная собственность'
              }, {
                id: 31,
                name: '31. Совместная федеральная и иностранная собственность'
              }, {
                id: 32,
                name: '32. Совместная собственность субъектов Российской Федерации и иностранная собственность'
              }, {
                id: 33,
                name: '33. Совместная муниципальная и иностранная собственность'
              }, {
                id: 34,
                name: '34. Совместная частная и иностранная собственность'
              }, {
                id: 35,
                name: '35. Совместная собственность общественных и религиозных организаций (объединений) и иностранная собственность'
              }, {
                id: 41,
                name: '41. Смешанная российская собственность с долей федеральной собственности'
              }, {
                id: 42,
                name: '42. Смешанная российская собственность с долей собственности субъектов Российской Федерации'
              }, {
                id: 43,
                name: '43. Смешанная российская собственность с долями федеральной собственности и собственности субъектов Российской Федерации'
              }, {
                id: 49,
                name: '49. Иная смешанная российская собственность'
              }, {
                id: 61,
                name: '61. Собственность государственных корпораций'
              }];
              okfsFp.items = typeOfOwnerships;
              return _context.abrupt("return", ret);
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return OrgInfoBuildParametersService;
}();
exports.OrgInfoBuildParametersService = OrgInfoBuildParametersService;
var OrgInfoFormParametersService = /*#__PURE__*/function () {
  function OrgInfoFormParametersService(parameters, values, form, isReadonly) {
    _classCallCheck(this, OrgInfoFormParametersService);
    this.parameters = parameters;
    this.values = values;
    this.form = form;
    this.isReadonly = isReadonly;
    console.log("OrgInfoFormParametersService ctor. readonly = " + isReadonly);
    this.parameterValues = new _common.EventEmitter();
  }
  _createClass(OrgInfoFormParametersService, [{
    key: "resolveComponent",
    value: function resolveComponent(parameter) {
      if (parameter.name == "charter") {
        return _charterParameter.CharterFormParameterComponent;
      }
      if (parameter.name == "T00CollegiateManagement") {
        return _tagsParameter.TagsFormParameterComponent;
      }
      if (parameter.name == "T00okfs") {
        return _tagsParameter.TagsFormParameterComponent;
      }
      if (parameter.name == "T00okved") {
        return _okvedParameter.OkvedFormParameterComponent;
      }
      if (parameter.name == "T00internetAccessTechnology") {
        return _internetaccesstechnologyParameter.InternetAccessTechnologyFormParameterComponent;
      }
      if (parameter.name == "T00ProjectTypeForSchool") {
        return _tagsParameter.ProjectTypeFormParameterComponent;
      }
      if (parameter.name == "T00fio1") {
        return _directorParameter.DirectorFormParameterComponent;
      }
      if (parameter.name == "T00email") {
        return _emailParameter.EmailFormParameterComponent;
      }
      if (parameter.name == "T00web") {
        return _webParameter.WebFormParameterComponent;
      }
      if (parameter.name == "T00address" || parameter.name == "T00juridicalAddress") {
        return _addressParameter.AddressFormParameterComponent;
      }
      if (parameter.name == "T00phones") {
        return _phonesParameter.PhonesFormParameterComponent;
      }
      if (parameter.name == "T00FoodPayKpp") {
        return _foodpaykppParameter.FoodPayKppFormParameterComponent;
      }
      if (parameter.name == "T00kpp") {
        return _kppParameter.KppFormParameterComponent;
      }
      if (parameter.name == "T00inn") {
        return _innParameter.InnFormParameterComponent;
      }
      if (parameter.name == "T00FoodPayInn") {
        return _foodpayinnParameter.FoodPayInnFormParameterComponent;
      }
      if (parameter.name == "T00ogrn") {
        return _ogrnParameter.OgrnFormParameterComponent;
      }
      return null;
    }
  }, {
    key: "readonly",
    value: function readonly() {
      return this.isReadonly;
    }
  }, {
    key: "getValues",
    value: function getValues(parameterId) {
      var _a;
      var paramValues = (_a = this.values) === null || _a === void 0 ? void 0 : _a.filter(function (x) {
        return x.parameterId == parameterId;
      }).map(function (x) {
        return x.value;
      });
      return paramValues || [];
    }
  }, {
    key: "getValuesByParameterName",
    value: function getValuesByParameterName(parameterName) {
      var parameter = this.parameters.find(function (x) {
        return x.name == parameterName;
      });
      if (!parameter) {
        return null;
      }
      return this.getValues(parameter.id);
    }
  }, {
    key: "updateValues",
    value: function updateValues(parameterId, values) {
      var parameter = this.parameters.find(function (p) {
        return p.id == parameterId;
      });
      console.log("parameter '".concat(parameter.title, "' was changed"));
      var orherParamValues = this.values.filter(function (p) {
        return p.parameterId !== parameterId;
      });
      var paramValues = [];
      if (values.length == 0) {
        paramValues = [{
          parameterId: parameterId,
          value: {
            itemId: null,
            date: null,
            text: null
          }
        }];
      } else {
        paramValues = values.map(function (v) {
          return {
            parameterId: parameterId,
            value: v
          };
        });
      }
      this.values = orherParamValues.concat(paramValues);
      this.parameterValues.emit(this.values);
    }
  }, {
    key: "registerControler",
    value: function registerControler(component) {}
  }]);
  return OrgInfoFormParametersService;
}();
exports.OrgInfoFormParametersService = OrgInfoFormParametersService;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharterFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var CharterFormParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(CharterFormParameterController, _BaseFormParameterCon);
  var _super = _createSuper(CharterFormParameterController);
  function CharterFormParameterController() {
    _classCallCheck(this, CharterFormParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(CharterFormParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      var ustavFileExts = ['.pdf', '.bmp', '.ecw', '.gif', '.ico', '.ilbm', '.jpeg', '.jpeg 2000', '.vil', '.pcx', '.png', '.psd', '.tga', '.tiff', '.xps', '.xbm', '.rla', '.rpf', '.pnm', '.tif', '.tiff', '.jpg', '.jp2', '.doc', '.docx', '.pdf', '.rtf', '.jpg', '.png', '.odt', '.txt', '.xls', '.xlsx'];
      this.baseOnInit();
      var files = [];
      if (this.service.charterFile) {
        files.push(this.service.charterFile);
      }
      this.fa = {
        options: {
          multiple: false,
          showDescription: false,
          filesExtensions: function filesExtensions(uploadLimits) {
            return ustavFileExts;
          },
          readonly: this.readonly,
          onSuccessAttach: function onSuccessAttach(file) {
            _this.service.charterFile = file;
          },
          onSuccessDetach: function onSuccessDetach() {
            _this.service.charterFile = null;
          }
        },
        data: {
          files: files,
          context: {
            schoolId: this.service.schoolId,
            attachmentType: 200
          }
        }
      };
    }
  }]);
  return CharterFormParameterController;
}(_baseParameter.BaseFormParameterController);
var CharterFormParameterComponent = {
  controller: CharterFormParameterController,
  selector: "charterFormParameter",
  template: "\n\t\t<file-attachments settings=\"$ctrl.fa\"></file-attachments>\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.CharterFormParameterComponent = CharterFormParameterComponent;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OkvedFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
//справочник ОКВЕД
var okvedValues = [{
  id: '85',
  name: 'Образование'
}, {
  id: '85.1',
  name: 'Образование общее'
}, {
  id: '85.11',
  name: 'Образование дошкольное'
}, {
  id: '85.12',
  name: 'Образование начальное общее'
}, {
  id: '85.13',
  name: 'Образование основное общее'
}, {
  id: '85.14',
  name: 'Образование среднее общее'
}, {
  id: '85.2',
  name: 'Образование профессиональное'
}, {
  id: '85.21',
  name: 'Образование профессиональное среднее'
}, {
  id: '85.22',
  name: 'Образование высшее'
}, {
  id: '85.22.1',
  name: 'Образование высшее – бакалавриат'
}, {
  id: '85.22.2',
  name: 'Образование высшее – специалитет'
}, {
  id: '85.22.3',
  name: 'Образование высшее – магистратура'
}, {
  id: '85.23',
  name: 'Подготовка кадров высшей квалификации'
}, {
  id: '85.3',
  name: 'Обучение профессиональное'
}, {
  id: '85.30',
  name: 'Обучение профессиональное'
}, {
  id: '85.4',
  name: 'Образование дополнительное'
}, {
  id: '85.41',
  name: 'Образование дополнительное детей и взрослых'
}, {
  id: '85.41.1',
  name: 'Образование в области спорта и отдыха'
}, {
  id: '85.41.2',
  name: 'Образование в области культуры'
}, {
  id: '85.41.9',
  name: 'Образование дополнительное детей и взрослых прочее, не включенное в другие группировки'
}, {
  id: '85.42',
  name: 'Образование профессиональное дополнительное'
}, {
  id: '85.42.1',
  name: 'Деятельность школ подготовки водителей автотранспортных средств'
}, {
  id: '85.42.2',
  name: 'Деятельность школ обучения вождению воздушных и плавательных судов, без выдачи коммерческих сертификатов и лицензий'
}, {
  id: '85.42.9',
  name: 'Деятельность по дополнительному профессиональному образованию прочая, не включенная в другие группировки'
}];
var OkvedParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  OkvedParameterController.$inject = ["language", "$element"];
  _inherits(OkvedParameterController, _BaseFormParameterCon);
  var _super = _createSuper(OkvedParameterController);
  /*@ngInject*/
  function OkvedParameterController(language, $element) {
    var _this;
    _classCallCheck(this, OkvedParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$element = $element;
    _this.value = "";
    _this.model = [];
    return _this;
  }
  _createClass(OkvedParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.required = this.parameter.required;
      if (this.values.length > 0) {
        this.value = this.values[0].text;
        this.model = this.value.split(", ");
      }
      this.baseOnInit();
      this.initSelect2();
    }
  }, {
    key: "initSelect2",
    value: function initSelect2() {
      var _this2 = this;
      var select2data = okvedValues.map(function (x) {
        return {
          id: x.id,
          text: x.name,
          obj: x
        };
      });
      var cutomMatcher = function cutomMatcher(value) {
        var regex = /^(\d{2})(\.\d{2})?(\.\d{1,2})?$/;
        return regex.test(value);
      };
      this.settings = {
        data: select2data,
        multiple: true,
        disabled: this.readonly,
        onChange: function onChange() {
          return _this2.onChange();
        },
        templateResult: function templateResult(state) {
          if (!state.id) {
            return state.text;
          }
          if (state.text === state.id) {
            if (cutomMatcher(state.text)) {
              return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span></span>');
            } else {
              return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span>Недопустимый формат. Можно вводить только цифры, разделённые точками.</span>');
            }
          } else {
            return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span>' + state.text + '</span>');
          }
        },
        templateSelection: function templateSelection(state, a, b, c) {
          return state.id;
        },
        matcher: function matcher(params, data) {
          if ($.trim(params.term) === '') {
            return data;
          }
          if (typeof data.text === 'undefined') {
            return null;
          }
          var testStr = data.id + " " + data.text;
          if (testStr.indexOf(params.term) > -1) {
            return data;
          }
          return null;
        },
        tags: function tags(term) {
          if (!cutomMatcher(term)) {
            return;
          }
          return {
            id: term,
            value: term
          };
        }
      };
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      if (this.model == null || typeof this.model == "undefined") {
        this.service.updateValues(this.parameter.id, setValue);
        return;
      }
      var saveModel = this.model.join(", ");
      setValue.push({
        text: saveModel
      });
      this.service.updateValues(this.parameter.id, setValue);
    }
  }]);
  return OkvedParameterController;
}(_baseParameter.BaseFormParameterController);
var OkvedFormParameterComponent = {
  controller: OkvedParameterController,
  selector: "okvedFormParameter",
  template: "\n\t\t<select2 name=\"{{$ctrl.parameter.name}}\" ng-if=\"$ctrl.settings\" track-changes class=\"form-control\" options=\"$ctrl.settings\" ng-required=\"$ctrl.required\" ng-model=\"$ctrl.model\"></select2>\n\t\t<input name=\"{{$ctrl.parameter.name}}\" ng-if=\"$ctrl.readonly\" class=\"form-control\" type=\"text\" disabled=\"disabled\" ng-value=\"$ctrl.item && $ctrl.item.name\">\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.OkvedFormParameterComponent = OkvedFormParameterComponent;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InternetAccessTechnologyFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
//справочник технологии доступа в интернет
var internetAccessTechnologyValues = [{
  id: '3G/4G модем',
  name: '3G/4G модем'
}, {
  id: 'хDSL',
  name: 'хDSL'
}, {
  id: 'выделенный канал',
  name: 'выделенный канал'
}, {
  id: 'спутник',
  name: 'спутник'
}, {
  id: 'Dial-up модем',
  name: 'Dial-up модем'
}, {
  id: 'PON',
  name: 'PON'
}, {
  id: 'FTTx',
  name: 'FTTx'
}, {
  id: 'другое',
  name: 'другое'
}];
var InternetAccessTechnologyParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  InternetAccessTechnologyParameterController.$inject = ["language", "$element"];
  _inherits(InternetAccessTechnologyParameterController, _BaseFormParameterCon);
  var _super = _createSuper(InternetAccessTechnologyParameterController);
  /*@ngInject*/
  function InternetAccessTechnologyParameterController(language, $element) {
    var _this;
    _classCallCheck(this, InternetAccessTechnologyParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$element = $element;
    _this.value = "";
    _this.model = [];
    return _this;
  }
  _createClass(InternetAccessTechnologyParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.values.length > 0) {
        this.value = this.values[0].text;
        this.model = this.value.split(", ");
      }
      this.baseOnInit();
      this.initSelect2();
    }
  }, {
    key: "initSelect2",
    value: function initSelect2() {
      var _this2 = this;
      var select2data = internetAccessTechnologyValues.map(function (x) {
        return {
          id: x.id,
          text: x.name,
          obj: x
        };
      });
      this.model.forEach(function (x) {
        if (!select2data.find(function (y) {
          return y.id == x;
        })) {
          select2data.push({
            id: x,
            text: x,
            obj: {
              id: x,
              name: x
            }
          });
        }
      });
      this.settings = {
        data: select2data,
        multiple: true,
        disabled: this.readonly,
        onChange: function onChange() {
          return _this2.onChange();
        },
        templateResult: function templateResult(state) {
          if (!state.id) {
            return state.text;
          }
          if (state.text === state.id) {
            return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span></span>');
          } else {
            return $('<span style="display: inline-block; width: 70px;">' + state.id + '</span><span>' + state.text + '</span>');
          }
        },
        templateSelection: function templateSelection(state, a, b, c) {
          return state.id;
        },
        tags: function tags(term) {
          return {
            id: term,
            value: term
          };
        },
        createTag: function createTag(params) {
          var term = params.term ? params.term.toString().trim() : '';
          if (term === '') {
            return null;
          }
          return {
            id: term,
            text: term,
            newTag: false
          };
        },
        search: true
      };
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      var saveModel = this.model.join(", ");
      setValue.push({
        text: saveModel
      });
      this.service.updateValues(this.parameter.id, setValue);
    }
  }]);
  return InternetAccessTechnologyParameterController;
}(_baseParameter.BaseFormParameterController);
var InternetAccessTechnologyFormParameterComponent = {
  controller: InternetAccessTechnologyParameterController,
  selector: "internetaccesstechnologyFormParameter",
  template: "\n\t\t<select2 name=\"ACCESS\" ng-if=\"$ctrl.settings\" track-changes class=\"form-control\" options=\"$ctrl.settings\" required ng-model=\"$ctrl.model\"></select2>\n\t\t<input name=\"ACCESS\" ng-if=\"$ctrl.readonly\" class=\"form-control\" type=\"text\" disabled=\"disabled\" ng-value=\"$ctrl.item && $ctrl.item.name\">\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.InternetAccessTechnologyFormParameterComponent = InternetAccessTechnologyFormParameterComponent;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsFormParameterComponent = exports.ProjectTypeFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var TagsParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  _inherits(TagsParameterController, _BaseFormParameterCon);
  var _super = _createSuper(TagsParameterController);
  function TagsParameterController() {
    _classCallCheck(this, TagsParameterController);
    return _super.apply(this, arguments);
  }
  _createClass(TagsParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.baseOnInit();
      this.required = this.parameter.required;
      var multiple = typeof this.parameter.multiple == "undefined" ? true : this.parameter.multiple;
      console.log('init tags. readonly: ' + this.readonly);
      var items = this.parameter.items;
      var select2data = items.map(function (x) {
        return {
          id: x.id,
          text: x.name,
          obj: x
        };
      });
      if (this.values.length > 0) {
        if (multiple) {
          var ids = this.values[0].text.split(", ");
          this.model = select2data.filter(function (i) {
            return ids.findIndex(function (v) {
              return v == i.id;
            }) > -1;
          }).map(function (x) {
            return x.id;
          });
        } else {
          this.model = this.values[0].text;
        }
      } else {
        if (multiple) {
          this.model = [];
        } else {
          this.model = null;
        }
      }
      this.settings = {
        data: select2data,
        placeholder: "",
        allowClear: !this.required,
        multiple: multiple,
        disabled: this.readonly,
        onChange: function onChange() {
          return _this.onChange();
        }
      };
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      if (this.model == null || typeof this.model == "undefined") {
        this.service.updateValues(this.parameter.id, setValue);
        return;
      }
      if (this.settings.multiple) {
        var saveModel = this.model.join(", ");
        setValue.push({
          text: saveModel
        });
      } else {
        var _saveModel = this.model.id;
        setValue.push({
          text: _saveModel
        });
      }
      this.service.updateValues(this.parameter.id, setValue);
    }
  }]);
  return TagsParameterController;
}(_baseParameter.BaseFormParameterController);
var TagsFormParameterComponent = {
  controller: TagsParameterController,
  selector: "tagsFormParameter",
  template: "\n\t\t<select2 name=\"{{$ctrl.parameter.name}}\"  track-changes class=\"form-control\" options=\"$ctrl.settings\" ng-required=\"$ctrl.required\" ng-model=\"$ctrl.model\"></select2>\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.TagsFormParameterComponent = TagsFormParameterComponent;
var ProjectTypeFormParameterComponent = {
  controller: TagsParameterController,
  selector: "projectTypeFormParameter",
  template: "\n\t\t<select2 name=\"{{$ctrl.parameter.name}}\" track-changes class=\"form-control\" options=\"$ctrl.settings\" ng-model=\"$ctrl.model\"></select2>\n\t",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.ProjectTypeFormParameterComponent = ProjectTypeFormParameterComponent;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectorFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var DirectorParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  DirectorParameterController.$inject = ["usersRepository", "orgInfoRepository", "language", "$q", "appContext", "navigationService", "$dialogs"];
  _inherits(DirectorParameterController, _BaseFormParameterCon);
  var _super = _createSuper(DirectorParameterController);
  /*@ngInject*/
  function DirectorParameterController(usersRepository, orgInfoRepository, language, $q, appContext, navigationService, $dialogs) {
    var _this;
    _classCallCheck(this, DirectorParameterController);
    _this = _super.call(this, language);
    _this.usersRepository = usersRepository;
    _this.orgInfoRepository = orgInfoRepository;
    _this.language = language;
    _this.$q = $q;
    _this.appContext = appContext;
    _this.navigationService = navigationService;
    _this.$dialogs = $dialogs;
    _this.director = null;
    return _this;
  }
  _createClass(DirectorParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      this.$q.all([this.usersRepository.getStaffList().then(function (result) {
        _this2.staffList = result;
      }), this.usersRepository.getDirector(+this.appContext.schoolId).then(function (result) {
        _this2.director = result;
      })]).then(function () {
        _this2.baseOnInit();
        _this2.initSelect2();
      });
    }
  }, {
    key: "initSelect2",
    value: function initSelect2() {
      var _this3 = this;
      var notSelected = {
        id: -2,
        name: "<".concat(this.language.Generic.Movement.kNotSelected, ">")
      };
      if (this.director) {
        this.model = {
          id: this.director.id,
          name: this.director.name
        };
      } else {
        this.model = notSelected;
        if (this.values && this.values.length) {
          var directorText = this.values[0].text.trim();
          if (directorText != "") {
            this.model = {
              id: -1,
              name: this.values[0].text
            };
            this.staffList.push(this.model);
          }
        }
      }
      this.staffList.unshift(notSelected);
      var select2data = this.staffList.map(function (x) {
        return {
          id: x.id,
          text: x.name,
          obj: x
        };
      });
      this.settings = {
        onChange: function onChange() {
          return _this3.onChange();
        },
        data: select2data,
        tags: true,
        createTag: function createTag(params) {
          var term = params.term ? params.term.toString().trim() : '';
          if (term === '') {
            return null;
          }
          return {
            id: "-1" + term,
            text: term,
            newTag: false
          };
        }
      };
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var setValue = [];
      if (typeof this.model === "string") {
        setValue.push({
          text: this.model.slice(2)
        });
      } else {
        setValue.push({
          text: this.model.name,
          itemId: this.model.id
        });
      }
      this.service.updateValues(this.parameter.id, setValue);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _a;
      if (((_a = this.model) === null || _a === void 0 ? void 0 : _a.id) > 0) {
        this.navigationService.navigateTo("/angular/school/userinfo/staff/".concat(this.model.id));
      } else {
        this.$dialogs.message(this.language.Generic.SchoolInfo.kNoUserInfoExists);
      }
    }
  }]);
  return DirectorParameterController;
}(_baseParameter.BaseFormParameterController);
var DirectorFormParameterComponent = {
  controller: DirectorParameterController,
  selector: "directorFormParameter",
  template: "<div class=\"input-group\">\n\t\t\t\t\t<select2 track-changes ng-if=\"$ctrl.settings\" name=\"DIRECTORID\" options=\"$ctrl.settings\" class=\"form-control\" ng-model=\"$ctrl.model\" ng-disabled=\"$ctrl.readonly\">\n\t\t\t\t\t</select2>\n\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\" ng-click=\"$ctrl.getUserInfo()\">\n\t\t\t\t\t\t\t\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</span>\n\t\t\t\t</div>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.DirectorFormParameterComponent = DirectorFormParameterComponent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var EmailParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  EmailParameterController.$inject = ["language"];
  _inherits(EmailParameterController, _BaseFormParameterCon);
  var _super = _createSuper(EmailParameterController);
  /*@ngInject*/
  function EmailParameterController(language) {
    var _this;
    _classCallCheck(this, EmailParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    return _this;
  }
  _createClass(EmailParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }, {
    key: "emailError",
    value: function emailError() {
      return this.language.Generic.SetupSchoolUI.kSetEMail;
    }
  }]);
  return EmailParameterController;
}(_baseParameter.BaseFormParameterController);
var EmailFormParameterComponent = {
  controller: EmailParameterController,
  selector: "emailFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.EM.$invalid }\">\n\t\t\t\t<input track-changes email-input type=\"text\" class=\"form-control\" name=\"EM\" size=\"35\" maxlength=\"80\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.EM.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"email\">{{$ctrl.emailError()}}</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.EmailFormParameterComponent = EmailFormParameterComponent;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var WebParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  WebParameterController.$inject = ["language"];
  _inherits(WebParameterController, _BaseFormParameterCon);
  var _super = _createSuper(WebParameterController);
  /*@ngInject*/
  function WebParameterController(language) {
    var _this;
    _classCallCheck(this, WebParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    return _this;
  }
  _createClass(WebParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }, {
    key: "webError",
    value: function webError() {
      return this.language.Generic.SchoolInfo.kEnterProtocol;
    }
  }]);
  return WebParameterController;
}(_baseParameter.BaseFormParameterController);
var WebFormParameterComponent = {
  controller: WebParameterController,
  selector: "webFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.WEB.$invalid }\">\n\t\t\t\t<input track-changes  type=\"text\" class=\"form-control\" name=\"WEB\" size=\"40\" maxlength=\"1000\" ng-disabled=\"$ctrl.readonly\" ng-pattern=\"/^(http|https):///\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.WEB.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"pattern\">{{$ctrl.webError()}}</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.WebFormParameterComponent = WebFormParameterComponent;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhonesFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
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
var PhonesParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  PhonesParameterController.$inject = ["language"];
  _inherits(PhonesParameterController, _BaseFormParameterCon);
  var _super = _createSuper(PhonesParameterController);
  /*@ngInject*/
  function PhonesParameterController(language) {
    var _this;
    _classCallCheck(this, PhonesParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    return _this;
  }
  _createClass(PhonesParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }, {
    key: "phonesError",
    value: function phonesError() {
      return this.language.Generic.SchoolInfo.kPhoneNoValidMessage;
    }
  }]);
  return PhonesParameterController;
}(_baseParameter.BaseFormParameterController);
var PhonesFormParameterComponent = {
  controller: PhonesParameterController,
  selector: "phonesFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.PHONES.$invalid }\">\n\t\t\t\t<input track-changes  type=\"text\" class=\"form-control FilterWhiteSpace\" name=\"PHONES\" size=\"40\" maxlength=\"250\" ng-disabled=\"$ctrl.readonly\" ng-pattern=\"/^[0-9]{10}(,[0-9]{10})*$/\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.PHONES.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"pattern\">{{$ctrl.phonesError()}}</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.PhonesFormParameterComponent = PhonesFormParameterComponent;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayKppFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
var _orginfo = __webpack_require__(67);
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
var FoodPayKppParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  FoodPayKppParameterController.$inject = ["language", "$scope"];
  _inherits(FoodPayKppParameterController, _BaseFormParameterCon);
  var _super = _createSuper(FoodPayKppParameterController);
  /*@ngInject*/
  function FoodPayKppParameterController(language, $scope) {
    var _this;
    _classCallCheck(this, FoodPayKppParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$scope = $scope;
    return _this;
  }
  _createClass(FoodPayKppParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      var _a;
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
      var innInfo = this.service.getValuesByParameterName("T00FoodPayInn");
      this.inn = (_a = innInfo[0]) === null || _a === void 0 ? void 0 : _a.text;
      this.service.parameterValues.on(function (values) {
        if (!values) {
          _this2.inn = "";
        } else {
          var parameterValue = values.find(function (x) {
            return x.parameterId == _orginfo.SchoolInfoParam.T00FoodPayInn;
          });
          if (parameterValue) {
            _this2.inn = parameterValue.value.text;
          } else {
            _this2.inn = "";
          }
        }
      });
      this.$scope.$watch(function () {
        return _this2.inn;
      }, function () {
        _this2.form.FOODPAYKPP.$validate();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }]);
  return FoodPayKppParameterController;
}(_baseParameter.BaseFormParameterController);
var FoodPayKppFormParameterComponent = {
  controller: FoodPayKppParameterController,
  selector: "foodPayKppFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.FOODPAYKPP.$invalid }\">\n\t\t\t\t<input track-changes kpp-input inn=\"$ctrl.inn\" type=\"text\" class=\"form-control FilterWhiteSpace\" name=\"FOODPAYKPP\" size=\"9\" maxlength=\"9\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.FOODPAYKPP.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppDigitsOnly\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppInnRelation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppLength\">\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 9 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.FoodPayKppFormParameterComponent = FoodPayKppFormParameterComponent;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolLocationType = exports.SchoolInfoParam = exports.HierarchyLevel = exports.FounderType = void 0;
var SchoolLocationType;
exports.SchoolLocationType = SchoolLocationType;
(function (SchoolLocationType) {
  SchoolLocationType["InProvince"] = "InProvince";
  SchoolLocationType["InCity"] = "InCity";
})(SchoolLocationType || (exports.SchoolLocationType = SchoolLocationType = {}));
var HierarchyLevel;
exports.HierarchyLevel = HierarchyLevel;
(function (HierarchyLevel) {
  HierarchyLevel[HierarchyLevel["Mixed"] = 1] = "Mixed";
  HierarchyLevel[HierarchyLevel["Province"] = 2] = "Province";
  HierarchyLevel[HierarchyLevel["City"] = 3] = "City";
  HierarchyLevel[HierarchyLevel["DistrictCity"] = 4] = "DistrictCity";
})(HierarchyLevel || (exports.HierarchyLevel = HierarchyLevel = {}));
var SchoolInfoParam;
exports.SchoolInfoParam = SchoolInfoParam;
(function (SchoolInfoParam) {
  SchoolInfoParam[SchoolInfoParam["T00Inn"] = 8] = "T00Inn";
  SchoolInfoParam[SchoolInfoParam["T00Kpp"] = 9] = "T00Kpp";
  SchoolInfoParam[SchoolInfoParam["T00FoodPayInn"] = 101] = "T00FoodPayInn";
  SchoolInfoParam[SchoolInfoParam["T00FoodPayKpp"] = 102] = "T00FoodPayKpp";
})(SchoolInfoParam || (exports.SchoolInfoParam = SchoolInfoParam = {}));
var FounderType;
exports.FounderType = FounderType;
(function (FounderType) {
  FounderType[FounderType["EducManagement"] = 1] = "EducManagement";
  FounderType[FounderType["OtherOrganizations"] = 2] = "OtherOrganizations";
})(FounderType || (exports.FounderType = FounderType = {}));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KppInputDirective = exports.KppFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
var _orginfo = __webpack_require__(67);
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
var KppInputDirective = function KppInputDirective() {
  return {
    restrict: "A",
    require: 'ngModel',
    scope: {
      inn: '='
    },
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$validators.kppDigitsOnly = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if (modelValue && !new RegExp("^[0-9]+$").test(modelValue)) {
          return false;
        }
        return true;
      };
      ngModel.$validators.kppInnRelation = function (modelValue, viewValue) {
        var _a;
        if (element.prop["disabled"]) {
          return true;
        }
        if (((_a = scope.inn) === null || _a === void 0 ? void 0 : _a.length) == 12 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) > 0) {
          return false;
        }
        return true;
      };
      ngModel.$validators.kppLength = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) > 0 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 9) {
          return false;
        }
        return true;
      };
    }
  };
};
exports.KppInputDirective = KppInputDirective;
var KppParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  KppParameterController.$inject = ["language", "$scope"];
  _inherits(KppParameterController, _BaseFormParameterCon);
  var _super = _createSuper(KppParameterController);
  /*@ngInject*/
  function KppParameterController(language, $scope) {
    var _this;
    _classCallCheck(this, KppParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$scope = $scope;
    return _this;
  }
  _createClass(KppParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      var _a;
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
      var innInfo = this.service.getValuesByParameterName("T00inn");
      this.inn = (_a = innInfo[0]) === null || _a === void 0 ? void 0 : _a.text;
      this.service.parameterValues.on(function (values) {
        if (!values) {
          _this2.inn = "";
        } else {
          var parameterValue = values.find(function (x) {
            return x.parameterId == _orginfo.SchoolInfoParam.T00Inn;
          });
          if (parameterValue) {
            _this2.inn = parameterValue.value.text;
          } else {
            _this2.inn = "";
          }
        }
      });
      this.$scope.$watch(function () {
        return _this2.inn;
      }, function () {
        _this2.form.KPP.$validate();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }]);
  return KppParameterController;
}(_baseParameter.BaseFormParameterController);
var KppFormParameterComponent = {
  controller: KppParameterController,
  selector: "kppFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.KPP.$invalid }\">\n\t\t\t\t<input track-changes kpp-input inn=\"$ctrl.inn\" type=\"text\" class=\"form-control FilterWhiteSpace\" name=\"KPP\" size=\"9\" maxlength=\"9\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.KPP.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppDigitsOnly\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppInnRelation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"kppLength\">\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 9 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.KppFormParameterComponent = KppFormParameterComponent;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OgrnInputDirective = exports.OgrnFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
var _orginfo = __webpack_require__(67);
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
var OgrnInputDirective = function OgrnInputDirective() {
  return {
    restrict: "A",
    require: 'ngModel',
    scope: {
      inn: '='
    },
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$validators.ogrnDigitsOnly = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if (modelValue && !new RegExp("^[0-9]+$").test(modelValue)) {
          return false;
        }
        return true;
      };
      ngModel.$validators.ogrnInn12Relation = function (modelValue, viewValue) {
        var _a;
        if (element.prop["disabled"]) {
          return true;
        }
        if (((_a = scope.inn) === null || _a === void 0 ? void 0 : _a.length) == 12 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 15) {
          return false;
        }
        return true;
      };
      ngModel.$validators.ogrnInn10Relation = function (modelValue, viewValue) {
        var _a;
        if (element.prop["disabled"]) {
          return true;
        }
        if (((_a = scope.inn) === null || _a === void 0 ? void 0 : _a.length) == 10 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 13) {
          return false;
        }
        return true;
      };
      ngModel.$validators.ogrnLength = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) > 0 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 13 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 15) {
          return false;
        }
        return true;
      };
    }
  };
};
exports.OgrnInputDirective = OgrnInputDirective;
var OgrnParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  OgrnParameterController.$inject = ["language", "$scope"];
  _inherits(OgrnParameterController, _BaseFormParameterCon);
  var _super = _createSuper(OgrnParameterController);
  /*@ngInject*/
  function OgrnParameterController(language, $scope) {
    var _this;
    _classCallCheck(this, OgrnParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$scope = $scope;
    return _this;
  }
  _createClass(OgrnParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      var _a;
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
      var innInfo = this.service.getValuesByParameterName("T00inn");
      this.inn = (_a = innInfo[0]) === null || _a === void 0 ? void 0 : _a.text;
      this.service.parameterValues.on(function (values) {
        if (!values) {
          _this2.inn = "";
        } else {
          var parameterValue = values.find(function (x) {
            return x.parameterId == _orginfo.SchoolInfoParam.T00Inn;
          });
          if (parameterValue) {
            _this2.inn = parameterValue.value.text;
          } else {
            _this2.inn = "";
          }
        }
      });
      this.$scope.$watch(function () {
        return _this2.inn;
      }, function () {
        _this2.form.OGRN.$validate();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }]);
  return OgrnParameterController;
}(_baseParameter.BaseFormParameterController);
var OgrnFormParameterComponent = {
  controller: OgrnParameterController,
  selector: "ogrnFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.OGRN.$invalid }\">\n\t\t\t\t<input track-changes ogrn-input inn=\"$ctrl.inn\" type=\"text\" class=\"form-control FilterWhiteSpace\" name=\"OGRN\" size=\"15\" maxlength=\"15\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.OGRN.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"ogrnDigitsOnly\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"ogrnInn10Relation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 13 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"ogrnInn12Relation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 15 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"ogrnLength\">\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 13 \u0438\u043B\u0438 15 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.OgrnFormParameterComponent = OgrnFormParameterComponent;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnInputDirective = exports.InnFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
var _orginfo = __webpack_require__(67);
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
var InnInputDirective = function InnInputDirective() {
  return {
    restrict: "A",
    require: 'ngModel',
    scope: {
      kpp: '='
    },
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$validators.innDigitsOnly = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if (modelValue && !new RegExp("^[0-9]+$").test(modelValue)) {
          return false;
        }
        return true;
      };
      ngModel.$validators.innKppRelation = function (modelValue, viewValue) {
        var _a;
        if (element.prop["disabled"]) {
          return true;
        }
        if (((_a = scope.kpp) === null || _a === void 0 ? void 0 : _a.length) && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) == 12) {
          return false;
        }
        return true;
      };
      ngModel.$validators.innLength = function (modelValue, viewValue) {
        if (element.prop["disabled"]) {
          return true;
        }
        if ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) > 0 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 10 && (modelValue === null || modelValue === void 0 ? void 0 : modelValue.length) != 12) {
          return false;
        }
        return true;
      };
    }
  };
};
exports.InnInputDirective = InnInputDirective;
var InnParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  InnParameterController.$inject = ["language", "$scope"];
  _inherits(InnParameterController, _BaseFormParameterCon);
  var _super = _createSuper(InnParameterController);
  /*@ngInject*/
  function InnParameterController(language, $scope) {
    var _this;
    _classCallCheck(this, InnParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$scope = $scope;
    return _this;
  }
  _createClass(InnParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      var _a;
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
      var kppInfo = this.service.getValuesByParameterName("T00kpp");
      this.kpp = (_a = kppInfo[0]) === null || _a === void 0 ? void 0 : _a.text;
      this.service.parameterValues.on(function (values) {
        if (!values) {
          _this2.kpp = "";
        } else {
          var parameterValue = values.find(function (x) {
            return x.parameterId == _orginfo.SchoolInfoParam.T00Kpp;
          });
          if (parameterValue) {
            _this2.kpp = parameterValue.value.text;
          } else {
            _this2.kpp = "";
          }
        }
      });
      this.$scope.$watch(function () {
        return _this2.kpp;
      }, function () {
        _this2.form.INN.$validate();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }]);
  return InnParameterController;
}(_baseParameter.BaseFormParameterController);
var InnFormParameterComponent = {
  controller: InnParameterController,
  selector: "innFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.INN.$invalid }\">\n\t\t\t\t<input track-changes type=\"text\" inn-input kpp=\"$ctrl.kpp\" required class=\"form-control FilterWhiteSpace\" name=\"INN\" maxlength=\"12\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.INN.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innKppRelation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u041A\u041F\u041F \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E</span>\t\t\t\t\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innDigitsOnly\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innLength\">\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 10 \u0438\u043B\u0438 12 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"required\">\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.InnFormParameterComponent = InnFormParameterComponent;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayInnFormParameterComponent = void 0;
var _baseParameter = __webpack_require__(5);
var _orginfo = __webpack_require__(67);
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
var FoodPayInnParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  FoodPayInnParameterController.$inject = ["language", "$scope"];
  _inherits(FoodPayInnParameterController, _BaseFormParameterCon);
  var _super = _createSuper(FoodPayInnParameterController);
  /*@ngInject*/
  function FoodPayInnParameterController(language, $scope) {
    var _this;
    _classCallCheck(this, FoodPayInnParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$scope = $scope;
    return _this;
  }
  _createClass(FoodPayInnParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      var _a;
      this.baseOnInit();
      if (this.values.length) {
        this.model = this.values[0].text;
      }
      var kppInfo = this.service.getValuesByParameterName("T00FoodPayKpp");
      this.kpp = (_a = kppInfo[0]) === null || _a === void 0 ? void 0 : _a.text;
      this.service.parameterValues.on(function (values) {
        if (!values) {
          _this2.kpp = "";
        } else {
          var parameterValue = values.find(function (x) {
            return x.parameterId == _orginfo.SchoolInfoParam.T00FoodPayKpp;
          });
          if (parameterValue) {
            _this2.kpp = parameterValue.value.text;
          } else {
            _this2.kpp = "";
          }
        }
      });
      this.$scope.$watch(function () {
        return _this2.kpp;
      }, function () {
        _this2.form.FOODPAYINN.$validate();
      });
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }]);
  return FoodPayInnParameterController;
}(_baseParameter.BaseFormParameterController);
var FoodPayInnFormParameterComponent = {
  controller: FoodPayInnParameterController,
  selector: "foodPayInnFormParameter",
  template: "\n\t\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.FOODPAYINN.$invalid }\">\n\t\t\t\t<input track-changes type=\"text\" inn-input kpp=\"$ctrl.kpp\" class=\"form-control FilterWhiteSpace\" name=\"FOODPAYINN\" maxlength=\"12\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.model\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t<div ng-messages=\"$ctrl.form.FOODPAYINN.$error\">\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innKppRelation\">\u0414\u043B\u044F \u043F\u043E\u043B\u044F \u0418\u041D\u041D \u0434\u043B\u0438\u043D\u043E\u0439 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u041A\u041F\u041F \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E</span>\t\t\t\t\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innDigitsOnly\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B</span>\n\t\t\t\t\t<span class=\"help-block\" ng-message=\"innLength\">\u0414\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 10 \u0438\u043B\u0438 12 \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C</span>\n\t\t\t\t</div>\n\t\t\t</ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.FoodPayInnFormParameterComponent = FoodPayInnFormParameterComponent;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressFormParameterComponent = void 0;
var _address = __webpack_require__(73);
var _baseParameter = __webpack_require__(5);
var _editschooladdress = __webpack_require__(74);
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
var AddressParameterController = /*#__PURE__*/function (_BaseFormParameterCon) {
  AddressParameterController.$inject = ["language", "$uibModal", "$longWork", "schoolAddressRepository"];
  _inherits(AddressParameterController, _BaseFormParameterCon);
  var _super = _createSuper(AddressParameterController);
  /*@ngInject*/
  function AddressParameterController(language, $uibModal, $longWork, schoolAddressRepository) {
    var _this;
    _classCallCheck(this, AddressParameterController);
    _this = _super.call(this, language);
    _this.language = language;
    _this.$uibModal = $uibModal;
    _this.$longWork = $longWork;
    _this.schoolAddressRepository = schoolAddressRepository;
    return _this;
  }
  _createClass(AddressParameterController, [{
    key: "$onInit",
    value: function $onInit() {
      this.baseOnInit();
      this.values = this.service.getValues(this.parameter.id);
      if (this.values.length) {
        // Обертка для значения параметра. Нужна, чтобы по ссылке изменять его значение.
        this.model = {
          value: this.values[0].text
        };
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var values = [{
        text: this.model.value
      }];
      this.service.updateValues(this.parameter.id, values);
    }
  }, {
    key: "phonesError",
    value: function phonesError() {
      return this.language.Generic.SchoolInfo.kPhoneNoValidMessage;
    }
  }, {
    key: "editAddress",
    value: function editAddress() {
      var _this2 = this;
      var tempService = this.service;
      var schoolId = tempService.schoolId;
      var schoolAddressType = this.parameter.name == "T00address" ? _address.SchoolAddressType.PostAddress : _address.SchoolAddressType.LegalAddress;
      var loadAddress = this.schoolAddressRepository.getSchoolAddress(schoolId, schoolAddressType);
      this.$longWork.execute(loadAddress).then(function (editAddressInfo) {
        if (editAddressInfo) {
          _this2.openEditAddressDialog(schoolId, editAddressInfo);
        } else {
          return true;
        }
      }).then(function (needBaseAddress) {
        if (needBaseAddress) {
          var loadBaseAddress = _this2.schoolAddressRepository.getSchoolAddressBase(schoolId);
          _this2.$longWork.execute(loadBaseAddress).then(function (baseAddress) {
            _this2.openEditAddressDialog(schoolId, baseAddress);
          });
        }
      });
    }
  }, {
    key: "openEditAddressDialog",
    value: function openEditAddressDialog(_schoolId, editAddressInfo) {
      var _this3 = this;
      var openModal = function openModal() {
        var fiasMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var editDialog = _this3.$uibModal.open({
          templateUrl: _editschooladdress.EditSchoolAddressComponent.templateUrl,
          controller: _editschooladdress.EditSchoolAddressComponent.controller,
          controllerAs: _editschooladdress.EditSchoolAddressComponent.controllerAs,
          backdrop: "static",
          size: "lg",
          resolve: {
            address: function address() {
              return editAddressInfo || {};
            },
            addressParameter: function addressParameter() {
              return _this3.parameter;
            },
            addressParameterModel: function addressParameterModel() {
              return _this3.model;
            },
            schoolId: function schoolId() {
              return _schoolId;
            }
          }
        });
        var modalResult = editDialog.result;
        modalResult.then(function (changed) {
          if (changed) {
            _this3.onChange();
          }
        }, function (reason) {
          if (reason && reason.type == "changeMode") {
            openModal(reason.fiasMode);
          }
        });
      };
      openModal();
    }
  }]);
  return AddressParameterController;
}(_baseParameter.BaseFormParameterController);
var AddressFormParameterComponent = {
  controller: AddressParameterController,
  selector: "addressFormParameter",
  template: "\n    <ng-form name=\"$ctrl.form\">\n        <div style=\"display: flex; flex-direction: row; align-items: center;\">\n            <div style=\"width: 94%;\">\n                <textarea track-changes class=\"form-control\" style=\"resize: none;\" name=\"address\" size=\"40\" maxlength=\"1000\" ng-model=\"$ctrl.model.value\" ng-change=\"$ctrl.onChange()\" disabled>\n                </textarea>\n            </div>\n\n            <div style=\"width: 6%; margin: 0 0 0 15px\" class=\"ctx-btns-icons ctx-btns-icons-left ctx-btns-icons-lg\">\n                <a href=\"JavaScript:void(0)\" ng-click=\"$ctrl.editAddress();\" title=\"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441\" class=\"primary\"\">\n                    <span class=\"glyphicon glyphicon-pencil\"></span>\n                </a>\n            </div>\n        </div>\n    </ng-form>",
  bindings: {
    parameter: "<",
    values: "<",
    service: "<"
  }
};
exports.AddressFormParameterComponent = AddressFormParameterComponent;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolAddressType = exports.AddressContentType = void 0;
var SchoolAddressType;
exports.SchoolAddressType = SchoolAddressType;
(function (SchoolAddressType) {
  // Почтовый адрес
  SchoolAddressType["PostAddress"] = "P";
  // Юридический адрес
  SchoolAddressType["LegalAddress"] = "L";
})(SchoolAddressType || (exports.SchoolAddressType = SchoolAddressType = {}));
var AddressContentType;
exports.AddressContentType = AddressContentType;
(function (AddressContentType) {
  AddressContentType["country"] = "country";
  AddressContentType["region"] = "region";
  AddressContentType["district"] = "district";
  AddressContentType["city"] = "city";
  AddressContentType["street"] = "street";
  AddressContentType["building"] = "building";
  AddressContentType["unknown"] = "unknown";
})(AddressContentType || (exports.AddressContentType = AddressContentType = {}));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSchoolAddressComponent = void 0;
var _address = __webpack_require__(73);
var _extDeferred = __webpack_require__(75);
var _netcityModalCtrl = __webpack_require__(18);
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
var EditSchoolAddressController = /*#__PURE__*/function (_NetCityModalControll) {
  EditSchoolAddressController.$inject = ["$scope", "changeTracker", "$dialogs", "$uibModalInstance", "language", "address", "addressParameter", "addressParameterModel", "schoolId", "$longWork", "$alerts", "schoolAddressRepository", "orgInfoRepository"];
  _inherits(EditSchoolAddressController, _NetCityModalControll);
  var _super = _createSuper(EditSchoolAddressController);
  /*@ngInject*/
  function EditSchoolAddressController($scope, changeTracker, $dialogs, $uibModalInstance, language, address, addressParameter, addressParameterModel, schoolId, $longWork, $alerts, schoolAddressRepository, orgInfoRepository) {
    var _this;
    _classCallCheck(this, EditSchoolAddressController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.address = address;
    _this.addressParameter = addressParameter;
    _this.addressParameterModel = addressParameterModel;
    _this.schoolId = schoolId;
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.schoolAddressRepository = schoolAddressRepository;
    _this.orgInfoRepository = orgInfoRepository;
    if (_this.addressParameter.name == "T00address") {
      _this.addressType = _address.SchoolAddressType.PostAddress;
      _this.header = language.Generic.SchoolInfo.kPostAddress;
    } else {
      _this.addressType = _address.SchoolAddressType.LegalAddress;
      _this.header = language.Generic.SchoolInfo.kJuridicalAddress;
    }
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      isEnabled: function isEnabled() {
        return _this.ready && !_this.error;
      },
      "class": ["btn-primary btn-sm"],
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      }
    }, {
      title: language.Generic.Buttons.kRemove,
      isEnabled: function isEnabled() {
        return _this.ready && !_this.error;
      },
      "class": ["btn-sm", "btn-danger"],
      icon: "glyphicon glyphicon-minus-sign",
      action: function action() {
        return _this.remove();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      "class": ["btn-sm"],
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.cancel();
      }
    }];
    return _this;
  }
  _createClass(EditSchoolAddressController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      var saveAddress = this.saveModel.getValue();
      // Если изменений нет, то закрываем без сохранения
      if (this.address.buildingFiasId == saveAddress.building.houseGuid) {
        this.$uibModalInstance.close();
        return;
      }
      var confirms = [];
      _extDeferred.extDeferred.when(confirms).then(function () {
        var promises = [];
        // Сохранение строки
        _this2.addressParameterModel.value = _this2.formAddressString();
        var schoolInfoParamValue = {
          parameterId: _this2.addressParameter.id,
          parameterName: _this2.addressParameter.name,
          value: _this2.addressParameterModel.value
        };
        var saveAddressParameterValue = _this2.orgInfoRepository.saveOrgParamInfo(_this2.schoolId, [schoolInfoParamValue]);
        promises.push(saveAddressParameterValue);
        // Сохранение объекта
        saveAddress.addressType = _this2.addressType;
        var setSchoolAddress = _this2.schoolAddressRepository.setSchoolAddress(_this2.schoolId, saveAddress);
        promises.push(setSchoolAddress);
        var work = Promise.all(promises);
        _this2.$longWork.execute(work).then(function () {
          _this2.$alerts.success("Адрес успешно сохранён");
          _this2.$uibModalInstance.close(true);
        });
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      var _a;
      // Если адрес пуст, то просто закрываем
      if (!((_a = this.addressParameterModel) === null || _a === void 0 ? void 0 : _a.value)) {
        this.$uibModalInstance.close();
        return;
      }
      var confirms = [];
      confirms.push(function () {
        return _this3.$dialogs.confirmDelete(_this3.language.Generic.SetupSchoolUI.kDelConfirm);
      });
      _extDeferred.extDeferred.when(confirms).then(function () {
        var promises = [];
        // Удаление объекта адреса
        var removeAddress = _this3.schoolAddressRepository.removeSchoolAddress(_this3.schoolId, _this3.addressType);
        promises.push(removeAddress);
        // Удаление строки (значения параметра) адреса
        _this3.addressParameterModel.value = null;
        var schoolInfoParamValue = {
          parameterId: _this3.addressParameter.id,
          parameterName: _this3.addressParameter.name,
          value: null
        };
        var removeAddressParameterValue = _this3.orgInfoRepository.saveOrgParamInfo(_this3.schoolId, [schoolInfoParamValue]);
        promises.push(removeAddressParameterValue);
        var work = Promise.all(promises);
        _this3.$longWork.execute(work).then(function () {
          _this3.$alerts.success("Адрес успешно удалён");
          _this3.$uibModalInstance.close(true);
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "formAddressString",
    value: function formAddressString() {
      var _a, _b, _c, _d;
      var validateTypeShort = function validateTypeShort(typeShort) {
        if (!typeShort || !typeShort.length) {
          return "";
        }
        // Есть ли точка в сокращении
        // slice(-1) - это последний символ строки
        return typeShort + (typeShort.slice(-1) === "." ? "" : ".");
      };
      // В данной точке город не может быть пустым полем.
      // Если this.editAddress.city пуст, значит регион и город равны, например: Москва
      var stateCityNamesEqual = this.editAddress.city == null;
      // Уточнение для нас. пункта в скобках
      var isCityHasCorrection = (_b = (_a = this.editAddress.city) === null || _a === void 0 ? void 0 : _a.parents) === null || _b === void 0 ? void 0 : _b.some(function (x) {
        return x.contentType == "city";
      });
      var cityCorrection = isCityHasCorrection ? " (" + this.editAddress.city.parents.filter(function (x) {
        return x.contentType == "city";
      })[0].name + ")" : "";
      // Уточнение для улицы в скобках
      var isStreetHasCorrection = (_d = (_c = this.editAddress.street) === null || _c === void 0 ? void 0 : _c.parents) === null || _d === void 0 ? void 0 : _d.some(function (x) {
        return x.contentType == "street";
      });
      var streetCorrection = isStreetHasCorrection ? " (" + this.editAddress.street.parents.filter(function (x) {
        return x.contentType == "street";
      })[0].name + " " + this.editAddress.street.parents.filter(function (x) {
        return x.contentType == "street";
      })[0].typeShort + ")" : "";
      var country = "Россия"; // В editAddress нет country
      var cityString = (stateCityNamesEqual ? validateTypeShort(this.editAddress.region.typeShort) + " " + this.editAddress.region.text : validateTypeShort(this.editAddress.city.typeShort) + " " + this.editAddress.city.text + cityCorrection) + ", ";
      var streetString = this.editAddress.street ? validateTypeShort(this.editAddress.street.typeShort) + " " + this.editAddress.street.text + streetCorrection + ", " : "";
      var addressString = (this.editAddress.zipCode ? this.editAddress.zipCode + ", " : "") + country + (stateCityNamesEqual ? "" : ", " + this.editAddress.region.fullName) + (this.editAddress.district ? ", " + this.editAddress.district.text + " " + this.editAddress.district.typeShort : "") + "\n" + cityString + streetString + "".concat(this.language.Generic.Common.kHouse_, " ").concat(this.editAddress.building.text) + (this.editAddress.corpus && !this.editAddress.building.text.includes("корп.") ? ", ".concat(this.language.Generic.Common.kCorp_, " ").concat(this.editAddress.corpus) : "") + (this.editAddress.struc && !this.editAddress.building.text.includes("стр.") ? ", ".concat(this.language.Generic.Common.kStruc_, " ").concat(this.editAddress.struc) : "");
      return addressString;
    }
  }]);
  return EditSchoolAddressController;
}(_netcityModalCtrl.NetCityModalController);
var EditSchoolAddressComponent = {
  controller: EditSchoolAddressController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/orginfo/address/editschooladdress.component.html"
};
exports.EditSchoolAddressComponent = EditSchoolAddressComponent;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extDeferred = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExtDeferred = /*#__PURE__*/function () {
  function ExtDeferred() {
    _classCallCheck(this, ExtDeferred);
  }
  _createClass(ExtDeferred, [{
    key: "handleDef",
    value: function handleDef(condition) {
      while (typeof condition == "function") {
        condition = condition();
      }
      if (Array.isArray(condition)) {
        condition = this.when.call(condition);
      }
      var internalDef;
      if (typeof condition == 'undefined' || typeof condition == 'boolean') {
        internalDef = $.Deferred();
        if (condition) internalDef.resolve();else internalDef.reject();
        return internalDef.promise();
      }
      if (typeof Promise !== 'undefined' && condition instanceof Promise) {
        internalDef = $.Deferred();
        condition.then(function () {
          return internalDef.resolve();
        }, function () {
          return internalDef.reject();
        });
        return internalDef.promise();
      }
      return condition;
    }
  }, {
    key: "wrapPromise",
    value: function wrapPromise(promiseFunc, success, fail) {
      return function () {
        return $.when(promiseFunc()).then(success, fail);
      };
    }
  }, {
    key: "wrapAlwaysPromise",
    value: function wrapAlwaysPromise(promiseFunc) {
      var _this = this;
      return function () {
        var deferred = $.Deferred();
        var funcResolve = function funcResolve() {
          return deferred.resolve();
        };
        _this.wrapPromise(promiseFunc, funcResolve, funcResolve)();
        return deferred.promise();
      };
    }
  }, {
    key: "resolve",
    value: function resolve() {
      var deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    }
  }, {
    key: "when",
    value: function when(args) {
      var _this2 = this;
      var deferred = $.Deferred();
      var arrDeferred = arguments;
      if (arrDeferred.length == 1 && _typeof(arrDeferred[0]) == 'object') {
        arrDeferred = arguments[0];
      }
      if (arrDeferred.length == 0) {
        deferred.resolve();
        return Promise.resolve();
      }
      var rejectFunc = function rejectFunc() {
        return deferred.reject();
      };
      var successFunc = function successFunc() {
        return deferred.resolve();
      };
      var recThen = function recThen(index) {
        var nextDef = arrDeferred[index];
        var nextDefFunc = function nextDefFunc() {
          return _this2.handleDef(nextDef);
        };
        if (index < arrDeferred.length - 1) {
          return function () {
            return $.when(nextDefFunc()).then(recThen(index + 1), rejectFunc);
          };
        } else if (index == arrDeferred.length - 1) {
          return function () {
            return $.when(nextDefFunc()).then(successFunc, rejectFunc);
          };
        } else {
          return successFunc;
        }
      };
      var firstDef = arrDeferred[0];
      $.when(this.handleDef(firstDef)).then(recThen(1), rejectFunc);
      return new Promise(function (resolve) {
        deferred.then(function () {
          resolve();
        });
      });
    }
  }]);
  return ExtDeferred;
}();
var extDeferred = new ExtDeferred();
exports.extDeferred = extDeferred;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  function browseSchoolInfoAccessJournalCtrl(params) {
    this.schoolId = params.schoolId;
  }
  var getTemplate = function getTemplate(url) {
    return jsSubmit({
      method: 'GET',
      action: url,
      auth: false,
      dataType: 'html',
      contentType: 'text/plain',
      showProcessing: true
    });
  };
  browseSchoolInfoAccessJournalCtrl.prototype.showAccessJournalEntries = function (accessJournalEntries) {
    if (!accessJournalEntries.length) {
      alert(language.Generic.Common.kNoChangesData);
      return;
    }
    _.map(accessJournalEntries, function (obj) {
      var date = dateUtils.castServerDateTimeToClient(obj.date);
      obj.date = dateUtils.date2str(date) + ' ' + dateUtils.time2Str_ss(date);
    });
    function somHasReason() {
      for (var i = 0; i < accessJournalEntries.length; i++) {
        if (accessJournalEntries[i].reason) return true;
      }
      return false;
    }
    function isDigitsOnly(id) {
      var reg = /^\d+$/;
      return id.match(reg);
    }
    var model = {
      accessJournalEntries: accessJournalEntries,
      language: language,
      hasReason: somHasReason()
    };
    if (model.accessJournalEntries) {
      model.accessJournalEntries.forEach(function (x) {
        if (x.reasonDocId) {
          try {
            var reasonDocInfo = JSON.parse(x.reasonDocId);
            x.reasonDocFileId = reasonDocInfo === null || reasonDocInfo === void 0 ? void 0 : reasonDocInfo.result;
          } catch (e) {
            if (isDigitsOnly(x.reasonDocId)) {
              x.reasonDocAttachmentId = x.reasonDocId;
            } else {
              x.reasonDocFileId = x.reasonDocId;
            }
          }
        }
      });
    }
    var self = this;
    getTemplate('/static/dist/app/school/orginfo/orginfo/accessJournal/schoolInfoAccessJournal.html').then(function (template) {
      var source = Handlebars.compile(template.replace(/(?:\r\n|\r|\n)/g, ''));
      var html = source(model);
      $.show.dialog({
        title: language.Generic.Common.kChangeHistory,
        message: html,
        size: BootstrapDialog.SIZE_WIDE,
        onshown: function onshown(dialog) {
          dialog.$modalBody.find('.showDetale').on('click', function () {
            var id = $(this).attr('access-journal-id');
            self.browseAccessJournalDetails(id);
          });
        }
      });
    });
  };
  browseSchoolInfoAccessJournalCtrl.prototype.showAccessJournalEntryDetails = function (accessJournalEntryDetails) {
    if (!accessJournalEntryDetails.length) {
      alert(language.Generic.Common.kNoDetails);
      return;
    }

    //проверяем указана хоть одна причина внесения изменений в ОО
    function hasReason() {
      for (var i = 0; i < accessJournalEntryDetails.length; i++) {
        if (accessJournalEntryDetails[i].reason) return true;
      }
      return false;
    }
    function getReason() {
      accessJournalEntryDetails[0];
    }
    var reason = _.first(accessJournalEntryDetails).reason;
    var reasonDocId = _.first(accessJournalEntryDetails).reasonDocId;
    try {
      var reasonDocInfo = JSON.parse(reasonDocId);
      reasonDocId = reasonDocInfo === null || reasonDocInfo === void 0 ? void 0 : reasonDocInfo.result;
    } catch (e) {}
    var model = {
      accessJournalEntryDetails: accessJournalEntryDetails,
      language: language,
      hasReason: hasReason(),
      reason: reason,
      reasonDocId: reasonDocId
    };
    getTemplate('/static/dist/app/school/orginfo/orginfo/accessJournal/schoolInfoAccessJournalDetails.html').then(function (template) {
      var source = Handlebars.compile(template.replace(/(?:\r\n|\r|\n)/g, ''));
      var html = source(model);
      $.show.dialog({
        title: language.Generic.Common.kDetails,
        message: html,
        size: BootstrapDialog.SIZE_WIDE
      });
    });
  };
  browseSchoolInfoAccessJournalCtrl.prototype.browseAccessJournal = function () {
    var self = this;
    jsSubmit({
      action: '/webapi/schools/' + self.schoolId + '/info/accessjournal',
      showProcessing: true,
      method: 'GET',
      onSuccess: function onSuccess(accessJournalEntries) {
        self.showAccessJournalEntries(accessJournalEntries);
      }
    });
  };
  browseSchoolInfoAccessJournalCtrl.prototype.browseAccessJournalDetails = function (accessJournalId) {
    var self = this;
    jsSubmit({
      action: '/webapi/schools/' + self.schoolId + '/info/accessjournal/' + accessJournalId + '/details',
      showProcessing: true,
      method: 'GET',
      onSuccess: function onSuccess(response) {
        self.showAccessJournalEntryDetails(response);
      }
    });
  };

  //для поддержки js модульности
  (function (exp, name) {
    var exported = false;
    if ( true && module.exports) {
      module.exports = exp;
      exported = true;
    }
    if (true) {
      exports = exp;
      exported = true;
    }
    if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
      window[name] = exp;
    }
    if (typeof root !== 'undefined' && typeof name !== "undefined") {
      root[name] = exp;
    }
  })(browseSchoolInfoAccessJournalCtrl, "BrowseSchoolInfoAccessJournalCtrl");
})();

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgInfoRepository = void 0;
var _repository = __webpack_require__(20);
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
var OrgInfoRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(OrgInfoRepository, _BaseRepository);
  var _super = _createSuper(OrgInfoRepository);
  function OrgInfoRepository() {
    _classCallCheck(this, OrgInfoRepository);
    return _super.apply(this, arguments);
  }
  _createClass(OrgInfoRepository, [{
    key: "loadCommonInfo",
    value: function loadCommonInfo(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchool",
    value: function editSchool(data) {
      return this.$http.post("/webapi/schools/", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadFiles",
    value: function loadFiles(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/card/files")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadAuthorities",
    value: function loadAuthorities(schoolId) {
      var params = {};
      if (schoolId) {
        params.schoolId = schoolId;
      }
      return this.$http.get("/webapi/em/authorities", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadEducmanagements",
    value: function loadEducmanagements(filter) {
      return this.$http.get("/webapi/educmanagements", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadFounders",
    value: function loadFounders(cityId) {
      var params = {};
      if (cityId) {
        params.cityId = cityId;
      }
      return this.$http.get("/webapi/founders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadAttachmentTypes",
    value: function loadAttachmentTypes(group) {
      var params = {};
      if (group) {
        params.group = group;
      }
      return this.$http.get("/webapi/attachments/types", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPfdoPublishStatus",
    value: function getPfdoPublishStatus(schoolId) {
      return this.$http.get("/webapi/integration/pfdo/organizationstatus", {
        params: {
          schoolId: schoolId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "pfdoPublish",
    value: function pfdoPublish(organizationId) {
      return this.$http.post("/webapi/integration/pfdo/publishorganization", null, {
        params: {
          organizationId: organizationId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadOrgParamInfo",
    value: function loadOrgParamInfo(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/card/values")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveDirector",
    value: function saveDirector(schoolId, directorId) {
      var params = {
        directorId: directorId
      };
      return this.$http.post("/webapi/schools/".concat(schoolId, "/director"), null, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveOrgParamInfo",
    value: function saveOrgParamInfo(schoolId, data, reason) {
      var params = reason;
      return this.$http.put("/webapi/schools/".concat(schoolId, "/card/values"), data, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return OrgInfoRepository;
}(_repository.BaseRepository);
exports.OrgInfoRepository = OrgInfoRepository;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(34);
var _repository = __webpack_require__(20);
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
var AddressRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AddressRepository, _BaseRepository);
  var _super = _createSuper(AddressRepository);
  function AddressRepository() {
    _classCallCheck(this, AddressRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AddressRepository, [{
    key: "getCities",
    value: function getCities(ids) {
      if (ids.length > 10) {
        return this.$http.post("/webapi/addresses/cities/search", {
          id: ids
        }).then(this.handleResponse, this.handleError);
      }
      return this.$http.get("/webapi/addresses/cities", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCityDistricts",
    value: function getCityDistricts(cityId) {
      return this.$http.get("/webapi/addresses/cities/".concat(cityId, "/districts")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProvinces",
    value: function getProvinces(ids) {
      return this.$http.get("/webapi/addresses/provinces", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return AddressRepository;
}(_baseRepository.BaseRepository);
exports.AddressRepository = AddressRepository;
var EducOrganizationsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(EducOrganizationsRepository, _BaseRepository2);
  var _super2 = _createSuper(EducOrganizationsRepository);
  function EducOrganizationsRepository() {
    _classCallCheck(this, EducOrganizationsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(EducOrganizationsRepository, [{
    key: "getSchoolsAddressesInfo",
    value: function getSchoolsAddressesInfo(filter) {
      return this.$http.post("/webapi/addresses/schools/info", filter).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressInfo",
    value: function getSchoolAddressInfo(schoolId) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId, "/info")).then(this.handleResponse, this.handleError);
    }
  }]);
  return EducOrganizationsRepository;
}(_baseRepository.BaseRepository);
exports.EducOrganizationsRepository = EducOrganizationsRepository;
var ReferencesRepository = /*#__PURE__*/function (_SimpleBaseRepository) {
  _inherits(ReferencesRepository, _SimpleBaseRepository);
  var _super3 = _createSuper(ReferencesRepository);
  function ReferencesRepository() {
    _classCallCheck(this, ReferencesRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(ReferencesRepository, [{
    key: "getYears",
    value: function getYears() {
      return this.$http.get("/webapi/references/years").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYear",
    value: function getYear(yearId) {
      return this.$http.get("/webapi/references/years/" + yearId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTestLevels",
    value: function getTestLevels() {
      return this.$http.get("/webapi/references/testLevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTaskMistakeTypes",
    value: function getTaskMistakeTypes() {
      return this.$http.get("/webapi/references/taskMistakeTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFuncTypes",
    value: function getFuncTypes() {
      return this.$http.get("/webapi/references/functypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEoTypes",
    value: function getEoTypes() {
      return this.$http.get("/webapi/references/eotypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTaskDifficults",
    value: function getTaskDifficults() {
      return this.$http.get("/webapi/references/taskDifficults").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramTypes",
    value: function getProgramTypes() {
      return this.$http.get("/webapi/references/addprogramtypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramPaymentTypes",
    value: function getProgramPaymentTypes() {
      return this.$http.get("/webapi/references/addprogrampaymenttypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramEducForms",
    value: function getProgramEducForms() {
      return this.$http.get("/webapi/references/addprogrameducforms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAdaptationTypes",
    value: function getAdaptationTypes() {
      return this.$http.get("/webapi/references/adaptationtypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramStatuses",
    value: function getProgramStatuses() {
      return this.$http.get("/webapi/references/addprogramstatuses").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSignificantProjects",
    value: function getSignificantProjects() {
      return this.$http.get("/webapi/references/significantprojects").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIupLevels",
    value: function getIupLevels() {
      return this.$http.get("/webapi/references/iuplevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getExtraOrgForms",
    value: function getExtraOrgForms() {
      return this.$http.get("/webapi/references/extraorgforms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getExtraDirections",
    value: function getExtraDirections() {
      return this.$http.get("/webapi/references/extradirections").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEducOrgReferences",
    value: function getEducOrgReferences() {
      return this.$http.get("/webapi/references/eoRefs").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRelationShipTypes",
    value: function getRelationShipTypes() {
      return this.$http.get("/webapi/references/relationShipTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAtoTypes",
    value: function getAtoTypes() {
      var atoTypeShortName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return this.$http.get("/webapi/references/atotypes", {
        params: {
          atoTypeShortName: atoTypeShortName
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSettlementTypes",
    value: function getSettlementTypes() {
      return this.$http.get("/webapi/references/settlementTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFounderTypes",
    value: function getFounderTypes() {
      return this.$http.get("/webapi/references/founderTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFounderKinds",
    value: function getFounderKinds() {
      return this.$http.get("/webapi/references/founderKinds").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAuthorityTypes",
    value: function getAuthorityTypes() {
      return this.$http.get("/webapi/references/authorityTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIdentityDocumentTypes",
    value: function getIdentityDocumentTypes() {
      return this.$http.get("/webapi/references/identityDocumentTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getHierarchyLevels",
    value: function getHierarchyLevels() {
      return this.$http.get("/webapi/references/hierarchyLevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProjectTypeForSchoolTypes",
    value: function getProjectTypeForSchoolTypes() {
      return this.$http.get("/webapi/references/projectTypeForSchool").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolDocTypes",
    value: function getSchoolDocTypes() {
      return this.$http.get("/webapi/references/schoolDocTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStatFormTypes",
    value: function getStatFormTypes() {
      return this.$http.get("/webapi/references/statFormTypes").then(this.handleResponse, this.handleError);
    }
  }]);
  return ReferencesRepository;
}(_repository.BaseRepository);
exports.ReferencesRepository = ReferencesRepository;
var AddressReferencesRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(AddressReferencesRepository, _BaseRepository3);
  var _super4 = _createSuper(AddressReferencesRepository);
  function AddressReferencesRepository() {
    _classCallCheck(this, AddressReferencesRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(AddressReferencesRepository, [{
    key: "getMunicipalityDistricts",
    value: function getMunicipalityDistricts(filter) {
      if ((filter === null || filter === void 0 ? void 0 : filter.id) && filter.id.length > 10) {
        var query = {
          idType: filter.idType
        };
        return this.$http.post("/webapi/addresses/municipalities/search", {
          filter: filter
        }, {
          params: query
        }).then(this.handleResponse, this.handleError);
      }
      return this.$http.get("/webapi/addresses/municipalities", {
        params: filter
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProvinces",
    value: function getProvinces(yearId) {
      return this.$http.get("/webapi/addresses/provinces").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLocations",
    value: function getLocations() {
      return this.$http.get("/webapi/addresses/locations").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStates",
    value: function getStates() {
      return this.$http.get("/webapi/addresses/states").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCountries",
    value: function getCountries() {
      return this.$http.get("/webapi/addresses/countries").then(this.handleResponse, this.handleError);
    }
  }]);
  return AddressReferencesRepository;
}(_baseRepository.BaseRepository);
exports.AddressReferencesRepository = AddressReferencesRepository;
var MunicipalityIdType;
exports.MunicipalityIdType = MunicipalityIdType;
(function (MunicipalityIdType) {
  MunicipalityIdType["NegativeBound"] = "NegativeBound";
  MunicipalityIdType["PositiveBound"] = "PositiveBound";
})(MunicipalityIdType || (exports.MunicipalityIdType = MunicipalityIdType = {}));
var YearRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(YearRepository, _BaseRepository4);
  var _super5 = _createSuper(YearRepository);
  function YearRepository() {
    _classCallCheck(this, YearRepository);
    return _super5.apply(this, arguments);
  }
  _createClass(YearRepository, [{
    key: "getGlobalYearInfo",
    value: function getGlobalYearInfo(globalYearId) {
      return this.$http.get("/webapi/calendar/years/globalYearInfo", {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return YearRepository;
}(_baseRepository.BaseRepository);
exports.YearRepository = YearRepository;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolAddressRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var SchoolAddressRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SchoolAddressRepository, _BaseRepository);
  var _super = _createSuper(SchoolAddressRepository);
  function SchoolAddressRepository() {
    _classCallCheck(this, SchoolAddressRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolAddressRepository, [{
    key: "getSchoolAddress",
    value: function getSchoolAddress(schoolId, addressType) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId), {
        params: {
          addressType: addressType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressBase",
    value: function getSchoolAddressBase(schoolId) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId, "/base")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setSchoolAddress",
    value: function setSchoolAddress(schoolId, address) {
      return this.$http.post("/webapi/addresses/schools/".concat(schoolId), address).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeSchoolAddress",
    value: function removeSchoolAddress(schoolId, addressType) {
      return this.$http["delete"]("/webapi/addresses/schools/".concat(schoolId), {
        params: {
          addressType: addressType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return SchoolAddressRepository;
}(_baseRepository.BaseRepository);
exports.SchoolAddressRepository = SchoolAddressRepository;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LicensesComponent = void 0;
var _editLicense = __webpack_require__(81);
var _licenses = __webpack_require__(83);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var LicensesController = /*#__PURE__*/function () {
  LicensesController.$inject = ["pageContext", "$scope", "$appLoader", "$dialogs", "appContext", "$uibModal", "licensesRepository", "$alerts", "$longWork", "language"];
  /*@ngInject*/
  function LicensesController(pageContext, $scope, $appLoader, $dialogs, appContext, $uibModal, licensesRepository, $alerts, $longWork, language) {
    _classCallCheck(this, LicensesController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.appContext = appContext;
    this.$uibModal = $uibModal;
    this.licensesRepository = licensesRepository;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.language = language;
    pageContext.parent = {
      title: this.language.Generic.SchoolInfo.kTitleSchoolInfoCard,
      href: "/"
    };
    pageContext.back = {
      history: true
    };
    pageContext.title = this.language.Generic.SchoolInfo.kLicences;
    this.init();
  }
  _createClass(LicensesController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.schoolId = parseInt(this.appContext.schoolId);
              _context.next = 3;
              return this.licensesRepository.getLicenses(parseInt(this.appContext.schoolId));
            case 3:
              this.licenses = _context.sent;
              this.ready = true;
              this.$scope.$applyAsync();
              this.$appLoader.hide();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "edit",
    value: function edit(_license) {
      var _this = this;
      this.ready = false;
      var modalInstance = this.$uibModal.open({
        controller: _editLicense.EditLicenseComponent.controller,
        controllerAs: _editLicense.EditLicenseComponent.controllerAs,
        templateUrl: _editLicense.EditLicenseComponent.templateUrl,
        size: "lg",
        backdrop: false,
        resolve: {
          license: function license() {
            return angular.copy(_license);
          },
          licenseTypes: function licenseTypes() {
            return _this.getLicenseTypes();
          }
        }
      });
      modalInstance.result.then(function (editedLicense) {
        if (_license.licenseType == _licenses.LicenseType.accreditation) {
          _this.licenses.accreditation = editedLicense;
        }
        if (_license.licenseType == _licenses.LicenseType.license) {
          _this.licenses.license = editedLicense;
        }
        if (_license.licenseType == _licenses.LicenseType.licenseAES) {
          _this.licenses.licenseAES = editedLicense;
        }
        _license = editedLicense;
        _this.ready = true;
        _this.$scope.$applyAsync();
      }, function () {
        _this.ready = true;
      });
    }
  }, {
    key: "add",
    value: function add() {
      var _this2 = this;
      this.ready = false;
      var modalInstance = this.$uibModal.open({
        controller: _editLicense.EditLicenseComponent.controller,
        controllerAs: _editLicense.EditLicenseComponent.controllerAs,
        templateUrl: _editLicense.EditLicenseComponent.templateUrl,
        size: "lg",
        backdrop: false,
        resolve: {
          license: function license() {
            return {};
          },
          licenseTypes: function licenseTypes() {
            return _this2.getAllowedLicenseTypes();
          }
        }
      });
      modalInstance.result.then(function (license) {
        _this2.init();
      }, function () {
        _this2.ready = true;
      });
    }
  }, {
    key: "remove",
    value: function remove(license) {
      var _this3 = this;
      this.ready = false;
      this.$dialogs.confirmDelete(this.language.Generic.SchoolInfo.kAreSureDeleteDocument).then(function () {
        _this3.$longWork.execute(_this3.licensesRepository.deleteLicense(_this3.schoolId, license.licenseType)).then(function () {
          _this3.init().then(function () {
            _this3.$alerts.success(_this3.language.Generic.SchoolInfo.kDocumentSuccessDeleted);
          });
        });
      })["catch"](function () {
        _this3.ready = true;
      });
    }
  }, {
    key: "getLicenseTypes",
    value: function getLicenseTypes() {
      return [{
        id: _licenses.LicenseType.license,
        name: this.language.Generic.SchoolInfo.kLicense
      }, {
        id: _licenses.LicenseType.licenseAES,
        name: this.language.Generic.SchoolInfo.kLicenseAES
      }, {
        id: _licenses.LicenseType.accreditation,
        name: this.language.Generic.SchoolInfo.kCertificateAccreditation
      }];
    }
  }, {
    key: "getAllowedLicenseTypes",
    value: function getAllowedLicenseTypes() {
      var _a, _b, _c;
      var licenseTypes = this.getLicenseTypes();
      if ((_a = this.licenses) === null || _a === void 0 ? void 0 : _a.license) {
        licenseTypes = licenseTypes.filter(function (l) {
          return l.id != _licenses.LicenseType.license;
        });
      }
      if ((_b = this.licenses) === null || _b === void 0 ? void 0 : _b.licenseAES) {
        licenseTypes = licenseTypes.filter(function (l) {
          return l.id != _licenses.LicenseType.licenseAES;
        });
      }
      if ((_c = this.licenses) === null || _c === void 0 ? void 0 : _c.accreditation) {
        licenseTypes = licenseTypes.filter(function (l) {
          return l.id != _licenses.LicenseType.accreditation;
        });
      }
      return licenseTypes;
    }
  }, {
    key: "canAdd",
    value: function canAdd() {
      return this.getAllowedLicenseTypes().length > 0;
    }
  }, {
    key: "emptyLicenses",
    get: function get() {
      var _a, _b, _c;
      return !((_a = this.licenses) === null || _a === void 0 ? void 0 : _a.license) && !((_b = this.licenses) === null || _b === void 0 ? void 0 : _b.licenseAES) && !((_c = this.licenses) === null || _c === void 0 ? void 0 : _c.accreditation);
    }
  }, {
    key: "printOptions",
    get: function get() {
      var replace = function replace(printBlock, copyBlock) {
        $('.ng-hide', copyBlock).remove();
      };
      return {
        processingFunc: [replace]
      };
    }
  }, {
    key: "print",
    value: function print() {
      $('.print-block').printUtils().toPrint(this.printOptions);
    }
  }, {
    key: "export",
    value: function _export() {
      $('.print-block').printUtils().toExcel(this.printOptions);
    }
  }]);
  return LicensesController;
}();
var LicensesComponent = {
  controller: LicensesController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/licenses/licenses.component.html"
};
exports.LicensesComponent = LicensesComponent;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLicenseComponent = void 0;
var _netcityModalCtrl = __webpack_require__(18);
var _nsModal = __webpack_require__(82);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var EditLicenseController = /*#__PURE__*/function (_NetCityModalControll) {
  EditLicenseController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "$alerts", "language", "appContext", "licensesRepository", "license", "licenseTypes"];
  _inherits(EditLicenseController, _NetCityModalControll);
  var _super = _createSuper(EditLicenseController);
  /*@ngInject*/
  function EditLicenseController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, $alerts, language, appContext, licensesRepository, license, licenseTypes) {
    var _this;
    _classCallCheck(this, EditLicenseController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.appContext = appContext;
    _this.licensesRepository = licensesRepository;
    _this.license = license;
    _this.licenseTypes = licenseTypes;
    _this.editMode = !!license.numberBlank || !!license.regNumber || !!license.seriesBlank;
    _this.schoolId = parseInt(appContext.schoolId);
    _this.header = "Редактировать";
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      },
      "class": _nsModal.ButtonClass["default"]
    }];
    if (!license.isRenewCertificate) {
      license.isRenewCertificate = "";
    }
    return _this;
  }
  _createClass(EditLicenseController, [{
    key: "onFileChange",
    value: function onFileChange(modalCtx) {
      this.changeTracker.dataWasChanged(modalCtx);
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var work;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.form.$invalid) {
                _context.next = 3;
                break;
              }
              this.form.$displayErrors = true;
              return _context.abrupt("return");
            case 3:
              if (this.changeTracker.isDataChanged(this.modalCtx)) {
                _context.next = 6;
                break;
              }
              this.$alerts.info(this.language.Generic.Common.kNoChanges);
              return _context.abrupt("return");
            case 6:
              if (this.editMode) {
                work = this.licensesRepository.editLicense(this.schoolId, this.license);
              } else {
                work = this.licensesRepository.addLicense(this.schoolId, this.license);
              }
              _context.next = 9;
              return this.$longWork.execute(work);
            case 9:
              this.changeTracker.clearDataChanges();
              this.$alerts.success("Лицензия успешно сохранена");
              this.$uibModalInstance.close(this.license);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EditLicenseController;
}(_netcityModalCtrl.NetCityModalController);
var EditLicenseComponent = {
  controller: EditLicenseController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/licenses/editLicense.component.html"
};
exports.EditLicenseComponent = EditLicenseComponent;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsModalDirective = exports.ButtonClass = void 0;
var ButtonClass;
exports.ButtonClass = ButtonClass;
(function (ButtonClass) {
  ButtonClass["default"] = "btn-default";
  ButtonClass["primary"] = "btn-primary";
  ButtonClass["danger"] = "btn-danger";
  ButtonClass["warning"] = "btn-warning";
  ButtonClass["info"] = "btn-info";
})(ButtonClass || (exports.ButtonClass = ButtonClass = {}));
var NsModalDirective = function NsModalDirective() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      header: "@",
      type: "@",
      buttons: "<",
      "class": "<",
      controller: "<"
    },
    template: "\n\t\t<div class=\"bootstrap-dialog type-{{type || 'primary'}}\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t\t<button class=\"close\" ng-click=\"controller.close()\">&times;</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bootstrap-dialog-title\">{{header}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn\" ng-class=\"button.class || 'btn-default'\" ng-click=\"button.action()\" ng-repeat=\"button in buttons\" ng-disabled=\"button.isEnabled && !button.isEnabled()\" ng-show=\"!button.isDisplayed || button.isDisplayed()\">\n\t\t\t\t\t\t\t<span ng-if=\"button.icon\" class=\"bootstrap-dialog-button-icon {{button.icon}}\"></span>\n\t\t\t\t\t\t\t{{button.title}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t"
  };
};
exports.NsModalDirective = NsModalDirective;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LicenseType = void 0;
var LicenseType;
exports.LicenseType = LicenseType;
(function (LicenseType) {
  LicenseType["license"] = "License";
  LicenseType["licenseAES"] = "LicenseAES";
  LicenseType["accreditation"] = "Accreditation";
})(LicenseType || (exports.LicenseType = LicenseType = {}));

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LicenseComponent = void 0;
var _licenses = __webpack_require__(83);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LicenseController = /*#__PURE__*/function () {
  LicenseController.$inject = ["language", "$scope", "appContext", "dateUtils"];
  /*@ngInject*/
  function LicenseController(language, $scope, appContext, dateUtils) {
    _classCallCheck(this, LicenseController);
    this.language = language;
    this.$scope = $scope;
    this.appContext = appContext;
    this.dateUtils = dateUtils;
    this.seriesPattern = "^[а-яА-Я0-9\-/]*$";
    this.numberPattern = "^[0-9\-/]*$";
    this.regNumberPattern = "^[а-яА-Я0-9\-/]*$";
    this.yesNoOptions = [{
      id: "",
      name: ""
    }, {
      id: "1",
      name: "Да"
    }, {
      id: "2",
      name: "Нет"
    }];
    this.today = this.dateUtils.asUTCDate(new Date());
  }
  _createClass(LicenseController, [{
    key: "$onChanges",
    value: function $onChanges() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      if (this.license.licenseType) {
        this.nonExpire = this.license.expiredDate == this.language.Generic.SchoolInfo.kWithoutLife || !this.license.expiredDate;
        if (this.nonExpire) {
          this.license.expiredDate = null;
          this.expireDateStr = this.language.Generic.SchoolInfo.kWithoutLife;
        } else {
          this.expireDateStr = this.dateUtils.date2str(this.dateUtils.asUTCDate(this.license.expiredDate));
        }
      }
      this.initScan();
      this.$scope.$applyAsync();
    }
  }, {
    key: "initScan",
    value: function initScan() {
      var _this = this;
      var files = [];
      if (this.license.linkScanCopy) {
        files.push({
          id: this.license.linkScanCopy.id,
          name: this.license.linkScanCopy.fileName,
          isCanDeleteFromDb: false
        });
      }
      var licensesFilesEnum;
      switch (this.license.licenseType) {
        case _licenses.LicenseType.license:
          licensesFilesEnum = 201;
          break;
        case _licenses.LicenseType.licenseAES:
          licensesFilesEnum = 202;
          break;
        case _licenses.LicenseType.accreditation:
          licensesFilesEnum = 203;
          break;
      }
      this.fa = {
        options: {
          multiple: false,
          showDescription: false,
          readonly: this.readonly,
          onSuccessAttach: function onSuccessAttach(f) {
            if (_this.onChange && typeof _this.onChange === "function") {
              _this.onChange(_this);
            }
            _this.license.linkScanCopy = {
              id: f.id,
              fileName: f.name
            };
          },
          onSuccessDetach: function onSuccessDetach(f) {
            if (_this.onChange && typeof _this.onChange === "function") {
              _this.onChange(_this);
            }
            _this.license.linkScanCopy = null;
          }
        },
        data: {
          files: files,
          context: {
            schoolId: this.appContext.schoolId,
            attachmentType: licensesFilesEnum
          }
        }
      };
    }
  }, {
    key: "isAccreditation",
    get: function get() {
      return this.license.licenseType == _licenses.LicenseType.accreditation;
    }
  }, {
    key: "licenseOrganNameTitle",
    get: function get() {
      if (this.isAccreditation) {
        return this.language.Generic.SchoolInfo.kAccreditationOrgan;
      }
      return this.language.Generic.SchoolInfo.kLicenseOrgan;
    }
  }, {
    key: "decisionOnLicenseTitle",
    get: function get() {
      if (this.isAccreditation) {
        return this.language.Generic.SchoolInfo.kDecisionAccreditation;
      }
      return this.language.Generic.SchoolInfo.kDecisionOnLicense;
    }
  }, {
    key: "toggleNonExpire",
    value: function toggleNonExpire() {
      this.nonExpire = !this.nonExpire;
      if (this.nonExpire) {
        this.license.expiredDate = null;
      }
    }
  }]);
  return LicenseController;
}();
var LicenseComponent = {
  controller: LicenseController,
  selector: "license",
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/orginfo/licenses/license.component.html",
  bindings: {
    "license": "<",
    "readonly": "<",
    "onChange": "&?"
  }
};
exports.LicenseComponent = LicenseComponent;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LicensesRepository = void 0;
var _repository = __webpack_require__(20);
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
var LicensesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(LicensesRepository, _BaseRepository);
  var _super = _createSuper(LicensesRepository);
  function LicensesRepository() {
    _classCallCheck(this, LicensesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(LicensesRepository, [{
    key: "getLicenses",
    value: function getLicenses(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/licenses")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "addLicense",
    value: function addLicense(schoolId, license) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/licenses"), license).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editLicense",
    value: function editLicense(schoolId, license) {
      return this.$http.put("/webapi/schools/".concat(schoolId, "/licenses"), license).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteLicense",
    value: function deleteLicense(schoolId, licenseType) {
      return this.$http["delete"]("/webapi/schools/".concat(schoolId, "/licenses"), {
        params: {
          licenseType: licenseType
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return LicensesRepository;
}(_repository.BaseRepository);
exports.LicensesRepository = LicensesRepository;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;
var _repository = __webpack_require__(20);
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
var UsersRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(UsersRepository, _BaseRepository);
  var _super = _createSuper(UsersRepository);
  function UsersRepository() {
    _classCallCheck(this, UsersRepository);
    return _super.apply(this, arguments);
  }
  _createClass(UsersRepository, [{
    key: "getStaffList",
    value: function getStaffList(roles) {
      var params = {
        role: null
      };
      if (roles) {
        params.role = roles;
      }
      return this.$http.get("/webapi/users/staff", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTeacherList",
    value: function getTeacherList(subjectId, sgId, withSubjects) {
      var params = {
        subjectId: null,
        sgId: null
      };
      if (subjectId) {
        params.subjectId = subjectId;
      }
      if (sgId) {
        params.sgId = sgId;
      }
      if (withSubjects) {
        params.withSubjects = withSubjects;
      }
      return this.$http.get("/webapi/users/staff/teachers", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/info")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStaffsForImport",
    value: function getStaffsForImport(schoolId) {
      var params = {
        schoolId: schoolId
      };
      var res = this.$http.get("/webapi/users/staff/import/browse", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
      return res;
    }
  }, {
    key: "getDirector",
    value: function getDirector(schoolId) {
      var params = {
        schoolId: schoolId
      };
      var res = this.$http.get("/webapi/users/director", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
      return res;
    }
  }, {
    key: "postReuseUsers",
    value: function postReuseUsers(userIds, yearId) {
      //let params = { yearId };
      //let res = this.$http.post("/webapi/users/staff/import/reuseStaff", userIds, { params }).catch(this.handleError);
      return this.$http.post("/webapi/users/staff/import/reuseStaff/?yearId=" + yearId, userIds).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentParents",
    value: function getStudentParents(studentIds) {
      var data = {
        studentId: studentIds
      };
      if (studentIds.length < 10) {
        return this.$http.get("/webapi/users/studentparents", {
          params: data
        }).then(this.handleResponse)["catch"](this.handleError);
      }
      return this.$http.post("/webapi/users/studentparents", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentList",
    value: function getStudentList(query) {
      return this.$http.get('/webapi/users/studentList', {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addUsers",
    value: function addUsers(userDtos) {
      return this.$http.post("/webapi/users", userDtos).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "checkSimilars",
    value: function checkSimilars(similarsCheckRequest, roleGroup) {
      return this.$http.post("/webapi/users/get-similars", similarsCheckRequest, {
        params: {
          roleGroup: roleGroup
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportStudents",
    value: function exportStudents(filterContext, studentExportType, parentExportType, search) {
      var query = {
        filterContext: filterContext,
        studentExportType: studentExportType,
        parentExportType: parentExportType,
        search: search
      };
      return this.$http.post("/webapi/users/students/export", query).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportStaff",
    value: function exportStaff(filterContext, search) {
      var query = {
        filterContext: filterContext,
        search: search
      };
      return this.$http.post("/webapi/users/staff/export", query).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "importStudentsForUpdate",
    value: function importStudentsForUpdate(skipWarnings) {
      var data = "=" + skipWarnings;
      var settings = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      return this.$http.post("/webapi/users/batch-update/import", data, settings).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return UsersRepository;
}(_repository.BaseRepository);
exports.UsersRepository = UsersRepository;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoEmailComponent = exports.EmailInputDirective = void 0;
var _emailValidator = __webpack_require__(88);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EmailInputDirective = function EmailInputDirective() {
  return {
    require: 'ngModel',
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$validators.email = function (modelValue, viewValue) {
        return new _emailValidator.EmailValidatorCtrl().isEmailValid(viewValue);
      };
    }
  };
};
exports.EmailInputDirective = EmailInputDirective;
var UserInfoEmailController = /*#__PURE__*/function () {
  UserInfoEmailController.$inject = ["editUserInfoService", "language"];
  /*@ngInject*/
  function UserInfoEmailController(editUserInfoService, language) {
    _classCallCheck(this, UserInfoEmailController);
    this.editUserInfoService = editUserInfoService;
    this.language = language;
  }
  _createClass(UserInfoEmailController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.editUserInfoService.ready.subscribe(function () {
        _this.email = _this.editUserInfoService.userInfoData.commonData.email;
      });
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      this.editUserInfoService.forms.push(this.form);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.editUserInfoService.userInfoData.commonData.email = this.email;
    }
  }, {
    key: "emailError",
    value: function emailError() {
      return this.language.Generic.SetupSchoolUI.kSetEMail;
    }
  }]);
  return UserInfoEmailController;
}();
var UserInfoEmailComponent = {
  controller: UserInfoEmailController,
  template: "\n\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.EM.$invalid }\">\n\t\t\t<input track-changes email-input type=\"text\" class=\"form-control\" name=\"EM\" size=\"35\" maxlength=\"80\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.email\" ng-change=\"$ctrl.onChange()\">\n\t\t\t<div ng-messages=\"$ctrl.form.EM.$error\">\n\t\t\t\t<span class=\"help-block\" ng-message=\"email\">{{$ctrl.emailError()}}</span>\n\t\t\t</div>\n\t\t</ng-form>\n\t",
  controllerAs: "$ctrl",
  selector: "emailComponent",
  bindings: {
    email: "<",
    readonly: "<"
  }
};
exports.UserInfoEmailComponent = UserInfoEmailComponent;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailValidatorCtrl = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defPattern = "^[-!#$%&'*+/=?^`{|}~\\w]+([.][-!#$%&'*+/=?^`{|}~\\w]+)*@[-!#$%&'*+/=?^`{|}~\\w]+([.][-!#$%&'*+/=?^`{|}~\\w]+)*[.]\\w\\w+$";
var EmailValidatorCtrl = /*#__PURE__*/function () {
  function EmailValidatorCtrl() {
    _classCallCheck(this, EmailValidatorCtrl);
  }
  _createClass(EmailValidatorCtrl, [{
    key: "isEmailValid",
    value: function isEmailValid(sEmail) {
      if (!sEmail) {
        return true;
      }
      if (sEmail.length === 0) {
        return true;
      }
      if (sEmail.indexOf("@") === -1) {
        return false;
      }
      var emailRe = new RegExp(defPattern, 'ig');
      if (!emailRe.test(sEmail)) {
        return false;
      }
      return true;
    }
  }, {
    key: "getPattern",
    value: function getPattern() {
      return new RegExp(defPattern);
    }
  }]);
  return EmailValidatorCtrl;
}();
exports.EmailValidatorCtrl = EmailValidatorCtrl;
;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolRegionalSettingsComponent = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var DateFormatService = /*#__PURE__*/function () {
  function DateFormatService() {
    _classCallCheck(this, DateFormatService);
    this.init();
  }
  _createClass(DateFormatService, [{
    key: "init",
    value: function init() {
      this.timezones = [];
      for (var i = -12; i <= 12; i++) {
        this.timezones.push({
          id: i.toString(),
          name: "GMT ".concat(i, ":00")
        });
      }
      this.dayFormats = ["d", "dd"];
      this.monthFormats = ["m", "mm"];
      this.yearFormats = ["yy", "yyyy"];
      this.hourFormats = ["h", "hh"];
      this.minuteFormats = ["mm"];
      this.formatLocalization = {
        "d": "д",
        "dd": "дд",
        "m": "м",
        "mm": "мм",
        "yy": "гг",
        "yyyy": "гггг",
        "h": "ч",
        "hh": "чч"
      };
    }
  }, {
    key: "locale",
    value: function locale(format) {
      return this.formatLocalization[format];
    }
  }, {
    key: "getDatePartFormats",
    value: function getDatePartFormats(excludeFormatFunc) {
      var _ref;
      excludeFormatFunc = excludeFormatFunc || function () {
        return false;
      };
      var allDateFormats = [this.dayFormats, this.monthFormats, this.yearFormats];
      var result = allDateFormats.filter(function (formats) {
        return !formats.some(excludeFormatFunc);
      });
      var merged = (_ref = []).concat.apply(_ref, _toConsumableArray(result));
      return merged;
    }
  }, {
    key: "getFirstDatePartFormats",
    value: function getFirstDatePartFormats() {
      return this.getDatePartFormats();
    }
  }, {
    key: "getSecondDatePartFormats",
    value: function getSecondDatePartFormats(firstPartFormat) {
      return this.getDatePartFormats(function (x) {
        return x == firstPartFormat;
      });
    }
  }, {
    key: "getThirdDatePartFormats",
    value: function getThirdDatePartFormats(firstPartFormat, secondPartFormat) {
      return this.getDatePartFormats(function (x) {
        return x == firstPartFormat || x == secondPartFormat;
      });
    }
  }]);
  return DateFormatService;
}();
var SchoolRegionalSettingsController = /*#__PURE__*/function () {
  SchoolRegionalSettingsController.$inject = ["pageContext", "$scope", "appContext", "$appLoader", "$longWork", "$alerts", "$dialogs", "orgInfoRepository", "schoolRegionalSettingsRepository", "settingsProvider", "dateUtils", "changeTracker", "language"];
  /*@ngInject*/
  function SchoolRegionalSettingsController(pageContext, $scope, appContext, $appLoader, $longWork, $alerts, $dialogs, orgInfoRepository, schoolRegionalSettingsRepository, settingsProvider, dateUtils, changeTracker, language) {
    _classCallCheck(this, SchoolRegionalSettingsController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.orgInfoRepository = orgInfoRepository;
    this.schoolRegionalSettingsRepository = schoolRegionalSettingsRepository;
    this.settingsProvider = settingsProvider;
    this.dateUtils = dateUtils;
    this.changeTracker = changeTracker;
    this.language = language;
    pageContext.title = this.language.Generic.SetupSchool.kTitleRegionalSettings;
    pageContext.parent = null;
    this.init();
  }
  _createClass(SchoolRegionalSettingsController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var dateFormat;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.schoolId = parseInt(this.appContext.schoolId);
              this.readOnly = this.appContext.readOnly;
              this.service = new DateFormatService();
              this.onloadHandler();
              this.storedData = this.getStoredData();
              this.removeStoredData(); // после получения сразу удалить из хранилища
              if (!(this.storedData == null)) {
                _context.next = 12;
                break;
              }
              _context.next = 9;
              return this.orgInfoRepository.loadCommonInfo(this.schoolId);
            case 9:
              this.schoolInfo = _context.sent;
              dateFormat = this.schoolInfo.dateformat;
              if (dateFormat) {
                this.initDataFromCommonDateFormat(dateFormat);
                this.data.timeOffset = this.schoolInfo.timeoffset;
              }
            case 12:
              if (!this.data) {
                this.initDataDefault();
              }
              if (this.storedData) {
                this.changeTracker.dataWasChanged();
              }
              this.data.timeOffset = this.data.timeOffset || "4";
              this.data.dateFormat = this.getDateFormat();
              this.data.timeFormat = this.getTimeFormat();
              this.firstDatePartFormats = this.service.getFirstDatePartFormats();
              this.secondDatePartFormats = this.service.getSecondDatePartFormats(this.data.firstDatePartFormat);
              this.thirdDatePartFormats = this.service.getThirdDatePartFormats(this.data.firstDatePartFormat, this.data.secondDatePartFormat);
              this.hourFormats = this.service.hourFormats;
              this.minuteFormats = this.service.minuteFormats;
              _context.next = 24;
              return this.schoolRegionalSettingsRepository.getLanguageLocaleId();
            case 24:
              this.localeId = _context.sent;
              _context.next = 27;
              return this.settingsProvider.ServerSettings.CommonServerSettings.AllowEditTimezoneInOo();
            case 27:
              this.allowEditTimezoneInOo = _context.sent;
              this.timezones = this.service.timezones;
              this.ready = true;
              this.$appLoader.hide();
              this.$scope.$applyAsync();
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "onloadHandler",
    value: function onloadHandler() {
      var _this = this;
      angular.element(document).on("keydown keypress", function ($event) {
        if ($event.which == 116) {
          // F5
          _this.storeData();
        }
      });
    }
  }, {
    key: "getStoredData",
    value: function getStoredData() {
      var storedInfo = localStorage.getItem("regional-settings-data");
      var data = null;
      if (storedInfo) {
        data = JSON.parse(storedInfo);
      }
      return data;
    }
  }, {
    key: "storeData",
    value: function storeData() {
      localStorage.setItem("regional-settings-data", JSON.stringify(this.data));
    }
  }, {
    key: "removeStoredData",
    value: function removeStoredData() {
      localStorage.removeItem("regional-settings-data");
    }
  }, {
    key: "initDataDefault",
    value: function initDataDefault() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      this.data = {
        timeOffset: ((_a = this.storedData) === null || _a === void 0 ? void 0 : _a.timeOffset) || "4",
        firstDatePartFormat: ((_b = this.storedData) === null || _b === void 0 ? void 0 : _b.firstDatePartFormat) || "d",
        secondDatePartFormat: ((_c = this.storedData) === null || _c === void 0 ? void 0 : _c.secondDatePartFormat) || "mm",
        thirdDatePartFormat: ((_d = this.storedData) === null || _d === void 0 ? void 0 : _d.thirdDatePartFormat) || "yy",
        dateDelimiter: ((_e = this.storedData) === null || _e === void 0 ? void 0 : _e.dateDelimiter) || ".",
        hoursFormat: ((_f = this.storedData) === null || _f === void 0 ? void 0 : _f.hoursFormat) || "h",
        minutesFormat: ((_g = this.storedData) === null || _g === void 0 ? void 0 : _g.minutesFormat) || "mm",
        timeDelimiter: ((_h = this.storedData) === null || _h === void 0 ? void 0 : _h.timeDelimiter) || ":",
        timeAm: ((_j = this.storedData) === null || _j === void 0 ? void 0 : _j.timeAm) || "",
        timePm: ((_k = this.storedData) === null || _k === void 0 ? void 0 : _k.timePm) || ""
      };
    }
  }, {
    key: "initDataFromCommonDateFormat",
    value: function initDataFromCommonDateFormat(dateFormat) {
      var result = dateFormat.split(String.fromCharCode(1));
      this.data = {
        firstDatePartFormat: result[0],
        secondDatePartFormat: result[1],
        thirdDatePartFormat: result[2],
        dateDelimiter: result[3],
        hoursFormat: result[4],
        minutesFormat: result[5],
        timeDelimiter: result[6],
        timeAm: result[7],
        timePm: result[8]
      };
    }
  }, {
    key: "getDateFormat",
    value: function getDateFormat() {
      var chr1 = String.fromCharCode(1);
      return this.data.firstDatePartFormat + chr1 + this.data.secondDatePartFormat + chr1 + this.data.thirdDatePartFormat + chr1 + (this.data.dateDelimiter || ".");
    }
  }, {
    key: "getTimeFormat",
    value: function getTimeFormat() {
      var chr1 = String.fromCharCode(1);
      return this.data.hoursFormat + chr1 + this.data.minutesFormat + chr1 + (this.data.timeDelimiter || ":") + chr1 + this.data.timeAm + chr1 + this.data.timePm;
    }
  }, {
    key: "isEng",
    value: function isEng() {
      return this.localeId === 1033;
    }
  }, {
    key: "correctDate",
    value: function correctDate() {
      var dt = new Date();
      var currentTimeZoneOffsetInHours = -dt.getTimezoneOffset() / 60;
      if (this.data.timeOffset) {
        dt.setHours(dt.getHours() + (parseInt(this.data.timeOffset) - currentTimeZoneOffsetInHours));
      }
      return dt;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.dateUtils.date2strf(this.correctDate(), this.getDateFormat());
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.dateUtils.timeTwoStrf(this.correctDate(), this.getTimeFormat());
    }
  }, {
    key: "correctSelectedFormat",
    value: function correctSelectedFormat(formats, selected) {
      var inFormats = formats.some(function (x) {
        return x === selected;
      });
      if (!inFormats) {
        selected = formats[0];
      }
      return selected;
    }
  }, {
    key: "toggleFirstDatePartFormat",
    value: function toggleFirstDatePartFormat() {
      this.secondDatePartFormats = this.service.getSecondDatePartFormats(this.data.firstDatePartFormat);
      this.data.secondDatePartFormat = this.correctSelectedFormat(this.secondDatePartFormats, this.data.secondDatePartFormat);
      this.toggleSecondDatePartFormat();
    }
  }, {
    key: "toggleSecondDatePartFormat",
    value: function toggleSecondDatePartFormat() {
      this.thirdDatePartFormats = this.service.getThirdDatePartFormats(this.data.firstDatePartFormat, this.data.secondDatePartFormat);
      this.data.thirdDatePartFormat = this.correctSelectedFormat(this.thirdDatePartFormats, this.data.thirdDatePartFormat);
      this.toggleThirdDatePartFormat();
    }
  }, {
    key: "toggleThirdDatePartFormat",
    value: function toggleThirdDatePartFormat() {
      this.data.dateFormat = this.getDateFormat();
      this.$scope.$applyAsync();
    }
  }, {
    key: "toggleTime",
    value: function toggleTime() {
      this.data.timeFormat = this.getTimeFormat();
      this.$scope.$applyAsync();
    }
  }, {
    key: "toggleDateDelimiter",
    value: function toggleDateDelimiter() {
      if (!this.data.dateDelimiter) {
        return;
      }
      if (!this.checkDelimiter(this.data.dateDelimiter)) {
        this.data.dateDelimiter = null;
        this.form.delim.$$element.eq(0).trigger("focus");
      }
    }
  }, {
    key: "toggleTimeDelimiter",
    value: function toggleTimeDelimiter() {
      if (!this.data.timeDelimiter) {
        return;
      }
      if (!this.checkDelimiter(this.data.timeDelimiter)) {
        this.data.timeDelimiter = null;
        this.form.tdelim.$$element.eq(0).trigger("focus");
      }
    }
  }, {
    key: "checkDelimiter",
    value: function checkDelimiter(delimiter) {
      var allowed = ['/', '-', '.', ':'];
      if (allowed.indexOf(delimiter) >= 0) {
        return true;
      }
      this.$dialogs.message("Допустимые символы разделителя /-.:");
      return false;
    }
  }, {
    key: "validate",
    value: function validate() {
      var dateDelimiter = this.data.dateDelimiter;
      if (dateDelimiter == "\\" || dateDelimiter == "'" || dateDelimiter == '"') {
        this.$dialogs.message(this.language.Generic.SetupSchool.kCharactersAreNotAllowed1);
        this.form.delim.$$element.eq(0).trigger("focus");
        return false;
      }
      var timeDelimiter = this.data.timeDelimiter;
      if (timeDelimiter == "\\" || timeDelimiter == "'" || timeDelimiter == '"') {
        this.$dialogs.message(this.language.Generic.SetupSchool.kCharactersAreNotAllowed1);
        this.form.tdelim.$$element.eq(0).trigger("focus");
        return false;
      }
      if (this.isEng()) {
        var timeAm = this.data.timeAm;
        var timePm = this.data.timePm;
        var reg = new RegExp("[\'\"]");
        if (timeAm.search(reg) >= 0) {
          this.$dialogs.message(this.language.Generic.SetupSchool.kCharactersAreNotAllowed2);
          this.form.tam.$$element.eq(0).trigger("focus");
          return false;
        }
        if (timePm.search(reg) >= 0) {
          this.$dialogs.message(this.language.Generic.SetupSchool.kCharactersAreNotAllowed2);
          this.form.tpm.$$element.eq(0).trigger("focus");
          return false;
        }
        if (timePm == timeAm) {
          if (timePm != "") {
            this.$dialogs.message(this.language.Generic.SetupSchool.kAMandPMmustDiffer);
            this.form.tpm.$$element.eq(0).trigger("focus");
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "prepareSave",
    value: function prepareSave() {
      if (!this.data.dateDelimiter) this.data.dateDelimiter = ".";
      if (!this.data.timeDelimiter) this.data.timeDelimiter = ":";
      this.data.dateFormat = this.getDateFormat();
      this.data.timeFormat = this.getTimeFormat();
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.validate()) {
        return;
      }
      this.prepareSave();
      var chr1 = String.fromCharCode(1);
      var dateFormat = this.data.dateFormat + chr1 + this.data.timeFormat + chr1 + this.localeId;
      var saveWork = this.schoolRegionalSettingsRepository.saveSchoolRegionalSettings(dateFormat, this.data.timeOffset).then(function () {
        _this2.appContext.dateFormat = _this2.data.dateFormat;
        var request = {
          dateFormat: _this2.data.dateFormat,
          timeFormat: _this2.data.timeFormat + chr1,
          gmt: _this2.data.timeOffset
        };
        return _this2.schoolRegionalSettingsRepository.putSchoolRegionalSettings(request);
      });
      this.$longWork.execute(saveWork).then(function () {
        _this2.changeTracker.clearDataChanges();
        _this2.$alerts.success(_this2.language.Generic.SetupSchool.kRegionalSettingsSaved);
      });
    }
  }]);
  return SchoolRegionalSettingsController;
}();
var SchoolRegionalSettingsComponent = {
  templateUrl: "/static/dist/app/school/orginfo/regional-settings/regional-settings.component.html",
  controller: SchoolRegionalSettingsController,
  controllerAs: "$ctrl"
};
exports.SchoolRegionalSettingsComponent = SchoolRegionalSettingsComponent;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolRegionalSettingsRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var SchoolRegionalSettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SchoolRegionalSettingsRepository, _BaseRepository);
  var _super = _createSuper(SchoolRegionalSettingsRepository);
  function SchoolRegionalSettingsRepository() {
    _classCallCheck(this, SchoolRegionalSettingsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolRegionalSettingsRepository, [{
    key: "saveSchoolRegionalSettings",
    value: function saveSchoolRegionalSettings(dateFormat, timeOffset) {
      var params = {
        dateFormat: dateFormat,
        timeOffset: timeOffset
      };
      return this.$http.post("/webapi/school/regional-settings", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLanguageLocaleId",
    value: function getLanguageLocaleId() {
      return this.$http.get("/webapi/language/localeId").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "putSchoolRegionalSettings",
    value: function putSchoolRegionalSettings(request) {
      this.$http.put("/webapi/context/regional-settings", request).then(this.handleResponse, this.handleError);
    }
  }]);
  return SchoolRegionalSettingsRepository;
}(_baseRepository.BaseRepository);
exports.SchoolRegionalSettingsRepository = SchoolRegionalSettingsRepository;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatsRepository = void 0;
var _baseRepository = __webpack_require__(34);
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
var ChatsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ChatsRepository, _BaseRepository);
  var _super = _createSuper(ChatsRepository);
  function ChatsRepository() {
    _classCallCheck(this, ChatsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ChatsRepository, [{
    key: "init",
    value: function init(chatTypes) {
      return this.$http.post("/webapi/integration/chats/init", {
        chatTypes: chatTypes
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "initChatMembers",
    value: function initChatMembers(chatId) {
      return this.$http.post("/webapi/integration/chats/".concat(chatId, "/init-members")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getChat",
    value: function getChat(chatId) {
      if (!chatId) {
        return Promise.resolve(null);
      }
      return this.$http.get("/webapi/integration/chats/".concat(chatId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getChats",
    value: function getChats() {
      return this.$http.get("/webapi/integration/chats/").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addChat",
    value: function addChat(chat) {
      return this.$http.post("/webapi/integration/chats/add", chat).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeChat",
    value: function removeChat(chatId) {
      return this.$http["delete"]("/webapi/integration/chats/".concat(chatId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeChatMembers",
    value: function removeChatMembers(chatId, userIds) {
      return this.$http.post("/webapi/integration/chats/".concat(chatId, "/members/remove"), userIds).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setAdmins",
    value: function setAdmins(chatId, flag, userIds) {
      return this.$http.post("/webapi/integration/chats/".concat(chatId, "/members/set-admins/").concat(flag), userIds).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addChatMembers",
    value: function addChatMembers(chatId, userIds) {
      return this.$http.post("/webapi/integration/chats/".concat(chatId, "/members"), userIds).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getChatTypes",
    value: function getChatTypes() {
      return this.$http.get("/webapi/integration/chats/types").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUsersNames",
    value: function getUsersNames(userIds) {
      return this.$http.post("/webapi/integration/chats/schoolusers", userIds).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getVkAccessData",
    value: function getVkAccessData(extraData) {
      return this.$http.get("/webapi/integration/vk/access-data", extraData).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getVkEduGroup",
    value: function getVkEduGroup() {
      return this.$http.get("/webapi/integration/chats/vk-edugroup").then(this.handleResponse);
    }
  }, {
    key: "editVkEduGroup",
    value: function editVkEduGroup(vkAccessToken, vkGroupId) {
      var params = {
        vkAccessToken: vkAccessToken,
        vkGroupId: vkGroupId
      };
      return this.$http.post("/webapi/integration/chats/vk-edugroup", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getVkEduProfile",
    value: function getVkEduProfile() {
      return this.$http.get("/webapi/integration/vk/edu-profile").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "unlinkVkEduProfile",
    value: function unlinkVkEduProfile() {
      return this.$http.post("/webapi/integration/vk/edu-profile/unlink").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "isChatServiceWorking",
    value: function isChatServiceWorking() {
      return this.$http.get("/webapi/integration/chats/service").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIp",
    value: function getIp() {
      return new Promise(function (resolve) {
        $.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
          var lines = data.trim().split('\n');
          var ipLine = lines[2];
          var keyvalue = ipLine.split('=');
          resolve(keyvalue[1]);
        });
      });
    }
  }, {
    key: "saveChatName",
    value: function saveChatName(chatId, chatName) {
      return this.$http.post("/webapi/integration/chats/".concat(chatId, "/name"), null, {
        params: {
          name: chatName
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return ChatsRepository;
}(_baseRepository.BaseRepository);
exports.ChatsRepository = ChatsRepository;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentTypeHelper = exports.AddressEditComponent = void 0;
var _fiasAddress = __webpack_require__(93);
var _common = __webpack_require__(50);
var _address = __webpack_require__(73);
var _legacyAddress = __webpack_require__(95);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContentTypeHelper = /*#__PURE__*/function () {
  function ContentTypeHelper() {
    _classCallCheck(this, ContentTypeHelper);
  }
  _createClass(ContentTypeHelper, null, [{
    key: "getPrevContentType",
    value: function getPrevContentType(contentType) {
      if (contentType == _address.AddressContentType.region) {
        return [_address.AddressContentType.country];
      }
      if (contentType == _address.AddressContentType.district) {
        return [_address.AddressContentType.region];
      }
      if (contentType == _address.AddressContentType.street) {
        return [_address.AddressContentType.city, _address.AddressContentType.district, _address.AddressContentType.region];
      }
      if (contentType == _address.AddressContentType.building) {
        return [_address.AddressContentType.street, _address.AddressContentType.city];
      }
      if (contentType == _address.AddressContentType.city) {
        return [_address.AddressContentType.district, _address.AddressContentType.region];
      }
      return [_address.AddressContentType.region];
    }
  }]);
  return ContentTypeHelper;
}();
exports.ContentTypeHelper = ContentTypeHelper;
var AddressEditController = /*#__PURE__*/function () {
  AddressEditController.$inject = ["$scope", "fiasClient", "loggerFactory", "$http"];
  /*@ngInject*/
  function AddressEditController($scope, fiasClient, loggerFactory, $http) {
    _classCallCheck(this, AddressEditController);
    this.$scope = $scope;
    this.fiasClient = fiasClient;
    this.loggerFactory = loggerFactory;
    this.$http = $http;
    this.fiasMode = false;
    this.fiasUnknown = false;
    this.ready = false;
  }
  _createClass(AddressEditController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.saveModel = new _common.BehaviorSubject();
      if (this.fiasMode) {
        this.provider = new _fiasAddress.FiasAddressProvider(this.fiasClient, 20, this.loggerFactory, this.$http);
      } else {
        this.provider = new _legacyAddress.LegacyAddressProvider();
      }
      this.provider.prepareAddress(this.address).then(function (editModel) {
        _this.editAddress = editModel;
        _this.initFiasUnknown();
        _this.select2Settings = {
          region: _this.getDefaultSettings("регион", _address.AddressContentType.region),
          district: _this.getDefaultSettings("мун. район", _address.AddressContentType.district),
          city: _this.getDefaultSettings("нас. пункт", _address.AddressContentType.city),
          street: _this.getDefaultSettings("улицу", _address.AddressContentType.street),
          building: _this.getDefaultSettings("дом", _address.AddressContentType.building)
        };
        if (!_this.fiasMode) {
          _this.select2Settings.country = _this.getDefaultSettings("страна", _address.AddressContentType.country);
        }
        _this.ready = true;
        _this.syncAddress();
        _this.$scope.$applyAsync();
      }, function (reason) {
        _this.ready = true;
        _this.error = reason;
        _this.$scope.$applyAsync();
      });
    }
  }, {
    key: "isFederalCityRegion",
    value: function isFederalCityRegion() {
      if (!this.fiasMode) {
        return false;
      }
      var regionFiasItem = this.editAddress.region;
      var federalCityCodes = ["77", "78", "92"];
      var isFederal = federalCityCodes.some(function (code) {
        return regionFiasItem === null || regionFiasItem === void 0 ? void 0 : regionFiasItem.code.startsWith(code);
      });
      return isFederal;
    }
  }, {
    key: "showStreet",
    get: function get() {
      if (this.editAddress.city != null) {
        return true;
      }
      if (!this.fiasMode) {
        return false;
      }
      return this.isFederalCityRegion;
    }
  }, {
    key: "fiasBuldingSelected",
    get: function get() {
      if (!this.fiasMode) {
        return false;
      }
      var buildingFiasItem = this.editAddress.building;
      if (!buildingFiasItem || buildingFiasItem == null || buildingFiasItem == undefined) {
        return false;
      }
      return !buildingFiasItem.unknown;
    }
  }, {
    key: "initAjaxSettings",
    value: function initAjaxSettings(contentType) {
      var _this2 = this;
      var getPrevChoice = function getPrevChoice(contentType) {
        var prevContentTypes = ContentTypeHelper.getPrevContentType(contentType);
        if (prevContentTypes == null) {
          return null;
        }
        var prevChoice = prevContentTypes.map(function (c) {
          return _this2.editAddress[c];
        }).find(function (c) {
          return c != null && c.id != "-1";
        });
        return prevChoice;
      };
      return {
        url: this.provider.getUrl(contentType),
        delay: 250,
        cache: true,
        type: "GET",
        dataType: "json",
        escapeMarkup: function escapeMarkup(markup) {
          return markup;
        },
        params: {
          contentType: "application/json"
        },
        data: function data(params) {
          var lastChoise = getPrevChoice(contentType);
          return _this2.provider.getQuery(contentType, lastChoise, params.term);
        },
        processResults: function processResults(data, query) {
          var mappedData = _this2.provider.processResult(contentType, data, query);
          return {
            results: mappedData
          };
        }
      };
    }
    // Настройки по умолчанию
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings(inputTitle, contentType) {
      var _this3 = this;
      var ajaxSettings = this.initAjaxSettings(contentType);
      var defaultLimit = this.fiasMode ? 1 : 0;
      var data = [];
      data.push(this.editAddress[contentType]);
      var defaultSettings = {
        limit: 20,
        minimumInputLength: contentType == _address.AddressContentType.building || contentType == _address.AddressContentType.street ? 1 : defaultLimit,
        language: "ru",
        allowClear: true,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 " + inputTitle,
        ajax: ajaxSettings,
        templateResult: function templateResult(item) {
          return _this3.provider.displayResult(item);
        },
        templateSelection: function templateSelection(item) {
          return _this3.provider.displaySelection(item);
        },
        data: data,
        initSelection: function initSelection(element, callback) {
          var current = _this3.editAddress[contentType];
          if (current) {
            callback(current);
          } else {
            callback([]);
          }
        },
        clear: new _common.Subject(),
        onChange: function onChange() {
          switch (contentType) {
            case _address.AddressContentType.country:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              _this3.select2Settings.district.clear.next();
              _this3.select2Settings.region.clear.next();
              break;
            case _address.AddressContentType.region:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              _this3.select2Settings.district.clear.next();
              break;
            case _address.AddressContentType.city:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              break;
            case _address.AddressContentType.district:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              break;
            case _address.AddressContentType.street:
              _this3.select2Settings.building.clear.next();
              break;
          }
          _this3.syncAddress();
          _this3.$scope.$applyAsync();
        }
      };
      return defaultSettings;
    }
  }, {
    key: "isFilled",
    value: function isFilled() {
      return this.editAddress.region && this.editAddress.city && this.editAddress.building;
    }
  }, {
    key: "syncAddress",
    value: function syncAddress() {
      var commonModel = this.provider.getSaveModel();
      var saveAddressData = {
        id: this.address.addressId,
        addressType: this.address.addressType,
        country: commonModel.country,
        region: commonModel.region,
        district: commonModel.district,
        city: commonModel.city,
        street: commonModel.street,
        building: null,
        corp: this.editAddress.corpus,
        flat: this.editAddress.flat,
        struc: this.editAddress.struc,
        zipCode: this.editAddress.zipCode
      };
      if (this.editAddress.building) {
        saveAddressData.building = {
          name: this.editAddress.building.text,
          code: null,
          type: null,
          zip: null
        };
        var fiasBuilding = this.editAddress.building;
        if (fiasBuilding && fiasBuilding.aoGuid) {
          saveAddressData.building.name = fiasBuilding.houseNum || saveAddressData.building.name;
          saveAddressData.building.id = fiasBuilding.id;
          saveAddressData.building.aoGuid = fiasBuilding.aoGuid;
          saveAddressData.building.houseGuid = fiasBuilding.houseGuid;
          saveAddressData.building.zip = fiasBuilding.zip;
        }
      }
      this.initFiasUnknown();
      this.saveModel.next(saveAddressData);
    }
  }, {
    key: "initFiasUnknown",
    value: function initFiasUnknown() {
      if (this.fiasMode) {
        var fiasModel = this.provider.addressModel;
        this.fiasUnknown = fiasModel.isUnknown();
      }
    }
  }]);
  return AddressEditController;
}();
var AddressEditComponent = {
  selector: "addressEdit",
  controller: AddressEditController,
  bindings: {
    address: "=",
    saveModel: "=",
    fiasMode: "<?",
    editAddress: "=?",
    isSchoolAddress: "<?",
    ready: "=?",
    error: "=?",
    form: "<?"
  },
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/components/address/addressedit.component.html"
};
exports.AddressEditComponent = AddressEditComponent;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiasAddressProvider = exports.FiasAddressModel = exports.FiasAddressItem = void 0;
var _addressedit = __webpack_require__(92);
var _fiasclient = __webpack_require__(94);
var _address = __webpack_require__(73);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FiasAddressItem = /*#__PURE__*/function () {
  function FiasAddressItem() {
    _classCallCheck(this, FiasAddressItem);
  }
  _createClass(FiasAddressItem, [{
    key: "getSaveItem",
    value: function getSaveItem() {
      return {
        id: this.id,
        aoGuid: this.aoGuid,
        houseGuid: this.houseGuid,
        code: this.code,
        type: this.type,
        zip: this.zip,
        name: this.text
      };
    }
  }]);
  return FiasAddressItem;
}();
exports.FiasAddressItem = FiasAddressItem;
var FiasAddressModel = /*#__PURE__*/function () {
  function FiasAddressModel() {
    _classCallCheck(this, FiasAddressModel);
  }
  _createClass(FiasAddressModel, [{
    key: "corpus",
    get: function get() {
      if (!this.building) {
        return "";
      }
      if (this.building.unknown) {
        return this._corpus;
      }
      return this.building.buildNum;
    },
    set: function set(val) {
      this._corpus = val;
    }
  }, {
    key: "struc",
    get: function get() {
      if (!this.building) {
        return "";
      }
      if (this.building.unknown) {
        return this._struc;
      }
      return this.building.strucNum;
    },
    set: function set(val) {
      this._struc = val;
    }
  }, {
    key: "zipCode",
    get: function get() {
      if (this.building && this.building.zip) {
        return this.building.zip;
      }
      if (this.street && this.street.zip) {
        return this.street.zip;
      }
      if (this.city && this.city.zip) {
        return this.city.zip;
      }
      return "";
    }
  }, {
    key: "isUnknown",
    value: function isUnknown() {
      return this.region && this.region.unknown || this.district && this.district.unknown || this.city && this.city.unknown || this.street && this.street.unknown || this.building && this.building.unknown;
    }
  }, {
    key: "getSaveModel",
    value: function getSaveModel() {
      var region = this.region && this.region.getSaveItem();
      var district = this.district && this.district.getSaveItem();
      var city = this.city && this.city.id && this.city.getSaveItem();
      var street = this.street && this.street.getSaveItem();
      var commonData = {
        country: null,
        region: region,
        district: district,
        city: city,
        street: street
      };
      return commonData;
    }
  }]);
  return FiasAddressModel;
}();
exports.FiasAddressModel = FiasAddressModel;
var FiasAddressProvider = /*#__PURE__*/function () {
  function FiasAddressProvider(fiasClient, limit, loggerFactory, $http) {
    _classCallCheck(this, FiasAddressProvider);
    this.fiasClient = fiasClient;
    this.limit = limit;
    this.$http = $http;
    this.logger = loggerFactory.getInstance("FiasAddressProvider");
  }
  _createClass(FiasAddressProvider, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      return this.addressModel.getSaveModel();
    }
  }, {
    key: "prepareAddress",
    value: function prepareAddress(addressEdit) {
      var _this = this;
      var promiseChain = this.$http.get("/webapi/settings/externalAddressServiceUrl").then(function (response) {
        return _this.fiasClient.url = response.data;
      })["catch"](function () {
        return Promise.reject("Произошла ошибка связи с сервисом адресов ФИАС.\nПопробуйте позже или воспользуйтесь обычным режимом ввода.");
      });
      var model = new FiasAddressModel();
      model.flat = addressEdit.flat;
      model.corpus = addressEdit.corp;
      model.struc = addressEdit.struc;
      //model.zipCode = addressEdit.zipCode;
      if (addressEdit.region) {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.region, addressEdit.region).then(function (resRegion) {
            return model.region = resRegion;
          });
        });
      }
      if (addressEdit.district) {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.district, addressEdit.district, model.region).then(function (resDistrict) {
            return model.district = resDistrict;
          });
        });
      }
      if (addressEdit.city) {
        promiseChain = promiseChain.then(function () {
          var _a;
          if (((_a = model.district) === null || _a === void 0 ? void 0 : _a.type) == "Город" && (addressEdit.city.name == model.district.text || addressEdit.city.kladr == addressEdit.district.kladr)) {
            //фикс для Наро-Фоминск
            return Promise.resolve(null);
          }
          return _this.prepareItem(_address.AddressContentType.city, addressEdit.city, model.district || model.region).then(function (resCity) {
            return model.city = resCity;
          });
        });
      }
      if (addressEdit.street && addressEdit.street.name != "Нет") {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.street, addressEdit.street, model.city || model.district).then(function (resStreet) {
            return model.street = resStreet;
          });
        });
      }
      if (addressEdit.building) {
        var building = {
          id: null,
          name: addressEdit.building,
          fiasId: addressEdit.buildingFiasId,
          corp: addressEdit.corp,
          struc: addressEdit.struc
        };
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.building, building, model.street || model.city).then(function (resbuilding) {
            return model.building = resbuilding;
          });
        });
      }
      return promiseChain.then(function () {
        _this.addressModel = model;
        return model;
      });
    }
  }, {
    key: "prepareItem",
    value: function prepareItem(contentType, item, parent) {
      var _this2 = this;
      var unknownItem = new FiasAddressItem();
      unknownItem.id = item.fiasId;
      unknownItem.text = item.name;
      unknownItem.unknown = true;
      unknownItem.contentType = contentType;
      if (parent && parent.unknown) {
        return Promise.resolve(unknownItem);
      }
      var fiasParent = parent;
      var searchByName = true;
      var fiasSearch;
      if (contentType == _address.AddressContentType.street && item.fiasId) {
        fiasSearch = this.fiasClient.searchByAoGuid(contentType, item.fiasId, this.limit, parent && parent.contentType, parent && parent.id);
        searchByName = false;
      } else {
        fiasSearch = this.fiasClient.search(contentType, item.name, this.limit, parent && parent.contentType, parent && parent.id);
      }
      fiasSearch["catch"](function (xhr) {
        _this2.logger.error("\u043E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043A \u0424\u0418\u0410\u0421", xhr);
      });
      return fiasSearch.then(function (resultsByName) {
        _this2.logger.debug("prepare ".concat(contentType, " results: ") + JSON.stringify(resultsByName));
        if (contentType == _address.AddressContentType.building) {
          var buildingDto = item;
          resultsByName = resultsByName.filter(function (r) {
            return r.buildNum == buildingDto.corp && r.strucNum == buildingDto.struc;
          });
        }
        if (resultsByName.length > 1 && item.fiasId && parent && parent.id) {
          //пробуем уточнить результаты поиком по id
          return _this2.fiasClient.searchByAoGuid(contentType, item.fiasId, _this2.limit, parent && parent.contentType, parent.id).then(function (resultsById) {
            var filtered = resultsByName.filter(function (r) {
              return resultsById.some(function (ri) {
                return ri.aoGuid == r.aoGuid;
              });
            });
            if (contentType == _address.AddressContentType.building) {
              filtered = resultsByName.filter(function (r) {
                return resultsById.some(function (ri) {
                  return ri.houseGuid == r.houseGuid;
                });
              });
            }
            if (filtered.length) {
              return filtered[0];
            }
            return resultsByName[0];
          });
        }
        if (resultsByName.length) {
          return resultsByName[0];
        }
        if (contentType == _address.AddressContentType.city) {
          var isFederalCity = (fiasParent.type == "Город" || fiasParent.typeShort == "г") && !new RegExp('[^0]').test(fiasParent.code.substr(2));
          if (isFederalCity) {
            return null;
          }
        }
        var canSearchById = searchByName && item.fiasId && parent && parent.id;
        var hasUnsupportedChars = ['-', '/', '(', ')'].some(function (c) {
          return item.name.indexOf(c) != -1;
        });
        if (!unknownItem.id) {
          // если unknownItem.id является null, undefined или "", то во избежание ошибок (поиска) это значение изменяется
          unknownItem.id = " ";
        }
        if (!canSearchById || !hasUnsupportedChars && contentType != _address.AddressContentType.building) {
          return unknownItem;
        }
        return _this2.fiasClient.searchByAoGuid(contentType, item.fiasId, _this2.limit, parent && parent.contentType, parent && parent.id).then(function (results) {
          if (results.length) {
            return results[0];
          }
          return unknownItem;
        });
      })["catch"](function () {
        return Promise.reject("Произошла ошибка связи с сервисом адресов ФИАС.\nПопробуйте позже или воспользуйтесь обычным режимом ввода.");
      });
    }
  }, {
    key: "getUrl",
    value: function getUrl(contentType) {
      return "https://fias.ir-tech.ru/location";
    }
  }, {
    key: "getQuery",
    value: function getQuery(contentType, parent, name) {
      var parentContentType = parent && parent.contentType;
      var parentId = parent && parent.id;
      if (!parentId && contentType != _address.AddressContentType.region) {
        //если не определен родитель результат поиска должен быть пустым
        contentType = _address.AddressContentType.region;
        name = "unknown";
      }
      var limit = this.limit;
      if (contentType == _address.AddressContentType.city && parent && parent.contentType == _address.AddressContentType.region) {
        //поиск по имени нас.пункта в регионе возвращает в том числе и нас. пункты в мун. районах, которые потом отфильтровываются
        //эти записи могут занимать весь лимит, поэтому здесь увеличиваем лимит.
        limit = limit * 2;
      }
      var params = _fiasclient.FiasClient.buildQuery(contentType, limit, null, name, parentContentType, parentId);
      return params;
    }
  }, {
    key: "processResult",
    value: function processResult(contentType, data, query) {
      var preresult = _fiasclient.FiasClient.processReferences(data.result);
      var mappedResults = preresult.map(_fiasclient.FiasClient.prepeareData);
      var prevContentType = _addressedit.ContentTypeHelper.getPrevContentType(contentType);
      if (prevContentType && prevContentType.length > 1) {
        var nearestContentType = prevContentType[0];
        var nearestAddressItem = this.addressModel[nearestContentType];
        if (!nearestAddressItem) {
          //если не заполнено адреснное поле - ближайшего родительского адресного элемента
          var filter = function filter(o) {
            if (!o.parents) {
              return true;
            }
            var actualNearestParent = o.parents.find(function (p) {
              return p.currentStatus === 0 && p.contentType === nearestContentType;
            });
            //убираем из результатов адреса, для которыъ есть актуальный ближайший родитель (для города - мун. район)
            return !actualNearestParent;
          };
          mappedResults = mappedResults.filter(filter);
        }
      }
      if (query.term && mappedResults.length === 0 && contentType === _address.AddressContentType.building) {
        var unknownItem = new FiasAddressItem();
        unknownItem.id = query.term;
        unknownItem.text = query.term;
        unknownItem.unknown = true;
        unknownItem.contentType = contentType;
        mappedResults.push(unknownItem);
      }
      this.uniqFullNames(mappedResults);
      var count = function count(x) {
        return x.parents && x.parents.length || 0;
      };
      return mappedResults.sort(function (a, b) {
        return count(a) - count(b);
      });
    }
  }, {
    key: "uniqFullNames",
    value: function uniqFullNames(list) {
      list.forEach(function (item) {
        var _double = list.find(function (c) {
          return c.text == item.text && c.id != item.id && c.fullName == item.fullName;
        });
        if (_double && item.zip) {
          item.fullName += " (" + item.zip + ")";
        }
      });
    }
  }, {
    key: "displayResult",
    value: function displayResult(item) {
      return this.format(item, item.parents, true);
    }
  }, {
    key: "displaySelection",
    value: function displaySelection(item) {
      var _a;
      if (item.contentType == _address.AddressContentType.street) {
        var streetParents = (_a = item.parents) === null || _a === void 0 ? void 0 : _a.filter(function (p) {
          return p.contentType == _address.AddressContentType.street;
        });
        return this.format(item, streetParents, false, false);
      }
      return this.format(item);
    }
  }, {
    key: "map",
    value: function map(contentType, item) {
      return {
        id: item.fiasId,
        text: item.name,
        meta: item,
        contentType: contentType
      };
    }
  }, {
    key: "getParentName",
    value: function getParentName(item, parents, fullName) {
      var _a;
      var parent = parents[parents.length - 1];
      var parentName = parent.name;
      if (parent.typeShort) {
        parentName += " " + parent.typeShort;
      }
      if (item.fullName) {
        if (item.contentType == _address.AddressContentType.city) {
          return item.fullName;
        }
        if (item.contentType == _address.AddressContentType.street) {
          if (parent.contentType == _address.AddressContentType.street) {
            //если улицы в родителях есть элем. план. стр-ры - то в fullName сервис ФИАС не отдает ее наименование. 
            //поэтому сами собираем наименование
            return item.fullName + " (" + parentName + ")";
          }
          if (parent.contentType == _address.AddressContentType.district) {
            //если улицы в родителях нет нас. пункта - то исправляем наименование
            //до фикса полное наименование следующее - Московская обл, ул Советская
            try {
              var nameParts = item.fullName.split(',');
              if (nameParts.length == 2) {
                nameParts.splice(1, 0, parent.typeShort + " " + parent.name);
                return nameParts.join(', ');
              }
            } catch (e) {
              console.log(e);
            }
          }
          //в остальных случаях наименование правильное
          return item.fullName;
        }
      }
      if (fullName) {
        parentName = parent.contentType == item.contentType ? "".concat(parent.fullName, ", ").concat(parent.name) : ((_a = parent.fullName) === null || _a === void 0 ? void 0 : _a.length) > 0 ? parent.fullName : parent.name;
      }
      return parentName;
    }
  }, {
    key: "getDisplayText",
    value: function getDisplayText(item) {
      var displayText;
      if (item.contentType === _address.AddressContentType.region) {
        displayText = "".concat(item.code.substr(0, 2), " ").concat(item.text, " ").concat(item.typeShort);
      } else {
        displayText = item.text;
        if (item.type) {
          displayText = item.type + " " + displayText;
        } else if (item.typeShort) {
          displayText = item.typeShort + (item.typeShort.endsWith(".") ? " " : ". ") + displayText;
        }
      }
      if (item.currentStatus > 0) {
        //todo. уточнить неактуальный статус
        //todo. вместо текста стилизовать option
        displayText += " (адрес неактуальный)";
      }
      return displayText;
    }
  }, {
    key: "format",
    value: function format(item, parents, html, fullName) {
      if (!item || typeof item == "string" || !item.contentType) {
        if (item.text) {
          return item.text;
        }
        return item;
      }
      if (item.unknown) {
        return $("<span>".concat(item.text, " <i>\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0424\u0418\u0410\u0421 \u044D\u043B\u0435\u043C\u0435\u043D\u0442</i> </span>"));
      }
      var displayText = this.getDisplayText(item);
      var withParents = parents && parents && parents.length > 0;
      if (withParents) {
        var parentName = this.getParentName(item, parents, fullName);
        if (html) {
          return $("<div>".concat(displayText, "</div><small><i>").concat(parentName, "</i></small>"));
        } else {
          return "".concat(displayText, " (").concat(parentName, ")");
        }
      }
      return displayText;
    }
  }]);
  return FiasAddressProvider;
}();
exports.FiasAddressProvider = FiasAddressProvider;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiasClient = void 0;
var _fiasAddress = __webpack_require__(93);
var _address = __webpack_require__(73);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FiasClient = /*#__PURE__*/function () {
  FiasClient.$inject = ["$http"];
  /*@ngInject*/
  function FiasClient($http) {
    _classCallCheck(this, FiasClient);
    this.$http = $http;
    //public url: string = "http://10.11.19.31/location";
    this.url = "https://fias.ir-tech.ru/location";
  }
  _createClass(FiasClient, [{
    key: "searchByAoGuid",
    value: function searchByAoGuid(contentType, aoGuid, limit, parentType, parentId) {
      var params = FiasClient.buildQuery(contentType, limit, aoGuid, null, parentType, parentId);
      var headersConfig = {
        at: undefined,
        "sec-fetch-mode": undefined
      };
      var httpConfig = {
        params: params,
        headers: headersConfig,
        withCredentials: false
      };
      return this.$http.get(this.url, httpConfig).then(function (response) {
        var preresult = FiasClient.processReferences(response.data.result);
        if (contentType == "building") {
          //проблема на стороне сервиса ФИАС. при поиске по id домов, возвращается неправильное имя
          preresult.forEach(function (b) {
            b.name = b.houseNum;
            if (b.strucNum) {
              b.name += "-" + b.strucNum;
            }
          });
        }
        var mappedResults = preresult.map(FiasClient.prepeareData);
        return mappedResults;
      });
    }
  }, {
    key: "search",
    value: function search(contentType, query, limit, parentType, parentId) {
      var params = FiasClient.buildQuery(contentType, limit, null, query, parentType, parentId);
      var headersConfig = {
        at: undefined,
        "sec-fetch-mode": undefined
      };
      var httpConfig = {
        params: params,
        headers: headersConfig,
        withCredentials: false
      };
      return this.$http.get(this.url, httpConfig).then(function (response) {
        var preresult = FiasClient.processReferences(response.data.result);
        var mappedResults = preresult.map(FiasClient.prepeareData);
        return mappedResults;
      });
    }
  }], [{
    key: "buildQuery",
    value: function buildQuery(contentType, limit, fiasaoguid, query, parentType, parentId) {
      if (query) {
        if (contentType == _address.AddressContentType.region) {
          var patterns = [/\s?а?обл\.?$/i, /\s?АО\s?/i, /^Г\.?\s/, /^респ\.?\s/i, /\sкрай\.?$/i, /\sАвтономный округ.*$/i, /\sреспублика.*$/i];
          patterns.forEach(function (pattern) {
            return query = query.replace(pattern, "");
          });
        } else if (contentType == _address.AddressContentType.street || contentType == _address.AddressContentType.city) {
          query = query.replace(/\?/ig, "");
        }
      }
      var queryParams = {
        limit: limit,
        //* bounds(ctx.delta, 1, 3),
        contentType: contentType,
        actual: true,
        withParent: true,
        byRef: true,
        parentType: null,
        parentId: null
      };
      if (query) {
        queryParams.query = query;
      }
      if (fiasaoguid) {
        queryParams.fiasaoguid = fiasaoguid;
      }
      if (parentType) {
        if (parentType == _address.AddressContentType.unknown) {
          queryParams.contentType = _address.AddressContentType.unknown;
        } else {
          queryParams.parentType = parentType;
          queryParams.parentId = parentId;
          //queryParams[parentType + "Id"] = parentId;
        }
      }

      return queryParams;
    }
  }, {
    key: "prepeareData",
    value: function prepeareData(o) {
      var item = new _fiasAddress.FiasAddressItem();
      item.id = o.id;
      item.aoGuid = o.aoGuid;
      item.text = o.name;
      item.code = o.code;
      item.currentStatus = o.currentStatus;
      item.contentType = o.contentType;
      item.parents = o.parents;
      item.type = o.type;
      item.typeShort = o.typeShort;
      item.zip = o.zip;
      item.fullName = o.fullName;
      if (o.houseGuid) {
        item.houseGuid = o.houseGuid;
        item.buildNum = o.buildNum;
        item.strucNum = o.strucNum;
        item.houseNum = o.houseNum;
        if (o.houseNum && (o.buildNum || o.strucNum)) {
          var extraParts = [];
          if (o.buildNum) {
            extraParts.push("корп. " + o.buildNum);
          }
          if (o.strucNum) {
            extraParts.push("стр. " + o.strucNum);
          }
          item.text = o.houseNum + " (" + extraParts.join(", ") + ")";
        }
      }
      return item;
    }
  }, {
    key: "processReferences",
    value: function processReferences(list) {
      var dictionary = {};
      var refElement = function refElement(element) {
        if (!element) return;
        if (element.$ref) {
          return dictionary[element.$ref];
        }
        if (element.$id) dictionary[element.$id] = element;
        element.parents = references(element.parents);
        return element;
      };
      var references = function references(elements) {
        if (!elements) return;
        var result = [];
        for (var index in elements) {
          var element = elements[index];
          result.push(refElement(element));
        }
        return result;
      };
      return references(list);
    }
  }]);
  return FiasClient;
}();
exports.FiasClient = FiasClient;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyAddressProvider = exports.LegacyAddressModel = exports.LegacyAddressItem = void 0;
var _address = __webpack_require__(73);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LegacyAddressItem = /*#__PURE__*/function () {
  function LegacyAddressItem() {
    _classCallCheck(this, LegacyAddressItem);
  }
  _createClass(LegacyAddressItem, [{
    key: "getSaveItem",
    value: function getSaveItem() {
      return {
        internalId: parseInt(this.id),
        name: this.text,
        code: null,
        type: "",
        zip: null
      };
    }
  }]);
  return LegacyAddressItem;
}();
exports.LegacyAddressItem = LegacyAddressItem;
var LegacyAddressModel = /*#__PURE__*/function () {
  function LegacyAddressModel() {
    _classCallCheck(this, LegacyAddressModel);
  }
  _createClass(LegacyAddressModel, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      var country = this.country && this.country.getSaveItem();
      var region = this.region && this.region.getSaveItem();
      var district = this.district && this.district.getSaveItem();
      var city = this.city && this.city.getSaveItem();
      var street = this.street && this.street.getSaveItem();
      var commonData = {
        country: country,
        region: region,
        district: district,
        city: city,
        street: street
      };
      return commonData;
    }
  }]);
  return LegacyAddressModel;
}();
exports.LegacyAddressModel = LegacyAddressModel;
var LegacyAddressProvider = /*#__PURE__*/function () {
  function LegacyAddressProvider() {
    _classCallCheck(this, LegacyAddressProvider);
  }
  _createClass(LegacyAddressProvider, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      return this.addressModel.getSaveModel();
    }
  }, {
    key: "prepareAddress",
    value: function prepareAddress(addressEdit) {
      var _this = this;
      var promiseChain = Promise.resolve();
      var model = new LegacyAddressModel();
      model.flat = addressEdit.flat;
      model.corpus = addressEdit.corp;
      model.struc = addressEdit.struc;
      model.zipCode = addressEdit.zipCode;
      if (addressEdit.country) {
        model.country = new LegacyAddressItem();
        model.country.contentType = _address.AddressContentType.country;
        model.country.id = addressEdit.country.id.toString();
        model.country.text = addressEdit.country.name;
      }
      if (addressEdit.region) {
        model.region = new LegacyAddressItem();
        model.region.contentType = _address.AddressContentType.region;
        model.region.id = addressEdit.region.id.toString();
        model.region.text = addressEdit.region.name;
        if (addressEdit.region.kladr) {
          model.region.text = addressEdit.region.kladr + " " + model.region.text;
        }
      }
      if (addressEdit.district) {
        model.district = new LegacyAddressItem();
        model.district.contentType = _address.AddressContentType.district;
        model.district.id = addressEdit.district.id.toString();
        model.district.text = addressEdit.district.name;
      }
      if (addressEdit.city) {
        model.city = new LegacyAddressItem();
        model.city.contentType = _address.AddressContentType.city;
        model.city.id = addressEdit.city.id.toString();
        model.city.text = addressEdit.city.name;
        if (addressEdit.city.typeShort) {
          model.city.text = addressEdit.city.typeShort + ". " + model.city.text;
        }
      }
      if (addressEdit.street) {
        model.street = new LegacyAddressItem();
        model.street.contentType = _address.AddressContentType.street;
        model.street.id = addressEdit.street.id.toString();
        model.street.text = addressEdit.street.name;
        if (addressEdit.street.typeShort) {
          model.street.text = addressEdit.street.typeShort + ". " + model.street.text;
        }
      }
      if (addressEdit.building) {
        model.building = new LegacyAddressItem();
        model.building.text = addressEdit.building;
      }
      return promiseChain.then(function () {
        _this.addressModel = model;
        return model;
      });
    }
  }, {
    key: "getUrl",
    value: function getUrl(contentType) {
      switch (contentType) {
        case _address.AddressContentType.country:
          return "/webapi/addresses/countries";
        case _address.AddressContentType.city:
          return "/webapi/addresses/cities";
        case _address.AddressContentType.region:
          return "/webapi/addresses/states";
        case _address.AddressContentType.district:
          return "/webapi/addresses/provinces";
        case _address.AddressContentType.street:
          return "/webapi/addresses/locations";
        case _address.AddressContentType.building:
          return "/webapi/addresses/cities";
      }
    }
  }, {
    key: "getQuery",
    value: function getQuery(contentType, parent, name) {
      var params = {
        name: name
      };
      switch (contentType) {
        case _address.AddressContentType.country:
          break;
        case _address.AddressContentType.region:
          params.countryId = parent.id;
          break;
        case _address.AddressContentType.district:
          params.stateId = parent.id;
          break;
        case _address.AddressContentType.city:
          if (parent.contentType == _address.AddressContentType.region) {
            params.stateId = parent.id;
          } else if (parent.contentType == _address.AddressContentType.district) {
            params.provinceId = parent.id;
          }
          break;
        case _address.AddressContentType.street:
          params.cityId = parent.id;
          break;
        case _address.AddressContentType.building:
          params.stateId = parent.id;
          break;
      }
      return params;
    }
  }, {
    key: "processResult",
    value: function processResult(contentType, data, query) {
      var mappedData = data.map(function (i) {
        var item = new LegacyAddressItem();
        item.id = i.id.toString();
        item.text = i.name;
        if (contentType == _address.AddressContentType.region && i.kladr) {
          item.text = i.kladr.substr(0, 2) + " " + item.text;
        }
        if (contentType == _address.AddressContentType.street && i.typeShort) {
          item.text = i.typeShort + ". " + item.text;
        }
        item.contentType = contentType;
        return item;
      });
      return mappedData;
    }
  }, {
    key: "displayResult",
    value: function displayResult(item) {
      return this.format(item);
    }
  }, {
    key: "displaySelection",
    value: function displaySelection(item) {
      return this.format(item);
    }
  }, {
    key: "map",
    value: function map(contentType, item) {
      return {
        id: item.fiasId,
        text: item.name,
        meta: item,
        contentType: contentType
      };
    }
  }, {
    key: "format",
    value: function format(item) {
      return item.text;
    }
  }]);
  return LegacyAddressProvider;
}();
exports.LegacyAddressProvider = LegacyAddressProvider;

/***/ })
/******/ ]);