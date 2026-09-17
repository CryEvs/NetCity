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
/******/ 	return __webpack_require__(__webpack_require__.s = 524);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
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

/***/ 254:
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolesGuard = exports.RightsGuard = exports.Guards = exports.GuardBuilder = exports.FuncTypeGuard = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RouteAccessRestrict = "RouteAccessRestrict";
var FuncTypeGuard = function FuncTypeGuard(config) {
  return {
    /*@ngInject*/
    functypeGuard: ["appContext", "$q", function functypeGuard(appContext, $q) {
      if (config.allowed && config.allowed.indexOf(appContext.funcType) == -1) {
        return $q.reject(RouteAccessRestrict);
      }
      if (config.disallowed && config.disallowed.indexOf(appContext.funcType) > -1) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.FuncTypeGuard = FuncTypeGuard;
var RightsGuard = function RightsGuard(needRights) {
  return {
    /*@ngInject*/
    rightsGuard: ["appContext", "$q", function rightsGuard(appContext, $q) {
      if (!appContext.hasAnyRight(needRights)) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RightsGuard = RightsGuard;
var RolesGuard = function RolesGuard(needRoles) {
  return {
    /*@ngInject*/
    rolesGuard: ["appContext", "$q", function rolesGuard(appContext, $q) {
      if (!needRoles.some(function (role) {
        return appContext.hasRole(role);
      })) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RolesGuard = RolesGuard;
var GuardBuilder = /*#__PURE__*/function () {
  function GuardBuilder() {
    _classCallCheck(this, GuardBuilder);
    this.guards = {};
  }
  _createClass(GuardBuilder, [{
    key: "Add",
    value: function Add(guardConfig) {
      this.guards = Object.assign(this.guards, guardConfig);
      return this;
    }
  }, {
    key: "Set",
    value: function Set() {
      return this.guards;
    }
  }]);
  return GuardBuilder;
}();
exports.GuardBuilder = GuardBuilder;
var Guards = function Guards() {
  return new GuardBuilder();
};
exports.Guards = Guards;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupRepository = exports.SubjectGroupExpandData = void 0;
var _baseRepository = __webpack_require__(17);
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
var SubjectGroupExpandData;
exports.SubjectGroupExpandData = SubjectGroupExpandData;
(function (SubjectGroupExpandData) {
  SubjectGroupExpandData["Terms"] = "terms";
  SubjectGroupExpandData["UseInfo"] = "useInfo";
  SubjectGroupExpandData["Modules"] = "modules";
  SubjectGroupExpandData["ShortName"] = "shortName";
})(SubjectGroupExpandData || (exports.SubjectGroupExpandData = SubjectGroupExpandData = {}));
var SubjectGroupRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SubjectGroupRepository, _BaseRepository);
  var _super = _createSuper(SubjectGroupRepository);
  function SubjectGroupRepository() {
    _classCallCheck(this, SubjectGroupRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SubjectGroupRepository, [{
    key: "getSg",
    value: function getSg(sgId, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/subjectgroups/".concat(sgId), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.$http.put("/webapi/subjectgroups/", data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(sgId, data) {
      return this.$http.post("/webapi/subjectgroups/".concat(sgId), data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "check",
    value: function check(sgId, data) {
      return this.$http.post("/webapi/subjectgroups/check", data, {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "boundedWithAllClassStudents",
    value: function boundedWithAllClassStudents(sgId) {
      return this.$http.get("/webapi/subjectgroups/boundedWithAllClassStudents", {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSgGradingSystems",
    value: function getSgGradingSystems(sgIds) {
      return this.$http.post("/webapi/subjectgroups/gradingSystems", sgIds, {}).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGroups",
    value: function getGroups(subjectId) {
      var params = {};
      return this.$http.get("/webapi/subjects/".concat(subjectId, "/groups"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSubjectgroups",
    value: function getSubjectgroups(filter, comments, expand) {
      var params = {};
      if (!filter) {
        filter = {};
      }
      if (comments) {
        params.comments = comments;
      }
      if (expand) {
        params.expand = expand;
      }
      if (filter && filter.iupClassId && filter.iupClassId.length > 30) {
        return this.$http.post("/webapi/subjectgroups", filter, {
          params: params
        }).then(this.handleResponse, this.handleError);
      }
      params = angular.extend(filter, params);
      return this.$http.get("/webapi/subjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGradesForSg",
    value: function getGradesForSg(sgId, extraCurricular) {
      var params = {
        sgId: sgId,
        extraCurricular: extraCurricular
      };
      return this.$http.get("/webapi/subjectgroups/grades", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassSubjectgroups",
    value: function getClassSubjectgroups(classId, subjectId, selfCsgId) {
      var params = {
        classId: classId,
        subjectId: subjectId,
        selfCsgId: selfCsgId
      };
      return this.$http.get("/webapi/classsubjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGradingSystems",
    value: function getGradingSystems() {
      return this.$http.get("/webapi/references/gradingSystems").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTerms",
    value: function getTerms(sgId, classId) {
      var isIup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var params = {
        classId: classId,
        sgId: sgId,
        isIup: isIup
      };
      return this.$http.get("/webapi/subjectgroups/terms", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeSubjectGroups",
    value: function removeSubjectGroups(sgId) {
      return this.$http["delete"]("/webapi/subjectgroups/remove", {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "updateSubjectGroups",
    value: function updateSubjectGroups(updateSgInfos) {
      return this.$http.post("/webapi/subjectgroups/update", updateSgInfos).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkAvailableName",
    value: function checkAvailableName(data, sgId) {
      var params = {};
      if (sgId && sgId.length) {
        params.sgId = sgId;
      }
      return this.$http.post("/webapi/subjectgroups/checkavailablename", data, {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "mergeSubjectGroups",
    value: function mergeSubjectGroups(sgId, sgName) {
      var params = {
        sgId: sgId,
        sgName: sgName
      };
      return this.$http.post("/webapi/subjectgroups/merge", null, {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getMergeSubjects",
    value: function getMergeSubjects(teacherId) {
      var params = {
        teacherId: teacherId
      };
      return this.$http.get("/webapi/subjectgroups/loadsubjects", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return SubjectGroupRepository;
}(_baseRepository.BaseRepository);
exports.SubjectGroupRepository = SubjectGroupRepository;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRepository = exports.ClassExpandProp = void 0;
var _baseRepository = __webpack_require__(17);
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
var ClassExpandProp;
exports.ClassExpandProp = ClassExpandProp;
(function (ClassExpandProp) {
  ClassExpandProp["chiefs"] = "chiefs";
  ClassExpandProp["using"] = "using";
  ClassExpandProp["educPrograms"] = "educPrograms";
  ClassExpandProp["room"] = "room";
  ClassExpandProp["hasClassNotWorkingTeacher"] = "hasClassNotWorkingTeacher";
})(ClassExpandProp || (exports.ClassExpandProp = ClassExpandProp = {}));
var ClassesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ClassesRepository, _BaseRepository);
  var _super = _createSuper(ClassesRepository);
  function ClassesRepository() {
    _classCallCheck(this, ClassesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ClassesRepository, [{
    key: "getYearClasses",
    value: function getYearClasses(args) {
      var params = {};
      if (args.grades && args.grades.length) {
        params.grade = args.grades;
      }
      if (args.termId) {
        params.termId = args.termId;
      }
      if (args.profileId && args.profileId > 0) {
        params.profileId = args.profileId;
      }
      if (args.step && args.step > 0) {
        params.step = args.step;
      }
      if (args.directionId && args.directionId > 0) {
        params.directionId = args.directionId;
      }
      if (args.programId && args.programId > 0) {
        params.programId = args.programId;
      }
      if (args.iup) {
        params.iup = args.iup;
      }
      if (args.expand && args.expand.length) {
        params.expand = args.expand;
      }
      if (args.self) {
        params.self = args.self;
      }
      return this.$http.get("/webapi/classes", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getById",
    value: function getById(classId, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/classes/".concat(classId), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "create",
    value: function create(cls, extraData) {
      return this.$http.put("/webapi/classes", cls, {
        params: extraData
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(cls, extraData) {
      return this.$http.post("/webapi/classes", cls, {
        params: extraData
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(cls) {
      return this.$http["delete"]("/webapi/classes", {
        params: {
          id: cls
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassTypes",
    value: function getClassTypes(funcType) {
      return this.$http.get("/webapi/refs/classtypes", {
        params: {
          funcType: funcType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddSpecialization",
    value: function getAddSpecialization() {
      return this.$http.get("/webapi/references/addspecialization").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAgeCategories",
    value: function getAgeCategories() {
      return this.$http.get("/webapi/references/ageCategories").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStayRegimes",
    value: function getStayRegimes() {
      return this.$http.get("/webapi/references/stayRegimes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDouGroupTypes",
    value: function getDouGroupTypes() {
      return this.$http.get("/webapi/references/douGroupTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDouPrograms",
    value: function getDouPrograms() {
      return this.$http.get("/webapi/references/programs").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAges",
    value: function getAges() {
      return this.$http.get("/webapi/references/ages").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassForms",
    value: function getClassForms() {
      return this.$http.get("/webapi/references/classForms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassChiefs",
    value: function getClassChiefs(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/chiefs")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassClassForm",
    value: function getClassClassForm(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/classForm")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassVacations",
    value: function getClassVacations(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/vacations")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGroupDouPrograms",
    value: function getGroupDouPrograms(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/douPrograms")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassLetters",
    value: function getClassLetters(schoolYearId, withAddProg) {
      var data = {};
      if (schoolYearId) {
        data.schoolYearId = schoolYearId;
      }
      if (withAddProg) {
        data.withAddProg = withAddProg;
      }
      return this.$http.get("/webapi/classes/letters", data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherListAndClassChiefs",
    value: function getTeacherListAndClassChiefs(classId) {
      return this.$http.get("/webapi/classes/get-class-teachers", {
        params: {
          classId: classId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setClassChiefs",
    value: function setClassChiefs(classId, chiefs) {
      return this.$http.post("/webapi/classes/set-chiefs", null, {
        params: {
          classId: classId,
          chief: chiefs
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassPeriodType",
    value: function getClassPeriodType(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/periodType")).then(this.handleResponse, this.handleError);
    }
  }]);
  return ClassesRepository;
}(_baseRepository.BaseRepository);
exports.ClassesRepository = ClassesRepository;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrollmentRepository = void 0;
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
var EnrollmentRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EnrollmentRepository, _BaseRepository);
  var _super = _createSuper(EnrollmentRepository);
  function EnrollmentRepository() {
    _classCallCheck(this, EnrollmentRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollmentRepository, [{
    key: "getSubjectGroupStudents",
    value: function getSubjectGroupStudents(sgId, termId) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.get("/webapi/subjectgroupstudents", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getSgEnrollmentInfo",
    value: function getSgEnrollmentInfo(sgId, termId) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.get("/webapi/sgenrollmentinfo", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "addStudentsToSubjectGroup",
    value: function addStudentsToSubjectGroup(sgId, termId, studentIds) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroupstudents", studentIds, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "removeStudentsFromSubjectGroup",
    value: function removeStudentsFromSubjectGroup(sgId, termId, studentIds) {
      var params = {
        sgId: sgId,
        termId: termId,
        studentIds: studentIds
      };
      return this.$http["delete"]("/webapi/subjectgroupstudents", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSubjectGroupsEnrollment",
    value: function getSubjectGroupsEnrollment(sgEnrollArgs, contextReadOnly) {
      var params = sgEnrollArgs || {};
      params.contextReadOnly = contextReadOnly;
      return this.$http.get("/webapi/subjectgroups-enrollment", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "saveSubjectGroupsEnrollment",
    value: function saveSubjectGroupsEnrollment(termId, groupEnrollmentInfo) {
      var params = {
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroups-enrollment", groupEnrollmentInfo, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "copySubjectGroupsEnrollment",
    value: function copySubjectGroupsEnrollment(termId, sgIds) {
      var params = {
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroups-enrollment/copy", sgIds, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getTeacherSubjectGroups",
    value: function getTeacherSubjectGroups(extraCurricular) {
      var params = {
        extraCurricular: extraCurricular
      };
      return this.$http.get("/webapi/users/teacher/subjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherClasses",
    value: function getTeacherClasses() {
      return this.$http.get("/webapi/users/teacher/classes").then(this.handleResponse, this.handleError);
    }
  }]);
  return EnrollmentRepository;
}(_repository.BaseRepository);
exports.EnrollmentRepository = EnrollmentRepository;

/***/ }),

/***/ 373:
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

/***/ 40:
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

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoRepository = void 0;
var _baseRepository = __webpack_require__(17);
var _userinfo = __webpack_require__(405);
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

/***/ 405:
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

/***/ 41:
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

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(525);


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chatsRegistry = __webpack_require__(526);
var _studentchats = __webpack_require__(532);
var _floatInput = __webpack_require__(533);
var _chats = __webpack_require__(535);
var _classes = __webpack_require__(32);
var _subjectGroups = __webpack_require__(28);
var _initchats = __webpack_require__(536);
var _userinfo = __webpack_require__(404);
var _enrollment = __webpack_require__(338);
var _module = angular.module("irtech.netcity.school.chats", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when('/management', _chatsRegistry.ChatsRegistryComponent).when('/', _studentchats.StudentChatsComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.component("chatsRegistryComponent", _chatsRegistry.ChatsRegistryComponent).component("studentChatsComponent", _studentchats.StudentChatsComponent).service("chatsRepository", _chats.ChatsRepository).service("classesRepository", _classes.ClassesRepository).service("subjectGroupRepository", _subjectGroups.SubjectGroupRepository).service("userInfoRepository", _userinfo.UserInfoRepository).service("enrollmentRepository", _enrollment.EnrollmentRepository).service("initChatsService", _initchats.InitChatsService).directive("floatInput", _floatInput.FloatInputDirective).config(config);

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatsRegistryComponent = void 0;
var _registry = __webpack_require__(373);
var _nsModal = __webpack_require__(41);
var _addchat = __webpack_require__(527);
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _common = __webpack_require__(254);
var _vkAuth = __webpack_require__(530);
var _commonRouting = __webpack_require__(255);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var ChatsRegistryController = /*#__PURE__*/function () {
  ChatsRegistryController.$inject = ["pageContext", "appContext", "chatsRepository", "$longWork", "$uibModal", "$dialogs", "$alerts", "initChatsService", "language"];
  /*@ngInject*/
  function ChatsRegistryController(pageContext, appContext, chatsRepository, $longWork, $uibModal, $dialogs, $alerts, initChatsService, language) {
    var _this = this;
    _classCallCheck(this, ChatsRegistryController);
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.chatsRepository = chatsRepository;
    this.$longWork = $longWork;
    this.$uibModal = $uibModal;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.initChatsService = initChatsService;
    this.language = language;
    this.initPage();
    window.vkLinkComplete = function (result) {
      return _this.onLinkComplete(result);
    };
    var initChatsButton = {
      title: "Инициализировать список чатов",
      action: function action() {
        return _this.initChats();
      }
    };
    var addButton = {
      title: this.language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        return _this.add();
      },
      isEnabled: function isEnabled() {
        return !_this.controller.state.emptyFilter;
      }
    };
    var removeButton = {
      title: this.language.Generic.Buttons.kRemove,
      icon: "glyphicon glyphicon-minus-sign",
      style: _nsModal.ButtonClass.danger,
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        return _this.remove();
      }
    };
    var goVkMessenger = {
      title: "Перейти в VK Мессенджер",
      style: _nsModal.ButtonClass.primary,
      action: function action() {
        return _this.goVk();
      }
    };
    var buttons = [];
    if (this.appContext.hasRole(Roles.admin)) {
      buttons.push(initChatsButton);
      buttons.push(addButton);
      buttons.push(removeButton);
    } else if (this.appContext.hasRole(Roles.teacher)) {
      buttons.push(addButton);
      buttons.push(removeButton);
    }
    buttons.push(goVkMessenger);
    var hasStaffRole = this.appContext.hasRole(Roles.admin) || this.appContext.hasRole(Roles.teacher);
    this.registryInfo = {
      url: "/webapi/integration/chats/registry",
      filtersUrl: "/webapi/integration/chats/registry/filter",
      buttons: buttons,
      fieldDecorators: {
        "name": new ClassLinkFieldDecorator(function (item) {
          return _this.editChat(item);
        }, hasStaffRole)
      }
    };
  }
  _createClass(ChatsRegistryController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = "Управление чатами";
      this.pageContext.parent = null;
    }
  }, {
    key: "initChats",
    value: function initChats() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.initChatsService.execute();
            case 2:
              this.controller.load();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "editChat",
    value: function editChat(chat) {
      var _this2 = this;
      var modal = this.openChatInfo(chat.id);
      modal.result.then(function () {
        _this2.controller.load();
      }, function () {
        _this2.controller.load();
      });
    }
  }, {
    key: "add",
    value: function add() {
      var _this3 = this;
      var modal = this.openChatInfo(null);
      modal.result.then(function () {
        _this3.controller.load();
      }, function () {
        _this3.controller.load();
      });
    }
  }, {
    key: "openChatInfo",
    value: function openChatInfo(_chatId) {
      return this.$uibModal.open({
        controller: _addchat.AddChatComponent.controller,
        controllerAs: "$ctrl",
        templateUrl: _addchat.AddChatComponent.templateUrl,
        backdrop: false,
        size: "lg",
        resolve: {
          chatId: function chatId() {
            return _chatId;
          }
        }
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this4 = this;
      var selectedChat = this.controller.selection.items[0];
      var chatId = +selectedChat.id;
      var chatName = selectedChat.name;
      this.$dialogs.confirmDelete("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0442 \"".concat(chatName, "\"?")).then(function () {
        var deleteChatTask = _this4.chatsRepository.removeChat(chatId);
        return _this4.$longWork.execute(deleteChatTask).then(function () {
          _this4.$alerts.success("Чат успешно удалён");
          _this4.controller.load();
        });
      }, function () {});
    }
  }, {
    key: "goVk",
    value: function goVk() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var vkEduProfile, winOptions;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.chatsRepository.getVkEduProfile();
            case 2:
              vkEduProfile = _context2.sent;
              if (vkEduProfile) {
                winOptions = {
                  url: "https://web.vk.me/",
                  name: "_blank"
                };
                (0, _common.windowOpen)(winOptions);
              } else {
                (0, _vkAuth.linkVkEduProfile)(this.chatsRepository, this.appContext);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "onLinkComplete",
    value: function onLinkComplete(error) {
      if (error) {
        this.$dialogs.error(error.message);
        return;
      }
      this.$dialogs.message("Учебный профиль VK Мессенджер успешно привязан");
      this.goVk();
    }
  }]);
  return ChatsRegistryController;
}();
var ClassLinkFieldDecorator = /*#__PURE__*/function () {
  function ClassLinkFieldDecorator(linkAction, enableEdit) {
    _classCallCheck(this, ClassLinkFieldDecorator);
    this.linkAction = linkAction;
    this.template = enableEdit ? "<a href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">{{content}}</a>" : "{{content}}";
  }
  _createClass(ClassLinkFieldDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this5 = this;
      scope["action"] = function (row) {
        _this5.linkAction(row);
      };
    }
  }]);
  return ClassLinkFieldDecorator;
}();
var ChatsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: ChatsRegistryController,
  controllerAs: "$ctrl",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RolesGuard)([Roles.admin, Roles.principal, Roles.teacher])).Set()
};
exports.ChatsRegistryComponent = ChatsRegistryComponent;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddChatComponent = void 0;
var _registry = __webpack_require__(373);
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
var _chats = __webpack_require__(528);
var _selectchatmembers = __webpack_require__(529);
var Roles = _interopRequireWildcard(__webpack_require__(9));
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
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AddChatController = /*#__PURE__*/function (_NetCityModalControll) {
  AddChatController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "$q", "$alerts", "chatsRepository", "classesRepository", "subjectGroupRepository", "userInfoRepository", "enrollmentRepository", "$uibModal", "appContext", "chatId"];
  _inherits(AddChatController, _NetCityModalControll);
  var _super = _createSuper(AddChatController);
  /*@ngInject*/
  function AddChatController($scope, $uibModalInstance, changeTracker, $dialogs, language, $q, $alerts, chatsRepository, classesRepository, subjectGroupRepository, userInfoRepository, enrollmentRepository, $uibModal, appContext, chatId) {
    var _this2;
    _classCallCheck(this, AddChatController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.$q = $q;
    _this2.$alerts = $alerts;
    _this2.chatsRepository = chatsRepository;
    _this2.classesRepository = classesRepository;
    _this2.subjectGroupRepository = subjectGroupRepository;
    _this2.userInfoRepository = userInfoRepository;
    _this2.enrollmentRepository = enrollmentRepository;
    _this2.$uibModal = $uibModal;
    _this2.appContext = appContext;
    _this2.chatId = chatId;
    _this2.buttons = [];
    _this2.dataWasChanged = false;
    _this2.wasCreated = false;
    _this2.editMode = chatId ? true : false;
    _this2.header = _this2.editMode ? "Редактировать чат" : "Добавить новый чат";
    var addButton = {
      title: language.Generic.Buttons.kAdd,
      "class": [_nsModal.ButtonClass.primary],
      action: function action() {
        return _this2.create();
      },
      isDisplayed: function isDisplayed() {
        return !_this2.editMode;
      },
      isEnabled: function isEnabled() {
        return _this2.ready;
      }
    };
    var saveButton = {
      title: language.Generic.Buttons.kSave,
      "class": [_nsModal.ButtonClass.primary],
      action: function action() {
        return _this2.save();
      },
      isDisplayed: function isDisplayed() {
        return _this2.editMode && _this2.isEnabledSetAdmins();
      },
      isEnabled: function isEnabled() {
        return _this2.ready;
      }
    };
    var cancelButton = {
      title: _this2.editMode ? language.Generic.Buttons.kClose : language.Generic.Buttons.kCancel,
      icon: _this2.editMode ? "" : "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this2.close();
      }
    };
    _this2.buttons.push(addButton);
    _this2.buttons.push(saveButton);
    _this2.buttons.push(cancelButton);
    _this2.setRegistryInfo();
    _this2.load();
    return _this2;
  }
  _createClass(AddChatController, [{
    key: "setRegistryInfo",
    value: function setRegistryInfo() {
      var _this3 = this;
      var addMemberButton = {
        title: "Добавить участников",
        style: "btn-info",
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          return _this3.addMembers();
        },
        isHide: function isHide() {
          return !_this3.isEnabledSetAdmins();
        }
      };
      var removeMemberButton = {
        title: this.language.Generic.Buttons.kRemove,
        selectionMode: _registry.SelectionMode.Multiple,
        action: function action() {
          return _this3.removeMembers();
        },
        style: "btn-danger",
        icon: "glyphicon glyphicon-minus-sign",
        isHide: function isHide() {
          return !_this3.isEnabledSetAdmins();
        }
      };
      var setChatAdminsButton = {
        title: "Сделать администратором",
        selectionMode: _registry.SelectionMode.Multiple,
        action: function action() {
          return _this3.setChatAdminsMembers(true);
        },
        style: "btn-danger",
        icon: "glyphicon glyphicon-ok-circle",
        isHide: function isHide() {
          return _this3.isHideSetChatAdminButton();
        }
      };
      var unsetChatAdminsButton = {
        title: "Отменить назначение администратором",
        selectionMode: _registry.SelectionMode.Multiple,
        action: function action() {
          return _this3.setChatAdminsMembers(false);
        },
        style: "btn-danger",
        icon: "glyphicon glyphicon-remove-circle",
        isHide: function isHide() {
          return _this3.isHideUnsetChatAdminButton();
        }
      };
      this.registryInfo = {
        url: "/webapi/integration/chats/".concat(this.chatId, "/members/registry"),
        filtersUrl: "/webapi/integration/chats/".concat(this.chatId, "/members/registry/filter"),
        buttons: [addMemberButton, removeMemberButton, setChatAdminsButton, unsetChatAdminsButton],
        linkButtons: [],
        "export": false,
        registryStyles: {
          table: "table-xs table-bright table-bright-hover",
          filtersForm: "form-xs"
        },
        fieldDecorators: {
          "birthDate": new _registry.DateDecorator(),
          "isAdmin": new AdminFieldDecorator(function (x) {
            return x.toString() == "true" ? _this3.language.Generic.Common.kYes : "";
          })
        },
        filterPanelStyles: {
          compact: true,
          label: "col-md-4",
          control: "col-md-8"
        },
        events: {
          ready: function ready() {
            _this3.controller.selection.isSelected = function (val) {
              return _this3.controller.selection.items.find(function (x) {
                return x.id == val.id;
              });
            };
            _this3.controller.selection.select = function (val) {
              var current = _this3.controller.selection.items.find(function (x) {
                return x.id == val.id;
              });
              if (current) {
                _this3.controller.selection.items = _this3.controller.selection.items.filter(function (x) {
                  return x.id != val.id;
                });
              } else {
                _this3.controller.selection.items.push(val);
              }
            };
          }
        },
        selectable: _registry.SelectionMode.Multiple,
        initialPageSize: 10,
        showSelectAll: true,
        selectableClick: function selectableClick(row) {
          _this3.controller.selection.select(row);
        },
        newPageDontDropSelection: true,
        selectAllRecordsTitle: "Выбрать участников на всех страницах",
        unselectAllRecordsTitle: "Отменить выделение",
        selectedRecordsTitle: "Выбрано участников"
      };
    }
  }, {
    key: "afterChatLoad",
    value: function afterChatLoad(chat, _this) {
      var _a, _b;
      _this.chat = chat;
      if (_this.chat && !_this.appContext.hasRole(Roles.admin) && !((_b = (_a = _this.chat) === null || _a === void 0 ? void 0 : _a.adminIds) === null || _b === void 0 ? void 0 : _b.some(function (x) {
        return x == +_this.appContext.userId;
      }))) {
        _this.registryInfo.selectable = _registry.SelectionMode.Single;
      }
      if (!(chat === null || chat === void 0 ? void 0 : chat.sgId)) {
        return Promise.resolve();
      }
      return _this.subjectGroupRepository.getSg(_this.chat.sgId).then(function (result) {
        _this.subjectGroups = [result];
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      this.ready = false;
      this.members = [];
      this.usersInfo = null;
      this.subjectGroups = [];
      this.teacherSubjects = [];
      this.teacherClasses = [];
      this.teacherSubjectGroups = [];
      this.teacherAllClasses = [];
      var getChatTypes = this.chatsRepository.getChatTypes().then(function (types) {
        _this4.chatTypes = types;
      });
      var getChat = this.chatsRepository.getChat(this.chatId).then(function (chat) {
        return _this4.afterChatLoad(chat, _this4);
      });
      var loads = [getChatTypes, getChat];
      var getClasses = this.classesRepository.getYearClasses({}).then(function (cls) {
        _this4.yearClasses = cls.map(function (x) {
          return x;
        });
        _this4.allYearClasses = cls.map(function (x) {
          return x;
        });
        _this4.setIupClasses();
      });
      loads.push(getClasses);
      if (!this.chatId && !this.appContext.hasRole(Roles.admin) && this.appContext.hasRole(Roles.teacher)) {
        var getTeacherSubjects = this.userInfoRepository.getTeacherSubjects(this.appContext.userId).then(function (result) {
          _this4.teacherSubjects = result;
        });
        loads.push(getTeacherSubjects);
        var getTeacherSubjectGroups = this.enrollmentRepository.getTeacherSubjectGroups().then(function (result) {
          _this4.teacherSubjectGroups = result;
        });
        loads.push(getTeacherSubjectGroups);
        var getTeacherClasses = this.userInfoRepository.getTeacherClasses(this.appContext.userId).then(function (result) {
          _this4.teacherClasses = result;
        });
        loads.push(getTeacherClasses);
        var getTeacherAllClasses = this.enrollmentRepository.getTeacherClasses().then(function (result) {
          _this4.teacherAllClasses = result;
        });
        loads.push(getTeacherAllClasses);
      }
      return this.$q.all(loads).then(function () {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = _this4.teacherSubjects) === null || _a === void 0 ? void 0 : _a.length) && !((_b = _this4.teacherClasses) === null || _b === void 0 ? void 0 : _b.length)) {
          _this4.chatTypes = _this4.chatTypes.filter(function (x) {
            return x.key == _chats.ChatType.ClassSubject;
          });
          _this4.yearClasses = _this4.allYearClasses.filter(function (x) {
            var _a;
            return ((_a = _this4.teacherAllClasses) === null || _a === void 0 ? void 0 : _a.length) && _this4.teacherAllClasses.some(function (y) {
              return y == x.id;
            });
          });
        } else if (!((_c = _this4.teacherSubjects) === null || _c === void 0 ? void 0 : _c.length) && ((_d = _this4.teacherClasses) === null || _d === void 0 ? void 0 : _d.length)) {
          _this4.chatTypes = _this4.chatTypes.filter(function (x) {
            return x.key == _chats.ChatType.Class || x.key == _chats.ChatType.ClassParents;
          });
          _this4.yearClasses = _this4.allYearClasses.filter(function (x) {
            var _a;
            return ((_a = _this4.teacherAllClasses) === null || _a === void 0 ? void 0 : _a.length) && _this4.teacherAllClasses.some(function (y) {
              return y == x.id;
            });
          });
          _this4.setIupClasses();
        } else if (((_e = _this4.teacherSubjects) === null || _e === void 0 ? void 0 : _e.length) && ((_f = _this4.teacherClasses) === null || _f === void 0 ? void 0 : _f.length)) {
          _this4.chatTypes = _this4.chatTypes.filter(function (x) {
            return x.key == _chats.ChatType.Class || x.key == _chats.ChatType.ClassParents || x.key == _chats.ChatType.ClassSubject;
          });
          _this4.yearClasses = _this4.allYearClasses.filter(function (x) {
            var _a;
            return ((_a = _this4.teacherAllClasses) === null || _a === void 0 ? void 0 : _a.length) && _this4.teacherAllClasses.some(function (y) {
              return y == x.id;
            });
          });
          _this4.setIupClasses();
        }
        _this4.changeTracker.clearDataChanges($(".modal"));
        _this4.ready = true;
      }, function () {
        _this4.ready = true;
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this5 = this;
      this.form.$displayErrors = true;
      if (this.form.$invalid) {
        return;
      }
      var chatForCreate = Object.assign({}, this.chat);
      if ((chatForCreate === null || chatForCreate === void 0 ? void 0 : chatForCreate.classId) < 0) {
        chatForCreate.classId = null;
      }
      this.chatsRepository.addChat(chatForCreate).then(function (result) {
        _this5.chatId = result;
        _this5.wasCreated = true;
        _this5.editMode = true;
        _this5.dataWasChanged = true;
        _this5.registryInfo.url = "/webapi/integration/chats/".concat(_this5.chatId, "/members/registry");
        _this5.registryInfo.filtersUrl = "/webapi/integration/chats/".concat(_this5.chatId, "/members/registry/filter");
        _this5.$alerts.success("Чат успешно добавлен");
        _this5.chatsRepository.initChatMembers(_this5.chatId).then(function () {
          _this5.chatsRepository.getChat(_this5.chatId).then(function (chat) {
            return _this5.afterChatLoad(chat, _this5);
          }).then(function () {
            _this5.controller.load();
          });
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      if (this.dataWasChanged || this.wasCreated) {
        this.$uibModalInstance.close();
      } else {
        this.cancel();
      }
    }
  }, {
    key: "isShowClass",
    value: function isShowClass() {
      var _a, _b;
      var chatType = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.chatType;
      return chatType == _chats.ChatType.Class || chatType == _chats.ChatType.ClassParents || chatType == _chats.ChatType.ClassSubject && (!this.editMode || ((_b = this.chat) === null || _b === void 0 ? void 0 : _b.classId));
    }
  }, {
    key: "isShowSubjectGroup",
    value: function isShowSubjectGroup() {
      var _a;
      var chatType = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.chatType;
      return chatType == _chats.ChatType.ClassSubject;
    }
  }, {
    key: "addMembers",
    value: function addMembers() {
      var _this6 = this;
      var modal = this.$uibModal.open({
        controller: _selectchatmembers.SelectChatMembersComponent.controller,
        controllerAs: "$ctrl",
        template: _selectchatmembers.SelectChatMembersComponent.template,
        backdrop: false,
        size: "lg",
        resolve: {
          chatId: function chatId() {
            return _this6.chatId;
          }
        }
      });
      modal.result.then(function () {
        _this6.dataChanged();
      }, function () {
        _this6.dataChanged();
      });
    }
  }, {
    key: "dataChanged",
    value: function dataChanged() {
      this.dataWasChanged = true;
      this.controller.selection.dropSelect();
      this.controller.load();
    }
  }, {
    key: "removeMembers",
    value: function removeMembers() {
      var _this7 = this;
      this.$dialogs.confirmDelete("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A".concat(this.controller.selection.items.length == 1 ? 'а' : 'ов', "?")).then(function () {
        _this7.chatsRepository.removeChatMembers(_this7.chatId, _this7.controller.selection.items.map(function (x) {
          return x.id;
        })).then(function () {
          _this7.dataWasChanged = true;
          _this7.controller.selection.dropSelect();
          _this7.$alerts.success("Участники чата успешно удалены");
          _this7.registryInfo.selectable = _registry.SelectionMode.Empty;
          _this7.controller.load();
        });
      }, function () {});
    }
  }, {
    key: "setChatAdminsMembers",
    value: function setChatAdminsMembers(flag) {
      var _this8 = this;
      this.$dialogs.confirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0436\u0435\u043B\u0430\u0435\u0442\u0435 ".concat(flag ? "сделать" : "снять отметку администратора с", " \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A").concat(this.controller.selection.items.length == 1 ? 'а' : 'ов').concat(flag ? this.controller.selection.items.length == 1 ? ' администратором' : ' администраторами' : "", "?")).then(function () {
        _this8.chatsRepository.setAdmins(_this8.chatId, flag, _this8.controller.selection.items.map(function (x) {
          return x.id;
        })).then(function () {
          _this8.dataWasChanged = true;
          _this8.controller.selection.dropSelect();
          _this8.$alerts.success("Успешно установлены признаки администратора");
          _this8.chatsRepository.getChat(_this8.chatId).then(function (chat) {
            return _this8.afterChatLoad(chat, _this8);
          }).then(function () {
            _this8.controller.load();
          });
        });
      }, function () {});
    }
  }, {
    key: "isHideUnsetChatAdminButton",
    value: function isHideUnsetChatAdminButton() {
      var _a, _b;
      if (!this.isEnabledSetAdmins()) {
        return true;
      }
      if (!((_b = (_a = this.controller.selection) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length)) {
        return true;
      }
      if (this.controller.selection.items.every(function (x) {
        return !x.isAdmin;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: "isEnabledSetAdmins",
    value: function isEnabledSetAdmins() {
      var _this9 = this;
      var _a;
      if (this.appContext.hasRole(Roles.admin)) {
        return true;
      }
      var members = (_a = this.chat) === null || _a === void 0 ? void 0 : _a.adminIds;
      if (!(members === null || members === void 0 ? void 0 : members.length) || !members.some(function (x) {
        return x == _this9.appContext.userId;
      })) {
        return false;
      }
      return true;
    }
  }, {
    key: "isHideSetChatAdminButton",
    value: function isHideSetChatAdminButton() {
      var _a, _b;
      if (!this.isEnabledSetAdmins()) {
        return true;
      }
      if (!((_b = (_a = this.controller.selection) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length)) {
        return true;
      }
      if (this.controller.selection.items.every(function (x) {
        return x.isAdmin;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: "onClassChange",
    value: function onClassChange() {
      var _this10 = this;
      var _a, _b, _c, _d;
      if (((_a = this.chat) === null || _a === void 0 ? void 0 : _a.classId) && ((_b = this.chat) === null || _b === void 0 ? void 0 : _b.chatType) == _chats.ChatType.ClassSubject) {
        var getSubjectGroups = null;
        getSubjectGroups = this.subjectGroupRepository.getSubjectgroups({
          classId: this.chat.classId
        });
        if (((_c = this.chat) === null || _c === void 0 ? void 0 : _c.classId) < 0) {
          getSubjectGroups = this.subjectGroupRepository.getSubjectgroups({
            iupClassId: ["".concat(-((_d = this.chat) === null || _d === void 0 ? void 0 : _d.classId), "_1")]
          });
        }
        getSubjectGroups.then(function (result) {
          var _a, _b;
          if ((_a = _this10.teacherSubjects) === null || _a === void 0 ? void 0 : _a.length) {
            if (((_b = _this10.teacherClasses) === null || _b === void 0 ? void 0 : _b.length) && _this10.teacherClasses.some(function (x) {
              return x.id == _this10.chat.classId;
            })) {
              _this10.subjectGroups = result;
            } else {
              _this10.subjectGroups = result.filter(function (x) {
                var _a;
                return ((_a = _this10.teacherSubjectGroups) === null || _a === void 0 ? void 0 : _a.length) && _this10.teacherSubjectGroups.some(function (y) {
                  return y == x.id;
                });
              });
            }
          } else {
            _this10.subjectGroups = result;
          }
          _this10.generateChatName();
        });
      } else {
        this.subjectGroups = [];
        this.generateChatName();
      }
    }
  }, {
    key: "onSgChange",
    value: function onSgChange() {
      this.generateChatName();
    }
  }, {
    key: "setIupClasses",
    value: function setIupClasses() {
      this.iupClasses = this.yearClasses.filter(function (x) {
        return x.iup;
      });
    }
  }, {
    key: "onChatTypeChange",
    value: function onChatTypeChange() {
      var _this11 = this;
      var _a, _b, _c, _d;
      if (!this.chatId && !this.appContext.hasRole(Roles.admin) && this.appContext.hasRole(Roles.teacher)) {
        if ((((_a = this.chat) === null || _a === void 0 ? void 0 : _a.chatType) == _chats.ChatType.Class || ((_b = this.chat) === null || _b === void 0 ? void 0 : _b.chatType) == _chats.ChatType.ClassParents) && ((_c = this.teacherClasses) === null || _c === void 0 ? void 0 : _c.length)) {
          this.yearClasses = this.allYearClasses.filter(function (x) {
            return _this11.teacherClasses.some(function (y) {
              return y.id == x.id;
            });
          });
          this.setIupClasses();
        } else {
          this.yearClasses = this.allYearClasses.filter(function (x) {
            var _a;
            return ((_a = _this11.teacherAllClasses) === null || _a === void 0 ? void 0 : _a.length) && _this11.teacherAllClasses.some(function (y) {
              return y == x.id;
            });
          });
          this.setIupClasses();
        }
      } else {
        this.yearClasses = this.allYearClasses.map(function (x) {
          return x;
        });
        this.setIupClasses();
      }
      if (!this.chatId && ((_d = this.chat) === null || _d === void 0 ? void 0 : _d.chatType) == _chats.ChatType.ClassSubject) {
        this.yearClasses = this.mapYearClasses(this.yearClasses);
      }
      this.onClassChange();
      this.generateChatName();
    }
  }, {
    key: "mapYearClasses",
    value: function mapYearClasses(yearClasses) {
      if (!yearClasses || !yearClasses.length) {
        return yearClasses;
      }
      var simpleClasses = yearClasses.filter(function (x) {
        return !x.iup;
      });
      var iupGrades = _toConsumableArray(new Set(yearClasses.filter(function (x) {
        return x.iup;
      }).map(function (x) {
        return x.grade.id;
      }))).sort(function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      });
      var iupClasses = iupGrades.map(function (value) {
        return {
          id: -value,
          name: "".concat(value, " *"),
          grade: {
            id: value,
            name: value.toString()
          },
          letter: "",
          iup: true,
          profileId: -1,
          funcType: "",
          chief: null,
          plannedOccupancy: 0,
          room: null,
          classType: null
        };
      });
      return simpleClasses.concat(iupClasses);
    }
  }, {
    key: "save",
    value: function save() {
      var _this12 = this;
      var _a;
      if (!this.changeTracker.isDataChanged($(".modal"))) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return;
      }
      this.chatsRepository.saveChatName(this.chatId, (_a = this.chat) === null || _a === void 0 ? void 0 : _a.chatName).then(function () {
        _this12.changeTracker.clearDataChanges($(".modal"));
        _this12.$alerts.success("Наименование чата успешно изменено");
      });
    }
  }, {
    key: "generateChatName",
    value: function generateChatName() {
      var _this13 = this;
      var _a, _b, _c, _d, _e, _f;
      if (!this.editMode && ((_a = this.chat) === null || _a === void 0 ? void 0 : _a.chatType)) {
        if (this.chat.chatType == _chats.ChatType.Teachers) {
          this.chat.chatName = 'Учительская';
          return;
        }
        if (((_b = this.yearClasses) === null || _b === void 0 ? void 0 : _b.length) && ((_c = this.chat) === null || _c === void 0 ? void 0 : _c.classId)) {
          var cls = (_d = this.yearClasses) === null || _d === void 0 ? void 0 : _d.find(function (x) {
            return x.id == _this13.chat.classId;
          });
          if (!cls) {
            return;
          }
          this.chat.chatName = "".concat(cls.name);
          if (this.chat.chatType == _chats.ChatType.Class) {
            this.chat.chatName = "".concat(this.chat.chatName, " \u043A\u043B\u0430\u0441\u0441");
            return;
          }
          if (this.chat.chatType == _chats.ChatType.ClassParents) {
            this.chat.chatName = "".concat(this.chat.chatName, " \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0438");
            return;
          }
          if (this.chat.chatType == _chats.ChatType.ClassSubject && ((_e = this.chat) === null || _e === void 0 ? void 0 : _e.sgId) && ((_f = this.subjectGroups) === null || _f === void 0 ? void 0 : _f.length)) {
            var sg = this.subjectGroups.find(function (x) {
              return x.id == _this13.chat.sgId;
            });
            if (!sg) {
              return;
            }
            this.chat.chatName = "".concat(this.chat.chatName, "/").concat(sg.name);
          }
        } else {
          this.chat.chatName = "";
        }
      }
    }
  }]);
  return AddChatController;
}(_netcityModalCtrl.NetCityModalController);
var AdminFieldDecorator = /*#__PURE__*/function () {
  function AdminFieldDecorator(map) {
    _classCallCheck(this, AdminFieldDecorator);
    this.map = map;
  }
  _createClass(AdminFieldDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      scope["content"] = this.map(scope["content"]);
      element.parent().addClass("text-center");
    }
  }]);
  return AdminFieldDecorator;
}();
var AddChatComponent = {
  controller: AddChatController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/chats/add/addchat.component.html"
};
exports.AddChatComponent = AddChatComponent;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatType = void 0;
var ChatType;
exports.ChatType = ChatType;
(function (ChatType) {
  ChatType["Teachers"] = "Teachers";
  ChatType["Class"] = "Class";
  ChatType["ClassParents"] = "ClassParents";
  ChatType["ClassSubject"] = "ClassSubject";
})(ChatType || (exports.ChatType = ChatType = {}));

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectChatMembersComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _registry = __webpack_require__(373);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var SelectChatMembersController = /*#__PURE__*/function (_NetCityModalControll) {
  SelectChatMembersController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language", "$longWork", "$alerts", "chatId", "chatsRepository"];
  _inherits(SelectChatMembersController, _NetCityModalControll);
  var _super = _createSuper(SelectChatMembersController);
  /*@ngInject*/
  function SelectChatMembersController($scope, $uibModalInstance, $dialogs, changeTracker, language, $longWork, $alerts, chatId, chatsRepository) {
    var _this2;
    _classCallCheck(this, SelectChatMembersController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.$longWork = $longWork;
    _this2.$alerts = $alerts;
    _this2.chatId = chatId;
    _this2.chatsRepository = chatsRepository;
    _this2.header = "Выбрать участников чата";
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
      url: "/webapi/integration/chats/".concat(_this2.chatId, "/select-members/registry"),
      filtersUrl: "/webapi/integration/chats/".concat(_this2.chatId, "/select-members/registry/filter"),
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
      initialPageSize: 10,
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
  _createClass(SelectChatMembersController, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var userIds;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.controller.selection.selected.length == 0)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              userIds = this.controller.selection.selected.map(function (x) {
                return x.id;
              });
              this.chatsRepository.addChatMembers(this.chatId, userIds).then(function () {
                var selectedAmount = _this3.controller.selection.selected.length;
                _this3.controller.selection.dropSelect();
                _this3.controller.load();
                _this3.$alerts.success("Успешно добавлено " + selectedAmount + " участников");
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return SelectChatMembersController;
}(_netcityModalCtrl.NetCityModalController);
var SelectChatMembersComponent = {
  controller: SelectChatMembersController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\" class=\"select-chat-members-component\">\n\t\t<content-pre-loader ng-if=\"!$ctrl.ready\"></content-pre-loader>\n\t\t<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\" ng-show=\"$ctrl.ready\"></registry>\n\t\t<div class=\"legend print-block\" ng-show=\"$ctrl.ready && !$ctrl.controller.state.loading\">\t\n\t\t\t<div>\n\t\t\t\t<p>\n\t\t\t\t\t<span class=\"legend-label\" style=\"background-color: #ffe074\"></span>\n\t\t\t\t\t<span class=\"legend-description\"> \u2014 \u0423\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</ns-modal>"
};
exports.SelectChatMembersComponent = SelectChatMembersComponent;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authVk = authVk;
exports.linkVkEduProfile = linkVkEduProfile;
var _superappkit = __webpack_require__(531);
var _common = __webpack_require__(254);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
function authVk() {
  var appId = window.appId;
  var superAppToken = window.superAppToken;
  var at = window.at;
  var callback = window.callback;
  _superappkit.Config.init({
    appId: appId
  });
  var authSettings = {
    url: callback,
    state: at,
    action: {
      name: 'login_with_eljour',
      token: superAppToken
    }
  };
  _superappkit.Connect.redirectAuth(authSettings);
}
function absolutePath(href) {
  var link = document.createElement("a");
  link.href = href;
  return link.href;
}
function linkVkEduProfile(chatsRepository, appContext) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var ip, data, accessData, callbackurl, authWin, winOptions, doc;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return chatsRepository.getIp();
        case 2:
          ip = _context.sent;
          data = {
            ip: ip
          };
          _context.next = 6;
          return chatsRepository.getVkAccessData(data);
        case 6:
          accessData = _context.sent;
          callbackurl = absolutePath('/webapi/integration/vk/auth-callback');
          authWin = null;
          winOptions = {
            url: "",
            name: "vk-auth",
            specs: "status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620",
            winChild: authWin
          };
          (0, _common.windowOpen)(winOptions);
          authWin = winOptions.winChild;
          authWin.appId = accessData.appId;
          authWin.superAppToken = accessData.superAppToken;
          authWin.at = appContext.at;
          authWin.callback = callbackurl;
          doc = authWin.document;
          doc.open();
          doc.write("<head><script src=\"/static/dist/app/school/chats/vk-auth.js\"></script><script type=\"text/javascript\">VkAuth.authVk();</script></head>");
          doc.close();
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationProfileEvents = exports.VerificationProfile = exports.UserEvents = exports.User = exports.SDKErrorCodes = exports.OneTapAuthEventsSDK = exports.MiniAppService = exports.MiniAppEvents = exports.MiniApp = exports.MessengerEvents = exports.Messenger = exports.GeoserviceEvents = exports.GeoService = exports.FloatingOneTapAuthEventsSDK = exports.DataPolicyEventsSDK = exports.ConnectEvents = exports.Connect = exports.Config = exports.CommonSDKEvents = exports.ButtonOneTapAuthEventsSDK = exports.BodyOverflowManager = exports.AuthQREvents = exports.AuthQR = exports.AuthCaptchaEventsSDK = exports.Account = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function e(t) {
  return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  })(t);
}
var t = ["vk.com", "vk.ru"],
  n = ["agreements", "promo", "vkc_behavior", "vkc_auth_action", "vkc_brand", "vkc_display_mode", "service_groups", "external_device_id"],
  r = 0,
  o = 1,
  i = 3,
  a = 4,
  s = 6,
  c = 15,
  u = 16,
  l = 82,
  p = !("undefined" == typeof window || !window.document || !window.document.createElement),
  d = p && !!window.addEventListener;
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
function f(e, t) {
  return e(t = {
    exports: {}
  }, t.exports), t.exports;
}
var m = h(f(function (e) {
    function t(n) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = t = function t(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = t = function t(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), t(n);
    }
    e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  })),
  v = function v() {};
if (d) try {
  var g = Object.defineProperty({}, "passive", {
    get: function get() {
      !0;
    }
  });
  window.addEventListener("test", v, g), window.removeEventListener("test", v, g);
} catch (e) {}
!function () {
  if (!p) return !1;
  var e = !1;
  try {
    document.createElement("div").scrollTo({
      top: 0,
      get behavior() {
        return e = !0, "smooth";
      }
    });
  } catch (e) {}
}();
var _ = f(function (e) {
  e.exports = function (e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(_);
var A = f(function (e) {
  e.exports = function (e) {
    if (Array.isArray(e)) return _(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(A);
var y = f(function (e) {
  e.exports = function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(y);
var T = f(function (e) {
  e.exports = function (e, t) {
    if (e) {
      if ("string" == typeof e) return _(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
    }
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(T);
var E = f(function (e) {
  e.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(E), h(f(function (e) {
  e.exports = function (e) {
    return A(e) || y(e) || T(e) || E();
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
var O = h(f(function (e) {
  e.exports = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? S(Object(n), !0).forEach(function (t) {
      O(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
var P = {
  parse: function parse(e) {
    if ("string" != typeof e) return {};
    if (!(e = e.trim().replace(/^[?#&]/, ""))) return {};
    var t = /\?(.+)$/gi.exec(e);
    return (t ? t[1] : e).split("&").reduce(function (e, t) {
      var n = t.split("=");
      return n[1] && (e[n[0]] = decodeURIComponent(n[1])), e;
    }, {});
  },
  stringify: function stringify(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("object" !== m(e) || null === e) return "";
    t = C({
      encode: !0
    }, t);
    var n = function n(e) {
      return t.encode ? encodeURIComponent(e) : String(e);
    };
    return Object.keys(e).reduce(function (r, o) {
      var i = e[o];
      return void 0 === i ? r : null === i ? (t.skipNull || r.push([n(o), ""].join("=")), r) : Array.isArray(i) ? (i.map(function (e) {
        r.push("".concat(n(o), "[]=").concat(n(e)));
      }).join(), r) : (r.push([n(o), n(i)].join("=")), r);
    }, []).join("&");
  }
};
function w(e) {
  return P.stringify(e, {
    skipNull: !0
  });
}
function b(e) {
  return Object.keys(e).filter(function (e) {
    return n.includes(e);
  });
}
function D(e) {
  var t;
  return Boolean(null === (t = b(e)) || void 0 === t ? void 0 : t.length);
}
function N(e) {
  var t = function (e) {
    return b(e).reduce(function (t, n) {
      return t[n] = e[n], t;
    }, {});
  }(e);
  return btoa(JSON.stringify(t));
}
function k(e, t) {
  var n,
    r,
    o = document.createElement("iframe");
  for (var i in e && (o.src = e), o.style.cssText = null !== (n = null == t ? void 0 : t.cssText) && void 0 !== n ? n : "", o.width = "100%", o.height = "100%", o.style.border = "none", null == t ? void 0 : t.properties) t && t.properties.hasOwnProperty(i) && (o[i] = null !== (r = t.properties[i]) && void 0 !== r ? r : "");
  return o;
}
function I() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  var r = function r(t) {
    return t && "object" === e(t);
  };
  return t.reduce(function (e, t) {
    return Object.keys(t).forEach(function (n) {
      var o = e[n],
        i = t[n];
      Array.isArray(o) && Array.isArray(i) ? e[n] = o.concat.apply(o, i) : r(o) && r(i) ? e[n] = I(o, i) : e[n] = i;
    }), e;
  }, {});
}
function R(e, t) {
  return void 0 === e ? t : "number" != typeof e ? e ? 1 : 0 : e;
}
function K(t, n) {
  return t && "object" === e(t) ? Object.keys(t).reduce(function (e, r) {
    return n.includes(r) ? (e[r] = t[r], e) : e;
  }, {}) : t;
}
h(f(function (e) {
  e.exports = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
})), h(f(function (e) {
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  e.exports = function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
var M,
  x,
  L,
  V = new (function () {
    function e() {
      this.savedStyles = [], this.bodyScrollYValue = 0, this.isFreezed = !1;
    }
    return e.prototype.freezeBodyOverflow = function () {
      if (!this.isFreezed) {
        this.isFreezed = !0;
        var e = (n = window.document.documentElement.clientWidth, Math.abs(window.innerWidth - n)),
          t = parseInt(window.getComputedStyle(window.document.body).paddingRight, 10) || 0;
        this.bodyScrollYValue = window.pageYOffset || window.scrollY, this.savedStyles = [], this.savedStyles.push({
          value: window.document.body.style.paddingRight,
          property: "padding-right"
        }, {
          value: window.document.body.style.overflow,
          property: "overflow"
        }, {
          value: window.document.body.style.overflowX,
          property: "overflow-x"
        }, {
          value: window.document.body.style.overflowY,
          property: "overflow-y"
        }), window.document.body.style.setProperty("overflow", "hidden"), window.document.body.style.setProperty("padding-right", e + t + "px");
      }
      var n;
    }, e.prototype.restoreBodyOverflow = function () {
      this.isFreezed && (this.savedStyles.forEach(function (e) {
        var t = e.value,
          n = e.property;
        t ? window.document.body.style.setProperty(n, t) : window.document.body.style.removeProperty(n);
      }), window.scrollTo(0, this.bodyScrollYValue), this.isFreezed = !1);
    }, e;
  }())();
exports.BodyOverflowManager = V;
exports.SDKErrorCodes = L;
exports.CommonSDKEvents = M;
!function (e) {
  e.OPEN = "VKSDKOpen", e.CLOSE = "VKSDKClose", e.LOGOUT = "VKSDKLogout", e.GET_CAPTCHA = "VKSDKGetCaptcha", e.CAPTCHA_SUCCESS = "VKSDKGetCaptchaSuccess", e.CAPTCHA_FAILED = "VKSDKGetCaptchaFail", e.AUTH_NEEDED = "VKSDKAuthNeeded", e.UPDATE_PARAMS = "VKSDKUpdateParams", e.REQUEST_SUPERAPP_TOKEN = "VKSDKRequestSuperAppToken", e.ERROR = "VKSDKError";
}(M || (exports.CommonSDKEvents = M = {})), function (e) {
  e.INIT = "VKSDKInit";
}(x || (x = {})), function (e) {
  e[e.UNKNOWN = 1] = "UNKNOWN", e[e.MISSING_PARAM = 2] = "MISSING_PARAM", e[e.CONNECTION_LOST = 3] = "CONNECTION_LOST", e[e.USER_DENIED = 4] = "USER_DENIED", e[e.INVALID_PARAMS = 5] = "INVALID_PARAMS", e[e.CUSTOM = 6] = "CUSTOM", e[e.LOADING_ERROR = 7] = "LOADING_ERROR", e[e.CONNECT_WINDOW_CLOSED = 7] = "CONNECT_WINDOW_CLOSED", e[e.CONNECT_WINDOW_NOT_OPENED = 8] = "CONNECT_WINDOW_NOT_OPENED", e[e.CONNECT_DOMAIN_NOT_ALLOWED = 9] = "CONNECT_DOMAIN_NOT_ALLOWED", e[e.CONNECT_UNKNOWN_SDK_MESSAGE = 10] = "CONNECT_UNKNOWN_SDK_MESSAGE", e[e.CONNECT_CLIENT_SDK_ERROR = 11] = "CONNECT_CLIENT_SDK_ERROR", e[e.VALIDATE_ERROR = 12] = "VALIDATE_ERROR", e[e.CAPTCHA_ERROR = 14] = "CAPTCHA_ERROR", e[e.OLD_MISSING_PARAM = 100] = "OLD_MISSING_PARAM";
}(L || (exports.SDKErrorCodes = L = {}));
var U = function U(e, t) {
    return 'Wrong "' + e + '" param. ' + (t || "");
  },
  H = function H() {
    return "Connect window was closed.";
  },
  G = function G() {
    return "Connect window was not opened.";
  },
  W = function W(e) {
    return 'URL domain "' + e + '" is not allowed.';
  },
  F = function F(e) {
    return "This SDK message is unknown: " + e;
  },
  j = function j(e) {
    return e.error + ";" + e.errorCode;
  },
  z = function z() {
    return "Loading timeout";
  },
  B = function B(e) {
    return "The " + e + " parameter must be a number";
  },
  Y = function Y(e) {
    return "The " + e + " parameter must be a string";
  },
  q = function q(e) {
    return "The " + e + " is required parameter";
  },
  Z = function Z(e) {
    return "The " + e + " parameter must be a number or a string";
  },
  J = function J(e) {
    return "The " + e + " parameter must be а function";
  },
  _Q = function Q(e, t) {
    return (_Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(e, t);
  };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function X(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  _Q(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var $,
  ee,
  te,
  ne,
  _re = function re() {
    return (_re = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
  };
exports.MiniAppEvents = ee;
function oe(e) {
  return e = e || Object.create(null), {
    on: function on(t, n) {
      (e[t] || (e[t] = [])).push(n);
    },
    off: function off(t, n) {
      e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
    },
    emit: function emit(t, n) {
      (e[t] || []).slice().map(function (e) {
        e(n);
      }), (e["*"] || []).slice().map(function (e) {
        e(t, n);
      });
    }
  };
}
function ie(e) {
  return "number" == typeof e;
}
function ae(e) {
  return "string" == typeof e;
}
function se(e) {
  return void 0 !== e && "" !== e && null !== e;
}
function ce(e) {
  return "function" == typeof e;
}
function ue(e, t, n, r) {
  return {
    type: e,
    code: t,
    message: n,
    params: r
  };
}
function le(e, t) {
  return {
    type: L[L.VALIDATE_ERROR],
    code: L.VALIDATE_ERROR,
    message: e,
    params: t
  };
}
function pe(e) {
  return e.message ? {
    code: e.code,
    reason: e.message,
    data: e.params
  } : {
    code: e.code,
    data: e.params
  };
}
!function (e) {
  e.GET_CAPTCHA = "VKSDKGetCaptcha", e.APP_CLOSE = "VKWebAppClose", e.APP_READY = "VKSDKMiniAppReady", e.RESIZE = "VKSDKMiniAppResize", e.APP_INIT_CONFIG = "VKSDKMiniAppInitConfig", e.OPEN_APP = "VKWebAppOpenApp", e.OPEN_PAY_FORM = "VKWebAppOpenPayForm", e.ACTION_DONE = "VKWebAppActionDone", e.SET_TITLE = "VKWebAppSetTitle", e.AUTH_BY_EXCHANGE_TOKEN = "VKWebAppAuthByExchangeToken", e.FORCE_LOGOUT = "VKWebAppForceLogout";
}($ || ($ = {})), function (e) {
  e.OPEN = "open", e.HIDE = "hide", e.CLOSE = "close", e.SHOW = "show", e.MESSAGE = "message", e.CREATE_APP = "createapp";
}(ee || (exports.MiniAppEvents = ee = {})), function (e) {
  e.SUPERAPP_TOKEN = "VKSDKGeneralSuperAppToken", e.AUTH_NEEDED = "VKSDKGeneralAuthNeeded", e.OPEN_APP = "VKSDKGeneralOpenApp";
}(te || (te = {})), function (e) {
  e.SUPERAPP_TOKEN_CHANGE_V2 = "superAppTokenV2", e.SUPERAPP_TOKEN_CHANGE = "superAppToken";
}(ne || (ne = {}));
var de,
  he = function () {
    function e(e, t, n) {
      void 0 === e && (e = "Parameter validation error"), this.errorText = e, this.params = t, this.valid = n;
    }
    return e.prototype.isValid = function () {
      return Boolean(this.valid);
    }, e.prototype.error = function (e) {
      return this.isValid() ? null : e ? pe(le(this.errorText, this.params)) : le(this.errorText, this.params);
    }, e;
  }(),
  fe = function () {
    function e(e) {
      this.rules = e;
    }
    return e.prototype.validate = function (e) {
      for (var t in this.rules) if (this.rules.hasOwnProperty(t)) for (var n = 0; n < this.rules[t].length; n++) {
        var r = this.rules[t][n];
        if (!r.rule(e[t])) return new he(r.errorText, e, !1);
      }
      return new he("", e, !0);
    }, e;
  }(),
  me = (new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }), new fe({
    token: [{
      rule: ae,
      errorText: Y("token")
    }]
  })),
  ve = new fe({
    event: [{
      rule: ae,
      errorText: Y("event")
    }, {
      rule: se,
      errorText: q("event")
    }],
    handler: [{
      rule: se,
      errorText: q("handler")
    }]
  }),
  ge = new fe({
    app: [{
      rule: function rule(e) {
        return ie(e) || ae(e);
      },
      errorText: Z("app")
    }, {
      rule: se,
      errorText: q("app")
    }]
  }),
  _e = new fe({
    message: [{
      rule: se,
      errorText: q("message")
    }]
  }),
  Ae = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  ye = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  Te = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  Ee = new fe({
    appId: [{
      rule: ie,
      errorText: B("appId")
    }]
  }),
  Oe = {
    appId: 0,
    superAppToken: "",
    superAppTokenV2: "",
    loginDomain: "login.vk.com",
    oauthDomain: "oauth.vk.com",
    connectDomain: "id.vk.com",
    _debug: !1,
    _localhost: !1
  },
  Se = {},
  Ce = function () {
    function e() {}
    return e.init = function (e) {
      if (!e.appId) throw new Error("appId required");
      var t = Ee.validate({
        appId: e.appId
      });
      !t.isValid() && console.error(t.error()), Oe.appId = e.appId, Oe.superAppToken = e.superAppToken || "", Oe.superAppTokenV2 = e.superAppTokenV2 || "", Oe.loginDomain = e.loginDomain || "login.vk.com", Oe.oauthDomain = e.oauthDomain || "oauth.vk.com", Oe.connectDomain = e.connectDomain || "id.vk.com", Oe.appSettings = e.appSettings, Oe._debug = !!e._debug, Oe._localhost = !!e._localhost;
    }, e.get = function () {
      return Oe;
    }, e.setSuperAppToken = function (t, n) {
      void 0 === n && (n = {});
      var r = me.validate({
        token: t
      });
      !r.isValid() && console.error(r.error()), 2 === n.version ? (Oe.superAppTokenV2 = t, e.events.emit(ne.SUPERAPP_TOKEN_CHANGE_V2, t)) : (Oe.superAppToken = t, e.events.emit(ne.SUPERAPP_TOKEN_CHANGE, t));
    }, e.onRequestSuperAppToken = function (e) {
      var t = Ae.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.requestSuperAppToken = e;
    }, e._requestSuperAppToken = function (t, n) {
      var r;
      void 0 === n && (n = {}), Se.requestSuperAppToken && (r = Se.requestSuperAppToken(t, n)), r && r.then(function (t) {
        return e.setSuperAppToken(t, n);
      })["catch"](console.error);
    }, e.onAuth = function (e) {
      var t = ye.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.auth = e;
    }, e._auth = function (t) {
      var n;
      void 0 === t && (t = {}), Se.auth && (n = Se.auth()), n && n.then(function (n) {
        e.setSuperAppToken(n, t);
      })["catch"](console.error);
    }, e.onOpenApp = function (e) {
      Se.openApp = e;
    }, e._openApp = function (e) {
      Se.openApp && Se.openApp(e.app);
    }, e.onLogout = function (e) {
      var t = Te.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.logout = e;
    }, e._logout = function () {
      Se.logout && Se.logout();
    }, e.fetchDomain = function () {
      return Boolean(de) || (de = new Promise(function (e) {
        fetch("https://vk.ru/domain.txt").then(function (e) {
          return e.text();
        }).then(function (e) {
          return e.trim();
        }).then(function (e) {
          Oe.loginDomain = Oe.loginDomain.replace("vk.com", e), Oe.oauthDomain = Oe.oauthDomain.replace("vk.com", e), Oe.connectDomain = Oe.connectDomain.replace("vk.com", e);
        }).then(e)["catch"](function (t) {
          e(), console.warn(t);
        });
      })), de;
    }, e.events = oe(), e;
  }(),
  Pe = new fe({
    iframe: [{
      rule: se,
      errorText: q("iframe")
    }],
    origin: [{
      rule: ae,
      errorText: Y("origin")
    }, {
      rule: se,
      errorText: q("origin")
    }]
  }),
  we = new fe({
    event: [{
      rule: se,
      errorText: q("event")
    }]
  }),
  be = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  De = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }],
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }),
  Ne = function Ne(e) {
    var t = this;
    this.handler = function () {
      return {};
    }, this.destroy = function () {
      delete t.config, window.removeEventListener("message", t.handleMessage);
    }, this.onMessage = function (e) {
      var n = be.validate({
        handler: e
      });
      !n.isValid() && console.error(n.error()), t.handler = e;
    }, this.sendMessage = function (e) {
      var n,
        r = De.validate(e);
      !r.isValid() && console.error(r.error()), null === (n = t.config.iframe.contentWindow) || void 0 === n || n.postMessage(_re({
        type: "vk-sak-sdk"
      }, e), t.config.origin);
    }, this.handleMessage = function (e) {
      var n = we.validate({
        event: e
      });
      !n.isValid() && console.error(n.error()), t.config.origin && e.origin === t.config.origin && e.source === t.config.iframe.contentWindow && e.data && "vk-sak-sdk" === e.data.type && t.handler(e.data);
    };
    var n = Pe.validate(e);
    !n.isValid() && console.error(n.error()), this.config = e, window.addEventListener("message", this.handleMessage);
  },
  ke = function () {
    function e() {
      var e = this;
      this.resolve = function (t) {
        if (Boolean(e.promise)) return e.finished = !0, e.active = !1, e.resolveHandler(t);
      }, this.reject = function (t) {
        if (Boolean(e.promise)) return e.finished = !0, e.active = !1, e.rejectHandler(t);
      };
    }
    return e.prototype.start = function () {
      var e = this;
      this.active = !0, this.finished = !1, this.promise = new Promise(function (t, n) {
        e.resolveHandler = t, e.rejectHandler = n;
      });
    }, e.prototype.get = function () {
      return this.promise;
    }, e;
  }(),
  Ie = ["extend_token", "login_with_user", "login_silent_user", "__sferum_invite_link", "registration_with_phone", "registration_with_email", "validate_phone", "bind_ok_account", "no_password_flow", "confirm_service_action", "login_with_eljour", "login_with_multi_user", "auth_validation_phone", "qr_auth", "multi_account_flow"];
exports.Config = Ce;
function Re(e) {
  return e && Ie.includes(e.name) ? btoa(JSON.stringify(e)) : "";
}
function Ke(e) {
  return e ? btoa(JSON.stringify(e)) : "";
}
function Me(e, t) {
  return void 0 === t && (t = "auth"), Ce.fetchDomain().then(function () {
    var n = Ce.get(),
      r = n.appId,
      o = n.connectDomain,
      i = n.appSettings,
      a = n._debug,
      s = n._localhost,
      c = _re({
        app_id: r,
        response_type: "silent_token",
        v: "1.58.5",
        debug: a ? 1 : null,
        localhost: s ? 1 : null
      }, e);
    i && D(i) && (c.app_settings = N(i));
    var u = w(c);
    return Promise.resolve("https://" + o + "/" + t + "?" + u);
  });
}
var xe,
  Le = [r, o, i, a, s, c, u, l];
!function (e) {
  e.Default = "default", e.NamePhone = "name_phone", e.PhoneName = "phone_name";
}(xe || (xe = {}));
var Ve,
  Ue = [xe.Default, xe.NamePhone, xe.PhoneName];
!function (e) {
  e.Primary = "primary", e.Flat = "flat";
}(Ve || (Ve = {}));
var He = [Ve.Primary, Ve.Flat];
var Ge;
exports.AuthCaptchaEventsSDK = Ge;
!function (e) {
  e.CAPTCHA_SUCCESS = "VKSDKAuthCaptchaSuccess", e.CAPTCHA_FAIL = "VKSDKAuthCaptchaFail";
}(Ge || (exports.AuthCaptchaEventsSDK = Ge = {}));
var We,
  Fe = function Fe(e, t, n) {
    var r = this;
    this.events = oe(), this.showReadyPromiseTask = new ke(), this.init = function () {
      Ce.fetchDomain().then(function () {
        Me(_re(_re({
          origin: location.protocol + "//" + location.host,
          uuid: r.uuid
        }, r.captchaData), {
          scheme: r.scheme
        }), "auth_captcha").then(r.handleCaptcha);
      });
    }, this.createFrame = function () {
      return r.iframe = k("", {
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      border: none;\n      z-index: 99999;\n     "
      }), r;
    }, this.handleError = function (e) {
      var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
      r.events.emit(M.ERROR, t);
    }, this.onMessage = function (e) {
      switch (e.handler) {
        case M.ERROR:
          r.handleError(e.params);
          break;
        case Ge.CAPTCHA_SUCCESS:
          r.showReadyPromiseTask.resolve(e.params), r.destroy();
          break;
        default:
          r.showReadyPromiseTask.reject(), r.destroy();
      }
    }, this.handleCaptcha = function (e) {
      r.iframe.src = e, document.body.appendChild(r.iframe), r.bridge = new Ne({
        iframe: r.iframe,
        origin: "https://" + Ce.get().connectDomain
      }), r.bridge.onMessage(r.onMessage);
    }, this.destroy = function () {
      r.iframe && document.body.removeChild(r.iframe), r.bridge && r.bridge.destroy();
    }, this.show = function () {
      return r.iframe.style.display = "block", new Promise(function (e) {
        r.showReadyPromiseTask.start(), r.showReadyPromiseTask.get().then(e);
      });
    }, this.uuid = e, this.captchaData = t, this.scheme = n || "bright_light", this.createFrame().init();
  },
  je = function () {
    function e(t) {
      var n = this;
      this.readyPromiseResolve = null, this.readyPromise = null, this.child = null, this.initialTitle = window.document.title, this.open = function (e, t) {
        return Ce.fetchDomain().then(function () {
          return n.loading ? (n.getMiniAppUrl(e, t).then(function (e) {
            n.iframe.src = e;
          }), n.loading = new Promise(function (e) {
            n.iframe.onload = function () {
              n.iframe.onload = null, e();
            };
          }), n.readyPromise = new Promise(function (e) {
            return n.readyPromiseResolve = e;
          }), n.eventOpenSettings(), n.readyPromise) : n.preload(e, t)["catch"](console.error);
        });
      }, this.eventOpenSettings = function () {
        n.iframe.style.display = "block", n.params.stackMode || V.freezeBodyOverflow(), n.loading.then(n.handleResize)["catch"](console.error), n.events.emit(ee.OPEN);
      }, this.hide = function () {
        n.iframe.style.display = "none", n.params.stackMode || V.restoreBodyOverflow(), n.events.emit(ee.HIDE);
      }, this.close = function (e) {
        window.document.title !== n.initialTitle && (window.document.title = n.initialTitle), n.params.stackMode || V.restoreBodyOverflow(), n.iframe && n.iframe.remove(), n.bridge && n.bridge.destroy(), delete n.iframe, delete n.bridge, Ce.events.off(ne.SUPERAPP_TOKEN_CHANGE, n.onSuperAppToken), window.removeEventListener("resize", n.handleResize), n.events.emit(ee.CLOSE, e);
      }, this.show = function () {
        if (!n.loading) throw new Error('App is not loaded, use "open" or "preload" methods');
        n.iframe.style.display = "block", n.params.stackMode || V.freezeBodyOverflow(), n.events.emit(ee.SHOW);
      }, this.preload = function (e, t) {
        return Ce.fetchDomain().then(function () {
          var r = document.createElement("iframe"),
            o = window.innerHeight,
            i = isFinite(n.params.zIndex) ? n.params.zIndex : 999999;
          return n.getMiniAppUrl(e, t).then(function (e) {
            r.src = e;
          }), r.setAttribute("allow", "geolocation"), r.style.cssText = "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: " + o + "px;\n      min-height: " + o + "px;\n      border: none;\n      z-index: " + i + ";\n    ", n.iframe = r, document.body.appendChild(n.iframe), n.bridge = new Ne({
            iframe: n.iframe,
            origin: "https://" + Ce.get().connectDomain
          }), n.loading = new Promise(function (e) {
            r.onload = function () {
              r.onload = null, e();
            };
          }), n.readyPromise = new Promise(function (e) {
            return n.readyPromiseResolve = e;
          }), n.bridge.onMessage(n.handleMessage), Ce.events.on(ne.SUPERAPP_TOKEN_CHANGE, n.onSuperAppToken), window.addEventListener("resize", n.handleResize), n.eventOpenSettings(), n.loading;
        });
      }, this.sendMessage = function (e) {
        var t = _e.validate({
          message: e
        });
        !t.isValid() && console.error(t.error()), n.bridge.sendMessage(e);
      }, this.onSuperAppToken = function (e) {
        n.bridge.sendMessage({
          handler: te.SUPERAPP_TOKEN,
          params: {
            result: e
          }
        });
      }, this.handleError = function (e) {
        var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
        n.events.emit(M.ERROR, t);
      }, this.handleMessage = function (e) {
        switch (e.handler) {
          case M.GET_CAPTCHA:
            var t = e.params.uuid,
              r = new Fe(t, {
                captcha_sid: e.params.captcha_sid,
                captcha_img: e.params.captcha_img
              });
            r.show().then(function (e) {
              n.bridge.sendMessage({
                handler: M.CAPTCHA_SUCCESS,
                params: _re({
                  uuid: t
                }, e)
              });
            })["catch"](function () {
              n.bridge.sendMessage({
                handler: M.CAPTCHA_FAILED,
                params: {
                  uuid: t
                }
              }), r.destroy();
            });
            break;
          case $.APP_CLOSE:
            n.hide();
            break;
          case M.ERROR:
            n.handleError(e.params);
            break;
          case $.APP_READY:
            n.resolveReadyPromise(), n.handleUpdateConfig();
            break;
          case $.OPEN_APP:
            n.openMiniapp(e.params);
            break;
          case $.OPEN_PAY_FORM:
            n.openPayForm(e.params);
            break;
          case $.SET_TITLE:
            n.setTitle(e.params);
            break;
          case $.AUTH_BY_EXCHANGE_TOKEN:
            n.onAuthByExchangeToken();
            break;
          case $.FORCE_LOGOUT:
            n.onForceLogout();
            break;
          case te.SUPERAPP_TOKEN:
            Ce._requestSuperAppToken(e.params);
            break;
          case te.AUTH_NEEDED:
            Ce._auth();
            break;
          default:
            n.events.emit(ee.MESSAGE, e);
        }
      }, this.handleResize = function () {
        if (n.iframe) {
          var e = innerWidth,
            t = innerHeight;
          n.iframe.style.height = t + "px", n.iframe.style.minHeight = t + "px", n.bridge.sendMessage({
            handler: $.RESIZE,
            params: {
              viewport_width: e,
              viewport_height: t
            }
          });
        }
      }, this.handleUpdateConfig = function () {
        n.bridge.sendMessage({
          handler: $.APP_INIT_CONFIG,
          params: {
            fullMode: n.params.fullMode,
            hideMenu: n.params.hideMenu,
            scheme: n.params.scheme
          }
        });
      }, this.update = function (e) {
        e && (n.params = I(n.params, e || {}), n.sendUpdateParamsMessage());
      }, this.getMiniAppUrl = function (e, t) {
        return Ce.fetchDomain().then(function () {
          var r = Ce.get(),
            o = r.connectDomain,
            i = r.appId,
            a = r.superAppToken,
            s = r._debug,
            c = r._localhost;
          return "https://" + o + "/mini_app?" + w({
            app: n.params.app,
            host_app_id: i,
            superapp_token: a,
            app_query: e ? JSON.stringify(e) : "",
            app_hash: t || "",
            debug: s ? 1 : null,
            localhost: c ? 1 : null
          });
        });
      }, this.resolveReadyPromise = function () {
        n.readyPromise && n.readyPromiseResolve && (n.readyPromiseResolve(), n.readyPromise = null, n.readyPromiseResolve = null);
      }, this.openMiniapp = function (t) {
        n.child = new e({
          app: t.app_id,
          stackMode: n.params.stackMode
        }), n.events.emit(ee.CREATE_APP, {
          app: n.child,
          location: t.location
        });
      }, this.openPayForm = function (t) {
        var r = _re({}, t.params);
        r.data && (r.data = JSON.stringify(r.data));
        var o = _re(_re({}, r), {
            app_id: t.app_id,
            action: t.action
          }),
          i = new e({
            app: 6217559,
            stackMode: n.params.stackMode
          });
        i.open(o).then(function () {
          return n.hide();
        })["catch"](console.error), i.events.on(ee.MESSAGE, function (e) {
          n.handleVKPayFormMessage(e), i.close(), n.show();
        }), i.events.on(ee.HIDE, function () {
          i.close(), n.close();
        });
      }, this.setTitle = function (e) {
        window.document.title = e.title;
      }, this.onAuthByExchangeToken = function () {
        n.close({
          closedByExchangeToken: !0
        });
      }, this.onForceLogout = function () {
        n.close({
          closedByForceLogout: !0
        });
      }, this.handleVKPayFormMessage = function (e) {
        e.handler === $.ACTION_DONE && n.sendMessage(e), e.handler === M.ERROR && n.handleError(e.params);
      };
      var r = ge.validate(t);
      !r.isValid() && console.error(r.error()), this.params = _re(_re({}, t), {
        app: "number" == typeof t.app ? "app" + t.app : t.app,
        scheme: "string" == typeof t.scheme ? t.scheme : "bright_light"
      }), this.events = oe();
    }
    return e.prototype.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.prototype.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, e.prototype.sendUpdateParamsMessage = function () {
      this.bridge && this.bridge.sendMessage({
        params: this.params,
        handler: M.UPDATE_PARAMS
      });
    }, e;
  }(),
  ze = function () {
    function e() {
      this.stack = [];
    }
    return e.prototype.removeMiniApp = function (e) {
      var t = e.app,
        n = this.stack.lastIndexOf(t);
      if (n > -1 && n === this.stack.length - 1) if (this.stack.splice(n, 1), this.stack.length) {
        this.stack[this.stack.length - 1].show();
        var r = this.stack[this.stack.length - 2];
        setTimeout(function () {
          return null == r ? void 0 : r.hide();
        }, 0);
      } else V.restoreBodyOverflow();
    }, e.prototype.makeHandleMiniAppClose = function (e) {
      var t = this,
        n = e.app;
      return function () {
        t.removeMiniApp({
          app: n
        });
      };
    }, e.prototype.makeHandleMiniAppHide = function (e) {
      var t = this,
        n = e.app;
      return function () {
        var e = t.stack.lastIndexOf(n);
        e > -1 && e === t.stack.length - 1 && setTimeout(function () {
          return n.close();
        }, 0);
      };
    }, e.prototype.handleMiniAppCreate = function (e) {
      var t = e.app,
        n = e.query,
        r = e.hash;
      this.stack.push(t), t.open(n, r)["catch"](console.error), t.events.on(ee.CREATE_APP, this.handleMiniAppCreate.bind(this)), t.events.on(ee.HIDE, this.makeHandleMiniAppHide({
        app: t
      })), t.events.on(ee.CLOSE, this.makeHandleMiniAppClose({
        app: t
      })), V.freezeBodyOverflow();
      var o = this.stack[this.stack.length - 2];
      return setTimeout(function () {
        null == o || o.hide();
      }, 0), t;
    }, Object.defineProperty(e.prototype, "length", {
      get: function get() {
        return this.stack.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.open = function (e) {
      var t = ge.validate(e);
      !t.isValid() && console.error(t.error());
      var n = e.app,
        r = e.query,
        o = e.hash,
        i = new je({
          app: n,
          stackMode: !0
        });
      return this.handleMiniAppCreate({
        app: i,
        query: r,
        hash: o
      }), i;
    }, e.prototype.close = function () {
      var e = this.stack;
      this.stack.splice(0), e.reverse().forEach(function (e) {
        return e.close();
      }), V.restoreBodyOverflow();
    }, e;
  }(),
  Be = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ye = function Ye() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, t = "", n = e; n--;) t += Be[64 * Math.random() | 0];
    return t;
  };
exports.MiniAppService = ze;
exports.MiniApp = je;
exports.GeoserviceEvents = We;
!function (e) {
  e.STATIC_MAP = "VKSDKRequestToGeoservice:staticmap/png/", e.SEARCH = "VKSDKRequestToGeoservice:search", e.OVERALL = "VKSDKRequestToGeoservice:overall", e.DIRECTIONS = "VKSDKRequestToGeoservice:directions", e.ISO = "VKSDKRequestToGeoservice:iso";
}(We || (exports.GeoserviceEvents = We = {}));
var qe,
  Ze,
  Je,
  Qe,
  Xe,
  $e,
  et = function () {
    function e(e) {
      var t = this;
      this.apiKey = e.apiKey, this.requestMap = {};
      var n = document.createElement("iframe");
      this.iframe = n, Ce.fetchDomain().then(function () {
        var e = Ce.get().appId;
        t.getGeoserviceProxyUrl({
          app_id: e
        }).then(function (e) {
          n.src = e;
        }), n.style.cssText = "\n      display: none;\n    ", document.body.appendChild(t.iframe), t.bridge = new Ne({
          iframe: t.iframe,
          origin: "https://" + Ce.get().connectDomain
        }), t.bridge.onMessage(function (e) {
          var n = e.params,
            r = n.requestID,
            o = n.response;
          t.requestMap[r].resolve(o), delete t.requestMap[r];
        });
      });
    }
    return e.prototype.setApiKey = function (e) {
      this.apiKey = e;
    }, e.prototype.getGeoserviceProxyUrl = function (e) {
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.connectDomain,
          r = t._debug,
          o = t._localhost;
        return "https://" + n + "/geoservice?" + w(_re(_re({}, e || {}), {
          origin: location.protocol + "//" + location.host,
          debug: r ? 1 : null,
          localhost: o ? 1 : null
        }));
      });
    }, e.prototype.prepareAnswer = function (e, t, n) {
      var r = this,
        o = Ye();
      return this.bridge.sendMessage({
        handler: "VKSDKRequestToGeoservice:" + e,
        params: _re(_re({}, t), {
          api_key: this.apiKey,
          wrapRequestInJSON: n,
          requestID: o
        })
      }), new Promise(function (e, t) {
        r.requestMap[o] = {
          resolve: e,
          reject: t
        };
      });
    }, e.prototype.getStaticMap = function (e) {
      return this.prepareAnswer("staticmap/png/", e);
    }, e.prototype.encodeCoords = function (e) {
      return this.prepareAnswer("search", e);
    }, e.prototype.decodeCoords = function (e) {
      return this.prepareAnswer("overall", e);
    }, e.prototype.getDirections = function (e) {
      return this.prepareAnswer("directions", e, !0);
    }, e.prototype.getISO = function (e) {
      return this.prepareAnswer("iso", e, !0);
    }, e;
  }();
exports.GeoService = et;
exports.ButtonOneTapAuthEventsSDK = Xe;
exports.FloatingOneTapAuthEventsSDK = Qe;
exports.OneTapAuthEventsSDK = Je;
exports.DataPolicyEventsSDK = qe;
!function (e) {
  e.SHOW_DATA_POLICY = "VKSDKOneTapAuthConnectDataPolicy", e.HIDE_DATA_POLICY = "VKSDKOneTapAuthDataPolicyClose", e.DATA_POLICY_RESULT = "VKSDKOneTapAuthDataPolicyResult", e.SHOW_CAPTCHA = "VKSDKOneTapAuthDataPolicyShowCaptcha";
}(qe || (exports.DataPolicyEventsSDK = qe = {})), function (e) {
  e.SHOW_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsShow", e.HIDE_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsHide", e.ACCEPT_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsAccept", e.DECLINE_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsDecline", e.POLICY_AGREEMENTS_ERROR = "VKSDKOneTapAuthPolicyAgreementsError", e.SHOW_DATA_POLICY = "VKSDKOneTapAuthPolicyAgreementsShowDataPolicy", e.GET_CAPTCHA = "VKSDKGetCaptcha", e.CAPTCHA_SUCCESS = "VKSDKGetCaptchaSuccess", e.CAPTCHA_FAIL = "VKSDKGetCaptchaFail";
}(Ze || (Ze = {})), function (e) {
  e.PHONE_VALIDATION_NEEDED = "VKSDKOneTapAuthPhoneValidationNeeded", e.FULL_AUTH_NEEDED = "VKSDKOneTapAuthFullAuthNeeded", e.AUTH_DATA_LOADED = "VKSDKOneTapAuthDataLoaded", e.NOT_AUTHORIZED = "VKSDKOneTapAuthNotAuthorized", e.LOGIN_SUCCESS = "VKSDKOneTapAuthLoginSuccess", e.RESIZE_FRAME = "VKSDKOneTapResizeFrame", e.SHOW_CAPTCHA = "VKSDKOneTapShowCaptcha", e.VALIDATE_CAPTCHA = "VKSDKOneTapValidateCaptcha", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Je || (exports.OneTapAuthEventsSDK = Je = {})), function (e) {
  e.CLOSE_AUTH = "VKSDKOneTapAuthClose", e.ADAPTIVITY_CHANGE = "VKSDKFloatingOneTapAdaptivityChange", e.ADAPTIVITY_CHANGED = "VKSDKFloatingOneTapAdaptivityChanged", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Qe || (exports.FloatingOneTapAuthEventsSDK = Qe = {})), function (e) {
  e.SHOW_LOGIN = "VKSDKButtonOneTapAuthShowLogin", e.SHOW_LOGIN_OPTIONS = "VKSDKButtonOneTapAuthShowLoginOptions", e.SHOW_AGREEMENTS_DIALOG = "VKSDKButtonOneTapAuthShowAgreementsDialog", e.START_AUTHORIZE = "VKSDKButtonOneTapAuthStartAuthorize", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Xe || (exports.ButtonOneTapAuthEventsSDK = Xe = {})), function (e) {
  e.WRONG_TOKEN = "VKSDKBindAccountErrorWrongToken", e.ALREADY_BIND = "VKSDKBindAccountErrorAlreadyBind";
}($e || ($e = {}));
var tt = new fe({
    url: [{
      rule: ae,
      errorText: Y("url")
    }, {
      rule: se,
      errorText: q("url")
    }]
  }),
  nt = new fe({
    uuid: [{
      rule: ae,
      errorText: Y("uuid")
    }, {
      rule: se,
      errorText: q("uuid")
    }]
  }),
  rt = (new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }), new fe({
    callback: [{
      rule: se,
      errorText: q("callback")
    }]
  })),
  ot = function () {
    function e() {}
    var n;
    return e.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, n = e, e.flags = null, e.events = oe(), e.handleError = function (e) {
      var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
      n.events.emit(M.ERROR, t);
    }, e.silentAuth = function () {
      return Ce.fetchDomain().then(function () {
        var e = Ce.get(),
          t = e.loginDomain,
          n = e.appId,
          r = new ke(),
          o = Ye(),
          i = "https://" + t + "/?act=connect&app_id=" + n + "&response_type=silent_token&uuid=" + o + "&v=1.58.5",
          a = new XMLHttpRequest();
        return a.open("GET", i, !0), a.responseType = "json", a.withCredentials = !0, r.start(), a.onload = function () {
          var e,
            t = a.response,
            n = a.status >= 200 && a.status < 300;
          if (t && (null === (e = t.error) || void 0 === e ? void 0 : e.error_code) === L.CAPTCHA_ERROR) {
            var s = t.error,
              c = s.captcha_sid,
              u = s.captcha_img;
            new Fe(o, {
              captcha_sid: c,
              captcha_img: u
            }).show().then(function (e) {
              var t = i + "&captcha_key=" + e.captcha_key + "&captcha_sid=" + e.captcha_sid;
              a.open("GET", t, !0), a.send();
            });
          } else t && n ? r.resolve({
            provider: "vk",
            payload: a.response
          }) : r.reject();
        }, a.onerror = function () {
          r.reject();
        }, a.send(), r.get();
      });
    }, e.oneTapAuth = function (t, n) {
      if (console.warn("Connect.oneTapAuth method is deprecated. Use Connect.floatingOneTapAuth and Connect.buttonOneTapAuth methods."), !["floating", "button"].includes(t)) return null;
      switch (t) {
        case "button":
          return e.buttonOneTapAuth(n);
        case "floating":
          return e.floatingOneTapAuth(n);
        default:
          return null;
      }
    }, e.floatingOneTapAuth = function (t) {
      var r = rt.validate({
        callback: t.callback
      });
      !r.isValid() && console.error(r.error());
      var o = function () {
          var e,
            t = window.innerWidth,
            n = t <= 768;
          return {
            destroy: function destroy() {
              return window.removeEventListener("resize", e);
            },
            isAdaptive: function isAdaptive() {
              return n;
            },
            observe: function observe(r) {
              e = function e() {
                var e = window.innerWidth;
                t > 768 && e <= 768 ? r(n = !0) : t <= 768 && e > 768 && r(n = !1), t = e;
              }, window.addEventListener("resize", e);
            }
          };
        }(),
        i = function (e, t) {
          var n,
            r,
            o,
            i = {},
            a = e ? "314px" : "334px",
            s = e ? "\n      display: none;\n      position: fixed;\n      bottom: 0;\n      right: 50%;\n      transform: translate(50%, 0);\n      max-width: 468px;\n      width: 100%;\n      height: " + a + ";\n    " : "\n        display: none;\n        position: fixed;\n        top: 0;\n        right: 0;\n        max-width: 400px;\n        width: 100%;\n        height: " + a + ";\n      ";
          return (null === (n = null == t ? void 0 : t.styles) || void 0 === n ? void 0 : n.zIndex) && isFinite(null === (r = null == t ? void 0 : t.styles) || void 0 === r ? void 0 : r.zIndex) && (s += "z-index: " + (null === (o = null == t ? void 0 : t.styles) || void 0 === o ? void 0 : o.zIndex) + ";"), t && (i.skip_success = R(t.skipSuccess, 0), void 0 !== t.scheme && ["bright_light", "space_gray"].includes(t.scheme) && (i.scheme = t.scheme)), {
            pageUrl: "floating_one_tap_auth",
            pageUrlParams: _re({
              adaptive: e ? 1 : 0
            }, i),
            frameStyles: s,
            scheme: (null == t ? void 0 : t.scheme) || "bright_light"
          };
        }(o.isAdaptive(), t.options);
      if (!i) throw new Error("options were not set");
      var a,
        s,
        c,
        u = Ye(),
        l = _re({
          origin: location.protocol + "//" + location.host,
          uuid: u
        }, i.pageUrlParams),
        p = i.pageUrl,
        d = new ke(),
        h = function h() {
          s && s.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: u
            }
          });
        },
        f = function f() {
          a && (a.remove(), a = null), window.removeEventListener("resize", h), o && o.destroy(), s && s.destroy();
        };
      c = new Promise(function (e) {
        d.start(), d.get().then(function (t) {
          e(t);
        });
      });
      var m = function m(r) {
        if (r.params.uuid === u) switch (r.handler) {
          case M.ERROR:
            n.handleError(r.params);
            break;
          case Je.NOT_AUTHORIZED:
            t.callback({
              type: r.handler,
              payload: {
                uuid: u,
                error: "not_authorized"
              }
            }), f(), d.resolve(r.handler);
            break;
          case Je.RESIZE_FRAME:
            a.style.height = r.params.height + "px";
            break;
          case Qe.CLOSE_AUTH:
            t.callback({
              type: r.handler,
              payload: {
                uuid: u
              }
            }), f();
            break;
          case Qe.ADAPTIVITY_CHANGED:
            a.style.display = "block";
            break;
          case Je.AUTH_DATA_LOADED:
            a.style.display = "block", d.resolve(r.handler);
          default:
            e.handleOneTapEvents(r, s, t);
        }
      };
      return a = k("", {
        cssText: null == i ? void 0 : i.frameStyles
      }), document.body.appendChild(a), Ce.fetchDomain().then(function () {
        return Me(l, p).then(function (e) {
          a.src = e, (s = new Ne({
            iframe: a,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(m), o.observe(function (e) {
            s.sendMessage({
              handler: Qe.ADAPTIVITY_CHANGE,
              params: {
                uuid: u,
                is_adaptive: e
              }
            }), e ? (a.style.maxWidth = "468px", a.style.top = "auto", a.style.bottom = "0", a.style.right = "50%", a.style.transform = "translate(50%, 0)") : (a.style.maxWidth = "400px", a.style.top = "0", a.style.bottom = "auto", a.style.right = "0", a.style.transform = "none"), a.style.display = "none";
          }), window.addEventListener("resize", h);
        });
      }), {
        getFrame: function getFrame() {
          return a;
        },
        destroy: f,
        authReadyPromise: c,
        update: function update(e) {
          i = I(i || {}, e), s && i && s.sendMessage({
            handler: Qe.UPDATE_PARAMS,
            params: i
          });
        }
      };
    }, e.buttonOneTapAuth = function (t) {
      var n = rt.validate({
        callback: t.callback
      });
      !n.isValid() && console.error(n.error());
      var o = function (e) {
        var t,
          n,
          o,
          i,
          a,
          s,
          c = {},
          u = 44,
          l = 56;
        return e && (c.display = e.displayMode && Ue.includes(e.displayMode) ? e.displayMode : xe.Default, c.button_skin = e.buttonSkin && He.includes(e.buttonSkin) ? e.buttonSkin : Ve.Primary, c.show_agreements = R(e.showAgreements, 0), c.show_alternative_login = R(e.showAlternativeLogin, 0), void 0 !== e.scheme && ["bright_light", "space_gray"].includes(e.scheme) && (c.scheme = e.scheme), void 0 !== (null === (t = e.buttonStyles) || void 0 === t ? void 0 : t.height) && (u = Number(null === (n = e.buttonStyles) || void 0 === n ? void 0 : n.height), l = Number(null === (o = e.buttonStyles) || void 0 === o ? void 0 : o.height) + 12, c.style_height = null === (i = e.buttonStyles) || void 0 === i ? void 0 : i.height), void 0 !== (null === (a = e.buttonStyles) || void 0 === a ? void 0 : a.borderRadius) && (c.style_border_radius = null === (s = e.buttonStyles) || void 0 === s ? void 0 : s.borderRadius), void 0 !== e.langId && (c.lang_id = Le.includes(e.langId) ? e.langId : r), u += c.show_alternative_login ? l : 0, u += c.show_agreements ? 80 : 0), {
          pageUrl: "button_one_tap_auth",
          pageUrlParams: c,
          frameStyles: "\n        height: " + u + "px;\n      ",
          scheme: (null == e ? void 0 : e.scheme) || "bright_light"
        };
      }(t.options);
      if (!o) throw new Error("options were not set");
      var i,
        a,
        s,
        c = Ye(),
        u = _re({
          origin: location.protocol + "//" + location.host,
          uuid: c
        }, o.pageUrlParams),
        l = o.pageUrl,
        p = new ke();
      s = new Promise(function (e) {
        p.start(), p.get().then(function (t) {
          e(t);
        });
      });
      var d = function d() {
          a && a.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: c
            }
          });
        },
        h = function h(n) {
          if (n.params.uuid === c) switch (n.handler) {
            case Je.RESIZE_FRAME:
              i.style.height = n.params.height + "px";
              break;
            case Je.NOT_AUTHORIZED:
              p.resolve(n.handler);
              break;
            case Xe.SHOW_LOGIN:
            case Xe.SHOW_LOGIN_OPTIONS:
              t.callback({
                type: n.handler,
                payload: {
                  uuid: c
                }
              });
              break;
            case Xe.SHOW_AGREEMENTS_DIALOG:
              e.userPolicyAgreements(c, null == o ? void 0 : o.scheme).show().then(function (e) {
                e && e.accepted && a.sendMessage({
                  handler: Xe.START_AUTHORIZE,
                  params: {
                    uuid: c
                  }
                });
              })["catch"](function () {
                a.sendMessage({
                  handler: Ze.DECLINE_POLICY_AGREEMENTS,
                  params: {
                    uuid: c
                  }
                });
              });
              break;
            case Je.AUTH_DATA_LOADED:
              p.resolve(n.handler);
            default:
              e.handleOneTapEvents(n, a, t);
          }
        };
      i = k("", {
        cssText: null == o ? void 0 : o.frameStyles
      });
      var f = t.container;
      return f && f.appendChild(i), Ce.fetchDomain().then(function () {
        return Me(u, l).then(function (e) {
          i.src = e, (a = new Ne({
            iframe: i,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(h), window.addEventListener("resize", d);
        });
      }), {
        getFrame: function getFrame() {
          return i;
        },
        destroy: function destroy() {
          i && (i.remove(), i = null), window.removeEventListener("resize", d), a && a.destroy();
        },
        authReadyPromise: s,
        update: function update(e) {
          o = I(o || {}, e), a && o && a.sendMessage({
            handler: Xe.UPDATE_PARAMS,
            params: o
          });
        }
      };
    }, e.handleOneTapEvents = function (t, r, o) {
      var i,
        a,
        s = t.params.uuid;
      switch (t.handler) {
        case M.ERROR:
          n.handleError(t.params);
          break;
        case Je.AUTH_DATA_LOADED:
          r.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: s
            }
          });
          break;
        case Je.LOGIN_SUCCESS:
          o.callback({
            type: t.handler,
            provider: "vk",
            payload: t.params
          });
          break;
        case Je.SHOW_CAPTCHA:
          var c = new Fe(s, {
            captcha_sid: t.params.captcha_sid,
            captcha_img: t.params.captcha_img
          }, null === (i = o.options) || void 0 === i ? void 0 : i.scheme);
          c.show().then(function (e) {
            r.sendMessage({
              handler: Ge.CAPTCHA_SUCCESS,
              params: _re({
                uuid: s
              }, e)
            });
          })["catch"](function () {
            r.sendMessage({
              handler: Ge.CAPTCHA_FAIL,
              params: {
                uuid: s
              }
            }), c.destroy();
          });
          break;
        case qe.SHOW_DATA_POLICY:
          e.userDataPolicy(s, null === (a = o.options) || void 0 === a ? void 0 : a.scheme).show().then(function () {
            o.callback({
              type: qe.DATA_POLICY_RESULT,
              payload: {
                uuid: s,
                policyAccepted: !0
              }
            });
          })["catch"](function () {
            o.callback({
              type: qe.DATA_POLICY_RESULT,
              payload: {
                uuid: s,
                policyAccepted: !1
              }
            });
          });
          break;
        case Je.FULL_AUTH_NEEDED:
        case Je.PHONE_VALIDATION_NEEDED:
          o.callback({
            type: t.handler,
            payload: {
              uuid: s
            }
          });
      }
    }, e.userDataPolicy = function (e, t) {
      var r,
        o = nt.validate({
          uuid: e
        });
      !o.isValid() && console.error(o.error());
      var i,
        a = window.innerHeight,
        s = function s() {
          r && (r.style.display = "none");
        },
        c = new ke(),
        u = function u() {
          r && r.remove(), i && i.destroy();
        };
      r = k("", {
        properties: {
          height: a + "px"
        },
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      border: none;\n      z-index: 99999;\n    "
      }), document.body.appendChild(r);
      var l = function l(o) {
        switch (o.handler) {
          case M.ERROR:
            n.handleError(o.params);
            break;
          case qe.HIDE_DATA_POLICY:
            s(), c.resolve(void 0), u();
            break;
          case qe.SHOW_CAPTCHA:
            var a = new Fe(e, {
              captcha_sid: o.params.captcha_sid,
              captcha_img: o.params.captcha_img
            }, t);
            a.show().then(function (t) {
              i.sendMessage({
                handler: Ge.CAPTCHA_SUCCESS,
                params: _re({
                  uuid: e
                }, t)
              }), r.style.display = "block";
            })["catch"](function () {
              i.sendMessage({
                handler: Ge.CAPTCHA_FAIL,
                params: {
                  uuid: e
                }
              }), a.destroy();
            }), s();
            break;
          default:
            s(), c.reject(), u();
        }
      };
      return Ce.fetchDomain().then(function () {
        Me({
          origin: location.protocol + "//" + location.host,
          uuid: e,
          scheme: t || "bright_light"
        }, "user_data_policy").then(function (e) {
          r.src = e;
        }), (i = new Ne({
          iframe: r,
          origin: "https://" + Ce.get().connectDomain
        })).onMessage(l);
      }), {
        show: function show() {
          return r.style.display = "block", new Promise(function (e) {
            c.start(), c.get().then(function (t) {
              e(t);
            });
          });
        },
        hide: s,
        destroy: u
      };
    }, e.userPolicyAgreements = function (t, r) {
      var o,
        i,
        a,
        s,
        c = new ke();
      a = "", s = window.innerHeight, o = k(a, {
        properties: {
          height: s + "px"
        },
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: " + s + "px;\n      min-height: " + s + "px;\n      border: none;\n      z-index: 99999;\n    "
      }), document.body.appendChild(o);
      var u = function u() {
          o && (o.remove(), o = null), i && i.destroy();
        },
        l = function l() {
          o && (o.style.display = "none");
        },
        p = function p(a) {
          switch (a.handler) {
            case M.ERROR:
              n.handleError(a.params);
              break;
            case Ze.ACCEPT_POLICY_AGREEMENTS:
              l(), c.resolve({
                accepted: !0
              }), u();
              break;
            case Ze.DECLINE_POLICY_AGREEMENTS:
              l(), c.resolve({
                accepted: !1
              }), u();
              break;
            case Ze.GET_CAPTCHA:
              var s = new Fe(t, {
                captcha_sid: a.params.captcha_sid,
                captcha_img: a.params.captcha_img
              }, r);
              s.show().then(function (e) {
                i.sendMessage({
                  handler: Ze.CAPTCHA_SUCCESS,
                  params: _re({
                    uuid: t
                  }, e)
                }), o.style.display = "block";
              })["catch"](function () {
                i.sendMessage({
                  handler: Ze.CAPTCHA_FAIL,
                  params: {
                    uuid: t
                  }
                }), s.destroy();
              }), l();
              break;
            case Ze.SHOW_DATA_POLICY:
              l();
              var p = function p() {
                o.style.display = "block";
              };
              e.userDataPolicy(t, r).show().then(p)["catch"](p);
              break;
            case Ze.POLICY_AGREEMENTS_ERROR:
            case Ze.HIDE_POLICY_AGREEMENTS:
            default:
              c.reject(), u();
          }
        };
      return Ce.fetchDomain().then(function () {
        Me({
          origin: location.protocol + "//" + location.host,
          uuid: t,
          scheme: r || "bright_light"
        }, "user_policy_agreements").then(function (e) {
          o.src = e, (i = new Ne({
            iframe: o,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(p);
        });
      }), {
        show: function show() {
          return o.style.display = "block", new Promise(function (e) {
            c.start(), c.get().then(function (t) {
              e(t);
            });
          });
        },
        hide: l,
        destroy: u
      };
    }, e.userVisibleAuth = function (n) {
      return Ce.fetchDomain().then(function () {
        var r = Ye(),
          o = Ce.get(),
          i = _re(_re({
            origin: location.protocol + "//" + location.host,
            uuid: r,
            debug: o._debug ? 1 : null,
            localhost: o._localhost ? 1 : null
          }, K(n, ["screen", "source"])), {
            scheme: null == n ? void 0 : n.scheme
          }),
          a = Re(null == n ? void 0 : n.action);
        a && (i.action = a);
        var s = Ke(null == n ? void 0 : n.entry);
        return s && (i.initial_stats_info = s), Me(i).then(function (n) {
          e.flags && (n = n + "#" + w(e.flags));
          var o = screen.height / 2 - 280,
            i = screen.width / 2 - 410,
            a = window.open(n, "_blank", "top=" + o + ",left=" + i + ",width=820,height=560,location");
          if (!a) {
            var s = pe(ue(L[L.CONNECT_WINDOW_NOT_OPENED], L.CONNECT_WINDOW_NOT_OPENED, G()));
            return Promise.reject(s);
          }
          return new Promise(function (e, n) {
            var o = setInterval(function () {
              if (!a || a.closed) {
                window.removeEventListener("message", i), clearInterval(o);
                var e = pe(ue(L[L.CONNECT_WINDOW_CLOSED], L.CONNECT_WINDOW_CLOSED, H()));
                n(e);
              }
            }, 1e3);
            function i(s) {
              if (s.source === a && a) if (window.removeEventListener("message", i), clearInterval(o), function (e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (e.slice(e.length - r.length) === r) return !0;
                }
                return !1;
              }(s.origin)) {
                if (s.data.action === "vk_connect_response" + r) {
                  var c = s.data.payload;
                  if (a.close(), c.error) {
                    l = pe(ue(L[L.CONNECT_CLIENT_SDK_ERROR], L.CONNECT_CLIENT_SDK_ERROR, j(c.error)));
                    n(l);
                  } else e({
                    provider: "vk",
                    payload: c
                  });
                } else if (s.data.action === "oauth_callback" + r) e({
                  provider: s.data.payload.name
                }), a.close();else if (s.data.action === "skip_callback" + r) {
                  var u = s.data.payload.redirectURL;
                  u && (window.location.href = u), a.close();
                } else if (s.data.action === "bind_ok_account" + r) e(s.data.payload), a.close();else {
                  a.close();
                  l = pe(ue(L[L.CONNECT_UNKNOWN_SDK_MESSAGE], L.CONNECT_UNKNOWN_SDK_MESSAGE, F(JSON.stringify(s.data))));
                  n(l);
                }
              } else {
                a.close();
                var l = pe(ue(L[L.CONNECT_DOMAIN_NOT_ALLOWED], L.CONNECT_DOMAIN_NOT_ALLOWED, W(s.origin)));
                n(l);
              }
            }
            window.addEventListener("message", i);
          });
        });
      });
    }, e.redirectAuth = function (e) {
      var t = tt.validate(e);
      !t.isValid() && console.error(t.error());
      var n = Ye(),
        r = _re(_re({
          redirect_uri: e.url,
          uuid: n
        }, K(e, ["screen", "source"])), {
          scheme: null == e ? void 0 : e.scheme
        }),
        o = Re(null == e ? void 0 : e.action);
      o && (r.action = o);
      var i = Ke(null == e ? void 0 : e.entry);
      i && (r.initial_stats_info = i), (null == e ? void 0 : e.state) && (r.redirect_state = e.state), Me(r).then(function (e) {
        location.assign(e);
      });
    }, e.logout = function () {
      return Ce.fetchDomain().then(function () {
        var e = Ce.get(),
          t = e.connectDomain,
          n = e.appId,
          r = e.superAppTokenV2;
        if (!r) return Promise.reject(U("superappToken", "SuperappToken is undefined"));
        var o = w({
            origin: location.protocol + "//" + location.host,
            host_app_id: n,
            superapp_token: r
          }),
          i = fetch("https://" + t + "/logout?" + o, {
            credentials: "include"
          });
        return Ce.events.emit(M.LOGOUT), Ce.setSuperAppToken(""), Ce.setSuperAppToken("", {
          version: 2
        }), i;
      });
    }, e;
  }(),
  it = {
    OneTapAuthEventsSDK: Je,
    FloatingOneTapAuthEventsSDK: Qe,
    ButtonOneTapAuthEventsSDK: Xe,
    DataPolicyEventsSDK: qe
  },
  at = ["open_account"];
exports.ConnectEvents = it;
exports.Connect = ot;
var st,
  ct,
  ut = function () {
    function e() {}
    return e.open = function (e) {
      var t = me.validate({
        token: e.action.token
      });
      return !t.isValid() && console.error(t.error()), Ce.fetchDomain().then(function () {
        var t,
          n = Ye(),
          r = Ce.get(),
          o = _re({
            origin: location.protocol + "//" + location.host,
            uuid: n,
            debug: R(r._debug, 0),
            localhost: R(r._localhost, 0)
          }, K(e, ["screen", "source"])),
          i = (t = null == e ? void 0 : e.action) && at.includes(t.name) ? btoa(JSON.stringify(t)) : "";
        return i && (o.action = i), function (e) {
          return Ce.fetchDomain().then(function () {
            var t = Ce.get(),
              n = t.appId,
              r = t.connectDomain,
              o = t.appSettings,
              i = t._debug,
              a = t._localhost,
              s = _re({
                app_id: n,
                response_type: "silent_token",
                v: "1.58.5",
                debug: i ? 1 : null,
                localhost: a ? 1 : null
              }, e);
            o && D(o) && (s.app_settings = N(o));
            var c = w(s);
            return Promise.resolve("https://" + r + "/open_account?" + c);
          });
        }(o).then(function (e) {
          if (!window.open(e, "_blank")) {
            var t = pe(ue(L[L.CONNECT_WINDOW_NOT_OPENED], L.CONNECT_WINDOW_NOT_OPENED, G()));
            return Promise.reject(t);
          }
          return Promise.resolve();
        });
      });
    }, e;
  }();
exports.Account = ut;
exports.MessengerEvents = ct;
!function (e) {
  e.INTERNAL_RESIZE = "VKSDKMessengerInternalResize", e.INTERNAL_LOGOUT = "VKSDKMessengerInternalLogout";
}(st || (st = {})), function (e) {
  e.CLOSE_CHAT = "VKSDKMessengerCloseChat";
}(ct || (exports.MessengerEvents = ct = {}));
var lt,
  pt = function () {
    function e() {}
    return e.log = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, e;
  }(),
  dt = new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }),
  ht = function () {
    function e() {
      var e = this;
      this.config = {}, this.params = {}, this.loadingTask = new ke(), this.initTask = new ke(), this.cssText = "", this.handleError = function (t) {
        var n = pe(ue(L[L.CUSTOM], L.CUSTOM, "", t));
        e.events.emit(M.ERROR, n);
      }, this.events = oe(), this.handleBridgeMessage = this.handleBridgeMessage.bind(this), this.handleChangeSuperAppToken = this.handleChangeSuperAppToken.bind(this), this.close = this.close.bind(this), this.handleLogout = this.handleLogout.bind(this);
    }
    return e.prototype.preload = function (e) {
      var t = this;
      return Ce.fetchDomain().then(function () {
        return t.validateParams(e).then(function () {
          return t.updateParams(e), t.createIframe().then(function () {
            return t.initTask.start(), t.loadingTask.start(), t.timeoutTimer = setTimeout(function () {
              if (!t.initTask.finished) {
                var e = pe(ue(L[L.LOADING_ERROR], L.LOADING_ERROR, z()));
                t.initTask.reject(e);
              }
            }, 5e3), t.iframe.onload = function () {
              t.iframe.onload = null, t.loadingTask.resolve();
            }, t.bridge = new Ne({
              iframe: t.iframe,
              origin: "https://" + Ce.get().connectDomain
            }), t.bridge.onMessage(t.handleBridgeMessage), Ce.events.on(ne.SUPERAPP_TOKEN_CHANGE_V2, t.handleChangeSuperAppToken), Ce.events.on(M.LOGOUT, t.close), t.getIframeContainer().appendChild(t.iframe), t.loadingTask.get();
          });
        });
      });
    }, e.prototype.open = function (e) {
      var t = this;
      return this.validateParams(e).then(function () {
        return t.initTask.finished ? (t.updateParams(e), Promise.resolve()) : t.initTask.active || t.initTask.finished ? (t.updateParams(e), t.initTask.get()) : t.preload(e).then(function () {
          return t.initTask.get();
        });
      });
    }, e.prototype.update = function (e, t) {
      e && this.updateParams(e), t && this.updateConfig(t);
    }, e.prototype.close = function () {
      this.iframe && (this.iframe.onload = null, this.iframe.remove()), this.bridge && this.bridge.destroy(), Ce.events.off(ne.SUPERAPP_TOKEN_CHANGE_V2, this.handleChangeSuperAppToken), Ce.events.off(M.LOGOUT, this.close), delete this.iframe, delete this.bridge, this.loadingTask = new ke(), this.initTask = new ke(), this.events.emit(M.CLOSE);
    }, e.prototype.sendMessage = function (e) {
      var t = _e.validate({
        message: e
      });
      !t.isValid() && console.error(t.error()), this.bridge.sendMessage(e);
    }, e.prototype.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.prototype.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, e.prototype.handleInit = function () {
      this.initTask.finished || (clearTimeout(this.timeoutTimer), this.initTask.resolve()), this.sendUpdateParamsMessage(), this.iframe.style.display = "block";
    }, e.prototype.handleRequestAuth = function () {
      Ce._auth({
        version: 2
      });
    }, e.prototype.handleRequestSuperAppToken = function (e) {
      Ce._requestSuperAppToken(e, {
        version: 2
      });
    }, e.prototype.handleChangeSuperAppToken = function (e) {
      this.bridge.sendMessage({
        handler: M.REQUEST_SUPERAPP_TOKEN + "Success",
        params: {
          result: e
        }
      });
    }, e.prototype.handleBridgeMessage = function (e) {
      switch (pt.log(e), e.handler) {
        case x.INIT:
          this.handleInit();
          break;
        case M.REQUEST_SUPERAPP_TOKEN:
          this.handleRequestSuperAppToken(e.params);
          break;
        case M.AUTH_NEEDED:
          this.handleRequestAuth();
          break;
        case M.CLOSE:
          this.close();
          break;
        case M.ERROR:
          this.handleError(e.params);
          break;
        default:
          return;
      }
    }, e.prototype.handleLogout = function () {
      Ce._logout();
    }, e.prototype.handleAfterUpdateParams = function () {
      this.sendUpdateParamsMessage();
    }, e.prototype.handleAfterUpdateConfig = function () {}, e.prototype.handleAfterCreateIframe = function () {}, e.prototype.validateParams = function (e) {
      var t = dt.validate({
        params: e
      });
      return !t.isValid() && console.error(t.error()), Promise.resolve(e);
    }, e.prototype.createIframe = function () {
      var e = this;
      return this.getIframeUrl().then(function (t) {
        return e.iframe = k(t, {
          cssText: e.cssText
        }), e.handleAfterCreateIframe(), Promise.resolve();
      });
    }, e.prototype.getIframeUrl = function () {
      return new Promise(function (e) {
        return e("");
      });
    }, e.prototype.getIframeContainer = function () {
      return window.document.body;
    }, e.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.superAppTokenV2,
          r = t.appId,
          o = t._debug,
          i = t._localhost;
        return Promise.resolve(w(_re(_re({}, e.params), {
          host_app_id: r,
          superapp_token: n,
          origin: location.protocol + "//" + location.host,
          debug: o ? 1 : null,
          localhost: i ? 1 : null
        })));
      });
    }, e.prototype.updateConfig = function (e) {
      this.config = I(this.config, e), this.handleAfterUpdateConfig();
    }, e.prototype.updateParams = function (e) {
      this.params = I(this.params, e || {}), this.handleAfterUpdateParams();
    }, e.prototype.sendUpdateParamsMessage = function () {
      this.bridge && this.initTask.finished && this.bridge.sendMessage({
        params: this.params,
        handler: M.UPDATE_PARAMS
      });
    }, e;
  }(),
  ft = new fe({
    config: [{
      rule: se,
      errorText: q("config")
    }]
  }),
  mt = {
    styles: {
      bottom: "0",
      right: "0",
      zIndex: 99999
    }
  },
  vt = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.config = mt, n.cssText = "\n    border: none;\n    display: none;\n    position: fixed;\n  ", n.updateStyles = function () {
        if (n.iframe) {
          var e = n.config.styles,
            t = isFinite(e.zIndex) ? e.zIndex : 999999;
          n.iframe.style.zIndex = "" + t, n.iframe.style.bottom = e.bottom, n.iframe.style.right = e.right;
        }
      };
      var r = ft.validate({
        config: t
      });
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.handleBridgeMessage = function (t) {
      var n = this;
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case M.GET_CAPTCHA:
          var r = t.params.uuid,
            o = new Fe(r, {
              captcha_sid: t.params.captcha_sid,
              captcha_img: t.params.captcha_img
            });
          o.show().then(function (e) {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Success",
              params: _re({
                uuid: r
              }, e)
            });
          })["catch"](function () {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Fail",
              params: {
                uuid: r
              }
            }), o.destroy();
          });
          break;
        case st.INTERNAL_RESIZE:
          this.handleInternalIframeResize(t);
          break;
        case st.INTERNAL_LOGOUT:
          this.handleLogout();
          break;
        case ct.CLOSE_CHAT:
          this.events.emit(ct.CLOSE_CHAT, t.params);
          break;
        default:
          return;
      }
    }, t.prototype.handleInternalIframeResize = function (e) {
      var t = e.params;
      this.iframe.width = t.width + "px", this.iframe.height = t.height + "px";
    }, t.prototype.handleAfterUpdateConfig = function () {
      this.updateStyles();
    }, t.prototype.handleAfterCreateIframe = function () {
      this.updateStyles();
    }, t.prototype.validateParams = function (e) {
      return e.peer_id >= 0 ? Promise.reject(U("peer_id", "Peer id can`t be positive")) : Promise.resolve(e);
    }, t.prototype.getIframeUrl = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        return e.getIframeUrlParams().then(function (e) {
          var t = Ce.get().connectDomain;
          return Promise.resolve("https://" + t + "/messenger?" + e);
        });
      });
    }, t;
  }(ht);
exports.Messenger = vt;
exports.AuthQREvents = lt;
!function (e) {
  e.SCANNED = "VKSDKQRScaned", e.CLICKED = "VKSDKQRClicked";
}(lt || (exports.AuthQREvents = lt = {}));
var gt,
  _t = new fe({
    container: [{
      rule: se,
      errorText: q("container")
    }]
  }),
  At = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.getIframeContainer = function () {
        return n.config.container ? n.config.container : window.document.body;
      };
      var r = _t.validate(t);
      return !r.isValid() && console.error(r.error()), (null == t ? void 0 : t.langId) && !Le.includes(null == t ? void 0 : t.langId) && console.error(U("lang_id", "This lang id is not allowed")), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.getIframeUrl = function () {
      return this.getIframeUrlParams().then(function (e) {
        var t = Ce.get().connectDomain;
        return Promise.resolve("https://" + t + "/qr_auth?" + e);
      });
    }, t.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t,
          n = Ce.get(),
          r = n.appId,
          o = n._debug,
          i = n._localhost;
        return Promise.resolve(w({
          scheme: (null === (t = e.params) || void 0 === t ? void 0 : t.scheme) || "bright_light",
          app_id: r,
          origin: location.protocol + "//" + location.host,
          lang_id: e.config.langId || null,
          initial_stats_info: Ke(e.config.entry) || null,
          debug: o ? 1 : null,
          localhost: i ? 1 : null
        }));
      });
    }, t.prototype.handleBridgeMessage = function (t) {
      var n = this;
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case lt.CLICKED:
          this.events.emit(lt.CLICKED);
          break;
        case lt.SCANNED:
          this.events.emit(lt.SCANNED, t.params.token);
          break;
        case M.GET_CAPTCHA:
          var r = t.params.uuid,
            o = new Fe(r, {
              captcha_sid: t.params.captcha_sid,
              captcha_img: t.params.captcha_img
            });
          o.show().then(function (e) {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Success",
              params: _re({
                uuid: r
              }, e)
            });
          })["catch"](function () {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Fail",
              params: {
                uuid: r
              }
            }), o.destroy();
          });
          break;
        default:
          return;
      }
    }, t;
  }(ht);
exports.AuthQR = At;
exports.UserEvents = gt;
!function (e) {
  e.CONTENT_IN_HEIGHT = "VKSDKUserContentInHeight", e.VALIDATION_PHONE_CLOSE = "VKSDKUserValidationPhoneClose";
}(gt || (exports.UserEvents = gt = {}));
var yt,
  Tt = new fe({
    container: [{
      rule: se,
      errorText: q("container")
    }]
  }),
  Et = new fe({
    canSkip: [{
      rule: se,
      errorText: q("canSkip")
    }],
    origin: [{
      rule: se,
      errorText: q("origin")
    }]
  }),
  Ot = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.getIframeContainer = function () {
        return n.config.container ? n.config.container : window.document.body;
      };
      var r = Tt.validate(t);
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.getIframeUrl = function () {
      var e = _re(_re({
          redirect_uri: this.params.url,
          uuid: Ye()
        }, K(this.params, ["screen", "source"])), {
          scheme: this.params.scheme
        }),
        t = Re(this.params.action);
      t && (e.action = t);
      var n = Ke(this.params.entry);
      return n && (e.initial_stats_info = n), this.params.state && (e.redirect_state = this.params.state), Me(e);
    }, t.prototype.handleBridgeMessage = function (t) {
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case gt.CONTENT_IN_HEIGHT:
          this.events.emit(gt.CONTENT_IN_HEIGHT, t.params);
          break;
        case gt.VALIDATION_PHONE_CLOSE:
          this.events.emit(gt.VALIDATION_PHONE_CLOSE, t.params);
          break;
        default:
          return;
      }
    }, t.prototype.validatePhone = function (e) {
      var t = Et.validate(e);
      !t.isValid() && console.error(t.error());
      var n = {
        name: "auth_validation_phone",
        params: {
          status: e.canSkip ? "1" : "0"
        }
      };
      e.sid && (n.params.sid = e.sid), this.open({
        url: e.origin,
        scheme: e.scheme,
        action: n
      });
    }, t;
  }(ht);
exports.User = Ot;
exports.VerificationProfileEvents = yt;
!function (e) {
  e.SUCCESS = "VKSDKVerificationProfileSuccess", e.CLOSE = "VKSDKVerificationProfileClose";
}(yt || (exports.VerificationProfileEvents = yt = {}));
var St = new fe({
    config: [{
      rule: se,
      errorText: q("config")
    }],
    provider: [{
      rule: ae,
      errorText: Y("provider")
    }, {
      rule: se,
      errorText: q("provider")
    }]
  }),
  Ct = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.cssText = "\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    border: none;\n    display: none;\n  ";
      var r = St.validate({
        config: t,
        provider: t.provider
      });
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.handleBridgeMessage = function (t) {
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case yt.SUCCESS:
          this.events.emit(yt.SUCCESS);
          break;
        case yt.CLOSE:
          this.close();
          break;
        default:
          return;
      }
    }, t.prototype.handleAfterUpdateConfig = function () {
      this.updateZIndex();
    }, t.prototype.handleAfterCreateIframe = function () {
      this.updateZIndex();
    }, t.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.superAppTokenV2,
          r = t.appId,
          o = t._debug,
          i = t._localhost;
        return Promise.resolve(w(_re(_re({}, e.params), {
          app: r,
          superapp_token: n,
          origin: location.protocol + "//" + location.host,
          debug: o ? 1 : null,
          localhost: i ? 1 : null,
          provider: e.config.provider
        })));
      });
    }, t.prototype.getIframeUrl = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        return e.getIframeUrlParams().then(function (e) {
          var t = Ce.get().connectDomain;
          return Promise.resolve("https://" + t + "/verification_profile?" + e);
        });
      });
    }, t.prototype.updateZIndex = function () {
      if (this.iframe) {
        var e = this.config.zIndex;
        this.iframe.style.zIndex = "" + e;
      }
    }, t;
  }(ht);
exports.VerificationProfile = Ct;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentChatsComponent = void 0;
var _chats = __webpack_require__(528);
var _common = __webpack_require__(254);
var _vkAuth = __webpack_require__(530);
var Roles = _interopRequireWildcard(__webpack_require__(9));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var StudentChatsController = /*#__PURE__*/function () {
  StudentChatsController.$inject = ["pageContext", "$scope", "$location", "$dialogs", "$appLoader", "language", "appContext", "chatsRepository", "navigationService", "$window"];
  /*@ngInject*/
  function StudentChatsController(pageContext, $scope, $location, $dialogs, $appLoader, language, appContext, chatsRepository, navigationService, $window) {
    var _this = this;
    _classCallCheck(this, StudentChatsController);
    this.$scope = $scope;
    this.$location = $location;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.language = language;
    this.appContext = appContext;
    this.chatsRepository = chatsRepository;
    this.navigationService = navigationService;
    this.$window = $window;
    pageContext.title = "Чаты";
    pageContext.parent = null;
    this.init();
    window.vkLinkComplete = function (result) {
      return _this.onLinkComplete(result);
    };
  }
  _createClass(StudentChatsController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var isWorkedChatService;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.chatsRepository.isChatServiceWorking();
            case 2:
              isWorkedChatService = _context.sent;
              if (isWorkedChatService) {
                _context.next = 7;
                break;
              }
              this.$dialogs.error("Сервис чатов недоступен");
              this.$appLoader.hide();
              return _context.abrupt("return");
            case 7:
              _context.next = 9;
              return this.chatsRepository.getVkEduProfile();
            case 9:
              this.vkEduProfile = _context.sent;
              if (!this.vkEduProfile) {
                _context.next = 14;
                break;
              }
              _context.next = 13;
              return this.chatsRepository.getChats();
            case 13:
              this.chats = _context.sent;
            case 14:
              // else {
              // 	this.bannerHide();
              // }
              this.$scope.$applyAsync(function () {
                _this2.$appLoader.hide();
              });
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
    // bannerHide() {
    // 	angular.element(".sferum_banner").hide();
    // }
  }, {
    key: "goVk",
    value: function goVk() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var winOptions;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.vkEduProfile) {
                winOptions = {
                  url: "https://web.vk.me/",
                  name: "_blank"
                };
                (0, _common.windowOpen)(winOptions);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "goChatManagement",
    value: function goChatManagement() {
      this.navigationService.navigateTo("/management");
    }
  }, {
    key: "chatClass",
    value: function chatClass(type) {
      var chatClasses = {
        "Teachers": "chat_37532_teacher",
        "Class": "chat_37532_class",
        "ClassParents": "chat_37532_parents",
        "ClassSubject": "chat_37532_subject"
      };
      return chatClasses[type];
    }
  }, {
    key: "isAddChatType",
    value: function isAddChatType(chat) {
      return chat && (chat.chatType == _chats.ChatType.Class || chat.chatType == _chats.ChatType.ClassParents);
    }
  }, {
    key: "linkVkEduProfile",
    value: function linkVkEduProfile() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              (0, _vkAuth.linkVkEduProfile)(this.chatsRepository, this.appContext);
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "isShowChatManagementButton",
    value: function isShowChatManagementButton() {
      return this.appContext.hasRole(Roles.admin) || this.appContext.hasRole(Roles.principal) || this.appContext.hasRole(Roles.teacher);
    }
  }, {
    key: "unlinkVkEduProfile",
    value: function unlinkVkEduProfile() {
      var _this3 = this;
      this.$dialogs.confirm("Отменить привязку учебного профиля VK ID?").then(function () {
        return _this3.chatsRepository.unlinkVkEduProfile().then(function (result) {
          if (result == true) {
            _this3.$dialogs.message("Привязка учебного профиля VK ID отменена");
            _this3.init();
          } else {
            _this3.$dialogs.error("Ошибка при отмене привязки учебного профиля VK ID");
            _this3.init();
          }
        });
      }, function () {});
    }
  }, {
    key: "onLinkComplete",
    value: function onLinkComplete(error) {
      if (error) {
        this.$dialogs.error(error.message);
        return;
      }
      this.$dialogs.message("Учебный профиль VK Мессенджер успешно привязан");
      this.init();
    }
  }]);
  return StudentChatsController;
}();
var StudentChatsComponent = {
  controller: StudentChatsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/chats/list/studentchats.component.html"
};
exports.StudentChatsComponent = StudentChatsComponent;

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatInputDirective = void 0;
var _floatInput = __webpack_require__(534);
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

/***/ 534:
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

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatsRepository = void 0;
var _baseRepository = __webpack_require__(17);
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

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitChatsService = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
var _chats = __webpack_require__(528);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
var InitChatsService = /*#__PURE__*/function () {
  InitChatsService.$inject = ["taskQueueService", "$uibModal", "chatsRepository"];
  /*@ngInject*/
  function InitChatsService(taskQueueService, $uibModal, chatsRepository) {
    _classCallCheck(this, InitChatsService);
    this.taskQueueService = taskQueueService;
    this.$uibModal = $uibModal;
    this.chatsRepository = chatsRepository;
  }
  _createClass(InitChatsService, [{
    key: "execute",
    value: function execute() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var modalInstance, chatTypes;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              modalInstance = this.$uibModal.open({
                template: InitChatsSettingsComponent.template,
                controller: InitChatsSettingsComponent.controller,
                controllerAs: InitChatsSettingsComponent.controllerAs
              });
              _context.next = 3;
              return modalInstance.result;
            case 3:
              chatTypes = _context.sent;
              this.taskQueueService.execute({
                getTaskFunc: function getTaskFunc() {
                  return _this.chatsRepository.init(chatTypes);
                }
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return InitChatsService;
}();
exports.InitChatsService = InitChatsService;
var InitChatsSettingsController = /*#__PURE__*/function (_NetCityModalControll) {
  InitChatsSettingsController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language"];
  _inherits(InitChatsSettingsController, _NetCityModalControll);
  var _super = _createSuper(InitChatsSettingsController);
  /*@ngInject*/
  function InitChatsSettingsController($scope, $uibModalInstance, $dialogs, changeTracker, language) {
    var _this2;
    _classCallCheck(this, InitChatsSettingsController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.title = "Настройки создания/синхронизации чатов";
    _this2.chatTypes = [{
      id: _chats.ChatType.Teachers,
      name: "Учительская"
    }, {
      id: _chats.ChatType.Class,
      name: "Класс"
    }, {
      id: _chats.ChatType.ClassParents,
      name: "Родители"
    }, {
      id: _chats.ChatType.ClassSubject,
      name: "Предметы"
    }];
    _this2.selectedChatTypes = [_chats.ChatType.Teachers, _chats.ChatType.Class, _chats.ChatType.ClassParents];
    _this2.buttons = [{
      action: function action() {
        return _this2.ok();
      },
      "class": _nsModal.ButtonClass.primary,
      title: _this2.language.Generic.Buttons.kContinue
    }, {
      action: function action() {
        return _this2.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle",
      "class": _nsModal.ButtonClass["default"],
      title: _this2.language.Generic.Buttons.kClose
    }];
    return _this2;
  }
  _createClass(InitChatsSettingsController, [{
    key: "ok",
    value: function ok() {
      this.$uibModalInstance.close(this.selectedChatTypes);
    }
  }, {
    key: "hasChatType",
    value: function hasChatType(item) {
      return this.selectedChatTypes.find(function (x) {
        return x == item.id;
      });
    }
  }, {
    key: "toggleChatType",
    value: function toggleChatType(item) {
      if (this.hasChatType(item)) {
        this.selectedChatTypes = this.selectedChatTypes.filter(function (x) {
          return x != item.id;
        });
      } else {
        this.selectedChatTypes.push(item.id);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return InitChatsSettingsController;
}(_netcityModalCtrl.NetCityModalController);
var InitChatsSettingsComponent = {
  controller: InitChatsSettingsController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.title}}\" buttons=\"$ctrl.buttons\">\n\t\t<div class=\"alert alert-info\" role=\"alert\">\n\t\t\t\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F\u044B \u0447\u0430\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0432 \u043D\u0438\u0445\n\t\t</div>\n\t\t<div class=\"checkbox\" ng-repeat=\"chatType in $ctrl.chatTypes\">\n\t\t\t<label>\n\t\t\t\t<input type=\"checkbox\" ng-checked=\"$ctrl.hasChatType(chatType)\" ng-click=\"$ctrl.toggleChatType(chatType)\" track-changes />\n\t\t\t\t{{chatType.name}}\n\t\t\t</label>\n\t\t</div>\n\t</ns-modal>\n\t"
};

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

/***/ }),

/***/ 9:
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

/***/ })

/******/ });