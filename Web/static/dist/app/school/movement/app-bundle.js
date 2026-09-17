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
/******/ 	return __webpack_require__(__webpack_require__.s = 364);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;
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
var UsersRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(UsersRepository, _BaseRepository);
  var _super = _createSuper(UsersRepository);
  function UsersRepository() {
    _classCallCheck(this, UsersRepository);
    return _super.apply(this, arguments);
  }
  _createClass(UsersRepository, [{
    key: "getStaffList",
    value: function getStaffList(roles) {
      var params = {
        role: null
      };
      if (roles) {
        params.role = roles;
      }
      return this.$http.get("/webapi/users/staff", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTeacherList",
    value: function getTeacherList(subjectId, sgId, withSubjects) {
      var params = {
        subjectId: null,
        sgId: null
      };
      if (subjectId) {
        params.subjectId = subjectId;
      }
      if (sgId) {
        params.sgId = sgId;
      }
      if (withSubjects) {
        params.withSubjects = withSubjects;
      }
      return this.$http.get("/webapi/users/staff/teachers", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/info")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStaffsForImport",
    value: function getStaffsForImport(schoolId) {
      var params = {
        schoolId: schoolId
      };
      var res = this.$http.get("/webapi/users/staff/import/browse", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
      return res;
    }
  }, {
    key: "getDirector",
    value: function getDirector(schoolId) {
      var params = {
        schoolId: schoolId
      };
      var res = this.$http.get("/webapi/users/director", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
      return res;
    }
  }, {
    key: "postReuseUsers",
    value: function postReuseUsers(userIds, yearId) {
      //let params = { yearId };
      //let res = this.$http.post("/webapi/users/staff/import/reuseStaff", userIds, { params }).catch(this.handleError);
      return this.$http.post("/webapi/users/staff/import/reuseStaff/?yearId=" + yearId, userIds).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentParents",
    value: function getStudentParents(studentIds) {
      var data = {
        studentId: studentIds
      };
      if (studentIds.length < 10) {
        return this.$http.get("/webapi/users/studentparents", {
          params: data
        }).then(this.handleResponse)["catch"](this.handleError);
      }
      return this.$http.post("/webapi/users/studentparents", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentList",
    value: function getStudentList(query) {
      return this.$http.get('/webapi/users/studentList', {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addUsers",
    value: function addUsers(userDtos) {
      return this.$http.post("/webapi/users", userDtos).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "checkSimilars",
    value: function checkSimilars(similarsCheckRequest, roleGroup) {
      return this.$http.post("/webapi/users/get-similars", similarsCheckRequest, {
        params: {
          roleGroup: roleGroup
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportStudents",
    value: function exportStudents(filterContext, studentExportType, parentExportType, search) {
      var query = {
        filterContext: filterContext,
        studentExportType: studentExportType,
        parentExportType: parentExportType,
        search: search
      };
      return this.$http.post("/webapi/users/students/export", query).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportStaff",
    value: function exportStaff(filterContext, search) {
      var query = {
        filterContext: filterContext,
        search: search
      };
      return this.$http.post("/webapi/users/staff/export", query).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "importStudentsForUpdate",
    value: function importStudentsForUpdate(skipWarnings) {
      var data = "=" + skipWarnings;
      var settings = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      return this.$http.post("/webapi/users/batch-update/import", data, settings).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return UsersRepository;
}(_repository.BaseRepository);
exports.UsersRepository = UsersRepository;

/***/ }),

/***/ 25:
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

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsProvider = exports.PfdoIntegrationType = void 0;
var ServerSettingsInfo = _interopRequireWildcard(__webpack_require__(309));
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

/***/ 309:
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearsRepository = void 0;
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
var YearsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(YearsRepository, _BaseRepository);
  var _super = _createSuper(YearsRepository);
  function YearsRepository() {
    _classCallCheck(this, YearsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(YearsRepository, [{
    key: "getYearInfo",
    value: function getYearInfo() {
      return this.$http.get("/webapi/years/current").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPreviousYearInfo",
    value: function getPreviousYearInfo() {
      return this.$http.get("/webapi/years/previous").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolYearInfo",
    value: function getSchoolYearInfo() {
      return this.$http.get("/webapi/years/current").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolYearInfoById",
    value: function getSchoolYearInfoById(yearId) {
      return this.$http.get("/webapi/years/".concat(yearId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYearWeekends",
    value: function getYearWeekends(yearId) {
      return this.$http.get("/webapi/years/".concat(yearId, "/weekends")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYearsState",
    value: function getYearsState() {
      return this.$http.get("/webapi/calendar/years/state").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCreateFutureYearConfirms",
    value: function getCreateFutureYearConfirms() {
      return this.$http.get("/webapi/calendar/years/future/create").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createFutureYear",
    value: function createFutureYear() {
      return this.$http.get("/webapi/years/createfuture").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "openFutureYear",
    value: function openFutureYear() {
      return this.$http.post("/webapi/years/openfuture").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "futureYear",
    value: function futureYear() {
      return this.$http.get("/webapi/years/future").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getOpenFutureYearConfirms",
    value: function getOpenFutureYearConfirms() {
      return this.$http.get("/webapi/calendar/years/future/open").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createSchoolYear",
    value: function createSchoolYear(globalYearId, weekEndDays) {
      return this.$http.post("/webapi/years/", weekEndDays, {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editSchoolYear",
    value: function editSchoolYear(yearId, weekEndDays) {
      return this.$http.post("/webapi/years/".concat(yearId, "/weekends"), weekEndDays).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getWeekDays",
    value: function getWeekDays() {
      return this.$http.get("/webapi/references/weekDays").then(this.handleResponse, this.handleError);
    }
  }]);
  return YearsRepository;
}(_repository.BaseRepository);
exports.YearsRepository = YearsRepository;

/***/ }),

/***/ 312:
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

/***/ 321:
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(17);
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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _movedoc = __webpack_require__(366);
var _pool = __webpack_require__(371);
var _eservicesStudentlist = __webpack_require__(375);
var _movebook = __webpack_require__(376);
var _movement = __webpack_require__(368);
var _movesource = __webpack_require__(377);
var _studentsQuickAdd = __webpack_require__(385);
var _users = __webpack_require__(18);
var _departOrgSelector = __webpack_require__(389);
var _repositories = __webpack_require__(322);
var _importValidation = __webpack_require__(390);
var _importValidationTable = __webpack_require__(392);
var _earlyaccess = __webpack_require__(394);
var _years = __webpack_require__(31);
var _similars = __webpack_require__(395);
var _settings = __webpack_require__(257);
var _userslistqadd = __webpack_require__(402);
var _nsadduser = __webpack_require__(403);
var _userinfo = __webpack_require__(404);
var _commonuserinfo = __webpack_require__(406);
var _module = angular.module("irtech.netcity.school.movement", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/book/", _movebook.MoveBookComponent).when("/pool/", _pool.PoolComponent).when("/movedoc/:docId?", _movedoc.MoveDocComponent).when("/movedoc/:docId/add/:sourceId", _movesource.MoveSourceComponent).when("/quickAdd/", _studentsQuickAdd.StudentQuickAddComponent).when("/eservices", _eservicesStudentlist.EServicesStudentListComponent).otherwise(_pool.PoolComponent);
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.service("moveDocRepository", _movement.MoveDocRepository).service("movementRepository", _movement.MovementRepository).service("moveSourceRepository", _movement.MoveSourceRepository).service("moveClassesRepository", _movement.MoveClassesRepository).service("importService", _importValidation.ImportService).service("educContractBlanksRepository", _movement.EducContractBlanksRepository).service("usersRepository", _users.UsersRepository).service("editDocContext", _movedoc.EditDocContext).service("docMapper", _movedoc.DocMapper).service("earlyAccessService", _earlyaccess.EarlyAccessService).service("educOrganizationsRepository", _repositories.EducOrganizationsRepository).service("similarRepository", _movement.SimilarRepository).service("similarsService", _similars.SimilarsService).service("settingsRepository", _settings.SettingsRepository).service("yearsRepository", _years.YearsRepository).service("userInfoRepository", _userinfo.UserInfoRepository).component("nsDepartOrgSelector", _departOrgSelector.NsDepartOrgSelectorComponent).component("nsDepartOrg", _departOrgSelector.NsDepartOrgComponent).component("nsOutsideType", _departOrgSelector.NsOutsideTypeComponent).component(_importValidationTable.ImportValidationTableComponent.selector, _importValidationTable.ImportValidationTableComponent).component(_commonuserinfo.CommonUserInfoComponent.selector, _commonuserinfo.CommonUserInfoComponent).component(_userslistqadd.UsersListQAddComponent.selector, _userslistqadd.UsersListQAddComponent).component(_nsadduser.NsAddUserComponent.selector, _nsadduser.NsAddUserComponent).directive("nsDateModel", function () {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2strfrm(new Date(dateParam), "dd".concat(String.fromCharCode(1), "mm").concat(String.fromCharCode(1), "yyyy").concat(String.fromCharCode(1), ".")) : null;
  };
  return {
    restrict: "A",
    scope: {
      date: "=nsDateModel"
    },
    link: function link(scope, element) {
      var isoDate = scope.date;
      var strDate = toStr(isoDate);
      $(element).val(strDate);
      $(element).on("change", function () {
        var date = dateUtils.str2date($(element).val());
        if (date) {
          scope.date = date.toISOString();
        } else {
          scope.date = null;
          element.$invalid = true;
        }
        scope.$apply();
      });
    },
    replace: false
  };
}).config(config);

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveDocComponent = exports.EditDocContext = exports.DocMapper = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _common = __webpack_require__(25);
var _common2 = __webpack_require__(254);
var _movement = __webpack_require__(367);
var _movement2 = __webpack_require__(368);
var _settingsProvider = __webpack_require__(308);
var _educcontractsBlanks = __webpack_require__(369);
var _sourcesSelector = __webpack_require__(370);
var _common3 = __webpack_require__(44);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MoveDocController = /*#__PURE__*/function () {
  MoveDocController.$inject = ["language", "$scope", "pageContext", "moveDocRepository", "moveSourceRepository", "educOrganizationsRepository", "$alerts", "$location", "downloadService", "$routeParams", "$uibModal", "$longWork", "$dialogs", "$appLoader", "$timeout", "dateUtils", "editDocContext", "docMapper", "changeTracker", "printExportService", "appContext", "taskQueueService", "settingsProvider", "educContractBlanksRepository"];
  /*@ngInject*/
  function MoveDocController(language, $scope, pageContext, moveDocRepository, moveSourceRepository, educOrganizationsRepository, $alerts, $location, downloadService, $routeParams, $uibModal, $longWork, $dialogs, $appLoader, $timeout, dateUtils, editDocContext, docMapper, changeTracker, printExportService, appContext, taskQueueService, settingsProvider, educContractBlanksRepository) {
    var _this = this;
    _classCallCheck(this, MoveDocController);
    this.language = language;
    this.$scope = $scope;
    this.moveDocRepository = moveDocRepository;
    this.moveSourceRepository = moveSourceRepository;
    this.$alerts = $alerts;
    this.$location = $location;
    this.downloadService = downloadService;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.$timeout = $timeout;
    this.dateUtils = dateUtils;
    this.editDocContext = editDocContext;
    this.docMapper = docMapper;
    this.changeTracker = changeTracker;
    this.printExportService = printExportService;
    this.appContext = appContext;
    this.taskQueueService = taskQueueService;
    this.educContractBlanksRepository = educContractBlanksRepository;
    this.withSubTypes = false;
    this.selection = new _multiSelectable["default"]();
    this.wnd = null;
    //период даты ликвидация задолженности
    this.debtPeriod = null;
    pageContext.clear();
    pageContext.title = $routeParams.docId ? language.Generic.Movement.kTitleMBEdit : language.Generic.Movement.kTitleMBCreate;
    pageContext.back = {
      href: "/book/"
    };
    pageContext.parent = {
      title: language.Movement.kTitle_MoveBook,
      href: "/book/"
    };
    this.validateDocNumber = false;
    this.adminDateStart = this.getAdminDateStart();
    this.departOrgEventEmitter = new _common3.EventEmitter();
    this.data = {
      yearName: appContext.currYear,
      docId: parseInt($routeParams.docId) || null,
      docType: null,
      docTypeInit: $location.search().docType,
      docSubType: null,
      moveDoc: null,
      yearId: parseInt(appContext.yearId),
      schoolId: parseInt(appContext.schoolId),
      personData: false,
      initDocDate: null,
      initAdminDate: null,
      docTypes: [],
      allDocTypes: [],
      docSubTypes: [],
      allowedDocSubTypes: [],
      state: null,
      schoolSettings: null,
      editReferencesFlag: false,
      funcType: appContext.funcType,
      outsideTypes: [],
      awardTypes: [],
      educOrgs: [],
      existsNotJuniorMax: false,
      reasons: [],
      step: -1,
      schoolAddrInfo: null,
      columnsAmount: 1
    };
    this.state = {
      readOnly: appContext.readOnly || !appContext.hasAnyRight([Rights.arMoveBookEdit]),
      hasEditRight: appContext.hasAnyRight([Rights.arMoveBookEdit]),
      createMode: false,
      editMode: false,
      ready: true,
      dataReady: false,
      emptyData: false,
      viewReady: true,
      isLastYearToNewYear: false
    };
    if (this.appContext.funcType == _common.FuncType.addSchool) {
      settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (val) {
        return _this.data.pfdoIntegrationType = val;
      });
    }
    this.personDataReady = settingsProvider.AppFlags.PersonData().then(function (personData) {
      _this.data.personData = personData;
    });
    this.typesReady = moveDocRepository.getMoveDocTypes().then(function (docTypes) {
      _this.data.docTypes = docTypes;
      _this.data.allDocTypes = docTypes;
    });
    this.subTypesReady = moveDocRepository.getMoveDocSubTypes().then(function (docSubTypes) {
      _this.data.docSubTypes = docSubTypes;
    });
    this.outsideTypesReady = moveDocRepository.getOutsideTypes().then(function (outsideTypes) {
      _this.data.outsideTypes = outsideTypes;
    });
    this.schoolSettingsReady = moveDocRepository.getSchoolSettings().then(function (schoolSettings) {
      _this.data.schoolSettings = schoolSettings;
    });
    this.schoolAddrInfoReady = educOrganizationsRepository.getSchoolAddressInfo(this.data.schoolId).then(function (schoolAddrInfo) {
      _this.data.schoolAddrInfo = schoolAddrInfo;
    });
    this.editReferencesFlagReady = moveDocRepository.getEditReferencesFlag().then(function (editReferencesFlag) {
      _this.data.editReferencesFlag = editReferencesFlag;
    });
    window.afterCreateOu = function (newOuInfo) {
      var subDocForEdit = _.find(_this.data.moveDoc.subDocs, function (item) {
        return _.find(item.students, function (item) {
          return item.canEdit;
        }) != null;
      });
      if (subDocForEdit) {
        var studentForEdit = _.find(subDocForEdit.students, function (item) {
          return item.canEdit;
        });
        if (studentForEdit) {
          _this.data.educOrgs.push(newOuInfo);
          studentForEdit.educOrg = newOuInfo;
        }
      }
    };
    if (this.data.docId > 0) {
      this.state.editMode = true;
      this.state.createMode = false;
      this.reloadDocument().then(function () {
        _this.data.columnsAmount = _this.getColumnsAmount();
        _this.state.dataReady = true;
        if (_this.appContext.funcType == _common.FuncType.addSchool && _this.data.docType.id === 2 && _this.data.pfdoIntegrationType == _settingsProvider.PfdoIntegrationType.IRTechEes) {
          _this.showEducContractBlanks = true;
        }
        _this.$appLoader.hide();
        if (editDocContext.moveDoc && editDocContext.moveDoc.id === _this.data.docId) {
          _this.data.moveDoc = angular.extend(_this.data.moveDoc, editDocContext.moveDoc);
        }
        if (_this.displayOrgsSelection()) {
          _this.departOrgOptions = {
            moveDocType: _this.data.moveDoc.docType,
            funcType: _this.appContext.funcType,
            outsideTypes: _this.data.outsideTypes,
            editReferencesFlag: _this.data.editReferencesFlag
          };
        }
      });
    } else {
      this.state.editMode = false;
      this.state.createMode = true;
      Promise.all([this.typesReady, this.subTypesReady]).then(function () {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        today = _this.dateUtils.asUTC(today);
        _this.data.moveDoc = {
          id: -1,
          docDate: today,
          adminDate: today,
          schoolYearId: parseInt(appContext.yearId),
          docNumber: "",
          docType: null,
          subDocs: []
        };
        if (editDocContext.docType > 0) {
          _this.data.docType = _.findWhere(_this.data.docTypes, {
            id: editDocContext.docType
          });
        } else if (_this.data.docTypes && _this.data.docTypes.length) {
          _this.data.docType = _this.data.docTypeInit ? _.find(_this.data.docTypes, function (item) {
            return item.key === _this.data.docTypeInit;
          }) : _this.data.docTypes[0];
        }
        _this.initDocSubTypes();
        if (editDocContext.moveDoc) {
          _this.data.docSubType = _.findWhere(_this.data.allowedDocSubTypes, {
            id: editDocContext.moveDoc.docSubType
          });
        }
        _this.data.docSubType = _this.data.docSubType || _.first(_this.data.allowedDocSubTypes);
        _this.syncDocType();
        if (editDocContext.moveDoc && editDocContext.moveDoc.id === -1) {
          _this.data.moveDoc = editDocContext.moveDoc;
        }
        _this.initDocState().then(function () {
          _this.initMovDocDates();
          _this.$appLoader.hide();
        });
      });
    }
  }
  _createClass(MoveDocController, [{
    key: "educContractBlanks",
    value: function educContractBlanks() {
      var _this2 = this;
      var work = this.$longWork.show();
      this.educContractBlanksRepository.getBlanksInfo().then(function (_blanksInfo) {
        work.close();
        _this2.$uibModal.open({
          controller: _educcontractsBlanks.EducContractBlanksComponent.controller,
          controllerAs: _educcontractsBlanks.EducContractBlanksComponent.controllerAs,
          templateUrl: _educcontractsBlanks.EducContractBlanksComponent.templateUrl,
          resolve: {
            blanksInfo: function blanksInfo() {
              return _blanksInfo;
            }
          }
        });
      });
    }
  }, {
    key: "toggleSubDocChecks",
    value: function toggleSubDocChecks(selectAll, subDoc) {
      var _this3 = this;
      subDoc.students.forEach(function (std) {
        if (_this3.selection.isSelected(std)) _this3.selection.select(std);
      });
      if (selectAll) {
        subDoc.students.forEach(function (std) {
          return _this3.selection.select(std);
        });
      }
    }
  }, {
    key: "existsAwardColumn",
    value: function existsAwardColumn() {
      return this.data.docType && this.data.docType.key === 'Graduate' && this.data.funcType != _common.FuncType.preSchool && this.data.existsNotJuniorMax;
    }
  }, {
    key: "existsPassDebtDateColumn",
    value: function existsPassDebtDateColumn() {
      return this.data.docType && (this.data.docType.key === 'Year' || this.data.docType.key === 'Graduate') && this.data.moveDoc.docSubType === 3 && this.data.funcType == _common.FuncType.school;
    }
  }, {
    key: "existsArriveFromColumn",
    value: function existsArriveFromColumn() {
      return this.data.docType && this.data.docType.key === 'Enroll';
    }
  }, {
    key: "existsInstitutSpecifedInDocOfDisposalColumn",
    value: function existsInstitutSpecifedInDocOfDisposalColumn() {
      return this.data.docType && this.data.docType.key === 'Enroll' && this.data.funcType != _common.FuncType.addSchool;
    }
  }, {
    key: "existsDepartColumn",
    value: function existsDepartColumn() {
      return this.data.docType && (this.data.docType.key === 'Out' || this.data.docType.key === 'Graduate') && this.data.funcType != _common.FuncType.addSchool;
    }
  }, {
    key: "existsDepartReasonColumn",
    value: function existsDepartReasonColumn() {
      return this.data.docType && (this.data.docType.key === 'Out' || this.data.docType.key === 'Graduate');
    }
  }, {
    key: "existsEditingColumn",
    value: function existsEditingColumn() {
      return this.data.docType && (this.state.hasEditRight && this.state.isLastYearToNewYear || !this.state.readOnly && (this.data.docType.key === 'Out' || this.data.docType.key === 'Enroll' || this.data.docType.key === 'Graduate' || this.data.docType.key === 'Year' && this.data.moveDoc.docSubType === 3 && this.data.funcType == _common.FuncType.school));
    }
  }, {
    key: "getColumnsAmount",
    value: function getColumnsAmount() {
      var columnsAmount = 4;
      if (this.existsAwardColumn()) {
        columnsAmount += 1;
      }
      if (this.existsPassDebtDateColumn()) {
        columnsAmount += 1;
      }
      if (this.existsArriveFromColumn()) {
        columnsAmount += 1;
      }
      if (this.existsInstitutSpecifedInDocOfDisposalColumn()) {
        columnsAmount += 1;
      }
      if (this.existsDepartColumn()) {
        columnsAmount += 1;
      }
      if (this.existsDepartReasonColumn()) {
        columnsAmount += 1;
      }
      if (this.existsEditingColumn()) {
        columnsAmount += 1;
      }
      return columnsAmount;
    }
    //загрузка информации по школе
  }, {
    key: "loadSchoolInfo",
    value: function loadSchoolInfo() {
      return this.moveSourceRepository.loadDataForMoveDocPrint();
    }
    //создает модель
  }, {
    key: "createPrintModel",
    value: function createPrintModel() {
      var _this4 = this;
      var subDocs = this.getSubDocsPrintModel();
      return this.loadSchoolInfo().then(function (schoolInfo) {
        return {
          now: _this4.appContext.now,
          productName: _this4.appContext.productName,
          version: _this4.appContext.version,
          docNumber: _this4.data.moveDoc.docNumber,
          shortName: _this4.data.docType.shortName,
          schoolAddress: schoolInfo.schoolAddress,
          schoolPhone: schoolInfo.schoolPhones,
          fax: schoolInfo.schoolFax,
          direcotrTitle: _this4.language.SetupSchoolUI.kOUDirector,
          direcotrFio: schoolInfo.directorName,
          subdocs: subDocs,
          schoolName: _this4.appContext.fullSchoolName,
          docDateStr: _this4.dateUtils.date2str(_this4.appContext.funcType == _common.FuncType.school && _this4.data.docType.key === 'Enroll' ? _this4.data.moveDoc.adminDate : _this4.data.moveDoc.docDate)
        };
      });
    }
    //формирование заголовков значениями например такими: "Зачислить в 1а класс следующих учеников:"
  }, {
    key: "getSubDocsPrintModel",
    value: function getSubDocsPrintModel() {
      var _this5 = this;
      var docType = this.data.moveDoc.docType;
      var subDocs = this.data.moveDoc.subDocs;
      return subDocs.map(function (subDoc) {
        var classNameFrom = subDoc.educGroupFrom ? subDoc.educGroupFrom.name : "";
        var classNameTo = subDoc.educGroupTo ? subDoc.educGroupTo.name : "";
        var actionWithStudents = '';
        if (docType === _movement.MoveDocType.Out) {
          actionWithStudents = _this5.language.Movement.kOutStudentsFromClass.replace(/%/i, classNameFrom);
        } else if (docType === _movement.MoveDocType.Enroll) {
          actionWithStudents = _this5.language.Movement.kEnrollStudentsToClass.replace(/%/i, classNameTo);
        } else if (docType === _movement.MoveDocType.Move || docType === _movement.MoveDocType.Year || docType === _movement.MoveDocType.Stay) {
          var className1 = subDoc.educGroupFrom.name;
          var className2 = subDoc.educGroupTo.name;
          actionWithStudents = _this5.language.Movement.kMoveStudents.replace(/%1/i, className1).replace(/%2/i, className2);
        } else if (docType === _movement.MoveDocType.Graduate) {
          actionWithStudents = _this5.language.Movement.kGraduateStudentsFromClass.replace(/%/i, classNameFrom);
        } else {
          _this5.$alerts.error(_this5.language.Generic.Movement.kErrUnknownDocType);
        }
        return {
          title: actionWithStudents,
          students: subDoc.students
        };
      });
    }
    //отображение окна для печати
  }, {
    key: "printMoveDoc",
    value: function printMoveDoc() {
      var _this6 = this;
      this.createPrintModel().then(function (model) {
        _this6.printExportService.print("/static/dist/app/school/movement/movedoc/printMoveDocTmpl.html", model);
      });
    }
    //экспорт в EXCEL
  }, {
    key: "export",
    value: function _export() {
      var _this7 = this;
      this.createPrintModel().then(function (model) {
        var options = {
          excelTitle: "Документ о движении"
        };
        _this7.printExportService["export"]("/static/dist/app/school/movement/movedoc/printMoveDocTmpl.html", model, options);
      });
    }
  }, {
    key: "initDocSubTypes",
    value: function initDocSubTypes() {
      var _this8 = this;
      try {
        this.data.allowedDocSubTypes = _.filter(this.data.docSubTypes, function (st) {
          return st.docType === _this8.data.docType.key;
        });
        this.withSubTypes = this.data.allowedDocSubTypes.length > 0;
      } catch (ex) {
        console.error(ex);
      }
    }
  }, {
    key: "initDocState",
    value: function initDocState() {
      var _this9 = this;
      return this.moveDocRepository.getState(this.data.docType.key).then(function (moveBookState) {
        var _a;
        _this9.data.state = moveBookState;
        if (!_this9.state.isLastYearToNewYear && !_this9.data.state.yearMovementAllowed) {
          //исключаем летние документы.
          //todo. использовать константы
          _this9.data.docTypes = _.filter(_this9.data.docTypes, function (dt) {
            return dt.id <= 3;
          });
          if (((_a = _this9.appContext) === null || _a === void 0 ? void 0 : _a.funcType) == _common.FuncType.addSchool) {
            var graduateDocType = _.find(_this9.data.allDocTypes, function (dt) {
              return dt.id == 6;
            });
            if (graduateDocType) {
              _this9.data.docTypes.push(graduateDocType);
            }
          }
        }
        if (_this9.data.state.docDateRange) {
          _this9.data.state.docDateRange.start = _this9.dateUtils.asUTC(new Date(_this9.data.state.docDateRange.start));
          _this9.data.state.docDateRange.end = _this9.dateUtils.asUTC(new Date(_this9.data.state.docDateRange.end));
        }
        if (_this9.data.state.activeMovePeriods.length == 0) {
          _this9.state.readOnly = true;
        } else if (_this9.state.editMode && _this9.data.state.activeMovePeriods.length == 1) {
          //если дата документа ограничена одним конкретным отчетным периодом то ограничения более строгие
          //здесь может оказаться dtMoveDocStart > dtMoveDocEnd, т.е. создание такого нового документа - невозможно,
          //существующий документ - должен быть только readonly
          if (_this9.data.moveDoc.docDate < _this9.data.state.docDateRange.start || _this9.data.moveDoc.docDate > _this9.data.state.docDateRange.end) {
            _this9.state.readOnly = true;
          }
        }
        if (_this9.data.state.docDateRange) {
          _this9.$timeout(function () {
            dateInput.initDateInputs(_this9.data.state.docDateRange.start, _this9.data.state.docDateRange.end);
            _this9.changeTracker.clearDataChanges();
          }, 200);
        }
        return moveBookState;
      });
    }
  }, {
    key: "syncDocType",
    value: function syncDocType() {
      this.data.moveDoc.docType = this.data.docType.key;
      this.editDocContext.docType = this.data.docType.id;
      this.data.moveDoc.docSubType = this.data.docSubType && this.data.docSubType.id;
    }
  }, {
    key: "syncDocDate",
    value: function syncDocDate() {
      //this.data.moveDoc.docDate = dateUtils.str2date(this.data.docDateStr);
      //if (this.data.adminDateStr) {
      //	this.data.moveDoc.adminDate = dateUtils.str2date(this.data.adminDateStr);
      //}
    }
  }, {
    key: "initMovDocDates",
    value: function initMovDocDates() {
      var docDateRange = this.data.state.docDateRange;
      if (this.data.moveDoc.docDate < docDateRange.start) {
        this.data.moveDoc.docDate = docDateRange.start;
      } else if (this.data.moveDoc.docDate > docDateRange.end) {
        this.data.moveDoc.docDate = docDateRange.end;
      }
      if (this.data.moveDoc.adminDate) {
        this.data.moveDoc.adminDate = this.data.moveDoc.docDate;
      }
      this.syncDocDate();
    }
  }, {
    key: "getAdminDateStart",
    value: function getAdminDateStart() {
      var currGlobalYear = parseInt(this.appContext.currYear.substring(0, 4));
      var futureYearEnrollDocDateMonth = 0; // январь
      var futureYearEnrollDocDateDay = 1; // 1-ое число месяца
      return this.dateUtils.asUTC(new Date(currGlobalYear, futureYearEnrollDocDateMonth, futureYearEnrollDocDateDay));
    }
  }, {
    key: "getValidateDocDateMessage",
    value: function getValidateDocDateMessage() {
      var docDateRange = this.data.state.docDateRange;
      return this.language.Generic.Movement.kErrDocDateRange1 + this.dateUtils.date2str(docDateRange.start) + this.language.Generic.Movement.kErrDocDateRange2 + this.dateUtils.date2str(docDateRange.end);
    }
  }, {
    key: "getValidateAdminDateMessage",
    value: function getValidateAdminDateMessage() {
      return this.language.Generic.Movement.kErrAdminDateRange1 + this.dateUtils.date2str(this.adminDateStart) + this.language.Generic.Movement.kErrDocDateRange2 + this.dateUtils.date2str(this.data.moveDoc.docDate);
    }
  }, {
    key: "dateFormatMessage",
    value: function dateFormatMessage() {
      return "".concat(this.language.Generic.Common.kEnterDateInFormat, " ").concat(this.dateUtils.getLocaleFormat());
    }
  }, {
    key: "runAdminDateValidator",
    value: function runAdminDateValidator() {
      if (this.showAdminDate()) {
        if (this.data.moveDoc.adminDate && this.data.moveDoc.adminDate > this.data.moveDoc.docDate) {
          this.data.moveDoc.adminDate = this.data.moveDoc.docDate;
        }
        this.form.ADMINDATE.$validate();
        this.$scope.$applyAsync();
      }
    }
  }, {
    key: "showAdminDate",
    value: function showAdminDate() {
      if (this.appContext.funcType != _common.FuncType.school) {
        return false;
      }
      return this.data && this.data.docType && this.data.docType.key === _movement.MoveDocType.Enroll;
    }
  }, {
    key: "addEo",
    value: function addEo() {
      var url = "/asp/Administration/CreateOU.asp?at=" + this.appContext.at;
      var winOptions = {
        url: url,
        name: '_blank',
        specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no',
        winChild: this.wnd
      };
      (0, _common2.windowOpen)(winOptions);
      this.wnd = winOptions.winChild;
    }
  }, {
    key: "onEducFilterChange",
    value: function onEducFilterChange(educOrg, outsideType, student) {
      var _this10 = this;
      if (educOrg && educOrg.id && educOrg.id === -2) {
        this.addEo();
      } else {
        student.educOrg = Object.assign({}, educOrg);
      }
      student.outsideType = outsideType == null ? null : this.data.outsideTypes.find(function (x) {
        return x.key == outsideType;
      });
      if (this.data.moveDoc.docType === _movement.MoveDocType.Out || this.data.moveDoc.docType === _movement.MoveDocType.Graduate) {
        var eoType = student.educOrg && student.educOrg.id ? student.educOrg.type : null;
        this.moveDocRepository.getDepartReasons(this.data.moveDoc.docType, this.appContext.funcType, outsideType, eoType).then(function (result) {
          _this10.data.reasons = result;
          if (student.reason) {
            var reason = _.find(_this10.data.reasons, function (item) {
              return item.id === student.reason.id;
            });
            student.reason = reason ? reason : _this10.data.reasons[0];
          }
        });
      }
    }
  }, {
    key: "displayOrgsSelection",
    value: function displayOrgsSelection() {
      if (!this.data.docType) {
        return false;
      }
      return this.data.docType.key === _movement.MoveDocType.Enroll || this.data.docType.key === _movement.MoveDocType.Out || this.data.docType.key === _movement.MoveDocType.Graduate;
    }
  }, {
    key: "reloadEducOrg",
    value: function reloadEducOrg(student) {
      var _this11 = this;
      var prepareEducOrg;
      if (student.educOrg && student.educOrg.id) {
        prepareEducOrg = this.moveDocRepository.getDepartOrgs(student.educOrg.id, this.data.moveDoc.docType, this.appContext.funcType, parseInt(this.appContext.schoolId)).then(function (orgs) {
          return orgs.find(function (o) {
            return o.id == student.educOrg.id;
          });
        });
      } else {
        var blankEducOrg = {
          id: null,
          name: this.language.Generic.Movement.kNotSelected,
          form: null,
          outsideType: null,
          type: null
        };
        prepareEducOrg = Promise.resolve(blankEducOrg);
      }
      return prepareEducOrg.then(function (educOrg) {
        if (educOrg) {
          student.educOrg = _.clone(educOrg);
          if (!student.outsideType && educOrg.outsideType) {
            if (_this11.data.outsideTypes && _this11.data.outsideTypes.length) {
              student.outsideType = Object.assign({}, _this11.data.outsideTypes[0]);
            }
          }
        }
        if (_this11.data.moveDoc.docType === _movement.MoveDocType.Out || _this11.data.moveDoc.docType === _movement.MoveDocType.Graduate) {
          return _this11.prepareReasons(student);
        } else {
          return Promise.resolve();
        }
      });
    }
  }, {
    key: "prepareReasons",
    value: function prepareReasons(student) {
      var _this12 = this;
      var eoType = student.educOrg && student.educOrg.id ? student.educOrg.type : null;
      var outsideType = student.outsideType == null ? null : this.data.outsideTypes.find(function (x) {
        return x.key == student.outsideType.key;
      });
      return this.moveDocRepository.getDepartReasons(this.data.moveDoc.docType, this.appContext.funcType, outsideType && outsideType.id, eoType).then(function (reasons) {
        return _this12.data.reasons = reasons;
      });
    }
  }, {
    key: "initDebtPeriod",
    value: function initDebtPeriod() {
      var _this13 = this;
      return this.moveDocRepository.getYears().then(function (years) {
        var currentYear = _.find(years, function (item) {
          return item.id === _this13.data.yearId;
        });
        if (!currentYear) {
          _this13.$dialogs.error(_this13.language.Generic.Movement.kYearInitError);
          throw _this13.language.Generic.Movement.kYearInitError;
        }
        return _.chain(years).filter(function (item) {
          return item.globalYear.startDate >= currentYear.globalYear.endDate;
        }).sortBy(function (item) {
          return item.globalYear.startDate;
        }).first().value();
      }).then(function (nextYear) {
        return _this13.moveDocRepository.getMovePeriods(nextYear.globalYear.id);
      }).then(function (movePeriods) {
        _this13.debtPeriod = {
          startDate: new Date(movePeriods[0].startDate),
          endDate: new Date(_.last(movePeriods).endDate)
        };
        return _this13.debtPeriod;
      });
    }
  }, {
    key: "getStepByGrade",
    value: function getStepByGrade(grade) {
      if (grade >= this.data.schoolSettings.juniorStepGrade.start && grade <= this.data.schoolSettings.juniorStepGrade.end) {
        return 1;
      } else if (grade >= this.data.schoolSettings.middleStepGrade.start && grade <= this.data.schoolSettings.middleStepGrade.end) {
        return 2;
      } else if (grade >= this.data.schoolSettings.seniorStepGrade.start && grade <= this.data.schoolSettings.seniorStepGrade.end) {
        return 3;
      }
      return -1;
    }
  }, {
    key: "edit",
    value: function edit(student, subDoc) {
      var _this14 = this;
      student.changed = true;
      this.data.moveDoc.subDocs.forEach(function (subDoc) {
        return subDoc.students.forEach(function (student) {
          return student.canEdit = false;
        });
      });
      this.data.educOrgs = student.educOrg && student.educOrg.id ? [{
        id: student.educOrg.id,
        name: student.educOrg.name
      }] : [{
        id: null,
        name: this.language.Generic.Movement.kNotSelected
      }];
      if ((!student.educOrg || !student.educOrg.id) && !student.outsideType && this.data.outsideTypes && this.data.outsideTypes.length) {
        student.outsideType = Object.assign({}, this.data.outsideTypes[0]);
      }
      this.data.step = this.data.moveDoc.docType === _movement.MoveDocType.Graduate && this.appContext.funcType == _common.FuncType.school ? this.getStepByGrade(subDoc.educGroupFrom.grade) : -1;
      if (this.data.moveDoc.docType === _movement.MoveDocType.Graduate) {
        //загрузка типов документов об окончании образования
        this.moveDocRepository.getAwardTypes(subDoc.id).then(function (awards) {
          return _this14.data.awardTypes = awards;
        });
      }
      if ((this.data.moveDoc.docType === _movement.MoveDocType.Year || this.data.moveDoc.docType === _movement.MoveDocType.Graduate) && this.data.moveDoc.docSubType === 3) {
        //для контролов указания даты сдачи академ. задолженности
        if (this.debtPeriod) {
          _.delay(function () {
            dateInput.initDateInput($("#pass-debt-date"), _this14.debtPeriod.startDate, _this14.debtPeriod.endDate);
          }, 250);
        } else {
          this.initDebtPeriod().then(function (debtPeriod) {
            dateInput.initDateInput($("#pass-debt-date"), debtPeriod.startDate, debtPeriod.endDate);
          });
        }
      }
      this.departOrgEventEmitter.off();
      this.departOrgEventEmitter.on(function (filterData) {
        return _this14.onEducFilterChange(filterData.departOrg, filterData.outsideType, student);
      });
      this.prepareReasons(student);
      student.canEdit = true;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this15 = this;
      var wasSelectedCheckBox = this.selection.selected.length > 0;
      if (!this.changeTracker.isDataChanged() && !wasSelectedCheckBox) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return;
      }
      this.$dialogs.confirm(this.language.Generic.Common.kConfirmResetChanges + ". " + this.language.Generic.Common.kContinue).then(function () {
        _this15.reloadDocument();
      });
    }
  }, {
    key: "changeDocType",
    value: function changeDocType() {
      var _this16 = this;
      this.initDocSubTypes();
      this.data.docSubType = _.first(this.data.allowedDocSubTypes);
      this.syncDocType();
      this.initDocState().then(function () {
        _this16.initMovDocDates();
      });
    }
  }, {
    key: "moveEducOrg",
    value: function moveEducOrg(student) {
      student.educOrg = _.clone(student.departToEducOrg);
      this.reloadEducOrg(student).then(function () {
        return student.canEdit = false;
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this17 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return;
      }
      if (this.form.$invalid) {
        return;
      }
      this.syncDocDate();
      var moveDoc = this.docMapper.map(this.data.moveDoc);
      var studentsData = _.chain(this.data.moveDoc.subDocs).each(function (item) {
        return _.each(item.students, function (student) {
          return student.subDocId = item.id;
        });
      }).pluck("students").flatten().filter(function (item) {
        return item.changed;
      }).map(function (item) {
        return {
          subDocId: item.subDocId,
          studentId: item.id,
          reason: item.reason ? item.reason.id : null,
          eOId: item.educOrg ? item.educOrg.id : null,
          outsideType: item.outsideType ? item.outsideType.id : null,
          awardType: item.awardType ? item.awardType.id : null,
          debtPassDate: item.passDebtDate
        };
      }).value();
      this.moveDocRepository.updateMoveDoc(moveDoc, studentsData).then(function () {
        _this17.reloadDocument();
        _this17.$alerts.success(_this17.language.Generic.Movement.kMoveDocSuccessfulSaved);
      });
    }
  }, {
    key: "addStudents",
    value: function addStudents() {
      var _this18 = this;
      this.validateDocNumber = true;
      if (this.form.$invalid) {
        return;
      }
      this.syncDocType();
      this.syncDocDate();
      var docType = this.data.moveDoc.docType;
      var docSubType = this.data.moveDoc.docSubType;
      var processing = this.$longWork.show();
      this.moveSourceRepository.getMovementSources(docType, docSubType).then(function (_sources) {
        processing.close();
        var modalInstance = _this18.$uibModal.open({
          templateUrl: _sourcesSelector.SourceSelectorComponent.templateUrl,
          controller: _sourcesSelector.SourceSelectorComponent.controller,
          controllerAs: _sourcesSelector.SourceSelectorComponent.controllerAs,
          resolve: {
            sources: function sources() {
              return _sources;
            },
            moveDoc: function moveDoc() {
              return _this18.data.moveDoc;
            }
          }
        });
        return modalInstance.result;
      }).then(function (result) {
        var direction = result.direction;
        var source = result.source;
        _this18.editDocContext.moveDoc = _this18.data.moveDoc;
        _this18.editDocContext.source = source;
        _this18.editDocContext.direction = direction;
        if (source.id === "quickadd") {
          _this18.$location.path("/quickAdd/");
        } else {
          _this18.$location.path("/movedoc/".concat(_this18.data.moveDoc.id, "/add/").concat(source.id));
        }
      });
    }
  }, {
    key: "deleteStudents",
    value: function deleteStudents() {
      var _this19 = this;
      var students = this.selection.selected;
      if (!students || !students.length) {
        this.$dialogs.message(this.language.Movement.kSelectStudentsToDeleteFromDoc);
        return;
      }
      var docStudentId = students.map(function (s) {
        return s.docStudentId;
      });
      var taskQueueSettings = {
        getTaskFunc: function getTaskFunc() {
          return _this19.moveDocRepository.removeStudentsFromDoc(_this19.data.moveDoc.id, docStudentId);
        }
      };
      this.$dialogs.confirm(this.language.Generic.Movement.kConfirmDeleteUsersFromDoc.replace("{0}", students.length.toString())).then(function () {
        return _this19.taskQueueService.execute(taskQueueSettings);
      }).then(function (docId) {
        if (docId > 0) {
          _this19.reloadDocument();
          // сброс
          _this19.selection.dropSelect();
          _this19.$alerts.success(_this19.language.Movement.kMoveDocPupilDeleted);
        } else {
          _this19.$alerts.success(_this19.language.Generic.Movement.kMoveDocSuccessfulDeleted);
          _this19.$location.path("/book/");
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this20 = this;
      var taskQueueSettings = {
        getTaskFunc: function getTaskFunc() {
          return _this20.moveDocRepository.del(_this20.data.moveDoc.id, true);
        }
      };
      this.$dialogs.confirm(this.language.Generic.Movement.kConfirmDeleteDoc).then(function () {
        return _this20.taskQueueService.execute(taskQueueSettings);
      }).then(function () {
        _this20.$location.path("/book/");
        _this20.$alerts.success(_this20.language.Generic.Movement.kMoveDocSuccessfulDeleted);
      });
    }
  }, {
    key: "reloadDocument",
    value: function reloadDocument() {
      var _this21 = this;
      this.selection.dropSelect();
      return this.moveDocRepository.getDoc(this.data.docId, [_movement2.ExpandMoveDoc.SubDocs, _movement2.ExpandMoveDoc.SubDocsStudents, _movement2.ExpandMoveDoc.SubDocsStudentsDepartToEducOrg]).then(function (doc) {
        if (doc == null) {
          _this21.$alerts.error("Ошибка загрузки данных по документу");
          _this21.$location.path("/book/");
          return Promise.reject("wrong-document");
        }
        _this21.data.moveDoc = doc;
        _this21.data.moveDoc.docDate = _this21.dateUtils.asUTC(new Date(doc.docDate));
        if (doc.adminDate) {
          _this21.data.moveDoc.adminDate = _this21.dateUtils.asUTC(new Date(doc.adminDate));
        }
        _this21.data.initDocDate = doc.docDate;
        _this21.data.initAdminDate = doc.adminDate;
        //устанавливаем флаг - указывающий что это документ перевод на след год и это прошлый учебный год
        _this21.state.isLastYearToNewYear = _this21.appContext.readOnly && (doc.docType === _movement.MoveDocType.Year || doc.docType === _movement.MoveDocType.Graduate);
        return Promise.all([_this21.personDataReady, _this21.schoolSettingsReady, _this21.schoolAddrInfoReady, _this21.typesReady, _this21.subTypesReady, _this21.outsideTypesReady, _this21.editReferencesFlagReady]).then(function () {
          var studentIdx = 1;
          var _iterator = _createForOfIteratorHelper(_this21.data.moveDoc.subDocs),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var subDoc = _step.value;
              var _iterator2 = _createForOfIteratorHelper(subDoc.students),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var student = _step2.value;
                  student.idx = studentIdx;
                  studentIdx++;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (_this21.data.personData === _this21.state.readOnly) {
            _this21.state.readOnly = _this21.appContext.readOnly || !_this21.appContext.hasAnyRight([Rights.arMoveBookEdit]) || !_this21.data.personData;
          }
          console.log("readonly", _this21.state.readOnly);
          if (_this21.data.outsideTypes && _this21.data.schoolAddrInfo && !_this21.data.schoolAddrInfo.provinceId) {
            _this21.data.outsideTypes = _this21.data.outsideTypes.filter(function (x) {
              return x.key != "OutsideProvince";
            });
          }
          _this21.data.docType = _.findWhere(_this21.data.allDocTypes, {
            key: _this21.data.moveDoc.docType
          });
          _this21.initDocSubTypes();
          _this21.data.docSubType = _.findWhere(_this21.data.allowedDocSubTypes, {
            id: _this21.data.moveDoc.docSubType
          });
          _this21.data.existsNotJuniorMax = _.find(_this21.data.moveDoc.subDocs, function (item) {
            return item.educGroupFrom && item.educGroupFrom.grade !== _this21.data.schoolSettings.juniorStepGrade.end;
          }) !== null;
          _this21.initDocState();
          _this21.changeTracker.clearDataChanges();
        })["catch"](function (err) {
          console.error(err);
        });
      });
    }
  }]);
  return MoveDocController;
}();
var EditDocContext = /*#__PURE__*/_createClass(function EditDocContext() {
  _classCallCheck(this, EditDocContext);
});
exports.EditDocContext = EditDocContext;
var DocMapper = /*#__PURE__*/function () {
  DocMapper.$inject = ["appContext"];
  /*@ngInject*/
  function DocMapper(appContext) {
    _classCallCheck(this, DocMapper);
    this.appContext = appContext;
  }
  _createClass(DocMapper, [{
    key: "mapDocType",
    value: function mapDocType(intype) {
      switch (intype) {
        case "Depart":
          return _movement.MoveDocType.Out;
        case "Enrollment":
          return _movement.MoveDocType.Enroll;
        case "TransferToClass":
          return _movement.MoveDocType.Move;
        case "PromotedToNextYear":
          return _movement.MoveDocType.Year;
        case "BySecondYear":
          return _movement.MoveDocType.Stay;
        case "Issue":
          return _movement.MoveDocType.Graduate;
        default:
          return intype;
      }
    }
  }, {
    key: "map",
    value: function map(doc) {
      var docType = this.mapDocType(doc.docType);
      //todo. использовать один общий тип MoveDoc
      var movDoc = {
        id: doc.id,
        schoolYearId: doc.schoolYearId,
        docName: doc.docNumber,
        docDate: doc.docDate,
        docType: docType,
        docSubType: doc.docSubType,
        adminDate: null
      };
      if (this.appContext.funcType == _common.FuncType.school && docType === _movement.MoveDocType.Enroll) {
        movDoc.adminDate = doc.adminDate;
      }
      return movDoc;
    }
  }]);
  return DocMapper;
}();
exports.DocMapper = DocMapper;
var MoveDocComponent = {
  controller: MoveDocController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movedoc/movedoc.component.html"
};
exports.MoveDocComponent = MoveDocComponent;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarsType = exports.SimilarLocation = exports.PersonGender = exports.MovementPosibilityStatus = exports.MoveSourceType = exports.MoveDocType = exports.GroupType = exports.EducationLevel = void 0;
var MoveSourceType;
exports.MoveSourceType = MoveSourceType;
(function (MoveSourceType) {
  MoveSourceType["Pool"] = "pool";
  MoveSourceType["PoolOutOfSystem"] = "pool_out_of_system";
  MoveSourceType["QuickAdd"] = "quickadd";
  MoveSourceType["Import"] = "import";
  MoveSourceType["RegionPool"] = "regionpool";
  MoveSourceType["SchoolStudents"] = "school_students";
  MoveSourceType["EsPool"] = "espool";
  MoveSourceType["RegionAddSchoolsStudents"] = "regionAddSchoolsStudents";
  MoveSourceType["Navigator"] = "navigator";
  MoveSourceType["Solo"] = "solo";
  MoveSourceType["InlearnoNavigator"] = "inlearnonavigator";
  MoveSourceType["ByDocuments"] = "by-documents";
})(MoveSourceType || (exports.MoveSourceType = MoveSourceType = {}));
var MoveDocType;
exports.MoveDocType = MoveDocType;
(function (MoveDocType) {
  MoveDocType["Out"] = "Out";
  MoveDocType["Enroll"] = "Enroll";
  MoveDocType["Move"] = "Move";
  MoveDocType["Year"] = "Year";
  MoveDocType["Stay"] = "Stay";
  MoveDocType["Graduate"] = "Graduate";
})(MoveDocType || (exports.MoveDocType = MoveDocType = {}));
;
var PersonGender;
exports.PersonGender = PersonGender;
(function (PersonGender) {
  PersonGender["Male"] = "Male";
  PersonGender["Female"] = "Female";
})(PersonGender || (exports.PersonGender = PersonGender = {}));
var GroupType;
exports.GroupType = GroupType;
(function (GroupType) {
  GroupType["Educational"] = "Educational";
  GroupType["Attached"] = "Attached";
})(GroupType || (exports.GroupType = GroupType = {}));
var EducationLevel;
exports.EducationLevel = EducationLevel;
(function (EducationLevel) {
  EducationLevel[EducationLevel["Undefined"] = 0] = "Undefined";
  EducationLevel[EducationLevel["PreSchool"] = 1] = "PreSchool";
  EducationLevel[EducationLevel["School"] = 2] = "School";
  EducationLevel[EducationLevel["AddSchool"] = 3] = "AddSchool";
  EducationLevel[EducationLevel["ProfSchool"] = 4] = "ProfSchool";
})(EducationLevel || (exports.EducationLevel = EducationLevel = {}));
var MovementPosibilityStatus;
exports.MovementPosibilityStatus = MovementPosibilityStatus;
(function (MovementPosibilityStatus) {
  MovementPosibilityStatus["Possible"] = "Possible";
  MovementPosibilityStatus["Impossible"] = "Impossible";
})(MovementPosibilityStatus || (exports.MovementPosibilityStatus = MovementPosibilityStatus = {}));
var SimilarsType;
exports.SimilarsType = SimilarsType;
(function (SimilarsType) {
  SimilarsType[SimilarsType["SimilarFiSolidMiddleSoftBirthDate"] = 1] = "SimilarFiSolidMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidBirthDate"] = 2] = "SimilarFiSoftMiddleSolidBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidOneOrMoreDocuments"] = 3] = "SimilarFiSoftMiddleSolidOneOrMoreDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyLastMoreThanOneDocuments"] = 4] = "SimilarFuzzyLastMoreThanOneDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyFiSoftFuzzyMiddleOther"] = 5] = "SimilarFuzzyFiSoftFuzzyMiddleOther";
  SimilarsType[SimilarsType["SimilarSimilarStudentParentsFi"] = 6] = "SimilarSimilarStudentParentsFi";
  SimilarsType[SimilarsType["SimilarFiSoftMiddle"] = 7] = "SimilarFiSoftMiddle";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSoftBirthDate"] = 8] = "SimilarFiSoftMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarOneOrMoreDocuments"] = 9] = "SimilarOneOrMoreDocuments";
})(SimilarsType || (exports.SimilarsType = SimilarsType = {}));
var SimilarLocation;
exports.SimilarLocation = SimilarLocation;
(function (SimilarLocation) {
  SimilarLocation[SimilarLocation["InSchool"] = 0] = "InSchool";
  SimilarLocation[SimilarLocation["InPool"] = 1] = "InPool";
  SimilarLocation[SimilarLocation["InOtherSchoolsExcludeUDODs"] = 2] = "InOtherSchoolsExcludeUDODs";
  SimilarLocation[SimilarLocation["InOtherSchools"] = 3] = "InOtherSchools";
  SimilarLocation[SimilarLocation["Any"] = 4] = "Any";
})(SimilarLocation || (exports.SimilarLocation = SimilarLocation = {}));

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarRepository = exports.MovementRepository = exports.MoveSourceRepository = exports.MoveDocRepository = exports.MoveClassesRepository = exports.ExpandMoveDoc = exports.EducContractBlanksRepository = void 0;
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
var EducContractBlanksRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EducContractBlanksRepository, _BaseRepository);
  var _super = _createSuper(EducContractBlanksRepository);
  function EducContractBlanksRepository() {
    _classCallCheck(this, EducContractBlanksRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EducContractBlanksRepository, [{
    key: "getBlanksInfo",
    value: function getBlanksInfo() {
      return this.$http.get("/webapi/integration/pfdo/educContracts/blanks").then(this.handleResponse, this.handleError);
    }
  }]);
  return EducContractBlanksRepository;
}(_baseRepository.BaseRepository);
exports.EducContractBlanksRepository = EducContractBlanksRepository;
var MoveSourceRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(MoveSourceRepository, _BaseRepository2);
  var _super2 = _createSuper(MoveSourceRepository);
  function MoveSourceRepository() {
    _classCallCheck(this, MoveSourceRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(MoveSourceRepository, [{
    key: "getMovementSources",
    value: function getMovementSources(docType, docSubType) {
      var params = {
        docType: docType,
        docSubType: docSubType
      };
      return this.$http.get("/webapi/movement/sources", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getMovementSourceInfo",
    value: function getMovementSourceInfo(sourceId) {
      return this.$http.get("/webapi/movement/sources/".concat(sourceId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getList",
    value: function getList(sourceId, data) {
      return this.$http.post("/webapi/movement/sources/".concat(sourceId, "/getList"), data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "loadDataForMoveDocPrint",
    value: function loadDataForMoveDocPrint() {
      return this.$http.get("/webapi/movement/sources/getDataPrint").then(this.handleResponse, this.handleError);
    }
  }]);
  return MoveSourceRepository;
}(_baseRepository.BaseRepository);
exports.MoveSourceRepository = MoveSourceRepository;
var SimilarRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(SimilarRepository, _BaseRepository3);
  var _super3 = _createSuper(SimilarRepository);
  function SimilarRepository() {
    _classCallCheck(this, SimilarRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(SimilarRepository, [{
    key: "checkSimilar",
    value: function checkSimilar(data) {
      return this.$http.post("/webapi/movement/similars/check", data).then(this.handleResponse, this.handleError);
    }
  }]);
  return SimilarRepository;
}(_baseRepository.BaseRepository);
exports.SimilarRepository = SimilarRepository;
var MoveClassesRepository = /*#__PURE__*/function (_BaseRepository4) {
  MoveClassesRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(MoveClassesRepository, _BaseRepository4);
  var _super4 = _createSuper(MoveClassesRepository);
  /*@ngInject*/
  function MoveClassesRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, MoveClassesRepository);
    _this = _super4.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    return _this;
  }
  _createClass(MoveClassesRepository, [{
    key: "getEducGroupsFrom",
    value: function getEducGroupsFrom(docType, docSubType) {
      var yearId = this.appContext.yearId;
      var params = {
        yearId: yearId,
        docType: docType,
        docSubType: docSubType
      };
      return this.$http.get("/webapi/movement/educGroups/from", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEducGroupsTo",
    value: function getEducGroupsTo(docType, docSubType, fromClassId) {
      var yearId = this.appContext.yearId;
      var params = {
        yearId: yearId,
        docType: docType,
        docSubType: docSubType,
        fromClassId: null
      };
      if (fromClassId) {
        params.fromClassId = fromClassId;
      }
      return this.$http.get("/webapi/movement/educGroups/to", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPoolCategories",
    value: function getPoolCategories() {
      return this.$http.get("/webapi/movement/pool/categories").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "educGroupsExists",
    value: function educGroupsExists() {
      var yearId = this.appContext.yearId;
      var params = {
        yearId: yearId
      };
      return this.$http.get("/webapi/movement/educGroups/exists", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return MoveClassesRepository;
}(_baseRepository.BaseRepository);
exports.MoveClassesRepository = MoveClassesRepository;
var ExpandMoveDoc;
exports.ExpandMoveDoc = ExpandMoveDoc;
(function (ExpandMoveDoc) {
  ExpandMoveDoc["SubDocs"] = "subdocs";
  ExpandMoveDoc["SubDocsStudents"] = "subdocs.students";
  ExpandMoveDoc["SubDocsStudentsDepartToEducOrg"] = "subdocs.students.departToEducOrg";
})(ExpandMoveDoc || (exports.ExpandMoveDoc = ExpandMoveDoc = {}));
var MoveDocRepository = /*#__PURE__*/function (_BaseRepository5) {
  MoveDocRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(MoveDocRepository, _BaseRepository5);
  var _super5 = _createSuper(MoveDocRepository);
  /*@ngInject*/
  function MoveDocRepository($http, $dialogs, $longWork, appContext) {
    var _this2;
    _classCallCheck(this, MoveDocRepository);
    _this2 = _super5.call(this, $http, $dialogs, $longWork);
    _this2.appContext = appContext;
    return _this2;
  }
  _createClass(MoveDocRepository, [{
    key: "getAll",
    value: function getAll(docType, docSubType, classId, grade, expand, studentId) {
      var params = {
        docType: null,
        docSubType: null,
        classId: null,
        grade: null,
        studentId: null
      };
      if (docType > 0) {
        params.docType = docType;
      }
      if (docSubType >= 0) {
        params.docSubType = docSubType;
      }
      if (grade >= 0) {
        params.grade = grade;
      }
      if (classId > 0) {
        params.classId = classId;
      }
      if (expand && expand.length) {
        params.expand = expand;
      }
      if (studentId > 0) {
        params.studentId = studentId;
      }
      return this.$http.get("/webapi/movement/documents", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getForStudent",
    value: function getForStudent(docType, docSubType, studentId, schoolId) {
      var params = {
        docType: docType,
        docSubType: docSubType,
        studentId: studentId,
        schoolId: schoolId
      };
      return this.$http.get("/webapi/movement/documents/student", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDoc",
    value: function getDoc(docId, expand) {
      var params = {};
      if (expand && expand.length) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/movement/documents/".concat(docId), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getShowAwardFlag",
    value: function getShowAwardFlag(subDocId) {
      return this.$http.get("/webapi/movement/documents/showAwardFlag/".concat(subDocId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolSettings",
    value: function getSchoolSettings() {
      return this.$http.get("/webapi/school/settings", {
        params: {
          yearId: this.appContext.yearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEditReferencesFlag",
    value: function getEditReferencesFlag() {
      return this.$http.get("/webapi/appflags/editReferences").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getState",
    value: function getState(docType) {
      var params = {
        moveDocType: null
      };
      if (docType) {
        params.moveDocType = docType;
      }
      return this.$http.get("/webapi/movement/documents/state", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "updateMoveDoc",
    value: function updateMoveDoc(moveDoc, studentsData) {
      var data = {
        moveDoc: moveDoc,
        studentData: studentsData
      };
      this.$longWork.show();
      return this.$http.post("/webapi/movement/documents/".concat(moveDoc.id), data).then(this.longWorkResponseHandler, this.handleError);
    }
  }, {
    key: "getOutsideTypes",
    value: function getOutsideTypes() {
      return this.$http.get("/webapi/movement/pool/outsideTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDepartOrgs",
    value: function getDepartOrgs(departOrgId, moveType, funcType, schoolId, name) {
      var params = {
        moveType: moveType,
        funcType: funcType,
        schoolId: schoolId,
        name: name,
        departOrgId: departOrgId
      };
      return this.$http.get("/webapi/movement/departorgs", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDepartReasons",
    value: function getDepartReasons(moveType, funcType, outsideType, eoType) {
      return this.$http.get("/webapi/movement/departReasons", {
        params: {
          moveType: moveType,
          funcType: funcType,
          outsideType: outsideType,
          eoType: eoType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAwardTypes",
    value: function getAwardTypes(subDocId) {
      return this.$http.get("/webapi/movement/awardTypes", {
        params: {
          subDocId: subDocId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "enrollStudentsFromInlearno",
    value: function enrollStudentsFromInlearno(docId, dto) {
      return this.$http.post("/webapi/integration/inlearno/enroll-students", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "enrollStudentsFromEServices",
    value: function enrollStudentsFromEServices(docId, dto) {
      return this.$http.post("/webapi/integration/eservices/movement/documents/".concat(docId, "/students"), dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addStudentsToDoc",
    value: function addStudentsToDoc(docId, dto) {
      return this.$http.post("/webapi/movement/documents/".concat(docId, "/students"), dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddStudentsToDocQueueTask",
    value: function getAddStudentsToDocQueueTask(docId, dto) {
      return this.$http.post("/webapi/movement/documents/".concat(docId, "/students/queue"), dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeStudentsFromDoc",
    value: function removeStudentsFromDoc(docId, docStudentId) {
      var queue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var handleError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var params = {
        docStudentId: docStudentId,
        queue: null
      };
      if (queue) {
        params.queue = queue;
      }
      var errorHandler = this.handleError;
      if (!handleError) {
        errorHandler = null;
      }
      return this.$http["delete"]("/webapi/movement/documents/".concat(docId, "/students"), {
        params: params
      }).then(this.handleResponse, errorHandler);
    }
  }, {
    key: "del",
    value: function del(docId, queue) {
      if (queue) {
        return this.$http["delete"]("/webapi/movement/documents/".concat(docId), {
          params: {
            queue: true
          }
        }).then(this.handleResponse, this.handleError);
      }
      this.$longWork.show();
      return this.$http["delete"]("/webapi/movement/documents/".concat(docId)).then(this.longWorkResponseHandler, this.handleError);
    }
  }, {
    key: "getMoveDocTypes",
    value: function getMoveDocTypes() {
      return this.$http.get("/webapi/references/movedoctype", {
        params: {
          "at": this.appContext.at
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getMoveDocSubTypes",
    value: function getMoveDocSubTypes() {
      return this.$http.get("/webapi/references/movedocsubtype", {
        params: {
          "at": this.appContext.at
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYears",
    value: function getYears() {
      return this.$http.get("/webapi/context/years").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getMovePeriods",
    value: function getMovePeriods(globalYearId) {
      return this.$http.get("/webapi/movement/movePeriods", {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "longWorkResponseHandler",
    get: function get() {
      return this.handleLongWorkResponse.bind(this);
    }
  }, {
    key: "handleLongWorkResponse",
    value: function handleLongWorkResponse(response) {
      this.$longWork.close();
      return response.data;
    }
  }]);
  return MoveDocRepository;
}(_baseRepository.BaseRepository);
exports.MoveDocRepository = MoveDocRepository;
var MovementRepository = /*#__PURE__*/function (_BaseRepository6) {
  _inherits(MovementRepository, _BaseRepository6);
  var _super6 = _createSuper(MovementRepository);
  function MovementRepository() {
    _classCallCheck(this, MovementRepository);
    return _super6.apply(this, arguments);
  }
  _createClass(MovementRepository, [{
    key: "getTransferYearInfo",
    value: function getTransferYearInfo(schoolyearId, studentId) {
      var query = {
        schoolyearId: schoolyearId,
        studentId: studentId
      };
      return this.$http.post("/webapi/movement/get-transfer-year-info", query).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSimilarInfo",
    value: function getSimilarInfo(similarId) {
      //используется в similars.js
      return this.$http.get("/webapi/movement/similars/" + similarId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressedName",
    value: function getSchoolAddressedName(schoolId) {
      //используется в similars.js
      return this.$http.get("/webapi/schools/" + schoolId + "/getAddressedName").then(this.handleResponse, this.handleError);
    }
  }]);
  return MovementRepository;
}(_baseRepository.BaseRepository);
exports.MovementRepository = MovementRepository;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducContractBlanksComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BlanksController = /*#__PURE__*/function () {
  function BlanksController($uibModalInstance, blanksInfo, downloadService, $dialogs, language) {
    var _this = this;
    _classCallCheck(this, BlanksController);
    this.$uibModalInstance = $uibModalInstance;
    this.downloadService = downloadService;
    this.$dialogs = $dialogs;
    this.language = language;
    this.header = "Бланки договоров на обучение";
    this.buttons = [{
      title: this.language.Generic.Buttons.kClose,
      action: function action() {
        return _this.close();
      }
    }];
    this.rmcBlank = blanksInfo.rmcBlank;
    this.pfdoBlank = blanksInfo.pfdoBlank;
  }
  _createClass(BlanksController, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
    }
  }, {
    key: "download",
    value: function download(attachment, isRmc) {
      if (!attachment || !attachment.id) {
        var message = "Бланк не загружен в систему.";
        if (!isRmc) {
          message += "\nЗагрузка бланка выполняется на экране \"Настройки ОДО\"";
        }
        this.$dialogs.message(message);
        return;
      }
      this.downloadService.downloadAttachment(attachment.id, attachment.name);
    }
  }]);
  return BlanksController;
}();
var EducContractBlanksComponent = {
  controller: BlanksController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movedoc/educcontracts.blanks.component.html"
};
exports.EducContractBlanksComponent = EducContractBlanksComponent;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceSelectorComponent = void 0;
var _common = __webpack_require__(254);
var _movement = __webpack_require__(367);
var _common2 = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SourceSelectorController = /*#__PURE__*/function () {
  SourceSelectorController.$inject = ["$scope", "$q", "$http", "appContext", "moveClassesRepository", "$uibModalInstance", "editDocContext", "$dialogs", "language", "sources", "moveDoc", "importService"];
  /*@ngInject*/
  function SourceSelectorController($scope, $q, $http, appContext, moveClassesRepository, $uibModalInstance, editDocContext, $dialogs, language, sources, moveDoc, importService) {
    var _this = this;
    _classCallCheck(this, SourceSelectorController);
    this.$scope = $scope;
    this.$q = $q;
    this.$http = $http;
    this.appContext = appContext;
    this.moveClassesRepository = moveClassesRepository;
    this.$uibModalInstance = $uibModalInstance;
    this.editDocContext = editDocContext;
    this.$dialogs = $dialogs;
    this.language = language;
    this.sources = sources;
    this.moveDoc = moveDoc;
    this.importService = importService;
    this.subscriptions = [];
    this.selectSource = function (source) {
      _this.source = source;
      _this.educGroupsExists = true;
      _this.needSelectGroupFrom = false;
      _this.needSelectGroupTo = false;
      var groupFromReady = null;
      if (_this.subscriptions.length) {
        _this.subscriptions.forEach(function (unsubscribe) {
          return unsubscribe();
        });
        _this.subscriptions = [];
      }
      if (_this.moveDoc.docType !== _movement.MoveDocType.Enroll) {
        if (!_this.source.directedDepartMovements) {
          _this.needSelectGroupFrom = true;
          var subscription = _this.$scope.$watch(function () {
            return _this.direction.educGroupFrom;
          }, function (cur) {
            if (!cur || !cur.internalId) {
              return;
            }
            _this.lastDirection.educGroupFrom = cur;
            if (_this.needSelectGroupTo) {
              //переинициализируем группы зачисления
              _this.initEducGroupTo(_this.lastDirection.educGroupFrom);
            } else {
              //требуется для некоторых источников
              _this.$http.post("/webapi/context/session", cur.internalId, {
                params: {
                  key: "PCLID"
                }
              });
            }
          });
          _this.subscriptions.push(subscription);
          groupFromReady = _this.initEducGroupFrom();
        }
      }
      if (!_this.needSelectGroupFrom) {
        _this.direction.educGroupFrom = null;
      }
      if (_this.moveDoc.docType != _movement.MoveDocType.Out && _this.moveDoc.docType != _movement.MoveDocType.Graduate) {
        if (_this.source.directedEnrollMovements) {
          _this.checkEducGroupsExists();
        } else {
          _this.needSelectGroupTo = true;
          if (_this.moveDoc.docType !== _movement.MoveDocType.Move && _this.moveDoc.docSubType === 0) {
            _this.isParallel = true;
          }
          if (groupFromReady) {
            //дожидаемся инициализации группы выбытия и инициализируем список групп зачисления
            groupFromReady.then(function (groupFrom) {
              return _this.initEducGroupTo(groupFrom);
            });
          } else {
            //сразу же инициализируем список групп зачисления
            _this.initEducGroupTo(null);
          }
          var _subscription = _this.$scope.$watch(function () {
            return _this.direction.educGroupTo;
          }, function (cur) {
            if (!cur || !cur.internalId) {
              return;
            }
            //при смене сохраняем последний выбор
            _this.lastDirection.educGroupTo = cur;
          });
          _this.subscriptions.push(_subscription);
        }
      }
      if (!_this.needSelectGroupTo) {
        _this.direction.educGroupTo = null;
      }
    };
    this.header = language.Movement.kAddStudentsToDoc;
    this.sources = this.sources.filter(function (src) {
      return src.id != _movement.MoveSourceType.PoolOutOfSystem;
    });
    var preselectedSource = sources[0];
    if (this.editDocContext.source) {
      preselectedSource = _.findWhere(sources, {
        id: editDocContext.source.id
      }) || preselectedSource;
    }
    this.lastDirection = editDocContext.direction || {};
    this.direction = {
      educGroupFrom: null,
      educGroupTo: null
    };
    if (this.appContext.funcType == _common2.FuncType.addSchool && this.sources.some(function (src) {
      return src.id == _movement.MoveSourceType.ByDocuments;
    })) {
      preselectedSource = this.sources.find(function (src) {
        return src.id == _movement.MoveSourceType.ByDocuments;
      });
    }
    this.selectSource(preselectedSource);
  }
  _createClass(SourceSelectorController, [{
    key: "getHelpUrl",
    value: function getHelpUrl(sourceId) {
      switch (sourceId) {
        case _movement.MoveSourceType.QuickAdd:
          return "/Help/StudentQAdd.htm";
        case _movement.MoveSourceType.Import:
          return "/asp/SetupSchool/importExt.asp?RT=2&FT=" + this.appContext.funcType;
        case _movement.MoveSourceType.Pool:
          return "/Help/MoveStudentsList.htm";
        case _movement.MoveSourceType.RegionPool:
          return "/Help/MoveStudentsList.htm";
        case _movement.MoveSourceType.SchoolStudents:
          return "/Help/MoveStudentsListODO.htm";
        case _movement.MoveSourceType.EsPool:
          return "/Help/MoveStudentsList.htm";
        case _movement.MoveSourceType.RegionAddSchoolsStudents:
          return "/Help/MoveStudentsListODO.htm";
        case "navigator":
          return "/Help/NavigatorEnrollment.htm";
      }
      return "";
    }
  }, {
    key: "showHelp",
    value: function showHelp(source) {
      var helpUrl = this.getHelpUrl(source.id);
      if (helpUrl) {
        (0, _common.openPopupWindow)("_help", helpUrl, 950, 660);
      }
    }
  }, {
    key: "isAppendBtnDisabled",
    value: function isAppendBtnDisabled() {
      return this.initingEducGroups || this.needSelectGroupFrom && !this.direction.educGroupFrom || this.needSelectGroupTo && !this.direction.educGroupTo || !this.needSelectGroupTo && !this.needSelectGroupFrom && !this.educGroupsExists;
    }
  }, {
    key: "checkEducGroupsExists",
    value: function checkEducGroupsExists() {
      var _this2 = this;
      // При создании документа о зачислении в Прикрепленные - разрешаем
      if (this.moveDoc.docSubType == 0) {
        this.educGroupsExists = true;
        return;
      }
      this.initingEducGroups = true;
      this.moveClassesRepository.educGroupsExists().then(function (res) {
        _this2.educGroupsExists = res;
        _this2.initingEducGroups = false;
      });
    }
  }, {
    key: "initEducGroupFrom",
    value: function initEducGroupFrom() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        _this3.initingEducGroups = true;
        _this3.moveClassesRepository.getEducGroupsFrom(_this3.moveDoc.docType, _this3.moveDoc.docSubType).then(function (groups) {
          _this3.departEducGroups = groups;
          var lastSelGroup = null;
          var sessionGroup = null;
          if (_this3.lastDirection && _this3.lastDirection.educGroupFrom) {
            lastSelGroup = _.findWhere(groups, {
              internalId: _this3.lastDirection.educGroupFrom.internalId
            });
          }
          var waits = [];
          if (!_this3.needSelectGroupTo) {
            var waitSession = _this3.$http.get("/webapi/context/session", {
              params: {
                key: "PCLID"
              }
            }).then(function (response) {
              var classId = response.data;
              if (classId) {
                sessionGroup = _.findWhere(groups, {
                  internalId: parseInt(classId)
                });
              }
            });
            waits.push(waitSession);
          }
          _this3.$q.all(waits).then(function () {
            var preselectedGroup = lastSelGroup || sessionGroup || _.first(groups);
            _this3.direction.educGroupFrom = preselectedGroup;
            _this3.initingEducGroups = false;
            resolve(preselectedGroup);
          });
        });
      });
    }
  }, {
    key: "initEducGroupTo",
    value: function initEducGroupTo(groupFrom) {
      var _this4 = this;
      this.initingEducGroups = true;
      var classId = null;
      if (groupFrom) {
        classId = groupFrom.internalId;
      }
      this.moveClassesRepository.getEducGroupsTo(this.moveDoc.docType, this.moveDoc.docSubType, classId).then(function (groups) {
        _this4.enrollEducGroups = groups;
        var adviser = null;
        if (_this4.moveDoc.docType === _movement.MoveDocType.Year) {
          adviser = new sameLetterGroupAdviser(groups);
        } else if (_this4.moveDoc.docType === _movement.MoveDocType.Stay) {
          adviser = new sameLetterAndGradeGroupAdviser(groups);
        }
        var advisedGroup = null;
        var lastSelGroup = null;
        var sessionGroup = null;
        if (groupFrom && adviser) {
          //инициализации подсказки в выборе группы зачисления. ВАЖНО! только если есть группа выбытия
          advisedGroup = adviser.getSuggestionTo(groupFrom);
        }
        if (_this4.lastDirection && _this4.lastDirection.educGroupTo) {
          //группа, которая выбыиралась ранее
          lastSelGroup = _.findWhere(groups, {
            internalId: _this4.lastDirection.educGroupTo.internalId
          });
        }
        var waits = [];
        if (!groupFrom || !lastSelGroup) {
          //текущая группа из сессии
          var waitSession = _this4.$http.get("/webapi/context/session", {
            params: {
              key: "PCLID"
            }
          }).then(function (response) {
            var classId = response.data;
            if (classId) {
              sessionGroup = _.findWhere(groups, {
                internalId: parseInt(classId)
              });
            }
          });
          waits.push(waitSession);
        }
        _this4.$q.all(waits).then(function () {
          var preselectedGroup = advisedGroup || lastSelGroup || sessionGroup || _.first(groups);
          _this4.direction.educGroupTo = preselectedGroup;
          _this4.initingEducGroups = false;
        });
      });
    }
  }, {
    key: "addAction",
    value: function addAction() {
      this.$uibModalInstance.close({
        direction: this.direction,
        source: this.source
      });
    }
  }, {
    key: "ok",
    value: function ok() {
      var _this5 = this;
      var prepare = Promise.resolve();
      if (this.source.id === _movement.MoveSourceType.Import) {
        prepare = this.importService.uploadFile(this.moveDoc.docSubType);
      } else if (this.source.id === _movement.MoveSourceType.Navigator || this.source.id === _movement.MoveSourceType.Solo || this.source.id === _movement.MoveSourceType.InlearnoNavigator) {
        prepare = this.$http.post("/webapi/context/session", this.direction.educGroupTo.internalId, {
          params: {
            key: "EducGroupTo"
          }
        });
      }
      prepare.then(function () {
        return _this5.addAction();
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return SourceSelectorController;
}(); //подсказчик при выборе группы зачисления
var sameLetterGroupAdviser = /*#__PURE__*/function () {
  function sameLetterGroupAdviser(educGroupsTo) {
    _classCallCheck(this, sameLetterGroupAdviser);
    this.educGroupsTo = educGroupsTo;
  }
  _createClass(sameLetterGroupAdviser, [{
    key: "getSuggestionTo",
    value: function getSuggestionTo(educGroupFrom) {
      var letters = educGroupFrom.name.replace(/[0-9]+/, "");
      var sameLettersGroups = _.filter(this.educGroupsTo, function (gr) {
        return gr.name.replace(/[0-9]+/, "") === letters;
      });
      return _.first(sameLettersGroups);
    }
  }]);
  return sameLetterGroupAdviser;
}();
var sameLetterAndGradeGroupAdviser = /*#__PURE__*/function () {
  function sameLetterAndGradeGroupAdviser(educGroupsTo) {
    _classCallCheck(this, sameLetterAndGradeGroupAdviser);
    this.educGroupsTo = educGroupsTo;
    this.educGroupsTo = educGroupsTo;
  }
  _createClass(sameLetterAndGradeGroupAdviser, [{
    key: "getSuggestionTo",
    value: function getSuggestionTo(educGroupFrom) {
      var letters = educGroupFrom.name.replace(/[0-9]+/, "");
      var sameGradeGroups = _.filter(this.educGroupsTo, function (gr) {
        return gr.grade === educGroupFrom.grade;
      });
      var sameLettersGroups = _.filter(sameGradeGroups, function (gr) {
        return gr.name.replace(/[0-9]+/, "") === letters;
      });
      return _.first(sameLettersGroups) || _.first(sameGradeGroups);
    }
  }]);
  return sameLetterAndGradeGroupAdviser;
}();
var SourceSelectorComponent = {
  controller: SourceSelectorController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movedoc/sourcesSelector.component.html"
};
exports.SourceSelectorComponent = SourceSelectorComponent;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoolComponent = void 0;
var _commonPool = __webpack_require__(372);
var _registry = __webpack_require__(373);
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
var SchoolPoolController = /*#__PURE__*/function (_CommonPoolController) {
  _inherits(SchoolPoolController, _CommonPoolController);
  var _super = _createSuper(SchoolPoolController);
  function SchoolPoolController() {
    _classCallCheck(this, SchoolPoolController);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolPoolController, [{
    key: "initTitle",
    value: function initTitle() {
      this.pageContext.title = this.language.FilterUsers.kFreeStudentsList;
      this.pageContext.parent = null;
    }
  }]);
  return SchoolPoolController;
}(_commonPool.CommonPoolController);
var PoolComponent = {
  controller: SchoolPoolController,
  controllerAs: "ctrl",
  template: _registry.RegistryBasedComponentTemplate
};
exports.PoolComponent = PoolComponent;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonPoolController = void 0;
var _registry = __webpack_require__(373);
var _poolEdituser = __webpack_require__(374);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommonPoolController = /*#__PURE__*/function () {
  CommonPoolController.$inject = ["pageContext", "$q", "$longWork", "settingsProvider", "$http", "$uibModal", "language"];
  /*@ngInject*/
  function CommonPoolController(pageContext, $q, $longWork, settingsProvider, $http, $uibModal, language) {
    _classCallCheck(this, CommonPoolController);
    this.pageContext = pageContext;
    this.$q = $q;
    this.$longWork = $longWork;
    this.settingsProvider = settingsProvider;
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.language = language;
    this.departReasons = [];
    this.pageContext.clear();
    this.initTitle();
    this.initRegistryInfo();
  }
  _createClass(CommonPoolController, [{
    key: "initRegistryInfo",
    value: function initRegistryInfo() {
      var _this = this;
      this.$longWork.execute(this.settingsProvider.AppFlags.PersonData().then(function (personData) {
        var studentFio;
        var preserveWhiteSpaceDecorator = new _registry.PreserveWhiteSpaceDecorator();
        //Проверка на усеченную версию
        if (personData) {
          studentFio = new _registry.LinkFieldDecorator(function (row) {
            return _this.editUser(row);
          });
        } else {
          studentFio = preserveWhiteSpaceDecorator;
        }
        _this.registryInfo = {
          url: "/webapi/movement/pool/registry",
          filtersUrl: "/webapi/movement/pool/registry/filter",
          fieldDecorators: {
            "studentFio": studentFio,
            "identityDocumentInfo": preserveWhiteSpaceDecorator,
            "parentsInfo": preserveWhiteSpaceDecorator,
            "addressInfo": preserveWhiteSpaceDecorator
          },
          buttons: _this.getButtons(),
          linkButtons: []
        };
      }));
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      return [];
    }
  }, {
    key: "editUser",
    value: function editUser(user) {
      var _this2 = this;
      var processing = this.$longWork.show();
      var idParts = user.id.split("_");
      var params = {
        studentId: idParts[1],
        docId: null
      };
      if (parseInt(idParts[0]) > 0) {
        params.docId = idParts[0];
      }
      var queries = [this.$http.get("/webapi/movement/pool/student", {
        params: params
      }).then(function (response) {
        _this2.userPoolInfo = response.data;
        _this2.departOrgs = [{
          id: null,
          name: "Не указано"
        }];
        if (_this2.userPoolInfo.departOrg && _this2.userPoolInfo.departOrg.id) {
          _this2.departOrgs = _this2.departOrgs.concat([{
            id: _this2.userPoolInfo.departOrg.id,
            name: _this2.userPoolInfo.name
          }]);
        }
        if (_this2.userPoolInfo.poolOrganizationSchoolYearId) {
          return _this2.$http.get("/webapi/school/settings", {
            params: {
              yearId: _this2.userPoolInfo.poolOrganizationSchoolYearId
            }
          });
        }
        return Promise.resolve(null);
      }).then(function (response) {
        _this2.schoolSettings = response && response.data;
        if (_this2.userPoolInfo.poolOrganization && _this2.userPoolInfo.poolOrganization.id) {
          return _this2.$http.get("/webapi/addresses/schools/".concat(_this2.userPoolInfo.poolOrganization.id, "/info")).then(function (schoolAddrInfo) {
            _this2.schoolAddrInfo = schoolAddrInfo.data;
          });
        } else {
          return Promise.resolve(null);
        }
      }), this.$http.get("/webapi/movement/pool/inaccessibilityReasons").then(function (response) {
        _this2.inaccessibilityReasons = response.data;
      }), this.$http.get("/webapi/movement/pool/availabilityTypes").then(function (response) {
        _this2.availabilityTypes = _.filter(response.data, function (t) {
          return t.key !== "Enrolled";
        });
      }), this.$http.get("/webapi/movement/pool/outsideTypes").then(function (response) {
        _this2.outsideTypes = response.data;
      }), this.$http.get("/webapi/movement/pool/categories").then(function (response) {
        _this2.poolCategories = response.data;
      })];
      var modalInstanceData = {
        templateUrl: _poolEdituser.EditPoolUserComponent.templateUrl,
        controller: _poolEdituser.EditPoolUserComponent.controller,
        controllerAs: _poolEdituser.EditPoolUserComponent.controllerAs,
        title: 'Информация',
        resolve: {
          userPoolInfo: function userPoolInfo() {
            return _this2.userPoolInfo;
          },
          departOrgs: function departOrgs() {
            return _this2.departOrgs;
          },
          departReasons: function departReasons() {
            return _this2.departReasons;
          },
          availabilityTypes: function availabilityTypes() {
            return _this2.availabilityTypes;
          },
          inaccessibilityReasons: function inaccessibilityReasons() {
            return _this2.inaccessibilityReasons;
          },
          outsideTypesAll: function outsideTypesAll() {
            return _this2.outsideTypes;
          },
          poolCategories: function poolCategories() {
            return _this2.poolCategories;
          },
          schoolSettings: function schoolSettings() {
            return _this2.schoolSettings;
          },
          schoolAddrInfo: function schoolAddrInfo() {
            return _this2.schoolAddrInfo;
          }
        }
      };
      this.$q.all(queries).then(function () {
        processing.close();
        _this2.$uibModal.open(modalInstanceData).result.then(function () {
          _this2.controller.load();
        });
      }, function () {
        return processing.close();
      });
    }
  }]);
  return CommonPoolController;
}();
exports.CommonPoolController = CommonPoolController;

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

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPoolUserComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _common = __webpack_require__(44);
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
var EditPoolUserController = /*#__PURE__*/function (_NetCityModalControll) {
  EditPoolUserController.$inject = ["$scope", "$dialogs", "$uibModalInstance", "changeTracker", "educOrganizationsRepository", "$http", "language", "$alerts", "userPoolInfo", "departOrgs", "inaccessibilityReasons", "availabilityTypes", "outsideTypesAll", "poolCategories", "schoolSettings", "schoolAddrInfo"];
  _inherits(EditPoolUserController, _NetCityModalControll);
  var _super = _createSuper(EditPoolUserController);
  /*@ngInject*/
  function EditPoolUserController($scope, $dialogs, $uibModalInstance, changeTracker, educOrganizationsRepository, $http, language, $alerts, userPoolInfo, departOrgs, inaccessibilityReasons, availabilityTypes, outsideTypesAll, poolCategories, schoolSettings, schoolAddrInfo) {
    var _this;
    _classCallCheck(this, EditPoolUserController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.educOrganizationsRepository = educOrganizationsRepository;
    _this.$http = $http;
    _this.language = language;
    _this.$alerts = $alerts;
    _this.userPoolInfo = userPoolInfo;
    _this.departOrgs = departOrgs;
    _this.inaccessibilityReasons = inaccessibilityReasons;
    _this.availabilityTypes = availabilityTypes;
    _this.outsideTypesAll = outsideTypesAll;
    _this.poolCategories = poolCategories;
    _this.schoolSettings = schoolSettings;
    _this.schoolAddrInfo = schoolAddrInfo;
    _this.step = -1;
    _this.allowedOutsideTypes = _this.getOutsideTypes();
    _this.step = _this.userPoolInfo.moveType === "Graduate" && _this.userPoolInfo.poolOrganizationFuncType === "School" && _this.schoolSettings ? _this.getStepByGrade(_this.userPoolInfo.poolOrganizationClassGrade) : -1;
    _this.schoolId = _this.userPoolInfo.poolOrganization == null ? null : _this.userPoolInfo.poolOrganization.id;
    _this.departOrgEventEmitter = new _common.EventEmitter();
    _this.departOrgEventEmitter.on(function (filterData) {
      return _this.onFilterChange(filterData.departOrg, filterData.outsideType, userPoolInfo);
    });
    return _this;
  }
  _createClass(EditPoolUserController, [{
    key: "$onInit",
    value: function $onInit() {
      this.onFilterChange(this.userPoolInfo.departOrg, this.userPoolInfo.departOrgOutsideType, this.userPoolInfo);
    }
  }, {
    key: "save",
    value: function save(current) {
      var _this2 = this;
      this.$http.post("/webapi/movement/pool/student", current).then(function (detailInfo) {
        _this2.$alerts.success(_this2.language.Generic.PoolStudents.kSaveSuccess);
        _this2.$uibModalInstance.close(detailInfo.data);
      }, function (response) {
        var data = response.data;
        _this2.$alerts.error(data && data.message, data && data.details);
      });
    }
  }, {
    key: "getStepByGrade",
    value: function getStepByGrade(grade) {
      if (grade >= this.schoolSettings.juniorStepGrade.start && grade <= this.schoolSettings.juniorStepGrade.end) {
        return 1;
      } else if (grade >= this.schoolSettings.middleStepGrade.start && grade <= this.schoolSettings.middleStepGrade.end) {
        return 2;
      } else if (grade >= this.schoolSettings.seniorStepGrade.start && grade <= this.schoolSettings.seniorStepGrade.end) {
        return 3;
      }
      ;
      return -1;
    }
  }, {
    key: "getOutsideTypes",
    value: function getOutsideTypes() {
      var outsideTypesInfo = _toConsumableArray(this.outsideTypesAll);
      if (outsideTypesInfo && this.schoolAddrInfo && !this.schoolAddrInfo.provinceId && (!this.userPoolInfo.departOrgOutsideType || this.userPoolInfo.departOrgOutsideType.key != "OutsideProvince")) {
        outsideTypesInfo = this.outsideTypesAll.filter(function (x) {
          return x.key != "OutsideProvince";
        });
      }
      return outsideTypesInfo;
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(departOrg, outsideType, user) {
      var _this3 = this;
      this.userPoolInfo.departOrgOutsideType = outsideType;
      var eoType = departOrg && departOrg.type ? departOrg.type : this.userPoolInfo.departEoType;
      this.userPoolInfo.departOrg = _.clone(departOrg);
      this.$http.get("/webapi/movement/departReasons", {
        params: {
          moveType: this.userPoolInfo.moveType,
          funcType: this.userPoolInfo.poolOrganizationFuncType,
          eoType: eoType
        }
      }).then(function (result) {
        _this3.departReasons = result.data;
        if (_this3.userPoolInfo.departReason && _this3.userPoolInfo.departReason.id && _this3.departReasons && _this3.departReasons.length && !_.find(_this3.departReasons, function (item) {
          return item.id === _this3.userPoolInfo.departReason.id;
        })) {
          _this3.userPoolInfo.departReason = _.clone(_this3.departReasons[0]);
        }
        _this3.$scope.$applyAsync();
      });
    }
  }, {
    key: "initInaccessibilityReason",
    value: function initInaccessibilityReason(userPoolInfo) {
      if (!userPoolInfo.availabilityInfo.inaccessibilityReason) {
        userPoolInfo.availabilityInfo.inaccessibilityReason = userPoolInfo.availabilityInfo.inaccessibilityReason = this.inaccessibilityReasons[0];
      }
    }
  }]);
  return EditPoolUserController;
}(_netcityModalCtrl.NetCityModalController);
var EditPoolUserComponent = {
  controller: EditPoolUserController,
  controllerAs: "$ctrl",
  templateUrl: '/static/dist/app/global/controllers/pool.edituser.component.html'
};
exports.EditPoolUserComponent = EditPoolUserComponent;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EServicesStudentListComponent = void 0;
var _registry = __webpack_require__(373);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EServicesStudentListController = /*#__PURE__*/_createClass( /*@ngInject*/["pageContext", function EServicesStudentListController(pageContext) {
  _classCallCheck(this, EServicesStudentListController);
  pageContext.clear();
  pageContext.title = "Список распределённых";
  this.registryInfo = {
    url: "/webapi/movement/list/eservices/registry",
    filtersUrl: "/webapi/movement/list/eservices/registry/filter",
    buttons: [],
    linkButtons: []
  };
}]);
var EServicesStudentListComponent = {
  controller: EServicesStudentListController,
  controllerAs: "ctrl",
  template: _registry.RegistryBasedComponentTemplate
};
exports.EServicesStudentListComponent = EServicesStudentListComponent;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveBookComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(321));
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _common = __webpack_require__(25);
var _movement = __webpack_require__(367);
var _settingsProvider = __webpack_require__(308);
var _sourcesSelector = __webpack_require__(370);
var _movement2 = __webpack_require__(368);
var _common2 = __webpack_require__(6);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MoveBookController = /*#__PURE__*/function () {
  MoveBookController.$inject = ["$scope", "pageContext", "moveDocRepository", "$http", "$alerts", "$location", "$appLoader", "settingsProvider", "editDocContext", "appContext", "taskQueueService", "$dialogs", "$longWork", "contextService", "moveSourceRepository", "$uibModal", "language"];
  /*@ngInject*/
  function MoveBookController($scope, pageContext, moveDocRepository, $http, $alerts, $location, $appLoader, settingsProvider, editDocContext, appContext, taskQueueService, $dialogs, $longWork, contextService, moveSourceRepository, $uibModal, language) {
    var _this = this;
    _classCallCheck(this, MoveBookController);
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.moveDocRepository = moveDocRepository;
    this.$http = $http;
    this.$alerts = $alerts;
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.settingsProvider = settingsProvider;
    this.editDocContext = editDocContext;
    this.appContext = appContext;
    this.taskQueueService = taskQueueService;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.moveSourceRepository = moveSourceRepository;
    this.$uibModal = $uibModal;
    this.language = language;
    this.selection = new _selectable["default"]();
    this.state = {
      readOnly: true,
      dataReady: false,
      emptyData: false,
      currentYearState: null,
      viewReady: true,
      isInlearnoNavigator: false
    };
    this.printHelper = new PrintHelper();
    pageContext.clear();
    pageContext.title = language.Movement.kTitle_MoveBook;
    this.data = {
      docType: null,
      documents: [],
      state: null,
      years: [],
      year: null,
      moveDocTypesIdx: {},
      moveDocTypes: [],
      moveDocs: [],
      filterPanel: null,
      filterPanelSettings: null,
      noActiveMovePeriods: false
    };
    this.state.readOnly = function () {
      if (appContext.readOnly) {
        return true;
      }
      if (!appContext.hasAnyRight([Rights.arMoveBookEdit])) {
        return true;
      }
      settingsProvider.AppFlags.PersonData().then(function (flag) {
        _this.state.readOnly = !flag;
      });
      return _this.state.readOnly;
    }();
    this.$onInit();
  }
  _createClass(MoveBookController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      this.$http.get("/webapi/context/years").then(function (response) {
        _this2.data.years = response.data;
        var contextYearId = parseInt(_this2.appContext.yearId);
        _this2.data.year = _.findWhere(_this2.data.years, {
          id: contextYearId
        });
        _this2.state.currentYearState = _this2.data.year.closed;
      });
      var docTypesReady = this.moveDocRepository.getMoveDocTypes().then(function (moveDocTypes) {
        _this2.data.moveDocTypes = moveDocTypes;
        _this2.data.moveDocTypesIdx = _.indexBy(moveDocTypes, "key");
      });
      var stateReady = this.moveDocRepository.getState().then(function (moveBookState) {
        _this2.data.state = moveBookState;
        _this2.data.noActiveMovePeriods = _this2.data.state.activeMovePeriods.length === 0;
      });
      if (this.appContext.funcType == _common.FuncType.addSchool) {
        this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (result) {
          _this2.state.isInlearnoNavigator = result == _settingsProvider.PfdoIntegrationType.InlearnoNavigator;
        });
      }
      this.data.filterPanelSettings = {
        url: "/webapi/movement/documents/filterpanel",
        events: {
          ready: function ready() {
            Promise.all([docTypesReady]).then(function () {
              _this2.load();
            });
          },
          emptyChoice: function emptyChoice() {
            _this2.state.emptyData = true;
            _this2.$scope.$apply();
          }
        }
      };
    }
  }, {
    key: "changeYear",
    value: function changeYear() {
      this.$longWork.show();
      this.contextService.changeYear(this.data.year.id).then(function (result) {
        var page = result.page || window.location.pathname;
        (0, _common2.postTo)(page);
      });
    }
  }, {
    key: "print",
    value: function print() {
      var opts = {
        processingFunc: [this.printHelper.replaceDocLink]
      };
      window.showPrintVersion(opts);
    }
  }, {
    key: "export",
    value: function _export() {
      window.exportToExcel();
    }
  }, {
    key: "needDrawEditButtons",
    value: function needDrawEditButtons() {
      if (this.state.readOnly) {
        return false;
      }
      if (this.onlySummerDoc()) {
        if (!this.data.state) {
          return false;
        }
        return this.data.state.yearMovementAllowed;
      }
      return true;
    }
  }, {
    key: "onlySummerDoc",
    value: function onlySummerDoc() {
      if (this.data.docType > 3) {
        if (this.appContext.funcType == _common.FuncType.addSchool && this.data.docType == 6) {
          // #37778. В УДОДе Выпускников можно создавать/редактировать относительно всегда.
          return false;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "add",
    value: function add() {
      this.$location.path("/movedoc/");
    }
  }, {
    key: "edit",
    value: function edit(doc) {
      this.$location.path("/movedoc/".concat(doc.id));
    }
  }, {
    key: "delete",
    value: function _delete(doc) {
      var _this3 = this;
      var taskQueueSettings = {
        getTaskFunc: function getTaskFunc() {
          return _this3.moveDocRepository.del(doc.id, true);
        }
      };
      this.$dialogs.confirmDelete(this.language.Generic.Movement.kConfirmDeleteDoc).then(function () {
        return _this3.taskQueueService.execute(taskQueueSettings);
      }).then(function () {
        _this3.$alerts.success(_this3.language.Generic.Movement.kMoveDocSuccessfulDeleted);
        _this3.load();
      });
    }
  }, {
    key: "getDocTypeInfo",
    value: function getDocTypeInfo(docTypeKey) {
      return this.data.moveDocTypesIdx[docTypeKey];
    }
  }, {
    key: "isInlearnoNavigator",
    value: function isInlearnoNavigator() {
      return this.appContext.funcType == _common.FuncType.addSchool && this.state.isInlearnoNavigator;
    }
  }, {
    key: "loadInlearno",
    value: function loadInlearno() {
      var _this4 = this;
      this.moveSourceRepository.getMovementSources(_movement.MoveDocType.Enroll, 1).then(function (_sources) {
        var modalInstance = _this4.$uibModal.open({
          templateUrl: _sourcesSelector.SourceSelectorComponent.templateUrl,
          controller: _sourcesSelector.SourceSelectorComponent.controller,
          controllerAs: _sourcesSelector.SourceSelectorComponent.controllerAs,
          resolve: {
            sources: function sources() {
              return _sources;
            },
            moveDoc: function moveDoc() {
              return {
                id: 0,
                docType: _movement.MoveDocType.Enroll,
                docSubType: 1
              };
            }
          }
        });
        return modalInstance.result;
      }).then(function (result) {
        var direction = result.direction;
        var source = result.source;
        _this4.editDocContext.moveDoc = {
          id: 0,
          docType: _movement.MoveDocType.Enroll,
          docSubType: 6,
          schoolYearId: +_this4.appContext.yearId,
          docDate: null,
          docNumber: null
        };
        _this4.editDocContext.source = source;
        _this4.editDocContext.direction = direction;
        _this4.$location.path("/movedoc/-1/add/".concat(result.source.id));
      });
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this5 = this;
      this.editDocContext.moveDoc = null;
      var fpValues = this.data.filterPanel.getValues();
      this.data.docType = parseInt(fpValues.doctype);
      this.editDocContext.docType = this.data.docType;
      this.moveDocRepository.getAll(fpValues.doctype, fpValues.docsubtype, fpValues.classid, fpValues.grade, [_movement2.ExpandMoveDoc.SubDocs, _movement2.ExpandMoveDoc.SubDocsStudents]).then(function (documents) {
        _this5.data.documents = _.map(documents, function (doc) {
          var docTypeInfo = _this5.getDocTypeInfo(doc.docType);
          var studentsCnt = doc.subDocs.map(function (sd) {
            return sd.students.length;
          }).reduce(function (sum, cnt) {
            return sum += cnt;
          }, 0);
          if (studentsCnt > 1) {
            doc.students = "".concat(_this5.language.Generic.Reports.kCountStudents, ": ").concat(studentsCnt);
          } else if (studentsCnt !== 0) {
            var subDocStudent = doc.subDocs[0].students[0];
            doc.students = subDocStudent.name;
            if (docTypeInfo.id === 1 && subDocStudent.educOrg) {
              doc.students += " => ".concat(subDocStudent.educOrg.name);
            } else if (docTypeInfo.id === 2 && subDocStudent.educOrg) {
              doc.students += " <= ".concat(subDocStudent.educOrg.name);
            }
          }
          return doc;
        });
        _this5.selection.selected = null;
        _this5.state.emptyData = !documents.length;
        _this5.state.dataReady = true;
        _this5.$appLoader.hide();
      });
    }
  }]);
  return MoveBookController;
}();
var MoveBookComponent = {
  controller: MoveBookController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/book/movebook.component.html"
};
exports.MoveBookComponent = MoveBookComponent;
var PrintHelper = /*#__PURE__*/function () {
  function PrintHelper() {
    _classCallCheck(this, PrintHelper);
  }
  _createClass(PrintHelper, [{
    key: "replaceDocLink",
    value: function replaceDocLink(item, cloned) {
      var angularCloned = angular.element(cloned);
      angularCloned.removeClass("table-selectable");
      var cells = _.toArray(angularCloned.find("td"));
      _.each(cells, function (cell) {
        var angularCell = angular.element(cell);
        angularCell.css("background-color", "");
      });
      var links = _.toArray(angularCloned.find("a"));
      _.each(links, function (link) {
        var angularLink = angular.element(link);
        angularLink.replaceWith(angularLink.text());
      });
    }
  }]);
  return PrintHelper;
}();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveSourceComponent = void 0;
var _similars = __webpack_require__(378);
var _movement = __webpack_require__(367);
var _settingsProvider = __webpack_require__(308);
var _multiSelectableTrackBy = __webpack_require__(379);
var _selectedMovements = __webpack_require__(380);
var _common = __webpack_require__(44);
var _pfdoEnrollSettings = __webpack_require__(381);
var _movesource = __webpack_require__(382);
var _refuseYearTransfer = __webpack_require__(384);
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
var MoveSourceController = /*#__PURE__*/function () {
  MoveSourceController.$inject = ["pageContext", "moveDocRepository", "moveSourceRepository", "movementRepository", "yearsRepository", "similarRepository", "$scope", "$timeout", "$q", "$location", "usersRepository", "$routeParams", "$appLoader", "editDocContext", "docMapper", "$dialogs", "$alerts", "appContext", "$longWork", "settingsProvider", "taskQueueService", "dateUtils", "$uibModal", "language"];
  /*@ngInject*/
  function MoveSourceController(pageContext, moveDocRepository, moveSourceRepository, movementRepository, yearsRepository, similarRepository, $scope, $timeout, $q, $location, usersRepository, $routeParams, $appLoader, editDocContext, docMapper, $dialogs, $alerts, appContext, $longWork, settingsProvider, taskQueueService, dateUtils, $uibModal, language) {
    var _this = this;
    _classCallCheck(this, MoveSourceController);
    this.pageContext = pageContext;
    this.moveDocRepository = moveDocRepository;
    this.moveSourceRepository = moveSourceRepository;
    this.movementRepository = movementRepository;
    this.yearsRepository = yearsRepository;
    this.similarRepository = similarRepository;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$q = $q;
    this.$location = $location;
    this.usersRepository = usersRepository;
    this.$appLoader = $appLoader;
    this.editDocContext = editDocContext;
    this.docMapper = docMapper;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.$longWork = $longWork;
    this.settingsProvider = settingsProvider;
    this.taskQueueService = taskQueueService;
    this.dateUtils = dateUtils;
    this.$uibModal = $uibModal;
    this.language = language;
    this.state = {
      emptyFilter: false,
      dataReady: false,
      emptyData: false,
      viewReady: true,
      loading: false
    };
    this.paging = {
      pageSize: 25,
      totalRows: 0,
      page: 1
    };
    this.selection = new _multiSelectableTrackBy.MultiSelectableTrackBy(function (x) {
      return x.movementId;
    });
    this.docId = parseInt($routeParams.docId) || null;
    this.sourceId = $routeParams.sourceId;
    pageContext.clear();
    pageContext.back = {
      history: true
    };
    pageContext.title = language.Movement.kMovementSourceList;
    pageContext.parent = {
      title: language.Movement.kTitle_MoveBook,
      href: "/book/"
    };
    pageContext.leaveConfirmFunc = function (leave) {
      if (_this.selection.items.length > 1) {
        _this.$dialogs.message(_this.language.Generic.Movement.kToCompleteOrder);
        return false;
      }
      ;
      if (_this.selection.items.length == 0 && _this.sourceId == _movement.MoveSourceType.QuickAdd) {
        _this.$dialogs.confirm(_this.language.Common.kStudentsDataWereChangedContinue).then(function () {
          leave();
        }, function () {});
        return false;
      } else {
        leave();
      }
    };
    this.init();
  }
  _createClass(MoveSourceController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var prepareFilterPanel = new Promise(function (resolve) {
        _this2.filterPanelSettings = {
          url: "/webapi/movement/sources/".concat(_this2.sourceId, "/filterpanel"),
          events: {
            ready: function ready(values) {
              _this2.state.emptyFilter = false;
              _this2.checkWarnings(values);
              _this2.$scope.$applyAsync();
              resolve();
            },
            emptyChoice: function emptyChoice() {
              _this2.state.emptyFilter = true;
              _this2.$scope.$applyAsync();
              resolve();
            }
          }
        };
      });
      var getSourceInfo = this.moveSourceRepository.getMovementSourceInfo(this.sourceId).then(function (sourceInfo) {
        _this2.sourceInfo = sourceInfo;
        _this2.pageContext.title = sourceInfo.title;
      });
      var getDoc;
      if (this.editDocContext.moveDoc) {
        getDoc = Promise.resolve(this.editDocContext.moveDoc);
      } else if (this.docId > 0) {
        getDoc = this.moveDocRepository.getDoc(this.docId);
      } else if (this.sourceId == _movement.MoveSourceType.InlearnoNavigator) {
        getDoc = Promise.resolve({
          id: -1,
          docType: _movement.MoveDocType.Enroll,
          docSubType: 6
        });
      } else {
        this.$appLoader.hide();
        this.$dialogs.error(this.language.Generic.Movement.kNoMovDocInfo).then(function () {
          _this2.$location.path("/book/");
          _this2.$scope.$applyAsync();
        });
        return;
      }
      getDoc.then(function (moveDoc) {
        _this2.moveDoc = moveDoc;
        if (_this2.moveDoc != null && _this2.moveDoc.id > 0) {
          _this2.pageContext.back.history = false;
          _this2.pageContext.back.href = "/movedoc/".concat(_this2.moveDoc.id);
        }
      });
      var getUserInfo = this.usersRepository.getUserInfo(this.appContext.userId).then(function (userInfo) {
        var lastName = userInfo.lastName;
        var firstName = userInfo.firstName;
        var middleName = userInfo.middleName;
        _this2.currentUserFio = lastName + " " + firstName + " " + middleName;
      });
      var initSettings = this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (pfdoType) {
        _this2.pfdoIntegrationType = pfdoType;
      });
      this.$q.all([prepareFilterPanel, getDoc, getSourceInfo, getUserInfo, initSettings]).then(function () {
        var currentSchoolId = _this2.appContext.schoolId;
        _this2.similarsCtrl = new _similars.similarsCtrl(_this2.currentUserFio, currentSchoolId, null, _this2.$uibModal, _this2.movementRepository);
        try {
          if (_this2.sourceInfo.autoLoadOnInit) {
            _this2.load();
          }
        } catch (e) {
          console.log(e);
        }
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "load",
    value: function load(page) {
      var _a;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var clearSelection, mappedDoc, direction, fpValues, pagedData, query, response, popoverSettings;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.selection.items.length > 0)) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return this.confirmClearSelection();
            case 3:
              clearSelection = _context.sent;
              if (clearSelection) {
                this.selection.dropSelect();
              }
            case 5:
              mappedDoc = this.docMapper.map(this.moveDoc);
              direction = this.editDocContext.direction;
              fpValues = this.filterPanel.getValues();
              if (fpValues.PageRowsFilter) {
                this.paging.pageSize = parseInt(fpValues.PageRowsFilter);
              }
              pagedData = {
                page: (page || this.paging.page) - 1,
                pageSize: this.paging.pageSize
              };
              query = {
                filterContextData: {
                  selectedData: this.filterPanel.getCtxValues()
                },
                moveDoc: mappedDoc,
                direction: direction,
                pagedData: pagedData
              };
              this.state.loading = true;
              _context.next = 14;
              return this.moveSourceRepository.getList(this.sourceId, query);
            case 14:
              response = _context.sent;
              this.paging.page = response.pageResponseData.currentPage + 1;
              this.paging.totalRows = response.pageResponseData.totalPages * response.pageResponseData.rowsByPage;
              this.paging.pageSize = response.pageResponseData.rowsByPage;
              this.titles = new _movesource.GetTitlesService().execute(response);
              this.moveAdditionalData = _.chain((_a = response.additionalData) === null || _a === void 0 ? void 0 : _a.movementsAdditionalData).indexBy(function (x) {
                return x.movementId;
              }).mapObject(function (val, key) {
                return val.data;
              }).value();
              this.moveStudentsList = response.commonData.map(function (studentInfo, idx) {
                var _a;
                var person = studentInfo.studentData.person;
                var fio = [person.lastName, person.firstName, person.middleName].join(" ").trim();
                var num = idx + 1 + (_this3.paging.page - 1) * _this3.paging.pageSize;
                return {
                  movementId: studentInfo.id,
                  num: num,
                  student: {
                    id: studentInfo.studentData.internalId,
                    fio: fio,
                    lastName: person.lastName || "",
                    firstName: person.firstName || "",
                    middleName: person.middleName || "",
                    birthDate: _this3.dateUtils.asUTCDate(studentInfo.studentData.birthDate)
                  },
                  possible: ((_a = studentInfo.movementPossibility) === null || _a === void 0 ? void 0 : _a.status) != _movement.MovementPosibilityStatus.Impossible,
                  possibility: studentInfo.movementPossibility
                };
              });
              this.processPaymentType(response);
              this.state.emptyData = this.moveStudentsList.length == 0;
              this.state.loading = false;
              this.state.dataReady = true;
              this.$scope.$applyAsync();
              _context.next = 28;
              return this.$timeout(200);
            case 28:
              popoverSettings = {
                placement: 'bottom',
                html: true,
                trigger: "hover"
              };
              $('[data-original-title]').popover(popoverSettings);
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "confirmClearSelection",
    value: function confirmClearSelection() {
      var _this4 = this;
      if (this.noClearSelectionFlag) {
        return Promise.resolve(false);
      }
      var buttons = [];
      var buttonNo;
      var promise = new Promise(function (resolve) {
        var buttonYes = {
          title: _this4.language.Generic.Common.kYes,
          icon: "glyphicon glyphicon-ok-sign",
          action: function action() {
            resolve(false);
            confirm.close();
          }
        };
        var buttonYesDefault = {
          title: _this4.language.Generic.Common.kYes + ", " + _this4.language.Generic.Common.kNoAsk,
          icon: "glyphicon glyphicon-ok-sign",
          action: function action() {
            _this4.noClearSelectionFlag = true;
            resolve(false);
            confirm.close();
          }
        };
        buttonNo = {
          title: _this4.language.Generic.Common.kNo,
          icon: "glyphicon glyphicon-remove-sign",
          action: function action() {
            resolve(true);
            confirm.close();
          }
        };
        buttons = [buttonYesDefault, buttonYes, buttonNo];
      });
      var studentsAmountText = this.selection.items.length % 10 === 1 && this.selection.items.length !== 11 ? " " + this.selection.items.length + " " + this.language.Movement.kStudent : "о " + this.selection.items.length + " " + this.language.Movement.kStudents_genitive;
      var confirm = this.$uibModal.open({
        controller: /*#__PURE__*/function () {
          function controller() {
            _classCallCheck(this, controller);
            this.buttons = buttons;
            this.header = "Применение фильтров";
            this.message = "Внимание! Выбран" + studentsAmountText + " из списка. Вы желаете запомнить текущий выбор?";
          }
          _createClass(controller, [{
            key: "close",
            value: function close() {
              buttonNo.action();
            }
          }]);
          return controller;
        }(),
        controllerAs: "$ctrl",
        template: "<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">{{$ctrl.message}}</ns-modal>"
      });
      return promise;
    }
  }, {
    key: "processPaymentType",
    value: function processPaymentType(response) {
      var hasPaymentTypeInfo = response.additionalData && response.additionalData.infoData.some(function (info) {
        return info.id === "PaymentType";
      });
      if (hasPaymentTypeInfo) {
        var paymentTypes = response.additionalData.movementsAdditionalData.map(function (mad) {
          var _a;
          return {
            movementId: mad.movementId,
            paymentType: (_a = mad.data.find(function (dt) {
              return dt.itemId === "PaymentType";
            })) === null || _a === void 0 ? void 0 : _a.value
          };
        });
        this.moveStudentsList.forEach(function (studentInfo) {
          var paymentTypeInfo = paymentTypes.find(function (pt) {
            return pt.movementId === studentInfo.movementId;
          });
          studentInfo.paymentTypeInformation = paymentTypeInfo === null || paymentTypeInfo === void 0 ? void 0 : paymentTypeInfo.paymentType;
        });
        response.additionalData.movementsAdditionalData.forEach(function (info) {
          return info.data.filter(function (idata) {
            return idata.itemId === "PaymentType";
          }).forEach(function (item) {
            var _a;
            item.value = ((_a = _pfdoEnrollSettings.PaymentTypesRef.find(function (pt) {
              return pt.key === item.value;
            })) === null || _a === void 0 ? void 0 : _a.name) || "";
          });
        });
      }
    }
  }, {
    key: "pageChange",
    value: function pageChange() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.state.loading) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.next = 4;
              return this.load();
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "select",
    value: function select(movement) {
      if (!movement.possible) {
        return;
      }
      this.selection.select(movement);
    }
  }, {
    key: "getStudentAddData",
    value: function getStudentAddData(student, dataCell) {
      var _a;
      var movementAddData = this.moveAdditionalData[student.movementId];
      if (!movementAddData) {
        return '-';
      }
      return ((_a = movementAddData.find(function (x) {
        return x.itemId == dataCell.id;
      })) === null || _a === void 0 ? void 0 : _a.value) || '-';
    }
  }, {
    key: "checkWarnings",
    value: function checkWarnings(values) {
      this.warnings = [];
      if (this.showDocSnilsWarning(values)) {
        this.warnings.push("Должна быть заполнена информация о СНИЛС или о номере и серии документа");
      }
      if (this.showMiddleNameWarning(values)) {
        this.warnings.push("Информация об отчестве должна быть заполнена");
      }
      if (this.showLastNameWarning(values)) {
        this.warnings.push("Информация о фамилии должна быть заполнена");
      }
      if (this.showFirstNameWarning(values)) {
        this.warnings.push("Информация об имени должна быть заполнена");
      }
    }
    //обработчик события добавления учеников в приказ
  }, {
    key: "onSave",
    value: function onSave(docId, errMessage, noRedirect) {
      if (errMessage) {
        this.$dialogs.error(errMessage);
      }
      if (noRedirect) {
        return;
      }
      //если документ существует => переход на страницу документа
      if (docId) {
        this.editDocContext.moveDoc = null;
        //переход в экран редактирования документа
        this.$location.path("/movedoc/".concat(docId));
      } else {
        //иначе если документ не существует
        // переход на экран книги движения
        this.$location.path("/book/");
      }
      this.$scope.$applyAsync();
    }
  }, {
    key: "add",
    value: function add() {
      var _this5 = this;
      if (!this.selection.items.length) {
        this.$dialogs.message(this.language.Movement.kSelectStudentsForDoc);
        return;
      }
      var direction = this.editDocContext.direction;
      var mappedDoc = this.docMapper.map(this.moveDoc);
      var model = {
        sourceId: this.sourceId,
        identifiers: this.selection.items.map(function (x) {
          return x.movementId;
        }),
        moveDoc: mappedDoc,
        moveDirection: direction
      };
      this.dispose = new _common.EventEmitter();
      var onSimilarsResolved = function onSimilarsResolved(resolveData) {
        model.similarsResolveData = resolveData;
        _this5.extraAction(model, function (model) {
          return _this5.save(model);
        });
      };
      var needCheckSimilars = this.selection.items.some(function (f) {
        return !f.student.id;
      });
      if (!needCheckSimilars) {
        onSimilarsResolved(null);
        return;
      }
      var getSimilar = this.similarRepository.checkSimilar(model);
      this.$longWork.execute(getSimilar).then(function (result) {
        var similarData = result.similarsResolveData;
        _this5.similarsCtrl.checkSimilars(similarData, onSimilarsResolved);
      });
    }
  }, {
    key: "extraAction",
    value: function extraAction(model, _callback) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this6 = this;
        var futureYear, yearId, studentId, paymentDialog;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this.appContext.funcType == 1 && model.moveDoc.docType == _movement.MoveDocType.Out)) {
                _context3.next = 13;
                break;
              }
              this.$longWork.show();
              _context3.next = 4;
              return this.yearsRepository.futureYear();
            case 4:
              futureYear = _context3.sent;
              if (futureYear) {
                _context3.next = 9;
                break;
              }
              this.$longWork.close();
              _callback(model);
              return _context3.abrupt("return");
            case 9:
              yearId = parseInt(this.appContext.yearId);
              studentId = this.selection.items.map(function (x) {
                return x.student.id;
              });
              this.movementRepository.getTransferYearInfo(yearId, studentId).then(function (data) {
                _this6.$longWork.close();
                if (!data.length) {
                  _callback(model);
                  return;
                }
                var dialog = _this6.$uibModal.open({
                  controller: _refuseYearTransfer.RefuseTransferYearComponent.controller,
                  controllerAs: _refuseYearTransfer.RefuseTransferYearComponent.controllerAs,
                  templateUrl: _refuseYearTransfer.RefuseTransferYearComponent.templateUrl,
                  size: "lg",
                  resolve: {
                    movements: function movements() {
                      return _this6.selection.items;
                    },
                    trasferYearInfo: function trasferYearInfo() {
                      return data;
                    },
                    callback: function callback() {
                      return function (movements) {
                        model.identifiers = movements.map(function (x) {
                          return x.movementId;
                        });
                        _callback(model);
                      };
                    }
                  }
                });
                _this6.dispose.on(function () {
                  return dialog.close();
                });
              });
              return _context3.abrupt("return");
            case 13:
              if (!(this.pfdoIntegrationType != _settingsProvider.PfdoIntegrationType.IRTechEes || this.appContext.funcType != 3)) {
                _context3.next = 16;
                break;
              }
              _callback(model);
              return _context3.abrupt("return");
            case 16:
              if (!(this.moveDoc.docType != _movement.MoveDocType.Enroll && this.moveDoc.docType != _movement.MoveDocType.Year && this.moveDoc.docType != _movement.MoveDocType.Move && this.moveDoc.docType != _movement.MoveDocType.Stay)) {
                _context3.next = 19;
                break;
              }
              _callback(model);
              return _context3.abrupt("return");
            case 19:
              paymentDialog = this.$uibModal.open({
                controller: _pfdoEnrollSettings.PfdoEnrollSettingsComponent.controller,
                controllerAs: _pfdoEnrollSettings.PfdoEnrollSettingsComponent.controllerAs,
                templateUrl: _pfdoEnrollSettings.PfdoEnrollSettingsComponent.templateUrl,
                size: "lg",
                resolve: {
                  movements: function movements() {
                    return _this6.selection.items;
                  },
                  callback: function callback() {
                    return function (paymentInfo) {
                      model.extraData = {
                        paymentTypes: paymentInfo
                      };
                      _callback(model);
                    };
                  }
                }
              });
              this.dispose.on(function () {
                return paymentDialog.close();
              });
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "save",
    value: function save(command) {
      if (this.sourceId === _movement.MoveSourceType.Import) {
        return this.importSaveHandler(command);
      } else if (this.sourceId == _movement.MoveSourceType.InlearnoNavigator && !this.moveDoc.docNumber) {
        return this.inlearnoSaveHandler(command);
      } else if (this.sourceId == _movement.MoveSourceType.EsPool) {
        return this.eservicesSaveHandler(command);
      } else {
        return this.commonSaveHandler(command);
      }
    }
  }, {
    key: "showDocSnilsWarning",
    value: function showDocSnilsWarning(values) {
      if (this.sourceId != "by-documents") {
        return false;
      }
      ;
      if (values && (this.isEmptyString(values.documentSeriaFilter) || this.isEmptyString(values.documentNumberFilter)) && this.isEmptyString(values.snilsFilter)) {
        return true;
      }
      return false;
    }
  }, {
    key: "showMiddleNameWarning",
    value: function showMiddleNameWarning(values) {
      if (this.sourceId != "by-documents") {
        return false;
      }
      ;
      if (values && !values.noMiddleName && this.isEmptyString(values.middleName)) {
        return true;
      }
      return false;
    }
  }, {
    key: "showLastNameWarning",
    value: function showLastNameWarning(values) {
      if (this.sourceId != "by-documents") {
        return false;
      }
      ;
      if (values && this.isEmptyString(values.lastName)) {
        return true;
      }
      return false;
    }
  }, {
    key: "showFirstNameWarning",
    value: function showFirstNameWarning(values) {
      if (this.sourceId != "by-documents") {
        return false;
      }
      ;
      if (values && this.isEmptyString(values.firstName)) {
        return true;
      }
      return false;
    }
  }, {
    key: "isEmptyString",
    value: function isEmptyString(value) {
      return !value || !value.trim();
    }
  }, {
    key: "commonSaveHandler",
    value: function commonSaveHandler(command) {
      var _this7 = this;
      var work = this.moveDocRepository.addStudentsToDoc(this.moveDoc.id, command)["catch"](function (response) {
        return _this7.loadingFail(response);
      });
      return this.$longWork.execute(work).then(function (result) {
        _this7.$alerts.success(_this7.language.Movement.kMoveDocPupilAdded);
        return _this7.loadingDone(result);
      });
    }
  }, {
    key: "importSaveHandler",
    value: function importSaveHandler(command) {
      var _this8 = this;
      var docId = 0;
      var _userCloseHandler = function userCloseHandler(docId) {
        if (_this8.similarsCtrl.resolveDialog) {
          _this8.similarsCtrl.resolveDialog.close();
        }
        _this8.dispose.emit();
        return _this8.onSave(docId);
      };
      var getTaskFunc = function getTaskFunc() {
        return new Promise(function (resolve, reject) {
          _this8.moveDocRepository.getAddStudentsToDocQueueTask(_this8.moveDoc.id, command).then(function (enqueueInfo) {
            docId = enqueueInfo.moveDocId;
            resolve(enqueueInfo);
          }, function (response) {
            _this8.loadingFail(response);
            reject();
          });
        });
      };
      var execOptions = {
        getTaskFunc: getTaskFunc,
        userCloseHandler: function userCloseHandler() {
          return _userCloseHandler(docId);
        },
        userErrorHandler: function userErrorHandler(errorMessage) {
          //$.show.error(errorMessage);
        },
        hint: "Данное информационное окно можно закрыть не дожидаясь выполнения процесса импорта. \n\n" + "По завершению данного процесса Вам будет отправлено сообщение о результатах его выполнения.\n" + "Сообщение можно просмотреть во внутренней почте системы: для этого необходимо нажать на значок почты в правой верхней части меню"
      };
      return this.taskQueueService.execute(execOptions).then(function (response) {
        _this8.$alerts.success(_this8.language.Movement.kMoveDocPupilAdded);
        return _this8.loadingDone(docId, response);
      })["catch"](function (response) {
        if (response) {
          return _this8.loadingFail(response);
        }
      });
    }
  }, {
    key: "inlearnoSaveHandler",
    value: function inlearnoSaveHandler(AddStudentsDTO) {
      var _this9 = this;
      return this.moveDocRepository.enrollStudentsFromInlearno(this.moveDoc.id, AddStudentsDTO)["catch"](function (response) {
        return _this9.loadingFail(response);
      }).then(function (result) {
        var resultMessage = "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432: ".concat(result.appliedDocumentsAmount, ".\n").concat(_this9.language.Movement.kAppliedStudents, ": ").concat(result.appliedStudentsAmount, ".\n");
        if (result.refusedStudentsAmount) {
          resultMessage += "".concat(_this9.language.Movement.kRefusedStudents, ": ").concat(result.refusedStudentsAmount, ".\n");
        }
        if (!result.errorsInfo) {
          _this9.$dialogs.message(resultMessage);
          return _this9.loadingDone(0);
        }
        return _this9.loadingDone(0, resultMessage + result.errorsInfo);
      });
    }
  }, {
    key: "eservicesSaveHandler",
    value: function eservicesSaveHandler(AddStudentsDTO) {
      var _this10 = this;
      return this.moveDocRepository.enrollStudentsFromEServices(this.moveDoc.id, AddStudentsDTO)["catch"](function (response) {
        return _this10.loadingFail(response);
      }).then(function (result) {
        var resultMessage = "";
        if (result.errors) {
          resultMessage = result.errors;
        }
        return _this10.loadingDone(result.docId, resultMessage);
      });
    }
  }, {
    key: "loadingDone",
    value: function loadingDone(docId, outerMessage) {
      if (this.similarsCtrl.resolveDialog) {
        this.similarsCtrl.resolveDialog.close();
      }
      this.dispose.emit();
      return this.onSave(docId, outerMessage);
    }
  }, {
    key: "loadingFail",
    value: function loadingFail(exceptionInfo) {
      var response;
      try {
        response = JSON.parse(exceptionInfo.responseText || exceptionInfo);
      } catch (_a) {
        if (typeof exceptionInfo == "string") {
          response = {
            message: exceptionInfo
          };
        }
      }
      var errMessage = response["message"];
      var docId = this.moveDoc.id;
      if (response["details"] === "noDoc" || response["details"] === "noDocQueue") {
        docId = null;
      } else if (response["details"]) {
        errMessage += " (" + response["details"] + ")";
      }
      if (!this.similarsCtrl.resolveDialog) {
        this.onSave(docId, errMessage, true);
      } else {
        this.$dialogs.error(errMessage);
      }
    }
  }, {
    key: "isSelectedAll",
    get: function get() {
      var _this11 = this;
      if (!this.moveStudentsList) {
        return false;
      }
      var possible = this.moveStudentsList.filter(function (f) {
        return f.possible;
      });
      var notSelected = possible.filter(function (s) {
        return !_this11.selection.isSelected(s);
      });
      return notSelected.length == 0;
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this12 = this;
      var possible = this.moveStudentsList.filter(function (f) {
        return f.possible;
      });
      var notSelected = possible.filter(function (s) {
        return !_this12.selection.isSelected(s);
      });
      if (notSelected.length > 0) {
        notSelected.forEach(function (s) {
          return _this12.selection.select(s);
        });
      } else {
        possible.forEach(function (s) {
          return _this12.selection.select(s);
        });
      }
    }
  }, {
    key: "showSelected",
    value: function showSelected() {
      var _this13 = this;
      if (!this.selection.items.length) {
        this.$dialogs.message(this.language.Movement.kNoSelectedStudents);
        return;
      }
      var movements = new _common.BehaviorSubject();
      movements.next(this.selection.items);
      var dialog = this.$uibModal.open({
        controller: _selectedMovements.SelectedMovementsComponent.controller,
        controllerAs: _selectedMovements.SelectedMovementsComponent.controllerAs,
        templateUrl: _selectedMovements.SelectedMovementsComponent.templateUrl,
        resolve: {
          movementsSubject: function movementsSubject() {
            return movements;
          }
        }
      });
      dialog.result["finally"](function () {
        _this13.selection.items = movements.getValue();
        _this13.$scope.$applyAsync();
      });
    }
  }, {
    key: "isPoolOutOfSystem",
    value: function isPoolOutOfSystem() {
      return this.sourceId == _movement.MoveSourceType.PoolOutOfSystem;
    }
  }, {
    key: "isPool",
    value: function isPool() {
      return this.sourceId == _movement.MoveSourceType.Pool;
    }
  }, {
    key: "switchPool",
    value: function switchPool(outOfSystem) {
      if (outOfSystem) {
        this.$location.path("/movedoc/-1/add/".concat(_movement.MoveSourceType.PoolOutOfSystem, "/"));
      } else {
        this.$location.path("/movedoc/-1/add/".concat(_movement.MoveSourceType.Pool, "/"));
      }
    }
  }]);
  return MoveSourceController;
}();
var MoveSourceComponent = {
  controller: MoveSourceController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movesource/movesource.component.html"
};
exports.MoveSourceComponent = MoveSourceComponent;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.similarsOption = exports.similarsGroup = exports.similarsCtrl = exports.similarUser = exports.personSimilarResolveData = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Handlebars.registerHelper('ifEqual', function (nParam1, nParam2, opts) {
  if (nParam1 === nParam2) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});
Handlebars.registerHelper('ifNotEqual', function (nParam1, nParam2, opts) {
  if (nParam1 !== nParam2) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});
Handlebars.registerHelper('Inc', function (nParam, pageNum, pageSize) {
  return nParam + 1 + pageNum * pageSize;
});
Handlebars.registerHelper('FIO', function (objParam) {
  var lastName = objParam.lastName ? objParam.lastName : "";
  var firstName = objParam.firstName ? objParam.firstName : "";
  var middleName = objParam.middleName ? objParam.middleName : "";
  return "".concat(lastName, " ").concat(firstName, " ").concat(middleName).trim();
});
Handlebars.registerHelper('DateOnly2str', function (dateParam) {
  var dt;
  if (dateParam !== null) {
    dt = new Date(dateParam);
    return dateUtils.date2str(dt);
  }
});
Handlebars.registerHelper('GetDisabled', function (objPossibility) {
  if ((objPossibility != null ? objPossibility.status : void 0) === "Impossible") {
    return "disabled";
  } else {
    return "";
  }
});
Handlebars.registerHelper('GetTitle', function (objPossibility) {
  var ref;
  return (ref = objPossibility != null ? objPossibility.statusComment : void 0) != null ? ref : "";
});
Handlebars.registerHelper('setChecked', function (bSelected) {
  if (bSelected) {
    return "checked";
  } else {
    return "";
  }
});
var similarUser = function () {
  function similarUser(similarInfo) {
    this.similarInfo = similarInfo;
    this.title = null;
    this.printTitle = null;
    this.organization = null;
    this.infoHint = null;
    this.questionHint = null;
    this.canUse = null;
    this.similarUserId = null;
    this.resolveData = null;
    this.relatedSimilarUser = [];
    this._checked = this.similarInfo.checked;
    this.title = this.similarInfo.fullName;
    this.printTitle = this.similarInfo.fullName;
    this.canUse = this.similarInfo.canUse;
    this.similarUserId = this.similarInfo.userId;
    this.relatedSimilarUser = this.similarInfo.relatedForUserId;
    this.organization = this.similarInfo.organization;
    this.birthDate = this.similarInfo.birthDate;
    this.auxComment = this.similarInfo.auxComment;
  }
  similarUser.prototype.checked = function () {
    if (!(arguments != null ? arguments.length : void 0)) {
      return this._checked;
    } else {
      return this._checked = arguments[0];
    }
  };
  return similarUser;
}();
exports.similarUser = similarUser;
var similarsGroup = function () {
  function similarsGroup(rslvData, similars1, groupLocation, titleData) {
    var docDateInfoMessage;
    this.rslvData = rslvData;
    this.similars = similars1;
    this.groupLocation = groupLocation;
    this.titleData = titleData;
    this.title = null;
    this.hint = null;
    this.similarUsers = [];
    this.resolveData = this.rslvData;
    this.title = this.titleData;
    this.similarUsers = _.map(this.similars, function (_this) {
      return function (similar) {
        return new similarUser(similar);
      };
    }(this));
    if (!this.resolveData.isParent) {
      _.each(this.similarUsers, function (_this) {
        return function (smlrUser) {
          return smlrUser.infoHint = language.Movement.kGetSimilarAddInfo;
        };
      }(this));
      if (this.groupLocation === "InSchool") {
        _.each(_.filter(this.similarUsers, function (_this) {
          return function (smlrUser) {
            return !smlrUser.canUse;
          };
        }(this)), function (_this) {
          return function (smlrUser) {
            return smlrUser.questionHint = language.Movement.kMustTransferToAnotherClass;
          };
        }(this));
      } else if (this.groupLocation === "InPool") {
        docDateInfoMessage = language.Generic.Import.kStudentFoundInPool + language.Generic.Import.kButPoolDateMoreThenDocDate;
        _.each(_.filter(this.similarUsers, function (_this) {
          return function (smlrUser) {
            return !smlrUser.canUse;
          };
        }(this)), function (_this) {
          return function (smlrUser) {
            return smlrUser.questionHint = docDateInfoMessage;
          };
        }(this));
      }
    }
    if (this.groupLocation === "InOtherSchools" || this.groupLocation === "InOtherSchoolsExcludeUDODs") {
      _.each(this.similarUsers, function (_this) {
        return function (smlrUser) {
          if (smlrUser.organization) {
            return smlrUser.title = smlrUser.title + " - " + smlrUser.organization.name;
          }
        };
      }(this));
    }
  }
  similarsGroup.prototype.choice = function () {
    var setSimilarUser, setSimilarUserId;
    if (!(arguments != null ? arguments.length : void 0)) {
      return _.find(this.similarUsers, function (similarUser) {
        return similarUser.checked();
      });
    } else {
      this.clearChoice();
      setSimilarUserId = arguments[0];
      setSimilarUser = _.find(this.similarUsers, function (similarUser) {
        return similarUser.similarUserId === setSimilarUserId;
      });
      if (!setSimilarUser) {
        throw "similar " + setSimilarUserId + " not finded in group " + this.title;
      }
      return setSimilarUser.checked(true);
    }
  };
  similarsGroup.prototype.clearChoice = function () {
    return _.each(this.similarUsers, function (similarUser) {
      return similarUser.checked(false);
    });
  };
  return similarsGroup;
}();
exports.similarsGroup = similarsGroup;
var similarsOption = function () {
  function similarsOption(rslvData, type, typeTitle, typeHint) {
    this.rslvData = rslvData;
    this.type = type;
    this.typeTitle = typeTitle;
    this.typeHint = typeHint;
    this.title = null;
    this.hint = null;
    this.id = null;
    this._checked = this.rslvData.data.choice && this.rslvData.data.choice.choice && this.rslvData.data.choice.choice !== "ExistingPerson";
    this.resolveData = this.rslvData;
    this.id = this.type;
    this.title = this.typeTitle;
    this.hint = this.typeHint;
  }
  similarsOption.prototype.checked = function () {
    if (!(arguments != null ? arguments.length : void 0)) {
      return this._checked;
    } else {
      return this._checked = arguments[0];
    }
  };
  return similarsOption;
}();
exports.similarsOption = similarsOption;
var personSimilarResolveData = function () {
  var getLocation, getSimilarRadioTitle;
  function personSimilarResolveData(data1) {
    var ref, self, similarsBySimilars;
    this.data = data1;
    this.personId = this.data.personId;
    this.title = this.data.fullName;
    this.similarOptions = [];
    this.similarGroups = [];
    this.parentsResolveData = [];
    this.isParent = false;
    if (this.data.isParent) {
      this.isParent = this.data.isParent;
    }
    self = this;
    if (((ref = this.data.parentsSimilarsResolveData) != null ? ref.length : void 0) > 0) {
      this.parentsResolveData = _.map(this.data.parentsSimilarsResolveData, function (_this) {
        return function (parentResolveData) {
          parentResolveData.isParent = true;
          return new personSimilarResolveData(parentResolveData);
        };
      }(this));
    }
    if (this.data.options.options) {
      this.similarOptions = _.chain(this.data.options.options).reject(function (option) {
        return option === "ExistingPerson";
      }).map(function (option) {
        return new similarsOption(self, option, getSimilarRadioTitle(option));
      }).value();
    }
    if (this.data.options.similars) {
      this.similarGroups = _.chain(this.data.options.similars).reject(function (similar) {
        var ref1;
        return ((ref1 = similar.relatedForUserId) != null ? ref1.length : void 0) > 0;
      }).groupBy("location").map(function (_this) {
        return function (similars, location) {
          return new similarsGroup(self, similars, location, getLocation(location, _this.isParent));
        };
      }(this)).value();
      similarsBySimilars = _.filter(this.data.options.similars, function (similar) {
        var ref1;
        return ((ref1 = similar.relatedForUserId) != null ? ref1.length : void 0) > 0;
      });
      if ((similarsBySimilars != null ? similarsBySimilars.length : void 0) > 0) {
        self.isParent = true;
        this.similarGroups.unshift(new similarsGroup(self, similarsBySimilars, "", language.Movement.kParentSimilarBySimilar));
      }
      if (this.data.options.similars.length === 1 && this.data.choice && this.data.choice.choice === "ExistingPerson") {
        this.similarGroups[0].similarUsers[0].checked(true);
      }
    }
    return;
  }
  personSimilarResolveData.prototype.resolved = function () {
    var ref, resolvedOptionChoice;
    resolvedOptionChoice = this.getChoice();
    if (((ref = this.parentsResolveData) != null ? ref.length : void 0) && (!resolvedOptionChoice || (resolvedOptionChoice != null ? resolvedOptionChoice.id : void 0) !== "IgnorePerson") && _.any(this.parentsResolveData, function (resolveData) {
      return !resolveData.resolved();
    })) {
      return false;
    }
    if (resolvedOptionChoice) {
      return true;
    }
    if (_.any(this.similarGroups, function (simlarGroup) {
      return simlarGroup.choice();
    })) {
      return true;
    }
    return false;
  };
  personSimilarResolveData.prototype.clearChoice = function () {
    _.each(this.similarOptions, function (option) {
      return option.checked(false);
    });
    return _.each(this.similarGroups, function (group) {
      return group.clearChoice();
    });
  };
  personSimilarResolveData.prototype.setChoice = function (choice) {
    var choiceOption;
    this.clearChoice();
    choiceOption = _.find(this.similarOptions, function (option) {
      return option.id = choice;
    });
    if (!choiceOption) {
      throw "choice " + choice + " not finded";
    }
    return choiceOption.checked(true);
  };
  personSimilarResolveData.prototype.getChoice = function () {
    return _.find(this.similarOptions, function (option) {
      return option.checked();
    });
  };
  personSimilarResolveData.prototype.updateServerModel = function () {
    var optionChoice, ref, userChoice;
    optionChoice = this.getChoice();
    if (optionChoice) {
      this.data.choice = {
        choice: optionChoice.id,
        existingUserId: null
      };
    } else {
      userChoice = _.find(this.similarGroups, function (smlGroup) {
        return smlGroup.choice();
      }).choice();
      if (userChoice) {
        this.data.choice = {
          choice: "ExistingPerson",
          existingUserId: userChoice.similarUserId
        };
      }
    }
    if ((ref = this.parentsResolveData) != null ? ref.length : void 0) {
      if (optionChoice && optionChoice.id === "IgnorePerson") {
        return _.each(this.parentsResolveData, function (parentReslvData) {
          return parentReslvData.data.choice = {
            choice: "IgnorePerson",
            existingUserId: null
          };
        });
      } else {
        return _.each(this.parentsResolveData, function (parentReslvData) {
          return parentReslvData.updateServerModel();
        });
      }
    }
  };
  personSimilarResolveData.prototype.setSimilar = function (similarUserId) {
    var i, j, len, len1, ref, ref1, similarGroup, user;
    this.clearChoice();
    ref = this.similarGroups;
    for (i = 0, len = ref.length; i < len; i++) {
      similarGroup = ref[i];
      ref1 = similarGroup.similarUsers;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        user = ref1[j];
        if (user.similarUserId === similarUserId) {
          user.checked(true);
          return;
        }
      }
    }
  };
  getSimilarRadioTitle = function getSimilarRadioTitle(similarChoice) {
    switch (similarChoice.toString()) {
      case "NewPerson":
        return language.Generic.Movement.kNewPerson;
      case "DuplicatePerson":
        return language.Generic.Movement.kDuplicatePerson;
      case "IgnorePerson":
        return language.Generic.Movement.kIgnorePerson;
      default:
        return similarChoice;
    }
  };
  getLocation = function getLocation(strLocation, bType) {
    if (bType) {
      switch (strLocation) {
        case "InSchool":
          return language.Generic.Movement.kParentSimilarsInSchool;
        case "InOtherSchools":
          return language.Generic.Movement.kParentSimilarsInOtherSchools;
        case "InOtherSchoolsExcludeUDODs":
          return language.Generic.Movement.kParentSimilarsInOtherSchools;
      }
    } else {
      switch (strLocation) {
        case "InSchool":
          return language.Movement.kSimilarsInSchool;
        case "InPool":
          return language.Movement.kSimilarsInPool;
        case "InOtherSchools":
          return language.Movement.kSimilarsInOtherSchools;
        case "InOtherSchoolsExcludeUDODs":
          return language.Movement.kSimilarsInOtherSchools;
      }
    }
  };
  return personSimilarResolveData;
}();
exports.personSimilarResolveData = personSimilarResolveData;
var similarsCtrl = function () {
  var loadTemplate, optionsTmpl, similarUserAdditionalInfoTmpl, similarsByLocationsTmpl, similarsExistingTmpl, similarsPrintTmpl, similarsPrintUserTmpl, similarsTmpl;
  similarsTmpl = '';
  optionsTmpl = '';
  similarsExistingTmpl = '';
  similarsByLocationsTmpl = '';
  similarUserAdditionalInfoTmpl = '';
  similarsPrintTmpl = '';
  similarsPrintUserTmpl = '';
  loadTemplate = function loadTemplate(url, setFunc) {
    url = url + "?ver=" + appContext.version;
    return $.ajax({
      url: url,
      cache: true,
      success: function success(data) {
        var html;
        html = data.replace(/(?:\r\n|\r|\n)/g, '');
        return setFunc(html);
      }
    });
  };
  function similarsCtrl(currentUser1, currentSchoolId1, saveFunction, $uibModal, movementRepository) {
    var queries;
    this.currentUser = currentUser1;
    this.currentSchoolId = currentSchoolId1;
    this.saveFunction = saveFunction;
    this.resolveDatas = new Array();
    this.model = null;
    this.$uibModal = $uibModal;
    this.movementRepository = movementRepository;
    queries = [loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsStudentsListTemplate.html', function (html) {
      return similarsTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsOptionsTemplate.html', function (html) {
      return optionsTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsExistingTemplate.html', function (html) {
      return similarsExistingTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsByLocationsTemplate.html', function (html) {
      return similarsByLocationsTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarUserAdditionalInfoTemplate.html', function (html) {
      return similarUserAdditionalInfoTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsPrintTemplate.html', function (html) {
      return similarsPrintTmpl = html;
    }), loadTemplate('/static/dist/app/school/movement/movesource/similars/SimilarsPrintUserTemplate.html', function (html) {
      return similarsPrintUserTmpl = html;
    })];
    Handlebars.registerHelper('DelQuots', function (strValue) {
      return strValue.replace('"', '');
    });
    Handlebars.registerHelper('ToLowerCase', function (strValue) {
      return strValue.toLowerCase();
    });
    Handlebars.registerHelper('ExistsEnabledGroups', function (objSimilarGroups) {
      if (_.any(objSimilarGroups, function (similarGroup) {
        return _.any(similarGroup.similarUsers, function (similarUser) {
          return similarUser.canUse;
        });
      })) {
        return "";
      } else {
        return "line-through";
      }
    });
    extDeferred.when(queries).then(function () {
      Handlebars.registerPartial('optionsTmpl', optionsTmpl);
      Handlebars.registerPartial('similarsExistingTmpl', similarsExistingTmpl);
      Handlebars.registerPartial('similarsByLocationsTmpl', similarsByLocationsTmpl);
      return Handlebars.registerPartial('similarsPrintUserTmpl', similarsPrintUserTmpl);
    });
  }
  similarsCtrl.prototype.findResolveDataByPerson = function (personId) {
    var parentsResolveData, resolveData;
    resolveData = _.filter(this.resolveDatas, function (resolveData) {
      return resolveData.personId.replace(/(\")/g, '') === personId;
    });
    if (!resolveData || resolveData.length === 0) {
      parentsResolveData = _.filter(this.resolveDatas, function (resolveData) {
        return resolveData.parentsResolveData && _.any(resolveData.parentsResolveData, function (parent) {
          return parent.personId.replace(/(\")/g, '') === personId;
        });
      });
      resolveData = _.map(_.pluck(parentsResolveData, 'parentsResolveData'), function (resData) {
        return _.find(resData, function (reslvData) {
          return reslvData.personId.replace(/(\")/g, '') === personId;
        });
      });
    }
    if (!resolveData || resolveData.length === 0) {
      throw "resolve data not finded for personId " + personId;
    }
    return resolveData;
  };
  similarsCtrl.prototype.changeOptionChoice = function (ctrl) {
    var choice, ctrlUserIndex, personId, resolveData, selfChangeOptionChoice;
    personId = ctrl.name.slice(13, -1);
    resolveData = this.findResolveDataByPerson(personId);
    selfChangeOptionChoice = this;
    choice = $(ctrl).val();
    ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id');
    _.each(resolveData, function (resData) {
      return resData.setChoice(choice);
    });
    _.each(resolveData, function (resData) {
      var parentsCtrl, similarInputs;
      $("span.similar-resolve-status-icon", resData.container).addClass("resolved");
      if (resData.userIndex !== ctrlUserIndex) {
        $(resData.container).find(".similar-resolve-person").nextAll().hide();
        $("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-opton-title').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"));
      }
      if (resData.parentsResolveData && resData.parentsResolveData.length > 0 && !resData.isParent) {
        parentsCtrl = $(resData.container).siblings(".similar-parents");
        if (choice === "IgnorePerson") {
          _.each(parentsCtrl, function (parent) {
            var parentName, parentPersonId, parentResolveData;
            parentName = $(parent).find('input:checked').prop('name');
            if (parentName) {
              parentPersonId = parentName.toString().slice(13, -1);
              parentResolveData = _.reject(selfChangeOptionChoice.findResolveDataByPerson(parentPersonId), function (item) {
                return item.userIndex === $(parent).data('id');
              });
              _.each(parentResolveData, function (item) {
                if (item.similarOptions && item.similarOptions.length > 1 || item.similarGroups && item.similarGroups.length > 1 || item.similarGroups && item.similarGroups.length === 1 && item.similarGroups[0].similarUsers && item.similarGroups[0].similarUsers.length > 1 || item.similarGroups && item.similarGroups.length > 0 && item.similarOptions && item.similarOptions.length > 0) {
                  item.clearChoice();
                  return $("span.similar-resolve-status-icon", item.container).removeClass("resolved");
                }
              });
              return $("[name='" + $(parent).find('input:checked').prop('name') + "']").closest('.similar-parents[data-id!="' + $(parent).data('id') + '"]').find(".similar-resolve-person").siblings(".row").show().siblings('.text-without-choice').remove();
            }
          });
          parentsCtrl.hide();
          return $("input[type=radio]:visible[checked]").prop('checked', true);
        } else {
          if ($(".similar-resolve-person:hidden", parentsCtrl).length) {
            parentsCtrl.show();
            similarInputs = $("input[type=radio]:visible[checked]", parentsCtrl);
            similarInputs.prop('checked', true);
            return _.each(similarInputs, function (input) {
              return selfChangeOptionChoice.changeOptionChoice(input);
            });
          }
        }
      }
    });
    if (resolveData.length > 1) {
      return $("input[type=radio]:visible[checked]").prop('checked', true);
    }
  };
  similarsCtrl.prototype.changeSimilarChoice = function (ctrl) {
    var ctrlUserIndex, personId, resolveData, similarUserId;
    personId = ctrl.name.slice(13, -1);
    resolveData = this.findResolveDataByPerson(personId);
    similarUserId = $(ctrl).data("id");
    ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id');
    _.each(resolveData, function (resData) {
      return resData.setSimilar(similarUserId);
    });
    _.each(resolveData, function (resData) {
      $("span.similar-resolve-status-icon", resData.container).addClass("resolved");
      if (resData.userIndex !== ctrlUserIndex) {
        $(resData.container).find(".similar-resolve-person").nextAll().hide();
        return $("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-name').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"));
      }
    });
    return $("input[type=radio]:visible[checked]").prop('checked', true);
  };
  similarsCtrl.prototype.resolved = function () {
    return _.every(this.resolveDatas, function (resolveData) {
      return resolveData.resolved();
    });
  };
  similarsCtrl.prototype.getSimilarInfo = function (infoSimilar) {
    var _this2 = this;
    var similarId = $(infoSimilar).parent().find("input").data("id");
    this.movementRepository.getSimilarInfo(similarId).then(function (info) {
      _this2.showSimilarInfo(info);
    });
  };
  similarsCtrl.prototype.showSimilarInfo = function (studentSimilarInfo) {
    var _this3 = this;
    studentSimilarInfo.language = language;
    var similarUserAddInfoTemplate = Handlebars.compile(similarUserAdditionalInfoTmpl);
    var similarUserInfo = studentSimilarInfo.lastName + " " + studentSimilarInfo.firstName + " " + studentSimilarInfo.middleName;
    var currentUser = this.currentUser;
    var currentSchoolId = this.currentSchoolId;
    var buttonMail = null;
    if (studentSimilarInfo.organization) {
      var orgName = studentSimilarInfo.organization.name;
      var orgId = studentSimilarInfo.organization.id;
      buttonMail = {
        title: language.Generic.Movement.kRequestDepart,
        action: function action() {
          _this3.movementRepository.getSchoolAddressedName(currentSchoolId).then(function (currentSchoolAddressedName) {
            var mailTheme = language.Generic.Movement.kRequestDepartMailTheme.templateFormat({
              StudentFio: similarUserInfo
            });
            var mailText = language.Generic.Movement.kRequestDepartMailText.templateFormat({
              StudentFio: similarUserInfo,
              SchoolName: currentSchoolAddressedName,
              CurrentUserFio: currentUser,
              ProductName: appContext.productName
            });
            return sys.mail.compose({
              theme: mailTheme,
              to: sys.mail.getRecipientBuilder().groups.admins(orgId, orgName).end().end(),
              copy: sys.mail.getRecipientBuilder().groups.admins(currentSchoolId, currentSchoolAddressedName).end().end(),
              text: mailText
            });
          });
        }
      };
    }
    var similarInfoDialog;
    var buttonOk = {
      title: language.Generic.Common.kOk,
      "class": "btn-primary",
      icon: "glyphicon glyphicon-ok-sign",
      action: function action() {
        return similarInfoDialog.close();
      }
    };
    var buttons = [buttonOk];
    if (buttonMail) {
      buttons.push(buttonMail);
    }
    var controller = /*#__PURE__*/function () {
      function Ctrl() {
        _classCallCheck(this, Ctrl);
        this.buttons = buttons;
        this.header = language.Movement.kGetSimilarAddInfoTitle;
      }
      _createClass(Ctrl, [{
        key: "close",
        value: function close() {
          similarInfoDialog.close();
        }
      }]);
      return Ctrl;
    }();
    var inner = similarUserAddInfoTemplate(studentSimilarInfo);
    var modalInner = "<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">".concat(inner, "</ns-modal>");
    similarInfoDialog = this.$uibModal.open({
      controller: controller,
      controllerAs: "$ctrl",
      template: modalInner,
      size: "lg",
      backdrop: "static"
    });
  };
  similarsCtrl.prototype.syncResolveDatas = function () {
    return _.each(this.model.similarsResolveDataView, function (dataView) {
      return dataView.updateServerModel();
    });
  };
  similarsCtrl.prototype.checkSimilars = function (similarsResolveData, onSimilarResolved) {
    this.defObj = new $.Deferred();
    var _this = this;
    var i, j, k, len, len1, len2, parentsData, ref, ref1, ref2, resolveData, template, userIndex;
    this.model = {
      similarsResolveData: similarsResolveData,
      language: language
    };
    ref = this.model.similarsResolveData;
    for (i = 0, len = ref.length; i < len; i++) {
      resolveData = ref[i];
      resolveData.options.similars.sort(function (a, b) {
        return b.location.localeCompare(a.location);
      });
      resolveData.options.options.sort(function (a, b) {
        return b.localeCompare(a);
      });
    }
    this.resolveDatas = _.map(this.model.similarsResolveData, function (resolveData) {
      return new personSimilarResolveData(resolveData);
    });
    this.resolveDataIndexer = [];
    userIndex = 1;
    ref1 = this.resolveDatas;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      resolveData = ref1[j];
      resolveData.userIndex = userIndex;
      this.resolveDataIndexer[userIndex] = resolveData;
      userIndex++;
      if (resolveData.parentsResolveData) {
        ref2 = resolveData.parentsResolveData;
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          parentsData = ref2[k];
          parentsData.userIndex = userIndex;
          this.resolveDataIndexer[userIndex] = parentsData;
          userIndex++;
        }
      }
    }
    this.model.similarsResolveDataView = this.resolveDatas;
    template = Handlebars.compile(similarsTmpl);
    //this.defObj.locked = false;

    var buttons = [{
      title: language.Generic.Common.kOk,
      "class": "btn-primary",
      icon: "glyphicon glyphicon-ok-sign",
      action: function action() {
        // if (_this.defObj.locked) {
        // 	return;
        // }
        return _this.completeResolve(onSimilarResolved);
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.resolveDialog.close();
      }
    }, {
      title: language.Generic.Buttons.kPrint,
      action: function action() {
        return _this.similarsPrint();
      }
    }];
    var inner = template(this.model);
    var modalInner = "<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">".concat(inner, "</ns-modal>");
    var controller = /*#__PURE__*/function () {
      function Ctrl() {
        _classCallCheck(this, Ctrl);
        this.buttons = buttons;
        this.header = language.Generic.Movement.kCheckSimilars;
      }
      _createClass(Ctrl, [{
        key: "close",
        value: function close() {
          _this.resolveDialog.close();
        }
      }]);
      return Ctrl;
    }();
    this.resolveDialog = this.$uibModal.open({
      controller: controller,
      controllerAs: "$ctrl",
      template: modalInner,
      size: "lg",
      backdrop: "static"
    });
    this.resolveDialog.rendered.then(function () {
      var resolveContainers = _.toArray($(".similar-resolve-container"));
      _.each(resolveContainers, function (resolveContainer) {
        return _this.resolveDataIndexer[$(resolveContainer).data("id")].container = resolveContainer;
      });
      $(".modal-body").on("click", ".similar-user-option:visible > label > input[type=radio]", function (event) {
        return _this.changeOptionChoice(event.currentTarget);
      });
      $(".modal-body").on("click", ".similar-user-choice:visible > label > input[type=radio]", function (event) {
        return _this.changeSimilarChoice(event.currentTarget);
      });
      $(".modal-body").on("click", ".similar-user-choice:visible .similar-info-icon", function (event) {
        return _this.getSimilarInfo(event.currentTarget);
      });
      $(".modal-body").on("click", ".similar-user-choice:visible .similar-question-icon", function (event) {
        return alert(event.currentTarget.title);
      });
      $(".similar-user-option:visible > label > input[type=radio][checked]").trigger("click");
      $(".similar-user-choice:visible > label > input[type=radio][checked]").trigger("click");
      $("input[type=radio]:visible[checked]").prop('checked', true);
      $(".modal-body").on("click", function (event) {
        return dataChanged();
      });
    });
    return this.defObj.promise();
  };
  similarsCtrl.prototype.completeResolve = function (onSimilarResolved) {
    //this.defObj.locked = true;
    if (_.every(this.resolveDatas, function (resolveData) {
      var ref;
      return ((ref = resolveData.getChoice()) != null ? ref.id : void 0) === "IgnorePerson";
    })) {
      alert(language.Generic.Movement.kAllSimilarsIgnored);
      this.resolveDialog.close();
      return;
    }
    var closeDialog = true;
    if (!this.resolved()) {
      //this.defObj.locked = false;
      alert(language.Generic.Movement.kNotResolvedSimilars);
      closeDialog = false;
      return closeDialog;
    }
    this.syncResolveDatas();
    //this.addStudentMovementsModel.similarsResolveData = this.model.similarsResolveData;
    // if (this.saveFunction) {
    // 	this.saveFunction(this.addStudentMovementsModel);
    // }
    //return callbackFunc(this.addStudentMovementsModel, this.defObj);
    onSimilarResolved(this.model.similarsResolveData);
    this.defObj.resolve(this.model.similarsResolveData);
  };
  similarsCtrl.prototype.similarsPrint = function () {
    var similarsPrintTemplate;
    similarsPrintTemplate = Handlebars.compile(similarsPrintTmpl);
    return $(similarsPrintTemplate(this.model)).printUtils().toPrint().then(function (window) {
      var popup;
      return popup = window;
    });
  };
  return similarsCtrl;
}();
exports.similarsCtrl = similarsCtrl;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectableTrackBy = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MultiSelectableTrackBy = /*#__PURE__*/function () {
  function MultiSelectableTrackBy(trackBy) {
    _classCallCheck(this, MultiSelectableTrackBy);
    this.trackBy = trackBy;
    this.items = [];
  }
  _createClass(MultiSelectableTrackBy, [{
    key: "selected",
    get: function get() {
      return this.items;
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      var _this = this;
      var itemTracker = this.trackBy(val);
      var currIdx = this.items.findIndex(function (x) {
        return _this.trackBy(x) == itemTracker;
      });
      return currIdx !== -1;
    }
  }, {
    key: "select",
    value: function select(val) {
      var _this2 = this;
      var itemTracker = this.trackBy(val);
      var currIdx = this.items.findIndex(function (x) {
        return _this2.trackBy(x) == itemTracker;
      });
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
      var _this3 = this;
      if (this.items.length == possible.length) {
        this.dropSelect();
      } else {
        this.dropSelect();
        possible.forEach(function (s) {
          return _this3.select(s);
        });
      }
    }
  }]);
  return MultiSelectableTrackBy;
}();
exports.MultiSelectableTrackBy = MultiSelectableTrackBy;

/***/ }),

/***/ 38:
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedMovementsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var SelectedMovementsController = /*#__PURE__*/function (_NetCityModalControll) {
  SelectedMovementsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "movementsSubject"];
  _inherits(SelectedMovementsController, _NetCityModalControll);
  var _super = _createSuper(SelectedMovementsController);
  /*@ngInject*/
  function SelectedMovementsController($scope, $uibModalInstance, changeTracker, $dialogs, language, movementsSubject) {
    var _this;
    _classCallCheck(this, SelectedMovementsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.movementsSubject = movementsSubject;
    _this.selection = new _multiSelectable["default"]();
    _this.buttons = [];
    _this.header = _this.language.Movement.kSelectedStudents;
    _this.movements = _this.movementsSubject.getValue();
    var removeButton = {
      title: language.Generic.Common.kRemove,
      action: function action() {
        return _this.remove();
      }
    };
    var closeButton = {
      title: language.Generic.Buttons.kClose,
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(removeButton);
    _this.buttons.push(closeButton);
    return _this;
  }
  _createClass(SelectedMovementsController, [{
    key: "remove",
    value: function remove() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.selection.items.length) {
                _context.next = 3;
                break;
              }
              this.$dialogs.message(this.language.Movement.kNoSelectedStudents);
              return _context.abrupt("return");
            case 3:
              _context.next = 5;
              return this.$dialogs.confirm(this.language.Movement.kRemoveSelectedStudents);
            case 5:
              this.movements = this.movements.filter(function (m) {
                return !_this2.selection.isSelected(m);
              });
              this.movementsSubject.next(this.movements);
              if (this.movements.length == 0) {
                this.$uibModalInstance.close();
              }
              this.selection.dropSelect();
              this.$scope.$applyAsync();
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      this.selection.toggleSelectAll(this.movements);
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return SelectedMovementsController;
}(_netcityModalCtrl.NetCityModalController);
var SelectedMovementsComponent = {
  controller: SelectedMovementsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movesource/selected-movements.component.html"
};
exports.SelectedMovementsComponent = SelectedMovementsComponent;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PfdoEnrollSettingsComponent = exports.PaymentTypesRef = void 0;
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
var PaymentTypesRef = [{
  id: 2,
  key: "Budget",
  name: "Бюджет"
}, {
  id: 1,
  key: "PayService",
  name: "Платно"
}, {
  id: 3,
  key: "Certificate",
  name: "По сертификату"
}];
exports.PaymentTypesRef = PaymentTypesRef;
var PfdoEnrollSettingsController = /*#__PURE__*/function (_NetCityModalControll) {
  PfdoEnrollSettingsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "movements", "callback"];
  _inherits(PfdoEnrollSettingsController, _NetCityModalControll);
  var _super = _createSuper(PfdoEnrollSettingsController);
  /*@ngInject*/
  function PfdoEnrollSettingsController($scope, $uibModalInstance, changeTracker, $dialogs, language, movements, callback) {
    var _this;
    _classCallCheck(this, PfdoEnrollSettingsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.callback = callback;
    _this.buttons = [];
    _this.paymentTypesRef = angular.copy(PaymentTypesRef);
    _this.defaultPaymentType = PaymentTypesRef[0].key; // "Budget"
    _this.header = 'Укажите способ оплаты';
    _this.movements = movements;
    _this.movements.forEach(function (x) {
      return x.paymentInfo = {
        movementId: x.movementId,
        paymentType: x.paymentTypeInformation || _this.defaultPaymentType,
        reason: null
      };
    });
    _this.paymentTypeAll = _this.defaultPaymentType;
    var okButton = {
      title: language.Generic.Common.kOk,
      action: function action() {
        return _this.ok();
      }
    };
    var closeButton = {
      title: language.Generic.Buttons.kClose,
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(okButton);
    _this.buttons.push(closeButton);
    return _this;
  }
  _createClass(PfdoEnrollSettingsController, [{
    key: "setPaymentTypeAll",
    value: function setPaymentTypeAll() {
      var _this2 = this;
      this.movements.forEach(function (m) {
        return m.paymentInfo.paymentType = _this2.paymentTypeAll;
      });
    }
  }, {
    key: "ok",
    value: function ok() {
      var paymentInfo = this.movements.map(function (x) {
        return x.paymentInfo;
      });
      this.callback(paymentInfo);
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return PfdoEnrollSettingsController;
}(_netcityModalCtrl.NetCityModalController);
var PfdoEnrollSettingsComponent = {
  controller: PfdoEnrollSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movesource/pfdo-enroll.settings.component.html"
};
exports.PfdoEnrollSettingsComponent = PfdoEnrollSettingsComponent;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTitlesService = void 0;
var _movesource = __webpack_require__(383);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GetTitlesService = /*#__PURE__*/function () {
  function GetTitlesService() {
    _classCallCheck(this, GetTitlesService);
  }
  _createClass(GetTitlesService, [{
    key: "execute",
    value: function execute(response) {
      var _a;
      var addData = (_a = response.additionalData) === null || _a === void 0 ? void 0 : _a.infoData;
      if (!addData) {
        return {
          rowSpan: 1,
          dataTitles: [],
          mainTitleRow: [],
          subTitleRows: []
        };
      }
      addData = addData.sort(function (a, b) {
        return a.order - b.order;
      });
      var titlesList = [];
      var maxLevel = 1;
      var collectMaxLevel = function collectMaxLevel(infoData, level) {
        if (infoData.parent) {
          collectMaxLevel(infoData.parent, level + 1);
        }
        if (level > maxLevel) {
          maxLevel = level;
        }
      };
      addData.forEach(function (infoData) {
        return collectMaxLevel(infoData, 1);
      });
      var getTitles = function getTitles(infoData, level) {
        if (infoData.parent) {
          infoData.parent.order = infoData.parent.order ? infoData.parent.order : infoData.order;
          getTitles(infoData.parent, level + 1);
        }
        var existsItem = titlesList.find(function (item) {
          return item.id == infoData.id;
        });
        if (!existsItem) {
          var existsParent = infoData.parent ? titlesList.find(function (item) {
            return item.id === infoData.parent.id;
          }) : void 0;
          var itemLevel = infoData.parent ? level : maxLevel;
          var newItem = new _movesource.TitleCell(infoData.title, infoData.id, infoData.order, itemLevel, existsParent);
          titlesList.push(newItem);
          if (existsParent) {
            existsParent.childs.push(newItem);
            if (level >= existsParent.level) {
              existsParent.level = level + 1;
            }
          }
        } else {
          if (existsItem.parent) {
            if (existsItem.level >= existsItem.parent.level) {
              existsItem.parent.level = existsItem.level + 1;
            }
          }
        }
      };
      addData.forEach(function (infoData) {
        return getTitles(infoData, 1);
      });
      var ret = {
        rowSpan: maxLevel,
        mainTitleRow: [],
        subTitleRows: [],
        dataTitles: []
      };
      ret.mainTitleRow = titlesList.filter(function (x) {
        return x.level == maxLevel;
      });
      var subTitleRows = [];
      if (maxLevel > 1) {
        var _loop = function _loop(rowLevel) {
          var levelTitles = titlesList.filter(function (x) {
            return x.level == rowLevel;
          });
          subTitleRows.push(levelTitles);
        };
        for (var rowLevel = maxLevel - 1; rowLevel >= 1; rowLevel--) {
          _loop(rowLevel);
        }
      }
      ret.subTitleRows = subTitleRows;
      ret.dataTitles = titlesList.filter(function (t) {
        return t.isDataCell;
      });
      return ret;
    }
  }]);
  return GetTitlesService;
}();
exports.GetTitlesService = GetTitlesService;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleCell = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var TitleCell = /*#__PURE__*/function () {
  function TitleCell(title, id, order, level, parent) {
    _classCallCheck(this, TitleCell);
    this.title = title;
    this.id = id;
    this.order = order;
    this.level = level;
    this.parent = parent;
    this.childs = [];
  }
  _createClass(TitleCell, [{
    key: "isDataCell",
    get: function get() {
      return !this.childs || this.childs.length == 0;
    }
  }, {
    key: "colSpan",
    get: function get() {
      if (!this.childs || this.childs.length == 0) {
        return 1;
      }
      var totalColSpan = 0;
      this.childs.forEach(function (item) {
        return totalColSpan = totalColSpan + item.colSpan;
      });
      return totalColSpan;
    }
  }, {
    key: "rowSpan",
    get: function get() {
      if (!this.parent) {
        var childsLevel = 0;
        if (this.childs.length > 0) {
          var childsLevels = this.childs.map(function (c) {
            return c.level;
          });
          childsLevel = Math.max.apply(Math, _toConsumableArray(childsLevels));
        }
        return this.level - childsLevel;
      }
      return 1;
    }
  }]);
  return TitleCell;
}();
exports.TitleCell = TitleCell;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefuseTransferYearComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _nsModal = __webpack_require__(41);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var RefuseTransferYearController = /*#__PURE__*/function (_NetCityModalControll) {
  RefuseTransferYearController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "$longWork", "language", "moveDocRepository", "dateUtils", "movements", "trasferYearInfo", "callback"];
  _inherits(RefuseTransferYearController, _NetCityModalControll);
  var _super = _createSuper(RefuseTransferYearController);
  /*@ngInject*/
  function RefuseTransferYearController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, $longWork, language, moveDocRepository, dateUtils, movements, trasferYearInfo, callback) {
    var _this;
    _classCallCheck(this, RefuseTransferYearController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.language = language;
    _this.moveDocRepository = moveDocRepository;
    _this.movements = movements;
    _this.callback = callback;
    _this.selection = new _multiSelectable["default"]();
    _this.buttons = [];
    _this.data = trasferYearInfo.map(function (x) {
      var studentMovement = movements.find(function (f) {
        return f.student.id == x.studentId;
      });
      return {
        num: studentMovement.num,
        movementId: studentMovement.movementId,
        docStudentId: x.moveDocStudentID,
        studentFio: studentMovement.student.fio,
        docId: x.moveDocId,
        docDate: dateUtils.asUTCDate(x.docDate),
        docName: x.docName
      };
    }).sort(function (a, b) {
      return a.num - b.num;
    });
    _this.data.forEach(function (a, ind) {
      return a.num = ind + 1;
    });
    _this.header = "Автоматическая отмена приказов перевод на следующий год";
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
  _createClass(RefuseTransferYearController, [{
    key: "continue",
    value: function _continue() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var success, errors, promises, movements;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.$longWork.show();
              success = [];
              errors = [];
              promises = this.data.map(function (x) {
                return new Promise(function (resolve) {
                  _this2.moveDocRepository.removeStudentsFromDoc(x.docId, [x.docStudentId], false, false).then(function () {
                    success.push(x.movementId);
                  }, function () {
                    errors.push(x.movementId);
                    _this2.$alerts.error("Не удалось отменить приказ на перевод " + x.studentFio);
                  })["finally"](function () {
                    return resolve();
                  });
                });
              });
              _context.next = 6;
              return Promise.all(promises);
            case 6:
              this.$longWork.close();
              if (!(success.length == 0)) {
                _context.next = 10;
                break;
              }
              this.$dialogs.error("Не удалось отменить приказы на перевод воспитанников");
              return _context.abrupt("return");
            case 10:
              if (!(success.length != this.data.length)) {
                _context.next = 15;
                break;
              }
              _context.next = 13;
              return this.$dialogs.message("Для части учащихся не удалось отменить документ.\nДанные учащиеся не будут добавлены в документ на выбытие.");
            case 13:
              _context.next = 16;
              break;
            case 15:
              this.$alerts.success("Успешно отменены приказы перевода на следующий год");
            case 16:
              movements = this.movements.filter(function (x) {
                return errors.indexOf(x.movementId) == -1;
              });
              this.callback(movements);
            case 18:
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
  return RefuseTransferYearController;
}(_netcityModalCtrl.NetCityModalController);
var RefuseTransferYearComponent = {
  controller: RefuseTransferYearController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/movesource/refuse-year-transfer.component.html"
};
exports.RefuseTransferYearComponent = RefuseTransferYearComponent;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentUser = exports.StudentQuickAddComponent = void 0;
var md5r = _interopRequireWildcard(__webpack_require__(386));
__webpack_require__(250);
var _adduser = __webpack_require__(387);
var _common = __webpack_require__(25);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var md5 = md5r["default"];
var StudentUser = /*#__PURE__*/function (_CommonUser) {
  _inherits(StudentUser, _CommonUser);
  var _super = _createSuper(StudentUser);
  function StudentUser() {
    var _this;
    _classCallCheck(this, StudentUser);
    _this = _super.apply(this, arguments);
    _this.educGroupTo = null;
    _this.categoryNotEnrolled = null;
    _this.mother = new _adduser.CommonUser();
    _this.father = new _adduser.CommonUser();
    return _this;
  }
  return _createClass(StudentUser);
}(_adduser.CommonUser);
exports.StudentUser = StudentUser;
var StudentQuickAddController = /*#__PURE__*/function (_AddUserController) {
  StudentQuickAddController.$inject = ["dateUtils", "$q", "$scope", "language", "appContext", "$dialogs", "pageContext", "$http", "$appLoader", "$location", "editDocContext", "moveClassesRepository", "changeTracker", "similarsService", "settingsRepository", "$longWork", "usersRepository", "navigationService", "userInfoRepository", "settingsProvider"];
  _inherits(StudentQuickAddController, _AddUserController);
  var _super2 = _createSuper(StudentQuickAddController);
  /*@ngInject*/
  function StudentQuickAddController(dateUtils, $q, $scope, language, appContext, $dialogs, pageContext, $http, $appLoader, $location, editDocContext, moveClassesRepository, changeTracker, similarsService, settingsRepository, $longWork, usersRepository, navigationService, userInfoRepository, settingsProvider) {
    var _this2;
    _classCallCheck(this, StudentQuickAddController);
    _this2 = _super2.call(this, language, pageContext, $appLoader, changeTracker, dateUtils, appContext, similarsService, settingsRepository, $q, $dialogs, $longWork, usersRepository, navigationService, userInfoRepository, $scope);
    _this2.dateUtils = dateUtils;
    _this2.$q = $q;
    _this2.$scope = $scope;
    _this2.language = language;
    _this2.appContext = appContext;
    _this2.$dialogs = $dialogs;
    _this2.$http = $http;
    _this2.$appLoader = $appLoader;
    _this2.$location = $location;
    _this2.editDocContext = editDocContext;
    _this2.moveClassesRepository = moveClassesRepository;
    _this2.changeTracker = changeTracker;
    _this2.similarsService = similarsService;
    _this2.settingsRepository = settingsRepository;
    _this2.$longWork = $longWork;
    _this2.usersRepository = usersRepository;
    _this2.navigationService = navigationService;
    _this2.userInfoRepository = userInfoRepository;
    _this2.settingsProvider = settingsProvider;
    _this2.educGroups = [];
    _this2.parentDateErrorMessage = "Ошибка при вводе даты";
    _this2.upFirstLetter = function (str) {
      return str.replace(/((?:(?:^|[.?!])\s*)+)(.)/g, function (m, tail, ch) {
        return tail + ch.toUpperCase();
      });
    };
    _this2.complete = function () {
      //todo. проверка наличия заполненных учащихся
      //todo. отправить на сервер запрос (/webapi/context/session) для установки в сессиию необходимых данных (заполненных учащихся) для функционала быстрого ввода
      var emptyUsers = !_this2.users.length;
      if (emptyUsers) {
        _this2.users.push(_this2.currentUser);
      }
      var usersArr = [];
      _this2.users.forEach(function (element) {
        var _a, _b;
        var studentDto = {};
        studentDto.birthDate = element.birthDate;
        studentDto.firstName = element.firstName;
        studentDto.lastName = element.lastName;
        studentDto.noMiddleName = element.noMiddleName || false;
        studentDto.middleName = studentDto.noMiddleName ? "" : element.middleName;
        studentDto.gender = element.gender === _this2.maleLetter ? 0 : 1;
        studentDto.loginName = element.login;
        studentDto.email = element.email;
        studentDto.password = md5(element.password);
        studentDto.CategoryIdStr = element.categoryNotEnrolled ? element.categoryNotEnrolled.id : null;
        studentDto.fatherFirstName = element.father.firstName;
        studentDto.fatherLastName = element.father.lastName;
        studentDto.fatherMiddleName = element.father.middleName;
        studentDto.fatherBirthDate = element.father.birthDate ? _this2.dateUtils.date2str(element.father.birthDate) : null;
        studentDto.motherFirstName = element.mother.firstName;
        studentDto.motherLastName = element.mother.lastName;
        studentDto.motherMiddleName = element.mother.middleName;
        studentDto.motherBirthDate = element.mother.birthDate ? _this2.dateUtils.date2str(element.mother.birthDate) : null;
        studentDto.className = (_a = element.educGroupTo) === null || _a === void 0 ? void 0 : _a.name;
        studentDto.preferedMethodContact = element.preferedComm;
        studentDto.funcType = _this2.appContext.funcType;
        studentDto.grade = (_b = element.educGroupTo) === null || _b === void 0 ? void 0 : _b.grade;
        studentDto.isPasswordExpired = element.passwordExpired;
        studentDto.DocSubType = _this2.editDocContext.moveDoc.docSubType;
        studentDto.schoolYearId = +_this2.appContext.yearId;
        usersArr.push(studentDto);
      });
      _this2.$http.post("/webapi/movement/qadd/putInSession", usersArr).then(function () {
        _this2.$location.path("/movedoc/".concat(_this2.editDocContext.moveDoc.id, "/add/quickadd"));
      })["catch"](function (err) {
        if (emptyUsers) {
          _this2.users = [];
          _this2.$dialogs.message(err && err.data && err.data.message ? err.data.message : _this2.language.Generic.Common.kUnexpErr);
        }
      });
    };
    _this2.moveDoc = _this2.editDocContext.moveDoc;
    _this2.$onInit();
    return _this2;
  }
  _createClass(StudentQuickAddController, [{
    key: "getNewUser",
    value: function getNewUser() {
      var _a;
      var newUser = new StudentUser();
      newUser.father.gender = this.maleLetter;
      newUser.mother.gender = this.femaleLetter;
      newUser.gender = this.maleLetter;
      newUser.educGroupTo = this.educGroups && this.educGroups.length ? this.educGroups[0] : null;
      newUser.categoryNotEnrolled = ((_a = this.categorysNotEnrolled) === null || _a === void 0 ? void 0 : _a.length) ? this.categorysNotEnrolled[0] : null;
      return newUser;
    }
  }, {
    key: "isValidData",
    value: function isValidData() {
      return _get(_getPrototypeOf(StudentQuickAddController.prototype), "isValidData", this).call(this) && this.currentUser.educGroupTo;
    }
  }, {
    key: "initPage",
    value: function initPage() {
      var _this3 = this;
      this.pageContext.title = this.language.SetupSchoolUI.kTitleStudentQAdd;
      this.pageContext.back = {
        history: true
      };
      this.pageContext.parent = {
        title: this.language.Movement.kTitle_MoveBook,
        href: "/book/"
      };
      this.pageContext.leaveConfirmFunc = function (leave) {
        if (_this3.users && _this3.users.length) {
          _this3.$dialogs.confirm(_this3.language.Common.kStudentsDataWereChangedContinue).then(function () {
            leave();
          }, function () {});
          return false;
        } else {
          leave();
        }
      };
      this.productName = this.appContext.productName;
      this.currentUser = this.getNewUser();
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this4 = this;
      this.eduGroupTitle = this.language.Filter.kClassGB;
      if (this.moveDoc.docSubType === 0) {
        this.eduGroupTitle = this.language.SetupSchoolCalendar.kGrade;
      }
      //todo. в ДОО логин, пароль, предпочтительный, email необходимо скрыть на форме
      var loadRegExpAlphabet = this.settingsProvider.LocalSettings.RegExpAlphabet().then(function (alphabet) {
        _this4.regExpAlphabet = alphabet;
      });
      var loadRegExpFio = this.settingsProvider.LocalSettings.RegExpFio().then(function (fio) {
        _this4.regExpFio = fio;
      });
      var loadEducGroupsTo = this.moveClassesRepository.getEducGroupsTo(this.moveDoc.docType, this.moveDoc.docSubType, null).then(function (educGroups) {
        _this4.educGroups = educGroups;
        _this4.currentUser.educGroupTo = _this4.educGroups[0];
      });
      this.$q.all([loadRegExpFio, loadRegExpAlphabet, loadEducGroupsTo]).then(function () {
        _this4.namePattern = _this4.regExpFio == "" ? new RegExp("^[".concat(_this4.regExpAlphabet, "].*$")) : new RegExp(_this4.regExpFio, "i");
        _this4.$appLoader.hide();
      });
      //если ДОО
      if (this.isAddSchool()) {
        this.categoryTitle = this.language.Generic.PoolStudents.kCategory;
        //получаем список категорий незачисленных из базы
        this.moveClassesRepository.getPoolCategories().then(function (categorys) {
          _this4.categorysNotEnrolled = categorys;
          _this4.currentUser.categoryNotEnrolled = _this4.categorysNotEnrolled[0];
        });
      }
    }
  }, {
    key: "isAddSchool",
    value: function isAddSchool() {
      return this.appContext.funcType === _common.FuncType.addSchool;
    }
  }, {
    key: "create",
    value: function create() {
      _get(_getPrototypeOf(StudentQuickAddController.prototype), "create", this).call(this);
      this.currentUser.father.gender = this.maleLetter;
      this.currentUser.mother.gender = this.femaleLetter;
    }
  }, {
    key: "changeFatherLastName",
    value: function changeFatherLastName() {
      if (this.currentUser.father.lastName) {
        this.currentUser.father.lastName = this.upFirstLetter(this.currentUser.father.lastName);
      }
    }
  }, {
    key: "changeFatherFirstName",
    value: function changeFatherFirstName() {
      if (this.currentUser.father.firstName) {
        this.currentUser.father.firstName = this.upFirstLetter(this.currentUser.father.firstName);
      }
    }
  }, {
    key: "changeFatherMiddleName",
    value: function changeFatherMiddleName() {
      if (this.currentUser.father.middleName) {
        this.currentUser.father.middleName = this.upFirstLetter(this.currentUser.father.middleName);
      }
    }
  }, {
    key: "changeMotherLastName",
    value: function changeMotherLastName() {
      if (this.currentUser.mother.lastName) {
        this.currentUser.mother.lastName = this.upFirstLetter(this.currentUser.mother.lastName);
      }
    }
  }, {
    key: "changeMotherFirstName",
    value: function changeMotherFirstName() {
      if (this.currentUser.mother.firstName) {
        this.currentUser.mother.firstName = this.upFirstLetter(this.currentUser.mother.firstName);
      }
    }
  }, {
    key: "changeMotherMiddleName",
    value: function changeMotherMiddleName() {
      if (this.currentUser.mother.middleName) {
        this.currentUser.mother.middleName = this.upFirstLetter(this.currentUser.mother.middleName);
      }
    }
  }, {
    key: "clearUser",
    value: function clearUser(user) {
      var _a;
      user.educGroupTo = this.educGroups && this.educGroups.length ? this.educGroups[0] : null;
      user.father.lastName = null;
      user.father.firstName = null;
      user.father.middleName = null;
      user.mother.lastName = null;
      user.mother.firstName = null;
      user.mother.middleName = null;
      user.categoryNotEnrolled = ((_a = this.categorysNotEnrolled) === null || _a === void 0 ? void 0 : _a.length) ? this.categorysNotEnrolled[0] : null;
      _get(_getPrototypeOf(StudentQuickAddController.prototype), "clearUser", this).call(this, user);
    }
  }, {
    key: "isMotherRequired",
    value: function isMotherRequired() {
      return this.currentUser.mother.firstName || this.currentUser.mother.lastName || this.currentUser.mother.middleName || this.currentUser.mother.birthDate;
    }
  }, {
    key: "isFatherRequired",
    value: function isFatherRequired() {
      return this.currentUser.father.firstName || this.currentUser.father.lastName || this.currentUser.father.middleName || this.currentUser.father.birthDate;
    }
  }]);
  return StudentQuickAddController;
}(_adduser.AddUserController);
var StudentQuickAddComponent = {
  controller: StudentQuickAddController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/movement/studentsQuickAdd/studentsQuickAdd.component.html"
};
exports.StudentQuickAddComponent = StudentQuickAddComponent;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Code also contributed by Greg Holt
 * See http://pajhome.org.uk/site/legal.html for details.
 */

/*
 * This file was modified to process non-ascii strings in IE
 */

(function () {
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }
  /*
   * Bitwise rotate a 32-bit number to the left.
   */
  function rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /*
   * These functions implement the four basic operations the algorithm uses.
   */
  function cmn(q, a, b, x, s, t) {
    return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /*
   * Calculate the MD5 of an array of little-endian words, producing an array
   * of little-endian words.
   */
  function coreMD5(x) {
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063);
      b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
   * Convert an array of little-endian words to a hex string.
   */
  function binl2hex(binarray) {
    var hex_tab = "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
    }
    return str;
  }

  /* Differently from charCodeAt, returns normal ASCII codes for russian letters */
  function charCodeAt_(s, pos) {
    var n = s.charCodeAt(pos);
    if (n >= 0 && n <= 255) return n;else if (n >= 1040 && n <= 1103) return n - 848;else if (n == 1025) return 168;else if (n == 1105) return 184;else if (n == 8470) return 185;else return 0;
  }

  /*
   * Convert an 8-bit character string to a sequence of 16-word blocks, stored
   * as an array, and append appropriate padding for MD4/5 calculation.
   * If any of the characters are >255, the high byte is silently ignored.
   */
  function str2binl_(str) {
    var nblk = (str.length + 8 >> 6) + 1; // number of 16-word blocks
    var blks = new Array(nblk * 16);
    for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
    for (var i = 0; i < str.length; i++) blks[i >> 2] |= (charCodeAt_(str, i) & 0xFF) << i % 4 * 8;
    blks[i >> 2] |= 0x80 << i % 4 * 8;
    blks[nblk * 16 - 2] = str.length * 8;
    return blks;
  }

  /* External interface */
  function hexMD5_(str) {
    return binl2hex(coreMD5(str2binl_(str)));
  }

  //для поддержки js модульности
  (function (exp, name) {
    var exported = false;
    if ( true && module.exports) {
      module.exports = exp;
      exported = true;
    }
    if (true) {
      exports = exp;
      exported = true;
    }
    if (!exported && typeof window !== "undefined" && typeof name !== "undefined") {
      window[name] = exp;
    }
    if (typeof root !== "undefined" && typeof name !== "undefined") {
      root[name] = exp;
    }
  })(hexMD5_, "hexMD5");
})();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonUser = exports.AddUserController = void 0;
var _common = __webpack_require__(25);
__webpack_require__(250);
var _users = __webpack_require__(388);
var _formValidationHelper = __webpack_require__(312);
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
var CommonUser = /*#__PURE__*/function () {
  function CommonUser() {
    _classCallCheck(this, CommonUser);
    this.lastName = "";
    this.firstName = "";
    this.middleName = "";
    this.gender = null;
    this.birthDate = null;
    this.login = "";
    this.password = "";
    this.passwordConfirm = "";
    this.preferedComm = "C";
    this.email = "";
    this.passwordExpired = true;
    this.noMiddleName = false;
    this.idForSimilarChoice = null;
  }
  _createClass(CommonUser, [{
    key: "fullName",
    get: function get() {
      return this.lastName + " " + this.firstName + " " + this.middleName;
    }
  }]);
  return CommonUser;
}();
exports.CommonUser = CommonUser;
var AddUserController = /*#__PURE__*/function () {
  AddUserController.$inject = ["language", "pageContext", "$appLoader", "changeTracker", "dateUtils", "appContext", "similarsService", "settingsRepository", "$q", "$dialogs", "$longWork", "usersRepository", "navigationService", "userInfoRepository", "$scope"];
  /*@ngInject*/
  function AddUserController(language, pageContext, $appLoader, changeTracker, dateUtils, appContext, similarsService, settingsRepository, $q, $dialogs, $longWork, usersRepository, navigationService, userInfoRepository, $scope) {
    var _this = this;
    _classCallCheck(this, AddUserController);
    this.language = language;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.changeTracker = changeTracker;
    this.dateUtils = dateUtils;
    this.appContext = appContext;
    this.similarsService = similarsService;
    this.settingsRepository = settingsRepository;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.usersRepository = usersRepository;
    this.navigationService = navigationService;
    this.userInfoRepository = userInfoRepository;
    this.$scope = $scope;
    this.mode = "add";
    this.users = [];
    this.maxQAddUsers = 10;
    pageContext.back = {
      history: true
    };
    this.initPage();
    var getMaleLetter = this.settingsRepository.getMaleLetter().then(function (result) {
      _this.maleLetter = result;
    });
    var getFemaleLetter = this.settingsRepository.getFemaleLetter().then(function (result) {
      _this.femaleLetter = result;
    });
    var getRequireParentBirthDate = this.settingsRepository.requireParentBirthDate().then(function (result) {
      _this.requireParentBirthDate = result;
    });
    this.$q.all([getMaleLetter, getFemaleLetter, getRequireParentBirthDate]).then(function () {
      _this.load();
    });
    this.helper = new _formValidationHelper.FormValidationHelper(this.$dialogs, this.language, {});
  }
  _createClass(AddUserController, [{
    key: "getNewUser",
    value: function getNewUser() {
      return null;
    }
  }, {
    key: "load",
    value: function load() {
      this.currentUser = this.getNewUser();
      this.changeTracker.clearDataChanges;
      this.$appLoader.hide();
    }
  }, {
    key: "editExecution",
    value: function editExecution() {
      this.mode = "edit";
      this.copyUser(this.editingUser, this.currentUser);
      this.changeTracker.clearDataChanges();
      this.$scope.$applyAsync();
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this2 = this;
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (user) {
        this.editingUser = user;
      }
      if (this.mode == "add" && this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm(this.language.Generic.Common.kDataWereChanged).then(function () {
          _this2.editExecution();
        }, function () {})["catch"](function () {});
      } else {
        this.editExecution();
      }
    }
  }, {
    key: "update",
    value: function update(canUpdate) {
      if (canUpdate) {
        this.copyUser(this.currentUser, this.editingUser);
        this.changeTracker.clearDataChanges();
      } else {
        this.validDataMessages();
      }
    }
  }, {
    key: "create",
    value: function create() {
      this.mode = "add";
      this.currentUser = this.getNewUser();
      this.editingUser = this.currentUser;
      this.clearForm();
    }
  }, {
    key: "updateAndCreate",
    value: function updateAndCreate() {
      if (this.userInfo.$valid && this.isValidData() && this.users.length < this.maxQAddUsers) {
        this.copyUser(this.currentUser, this.editingUser);
        this.create();
      } else {
        if (this.focusInvalidControl()) {
          return;
        }
        this.validDataMessages();
        if (this.users && this.users.length >= this.maxQAddUsers) {
          if (this.userInfo.$valid && this.currentUser.birthDate) {
            this.update(true);
            this.$dialogs.message("".concat(this.language.Generic.Import.kRecordWasRefreshed, "\n") + this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          } else {
            this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          }
        }
      }
    }
  }, {
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = "Новый пользователь";
    }
  }, {
    key: "existsUsers",
    value: function existsUsers() {
      return this.users && this.users.length ? true : false;
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.userInfo.$displayErrors = false;
      this.userInfo.$setUntouched();
      this.userInfo.$setPristine();
      this.changeTracker.clearDataChanges();
    }
  }, {
    key: "clearUser",
    value: function clearUser(user) {
      user.lastName = "";
      user.firstName = "";
      user.middleName = "";
      user.noMiddleName = false;
      user.birthDate = null;
      user.gender = this.femaleLetter;
      user.login = "";
      user.password = "";
      user.preferedComm = "C";
      user.email = "";
      user.passwordExpired = true;
      user.passwordConfirm = "";
      this.clearForm();
    }
  }, {
    key: "clearCurrentUser",
    value: function clearCurrentUser() {
      this.clearUser(this.currentUser);
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      this.users = this.users.filter(function (x) {
        return x != _this3.currentUser;
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this4 = this;
      this.users = this.users.filter(function (item) {
        return item.login !== _this4.editingUser.login;
      });
      if (this.users.length) {
        this.mode = 'edit';
        this.editingUser = this.users[0];
        this.copyUser(this.editingUser, this.currentUser);
      } else {
        this.mode = 'add';
        this.clearUser(this.currentUser);
        //todo. проверить
        this.editingUser = this.currentUser;
        this.userInfo.$displayErrors = false;
      }
    }
  }, {
    key: "compareCommonUsers",
    value: function compareCommonUsers(user1, user2) {
      if (user1.lastName == user2.lastName && user1.firstName == user2.firstName && user1.middleName == user2.middleName && user1.noMiddleName == user2.noMiddleName && user1.gender == user2.gender && this.dateUtils.date2str(user1.birthDate) == this.dateUtils.date2str(user2.birthDate) && user1.login == user2.login && user1.password == user2.password && user1.passwordConfirm == user2.passwordConfirm && user1.preferedComm == user2.preferedComm && user1.email == user2.email && user1.passwordExpired == user2.passwordExpired && user1.noMiddleName == user2.noMiddleName) {
        return true;
      }
      return false;
    }
  }, {
    key: "isLoginAlreadyExists",
    value: function isLoginAlreadyExists() {
      var _this5 = this;
      return !this.isPreSchool() && this.users.find(function (item) {
        return _this5.currentUser.login && item.login.toUpperCase() === _this5.currentUser.login.toUpperCase() && (_this5.mode === 'add' || _this5.mode === 'edit' && _this5.editingUser.login.toUpperCase() !== _this5.currentUser.login.toUpperCase());
      });
    }
  }, {
    key: "equalByFio",
    value: function equalByFio(user1, user2) {
      return user1.lastName && user2.lastName.toUpperCase() === user1.lastName.toUpperCase() && user1.firstName && user2.firstName.toUpperCase() === user1.firstName.toUpperCase() && (user1.middleName && !user1.noMiddleName && !user2.noMiddleName && user2.middleName.toUpperCase() === user1.middleName.toUpperCase() || user1.noMiddleName && user2.noMiddleName);
    }
  }, {
    key: "isFioAlreadyExists",
    value: function isFioAlreadyExists() {
      var _this6 = this;
      return this.users.find(function (item) {
        return _this6.equalByFio(_this6.currentUser, item) && (_this6.mode === 'add' || _this6.mode == 'edit' && !_this6.equalByFio(_this6.editingUser, _this6.currentUser));
      });
    }
  }, {
    key: "isSimplePasswordExists",
    value: function isSimplePasswordExists() {
      return !this.isPreSchool() && (this.users.find(function (item) {
        return AddUserController.checkPasswordReliability(item.login, item.password, item.lastName, item.firstName, item.middleName);
      }) || AddUserController.checkPasswordReliability(this.currentUser.login, this.currentUser.password, this.currentUser.lastName, this.currentUser.firstName, this.currentUser.middleName));
    }
  }, {
    key: "isPwdSurroundSpacesExists",
    value: function isPwdSurroundSpacesExists() {
      return !this.isPreSchool() && (this.users.find(function (item) {
        return AddUserController.existsSurroundSpaces(item.password);
      }) || AddUserController.existsSurroundSpaces(this.currentUser.password));
    }
  }, {
    key: "isPreSchool",
    value: function isPreSchool() {
      return this.appContext.funcType === 1;
    }
  }, {
    key: "isValidData",
    value: function isValidData() {
      return this.currentUser.birthDate && !this.isLoginAlreadyExists() && !this.isFioAlreadyExists() && !this.isSimplePasswordExists() && !this.isPwdSurroundSpacesExists() && this.users.length <= this.maxQAddUsers && this.currentUser.password == this.currentUser.passwordConfirm;
    }
  }, {
    key: "save",
    value: function save() {
      this.userInfo.$displayErrors = true;
      var existsUsers = this.existsUsers();
      var validData = this.currentUser && this.userInfo.$valid && this.isValidData();
      if (!validData && (!existsUsers || this.mode != 'add' || this.changeTracker.isDataChanged())) {
        if (this.focusInvalidControl()) {
          return;
        }
      }
      if (existsUsers || validData) {
        if (existsUsers && this.mode == 'add') {
          if (!validData && this.changeTracker.isDataChanged()) {
            this.validDataMessages();
            return;
          }
          if (this.users.length < this.maxQAddUsers && validData) {
            this.users.unshift(this.currentUser);
          }
        }
        if (this.mode == 'edit') {
          if (!validData) {
            return;
          }
          this.update(true);
        }
        this.complete();
      }
    }
  }, {
    key: "complete",
    value: function complete() {}
  }, {
    key: "completeWithParams",
    value: function completeWithParams(userType, roleGroup, navigateTo) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this7 = this;
        var emptyUsers, usersArr, similars, personSimilarsResolveData, similarsResolveData, usersAddArr, result, roleGroupType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              emptyUsers = !this.users.length;
              if (emptyUsers) {
                this.users.push(this.currentUser);
              }
              usersArr = this.users.map(function (element) {
                return _this7.similarsService.ConvertCommonUserToAddUserDto(element);
              });
              similars = usersArr.map(function (user) {
                return _this7.similarsService.ConvertUserToSimilarsCheckRequest(user, userType, _this7.maleLetter);
              });
              _context.next = 6;
              return this.$longWork.execute(this.usersRepository.checkSimilars(similars, roleGroup));
            case 6:
              personSimilarsResolveData = _context.sent;
              _context.prev = 7;
              _context.next = 10;
              return this.similarsService.chooseSimilars(personSimilarsResolveData, similars, roleGroup);
            case 10:
              similarsResolveData = _context.sent;
              usersAddArr = [];
              usersArr.forEach(function (usr) {
                var similarChoice = similarsResolveData.find(function (x) {
                  return x.personId == usr.idForSimilarChoice;
                });
                if (!similarChoice) {
                  usersAddArr.push(usr);
                } else {
                  if ((similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.ExistingPerson || (similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.NewPerson) {
                    if ((similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.ExistingPerson && (similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.existingUserId) > 0) {
                      usr.id = similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.existingUserId;
                    }
                    usersAddArr.push(usr);
                  }
                }
              });
              _context.next = 15;
              return this.$longWork.execute(this.usersRepository.addUsers(usersAddArr));
            case 15:
              result = _context.sent;
              if (!result.error) {
                _context.next = 33;
                break;
              }
              roleGroupType = "";
              _context.t0 = roleGroup;
              _context.next = _context.t0 === _common.RoleGroup.Staffs ? 21 : _context.t0 === _common.RoleGroup.EducManagers ? 23 : _context.t0 === _common.RoleGroup.Parents ? 25 : 27;
              break;
            case 21:
              roleGroupType = "персонала";
              return _context.abrupt("break", 28);
            case 23:
              roleGroupType = "пользователя УО";
              return _context.abrupt("break", 28);
            case 25:
              roleGroupType = "родителя";
              return _context.abrupt("break", 28);
            case 27:
              roleGroupType = "";
            case 28:
              this.$dialogs.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F ".concat(roleGroupType, ". ").concat(result.message));
              this.mode = "edit";
              this.currentUser = this.getNewUser();
              this.edit(this.users[0]);
              return _context.abrupt("return");
            case 33:
              this.$dialogs.message("Добавлено записей: " + result.added);
              this.changeTracker.clearDataChanges();
              this.users = [];
              this.navigationService.navigateTo((_b = (_a = this.pageContext.back.href) !== null && _a !== void 0 ? _a : this.pageContext.parent.href) !== null && _b !== void 0 ? _b : navigateTo);
              _context.next = 42;
              break;
            case 39:
              _context.prev = 39;
              _context.t1 = _context["catch"](7);
              this.addExecution(false);
            case 42:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 39]]);
      }));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this8 = this;
      if (!this.compareCommonUsers(this.editingUser, this.currentUser) || this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm("Внимание! Текущие изменения формы будут сброшены. Продолжить?").then(function () {
          _this8.edit();
          _this8.$dialogs.notify(_this8.language.Generic.Common.kAttention, _this8.language.Generic.Common.kResetChanges, true);
        })["catch"](function () {});
      } else {
        this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.Common.kNoChanges, true);
      }
    }
  }, {
    key: "addExecution",
    value: function addExecution(showMessages) {
      if (this.users && this.users.length < this.maxQAddUsers) {
        this.mode = "add";
        this.currentUser = this.getNewUser();
        this.editingUser = this.currentUser;
        this.clearForm();
      } else if (this.users && this.users.length == this.maxQAddUsers) {
        this.mode = "edit";
        this.currentUser = this.getNewUser();
        this.edit(this.users[0]);
        if (showMessages) {
          this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
        }
      }
    }
  }, {
    key: "focusInvalidControl",
    value: function focusInvalidControl() {
      var invalidControl = this.userInfo.$$controls.find(function (c) {
        return c.$invalid;
      });
      if (invalidControl) {
        this.helper.focusInvalidControl(invalidControl.$$element);
        return true;
      } else {
        if (this.currentUser && this.userInfo.PW && (AddUserController.checkPasswordReliability(this.currentUser.login, this.currentUser.password, this.currentUser.lastName, this.currentUser.firstName, this.currentUser.middleName) || AddUserController.existsSurroundSpaces(this.currentUser.password))) {
          this.helper.focusInvalidControl(this.userInfo.PW.$$element[0]);
          return true;
        }
      }
      return false;
    }
  }, {
    key: "add",
    value: function add() {
      var _this9 = this;
      var canSave = this.userInfo.$valid && this.isValidData() && this.users.length < this.maxQAddUsers;
      if (!canSave) {
        if (this.focusInvalidControl()) {
          return;
        }
        this.validDataMessages();
        if (this.users.length >= this.maxQAddUsers) {
          this.clearUser(this.currentUser);
          this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          return;
        }
        return;
      }
      if (!this.users.find(function (user) {
        return _this9.compareCommonUsers(user, _this9.currentUser);
      })) {
        this.users.unshift(this.currentUser);
      }
      this.addExecution(true);
    }
  }, {
    key: "validDataMessages",
    value: function validDataMessages() {
      if (this.isLoginAlreadyExists()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrorLoginNameAlreadyExists);
        return;
      }
      if (this.isFioAlreadyExists()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrorFioAlreadyExists);
        return;
      }
      if (this.isSimplePasswordExists()) {
        this.$dialogs.message(this.language.Generic.Common.kSimplePassword);
        return;
      }
      if (this.isPwdSurroundSpacesExists()) {
        this.$dialogs.message(this.language.Generic.Common.kErrPWDSurroundSpaces);
        return;
      }
    }
  }, {
    key: "copyUser",
    value: function copyUser(source, dest) {
      if (!this.compareCommonUsers(source, dest)) {
        angular.copy(source, dest);
      }
    }
  }], [{
    key: "existsSurroundSpaces",
    value: function existsSurroundSpaces(value) {
      return value && value.length && (value.charAt(0) == ' ' || value.charAt(value.length - 1) == ' ');
    }
  }, {
    key: "checkPasswordReliability",
    value: function checkPasswordReliability(login, password, lastName, firstName, middleName) {
      var upperPass = password === null || password === void 0 ? void 0 : password.toUpperCase();
      var upperLastName = lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase();
      var upperFirstName = firstName === null || firstName === void 0 ? void 0 : firstName.toUpperCase();
      var upperLogin = login === null || login === void 0 ? void 0 : login.toUpperCase();
      var firstSymbolFN = upperFirstName === null || upperFirstName === void 0 ? void 0 : upperFirstName.charAt(0);
      var firstSymbolMN = middleName ? middleName.toUpperCase().charAt(0) : "";
      return upperPass == upperLogin || upperPass == upperLastName || upperPass == upperFirstName || upperPass == upperLastName + upperFirstName || upperPass == upperFirstName + upperLastName || upperPass == upperLastName + firstSymbolFN || upperPass == firstSymbolFN + upperLastName || upperPass == upperLastName + firstSymbolFN + firstSymbolMN || upperPass == firstSymbolFN + firstSymbolMN + upperLastName;
    }
  }]);
  return AddUserController;
}();
exports.AddUserController = AddUserController;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = exports.SimilarsType = exports.SimilarsCheckLimitation = exports.SimilarLocation = exports.SililarsCheckBehavior = exports.PredefinedDocumentType = exports.PersonGender = exports.PersonEnrollmentOption = exports.Gender = void 0;
var PersonGender;
exports.PersonGender = PersonGender;
(function (PersonGender) {
  PersonGender[PersonGender["Male"] = 0] = "Male";
  PersonGender[PersonGender["Female"] = 1] = "Female";
})(PersonGender || (exports.PersonGender = PersonGender = {}));
var UserType;
exports.UserType = UserType;
(function (UserType) {
  UserType[UserType["Staff"] = 1] = "Staff";
  UserType[UserType["Student"] = 2] = "Student";
  UserType[UserType["Parent"] = 3] = "Parent";
})(UserType || (exports.UserType = UserType = {}));
var PredefinedDocumentType;
exports.PredefinedDocumentType = PredefinedDocumentType;
(function (PredefinedDocumentType) {
  PredefinedDocumentType[PredefinedDocumentType["Unknown"] = 0] = "Unknown";
  PredefinedDocumentType[PredefinedDocumentType["Passport"] = 1] = "Passport";
  PredefinedDocumentType[PredefinedDocumentType["BirthCertificate"] = 2] = "BirthCertificate";
  PredefinedDocumentType[PredefinedDocumentType["Snils"] = 3] = "Snils";
})(PredefinedDocumentType || (exports.PredefinedDocumentType = PredefinedDocumentType = {}));
var SimilarLocation;
exports.SimilarLocation = SimilarLocation;
(function (SimilarLocation) {
  SimilarLocation[SimilarLocation["InSchool"] = 0] = "InSchool";
  SimilarLocation[SimilarLocation["InPool"] = 1] = "InPool";
  SimilarLocation[SimilarLocation["InOtherSchoolsExcludeUDODs"] = 2] = "InOtherSchoolsExcludeUDODs";
  SimilarLocation[SimilarLocation["InOtherSchools"] = 3] = "InOtherSchools";
  SimilarLocation[SimilarLocation["Any"] = 4] = "Any";
})(SimilarLocation || (exports.SimilarLocation = SimilarLocation = {}));
var SimilarsCheckLimitation;
exports.SimilarsCheckLimitation = SimilarsCheckLimitation;
(function (SimilarsCheckLimitation) {
  SimilarsCheckLimitation[SimilarsCheckLimitation["WithoutLimitation"] = 0] = "WithoutLimitation";
  SimilarsCheckLimitation[SimilarsCheckLimitation["MunicipalitySearch"] = 1] = "MunicipalitySearch";
})(SimilarsCheckLimitation || (exports.SimilarsCheckLimitation = SimilarsCheckLimitation = {}));
var SililarsCheckBehavior;
exports.SililarsCheckBehavior = SililarsCheckBehavior;
(function (SililarsCheckBehavior) {
  SililarsCheckBehavior[SililarsCheckBehavior["FindFirsts"] = 0] = "FindFirsts";
  SililarsCheckBehavior[SililarsCheckBehavior["FindAll"] = 1] = "FindAll";
})(SililarsCheckBehavior || (exports.SililarsCheckBehavior = SililarsCheckBehavior = {}));
var SimilarsType;
exports.SimilarsType = SimilarsType;
(function (SimilarsType) {
  SimilarsType[SimilarsType["SimilarFiSolidMiddleSoftBirthDate"] = 1] = "SimilarFiSolidMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidBirthDate"] = 2] = "SimilarFiSoftMiddleSolidBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidOneOrMoreDocuments"] = 3] = "SimilarFiSoftMiddleSolidOneOrMoreDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyLastMoreThanOneDocuments"] = 4] = "SimilarFuzzyLastMoreThanOneDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyFiSoftFuzzyMiddleOther"] = 5] = "SimilarFuzzyFiSoftFuzzyMiddleOther";
  SimilarsType[SimilarsType["SimilarSimilarStudentParentsFi"] = 6] = "SimilarSimilarStudentParentsFi";
  SimilarsType[SimilarsType["SimilarFiSoftMiddle"] = 7] = "SimilarFiSoftMiddle";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSoftBirthDate"] = 8] = "SimilarFiSoftMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarOneOrMoreDocuments"] = 9] = "SimilarOneOrMoreDocuments";
})(SimilarsType || (exports.SimilarsType = SimilarsType = {}));
var Gender;
exports.Gender = Gender;
(function (Gender) {
  Gender[Gender["Female"] = 0] = "Female";
  Gender[Gender["Male"] = 1] = "Male";
})(Gender || (exports.Gender = Gender = {}));
var PersonEnrollmentOption;
exports.PersonEnrollmentOption = PersonEnrollmentOption;
(function (PersonEnrollmentOption) {
  PersonEnrollmentOption["NewPerson"] = "NewPerson";
  PersonEnrollmentOption["ExistingPerson"] = "ExistingPerson";
  PersonEnrollmentOption["IgnorePerson"] = "IgnorePerson";
  PersonEnrollmentOption["DuplicatePerson"] = "DuplicatePerson";
})(PersonEnrollmentOption || (exports.PersonEnrollmentOption = PersonEnrollmentOption = {}));

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsOutsideTypeComponent = exports.NsDepartOrgSelectorComponent = exports.NsDepartOrgComponent = void 0;
var _movement = __webpack_require__(367);
var _common = __webpack_require__(44);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var NsDepartOrgSelectorController = /*#__PURE__*/function () {
  function NsDepartOrgSelectorController(language, $http, appContext, $longWork) {
    _classCallCheck(this, NsDepartOrgSelectorController);
    this.language = language;
    this.$http = $http;
    this.appContext = appContext;
    this.$longWork = $longWork;
    this.changeOutsideType = new _common.EventEmitter();
  }
  _createClass(NsDepartOrgSelectorController, [{
    key: "$onInit",
    value: function $onInit() {
      if (!this.outsideType || this.outsideType != "OutsideCountry") {
        this.outsideTypes = this.options.outsideTypes.filter(function (item) {
          return item.key != "OutsideCountry";
        });
      } else {
        this.outsideTypes = _toConsumableArray(this.options.outsideTypes);
      }
    }
  }, {
    key: "loadDepartOrgs",
    value: function loadDepartOrgs() {
      var _this = this;
      if (!this.outsideType) {
        this.departOrgs = [{
          id: 0,
          name: "Не указано"
        }];
        return Promise.resolve();
      } else {
        var params = {
          moveType: this.options.moveDocType,
          funcType: this.options.funcType ? this.options.funcType : this.appContext.funcType,
          schoolId: this.schoolId,
          step: this.step,
          outsideType: this.outsideType == null ? null : this.outsideType
        };
        var getDepartOrgs = this.$http.get("/webapi/movement/departorgs", {
          params: params
        });
        return this.$longWork.execute(getDepartOrgs).then(function (response) {
          _this.departOrgs = response.data;
          var emptyOrg = {
            id: 0,
            name: "Не указано"
          };
          _this.departOrgs.unshift(emptyOrg);
          if (_this.options.moveDocType === _movement.MoveDocType.Enroll && _this.options.editReferencesFlag) {
            _this.departOrgs.push({
              id: -2,
              name: _this.language.Generic.ServAdmin.kAddOU
            });
          }
          ;
          if (_this.org && _this.org.id && !_this.departOrgs.find(function (item) {
            return item.id == _this.org.id;
          })) {
            _this.org = Object.assign({}, emptyOrg);
            _this.onChangeEvent.emit({
              departOrg: _this.org,
              outsideType: _this.outsideType
            });
          }
        });
      }
    }
  }]);
  return NsDepartOrgSelectorController;
}();
var NsDepartOrgSelectorComponent = {
  selector: 'nsDepartOrgSelector',
  restrict: 'E',
  transclude: true,
  controller: NsDepartOrgSelectorController,
  template: "<ng-transclude></ng-transclude>",
  bindings: {
    outsideType: "<",
    org: "<",
    onChangeEvent: "<",
    step: "<",
    schoolId: "<",
    options: "<"
  }
};
exports.NsDepartOrgSelectorComponent = NsDepartOrgSelectorComponent;
var NsOutsideTypeController = /*#__PURE__*/function () {
  function NsOutsideTypeController(language, $http, appContext) {
    _classCallCheck(this, NsOutsideTypeController);
    this.language = language;
    this.$http = $http;
    this.appContext = appContext;
  }
  _createClass(NsOutsideTypeController, [{
    key: "outsideTypes",
    get: function get() {
      return this.nsDepartOrgSelectorCtrl.outsideTypes;
    }
  }, {
    key: "outsideType",
    get: function get() {
      return this.nsDepartOrgSelectorCtrl.outsideType;
    },
    set: function set(outsideType) {
      this.nsDepartOrgSelectorCtrl.outsideType = outsideType;
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange() {
      var _this2 = this;
      this.nsDepartOrgSelectorCtrl.org = {
        id: 0,
        name: "Не указано"
      };
      this.nsDepartOrgSelectorCtrl.loadDepartOrgs().then(function () {
        _this2.nsDepartOrgSelectorCtrl.changeOutsideType.emit(_this2.nsDepartOrgSelectorCtrl.outsideType);
      });
    }
  }]);
  return NsOutsideTypeController;
}();
var NsOutsideTypeComponent = {
  restrict: 'E',
  selector: 'nsOutsideType',
  require: {
    nsDepartOrgSelectorCtrl: "^^?nsDepartOrgSelector"
  },
  controller: NsOutsideTypeController,
  controllerAs: "$otCtrl",
  bindings: {},
  template: "\n\t\t\t<select class=\"form-control\" ng-model=\"$otCtrl.outsideType\" ng-options=\"outsideType.key as outsideType.name for outsideType in $otCtrl.outsideTypes\" ng-change=\"$otCtrl.onFilterChange()\" track-changes></select>\n\t\t"
};
exports.NsOutsideTypeComponent = NsOutsideTypeComponent;
var NsDepartOrgController = /*#__PURE__*/function () {
  NsDepartOrgController.$inject = ["language", "$http", "appContext"];
  /*@ngInject*/
  function NsDepartOrgController(language, $http, appContext) {
    _classCallCheck(this, NsDepartOrgController);
    this.language = language;
    this.$http = $http;
    this.appContext = appContext;
  }
  _createClass(NsDepartOrgController, [{
    key: "org",
    get: function get() {
      return this.nsDepartOrgSelectorCtrl.org;
    },
    set: function set(org) {
      this.nsDepartOrgSelectorCtrl.org = org;
    }
  }, {
    key: "departOrgs",
    get: function get() {
      return this.nsDepartOrgSelectorCtrl.departOrgs;
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this3 = this;
      this.nsDepartOrgSelectorCtrl.changeOutsideType.on(function (outsideType) {
        _this3.createSearchSourceWithCleaning(outsideType);
      });
      this.nsDepartOrgSelectorCtrl.loadDepartOrgs().then(function () {});
    }
  }, {
    key: "createSearchSourceWithCleaning",
    value: function createSearchSourceWithCleaning(outsideType) {
      var emptyOrg = {
        id: 0,
        name: "Не указано"
      };
      this.nsDepartOrgSelectorCtrl.org = Object.assign({}, emptyOrg);
      this.nsDepartOrgSelectorCtrl.outsideType = outsideType;
      this.onEducFilterChange(this.nsDepartOrgSelectorCtrl.org);
    }
  }, {
    key: "onEducFilterChange",
    value: function onEducFilterChange(educOrg) {
      this.nsDepartOrgSelectorCtrl.onChangeEvent.emit({
        departOrg: educOrg,
        outsideType: this.nsDepartOrgSelectorCtrl.outsideType
      });
    }
  }]);
  return NsDepartOrgController;
}();
var NsDepartOrgComponent = {
  restrict: 'E',
  selector: 'nsDepartOrg',
  require: {
    nsDepartOrgSelectorCtrl: "^^?nsDepartOrgSelector"
  },
  controller: NsDepartOrgController,
  controllerAs: "$doCtrl",
  bindings: {},
  template: "\n\t\t<select2 ng-if=\"$doCtrl.departOrgs\" name=\"departOrgName\" class=\"form-control\" s2-options=\"departOrg as departOrg.name for departOrg in $doCtrl.departOrgs track by departOrg.id\" ng-change=\"$doCtrl.onEducFilterChange($doCtrl.org)\" ng-model=\"$doCtrl.org\" track-changes></select2>\n\t\t"
};
exports.NsDepartOrgComponent = NsDepartOrgComponent;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportService = void 0;
var _importValidation = __webpack_require__(391);
var _importValidation2 = __webpack_require__(393);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ImportService = /*#__PURE__*/function () {
  ImportService.$inject = ["$dialogs", "$uibModal", "language"];
  /*@ngInject*/
  function ImportService($dialogs, $uibModal, language) {
    _classCallCheck(this, ImportService);
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.language = language;
  }
  _createClass(ImportService, [{
    key: "uploadFile",
    value: function uploadFile(docSubType) {
      var _this = this;
      var uploadOptions = {
        fileExts: function fileExts() {
          return ["xls", "xlsx"];
        },
        queryStringParams: {
          docSubType: docSubType
        },
        url: "/webapi/movement/import/parsefile",
        invalidFileExtMsg: "файл должен быть формата xls"
      };
      return this.$dialogs.uploadFile(this.language.Generic.Common.kSelectFile, uploadOptions).then(function (response) {
        var data = response.result;
        try {
          if (!data.isSuccess) {
            if (data.status == _importValidation2.ResultStatus.Failure) {
              //показать модальное окно с ошибками (выброшенным Exception)
              _this.$dialogs.error(data.message.replace(/\\n/g, " \n"));
              return Promise.reject(_importValidation2.ResultStatus.Failure);
            }
            if (data.status == _importValidation2.ResultStatus.IncorrectFormat) {
              _this.$dialogs.message(data.message);
              return Promise.reject(_importValidation2.ResultStatus.IncorrectFormat);
            }
            //показать таблицу с ошибками валидации
            return _this.showErrors(data, docSubType);
          }
          return Promise.resolve();
        } catch (er) {
          console.log(er);
          return Promise.reject(er);
        }
      });
    }
  }, {
    key: "showErrors",
    value: function showErrors(_result, _docSubType) {
      var instance = this.$uibModal.open({
        controller: _importValidation.ImportValidationComponent.controller,
        controllerAs: _importValidation.ImportValidationComponent.controllerAs,
        size: _importValidation.ImportValidationComponent.size,
        templateUrl: _importValidation.ImportValidationComponent.templateUrl,
        resolve: {
          result: function result() {
            return _result;
          },
          docSubType: function docSubType() {
            return _docSubType;
          }
        }
      });
      return instance.result;
    }
  }]);
  return ImportService;
}();
exports.ImportService = ImportService;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportValidationComponent = void 0;
var _importValidationTable = __webpack_require__(392);
var _importValidation = __webpack_require__(393);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ImportValidationController = /*#__PURE__*/function () {
  ImportValidationController.$inject = ["$dialogs", "$http", "$uibModalInstance", "printExportService", "language", "result", "docSubType"];
  /*@ngInject*/
  function ImportValidationController($dialogs, $http, $uibModalInstance, printExportService, language, result, docSubType) {
    var _this = this;
    _classCallCheck(this, ImportValidationController);
    this.$dialogs = $dialogs;
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
    this.printExportService = printExportService;
    this.language = language;
    this.result = result;
    this.docSubType = docSubType;
    this.hasSkipInvalidData = null;
    this.header = "Ошибки в файле импорта";
    this.buttons = [{
      title: "Продолжить",
      isEnabled: function isEnabled() {
        return _this.hasSkipInvalidData != null;
      },
      icon: "Import",
      action: function action() {
        return _this["import"]();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.close();
      }
    }, {
      title: language.Generic.Buttons.kPrint,
      action: function action() {
        return _this.print();
      }
    }];
    this.showColumnEnabledValues = _.some(result.errors, function (error) {
      return error.enabledValues != null;
    });
    this.isAllRowsHasCriticalErrors = result.isAllRowsHasCriticalErrors;
    //оборачиваю каждую ошибку в объект с флагами указывающими в каком виде показывать столбец возможные значения
    this.errorsWraps = result.errors.map(function (err) {
      return {
        error: err,
        showEnabledValues: err.enabledValues == null || err.enabledValues.length < 6,
        showSpoilerButtonEnabledValues: err.enabledValues != null && err.enabledValues.length > 6,
        emptyEnabledValues: err.enabledValues == null
      };
    });
  }
  _createClass(ImportValidationController, [{
    key: "import",
    value: function _import() {
      var _this2 = this;
      var promise;
      if (this.hasSkipInvalidData) {
        promise = this.skipInvalidData();
      } else {
        promise = this.skipInvalidStudents();
      }
      promise.then(function (importType) {
        _this2.$uibModalInstance.close(importType);
      });
    }
    //пропустить невалидных студентов	
  }, {
    key: "skipInvalidStudents",
    value: function skipInvalidStudents() {
      //если все строки с какими-то ошибками валидации
      if (this.result.isAllRowsHasValidationErrors) {
        this.$dialogs.message("Нет корректных записей");
        return;
      }
      return this.$http.post("/webapi/movement/import/importType", null, {
        params: {
          importType: _importValidation.ImportType.OnlyValidStudents
        }
      }).then(function () {
        return _importValidation.ImportType.OnlyValidStudents;
      });
    }
    //пропустить невалидные ячейки у студента
  }, {
    key: "skipInvalidData",
    value: function skipInvalidData() {
      //если все строки с критическими ошибками
      if (this.result.isAllRowsHasCriticalErrors) {
        this.$dialogs.message("Импорт невозможен т.к. все записи содержат КРИТИЧЕСКИЕ ошибки.");
        return;
      }
      return this.$http.post("/webapi/movement/import/importType", null, {
        params: {
          importType: _importValidation.ImportType.OnlyValidColumns
        }
      }).then(function () {
        return _importValidation.ImportType.OnlyValidColumns;
      });
    }
    //печать ошбок валидации
  }, {
    key: "print",
    value: function print() {
      //оборачиваю каждую ошибку в объект с флагами указывающими в каком виде показывать столбец возможные значения
      var errorsWraps = this.result.errors.map(function (err) {
        return {
          error: err,
          showEnabledValues: true,
          showSpoilerButtonEnabledValues: false,
          emptyEnabledValues: err.enabledValues == null
        };
      });
      var modelPrint = {};
      modelPrint[_importValidationTable.ImportValidationTableComponent.controllerAs] = {
        language: this.language,
        errorsWraps: errorsWraps,
        showColumnEnabledValues: this.showColumnEnabledValues
      };
      this.printExportService.print(_importValidationTable.ImportValidationTableComponent.templateUrl, modelPrint, true);
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return ImportValidationController;
}();
var ImportValidationComponent = {
  controller: ImportValidationController,
  controllerAs: "$ctrl",
  size: "lg",
  templateUrl: '/static/dist/app/school/movement/movesource/import/import.validation.template.html'
};
exports.ImportValidationComponent = ImportValidationComponent;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportValidationTableComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ImportValidationTableController = /*#__PURE__*/_createClass( /*@ngInject*/["language", function ImportValidationTableController(language) {
  _classCallCheck(this, ImportValidationTableController);
  this.language = language;
}]);
var ImportValidationTableComponent = {
  selector: "importValidationTable",
  controller: ImportValidationTableController,
  controllerAs: "$ctrl",
  templateUrl: '/static/dist/app/school/movement/movesource/import/import.validation.table.template.html',
  bindings: {
    errorsWraps: "<",
    showColumnEnabledValues: "<"
  }
};
exports.ImportValidationTableComponent = ImportValidationTableComponent;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultStatus = exports.ImportType = exports.ErrorTypeEnum = void 0;
var ImportType;
exports.ImportType = ImportType;
(function (ImportType) {
  ImportType[ImportType["OnlyValidStudents"] = 1] = "OnlyValidStudents";
  ImportType[ImportType["OnlyValidColumns"] = 2] = "OnlyValidColumns";
})(ImportType || (exports.ImportType = ImportType = {}));
/**Статусы завершения выполнения процедур базы данных */
var ResultStatus;
exports.ResultStatus = ResultStatus;
(function (ResultStatus) {
  /**Операция выполнена успешно */
  ResultStatus["Success"] = "Success";
  /**Конкурентный конфликт, необходимо обновить информацию */
  ResultStatus["ConcurrencyConflict"] = "ConcurrencyConflict";
  /**Конфликт уникальности */
  ResultStatus["UniqueConflict"] = "UniqueConflict";
  /**Не корректные данные */
  ResultStatus["IncorrectData"] = "IncorrectData";
  /**Не удалось выполнить операцию */
  ResultStatus["Failure"] = "Failure";
  /**Неизвестный код выполнения операции */
  ResultStatus["UnknownDbResultCode"] = "UnknownDbResultCode";
  /**Невозможно удалить запись, так как имеются не удаленые зависимые записи */
  ResultStatus["HasUnclosedDependentObjects"] = "HasUnclosedDependentObjects";
  /**Неверный формат */
  ResultStatus["IncorrectFormat"] = "IncorrectFormat";
  /**Результат выполнения операции неизвестен */
  ResultStatus["Unknown"] = "Unknown";
})(ResultStatus || (exports.ResultStatus = ResultStatus = {}));
var ErrorTypeEnum;
exports.ErrorTypeEnum = ErrorTypeEnum;
(function (ErrorTypeEnum) {
  ErrorTypeEnum[ErrorTypeEnum["Warning"] = 1] = "Warning";
  ErrorTypeEnum[ErrorTypeEnum["Critical"] = 2] = "Critical";
})(ErrorTypeEnum || (exports.ErrorTypeEnum = ErrorTypeEnum = {}));

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EarlyAccessService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EarlyAccessService = /*#__PURE__*/function () {
  EarlyAccessService.$inject = ["$http"];
  /*@ngInject*/
  function EarlyAccessService($http) {
    _classCallCheck(this, EarlyAccessService);
    this.$http = $http;
  }
  _createClass(EarlyAccessService, [{
    key: "isAllowed",
    value: function isAllowed(accessKey) {
      return this.$http.get("/webapi/earlyaccess", {
        params: {
          accessKey: accessKey
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }]);
  return EarlyAccessService;
}();
exports.EarlyAccessService = EarlyAccessService;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarsService = void 0;
var _users = __webpack_require__(388);
var _similars2 = __webpack_require__(396);
var _common = __webpack_require__(25);
var md5r = _interopRequireWildcard(__webpack_require__(386));
var _addemuser = __webpack_require__(397);
var _securityrights = __webpack_require__(399);
var _addstaff = __webpack_require__(400);
var _addparent = __webpack_require__(401);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var md5 = md5r["default"];
var SimilarsService = /*#__PURE__*/function () {
  SimilarsService.$inject = ["appContext", "$uibModal", "language", "dateUtils"];
  /*@ngInject*/
  function SimilarsService(appContext, $uibModal, language, dateUtils) {
    _classCallCheck(this, SimilarsService);
    this.appContext = appContext;
    this.$uibModal = $uibModal;
    this.language = language;
    this.dateUtils = dateUtils;
  }
  _createClass(SimilarsService, [{
    key: "ConvertUserToSimilarsCheckRequest",
    value: function ConvertUserToSimilarsCheckRequest(user, userType, maleLetter) {
      var similarsCheckRequest = {
        requestId: user.idForSimilarChoice,
        person: {
          firstName: user.firstName,
          lastName: user.lastName,
          middleName: user.middleName,
          noMiddleName: user.noMiddleName,
          gender: user.gender == maleLetter ? _users.PersonGender.Male : _users.PersonGender.Female
        },
        birthDate: user.birthDate,
        userType: [userType],
        documents: {
          documents: null
        },
        schoolId: +this.appContext.schoolId,
        locations: [_users.SimilarLocation.InSchool, _users.SimilarLocation.InOtherSchools],
        limitation: _users.SimilarsCheckLimitation.WithoutLimitation,
        behavior: _users.SililarsCheckBehavior.FindAll,
        similarTypes: [_users.SimilarsType.SimilarFiSoftMiddleSoftBirthDate],
        proximity: 0.8
      };
      return similarsCheckRequest;
    }
  }, {
    key: "ConvertCommonUserToAddUserDto",
    value: function ConvertCommonUserToAddUserDto(commonUser) {
      var _a, _b;
      var addUserDto = {
        birthDate: commonUser.birthDate,
        firstName: commonUser.firstName,
        lastName: commonUser.lastName,
        noMiddleName: commonUser.noMiddleName || false,
        middleName: commonUser.noMiddleName ? "" : commonUser.middleName,
        gender: commonUser.gender,
        loginname: commonUser.login,
        email: commonUser.email,
        password: md5(commonUser.password),
        prefferedCM: commonUser.preferedComm,
        isPasswordExpired: commonUser.passwordExpired,
        id: 0,
        name: "",
        idForSimilarChoice: "".concat(commonUser.lastName, "_").concat(commonUser.firstName, "_").concat(commonUser.middleName, "_").concat(this.dateUtils.date2str(commonUser.birthDate), "_").concat(Math.floor(Math.random() * 100))
      };
      if (commonUser instanceof _addemuser.EmUser) {
        addUserDto.position = commonUser.position;
        addUserDto.workPhone = commonUser.workPhone, addUserDto.roles = ((_a = commonUser.emRole) === null || _a === void 0 ? void 0 : _a.key) ? [_securityrights.Role[commonUser.emRole.key]] : null;
      } else if (commonUser instanceof _addstaff.Staff) {
        addUserDto.roles = (_b = commonUser.staffRoles) === null || _b === void 0 ? void 0 : _b.map(function (x) {
          return _securityrights.Role[x.key];
        });
      } else if (commonUser instanceof _addparent.Parent) {
        addUserDto.roles = [_securityrights.Role.Parent];
        addUserDto.nickname = "".concat(commonUser.lastName, " ").concat(commonUser.firstName.substring(0, 1), ".");
        if (commonUser.middleName) {
          addUserDto.nickname += " ".concat(commonUser.middleName.substring(0, 1), ".");
        }
      }
      return addUserDto;
    }
  }, {
    key: "getLocation",
    value: function getLocation(location, roleGroup) {
      var locationInfo = _users.SimilarLocation[location];
      switch (_common.RoleGroup[roleGroup]) {
        case _common.RoleGroup.Parents:
          switch (locationInfo) {
            case _users.SimilarLocation.InSchool:
              return this.language.Generic.Movement.kUserSimilarsInSchool;
            case _users.SimilarLocation.InOtherSchools:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            case _users.SimilarLocation.InOtherSchoolsExcludeUDODs:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            case _users.SimilarLocation.Any:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            default:
              return "";
          }
        case _common.RoleGroup.Students:
          switch (locationInfo) {
            case _users.SimilarLocation.InSchool:
              return this.language.Movement.kSimilarsInSchool;
            case _users.SimilarLocation.InPool:
              return this.language.Movement.kSimilarsInPool;
            case _users.SimilarLocation.InOtherSchools:
              return this.language.Movement.kSimilarsInOtherSchools;
            case _users.SimilarLocation.InOtherSchoolsExcludeUDODs:
              return this.language.Movement.kSimilarsInOtherSchools;
            case _users.SimilarLocation.Any:
              return this.language.Movement.kSimilarsInOtherSchools;
            default:
              return "";
          }
        case _common.RoleGroup.Staffs:
          switch (locationInfo) {
            case _users.SimilarLocation.InSchool:
              return this.language.Generic.Movement.kUserSimilarsInSchool;
            case _users.SimilarLocation.InOtherSchools:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            case _users.SimilarLocation.InOtherSchoolsExcludeUDODs:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            case _users.SimilarLocation.Any:
              return this.language.Generic.Movement.kUserSimilarsInOtherSchools;
            default:
              return "";
          }
      }
    }
  }, {
    key: "GetSimilarsByGroups",
    value: function GetSimilarsByGroups(similars, roleGroup) {
      var _this = this;
      var groupedSimilars = _.chain(similars).filter(function (x) {
        return !x.relatedForUserId || !x.relatedForUserId.length;
      }).groupBy("location").map(function (vals, key) {
        return {
          groupLocation: key,
          title: _this.getLocation(key, roleGroup),
          similarUsers: vals,
          hint: null
        };
      }).value();
      return groupedSimilars;
    }
  }, {
    key: "addBirthDates",
    value: function addBirthDates(similars, resolveData) {
      if ((similars === null || similars === void 0 ? void 0 : similars.length) && resolveData.length) {
        resolveData.forEach(function (x) {
          var similar = similars.find(function (y) {
            return y.requestId == x.personId;
          });
          if (similar === null || similar === void 0 ? void 0 : similar.birthDate) {
            x.birthDate = similar.birthDate;
          }
        });
      }
      ;
    }
  }, {
    key: "chooseSimilars",
    value: function chooseSimilars(_similars, requestData, _roleGroup) {
      _similars.forEach(function (x) {
        if (x.options.options && x.options.options.length == 1 && x.options.options[0] == _users.PersonEnrollmentOption.NewPerson) {
          x.choice = {
            existingUserId: null,
            choice: _users.PersonEnrollmentOption.NewPerson
          };
        }
        if (!x.choice) {
          x.choice = {
            existingUserId: null,
            choice: null
          };
        }
      });
      if (_similars.every(function (x) {
        return x.choice && x.choice.choice;
      })) {
        return Promise.resolve(_similars);
      } else {
        this.addBirthDates(requestData, _similars);
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: _similars2.SimilarsComponent.templateUrl,
        controller: _similars2.SimilarsComponent.controller,
        controllerAs: "$ctrl",
        size: "lg",
        backdrop: false,
        resolve: {
          similars: function similars() {
            return _similars;
          },
          roleGroup: function roleGroup() {
            return _roleGroup;
          }
        }
      });
      try {
        return modalInstance.result;
      } catch (_a) {
        return Promise.reject();
      }
    }
  }]);
  return SimilarsService;
}();
exports.SimilarsService = SimilarsService;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarsController = exports.SimilarsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
var _users = __webpack_require__(388);
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
var SimilarsController = /*#__PURE__*/function (_NetCityModalControll) {
  SimilarsController.$inject = ["$scope", "$dialogs", "$alerts", "language", "$uibModalInstance", "changeTracker", "similars", "similarsService", "roleGroup"];
  _inherits(SimilarsController, _NetCityModalControll);
  var _super = _createSuper(SimilarsController);
  /*@ngInject*/
  function SimilarsController($scope, $dialogs, $alerts, language, $uibModalInstance, changeTracker, similars, similarsService, roleGroup) {
    var _this;
    _classCallCheck(this, SimilarsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModalInstance = $uibModalInstance;
    _this.similars = similars;
    _this.similarsService = similarsService;
    _this.roleGroup = roleGroup;
    _this.header = language.Generic.Movement.kCheckSimilars;
    similars.forEach(function (x) {
      if (x.options.similars && x.options.similars.length) {
        x.options.similarGroups = similarsService.GetSimilarsByGroups(x.options.similars, roleGroup);
      }
      if (x.options.options && x.options.options.length) {
        x.options.options = x.options.options.filter(function (opt) {
          return _users.PersonEnrollmentOption[opt] != _users.PersonEnrollmentOption.ExistingPerson;
        });
      }
    });
    _this.buildButtons();
    return _this;
  }
  _createClass(SimilarsController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this2 = this;
      this.buttons = [{
        title: this.language.Generic.Common.kOk,
        "class": _nsModal.ButtonClass.primary,
        icon: "glyphicon glyphicon-ok-sign",
        action: function action() {
          return _this2.complete();
        },
        isEnabled: function isEnabled() {
          return _this2.similars.every(function (x) {
            var _a;
            return ((_a = x.choice) === null || _a === void 0 ? void 0 : _a.choice) != null;
          });
        }
      }, {
        title: this.language.Generic.Buttons.kCancel,
        icon: "glyphicon glyphicon-ban-circle",
        action: function action() {
          return _this2.cancel();
        }
      }, {
        title: this.language.Generic.Buttons.kPrint,
        action: function action() {
          return _this2.print();
        }
      }];
    }
  }, {
    key: "print",
    value: function print() {
      angular.element(".print-block").printUtils().toPrint();
    }
  }, {
    key: "complete",
    value: function complete() {
      this.$uibModalInstance.close(this.similars);
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return SimilarsController;
}(_netcityModalCtrl.NetCityModalController);
exports.SimilarsController = SimilarsController;
var SimilarsComponent = {
  controller: SimilarsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/users/similars/similars.component.html"
};
exports.SimilarsComponent = SimilarsComponent;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmUser = exports.AddEmUserComponent = void 0;
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _common = __webpack_require__(25);
var _adduser = __webpack_require__(387);
var _users = __webpack_require__(388);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var EmUser = /*#__PURE__*/function (_CommonUser) {
  _inherits(EmUser, _CommonUser);
  var _super = _createSuper(EmUser);
  function EmUser() {
    var _this;
    _classCallCheck(this, EmUser);
    _this = _super.apply(this, arguments);
    _this.emRole = null;
    _this.position = null;
    _this.workPhone = null;
    return _this;
  }
  return _createClass(EmUser);
}(_adduser.CommonUser);
exports.EmUser = EmUser;
var AddEmUserController = /*#__PURE__*/function (_AddUserController) {
  _inherits(AddEmUserController, _AddUserController);
  var _super2 = _createSuper(AddEmUserController);
  function AddEmUserController() {
    var _this2;
    _classCallCheck(this, AddEmUserController);
    _this2 = _super2.apply(this, arguments);
    _this2.ready = false;
    return _this2;
  }
  _createClass(AddEmUserController, [{
    key: "getNewUser",
    value: function getNewUser() {
      var newUser = new EmUser();
      newUser.gender = this.femaleLetter;
      return newUser;
    }
  }, {
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.SetupSchoolUI.kTitleEMUserQAdd;
      this.pageContext.parent = {
        title: this.language.Generic.FilterUsers.kStaffList,
        href: "/"
      };
      this.pageContext.back.href = "/";
      this.pageContext.tabItem = TabItems.tb_EM_Users;
    }
  }, {
    key: "clearUser",
    value: function clearUser(user) {
      user.emRole = null;
      user.email = null;
      user.position = null;
      _get(_getPrototypeOf(AddEmUserController.prototype), "clearUser", this).call(this, user);
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.userInfoRepository.getRoles(false, true).then(function (roles) {
        _this3.emRoles = roles;
        _get(_getPrototypeOf(AddEmUserController.prototype), "load", _this3).call(_this3);
        _this3.ready = true;
      });
    }
  }, {
    key: "isValidData",
    value: function isValidData() {
      return !this.isLoginAlreadyExists() && !this.isFioAlreadyExists() && !this.isSimplePasswordExists() && !this.isPwdSurroundSpacesExists() && this.users.length <= this.maxQAddUsers && this.currentUser.password == this.currentUser.passwordConfirm;
    }
  }, {
    key: "complete",
    value: function complete() {
      this.completeWithParams(_users.UserType.Staff, _common.RoleGroup.EducManagers);
    }
  }, {
    key: "compareCommonUsers",
    value: function compareCommonUsers(user1, user2) {
      return _get(_getPrototypeOf(AddEmUserController.prototype), "compareCommonUsers", this).call(this, user1, user2) && user1.position == user2.position && user1.workPhone == user2.workPhone && (!user1.emRole && !user2.emRole || user1.emRole && user2.emRole && user1.emRole.id == user2.emRole.id);
    }
  }]);
  return AddEmUserController;
}(_adduser.AddUserController);
var AddEmUserComponent = {
  templateUrl: "/static/dist/app/em/users/add/addemuser.component.html",
  controller: AddEmUserController,
  controllerAs: "$ctrl"
};
exports.AddEmUserComponent = AddEmUserComponent;

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tb_EM_Users = exports.tbStudents = exports.tbStaff = exports.tbParents = void 0;
var tbStaff = 5;
exports.tbStaff = tbStaff;
var tbStudents = 6;
exports.tbStudents = tbStudents;
var tbParents = 39;
exports.tbParents = tbParents;
var tb_EM_Users = 404;
exports.tb_EM_Users = tb_EM_Users;

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupRights = exports.Role = exports.Right = exports.MinValidateRule = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Role;
exports.Role = Role;
(function (Role) {
  Role["Admin"] = "Admin";
  Role["Principal"] = "Principal";
  Role["Teacher"] = "Teacher";
  Role["Student"] = "Student";
  Role["Parent"] = "Parent";
  Role["MinorStaff"] = "MinorStaff";
  Role["Secretary"] = "Secretary";
  Role["MedicalStaff"] = "MedicalStaff";
  Role["Psychologist"] = "Psychologist";
  Role["SpecialistStaff"] = "SpecialistStaff";
  Role["EmAdmin"] = "EmAdmin";
  Role["EMHDEM"] = "EMHDEM";
  Role["EmOFREM"] = "EmOFREM";
  Role["EmOper"] = "EmOper";
  Role["EmCoordOD"] = "EmCoordOD";
  Role["EmCoordMer"] = "EmCoordMer";
})(Role || (exports.Role = Role = {}));
var Right;
exports.Right = Right;
(function (Right) {
  Right["arProfileEditSchoolInfo"] = "arProfileEditSchoolInfo";
  Right["arProfileViewSchoolInfo"] = "arProfileViewSchoolInfo";
  Right["arProfileEditRegionalSettings"] = "arProfileEditRegionalSettings";
  Right["arProfileDefineSecurityRoles"] = "arProfileDefineSecurityRoles";
  Right["arEditReferenceBook"] = "arEditReferenceBook";
  Right["arEditSchoolSettings"] = "arEditSchoolSettings";
  // Редактировать все сведения о сотрудниках
  Right["arUsersEditStaff"] = "arUsersEditStaff";
  Right["arUsersEditStaffMedInfo"] = "arUsersEditStaffMedInfo";
  // Редактировать все сведения об учениках и родителях
  Right["arUsersEditStudents"] = "arUsersEditStudents";
  Right["arUsersEditStudentsMedInfo"] = "arUsersEditStudentsMedInfo";
  Right["arUsersEditStudentsPsyInfo"] = "arUsersEditStudentsPsyInfo";
  // Редактировать имена пользователей и пароли сотрудников
  Right["arUsersEditAccountStaff"] = "arUsersEditAccountStaff";
  // Редактировать имена пользователей и пароли учеников и родителей
  Right["arUsersEditAccountStudentsParents"] = "arUsersEditAccountStudentsParents";
  Right["arUsersEditAccountStudentsParentsInClass"] = "arUsersEditAccountStudentsParentsInClass";
  Right["arCreateCloseEditYear"] = "arCreateCloseEditYear";
  Right["arSchoolSubjects"] = "arSchoolSubjects";
  Right["arCreateEditTerm"] = "arCreateEditTerm";
  Right["arEditSchoolTermTypes"] = "arEditSchoolTermTypes";
  Right["arMoveBookView"] = "arMoveBookView";
  Right["arMoveBookEdit"] = "arMoveBookEdit";
  Right["arMovePoolStudents"] = "arMovePoolStudents";
  Right["arMovePoolStaff"] = "arMovePoolStaff";
  Right["arSchoolDocsView"] = "arSchoolDocsView";
  Right["arSchoolDocsEdit"] = "arSchoolDocsEdit";
  Right["arClassMgmViewClassSubjAll"] = "arClassMgmViewClassSubjAll";
  Right["arClassMgmCreateClass"] = "arClassMgmCreateClass";
  Right["arClassMgmEditSubjects"] = "arClassMgmEditSubjects";
  Right["arClassMgmEnrollClass"] = "arClassMgmEnrollClass";
  // Право определять мероприятия в своём классе/группе>
  Right["arClassMgmPostClassEventSelf"] = "arClassMgmPostClassEventSelf";
  // Право определять мероприятия во всех классах/группах
  Right["arClassMgmPostClassEventAll"] = "arClassMgmPostClassEventAll";
  Right["arCurrMgmViewSelf"] = "arCurrMgmViewSelf";
  Right["arCurrMgmViewAll"] = "arCurrMgmViewAll";
  Right["arCurrMgmCreate"] = "arCurrMgmCreate";
  Right["arCurrMgmCreateAll"] = "arCurrMgmCreateAll";
  Right["arAddLA"] = "arAddLA";
  Right["arCalendarViewSelf"] = "arCalendarViewSelf";
  Right["arCalendarViewAll"] = "arCalendarViewAll";
  Right["arCalendarCreateCalendar"] = "arCalendarCreateCalendar";
  // Определять мероприятия ОО, каникулы, праздники
  Right["arPostSchoolEvent"] = "arPostSchoolEvent";
  Right["arViewAwardEvents"] = "arViewAwardEvents";
  Right["arPostAwardEvents"] = "arPostAwardEvents";
  Right["arEditAwardEventMembers"] = "arEditAwardEventMembers";
  Right["arViewSelfAwardEvents"] = "arViewSelfAwardEvents";
  Right["arSelfRegisterForAwardEvents"] = "arSelfRegisterForAwardEvents";
  Right["arEditSelfAwardEventResults"] = "arEditSelfAwardEventResults";
  Right["arJournalViewSelf"] = "arJournalViewSelf";
  Right["arJournalViewAll"] = "arJournalViewAll";
  Right["arJournalEditSelf"] = "arJournalEditSelf";
  Right["arJournalEditAll"] = "arJournalEditAll";
  Right["arJournalEditHAOnlyOnFuture"] = "arJournalEditHAOnlyOnFuture";
  Right["arTotalsViewSelf"] = "arTotalsViewSelf";
  Right["arTotalsViewAll"] = "arTotalsViewAll";
  Right["arTotalsEditSelf"] = "arTotalsEditSelf";
  Right["arTotalsEditAll"] = "arTotalsEditAll";
  // Задавать настройки учебных курсов
  Right["arLASetPolicies"] = "arLASetPolicies";
  // Задавать оценочные шкалы
  Right["arLACreateGradingScales"] = "arLACreateGradingScales";
  // Просматривать материал учебных курсов
  Right["arLAViewMaterials"] = "arLAViewMaterials";
  // Редактировать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAEditSelf"] = "arLAEditSelf";
  // Просматривать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAViewSelf"] = "arLAViewSelf";
  // Просматривать задания и оценки по учебным курсам для всех групп/классов/объединений
  Right["arLAViewAll"] = "arLAViewAll";
  // Просмотр отчетов для своих групп/классов/объединений
  Right["arReportsForAssignedClass"] = "arReportsForAssignedClass";
  // Просматривать отчеты во всех группах/классах/объединениях
  Right["arReportsForAllClasses"] = "arReportsForAllClasses";
  // Просматривать отчеты в своей группе/классе/объединении
  Right["arReportsViewForAssignedClass"] = "arReportsViewForAssignedClass";
  // Просматривать дополнительные отчеты
  Right["arReportsViewAdditionalReports"] = "arReportsViewAdditionalReports";
  // Использовать конструктор отчетов
  Right["arReportsUseReportConstructor"] = "arReportsUseReportConstructor";
  // Просмотр административных отчётов
  Right["arReportsViewAdministrativeReports"] = "arReportsViewAdministrativeReports";
  Right["arAnnouncementView"] = "arAnnouncementView";
  Right["arAnnouncementPost"] = "arAnnouncementPost";
  Right["arMessagesSendReceive"] = "arMessagesSendReceive";
  Right["arForumSendReceive"] = "arForumSendReceive";
  Right["arForumEdit"] = "arForumEdit";
  Right["arAssignmentsViewComplete"] = "arAssignmentsViewComplete";
  Right["arShortInfoStaff"] = "arShortInfoStaff";
  Right["arShortInfoStudents"] = "arShortInfoStudents";
  Right["arEditInfoSelf"] = "arEditInfoSelf";
  Right["arEnrollSelf"] = "arEditInfoSelf";
  Right["arDeleteUsers"] = "arDeleteUsers";
  Right["arEditSchoolResources"] = "arEditSchoolResources";
  Right["arSetPhoto"] = "arSetPhoto";
  Right["arBrowseResultsEGEAllClasses"] = "arBrowseResultsEGEAllClasses";
  Right["arBrowseResultsEGEHisClassesOrSubjects"] = "arBrowseResultsEGEHisClassesOrSubjects";
  Right["arSchoolPublicDocsView"] = "arSchoolPublicDocsView";
  Right["arBrowseStatReports"] = "arBrowseStatReports";
  Right["arFillStatReports"] = "arFillStatReports";
  Right["arBrowseAccessJournal"] = "arBrowseAccessJournal";
  Right["arUserStat"] = "arUserStat";
  /* Индивидуальная поддержка обучающихся */
  Right["arIndividualSupportStudentsReestrView"] = "arIndividualSupportStudentsReestrView";
  Right["arAddIndividualSupportStudents"] = "arAddIndividualSupportStudents";
  Right["arIndividualSupportMeasuresEditAll"] = "arIndividualSupportMeasuresEditAll";
  Right["arIndividualSupportMeasuresEditSelf"] = "arIndividualSupportMeasuresEditSelf";
  // Просматривать отчеты по детям с особыми образовательными потребностями
  Right["arReportsViewSpecialEducNeeds"] = "arReportsViewSpecialEducNeeds";
  Right["arViewHealthMonitoring"] = "arViewHealthMonitoring";
  Right["arEditHealthMonitoring"] = "arEditHealthMonitoring";
  Right["arViewFoodPayOrders"] = "arViewFoodPayOrders";
  Right["arEditFoodPayOrders"] = "arEditFoodPayOrders";
  Right["arEditFoodPayStudentOrdersAll"] = "arEditFoodPayStudentOrdersAll";
  Right["arEditFoodPayStudentOrdersSelf"] = "arEditFoodPayStudentOrdersSelf";
  Right["arEditFoodPayBalanceAll"] = "arEditFoodPayBalanceAll";
  Right["arEditFoodPayBalanceSelf"] = "arEditFoodPayBalanceSelf";
  Right["arPostFoodPayStudentOrders"] = "arPostFoodPayStudentOrders";
  Right["arFoodPayPayment"] = "arFoodPayPayment";
  // #17155. EM rights.
  Right["arEMUsersView"] = "arEMUsersView";
  Right["arEMUsersEdit"] = "arEMUsersEdit";
  Right["arEMEventsView"] = "arEMEventsView";
  Right["arEMEventsEdit"] = "arEMEventsEdit";
  Right["arEMReports"] = "arEMReports";
  Right["arEMPersonDataReports"] = "arEMPersonDataReports";
  Right["arEMAddReportsView"] = "arEMAddReportsView";
  Right["arEMAddReportsEdit"] = "arEMAddReportsEdit";
  Right["arEMMovement"] = "arEMMovement";
  Right["arEMStats"] = "arEMStats";
  Right["arEMEgeView"] = "arEMEgeView";
  Right["arEMEgeImport"] = "arEMEgeImport";
  Right["arEMMsoko"] = "arEMMsoko";
  Right["arEMDouPayNormView"] = "arEMDouPayNormView";
  Right["arEMDouPayNormEdit"] = "arEMDouPayNormEdit";
  Right["arEMCuratorsODView"] = "arEMCuratorsODView";
  Right["arEMCuratorsODEdit"] = "arEMCuratorsODEdit";
  Right["arEMODView"] = "arEMODView";
  Right["arEMODEdit"] = "arEMODEdit";
  Right["arEMEventsMembersView"] = "arEMEventsMembersView";
  Right["arEMEventsMembersEdit"] = "arEMEventsMembersEdit";
})(Right || (exports.Right = Right = {}));
// подгруппа прав
var SubgroupRights = /*#__PURE__*/function () {
  function SubgroupRights(subgroup, rights) {
    _classCallCheck(this, SubgroupRights);
    this.subgroup = subgroup;
    this.rights = rights;
    this.prepare();
  }
  _createClass(SubgroupRights, [{
    key: "prepare",
    value: function prepare() {
      if (this.isList()) {
        this.rights = this.rights.sort(function (a, b) {
          return a.order - b.order;
        });
      }
    }
  }, {
    key: "isList",
    value: function isList() {
      return !!this.subgroup && this.rights.length > 1 || this.rights.length == 1 && this.rights[0].key == Right.arIndividualSupportMeasuresEditSelf;
    }
  }]);
  return SubgroupRights;
}();
exports.SubgroupRights = SubgroupRights;
var MinValidateRule = /*#__PURE__*/function () {
  function MinValidateRule(min, setting, message) {
    _classCallCheck(this, MinValidateRule);
    this.min = min;
    this.setting = setting;
    this.message = message;
  }
  _createClass(MinValidateRule, [{
    key: "validate",
    value: function validate() {
      return this.setting.value >= this.min;
    }
  }]);
  return MinValidateRule;
}();
exports.MinValidateRule = MinValidateRule;

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

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Staff = exports.AddStaffController = exports.AddStaffComponent = void 0;
var _adduser = __webpack_require__(387);
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _common = __webpack_require__(25);
var _users = __webpack_require__(388);
var _securityrights = __webpack_require__(399);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var Staff = /*#__PURE__*/function (_CommonUser) {
  _inherits(Staff, _CommonUser);
  var _super = _createSuper(Staff);
  function Staff() {
    var _this;
    _classCallCheck(this, Staff);
    _this = _super.apply(this, arguments);
    _this.staffRoles = [];
    return _this;
  }
  return _createClass(Staff);
}(_adduser.CommonUser);
exports.Staff = Staff;
var AddStaffController = /*#__PURE__*/function (_AddUserController) {
  _inherits(AddStaffController, _AddUserController);
  var _super2 = _createSuper(AddStaffController);
  function AddStaffController() {
    var _this2;
    _classCallCheck(this, AddStaffController);
    _this2 = _super2.apply(this, arguments);
    _this2.ready = false;
    return _this2;
  }
  _createClass(AddStaffController, [{
    key: "getNewUser",
    value: function getNewUser() {
      var newUser = new Staff();
      newUser.gender = this.femaleLetter;
      if (this.teacherRole) {
        newUser.staffRoles = [this.teacherRole];
      }
      return newUser;
    }
  }, {
    key: "initPage",
    value: function initPage() {
      var _this3 = this;
      this.pageContext.title = "Сведения о новых сотрудниках";
      this.pageContext.parent = {
        title: this.language.Generic.FilterUsers.kStaffList,
        href: "/staff/"
      };
      this.pageContext.back.href = "/staff/";
      this.pageContext.tabItem = TabItems.tbStaff;
      this.pageContext.leaveConfirmFunc = function (leave) {
        if (_this3.users && _this3.users.length) {
          _this3.$dialogs.confirm(_this3.language.Generic.Common.kStaffDataWereChangedContinue).then(function () {
            leave();
          }, function () {});
          return false;
        } else {
          leave();
        }
      };
    }
  }, {
    key: "clearUser",
    value: function clearUser(user) {
      user.staffRoles = [this.teacherRole];
      _get(_getPrototypeOf(AddStaffController.prototype), "clearUser", this).call(this, user);
    }
  }, {
    key: "compareCommonUsers",
    value: function compareCommonUsers(user1, user2) {
      return _get(_getPrototypeOf(AddStaffController.prototype), "compareCommonUsers", this).call(this, user1, user2) && user1.staffRoles.length == user2.staffRoles.length && user1.staffRoles.every(function (u1) {
        return user2.staffRoles.some(function (u2) {
          return u2.id == u1.id;
        });
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      this.userInfoRepository.getRoles(true).then(function (roles) {
        _this4.staffRoles = roles;
        _this4.teacherRole = _this4.staffRoles.find(function (x) {
          return x.key == _securityrights.Role.Teacher;
        });
        _get(_getPrototypeOf(AddStaffController.prototype), "load", _this4).call(_this4);
        _this4.ready = true;
      });
    }
  }, {
    key: "hasStaffRole",
    value: function hasStaffRole(staffRole) {
      var _a, _b;
      return (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.staffRoles) === null || _b === void 0 ? void 0 : _b.find(function (x) {
        return x.id == staffRole.id;
      });
    }
  }, {
    key: "toggleStaffRole",
    value: function toggleStaffRole(staffRole) {
      if (this.hasStaffRole(staffRole)) {
        this.currentUser.staffRoles = this.currentUser.staffRoles.filter(function (x) {
          return x.id != staffRole.id;
        });
      } else {
        this.currentUser.staffRoles.push(staffRole);
      }
    }
  }, {
    key: "isValidData",
    value: function isValidData() {
      var _a;
      return _get(_getPrototypeOf(AddStaffController.prototype), "isValidData", this).call(this) && ((_a = this.currentUser.staffRoles) === null || _a === void 0 ? void 0 : _a.length) > 0 && !this.minorStaffAndOtherChecked();
    }
  }, {
    key: "complete",
    value: function complete() {
      this.completeWithParams(_users.UserType.Staff, _common.RoleGroup.Staffs);
    }
  }, {
    key: "minorStaffAndOtherChecked",
    value: function minorStaffAndOtherChecked() {
      var _a;
      var checkedRoles = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.staffRoles;
      return checkedRoles && checkedRoles.find(function (x) {
        return x.key == _securityrights.Role.MinorStaff;
      }) && checkedRoles.find(function (x) {
        return x.key != _securityrights.Role.MinorStaff;
      });
    }
  }]);
  return AddStaffController;
}(_adduser.AddUserController);
exports.AddStaffController = AddStaffController;
var AddStaffComponent = {
  templateUrl: "/static/dist/app/school/users/staff/add/addstaff.component.html",
  controller: AddStaffController,
  controllerAs: "$ctrl"
};
exports.AddStaffComponent = AddStaffComponent;

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parent = exports.AddParentComponent = void 0;
var _adduser = __webpack_require__(387);
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _users = __webpack_require__(388);
var _common = __webpack_require__(25);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var Parent = /*#__PURE__*/function (_CommonUser) {
  _inherits(Parent, _CommonUser);
  var _super = _createSuper(Parent);
  function Parent() {
    _classCallCheck(this, Parent);
    return _super.apply(this, arguments);
  }
  return _createClass(Parent);
}(_adduser.CommonUser);
exports.Parent = Parent;
var AddParentController = /*#__PURE__*/function (_AddUserController) {
  _inherits(AddParentController, _AddUserController);
  var _super2 = _createSuper(AddParentController);
  function AddParentController() {
    _classCallCheck(this, AddParentController);
    return _super2.apply(this, arguments);
  }
  _createClass(AddParentController, [{
    key: "isValidData",
    value: function isValidData() {
      return !this.isLoginAlreadyExists() && !this.isFioAlreadyExists() && !this.isSimplePasswordExists() && !this.isPwdSurroundSpacesExists() && this.users.length <= this.maxQAddUsers && this.currentUser.password == this.currentUser.passwordConfirm;
    }
  }, {
    key: "getNewUser",
    value: function getNewUser() {
      var newUser = new Parent();
      newUser.gender = this.femaleLetter;
      return newUser;
    }
  }, {
    key: "initPage",
    value: function initPage() {
      var _this = this;
      this.pageContext.title = "Сведения о новых родителях";
      this.pageContext.parent = {
        title: this.language.Generic.FilterUsers.kParentList,
        href: "/parents/"
      };
      this.pageContext.back.href = "/parents/";
      this.pageContext.tabItem = TabItems.tbParents;
      this.pageContext.leaveConfirmFunc = function (leave) {
        if (_this.users && _this.users.length) {
          _this.$dialogs.confirm(_this.language.Generic.Common.kParentsDataWereChangedContinue).then(function () {
            leave();
          }, function () {});
          return false;
        } else {
          leave();
        }
      };
    }
  }, {
    key: "complete",
    value: function complete() {
      this.completeWithParams(_users.UserType.Parent, _common.RoleGroup.Parents);
    }
  }]);
  return AddParentController;
}(_adduser.AddUserController);
var AddParentComponent = {
  templateUrl: "/static/dist/app/school/users/parents/add/addparent.component.html",
  controller: AddParentController,
  controllerAs: "$ctrl"
};
exports.AddParentComponent = AddParentComponent;

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersListQAddComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UsersListQAddController = /*#__PURE__*/function () {
  UsersListQAddController.$inject = ["language", "changeTracker", "$dialogs"];
  /*@ngInject*/
  function UsersListQAddController(language, changeTracker, $dialogs) {
    _classCallCheck(this, UsersListQAddController);
    this.language = language;
    this.changeTracker = changeTracker;
    this.$dialogs = $dialogs;
  }
  _createClass(UsersListQAddController, [{
    key: "$onInit",
    value: function $onInit() {}
  }, {
    key: "selectUser",
    value: function selectUser(user) {
      var _this = this;
      if (this.changeTracker.isDataChanged()) {
        var buttonName = this.mode == "edit" ? this.language.Generic.Buttons.kRefreshAndAdd : this.language.Generic.Buttons.kAdd;
        this.$dialogs.confirm("Рекомендуется нажать кнопку \"" + buttonName + "\",\nиначе сведения о введённых сотрудниках будут потеряны.\nВы хотите продолжить без сохранения?").then(function () {
          _this.changeTracker.clearDataChanges();
          _this.edit({
            arg: user
          });
        }, function () {
          $("select[name='UserList']").val("");
        })["catch"](function () {});
      } else {
        this.edit({
          arg: user
        });
      }
    }
  }]);
  return UsersListQAddController;
}();
var UsersListQAddComponent = {
  templateUrl: "/static/dist/app/school/users/common/add/userslistqadd.component.html",
  controller: UsersListQAddController,
  controllerAs: "$ctrl",
  selector: "userslistQadd",
  bindings: {
    title: '=',
    users: '=',
    edit: '&',
    mode: '='
  }
};
exports.UsersListQAddComponent = UsersListQAddComponent;

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsAddUserComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var NsAddUserController = /*#__PURE__*/_createClass( /*@ngInject*/["language", function NsAddUserController(language) {
  _classCallCheck(this, NsAddUserController);
  this.language = language;
}]);
var NsAddUserComponent = {
  restrict: 'E',
  transclude: true,
  selector: "nsAddUser",
  templateUrl: "/static/dist/app/school/users/common/add/nsadduser.component.html",
  controllerAs: "$ctrl",
  controller: NsAddUserController,
  bindings: {
    controller: "<"
  }
};
exports.NsAddUserComponent = NsAddUserComponent;

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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonUserInfoComponent = void 0;
var _common = __webpack_require__(25);
var _emailValidator = __webpack_require__(407);
var _adduser = __webpack_require__(387);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommonUserInfoController = /*#__PURE__*/function () {
  CommonUserInfoController.$inject = ["language", "appContext", "$dialogs", "$q", "changeTracker", "dateUtils", "settingsProvider"];
  /*@ngInject*/
  function CommonUserInfoController(language, appContext, $dialogs, $q, changeTracker, dateUtils, settingsProvider) {
    var _this = this;
    _classCallCheck(this, CommonUserInfoController);
    this.language = language;
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.$q = $q;
    this.changeTracker = changeTracker;
    this.dateUtils = dateUtils;
    this.settingsProvider = settingsProvider;
    this.readonly = false;
    this.strMinBirthDate = "";
    this.strMaxBirthDate = "";
    this.localeFormat = this.dateUtils.getLocaleFormat();
    this.dateErrorMessage = "";
    this.birthdayNotRequired = false;
    this.addStudents = false;
    this.upFirstLetter = function (str) {
      return str.replace(/((?:(?:^|[.?!])\s*)+)(.)/g, function (m, tail, ch) {
        return tail + ch.toUpperCase();
      });
    };
    this.changeNoMiddleName = function (noMiddleName) {
      if (noMiddleName) {
        _this.currentUser.middleName = "";
      }
    };
    this.emailValidatorCtrl = new _emailValidator.EmailValidatorCtrl();
    this.emailPattern = this.emailValidatorCtrl.getPattern();
  }
  _createClass(CommonUserInfoController, [{
    key: "addMonths",
    value: function addMonths(source, months) {
      var n = source.getDate();
      source.setDate(1);
      source.setMonth(source.getMonth() + months);
      source.setDate(Math.min(n, new Date(source.getFullYear(), source.getMonth() + 1, 0).getDate()));
      return source;
    }
  }, {
    key: "getMinBirthDate",
    value: function getMinBirthDate() {
      var currentDate = new Date();
      if (this.appContext.funcType == _common.FuncType.preSchool && this.addStudents) {
        currentDate = this.addMonths(currentDate, -120);
      } else {
        currentDate = this.addMonths(currentDate, -960);
      }
      return currentDate;
    }
  }, {
    key: "isPreSchool",
    value: function isPreSchool() {
      return this.appContext.funcType === _common.FuncType.preSchool;
    }
  }, {
    key: "isAddSchool",
    value: function isAddSchool() {
      return this.appContext.funcType === _common.FuncType.addSchool;
    }
  }, {
    key: "changeLastName",
    value: function changeLastName() {
      if (this.currentUser.lastName) {
        this.currentUser.lastName = this.upFirstLetter(this.currentUser.lastName);
      }
    }
  }, {
    key: "changeFirstName",
    value: function changeFirstName() {
      if (this.currentUser.firstName) {
        this.currentUser.firstName = this.upFirstLetter(this.currentUser.firstName);
      }
    }
  }, {
    key: "changeMiddleName",
    value: function changeMiddleName() {
      if (this.currentUser.middleName) {
        this.currentUser.middleName = this.upFirstLetter(this.currentUser.middleName);
      }
    }
  }, {
    key: "checkPasswordReliabilityCurrentUser",
    value: function checkPasswordReliabilityCurrentUser() {
      return _adduser.AddUserController.checkPasswordReliability(this.currentUser.login, this.currentUser.password, this.currentUser.lastName, this.currentUser.firstName, this.currentUser.middleName);
    }
  }, {
    key: "checkPasswordSurroundSpacesCurrentUser",
    value: function checkPasswordSurroundSpacesCurrentUser() {
      return _adduser.AddUserController.existsSurroundSpaces(this.currentUser.password);
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      this.minBirthDate = this.getMinBirthDate();
      this.maxBirthDate = new Date();
      var dateNsFormat = this.dateUtils.getDateNsFormat();
      if (dateNsFormat.indexOf("yyyy") < 0 && dateNsFormat.indexOf("yy") >= 0) {
        dateNsFormat = dateNsFormat.replace("yy", "yyyy");
      }
      this.strMinBirthDate = this.dateUtils.date2strf(this.minBirthDate, dateNsFormat);
      this.strMaxBirthDate = this.dateUtils.date2strf(this.maxBirthDate, dateNsFormat);
      this.dateErrorMessage = "".concat(this.language.Generic.Common.kEnterDateInFormat, " ").concat(this.localeFormat, " ").concat(this.language.Generic.Common.kInRange, " ").concat(this.language.Generic.SetupAddSchool.kFrom.toLowerCase(), " ").concat(this.strMinBirthDate, " ").concat(this.language.Generic.SetupAddSchool.kTo.toLowerCase(), " ").concat(this.strMaxBirthDate);
      var loadRegExpAlphabet = this.settingsProvider.LocalSettings.RegExpAlphabet().then(function (alphabet) {
        _this2.regExpAlphabet = alphabet;
      });
      var loadRegExpFio = this.settingsProvider.LocalSettings.RegExpFio().then(function (fio) {
        _this2.regExpFio = fio;
      });
      //todo. проверить boolean
      var loadRestrictNumericPasswords = this.settingsProvider.SecuritySettings.RestrictNumericPasswords().then(function (res) {
        _this2.notDigitsOnly = res;
      });
      var loadMinLoginLength = this.settingsProvider.SecuritySettings.MinLoginLength().then(function (res) {
        _this2.minLoginLength = res;
      });
      var loadMinPasswordLength = this.settingsProvider.SecuritySettings.MinPasswordLength().then(function (res) {
        _this2.minPasswordLength = res;
      });
      this.$q.all([loadRestrictNumericPasswords, loadMinLoginLength, loadMinPasswordLength, loadRegExpAlphabet, loadRegExpFio]).then(function () {
        _this2.loginPattern = new RegExp("^[0-9a-zA-Z".concat(_this2.regExpAlphabet, "\\.\\_\\-]{").concat(_this2.minLoginLength, ",}$")); // разрешены символы '_' '-' '.', цифры, буквы лат. и национальные
        _this2.passwordPattern = _this2.notDigitsOnly ? new RegExp("\\D") : new RegExp(".*");
        _this2.namePattern = _this2.regExpFio == "" ? new RegExp("^[".concat(_this2.regExpAlphabet, "].*$")) : new RegExp(_this2.regExpFio, "i");
        _this2.changeTracker.clearDataChanges();
      });
      var today = new Date();
      var before = new Date();
      before.setFullYear(today.getFullYear() - 80);
      dateInput.initDateInputs(before, today, null, {
        format: this.dateUtils.getDateFormat().format
      });
    }
  }]);
  return CommonUserInfoController;
}();
var CommonUserInfoComponent = {
  templateUrl: "/static/dist/app/school/users/common/add/commonuserinfo.component.html",
  controller: CommonUserInfoController,
  controllerAs: "$ctrl",
  selector: "commonUserInfo",
  bindings: {
    currentUser: '=',
    userInfo: "=",
    maleLetter: "=",
    femaleLetter: "=",
    birthdayNotRequired: "=?",
    addStudents: "<?",
    middleNameNotRequired: "<?"
  }
};
exports.CommonUserInfoComponent = CommonUserInfoComponent;

/***/ }),

/***/ 407:
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

/***/ 44:
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