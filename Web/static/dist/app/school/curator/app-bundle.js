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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eventMembers = __webpack_require__(2);
var _achievementsListCtrl = __webpack_require__(3);
var _studentAwards = __webpack_require__(4);
var _studentPortfolio = __webpack_require__(9);
var _emevents = __webpack_require__(11);
var _repositories = __webpack_require__(16);
var _editEventMember = __webpack_require__(18);
var _eventMemberList = __webpack_require__(23);
var _eventInfo = __webpack_require__(25);
var _editeventFiles = __webpack_require__(26);
var _editParticipation = __webpack_require__(31);
var _curatorEventList = __webpack_require__(33);
var _curatorStudents = __webpack_require__(34);
var _curators = __webpack_require__(35);
var _editevent = __webpack_require__(36);
var _nationolymp = __webpack_require__(38);
var _achievementsPersonaldataRegistry = __webpack_require__(39);
var _module = angular.module("irtech.netcity.school.curator", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components", "irtech.netcity.school.portfolio.common"]);
__webpack_require__(40);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/events/list", {
    templateUrl: _curatorEventList.CuratorEventListComponent.templateUrl,
    controller: _curatorEventList.CuratorEventListComponent.controller,
    controllerAs: _curatorEventList.CuratorEventListComponent.controllerAs,
    resolve: {
      isPersonal: function isPersonal() {
        return false;
      }
    }
  }).when("/events/list/personal", {
    templateUrl: _curatorEventList.CuratorEventListComponent.templateUrl,
    controller: _curatorEventList.CuratorEventListComponent.controller,
    controllerAs: _curatorEventList.CuratorEventListComponent.controllerAs,
    resolve: {
      isPersonal: function isPersonal() {
        return true;
      }
    }
  }).when("/events/:eventId/members", _eventMemberList.CuratorEventMemberListComponent).when("/students/", _curatorStudents.CuratorStudentListComponent).when("/students/:studentId/portfolio", _studentPortfolio.StudentPortfolioComponent).when("/students/:studentId/awards", _studentAwards.StudentAwardsComponent).when("/achievements", _achievementsListCtrl.AchievementsRegistryComponent).when("/achievements/personaldata", _achievementsPersonaldataRegistry.AchievementsWithPersonalDataRegistryComponent).otherwise({
    redirectTo: "/students/"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.filter("extension", function () {
  return function (input) {
    return input.split(".").pop();
  };
}).component(_eventMembers.EventMembersComponent.selector, _eventMembers.EventMembersComponent).component(_eventInfo.EventInfoComponent.selector, _eventInfo.EventInfoComponent).component(_editeventFiles.EditAwardEventFilesComponent.selector, _editeventFiles.EditAwardEventFilesComponent).component(_editParticipation.EventParticipationInfoComponent.selector, _editParticipation.EventParticipationInfoComponent).service("editEventMemberService", _editEventMember.EditEventMemberService).service("awardEventsRepository", _emevents.AwardEventsRepository).service("curatorsRepository", _curators.CuratorsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("eventMembersRepository", _emevents.EventMembersRepository).service("userEventsRepository", _emevents.UserEventsRepository).service("editAwardEventService", _editevent.EditAwardEventService).service("nationOlympRepository", _nationolymp.NationOlympRepository).config(config);

/***/ }),
/* 2 */
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
/* 3 */
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
var AchievementsRegistryController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", function AchievementsRegistryController(pageContext) {
  _classCallCheck(this, AchievementsRegistryController);
  pageContext.title = "Отчет по личным достижениям одаренных детей";
  pageContext.parent = null;
  this.registryInfo = {
    url: "/webapi/talents/achievements/registry",
    filtersUrl: "/webapi/talents/achievements/registry/filter",
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentAwardsComponent = void 0;
var _studentAwards = __webpack_require__(5);
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
  StudentAwardsController.$inject = ["language", "appContext", "pageContext", "$alerts", "editEventMemberService", "userEventsRepository", "curatorsRepository", "$appLoader", "$dialogs", "$routeParams", "$timeout", "$location", "nationOlympRepository"];
  _inherits(StudentAwardsController, _StudentAwardsListBas);
  var _super = _createSuper(StudentAwardsController);
  /*@ngInject*/
  function StudentAwardsController(language, appContext, pageContext, $alerts, editEventMemberService, userEventsRepository, curatorsRepository, $appLoader, $dialogs, $routeParams, $timeout, $location, nationOlympRepository) {
    var _this;
    _classCallCheck(this, StudentAwardsController);
    _this = _super.call(this, language, appContext, $alerts, editEventMemberService, userEventsRepository, curatorsRepository, $appLoader, $dialogs, $routeParams, $timeout, nationOlympRepository);
    _this.pageContext = pageContext;
    _this.$location = $location;
    _this.nationOlympRepository = nationOlympRepository;
    _this.pageContext.parent = {
      title: language.Generic.MenuFolders.kFNCuratorTalentStudents,
      href: "students"
    };
    _this.pageContext.back = {
      history: true
    };
    _this.pageContext.title = "Личные достижения";
    _this.state.accessToMembers = true;
    return _this;
  }
  _createClass(StudentAwardsController, [{
    key: "viewEvent",
    value: function viewEvent(eventId) {
      this.$location.path("/events/".concat(eventId, "/members"));
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentAwardsListBaseController = exports.StudentAwardsListBaseComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(6));
var _model = __webpack_require__(7);
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayRange = exports.VisitForm = exports.UserEventViewModel = exports.SportTitle = exports.SportCategory = exports.RegistrationType = exports.ParticipiationForm = exports.OlympAppealStatus = exports.EventViewModel = exports.EventType = exports.EventResultsViewModel = exports.EventRemoveResult = exports.EventOrgModel = exports.EventMemberViewModel = exports.EventMemberTitle = exports.EventMemberExpand = exports.EventLevel = exports.AwardEventType = exports.AwardEventStatus = void 0;
var _references = __webpack_require__(8);
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentPortfolioComponent = void 0;
var _studentPortfolioCmn = __webpack_require__(10);
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
      title: language.Generic.MenuFolders.kFNCuratorTalentStudents,
      href: "students"
    };
    //просмотр куратором - в режиме только для чтения
    _this.state.readonly = true;
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEventsRepository = exports.EventMembersRepository = exports.EmEventsRepository = exports.AwardEventsRepository = void 0;
var _repository = __webpack_require__(12);
var _model = __webpack_require__(7);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(13);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(14);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(15);
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(17);
var _repository = __webpack_require__(12);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(13);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventMemberService = exports.EditEventMemberComponent = void 0;
var _model = __webpack_require__(7);
var _searchSource = _interopRequireDefault(__webpack_require__(19));
var _netcityModalCtrl = __webpack_require__(20);
var _nsModal = __webpack_require__(21);
var Roles = _interopRequireWildcard(__webpack_require__(22));
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuratorEventMemberListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(24));
var Rights = _interopRequireWildcard(__webpack_require__(6));
var _model = __webpack_require__(7);
var _references = __webpack_require__(8);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CuratorEventMemberListController = /*#__PURE__*/function () {
  CuratorEventMemberListController.$inject = ["pageContext", "appContext", "$q", "$alerts", "editEventMemberService", "awardEventsRepository", "eventMembersRepository", "$routeParams", "$http", "$dialogs", "$appLoader", "language"];
  /*@ngInject*/
  function CuratorEventMemberListController(pageContext, appContext, $q, $alerts, editEventMemberService, awardEventsRepository, eventMembersRepository, $routeParams, $http, $dialogs, $appLoader, language) {
    _classCallCheck(this, CuratorEventMemberListController);
    this.appContext = appContext;
    this.$q = $q;
    this.$alerts = $alerts;
    this.editEventMemberService = editEventMemberService;
    this.awardEventsRepository = awardEventsRepository;
    this.eventMembersRepository = eventMembersRepository;
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.language = language;
    pageContext.title = "Список участников мероприятия";
    pageContext.parent = {
      title: "План мероприятий",
      href: "events/list"
    };
    pageContext.back = {
      history: true
    };
    if (!$routeParams.eventId) {
      $dialogs.error("Неизвестный идентификатор мероприятия");
      return;
    }
    this.filter = {
      items: {
        viewType: [{
          id: 1,
          title: 'Все участники'
        }, {
          id: 2,
          title: 'Свои подопечные'
        }],
        eventMemberTitles: [{
          id: "All",
          name: "Все"
        }].concat(_references.References.eventMemberTitles)
      },
      selected: {
        viewType: 1,
        eventMemberTitle: "All"
      }
    };
    this.data = {
      search: {},
      refs: _references.References,
      curatorId: appContext.userId,
      eventId: $routeParams.eventId,
      event: {
        id: $routeParams.eventId
      },
      members: [],
      viewMembers: [],
      selection: new _selectable["default"](),
      curatorStudents: null
    };
    this.state = {
      membersReadAccess: this.appContext.hasAnyRight([Rights.arEMEventsMembersView, Rights.arEMEventsMembersEdit]),
      membersWriteAccess: this.appContext.hasAnyRight([Rights.arEMEventsMembersEdit]),
      ready: false
    };
    this.load();
  }
  _createClass(CuratorEventMemberListController, [{
    key: "filterMembers",
    value: function filterMembers() {
      var _this = this;
      this.data.viewMembers = this.data.members.filter(function (member) {
        var show = true;
        if (_this.filter.selected.viewType === 2) {
          show = show && _this.isCuratorStudent(member);
        }
        if (_this.filter.selected.eventMemberTitle !== "All") {
          show = show && member.title && member.title.id === _this.filter.selected.eventMemberTitle;
        }
        return show;
      });
    }
  }, {
    key: "isCuratorStudent",
    value: function isCuratorStudent(member) {
      return _.some(this.data.curatorStudents, function (cs) {
        return cs.id === member.user.id;
      });
    }
  }, {
    key: "defaultCatch",
    value: function defaultCatch(response) {
      this.$alerts.error(response.data.message || response.data.details);
    }
    //добавить участника
  }, {
    key: "addMember",
    value: function addMember() {
      var _this2 = this;
      var settings = {
        event: this.data.event,
        school: {
          id: this.appContext.schoolId
        },
        users: new Promise(function (resolve) {
          return resolve(_this2.data.curatorStudents);
        })
      };
      this.editEventMemberService.edit(settings).then(function () {
        return _this2.load();
      });
    }
    //редактировать участника
  }, {
    key: "editMember",
    value: function editMember(member) {
      var _this3 = this;
      var settings = {
        school: member.organization,
        eventMemberId: member.id,
        user: member.user,
        event: this.data.event,
        participationInfo: angular.copy(member),
        users: new Promise(function (resolve) {
          return resolve(_this3.data.curatorStudents);
        })
      };
      this.editEventMemberService.edit(settings).then(function () {
        return _this3.load();
      });
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
        _this4.load();
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this5 = this;
      var promises = [];
      var loadCuratorStudents = this.$http.get("/webapi/talents/curator/students").then(function (response) {
        return _this5.data.curatorStudents = response.data;
      }, function (response) {
        return _this5.defaultCatch(response);
      });
      promises.push(loadCuratorStudents);
      var loadEventInfo = this.awardEventsRepository.getEvent(this.data.event.id).then(function (eventInfo) {
        _this5.data.event = new _model.EventViewModel(eventInfo);
        return _this5.awardEventsRepository.getEventFiles(_this5.data.event.id);
      }).then(function (files) {
        _this5.data.event.documents = files;
      });
      promises.push(loadEventInfo);
      var loadEventMembers = this.eventMembersRepository.loadEventMembers(this.data.event.id).then(function (members) {
        // сброс выбора
        _this5.data.selection.dropSelect();
        _this5.data.members = members.map(function (dto) {
          var _a;
          return new _model.EventMemberViewModel(dto, (_a = _this5.data.event) === null || _a === void 0 ? void 0 : _a.isNationOlympiad);
        });
        _this5.filterMembers();
      });
      promises.push(loadEventMembers);
      this.$q.all(promises).then(function () {
        _this5.$appLoader.hide();
        _this5.state.ready = true;
      });
    }
  }]);
  return CuratorEventMemberListController;
}();
var CuratorEventMemberListComponent = {
  templateUrl: "/static/dist/app/school/curator/events/members/eventMemberList.component.html",
  controller: CuratorEventMemberListController,
  controllerAs: "ctrl"
};
exports.CuratorEventMemberListComponent = CuratorEventMemberListComponent;

/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventFilesComponent = void 0;
var _editEventAttachment = __webpack_require__(27);
var _emevents = __webpack_require__(11);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventAttachmentComponent = void 0;
var FileSaver = _interopRequireWildcard(__webpack_require__(28));
var _netcityModalCtrl = __webpack_require__(20);
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
/* 28 */
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
} else if ( true && __webpack_require__(29) !== null && __webpack_require__(30) !== null) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventParticipationInfoComponent = void 0;
var _model = __webpack_require__(7);
var _references = __webpack_require__(8);
var _services = __webpack_require__(32);
var Roles = _interopRequireWildcard(__webpack_require__(22));
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventRefsHelper = void 0;
var _model = __webpack_require__(7);
var _references = __webpack_require__(8);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuratorEventListComponent = void 0;
var _references = __webpack_require__(8);
var _model = __webpack_require__(7);
var _selectable = _interopRequireDefault(__webpack_require__(24));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CuratorEventListController = /*#__PURE__*/function () {
  CuratorEventListController.$inject = ["$alerts", "pageContext", "$dialogs", "$appLoader", "$uibModal", "awardEventsRepository", "referencesRepository", "language", "$location", "appContext", "editAwardEventService", "isPersonal"];
  /*@ngInject*/
  function CuratorEventListController($alerts, pageContext, $dialogs, $appLoader, $uibModal, awardEventsRepository, referencesRepository, language, $location, appContext, editAwardEventService, isPersonal) {
    var _this = this;
    _classCallCheck(this, CuratorEventListController);
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.$uibModal = $uibModal;
    this.awardEventsRepository = awardEventsRepository;
    this.referencesRepository = referencesRepository;
    this.language = language;
    this.$location = $location;
    this.appContext = appContext;
    this.editAwardEventService = editAwardEventService;
    this.state = {
      dataReady: false,
      emptyData: false,
      viewReady: false
    };
    this.paging = {
      page: 1,
      pageSize: 50,
      totalRows: 0,
      totalPages: 1
    };
    this.isPersonalPlan = isPersonal;
    pageContext.clear();
    pageContext.title = isPersonal ? language.Generic.MenuFolders.kFNCuratorPersonalPlan : language.Generic.MenuFolders.kFNCuratorCommonPlan;
    this.data = {
      events: [],
      years: [],
      yearId: this.appContext.globalYearId,
      eventLevel: null,
      awardEventType: null,
      eventStatus: "All",
      refs: _references.References,
      selection: new _selectable["default"]()
    };
    this.referencesRepository.getYears().then(function (years) {
      _this.data.years = years;
      if (!_this.data.yearId) {
        _this.data.yearId = _this.data.years[0].id;
      }
      _this.load();
    });
  }
  //создание мероприятия
  _createClass(CuratorEventListController, [{
    key: "add",
    value: function add() {
      var _this2 = this;
      var settings = {
        years: this.data.years,
        globalYearId: this.data.yearId || this.appContext.globalYearId,
        founder: {
          school: {
            id: parseInt(this.appContext.schoolId),
            name: this.appContext.schoolName
          }
        },
        levels: [_model.EventLevel.School],
        showLocality: false,
        showIsLocal: true
      };
      this.editAwardEventService.add(settings, true).then(function () {
        return _this2.load();
      });
    }
  }, {
    key: "edit",
    value:
    //создание мероприятия
    function edit(event) {
      var _this3 = this;
      var settings = {
        years: this.data.years,
        globalYearId: this.data.yearId || this.appContext.globalYearId,
        levels: [_model.EventLevel.School],
        showLocality: false,
        showIsLocal: true
      };
      this.editAwardEventService.edit(event.dto, settings).then(function () {
        return _this3.load();
      });
    }
  }, {
    key: "restore",
    value: function restore(event) {
      this.$dialogs.error("Не реализовано");
    }
    //удаление мероприятия
  }, {
    key: "remove",
    value: function remove(event) {
      var _this4 = this;
      this.$dialogs.confirm("В случае продолжения будут удалено выбранное мероприятие а также данные об участниках данного мероприятия.\nВы желаете продолжить?").then(function () {
        return _this4.awardEventsRepository.deleteEvent(event.id);
      }).then(function () {
        _this4.$alerts.success("Мероприятие успешно удалено");
        _this4.load();
      });
    }
  }, {
    key: "isSelfPlanEvent",
    value: function isSelfPlanEvent(selectedEvent) {
      return selectedEvent.personalEvent;
    }
  }, {
    key: "load",
    value: function load() {
      var _this5 = this;
      this.state.dataReady = false;
      var filter = {
        yearId: this.data.yearId,
        level: this.data.eventLevel,
        status: this.data.eventStatus,
        awardEventType: this.data.awardEventType,
        eventType: _model.EventType.AwardEvents,
        page: this.paging.page,
        pageSize: this.paging.pageSize
      };
      if (this.isPersonalPlan) {
        filter.curatorId = this.appContext.userId;
      }
      // if (this.search.name) {
      // 	filter.name = this.search.name;
      // }
      this.awardEventsRepository.getAwardEvents(filter).then(function (events) {
        _this5.paging = {
          page: events.page,
          pageSize: events.pageSize,
          totalRows: events.totalRows,
          totalPages: Math.ceil(events.totalRows / events.pageSize)
        };
        _this5.data.events = events.data.map(function (dto) {
          return new _model.EventViewModel(dto);
        });
        _this5.state.dataReady = true;
        _this5.state.viewReady = true;
        _this5.state.emptyData = _this5.data.events.length === 0;
        _this5.$appLoader.hide();
      });
    }
    //просмотр участников мероприятия
  }, {
    key: "viewEventMembers",
    value: function viewEventMembers(event) {
      this.$location.path("/events/".concat(event.id, "/members"));
    }
  }]);
  return CuratorEventListController;
}();
var CuratorEventListComponent = {
  controller: CuratorEventListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/curator/events/list/curatorEventList.component.html"
};
exports.CuratorEventListComponent = CuratorEventListComponent;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuratorStudentListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(24));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CuratorStudentListController = /*#__PURE__*/function () {
  CuratorStudentListController.$inject = ["pageContext", "$appLoader", "language", "$location", "curatorsRepository", "$http", "$q", "dateUtils"];
  /*@ngInject*/
  function CuratorStudentListController(pageContext, $appLoader, language, $location, curatorsRepository, $http, $q, dateUtils) {
    var _this = this;
    _classCallCheck(this, CuratorStudentListController);
    this.$appLoader = $appLoader;
    this.language = language;
    this.$location = $location;
    this.curatorsRepository = curatorsRepository;
    this.$http = $http;
    this.$q = $q;
    this.dateUtils = dateUtils;
    this.filter = {
      items: {
        schools: []
      },
      selected: {
        schoolId: -1
      }
    };
    this.state = {
      dataReady: false
    };
    this.filterViewStudents = function () {
      var schoolId = _this.filter.selected.schoolId;
      _this.data.viewStudents = _this.data.students.filter(function (student) {
        return schoolId < 0 || student.education && student.education.school.id === schoolId;
      });
    };
    pageContext.clear();
    pageContext.title = language.Generic.MenuFolders.kFNCuratorTalentStudents;
    this.data = {
      selection: new _selectable["default"](),
      students: [],
      viewStudents: []
    };
    this.load();
  }
  _createClass(CuratorStudentListController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var loadStudents = this.curatorsRepository.getCuratorStudents().then(function (students) {
        return _this2.data.students = students;
      });
      this.$q.all([loadStudents]).then(function () {
        var schoolIds = _.chain(_this2.data.students).filter(function (st) {
          return st.education && st.education.schoolId;
        }).map(function (st) {
          return st.education.schoolId;
        }).value();
        if (schoolIds.length) {
          return _this2.$http.get("/webapi/schools/short", {
            params: {
              id: schoolIds,
              withCityName: true
            }
          });
        } else {
          return Promise.resolve({
            data: []
          });
        }
      }).then(function (response) {
        _this2.filter.items.schools = response.data;
        _this2.filter.items.schools.unshift({
          id: -1,
          name: "Все"
        });
        var schoolsIdx = _.indexBy(response.data, "id");
        _this2.data.students = _this2.data.students.map(function (studentDto) {
          if (studentDto.education && studentDto.education.schoolId > 0) {
            studentDto.education.school = schoolsIdx[studentDto.education.schoolId];
          }
          studentDto.birthDate = _this2.dateUtils.date2str(new Date(studentDto.birthDate));
          if (studentDto.talentDirection) {
            studentDto.viewDirections = studentDto.talentDirection.map(function (x) {
              return x.name;
            }).toString();
          }
          return studentDto;
        });
        _this2.filterViewStudents();
        _this2.$appLoader.hide();
        _this2.state.dataReady = true;
      });
    }
  }, {
    key: "viewAwards",
    value: function viewAwards() {
      this.$location.path("/students/".concat(this.data.selection.selected.id, "/awards"));
    }
  }, {
    key: "viewPortfolio",
    value: function viewPortfolio() {
      this.$location.path("/students/".concat(this.data.selection.selected.id, "/portfolio"));
    }
  }]);
  return CuratorStudentListController;
}();
var CuratorStudentListComponent = {
  controller: CuratorStudentListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/curator/students/list/curatorStudents.component.html"
};
exports.CuratorStudentListComponent = CuratorStudentListComponent;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CuratorsRepository = void 0;
var _repository = __webpack_require__(12);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventService = exports.EditAwardEventComponent = void 0;
var _references = __webpack_require__(8);
var _model = __webpack_require__(7);
var _netcityModalCtrl = __webpack_require__(20);
var _emevents = __webpack_require__(11);
var _founders = __webpack_require__(37);
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NationOlympRepository = void 0;
var _repository = __webpack_require__(12);
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
/* 39 */
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
    url: "/webapi/talents/achievements/personaldata/registry",
    filtersUrl: "/webapi/talents/achievements/personaldata/registry/filter",
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
/* 40 */
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