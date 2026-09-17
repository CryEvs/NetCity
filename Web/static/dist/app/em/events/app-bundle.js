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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmInfoRepository = void 0;
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
var EmInfoRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EmInfoRepository, _BaseRepository);
  var _super = _createSuper(EmInfoRepository);
  function EmInfoRepository() {
    _classCallCheck(this, EmInfoRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EmInfoRepository, [{
    key: "loadEmInfo",
    value: function loadEmInfo(emId) {
      return this.$http.get("/webapi/em/".concat(emId, "/info")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveEmInfo",
    value: function saveEmInfo(emId, emInfo) {
      return this.$http.post("/webapi/em/".concat(emId, "/info"), emInfo).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return EmInfoRepository;
}(_repository.BaseRepository);
exports.EmInfoRepository = EmInfoRepository;

/***/ }),
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
/* 32 */,
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
/* 34 */,
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
/* 42 */,
/* 43 */,
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
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _memberList = __webpack_require__(60);
var _eventlist = __webpack_require__(63);
var _emevents = __webpack_require__(37);
var _eventInfo = __webpack_require__(64);
var _eventMembers = __webpack_require__(65);
var _editeventFiles = __webpack_require__(66);
var _repositories = __webpack_require__(40);
var _editEventMember = __webpack_require__(49);
var _editParticipation = __webpack_require__(52);
var _editevent = __webpack_require__(71);
var _rooms = __webpack_require__(73);
var _passratelist = __webpack_require__(74);
var _appeallist = __webpack_require__(76);
var _eminfo = __webpack_require__(6);
var _intInput = __webpack_require__(78);
var _nationolymp = __webpack_require__(54);
var _module = angular.module("irtech.netcity.em.events", ['ngRoute', 'ngSanitize', 'ngMessages', 'ui.select', 'uikit.alerts', 'uikit.dialogs', 'ui.bootstrap', "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/:eventId/members", _memberList.MemeberListComponent).when("/nationolymp/passrate", _passratelist.PassRateListComponent).when("/nationolymp/appeal", _appeallist.AppealListComponent).otherwise(_eventlist.EventListComponent);
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.component(_eventMembers.EventMembersComponent.selector, _eventMembers.EventMembersComponent).component(_eventInfo.EventInfoComponent.selector, _eventInfo.EventInfoComponent).component(_editeventFiles.EditAwardEventFilesComponent.selector, _editeventFiles.EditAwardEventFilesComponent).component(_editParticipation.EventParticipationInfoComponent.selector, _editParticipation.EventParticipationInfoComponent).directive(_intInput.IntInputDirective.selector, _intInput.IntInputDirective).service("editAwardEventService", _editevent.EditAwardEventService).service("editEventMemberService", _editEventMember.EditEventMemberService).service("referencesRepository", _repositories.ReferencesRepository).service("roomsRepository", _rooms.RoomsRepository).service("awardEventsRepository", _emevents.AwardEventsRepository).service("emEventsRepository", _emevents.EmEventsRepository).service("eventMembersRepository", _emevents.EventMembersRepository).service("addressReferencesRepository", _repositories.AddressReferencesRepository).service("emInfoRepository", _eminfo.EmInfoRepository).service("nationOlympRepository", _nationolymp.NationOlympRepository).config(config);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemeberListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(61));
var Rights = _interopRequireWildcard(__webpack_require__(44));
var _references = __webpack_require__(39);
var _model = __webpack_require__(38);
var _selectEventMembers = __webpack_require__(62);
var _registry = __webpack_require__(33);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var MemberListController = /*#__PURE__*/function () {
  MemberListController.$inject = ["pageContext", "appContext", "$scope", "$alerts", "editEventMemberService", "awardEventsRepository", "eventMembersRepository", "$uibModal", "$longWork", "$routeParams", "$dialogs", "$appLoader", "language"];
  /*@ngInject*/
  function MemberListController(pageContext, appContext, $scope, $alerts, editEventMemberService, awardEventsRepository, eventMembersRepository, $uibModal, $longWork, $routeParams, $dialogs, $appLoader, language) {
    _classCallCheck(this, MemberListController);
    this.appContext = appContext;
    this.$scope = $scope;
    this.$alerts = $alerts;
    this.editEventMemberService = editEventMemberService;
    this.awardEventsRepository = awardEventsRepository;
    this.eventMembersRepository = eventMembersRepository;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.language = language;
    pageContext.title = "Информация о мероприятии";
    pageContext.parent = {
      title: "Мероприятия",
      href: "events/list"
    };
    pageContext.back = {
      history: true,
      href: "events/list"
    };
    if (!$routeParams.eventId) {
      $dialogs.error("Неизвестный идентификатор мероприятия");
      return;
    }
    this.data = {
      search: {},
      refs: _references.References,
      eventId: parseInt($routeParams.eventId),
      event: null,
      members: [],
      viewMembers: [],
      selection: new _selectable["default"]()
    };
    this.state = {
      membersReadAccess: this.appContext.hasAnyRight([Rights.arEMEventsMembersView, Rights.arEMEventsMembersEdit]),
      membersWriteAccess: this.appContext.hasAnyRight([Rights.arEMEventsMembersEdit]),
      ready: false,
      registryReady: false
    };
    this.init();
  }
  _createClass(MemberListController, [{
    key: "canEditMembers",
    get: function get() {
      var _a;
      if (!this.state.membersWriteAccess) {
        return false;
      }
      return (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.canEditMembers;
    }
  }, {
    key: "isDistrictEvent",
    get: function get() {
      var _a, _b;
      return ((_b = (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.dto) === null || _b === void 0 ? void 0 : _b.level) == _model.EventLevel.District;
    }
  }, {
    key: "isRegionalEvent",
    get: function get() {
      var _a, _b;
      return ((_b = (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.dto) === null || _b === void 0 ? void 0 : _b.level) == _model.EventLevel.Regional;
    }
  }, {
    key: "canEditByOrganizer",
    get: function get() {
      var _a;
      return (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.canEditByOrganizer;
    }
  }, {
    key: "canEditMemberResults",
    get: function get() {
      var _a;
      if (!this.state.membersWriteAccess) {
        return false;
      }
      return (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.canEditMemberResults;
    }
    //добавить участника
  }, {
    key: "addMember",
    value: function addMember() {
      var _this = this;
      this.editEventMemberService.edit({
        event: this.data.event
      }).then(function () {
        return _this.controller.load();
      });
    }
  }, {
    key: "addMemberList",
    value: function addMemberList() {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        template: _selectEventMembers.SelectEventMembersComponent.template,
        controller: _selectEventMembers.SelectEventMembersComponent.controller,
        controllerAs: _selectEventMembers.SelectEventMembersComponent.controllerAs,
        size: "lg",
        backdrop: false,
        resolve: {
          eventId: function eventId() {
            return _this2.data.event.id;
          }
        }
      });
      modalInstance.result.then(function () {
        return _this2.controller.load();
      });
    }
  }, {
    key: "createMemberList",
    value: function createMemberList() {
      var _this3 = this;
      this.$dialogs.confirm("Автоматически сформировать список участников мероприятия?").then(function () {
        return _this3.$longWork.execute(_this3.eventMembersRepository.generateAutomaticallyMemberList(_this3.data.event.id));
      }).then(function (result) {
        if (result) {
          _this3.$dialogs.message("\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D.\n\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: ".concat(result));
          _this3.controller.load();
        } else {
          _this3.$dialogs.message("\u041F\u0440\u0438 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u043E\u0432\u044B\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043D\u0435 \u0431\u044B\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B");
        }
      });
    }
    //редактировать участника
  }, {
    key: "editMember",
    value: function editMember(member) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var work, memberDto, settings;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              work = this.eventMembersRepository.getEventMember(this.data.eventId, member.id, [_model.EventMemberExpand.Files, _model.EventMemberExpand.Organization]);
              _context.next = 3;
              return this.$longWork.execute(work);
            case 3:
              memberDto = _context.sent;
              settings = {
                eventMemberId: member.id,
                user: memberDto.user,
                event: this.data.event,
                participationInfo: new _model.EventMemberViewModel(memberDto, this.data.event.isNationOlympiad)
              };
              _context.next = 7;
              return this.editEventMemberService.edit(settings);
            case 7:
              this.controller.load();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
    //удалить участника
  }, {
    key: "removeMember",
    value: function removeMember(member) {
      var _this4 = this;
      this.$dialogs.confirmDelete("Вы действительно желаете удалить участника?").then(function () {
        return _this4.eventMembersRepository.removeEventMember(_this4.data.event.id, member.id);
      }).then(function () {
        _this4.$alerts.success("Участник успешно удалён");
        _this4.controller.load();
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;
      var addButton = {
        title: "Добавить участника",
        style: "btn-info",
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          return _this5.addMember();
        },
        hide: true
      };
      var addListButton = {
        title: "Добавить участников",
        style: "btn-info",
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          return _this5.addMemberList();
        },
        hide: true
      };
      var createListButton = {
        title: "Сформировать список участников",
        style: "btn-info",
        icon: "glyphicon glyphicon-th-list",
        action: function action() {
          return _this5.createMemberList();
        },
        hide: true
      };
      var editButton = {
        title: this.language.Generic.Buttons.kEdit,
        isEnabled: function isEnabled() {
          return _this5.canEditMemberResults;
        },
        selectionMode: _registry.SelectionMode.Single,
        action: function action() {
          return _this5.editMember(_this5.controller.selection.selected[0]);
        },
        style: "btn-warning",
        icon: "glyphicon glyphicon-pencil",
        hide: true
      };
      var removeButton = {
        title: this.language.Generic.Buttons.kRemove,
        isEnabled: function isEnabled() {
          return _this5.canEditMembers;
        },
        selectionMode: _registry.SelectionMode.Single,
        action: function action() {
          return _this5.removeMember(_this5.controller.selection.selected[0]);
        },
        style: "btn-danger",
        icon: "glyphicon glyphicon-minus-sign"
      };
      var loadEvent = this.awardEventsRepository.getEvent(this.data.eventId).then(function (eventInfo) {
        _this5.data.event = new _model.EventViewModel(eventInfo);
        addButton.hide = !_this5.canEditMembers;
        addListButton.hide = !_this5.canEditMembers || _this5.data.event.isNationOlympiad && (_this5.isRegionalEvent || _this5.isDistrictEvent);
        removeButton.hide = !_this5.canEditMembers;
        editButton.hide = !_this5.canEditMemberResults;
        createListButton.hide = !_this5.canEditMembers || !_this5.data.event.isNationOlympiad || !(_this5.isDistrictEvent || _this5.isRegionalEvent);
      });
      this.registryInfo = {
        url: "/webapi/events/".concat(this.data.eventId, "/members-registry/registry"),
        filtersUrl: "/webapi/events/".concat(this.data.eventId, "/members-registry/registry/filter"),
        buttons: [addButton, addListButton, createListButton, editButton, removeButton],
        linkButtons: [],
        "export": true,
        registryStyles: {
          table: "table-xs table-bright table-bright-hover",
          filtersForm: "form-xs"
        },
        fieldDecorators: {
          "birthDate": new _registry.DateDecorator()
        },
        filterPanelStyles: {
          compact: true,
          label: "col-md-4",
          control: "col-md-8"
        },
        events: {
          ready: function ready() {
            loadEvent.then(function () {
              _this5.state.registryReady = true;
              _this5.state.ready = true;
              _this5.$appLoader.hide();
              _this5.$scope.$applyAsync();
            });
            console.log("registry ready");
          }
        },
        selectable: _registry.SelectionMode.Single,
        initialPageSize: 20
      };
      loadEvent.then(function () {
        return _this5.awardEventsRepository.getEventFiles(_this5.data.event.id);
      }).then(function (files) {
        _this5.data.event.documents = files;
      });
    }
  }]);
  return MemberListController;
}();
var MemeberListComponent = {
  templateUrl: "/static/dist/app/em/events/common/memberList/memberList.component.html",
  controller: MemberListController,
  controllerAs: "ctrl"
};
exports.MemeberListComponent = MemeberListComponent;

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectEventMembersComponent = void 0;
var _netcityModalCtrl = __webpack_require__(36);
var _registry = __webpack_require__(33);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var MarkAsSelectedDecorator = /*#__PURE__*/function () {
  function MarkAsSelectedDecorator(checkIsSelected) {
    _classCallCheck(this, MarkAsSelectedDecorator);
    this.checkIsSelected = checkIsSelected;
    this.template = "<span ng-if=\"!isSelected(row)\">{{content}}</span><del ng-if=\"isSelected(row)\">{{content}}</del>";
  }
  _createClass(MarkAsSelectedDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["isSelected"] = function (row) {
        return _this.checkIsSelected(row);
      };
    }
  }]);
  return MarkAsSelectedDecorator;
}();
var SelectEventMembersController = /*#__PURE__*/function (_NetCityModalControll) {
  SelectEventMembersController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language", "$longWork", "$alerts", "eventId", "eventMembersRepository"];
  _inherits(SelectEventMembersController, _NetCityModalControll);
  var _super = _createSuper(SelectEventMembersController);
  /*@ngInject*/
  function SelectEventMembersController($scope, $uibModalInstance, $dialogs, changeTracker, language, $longWork, $alerts, eventId,
  //private members: number[],
  eventMembersRepository) {
    var _this2;
    _classCallCheck(this, SelectEventMembersController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.$longWork = $longWork;
    _this2.$alerts = $alerts;
    _this2.eventId = eventId;
    _this2.eventMembersRepository = eventMembersRepository;
    _this2.header = "Выбрать участников мероприятия";
    var checkIsSelected = function checkIsSelected(registryItem) {
      return registryItem.alreadyMember;
      //return this.members.indexOf(parseInt(registryItem.id)) > -1;
    };

    var checkSelection = function checkSelection(registryItem) {
      return _this2.controller.selection.items.map(function (x) {
        return +x.id;
      }).indexOf(+registryItem.id) > -1;
    };
    _this2.registryInfo = {
      url: "/webapi/events/".concat(_this2.eventId, "/select-members/registry"),
      filtersUrl: "/webapi/events/".concat(_this2.eventId, "/select-members/registry/filter"),
      buttons: [],
      linkButtons: [],
      "export": false,
      registryStyles: {
        table: "table-xs table-bright table-bright-hover",
        filtersForm: "form-xs"
      },
      fieldDecorators: {
        "lastName": new MarkAsSelectedDecorator(function (registryItem) {
          return checkIsSelected(registryItem);
        }),
        "birthDate": new _registry.DateDecorator()
      },
      filterPanelStyles: {
        compact: true,
        label: "col-md-4",
        control: "col-md-8"
      },
      selectable: _registry.SelectionMode.Multiple,
      rowClasses: {
        "already-member": checkIsSelected
      },
      selectableClick: function selectableClick(row) {
        if (checkIsSelected(row)) {
          return;
        }
        _this2.controller.selection.select(row);
      },
      initialPageSize: 20,
      newPageDontDropSelection: true,
      showSelectAll: true,
      selectAllRecordsTitle: "Выбрать учащихся на всех страницах",
      unselectAllRecordsTitle: "Отменить выделение",
      selectedRecordsTitle: "Выбрано учащихся"
    };
    var saveBtn = {
      title: _this2.language.Generic.Buttons.kAdd,
      "class": ["btn-primary"],
      action: function action() {
        return _this2.save();
      },
      isEnabled: function isEnabled() {
        var _a, _b;
        return _this2.ready && ((_a = _this2.controller) === null || _a === void 0 ? void 0 : _a.state.dataReady) && ((_b = _this2.controller) === null || _b === void 0 ? void 0 : _b.selection.items.length) > 0;
      },
      icon: "glyphicon glyphicon-plus-sign"
    };
    var closeBtn = {
      title: _this2.language.Generic.Buttons.kClose,
      action: function action() {
        return _this2.close();
      }
    };
    _this2.buttons = [saveBtn, closeBtn];
    _this2.$scope.$watch(function () {
      var _a, _b;
      return (_b = (_a = _this2.controller) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.initing;
    }, function (val) {
      if (val == false) {
        _this2.controller.selection.isSelected = function (val) {
          return _this2.controller.selection.items.find(function (x) {
            return +x.id == +val.id;
          });
        };
        _this2.controller.selection.select = function (val) {
          var current = _this2.controller.selection.items.find(function (x) {
            return +x.id == +val.id;
          });
          if (current) {
            _this2.controller.selection.items = _this2.controller.selection.items.filter(function (x) {
              return +x.id != +val.id;
            });
          } else {
            _this2.controller.selection.items.push(val);
          }
        };
        _this2.ready = true;
      }
    });
    return _this2;
  }
  //отмена
  _createClass(SelectEventMembersController, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var promises, success, _iterator, _step, _loop, selectedAmount, successCount;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              promises = [];
              if (!(this.controller.selection.selected.length == 0)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              success = [];
              _iterator = _createForOfIteratorHelper(this.controller.selection.selected);
              _context2.prev = 5;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var user, member, addPromise;
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      user = _step.value;
                      member = {
                        id: null,
                        user: user
                      };
                      addPromise = _this3.eventMembersRepository.addEventMember(_this3.eventId, member, false).then(function (member) {
                        return success.push(member.user);
                      }, function (err) {
                        console.log(member.user.lastName + ": " + err.data.message);
                        _this3.$alerts.error(member.user.lastName + ": " + err.data.message);
                      });
                      promises.push(addPromise);
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context2.next = 12;
                break;
              }
              return _context2.delegateYield(_loop(), "t0", 10);
            case 10:
              _context2.next = 8;
              break;
            case 12:
              _context2.next = 17;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t1 = _context2["catch"](5);
              _iterator.e(_context2.t1);
            case 17:
              _context2.prev = 17;
              _iterator.f();
              return _context2.finish(17);
            case 20:
              _context2.next = 22;
              return this.$longWork.execute(Promise.all(promises));
            case 22:
              selectedAmount = this.controller.selection.selected.length;
              this.controller.selection.dropSelect();
              successCount = success.length;
              this.controller.load();
              if (!successCount) {
                this.$alerts.info("Ни один участник не был добавлен");
              } else if (successCount != selectedAmount) {
                this.$alerts.info("Было добавлено " + successCount + " участников из " + selectedAmount + " выбранных");
              } else {
                this.$alerts.success("Успешно добавлено " + successCount + " участников");
              }
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee, this, [[5, 14, 17, 20]]);
      }));
    }
  }]);
  return SelectEventMembersController;
}(_netcityModalCtrl.NetCityModalController);
var SelectEventMembersComponent = {
  controller: SelectEventMembersController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\" class=\"select-event-members-component\">\n\t\t<content-pre-loader ng-if=\"!$ctrl.ready\"></content-pre-loader>\n\t\t<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\" ng-show=\"$ctrl.ready\"></registry>\n\t\t<div class=\"legend print-block\" ng-show=\"$ctrl.ready && !$ctrl.controller.state.loading\">\t\n\t\t\t<div>\n\t\t\t\t<p>\n\t\t\t\t\t<span class=\"legend-label\" style=\"background-color: #ffe074\"></span>\n\t\t\t\t\t<span class=\"legend-description\"> \u2014 \u0423\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</ns-modal>"
};
exports.SelectEventMembersComponent = SelectEventMembersComponent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(61));
var Rights = _interopRequireWildcard(__webpack_require__(44));
var _references = __webpack_require__(39);
var _model = __webpack_require__(38);
var _repositories = __webpack_require__(40);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventListController = /*#__PURE__*/function () {
  EventListController.$inject = ["pageContext", "appContext", "$q", "$appLoader", "$location", "editAwardEventService", "emEventsRepository", "awardEventsRepository", "addressReferencesRepository", "language", "settingsProvider", "downloadService"];
  /*@ngInject*/
  function EventListController(pageContext, appContext, $q, $appLoader, $location, editAwardEventService, emEventsRepository, awardEventsRepository, addressReferencesRepository, language, settingsProvider, downloadService) {
    var _this = this;
    _classCallCheck(this, EventListController);
    this.appContext = appContext;
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.editAwardEventService = editAwardEventService;
    this.awardEventsRepository = awardEventsRepository;
    this.language = language;
    this.downloadService = downloadService;
    this.state = {
      viewReady: false,
      dataReady: false,
      emptyData: false,
      readOnly: !this.appContext.hasAnyRight([Rights.arEMEventsEdit]),
      accessToMembers: this.appContext.hasAnyRight([Rights.arEMEventsMembersView, Rights.arEMEventsMembersEdit])
    };
    this.data = {
      refs: _references.References,
      year: null,
      awardEventType: null,
      awardEventTypes: [],
      eventLevel: null,
      awardEventStatus: null,
      eventPlaceOwnType: [{
        id: "others"
      }],
      eventFounderOwnType: [{
        id: "own"
      }],
      events: [],
      years: [],
      municipalities: [],
      filter: {
        place: null,
        founder: null
      },
      selection: new _selectable["default"]()
    };
    this.search = {
      place: null,
      founder: null,
      name: '',
      showPrivateEvents: false
    };
    this.paging = {
      page: 1,
      pageSize: 50,
      totalRows: 0,
      totalPages: 1
    };
    pageContext.title = language.Generic.MenuFolders.kFEOEvents;
    pageContext.back = null;
    pageContext.parent = null;
    var initRegionEm = settingsProvider.ServerSettings.SystemSettings.IsRegionEMForSchool().then(function (val) {
      return _this.state.readOnly = _this.state.readOnly || val;
    });
    var initNationOlymp = settingsProvider.ServerSettings.SystemSettings.ModuleNationOlympiad().then(function (val) {
      return _this.nationOlympModule = val;
    });
    var initTalentStudents = settingsProvider.ServerSettings.SystemSettings.ModuleTalentStudents().then(function (val) {
      return _this.moduleTalentStudents = val;
    });
    var modulesCheck = Promise.all([initRegionEm, initNationOlymp, initTalentStudents]);
    var yearsLoaded = emEventsRepository.getEmYears().then(function (years) {
      _this.data.years = years;
      if (_this.data.year == null) {
        _this.data.year = _this.data.years[0];
      }
    });
    var municipalitiesReady = addressReferencesRepository.getMunicipalityDistricts({
      emId: appContext.emId,
      idType: _repositories.MunicipalityIdType.PositiveBound
    }).then(function (municipalities) {
      _this.data.municipalities = municipalities;
    });
    this.groupOrgs = function (item) {
      var _a;
      var id = item.id;
      if (id == 'all' || id == 'other') {
        return null;
      }
      if (((_a = item.educManagement) === null || _a === void 0 ? void 0 : _a.id) != _this.appContext.emId) {
        return _this.language.Generic.Events.kOtherOrgs;
      }
      return null;
    };
    //Загрузка страницы
    this.$q.all([yearsLoaded, municipalitiesReady, modulesCheck]).then(function () {
      if (_this.data.years && _this.data.years.length) {
        _this.initEventTypes();
        _this.state.viewReady = true;
        _this.load();
      } else {
        _this.state.dataReady = true;
        _this.state.emptyData = true;
        _this.state.readOnly = true;
        _this.state.viewReady = true;
        _this.$appLoader.hide();
      }
    });
  }
  //загрузка событий
  _createClass(EventListController, [{
    key: "load",
    value: function load() {
      this.digestLoad();
      this.pageLoad();
    }
  }, {
    key: "initEventTypes",
    value: function initEventTypes() {
      this.data.awardEventTypes = this.data.refs.awardEventTypes;
      if (!this.nationOlympModule) {
        this.data.awardEventTypes = this.data.awardEventTypes.filter(function (t) {
          return t.id != _model.AwardEventType.NationOlympiad;
        });
      }
    }
  }, {
    key: "throttleLoad",
    value: function throttleLoad() {
      var _this2 = this;
      if (this.throttleInstance) {
        clearTimeout(this.throttleInstance);
      }
      this.throttleInstance = setTimeout(function () {
        return _this2.load();
      }, 750);
    }
  }, {
    key: "digestLoad",
    value: function digestLoad() {
      var _this3 = this;
      var _a, _b, _c, _d;
      this.state.dataReady = false;
      this.data.selection.dropSelect();
      var getItems = function getItems(elements) {
        var hashArray = [];
        var value = function value(obj) {
          var organization = obj.educManagement || obj.school;
          return organization && organization.id || obj.name;
        };
        var filter = function filter(o) {
          var hash = value(o);
          var result = hashArray.indexOf(hash) < 0;
          if (result) {
            hashArray.push(hash);
          }
          return result;
        };
        return _.chain(elements).map(function (o) {
          return new _model.EventOrgModel(o);
        }).filter(filter).toArray().uniq().value();
      };
      var addDefaultVariants = function addDefaultVariants(array) {
        array.unshift({
          id: 'other',
          name: _this3.language.Generic.Events.kOtherOrgs
        });
        array.unshift({
          id: 'all',
          name: _this3.language.Generic.Common.kAll
        });
        return array;
      };
      if (this.data.year) {
        this.awardEventsRepository.getFounders(this.data.year.id, (_a = this.data.eventLevel) === null || _a === void 0 ? void 0 : _a.id, (_b = this.data.awardEventType) === null || _b === void 0 ? void 0 : _b.id, this.search.showPrivateEvents).then(function (founders) {
          _this3.data.filter.founder = addDefaultVariants(getItems(founders));
        });
        this.awardEventsRepository.getPlaces(this.data.year.id, (_c = this.data.eventLevel) === null || _c === void 0 ? void 0 : _c.id, (_d = this.data.awardEventType) === null || _d === void 0 ? void 0 : _d.id, this.search.showPrivateEvents).then(function (places) {
          _this3.data.filter.place = addDefaultVariants(getItems(places));
        });
      } else {
        this.data.filter.founder = null;
        this.data.filter.place = null;
      }
    }
  }, {
    key: "pageLoad",
    value: function pageLoad() {
      var _this4 = this;
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var place = this.search.place;
      var founder = this.search.founder;
      var filter = {
        yearId: (_a = this.data.year) === null || _a === void 0 ? void 0 : _a.id,
        level: (_b = this.data.eventLevel) === null || _b === void 0 ? void 0 : _b.id,
        awardEventType: (_c = this.data.awardEventType) === null || _c === void 0 ? void 0 : _c.id,
        awardEventStatus: (_d = this.data.awardEventStatus) === null || _d === void 0 ? void 0 : _d.id,
        placeSchoolId: (_e = place === null || place === void 0 ? void 0 : place.school) === null || _e === void 0 ? void 0 : _e.id,
        placeEmId: (_f = place === null || place === void 0 ? void 0 : place.educManagement) === null || _f === void 0 ? void 0 : _f.id,
        orgSchoolId: (_g = founder === null || founder === void 0 ? void 0 : founder.school) === null || _g === void 0 ? void 0 : _g.id,
        orgEmId: (_h = founder === null || founder === void 0 ? void 0 : founder.educManagement) === null || _h === void 0 ? void 0 : _h.id,
        showPrivateEvents: this.search.showPrivateEvents,
        page: this.paging.page,
        pageSize: this.paging.pageSize
      };
      if (this.search.name) {
        filter.name = this.search.name;
      }
      if (!filter.orgSchoolId && !filter.orgEmId) {
        filter.orgName = founder === null || founder === void 0 ? void 0 : founder.other;
      }
      if (!filter.placeSchoolId && !filter.placeEmId) {
        filter.placeName = place === null || place === void 0 ? void 0 : place.other;
        console.log("filter.placeName", filter.placeName);
      }
      this.awardEventsRepository.getAwardEvents(filter, ["municipality"]).then(function (events) {
        _this4.paging = {
          page: events.page,
          pageSize: events.pageSize,
          totalRows: events.totalRows,
          totalPages: Math.ceil(events.totalRows / events.pageSize)
        };
        _this4.data.events = events.data.map(function (dto) {
          return new _model.EventViewModel(dto);
        });
        _this4.state.emptyData = !_this4.data.events.length;
        _this4.$appLoader.hide();
        _this4.state.dataReady = true;
      });
    }
  }, {
    key: "exportToExcel",
    value: function exportToExcel() {
      if (this.state.dataReady && !this.state.emptyData && this.data.events.length) {
        var place = this.search.place;
        var founder = this.search.founder;
        var filters = [{
          filterId: "EventType",
          filterText: "",
          filterValue: _model.EventType.AwardEvents.toString()
        }];
        if (this.data.year) {
          filters.push({
            filterId: "Year",
            filterText: this.data.year.name,
            filterValue: this.data.year.id
          });
        }
        if (this.data.eventLevel) {
          filters.push({
            filterId: "Level",
            filterText: this.data.eventLevel.name,
            filterValue: this.data.eventLevel.id
          });
        }
        if (this.data.awardEventType) {
          filters.push({
            filterId: "AwardEventType",
            filterText: this.data.awardEventType.name,
            filterValue: this.data.awardEventType.id
          });
        }
        if (this.data.awardEventStatus) {
          filters.push({
            filterId: "AwardEventStatus",
            filterText: this.data.awardEventStatus.name,
            filterValue: this.data.awardEventStatus.id
          });
        }
        if (place && place.school) {
          filters.push({
            filterId: "PlaceSchool",
            filterText: place.school.name,
            filterValue: place.school.id
          });
        }
        if (place && place.educManagement) {
          filters.push({
            filterId: "PlaceEm",
            filterText: place.educManagement.name,
            filterValue: place.educManagement.id
          });
        }
        if (founder && founder.school) {
          filters.push({
            filterId: "OrgSchool",
            filterText: founder.school.name,
            filterValue: founder.school.id
          });
        }
        if (founder && founder.educManagement) {
          filters.push({
            filterId: "OrgEm",
            filterText: founder.educManagement.name,
            filterValue: founder.educManagement.id
          });
        }
        filters.push({
          filterId: "ShowPrivateEvents",
          filterText: "",
          filterValue: this.search.showPrivateEvents.toString()
        });
        if (this.search.name) {
          filters.push({
            filterId: "EventName",
            filterText: "",
            filterValue: this.search.name
          });
        }
        var expand = ["municipality"];
        var exportEventsInfo = {
          filterContext: {
            selectedData: filters
          },
          expand: expand
        };
        this.downloadService.downloadFile("/webapi/events/export", {
          data: exportEventsInfo,
          method: "post"
        });
      }
    }
  }, {
    key: "add",
    value: function add() {
      var _this5 = this;
      var _a;
      var settings = {
        years: this.data.years,
        globalYearId: (_a = this.data.year) === null || _a === void 0 ? void 0 : _a.id,
        municipalities: this.data.municipalities,
        canEditFounder: true,
        showLocality: true
      };
      this.editAwardEventService.add(settings).then(function () {
        return _this5.load();
      });
    }
  }, {
    key: "addNationOlymp",
    value: function addNationOlymp() {
      var _this6 = this;
      var _a;
      var settings = {
        years: this.data.years,
        globalYearId: (_a = this.data.year) === null || _a === void 0 ? void 0 : _a.id,
        municipalities: this.data.municipalities,
        canEditFounder: true,
        showLocality: true,
        isNationOlymp: true,
        emId: this.appContext.emId
      };
      this.editAwardEventService.add(settings).then(function () {
        return _this6.load();
      });
    }
  }, {
    key: "edit",
    value: function edit(event) {
      var _this7 = this;
      var _a;
      var settings = {
        years: this.data.years,
        globalYearId: (_a = this.data.year) === null || _a === void 0 ? void 0 : _a.id,
        municipalities: this.data.municipalities,
        canEditFounder: true,
        showLocality: true
      };
      this.editAwardEventService.edit(event.dto, settings).then(function () {
        return _this7.load();
      });
    }
  }, {
    key: "eventMembers",
    value: function eventMembers(event) {
      this.$location.path("/".concat(event.id, "/members"));
    }
  }, {
    key: "delete",
    value: function _delete(event) {
      var _this8 = this;
      this.editAwardEventService["delete"](event.id).then(function () {
        return _this8.load();
      });
    }
  }]);
  return EventListController;
}();
var EventListComponent = {
  controller: EventListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/list/eventlist.component.html"
};
exports.EventListComponent = EventListComponent;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventInfoComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventInfoController = /*#__PURE__*/function () {
  EventInfoController.$inject = ["language", "downloadService"];
  /*@ngInject*/
  function EventInfoController(language, downloadService) {
    _classCallCheck(this, EventInfoController);
    this.language = language;
    this.downloadService = downloadService;
  }
  _createClass(EventInfoController, [{
    key: "download",
    value: function download(doc) {
      this.downloadService.downloadFile("/webapi/events/file/download/".concat(doc.id));
    }
  }]);
  return EventInfoController;
}();
var EventInfoComponent = {
  selector: "eventInfo",
  templateUrl: "/static/dist/app/em/events/common/memberList/eventInfo.component.html",
  controller: EventInfoController,
  controllerAs: "ctrl",
  bindings: {
    event: "<"
  }
};
exports.EventInfoComponent = EventInfoComponent;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventMembersComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventMembersController = /*#__PURE__*/function () {
  function EventMembersController() {
    _classCallCheck(this, EventMembersController);
    this.pageStartIndex = 0;
    this.paging = {
      page: 1,
      pageSize: 50,
      totalRows: 0,
      totalPages: 1
    };
  }
  _createClass(EventMembersController, [{
    key: "pageStart",
    get: function get() {
      return (this.paging.page - 1) * this.paging.pageSize;
    }
  }, {
    key: "pageLoad",
    value: function pageLoad() {
      this.pageMembers = this.viewMembers.slice(this.pageStart, this.paging.page * this.paging.pageSize);
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(changesObj) {
      this.paging.totalRows = this.viewMembers.length;
      this.paging.totalPages = Math.ceil(this.paging.totalRows / this.paging.pageSize);
      this.pageLoad();
    }
  }]);
  return EventMembersController;
}();
var EventMembersComponent = {
  selector: "eventMembersComponent",
  templateUrl: "/static/dist/app/em/events/common/memberList/eventMembers.component.html",
  controller: EventMembersController,
  bindings: {
    members: "=",
    viewMembers: "<",
    selection: "="
  }
};
exports.EventMembersComponent = EventMembersComponent;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventFilesComponent = void 0;
var _editEventAttachment = __webpack_require__(67);
var _emevents = __webpack_require__(37);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditAwardEventFilesController = /*#__PURE__*/function () {
  EditAwardEventFilesController.$inject = ["$scope", "$dialogs", "language", "$longWork", "$alerts", "$uibModal", "awardEventsRepository", "downloadService"];
  /*@ngInject*/
  function EditAwardEventFilesController($scope, $dialogs, language, $longWork, $alerts, $uibModal, awardEventsRepository, downloadService) {
    _classCallCheck(this, EditAwardEventFilesController);
    this.$scope = $scope;
    this.$dialogs = $dialogs;
    this.language = language;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$uibModal = $uibModal;
    this.awardEventsRepository = awardEventsRepository;
    this.downloadService = downloadService;
    this.documentIndex = 0;
  }
  _createClass(EditAwardEventFilesController, [{
    key: "DownloadDocument",
    value: function DownloadDocument(document) {
      if (document.isProxy) {
        document.download();
        return;
      }
      var url = _emevents.AwardEventsRepository.getDownloadFileUrl(this.eventId, document.id);
      this.downloadService.downloadFile(url);
    }
    //Добавить документ
  }, {
    key: "UpdateDocument",
    value: function UpdateDocument(document) {
      var _this = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _editEventAttachment.EditEventAttachmentComponent.templateUrl,
        controller: _editEventAttachment.EditEventAttachmentComponent.controller,
        controllerAs: _editEventAttachment.EditEventAttachmentComponent.controllerAs,
        size: "md",
        resolve: {
          url: function url() {
            return _emevents.AwardEventsRepository.getSaveFilesUrl(_this.eventId);
          },
          doc: function doc() {
            if (!document) {
              return {};
            } else {
              return angular.extend({}, document);
            }
          },
          lazy: function lazy() {
            return !(_this.eventId > 0);
          }
        }
      });
      return modalInstance.result.then(function (result) {
        if (result.id === 0 || result.isProxy) {
          result.id = --_this.documentIndex;
        }
        _this.documents = _.without(_this.documents, document);
        return _this.documents.push(result);
      });
    }
  }, {
    key: "RemoveDocument",
    value: function RemoveDocument(document) {
      var _this2 = this;
      var removeProxyDocument = function removeProxyDocument(document) {
        _this2.documents = _this2.documents.filter(function (doc) {
          return doc !== document;
        });
      };
      if (document.isProxy) return removeProxyDocument(document);
      return this.$dialogs.confirmDelete(this.language.Generic.SchoolInfo.kAreSureDeleteDocument).then(function () {
        return _this2.awardEventsRepository.deleteEventFile(_this2.eventId, document.id);
      }).then(function () {
        _this2.documents = _.without(_this2.documents, document);
        _this2.$alerts.success(_this2.language.Generic.SchoolInfo.kDocumentSuccessDeleted);
        _this2.$scope.$applyAsync();
      });
    }
  }]);
  return EditAwardEventFilesController;
}();
var EditAwardEventFilesComponent = {
  selector: "editEventFiles",
  bindings: {
    eventId: "<",
    documents: "=",
    readonly: "<"
  },
  controller: EditAwardEventFilesController,
  controllerAs: "$ctrl",
  templateUrl: '/static/dist/app/em/events/common/editEvent/editevent.files.component.html'
};
exports.EditAwardEventFilesComponent = EditAwardEventFilesComponent;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventAttachmentComponent = void 0;
var FileSaver = _interopRequireWildcard(__webpack_require__(68));
var _netcityModalCtrl = __webpack_require__(36);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var EditEventAttachmentController = /*#__PURE__*/function (_NetCityModalControll) {
  EditEventAttachmentController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "Upload", "$alerts", "language", "url", "doc", "lazy", "settingsProvider"];
  _inherits(EditEventAttachmentController, _NetCityModalControll);
  var _super = _createSuper(EditEventAttachmentController);
  /*@ngInject*/
  function EditEventAttachmentController($scope, $uibModalInstance, changeTracker, $dialogs, Upload, $alerts, language, url, doc, lazy, settingsProvider) {
    var _this;
    _classCallCheck(this, EditEventAttachmentController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.Upload = Upload;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.doc = doc;
    _this.lazy = lazy;
    _this.settingsProvider = settingsProvider;
    _this.editMode = _this.doc.id > 0;
    _this.data = {
      doc: doc,
      url: url
    };
    _this.header = _this.editMode ? "Редактирование документа" : "Создание документа";
    _this.initUploadLimits();
    _this.data.doc.fileName = doc.originalFileName;
    $scope.$watch(function () {
      return _this.data.doc.file;
    }, function (file) {
      if (file) {
        _this.data.doc.fileName = file.name;
        // Получаем размер файла в КБ
        _this.fileSize = _this.data.doc.file.size / 1024;
        if (_this.fileSize > _this.fileSizeLimit) {
          _this.$alerts.error(_this.language.Generic.SetupSchoolPortfolio.kFileSizeCantBeGreaterThan + _this.fileSizeLimit / 1024 + ' МБ');
        }
      }
    });
    return _this;
  }
  _createClass(EditEventAttachmentController, [{
    key: "initUploadLimits",
    value: function initUploadLimits() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.settingsProvider.UploadLimits;
            case 2:
              this.uploadLimits = _context.sent;
              this.fileSizeLimit = this.uploadLimits.fileSizeLimit;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "_save",
    value: function _save(url, method) {
      var document = {
        file: this.data.doc.file,
        info: JSON.stringify({
          Id: !this.doc.id || this.doc.id < 0 ? 0 : this.doc.id,
          Name: this.data.doc.name,
          Description: this.data.doc.description
        })
      };
      var config = {
        url: url,
        method: method,
        data: document
      };
      return this.Upload.upload(config);
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.docForm.$valid || this.fileSize > this.fileSizeLimit) {
        this.docForm.$displayErrors = true;
        return;
      }
      if (this.lazy) {
        return this.lazyFileLoad();
      }
      var method = this.editMode ? "PUT" : "POST";
      this._save(this.data.url, method).then(function (response) {
        _this2.$alerts.success(_this2.language.Generic.SetupSchoolResources.kSaveDocumentSuccess);
        _this2.$uibModalInstance.close(response.data[0] || response.data);
        return response.data[0] || response.data;
      }, function (response) {
        _this2.$alerts.error(response.data.message, response.data.details);
      });
    }
  }, {
    key: "lazyFileLoad",
    value: function lazyFileLoad() {
      var _this3 = this;
      var getProxyUrl = function getProxyUrl(fileData) {
        var blob = new Blob([fileData], {
          type: "octet/stream"
        });
        return window.URL.createObjectURL(blob);
      };
      var download = function download(fileData, name) {
        var blob = new Blob([fileData], {
          type: "octet/stream"
        });
        return function () {
          return FileSaver.saveAs(blob, name);
        };
      };
      var getProxyFile = function getProxyFile(id, document) {
        if (_this3.doc.isProxy) {
          document.file = document.file || _this3.doc && _this3.doc.data && _this3.doc.data.file;
        }
        return {
          id: id || 0,
          name: document.name,
          description: document.description,
          originalFileName: document.fileName,
          data: {
            file: document.file,
            info: JSON.stringify({
              Id: id <= 0 ? 0 : id,
              Name: document.name,
              Description: document.description
            })
          },
          download: download(document.file, document.fileName),
          proxyUrl: getProxyUrl(document.file),
          isProxy: true
        };
      };
      var proxyFile = getProxyFile(this.doc.id, this.data.doc);
      this.$uibModalInstance.close(proxyFile);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return EditEventAttachmentController;
}(_netcityModalCtrl.NetCityModalController);
var EditEventAttachmentComponent = {
  controller: EditEventAttachmentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/common/fileAttachment/editEventAttachment.component.html"
};
exports.EditEventAttachmentComponent = EditEventAttachmentComponent;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.4
 * 2018-01-12 13:14:0
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || function (view) {
  "use strict";

  // IE <10 is explicitly unsupported
  if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
    return;
  }
  var doc = view.document
    // only get URL when necessary in case Blob.js hasn't overridden it yet
    ,
    get_URL = function get_URL() {
      return view.URL || view.webkitURL || view;
    },
    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
    can_use_save_link = ("download" in save_link),
    click = function click(node) {
      var event = new MouseEvent("click");
      node.dispatchEvent(event);
    },
    is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
    is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
    throw_outside = function throw_outside(ex) {
      (view.setImmediate || view.setTimeout)(function () {
        throw ex;
      }, 0);
    },
    force_saveable_type = "application/octet-stream"
    // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
    ,
    arbitrary_revoke_timeout = 1000 * 40 // in ms
    ,
    revoke = function revoke(file) {
      var revoker = function revoker() {
        if (typeof file === "string") {
          // file is an object URL
          get_URL().revokeObjectURL(file);
        } else {
          // file is a File
          file.remove();
        }
      };
      setTimeout(revoker, arbitrary_revoke_timeout);
    },
    dispatch = function dispatch(filesaver, event_types, event) {
      event_types = [].concat(event_types);
      var i = event_types.length;
      while (i--) {
        var listener = filesaver["on" + event_types[i]];
        if (typeof listener === "function") {
          try {
            listener.call(filesaver, event || filesaver);
          } catch (ex) {
            throw_outside(ex);
          }
        }
      }
    },
    auto_bom = function auto_bom(blob) {
      // prepend BOM for UTF-8 XML and text/* types (including HTML)
      // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
      if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], {
          type: blob.type
        });
      }
      return blob;
    },
    FileSaver = function FileSaver(blob, name, no_auto_bom) {
      if (!no_auto_bom) {
        blob = auto_bom(blob);
      }
      // First try a.download, then web filesystem, then object URLs
      var filesaver = this,
        type = blob.type,
        force = type === force_saveable_type,
        object_url,
        dispatch_all = function dispatch_all() {
          dispatch(filesaver, "writestart progress write writeend".split(" "));
        }
        // on any filesys errors revert to saving with object URLs
        ,
        fs_error = function fs_error() {
          if ((is_chrome_ios || force && is_safari) && view.FileReader) {
            // Safari doesn't allow downloading of blob urls
            var reader = new FileReader();
            reader.onloadend = function () {
              var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
              var popup = view.open(url, '_blank');
              if (!popup) view.location.href = url;
              url = undefined; // release reference before dispatching
              filesaver.readyState = filesaver.DONE;
              dispatch_all();
            };
            reader.readAsDataURL(blob);
            filesaver.readyState = filesaver.INIT;
            return;
          }
          // don't create more object URLs than needed
          if (!object_url) {
            object_url = get_URL().createObjectURL(blob);
          }
          if (force) {
            view.location.href = object_url;
          } else {
            var opened = view.open(object_url, "_blank");
            if (!opened) {
              // Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
              view.location.href = object_url;
            }
          }
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
          revoke(object_url);
        };
      filesaver.readyState = filesaver.INIT;
      if (can_use_save_link) {
        object_url = get_URL().createObjectURL(blob);
        setTimeout(function () {
          save_link.href = object_url;
          save_link.download = name;
          click(save_link);
          dispatch_all();
          revoke(object_url);
          filesaver.readyState = filesaver.DONE;
        });
        return;
      }
      fs_error();
    },
    FS_proto = FileSaver.prototype,
    saveAs = function saveAs(blob, name, no_auto_bom) {
      return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
    };
  // IE 10+ (native saveAs)
  if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
    return function (blob, name, no_auto_bom) {
      name = name || blob.name || "download";
      if (!no_auto_bom) {
        blob = auto_bom(blob);
      }
      return navigator.msSaveOrOpenBlob(blob, name);
    };
  }
  FS_proto.abort = function () {};
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;
  FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
  return saveAs;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || void 0);
