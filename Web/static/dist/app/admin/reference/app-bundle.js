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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditReferenceComponent = void 0;
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
var EditReferenceController = /*#__PURE__*/function (_NetCityModalControll) {
  EditReferenceController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "model", "title", "$appLoader", "referenceType", "referenceRepository", "language"];
  _inherits(EditReferenceController, _NetCityModalControll);
  var _super = _createSuper(EditReferenceController);
  /*@ngInject*/
  function EditReferenceController($scope, $uibModalInstance, changeTracker, $dialogs, model, title, $appLoader, referenceType, referenceRepository, language) {
    var _this;
    _classCallCheck(this, EditReferenceController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.model = model;
    _this.title = title;
    _this.$appLoader = $appLoader;
    _this.referenceType = referenceType;
    _this.referenceRepository = referenceRepository;
    _this.language = language;
    var id = _this.model && _this.model.find(function (o) {
      return o["systemName"] == "id";
    });
    var status = _this.model && _this.model.find(function (o) {
      return o["systemName"] == "isUsed";
    });
    _this.isEdit = id && !!id.value;
    _this.status = status && status.value || "Free";
    var buttonId = 0;
    _this.buttons = [{
      id: buttonId++,
      "class": ['btn-primary'],
      action: function action() {
        if (!_this.validate()) return false;
        _this.save().then(function (saved) {
          _this.$uibModalInstance.close(_this.model);
        });
      },
      icon: "glyphicon-floppy-save",
      title: _this.language.Generic.Buttons.kSave,
      isEnabled: function isEnabled() {
        return _this.validate();
      }
    }, {
      id: buttonId++,
      "class": ["btn-default"],
      action: function action() {
        return $uibModalInstance.dismiss('cancel');
      },
      icon: "glyphicon-ban-circle",
      title: language.Generic.Buttons.kCancel,
      isEnabled: function isEnabled() {
        return true;
      }
    }];
    return _this;
  }
  _createClass(EditReferenceController, [{
    key: "validate",
    value: function validate() {
      var _this2 = this;
      // Проверка поля по одному валидатору. Если прошёл проверку, то true
      var valueSingleValidate = function valueSingleValidate(value, validator) {
        return new RegExp(validator.condition).test(value);
      };
      // Проверка поля всеми валидаторами, если прошёл проверку, то true
      var valueValidate = function valueValidate(value, validators) {
        return !validators.find(function (validator) {
          return !valueSingleValidate(value == undefined ? "" : value, validator);
        });
      };
      // Проверка всех полей, всеми валидаторами, если видимые поля прошли проверку, то true
      var result = this.model.filter(function (field) {
        return !field.isHidden;
      }).filter(function (field) {
        return field.validators.length > 0;
      }).filter(function (field) {
        return !_this2.isEdit || field.isEditableInStatus.indexOf(_this2.status) >= 0;
      }) // Поле можно редактировать в данном статусе
      .filter(function (field) {
        return !valueValidate(field.value, field.validators);
      });
      return result.length == 0;
    }
  }, {
    key: "getValueBySystemName",
    value: function getValueBySystemName(systemName) {
      return this.model.find(function (field) {
        return field.systemName == systemName;
      }).value;
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var result = {};
      for (var index in this.model) {
        var prop = this.model[index];
        result[prop.systemName] = prop.value;
      }
      this.$appLoader.show();
      var type = this.referenceType.refType;
      var parameterId = this.referenceType.parameterId;
      return this.referenceRepository.saveReference(type, parameterId, result)["finally"](function () {
        return _this3.$appLoader.hide();
      });
    }
  }]);
  return EditReferenceController;
}(_netcityModalCtrl.NetCityModalController);
var EditReferenceComponent = {
  controller: EditReferenceController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/reference/editReference.component.html",
  backdrop: 'static',
  size: 'md'
};
exports.EditReferenceComponent = EditReferenceComponent;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaceReferenceComponent = void 0;
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
var ReplaceReferenceController = /*#__PURE__*/function (_NetCityModalControll) {
  ReplaceReferenceController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "model", "title", "language", "dateUtils"];
  _inherits(ReplaceReferenceController, _NetCityModalControll);
  var _super = _createSuper(ReplaceReferenceController);
  /*@ngInject*/
  function ReplaceReferenceController($scope, $uibModalInstance, changeTracker, $dialogs, model, title, language, dateUtils) {
    var _this;
    _classCallCheck(this, ReplaceReferenceController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.model = model;
    _this.title = title;
    _this.language = language;
    _this.dateUtils = dateUtils;
    var buttonId = 0;
    _this.buttons = [{
      id: buttonId++,
      "class": ['btn-primary'],
      action: function action() {
        return _this.save();
      },
      icon: "glyphicon-floppy-save",
      title: _this.language.Generic.ServAdmin.kReplace,
      isEnabled: function isEnabled() {
        return _this._result;
      }
    }, {
      id: buttonId++,
      "class": ["btn-default"],
      action: function action() {
        return $uibModalInstance.dismiss('cancel');
      },
      icon: "glyphicon-ban-circle",
      title: _this.language.Generic.Buttons.kCancel,
      isEnabled: function isEnabled() {
        return true;
      }
    }];
    _this.title = title;
    _this.formatedData = [];
    _this._result = null;
    return _this;
  }
  _createClass(ReplaceReferenceController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      var mainField = this.model.fields.find(function (f) {
        return f.isMain;
      }).systemName;
      var nameList = this.model.data.map(function (line) {
        return line[mainField];
      });
      var message = this.language.Generic.Common.kReplacementConfirmationMessage;
      message += '<ul>';
      for (var index in nameList) {
        message += "<li>".concat(nameList[index], "</li>");
      }
      message += '</ul>';
      this.$dialogs.confirm(message.replace("{0}", this._result.fields[1].value)).then(function () {
        _this2.$uibModalInstance.close(_this2.model.sourceData.find(function (o) {
          return o.id == _this2._result.id;
        }));
      });
    }
  }, {
    key: "result",
    get: function get() {
      return this._result;
    },
    set: function set(value) {
      if (this._result != value) this._result = value;
    }
  }, {
    key: "init",
    value: function init() {
      var fields = this.model.fields.filter(function (field) {
        return !field.isHidden;
      });
      for (var index in this.model.sourceData) {
        var data = this.model.sourceData[index];
        if (this.model.data.indexOf(data) == -1) this.formatedData.push(this.map(data, fields));
      }
    }
  }, {
    key: "getMain",
    value: function getMain(data) {
      return data && data.find(function (o) {
        return o.isMain;
      }).value;
    }
  }, {
    key: "map",
    value: function map(data, fields) {
      var _this3 = this;
      var result = fields.map(function (o) {
        return {
          name: o.uiName || o.systemName,
          value: _this3.getText(data, o),
          isMain: o.isMain
        };
      }).filter(function (o) {
        return !!o.value;
      });
      return {
        id: data.id,
        fields: result
      };
    }
  }, {
    key: "getText",
    value: function getText(line, column) {
      var toCamelCase = function toCamelCase(str) {
        return str && "".concat(str[0].toLocaleLowerCase()).concat(str.slice(1));
      };
      var value = line[column.systemName];
      if (column.type === "Date") {
        var date = new Date(value);
        return this.dateUtils.date2str(date);
      }
      if (column.availableValues) {
        var cameledValue = typeof value === "string" ? toCamelCase(value) : value;
        var data = column.availableValues[cameledValue];
        return !!data ? data.name : '-';
      }
      return value;
    }
  }]);
  return ReplaceReferenceController;
}(_netcityModalCtrl.NetCityModalController);
var ReplaceReferenceComponent = {
  controller: ReplaceReferenceController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/reference/replaceReference.component.html",
  backdrop: 'static',
  size: 'lg'
};
exports.ReplaceReferenceComponent = ReplaceReferenceComponent;

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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _refBook = __webpack_require__(98);
var _refbook = __webpack_require__(99);
var _module = angular.module("irtech.netcity.admin.reference", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);
_module.service('referenceRepository', _refBook.ReferenceRepository).service("referenceBookModalFactory", _refbook.ReferenceBookModalFactory).config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise(_refbook.RefBookComponent);
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceRepository = void 0;
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
var ReferenceRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ReferenceRepository, _BaseRepository);
  var _super = _createSuper(ReferenceRepository);
  function ReferenceRepository() {
    _classCallCheck(this, ReferenceRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ReferenceRepository, [{
    key: "getReference",
    value: function getReference(type, parameterId) {
      var url = parameterId ? "/webapi/reference/".concat(type, "?parameterId=").concat(parameterId) : "/webapi/reference/".concat(type);
      return this.$http.get(url).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getReferenceTypes",
    value: function getReferenceTypes() {
      return this.$http.get("/webapi/refbook").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveReference",
    value: function saveReference(type, parameterId, referenceData) {
      var uri = parameterId ? "/webapi/reference/".concat(type, "?parameterId=").concat(parameterId) : "/webapi/reference/".concat(type);
      return this.$http.post(uri, referenceData).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteReference",
    value: function deleteReference(type, ids) {
      return this.$http["delete"]("/webapi/refbook/".concat(type), {
        params: {
          id: ids
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "replaceReference",
    value: function replaceReference(type, parameterId, ids, replaceById) {
      var options = {
        params: {
          ids: ids,
          replaceById: replaceById,
          parameterId: parameterId
        }
      };
      return this.$http.post("/webapi/refbook/".concat(type, "/replacement"), null, options).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return ReferenceRepository;
}(_repository.BaseRepository);
exports.ReferenceRepository = ReferenceRepository;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceBookModalFactory = exports.RefBookComponent = void 0;
var _editReference = __webpack_require__(100);
var _replaceReference = __webpack_require__(101);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RefBookController = /*#__PURE__*/function () {
  RefBookController.$inject = ["$scope", "$location", "$appLoader", "pageContext", "$dialogs", "referenceRepository", "referenceBookModalFactory", "language"];
  /*@ngInject*/
  function RefBookController($scope, $location, $appLoader, pageContext, $dialogs, referenceRepository, referenceBookModalFactory, language) {
    var _this = this;
    _classCallCheck(this, RefBookController);
    this.$scope = $scope;
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.referenceRepository = referenceRepository;
    this.referenceBookModalFactory = referenceBookModalFactory;
    this.language = language;
    pageContext.title = language.Generic.MenuFolders.kFNReferenceBooks;
    pageContext.parent = null;
    this.referenceType = null;
    this.$scope.$watch(function () {
      return _this.referenceType;
    }, function (newReferenceType) {
      if (!newReferenceType) return;
      //updateButton.isHidden = newReferenceType.refType == "UserInfoListItems";
      _this.referenceType = newReferenceType;
      _this.search = "";
      _this.updateTable();
      _this.$location.search({
        'refType': newReferenceType.refType,
        'parameterId': newReferenceType.parameterId
      });
      return newReferenceType;
    });
    referenceRepository.getReferenceTypes().then(function (referenceTypes) {
      return _this.referenceTypes = referenceTypes.sort(function (o) {
        return o.parameterId;
      });
    }).then(function (referenceTypes) {
      var defaultItem = angular.extend({
        refType: 'ExamTypes'
      }, $location.search());
      _this.referenceType = _.findWhere(referenceTypes, defaultItem);
    }).then(function () {
      return $appLoader.hide();
    });
    this.initButtons();
  }
  _createClass(RefBookController, [{
    key: "initButtons",
    value: function initButtons() {
      var _this2 = this;
      // Описание кнопок
      var buttonId = 0;
      var addButton = {
        id: buttonId++,
        "class": ['btn-info'],
        action: function action() {
          return _this2.create();
        },
        icon: "glyphicon-plus-sign",
        title: this.language.Generic.Common.kAdd,
        isEnabled: function isEnabled() {
          return true;
        },
        systemName: "Create",
        isHidden: false
      };
      /* // убрать кнопку "Редактирование", т.к есть ссылка на редактирование (тогда по стилю будет единообразно, как в локальных справочниках)
      let updateButton = {
          id: buttonId++,
          class: 'btn-info',
          action: () => this.update(),
          icon: "glyphicon-pencil",
          text: language.Generic.Common.kEdit,
          isEnabled: false,
          checkEnabled: () => {
              let selected = this.getSelected();
              return selected.length == 1
                  && this.checkEditEnabled(selected[0]);
          },
          systemName: "Edit",
          isHidden: false,
      };
      */
      var replaceButton = {
        id: buttonId++,
        "class": ['btn-info'],
        action: function action() {
          return _this2.replace();
        },
        icon: "glyphicon-refresh",
        title: this.language.Generic.ServAdmin.kReplace,
        isEnabled: function isEnabled() {
          var selected = _this2.getSelected();
          return selected.length > 0 && selected.findIndex(function (o) {
            return o.isUsed == "System";
          }) < 0;
        },
        systemName: "Replace",
        isHidden: false
      };
      var deleteButton = {
        id: buttonId++,
        "class": ["btn-danger"],
        action: function action() {
          return _this2["delete"]();
        },
        icon: "glyphicon-minus-sign",
        title: this.language.Generic.Common.kRemove,
        isEnabled: function isEnabled() {
          var selected = _this2.getSelected();
          return selected.length > 0 && (selected.findIndex(function (o) {
            return o.isUsed != "Free";
          }) < 0 || selected.every(function (o) {
            return o.numberOfUses === 0;
          }));
        },
        systemName: "Delete",
        isHidden: false
      };
      var clearButton = {
        id: buttonId++,
        "class": ['btn-info'],
        action: function action() {
          return _this2.clearAll();
        },
        icon: "glyphicon-unchecked",
        title: this.language.Generic.Buttons.kClearAll,
        isEnabled: function isEnabled() {
          return _this2.getSelected().length > 0;
        },
        systemName: "ClearSelected",
        isHidden: false
      };
      this.buttons = [addButton, replaceButton, deleteButton, clearButton];
      // this.$scope.$watch(() => this.getSelected()[0], () => {
      // 	$scope.buttons.forEach(button => button.isEnabled = button.checkEnabled());
      // });
      // Закончилось описание кнопок
    }
  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.reference && this.reference.data && this.reference.data.filter(function (o) {
        return o.isSelected;
      }) || [];
    }
  }, {
    key: "checkEditEnabled",
    value: function checkEditEnabled(data) {
      var isUsed = data.isUsed;
      return isUsed && this.updateEnabledOnStatus.indexOf(isUsed) >= 0 || !isUsed;
    }
  }, {
    key: "updateTable",
    value: function updateTable() {
      var _this3 = this;
      this.$appLoader.show();
      return this.referenceRepository.getReference(this.referenceType.refType, this.referenceType.parameterId).then(function (response) {
        _this3.clearAll();
        response.data = response.data; //.sort((a,b) => (a['order'] || 0) - (b['order'] || 0));
        var permissions = response.permitedActions.split(', ');
        permissions.push('ClearSelected');
        _this3.updateEnabledOnStatus = response.type.isEditableInStatus;
        _this3.buttons.forEach(function (button) {
          button.isHidden = permissions.indexOf(button.systemName) < 0;
        });
        return response;
      }).then(function (reference) {
        return _this3.reference = reference;
      }).then(function () {
        return _this3.$appLoader.hide();
      });
    }
  }, {
    key: "showModal",
    value: function showModal(data) {
      return this.referenceBookModalFactory.showEdit(data, this.referenceType.name, this.referenceType);
    }
  }, {
    key: "create",
    value: function create() {
      this.showUpdateWindow(this.reference.fields);
    }
  }, {
    key: "update",
    value: function update() {
      var _this4 = this;
      var selected = this.getSelected();
      var prepareDate = function prepareDate(line) {
        var data = angular.copy(_this4.reference.fields);
        for (var index in data) {
          var prop = data[index];
          prop.value = line[prop.systemName];
        }
        return data;
      };
      var data = prepareDate(selected[0]);
      this.showUpdateWindow(data);
    }
  }, {
    key: "showUpdateWindow",
    value: function showUpdateWindow(model) {
      var _this5 = this;
      var self = this;
      return this.showModal(model).then(function () {
        return _this5.updateTable();
      });
    }
  }, {
    key: "editLink",
    value: function editLink(data) {
      if (!this.checkEditEnabled(data)) return;
      return this.showUpdateWindow(data);
    }
  }, {
    key: "replace",
    value: function replace() {
      var _this6 = this;
      var getField = function getField(fields, name) {
        return fields.find(function (o) {
          return o.systemName == name;
        });
      };
      var ids = this.getSelected().map(function (line) {
        return line.id;
      });
      var data = this.reference.data.filter(function (o) {
        return ids.indexOf(o.id) >= 0;
      });
      var model = {
        data: data,
        fields: angular.copy(this.reference.fields),
        pageSize: 10,
        isReplaceable: false,
        noDataMessage: null,
        type: angular.copy(this.reference.type),
        sourceData: this.reference.data
      };
      getField(model.fields, "id").isHidden = false;
      this.referenceBookModalFactory.showReplace(model, this.referenceType.name).then(function (result) {
        _this6.$appLoader.show();
        var type = _this6.referenceType.refType;
        var parameterId = _this6.referenceType.parameterId;
        var replaceById = result.id;
        var ids = data.map(function (o) {
          return o.id;
        }).filter(function (o) {
          return o != replaceById;
        });
        if (ids.length == 0) return;
        _this6.search = "";
        return _this6.referenceRepository.replaceReference(type, parameterId, ids, replaceById);
      }).then(function () {
        _this6.$appLoader.hide();
        var updateResult = _this6.updateTable();
        return updateResult;
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this7 = this;
      var type = this.referenceType.refType;
      var selected = this.getSelected();
      var ids = selected.map(function (line) {
        return line.id;
      });
      var mainField = this.reference.fields.find(function (f) {
        return f.isMain;
      }).systemName;
      var nameList = selected.map(function (line) {
        return line[mainField];
      });
      var message = this.language.Generic.ServAdmin.kConfirmDeleteChosenList;
      message += '<ul>';
      for (var index in nameList) {
        message += "<li>".concat(nameList[index], "</li>");
      }
      message += '</ul>';
      message += this.language.Generic.ServAdmin.kConfirmDeleteCount + ": " + nameList.length + ". ";
      message += this.reference.type.messages.deleteConfirm || this.language.Generic.Common.kMsgAreYouSure;
      return this.$dialogs.confirm(message).then(function () {
        _this7.$appLoader.show();
        return _this7.referenceRepository.deleteReference(type, ids).then(function () {
          _this7.$appLoader.hide();
          var updateResult = _this7.updateTable();
          return updateResult;
        });
      })["catch"](function () {});
    }
  }, {
    key: "onSelect",
    value: function onSelect(data) {
      var id = data.find(function (f) {
        return f.systemName == "id";
      }).value;
      var item = this.reference.data.find(function (o) {
        return o.id == id;
      });
      if (item.isUsed == "Used" || item.numberOfUses > 0) {
        this.clearAll();
      }
      if (item.isUsed == "Free" && this.getSelected().findIndex(function (o) {
        return o.isUsed == "Used";
      }) >= 0 || item.numberOfUses == 0 && this.getSelected().findIndex(function (o) {
        return o.numberOfUses > 0;
      }) >= 0) {
        this.clearAll();
      }
      item.isSelected = !item.isSelected;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      var list = this.reference && this.reference.data;
      for (var index in list) list[index].isSelected = false;
    }
  }]);
  return RefBookController;
}();
var ReferenceBookModalFactory = /*#__PURE__*/function () {
  ReferenceBookModalFactory.$inject = ["$uibModal"];
  /*@ngInject*/
  function ReferenceBookModalFactory($uibModal) {
    _classCallCheck(this, ReferenceBookModalFactory);
    this.$uibModal = $uibModal;
  }
  _createClass(ReferenceBookModalFactory, [{
    key: "showEdit",
    value: function showEdit(_model, _title, _referenceType) {
      var resolve = {
        resolve: {
          model: function model() {
            return _model;
          },
          title: function title() {
            return _title;
          },
          referenceType: function referenceType() {
            return _referenceType;
          }
        }
      };
      var component = angular.extend({}, resolve, _editReference.EditReferenceComponent);
      return this.$uibModal.open(component).result;
    }
  }, {
    key: "showReplace",
    value: function showReplace(_model2, _title2) {
      var resolve = {
        resolve: {
          model: function model() {
            return _model2;
          },
          title: function title() {
            return _title2;
          }
        }
      };
      var component = angular.extend({}, resolve, _replaceReference.ReplaceReferenceComponent);
      return this.$uibModal.open(component).result;
    }
  }]);
  return ReferenceBookModalFactory;
}();
exports.ReferenceBookModalFactory = ReferenceBookModalFactory;
var RefBookComponent = {
  controller: RefBookController,
  controllerAs: "$ctrl",
  templateUrl: '/static/dist/app/admin/reference/refbook.component.html',
  reloadOnSearch: false
};
exports.RefBookComponent = RefBookComponent;

/***/ })

/******/ });