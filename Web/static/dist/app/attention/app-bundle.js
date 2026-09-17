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


var _secretAnswer = __webpack_require__(2);
var _tips = __webpack_require__(3);
var _changePassword = __webpack_require__(6);
var _chooseSessionRole = __webpack_require__(10);
var _userSettings = __webpack_require__(11);
var _attention = __webpack_require__(7);
var _entryPage = __webpack_require__(12);
var _settings = __webpack_require__(13);
var _users = __webpack_require__(14);
var _schoolWizard = __webpack_require__(16);
var _recoveryInfo = __webpack_require__(18);
var _userinfo = __webpack_require__(19);
var _error = __webpack_require__(21);
var _checkIdpUserDetails = __webpack_require__(24);
var _checkIdpUserDetails2 = __webpack_require__(25);
var angularModule = angular.module("irtech.netcity.attention", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);
var EnterDirective = function EnterDirective() {
  return function (scope, element, attrs) {
    element.on("keydown keypress", function (event) {
      if (event.which !== 13) {
        return;
      }
      scope.$apply(function () {
        return scope.$eval(attrs.ngEnter);
      });
      event.preventDefault();
    });
  };
};
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/secret-answer/", _secretAnswer.SecretAnswerComponent).when("/tips/", _tips.TipsComponent).when("/change-password/", _changePassword.ChangePasswordComponent).when("/choose-session-role/", _chooseSessionRole.ChooseSessionRoleComponent).when("/check-idp-user-details", _checkIdpUserDetails2.CheckIdpUserDetailsComponent).when("/error", _error.ErrorComponent).otherwise({
    redirectTo: "/secret-answer/"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
