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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
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
/* 41 */
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
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boolInput = _interopRequireDefault(__webpack_require__(109));
var _boolInputRow = _interopRequireDefault(__webpack_require__(110));
var _floatNumberInput = _interopRequireDefault(__webpack_require__(111));
var _floatSingleInput = _interopRequireDefault(__webpack_require__(112));
var _inputRow = _interopRequireDefault(__webpack_require__(113));
var _listInput = _interopRequireDefault(__webpack_require__(114));
var _numberInput = _interopRequireDefault(__webpack_require__(115));
var _textInput = _interopRequireDefault(__webpack_require__(116));
var _statForms = __webpack_require__(117);
var _fillingcontrol = __webpack_require__(118);
var _statForms2 = __webpack_require__(119);
var _page = __webpack_require__(120);
var _common = __webpack_require__(123);
var _importError = __webpack_require__(124);
var _repositories = __webpack_require__(40);
var _schools = __webpack_require__(125);
var _fillingStatus = __webpack_require__(126);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _module = angular.module("irtech.netcity.em.statforms", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
__webpack_require__(127);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/list/", _statForms.StatFormListComponent).when("/fillingstatus/", {
    templateUrl: _fillingStatus.StatFormsFillingStatusComponent.templateUrl,
    controller: _fillingStatus.StatFormsFillingStatusComponent.controller,
    controllerAs: _fillingStatus.StatFormsFillingStatusComponent.controllerAs
  }).when("/fillingcontrol/", {
    templateUrl: _fillingcontrol.StatFormsFillingControlComponent.templateUrl,
    controller: _fillingcontrol.StatFormsFillingControlComponent.controller,
    controllerAs: _fillingcontrol.StatFormsFillingControlComponent.controllerAs
  }).when("/export/", {
    templateUrl: "/static/dist/app/em/statForms/export/template.html",
    controller: "ExportStatFormsCtrl"
  }).when("/forms/:formId/", {
    templateUrl: "/static/dist/app/em/statForms/page/page.component.html",
    reloadOnSearch: false,
    controllerAs: "$ctrl",
    controller: "StatFormPageCtrl"
  }).otherwise(_statForms.StatFormListComponent);
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
_module.filter('trusted', function ($sce) {
  return function (html) {
    return $sce.trustAsHtml(_.unescape(html));
  };
});
_module.controller("StatFormPageCtrl", _page.StatFormPageCtrl).service("statFormsRepository", _statForms2.StatFormsRepository).service("yearRepository", _repositories.YearRepository).service("statFormImportService", _importError.StatFormImportService).service("referencesRepository", _repositories.ReferencesRepository).service("emsRepository", _schools.EmsRepository).directive("onlyDigits", _common.OnlyDigitsDirective).directive("nsFormSection", formSectionDirective).directive("nsFormBoolInput", _boolInput["default"]).directive("nsFormInputRow", _inputRow["default"]).directive("nsFormTextInput", _textInput["default"]).directive("nsFormBoolInputRow", _boolInputRow["default"]).directive("nsFormNumberInput", _numberInput["default"]).directive("nsFloatNumberInput", _floatNumberInput["default"]).directive("nsFloatSingleInput", _floatSingleInput["default"]).directive("nsFormListInput", _listInput["default"]).config(config);

