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
/******/ 	return __webpack_require__(__webpack_require__.s = 247);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _la = __webpack_require__(249);
var _skysmart = __webpack_require__(256);
var _settings = __webpack_require__(257);
var _module = angular.module("irtech.netcity.school.activities", ['ngRoute', 'ngSanitize', 'ngMessages', 'ui.select', 'uikit.alerts', 'uikit.dialogs', 'ui.bootstrap', 'ui.bootstrap.tooltip', "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/skysmart/", _skysmart.SkySmartComponent).when("/", _la.LaComponent).otherwise({
    redirectTo: '/',
    resolve: {
      style: function style() {
        return angular.element('head').append('<link href="/static/dist/app/school/activities/style/activities.css" rel="stylesheet">');
      }
    }
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.component("laComponent", _la.LaComponent).component("skySmartComponent", _skysmart.SkySmartComponent).service("settingsRepository", _settings.SettingsRepository).config(config);

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LaController = exports.LaComponent = void 0;
var _urlHelper = __webpack_require__(7);
var _common = __webpack_require__(6);
var Rights = _interopRequireWildcard(__webpack_require__(10));
__webpack_require__(250);
var _commonLegacy = __webpack_require__(252);
var _common2 = __webpack_require__(254);
var _commonRouting = __webpack_require__(255);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LaController = /*#__PURE__*/function () {
  LaController.$inject = ["pageContext", "language", "$appLoader", "appContext", "$http", "$dialogs", "$q"];
  /*@ngInject*/
  function LaController(pageContext, language, $appLoader, appContext, $http, $dialogs, $q) {
    _classCallCheck(this, LaController);
    this.language = language;
    this.$appLoader = $appLoader;
    this.appContext = appContext;
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$q = $q;
    this.products = [];
    this.versions = [];
    pageContext.title = language.Generic.MenuFolders.kFNLearningApplications;
    this.urlHelper = new _urlHelper.UrlHelper();
    this.ciform = {
      kLAImport1: this.language.Generic.LearnApp.kLAImport1,
      kLAImport2: this.language.Generic.LearnApp.kLAImport2,
      kLAImport3: this.language.Generic.LearnApp.kLAImport3,
      kLAImport4: this.language.Generic.LearnApp.kLAImport4,
      kLAImport5: this.language.Generic.LearnApp.kLAImport5,
      kLAImport6: this.language.Generic.LearnApp.kLAImport6,
      kLAImportTool: this.language.Generic.LearnApp.kLAImportTool,
      kLAImportToolManual: this.language.Generic.LearnApp.kLAImportToolManual,
      kImportIntoLA: this.language.Generic.LearnApp.kImportIntoLA,
      kSelectLA: this.language.Generic.LearnApp.kSelectLA,
      productName: appContext.productName,
      activities: []
    };
    this.TTSUrl = "";
    this.products = [];
    this.versions = [];
    this.yaClass = null;
    this.load();
  }
  _createClass(LaController, [{
    key: "LAList",
    value: function LAList() {
      (0, _commonLegacy.ok)("MenuForm", "/asp/LearnApp/LAList.asp");
    }
  }, {
    key: "laImport",
    value: function laImport() {
      var _this = this;
      $.show.fileDialog({
        title: this.language.Generic.LearnApp.kImportLearnCourses,
        fileExts: ['.mdb'],
        additionalContent: '<input id="grIDFile" type="hidden" name="GroupID" />',
        invalidFileExtMsg: this.language.Generic.LearnApp.kAlertInvalidExt,
        url: '/asp/LearnApp/LADoImport.asp',
        contentHtml: $('#laImportTempl').html().replace(/(?:\r\n|\r|\n)/g, ''),
        onShownDlg: function onShownDlg() {
          if ($('#grID').val() == null) {
            $('#grIDFile').val('-1');
          } else {
            $('#grIDFile').val($('#grID').val());
          }
        },
        customCheck: function customCheck() {
          var LAN = _.filter($('select[name="LAN"]'), function (elem) {
            return $(elem).parents(".modal-dialog").length > 0;
          })[0];
          if (Number(LAN.nodeValue) == 0) {
            alert(_this.language.Generic.LearnApp.kAlertEnterLAName);
            LAN.focus();
            return false;
          }
          var form = $('form[name="selectFile"]');
          form.append($('<input type="hidden" name="LAN" />').val(LAN.nodeValue.replace(/courses\|(.*)/g, '$1')));
          return $.show.confirmation(_this.language.Generic.LearnApp.kConfirmMayTakeTime);
        },
        sizeLimit: function sizeLimit(uploadLimits) {
          return uploadLimits.lAImportFileSizeLimit;
        }
      });
    }
  }, {
    key: "action",
    value: function action(element) {
      element.action();
    }
  }, {
    key: "excludeActivities",
    value: function excludeActivities(activity) {
      return activity && activity.publisher && activity.publisher.code != 'skysmart';
    }
  }, {
    key: "selectGroup",
    value: function selectGroup(group) {
      this.ready = false;
      this.group["class"] = null;
      this.group = group;
      this.group["class"] = 'active';
      this.ready = true;
    }
  }, {
    key: "mapActivity",
    value: function mapActivity(activities) {
      if (activities.length == 1 && activities[0].id == "courses") {
        this.ciform.activities = _.chain(this.products).map(function (o) {
          return _.defaults(o, activities[0]);
        }).value();
        return this.ciform.activities;
      } else {
        return _.map(activities, function (o) {
          if (o.publisher.code == "nd") {
            o.img = "/static/dist/app/school/activities/img/thumb_" + o.id + ".jpg";
          } else if (o.publisher.code == "skysmart") {
            o.img = "/static/dist/app/school/activities/img/skysmart.jpg ";
          }
          return o;
        });
      }
    }
  }, {
    key: "laView",
    value: function laView(activity) {
      if (activity.IsDeleted == 1) {
        alert(this.language.Generic.LearnApp.kMsgLAWasDeleted);
      }
      var url = this.urlHelper.makeUrl("/asp/RemoteHostProxy.asp", {
        PROXYURL: activity.problemListUrl,
        TTSURL: this.TTSUrl,
        RO: 1,
        LAID: activity.id
      });
      var winOptions = {
        url: url,
        name: '_blank',
        specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660',
        winChild: this.wndApp
      };
      (0, _common2.windowOpen)(winOptions);
      this.wndApp = winOptions.winChild;
    }
  }, {
    key: "laPost",
    value: function laPost(url, data) {
      var getValue = function getValue(name) {
        return $("input[name='" + name + "'][type='hidden']").val();
      };
      _.extend(data, {
        AT: this.appContext.at,
        LoginType: getValue('LoginType'),
        Ver: getValue('ver'),
        Back: window.location.pathname
      });
      (0, _common.postTo)(url, data);
    }
  }, {
    key: "laAssign",
    value: function laAssign(activity) {
      this.laPost("/asp/Grade/LAAssignments.asp", {
        LAID: this.getId(activity),
        LADELETED: this.laDeleted(activity.isDeleted),
        LANAME: activity.name,
        LaURL: activity.problemListUrl
      });
    }
  }, {
    key: "laJournal",
    value: function laJournal(activity) {
      this.laPost("/asp/Grade/Gradebook.asp", {
        LAID: this.getId(activity)
      });
    }
  }, {
    key: "getId",
    value: function getId(activity) {
      if (activity.groupId == 1) {
        return 'courses|' + activity.id;
      }
      return activity.id;
    }
  }, {
    key: "laDeleted",
    value: function laDeleted(isDeleted) {
      if (isDeleted) {
        return 'Y';
      }
      return 'N';
    }
  }, {
    key: "isSkySmart",
    value: function isSkySmart(activity) {
      return activity && activity.publisher && activity.publisher.code == 'skysmart';
    }
  }, {
    key: "defaultErrorCatcher",
    value: function defaultErrorCatcher(response) {
      if (response === null || response === void 0 ? void 0 : response.data) {
        this.$dialogs.error(response.data.message || response.data.details || response.data || this.language.Generic.Common.kErrorMsg);
      } else {
        this.$dialogs.error(this.language.Generic.Common.kErrorMsg);
      }
    }
  }, {
    key: "defaultSilentErrorCatcher",
    value: function defaultSilentErrorCatcher(response) {
      if (this.appContext.environment == "dev") {
        console.debug(response.data.message || response.data.details || response.data || this.language.Generic.Common.kErrorMsg);
      }
    }
  }, {
    key: "getAllActivity",
    value: function getAllActivity() {
      var _this2 = this;
      var handler = function handler(response) {
        var f = function f(a) {
          return a.groupName + '. ' + a.publisher.name;
        };
        _this2.groups = _.chain(response.data).filter(function (activity) {
          return _this2.excludeActivities(activity);
        }).groupBy(function (a) {
          return a.groupId;
        }).map(function (a, key) {
          return {
            id: key,
            name: f(a[0]),
            "class": null,
            activities: _this2.mapActivity(a)
          };
        }).value();
        _this2.group = _this2.groups[0];
        _this2.selectGroup(_this2.groups[0]);
      };
      var versionKey = "LACourse";
      return this.$http.get(this.urlHelper.makeUrl("/webapi/grade/activities", {
        version: this.versions[versionKey]
      })).then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "getVersion",
    value: function getVersion(key) {
      var _this3 = this;
      var handler = function handler(response) {
        _this3.versions[key] = response.data;
      };
      return this.$http.get(this.urlHelper.makeUrl("/webapi/version", {
        key: key
      })).then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "getYaClass",
    value: function getYaClass() {
      var _this4 = this;
      var handler = function handler(response) {
        _this4.yaClass = response.data;
        console.log(response);
      };
      return this.$http.get("/webapi/yaClass/Get").then(handler, this.defaultSilentErrorCatcher);
    }
  }, {
    key: "role",
    value: function role() {
      var _this5 = this;
      var handler = function handler(resp) {
        var response = resp.data;
        _this5.rights = {
          add: _.contains(response, "add"),
          read: _.contains(response, "read"),
          journalAssign: _.contains(response, "journalAssign")
        };
      };
      return this.$http.get("/webapi/activity/rights").then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "getProducts",
    value: function getProducts(versionKey) {
      var _this6 = this;
      var handler = function handler(response) {
        _this6.products = response.data;
      };
      return this.$http.get(this.urlHelper.makeUrl("/webapi/grade/products", {
        version: this.versions[versionKey]
      })).then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "uploadLimits",
    value: function uploadLimits() {
      var _this7 = this;
      var handler = function handler(response) {
        _this7.uploadLimits = response.data;
      };
      return this.$http.get("/webapi/attachments/uploadLimits").then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "getTTSUrlRequestStatus",
    value: function getTTSUrlRequestStatus() {
      var _this8 = this;
      var handler = function handler(response) {
        _this8.TTSUrl = response.data;
      };
      return this.$http.get("/webapi/activity/TTSUrl").then(handler, this.defaultErrorCatcher);
    }
  }, {
    key: "gotoYaClass",
    value: function gotoYaClass() {
      var winOptions = {
        url: this.yaClass.authUrl,
        name: "_blank",
        winChild: this.wnd
      };
      (0, _common2.windowOpen)(winOptions);
      this.wnd = winOptions.winChild;
    }
  }, {
    key: "load",
    value: function load() {
      var _this9 = this;
      this.buttons = [{
        name: this.language.Generic.LearnApp.kBtnLAList,
        style: "glyphicon-list",
        action: this.LAList,
        language: this.language
      }, {
        name: this.language.Generic.LearnApp.kImportLearnCourses,
        style: "glyphicon glyphicon-import",
        action: this.laImport,
        language: this.language
      }];
      var versionKey = "LACourse";
      this.$q.all([this.getVersion(versionKey), this.role(), this.uploadLimits(), this.getTTSUrlRequestStatus(), this.getYaClass()]).then(function () {
        _this9.getProducts(versionKey).then(function () {
          _this9.getAllActivity().then(function () {
            _this9.$appLoader.hide();
          });
        });
      });
    }
  }]);
  return LaController;
}();
exports.LaController = LaController;
var resolve = (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arLAViewMaterials])).Set();
resolve.style = function () {
  return angular.element('head').append('<link href="/static/dist/app/school/activities/style/activities.css" rel="stylesheet">');
};
var LaComponent = {
  controller: LaController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/activities/la.component.html",
  resolve: resolve
};
exports.LaComponent = LaComponent;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CheckUserActivityPlug = function () {
  // пользователь активен
  var userIsActive = false;
  // последнее время активности сессии на клиенте
  var clientLastAccessTime;
  // время неактивности сессии пользователя, мс
  var tokenTimeOut = appContext.tokenTimeOut;

  // идентификаторы задач
  var task1Id, task2Id;
  var opts = {
    activityInterval: 300000,
    // мс
    checkEndOfSessionInterval: 60000 // мс
  };

  var setUserIsActivity = function setUserIsActivity() {
    if (!userIsActive) {
      userIsActive = true;
    }
  };

  // инициализирует время последней активности сессии
  var initLastAccessTime = function initLastAccessTime() {
    var now = new Date();
    clientLastAccessTime = now;
  };

  // продлевает сессию
  var extendSession = function extendSession() {
    return jsSubmit({
      action: "/webapi/context/keepAlive?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (time) {
      initLastAccessTime();
    });
  };
  var detectUserActivity = function detectUserActivity() {
    // если пользователь активен - отправить запрос на сервер и продлить сессию
    if (userIsActive) {
      var queries = [extendSession];
      extDeferred.when(queries).then(function () {
        userIsActive = false;
      });
    }
  };

  // останавливает задачу setInterval
  var stopTask = function stopTask(intervalId) {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  // останавливает выполнение задач
  var stopTasks = function stopTasks() {
    stopTask(task1Id);
    stopTask(task2Id);
  };
  var TimeOutError = /*#__PURE__*/function (_Error) {
    _inherits(TimeOutError, _Error);
    var _super = _createSuper(TimeOutError);
    function TimeOutError() {
      _classCallCheck(this, TimeOutError);
      return _super.apply(this, arguments);
    }
    return _createClass(TimeOutError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var handleError = function handleError(error) {
    stopTasks();
    if (error instanceof TimeOutError) {
      $.show.message(error.message, language.Generic.Common.kAttention).then(function () {
        return window.postTo({
          path: "/",
          method: "GET"
        });
      });
    } else {
      $.show.error(error.message);
    }
  };
  var getIdleMs = function getIdleMs(lastAccessTimeDt) {
    // срез времени
    var now = new Date();
    // время простоя в мс
    var ms = now - lastAccessTimeDt; // мс

    return ms;
  };

  // проверяет попадание оставшегося времени жизни сессии в двухминутный интервал
  var checkAnxietyInterval = function checkAnxietyInterval(lifetime) {
    var twoMinutsMs = 2 * 60 * 1000;
    return lifetime > 0 && lifetime < twoMinutsMs;
  };

  // вычисляет оставшееся время жизни сессии
  var getLifetime = function getLifetime(lastAccessTime) {
    var ms = getIdleMs(lastAccessTime);
    var lifetime = tokenTimeOut - ms;
    return lifetime;
  };
  var checkTime = function checkTime(time) {
    if (time === 0) {
      // для мс
      return;
    }
    if (time) {
      return;
    }
    throw new TimeOutError(language.Generic.Common.kTimeOutSessionWarn);
  };
  var showMessage = function showMessage() {
    if ($("#timeOutInfoId").is(":visible")) {
      return;
    }
    alert(language.Generic.SetupSchoolUI.kStrExpireWarning, {
      id: "timeOutInfoId"
    });
  };
  var checkServerSessionLifetime = function checkServerSessionLifetime() {
    // убедиться, что на сервере сессия скоро подойдет к концу
    jsSubmit({
      action: "/webapi/context/lifetime?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (serverSessionLifetime) {
      try {
        checkTime(serverSessionLifetime);
        if (checkAnxietyInterval(serverSessionLifetime)) {
          if (userIsActive) {
            extendSession().then(function () {
              userIsActive = false;
            });
          } else {
            showMessage();
          }
        }
      } catch (ex) {
        handleError(ex);
      }
    });
  };
  var checkSessionLifetime = function checkSessionLifetime() {
    try {
      checkTime(clientLastAccessTime);
      var clientSessionLifetime = getLifetime(clientLastAccessTime);
      if (checkAnxietyInterval(clientSessionLifetime)) {
        // убедиться, что на сервере сессия скоро подойдет к концу
        checkServerSessionLifetime();
      }
    } catch (ex) {
      handleError(ex);
    }
  };

  // проверяет истечение времени жизни сессии
  var sessionExpired = function sessionExpired() {
    if (!clientLastAccessTime) {
      return true;
    }
    var clientIdleMs = getIdleMs(clientLastAccessTime);
    return clientIdleMs > tokenTimeOut;
  };
  var sessionExpiredWhen = function sessionExpiredWhen() {
    var deferred = $.Deferred();
    var isExpired = sessionExpired();
    if (isExpired) {
      // убедиться, что на сервере сессия тоже истекла
      jsSubmit({
        action: "/webapi/context/expired?token=" + appContext.at,
        auth: false,
        method: "GET",
        defaultErrorHandling: false
      }).then(function (expired) {
        deferred.resolve(expired);
      });
    } else {
      deferred.resolve(isExpired);
    }
    return deferred.promise();
  };
  var handleEndSession = function handleEndSession() {
    stopTasks();
    if ($("#timeOutInfoId").is(":visible")) {
      $("#timeOutInfoId").modal("hide");
    }
    $.show.message(language.Generic.Common.kTimeOutSessionWarn, language.Generic.Common.kAttention).then(function () {
      return window.postTo({
        path: "/",
        method: "GET"
      });
    });
  };
  var checkEndOfSession = function checkEndOfSession() {
    sessionExpiredWhen().then(function (isExpired) {
      if (isExpired) {
        // сессия истекла
        handleEndSession();
      } else {
        checkSessionLifetime();
      }
    });
  };

  // инициализирует выполнение задач
  var initTasks = function initTasks() {
    // задачи
    var task1 = detectUserActivity;
    var task2 = checkEndOfSession;
    initLastAccessTime();

    // запуск задач
    task1Id = setInterval(task1, opts.activityInterval);
    task2Id = setInterval(task2, opts.checkEndOfSessionInterval);

    // подписаться на события движения мыши и нажатия клавиатуры
    $(document).on("mousemove", setUserIsActivity);
    $(document).on("keypress", setUserIsActivity);
  };
  initTasks();
}();
(function (exp, name) {
  var exports;
  var exported = false;
  if ( true && module !== null) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === undefined)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(CheckUserActivityPlug);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(251)(module)))

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ 252:
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
var _extensionDeferred = _interopRequireDefault(__webpack_require__(253));
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

/***/ 253:
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkySmartController = exports.SkySmartComponent = void 0;
var _la = __webpack_require__(249);
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _commonRouting = __webpack_require__(255);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var SkySmartController = /*#__PURE__*/function (_LaController) {
  SkySmartController.$inject = ["pageContext", "language", "$appLoader", "appContext", "$http", "$dialogs", "$q"];
  _inherits(SkySmartController, _LaController);
  var _super = _createSuper(SkySmartController);
  /*@ngInject*/
  function SkySmartController(pageContext, language, $appLoader, appContext, $http, $dialogs, $q) {
    var _this;
    _classCallCheck(this, SkySmartController);
    _this = _super.call(this, pageContext, language, $appLoader, appContext, $http, $dialogs, $q);
    _this.language = language;
    _this.$appLoader = $appLoader;
    _this.appContext = appContext;
    _this.$dialogs = $dialogs;
    _this.$q = $q;
    _this.wnd = null;
    pageContext.title = language.Generic.MenuFolders.kFNSkySmart;
    _this.buttons = [];
    return _this;
  }
  _createClass(SkySmartController, [{
    key: "excludeActivities",
    value: function excludeActivities(activity) {
      return activity && activity.publisher && activity.publisher.code == 'skysmart';
    }
  }, {
    key: "laAssign",
    value: function laAssign(activity) {
      this.laPost("/asp/Grade/LAAssignments.asp", {
        LAID: this.getId(activity),
        LADELETED: this.laDeleted(activity.isDeleted),
        LANAME: activity.name,
        LaURL: activity.problemListUrl,
        TTSURL: this.TTSUrl,
        LABACK: "/angular/school/activities/skysmart"
      });
    }
  }]);
  return SkySmartController;
}(_la.LaController);
exports.SkySmartController = SkySmartController;
var resolve = (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arLAViewMaterials])).Set();
resolve.style = function () {
  return angular.element('head').append('<link href="/static/dist/app/school/activities/style/activities.css" rel="stylesheet">');
};
var SkySmartComponent = {
  controller: SkySmartController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/activities/la.component.html",
  resolve: resolve
};
exports.SkySmartComponent = SkySmartComponent;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsRepository = void 0;
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

/***/ })

/******/ });