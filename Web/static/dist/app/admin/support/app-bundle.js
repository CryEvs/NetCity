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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */
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
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.haveToLogout = exports.goHistoryBack = exports.goCommonBack = exports.goBack = exports.checkForChanges = exports.canSubmit = exports.OnChangeSelect = exports.GetForm = exports.DoSubmit = void 0;
exports.isDBBusy = isDBBusy;
exports.ok_check_db = exports.ok = void 0;
exports.setDBBusy = setDBBusy;
exports.setDBFree = setDBFree;
var _extensionDeferred = _interopRequireDefault(__webpack_require__(35));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
window.isHaveToLogout = true;
function isDBBusy() {
  return !window.bIsDBFree;
}
function setDBBusy() {
  window.bIsDBFree = false;
}
function setDBFree() {
  window.bIsDBFree = true;
}

//выполняет проверку наличия изменений. при наличии таковых выводится соответствующее подтверждение
var checkForChanges = function checkForChanges() {
  return _extensionDeferred["default"].when(!window.dataWereChanged || $.show.getConfirmation(language.Generic.Common.kDataWereChanged));
};
exports.checkForChanges = checkForChanges;
var GetForm = function GetForm(fName, obj) {
  if ($(obj).parents().is('.ui-dialog')) return $(obj).parents(".ui-dialog").last().find('form[name=' + fName + ']')[0];else
    //### По какой-то причине выбор элементов, без предков .ui-dialog не работает, потому берем первый ###
    return $('form[name=' + fName + ']').first()[0];
};
exports.GetForm = GetForm;
var canSubmit = function canSubmit() {
  return true;
};
exports.canSubmit = canSubmit;
var haveToLogout = function haveToLogout() {
  return window.isHaveToLogout;
};
exports.haveToLogout = haveToLogout;
var goCommonBack = function goCommonBack() {
  if (typeof Back === "function") {
    return Back();
  } else {
    return goHistoryBack();
  }
};
exports.goCommonBack = goCommonBack;
var goHistoryBack = function goHistoryBack() {
  return checkForChanges().then(function () {
    window.isHaveToLogout = false;
    return history.go(-1);
  });
};
exports.goHistoryBack = goHistoryBack;
var DoSubmit = function DoSubmit(form, action) {
  var existToken;
  if (action) {
    form.action = action;
  }
  window.isHaveToLogout = false;
  var createHiddenField = function createHiddenField(form, key, value) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    return form.appendChild(hiddenField);
  };
  existToken = form.at || form.AT;
  if (!existToken) {
    existToken = /\bat\=/i.test(form.action);
  }
  if (!existToken && typeof window.strATTok !== "undefined" && window.strATTok.length) {
    createHiddenField(form, "at", window.strATTok);
  }
  return form.submit();
};
exports.DoSubmit = DoSubmit;
var goBack = function goBack(form, action) {
  return checkForChanges().then(function () {
    $('input[type="password"]', form).attr("disabled", "disabled");
    return DoSubmit(form, action);
  });
};
exports.goBack = goBack;
var ok_check_db = function ok_check_db(formName, action) {
  return _extensionDeferred["default"].when(window.bIsDBFree, window.canSubmit).then(function () {
    $(document).trigger("showProcessing");
    setDBBusy();
    return DoSubmit(document.forms[formName], action);
  });
};
exports.ok_check_db = ok_check_db;
var ok = function ok(formName, action, obj) {
  var form;
  if (obj === null) {
    form = document.forms[formName];
  } else {
    form = GetForm(formName, obj);
  }
  return _extensionDeferred["default"].when(canSubmit).then(function () {
    return DoSubmit(form, action);
  });
};
exports.ok = ok;
var OnChangeSelect = function OnChangeSelect(sFormName, sAction) {
  checkForChanges().then(function () {
    return ok_check_db(sFormName, sAction);
  }).fail(function () {
    document.forms[sFormName].reset();
  });
};
exports.OnChangeSelect = OnChangeSelect;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var extDeferred;

extDeferred = (function() {
  var handleDef;
  handleDef = function(condition) {
    var internalDef;
    while (typeof condition === 'function') {
      condition = condition();
    }
    if (Array.isArray(condition)) {
      condition = extDeferred.when(condition);
    }
    if (typeof condition === 'undefined' || typeof condition === 'boolean') {
      internalDef = $.Deferred();
      if (condition) {
        internalDef.resolve();
      } else {
        internalDef.reject();
      }
      return internalDef.promise();
    }
    if (typeof Promise !== 'undefined' && condition instanceof Promise) {
      internalDef = $.Deferred();
      condition.then(function() {
        return internalDef.resolve();
      }, function() {
        return internalDef.reject();
      });
      return internalDef.promise();
    }
    return condition;
  };
  return {
    wrapPromise: function(promiseFunc, success, fail) {
      return function() {
        return $.when(promiseFunc()).then(success, fail);
      };
    },
    wrapAlwaysPromise: function(promiseFunc) {
      return function() {
        var deferred, funcResolve;
        deferred = $.Deferred();
        funcResolve = function() {
          return deferred.resolve();
        };
        extDeferred.wrapPromise(promiseFunc, funcResolve, funcResolve)();
        return deferred.promise();
      };
    },
    resolve: function() {
      var deferred;
      deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    },
    when: function() {
      var arrDeferred, deferred, firstDef, recThen, rejectFunc, successFunc;
      deferred = $.Deferred();
      arrDeferred = arguments;
      if (arguments.length === 1 && typeof arguments[0] === 'object') {
        arrDeferred = arguments[0];
      }
      if (arrDeferred.length === 0) {
        deferred.resolve();
        return deferred.promise();
      }
      rejectFunc = function() {
        deferred.reject();
      };
      successFunc = function() {
        deferred.resolve();
      };
      recThen = function(index) {
        var nextDef, nextDefFunc;
        nextDef = arrDeferred[index];
        nextDefFunc = function() {
          return handleDef(nextDef);
        };
        if (index < arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(recThen(index + 1), rejectFunc);
          };
        } else if (index === arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(successFunc, rejectFunc);
          };
        } else {
          return successFunc;
        }
      };
      firstDef = arrDeferred[0];
      $.when(handleDef(firstDef)).then(recThen(1), rejectFunc);
      return deferred.promise();
    }
  };
})();

