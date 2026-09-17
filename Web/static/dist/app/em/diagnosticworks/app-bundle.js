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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 36:
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

/***/ 50:
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _diagnosticWorksListCtrl = __webpack_require__(83);
var _publishInfoCtrl = __webpack_require__(84);
var _restrictionsInfoCtrl = __webpack_require__(85);
var _editVariantCtrl = __webpack_require__(86);
var _editDiagnosticWorkCtrl = __webpack_require__(87);
var _dateInputComponent = __webpack_require__(88);
var _testplans = __webpack_require__(89);
var _testplan = __webpack_require__(90);
var _floatInput = __webpack_require__(96);
var _module = angular.module("irtech.netcity.em.diagnosticworks", ['ngFileUpload', 'ngRoute', 'ngSanitize', 'ngMessages', 'ui.select', 'uikit.alerts', 'uikit.dialogs', 'ui.bootstrap', "irtech.netcity.common", "irtech.netcity.ui-components", "ui.sortable"]);
_module.service("testPlansRepository", _testplans.TestPlansRepository).service("testTasksRepository", _testplans.TestTasksRepository).service("qaReferencesRepository", _testplans.QaReferencesRepository).component("editDateRangeComponent", _dateInputComponent.EditDateRangeComponent).controller("EditVariantCtrl", _editVariantCtrl.EditVariantCtrl).controller("PublishInfoCtrl", _publishInfoCtrl.PublishInfoCtrl).controller("RestrictionsInfoCtrl", _restrictionsInfoCtrl.RestrictionsInfoCtrl).controller("DiagnosticWorkCtrl", _editDiagnosticWorkCtrl.DiagnosticWorkCtrl).directive("floatInput", _floatInput.FloatInputDirective).filter('propsFilter', function () {
  return function (items, props) {
    var out;
    out = [];
    if (angular.isArray(items)) {
      items.forEach(function (item) {
        var i, itemMatches, keys, len, prop, text;
        itemMatches = false;
        keys = Object.keys(props);
        for (i = 0, len = keys.length; i < len; i++) {
          prop = keys[i];
          text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }
        if (itemMatches) {
          return out.push(item);
        }
      });
    } else {
      out = items;
    }
    return out;
  };
}).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/", _diagnosticWorksListCtrl.DiagnosticWorksListComponent).when("/:dwId/testplan/", _testplan.DwTestPlanComponent).otherwise(_diagnosticWorksListCtrl.DiagnosticWorksListComponent);
  return $locationProvider.html5Mode(true);
});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiagnosticWorksListCtrl = exports.DiagnosticWorksListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(61));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DiagnosticWorksListCtrl = /*#__PURE__*/function () {
  DiagnosticWorksListCtrl.$inject = ["pageContext", "$appLoader", "$http", "$alerts", "$uibModal", "$location", "$dialogs", "$q", "settingsProvider"];
  /*@ngInject*/
  function DiagnosticWorksListCtrl(pageContext, $appLoader, $http, $alerts, $uibModal, $location, $dialogs, $q, settingsProvider) {
    var _this = this;
    _classCallCheck(this, DiagnosticWorksListCtrl);
    this.language = language;
    this.$alerts = $alerts;
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.$uibModal = $uibModal;
    this.$location = $location;
    pageContext.title = "Диагностические работы";
    pageContext.parent = null;
    this.viewReady = false;
    this.tableReady = false;
    this.state = {
      readOnly: false,
      regional: false
    };
    this.data = {
      globalYears: [],
      globalYear: null,
      subjects: [],
      subject: null,
      testLevels: [],
      testLevel: null,
      testLevelsDictionary: null,
      responseSubjects: [],
      responseTestLevels: [],
      diagnosticWorks: [],
      diagnosticWork: new DiagnosticWork(),
      variant: new Variant(),
      defaultVal: {
        id: -1
      },
      name: "Все",
      idSelected: [],
      selection: new _selectable["default"](),
      publishing: false
    };
    this.urls = {
      year: "/webapi/em/years?main=true",
      subjects: "/webapi/references/subjectFipi",
      testLevels: "/webapi/references/testLevels"
    };
    this.loader = {
      getGlobalYears: function getGlobalYears() {
        return _this.$http.get("/webapi/em/years");
      },
      getDiagnosticWorks: function getDiagnosticWorks(yearId, subjectId, testLevel) {
        var params = {
          yearId: yearId,
          subjectId: subjectId,
          testLevel: testLevel
        };
        return _this.$http.get("/webapi/diagnosticWorks", {
          params: params
        });
      }
    };
    this.initingFilters = true;
    var promise = [];
    promise.push(settingsProvider.ServerSettings.SystemSettings.IsRegionEMForSchool().then(function (val) {
      if (val) {
        _this.state.regional = true;
      }
      _this.$http.get(_this.urls.testLevels).then(function (response) {
        _this.data.responseTestLevels = angular.copy(response.data);
        _this.data.testLevelsDictionary = _.object(_.pluck(_this.data.responseTestLevels, "id"), _.pluck(_this.data.responseTestLevels, "name"));
        _this.data.responseTestLevels = _.filter(_this.data.responseTestLevels, function (item) {
          return _this.isRegionalLevel(item.id);
        });
        _this.data.testLevels = angular.copy(response.data);
        _this.data.testLevels = _.filter(_this.data.testLevels, function (item) {
          return _this.isRegionalLevel(item.id);
        });
        _this.data.testLevels.unshift({
          id: -1,
          name: "Все"
        });
      })["catch"](_this.alterErrorHandler);
    }));
    promise.push(this.$http.get(this.urls.subjects).then(function (response) {
      // создается клон массива предметов, для того чтоб передать в диалоговое окно массив без параметра "Все"
      _this.data.responseSubjects = angular.copy(response.data);
      response.data.unshift({
        id: -1,
        name: "Все"
      });
      _this.data.subjects = response.data;
    })["catch"](this.alterErrorHandler));
    promise.push(this.loader.getGlobalYears().then(function (response) {
      _this.data.globalYears = response.data;
      if (!_this.data.globalYears || !_this.data.globalYears.length) {
        _this.criticalError = "Страница недоступна из-за того, что с данным управлением образования не связано ни одного образовательного учреждения, либо в связанных учреждения не пройден мастер ввода данных";
      }
      if (!_this.data.globalYear) {
        _this.data.globalYear = _.first(_this.data.globalYears);
      }
    })["catch"](this.alterErrorHandler));

    //Загрузка страницы
    this.$appLoader.show();
    $q.all(promise).then(function () {
      _this.$appLoader.hide();
      _this.viewReady = true;
      _this.updateTable();
    });
  }
  _createClass(DiagnosticWorksListCtrl, [{
    key: "modalDiagnosticWork",
    value: function modalDiagnosticWork(diagnosticWork) {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: '/static/dist/app/em/diagnosticworks/edit/template.html',
        controller: 'DiagnosticWorkCtrl as ctrl',
        size: "lg",
        resolve: {
          model: function model() {
            return {
              diagnosticWork: diagnosticWork,
              subjects: _.clone(_this2.data.responseSubjects),
              testLevels: _.clone(_this2.data.responseTestLevels)
            };
          },
          work: function work() {
            return diagnosticWork;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.clearSelection();
        _this2.updateTable();
      });
    }

    //добавить диагностическую работу
  }, {
    key: "addDiagnosticWork",
    value: function addDiagnosticWork() {
      if (this.data.globalYear.id === -1) {
        this.$dialogs.message("Пожалуйста, выберите учебный год");
        return;
      }
      var diagnosticWork = new DiagnosticWork();
      diagnosticWork.subjectFipi = this.data.subject;
      diagnosticWork.globalYearId = this.data.globalYear.id;
      this.modalDiagnosticWork(diagnosticWork);
    }

    //редактировать диагностическую работу
  }, {
    key: "editDiagnosticWork",
    value: function editDiagnosticWork(diagnosticWork) {
      this.modalDiagnosticWork(angular.copy(diagnosticWork));
    }
  }, {
    key: "isRegionalLevel",
    value: function isRegionalLevel(level) {
      return level === 0 || level === 1 || level === 4 || level === 5;
    }
  }, {
    key: "isRegionalLevelWork",
    value: function isRegionalLevelWork(diagnosticWork) {
      return diagnosticWork && this.isRegionalLevel(diagnosticWork.testLevel);
    }
  }, {
    key: "isReadOnlyWork",
    value: function isReadOnlyWork(diagnosticWork) {
      return diagnosticWork && (this.state.readOnly || this.state.regional && (!this.isRegionalLevelWork(diagnosticWork) || !diagnosticWork.regionGuid));
    }
  }, {
    key: "isExistsTestTasksInAllVariants",
    value: function isExistsTestTasksInAllVariants(diagnosticWork) {
      return diagnosticWork && _.every(diagnosticWork.variants, function (item) {
        return item.testTasksAmount;
      });
    }
  }, {
    key: "closeProcessing",
    value: function closeProcessing() {
      if (this.processing) {
        this.processing.close();
      }
    }
  }, {
    key: "defaultHandler",
    value: function defaultHandler(response) {
      this.data.publishing = false;
      this.closeProcessing();
      this.$appLoader.hide();
      this.$alerts.error(response.data.message, response.data.details);
    }
  }, {
    key: "isVpr",
    value: function isVpr(diagnosticWork) {
      return diagnosticWork && diagnosticWork.testLevel === 4;
    }

    //Опубликовать
  }, {
    key: "publish",
    value: function publish(diagnosticWork) {
      var _this3 = this;
      var post = function post() {
        _this3.data.publishing = true;
        _this3.processing = $.show.processing();
        if (_this3.state.regional && diagnosticWork.regionGuid) {
          _this3.$http.post("/webapi/diagnosticWorks/region/publish", diagnosticWork.id).then(function (result) {
            _this3.closeProcessing();
            _this3.data.publishing = false;
            var existsNotPublished = result && result.data && result.data.clientsPublishInfo && _.some(result.data.clientsPublishInfo, function (item) {
              return !item.success;
            });
            diagnosticWork.regionalPublishedCondition = existsNotPublished ? "ExistsNotPublished" : "AllPublished";
            if (diagnosticWork.regionalPublishedCondition === 'ExistsNotPublished') {
              diagnosticWork.published = true;
              _this3.$alerts.error("Диагностическая работа опубликована не во всех учебных заведениях");
            } else {
              _this3.successHandler("Диагностическая работа опубликована")();
            }
            _this3.publishInfo(diagnosticWork, result.data);
            _this3.clearSelection();
          })["catch"](function (error) {
            return _this3.defaultHandler(error);
          });
        } else {
          _this3.$http.post("/webapi/diagnosticWorks/publish", [diagnosticWork.id]).then(function (result) {
            _this3.closeProcessing();
            _this3.data.publishing = false;
            _this3.clearSelection();
            _this3.successHandler("Диагностическая работа опубликована")();
          })["catch"](function (error) {
            return _this3.defaultHandler(error);
          });
        }
      };
      this.$dialogs.confirm("Вы действительно желаете опубликовать выбранную диагностическую работу?").then(post);
    }

    //Сбросить выделение
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.data.selection) {
        this.data.selection.dropSelect();
      }
    }

    //Информация о публикации с регионального сервера
  }, {
    key: "publishInfo",
    value: function publishInfo(diagnosticWork) {
      var modalInstance = this.$uibModal.open({
        templateUrl: '/static/dist/app/em/diagnosticworks/info/template.html',
        controller: 'PublishInfoCtrl as ctrl',
        size: "lg",
        resolve: {
          work: function work() {
            return diagnosticWork;
          },
          publishInfo: function publishInfo() {
            return null;
          }
        }
      });
      modalInstance.result.then(function () {});
    }

    //Отозвать публикации
  }, {
    key: "unpublish",
    value: function unpublish(diagnosticWork) {
      var _this4 = this;
      var post = function post() {
        _this4.processing = $.show.processing();
        if (_this4.state.regional && diagnosticWork.regionGuid) {
          _this4.$http.get("/webapi/diagnosticWorks/linkedOrgs", {
            params: {
              diagnosticWorkId: diagnosticWork.id
            }
          }).then(function (result) {
            if (result && !result.data) {
              _this4.$http.post("/webapi/diagnosticWorks/region/unpublish", diagnosticWork.id).then(function (result) {
                _this4.closeProcessing();
                if (result.data && result.data.clientsUnPublishInfo && _.every(result.data.clientsUnPublishInfo, function (item) {
                  return item.success;
                })) {
                  _this4.clearSelection();
                  _this4.successHandler("Публикация диагностической работы отозвана")();
                } else {
                  var detailInfo = "";
                  if (result.data && result.data.clientsUnPublishInfo) {
                    var notSuccess = _.toArray(_.filter(result.data.clientsUnPublishInfo, function (info) {
                      return !info.success;
                    }));
                    _.each(notSuccess, function (item) {
                      return detailInfo = "".concat(detailInfo, "\n").concat(item.clientName, ": ").concat(item.details);
                    });
                    detailInfo = detailInfo.trim();
                  } else {
                    detailInfo = "Нет информационного ответа от сервера";
                  }
                  _this4.linkedOrgsInfo(detailInfo);
                }
              })["catch"](function (error) {
                return _this4.linkedOrgsInfo(error.data ? error.data.message + error.data.details : "");
              });
            } else {
              _this4.linkedOrgsInfo("Существуют следующие организации, в которых присутствует связь с диагностической работой:\n" + result.data);
            }
          })["catch"](function (error) {
            return _this4.defaultHandler(error);
          });
        } else {
          _this4.$http.get("/webapi/diagnosticWorks/linkedOrgs", {
            params: {
              diagnosticWorkId: diagnosticWork.id
            }
          }).then(function (result) {
            if (result && !result.data) {
              _this4.$http.post("/webapi/diagnosticWorks/unpublish", diagnosticWork.id).then(function (result) {
                _this4.closeProcessing();
                _this4.clearSelection();
                _this4.successHandler("Публикация диагностической работы отозвана")();
              })["catch"](function (error) {
                return _this4.linkedOrgsInfo(error.data ? error.data.message + error.data.details : "");
              });
            } else {
              _this4.linkedOrgsInfo(result.data);
            }
          })["catch"](function (error) {
            return _this4.defaultHandler(error);
          });
        }
      };
      this.$dialogs.confirm("Вы действительно желаете отозвать публикацию выбранной диагностической работы?").then(post);
    }
  }, {
    key: "linkedOrgsInfo",
    value: function linkedOrgsInfo(_info) {
      this.data.publishing = false;
      this.closeProcessing();
      this.$appLoader.hide();
      var modalInstance = this.$uibModal.open({
        templateUrl: '/static/dist/app/em/diagnosticworks/info/restrictionsInfoTemplate.html',
        controller: 'RestrictionsInfoCtrl as ctrl',
        size: "lg",
        resolve: {
          info: function info() {
            return _info;
          },
          title: function title() {
            return "Ошибка выполнения отзыва диагностической работы";
          },
          comment: function comment() {
            return "Невозможно выполнить отзыв диагностической работы.\n";
          }
        }
      });
      modalInstance.result.then(function () {});
    }

    //удалить диагностические работы
  }, {
    key: "removeDiagnosticWorks",
    value: function removeDiagnosticWorks(diagnosticWork) {
      var _this5 = this;
      var deleteMessage = function deleteMessage() {
        _this5.$http["delete"]("/webapi/diagnosticWorks/", {
          params: {
            id: diagnosticWork.id
          }
        }).then(function () {
          _this5.clearSelection();
          _this5.successHandler("Диагностическая работа удалена")();
        })["catch"](function (error) {
          return _this5.defaultHandler(error);
        });
      };
      this.$dialogs.confirm("Вы действительно желаете удалить выбранную диагностическую работу?").then(deleteMessage);
    }

    //добавить/редактировать вариант
  }, {
    key: "editVariant",
    value: function editVariant(diagnosticWork, variant) {
      var _this6 = this;
      if (!variant) {
        variant = new Variant();
        variant.diagnosticWork.id = diagnosticWork.id;
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: '/static/dist/app/em/diagnosticworks/editVariant/template.html',
        controller: 'EditVariantCtrl as ctrl',
        size: "lg",
        resolve: {
          model: function model() {
            return {
              diagnosticWork: _.clone(diagnosticWork),
              variant: _.clone(variant)
            };
          }
        }
      });
      modalInstance.result.then(function (response) {
        if (response.isNewVariant) {
          _this6.showDialogEditTestPlan(diagnosticWork, response);
        }
        _this6.clearSelection();
        _this6.updateTable();
      });
    }

    //отображение диалогового окна с предложением перейти к редактированию плана работы
  }, {
    key: "showDialogEditTestPlan",
    value: function showDialogEditTestPlan(diagnosticWork, variant) {
      var _this7 = this;
      $.show.dialog({
        title: "Сохранён вариант диагностической работы",
        size: "lg",
        message: "Вариант сохранён, желаете перейти к редактированию плана работы",
        variant: variant,
        buttons: [{
          label: "Да",
          action: function action(dialog) {
            return _this7.editTestPlan(diagnosticWork, variant);
          }
        }]
      });
    }

    //редактировать TestPlan
  }, {
    key: "editTestPlan",
    value: function editTestPlan(diagnosticWork, variant) {
      this.viewReady = false;
      this.$location.path("/".concat(diagnosticWork.id, "/testplan/")).search({
        testPlanId: variant.testPlanId
      });
    }

    //удалить вариант
  }, {
    key: "delVariant",
    value: function delVariant(diagnosticWork, variant) {
      var _this8 = this;
      if (diagnosticWork.variants.length <= 1) {
        this.$dialogs.message("Нельзя удалить последний вариант для диагностической работы");
      }
      this.$http["delete"]("/webapi/diagnosticWorks/variants", {
        params: {
          id: variant.id
        }
      }).then(function () {
        _this8.clearSelection();
        _this8.successHandler("Вариант диагностической работы удалён")();
      })["catch"](function (response) {
        return _this8.$alerts.error(response.data.message || "Ошибка удаления варианта диагностической работы", response.data.details);
      });
    }
  }, {
    key: "alterErrorHandler",
    value: function alterErrorHandler(response) {
      if (response && response.data) {
        $.show.error(response.data.message || this.language.Generic.Common.kErrorMsg);
      } else {
        $.show.error(this.language.Generic.Common.kErrorMsg);
      }
    }
  }, {
    key: "successHandler",
    value: function successHandler(message) {
      var _this9 = this;
      return function () {
        _this9.$alerts.success(message);
        _this9.updateTable();
      };
    }
  }, {
    key: "updateTable",
    value: function updateTable() {
      var _this10 = this;
      this.$appLoader.show();
      this.loader.getDiagnosticWorks(this.data.globalYear ? this.data.globalYear.id : null, this.data.subject ? this.data.subject.id : null, this.data.testLevel ? this.data.testLevel.id : null).then(function (response) {
        _this10.data.diagnosticWorks = angular.copy(response.data);
        _this10.data.variants = [];
        if (response.data.length > 0) {
          var variantIndex = 0;
          var diagnosticWorkIndex = 0;

          // подготовка данных по диагностическим работам для отображения
          _.each(_this10.data.diagnosticWorks, function (diagnosticWork) {
            diagnosticWork.testLevelName = _this10.data.testLevelsDictionary[diagnosticWork.testLevel];

            // форматирование дат
            var formattedStartDay = dateUtils.date2str(new Date(diagnosticWork.startDay));
            var formattedEndDay = null;
            if (diagnosticWork.endDay) {
              formattedEndDay = dateUtils.date2str(new Date(diagnosticWork.endDay));
            }
            if (formattedEndDay) {
              diagnosticWork.date = "".concat(formattedStartDay, " - ").concat(formattedEndDay);
            } else {
              diagnosticWork.date = formattedStartDay;
            }

            // приведение массива параллелей к строке
            diagnosticWork.gradesForShow = diagnosticWork.grades.join(", ");
            _.each(diagnosticWork.variants, function (variant, index) {
              variant.isFirstVariant = index === 0;
              diagnosticWorkIndex = diagnosticWorkIndex + 1;
              variant.diagnosticWorkIndex = diagnosticWorkIndex;
              variant.diagnosticWork = diagnosticWork;
              variant.index = variantIndex;
              _this10.data.variants.push(variant);
              variantIndex = variantIndex + 1;
            });
          });
          _this10.tableReady = true;
          _this10.$appLoader.hide();
        } else {
          _this10.tableReady = false;
          _this10.$appLoader.hide();
        }
      })["catch"](function (error) {
        return _this10.defaultHandler(error);
      });
    }
  }]);
  return DiagnosticWorksListCtrl;
}();
exports.DiagnosticWorksListCtrl = DiagnosticWorksListCtrl;
var DiagnosticWork = /*#__PURE__*/_createClass(function DiagnosticWork() {
  _classCallCheck(this, DiagnosticWork);
  this.id = 0;
  this.name = "";
  this.globalYearId = null;
  this.subjectFipi = null;
  this.startDay = null;
  this.endDay = null;
  this.grades = [];
  this.variants = [];
  this.emId = null;
  this.published = false;
});
var Variant = /*#__PURE__*/_createClass(function Variant() {
  _classCallCheck(this, Variant);
  this.diagnosticWork = {
    id: 0,
    name: ""
  };
  this.id = 0;
  this.name = '';
  this.testPlanId = null;
  this.schools = [];
  this.appointedType = {
    id: -1
  };
  this.testTasksAmount = 0;
});
var DiagnosticWorksListComponent = {
  templateUrl: '/static/dist/app/em/diagnosticworks/list/template.html',
  controller: DiagnosticWorksListCtrl,
  controllerAs: "ctrl"
};
exports.DiagnosticWorksListComponent = DiagnosticWorksListComponent;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishInfoCtrl = void 0;
var _netcityModalCtrl = __webpack_require__(36);
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
var PublishInfoCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  _inherits(PublishInfoCtrl, _NetCityModalControll);
  var _super = _createSuper(PublishInfoCtrl);
  function PublishInfoCtrl(pageContext, $scope, $http, $alerts, $dialogs, $uibModalInstance, work, publishInfo, changeTracker) {
    var _this;
    _classCallCheck(this, PublishInfoCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$uibModalInstance = $uibModalInstance;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.header = "Информация о публикации";
    _this.language = language;
    _this.data = {
      diagnosticWork: work,
      publishInfo: publishInfo ? publishInfo.clientsPublishInfo : null
    };
    _this.ready = false;
    _this.$http.get("/webapi/references/publishStatuses").then(function (result) {
      _this.data.publishStatuses = result.data;
      _this.data.publishStatusesDictionary = _.object(_.pluck(_this.data.publishStatuses, "key"), _.pluck(_this.data.publishStatuses, "name"));
      if (!_this.data.publishInfo) {
        _this.$http.get("/webapi/diagnosticWorks/region/publishInfo", {
          params: {
            diagnosticWorkId: work.id
          }
        }).then(function (info) {
          _this.data.publishInfo = info.data.clientsPublishInfo;
          var existsNotPublished = _this.data.publishInfo && _.some(_this.data.publishInfo, function (item) {
            return !item.success;
          });
          work.regionalPublishedCondition = existsNotPublished ? "ExistsNotPublished" : "AllPublished";
          _this.setAuxData();
          _this.ready = true;
        })["catch"](function (error) {
          _this.data.publishInfo = [];
          _this.ready = true;
          _this.$alerts.error(error.data.message, error.data.details);
        });
      } else {
        _this.setAuxData();
        _this.ready = true;
      }
    });
    return _this;
  }
  _createClass(PublishInfoCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss('cancel');
    }
  }, {
    key: "setAuxData",
    value: function setAuxData() {
      var _this2 = this;
      if (this.data.publishInfo) {
        _.each(this.data.publishInfo, function (item) {
          item.publishTimeStr = item.publishTime ? dateUtils.date2str(new Date(item.publishTime)) + " " + dateUtils.time2str(new Date(item.publishTime)) : "";
          item.publishStatusInfo = _this2.data.publishStatusesDictionary[item.status];
        });
      }
    }
  }]);
  return PublishInfoCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.PublishInfoCtrl = PublishInfoCtrl;