angularModule.directive("ngEnter", EnterDirective).service("attentionRepository", _attention.AttentionRepository).service("checkIdpUserDetailsRepository", _checkIdpUserDetails.CheckIdpUserDetailsRepository).service("userSettingsRepository", _userSettings.UserSettingsRepository).service("usersRepository", _users.UsersRepository).service("userInfoRepository", _userinfo.UserInfoRepository).service("settingsRepository", _settings.SettingsRepository).service("entryPageService", _entryPage.EntryPageService).service("schoolWizardService", _schoolWizard.SchoolWizardService).service("recoveryInfoService", _recoveryInfo.RecoveryInfoService).config(config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecretAnswerComponent = exports.GreenTextService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Questions = /*#__PURE__*/function () {
  function Questions(language) {
    _classCallCheck(this, Questions);
    this.language = language;
    this.init();
  }
  _createClass(Questions, [{
    key: "init",
    value: function init() {
      this.defaultQuestionList = [{
        id: 0,
        name: this.language.Generic.Common.kUnselected
      }, {
        id: 1,
        name: this.language.Generic.Login.YourMotherMaidenName
      }, {
        id: 2,
        name: this.language.Generic.Login.PetName
      }, {
        id: 3,
        name: this.language.Generic.Login.FavoriteDish
      }, {
        id: 4,
        name: this.language.Generic.Login.ParentsZip
      }, {
        id: 5,
        name: this.language.Generic.Login.GrandmaBirtday
      }, {
        id: 6,
        name: this.language.Generic.Login.PassportNumber
      }, {
        id: 7,
        name: this.language.Generic.Login.FavoritePhoneNumber
      }, {
        id: 8,
        name: this.language.Generic.Login.AskYouOwnQuestion
      }];
    }
  }]);
  return Questions;
}();
var GreenTextService = /*#__PURE__*/function () {
  function GreenTextService() {
    _classCallCheck(this, GreenTextService);
  }
  _createClass(GreenTextService, [{
    key: "greenText",
    value: function greenText(text) {
      return "<span style='color:green'>".concat(text, "</span>");
    }
  }]);
  return GreenTextService;
}();
exports.GreenTextService = GreenTextService;
var SecretAnswerController = /*#__PURE__*/function () {
  SecretAnswerController.$inject = ["appContext", "pageContext", "$appLoader", "$alerts", "$longWork", "entryPageService", "recoveryInfoService", "userInfoRepository", "$sce", "language"];
  /*@ngInject*/
  function SecretAnswerController(appContext, pageContext, $appLoader, $alerts, $longWork, entryPageService, recoveryInfoService, userInfoRepository, $sce, language) {
    var _this = this;
    _classCallCheck(this, SecretAnswerController);
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.entryPageService = entryPageService;
    this.recoveryInfoService = recoveryInfoService;
    this.userInfoRepository = userInfoRepository;
    this.$sce = $sce;
    this.language = language;
    this.page = pageContext;
    this.page.clear();
    this.page.back = {
      href: "/webapi/auth/logout"
    };
    this.defaultQuestionList = new Questions(language).defaultQuestionList;
    this.question = this.defaultQuestionList[0];
    this.userId = appContext.userId;
    this.userInfoRepository.getUserNickname(this.userId).then(function (userDto) {
      _this.getPageTitle(userDto);
      _this.ready = true;
      $appLoader.hide();
    });
  }
  _createClass(SecretAnswerController, [{
    key: "getPageTitle",
    value: function getPageTitle(userDto) {
      this.page.title = this.$sce.trustAsHtml(this.language.Generic.SetupSchool.kSetSecretQuestionAndAnswer + new GreenTextService().greenText(userDto.name));
    }
  }, {
    key: "unSelected",
    value: function unSelected() {
      return this.question.id == 0;
    }
  }, {
    key: "ownQuestion",
    value: function ownQuestion() {
      return this.question.id == 8;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.unSelected()) {
        this.recoveryAnswer = null;
      }
    }
  }, {
    key: "prepareAnswer",
    value: function prepareAnswer() {
      var _a, _b;
      this.recoveryAnswer = (_b = (_a = this.recoveryAnswer) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.replace(/d41d8cd98f00b204e9800998ecf8427e/gi, '');
    }
  }, {
    key: "createRequest",
    value: function createRequest() {
      var request = {
        question: this.question.name,
        answer: this.recoveryAnswer
      };
      if (this.ownQuestion()) {
        request.question = this.recoveryQuestion;
      }
      return request;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      this.prepareAnswer();
      if (this.unSelected()) {
        return;
      }
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      var request = this.createRequest();
      this.$longWork.execute(this.recoveryInfoService.saveRecoveryInfo(request).then(function (response) {
        _this2.$alerts.success(response.message);
        _this2["continue"]();
      }));
    }
  }, {
    key: "continue",
    value: function _continue() {
      this.entryPageService.goToNextEntry();
    }
  }]);
  return SecretAnswerController;
}();
var SecretAnswerComponent = {
  controller: SecretAnswerController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/secret-answer/secret-answer.component.html"
};
exports.SecretAnswerComponent = SecretAnswerComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipsComponent = void 0;
var _common = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TipsController = /*#__PURE__*/function () {
  TipsController.$inject = ["appContext", "pageContext", "$appLoader", "$longWork", "entryPageService", "schoolWizardService", "language"];
  /*@ngInject*/
  function TipsController(appContext, pageContext, $appLoader, $longWork, entryPageService, schoolWizardService, language) {
    _classCallCheck(this, TipsController);
    this.$longWork = $longWork;
    this.entryPageService = entryPageService;
    this.schoolWizardService = schoolWizardService;
    this.language = language;
    this.context = appContext;
    pageContext.clear();
    pageContext.title = this.language.Generic.Wizard.kTitleTips + " <i>" + appContext.productName + "</i>";
    pageContext.back = {
      history: true
    };
    $appLoader.hide();
  }
  _createClass(TipsController, [{
    key: "goStep",
    value: function goStep(step) {
      var aLink;
      switch (step) {
        case 21:
          aLink = "/angular/school/calendar/subjects/";
          break;
        case 22:
          aLink = "/angular/school/calendar/curriculum/limits/";
          break;
        case 23:
          aLink = "/angular/school/calendar/curriculum/plan/";
          break;
        case 24:
          aLink = "/angular/school/classmanagement/subjectgroups";
          break;
      }
      (0, _common.postTo)(aLink);
    }
  }, {
    key: "doSave",
    value: function doSave() {
      var _this = this;
      var promise = Promise.resolve();
      if (this.disableTips) {
        var schoolId = parseInt(this.context.schoolId);
        promise = this.schoolWizardService.removeTips(schoolId);
      }
      this.$longWork.execute(promise.then(function () {
        return _this.entryPageService.goToNextEntry();
      }));
    }
  }]);
  return TipsController;
}();
var TipsComponent = {
  controller: TipsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/tips/tips.component.html"
};
exports.TipsComponent = TipsComponent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(5);
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordComponent = void 0;
var _common = __webpack_require__(4);
var _attention = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChangePasswordController = /*#__PURE__*/function () {
  ChangePasswordController.$inject = ["appContext", "pageContext", "$appLoader", "attentionRepository", "userSettingsRepository", "entryPageService", "commonChangePasswordService", "$q", "changeTracker", "language"];
  /*@ngInject*/
  function ChangePasswordController(appContext, pageContext, $appLoader, attentionRepository, userSettingsRepository, entryPageService, commonChangePasswordService, $q, changeTracker, language) {
    var _this = this;
    _classCallCheck(this, ChangePasswordController);
    this.attentionRepository = attentionRepository;
    this.userSettingsRepository = userSettingsRepository;
    this.entryPageService = entryPageService;
    this.commonChangePasswordService = commonChangePasswordService;
    this.$q = $q;
    this.changeTracker = changeTracker;
    this.language = language;
    this.page = pageContext;
    this.page.clear();
    this.page.back = {
      history: true
    };
    this.userId = appContext.userId;
    this.userSettingsRepository.getUserSettings(this.userId).then(function (userSettings) {
      _this.getPageTitle(userSettings === null || userSettings === void 0 ? void 0 : userSettings.passwordExpired);
    });
    // настраивает отображение компоненты CommonChangePasswordComponent
    this.options = {
      userId: this.userId,
      showUserInfo: appContext.schoolId || appContext.emId ? true : false,
      labelSize: "col-md-3",
      controlSize: "col-md-9"
    };
    this.load().then(function () {
      _this.commonChangePasswordService.onSave.on(function () {
        _this.entryPageService.goToNextEntry();
      });
      _this.ready = true;
      $appLoader.hide();
    });
  }
  _createClass(ChangePasswordController, [{
    key: "getPageTitle",
    value: function getPageTitle(passwordExpired) {
      if (passwordExpired) {
        this.page.title = this.language.Generic.Common.kHaveToChangePWD_1;
      } else {
        this.page.title = this.language.Generic.Common.kHaveToChangePWD;
      }
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var promises = [];
      promises.push(this.attentionRepository.getSsoLogin().then(function (ssoLogin) {
        _this2.ssoLogin = ssoLogin;
      }));
      promises.push(this.attentionRepository.getUserSafetyCategory().then(function (safetyCategory) {
        _this2.safe = safetyCategory == _attention.SafetyCategory.Safe;
      }));
      promises.push(this.commonChangePasswordService.initData(this.options.userId));
      return this.$q.all(promises);
    }
  }, {
    key: "logout",
    value: function logout() {
      (0, _common.postTo)("/webapi/auth/logout");
    }
  }, {
    key: "save",
    value: function save() {
      this.commonChangePasswordService.saveProcess();
    }
  }, {
    key: "skip",
    value: function skip() {
      this.entryPageService.goToNextEntry();
    }
  }]);
  return ChangePasswordController;
}();
var ChangePasswordComponent = {
  controller: ChangePasswordController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/change-password/change-password.component.html"
};
exports.ChangePasswordComponent = ChangePasswordComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafetyCategory = exports.AttentionRepository = void 0;
var _baseRepository = __webpack_require__(8);
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
var SafetyCategory;
exports.SafetyCategory = SafetyCategory;
(function (SafetyCategory) {
  SafetyCategory["Unsafe"] = "Unsafe";
  SafetyCategory["Safe"] = "Safe";
})(SafetyCategory || (exports.SafetyCategory = SafetyCategory = {}));
var AttentionRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AttentionRepository, _BaseRepository);
  var _super = _createSuper(AttentionRepository);
  function AttentionRepository() {
    _classCallCheck(this, AttentionRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AttentionRepository, [{
    key: "setSessionRole",
    value: function setSessionRole(roleGroup) {
      var config = {
        params: {
          roleGroup: roleGroup
        }
      };
      return this.$http.post("/webapi/context/sessionrole", null, config).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSsoLogin",
    value: function getSsoLogin() {
      var config = {
        params: {
          key: "SSOLogin"
        }
      };
      return this.$http.get("/webapi/context/session", config).then(function (response) {
        return response.data == 1;
      }, this.handleError);
    }
  }, {
    key: "getUserSafetyCategory",
    value: function getUserSafetyCategory() {
      return this.$http.get("/webapi/context/safety-category").then(this.handleResponse, this.handleError);
    }
  }]);
  return AttentionRepository;
}(_baseRepository.BaseRepository);
exports.AttentionRepository = AttentionRepository;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(4);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChooseSessionRoleComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChooseSessionRoleController = /*#__PURE__*/function () {
  ChooseSessionRoleController.$inject = ["pageContext", "$appLoader", "$longWork", "attentionRepository", "entryPageService", "language"];
  /*@ngInject*/
  function ChooseSessionRoleController(pageContext, $appLoader, $longWork, attentionRepository, entryPageService, language) {
    _classCallCheck(this, ChooseSessionRoleController);
    this.$longWork = $longWork;
    this.attentionRepository = attentionRepository;
    this.entryPageService = entryPageService;
    this.language = language;
    pageContext.clear();
    pageContext.title = this.language.Generic.Login.kTitleSecurityWarning;
    pageContext.back = {
      history: true
    };
    this.sessionRoles = [{
      id: 0,
      name: this.language.Generic.Common.kStaff
    }, {
      id: 2,
      name: this.language.Generic.Common.kParent
    } // родитель
    ];

    this.sessionRole = this.sessionRoles[0];
    this.ready = true;
    $appLoader.hide();
  }
  _createClass(ChooseSessionRoleController, [{
    key: "doContinue",
    value: function doContinue() {
      var _this = this;
      this.$longWork.execute(this.attentionRepository.setSessionRole(this.sessionRole.id).then(function () {
        _this.entryPageService.goToNextEntry();
      }));
    }
  }]);
  return ChooseSessionRoleController;
}();
var ChooseSessionRoleComponent = {
  controller: ChooseSessionRoleController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/choose-session-role/choose-session-role.component.html"
};
exports.ChooseSessionRoleComponent = ChooseSessionRoleComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSettingsRepository = void 0;
var _baseRepository = __webpack_require__(8);
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
var UserSettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  UserSettingsRepository.$inject = ["$http", "$dialogs", "$longWork"];
  _inherits(UserSettingsRepository, _BaseRepository);
  var _super = _createSuper(UserSettingsRepository);
  /*@ngInject*/
  function UserSettingsRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, UserSettingsRepository);
    return _super.call(this, $http, $dialogs, $longWork);
  }
  _createClass(UserSettingsRepository, [{
    key: "getUserSettings",
    value: function getUserSettings(userId, config) {
      var httpConfig = {
        params: {
          userId: userId
        }
      };
      if (config) {
        httpConfig = Object.assign({}, httpConfig, config);
      }
      return this.$http.get("/webapi/usersettings", httpConfig).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setShowNetSchoolApp",
    value: function setShowNetSchoolApp(userId, showNetSchoolApp) {
      var promise = this.saveUserSettings(userId, null, null, null, null, null, null, null, null, showNetSchoolApp);
      return promise;
    }
  }, {
    key: "setShowSferumBanner",
    value: function setShowSferumBanner(userId, showSferumBanner) {
      var promise = this.saveUserSettings(userId, null, null, null, null, null, null, null, null, null, showSferumBanner);
      return promise;
    }
  }, {
    key: "saveUserSettings",
    value: function saveUserSettings(userId, showMobilePhone, defaultDesktop, language, favoriteReports, passwordExpired, recoveryAnswer, recoveryQuestion, theme, showNetSchoolApp, showSferumBanner) {
      var params = {
        userId: userId
      };
      if (!showMobilePhone) {
        params.showMobilePhone = showMobilePhone;
      }
      if (!defaultDesktop) {
        params.defaultDesktop = defaultDesktop;
      }
      if (!language) {
        params.language = language;
      }
      if (!favoriteReports) {
        params.favoriteReports = favoriteReports;
      }
      if (!passwordExpired) {
        params.passwordExpired = passwordExpired;
      }
      if (!recoveryAnswer) {
        params.recoveryAnswer = recoveryAnswer;
      }
      if (!recoveryQuestion) {
        params.recoveryQuestion = recoveryQuestion;
      }
      if (!theme) {
        params.theme = theme;
      }
      if (!showNetSchoolApp) {
        params.showNetSchoolApp = showNetSchoolApp;
      }
      if (!showSferumBanner) {
        params.showSferumBanner = showSferumBanner;
      }
      return this.$http.post("/webapi/usersettings", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return UserSettingsRepository;
}(_baseRepository.BaseRepository);
exports.UserSettingsRepository = UserSettingsRepository;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryPageService = void 0;
var _common = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EntryPageService = /*#__PURE__*/function () {
  function EntryPageService() {
    _classCallCheck(this, EntryPageService);
  }
  _createClass(EntryPageService, [{
    key: "goToNextEntry",
    value: function goToNextEntry() {
      var postToParams = {
        path: "/webapi/context/next-entry-page",
        params: {
          currentEntryPage: window.location.pathname.replace(/\/$/, "")
        },
        formParams: {
          method: "get"
        },
        nocache: false
      };
      (0, _common.postTo)(postToParams);
    }
  }]);
  return EntryPageService;
}();
exports.EntryPageService = EntryPageService;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsRepository = void 0;
var _baseRepository = __webpack_require__(8);
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
var SettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SettingsRepository, _BaseRepository);
  var _super = _createSuper(SettingsRepository);
  function SettingsRepository() {
    _classCallCheck(this, SettingsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SettingsRepository, [{
    key: "getServerSettings",
    value:
    // получает настройки
    function getServerSettings() {
      return this.$http.get("/webapi/settings/server").then(this.handleResponse, this.handleError);
    }
    // получает код доверенного приложения
  }, {
    key: "getCommonServerSettings",
    value: function getCommonServerSettings() {
      return this.$http.get("/webapi/settings/common").then(this.handleResponse, this.handleError);
    }
    // сохраняет Настройки сервера
  }, {
    key: "saveCommonServerSettings",
    value: function saveCommonServerSettings(serverSettings) {
      return this.$http.post("/webapi/settings/common", serverSettings).then(this.handleResponse, this.handleError);
    }
    // получает Настройки файловых вложений
  }, {
    key: "getSmsSettings",
    value: function getSmsSettings() {
      return this.$http.get("/webapi/settings/sms").then(this.handleResponse, this.handleError);
    }
    // получает настройку 'Требовать заполнения поля "Дата рождения" у родителей'
  }, {
    key: "requireParentBirthDate",
    value: function requireParentBirthDate() {
      return this.$http.get("/webapi/settings/requireParentBirthDate").then(this.handleResponse, this.handleError);
    }
    // сохраняет Настройки файловых вложений
  }, {
    key: "saveSmsSettings",
    value: function saveSmsSettings(smsSettings) {
      return this.$http.post("/webapi/settings/sms", smsSettings).then(this.handleResponse, this.handleError);
    }
    // получает Настройки PUSH уведомлений
  }, {
    key: "getPushSettings",
    value: function getPushSettings() {
      return this.$http.get("/webapi/settings/push").then(this.handleResponse, this.handleError);
    }
    // сохраняет Настройки PUSH уведомлений
  }, {
    key: "savePushSettings",
    value: function savePushSettings(smsSettings) {
      return this.$http.post("/webapi/settings/push", smsSettings).then(this.handleResponse, this.handleError);
    }
    // получает настройки почты
  }, {
    key: "getMailSettings",
    value: function getMailSettings() {
      return this.$http.get("/webapi/settings/mail").then(this.handleResponse, this.handleError);
    }
    // сохраняет настройки почты
  }, {
    key: "saveMailSettings",
    value: function saveMailSettings(mailSettings) {
      return this.$http.post("/webapi/settings/mail", mailSettings).then(this.handleResponse, this.handleError);
    }
    // проверяет email
  }, {
    key: "testEMail",
    value: function testEMail(email) {
      return this.$http.post("/webapi/settings/testemail", JSON.stringify(email)).then(this.handleResponse, this.handleError);
    }
    // 
  }, {
    key: "getMovePeriods",
    value: function getMovePeriods(globalYear) {
      return this.$http.get("/webapi/settings/moveperiods", {
        params: {
          globalYear: globalYear
        }
      }).then(this.handleResponse, this.handleError);
    }
    // получает  настройки безопасности
  }, {
    key: "getSecuritySettings",
    value: function getSecuritySettings() {
      return this.$http.get("/webapi/settings/security").then(this.handleResponse, this.handleError);
    }
    // сохраняет  настройки безопасности
  }, {
    key: "saveSecuritySettings",
    value: function saveSecuritySettings(securitySettings) {
      return this.$http.post("/webapi/settings/security", securitySettings).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getReadOnlyAccessFlag",
    value: function getReadOnlyAccessFlag() {
      return this.$http.get("/webapi/appflags/readOnlyAccess").then(this.handleResponse, this.handleError);
    }
    // получает настройки интеграции
  }, {
    key: "getIntegrationSettings",
    value: function getIntegrationSettings() {
      return this.$http.get("/webapi/settings/integration").then(this.handleResponse, this.handleError);
    }
    // сохраняет настройки интеграции
  }, {
    key: "saveIntegrationSettings",
    value: function saveIntegrationSettings(integrationSettings) {
      return this.$http.post("/webapi/settings/integration", integrationSettings).then(this.handleResponse, this.handleError);
    }
    // получает букву мужского пола
  }, {
    key: "getMaleLetter",
    value: function getMaleLetter() {
      return this.$http.get("/webapi/settings/maleLetter").then(this.handleResponse, this.handleError);
    }
    // получает букву женского пола
  }, {
    key: "getFemaleLetter",
    value: function getFemaleLetter() {
      return this.$http.get("/webapi/settings/femaleLetter").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCheckConnectionResults",
    value: function getCheckConnectionResults(urlInfos) {
      return this.$http.post("/webapi/checkconnections", urlInfos).then(this.handleResponseSimple, this.handleError);
    }
    // получает учетные записи пользователей
  }, {
    key: "getUserAccountsSettings",
    value: function getUserAccountsSettings() {
      return this.$http.get("/webapi/settings/useraccounts").then(this.handleResponse, this.handleError);
    }
    // сохраняет учетные записи пользователей
  }, {
    key: "saveUserAccountsSettings",
    value: function saveUserAccountsSettings(userAccountsSettings) {
      return this.$http.post("/webapi/settings/useraccounts", userAccountsSettings).then(this.handleResponse, this.handleError);
    }
    // получает настройки авторизации пользователей
  }, {
    key: "getUserAuthorizationSettings",
    value: function getUserAuthorizationSettings() {
      return this.$http.get("/webapi/settings/userauthorization").then(this.handleResponse, this.handleError);
    }
    // сохраняет настройки авторизации пользователей
  }, {
    key: "saveUserAuthorizationSettings",
    value: function saveUserAuthorizationSettings(userAuthorizationSettings) {
      return this.$http.post("/webapi/settings/userauthorization", userAuthorizationSettings).then(this.handleResponse, this.handleError);
    }
    // получает настройки авторизации пользователей
  }, {
    key: "getPopupWindowOnLoginScreenSettings",
    value: function getPopupWindowOnLoginScreenSettings() {
      return this.$http.get("/webapi/settings/preloginnotice").then(this.handleResponse, this.handleError);
    }
    // сохраняет настройки авторизации пользователей
  }, {
    key: "savePopupWindowOnLoginScreenSettings",
    value: function savePopupWindowOnLoginScreenSettings(popUpWindowOnLoginScreenSettings) {
      return this.$http.post("/webapi/settings/popupwindowonloginscreen", popUpWindowOnLoginScreenSettings).then(this.handleResponse, this.handleError);
    }
    // получает сведения об образовательных организациях
  }, {
    key: "getSchoolInfoSettings",
    value: function getSchoolInfoSettings() {
      return this.$http.get("/webapi/settings/schoolinfo").then(this.handleResponse, this.handleError);
    }
    // сохраняет сведения об образовательных организациях
  }, {
    key: "saveSchoolInfoSettings",
    value: function saveSchoolInfoSettings(schoolInfoSettings) {
      return this.$http.post("/webapi/settings/schoolinfo", schoolInfoSettings).then(this.handleResponse, this.handleError);
    }
    // получает Настройки файловых вложений
  }, {
    key: "getFileAttachmentsSettings",
    value: function getFileAttachmentsSettings() {
      return this.$http.get("/webapi/settings/fileattachments").then(this.handleResponse, this.handleError);
    }
    // сохраняет Настройки файловых вложений
  }, {
    key: "saveFileAttachmentsSettings",
    value: function saveFileAttachmentsSettings(fileAttachmentsSettings) {
      return this.$http.post("/webapi/settings/fileattachments", fileAttachmentsSettings).then(this.handleResponse, this.handleError);
    }
    // Получает настройки API Шлюза видеоконференций
  }, {
    key: "getVideoConfSettings",
    value: function getVideoConfSettings() {
      return this.$http.get("/webapi/settings/videoconf").then(this.handleResponse, this.handleError);
    }
    // Сохраняет Настройки API Шлюза видеоконференций
  }, {
    key: "saveVideoConfSettings",
    value: function saveVideoConfSettings(videoConfSettings) {
      return this.$http.post("/webapi/settings/videoconf", videoConfSettings).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getOrgVideoConfSettings",
    value: function getOrgVideoConfSettings() {
      return this.$http.get("/webapi/video-conf").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createVideoConfSetting",
    value: function createVideoConfSetting(dto) {
      return this.$http.put("/webapi/video-conf", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editVideoConfSetting",
    value: function editVideoConfSetting(dto) {
      return this.$http.post("/webapi/video-conf", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteVideoConfSetting",
    value: function deleteVideoConfSetting(id) {
      var params = {
        id: id
      };
      return this.$http["delete"]("/webapi/video-conf", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getChatsSettings",
    value: function getChatsSettings() {
      return this.$http.get("/webapi/settings/chats").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveChatsSettings",
    value: function saveChatsSettings(settings) {
      return this.$http.post("/webapi/settings/chats", settings).then(this.handleResponse, this.handleError);
    }
  }]);
  return SettingsRepository;
}(_baseRepository.BaseRepository);
exports.SettingsRepository = SettingsRepository;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;
var _repository = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(9);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolWizardService = void 0;
var _common = __webpack_require__(17);
var _baseRepository = __webpack_require__(8);
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
var SchoolWizardService = /*#__PURE__*/function (_BaseRepository) {
  SchoolWizardService.$inject = ["$http", "$dialogs", "$longWork", "language", "navigationService"];
  _inherits(SchoolWizardService, _BaseRepository);
  var _super = _createSuper(SchoolWizardService);
  /*@ngInject*/
  function SchoolWizardService($http, $dialogs, $longWork, language, navigationService) {
    var _this;
    _classCallCheck(this, SchoolWizardService);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.language = language;
    _this.navigationService = navigationService;
    _this.steps = [{
      number: 1,
      order: 1,
      name: _this.language.Generic.Wizard.kCreatingYear,
      url: "/year/",
      active: true
    }, {
      number: 2,
      order: 2,
      name: _this.language.Generic.Common.kStaffs,
      url: "/staff/",
      active: true
    }, {
      number: 3,
      order: 3,
      name: _this.language.Generic.Common.kSubjects,
      url: "/subjects/",
      active: true
    }, {
      number: 4,
      order: 4,
      name: _this.language.MenuFolders.kFNProfiles,
      url: "/profiles/",
      active: true
    }, {
      number: 5,
      order: 5,
      name: _this.language.Generic.MenuFolders.kFNCurriculumLimits,
      url: "/limits/",
      active: true
    }, {
      number: 6,
      order: 6,
      name: _this.language.Generic.SetupSchoolCalendar.kWizardTitlePlan,
      url: "/plan/",
      active: true
    }, {
      number: 7,
      order: 7,
      name: _this.language.Generic.Wizard.kTTypes,
      url: "/termtypes/",
      active: true
    }, {
      number: 8,
      order: 8,
      name: _this.language.Generic.Wizard.kTLimits,
      url: "/terms/",
      active: true
    }, {
      number: 9,
      order: 9,
      name: _this.language.MenuFolders.kFNClasses,
      url: "/classes/",
      active: true
    }, {
      number: 10,
      order: 10,
      name: _this.language.Generic.SetupSchoolCalendar.kWizardTitleFinish,
      url: "/finish/",
      active: true
    }];
    return _this;
  }
  _createClass(SchoolWizardService, [{
    key: "getSteps",
    value: function getSteps(funcType) {
      var steps = this.steps;
      if (funcType == _common.FuncType.addSchool) {
        steps = steps.filter(function (x) {
          return x.number != 4 && x.number != 9;
        });
      }
      if (funcType != _common.FuncType.school) {
        steps = steps.filter(function (x) {
          return x.number != 7 && x.number != 8;
        });
      }
      steps.forEach(function (s, index) {
        return s.order = index + 1;
      });
      return steps;
    }
  }, {
    key: "checkPassword",
    value: function checkPassword(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/wizard/change-password")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "initStep",
    value: function initStep(schoolId, step) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/wizard/step"), null, {
        params: {
          step: step
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "wizardFinish",
    value: function wizardFinish(schoolId) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/wizard/finish")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeTips",
    value: function removeTips(schoolId) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/wizard/remove-tips")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLastStep",
    value: function getLastStep(schoolId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var lastStepNum;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.initStep(schoolId, 1);
            case 2:
              lastStepNum = _context.sent;
              return _context.abrupt("return", this.steps.find(function (s) {
                return s.number == lastStepNum;
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "goLastStep",
    value: function goLastStep(schoolId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var lastStep;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getLastStep(schoolId);
            case 2:
              _context2.t0 = _context2.sent;
              if (_context2.t0) {
                _context2.next = 5;
                break;
              }
              _context2.t0 = this.steps[0];
            case 5:
              lastStep = _context2.t0;
              this.navigationService.navigateTo(lastStep.url);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "goStep",
    value: function goStep(step) {
      var stepInfo = this.steps.find(function (s) {
        return s.number == step;
      });
      if (stepInfo === null || stepInfo === void 0 ? void 0 : stepInfo.url) {
        this.navigationService.navigateTo(stepInfo.url);
      }
    }
  }]);
  return SchoolWizardService;
}(_baseRepository.BaseRepository);
exports.SchoolWizardService = SchoolWizardService;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryInfoService = void 0;
var _baseRepository = __webpack_require__(8);
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
var RecoveryInfoService = /*#__PURE__*/function (_BaseRepository) {
  _inherits(RecoveryInfoService, _BaseRepository);
  var _super = _createSuper(RecoveryInfoService);
  function RecoveryInfoService() {
    _classCallCheck(this, RecoveryInfoService);
    return _super.apply(this, arguments);
  }
  _createClass(RecoveryInfoService, [{
    key: "saveRecoveryInfo",
    value: function saveRecoveryInfo(request) {
      return this.$http.post("/webapi/mysettings/recoveryinfo", request).then(this.handleResponse, this.handleError);
    }
  }]);
  return RecoveryInfoService;
}(_baseRepository.BaseRepository);
exports.RecoveryInfoService = RecoveryInfoService;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoRepository = void 0;
var _baseRepository = __webpack_require__(8);
var _userinfo = __webpack_require__(20);
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
var UserInfoRepository = /*#__PURE__*/function (_BaseRepository) {
  UserInfoRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(UserInfoRepository, _BaseRepository);
  var _super = _createSuper(UserInfoRepository);
  /*@ngInject*/
  function UserInfoRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, UserInfoRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    return _this;
  }
  _createClass(UserInfoRepository, [{
    key: "getUserInfo",
    value: function getUserInfo(userId, roleType) {
      return this.$http.get('/webapi/userinfo', {
        params: {
          userId: userId,
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSeniorities",
    value: function getSeniorities(userId, typeId) {
      var params = {
        userId: userId
      };
      if (typeId) {
        params = Object.assign(params, {
          typeId: typeId
        });
      }
      return this.$http.get('/webapi/userinfo/seniorities', {
        params: {
          userId: userId,
          typeId: typeId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteSeniority",
    value: function deleteSeniority(seniorityId) {
      return this.$http["delete"]('/webapi/userinfo/seniorities', {
        params: {
          seniorityId: seniorityId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParameters",
    value: function getParameters(roleType) {
      return this.$http.get('/webapi/userinfo/parameters/', {
        params: {
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getBatchParameterValues",
    value: function getBatchParameterValues(query) {
      return this.$http.post('/webapi/userinfo/parameter/value/get-batch', query).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setBatchParameterValues",
    value: function setBatchParameterValues(command) {
      return this.$http.post('/webapi/userinfo/parameter/value/set-batch', command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParamInfo",
    value: function getParamInfo(paramId) {
      return this.$http.get('/webapi/userinfo/parameters/' + paramId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParamItems",
    value: function getParamItems(paramId) {
      return this.$http.get('/webapi/userinfo/parameters/' + paramId + "/items").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkSimilarUsers",
    value: function checkSimilarUsers(userId, roleType, userInfoCommonData) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/checkSimilar"), userInfoCommonData, {
        params: {
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveUserInfo",
    value: function saveUserInfo(userId, roleType, userInfoData) {
      return this.$http.post("/webapi/userinfo/", userInfoData, {
        params: {
          roleType: roleType,
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSeniorityInfo",
    value: function getSeniorityInfo(userId, typeId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/staff/seniority"), {
        params: {
          typeId: typeId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setSeniorityInfo",
    value: function setSeniorityInfo(userId, seniorities) {
      return this.$http.post("/webapi/userinfo/seniorities", seniorities, {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentCreativesInfo",
    value: function getStudentCreativesInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/studentCreatives")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddEducation",
    value: function getAddEducation(userId, schoolId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addeducation"), {
        params: {
          schoolId: schoolId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddEducationsAll",
    value: function getAddEducationsAll(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addeducation")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setAddEducationCost",
    value: function setAddEducationCost(userId, addEducationId, classId, cost, enrollReason) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/addeducation"), {
        addEducationId: addEducationId,
        classId: classId,
        cost: cost,
        enrollReason: enrollReason
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAidResultsInfo",
    value: function getAidResultsInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/aidResults")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCommissionsInfo",
    value: function getCommissionsInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/commissions")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFamilyObservesInfo",
    value: function getFamilyObservesInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/familyobserves")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCommissionTypes",
    value: function getCommissionTypes() {
      return this.$http.get("/webapi/references/commissionTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFamilyObserveTypes",
    value: function getFamilyObserveTypes() {
      return this.$http.get("/webapi/references/familyObserveTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editCommission",
    value: function editCommission(commission) {
      return this.$http.post("/webapi/userinfo/".concat(commission.studentId, "/commissions"), commission).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addCommission",
    value: function addCommission(commission) {
      return this.$http.put("/webapi/userinfo/".concat(commission.studentId, "/commissions"), commission).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeCommission",
    value: function removeCommission(commission) {
      return this.$http["delete"]("/webapi/userinfo/".concat(commission.studentId, "/commissions"), {
        params: {
          commissionId: commission.commissionId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editFamilyObserve",
    value: function editFamilyObserve(studentId, familyObserve) {
      return this.$http.post("/webapi/userinfo/".concat(studentId, "/familyobserves"), familyObserve).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addFamilyObserve",
    value: function addFamilyObserve(studentId, familyObserve) {
      return this.$http.put("/webapi/userinfo/".concat(studentId, "/familyobserves"), familyObserve).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeFamilyObserve",
    value: function removeFamilyObserve(studentId, familyObserve) {
      return this.$http["delete"]("/webapi/userinfo/".concat(studentId, "/familyobserves"), {
        params: {
          familyObserveId: familyObserve.id
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDependencies",
    value: function getDependencies() {
      return this.$http.get("/webapi/users/paramDependecies").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentParents",
    value: function getStudentParents(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/parents")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParentStudents",
    value: function getParentStudents(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/students")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "associateParent",
    value: function associateParent(userId, parentId) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/parents"), null, {
        params: {
          parentId: parentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "dissociateParent",
    value: function dissociateParent(userId, parentId) {
      return this.$http["delete"]("/webapi/userinfo/".concat(userId, "/parents"), {
        params: {
          parentId: parentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentMainEducation",
    value: function getStudentMainEducation(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/mainEducation")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentCertificate",
    value: function getStudentCertificate(studentId) {
      return this.$http.get("/webapi/educcertificates/student/".concat(studentId)).then(this.handleResponse);
    }
  }, {
    key: "delPhoto",
    value: function delPhoto(userId) {
      return this.$http["delete"]("/webapi/userinfo/".concat(userId, "/photo")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserSettings",
    value: function getUserSettings(userId) {
      return this.$http.get("/webapi/usersettings", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserAddresses",
    value: function getUserAddresses(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addresses")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRoles",
    value: function getRoles(staff, em) {
      return this.$http.get("/webapi/references/roles", {
        params: {
          "at": this.appContext.at,
          staff: staff,
          em: em
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCitizenships",
    value: function getCitizenships() {
      return this.$http.get("/webapi/userinfo/citizenships").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherSubjects",
    value: function getTeacherSubjects(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/teacherSubjects")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setTeacherSubjects",
    value: function setTeacherSubjects(userId, subjectIds) {
      return this.$http.post("/webapi/userinfo/staff/teacherSubjects", subjectIds, {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAvailableTeacherSubjects",
    value: function getAvailableTeacherSubjects(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/availableTeacherSubjects")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherClasses",
    value: function getTeacherClasses(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/teacherClasses")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setRegEqualHome",
    value: function setRegEqualHome(userId, forAll) {
      return this.$http.post("/webapi/addresses/users/".concat(userId, "/setregequalhome"), {
        params: {
          forAll: forAll
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setAddress",
    value: function setAddress(userId, addressId, addressType, forAll) {
      var params = {
        addressId: addressId,
        addressType: addressType,
        forAll: forAll
      };
      return this.$http.post("/webapi/addresses/users/".concat(userId), null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIdentityDocumentsCheckAccess",
    value: function getIdentityDocumentsCheckAccess(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/info/identityDocuments/checkAccess")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEventsCheckReadAccess",
    value: function getEventsCheckReadAccess(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/events/checkReadAccess")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCohabitants",
    value: function getCohabitants(userId, addressId, addressType) {
      var params = {
        addressId: addressId,
        addressType: addressType
      };
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addresses/cohabitants"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createPfrSnilsRequest",
    value: function createPfrSnilsRequest(userId) {
      return this.$http.post("/webapi/integration/pfr/snils-requests", {
        userId: userId
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSnilsRequest",
    value: function getSnilsRequest(userId) {
      var _this2 = this;
      var params = {
        userId: userId
      };
      return this.$http.get("/webapi/integration/pfr/snils-requests/get-by-user", {
        params: params
      }).then(this.handleResponse, function (response) {
        if (response.status != 404) _this2.handleError(response);
      });
    }
  }, {
    key: "getChildAddresses",
    value: function getChildAddresses(userId, addressType) {
      var params = addressType == null ? null : {
        addressType: addressType
      };
      return this.$http.get("/webapi/userinfo/".concat(userId, "/childs/addresses"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentClasses",
    value: function getStudentClasses(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/student/classes")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteParent",
    value: function deleteParent(userId) {
      return this.$http["delete"]("/webapi/users/parents", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteStaff",
    value: function deleteStaff(userId) {
      return this.$http["delete"]("/webapi/users/staff", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "changeStaffWorkStatus",
    value: function changeStaffWorkStatus(userId, status) {
      var params = {
        userId: userId,
        operation: status === _userinfo.StaffWorkingStatus.working ? "Recruitment" : "Dismissal"
      };
      return this.$http.post("/webapi/users/staff/employment", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRelatives",
    value: function getRelatives(userId) {
      return this.$http.get("/webapi/staff/".concat(userId, "/relatives")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createRelative",
    value: function createRelative(userId, relative) {
      return this.$http.put("/webapi/staff/".concat(userId, "/relatives"), relative).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editRelative",
    value: function editRelative(userId, relative) {
      return this.$http.post("/webapi/staff/".concat(userId, "/relatives/").concat(relative.id), relative).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteRelative",
    value: function deleteRelative(userId, relativeId) {
      return this.$http["delete"]("/webapi/staff/".concat(userId, "/relatives/").concat(relativeId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserNickname",
    value: function getUserNickname(userId) {
      return this.$http.get('/webapi/users/get', {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkEmUserRoleIsNotSingle",
    value: function checkEmUserRoleIsNotSingle(userId, role) {
      return this.$http.get("/webapi/em/user/".concat(userId, "/role/").concat(role), {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "bindWinAccount",
    value: function bindWinAccount() {
      var _this3 = this;
      var handleAspError = function handleAspError(response) {
        var data = response.data;
        if (data) {
          var error = data;
          _this3.$dialogs.error(error.message);
          return true;
        }
        if (response.status == 401) {
          return true;
        }
        return false;
      };
      return this.$http.post("/winauthlogin.asp", "CU=1&_AJAXCALL_", {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        if (handleAspError(response)) {
          return;
        }
        var data = response.data;
        return data;
      }, function (response) {
        if (handleAspError(response)) {
          return;
        }
        _this3.$dialogs.error(response.message || language.Generic.Login.kWinAuthError);
      });
    }
  }]);
  return UserInfoRepository;
}(_baseRepository.BaseRepository);
exports.UserInfoRepository = UserInfoRepository;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserParams = exports.UserParamType = exports.UserParamNames = exports.UserInfoRoleType = exports.StaffWorkingStatus = exports.SimilarLocation = exports.ParamAccessType = exports.DependencyOperator = exports.DependActionType = exports.AddressType = void 0;
var UserInfoRoleType;
exports.UserInfoRoleType = UserInfoRoleType;
(function (UserInfoRoleType) {
  UserInfoRoleType[UserInfoRoleType["Staff"] = 1] = "Staff";
  UserInfoRoleType[UserInfoRoleType["Students"] = 2] = "Students";
  UserInfoRoleType[UserInfoRoleType["Parents"] = 3] = "Parents";
  UserInfoRoleType[UserInfoRoleType["EducManagers"] = 4] = "EducManagers";
})(UserInfoRoleType || (exports.UserInfoRoleType = UserInfoRoleType = {}));
var SimilarLocation;
exports.SimilarLocation = SimilarLocation;
(function (SimilarLocation) {
  /// <summary>
  /// в текущей ОО 
  /// </summary>
  SimilarLocation["InSchool"] = "InSchool";
  /// <summary>
  /// в пуле
  /// </summary>
  SimilarLocation["InPool"] = "InPool";
  /// <summary>
  /// в другой ОО, здесь не смотрятся УДОДы
  /// </summary>
  SimilarLocation["InOtherSchoolsExcludeUDODs"] = "InOtherSchoolsExcludeUDODs";
  /// <summary>
  /// в другой ОО, здесь смотрятся и УДОДы
  /// </summary>
  SimilarLocation["InOtherSchools"] = "InOtherSchools";
  /// <summary>
  /// в любом месте
  /// </summary>
  SimilarLocation["Any"] = "Any";
})(SimilarLocation || (exports.SimilarLocation = SimilarLocation = {}));
var StaffWorkingStatus;
exports.StaffWorkingStatus = StaffWorkingStatus;
(function (StaffWorkingStatus) {
  StaffWorkingStatus["dismissed"] = "Dismissed";
  StaffWorkingStatus["working"] = "Working";
})(StaffWorkingStatus || (exports.StaffWorkingStatus = StaffWorkingStatus = {}));
var AddressType;
exports.AddressType = AddressType;
(function (AddressType) {
  /// <summary>
  /// Совпадает домашний и регистрации
  /// </summary>
  AddressType["equals"] = "Equals";
  /// <summary>
  /// Регистрации
  /// </summary>
  AddressType["registration"] = "Registration";
  /// <summary>
  /// Домашний
  /// </summary>
  AddressType["home"] = "Home";
})(AddressType || (exports.AddressType = AddressType = {}));
var DependencyOperator;
exports.DependencyOperator = DependencyOperator;
(function (DependencyOperator) {
  DependencyOperator["Equals"] = "Equals";
  DependencyOperator["NotEquals"] = "NotEquals";
  DependencyOperator["LessThen"] = "LessThen";
  DependencyOperator["GreaterThen"] = "GreaterThen";
  DependencyOperator["In"] = "In";
  DependencyOperator["NotIn"] = "NotIn";
  DependencyOperator["Empty"] = "Empty";
  DependencyOperator["NotEmpty"] = "NotEmpty";
})(DependencyOperator || (exports.DependencyOperator = DependencyOperator = {}));
var DependActionType;
exports.DependActionType = DependActionType;
(function (DependActionType) {
  DependActionType["Hide"] = "Hide";
  DependActionType["Show"] = "Show";
  DependActionType["DisableParamItems"] = "DisableParamItems";
  DependActionType["EnableParamItems"] = "EnableParamItems";
})(DependActionType || (exports.DependActionType = DependActionType = {}));
var UserParamType;
exports.UserParamType = UserParamType;
(function (UserParamType) {
  /// <summary>
  /// тип - дата
  /// </summary>
  UserParamType["Date"] = "Date";
  /// <summary>
  /// тип - списочный. выбор значения осуществляется из списка
  /// </summary>
  UserParamType["List"] = "List";
  /// <summary>
  /// тип - строковый. свободный ввод
  /// </summary>
  UserParamType["String"] = "String";
  /// <summary>
  /// тип - списочный с возможностью множественного выбора
  /// </summary>
  UserParamType["MultiChoice"] = "MultiChoice";
  /// <summary>
  /// тип - группировочный. не имеет собственного значения. служит для группировки нескольких параметров
  /// </summary>
  UserParamType["Group"] = "Group";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр <see cref="List"/>
  /// </summary>
  UserParamType["Pointer"] = "Pointer";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр с множественными значениями <see cref="MultiChoice"/>
  /// </summary>
  UserParamType["Relation"] = "Relation";
  /// <summary>
  /// тип - свободный. ввод обрабатывается отдельно.
  /// </summary>
  UserParamType["Free"] = "Free";
  /// <summary>
  /// тип - текстовое поле
  /// </summary>
  UserParamType["Area"] = "Area";
  /// <summary>
  /// тип - логический. да/нет
  /// </summary>
  /// <remarks>
  /// пока не используется. заведен на будущее
  /// </remarks>
  UserParamType["Bool"] = "Bool";
})(UserParamType || (exports.UserParamType = UserParamType = {}));
var ParamAccessType;
exports.ParamAccessType = ParamAccessType;
(function (ParamAccessType) {
  ParamAccessType["Full"] = "Full";
  ParamAccessType["ReadOnly"] = "ReadOnly";
  ParamAccessType["Hidden"] = "Hidden";
})(ParamAccessType || (exports.ParamAccessType = ParamAccessType = {}));
var UserParams;
exports.UserParams = UserParams;
(function (UserParams) {
  UserParams[UserParams["educForm"] = 1041] = "educForm";
  UserParams[UserParams["educProgramPreSchool"] = 1071] = "educProgramPreSchool";
  UserParams[UserParams["educProgram"] = 1042] = "educProgram";
  UserParams[UserParams["disabilityType"] = 1048] = "disabilityType";
  UserParams[UserParams["socialStatus"] = 1026] = "socialStatus";
  UserParams[UserParams["privilege"] = 3002] = "privilege";
  UserParams[UserParams["paramGroupDisability"] = 1056] = "paramGroupDisability";
  UserParams[UserParams["disabilityGroup"] = 1057] = "disabilityGroup";
  UserParams[UserParams["disabilityCategory"] = 1058] = "disabilityCategory";
  UserParams[UserParams["disabilityEnd"] = 1059] = "disabilityEnd";
  UserParams[UserParams["adaptedProgram"] = 1060] = "adaptedProgram";
  UserParams[UserParams["needLongCare"] = 4003] = "needLongCare";
  /// Группа параметров "Инвалидность" (ЛК Родителя)
  UserParams[UserParams["disabilityParamGroupParent"] = 2025] = "disabilityParamGroupParent";
  /// Инвалидность (ЛК Родителя): Группа инвалидности
  UserParams[UserParams["disabilityGroupParent"] = 2026] = "disabilityGroupParent";
  /// Инвалидность (ЛК Родителя): Категория инвалидности
  UserParams[UserParams["disabilityCategoryParent"] = 2027] = "disabilityCategoryParent";
  /// Инвалидность (ЛК Родителя): Адаптированная программа
  UserParams[UserParams["adaptedProgramParent"] = 2028] = "adaptedProgramParent";
  /// Инвалидность (ЛК Родителя): Потребность в длительном лечении
  UserParams[UserParams["needLongCareParent"] = 4025] = "needLongCareParent";
  UserParams[UserParams["medicalPolicyGroup"] = 1021] = "medicalPolicyGroup";
  UserParams[UserParams["medCertifSeria"] = 1022] = "medCertifSeria";
  UserParams[UserParams["medCertifNum"] = 1023] = "medCertifNum";
  UserParams[UserParams["medCertifDate"] = 1024] = "medCertifDate";
  UserParams[UserParams["medOrg"] = 1025] = "medOrg";
  UserParams[UserParams["omega3"] = 1128] = "omega3";
  UserParams[UserParams["studentMovement"] = 1040] = "studentMovement";
  /// признак болеет/здоров (ЛК ученика)
  UserParams[UserParams["isIll"] = 1129] = "isIll";
})(UserParams || (exports.UserParams = UserParams = {}));
var UserParamNames;
exports.UserParamNames = UserParamNames;
(function (UserParamNames) {
  UserParamNames["housing"] = "HOUSING";
  UserParamNames["nationality"] = "NATIONALITY";
  UserParamNames["mobilephone"] = "MOBILE";
  UserParamNames["health"] = "HEALTH";
  UserParamNames["health_after18"] = "HEALTH_AFTER18";
  UserParamNames["fgroup"] = "FGROUP";
  UserParamNames["illnes"] = "ILLNESS";
})(UserParamNames || (exports.UserParamNames = UserParamNames = {}));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorComponent = void 0;
var _common = __webpack_require__(4);
__webpack_require__(22);
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
var ErrorController = /*#__PURE__*/function () {
  ErrorController.$inject = ["pageContext", "$appLoader", "$dialogs", "$location", "$http", "language"];
  /*@ngInject*/
  function ErrorController(pageContext, $appLoader, $dialogs, $location, $http, language) {
    var _this = this;
    _classCallCheck(this, ErrorController);
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$location = $location;
    this.$http = $http;
    this.language = language;
    pageContext.title = this.language.Generic.Common.kErrorMsg;
    this.init().then(function () {
      return _this.showError();
    });
  }
  _createClass(ErrorController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var errorId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.errorData = null;
              errorId = this.$location.search() && this.$location.search().errId;
              if (!errorId) {
                _context.next = 6;
                break;
              }
              _context.next = 5;
              return this.$http.get("/webapi/context/error-data", {
                params: {
                  errorId: errorId
                }
              }).then(function (response) {
                return response.data;
              }, function () {
                return null;
              });
            case 5:
              this.errorData = _context.sent;
            case 6:
              this.$appLoader.hide();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "showError",
    value: function showError() {
      var _this2 = this;
      var displayMsg = this.getErrorMessage();
      this.$dialogs.error(displayMsg).then(function () {
        var _a;
        if ((_a = _this2.errorData) === null || _a === void 0 ? void 0 : _a.returnUrl) {
          (0, _common.postTo)(_this2.errorData.returnUrl);
          return;
        }
        history.go(-1);
      });
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage() {
      if (this.errorData == null || this.errorData == undefined) {
        return this.language.Generic.Common.kUnexpErr;
      }
      var message = this.errorData.message;
      var details = this.errorData.details;
      var stackTrace = this.errorData.stackTrace;
      var displayMsg = message;
      if (details || stackTrace) {
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
  }]);
  return ErrorController;
}();
var ErrorComponent = {
  controller: ErrorController,
  controllerAs: "$ctrl",
  template: "<div></div>"
};
exports.ErrorComponent = ErrorComponent;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckIdpUserDetailsRepository = void 0;
var _baseRepository = __webpack_require__(8);
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
var CheckIdpUserDetailsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(CheckIdpUserDetailsRepository, _BaseRepository);
  var _super = _createSuper(CheckIdpUserDetailsRepository);
  function CheckIdpUserDetailsRepository() {
    _classCallCheck(this, CheckIdpUserDetailsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(CheckIdpUserDetailsRepository, [{
    key: "checkUserDetails",
    value: function checkUserDetails() {
      return this.$http.get("/webapi/sso/user-info").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveUserDetails",
    value: function saveUserDetails(request) {
      return this.$http.post("/webapi/sso/user-info/copy", request).then(this.handleResponse, this.handleError);
    }
  }]);
  return CheckIdpUserDetailsRepository;
}(_baseRepository.BaseRepository);
exports.CheckIdpUserDetailsRepository = CheckIdpUserDetailsRepository;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckIdpUserDetailsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CheckIdpUserDetailsController = /*#__PURE__*/function () {
  CheckIdpUserDetailsController.$inject = ["pageContext", "$scope", "$appLoader", "$dialogs", "entryPageService", "navigationNotificationService", "ssoLinkRepository", "checkIdpUserDetailsRepository", "$q", "$location", "language"];
  /*@ngInject*/
  function CheckIdpUserDetailsController(pageContext, $scope, $appLoader, $dialogs, entryPageService, navigationNotificationService, ssoLinkRepository, checkIdpUserDetailsRepository, $q, $location, language) {
    _classCallCheck(this, CheckIdpUserDetailsController);
    var _a;
    this.pageContext = pageContext;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.entryPageService = entryPageService;
    this.navigationNotificationService = navigationNotificationService;
    this.ssoLinkRepository = ssoLinkRepository;
    this.checkIdpUserDetailsRepository = checkIdpUserDetailsRepository;
    this.$q = $q;
    this.$location = $location;
    this.language = language;
    this.mpChecked = true;
    this.emChecked = true;
    this.pageContext.clear();
    this.pageContext.back = {
      history: true
    };
    this.isLinked = (_a = this.$location.search()) === null || _a === void 0 ? void 0 : _a.isLinked;
    this.enterHandler();
    this.init();
  }
  _createClass(CheckIdpUserDetailsController, [{
    key: "getIdpInfoPromise",
    value: function getIdpInfoPromise() {
      var _this = this;
      return this.ssoLinkRepository.getIdpInfo(this.idp).then(function (idpInfo) {
        _this.idpInfo = idpInfo;
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      var promises = [];
      promises.push(this.ssoLinkRepository.getSessionData("Idp").then(function (idp) {
        _this2.idp = idp;
        return _this2.getIdpInfoPromise();
      }));
      promises.push(this.checkIdpUserDetailsRepository.checkUserDetails().then(function (response) {
        _this2.idpResponse = response;
      }));
      this.$q.all(promises).then(function () {
        _this2.pageContext.title = _this2.language.Generic.SetupSchool.kCopyInfoFromAccountIdentityProvider.replace("{0}", _this2.idpInfo.title);
        _this2.saveDetailsMessage = _this2.language.Generic.Common.kSaveIdpUserDetails.replace('{0}', _this2.idpInfo.title);
        if (_this2.idpResponse.canCopied) {
          _this2.onReady();
        } else {
          _this2.onMove();
        }
      });
    }
  }, {
    key: "enterHandler",
    value: function enterHandler() {
      var _this3 = this;
      angular.element(document).on("keydown keypress", function (event) {
        if (event.which !== 13) {
          return;
        }
        _this3.doContinue();
        _this3.$scope.$applyAsync();
        event.preventDefault();
      });
    }
  }, {
    key: "onMove",
    value: function onMove() {
      if (this.isLinked) {
        var authName = this.idp == "esia" ? "портала Госуслуг" : "Мобильный ID ИРТех";
        this.navigationNotificationService.addNotification(this.language.Generic.Common.kIdpAccountIsLinked.replace("{0}", authName));
      }
      this.doContinue();
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.userDetails = this.idpResponse.userDetails;
      this.ready = true;
      this.$appLoader.hide();
      this.$scope.$applyAsync();
      if (this.isLinked) {
        this.$dialogs.message(this.language.Generic.Common.kIdpAccountIsLinked.replace("{0}", this.idpInfo.title));
      }
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      var request = {};
      if (this.userDetails.snils) {
        request.snils = this.userDetails.snils;
      }
      if (this.mpChecked && this.userDetails.mobilePhone) {
        request.mobilePhone = this.userDetails.mobilePhone;
      }
      if (this.emChecked && this.userDetails.email) {
        request.email = this.userDetails.email;
      }
      this.checkIdpUserDetailsRepository.saveUserDetails(request).then(function () {
        _this4.doContinue();
      });
    }
  }, {
    key: "doContinue",
    value: function doContinue() {
      this.entryPageService.goToNextEntry();
    }
  }]);
  return CheckIdpUserDetailsController;
}();
var CheckIdpUserDetailsComponent = {
  controller: CheckIdpUserDetailsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/check-idp-user-details/check-idp-user-details.component.html"
};
exports.CheckIdpUserDetailsComponent = CheckIdpUserDetailsComponent;

/***/ })
/******/ ]);