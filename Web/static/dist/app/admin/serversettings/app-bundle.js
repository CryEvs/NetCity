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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ({

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowOpen = exports.openTab = exports.openPopupWindow = exports.closeChildWindows = exports.center = void 0;
window.childWindows = [];
var windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml", "_staffAttest"];
var makeUrlWithToken = function makeUrlWithToken(url) {
  var appendUrl;
  if (url.lastIndexOf("?") != -1) appendUrl = "&";else appendUrl = "?";
  appendUrl += "at=" + appContext.at + "&ver=" + getVer();
  return url + appendUrl;
};
var openPopupWindow = function openPopupWindow(wnd_to, url, width, height) {
  var wnd = window.windows[wnd_to];
  try {
    if (wnd && !wnd.closed && wnd_to != "_qualityAssessmentAnalytics" && wnd_to != "_qualityAssessmentAnalyticsEM" && wnd_to != "_staffAttest") {
      wnd.forceClosing = true;
      wnd.close();
    }
  } catch (e) {
    console.log(e);
  }
  var winOptions = {
    url: makeUrlWithToken(url),
    name: wnd_to,
    specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=" + width + ",height=" + height,
    winChild: wnd
  };
  if (wnd && !wnd.closed && (wnd_to == "_qualityAssessmentAnalytics" || wnd_to == "_qualityAssessmentAnalyticsEM")) {
    wnd.focus();
    return;
  }
  windowOpen(winOptions);
  wnd = window.windows[wnd_to] = winOptions.winChild;
  center(wnd, width, height);
  wnd.focus();
};
exports.openPopupWindow = openPopupWindow;
var openTab = function openTab(url, target) {
  var link = document.createElement('a');
  link.href = makeUrlWithToken(url);
  link.target = target || "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
exports.openTab = openTab;
var center = function center(wnd, width, height) {
  try {
    if (!wnd || !wnd.screen) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
  if (typeof bowser !== "undefined") {
    if (bowser.webkit && parseInt(bowser.version) < 20) {
      return;
    }
  }
  var dw = (wnd.screen.availWidth - width) / 2;
  var dh = (wnd.screen.availHeight - height) / 2;
  wnd.moveTo(dw, dh);
};
exports.center = center;
var windowOpen = function windowOpen(winOptions) {
  var opener, wnd;
  var url = winOptions.url || "";
  var name = winOptions.name || "";
  var specs = winOptions.specs || "";
  wnd = winOptions.winChild;
  if (wnd && !wnd.closed) {
    wnd.close();
  }
  wnd = window.open(url, name, specs);
  winOptions.winChild = wnd;
  opener = wnd.opener;
  while (opener && !opener.closed) {
    try {
      opener.childWindows.push(wnd);
      opener = opener.opener;
    } catch (error) {
      break;
    }
  }
  var closeWindow = windowsNotCloseNames.indexOf(name) < 0;
  if (closeWindow) {
    $(window).on("unload", function (e) {
      if (wnd && !wnd.closed) {
        wnd.forceClosing = true;
        return wnd.close();
      }
    });
  }
};
exports.windowOpen = windowOpen;
var closeChildWindows = function closeChildWindows() {
  var k;
  k = window.childWindows.length;
  while (k > 0) {
    if (window.childWindows[k - 1] && !window.childWindows.closed) {
      window.childWindows[k - 1].close();
    }
    window.childWindows.pop();
    k = k - 1;
  }
};
exports.closeChildWindows = closeChildWindows;

/***/ }),

/***/ 167:
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

/***/ 20:
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

/***/ 21:
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

/***/ 22:
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrganizationsComponent = void 0;
var FuncTypes = _interopRequireWildcard(__webpack_require__(228));
var _organizationTreeLevels = __webpack_require__(229);
var Modes = _interopRequireWildcard(__webpack_require__(167));
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

/***/ 228:
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

/***/ 229:
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

/***/ 23:
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _settings = __webpack_require__(240);
var _settingsBlocks = __webpack_require__(241);
var _serverSettings = __webpack_require__(242);
var _smsSettings = __webpack_require__(244);
var _fileAttachmentsSettings = __webpack_require__(245);
var _ipAddress = __webpack_require__(247);
var _pushSettings = __webpack_require__(248);
var _settingsProvider = __webpack_require__(28);
var _schoolInfoSettings = __webpack_require__(249);
var _mailSettings = __webpack_require__(250);
var _movePeriodsSettings = __webpack_require__(252);
var _dateInput = __webpack_require__(254);
var _securitySettings = __webpack_require__(255);
var _integrationSettings = __webpack_require__(256);
var _chatsSettings = __webpack_require__(258);
var _userAccountsSettings = __webpack_require__(259);
var _userAuthorizationSettings = __webpack_require__(260);
var _popupwindowonloginscreenSettings = __webpack_require__(261);
var _checkConnection = __webpack_require__(262);
var _getServerSettings = __webpack_require__(263);
var _videoconfSettings = __webpack_require__(264);
var _orgVideoconfSettings = __webpack_require__(265);
var _portfolioSettings = __webpack_require__(267);
var _controller = __webpack_require__(269);
var _repository = __webpack_require__(270);
__webpack_require__(271);
var _authClients = __webpack_require__(275);
var _authClients2 = __webpack_require__(277);
var _repositories = __webpack_require__(26);
var _portfolio = __webpack_require__(278);
var _module = angular.module("irtech.netcity.admin.serversettings", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", "ui.sortable"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/", _settingsBlocks.SettingsBlocksComponent).when("/orgvideoconf", _orgVideoconfSettings.OrgVideoConfSettingsComponent).when("/appid", _controller.AppIdComponent).when("/authclients", _authClients.AuthClientsComponent).otherwise("/");
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.service("settingsProvider", _settingsProvider.SettingsProvider).service("settingsRepository", _settings.SettingsRepository).service("checkConnectionService", _checkConnection.CheckConnectionService).service("getServerSettingsService", _getServerSettings.GetServerSettingsService).service("appIdRepository", _repository.AppIdRepository).service("authClientsRepository", _authClients2.AuthClientsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("portfolioRepository", _portfolio.PortfolioRepository).directive("ipAddress", _ipAddress.IpAddressDirective).component("editDateRangeComponent", _dateInput.EditDateRangeComponent).component(_serverSettings.ServerSettingsComponent.selector, _serverSettings.ServerSettingsComponent).component(_smsSettings.SmsSettingsComponent.selector, _smsSettings.SmsSettingsComponent).component(_pushSettings.PushSettingsComponent.selector, _pushSettings.PushSettingsComponent).component(_mailSettings.MailSettingsComponent.selector, _mailSettings.MailSettingsComponent).component(_movePeriodsSettings.MovePeriodsSettingsComponent.selector, _movePeriodsSettings.MovePeriodsSettingsComponent).component(_securitySettings.SecuritySettingsComponent.selector, _securitySettings.SecuritySettingsComponent).component(_integrationSettings.IntegrationSettingsComponent.selector, _integrationSettings.IntegrationSettingsComponent).component(_chatsSettings.ChatsSettingsComponent.selector, _chatsSettings.ChatsSettingsComponent).component(_userAccountsSettings.UserAccountsSettingsComponent.selector, _userAccountsSettings.UserAccountsSettingsComponent).component(_userAuthorizationSettings.UserAuthorizationSettingsComponent.selector, _userAuthorizationSettings.UserAuthorizationSettingsComponent).component(_popupwindowonloginscreenSettings.PopUpWindowOnLoginScreenSettingsComponent.selector, _popupwindowonloginscreenSettings.PopUpWindowOnLoginScreenSettingsComponent).component(_schoolInfoSettings.SchoolInfoSettingsComponent.selector, _schoolInfoSettings.SchoolInfoSettingsComponent).component(_fileAttachmentsSettings.FileAttachmentsSettingsComponent.selector, _fileAttachmentsSettings.FileAttachmentsSettingsComponent).component(_videoconfSettings.VideoConfSettingsComponent.selector, _videoconfSettings.VideoConfSettingsComponent).component(_portfolioSettings.PortfolioSettingsComponent.selector, _portfolioSettings.PortfolioSettingsComponent).config(config);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsRepository = void 0;
var _baseRepository = __webpack_require__(27);
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsBlocksComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SettingsBlocksController = /*#__PURE__*/function () {
  function SettingsBlocksController(appContext, pageContext, $http, $appLoader, $q, getServerSettingsService, settingsRepository, settingsProvider, language) {
    _classCallCheck(this, SettingsBlocksController);
    this.$http = $http;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.getServerSettingsService = getServerSettingsService;
    this.settingsRepository = settingsRepository;
    this.settingsProvider = settingsProvider;
    this.language = language;
    pageContext.title = this.language.Generic.ServAdmin.kTitleOptions + " <i>" + appContext.productName + "</i>";
    pageContext.parent = null;
    pageContext.back = null;
    this.load();
  }
  _createClass(SettingsBlocksController, [{
    key: "load",
    value: function load() {
      var _this = this;
      var promises = [];
      promises.push(this.getServerSettingsService.load());
      var getEmptyGlobalYears = this.$http.get("/webapi/globalyears").then(function (response) {
        _this.emptyGlobalYears = !response.data.length;
      });
      promises.push(getEmptyGlobalYears);
      var getPushNotificationsEnabled = this.settingsProvider.ServerSettings.SystemSettings.PushNotificationsEnabled().then(function (pushNotificationsEnabled) {
        _this.pushNotificationsEnabled = pushNotificationsEnabled;
      });
      promises.push(getPushNotificationsEnabled);
      var getModuleChats = this.settingsProvider.ServerSettings.SystemSettings.ModuleChats().then(function (moduleChats) {
        _this.moduleChats = moduleChats;
      });
      promises.push(getModuleChats);
      var getModuleDistanceLearning = this.settingsProvider.ServerSettings.SystemSettings.ModuleDistanceLearning().then(function (moduleDistanceLearning) {
        _this.moduleDistanceLearning = moduleDistanceLearning;
      });
      promises.push(getModuleDistanceLearning);
      var getEditableDefaultPortfolioGroups = this.settingsProvider.ServerSettings.SystemSettings.EditableDefaultPortfolioGroups().then(function (editableDefaultPortfolioGroups) {
        _this.editableDefaultPortfolioGroups = editableDefaultPortfolioGroups;
      });
      promises.push(getEditableDefaultPortfolioGroups);
      this.$q.all(promises).then(function () {
        _this.dataReady = true;
        _this.$appLoader.hide();
        setTimeout(function () {
          angular.element(document).trigger("accordion-ready");
        });
      });
    }
  }]);
  return SettingsBlocksController;
}();
var SettingsBlocksComponent = {
  controller: SettingsBlocksController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settings.blocks.component.html"
};
exports.SettingsBlocksComponent = SettingsBlocksComponent;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var ServerSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(ServerSettingsController, _BaseSettingsControll);
  var _super = _createSuper(ServerSettingsController);
  function ServerSettingsController(language, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q, $location) {
    var _this;
    _classCallCheck(this, ServerSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.$location = $location;
    _this.data = {
      serverSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(ServerSettingsController, [{
    key: "load",
    value: function load() {
      this.data.serverSettings = this.getServerSettingsService.getCommonServerSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.validate()) {
        var work = this.settingsRepository.saveCommonServerSettings(this.data.serverSettings);
        this.$longWork.execute(work).then(function () {
          _this2.changeTracker.clearDataChanges();
          _this2.$alerts.success(_this2.language.Generic.ServAdmin.kServerSettingsWasSaved);
        });
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var minTrustedAppCode = 6;
      if (!this.form.$valid) {
        return false;
      }
      var ipAdress = this.data.serverSettings.address;
      if (ipAdress.trim() == "" || ipAdress.replace("http://", "").trim() == "" || ipAdress.replace("https://", "").trim() == "") {
        this.$dialogs.message(this.language.Generic.ServAdmin.kIPAddressCantBeEmpty);
        return false;
      }
      if (ipAdress.indexOf("https://") != 0 && ipAdress.indexOf("http://") != 0) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kIPAddressMustBeginWithHttp);
        return false;
      }
      var code = this.data.serverSettings.trustedAppCode;
      if (code.length != 0 && code.length < minTrustedAppCode) {
        this.$dialogs.message(this.language.Generic.Common.kErrorTrustedAppCodeMustHave);
        return false;
      }
      if (code.charAt(0) == ' ' || code.charAt(code.length - 1) == ' ') {
        this.$dialogs.message(this.language.Generic.Common.kErrTrustedAppCodeSurroundSpaces);
        return false;
      }
      return true;
    }
  }, {
    key: "goToApp",
    value: function goToApp() {
      this.$location.path("/appid");
    }
  }, {
    key: "goToAuthClients",
    value: function goToAuthClients() {
      this.$location.path("/authclients");
    }
  }, {
    key: "proxyAddressError",
    value: function proxyAddressError() {
      return this.language.Generic.ServAdmin.kInvalidIPAddress;
    }
  }]);
  return ServerSettingsController;
}(_settings.BaseSettingsController);
var ServerSettingsComponent = {
  selector: "serverSettings",
  controller: ServerSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/server.settings.component.html"
};
exports.ServerSettingsComponent = ServerSettingsComponent;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSettingsController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseSettingsController = /*#__PURE__*/function () {
  function BaseSettingsController($alerts, changeTracker, settingsRepository) {
    _classCallCheck(this, BaseSettingsController);
    this.$alerts = $alerts;
    this.changeTracker = changeTracker;
    this.settingsRepository = settingsRepository;
  }
  _createClass(BaseSettingsController, [{
    key: "save",
    value: function save() {}
  }, {
    key: "successSave",
    value: function successSave(message) {
      this.changeTracker.clearDataChanges();
      this.$alerts.success(message);
    }
  }]);
  return BaseSettingsController;
}();
exports.BaseSettingsController = BaseSettingsController;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _common = __webpack_require__(123);
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
var SmsSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(SmsSettingsController, _BaseSettingsControll);
  var _super = _createSuper(SmsSettingsController);
  function SmsSettingsController(language, appContext, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q) {
    var _this;
    _classCallCheck(this, SmsSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      smsSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(SmsSettingsController, [{
    key: "load",
    value: function load() {
      this.data.smsSettings = this.getServerSettingsService.getSmsSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var work = this.settingsRepository.saveSmsSettings(this.data.smsSettings);
      this.$longWork.execute(work).then(function () {
        return _this2.successSave(_this2.language.Generic.ServAdmin.SmsSettingsSaved);
      });
    }
    // todo: завел пока на старой логике
  }, {
    key: "smsRegistry",
    value: function smsRegistry() {
      var _this3 = this;
      this.changeTracker.check().then(function () {
        return _this3.$dialogs.confirm(_this3.language.Generic.ServAdmin.kSMSRegistryConfirm);
      }).then(function () {
        return jsSubmit({
          action: "/asp/administration/saveOptions.asp",
          data: {
            SMSReg: 1
          },
          showProcessing: true,
          onSuccess: function onSuccess(response) {
            _this3.$alerts.success(response.message);
          }
        });
      });
    }
  }, {
    key: "openPrint",
    value: function openPrint() {
      var wnd = null;
      var winOptions = {
        url: "/asp/administration/SMSParamsPrint.asp?SID=0&RP=&at=" + this.appContext.at,
        name: "_blank",
        specs: "status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620",
        winChild: wnd
      };
      (0, _common.windowOpen)(winOptions);
      wnd = winOptions.winChild;
      (0, _common.center)(wnd, 750, 560);
    }
  }]);
  return SmsSettingsController;
}(_settings.BaseSettingsController);
var SmsSettingsComponent = {
  selector: "smsSettings",
  controller: SmsSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/sms.settings.component.html"
};
exports.SmsSettingsComponent = SmsSettingsComponent;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAttachmentsSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _settings2 = __webpack_require__(246);
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
var FileAttachmentsSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(FileAttachmentsSettingsController, _BaseSettingsControll);
  var _super = _createSuper(FileAttachmentsSettingsController);
  function FileAttachmentsSettingsController(language, $alerts, $dialogs, $longWork, settingsRepository, checkConnectionService, getServerSettingsService, changeTracker, $q) {
    var _this;
    _classCallCheck(this, FileAttachmentsSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.settingsRepository = settingsRepository;
    _this.checkConnectionService = checkConnectionService;
    _this.getServerSettingsService = getServerSettingsService;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      fileAttachmentSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(FileAttachmentsSettingsController, [{
    key: "load",
    value: function load() {
      this.data.fileAttachmentSettings = this.getServerSettingsService.getFileAttachmentsSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var settings = this.data.fileAttachmentSettings;
      var checkUrl = settings.fileStorageApiAddress;
      var check;
      if (settings.fileStorageType == _settings2.FileStorageType.Internal && !checkUrl) {
        check = Promise.resolve();
      } else {
        check = this.settingsRepository.getCheckConnectionResults([{
          url: checkUrl
        }]).then(function (results) {
          return _this2.checkReady(results[0]);
        });
      }
      var work = check.then(function () {
        return _this2.settingsRepository.saveFileAttachmentsSettings(settings);
      });
      this.$longWork.execute(work).then(function () {
        return _this2.successSave(_this2.language.Generic.ServAdmin.kFileAttachmentsSettingsWasSaved);
      });
    }
  }, {
    key: "checkReady",
    value: function checkReady(response) {
      if (response.error) {
        this.$dialogs.error(response.error);
        return Promise.reject();
      }
      return this.$dialogs.confirm(response.confirm);
    }
  }]);
  return FileAttachmentsSettingsController;
}(_settings.BaseSettingsController);
var FileAttachmentsSettingsComponent = {
  selector: "fileAttachmentsSettings",
  controller: FileAttachmentsSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/file.attachments.settings.component.html"
};
exports.FileAttachmentsSettingsComponent = FileAttachmentsSettingsComponent;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerSetting = exports.FileStorageType = void 0;
// Перечисление настроек сервера в БД
var ServerSetting;
exports.ServerSetting = ServerSetting;
(function (ServerSetting) {
  ServerSetting[ServerSetting["IdInstall"] = 0] = "IdInstall";
  ServerSetting[ServerSetting["Address"] = 1] = "Address";
  ServerSetting[ServerSetting["ProxyAddress"] = 12] = "ProxyAddress";
  ServerSetting[ServerSetting["TrustedAppCode"] = 2] = "TrustedAppCode";
  ServerSetting[ServerSetting["MailHost"] = 4] = "MailHost";
  ServerSetting[ServerSetting["MailUseSsl"] = 10] = "MailUseSsl";
  ServerSetting[ServerSetting["MailPort"] = 5] = "MailPort";
  ServerSetting[ServerSetting["MailUser"] = 6] = "MailUser";
  ServerSetting[ServerSetting["MailPassword"] = 7] = "MailPassword";
  ServerSetting[ServerSetting["MailFrom"] = 8] = "MailFrom";
  ServerSetting[ServerSetting["ServAdminMail"] = 11] = "ServAdminMail";
  ServerSetting[ServerSetting["AuxAddresses"] = 13] = "AuxAddresses";
  ServerSetting[ServerSetting["AllowEditTimezoneInOo"] = 14] = "AllowEditTimezoneInOo";
  // Настройки интеграции
  ServerSetting[ServerSetting["EServicesUrl"] = 101] = "EServicesUrl";
  ServerSetting[ServerSetting["EServicesExternalUrl"] = 113] = "EServicesExternalUrl";
  ServerSetting[ServerSetting["ContingentUrl"] = 102] = "ContingentUrl";
  ServerSetting[ServerSetting["NetCityPooUrl"] = 103] = "NetCityPooUrl";
  ServerSetting[ServerSetting["RegionUrl"] = 104] = "RegionUrl";
  ServerSetting[ServerSetting["ClientIdForSync"] = 105] = "ClientIdForSync";
  ServerSetting[ServerSetting["MsokoUrl"] = 106] = "MsokoUrl";
  ServerSetting[ServerSetting["YaCounterCode"] = 107] = "YaCounterCode";
  ServerSetting[ServerSetting["StaffAttestUrl"] = 109] = "StaffAttestUrl";
  ServerSetting[ServerSetting["StaffAttestLogin"] = 110] = "StaffAttestLogin";
  ServerSetting[ServerSetting["StaffAttestSecret"] = 111] = "StaffAttestSecret";
  ServerSetting[ServerSetting["FiasAddressServiceUrl"] = 112] = "FiasAddressServiceUrl";
  ServerSetting[ServerSetting["ExternalFiasAddressServiceUrl"] = 114] = "ExternalFiasAddressServiceUrl";
  ServerSetting[ServerSetting["EducPortalUrl"] = 115] = "EducPortalUrl";
  ServerSetting[ServerSetting["EducPortalApiUrl"] = 121] = "EducPortalApiUrl";
  ServerSetting[ServerSetting["PFDOClientId"] = 117] = "PFDOClientId";
  ServerSetting[ServerSetting["PFDOClientSecret"] = 118] = "PFDOClientSecret";
  ServerSetting[ServerSetting["PFDOUserName"] = 119] = "PFDOUserName";
  ServerSetting[ServerSetting["PFDOPassword"] = 120] = "PFDOPassword";
  ServerSetting[ServerSetting["SOLOEsaUrl"] = 125] = "SOLOEsaUrl";
  ServerSetting[ServerSetting["SOLOEsaClientId"] = 122] = "SOLOEsaClientId";
  ServerSetting[ServerSetting["SOLOEsaClientSecret"] = 123] = "SOLOEsaClientSecret";
  ServerSetting[ServerSetting["SOLORbooApiUrl"] = 124] = "SOLORbooApiUrl";
  ServerSetting[ServerSetting["SoloRefsApiUrl"] = 126] = "SoloRefsApiUrl";
  ServerSetting[ServerSetting["IdentityServerUrl"] = 127] = "IdentityServerUrl";
  ServerSetting[ServerSetting["SoloEnrollmentUrl"] = 128] = "SoloEnrollmentUrl";
  ServerSetting[ServerSetting["SoloSchoolEnrollmentUrl"] = 129] = "SoloSchoolEnrollmentUrl";
  ServerSetting[ServerSetting["RabbitMqConnection"] = 130] = "RabbitMqConnection";
  ServerSetting[ServerSetting["SchoolFoodUrl"] = 131] = "SchoolFoodUrl";
  ServerSetting[ServerSetting["SchoolFoodPassword"] = 132] = "SchoolFoodPassword";
  ServerSetting[ServerSetting["NetCityPooManagementUrl"] = 135] = "NetCityPooManagementUrl";
  // Учетные записи пользователей
  ServerSetting[ServerSetting["BlockSimilars"] = 201] = "BlockSimilars";
  ServerSetting[ServerSetting["BlockFastInput"] = 202] = "BlockFastInput";
  ServerSetting[ServerSetting["OnOrderImportMode"] = 203] = "OnOrderImportMode";
  ServerSetting[ServerSetting["RequireIdentityData"] = 204] = "RequireIdentityData";
  ServerSetting[ServerSetting["MoveInSourceEServiceOnly"] = 205] = "MoveInSourceEServiceOnly";
  ServerSetting[ServerSetting["easyImport"] = 206] = "easyImport";
  // Настройки авторизации пользователей
  ServerSetting[ServerSetting["EsiaAuth"] = 301] = "EsiaAuth";
  // Настройки протокола авторизации ЕСИА
  ServerSetting[ServerSetting["EsiaSaml"] = 316] = "EsiaSaml";
  ServerSetting[ServerSetting["EsiaOAuth"] = 317] = "EsiaOAuth";
  ServerSetting[ServerSetting["EsiaOAuthServerUrl"] = 318] = "EsiaOAuthServerUrl";
  ServerSetting[ServerSetting["EsiaOAuthICMnemonics"] = 319] = "EsiaOAuthICMnemonics";
  ServerSetting[ServerSetting["EsiaOAuthCertificatePass"] = 320] = "EsiaOAuthCertificatePass";
  ServerSetting[ServerSetting["EsiaIrtechIdentityAuth"] = 324] = "EsiaIrtechIdentityAuth";
  //
  ServerSetting[ServerSetting["EsiaLoginPage"] = 302] = "EsiaLoginPage";
  ServerSetting[ServerSetting["EsiaLogoutUserPage"] = 303] = "EsiaLogoutUserPage";
  ServerSetting[ServerSetting["EsiaLinkUserPage"] = 304] = "EsiaLinkUserPage";
  ServerSetting[ServerSetting["IrtechAuth"] = 305] = "IrtechAuth";
  ServerSetting[ServerSetting["EsiaButtonAuth"] = 306] = "EsiaButtonAuth";
  ServerSetting[ServerSetting["EsiaMainAuth"] = 307] = "EsiaMainAuth";
  ServerSetting[ServerSetting["WindowsAuth"] = 308] = "WindowsAuth";
  ServerSetting[ServerSetting["BlockEsiaUserLogin"] = 309] = "BlockEsiaUserLogin";
  ServerSetting[ServerSetting["RequireEsiaAdminLoginEachEntrance"] = 310] = "RequireEsiaAdminLoginEachEntrance";
  ServerSetting[ServerSetting["RequireEsiaAdminLoginFirstEntrance"] = 326] = "RequireEsiaAdminLoginFirstEntrance";
  ServerSetting[ServerSetting["RequireEsiaAdminLoginAfterChangePass"] = 311] = "RequireEsiaAdminLoginAfterChangePass";
  ServerSetting[ServerSetting["RequireEsiaAdminLoginNever"] = 327] = "RequireEsiaAdminLoginNever";
  ServerSetting[ServerSetting["EnableNotice"] = 312] = "EnableNotice";
  ServerSetting[ServerSetting["NoticeTitle"] = 321] = "NoticeTitle";
  ServerSetting[ServerSetting["NoticeDisplayText"] = 313] = "NoticeDisplayText";
  ServerSetting[ServerSetting["NoticeButtonText"] = 322] = "NoticeButtonText";
  ServerSetting[ServerSetting["NoticeStartDate"] = 314] = "NoticeStartDate";
  ServerSetting[ServerSetting["NoticeEndDate"] = 315] = "NoticeEndDate";
  ServerSetting[ServerSetting["AllowedReturnUrl"] = 323] = "AllowedReturnUrl";
  ServerSetting[ServerSetting["OpenAuthPublicKey"] = 325] = "OpenAuthPublicKey";
  // Системные настройки (не отображаются в интерфейсе)
  ServerSetting[ServerSetting["ModuleQaEnabledForAll"] = 401] = "ModuleQaEnabledForAll";
  ServerSetting[ServerSetting["ModuleQaSchoolsCondition"] = 402] = "ModuleQaSchoolsCondition";
  ServerSetting[ServerSetting["ModuleStatReports"] = 403] = "ModuleStatReports";
  ServerSetting[ServerSetting["ModuleStatReportsSchoolsCondition"] = 404] = "ModuleStatReportsSchoolsCondition";
  ServerSetting[ServerSetting["IntegrationNewDiskEnabledForAll"] = 405] = "IntegrationNewDiskEnabledForAll";
  ServerSetting[ServerSetting["IntegrationNewDiskSchoolsCondition"] = 406] = "IntegrationNewDiskSchoolsCondition";
  ServerSetting[ServerSetting["ShowMnsForms"] = 407] = "ShowMnsForms";
  ServerSetting[ServerSetting["YaCountersOff"] = 408] = "YaCountersOff";
  ServerSetting[ServerSetting["ModuleRegion"] = 409] = "ModuleRegion";
  ServerSetting[ServerSetting["IsRegionEMForSchool"] = 410] = "IsRegionEMForSchool";
  ServerSetting[ServerSetting["ModuleEServices"] = 411] = "ModuleEServices";
  ServerSetting[ServerSetting["IntegrationNewDiskTokens"] = 412] = "IntegrationNewDiskTokens";
  ServerSetting[ServerSetting["IntegrationNewDiskMainToken"] = 413] = "IntegrationNewDiskMainToken";
  ServerSetting[ServerSetting["PaidServicesUrl"] = 414] = "PaidServicesUrl";
  ServerSetting[ServerSetting["SchoolCardUrl"] = 415] = "SchoolCardUrl";
  ServerSetting[ServerSetting["YaClassUrl"] = 416] = "YaClassUrl";
  ServerSetting[ServerSetting["MODULE_StaffAttest"] = 417] = "MODULE_StaffAttest";
  ServerSetting[ServerSetting["ModuleTalentStudents"] = 418] = "ModuleTalentStudents";
  ServerSetting[ServerSetting["RestrictStudentsAndParents"] = 419] = "RestrictStudentsAndParents";
  ServerSetting[ServerSetting["EnableStudentsDataQuality"] = 420] = "EnableStudentsDataQuality";
  ServerSetting[ServerSetting["ModuleSchoolMeals"] = 421] = "ModuleSchoolMeals";
  ServerSetting[ServerSetting["LaIntegrationCourses"] = 422] = "LaIntegrationCourses";
  ServerSetting[ServerSetting["ExternalAccessEmUserToSchool"] = 423] = "ExternalAccessEmUserToSchool";
  ServerSetting[ServerSetting["EnableCertificatesDO"] = 424] = "EnableCertificatesDO";
  ServerSetting[ServerSetting["IntegrationNewDiskConstructorUrl"] = 425] = "IntegrationNewDiskConstructorUrl";
  ServerSetting[ServerSetting["EnableLessonMaps"] = 426] = "EnableLessonMaps";
  ServerSetting[ServerSetting["EnableIndividualSupport"] = 427] = "EnableIndividualSupport";
  ServerSetting[ServerSetting["ModuleSocialPassportEnabledForAll"] = 428] = "ModuleSocialPassportEnabledForAll";
  ServerSetting[ServerSetting["ModuleSocialPassportSchoolsCondition"] = 429] = "ModuleSocialPassportSchoolsCondition";
  ServerSetting[ServerSetting["ModuleParentPayRecords"] = 430] = "ModuleParentPayRecords";
  ServerSetting[ServerSetting["PreSchoolCmAttendance"] = 431] = "PreSchoolCmAttendance";
  ServerSetting[ServerSetting["PfdoIntegrationType"] = 433] = "PfdoIntegrationType";
  ServerSetting[ServerSetting["EditCertificatesDOOnlyByRegion"] = 434] = "EditCertificatesDOOnlyByRegion";
  ServerSetting[ServerSetting["PfdoIntegrationDontRequireEmail"] = 435] = "PfdoIntegrationDontRequireEmail";
  ServerSetting[ServerSetting["PushNotificationsEnabled"] = 436] = "PushNotificationsEnabled";
  ServerSetting[ServerSetting["SoloIntegration"] = 437] = "SoloIntegration";
  ServerSetting[ServerSetting["ModuleSummerTimeSpending"] = 438] = "ModuleSummerTimeSpending";
  ServerSetting[ServerSetting["IntegrationNewDiskFinGramUrl"] = 439] = "IntegrationNewDiskFinGramUrl";
  ServerSetting[ServerSetting["IntegrationMolcentr"] = 440] = "IntegrationMolcentr";
  ServerSetting[ServerSetting["ChatsIntegration"] = 463] = "ChatsIntegration";
  ServerSetting[ServerSetting["GisRuoIntegration"] = 460] = "GisRuoIntegration";
  ServerSetting[ServerSetting["modulePfrIntegration"] = 467] = "modulePfrIntegration";
  // Настройки безопасности
  ServerSetting[ServerSetting["IpFilter"] = 501] = "IpFilter";
  ServerSetting[ServerSetting["RestrictNumericPasswords"] = 502] = "RestrictNumericPasswords";
  ServerSetting[ServerSetting["BlockByLt"] = 508] = "BlockByLt";
  ServerSetting[ServerSetting["BlockByIp"] = 503] = "BlockByIp";
  ServerSetting[ServerSetting["BlockByEducOrgAndLogin"] = 504] = "BlockByEducOrgAndLogin";
  ServerSetting[ServerSetting["MaxSessionIdleTime"] = 505] = "MaxSessionIdleTime";
  ServerSetting[ServerSetting["MinLoginLength"] = 506] = "MinLoginLength";
  ServerSetting[ServerSetting["MinPasswordLength"] = 507] = "MinPasswordLength";
  ServerSetting[ServerSetting["SecureApi"] = 510] = "SecureApi";
  // Настройки для всплывающего окна на экране входа
  ServerSetting[ServerSetting["EnablePopUp"] = 601] = "EnablePopUp";
  ServerSetting[ServerSetting["PopUpDisplayText"] = 602] = "PopUpDisplayText";
  ServerSetting[ServerSetting["PopUpButtonText"] = 603] = "PopUpButtonText";
  ServerSetting[ServerSetting["PopUpStartDate"] = 604] = "PopUpStartDate";
  ServerSetting[ServerSetting["PopUpEndDate"] = 605] = "PopUpEndDate";
  // Настройки для запроса основания при изменении карточки ОО
  ServerSetting[ServerSetting["ReasonForChangeSchoolCard"] = 606] = "ReasonForChangeSchoolCard";
  ServerSetting[ServerSetting["EM_MayEditExtraSchoolInfo"] = 607] = "EM_MayEditExtraSchoolInfo";
  //Настройки SMS
  ServerSetting[ServerSetting["EnableSMS"] = 608] = "EnableSMS";
  // Настройки PUSH уведомлений
  ServerSetting[ServerSetting["PushServerKey"] = 801] = "PushServerKey";
  ServerSetting[ServerSetting["PushSenderId"] = 802] = "PushSenderId";
  // Настройки только для целей отладки и тестирования (не отображаются в интерфейсе)
  ServerSetting[ServerSetting["DebugFlag1"] = 10001] = "DebugFlag1";
  // Настройки файловых вложений
  ServerSetting[ServerSetting["FileStorageType"] = 10101] = "FileStorageType";
  ServerSetting[ServerSetting["FileStorageApiAddress"] = 10102] = "FileStorageApiAddress";
})(ServerSetting || (exports.ServerSetting = ServerSetting = {}));
var FileStorageType;
exports.FileStorageType = FileStorageType;
(function (FileStorageType) {
  FileStorageType["Internal"] = "Internal";
  FileStorageType["FileStorageApi"] = "FileStorageApi";
})(FileStorageType || (exports.FileStorageType = FileStorageType = {}));

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IpAddressDirective = void 0;
var IpAddressDirective = function IpAddressDirective() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function link(scope, element, attrs, ngModel) {
      var opts = {
        ipMask: "9{1,3}.9{1,3}.9{1,3}.9{1,3}"
      };
      element.inputmask(opts.ipMask);
      ngModel.$validators.ipAddressMask = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        var blocks = viewValue.split(".");
        if (blocks.length === 4) {
          return blocks.every(function (x) {
            return parseInt(x, 10) >= 0 && parseInt(x, 10) <= 255;
          });
        }
        return false;
      };
    }
  };
};
exports.IpAddressDirective = IpAddressDirective;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PushSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var PushSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(PushSettingsController, _BaseSettingsControll);
  var _super = _createSuper(PushSettingsController);
  function PushSettingsController(language, $alerts, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q) {
    var _this;
    _classCallCheck(this, PushSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      pushSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(PushSettingsController, [{
    key: "load",
    value: function load() {
      this.data.pushSettings = this.getServerSettingsService.getPushSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var work = this.settingsRepository.savePushSettings(this.data.pushSettings);
      this.$longWork.execute(work).then(function () {
        return _this2.successSave(_this2.language.Generic.ServAdmin.PushSettingsSaved);
      });
    }
  }]);
  return PushSettingsController;
}(_settings.BaseSettingsController);
var PushSettingsComponent = {
  selector: "pushSettings",
  controller: PushSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/push.settings.component.html"
};
exports.PushSettingsComponent = PushSettingsComponent;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolInfoSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var SchoolInfoSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(SchoolInfoSettingsController, _BaseSettingsControll);
  var _super = _createSuper(SchoolInfoSettingsController);
  function SchoolInfoSettingsController(language, $alerts, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q) {
    var _this;
    _classCallCheck(this, SchoolInfoSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      schoolInfoSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(SchoolInfoSettingsController, [{
    key: "load",
    value: function load() {
      this.data.schoolInfoSettings = this.getServerSettingsService.getSchoolInfoSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var work = this.settingsRepository.saveSchoolInfoSettings(this.data.schoolInfoSettings);
      this.$longWork.execute(work).then(function () {
        return _this2.successSave(_this2.language.Generic.ServAdmin.kSchoolSettingsSaved);
      });
    }
  }]);
  return SchoolInfoSettingsController;
}(_settings.BaseSettingsController);
var SchoolInfoSettingsComponent = {
  selector: "schoolInfoSettings",
  controller: SchoolInfoSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/school.info.settings.component.html"
};
exports.SchoolInfoSettingsComponent = SchoolInfoSettingsComponent;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _emailValidator = __webpack_require__(251);
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
var MailSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(MailSettingsController, _BaseSettingsControll);
  var _super = _createSuper(MailSettingsController);
  function MailSettingsController(language, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q, $uibModal) {
    var _this;
    _classCallCheck(this, MailSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.$uibModal = $uibModal;
    _this.data = {
      mailSettings: null,
      needMailAuth: false
    };
    _this.state = {
      ready: false
    };
    _this.emailValidator = new _emailValidator.EmailValidatorCtrl();
    _this.load();
    return _this;
  }
  _createClass(MailSettingsController, [{
    key: "load",
    value: function load() {
      this.data.mailSettings = this.getServerSettingsService.getMailSettings();
      this.data.needMailAuth = !!this.data.mailSettings.mailUser;
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.validate()) {
        this.checkMailHostPort().then(function () {
          var work = _this2.settingsRepository.saveMailSettings(_this2.data.mailSettings);
          _this2.$longWork.execute(work).then(function () {
            return _this2.successSave(_this2.language.Generic.ServAdmin.kMailSettingsWasSaved);
          });
        });
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.form.$valid) {
        return false;
      }
      if (!this.emailValidator.isEmailValid(this.data.mailSettings.mailFrom)) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kMailFromIsNotValid);
        return false;
      }
      if (!this.emailValidator.isEmailValid(this.data.mailSettings.servAdminMail)) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kServAdminMailIsNotValid);
        return false;
      }
      return true;
    }
  }, {
    key: "checkMailHostPort",
    value: function checkMailHostPort() {
      if (this.data.mailSettings.useSsl && this.data.mailSettings.mailHostPort == 465) {
        return this.$dialogs.confirm(this.language.Generic.ServAdmin.kConfirmSavePort465);
      }
      return Promise.resolve();
    }
  }, {
    key: "mailErrors",
    get: function get() {
      var _this3 = this;
      return {
        mailHostError: function mailHostError() {
          return _this3.language.Generic.ServAdmin.kOutMailServerAddressIsEmpty;
        },
        mailFromError: function mailFromError() {
          return _this3.language.Generic.ServAdmin.kMailFromIsEmpty;
        },
        mailUserError: function mailUserError() {
          return _this3.language.Generic.ServAdmin.kMailUserIsEmpty;
        },
        mailPasswordError: function mailPasswordError() {
          return _this3.language.Generic.ServAdmin.kMailPasswordIsEmpty;
        },
        servAdminMailError: function servAdminMailError() {
          return _this3.language.Generic.ServAdmin.kServAdminMailIsEmpty;
        }
      };
    }
  }, {
    key: "showFormTestEMail",
    value: function showFormTestEMail() {
      var modalInstance = this.$uibModal.open({
        controller: /*#__PURE__*/function () {
          TestEMailController.$inject = ["language", "$uibModalInstance", "$dialogs", "$longWork", "settingsRepository"];
          /*@ngInject*/
          function TestEMailController(language, $uibModalInstance, $dialogs, $longWork, settingsRepository) {
            _classCallCheck(this, TestEMailController);
            this.language = language;
            this.$uibModalInstance = $uibModalInstance;
            this.$dialogs = $dialogs;
            this.$longWork = $longWork;
            this.settingsRepository = settingsRepository;
            this.header = this.language.Generic.ServAdmin.kEnterMail;
            this.buildButtons();
          }
          _createClass(TestEMailController, [{
            key: "buildButtons",
            value: function buildButtons() {
              var _this4 = this;
              this.buttons = [];
              var sendBtn = {
                title: this.language.Generic.Buttons.kSend,
                action: function action() {
                  return _this4.sendTestMail();
                }
              };
              this.buttons.push(sendBtn);
              var cancelBtn = {
                title: this.language.Generic.Buttons.kCancel,
                action: function action() {
                  return _this4.cancel();
                },
                icon: "glyphicon glyphicon-ban-circle"
              };
              this.buttons.push(cancelBtn);
            }
            // todo: завел на старой логике
          }, {
            key: "sendTestMail",
            value: function sendTestMail() {
              var _this5 = this;
              if (!this.email || !this.email.trim()) {
                this.$dialogs.message(this.language.Generic.ServAdmin.kSetEMail);
                return;
              }
              var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
              if (!this.email.match(reg)) {
                this.$dialogs.message(this.language.Generic.ServAdmin.kErrEMail);
                return;
              }
              var work = this.settingsRepository.testEMail(this.email).then(function () {
                _this5.$uibModalInstance.close();
                _this5.$dialogs.message(_this5.language.Generic.Messages.kYourMessageWasSent);
              });
              this.$longWork.execute(work);
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.$uibModalInstance.dismiss();
            }
          }, {
            key: "close",
            value: function close() {
              this.$uibModalInstance.dismiss();
            }
          }]);
          return TestEMailController;
        }(),
        controllerAs: "$ctrl",
        template: "\n\t\t\t\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t\t\t\t<div class=\"form-horizontal form-xs\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label class=\"control-label col-md-4 col-lg-3 col-sm-4\">\n\t\t\t\t\t\t\t\t{{$ctrl.language.Generic.Import.kEMail}}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-lg-9 col-sm-8\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" FilterWhiteSpace\" size=\"50\" maxlength=\"50\" ng-model=\"$ctrl.email\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ns-modal>"
      });
    }
  }]);
  return MailSettingsController;
}(_settings.BaseSettingsController);
var MailSettingsComponent = {
  selector: "mailSettings",
  controller: MailSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/mail.settings.component.html"
};
exports.MailSettingsComponent = MailSettingsComponent;

