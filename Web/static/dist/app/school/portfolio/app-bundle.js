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
/******/ 	return __webpack_require__(__webpack_require__.s = 265);
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(266);


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classes = __webpack_require__(32);
var _portfolio = __webpack_require__(267);
var _editPortfolioMembers = __webpack_require__(268);
var _editPortfolioLeaders = __webpack_require__(270);
var _editPortfolioRights = __webpack_require__(272);
var _editProjectPortfolio = __webpack_require__(273);
var _editPersonalPortfolio = __webpack_require__(281);
var _module = angular.module("irtech.netcity.school.portfolio", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", "irtech.netcity.school.portfolio.common"]);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/personal/", {
    templateUrl: "/static/dist/app/school/portfolio/personal/view/template.html",
    controller: "ViewPersonalPortfoliosCtrl"
  }).when("/personal/see", {
    templateUrl: "/static/dist/app/school/portfolio/personal/view/template.html",
    controller: "ViewPersonalPortfoliosCtrl",
    see: true
  }).when("/personal/:portfolioId/rights/", _editPortfolioRights.EditPortfolioRightsComponent).when("/personal/:portfolioId/edit", _editPersonalPortfolio.EditPersonalPortfolioComponent).when("/projects/", {
    templateUrl: "/static/dist/app/school/portfolio/projects/list/template.html",
    controller: "ListProjectPortfoliosCtrl"
  }).when("/projects/:portfolioId", {
    templateUrl: "/static/dist/app/school/portfolio/projects/view/template.html",
    controller: "ViewProjectPortfoliosCtrl"
  }).when("/:portfolioId/edit", _editProjectPortfolio.EditProjectPortfolioComponent).when("/:portfolioId/members", {
    templateUrl: "/static/dist/app/school/portfolio/projects/members/template.html",
    controller: "PortfolioMembersCtrl"
  }).when("/:portfolioId/members/edit", _editPortfolioMembers.EditPortfolioMembersComponent).when("/:portfolioId/leaders/", {
    templateUrl: "/static/dist/app/school/portfolio/projects/leaders/template.html",
    controller: "PortfolioLeadersCtrl"
  }).when("/:portfolioId/leaders/edit", _editPortfolioLeaders.EditPortfolioLeadersComponent).otherwise({
    templateUrl: "/static/dist/app/school/portfolio/projects/list/template.html",
    controller: "ListProjectPortfoliosCtrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
_module.filter("extension", function () {
  return function (input) {
    return input ? input.split(".").pop() : "";
  };
});
_module.service("classesRepository", _classes.ClassesRepository).service("portfolioRepository", _portfolio.PortfolioRepository).config(config);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioRepository = void 0;
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioMemberUserType = exports.EditPortfolioMembersComponent = void 0;
var _treeEqualizer = _interopRequireDefault(__webpack_require__(269));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PortfolioMemberUserType;
exports.PortfolioMemberUserType = PortfolioMemberUserType;
(function (PortfolioMemberUserType) {
  PortfolioMemberUserType[PortfolioMemberUserType["All"] = -1] = "All";
  PortfolioMemberUserType[PortfolioMemberUserType["Staffs"] = 1] = "Staffs";
  PortfolioMemberUserType[PortfolioMemberUserType["Admins"] = 2] = "Admins";
  PortfolioMemberUserType[PortfolioMemberUserType["Principals"] = 3] = "Principals";
  PortfolioMemberUserType[PortfolioMemberUserType["Teachers"] = 4] = "Teachers";
  PortfolioMemberUserType[PortfolioMemberUserType["Students"] = 5] = "Students";
  PortfolioMemberUserType[PortfolioMemberUserType["Parents"] = 6] = "Parents";
})(PortfolioMemberUserType || (exports.PortfolioMemberUserType = PortfolioMemberUserType = {}));
var EditPortfolioMembersController = /*#__PURE__*/function () {
  EditPortfolioMembersController.$inject = ["$scope", "$http", "$q", "appContext", "$appLoader", "$alerts", "$longWork", "$routeParams", "changeTracker", "classesRepository", "language"];
  /*@ngInject*/
  function EditPortfolioMembersController($scope, $http, $q, appContext, $appLoader, $alerts, $longWork, $routeParams, changeTracker, classesRepository, language) {
    var _this = this;
    _classCallCheck(this, EditPortfolioMembersController);
    this.$http = $http;
    this.$q = $q;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.classesRepository = classesRepository;
    this.language = language;
    this.filter = {
      items: {
        groups: [],
        userTypes: [],
        schoolClasses: []
      },
      selected: {
        //schoolId: -1,
        school: {
          id: 0,
          text: ""
        },
        groupId: -1,
        userType: PortfolioMemberUserType.All,
        studentClass: -1
      },
      ready: function ready() {
        return _this.filter.selected.school && _this.filter.selected.school.id > 0;
      }
    };
    this.data = {
      portfolioId: 0,
      accessTypes: [],
      members: [],
      selected: [],
      users: [],
      inheritance: false
    };
    this.paging = {
      page: 1,
      pageSize: 20,
      totalcount: 0,
      show: false
    };
    this.state = {
      ready: false,
      dataLoaded: false,
      dataChanged: false
    };
    this.organizationsOptions = {
      minimumInputLength: 2,
      initSelection: function initSelection(element, callback) {
        callback(_this.filter.selected.school);
      },
      ajax: {
        url: "/webapi/schools/search",
        delay: 250,
        cache: true,
        type: "GET",
        dataType: "json",
        escapeMarkup: function escapeMarkup(markup) {
          return markup;
        },
        params: {
          contentType: "application/json"
        },
        data: function data(params) {
          return {
            at: _this.appContext.at,
            name: params.term
          };
        },
        processResults: function processResults(data, query) {
          var items = data.map(function (s) {
            return {
              id: s.id,
              text: s.name
            };
          });
          return {
            results: items
          };
        }
      }
    };
    $scope.$parent.page = {
      parent: {
        title: this.language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
        href: "projects"
      },
      back: {
        history: true
      },
      title: this.language.Generic.SetupSchoolPortfolio.kPortfolioMembersEditing
    };
    this.data.portfolioId = parseInt($routeParams.portfolioId);
    this.filter.selected.school = {
      id: parseInt(appContext.schoolId),
      text: appContext.fullSchoolName
    };
    this.filter.selected.groupId = parseInt($routeParams.groupId) || -1;
    this.filter.selected.userType = parseInt($routeParams.userType) || -1;
    var prepareSchool = $http.get("/webapi/schools/short", {
      params: {
        id: this.filter.selected.school.id,
        withCityName: true
      }
    }).then(function (response) {
      var schoolInfo = response.data[0];
      _this.filter.selected.school.text = schoolInfo.name;
    });
    var getUserTypes = $http.get("/webapi/portfolios/refs/userTypes").then(function (response) {
      _this.filter.items.userTypes = response.data;
    });
    var getAccessTypes = $http.get("/webapi/portfolios/refs/accessTypes").then(function (response) {
      _this.data.accessTypes = response.data;
      _this.data.accessTypes.push({
        id: -1,
        key: null,
        name: "Не выбрано",
        order: 3
      });
    });
    var getGroups = $http.get("/webapi/portfolios/".concat(this.data.portfolioId, "/groups")).then(function (response) {
      var equalizer = new _treeEqualizer["default"](response.data, function (g) {
        return g.order;
      });
      _this.filter.items.groups = equalizer.execute();
      _this.filter.items.groups.unshift({
        id: -1,
        treeItemName: "Все разделы"
      });
    });
    this.$q.all([prepareSchool, getUserTypes, getAccessTypes, getGroups]).then(function () {
      _this.changeUserType();
      _this.state.ready = true;
      _this.$appLoader.hide();
    });
  }
  _createClass(EditPortfolioMembersController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var schoolId = this.filter.selected.school.id;
      var groupId = this.filter.selected.groupId;
      var classId = this.filter.selected.studentClass;
      var params = {
        schoolId: schoolId,
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userType: this.filter.selected.userType
      };
      if (classId > 0) {
        params.classId = classId;
      }
      this.$longWork.show();
      var loadRights = this.$http.get("/webapi/portfolios/".concat(this.data.portfolioId, "/members"), {
        params: {
          schoolId: params.schoolId,
          groupId: groupId
        }
      }).then(function (response) {
        _this2.data.members = response.data;
      });
      var loadMembers = this.$http.get("/webapi/portfolios/members", {
        params: params
      }).then(function (response) {
        _this2.data.users = response.data;
        _this2.paging.totalcount = parseInt(response.headers("count"));
        _this2.paging.show = _this2.paging.totalcount > _this2.paging.pageSize;
      })["catch"](function (response) {
        _this2.$longWork.close();
        _this2.$alerts.error(response.data.message, response.data.details);
      });
      ;
      this.$q.all([loadRights, loadMembers]).then(function () {
        _this2.data.users = _this2.data.users.map(function (user) {
          var member = _this2.data.members.find(function (x) {
            return x.userId == user.id;
          });
          if (member) {
            user.accessType = member.accessType;
          } else {
            user.accessType = null;
          }
          return user;
        });
        _this2.$longWork.close();
        _this2.state.dataLoaded = true;
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var setMembers = this.data.members.filter(function (member) {
        return member.accessType !== null;
      });
      var schoolId = this.filter.selected.school.id;
      var params = {};
      if (this.data.inheritance) {
        params.inheritance = true;
      }
      if (this.filter.selected.groupId > 0) {
        params.groupId = this.filter.selected.groupId;
      }
      if (schoolId > 0) {
        params.schoolId = schoolId;
      }
      if (this.filter.selected.studentClass > 0) {
        params.classId = this.filter.selected.studentClass;
      }
      this.$longWork.show();
      this.$http.put("/webapi/portfolios/".concat(this.data.portfolioId, "/members"), setMembers, {
        params: params
      }).then(function () {
        _this3.changeTracker.clearDataChanges();
        _this3.state.dataChanged = false;
        _this3.$longWork.close();
        _this3.$alerts.success("Участники успешно сохранены");
      })["catch"](function (response) {
        _this3.$longWork.close();
        _this3.$alerts.error(response.data.message, response.data.details);
      });
    }
  }, {
    key: "setAccessType",
    value: function setAccessType(user, accessType) {
      user.accessType = accessType;
      var member = this.data.members.find(function (x) {
        return x.userId == user.id;
      });
      if (member) {
        member.accessType = accessType;
      } else {
        this.data.members.push({
          userId: user.id,
          accessType: accessType
        });
      }
      this.state.dataChanged = true;
    }
  }, {
    key: "displayClassFilter",
    value: function displayClassFilter() {
      var schoolId = this.filter.selected.school && this.filter.selected.school.id;
      if (schoolId != parseInt(this.appContext.schoolId)) {
        return false;
      }
      return this.filter.selected.userType == PortfolioMemberUserType.Students || this.filter.selected.userType == PortfolioMemberUserType.Parents;
    }
  }, {
    key: "changeUserType",
    value: function changeUserType() {
      var _this4 = this;
      if (this.displayClassFilter()) {
        this.classesRepository.getYearClasses({}).then(function (classes) {
          _this4.filter.items.schoolClasses = classes;
          _this4.filter.selected.studentClass = classes[0].id;
        });
      }
    }
  }]);
  return EditPortfolioMembersController;
}();
var EditPortfolioMembersComponent = {
  controller: EditPortfolioMembersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/projects/members/edit/editPortfolioMembers.component.html"
};
exports.EditPortfolioMembersComponent = EditPortfolioMembersComponent;

/***/ }),

