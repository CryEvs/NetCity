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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _talentsStudentsRegistryCtrl = __webpack_require__(26);
var _talentsCuratorsRegistryCtrl = __webpack_require__(32);
var _emevents = __webpack_require__(37);
var _repositories = __webpack_require__(40);
var _studentAwards = __webpack_require__(42);
var _achievementsRegistryCtrl = __webpack_require__(45);
var _studentPortfolio = __webpack_require__(46);
var _curators = __webpack_require__(48);
var _editEventMember = __webpack_require__(49);
var _editParticipation = __webpack_require__(52);
var _nationolymp = __webpack_require__(54);
var _achievementsPersonaldataRegistry = __webpack_require__(55);
var _module = angular.module("irtech.netcity.em.talents", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components", "irtech.netcity.school.portfolio.common"]);
__webpack_require__(56);
__webpack_require__(57);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/students", _talentsStudentsRegistryCtrl.TalentsStudentsRegistryComponent).when("/students/:studentId/portfolio", _studentPortfolio.StudentPortfolioComponent).when("/students/:studentId/awards", _studentAwards.StudentAwardsComponent).when("/curators", _talentsCuratorsRegistryCtrl.TalentsCuratorsRegistryComponent).when("/achievements", _achievementsRegistryCtrl.AchievementsRegistryComponent).when("/achievements/personaldata", _achievementsPersonaldataRegistry.AchievementsWithPersonalDataRegistryComponent).otherwise({
    redirectTo: "/students"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module
//.component(EventMembersComponent.selector, EventMembersComponent)
//.component(EventInfoComponent.selector, EventInfoComponent)
//.component(EditAwardEventFilesComponent.selector, EditAwardEventFilesComponent)
.component(_editParticipation.EventParticipationInfoComponent.selector, _editParticipation.EventParticipationInfoComponent).service("awardEventsRepository", _emevents.AwardEventsRepository).service("emEventsRepository", _emevents.EmEventsRepository).service("curatorsRepository", _curators.CuratorsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("eventMembersRepository", _emevents.EventMembersRepository).service("editEventMemberService", _editEventMember.EditEventMemberService).service("userEventsRepository", _emevents.UserEventsRepository).service("nationOlympRepository", _nationolymp.NationOlympRepository).filter("extension", function () {
  return function (input) {
    return input.split(".").pop();
  };
}).config(config);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TalentsStudentsRegistryController = exports.TalentsStudentsRegistryComponent = void 0;
var _registryAsCtrl = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TalentsStudentsRegistryController = /*#__PURE__*/function () {
  TalentsStudentsRegistryController.$inject = ["pageContext", "language", "$uibModal", "$http", "$location"];
  /*@ngInject*/
  function TalentsStudentsRegistryController(pageContext, language, $uibModal, $http, $location) {
    var _this = this;
    _classCallCheck(this, TalentsStudentsRegistryController);
    this.$uibModal = $uibModal;
    this.$http = $http;
    pageContext.title = language.Generic.MenuFolders.kFNTalentStudents;
    pageContext.back = null;
    pageContext.parent = null;
    var viewPortfolioButton = {
      title: "Портфолио",
      action: function action() {
        _this.viewPortfolio();
      },
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      icon: "glyphicon glyphicon-briefcase",
      style: "btn-info"
    };
    var viewAwardsButton = {
      title: "Личные достижения",
      action: function action() {
        _this.viewAwards();
      },
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      icon: "glyphicon glyphicon-education",
      style: "btn-warning"
    };
    var assignCuratorButton = {
      title: language.Generic.TalentStudents.kAssignCurator,
      action: function action() {
        _this.assignCurator();
      },
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      icon: "icon-group",
      style: "btn-warning"
    };
    var dateDecorator = {
      type: "map",
      map: function map(date) {
        return dateUtils.date2str(new Date(date));
      }
    };
    this.registryInfo = {
      url: "/webapi/em/talents/registry",
      filtersUrl: "/webapi/em/talents/registry/filter",
      fieldDecorators: {
        "birthDate": dateDecorator
      },
      buttons: [viewPortfolioButton, viewAwardsButton, assignCuratorButton],
      linkButtons: [],
      extensions: null,
      compactFilters: true
    };
    if ($location.search() && $location.search().curatorId) {
      this.registryInfo.filtersValues = {
        "CuratorFilter": $location.search().curatorId
      };
    }
    // сразу очистка
    $location.search({});
    this.$location = $location;
  }
  // просмотр портфолио
  _createClass(TalentsStudentsRegistryController, [{
    key: "viewPortfolio",
    value: function viewPortfolio() {
      var studentId = this.controller.selection.selected[0].id;
      this.$location.path("/students/".concat(studentId, "/portfolio"));
    }
    // просмотр личных достижений
  }, {
    key: "viewAwards",
    value: function viewAwards() {
      var studentId = this.controller.selection.selected[0].id;
      this.$location.path("/students/".concat(studentId, "/awards"));
    }
    // назначение куратора
  }, {
    key: "assignCurator",
    value: function assignCurator() {
      var _this2 = this;
      var selected = this.controller.selection.selected[0];
      this.$http.get("/webapi/talents/student", {
        params: {
          studentId: selected.id
        }
      }).then(function (response) {
        var modalInstance = _this2.$uibModal.open({
          templateUrl: "/static/dist/app/em/talents/students/assignCurator/template.html",
          controller: "AssignStudentCuratorCtrl",
          size: "md",
          resolve: {
            student: function student() {
              return response.data;
            }
          }
        });
        modalInstance.result.then(function () {
          _this2.controller.load();
        });
      });
    }
  }]);
  return TalentsStudentsRegistryController;
}();
exports.TalentsStudentsRegistryController = TalentsStudentsRegistryController;
var TalentsStudentsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: TalentsStudentsRegistryController,
  controllerAs: "$ctrl",
  reloadOnSearch: false
};
exports.TalentsStudentsRegistryComponent = TalentsStudentsRegistryComponent;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCenterDecorator = exports.SelectionMode = exports.RegistryController = exports.PreserveWhiteSpaceDecorator = exports.OrderDirection = exports.MapDecorator = exports.LinkFieldDecorator = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(28));
var _dependencyTracker = __webpack_require__(29);
var _common = __webpack_require__(31);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LinkFieldDecorator = /*#__PURE__*/function () {
  function LinkFieldDecorator(linkAction) {
    _classCallCheck(this, LinkFieldDecorator);
    this.linkAction = linkAction;
    this.template = "<a href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">{{content}}</a>";
  }
  _createClass(LinkFieldDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["action"] = function () {
        _this.linkAction();
      };
    }
  }]);
  return LinkFieldDecorator;
}();
exports.LinkFieldDecorator = LinkFieldDecorator;
var MapDecorator = /*#__PURE__*/function () {
  function MapDecorator(map) {
    _classCallCheck(this, MapDecorator);
    this.map = map;
  }
  _createClass(MapDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      scope["content"] = this.map(scope["content"]);
    }
  }]);
  return MapDecorator;
}();
exports.MapDecorator = MapDecorator;
var PreserveWhiteSpaceDecorator = /*#__PURE__*/function () {
  function PreserveWhiteSpaceDecorator() {
    _classCallCheck(this, PreserveWhiteSpaceDecorator);
  }
  _createClass(PreserveWhiteSpaceDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.css("white-space", "pre-line");
    }
  }]);
  return PreserveWhiteSpaceDecorator;
}();
exports.PreserveWhiteSpaceDecorator = PreserveWhiteSpaceDecorator;
var TextCenterDecorator = /*#__PURE__*/function () {
  function TextCenterDecorator() {
    _classCallCheck(this, TextCenterDecorator);
  }
  _createClass(TextCenterDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.parent().addClass("text-center");
    }
  }]);
  return TextCenterDecorator;
}();
exports.TextCenterDecorator = TextCenterDecorator;
var RegistryRequest = /*#__PURE__*/_createClass(function RegistryRequest() {
  _classCallCheck(this, RegistryRequest);
});
var RegistryOrderInfo = /*#__PURE__*/_createClass(function RegistryOrderInfo() {
  _classCallCheck(this, RegistryOrderInfo);
});
var RegistrySearchInfo = /*#__PURE__*/_createClass(function RegistrySearchInfo() {
  _classCallCheck(this, RegistrySearchInfo);
});
var OrderDirection;
exports.OrderDirection = OrderDirection;
(function (OrderDirection) {
  OrderDirection["asc"] = "asc";
  OrderDirection["desc"] = "desc";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
var SelectionMode;
exports.SelectionMode = SelectionMode;
(function (SelectionMode) {
  SelectionMode["Empty"] = "Empty";
  SelectionMode["Multiple"] = "Multiple";
  SelectionMode["Single"] = "Single";
})(SelectionMode || (exports.SelectionMode = SelectionMode = {}));
//умолчательные настройки
var defRegistryInfo = {
  url: null,
  filtersUrl: null,
  buttons: null,
  linkButtons: null,
  fieldDecorators: null,
  extensions: {
    postButtonsTpl: null
  },
  compactFilters: true,
  filtersValues: null
};
var initialPageSize = 50;
var scrollable = false;
var RegistryFieldsHelper = /*#__PURE__*/function () {
  function RegistryFieldsHelper(registryCtrl) {
    _classCallCheck(this, RegistryFieldsHelper);
    this.registryCtrl = registryCtrl;
  }
  _createClass(RegistryFieldsHelper, [{
    key: "initAvailableFields",
    value: function initAvailableFields() {
      var fp = this.registryCtrl.filterInfo.filterPanel.getValue();
      var filterValues = fp.getValues();
      var availableFields = this.registryCtrl.data.registry.fields.filter(function (field) {
        if (!field.dependencies) {
          return true;
        }
        return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
      });
      return availableFields;
    }
  }, {
    key: "initDisplayFilters",
    value: function initDisplayFilters() {
      var _this2 = this;
      //инициализация полей реестра
      var fields = this.initAvailableFields();
      if (this.registryCtrl.data.registryData) {
        fields = fields.filter(function (f) {
          return _this2.registryCtrl.data.registryData.fields.indexOf(f.id) > -1;
        });
      }
      if (this.registryCtrl.registry.fieldDecorators) {
        fields.forEach(function (f) {
          return f.decorator = _this2.registryCtrl.registry.fieldDecorators[f.id];
        });
      }
      this.registryCtrl.data.displayFields = _.sortBy(fields, function (f) {
        return f.order;
      });
    }
  }]);
  return RegistryFieldsHelper;
}();
var RegistryController = /*#__PURE__*/function () {
  RegistryController.$inject = ["$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "registry"];
  /*@ngInject*/
  function RegistryController($injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, registry) {
    var _this3 = this;
    _classCallCheck(this, RegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.$http = this.$injector.get("$http");
    this.$window = this.$injector.get("$window");
    this.$document = this.$injector.get("$document");
    this.$location = this.$injector.get("$location");
    this.downloadService = this.$injector.get("downloadService");
    this.$longWork = this.$injector.get("$longWork");
    this.registry = Object.assign({}, defRegistryInfo, registry);
    this.state = {
      dataReady: false,
      loading: false,
      emptyData: false,
      emptyFilter: false,
      selectable: false,
      withMultiSelection: false,
      exporting: false,
      initing: true
    };
    this.filterInfo = {
      filterPanel: new _common.BehaviorSubject(),
      filterPanelSettings: null
    };
    this.fieldsHelper = new RegistryFieldsHelper(this);
    this.selection = new _multiSelectable["default"]();
    this.data = {
      error: null,
      registry: null,
      registryData: null,
      search: {
        fieldId: null,
        fieldTitle: null,
        text: "",
        fields: []
      },
      fields: null,
      displayFields: null
    };
    this.paging = {
      page: 1,
      pageSize: 50,
      currentPageSize: null,
      totalRows: 0
    };
    $scope.$watch(function () {
      return _this3.paging.currentPageSize;
    }, this.watch.bind(this)); // не был виден контекст в методе
    this.init();
  }
  _createClass(RegistryController, [{
    key: "watch",
    value: function watch(newVal, oldVal) {
      if (newVal && (newVal < 1 || newVal > 999)) {
        this.paging.currentPageSize = oldVal;
      }
    }
  }, {
    key: "clickRow",
    value: function clickRow(event, row) {
      var clickOnTag = event.target && event.target.tagName;
      if (clickOnTag === "A") {
        //исключаем нажатие на линках
        return;
      }
      if (!this.state.withMultiSelection) {
        //эмулирование единственности выбора
        if (!this.selection.isSelected(row)) {
          this.selection.dropSelect();
        }
      }
      this.selection.select(row);
    }
    //инициализация кнопок и действий и их правил показа
  }, {
    key: "initCommandButtons",
    value: function initCommandButtons() {
      var _this4 = this;
      var commands = this.data.registry.commands;
      var buttons = this.registry.buttons;
      var checkSelectionMode = function checkSelectionMode(mode, defaultVal) {
        if (mode === SelectionMode.Empty) {
          return _this4.selection.selected.length === 0;
        } else if (mode === SelectionMode.Single) {
          return _this4.selection.selected.length === 1;
        } else if (mode === SelectionMode.Multiple) {
          return _this4.selection.selected.length > 0;
        }
        return defaultVal;
      };
      this.state.withMultiSelection = false;
      if (commands && commands.length) {
        //если есть команды - то возможность выбора есть
        this.state.selectable = true;
        this.state.withMultiSelection = commands.find(function (c) {
          return c.mode == SelectionMode.Multiple;
        }) != null;
        commands.forEach(function (cmd) {
          cmd.isEnabled = function () {
            return checkSelectionMode(cmd.mode, false);
          };
        });
      }
      if (buttons && buttons.length) {
        this.state.selectable = this.state.selectable || buttons.find(function (b) {
          return b.selectionMode !== null;
        }) != null;
        this.state.withMultiSelection = this.state.withMultiSelection || _.findWhere(buttons, {
          selectionMode: SelectionMode.Multiple
        }) != null;
        buttons.forEach(function (btn) {
          btn.isEnabled = function () {
            return checkSelectionMode(btn.selectionMode, true);
          };
          btn.style = btn.style || "btn-default";
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;
      this.state.initing = true;
      this.btnExport = {
        title: this.language.Generic.Common.kBtnExcel,
        action: function action() {
          return _this5["export"]();
        },
        icon: "glyphicon glyphicon-export"
      };
      this.$http.get(this.registry.url)["catch"](function (response) {
        _this5.$appLoader.hide();
        _this5.data.error = response.data && response.data.message || "Ошибка загрузки реестра";
      }).then(function (response) {
        var registry = response.data;
        _this5.data.registry = registry;
        var fpInfo = registry.filterPanel.filterPanel;
        var fpSources = registry.filterPanel.filterSources;
        _this5.initFilterSources(fpSources);
        _this5.initCommandButtons();
        //первичная инициализация полей реестра
        _this5.data.fields = registry.fields.filter(function (f) {
          return f["default"];
        });
        _this5.$appLoader.hide();
        _this5.filterInfo.filterPanelSettings = {
          url: _this5.registry.filtersUrl,
          info: fpInfo,
          sources: fpSources,
          styles: {
            compact: _this5.registry.compactFilters
          },
          events: {
            ready: function ready(vals) {
              _this5.state.emptyFilter = false;
              _this5.setSearchFields();
              _this5.state.initing = false;
              _this5.$scope.$emit("FilterPanelInitialized", _this5.filterInfo.filterPanel.getValue());
              _this5.$scope.$applyAsync();
            },
            emptyChoice: function emptyChoice(emptyFilter) {
              _this5.state.emptyFilter = true;
              _this5.$scope.$applyAsync();
            }
          }
        };
        _this5.loadingState();
      });
    }
  }, {
    key: "initFilterSources",
    value: function initFilterSources(sources) {
      var filtersValues = this.registry.filtersValues;
      if (!filtersValues) {
        return;
      }
      var filterIds = Object.keys(filtersValues);
      filterIds.forEach(function (filterId) {
        var source = sources.find(function (x) {
          return x.filterId === filterId;
        });
        if (!source) {
          return;
        }
        source.defaultValue = filtersValues[filterId].toString();
      });
    }
  }, {
    key: "loadingState",
    value: function loadingState() {
      var _this6 = this;
      this.$http.get(this.registry.url + "/state").then(function (response) {
        var registryState = {
          fields: [],
          search: null,
          order: null,
          paging: {
            page: 1,
            pageSize: initialPageSize,
            currentPageSize: initialPageSize
          }
        };
        var needLoad = _this6.data.registry.autoLoad;
        if (!response || !response.data) {
          _this6.paging = angular.extend(_this6.paging, registryState.paging);
        } else {
          needLoad = true;
          registryState = response.data;
          _this6.paging = angular.extend(_this6.paging, registryState.paging);
          if (!_this6.paging.pageSize) {
            _this6.paging.pageSize = initialPageSize;
          }
          _this6.paging.currentPageSize = _this6.paging.pageSize;
          if (registryState.fields) {
            _this6.data.fields = _this6.data.registry.fields.filter(function (item) {
              return registryState.fields.indexOf(item.id) != -1;
            });
          }
          if (registryState.search && registryState.search.text) {
            var stateSearchField = _this6.data.registry.fields.find(function (x) {
              return x.id === registryState.search.fieldId;
            });
            _this6.data.search.fieldTitle = stateSearchField.title;
            _this6.data.search.fieldId = stateSearchField.id;
            _this6.data.search.text = decodeURIComponent(registryState.search.text);
          }
          if (registryState.order && registryState.order.fieldId) {
            _this6.fieldsHelper.initDisplayFilters();
            var orderFieldId = registryState.order.fieldId.charAt(0).toLowerCase() + registryState.order.fieldId.substring(1);
            var stateOrderField = _this6.data.fields.find(function (f) {
              return f.id == orderFieldId;
            });
            if (stateOrderField == null) {
              throw "Не обнаружено поле c идентификатором " + registryState.order.fieldId;
            }
            _this6.data.displayFields.forEach(function (f) {
              return f.sortOrder = null;
            });
            stateOrderField.sortOrder = registryState.order.ascending ? OrderDirection.asc : OrderDirection.desc;
          }
        }
        if (needLoad) {
          _this6.load();
        }
        _this6.state.initing = false;
        _this6.$appLoader.hide();
      })["catch"](function () {
        _this6.state.initing = false;
        _this6.$appLoader.hide();
        _this6.data.error = "Ошибка загрузки реестра";
      });
    }
  }, {
    key: "setSearchField",
    value: function setSearchField(field) {
      if (this.data.search && this.data.search.fieldId && this.data.search.fieldId === field.id && this.data.search.fieldTitle === field.title) {
        return;
      }
      this.data.search.text = "";
      this.data.search.fieldTitle = field.title;
      this.data.search.fieldId = field.id;
    }
  }, {
    key: "canExport",
    value: function canExport() {
      var _this7 = this;
      var exportWarn = "Экспорт возможен только в случае заполненного фильтра \"Фамилия\"";
      var searchNotByLastname = function searchNotByLastname() {
        var lastNameId = "lastName";
        var searchFilter = _this7.data.search;
        return searchFilter.text && searchFilter.fieldId !== lastNameId;
      };
      if (searchNotByLastname()) {
        alert(exportWarn);
        return false;
      }
      return true;
    }
  }, {
    key: "equalArrays",
    value: function equalArrays(array1, array2) {
      if (!array1 || !array2) {
        return false;
      }
      return !_.chain(array1).difference(array2).union(_.difference(array2, array1)).value().length;
    }
  }, {
    key: "setSearchFields",
    value: function setSearchFields() {
      var _this8 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var availableFieldsArr = _.pluck(availableFields, "id");
      this.data.search.fields = this.data.registry.fields.filter(function (f) {
        return f.search;
      }).filter(function (item) {
        return availableFieldsArr.find(function (availableField) {
          return availableField === item.id;
        }) !== null;
      });
      if (this.data.search.fields.length) {
        var searchField = this.data.search.fields.find(function (f) {
          return f["default"];
        });
        searchField = this.data.search.fields.find(function (f) {
          return f.searchByDefault;
        }) || searchField;
        if (this.data.search && this.data.search.fieldId && _.some(this.data.search.fields, function (fld) {
          return fld.id === _this8.data.search.fieldId;
        }) && this.data.search.fieldId !== searchField.id) {
          return;
        }
        this.setSearchField(searchField);
      }
    }
  }, {
    key: "setSearch",
    value: function setSearch(_field) {
      var _this9 = this;
      var text = "";
      if (this.data.search && this.data.search.fieldId === _field.id) {
        text = this.data.search.text;
      }
      var modalInstance = this.$uibModal.open({
        template: "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u043E\u043B\u044E \"{{$ctrl.field.title}}\"</h4> \n\t\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.search\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary ng-binding\" ng-click=\"$ctrl.set()\">OK</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>",
        controllerAs: "$ctrl",
        controller: /*#__PURE__*/function () {
          function SetRegistryFieldSearchCtrl($uibModalInstance, search, field) {
            _classCallCheck(this, SetRegistryFieldSearchCtrl);
            this.$uibModalInstance = $uibModalInstance;
            this.search = search;
            this.field = field;
          }
          _createClass(SetRegistryFieldSearchCtrl, [{
            key: "cancel",
            value: function cancel() {
              this.$uibModalInstance.dismiss("cancel");
            }
          }, {
            key: "set",
            value: function set() {
              this.$uibModalInstance.close(this.search);
            }
          }]);
          return SetRegistryFieldSearchCtrl;
        }(),
        resolve: {
          search: function search() {
            return text;
          },
          field: function field() {
            return _field;
          }
        }
      });
      modalInstance.result.then(function (search) {
        if (search) {
          _this9.data.search = $.extend(_this9.data.search, {
            fieldId: _field.id,
            fieldTitle: _field.title,
            text: search
          });
        } else {
          _this9.data.search.text = "";
        }
        _this9.load();
      });
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.data.search.text = "";
      this.load();
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(field, newOrder) {
      if (!newOrder) {
        if (!field.sortOrder) {
          newOrder = OrderDirection.asc;
        } else {
          newOrder = field.sortOrder === OrderDirection.asc ? OrderDirection.desc : OrderDirection.asc;
        }
      }
      this.data.displayFields.forEach(function (f) {
        return f.sortOrder = null;
      });
      field.sortOrder = angular.copy(newOrder);
      this.load();
    }
  }, {
    key: "pageChange",
    value: function pageChange() {
      if (this.state.loading) {
        return;
      }
      this.load();
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this10 = this;
      var errorHandle = function errorHandle(message) {
        _this10.data.error = message;
        _this10.state.dataReady = true;
        _this10.state.loading = false;
      };
      //инициализация запрашиваемых полей
      var initRequestField = function initRequestField() {
        var fp = _this10.filterInfo.filterPanel.getValue();
        var filterValues = fp.getValues();
        var chain = _.chain(_this10.data.fields).filter(function (field) {
          if (!field.dependencies) {
            return true;
          }
          return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
        }).pluck("id");
        return chain.value();
      };
      var setLoadingState = function setLoadingState() {
        var body = _this10.$document.find("body");
        scrollable = body.scrollHeight > _this10.$document[0].documentElement.clientHeight;
        _this10.state.dataReady = false;
        _this10.state.loading = true;
        _this10.selection.dropSelect();
        if (scrollable) {
          body.css({
            "padding-right": "17px"
          });
        }
      };
      var unsetLoadingState = function unsetLoadingState() {
        var body = _this10.$document.find("body");
        if (scrollable) {
          body.css({
            "padding-right": ""
          });
        }
        _this10.state.dataReady = true;
        _this10.state.loading = false;
      };
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      setLoadingState();
      if (!this.paging.currentPageSize) {
        this.paging.currentPageSize = initialPageSize;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues()
        },
        fields: initRequestField(),
        page: this.paging.page,
        pageSize: this.paging.currentPageSize,
        search: null,
        order: null
      };
      if (this.data.search.fieldId && this.data.search.text) {
        data.search = {
          fieldId: this.data.search.fieldId,
          text: this.data.search.text
        };
      }
      var orderField;
      if (this.data.displayFields) {
        var _orderField = this.data.displayFields.find(function (f) {
          return typeof f.sortOrder !== "undefined" && f.sortOrder != null;
        });
        if (_orderField) {
          data.order = {
            fieldId: _orderField.id,
            ascending: _orderField.sortOrder === OrderDirection.asc
          };
        }
      }
      this.$http.post(this.registry.url, data).then(function (response) {
        _this10.data.error = null;
        try {
          _this10.data.registryData = response.data;
          _this10.paging.pageSize = _this10.paging.currentPageSize;
          //инициализация пейджинга
          if (_this10.paging.page !== _this10.data.registryData.page) {
            _this10.paging.page = _this10.data.registryData.page;
          }
          _this10.paging.totalRows = _this10.data.registryData.totalItems;
          //инициализация полей реестра
          _this10.fieldsHelper.initDisplayFilters();
          //инициализация сортировки
          var defOrder = _this10.data.registry.defaultOrder;
          if (orderField) {
            var orderFieldInDisplayFields = _this10.data.displayFields.find(function (f) {
              return f.id == orderField.id;
            });
            if (!orderFieldInDisplayFields) {
              _this10.data.displayFields.forEach(function (f) {
                return f.sortOrder = null;
              });
              orderField = null;
            }
          }
          if (!orderField && defOrder) {
            //todo. наверное нужно заменить this.data.registry.fields на this.data.fields
            orderField = _this10.data.registry.fields.find(function (x) {
              return x.id == defOrder.fieldId;
            });
            if (orderField) {
              orderField.sortOrder = defOrder.ascending ? OrderDirection.asc : OrderDirection.desc;
            }
          }
          //установка номеров строк
          _this10.data.registryData.rows.forEach(function (row, ind) {
            return row.rownum = (_this10.paging.page - 1) * _this10.paging.pageSize + ind + 1;
          });
        } catch (ex) {
          errorHandle("Ошибка обработки данных: " + ex.message);
          return;
        }
        unsetLoadingState();
        _this10.state.emptyData = !response.data.rows.length;
      }, function (response) {
        if (response && response.status === 401) {
          _this10.$dialogs.message(_this10.language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return _this10.$window.location.pathname = "/";
          });
          return;
        }
        errorHandle("Ошибка загрузки данных " + (response && response.data ? response.data.message + (response.data.details ? " " + response.data.details : "") : ""));
      });
    }
  }, {
    key: "clearLoad",
    value: function clearLoad() {
      var _this11 = this;
      this.paging.page = 1;
      if (this.data.search.fieldId && this.data.search && this.data.search.fields && this.data.search.fields.length && !this.data.search.fields.find(function (item) {
        return item.id === _this11.data.search.fieldId;
      })) {
        this.data.search.fieldId = this.data.search.fields[0].id;
        this.data.search.text = null;
      }
      ;
      this.load();
    }
    //экспорт данных
  }, {
    key: "export",
    value: function _export() {
      var _this12 = this;
      var getDefaultExportFields = function getDefaultExportFields() {
        var exportFields = _this12.data.displayFields;
        if (exportFields) {
          exportFields = exportFields.filter(function (field) {
            return field["default"];
          });
        }
        return exportFields;
      };
      if (!this.data.displayFields) {
        this.fieldsHelper.initDisplayFilters();
        this.data.displayFields = getDefaultExportFields();
      }
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues()
        },
        fields: _.pluck(this.data.displayFields, "id"),
        search: this.data.search,
        order: null
      };
      var orderField = this.data.displayFields.find(function (f) {
        return typeof f.sortOrder != "undefined" && f.sortOrder != null;
      });
      if (orderField) {
        data.order = {
          fieldId: orderField.id,
          ascending: orderField.sortOrder === OrderDirection.asc
        };
      }
      this.state.exporting = true;
      var wait = this.$dialogs.wait("Операция выполняется");
      this.$http.post(this.registry.url, data, {
        params: {
          "export": true
        }
      }).then(function (response) {
        var fileId = response.data;
        wait.close();
        var isValidTempFileId = /^[0-9a-f]{24}$/i.test(fileId);
        if (!isValidTempFileId) {
          _this12.$alerts.error("Ошибка экспорта данных.", "Неизвестный ответ");
          return;
        }
        _this12.downloadService.downloadFile("/webapi/files/".concat(fileId));
        _this12.state.exporting = false;
      }, function (response) {
        _this12.state.exporting = false;
        _this12.$alerts.error("Ошибка экспорта данных.", response.data && response.data.message);
        wait.close();
      });
    }
  }, {
    key: "execCmd",
    value:
    //выполнение команды реестра
    function execCmd(cmd) {
      var _this13 = this;
      var confirms = [];
      if (cmd.confirm) {
        confirms.push(function () {
          return _this13.$dialogs.confirm(cmd.confirm);
        });
      }
      extDeferred.when(confirms).then(function () {
        var wait = _this13.$dialogs.wait("Операция выполняется");
        var data = {
          itemId: _.pluck(_this13.selection.selected, "id")
        };
        _this13.$http.post("".concat(_this13.registry.url, "/command/").concat(cmd.id), null, {
          params: data
        }).then(function (response) {
          wait.close();
          var result = response.data;
          if (result.success) {
            _this13.$dialogs.message(result.message);
            _this13.load();
          } else {
            _this13.$dialogs.error(result.message);
            if (result.needReload) {
              _this13.load();
            }
          }
        }, function (response) {
          _this13.$dialogs.error(response.data && response.data.message, "Ошибка выполнения команды");
          wait.close();
        });
      });
    }
  }, {
    key: "settings",
    value:
    //настройки
    function settings() {
      var _this14 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var _oneCheckedOnly = function oneCheckedOnly(checked) {
        return checked && _.countBy(chooseFields, function (field) {
          return field.selected ? 'checked' : 'notChecked';
        }).checked === 1;
      };
      var chooseFields = availableFields.map(function (f) {
        return {
          id: f.id,
          title: f.title,
          selected: _this14.data.fields.find(function (x) {
            return x.id == f.id;
          }) ? true : false,
          oneCheckedOnly: function oneCheckedOnly(checked) {
            return _oneCheckedOnly(checked);
          }
        };
      });
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/global/templates/registrySettings.html",
        controller: 'RegistrySettingsCtrl',
        resolve: {
          fields: function fields() {
            return chooseFields;
          }
        }
      });
      modalInstance.result.then(function (fields) {
        var currentFieldsIds = _this14.data.fields.map(function (f) {
          return f.id;
        });
        var choosingFieldsIds = fields.map(function (f) {
          return f.id;
        });
        var selectedFieldsIds = fields.filter(function (f) {
          return f.selected;
        }).map(function (f) {
          return f.id;
        });
        //todo. что тут творится?
        var fieldIds = _.chain(_this14.data.registry.fields).pluck("id").difference(choosingFieldsIds).intersection(currentFieldsIds).union(selectedFieldsIds).value();
        var notSelectedFields = _this14.data.fields.filter(function (f) {
          return fieldIds.indexOf(f.id) == -1;
        });
        notSelectedFields.forEach(function (f) {
          return f.sortOrder = null;
        });
        _this14.data.fields = _this14.data.registry.fields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this14.data.displayFields = _this14.data.displayFields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this14.load();
      });
    }
  }]);
  return RegistryController;
}();
exports.RegistryController = RegistryController;
angular.module("irtech.netcity.common").controller("RegistryCommonCtrl", RegistryController).controller("SetRegistryFieldSearchCtrl", function ($scope, $uibModalInstance, search, field) {
  $.extend($scope, {
    search: search,
    field: field
  });
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $scope.set = function () {
    $uibModalInstance.close($scope.search);
  };
}).controller("RegistrySettingsCtrl", function ($scope, $uibModalInstance, fields) {
  $scope.fields = fields;
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $scope.set = function () {
    $uibModalInstance.close($scope.fields);
  };
});

/***/ }),
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependencyTracker = void 0;
var _filterpanel = __webpack_require__(30);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DependencyTracker = /*#__PURE__*/function () {
  function DependencyTracker(dependencies) {
    _classCallCheck(this, DependencyTracker);
    this.dependencies = dependencies;
  }
  _createClass(DependencyTracker, [{
    key: "isSatisfied",
    value: function isSatisfied(vals) {
      var _this = this;
      var unSatisfiedDep = this.dependencies.find(function (dep) {
        return !_this.checkDependency(vals, dep);
      });
      return unSatisfiedDep == null;
    }
  }, {
    key: "checkDependency",
    value: function checkDependency(vals, dep) {
      var relObject = dep.relatedObject;
      if (relObject.type === "Param") {
        return true;
      }
      if (relObject.type !== "Filter") {
        throw "Неизвестный тип зависимости для фильтра";
      }
      var relFilterValue = vals[relObject.ref];
      if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
        //return false;
        return dep.relatedObjectNotFoundResult == _filterpanel.FilterDependencyResult.satisfy;
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
          var arrValue = JSON.parse(dep.relatedValue);
          if (!Array.isArray(arrValue)) {
            return false;
          }
          return _.some(arrValue, function (v) {
            return v === relFilterValue;
          });
        default:
          return false;
      }
    }
  }]);
  return DependencyTracker;
}();
exports.DependencyTracker = DependencyTracker;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusInactive = exports.statusActive = exports.FilterStatus = exports.FilterDependencyResult = exports.DateRange = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FilterStatus;
exports.FilterStatus = FilterStatus;
(function (FilterStatus) {
  FilterStatus["active"] = "active";
  FilterStatus["inactive"] = "inactive";
  FilterStatus["emptyChoice"] = "emptyChoice";
})(FilterStatus || (exports.FilterStatus = FilterStatus = {}));
var statusActive = "active";
exports.statusActive = statusActive;
var statusInactive = "inactive";
exports.statusInactive = statusInactive;
var FilterDependencyResult;
exports.FilterDependencyResult = FilterDependencyResult;
(function (FilterDependencyResult) {
  FilterDependencyResult[FilterDependencyResult["notSatisfy"] = 0] = "notSatisfy";
  FilterDependencyResult[FilterDependencyResult["satisfy"] = 1] = "satisfy";
})(FilterDependencyResult || (exports.FilterDependencyResult = FilterDependencyResult = {}));
//класс описывающий диапазон дат
var DateRange = /*#__PURE__*/function () {
  function DateRange(startDate, endDate) {
    _classCallCheck(this, DateRange);
    this.startDate = startDate;
    this.endDate = endDate;
    this.source = this.toString();
  }
  _createClass(DateRange, [{
    key: "toString",
    value:
    //#представление диапазона в виде строки
    function toString() {
      // #используем штатную сериализацию даты
      // #она приводит дату в utc формат
      // #соответственно в рамках контрола работа с датами проходит с часами: дата (+часовой пояс)
      var ret = "";
      if (this.startDate) ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
      ret += " - ";
      if (this.endDate) ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
      return ret.replace(/"/g, "");
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.startDate <= this.endDate;
    }
  }], [{
    key: "parseDate",
    value: function parseDate(str) {
      var strDate = str.substring(0, 19);
      var date;
      if (strDate.length == 19) {
        date = new Date(strDate);
      } else {
        date = dateUtils.str2date(strDate);
      }
      return date;
    }
  }, {
    key: "parseRange",
    value: function parseRange(str) {
      var rangeArr = str.split(" - ");
      var startDate;
      var endDate;
      if (rangeArr[0]) startDate = DateRange.parseDate(rangeArr[0]);
      if (rangeArr[1]) endDate = DateRange.parseDate(rangeArr[1]);
      var range = new DateRange(startDate, endDate);
      range.source = str;
      return range;
    }
  }]);
  return DateRange;
}();
exports.DateRange = DateRange;

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TalentsCuratorsRegistryController = exports.TalentsCuratorsRegistryComponent = void 0;
var _registry = __webpack_require__(33);
var _addCurator = __webpack_require__(34);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TalentsCuratorsRegistryController = /*#__PURE__*/function () {
  TalentsCuratorsRegistryController.$inject = ["pageContext", "language", "$uibModal", "$location", "$alerts", "$dialogs", "curatorsRepository"];
  /*@ngInject*/
  function TalentsCuratorsRegistryController(pageContext, language, $uibModal, $location, $alerts, $dialogs, curatorsRepository) {
    var _this = this;
    _classCallCheck(this, TalentsCuratorsRegistryController);
    this.$uibModal = $uibModal;
    this.$location = $location;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.curatorsRepository = curatorsRepository;
    this.filter = {
      items: {
        schools: []
      },
      selected: {
        school: {
          id: -1,
          name: "Все"
        }
      }
    };
    var addCuratorButton = {
      title: "Добавить",
      action: function action() {
        _this.add();
      },
      icon: "glyphicon glyphicon-plus-sign",
      style: "btn-info"
    };
    var deleteCuratorButton = {
      title: "Удалить",
      action: function action() {
        _this["delete"]();
      },
      selectionMode: _registry.SelectionMode.Single,
      icon: "glyphicon glyphicon-minus-sign",
      style: "btn btn-danger"
    };
    var viewStudentsButton = {
      title: "Подопечные дети",
      action: function action() {
        _this.viewStudents();
      },
      selectionMode: _registry.SelectionMode.Single,
      icon: "icon-group",
      style: "btn btn-info"
    };
    pageContext.title = language.Generic.MenuFolders.kFEOCurators;
    pageContext.back = null;
    pageContext.parent = null;
    this.registryInfo = {
      url: "/webapi/em/curators/registry",
      filtersUrl: "/webapi/em/curators/registry/filter",
      buttons: [addCuratorButton, deleteCuratorButton, viewStudentsButton],
      linkButtons: [],
      extensions: null,
      compactFilters: true
    };
  }
  //добавление куратора
  _createClass(TalentsCuratorsRegistryController, [{
    key: "add",
    value: function add() {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _addCurator.AddCuratorComponent.templateUrl,
        controller: _addCurator.AddCuratorComponent.controller,
        controllerAs: _addCurator.AddCuratorComponent.controllerAs,
        size: "md",
        resolve: {
          schoolId: function schoolId() {
            return _this2.filter.selected.school.id;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.controller.load();
      });
    }
    //удаление куратора 
  }, {
    key: "delete",
    value: function _delete() {
      var _this3 = this;
      this.$dialogs.confirm("Вы действительно желаете удалить куратора?").then(function () {
        return _this3.curatorsRepository.removeCurator(_this3.controller.selection.selected[0].id);
      }).then(function () {
        _this3.$alerts.success("Куратор успешно удалён");
        _this3.controller.load();
      });
    }
  }, {
    key: "viewStudents",
    value: function viewStudents() {
      this.$location.path("/students/").search({
        curatorId: this.controller.selection.selected[0].id
      });
    }
  }]);
  return TalentsCuratorsRegistryController;
}();
exports.TalentsCuratorsRegistryController = TalentsCuratorsRegistryController;
var TalentsCuratorsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: TalentsCuratorsRegistryController,
  controllerAs: "$ctrl",
  reloadOnSearch: false
};
exports.TalentsCuratorsRegistryComponent = TalentsCuratorsRegistryComponent;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCenterDecorator = exports.SelectionMode = exports.RegistryBasedComponentTemplate = exports.PreserveWhiteSpaceDecorator = exports.MapDecorator = exports.LinkFieldDecorator = exports.EnumItemDecorator = exports.DateTimeDecorator = exports.DateDecorator = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var SelectionMode;
exports.SelectionMode = SelectionMode;
(function (SelectionMode) {
  SelectionMode["Empty"] = "Empty";
  SelectionMode["Multiple"] = "Multiple";
  SelectionMode["Single"] = "Single";
})(SelectionMode || (exports.SelectionMode = SelectionMode = {}));
var LinkFieldDecorator = /*#__PURE__*/function () {
  function LinkFieldDecorator(linkAction) {
    _classCallCheck(this, LinkFieldDecorator);
    this.linkAction = linkAction;
    this.template = "<a href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">{{content}}</a>";
  }
  _createClass(LinkFieldDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["action"] = function (row) {
        _this.linkAction(row);
      };
    }
  }]);
  return LinkFieldDecorator;
}();
exports.LinkFieldDecorator = LinkFieldDecorator;
var MapDecorator = /*#__PURE__*/function () {
  function MapDecorator(map) {
    _classCallCheck(this, MapDecorator);
    this.map = map;
  }
  _createClass(MapDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      scope["content"] = this.map(scope["content"]);
    }
  }]);
  return MapDecorator;
}();
exports.MapDecorator = MapDecorator;
var DateDecorator = /*#__PURE__*/function (_MapDecorator) {
  _inherits(DateDecorator, _MapDecorator);
  var _super = _createSuper(DateDecorator);
  function DateDecorator() {
    _classCallCheck(this, DateDecorator);
    var mapFunc = function mapFunc(date) {
      if (!date || date == null || typeof date == "undefined") {
        return "";
      }
      var dtDate = new Date(date);
      return dateUtils.date2str(dtDate);
    };
    return _super.call(this, mapFunc);
  }
  return _createClass(DateDecorator);
}(MapDecorator);
exports.DateDecorator = DateDecorator;
var DateTimeDecorator = /*#__PURE__*/function (_MapDecorator2) {
  _inherits(DateTimeDecorator, _MapDecorator2);
  var _super2 = _createSuper(DateTimeDecorator);
  function DateTimeDecorator() {
    _classCallCheck(this, DateTimeDecorator);
    var mapFunc = function mapFunc(date) {
      if (!date || date == null || typeof date == "undefined") {
        return "";
      }
      var dtDate = new Date(date);
      return dateUtils.date2str(dtDate) + " " + dateUtils.time2Str_ss(dtDate);
    };
    return _super2.call(this, mapFunc);
  }
  return _createClass(DateTimeDecorator);
}(MapDecorator);
exports.DateTimeDecorator = DateTimeDecorator;
var PreserveWhiteSpaceDecorator = /*#__PURE__*/function () {
  function PreserveWhiteSpaceDecorator() {
    _classCallCheck(this, PreserveWhiteSpaceDecorator);
  }
  _createClass(PreserveWhiteSpaceDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.css("white-space", "pre-line");
    }
  }]);
  return PreserveWhiteSpaceDecorator;
}();
exports.PreserveWhiteSpaceDecorator = PreserveWhiteSpaceDecorator;
var TextCenterDecorator = /*#__PURE__*/function () {
  function TextCenterDecorator() {
    _classCallCheck(this, TextCenterDecorator);
  }
  _createClass(TextCenterDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.parent().addClass("text-center");
    }
  }]);
  return TextCenterDecorator;
}();
exports.TextCenterDecorator = TextCenterDecorator;
var EnumItemDecorator = /*#__PURE__*/function (_MapDecorator3) {
  _inherits(EnumItemDecorator, _MapDecorator3);
  var _super3 = _createSuper(EnumItemDecorator);
  function EnumItemDecorator() {
    _classCallCheck(this, EnumItemDecorator);
    var mapFunc = function mapFunc(val) {
      var itemDto = val;
      if (itemDto === null || itemDto === void 0 ? void 0 : itemDto.name) {
        return itemDto.name;
      }
      return "";
    };
    return _super3.call(this, mapFunc);
  }
  return _createClass(EnumItemDecorator);
}(MapDecorator);
exports.EnumItemDecorator = EnumItemDecorator;
var RegistryBasedComponentTemplate = "<registry info=\"ctrl.registryInfo\" controller=\"ctrl.controller\"></registry>";
exports.RegistryBasedComponentTemplate = RegistryBasedComponentTemplate;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCuratorComponent = void 0;
var _searchSource = _interopRequireDefault(__webpack_require__(35));
var _netcityModalCtrl = __webpack_require__(36);
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
var AddCuratorController = /*#__PURE__*/function (_NetCityModalControll) {
  AddCuratorController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "$alerts", "$http", "curatorsRepository", "schoolId"];
  _inherits(AddCuratorController, _NetCityModalControll);
  var _super = _createSuper(AddCuratorController);
  /*@ngInject*/
  function AddCuratorController($scope, $uibModalInstance, changeTracker, $dialogs, language, $alerts, $http, curatorsRepository, schoolId) {
    var _this;
    _classCallCheck(this, AddCuratorController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.curatorsRepository = curatorsRepository;
    _this.schoolId = schoolId;
    _this.data = {
      curator: {
        schoolId: null,
        userId: null,
        fio: null,
        position: null,
        contacts: null
      }
    };
    _this.header = "Назначение куратора";
    var saveBtn = {
      title: _this.language.Generic.Buttons.kSave,
      "class": ["btn-primary"],
      action: function action() {
        return _this.save();
      },
      isEnabled: function isEnabled() {
        var _a;
        return (_a = _this.data.curator) === null || _a === void 0 ? void 0 : _a.userId;
      },
      icon: "glyphicon glyphicon-floppy-save"
    };
    var cancelBtn = {
      title: _this.language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-remove-sign"
    };
    _this.buttons = [saveBtn, cancelBtn];
    _this.searchCtx = new _searchSource["default"]({
      schools: {
        url: "/webapi/schools/search",
        searchParam: "name",
        params: {
          take: 20
        }
      },
      staffs: {
        url: function url() {
          return "/webapi/users/search";
        },
        searchParam: "name",
        params: {
          staff: true,
          take: 20,
          potentialCurator: true,
          schoolId: function schoolId() {
            return _this.data.curator.schoolId;
          }
        }
      }
    }, $http);
    return _this;
  }
  _createClass(AddCuratorController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      this.curatorsRepository.addCurator(this.data.curator).then(function () {
        _this2.$uibModalInstance.close(_this2.data.curator);
        _this2.$alerts.success(_this2.language.Generic.TalentStudents.kOrgStaffAssignedCurator);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return AddCuratorController;
}(_netcityModalCtrl.NetCityModalController);
var AddCuratorComponent = {
  controller: AddCuratorController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/talents/curators/add/addCurator.component.html"
};
exports.AddCuratorComponent = AddCuratorComponent;

/***/ }),
/* 35 */
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
var SearchSource = /*#__PURE__*/function () {
  function SearchSource(settings, $http) {
    _classCallCheck(this, SearchSource);
    this.$http = $http;
    for (var searchItemKey in settings) {
      if (settings.hasOwnProperty(searchItemKey)) {
        this.appendSearchItem(searchItemKey, settings[searchItemKey]);
      }
    }
  }
  _createClass(SearchSource, [{
    key: "appendSearchItem",
    value: function appendSearchItem(key, itemSettings) {
      var defSettings = {
        map: function map(item) {
          return item;
        },
        minChars: 3,
        searchParam: "name",
        emptyChoiceItem: null
      };
      var settings = {};
      angular.extend(settings, defSettings, itemSettings);
      var ctx = this;
      var itemCtx = {
        items: [],
        search: function search(text) {
          if (!text || text.length < settings.minChars) {
            return;
          }
          itemCtx.items = [{
            name: 'Поиск...'
          }];
          var params = angular.extend({}, settings.params);
          params[settings.searchParam] = text;

          //распаковка параметров из функций
          for (var property in params) {
            if (params.hasOwnProperty(property)) {
              var propValue = params[property];
              if (typeof propValue == "function") {
                params[property] = propValue();
              }
            }
          }
          var url = settings.url;
          if (typeof url === "function") {
            url = url();
          }
          ctx.$http.get(url, {
            params: params
          }).then(function (response) {
            var emptyChoiceItems = settings.emptyChoiceItem == null ? [] : [settings.emptyChoiceItem];
            var auxItems = settings.auxItems == null ? [] : settings.auxItems;
            if (!response.data.length) {
              itemCtx.items = [{
                name: 'Совпадений не найдено'
              }].concat(emptyChoiceItems).concat(auxItems);
            } else {
              itemCtx.items = emptyChoiceItems.concat(auxItems).concat(_.map(response.data, settings.map));
            }
          })["catch"](function (response) {
            $alerts.error(response.data.message, response.data.details);
          });
        }
      };
      this[key] = itemCtx;
    }
  }]);
  return SearchSource;
}();
exports["default"] = SearchSource;

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEventsRepository = exports.EventMembersRepository = exports.EmEventsRepository = exports.AwardEventsRepository = void 0;
var _repository = __webpack_require__(7);
var _model = __webpack_require__(38);
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
var AwardEventsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AwardEventsRepository, _BaseRepository);
  var _super = _createSuper(AwardEventsRepository);
  function AwardEventsRepository() {
    _classCallCheck(this, AwardEventsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AwardEventsRepository, [{
    key: "getAwardEvents",
    value: function getAwardEvents(filter, expand) {
      filter.eventType = _model.EventType.AwardEvents;
      var params = Object.assign({}, filter, {
        expand: expand
      });
      return this.$http.get("/webapi/events/get-paged-list", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEvent",
    value: function getEvent(eventId) {
      return this.$http.get("/webapi/events/".concat(eventId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "addEvent",
    value: function addEvent(event) {
      return this.$http.post("/webapi/events/", event).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editEvent",
    value: function editEvent(event) {
      return this.$http.put("/webapi/events/", event).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteEvent",
    value: function deleteEvent(id) {
      return this.$http["delete"]("/webapi/events/" + id).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAvailable",
    value: function getAvailable(yearId) {
      return this.$http.get("/webapi/events/awardEvents/available", {
        params: {
          yearId: yearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFounders",
    value: function getFounders(yearId, level, awardEventType, showPrivateEvents) {
      var params = {
        yearId: yearId,
        level: level,
        awardEventType: awardEventType,
        showPrivateEvents: showPrivateEvents
      };
      return this.$http.get("/webapi/events/organizations", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPlaces",
    value: function getPlaces(yearId, level, awardEventType, showPrivateEvents) {
      var params = {
        yearId: yearId,
        level: level,
        awardEventType: awardEventType,
        showPrivateEvents: showPrivateEvents
      };
      return this.$http.get("/webapi/events/places", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "searchOrgs",
    value: function searchOrgs(name) {
      return this.$http.get("/webapi/events/organizations/search", {
        params: {
          name: name
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEventFiles",
    value: function getEventFiles(eventId) {
      return this.$http.get("/webapi/events/".concat(eventId, "/files")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteEventFile",
    value: function deleteEventFile(eventId, fileId) {
      return this.$http["delete"]("/webapi/events/".concat(eventId, "/files/").concat(fileId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getNationOlympDistrictOrganizers",
    value: function getNationOlympDistrictOrganizers(emId) {
      return this.$http.get("/webapi/events/nation-olymp/district-organizers", {
        params: {
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getOlympSubjects",
    value: function getOlympSubjects(at) {
      return this.$http.get("/webapi/references/olympsubjects?at=".concat(at)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAwardEventDirections",
    value: function getAwardEventDirections(at) {
      return this.$http.get("/webapi/references/awardeventdirections?at=".concat(at)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAppealStatuses",
    value: function getAppealStatuses() {
      return this.$http.get("/webapi/references/appealstatuses").then(this.handleResponse)["catch"](this.handleError);
    }
  }], [{
    key: "getDownloadFileUrl",
    value: function getDownloadFileUrl(eventId, fileId) {
      return "/webapi/events/".concat(eventId, "/files/").concat(fileId);
    }
  }, {
    key: "getSaveFilesUrl",
    value: function getSaveFilesUrl(eventId) {
      return "/webapi/events/".concat(eventId, "/files");
    }
  }]);
  return AwardEventsRepository;
}(_repository.BaseRepository);
exports.AwardEventsRepository = AwardEventsRepository;
var UserEventsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(UserEventsRepository, _BaseRepository2);
  var _super2 = _createSuper(UserEventsRepository);
  function UserEventsRepository() {
    _classCallCheck(this, UserEventsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(UserEventsRepository, [{
    key: "getUserEventList",
    value: function getUserEventList(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/events")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeUserEvent",
    value: function removeUserEvent(userId, eventMemberId) {
      return this.$http["delete"]("/webapi/users/".concat(userId, "/events"), {
        params: {
          eventMemberId: eventMemberId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return UserEventsRepository;
}(_repository.BaseRepository);
exports.UserEventsRepository = UserEventsRepository;
var EmEventsRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(EmEventsRepository, _BaseRepository3);
  var _super3 = _createSuper(EmEventsRepository);
  function EmEventsRepository() {
    _classCallCheck(this, EmEventsRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(EmEventsRepository, [{
    key: "getEmYears",
    value: function getEmYears() {
      return this.$http.get("/webapi/em/years").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEmYear",
    value: function getEmYear(globalYearId) {
      var options = {
        params: {
          educYearId: globalYearId
        }
      };
      return this.$http.get("/webapi/em/years", options).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEventsLevels",
    value: function getEventsLevels() {
      return this.$http.get("/webapi/events/levels").then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return EmEventsRepository;
}(_repository.BaseRepository);
exports.EmEventsRepository = EmEventsRepository;
var EventMembersRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(EventMembersRepository, _BaseRepository4);
  var _super4 = _createSuper(EventMembersRepository);
  function EventMembersRepository() {
    _classCallCheck(this, EventMembersRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(EventMembersRepository, [{
    key: "getEventMember",
    value: function getEventMember(eventId, memberId, expand) {
      return this.$http.get("/webapi/events/".concat(eventId, "/members/").concat(memberId), {
        params: {
          expand: expand
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadEventMembers",
    value: function loadEventMembers(eventId, expand) {
      return this.$http.get("/webapi/events/".concat(eventId, "/members"), {
        params: {
          expand: expand
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editEventMembers",
    value: function editEventMembers(eventId, saveModel) {
      return this.$http.put("/webapi/events/".concat(eventId, "/members"), saveModel).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "addEventMember",
    value: function addEventMember(eventId, saveModel) {
      var defaultErrHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var res = this.$http.post("/webapi/events/".concat(eventId, "/members"), saveModel).then(this.handleResponse);
      if (defaultErrHandler) {
        return res["catch"](this.handleError);
      }
      return res;
    }
  }, {
    key: "generateAutomaticallyMemberList",
    value: function generateAutomaticallyMemberList(eventId) {
      return this.$http.post("/webapi/events/".concat(eventId, "/members/generate-automatically")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeEventMember",
    value: function removeEventMember(eventId, memberId) {
      return this.$http["delete"]("/webapi/events/".concat(eventId, "/members/").concat(memberId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return EventMembersRepository;
}(_repository.BaseRepository);
exports.EventMembersRepository = EventMembersRepository;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayRange = exports.VisitForm = exports.UserEventViewModel = exports.SportTitle = exports.SportCategory = exports.RegistrationType = exports.ParticipiationForm = exports.OlympAppealStatus = exports.EventViewModel = exports.EventType = exports.EventResultsViewModel = exports.EventRemoveResult = exports.EventOrgModel = exports.EventMemberViewModel = exports.EventMemberTitle = exports.EventMemberExpand = exports.EventLevel = exports.AwardEventType = exports.AwardEventStatus = void 0;
var _references = __webpack_require__(39);
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var getArrayRange = function getArrayRange(intArray) {
  var initRanges = [];
  var ranges = intArray.reduce(function (ranges, g) {
    if (ranges.length == 0) {
      ranges.push({
        start: g,
        end: g
      });
      return ranges;
    }
    var curRange = ranges[ranges.length - 1];
    if (curRange.end == g - 1) {
      curRange.end = g;
      return ranges;
    }
    ranges.push({
      start: g,
      end: g
    });
    return ranges;
  }, initRanges);
  return ranges;
};
//модель представления мероприятия
exports.getArrayRange = getArrayRange;
var EventOrgModel = /*#__PURE__*/_createClass(function EventOrgModel(dto) {
  _classCallCheck(this, EventOrgModel);
  var _a, _b;
  this.dto = dto;
  if (dto) {
    this.school = dto.school;
    this.educManagement = dto.educManagement;
    if (this.school) {
      this.id = this.school.id;
    } else if (this.educManagement) {
      this.id = this.educManagement.id;
    }
    this.other = dto.other;
    this.name = ((_a = dto.school) === null || _a === void 0 ? void 0 : _a.name) || ((_b = dto.educManagement) === null || _b === void 0 ? void 0 : _b.name) || dto.other;
  } else {
    this.name = " - ";
  }
}); //модель представления мероприятия
exports.EventOrgModel = EventOrgModel;
var EventViewModel = /*#__PURE__*/function () {
  function EventViewModel(dto) {
    _classCallCheck(this, EventViewModel);
    this.dto = dto;
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    this.founder = new EventOrgModel(dto.founder);
    this.place = new EventOrgModel(dto.organization);
    this.deleted = dto.deleted;
    this.subject = dto.subject;
    this.stateId = dto.stateId;
    this.municipalityId = dto.municipalityId;
    this.municipality = dto.municipality;
    this._globalYearId = dto.globalYearId;
    if (this.dto.deleted) {
      this.name += " (отменено)";
    }
    if (dto.partForm) {
      this.partForm = _references.References.participiationForms.indexer[dto.partForm];
    }
    if (dto.visitForm) {
      this.visitForm = _references.References.visitForms.indexer[dto.visitForm];
    }
    if (dto.level) {
      this.level = _references.References.eventLevels.indexer[dto.level].name;
    }
    if (dto.status) {
      this.status = _references.References.awardEventStatuses.indexer[dto.status];
    }
    this.awardEventType = _references.References.awardEventTypes.indexer[dto.awardEventType];
    this.startTime = dateUtils.asUTCDate(dateUtils.getLocalDateTime(dto.startTime));
    this.date = dateUtils.date2str(this.startTime);
    if (dto.endTime && dto.endTime != dto.startTime) {
      this.endTime = dateUtils.asUTCDate(dateUtils.getLocalDateTime(dto.endTime));
      this.date += " - " + dateUtils.date2str(this.endTime);
    }
    this.curatorId = dto.curatorId;
    this.curator = dto.curator;
    this.olympSubject = dto.olympSubject;
    this.grades = dto.grades;
    this.personalEvent = this.curatorId == appContext.userId;
  }
  _createClass(EventViewModel, [{
    key: "isNationOlympiad",
    get: function get() {
      return this.awardEventType.id == AwardEventType.NationOlympiad;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      if ((this.endTime || this.startTime) <= new Date()) return "Ended";
      if (this.startTime >= new Date()) return "Future";
    }
  }, {
    key: "getGrades",
    value: function getGrades() {
      var ranges = getArrayRange(this.grades);
      var gradesStr = ranges.reduce(function (c, g) {
        return c += ", " + (g.start == g.end ? g.start : g.start + "-" + g.end);
      }, "").substr(2);
      return gradesStr;
    }
  }, {
    key: "isCurrentEmEventOrganizer",
    get: function get() {
      var _a, _b;
      return appContext.emId && ((_b = (_a = this.dto.founder) === null || _a === void 0 ? void 0 : _a.educManagement) === null || _b === void 0 ? void 0 : _b.id) == appContext.emId;
    }
  }, {
    key: "isRegionalLevel",
    get: function get() {
      return this.dto.level == EventLevel.Regional;
    }
  }, {
    key: "isDistrictLevel",
    get: function get() {
      return this.dto.level == EventLevel.District;
    }
  }, {
    key: "canEditByOrganizer",
    get: function get() {
      if (!this.isNationOlympiad) {
        return true;
      }
      if (!this.isDistrictLevel && !this.isRegionalLevel) {
        return true;
      }
      if (!appContext.emId) {
        return true;
      }
      return this.isCurrentEmEventOrganizer;
    }
  }, {
    key: "canEditMembers",
    get: function get() {
      var canEditByStatus = this.dto.status == AwardEventStatus.RegisteringMembers || this.dto.status == AwardEventStatus.Organizing || this.dto.status == AwardEventStatus.Summarizing;
      return canEditByStatus && this.canEditByOrganizer;
    }
  }, {
    key: "canEditMemberResults",
    get: function get() {
      return this.dto.status == AwardEventStatus.Organizing || this.dto.status == AwardEventStatus.Summarizing;
    }
  }]);
  return EventViewModel;
}(); //модель представления результатов участия в мероприятии
exports.EventViewModel = EventViewModel;
var EventResultsViewModel = /*#__PURE__*/_createClass(function EventResultsViewModel(dto, nationOlympEvent) {
  _classCallCheck(this, EventResultsViewModel);
  this.dto = dto;
  this.specialNotes = dto.specialNotes;
  this.results = [];
  if (dto.title) {
    this.title = _references.References.eventMemberTitles.indexer[dto.title];
    this.results.push({
      type: "Итог",
      item: this.title.name
    });
  }
  if (dto.rank && !nationOlympEvent) {
    this.rank = dto.rank;
    this.results.push({
      type: "Место/рейтинг",
      item: this.rank
    });
  }
  if (_typeof(dto.score) != undefined && dto.score != null && nationOlympEvent) {
    this.score = dto.score;
    this.results.push({
      type: "Набрано баллов",
      item: this.score
    });
  }
  if (dto.sportTitle) {
    this.sportTitle = _references.References.sportTitles.indexer[dto.sportTitle];
    this.results.push({
      type: "Спортивное звание",
      item: this.sportTitle.name
    });
  }
  if (dto.sportCategory) {
    this.sportCategory = _references.References.sportCategories.indexer[dto.sportCategory];
    this.results.push({
      type: "Спортивный разряд",
      item: this.sportCategory.name
    });
  }
  if (dto.specialNotes) {
    this.specialNotes = dto.specialNotes;
    this.results.push({
      type: "Особые отметки",
      item: this.specialNotes
    });
  }
  if (dto.files) {
    this.files = dto.files;
  } else {
    this.files = [];
  }
}); //модель представления мероприятия
exports.EventResultsViewModel = EventResultsViewModel;
var EventMemberViewModel = /*#__PURE__*/function (_EventResultsViewMode) {
  _inherits(EventMemberViewModel, _EventResultsViewMode);
  var _super = _createSuper(EventMemberViewModel);
  function EventMemberViewModel(dto, nationOlympEvent) {
    var _this;
    _classCallCheck(this, EventMemberViewModel);
    _this = _super.call(this, dto, nationOlympEvent);
    _this.id = dto.id;
    _this.user = angular.copy(dto.user);
    _this.user.birthDate = dateUtils.date2str(new Date(_this.user.birthDate));
    _this.organization = dto.organization;
    return _this;
  }
  return _createClass(EventMemberViewModel);
}(EventResultsViewModel);
exports.EventMemberViewModel = EventMemberViewModel;
var UserEventViewModel = /*#__PURE__*/_createClass(function UserEventViewModel(dto) {
  _classCallCheck(this, UserEventViewModel);
  this.dto = dto;
  this.eventMemberId = dto.eventMemberId;
  this.eventInfo = new EventViewModel(dto.eventInfo);
  this.participationInfo = new EventResultsViewModel(dto.participationInfo, this.eventInfo.isNationOlympiad);
  this.curator = dto.curator;
  if (this.curator) {
    this.curator.info = [];
    this.curator.info.push({
      title: "ФИО",
      text: this.curator.fio
    });
    if (this.curator.position) this.curator.info.push({
      title: "Должность",
      text: this.curator.position
    });
    if (this.curator.contacts) this.curator.info.push({
      title: "Контактная информация",
      text: this.curator.contacts
    });
  }
});
exports.UserEventViewModel = UserEventViewModel;
var EventType;
exports.EventType = EventType;
(function (EventType) {
  EventType["Holidays"] = "Holidays";
  EventType["Vacations"] = "Vacations";
  EventType["ClassEvents"] = "ClassEvents";
  EventType["AwardEvents"] = "AwardEvents";
  EventType["SchoolEvent"] = "SchoolEvent";
})(EventType || (exports.EventType = EventType = {}));
var EventRemoveResult;
exports.EventRemoveResult = EventRemoveResult;
(function (EventRemoveResult) {
  EventRemoveResult["Deleted"] = "Deleted";
  EventRemoveResult["SetAsDeleted"] = "SetAsDeleted";
  EventRemoveResult["Cancelled"] = "Cancelled";
})(EventRemoveResult || (exports.EventRemoveResult = EventRemoveResult = {}));
var AwardEventType;
exports.AwardEventType = AwardEventType;
(function (AwardEventType) {
  AwardEventType["Olympiad"] = "Olympiad";
  AwardEventType["Competition"] = "Competition";
  AwardEventType["Tournament"] = "Tournament";
  AwardEventType["Game"] = "Game";
  AwardEventType["SportEvent"] = "SportEvent";
  AwardEventType["Performance"] = "Performance";
  AwardEventType["Kvn"] = "Kvn";
  AwardEventType["Other"] = "Other";
  AwardEventType["Contest"] = "Contest";
  AwardEventType["NationOlympiad"] = "NationOlympiad";
})(AwardEventType || (exports.AwardEventType = AwardEventType = {}));
var EventLevel;
exports.EventLevel = EventLevel;
(function (EventLevel) {
  EventLevel["International"] = "International";
  EventLevel["Federal"] = "Federal";
  EventLevel["Regional"] = "Regional";
  EventLevel["Municipal"] = "Municipal";
  EventLevel["District"] = "District";
  EventLevel["School"] = "School";
})(EventLevel || (exports.EventLevel = EventLevel = {}));
var OlympAppealStatus;
exports.OlympAppealStatus = OlympAppealStatus;
(function (OlympAppealStatus) {
  OlympAppealStatus["NewOrder"] = "NewOrder";
  OlympAppealStatus["WorkViewed"] = "WorkViewed";
  OlympAppealStatus["Appeal"] = "Appeal";
  OlympAppealStatus["AppealReview"] = "AppealReview";
  OlympAppealStatus["Completed"] = "Completed";
})(OlympAppealStatus || (exports.OlympAppealStatus = OlympAppealStatus = {}));
var ParticipiationForm;
exports.ParticipiationForm = ParticipiationForm;
(function (ParticipiationForm) {
  ParticipiationForm[ParticipiationForm["Team"] = 0] = "Team";
  ParticipiationForm[ParticipiationForm["Individual"] = 1] = "Individual";
})(ParticipiationForm || (exports.ParticipiationForm = ParticipiationForm = {}));
var VisitForm;
exports.VisitForm = VisitForm;
(function (VisitForm) {
  VisitForm["FullTime"] = "FullTime";
  VisitForm["Distance"] = "Distance";
  VisitForm["FullTimeDistance"] = "FullTimeDistance";
  VisitForm["Extramural"] = "Extramural";
})(VisitForm || (exports.VisitForm = VisitForm = {}));
var RegistrationType;
exports.RegistrationType = RegistrationType;
(function (RegistrationType) {
  RegistrationType["Public"] = "Public";
  RegistrationType["ByStaff"] = "ByStaff";
})(RegistrationType || (exports.RegistrationType = RegistrationType = {}));
var EventMemberTitle;
exports.EventMemberTitle = EventMemberTitle;
(function (EventMemberTitle) {
  EventMemberTitle["Winner"] = "Winner";
  EventMemberTitle["Prizewinner"] = "Prizewinner";
  EventMemberTitle["Dilpomant"] = "Dilpomant";
  EventMemberTitle["Laureate"] = "Laureate";
  EventMemberTitle["CertifOfParticipation"] = "CertifOfParticipation";
  EventMemberTitle["Gratitude"] = "Gratitude";
})(EventMemberTitle || (exports.EventMemberTitle = EventMemberTitle = {}));
var SportTitle;
exports.SportTitle = SportTitle;
(function (SportTitle) {
  SportTitle["MasterOfSport"] = "MasterOfSport";
  SportTitle["HonoredMasterOfSports"] = "HonoredMasterOfSports";
  SportTitle["InternationalMasterOfSports"] = "InternationalMasterOfSports";
})(SportTitle || (exports.SportTitle = SportTitle = {}));
var AwardEventStatus;
exports.AwardEventStatus = AwardEventStatus;
(function (AwardEventStatus) {
  AwardEventStatus["RegisteringMembers"] = "RegisteringMembers";
  AwardEventStatus["Organizing"] = "Organizing";
  AwardEventStatus["Summarizing"] = "Summarizing";
  AwardEventStatus["Completed"] = "Completed";
  AwardEventStatus["Canceled"] = "Canceled";
})(AwardEventStatus || (exports.AwardEventStatus = AwardEventStatus = {}));
var SportCategory;
exports.SportCategory = SportCategory;
(function (SportCategory) {
  SportCategory[SportCategory["First"] = 0] = "First";
  SportCategory[SportCategory["Second"] = 1] = "Second";
  SportCategory[SportCategory["TheThird"] = 2] = "TheThird";
  SportCategory[SportCategory["FirstYouth"] = 3] = "FirstYouth";
  SportCategory[SportCategory["SecondYouth"] = 4] = "SecondYouth";
  SportCategory[SportCategory["TheThirdYouth"] = 5] = "TheThirdYouth";
})(SportCategory || (exports.SportCategory = SportCategory = {}));
var EventMemberExpand;
exports.EventMemberExpand = EventMemberExpand;
(function (EventMemberExpand) {
  EventMemberExpand["Organization"] = "organization";
  EventMemberExpand["Files"] = "files";
})(EventMemberExpand || (exports.EventMemberExpand = EventMemberExpand = {}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.References = void 0;
var References = {
  awardEventTypes: [{
    id: "Olympiad",
    name: "Олимпиада"
  }, {
    id: "NationOlympiad",
    name: "Всероссийская олимпиада школьников"
  }, {
    id: "Competition",
    name: "Соревнование"
  }, {
    id: "Tournament",
    name: "Турнир"
  }, {
    id: "Game",
    name: "Игра"
  }, {
    id: "SportEvent",
    name: "Спорт"
  }, {
    id: "Performance",
    name: "Выступление"
  }, {
    id: "Contest",
    name: "Конкурс"
  }, {
    id: "Kvn",
    name: "КВН"
  }, {
    id: "HealthPreservation",
    name: "Здоровьесбережение"
  }, {
    id: "Other",
    name: "Другое"
  }],
  eventLevels: [{
    id: "International",
    name: "Международный"
  }, {
    id: "Federal",
    name: "Всероссийский"
  }, {
    id: "Regional",
    name: "Региональный"
  }, {
    id: "District",
    name: "Окружной"
  }, {
    id: "Municipal",
    name: "Муниципальный"
  }, {
    id: "School",
    name: "Школьный"
  }],
  sportTitles: [{
    id: "MasterOfSport",
    name: "Мастер спорта"
  }, {
    id: "HonoredMasterOfSports",
    name: "Заслуженный мастер спорта"
  }, {
    id: "InternationalMasterOfSports",
    name: "Мастер спорта международного класса"
  }],
  eventMemberTitles: [{
    id: "Winner",
    name: "Победитель"
  }, {
    id: "Prizewinner",
    name: "Призер"
  }, {
    id: "Dilpomant",
    name: "Дипломант"
  }, {
    id: "Laureate",
    name: "Лауреат"
  }, {
    id: "CertifOfParticipation",
    name: "Сертификат участника"
  }, {
    id: "Gratitude",
    name: "Благодарность"
  }],
  sportCategories: [{
    id: "CandidateMasterOfSport",
    name: "Кандидат в мастера спорта"
  }, {
    id: "First",
    name: "Первый"
  }, {
    id: "Second",
    name: "Второй"
  }, {
    id: "TheThird",
    name: "Третий"
  }, {
    id: "FirstYouth",
    name: "Первый юношеский"
  }, {
    id: "SecondYouth",
    name: "Второй юношеский"
  }, {
    id: "TheThirdYouth",
    name: "Третий юношеский"
  }],
  visitForms: [{
    id: "FullTime",
    name: "Очная"
  }, {
    id: "Distance",
    name: "Дистанционная"
  }, {
    id: "FullTimeDistance",
    name: "Очно-дистанционная"
  }, {
    id: "Extramural",
    name: "Заочная"
  }],
  participiationForms: [{
    id: "Team",
    name: "Командное"
  }, {
    id: "Individual",
    name: "Индивидуальное"
  }],
  awardEventStatuses: [{
    id: "RegisteringMembers",
    name: "Регистрация участников"
  }, {
    id: "Organizing",
    name: "Проведение"
  }, {
    id: "Summarizing",
    name: "Подведение итогов"
  }, {
    id: "Completed",
    name: "Завершено"
  }, {
    id: "Canceled",
    name: "Отменено"
  }],
  eventStatuses: [{
    id: "All",
    name: "Все"
  }, {
    id: "Ended",
    name: "Завершенные"
  }, {
    id: "Future",
    name: "Предстоящие"
  }],
  eventRegistrationTypes: [{
    id: "Public",
    name: "Общедоступное"
  }, {
    id: "ByStaff",
    name: "По приглашениям"
  }]
};
exports.References = References;
References.awardEventTypes.indexer = _.indexBy(References.awardEventTypes, "id");
References.eventLevels.indexer = _.indexBy(References.eventLevels, "id");
References.sportTitles.indexer = _.indexBy(References.sportTitles, "id");
References.eventMemberTitles.indexer = _.indexBy(References.eventMemberTitles, "id");
References.sportCategories.indexer = _.indexBy(References.sportCategories, "id");
References.visitForms.indexer = _.indexBy(References.visitForms, "id");
References.participiationForms.indexer = _.indexBy(References.participiationForms, "id");
References.eventStatuses.indexer = _.indexBy(References.eventStatuses, "id");
References.awardEventStatuses.indexer = _.indexBy(References.awardEventStatuses, "id");
References.eventRegistrationTypes.indexer = _.indexBy(References.eventRegistrationTypes, "id");

/***/ }),
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentAwardsComponent = void 0;
var _studentAwards = __webpack_require__(43);
var _common = __webpack_require__(3);
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
var StudentAwardsController = /*#__PURE__*/function (_StudentAwardsListBas) {
  StudentAwardsController.$inject = ["language", "appContext", "pageContext", "$alerts", "editEventMemberService", "userEventsRepository", "curatorsRepository", "$appLoader", "$dialogs", "$routeParams", "$timeout", "$http", "$sce", "settingsProvider", "nationOlympRepository"];
  _inherits(StudentAwardsController, _StudentAwardsListBas);
  var _super = _createSuper(StudentAwardsController);
  /*@ngInject*/
  function StudentAwardsController(language, appContext, pageContext, $alerts, editEventMemberService, userEventsRepository, curatorsRepository, $appLoader, $dialogs, $routeParams, $timeout, $http, $sce, settingsProvider, nationOlympRepository) {
    var _this;
    _classCallCheck(this, StudentAwardsController);
    _this = _super.call(this, language, appContext, $alerts, editEventMemberService, userEventsRepository, curatorsRepository, $appLoader, $dialogs, $routeParams, $timeout, nationOlympRepository);
    _this.pageContext = pageContext;
    _this.$http = $http;
    _this.$sce = $sce;
    _this.settingsProvider = settingsProvider;
    _this.nationOlympRepository = nationOlympRepository;
    _this.test = '1';
    return _this;
  }
  _createClass(StudentAwardsController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.$http.get("/webapi/users/".concat(this.data.studentId, "/info")).then(function (response) {
        _this2.pageContext.title = _this2.$sce.trustAsHtml("Личные достижения (" + _this2.greenText(response.data.nickname) + ")");
        _this2.pageContext.back = {
          history: true
        };
        _this2.pageContext.parent = {
          title: _this2.language.Generic.MenuFolders.kFNTalentStudents,
          href: "students"
        };
      });
      this.settingsProvider.ServerSettings.SystemSettings.IsRegionEMForSchool().then(function (val) {
        if (val) {
          _this2.state.readOnly = true;
        }
      });
      return Promise.resolve();
    }
  }, {
    key: "greenText",
    value: function greenText(text) {
      return "<span style='color:green'>" + text + "</span>";
    }
  }, {
    key: "viewEvent",
    value: function viewEvent(eventId) {
      (0, _common.postTo)("/angular/em/events/".concat(eventId, "/members"), {
        backUrl: "/angular/em/talents/students/".concat(this.data.studentId, "/awards")
      });
    }
  }]);
  return StudentAwardsController;
}(_studentAwards.StudentAwardsListBaseController);
var StudentAwardsComponent = {
  controller: StudentAwardsController,
  controllerAs: _studentAwards.StudentAwardsListBaseComponent.controllerAs,
  templateUrl: _studentAwards.StudentAwardsListBaseComponent.templateUrl
};
exports.StudentAwardsComponent = StudentAwardsComponent;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentAwardsListBaseController = exports.StudentAwardsListBaseComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(44));
var _model = __webpack_require__(38);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StudentAwardsListBaseController = /*#__PURE__*/function () {
  StudentAwardsListBaseController.$inject = ["language", "appContext", "$alerts", "editEventMemberService", "userEventsRepository", "curatorsRepository", "$appLoader", "$dialogs", "$routeParams", "$timeout", "nationOlympRepository"];
  /*@ngInject*/
  function StudentAwardsListBaseController(language, appContext, $alerts, editEventMemberService, userEventsRepository, curatorsRepository, $appLoader, $dialogs, $routeParams, $timeout, nationOlympRepository) {
    var _this = this;
    _classCallCheck(this, StudentAwardsListBaseController);
    this.language = language;
    this.appContext = appContext;
    this.$alerts = $alerts;
    this.editEventMemberService = editEventMemberService;
    this.userEventsRepository = userEventsRepository;
    this.curatorsRepository = curatorsRepository;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$routeParams = $routeParams;
    this.$timeout = $timeout;
    this.nationOlympRepository = nationOlympRepository;
    this.data = {
      studentId: parseInt($routeParams.studentId),
      competitions: []
    };
    this.state = {
      accessToMembers: this.appContext.hasAnyRight([Rights.arEMEventsMembersView, Rights.arEMEventsMembersEdit]),
      readOnly: false
    };
    $timeout(0).then(function () {
      return _this.init();
    }).then(function () {
      return _this.load();
    });
  }
  _createClass(StudentAwardsListBaseController, [{
    key: "init",
    value: function init() {
      return Promise.resolve();
    }
    //добавить информацию об участии в мероприятии
  }, {
    key: "add",
    value: function add() {
      var _this2 = this;
      var settings = {
        user: {
          id: this.data.studentId
        },
        isTalent: true,
        curators: this.getStudentCurators()
      };
      this.editEventMemberService.edit(settings).then(function () {
        return _this2.load();
      });
    }
    //редактировать информацию об участии в мероприятии
  }, {
    key: "edit",
    value: function edit(editAward) {
      var _this3 = this;
      var _a;
      var settings = {
        eventMemberId: editAward.eventMemberId,
        user: {
          id: this.data.studentId
        },
        event: editAward.eventInfo,
        isTalent: true,
        curators: this.getStudentCurators(),
        curatorId: (_a = editAward.curator) === null || _a === void 0 ? void 0 : _a.userId,
        participationInfo: angular.copy(editAward.participationInfo)
      };
      this.editEventMemberService.edit(settings).then(function () {
        return _this3.load();
      });
    }
  }, {
    key: "getStudentCurators",
    value: function getStudentCurators() {
      return this.curatorsRepository.getStudentCurators(this.data.studentId).then(function (curators) {
        return curators.map(function (c) {
          return {
            id: c.userId,
            name: c.fio
          };
        });
      });
    }
    //удаление информации об участии в мероприятии
  }, {
    key: "remove",
    value: function remove(award) {
      var _this4 = this;
      this.$dialogs.confirm("Вы действительно желаете удалить информацию об участии в мероприятии?").then(function () {
        return _this4.userEventsRepository.removeUserEvent(_this4.data.studentId, award.eventMemberId);
      }).then(function () {
        _this4.load();
      }).then(function () {
        return _this4.$alerts.success("\u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 \u0443\u0447\u0430\u0441\u0442\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B");
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this5 = this;
      this.userEventsRepository.getUserEventList(this.data.studentId).then(function (events) {
        _this5.data.competitions = _this5.mapEvents(events);
        _this5.$appLoader.hide();
      });
    }
    //маппинг и группировка данных об участии
  }, {
    key: "mapEvents",
    value: function mapEvents(dtos) {
      return _.chain(dtos).map(function (dto) {
        return {
          eventInfo: new _model.EventViewModel(dto.eventInfo),
          participationInfo: new _model.EventResultsViewModel(dto.participationInfo),
          curator: dto.curator,
          eventMemberId: dto.eventMemberId
        };
      }).groupBy(function (dto) {
        return dto.eventInfo.startTime.getFullYear();
      }).map(function (awards, year) {
        return {
          year: year,
          awards: awards
        };
      }).sortBy(function (yearAwards) {
        return -yearAwards.year;
      }).value();
    }
  }]);
  return StudentAwardsListBaseController;
}();
exports.StudentAwardsListBaseController = StudentAwardsListBaseController;
var StudentAwardsListBaseComponent = {
  controller: StudentAwardsListBaseController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/talents/common/students/awards/studentAwards.component.html"
};
exports.StudentAwardsListBaseComponent = StudentAwardsListBaseComponent;

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AchievementsRegistryController = exports.AchievementsRegistryComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AchievementsRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "$uibModal", "$http", function AchievementsRegistryController(pageContext, $uibModal, $http) {
  _classCallCheck(this, AchievementsRegistryController);
  this.$uibModal = $uibModal;
  this.$http = $http;
  pageContext.title = "Отчет по личным достижениям одаренных детей";
  pageContext.parent = null;
  this.registryInfo = {
    url: "/webapi/em/talents/achievements/registry",
    filtersUrl: "/webapi/em/talents/achievements/registry/filter",
    buttons: [],
    linkButtons: [],
    extensions: null,
    filterPanelStyles: {
      compact: false
    }
  };
}]);
exports.AchievementsRegistryController = AchievementsRegistryController;
var AchievementsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: AchievementsRegistryController,
  controllerAs: "$ctrl",
  reloadOnSearch: false
};
exports.AchievementsRegistryComponent = AchievementsRegistryComponent;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentPortfolioComponent = void 0;
var _studentPortfolioCmn = __webpack_require__(47);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var StudentPortfolioController = /*#__PURE__*/function (_StudentPortfolioCmnC) {
  StudentPortfolioController.$inject = ["language", "downloadService", "$appLoader", "$http", "$routeParams", "pageContext"];
  _inherits(StudentPortfolioController, _StudentPortfolioCmnC);
  var _super = _createSuper(StudentPortfolioController);
  /*@ngInject*/
  function StudentPortfolioController(language, downloadService, $appLoader, $http, $routeParams, pageContext) {
    var _this;
    _classCallCheck(this, StudentPortfolioController);
    _this = _super.call(this, language, downloadService, $appLoader, $http, $routeParams);
    pageContext.title = "Просмотр портфолио";
    pageContext.back = {
      history: true
    };
    pageContext.parent = {
      title: language.Generic.MenuFolders.kFNTalentStudents,
      href: "students"
    };
    return _this;
  }
  return _createClass(StudentPortfolioController);
}(_studentPortfolioCmn.StudentPortfolioCmnController);
var StudentPortfolioComponent = {
  controller: StudentPortfolioController,
  controllerAs: _studentPortfolioCmn.StudentPortfolioCmnComponent.controllerAs,
  templateUrl: _studentPortfolioCmn.StudentPortfolioCmnComponent.templateUrl
};
exports.StudentPortfolioComponent = StudentPortfolioComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentPortfolioCmnController = exports.StudentPortfolioCmnComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StudentPortfolioCmnController = /*#__PURE__*/function () {
  StudentPortfolioCmnController.$inject = ["language", "downloadService", "$appLoader", "$http", "$routeParams"];
  /*@ngInject*/
  function StudentPortfolioCmnController(language, downloadService, $appLoader, $http, $routeParams) {
    var _this = this;
    _classCallCheck(this, StudentPortfolioCmnController);
    this.language = language;
    this.downloadService = downloadService;
    this.$appLoader = $appLoader;
    this.$http = $http;
    this.state = {
      emptyData: false,
      readonly: true
    };
    this.data = {
      studentId: parseInt($routeParams.studentId),
      portfolio: null
    };
    var prepareProtfolio = $http.get("/webapi/portfolios/personal/", {
      params: {
        userId: this.data.studentId
      }
    }).then(function (response) {
      _this.data.portfolio = response.data;
      if (_this.data.portfolio == null) {
        _this.state.emptyData = true;
      }
    });
    Promise.all([prepareProtfolio, this.init()]).then(function () {
      _this.$appLoader.hide();
    });
  }
  _createClass(StudentPortfolioCmnController, [{
    key: "init",
    value: function init() {
      return Promise.resolve();
    }
  }, {
    key: "openDoc",
    value: function openDoc(url, fileName) {
      this.downloadService.downloadFile(url, fileName);
    }
  }]);
  return StudentPortfolioCmnController;
}();
exports.StudentPortfolioCmnController = StudentPortfolioCmnController;
var StudentPortfolioCmnComponent = {
  controller: StudentPortfolioCmnController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/talents/common/students/portfolio/studentPortfolioCmn.component.html"
};
exports.StudentPortfolioCmnComponent = StudentPortfolioCmnComponent;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuratorsRepository = void 0;
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
var CuratorsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(CuratorsRepository, _BaseRepository);
  var _super = _createSuper(CuratorsRepository);
  function CuratorsRepository() {
    _classCallCheck(this, CuratorsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(CuratorsRepository, [{
    key: "getCurators",
    value: function getCurators() {
      return this.$http.get("/webapi/talents/curators/").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getCuratorStudents",
    value: function getCuratorStudents() {
      return this.$http.get("/webapi/talents/curator/students").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentCurators",
    value: function getStudentCurators(studentId) {
      return this.$http.get("/webapi/talents/students/".concat(studentId, "/curators")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addCurator",
    value: function addCurator(curator) {
      return this.$http.put("/webapi/talents/curators/", curator).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeCurator",
    value: function removeCurator(id) {
      return this.$http["delete"]("/webapi/talents/curators/", {
        params: {
          id: id
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "clearSchoolLink",
    value: function clearSchoolLink(paymentId) {
      return this.$http["delete"]("/webapi/em/parentpay/payrecords/schools", {
        params: {
          paymentId: paymentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolLinks",
    value: function getSchoolLinks(paymentIds) {
      return this.$http.get("/webapi/em/parentpay/payrecords/getSchoolLinks", {
        params: {
          paymentIds: paymentIds
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return CuratorsRepository;
}(_repository.BaseRepository);
exports.CuratorsRepository = CuratorsRepository;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventMemberService = exports.EditEventMemberComponent = void 0;
var _model = __webpack_require__(38);
var _searchSource = _interopRequireDefault(__webpack_require__(35));
var _netcityModalCtrl = __webpack_require__(36);
var _nsModal = __webpack_require__(50);
var Roles = _interopRequireWildcard(__webpack_require__(51));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var EditEventMemberService = /*#__PURE__*/function () {
  EditEventMemberService.$inject = ["$uibModal"];
  /*@ngInject*/
  function EditEventMemberService($uibModal) {
    _classCallCheck(this, EditEventMemberService);
    this.$uibModal = $uibModal;
  }
  _createClass(EditEventMemberService, [{
    key: "edit",
    value: function edit(_settings) {
      var modalInstance = this.$uibModal.open({
        templateUrl: EditEventMemberComponent.templateUrl,
        controller: EditEventMemberComponent.controller,
        controllerAs: EditEventMemberComponent.controllerAs,
        size: "lg",
        resolve: {
          settings: function settings() {
            return _settings;
          }
        },
        backdrop: false
      });
      return modalInstance.result;
    }
  }]);
  return EditEventMemberService;
}();
exports.EditEventMemberService = EditEventMemberService;
var EditEventMemberController = /*#__PURE__*/function (_NetCityModalControll) {
  EditEventMemberController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "appContext", "$alerts", "$longWork", "language", "$http", "dateUtils", "referencesRepository", "awardEventsRepository", "eventMembersRepository", "settings"];
  _inherits(EditEventMemberController, _NetCityModalControll);
  var _super = _createSuper(EditEventMemberController);
  /*@ngInject*/
  function EditEventMemberController($scope, $uibModalInstance, changeTracker, $dialogs, appContext, $alerts, $longWork, language, $http, dateUtils, referencesRepository, awardEventsRepository, eventMembersRepository, settings) {
    var _this;
    _classCallCheck(this, EditEventMemberController);
    var _a, _b, _c, _d, _e, _f, _g, _h;
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.language = language;
    _this.$http = $http;
    _this.referencesRepository = referencesRepository;
    _this.awardEventsRepository = awardEventsRepository;
    _this.eventMembersRepository = eventMembersRepository;
    _this.settings = settings;
    _this.mode = {
      selectUser: !((_a = settings.user) === null || _a === void 0 ? void 0 : _a.id),
      selectEvent: !((_b = settings.event) === null || _b === void 0 ? void 0 : _b.id) && !settings.eventMemberId,
      selectSchool: !((_c = settings.user) === null || _c === void 0 ? void 0 : _c.id) && !((_d = settings.school) === null || _d === void 0 ? void 0 : _d.id) && !settings.users,
      create: !settings.eventMemberId,
      edit: settings.eventMemberId > 0
    };
    if (_this.mode.create) {
      _this.header = "Добавить информацию об участии в мероприятии";
    } else {
      _this.header = "Редактировать информацию об участии в мероприятии";
    }
    _this.language = language;
    _this.data = {
      search: {},
      schoolId: (_e = settings.school) === null || _e === void 0 ? void 0 : _e.id,
      school: settings.school,
      years: [],
      yearId: new Date().getFullYear() - 2000,
      events: [],
      user: settings.user || {},
      event: settings.event || null,
      curatorId: settings.curatorId,
      participationInfo: settings.participationInfo || new _model.EventResultsViewModel({}),
      eventMemberId: settings.eventMemberId,
      appealId: (_g = (_f = settings.participationInfo) === null || _f === void 0 ? void 0 : _f.dto) === null || _g === void 0 ? void 0 : _g.appealId,
      documents: []
    };
    _this.state = {
      edit: !!(settings === null || settings === void 0 ? void 0 : settings.participationInfo),
      loadEvents: false,
      noEvents: false
    };
    _this.dateOptions = {
      format: dateUtils.getDateFormat()
    };
    _this.buttons = [{
      action: function action() {
        return _this.save();
      },
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      isEnabled: function isEnabled() {
        var _a;
        return _this.data.user && ((_a = _this.data.event) === null || _a === void 0 ? void 0 : _a.id) > 0;
      },
      isDisplayed: function isDisplayed() {
        return _this.isShowSaveButton;
      },
      title: "Сохранить"
    }, {
      action: function action() {
        return _this.cancel();
      },
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-remove-sign",
      title: "Закрыть"
    }];
    var promises = [Promise.resolve()];
    if (_this.settings.users) {
      var prepareUsers = _this.settings.users.then(function (users) {
        return _this.data.users = users;
      });
      promises.push(prepareUsers);
    }
    if (_this.settings.curators) {
      var prepareCurators = _this.settings.curators.then(function (curators) {
        return _this.data.curators = curators;
      });
      promises.push(prepareCurators);
    }
    var prepareYears = _this.referencesRepository.getYears().then(function (years) {
      return _this.data.years = years;
    });
    promises.push(prepareYears);
    if ((_h = _this.data.event) === null || _h === void 0 ? void 0 : _h.id) {
      var prepareDocuments = _this.awardEventsRepository.getEventFiles(_this.data.event.id).then(function (files) {
        return _this.data.documents = files;
      });
      promises.push(prepareDocuments);
    }
    Promise.all(promises).then(function () {
      var _a;
      if (_this.mode.create && _this.settings.isTalent) {
        _this.data.curatorId = (_a = _this.data.curators[0]) === null || _a === void 0 ? void 0 : _a.id;
      }
      _this.ready = true;
      _this.$scope.$applyAsync();
    });
    if (_this.mode.create) {
      //при создании контроллируем взаимосвязанные фильтры: год + мероприятие и школа + участник
      $scope.$watch(function () {
        return _this.data.yearId;
      }, function (newVal, oldVal) {
        _this.getEvents(newVal);
        if (!_this.data.event || !_this.data.event.id) {
          return;
        }
        if (!oldVal || !newVal) {
          return;
        }
        if (newVal == oldVal) {
          return;
        }
        //при переключении года сбрасываем информацию о найденных мероприятиях
        //this.data.search.events.items = [];
        _this.data.event = null;
      });
      if (_this.mode.selectUser) {
        $scope.$watch(function () {
          return _this.data.schoolId;
        }, function () {
          _this.data.user = null;
        });
      }
    }
    var searchSettings = {};
    if (_this.mode.selectEvent) {
      //требуется поиск мероприятий
      angular.extend(searchSettings, {
        events: {
          url: "/webapi/events/search",
          map: function map(item) {
            return new _model.EventViewModel(item);
          },
          params: {
            yearId: function yearId() {
              return _this.data.yearId;
            },
            eventType: "awardEvents"
          }
        }
      });
    }
    if (_this.mode.selectUser) {
      if (_this.mode.selectSchool) {
        //требуется поиск организаций
        angular.extend(searchSettings, {
          schools: {
            url: "/webapi/schools/search",
            params: {
              take: 20
            }
          }
        });
      }
      //требуется поиск пользователей
      angular.extend(searchSettings, {
        users: {
          url: "/webapi/users/search",
          params: {
            schoolId: function schoolId() {
              return _this.data.schoolId;
            },
            globalYearId: function globalYearId() {
              return _this.data.event._globalYearId;
            },
            take: 50,
            contains: true
          }
        }
      });
      //при создании контроллируем взаимосвязанные фильтры: год + мероприятие и школа + участник
      $scope.$watch(function () {
        return _this.data.schoolId;
      }, function () {
        //при переключении ОО сбрасываем информацию о найденных пользователях
        _this.data.search.users.items = [];
        _this.data.user = null;
      });
    }
    _this.data.search = new _searchSource["default"](searchSettings, _this.$http);
    return _this;
  }
  _createClass(EditEventMemberController, [{
    key: "changeEvent",
    value: function changeEvent() {
      this.data.participationInfo = this.settings.participationInfo || new _model.EventResultsViewModel({});
    }
  }, {
    key: "getEventGroup",
    value: function getEventGroup(eventVM) {
      if (eventVM.awardEventType) {
        return eventVM.awardEventType.name;
      }
      return "";
    }
  }, {
    key: "getEvents",
    value: function getEvents(yearId) {
      var _this2 = this;
      this.state.loadEvents = true;
      this.data.events = [{
        name: 'Поиск...'
      }];
      return this.awardEventsRepository.getAvailable(yearId).then(function (events) {
        _this2.data.events = events.map(function (item) {
          return new _model.EventViewModel(item);
        });
        _this2.state.loadEvents = false;
        _this2.state.noEvents = _this2.data.events.length === 0;
      });
    }
  }, {
    key: "isShowSaveButton",
    get: function get() {
      var _a;
      return !((_a = this.data.event) === null || _a === void 0 ? void 0 : _a.isNationOlympiad) || this.mode.create || !(this.appContext.hasRole(Roles.parent) || this.appContext.hasRole(Roles.student) || !this.appContext.nationOlympOrg && !this.appContext.yearId || (!this.data.event.founder || !this.data.event.founder.educManagement || this.data.event.founder.educManagement.id != this.appContext.emId) && (this.data.event.dto.level == _model.EventLevel.Regional || this.data.event.dto.level == _model.EventLevel.District));
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var _a, _b, _c;
      if (this.memberForm.$invalid) {
        this.memberForm.$displayErrors = true;
        this.memberForm.$setSubmitted();
        return;
      }
      var saveModel = {
        id: +this.settings.eventMemberId,
        user: this.data.user,
        curatorId: (_a = this.data.curatorId) !== null && _a !== void 0 ? _a : (_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.curatorId,
        organization: null
      };
      //обратное преобразование {id, name} -> в id
      for (var property in this.data.participationInfo) {
        if (this.data.participationInfo.hasOwnProperty(property)) {
          var propValue = this.data.participationInfo[property];
          if (saveModel.hasOwnProperty(property)) {
            continue;
          }
          if (propValue === null || typeof propValue === "undefined") {
            continue;
          }
          if (typeof propValue.id != "undefined" && typeof propValue.name != "undefined" && _.filter(Object.keys(propValue), function (prop) {
            return prop.charAt(0) !== '$';
          }).length === 2) {
            saveModel[property] = propValue.id;
          } else {
            saveModel[property] = propValue;
          }
        }
      }
      var request, msg;
      if (this.state.edit) {
        msg = "Данные об участии успешно изменены";
        request = this.eventMembersRepository.editEventMembers(this.data.event.id, saveModel);
      } else {
        msg = "Данные об участии успешно добавлены";
        request = this.eventMembersRepository.addEventMember(this.data.event.id, saveModel);
      }
      this.$longWork.execute(request).then(function (member) {
        _this3.$alerts.success(msg);
        _this3.$uibModalInstance.close(member);
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _a, _b, _c;
      if (((_a = this.data.event) === null || _a === void 0 ? void 0 : _a.isNationOlympiad) && ((_c = (_b = this.data.participationInfo) === null || _b === void 0 ? void 0 : _b.dto) === null || _c === void 0 ? void 0 : _c.appealId) != this.data.appealId) {
        var memberDto = {
          id: this.data.eventMemberId,
          user: {
            id: this.data.user.id
          }
        };
        this.$uibModalInstance.close(memberDto);
      } else {
        this.$uibModalInstance.dismiss('cancel');
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.close();
    }
  }]);
  return EditEventMemberController;
}(_netcityModalCtrl.NetCityModalController);
var EditEventMemberComponent = {
  controller: EditEventMemberController,
  templateUrl: "/static/dist/app/em/events/common/eventMember/editEventMember.component.html",
  controllerAs: "ctrl"
};
exports.EditEventMemberComponent = EditEventMemberComponent;

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teacher = exports.student = exports.specialistStaff = exports.secretary = exports.psychologist = exports.principal = exports.parent = exports.minorStaff = exports.medicalStaff = exports.emOper = exports.emOFREM = exports.emECoordOD = exports.emAdmin = exports.eMHDEM = exports.admin = exports.Keys = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу role.cs

var admin = 1;
exports.admin = admin;
var principal = 2;
exports.principal = principal;
var teacher = 3;
exports.teacher = teacher;
var student = 4;
exports.student = student;
var parent = 5;
exports.parent = parent;
var minorStaff = 6;
exports.minorStaff = minorStaff;
var secretary = 7;
exports.secretary = secretary;
var medicalStaff = 8;
exports.medicalStaff = medicalStaff;
var psychologist = 9;
exports.psychologist = psychologist;
var specialistStaff = 10;
exports.specialistStaff = specialistStaff;
var emAdmin = 11;
exports.emAdmin = emAdmin;
var eMHDEM = 12;
exports.eMHDEM = eMHDEM;
var emOFREM = 13;
exports.emOFREM = emOFREM;
var emOper = 14;
exports.emOper = emOper;
var emECoordOD = 15;
exports.emECoordOD = emECoordOD;
var Keys = {
  admin: "Admin",
  principal: "Principal",
  teacher: "Teacher",
  student: "Student",
  parent: "Parent",
  minorStaff: "MinorStaff",
  secretary: "Secretary",
  medicalStaff: "MedicalStaff",
  psychologist: "Psychologist",
  specialistStaff: "SpecialistStaff"
};
exports.Keys = Keys;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventParticipationInfoComponent = void 0;
var _model = __webpack_require__(38);
var _references = __webpack_require__(39);
var _services = __webpack_require__(53);
var Roles = _interopRequireWildcard(__webpack_require__(51));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventParticipationInfoController = /*#__PURE__*/function () {
  EventParticipationInfoController.$inject = ["language", "appContext", "nationOlympRepository", "dateUtils", "$dialogs", "$alerts", "$longWork"];
  /*@ngInject*/
  function EventParticipationInfoController(language, appContext, nationOlympRepository, dateUtils, $dialogs, $alerts, $longWork) {
    _classCallCheck(this, EventParticipationInfoController);
    this.language = language;
    this.appContext = appContext;
    this.nationOlympRepository = nationOlympRepository;
    this.dateUtils = dateUtils;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.refs = _references.References;
    this.rankOptions = {
      maxMark: 1000,
      minMark: 0,
      maxLength: 3
    };
  }
  _createClass(EventParticipationInfoController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.readonly = false;
      if (this.isNationOlympiad) {
        this.title = "Результат";
        this.rankTitle = "Количество набранных баллов";
        this.noEmStaff = this.appContext.hasRole(Roles.parent) || this.appContext.hasRole(Roles.student);
        this.noNationOlympOrg = !this.appContext.nationOlympOrg && !this.appContext.yearId || (!this.event.founder || !this.event.founder.educManagement || this.event.founder.educManagement.id != this.appContext.emId) && (this.event.dto.level == _model.EventLevel.Regional || this.event.dto.level == _model.EventLevel.District);
        this.readonly = this.noEmStaff || this.noNationOlympOrg;
        this.participationInfo.files = this.participationInfo.files || [];
        this.fa = {
          data: {
            files: this.participationInfo.files,
            context: null
          },
          options: {
            readonly: this.readonly,
            multiple: false,
            showDescription: false,
            onSuccessAttach: function onSuccessAttach(file) {
              _this.participationInfo.files.push(file);
            },
            onSuccessDetach: function onSuccessDetach(file) {
              _this.participationInfo.files = _this.participationInfo.files.filter(function (f) {
                return f.id != file.id;
              });
            }
          }
        };
      } else {
        this.title = "Итог";
        this.rankTitle = "Место/рейтинг";
      }
      this.titles = new _services.EventRefsHelper().getEventTitles(this.event);
    }
  }, {
    key: "isNationOlympiad",
    get: function get() {
      return this.event.isNationOlympiad;
    }
  }, {
    key: "resultsFilled",
    get: function get() {
      var _a, _b, _c, _d;
      return ((_b = (_a = this.participationInfo) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.length) > 0 || ((_d = (_c = this.participationInfo) === null || _c === void 0 ? void 0 : _c.files) === null || _d === void 0 ? void 0 : _d.length) > 0;
    }
  }, {
    key: "canEditResults",
    get: function get() {
      return this.event.canEditMemberResults;
    }
  }, {
    key: "isContinuingAppeal",
    get: function get() {
      var _a, _b, _c;
      return ((_a = this.participationInfo) === null || _a === void 0 ? void 0 : _a.dto.appealId) && ((_b = this.participationInfo) === null || _b === void 0 ? void 0 : _b.dto.appealStatus) != _model.OlympAppealStatus.Completed && ((_c = this.participationInfo) === null || _c === void 0 ? void 0 : _c.dto.appealStatus) != _model.OlympAppealStatus.WorkViewed;
    }
  }, {
    key: "hasAppeal",
    get: function get() {
      var _a;
      return this.participationInfo && ((_a = this.participationInfo.dto) === null || _a === void 0 ? void 0 : _a.appealId);
    }
  }, {
    key: "isStudent",
    get: function get() {
      return this.appContext.hasRole(Roles.student);
    }
  }, {
    key: "showAppealButton",
    get: function get() {
      var _a;
      return this.isNationOlympiad && this.event.dto.level != _model.EventLevel.School && !this.hasAppeal && this.isStudent && ((_a = this.participationInfo) === null || _a === void 0 ? void 0 : _a.score) >= 0;
    }
  }, {
    key: "isRegionalOrDistrictEvent",
    get: function get() {
      return this.event.dto.level == _model.EventLevel.Regional || this.event.dto.level == _model.EventLevel.District;
    }
  }, {
    key: "notValidDate",
    value: function notValidDate(days, date) {
      var checkDate = this.dateUtils.asUTCDate(new Date());
      var anotherDate = this.dateUtils.asUTCDate(date);
      checkDate.setDate(checkDate.getDate() + days);
      return checkDate > anotherDate;
    }
  }, {
    key: "applyAppeal",
    value: function applyAppeal() {
      var _this2 = this;
      this.$dialogs.confirm("Подать заявление на просмотр работы?").then(function () {
        return _this2.$longWork.execute(_this2.nationOlympRepository.applyAppeal(_this2.eventMemberId)).then(function (appeal) {
          if (_this2.participationInfo) {
            _this2.participationInfo.dto.appealId = appeal ? appeal.id : null;
          }
          _this2.$onInit();
          _this2.$alerts.success("Заявление на просмотр работы подано");
        });
      });
    }
  }, {
    key: "digitsError",
    value: function digitsError() {
      return "Пожалуйста, вводите только цифры.";
    }
  }, {
    key: "minError",
    value: function minError() {
      return "Пожалуйста, введите число, большее или равное 0.";
    }
  }, {
    key: "maxError",
    value: function maxError() {
      return "Пожалуйста, введите число, меньшее или равное 9999.";
    }
  }]);
  return EventParticipationInfoController;
}();
var EventParticipationInfoComponent = {
  selector: "eventParticipationInfo",
  templateUrl: "/static/dist/app/em/events/common/eventMember/editParticipation.component.html",
  controller: EventParticipationInfoController,
  controllerAs: "$ctrl",
  bindings: {
    event: "<",
    eventMemberId: "<",
    participationInfo: "="
  }
};
exports.EventParticipationInfoComponent = EventParticipationInfoComponent;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventRefsHelper = void 0;
var _model = __webpack_require__(38);
var _references = __webpack_require__(39);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventRefsHelper = /*#__PURE__*/function () {
  function EventRefsHelper() {
    _classCallCheck(this, EventRefsHelper);
  }
  _createClass(EventRefsHelper, [{
    key: "getEventTitles",
    value: function getEventTitles(event) {
      var titles = _references.References.eventMemberTitles;
      if (event.isNationOlympiad) {
        titles = titles.filter(function (t) {
          return t.id == _model.EventMemberTitle.Prizewinner || t.id == _model.EventMemberTitle.Winner || t.id == _model.EventMemberTitle.CertifOfParticipation;
        });
      }
      return titles;
    }
  }]);
  return EventRefsHelper;
}();
exports.EventRefsHelper = EventRefsHelper;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NationOlympRepository = void 0;
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
var NationOlympRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(NationOlympRepository, _BaseRepository);
  var _super = _createSuper(NationOlympRepository);
  function NationOlympRepository() {
    _classCallCheck(this, NationOlympRepository);
    return _super.apply(this, arguments);
  }
  _createClass(NationOlympRepository, [{
    key: "getOlympPassRateById",
    value: function getOlympPassRateById(olympPassRateId) {
      return this.$http.get("/webapi/olymp-passrates/".concat(olympPassRateId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getOlympAppealById",
    value: function getOlympAppealById(olympAppealId) {
      return this.$http.get("/webapi/olymp-appeals/".concat(olympAppealId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "applyAppeal",
    value: function applyAppeal(eventMemberId, appealText, taskNumbers) {
      return this.$http.post("/webapi/olymp-appeals/apply", {
        appealText: appealText,
        taskNumbers: taskNumbers
      }, {
        params: {
          eventMemberId: eventMemberId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveOlympPassRate",
    value: function saveOlympPassRate(olympPassRateDto) {
      return this.$http.post("/webapi/olymp-passrates", olympPassRateDto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveOlympAppeal",
    value: function saveOlympAppeal(olympAppealDto) {
      return this.$http.post("/webapi/olymp-appeals/respond", olympAppealDto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "existsPassRates",
    value: function existsPassRates(globalYearId) {
      return this.$http.get("/webapi/olymp-passrates/exists", {
        params: {
          globalyearid: globalYearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "copyPassRatesFromPreviousYear",
    value: function copyPassRatesFromPreviousYear(globalYearId) {
      return this.$http.post("/webapi/olymp-passrates/copy", null, {
        params: {
          globalyearid: globalYearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "copyOlympPassRatesFromPreviousYearEnabled",
    value: function copyOlympPassRatesFromPreviousYearEnabled(globalYearId) {
      return this.$http.get("/webapi/olymp-passrates/copyenabled", {
        params: {
          globalyearid: globalYearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return NationOlympRepository;
}(_repository.BaseRepository);
exports.NationOlympRepository = NationOlympRepository;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AchievementsWithPersonalDataRegistryController = exports.AchievementsWithPersonalDataRegistryComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AchievementsWithPersonalDataRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", function AchievementsWithPersonalDataRegistryController(pageContext, language) {
  _classCallCheck(this, AchievementsWithPersonalDataRegistryController);
  pageContext.title = language.Generic.EMReportNames.kAchievementsTalentStudentsWithPersonalData;
  pageContext.parent = null;
  this.registryInfo = {
    url: "/webapi/em/talents/achievements/personaldata/registry",
    filtersUrl: "/webapi/em/talents/achievements/personaldata/registry/filter",
    buttons: [],
    linkButtons: [],
    extensions: null,
    filterPanelStyles: {
      compact: false
    }
  };
}]);
exports.AchievementsWithPersonalDataRegistryController = AchievementsWithPersonalDataRegistryController;
var AchievementsWithPersonalDataRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: AchievementsWithPersonalDataRegistryController,
  controllerAs: "$ctrl",
  reloadOnSearch: false
};
exports.AchievementsWithPersonalDataRegistryComponent = AchievementsWithPersonalDataRegistryComponent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.em.talents").controller("AssignStudentCuratorCtrl", function ($scope, $http, $alerts, $uibModalInstance, student) {
  $scope.header = language.Generic.TalentStudents.kCuratorToStudentAssign;
  $.extend($scope, {
    language: language,
    data: {
      student: student,
      curators: [],
      curator: student.curators[0]
    },
    state: {
      edit: student.curators.length > 0,
      ready: false
    }
  });
  var defaultErrHandler = function defaultErrHandler(response) {
    return $alerts.error(response.data.message, response.data.details);
  };
  $http.get("/webapi/talents/curators").then(function (response) {
    $scope.data.curators = response.data;
    $scope.state.ready = true;
  })["catch"](defaultErrHandler);
  $scope.remove = function () {
    $http["delete"]("/webapi/talents/students/".concat($scope.data.student.id, "/curators/"), {
      params: {
        curatorId: $scope.data.curator.userId
      }
    }).then(function () {
      $alerts.success(language.Generic.TalentStudents.kCuratorToStudentSuccesAssigned);
      $uibModalInstance.close();
    })["catch"](defaultErrHandler);
  };
  $scope.save = function () {
    $http.put("/webapi/talents/students/".concat($scope.data.student.id, "/curators/"), null, {
      params: {
        curatorId: $scope.data.curator.userId
      }
    }).then(function () {
      $alerts.success(language.Generic.TalentStudents.kCuratorToStudentSuccesAssigned);
      $uibModalInstance.close($scope.data.curator);
    })["catch"](defaultErrHandler);
  };
  $scope.cancel = function () {
    return $uibModalInstance.dismiss("cancel");
  };
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.portfolio.common", []).directive("portfolioGroupLinks", function ($compile) {
  return {
    restrict: "A",
    scope: {
      links: "=links",
      end: "=end"
    },
    replace: true,
    template: "<li class=\"tree-group-item\">\n\t\t\t\t\t\t<span ng-class=\"{'border-remove': end}\">\n\t\t\t\t\t\t\t<label>\u0421\u0441\u044B\u043B\u043A\u0438</label>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a ng-repeat-start=\"link in links\" href=\"{{link.url}}\" target=\"_blank\">{{link.url}}</a><p ng-repeat-end>{{link.description}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>"
  };
}).directive("portfolioGroupDocs", function ($compile) {
  return {
    restrict: "A",
    scope: {
      docs: "=docs",
      end: "=end",
      opendoc: "=opendoc"
    },
    replace: true,
    template: "<li class=\"tree-group-item\">\n\t\t\t\t\t\t<span ng-class=\"{'border-remove': end}\">\n\t\t\t\t\t\t\t<label>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B</label>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<dl ng-repeat=\"doc in docs\" class=\"doc-item\">\n\t\t\t\t\t\t\t\t<dt><span class =\"doc-type\" fileExt=\"{{doc.fileName | extension}}\"><span class =\"fileCorner\"></span></dt>\n\t\t\t\t\t\t\t\t<dd class=\"doc-data\">\n\t\t\t\t\t\t\t\t\t<a class =\"mdi mdi-file\" href=\"#\" ng-click=\"opendoc(doc.downloadUrl, doc.name)\">\n\t\t\t\t\t\t\t\t\t\t<span class =\"name_file\">{{doc.name}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p class =\"doc-descr\">{{doc.description}}</p>\n\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>"
  };
}).directive("portfolioSubgroup", function ($compile) {
  var template = "\n\t\t\t<li class =\"tree-group-item tree-group-subgroup\">\n\t\t\t\t<span>\n\t\t\t\t\t<label for=\"{{group.id}}\" class =\"section-level\">{{group.name}}</label>\n\t\t\t\t\t<a ng-href=\"{{editurl}}?groupId={{group.id}}\" ng-if=\"!readonly\" title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\" class=\"primary edit-group-link\"\n\t\t\t\t\t\tstyle=\"float: right; position: relative;top: -10px;left: -10px;color: white;outline: none !important;\">\n\t\t\t\t\t\t<span class =\"glyphicon glyphicon-pencil\" style=\"border: 0;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t\t<div>\n\t\t\t\t\t<input type=\"checkbox\" checked id=\"{{group.id}}\">\n\t\t\t\t\t<ul class=\"tree-group-item\">\n\t\t\t\t\t\t<li portfolio-group-links links=\"group.links\" end=\"group.groups.length == 0\" ng-if=\"group.links.length > 0\"></li>\n\t\t\t\t\t\t<li portfolio-group-docs docs=\"group.docs\" end=\"group.groups.length == 0\" ng-if=\"group.docs.length > 0\" opendoc=\"opendoc\"></li>\n\n\t\t\t\t\t\t<li portfolio-subgroup group=\"subgroup\" editurl=\"editurl\" opendoc=\"opendoc\" readonly=\"readonly\" ng-repeat=\"subgroup in group.groups\" ng-if=\"group.groups.length > 0\"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>";
  return {
    restrict: "A",
    scope: {
      editurl: "=editurl",
      readonly: "=readonly",
      group: "=group",
      opendoc: "=opendoc"
    },
    template: template,
    replace: true
  };
}).directive("portfolioGroup", function ($compile) {
  var template = "\n\t\t\t<li class =\"tree-group\">\n\t\t\t\t<span>\n\t\t\t\t\t<label for=\"{{group.id}}\">{{group.name}}</label>\n\t\t\t\t\t<a ng-href=\"{{editurl}}?groupId={{group.id}}\" ng-if=\"!readonly\" title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\" class=\"primary edit-group-link\"\n\t\t\t\t\t\tstyle=\"float: right; position: relative;top: -10px;left: -10px;color: white;outline: none !important;\">\n\t\t\t\t\t\t<span class =\"glyphicon glyphicon-pencil\" style=\"border: 0;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t\t<input type=\"checkbox\" ng-checked=\"!collapsed\" id=\"{{group.id}}\">\n\t\t\t\t<ul class=\"tree-group-item\">\n\t\t\t\t\t<li portfolio-group-links links=\"group.links\" ng-if=\"group.links.length > 0\"></li>\n\t\t\t\t\t<li portfolio-group-docs docs=\"group.docs\" opendoc=\"opendoc\" end=\"group.groups.length == 0\" ng-if=\"group.docs.length > 0\"></li>\n\n\t\t\t\t\t<li portfolio-subgroup group=\"subgroup\" editurl=\"editurl\" readonly=\"readonly\" opendoc=\"opendoc\" ng-repeat=\"subgroup in group.groups\" ng-if=\"group.groups.length > 0\"></li>\n\t\t\t\t</ul>\n\t\t\t</li>";
  return {
    restrict: "A",
    scope: {
      editurl: "=editurl",
      collapsed: "<?collapsed",
      readonly: "=readonly",
      group: "=group",
      opendoc: "=opendoc"
    },
    template: template,
    replace: true
  };
});

/***/ })
/******/ ]);