if ( true && module.exports) {
  module.exports.saveAs = saveAs;
} else if ( true && __webpack_require__(69) !== null && __webpack_require__(70) !== null) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventService = exports.EditAwardEventComponent = void 0;
var _references = __webpack_require__(39);
var _model = __webpack_require__(38);
var _netcityModalCtrl = __webpack_require__(36);
var _emevents = __webpack_require__(37);
var _founders = __webpack_require__(72);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var EditAwardEventService = /*#__PURE__*/function () {
  EditAwardEventService.$inject = ["$document", "$uibModal", "awardEventsRepository", "language", "$alerts", "$dialogs", "appContext"];
  /*@ngInject*/
  function EditAwardEventService($document, $uibModal, awardEventsRepository, language, $alerts, $dialogs, appContext) {
    _classCallCheck(this, EditAwardEventService);
    this.$document = $document;
    this.$uibModal = $uibModal;
    this.awardEventsRepository = awardEventsRepository;
    this.language = language;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.appContext = appContext;
  }
  _createClass(EditAwardEventService, [{
    key: "add",
    value: function add(_settings) {
      var isCurator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var bodyRef = angular.element(this.$document[0].body);
      bodyRef.addClass('ovh');
      var _event = {
        id: 0,
        status: _model.AwardEventStatus.RegisteringMembers,
        organization: {},
        founder: _settings.founder || null,
        awardEventType: null,
        visitForm: null,
        level: null,
        partForm: null,
        subject: "",
        startTime: new Date(),
        endTime: null,
        description: null,
        eventType: null,
        globalYearId: _settings.globalYearId
      };
      if (isCurator) {
        _event.curatorId = this.appContext.userId;
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: EditAwardEventComponent.templateUrl,
        controller: EditAwardEventComponent.controller,
        controllerAs: EditAwardEventComponent.controllerAs,
        size: "lg",
        resolve: {
          event: function event() {
            return _event;
          },
          settings: function settings() {
            return _settings;
          }
        }
      });
      return modalInstance.result.then(function () {
        bodyRef.removeClass('ovh');
      });
    }
  }, {
    key: "edit",
    value: function edit(dto, _settings2) {
      var modalInstance = this.$uibModal.open({
        templateUrl: EditAwardEventComponent.templateUrl,
        controller: EditAwardEventComponent.controller,
        controllerAs: EditAwardEventComponent.controllerAs,
        size: "lg",
        resolve: {
          event: function event() {
            return angular.copy(dto);
          },
          settings: function settings() {
            return _settings2;
          }
        }
      });
      return modalInstance.result;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var _this = this;
      return this.$dialogs.confirmDelete(this.language.Generic.Common.kCfrmContinue).then(function () {
        return _this.awardEventsRepository.deleteEvent(id);
      }).then(function (result) {
        if (result == _model.EventRemoveResult.Cancelled) {
          _this.$alerts.info("Невозможно удалить мероприятие, на которое зарегистрированы участники.\nИзменен статус мероприятия на \"Отменено\".");
        } else {
          _this.$alerts.success(_this.language.Generic.SetupSchoolCalendar.kDeleteSingleEventSuccess);
        }
      });
    }
  }]);
  return EditAwardEventService;
}();
exports.EditAwardEventService = EditAwardEventService;
var EditAwardEventController = /*#__PURE__*/function (_NetCityModalControll) {
  EditAwardEventController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "event", "language", "Upload", "$timeout", "$longWork", "$alerts", "referencesRepository", "awardEventsRepository", "settings", "settingsProvider", "dateUtils", "appContext"];
  _inherits(EditAwardEventController, _NetCityModalControll);
  var _super = _createSuper(EditAwardEventController);
  /*@ngInject*/
  function EditAwardEventController($scope, $uibModalInstance, changeTracker, $dialogs, event, language, Upload, $timeout, $longWork, $alerts, referencesRepository, awardEventsRepository, settings, settingsProvider, dateUtils, appContext) {
    var _this2;
    _classCallCheck(this, EditAwardEventController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.Upload = Upload;
    _this2.$longWork = $longWork;
    _this2.$alerts = $alerts;
    _this2.referencesRepository = referencesRepository;
    _this2.awardEventsRepository = awardEventsRepository;
    _this2.settings = settings;
    _this2.settingsProvider = settingsProvider;
    _this2.dateUtils = dateUtils;
    _this2.appContext = appContext;
    _this2.uiState = {
      startTimeOpened: false,
      endTimeOpened: false
    };
    _this2.dateOptions = {
      format: _this2.dateUtils.getDateFormat(),
      minDate: null,
      maxDate: null
    };
    _this2.showMunicipality = false;
    _this2.editMode = event.id > 0;
    if (_this2.editMode && (event === null || event === void 0 ? void 0 : event.awardEventType) == _model.AwardEventType.NationOlympiad) {
      if ((event === null || event === void 0 ? void 0 : event.level) == _model.EventLevel.Regional && !(appContext.isTopEm && appContext.authorityType == _founders.AuthorityType.Educations)) {
        _this2.regionalNationOlympSaveDisabled = true;
      }
      _this2.nationOlympOrgDisabled = !_this2.appContext.nationOlympOrg || (!event.founder || !event.founder.educManagement || event.founder.educManagement.id != _this2.appContext.emId) && (event.level == _model.EventLevel.Regional || event.level == _model.EventLevel.District);
    }
    _this2.header = language.Generic.Events.kEventInfo;
    event.eventType = _model.EventType.AwardEvents;
    if (event.startTime) {
      event.startTime = dateUtils.asUTCDate(new Date(event.startTime));
    }
    if (event.endTime) {
      event.endTime = dateUtils.asUTCDate(new Date(event.endTime));
    }
    event.founder = new _model.EventOrgModel(event.founder);
    event.organization = new _model.EventOrgModel(event.organization);
    _this2.data = {
      search: {},
      refs: _references.References,
      event: event,
      documents: [],
      awardEventTypes: [],
      educYears: settings.years,
      educYear: null,
      eventLevels: null,
      municipalities: settings.municipalities,
      municipality: null,
      editMode: _this2.editMode
    };
    _this2.nationOlympData = {
      districtEmOrgs: [],
      olympSubjects: [],
      directions: [],
      grades: [4, 5, 6, 7, 8, 9, 10, 11]
    };
    if (_this2.data.event.globalYearId > 0) {
      _this2.data.educYear = _this2.data.educYears.find(function (y) {
        return y.id == _this2.data.event.globalYearId;
      });
    } else if (settings.globalYearId > 0) {
      _this2.data.educYear = _this2.data.educYears.find(function (y) {
        return y.id == settings.globalYearId;
      });
    } else {
      _this2.data.educYear = _this2.data.educYears[0];
    }
    _this2.data.awardEventTypes = _references.References.awardEventTypes;
    if (!_this2.data.editMode) {
      _this2.data.event.membersRegistrationType = _model.RegistrationType.Public;
    }
    if (_this2.isNationOlymp) {
      _this2.data.awardEventTypes = _this2.data.awardEventTypes.filter(function (x) {
        return x.id == _model.AwardEventType.NationOlympiad;
      });
      _this2.data.event.awardEventType = _model.AwardEventType.NationOlympiad;
      _this2.data.event.grades = (_this2.data.event.grades || []).sort(function (a, b) {
        return a - b;
      });
    } else {
      _this2.data.awardEventTypes = _this2.data.awardEventTypes.filter(function (x) {
        return x.id != _model.AwardEventType.NationOlympiad;
      });
    }
    _this2.onChangeEventType();
    _this2.onChangeLevel();
    _this2.onChangeDirection();
    _this2.globalYearChange();
    if (_this2.editMode) {
      _this2.awardEventsRepository.getEventFiles(event.id).then(function (files) {
        return _this2.data.documents = files;
      });
    }
    $timeout(function () {
      changeTracker.clearDataChanges($("div.modal.fade"));
    });
    var saveBtn = {
      title: _this2.language.Generic.Buttons.kSave,
      "class": ["btn-primary"],
      action: function action() {
        return _this2.save();
      },
      icon: "glyphicon glyphicon-floppy-save",
      isEnabled: function isEnabled() {
        return !_this2.regionalNationOlympSaveDisabled && !_this2.nationOlympOrgDisabled;
      }
    };
    var cancelBtn = {
      title: _this2.language.Generic.Buttons.kCancel,
      action: function action() {
        return _this2.close();
      },
      icon: "glyphicon glyphicon-remove-sign"
    };
    _this2.buttons = [saveBtn, cancelBtn];
    _this2.init();
    return _this2;
  }
  _createClass(EditAwardEventController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.isNationOlymp) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return this.initDistrictOrganizers();
            case 3:
              _context.next = 5;
              return this.initAwardEventDirections();
            case 5:
              this.ready = true;
              this.$scope.$applyAsync();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initLevels",
    value: function initLevels() {
      var _this3 = this;
      var levels = _references.References.eventLevels;
      if (this.settings.levels) {
        levels = levels.filter(function (l) {
          return _this3.settings.levels.indexOf(l.id) > -1;
        });
      }
      if (this.data.event.awardEventType == _model.AwardEventType.NationOlympiad) {
        levels = levels.filter(function (l) {
          return l.id != _model.EventLevel.Federal && l.id != _model.EventLevel.International && l.id != _model.EventLevel.Municipal;
        });
      }
      if (this.isNationOlymp) {
        levels = levels.filter(function (l) {
          return l.id != _model.EventLevel.Municipal;
        });
        if (!(this.appContext.isTopEm && this.appContext.authorityType == _founders.AuthorityType.Educations)) {
          levels = levels.filter(function (l) {
            return l.id != _model.EventLevel.Regional;
          });
        }
        if (this.soloIntegration) {
          levels = levels.filter(function (l) {
            return l.id == _model.EventLevel.School;
          });
        }
      }
      return levels;
    }
  }, {
    key: "initAwardEventDirections",
    value: function initAwardEventDirections() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.settingsProvider.ServerSettings.SystemSettings.SoloIntegration();
            case 2:
              this.soloIntegration = _context2.sent;
              if (this.soloIntegration) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              if (!this.isNationOlymp) {
                _context2.next = 8;
                break;
              }
              this.onChangeEventType();
              return _context2.abrupt("return");
            case 8:
              _context2.next = 10;
              return this.awardEventsRepository.getAwardEventDirections(this.appContext.at);
            case 10:
              this.nationOlympData.directions = _context2.sent.sort(function (a, b) {
                var aStr = (a.id <= 1000 ? "0".concat(a.name) : "1".concat(a.name)).toLowerCase();
                var bStr = (b.id <= 1000 ? "0".concat(b.name) : "1".concat(b.name)).toLowerCase();
                return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "initDistrictOrganizers",
    value: function initDistrictOrganizers() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.awardEventsRepository.getNationOlympDistrictOrganizers(this.settings.emId).then(function (orgs) {
                var _a, _b;
                _this4.nationOlympData.districtEmOrgs = orgs;
                if (!(_this4.appContext.isTopEm && _this4.appContext.authorityType == _founders.AuthorityType.Educations) || _this4.data.event.level == _model.EventLevel.Regional) {
                  _this4.nationOlympData.districtEmOrgs = orgs.filter(function (x) {
                    return x.id == _this4.appContext.emId;
                  });
                  if (_this4.nationOlympData.districtEmOrgs && _this4.nationOlympData.districtEmOrgs.length) {
                    if (((_a = _this4.nationOlympFounder) === null || _a === void 0 ? void 0 : _a.id) && ((_b = _this4.nationOlympFounder) === null || _b === void 0 ? void 0 : _b.id) != _this4.nationOlympData.districtEmOrgs[0].id && _this4.editMode) {
                      _this4.nationOlympData.districtEmOrgs.push(_this4.nationOlympFounder);
                    }
                    if (_this4.settings.isNationOlymp) {
                      _this4.nationOlympFounder = _this4.nationOlympData.districtEmOrgs[0];
                    }
                  }
                }
              });
            case 2:
              _context3.next = 4;
              return this.awardEventsRepository.getOlympSubjects(this.appContext.at).then(function (subjects) {
                _this4.nationOlympData.olympSubjects = subjects.sort(function (a, b) {
                  var aStr = (a.id <= 1000 ? "0".concat(a.name) : "1".concat(a.name)).toLowerCase();
                  var bStr = (b.id <= 1000 ? "0".concat(b.name) : "1".concat(b.name)).toLowerCase();
                  return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
                });
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "inCurrentEducYearRange",
    value: function inCurrentEducYearRange(date) {
      if (!date) return true;
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      // Отбрасываем время
      date = this.dateUtils.asUTCDate(new Date(year, month, day));
      return (!this.dateOptions.minDate || date >= this.dateOptions.minDate) && (!this.dateOptions.maxDate || date <= this.dateOptions.maxDate);
    }
  }, {
    key: "canEditDatesAndPlace",
    get: function get() {
      if (!this.editMode) {
        return true;
      }
      return this.data.event.status == _model.AwardEventStatus.RegisteringMembers || this.data.event.status == _model.AwardEventStatus.Organizing;
    }
  }, {
    key: "isNationOlymp",
    get: function get() {
      return this.settings.isNationOlymp || this.data.event.awardEventType == _model.AwardEventType.NationOlympiad;
    }
  }, {
    key: "nationOlympFounder",
    get: function get() {
      return this.data.event.founder.educManagement;
    },
    set: function set(value) {
      this.data.event.founder.educManagement = value;
    }
  }, {
    key: "nationOlympEventName",
    get: function get() {
      var _a;
      var name = "Всероссийская олимпиада школьников";
      if (this.data.event.level) {
        name += ". ";
        switch (this.data.event.level) {
          case _model.EventLevel.Regional:
            name += "Региональный этап";
            break;
          case _model.EventLevel.District:
            name += "Окружной этап";
            break;
          case _model.EventLevel.Municipal:
            name += "Муниципальный этап";
            break;
          case _model.EventLevel.School:
            name += "Школьный этап";
            break;
        }
      }
      if ((_a = this.data.event.olympSubject) === null || _a === void 0 ? void 0 : _a.name) {
        name += ". ";
        name += this.data.event.olympSubject.name;
      }
      if (this.data.event.grades && this.data.event.grades.length) {
        var ranges = (0, _model.getArrayRange)(this.data.event.grades);
        var gradesStr = ranges.reduce(function (c, g) {
          return c += ", " + (g.start == g.end ? g.start : g.start + "-" + g.end);
        }, "").substr(2);
        name += ". (" + gradesStr + " классы)";
      }
      return name;
    }
  }, {
    key: "displayRegType",
    get: function get() {
      if (this.isNationOlymp) {
        return false;
      }
      return this.data.event.level == _model.EventLevel.Municipal || this.data.event.level == _model.EventLevel.School || this.data.event.level == _model.EventLevel.District;
    }
  }, {
    key: "toggleGrade",
    value: function toggleGrade(grade) {
      if (this.hasGrade(grade)) {
        this.data.event.grades = this.data.event.grades.filter(function (x) {
          return x != grade;
        });
      } else {
        var grades = this.data.event.grades.concat([grade]).sort(function (a, b) {
          return a - b;
        });
        this.data.event.grades = grades;
      }
    }
  }, {
    key: "hasGrade",
    value: function hasGrade(grade) {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.grades) === null || _c === void 0 ? void 0 : _c.indexOf(grade)) > -1;
    }
  }, {
    key: "tuneIntervalToYear",
    value: function tuneIntervalToYear() {
      if (this.data.event && this.data.event.startTime && this.data.event.startTime < this.dateOptions.minDate) {
        this.data.event.startTime = this.dateOptions.minDate;
      }
      if (this.data.event && this.data.event.startTime && this.data.event.startTime > this.dateOptions.maxDate) {
        this.data.event.startTime = this.dateOptions.maxDate;
      }
      if (this.data.event && this.data.event.endTime && this.data.event.endTime > this.dateOptions.maxDate) {
        this.data.event.endTime = this.dateOptions.maxDate;
      }
      if (this.data.event && this.data.event.endTime && this.data.event.endTime < this.dateOptions.minDate) {
        this.data.event.endTime = this.dateOptions.minDate;
      }
    }
  }, {
    key: "globalYearChange",
    value: function globalYearChange() {
      var _this5 = this;
      this.data.event.globalYearId = this.data.educYear.id;
      this.referencesRepository.getYear(this.data.event.globalYearId).then(function (educYear) {
        _this5.dateOptions.minDate = _this5.dateUtils.asUTCDate(new Date(educYear.startDate));
        _this5.dateOptions.maxDate = _this5.dateUtils.asUTCDate(new Date(educYear.endDate));
        _this5.tuneIntervalToYear();
      });
    }
  }, {
    key: "onChangeEventType",
    value: function onChangeEventType() {
      var _this6 = this;
      this.data.eventLevels = this.initLevels();
      if (this.data.event.level && this.data.eventLevels && this.data.eventLevels.length && !this.data.eventLevels.find(function (x) {
        return x.id == _this6.data.event.level;
      })) {
        this.data.eventLevels.push(_references.References.eventLevels.find(function (x) {
          return x.id == _this6.data.event.level;
        }));
      }
      if (this.data.eventLevels && this.data.eventLevels.length == 1 && !this.data.event.level) {
        this.data.event.level = this.data.eventLevels[0].id;
      }
      if (this.data.event.awardEventType == _model.AwardEventType.NationOlympiad) {
        this.data.event.partForm = _model.ParticipiationForm.Individual;
        this.data.event.visitForm = _model.VisitForm.FullTime;
      }
    }
  }, {
    key: "isStartBeforeEnd",
    value: function isStartBeforeEnd() {
      if (!this.data.event || !this.data.event.startTime) {
        return false;
      }
      var startTime = this.dateUtils.asUTCDate(new Date(this.data.event.startTime));
      var endTime = this.data.event.endTime ? this.dateUtils.asUTCDate(new Date(this.data.event.endTime)) : this.dateUtils.asUTCDate(new Date(this.data.event.startTime));
      return startTime > endTime;
    }
  }, {
    key: "isInEducYear",
    value: function isInEducYear() {
      var startTime = this.dateUtils.asUTCDate(new Date(this.data.event.startTime));
      var endTime = this.data.event.endTime ? this.dateUtils.asUTCDate(new Date(this.data.event.endTime)) : this.dateUtils.asUTCDate(new Date(this.data.event.startTime));
      return !(this.inCurrentEducYearRange(startTime) && this.inCurrentEducYearRange(endTime));
    }
  }, {
    key: "isAllowedEventLevel",
    value: function isAllowedEventLevel() {
      return this.data.event.level == _model.EventLevel.District || this.data.event.level == _model.EventLevel.Regional;
    }
    //создание/редактирование
  }, {
    key: "save",
    value: function save() {
      var _this7 = this;
      if (!this.eventForm.$valid || this.isStartBeforeEnd() || this.isInEducYear()) {
        this.eventForm.$displayErrors = true;
        return;
      }
      if (this.regionalNationOlympSaveDisabled) {
        this.$alerts.error("Нерегиональным УО запрещено редактировать региональные мероприятия ВсОШ");
        return;
      }
      if (!this.data.event.endTime) {
        this.data.event.endTime = this.data.event.startTime;
      }
      if (!this.showMunicipality) {
        this.data.event.municipalityId = null;
      }
      if (this.isNationOlymp) {
        this.data.event.name = this.nationOlympEventName;
      }
      if (this.data.event.level != _model.EventLevel.Municipal && this.data.event.level != _model.EventLevel.District && this.data.event.level != _model.EventLevel.School) {
        this.data.event.membersRegistrationType = _model.RegistrationType.Public;
      }
      var request = this.editMode ? this.awardEventsRepository.editEvent(this.data.event) : this.awardEventsRepository.addEvent(this.data.event);
      return this.$longWork.execute(request).then(function (event) {
        if (_this7.editMode) {
          _this7.postFiles(event.id, _this7.data.documents);
        }
        _this7.$alerts.success(_this7.language.Generic.Events.kEventSaved);
        if (_this7.editMode) {
          _this7.$uibModalInstance.close(event);
        } else {
          _this7.data.event = Object.assign({}, event);
          _this7.editMode = true;
          _this7.created = true;
          _this7.changeTracker.clearDataChanges();
          _this7.init();
        }
      });
    }
  }, {
    key: "dateFormatMessage",
    value: function dateFormatMessage() {
      return "".concat(this.language.Generic.Common.kEnterDateInFormat, " ").concat(this.dateUtils.getLocaleFormat());
    }
  }, {
    key: "getIntervalDateMessage",
    value: function getIntervalDateMessage() {
      return this.language.Generic.Events.kErrEventStartDateBeforeEndDate;
    }
  }, {
    key: "inEducYearMessage",
    value: function inEducYearMessage() {
      return this.language.Generic.Events.kEventInEducYear;
    }
  }, {
    key: "onChangeLevel",
    value: function onChangeLevel() {
      var level = this.data.event.level;
      if (!level) {
        this.showMunicipality = false;
      } else if (level == _model.EventLevel.International || level == _model.EventLevel.Federal) {
        this.showMunicipality = false;
      } else if (level == _model.EventLevel.Regional) {
        this.showMunicipality = false;
        if (this.isNationOlymp) {
          this.initDistrictOrganizers();
        }
      } else if (this.isNationOlymp) {
        this.showMunicipality = level == _model.EventLevel.Municipal || level == _model.EventLevel.School;
        this.initDistrictOrganizers();
      } else {
        this.showMunicipality = true;
      }
    }
  }, {
    key: "onChangeDirection",
    value: function onChangeDirection() {
      var _a;
      if (this.soloIntegration && !this.isNationOlymp) {
        this.data.event.subject = (_a = this.data.event.direction) === null || _a === void 0 ? void 0 : _a.name;
      }
    }
  }, {
    key: "onChangeStatus",
    value: function onChangeStatus(oldEventStatus) {
      var _this8 = this;
      if (!this.isNationOlymp || this.data.event.status != _model.AwardEventStatus.Completed) return;
      var checkDate = this.dateUtils.asUTCDate(this.data.event.endTime);
      var todayDate = this.dateUtils.asUTCDate(new Date());
      checkDate.setDate(checkDate.getDate() + 6);
      if (checkDate > todayDate) {
        this.$dialogs.confirm("В течение 6 дней с даты проведения олимпиады учащиеся имеют право подавать апелляции.\n" + "Если вы измените статус на \"Завершено\", то они не смогут это сделать.\n" + "Вы уверены, что хотите завершить олимпиаду?").then(function () {})["catch"](function () {
          _this8.data.event.status = oldEventStatus;
        });
      }
    }
  }, {
    key: "dateLessThatToday",
    value: function dateLessThatToday(date, days) {
      var checkDate = this.dateUtils.asUTCDate(date);
      var todayDate = this.dateUtils.asUTCDate(new Date());
      checkDate.setDate(checkDate.getDate() + days);
      return checkDate > todayDate;
    }
    //базовый метод поиска, сохраняющий результат поиска в scope
  }, {
    key: "searchItems",
    value: function searchItems(itemType, name) {
      var _this9 = this;
      if (!name) return;
      this.data.search[itemType] = [{
        name: this.language.Generic.Common.kSearch
      }];
      return this.awardEventsRepository.searchOrgs(name).then(function (orgs) {
        if (!orgs.length) {
          return _this9.data.search[itemType] = [new _model.EventOrgModel({
            other: name
          }), new _model.EventOrgModel({
            other: _this9.language.Generic.Common.kNoMatchesFound
          })];
        } else {
          return _this9.data.search[itemType] = orgs.map(function (dto) {
            return new _model.EventOrgModel(dto);
          });
        }
      });
    }
  }, {
    key: "searchOrg",
    value: function searchOrg(searchStr) {
      if (!searchStr || searchStr.length < 3) return;
      this.searchItems("orgs", searchStr);
    }
  }, {
    key: "searchFounder",
    value: function searchFounder(searchStr) {
      if (!searchStr || searchStr.length < 3) return;
      this.searchItems("founders", searchStr);
    }
    //отмена
  }, {
    key: "close",
    value: function close() {
      if (this.created) {
        this.$uibModalInstance.close(this.data.event);
      }
      this.cancel();
    }
  }, {
    key: "defaultCatch",
    value: function defaultCatch(response) {
      this.$alerts.error(response.data.message || response.data.details);
    }
  }, {
    key: "postFiles",
    value: function postFiles(eventId, files) {
      var proxyFiles = files.filter(function (o) {
        return o.isProxy;
      });
      if (proxyFiles.length == 0) return;
      var url = _emevents.AwardEventsRepository.getSaveFilesUrl(eventId);
      var proxyFilesData = proxyFiles.map(function (file) {
        return file.data;
      });
      var uploadParams = {
        url: url,
        method: 'POST',
        data: proxyFilesData
      };
      return this.Upload.upload(uploadParams)["catch"](this.defaultCatch);
    }
  }]);
  return EditAwardEventController;
}(_netcityModalCtrl.NetCityModalController);
var EditAwardEventComponent = {
  controller: EditAwardEventController,
  controllerAs: "$ctrl",
  templateUrl: '/static/dist/app/em/events/common/editEvent/editevent.component.html'
};
exports.EditAwardEventComponent = EditAwardEventComponent;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HierarchyLevel = exports.FounderType = exports.FounderKind = exports.AuthorityType = void 0;
var HierarchyLevel;
exports.HierarchyLevel = HierarchyLevel;
(function (HierarchyLevel) {
  HierarchyLevel["Mixed"] = "Mixed";
  HierarchyLevel["Province"] = "Province";
  HierarchyLevel["City"] = "City";
  HierarchyLevel["DistrictCity"] = "DistrictCity";
})(HierarchyLevel || (exports.HierarchyLevel = HierarchyLevel = {}));
var FounderType;
exports.FounderType = FounderType;
(function (FounderType) {
  FounderType["EducManagement"] = "EducManagement";
  FounderType["OtherOrganizations"] = "OtherOrganizations";
})(FounderType || (exports.FounderType = FounderType = {}));
var FounderKind;
exports.FounderKind = FounderKind;
(function (FounderKind) {
  FounderKind["RussianFederation"] = "RussianFederation";
  FounderKind["RussianFederationSubject"] = "RussianFederationSubject";
  FounderKind["Municipality"] = "Municipality";
  FounderKind["RussianCommercialOrgs"] = "RussianCommercialOrgs";
  FounderKind["ForeignCommercialOrgs"] = "ForeignCommercialOrgs";
  FounderKind["RussianNonCommercialOrgs"] = "RussianNonCommercialOrgs";
  FounderKind["ForeignNonCommercialOrgs"] = "ForeignNonCommercialOrgs";
  FounderKind["RussianReligiousOrgs"] = "RussianReligiousOrgs";
  FounderKind["ForeignReligiousOrgs"] = "ForeignReligiousOrgs";
  FounderKind["RussianCitizens"] = "RussianCitizens";
  FounderKind["ForeignCitizens"] = "ForeignCitizens";
})(FounderKind || (exports.FounderKind = FounderKind = {}));
var AuthorityType;
exports.AuthorityType = AuthorityType;
(function (AuthorityType) {
  AuthorityType["Educations"] = "Educations";
  AuthorityType["Socials"] = "Socials";
  AuthorityType["Cultures"] = "Cultures";
  AuthorityType["Sports"] = "Sports";
  AuthorityType["Politics"] = "Politics";
  AuthorityType["Others"] = "Others";
})(AuthorityType || (exports.AuthorityType = AuthorityType = {}));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsRepository = void 0;
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
var RoomsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(RoomsRepository, _BaseRepository);
  var _super = _createSuper(RoomsRepository);
  function RoomsRepository() {
    _classCallCheck(this, RoomsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(RoomsRepository, [{
    key: "getRooms",
    value: function getRooms(detailed, studyOnly, expand) {
      var params = {
        detailed: null,
        studyOnly: null
      };
      if (detailed) {
        params.detailed = true;
      }
      if (studyOnly) {
        params.studyOnly = true;
      }
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/rooms", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "create",
    value: function create(room) {
      return this.$http.put("/webapi/rooms", room).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "findOrCreate",
    value: function findOrCreate(request) {
      return this.$http.put("/webapi/rooms/find-or-create-room", request).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "merge",
    value: function merge(mergeRoomId, roomId) {
      var params = {
        mergeRoomId: mergeRoomId,
        roomId: roomId
      };
      return this.$http.post("/webapi/rooms/integrated", null, {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "getUsed",
    value: function getUsed(ids) {
      var params = {
        id: ids
      };
      return this.$http.get("/webapi/rooms/used", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(ids) {
      var params = {
        id: ids
      };
      return this.$http["delete"]("/webapi/rooms", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "save",
    value: function save(rooms) {
      return this.$http.post("/webapi/rooms", rooms).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "getYearFormationMode",
    value: function getYearFormationMode() {
      return this.$http.get("/webapi/years/yearFormationMode").then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }]);
  return RoomsRepository;
}(_baseRepository.BaseRepository);
exports.RoomsRepository = RoomsRepository;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassRateListComponent = void 0;
var _registry = __webpack_require__(33);
var _passrateedit = __webpack_require__(75);
var _founders = __webpack_require__(72);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PassRateListController = /*#__PURE__*/function () {
  PassRateListController.$inject = ["pageContext", "appContext", "$q", "$appLoader", "$location", "language", "$uibModal", "nationOlympRepository", "$dialogs"];
  /*@ngInject*/
  function PassRateListController(pageContext, appContext, $q, $appLoader, $location, language, $uibModal, nationOlympRepository, $dialogs) {
    var _this = this;
    _classCallCheck(this, PassRateListController);
    this.appContext = appContext;
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.language = language;
    this.$uibModal = $uibModal;
    this.nationOlympRepository = nationOlympRepository;
    this.$dialogs = $dialogs;
    this.state = {
      viewReady: false,
      dataReady: false,
      emptyData: false,
      hideCopyButton: true,
      emptyFilter: false
    };
    this.data = {};
    pageContext.title = language.Generic.Common.kPassRate;
    pageContext.back = null;
    pageContext.parent = null;
    var addButton = {
      title: language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        _this.edit(-1);
      },
      isHide: function isHide() {
        return _this.state.emptyFilter;
      }
    };
    var copyButton = {
      title: "Копировать из прошлого года",
      icon: "glyphicon glyphicon-floppy-copy",
      action: function action() {
        return _this.copyPassRates();
      },
      isEnabled: function isEnabled() {
        return _this.appContext.isTopEm && _this.appContext.authorityType == _founders.AuthorityType.Educations;
      },
      isHide: function isHide() {
        return _this.state.hideCopyButton;
      }
    };
    var buttons = [];
    if (this.appContext.isTopEm && this.appContext.authorityType == _founders.AuthorityType.Educations) {
      buttons.push(copyButton);
    }
    buttons.push(addButton);
    this.registryInfo = {
      url: "/webapi/em/events/nationolymp/passrate/registry",
      filtersUrl: "/webapi/em/events/nationolymp/passrate/registry/filter",
      fieldDecorators: {
        "olympSubject": new _registry.LinkFieldDecorator(function (item) {
          return _this.edit(item.id);
        })
      },
      events: {
        filterPanel: {
          emptyChoice: function emptyChoice() {
            _this.state.emptyFilter = true;
          },
          ready: function ready(vals) {
            _this.state.emptyFilter = false;
            _this.checkHideCopyButton(+vals["YEAR"]);
          }
        },
        ready: function ready() {
          _this.state.emptyFilter = false;
          _this.controller.events.filterpanel.ready.on(function () {
            var fpValues = _this.controller.filterInfo.filterPanel.getValue().getValues();
            var yearId = +fpValues.YEAR;
            _this.checkHideCopyButton(yearId);
          });
        }
      },
      buttons: buttons
    };
    //Загрузка страницы
    this.$q.all([]).then(function () {
      _this.state.viewReady = true;
      _this.load();
    });
  }
  //загрузка событий
  _createClass(PassRateListController, [{
    key: "load",
    value: function load() {
      this.controller.load();
      this.$appLoader.hide();
      this.state.dataReady = true;
    }
  }, {
    key: "checkHideCopyButton",
    value: function checkHideCopyButton(year) {
      var _this2 = this;
      this.nationOlympRepository.copyOlympPassRatesFromPreviousYearEnabled(year).then(function (result) {
        _this2.state.hideCopyButton = !result;
      });
    }
  }, {
    key: "edit",
    value: function edit(id) {
      var _this3 = this;
      var fpValues = this.controller.filterInfo.filterPanel.getValue().getValues();
      var modalInstance = this.$uibModal.open({
        controller: _passrateedit.PassRateEditComponent.controller,
        controllerAs: _passrateedit.PassRateEditComponent.controllerAs,
        templateUrl: _passrateedit.PassRateEditComponent.templateUrl,
        size: "lg",
        resolve: {
          passRateId: function passRateId() {
            return id;
          },
          level: function level() {
            return fpValues.EVENTLEVEL;
          },
          subjectId: function subjectId() {
            return null;
          },
          emId: function emId() {
            return fpValues.EMID ? +fpValues.EMID : null;
          },
          municipalityId: function municipalityId() {
            return fpValues.municipality ? +fpValues.municipality : null;
          },
          yearId: function yearId() {
            return +fpValues.YEAR;
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.load();
      });
    }
  }, {
    key: "copyPassRates",
    value: function copyPassRates() {
      var _this4 = this;
      var fpValues = this.controller.filterInfo.filterPanel.getValue().getValues();
      var yearId = +fpValues.YEAR;
      this.nationOlympRepository.existsPassRates(yearId).then(function (result) {
        if (result) {
          _this4.$dialogs.message("В данном учебном году уже есть данные о проходных баллах. Копирование невозможно.");
        } else {
          _this4.$dialogs.confirm("Скопировать данные о проходных баллах из прошлого года?").then(function () {
            _this4.nationOlympRepository.copyPassRatesFromPreviousYear(yearId).then(function () {
              _this4.$dialogs.message("Данные по проходным баллам успешно скопированы");
            });
          });
        }
      });
    }
  }]);
  return PassRateListController;
}();
var PassRateListComponent = {
  controller: PassRateListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/nationolymp/passrate/list/passratelist.component.html"
};
exports.PassRateListComponent = PassRateListComponent;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassRateEditComponent = void 0;
var _netcityModalCtrl = __webpack_require__(36);
var _repositories = __webpack_require__(40);
var _model = __webpack_require__(38);
var _nsModal = __webpack_require__(50);
var _founders = __webpack_require__(72);
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
var PassRateEditController = /*#__PURE__*/function (_NetCityModalControll) {
  PassRateEditController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "emEventsRepository", "awardEventsRepository", "addressReferencesRepository", "nationOlympRepository", "language", "appContext", "$appLoader", "$q", "passRateId", "yearId", "level", "subjectId", "municipalityId", "emId"];
  _inherits(PassRateEditController, _NetCityModalControll);
  var _super = _createSuper(PassRateEditController);
  /*@ngInject*/
  function PassRateEditController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, emEventsRepository, awardEventsRepository, addressReferencesRepository, nationOlympRepository, language, appContext, $appLoader, $q, passRateId, yearId, level, subjectId, municipalityId, emId) {
    var _this;
    _classCallCheck(this, PassRateEditController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.nationOlympRepository = nationOlympRepository;
    _this.language = language;
    _this.appContext = appContext;
    _this.$appLoader = $appLoader;
    _this.$q = $q;
    _this.passRateId = passRateId;
    _this.yearId = yearId;
    _this.level = level;
    _this.subjectId = subjectId;
    _this.municipalityId = municipalityId;
    _this.emId = emId;
    _this.ready = false;
    _this.state = {
      createMode: false,
      editMode: false,
      readonly: false
    };
    _this.data = {
      years: [],
      yearId: null,
      levels: [],
      level: null,
      subjects: [],
      subjectId: null,
      rate: null,
      municipalities: [],
      municipalityId: null,
      ems: [],
      emId: null,
      passRateInfo: {},
      grades: [],
      gradesAll: [-1, -1, -1, -1, -1, -1, -1, -1]
    };
    _this.header = "Информация о проходном балле";
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      },
      isDisplayed: function isDisplayed() {
        return _this.state.editMode && !_this.isReadonly();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.cancel();
      },
      "class": _nsModal.ButtonClass["default"],
      isDisplayed: function isDisplayed() {
        return _this.state.createMode;
      }
    }, {
      title: language.Generic.Buttons.kClose,
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.cancel();
      },
      "class": _nsModal.ButtonClass["default"],
      isDisplayed: function isDisplayed() {
        return _this.state.editMode && !_this.state.createMode;
      }
    }];
    _this.ready = false;
    if (_this.passRateId > 0) {
      _this.state.createMode = false;
      _this.state.editMode = true;
    } else {
      _this.state.createMode = true;
      _this.state.editMode = true;
    }
    var getYears = emEventsRepository.getEmYears().then(function (years) {
      _this.data.years = years;
      if (!_this.data.yearId && _this.data.years && _this.data.years.length) {
        _this.data.yearId = _this.data.years[0].id;
      }
    });
    var getEventLevels = emEventsRepository.getEventsLevels().then(function (levels) {
      _this.data.levels = levels.filter(function (lvl) {
        return lvl.key == _model.EventLevel.Regional && (!_this.state.createMode || _this.appContext.isTopEm && _this.appContext.authorityType == _founders.AuthorityType.Educations) || lvl.key == _model.EventLevel.District;
      });
      if (!_this.data.level && _this.data.levels && _this.data.levels.length) {
        _this.data.level = _this.data.levels[0].key;
      }
    });
    var getOlympSubjects = awardEventsRepository.getOlympSubjects(_this.appContext.at).then(function (subjects) {
      if (subjects && subjects.length) {
        _this.data.subjects = subjects.sort(function (a, b) {
          var aStr = (a.id <= 1000 ? "0".concat(a.name) : "1".concat(a.name)).toLowerCase();
          var bStr = (b.id <= 1000 ? "0".concat(b.name) : "1".concat(b.name)).toLowerCase();
          return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
        });
      } else {
        _this.data.subjects = [];
      }
    });
    var getMunicipalities = addressReferencesRepository.getMunicipalityDistricts({
      emId: appContext.emId,
      idType: _repositories.MunicipalityIdType.PositiveBound
    }).then(function (municipalities) {
      _this.data.municipalities = municipalities;
    });
    var getEms = awardEventsRepository.getNationOlympDistrictOrganizers(appContext.emId).then(function (ems) {
      _this.data.ems = ems;
    });
    _this.$q.all([getYears, getEventLevels, getOlympSubjects, getMunicipalities, getEms]).then(function () {
      _this.load().then(function () {
        _this.ready = true;
        _this.$scope.$applyAsync();
        _this.$appLoader.hide();
      });
    });
    return _this;
  }
  _createClass(PassRateEditController, [{
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.passRateForm.$invalid || !this.anyGrade()) {
        this.passRateForm.$displayErrors = true;
        return;
      }
      this.data.grades = this.data.gradesAll.filter(function (x) {
        return x >= 0;
      });
      var olympPassRateDto = {
        id: this.passRateId,
        globalYearId: this.data.yearId,
        eventLevel: this.data.level,
        districtEmId: this.data.emId,
        municipalityId: this.data.municipalityId,
        olympSubjectId: this.data.subjectId,
        rate: this.data.rate,
        grades: this.data.grades
      };
      if (olympPassRateDto.eventLevel == _model.EventLevel.Municipal || olympPassRateDto.eventLevel == _model.EventLevel.School) {
        olympPassRateDto.districtEmId = null;
      } else {
        olympPassRateDto.municipalityId = null;
      }
      this.nationOlympRepository.saveOlympPassRate(olympPassRateDto).then(function (event) {
        _this2.$appLoader.hide();
        _this2.$alerts.success("Информация о проходном балле успешно сохранена");
        _this2.$uibModalInstance.close(event);
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      if (this.passRateId > 0) {
        return this.nationOlympRepository.getOlympPassRateById(this.passRateId).then(function (result) {
          _this3.data.passRateInfo = result;
          _this3.data.level = result.eventLevel;
          _this3.data.subjectId = result.olympSubjectId;
          _this3.data.municipalityId = result.municipalityId;
          _this3.data.yearId = result.globalYearId;
          _this3.data.emId = result.districtEmId;
          _this3.data.rate = result.rate;
          _this3.data.gradesAll.forEach(function (x) {
            x = -1;
          });
          if (result.grades) {
            result.grades.forEach(function (x) {
              if (x >= 4) {
                _this3.data.gradesAll[x - 4] = x;
              }
            });
          }
        });
      } else {
        this.data.passRateInfo = {};
        this.data.level = this.level;
        this.data.subjectId = this.subjectId;
        this.data.municipalityId = this.municipalityId;
        this.data.yearId = this.yearId;
        this.data.emId = this.emId;
        this.data.rate = null;
        return new Promise(function (resolve) {
          resolve(true);
        });
      }
    }
  }, {
    key: "digitsError",
    value: function digitsError() {
      return "Пожалуйста, вводите только цифры.";
    }
  }, {
    key: "maxError",
    value: function maxError() {
      return "Пожалуйста, введите число, меньшее или равное 9999.";
    }
  }, {
    key: "minError",
    value: function minError() {
      return "Пожалуйста, введите число, большее или равное 1.";
    }
  }, {
    key: "showMunicipality",
    value: function showMunicipality() {
      return this.data.level == _model.EventLevel.Municipal || this.data.level == _model.EventLevel.School;
    }
  }, {
    key: "showEducManagements",
    value: function showEducManagements() {
      return this.data.level == _model.EventLevel.District;
    }
  }, {
    key: "getGradeByIndex",
    value: function getGradeByIndex(i) {
      return (i + 4).toString();
    }
  }, {
    key: "isGradeChecked",
    value: function isGradeChecked(grade) {
      return grade >= 0;
    }
  }, {
    key: "checkGrade",
    value: function checkGrade(index) {
      if (this.data.gradesAll[index] > 0) {
        this.data.gradesAll[index] = -1;
      } else {
        this.data.gradesAll[index] = index + 4;
      }
    }
  }, {
    key: "anyGrade",
    value: function anyGrade() {
      return $("input:checked[name='grades']").length > 0;
    }
  }, {
    key: "isReadonly",
    value: function isReadonly() {
      return this.state.readonly || !(this.appContext.isTopEm && this.appContext.authorityType == _founders.AuthorityType.Educations) && this.data.level == _model.EventLevel.Regional;
    }
  }]);
  return PassRateEditController;
}(_netcityModalCtrl.NetCityModalController);
var PassRateEditComponent = {
  controller: PassRateEditController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/nationolymp/passrate/edit/passrateedit.component.html"
};
exports.PassRateEditComponent = PassRateEditComponent;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppealListComponent = void 0;
var _appealedit = __webpack_require__(77);
var _registryAsCtrl = __webpack_require__(27);
var _model = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppealListController = /*#__PURE__*/function () {
  AppealListController.$inject = ["pageContext", "appContext", "$q", "$appLoader", "$location", "language", "$uibModal", "nationOlympRepository", "$dialogs"];
  /*@ngInject*/
  function AppealListController(pageContext, appContext, $q, $appLoader, $location, language, $uibModal, nationOlympRepository, $dialogs) {
    var _this = this;
    _classCallCheck(this, AppealListController);
    this.appContext = appContext;
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.language = language;
    this.$uibModal = $uibModal;
    this.nationOlympRepository = nationOlympRepository;
    this.$dialogs = $dialogs;
    this.state = {
      viewReady: false,
      dataReady: false,
      emptyData: false,
      emptyFilter: false
    };
    this.data = {};
    pageContext.title = language.Generic.Common.kAppeal;
    pageContext.back = null;
    pageContext.parent = null;
    var buttons = [{
      title: "Загрузить работу и протокол",
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      action: function action() {
        var _a, _b;
        if ((_b = (_a = _this.controller.selection) === null || _a === void 0 ? void 0 : _a.selected[0]) === null || _b === void 0 ? void 0 : _b.id) {
          _this.edit(_this.controller.selection.selected[0].id);
        }
      },
      isHide: function isHide() {
        var _a, _b;
        if (!((_b = (_a = _this.controller.selection) === null || _a === void 0 ? void 0 : _a.selected[0]) === null || _b === void 0 ? void 0 : _b.status)) {
          return true;
        }
        return _this.controller.selection.selected[0].status != _model.OlympAppealStatus.NewOrder;
      }
    }, {
      title: "Рассмотреть апелляцию",
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      action: function action() {
        var _a, _b;
        if ((_b = (_a = _this.controller.selection) === null || _a === void 0 ? void 0 : _a.selected[0]) === null || _b === void 0 ? void 0 : _b.id) {
          _this.edit(_this.controller.selection.selected[0].id);
        }
      },
      isHide: function isHide() {
        var _a, _b;
        if (!((_b = (_a = _this.controller.selection) === null || _a === void 0 ? void 0 : _a.selected[0]) === null || _b === void 0 ? void 0 : _b.status)) {
          return true;
        }
        return _this.controller.selection.selected[0].status != _model.OlympAppealStatus.Appeal && _this.controller.selection.selected[0].status != _model.OlympAppealStatus.AppealReview;
      }
    }];
    this.registryInfo = {
      url: "/webapi/em/events/nationolymp/appeal/registry",
      filtersUrl: "/webapi/em/events/nationolymp/appeal/registry/filter",
      fieldDecorators: {},
      events: {
        filterPanel: {
          emptyChoice: function emptyChoice() {
            _this.state.emptyFilter = true;
          },
          ready: function ready(vals) {
            _this.state.emptyFilter = false;
          }
        },
        ready: function ready() {
          _this.state.emptyFilter = false;
        }
      },
      buttons: buttons
    };
    //Загрузка страницы
    this.$q.all([]).then(function () {
      _this.state.viewReady = true;
      _this.load();
    });
  }
  //загрузка событий
  _createClass(AppealListController, [{
    key: "load",
    value: function load() {
      this.controller.load();
      this.$appLoader.hide();
      this.state.dataReady = true;
    }
  }, {
    key: "edit",
    value: function edit(id) {
      var _this2 = this;
      var fpValues = this.controller.filterInfo.filterPanel.getValue().getValues();
      var modalInstance = this.$uibModal.open({
        controller: _appealedit.AppealEditComponent.controller,
        controllerAs: _appealedit.AppealEditComponent.controllerAs,
        templateUrl: _appealedit.AppealEditComponent.templateUrl,
        backdrop: false,
        size: "lg",
        resolve: {
          appealId: function appealId() {
            return id;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.load();
      });
    }
  }]);
  return AppealListController;
}();
var AppealListComponent = {
  controller: AppealListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/nationolymp/appeal/list/appeallist.component.html"
};
exports.AppealListComponent = AppealListComponent;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppealEditComponent = void 0;
var _netcityModalCtrl = __webpack_require__(36);
var _nsModal = __webpack_require__(50);
var _model = __webpack_require__(38);
var _founders = __webpack_require__(72);
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
var AppealEditController = /*#__PURE__*/function (_NetCityModalControll) {
  AppealEditController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "awardEventsRepository", "nationOlympRepository", "language", "appContext", "$appLoader", "$q", "appealId"];
  _inherits(AppealEditController, _NetCityModalControll);
  var _super = _createSuper(AppealEditController);
  /*@ngInject*/
  function AppealEditController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, awardEventsRepository, nationOlympRepository, language, appContext, $appLoader, $q, appealId) {
    var _this;
    _classCallCheck(this, AppealEditController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.nationOlympRepository = nationOlympRepository;
    _this.language = language;
    _this.appContext = appContext;
    _this.$appLoader = $appLoader;
    _this.$q = $q;
    _this.appealId = appealId;
    _this.ready = false;
    _this.state = {
      createMode: false,
      editMode: false,
      readonly: false
    };
    _this.data = {
      subjects: [],
      subjectId: null,
      statuses: [],
      status: null,
      initialScore: null,
      finalScore: null,
      appealRequest: null,
      appealResponse: null,
      workFile: null,
      juriFile: null,
      eventLevel: null,
      taskNumbers: null
    };
    _this.header = "Просмотр работы";
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      },
      isDisplayed: function isDisplayed() {
        return _this.state.editMode && !_this.isReadonly();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      },
      "class": _nsModal.ButtonClass["default"],
      isDisplayed: function isDisplayed() {
        return _this.state.createMode;
      }
    }, {
      title: language.Generic.Buttons.kClose,
      icon: "bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      },
      "class": _nsModal.ButtonClass["default"],
      isDisplayed: function isDisplayed() {
        return _this.state.editMode && !_this.state.createMode;
      }
    }];
    _this.ready = false;
    if (_this.appealId && +_this.appealId > 0) {
      _this.state.createMode = false;
      _this.state.editMode = true;
    } else {
      _this.state.createMode = true;
      _this.state.editMode = true;
    }
    var getAppealStatuses = awardEventsRepository.getAppealStatuses().then(function (statuses) {
      _this.data.statuses = statuses;
    });
    _this.$q.all([getAppealStatuses]).then(function () {
      _this.load().then(function () {
        _this.ready = true;
        _this.$scope.$applyAsync();
        _this.$appLoader.hide();
      });
    });
    return _this;
  }
  _createClass(AppealEditController, [{
    key: "close",
    value: function close() {
      var _this2 = this;
      if (this.isNewOrder() && (this.isJuriFileLoaded || this.isWorkFileLoaded)) {
        this.$dialogs.confirm("\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?").then(function () {
          _this2.cancel();
        });
      } else {
        this.cancel();
      }
    }
  }, {
    key: "isWorkFileLoaded",
    get: function get() {
      return !angular.equals(this.data.workFile, {}) && this.data.workFile != null;
    }
  }, {
    key: "isJuriFileLoaded",
    get: function get() {
      return !angular.equals(this.data.juriFile, {}) && this.data.juriFile != null;
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (this.appealForm.$invalid || !this.isWorkFileLoaded || !this.isJuriFileLoaded) {
        this.appealForm.$displayErrors = true;
        return;
      }
      var olympAppealDto = {
        id: this.appealId,
        workFile: this.data.workFile,
        juriFile: this.data.juriFile,
        finalScore: this.data.finalScore,
        appealResponse: this.data.appealResponse
      };
      var confirmMessage = "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441 ".concat(this.data.status == _model.OlympAppealStatus.NewOrder ? "\"Работа просмотрена\"" : olympAppealDto.finalScore == null ? "\"Рассмотрение апелляции\"" : "\"Завершена\"", "?");
      if (this.data.status == _model.OlympAppealStatus.Appeal && olympAppealDto.finalScore != null) {
        confirmMessage = "Вы ещё не отправили информацию учащемуся о рассмотрении апелляции. Выставление итогового балла заблокирует возможность рассмотрения этой работы. Вы уверены, что хотите сразу выставить итоговый балл?";
      }
      this.$dialogs.confirm(confirmMessage).then(function () {
        _this3.nationOlympRepository.saveOlympAppeal(olympAppealDto).then(function (event) {
          _this3.$appLoader.hide();
          _this3.$alerts.success("Информация успешно сохранена");
          _this3.$uibModalInstance.close(event);
        });
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      if (this.appealId && +this.appealId > 0) {
        return this.nationOlympRepository.getOlympAppealById(this.appealId).then(function (result) {
          _this4.data.status = result.status;
          _this4.data.initialScore = result.initialScore;
          _this4.data.finalScore = result.finalScore;
          _this4.data.appealRequest = result.appealRequest;
          _this4.data.appealResponse = result.appealResponse;
          _this4.data.workFile = Object.assign({}, result.workFile);
          _this4.data.juriFile = Object.assign({}, result.juriFile);
          _this4.data.eventLevel = result.eventLevel;
          _this4.data.taskNumbers = result.taskNumbers;
          _this4.workFileSettings = {
            data: {
              files: result.workFile ? [_this4.data.workFile] : null,
              context: {
                olympAppealId: +_this4.appealId
              }
            },
            options: {
              multiple: false,
              showDescription: true,
              onSuccessAttach: function onSuccessAttach(file) {
                _this4.data.workFile = file;
              },
              onSuccessDetach: function onSuccessDetach() {
                _this4.data.workFile = null;
              },
              readonly: _this4.data.status != _model.OlympAppealStatus.NewOrder || _this4.isReadonly()
            }
          };
          _this4.juriFileSettings = {
            data: {
              files: result.juriFile ? [_this4.data.juriFile] : null,
              context: {
                olympAppealId: +_this4.appealId
              }
            },
            options: {
              multiple: false,
              showDescription: true,
              onSuccessAttach: function onSuccessAttach(file) {
                _this4.data.juriFile = file;
              },
              onSuccessDetach: function onSuccessDetach() {
                _this4.data.juriFile = null;
              },
              readonly: _this4.data.status != _model.OlympAppealStatus.NewOrder || _this4.isReadonly()
            }
          };
        });
      } else {
        return new Promise(function (resolve) {
          resolve(true);
        });
      }
    }
  }, {
    key: "isReadonly",
    value: function isReadonly() {
      return this.state.readonly || this.isTopEmAndDistrict();
    }
  }, {
    key: "isTopEmAndDistrict",
    value: function isTopEmAndDistrict() {
      return this.appContext.isTopEm && this.appContext.authorityType == _founders.AuthorityType.Educations && this.data.eventLevel == _model.EventLevel.District;
    }
  }, {
    key: "isAppeal",
    value: function isAppeal() {
      return this.data.status == _model.OlympAppealStatus.Appeal;
    }
  }, {
    key: "isAppealReview",
    value: function isAppealReview() {
      return this.data.status == _model.OlympAppealStatus.AppealReview;
    }
  }, {
    key: "isNewOrder",
    value: function isNewOrder() {
      return this.data.status == _model.OlympAppealStatus.NewOrder;
    }
  }, {
    key: "digitsError",
    value: function digitsError() {
      return "Пожалуйста, вводите только цифры.";
    }
  }, {
    key: "maxError",
    value: function maxError() {
      return "Пожалуйста, введите число, меньшее или равное 9999.";
    }
  }, {
    key: "minError",
    value: function minError() {
      return "Пожалуйста, введите число, большее или равное 1.";
    }
  }]);
  return AppealEditController;
}(_netcityModalCtrl.NetCityModalController);
var AppealEditComponent = {
  controller: AppealEditController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/em/events/nationolymp/appeal/edit/appealedit.component.html"
};
exports.AppealEditComponent = AppealEditComponent;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntInputDirective = void 0;
__webpack_require__(79);
var IntInputDirective = function IntInputDirective() {
  return {
    restrict: "A",
    scope: {
      intOptions: "=intInput"
    },
    link: function link(scope, element) {
      var baseNavKeys = [37, 39];
      var baseEditKeys = [8, 46];
      var getInputSelection = function getInputSelection(inputBox) {
        if ("selectionStart" in inputBox) {
          //gecko  
          return {
            start: inputBox.selectionStart,
            end: inputBox.selectionEnd
          };
        }
        //and now, the blinkered IE way  
        var bookmark = document.getSelection().getRangeAt(0);
        var selection = inputBox.createTextRange();
        selection.moveToBookmark(bookmark);
        var before = inputBox.createTextRange();
        before.collapse(true);
        before.setEndPoint("EndToStart", selection);
        var beforeLength = before.text.length;
        var selLength = selection.text.length;
        return {
          start: beforeLength,
          end: beforeLength + selLength
        };
      };
      var setInputSelection = function setInputSelection(inputBox, start, end) {
        if (start > end) {
          start = end;
        }
        if ("selectionStart" in inputBox) {
          //gecko  
          inputBox.setSelectionRange(start, end);
          return true;
        } else {
          var r = inputBox.createTextRange();
          r.collapse(true);
          r.moveStart('character', start);
          r.moveEnd('character', end - start);
          r.select();
          return true;
        }
      };
      var GetIntWhich = function GetIntWhich(value) {
        if (value >= 0 && value < 10) {
          return value + 48;
        }
        return 57;
      };
      var valueInMarkRange = function valueInMarkRange(testValue, inputOptions) {
        return (testValue >= inputOptions.minMark || inputOptions.minMark > 0) && testValue <= inputOptions.maxMark;
      };
      var mayContinueInput = function mayContinueInput(testValue, intInputOptions) {
        if (testValue.toString().length >= intInputOptions.maxLength) {
          return false;
        }
        return testValue <= parseInt(intInputOptions.maxMark.toString().substr(0, intInputOptions.maxLength - 1));
      };
      var setVal = function setVal(input, value) {
        input.value = value;
        $(input).trigger("change");
      };
      var keyPressHandler = function keyPressHandler(e) {
        //обработка стрелок не выполняется
        var oMark = e.target;
        var keyCode = e.keyCode || e.which;
        var unprintable = e.charCode === 0;
        //case с одной цифрой
        if (scope.intOptions.maxLength == 1) {
          if (keyCode >= GetIntWhich(scope.intOptions.minMark) && keyCode <= GetIntWhich(scope.intOptions.maxMark)) {
            setVal(oMark, String.fromCharCode(keyCode));
          } else {
            //необходимо только для FF. в остальных браузерах нажатие на данные кнопки обрабатывается только в keyup
            //отбираются только непечатаемые символы
            if (unprintable) {
              if ($.inArray(keyCode, baseNavKeys) > -1) {
                return true;
              } else if ($.inArray(keyCode, baseEditKeys) > -1) {
                return true;
              }
            }
          }
          return false;
        } else if (keyCode >= 48 && keyCode <= 57 && scope.intOptions.maxLength > 1) {
          //сложные случаи с несколькими цифрами
          //текущее значение без учета вводимого символа
          var currVal = oMark.value;
          var selInfo = getInputSelection(oMark);
          var rightCursor = selInfo.start != 0;
          //склеивание нового значения. Если было что-то выделено - замена выделенного
          //символ вставляется после курсора, т.е. можно вставить как в начало так и в конец.
          var testValue = currVal.substring(0, selInfo.start) + String.fromCharCode(keyCode) + currVal.substring(selInfo.end, currVal.length);
          var testValueInt = parseInt(testValue);
          if (testValueInt == 0) {
            if (scope.intOptions.minMark == 0) {
              //если 0 разрешен то вставляем.
              setVal(oMark, 0);
            }
            return false;
          } else if (!valueInMarkRange(testValueInt, scope.intOptions)) {
            //если тестируемая цифра не удовлетворяет границам - отменяем ввод
            return false;
          }
          if (oMark.value == "0" && rightCursor) {
            //если текущее число 0 и курсор справа то очищаем 0
            setVal(oMark, '');
          }
          setVal(oMark, testValue);
          if (!mayContinueInput(testValueInt, scope.intOptions)) {} else if (selInfo.start != selInfo.end) {
            var endIndex = testValue.toString().length;
            setInputSelection(oMark, endIndex, endIndex);
          }
          return false;
        } else if (keyCode == 8 || keyCode == 0) {
          //backspace и delete
          return true;
        } else {
          //остальные
          return false;
        }
      };
      var keyUpHandler = function keyUpHandler(e) {
        e = e || window.event;
        var keyCode = e.keyCode || e.which;
        var markInput = e.target;
        switch (keyCode) {
          case 89:
          case 121:
          case 1053:
          case 1085:
            break;
          case 13:
            break;
          case 37:
            break;
          case 39:
            break;
          default:
            return false;
        }
        ;
      };
      var keyDownHandler = function keyDownHandler(e) {
        e = e || window.event;
        var keyCode = e.keyCode || e.which;
        if (e.ctrlKey) {
          switch (keyCode) {
            case 86:
              return false;
          }
        }
      };
      var initInput = function initInput() {
        element.on("keyup", keyUpHandler);
        element.on("keypress", keyPressHandler);
        element.on("keydown", keyDownHandler);
        element.on("onpaste", function (e) {
          e.preventDefault();
        });
      };
      initInput();
    }
  };
};
exports.IntInputDirective = IntInputDirective;
IntInputDirective.selector = "intInput";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
if (document.documentElement.closest === undefined) {
  // Element.prototype.matches
  Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {
    var element = this;
    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
    var index = 0;
    while (elements[index] && elements[index] !== element) {
      ++index;
    }
    return !!elements[index];
  };

  /**
   * Альтернатива функции parents
   */
  // Element.prototype.closest
  Element.prototype.closest = function closest(selector) {
    var node = this;
    while (node) {
      if (node.matches(selector)) return node;else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
    }
    return null;
  };

  /**
   * Альтернатива функции remove. Так как её нет в IE11.
   */
  (function () {
    var arr = [window.Element, window.CharacterData, window.DocumentType];
    var args = [];
    arr.forEach(function (item) {
      if (item) {
        args.push(item.prototype);
      }
    });

    // from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
    (function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
          return;
        }
        Object.defineProperty(item, 'remove', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function remove() {
            this.parentNode.removeChild(this);
          }
        });
      });
    })(args);
  })();

  /**
   * Альтернатива функции URLSearchParams, т.к. её нет в IE11.
   */
  // from: https://stackoverflow.com/questions/45758837/script5009-urlsearchparams-is-undefined-in-ie-11
  (function (w) {
    w.URLSearchParams = w.URLSearchParams || function (searchString) {
      var self = this;
      self.searchString = searchString;
      self.get = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
        if (results == null) {
          return null;
        } else {
          return decodeURI(results[1]) || 0;
        }
      };
    };
  })(window);
}

/**
 * Альтернатива "has"
 */

(function (self, undefined) {
  var _DOMTokenList = function () {
    var n = !0,
      t = function t(_t, e, r, o) {
        Object.defineProperty ? Object.defineProperty(_t, e, {
          configurable: !1 === n || !!o,
          get: r
        }) : _t.__defineGetter__(e, r);
      };
    try {
      t({}, "support");
    } catch (e) {
      n = !1;
    }
    return function (n, e) {
      var r = this,
        o = [],
        i = {},
        a = 0,
        c = 0,
        f = function f(n) {
          t(r, n, function () {
            return u(), o[n];
          }, !1);
        },
        l = function l() {
          if (a >= c) for (; c < a; ++c) f(c);
        },
        u = function u() {
          var t,
            r,
            c = arguments,
            f = /\s+/;
          if (c.length) for (r = 0; r < c.length; ++r) if (f.test(c[r])) throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'), t.code = 5, t.name = "InvalidCharacterError", t;
          for (o = "object" == _typeof(n[e]) ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f), "" === o[0] && (o = []), i = {}, r = 0; r < o.length; ++r) i[o[r]] = !0;
          a = o.length, l();
        };
      return u(), t(r, "length", function () {
        return u(), a;
      }), r.toLocaleString = r.toString = function () {
        return u(), o.join(" ");
      }, r.item = function (n) {
        return u(), o[n];
      }, r.contains = function (n) {
        return u(), !!i[n];
      }, r.add = function () {
        u.apply(r, t = arguments);
        for (var t, c, f = 0, p = t.length; f < p; ++f) c = t[f], i[c] || (o.push(c), i[c] = !0);
        a !== o.length && (a = o.length >>> 0, "object" == _typeof(n[e]) ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l());
      }, r.remove = function () {
        u.apply(r, t = arguments);
        for (var t, c = {}, f = 0, p = []; f < t.length; ++f) c[t[f]] = !0, delete i[t[f]];
        for (f = 0; f < o.length; ++f) c[o[f]] || p.push(o[f]);
        o = p, a = p.length >>> 0, "object" == _typeof(n[e]) ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l();
      }, r.toggle = function (n, t) {
        return u.apply(r, [n]), undefined !== t ? t ? (r.add(n), !0) : (r.remove(n), !1) : i[n] ? (r.remove(n), !1) : (r.add(n), !0);
      }, r.forEach = Array.prototype.forEach, r;
    };
  }();
  function ArrayCreate(r) {
    if (1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1) throw new RangeError("Invalid array length");
    var n = [];
    return n.length = r, n;
  }
  function Call(t, l) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function.");
    return t.apply(l, n);
  }
  function CreateDataProperty(e, r, t) {
    var a = {
      value: t,
      writable: !0,
      enumerable: !0,
      configurable: !0
    };
    try {
      return Object.defineProperty(e, r, a), !0;
    } catch (n) {
      return !1;
    }
  }
  function CreateDataPropertyOrThrow(t, r, o) {
    var e = CreateDataProperty(t, r, o);
    if (!e) throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(o) + "` to property `" + Object.prototype.toString.call(r) + "` on object `" + Object.prototype.toString.call(t) + "`");
    return e;
  }
  function CreateMethodProperty(e, r, t) {
    var a = {
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    };
    Object.defineProperty(e, r, a);
  }
  function Get(n, t) {
    return n[t];
  }
  function HasOwnProperty(r, t) {
    return Object.prototype.hasOwnProperty.call(r, t);
  }
  function IsCallable(n) {
    return "function" == typeof n;
  }
  function RequireObjectCoercible(e) {
    if (null === e || e === undefined) throw TypeError(Object.prototype.toString.call(e) + " is not coercible to Object.");
    return e;
  }
  function SameValueNonNumber(e, n) {
    return e === n;
  }
  function ToBoolean(o) {
    return Boolean(o);
  }
  function ToObject(e) {
    if (null === e || e === undefined) throw TypeError();
    return Object(e);
  }
  function GetV(t, e) {
    return ToObject(t)[e];
  }
  function GetMethod(e, n) {
    var r = GetV(e, n);
    if (null === r || r === undefined) return undefined;
    if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
    return r;
  }
  function Type(e) {
    switch (_typeof(e)) {
      case "undefined":
        return "undefined";
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "symbol":
        return "symbol";
      default:
        return null === e ? "null" : "Symbol" in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? "symbol" : "object";
    }
  }
  function CreateIterResultObject(e, r) {
    if ("boolean" !== Type(r)) throw new Error();
    var t = {};
    return CreateDataProperty(t, "value", e), CreateDataProperty(t, "done", r), t;
  }
  function GetPrototypeFromConstructor(t, o) {
    var r = Get(t, "prototype");
    return "object" !== Type(r) && (r = o), r;
  }
  function OrdinaryCreateFromConstructor(r, e) {
    var t = arguments[2] || {},
      o = GetPrototypeFromConstructor(r, e),
      a = Object.create(o);
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(a, n, {
      configurable: !0,
      enumerable: !1,
      writable: !0,
      value: t[n]
    });
    return a;
  }
  function IsConstructor(t) {
    return "object" === Type(t) && "function" == typeof t && !!t.prototype;
  }
  function Construct(r) {
    var t = arguments.length > 2 ? arguments[2] : r,
      o = arguments.length > 1 ? arguments[1] : [];
    if (!IsConstructor(r)) throw new TypeError("F must be a constructor.");
    if (!IsConstructor(t)) throw new TypeError("newTarget must be a constructor.");
    if (t === r) return new (Function.prototype.bind.apply(r, [null].concat(o)))();
    var n = OrdinaryCreateFromConstructor(t, Object.prototype);
    return Call(r, n, o);
  }
  function IsRegExp(e) {
    if ("object" !== Type(e)) return !1;
    var n = "Symbol" in self && "match" in self.Symbol ? Get(e, self.Symbol.match) : undefined;
    if (n !== undefined) return ToBoolean(n);
    try {
      var t = e.lastIndex;
      return e.lastIndex = 0, RegExp.prototype.exec.call(e), !0;
    } catch (l) {} finally {
      e.lastIndex = t;
    }
    return !1;
  }
  function IteratorClose(r, t) {
    if ("object" !== Type(r["[[Iterator]]"])) throw new Error(Object.prototype.toString.call(r["[[Iterator]]"]) + "is not an Object.");
    var e = r["[[Iterator]]"],
      o = GetMethod(e, "return");
    if (o === undefined) return t;
    try {
      var n = Call(o, e);
    } catch (c) {
      var a = c;
    }
    if (t) return t;
    if (a) throw a;
    if ("object" !== Type(n)) throw new TypeError("Iterator's return method returned a non-object.");
    return t;
  }
  function IteratorComplete(t) {
    if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return ToBoolean(Get(t, "done"));
  }
  function IteratorNext(t) {
    if (arguments.length < 2) var e = Call(t["[[NextMethod]]"], t["[[Iterator]]"]);else e = Call(t["[[NextMethod]]"], t["[[Iterator]]"], [arguments[1]]);
    if ("object" !== Type(e)) throw new TypeError("bad iterator");
    return e;
  }
  function IteratorStep(t) {
    var r = IteratorNext(t);
    return !0 !== IteratorComplete(r) && r;
  }
  function IteratorValue(t) {
    if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return Get(t, "value");
  }
  function OrdinaryToPrimitive(r, t) {
    if ("string" === t) var e = ["toString", "valueOf"];else e = ["valueOf", "toString"];
    for (var i = 0; i < e.length; ++i) {
      var n = e[i],
        a = Get(r, n);
      if (IsCallable(a)) {
        var o = Call(a, r);
        if ("object" !== Type(o)) return o;
      }
    }
    throw new TypeError("Cannot convert to primitive.");
  }
  function SameValueZero(n, e) {
    return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || 1 / n === Infinity && 1 / e == -Infinity || 1 / n == -Infinity && 1 / e === Infinity || n === e : SameValueNonNumber(n, e));
  }
  function ToInteger(n) {
    if ("symbol" === Type(n)) throw new TypeError("Cannot convert a Symbol value to a number");
    var t = Number(n);
    return isNaN(t) ? 0 : 1 / t === Infinity || 1 / t == -Infinity || t === Infinity || t === -Infinity ? t : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
  }
  function ToLength(n) {
    var t = ToInteger(n);
    return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1);
  }
  function ToPrimitive(e) {
    var t = arguments.length > 1 ? arguments[1] : undefined;
    if ("object" === Type(e)) {
      if (arguments.length < 2) var i = "default";else t === String ? i = "string" : t === Number && (i = "number");
      var r = "function" == typeof self.Symbol && "symbol" == _typeof(self.Symbol.toPrimitive) ? GetMethod(e, self.Symbol.toPrimitive) : undefined;
      if (r !== undefined) {
        var n = Call(r, e, [i]);
        if ("object" !== Type(n)) return n;
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i);
    }
    return e;
  }
  function ToString(t) {
    switch (Type(t)) {
      case "symbol":
        throw new TypeError("Cannot convert a Symbol value to a string");
      case "object":
        return ToString(ToPrimitive(t, String));
      default:
        return String(t);
    }
  }
  function ToPropertyKey(r) {
    var i = ToPrimitive(r, String);
    return "symbol" === Type(i) ? i : ToString(i);
  }
  function TrimString(e, u) {
    var r = RequireObjectCoercible(e),
      t = ToString(r),
      n = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;
    if ("start" === u) var p = String.prototype.replace.call(t, new RegExp("^" + n, "g"), "");else p = "end" === u ? String.prototype.replace.call(t, new RegExp(n + "$", "g"), "") : String.prototype.replace.call(t, new RegExp("^" + n + "|" + n + "$", "g"), "");
    return p;
  }
  var _mutation = function () {
    function e(e) {
      return "function" == typeof Node ? e instanceof Node : e && "object" == _typeof(e) && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12;
    }
    return function n(t) {
      if (1 === t.length) return e(t[0]) ? t[0] : document.createTextNode(t[0] + "");
      for (var o = document.createDocumentFragment(), r = 0; r < t.length; r++) o.appendChild(e(t[r]) ? t[r] : document.createTextNode(t[r] + ""));
      return o;
    };
  }();
  if (!("of" in Array)) {
    CreateMethodProperty(Array, "of", function r() {
      var r = arguments.length,
        t = arguments,
        e = this;
      if (IsConstructor(e)) var a = Construct(e, [r]);else a = ArrayCreate(r);
      for (var o = 0; o < r;) {
        var n = t[o],
          h = ToString(o);
        CreateDataPropertyOrThrow(a, h, n), o += 1;
      }
      return a.length = r, a;
    });
  }
  if (!("fill" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "fill", function t(e) {
      for (var r = arguments[1], n = arguments[2], o = ToObject(this), a = ToLength(Get(o, "length")), h = ToInteger(r), i = h < 0 ? Math.max(a + h, 0) : Math.min(h, a), g = n === undefined ? a : ToInteger(n), M = g < 0 ? Math.max(a + g, 0) : Math.min(g, a); i < M;) {
        o[ToString(i)] = e, i += 1;
      }
      return o;
    });
  }
  if (!("includes" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "includes", function e(r) {
      "use strict";

      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (0 === o) return !1;
      var n = ToInteger(arguments[1]);
      if (n >= 0) var a = n;else (a = o + n) < 0 && (a = 0);
      for (; a < o;) {
        var i = Get(t, ToString(a));
        if (SameValueZero(r, i)) return !0;
        a += 1;
      }
      return !1;
    });
  }
  if (!("DocumentFragment" in self && function () {
    try {
      return new DocumentFragment(), !0;
    } catch (n) {
      return !1;
    }
  }())) {
    !function (t) {
      t.DocumentFragment = function n() {
        return document.createDocumentFragment();
      };
      var e = document.createDocumentFragment();
      t.DocumentFragment.prototype = Object.create(e.constructor.prototype);
    }(self);
  }
  if (!("DocumentFragment" in self && "append" in DocumentFragment.prototype)) {
    !function (t) {
      document.createDocumentFragment().constructor.prototype.append = function n() {
        this.appendChild(_mutation(arguments));
      }, t.DocumentFragment.prototype.append = function e() {
        this.appendChild(_mutation(arguments));
      };
    }(self);
  }
  if (!("DocumentFragment" in self && "prepend" in DocumentFragment.prototype)) {
    !function (t) {
      document.createDocumentFragment().constructor.prototype.prepend = function e() {
        this.insertBefore(_mutation(arguments), this.firstChild);
      }, t.DocumentFragment.prototype.prepend = function n() {
        this.insertBefore(_mutation(arguments), this.firstChild);
      };
    }(self);
  }
  if (!("DOMTokenList" in self && function (e) {
    return !("classList" in e) || !e.classList.toggle("x", !1) && !e.className;
  }(document.createElement("x")))) {
    !function (t) {
      "DOMTokenList" in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList), function () {
        var t = document.createElement("span");
        "classList" in t && (t.classList.toggle("x", !1), t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function s(t) {
          var s = arguments[1];
          if (s === undefined) {
            var e = !this.contains(t);
            return this[e ? "add" : "remove"](t), e;
          }
          return s = !!s, this[s ? "add" : "remove"](t), s;
        }));
      }(), function () {
        var t = document.createElement("span");
        if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b"))) {
          var s = t.classList.constructor.prototype.add;
          t.classList.constructor.prototype.add = function () {
            for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n]);
          };
        }
      }(), function () {
        var t = document.createElement("span");
        if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b"))) {
          var s = t.classList.constructor.prototype.remove;
          t.classList.constructor.prototype.remove = function () {
            for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n]);
          };
        }
      }();
    }(self);
  }
  if (!("Element" in self && "after" in Element.prototype)) {
    Document.prototype.after = Element.prototype.after = function t() {
      if (this.parentNode) {
        for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling);) o = t.indexOf(e);
        this.parentNode.insertBefore(_mutation(arguments), e);
      }
    }, "Text" in self && (Text.prototype.after = Element.prototype.after);
  }
  if (!("Element" in self && "append" in Element.prototype)) {
    Document.prototype.append = Element.prototype.append = function p() {
      this.appendChild(_mutation(arguments));
    };
  }
  if (!("Element" in self && "before" in Element.prototype)) {
    Document.prototype.before = Element.prototype.before = function e() {
      if (this.parentNode) {
        for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling);) o = e.indexOf(t);
        this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild);
      }
    }, "Text" in self && (Text.prototype.before = Element.prototype.before);
  }
  if (!("document" in self && "classList" in document.documentElement && "Element" in self && "classList" in Element.prototype && function () {
    var e = document.createElement("span");
    return e.classList.add("a", "b"), e.classList.contains("b");
  }())) {
    !function (e) {
      var t = !0,
        r = function r(e, _r, n, i) {
          Object.defineProperty ? Object.defineProperty(e, _r, {
            configurable: !1 === t || !!i,
            get: n
          }) : e.__defineGetter__(_r, n);
        };
      try {
        r({}, "support");
      } catch (i) {
        t = !1;
      }
      var n = function n(e, i, l) {
        r(e.prototype, i, function () {
          var e,
            c = this,
            s = "__defineGetter__DEFINE_PROPERTY" + i;
          if (c[s]) return e;
          if (c[s] = !0, !1 === t) {
            for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m) if (f[m]._R === c) {
              o = f[m];
              break;
            }
            o || (o = a.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, c, l);
          } else e = new _DOMTokenList(c, l);
          return r(c, i, function () {
            return e;
          }), delete c[s], e;
        }, !0);
      };
      n(e.Element, "classList", "className"), n(e.HTMLElement, "classList", "className"), n(e.HTMLLinkElement, "relList", "rel"), n(e.HTMLAnchorElement, "relList", "rel"), n(e.HTMLAreaElement, "relList", "rel");
    }(self);
  }
  if (!("document" in self && "matches" in document.documentElement)) {
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function e(t) {
      for (var o = this, r = (o.document || o.ownerDocument).querySelectorAll(t), c = 0; r[c] && r[c] !== o;) ++c;
      return !!r[c];
    };
  }
  if (!("document" in self && "closest" in document.documentElement)) {
    Element.prototype.closest = function e(n) {
      for (var t = this; t;) {
        if (t.matches(n)) return t;
        t = "SVGElement" in window && t instanceof SVGElement ? t.parentNode : t.parentElement;
      }
      return null;
    };
  }
  if (!("Element" in self && "prepend" in Element.prototype)) {
    Document.prototype.prepend = Element.prototype.prepend = function t() {
      this.insertBefore(_mutation(arguments), this.firstChild);
    };
  }
  if (!("Element" in self && "remove" in Element.prototype)) {
    Document.prototype.remove = Element.prototype.remove = function e() {
      this.parentNode && this.parentNode.removeChild(this);
    }, "Text" in self && (Text.prototype.remove = Element.prototype.remove);
  }
  if (!("Element" in self && "replaceWith" in Element.prototype)) {
    Document.prototype.replaceWith = Element.prototype.replaceWith = function e() {
      this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this);
    }, "Text" in self && (Text.prototype.replaceWith = Element.prototype.replaceWith);
  }
  if (!function (n) {
    if (!("Event" in n)) return !1;
    try {
      return new Event("click"), !0;
    } catch (t) {
      return !1;
    }
  }(self)) {
    !function () {
      function e(e, t) {
        if (!e) throw new Error("Not enough arguments");
        var n;
        if ("createEvent" in document) {
          n = document.createEvent("Event");
          var o = !(!t || t.bubbles === undefined) && t.bubbles,
            i = !(!t || t.cancelable === undefined) && t.cancelable;
          return n.initEvent(e, o, i), n;
        }
        return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n;
      }
      var t = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1
      };
      if ("undefined" != typeof document && "undefined" != typeof window) {
        var n = window.Event && window.Event.prototype || null;
        e.NONE = 0, e.CAPTURING_PHASE = 1, e.AT_TARGET = 2, e.BUBBLING_PHASE = 3, window.Event = Window.prototype.Event = e, n && Object.defineProperty(window.Event, "prototype", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: n
        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function o() {
          var e = this,
            n = arguments[0],
            o = arguments[1];
          if (e === window && n in t) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
          e._events || (e._events = {}), e._events[n] || (e._events[n] = function (t) {
            var n,
              o = e._events[t.type].list,
              i = o.slice(),
              r = -1,
              c = i.length;
            for (t.preventDefault = function a() {
              !1 !== t.cancelable && (t.returnValue = !1);
            }, t.stopPropagation = function l() {
              t.cancelBubble = !0;
            }, t.stopImmediatePropagation = function s() {
              t.cancelBubble = !0, t.cancelImmediate = !0;
            }, t.currentTarget = e, t.relatedTarget = t.fromElement || null, t.target = t.target || t.srcElement || e, t.timeStamp = new Date().getTime(), t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop); ++r < c && !t.cancelImmediate;) r in i && (n = i[r], o.includes(n) && "function" == typeof n && n.call(e, t));
          }, e._events[n].list = [], e.attachEvent && e.attachEvent("on" + n, e._events[n])), e._events[n].list.push(o);
        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function i() {
          var e,
            t = this,
            n = arguments[0],
            o = arguments[1];
          t._events && t._events[n] && t._events[n].list && -1 !== (e = t._events[n].list.indexOf(o)) && (t._events[n].list.splice(e, 1), t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]), delete t._events[n]));
        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function r(e) {
          if (!arguments.length) throw new Error("Not enough arguments");
          if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
          var t = this,
            n = e.type;
          try {
            if (!e.bubbles) {
              e.cancelBubble = !0;
              var o = function o(e) {
                e.cancelBubble = !0, (t || window).detachEvent("on" + n, o);
              };
              this.attachEvent("on" + n, o);
            }
            this.fireEvent("on" + n, e);
          } catch (i) {
            e.target = t;
            do {
              e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode;
            } while (t && !e.cancelBubble);
          }
          return !0;
        }, document.attachEvent("onreadystatechange", function () {
          "complete" === document.readyState && document.dispatchEvent(new e("DOMContentLoaded", {
            bubbles: !0
          }));
        }));
      }
    }();
  }
  if (!("CustomEvent" in self && ("function" == typeof self.CustomEvent || self.CustomEvent.toString().indexOf("CustomEventConstructor") > -1))) {
    self.CustomEvent = function e(t, n) {
      if (!t) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
      var l;
      if (n = n || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      }, "createEvent" in document) try {
        l = document.createEvent("CustomEvent"), l.initCustomEvent(t, n.bubbles, n.cancelable, n.detail);
      } catch (a) {
        l = document.createEvent("Event"), l.initEvent(t, n.bubbles, n.cancelable), l.detail = n.detail;
      } else l = new Event(t, n), l.detail = n && n.detail || null;
      return l;
    }, CustomEvent.prototype = Event.prototype;
  }
  if (!document.contains) {
    !function () {
      function e(e) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do {
          if (this === e) return !0;
        } while (e = e && e.parentNode);
        return !1;
      }
      if ("HTMLElement" in self && "contains" in HTMLElement.prototype) try {
        delete HTMLElement.prototype.contains;
      } catch (t) {}
      "Node" in self ? Node.prototype.contains = e : document.contains = Element.prototype.contains = e;
    }();
  }
  if (!("isNaN" in Number)) {
    !function () {
      var e = self;
      CreateMethodProperty(Number, "isNaN", function r(n) {
        return "number" === Type(n) && !!e.isNaN(n);
      });
    }();
  }
  if (!("getOwnPropertyDescriptor" in Object && "function" == typeof Object.getOwnPropertyDescriptor && function () {
    try {
      return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value;
    } catch (t) {
      return !1;
    }
  }())) {
    !function () {
      var e = Object.getOwnPropertyDescriptor,
        t = function t() {
          try {
            return 1 === Object.defineProperty(document.createElement("div"), "one", {
              get: function get() {
                return 1;
              }
            }).one;
          } catch (e) {
            return !1;
          }
        },
        r = {}.toString,
        n = "".split;
      CreateMethodProperty(Object, "getOwnPropertyDescriptor", function c(o, i) {
        var a = ToObject(o);
        a = ("string" === Type(a) || a instanceof String) && "[object String]" == r.call(o) ? n.call(o, "") : Object(o);
        var u = ToPropertyKey(i);
        if (t) try {
          return e(a, u);
        } catch (l) {}
        if (HasOwnProperty(a, u)) return {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a[u]
        };
      });
    }();
  }
  if (!("isExtensible" in Object)) {
    !function (e) {
      CreateMethodProperty(Object, "isExtensible", function t(n) {
        return "object" === Type(n) && (!e || e(n));
      });
    }(Object.isExtensible);
  }
  if (!("keys" in Object && function () {
    return 2 === Object.keys(arguments).length;
  }(1, 2) && function () {
    try {
      return Object.keys(""), !0;
    } catch (t) {
      return !1;
    }
  }())) {
    CreateMethodProperty(Object, "keys", function () {
      "use strict";

      function t() {
        var t;
        try {
          t = Object.create({});
        } catch (r) {
          return !0;
        }
        return o.call(t, "__proto__");
      }
      function r(t) {
        var r = n.call(t),
          e = "[object Arguments]" === r;
        return e || (e = "[object Array]" !== r && null !== t && "object" == _typeof(t) && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), e;
      }
      var e = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        o = Object.prototype.propertyIsEnumerable,
        c = !o.call({
          toString: null
        }, "toString"),
        l = o.call(function () {}, "prototype"),
        i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        u = function u(t) {
          var r = t.constructor;
          return r && r.prototype === t;
        },
        a = {
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0
        },
        f = function () {
          if ("undefined" == typeof window) return !1;
          for (var t in window) try {
            if (!a["$" + t] && e.call(window, t) && null !== window[t] && "object" == _typeof(window[t])) try {
              u(window[t]);
            } catch (r) {
              return !0;
            }
          } catch (r) {
            return !0;
          }
          return !1;
        }(),
        p = function p(t) {
          if ("undefined" == typeof window || !f) return u(t);
          try {
            return u(t);
          } catch (r) {
            return !1;
          }
        };
      return function s(o) {
        var u = "[object Function]" === n.call(o),
          a = r(o),
          f = "[object String]" === n.call(o),
          s = [];
        if (o === undefined || null === o) throw new TypeError("Cannot convert undefined or null to object");
        var y = l && u;
        if (f && o.length > 0 && !e.call(o, 0)) for (var h = 0; h < o.length; ++h) s.push(String(h));
        if (a && o.length > 0) for (var g = 0; g < o.length; ++g) s.push(String(g));else for (var w in o) t() && "__proto__" === w || y && "prototype" === w || !e.call(o, w) || s.push(String(w));
        if (c) for (var d = p(o), $ = 0; $ < i.length; ++$) d && "constructor" === i[$] || !e.call(o, i[$]) || s.push(i[$]);
        return s;
      };
    }());
  }
  if (!("assign" in Object)) {
    CreateMethodProperty(Object, "assign", function e(t, r) {
      var n = ToObject(t);
      if (1 === arguments.length) return n;
      var o,
        c,
        a,
        l,
        i = Array.prototype.slice.call(arguments, 1);
      for (o = 0; o < i.length; o++) {
        var p = i[o];
        for (p === undefined || null === p ? a = [] : (l = "[object String]" === Object.prototype.toString.call(p) ? String(p).split("") : ToObject(p), a = Object.keys(l)), c = 0; c < a.length; c++) {
          var b,
            y = a[c];
          try {
            var g = Object.getOwnPropertyDescriptor(l, y);
            b = g !== undefined && !0 === g.enumerable;
          } catch (u) {
            b = Object.prototype.propertyIsEnumerable.call(l, y);
          }
          if (b) {
            var j = Get(l, y);
            n[y] = j;
          }
        }
      }
      return n;
    });
  }
  if (!("getOwnPropertyNames" in Object && function () {
    try {
      return Object.getOwnPropertyNames(1), !0;
    } catch (t) {
      return !1;
    }
  }())) {
    !function () {
      var t = {}.toString,
        e = "".split,
        r = [].concat,
        o = Object.prototype.hasOwnProperty,
        c = Object.getOwnPropertyNames || Object.keys,
        n = "object" == _typeof(self) ? c(self) : [];
      CreateMethodProperty(Object, "getOwnPropertyNames", function l(a) {
        var p = ToObject(a);
        if ("[object Window]" === t.call(p)) try {
          return c(p);
        } catch (j) {
          return r.call([], n);
        }
        p = "[object String]" == t.call(p) ? e.call(p, "") : Object(p);
        for (var i = c(p), s = ["length", "prototype"], O = 0; O < s.length; O++) {
          var b = s[O];
          o.call(p, b) && !i.includes(b) && i.push(b);
        }
        if (i.includes("__proto__")) {
          var f = i.indexOf("__proto__");
          i.splice(f, 1);
        }
        return i;
      });
    }();
  }
  if (!("endsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "endsWith", function e(t) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
      var o = ToString(t),
        s = i.length,
        g = r === undefined ? s : ToInteger(r),
        h = Math.min(Math.max(g, 0), s),
        u = o.length,
        a = h - u;
      return !(a < 0) && i.substr(a, u) === o;
    });
  }
  if (!("includes" in String.prototype)) {
    CreateMethodProperty(String.prototype, "includes", function e(t) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      var o = ToString(t),
        g = ToInteger(r),
        a = i.length,
        p = Math.min(Math.max(g, 0), a);
      return -1 !== String.prototype.indexOf.call(i, o, p);
    });
  }
  if (!("startsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "startsWith", function t(e) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(e)) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
      var o = ToString(e),
        s = ToInteger(r),
        a = i.length,
        g = Math.min(Math.max(s, 0), a);
      return !(o.length + g > a) && 0 === i.substr(g).indexOf(e);
    });
  }
  if (!("trim" in String.prototype && function () {
    var r = "​᠎";
    return !"\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF".trim() && r.trim() === r;
  }())) {
    CreateMethodProperty(String.prototype, "trim", function t() {
      "use strict";

      var t = this;
      return TrimString(t, "start+end");
    });
  }
  if (!("Symbol" in self && 0 === self.Symbol.length)) {
    !function (e, r, n) {
      "use strict";

      function t(e) {
        if ("symbol" === Type(e)) return e;
        throw TypeError(e + " is not a symbol");
      }
      var u,
        o = function () {
          try {
            var r = {};
            return e.defineProperty(r, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!r.t;
          } catch (n) {
            return !1;
          }
        }(),
        i = 0,
        a = "" + Math.random(),
        c = "__symbol:",
        l = c.length,
        f = "__symbol@@" + a,
        s = {},
        v = "defineProperty",
        y = "defineProperties",
        b = "getOwnPropertyNames",
        p = "getOwnPropertyDescriptor",
        h = "propertyIsEnumerable",
        m = e.prototype,
        d = m.hasOwnProperty,
        g = m[h],
        w = m.toString,
        S = Array.prototype.concat,
        P = e.getOwnPropertyNames ? e.getOwnPropertyNames(self) : [],
        O = e[b],
        j = function $(e) {
          if ("[object Window]" === w.call(e)) try {
            return O(e);
          } catch (r) {
            return S.call([], P);
          }
          return O(e);
        },
        E = e[p],
        N = e.create,
        T = e.keys,
        _ = e.freeze || e,
        k = e[v],
        F = e[y],
        I = E(e, b),
        x = function x(e, r, n) {
          if (!d.call(e, f)) try {
            k(e, f, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: {}
            });
          } catch (t) {
            e[f] = {};
          }
          e[f]["@@" + r] = n;
        },
        z = function z(e, r) {
          var n = N(e);
          return j(r).forEach(function (e) {
            q.call(r, e) && L(n, e, r[e]);
          }), n;
        },
        A = function A(e) {
          var r = N(e);
          return r.enumerable = !1, r;
        },
        D = function ee() {},
        M = function M(e) {
          return e != f && !d.call(H, e);
        },
        W = function W(e) {
          return e != f && d.call(H, e);
        },
        q = function re(e) {
          var r = "" + e;
          return W(r) ? d.call(this, r) && this[f] && this[f]["@@" + r] : g.call(this, e);
        },
        B = function B(r) {
          var n = {
            enumerable: !1,
            configurable: !0,
            get: D,
            set: function set(e) {
              u(this, r, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e
              }), x(this, r, !0);
            }
          };
          try {
            k(m, r, n);
          } catch (o) {
            m[r] = n.value;
          }
          H[r] = k(e(r), "constructor", J);
          var t = E(G.prototype, "description");
          return t && k(H[r], "description", t), _(H[r]);
        },
        C = function C(e) {
          var r = t(e);
          if (Y) {
            var n = V(r);
            if ("" !== n) return n.slice(1, -1);
          }
          if (s[r] !== undefined) return s[r];
          var u = r.toString(),
            o = u.lastIndexOf("0.");
          return u = u.slice(10, o), "" === u ? undefined : u;
        },
        G = function ne() {
          var r = arguments[0];
          if (this instanceof ne) throw new TypeError("Symbol is not a constructor");
          var n = c.concat(r || "", a, ++i);
          r === undefined || null !== r && !isNaN(r) && "" !== String(r) || (s[n] = String(r));
          var t = B(n);
          return o || e.defineProperty(t, "description", {
            configurable: !0,
            enumerable: !1,
            value: C(t)
          }), t;
        },
        H = N(null),
        J = {
          value: G
        },
        K = function K(e) {
          return H[e];
        },
        L = function te(e, r, n) {
          var t = "" + r;
          return W(t) ? (u(e, t, n.enumerable ? A(n) : n), x(e, t, !!n.enumerable)) : k(e, r, n), e;
        },
        Q = function Q(e) {
          return function (r) {
            return d.call(e, f) && d.call(e[f], "@@" + r);
          };
        },
        R = function ue(e) {
          return j(e).filter(e === m ? Q(e) : W).map(K);
        };
      I.value = L, k(e, v, I), I.value = R, k(e, "getOwnPropertySymbols", I), I.value = function oe(e) {
        return j(e).filter(M);
      }, k(e, b, I), I.value = function ie(e, r) {
        var n = R(r);
        return n.length ? T(r).concat(n).forEach(function (n) {
          q.call(r, n) && L(e, n, r[n]);
        }) : F(e, r), e;
      }, k(e, y, I), I.value = q, k(m, h, I), I.value = G, k(n, "Symbol", I), I.value = function (e) {
        var r = c.concat(c, e, a);
        return r in m ? H[r] : B(r);
      }, k(G, "for", I), I.value = function (e) {
        if (M(e)) throw new TypeError(e + " is not a symbol");
        return d.call(H, e) ? e.slice(2 * l, -a.length) : void 0;
      }, k(G, "keyFor", I), I.value = function ae(e, r) {
        var n = E(e, r);
        return n && W(r) && (n.enumerable = q.call(e, r)), n;
      }, k(e, p, I), I.value = function ce(e, r) {
        return 1 === arguments.length || void 0 === r ? N(e) : z(e, r);
      }, k(e, "create", I);
      var U = null === function () {
        return this;
      }.call(null);
      if (I.value = U ? function () {
        var e = w.call(this);
        return "[object String]" === e && W(this) ? "[object Symbol]" : e;
      } : function () {
        if (this === window) return "[object Null]";
        var e = w.call(this);
        return "[object String]" === e && W(this) ? "[object Symbol]" : e;
      }, k(m, "toString", I), u = function u(e, r, n) {
        var t = E(m, r);
        delete m[r], k(e, r, n), e !== m && k(m, r, t);
      }, function () {
        try {
          var r = {};
          return e.defineProperty(r, "t", {
            configurable: !0,
            enumerable: !1,
            get: function get() {
              return !0;
            },
            set: undefined
          }), !!r.t;
        } catch (n) {
          return !1;
        }
      }()) {
        var V;
        try {
          V = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;");
        } catch (Z) {}
        var X = function X() {},
          Y = V && "inferred" === X.name ? V : null;
        e.defineProperty(n.Symbol.prototype, "description", {
          configurable: !0,
          enumerable: !1,
          get: function get() {
            return C(this);
          }
        });
      }
    }(Object, 0, self);
  }
  if (!("Symbol" in self && "iterator" in self.Symbol)) {
    Object.defineProperty(self.Symbol, "iterator", {
      value: self.Symbol("iterator")
    });
  }
  function GetIterator(t) {
    var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator),
      r = Call(e, t);
    if ("object" !== Type(r)) throw new TypeError("bad iterator");
    var o = GetV(r, "next"),
      a = Object.create(null);
    return a["[[Iterator]]"] = r, a["[[NextMethod]]"] = o, a["[[Done]]"] = !1, a;
  }
  if (!("Symbol" in self && "species" in self.Symbol)) {
    Object.defineProperty(Symbol, "species", {
      value: Symbol("species")
    });
  }
  if (!("Map" in self && function (t) {
    try {
      var n = new t.Map([[1, 1], [2, 2]]);
      return 0 === t.Map.length && 2 === n.size && "Symbol" in t && "iterator" in t.Symbol && "function" == typeof n[t.Symbol.iterator];
    } catch (e) {
      return !1;
    }
  }(self))) {
    !function (e) {
      function t(e, t) {
        if ("object" !== Type(e)) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        var r = Object.create(u);
        return Object.defineProperty(r, "[[Map]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: e
        }), Object.defineProperty(r, "[[MapNextIndex]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(r, "[[MapIterationKind]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        }), r;
      }
      var r = function () {
          try {
            var e = {};
            return Object.defineProperty(e, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!e.t;
          } catch (t) {
            return !1;
          }
        }(),
        o = 0,
        a = Symbol("meta_" + (1e8 * Math.random() + "").replace(".", "")),
        n = function n(e) {
          if ("object" == _typeof(e) ? null !== e : "function" == typeof e) {
            if (!Object.isExtensible(e)) return !1;
            if (!Object.prototype.hasOwnProperty.call(e, a)) {
              var t = _typeof(e) + "-" + ++o;
              Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: t
              });
            }
            return e[a];
          }
          return "" + e;
        },
        i = function i(e, t) {
          var r = n(t);
          if (!1 === r) return p(e, t);
          var o = e._table[r];
          return o !== undefined && o;
        },
        p = function p(e, t) {
          for (var r = 0; r < e._keys.length; r++) {
            var o = e._keys[r];
            if (o !== c && SameValueZero(o, t)) return r;
          }
          return !1;
        },
        l = function l(e, t, r) {
          var o = n(t);
          return !1 !== o && (!1 === r ? delete e._table[o] : e._table[o] = r, !0);
        },
        c = Symbol("undef"),
        y = function f() {
          if (!(this instanceof f)) throw new TypeError('Constructor Map requires "new"');
          var e = OrdinaryCreateFromConstructor(this, f.prototype, {
            _table: {},
            _keys: [],
            _values: [],
            _size: 0,
            _es6Map: !0
          });
          r || Object.defineProperty(e, "size", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0
          });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.set;
          if (!IsCallable(o)) throw new TypeError("Map.prototype.set is not a function");
          try {
            for (var a = GetIterator(t);;) {
              var n = IteratorStep(a);
              if (!1 === n) return e;
              var i = IteratorValue(n);
              if ("object" !== Type(i)) try {
                throw new TypeError("Iterator value " + i + " is not an entry object");
              } catch (u) {
                return IteratorClose(a, u);
              }
              try {
                var p = i[0],
                  l = i[1];
                o.call(e, p, l);
              } catch (s) {
                return IteratorClose(a, s);
              }
            }
          } catch (s) {
            if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) {
              var c,
                y = t.length;
              for (c = 0; c < y; c++) o.call(e, t[c][0], t[c][1]);
            }
          }
          return e;
        };
      Object.defineProperty(y, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {}
      }), r ? Object.defineProperty(y, Symbol.species, {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          return this;
        },
        set: undefined
      }) : CreateMethodProperty(y, Symbol.species, y), CreateMethodProperty(y.prototype, "clear", function b() {
        var e = this;
        if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        for (var t = e._keys, o = 0; o < t.length; o++) e._keys[o] = c, e._values[o] = c;
        return this._size = 0, r || (this.size = this._size), this._table = {}, undefined;
      }), CreateMethodProperty(y.prototype, "constructor", y), CreateMethodProperty(y.prototype, "delete", function (e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
        var o = i(t, e);
        if (!1 !== o) {
          var a = t._keys[o];
          if (a !== c && SameValueZero(a, e)) return this._keys[o] = c, this._values[o] = c, this._size = --this._size, r || (this.size = this._size), l(this, e, !1), !0;
        }
        return !1;
      }), CreateMethodProperty(y.prototype, "entries", function h() {
        return t(this, "key+value");
      }), CreateMethodProperty(y.prototype, "forEach", function (e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
        if (arguments[1]) var r = arguments[1];
        for (var o = t._keys, a = 0; a < o.length; a++) t._keys[a] !== c && t._values[a] !== c && e.call(r, t._values[a], t._keys[a], t);
        return undefined;
      }), CreateMethodProperty(y.prototype, "get", function d(e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
        var r = i(t, e);
        if (!1 !== r) {
          var o = t._keys[r];
          if (o !== c && SameValueZero(o, e)) return t._values[r];
        }
        return undefined;
      }), CreateMethodProperty(y.prototype, "has", function v(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
        var r = i(t, e);
        if (!1 !== r) {
          var o = t._keys[r];
          if (o !== c && SameValueZero(o, e)) return !0;
        }
        return !1;
      }), CreateMethodProperty(y.prototype, "keys", function M() {
        return t(this, "key");
      }), CreateMethodProperty(y.prototype, "set", function w(e, t) {
        var o = this;
        if ("object" !== Type(o)) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
        if (!0 !== o._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
        var a = i(o, e);
        if (!1 !== a) o._values[a] = t;else {
          -0 === e && (e = 0);
          var n = {
            "[[Key]]": e,
            "[[Value]]": t
          };
          o._keys.push(n["[[Key]]"]), o._values.push(n["[[Value]]"]), l(o, e, o._keys.length - 1), ++o._size, r || (o.size = o._size);
        }
        return o;
      }), r && Object.defineProperty(y.prototype, "size", {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          var e = this;
          if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          return this._size;
        },
        set: undefined
      }), CreateMethodProperty(y.prototype, "values", function j() {
        return t(this, "value");
      }), CreateMethodProperty(y.prototype, Symbol.iterator, y.prototype.entries), "name" in y || Object.defineProperty(y, "name", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: "Map"
      });
      var u = {};
      Object.defineProperty(u, "isMapIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0
      }), CreateMethodProperty(u, "next", function _() {
        var e = this;
        if ("object" !== Type(e)) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        var t = e["[[Map]]"],
          r = e["[[MapNextIndex]]"],
          o = e["[[MapIterationKind]]"];
        if (t === undefined) return CreateIterResultObject(undefined, !0);
        if (!t._es6Map) throw new Error(Object.prototype.toString.call(t) + " has a [[MapData]] internal slot.");
        for (var a = t._keys, n = a.length; r < n;) {
          var i = Object.create(null);
          if (i["[[Key]]"] = t._keys[r], i["[[Value]]"] = t._values[r], r += 1, e["[[MapNextIndex]]"] = r, i["[[Key]]"] !== c) {
            if ("key" === o) var p = i["[[Key]]"];else if ("value" === o) p = i["[[Value]]"];else {
              if ("key+value" !== o) throw new Error();
              p = [i["[[Key]]"], i["[[Value]]"]];
            }
            return CreateIterResultObject(p, !1);
          }
        }
        return e["[[Map]]"] = undefined, CreateIterResultObject(undefined, !0);
      }), CreateMethodProperty(u, Symbol.iterator, function g() {
        return this;
      });
      try {
        CreateMethodProperty(e, "Map", y);
      } catch (s) {
        e.Map = y;
      }
    }(self);
  }
  if (!("Set" in self && function () {
    try {
      var e = new self.Set([1, 2]);
      return 0 === self.Set.length && 2 === e.size && "Symbol" in self && "iterator" in self.Symbol && "function" == typeof e[self.Symbol.iterator];
    } catch (t) {
      return !1;
    }
  }())) {
    !function (e) {
      function t(e, t) {
        if ("object" != _typeof(e)) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Set) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        var r = Object.create(i);
        return Object.defineProperty(r, "[[IteratedSet]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: e
        }), Object.defineProperty(r, "[[SetNextIndex]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(r, "[[SetIterationKind]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        }), r;
      }
      var r = function () {
          try {
            var e = {};
            return Object.defineProperty(e, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!e.t;
          } catch (t) {
            return !1;
          }
        }(),
        o = Symbol("undef"),
        n = function c() {
          if (!(this instanceof c)) throw new TypeError('Constructor Set requires "new"');
          var e = OrdinaryCreateFromConstructor(this, c.prototype, {
            _values: [],
            _size: 0,
            _es6Set: !0
          });
          r || Object.defineProperty(e, "size", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0
          });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.add;
          if (!IsCallable(o)) throw new TypeError("Set.prototype.add is not a function");
          try {
            for (var n = GetIterator(t);;) {
              var a = IteratorStep(n);
              if (!1 === a) return e;
              var i = IteratorValue(a);
              try {
                o.call(e, i);
              } catch (y) {
                return IteratorClose(n, y);
              }
            }
          } catch (y) {
            if (!Array.isArray(t) && "[object Arguments]" !== Object.prototype.toString.call(t) && !t.callee) throw y;
            var l,
              p = t.length;
            for (l = 0; l < p; l++) o.call(e, t[l]);
          }
          return e;
        };
      Object.defineProperty(n, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {}
      }), r ? Object.defineProperty(n, Symbol.species, {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          return this;
        },
        set: undefined
      }) : CreateMethodProperty(n, Symbol.species, n), CreateMethodProperty(n.prototype, "add", function p(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          if (i !== o && SameValueZero(i, e)) return t;
        }
        return 0 === e && 1 / e == -Infinity && (e = 0), t._values.push(e), this._size = ++this._size, r || (this.size = this._size), t;
      }), CreateMethodProperty(n.prototype, "clear", function y() {
        var e = this;
        if ("object" != _typeof(e)) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        for (var t = e._values, n = 0; n < t.length; n++) t[n] = o;
        return this._size = 0, r || (this.size = this._size), undefined;
      }), CreateMethodProperty(n.prototype, "constructor", n), CreateMethodProperty(n.prototype, "delete", function (e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          if (i !== o && SameValueZero(i, e)) return n[a] = o, this._size = --this._size, r || (this.size = this._size), !0;
        }
        return !1;
      }), CreateMethodProperty(n.prototype, "entries", function u() {
        return t(this, "key+value");
      }), CreateMethodProperty(n.prototype, "forEach", function f(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
        if (arguments[1]) var r = arguments[1];
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          i !== o && e.call(r, i, i, t);
        }
        return undefined;
      }), CreateMethodProperty(n.prototype, "has", function d(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var r = t._values, n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== o && SameValueZero(a, e)) return !0;
        }
        return !1;
      });
      var a = function h() {
        return t(this, "value");
      };
      CreateMethodProperty(n.prototype, "values", a), CreateMethodProperty(n.prototype, "keys", a), r && Object.defineProperty(n.prototype, "size", {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          var e = this;
          if ("object" != _typeof(e)) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          for (var t = e._values, r = 0, n = 0; n < t.length; n++) {
            t[n] !== o && (r += 1);
          }
          return r;
        },
        set: undefined
      }), CreateMethodProperty(n.prototype, Symbol.iterator, a), "name" in n || Object.defineProperty(n, "name", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: "Set"
      });
      var i = {};
      Object.defineProperty(i, "isSetIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0
      }), CreateMethodProperty(i, "next", function b() {
        var e = this;
        if ("object" != _typeof(e)) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!e.isSetIterator) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        var t = e["[[IteratedSet]]"],
          r = e["[[SetNextIndex]]"],
          n = e["[[SetIterationKind]]"];
        if (t === undefined) return CreateIterResultObject(undefined, !0);
        if (!t._es6Set) throw new Error(Object.prototype.toString.call(t) + " does not have [[SetData]] internal slot.");
        for (var a = t._values, i = a.length; r < i;) {
          var l = a[r];
          if (r += 1, e["[[SetNextIndex]]"] = r, l !== o) return "key+value" === n ? CreateIterResultObject([l, l], !1) : CreateIterResultObject(l, !1);
        }
        return e["[[IteratedSet]]"] = undefined, CreateIterResultObject(undefined, !0);
      }), CreateMethodProperty(i, Symbol.iterator, function s() {
        return this;
      });
      try {
        CreateMethodProperty(e, "Set", n);
      } catch (l) {
        e.Set = n;
      }
    }(self);
  }
  if (!("from" in Array && function () {
    try {
      return Array.from({
        length: -Infinity
      }), "a" === Array.from(new self.Set(["a"]))[0] && "a" === Array.from(new self.Map([["a", "one"]]))[0][0];
    } catch (r) {
      return !1;
    }
  }())) {
    !function () {
      function r(r) {
        return "string" == typeof r || "object" == _typeof(r) && "[object String]" === t.call(r);
      }
      var t = Object.prototype.toString,
        e = String.prototype.match;
      CreateMethodProperty(Array, "from", function o(t) {
        var o = this,
          a = arguments.length > 1 ? arguments[1] : undefined;
        if (a === undefined) var n = !1;else {
          if (!1 === IsCallable(a)) throw new TypeError(Object.prototype.toString.call(a) + " is not a function.");
          var i = arguments.length > 2 ? arguments[2] : undefined;
          if (i !== undefined) var l = i;else l = undefined;
          n = !0;
        }
        var u = GetMethod(t, Symbol.iterator);
        if (u !== undefined) {
          if (IsConstructor(o)) var f = Construct(o);else f = ArrayCreate(0);
          for (var c = GetIterator(t, u), s = 0;;) {
            if (s >= Math.pow(2, 53) - 1) {
              var h = new TypeError("Iteration count can not be greater than or equal 9007199254740991.");
              return IteratorClose(c, h);
            }
            var y = ToString(s),
              C = IteratorStep(c);
            if (!1 === C) return f.length = s, f;
            var g = IteratorValue(C);
            if (n) try {
              var p = Call(a, l, [g, s]);
            } catch (b) {
              return IteratorClose(c, b);
            } else p = g;
            try {
              CreateDataPropertyOrThrow(f, y, p);
            } catch (b) {
              return IteratorClose(c, b);
            }
            s += 1;
          }
        }
        if (r(t)) var v = e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];else v = ToObject(t);
        var d = ToLength(Get(v, "length"));
        for (f = IsConstructor(o) ? Construct(o, [d]) : ArrayCreate(d), s = 0; s < d;) {
          y = ToString(s);
          var I = Get(v, y);
          p = !0 === n ? Call(a, l, [I, s]) : I, CreateDataPropertyOrThrow(f, y, p), s += 1;
        }
        return f.length = d, f;
      });
    }();
  }
  if (!("Symbol" in self && "toStringTag" in self.Symbol)) {
    Object.defineProperty(Symbol, "toStringTag", {
      value: Symbol("toStringTag")
    });
  }
  if (!("Promise" in self)) {
    !function () {
      "use strict";

      function n() {
        return tn[q][B] || D;
      }
      function t(n) {
        return n && "object" == _typeof(n);
      }
      function e(n) {
        return "function" == typeof n;
      }
      function r(n, t) {
        return n instanceof t;
      }
      function o(n) {
        return r(n, A);
      }
      function i(n, t, e) {
        if (!t(n)) throw a(e);
      }
      function u() {
        try {
          return b.apply(R, arguments);
        } catch (n) {
          return Y.e = n, Y;
        }
      }
      function c(n, t) {
        return b = n, R = t, u;
      }
      function f(n, t) {
        function e() {
          for (var e = 0; e < o;) t(r[e], r[e + 1]), r[e++] = T, r[e++] = T;
          o = 0, r.length > n && (r.length = n);
        }
        var r = L(n),
          o = 0;
        return function (n, t) {
          r[o++] = n, r[o++] = t, 2 === o && tn.nextTick(e);
        };
      }
      function s(n, t) {
        var o,
          i,
          u,
          f,
          s = 0;
        if (!n) throw a(N);
        var l = n[tn[q][z]];
        if (e(l)) i = l.call(n);else {
          if (!e(n.next)) {
            if (r(n, L)) {
              for (o = n.length; s < o;) t(n[s], s++);
              return s;
            }
            throw a(N);
          }
          i = n;
        }
        for (; !(u = i.next()).done;) if ((f = c(t)(u.value, s++)) === Y) throw e(i[G]) && i[G](), f.e;
        return s;
      }
      function a(n) {
        return new TypeError(n);
      }
      function l(n) {
        return (n ? "" : Q) + new A().stack;
      }
      function h(n, t) {
        var e = "on" + n.toLowerCase(),
          r = F[e];
        E && E.listeners(n).length ? n === X ? E.emit(n, t._v, t) : E.emit(n, t) : r ? r({
          reason: t._v,
          promise: t
        }) : tn[n](t._v, t);
      }
      function v(n) {
        return n && n._s;
      }
      function _(n) {
        if (v(n)) return new n(Z);
        var t, r, o;
        return t = new n(function (n, e) {
          if (t) throw a();
          r = n, o = e;
        }), i(r, e), i(o, e), t;
      }
      function d(n, t) {
        var e = !1;
        return function (r) {
          e || (e = !0, I && (n[M] = l(!0)), t === U ? g(n, r) : y(n, t, r));
        };
      }
      function p(n, t, r, o) {
        return e(r) && (t._onFulfilled = r), e(o) && (n[J] && h(W, n), t._onRejected = o), I && (t._p = n), n[n._c++] = t, n._s !== $ && rn(n, t), t;
      }
      function m(n) {
        if (n._umark) return !0;
        n._umark = !0;
        for (var t, e = 0, r = n._c; e < r;) if (t = n[e++], t._onRejected || m(t)) return !0;
      }
      function w(n, t) {
        function e(n) {
          return r.push(n.replace(/^\s+|\s+$/g, ""));
        }
        var r = [];
        return I && (t[M] && e(t[M]), function o(n) {
          n && K in n && (o(n._next), e(n[K] + ""), o(n._p));
        }(t)), (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(nn, "");
      }
      function j(n, t) {
        return n(t);
      }
      function y(n, t, e) {
        var r = 0,
          i = n._c;
        if (n._s === $) for (n._s = t, n._v = e, t === O && (I && o(e) && (e.longStack = w(e, n)), on(n)); r < i;) rn(n, n[r++]);
        return n;
      }
      function g(n, r) {
        if (r === n && r) return y(n, O, a(V)), n;
        if (r !== S && (e(r) || t(r))) {
          var o = c(k)(r);
          if (o === Y) return y(n, O, o.e), n;
          e(o) ? (I && v(r) && (n._next = r), v(r) ? x(n, r, o) : tn.nextTick(function () {
            x(n, r, o);
          })) : y(n, U, r);
        } else y(n, U, r);
        return n;
      }
      function k(n) {
        return n.then;
      }
      function x(n, t, e) {
        var r = c(e, t)(function (e) {
          t && (t = S, g(n, e));
        }, function (e) {
          t && (t = S, y(n, O, e));
        });
        r === Y && t && (y(n, O, r.e), t = S);
      }
      var T,
        b,
        R,
        S = null,
        C = "object" == _typeof(self),
        F = self,
        P = F.Promise,
        E = F.process,
        H = F.console,
        I = !0,
        L = Array,
        A = Error,
        O = 1,
        U = 2,
        $ = 3,
        q = "Symbol",
        z = "iterator",
        B = "species",
        D = q + "(" + B + ")",
        G = "return",
        J = "_uh",
        K = "_pt",
        M = "_st",
        N = "Invalid argument",
        Q = "\nFrom previous ",
        V = "Chaining cycle detected for promise",
        W = "rejectionHandled",
        X = "unhandledRejection",
        Y = {
          e: S
        },
        Z = function Z() {},
        nn = /^.+\/node_modules\/yaku\/.+\n?/gm,
        tn = function tn(n) {
          var r,
            o = this;
          if (!t(o) || o._s !== T) throw a("Invalid this");
          if (o._s = $, I && (o[K] = l()), n !== Z) {
            if (!e(n)) throw a(N);
            r = c(n)(d(o, U), d(o, O)), r === Y && y(o, O, r.e);
          }
        };
      tn["default"] = tn, function en(n, t) {
        for (var e in t) n[e] = t[e];
      }(tn.prototype, {
        then: function then(n, t) {
          if (this._s === undefined) throw a();
          return p(this, _(tn.speciesConstructor(this, tn)), n, t);
        },
        "catch": function _catch(n) {
          return this.then(T, n);
        },
        "finally": function _finally(n) {
          return this.then(function (t) {
            return tn.resolve(n()).then(function () {
              return t;
            });
          }, function (t) {
            return tn.resolve(n()).then(function () {
              throw t;
            });
          });
        },
        _c: 0,
        _p: S
      }), tn.resolve = function (n) {
        return v(n) ? n : g(_(this), n);
      }, tn.reject = function (n) {
        return y(_(this), O, n);
      }, tn.race = function (n) {
        var t = this,
          e = _(t),
          r = function r(n) {
            y(e, U, n);
          },
          o = function o(n) {
            y(e, O, n);
          },
          i = c(s)(n, function (n) {
            t.resolve(n).then(r, o);
          });
        return i === Y ? t.reject(i.e) : e;
      }, tn.all = function (n) {
        function t(n) {
          y(o, O, n);
        }
        var e,
          r = this,
          o = _(r),
          i = [];
        return (e = c(s)(n, function (n, u) {
          r.resolve(n).then(function (n) {
            i[u] = n, --e || y(o, U, i);
          }, t);
        })) === Y ? r.reject(e.e) : (e || y(o, U, []), o);
      }, tn.Symbol = F[q] || {}, c(function () {
        Object.defineProperty(tn, n(), {
          get: function get() {
            return this;
          }
        });
      })(), tn.speciesConstructor = function (t, e) {
        var r = t.constructor;
        return r ? r[n()] || e : e;
      }, tn.unhandledRejection = function (n, t) {
        H && H.error("Uncaught (in promise)", I ? t.longStack : w(n, t));
      }, tn.rejectionHandled = Z, tn.enableLongStackTrace = function () {
        I = !0;
      }, tn.nextTick = C ? function (n) {
        P ? new P(function (n) {
          n();
        }).then(n) : setTimeout(n);
      } : E.nextTick, tn._s = 1;
      var rn = f(999, function (n, t) {
          var e, r;
          return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T ? void y(t, n._s, n._v) : (e = c(j)(r, n._v)) === Y ? void y(t, O, e.e) : void g(t, e);
        }),
        on = f(9, function (n) {
          m(n) || (n[J] = 1, h(X, n));
        });
      F.Promise = tn;
    }();
  }
  if (!function (r) {
    "use strict";

    try {
      var a = new r.URL("http://example.com");
      if ("href" in a && "searchParams" in a) {
        var e = new URL("http://example.com");
        if (e.search = "a=1&b=2", "http://example.com/?a=1&b=2" === e.href && (e.search = "", "http://example.com/" === e.href)) {
          if (!("sort" in r.URLSearchParams.prototype)) return !1;
          var t = new r.URLSearchParams("a=1"),
            n = new r.URLSearchParams(t);
          if ("a=1" !== String(n)) return !1;
          var c = new r.URLSearchParams({
            a: "1"
          });
          if ("a=1" !== String(c)) return !1;
          var h = new r.URLSearchParams([["a", "1"]]);
          return "a=1" === String(h);
        }
      }
      return !1;
    } catch (m) {
      return !1;
    }
  }(self)) {
    !function (e) {
      "use strict";

      function t(t) {
        return !!t && ("Symbol" in e && "iterator" in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t));
      }
      !function () {
        function n(e) {
          var t = "",
            n = !0;
          return e.forEach(function (e) {
            var r = encodeURIComponent(e.name),
              a = encodeURIComponent(e.value);
            n || (t += "&"), t += r + "=" + a, n = !1;
          }), t.replace(/%20/g, "+");
        }
        function r(e) {
          return e.replace(/((%[0-9A-Fa-f]{2})*)/g, function (e, t) {
            return decodeURIComponent(t);
          });
        }
        function a(e, t) {
          var n = e.split("&");
          t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
          var a = [];
          n.forEach(function (e) {
            if (0 !== e.length) {
              var t = e.indexOf("=");
              if (-1 !== t) var n = e.substring(0, t),
                r = e.substring(t + 1);else n = e, r = "";
              n = n.replace(/\+/g, " "), r = r.replace(/\+/g, " "), a.push({
                name: n,
                value: r
              });
            }
          });
          var i = [];
          return a.forEach(function (e) {
            i.push({
              name: r(e.name),
              value: r(e.value)
            });
          }), i;
        }
        function i(e) {
          if (c) return new s(e);
          var t = document.createElement("a");
          return t.href = e, t;
        }
        function o(e) {
          var r = this;
          this._list = [], e === undefined || null === e || (e instanceof o ? this._list = a(String(e)) : "object" == _typeof(e) && t(e) ? Array.from(e).forEach(function (e) {
            if (!t(e)) throw TypeError();
            var n = Array.from(e);
            if (2 !== n.length) throw TypeError();
            r._list.push({
              name: String(n[0]),
              value: String(n[1])
            });
          }) : "object" == _typeof(e) && e ? Object.keys(e).forEach(function (t) {
            r._list.push({
              name: String(t),
              value: String(e[t])
            });
          }) : (e = String(e), "?" === e.substring(0, 1) && (e = e.substring(1)), this._list = a(e))), this._url_object = null, this._setList = function (e) {
            i || (r._list = e);
          };
          var i = !1;
          this._update_steps = function () {
            i || (i = !0, r._url_object && ("about:" === r._url_object.protocol && -1 !== r._url_object.pathname.indexOf("?") && (r._url_object.pathname = r._url_object.pathname.split("?")[0]), r._url_object.search = n(r._list), i = !1));
          };
        }
        function u(e, t) {
          var n = 0;
          this.next = function () {
            if (n >= e.length) return {
              done: !0,
              value: undefined
            };
            var r = e[n++];
            return {
              done: !1,
              value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value]
            };
          };
        }
        function l(t, n) {
          function r() {
            var e = l.href.replace(/#$|\?$|\?(?=#)/g, "");
            l.href !== e && (l.href = e);
          }
          function u() {
            m._setList(l.search ? a(l.search.substring(1)) : []), m._update_steps();
          }
          if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
          n && (t = function () {
            if (c) return new s(t, n).href;
            var e;
            try {
              var r;
              if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"), e.style.display = "none", document.documentElement.appendChild(e), r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), r.documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"), r.write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported");
              var a = r.createElement("base");
              a.href = n, r.getElementsByTagName("head")[0].appendChild(a);
              var i = r.createElement("a");
              return i.href = t, i.href;
            } finally {
              e && e.parentNode.removeChild(e);
            }
          }());
          var l = i(t || ""),
            f = function () {
              if (!("defineProperties" in Object)) return !1;
              try {
                var e = {};
                return Object.defineProperties(e, {
                  prop: {
                    get: function get() {
                      return !0;
                    }
                  }
                }), e.prop;
              } catch (t) {
                return !1;
              }
            }(),
            h = f ? this : document.createElement("a"),
            m = new o(l.search ? l.search.substring(1) : null);
          return m._url_object = h, Object.defineProperties(h, {
            href: {
              get: function get() {
                return l.href;
              },
              set: function set(e) {
                l.href = e, r(), u();
              },
              enumerable: !0,
              configurable: !0
            },
            origin: {
              get: function get() {
                return "data:" === this.protocol.toLowerCase() ? null : "origin" in l ? l.origin : this.protocol + "//" + this.host;
              },
              enumerable: !0,
              configurable: !0
            },
            protocol: {
              get: function get() {
                return l.protocol;
              },
              set: function set(e) {
                l.protocol = e;
              },
              enumerable: !0,
              configurable: !0
            },
            username: {
              get: function get() {
                return l.username;
              },
              set: function set(e) {
                l.username = e;
              },
              enumerable: !0,
              configurable: !0
            },
            password: {
              get: function get() {
                return l.password;
              },
              set: function set(e) {
                l.password = e;
              },
              enumerable: !0,
              configurable: !0
            },
            host: {
              get: function get() {
                var e = {
                  "http:": /:80$/,
                  "https:": /:443$/,
                  "ftp:": /:21$/
                }[l.protocol];
                return e ? l.host.replace(e, "") : l.host;
              },
              set: function set(e) {
                l.host = e;
              },
              enumerable: !0,
              configurable: !0
            },
            hostname: {
              get: function get() {
                return l.hostname;
              },
              set: function set(e) {
                l.hostname = e;
              },
              enumerable: !0,
              configurable: !0
            },
            port: {
              get: function get() {
                return l.port;
              },
              set: function set(e) {
                l.port = e;
              },
              enumerable: !0,
              configurable: !0
            },
            pathname: {
              get: function get() {
                return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname;
              },
              set: function set(e) {
                l.pathname = e;
              },
              enumerable: !0,
              configurable: !0
            },
            search: {
              get: function get() {
                return l.search;
              },
              set: function set(e) {
                l.search !== e && (l.search = e, r(), u());
              },
              enumerable: !0,
              configurable: !0
            },
            searchParams: {
              get: function get() {
                return m;
              },
              enumerable: !0,
              configurable: !0
            },
            hash: {
              get: function get() {
                return l.hash;
              },
              set: function set(e) {
                l.hash = e, r();
              },
              enumerable: !0,
              configurable: !0
            },
            toString: {
              value: function value() {
                return l.toString();
              },
              enumerable: !1,
              configurable: !0
            },
            valueOf: {
              value: function value() {
                return l.valueOf();
              },
              enumerable: !1,
              configurable: !0
            }
          }), h;
        }
        var c,
          s = e.URL;
        try {
          if (s) {
            if ("searchParams" in (c = new e.URL("http://example.com"))) {
              var f = new l("http://example.com");
              if (f.search = "a=1&b=2", "http://example.com/?a=1&b=2" === f.href && (f.search = "", "http://example.com/" === f.href)) return;
            }
            "href" in c || (c = undefined), c = undefined;
          }
        } catch (m) {}
        if (Object.defineProperties(o.prototype, {
          append: {
            value: function value(e, t) {
              this._list.push({
                name: e,
                value: t
              }), this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          "delete": {
            value: function value(e) {
              for (var t = 0; t < this._list.length;) this._list[t].name === e ? this._list.splice(t, 1) : ++t;
              this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          get: {
            value: function value(e) {
              for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return this._list[t].value;
              return null;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          getAll: {
            value: function value(e) {
              for (var t = [], n = 0; n < this._list.length; ++n) this._list[n].name === e && t.push(this._list[n].value);
              return t;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          has: {
            value: function value(e) {
              for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return !0;
              return !1;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          set: {
            value: function value(e, t) {
              for (var n = !1, r = 0; r < this._list.length;) this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t, n = !0, ++r) : ++r;
              n || this._list.push({
                name: e,
                value: t
              }), this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          entries: {
            value: function value() {
              return new u(this._list, "key+value");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          keys: {
            value: function value() {
              return new u(this._list, "key");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          values: {
            value: function value() {
              return new u(this._list, "value");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          forEach: {
            value: function value(e) {
              var t = arguments.length > 1 ? arguments[1] : undefined;
              this._list.forEach(function (n) {
                e.call(t, n.value, n.name);
              });
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          toString: {
            value: function value() {
              return n(this._list);
            },
            writable: !0,
            enumerable: !1,
            configurable: !0
          },
          sort: {
            value: function p() {
              for (var e = this.entries(), t = e.next(), n = [], r = {}; !t.done;) {
                var a = t.value,
                  i = a[0];
                n.push(i), Object.prototype.hasOwnProperty.call(r, i) || (r[i] = []), r[i].push(a[1]), t = e.next();
              }
              n.sort();
              for (var o = 0; o < n.length; o++) this["delete"](n[o]);
              for (var u = 0; u < n.length; u++) i = n[u], this.append(i, r[i].shift());
            }
          }
        }), "Symbol" in e && "iterator" in e.Symbol && (Object.defineProperty(o.prototype, e.Symbol.iterator, {
          value: o.prototype.entries,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(u.prototype, e.Symbol.iterator, {
          value: function value() {
            return this;
          },
          writable: !0,
          enumerable: !0,
          configurable: !0
        })), s) for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && "function" == typeof s[h] && (l[h] = s[h]);
        e.URL = l, e.URLSearchParams = o;
      }(), function () {
        if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({
          a: 1
        }).get("a")) {
          var n = e.URLSearchParams;
          e.URLSearchParams = function (e) {
            if (e && "object" == _typeof(e) && t(e)) {
              var r = new n();
              return Array.from(e).forEach(function (e) {
                if (!t(e)) throw TypeError();
                var n = Array.from(e);
                if (2 !== n.length) throw TypeError();
                r.append(n[0], n[1]);
              }), r;
            }
            return e && "object" == _typeof(e) ? (r = new n(), Object.keys(e).forEach(function (t) {
              r.set(t, e[t]);
            }), r) : new n(e);
          };
        }
      }();
    }(self);
  }
})('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(80)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })
/******/ ]);