/***/ 269:
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
var TreeEqualizer = /*#__PURE__*/function () {
  function TreeEqualizer(tree, sorter) {
    _classCallCheck(this, TreeEqualizer);
    this.tree = tree;
    this.sorter = sorter;
  }
  _createClass(TreeEqualizer, [{
    key: "execute",
    value: function execute(excludeGroup) {
      var _this = this;
      var groupReducer = function groupReducer(memo, group) {
        group.treeItemName = "";
        for (var i = 1; i < memo.level; i++) {
          group.treeItemName += "\xA0\xA0\xA0\xA0";
        }
        group.treeItemName += group.name;
        group.treeLevel = memo.level;
        if (group === excludeGroup) {
          return {
            groups: memo.groups,
            level: memo.level
          };
        }
        memo.groups = memo.groups.concat([group]);
        var sortedGroups = _.sortBy(group.groups, _this.sorter);
        var reduceRes = _.reduce(sortedGroups, groupReducer, {
          groups: [],
          level: memo.level + 1
        });
        return {
          groups: memo.groups.concat(reduceRes.groups),
          level: memo.level
        };
      };
      var sortedGroups = _.sortBy(this.tree, this.sorter);
      var res = _.reduce(sortedGroups, groupReducer, {
        groups: [],
        level: 1
      });
      return res.groups;
    }
  }]);
  return TreeEqualizer;
}();
exports["default"] = TreeEqualizer;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPortfolioLeadersComponent = void 0;
var _editRights = __webpack_require__(271);
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
var EditPortfolioLeadersController = /*#__PURE__*/function (_EditRightsController) {
  _inherits(EditPortfolioLeadersController, _EditRightsController);
  var _super = _createSuper(EditPortfolioLeadersController);
  function EditPortfolioLeadersController() {
    _classCallCheck(this, EditPortfolioLeadersController);
    return _super.apply(this, arguments);
  }
  _createClass(EditPortfolioLeadersController, [{
    key: "initPage",
    value: function initPage() {
      this.$scope.$parent.page = {
        parent: {
          title: this.language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
          href: "projects"
        },
        back: {
          history: true
        },
        title: this.language.Generic.SetupSchoolPortfolio.kPortfolioLeaders
      };
    }
  }, {
    key: "initSelected",
    value: function initSelected() {
      return this.$http.get("/webapi/portfolios/".concat(this.data.portfolioId, "/leaders")).then(function (response) {
        return response.data.map(function (o) {
          return {
            id: o.userId,
            name: o.nickName
          };
        });
      });
    }
  }, {
    key: "saveSpecific",
    value: function saveSpecific() {
      var _this = this;
      var setLeaders = this.data.selected.map(function (o) {
        if (!o.id) return o;
        return {
          userId: o.id,
          nickName: o.name
        };
      });
      return this.$http.put("/webapi/portfolios/".concat(this.data.portfolioId, "/leaders"), setLeaders).then(function () {
        _this.$alerts.success("Руководители успешно сохранены");
      });
    }
  }]);
  return EditPortfolioLeadersController;
}(_editRights.EditRightsController);
var EditPortfolioLeadersComponent = Object.assign({}, _editRights.EditRightsComponent, {
  controller: EditPortfolioLeadersController
});
exports.EditPortfolioLeadersComponent = EditPortfolioLeadersComponent;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioMemberUserType = exports.EditRightsController = exports.EditRightsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PortfolioMemberUserType;
exports.PortfolioMemberUserType = PortfolioMemberUserType;
(function (PortfolioMemberUserType) {
  PortfolioMemberUserType[PortfolioMemberUserType["All"] = -1] = "All";
  PortfolioMemberUserType[PortfolioMemberUserType["Staffs"] = 1] = "Staffs";
  PortfolioMemberUserType[PortfolioMemberUserType["Admins"] = 2] = "Admins";
  PortfolioMemberUserType[PortfolioMemberUserType["Principals"] = 3] = "Principals";
  PortfolioMemberUserType[PortfolioMemberUserType["Teachers"] = 4] = "Teachers";
  PortfolioMemberUserType[PortfolioMemberUserType["Students"] = 5] = "Students";
  PortfolioMemberUserType[PortfolioMemberUserType["Parents"] = 6] = "Parents";
})(PortfolioMemberUserType || (exports.PortfolioMemberUserType = PortfolioMemberUserType = {}));
var EditRightsController = /*#__PURE__*/function () {
  EditRightsController.$inject = ["$scope", "$http", "$q", "appContext", "$appLoader", "$alerts", "$longWork", "$routeParams", "changeTracker", "classesRepository", "language"];
  /*@ngInject*/
  function EditRightsController($scope, $http, $q, appContext, $appLoader, $alerts, $longWork, $routeParams, changeTracker, classesRepository, language) {
    var _this = this;
    _classCallCheck(this, EditRightsController);
    this.$scope = $scope;
    this.$http = $http;
    this.$q = $q;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.classesRepository = classesRepository;
    this.language = language;
    this.filter = {
      items: {
        userTypes: [],
        schoolClasses: []
      },
      selected: {
        viewAccess: true,
        school: {
          id: 0,
          text: ""
        },
        groupId: -1,
        userType: PortfolioMemberUserType.All,
        studentClass: -1
      },
      ready: function ready() {
        return _this.filter.selected.school && _this.filter.selected.school.id > 0;
      }
    };
    this.data = {
      portfolioId: 0,
      selected: [],
      users: []
    };
    this.paging = {
      page: 1,
      pageSize: 20,
      totalcount: 0,
      show: false
    };
    this.state = {
      ready: false,
      dataLoaded: false,
      dataChanged: false
    };
    this.organizationsOptions = {
      minimumInputLength: 2,
      initSelection: function initSelection(element, callback) {
        callback(_this.filter.selected.school);
      },
      ajax: {
        url: "/webapi/schools/search",
        delay: 250,
        cache: true,
        type: "GET",
        dataType: "json",
        escapeMarkup: function escapeMarkup(markup) {
          return markup;
        },
        params: {
          contentType: "application/json"
        },
        data: function data(params) {
          return {
            at: _this.appContext.at,
            name: params.term
          };
        },
        processResults: function processResults(data, query) {
          var items = data.map(function (s) {
            return {
              id: s.id,
              text: s.name
            };
          });
          return {
            results: items
          };
        }
      }
    };
    this.data.portfolioId = parseInt($routeParams.portfolioId);
    this.filter.selected.school = {
      id: parseInt(appContext.schoolId),
      text: appContext.fullSchoolName
    };
    this.filter.selected.userType = parseInt($routeParams.userType) || -1;
    var prepareSchool = $http.get("/webapi/schools/short", {
      params: {
        id: this.filter.selected.school.id,
        withCityName: true
      }
    }).then(function (response) {
      var schoolInfo = response.data[0];
      _this.filter.selected.school.text = schoolInfo.name;
    });
    var getUserTypes = $http.get("/webapi/portfolios/refs/userTypes").then(function (response) {
      _this.filter.items.userTypes = response.data;
    });
    this.initPage();
    var loadSelected = this.initSelected().then(function (selected) {
      _this.data.selected = selected.map(function (right) {
        return Object.assign(right, {
          fromDb: true
        });
      });
      _this.state.ready = true;
    })["catch"](function (response) {
      _this.$longWork.close();
      _this.$alerts.error(response.data.message, response.data.details);
    });
    this.$q.all([prepareSchool, loadSelected, getUserTypes]).then(function () {
      _this.changeUserType();
      _this.state.ready = true;
      _this.$appLoader.hide();
    });
  }
  _createClass(EditRightsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var schoolId = this.filter.selected.school.id;
      var classId = this.filter.selected.studentClass;
      var viewAccess = this.filter.selected.viewAccess;
      var params = {
        schoolId: schoolId,
        page: this.paging.page,
        pageSize: this.paging.pageSize,
        userType: this.filter.selected.userType,
        portfolioId: this.data.portfolioId,
        viewAccess: viewAccess
      };
      if (classId > 0) {
        params.classId = classId;
      }
      this.$longWork.show();
      this.$http.get("/webapi/portfolios/users", {
        params: params
      }).then(function (response) {
        _this2.state.dataLoaded = true;
        _this2.data.users = response.data;
        _this2.paging.totalcount = parseInt(response.headers("count"));
        _this2.paging.show = _this2.paging.totalcount > _this2.paging.pageSize;
        _this2.$longWork.close();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var schoolId = this.filter.selected.school.id;
      var params = {};
      if (schoolId > 0) {
        params.schoolId = schoolId;
      }
      if (this.filter.selected.studentClass > 0) {
        params.classId = this.filter.selected.studentClass;
      }
      this.$longWork.show();
      this.saveSpecific().then(function () {
        _this3.changeTracker.clearDataChanges();
        _this3.state.dataChanged = false;
        _this3.$longWork.close();
      })["catch"](function (response) {
        _this3.$longWork.close();
        _this3.$alerts.error(response.data.message, response.data.details);
      });
    }
  }, {
    key: "disabled",
    value: function disabled(user) {
      return user.id == this.appContext.userId;
    }
  }, {
    key: "selected",
    value: function selected(user) {
      var selected = _.findWhere(this.data.selected, {
        userId: user.id
      });
      return selected != null && selected.accessType != 'None' || this.disabled(user);
    }
  }, {
    key: "select",
    value: function select(data, right) {
      if (right) {
        right.accessType = 'Read';
        return;
      }
      var rightNew = {
        userId: data.id,
        accessType: 'Read'
      };
      this.data.selected.push(rightNew);
    }
  }, {
    key: "unselect",
    value: function unselect(data) {
      if (data.fromDb) {
        data.accessType = 'None';
        return;
      }
      this.data.selected = _.without(this.data.selected, data);
    }
  }, {
    key: "toggle",
    value: function toggle(user) {
      if (this.disabled(user)) return;
      var right = this.data.selected.find(function (x) {
        return x.userId == user.id;
      });
      if (right && right.accessType != 'None') {
        this.unselect(right);
      } else {
        this.select(user, right);
      }
      this.state.dataChanged = true;
    }
  }, {
    key: "displayClassFilter",
    value: function displayClassFilter() {
      var schoolId = this.filter.selected.school && this.filter.selected.school.id;
      if (schoolId != parseInt(this.appContext.schoolId)) {
        return false;
      }
      return this.filter.selected.userType == PortfolioMemberUserType.Students || this.filter.selected.userType == PortfolioMemberUserType.Parents;
    }
  }, {
    key: "changeUserType",
    value: function changeUserType() {
      var _this4 = this;
      if (this.displayClassFilter()) {
        this.classesRepository.getYearClasses({}).then(function (classes) {
          _this4.filter.items.schoolClasses = classes;
          _this4.filter.selected.studentClass = classes[0].id;
        });
      }
    }
  }]);
  return EditRightsController;
}();
exports.EditRightsController = EditRightsController;
var EditRightsComponent = {
  controller: EditRightsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editRights.component.html"
};
exports.EditRightsComponent = EditRightsComponent;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPortfolioRightsComponent = void 0;
var _editRights = __webpack_require__(271);
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
var EditPortfolioRightsController = /*#__PURE__*/function (_EditRightsController) {
  _inherits(EditPortfolioRightsController, _EditRightsController);
  var _super = _createSuper(EditPortfolioRightsController);
  function EditPortfolioRightsController() {
    _classCallCheck(this, EditPortfolioRightsController);
    return _super.apply(this, arguments);
  }
  _createClass(EditPortfolioRightsController, [{
    key: "initPage",
    value: function initPage() {
      this.$scope.$parent.page = {
        parent: {
          title: "Личный портфолио",
          href: "personal"
        },
        back: {
          history: true
        },
        title: "Права доступа к портфолио"
      };
    }
  }, {
    key: "initSelected",
    value: function initSelected() {
      return this.$http.get("/webapi/portfolios/personal/".concat(this.data.portfolioId, "/rights")).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "saveSpecific",
    value: function saveSpecific() {
      var _this = this;
      var setRights = this.data.selected;
      return this.$http.put("/webapi/portfolios/personal/".concat(this.data.portfolioId, "/rights"), setRights, {}).then(function () {
        _this.$alerts.success("Права успешно сохранены");
      });
    }
  }]);
  return EditPortfolioRightsController;
}(_editRights.EditRightsController);
var EditPortfolioRightsComponent = Object.assign({}, _editRights.EditRightsComponent, {
  controller: EditPortfolioRightsController
});
exports.EditPortfolioRightsComponent = EditPortfolioRightsComponent;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditProjectPortfolioController = exports.EditProjectPortfolioComponent = void 0;
var _editPortfolio = __webpack_require__(274);
var _model = __webpack_require__(279);
var _renamePortfolio = __webpack_require__(280);
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
var EditProjectPortfolioController = /*#__PURE__*/function (_EditPortfolioControl) {
  EditProjectPortfolioController.$inject = ["$scope", "language", "appContext", "$dialogs", "$location", "downloadService", "portfolioRepository", "$uibModal", "$alerts", "$longWork", "$appLoader", "$routeParams"];
  _inherits(EditProjectPortfolioController, _EditPortfolioControl);
  var _super = _createSuper(EditProjectPortfolioController);
  /*@ngInject*/
  function EditProjectPortfolioController($scope, language, appContext, $dialogs, $location, downloadService, portfolioRepository, $uibModal, $alerts, $longWork, $appLoader, $routeParams) {
    var _this;
    _classCallCheck(this, EditProjectPortfolioController);
    _this = _super.call(this, $scope, language, appContext, $dialogs, downloadService, portfolioRepository, $uibModal, $alerts, $longWork, $appLoader, $routeParams);
    _this.$location = $location;
    $scope.$parent.page = {
      parent: {
        title: language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
        href: "projects"
      },
      back: {
        history: true
      },
      title: "Редактирование"
    };
    _this.project = true;
    _this.state = {
      fullAccess: false,
      groupDataReadonly: true
    };
    $scope.$watch(function () {
      return _this.data.portfolio;
    }, function (portfolio) {
      if (portfolio) {
        _this.checkPortfolioAccess(portfolio);
      }
    });
    $scope.$watch(function () {
      return _this.data.group;
    }, function (group) {
      if (group) {
        _this.initGroupRights(group);
      }
    });
    return _this;
  }
  _createClass(EditProjectPortfolioController, [{
    key: "checkPortfolioAccess",
    value: function checkPortfolioAccess(portfolio) {
      var _this2 = this;
      var userId = this.appContext.userId;
      var isLeader = _.some(portfolio.leaders, function (leader) {
        return leader.userId === userId;
      });
      if (isLeader) {
        this.state.fullAccess = isLeader;
        return;
      }
      this.$longWork.execute(this.portfolioRepository.getProjectPortfolioAccess(this.data.portfolioId)).then(function (response) {
        return _this2.data.rights = response;
      }).then(function () {
        return _this2.initGroupRights();
      });
    }
  }, {
    key: "initGroupRights",
    value: function initGroupRights(group) {
      group = group || this.data.group;
      if (this.state.fullAccess) {
        this.state.groupDataReadonly = false;
      } else {
        this.state.groupDataReadonly = !_.some(this.data.rights, function (accessInfo) {
          return accessInfo.groupId === group.id && accessInfo.accessType === _model.PortfolioAccessType.Write;
        });
      }
    }
  }, {
    key: "members",
    value: function members() {
      this.$location.path("/".concat(this.data.portfolioId, "/members"));
    }
  }, {
    key: "leaders",
    value: function leaders() {
      this.$location.path("/".concat(this.data.portfolioId, "/leaders"));
    }
  }, {
    key: "rename",
    value: function rename() {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        controller: _renamePortfolio.RenamePortfolioComponent.controller,
        controllerAs: _renamePortfolio.RenamePortfolioComponent.controllerAs,
        templateUrl: _renamePortfolio.RenamePortfolioComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return {
              id: _this3.data.portfolio.id,
              name: _this3.data.portfolio.name
            };
          }
        }
      });
      modalInstance.result.then(function (editedPortfolio) {
        _this3.data.portfolio = angular.extend(_this3.data.portfolio, editedPortfolio);
      })["catch"](function (res) {
        if (res !== 'cancel') {
          throw res;
        }
      });
    }
  }]);
  return EditProjectPortfolioController;
}(_editPortfolio.EditPortfolioController);
exports.EditProjectPortfolioController = EditProjectPortfolioController;
var EditProjectPortfolioComponent = {
  controller: EditProjectPortfolioController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editPortfolio.component.html"
};
exports.EditProjectPortfolioComponent = EditProjectPortfolioComponent;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPortfolioController = exports.EditPortfolioComponent = void 0;
var _treeEqualizer = _interopRequireDefault(__webpack_require__(269));
var _editGroup = __webpack_require__(275);
var _editLink = __webpack_require__(277);
var _editDoc = __webpack_require__(278);
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
var EditPortfolioController = /*#__PURE__*/function () {
  EditPortfolioController.$inject = ["$scope", "language", "appContext", "$dialogs", "downloadService", "portfolioRepository", "$uibModal", "$alerts", "$longWork", "$appLoader", "$routeParams"];
  /*@ngInject*/
  function EditPortfolioController($scope, language, appContext, $dialogs, downloadService, portfolioRepository, $uibModal, $alerts, $longWork, $appLoader, $routeParams) {
    _classCallCheck(this, EditPortfolioController);
    this.$scope = $scope;
    this.language = language;
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.downloadService = downloadService;
    this.portfolioRepository = portfolioRepository;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$routeParams = $routeParams;
    this.data = {
      portfolioId: $routeParams.portfolioId,
      groupId: parseInt($routeParams.groupId),
      groups: [],
      group: null,
      portfolio: null,
      rights: []
    };
    this.refresh();
  }
  _createClass(EditPortfolioController, [{
    key: "refresh",
    value: function refresh() {
      var _this = this;
      this.portfolioRepository.getPortfolio(this.data.portfolioId).then(function (portfolio) {
        return _this.data.portfolio = portfolio;
      }).then(function () {
        var equalizer = new _treeEqualizer["default"](_this.data.portfolio.groups, function (g) {
          return g.order;
        });
        _this.data.groups = equalizer.execute();
        _this.project = typeof _this.data.portfolio.leaders != "undefined";
        var currentGroupId = _this.data.group && _this.data.group.id || _this.data.groupId;
        if (currentGroupId) {
          _this.data.group = _.findWhere(_this.data.groups, {
            id: currentGroupId
          });
        }
        if (!_this.data.group) {
          _this.data.group = _.first(_this.data.groups);
        }
      }).then(function () {
        return _this.$appLoader.hide();
      });
    }
  }, {
    key: "getParentGroup",
    value: function getParentGroup(group) {
      if (typeof group === "undefined") return undefined;
      //Если переданная группа является дочерней(treeLevel > 1) то возвращаем группу-родителя
      //p.s. treeLevel используется т.к. у элементов первого уровня parentGroupId ссылается на "ROOT" группу
      if (group.treeLevel > 1) {
        return _.findWhere(this.data.groups, {
          id: group.parentGroupId
        });
      }
      return undefined;
    }
  }, {
    key: "addGroup",
    value: function addGroup(_parentGroup) {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editGroup.EditGroupComponent.controller,
        controllerAs: _editGroup.EditGroupComponent.controllerAs,
        templateUrl: _editGroup.EditGroupComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return _this2.data.portfolio;
          },
          parentGroup: function parentGroup() {
            return _parentGroup;
          },
          group: function group() {
            return {
              editing: true
            };
          },
          isDefaultGroup: function isDefaultGroup() {
            return false;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.$appLoader.show();
        _this2.refresh();
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup(_group) {
      var _this3 = this;
      var _parentGroup2 = _.findWhere(this.data.groups, {
        id: _group.parentGroupId
      });
      this.isGroupDefault(_group).then(function (isDefault) {
        var modalInstance = _this3.$uibModal.open({
          controller: _editGroup.EditGroupComponent.controller,
          controllerAs: _editGroup.EditGroupComponent.controllerAs,
          templateUrl: _editGroup.EditGroupComponent.templateUrl,
          size: "md",
          resolve: {
            portfolio: function portfolio() {
              return _this3.data.portfolio;
            },
            parentGroup: function parentGroup() {
              return _parentGroup2;
            },
            group: function group() {
              return angular.extend({
                editing: true
              }, _group);
            },
            isDefaultGroup: function isDefaultGroup() {
              return isDefault;
            }
          }
        });
        modalInstance.result.then(function () {
          _this3.$appLoader.show();
          _this3.refresh();
        });
      });
    }
  }, {
    key: "isGroupDefault",
    value: function isGroupDefault(group) {
      return this.portfolioRepository.getDefaultPortfolioGroups().then(function (defaultGroups) {
        if (group.treeLevel == 1 && defaultGroups.some(function (x) {
          return x.name == group.name;
        })) {
          return true;
        }
        return false;
      });
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(group) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var isDefault, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.isGroupDefault(group);
            case 2:
              isDefault = _context.sent;
              if (!isDefault) {
                _context.next = 6;
                break;
              }
              this.$alerts.info("Базовые разделы портфолио нельзя удалить");
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return this.$dialogs.confirm("Вы действительно желаете удалить раздел?");
            case 8:
              result = _context.sent;
              if (!result) {
                _context.next = 15;
                break;
              }
              _context.next = 12;
              return this.$longWork.execute(this.portfolioRepository.deletePortfolioGroup(this.data.portfolioId, group.id));
            case 12:
              this.$appLoader.show();
              this.refresh();
              this.$alerts.success("Раздел успешно удалён");
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "addLink",
    value: function addLink() {
      var _this4 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editLink.EditLinkComponent.controller,
        controllerAs: _editLink.EditLinkComponent.controllerAs,
        templateUrl: _editLink.EditLinkComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return _this4.data.portfolio;
          },
          group: function group() {
            return _this4.data.group;
          },
          link: function link() {
            return {};
          }
        }
      });
      modalInstance.result.then(function () {
        _this4.$appLoader.show();
        _this4.refresh();
      });
    }
  }, {
    key: "editLink",
    value: function editLink(_link) {
      var _this5 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editLink.EditLinkComponent.controller,
        controllerAs: _editLink.EditLinkComponent.controllerAs,
        templateUrl: _editLink.EditLinkComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return _this5.data.portfolio;
          },
          group: function group() {
            return _this5.data.group;
          },
          link: function link() {
            return angular.extend({}, _link);
          }
        }
      });
      modalInstance.result.then(function () {
        _this5.$appLoader.show();
        _this5.refresh();
      });
    }
  }, {
    key: "removeLink",
    value: function removeLink(link) {
      var _this6 = this;
      this.$dialogs.confirm("Вы действительно желаете удалить ссылку?").then(function () {
        return _this6.$longWork.execute(_this6.portfolioRepository.deletePortfolioLink(_this6.data.portfolioId, _this6.data.group.id, link.id)).then(function () {
          _this6.data.group.links = _.without(_this6.data.group.links, link);
          _this6.$appLoader.show();
          _this6.refresh();
          _this6.$alerts.success("Ссылка успешно удалена");
        });
      });
    }
  }, {
    key: "openDoc",
    value: function openDoc(url, fileName) {
      this.downloadService.downloadFile(url, fileName);
    }
  }, {
    key: "addDoc",
    value: function addDoc() {
      var _this7 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editDoc.EditDocComponent.controller,
        controllerAs: _editDoc.EditDocComponent.controllerAs,
        templateUrl: _editDoc.EditDocComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return _this7.data.portfolio;
          },
          group: function group() {
            return _this7.data.group;
          },
          doc: function doc() {
            return {};
          }
        }
      });
      modalInstance.result.then(function () {
        _this7.$appLoader.show();
        _this7.refresh();
      });
    }
  }, {
    key: "editDoc",
    value: function editDoc(_doc) {
      var _this8 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editDoc.EditDocComponent.controller,
        controllerAs: _editDoc.EditDocComponent.controllerAs,
        templateUrl: _editDoc.EditDocComponent.templateUrl,
        size: "md",
        resolve: {
          portfolio: function portfolio() {
            return _this8.data.portfolio;
          },
          group: function group() {
            return _this8.data.group;
          },
          doc: function doc() {
            return angular.extend({}, _doc);
          }
        }
      });
      modalInstance.result.then(function () {
        _this8.$appLoader.show();
        _this8.refresh();
      });
    }
  }, {
    key: "removeDoc",
    value: function removeDoc(doc) {
      var _this9 = this;
      this.$dialogs.confirm("Вы действительно желаете удалить документ?").then(function () {
        return _this9.$longWork.execute(_this9.portfolioRepository.deletePortfolioDoc(_this9.data.portfolioId, _this9.data.group.id, doc.id)).then(function () {
          _this9.data.group.docs = _.without(_this9.data.group.docs, doc);
          _this9.$appLoader.show();
          _this9.refresh();
          _this9.$alerts.success("Документ успешно удален");
        });
      });
    }
  }]);
  return EditPortfolioController;
}();
exports.EditPortfolioController = EditPortfolioController;
var EditPortfolioComponent = {
  controller: EditPortfolioController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editPortfolio.component.html"
};
exports.EditPortfolioComponent = EditPortfolioComponent;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditGroupController = exports.EditGroupComponent = void 0;
var _baseEditGroup = __webpack_require__(276);
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
var EditGroupController = /*#__PURE__*/function (_BaseEditGroupControl) {
  EditGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "portfolioRepository", "$alerts", "portfolio", "$longWork", "group", "parentGroup", "isDefaultGroup"];
  _inherits(EditGroupController, _BaseEditGroupControl);
  var _super = _createSuper(EditGroupController);
  /*@ngInject*/
  function EditGroupController($scope, $uibModalInstance, changeTracker, $dialogs, language, portfolioRepository, $alerts, portfolio, $longWork, group, parentGroup, isDefaultGroup) {
    var _this;
    _classCallCheck(this, EditGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs, language, portfolio.groups, group, parentGroup);
    _this.portfolioRepository = portfolioRepository;
    _this.$alerts = $alerts;
    _this.portfolio = portfolio;
    _this.$longWork = $longWork;
    _this.group = group;
    _this.parentGroup = parentGroup;
    _this.isDefaultGroup = isDefaultGroup;
    return _this;
  }
  _createClass(EditGroupController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.groupForm.$valid) {
        this.groupForm.$displayErrors = true;
        return;
      }
      if (this.editMode) {
        this.$longWork.execute(this.portfolioRepository.editPortfolioGroup(this.portfolio.id, this.data.group)).then(function (response) {
          _this2.$uibModalInstance.close(response);
          _this2.$alerts.success("Раздел успешно изменен");
        });
      } else {
        this.$longWork.execute(this.portfolioRepository.createPortfolioGroup(this.portfolio.id, this.data.group)).then(function (response) {
          _this2.$uibModalInstance.close(response);
          _this2.$alerts.success("Раздел успешно добавлен");
        });
      }
    }
  }]);
  return EditGroupController;
}(_baseEditGroup.BaseEditGroupController);
exports.EditGroupController = EditGroupController;
var EditGroupComponent = {
  controller: EditGroupController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editGroup.component.html"
};
exports.EditGroupComponent = EditGroupComponent;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeIndexer = exports.BaseEditGroupController = void 0;
var _netcityModalCtrl = __webpack_require__(40);
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
var BaseEditGroupController = /*#__PURE__*/function (_NetCityModalControll) {
  BaseEditGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "groups", "group", "parentGroup"];
  _inherits(BaseEditGroupController, _NetCityModalControll);
  var _super = _createSuper(BaseEditGroupController);
  /*@ngInject*/
  function BaseEditGroupController($scope, $uibModalInstance, changeTracker, $dialogs, language, groups, group, parentGroup) {
    var _this;
    _classCallCheck(this, BaseEditGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.editMode = group.id > 0;
    _this.header = _this.editMode ? "Редактирование раздела" : "Создание раздела";
    _this.data = {
      groups: groups,
      parentGroup: parentGroup,
      group: group,
      tree: _.chain(groups).map(function (group) {
        return new GroupTreeItem(group, null, group.groups, group);
      }).sortBy(function (treeItem) {
        return treeItem.group.order;
      }).value()
    };
    if (!group.id) {
      var newItem = new GroupTreeItem(_this.data.group, _this.data.parentGroup, [], _this.data.group);
      newItem.editing = true;
      _this.data.group.order = 1;
      var parentTreeItem;
      if (parentGroup == null) {
        parentTreeItem = {
          groups: _this.data.tree
        };
      } else {
        parentTreeItem = treeIndexer[parentGroup.id];
        _this.data.group.parentGroupId = parentGroup.id;
      }
      if (parentTreeItem.groups.length) {
        _this.data.group.order = _.chain(parentTreeItem.groups).map(function (i) {
          return i.group.order;
        }).max().value() + 1;
      }
      parentTreeItem.groups.push(newItem);
    } else {
      var treeItem = treeIndexer[group.id];
      treeItem.editing = true;
    }
    _this.initTreeOptions();
    _this.buildButtons();
    return _this;
  }
  _createClass(BaseEditGroupController, [{
    key: "initTreeOptions",
    value: function initTreeOptions() {
      var _this2 = this;
      this.treeOptions = {
        beforeDrag: function beforeDrag(event) {
          return event.$modelValue.id === _this2.data.group.id;
        },
        dropped: function dropped(event) {
          _this2.data.group.order = event.dest.index + 1;
          var parentNodeScope = event.dest.nodesScope.$nodeScope;
          if (parentNodeScope == null) {
            _this2.data.group.parentGroupId = null;
          } else {
            _this2.data.group.parentGroupId = parentNodeScope.$modelValue.id;
          }
        }
      };
    }
  }, {
    key: "buildButtons",
    value: function buildButtons() {
      var _this3 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this3.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this3.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return BaseEditGroupController;
}(_netcityModalCtrl.NetCityModalController);
exports.BaseEditGroupController = BaseEditGroupController;
var treeIndexer = {};
exports.treeIndexer = treeIndexer;
var GroupTreeItem = /*#__PURE__*/_createClass(function GroupTreeItem(group, parentGroup, subGroups, currentGroup) {
  _classCallCheck(this, GroupTreeItem);
  this.parentGroup = parentGroup;
  this.id = group.id;
  if (this.id == currentGroup.id) {
    this.group = currentGroup;
  } else {
    this.group = group;
  }
  this.editing = false;
  this.groups = _.map(subGroups, function (subItem) {
    return new GroupTreeItem(subItem, group, subItem.groups, currentGroup);
  });
  treeIndexer[this.id] = this;
});

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLinkController = exports.EditLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
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
var EditLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  EditLinkController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "portfolioRepository", "$alerts", "language", "portfolio", "$longWork", "group", "link"];
  _inherits(EditLinkController, _NetCityModalControll);
  var _super = _createSuper(EditLinkController);
  /*@ngInject*/
  function EditLinkController($scope, $uibModalInstance, changeTracker, $dialogs, portfolioRepository, $alerts, language, portfolio, $longWork, group, link) {
    var _this;
    _classCallCheck(this, EditLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.portfolioRepository = portfolioRepository;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.portfolio = portfolio;
    _this.$longWork = $longWork;
    _this.group = group;
    _this.link = link;
    _this.editMode = link.id > 0;
    _this.header = _this.editMode ? "Редактирование ссылки" : "Создание ссылки";
    _this.data = {
      portfolio: portfolio,
      group: group,
      link: link
    };
    _this.buildButtons();
    return _this;
  }
  _createClass(EditLinkController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this2 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this2.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this2.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.linkForm.$valid) {
        this.linkForm.$displayErrors = true;
        return;
      }
      if (this.editMode) {
        this.$longWork.execute(this.portfolioRepository.editPortfolioLink(this.data.portfolio.id, this.data.group.id, this.link)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Ссылка успешно изменена");
        });
      } else {
        this.$longWork.execute(this.portfolioRepository.createPortfolioLink(this.data.portfolio.id, this.data.group.id, this.data.link)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Ссылка успешно добавлена");
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return EditLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.EditLinkController = EditLinkController;
var EditLinkComponent = {
  controller: EditLinkController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editLink.component.html"
};
exports.EditLinkComponent = EditLinkComponent;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDocController = exports.EditDocComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
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
var EditDocController = /*#__PURE__*/function (_NetCityModalControll) {
  EditDocController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "portfolioRepository", "$alerts", "language", "$longWork", "portfolio", "group", "doc", "settingsProvider"];
  _inherits(EditDocController, _NetCityModalControll);
  var _super = _createSuper(EditDocController);
  /*@ngInject*/
  function EditDocController($scope, $uibModalInstance, changeTracker, $dialogs, portfolioRepository, $alerts, language, $longWork, portfolio, group, doc, settingsProvider) {
    var _this;
    _classCallCheck(this, EditDocController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.portfolioRepository = portfolioRepository;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$longWork = $longWork;
    _this.portfolio = portfolio;
    _this.group = group;
    _this.doc = doc;
    _this.settingsProvider = settingsProvider;
    _this.editMode = doc.id > 0;
    _this.header = $scope.editMode ? "Редактирование документа" : "Создание документа";
    _this.data = {
      portfolio: portfolio,
      group: group,
      doc: doc
    };
    settingsProvider.UploadLimits.then(function (uploadLimits) {
      return _this.fileSizeLimit = uploadLimits.portfolioDocFileSizeLimit;
    });
    // желательно привести проверку к работе с fileattachment.component, как в других модулях
    _this.$scope.$watch(function () {
      return _this.data.doc.file;
    }, function (file) {
      if (file) {
        _this.data.doc.fileName = file.name;
        // размер файла в КБ
        _this.fileSize = _this.data.doc.file.size / 1024;
        if (_this.fileSize > _this.fileSizeLimit) {
          _this.$alerts.error(_this.language.Generic.SetupSchoolPortfolio.kFileSizeCantBeGreaterThan + _this.fileSizeLimit / 1024 + ' МБ');
        }
      }
    });
    _this.buildButtons();
    return _this;
  }
  _createClass(EditDocController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this2 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this2.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this2.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.fileSizeLimit) {
        this.$dialogs.error("Не удалось получить ограничения на файлы с сервера");
        return;
      }
      if (!this.docForm.$valid || this.fileSize > this.fileSizeLimit) {
        this.docForm.$displayErrors = true;
        return;
      }
      if (this.editMode) {
        this.$longWork.execute(this.portfolioRepository.editPortfolioDoc(this.portfolio.id, this.group.id, this.doc)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Документ успешно изменён");
        });
      } else {
        this.$longWork.execute(this.portfolioRepository.createPortfolioDoc(this.portfolio.id, this.group.id, this.doc)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Документ успешно добавлен");
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return EditDocController;
}(_netcityModalCtrl.NetCityModalController);
exports.EditDocController = EditDocController;
var EditDocComponent = {
  controller: EditDocController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editDoc.component.html"
};
exports.EditDocComponent = EditDocComponent;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioAccessType = void 0;
var PortfolioAccessType;
exports.PortfolioAccessType = PortfolioAccessType;
(function (PortfolioAccessType) {
  PortfolioAccessType[PortfolioAccessType["None"] = 0] = "None";
  PortfolioAccessType[PortfolioAccessType["Read"] = 1] = "Read";
  PortfolioAccessType[PortfolioAccessType["Write"] = 2] = "Write";
})(PortfolioAccessType || (exports.PortfolioAccessType = PortfolioAccessType = {}));

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenamePortfolioController = exports.RenamePortfolioComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
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
var RenamePortfolioController = /*#__PURE__*/function (_NetCityModalControll) {
  RenamePortfolioController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "portfolioRepository", "$alerts", "language", "$longWork", "portfolio"];
  _inherits(RenamePortfolioController, _NetCityModalControll);
  var _super = _createSuper(RenamePortfolioController);
  /*@ngInject*/
  function RenamePortfolioController($scope, $uibModalInstance, changeTracker, $dialogs, portfolioRepository, $alerts, language, $longWork, portfolio) {
    var _this;
    _classCallCheck(this, RenamePortfolioController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.portfolioRepository = portfolioRepository;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$longWork = $longWork;
    _this.portfolio = portfolio;
    _this.data = {
      portfolio: portfolio
    };
    _this.buildButtons();
    return _this;
  }
  _createClass(RenamePortfolioController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this2 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this2.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this2.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.portfolioForm.$valid) {
        this.portfolioForm.$displayErrors = true;
        return;
      }
      this.$longWork.execute(this.portfolioRepository.renameProjectPortfolio(this.data.portfolio)).then(function () {
        _this3.$uibModalInstance.close(_this3.data.portfolio);
        _this3.$alerts.success("Имя успешно изменено");
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return RenamePortfolioController;
}(_netcityModalCtrl.NetCityModalController);
exports.RenamePortfolioController = RenamePortfolioController;
var RenamePortfolioComponent = {
  controller: RenamePortfolioController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/projects/edit/renamePortfolio.component.html"
};
exports.RenamePortfolioComponent = RenamePortfolioComponent;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPersonalPortfolioController = exports.EditPersonalPortfolioComponent = void 0;
var _editPortfolio = __webpack_require__(274);
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
var EditPersonalPortfolioController = /*#__PURE__*/function (_EditPortfolioControl) {
  EditPersonalPortfolioController.$inject = ["$scope", "language", "appContext", "$dialogs", "$location", "downloadService", "portfolioRepository", "$uibModal", "$alerts", "$longWork", "$appLoader", "$routeParams"];
  _inherits(EditPersonalPortfolioController, _EditPortfolioControl);
  var _super = _createSuper(EditPersonalPortfolioController);
  /*@ngInject*/
  function EditPersonalPortfolioController($scope, language, appContext, $dialogs, $location, downloadService, portfolioRepository, $uibModal, $alerts, $longWork, $appLoader, $routeParams) {
    var _this;
    _classCallCheck(this, EditPersonalPortfolioController);
    _this = _super.call(this, $scope, language, appContext, $dialogs, downloadService, portfolioRepository, $uibModal, $alerts, $longWork, $appLoader, $routeParams);
    _this.$location = $location;
    $scope.$parent.page = {
      parent: {
        title: "Личный портфолио",
        href: "personal"
      },
      back: {
        history: true
      },
      title: "Редактирование"
    };
    _this.project = false;
    _this.personal = true;
    _this.state = {
      fullAccess: true,
      groupDataReadonly: false
    };
    return _this;
  }
  _createClass(EditPersonalPortfolioController, [{
    key: "editRights",
    value: function editRights() {
      this.$location.path("/personal/".concat(this.data.portfolioId, "/rights/"));
    }
  }]);
  return EditPersonalPortfolioController;
}(_editPortfolio.EditPortfolioController);
exports.EditPersonalPortfolioController = EditPersonalPortfolioController;
var EditPersonalPortfolioComponent = {
  controller: EditPersonalPortfolioController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editPortfolio.component.html"
};
exports.EditPersonalPortfolioComponent = EditPersonalPortfolioComponent;

/***/ }),

/***/ 282:
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

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.portfolio").controller("ViewPersonalPortfoliosCtrl", function ($scope, $http, $route, $routeParams, $alerts, $longWork, $location, $appLoader, downloadService) {
  $.extend($scope, {
    language: language,
    editurl: "",
    data: {
      portfolio: null
    },
    state: {
      emptyData: false,
      readonly: $route.current.$$route.see
    },
    viewMode: $route.current.$$route.see,
    showViewLink: false
  });
  if ($scope.viewMode) {
    $scope.$parent.page = {
      title: 'Портфолио других пользователей',
      back: {
        history: true
      },
      parent: {
        title: "Личный портфолио",
        href: "personal"
      }
    };
  } else {
    $scope.$parent.page = {
      title: "Личный портфолио"
    };
  }
  var defaultCatcher = function defaultCatcher(response) {
    return $alerts.error(response.data.message, response.data.details);
  };
  if (!$scope.viewMode) {
    $http.get("/webapi/portfolios/personal/see/accessGranted").then(function (response) {
      return $scope.showViewLink = response.data;
    }, defaultCatcher);
  }
  $scope.openDoc = function (url, fileName) {
    downloadService.downloadFile(url, fileName);
  };
  $scope.create = function () {
    $http.post("/webapi/portfolios/personal/").then(function (response) {
      $scope.data.portfolio = response.data;
      $scope.state.emptyData = false;
      $scope.editurl = "personal/".concat($scope.data.portfolio.id, "/edit");
      $location.path($scope.editurl);
    })["catch"](function (response) {
      alert(response.data.message, response.data.details);
    });
  };
  $scope.unloadToFile = function () {
    var options = {
      viewHeader: true,
      header: "",
      noShowYear: true,
      addInfo: "\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E: ".concat(formatDate(new Date())),
      showFilters: false,
      processingFunc: [function (printBlock, copyBlock) {
        return $("span", copyBlock).remove(".glyphicon-pencil");
      }]
    };
    var userId = $scope.portfolio ? $scope.portfolio.id : appContext.userId;
    $http.get("/webapi/portfolios/personal/export-header?userId=".concat(userId)).then(function (response) {
      options.header = response.data;
    }, defaultCatcher).then(function () {
      return $('.print-block').printUtils().getPrintHtml(options);
    }).then(function (htmlString) {
      $longWork.execute(downloadService.downloadFile("/webapi/portfolios/personal/export-pdf?userId=".concat(userId), {
        method: "post",
        data: htmlString
      }));
    });
  };
  var padTo2Digits = function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  };
  var formatDate = function formatDate(date) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('.') + ' ' + [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(':');
  };
  var getPortfolio = function getPortfolio() {
    var handler = function handler(response) {
      $scope.data.portfolio = response.data;
      if (!$scope.data.portfolio || $scope.data.portfolio == null || $scope.data.portfolio == '') {
        $scope.state.emptyData = true;
      } else {
        $scope.state.emptyData = false;
        $scope.editurl = "personal/".concat($scope.data.portfolio.id, "/edit");
      }
      $appLoader.hide();
    };
    var userId = $scope.portfolio ? $scope.portfolio.id : appContext.userId;
    $http.get("/webapi/portfolios/personal/?userId=".concat(userId)).then(handler, defaultCatcher);
  };
  if (!$scope.viewMode) {
    getPortfolio();
  } else {
    $scope.$watch("portfolio", getPortfolio);
    $http.get("/webapi/portfolios/personal/see").then(function (response) {
      if (!response.data) {
        $scope.state.emptyData = true;
        return;
      }
      $scope.state.emptyData = false;
      $scope.portfolios = response.data;
      $scope.portfolio = $scope.portfolios[0];
    }, defaultCatcher);
  }
});

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Roles = _interopRequireWildcard(__webpack_require__(9));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
angular.module("irtech.netcity.school.portfolio").controller("ListProjectPortfoliosCtrl", function ($scope, $http, $q, $alerts, $dialogs, $appLoader, $uibModal) {
  $scope.$parent.page = {
    title: language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios
  };
  $.extend($scope, {
    language: language,
    data: {
      self: {
        portfolios: []
      },
      others: {
        portfolios: []
      }
    },
    state: {
      dataReady: false
    }
  });
  var queries = [$http.get("/webapi/portfolios/projects").then(function (response) {
    $scope.data.self.portfolios = response.data;
  })];
  if (_.contains(appContext.roles, Roles.admin)) {
    queries.push($http.get("/webapi/portfolios/projects?others=true").then(function (response) {
      $scope.data.others.portfolios = response.data;
    }));
  }
  $q.all(queries).then(function () {
    $appLoader.hide();
    $scope.state.dataReady = true;
  });
  $scope.create = function () {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/portfolio/projects/list/createProjectPortfolio.html",
      controller: "CreateProjectPortfolioCtrl",
      size: "md"
    });
    modalInstance.result.then(function (createdPortfolio) {
      $scope.data.self.portfolios.push(createdPortfolio);
    });
  };
  $scope["delete"] = function (portfolio) {
    $dialogs.confirm("Вы действительно желаете удалить портфолио?").then(function () {
      return $http["delete"]("/webapi/portfolios/projects/".concat(portfolio.id));
    }).then(function () {
      $scope.data.self.portfolios = _.without($scope.data.self.portfolios, portfolio);
      $alerts.success("Портфолио успешно удалено");
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
}).controller("CreateProjectPortfolioCtrl", function ($scope, $http, $alerts, $uibModalInstance, $controller, $dialogs, changeTracker) {
  $scope.header = "Создание портфолио";
  $.extend($scope, {
    language: language,
    data: {
      portfolio: {}
    }
  });
  $scope.save = function () {
    if (!$scope.portfolioForm.$valid) {
      $scope.portfolioForm.$displayErrors = true;
      return;
    }
    $http.post("/webapi/portfolios/projects/", $scope.data.portfolio).then(function (response) {
      $uibModalInstance.close(response.data);
      $alerts.success("Портфолио успешно создано");
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $controller("NetCityModalController", {
    $scope: $scope,
    $dialogs: $dialogs,
    $uibModalInstance: $uibModalInstance,
    changeTracker: changeTracker
  });
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.portfolio").controller("ViewProjectPortfoliosCtrl", function ($scope, $http, $routeParams, $location, $dialogs, $appLoader, $alerts, downloadService) {
  var portfolioId = $routeParams.portfolioId;
  $scope.$parent.page = {
    parent: {
      title: language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
      href: "projects"
    },
    title: ""
  };
  $.extend($scope, {
    language: language,
    editurl: "".concat(portfolioId, "/edit"),
    data: {
      portfolio: null
    },
    state: {
      readonly: true,
      isLeader: false
    },
    ready: false
  });
  $scope.$watch("data.portfolio", function (portfolio) {
    if (portfolio) {
      $scope.$parent.page.title = portfolio.name;
      $appLoader.hide();
    }
  });
  var checkPortfolioAccess = function checkPortfolioAccess(portfolio) {
    var userId = parseInt(appContext.userId);
    var isLeader = _.some(portfolio.leaders, function (leader) {
      return leader.userId === userId;
    });
    $scope.state.isLeader = isLeader;
    if (isLeader) {
      $scope.state.readonly = false;
      return;
    }
    $http.get("/webapi/portfolios/".concat(portfolioId, "/access")).then(function (response) {
      $scope.state.readonly = !(response.data != null && response.data.length > 0);
    });
  };
  $scope.openDoc = function (url, fileName) {
    downloadService.downloadFile(url, fileName);
  };
  $http.get("/webapi/portfolios/".concat(portfolioId)).then(function (response) {
    $scope.data.portfolio = response.data;
    $scope.ready = true;
    checkPortfolioAccess($scope.data.portfolio);
  });
  $scope["delete"] = function () {
    $dialogs.confirm("Вы действительно желаете удалить портфолио?").then(function () {
      return $http["delete"]("/webapi/portfolios/projects/".concat(portfolioId));
    }).then(function () {
      $alerts.success("Портфолио успешно удалено");
      $location.path($scope.$parent.page.parent.href);
      setTimeout(function () {
        $scope.$apply();
      }, 0);
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
});

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _treeEqualizer = _interopRequireDefault(__webpack_require__(269));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
angular.module("irtech.netcity.school.portfolio").controller("PortfolioMembersCtrl", function ($scope, $http, $q, $uibModal, $appLoader, $alerts, $dialogs, $routeParams, $location, $httpParamSerializer) {
  $scope.$parent.page = {
    parent: {
      title: language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
      href: "projects"
    },
    back: {
      history: true
    },
    title: language.Generic.SetupSchoolPortfolio.kPortfolioMembers
  };
  angular.extend($scope, {
    language: language,
    filter: {
      items: {
        schools: [],
        groups: [],
        userTypes: []
      },
      selected: {
        schoolId: -1,
        groupId: parseInt($routeParams.groupId) || -1,
        userType: -1
      },
      ready: function ready() {
        return true;
      }
    },
    data: {
      portfolioId: $routeParams.portfolioId,
      members: [],
      selected: []
    },
    state: {
      ready: false
    }
  });
  $scope.isInherited = function (member) {
    return $scope.filter.selected.groupId > 0 && member.groupId != $scope.filter.selected.groupId;
  };
  $scope.selected = function (member) {
    return _.findWhere($scope.data.selected, {
      userId: member.userId
    }) != null;
  };
  $scope.toggle = function (member) {
    if (_.findWhere($scope.data.selected, {
      userId: member.userId
    })) {
      $scope.data.selected = _.without($scope.data.selected, member);
    } else {
      $scope.data.selected.push(member);
    }
  };
  $http.get("/webapi/portfolios/refs/userTypes").then(function (response) {
    $scope.filter.items.userTypes = response.data;
  });
  $http.get("/webapi/portfolios/refs/accessTypes").then(function (response) {
    $scope.data.accessTypes = response.data;
  });
  $http.get("/webapi/portfolios/".concat($scope.data.portfolioId, "/groups")).then(function (response) {
    //разложение дерева разделов в плоский список с отступами
    var equalizer = new _treeEqualizer["default"](response.data, function (g) {
      return g.order;
    });
    $scope.filter.items.groups = equalizer.execute();
    $scope.filter.items.groups.unshift({
      id: -1,
      treeItemName: "Все разделы"
    });
  });
  $scope.filterViewMembers = function () {
    var userTypeKey;
    if ($scope.filter.selected.userType > 0) {
      userTypeKey = _.findWhere($scope.filter.items.userTypes, {
        id: $scope.filter.selected.userType
      }).key;
      userTypeKey = userTypeKey.charAt(0).toLowerCase() + userTypeKey.slice(1);
    }
    $scope.data.viewMembers = _.filter($scope.data.members, function (member) {
      if ($scope.filter.selected.schoolId > 0 && member.schoolId !== $scope.filter.selected.schoolId) {
        return false;
      }
      if (userTypeKey && !member.userTypes[userTypeKey]) {
        return false;
      }
      return true;
    });
  };

  //загрузить участников
  $scope.load = function () {
    $scope.state.ready = false;
    var params = {};
    if ($scope.filter.selected.groupId > 0) {
      params.groupId = $scope.filter.selected.groupId;
    }
    //if ($scope.filter.selected.userType > 0) {
    //	params.userType = $scope.filter.selected.userType;
    //}
    return $http.get("/webapi/portfolios/".concat($scope.data.portfolioId, "/members"), {
      params: params
    }).then(function (response) {
      $scope.data.members = response.data;
    }).then(function () {
      return $http.get("/webapi/schools/short", {
        params: {
          id: _.unique(_.pluck($scope.data.members, "schoolId")),
          withCityName: true
        }
      });
    }).then(function (response) {
      var schoolIdx = _.indexBy(response.data, "id");
      $scope.filter.items.schools = response.data;
      $scope.filter.items.schools.unshift({
        id: -1,
        name: "Все"
      });

      //добавление в dto информации по названиям орагнизаций и уровне доступа
      $scope.data.members = _.map($scope.data.members, function (member) {
        member.accessType = _.findWhere($scope.data.accessTypes, {
          key: member.accessType
        });
        if (member.schoolId > 0) {
          member.orgname = schoolIdx[member.schoolId].name;
        }
        return member;
      });

      //применение клиентских фильтров
      $scope.filterViewMembers();
      $scope.state.ready = true;
    });
  };

  //первоначальная загрузка участников
  $scope.load().then(function () {
    return $appLoader.hide();
  });

  //переход в редакитрование
  $scope.edit = function () {
    var params = {};
    if ($scope.filter.selected.groupId > 0) {
      params.groupId = $scope.filter.selected.groupId;
    }
    if ($scope.filter.selected.userType > 0) {
      params.userType = $scope.filter.selected.userType;
    }
    if ($scope.filter.selected.schoolId > 0) {
      params.schoolId = $scope.filter.selected.schoolId;
    }
    $location.path("/".concat($scope.data.portfolioId, "/members/edit")).search(params);
  };

  //удалить
  $scope["delete"] = function () {
    var params = {
      userId: _.pluck($scope.data.selected, "userId")
    };
    if ($scope.filter.selected.groupId > 0) {
      params.groupId = $scope.filter.selected.groupId;
    }
    var url = "/webapi/portfolios/".concat($scope.data.portfolioId, "/members");
    $dialogs.confirm("Вы действительно желаете удалить участников?").then(function () {
      return $http["delete"](url, {
        params: params
      });
    }).then(function () {
      $alerts.success("Участники успешно удалены");
      $scope.data.selected = [];
      $scope.load();
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
});

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.portfolio").controller("PortfolioLeadersCtrl", function ($scope, $http, $q, $uibModal, $appLoader, $alerts, $dialogs, $routeParams, $location, $httpParamSerializer) {
  $scope.$parent.page = {
    parent: {
      title: language.Generic.SetupSchoolPortfolio.kTitleProjectPortfolios,
      href: "projects"
    },
    back: {
      history: true
    },
    title: language.Generic.SetupSchoolPortfolio.kPortfolioLeaders
  };
  angular.extend($scope, {
    language: language,
    filter: {
      items: {
        schools: [],
        userTypes: []
      },
      selected: {
        schoolId: -1,
        userType: 1
      },
      ready: function ready() {
        return true;
      }
    },
    data: {
      portfolioId: $routeParams.portfolioId,
      leaders: [],
      selected: []
    },
    state: {
      ready: false
    }
  });
  $scope.selected = function (leader) {
    return _.findWhere($scope.data.selected, {
      userId: leader.userId
    }) != null;
  };
  $scope.toggle = function (leader) {
    if (_.findWhere($scope.data.selected, {
      userId: leader.userId
    })) {
      $scope.data.selected = _.without($scope.data.selected, leader);
    } else {
      $scope.data.selected.push(leader);
    }
  };
  $http.get("/webapi/portfolios/refs/userTypes", {
    params: {
      onlyStuff: true
    }
  }).then(function (response) {
    $scope.filter.items.userTypes = response.data;
  });
  $scope.filterViewLeaders = function () {
    var userTypeKey;
    if ($scope.filter.selected.userType > 1) {
      userTypeKey = _.findWhere($scope.filter.items.userTypes, {
        id: $scope.filter.selected.userType
      }).key;
      //userTypeKey = userTypeKey.charAt(0).toLowerCase() + userTypeKey.slice(1);
    }

    $scope.data.viewLeaders = _.filter($scope.data.leaders, function (leader) {
      if ($scope.filter.selected.schoolId > 0 && leader.schoolId !== $scope.filter.selected.schoolId) {
        return false;
      }
      if (userTypeKey && leader.userType !== userTypeKey) {
        return false;
      }
      return true;
    });
  };

  //загрузить участников
  $scope.load = function () {
    $scope.state.ready = false;
    var params = {};
    if ($scope.filter.selected.userType) {
      params.userType = $scope.filter.selected.userType;
    }
    return $http.get("/webapi/portfolios/".concat($scope.data.portfolioId, "/leaders"), {
      params: params
    }).then(function (response) {
      $scope.data.leaders = response.data;
    }).then(function () {
      return $http.get("/webapi/schools/short", {
        params: {
          id: _.unique(_.pluck($scope.data.leaders, "schoolId")),
          withCityName: true
        }
      });
    }).then(function (response) {
      $scope.filter.items.schools = response.data;
      $scope.filter.items.schools.unshift({
        id: -1,
        name: "Все"
      });
      var schoolIdx = _.indexBy($scope.filter.items.schools, "id");
      //добавление в dto информации по названиям орагнизаций и уровне доступа
      $scope.data.leaders = _.map($scope.data.leaders, function (leader) {
        //leader.accessType = _.findWhere($scope.data.accessTypes, { key: leader.accessType });
        leader.orgname = schoolIdx[leader.schoolId || -1].name;
        return leader;
      });

      //применение клиентских фильтров
      $scope.filterViewLeaders();
      $scope.state.ready = true;
    });
  };

  //первоначальная загрузка участников
  $scope.load().then(function () {
    return $appLoader.hide();
  });

  //переход в редакитрование
  $scope.edit = function () {
    var params = {};
    if ($scope.filter.selected.groupId > 0) {
      params.groupId = $scope.filter.selected.groupId;
    }
    if ($scope.filter.selected.userType > 0) {
      params.userType = $scope.filter.selected.userType;
    }
    if ($scope.filter.selected.schoolId > 0) {
      params.schoolId = $scope.filter.selected.schoolId;
    }
    $location.path("/".concat($scope.data.portfolioId, "/leaders/edit")).search(params);
  };

  //удалить
  $scope["delete"] = function () {
    var params = {
      userId: _.pluck($scope.data.selected, "userId")
    };
    if ($scope.filter.selected.groupId > 0) {
      params.groupId = $scope.filter.selected.groupId;
    }
    var url = "/webapi/portfolios/".concat($scope.data.portfolioId, "/leaders");
    $dialogs.confirm("Вы действительно желаете удалить участников?").then(function () {
      return $http["delete"](url, {
        params: params
      });
    }).then(function () {
      $alerts.success("Участники успешно удалены");
      $scope.data.selected = [];
      $scope.load();
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
});

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