/***/ }),

/***/ 251:
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovePeriodsSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _editMovePeriods = __webpack_require__(253);
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
var MovePeriodsSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(MovePeriodsSettingsController, _BaseSettingsControll);
  var _super = _createSuper(MovePeriodsSettingsController);
  function MovePeriodsSettingsController($scope, language, $http, $alerts, $dialogs, $longWork, settingsRepository, changeTracker, $q, $uibModal) {
    var _this;
    _classCallCheck(this, MovePeriodsSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.$scope = $scope;
    _this.language = language;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.$uibModal = $uibModal;
    _this.data = {
      globalYears: null,
      globalYear: null,
      movePeriodsPermits: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(MovePeriodsSettingsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      return this.$http.get("/webapi/globalyears").then(function (response) {
        _this2.data.globalYears = response.data;
        _this2.data.globalYear = _this2.data.globalYears.find(Boolean);
      }).then(function () {
        return _this2.getMovePeriodsPermits();
      }).then(function () {
        _this2.state.ready = true;
      });
    }
  }, {
    key: "getMovePeriodsPermits",
    value: function getMovePeriodsPermits() {
      var _this3 = this;
      return this.settingsRepository.getMovePeriods(this.data.globalYear.id).then(function (movePeriods) {
        var movePeriodMax = 4;
        _this3.data.movePeriodsPermits = [];
        var status = movePeriods.reduce(function (result, dto) {
          return result + dto.status;
        }, 0);
        var allPermit = {
          periodName: _this3.language.Generic.ServAdmin.kAllPeriodsPermit,
          periodId: -1,
          permitted: status == movePeriodMax
        };
        _this3.data.movePeriodsPermits.push(allPermit);
        var allForbid = {
          periodName: _this3.language.Generic.ServAdmin.kAllPeriodsForbid,
          periodId: 0,
          permitted: status == 0
        };
        _this3.data.movePeriodsPermits.push(allForbid);
        movePeriods.forEach(function (movePeriod) {
          var movePeriodPermit = {
            periodName: movePeriod.periodId + " " + _this3.language.Generic.Common.kPeriod,
            startDate: movePeriod.startDate,
            endDate: movePeriod.endDate,
            periodId: movePeriod.periodId,
            permitted: movePeriod.status == 1 && !allPermit.permitted
          };
          if (movePeriodPermit.periodId == 1) {
            movePeriodPermit.periodName += " (" + _this3.language.Generic.ServAdmin.kPeriod_Summer + ")";
          }
          _this3.data.movePeriodsPermits.push(movePeriodPermit);
        });
      });
    }
  }, {
    key: "permit",
    value: function permit(movePeriodPermit) {
      this.data.movePeriodsPermits.forEach(function (x) {
        return x.permitted = false;
      });
      movePeriodPermit.permitted = true;
    }
  }, {
    key: "updateMovePeriodsPermits",
    value: function updateMovePeriodsPermits() {
      this.$longWork.execute(this.getMovePeriodsPermits());
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      var period = this.data.movePeriodsPermits.find(function (x) {
        return x.permitted;
      });
      jsSubmit({
        action: "/asp/administration/saveMovePeriods.asp",
        data: {
          Permit: 1,
          CMNYEAR: this.data.globalYear.id,
          PeriodID: period.periodId
        },
        showProcessing: true,
        onSuccess: function onSuccess(response) {
          _this4.$dialogs.message(response.message);
        }
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this5 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editMovePeriods.EditMovePeriodsController,
        controllerAs: "$ctrl",
        templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/edit.move.periods.component.html",
        size: "modal-sm",
        resolve: {
          globalYear: this.data.globalYear
        }
      });
      modalInstance.result.then(function () {
        return _this5.$longWork.execute(_this5.load());
      });
    }
  }]);
  return MovePeriodsSettingsController;
}(_settings.BaseSettingsController);
var MovePeriodsSettingsComponent = {
  selector: "movePeriodsSettings",
  controller: MovePeriodsSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/move.periods.settings.component.html"
};
exports.MovePeriodsSettingsComponent = MovePeriodsSettingsComponent;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditMovePeriodsController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditMovePeriodsController = /*#__PURE__*/function () {
  function EditMovePeriodsController(language, $uibModalInstance, $dialogs, settingsRepository, $longWork, globalYear) {
    _classCallCheck(this, EditMovePeriodsController);
    this.language = language;
    this.$uibModalInstance = $uibModalInstance;
    this.$dialogs = $dialogs;
    this.settingsRepository = settingsRepository;
    this.$longWork = $longWork;
    this.globalYear = globalYear;
    this.header = this.language.Generic.ServAdmin.kTitleEditMovePeriods;
    this.buildButtons();
    this.data = {
      movePeriods: null
    };
    this.state = {
      ready: false
    };
    this.dateRangeOptions = {
      calendarMinDate: null,
      calendarMaxDate: null,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    this.load();
  }
  _createClass(EditMovePeriodsController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this = this;
      this.buttons = [];
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      this.buttons.push(saveBtn);
      var resetBtn = {
        title: this.language.Generic.Buttons.kReset,
        action: function action() {
          return _this.reset();
        },
        icon: "glyphicon glyphicon-repeat"
      };
      this.buttons.push(resetBtn);
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons.push(cancelBtn);
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var work = this.settingsRepository.getMovePeriods(this.globalYear.id).then(function (movePeriods) {
        _this2.data.movePeriods = movePeriods;
      });
      return this.$longWork.execute(work).then(function () {
        _this2.state.ready = true;
        _this2.initDateRangeOptions();
      });
    }
    // todo: кажется, что так плохо
  }, {
    key: "initDateRangeOptions",
    value: function initDateRangeOptions() {
      var parts = this.globalYear.name.split("/");
      var startYear = parseInt(parts[0].trim());
      var endYear = parseInt(parts[1].trim());
      this.dateRangeOptions.calendarMinDate = new Date(startYear, 1, 1);
      this.dateRangeOptions.calendarMaxDate = new Date(endYear, 12, 31);
    }
    // todo: добавил такой метод, потому что в дату приходит строка - как правильно работать с датами???
  }, {
    key: "prepareDate",
    value: function prepareDate(date) {
      var pdate = new Date(date);
      pdate = new Date(pdate.getFullYear(), pdate.getMonth(), pdate.getDate());
      return pdate;
    }
  }, {
    key: "alerts",
    get: function get() {
      var _this3 = this;
      return {
        checkStartDate: function checkStartDate(movePeriod) {
          return !!movePeriod && !!movePeriod.startDate;
        },
        checkEndDate: function checkEndDate(movePeriod) {
          return !!movePeriod && !!movePeriod.endDate;
        },
        isEmptyStartDate: function isEmptyStartDate(movePeriod) {
          return !_this3.alerts.checkStartDate(movePeriod);
        },
        startDateBeforeYearStart: function startDateBeforeYearStart() {
          var startMovePeriod = _this3.data.movePeriods.find(Boolean);
          return _this3.alerts.checkStartDate(startMovePeriod) && _this3.prepareDate(startMovePeriod.startDate) < _this3.dateRangeOptions.calendarMinDate;
        },
        movePeriodOverlapped: function movePeriodOverlapped(movePeriod) {
          var prevMovePeriod = _this3.data.movePeriods.find(function (x) {
            return x.periodId == movePeriod.periodId - 1;
          });
          return _this3.alerts.checkStartDate(movePeriod) && _this3.alerts.checkEndDate(prevMovePeriod) && _this3.prepareDate(movePeriod.startDate) <= _this3.prepareDate(prevMovePeriod.endDate);
        },
        movePeriodDateMonthIs2AndDayIs29: function movePeriodDateMonthIs2AndDayIs29(date) {
          var pdate = _this3.prepareDate(date);
          return pdate.getMonth() + 1 == 2 && pdate.getDate() == 29;
        },
        movePeriodContin: function movePeriodContin(movePeriod) {
          var prevMovePeriod = _this3.data.movePeriods.find(function (x) {
            return x.periodId == movePeriod.periodId - 1;
          });
          if (_this3.alerts.checkStartDate(movePeriod) && _this3.alerts.checkEndDate(prevMovePeriod)) {
            var lastEndDate = _this3.prepareDate(prevMovePeriod.endDate);
            var startDate = _this3.prepareDate(movePeriod.startDate);
            return lastEndDate.getFullYear() != startDate.getFullYear() || lastEndDate.getMonth() != startDate.getMonth() || lastEndDate.getDate() + 1 != startDate.getDate();
          }
          return false;
        },
        isEmptyEndDate: function isEmptyEndDate(movePeriod) {
          return !_this3.alerts.checkEndDate(movePeriod);
        },
        isStartBeforeEnd: function isStartBeforeEnd(movePeriod) {
          return _this3.alerts.checkStartDate(movePeriod) && _this3.alerts.checkEndDate(movePeriod) && _this3.prepareDate(movePeriod.startDate) > _this3.prepareDate(movePeriod.endDate);
        },
        endDateAfterYearEnd: function endDateAfterYearEnd() {
          var lastMovePeriod = _this3.data.movePeriods[_this3.data.movePeriods.length - 1];
          return _this3.alerts.checkEndDate(lastMovePeriod) && _this3.prepareDate(lastMovePeriod.endDate) > _this3.dateRangeOptions.calendarMaxDate;
        }
      };
    }
  }, {
    key: "errors",
    get: function get() {
      var _this4 = this;
      return {
        startDateBeforeYearStartError: function startDateBeforeYearStartError() {
          return _this4.language.Generic.ServAdmin.kStartDateCanntBefore + moment(_this4.dateRangeOptions.calendarMinDate).format("DD.MM.YYYY");
        },
        endDateAfterYearEndError: function endDateAfterYearEndError() {
          return _this4.language.Generic.ServAdmin.kEndDateCanntAfter + moment(_this4.dateRangeOptions.calendarMaxDate).format("DD.MM.YYYY");
        }
      };
    }
  }, {
    key: "checkMovePeriod",
    value: function checkMovePeriod(movePeriod) {
      var startMovePeriod = this.data.movePeriods.find(Boolean);
      var endMovePeriod = this.data.movePeriods[this.data.movePeriods.length - 1];
      var isStartMovePeriod = movePeriod.periodId == startMovePeriod.periodId;
      var isEndMovePeriod = movePeriod.periodId == endMovePeriod.periodId;
      return !(isStartMovePeriod && this.alerts.startDateBeforeYearStart() || this.alerts.isEmptyStartDate(movePeriod) || this.alerts.movePeriodOverlapped(movePeriod) || this.alerts.movePeriodDateMonthIs2AndDayIs29(movePeriod.startDate) || this.alerts.movePeriodContin(movePeriod) || this.alerts.isEmptyEndDate(movePeriod) || this.alerts.isStartBeforeEnd(movePeriod) || isEndMovePeriod && this.alerts.endDateAfterYearEnd() || this.alerts.movePeriodDateMonthIs2AndDayIs29(movePeriod.endDate));
    }
  }, {
    key: "validate",
    value: function validate() {
      for (var i = 0; i < this.data.movePeriods.length; i++) {
        var movePeriod = this.data.movePeriods[i];
        if (!this.checkMovePeriod(movePeriod)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      if (this.validate()) {
        var data = {
          CMNYEAR: this.globalYear.id
        };
        // todo: использую не индекс итерации, а сам periodId, надеюсь, что он от 1 до 4 всегда
        this.data.movePeriods.forEach(function (movePeriod) {
          data["SDT_".concat(movePeriod.periodId)] = moment(movePeriod.startDate).format("DD.MM.YYYY");
          data["EDT_".concat(movePeriod.periodId)] = moment(movePeriod.endDate).format("DD.MM.YYYY");
        });
        jsSubmit({
          action: "/asp/administration/saveMovePeriods.asp",
          data: data,
          showProcessing: true,
          onSuccess: function onSuccess(response) {
            _this5.$uibModalInstance.close();
            _this5.$dialogs.message(response.message);
          }
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss();
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return EditMovePeriodsController;
}();
exports.EditMovePeriodsController = EditMovePeriodsController;

/***/ }),

/***/ 254:
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecuritySettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _common = __webpack_require__(22);
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
var SecuritySettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(SecuritySettingsController, _BaseSettingsControll);
  var _super = _createSuper(SecuritySettingsController);
  function SecuritySettingsController(language, appContext, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changePasswordService, changeTracker, $q) {
    var _this;
    _classCallCheck(this, SecuritySettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changePasswordService = changePasswordService;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      securitySettings: null,
      useReadOnlyAccess: false,
      filteringIpAddresses: false
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(SecuritySettingsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.data.securitySettings = this.getServerSettingsService.getSecuritySettings();
      var getUseReadOnlyAccess = this.settingsRepository.getReadOnlyAccessFlag().then(function (useReadOnlyAccess) {
        return _this2.data.useReadOnlyAccess = useReadOnlyAccess;
      });
      this.$q.when(getUseReadOnlyAccess).then(function () {
        _this2.data.filteringIpAddresses = _this2.data.securitySettings.filteringIpAddresses;
        _this2.state.ready = true;
      });
    }
  }, {
    key: "securityErrors",
    get: function get() {
      var _this3 = this;
      return {
        minLoginLengthError: function minLoginLengthError() {
          return "Не соответствует минимальная длина имени пользователя";
        },
        minPasswordLengthError: function minPasswordLengthError() {
          return "Не соответствует минимальная длина пароля";
        },
        minSessionIdleTimeError: function minSessionIdleTimeError() {
          return _this3.language.Generic.Common.kMinInput + 3;
        },
        maxSessionIdleTimeError: function maxSessionIdleTimeError() {
          return _this3.language.Generic.Common.kMaxInput + 999;
        }
      };
    }
  }, {
    key: "checkBlockTypes",
    value: function checkBlockTypes() {
      return this.data.securitySettings.blockByIp || this.data.securitySettings.blockByEducOrgAndLogin;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.form.$valid) {
        return false;
      }
      if (!this.checkBlockTypes()) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kBlockTypesLogonWarn);
        return false;
      }
      return true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      if (this.validate()) {
        var work = this.settingsRepository.saveSecuritySettings(this.data.securitySettings);
        this.$longWork.execute(work).then(function () {
          _this4.data.filteringIpAddresses = _this4.data.securitySettings.filteringIpAddresses;
          _this4.successSave(_this4.language.Generic.ServAdmin.kSaveSecuritySettings);
        });
      }
    }
  }, {
    key: "changePassword",
    value: function changePassword() {
      this.changePasswordService.changePassword({
        userId: this.appContext.userId
      });
    }
  }, {
    key: "defineNetwork",
    value: function defineNetwork() {
      (0, _common.postTo)("/asp/Administration/DefineSafeNetworks.asp", {
        BackPage: "/angular/admin/serversettings/"
      });
    }
  }, {
    key: "editReadOnlyAccess",
    value: function editReadOnlyAccess() {
      (0, _common.postTo)("/asp/Administration/EditReadOnlyAccess.asp", {
        BackPage: "/angular/admin/serversettings/"
      });
    }
  }]);
  return SecuritySettingsController;
}(_settings.BaseSettingsController);
var SecuritySettingsComponent = {
  selector: "securitySettings",
  controller: SecuritySettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/security.settings.component.html"
};
exports.SecuritySettingsComponent = SecuritySettingsComponent;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntegrationSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _settingsProvider = __webpack_require__(28);
var _extDeferred = __webpack_require__(257);
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
var IntegrationSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(IntegrationSettingsController, _BaseSettingsControll);
  var _super = _createSuper(IntegrationSettingsController);
  function IntegrationSettingsController(language, $http, $alerts, $dialogs, $longWork, settingsRepository, settingsProvider, checkConnectionService, getServerSettingsService, changeTracker, $q) {
    var _this;
    _classCallCheck(this, IntegrationSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$http = $http;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.settingsRepository = settingsRepository;
    _this.settingsProvider = settingsProvider;
    _this.checkConnectionService = checkConnectionService;
    _this.getServerSettingsService = getServerSettingsService;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      integrationSettings: null
    };
    _this.flags = {
      moduleStaffAttest: false,
      moduleRegion: false,
      moduleQa: false,
      integrationPfdoType: null,
      pfdoIntegrationWithVolgograd: false,
      soloIntegration: false,
      moduleInlearnoIntegration: false,
      modulePooIntegration: false
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(IntegrationSettingsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.data.integrationSettings = this.getServerSettingsService.getIntegrationSettings();
      var getFlags = this.loadFlags();
      this.$q.when(getFlags).then(function () {
        _this2.state.ready = true;
      });
    }
  }, {
    key: "loadFlags",
    value: function loadFlags() {
      var _this3 = this;
      var promises = [];
      var getModuleStaffAttest = this.settingsProvider.ServerSettings.SystemSettings.ModuleStaffAttest().then(function (moduleStaffAttest) {
        return _this3.flags.moduleStaffAttest = moduleStaffAttest;
      });
      promises.push(getModuleStaffAttest);
      var getModuleRegion = this.settingsProvider.ServerSettings.SystemSettings.ModuleRegion().then(function (moduleRegion) {
        return _this3.flags.moduleRegion = moduleRegion;
      });
      promises.push(getModuleRegion);
      var getModuleQa = this.settingsProvider.ServerSettings.SystemSettings.ModuleQA().then(function (moduleQa) {
        return _this3.flags.moduleQa = moduleQa;
      });
      promises.push(getModuleQa);
      var getIntegrationPfdoType = this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (integrationPfdoType) {
        _this3.flags.integrationPfdoType = integrationPfdoType;
        _this3.flags.pfdoIntegrationWithVolgograd = integrationPfdoType == _settingsProvider.PfdoIntegrationType.Slavin;
      });
      promises.push(getIntegrationPfdoType);
      var getModuleInlearnoIntegration = this.settingsProvider.ServerSettings.SystemSettings.ModuleInlearnoIntegration().then(function (moduleInlearnoIntegration) {
        return _this3.flags.moduleInlearnoIntegration = moduleInlearnoIntegration;
      });
      promises.push(getModuleInlearnoIntegration);
      var getSoloIntegration = this.settingsProvider.ServerSettings.SystemSettings.SoloIntegration().then(function (soloIntegration) {
        return _this3.flags.soloIntegration = soloIntegration;
      });
      promises.push(getSoloIntegration);
      var getModulePooIntegration = this.settingsProvider.ServerSettings.SystemSettings.ModulePoo().then(function (modulePoo) {
        return _this3.flags.modulePooIntegration = modulePoo;
      });
      promises.push(getModulePooIntegration);
      return Promise.all(promises);
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      if (this.validate()) {
        this.$longWork.execute(this.settingsRepository.getCheckConnectionResults(this.getCheckUrls()).then(function (results) {
          return _this4.processConnectionResults(results);
        }))["catch"](function () {
          return _this4.$longWork.close();
        });
      }
    }
  }, {
    key: "processConnectionResults",
    value: function processConnectionResults(results) {
      var _this5 = this;
      if (this.showError(results)) {
        throw new Error();
      }
      var confirms = this.getConfirms(results);
      var promiseFuncs = [];
      confirms.forEach(function (msg) {
        return promiseFuncs.push(function () {
          return _this5.$dialogs.confirm(msg);
        });
      });
      _extDeferred.extDeferred.when(promiseFuncs).then(function () {
        return _this5.settingsRepository.saveIntegrationSettings(_this5.data.integrationSettings);
      }).then(function () {
        return _this5.successSave(_this5.language.Generic.ServAdmin.kIntegrationSettingsWasSaved);
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.flags.moduleStaffAttest) {
        var staffAttestUrl = this.data.integrationSettings.staffAttestUrl;
        var staffAttestLogin = this.data.integrationSettings.staffAttestLogin;
        var staffAttestSecret = this.data.integrationSettings.staffAttestSecret;
        var oneOfStaffAttest = staffAttestUrl || staffAttestLogin || staffAttestSecret;
        var allStaffAttest = staffAttestUrl && staffAttestLogin && staffAttestSecret;
        if (oneOfStaffAttest && !allStaffAttest) {
          this.$dialogs.message(this.language.Generic.ServAdmin.kErrStaffAttestNotFilling);
          return false;
        }
        if (staffAttestSecret && staffAttestSecret.length < 16) {
          this.$dialogs.message(this.language.Generic.ServAdmin.kErrStaffAttestSecretTooShort);
          return false;
        }
      }
      var schoolFoodPassword = this.data.integrationSettings.schoolFoodPassword;
      if (schoolFoodPassword && schoolFoodPassword.length < 16) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kErrSchoolFoodTooShort);
        return false;
      }
      return true;
    }
  }, {
    key: "getConfirms",
    value: function getConfirms(results) {
      return results.filter(function (x) {
        return !!x.confirm;
      }).map(function (x) {
        return x.confirm;
      });
    }
  }, {
    key: "showError",
    value: function showError(results) {
      var error = results.find(function (x) {
        return !!x.error;
      });
      if (error) {
        this.$dialogs.error(error.error);
        return true;
      }
      return false;
    }
  }, {
    key: "getCheckUrls",
    value: function getCheckUrls() {
      var settings = this.data.integrationSettings;
      var urlInfos = [];
      // с дополнительной проверкой
      urlInfos.push({
        url: settings.fiasAddressServiceUrl,
        checkPath: "?fiasaoId=bb035cc3-1dc2-4627-9d25-a1bf2d4b936b",
        checkPlus: true
      });
      urlInfos.push({
        url: settings.externalFiasAddressServiceUrl,
        checkPath: "?fiasaoId=bb035cc3-1dc2-4627-9d25-a1bf2d4b936b",
        checkPlus: true
      });
      if (this.flags.moduleQa) {
        urlInfos.push({
          url: settings.msokoUrl,
          checkPlus: true
        });
      }
      // без дополнительной проверки
      urlInfos.push({
        url: settings.eServicesUrl
      });
      urlInfos.push({
        url: settings.eServicesExternalUrl
      });
      urlInfos.push({
        url: settings.contingentUrl
      });
      urlInfos.push({
        url: settings.netCityPooUrl
      });
      urlInfos.push({
        url: settings.netCityPooManagementUrl
      });
      urlInfos.push({
        url: settings.identityServerUrl
      });
      urlInfos.push({
        url: settings.schoolFoodUrl
      });
      if (this.flags.moduleRegion) {
        urlInfos.push({
          url: settings.regionUrl
        });
      }
      if (this.flags.moduleStaffAttest) {
        urlInfos.push({
          url: settings.staffAttestUrl
        });
      }
      if (this.flags.integrationPfdoType) {
        urlInfos.push({
          url: settings.educPortalUrl
        });
        urlInfos.push({
          url: settings.educPortalApiUrl
        });
      }
      if (this.flags.soloIntegration) {
        urlInfos.push({
          url: settings.soloEsaUrl
        });
        urlInfos.push({
          url: settings.soloRbooApiUrl
        });
        urlInfos.push({
          url: settings.soloRefsApiUrl
        });
        urlInfos.push({
          url: settings.soloEnrollmentUrl
        });
        urlInfos.push({
          url: settings.soloSchoolEnrollmentUrl
        });
      }
      return urlInfos;
    }
  }, {
    key: "checkConnection",
    value: function checkConnection(urlInfo, checkUrl, checkPlus) {
      this.$longWork.execute(this.checkConnectionService.checkConnection(urlInfo, checkUrl, true, checkPlus));
    }
  }]);
  return IntegrationSettingsController;
}(_settings.BaseSettingsController);
var IntegrationSettingsComponent = {
  selector: "integrationSettings",
  controller: IntegrationSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/integration.settings.component.html"
};
exports.IntegrationSettingsComponent = IntegrationSettingsComponent;