/***/ }),
/* 109 */
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
/* 110 */
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
/* 111 */
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
/* 112 */
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
/* 113 */
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
/* 114 */
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
/* 115 */
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
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormListComponent = void 0;
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StatFormsListController = /*#__PURE__*/function () {
  function StatFormsListController($location, appContext, pageContext, $appLoader, $longWork, contextService, statFormsRepository, $dialogs, language) {
    var _this = this;
    _classCallCheck(this, StatFormsListController);
    this.$location = $location;
    this.appContext = appContext;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.statFormsRepository = statFormsRepository;
    this.$dialogs = $dialogs;
    this.language = language;
    this.data = {
      years: [],
      yearId: null,
      forms: []
    };
    this.state = {
      dataReady: false,
      emptyData: false
    };
    this.goToForm = function (link) {
      if (link == '') {
        _this.$dialogs.message(_this.language.Generic.ReportNames.kReportUnavailable);
        return;
      }
      (0, _common.postTo)(link);
    };
    // обрабатывает изменения фильтра Учебный год
    this.onYearChange = function () {
      var setYearId = _this.data.yearId;
      var work = _this.contextService.changeYear(setYearId).then(function () {
        _this.appContext.globalYearId = setYearId;
      }).then(function () {
        return _this.loadForms();
      });
      _this.$longWork.execute(work);
    };
    this.pageContext.parent = null;
    this.pageContext.back = null;
    this.pageContext.title = language.Generic.EMReportNames.kStatisticWatchingForm;
    this.data.yearId = this.appContext.globalYearId;
    this.load();
  }
  //переход в экран экспорта
  _createClass(StatFormsListController, [{
    key: "goExportStatForms",
    value: function goExportStatForms() {
      this.$location.path("/export/");
    }
  }, {
    key: "goControlStatFormsFilling",
    value: function goControlStatFormsFilling() {
      this.$location.path("/fillingcontrol/");
    }
  }, {
    key: "goStatusStatForms",
    value: function goStatusStatForms() {
      this.$location.path("/fillingstatus/");
    }
  }, {
    key: "loadForms",
    value: function loadForms() {
      var _this2 = this;
      var globalYearId = this.data.yearId;
      return this.statFormsRepository.getFormList(globalYearId).then(function (forms) {
        _this2.data.forms = forms;
      });
    }
  }, {
    key: "load",
    value:
    //загрузка данных
    function load() {
      var _this3 = this;
      var formListReady = this.loadForms();
      var yearsReady = this.statFormsRepository.getYears().then(function (years) {
        _this3.data.years = years;
      });
      var collectionsReady = Promise.all([yearsReady, formListReady]);
      collectionsReady.then(function () {
        _this3.state.dataReady = false;
        _this3.$appLoader.hide();
      });
    }
  }]);
  return StatFormsListController;
}();
var StatFormListComponent = {
  controller: StatFormsListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/statForms/list/statForms.component.html"
};
exports.StatFormListComponent = StatFormListComponent;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormsFillingControlComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StatFormsFillingControlController = /*#__PURE__*/function () {
  StatFormsFillingControlController.$inject = ["$location", "appContext", "pageContext", "$appLoader", "$longWork", "contextService", "statFormsRepository", "$dialogs", "language", "$scope"];
  /*@ngInject*/
  function StatFormsFillingControlController($location, appContext, pageContext, $appLoader, $longWork, contextService, statFormsRepository, $dialogs, language, $scope) {
    _classCallCheck(this, StatFormsFillingControlController);
    this.$location = $location;
    this.appContext = appContext;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.statFormsRepository = statFormsRepository;
    this.$dialogs = $dialogs;
    this.language = language;
    this.$scope = $scope;
    this.state = {
      dataReady: false,
      emptyData: false,
      emptyFpData: false
    };
    this.pageContext.parent = {
      title: language.Generic.EMReportNames.kStatisticWatchingForm,
      href: "/"
    };
    this.pageContext.title = language.Generic.EMReportNames.kFillingControl;
    this.filterPanel = null;
    this.init();
  }
  _createClass(StatFormsFillingControlController, [{
    key: "generate",
    value: function generate() {
      var values = this.filterPanel.getValues();
      if (values.ReportViewType == "2") {
        var yearId = values.YEAR;
        var formId = values.STATFORMID;
        var sectionId = values.STATFORMSECTIONID;
        var crossBy = values.CROSSBY;
        var dimensionId = values.FORMDIMENSIONSFILTER;
        this.statFormsRepository.generateDetailedFillingReport(yearId, formId, sectionId, crossBy, dimensionId);
      } else {
        var _yearId = values.YEAR;
        var formId = values.STATFORMID;
        var firstLevelSection = values.STATFORMFIRSTLEVELSECTIONIDALL;
        this.statFormsRepository.generateShortFillingReport(_yearId, formId, firstLevelSection);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.filterPanelSettings = {
        url: "/webapi/em/statforms/control/filter",
        initUrl: "/webapi/em/statforms/control/initfilters",
        events: {
          ready: function ready() {
            _this.$appLoader.hide();
            _this.state.emptyData = true;
            _this.state.dataReady = true;
            _this.$scope.$applyAsync();
          },
          emptyChoice: function emptyChoice() {
            _this.$appLoader.hide();
            _this.state.emptyData = true;
            _this.state.dataReady = false;
            _this.$scope.$applyAsync();
          }
        }
      };
    }
  }]);
  return StatFormsFillingControlController;
}();
var StatFormsFillingControlComponent = {
  controller: StatFormsFillingControlController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/statForms/fillingcontrol/fillingcontrol.component.html"
};
exports.StatFormsFillingControlComponent = StatFormsFillingControlComponent;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormsRepository = void 0;
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
var StatFormsRepository = /*#__PURE__*/function (_BaseRepository) {
  StatFormsRepository.$inject = ["$http", "$dialogs", "$alerts", "$longWork", "downloadService"];
  _inherits(StatFormsRepository, _BaseRepository);
  var _super = _createSuper(StatFormsRepository);
  /*@ngInject*/
  function StatFormsRepository($http, $dialogs, $alerts, $longWork, downloadService) {
    var _this;
    _classCallCheck(this, StatFormsRepository);
    _this = _super.call(this, $http, $dialogs, $alerts);
    _this.$longWork = $longWork;
    _this.downloadService = downloadService;
    return _this;
  }
  _createClass(StatFormsRepository, [{
    key: "getFormList",
    value: function getFormList(globalYearId) {
      return this.$http.get("/webapi/em/statForms/list", {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
    // возвращает коллекцию годов
  }, {
    key: "getYears",
    value: function getYears() {
      return this.$http.get("/webapi/em/years").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportForm",
    value: function exportForm(emId, yearId, formId) {
      var isMns = false;
      var url = "/webapi/em/statForms/export";
      var params = {
        emId: emId,
        globalYearId: yearId,
        form: formId,
        isMns: isMns
      };
      var work = this.downloadService.downloadFile(url, {
        method: "get",
        data: params
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "exportAggregateForm",
    value: function exportAggregateForm(emId, yearId, formId) {
      var formSpec = 0;
      var url = "/webapi/em/statForms/aggregate";
      var params = {
        emId: emId,
        globalYearId: yearId,
        form: formId,
        formSpec: formSpec
      };
      var work = this.downloadService.downloadFile(url, {
        method: "get",
        data: params
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "exportSigleForm",
    value: function exportSigleForm(emId, yearId, formId) {
      var url = "/webapi/em/statforms/".concat(formId, "/export/?emId=").concat(emId, "&globalYearId=").concat(yearId);
      var work = this.downloadService.downloadFile(url, {
        method: "get"
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "import",
    value: function _import(emId, globalYearId, formId) {
      return this.$http.get("/webapi/em/statforms/".concat(formId, "/import"), {
        params: {
          emId: emId,
          globalYearId: globalYearId
        }
      })["catch"](this.handleError);
    }
  }, {
    key: "getFillingInfo",
    value: function getFillingInfo(yearId, formId) {
      //todo. реализовать загрузку
    }
  }, {
    key: "generateDetailedFillingReport",
    value: function generateDetailedFillingReport(yearId, formId, sectionId, crossBy, dimensionId) {
      var url = "/webapi/em/statForms/control/generate-detailed-report";
      var params = {
        yearId: yearId,
        form: formId,
        sectionId: sectionId,
        crossBy: crossBy,
        dimensionId: dimensionId
      };
      var work = this.downloadService.downloadFile(url, {
        method: "post",
        data: params
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "generateShortFillingReport",
    value: function generateShortFillingReport(yearId, formId, firstLevelSection) {
      var url = "/webapi/em/statForms/control/generate-short-report";
      var params = {
        yearId: yearId,
        form: formId,
        firstLevelSection: firstLevelSection
      };
      var work = this.downloadService.downloadFile(url, {
        method: "post",
        data: params
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "getPageList",
    value: function getPageList(formId, globalYearId) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/pages"), {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPageInfo",
    value: function getPageInfo(formId, globalYearId, pageNum) {
      return this.$http.get("/webapi/schools/statforms/".concat(formId, "/page"), {
        params: {
          globalYearId: globalYearId,
          pageNum: pageNum
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPageData",
    value: function getPageData(formId, emId, globalYearId, pageNum) {
      return this.$http.get("/webapi/em/statforms/".concat(formId, "/data"), {
        params: {
          emId: emId,
          globalYearId: globalYearId,
          pageNum: pageNum
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "savePageData",
    value: function savePageData(formId, emId, globalYearId, pageNum, data) {
      var params = {
        emId: emId,
        globalYearId: globalYearId,
        pageNum: pageNum
      };
      return this.$http.post("/webapi/em/statforms/".concat(formId, "/data"), data, {
        params: params
      })["catch"](this.handleError);
    }
  }, {
    key: "setStatFormInfoOpen",
    value: function setStatFormInfoOpen(statformId, year, mns, schoolIds) {
      var params = {
        year: year,
        mns: mns,
        schoolIds: schoolIds
      };
      return this.$http.post("/webapi/em/schools/statforms/".concat(statformId, "/open"), params).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStatFormInfo",
    value: function getStatFormInfo(statformId, params) {
      return this.$http.get("/webapi/em/schools/statforms/".concat(statformId, "/fillingInfo"), {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return StatFormsRepository;
}(_repository.BaseRepository);
exports.StatFormsRepository = StatFormsRepository;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormPageCtrl = exports.SectionTableProcessor = void 0;
var _tableProcessor = __webpack_require__(121);
var _common = __webpack_require__(3);
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
var StatFormPageCtrl = /*#__PURE__*/function () {
  StatFormPageCtrl.$inject = ["language", "$scope", "pageContext", "appContext", "statFormsRepository", "yearRepository", "referencesRepository", "emsRepository", "$routeParams", "$appLoader", "$http", "$alerts", "$location", "$q", "$dialogs", "changeTracker", "statFormImportService", "$longWork"];
  /*@ngInject*/
  function StatFormPageCtrl(language, $scope, pageContext,
  //appContext: AppContext,
  appContext, statFormsRepository, yearRepository, referencesRepository, emsRepository, $routeParams, $appLoader, $http, $alerts, $location, $q, $dialogs, changeTracker, statFormImportService, $longWork) {
    _classCallCheck(this, StatFormPageCtrl);
    this.language = language;
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.statFormsRepository = statFormsRepository;
    this.yearRepository = yearRepository;
    this.referencesRepository = referencesRepository;
    this.emsRepository = emsRepository;
    this.$appLoader = $appLoader;
    this.$http = $http;
    this.$alerts = $alerts;
    this.$location = $location;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.changeTracker = changeTracker;
    this.statFormImportService = statFormImportService;
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
    this.emId = search && search.emId || appContext.emId;
    this.fullSchoolName = appContext.fullSchoolName;
    this.schoolData = {
      schoolInfoValues: null,
      fullSchoolName: this.fullSchoolName,
      globalYearId: this.globalYearId,
      currYearStart: null,
      currYearEnd: null
    };
    this.data = {
      years: null,
      childEms: null,
      currentEm: null
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
  }, {
    key: "changeEm",
    value: function changeEm() {
      var _this2 = this;
      this.$appLoader.show();
      this.$location.search("emId", this.emId);
      this.load().then(function () {
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "changeYear",
    value: function changeYear() {
      (0, _common.postTo)("/asp/EDUC_MANAGER/Reports/StatForms/ChangeYear.asp", {
        FORMID: this.formNum,
        CMNYEARID: this.globalYearId,
        FS: 0
      });
    }
    //загрузка данных страницы
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var sections = [];
      var loader = new SectionDataLoader(this.$http);
      var preparePageInfo = this.statFormsRepository.getPageInfo(this.formId, this.globalYearId, this.pageNum).then(function (pageInfo) {
        _this3.pageInfo = pageInfo;
        // Если выбрано подчиненное УО в фильтре, то включаем readonly режим
        if (_this3.emId !== _this3.appContext.emId) {
          _this3.pageInfo.readOnly = true;
        }
      }).then(function () {
        _this3.pageContext.title = _this3.pageInfo.formName;
        var promises = [];
        sections = angular.copy(_this3.pageInfo.sections);
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
      var loadPageData = this.statFormsRepository.getPageData(this.formId, this.emId, this.globalYearId, this.pageNum).then(function (pageData) {
        return _this3.pageData = pageData;
      });
      return Promise.all([loadPageData, preparePageInfo]).then(function () {
        var _iterator2 = _createForOfIteratorHelper(sections),
          _step2;
        try {
          var _loop = function _loop() {
            var section = _step2.value;
            section.readOnly = _this3.pageInfo.readOnly;
            section.data = _this3.pageData.filter(function (d) {
              if (d.sectionPoint) {
                return d.sectionPoint === section.number;
              }
              return d.sectionNum.toString() === section.number;
            });
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        _this3.sections = sections;
        _this3.$scope.$apply();
        _this3.changeTracker.clearDataChanges();
        _this3.$appLoader.hide();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      this.load().then(function () {
        return _this4.$alerts.success(_this4.language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "clean",
    value: function clean() {
      this.sections.forEach(function (section) {
        return section.processor.clean();
      });
      this.$scope.$broadcast('cells_clean', {
        clean: true
      });
      this.$alerts.success("Разделы очищены");
    }
    // сохранение изменений
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      if (this.valid()) {
        var data = _.chain(this.sections).pluck("data").flatten().value();
        var savePromise = this.statFormsRepository.savePageData(this.formId, this.emId, this.globalYearId, this.pageNum, data).then(function () {
          _this5.changeTracker.clearDataChanges();
          _this5.$alerts.success(_this5.language.Generic.Common.kDataSaved);
        });
        this.$longWork.execute(savePromise);
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
    //импорт формы
  }, {
    key: "import",
    value: function _import() {
      this.statFormImportService["import"](this.formId, this.globalYearId, this.emId);
    }
    // экспорт формы
  }, {
    key: "export",
    value: function _export() {
      var exportPromise = this.statFormsRepository.exportSigleForm(this.emId, this.globalYearId, this.formId);
      this.$longWork.execute(exportPromise);
    }
  }, {
    key: "print",
    value: function print() {
      angular.element(".print-block").printUtils().toPrint();
    }
  }, {
    key: "init",
    value: function init() {
      var _this6 = this;
      var preparePageList = this.statFormsRepository.getPageList(this.formId, this.globalYearId).then(function (pageList) {
        _this6.pageList = pageList;
      }).then(function () {
        _this6.page = _.findWhere(_this6.pageList, {
          id: _this6.pageNum
        });
      });
      var loadGlobalYearData = this.yearRepository.getGlobalYearInfo(this.globalYearId).then(function (yearData) {
        _this6.schoolData.currYearStart = new Date(yearData.startDate).getFullYear().toString();
        _this6.schoolData.currYearEnd = new Date(yearData.endDate).getFullYear().toString();
      });
      var loadYears = this.statFormsRepository.getYears().then(function (years) {
        var minGlobalYear = _this6.getMinGlobalYear();
        if (minGlobalYear !== -1) {
          _this6.data.years = years.filter(function (year) {
            return year.id >= minGlobalYear;
          });
          return;
        }
        _this6.data.years = years;
      });
      var loadStatFormsTypes = this.referencesRepository.getStatFormTypes().then(function (statFormsTypes) {
        var statForm = statFormsTypes.find(function (form) {
          return form.key.toLowerCase() === _this6.formId;
        });
        _this6.formNum = statForm.id;
      });
      // Грузить данные о дочерних УО на основе текущего УО а не выбранного в select-е
      var loadChildEms = this.emsRepository.getChildEducManagments(this.appContext.emId).then(function (childEms) {
        var topEm = childEms.find(function (em) {
          return em.id == _this6.appContext.emId;
        });
        if (childEms.length > 1) {
          topEm.name = "<".concat(topEm.name, ">");
        }
        _this6.data.currentEm = childEms.find(function (em) {
          return em.id == _this6.emId;
        });
        _this6.data.childEms = childEms;
      });
      var pageInit = this.load();
      Promise.all([pageInit, preparePageList, loadGlobalYearData, loadYears, loadStatFormsTypes, loadChildEms]).then(function () {
        _this6.$appLoader.hide();
      });
    }
    // Отрисовывать ли кнопки сохранения, удаления и востановления на титульном листе
    // т.к. у Рик-103 есть поля для ввода и нужно показывать кнопки
  }, {
    key: "showButtonsInTitle",
    value: function showButtonsInTitle() {
      if (this.formId == 'rik103' && this.page && this.page.id == 1) {
        return true;
      }
      return this.page && this.page.id != 1;
    }
  }, {
    key: "getMinGlobalYear",
    value: function getMinGlobalYear() {
      if (this.formId === 'rik103') return 12;
      return -1;
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
    this.templateDir = "/static/dist/app/em/statforms/templates/";
  }
  _createClass(SectionDataLoader, [{
    key: "loadData",
    value: function loadData(section) {
      var _this7 = this;
      var teplateUrl = this.templateDir + section.templatePath;
      var promises = [];
      //загрузка шаблона
      var prepareTemplate = new Promise(function (resolve) {
        _this7.$http({
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
        _this7.$http.get(settingsPath).then(function (response) {
          var settings = response.data;
          if (settings) {
            _this7.expandRanges(settings);
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
  }]);
  return SectionTableProcessor;
}(_tableProcessor.TableProcessor);
exports.SectionTableProcessor = SectionTableProcessor;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProcessor = void 0;
var _numberUtils = __webpack_require__(122);
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
      } else if (rule.type === "bool1any") {
        this.checkBoolIsOneThenAnyColCell(rule);
      } else if (rule.type === "eqany") {
        this.checkEqAnyColCell(rule);
      } else if (rule.type === "cell") {
        this.checkColCell(rule);
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
      } else if (rule.type === "bool1any") {
        this.checkBoolIsOneThenAnyRowCell(rule);
      } else if (rule.type === "eqany") {
        this.checkEqAnyRowCell(rule);
      } else if (rule.type === "cell") {
        this.checkRowCell(rule);
      }
      // исключения для формы Рик-103
      else if (rule.type === "sumFor103RicSec1Row31") {
        this.sumFor103RicSec1Row31(rule);
      } else if (rule.type === "sumFor103RicSec1Row36") {
        this.sumFor103RicSec1Row36(rule);
      } else if (rule.type === "sumFor103RicSec2Row39") {
        this.sumFor103RicSec2Row39(rule);
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
    // проверка суммы столбцов на нестрогое равенство значению "общей" ячейки
  }, {
    key: "checkIncludeColCell",
    value: function checkIncludeColCell(includeTotalCol) {
      var rows = includeTotalCol.rows || this.allRows;
      var _iterator16 = _createForOfIteratorHelper(rows),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var row = _step16.value;
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
            var _iterator17 = _createForOfIteratorHelper(includeTotalCol.subCols),
              _step17;
            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var ofCol = _step17.value;
                var subCell = this.getCell(ofCol, row);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  }, {
    key: "checkIncludeRowCell",
    value: function checkIncludeRowCell(includeTotalRow) {
      var cols = includeTotalRow.cols || this.allCols;
      var _iterator18 = _createForOfIteratorHelper(cols),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var col = _step18.value;
          var totalCell = this.getCell(col, includeTotalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          var checkValue = this.getColSum(col, includeTotalRow.subRows);
          ;
          //иначе проверяем сумму строк на равенство
          if (checkValue > totalValue) {
            subCellsStatus = "overflow";
            totalCellStatus = "invalid";
          }
          if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          if (subCellsStatus !== "valid") {
            var _iterator19 = _createForOfIteratorHelper(includeTotalRow.subRows),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var ofRow = _step19.value;
                var subCell = this.getCell(col, ofRow);
                this.onChangeCellStatus(subCell, subCellsStatus);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
  }, {
    key: "checkSumIncludeColCell",
    value: function checkSumIncludeColCell(sumIncludeTotalCol) {
      var rows = sumIncludeTotalCol.rows || this.allRows;
      var _iterator20 = _createForOfIteratorHelper(rows),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var row = _step20.value;
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
            var _iterator21 = _createForOfIteratorHelper(sumIncludeTotalCol.subCols),
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
    key: "checkSumIncludeRowCell",
    value: function checkSumIncludeRowCell(sumIncludeTotalRow) {
      var cols = sumIncludeTotalRow.cols || this.allCols;
      var _iterator22 = _createForOfIteratorHelper(cols),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var col = _step22.value;
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
            var _iterator23 = _createForOfIteratorHelper(sumIncludeTotalRow.subRows),
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
    key: "checkBoolRowCell",
    value: function checkBoolRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator24 = _createForOfIteratorHelper(cols),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var col = _step24.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator25 = _createForOfIteratorHelper(totalRow.subRows),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _ofRow = _step25.value;
                var subCellValue = this.getCell(col, _ofRow).cellValue;
                if (!(subCellValue == '0' || subCellValue == '2')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator26 = _createForOfIteratorHelper(totalRow.subRows),
                _step26;
              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var ofRow = _step26.value;
                  var subCell = this.getCell(col, ofRow);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
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
    key: "checkBoolColCell",
    value: function checkBoolColCell(totalCol) {
      var rows = totalCol.rows || this.allRows;
      var _iterator27 = _createForOfIteratorHelper(rows),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var row = _step27.value;
          var totalCell = this.getCell(totalCol.col, row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "valid";
          var subCellsStatus = "valid";
          if (totalValue == '1') {
            var _iterator28 = _createForOfIteratorHelper(totalCol.subCols),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _ofCol = _step28.value;
                var subCellValue = this.getCell(_ofCol, row).cellValue;
                if (!(subCellValue == '0' || subCellValue == '2')) {
                  subCellsStatus = "overflow";
                  totalCellStatus = "invalid";
                }
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
            if (subCellsStatus !== "valid") {
              var _iterator29 = _createForOfIteratorHelper(totalCol.subCols),
                _step29;
              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var ofCol = _step29.value;
                  var subCell = this.getCell(ofCol, row);
                  this.onChangeCellStatus(subCell, subCellsStatus);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenAnyRowCell",
    value: function checkBoolIsOneThenAnyRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator30 = _createForOfIteratorHelper(cols),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var col = _step30.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "invalid";
          if (totalValue == '1') {
            var _iterator31 = _createForOfIteratorHelper(totalRow.subRows),
              _step31;
            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var ofRow = _step31.value;
                var subCellValue = this.getCell(col, ofRow).cellValue;
                if (!(subCellValue == null || subCellValue == '' || subCellValue == '0' || subCellValue == '2')) {
                  totalCellStatus = "valid";
                  return;
                }
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }, {
    key: "checkBoolIsOneThenAnyColCell",
    value: function checkBoolIsOneThenAnyColCell(totalCol) {
      var rows = totalCol.rows || this.allRows;
      var _iterator32 = _createForOfIteratorHelper(rows),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var row = _step32.value;
          var totalCell = this.getCell(totalCol.col, row);
          var totalValue = totalCell.cellValue;
          var totalCellStatus = "invalid";
          if (totalValue == '1') {
            var _iterator33 = _createForOfIteratorHelper(totalCol.subCols),
              _step33;
            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var ofCol = _step33.value;
                var subCellValue = this.getCell(ofCol, row).cellValue;
                if (!(subCellValue == '' || subCellValue == '0' || subCellValue == '2')) {
                  totalCellStatus = "valid";
                  return;
                }
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
            if (totalCellStatus !== "valid") this.onChangeCellStatus(totalCell, totalCellStatus);
          }
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }
  }, {
    key: "checkRowCell",
    value: function checkRowCell(totalRow) {
      var cols = totalRow.cols || this.allCols;
      var _iterator34 = _createForOfIteratorHelper(cols),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var col = _step34.value;
          var totalCell = this.getCell(col, totalRow.row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator35 = _createForOfIteratorHelper(totalRow.subRows),
            _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var ofRow = _step35.value;
              var subCell = this.getCell(col, ofRow);
              var subCellValue = parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0);
              if (subCellValue > totalValue) {
                this.onChangeCellStatus(totalCell, "invalid");
                this.onChangeCellStatus(subCell, "overflow");
              }
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
  }, {
    key: "checkColCell",
    value: function checkColCell(totalRow) {
      var rows = totalRow.rows || this.allRows;
      var _iterator36 = _createForOfIteratorHelper(rows),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var row = _step36.value;
          var totalCell = this.getCell(totalRow.col, row);
          var totalValue = parseFloat(TableProcessor.fixCommaSign(totalCell.cellValue) || 0);
          var _iterator37 = _createForOfIteratorHelper(totalRow.subCols),
            _step37;
          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var ofCol = _step37.value;
              var subCell = this.getCell(ofCol, row);
              var subCellValue = parseFloat(TableProcessor.fixCommaSign(subCell.cellValue) || 0);
              if (subCellValue > totalValue) {
                this.onChangeCellStatus(totalCell, "invalid");
                this.onChangeCellStatus(subCell, "overflow");
              }
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    }
  }, {
    key: "sumFor103RicSec1Row31",
    value: function sumFor103RicSec1Row31(rule) {
      var sumRowIndex = 31;
      var colIndex = 3;
      var sum = this.getCell(colIndex, 6).cellValue - (this.getCell(colIndex, 7).cellValue + this.getCell(colIndex, 8).cellValue + this.getCell(colIndex, 9).cellValue + this.getCell(colIndex, 10).cellValue + this.getCell(colIndex, 11).cellValue + this.getCell(colIndex, 13).cellValue + this.getCell(colIndex, 20).cellValue + this.getCell(colIndex, 26).cellValue + this.getCell(colIndex, 27).cellValue + this.getCell(colIndex, 28).cellValue + this.getCell(colIndex, 29).cellValue + this.getCell(colIndex, 30).cellValue);
      var elem = this.getCell(colIndex, sumRowIndex);
      elem.cellValue = sum;
      if (elem.input) {
        elem.input.value = sum;
      }
    }
  }, {
    key: "sumFor103RicSec1Row36",
    value: function sumFor103RicSec1Row36(rule) {}
  }, {
    key: "sumFor103RicSec2Row39",
    value: function sumFor103RicSec2Row39(rule) {}
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
/* 122 */
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
/* 123 */
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
/* 124 */
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
    value: function _import(formId, globalYearId) {
      var _this = this;
      var emId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var options = {
        url: "/webapi/em/statforms/".concat(formId, "/validate?emId=").concat(emId, "&globalYearId=").concat(globalYearId),
        fileExts: function fileExts() {
          return ["xls"];
        }
      };
      this.$dialogs.uploadFile(this.language.Generic.Common.kSelectFile, options).then(function (uploadResult) {
        var errors = uploadResult.result;
        if (errors.length) {
          return _this.showErrorDialog(errors);
        }
        return Promise.resolve();
      }).then(function (result) {
        var importPromise = _this.statFormsRepository["import"](emId, globalYearId, formId);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolsRepository = exports.EmsRepository = void 0;
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
var SchoolsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SchoolsRepository, _BaseRepository);
  var _super = _createSuper(SchoolsRepository);
  function SchoolsRepository() {
    _classCallCheck(this, SchoolsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolsRepository, [{
    key: "getSchoolInfo",
    value: function getSchoolInfo(id) {
      return this.$http.get("/webapi/schools/" + id).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolEducOrgInfo",
    value: function getSchoolEducOrgInfo(id) {
      return this.$http.get("/webapi/schools/" + id + "/educorg").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolAddressedName",
    value: function getSchoolAddressedName(id) {
      return this.$http.get("/webapi/schools/" + id + "/getAddressedName").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "searchSchools",
    value: function searchSchools(filter) {
      return this.$http.get("/webapi/schools/search", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createSchool",
    value: function createSchool(dto) {
      return this.$http.put("/webapi/schools", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchool",
    value: function editSchool(dto) {
      return this.$http.post("/webapi/schools", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchoolEducOrg",
    value: function editSchoolEducOrg(dto) {
      return this.$http.post("/webapi/schoolseducorg", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolAdmins",
    value: function getSchoolAdmins(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/admins")).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SchoolsRepository;
}(_repository.BaseRepository);
exports.SchoolsRepository = SchoolsRepository;
var EmsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(EmsRepository, _BaseRepository2);
  var _super2 = _createSuper(EmsRepository);
  function EmsRepository() {
    _classCallCheck(this, EmsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(EmsRepository, [{
    key: "getAuthorities",
    value: function getAuthorities(schoolId, emId) {
      return this.$http.get("/webapi/em/authorities", {
        params: {
          schoolId: schoolId,
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEmHierarchy",
    value: function getEmHierarchy(cityId) {
      return this.$http.get("/webapi/educmanagements/hierarchy", {
        params: {
          cityId: cityId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getChildEducManagments",
    value: function getChildEducManagments(emId) {
      return this.$http.get("/webapi/educmanagements/childs", {
        params: {
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFounders",
    value: function getFounders(cityId) {
      var params = {};
      if (cityId) {
        params = {
          cityId: cityId
        };
      }
      return this.$http.get("/webapi/founders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPossibleParentFounders",
    value: function getPossibleParentFounders(level, stateId, cityId, founderId) {
      var params = {
        nHLevel: level !== null && level !== void 0 ? level : "",
        nStateID: stateId,
        nCityID: cityId !== null && cityId !== void 0 ? cityId : 0,
        nFounderID: founderId
      };
      return this.$http.get("/webapi/possibleParentFounders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEmAdmins",
    value: function getEmAdmins(emId) {
      return this.$http.get("/webapi/ems/".concat(emId, "/admins")).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return EmsRepository;
}(_repository.BaseRepository);
exports.EmsRepository = EmsRepository;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatFormsFillingStatusComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(28));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StatFormsFillingStatusController = /*#__PURE__*/function () {
  StatFormsFillingStatusController.$inject = ["pageContext", "$appLoader", "language", "$scope", "statFormsRepository"];
  /*@ngInject*/
  function StatFormsFillingStatusController(pageContext, $appLoader, language, $scope, statFormsRepository) {
    _classCallCheck(this, StatFormsFillingStatusController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.language = language;
    this.$scope = $scope;
    this.statFormsRepository = statFormsRepository;
    this.state = {
      dataReady: false,
      emptyData: false,
      emptyFpData: false
    };
    this.data = {
      yearId: null,
      formId: null
    };
    this.selected = new _multiSelectable["default"]();
    this.statFormInfo = [];
    this.forEditing = false;
    this.statFormInfoPanelView = false;
    this.container = $('#statFormInfoPanel');
    this.toEditButton = $("#openToEditButton");
    this.preparePrint = function (printBlock, copyBlock) {
      $('.alert-info', copyBlock).remove();
    };
    this.printOptions = {
      viewHeader: true,
      processingFunc: [this.preparePrint]
    };
    this.pageContext.parent = {
      title: language.Generic.EMReportNames.kStatisticWatchingForm,
      href: "/"
    };
    this.pageContext.title = language.Generic.EMReportNames.kFillingStatus;
    this.filterPanel = null;
    this.init();
  }
  _createClass(StatFormsFillingStatusController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.filterPanelSettings = {
        url: "/webapi/em/schools/statforms/fillingInfo/filterPanel",
        styles: {
          compact: false
        },
        events: {
          ready: function ready() {
            _this.$appLoader.hide();
            _this.state.emptyData = true;
            _this.state.dataReady = true;
            _this.$scope.$applyAsync();
          },
          emptyChoice: function emptyChoice() {
            _this.$appLoader.hide();
            _this.state.emptyData = true;
            _this.state.dataReady = false;
            _this.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "browseStatFormInfo",
    value: function browseStatFormInfo() {
      var _this2 = this;
      var values = this.filterPanel.getValues();
      var statFormId = values.STATFORMID;
      var params = {
        emId: values.EMID,
        provinceId: values.PROVINCEID,
        cityId: values.CITYID,
        year: values.YEAR,
        eoType: values.EOTYPEID,
        mns: values.MNS ? parseInt(values.MNS[0]) : false,
        onlyOpened: values.ONLYOPENED.length > 0
      };
      this.statFormsRepository.getStatFormInfo(statFormId, params).then(function (statFormInfo) {
        _this2.statFormInfo = statFormInfo;
      }).then(function () {
        _this2.buildStatFormInfoView(_this2.statFormInfo);
      });
    }
  }, {
    key: "reopenForms",
    value: function reopenForms() {
      var _this3 = this;
      var values = this.filterPanel.getValues();
      var statFormId = values.STATFORMID;
      if (this.selected.items.length == 0) {
        return alert(this.language.Generic.EMReports.kErrSchoolsForOpeningFormNotSelected);
      }
      var yearId = values.YEAR;
      var mns = values.MNS ? parseInt(values.MNS[0]) : false;
      var schoolIds = this.selected.items;
      this.statFormsRepository.setStatFormInfoOpen(statFormId, yearId, mns, schoolIds).then(function () {
        _this3.statFormInfoPanelView = false;
        _this3.browseStatFormInfo();
      }).then(function () {
        _this3.buildStatFormInfoView(_this3.statFormInfo);
      });
    }
  }, {
    key: "openToEdit",
    value: function openToEdit() {
      this.forEditing = true;
      this.statFormInfoPanelView = true;
      ;
    }
  }, {
    key: "print",
    value: function print() {
      this.container.printUtils().toPrint(this.printOptions);
    }
  }, {
    key: "export",
    value: function _export() {
      this.container.printUtils().toExcel(this.printOptions);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.forEditing = false;
      this.statFormInfoPanelView = false;
    }
  }, {
    key: "getForEditing",
    value: function getForEditing() {
      return this.forEditing;
    }
  }, {
    key: "getSchoolStatus",
    value: function getSchoolStatus(status) {
      if (status) {
        return this.language.Generic.Common.kClosed;
      } else {
        return this.language.Generic.Common.kOpened;
      }
    }
  }, {
    key: "getStatFormInfoPanelView",
    value: function getStatFormInfoPanelView() {
      return this.statFormInfoPanelView;
    }
  }, {
    key: "buildStatFormInfoView",
    value: function buildStatFormInfoView(statFormInfo) {
      if (statFormInfo.length == 0) {
        this.container.hide();
        this.toEditButton.hide();
        alert(this.language.Generic.Common.kNoDetails);
        return;
      }
      this.toEditButton.show();
      this.statFormInfoPanelView = true;
    }
  }]);
  return StatFormsFillingStatusController;
}();
var StatFormsFillingStatusComponent = {
  controller: StatFormsFillingStatusController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/statForms/fillingstatus/fillingStatus.component.html"
};
exports.StatFormsFillingStatusComponent = StatFormsFillingStatusComponent;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _filters = __webpack_require__(128);
angular.module("irtech.netcity.em.statforms").controller("ExportStatFormsCtrl", function ($scope, $appLoader, $http, pageContext, downloadService) {
  pageContext.parent = {
    title: language.Generic.EMReportNames.kStatisticWatchingForm,
    href: "/"
  };
  pageContext.title = language.Generic.EMReportNames.kReportExportStatForms;
  $.extend($scope, {
    state: {
      filterChanged: false,
      dataReady: false,
      emptyData: false
    },
    data: {
      yearId: null,
      formId: null
    },
    filterInfo: {
      filterPanel: null
    }
  });

  // todo. реализация фильтр-панели
  var fpUrl = "/webapi/em/statforms/export/filter";
  var fpInitUrl = "/webapi/em/statforms/export/initfilters";
  $http.get(fpUrl).then(function (response) {
    var fpInfo = response.data.filterPanel;
    var fpSources = response.data.filterSources;
    var fltPanel = $(".filters-panel");
    $scope.filterInfo.filterPanel = new _filters.filterPanel(fltPanel, fpInfo, fpSources, fpInitUrl);
    $appLoader.hide();
  });
  var getExportParams = function getExportParams() {
    var fp = $scope.filterInfo.filterPanel;
    var yearId = fp.getValues().YEAR;
    var formId = fp.getValues().STATFORMID;
    var emId = appContext.emId;
    var params = {
      emId: emId,
      globalYearId: yearId,
      form: formId
    };
    return params;
  };
  var download = function download(url, params) {
    var processing = $.show.processing();
    downloadService.downloadFile("".concat(url, "?").concat($.param(params))).then(function () {
      processing.close();
    })["catch"](function () {
      return processing.close();
    });
  };
  $scope.exportAggregateForm = function () {
    var params = getExportParams();
    params.formSpec = 0;
    download("/webapi/em/statforms/aggregate", params);
  };
  $scope.exportForm = function () {
    var params = getExportParams();
    params.isMns = false;
    download("/webapi/em/statforms/export", params);
  };
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var checksFilter, checksFilter2, dateFilter, dateRange, dateRangeFilter, dependencyTracker, filter, filterPanel, fpStatus, listFilter, listFilter2, listRangeFilter, listWithArrowsFilter, textFilter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

fpStatus = {
  init: "init",
  emptyChoice: "emptyChoice",
  ready: "ready"
};

filterPanel = (function() {
  var template;

  template = '<div class="filters-panel form-horizontal"></div>';

  function filterPanel(container, model, sources, filterPanelHandlers, buttonsPanel, listContainer, lazyInit, checkChanges, filterSize1) {
    this.container = container;
    this.model = model;
    this.sources = sources;
    this.filterPanelHandlers = filterPanelHandlers;
    this.buttonsPanel = buttonsPanel;
    this.listContainer = listContainer;
    this.checkChanges = checkChanges;
    this.filterSize = filterSize1;
    this.filters = [];
    this.handlers_ready = [];
    this.handlers_init = [];
    this.handlers_emptyChoice = [];
    this.filterSize = this.filterSize || {};
    this.filterSize.label = this.filterSize.label || "control-label col-md-4 col-lg-3 col-sm-4";
    this.filterSize.control = this.filterSize.control || "col-md-8 col-lg-5 col-sm-8";
    if (this.buttonsPanel) {
      this.handlers_init.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            return _this.listContainer.html('<div class="col-md-12 alert alert-info" role="alert">' + language.Generic.Movement.kMsgApplyBtnClick + '</div>');
          }
        };
      })(this));
      this.handlers_ready.push((function(_this) {
        return function() {
          _this.buttonsPanel.show();
          if (window.buttonsPanelCtrl) {
            return window.buttonsPanelCtrl.init();
          }
        };
      })(this));
      this.handlers_emptyChoice.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            _this.listContainer.html('<div class="col-md-12 alert alert-danger" role="alert">' + language.Generic.Movement.kMsgNoChoice + '</div>');
          }
        };
      })(this));
    }
    if (this.container.hasClass("filters-panel")) {
      this.panel = this.container;
    } else {
      this.panel = $(template);
      this.container.append(this.panel);
    }
    if (!lazyInit) {
      this.initPanel();
    }
  }

  filterPanel.prototype.initPanel = function() {
    var active, ctor, filterCtrl, filterModel, filterSource, i, len, ref, satisfied;
    this.changeStatus(fpStatus.init);
    if (this.model === null) {
      $.show.error("Ошибка инициализации фильтр-панели. Модель не заполнена.");
      return;
    }
    ref = _.sortBy(this.model.filters, function(item) {
      return item.order;
    });
    for (i = 0, len = ref.length; i < len; i++) {
      filterModel = ref[i];
      active = true;
      filterSource = _.findWhere(this.sources, {
        filterId: filterModel.id
      });
      if (!filterSource) {
        active = false;
      }
      filterCtrl = null;
      ctor = null;
      switch (filterModel.filterType) {
        case "List2":
          ctor = listFilter2;
          break;
        case "List":
          ctor = listFilter;
          break;
        case "ListWithArrows":
          ctor = listWithArrowsFilter;
          break;
        case "DateRange":
          ctor = dateRangeFilter;
          break;
        case "Date":
          ctor = dateFilter;
          break;
        case "Checks2":
          ctor = checksFilter2;
          break;
        case "Checks":
          ctor = checksFilter;
          break;
        case "ListRange":
          ctor = listRangeFilter;
          break;
        case "Text":
          ctor = textFilter;
          break;
        default:
          $.show.error("Ошибка инициализации фильтр-панели. Неподдерживаемый тип фильтра " + filterModel.filterType);
          return;
      }
      filterCtrl = new ctor(this, filterModel);
      if (filterModel.dependencies) {
        satisfied = filterModel.control.dependenciesSatisfied();
        if (!satisfied) {
          active = false;
        }
      }
      if (filterSource) {
        filterCtrl.setSource(filterSource);
      }
      this.setFilterStatus(filterCtrl);
      this.filters.push(filterCtrl);
      if (!active) {
        filterCtrl.changeStatus("inactive");
      }
      filterCtrl.appendToPanel(this.panel);
    }
    this.panel.find(".form-group.aux").insertAfter(this.panel.find('.form-group:last-child'));
    return this.tryReady();
  };

  filterPanel.prototype.tryReady = function() {
    if (!this.checkEmptyChoice()) {
      return this.changeStatus(fpStatus.ready);
    }
  };

  filterPanel.prototype.changeStatus = function(status) {
    var emptyChoiceFilter, fpValues, handler, i, j, k, len, len1, len2, ref, ref1, ref2, results;
    console.log(status);
    this.panel.removeClass(this.status);
    this.status = status;
    this.panel.addClass(this.status);
    if (this.status === fpStatus.ready) {
      fpValues = this.getValues();
      ref = this.handlers_ready;
      for (i = 0, len = ref.length; i < len; i++) {
        handler = ref[i];
        handler(fpValues);
      }
    }
    if (this.status === fpStatus.init) {
      ref1 = this.handlers_init;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        handler = ref1[j];
        handler();
      }
    }
    if (this.status === fpStatus.emptyChoice) {
      emptyChoiceFilter = _.find(this.filters, function(ft) {
        return ft.getStatus() === "emptyChoice";
      });
      ref2 = this.handlers_emptyChoice;
      results = [];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        handler = ref2[k];
        results.push(handler(emptyChoiceFilter));
      }
      return results;
    }
  };

  filterPanel.prototype.setFilterStatus = function(filterCtrl) {
    if (filterCtrl.emptyChoice) {
      if (filterCtrl.model.optionalFlag) {
        return filterCtrl.changeStatus("inactive");
      } else {
        return filterCtrl.changeStatus("emptyChoice");
      }
    } else {
      return filterCtrl.changeStatus("active");
    }
  };

  filterPanel.prototype.getValues = function(excludeFilters) {
    var activeFilters, keyValues, values;
    values = {};
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    keyValues = _.map(activeFilters, function(x) {
      return [x.id, x.getChoice()];
    });
    values = _.object(keyValues);
    return values;
  };

  filterPanel.prototype.getCtxValues = function(excludeFilters) {
    var activeFilters;
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    return _.map(activeFilters, function(x) {
      return {
        filterId: x.id,
        filterValue: x.getChoice(),
        filterText: x.getChoiceText()
      };
    });
  };

  filterPanel.prototype.getTexts = function(forFilters) {
    var filters, keyValues, texts;
    texts = {};
    filters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (forFilters) {
      filters = _.filter(filters, function(ft) {
        return _.contains(forFilters, ft.id);
      });
    }
    keyValues = _.map(filters, function(x) {
      return [x.id, x.getChoiceText()];
    });
    texts = _.object(keyValues);
    return texts;
  };

  filterPanel.prototype.checkChoiceEnabling = function() {
    return _.find(this.filters, function(ft) {
      return ft.getChoiceEnabling();
    });
  };

  filterPanel.prototype.checkEmptyChoice = function() {
    var emptyFilter, i, len, ref;
    ref = _.filter(this.filters, function(item) {
      return item.getStatus() === "active" || item.getStatus() === "emptyChoice";
    });
    for (i = 0, len = ref.length; i < len; i++) {
      emptyFilter = ref[i];
      if (emptyFilter.emptyChoice && !emptyFilter.model.OptionalFlag) {
        this.changeStatus(fpStatus.emptyChoice);
        return true;
      }
    }
    return false;
  };

  filterPanel.prototype.changedValue = function(filter, value, prevValue) {
    var preSendActionsPromise;
    console.log(filter.id + " = " + value);
    if (this.status === fpStatus.init) {
      return;
    }
    preSendActionsPromise = true;
    if (this.checkChanges) {
      preSendActionsPromise = window.checkForChanges;
    }
    return extDeferred.when(preSendActionsPromise).then((function(_this) {
      return function() {
        var ctx, dependentFilters, existNextFilter, i, id, len, nextFilter, nextFilters, requestOptions, val, vals;
        _this.changeStatus(fpStatus.init);
        dependentFilters = filter.getDependency();
        vals = _this.getValues(dependentFilters);
        ctx = {
          selectedData: []
        };
        for (id in vals) {
          val = vals[id];
          ctx.selectedData.push({
            filterId: id,
            filterValue: val
          });
        }
        nextFilters = _.chain(_this.filters).sortBy(function(ft) {
          return ft.model.order;
        }).filter(function(ft) {
          return ft.model.order > filter.model.order;
        }).value();
        existNextFilter = false;
        if (!nextFilters) {
          _this.checkEmptyChoice();
        }
        for (i = 0, len = nextFilters.length; i < len; i++) {
          nextFilter = nextFilters[i];
          if (!nextFilter.model.dependencies) {
            existNextFilter = true;
            continue;
          }
          if (!nextFilter.dependenciesSatisfied()) {
            nextFilter.changeStatus("inactive");
            continue;
          }
          existNextFilter = true;
        }
        requestOptions = {
          action: _this.filterPanelHandlers,
          dataType: "json",
          contentType: 'application/json',
          forceData: JSON.stringify(ctx),
          showProcessing: dependentFilters.length || existNextFilter,
          method: "post"
        };
        if (!dependentFilters.length || !existNextFilter) {
          _this.tryReady();
          if (filter.existStateProvider) {
            requestOptions.showProcessing = false;
            jsSubmit(requestOptions);
          }
          return;
        }
        return jsSubmit(requestOptions).fail(function(xhr) {
          var dependFilter, j, len1, results;
          _this.changeStatus(fpStatus.emptyChoice);
          results = [];
          for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
            dependFilter = dependentFilters[j];
            results.push(dependFilter.changeStatus("inactive"));
          }
          return results;
        }).then(function(response) {
          var filterCtrl, filterSrc, j, k, len1, len2, satisfied;
          for (j = 0, len1 = response.length; j < len1; j++) {
            filterSrc = response[j];
            filterCtrl = _.find(dependentFilters, function(ft) {
              return ft.id === filterSrc.filterId && (!ft.model.dependencies || ft.dependenciesSatisfied());
            });
            if (!filterCtrl) {
              continue;
            }
            filterCtrl.setSource(filterSrc);
            _this.setFilterStatus(filterCtrl);
          }
          vals = _this.getValues();
          for (k = 0, len2 = nextFilters.length; k < len2; k++) {
            filterCtrl = nextFilters[k];
            if (filterCtrl.model.dependencies) {
              satisfied = filterCtrl.dependenciesSatisfied();
              if (!satisfied) {
                filterCtrl.changeStatus("inactive");
              }
            }
          }
          return _this.tryReady();
        });
      };
    })(this));
  };

  filterPanel.prototype.choiceOnFilter = function(filterId, val) {};

  filterPanel.prototype.choiceComplete = function() {};

  filterPanel.prototype.choiceInProgress = function() {};

  filterPanel.prototype.validate = function() {
    var isValid;
    isValid = true;
    _.each(this.filters, function(filter) {
      if (filter.getStatus() !== "active") {
        return;
      }
      if (!filter.validate) {
        return;
      }
      if (!filter.validate()) {
        isValid = false;
      }
    });
    return isValid;
  };

  filterPanel.prototype.ready = function(handler) {
    return this.handlers_ready.push(handler);
  };

  filterPanel.prototype.init = function(handler) {
    return this.handlers_init.push(handler);
  };

  filterPanel.prototype.emptyChoice = function(handler) {
    return this.handlers_emptyChoice.push(handler);
  };

  return filterPanel;

})();

dependencyTracker = (function() {
  function dependencyTracker(dependencies) {
    this.dependencies = dependencies;
  }

  dependencyTracker.prototype.checkDependency = function(vals, dep) {
    var arrValue, relFilterValue, relObject;
    relObject = dep.relatedObject;
    if (relObject.type === "Param") {
      return true;
    }
    if (relObject.type !== "Filter") {
      $.show.error("Неизвестный тип зависимости для фильтра");
      return false;
    }
    relFilterValue = vals[relObject.ref];
    if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
      return false;
    }
    switch (dep.condition) {
      case "Equals":
        return relFilterValue === dep.relatedValue;
      case "Greater":
        return relFilterValue > dep.relatedValue;
      case "Less":
        return relFilterValue < dep.relatedValue;
      case "NotEquals":
        return relFilterValue !== dep.relatedValue;
      case "Any":
        return true;
      case "NotContains":
        return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) < 0;
      case "Contains":
        return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) >= 0;
      case "In":
        arrValue = JSON.parse(dep.relatedValue);
        if (!Array.isArray(arrValue)) {
          return false;
        }
        return _.some(arrValue, function(v) {
          return v === relFilterValue;
        });
      default:
        return false;
    }
  };

  dependencyTracker.prototype.isSatisfied = function(vals) {
    return _.every(this.dependencies, (function(_this) {
      return function(dep) {
        return _this.checkDependency(vals, dep);
      };
    })(this));
  };

  return dependencyTracker;

})();

filter = (function() {
  function filter(panel1, model) {
    var control, filterSize, html, label, ref, ref1, template, titleInfo;
    this.panel = panel1;
    this.model = model;
    this.id = this.model.id;
    this.emptyChoice = false;
    this.childFilters = [];
    this.filterRow = null;
    this.choice = null;
    this.control = (ref = this.control) != null ? ref : null;
    this.status = (ref1 = this.status) != null ? ref1 : null;
    this.choiceEnabling = true;
    this.existStateProvider = this.model.existStateProvider;
    this.model.control = this;
    filterSize = this.panel.filterSize;
    label = "<label class=\"" + filterSize.label + "\">{{{title}}}</label>";
    control = "<div class=\"" + filterSize.control + "\">";
    template = Handlebars.compile('<div class="form-group">' + label + control + '<div id="filter-control"></div> </div> </div>');
    titleInfo = this.model.title;
    html = template({
      title: titleInfo
    });
    this.filterRow = $(html);
    this.filterRow.find("#filter-control").replaceWith(this.control);
  }

  filter.prototype.appendToPanel = function(panel) {
    return panel.append(this.filterRow);
  };

  filter.prototype.changeStatus = function(status) {
    this.filterRow.removeClass(this.status);
    this.status = status;
    this.filterRow.addClass(this.status);
    switch (status) {
      case "inactive":
        return this.disable();
      case "active":
        return this.enable();
    }
  };

  filter.prototype.getChoiceEnabling = function() {
    return this.choiceEnabling;
  };

  filter.prototype.setChoiceEnabling = function(choiceEnabling) {
    return this.choiceEnabling = choiceEnabling;
  };

  filter.prototype.getStatus = function() {
    return this.status;
  };

  filter.prototype.addChild = function(filter) {
    return this.childFilters.push(filter);
  };

  filter.prototype.getChoice = function() {
    return this.choice;
  };

  filter.prototype.getChoiceText = function() {
    return this.choice;
  };

  filter.prototype.setChoice = function(choice) {
    var prevChoice;
    prevChoice = this.choice;
    this.choice = choice;
    this.panel.changedValue(this, choice, prevChoice);
    return this.filterRow.trigger(this.id + ':change', [choice, prevChoice, this]);
  };

  filter.prototype.setSource = function(src) {
    if (src.defaultValue || (src.defaultValue === "")) {
      return this.setChoice(src.defaultValue);
    }
  };

  filter.prototype.getDependency = function() {
    var dependentFilter, dependentFilters, fltFunc, i, j, len, len1, subDependentFilters, testFilter, testFilterModel, testFilters;
    testFilters = _.filter(this.panel.filters, (function(_this) {
      return function(item) {
        return item.model.order > _this.model.order;
      };
    })(this));
    dependentFilters = [];
    for (i = 0, len = testFilters.length; i < len; i++) {
      testFilter = testFilters[i];
      testFilterModel = testFilter.model;
      if (!testFilterModel.dependencies) {
        continue;
      }
      fltFunc = (function(_this) {
        return function(dependency) {
          return (dependency.relatedObject.type === "Filter") && dependency.relatedObject.ref === _this.model.id;
        };
      })(this);
      if (!_.some(testFilterModel.dependencies, fltFunc)) {
        continue;
      }
      dependentFilters.push(testFilter);
    }
    for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
      dependentFilter = dependentFilters[j];
      subDependentFilters = dependentFilter.getDependency();
      if ((subDependentFilters != null ? subDependentFilters.length : void 0) === 0) {
        continue;
      }
      subDependentFilters = _.reject(subDependentFilters, function(subDepFlt) {
        return _.findWhere(dependentFilters, {
          id: subDepFlt.id
        });
      });
      if (subDependentFilters.length === 0) {
        continue;
      }
      dependentFilters = _.union(dependentFilters, subDependentFilters);
    }
    return dependentFilters;
  };

  filter.prototype.dependenciesSatisfied = function() {
    var tracker, vals;
    vals = this.panel.getValues();
    tracker = new dependencyTracker(this.model.dependencies);
    return tracker.isSatisfied(vals);
  };

  return filter;

})();

listFilter = (function(superClass) {
  var allOptionVal, nullOptionVal;

  extend(listFilter, superClass);

  allOptionVal = "-1";

  nullOptionVal = "-2";

  function listFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.sourceIds = [];
    this.control = $("<select></select>").addClass("form-control").attr("name", this.model.id).on("change", function() {
      return ctrl.setChoice($(this).val());
    });
    listFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listFilter.prototype.setSource = function(src) {
    var ctrl, item, itemsCount;
    ctrl = this;
    src.items = src.items || [];
    this.sourceIds = [];
    if (this.model.nullOption) {
      src.items.unshift({
        title: this.model.nullOption,
        value: nullOptionVal
      });
    }
    if (this.model.allOption) {
      this.sourceIds.unshift(allOptionVal);
    }
    this.sourceIds = this.sourceIds.concat(_.pluck(src.items, "value"));
    itemsCount = src.items.length;
    this.emptyChoice = !itemsCount;
    this.control.empty();
    if (itemsCount > 0) {
      if (itemsCount === 1) {
        this.setChoiceEnabling(false);
        item = src.items[0];
        this.setLabel(item.title, item.value);
        if (src.defaultValue) {
          src.defaultValue = item.value;
        }
        if (this.model.hideSingleOption) {
          ctrl.filterRow.addClass("hidden");
        }
      } else {
        this.setList(src.items);
      }
    } else {
      this.setChoiceEnabling(false);
      this.setLabel(this.model.emptyText);
    }
    if (this.model.hideSingleOption && itemsCount !== 1) {
      ctrl.filterRow.removeClass("hidden");
    }
    return listFilter.__super__.setSource.call(this, src);
  };

  listFilter.prototype.setList = function(items) {
    var actualItems, i, item, len, ref, results;
    this.control.show();
    this.enable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    actualItems = items;
    if (this.model.allOption) {
      actualItems.unshift({
        title: this.model.allOption,
        value: allOptionVal
      });
    }
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.control));
    }
    return results;
  };

  listFilter.prototype.setLabel = function(title, value) {
    var valInput;
    this.control.hide();
    this.disable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    this.labelBlock = $("<div></div>");
    this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(title));
    if (value) {
      valInput = $("<input type=\"hidden\" />").attr("name", this.model.id).val(value);
      this.labelBlock.append(valInput);
    }
    return this.labelBlock.insertAfter(this.control);
  };

  listFilter.prototype.setChoice = function(choice) {
    if (!_.contains(this.sourceIds, choice)) {
      choice = _.first(this.sourceIds);
    }
    this.control.val(choice);
    return listFilter.__super__.setChoice.call(this, choice);
  };

  listFilter.prototype.getChoiceText = function() {
    if (this.labelBlock) {
      return this.labelBlock.find('input[type=text]').val();
    } else {
      return $("option:selected", this.control).text();
    }
  };

  listFilter.prototype.enable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").prop("disabled", false);
    } else {
      return this.control.prop("disabled", false);
    }
  };

  listFilter.prototype.disable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").attr("disabled", "disabled");
    } else {
      return this.control.attr("disabled", "disabled");
    }
  };

  return listFilter;

})(filter);

dateRange = (function() {
  function dateRange(startDate1, endDate1) {
    this.startDate = startDate1;
    this.endDate = endDate1;
  }

  dateRange.parseDate = function(str) {
    var date, strDate;
    strDate = str.substring(0, 19);
    date = strDate.length === 19 ? new Date(strDate) : dateUtils.str2date(strDate);
    return date;
  };

  dateRange.parseRange = function(str) {
    var endDate, range, rangeArr, startDate;
    rangeArr = str.split(" - ");
    if (rangeArr[0]) {
      startDate = dateRange.parseDate(rangeArr[0]);
    }
    if (rangeArr[1]) {
      endDate = dateRange.parseDate(rangeArr[1]);
    }
    range = new dateRange(startDate, endDate);
    range.source = str;
    return range;
  };

  dateRange.prototype.toString = function() {
    var ret;
    ret = "";
    if (this.startDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
    }
    ret += " - ";
    if (this.endDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
    }
    return ret.replace(/"/g, "");
  };

  dateRange.prototype.isValid = function() {
    return this.startDate <= this.endDate;
  };

  return dateRange;

})();

dateRangeFilter = (function(superClass) {
  extend(dateRangeFilter, superClass);

  function dateRangeFilter(panel1, model) {
    var baseName, ctrl, dateChanged, endControl, endDateBlur, endDateChanged, endDateChangedAndBlur, separatorCtrl, startControl, startDateBlur, startDateChanged, startDateChangedAndBlur;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.startDateIsChanged = false;
    this.endDateIsChanged = false;
    baseName = this.model.id;
    startControl = $("<input type=\"text\" class=\"input-md form-control start-date\"/>").attr("name", baseName + "_start");
    endControl = $("<input type=\"text\" class=\"input-md form-control end-date\"/>").attr("name", baseName + "_end");
    separatorCtrl = $("<span class=\"input-group-addon\">—</span>");
    this.control = $("<div class=\"input-daterange input-group date\"></div>").append(startControl).append(separatorCtrl).append(endControl);
    dateInput.initDateInput(this.control, "", "", "", {
      autoCorrectDates: false,
      keepEmptyField: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var endDate, range, startDate;
        if (_this.status === 'inactive') {
          return;
        }
        startDate = _this.control.find('.start-date').val();
        endDate = _this.control.find('.end-date').val();
        range = !startDate && !endDate ? null : startDate + " - " + endDate;
        return _this.setChoice(range, true);
      };
    })(this);
    startDateBlur = (function(_this) {
      return function() {
        var dtStartDate, endDate, startDate;
        if (_this.startDateIsChanged) {
          _this.startDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtStartDate = dateRange.parseDate(startDate);
            if (dtStartDate > dateRange.parseDate(endDate)) {
              if (_this.validateDate(dtStartDate)) {
                _this.control.find('.end-date').val(startDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    endDateBlur = (function(_this) {
      return function() {
        var dtEndDate, endDate, startDate;
        if (_this.endDateIsChanged) {
          _this.endDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtEndDate = dateRange.parseDate(endDate);
            if (dtEndDate < dateRange.parseDate(startDate)) {
              if (_this.validateDate(dtEndDate)) {
                _this.control.find('.start-date').val(endDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    startDateChanged = (function(_this) {
      return function() {
        _this.startDateIsChanged = true;
      };
    })(this);
    endDateChanged = (function(_this) {
      return function() {
        _this.endDateIsChanged = true;
      };
    })(this);
    startDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.startDateIsChanged) {
          startDateChanged();
          return startDateBlur();
        }
      };
    })(this);
    endDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.endDateIsChanged) {
          endDateChanged();
          return endDateBlur();
        }
      };
    })(this);
    this.control.find('.start-date').on("blur", startDateBlur);
    this.control.find('.end-date').on("blur", endDateBlur);
    this.control.find('.start-date').on("change", startDateChanged);
    this.control.find('.end-date').on("change", endDateChanged);
    this.control.find('.start-date').datepicker().on("changeDate", startDateChangedAndBlur);
    this.control.find('.end-date').datepicker().on("changeDate", endDateChangedAndBlur);
    dateRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateRangeFilter.prototype.setSource = function(src) {
    var maxDate, minDate, range;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.find('.start-date, .end-date').datepicker("setStartDate", minDate);
    this.control.find('.start-date, .end-date').datepicker("setEndDate", maxDate);
    this.src = src;
    range = new dateRange(minDate, maxDate);
    this.setChoice(range, true);
    return dateRangeFilter.__super__.setSource.call(this, src);
  };

  dateRangeFilter.prototype.getChoice = function() {
    var currChoice, currRange;
    currChoice = this.choice;
    currRange = new dateRange(currChoice.startDate, currChoice.endDate);
    return currRange.toString();
  };

  dateRangeFilter.prototype.getChoiceText = function() {
    var currChoice;
    currChoice = this.choice;
    return moment(currChoice.startDate).format('DD.MM.YYYY') + " - " + moment(currChoice.endDate).format('DD.MM.YYYY');
  };

  dateRangeFilter.prototype.setChoice = function(choice, internal) {
    var endDate, range, startDate;
    if (!choice) {
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    range = choice.startDate || choice.endDate ? choice : dateRange.parseRange(choice);
    dateRangeFilter.__super__.setChoice.call(this, range);
    if (internal) {
      return;
    }
    if (range.startDate) {
      this.control.find('.start-date').datepicker('update', dateUtils.date2str(range.startDate));
    }
    if (range.endDate) {
      this.control.find('.end-date').datepicker('update', dateUtils.date2str(range.endDate));
    }
    startDate = this.control.find('.start-date').val();
    endDate = this.control.find('.end-date').val();
    if (!startDate || !endDate) {
      range = startDate + " - " + endDate;
      return this.setChoice(range, true);
    }
  };

  dateRangeFilter.prototype.validateDate = function(dt) {
    var maxValue, minValue;
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    return dt >= minValue && dt <= maxValue;
  };

  dateRangeFilter.prototype.validate = function() {
    var endDate, maxValue, minValue, startDate;
    if (this.choice.startDate === null || !this.choice.startDate) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate);
      return false;
    }
    if (this.choice.endDate === null || !this.choice.endDate) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    startDate = dateUtils.asUTCDate(this.choice.startDate.clone());
    endDate = dateUtils.asUTCDate(this.choice.endDate.clone());
    if (startDate < minValue || startDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (endDate < minValue || endDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (!this.choice.isValid()) {
      $.show.error(language.Generic.Common.kMsgStartBeforeEnd);
      return false;
    }
    return true;
  };

  dateRangeFilter.prototype.enable = function() {
    return this.control.find("input").prop("disabled", false);
  };

  dateRangeFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateRangeFilter;

})(filter);

dateFilter = (function(superClass) {
  extend(dateFilter, superClass);

  function dateFilter(panel1, model) {
    var baseName, buttonCtrl, control, ctrl, dateChanged, inputCtrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    control = $("<input type=\"text\" class=\"input-md form-control filter-date\"></input>").attr("name", baseName);
    buttonCtrl = $("<button type=\"button\" class=\"btn btn-primary\">").append($("<span class=\"glyphicon glyphicon-calendar\"></span>")).append($("</button>"));
    inputCtrl = $("<span class=\"input-group-btn\">").append(buttonCtrl).append($("</span>"));
    this.control = $("<div class=\"input-group date\">").append(control).append(inputCtrl).append($("</div>"));
    dateInput.initDateInput(this.control, null, null, null, {
      autoCorrectDates: false,
      keepEmptyField: true,
      autoclose: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var filterDate;
        if (_this.status === 'inactive') {
          return;
        }
        filterDate = dateUtils.str2date(_this.control.find('.filter-date').val());
        return _this.setChoice(filterDate, true);
      };
    })(this);
    this.control.find('.filter-date').on("change", dateChanged);
    dateFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateFilter.prototype.setSource = function(src) {
    var filterDate, maxDate, minDate;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.datepicker("setStartDate", minDate);
    this.control.datepicker("setEndDate", maxDate);
    filterDate = moment(src.defaultValue).toDate();
    this.control.datepicker("setDate", filterDate);
    this.setChoice(filterDate, true);
    return this.src = src;
  };

  dateFilter.prototype.setChoice = function(choice, internal) {
    var filterDate;
    if (!choice) {
      dateFilter.__super__.setChoice.call(this, null);
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    if (!internal) {
      this.control.datepicker('update', choice);
    }
    filterDate = dateUtils.str2date(this.control.find('.filter-date').val());
    return dateFilter.__super__.setChoice.call(this, filterDate);
  };

  dateFilter.prototype.validate = function() {
    var filterDate, maxValue, minValue;
    if (this.choice === null || !this.choice) {
      $.show.error(language.Generic.Common.kErrInvalidDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    filterDate = dateUtils.asUTCDate(this.choice.clone());
    if (filterDate < minValue || filterDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidDate + '\n' + language.Generic.Common.kDateMustBeInCurrYear);
      return false;
    }
    return true;
  };

  dateFilter.prototype.enable = function() {
    return this.control.find("input").prop("disabled", false);
  };

  dateFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateFilter;

})(filter);

checksFilter = (function(superClass) {
  extend(checksFilter, superClass);

  function checksFilter(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        if (_this.model.hasSureCheckedFlag && !_this.control.find("input:checked").length > 0) {
          alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
          return false;
        }
        checkboxValues = _this.control.find('input:checked').map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>").on("change", checkboxChanged);
    checksFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.emptyChoice = false;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      if (this.model.emptyText) {
        this.labelBlock = $("<div></div>");
        this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
        this.labelBlock.appendTo(this.control);
        this.emptyChoice = true;
      }
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter.prototype.getChoice = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter.__super__.setChoice.call(this, choice);
  };

  checksFilter.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox\"></div>").append(lbl).appendTo(this.control));
    }
    return results;
  };

  checksFilter.prototype.enable = function() {};

  checksFilter.prototype.disable = function() {};

  checksFilter.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter;

})(filter);

checksFilter2 = (function(superClass) {
  extend(checksFilter2, superClass);

  function checksFilter2(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        if (_this.model.hasSureCheckedFlag && !_this.control.find("input:checked").length > 0) {
          alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
          return false;
        }
        checkboxValues = (_this.control.find('input:checked')).map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>");
    this.control.on("change", checkboxChanged);
    checksFilter2.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter2.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.emptyChoice = false;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      if (this.model.emptyText) {
        this.labelBlock = $("<div></div>");
        this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
        this.labelBlock.appendTo(this.control);
        this.emptyChoice = true;
      }
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter2.prototype.getChoice = function() {
    return (this.control.find('input:checked')).map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter2.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter2.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter2.__super__.setChoice.call(this, choice);
  };

  checksFilter2.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox checkbox-inline checkbox-row\"></div>").append(lbl).appendTo(this.control));
    }
    return results;
  };

  checksFilter2.prototype.enable = function() {};

  checksFilter2.prototype.disable = function() {};

  checksFilter2.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter2;

})(filter);

listRangeFilter = (function(superClass) {
  extend(listRangeFilter, superClass);

  function listRangeFilter(panel1, model) {
    var baseName, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    this.startControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_start").on("change", function() {
      return ctrl.setChoice($(this).val(), 1);
    });
    this.endControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_end").on("change", function() {
      return ctrl.setChoice($(this).val(), 2);
    });
    this.separatorCtrl = $("<span class=\"input-group-addon\">-</span>");
    this.control = $("<div class=\"input-group\"></div>").append(this.startControl).append(this.separatorCtrl).append(this.endControl);
    listRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listRangeFilter.prototype.setSource = function(src) {
    var itemsCount, ref, ref1, ref2;
    this.emptyChoice = ((ref = src.itemsFrom) != null ? ref.length : void 0) === 0;
    this.startControl.empty();
    itemsCount = (ref1 = src.itemsFrom) != null ? ref1.length : void 0;
    if (itemsCount > 0) {
      this.setListFrom(src.itemsFrom);
    }
    this.endControl.empty();
    itemsCount = (ref2 = src.itemsTo) != null ? ref2.length : void 0;
    if (itemsCount > 0) {
      this.setListTo(src.itemsTo);
    }
    this.defVal = src.defaultValue;
    if (this.defVal) {
      this.setChoice(this.defVal);
    }
    return listRangeFilter.__super__.setSource.call(this, src);
  };

  listRangeFilter.prototype.setListFrom = function(items) {
    var actualItems, i, item, len, ref, results;
    this.startControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.startControl));
    }
    return results;
  };

  listRangeFilter.prototype.setListTo = function(items) {
    var actualItems, i, item, len, ref, results;
    this.endControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.endControl));
    }
    return results;
  };

  listRangeFilter.prototype.setChoice = function(choice, partNum) {
    var choiceIndex, endChoice, endChoiceIndex, sepIndex, startChoice, startChoiceIndex;
    if (typeof partNum !== "undefined") {
      if (partNum === 1) {
        endChoice = this.endControl.val();
        this.startControl.val(choice);
        if (choice && endChoice) {
          choiceIndex = $(this.startControl).find("option[value='" + choice + "']")[0].index;
          endChoiceIndex = $(this.endControl).find("option[value='" + endChoice + "']")[0].index;
          if (endChoiceIndex < choiceIndex) {
            this.endControl.val(choice);
          }
        }
      } else if (partNum === 2) {
        startChoice = this.startControl.val();
        this.endControl.val(choice);
        if (choice && startChoice) {
          choiceIndex = $(this.endControl).find("option[value='" + choice + "']")[0].index;
          startChoiceIndex = $(this.startControl).find("option[value='" + startChoice + "']")[0].index;
          if (choiceIndex < startChoiceIndex) {
            this.startControl.val(choice);
          }
        }
      }
      choice = this.getChoice();
    } else {
      sepIndex = choice.indexOf(" - ");
      if (sepIndex) {
        this.startControl.val(choice.substring(0, sepIndex), 1);
        this.endControl.val(choice.substring(sepIndex + 3), 2);
      }
    }
    return listRangeFilter.__super__.setChoice.call(this, choice);
  };

  listRangeFilter.prototype.getChoice = function() {
    return this.startControl.val() + " - " + this.endControl.val();
  };

  listRangeFilter.prototype.enable = function() {
    return this.control.prop("disabled", false);
  };

  listRangeFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return listRangeFilter;

})(filter);

listWithArrowsFilter = (function(superClass) {
  extend(listWithArrowsFilter, superClass);

  function listWithArrowsFilter(panel1, model) {
    var buttonGroup, leftButton, rightButton;
    this.panel = panel1;
    this.model = model;
    listWithArrowsFilter.__super__.constructor.call(this, this.panel, this.model);
    $(this.control).addClass("list-with-arrows");
    $(this.control).wrapAll('<div class="input-group">');
    leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>').on("click", (function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").prev('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>').on("click", (function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").next('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton);
    $(this.control).parent().append(buttonGroup);
  }

  return listWithArrowsFilter;

})(listFilter);

listFilter2 = (function(superClass) {
  extend(listFilter2, superClass);

  function listFilter2() {
    return listFilter2.__super__.constructor.apply(this, arguments);
  }

  listFilter2.prototype.setSource = function(src) {
    var ref;
    listFilter2.__super__.setSource.call(this, src);
    if (((ref = src.items) != null ? ref.length : void 0) > 1) {
      return this.select2Control = this.control.select2({
        placeholder: "Введите наименование",
        language: "ru"
      });
    } else {
      this.control.select2();
      this.control.select2('close');
      return this.control.siblings('span.select2').hide();
    }
  };

  return listFilter2;

})(listFilter);

textFilter = (function(superClass) {
  extend(textFilter, superClass);

  function textFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.validationExp = null;
    this.validationErrorMessage = null;
    this.control = $("<input></input>").addClass("form-control").attr("name", this.model.id).on("change", function() {
      return ctrl.setChoice($(this).val());
    });
    textFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  textFilter.prototype.setSource = function(src) {
    this.setChoice(src != null ? src.defaultValue : void 0);
    this.validationExp = src != null ? src.validationExp : void 0;
    this.validationErrorMessage = src != null ? src.validationErrorMessage : void 0;
    return textFilter.__super__.setSource.call(this, src);
  };

  textFilter.prototype.validate = function() {
    var choice;
    if (this.validationExp) {
      choice = this.getChoice();
      if (!choice.match(this.validationExp)) {
        $.show.error('Фильтр "' + this.model.title + '": ' + this.validationErrorMessage);
        return false;
      }
    }
    return true;
  };

  textFilter.prototype.getChoice = function() {
    return $(this.control).val();
  };

  textFilter.prototype.setChoice = function(choice) {
    $(this.control).val(choice);
    if (this.model.optionalFlag || choice) {
      this.emptyChoice = false;
    } else {
      this.emptyChoice = true;
    }
    return textFilter.__super__.setChoice.call(this, choice);
  };

  textFilter.prototype.enable = function() {
    return this.control.prop("disabled", false);
  };

  textFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return textFilter;

})(filter);

(function(exp, name) {
  var exported, exports;
  exported = false;
  if ( true && module !== null ? module.exports : void 0) {
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
})({
  filterPanel: filterPanel,
  dependencyTracker: dependencyTracker,
  fpStatus: fpStatus
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(129)(module)))

/***/ }),
/* 129 */
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

/***/ })
/******/ ]);