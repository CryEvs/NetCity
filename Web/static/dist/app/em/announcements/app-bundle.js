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
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.university = exports.school = exports.profSchool = exports.preSchool = exports.orphanage = exports.locale = exports.generic = exports.educMgr = exports.addSchool = void 0;
var generic = -1;
exports.generic = generic;
var educMgr = 0;
exports.educMgr = educMgr;
var preSchool = 1;
exports.preSchool = preSchool;
var school = 2;
exports.school = school;
var addSchool = 3;
exports.addSchool = addSchool;
var profSchool = 4;
exports.profSchool = profSchool;
var orphanage = 5;
exports.orphanage = orphanage;
var university = 6;
exports.university = university;
var locale = {
  "-1": "-",
  0: language.Generic.Common.kEMName,
  1: language.Generic.Common.kFuncType_PreSchool,
  2: language.Generic.Common.kFuncType_School,
  3: language.Generic.Common.kFuncType_AddSchool,
  4: language.Generic.Common.kFuncType_ProfSchool,
  5: language.Generic.Common.kFuncType_Orphanage,
  6: language.Generic.Common.kFuncType_University
};
exports.locale = locale;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchToEdit = exports.single = exports.read = exports.multi = exports.edit = exports.checkMode = void 0;
// Режимы работы дерева
// Режимы работы дерева следует рассматривать как набор бинарнных флагов
/*
 нулевой бит -- режим редактирования (1 -- можно редактировать, 0 -- нельзя)
 первый бит -- режим выбора организацй (0 -- одна организация, 1 -- несколько организаций)
*/
var read = 0; // чтение (значение по умолчанию)
exports.read = read;
var edit = 1; // редактирование 
exports.edit = edit;
var single = 0; // выбор одной организации (значение по умолчанию)
exports.single = single;
var multi = 2; // выбор нескольких организаций
exports.multi = multi;
var switchToEdit = 4; // возможен переход к редактированию