/***/ }),

/***/ 257:
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

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatsSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var ChatsSettingsComponentController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(ChatsSettingsComponentController, _BaseSettingsControll);
  var _super = _createSuper(ChatsSettingsComponentController);
  function ChatsSettingsComponentController(language, $http, settingsRepository, settingsProvider, getServerSettingsService, $alerts, $longWork, changeTracker) {
    var _this;
    _classCallCheck(this, ChatsSettingsComponentController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$http = $http;
    _this.settingsRepository = settingsRepository;
    _this.settingsProvider = settingsProvider;
    _this.getServerSettingsService = getServerSettingsService;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.changeTracker = changeTracker;
    _this.data = {
      chatsSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(ChatsSettingsComponentController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.settingsRepository.getChatsSettings().then(function (settings) {
        _this2.data.chatsSettings = settings;
        _this2.state.ready = true;
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var saveSettingsTask = this.settingsRepository.saveChatsSettings(this.data.chatsSettings).then(function () {
        return _this3.successSave(_this3.language.Generic.ServAdmin.kChatsSettingsWasSaved);
      });
      this.$longWork.execute(saveSettingsTask);
    }
  }]);
  return ChatsSettingsComponentController;
}(_settings.BaseSettingsController);
var ChatsSettingsComponent = {
  selector: "chatsSettings",
  controller: ChatsSettingsComponentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/chats.settings.component.html"
};
exports.ChatsSettingsComponent = ChatsSettingsComponent;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAccountsSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var UserAccountsSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(UserAccountsSettingsController, _BaseSettingsControll);
  var _super = _createSuper(UserAccountsSettingsController);
  function UserAccountsSettingsController(language, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q) {
    var _this;
    _classCallCheck(this, UserAccountsSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.data = {
      userAccountsSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(UserAccountsSettingsController, [{
    key: "load",
    value: function load() {
      this.data.userAccountsSettings = this.getServerSettingsService.getUserAccountsSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.validate()) {
        var work = this.settingsRepository.saveUserAccountsSettings(this.data.userAccountsSettings);
        this.$longWork.execute(work).then(function () {
          return _this2.successSave(_this2.language.Generic.ServAdmin.kUserAccountsSettingsWasSaved);
        });
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      return true;
    }
  }]);
  return UserAccountsSettingsController;
}(_settings.BaseSettingsController);
var UserAccountsSettingsComponent = {
  selector: "useraccountsSettings",
  controller: UserAccountsSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/user.accounts.settings.component.html"
};
exports.UserAccountsSettingsComponent = UserAccountsSettingsComponent;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(27);
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAuthorizationSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var UserAuthorizationSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(UserAuthorizationSettingsController, _BaseSettingsControll);
  var _super = _createSuper(UserAuthorizationSettingsController);
  function UserAuthorizationSettingsController(language, appContext, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, settingsProvider, changeTracker, $q) {
    var _this;
    _classCallCheck(this, UserAuthorizationSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.settingsProvider = settingsProvider;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.inject = /<script>.*?<\/script>/g;
    _this.data = {
      userAuthorizationSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.authProviders = {
      esiaSaml: 1,
      esiaOAuth: 2,
      esiaIrtechIdentity: 3
    };
    _this.requiresEsiaAdminLogin = {
      eachEntrance: 1,
      afterChangePass: 2,
      never: 3
    };
    _this.dateFormat = _this.appContext.dateFormat;
    _this.dateRangeOptions = {
      calendarMinDate: null,
      calendarMaxDate: null,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    _this.load();
    return _this;
  }
  _createClass(UserAuthorizationSettingsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.data.userAuthorizationSettings = this.getServerSettingsService.getUserAuthorizationSettings();
      var getSoloIntegration = this.settingsProvider.ServerSettings.SystemSettings.SoloIntegration().then(function (integration) {
        return _this2.soloIntegration = integration;
      });
      this.$q.when(getSoloIntegration).then(function () {
        _this2.state.ready = true;
        _this2.initAuthProvider();
        _this2.initRequireEsiaAdminLogin();
      });
    }
    // todo: не очень хорошо
  }, {
    key: "initAuthProvider",
    value: function initAuthProvider() {
      if (this.data.userAuthorizationSettings.esiaSaml) {
        this.currAuthProvider = this.authProviders.esiaSaml;
      } else if (this.data.userAuthorizationSettings.esiaOAuth) {
        this.currAuthProvider = this.authProviders.esiaOAuth;
      } else if (this.data.userAuthorizationSettings.esiaIrtechIdentityAuth) {
        this.currAuthProvider = this.authProviders.esiaIrtechIdentity;
      }
    }
    // todo: не очень хорошо
  }, {
    key: "changeProvider",
    value: function changeProvider() {
      this.data.userAuthorizationSettings.esiaSaml = false;
      this.data.userAuthorizationSettings.esiaOAuth = false;
      this.data.userAuthorizationSettings.esiaIrtechIdentityAuth = false;
      if (this.currAuthProvider == this.authProviders.esiaSaml) {
        this.data.userAuthorizationSettings.esiaSaml = true;
      } else if (this.currAuthProvider == this.authProviders.esiaOAuth) {
        this.data.userAuthorizationSettings.esiaOAuth = true;
      } else if (this.currAuthProvider == this.authProviders.esiaIrtechIdentity) {
        this.data.userAuthorizationSettings.esiaIrtechIdentityAuth = true;
      }
    }
    // todo: не очень хорошо
  }, {
    key: "initRequireEsiaAdminLogin",
    value: function initRequireEsiaAdminLogin() {
      if (this.data.userAuthorizationSettings.requireEsiaAdminLoginEachEntrance) {
        this.currRequireEsiaAdminLogin = this.requiresEsiaAdminLogin.eachEntrance;
      } else if (this.data.userAuthorizationSettings.requireEsiaAdminLoginAfterChangePass) {
        this.currRequireEsiaAdminLogin = this.requiresEsiaAdminLogin.afterChangePass;
      } else if (this.data.userAuthorizationSettings.requireEsiaAdminLoginNever) {
        this.currRequireEsiaAdminLogin = this.requiresEsiaAdminLogin.never;
      }
    }
    // todo: не очень хорошо
  }, {
    key: "changeRequireEsiaAdminLogin",
    value: function changeRequireEsiaAdminLogin() {
      this.data.userAuthorizationSettings.requireEsiaAdminLoginEachEntrance = false;
      this.data.userAuthorizationSettings.requireEsiaAdminLoginAfterChangePass = false;
      this.data.userAuthorizationSettings.requireEsiaAdminLoginNever = false;
      if (this.currRequireEsiaAdminLogin == this.requiresEsiaAdminLogin.eachEntrance) {
        this.data.userAuthorizationSettings.requireEsiaAdminLoginEachEntrance = true;
      } else if (this.currRequireEsiaAdminLogin == this.requiresEsiaAdminLogin.afterChangePass) {
        this.data.userAuthorizationSettings.requireEsiaAdminLoginAfterChangePass = true;
      } else if (this.currRequireEsiaAdminLogin == this.requiresEsiaAdminLogin.never) {
        this.data.userAuthorizationSettings.requireEsiaAdminLoginNever = true;
      }
    }
  }, {
    key: "canEditOAuthSettings",
    value: function canEditOAuthSettings() {
      return this.data.userAuthorizationSettings.esiaOAuth || this.data.userAuthorizationSettings.esiaIrtechIdentityAuth;
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      this.clearInject();
      if (this.validate()) {
        var work = this.settingsRepository.saveUserAuthorizationSettings(this.data.userAuthorizationSettings);
        this.$longWork.execute(work).then(function () {
          return _this3.successSave(_this3.language.Generic.ServAdmin.kUserAuthorizationSettingsWasSaved);
        });
        ;
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.form.$invalid) {
        return false;
      }
      var settings = this.data.userAuthorizationSettings;
      if (settings.enableNotice) {
        if (!settings.noticeTitle || !settings.noticeDisplayText) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "clearInject",
    value: function clearInject() {
      var settings = this.data.userAuthorizationSettings;
      if (this.checkInject(settings.noticeTitle)) {
        settings.noticeTitle = settings.noticeTitle.replace(this.inject, "");
      }
      if (this.checkInject(settings.noticeDisplayText)) {
        settings.noticeDisplayText = settings.noticeDisplayText.replace(this.inject, "");
      }
    }
  }, {
    key: "checkInject",
    value: function checkInject(source) {
      if (source) {
        var match = source.match(this.inject);
        return match && !!match.length;
      }
      return false;
    }
  }, {
    key: "noticeError",
    value: function noticeError() {
      return this.language.Generic.ServAdmin.kNoticeCantBeEmpty;
    }
  }]);
  return UserAuthorizationSettingsController;
}(_settings.BaseSettingsController);
var UserAuthorizationSettingsComponent = {
  selector: "userauthorizationSettings",
  controller: UserAuthorizationSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/user.authorization.settings.component.html"
};
exports.UserAuthorizationSettingsComponent = UserAuthorizationSettingsComponent;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUpWindowOnLoginScreenSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var PopUpWindowOnLoginScreenSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(PopUpWindowOnLoginScreenSettingsController, _BaseSettingsControll);
  var _super = _createSuper(PopUpWindowOnLoginScreenSettingsController);
  function PopUpWindowOnLoginScreenSettingsController(language, $alerts, $dialogs, $longWork, getServerSettingsService, settingsRepository, changeTracker, $q) {
    var _this;
    _classCallCheck(this, PopUpWindowOnLoginScreenSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.getServerSettingsService = getServerSettingsService;
    _this.settingsRepository = settingsRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.inject = /<script>.*?<\/script>/g;
    _this.data = {
      popUpWindowOnLoginScreenSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.dateRangeOptions = {
      calendarMinDate: null,
      calendarMaxDate: null,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    _this.load();
    return _this;
  }
  _createClass(PopUpWindowOnLoginScreenSettingsController, [{
    key: "load",
    value: function load() {
      this.data.popUpWindowOnLoginScreenSettings = this.getServerSettingsService.getPopupWindowOnLoginScreenSettings();
      this.state.ready = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      this.clearInject();
      if (this.validate()) {
        var work = this.settingsRepository.savePopupWindowOnLoginScreenSettings(this.data.popUpWindowOnLoginScreenSettings);
        this.$longWork.execute(work).then(function () {
          return _this2.successSave(_this2.language.Generic.ServAdmin.kPopUpWindowOnLoginScreenSettingsWasSaved);
        });
        ;
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.form.$invalid) {
        return false;
      }
      var settings = this.data.popUpWindowOnLoginScreenSettings;
      return !!settings.popUpDisplayText && !!settings.popUpButtonText;
    }
  }, {
    key: "clearInject",
    value: function clearInject() {
      var settings = this.data.popUpWindowOnLoginScreenSettings;
      if (this.checkInject(settings.popUpDisplayText)) {
        settings.popUpDisplayText = settings.popUpDisplayText.replace(this.inject, "");
      }
      if (this.checkInject(settings.popUpButtonText)) {
        settings.popUpButtonText = settings.popUpButtonText.replace(this.inject, "");
      }
    }
  }, {
    key: "checkInject",
    value: function checkInject(source) {
      if (source) {
        var match = source.match(this.inject);
        return match && !!match.length;
      }
      return false;
    }
  }, {
    key: "popupNoticeError",
    value: function popupNoticeError() {
      return this.language.Generic.ServAdmin.kPopupNoticeCantBeEmpty;
    }
  }]);
  return PopUpWindowOnLoginScreenSettingsController;
}(_settings.BaseSettingsController);
var PopUpWindowOnLoginScreenSettingsComponent = {
  selector: "popupwindowonloginscreenSettings",
  controller: PopUpWindowOnLoginScreenSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/popupwindowonloginscreen.settings.component.html"
};
exports.PopUpWindowOnLoginScreenSettingsComponent = PopUpWindowOnLoginScreenSettingsComponent;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckConnectionService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CheckConnectionService = /*#__PURE__*/function () {
  function CheckConnectionService(language, $dialogs, $http) {
    _classCallCheck(this, CheckConnectionService);
    this.language = language;
    this.$dialogs = $dialogs;
    this.$http = $http;
  }
  _createClass(CheckConnectionService, [{
    key: "checkConnection",
    value: function checkConnection(urlInfo, checkUrl, showSuccMsg, checkPlus) {
      var _this = this;
      if (this.checkEmptyUrl(checkUrl)) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kEmptyUrl + urlInfo);
        return Promise.reject();
      }
      var url = this.getCheckServerUrl(checkPlus);
      var config = {
        cache: false
      };
      return this.$http.post(url, JSON.stringify(checkUrl), config).then(function (response) {
        return _this.handleResponse(checkUrl, response.data, showSuccMsg);
      })["catch"](function (reason) {
        return _this.handleError(checkUrl);
      });
    }
  }, {
    key: "checkEmptyUrl",
    value: function checkEmptyUrl(checkUrl) {
      return !checkUrl;
    }
  }, {
    key: "getCheckServerUrl",
    value: function getCheckServerUrl(checkPlus) {
      return checkPlus ? "/webapi/checkserverplus" : "/webapi/checkserver";
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(url, connect, showSuccMsg) {
      if (!connect) {
        throw new Error();
      }
      if (showSuccMsg) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kConnectionSuccess.replace(/addr/g, url), this.language.Generic.ServAdmin.kConnectionInfo);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(checkUrl) {
      this.$dialogs.error(this.language.Generic.ServAdmin.kConnectionErrorMessage + checkUrl + ". " + this.language.Generic.ServAdmin.kCheckInternetConnectionErrorMessage);
      return Promise.reject();
    }
  }]);
  return CheckConnectionService;
}();
exports.CheckConnectionService = CheckConnectionService;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetServerSettingsService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GetServerSettingsService = /*#__PURE__*/function () {
  function GetServerSettingsService(settingsRepository) {
    _classCallCheck(this, GetServerSettingsService);
    this.settingsRepository = settingsRepository;
    this.data = {
      settings: null
    };
  }
  _createClass(GetServerSettingsService, [{
    key: "load",
    value: function load() {
      var _this = this;
      return this.settingsRepository.getServerSettings().then(function (settings) {
        return _this.data.settings = settings;
      });
    }
    // получает код доверенного приложения
  }, {
    key: "getCommonServerSettings",
    value: function getCommonServerSettings() {
      var commonSettings = {
        address: this.data.settings.address,
        auxAddresses: this.data.settings.auxAddresses,
        proxyAddress: this.data.settings.proxyAddress,
        trustedAppCode: this.data.settings.trustedAppCode,
        allowEditTimezoneInOo: this.data.settings.allowEditTimezoneInOo
      };
      return commonSettings;
    }
    // получает Настройки файловых вложений
  }, {
    key: "getSmsSettings",
    value: function getSmsSettings() {
      return this.data.settings.smsSettings;
    }
    // получает Настройки PUSH уведомлений
  }, {
    key: "getPushSettings",
    value: function getPushSettings() {
      return this.data.settings.pushSettings;
    }
    // получает настройки почты
  }, {
    key: "getMailSettings",
    value: function getMailSettings() {
      return this.data.settings.mailSettings;
    }
    // получает  настройки безопасности
  }, {
    key: "getSecuritySettings",
    value: function getSecuritySettings() {
      return this.data.settings.securitySettings;
    }
    // получает настройки интеграции
  }, {
    key: "getIntegrationSettings",
    value: function getIntegrationSettings() {
      return this.data.settings.integrationSettings;
    }
    // получает учетные записи пользователей
  }, {
    key: "getUserAccountsSettings",
    value: function getUserAccountsSettings() {
      return this.data.settings.userAccountsSettings;
    }
    // получает настройки авторизации пользователей
  }, {
    key: "getUserAuthorizationSettings",
    value: function getUserAuthorizationSettings() {
      return this.data.settings.userAuthorizationSettings;
    }
    // получает настройки авторизации пользователей
  }, {
    key: "getPopupWindowOnLoginScreenSettings",
    value: function getPopupWindowOnLoginScreenSettings() {
      return this.data.settings.popUpWindowOnLoginScreenSettings;
    }
    // получает сведения об образовательных организациях
  }, {
    key: "getSchoolInfoSettings",
    value: function getSchoolInfoSettings() {
      return this.data.settings.schoolInfoSettings;
    }
    // получает Настройки файловых вложений
  }, {
    key: "getFileAttachmentsSettings",
    value: function getFileAttachmentsSettings() {
      return this.data.settings.fileAttachmentsSettings;
    }
  }, {
    key: "getVideoConfSettings",
    value: function getVideoConfSettings() {
      return this.data.settings.videoConfSettings;
    }
  }]);
  return GetServerSettingsService;
}();
exports.GetServerSettingsService = GetServerSettingsService;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoConfSettingsComponent = void 0;
var _settings = __webpack_require__(243);
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
var VideoConfSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(VideoConfSettingsController, _BaseSettingsControll);
  var _super = _createSuper(VideoConfSettingsController);
  function VideoConfSettingsController(language, $alerts, $longWork, settingsRepository, checkConnectionService, getServerSettingsService, changeTracker, $q, $location) {
    var _this;
    _classCallCheck(this, VideoConfSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.settingsRepository = settingsRepository;
    _this.checkConnectionService = checkConnectionService;
    _this.getServerSettingsService = getServerSettingsService;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.$location = $location;
    _this.data = {
      videoConfSettings: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(VideoConfSettingsController, [{
    key: "load",
    value: function load() {
      this.data.videoConfSettings = this.getServerSettingsService.getVideoConfSettings();
      this.state.ready = true;
    }
  }, {
    key: "tune",
    value: function tune() {
      this.$location.path("/orgvideoconf");
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var settings = this.data.videoConfSettings;
      this.$longWork.execute(this.settingsRepository.saveVideoConfSettings(settings)).then(function () {
        return _this2.successSave(_this2.language.Generic.ServAdmin.kVideoConfSettingsWasSaved);
      });
    }
  }]);
  return VideoConfSettingsController;
}(_settings.BaseSettingsController);
var VideoConfSettingsComponent = {
  selector: "videoconfSettings",
  controller: VideoConfSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/videoconf.settings.component.html"
};
exports.VideoConfSettingsComponent = VideoConfSettingsComponent;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgVideoConfSettingsComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(53));
var _editVideoconfSettings = __webpack_require__(266);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var OrgVideoConfSettingsController = /*#__PURE__*/function () {
  function OrgVideoConfSettingsController(pageContext, appContext, $scope, $appLoader, $alerts, $dialogs, $longWork, $q, $uibModal, settingsRepository, language) {
    _classCallCheck(this, OrgVideoConfSettingsController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.settingsRepository = settingsRepository;
    this.language = language;
    this.selection = new _selectable["default"]();
    pageContext.title = this.language.Generic.ServAdmin.kOrgVideoConfSettingTitle;
    pageContext.parent = {
      title: this.language.Generic.ServAdmin.kTitleOptions + " <i>" + appContext.productName + "</i>",
      href: "/"
    };
    pageContext.back = {
      history: true
    };
    this.load();
  }
  _createClass(OrgVideoConfSettingsController, [{
    key: "load",
    value: function load() {
      var _this = this;
      var getOrgVideoConfSettings = this.settingsRepository.getOrgVideoConfSettings().then(function (orgVideoConfSettings) {
        _this.orgVideoConfSettings = orgVideoConfSettings;
      });
      return this.$q.when(getOrgVideoConfSettings).then(function () {
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "addVideoConfSetting",
    value: function addVideoConfSetting() {
      var _this2 = this;
      var blank = {
        id: 0,
        school: {
          id: 0
        },
        vcGateUrl: null
      };
      var modal = this.$uibModal.open({
        controller: _editVideoconfSettings.EditVideoConfSettingsComponent.controller,
        controllerAs: _editVideoconfSettings.EditVideoConfSettingsComponent.controllerAs,
        templateUrl: _editVideoconfSettings.EditVideoConfSettingsComponent.templateUrl,
        backdrop: "static",
        resolve: {
          setting: function setting() {
            return blank;
          }
        }
      });
      modal.result.then(function (setting) {
        _this2.load().then(function () {
          _this2.$alerts.success(_this2.language.Generic.ServAdmin.kOrgVideoConfSettingAddedSuccess);
        });
      });
    }
  }, {
    key: "editVideoConfSetting",
    value: function editVideoConfSetting() {
      var _this3 = this;
      var initialSetting = this.selection.item;
      var modal = this.$uibModal.open({
        controller: _editVideoconfSettings.EditVideoConfSettingsComponent.controller,
        controllerAs: _editVideoconfSettings.EditVideoConfSettingsComponent.controllerAs,
        templateUrl: _editVideoconfSettings.EditVideoConfSettingsComponent.templateUrl,
        backdrop: "static",
        resolve: {
          setting: function setting() {
            return angular.copy(initialSetting);
          }
        }
      });
      modal.result.then(function (setting) {
        _this3.$alerts.success(_this3.language.Generic.ServAdmin.kOrgVideoConfSettingEditedSuccess);
        Object.assign(initialSetting, setting);
        _this3.$scope.$applyAsync();
      });
    }
  }, {
    key: "deleteVideoConfSetting",
    value: function deleteVideoConfSetting() {
      var _this4 = this;
      var setting = this.selection.item;
      this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        var work = _this4.settingsRepository.deleteVideoConfSetting(setting.id);
        return _this4.$longWork.execute(work);
      }).then(function () {
        _this4.$alerts.success(_this4.language.Generic.ServAdmin.kOrgVideoConfSettingDeletedSuccess);
        _this4.orgVideoConfSettings = _this4.orgVideoConfSettings.filter(function (x) {
          return x.id != setting.id;
        });
        _this4.selection.dropSelect();
        _this4.$scope.$applyAsync();
      });
    }
  }]);
  return OrgVideoConfSettingsController;
}();
var OrgVideoConfSettingsComponent = {
  controller: OrgVideoConfSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/orgvideoconf/org.videoconf.settings.component.html"
};
exports.OrgVideoConfSettingsComponent = OrgVideoConfSettingsComponent;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditVideoConfSettingsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _nsModal = __webpack_require__(6);
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
var EditVideoConfSettingsController = /*#__PURE__*/function (_NetCityModalControll) {
  EditVideoConfSettingsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "setting", "settingsRepository", "language"];
  _inherits(EditVideoConfSettingsController, _NetCityModalControll);
  var _super = _createSuper(EditVideoConfSettingsController);
  /*@ngInject*/
  function EditVideoConfSettingsController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, setting, settingsRepository, language) {
    var _this;
    _classCallCheck(this, EditVideoConfSettingsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.setting = setting;
    _this.settingsRepository = settingsRepository;
    _this.language = language;
    _this.editMode = _this.setting.id > 0;
    _this.header = _this.editMode ? _this.language.Generic.ServAdmin.kEditOrgVideoConfSettingTitle : _this.language.Generic.ServAdmin.kAddOrgVideoConfSettingTitle;
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
        return _this.cancel();
      }
    }];
    _this.init();
    return _this;
  }
  _createClass(EditVideoConfSettingsController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      if (this.editMode) {
        this.onReady();
        return;
      }
      var fpUrl = "/webapi/video-conf/init-filters";
      this.filterPanelSettings = {
        url: fpUrl,
        initUrl: fpUrl,
        styles: {
          label: "col-md-4 col-lg-4 col-sm-4",
          control: "col-md-8 col-lg-8 col-sm-8"
        },
        events: {
          ready: function ready() {
            return _this2.onReady();
          },
          emptyChoice: function emptyChoice() {
            _this2.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.dataReady = true;
    }
  }, {
    key: "canSave",
    value: function canSave() {
      var _a;
      return this.editMode || !!((_a = this.filterPanel) === null || _a === void 0 ? void 0 : _a.getValues().OrganizationFilter);
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.canSave()) {
        return;
      }
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      if (!this.editMode) {
        this.buildSetting();
      }
      var workSave = !this.editMode ? this.settingsRepository.createVideoConfSetting(this.setting) : this.settingsRepository.editVideoConfSetting(this.setting);
      this.$longWork.execute(workSave).then(function (result) {
        _this3.$uibModalInstance.close(result);
      });
    }
  }, {
    key: "buildSetting",
    value: function buildSetting() {
      var _a;
      var fpVals = this.filterPanel.getValues();
      var fpTexts = this.filterPanel.getTexts();
      this.setting.founderName = (_a = fpTexts.EMID) === null || _a === void 0 ? void 0 : _a.trim();
      this.setting.school.id = parseInt(fpVals.OrganizationFilter);
      this.setting.school.name = fpTexts.OrganizationFilter;
    }
  }]);
  return EditVideoConfSettingsController;
}(_netcityModalCtrl.NetCityModalController);
var EditVideoConfSettingsComponent = {
  controller: EditVideoConfSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/orgvideoconf/edit/edit.videoconf.settings.component.html"
};
exports.EditVideoConfSettingsComponent = EditVideoConfSettingsComponent;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioSettingsComponent = void 0;
var _settings = __webpack_require__(243);
var _editPortfolioSettings = __webpack_require__(268);
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
var PortfolioSettingsController = /*#__PURE__*/function (_BaseSettingsControll) {
  _inherits(PortfolioSettingsController, _BaseSettingsControll);
  var _super = _createSuper(PortfolioSettingsController);
  function PortfolioSettingsController(language, $alerts, $longWork, settingsRepository, portfolioRepository, changeTracker, $q, $uibModal) {
    var _this;
    _classCallCheck(this, PortfolioSettingsController);
    _this = _super.call(this, $alerts, changeTracker, settingsRepository);
    _this.language = language;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.settingsRepository = settingsRepository;
    _this.portfolioRepository = portfolioRepository;
    _this.changeTracker = changeTracker;
    _this.$q = $q;
    _this.$uibModal = $uibModal;
    _this.data = {
      baseGroups: null
    };
    _this.state = {
      ready: false
    };
    _this.load();
    return _this;
  }
  _createClass(PortfolioSettingsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.portfolioRepository.getDefaultPortfolioGroups().then(function (baseGroups) {
        _this2.data.baseGroups = baseGroups.sort(function (n1, n2) {
          return n1.order - n2.order;
        });
        _this2.initSorting();
        _this2.state.ready = true;
      });
    }
  }, {
    key: "edit",
    value: function edit(group) {
      var _this3 = this;
      var dialog = this.$uibModal.open({
        controller: _editPortfolioSettings.EditPortfolioSettingsComponent.controller,
        controllerAs: _editPortfolioSettings.EditPortfolioSettingsComponent.controllerAs,
        templateUrl: _editPortfolioSettings.EditPortfolioSettingsComponent.templateUrl,
        backdrop: "static",
        resolve: {
          defaultPortfolioGroup: function defaultPortfolioGroup() {
            return angular.copy(group);
          }
        }
      });
      dialog.result.then(function () {
        _this3.load();
      });
    }
  }, {
    key: "remove",
    value: function remove(group) {
      var _this4 = this;
      this.$longWork.execute(this.portfolioRepository.deleteDefaultPortfolioGroup(group)).then(function () {
        _this4.$alerts.success("Базовый раздел портфолио был удалён");
        _this4.load();
      });
    }
  }, {
    key: "add",
    value: function add() {
      var _this5 = this;
      var dialog = this.$uibModal.open({
        controller: _editPortfolioSettings.EditPortfolioSettingsComponent.controller,
        controllerAs: _editPortfolioSettings.EditPortfolioSettingsComponent.controllerAs,
        templateUrl: _editPortfolioSettings.EditPortfolioSettingsComponent.templateUrl,
        backdrop: "static",
        resolve: {
          defaultPortfolioGroup: function defaultPortfolioGroup() {
            return {
              id: 0,
              name: ""
            };
          }
        }
      });
      dialog.result.then(function () {
        _this5.load();
      });
    }
  }, {
    key: "initSorting",
    value: function initSorting() {
      var _this6 = this;
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
          var orderedIds = [];
          for (var ind in _this6.data.baseGroups) {
            var baseGroup = _this6.data.baseGroups[ind];
            baseGroup.order = parseInt(ind) + 1;
            orderedIds[ind] = baseGroup.id;
          }
          _this6.portfolioRepository.orderDefaultPortfolioGroups(orderedIds).then(function () {
            _this6.load();
            // Изменить надпись (добавить новую, скорее всего)
            _this6.$alerts.success(_this6.language.Generic.ServAdmin.kPortfolioGroupsSuccSaved);
          });
        },
        start: function start(event, ui) {
          $(ui.helper).addClass("move");
          $(ui.helper).children().css("border-top", 0);
        }
      };
    }
  }]);
  return PortfolioSettingsController;
}(_settings.BaseSettingsController);
var PortfolioSettingsComponent = {
  selector: "portfolioSettings",
  controller: PortfolioSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/portfolio/portfolio.settings.component.html"
};
exports.PortfolioSettingsComponent = PortfolioSettingsComponent;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPortfolioSettingsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _nsModal = __webpack_require__(6);
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
var EditPortfolioSettingsController = /*#__PURE__*/function (_NetCityModalControll) {
  EditPortfolioSettingsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "$alerts", "portfolioRepository", "language", "defaultPortfolioGroup"];
  _inherits(EditPortfolioSettingsController, _NetCityModalControll);
  var _super = _createSuper(EditPortfolioSettingsController);
  /*@ngInject*/
  function EditPortfolioSettingsController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, $alerts, portfolioRepository, language, defaultPortfolioGroup) {
    var _this;
    _classCallCheck(this, EditPortfolioSettingsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.portfolioRepository = portfolioRepository;
    _this.language = language;
    _this.defaultPortfolioGroup = defaultPortfolioGroup;
    _this.buttons = [];
    _this.editMode = defaultPortfolioGroup.id > 0;
    _this.header = _this.editMode ? "Редактирование базового раздела портфолио" : "Добавить базовый раздел портфолио";
    var saveButton = {
      title: language.Generic.Buttons.kSave,
      "class": [_nsModal.ButtonClass.primary],
      icon: "glyphicon glyphicon-floppy-save",
      isEnabled: function isEnabled() {
        return _this.ready;
      },
      action: function action() {
        return _this.save();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      isEnabled: function isEnabled() {
        return _this.ready;
      },
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(saveButton);
    _this.buttons.push(cancelButton);
    _this.ready = true;
    return _this;
  }
  _createClass(EditPortfolioSettingsController, [{
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
              if (!(this.defaultPortfolioGroup.id > 0)) {
                _context.next = 9;
                break;
              }
              _context.next = 6;
              return this.$longWork.execute(this.portfolioRepository.editDefaultPortfolioGroup({
                id: this.defaultPortfolioGroup.id,
                name: this.defaultPortfolioGroup.name
              }));
            case 6:
              this.$alerts.success("Раздел портфолио успешно изменен");
              _context.next = 12;
              break;
            case 9:
              _context.next = 11;
              return this.$longWork.execute(this.portfolioRepository.createDefaultPortfolioGroup({
                name: this.defaultPortfolioGroup.name
              }));
            case 11:
              this.$alerts.success("Раздел портфолио успешно изменен");
            case 12:
              this.$uibModalInstance.close();
            case 13:
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
  return EditPortfolioSettingsController;
}(_netcityModalCtrl.NetCityModalController);
var EditPortfolioSettingsComponent = {
  controller: EditPortfolioSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/settingsblocks/portfolio/edit.portfolio.settings.component.html"
};
exports.EditPortfolioSettingsComponent = EditPortfolioSettingsComponent;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIdComponent = void 0;
var appIdController = function appIdController($scope, pageContext, appIdRepository, $appLoader, $q, $dialogs, changeTracker) {
  pageContext.title = language.Generic.ServAdmin.kServerTrustedCodes;
  pageContext.parent = {
    title: language.Generic.MenuFolders.kFNAppSettings,
    href: "/"
  };
  pageContext.back = {
    history: true
  };
  pageContext.leaveConfirmFunc = function (leave) {
    if (!$scope.appIds || $scope.appIds.filter($scope.filterChanged).length == 0) return leave();
    $dialogs.confirm(language.Generic.Common.kConfirmNoSave2).then(leave);
  };
  angular.extend($scope, {
    language: language,
    state: {
      dataReady: false,
      dataEmpty: true
    },
    systemAppId: null,
    paging: {
      page: 1,
      size: 50,
      limits: {
        min: 1,
        //max: Infinity
        max: 500,
        step: 5,
        ngStep: 1
      }
    }
  });
  var saveDefaultData = function saveDefaultData(data) {
    $scope.defaults = $scope.defaults || [];
    data.map(function (item) {
      return $scope.defaults[item.schoolId] = item.applicationKey;
    });
    return data;
  };
  var updateIds = function updateIds(data) {
    var dict = {};
    data.map(function (o) {
      return dict[o.schoolId] = o;
    });
    angular.forEach($scope.appIds, function (value) {
      var schoolId = value.schoolId;
      if (dict.hasOwnProperty(schoolId)) {
        value.id = dict[schoolId].id;
        value.applicationKey = dict[schoolId].applicationKey;
      }
    });
    return data;
  };
  $scope.filterChanged = function (item) {
    return $scope.defaults[item.schoolId] !== item.applicationKey;
  };
  $scope.Reset = function () {
    var items = $scope.appIds.filter($scope.filterChanged);
    angular.forEach(items, function (item) {
      return item.applicationKey = $scope.defaults[item.schoolId];
    });
    $scope.selectedItem = null;
  };
  $scope.Save = function (item) {
    appIdRepository.save(item).then(saveDefaultData).then(updateIds).then(function (result) {
      return console.log(result);
    }).then(function () {
      return changeTracker.clearDataChanges();
    });
  };
  $scope.SaveAll = function () {
    var items = $scope.appIds.filter($scope.filterChanged);
    appIdRepository.saveAll(items).then(saveDefaultData).then(updateIds).then(function (result) {
      return console.log(result);
    }).then(function () {
      return $scope.selectedItem = null;
    }).then(function () {
      return changeTracker.clearDataChanges();
    });
    ;
  };
  $scope.Select = function (item, close) {
    if (!item || close && $scope.selectedItem === item) {
      $scope.selectedItem = null;
    } else {
      $scope.selectedItem = item;
    }
  };
  var mainRequest = appIdRepository.get().then(function (data) {
    var compare = function compare(a, b) {
      return a.localeCompare(b);
    };
    var mapedCompare = function mapedCompare(map) {
      return function (a, b) {
        return compare(map(a), map(b));
      };
    };
    return data.sort(mapedCompare(function (x) {
      return x.schoolName;
    })).sort(mapedCompare(function (x) {
      return x.address;
    }));
  }).then(function (data) {
    $scope.appIds = data;
    $scope.state.dataEmpty = !data || !data.length;
    return data;
  }).then(saveDefaultData);
  var keyRequest = appIdRepository.getSystemKey().then(function (data) {
    console.log("key:", data);
    $scope.systemAppId = data;
  });
  $q.all([mainRequest, keyRequest]).then(function () {
    $scope.state.dataReady = true;
    $appLoader.hide();
  });
};
var AppIdComponent = {
  templateUrl: "/static/dist/app/admin/serversettings/appid/template.html",
  controller: appIdController
};
exports.AppIdComponent = AppIdComponent;

/***/ }),

/***/ 27:
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIdRepository = void 0;
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
var AppIdRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AppIdRepository, _BaseRepository);
  var _super = _createSuper(AppIdRepository);
  function AppIdRepository() {
    _classCallCheck(this, AppIdRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AppIdRepository, [{
    key: "get",
    value: function get() {
      return this.$http.get("/webapi/applicationsIds").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSystemKey",
    value: function getSystemKey() {
      return this.$http.get("/webapi/systemkey").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "save",
    value: function save(item) {
      return this.$http.put("/webapi/applicationsIds", [item]).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveAll",
    value: function saveAll(items) {
      return this.$http.put("/webapi/applicationsIds", items).then(this.handleResponse, this.handleError);
    }
  }]);
  return AppIdRepository;
}(_repository.BaseRepository);
exports.AppIdRepository = AppIdRepository;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _repositories = __webpack_require__(26);
var _selectOrgs = __webpack_require__(272);
var _selectOrgs2 = __webpack_require__(227);
var _selectedOrgs = __webpack_require__(274);
var _module = angular.module('irtech.netcity.ui-components');
_module.component(_selectOrgs2.SelectOrganizationsComponent.selector, _selectOrgs2.SelectOrganizationsComponent).component(_selectedOrgs.SelectedOrgsLevelViewComponent.selector, _selectedOrgs.SelectedOrgsLevelViewComponent).component(_selectedOrgs.SelectedOrgsViewComponent.selector, _selectedOrgs.SelectedOrgsViewComponent).service("educOrganizationsRepository", _repositories.EducOrganizationsRepository).service("addressRepository", _repositories.AddressRepository).service("selectOrgsService", _selectOrgs.SelectOrgsService);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsService = void 0;
var _selectOrgsModal = __webpack_require__(273);
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsModalComponent = void 0;
var Modes = _interopRequireWildcard(__webpack_require__(167));
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

/***/ 274:
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

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClientsComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(53));
var _editAuthClients = __webpack_require__(276);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AuthClientsCtrl = /*#__PURE__*/function () {
  AuthClientsCtrl.$inject = ["language", "pageContext", "$appLoader", "$longWork", "$dialogs", "$uibModal", "$alerts", "selectOrgsService", "authClientsRepository"];
  /*@ngInject*/
  function AuthClientsCtrl(language, pageContext, $appLoader, $longWork, $dialogs, $uibModal, $alerts, selectOrgsService, authClientsRepository) {
    _classCallCheck(this, AuthClientsCtrl);
    this.language = language;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.selectOrgsService = selectOrgsService;
    this.authClientsRepository = authClientsRepository;
    this.selection = new _selectable["default"]();
    pageContext.title = this.language.Generic.ServAdmin.kAuthClients;
    pageContext.parent = {
      title: this.language.Generic.MenuFolders.kFNAppSettings,
      href: "/"
    };
    pageContext.back = {
      history: true
    };
    this.load();
  }
  _createClass(AuthClientsCtrl, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.selection.select(null);
      this.data = [];
      this.authClientsRepository.getAuthClients().then(function (data) {
        _this.data = data;
        _this.data.forEach(function (x) {
          return x.allowedAuthTypes = _this.getAllowedAuthTypes(x);
        });
      })["finally"](function () {
        return _this.$appLoader.hide();
      });
    }
  }, {
    key: "getAllowedAuthTypes",
    value: function getAllowedAuthTypes(data) {
      var res = "";
      if (data.authCodeFlow) {
        res = this.addAllowedTypeNameToStr(res, this.language.Generic.ServAdmin.kAuthCodeFlow);
      }
      if (data.refreshTokenFlow) {
        res = this.addAllowedTypeNameToStr(res, this.language.Generic.ServAdmin.kRefreshTokenFlow);
      }
      if (data.clientCredFlow) {
        res = this.addAllowedTypeNameToStr(res, this.language.Generic.ServAdmin.kClientCredentialsFlow);
      }
      if (data.resourceOwnerCredFlow) {
        res = this.addAllowedTypeNameToStr(res, this.language.Generic.ServAdmin.kResourceOwnerPasswordCredentialsFlow);
      }
      return res;
    }
  }, {
    key: "addAllowedTypeNameToStr",
    value: function addAllowedTypeNameToStr(str, allowedTypeName) {
      if (str) {
        return str += ", " + allowedTypeName;
      }
      return str += allowedTypeName;
    }
  }, {
    key: "showOrgs",
    value: function showOrgs(schoolIds) {
      var model = {
        selected: schoolIds,
        settings: {
          multiMode: true,
          readMode: true,
          updateMethod: null
        }
      };
      this.selectOrgsService.showOrgs(model);
    }
  }, {
    key: "canDelete",
    value: function canDelete(authClient) {
      return authClient.clientId != "lacc";
    }
  }, {
    key: "getScopeNames",
    value: function getScopeNames(scopes) {
      if (!scopes || !scopes.length) {
        return "";
      }
      return scopes.map(function (x) {
        return x.name;
      }).reduce(function (res, x) {
        return res + ", " + x;
      });
    }
  }, {
    key: "add",
    value: function add() {
      var authClient = {
        id: -1,
        clientId: null,
        clientName: null,
        clientSecret: null,
        redirectUri: null,
        authCodeFlow: false,
        refreshTokenFlow: false,
        clientCredFlow: false,
        resourceOwnerCredFlow: false,
        allowedAuthTypes: null,
        schoolsInfo: {
          funcTypes: null,
          orgsCount: 0,
          schoolIds: null
        },
        scopes: []
      };
      this.edit(authClient);
    }
  }, {
    key: "edit",
    value: function edit(_authClient) {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _editAuthClients.EditAuthClientsComponent.templateUrl,
        controller: _editAuthClients.EditAuthClientsComponent.controller,
        controllerAs: _editAuthClients.EditAuthClientsComponent.controllerAs,
        resolve: {
          authClient: function authClient() {
            return angular.copy(_authClient);
          },
          authClients: function authClients() {
            return angular.copy(_this2.data);
          }
        }
      });
      modalInstance.result.then(function () {
        return _this2.load();
      });
    }
  }, {
    key: "delete",
    value: function _delete(authClient) {
      var _this3 = this;
      this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        var deleteAuthClientTask = _this3.authClientsRepository.deleteAuthClient(authClient.id);
        return _this3.$longWork.execute(deleteAuthClientTask);
      }).then(function () {
        _this3.$alerts.success(_this3.language.Generic.ServAdmin.kAuthClientDeleted);
        _this3.load();
      });
    }
  }]);
  return AuthClientsCtrl;
}();
var AuthClientsComponent = {
  controller: AuthClientsCtrl,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/authclients/authClients.component.html"
};
exports.AuthClientsComponent = AuthClientsComponent;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAuthClientsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
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
var EditAuthClientsCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  EditAuthClientsCtrl.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "$longWork", "$alerts", "selectOrgsService", "authClientsRepository", "authClient", "authClients"];
  _inherits(EditAuthClientsCtrl, _NetCityModalControll);
  var _super = _createSuper(EditAuthClientsCtrl);
  /*@ngInject*/
  function EditAuthClientsCtrl($scope, $uibModalInstance, changeTracker, $dialogs, language, $longWork, $alerts, selectOrgsService, authClientsRepository, authClient, authClients) {
    var _this;
    _classCallCheck(this, EditAuthClientsCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.selectOrgsService = selectOrgsService;
    _this.authClientsRepository = authClientsRepository;
    _this.authClient = authClient;
    _this.authClients = authClients;
    _this.isLaccAuthClient = false;
    $uibModalInstance.rendered.then(function () {
      return _this.$onModalRendered();
    });
    if (authClient.id >= 0) {
      _this.mode = "edit";
      _this.header = language.Generic.ServAdmin.kEditAuthClient;
      _this.selected = {
        selectedIds: authClient.schoolsInfo.schoolIds
      };
      _this.isLaccAuthClient = authClient.clientId == 'lacc';
    } else {
      _this.mode = "create";
      _this.header = language.Generic.ServAdmin.kAddAuthClient;
      _this.selected = {
        selectedIds: []
      };
    }
    _this.settings = {
      updateMethod: _this.selectSchools.bind(_assertThisInitialized(_this))
    };
    var getScopesTask = _this.authClientsRepository.getScopes().then(function (resp) {
      return _this.scopes = resp;
    });
    _this.$longWork.execute(getScopesTask);
    _this.initButtons();
    return _this;
  }
  _createClass(EditAuthClientsCtrl, [{
    key: "$onModalRendered",
    value: function $onModalRendered() {
      var _this2 = this;
      var clientIdInput = this.form.clientId;
      clientIdInput.$validators["unique"] = function (clientId) {
        var filterClientIdFunc = function filterClientIdFunc(authClient) {
          return authClient.clientId == clientId;
        };
        return _this2.checkUniqueValue(filterClientIdFunc);
      };
      var clientNameInput = this.form.clientName;
      clientNameInput.$validators["unique"] = function (clientName) {
        var filterClientNameFunc = function filterClientNameFunc(authClient) {
          return authClient.clientName == clientName;
        };
        return _this2.checkUniqueValue(filterClientNameFunc);
      };
    }
  }, {
    key: "checkUniqueValue",
    value: function checkUniqueValue(filterFunc) {
      var clients = this.authClients.filter(function (x) {
        return filterFunc(x);
      });
      if (clients.length == 0) {
        return true;
      }
      if (this.mode == "create" && clients.length > 0) {
        return false;
      }
      if (this.mode == "edit" && clients.length > 1) {
        return false;
      }
      if (clients[0].id == this.authClient.id) {
        return true;
      }
      return false;
    }
  }, {
    key: "initButtons",
    value: function initButtons() {
      var _this3 = this;
      this.buttons = [];
      if (this.mode == "create") {
        this.buttons.push({
          action: function action() {
            return _this3.add();
          },
          icon: "glyphicon glyphicon-floppy-save",
          title: this.language.Generic.Buttons.kSave,
          isEnabled: function isEnabled() {
            return !_this3.isLaccAuthClient;
          }
        });
      } else {
        this.buttons.push({
          action: function action() {
            return _this3.edit();
          },
          icon: "glyphicon glyphicon-floppy-save",
          title: this.language.Generic.Buttons.kSave,
          isEnabled: function isEnabled() {
            return !_this3.isLaccAuthClient;
          }
        });
      }
      this.buttons.push({
        action: function action() {
          return _this3.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle",
        title: this.language.Generic.Buttons.kCancel
      });
    }
  }, {
    key: "formTouched",
    value: function formTouched() {
      this.form.clientId.$touched = true;
      this.form.clientName.$touched = true;
      this.form.clientSecret.$touched = true;
      this.form.redirectUrl.$touched = true;
      this.form.authorizationCodeCheckbox.$touched = true;
    }
  }, {
    key: "formIsValid",
    value: function formIsValid() {
      return this.form.$valid && this.anyCheckboxEnabled();
    }
  }, {
    key: "add",
    value: function add() {
      var _this4 = this;
      this.formTouched();
      if (!this.formIsValid()) {
        return;
      }
      var createAuthClientTask = this.authClientsRepository.createAuthClient(this.authClient);
      this.$longWork.execute(createAuthClientTask).then(function (ret) {
        _this4.$alerts.success(_this4.language.Generic.ServAdmin.kAuthClientCreated);
        _this4.changeTracker.clearDataChanges();
        _this4.$uibModalInstance.close(ret);
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this5 = this;
      this.formTouched();
      if (!this.formIsValid()) {
        return;
      }
      var editAuthClientTask = this.authClientsRepository.editAuthClient(this.authClient);
      this.$longWork.execute(editAuthClientTask).then(function (ret) {
        _this5.$alerts.success(_this5.language.Generic.ServAdmin.kAuthClientEdited);
        _this5.changeTracker.clearDataChanges();
        _this5.$uibModalInstance.close(ret);
      });
    }
  }, {
    key: "hasScope",
    value: function hasScope(scope) {
      return this.authClient.scopes.find(function (x) {
        return x.id == scope.id;
      });
    }
  }, {
    key: "toggleScope",
    value: function toggleScope(scope) {
      if (this.hasScope(scope)) {
        this.authClient.scopes = this.authClient.scopes.filter(function (x) {
          return x.id != scope.id;
        });
      } else {
        this.authClient.scopes.push(scope);
      }
    }
  }, {
    key: "isDuplicateName",
    value: function isDuplicateName(name) {
      this.authClients.filter(function (x) {
        return x.clientId == name;
      }).length;
    }
  }, {
    key: "selectSchools",
    value: function selectSchools(selected) {
      var newModel = Object.assign({}, this.selected, selected);
      this.selected = newModel;
      this.authClient.schoolsInfo.schoolIds = selected.selectedIds;
      this.changeTracker.dataWasChanged();
    }
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
    key: "anyCheckboxTouched",
    value: function anyCheckboxTouched() {
      return this.form.authorizationCodeCheckbox.$touched || this.form.refreshToken.$touched || this.form.сlientCredentials.$touched || this.form.resourceOwnerPasswordCredentials.$touched;
    }
  }, {
    key: "anyCheckboxEnabled",
    value: function anyCheckboxEnabled() {
      return this.authClient.authCodeFlow || this.authClient.refreshTokenFlow || this.authClient.clientCredFlow || this.authClient.resourceOwnerCredFlow;
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EditAuthClientsCtrl;
}(_netcityModalCtrl.NetCityModalController);
var EditAuthClientsComponent = {
  controller: EditAuthClientsCtrl,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/serversettings/authclients/editAuthClients.component.html"
};
exports.EditAuthClientsComponent = EditAuthClientsComponent;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClientsRepository = void 0;
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
var AuthClientsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AuthClientsRepository, _BaseRepository);
  var _super = _createSuper(AuthClientsRepository);
  function AuthClientsRepository() {
    _classCallCheck(this, AuthClientsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AuthClientsRepository, [{
    key: "getAuthClients",
    value: function getAuthClients() {
      return this.$http.get("/webapi/authClients").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createAuthClient",
    value: function createAuthClient(dto) {
      return this.$http.put("/webapi/authClients", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editAuthClient",
    value: function editAuthClient(dto) {
      return this.$http.post("/webapi/authClients", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteAuthClient",
    value: function deleteAuthClient(id) {
      return this.$http["delete"]("/webapi/authClients?id=" + id).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getScopes",
    value: function getScopes() {
      return this.$http.get("/webapi/authClients/scopes").then(this.handleResponse, this.handleError);
    }
  }]);
  return AuthClientsRepository;
}(_repository.BaseRepository);
exports.AuthClientsRepository = AuthClientsRepository;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioRepository = void 0;
var _baseRepository = __webpack_require__(27);
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
var PortfolioRepository = /*#__PURE__*/function (_BaseRepository) {
  PortfolioRepository.$inject = ["$http", "$dialogs", "$longWork", "Upload"];
  _inherits(PortfolioRepository, _BaseRepository);
  var _super = _createSuper(PortfolioRepository);
  /*@ngInject*/
  function PortfolioRepository($http, $dialogs, $longWork, Upload) {
    var _this;
    _classCallCheck(this, PortfolioRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.Upload = Upload;
    return _this;
  }
  _createClass(PortfolioRepository, [{
    key: "getPortfolio",
    value: function getPortfolio(portfolioId) {
      return this.$http.get("/webapi/portfolios/".concat(portfolioId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createPortfolioGroup",
    value: function createPortfolioGroup(portfolioId, group) {
      return this.$http.post("/webapi/portfolios/".concat(portfolioId, "/groups"), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editPortfolioGroup",
    value: function editPortfolioGroup(portfolioId, group) {
      return this.$http.put("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(group.id), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deletePortfolioGroup",
    value: function deletePortfolioGroup(portfolioId, groupId) {
      return this.$http["delete"]("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createPortfolioLink",
    value: function createPortfolioLink(portfolioId, groupId, link) {
      return this.$http.post("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/links"), link).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editPortfolioLink",
    value: function editPortfolioLink(portfolioId, groupId, link) {
      return this.$http.put("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/links/").concat(link.id), link).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deletePortfolioLink",
    value: function deletePortfolioLink(portfolioId, groupId, linkId) {
      return this.$http["delete"]("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/links/").concat(linkId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createPortfolioDoc",
    value: function createPortfolioDoc(portfolioId, groupId, doc) {
      return this.Upload.upload({
        url: "/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/docs/"),
        method: "POST",
        data: {
          file: doc.file,
          info: JSON.stringify({
            Id: doc.id,
            Name: doc.name,
            Description: doc.description
          })
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editPortfolioDoc",
    value: function editPortfolioDoc(portfolioId, groupId, doc) {
      return this.Upload.upload({
        url: "/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/docs/").concat(doc.id),
        method: "PUT",
        data: {
          file: doc.file,
          info: JSON.stringify({
            Id: doc.id,
            Name: doc.name,
            Description: doc.description
          })
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deletePortfolioDoc",
    value: function deletePortfolioDoc(portfolioId, groupId, docId) {
      return this.$http["delete"]("/webapi/portfolios/".concat(portfolioId, "/groups/").concat(groupId, "/docs/").concat(docId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProjectPortfolioAccess",
    value: function getProjectPortfolioAccess(portfolioId) {
      return this.$http.get("/webapi/portfolios/".concat(portfolioId, "/access")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "renameProjectPortfolio",
    value: function renameProjectPortfolio(portfolio) {
      return this.$http.put("/webapi/portfolios/projects/", portfolio).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDefaultPortfolioGroups",
    value: function getDefaultPortfolioGroups() {
      return this.$http.get("/webapi/portfolios/default-groups").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createDefaultPortfolioGroup",
    value: function createDefaultPortfolioGroup(command) {
      return this.$http.post("/webapi/portfolios/default-groups", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editDefaultPortfolioGroup",
    value: function editDefaultPortfolioGroup(command) {
      return this.$http.put("/webapi/portfolios/default-groups", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteDefaultPortfolioGroup",
    value: function deleteDefaultPortfolioGroup(defaultGroup) {
      return this.$http["delete"]("/webapi/portfolios/default-groups/".concat(defaultGroup.id)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "orderDefaultPortfolioGroups",
    value: function orderDefaultPortfolioGroups(ids) {
      return this.$http.post("/webapi/portfolios/default-groups/order/", null, {
        params: {
          ids: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return PortfolioRepository;
}(_baseRepository.BaseRepository);
exports.PortfolioRepository = PortfolioRepository;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsProvider = exports.PfdoIntegrationType = void 0;
var ServerSettingsInfo = _interopRequireWildcard(__webpack_require__(29));
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

/***/ 29:
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

/***/ 5:
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

/***/ 53:
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

/***/ 6:
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

/***/ })

/******/ });