PublishInfoCtrl.$inject = ["pageContext", "$scope", "$http", "$alerts", "$dialogs", "$uibModalInstance", "work", "publishInfo", "changeTracker"];

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestrictionsInfoCtrl = void 0;
var _netcityModalCtrl = __webpack_require__(36);
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
var RestrictionsInfoCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  _inherits(RestrictionsInfoCtrl, _NetCityModalControll);
  var _super = _createSuper(RestrictionsInfoCtrl);
  function RestrictionsInfoCtrl($scope, $http, $alerts, $dialogs, $uibModalInstance, info, title, comment, changeTracker) {
    var _this;
    _classCallCheck(this, RestrictionsInfoCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$uibModalInstance = $uibModalInstance;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.header = title;
    _this.language = language;
    _this.data = {
      info: info,
      comment: comment
    };
    return _this;
  }
  _createClass(RestrictionsInfoCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss('cancel');
    }
  }]);
  return RestrictionsInfoCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.RestrictionsInfoCtrl = RestrictionsInfoCtrl;
RestrictionsInfoCtrl.$inject = ["$scope", "$http", "$alerts", "$dialogs", "$uibModalInstance", "info", "title", "comment", "changeTracker"];

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditVariantCtrl = void 0;
var _netcityModalCtrl = __webpack_require__(36);
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
var EditVariantCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  _inherits(EditVariantCtrl, _NetCityModalControll);
  var _super = _createSuper(EditVariantCtrl);
  function EditVariantCtrl(pageContext, $scope, $http, $alerts, $dialogs, $uibModalInstance, model, changeTracker) {
    var _this;
    _classCallCheck(this, EditVariantCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.appointedTypes = [{
      id: -1,
      name: "всем"
    }, {
      id: 0,
      name: "школам"
    }, {
      id: 1,
      name: "муниципалитетам"
    }];
    _this.$uibModalInstance = $uibModalInstance;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.header = "Атрибуты варианта диагностической работы";
    _this.language = language;
    _this.data = {
      variant: model.variant,
      diagnosticWork: model.diagnosticWork,
      appointedTypes: _this.appointedTypes,
      schools: [],
      founders: []
    };
    _this.ready = false;
    _this.foundersRequest = _this.$http.get("/webapi/em/founders").then(function (response) {
      return _this.data.founders = response.data;
    });
    _this.schoolsRequest = _this.$http.get("/webapi/em/schools", {
      params: {
        funcType: 2
      }
    }).then(function (response) {
      return _this.data.schools = response.data;
    });
    _this.defaultCatch = function (response) {
      if (response && response.data) {
        $.show.error(response.data.message || _this.language.Generic.Common.kErrorMsg);
      } else {
        $.show.error(_this.language.Generic.Common.kErrorMsg);
      }
    };
    _this.wrapToPromise = function (request) {
      return new Promise(function (resolve, reject) {
        return request.then(resolve)["catch"](reject);
      });
    };
    $.when.apply($, [_this.wrapToPromise(_this.foundersRequest), _this.wrapToPromise(_this.schoolsRequest)]).done(function () {
      return _this.ready = true;
    }).fail(_this.defaultCatch);
    return _this;
  }
  _createClass(EditVariantCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss('cancel');
    }
  }, {
    key: "showAppointedSchools",
    value: function showAppointedSchools() {
      return this.data.variant.appointedType.id === 0; //Тип назначения "школам"
    }
  }, {
    key: "showAppointedMunicipalities",
    value: function showAppointedMunicipalities() {
      return this.data.variant.appointedType.id === 1; //Тип назначения "муниципалитетам"
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.data.variant.name) {
        this.$dialogs.message("Наименование не может быть пустым");
        return false;
      }
      if (this.data.variant.appointedType.id === 0 && this.data.variant.schools.length <= 0) {
        this.$dialogs.message("Выберите школы для назначения");
        return false;
      }
      if (this.data.variant.appointedType.id === 1 && this.data.variant.founders.length <= 0) {
        this.$dialogs.message("Выберите муниципалитет для назначения");
        return false;
      }
      return true;
    }
  }, {
    key: "ok",
    value: function ok() {
      var _this2 = this;
      if (this.data.variant.appointedType.id === 0) {
        this.data.variant.founders = [];
      }
      if (this.data.variant.appointedType.id === 1) {
        this.data.variant.schools = [];
      }
      var dwVariant = _.pick(this.data.variant, 'id', 'name', 'testPlanId', 'schools', 'appointedType', 'founders');
      dwVariant.diagnosticWork = _.pick(this.data.variant.diagnosticWork, 'id', 'name');
      if (!this.validate()) {
        return;
      }
      this.$http.post("/webapi/diagnosticWorks/variants", dwVariant).then(function (response) {
        _this2.$uibModalInstance.close(response.data);
        _this2.$alerts.success("Вариант успешно сохранён");
      })["catch"](function (response) {
        return _this2.$alerts.error(response.data.message || response.data.details);
      });
    }
  }]);
  return EditVariantCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.EditVariantCtrl = EditVariantCtrl;