// Проверка доступности режима
exports.switchToEdit = switchToEdit;
var checkMode = function checkMode(value, mode) {
  return (value & mode) == mode;
};
exports.checkMode = checkMode;

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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(342);
__webpack_require__(343);
var _announcements = __webpack_require__(349);
var _editAnnouncement = __webpack_require__(350);
var _announcements2 = __webpack_require__(351);
var _repositories = __webpack_require__(40);
var _module = angular.module("irtech.netcity.em.announcements", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", 'ui.tinymce']);
_module.service("emAnnouncementsRepository", _announcements2.EmAnnouncementsRepository).service("referencesRepository", _repositories.ReferencesRepository).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/", _announcements.AnnouncementsComponent).when("/add", _editAnnouncement.EditAnnouncementComponent).when("/:announcementId/edit", _editAnnouncement.EditAnnouncementComponent).otherwise(_announcements.AnnouncementsComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
}).run(function () {
  tinymce.init({
    selector: 'textarea',
    language: 'ru'
  });
});

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.tinymce', []).value('uiTinymceConfig', {}).directive('uiTinymce', ['$rootScope', '$compile', '$timeout', '$window', '$sce', 'uiTinymceConfig', 'uiTinymceService', function ($rootScope, $compile, $timeout, $window, $sce, uiTinymceConfig, uiTinymceService) {
  uiTinymceConfig = uiTinymceConfig || {};
  if (uiTinymceConfig.baseUrl) {
    tinymce.baseURL = uiTinymceConfig.baseUrl;
  }
  return {
    require: ['ngModel', '^?form'],
    priority: 599,
    link: function link(scope, element, attrs, ctrls) {
      if (!$window.tinymce) {
        return;
      }
      var ngModel = ctrls[0],
        form = ctrls[1] || null;
      var expression,
        options = {
          debounce: true
        },
        tinyInstance,
        updateView = function updateView(editor) {
          var content = editor.getContent({
            format: options.format
          }).trim();
          content = $sce.trustAsHtml(content);
          ngModel.$setViewValue(content);
          if (!$rootScope.$$phase) {
            scope.$digest();
          }
        };
      function toggleDisable(disabled) {
        if (disabled) {
          ensureInstance();
          if (tinyInstance) {
            tinyInstance.getBody().setAttribute('contenteditable', false);
          }
        } else {
          ensureInstance();
          if (tinyInstance && !tinyInstance.settings.readonly && tinyInstance.getDoc()) {
            tinyInstance.getBody().setAttribute('contenteditable', true);
          }
        }
      }

      // fetch a unique ID from the service
      var uniqueId = uiTinymceService.getUniqueId();
      attrs.$set('id', uniqueId);
      expression = {};
      angular.extend(expression, scope.$eval(attrs.uiTinymce));

      //Debounce update and save action
      var debouncedUpdate = function (debouncedUpdateDelay) {
        var debouncedUpdateTimer;
        return function (ed) {
          $timeout.cancel(debouncedUpdateTimer);
          debouncedUpdateTimer = $timeout(function () {
            return function (ed) {
              if (ed.isDirty()) {
                ed.save();
                updateView(ed);
              }
            }(ed);
          }, debouncedUpdateDelay);
        };
      }(400);
      var setupOptions = {
        // Update model when calling setContent
        // (such as from the source editor popup)
        setup: function setup(ed) {
          ed.on('init', function () {
            ngModel.$render();
            ngModel.$setPristine();
            ngModel.$setUntouched();
            if (form) {
              form.$setPristine();
            }
          });

          // Update model when:
          // - a button has been clicked [ExecCommand]
          // - the editor content has been modified [change]
          // - the node has changed [NodeChange]
          // - an object has been resized (table, image) [ObjectResized]
          ed.on('ExecCommand change NodeChange ObjectResized', function () {
            if (!options.debounce) {
              ed.save();
              updateView(ed);
              return;
            }
            debouncedUpdate(ed);
          });
          ed.on('blur', function () {
            element[0].blur();
            ngModel.$setTouched();
            if (!$rootScope.$$phase) {
              scope.$digest();
            }
          });
          ed.on('remove', function () {
            element.remove();
          });
          if (uiTinymceConfig.setup) {
            uiTinymceConfig.setup(ed, {
              updateView: updateView
            });
          }
          if (expression.setup) {
            expression.setup(ed, {
              updateView: updateView
            });
          }
        },
        format: expression.format || 'html',
        selector: '#' + attrs.id
      };
      // extend options with initial uiTinymceConfig and
      // options from directive attribute value
      angular.extend(options, uiTinymceConfig, expression, setupOptions);
      // Wrapped in $timeout due to $tinymce:refresh implementation, requires
      // element to be present in DOM before instantiating editor when
      // re-rendering directive
      $timeout(function () {
        if (options.baseURL) {
          tinymce.baseURL = options.baseURL;
        }
        var maybeInitPromise = tinymce.init(options);
        if (maybeInitPromise && typeof maybeInitPromise.then === 'function') {
          maybeInitPromise.then(function () {
            toggleDisable(scope.$eval(attrs.ngDisabled));
          });
        } else {
          toggleDisable(scope.$eval(attrs.ngDisabled));
        }
      });
      ngModel.$formatters.unshift(function (modelValue) {
        return modelValue ? $sce.trustAsHtml(modelValue) : '';
      });
      ngModel.$parsers.unshift(function (viewValue) {
        return viewValue ? $sce.getTrustedHtml(viewValue) : '';
      });
      ngModel.$render = function () {
        ensureInstance();
        var viewValue = ngModel.$viewValue ? $sce.getTrustedHtml(ngModel.$viewValue) : '';

        // instance.getDoc() check is a guard against null value
        // when destruction & recreation of instances happen
        if (tinyInstance && tinyInstance.getDoc()) {
          tinyInstance.setContent(viewValue);
          // Triggering change event due to TinyMCE not firing event &
          // becoming out of sync for change callbacks
          tinyInstance.fire('change');
        }
      };
      attrs.$observe('disabled', toggleDisable);

      // This block is because of TinyMCE not playing well with removal and
      // recreation of instances, requiring instances to have different
      // selectors in order to render new instances properly
      var unbindEventListener = scope.$on('$tinymce:refresh', function (e, id) {
        var eid = attrs.id;
        if (angular.isUndefined(id) || id === eid) {
          var parentElement = element.parent();
          var clonedElement = element.clone();
          clonedElement.removeAttr('id');
          clonedElement.removeAttr('style');
          clonedElement.removeAttr('aria-hidden');
          tinymce.execCommand('mceRemoveEditor', false, eid);
          parentElement.append($compile(clonedElement)(scope));
          unbindEventListener();
        }
      });
      scope.$on('$destroy', function () {
        ensureInstance();
        if (tinyInstance) {
          tinyInstance.remove();
          tinyInstance = null;
        }
      });
      function ensureInstance() {
        if (!tinyInstance) {
          tinyInstance = tinymce.get(attrs.id);
        }
      }
    }
  };
}]).service('uiTinymceService', [
/**
 * A service is used to create unique ID's, this prevents duplicate ID's if there are multiple editors on screen.
 */
function () {
  var UITinymceService = function UITinymceService() {
    var ID_ATTR = 'ui-tinymce';
    // uniqueId keeps track of the latest assigned ID
    var uniqueId = 0;
    // getUniqueId returns a unique ID
    var getUniqueId = function getUniqueId() {
      uniqueId++;
      return ID_ATTR + '-' + uniqueId;
    };
    // return the function as a public method of the service
    return {
      getUniqueId: getUniqueId
    };
  };
  // return a new instance of the service
  return new UITinymceService();
}]);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _repositories = __webpack_require__(40);
var _selectOrgs = __webpack_require__(344);
var _selectOrgs2 = __webpack_require__(346);
var _selectedOrgs = __webpack_require__(348);
var _module = angular.module('irtech.netcity.ui-components');
_module.component(_selectOrgs2.SelectOrganizationsComponent.selector, _selectOrgs2.SelectOrganizationsComponent).component(_selectedOrgs.SelectedOrgsLevelViewComponent.selector, _selectedOrgs.SelectedOrgsLevelViewComponent).component(_selectedOrgs.SelectedOrgsViewComponent.selector, _selectedOrgs.SelectedOrgsViewComponent).service("educOrganizationsRepository", _repositories.EducOrganizationsRepository).service("addressRepository", _repositories.AddressRepository).service("selectOrgsService", _selectOrgs.SelectOrgsService);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsService = void 0;
var _selectOrgsModal = __webpack_require__(345);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectOrgsService = /*#__PURE__*/function () {
  SelectOrgsService.$inject = ["$uibModal", "$longWork", "educOrganizationsRepository"];
  /*@ngInject*/
  function SelectOrgsService($uibModal, $longWork, educOrganizationsRepository) {
    _classCallCheck(this, SelectOrgsService);
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.educOrganizationsRepository = educOrganizationsRepository;
  }
  _createClass(SelectOrgsService, [{
    key: "selectOrgs",
    value: function selectOrgs(model) {
      var _this = this;
      model.settings.multiMode = true;
      model.settings.readMode = false;
      model.settings.editMode = true;
      var filter = {
        funcType: model.functype
      };
      return this.loadOrganizations(filter).then(function (organizations) {
        _this.$longWork.close();
        return _this.openDialog(organizations, model);
      });
    }
  }, {
    key: "showOrgs",
    value: function showOrgs(model) {
      var _this2 = this;
      model.settings.multiMode = true;
      model.settings.readMode = true;
      model.settings.editMode = false;
      var filter = {
        id: model.selected
      };
      return this.loadOrganizations(filter).then(function (organizations) {
        _this2.$longWork.close();
        return _this2.openDialog(organizations, model);
      });
    }
    // Получение организаций и мест расположения
  }, {
    key: "loadOrganizations",
    value: function loadOrganizations(filter) {
      var _this3 = this;
      this.$longWork.show();
      return this.educOrganizationsRepository.getSchoolsAddressesInfo(filter).then(function (organizations) {
        _this3.$longWork.close();
        return organizations;
      });
    }
  }, {
    key: "openDialog",
    value: function openDialog(_organizations, _model) {
      var modalWindowModel = {
        templateUrl: _selectOrgsModal.SelectOrgsModalComponent.templateUrl,
        controller: _selectOrgsModal.SelectOrgsModalComponent.controller,
        controllerAs: _selectOrgsModal.SelectOrgsModalComponent.controllerAs,
        backdrop: "static",
        size: "lg",
        resolve: {
          model: function model() {
            return _model;
          },
          organizations: function organizations() {
            return _organizations;
          }
        }
      };
      var instance = this.$uibModal.open(modalWindowModel);
      return instance.result;
    }
  }]);
  return SelectOrgsService;
}();
exports.SelectOrgsService = SelectOrgsService;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsModalComponent = void 0;
var Modes = _interopRequireWildcard(__webpack_require__(294));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var buttonId = 0;
var Button = /*#__PURE__*/_createClass(function Button(text, action, cssClass, icon, disabled) {
  _classCallCheck(this, Button);
  this.text = text;
  this.action = action;
  this.cssClass = cssClass;
  this.icon = icon;
  this.disabled = disabled;
  this.id = buttonId++;
  this.cssClass = cssClass || 'btn-primary';
});
var SelectOrgsModalController = /*#__PURE__*/function () {
  SelectOrgsModalController.$inject = ["$scope", "$uibModalInstance", "organizations", "model", "language"];
  /*@ngInject*/
  function SelectOrgsModalController($scope, $uibModalInstance, organizations, model, language) {
    var _this = this;
    _classCallCheck(this, SelectOrgsModalController);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.organizations = organizations;
    this.model = model;
    this.language = language;
    this.defaultOkButton = function () {
      return _this.$uibModalInstance.close(_this.selected);
    };
    this.okButton = this.defaultOkButton;
    this.hasSelected = false;
    this.hasNotSelected = true;
    this.getButtons = function (mode) {
      var select = function select(status) {
        var tree = $("#tree");
        tree.dynatree("getTree").getRoot().visit(function (n) {
          return n.select(status);
        });
      };
      var buttons = [];
      if (_this.settings.canSwitchToEdit && !_this.settings.editMode) {
        var chooseButton = new Button(_this.language.Generic.Buttons.kChoose, function () {
          return _this.switchToEditMode();
        }, 'btn-default pull-left', 'glyphicon-pencil');
        buttons.push(chooseButton);
      }
      var closeBtn = new Button(_this.language.Generic.Buttons.kCancel, function () {
        return _this.close();
      }, 'btn-default', 'glyphicon-ban-circle');
      if (_this.settings.editMode) {
        var checkAllBtn = new Button(_this.language.Generic.Common.kCheckAll, function () {
          select(true);
          _this.checkButtons();
        }, 'btn-default  pull-left', 'glyphicon-ok', function () {
          _this.checkButtons();
          return _this.hasNotSelected;
        });
        var unCheckAllBtn = new Button(_this.language.Generic.Common.kUnCheckAll, function () {
          select(false);
          _this.checkButtons();
        }, 'btn-default  pull-left', 'glyphicon-remove', function () {
          _this.checkButtons();
          return _this.hasSelected;
        });
        var okBtn = new Button(_this.language.Generic.Common.kOk, function () {
          return _this.okButton();
        }, 'btn-primary', 'glyphicon-ok');
        buttons.push(checkAllBtn);
        buttons.push(unCheckAllBtn);
        buttons.push(okBtn);
        buttons.push(closeBtn);
      } else {
        closeBtn.text = _this.language.Generic.Buttons.kClose;
        buttons.push(closeBtn);
      }
      return buttons;
    };
    this.title = language.Generic.ServAdmin.kEOsBR;
    this.selected = {
      selectedIds: model.selected
    };
    this.settings = model.settings;
    this.buttons = this.getButtons(model.settings.mode);
  }
  _createClass(SelectOrgsModalController, [{
    key: "select",
    value: function select(selected) {
      // Сохраняем результат полученный из контроллера выбора организаций
      this.selected = selected;
    }
  }, {
    key: "switchToEditMode",
    value: function switchToEditMode() {
      var _this2 = this;
      this.settings.editMode = true;
      this.settings.readMode = false;
      this.settings.mode = this.settings.mode | Modes.edit;
      var updateMethod = this.settings.updateMethod;
      this.okButton = function () {
        updateMethod(_this2.selected);
        _this2.defaultOkButton();
      };
      this.buttons = this.getButtons(this.settings.mode);
      this.$scope.$applyAsync();
    }
  }, {
    key: "hasSelectedValue",
    value: function hasSelectedValue(value) {
      var result = false;
      var tree = $("#tree");
      if (tree && tree[0]) {
        tree.dynatree();
        tree.dynatree("getTree").getRoot().visit(function (n) {
          result = result || n.bSelected == value;
        });
      }
      return result;
    }
  }, {
    key: "checkButtons",
    value: function checkButtons() {
      this.hasSelected = !this.hasSelectedValue(true);
      this.hasNotSelected = !this.hasSelectedValue(false);
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss('cancel');
    }
  }]);
  return SelectOrgsModalController;
}();
var SelectOrgsModalComponent = {
  controller: SelectOrgsModalController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/common/selectOrgs/selectOrgs.modal.component.html"
};
exports.SelectOrgsModalComponent = SelectOrgsModalComponent;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrganizationsComponent = void 0;
var FuncTypes = _interopRequireWildcard(__webpack_require__(170));
var _organizationTreeLevels = __webpack_require__(347);
var Modes = _interopRequireWildcard(__webpack_require__(294));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var groupBy = function groupBy(elements, groupPropFunc) {
  var result = {};
  var group = function group(element) {
    var key = groupPropFunc(element);
    if (_typeof(key) === 'object') {
      key = JSON.stringify(key);
    }
    if (result[key]) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  };
  angular.forEach(elements, group);
  return result;
};
var copy = function copy(array) {
  var result = [];
  for (var i in array) {
    result.push(angular.extend({}, array[i]));
  }
  return result;
};
var isFirstInstance = function isFirstInstance(value, index, array) {
  return array.indexOf(value) === index;
};
var SelectOrganizationsController = /*#__PURE__*/function () {
  SelectOrganizationsController.$inject = ["$scope", "addressRepository", "referencesRepository", "language", "$timeout", "$q"];
  /*@ngInject*/
  function SelectOrganizationsController($scope, addressRepository, referencesRepository, language, $timeout, $q) {
    var _this = this;
    _classCallCheck(this, SelectOrganizationsController);
    this.$scope = $scope;
    this.addressRepository = addressRepository;
    this.referencesRepository = referencesRepository;
    this.language = language;
    this.$timeout = $timeout;
    this.$q = $q;
    this["default"] = [];
    this.filter = "";
    this.funcType = "";
    this.hasSelected = false;
    this.readMode = true;
    this.$scope.$watch(function () {
      return _this.filter;
    }, function () {
      return _this.updateOrganizations();
    });
    this.$scope.$watch(function () {
      return _this["default"];
    }, function () {
      return _this.updateOrganizations();
    });
    this.$scope.$watch(function () {
      return _this.settings.needUpdate;
    }, function (newVal) {
      if (newVal) {
        _this.settings.needUpdate = false;
        _this.$timeout(function () {
          try {
            _this.reloadTree();
          } finally {
            _this.settings.needUpdate = false;
          }
        }, 100);
      }
    });
    referencesRepository.getFuncTypes().then(function (funcTypes) {
      return _this.funcTypes = funcTypes;
    });
  }
  _createClass(SelectOrganizationsController, [{
    key: "updateOrganizations",
    value: function updateOrganizations() {
      this.organizations = this.checkChildrens(angular.copy(this["default"]));
    }
  }, {
    key: "filterOrgs",
    value: function filterOrgs() {
      var _this2 = this;
      var filterFunc;
      var filterFuncType = function filterFuncType(o) {
        return !_this2.funcTypeFilter || o.funcType == _this2.funcTypeFilter.id;
      };
      if (this.settings.filterFunc) {
        filterFunc = function filterFunc(o) {
          return _this2.settings.filterFunc(o) && filterFuncType(o);
        };
      } else {
        filterFunc = function filterFunc(o) {
          return filterFuncType(o);
        };
      }
      this.filteredOrganizationsWithInfo = this.organizationsWithInfo.filter(filterFunc);
    }
  }, {
    key: "getSelectedBranches",
    value: function getSelectedBranches(selectedNodes) {
      var result = [];
      var selectedIds = selectedNodes.map(function (o) {
        return o.id;
      });
      var checkNode = function checkNode(node) {
        // Проверяем выбран ли листок
        if (!node.children) {
          return selectedIds.indexOf(node.id) != -1;
        }
        if (_.all(node.children, checkNode)) {
          result.push(node);
          return true;
        }
        return false;
      };
      this["default"].map(checkNode);
      return result;
    }
  }, {
    key: "reloadTree",
    value: function reloadTree() {
      var treeInfo = this.getTree();
      this["default"] = copy(treeInfo);
      var tree = $("#tree");
      // сбрасывает все выбранные
      tree.dynatree("getRoot").visit(function (node) {
        return node.select(false);
      });
      // перезагружает дерево
      tree.dynatree(this["default"]);
      tree.dynatree("getTree").reload();
      // выбранные элементы синхронизируются с данными сервиса
      var selected = tree.dynatree("getSelectedNodes").map(function (x) {
        return x.data;
      });
      this.onUpdate({
        selected: selected
      });
    }
    // Функция передачи выбранных на уровень выше
  }, {
    key: "internalOnUpdate",
    value: function internalOnUpdate(selected) {
      // Подготовить информацию о полностью выбранных ветках
      var prepareBranch = function prepareBranch(branch) {
        var branchElement = branch.own[0];
        var result = {};
        if (branch.level <= _organizationTreeLevels.Levels.functype) result[_organizationTreeLevels.LevelType.functype] = {
          id: branchElement.funcTypeLevel.id,
          name: branchElement.funcTypeLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.city) result[_organizationTreeLevels.LevelType.city] = {
          id: branchElement.cityLevel.id,
          name: branchElement.cityLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.province && branchElement.provinceLevel) result[_organizationTreeLevels.LevelType.province] = {
          id: branchElement.provinceLevel.id,
          name: branchElement.provinceLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.municipalityDistrict) result[_organizationTreeLevels.LevelType.municipalityDistrict] = {
          id: branchElement.munDistrictLevel.id,
          name: branchElement.munDistrictLevel.name
        };
        return result;
      };
      var result = {
        selectedIds: selected.nodes.map(function (node) {
          return node.id;
        }),
        selectedOrgs: selected.nodes.map(function (node) {
          return node.own[0];
        }),
        selectedLevels: this.getSelectedBranches(selected.nodes).map(prepareBranch)
      };
      this.hasSelected = result.selectedIds.length > 0;
      // Передать результат верхнему контроллеру
      this.onUpdate({
        selected: result
      });
    }
    // Настройки
  }, {
    key: "getCompareFunction",
    value: function getCompareFunction() {
      var order = this.settings.order;
      // Если сортировка не указана, то неменяем порядок
      if (!order) return function () {
        return 0;
      };
      switch (_typeof(order)) {
        // Если задана сортировка, то исползуем её
        case 'function':
          return order;
        // Если указан уровень который должен быть вверху, то формируем функцию
        case 'number':
          return function (a, b) {
            if (a == b) return 0;
            if (a == order) return -1;
            if (b == order) {
              return 1;
            }
            return 0;
          };
        // По умолчанию не меняем порядок
        default:
          return function () {
            return 0;
          };
      }
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this3 = this;
      this.readMode = !this.settings.editMode && this.settings.readMode;
      this.hasSelected = this.selected.selectedIds.length > 0;
      this.schoolsIds = this.selected.selectedIds.filter(function (o) {
        return !!o;
      });
      var idFilter = function idFilter(o) {
        return true;
      };
      var editMode = this.settings.editMode;
      if (!editMode) {
        //загружаем информацию только по выбранным организациям
        idFilter = function idFilter(o) {
          return _this3.schoolsIds.indexOf(o.id) > -1;
        };
      }
      this.treeSettings = {
        mode: (this.settings.multiMode ? Modes.multi : Modes.single) | (this.settings.editMode ? Modes.edit : Modes.read),
        selected: null
      };
      var group = function group(elements) {
        var result = {};
        var group = function group(element) {
          var key = element.id;
          result[key] = {
            id: element.id,
            name: element.name,
            typeName: element === null || element === void 0 ? void 0 : element.atoTypeName
          };
        };
        angular.forEach(elements, group);
        return result;
      };
      var filteredOrgs = this.inputOrganizations.filter(idFilter);
      var provincesIds = filteredOrgs.map(function (o) {
        return o.provinceId;
      }).filter(isFirstInstance).filter(function (o) {
        return o;
      });
      var provinces;
      var provincePromise;
      if (provincesIds.length) {
        provincePromise = this.addressRepository.getProvinces(provincesIds).then(function (result) {
          return provinces = group(result);
        });
      } else {
        provincePromise = Promise.resolve({});
      }
      var districtsIds = filteredOrgs.map(function (o) {
        return o.municipalityDistrictId;
      }).filter(isFirstInstance).filter(function (o) {
        return o;
      });
      var districts;
      var districtPromise;
      if (districtsIds.length) {
        districtPromise = this.addressRepository.getCityDistricts(-1).then(function (result) {
          return districts = group(result);
        });
      } else {
        districtPromise = Promise.resolve({});
      }
      var citiesIds = filteredOrgs.map(function (o) {
        return o.cityId;
      }).filter(isFirstInstance);
      var parentsCitiesId = filteredOrgs.map(function (o) {
        return o.parentCityId;
      }).filter(isFirstInstance);
      var allCitiesIds = [].concat(_toConsumableArray(citiesIds), _toConsumableArray(parentsCitiesId));
      var cities;
      var cityPromise;
      if (allCitiesIds.length) {
        cityPromise = this.addressRepository.getCities(allCitiesIds).then(function (result) {
          return cities = group(result);
        });
      } else {
        cityPromise = Promise.resolve({});
      }
      var funcTypesPromise = this.referencesRepository.getFuncTypes().then(function (funcTypes) {
        var _a;
        _this3.funcTypes = funcTypes;
        if ((_a = _this3.settings.enabledFuncTypes) === null || _a === void 0 ? void 0 : _a.length) {
          _this3.funcTypes = _this3.funcTypes.filter(function (x) {
            return _this3.settings.enabledFuncTypes.some(function (y) {
              return y == x.id;
            });
          });
        }
      });
      this.$q.all([provincePromise, cityPromise, districtPromise, funcTypesPromise]).then(function () {
        return {
          provinces: provinces,
          cities: cities,
          districts: districts,
          filteredOrgs: filteredOrgs
        };
      })
      // Дополнение информацией о ветках
      .then(function (data) {
        _this3.organizationsWithInfo = data.filteredOrgs;
        var cities = data.cities;
        var provinces = data.provinces;
        // Дополняем модель названиями
        angular.forEach(_this3.organizationsWithInfo, function (organization) {
          var orgLevelInfo = organization;
          try {
            orgLevelInfo.funcTypeLevel = {
              id: organization.funcType,
              name: "".concat(_this3.language.Generic.Common.kEOType, " ").concat(FuncTypes.locale[organization.funcType]),
              type: _organizationTreeLevels.LevelType.functype
            };
            orgLevelInfo.cityLevel = {
              id: organization.cityId,
              name: "".concat(cities[organization.cityId].typeName || _this3.language.Generic.Common.kCity, " ").concat(cities[organization.cityId].name),
              type: _organizationTreeLevels.LevelType.city
            };
            orgLevelInfo.cityDistrictLevel = {
              id: organization.cityDistrictId,
              name: organization.cityDistrictId ? "".concat(districts[organization.cityDistrictId].typeName || _this3.language.Generic.Common.kDistrict, " ").concat(districts[organization.cityDistrictId].name) : "",
              type: _organizationTreeLevels.LevelType.cityDistrict
            };
            if (organization.provinceId && organization.parentCityId) {
              console.error('conflict: province - parent city', organization);
            }
            orgLevelInfo.munDistrictLevel = {
              id: organization.municipalityDistrictId,
              name: "",
              type: _organizationTreeLevels.LevelType.municipalityDistrict
            };
            if (organization.provinceId) {
              orgLevelInfo.provinceLevel = {
                id: organization.provinceId,
                name: "".concat(_this3.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name),
                type: _organizationTreeLevels.LevelType.province
              };
              orgLevelInfo.munDistrictLevel.name = "".concat(_this3.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name);
            } else {
              var municipalityCity = cities[organization.parentCityId || organization.cityId];
              // orgLevelInfo.provinceLevel = {
              // 	id: -municipalityCity.id, // Городской округ
              // 	name: `${this.language.Generic.Common.kCityMunicipalityDistrict} ${municipalityCity.name}`,
              // 	type: LevelType.city
              // };
              // Если можно в одиной ветке совместить тип образовательной организации и населённый пункт, то раскоментировать
              //organization.cityLevel = null;
              orgLevelInfo.munDistrictLevel.name = "".concat(_this3.language.Generic.Common.kCityMunicipalityDistrict, " ").concat(municipalityCity.name);
            }
            orgLevelInfo.type = _organizationTreeLevels.LevelType.educOrganization;
          } catch (ex) {
            console.error(ex.name + ": " + ex.message);
          } finally {}
        });
        return _this3.getTree();
      })
      // Инициазлизация дерева
      .then(function (organizationsTree) {
        _this3["default"] = copy(organizationsTree);
      });
    }
  }, {
    key: "getTree",
    value: function getTree() {
      var _a;
      var compareFunction = this.getCompareFunction();
      var orderFunction = function orderFunction(a, b) {
        return compareFunction(a.level, b.level);
      };
      var treePropGetters = [];
      if ((_a = this.settings.propGetters) === null || _a === void 0 ? void 0 : _a.length) {
        treePropGetters = _toConsumableArray(this.settings.propGetters);
      } else {
        treePropGetters = [
        // сортировка дерева
        //prop -- получение информации о ветке
        //level -- уровень
        {
          prop: function prop(o) {
            return o.munDistrictLevel;
          },
          level: _organizationTreeLevels.Levels.municipalityDistrict,
          expand: true
        }, {
          prop: function prop(o) {
            return o.cityLevel;
          },
          level: _organizationTreeLevels.Levels.city,
          expand: true
        }, {
          prop: function prop(o) {
            return o.funcTypeLevel;
          },
          level: _organizationTreeLevels.Levels.functype,
          expand: false
        }, {
          prop: function prop(o) {
            return o.name;
          },
          level: _organizationTreeLevels.Levels.educOrganization
        }];
      }
      // Глубина раскрытия списка организаций
      // const maxExpandDepth = 3;
      // for (let index in treePropGetters) {
      // 	let getterObject: PropGetter = treePropGetters[index];
      // 	if (getterObject) {
      // 		getterObject.expand = parseInt(index) < maxExpandDepth
      // 	}
      // }
      // Преобразование в дерево
      this.filterOrgs();
      var organizationsList = this.mapBranch(this.filteredOrganizationsWithInfo, treePropGetters.sort(function (a, b) {
        return a.level - b.level;
      }));
      return organizationsList;
    }
    // Преобразование линейного массива в ветку
  }, {
    key: "mapBranch",
    value: function mapBranch(data, branchFuncs) {
      var _this4 = this;
      var tuple = branchFuncs.pop();
      if (!tuple) {
        return [];
      }
      var func = tuple.prop;
      //console.log("mapbranch", tuple.level);
      var getSubTree = function getSubTree(treeItem, elements) {
        var _copyBranchFuncs;
        var copyBranchFuncs = [];
        (_copyBranchFuncs = copyBranchFuncs).push.apply(_copyBranchFuncs, _toConsumableArray(branchFuncs));
        if (_this4.funcTypeFilter && copyBranchFuncs.find(function (x) {
          return x.level == _organizationTreeLevels.Levels.functype;
        })) {
          // убираем из дерева уровень "Тип ОО" при выбранном фильтре
          copyBranchFuncs = copyBranchFuncs.filter(function (x) {
            return x.level != _organizationTreeLevels.Levels.functype;
          });
        }
        if (tuple.level == _organizationTreeLevels.Levels.municipalityDistrict && treeItem.id > 0) {
          //для муниципальных районов убираем из дерева уровень "населенный пункт"
          var removedLevel = copyBranchFuncs.pop();
          elements.forEach(function (o) {
            var cityLevelInfo = removedLevel.prop(o);
            o.name = o.name + " (" + cityLevelInfo.name + ")";
          });
        }
        return _this4.mapBranch(elements, copyBranchFuncs.sort(function (a, b) {
          return a.level - b.level;
        }));
      };
      var getBranch = function getBranch(elements, keyString) {
        var isOrganization = tuple.level === _organizationTreeLevels.Levels.educOrganization;
        var key = isOrganization ? elements[0] : keyString == "undefined" ? {
          id: "-1",
          name: "",
          type: ""
        } : JSON.parse(keyString);
        var isHideTreeNodeCheckBox = false;
        var name = key.name;
        var tooltip = "";
        if (isOrganization) {
          isHideTreeNodeCheckBox = _this4.settings.renderService ? _this4.settings.renderService.isHideTreeNodeCheckbox(key.id) : false;
          name = _this4.settings.renderService ? _this4.settings.renderService.getTreeNodeName(key.id, key.name) : key.name;
          tooltip = _this4.settings.renderService ? _this4.settings.renderService.getTreeNodeTooltip(key.id) : "";
        }
        ;
        var result = {
          id: key.id,
          title: name,
          isFolder: !!branchFuncs.length,
          level: tuple.level,
          expand: tuple.expand,
          own: elements,
          key: "".concat(tuple.level, "-").concat(key.type, "-").concat(key.id),
          select: false,
          hideCheckbox: isHideTreeNodeCheckBox,
          unselectable: isHideTreeNodeCheckBox,
          tooltip: tooltip
        };
        if (result.isFolder) {
          result.children = getSubTree(result, elements);
        } else {
          result.select = _this4.schoolsIds.indexOf(result.id) >= 0;
        }
        return result;
      };
      var getBranchs = function getBranchs(group) {
        var result = [];
        for (var key in group) {
          var organizations = group[key];
          var _branch = getBranch(organizations, key);
          result.push(_branch);
        }
        return result;
      };
      var group = groupBy(data, func);
      var mainGroup = {};
      var nullGroup;
      for (var key in group) {
        if (key == 'null') {
          nullGroup = group[key];
        } else {
          mainGroup[key] = group[key];
          ;
        }
      }
      var branch;
      if (nullGroup) {
        branch = [].concat(_toConsumableArray(getBranchs(mainGroup)), _toConsumableArray(getSubTree(null, nullGroup)));
      } else {
        branch = getBranchs(mainGroup);
      }
      //console.log("mapbranch result", tuple.level, branch);
      return branch;
    }
    // Фильтрация
  }, {
    key: "filterFunc",
    value: function filterFunc(value, filterValues) {
      var result = true;
      filterValues.forEach(function (filter) {
        return result = result && value.indexOf(filter) >= 0;
      });
      return result;
    }
  }, {
    key: "checkChildren",
    value: function checkChildren(value) {
      if (!value) {
        return false;
      }
      if (value.isFolder) {
        value.children = this.checkChildrens(value.children);
        return value.children.length > 0;
      }
      return this.filterFunc(value.title.toLowerCase(), this.filter.toLowerCase().split(' ')); // !(value.title.indexOf($scope.filter) < 0)
    }
  }, {
    key: "checkChildrens",
    value: function checkChildrens(branch) {
      var _this5 = this;
      if (!this.filter) return branch;
      return branch.filter(function (b) {
        return _this5.checkChildren(b);
      });
    }
  }]);
  return SelectOrganizationsController;
}();
var SelectOrganizationsComponent = {
  selector: "selectOrganizations",
  templateUrl: '/static/dist/app/em/common/selectOrgs/selectOrgs.component.html',
  controller: SelectOrganizationsController,
  bindings: {
    selected: '=?',
    inputOrganizations: "=organizations",
    settings: '=',
    onUpdate: '&'
  }
};
exports.SelectOrganizationsComponent = SelectOrganizationsComponent;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.province = exports.municipalityDistrict = exports.functype = exports.educOrganization = exports.cityDistrict = exports.city = exports.Levels = exports.LevelType = void 0;
var educOrganization = 1;
exports.educOrganization = educOrganization;
var functype = 2;
exports.functype = functype;
var city = 4;
exports.city = city;
var province = 8;
exports.province = province;
var municipalityDistrict = 16;
exports.municipalityDistrict = municipalityDistrict;
var cityDistrict = 32;
exports.cityDistrict = cityDistrict;
var Levels;
exports.Levels = Levels;
(function (Levels) {
  Levels[Levels["educOrganization"] = 1] = "educOrganization";
  Levels[Levels["functype"] = 2] = "functype";
  Levels[Levels["city"] = 4] = "city";
  Levels[Levels["province"] = 8] = "province";
  Levels[Levels["municipalityDistrict"] = 16] = "municipalityDistrict";
  Levels[Levels["cityDistrict"] = 32] = "cityDistrict";
})(Levels || (exports.Levels = Levels = {}));
var LevelType;
exports.LevelType = LevelType;
(function (LevelType) {
  LevelType["educOrganization"] = "organization";
  LevelType["functype"] = "funcType";
  LevelType["city"] = "city";
  LevelType["municipalityDistrict"] = "municipalityDistrict";
  LevelType["province"] = "province";
  LevelType["cityDistrict"] = "cityDistrict";
})(LevelType || (exports.LevelType = LevelType = {}));

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedOrgsViewComponent = exports.SelectedOrgsLevelViewComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectedOrganizationsViewController = /*#__PURE__*/function () {
  SelectedOrganizationsViewController.$inject = ["language", "$scope", "$attrs"];
  /*@ngInject*/
  function SelectedOrganizationsViewController(language, $scope, $attrs) {
    _classCallCheck(this, SelectedOrganizationsViewController);
    this.language = language;
    this.$scope = $scope;
    this.$attrs = $attrs;
    this.showAll = false;
    this.isRequired = !!$attrs.$attr.required;
  }
  _createClass(SelectedOrganizationsViewController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.$scope.$watch(function () {
        return _this.selected;
      }, function () {
        return _this.initModel();
      });
    }
  }, {
    key: "initModel",
    value: function initModel() {
      if (!this.selected || !this.selected.selectedIds) {
        return;
      }
      this.groups = [{
        name: "".concat(this.language.Generic.EMReports.kTotal, " ").concat(this.language.Generic.Calendar.kSelected.toLowerCase(), " ").concat(this.selected.selectedIds.length),
        schoolsIds: this.selected.selectedIds,
        level: null
      }];
      this.filtredGroups = this.groups;
      this.$scope.$applyAsync();
      // let getName = (object) => !!object ? object.name : "";
      // for (let index in $scope.model.selectedLevels) {
      // 	let level = $scope.model.selectedLevels[index];
      // 	let schoolsIds = $scope.model.selectedOrgs
      // 		.filter(school => !level.municipalityDistrict || (school.cityLevel.id == Math.abs(level.municipalityDistrict.id) || school.provinceLevel.id == level.municipalityDistrict.id))
      // 		.filter(school => !level.city || school.cityLevel.id == level.city.id)
      // 		.filter(school => !level.funcType || school.funcTypeLevel.id == level.funcType.id)
      // 		.map(school => school.id);
      // 	// Заглушка плавающей ошибки выделения элементов дерева
      // 	if (schoolsIds.length === 0) continue;
      // 	let trimer = /^[,\s]*(.*?)[,\s]*$/; //срезать пробелы и ',' в начале и конце строки
      // 	let levelName = trimer.exec(`${getName(level.municipalityDistrict)}, ${getName(level.city)}, ${getName(level.funcType)}`)[1];
      // 	let selectedOrgsCount = `${language.Generic.Calendar.kSelected.toLowerCase()} ${schoolsIds.length}`;
      // 	let result = {
      // 		name: `${levelName} ${selectedOrgsCount}`,
      // 		level: level,
      // 		schoolsIds: schoolsIds,
      // 		updateMethod: $ctrl.model.updateMethod,
      // 		editModel: $ctrl.model.editModel
      // 	}
      // 	$scope.groups.push(result);
      // }
    }
  }, {
    key: "chunkShow",
    value: function chunkShow(count) {
      return !this.showAll && count ? function (element, index) {
        return count > index;
      } : function () {
        return true;
      };
    }
  }, {
    key: "showAllClick",
    value: function showAllClick() {
      this.showAll = !this.showAll;
    }
  }, {
    key: "filterGroups",
    value: function filterGroups(element, index, allElements) {
      var elements = allElements.filter(function (o) {
        return o.schoolsIds.length == element.schoolsIds.length;
      });
      var singleCompareA = function singleCompareA(levelA, levelB, method) {
        var a = method(levelA);
        var b = method(levelB);
        if (!a && b) return false;
        return true;
      };
      var compareA = function compareA(levelA, levelB, methods) {
        for (var _index in methods) {
          if (!singleCompareA(levelA, levelB, methods[_index])) return false;
        }
        return true;
      };
      var level = element.level;
      for (var _index2 in elements) {
        var currentLevel = elements[_index2].level;
        if (currentLevel == null) continue;
        if (level == null) return false;
        if (!compareA(level, currentLevel, [function (o) {
          return o.municipalityDistrict;
        }, function (o) {
          return o.city;
        }, function (o) {
          return o.funcType;
        }])) {
          return false;
        }
      }
      return true;
    }
  }]);
  return SelectedOrganizationsViewController;
}();
var SelectedOrgsViewComponent = {
  selector: "selectedOrganizationsView",
  templateUrl: '/static/dist/app/em/common/selectOrgs/selectedOrgs.component.html',
  controller: SelectedOrganizationsViewController,
  controllerAs: "$ctrl",
  bindings: {
    selected: '=',
    settings: "<"
  }
};
exports.SelectedOrgsViewComponent = SelectedOrgsViewComponent;
var SelectedOrgsLevelController = /*#__PURE__*/function () {
  SelectedOrgsLevelController.$inject = ["language", "selectOrgsService"];
  /*@ngInject*/
  function SelectedOrgsLevelController(language, selectOrgsService) {
    _classCallCheck(this, SelectedOrgsLevelController);
    this.language = language;
    this.selectOrgsService = selectOrgsService;
  }
  _createClass(SelectedOrgsLevelController, [{
    key: "click",
    value: function click() {
      var model = {
        selected: this.model.schoolsIds,
        settings: this.settings
      };
      model.settings.readMode = true;
      model.settings.editMode = false;
      this.selectOrgsService.showOrgs(model);
    }
  }]);
  return SelectedOrgsLevelController;
}();
var SelectedOrgsLevelViewComponent = {
  selector: "selectedOrganizationsViewRow",
  template: "\n\t\t<div ng-click=\"$ctrl.click()\" >\n\t\t\t<a title=\"{{$ctrl.language.Generic.Buttons.kView}}\" href=\"javascript:void(0)\"> \n\t\t\t\t<span class=\"glyphicon glyphicon-eye-open\"></span>\n\t\t\t\t<span>{{$ctrl.model.name}}</span>\n\t\t\t</a>\n\t\t\t&nbsp;\n\t\t\t<!--<a><span class=\"glyphicon glyphicon-pencil\" ng-click=\"$ctrl.click('edit')\" title=\"{{$ctrl.language.Generic.Buttons.kEdit}}\"></span></a>-->\n\t\t\t\n\t\t</div>\n\t",
  controller: SelectedOrgsLevelController,
  controllerAs: "$ctrl",
  bindings: {
    model: "<",
    settings: "<"
  }
};
exports.SelectedOrgsLevelViewComponent = SelectedOrgsLevelViewComponent;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnouncementsComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(61));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AnnouncementsCtrl = /*#__PURE__*/function () {
  AnnouncementsCtrl.$inject = ["pageContext", "$location", "$appLoader", "$dialogs", "$alerts", "$longWork", "language", "emAnnouncementsRepository", "selectOrgsService"];
  /*@ngInject*/
  function AnnouncementsCtrl(pageContext, $location, $appLoader, $dialogs, $alerts, $longWork, language, emAnnouncementsRepository, selectOrgsService) {
    _classCallCheck(this, AnnouncementsCtrl);
    this.pageContext = pageContext;
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.language = language;
    this.emAnnouncementsRepository = emAnnouncementsRepository;
    this.selectOrgsService = selectOrgsService;
    this.selection = new _selectable["default"]();
    pageContext.parent = null;
    pageContext.title = this.language.Generic.Announcement.kTitleViewAnn;
    this.load();
  }
  _createClass(AnnouncementsCtrl, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.emAnnouncementsRepository.getAll().then(function (announcements) {
        announcements = announcements.sort(new AnnouncementComparer().compare);
        _this.$longWork.close();
        _this.$appLoader.hide();
        _this.announcements = announcements;
      });
    }
  }, {
    key: "add",
    value: function add() {
      this.$location.path("/add");
    }
  }, {
    key: "edit",
    value: function edit(announce) {
      this.$location.path("/".concat(announce.id, "/edit"));
    }
  }, {
    key: "showOrgs",
    value: function showOrgs(announcementId) {
      var _this2 = this;
      this.emAnnouncementsRepository.getSchoolsIds(announcementId).then(function (schoolsIds) {
        var model = {
          selected: schoolsIds,
          settings: {
            multiMode: true,
            readMode: true,
            updateMethod: null
          }
        };
        _this2.selectOrgsService.showOrgs(model);
      });
    }
  }, {
    key: "delete",
    value: function _delete(announce) {
      var _this3 = this;
      this.$dialogs.confirmDelete(this.language.Generic.Announcement.kAreYouReallySureToDelete).then(function () {
        _this3.$longWork.show();
        _this3.emAnnouncementsRepository["delete"](announce.id).then(function () {
          _this3.$alerts.success(_this3.language.Generic.Announcement.kAttention1);
          _this3.selection.dropSelect();
          _this3.load();
        });
      });
    }
  }]);
  return AnnouncementsCtrl;
}();
var AnnouncementComparer = /*#__PURE__*/function () {
  function AnnouncementComparer() {
    _classCallCheck(this, AnnouncementComparer);
  }
  _createClass(AnnouncementComparer, [{
    key: "compare",
    value: function compare(ann1, ann2) {
      //сортирую объявления по дате публикации
      if (ann1.postDate > ann2.postDate) {
        return -1;
      } else if (ann1.postDate < ann2.postDate) {
        return 1;
      } else {
        return 0;
      }
    }
  }]);
  return AnnouncementComparer;
}();
var AnnouncementsComponent = {
  controller: AnnouncementsCtrl,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/em/announcements/index/announcements.component.html"
};
exports.AnnouncementsComponent = AnnouncementsComponent;

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAnnouncementCtrl = exports.EditAnnouncementComponent = void 0;
var _common = __webpack_require__(105);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditAnnouncementCtrl = /*#__PURE__*/function () {
  EditAnnouncementCtrl.$inject = ["$scope", "pageContext", "$q", "appContext", "$location", "dateUtils", "$appLoader", "breadcrumbRouting", "emAnnouncementsRepository", "$longWork", "$routeParams", "changeTracker", "$alerts", "$dialogs", "selectOrgsService", "language"];
  /*@ngInject*/
  function EditAnnouncementCtrl($scope, pageContext, $q, appContext, $location, dateUtils, $appLoader, breadcrumbRouting, emAnnouncementsRepository, $longWork, $routeParams, changeTracker, $alerts, $dialogs, selectOrgsService, language) {
    var _this = this;
    _classCallCheck(this, EditAnnouncementCtrl);
    this.appContext = appContext;
    this.$location = $location;
    this.dateUtils = dateUtils;
    this.$appLoader = $appLoader;
    this.breadcrumbRouting = breadcrumbRouting;
    this.emAnnouncementsRepository = emAnnouncementsRepository;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.selectOrgsService = selectOrgsService;
    this.language = language;
    this.descriptionMaxSize = 2000;
    this.tinymceOptions = {
      menubar: false,
      height: 300,
      paste_as_text: true,
      plugins: 'link image lists table colorpicker textcolor paste',
      toolbar: 'undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link image',
      init_instance_callback: function init_instance_callback(editor) {
        editor.on('Change', function (e) {
          this.changeTracker.dataWasChanged();
        });
      }
    };
    this.selectAll = true;
    var announcementId = parseInt($routeParams.announcementId) || 0;
    this.state = {
      dataReady: false,
      createMode: !announcementId
    };
    pageContext.title = this.state.createMode ? this.language.Generic.Announcement.kTitleAnnounce : this.language.Generic.Announcement.kEditingAnnouncements;
    pageContext.parent = {
      title: this.language.Generic.Announcement.kTitleViewAnn,
      href: "/"
    };
    var today = new Date();
    //let nextDay = today.addDays(1);
    this.limits = {
      deleteDate: {
        min: today,
        max: today.addYears(1)
      }
    };
    var data = {
      announcementId: announcementId,
      announcement: null,
      recipientGroups: []
    };
    this.descriptionMaxSize = 2000;
    this.data = data;
    var currentSizeMessage = function currentSizeMessage() {
      var currentSize = _this.data.announcement && _this.data.announcement.description && _this.data.announcement.description.length || 0;
      _this.currentSizeMessage = _this.language.Generic.Announcement.kAnnouncementCurrentLengthMessage.replace("{0}", currentSize);
    };
    $scope.$watch(function () {
      return _this.data.announcement && _this.data.announcement.description;
    }, currentSizeMessage);
    this.tinymceOptions = {
      menubar: false,
      height: 300,
      paste_as_text: true,
      plugins: 'link image lists table colorpicker textcolor paste',
      toolbar: 'undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link image',
      init_instance_callback: function init_instance_callback(editor) {
        editor.on('Change', function (e) {
          changeTracker.dataWasChanged();
        });
      }
    };
    setTimeout(function () {
      dateInput.initDateInputs(new Date().addDays(1), new Date().addYears(1));
    }, 200);
    var promises = [];
    var refsReady = this.emAnnouncementsRepository.getSchoolRoles(this.appContext.userLanguage).then(function (roles) {
      new RolesManager().beautify(roles);
      _this.data.recipientGroups = roles;
    });
    promises.push(refsReady);
    promises.push(this.initAnnounce(refsReady));
    $q.all(promises).then(function () {
      _this.initFileAttachments();
      _this.state.dataReady = true;
      _this.$appLoader.hide();
    });
    this.settings = {
      updateMethod: this.selectSchools.bind(this),
      enabledFuncTypes: [_common.FuncType.preSchool, _common.FuncType.school, _common.FuncType.addSchool]
    };
  }
  _createClass(EditAnnouncementCtrl, [{
    key: "initFileAttachments",
    value: function initFileAttachments() {
      var files = this.data.announcement.attachments || [];
      this.fa = {
        options: {
          multiple: true,
          showDescription: true
        },
        data: {
          files: files,
          context: {
            announcementId: this.data.announcementId
          }
        }
      };
    }
  }, {
    key: "initAnnounce",
    value: function initAnnounce(refsReady) {
      var _this2 = this;
      if (this.data.announcementId) {
        var announceLoad = this.emAnnouncementsRepository.getEdit(this.data.announcementId).then(function (announcement) {
          _this2.data.announcement = announcement;
          if (announcement.recipientGroup.length === 1 && announcement.recipientGroup[0] === 0) {
            refsReady.then(function () {
              announcement.recipientGroup = _this2.data.recipientGroups.map(function (g) {
                return g.id;
              });
            });
          }
          _this2.selected = {
            selectedIds: announcement.schoolIds
          };
          return _this2.data.announcement;
        })["catch"](function () {
          return _this2.breadcrumbRouting.back();
        });
        return announceLoad;
      } else {
        this.data.announcement = {
          deleteDate: new Date().addDays(10),
          recipientGroup: [],
          title: "",
          description: ""
        };
        this.selected = {
          selectedIds: []
        };
        return Promise.resolve(this.data.announcement);
      }
    }
  }, {
    key: "toggleRecipientGroup",
    value: function toggleRecipientGroup(groupId) {
      if (groupId === -1) {
        if (this.data.announcement.recipientGroup.length === this.data.recipientGroups.length) {
          this.data.announcement.recipientGroup = [];
        } else {
          this.data.announcement.recipientGroup = this.data.recipientGroups.map(function (x) {
            return x.id;
          });
        }
      } else {
        var idx = this.data.announcement.recipientGroup.indexOf(groupId);
        if (idx > -1) {
          this.data.announcement.recipientGroup.splice(idx, 1);
        } else {
          this.data.announcement.recipientGroup.push(groupId);
        }
      }
    }
    //обработчик события выбора организаций
  }, {
    key: "selectSchools",
    value: function selectSchools(selected) {
      var newModel = Object.assign({}, this.selected, selected);
      this.selected = newModel;
      this.changeTracker.dataWasChanged();
    }
    //открытие диалога выбора организаций
  }, {
    key: "openChooseDialogForSchools",
    value: function openChooseDialogForSchools() {
      var model = {
        selected: this.selected.selectedIds,
        settings: this.settings
      };
      model.settings.editMode = true;
      this.selectOrgsService.selectOrgs(model).then(this.selectSchools.bind(this));
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;
      this.initAnnounce(Promise.resolve()).then(function () {
        _this3.initFileAttachments();
      });
    }
  }, {
    key: "deleteDatePaste",
    value: function deleteDatePaste() {}
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      this.announceForm.$displayErrors = true;
      if (!this.announceForm.$valid) {
        return;
      }
      if (this.data.announcement.recipientGroup.length === 0) {
        this.$dialogs.message(this.language.Generic.Announcement.kSelectRecipient);
        return;
      }
      if (!this.selected.selectedIds || this.selected.selectedIds.length === 0) {
        this.$dialogs.message(this.language.Generic.Announcement.kSelectEducOrganizations);
        return;
      }
      if (!this.data.announcement.deleteDate) {
        this.$dialogs.error(this.language.Generic.Announcement.kErrorBadDeletingDate);
        return;
      }
      if (this.data.announcement.description.length > this.descriptionMaxSize) {
        var errorMessage = this.language.Generic.Announcement.kAnnouncementMaxLengthMessage.replace("{0}", this.descriptionMaxSize);
        this.$dialogs.error(errorMessage);
        return;
      }
      var deleteDate = this.data.announcement.deleteDate;
      if (deleteDate < new Date() || deleteDate > new Date().addYears(1)) {
        this.$dialogs.error(this.language.Generic.Announcement.kErrorBadDeletingDate);
        return;
      }
      this.data.announcement.attachments = this.fa.data.files;
      this.data.announcement.schoolIds = this.selected.selectedIds;
      this.$longWork.show();
      this.emAnnouncementsRepository.save(this.data.announcement).then(function () {
        _this4.changeTracker.clearDataChanges();
        _this4.$longWork.close();
        if (_this4.state.createMode) {
          _this4.$alerts.success(_this4.language.Generic.Announcement.kAnnouncementIsSent);
        } else {
          _this4.$alerts.success(_this4.language.Generic.Announcement.kAnnouncementIsSaved);
        }
        _this4.$location.path("/");
      });
    }
  }]);
  return EditAnnouncementCtrl;
}();
exports.EditAnnouncementCtrl = EditAnnouncementCtrl;
var RolesManager = /*#__PURE__*/function () {
  function RolesManager() {
    _classCallCheck(this, RolesManager);
  }
  _createClass(RolesManager, [{
    key: "beautify",
    value: function beautify(roles) {
      //привожу имя роли к верхнему регистру
      for (var i = 0; i < roles.length; i++) {
        var role = roles[i];
        //для роли "Психолог / социальный педагог" - не меняем наименование (для единообразия с интерфейсом в школе)
        if (role.key === 'Psychologist') {
          continue;
        }
        role.name = this.roleToUpperCase(role.name);
      }
    }
  }, {
    key: "roleToUpperCase",
    value: function roleToUpperCase(roleStr) {
      var roleSplit = roleStr.split('/');
      var result = "";
      for (var i = 0; i < roleSplit.length; i++) {
        var role = roleSplit[i];
        result += ' / ' + this.firstLetterToUpper(role);
      }
      return result.slice(2).trim();
    }
  }, {
    key: "firstLetterToUpper",
    value: function firstLetterToUpper(str) {
      str = str.trim();
      var result = str.charAt(0).toUpperCase() + str.slice(1);
      return result;
    }
  }]);
  return RolesManager;
}();
var EditAnnouncementComponent = {
  controller: EditAnnouncementCtrl,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/em/announcements/edit/editAnnouncement.component.html"
};
exports.EditAnnouncementComponent = EditAnnouncementComponent;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmAnnouncementsRepository = void 0;
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
var EmAnnouncementsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EmAnnouncementsRepository, _BaseRepository);
  var _super = _createSuper(EmAnnouncementsRepository);
  function EmAnnouncementsRepository() {
    _classCallCheck(this, EmAnnouncementsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EmAnnouncementsRepository, [{
    key: "getAll",
    value: function getAll() {
      return this.$http.get("/webapi/em/announcements").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEdit",
    value: function getEdit(id) {
      return this.$http.get("/webapi/announcements/edit", {
        params: {
          id: id
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolRoles",
    value: function getSchoolRoles(language) {
      return this.$http.get("/webapi/refs/schoolroles", {
        params: {
          language: language
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolsIds",
    value: function getSchoolsIds(id) {
      return this.$http.get("/webapi/announcements/schoolsIds", {
        params: {
          id: id
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.$http["delete"]("/webapi/announcements", {
        params: {
          id: id
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "save",
    value: function save(editAnnounce) {
      return this.$http.post("/webapi/em/announcements", editAnnounce).then(this.handleResponse, this.handleError);
    }
  }]);
  return EmAnnouncementsRepository;
}(_baseRepository.BaseRepository);
exports.EmAnnouncementsRepository = EmAnnouncementsRepository;

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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(41);
var _repository = __webpack_require__(7);
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

/***/ 61:
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

/***/ 7:
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

/***/ })

/******/ });