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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;

var _commonError = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      $(document).trigger("closeProcessing");
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

      return new _commonError.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
    }
  }]);

  return BaseRepository;
}();

exports.BaseRepository = BaseRepository;
BaseRepository.$inject = ["$http", "$dialogs", "$alerts"];

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CommonXhrErrorHandler = /*#__PURE__*/function () {
  function CommonXhrErrorHandler(errorInformer, messageInformer) {
    _classCallCheck(this, CommonXhrErrorHandler);

    this.errorInformer = errorInformer || $.show.error;
    this.messageInformer = messageInformer || $.show.message;
  }

  _createClass(CommonXhrErrorHandler, [{
    key: "getErrorResponseMessage",
    value: function getErrorResponseMessage(response) {
      if (response.status === 401) {
        var authError = response.headers("auth-error");

        if (authError === "SessionExpired") {
          return language.Generic.Common.kTimeOutOccured4Ajax;
        } else {
          return language.Generic.Common.kErrPageAccess;
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
      var environment = window && window.appContext && window.appContext.environment;

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

      return displayMsg || language.Generic.Common.kUnexpErr;
    }
  }, {
    key: "handleErrorResponse",
    value: function handleErrorResponse(response) {
      $(document).trigger("closeProcessing");

      if (response.status === 401) {
        var authError = response.headers("auth-error");

        if (authError === "SessionExpired") {
          this.messageInformer(language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return window.postTo({
              path: "/",
              method: "GET"
            });
          });
        } else {
          this.messageInformer(language.Generic.Common.kErrPageAccess);
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
      var environment = window && window.appContext && window.appContext.environment;

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

      this.errorInformer(displayMsg || language.Generic.Common.kUnexpErr);
      return Promise.reject(response);
    }
  }]);

  return CommonXhrErrorHandler;
}();

exports.CommonXhrErrorHandler = CommonXhrErrorHandler;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;

var _baseRepository = __webpack_require__(21);

var _repository = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
      return this.$http.post("/webapi/addresses/cities", {
        ids: ids
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
      return this.$http.post("/webapi/addresses/provinces", {
        ids: ids
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
    key: "getSchoolsAddressInfo",
    value: function getSchoolsAddressInfo(filter) {
      return this.$http.post("/webapi/addresses/schools", filter).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressInfo",
    value: function getSchoolAddressInfo(schoolId) {
      return this.$http.get("/webapi/addresses/schools/" + schoolId).then(this.handleResponse, this.handleError);
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
        var id = filter.id;
        filter.id = null;
        return this.$http.post("/webapi/addresses/municipalityDistricts", {
          id: id
        }, {
          params: filter
        }).then(this.handleResponse, this.handleError);
      }

      return this.$http.get("/webapi/addresses/municipalityDistricts", {
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

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;

var _commonError = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

      return new _commonError.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetCityModalController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(82);

var _authClients = __webpack_require__(90);

var _authClients2 = __webpack_require__(92);

var _module = angular.module("irtech.netcity.admin.authclients", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ui.tree", "irtech.netcity.ui-components"]);

/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/", _authClients.AuthClientsComponent).otherwise(_authClients.AuthClientsComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};

config.$inject = ["$routeProvider", "$locationProvider"];

_module.service("authClientsRepository", _authClients2.AuthClientsRepository).config(config);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _repositories = __webpack_require__(20);

var _selectOrgs = __webpack_require__(83);

var _selectOrgs2 = __webpack_require__(86);

var _selectedOrgs = __webpack_require__(89);

var _module = angular.module('irtech.netcity.ui-components');

_module.component(_selectOrgs2.SelectOrganizationsComponent.selector, _selectOrgs2.SelectOrganizationsComponent).component(_selectedOrgs.SelectedOrgsLevelViewComponent.selector, _selectedOrgs.SelectedOrgsLevelViewComponent).component(_selectedOrgs.SelectedOrgsViewComponent.selector, _selectedOrgs.SelectedOrgsViewComponent).service("educOrganizationsRepository", _repositories.EducOrganizationsRepository).service("addressRepository", _repositories.AddressRepository).service("selectOrgsService", _selectOrgs.SelectOrgsService);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsService = void 0;

var _selectOrgsModal = __webpack_require__(84);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
    } // Получение организаций и мест расположения

  }, {
    key: "loadOrganizations",
    value: function loadOrganizations(filter) {
      var _this3 = this;

      this.$longWork.show();
      return this.educOrganizationsRepository.getSchoolsAddressInfo(filter).then(function (organizations) {
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrgsModalComponent = void 0;

var Modes = _interopRequireWildcard(__webpack_require__(85));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ 85:
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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrganizationsComponent = void 0;

var FuncTypes = _interopRequireWildcard(__webpack_require__(87));

var _organizationTreeLevels = __webpack_require__(88);

var Modes = _interopRequireWildcard(__webpack_require__(85));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  SelectOrganizationsController.$inject = ["$scope", "addressRepository", "language", "$q"];

  /*@ngInject*/
  function SelectOrganizationsController($scope, addressRepository, language, $q) {
    var _this = this;

    _classCallCheck(this, SelectOrganizationsController);

    this.$scope = $scope;
    this.addressRepository = addressRepository;
    this.language = language;
    this.$q = $q;
    this["default"] = [];
    this.filter = "";
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
  }

  _createClass(SelectOrganizationsController, [{
    key: "updateOrganizations",
    value: function updateOrganizations() {
      this.organizations = this.checkChildrens(angular.copy(this["default"]));
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
    } // Функция передачи выбранных на уровень выше

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
      this.hasSelected = result.selectedIds.length > 0; // Передать результат верхнему контроллеру

      this.onUpdate({
        selected: result
      });
    } // Настройки

  }, {
    key: "getCompareFunction",
    value: function getCompareFunction() {
      var order = this.settings.order; // Если сортировка не указана, то неменяем порядок

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
      var _this2 = this;

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
          return _this2.schoolsIds.indexOf(o.id) > -1;
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
            typeName: element.atoTypeName
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

      this.$q.all([provincePromise, cityPromise]).then(function () {
        return {
          provinces: provinces,
          cities: cities,
          filteredOrgs: filteredOrgs
        };
      }) // Дополнение информацией о ветках
      .then(function (data) {
        var organizations = data.filteredOrgs;
        var cities = data.cities;
        var provinces = data.provinces; // Дополняем модель названиями

        angular.forEach(organizations, function (organization) {
          var orgLevelInfo = organization;

          try {
            orgLevelInfo.funcTypeLevel = {
              id: organization.funcType,
              name: "".concat(_this2.language.Generic.Common.kEOType, " ").concat(FuncTypes.locale[organization.funcType]),
              type: _organizationTreeLevels.LevelType.functype
            };
            orgLevelInfo.cityLevel = {
              id: organization.cityId,
              name: "".concat(cities[organization.cityId].typeName || _this2.language.Generic.Common.kCity, " ").concat(cities[organization.cityId].name),
              type: _organizationTreeLevels.LevelType.city
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
                name: "".concat(_this2.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name),
                type: _organizationTreeLevels.LevelType.province
              };
              orgLevelInfo.munDistrictLevel.name = "".concat(_this2.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name);
            } else {
              var municipalityCity = cities[organization.parentCityId || organization.cityId]; // orgLevelInfo.provinceLevel = {
              // 	id: -municipalityCity.id, // Городской округ
              // 	name: `${this.language.Generic.Common.kCityMunicipalityDistrict} ${municipalityCity.name}`,
              // 	type: LevelType.city
              // };
              // Если можно в одиной ветке совместить тип образовательной организации и населённый пункт, то раскоментировать
              //organization.cityLevel = null;

              orgLevelInfo.munDistrictLevel.name = "".concat(_this2.language.Generic.Common.kCityMunicipalityDistrict, " ").concat(municipalityCity.name);
            }

            orgLevelInfo.type = _organizationTreeLevels.LevelType.educOrganization;
          } catch (ex) {
            console.error(ex.name + ": " + ex.message);
          } finally {}
        });

        var compareFunction = _this2.getCompareFunction();

        var orderFunction = function orderFunction(a, b) {
          return compareFunction(a.level, b.level);
        };

        var treePropGetters = [// сортировка дерева
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
        }]; // Глубина раскрытия списка организаций
        // const maxExpandDepth = 3;
        // for (let index in treePropGetters) {
        // 	let getterObject: PropGetter = treePropGetters[index];
        // 	if (getterObject) {
        // 		getterObject.expand = parseInt(index) < maxExpandDepth
        // 	}
        // }
        // Преобразование в дерево

        var organizationsList = _this2.mapBranch(organizations, treePropGetters.reverse());

        return organizationsList;
      }) // Инициазлизация дерева
      .then(function (organizationsTree) {
        return _this2["default"] = copy(organizationsTree);
      });
    } // Преобразование линейного массива в ветку

  }, {
    key: "mapBranch",
    value: function mapBranch(data, branchFuncs) {
      var _this3 = this;

      var tuple = branchFuncs.pop();
      var func = tuple.prop; //console.log("mapbranch", tuple.level);

      var getSubTree = function getSubTree(treeItem, elements) {
        var copyBranchFuncs = [];
        copyBranchFuncs.push.apply(copyBranchFuncs, _toConsumableArray(branchFuncs));

        if (tuple.level == _organizationTreeLevels.Levels.municipalityDistrict && treeItem.id > 0) {
          //для муниципальных районов убираем из дерева уровень "населенный пункт"
          var removedLevel = copyBranchFuncs.pop();
          elements.forEach(function (o) {
            var cityLevelInfo = removedLevel.prop(o);
            o.name = o.name + " (" + cityLevelInfo.name + ")";
          });
        }

        return _this3.mapBranch(elements, copyBranchFuncs);
      };

      var getBranch = function getBranch(elements, keyString) {
        var key = tuple.level === _organizationTreeLevels.Levels.educOrganization ? elements[0] : JSON.parse(keyString);
        var result = {
          id: key.id,
          title: key.name,
          isFolder: !!branchFuncs.length,
          level: tuple.level,
          expand: tuple.expand,
          own: elements,
          key: "".concat(tuple.level, "-").concat(key.type, "-").concat(key.id),
          select: false
        };

        if (result.isFolder) {
          result.children = getSubTree(result, elements);
        } else {
          result.select = _this3.schoolsIds.indexOf(result.id) >= 0;
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
      } //console.log("mapbranch result", tuple.level, branch);


      return branch;
    } // Фильтрация

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
      var _this4 = this;

      if (!this.filter) return branch;
      return branch.filter(function (b) {
        return _this4.checkChildren(b);
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
    inputOrganizations: "<organizations",
    settings: '<',
    onUpdate: '&'
  }
};
exports.SelectOrganizationsComponent = SelectOrganizationsComponent;

/***/ }),

/***/ 87:
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.province = exports.functype = exports.educOrganization = exports.city = exports.Levels = exports.LevelType = void 0;
var educOrganization = 1;
exports.educOrganization = educOrganization;
var functype = 2;
exports.functype = functype;
var city = 4;
exports.city = city;
var province = 8;
exports.province = province;
var Levels;
exports.Levels = Levels;

(function (Levels) {
  Levels[Levels["educOrganization"] = 1] = "educOrganization";
  Levels[Levels["functype"] = 2] = "functype";
  Levels[Levels["city"] = 4] = "city";
  Levels[Levels["province"] = 8] = "province";
  Levels[Levels["municipalityDistrict"] = 10] = "municipalityDistrict";
})(Levels || (exports.Levels = Levels = {}));

var LevelType;
exports.LevelType = LevelType;

(function (LevelType) {
  LevelType["educOrganization"] = "organization";
  LevelType["functype"] = "funcType";
  LevelType["city"] = "city";
  LevelType["municipalityDistrict"] = "municipalityDistrict";
  LevelType["province"] = "province";
})(LevelType || (exports.LevelType = LevelType = {}));

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedOrgsViewComponent = exports.SelectedOrgsLevelViewComponent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      this.$scope.$applyAsync(); // let getName = (object) => !!object ? object.name : "";
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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClientsComponent = void 0;

var _selectable = _interopRequireDefault(__webpack_require__(48));

var _editAuthClients = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var AuthClientsCtrl = /*#__PURE__*/function () {
  AuthClientsCtrl.$inject = ["language", "pageContext", "$appLoader", "$dialogs", "$uibModal", "$alerts", "selectOrgsService", "authClientsRepository"];

  /*@ngInject*/
  function AuthClientsCtrl(language, pageContext, $appLoader, $dialogs, $uibModal, $alerts, selectOrgsService, authClientsRepository) {
    _classCallCheck(this, AuthClientsCtrl);

    this.language = language;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.selectOrgsService = selectOrgsService;
    this.authClientsRepository = authClientsRepository;
    this.selection = new _selectable["default"]();
    pageContext.title = this.language.Generic.ServAdmin.kAuthClients;
    pageContext.parent = {
      title: this.language.Generic.MenuFolders.kFNAppSettings,
      href: "/angular/admin/serversettings/"
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

      this.$appLoader.show();
      this.selection.select(null);
      this.data = [];
      this.authClientsRepository.getAuthClients().then(function (data) {
        _this.data = data;

        _this.data.forEach(function (x) {
          x.allowedAuthTypes = _this.getAllowedAuthTypes(x);
        });

        _this.$appLoader.hide();
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
        _this3.$appLoader.show();

        return _this3.authClientsRepository.deleteAuthClient(authClient.id);
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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAuthClientsComponent = void 0;

var _netcityModalCtrl = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    $uibModalInstance.rendered.then(function () {
      return _this.$onModalRendered();
    });

    if (authClient.id >= 0) {
      _this.mode = "edit";
      _this.header = language.Generic.ServAdmin.kEditAuthClient;
      _this.selected = {
        selectedIds: authClient.schoolsInfo.schoolIds
      };
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
          title: this.language.Generic.Buttons.kSave
        });
      } else {
        this.buttons.push({
          action: function action() {
            return _this3.edit();
          },
          icon: "glyphicon glyphicon-floppy-save",
          title: this.language.Generic.Buttons.kSave
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

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthClientsRepository = void 0;

var _repository = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

/***/ })

/******/ });