module.exports = extDeferred;


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _support = __webpack_require__(42);
var _queuetasks = __webpack_require__(45);
var _educPortalUploadRegistry = __webpack_require__(47);
var _inlearnoUploadRegistry = __webpack_require__(48);
var _loginAttemptsRegistry = __webpack_require__(49);
var _personalDataAccessRegistry = __webpack_require__(50);
var _soloOrganizationsRegistry = __webpack_require__(51);
var _rbooOrganizationsRegistry = __webpack_require__(54);
var _soloRefsRegistry = __webpack_require__(57);
var _queuetasks2 = __webpack_require__(58);
var _soloOrganizations = __webpack_require__(59);
var _soloRefs = __webpack_require__(60);
var _journalCorrection = __webpack_require__(61);
var _journalAssignments = __webpack_require__(62);
var _intInput = __webpack_require__(63);
var _publish = __webpack_require__(66);
var _inlearnoNavigatorSyncProgramsRegistry = __webpack_require__(67);
var _clones = __webpack_require__(68);
var _clones2 = __webpack_require__(69);
var _clonesRegistry = __webpack_require__(70);
var _repositories = __webpack_require__(26);
var _movementDiagRegistry = __webpack_require__(79);
var _movementDiag = __webpack_require__(81);
var _transactions = __webpack_require__(82);
var _pfrSnilsRequests = __webpack_require__(87);
var _requests = __webpack_require__(88);
var _module = angular.module("irtech.netcity.admin.support", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
_module.service("queueTaskRepository", _queuetasks2.QueueTaskRepository).service("soloOrganizationsRepository", _soloOrganizations.SoloOrganizationsRepository).service("soloRefsRepository", _soloRefs.SoloRefsRepository).service("journalCorrectionRepository", _journalCorrection.JournalCorrectionRepository).service("journalAssignmentsRepository", _journalAssignments.JournalAssignmentsRepository).service("publishRepository", _publish.PublishRepository).service("clonesRepository", _clones2.ClonesRepository).service("referencesRepository", _repositories.ReferencesRepository).service("movementDiagRepository", _movementDiag.MovementDiagRepository).component(_clonesRegistry.ClonesRegistryComponent.selector, _clonesRegistry.ClonesRegistryComponent).directive("intInput", _intInput.IntInputDirective).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/", _support.SupportComponent).when("/queue/", _queuetasks.QueueTasksComponent).when("/personaldataaccess/", _personalDataAccessRegistry.PersonalDataAccessRegistryComponent).when("/movement-diag/", _movementDiagRegistry.MovementDiagRegistryComponent).when("/educportalupload/", _educPortalUploadRegistry.EducPortalUploadRegistryComponent).when("/inlearnoupload/", _inlearnoUploadRegistry.InlearnoUploadRegistryComponent).when("/inlearnonavigatorupload/", _inlearnoNavigatorSyncProgramsRegistry.InlearnoNavigatorSyncProgramsRegistryComponent).when("/loginattempts/", _loginAttemptsRegistry.LoginAttemptsRegistryComponent).when("/soloorganizations/", _soloOrganizationsRegistry.SoloOrganizationsRegistryComponent).when("/solorefs/", _soloRefsRegistry.SoloRefsRegistryComponent).when("/rbooorganizations/", _rbooOrganizationsRegistry.RbooOrganizationsRegistryComponent).when("/gisruo/transactions/", _transactions.GisRuoTransactionsRegistryComponent).when("/datamart/requests/", _requests.DataMartsRequestsRegistryComponent).when("/pfr/", _pfrSnilsRequests.PfrSnilsRequestsRegistryComponent).when("/clones/", _clones.ClonesComponent).when("/journal-correction/", _journalCorrection.JournalCorrectionComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportComponent = void 0;
var _commonLegacy = __webpack_require__(34);
var _sendEmails = __webpack_require__(43);
var _settingsProvider = __webpack_require__(28);
var _publishOrganizations = __webpack_require__(44);
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
var SupportController = /*#__PURE__*/function () {
  function SupportController(language, $appLoader, $longWork, $dialogs, $location, $uibModal, $http, taskQueueService, settingsProvider, publishRepository, downloadService, appContext, pageContext) {
    var _this = this;
    _classCallCheck(this, SupportController);
    this.language = language;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$location = $location;
    this.$uibModal = $uibModal;
    this.$http = $http;
    this.taskQueueService = taskQueueService;
    this.settingsProvider = settingsProvider;
    this.publishRepository = publishRepository;
    this.downloadService = downloadService;
    this.appContext = appContext;
    this.integrationPFDO = false;
    this.soloIntegration = false;
    this.isJournalCorrection = false;
    this.pfdoIntegrationType = null;
    this.portalIntegration = false;
    this.inlearnoIntegration = false;
    this.inlearnoNavigatorIntegration = false;
    this.pfrIntegration = false;
    this.gisRuoIntegration = false;
    this.myEducationIntegration = false;
    this.isTestEnv = false;
    this.isTestEnv = appContext.environment == "test";
    pageContext.parent = null;
    pageContext.back = null;
    pageContext.title = language.Generic.MenuFolders.kDiagnos;
    var pfoCheck = this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (integration) {
      _this.pfdoIntegrationType = integration;
      _this.portalIntegration = integration == _settingsProvider.PfdoIntegrationType.IRTechEes;
      _this.integrationPFDO = integration == _settingsProvider.PfdoIntegrationType.Slavin;
      _this.inlearnoNavigatorIntegration = integration == _settingsProvider.PfdoIntegrationType.InlearnoNavigator;
    });
    var soloCheck = this.settingsProvider.ServerSettings.SystemSettings.SoloIntegration().then(function (integration) {
      return _this.soloIntegration = integration;
    });
    var journalCorCheck = this.settingsProvider.ServerSettings.SystemSettings.JournalCorrection().then(function (journalCorrection) {
      return _this.isJournalCorrection = journalCorrection;
    });
    var inlearnoCheck = this.settingsProvider.ServerSettings.SystemSettings.ModuleInlearnoIntegration().then(function (inlearnoIntegration) {
      return _this.inlearnoIntegration = inlearnoIntegration;
    });
    var pfrIntegration = this.settingsProvider.ServerSettings.SystemSettings.ModulePfrIntegration().then(function (pfrIntegration) {
      return _this.pfrIntegration = pfrIntegration;
    });
    var gisRuoIntegration = this.settingsProvider.ServerSettings.SystemSettings.GisRuoIntegration().then(function (val) {
      return _this.gisRuoIntegration = val;
    });
    var myEducationIntegration = this.settingsProvider.ServerSettings.SystemSettings.MyEducationIntegration().then(function (val) {
      return _this.myEducationIntegration = val && _this.appContext.environment != "prod";
    });
    Promise.all([pfoCheck, soloCheck, journalCorCheck, inlearnoCheck, pfrIntegration, gisRuoIntegration, myEducationIntegration]).then(function () {
      return _this.$appLoader.hide();
    });
  }
  _createClass(SupportController, [{
    key: "userDocuments",
    value: function userDocuments() {
      (0, _commonLegacy.DoSubmit)(document.forms["MenuForm"], "/asp/administration/userDocuments.asp");
    }
  }, {
    key: "personalDataAccess",
    value: function personalDataAccess() {
      this.$location.path("/personaldataaccess/");
    }
  }, {
    key: "soloOrganizations",
    value: function soloOrganizations() {
      this.$location.path("/soloorganizations/");
    }
  }, {
    key: "journalCorrection",
    value: function journalCorrection() {
      this.$location.path("/journal-correction/");
    }
  }, {
    key: "soloRefs",
    value: function soloRefs() {
      this.$location.path("/solorefs/");
    }
  }, {
    key: "loginAttempts",
    value: function loginAttempts() {
      this.$location.path("/loginattempts/");
    }
  }, {
    key: "userClones",
    value: function userClones() {
      this.$location.path("/clones/");
    }
  }, {
    key: "diagMovement",
    value: function diagMovement() {
      this.$location.path("/movement-diag/");
    }
  }, {
    key: "portalUpload",
    value: function portalUpload() {
      this.$location.path("/educportalupload/");
    }
  }, {
    key: "inlearnoUpload",
    value: function inlearnoUpload() {
      this.$location.path("/inlearnoupload/");
    }
  }, {
    key: "inlearnoNavigatorUpload",
    value: function inlearnoNavigatorUpload() {
      this.$location.path("/inlearnonavigatorupload/");
    }
  }, {
    key: "gisRuoTransactions",
    value: function gisRuoTransactions() {
      this.$location.path("/gisruo/transactions/");
    }
  }, {
    key: "datamartRequests",
    value: function datamartRequests() {
      this.$location.path("/datamart/requests/");
    }
  }, {
    key: "pfrSnilsRequests",
    value: function pfrSnilsRequests() {
      this.$location.path("/pfr/");
    }
  }, {
    key: "isIntegration",
    value: function isIntegration() {
      return this.pfdoIntegrationType == _settingsProvider.PfdoIntegrationType.IRTechEes || this.pfdoIntegrationType == _settingsProvider.PfdoIntegrationType.IRTech;
    }
  }, {
    key: "queueTasks",
    value: function queueTasks() {
      this.$location.path("/queue/");
    }
  }, {
    key: "importStudents",
    value: function importStudents() {
      var _this2 = this;
      var prepareControls = this.$http.get("/webapi/globalyears").then(function (response) {
        var years = response.data;
        var ftCtrl = $.uicontrols.select({
          name: "functype",
          items: [{
            title: "ДОО",
            value: 1
          }, {
            title: "ООО",
            value: 2
          }, {
            title: "ОДО",
            value: 3
          }]
        })[0];
        var yearsCtrl = $.uicontrols.select({
          name: "yearId",
          items: years.map(function (y) {
            return {
              title: y.name,
              value: y.id
            };
          })
        })[0];
        var chooseFuncTypeHtml = '<div class="form-group"><label class="control-label">Тип ОО</label><div>' + ftCtrl.outerHTML + '</div></div>';
        chooseFuncTypeHtml += '<div class="form-group"><label class="control-label">Учебный год</label><div>' + yearsCtrl.outerHTML + '</div></div>';
        return chooseFuncTypeHtml;
      });
      this.taskQueueService.progress({
        bindConnection: function bindConnection(connectionId) {
          return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var chooseFuncTypeHtml;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return prepareControls;
                case 2:
                  chooseFuncTypeHtml = _context.sent;
                  $.show.fileDialog({
                    title: "Импорт учащихся",
                    isAjax: true,
                    fileExts: [".xls"],
                    submitParams: {
                      progressId: connectionId
                    },
                    url: "/webapi/movement/batchimport",
                    formAppendContent: chooseFuncTypeHtml,
                    handlerAjaxSuccess: function handlerAjaxSuccess(response) {
                      if (longWork) {
                        longWork.close();
                      }
                      if (response.IsError) {
                        this.$dialogs.error(response.data.message);
                        return;
                      }
                      var message = "\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E ".concat(response.successTasks, " \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0438\u043C\u043F\u043E\u0440\u0442");
                      if (response.errorTasks) {
                        message += "\n\u043E\u0448\u0438\u0431\u043E\u043A: ".concat(response.errorTasks);
                      }
                      alert(message);
                    }
                  });
                  return _context.abrupt("return", Promise.resolve());
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        },
        dialogComponent: null
      });
      var connection = $.connection.hub;
      var informerHub = $.connection.progressInformerHub;
      var longWork = null;
      var currentProgress = 0;
      informerHub.client.progress = function (data) {
        currentProgress = data.Progress / data.Total * 100;
        if (data.Progress === 1) {
          //закрывается процесссиг от загрузки файла
          $(document).trigger("closeProcessing");
          //отрывается процессинг с прогрессом
          longWork = $.show.longWork("Выполняется обработка", "Обработка файла пакетного импорта", null, function () {
            return currentProgress;
          });
        }
      };
      connection.start().fail(function () {
        return _this2.$dialogs.error("Ошибка инициализации comet соединения");
      }).done(function (res) {
        prepareControls.then(function (chooseFuncTypeHtml) {
          var connectionId = res.id;
          $.show.fileDialog({
            title: "Импорт учащихся",
            isAjax: true,
            fileExts: function fileExts() {
              return [".xls"];
            },
            submitParams: {
              progressId: connectionId
            },
            url: "/webapi/movement/batchimport",
            formAppendContent: chooseFuncTypeHtml,
            handlerAjaxSuccess: function handlerAjaxSuccess(response) {
              if (longWork) {
                longWork.close();
              }
              if (response.IsError) {
                this.$dialogs.error(response.data.message);
                return;
              }
              var message = "\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E ".concat(response.successTasks, " \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0438\u043C\u043F\u043E\u0440\u0442");
              if (response.errorTasks) {
                message += "\n\u043E\u0448\u0438\u0431\u043E\u043A: ".concat(response.errorTasks);
              }
              alert(message);
            }
          });
        });
      });
    }
  }, {
    key: "importStaff",
    value: function importStaff() {
      var _this3 = this;
      var dialogOptions = {
        url: "/webapi/users/staff/batchimport",
        fileExts: function fileExts() {
          return ["csv"];
        }
      };
      return this.$dialogs.uploadFile("Импорт сотрудников", dialogOptions).then(function (response) {
        var res = response.result;
        if (res.IsError) {
          _this3.$dialogs.error(res.message);
          return;
        }
        var message = "\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E ".concat(res.successTasks);
        if (res.errorsTasks) {
          message += "\n\u043E\u0448\u0438\u0431\u043E\u043A: ".concat(res.errorsTasks);
        }
        _this3.$dialogs.message(message);
        return res;
      });
    }
  }, {
    key: "isLocalHostView",
    value:
    //признак - просмотр локального сайта
    function isLocalHostView() {
      return location.host.includes("localhost");
    }
  }, {
    key: "setStaffPasswords",
    value: function setStaffPasswords() {
      var _this4 = this;
      this.$dialogs.confirm("Пароли всех сотрудников с заполненным EMAL будут изменены.\r\nПродолжить?").then(function () {
        var processing = _this4.$longWork.show();
        _this4.$http.post("/webapi/users/staff/passwords", null).then(function () {
          processing.close();
          alert("Пароли успешно установлены");
        }, function () {
          processing.close();
        });
      });
    }
  }, {
    key: "sendEmail",
    value: function sendEmail() {
      this.$uibModal.open({
        templateUrl: _sendEmails.SendEmailsComponent.templateUrl,
        controller: _sendEmails.SendEmailsComponent.controller,
        controllerAs: _sendEmails.SendEmailsComponent.controllerAs,
        resolve: {}
      });
    }
  }, {
    key: "deleteUsersJob",
    value: function deleteUsersJob() {
      var _this5 = this;
      var opt = {
        header: "Удаление пользователей",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this5.$http.post("/webapi/users/queue-delete-users", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt);
    }
  }, {
    key: "getPfdoAddPrograms",
    value: function getPfdoAddPrograms() {
      var _this6 = this;
      if (!this.integrationPFDO) {
        return;
      }
      var opt = {
        header: "Получение программ доп.образования из АИС ПФДО",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this6.$http.post("/webapi/integration/pfdo/syncaddprograms", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt);
    }
  }, {
    key: "uploadPfdoCertificates",
    value: function uploadPfdoCertificates() {
      var _this7 = this;
      if (!this.integrationPFDO) {
        return;
      }
      var opt = {
        header: "Выгрузка сертификатов в АИС ПФДО",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this7.$http.post("/webapi/integration/pfdo/uploadPfdoCertificates", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt);
    }
  }, {
    key: "syncPfdoCertificateGroups",
    value: function syncPfdoCertificateGroups() {
      var _this8 = this;
      if (!this.integrationPFDO) {
        return;
      }
      var opt = {
        header: "Получение категории сертификатов из АИС ПФДО",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this8.$http.post("/webapi/integration/pfdo/syncPfdoCertificateGroups", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt);
    }
  }, {
    key: "restorePfdoCertificatesPDF",
    value: function restorePfdoCertificatesPDF() {
      var _this9 = this;
      if (!this.integrationPFDO) {
        return;
      }
      var opt = {
        header: "Загрузка PDF-файлов сертификатов из АИС ПФДО",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this9.$http.post("/webapi/integration/pfdo/restorePfdoCertificatesPDF", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt);
    }
  }, {
    key: "publishOrgs",
    value: function publishOrgs() {
      if (!this.portalIntegration) {
        return;
      }
      this.$uibModal.open({
        templateUrl: _publishOrganizations.PublishOrganizationsComponent.templateUrl,
        controller: _publishOrganizations.PublishOrganizationsComponent.controller,
        controllerAs: _publishOrganizations.PublishOrganizationsComponent.controllerAs
      });
    }
  }, {
    key: "publishAddPrograms",
    value: function publishAddPrograms() {
      var _this10 = this;
      if (!this.portalIntegration) {
        return;
      }
      var opt = {
        header: this.language.Generic.ServAdmin.kPublishAddPrograms,
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this10.publishRepository.publishProgramsQueue();
        }
      };
      this.$dialogs.confirm(this.language.Generic.ServAdmin.kAreYouSurePublishAddPrograms).then(function () {
        return _this10.taskQueueService.execute(opt);
      }).then(function (result) {
        var message = "";
        message += "\u0412\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u0434\u043E\u043F. \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(result.CountAddPrograms, "\n");
        message += "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E: ".concat(result.CountSuccessAddPrograms, "\n");
        message += "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u0434\u043E\u043F. \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0440\u0430\u043D\u0435\u0435 \u0431\u044B\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u0437\u0430\u044F\u0432\u043A\u0438: ".concat(result.CountPublishedAddPrograms, "\n");
        if (result.CountFailAddPrograms) {
          message += "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u0434\u043E\u043F. \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F: ".concat(result.CountFailAddPrograms);
        }
        _this10.$dialogs.message(message);
      });
    }
  }, {
    key: "publishCertificates",
    value: function publishCertificates() {
      var _this11 = this;
      var _a, _b;
      if (!this.portalIntegration) {
        return;
      }
      var publishCertsData = null;
      if (this.isTestEnv) {
        publishCertsData = {
          schoolIds: (_b = (_a = this.publishCertificatesSchoolIds) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b.map(function (x) {
            return Number(x);
          })
        };
      }
      var opt = {
        header: this.language.Generic.ServAdmin.kPublishCertificates,
        logoutputMode: true,
        closeOnEnd: true,
        getTaskFunc: function getTaskFunc() {
          return _this11.publishRepository.publishCertificatesQueue(publishCertsData);
        }
      };
      this.$dialogs.confirm(this.language.Generic.ServAdmin.kAreYouSurePublishCertificates).then(function () {
        return _this11.taskQueueService.execute(opt);
      }).then(function (result) {
        return _this11.downloadService.downloadFile("/webapi/files/" + result);
      });
    }
  }]);
  return SupportController;
}();
var SupportComponent = {
  controller: SupportController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/support.component.html"
};
exports.SupportComponent = SupportComponent;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendEmailsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SendEmailsController = /*#__PURE__*/function () {
  SendEmailsController.$inject = ["$uibModalInstance", "$http", "language"];
  /*@ngInject*/
  function SendEmailsController($uibModalInstance, $http, language) {
    _classCallCheck(this, SendEmailsController);
    this.$uibModalInstance = $uibModalInstance;
    this.$http = $http;
    this.language = language;
    this.email = {
      message: "",
      subject: ""
    };
    this.header = "Отправка сообщений сотрудникам";
  }
  _createClass(SendEmailsController, [{
    key: "send",
    value: function send() {
      var _this = this;
      var data = {
        subject: this.email.subject,
        message: this.email.message
      };
      $(document).trigger("showProcessing");
      this.$http.post("/webapi/users/staff/email/send", data).then(function () {
        $(document).trigger("closeProcessing");
        alert("Сообщение отправлено успешно");
        _this.$uibModalInstance.close();
      }, function () {
        $(document).trigger("closeProcessing");
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return SendEmailsController;
}();
var SendEmailsComponent = {
  controller: SendEmailsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/sendEmails/sendEmails.component.html"
};
exports.SendEmailsComponent = SendEmailsComponent;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishOrganizationsComponent = void 0;
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
var PublishOrganizationsCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  PublishOrganizationsCtrl.$inject = ["language", "$http", "$longWork", "$scope", "changeTracker", "$uibModalInstance", "$dialogs", "$q", "publishRepository", "taskQueueService"];
  _inherits(PublishOrganizationsCtrl, _NetCityModalControll);
  var _super = _createSuper(PublishOrganizationsCtrl);
  /*@ngInject*/
  function PublishOrganizationsCtrl(language, $http, $longWork, $scope, changeTracker, $uibModalInstance, $dialogs, $q, publishRepository, taskQueueService) {
    var _this;
    _classCallCheck(this, PublishOrganizationsCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.$http = $http;
    _this.$longWork = $longWork;
    _this.$q = $q;
    _this.publishRepository = publishRepository;
    _this.taskQueueService = taskQueueService;
    _this.header = _this.language.Generic.ServAdmin.kPublishOrganizations;
    _this.ready = false;
    _this.load();
    _this.initButtons();
    return _this;
  }
  _createClass(PublishOrganizationsCtrl, [{
    key: "initButtons",
    value: function initButtons() {
      var _this2 = this;
      this.buttons = [{
        action: function action() {
          return _this2.publish();
        },
        title: this.language.Generic.Buttons.kPublish
      }, {
        action: function action() {
          return _this2.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle",
        title: this.language.Generic.Buttons.kCancel
      }];
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.data = {
        globalYear: null,
        globalYears: null,
        allStatusOrgs: false,
        statusOrgs: null
      };
      var getGlobalYearsTask = this.$http.get("/webapi/globalyears").then(function (response) {
        _this3.data.globalYear = response.data.find(Boolean), _this3.data.globalYears = response.data;
      });
      var getStatusOrgsTask = this.$http.get("/webapi/references/eoRefs").then(function (response) {
        _this3.data.statusOrgs = response.data.statusOrganizations.map(function (x) {
          return {
            status: x,
            isChecked: false
          };
        });
      });
      var allTasks = this.$q.all([getGlobalYearsTask, getStatusOrgsTask]);
      this.$longWork.execute(allTasks).then(function () {
        return _this3.ready = true;
      });
    }
  }, {
    key: "anyCheckboxTouched",
    value: function anyCheckboxTouched() {
      if (!this.ready) {
        return false;
      }
      for (var statusId in this.data.statusOrgs.map(function (x) {
        return x.status.id;
      })) {
        if (this.form[statusId] && this.form[statusId].$touched) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "anyCheckboxEnabled",
    value: function anyCheckboxEnabled() {
      return this.data.statusOrgs.filter(function (x) {
        return x.isChecked;
      }).length > 0;
    }
  }, {
    key: "toggleAllStatusOrgs",
    value: function toggleAllStatusOrgs() {
      var _this4 = this;
      this.data.statusOrgs.forEach(function (x) {
        return x.isChecked = _this4.data.allStatusOrgs;
      });
    }
  }, {
    key: "toggleStatusOrg",
    value: function toggleStatusOrg() {
      var containsDisableCheckbox = this.data.statusOrgs.find(function (x) {
        return !x.isChecked;
      });
      if (containsDisableCheckbox) {
        this.data.allStatusOrgs = false;
      } else {
        this.data.allStatusOrgs = true;
      }
    }
  }, {
    key: "publish",
    value: function publish() {
      var _this5 = this;
      if (!this.anyCheckboxEnabled()) {
        this.$dialogs.error(this.language.Generic.ServAdmin.kErrStatusOrganizationsEmpty);
        return;
      }
      this.$dialogs.confirm(this.language.Generic.ServAdmin.kAreYouSurePublishOrganizations).then(function () {
        return _this5.publishOrgs();
      });
    }
  }, {
    key: "publishOrgs",
    value: function publishOrgs() {
      var _this6 = this;
      var publishOrgsData = {
        globalYearId: this.data.globalYear.id,
        statusOrganizations: this.data.statusOrgs.filter(function (x) {
          return x.isChecked;
        }).map(function (x) {
          return x.status.id;
        })
      };
      var opt = {
        header: this.language.Generic.ServAdmin.kPublishOrganizations,
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this6.publishRepository.publishOrganizationsQueue(publishOrgsData);
        }
      };
      this.taskQueueService.execute(opt).then(function (result) {
        var message = "";
        message += "\u0412\u0441\u0435\u0433\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439: ".concat(result.CountSchools, "\n");
        message += "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E: ".concat(result.CountSuccessSchools, "\n");
        message += "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0440\u0430\u043D\u0435\u0435 \u0431\u044B\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u0437\u0430\u044F\u0432\u043A\u0438: ".concat(result.CountPublishedSchools, "\n");
        if (result.CountFailSchools) {
          message += "\u041E\u0448\u0438\u0431\u043E\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E: ".concat(result.CountFailSchools, "\n");
        }
        return _this6.$dialogs.message(message);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return PublishOrganizationsCtrl;
}(_netcityModalCtrl.NetCityModalController);
var PublishOrganizationsComponent = {
  controller: PublishOrganizationsCtrl,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/publish/publishOrganizations.component.html"
};
exports.PublishOrganizationsComponent = PublishOrganizationsComponent;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueTasksComponent = exports.QueueTask = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(8));
var _taskDetails = __webpack_require__(46);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var QueueTask = /*#__PURE__*/_createClass(function QueueTask(dto) {
  _classCallCheck(this, QueueTask);
  this.id = dto.id;
  this.taskType = dto.taskType;
  this.status = dto.status;
  this.enqueueDate = dto.enqueueDate;
  this.startDate = dto.startDate;
  this.endDate = dto.endDate;
  //this.enqueueDate = moment(dto.enqueueDate).format("YYYY-MM-DD HH:mm:ss");
  //this.startDate = dto.startDate ? moment(dto.startDate).format("YYYY-MM-DD HH:mm:ss") : null;
  //this.endDate = dto.endDate ? moment(dto.endDate).format("YYYY-MM-DD HH:mm:ss") : null;
  this.stalled = dto.stalled;
});
exports.QueueTask = QueueTask;
var QueueTasksController = /*#__PURE__*/function () {
  QueueTasksController.$inject = ["queueTaskRepository", "$appLoader", "$longWork", "$dialogs", "appContext", "$uibModal", "language", "pageContext"];
  /*@ngInject*/
  function QueueTasksController(queueTaskRepository, $appLoader, $longWork, $dialogs, appContext, $uibModal, language, pageContext) {
    var _this = this;
    _classCallCheck(this, QueueTasksController);
    this.queueTaskRepository = queueTaskRepository;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.appContext = appContext;
    this.$uibModal = $uibModal;
    this.language = language;
    this.paging = {
      page: 1,
      pageSize: 20,
      show: true,
      totalcount: 0
    };
    this.data = {
      selection: new _multiSelectable["default"](),
      refs: {
        taskTypes: [{
          id: "I",
          name: "Импорт учащихся"
        }, {
          id: "E",
          name: "Экспорт"
        }, {
          id: "R",
          name: "Отчет"
        }, {
          id: "F",
          name: "Формирование будущего года"
        }],
        taskStatuses: [{
          id: "Delayed",
          name: "Отложена"
        }, {
          id: "InQueue",
          name: "В очереди"
        }, {
          id: "Processing",
          name: "В обработке"
        }, {
          id: "Error",
          name: "Ошибка"
        }, {
          id: "Finished",
          name: "Завершена"
        }]
      },
      queueTasks: [],
      taskType: "",
      taskStatus: "InQueue"
    };
    this.state = {
      dataReady: false,
      dataEmpty: false,
      emptyData: false
    };
    this.viewDetails = function (task) {
      _this.queueTaskRepository.getDetails(task.id).then(function (details) {
        _this.$uibModal.open({
          templateUrl: _taskDetails.TaskDetailsComponent.templateUrl,
          controller: _taskDetails.TaskDetailsComponent.controller,
          controllerAs: _taskDetails.TaskDetailsComponent.controllerAs,
          size: 'lg',
          resolve: {
            queueTaskDetails: details
          }
        });
      });
    };
    pageContext.parent = {
      title: language.Generic.MenuFolders.kDiagnos,
      href: "/"
    };
    pageContext.back = {
      history: true
    };
    pageContext.title = "Очередь";
    this.load();
  }
  _createClass(QueueTasksController, [{
    key: "selectAll",
    value: function selectAll() {
      this.data.selection.dropSelect();
      var _iterator = _createForOfIteratorHelper(this.data.queueTasks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;
          this.data.selection.select(task);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "retry",
    value: function retry(tasks) {
      var _this2 = this;
      var ids = tasks.map(function (x) {
        return x.id;
      });
      this.$dialogs.confirm("\u0412\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438?").then(function () {
        return _this2.queueTaskRepository.retry(ids);
      }).then(function () {
        _this2.load();
      });
    }
  }, {
    key: "delete",
    value: function _delete(tasks) {
      var _this3 = this;
      var ids = tasks.map(function (x) {
        return x.id;
      });
      this.$dialogs.confirm("\u0412\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0437 \u0411\u0414?").then(function () {
        return _this3.queueTaskRepository["delete"](ids);
      }).then(function () {
        _this3.load();
      });
    }
  }, {
    key: "clearReportQueue",
    value: function clearReportQueue() {
      var _this4 = this;
      this.$dialogs.confirm("Вы действительно желаете очистить очередь отчетов?").then(function () {
        _this4.queueTaskRepository.clearReportQueue();
      });
    }
  }, {
    key: "testSignalR",
    value: function testSignalR() {
      var _this5 = this;
      var connection = $.connection.hub;
      var diagHub = $.connection.diagnosticHub;
      connection.qs = {
        "at": this.appContext.at
      };
      diagHub.client.pong = function (data) {
        console.log("pong");
        alert(data);
        connection.stop();
      };
      connection.start().done(function () {
        console.log("connection started");
        console.log("ping");
        diagHub.server.ping();
      }).fail(function () {
        console.log("connection start fail");
        _this5.$dialogs.error("Ошибка соединения с сервером");
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this6 = this;
      var processing = this.$longWork.show();
      this.queueTaskRepository.getAll(this.data.taskType, this.data.taskStatus, this.paging.page || 1, this.paging.pageSize).then(function (tasks) {
        _this6.paging.totalcount = tasks.totalcount;
        _this6.paging.show = _this6.paging.totalcount > _this6.paging.pageSize && _this6.paging.page > 0;
        _this6.data.queueTasks = tasks.map(function (dto) {
          return new QueueTask(dto);
        });
        _this6.data.selection.dropSelect();
        _this6.state.emptyData = !tasks.length;
        _this6.state.dataReady = true;
        processing.close();
        _this6.$appLoader.hide();
      });
    }
  }]);
  return QueueTasksController;
}();
var QueueTasksComponent = {
  controller: QueueTasksController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/queue/queuetasks.component.html"
};
exports.QueueTasksComponent = QueueTasksComponent;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskDetailsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TaskDetailsController = /*#__PURE__*/function () {
  TaskDetailsController.$inject = ["$uibModalInstance", "queueTaskDetails"];
  /*@ngInject*/
  function TaskDetailsController($uibModalInstance, queueTaskDetails) {
    _classCallCheck(this, TaskDetailsController);
    this.$uibModalInstance = $uibModalInstance;
    this.queueTaskDetails = queueTaskDetails;
    this.queueTaskDetails.jsonData = JSON.stringify(JSON.parse(this.queueTaskDetails.jsonData || "{}"), null, 4);
    var result = this.queueTaskDetails.resultData;
    try {
      result = JSON.parse(result || "{}");
    } catch (e) {}
    this.queueTaskDetails.resultData = result;
  }
  _createClass(TaskDetailsController, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return TaskDetailsController;
}();
var TaskDetailsComponent = {
  controller: TaskDetailsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/queue/details/taskDetails.component.html"
};
exports.TaskDetailsComponent = TaskDetailsComponent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducPortalUploadRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EducPortalUploadRegistryController = /*#__PURE__*/function () {
  EducPortalUploadRegistryController.$inject = ["pageContext", "language", "taskQueueService", "$dialogs", "$http", "downloadService"];
  /*@ngInject*/
  function EducPortalUploadRegistryController(pageContext, language, taskQueueService, $dialogs, $http, downloadService) {
    var _this = this;
    _classCallCheck(this, EducPortalUploadRegistryController);
    this.taskQueueService = taskQueueService;
    this.$dialogs = $dialogs;
    this.$http = $http;
    this.downloadService = downloadService;
    pageContext.title = "Интеграция с образовательным порталом";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    this.registryInfo = {
      url: "/webapi/admin/educportal/upload/registry",
      filtersUrl: "/webapi/admin/educportal/upload/registry/filter",
      fieldDecorators: {
        "startDate": new _registry.DateTimeDecorator(),
        "endDate": new _registry.DateTimeDecorator()
      },
      buttons: [{
        title: "Запустить выгрузку",
        action: function action() {
          return _this.exportData();
        }
      }, {
        title: "Загрузить файлы пакетов",
        action: function action() {
          return _this.downloadPackets();
        },
        selectionMode: _registry.SelectionMode.Single
      }],
      linkButtons: [],
      "export": false
    };
  }
  _createClass(EducPortalUploadRegistryController, [{
    key: "downloadPackets",
    value: function downloadPackets() {
      var _this2 = this;
      var registryRow = this.controller.selection.items[0];
      var result = registryRow.result;
      if (!result) {
        this.$dialogs.message("Нет информации о файлах выгрузки");
        return;
      }
      var uploadResult = JSON.parse(result);
      if (!uploadResult || !uploadResult.Packets || !uploadResult.Packets.length) {
        return;
      }
      this.$dialogs.confirm("Загрузить " + uploadResult.Packets.length + " файлов?").then(function () {
        var _iterator = _createForOfIteratorHelper(uploadResult.Packets),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var packet = _step.value;
            _this2.downloadService.downloadFile("/webapi/files/" + packet.FileId);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "exportData",
    value: function exportData() {
      var _this3 = this;
      var opt = {
        header: "Выгрузка информации в образовательный портал",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this3.$http.post("/webapi/admin/educportal/upload/queue", null).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt).then(function () {
        _this3.controller.load();
      });
    }
  }]);
  return EducPortalUploadRegistryController;
}();
var EducPortalUploadRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: EducPortalUploadRegistryController,
  controllerAs: "$ctrl"
};
exports.EducPortalUploadRegistryComponent = EducPortalUploadRegistryComponent;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlearnoUploadRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InlearnoUploadRegistryController = /*#__PURE__*/function () {
  InlearnoUploadRegistryController.$inject = ["pageContext", "language", "taskQueueService", "$http"];
  /*@ngInject*/
  function InlearnoUploadRegistryController(pageContext, language, taskQueueService, $http) {
    var _this = this;
    _classCallCheck(this, InlearnoUploadRegistryController);
    this.taskQueueService = taskQueueService;
    this.$http = $http;
    pageContext.title = "Интеграция с фед. сегментом ПФДО";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    this.registryInfo = {
      url: "/webapi/integration/inlearno/upload/registry",
      filtersUrl: "/webapi/integration/inlearno/upload/registry/filter",
      fieldDecorators: {
        "startDate": new _registry.DateTimeDecorator(),
        "endDate": new _registry.DateTimeDecorator()
      },
      buttons: [{
        title: "Выгрузка за текущую дату",
        action: function action() {
          return _this.upload(false, null);
        }
      }, {
        title: "Полная выгрузка",
        action: function action() {
          return _this.upload(true, null);
        }
      }],
      linkButtons: [],
      "export": false
    };
  }
  _createClass(InlearnoUploadRegistryController, [{
    key: "upload",
    value: function upload(fullYearUpload, enrollDate) {
      var _this2 = this;
      var opt = {
        header: "Выгрузка заявок",
        logoutputMode: true,
        closeOnEnd: false,
        getTaskFunc: function getTaskFunc() {
          return _this2.$http.post("/webapi/integration/inlearno/upload/queue", {
            fullYearUpload: fullYearUpload,
            enrollDate: enrollDate
          }).then(function (response) {
            return response.data;
          });
        }
      };
      this.taskQueueService.execute(opt).then(function () {
        _this2.controller.load();
      });
    }
  }]);
  return InlearnoUploadRegistryController;
}();
var InlearnoUploadRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: InlearnoUploadRegistryController,
  controllerAs: "$ctrl"
};
exports.InlearnoUploadRegistryComponent = InlearnoUploadRegistryComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginAttemptsRegistryComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var LoginAttemptsRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", function LoginAttemptsRegistryController(pageContext, language) {
  _classCallCheck(this, LoginAttemptsRegistryController);
  pageContext.title = language.Generic.ServAdmin.kLogins;
  pageContext.parent = {
    href: "/",
    title: language.Generic.MenuFolders.kDiagnos
  };
  pageContext.back = {
    history: true
  };
  this.registryInfo = {
    url: "/webapi/admin/loginAttempts/registry",
    filtersUrl: "/webapi/admin/loginAttempts/registry/filter",
    buttons: [],
    linkButtons: []
  };
}]);
var LoginAttemptsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\"></registry>",
  controller: LoginAttemptsRegistryController,
  controllerAs: "$ctrl"
};
exports.LoginAttemptsRegistryComponent = LoginAttemptsRegistryComponent;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonalDataAccessRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PersonalDataAccessRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", function PersonalDataAccessRegistryController(pageContext, language) {
  _classCallCheck(this, PersonalDataAccessRegistryController);
  pageContext.title = language.Generic.Secure.kPersonalDataAccess;
  pageContext.parent = {
    href: "/",
    title: language.Generic.MenuFolders.kDiagnos
  };
  pageContext.back = {
    history: true
  };
  this.registryInfo = {
    url: "/webapi/admin/personalDataAccess/registry",
    filtersUrl: "/webapi/admin/personalDataAccess/registry/filter",
    fieldDecorators: {
      "accessResultInfo": new _registry.PreserveWhiteSpaceDecorator()
    },
    buttons: [],
    linkButtons: []
  };
}]);
var PersonalDataAccessRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\"></registry>",
  controller: PersonalDataAccessRegistryController,
  controllerAs: "$ctrl"
};
exports.PersonalDataAccessRegistryComponent = PersonalDataAccessRegistryComponent;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoloOrganizationsRegistryController = exports.SoloOrganizationsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
var _setSoloOrgLink = __webpack_require__(52);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SoloOrganizationsRegistryController = /*#__PURE__*/function () {
  SoloOrganizationsRegistryController.$inject = ["pageContext", "$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "appContext", "soloOrganizationsRepository", "$longWork", "$location"];
  /*@ngInject*/
  function SoloOrganizationsRegistryController(pageContext, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, appContext, soloOrganizationsRepository, $longWork, $location) {
    var _this = this;
    _classCallCheck(this, SoloOrganizationsRegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.appContext = appContext;
    this.soloOrganizationsRepository = soloOrganizationsRepository;
    this.$longWork = $longWork;
    this.$location = $location;
    pageContext.title = "Организации системы";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    var setSchoolLinkButton = {
      title: "Указать ОО",
      icon: "glyphicon glyphicon-link",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.setSchoolLink();
      }
    };
    var setAllSchoolLinksButton = {
      title: "Автоматически привязать ОО",
      icon: "glyphicon glyphicon-link",
      selectionMode: _registry.SelectionMode.Empty,
      action: function action() {
        _this.setSchoolLinks();
      }
    };
    var clearSchoolLinkButton = {
      title: "Удалить привязку ОО",
      icon: "glyphicon glyphicon-remove",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.clearSchoolLink();
      }
    };
    var rbooOrgsButton = {
      title: "Просмотреть организации РБОО",
      action: function action() {
        return _this.rbooOrgs();
      },
      icon: "glyphicon glyphicon-list"
    };
    this.registryInfo = {
      url: "/webapi/integration/solo/organizations/registry",
      filtersUrl: "/webapi/integration/solo/organizations/registry/filter",
      buttons: [setSchoolLinkButton, setAllSchoolLinksButton, clearSchoolLinkButton],
      linkButtons: [rbooOrgsButton],
      isRowHighlighted: this.isHighlighted
    };
  }
  _createClass(SoloOrganizationsRegistryController, [{
    key: "clearSchoolLink",
    value: function clearSchoolLink() {
      var _this2 = this;
      var selected = this.controller.selection.selected;
      this.$dialogs.confirm("Удалить привязку ОО?").then(function () {
        _this2.soloOrganizationsRepository.clearSoloSchoolLink(selected[0].id).then(function (result) {
          _this2.$alerts.success("Привязка к РБОО организации была удалена");
          _this2.controller.load();
        });
      }, function () {})["catch"](function (result) {
        _this2.$dialogs.error("Ошибка при удалении привязки" + result.message);
      });
    }
  }, {
    key: "rbooOrgs",
    value: function rbooOrgs() {
      this.$location.path("/rbooorganizations/");
    }
  }, {
    key: "setSchoolLinks",
    value: function setSchoolLinks() {
      var _this3 = this;
      this.$dialogs.confirm("Привязать автоматически коды ОО?").then(function () {
        var processing = _this3.$longWork.show();
        _this3.soloOrganizationsRepository.setSchoolsLinks().then(function (result) {
          if (result) {
            processing.close();
            _this3.$dialogs.message("Было привязано ОО: " + result, "Информация");
          } else {
            processing.close();
            _this3.$dialogs.message("Не было найдено ни одного соответствия организаций для привязки");
          }
          _this3.controller.load();
        }, function () {});
      });
    }
  }, {
    key: "isHighlighted",
    value: function isHighlighted(row) {
      return row.inn && row.innSolo && row.inn != row.innSolo || row.ogrn && row.orgnSolo && row.ogrn != row.ogrnSolo;
    }
  }, {
    key: "setSchoolLink",
    value: function setSchoolLink() {
      var _this4 = this;
      var selected = this.controller.selection.selected;
      var modalInstance = this.$uibModal.open({
        templateUrl: _setSoloOrgLink.SetSoloOrgLinkComponent.templateUrl,
        controller: _setSoloOrgLink.SetSoloOrgLinkComponent.controller,
        controllerAs: "$ctrl",
        size: "lg",
        backdrop: false,
        resolve: {
          school: function school() {
            return selected[0];
          }
        }
      });
      modalInstance.result.then(function () {
        _this4.controller.load();
      });
    }
  }]);
  return SoloOrganizationsRegistryController;
}();
exports.SoloOrganizationsRegistryController = SoloOrganizationsRegistryController;
var SoloOrganizationsRegistryComponent = {
  controller: SoloOrganizationsRegistryController,
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controllerAs: "$ctrl"
};
exports.SoloOrganizationsRegistryComponent = SoloOrganizationsRegistryComponent;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetSoloOrgLinkController = exports.SetSoloOrgLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _selectable = _interopRequireDefault(__webpack_require__(53));
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
var SetSoloOrgLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  SetSoloOrgLinkController.$inject = ["$scope", "$dialogs", "$alerts", "language", "$uibModalInstance", "changeTracker", "school", "soloOrganizationsRepository", "$longWork"];
  _inherits(SetSoloOrgLinkController, _NetCityModalControll);
  var _super = _createSuper(SetSoloOrgLinkController);
  /*@ngInject*/
  function SetSoloOrgLinkController($scope, $dialogs, $alerts, language, $uibModalInstance, changeTracker, school, soloOrganizationsRepository, $longWork) {
    var _this;
    _classCallCheck(this, SetSoloOrgLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModalInstance = $uibModalInstance;
    _this.school = school;
    _this.soloOrganizationsRepository = soloOrganizationsRepository;
    _this.$longWork = $longWork;
    _this.soloOrgs = [];
    _this.emptyData = true;
    _this.selection = new _selectable["default"]();
    _this.searchBtnPressed = false;
    _this.searching = false;
    _this.searchSettings = {
      inn: _this.school.inn,
      ogrn: _this.school.ogrn,
      name: _this.school.name
    };
    _this.header = "Привязка организации РБОО";
    return _this;
  }
  _createClass(SetSoloOrgLinkController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      this.$longWork.show();
      this.soloOrganizationsRepository.setSchoolLink(this.school.id, this.selection.selected.external_id).then(function () {
        _this2.$longWork.close();
        _this2.$uibModalInstance.close();
        _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
      })["catch"](function () {
        _this2.$longWork.close();
      });
      ;
    }
  }, {
    key: "searchOrgs",
    value: function searchOrgs() {
      var _this3 = this;
      this.searching = true;
      this.searchBtnPressed = true;
      this.emptyData = true;
      this.$longWork.show();
      this.soloOrganizationsRepository.searchSoloOrgs(this.searchSettings.name, this.searchSettings.inn, this.searchSettings.ogrn).then(function (result) {
        _this3.$longWork.close();
        _this3.searching = false;
        _this3.emptyData = !result || !result.length;
        if (_this3.emptyData) {
          _this3.soloOrgs = [];
        } else {
          _this3.soloOrgs = Object.assign({}, result);
        }
        _this3.$scope.$applyAsync();
      })["catch"](function () {
        _this3.$longWork.close();
        _this3.searching = false;
      });
    }
  }, {
    key: "clearInn",
    value: function clearInn() {
      this.searchSettings.inn = "";
    }
  }, {
    key: "clearOgrn",
    value: function clearOgrn() {
      this.searchSettings.ogrn = "";
    }
  }, {
    key: "clearName",
    value: function clearName() {
      this.searchSettings.name = "";
    }
  }]);
  return SetSoloOrgLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.SetSoloOrgLinkController = SetSoloOrgLinkController;
var SetSoloOrgLinkComponent = {
  controller: SetSoloOrgLinkController,
  templateUrl: "/static/dist/app/admin/support/soloOrganizations/setSoloOrgLink.component.html"
};
exports.SetSoloOrgLinkComponent = SetSoloOrgLinkComponent;

/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RbooOrganizationsRegistryController = exports.RbooOrganizationsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
var _setRbooOrgLink = __webpack_require__(55);
var _createResult = __webpack_require__(56);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RbooOrganizationsRegistryController = /*#__PURE__*/function () {
  RbooOrganizationsRegistryController.$inject = ["pageContext", "$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "appContext", "soloOrganizationsRepository", "$longWork", "$location"];
  /*@ngInject*/
  function RbooOrganizationsRegistryController(pageContext, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, appContext, soloOrganizationsRepository, $longWork, $location) {
    var _this = this;
    _classCallCheck(this, RbooOrganizationsRegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.appContext = appContext;
    this.soloOrganizationsRepository = soloOrganizationsRepository;
    this.$longWork = $longWork;
    this.$location = $location;
    pageContext.title = "Организации РБОО";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    var soloOrgsButton = {
      title: "Просмотреть организации системы",
      action: function action() {
        return _this.soloOrgs();
      },
      icon: "glyphicon glyphicon-list"
    };
    var autoCreateOrgsButton = {
      title: "Создать новые организации в системе",
      action: function action() {
        return _this.autoCreate();
      },
      selectionMode: _registry.SelectionMode.Empty,
      icon: "glyphicon glyphicon-link"
    };
    var linkOrgButton = {
      title: "Указать организацию в системе",
      action: function action() {
        return _this.linkOrg();
      },
      selectionMode: _registry.SelectionMode.Single,
      icon: "glyphicon glyphicon-link"
    };
    var clearLinkButton = {
      title: "Удалить привязку",
      icon: "glyphicon glyphicon-remove",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.clearOrgLink();
      }
    };
    this.registryInfo = {
      url: "/webapi/integration/solo/rboo/organizations/registry",
      filtersUrl: "/webapi/integration/solo/rboo/organizations/registry/filter",
      buttons: [linkOrgButton, clearLinkButton, autoCreateOrgsButton],
      linkButtons: [soloOrgsButton],
      isRowHighlighted: this.isHighlighted
    };
  }
  _createClass(RbooOrganizationsRegistryController, [{
    key: "soloOrgs",
    value: function soloOrgs() {
      this.$location.path("/soloorganizations/");
    }
  }, {
    key: "linkOrg",
    value: function linkOrg() {
      var _this2 = this;
      var selected = this.controller.selection.selected;
      var modalInstance = this.$uibModal.open({
        templateUrl: _setRbooOrgLink.SetRbooOrgLinkComponent.templateUrl,
        controller: _setRbooOrgLink.SetRbooOrgLinkComponent.controller,
        controllerAs: "$ctrl",
        size: "lg",
        backdrop: false,
        resolve: {
          school: function school() {
            return selected[0];
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.controller.load();
      });
    }
  }, {
    key: "clearOrgLink",
    value: function clearOrgLink() {
      var _this3 = this;
      var selected = this.controller.selection.selected;
      if (selected && selected[0].sgoOrgId) {
        this.$dialogs.confirm("Удалить привязку?").then(function () {
          _this3.soloOrganizationsRepository.clearSoloSchoolLink(selected[0].sgoOrgId).then(function (result) {
            _this3.$alerts.success("Привязка к организации была удалена");
            _this3.controller.load();
          });
        }, function () {})["catch"](function (result) {
          _this3.$dialogs.error("Ошибка при удалении привязки" + result.message);
        });
      }
    }
  }, {
    key: "autoCreate",
    value: function autoCreate() {
      var _this4 = this;
      var fpValues = this.controller.filterInfo.filterPanel.getValue().getValues();
      var changeDate = fpValues.rbooDateFilter;
      if (!changeDate) {
        this.$dialogs.message("Необходимо указать дату");
        return;
      }
      var processing = this.$longWork.show();
      this.soloOrganizationsRepository.createSchools(changeDate).then(function (_result) {
        processing.close();
        _this4.$uibModal.open({
          controller: _createResult.CreateRbooOrgResultComponent.controller,
          controllerAs: _createResult.CreateRbooOrgResultComponent.controllerAs,
          templateUrl: _createResult.CreateRbooOrgResultComponent.templateUrl,
          resolve: {
            result: function result() {
              return _result;
            }
          }
        });
        if (_result.filter(function (r) {
          return !r.error;
        }).length) {
          _this4.controller.load();
        }
      });
    }
  }, {
    key: "isHighlighted",
    value: function isHighlighted(row) {
      return false;
    }
  }]);
  return RbooOrganizationsRegistryController;
}();
exports.RbooOrganizationsRegistryController = RbooOrganizationsRegistryController;
var RbooOrganizationsRegistryComponent = {
  controller: RbooOrganizationsRegistryController,
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controllerAs: "$ctrl"
};
exports.RbooOrganizationsRegistryComponent = RbooOrganizationsRegistryComponent;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetRbooOrgLinkController = exports.SetRbooOrgLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _selectable = _interopRequireDefault(__webpack_require__(53));
var _createResult = __webpack_require__(56);
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
var SetRbooOrgLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  SetRbooOrgLinkController.$inject = ["$scope", "$dialogs", "$alerts", "language", "$uibModal", "$uibModalInstance", "changeTracker", "school", "soloOrganizationsRepository", "$longWork"];
  _inherits(SetRbooOrgLinkController, _NetCityModalControll);
  var _super = _createSuper(SetRbooOrgLinkController);
  /*@ngInject*/
  function SetRbooOrgLinkController($scope, $dialogs, $alerts, language, $uibModal, $uibModalInstance, changeTracker, school, soloOrganizationsRepository, $longWork) {
    var _this;
    _classCallCheck(this, SetRbooOrgLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModal = $uibModal;
    _this.school = school;
    _this.soloOrganizationsRepository = soloOrganizationsRepository;
    _this.$longWork = $longWork;
    _this.rbooOrgs = [];
    _this.emptyData = true;
    _this.selection = new _selectable["default"]();
    _this.searchBtnPressed = false;
    _this.searching = false;
    _this.searchSettings = {
      inn: _this.school.inn,
      ogrn: _this.school.ogrn,
      name: _this.school.name
    };
    _this.header = "Указать организацию системы";
    return _this;
  }
  _createClass(SetRbooOrgLinkController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      this.$longWork.show();
      this.soloOrganizationsRepository.setSchoolLink(this.selection.selected.id, this.school.id).then(function () {
        _this2.$longWork.close();
        _this2.$uibModalInstance.close();
        _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
      })["catch"](function () {
        _this2.$longWork.close();
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this3 = this;
      this.$dialogs.confirm("Создать организацию?").then(function () {
        _this3.soloOrganizationsRepository.createSchool(_this3.school.id).then(function (_result) {
          _this3.$uibModal.open({
            controller: _createResult.CreateRbooOrgResultComponent.controller,
            controllerAs: _createResult.CreateRbooOrgResultComponent.controllerAs,
            templateUrl: _createResult.CreateRbooOrgResultComponent.templateUrl,
            resolve: {
              result: function result() {
                return _result;
              }
            }
          });
          _this3.$uibModalInstance.close(_result);
        });
      });
    }
  }, {
    key: "searchOrgs",
    value: function searchOrgs() {
      var _this4 = this;
      this.searching = true;
      this.searchBtnPressed = true;
      this.emptyData = true;
      this.$longWork.show();
      this.soloOrganizationsRepository.searchSchools(this.searchSettings.name, this.searchSettings.inn, this.searchSettings.ogrn).then(function (result) {
        _this4.$longWork.close();
        _this4.searching = false;
        _this4.emptyData = !result || !result.length;
        if (_this4.emptyData) {
          _this4.rbooOrgs = [];
        } else {
          _this4.rbooOrgs = Object.assign({}, result);
        }
        _this4.$scope.$applyAsync();
      })["catch"](function () {
        _this4.$longWork.close();
        _this4.searching = false;
      });
    }
  }, {
    key: "clearInn",
    value: function clearInn() {
      this.searchSettings.inn = "";
    }
  }, {
    key: "clearOgrn",
    value: function clearOgrn() {
      this.searchSettings.ogrn = "";
    }
  }, {
    key: "clearName",
    value: function clearName() {
      this.searchSettings.name = "";
    }
  }]);
  return SetRbooOrgLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.SetRbooOrgLinkController = SetRbooOrgLinkController;
var SetRbooOrgLinkComponent = {
  controller: SetRbooOrgLinkController,
  templateUrl: "/static/dist/app/admin/support/soloOrganizations/setRbooOrgLink.component.html"
};
exports.SetRbooOrgLinkComponent = SetRbooOrgLinkComponent;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRbooOrgResultController = exports.CreateRbooOrgResultComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
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
var CreateRbooOrgResultController = /*#__PURE__*/function (_NetCityModalControll) {
  CreateRbooOrgResultController.$inject = ["$scope", "$dialogs", "$alerts", "language", "$uibModalInstance", "changeTracker", "result"];
  _inherits(CreateRbooOrgResultController, _NetCityModalControll);
  var _super = _createSuper(CreateRbooOrgResultController);
  /*@ngInject*/
  function CreateRbooOrgResultController($scope, $dialogs, $alerts, language, $uibModalInstance, changeTracker, result) {
    var _this;
    _classCallCheck(this, CreateRbooOrgResultController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModalInstance = $uibModalInstance;
    _this.result = result;
    _this.header = "Результат создания организаций";
    _this.created = _this.result.filter(function (f) {
      return !f.error;
    }).length;
    _this.errors = _this.result.filter(function (f) {
      return f.error;
    });
    return _this;
  }
  return _createClass(CreateRbooOrgResultController);
}(_netcityModalCtrl.NetCityModalController);
exports.CreateRbooOrgResultController = CreateRbooOrgResultController;
var CreateRbooOrgResultComponent = {
  controller: CreateRbooOrgResultController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/soloOrganizations/createResult.component.html"
};
exports.CreateRbooOrgResultComponent = CreateRbooOrgResultComponent;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoloRefsRegistryController = exports.SoloRefsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SoloRefsRegistryController = /*#__PURE__*/function () {
  SoloRefsRegistryController.$inject = ["pageContext", "$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "appContext", "soloRefsRepository", "$longWork"];
  /*@ngInject*/
  function SoloRefsRegistryController(pageContext, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, appContext, soloRefsRepository, $longWork) {
    var _this = this;
    _classCallCheck(this, SoloRefsRegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.appContext = appContext;
    this.soloRefsRepository = soloRefsRepository;
    this.$longWork = $longWork;
    pageContext.title = "Справочники СОЛО";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    var setRefLinkButton = {
      title: "Указать соответствие в системе",
      icon: "glyphicon glyphicon-link",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.setRefLink();
      }
    };
    var clearRefLinkButton = {
      title: "Удалить соответствие в системе",
      icon: "glyphicon glyphicon-remove",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.clearRefLink();
      }
    };
    this.registryInfo = {
      url: "/webapi/integration/solo/refs/registry",
      filtersUrl: "/webapi/integration/solo/refs/registry/filter",
      buttons: [setRefLinkButton, clearRefLinkButton],
      linkButtons: [],
      isRowHighlighted: this.isHighlighted
    };
  }
  _createClass(SoloRefsRegistryController, [{
    key: "clearRefLink",
    value: function clearRefLink() {
      var selected = this.controller.selection.selected;
      this.$dialogs.confirm("Удалить соответствие в системе?").then(function () {});
    }
  }, {
    key: "setRefLink",
    value: function setRefLink() {
      var selected = this.controller.selection.selected;
      this.$dialogs.confirm("Указать соответствие в системе?").then(function () {});
    }
  }, {
    key: "isHighlighted",
    value: function isHighlighted(row) {
      return false;
    }
  }]);
  return SoloRefsRegistryController;
}();
exports.SoloRefsRegistryController = SoloRefsRegistryController;
var SoloRefsRegistryComponent = {
  controller: SoloRefsRegistryController,
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controllerAs: "$ctrl"
};
exports.SoloRefsRegistryComponent = SoloRefsRegistryComponent;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueTaskRepository = void 0;
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
var QueueTaskRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(QueueTaskRepository, _BaseRepository);
  var _super = _createSuper(QueueTaskRepository);
  function QueueTaskRepository() {
    _classCallCheck(this, QueueTaskRepository);
    return _super.apply(this, arguments);
  }
  _createClass(QueueTaskRepository, [{
    key: "getAll",
    value: function getAll(taskType, status, page, pageSize) {
      var params = {};
      if (status) {
        params.status = status;
      }
      if (taskType) {
        params.taskType = taskType;
      }
      if (page || pageSize) {
        params.page = page;
        params.pageSize = pageSize;
      }
      return this.$http.get("/webapi/queueTasks", {
        params: params
      }).then(function (response) {
        var tasks = response.data;
        if (response.headers("count")) {
          tasks.totalcount = parseInt(response.headers("count"));
        }
        return tasks;
      });
    }
  }, {
    key: "delete",
    value: function _delete(ids) {
      var _this = this;
      return this.$http["delete"]("/webapi/queueTasks", {
        params: {
          ids: ids
        }
      }).then(function () {
        _this.$alerts.success("задача успешно удалены");
      })["catch"](this.handleError);
    }
  }, {
    key: "retry",
    value: function retry(ids) {
      var _this2 = this;
      return this.$http.get("/webapi/queueTasks/retry", {
        params: {
          id: ids
        }
      }).then(function () {
        _this2.$alerts.success("задача установлена в очередь на повторную обработку");
      })["catch"](this.handleError);
    }
  }, {
    key: "clearReportQueue",
    value: function clearReportQueue() {
      var _this3 = this;
      return this.$http.post("/webapi/queueTasks/clear").then(function (response) {
        var taskCount = response.data;
        var message = "очередь отчетов успешно очищена";
        if (taskCount > 0) {
          message += "\n\u0443\u0434\u0430\u043B\u0435\u043D\u043E ".concat(taskCount, " \u0437\u0430\u0434\u0430\u0447");
        }
        _this3.$alerts.success(message);
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getDetails",
    value: function getDetails(id) {
      return this.$http.get("/webapi/queueTasks/".concat(id)).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return QueueTaskRepository;
}(_repository.BaseRepository);
exports.QueueTaskRepository = QueueTaskRepository;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoloOrganizationsRepository = void 0;
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
var SoloOrganizationsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SoloOrganizationsRepository, _BaseRepository);
  var _super = _createSuper(SoloOrganizationsRepository);
  function SoloOrganizationsRepository() {
    _classCallCheck(this, SoloOrganizationsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SoloOrganizationsRepository, [{
    key: "setSchoolsLinks",
    value: function setSchoolsLinks() {
      return this.$http.post("/webapi/integration/solo/organizations/schoolsLinks").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "clearSoloSchoolLink",
    value: function clearSoloSchoolLink(schoolId) {
      return this.$http["delete"]("/webapi/integration/solo/organizations/link", {
        params: {
          schoolId: schoolId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setSchoolLink",
    value: function setSchoolLink(schoolId, rbOoId) {
      return this.$http.post("/webapi/integration/solo/organizations/link", null, {
        params: {
          rbOoId: rbOoId,
          schoolId: schoolId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "searchSoloOrgs",
    value: function searchSoloOrgs(name, inn, ogrn) {
      return this.$http.get("/webapi/integration/solo/organizations/search", {
        params: {
          name: name,
          ogrn: ogrn,
          inn: inn
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "searchSchools",
    value: function searchSchools(name, inn, ogrn) {
      return this.$http.get("/webapi/schools/search", {
        params: {
          name: name,
          ogrn: ogrn,
          inn: inn,
          excludeSchoolId: null,
          take: -1,
          cityId: null
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createSchool",
    value: function createSchool(rbOoId) {
      return this.$http.post("/webapi/integration/solo/rboo/organizations/create", null, {
        params: {
          rbooOrgId: rbOoId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createSchools",
    value: function createSchools(rbOoChangeDate) {
      return this.$http.post("/webapi/integration/solo/rboo/organizations/create", null, {
        params: {
          changeDate: rbOoChangeDate
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SoloOrganizationsRepository;
}(_repository.BaseRepository);
exports.SoloOrganizationsRepository = SoloOrganizationsRepository;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoloRefsRepository = void 0;
var _repository = __webpack_require__(20);
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
var SoloRefsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SoloRefsRepository, _BaseRepository);
  var _super = _createSuper(SoloRefsRepository);
  function SoloRefsRepository() {
    _classCallCheck(this, SoloRefsRepository);
    return _super.apply(this, arguments);
  }
  return _createClass(SoloRefsRepository);
}(_repository.BaseRepository);
exports.SoloRefsRepository = SoloRefsRepository;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JournalCorrectionRepository = exports.JournalCorrectionComponent = exports.GradingSys = void 0;
var _baseRepository = __webpack_require__(27);
var _selectable = _interopRequireDefault(__webpack_require__(53));
var _nsModal = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var JournalCorrectionController = /*#__PURE__*/function () {
  JournalCorrectionController.$inject = ["$scope", "$appLoader", "pageContext", "language", "$longWork", "$uibModal", "journalCorrectionRepository", "journalAssignmentsRepository", "$alerts"];
  /*@ngInject*/
  function JournalCorrectionController($scope, $appLoader, pageContext, language, $longWork, $uibModal, journalCorrectionRepository, journalAssignmentsRepository, $alerts) {
    var _this = this;
    _classCallCheck(this, JournalCorrectionController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.pageContext = pageContext;
    this.language = language;
    this.$longWork = $longWork;
    this.$uibModal = $uibModal;
    this.journalCorrectionRepository = journalCorrectionRepository;
    this.journalAssignmentsRepository = journalAssignmentsRepository;
    this.$alerts = $alerts;
    this.selection = new _selectable["default"]();
    pageContext.parent = {
      title: language.Generic.MenuFolders.kDiagnos,
      href: "/"
    };
    pageContext.back = {
      history: true
    };
    pageContext.title = "Коррекция КЖ";
    this.markTypes = [{
      id: 1,
      name: this.language.Generic.Common.kMark_
    }, {
      id: 0,
      name: this.language.Generic.Common.kWithoutMark
    }, {
      id: -1,
      name: this.language.Generic.Common.kNonAttest
    }, {
      id: -2,
      name: this.language.Generic.Common.kExempted
    }, {
      id: -3,
      name: this.language.Generic.Common.kAccepted
    }, {
      id: -4,
      name: this.language.Generic.Common.kStudied
    }, {
      id: -5,
      name: this.language.Generic.Common.kNotRated
    }];
    this.filterPanelSettings = {
      url: "/webapi/admin/journalcorrection/filter",
      events: {
        ready: function ready() {
          _this.$appLoader.hide();
          _this.load();
        },
        emptyChoice: function emptyChoice() {
          _this.emptyData = true;
          _this.hasUnassignedMarks = false;
          _this.$appLoader.hide();
          _this.$scope.$applyAsync();
        }
      }
    };
  }
  _createClass(JournalCorrectionController, [{
    key: "getMarkInfo",
    value: function getMarkInfo(mark, subjectGroup, periodType) {
      var gradingSys = null;
      if (subjectGroup && subjectGroup.gradingSys) {
        gradingSys = subjectGroup.gradingSys;
      }
      if (periodType && periodType.gradingSys) {
        gradingSys = periodType.gradingSys;
      }
      if (mark > 0) {
        if (gradingSys == GradingSys.Pass) {
          if (mark == this.minMark) {
            return this.language.Generic.Common.kNotPass;
          }
          if (mark == this.maxMark) {
            return this.language.Generic.Common.kPass;
          }
        }
        return mark.toString();
      }
      if (mark == 0 && gradingSys == GradingSys.Pass) {
        return "";
      }
      var markType = this.markTypes.find(function (item) {
        return item.id == mark;
      });
      if (markType) {
        return markType.name;
      }
      return "";
    }
  }, {
    key: "getmarkType",
    value: function getmarkType(dto) {
      if (dto.term) {
        return "оценка за период";
      }
      return "итоговая";
    }
  }, {
    key: "getmarkPeriod",
    value: function getmarkPeriod(dto) {
      if (dto.term) {
        return dto.term.name;
      }
      return dto.periodType.name;
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      this.marks = [];
      if (this.filterPanel.checkEmptyChoice()) {
        return;
      }
      var fpValues = this.filterPanel.getValues();
      var studentId = fpValues.SID;
      var schoolYearId = fpValues.YEAR;
      this.hasUnassignedMarks = true;
      this.selection.dropSelect();
      var processing = this.$longWork.show();
      this.journalAssignmentsRepository.loadYearSettings(schoolYearId).then(function (result) {
        _this2.minMark = result.minMark;
        _this2.maxMark = result.maxMark;
        _this2.journalCorrectionRepository.getMarks(studentId, schoolYearId).then(function (marks) {
          _this2.marks = marks;
          _this2.dataReady = true;
          processing.close();
        });
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this3 = this;
      var fpValues = this.filterPanel.getValues();
      var _schoolId = fpValues.org;
      var _schoolyearId = fpValues.YEAR;
      var _mark = this.selection.item;
      if (!_mark) {
        return;
      }
      var modal = this.$uibModal.open({
        backdrop: 'static',
        controller: MarkCorrectionComponent.controller,
        controllerAs: MarkCorrectionComponent.controllerAs,
        templateUrl: MarkCorrectionComponent.templateUrl,
        resolve: {
          mark: function mark() {
            return _mark;
          },
          schoolId: function schoolId() {
            return _schoolId;
          },
          schoolyearId: function schoolyearId() {
            return _schoolyearId;
          },
          markInfo: function markInfo() {
            return _this3.getMarkInfo(_mark.mark, _mark.subjectGroup, _mark.periodType);
          },
          markTypes: function markTypes() {
            return _this3.markTypes;
          },
          minMark: function minMark() {
            return _this3.minMark;
          },
          maxMark: function maxMark() {
            return _this3.maxMark;
          },
          regimeAddNew: function regimeAddNew() {
            return false;
          },
          unassignedMarks: function unassignedMarks() {
            return [];
          }
        }
      });
      modal.result.then(function () {
        _this3.load();
      });
    }
  }, {
    key: "add",
    value: function add() {
      var _this4 = this;
      var fpValues = this.filterPanel.getValues();
      var _schoolId2 = fpValues.org;
      var _schoolyearId2 = fpValues.YEAR;
      var studentId = fpValues.SID;
      var processing = this.$longWork.show();
      this.journalCorrectionRepository.getUnassignedMarks(studentId, _schoolyearId2).then(function (result) {
        processing.close();
        if (!result || !result.length || result.length == 0) {
          _this4.$alerts.info("Этому ученику нельзя добавить новую оценку, возможно ему выставлены все оценки.");
          _this4.hasUnassignedMarks = false;
          return;
        } else {
          var _mark2 = result[0];
          if (!_mark2) {
            return;
          }
          var student = {
            id: studentId,
            name: _this4.filterPanel.getTexts().SID
          };
          result.forEach(function (x) {
            return x.student = student;
          });
          result.forEach(function (x) {
            return x.mark = null;
          });
          _this4.hasUnassignedMarks = true;
          var modal = _this4.$uibModal.open({
            backdrop: 'static',
            controller: MarkCorrectionComponent.controller,
            controllerAs: MarkCorrectionComponent.controllerAs,
            templateUrl: MarkCorrectionComponent.templateUrl,
            resolve: {
              mark: function mark() {
                return _mark2;
              },
              schoolId: function schoolId() {
                return _schoolId2;
              },
              schoolyearId: function schoolyearId() {
                return _schoolyearId2;
              },
              markInfo: function markInfo() {
                return _this4.getMarkInfo(_mark2.mark, _mark2.subjectGroup, _mark2.periodType);
              },
              markTypes: function markTypes() {
                return _this4.markTypes;
              },
              minMark: function minMark() {
                return _this4.minMark;
              },
              maxMark: function maxMark() {
                return _this4.maxMark;
              },
              regimeAddNew: function regimeAddNew() {
                return true;
              },
              unassignedMarks: function unassignedMarks() {
                return result;
              }
            }
          });
          modal.result.then(function () {
            _this4.load();
          });
        }
      });
    }
  }]);
  return JournalCorrectionController;
}();
var MarkCorrectionController = /*#__PURE__*/function () {
  MarkCorrectionController.$inject = ["$uibModalInstance", "$longWork", "$alerts", "$dialogs", "language", "journalCorrectionRepository", "mark", "schoolId", "schoolyearId", "markInfo", "markTypes", "minMark", "maxMark", "regimeAddNew", "unassignedMarks"];
  /*@ngInject*/
  function MarkCorrectionController($uibModalInstance, $longWork, $alerts, $dialogs, language, journalCorrectionRepository, mark, schoolId, schoolyearId, markInfo, markTypes, minMark, maxMark, regimeAddNew, unassignedMarks) {
    var _this5 = this;
    _classCallCheck(this, MarkCorrectionController);
    var _a, _b;
    this.$uibModalInstance = $uibModalInstance;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.language = language;
    this.journalCorrectionRepository = journalCorrectionRepository;
    this.mark = mark;
    this.schoolId = schoolId;
    this.schoolyearId = schoolyearId;
    this.markInfo = markInfo;
    this.markTypes = markTypes;
    this.minMark = minMark;
    this.maxMark = maxMark;
    this.regimeAddNew = regimeAddNew;
    this.unassignedMarks = unassignedMarks;
    this.gradingSys = null;
    if (this.regimeAddNew) {
      this.header = "Добавление новой оценки. Ученик " + mark.student.name + ".";
      var subjIds = _toConsumableArray(new Set(this.unassignedMarks.map(function (x) {
        return x.subject.id;
      })));
      this.subjects = subjIds.map(function (x) {
        return _this5.unassignedMarks.find(function (y) {
          return y.subject.id == x;
        }).subject;
      });
      this.unassignedSubject = this.subjects[0];
      this.changeSubject();
    } else {
      this.header = "Коррекция оценки. Ученик " + mark.student.name + ".";
      this.prepareMarkTypes();
    }
    this.intInputOptions = {
      maxMark: this.maxMark,
      minMark: this.minMark,
      maxLength: this.maxMark.toString().length
    };
    this.buttons = [{
      title: "Сохранить",
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this5.save(false);
      }
    }, {
      title: "Отмена",
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this5.close();
      }
    }];
    /* #34127
            if (!this.regimeAddNew) {
                this.buttons.push({
                    title: "Удалить оценку",
                    icon: "glyphicon glyphicon-remove",
                    action: () => this.delete()
                });
            }
    */
    this.periodName = ((_a = this.mark.term) === null || _a === void 0 ? void 0 : _a.name) || ((_b = this.mark.periodType) === null || _b === void 0 ? void 0 : _b.name);
    this.changeNewMarkType();
  }
  _createClass(MarkCorrectionController, [{
    key: "prepareMarkTypes",
    value: function prepareMarkTypes() {
      var _this6 = this;
      if (this.mark.subjectGroup && this.mark.subjectGroup.gradingSys) {
        this.gradingSys = this.mark.subjectGroup.gradingSys;
      }
      if (this.mark.periodType && this.mark.periodType.gradingSys) {
        this.gradingSys = this.mark.periodType.gradingSys;
      }
      this.markTypesForSelect = [];
      if (this.gradingSys == GradingSys.Mark) {
        this.markTypesForSelect.push({
          id: 1,
          name: this.language.Generic.Common.kMark_
        });
      }
      if (this.gradingSys == GradingSys.NotRated) {
        this.markTypesForSelect.push({
          id: -5,
          name: this.language.Generic.Common.kNotRated
        });
        if (this.mark.mark > 0) {
          this.markTypesForSelect.push({
            id: 1,
            name: this.language.Generic.Common.kMark_
          });
        }
      }
      if (this.gradingSys == GradingSys.Pass) {
        this.markTypesForSelect.unshift({
          id: null,
          name: ""
        });
        this.markTypesForSelect.push({
          id: this.maxMark,
          name: this.language.Generic.Common.kPass
        });
        this.markTypesForSelect.push({
          id: this.minMark,
          name: this.language.Generic.Common.kNotPass
        });
      }
      this.markTypesForSelect.push({
        id: -1,
        name: this.language.Generic.Common.kNonAttest
      });
      this.markTypesForSelect.push({
        id: -2,
        name: this.language.Generic.Common.kExempted
      });
      if (this.gradingSys == GradingSys.Mark) {
        this.newMarkType = this.markTypesForSelect.find(function (item) {
          return item.id == 1;
        });
      } else {
        if (this.gradingSys == GradingSys.Pass && !this.mark.mark) {
          this.mark.mark = null;
        }
        this.newMarkType = this.markTypesForSelect.find(function (item) {
          return item.id == _this6.mark.mark;
        });
        if (!this.newMarkType && this.mark.mark > 0) {
          this.newMarkType = this.markTypesForSelect.find(function (item) {
            return item.id == 1;
          });
        }
      }
    }
  }, {
    key: "changeSubject",
    value: function changeSubject() {
      var _this7 = this;
      this.subjectsMarks = this.unassignedMarks.filter(function (x) {
        return x.subject.id == _this7.unassignedSubject.id;
      });
      var sgIds = _toConsumableArray(new Set(this.subjectsMarks.map(function (x) {
        return x.subjectGroup.id;
      })));
      this.subjectGroups = sgIds.map(function (x) {
        return _this7.subjectsMarks.find(function (y) {
          return y.subjectGroup.id == x;
        }).subjectGroup;
      });
      this.subjectGroup = this.subjectGroups[0];
      this.singleSg = this.subjectGroups.length <= 1;
      this.changeSubjectGroup();
    }
  }, {
    key: "changeSubjectGroup",
    value: function changeSubjectGroup() {
      var _this8 = this;
      this.sgMarks = this.subjectsMarks.filter(function (x) {
        return x.subjectGroup.id == _this8.subjectGroup.id;
      });
      this.mark = this.sgMarks[0];
      this.newMark = null;
      this.prepareMarkTypes();
    }
  }, {
    key: "changePeriod",
    value: function changePeriod() {
      this.newMark = null;
      this.prepareMarkTypes();
    }
  }, {
    key: "changeNewMarkType",
    value: function changeNewMarkType() {
      if (!this.newMarkType) {
        this.newMark = null;
        return;
      }
      if (this.newMarkType.id == null) {
        this.newMark = null;
        return;
      }
      if (this.newMarkType.id <= 0) {
        this.newMark = +this.newMarkType.id;
        return;
      }
      if (this.gradingSys == GradingSys.Pass && (this.newMarkType.id == this.minMark || this.newMarkType.id == this.maxMark)) {
        this.newMark = +this.newMarkType.id;
        return;
      }
      if (this.gradingSys != GradingSys.Pass && this.newMarkType.id == 1) {
        this.newMark = null;
      }
    }
  }, {
    key: "save",
    value: function save(deletion) {
      var _this9 = this;
      var _a, _b;
      var newMark = null;
      if (!deletion) {
        if (!this.newMark) {
          this.$dialogs.message("Новая оценка не может быть пустой!");
          return;
        }
        if (!this.reason || this.reason.trim().length < 10) {
          this.$dialogs.message("Основание правки обязательно для заполнения. Минимальная длина 10 символов.");
          return;
        }
        newMark = +this.newMark;
      }
      var processing = this.$longWork.show();
      var request = {
        studentId: this.mark.student.id,
        sgId: this.mark.subjectGroup.id,
        mark: newMark,
        reason: this.reason,
        schoolyearId: this.schoolyearId,
        schoolId: this.schoolId,
        termId: (_a = this.mark.term) === null || _a === void 0 ? void 0 : _a.id,
        periodTypeId: (_b = this.mark.periodType) === null || _b === void 0 ? void 0 : _b.id
      };
      this.journalCorrectionRepository.editMark(request).then(function () {
        processing.close();
        _this9.$alerts.success(deletion ? "Оценка успешно удалена" : _this9.regimeAddNew ? "Новая оценка успешно добавлена" : "Оценка успешно изменена");
        _this9.$uibModalInstance.close();
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this10 = this;
      if (!this.reason || this.reason.trim().length < 10) {
        this.$alerts.error("Основание правки обязательно для заполнения. Минимальная длина 10 символов.");
        return;
      }
      this.$dialogs.confirm("Вы действительно хотите удалить выбранную оценку?", "ВНИМАНИЕ! Происходит удаление оценки.").then(function () {
        _this10.save(true);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return MarkCorrectionController;
}();
var MarkCorrectionComponent = {
  controller: MarkCorrectionController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/journalCorrection/markCorrection.component.html"
};
var JournalCorrectionRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(JournalCorrectionRepository, _BaseRepository);
  var _super = _createSuper(JournalCorrectionRepository);
  function JournalCorrectionRepository() {
    _classCallCheck(this, JournalCorrectionRepository);
    return _super.apply(this, arguments);
  }
  _createClass(JournalCorrectionRepository, [{
    key: "getMarks",
    value: function getMarks(studentId, yearId) {
      return this.$http.get("/webapi/admin/journalcorrection/marks", {
        params: {
          studentId: studentId,
          schoolyearId: yearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editMark",
    value: function editMark(request) {
      return this.$http.post("/webapi/grade/journal/corrections", request).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUnassignedMarks",
    value: function getUnassignedMarks(studentId, yearId) {
      return this.$http.get("/webapi/admin/journalcorrection/unassigned-marks", {
        params: {
          studentId: studentId,
          schoolyearId: yearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return JournalCorrectionRepository;
}(_baseRepository.BaseRepository);
exports.JournalCorrectionRepository = JournalCorrectionRepository;
var GradingSys;
exports.GradingSys = GradingSys;
(function (GradingSys) {
  GradingSys["Mark"] = "Mark";
  GradingSys["Pass"] = "Pass";
  GradingSys["NotRated"] = "NotRated";
})(GradingSys || (exports.GradingSys = GradingSys = {}));
var JournalCorrectionComponent = {
  controller: JournalCorrectionController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/journalCorrection/journalCorrection.component.html"
};
exports.JournalCorrectionComponent = JournalCorrectionComponent;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JournalAssignmentsRepository = void 0;
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
var JournalAssignmentsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(JournalAssignmentsRepository, _BaseRepository);
  var _super = _createSuper(JournalAssignmentsRepository);
  function JournalAssignmentsRepository() {
    _classCallCheck(this, JournalAssignmentsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(JournalAssignmentsRepository, [{
    key: "loadEditLimit",
    value: function loadEditLimit(yearId, sgId, termId, classId, grade) {
      return this.$http.get("/webapi/grade/editLimit", {
        params: {
          yearId: yearId,
          sgId: sgId,
          termId: termId,
          classId: classId,
          grade: grade
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadAssigns",
    value: function loadAssigns(sgId, termId) {
      return this.$http.get("/webapi/grade/journal/assignments", {
        params: {
          sgId: sgId,
          termId: termId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadYearSettings",
    value: function loadYearSettings(yearId) {
      return this.$http.get("/webapi/school/settings", {
        params: {
          yearId: yearId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(assignmentId) {
      return this.$http["delete"]("/webapi/grade/journal/assignments/".concat(assignmentId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getModuleQa",
    value: function getModuleQa() {
      return this.$http.get("/webapi/settings/ModuleQA").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveWeight",
    value: function saveWeight(assignmentId, weight) {
      return this.$http.post("/webapi/grade/journal/assignments/".concat(assignmentId, "/weight"), weight)["catch"](this.handleError);
    }
  }, {
    key: "saveAssignmentName",
    value: function saveAssignmentName(assignmentId, assignmentName) {
      return this.$http.put("/webapi/grade/journal/assignments", {
        id: assignmentId,
        name: assignmentName
      })["catch"](this.handleError);
    }
  }, {
    key: "saveHomeAssignment",
    value: function saveHomeAssignment(config) {
      return this.$http.post("/webapi/grade/journal/assignments/home", {}, config)["catch"](this.handleError);
    }
  }, {
    key: "saveLesson",
    value: function saveLesson(classMeetingId, lessonId) {
      return this.$http.post("/webapi/grade/journal/classmeetings/".concat(classMeetingId, "/lesson"), lessonId)["catch"](this.handleError);
    }
  }]);
  return JournalAssignmentsRepository;
}(_baseRepository.BaseRepository);
exports.JournalAssignmentsRepository = JournalAssignmentsRepository;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntInputDirective = void 0;
__webpack_require__(64);
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
/* 64 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 65 */
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

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishRepository = void 0;
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
var PublishRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(PublishRepository, _BaseRepository);
  var _super = _createSuper(PublishRepository);
  function PublishRepository() {
    _classCallCheck(this, PublishRepository);
    return _super.apply(this, arguments);
  }
  _createClass(PublishRepository, [{
    key: "publishProgramsQueue",
    value: function publishProgramsQueue() {
      return this.$http.post("/webapi/integration/pfdo/publishprograms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "publishOrganizationsQueue",
    value: function publishOrganizationsQueue(data) {
      return this.$http.post("/webapi/integration/pfdo/publishorganizations", data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "publishCertificatesQueue",
    value: function publishCertificatesQueue(data) {
      return this.$http.post("/webapi/integration/pfdo/publishcertificates", data).then(this.handleResponse, this.handleError);
    }
  }]);
  return PublishRepository;
}(_repository.BaseRepository);
exports.PublishRepository = PublishRepository;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlearnoNavigatorSyncProgramsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InlearnoNavigatorSyncProgramsRegistryController = /*#__PURE__*/function () {
  InlearnoNavigatorSyncProgramsRegistryController.$inject = ["pageContext", "language", "$appLoader", "taskQueueService", "$http"];
  /*@ngInject*/
  function InlearnoNavigatorSyncProgramsRegistryController(pageContext, language, $appLoader, taskQueueService, $http) {
    var _this = this;
    _classCallCheck(this, InlearnoNavigatorSyncProgramsRegistryController);
    this.$appLoader = $appLoader;
    this.taskQueueService = taskQueueService;
    this.$http = $http;
    pageContext.title = "Реестр синхронизации сведений о программах доп. образования Навигатор-47";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    this.registryInfo = {
      url: "/webapi/integration/inlearno/registry",
      filtersUrl: "/webapi/integration/inlearno/registry/filter",
      fieldDecorators: {
        "startDate": new _registry.DateTimeDecorator(),
        "endDate": new _registry.DateTimeDecorator(),
        "timestamp": new _registry.DateDecorator()
      },
      buttons: [{
        title: "Загрузить все программы",
        action: function action() {
          return _this.sync(null, true);
        }
      }],
      linkButtons: [],
      "export": false
    };
  }
  _createClass(InlearnoNavigatorSyncProgramsRegistryController, [{
    key: "sync",
    value: function sync(organization, isForAllOrgs) {
      var _this2 = this;
      var getTask = function getTask() {
        return _this2.$http.post("/webapi/integration/inlearno/sync-programs/queue", {
          Organization: organization,
          IsForAllOrgs: isForAllOrgs
        }).then(function (response) {
          return response.data;
        });
      };
      var settings = {
        getTaskFunc: getTask,
        startTaskImmediately: false,
        logoutputMode: true,
        header: "Синхронизация программ",
        //initialStatus: "Ожидание ответа Навигатор-47",
        closeOnEnd: false
      };
      this.taskQueueService.execute(settings).then(function () {
        _this2.controller.load();
      });
    }
  }]);
  return InlearnoNavigatorSyncProgramsRegistryController;
}();
var InlearnoNavigatorSyncProgramsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: InlearnoNavigatorSyncProgramsRegistryController,
  controllerAs: "$ctrl"
};
exports.InlearnoNavigatorSyncProgramsRegistryComponent = InlearnoNavigatorSyncProgramsRegistryComponent;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ClonesController = /*#__PURE__*/_createClass( /*@ngInject*/["$appLoader", "pageContext", "language", function ClonesController($appLoader, pageContext, language) {
  _classCallCheck(this, ClonesController);
  this.$appLoader = $appLoader;
  this.language = language;
  pageContext.parent = {
    title: language.Generic.MenuFolders.kDiagnos,
    href: "/"
  };
  pageContext.back = {
    history: true
  };
  pageContext.title = "Дубли";
  this.settings = {
    canBatchArchive: true,
    withoutPoolNa: true
  };
  this.$appLoader.hide();
}]);
var ClonesComponent = {
  controller: ClonesController,
  controllerAs: "$ctrl",
  template: "<clones-registry settings='$ctrl.settings'></clones-registry>"
};
exports.ClonesComponent = ClonesComponent;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesRepository = void 0;
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
var ClonesRepository = /*#__PURE__*/function (_BaseRepository) {
  ClonesRepository.$inject = ["$http", "$dialogs", "$alerts", "downloadService"];
  _inherits(ClonesRepository, _BaseRepository);
  var _super = _createSuper(ClonesRepository);
  /*@ngInject*/
  function ClonesRepository($http, $dialogs, $alerts, downloadService) {
    var _this;
    _classCallCheck(this, ClonesRepository);
    _this = _super.call(this, $http, $dialogs, $alerts);
    _this.downloadService = downloadService;
    return _this;
  }
  _createClass(ClonesRepository, [{
    key: "getUserCloneGroups",
    value: function getUserCloneGroups(query) {
      return this.$http.post("/webapi/admin/userclones/groups", query).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "exportClones",
    value: function exportClones(query) {
      return this.downloadService.downloadFile("/webapi/admin/userclones/export", {
        data: query,
        method: "post"
      });
    }
  }, {
    key: "getUserClonesInfo",
    value: function getUserClonesInfo(query) {
      return this.$http.post("/webapi/admin/userclones/details", query).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentMovement",
    value: function getStudentMovement(studentId) {
      return this.$http.get("/webapi/admin/userclones/movement", {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editPoolStudent",
    value: function editPoolStudent(poolStudent) {
      return this.$http.post("/webapi/movement/pool/student", poolStudent).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "archiveClones",
    value: function archiveClones(command) {
      return this.$http.post("/webapi/admin/userclones/archive", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "mergeClones",
    value: function mergeClones(command) {
      return this.$http.post("/webapi/admin/userclones/merge", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIdentityDocuments",
    value: function getIdentityDocuments(userId) {
      return this.$http.get("/webapi/admin/userclones/identity-documents", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEducCertificates",
    value: function getEducCertificates(userId) {
      return this.$http.get("/webapi/admin/userclones/educ-certificates", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParentStudents",
    value: function getParentStudents(userId) {
      return this.$http.get("/webapi/admin/userclones/students", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParameterValues",
    value: function getParameterValues(userId) {
      return this.$http.get("/webapi/admin/userclones/userparameters-values", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParameters",
    value: function getParameters(roleType, fullList) {
      return this.$http.get('/webapi/userinfo/parameters/', {
        params: {
          roleType: roleType,
          fullList: fullList
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAuthInfo",
    value: function getAuthInfo(userId) {
      return this.$http.get("/webapi/admin/userclones/auth-info", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddressInfo",
    value: function getAddressInfo(userId) {
      return this.$http.get("/webapi/admin/userclones/addresses", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return ClonesRepository;
}(_repository.BaseRepository);
exports.ClonesRepository = ClonesRepository;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesRegistryComponent = void 0;
var _common = __webpack_require__(71);
var _common2 = __webpack_require__(72);
var _identityDocuments = __webpack_require__(73);
var _archiveClones = __webpack_require__(74);
var _clonesMerge = __webpack_require__(76);
var _clones2 = __webpack_require__(75);
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
var collapsed = "icon-expand";
var expanded = "icon-collapse";
var asDeferred = function asDeferred(p) {
  var d = $.Deferred();
  p.then(function (val) {
    d.resolve(val);
  }, function (err) {
    d.reject(err);
  });
  return d.promise();
};
var ClonesRegistryController = /*#__PURE__*/function () {
  ClonesRegistryController.$inject = ["$scope", "$dialogs", "$alerts", "language", "$longWork", "dateUtils", "clonesRepository", "$uibModal"];
  /*@ngInject*/
  function ClonesRegistryController($scope, $dialogs, $alerts, language, $longWork, dateUtils, clonesRepository, $uibModal) {
    _classCallCheck(this, ClonesRegistryController);
    this.$scope = $scope;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.language = language;
    this.$longWork = $longWork;
    this.dateUtils = dateUtils;
    this.clonesRepository = clonesRepository;
    this.$uibModal = $uibModal;
    this.role = _common.RoleGroup.Students;
    this.loaded = false;
    this.dataEmpty = false;
    this.getDetailsEmitter = new _common2.EventEmitter();
    this.searchTypes = [{
      query: {
        cloneType: _clones2.UserCloneType.LastName_FirtName,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.LastName_FirtName_Birtdate,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия имя и дата рождения"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.LastName_FirtName_MiddleName,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя, отчество"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.LastName_FirtName_Birtdate,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя, отчество, дата рождения"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.LastName_FirtName_MiddleName_Snils,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя, отчество, СНИЛС"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.IdentityDocument,
        identityDocumentType: _identityDocuments.IdentityDocumentType.BirthCertificate,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя, серия и номер свидетельства о рождении"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.IdentityDocument,
        identityDocumentType: _identityDocuments.IdentityDocumentType.RfPassport,
        pageSize: 0,
        startIndex: 0
      },
      name: "Фамилия, имя, серия и номер паспорта"
    }, {
      query: {
        cloneType: _clones2.UserCloneType.Snils,
        pageSize: 0,
        startIndex: 0
      },
      name: "СНИЛС"
    }];
    this.searchType = this.searchTypes.find(function (q) {
      return q.query.cloneType == _clones2.UserCloneType.LastName_FirtName_Birtdate;
    }).query;
    this.roles = [{
      id: _common.RoleGroup.Students,
      name: "Учащиеся"
    }, {
      id: _common.RoleGroup.Parents,
      name: "Родители"
    }, {
      id: _common.RoleGroup.Staffs,
      name: "Сотрудники"
    }];
  }
  _createClass(ClonesRegistryController, [{
    key: "$onInit",
    value: function $onInit() {
      this.settings = this.settings || {};
      this.jtableContainer = $('#PersonTableContainer');
      this.init();
    }
  }, {
    key: "search",
    value: function search() {
      this.jtableContainer.jtable('destroy');
      this.init();
      this.jtableContainer.jtable('load');
    }
  }, {
    key: "archive",
    value: function archive() {
      this.$uibModal.open({
        controller: _archiveClones.ArchiveClonesComponent.controller,
        controllerAs: _archiveClones.ArchiveClonesComponent.controllerAs,
        templateUrl: _archiveClones.ArchiveClonesComponent.templateUrl
      });
    }
  }, {
    key: "export",
    value: function _export() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$dialogs.confirm(this.language.Generic.Common.kExportIntoExcel);
            case 2:
              query = angular.copy(this.searchType);
              query.role = this.role;
              query.schoolId = this.settings.schoolId;
              query.emId = this.settings.emId;
              query.withoutPoolNa = this.settings.withoutPoolNa;
              query.withoutMainOrganization = this.settings.withoutMainOrganization;
              query.outOfSystem = this.settings.outOfSystem;
              this.$longWork.execute(this.clonesRepository.exportClones(query));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.getDetailsEmitter.off();
      var fields = {
        clones: this.getDetailsColumn()
      };
      this.initFields(fields);
      this.jtableContainer.css('min-width', '800px');
      var options = {
        //title: '',
        paging: true,
        pageSize: 10,
        columnSelectable: false,
        //openChildAsAccordion: true,
        actions: {
          listAction: function listAction(postData, jtParams) {
            var query = angular.copy(_this.searchType);
            query.role = _this.role;
            query.schoolId = _this.settings.schoolId;
            query.emId = _this.settings.emId;
            query.withoutPoolNa = _this.settings.withoutPoolNa;
            query.withoutMainOrganization = _this.settings.withoutMainOrganization;
            query.outOfSystem = _this.settings.outOfSystem;
            query.activeEnrollmentInSchool = _this.settings.activeEnrollmentInSchool;
            query.lastName = _this.lastname;
            query.pageSize = jtParams.jtPageSize;
            query.startIndex = jtParams.jtStartIndex;
            var promise = _this.clonesRepository.getUserCloneGroups(query).then(function (data) {
              data.data.forEach(function (g) {
                if (g.birthDate) {
                  g.birthDate = _this.dateUtils.date2str(_this.dateUtils.asUTCDate(g.birthDate));
                }
              });
              return new JTableListAdapter(data);
            });
            return asDeferred(promise);
          }
        },
        fields: fields,
        recordsLoaded: function recordsLoaded(event, data) {
          _this.loaded = true;
          _this.dataEmpty = !(data.records.length > 0);
          _this.$scope.$applyAsync();
        }
      };
      this.jtableContainer.jtable(options);
    }
  }, {
    key: "initFields",
    value: function initFields(fields) {
      var ctrl = this;
      //ctrl.getDetailsEmitter.off();
      var displayToggleAnchor = function displayToggleAnchor(row, title) {
        var anchor = $('<a href="javascript:void(0)">' + title + '<a/>');
        anchor.on("click", function () {
          var tableRow = anchor.closest("tr");
          var eventData = {
            row: row,
            tableRow: tableRow
          };
          ctrl.getDetailsEmitter.emit(eventData);
        });
        return anchor;
      };
      switch (this.searchType.cloneType) {
        case _clones2.UserCloneType.LastName_FirtName:
          fields["lastName"] = {
            title: "Фамилия",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.lastName);
            }
          };
          fields["firstName"] = {
            title: "Имя"
          };
          break;
        case _clones2.UserCloneType.LastName_FirtName_Birtdate:
          fields["lastName"] = {
            title: "Фамилия",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.lastName);
            }
          };
          fields["firstName"] = {
            title: "Имя"
          };
          fields["birthDate"] = {
            title: "Дата рождения"
          };
          break;
        case _clones2.UserCloneType.LastName_FirtName_MiddleName:
          fields["lastName"] = {
            title: "Фамилия",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.lastName);
            }
          };
          fields["firstName"] = {
            title: "Имя"
          };
          fields["middleName"] = {
            title: "Отчество"
          };
          break;
        case _clones2.UserCloneType.IdentityDocument:
          fields["docSeries"] = {
            title: "Серия",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.docSeries);
            }
          };
          fields["docNumber"] = {
            title: "Номер",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.docNumber);
            }
          };
          break;
        case _clones2.UserCloneType.Snils:
          fields["snils"] = {
            title: "СНИЛС",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.snils);
            }
          };
          break;
        case _clones2.UserCloneType.LastName_FirtName_MiddleName_Snils:
          fields["lastName"] = {
            title: "Фамилия",
            display: function display(row) {
              return displayToggleAnchor(row, row.record.lastName);
            }
          };
          fields["firstName"] = {
            title: "Имя"
          };
          fields["middleName"] = {
            title: "Отчество"
          };
          fields["snils"] = {
            title: "СНИЛС"
          };
          break;
      }
      fields["count"] = {
        width: '16%',
        title: 'Кол-во&nbsp;дублей'
      };
    }
  }, {
    key: "getDetailsColumn",
    value: function getDetailsColumn() {
      var _this2 = this;
      var requestClones = function requestClones(group) {
        var prepareDate = function prepareDate(date) {
          if (date == null || !date) {
            return null;
          }
          return _this2.dateUtils.str2date(date);
        };
        var query = {
          cloneType: _this2.searchType.cloneType,
          identityDocumentType: _this2.searchType.identityDocumentType,
          withoutPoolNa: _this2.settings.withoutPoolNa,
          role: _this2.role,
          snils: group.snils,
          lastName: group.lastName,
          firstName: group.firstName,
          middleName: group.middleName,
          birthDate: prepareDate(group.birthDate),
          docSeries: group.docSeries,
          docNumber: group.docNumber,
          schoolId: _this2.settings.schoolId,
          emId: _this2.settings.emId
        };
        var promise = _this2.clonesRepository.getUserClonesInfo(query).then(function (data) {
          $("input[name=user-select]:checked").prop("checked", false);
          data.forEach(function (d) {
            if (d.birthDate) {
              d.birthDate = _this2.dateUtils.date2str(_this2.dateUtils.asUTCDate(d.birthDate));
            }
            d["activeCurrentOrg"] = d.organizations.some(function (o) {
              return o.id == _this2.settings.schoolId && o.isActive;
            });
            d["hasCurrentOrg"] = d.organizations.some(function (o) {
              return o.id == _this2.settings.schoolId;
            });
            d["canArchive"] = d.poolStatus == _clones2.PoolStudentAvailabilityType.Free && !d.organizations.some(function (o) {
              return o.isActive;
            }) && (d.organizations.some(function (o) {
              return o.id == _this2.settings.schoolId;
            }) || _this2.settings.emId > 0);
            d["canRestore"] = d.poolStatus == _clones2.PoolStudentAvailabilityType.Archive && (d.organizations.some(function (o) {
              return o.id == _this2.settings.schoolId;
            }) || _this2.settings.emId > 0);
            d["organizationsInfo"] = d.organizations.map(function (o) {
              return (o.isActive ? "+ " : "~ ") + o.name;
            }).join("<br />");
            d["documentsInfo"] = d.documents.map(function (o) {
              return [o.documentTypeName, o.series, o.number, o.issuer, o.issueDate == null ? null : _this2.dateUtils.date2str(_this2.dateUtils.asUTCDate(o.issueDate))].filter(function (x) {
                return x;
              }).join(" ");
            }).join("<br />");
          });
          return new JTableListAdapter(data);
        });
        return promise;
      };
      var movementSubTable = this.getMovementInfoColumn();
      var subTableCtrl = new _common2.BehaviorSubject();
      var mergeUsersHandler = function mergeUsersHandler(container, clonesDetails) {
        var students = $("input[name=user-select]:checked", container).toArray().map(function (x) {
          return parseInt(x.value);
        });
        var _clones = clonesDetails.filter(function (x) {
          return students.indexOf(x.userId) != -1;
        });
        if (_clones.length < 2) {
          _this2.$dialogs.message("Необходимо выбрать не менее 2 учащихся");
          return;
        }
        var dialog = _this2.$uibModal.open({
          controller: _clonesMerge.ClonesMergeComponent.controller,
          controllerAs: _clonesMerge.ClonesMergeComponent.controllerAs,
          templateUrl: _clonesMerge.ClonesMergeComponent.templateUrl,
          size: "lg",
          backdrop: "static",
          resolve: {
            role: function role() {
              return _this2.role;
            },
            clones: function clones() {
              return _clones;
            }
          }
        });
        dialog.result.then(function () {
          subTableCtrl.getValue().jtable("reload");
        });
      };
      var mergeToolbarItem = {
        text: 'Объединить дублирующие записи',
        click: function click() {}
      };
      var clonesDetailsTable = {
        actions: {
          listAction: function listAction(cloneGroup) {
            return asDeferred(requestClones(cloneGroup));
          }
        },
        selectingCheckboxes: true,
        toolbar: {
          items: []
        },
        fields: {
          movement: movementSubTable,
          selection: {
            title: '',
            width: '1%',
            display: function display(data) {
              return '<input type="checkbox" id="selection-' + data.record.userId + '" name="user-select" value="' + data.record.userId + '" />';
            }
          },
          userId: {
            key: true,
            title: 'id',
            display: function display(data) {
              if (data.record.activeCurrentOrg) {
                return "<span class='active-current-org'>" + data.record.userId + "</span>";
              } else if (data.record.hasCurrentOrg) {
                return "<span class='has-current-org'>" + data.record.userId + "</span>";
              }
              return data.record.userId;
            },
            width: '1%'
          },
          fio: {
            title: 'ФИО',
            display: function display(data) {
              return '<label class="fio" for="selection-' + data.record.userId + '">' + data.record.fio + '<label/>';
            }
          },
          birthDate: {
            title: 'Дата рождения'
          },
          documentsInfo: {
            title: 'Документы'
          },
          snils: {
            title: 'СНИЛС'
          },
          address: {
            title: 'Адрес'
          },
          relaties: {
            title: this.role === _common.RoleGroup.Students ? 'Родители' : 'Дети',
            display: function display(data) {
              var relatives = data.record.relatives;
              if (!relatives || !relatives.length) {
                return null;
              }
              try {
                return relatives.reduce(function (res, x) {
                  return res + [x.lastName, x.firstName, x.middleName, _this2.dateUtils.date2str(_this2.dateUtils.asUTCDate(x.birthDate))].join(" ") + "<br />";
                }, "");
              } catch (e) {
                return e;
              }
            }
          },
          organizationsInfo: {
            title: 'ОО'
          },
          status: {
            title: 'Статус',
            display: function display(data) {
              if (data.record.poolStatus == _clones2.PoolStudentAvailabilityType.Free) {
                return "выпускник/выбывший";
              }
              if (data.record.poolStatus == _clones2.PoolStudentAvailabilityType.Enrolled) {
                return "зачислен";
              }
              if (data.record.poolStatus == _clones2.PoolStudentAvailabilityType.Archive) {
                return "архив";
              }
            }
          },
          commands: {
            title: "Действия",
            listClass: "text-center",
            display: function display(data) {
              if (data.record.canArchive) {
                return $('<button/>', {
                  text: 'В архив',
                  click: function click() {
                    _this2.archiveStudent(data.record, subTableCtrl);
                  }
                });
              }
              if (data.record.canRestore) {
                return $('<button/>', {
                  text: 'В список свободных учеников',
                  click: function click() {
                    _this2.returnToPool(data.record, subTableCtrl);
                  }
                });
              }
              return "";
            }
          }
        },
        recordsLoaded: function recordsLoaded(event, data) {
          $("span.has-current-org").closest("tr").addClass("has-current-org");
          $("span.active-current-org").closest("tr").addClass("active-current-org");
          $('.jtable-toolbar-item-text', event.target).on("click", function () {
            mergeUsersHandler(event.target, data.records);
          });
        }
      };
      if (this.role != _common.RoleGroup.Students) {
        delete clonesDetailsTable.fields.movement;
        if (this.role != _common.RoleGroup.Parents) {
          delete clonesDetailsTable.fields.fio.display;
          delete clonesDetailsTable.fields.selection;
          delete clonesDetailsTable.fields.relaties;
        }
        delete clonesDetailsTable.fields.status;
        delete clonesDetailsTable.fields.commands;
      }
      if (this.role == _common.RoleGroup.Students || this.role == _common.RoleGroup.Parents) {
        if (this.settings.schoolId) {
          delete clonesDetailsTable.fields.selection;
          delete clonesDetailsTable.fields.fio.display;
        } else {
          clonesDetailsTable.toolbar.items.push(mergeToolbarItem);
        }
      }
      var clonesSubTitle = function clonesSubTitle(row) {
        var groupNameParts = [row.record.lastName, row.record.firstName, row.record.middleName, row.record.docSeries, row.record.docNumber].filter(function (x) {
          return x && x.length;
        });
        var groupName = groupNameParts.join(" ");
        return ' Дубли: ' + groupName;
      };
      var cloneDetailsField = new GetSubTableColumn(this.jtableContainer).execute(clonesSubTitle, 'Просмотр дублей', clonesDetailsTable, subTableCtrl, this.getDetailsEmitter);
      return cloneDetailsField;
    }
  }, {
    key: "archiveStudent",
    value: function archiveStudent(userclone, subtableCtrlSubject) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var archiveQuery;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$dialogs.confirm("Вы действительно желаете перевести данного ученика в архив?");
            case 2:
              archiveQuery = {
                studentId: userclone.userId,
                poolCategory: null,
                availabilityInfo: {
                  type: _clones2.PoolStudentAvailabilityType.Archive,
                  inaccessibilityReason: {
                    id: _clones2.NotAvailableReasons.DuplicateSgo,
                    key: null,
                    name: null
                  }
                }
              };
              _context2.next = 5;
              return this.$longWork.execute(this.clonesRepository.editPoolStudent(archiveQuery));
            case 5:
              subtableCtrlSubject.getValue().jtable("reload");
              this.$alerts.success("Ученик успешно переведен в архив");
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "returnToPool",
    value: function returnToPool(userclone, subtableCtrlSubject) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var query;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.$dialogs.confirm("Вы действительно желаете перевести данного ученика в список выпускников и выбывших?");
            case 2:
              query = {
                studentId: userclone.userId,
                poolCategory: null,
                availabilityInfo: {
                  type: _clones2.PoolStudentAvailabilityType.Free,
                  inaccessibilityReason: null
                }
              };
              _context3.next = 5;
              return this.$longWork.execute(this.clonesRepository.editPoolStudent(query));
            case 5:
              subtableCtrlSubject.getValue().jtable("reload");
              this.$alerts.success("Ученик успешно переведен в архив");
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getMovementInfoColumn",
    value: function getMovementInfoColumn() {
      var _this3 = this;
      var requestInfo = function requestInfo(clone) {
        var promise = _this3.clonesRepository.getStudentMovement(clone.userId).then(function (data) {
          data.forEach(function (d) {
            if (d.docDate) {
              d.docDate = _this3.dateUtils.date2str(_this3.dateUtils.asUTCDate(d.docDate));
            }
          });
          return new JTableListAdapter(data);
        });
        return promise;
      };
      var movementInfoTable = {
        //title: title,
        actions: {
          listAction: function listAction(clone) {
            return asDeferred(requestInfo(clone));
          }
        },
        fields: {
          num: {
            title: '№',
            width: '1%'
          },
          docNumber: {
            title: 'приказ'
          },
          docDate: {
            title: 'от',
            width: '1%'
          },
          classFrom: {
            title: 'из',
            display: function display(row) {
              var _a;
              return (_a = row.record.classFrom) === null || _a === void 0 ? void 0 : _a.name;
            }
          },
          classTo: {
            title: 'в',
            display: function display(row) {
              var _a;
              return (_a = row.record.classTo) === null || _a === void 0 ? void 0 : _a.name;
            }
          },
          eoName: {
            title: 'ОО'
          },
          programName: {
            title: 'программа'
          }
        }
      };
      var fioTitle = function fioTitle(row) {
        return row.record.fio + " (" + row.record.userId + ")";
      };
      var movementField = new GetSubTableColumn(this.jtableContainer).execute(fioTitle, 'Просмотр информации', movementInfoTable);
      return movementField;
    }
  }]);
  return ClonesRegistryController;
}();
var GetSubTableColumn = /*#__PURE__*/function () {
  function GetSubTableColumn(jtableContainer) {
    _classCallCheck(this, GetSubTableColumn);
    this.jtableContainer = jtableContainer;
  }
  _createClass(GetSubTableColumn, [{
    key: "execute",
    value: function execute(getTitle, hint, options, subtableCtrlSubject, externalEmitter) {
      var ctrl = this;
      var toggle = function toggle(img, data) {
        if (img.hasClass(expanded)) {
          ctrl.clollapseF(img);
          return;
        }
        ctrl.expandF(img, data.row, getTitle(data.row), options, subtableCtrlSubject);
      };
      externalEmitter === null || externalEmitter === void 0 ? void 0 : externalEmitter.on(function (data) {
        var img = data.tableRow.find("span.details-img");
        toggle(img, data);
      });
      return {
        width: '1%',
        sorting: false,
        edit: false,
        create: false,
        display: function display(row) {
          if (!row.record.userid || row.record.studentid) {
            var $img2 = $('<span class="details-img" title="' + hint + '" />');
            $img2.toggleClass(collapsed);
            $img2.on("click", function () {
              var eventData = {
                row: row,
                tableRow: null
              };
              toggle($img2, eventData);
            });
            //Return image to show on the person row
            return $img2;
          }
        }
      };
    }
  }, {
    key: "clollapseF",
    value: function clollapseF(img) {
      img = $(img);
      img.toggleClass(expanded);
      img.toggleClass(collapsed);
      this.jtableContainer.jtable('closeChildTable', img.closest('tr'));
    }
  }, {
    key: "expandF",
    value: function expandF(img, row, title, settings, subtableCtrlSubject) {
      img = $(img);
      settings.title = title;
      var readyEvent = function readyEvent(data) {
        subtableCtrlSubject === null || subtableCtrlSubject === void 0 ? void 0 : subtableCtrlSubject.next(data.childTable);
        data.childTable.jtable('load', row.record);
      };
      this.jtableContainer.jtable('openChildTable', img.closest('tr'), settings, readyEvent);
      img.toggleClass(expanded);
      img.toggleClass(collapsed);
    }
  }]);
  return GetSubTableColumn;
}();
var JTableListAdapter = /*#__PURE__*/_createClass(function JTableListAdapter(data) {
  _classCallCheck(this, JTableListAdapter);
  this.Result = "OK";
  var pagedResponse = data;
  if (pagedResponse === null || pagedResponse === void 0 ? void 0 : pagedResponse.data) {
    this.Records = pagedResponse.data;
    this.TotalRecordCount = pagedResponse.totalRows;
  } else {
    this.Records = data;
    this.TotalRecordCount = this.Records.length;
  }
});
var ClonesRegistryComponent = {
  controller: ClonesRegistryController,
  selector: "clonesRegistry",
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/clones/clones.registry.component.html",
  bindings: {
    settings: "<?"
  }
};
exports.ClonesRegistryComponent = ClonesRegistryComponent;

/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentityDocumentType = exports.IdentityDocumentFields = void 0;
var IdentityDocumentType;
exports.IdentityDocumentType = IdentityDocumentType;
(function (IdentityDocumentType) {
  IdentityDocumentType[IdentityDocumentType["Other"] = 4] = "Other";
  IdentityDocumentType[IdentityDocumentType["BirthCertificate"] = 11] = "BirthCertificate";
  IdentityDocumentType[IdentityDocumentType["RfPassport"] = 12] = "RfPassport";
  IdentityDocumentType[IdentityDocumentType["InternationalRfPassport"] = 13] = "InternationalRfPassport";
  IdentityDocumentType[IdentityDocumentType["OfficerId"] = 14] = "OfficerId";
  IdentityDocumentType[IdentityDocumentType["MilitaryId"] = 15] = "MilitaryId";
  IdentityDocumentType[IdentityDocumentType["TemporaryMilitaryId"] = 16] = "TemporaryMilitaryId";
  IdentityDocumentType[IdentityDocumentType["TemporaryId"] = 17] = "TemporaryId";
  IdentityDocumentType[IdentityDocumentType["ForeignPassport"] = 21] = "ForeignPassport";
  IdentityDocumentType[IdentityDocumentType["IdWithoutCitizenship"] = 22] = "IdWithoutCitizenship";
  IdentityDocumentType[IdentityDocumentType["IdCertainCategories"] = 23] = "IdCertainCategories";
  IdentityDocumentType[IdentityDocumentType["RefugeeId"] = 24] = "RefugeeId";
  IdentityDocumentType[IdentityDocumentType["TemporaryRefugeeId"] = 25] = "TemporaryRefugeeId";
  IdentityDocumentType[IdentityDocumentType["TemporaryAsylum"] = 26] = "TemporaryAsylum";
  IdentityDocumentType[IdentityDocumentType["ResidencePermit"] = 27] = "ResidencePermit";
  IdentityDocumentType[IdentityDocumentType["TemporaryResidencePermit"] = 28] = "TemporaryResidencePermit";
  IdentityDocumentType[IdentityDocumentType["CertificateOfRefugeePetition"] = 29] = "CertificateOfRefugeePetition";
  IdentityDocumentType[IdentityDocumentType["CertificateOfTemporaryAsylum"] = 30] = "CertificateOfTemporaryAsylum";
  IdentityDocumentType[IdentityDocumentType["ForeignBirthCertificate"] = 31] = "ForeignBirthCertificate";
})(IdentityDocumentType || (exports.IdentityDocumentType = IdentityDocumentType = {}));
var IdentityDocumentFields;
exports.IdentityDocumentFields = IdentityDocumentFields;
(function (IdentityDocumentFields) {
  IdentityDocumentFields[IdentityDocumentFields["Series"] = 1] = "Series";
  IdentityDocumentFields[IdentityDocumentFields["Number"] = 2] = "Number";
  IdentityDocumentFields[IdentityDocumentFields["ActNumber"] = 4] = "ActNumber";
  IdentityDocumentFields[IdentityDocumentFields["Issuer"] = 8] = "Issuer";
  IdentityDocumentFields[IdentityDocumentFields["IssuerCode"] = 16] = "IssuerCode";
  IdentityDocumentFields[IdentityDocumentFields["IssueDate"] = 32] = "IssueDate";
  IdentityDocumentFields[IdentityDocumentFields["ExpireDate"] = 64] = "ExpireDate";
  IdentityDocumentFields[IdentityDocumentFields["OtherDocName"] = 128] = "OtherDocName";
})(IdentityDocumentFields || (exports.IdentityDocumentFields = IdentityDocumentFields = {}));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArchiveClonesComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _nsModal = __webpack_require__(6);
var _clones = __webpack_require__(75);
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
var ArchiveClonesController = /*#__PURE__*/function (_NetCityModalControll) {
  ArchiveClonesController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "$longWork", "language", "clonesRepository", "referencesRepository"];
  _inherits(ArchiveClonesController, _NetCityModalControll);
  var _super = _createSuper(ArchiveClonesController);
  /*@ngInject*/
  function ArchiveClonesController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, $longWork, language, clonesRepository, referencesRepository) {
    var _this;
    _classCallCheck(this, ArchiveClonesController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.language = language;
    _this.clonesRepository = clonesRepository;
    _this.category = true;
    _this.buttons = [];
    referencesRepository.getYears().then(function (years) {
      _this.years = years;
      _this.years.forEach(function (x) {
        return x.name = "до " + x.name;
      });
      _this.years.unshift({
        id: null,
        name: "Все"
      });
    });
    _this.header = "Пакетная архивация";
    _this.categories = [{
      id: true,
      name: "Не зачисленные"
    }, {
      id: false,
      name: "Выпускники и выбывшие"
    }];
    var continueButton = {
      title: language.Generic.Buttons.kContinue,
      "class": [_nsModal.ButtonClass.primary],
      action: function action() {
        return _this["continue"]();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(continueButton);
    _this.buttons.push(cancelButton);
    return _this;
  }
  _createClass(ArchiveClonesController, [{
    key: "continue",
    value: function _continue() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var command, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              command = {
                outOfSystem: this.category,
                poolYearLimit: this.year,
                reason: _clones.NotAvailableReasons.DuplicateSgo
              };
              _context.next = 3;
              return this.$dialogs.confirm("Вы желаете продолжить?");
            case 3:
              _context.next = 5;
              return this.$longWork.execute(this.clonesRepository.archiveClones(command));
            case 5:
              result = _context.sent;
              if (result.errors > 0) {
                this.$alerts.error("Ошибок архивации " + result.errors);
              }
              this.$alerts.success("Успешно архивировано " + result.archieved + " ученика");
            case 8:
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
  return ArchiveClonesController;
}(_netcityModalCtrl.NetCityModalController);
var ArchiveClonesComponent = {
  controller: ArchiveClonesController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/clones/archive.clones.component.html"
};
exports.ArchiveClonesComponent = ArchiveClonesComponent;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCloneType = exports.ResolveRelativeOption = exports.PoolStudentAvailabilityType = exports.OutsideType = exports.NotAvailableReasons = void 0;
var UserCloneType;
exports.UserCloneType = UserCloneType;
(function (UserCloneType) {
  UserCloneType["LastName_FirtName"] = "FI";
  UserCloneType["LastName_FirtName_MiddleName"] = "FIO";
  UserCloneType["LastName_FirtName_Birtdate"] = "FI_B";
  UserCloneType["IdentityDocument"] = "DOC";
  UserCloneType["Snils"] = "SNILS";
  UserCloneType["LastName_FirtName_MiddleName_Snils"] = "FIO_SNILS";
})(UserCloneType || (exports.UserCloneType = UserCloneType = {}));
var ResolveRelativeOption;
exports.ResolveRelativeOption = ResolveRelativeOption;
(function (ResolveRelativeOption) {
  ResolveRelativeOption["MainUser"] = "MainUser";
  ResolveRelativeOption["MergeUser"] = "MergeUser";
  ResolveRelativeOption["SkipUser"] = "SkipUser";
})(ResolveRelativeOption || (exports.ResolveRelativeOption = ResolveRelativeOption = {}));
var OutsideType;
exports.OutsideType = OutsideType;
(function (OutsideType) {
  OutsideType["InsideCity"] = "InsideCity";
  OutsideType["OutsideCity"] = "OutsideCity";
  OutsideType["OutsideProvince"] = "OutsideProvince";
  OutsideType["OutsideState"] = "OutsideState";
  OutsideType["OutsideCountry"] = "OutsideCountry";
  OutsideType["OutsideCountryNear"] = "OutsideCountryNear";
  OutsideType["OutsideCountryForeign"] = "OutsideCountryForeign";
})(OutsideType || (exports.OutsideType = OutsideType = {}));
var PoolStudentAvailabilityType;
exports.PoolStudentAvailabilityType = PoolStudentAvailabilityType;
(function (PoolStudentAvailabilityType) {
  PoolStudentAvailabilityType["Enrolled"] = "Enrolled";
  PoolStudentAvailabilityType["Free"] = "Free";
  PoolStudentAvailabilityType["Archive"] = "Archive";
})(PoolStudentAvailabilityType || (exports.PoolStudentAvailabilityType = PoolStudentAvailabilityType = {}));
var NotAvailableReasons;
exports.NotAvailableReasons = NotAvailableReasons;
(function (NotAvailableReasons) {
  NotAvailableReasons[NotAvailableReasons["NoInfo"] = -1] = "NoInfo";
  NotAvailableReasons[NotAvailableReasons["Worked"] = 1] = "Worked";
  NotAvailableReasons[NotAvailableReasons["Learned"] = 2] = "Learned";
  NotAvailableReasons[NotAvailableReasons["Leaved"] = 3] = "Leaved";
  NotAvailableReasons[NotAvailableReasons["Gone"] = 4] = "Gone";
  NotAvailableReasons[NotAvailableReasons["DuplicateSgo"] = 5] = "DuplicateSgo";
  NotAvailableReasons[NotAvailableReasons["LearnedPOO"] = 6] = "LearnedPOO";
})(NotAvailableReasons || (exports.NotAvailableReasons = NotAvailableReasons = {}));

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesMergeComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _common = __webpack_require__(71);
var _formValidationHelper = __webpack_require__(77);
var _settingsProvider = __webpack_require__(28);
var _nsModal = __webpack_require__(6);
var _userinfo = __webpack_require__(78);
var _clones = __webpack_require__(75);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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
var ResolveUserParameterViewInfo = /*#__PURE__*/_createClass(function ResolveUserParameterViewInfo() {
  _classCallCheck(this, ResolveUserParameterViewInfo);
});
var ResolveCertificateViewInfo = /*#__PURE__*/_createClass(function ResolveCertificateViewInfo() {
  _classCallCheck(this, ResolveCertificateViewInfo);
});
var ResolveRelativeViewInfo = /*#__PURE__*/function () {
  function ResolveRelativeViewInfo(relatives, resolveOptions) {
    _classCallCheck(this, ResolveRelativeViewInfo);
    var relative = relatives[0];
    this.key = _.uniqueId('parent-group');
    this.relatives = relatives;
    this.lastName = relative.lastName;
    this.firstName = relative.firstName;
    this.resolveOptions = resolveOptions;
    if (relatives.length == 1) {
      this.resolveOptions = this.resolveOptions.filter(function (x) {
        return x.id != _clones.ResolveRelativeOption.MergeUser;
      });
      relative.option = _clones.ResolveRelativeOption.MainUser;
    }
    this.data = {
      userParameters: null,
      identityDocuments: null,
      addressInfo: null,
      authInfo: null
    };
  }
  _createClass(ResolveRelativeViewInfo, [{
    key: "invalid",
    get: function get() {
      return this.mustSelectMainRelative() || this.isTeacherNotMain();
    }
  }, {
    key: "isTeacherNotMain",
    value: function isTeacherNotMain(relative) {
      var _this = this;
      if (!relative) {
        return this.relatives.some(function (r) {
          return _this.isTeacherNotMain(r);
        });
      }
      if (!relative.option) {
        return false;
      }
      if (!relative.roleGroups.some(function (r) {
        return r == _common.RoleGroup.Staffs;
      })) {
        return false;
      }
      return relative.option == _clones.ResolveRelativeOption.MergeUser;
    }
  }, {
    key: "mustSelectMainRelative",
    value: function mustSelectMainRelative() {
      if (this.relatives.some(function (s) {
        return !s.option;
      })) {
        return false;
      }
      if (!this.relatives.some(function (s) {
        return s.option == _clones.ResolveRelativeOption.MergeUser;
      })) {
        return false;
      }
      if (this.relatives.some(function (s) {
        return s.option == _clones.ResolveRelativeOption.MainUser;
      })) {
        return false;
      }
      return true;
    }
  }, {
    key: "onChangeUseOption",
    value: function onChangeUseOption(relative) {
      if (relative.option == _clones.ResolveRelativeOption.MainUser) {
        this.relatives.filter(function (x) {
          return x.option == _clones.ResolveRelativeOption.MainUser;
        }).filter(function (x) {
          return x.userId != relative.userId;
        }).forEach(function (o) {
          return o.option = null;
        });
      }
    }
  }]);
  return ResolveRelativeViewInfo;
}();
var ClonesMergeController = /*#__PURE__*/function (_NetCityModalControll) {
  ClonesMergeController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "$longWork", "dateUtils", "language", "clones", "clonesRepository", "taskQueueService", "referencesRepository", "settingsProvider", "role"];
  _inherits(ClonesMergeController, _NetCityModalControll);
  var _super = _createSuper(ClonesMergeController);
  /*@ngInject*/
  function ClonesMergeController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, $longWork, dateUtils, language, clones, clonesRepository, taskQueueService, referencesRepository, settingsProvider, role) {
    var _this2;
    _classCallCheck(this, ClonesMergeController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.$alerts = $alerts;
    _this2.$longWork = $longWork;
    _this2.dateUtils = dateUtils;
    _this2.language = language;
    _this2.clones = clones;
    _this2.clonesRepository = clonesRepository;
    _this2.taskQueueService = taskQueueService;
    _this2.referencesRepository = referencesRepository;
    _this2.settingsProvider = settingsProvider;
    _this2.role = role;
    _this2.category = true;
    _this2.buttons = [];
    _this2.ready = false;
    _this2.valid = false;
    _this2.parentOptions = [{
      id: _clones.ResolveRelativeOption.MainUser,
      name: "Основная запись"
    }, {
      id: _clones.ResolveRelativeOption.MergeUser,
      name: "Объединить с основной"
    }, {
      id: _clones.ResolveRelativeOption.SkipUser,
      name: "Не использовать"
    }];
    _this2.header = "Слияние дублей";
    var activeClones = _this2.clones.filter(function (x) {
      return x.organizations.some(function (o) {
        return o.isActive;
      });
    });
    _this2.mainPerson = activeClones.length > 0 ? activeClones[0] : _this2.clones[0];
    _this2.staffUsers = _this2.clones.filter(function (x) {
      return x.organizations.some(function (o) {
        return o.roles.indexOf(_common.RoleGroup.Staffs) > -1;
      });
    });
    _this2.helper = new _formValidationHelper.FormValidationHelper(_this2.$dialogs, _this2.language, {});
    var continueButton = {
      title: language.Generic.Buttons.kContinue,
      "class": [_nsModal.ButtonClass.primary],
      isEnabled: function isEnabled() {
        return _this2.valid;
      },
      action: function action() {
        return _this2["continue"]();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      action: function action() {
        return _this2.close();
      }
    };
    _this2.buttons.push(continueButton);
    _this2.buttons.push(cancelButton);
    _this2.resolveInfo = {
      addresses: null,
      identityDocuments: null,
      userParameters: null,
      person: null,
      login: null
    };
    _this2.init();
    return _this2;
  }
  _createClass(ClonesMergeController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var promises;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              promises = [];
              promises.push(this.initIdentityDocuments());
              promises.push(this.initAddresses());
              promises.push(this.initParameterValues());
              promises.push(this.initMovement());
              promises.push(this.initAuthData());
              if (this.role == _common.RoleGroup.Students) {
                promises.push(this.initParents());
                promises.push(this.initEducCertificates());
              }
              _context.next = 9;
              return Promise.all(promises);
            case 9:
              if (this.role == _common.RoleGroup.Students) {
                this.validateRanges();
                this.valid = this.conflictRanges.length == 0;
              } else {
                this.valid = true;
              }
              this.valid = this.valid && this.staffUsers.length == 0;
              this.ready = true;
              this.$scope.$applyAsync();
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initIdentityDocuments",
    value: function initIdentityDocuments() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var identityDocuments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.referencesRepository.getIdentityDocumentTypes();
            case 2:
              this.identityDocumentTypesRef = _context2.sent;
              identityDocuments = _.chain(this.clones).map(function (x) {
                return x.documents;
              }).flatten().value();
              this.identityDocuments = this.getIdentityDocsResolve(identityDocuments);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "initAddresses",
    value: function initAddresses() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var userIds, addresses;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              userIds = this.clones.map(function (x) {
                return x.userId;
              });
              _context3.next = 3;
              return this.clonesRepository.getAddressInfo(userIds);
            case 3:
              addresses = _context3.sent;
              this.addressInfo = this.getAddressesResolve(addresses);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "initEducCertificates",
    value: function initEducCertificates() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var userIds, educCertificates;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType();
            case 2:
              this.integrationPfdoType = _context4.sent;
              if (!(this.integrationPfdoType != _settingsProvider.PfdoIntegrationType.IRTechEes)) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              userIds = this.clones.map(function (x) {
                return x.userId;
              });
              _context4.prev = 6;
              _context4.next = 9;
              return this.clonesRepository.getEducCertificates(userIds);
            case 9:
              educCertificates = _context4.sent;
              this.educCertificates = this.getEducCertificateResolve(educCertificates);
              _context4.next = 16;
              break;
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](6);
              console.log(_context4.t0.data.message);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[6, 13]]);
      }));
    }
  }, {
    key: "initParameterValues",
    value: function initParameterValues() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var userIds, parameters, parameterValues;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              userIds = this.clones.map(function (x) {
                return x.userId;
              });
              _context5.next = 3;
              return this.clonesRepository.getParameters(2, true);
            case 3:
              parameters = _context5.sent;
              _context5.next = 6;
              return this.clonesRepository.getParameterValues(userIds);
            case 6:
              parameterValues = _context5.sent;
              this.userParameters = this.getParametersResolve(parameters, parameterValues);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "initMovement",
    value: function initMovement() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this3 = this;
        var cloneMovements, loadMovements;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              cloneMovements = [];
              loadMovements = this.clones.map(function (c) {
                return _this3.clonesRepository.getStudentMovement(c.userId).then(function (movements) {
                  return movements.forEach(function (m) {
                    return cloneMovements.push({
                      clone: c,
                      document: m
                    });
                  });
                });
              });
              _context6.next = 4;
              return Promise.all(loadMovements);
            case 4:
              cloneMovements.forEach(function (x) {
                x.document.docDate = _this3.dateUtils.asUTCDate(x.document.docDate);
              });
              this.commonEducation = _.chain(cloneMovements).filter(function (x) {
                return x.document.funcType != "AddSchool";
              }).sortBy(function (x) {
                return x.document.docDate.getTime();
              }).value();
              this.addEducation = _.chain(cloneMovements).filter(function (x) {
                return x.document.funcType == "AddSchool";
              }).sortBy(function (x) {
                return x.document.docDate.getTime();
              }).sortBy(function (x) {
                return x.document.programName;
              }).sortBy(function (x) {
                return x.document.eoName;
              }).value();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "initParents",
    value: function initParents() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this4 = this;
        var allParents, userIds, students, parents, parameters, parameterValues, identityDocuments, authInfo, addresses;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              allParents = _.chain(this.clones).filter(function (x) {
                return x.relatives.length;
              }).map(function (x) {
                return x.relatives;
              }).flatten().value();
              userIds = allParents.map(function (x) {
                return x.userId;
              });
              if (userIds.length) {
                _context7.next = 5;
                break;
              }
              this.parents = [];
              return _context7.abrupt("return");
            case 5:
              _context7.next = 7;
              return this.clonesRepository.getParentStudents(userIds);
            case 7:
              students = _context7.sent;
              parents = _.chain(allParents).groupBy(function (x) {
                return (x.lastName + "_" + x.firstName).replace('ё', 'е').toLowerCase();
              }).map(function (parents) {
                var resolveOptions = angular.copy(_this4.parentOptions);
                var parentsViewInfo = parents.map(function (p) {
                  return {
                    userId: p.userId,
                    lastName: p.lastName,
                    firstName: p.firstName,
                    middleName: p.middleName,
                    birthDate: p.birthDate,
                    nickName: p.nickName,
                    roleGroups: p.roleGroups,
                    students: students.filter(function (s) {
                      return s.parentId == p.userId;
                    }),
                    option: null
                  };
                });
                parentsViewInfo = _.unique(parentsViewInfo, function (p) {
                  return p.userId;
                });
                var resolveInfo = new ResolveRelativeViewInfo(parentsViewInfo, resolveOptions);
                return resolveInfo;
              }).value();
              _context7.next = 11;
              return this.clonesRepository.getParameters(3, true);
            case 11:
              parameters = _context7.sent;
              _context7.next = 14;
              return this.clonesRepository.getParameterValues(userIds);
            case 14:
              parameterValues = _context7.sent;
              _context7.next = 17;
              return this.clonesRepository.getIdentityDocuments(userIds);
            case 17:
              identityDocuments = _context7.sent;
              _context7.next = 20;
              return this.clonesRepository.getAuthInfo(userIds);
            case 20:
              authInfo = _context7.sent;
              _context7.next = 23;
              return this.clonesRepository.getAddressInfo(userIds);
            case 23:
              addresses = _context7.sent;
              parents.forEach(function (f) {
                var parentIds = _.flatten(f.relatives.map(function (p) {
                  return p.userId;
                }));
                f.data.userParameters = _this4.getParametersResolve(parameters, parameterValues, parentIds);
                f.data.identityDocuments = _this4.getIdentityDocsResolve(identityDocuments, parentIds);
                f.data.addressInfo = _this4.getAddressesResolve(addresses, parentIds);
                f.data.authInfo = _this4.getAuthDataResolve(authInfo, parentIds);
              });
              this.parents = parents;
            case 26:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "initAuthData",
    value: function initAuthData() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var userIds, authInfo;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              userIds = this.clones.map(function (x) {
                return x.userId;
              });
              if (userIds.length) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");
            case 3:
              _context8.next = 5;
              return this.clonesRepository.getAuthInfo(userIds);
            case 5:
              authInfo = _context8.sent;
              this.authInfo = this.getAuthDataResolve(authInfo);
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "getAuthDataResolve",
    value: function getAuthDataResolve(authInfo, userId) {
      var _this5 = this;
      var _a;
      var options = authInfo.filter(function (x) {
        return !userId || userId.indexOf(x.userId) > -1;
      }).map(function (a) {
        var _a;
        return {
          lastLoginTime: _this5.dateUtils.asUTCDateTime(a.lastLoginTime),
          loginName: a.loginName,
          userId: a.userId,
          fio: (_a = _this5.clones.find(function (c) {
            return c.userId == a.userId;
          })) === null || _a === void 0 ? void 0 : _a.fio
        };
      });
      var resolved;
      if (options.length > 1) {
        resolved = (_a = _.chain(options).filter(function (a) {
          return a.lastLoginTime;
        }).sortBy(function (x) {
          return x.lastLoginTime;
        }).reverse().first().value()) === null || _a === void 0 ? void 0 : _a.userId;
      } else {
        resolved = options[0].userId;
      }
      return {
        options: options,
        resolved: resolved
      };
    }
  }, {
    key: "getParametersResolve",
    value: function getParametersResolve(parameters, parameterValues, userId) {
      var resolveInfo = _.chain(parameterValues).filter(function (x) {
        return !userId || userId.indexOf(x.userId) > -1;
      }).filter(function (x) {
        return x.parameterId != 1040;
      }).groupBy(function (x) {
        return x.parameterId;
      }).map(function (paramValues, paramId) {
        var parameterInfo = parameters.find(function (x) {
          return x.id == parseInt(paramId);
        });
        if (!parameterInfo) {
          return null;
        }
        var itemValues = paramValues.filter(function (x) {
          var _a;
          return (_a = x.value) === null || _a === void 0 ? void 0 : _a.itemId;
        });
        if (itemValues.length) {
          itemValues.forEach(function (iv) {
            var _a;
            return iv.value.text = (_a = parameterInfo.items.find(function (i) {
              return i.id == iv.value.itemId;
            })) === null || _a === void 0 ? void 0 : _a.name;
          });
        }
        if (parameterInfo.paramType == _userinfo.UserParamType.Bool) {
          paramValues.forEach(function (p) {
            return p.value.text = p.value.text == "1" ? "Да" : p.value.text == "0" ? "Нет" : "-";
          });
        }
        if (parameterInfo.paramType == _userinfo.UserParamType.MultiChoice || parameterInfo.paramType == _userinfo.UserParamType.Relation) {
          paramValues = _.chain(paramValues).groupBy(function (x) {
            return x.userId;
          }).map(function (values) {
            var pv = values[0];
            var textValues = values.reduce(function (s, v) {
              return s += v.value.text + "; ";
            }, "");
            var ret = {
              userId: pv.userId,
              parameterId: pv.parameterId,
              value: {
                text: textValues
              }
            };
            return ret;
          }).value();
        }
        var uniq = _.uniq(paramValues, function (x) {
          return x.value.text;
        });
        var resolved = null;
        if (uniq.length == 1) {
          resolved = paramValues[0].userId;
        }
        var resolveInfo = new ResolveUserParameterViewInfo();
        resolveInfo.parameterId = parseInt(paramId);
        resolveInfo.parameterName = parameterInfo === null || parameterInfo === void 0 ? void 0 : parameterInfo.title;
        resolveInfo.parameterType = parameterInfo === null || parameterInfo === void 0 ? void 0 : parameterInfo.paramType;
        resolveInfo.options = paramValues;
        resolveInfo.resolved = resolved;
        return resolveInfo;
      }).filter(function (x) {
        return x != null;
      }).value();
      return resolveInfo;
    }
  }, {
    key: "getIdentityDocsResolve",
    value: function getIdentityDocsResolve(identityDocuments, userId) {
      var _this6 = this;
      return _.chain(identityDocuments).filter(function (x) {
        return userId == null || userId.indexOf(x.userId) > -1;
      }).groupBy(function (x) {
        return x.documentType;
      }).map(function (documents, docType) {
        var _a;
        var resolved = null;
        if (documents.length == 1) {
          resolved = documents[0].userId;
        }
        return {
          documentType: docType,
          documentTypeName: (_a = _this6.identityDocumentTypesRef.find(function (x) {
            return x.key == docType;
          })) === null || _a === void 0 ? void 0 : _a.name,
          documents: documents,
          resolved: resolved
        };
      }).value();
    }
  }, {
    key: "getEducCertificateResolve",
    value: function getEducCertificateResolve(educCertificate, userId) {
      var _a;
      var options = _.chain(educCertificate).filter(function (x) {
        return userId == null || userId.indexOf(x.userId) > -1;
      }).map(function (x) {
        return {
          userId: x.userId,
          certificateNumber: x.certificateNumber,
          certificateStatus: x.certificateStatus,
          attachment: {
            organization: x.schoolName,
            addProgram: x.addProgramName
          }
        };
      }).value();
      var certificateViewInfo = {
        options: options,
        resolved: 0
      };
      certificateViewInfo.resolved = null;
      if (options.length == 1) {
        certificateViewInfo.resolved = (_a = certificateViewInfo.options[0]) === null || _a === void 0 ? void 0 : _a.userId;
      }
      return certificateViewInfo;
    }
  }, {
    key: "getAddressesResolve",
    value: function getAddressesResolve(addresses, userId) {
      var getResolve = function getResolve(addressType, addresses) {
        var resolved = null;
        var options = _.chain(addresses).filter(function (x) {
          return userId == null || userId.indexOf(x.userId) > -1;
        }).filter(function (x) {
          return x.addressType == addressType || x.addressType == _userinfo.AddressType.equals;
        }).groupBy(function (x) {
          return x.addressId;
        }).map(function (addresses) {
          var address = addresses[0];
          var userId = addresses.map(function (a) {
            return a.userId;
          }).reduce(function (s, v) {
            return s += ", " + v;
          }, "").substring(1);
          return {
            userId: userId,
            addressId: address.addressId,
            address: address.address
          };
        }).value();
        if (options.length == 1) {
          resolved = options[0].addressId;
        }
        return {
          resolved: resolved,
          addressType: addressType,
          options: options
        };
      };
      return {
        regAddress: getResolve(_userinfo.AddressType.registration, addresses),
        homeAddress: getResolve(_userinfo.AddressType.home, addresses)
      };
    }
  }, {
    key: "continue",
    value: function _continue() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this7 = this;
        var educCertificateResolveData, relativesResolveData, documentsResolveData, userParameterResolveData, addressesResolveData, command, opt;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!this.form.$invalid) {
                _context9.next = 4;
                break;
              }
              this.form.$displayErrors = true;
              this.helper.focusInvalidFormControl(this.form);
              return _context9.abrupt("return");
            case 4:
              educCertificateResolveData = null;
              relativesResolveData = null;
              if (!(this.role == _common.RoleGroup.Students)) {
                _context9.next = 11;
                break;
              }
              if (!this.parents.some(function (p) {
                return p.invalid;
              })) {
                _context9.next = 9;
                break;
              }
              return _context9.abrupt("return");
            case 9:
              if (this.integrationPfdoType == _settingsProvider.PfdoIntegrationType.IRTechEes) {
                educCertificateResolveData = this.educCertificates.options.filter(function (x) {
                  return _this7.educCertificates.resolved == x.userId;
                }).map(function (x) {
                  return {
                    userId: x.userId,
                    certificateNumber: x.certificateNumber
                  };
                })[0];
              }
              relativesResolveData = this.parents.map(function (x) {
                return {
                  userOptions: x.relatives.map(function (p) {
                    return {
                      userId: p.userId,
                      option: p.option
                    };
                  }),
                  resolveInfo: {
                    person: x.person,
                    userParameters: x.data.userParameters.map(function (pup) {
                      return {
                        parameterId: pup.parameterId,
                        userId: pup.resolved
                      };
                    }),
                    identityDocuments: x.data.identityDocuments.map(function (pid) {
                      return {
                        documentType: pid.documentType,
                        userId: pid.resolved
                      };
                    }),
                    addresses: _this7.getAddressResolveData(x.data.addressInfo),
                    educCertificate: null,
                    login: {
                      userId: x.data.authInfo.resolved
                    }
                  }
                };
              });
            case 11:
              documentsResolveData = this.identityDocuments.map(function (x) {
                return {
                  documentType: x.documentType,
                  userId: x.resolved
                };
              });
              userParameterResolveData = this.userParameters.map(function (x) {
                return {
                  parameterId: x.parameterId,
                  userId: x.resolved
                };
              });
              addressesResolveData = this.getAddressResolveData(this.addressInfo);
              command = {
                userId: this.clones.map(function (x) {
                  return x.userId;
                }),
                roleGroup: this.role,
                resolveInfo: {
                  person: this.mainPerson.userId,
                  educCertificate: educCertificateResolveData,
                  userParameters: userParameterResolveData,
                  identityDocuments: documentsResolveData,
                  relatives: relativesResolveData,
                  addresses: addressesResolveData,
                  login: {
                    userId: this.authInfo.resolved
                  }
                }
              };
              _context9.next = 17;
              return this.$dialogs.confirm("Вы желаете продолжить?");
            case 17:
              opt = {
                header: "Объединение пользователей",
                logoutputMode: true,
                getTaskFunc: function getTaskFunc() {
                  return _this7.clonesRepository.mergeClones(command);
                }
              };
              _context9.next = 20;
              return this.taskQueueService.execute(opt);
            case 20:
              this.$alerts.success("Учетные записи успешно объеденены ");
              this.$uibModalInstance.close("success");
            case 22:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "getAddressResolveData",
    value: function getAddressResolveData(resolveViewInfo) {
      var _a, _b;
      var addressesResolveData = [];
      if ((_a = resolveViewInfo === null || resolveViewInfo === void 0 ? void 0 : resolveViewInfo.homeAddress) === null || _a === void 0 ? void 0 : _a.resolved) {
        addressesResolveData.push({
          addressType: _userinfo.AddressType.home,
          addressId: resolveViewInfo.homeAddress.resolved
        });
      }
      if ((_b = resolveViewInfo === null || resolveViewInfo === void 0 ? void 0 : resolveViewInfo.regAddress) === null || _b === void 0 ? void 0 : _b.resolved) {
        addressesResolveData.push({
          addressType: _userinfo.AddressType.registration,
          addressId: resolveViewInfo.regAddress.resolved
        });
      }
      return addressesResolveData;
    }
  }, {
    key: "getRoleGroupTitle",
    value: function getRoleGroupTitle(role) {
      switch (role) {
        case _common.RoleGroup.Parents:
          return "Родитель";
        case _common.RoleGroup.Staffs:
          return "Сотрудник";
        default:
          return "-";
      }
    }
  }, {
    key: "validateRanges",
    value: function validateRanges() {
      var _this8 = this;
      var ranges = _.chain(this.commonEducation).filter(function (x) {
        var _a;
        return ((_a = x.document.classTo) === null || _a === void 0 ? void 0 : _a.id) > 0;
      }).filter(function (x) {
        return x.document.eoName.indexOf("Для УДОД") == -1;
      }).map(function (x) {
        var departDocs = _this8.commonEducation.filter(function (d) {
          var _a;
          return ((_a = d.document.classFrom) === null || _a === void 0 ? void 0 : _a.id) == x.document.classTo.id;
        }).map(function (d) {
          return d;
        });
        var departDoc = departDocs.length == 0 ? null : departDocs[0];
        var range = {
          id: x.document.id + "_" + (departDoc === null || departDoc === void 0 ? void 0 : departDoc.document.id),
          classId: x.document.classTo.id,
          eoName: x.document.eoName,
          enrollDate: x.document.docDate,
          enrollDoc: x,
          departDate: departDoc === null || departDoc === void 0 ? void 0 : departDoc.document.docDate,
          departDoc: departDoc
        };
        return range;
      }).value();
      this.conflictRanges = ranges.filter(function (x) {
        return x.departDate == null || x.departDate.getTime() > x.enrollDate.getTime();
      }).map(function (i) {
        var bRange = ranges.find(function (c) {
          return c.id != i.id && i.enrollDate.getTime() >= c.enrollDate.getTime() && (c.departDate == null && i.departDate == null && i.enrollDate.getFullYear() - c.enrollDate.getFullYear() <= 1 || c.departDate != null && i.departDate != null && (i.departDate.getTime() <= c.departDate.getTime() //один диапазон внутри другого
          || i.enrollDate.getTime() < c.departDate.getTime() //старт i внутри c
          ));
        });

        return {
          num: 0,
          a: i,
          b: bRange
        };
      }).filter(function (x) {
        return x.b != null;
      });
      this.conflictRanges = _.uniq(this.conflictRanges, function (x) {
        return _.sortBy([x.a.enrollDoc.document.id, x.b.enrollDoc.document.id], function (i) {
          return i;
        }).join("-");
      });
      this.conflictRanges.forEach(function (cr, ind) {
        cr.num = ind + 1;
        if (cr.a.enrollDoc) {
          cr.a.enrollDoc.conflict = cr.a.enrollDoc.conflict || cr;
        }
        if (cr.a.departDoc) {
          cr.a.departDoc.conflict = cr.a.departDoc.conflict || cr;
        }
        if (cr.b.enrollDoc) {
          cr.b.enrollDoc.conflict = cr.b.enrollDoc.conflict || cr;
        }
        if (cr.b.departDoc) {
          cr.b.departDoc.conflict = cr.b.departDoc.conflict || cr;
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return ClonesMergeController;
}(_netcityModalCtrl.NetCityModalController);
var ClonesMergeComponent = {
  controller: ClonesMergeController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/support/clones/clones.merge.component.html"
};
exports.ClonesMergeComponent = ClonesMergeComponent;

/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovementDiagRegistryComponent = void 0;
var _registry = __webpack_require__(3);
var _studentMovement = __webpack_require__(80);
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
var MovementDiagRegistryController = /*#__PURE__*/function () {
  MovementDiagRegistryController.$inject = ["pageContext", "language", "movementDiagRepository", "$longWork", "$uibModal", "$alerts", "$dialogs"];
  /*@ngInject*/
  function MovementDiagRegistryController(pageContext, language, movementDiagRepository, $longWork, $uibModal, $alerts, $dialogs) {
    var _this = this;
    _classCallCheck(this, MovementDiagRegistryController);
    this.movementDiagRepository = movementDiagRepository;
    this.$longWork = $longWork;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    pageContext.title = "Диагностика движения";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    this.registryInfo = {
      url: "/webapi/admin/movementDiag/registry",
      filtersUrl: "/webapi/admin/movementDiag/registry/filter",
      fieldDecorators: {
        "studentId": new _registry.LinkFieldDecorator(function (item) {
          return _this.showMovement(item.studentId);
        }),
        "enroll": new _registry.DateDecorator(),
        "depart": new _registry.DateDecorator()
      },
      selectable: _registry.SelectionMode.Multiple,
      selectAllRecordsTitle: "Выбрать диапазоны обучения на всех страницах",
      newPageDontDropSelection: true,
      showSelectAll: true,
      unselectAllRecordsTitle: "Отменить выделение",
      selectedRecordsTitle: "Выбрано диапазонов обучения",
      initialPageSize: 50,
      linkButtons: [],
      events: {
        ready: function ready() {
          _this.controller.selection.isSelected = function (val) {
            return _this.controller.selection.items.find(function (x) {
              return x.id == val.id;
            });
          };
          _this.controller.selection.select = function (val) {
            var current = _this.controller.selection.items.find(function (x) {
              return x.id == val.id;
            });
            if (current) {
              _this.controller.selection.items = _this.controller.selection.items.filter(function (x) {
                return x.id != val.id;
              });
            } else {
              _this.controller.selection.items.push(val);
            }
          };
        }
      }
    };
  }
  _createClass(MovementDiagRegistryController, [{
    key: "showMovement",
    value: function showMovement(studentId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _movement;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$longWork.execute(this.movementDiagRepository.getStudentMovement(studentId));
            case 2:
              _movement = _context.sent;
              this.$uibModal.open({
                controller: _studentMovement.StudentMovementComponent.controller,
                controllerAs: _studentMovement.StudentMovementComponent.controllerAs,
                templateUrl: _studentMovement.StudentMovementComponent.templateUrl,
                size: "lg",
                resolve: {
                  movement: function movement() {
                    return _movement;
                  }
                }
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "fixStudentMovement",
    value: function fixStudentMovement() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var selection, classId, studentId, stats;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              selection = this.controller.selection.items[0];
              classId = selection.classId;
              studentId = selection.studentId;
              _context2.next = 5;
              return this.$longWork.execute(this.movementDiagRepository.fixStudentMovement(studentId, classId));
            case 5:
              stats = _context2.sent;
              this.$dialogs.message(stats);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }]);
  return MovementDiagRegistryController;
}();
var MovementDiagRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: MovementDiagRegistryController,
  controllerAs: "$ctrl"
};
exports.MovementDiagRegistryComponent = MovementDiagRegistryComponent;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentMovementComponent = void 0;
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
var StudentMovementController = /*#__PURE__*/function (_NetCityModalControll) {
  StudentMovementController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "dateUtils", "language", "movement"];
  _inherits(StudentMovementController, _NetCityModalControll);
  var _super = _createSuper(StudentMovementController);
  /*@ngInject*/
  function StudentMovementController($scope, $uibModalInstance, changeTracker, $dialogs, dateUtils, language, movement) {
    var _this;
    _classCallCheck(this, StudentMovementController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.dateUtils = dateUtils;
    _this.language = language;
    _this.buttons = [];
    _this.header = "Информация о движении учащегося";
    movement.forEach(function (x) {
      x.docDate = _this.dateUtils.asUTCDate(x.docDate);
    });
    _this.commonEducation = _.chain(movement).filter(function (x) {
      return x.funcType != "AddSchool";
    }).sortBy(function (x) {
      return x.docDate.getTime();
    }).value();
    _this.addEducation = _.chain(movement).filter(function (x) {
      return x.funcType == "AddSchool";
    }).sortBy(function (x) {
      return x.docDate.getTime();
    }).sortBy(function (x) {
      return x.programName;
    }).sortBy(function (x) {
      return x.eoName;
    }).value();
    return _this;
  }
  _createClass(StudentMovementController, [{
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return StudentMovementController;
}(_netcityModalCtrl.NetCityModalController);
var StudentMovementComponent = {
  templateUrl: "/static/dist/app/admin/support/movementDiag/student-movement.component.html",
  controller: StudentMovementController,
  controllerAs: "$ctrl"
};
exports.StudentMovementComponent = StudentMovementComponent;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovementDiagRepository = void 0;
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
var MovementDiagRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(MovementDiagRepository, _BaseRepository);
  var _super = _createSuper(MovementDiagRepository);
  function MovementDiagRepository() {
    _classCallCheck(this, MovementDiagRepository);
    return _super.apply(this, arguments);
  }
  _createClass(MovementDiagRepository, [{
    key: "getStudentMovement",
    value: function getStudentMovement(studentId) {
      return this.$http.get("/webapi/admin/movementDiag/movement", {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "fixStudentMovement",
    value: function fixStudentMovement(studentId, classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/students-educ-ranges/fix"), {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return MovementDiagRepository;
}(_repository.BaseRepository);
exports.MovementDiagRepository = MovementDiagRepository;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GisRuoTransactionsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
var _transactionResources = __webpack_require__(83);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GisRuoTransactionsRegistryController = /*#__PURE__*/function () {
  GisRuoTransactionsRegistryController.$inject = ["pageContext", "language", "$uibModal"];
  /*@ngInject*/
  function GisRuoTransactionsRegistryController(pageContext, language, $uibModal) {
    var _this = this;
    _classCallCheck(this, GisRuoTransactionsRegistryController);
    this.$uibModal = $uibModal;
    pageContext.title = "ГИС РУО. Транзакции";
    pageContext.parent = {
      href: "/",
      title: language.Generic.MenuFolders.kDiagnos
    };
    pageContext.back = {
      history: true
    };
    var viewResources = {
      title: "Просмотреть ресурсы",
      action: function action() {
        return _this.viewResources();
      },
      isEnabled: function isEnabled() {
        var _a;
        return (_a = _this.controller) === null || _a === void 0 ? void 0 : _a.selection.selected[0];
      }
    };
    this.registryInfo = {
      url: "/webapi/integration/gisruo/transactions/registry",
      filtersUrl: "/webapi/integration/gisruo/transactions/registry/filter",
      buttons: [viewResources],
      linkButtons: [],
      selectable: _registry.SelectionMode.Single,
      "export": false
    };
  }
  _createClass(GisRuoTransactionsRegistryController, [{
    key: "viewResources",
    value: function viewResources() {
      var selection = this.controller.selection.selected[0];
      if (!selection) {
        return;
      }
      this.$uibModal.open({
        controller: _transactionResources.GisRuoTransactionResourcesComponent.controller,
        controllerAs: _transactionResources.GisRuoTransactionResourcesComponent.controllerAs,
        template: _transactionResources.GisRuoTransactionResourcesComponent.template,
        size: "lg",
        resolve: {
          transactionId: function transactionId() {
            return selection.id;
          }
        }
      });
    }
  }]);
  return GisRuoTransactionsRegistryController;
}();
var GisRuoTransactionsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: GisRuoTransactionsRegistryController,
  controllerAs: "$ctrl"
};
exports.GisRuoTransactionsRegistryComponent = GisRuoTransactionsRegistryComponent;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GisRuoTransactionResourcesComponent = exports.BtnViewDecorator = void 0;
var _netcityModalCtrl = __webpack_require__(5);
var _registry = __webpack_require__(3);
var _xmlViewer = __webpack_require__(84);
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
var BtnViewDecorator = /*#__PURE__*/function () {
  function BtnViewDecorator(linkAction, isEmpty) {
    _classCallCheck(this, BtnViewDecorator);
    this.linkAction = linkAction;
    this.isEmpty = isEmpty;
    this.template = "<span ng-if=\"empty(row)\">-</span><a ng-if=\"!empty(row)\" href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C</a>";
  }
  _createClass(BtnViewDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["action"] = function (row) {
        _this.linkAction(row);
      };
      scope["empty"] = function (row) {
        if (typeof _this.isEmpty == "function") {
          return _this.isEmpty(row);
        }
        return false;
      };
    }
  }]);
  return BtnViewDecorator;
}();
exports.BtnViewDecorator = BtnViewDecorator;
var GisRuoTransactionResourcesController = /*#__PURE__*/function (_NetCityModalControll) {
  GisRuoTransactionResourcesController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language", "transactionId", "$uibModal", "$sanitize"];
  _inherits(GisRuoTransactionResourcesController, _NetCityModalControll);
  var _super = _createSuper(GisRuoTransactionResourcesController);
  /*@ngInject*/
  function GisRuoTransactionResourcesController($scope, $uibModalInstance, $dialogs, changeTracker, language, transactionId, $uibModal, $sanitize) {
    var _this2;
    _classCallCheck(this, GisRuoTransactionResourcesController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.$uibModal = $uibModal;
    _this2.$sanitize = $sanitize;
    _this2.header = "Ресурсы";
    _this2.registryInfo = {
      url: "/webapi/integration/gisruo/transactions/".concat(transactionId, "/resources/registry"),
      filtersUrl: "/webapi/integration/gisruo/transactions/".concat(transactionId, "/resources/registry/filter"),
      buttons: [],
      linkButtons: [],
      "export": false,
      registryStyles: {
        table: "table-xs table-bright table-bright-hover",
        filtersForm: "form-xs"
      },
      fieldDecorators: {
        "requestXml": new BtnViewDecorator(function (item) {
          _this2.displayXml(item.requestXml, "Запрос");
        }),
        "responseXml": new BtnViewDecorator(function (item) {
          if (item.requestXml) {
            _this2.displayXml(item.responseXml, "Ответ");
          }
        }, function (x) {
          return !x.responseXml;
        })
      },
      filterPanelStyles: {
        compact: true,
        label: "col-md-4",
        control: "col-md-8"
      },
      selectable: _registry.SelectionMode.Single,
      initialPageSize: 20,
      events: {
        ready: function ready() {
          _this2.ready = true;
        }
      }
    };
    var closeBtn = {
      title: _this2.language.Generic.Buttons.kClose,
      action: function action() {
        return _this2.close();
      }
    };
    _this2.buttons = [closeBtn];
    return _this2;
  }
  _createClass(GisRuoTransactionResourcesController, [{
    key: "displayXml",
    value: function displayXml(xml, _title) {
      this.$uibModal.open({
        template: _xmlViewer.XmlViewerComponent.template,
        controller: _xmlViewer.XmlViewerComponent.controller,
        controllerAs: _xmlViewer.XmlViewerComponent.controllerAs,
        size: "lg",
        resolve: {
          "title": function title() {
            return _title;
          },
          "rawxml": function rawxml() {
            return xml;
          }
        }
      });
    }
    //отмена
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return GisRuoTransactionResourcesController;
}(_netcityModalCtrl.NetCityModalController);
var GisRuoTransactionResourcesComponent = {
  controller: GisRuoTransactionResourcesController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t<content-pre-loader ng-if=\"!$ctrl.ready\"></content-pre-loader>\n\t\t<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\" ng-show=\"$ctrl.ready\"></registry>\n\t</ns-modal>"
};
exports.GisRuoTransactionResourcesComponent = GisRuoTransactionResourcesComponent;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlViewerComponent = void 0;
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
var format = __webpack_require__(85);
var XmlViewerController = /*#__PURE__*/function (_NetCityModalControll) {
  XmlViewerController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language", "title", "rawxml"];
  _inherits(XmlViewerController, _NetCityModalControll);
  var _super = _createSuper(XmlViewerController);
  /*@ngInject*/
  function XmlViewerController($scope, $uibModalInstance, $dialogs, changeTracker, language, title, rawxml) {
    var _this;
    _classCallCheck(this, XmlViewerController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.title = title;
    _this.rawxml = rawxml;
    var formattedXml = format(rawxml);
    _this.xml = _this.escapeHtml(formattedXml);
    _this.buttons = [{
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle",
      "class": _nsModal.ButtonClass["default"],
      title: _this.language.Generic.Buttons.kClose
    }];
    return _this;
  }
  _createClass(XmlViewerController, [{
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "escapeHtml",
    value: function escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
  }]);
  return XmlViewerController;
}(_netcityModalCtrl.NetCityModalController);
var XmlViewerComponent = {
  controller: XmlViewerController,
  controllerAs: "$ctrl",
  template: "\n\t\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.title}}\" buttons=\"$ctrl.buttons\">\n\t\t<div class=\"wrap-pre\" ng-bind-html=\"$ctrl.xml\" style=\"font-size: 12px; line-height: 12px; overflow: auto; max-height: 600px; font-family: monospace;\"></div>\n\t\t</ns-modal>\n\t"
};
exports.XmlViewerComponent = XmlViewerComponent;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @typedef {Object} XMLFormatterOptions
 *  @property {String} [indentation='    '] The value used for indentation
 *  @property {function(node): boolean} [filter] Return false to exclude the node.
 *  @property {Boolean} [collapseContent=false] True to keep content in the same line as the element. Only works if element contains at least one text node
 *  @property {String} [lineSeparator='\r\n'] The line separator to use
 *  @property {String} [whiteSpaceAtEndOfSelfclosingTag=false] to either end ad self closing tag with `<tag/>` or `<tag />`
 */

/**
 * @typedef {Object} XMLFormatterState
 * @param {String} content
 * @param {Number} level
 * @param {XMLFormatterOptions} options
 */

/**
 * @param {XMLFormatterState} state
 * @return {void}
 */
function newLine(state) {
  if (!state.options.indentation && !state.options.lineSeparator) return;
  state.content += state.options.lineSeparator;
  var i;
  for (i = 0; i < state.level; i++) {
    state.content += state.options.indentation;
  }
}

/**
 * @param {XMLFormatterState} state
 * @param {String} content
 * @return {void}
 */
function appendContent(state, content) {
  state.content += content;
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processNode(node, state, preserveSpace) {
  if (typeof node.content === 'string') {
    processContentNode(node, state, preserveSpace);
  } else if (node.type === 'Element') {
    processElementNode(node, state, preserveSpace);
  } else if (node.type === 'ProcessingInstruction') {
    processProcessingIntruction(node, state, preserveSpace);
  } else {
    throw new Error('Unknown node type: ' + node.type);
  }
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processContentNode(node, state, preserveSpace) {
  if (!preserveSpace) {
    node.content = node.content.trim();
  }
  if (node.content.length > 0) {
    if (!preserveSpace && state.content.length > 0) {
      newLine(state);
    }
    appendContent(state, node.content);
  }
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processElementNode(node, state, preserveSpace) {
  if (!preserveSpace && state.content.length > 0) {
    newLine(state);
  }
  appendContent(state, '<' + node.name);
  processAttributes(state, node.attributes);
  if (node.children === null) {
    var selfClosingNodeClosingTag = state.options.whiteSpaceAtEndOfSelfclosingTag ? ' />' : '/>';
    // self-closing node
    appendContent(state, selfClosingNodeClosingTag);
  } else if (node.children.length === 0) {
    // empty node
    appendContent(state, '></' + node.name + '>');
  } else {
    appendContent(state, '>');
    state.level++;
    var nodePreserveSpace = node.attributes['xml:space'] === 'preserve';
    if (!nodePreserveSpace && state.options.collapseContent) {
      var containsTextNodes = false;
      var containsTextNodesWithLineBreaks = false;
      var containsNonTextNodes = false;
      node.children.forEach(function (child, index) {
        if (child.type === 'Text') {
          if (child.content.includes('\n')) {
            containsTextNodesWithLineBreaks = true;
            child.content = child.content.trim();
          } else if (index === 0 || index === node.children.length - 1) {
            if (child.content.trim().length === 0) {
              // If the text node is at the start or end and is empty, it should be ignored when formatting
              child.content = '';
            }
          }
          if (child.content.length > 0) {
            containsTextNodes = true;
          }
        } else if (child.type === 'CDATA') {
          containsTextNodes = true;
        } else {
          containsNonTextNodes = true;
        }
      });
      if (containsTextNodes && (!containsNonTextNodes || !containsTextNodesWithLineBreaks)) {
        nodePreserveSpace = true;
      }
    }
    node.children.forEach(function (child) {
      processNode(child, state, preserveSpace || nodePreserveSpace, state.options);
    });
    state.level--;
    if (!preserveSpace && !nodePreserveSpace) {
      newLine(state);
    }
    appendContent(state, '</' + node.name + '>');
  }
}

/**
 * @param {XMLFormatterState} state
 * @param {Record<String, String>} attributes
 * @return {void}
 */
function processAttributes(state, attributes) {
  Object.keys(attributes).forEach(function (attr) {
    var escaped = attributes[attr].replace(/"/g, '&quot;');
    appendContent(state, ' ' + attr + '="' + escaped + '"');
  });
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @return {void}
 */
function processProcessingIntruction(node, state) {
  if (state.content.length > 0) {
    newLine(state);
  }
  appendContent(state, '<?' + node.name);
  processAttributes(state, node.attributes);
  appendContent(state, '?>');
}

/**
 * Converts the given XML into human readable format.
 *
 * @param {String} xml
 * @param {XMLFormatterOptions} options
 * @returns {string}
 */
function format(xml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.indentation = 'indentation' in options ? options.indentation : '    ';
  options.collapseContent = options.collapseContent === true;
  options.lineSeparator = 'lineSeparator' in options ? options.lineSeparator : '\r\n';
  options.whiteSpaceAtEndOfSelfclosingTag = !!options.whiteSpaceAtEndOfSelfclosingTag;
  var parser = __webpack_require__(86);
  var parsedXml = parser(xml, {
    filter: options.filter
  });
  var state = {
    content: '',
    level: 0,
    options: options
  };
  if (parsedXml.declaration) {
    processProcessingIntruction(parsedXml.declaration, state);
  }
  parsedXml.children.forEach(function (child) {
    processNode(child, state, false);
  });
  return state.content.replace(/\r\n/g, '\n').replace(/\n/g, options.lineSeparator);
}
module.exports = format;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @typedef {Object} ParsingOptions
 *  @property {function(node)} filter Returns false to exclude a node. Default is true.
 */

/**
 * Parse the given XML string into an object.
 *
 * @param {String} xml
 * @param {ParsingOptions} [options]
 * @return {Object}
 * @api public
 */
function parse(xml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.filter = options.filter || function () {
    return true;
  };
  function nextChild() {
    return tag() || content() || comment() || cdata();
  }
  function nextRootChild() {
    match(/\s*/);
    return tag(true) || comment() || doctype() || processingInstruction(false);
  }
  function document() {
    var decl = declaration();
    var children = [];
    var documentRootNode;
    var child = nextRootChild();
    while (child) {
      if (child.node.type === 'Element') {
        if (documentRootNode) {
          throw new Error('Found multiple root nodes');
        }
        documentRootNode = child.node;
      }
      if (!child.excluded) {
        children.push(child.node);
      }
      child = nextRootChild();
    }
    if (!documentRootNode) {
      throw new Error('Failed to parse XML');
    }
    return {
      declaration: decl ? decl.node : null,
      root: documentRootNode,
      children: children
    };
  }
  function declaration() {
    return processingInstruction(true);
  }
  function processingInstruction(matchDeclaration) {
    var m = matchDeclaration ? match(/^<\?(xml)\s*/) : match(/^<\?([\w-:.]+)\s*/);
    if (!m) return;

    // tag
    var node = {
      name: m[1],
      type: 'ProcessingInstruction',
      attributes: {}
    };

    // attributes
    while (!(eos() || is('?>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }
    match(/\?>/);
    return {
      excluded: matchDeclaration ? false : options.filter(node) === false,
      node: node
    };
  }
  function tag(matchRoot) {
    var m = match(/^<([\w-:.]+)\s*/);
    if (!m) return;

    // name
    var node = {
      type: 'Element',
      name: m[1],
      attributes: {},
      children: []
    };

    // attributes
    while (!(eos() || is('>') || is('?>') || is('/>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }
    var excluded = matchRoot ? false : options.filter(node) === false;

    // self closing tag
    if (match(/^\s*\/>/)) {
      node.children = null;
      return {
        excluded: excluded,
        node: node
      };
    }
    match(/\??>/);
    if (!excluded) {
      // children
      var child = nextChild();
      while (child) {
        if (!child.excluded) {
          node.children.push(child.node);
        }
        child = nextChild();
      }
    }

    // closing
    match(/^<\/[\w-:.]+>/);
    return {
      excluded: excluded,
      node: node
    };
  }
  function doctype() {
    var m = match(/^<!DOCTYPE\s+[^>]*>/);
    if (m) {
      var node = {
        type: 'DocumentType',
        content: m[0]
      };
      return {
        excluded: options.filter(node) === false,
        node: node
      };
    }
  }
  function cdata() {
    if (xml.startsWith('<![CDATA[')) {
      var endPositionStart = xml.indexOf(']]>');
      if (endPositionStart > -1) {
        var endPositionFinish = endPositionStart + 3;
        var node = {
          type: 'CDATA',
          content: xml.substring(0, endPositionFinish)
        };
        xml = xml.slice(endPositionFinish);
        return {
          excluded: options.filter(node) === false,
          node: node
        };
      }
    }
  }
  function comment() {
    var m = match(/^<!--[\s\S]*?-->/);
    if (m) {
      var node = {
        type: 'Comment',
        content: m[0]
      };
      return {
        excluded: options.filter(node) === false,
        node: node
      };
    }
  }
  function content() {
    var m = match(/^([^<]+)/);
    if (m) {
      var node = {
        type: 'Text',
        content: m[1]
      };
      return {
        excluded: options.filter(node) === false,
        node: node
      };
    }
  }
  function attribute() {
    var m = match(/([\w-:.]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
    if (!m) return;
    return {
      name: m[1],
      value: strip(m[2])
    };
  }

  /**
   * Strip quotes from `val`.
   */
  function strip(val) {
    return val.replace(/^['"]|['"]$/g, '');
  }

  /**
   * Match `re` and advance the string.
   */
  function match(re) {
    var m = xml.match(re);
    if (!m) return;
    xml = xml.slice(m[0].length);
    return m;
  }

  /**
   * End-of-source.
   */
  function eos() {
    return 0 === xml.length;
  }

  /**
   * Check for `prefix`.
   */
  function is(prefix) {
    return 0 === xml.indexOf(prefix);
  }
  xml = xml.trim();
  return document();
}
module.exports = parse;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PfrSnilsRequestsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PfrSnilsRequestsRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", "$uibModal", function PfrSnilsRequestsRegistryController(pageContext, language, $uibModal) {
  _classCallCheck(this, PfrSnilsRequestsRegistryController);
  this.$uibModal = $uibModal;
  pageContext.title = "Запросы к ПФР";
  pageContext.parent = {
    href: "/",
    title: language.Generic.MenuFolders.kDiagnos
  };
  pageContext.back = {
    history: true
  };
  this.registryInfo = {
    url: "/webapi/integration/pfr/snils-requests/registry",
    filtersUrl: "/webapi/integration/pfr/snils-requests/registry/filter",
    fieldDecorators: {
      "requestTime": new _registry.DateTimeDecorator(),
      "responseTime": new _registry.DateTimeDecorator(),
      "status": new _registry.EnumItemDecorator()
    },
    buttons: [],
    linkButtons: [],
    "export": false
  };
}]);
var PfrSnilsRequestsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: PfrSnilsRequestsRegistryController,
  controllerAs: "$ctrl"
};
exports.PfrSnilsRequestsRegistryComponent = PfrSnilsRequestsRegistryComponent;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataMartsRequestsRegistryComponent = void 0;
var _registry = __webpack_require__(3);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var DataMartsRequestsRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", "language", "$uibModal", function DataMartsRequestsRegistryController(pageContext, language, $uibModal) {
  _classCallCheck(this, DataMartsRequestsRegistryController);
  this.$uibModal = $uibModal;
  pageContext.title = "Рег. витрина. Запросы выгрузки";
  pageContext.parent = {
    href: "/",
    title: language.Generic.MenuFolders.kDiagnos
  };
  pageContext.back = {
    history: true
  };
  this.registryInfo = {
    url: "/webapi/integration/datamarts/requests/registry",
    filtersUrl: "/webapi/integration/datamarts/requests/registry/filter",
    buttons: [],
    linkButtons: [],
    selectable: _registry.SelectionMode.Single,
    "export": false
  };
}]);
var DataMartsRequestsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: DataMartsRequestsRegistryController,
  controllerAs: "$ctrl"
};
exports.DataMartsRequestsRegistryComponent = DataMartsRequestsRegistryComponent;

/***/ })
/******/ ]);