EditVariantCtrl.$inject = ["pageContext", "$scope", "$http", "$alerts", "$dialogs", "$uibModalInstance", "model", "changeTracker"];

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiagnosticWorkCtrl = void 0;
var _netcityModalCtrl = __webpack_require__(36);
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
var DiagnosticWorkCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  DiagnosticWorkCtrl.$inject = ["pageContext", "$scope", "$http", "$alerts", "$dialogs", "$uibModalInstance", "$q", "model", "changeTracker", "downloadService", "Upload", "appContext"];
  _inherits(DiagnosticWorkCtrl, _NetCityModalControll);
  var _super = _createSuper(DiagnosticWorkCtrl);
  /*@ngInject*/
  function DiagnosticWorkCtrl(pageContext, $scope, $http, $alerts, $dialogs, $uibModalInstance, $q, model, changeTracker, downloadService, Upload, appContext) {
    var _this;
    _classCallCheck(this, DiagnosticWorkCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$uibModalInstance = $uibModalInstance;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$q = $q;
    _this.language = language;
    _this.downloadService = downloadService;
    _this.Upload = Upload;
    _this.appContext = appContext;
    _this.data = {
      diagnosticWork: model.diagnosticWork,
      subjects: model.subjects,
      testLevels: model.testLevels,
      testLevelsNewWork: model.testLevels.filter(function (item) {
        return item.key === "FederalFgk" || item.key === "FederalVpr" || item.key === "Regional" || item.key === "Municipal";
      }),
      emptyVprForm: {
        id: null,
        name: null,
        file: null,
        partsAmount: 1,
        minStudentCode: 1,
        maxStudentCode: 999999
      }
    };

    // настройки интервала дат
    _this.dateRangeOptions = {
      calendarMinDate: null,
      calendarMaxDate: null,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    _this.header = _this.data.diagnosticWork.published ? "Информация об опубликованной диагностической работе" : "Свойства диагностической работы";
    _this.ready = false;
    if (!_this.data.diagnosticWork.vprForm) {
      _this.data.diagnosticWork.vprForm = angular.copy(_this.data.emptyVprForm);
    }
    _this.numGrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    _this.grades = _this.numGrades.map(function (x) {
      return x.toString();
    });
    _this.load();
    return _this;
  }
  _createClass(DiagnosticWorkCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "openDoc",
    value: function openDoc(url, fileName) {
      this.downloadService.downloadFile(url, fileName);
    }
  }, {
    key: "testLevels",
    value: function testLevels() {
      return this.data.diagnosticWork.id ? this.data.testLevels : this.data.testLevelsNewWork;
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var promises = [];
      var getGlobalYear = this.$http.get("/webapi/em/years/" + this.data.diagnosticWork.globalYearId).then(function (response) {
        var educYear = response.data;
        var maxDate = new Date(educYear.endDate);
        _this2.dateRangeOptions.calendarMinDate = new Date(educYear.startDate);
        _this2.dateRangeOptions.calendarMaxDate = maxDate;
        if (educYear.id < _this2.appContext.globalYearId) {
          _this2.dateRangeOptions.datePickerOptions.defaultViewDate = {
            year: maxDate.getFullYear(),
            month: maxDate.getMonth(),
            day: maxDate.getDate()
          };
        }
      });
      promises.push(getGlobalYear);
      if (this.data.diagnosticWork.id) {
        var getVprForm = this.$http.get("/webapi/diagnosticWorks/vprForm", {
          params: {
            dwId: this.data.diagnosticWork.id
          }
        }).then(function (response) {
          if (response && response.data) {
            _this2.data.diagnosticWork.vprForm = angular.copy(response.data);
          } else {
            _this2.data.diagnosticWork.vprForm = angular.copy(_this2.data.emptyVprForm);
          }
        });
        promises.push(getVprForm);
      }
      this.$q.all(promises).then(function () {
        _this2.ready = true;
      });
    }
  }, {
    key: "isVpr",
    value: function isVpr(diagnosticWork) {
      return diagnosticWork && diagnosticWork.testLevel === 4;
    }

    // создание диагностической работы
  }, {
    key: "addDiagnosticWork",
    value: function addDiagnosticWork(valid) {
      var _this3 = this;
      if (!valid) {
        this.$alerts.error("Ошибка при вводе данных");
        return;
      }
      var dwData = _.pick(this.data.diagnosticWork, 'id', 'name', 'globalYearId', 'subjectFipi', 'startDay', 'endDay', 'grades', 'emId', 'testLevel', 'vprForm');
      if (!this.validate(dwData)) {
        return;
      }
      this.ready = false;
      this.Upload.upload({
        url: "/webapi/diagnosticWorks/",
        method: "POST",
        data: {
          file: this.isVpr(this.data.diagnosticWork) ? this.data.diagnosticWork.vprForm.file : null,
          info: JSON.stringify(dwData)
        }
      }).then(function (response) {
        _this3.data.diagnosticWork.id = response.data;
        _this3.ready = true;
        _this3.$alerts.success("Диагностическая работа сохранена");
        _this3.$uibModalInstance.close(_this3.data.diagnosticWork);
      })["catch"](function (response) {
        _this3.ready = true;
        _this3.$alerts.error(response.data.message, response.data.details);
      });
    }

    // Общая валидация
  }, {
    key: "validate",
    value: function validate(dwData) {
      if (!dwData.testLevel && dwData.testLevel != 0) {
        this.$dialogs.message("Пожалуйста, выберите уровень");
        return false;
      }
      if (!dwData.subjectFipi || dwData.subjectFipi.id === -1) {
        this.$dialogs.message("Пожалуйста, выберите предмет");
        return false;
      }
      if (dwData.grades.length === 0) {
        this.$dialogs.message("Пожалуйста, выберите параллель");
        return false;
      } else {
        if (!this.validateCurrGrades(dwData)) {
          this.$dialogs.message("Пожалуйста, выберите параллель из одного уровня аттестации");
          return false;
        }
      }
      if (dwData.endDay && dwData.startDay > dwData.endDay) {
        this.$dialogs.message("Дата начала периода проведения не может быть позже даты окончания");
        return false;
      }
      if (!dwData.name) {
        this.$dialogs.message("Наименование не может быть пустым");
        return false;
      }
      if (!dwData.startDay) {
        this.$dialogs.message("Пожалуйста, укажите период проведения");
        return false;
      }
      if (dwData.testLevel == 4 && this.data.diagnosticWork.vprForm && !this.data.diagnosticWork.vprForm.name && (!this.data.diagnosticWork.vprForm.maxStudentCode || !this.data.diagnosticWork.vprForm.minStudentCode)) {
        this.$dialogs.message("Значения обоих кодов должны быть заполнены");
        return false;
      }
      if (dwData.testLevel == 4 && this.data.diagnosticWork.vprForm && !this.data.diagnosticWork.vprForm.name && this.data.diagnosticWork.vprForm.minStudentCode > this.data.diagnosticWork.vprForm.maxStudentCode) {
        this.$dialogs.message("Минимальный код больше максимального");
        return false;
      }
      return true;
    }

    // Валидация параллелей по уровням аттестации
  }, {
    key: "validateCurrGrades",
    value: function validateCurrGrades(dwData) {
      var grades = _.map(dwData.grades, function (o) {
        return Number(o);
      });
      var inGroup = function inGroup(group) {
        return _.intersection(grades, group).length > 0;
      };
      var gradeSchool = inGroup([1, 2, 3, 4]);
      var middleSchool = inGroup([5, 6, 7, 8, 9]);
      var hightSchool = inGroup([10, 11, 12]);
      return !(gradeSchool && middleSchool || middleSchool && hightSchool || gradeSchool && hightSchool);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.Upload.upload({
        url: "/webapi/diagnosticWorks/file",
        method: "POST",
        data: {
          file: file ? file.file : null,
          info: JSON.stringify({
            Id: this.data.diagnosticWork.id,
            Name: file ? file.name : null,
            PartsAmount: file ? file.partsAmount : 1,
            MinStudentCode: file && file.minStudentCode ? file.minStudentCode : 1,
            MaxStudentCode: file && file.maxStudentCode ? file.maxStudentCode : 999999
          })
        }
      });
    }
  }, {
    key: "changeFile",
    value: function changeFile(file) {
      this.data.diagnosticWork.vprForm.name = file ? file.name : null;
    }
  }, {
    key: "deleteVprForms",
    value: function deleteVprForms() {
      var _this4 = this;
      if (this.data.diagnosticWork.id) {
        var params = {
          params: {
            dwId: this.data.diagnosticWork.id,
            partsAmount: this.data.diagnosticWork.vprForm.partsAmount,
            minStudentCode: this.data.diagnosticWork.vprForm.minStudentCode,
            maxStudentCode: this.data.diagnosticWork.vprForm.maxStudentCode
          }
        };
        this.$http["delete"]("/webapi/diagnosticWorks/file", params).then(function (response) {
          var currentPartsAmount = _this4.data.diagnosticWork.vprForm.partsAmount;
          var currentMinStudentCode = _this4.data.diagnosticWork.vprForm.minStudentCode;
          var currentMaxStudentCode = _this4.data.diagnosticWork.vprForm.maxStudentCode;
          _this4.data.diagnosticWork.vprForm = angular.copy(_this4.data.emptyVprForm);
          _this4.data.diagnosticWork.vprForm.partsAmount = currentPartsAmount;
          _this4.data.diagnosticWork.vprForm.minStudentCode = currentMinStudentCode;
          _this4.data.diagnosticWork.vprForm.maxStudentCode = currentMaxStudentCode;
          if (response.data) {
            _this4.data.diagnosticWork.vprForm.id = response.data;
          }
          _this4.$alerts.success("Файл успешно удалён");
        })["catch"](function (response) {
          _this4.$alerts.error(response.data.message, response.data.details);
        });
      }
    }
  }]);
  return DiagnosticWorkCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.DiagnosticWorkCtrl = DiagnosticWorkCtrl;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDateRangeComponent = exports.EditDateInputComponent = void 0;
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
var BaseDateInputController = /*#__PURE__*/function () {
  BaseDateInputController.$inject = ["$scope", "$element", "language"];
  /*@ngInject*/
  function BaseDateInputController($scope, $element, language) {
    _classCallCheck(this, BaseDateInputController);
    this.$scope = $scope;
    this.$element = $element;
    this.language = language;
  }
  _createClass(BaseDateInputController, [{
    key: "$onInit",
    value: function $onInit() {
      this.options = this.options || {};
      // элемент, содержащий календарь
      this.setDatePickerContainer();
      // инициализация календаря
      this.initDatepickerComponent(this.datePickerContainer, this.options);
      // инициализация инпутов календаря
      this.setInputValues();
      // построение событий на инпутах
      this.buildEvents();
    }
  }, {
    key: "setDatePickerContainer",
    value: function setDatePickerContainer() {
      this.datePickerContainer = this.$element.find(".input-group");
    }
  }, {
    key: "initDatepickerComponent",
    value: function initDatepickerComponent(component, options) {
      dateInput.initDateInput(component, options.calendarMinDate || new Date(1753, 1, 1), options.calendarMaxDate || null, options.calendarSettings || null, options.datePickerOptions || null, true);
    }
  }, {
    key: "setInputValues",
    value: function setInputValues() {}
  }, {
    key: "buildEvents",
    value: function buildEvents() {}
  }, {
    key: "changeDate",
    value: function changeDate(event) {
      var target = event.target;
      if (this.focused(target)) {
        return;
      }
      var date = dateUtils.str2date(target.value);
      var nsDateModel = this.getNsDateModel(target);
      if (date) {
        this.setNsDateModelValue(nsDateModel, date.toISOString());
      } else {
        this.setNsDateModelValue(nsDateModel, null);
        target.$invalid = true;
      }
      this.$scope.$apply();
      if (this.dateChange && typeof this.dateChange === "function") {
        this.dateChange();
      }
    }
  }, {
    key: "focused",
    value: function focused(target) {
      var inputElement = document.activeElement;
      if (inputElement) {
        return inputElement.name === target.name;
      }
      return false;
    }
  }, {
    key: "watch",
    value: function watch(element, newVal) {
      if (newVal) {
        var strDate = dateUtils.date2str(new Date(newVal));
        element.value = strDate;
      } else {
        element.value = null;
      }
    }
  }, {
    key: "getNsDateModel",
    value: function getNsDateModel(input) {
      return input.getAttribute("ns-date-model");
    }
  }, {
    key: "getNsDateModelValue",
    value: function getNsDateModelValue(nsDateModel) {
      return this.$scope.$eval(nsDateModel);
    }
  }, {
    key: "setNsDateModelValue",
    value: function setNsDateModelValue(nsDateModel, newVal) {
      this.$scope.$eval("".concat(nsDateModel, " = newVal"), {
        newVal: newVal
      });
    }
  }]);
  return BaseDateInputController;
}();
var EditDateRangeController = /*#__PURE__*/function (_BaseDateInputControl) {
  EditDateRangeController.$inject = ["$scope", "$element", "language"];
  _inherits(EditDateRangeController, _BaseDateInputControl);
  var _super = _createSuper(EditDateRangeController);
  /*@ngInject*/
  function EditDateRangeController($scope, $element, language) {
    var _this;
    _classCallCheck(this, EditDateRangeController);
    _this = _super.call(this, $scope, $element, language);
    _this.$scope = $scope;
    _this.$element = $element;
    _this.language = language;
    _this.inputs = _this.$element.find("input");
    return _this;
  }
  _createClass(EditDateRangeController, [{
    key: "setInputValues",
    value: function setInputValues() {
      var _this2 = this;
      this.inputs.toArray().map(function (input) {
        // модель
        var nsDateModel = _this2.getNsDateModel(input);
        // значение модели
        var date = _this2.getNsDateModelValue(nsDateModel);
        if (date) {
          var strDate = dateUtils.date2str(new Date(date));
          var element = angular.element(input);
          var elementDatepicker = _this2.getElementDatePicker(element);
          if (elementDatepicker) {
            elementDatepicker.setDate(strDate);
          }
        }
      });
    }
  }, {
    key: "getElementDatePicker",
    value: function getElementDatePicker(element) {
      return element.data().datepicker || element.parent().data().datepicker;
    }
  }, {
    key: "buildEvents",
    value: function buildEvents() {
      var _this3 = this;
      var changeDateHandler = this.changeDate.bind(this);
      this.inputs.on("changeDate", changeDateHandler);
      this.inputs.on("blur", changeDateHandler);
      this.inputs.toArray().map(function (input) {
        // модель
        var nsDateModel = _this3.getNsDateModel(input);
        _this3.$scope.$watch(nsDateModel, function (newVal) {
          return _this3.watch(input, newVal);
        });
      });
    }
  }]);
  return EditDateRangeController;
}(BaseDateInputController);
var EditDateRangeComponent = {
  template: "\n\t\t<div class=\"input-daterange input-group date\">\n\t\t\t<input track-changes type=\"text\" class=\"input-md form-control\" name=\"start\" ns-date-model=\"$ctrl.startDate\"/>\n\t\t\t<span class=\"input-group-addon\">{{$ctrl.language.Generic.Filter.kIntervalTo}}</span>\n\t\t\t<input track-changes type=\"text\" class=\"input-md form-control\" name=\"end\" ns-date-model=\"$ctrl.endDate\"/>\n\t\t</div>",
  controller: EditDateRangeController,
  bindings: {
    startDate: "=",
    endDate: "=",
    dateChange: "&?",
    options: "="
  }
};
exports.EditDateRangeComponent = EditDateRangeComponent;
var EditDateInputController = /*#__PURE__*/function (_BaseDateInputControl2) {
  EditDateInputController.$inject = ["$scope", "$element", "language"];
  _inherits(EditDateInputController, _BaseDateInputControl2);
  var _super2 = _createSuper(EditDateInputController);
  /*@ngInject*/
  function EditDateInputController($scope, $element, language) {
    var _this4;
    _classCallCheck(this, EditDateInputController);
    _this4 = _super2.call(this, $scope, $element, language);
    _this4.name = _this4.name || "date";
    _this4.isRequired = _this4.isRequired || false;
    return _this4;
  }
  _createClass(EditDateInputController, [{
    key: "trackChanges",
    value: function trackChanges() {
      return !this.notrack;
    }
  }, {
    key: "buildEvents",
    value: function buildEvents() {
      var _this5 = this;
      var changeDateHandler = this.changeDate.bind(this);
      this.$element.find('div.input-group.date').on("changeDate", changeDateHandler);
      this.$element.find('input.date-input').on("blur", changeDateHandler);
      var changedDateInput = this.$element.find('input').get(0);
      var nsDateModel = this.getNsDateModel(changedDateInput);
      this.$scope.$watch(nsDateModel, function (newVal) {
        return _this5.watch(changedDateInput, newVal);
      });
    }
  }, {
    key: "changeDate",
    value: function changeDate(event) {
      var changedDateInput = this.getChangedDateInput(event.target);
      if (this.focused(changedDateInput)) {
        return;
      }
      var date = dateUtils.str2date(changedDateInput.value);
      var nsDateModel = this.getNsDateModel(changedDateInput);
      if (date) {
        this.setNsDateModelValue(nsDateModel, date.toISOString());
      } else {
        this.setNsDateModelValue(nsDateModel, null);
        changedDateInput.$invalid = true;
      }
      this.$scope.$apply();
      if (this.dateChange && typeof this.dateChange === "function") {
        this.dateChange();
      }
    }
  }, {
    key: "getChangedDateInput",
    value: function getChangedDateInput(target) {
      var targetElement = angular.element(target);
      if (targetElement.is('input')) {
        return targetElement.get(0);
      }
      // если обработчик сработал на другом элементе, изменить нужно значение у инпута
      return targetElement.parent().find('input').get(0);
    }
  }]);
  return EditDateInputController;
}(BaseDateInputController);
var EditDateInputComponent = {
  template: "\n\t\t<div class=\"input-group date\">\n\t\t\t<input track-changes=\"{{$ctrl.trackChanges()}}\" type=\"text\" class=\"form-control date-input\" name=\"$ctrl.name\" size=\"11\" maxlength=\"10\" ns-date-model=\"$ctrl.startDate\" ng-required=\"$ctrl.isRequired\">\n\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t<button title=\"\" type=\"button\" class=\"btn btn-primary\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-calendar\"></span>\n\t\t\t\t</button>\n\t\t\t</span>\n\t\t</div>",
  selector: "editDateInput",
  controller: EditDateInputController,
  bindings: {
    startDate: "=date",
    options: "=?",
    dateChange: "&?",
    name: "=?",
    isRequired: "=?",
    notrack: "=?" // необходимость отслеживания изменений
  }
};
exports.EditDateInputComponent = EditDateInputComponent;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTasksRepository = exports.TestPlansRepository = exports.QaReferencesRepository = void 0;
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
var TestPlansRepository = /*#__PURE__*/function (_BaseRepository) {
  TestPlansRepository.$inject = ["$http", "$dialogs", "$longWork", "downloadService"];
  _inherits(TestPlansRepository, _BaseRepository);
  var _super = _createSuper(TestPlansRepository);
  /*@ngInject*/
  function TestPlansRepository($http, $dialogs, $longWork, downloadService) {
    var _this;
    _classCallCheck(this, TestPlansRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.downloadService = downloadService;
    return _this;
  }
  _createClass(TestPlansRepository, [{
    key: "createTestPlan",
    value: function createTestPlan(assignmentId) {
      return this.$http.post("/webapi/grade/testplan", null, {
        params: {
          assignmentId: assignmentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeTestPlan",
    value: function removeTestPlan(testPlanId) {
      return this.$http["delete"]("/webapi/grade/testplan", {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTestPlan",
    value: function getTestPlan(testPlanId) {
      return this.$http.get("/webapi/grade/testplan", {
        params: {
          id: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTestPlanTestLevels",
    value: function getTestPlanTestLevels(testPlanId, assignmentId) {
      return this.$http.get("/webapi/grade/testplan/testlevels", {
        params: {
          testPlanId: testPlanId,
          assignmentId: assignmentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportTestPlan",
    value: function exportTestPlan(testPlanId, sgId, assignmentId, dwId) {
      var query = "testPlanId=".concat(testPlanId);
      if (sgId) query += "&sgId=".concat(sgId);
      if (dwId) query += "&dwId=".concat(dwId);
      if (assignmentId) query += "&assignmentId=".concat(assignmentId);
      return this.downloadService.downloadFile("/webapi/grade/testplan/export?".concat(query), {
        method: "post"
      });
    }
  }, {
    key: "getVprVariants",
    value: function getVprVariants(assignId) {
      return this.$http.get("/webapi/grade/testplan/vprvariants", {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setTestLevel",
    value: function setTestLevel(testPlanId, testLevel) {
      return this.$http.post("/webapi/grade/testplan/level", null, {
        params: {
          testPlanId: testPlanId,
          testLevel: testLevel
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "import",
    value: function _import(testPlanId, assignmentId, dwId) {
      var params = {
        testPlanId: testPlanId,
        assignmentId: assignmentId,
        dwId: dwId,
        confirm: true
      };
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      return this.$http.post("/webapi/grade/testplan/import", null, {
        params: params,
        headers: headers
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAssignmentQaInfo",
    value: function getAssignmentQaInfo(assignmentId) {
      return this.$http.post("/webapi/grade/assignments/".concat(assignmentId, "/get-qa-info")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getDiagnosticWorkQaInfo",
    value: function getDiagnosticWorkQaInfo(dwId) {
      return this.$http.post("/webapi/diagnosticWorks/get-qa-info", null, {
        params: {
          dwId: dwId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return TestPlansRepository;
}(_baseRepository.BaseRepository);
exports.TestPlansRepository = TestPlansRepository;
var QaReferencesRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(QaReferencesRepository, _BaseRepository2);
  var _super2 = _createSuper(QaReferencesRepository);
  function QaReferencesRepository() {
    _classCallCheck(this, QaReferencesRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(QaReferencesRepository, [{
    key: "getTestLevels",
    value: function getTestLevels() {
      return this.$http.get("/webapi/references/testLevels").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTaskDifficults",
    value: function getTaskDifficults() {
      return this.$http.get("/webapi/references/taskDifficults").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTaskMistakeTypes",
    value: function getTaskMistakeTypes() {
      return this.$http.get("/webapi/references/taskMistakeTypes").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getContentElements",
    value: function getContentElements(args) {
      return this.$http.get("/webapi/grade/contentElements", {
        params: args
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return QaReferencesRepository;
}(_baseRepository.BaseRepository);
exports.QaReferencesRepository = QaReferencesRepository;
var TestTasksRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(TestTasksRepository, _BaseRepository3);
  var _super3 = _createSuper(TestTasksRepository);
  function TestTasksRepository() {
    _classCallCheck(this, TestTasksRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(TestTasksRepository, [{
    key: "getTasks",
    value: function getTasks(testPlanId) {
      return this.$http.get("/webapi/grade/testplan/tasks", {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createTask",
    value: function createTask(testPlanId, task) {
      return this.$http.put("/webapi/grade/testplan/tasks", task, {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editTask",
    value: function editTask(task) {
      return this.$http.post("/webapi/grade/testplan/tasks", task).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeTasks",
    value: function removeTasks(testPlanId, ids) {
      return this.$http["delete"]("/webapi/grade/testplan/tasks", {
        params: {
          testPlanId: testPlanId,
          id: ids
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setTaskOrder",
    value: function setTaskOrder(testPlanId, orderedTaskIds) {
      var postData = '=' + orderedTaskIds.join("&=");
      var settings = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          testPlanId: testPlanId
        }
      };
      return this.$http.post("/webapi/grade/testplan/tasks/order", postData, settings).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getProtocol",
    value: function getProtocol(assignId) {
      return this.$http.get("/webapi/grade/testplan/results", {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveProtocol",
    value: function saveProtocol(assignId, saveData) {
      return this.$http.post("/webapi/grade/testplan/results", saveData, {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return TestTasksRepository;
}(_baseRepository.BaseRepository);
exports.TestTasksRepository = TestTasksRepository;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DwTestPlanComponent = void 0;
var _testPlan = __webpack_require__(91);
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
var DwTestPlanController = /*#__PURE__*/function (_BaseTestPlanControll) {
  _inherits(DwTestPlanController, _BaseTestPlanControll);
  var _super = _createSuper(DwTestPlanController);
  function DwTestPlanController() {
    _classCallCheck(this, DwTestPlanController);
    return _super.apply(this, arguments);
  }
  _createClass(DwTestPlanController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.parent = {
        title: "Диагностические работы",
        href: "/"
      };
      this.diagnosticWorkId = parseInt(this.$routeParams.dwId);
    }
  }, {
    key: "reloadPage",
    value: function reloadPage() {
      var _this = this;
      return this.testTasksRepository.getTasks(this.testPlanId).then(function (tasks) {
        return _this.tasks = tasks;
      });
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this2 = this;
      var promise = this.testPlansRepository.getDiagnosticWorkQaInfo(this.diagnosticWorkId).then(function (dwInfo) {
        _this2.dwInfo = dwInfo;
        _this2.readonly = dwInfo.readOnly;
      });
      return promise;
    }
  }, {
    key: "getContentElements",
    value: function getContentElements() {
      var args = {
        certificationType: this.dwInfo.certificationType,
        subjectFipi: this.dwInfo.subjectFipi,
        globalYearId: this.dwInfo.globalYearId,
        grade: this.dwInfo.grade
      };
      return this.qaReferencesRepository.getContentElements(args);
    }
  }, {
    key: "canChangeLevel",
    value: function canChangeLevel() {
      return false;
    }
  }]);
  return DwTestPlanController;
}(_testPlan.BaseTestPlanController);
var DwTestPlanComponent = {
  controller: DwTestPlanController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/journal/testplans/plan/testPlan.component.html"
};
exports.DwTestPlanComponent = DwTestPlanComponent;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestPlanComponent = exports.BaseTestPlanController = void 0;
var _editTask = __webpack_require__(92);
var _multiSelectable = _interopRequireDefault(__webpack_require__(28));
var _extDeferred = __webpack_require__(95);
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
var BaseTestPlanController = /*#__PURE__*/function () {
  BaseTestPlanController.$inject = ["pageContext", "testPlansRepository", "qaReferencesRepository", "testTasksRepository", "appContext", "language", "$appLoader", "$uibModal", "$alerts", "$longWork", "$dialogs", "$routeParams", "$location"];
  /*@ngInject*/
  function BaseTestPlanController(pageContext, testPlansRepository, qaReferencesRepository, testTasksRepository, appContext, language, $appLoader, $uibModal, $alerts, $longWork, $dialogs, $routeParams, $location) {
    _classCallCheck(this, BaseTestPlanController);
    this.pageContext = pageContext;
    this.testPlansRepository = testPlansRepository;
    this.qaReferencesRepository = qaReferencesRepository;
    this.testTasksRepository = testTasksRepository;
    this.appContext = appContext;
    this.language = language;
    this.$appLoader = $appLoader;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$routeParams = $routeParams;
    this.selection = new _multiSelectable["default"]();
    this.sortMode = false;
    this.readonly = false;
    pageContext.clear();
    pageContext.title = this.language.Generic.QualityAssessment.kTestPlan;
    this.initPage();
    var query = $location.search();
    if (query.testPlanId) {
      this.testPlanId = parseInt($location.search().testPlanId);
    }
    this.init();
    this.initSorting();
  }
  _createClass(BaseTestPlanController, [{
    key: "toggleSortMode",
    value: function toggleSortMode() {
      this.sortMode = !this.sortMode;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      var loadDifficults = this.qaReferencesRepository.getTaskDifficults().then(function (difficults) {
        return _this.difficults = difficults;
      });
      var loadMistakeTypes = this.qaReferencesRepository.getTaskMistakeTypes().then(function (mistakeTypes) {
        return _this.mistakeTypes = mistakeTypes;
      });
      var prepares = [loadDifficults, loadMistakeTypes];
      var preparePlan = this.prepare().then(function () {
        if (!_this.testPlanId) {
          _this.tasks = [];
          return Promise.resolve();
        }
        var loadPlan = _this.testPlansRepository.getTestPlan(_this.testPlanId).then(function (testPlan) {
          return _this.testPlan = testPlan;
        });
        var loadLevels = _this.testPlansRepository.getTestPlanTestLevels(_this.testPlanId, _this.assignmentId).then(function (testLevels) {
          return _this.testLevels = testLevels;
        });
        var loadTasks = _this.testTasksRepository.getTasks(_this.testPlanId).then(function (tasks) {
          return _this.tasks = tasks;
        });
        return Promise.all([loadPlan, loadLevels, loadTasks]);
      });
      prepares.push(preparePlan);
      Promise.all(prepares).then(function () {
        _this.ready = true;
        _this.contentElementsReady = _this.getContentElements();
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this2 = this;
      this.ready = false;
      this.$appLoader.show();
      this.reloadPage().then(function () {
        _this2.ready = true;
        _this2.selection.dropSelect();
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "initSorting",
    value: function initSorting() {
      var _this3 = this;
      var fixHelperModified = function fixHelperModified(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function (index) {
          $(this).width($originals.eq(index).width());
        });
        return $helper;
      };
      this.sortableOptions = {
        placeholder: "highlight",
        helper: fixHelperModified,
        stop: function stop(event, element) {
          $(element.item).parent().parent().parent().parent().prevAll().removeClass("not-active");
          $(element.item).parent().parent().parent().parent().nextAll().removeClass("not-active");
          var orderedIds = [];
          for (var ind in _this3.tasks) {
            var task = _this3.tasks[ind];
            task.number = parseInt(ind) + 1;
            orderedIds[ind] = task.id;
          }
          var processing = _this3.$longWork.show();
          _this3.testTasksRepository.setTaskOrder(_this3.testPlanId, orderedIds).then(function () {
            processing.close();
            _this3.$alerts.success(_this3.language.Generic.QualityAssessment.kTestTaskOrderChanged);
          });
        },
        start: function start(event, ui) {
          $(ui.helper).parent().parent().parent().parent().prevAll().addClass("not-active"); //tr
          $(ui.helper).parent().parent().parent().parent().nextAll().addClass("not-active"); //tr
          $(ui.helper).addClass("move");
          $(ui.helper).children().css("border-top", 0);
        }
      };
    }
  }, {
    key: "addTask",
    value: function addTask() {
      var _this4 = this;
      var blankTask = {
        id: 0,
        difficult: null,
        number: 0,
        partNumber: null,
        additional: null,
        contentElements: [],
        mistakeType: null,
        possiblePoints: 1
      };
      var preparePlanId = function preparePlanId() {
        return Promise.resolve(_this4.testPlanId);
      };
      if (!this.testPlanId) {
        preparePlanId = function preparePlanId() {
          return _this4.testPlansRepository.createTestPlan(_this4.assignmentId).then(function (plan) {
            _this4.testPlan = plan;
            _this4.testPlanId = plan.id;
            _this4.testPlansRepository.getTestPlanTestLevels(_this4.testPlanId, _this4.assignmentId).then(function (levels) {
              return _this4.testLevels = levels;
            });
            return plan.id;
          });
        };
      }
      this.commonEdit(blankTask, preparePlanId).then(function (createdTask) {
        if (!createdTask) {
          return;
        }
        _this4.tasks.push(createdTask);
        _this4.$alerts.success(_this4.language.Generic.Grade.kAssignmentAdded);
      });
    }
  }, {
    key: "editTask",
    value: function editTask(task) {
      var _this5 = this;
      this.commonEdit(task, function () {
        return Promise.resolve(_this5.testPlanId);
      }).then(function (editedTask) {
        task = Object.assign(task, editedTask);
        _this5.$alerts.success(_this5.language.Generic.QualityAssessment.kTestTaskSuccessEdition);
      });
    }
  }, {
    key: "commonEdit",
    value: function commonEdit(task, _getTestPlanId) {
      var _this6 = this;
      return this.contentElementsReady.then(function (_contentElements) {
        var modalInstance = _this6.$uibModal.open({
          controller: _editTask.EditTaskComponent.controller,
          controllerAs: _editTask.EditTaskComponent.controllerAs,
          templateUrl: _editTask.EditTaskComponent.templateUrl,
          size: "lg",
          resolve: {
            getTestPlanId: function getTestPlanId() {
              return _getTestPlanId;
            },
            sgId: function sgId() {
              return _this6.sgId;
            },
            contentElements: function contentElements() {
              return _contentElements;
            },
            assignmentId: function assignmentId() {
              return _this6.assignmentId;
            },
            isRusDictation: function isRusDictation() {
              return _this6.isRusDictation;
            },
            taskMistakeTypes: function taskMistakeTypes() {
              return _this6.mistakeTypes;
            },
            testTask: function testTask() {
              return task;
            },
            taskDifficults: function taskDifficults() {
              return _this6.difficults;
            }
          }
        });
        return modalInstance.result;
      });
    }
  }, {
    key: "isRusDictation",
    get: function get() {
      return false;
    }
  }, {
    key: "getDifficultName",
    value: function getDifficultName(key) {
      var _a;
      return (_a = this.difficults.find(function (d) {
        return d.key == key;
      })) === null || _a === void 0 ? void 0 : _a.name;
    }
  }, {
    key: "getMistakeName",
    value: function getMistakeName(key) {
      var _a;
      return (_a = this.mistakeTypes.find(function (d) {
        return d.key == key;
      })) === null || _a === void 0 ? void 0 : _a.name;
    }
  }, {
    key: "getTestLevelName",
    value: function getTestLevelName(key) {
      var _a;
      if (!this.testLevels) {
        return "";
      }
      return (_a = this.testLevels.find(function (d) {
        return d.key == key;
      })) === null || _a === void 0 ? void 0 : _a.name;
    }
  }, {
    key: "deleteTasks",
    value: function deleteTasks() {
      var _this7 = this;
      var selected = this.selection.items;
      if (!selected.length) {
        return;
      }
      var ids = selected.map(function (i) {
        return i.id;
      });
      this.$dialogs.confirmDelete(this.language.Generic.QualityAssessment.kAreYouSureDeleteTestTask).then(function () {
        return _this7.$longWork.execute(_this7.testTasksRepository.removeTasks(_this7.testPlanId, ids));
      }).then(function () {
        _this7.$alerts.success(_this7.language.Generic.QualityAssessment.kTestTasksDeleted);
        _this7.selection.dropSelect();
        _this7.tasks = _this7.tasks.filter(function (t) {
          return ids.indexOf(t.id) == -1;
        });
        _this7.reload();
      });
    }
  }, {
    key: "deletePlan",
    value: function deletePlan() {
      var _this8 = this;
      this.$dialogs.confirmDelete(this.language.Generic.QualityAssessment.kAreYouSureDeleteTestPlan).then(function () {
        return _this8.$longWork.execute(_this8.testPlansRepository.removeTestPlan(_this8.testPlanId));
      }).then(function () {
        _this8.$alerts.success(_this8.language.Generic.QualityAssessment.kSuccessDeleteTestPlan);
        _this8.testPlanId = null;
        _this8.testPlan = null;
        _this8.tasks = [];
      });
    }
  }, {
    key: "changeLevel",
    value: function changeLevel() {
      var _this9 = this;
      if (!this.canChangeLevel()) {
        return;
      }
      var processing = this.$longWork.show();
      this.testPlansRepository.setTestLevel(this.testPlanId, this.testPlan.testLevel).then(function () {
        processing.close();
        _this9.$alerts.success(_this9.language.Generic.QualityAssessment.kTestPlanLevelChanged);
      });
    }
  }, {
    key: "import",
    value: function _import() {
      var _this10 = this;
      if (this.testPlanId && this.tasks.length) {
        this.$dialogs.message(this.language.Generic.QualityAssessment.kForImportSelectEmptyTestPlan);
        return;
      }
      var params = {
        testPlanId: this.testPlanId,
        assignmentId: null,
        dwId: null
      };
      if (this.assignmentId) {
        params.assignmentId = this.assignmentId;
      }
      if (this.diagnosticWorkId) {
        params.dwId = this.diagnosticWorkId;
      }
      var options = {
        url: "/webapi/grade/testplan/import",
        fileExts: function fileExts() {
          return ["xls"];
        },
        queryStringParams: params
      };
      this.$dialogs.uploadFile(this.language.Generic.QualityAssessment.kImportTestPlan, options).then(function (res) {
        if (res.result.showWarnings) {
          var messages = [];
          if (res.result.warnings) {
            res.result.warnings.forEach(function (w) {
              return messages.push(function () {
                return _this10.$dialogs.confirm(w);
              });
            });
          }
          if (res.result.confirms) {
            res.result.confirms.forEach(function (w) {
              return messages.push(function () {
                return _this10.$dialogs.confirm(w);
              });
            });
          }
          _extDeferred.extDeferred.when(messages).then(function () {
            _this10.testPlansRepository["import"](_this10.testPlanId, _this10.assignmentId, params.dwId).then(function () {
              _this10.$alerts.success(_this10.language.Generic.QualityAssessment.kImportTestPlanSuccess);
              _this10.reload();
            });
          });
        } else {
          _this10.$alerts.success(_this10.language.Generic.QualityAssessment.kImportTestPlanSuccess);
          _this10.reload();
        }
      });
    }
  }, {
    key: "export",
    value: function _export() {
      var exportTask = this.testPlansRepository.exportTestPlan(this.testPlanId, this.sgId, this.assignmentId, this.diagnosticWorkId);
      this.$longWork.execute(exportTask);
    }
  }, {
    key: "canDeletePlan",
    value: function canDeletePlan() {
      return !this.readonly && this.assignmentId && !this.diagnosticWorkId;
    }
  }]);
  return BaseTestPlanController;
}();
exports.BaseTestPlanController = BaseTestPlanController;
var TestPlanController = /*#__PURE__*/function (_BaseTestPlanControll) {
  _inherits(TestPlanController, _BaseTestPlanControll);
  var _super = _createSuper(TestPlanController);
  function TestPlanController() {
    _classCallCheck(this, TestPlanController);
    return _super.apply(this, arguments);
  }
  _createClass(TestPlanController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.parent = {
        title: this.language.Common.kJournal,
        href: "/"
      };
      this.pageContext.back = {
        history: true
      };
      if (this.$routeParams.assignId) {
        this.assignmentId = parseInt(this.$routeParams.assignId) || 0;
      }
    }
  }, {
    key: "reloadPage",
    value: function reloadPage() {
      var _this11 = this;
      return this.testPlansRepository.getAssignmentQaInfo(this.assignmentId).then(function (info) {
        _this11.assignInfo = info;
        _this11.testPlanId = info.testPlanId;
        var loadPlan = _this11.testPlansRepository.getTestPlan(_this11.testPlanId).then(function (testPlan) {
          return _this11.testPlan = testPlan;
        });
        var loadLevels = _this11.testPlansRepository.getTestPlanTestLevels(_this11.testPlanId, _this11.assignmentId).then(function (testLevels) {
          return _this11.testLevels = testLevels;
        });
        var loadTasks = _this11.testTasksRepository.getTasks(_this11.testPlanId).then(function (tasks) {
          return _this11.tasks = tasks;
        });
        return Promise.all([loadPlan, loadLevels, loadTasks]);
      });
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this12 = this;
      return this.testPlansRepository.getAssignmentQaInfo(this.assignmentId).then(function (info) {
        var _a, _b;
        _this12.assignInfo = info;
        _this12.sgId = (_a = _this12.assignInfo) === null || _a === void 0 ? void 0 : _a.sgId;
        _this12.readonly = (_b = _this12.assignInfo) === null || _b === void 0 ? void 0 : _b.readOnly;
        _this12.testPlanId = info.testPlanId;
        if (!info.testPlanId) {
          _this12.tasks = [];
        }
        return info;
      });
    }
  }, {
    key: "getContentElements",
    value: function getContentElements() {
      var _a;
      this.sgId = (_a = this.assignInfo) === null || _a === void 0 ? void 0 : _a.sgId;
      return this.qaReferencesRepository.getContentElements({
        sgId: this.sgId
      });
    }
  }, {
    key: "isRusDictation",
    get: function get() {
      var _a;
      return ((_a = this.assignInfo) === null || _a === void 0 ? void 0 : _a.isRusDictation) || false;
    }
  }, {
    key: "canDeletePlan",
    value: function canDeletePlan() {
      var _a;
      return !this.readonly && !((_a = this.assignInfo) === null || _a === void 0 ? void 0 : _a.dwId);
    }
  }, {
    key: "canChangeLevel",
    value: function canChangeLevel() {
      return true;
    }
  }]);
  return TestPlanController;
}(BaseTestPlanController);
var TestPlanComponent = {
  controller: TestPlanController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/journal/testplans/plan/testPlan.component.html"
};
exports.TestPlanComponent = TestPlanComponent;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditTaskComponent = void 0;
var _nsModal = __webpack_require__(50);
var _testplans = __webpack_require__(93);
var _netcityModalCtrl = __webpack_require__(36);
var _treeHelper = __webpack_require__(94);
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
var EditTaskController = /*#__PURE__*/function (_NetCityModalControll) {
  EditTaskController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "testTasksRepository", "$longWork", "contentElements", "getTestPlanId", "testTask", "isRusDictation", "taskDifficults", "taskMistakeTypes", "language"];
  _inherits(EditTaskController, _NetCityModalControll);
  var _super = _createSuper(EditTaskController);
  /*@ngInject*/
  function EditTaskController($scope, $uibModalInstance, changeTracker, $dialogs, testTasksRepository, $longWork, contentElements, getTestPlanId, testTask, isRusDictation, taskDifficults, taskMistakeTypes, language) {
    var _this;
    _classCallCheck(this, EditTaskController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.testTasksRepository = testTasksRepository;
    _this.$longWork = $longWork;
    _this.contentElements = contentElements;
    _this.getTestPlanId = getTestPlanId;
    _this.testTask = testTask;
    _this.isRusDictation = isRusDictation;
    _this.taskDifficults = taskDifficults;
    _this.taskMistakeTypes = taskMistakeTypes;
    _this.language = language;
    _this.treeSettings = {
      mode: 1 | 2,
      selected: {
        nodes: []
      }
    };
    _this.header = language.Generic.QualityAssessment.kAdditionTask;
    if (_this.testTask.id > 0) {
      _this.header = language.Generic.QualityAssessment.kEditionTask;
    }
    _this.removeSelectedElements(_this.contentElements);
    _this.task = Object.assign({}, testTask);
    _this.initContentElements();
    if (_this.task.contentElements && _this.task.contentElements.length) {
      var selected = _this.task.contentElements.map(function (c) {
        return c.id;
      });
      var setSelection = function setSelection(item) {
        item.select = selected.indexOf(item.id) > -1;
      };
      new _treeHelper.TreeVisitor(_this.contentElements).execute(setSelection);
    }
    _this.decimalInputSettings = {
      maxIntegerLength: 3,
      maxDecimalLength: 0
    };
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      }
    }];
    return _this;
  }
  _createClass(EditTaskController, [{
    key: "removeSelectedElements",
    value: function removeSelectedElements(elements) {
      var _this2 = this;
      elements.map(function (v) {
        v.select = false;
        if (v.children) {
          _this2.removeSelectedElements(v.children);
        }
      });
    }
  }, {
    key: "initContentElements",
    value: function initContentElements() {
      if (!this.isRusDictation) {
        this.activeContentElements = this.contentElements;
        return;
      }
      var orthographic = "Орфография";
      var punktogramma = "Пунктуация";
      if (this.task.mistakeType == _testplans.TaskMistakeType.Orthographic) {
        var orthographicNode = this.contentElements.find(function (i) {
          return i.title.indexOf(orthographic) != -1;
        });
        this.activeContentElements = orthographicNode.children;
      } else if (this.task.mistakeType == _testplans.TaskMistakeType.Punktogramma) {
        var punktogrammaNode = this.contentElements.find(function (i) {
          return i.title.indexOf(punktogramma) != -1;
        });
        this.activeContentElements = punktogrammaNode.children;
      } else {
        this.activeContentElements = this.contentElements.filter(function (i) {
          return i.title.indexOf(orthographic) == -1;
        }).filter(function (i) {
          return i.title.indexOf(punktogramma) == -1;
        });
      }
    }
  }, {
    key: "onChangeContentElements",
    value: function onChangeContentElements(selected) {
      var _this3 = this;
      var contentElements = selected.nodes.map(function (n) {
        return {
          id: n.id,
          number: null,
          name: n.title
        };
      });
      if (contentElements.length == this.task.contentElements.length) {
        var newValues = contentElements.filter(function (c) {
          return _this3.task.contentElements.findIndex(function (tc) {
            return tc.id == c.id;
          }) == -1;
        });
        if (newValues.length == 0) {
          return;
        }
      }
      this.task.contentElements = contentElements;
      this.changeTracker.dataWasChanged(this.modalCtx);
      this.$scope.$applyAsync();
    }
  }, {
    key: "displayContentElements",
    get: function get() {
      return this.activeContentElements.length > 0;
    }
  }, {
    key: "displaySelectedElements",
    get: function get() {
      return this.task.contentElements.length > 0;
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      if (this.editForm.$invalid) {
        this.editForm.$displayErrors = true;
        return;
      }
      var processing = this.$longWork.show();
      if (this.task.id) {
        this.testTasksRepository.editTask(this.task).then(function (task) {
          processing.close();
          _this4.$uibModalInstance.close(task);
        });
      } else {
        this.getTestPlanId().then(function (planId) {
          return _this4.testTasksRepository.createTask(planId, _this4.task);
        }).then(function (task) {
          processing.close();
          _this4.$uibModalInstance.close(task);
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return EditTaskController;
}(_netcityModalCtrl.NetCityModalController);
var EditTaskComponent = {
  controller: EditTaskController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/journal/testplans/plan/editTask.component.html"
};
exports.EditTaskComponent = EditTaskComponent;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestLevel = exports.TaskMistakeType = exports.TaskDifficult = void 0;
var TaskDifficult;
exports.TaskDifficult = TaskDifficult;
(function (TaskDifficult) {
  TaskDifficult[TaskDifficult["Basic"] = 0] = "Basic";
  TaskDifficult[TaskDifficult["Advanced"] = 1] = "Advanced";
})(TaskDifficult || (exports.TaskDifficult = TaskDifficult = {}));
var TaskMistakeType;
exports.TaskMistakeType = TaskMistakeType;
(function (TaskMistakeType) {
  TaskMistakeType["Orthographic"] = "Orthographic";
  TaskMistakeType["Punktogramma"] = "Punktogramma";
  TaskMistakeType["Other"] = "Other";
})(TaskMistakeType || (exports.TaskMistakeType = TaskMistakeType = {}));
var TestLevel;
exports.TestLevel = TestLevel;
(function (TestLevel) {
  TestLevel["Municipal"] = "Municipal";
  TestLevel["Regional"] = "Regional";
  TestLevel["Administrative"] = "Administrative";
  TestLevel["Current"] = "Current";
  TestLevel["FederalVpr"] = "FederalVpr";
  TestLevel["FederalFgk"] = "FederalFgk";
})(TestLevel || (exports.TestLevel = TestLevel = {}));

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeVisitor = exports.TreeHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TreeVisitor = /*#__PURE__*/function () {
  function TreeVisitor(tree) {
    _classCallCheck(this, TreeVisitor);
    this.tree = tree;
  }
  _createClass(TreeVisitor, [{
    key: "execute",
    value: function execute(action) {
      this["do"](this.tree, action);
    }
  }, {
    key: "do",
    value: function _do(branch, action) {
      var _iterator = _createForOfIteratorHelper(branch),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          action(item);
          if (item.children) {
            this["do"](item.children, action);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return TreeVisitor;
}();
exports.TreeVisitor = TreeVisitor;
var TreeHelper = /*#__PURE__*/function () {
  function TreeHelper() {
    _classCallCheck(this, TreeHelper);
  }
  _createClass(TreeHelper, [{
    key: "isTreeChanged",
    value: function isTreeChanged(selected, workElements) {
      var selectedNodes = selected.nodes;
      if (selectedNodes.length == workElements.length) {
        var newValues = selectedNodes.filter(function (sn) {
          return workElements.findIndex(function (we) {
            return we.id == sn.id;
          }) == -1;
        });
        if (newValues.length == 0) {
          return false;
        }
      }
      return true;
    }
  }]);
  return TreeHelper;
}();
exports.TreeHelper = TreeHelper;

/***/ }),

/***/ 95:
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