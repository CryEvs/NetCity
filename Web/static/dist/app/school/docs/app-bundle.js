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


var _schoolDocsList = __webpack_require__(2);
var _docs = __webpack_require__(6);
var _repositories = __webpack_require__(11);
var _docFileHelper = __webpack_require__(13);
var _schoolDocsEdit = __webpack_require__(14);
var _module = angular.module("irtech.netcity.school.docs", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when('/', _schoolDocsList.DocsListComponent).when('/:docTypeId/edit', _schoolDocsEdit.DocsEditComponent).otherwise(_schoolDocsList.DocsListComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
_module.service("docsRepository", _docs.DocsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("docFileHelper", _docFileHelper.DocFileHelper).config(config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsListController = exports.DocsListComponent = void 0;
var _commonRouting = __webpack_require__(3);
var Rights = _interopRequireWildcard(__webpack_require__(4));
var _treeEqualizer = _interopRequireDefault(__webpack_require__(5));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DocsListController = /*#__PURE__*/function () {
  DocsListController.$inject = ["pageContext", "$appLoader", "appContext", "$routeParams", "referencesRepository", "docsRepository", "$location", "docFileHelper", "downloadService", "language"];
  /*@ngInject*/
  function DocsListController(pageContext, $appLoader, appContext, $routeParams, referencesRepository, docsRepository, $location, docFileHelper, downloadService, language) {
    _classCallCheck(this, DocsListController);
    this.$appLoader = $appLoader;
    this.appContext = appContext;
    this.referencesRepository = referencesRepository;
    this.docsRepository = docsRepository;
    this.$location = $location;
    this.docFileHelper = docFileHelper;
    this.downloadService = downloadService;
    this.language = language;
    pageContext.title = this.language.SetupSchoolResources.kTitleSchoolDocs;
    pageContext.parent = null;
    pageContext.back = null;
    this.selectedDocTypeId = parseInt($routeParams.docTypeId) || -1;
    this.emptyGroup = {
      order: 0,
      id: -1,
      name: this.language.Generic.SetupSchoolResources.kAllDocGroups,
      groups: [],
      parentGroupId: undefined,
      isDeleteDisabled: false
    };
    this.initDocTypes();
  }
  _createClass(DocsListController, [{
    key: "enableEdit",
    get: function get() {
      return this.selectedDocType && !this.selectedDocTypeIsPreset && this.appContext.hasRights([Rights.arSchoolDocsEdit]);
    }
  }, {
    key: "selectedDocTypeIsPreset",
    get: function get() {
      return this.selectedDocType.key == "Preset";
    }
  }, {
    key: "sectionHeaderColSpan",
    get: function get() {
      return this.selectedDocTypeIsPreset ? 3 : 4;
    }
  }, {
    key: "initDocTypes",
    value: function initDocTypes() {
      var _this = this;
      this.referencesRepository.getSchoolDocTypes().then(function (types) {
        if (_this.appContext.hasRights([Rights.arSchoolPublicDocsView])) {
          _this.docTypes = types.filter(function (type) {
            return type.key == "Public";
          });
        } else {
          _this.docTypes = types;
        }
        if (_this.selectedDocTypeId !== -1 && _this.docTypes.length > 1) {
          var docType = _this.docTypes.find(function (dt) {
            return dt.id == _this.selectedDocTypeId;
          });
          if (docType) {
            _this.selectedDocType = docType;
          }
        } else {
          _this.selectedDocType = _this.docTypes[0];
        }
        _this.changeDocType();
      });
    }
  }, {
    key: "changeDocType",
    value: function changeDocType() {
      var _this2 = this;
      this.dataReady = false;
      this.docsRepository.getSchoolDocGroups(parseInt(this.appContext.schoolId), this.selectedDocType.key).then(function (res) {
        if (res.length == 0) {
          _this2.groups = [];
          _this2.selectedGroup = _this2.emptyGroup;
          return;
        }
        res.unshift(_this2.emptyGroup);
        var equalizer = new _treeEqualizer["default"](res, function (g) {
          return g.order;
        });
        _this2.groups = equalizer.execute();
        _this2.selectedGroup = _this2.groups[0];
      }).then(function () {
        _this2.changeDocGroup();
      });
    }
  }, {
    key: "changeDocGroup",
    value: function changeDocGroup() {
      var _this3 = this;
      this.dataReady = false;
      this.docsRepository.getSchoolDocs(parseInt(this.appContext.schoolId), this.selectedDocType.key, this.selectedGroup.id).then(function (docs) {
        if (_this3.selectedGroup.id != -1) {
          _this3.sections = docs.map(function (doc) {
            return Object.assign(Object.assign({}, doc), {
              isHeader: false
            });
          });
          _this3.sections.unshift({
            isHeader: true,
            id: _this3.selectedGroup.id,
            name: _this3.selectedGroup.name
          });
          return;
        }
        _this3.sections = [];
        _this3.groups.forEach(function (g) {
          if (g.id == -1) return;
          _this3.sections.push({
            isHeader: true,
            id: g.id,
            name: g.name
          });
          _this3.sections = _this3.sections.concat(docs.filter(function (doc) {
            return doc.groupId == g.id;
          }).map(function (doc) {
            return Object.assign(Object.assign({}, doc), {
              isHeader: false
            });
          }));
        });
      }).then(function () {
        _this3.$appLoader.hide();
        _this3.dataReady = true;
      });
    }
  }, {
    key: "editDocs",
    value: function editDocs() {
      if (this.selectedGroup !== null && this.selectedGroup.id !== -1) {
        this.$location.path("/".concat(this.selectedDocType.id, "/edit")).search({
          groupId: this.selectedGroup.id
        });
      } else {
        this.$location.path("/".concat(this.selectedDocType.id, "/edit")).search({});
      }
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(docId) {
      return this.downloadService.downloadFile('/webapi/schools/' + this.appContext.schoolId + '/docs/' + docId + '/file/');
    }
  }, {
    key: "getImgIcon",
    value: function getImgIcon(fileName) {
      return this.docFileHelper.getImgForFileExt(fileName);
    }
  }]);
  return DocsListController;
}();
exports.DocsListController = DocsListController;
var DocsListComponent = {
  controller: DocsListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/docs/list/schoolDocsList.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arSchoolDocsView, Rights.arSchoolDocsEdit, Rights.arSchoolPublicDocsView])).Set()
};
exports.DocsListComponent = DocsListComponent;

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsRepository = void 0;
var _baseRepository = __webpack_require__(7);
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
var DocsRepository = /*#__PURE__*/function (_BaseRepository) {
  DocsRepository.$inject = ["$http", "$dialogs", "$longWork", "Upload"];
  _inherits(DocsRepository, _BaseRepository);
  var _super = _createSuper(DocsRepository);
  /*@ngInject*/
  function DocsRepository($http, $dialogs, $longWork, Upload) {
    var _this;
    _classCallCheck(this, DocsRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.Upload = Upload;
    return _this;
  }
  _createClass(DocsRepository, [{
    key: "getSchoolDocGroups",
    value: function getSchoolDocGroups(schoolId, docType) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/docs/groups"), {
        params: {
          docType: docType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createGroup",
    value: function createGroup(schoolId, docType, docGroup) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/docs/groups"), docGroup, {
        params: {
          docType: docType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editGroup",
    value: function editGroup(schoolId, docType, docGroup) {
      return this.$http.put("/webapi/schools/".concat(schoolId, "/docs/groups"), docGroup, {
        params: {
          docType: docType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(schoolId, docType, docGroupId) {
      return this.$http["delete"]("/webapi/schools/".concat(schoolId, "/docs/groups/").concat(docGroupId), {
        params: {
          docType: docType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolDocs",
    value: function getSchoolDocs(schoolId, docType, docGroupId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/docs"), {
        params: {
          docType: docType,
          groupId: docGroupId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createDoc",
    value: function createDoc(schoolId, doc) {
      return this.Upload.upload({
        url: "/webapi/schools/".concat(schoolId, "/docs"),
        method: "POST",
        data: {
          file: doc.file,
          info: JSON.stringify({
            name: doc.name,
            description: doc.description,
            groupId: doc.groupId
          })
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editDoc",
    value: function editDoc(schoolId, doc) {
      return this.Upload.upload({
        url: "/webapi/schools/".concat(schoolId, "/docs/").concat(doc.id),
        method: "PUT",
        data: {
          file: doc.file,
          info: JSON.stringify({
            name: doc.name,
            description: doc.description,
            groupId: doc.groupId
          })
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeDoc",
    value: function removeDoc(schoolId, docId) {
      return this.$http["delete"]("/webapi/schools/".concat(schoolId, "/docs/").concat(docId)).then(this.handleResponse, this.handleError);
    }
  }]);
  return DocsRepository;
}(_baseRepository.BaseRepository);
exports.DocsRepository = DocsRepository;

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(10);
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(7);
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocFileHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DocFileHelper = /*#__PURE__*/function () {
  function DocFileHelper() {
    _classCallCheck(this, DocFileHelper);
    this.fileExtImgFolder = "/vendor/custom/img/files/";
  }
  /**
   * Получение иконки для расширения файла
   * @requires app\school\docs\list\docsList.component.ts
   */
  _createClass(DocFileHelper, [{
    key: "getImgForFileExt",
    value: function getImgForFileExt(filename) {
      var fileExtension = filename.split('.').pop().toLocaleLowerCase();
      var iconFile = null;
      switch (fileExtension) {
        case "doc":
          iconFile = "doc.png";
          break;
        case "docx":
          iconFile = "docx.png";
          break;
        case "zip":
          iconFile = "zip.png";
          break;
        case "rar":
          iconFile = "rar.png";
          break;
        case "pdf":
          iconFile = "pdf.png";
          break;
        case "ppt":
          iconFile = "ppt.png";
          break;
        case "pptx":
          iconFile = "pptx.png";
          break;
        case "jpg":
        case "jpeg":
          iconFile = "jpg.png";
          break;
        case "png":
          iconFile = "png.png";
          break;
        case "pps":
          iconFile = "pps.png";
          break;
        case "xlsx":
          iconFile = "xlsx.png";
          break;
        case "htm":
        case "html":
          iconFile = "htm.gif";
          break;
        case "txt":
          iconFile = "txt.gif";
          break;
        case "xls":
          iconFile = "xls.gif";
          break;
        case "rtf":
          iconFile = "rtf.gif";
          break;
        case "hlp":
          iconFile = "hlp.gif";
          break;
        case "chm":
          iconFile = "chm.gif";
          break;
      }
      var iconUrl = iconFile != null ? this.fileExtImgFolder + iconFile : null;
      return iconUrl;
    }
    /**
     * Конвертирует недопустимые для uri символы в названии файла
     */
  }, {
    key: "encodeURIFilename",
    value: function encodeURIFilename(filename) {
      return filename.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&#34;');
    }
  }]);
  return DocFileHelper;
}();
exports.DocFileHelper = DocFileHelper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsEditController = exports.DocsEditComponent = void 0;
var _commonRouting = __webpack_require__(3);
var Rights = _interopRequireWildcard(__webpack_require__(4));
var _treeEqualizer = _interopRequireDefault(__webpack_require__(5));
var _editDoc = __webpack_require__(15);
var _editGroup = __webpack_require__(17);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DocsEditController = /*#__PURE__*/function () {
  DocsEditController.$inject = ["appContext", "pageContext", "$routeParams", "$appLoader", "$dialogs", "$alerts", "$uibModal", "$longWork", "docsRepository", "referencesRepository", "$location", "language"];
  /*@ngInject*/
  function DocsEditController(appContext, pageContext, $routeParams, $appLoader, $dialogs, $alerts, $uibModal, $longWork, docsRepository, referencesRepository, $location, language) {
    _classCallCheck(this, DocsEditController);
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.docsRepository = docsRepository;
    this.referencesRepository = referencesRepository;
    this.$location = $location;
    this.language = language;
    this.docTypeId = parseInt($routeParams.docTypeId);
    this.selectedGroupId = parseInt($routeParams.groupId) || -1;
    pageContext.title = language.Generic.SetupSchoolResources.kTitleSchoolDocsEdit;
    pageContext.parent = {
      title: language.Generic.MenuFolders.kFNDocuments,
      href: "/?docTypeId=".concat(this.docTypeId)
    };
    //Возвращаемся на просмотр если редактирование открывается для предустановленных документов
    if (this.docTypeId == 0) {
      this.$location.path('/');
      return;
    }
    this.initDocType();
  }
  _createClass(DocsEditController, [{
    key: "initDocType",
    value: function initDocType() {
      var _this = this;
      this.referencesRepository.getSchoolDocTypes().then(function (types) {
        _this.docType = types.find(function (t) {
          return t.id === _this.docTypeId;
        });
        _this.initGroups();
      });
    }
  }, {
    key: "initGroups",
    value: function initGroups() {
      var _this2 = this;
      this.$appLoader.show();
      this.docsRepository.getSchoolDocGroups(parseInt(this.appContext.schoolId), this.docType.key).then(function (res) {
        if (res.length == 0) {
          _this2.groups = [];
          _this2.$appLoader.hide();
          return;
        }
        _this2.groups = res;
        var equalizer = new _treeEqualizer["default"](res, function (g) {
          return g.order;
        });
        _this2.treeGroups = equalizer.execute();
        if (_this2.selectedGroupId !== -1) {
          var group = _this2.treeGroups.find(function (g) {
            return g.id == _this2.selectedGroupId;
          });
          if (group) {
            _this2.selectedGroup = group;
            return;
          }
        }
        //TODO: после добавления нового раздела желательно выбирать его
        _this2.selectedGroup = _this2.treeGroups[0];
      }).then(function () {
        _this2.changeDocGroup();
      });
    }
  }, {
    key: "changeDocGroup",
    value: function changeDocGroup() {
      var _this3 = this;
      this.$appLoader.show();
      this.docsRepository.getSchoolDocs(parseInt(this.appContext.schoolId), this.docType.key, this.selectedGroup.id).then(function (docs) {
        if (docs.length == 0) {
          _this3.docs = [];
          _this3.$appLoader.hide();
          return;
        }
        _this3.docs = docs;
        _this3.selectedDoc = _this3.docs[0];
      }).then(function () {
        _this3.$appLoader.hide();
      });
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      var _this4 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editGroup.EditGroupComponent.controller,
        controllerAs: _editGroup.EditGroupComponent.controllerAs,
        templateUrl: _editGroup.EditGroupComponent.templateUrl,
        size: "md",
        resolve: {
          groups: function groups() {
            return angular.copy(_this4.groups);
          },
          parentGroup: function parentGroup() {
            return angular.copy(_this4.selectedGroup);
          },
          group: function group() {
            return {
              editing: true
            };
          },
          docType: function docType() {
            return _this4.docType.key;
          }
        }
      });
      modalInstance.result.then(function () {
        _this4.initGroups();
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup() {
      var _this5 = this;
      var _parentGroup = _.findWhere(this.groups, {
        id: this.selectedGroup.parentGroupId
      });
      var modalInstance = this.$uibModal.open({
        controller: _editGroup.EditGroupComponent.controller,
        controllerAs: _editGroup.EditGroupComponent.controllerAs,
        templateUrl: _editGroup.EditGroupComponent.templateUrl,
        size: "md",
        resolve: {
          groups: function groups() {
            return angular.copy(_this5.groups);
          },
          parentGroup: function parentGroup() {
            return angular.copy(_parentGroup);
          },
          group: function group() {
            return Object.assign(Object.assign({}, _this5.selectedGroup), {
              editing: true
            });
          },
          docType: function docType() {
            return _this5.docType.key;
          }
        }
      });
      modalInstance.result.then(function () {
        _this5.initGroups();
      });
    }
  }, {
    key: "removeGroup",
    value: function removeGroup() {
      var _this6 = this;
      this.$dialogs.confirm(this.language.SetupSchoolResources.kGroupDelConfirm).then(function () {
        return _this6.$longWork.execute(_this6.docsRepository.removeGroup(parseInt(_this6.appContext.schoolId), _this6.docType.key, _this6.selectedGroup.id).then(function () {
          _this6.initGroups();
          _this6.$alerts.success("Раздел успешно удален");
        }));
      });
    }
  }, {
    key: "createDoc",
    value: function createDoc() {
      var _this7 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editDoc.EditDocComponent.controller,
        controllerAs: _editDoc.EditDocComponent.controllerAs,
        templateUrl: _editDoc.EditDocComponent.templateUrl,
        size: "md",
        resolve: {
          schoolDoc: function schoolDoc() {
            return {
              id: -1,
              groupId: _this7.selectedGroup.id
            };
          }
        }
      });
      modalInstance.result.then(function () {
        _this7.changeDocGroup();
      });
    }
  }, {
    key: "editDoc",
    value: function editDoc() {
      var _this8 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editDoc.EditDocComponent.controller,
        controllerAs: _editDoc.EditDocComponent.controllerAs,
        templateUrl: _editDoc.EditDocComponent.templateUrl,
        size: "md",
        resolve: {
          schoolDoc: function schoolDoc() {
            return angular.copy(_this8.selectedDoc);
          }
        }
      });
      modalInstance.result.then(function () {
        _this8.changeDocGroup();
      });
    }
  }, {
    key: "removeDoc",
    value: function removeDoc() {
      var _this9 = this;
      this.$dialogs.confirm(this.language.Generic.ResourceGroups.kAreYouSureToDeleteDoc).then(function () {
        return _this9.$longWork.execute(_this9.docsRepository.removeDoc(parseInt(_this9.appContext.schoolId), _this9.selectedDoc.id).then(function () {
          _this9.changeDocGroup();
          _this9.$alerts.success("Документ успешно удален");
        }));
      });
    }
  }]);
  return DocsEditController;
}();
exports.DocsEditController = DocsEditController;
var DocsEditComponent = {
  controller: DocsEditController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/docs/edit/schoolDocsEdit.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arSchoolDocsEdit])).Set()
};
exports.DocsEditComponent = DocsEditComponent;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDocController = exports.EditDocComponent = void 0;
var _netcityModalCtrl = __webpack_require__(16);
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
  EditDocController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "language", "$longWork", "appContext", "docsRepository", "schoolDoc", "settingsProvider"];
  _inherits(EditDocController, _NetCityModalControll);
  var _super = _createSuper(EditDocController);
  /*@ngInject*/
  function EditDocController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, language, $longWork, appContext, docsRepository, schoolDoc, settingsProvider) {
    var _this;
    _classCallCheck(this, EditDocController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$longWork = $longWork;
    _this.appContext = appContext;
    _this.docsRepository = docsRepository;
    _this.schoolDoc = schoolDoc;
    _this.settingsProvider = settingsProvider;
    _this.doc = schoolDoc;
    _this.editMode = _this.doc.id > 0;
    _this.header = _this.editMode ? "Редактирование документа" : "Создание документа";
    _this.$scope.$watch(function () {
      return _this.doc.file;
    }, function (file) {
      if (file) {
        _this.doc.filename = file.name;
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
      if (!this.docForm.$valid) {
        this.docForm.$displayErrors = true;
        return;
      }
      // let promise = this.settingsProvider.UploadLimits;
      // тут происходит проверка на ограничения загрузки
      // желательно перевести на полноценную работу с fileattachment.component
      this.settingsProvider.UploadLimits.then(function (uploadLimits) {
        if (_this3.doc.file && _this3.doc.file.size / 1024 > uploadLimits.schoolDocFileSizeLimit) {
          //в КБ
          _this3.$dialogs.error(_this3.language.Generic.LearnApp.kServErrFileTooLarge + Math.round(uploadLimits.schoolDocFileSizeLimit / 1024) + "МБ");
          throw new Error("\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C ".concat(Math.round(uploadLimits.schoolDocFileSizeLimit / 1024), " \u041C\u0411"));
        }
        if (_this3.editMode) {
          _this3.$longWork.execute(_this3.docsRepository.editDoc(parseInt(_this3.appContext.schoolId), _this3.schoolDoc)).then(function (response) {
            _this3.$uibModalInstance.close(response);
            _this3.$alerts.success("Документ успешно изменен");
          });
        } else {
          _this3.$longWork.execute(_this3.docsRepository.createDoc(parseInt(_this3.appContext.schoolId), _this3.schoolDoc)).then(function (response) {
            _this3.$uibModalInstance.close(response);
            _this3.$alerts.success("документ успешно добавлен");
          });
        }
      });
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
  templateUrl: "/static/dist/app/school/docs/edit/editDoc.component.html"
};
exports.EditDocComponent = EditDocComponent;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditGroupController = exports.EditGroupComponent = void 0;
var _baseEditGroup = __webpack_require__(18);
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
  EditGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "appContext", "$alerts", "$longWork", "docsRepository", "groups", "group", "parentGroup", "docType"];
  _inherits(EditGroupController, _BaseEditGroupControl);
  var _super = _createSuper(EditGroupController);
  /*@ngInject*/
  function EditGroupController($scope, $uibModalInstance, changeTracker, $dialogs, language, appContext, $alerts, $longWork, docsRepository, groups, group, parentGroup, docType) {
    var _this;
    _classCallCheck(this, EditGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs, language, groups, group, parentGroup);
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.docsRepository = docsRepository;
    _this.docType = docType;
    // TODO: сделать блокировку на перетаскивание неудаляемых групп
    // this.treeOptions.beforeDrag = (event: any) => {
    // 	console.log(event.$modelValue);
    // 	console.log(this.data.group);
    // 	return event.$modelValue.id === this.data.group.id;
    // }
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
        this.$longWork.execute(this.docsRepository.editGroup(parseInt(this.appContext.schoolId), this.docType, Object.assign(Object.assign({}, this.data.group), {
          isDeleteDisabled: false
        }))).then(function (response) {
          _this2.$uibModalInstance.close(response);
          _this2.$alerts.success("Раздел успешно изменен");
        });
      } else {
        this.$longWork.execute(this.docsRepository.createGroup(parseInt(this.appContext.schoolId), this.docType, Object.assign(Object.assign({}, this.data.group), {
          isDeleteDisabled: false
        }))).then(function (response) {
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeIndexer = exports.BaseEditGroupController = void 0;
var _netcityModalCtrl = __webpack_require__(16);
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

/***/ })
/******/ ]);