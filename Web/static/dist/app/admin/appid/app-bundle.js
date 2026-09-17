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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//angular = require 'angular'
var _module = angular.module("irtech.netcity.admin.appid", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);

__webpack_require__(78);

__webpack_require__(79);

__webpack_require__(79);

_module.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/index", {
    templateUrl: "/static/dist/app/admin/serversettings/appid/template.html",
    controller: "appIdController"
  }).otherwise({
    templateUrl: "/static/dist/app/admin/serversettings/appid/template.html",
    controller: "appIdController"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var appIdController = function appIdController($scope, appIdRepository, $appLoader, $q, $dialogs, changeTracker) {
  $scope.$parent.page = {
    title: language.Generic.ServAdmin.kServerTrustedCodes,
    parent: {
      title: language.Generic.MenuFolders.kFNAppSettings,
      href: "/asp/administration/options.asp"
    },
    back: {
      history: true
    },
    leaveConfirmFunc: null
  };

  $scope.$parent.page.leaveConfirmFunc = function (leave) {
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

angular.module("irtech.netcity.admin.appid").controller("appIdController", appIdController);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository($http, $dialogs, $alerts) {
    _classCallCheck(this, BaseRepository);

    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
  }

  _createClass(BaseRepository, [{
    key: "handleError",
    value: function handleError(response) {
      alert(response.data.message || response.data.details);
      return response;
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      return response.data;
    }
  }]);

  return BaseRepository;
}();

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
}(BaseRepository);

angular.module("irtech.netcity.admin.appid").factory("appIdRepository", function ($http, $dialogs, $alerts) {
  return new AppIdRepository($http, $dialogs, $alerts);
});

/***/ })

/******/ });