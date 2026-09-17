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
/******/ 	return __webpack_require__(__webpack_require__.s = 408);
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

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _users = __webpack_require__(18);
var _addparent = __webpack_require__(401);
var _addstaff = __webpack_require__(400);
var _clones = __webpack_require__(410);
var _clonesRegistry = __webpack_require__(411);
var _clones2 = __webpack_require__(416);
var _studentList = __webpack_require__(417);
var _generatePasswords = __webpack_require__(422);
var _parentList = __webpack_require__(424);
var _staffImport = __webpack_require__(425);
var _staffList = __webpack_require__(426);
var _userinfo = __webpack_require__(404);
var _commonuserinfo = __webpack_require__(406);
var _similars = __webpack_require__(395);
var _settings = __webpack_require__(257);
var _similarinfo = __webpack_require__(427);
var _enrollmentoption = __webpack_require__(428);
var _existingsimilar = __webpack_require__(429);
var _similargroup = __webpack_require__(430);
var _nsadduser = __webpack_require__(403);
var _userslistqadd = __webpack_require__(402);
var _exporter = __webpack_require__(431);
var _importer = __webpack_require__(433);
var _importErrors = __webpack_require__(435);
var _staffImport2 = __webpack_require__(436);
var _staffListExporter = __webpack_require__(437);
var _addwstaff = __webpack_require__(438);
var _module = angular.module("irtech.netcity.school.users", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/students/", _studentList.StudentListComponent).when("/parents/", _parentList.ParentListComponent).when("/parents/add", _addparent.AddParentComponent).when("/staff/", _staffList.StaffListComponent).when("/staff/add", _addstaff.AddStaffComponent).when("/staff/wadd", _addwstaff.AddWStaffComponent).when("/staff/import", _staffImport.StaffImportComponent).when("/clones/", _clones2.ClonesComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.service("usersRepository", _users.UsersRepository).service("clonesRepository", _clones.ClonesRepository).service("userInfoRepository", _userinfo.UserInfoRepository).service("generatePasswordService", _generatePasswords.GeneratePasswordService).service("similarsService", _similars.SimilarsService).service("settingsRepository", _settings.SettingsRepository).service("studentsImporter", _importer.StudentsImporter).service("studentListExporter", _exporter.StudentListExporter).service("staffImportService", _staffImport2.StaffImportService).service("staffListExporter", _staffListExporter.StaffListExporter).component("addParentComponent", _addparent.AddParentComponent).component("addStaffComponent", _addstaff.AddStaffComponent).component(_nsadduser.NsAddUserComponent.selector, _nsadduser.NsAddUserComponent).component(_commonuserinfo.CommonUserInfoComponent.selector, _commonuserinfo.CommonUserInfoComponent).component(_clonesRegistry.ClonesRegistryComponent.selector, _clonesRegistry.ClonesRegistryComponent).component(_generatePasswords.GeneratePasswordsComponent.selector, _generatePasswords.GeneratePasswordsComponent).component(_similarinfo.SimilarInfoComponent.selector, _similarinfo.SimilarInfoComponent).component(_enrollmentoption.EnrollmentOptionComponent.selector, _enrollmentoption.EnrollmentOptionComponent).component(_existingsimilar.ExistingSimilarComponent.selector, _existingsimilar.ExistingSimilarComponent).component(_similargroup.SimilarGroupComponent.selector, _similargroup.SimilarGroupComponent).component(_userslistqadd.UsersListQAddComponent.selector, _userslistqadd.UsersListQAddComponent).component(_importErrors.ImportErrorsComponent.selector, _importErrors.ImportErrorsComponent).config(config);

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

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesRepository = void 0;
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

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesRegistryComponent = void 0;
var _common = __webpack_require__(25);
var _common2 = __webpack_require__(44);
var _identityDocuments = __webpack_require__(412);
var _archiveClones = __webpack_require__(413);
var _clonesMerge = __webpack_require__(415);
var _clones2 = __webpack_require__(414);
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

/***/ 412:
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

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArchiveClonesComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
var _clones = __webpack_require__(414);
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

/***/ 414:
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

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClonesMergeComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _common = __webpack_require__(25);
var _formValidationHelper = __webpack_require__(312);
var _settingsProvider = __webpack_require__(308);
var _nsModal = __webpack_require__(41);
var _userinfo = __webpack_require__(405);
var _clones = __webpack_require__(414);
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

/***/ 416:
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
var ClonesController = /*#__PURE__*/_createClass( /*@ngInject*/["$appLoader", "appContext", "pageContext", "language", function ClonesController($appLoader, appContext, pageContext, language) {
  _classCallCheck(this, ClonesController);
  this.$appLoader = $appLoader;
  this.language = language;
  pageContext.back = null;
  pageContext.title = "Дубли пользователей";
  this.settings = {
    schoolId: parseInt(appContext.schoolId),
    activeEnrollmentInSchool: true,
    outOfSystem: appContext.funcType == 3,
    funcType: appContext.funcType
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

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentListComponent = void 0;
var FuncTypes = _interopRequireWildcard(__webpack_require__(418));
var Rights = _interopRequireWildcard(__webpack_require__(10));
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _userlist = __webpack_require__(419);
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
var StudentListController = /*#__PURE__*/function (_UserListController) {
  StudentListController.$inject = ["$scope", "pageContext", "settingsProvider", "appContext", "navigationService", "downloadService", "$location", "taskQueueService", "$dialogs", "language", "$appLoader", "generatePasswordService", "studentListExporter", "studentsImporter"];
  _inherits(StudentListController, _UserListController);
  var _super = _createSuper(StudentListController);
  /*@ngInject*/
  function StudentListController($scope, pageContext, settingsProvider, appContext, navigationService, downloadService, $location, taskQueueService, $dialogs, language, $appLoader, generatePasswordService, studentListExporter, studentsImporter) {
    var _this;
    _classCallCheck(this, StudentListController);
    _this = _super.call(this, $scope, pageContext, settingsProvider, appContext, navigationService, downloadService, $location, taskQueueService, $dialogs, language, $appLoader, generatePasswordService);
    _this.studentListExporter = studentListExporter;
    _this.studentsImporter = studentsImporter;
    return _this;
  }
  _createClass(StudentListController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.pageContext.back = null;
      this.pageContext.title = this.language.FilterUsers.kStudentList;
      this.pageContext.tabItem = TabItems.tbStudents;
      this.pageContext.parent = null;
      var hasRightsToGenerateNewPasswords = this.appContext.hasRights([Rights.arUsersEditStudents, Rights.arUsersEditAccountStudentsParents]);
      this.isLimitAccess = !this.appContext.hasAnyRight([Rights.arUsersEditStudents]);
      this.canGenerateNewPass = this.appContext.funcType != FuncTypes.addSchool && this.appContext.funcType != FuncTypes.preSchool && hasRightsToGenerateNewPasswords;
      var registry = {
        url: "/webapi/users/students/registry",
        filtersUrl: "/webapi/users/students/registry/filter",
        fieldDecorators: {
          "nickname": {
            type: "link",
            action: function action(row) {
              return _this2.editUser(row);
            }
          }
        },
        buttons: [],
        linkButtons: [],
        buttonGroups: []
      };
      var batchUpdateBtnGroup = {
        title: "Пакетное обновление",
        icon: "glyphicon glyphicon-import",
        buttons: [{
          title: "1. Выгрузка данных",
          action: function action() {
            return _this2.batchExportStudents();
          }
        }, {
          title: "2. Обновление данных",
          action: function action() {
            return _this2.batchUpdateStudents();
          },
          hide: this.isLimitAccess
        }]
      };
      var btnAdd = {
        title: this.language.Generic.Buttons.kAdd,
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          _this2.navigationService.navigateTo("/angular/school/movement/movedoc/?docType=Enroll");
        }
      };
      var btnEdit = {
        title: this.language.Generic.Buttons.kEdit,
        icon: "glyphicon glyphicon-pencil",
        action: function action() {
          return _this2.editUsers();
        },
        isHide: function isHide() {
          return _this2.appContext.readOnly || _this2.appContext.funcType == FuncTypes.addSchool || !_this2.appContext.hasAnyRight([Rights.arUsersEditStudents, Rights.arEditInfoSelf]);
        }
      };
      // Расширенный экспорт в Excel
      var btnExportExt = {
        title: this.language.Generic.Buttons.kExport,
        icon: "glyphicon glyphicon-import",
        action: function action() {
          return _this2.batchExportStudents();
        }
      };
      var btnExportMoodle = {
        title: this.language.Generic.Common.kExport_Moodle,
        action: function action() {
          return _this2.exportMoodle();
        }
      };
      if (!this.appContext.readOnly && this.appContext.funcType !== FuncTypes.addSchool && this.appContext.hasRights([Rights.arUsersEditStudents])) {
        registry.linkButtons.push(btnExportMoodle);
      }
      if (!this.appContext.readOnly && this.appContext.hasAnyRight([Rights.arMoveBookEdit])) {
        registry.buttons.push(btnAdd);
        if (this.appContext.funcType !== FuncTypes.addSchool) {
          registry.buttonGroups.push(batchUpdateBtnGroup);
        }
      }
      if (this.appContext.isEmForSchool && (this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arMoveBookEdit]) || this.appContext.funcType === FuncTypes.addSchool)) {
        registry.buttons.push(btnExportExt);
      }
      registry.buttons.push(btnEdit);
      this.registry = angular.extend(this.baseRegistry, registry);
      this.personData.then(function (personData) {
        if (!personData) {
          _this2.registry.fieldDecorators["nickname"] = null;
          btnAdd.hide = true;
          btnEdit.hide = true;
          batchUpdateBtnGroup.hide = true;
          btnExportMoodle.hide = true;
          //btnExport.hide = true;
          btnExportExt.hide = true;
        }
      });
      this.isListOfStudents = true;
    }
  }, {
    key: "editUser",
    value: function editUser(user) {
      this.navigationService.navigateTo("/angular/school/userinfo/students/" + user.id);
    }
  }, {
    key: "editUsers",
    value: function editUsers() {
      this.navigationService.navigateTo("/angular/school/userinfo/students/batch-edit/");
    }
  }, {
    key: "batchExportStudents",
    value: function batchExportStudents() {
      var _a;
      if (!this.controller.canExport()) {
        return;
      }
      var filterContext = {
        selectedData: this.controller.filterInfo.filterPanel.getValue().getCtxValues(),
        params: null
      };
      var searchText = (_a = this.controller.data.search) === null || _a === void 0 ? void 0 : _a.text;
      this.studentListExporter.exportStudents(filterContext, searchText);
    }
  }, {
    key: "batchUpdateStudents",
    value: function batchUpdateStudents() {
      this.studentsImporter.execute();
    }
  }, {
    key: "exportMoodle",
    value: function exportMoodle() {
      var _a;
      if (this.controller.canExport()) {
        var exportParams = {
          filterContext: {
            selectedData: this.controller.filterInfo.filterPanel.getValue().getCtxValues()
          },
          search: (_a = this.controller.data.search) === null || _a === void 0 ? void 0 : _a.text
        };
        this.downloadService.downloadFile("/webapi/users/students/export/moodle", {
          data: exportParams,
          method: "post"
        });
      }
    }
  }]);
  return StudentListController;
}(_userlist.UserListController);
var StudentListComponent = {
  controller: StudentListController,
  controllerAs: "$ctrl",
  template: "<registry info=\"$ctrl.registry\" controller=\"$ctrl.controller\"></registry>"
};
exports.StudentListComponent = StudentListComponent;

/***/ }),

/***/ 418:
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

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserListController = void 0;
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _deferredLoadRes = _interopRequireDefault(__webpack_require__(420));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserListController = /*#__PURE__*/function () {
  UserListController.$inject = ["$scope", "pageContext", "settingsProvider", "appContext", "navigationService", "downloadService", "$location", "taskQueueService", "$dialogs", "language", "$appLoader", "generatePasswordService"];
  /*@ngInject*/
  function UserListController($scope, pageContext, settingsProvider, appContext, navigationService, downloadService, $location, taskQueueService, $dialogs, language, $appLoader, generatePasswordService) {
    var _this = this;
    _classCallCheck(this, UserListController);
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.settingsProvider = settingsProvider;
    this.appContext = appContext;
    this.navigationService = navigationService;
    this.downloadService = downloadService;
    this.$location = $location;
    this.taskQueueService = taskQueueService;
    this.$dialogs = $dialogs;
    this.language = language;
    this.$appLoader = $appLoader;
    this.generatePasswordService = generatePasswordService;
    this.baseRegistry = {
      url: null,
      filtersUrl: null,
      events: {
        filterPanel: {
          ready: function ready() {
            _this.$appLoader.hide();
          },
          emptyChoice: function emptyChoice() {
            _this.$appLoader.hide();
          }
        }
      }
    };
    _deferredLoadRes["default"].loadJsScript("/js/cryptoRSA/BigInt.js", null);
    _deferredLoadRes["default"].loadJsScript("/js/cryptoRSA/Barrett.js", null);
    _deferredLoadRes["default"].loadJsScript("/js/cryptoRSA/RSA.js", null);
    _deferredLoadRes["default"].loadJsScript("/js/cryptoRSA/RSAHelper.js", null);
    this.personData = this.settingsProvider.AppFlags.PersonData();
    this.init();
    this.personData.then(function (personData) {
      _this.showPersonEditWarn = !personData;
      if (!personData) {
        _this.registry.extensions = {
          postButtonsTpl: "/static/dist/app/school/users/common/userExtraPostButtons.html"
        };
      }
    });
    var isAdmin = appContext.hasRole(Roles.admin) || appContext.hasRole(Roles.emAdmin);
    var showCreateNewPasswords = isAdmin && !appContext.readOnly && this.canGenerateNewPass;
    if (showCreateNewPasswords) {
      this.registry.extensions = {
        postButtonsTpl: "/static/dist/app/school/users/common/userExtraPostButtons.html"
      };
      var generatePassBtn = {
        title: language.Generic.Common.kCreateNewPasswords,
        action: function action() {
          return _this.generatePasswordService.open.emit();
        }
      };
      this.registry.buttons.push(generatePassBtn);
      this.personData.then(function (data) {
        return generatePassBtn.hide = !data;
      });
    }
  }
  _createClass(UserListController, [{
    key: "init",
    value: function init() {}
  }]);
  return UserListController;
}();
exports.UserListController = UserListController;

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _resourceLoader = __webpack_require__(421);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var stylesToLoad = ["/static/dist/common/css/ext-styles.min.css"];
var DeferredResLoaderInstance = /*#__PURE__*/function () {
  function DeferredResLoaderInstance() {
    var _this = this;
    _classCallCheck(this, DeferredResLoaderInstance);
    //define resource to load
    this.scriptsToLoad = [];
    this._allScriptLoadedDefer = $.Deferred();
    this._allScriptLoadedPromise = this._allScriptLoadedDefer.promise();
    this._resourceLoader = new _resourceLoader.ResourceLoader(window.getVersionedLink);
    this.scriptsAlreadyLoaded = 0;
    //базовый обработчик загрузки скрипта
    this._baseLoadHandler = function (src) {
      this.scriptsAlreadyLoaded++;
      //console.log "loaded script -- #{src}. #{scriptsAlreadyLoaded}"
      if (this.scriptsAlreadyLoaded === this.scriptsToLoad.length) {
        return this._allScriptLoadedDefer.resolve();
      }
    };
    if (window.addEventListener) {
      window.addEventListener("load", function () {
        return _this.loadHandler();
      }, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", function () {
        return _this.loadHandler();
      });
    } else {
      window.onload = function () {
        return _this.loadHandler();
      };
    }
  }
  //функция возвращающая прокси для внешнего обработчика
  _createClass(DeferredResLoaderInstance, [{
    key: "_proxyLoadHandler",
    value: function _proxyLoadHandler(handler) {
      var _this2 = this;
      return function (src) {
        if (handler) {
          handler(src);
        }
        return _this2._baseLoadHandler(src);
      };
    }
    //attach on window load event - deferred loading resources
  }, {
    key: "loadHandler",
    value: function loadHandler() {
      var _this3 = this;
      var env = typeof appContext !== 'undefined' && appContext !== null ? appContext.environment : undefined;
      var extScriptsFile = env === "dev" || env == "development" ? "/static/dist/common/js/ext-scripts.js" : "/static/dist/common/js/ext-scripts.min.js";
      this.scriptsToLoad.push({
        src: extScriptsFile
      });
      for (var _i = 0, _stylesToLoad = stylesToLoad; _i < _stylesToLoad.length; _i++) {
        var src = _stylesToLoad[_i];
        this._resourceLoader.loadStyleSheet(src);
      }
      var _iterator = _createForOfIteratorHelper(this.scriptsToLoad),
        _step;
      try {
        var _loop = function _loop() {
          var info = _step.value;
          var proxyHandler = _this3._proxyLoadHandler(info.handler);
          _this3._resourceLoader.loadScript(info.src, function (src) {
            return proxyHandler(src);
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "loadExtScripts",
    value: function loadExtScripts() {
      this.loadHandler();
    }
  }, {
    key: "loadScript",
    value: function loadScript(src, onScriptLoadHandler) {
      return this.scriptsToLoad.push({
        src: src,
        handler: onScriptLoadHandler
      });
    }
  }, {
    key: "loadStyle",
    value: function loadStyle(src) {
      return stylesToLoad.push(src);
    }
  }, {
    key: "loadJsScript",
    value: function loadJsScript(src, onScriptLoadHandler) {
      return this._resourceLoader.loadScript(src, onScriptLoadHandler);
    }
  }, {
    key: "ready",
    value: function ready(handler) {
      return this._allScriptLoadedPromise.then(handler);
    }
  }, {
    key: "promise",
    value: function promise() {
      return this._allScriptLoadedPromise;
    }
  }]);
  return DeferredResLoaderInstance;
}();
var deferredResLoader = new DeferredResLoaderInstance();
window.deferredResLoader = deferredResLoader;
var _default = deferredResLoader;
exports["default"] = _default;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVersionedLink = exports.ResourceLoader = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getVersionedLink = function getVersionedLink(link) {
  if (typeof appContext === "undefined") {
    return link;
  }
  return link + "?ver=" + appContext.version;
};
exports.getVersionedLink = getVersionedLink;
var ResourceLoader = /*#__PURE__*/function () {
  function ResourceLoader(versFunc) {
    _classCallCheck(this, ResourceLoader);
    this.head = document.getElementsByTagName("head")[0] || document.documentElement;
    if (!versFunc) {
      this.getVersionedLink = getVersionedLink;
    } else {
      this.getVersionedLink = versFunc;
    }
  }
  //функция загрузки css
  _createClass(ResourceLoader, [{
    key: "loadStyleSheet",
    value: function loadStyleSheet(src) {
      src = this.getVersionedLink(src);
      if (document.createStyleSheet) {
        document.createStyleSheet(src);
      } else {
        $(this.head).append($("<link rel='stylesheet' href='".concat(src, "' type='text/css' media='screen' />")));
      }
    }
  }, {
    key: "loadScript",
    value:
    //функция загрузки скрипта
    function loadScript(src, onLoadHandler) {
      var _this = this;
      var executed = false;
      var loadHandler = function loadHandler(resolve) {
        var script = document.createElement("script");
        var scriptUrl = _this.getVersionedLink(src);
        script.src = scriptUrl;
        script.async = false;
        var afterLoad = function afterLoad() {
          if (onLoadHandler) {
            onLoadHandler(src);
          }
          if (_this.head && script.parentNode) {
            return _this.head.removeChild(script);
          }
        };
        script.onload = function () {
          if (executed) {
            return;
          }
          executed = true;
          afterLoad();
          resolve();
        };
        script.onreadystatechange = function () {
          var self = _this;
          if (_this.readyState === "complete" || _this.readyState === "loaded") {
            return setTimeout(function () {
              return self.onload();
            }, 0);
          }
        };
        _this.head.insertBefore(script, _this.head.firstChild);
      };
      if (typeof Promise === "undefined") {
        //обратная совместимость с IE
        var def = $.Deferred();
        loadHandler(function () {
          return def.resolve();
        });
        return def.promise();
      }
      return new Promise(loadHandler);
    }
  }]);
  return ResourceLoader;
}();
exports.ResourceLoader = ResourceLoader;

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneratePasswordsComponent = exports.GeneratePasswordService = void 0;
var _common = __webpack_require__(44);
var _generateNewPassword = __webpack_require__(423);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GeneratePasswordService = /*#__PURE__*/function () {
  function GeneratePasswordService() {
    _classCallCheck(this, GeneratePasswordService);
    this.open = new _common.EventEmitter();
  }
  _createClass(GeneratePasswordService, [{
    key: "clear",
    value: function clear() {
      this.open = new _common.EventEmitter();
    }
  }]);
  return GeneratePasswordService;
}();
exports.GeneratePasswordService = GeneratePasswordService;
var GeneratePasswordsController = /*#__PURE__*/function () {
  GeneratePasswordsController.$inject = ["language", "generatePasswordService", "settingsProvider", "$scope", "$dialogs"];
  /*@ngInject*/
  function GeneratePasswordsController(language, generatePasswordService, settingsProvider, $scope, $dialogs) {
    var _this = this;
    _classCallCheck(this, GeneratePasswordsController);
    this.language = language;
    this.$scope = $scope;
    this.$dialogs = $dialogs;
    this.minPwdLength = 6;
    generatePasswordService;
    generatePasswordService.open.on(function () {
      _this.open();
    });
    settingsProvider.SecuritySettings.MinPasswordLength().then(function (minLength) {
      _this.minPwdLength = minLength;
    });
  }
  _createClass(GeneratePasswordsController, [{
    key: "selectAll",
    value: function selectAll() {
      if (this.registry.paging.totalRows > this.registry.data.registryData.rows.length) {
        this.$dialogs.message(this.language.Generic.Common.kWarnSelectAllUsers);
      }
      this.registry.selection.dropSelect();
      this.registry.selection.items = this.registry.selection.items.concat(this.registry.data.registryData.rows);
    }
  }, {
    key: "open",
    value: function open() {
      this.opened = true;
      this.registry.state.selectable = true;
      this.registry.state.withMultiSelection = true;
    }
  }, {
    key: "close",
    value: function close() {
      this.opened = false;
      this.registry.selection.dropSelect();
      this.registry.state.withMultiSelection = true;
      this.registry.state.selectable = true;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.close();
    }
  }, {
    key: "generate",
    value: function generate() {
      var _this2 = this;
      var _a, _b;
      var userListCtrl = (_b = (_a = this.registry.$scope) === null || _a === void 0 ? void 0 : _a.$parent) === null || _b === void 0 ? void 0 : _b.$ctrl;
      var onlyDigitsPassw = userListCtrl.isListOfParents || userListCtrl.isListOfStudents;
      var userIds = this.registry.selection.selected.map(function (x) {
        return parseInt(x.id);
      });
      if (userIds.length === 0) {
        this.$dialogs.message(this.language.Generic.Common.kNotSelectedUsers);
        return;
      }
      (0, _generateNewPassword.generatePassword)(userIds, onlyDigitsPassw, this.minPwdLength).then(function () {
        _this2.close();
        _this2.$scope.$applyAsync();
      });
    }
  }]);
  return GeneratePasswordsController;
}();
var GeneratePasswordsComponent = {
  selector: "generatePasswords",
  controller: GeneratePasswordsController,
  controllerAs: "$ctrl",
  require: {
    registry: "^^registry"
  },
  template: "\n\t<div class=\"row\" ng-show=\"$ctrl.opened\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t<p style=\"padding-bottom: 5px;\">\n\t\t\t\t\t<span>{{$ctrl.language.Generic.Common.kSelectUsersAndPushContinue}}</span>\n\t\t\t\t</p>\n\t\t\t\t<button title=\"{{$ctrl.language.Generic.Common.kSelectAll}}\" type=\"button\" class=\"btn btn-sm\" ng-click=\"$ctrl.selectAll()\"><span>{{$ctrl.language.Generic.Common.kSelectAll}}</span></button>\n\t\t\t\t<button title=\"{{$ctrl.language.Generic.Buttons.kContinue}}\" type=\"button\" class=\"btn btn-sm\" ng-click=\"$ctrl.generate()\"><span>{{$ctrl.language.Generic.Buttons.kContinue}}</span></button>\n\t\t\t\t<button title=\"{{$ctrl.language.Generic.Buttons.kCancel}}\" type=\"button\" class=\"btn btn-sm\" ng-click=\"$ctrl.cancel()\"><span>{{$ctrl.language.Generic.Buttons.kCancel}}</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"
};
exports.GeneratePasswordsComponent = GeneratePasswordsComponent;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePassword = void 0;
var mainFunc = {
  personsData: null,
  htmlNewPassportInfo: null,
  printNewPasswordsInfo: null
};
mainFunc.printNewPasswordsInfo = function (html) {
  if (!mainFunc.htmlNewPassportInfo) throw 'не опеределен html для вывода на печать';
  $(mainFunc.htmlNewPassportInfo).printUtils().toPrint();
};
function hasPaging() {
  var res = $('.pagination').length > 0;
  return res;
}

//переключатель для дом элементов которые отвечают за генерацию новых паролей (display=none/display=inline)
var displaySwitcher = {
  isDisplay: false,
  hide: function hide() {
    $('.generateNewPassword').addClass('hide');
    this.isDisplay = false;
  },
  show: function show() {
    $('.generateNewPassword').removeClass('hide');
    this.isDisplay = true;
  },
  action: function action() {
    //если нет ни одной записи в таблице (не нажали кнопку применить)
    if (!$('#UserListTable > tbody > tr > td').length) {
      return;
    }
    if (this.isDisplay === false) {
      this.show();
    }
  }
};

//объект управляет переключением чекбоксов (выбрать всех, не выбрать всех)
var checkboxSwitcher = {
  isCheckedAll: false,
  checkAll: function checkAll() {
    $('input:checkbox.generateNewPassword').prop("checked", true);
    this.isCheckedAll = true;

    //если есть несколько страниц
    if (hasPaging()) {
      alert(language.Generic.Common.kWarnSelectAllUsers);
    }
  },
  uncheckAll: function uncheckAll() {
    $('input:checkbox.generateNewPassword').prop("checked", false);
    this.isCheckedAll = false;
  },
  action: function action() {
    if (this.isCheckedAll === false) {
      this.checkAll();
    } else {
      this.uncheckAll();
    }
  }
};

//объект отправлятель значений на сервер
var ajaxSender = {
  send: function send(url, personIds) {
    var deferr = $.Deferred();
    var tplReady = $.ajax({
      //получить шаблон для модального окна
      url: '/static/dist/app/school/users/common/passwordChangedTemplate.html',
      cache: true
    });
    jsSubmit({
      method: 'POST',
      contentType: "application/json",
      data: personIds,
      action: url,
      showProcessing: true
    }).then(function (response) {
      if (response.length === 0) {
        alert(language.Generic.Common.kPasswordsWereNotChanged);
        deferr.reject();
        return;
      }
      mainFunc.personsData = response;
      return tplReady;
    }).then(function (templModal) {
      //checkboxSwitcher.uncheckAll();
      //displaySwitcher.hide();

      var template = templModal.replace(/(?:\r\n|\r|\n)/g, '');

      //получаю данные для отображении в шаблоне handlebars
      var fullPersonsData = _.map(mainFunc.personsData, function (current) {
        var userWithdecodedPasswArr = _.filter(mainFunc.userPasswordArr, function (o) {
          return o.userId == current.userId;
        });
        var newPassw = "";
        if (userWithdecodedPasswArr.length > 0) {
          newPassw = userWithdecodedPasswArr[0].newPassword;
        }
        return {
          userId: current.userId,
          fullname: current.fullname,
          nickname: current.nickname,
          loginName: current.loginName,
          password: newPassw
        };
      });
      var context = {
        language: language,
        persons: fullPersonsData
      };
      var emptyHtml = Handlebars.compile(template);
      var html = emptyHtml(context);
      mainFunc.htmlNewPassportInfo = html;
      mainFunc.dialog = $.show.dialog({
        title: language.Generic.Common.kGeneratedPasswordInfo,
        message: html,
        size: BootstrapDialog.SIZE_WIDE,
        buttons: [{
          label: language.Generic.Buttons.kPrint,
          action: mainFunc.printNewPasswordsInfo,
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Buttons.kClose,
          action: function action() {
            deferr.resolve();
            mainFunc.dialog.close();
          },
          cssClass: 'btn-primary'
        }]
      });
      return mainFunc.dialog;
    });
    return deferr.promise();
  }
};
var generatePassword = function generatePassword(perosnIds, onlyDigitsPassw, minPwdLength) {
  if (minPwdLength < 7) {
    minPwdLength = 7;
  }
  if (perosnIds.length === 0) {
    alert(language.Generic.Common.kNotSelectedUsers);
    return Promise.resolve();
  }

  // генератор случайных паролей
  var passwordGenerator = {
    randomChars: ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789',
    //'~!@#$%^&*()_-+={}[]\|:;<>?-',
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'],
    getRandomCharFromStr: function getRandomCharFromStr(arr) {
      var length = 8;
      var res = arr.charAt(Math.floor(Math.random() * arr.length));
      return res;
    },
    generateOnePassoword: function generateOnePassoword() {
      var i = 0;
      var resPassw = '';
      var randomCharsLen = this.randomChars.length;
      while (i < minPwdLength) {
        resPassw += this.getRandomCharFromStr(this.randomChars[i % randomCharsLen]);
        i++;
      }
      return resPassw;
    },
    generateOnlyDigitsPassword: function generateOnlyDigitsPassword() {
      var i = 0;
      var resPassw = '';
      while (i < minPwdLength) {
        resPassw += this.getRandomCharFromStr("0123456789");
        i++;
      }
      return resPassw;
    },
    //сгеренировать коллекцию объектов {userid, secretPassword} где secretPassword - сгенерированный зашифрованный пароль
    generateSecretPasswordForSelectedUser: function generateSecretPasswordForSelectedUser(userIds) {
      //сгенерировать коллекцию {userId, newPassword} где newPassword - незашифрованный пароль
      var userPasswArr = this.generatePasswordForSelectedUsers(userIds);

      //создать коллекцию {userId, secretPassword} где secretPassword - зашифрованный пароль
      var userPasswSecretArr = _.map(userPasswArr, function (current) {
        var secretPassw = rsaHelper.encode(current.newPassword);
        return {
          userId: current.userId,
          secretPassword: secretPassw,
          IsRsa: true
        };
      });
      return userPasswSecretArr;
    },
    //создать коллекцию объектов - {userId, newPassword} - где newPassword - сгенерированный незашифрованный пароль
    generatePasswordForSelectedUsers: function generatePasswordForSelectedUsers(userIds) {
      mainFunc.userPasswordArr = [];
      for (var i = 0; i < userIds.length; i++) {
        var userPassw = {};
        userPassw.userId = userIds[i];
        if (onlyDigitsPassw) {
          userPassw.newPassword = this.generateOnlyDigitsPassword();
        } else {
          userPassw.newPassword = this.generateOnePassoword();
        }
        mainFunc.userPasswordArr.push(userPassw);
      }
      return mainFunc.userPasswordArr;
    }
  };
  return $.show.confirmation(language.Generic.Common.kWarnChengePasswords).then(function () {
    var newUserPasswords = passwordGenerator.generateSecretPasswordForSelectedUser(perosnIds);
    return ajaxSender.send('/webapi/users/passwords', newUserPasswords);
  });
};

//подписка событий
exports.generatePassword = generatePassword;
$(document).ready(function () {
  //подписка на событие кнопки применить (фильтр студентов)
  $('#FindByFilter :button').on("click", function () {
    checkboxSwitcher.uncheckAll();
    displaySwitcher.hide();
  });

  //скрыть элементы генерации пароля при клике на пейджинге
  $(document).on("click", ".paging a", function () {
    checkboxSwitcher.uncheckAll();
    displaySwitcher.hide();
  });

  //подписка на событие кнопки поиск по имени
  $(document).on("click", "#FindByFam :button", function () {
    checkboxSwitcher.uncheckAll();
    displaySwitcher.hide();
  });

  //подписка кнопки СформироватьНовыеПароли на событие (отобразить/скрыть элементы в дом дереве для генерации новых паролей)
  $('.btnGenerateNewPassword').on("click", function () {
    displaySwitcher.action();
  });

  //подписка кнопки выбратьВсех на событие клик
  $('.btnCheckAllNewPassword').on("click", function () {
    checkboxSwitcher.action();
  });

  //подписка кнопки отмена на событие клик
  $('.btnCancelNewPassword').on("click", function () {
    checkboxSwitcher.uncheckAll();
    displaySwitcher.hide();
  });

  //подписка кнопки продолжить на событие клик
  $('.btnContinueNewPassword').on("click", function () {
    //получить все id пользователей из чекнутых чекбоксов
    var perosnIds = _.toArray($('input:checkbox:checked.generateNewPassword').map(function () {
      return $(this).attr('data-personId');
    }));
    generatePassword(perosnIds).then(function () {
      checkboxSwitcher.uncheckAll();
      displaySwitcher.hide();
    });
  });
});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentListComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var FuncTypes = _interopRequireWildcard(__webpack_require__(418));
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _userlist = __webpack_require__(419);
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
var ParentListController = /*#__PURE__*/function (_UserListController) {
  _inherits(ParentListController, _UserListController);
  var _super = _createSuper(ParentListController);
  function ParentListController() {
    _classCallCheck(this, ParentListController);
    return _super.apply(this, arguments);
  }
  _createClass(ParentListController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.pageContext.back = null;
      this.pageContext.title = this.language.Generic.FilterUsers.kParentList;
      this.pageContext.parent = null;
      this.pageContext.tabItem = TabItems.tbParents;
      var hasRightsToGenerateNewPasswords = this.appContext.hasRights([Rights.arUsersEditStudents, Rights.arUsersEditAccountStudentsParents]);
      this.canGenerateNewPass = this.appContext.funcType != FuncTypes.addSchool && hasRightsToGenerateNewPasswords;
      var registry = {
        url: "/webapi/users/parents/registry",
        filtersUrl: "/webapi/users/parents/registry/filter",
        fieldDecorators: {
          "nickname": {
            type: "link",
            action: function action(row) {
              return _this.editUser(row);
            }
          }
        },
        buttons: []
      };
      var btnAdd = {
        title: this.language.Generic.Buttons.kAdd,
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          _this.navigationService.navigateTo("/parents/add");
        }
      };
      if (!this.appContext.readOnly) {
        if (this.appContext.hasAnyRight([Rights.arUsersEditStudents])) {
          registry.buttons.push(btnAdd);
        }
      }
      this.registry = angular.extend(this.baseRegistry, registry);
      this.personData.then(function (personData) {
        if (!personData) {
          _this.registry.fieldDecorators["nickname"] = null;
          btnAdd.hide = true;
          //$scope.btnExport.hide = true;
        }
      });

      this.isListOfParents = true;
    }
  }, {
    key: "editUser",
    value: function editUser(user) {
      this.navigationService.navigateTo("/angular/school/userinfo/parents/" + user.id);
    }
  }]);
  return ParentListController;
}(_userlist.UserListController);
var ParentListComponent = {
  controller: ParentListController,
  controllerAs: "$ctrl",
  template: "<registry info=\"$ctrl.registry\" controller=\"$ctrl.controller\"></registry>"
};
exports.ParentListComponent = ParentListComponent;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaffImportComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StaffImportController = /*#__PURE__*/function () {
  function StaffImportController(pageContext, $appLoader, $alerts, $dialogs, $location, usersRepository, $longWork, appContext, language) {
    _classCallCheck(this, StaffImportController);
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$location = $location;
    this.usersRepository = usersRepository;
    this.$longWork = $longWork;
    this.appContext = appContext;
    this.language = language;
    this.selection = new _multiSelectable["default"]();
    pageContext.title = this.language.Generic.Import.kStaffImport;
    pageContext.parent = {
      title: language.Generic.FilterUsers.kStaffList,
      href: "/staff/"
    };
    this.loadFilterPanel();
  }
  _createClass(StaffImportController, [{
    key: "loadFilterPanel",
    value: function loadFilterPanel() {
      var _this = this;
      this.filterPanelSettings = {
        url: "/webapi/users/staff/import/filterpanel",
        events: {
          ready: function ready() {
            _this.load();
          }
        }
      };
    }
  }, {
    key: "doImport",
    value: function doImport() {
      var _this2 = this;
      var usersIds = this.selection.items.map(function (x) {
        return x.userId;
      });
      if (usersIds.length < 1) {
        this.$dialogs.message(this.language.Generic.ServAdmin.kMustSelectStaff);
        return false;
      }
      this.$longWork.execute(this.usersRepository.postReuseUsers(usersIds, parseInt(this.appContext.yearId))).then(function () {
        _this2.$alerts.success("Импорт выполнен успешно");
        _this2.$location.path("/staff/");
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var fpValues = this.filterPanel.getValues();
      this.usersRepository.getStaffsForImport(fpValues.schoolFilter).then(function (staffs) {
        _this3.staffs = staffs;
      });
      this.$appLoader.hide();
    }
  }, {
    key: "isItemChecked",
    value: function isItemChecked(item) {
      return this.isAllSelected && !item.isAdminName;
    }
  }, {
    key: "getItemTitle",
    value: function getItemTitle(item) {
      return item.isAdminName ? this.language.Generic.Import.kImporAdminImpossible : "";
    }
  }, {
    key: "isAllSelected",
    get: function get() {
      var _a;
      return this.selection.items.length == ((_a = this.staffs) === null || _a === void 0 ? void 0 : _a.filter(function (x) {
        return !x.isAdminName;
      }).length);
    }
  }, {
    key: "toggleSelectAll",
    value: function toggleSelectAll() {
      var _this4 = this;
      var allSelected = this.isAllSelected;
      this.selection.dropSelect();
      if (!allSelected) {
        this.staffs.forEach(function (x) {
          if (!x.isAdminName) _this4.selection.select(x);
        });
      }
    }
  }]);
  return StaffImportController;
}();
var StaffImportComponent = {
  controller: StaffImportController,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/users/staff/staffImport.component.html"
};
exports.StaffImportComponent = StaffImportComponent;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaffListComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var TabItems = _interopRequireWildcard(__webpack_require__(398));
var _userlist = __webpack_require__(419);
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
var StaffListController = /*#__PURE__*/function (_UserListController) {
  StaffListController.$inject = ["$scope", "pageContext", "settingsProvider", "appContext", "navigationService", "downloadService", "$location", "taskQueueService", "$dialogs", "language", "$appLoader", "generatePasswordService", "staffImportService", "staffListExporter"];
  _inherits(StaffListController, _UserListController);
  var _super = _createSuper(StaffListController);
  /*@ngInject*/
  function StaffListController($scope, pageContext, settingsProvider, appContext, navigationService, downloadService, $location, taskQueueService, $dialogs, language, $appLoader, generatePasswordService, staffImportService, staffListExporter) {
    var _this;
    _classCallCheck(this, StaffListController);
    _this = _super.call(this, $scope, pageContext, settingsProvider, appContext, navigationService, downloadService, $location, taskQueueService, $dialogs, language, $appLoader, generatePasswordService);
    _this.staffImportService = staffImportService;
    _this.staffListExporter = staffListExporter;
    return _this;
  }
  _createClass(StaffListController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.pageContext.back = null;
      this.pageContext.title = this.language.Generic.FilterUsers.kStaffList;
      this.pageContext.tabItem = TabItems.tbStaff;
      this.pageContext.parent = null;
      var hasRightsToGenerateNewPasswords = this.appContext.hasRights([Rights.arUsersEditAccountStaff, Rights.arUsersEditStaff]);
      this.isLimitAccess = this.appContext.hasAnyRight([Rights.arShortInfoStaff]);
      // Решили, что и для детсадов, и для УДОДов - должна быть эта кнопка
      // this.canGenerateNewPass = //this.appContext.funcType != FuncTypes.addSchool
      // && this.appContext.funcType != FuncTypes.preSchool - #35973
      // && hasRightsToGenerateNewPasswords;
      this.canGenerateNewPass = hasRightsToGenerateNewPasswords;
      var btnExportMoodle = {
        title: this.language.Generic.Common.kExport_Moodle,
        action: function action() {
          return _this2.exportMoodle();
        }
      };
      var addBtn = {
        title: this.language.Generic.Buttons.kAdd,
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          _this2.navigationService.navigateTo("/staff/add");
        }
      };
      var importBtnGroup = {
        title: this.language.Generic.Buttons.kImportExportBtn,
        icon: "glyphicon glyphicon-import",
        buttons: [{
          title: this.language.Generic.Common.kExportExcelExt,
          action: function action() {
            return _this2.exportExt();
          }
        }, {
          title: this.language.Generic.Buttons.kImport,
          action: function action() {
            return _this2["import"]();
          }
        }]
      };
      this.settingsProvider.ServerSettings.UserAuthorizationSettings.ImportStaffFromOtherOrgs().then(function (flag) {
        if (flag) {
          importBtnGroup.buttons.push({
            title: _this2.language.Generic.Buttons.kImport + " из другой ОО",
            action: function action() {
              return _this2.importStaffEasy();
            }
          });
        }
      });
      var registry = {
        url: "/webapi/users/staff/registry",
        filtersUrl: "/webapi/users/staff/registry/filter",
        fieldDecorators: {
          "fio": {
            type: "link",
            action: function action(r) {
              return _this2.editUser(r);
            }
          }
        },
        buttons: [addBtn],
        linkButtons: [btnExportMoodle],
        buttonGroups: [importBtnGroup]
      };
      this.registry = angular.extend(this.baseRegistry, registry);
      this.personData.then(function (personData) {
        if (!personData) {
          _this2.registry.fieldDecorators["fio"] = null;
          addBtn.hide = true;
          btnExportMoodle.hide = true;
          importBtnGroup.hide = true;
        } else {
          if (_this2.appContext.readOnly || !_this2.appContext.hasAnyRight([Rights.arUsersEditStaff])) {
            addBtn.hide = true;
            btnExportMoodle.hide = true;
            importBtnGroup.hide = true;
          }
        }
      });
    }
  }, {
    key: "editUser",
    value: function editUser(user) {
      this.navigationService.navigateTo("/angular/school/userinfo/staff/" + user.id);
    }
  }, {
    key: "importStaffEasy",
    value: function importStaffEasy() {
      this.$location.path("/staff/import");
    }
  }, {
    key: "exportExt",
    value: function exportExt() {
      var _a;
      if (!this.controller.canExport()) {
        return;
      }
      var mapOldFilterValues = this.mapOldFilterValues();
      if (mapOldFilterValues.fa == 1) {
        var filterContext = {
          selectedData: this.controller.filterInfo.filterPanel.getValue().getCtxValues(),
          params: null
        };
        var searchText = (_a = this.controller.data.search) === null || _a === void 0 ? void 0 : _a.text;
        this.staffListExporter.exportStaff(filterContext, searchText);
      }
    }
  }, {
    key: "import",
    value: function _import() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.staffImportService["import"]();
            case 2:
              this.$scope.$applyAsync();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "exportMoodle",
    value: function exportMoodle() {
      var _a;
      if (this.controller.canExport()) {
        var exportParams = {
          filterContext: {
            selectedData: this.controller.filterInfo.filterPanel.getValue().getCtxValues()
          },
          search: (_a = this.controller.data.search) === null || _a === void 0 ? void 0 : _a.text
        };
        this.downloadService.downloadFile("/webapi/users/staff/export/moodle", {
          data: exportParams,
          method: "post"
        });
      }
    }
  }, {
    key: "mapOldFilterValues",
    value: function mapOldFilterValues() {
      var fpVals = this.controller.filterInfo.filterPanel.getValue().getValues();
      var abcFilter = fpVals.AbcFilter;
      //т.к. старая логика на publicusers_inc.asp странице работает так: если первая буква фильтра это " " - то считаем что это латин.  поэтому заменяю латин. на " " ниже
      var firstLetter = $("select[name=AbcFilter_start]").val();
      if (firstLetter == this.language.Generic.FilterUsers.kLatin_) {
        firstLetter = " ";
      }
      return {
        FL: firstLetter,
        LL: $("select[name=AbcFilter_end]").val(),
        GN: fpVals.GenderFilter,
        cp: this.controller.paging.page - 1,
        PageSize: this.controller.paging.pageSize,
        FilterType: this.controller.data.search.text ? 2 : 1,
        SRCH_TEXT: this.controller.data.search.text,
        fa: 1,
        WS: fpVals["work-status"]
      };
    }
  }]);
  return StaffListController;
}(_userlist.UserListController);
var StaffListComponent = {
  controller: StaffListController,
  controllerAs: "$ctrl",
  template: "<registry info=\"$ctrl.registry\" controller=\"$ctrl.controller\"></registry>"
};
exports.StaffListComponent = StaffListComponent;

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarInfoComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SimilarInfoController = /*#__PURE__*/function () {
  SimilarInfoController.$inject = ["language"];
  /*@ngInject*/
  function SimilarInfoController(language) {
    _classCallCheck(this, SimilarInfoController);
    this.language = language;
  }
  _createClass(SimilarInfoController, [{
    key: "$onInit",
    value: function $onInit() {}
  }, {
    key: "isResolved",
    value: function isResolved() {
      var _a, _b, _c, _d, _e, _f;
      return ((_b = (_a = this.similar) === null || _a === void 0 ? void 0 : _a.choice) === null || _b === void 0 ? void 0 : _b.existingUserId) > 0 || ((_d = (_c = this.similar) === null || _c === void 0 ? void 0 : _c.choice) === null || _d === void 0 ? void 0 : _d.choice) != null && ((_f = (_e = this.similar) === null || _e === void 0 ? void 0 : _e.choice) === null || _f === void 0 ? void 0 : _f.choice) != undefined;
    }
  }]);
  return SimilarInfoController;
}();
var SimilarInfoComponent = {
  templateUrl: "/static/dist/app/school/users/similars/similarinfo.component.html",
  controller: SimilarInfoController,
  controllerAs: "$ctrl",
  selector: "similarInfo",
  bindings: {
    similar: '=',
    roleGroup: '='
  }
};
exports.SimilarInfoComponent = SimilarInfoComponent;

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrollmentOptionComponent = void 0;
var _users = __webpack_require__(388);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EnrollmentOptionController = /*#__PURE__*/function () {
  EnrollmentOptionController.$inject = ["language"];
  /*@ngInject*/
  function EnrollmentOptionController(language) {
    _classCallCheck(this, EnrollmentOptionController);
    this.language = language;
  }
  _createClass(EnrollmentOptionController, [{
    key: "$onInit",
    value: function $onInit() {}
  }, {
    key: "setChoice",
    value: function setChoice() {
      this.choice.existingUserId = null;
    }
  }, {
    key: "getSimilarRadioTitle",
    value: function getSimilarRadioTitle() {
      switch (_users.PersonEnrollmentOption[this.option]) {
        case _users.PersonEnrollmentOption.NewPerson:
          return this.language.Generic.Movement.kNewPerson;
        case _users.PersonEnrollmentOption.DuplicatePerson:
          return this.language.Generic.Movement.kDuplicatePerson;
        case _users.PersonEnrollmentOption.IgnorePerson:
          return this.language.Generic.Movement.kIgnorePerson;
        default:
          return "";
      }
    }
  }]);
  return EnrollmentOptionController;
}();
var EnrollmentOptionComponent = {
  templateUrl: "/static/dist/app/school/users/similars/enrollmentoption.component.html",
  controller: EnrollmentOptionController,
  controllerAs: "$ctrl",
  selector: "enrollmentOption",
  bindings: {
    option: '=',
    choice: '=',
    personId: '='
  }
};
exports.EnrollmentOptionComponent = EnrollmentOptionComponent;

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExistingSimilarComponent = void 0;
var _common = __webpack_require__(25);
var _users = __webpack_require__(388);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExistingSimilarController = /*#__PURE__*/function () {
  ExistingSimilarController.$inject = ["language", "$dialogs"];
  /*@ngInject*/
  function ExistingSimilarController(language, $dialogs) {
    _classCallCheck(this, ExistingSimilarController);
    this.language = language;
    this.$dialogs = $dialogs;
  }
  _createClass(ExistingSimilarController, [{
    key: "$onInit",
    value: function $onInit() {}
  }, {
    key: "setChoice",
    value: function setChoice() {
      this.choice.choice = _users.PersonEnrollmentOption.ExistingPerson;
    }
  }, {
    key: "getSimilarTitle",
    value: function getSimilarTitle(similarUser) {
      var _a;
      var similarLocation = _users.SimilarLocation[similarUser.location];
      if (similarLocation == _users.SimilarLocation.InOtherSchools || similarLocation == _users.SimilarLocation.InOtherSchoolsExcludeUDODs || similarLocation == _users.SimilarLocation.Any) {
        if ((_a = similarUser.organization) === null || _a === void 0 ? void 0 : _a.name) {
          return "".concat(similarUser.fullName, " - ").concat(similarUser.organization.name);
        }
        return similarUser.fullName;
      }
      return similarUser.fullName;
    }
  }, {
    key: "getSimilarQuestionHint",
    value: function getSimilarQuestionHint(similarUser) {
      var similarLocation = _users.SimilarLocation[similarUser.location];
      if (this.roleGroup == _common.RoleGroup.Students) {
        if (similarLocation == _users.SimilarLocation.InSchool) {
          return this.language.Movement.kMustTransferToAnotherClass;
        }
        if (similarLocation == _users.SimilarLocation.InPool) {
          return this.language.Generic.Import.kStudentFoundInPool + this.language.Generic.Import.kButPoolDateMoreThenDocDate;
        }
      }
      if (similarLocation == _users.SimilarLocation.InSchool) {
        return "Пользователь уже присутствует в текущей организации";
      }
      return null;
    }
  }, {
    key: "getSimilarInfoHint",
    value: function getSimilarInfoHint(similarUser) {
      var similarLocation = _users.SimilarLocation[similarUser.location];
      return null;
    }
  }]);
  return ExistingSimilarController;
}();
var ExistingSimilarComponent = {
  templateUrl: "/static/dist/app/school/users/similars/existingsimilar.component.html",
  controller: ExistingSimilarController,
  controllerAs: "$ctrl",
  selector: "existingSimilar",
  bindings: {
    similar: '=',
    choice: '=',
    personId: '=',
    roleGroup: '='
  }
};
exports.ExistingSimilarComponent = ExistingSimilarComponent;

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarGroupComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SimilarGroupController = /*#__PURE__*/function () {
  SimilarGroupController.$inject = ["language"];
  /*@ngInject*/
  function SimilarGroupController(language) {
    _classCallCheck(this, SimilarGroupController);
    this.language = language;
  }
  _createClass(SimilarGroupController, [{
    key: "$onInit",
    value: function $onInit() {}
  }]);
  return SimilarGroupController;
}();
var SimilarGroupComponent = {
  templateUrl: "/static/dist/app/school/users/similars/similargroup.component.html",
  controller: SimilarGroupController,
  controllerAs: "$ctrl",
  selector: "similarGroup",
  bindings: {
    group: '=',
    personId: '=',
    choice: '=',
    roleGroup: '='
  }
};
exports.SimilarGroupComponent = SimilarGroupComponent;

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentListExporter = void 0;
var _exporterSettings = __webpack_require__(432);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//ПРИВАТНЫЕ ЧЛЕНЫ
var strNames = {
  all: "all",
  allAttachments: "allAttachments",
  allEnrolled: "allEnrolled",
  male: "male",
  female: "female",
  shortExport: 1,
  fullExport: 2
};
var StudentListExporter = /*#__PURE__*/function () {
  StudentListExporter.$inject = ["downloadService", "taskQueueService", "$uibModal", "usersRepository"];
  /*@ngInject*/
  function StudentListExporter(downloadService, taskQueueService, $uibModal, usersRepository) {
    _classCallCheck(this, StudentListExporter);
    this.downloadService = downloadService;
    this.taskQueueService = taskQueueService;
    this.$uibModal = $uibModal;
    this.usersRepository = usersRepository;
  }
  _createClass(StudentListExporter, [{
    key: "exportStudents",
    value: function exportStudents(filterContext, search) {
      var _this = this;
      this._selectImportTypeDialog = this.$uibModal.open({
        controller: _exporterSettings.ExporterSettingsComponent.controller,
        controllerAs: _exporterSettings.ExporterSettingsComponent.controllerAs,
        templateUrl: _exporterSettings.ExporterSettingsComponent.templateUrl,
        backdrop: "static",
        resolve: {
          callback: function callback() {
            return function () {
              return _this.send(filterContext, search);
            };
          }
        }
      });
    }
  }, {
    key: "send",
    value: function send(filterContext, search) {
      var _this2 = this;
      var studentExportType = this.getStudentExportType();
      var parentExportType = this.getParentExportType();
      //добавлено закрытие, иначе старый диалог перекрывал ангулар.
      //необходимо переписать на ангулар - и после можно убрать скрытие до момента скачивания файла
      if (this._selectImportTypeDialog) {
        this._selectImportTypeDialog.close();
      }
      this.taskQueueService.execute({
        getTaskFunc: function getTaskFunc() {
          return _this2.usersRepository.exportStudents(filterContext, studentExportType, parentExportType, search);
        },
        hint: "Данное информационное окно можно закрыть не дожидаясь выполнения экспорта. Результат будет отправлен Вам на внутреннюю почту.",
        userCloseHandler: function userCloseHandler() {
          if (this._selectImportTypeDialog) {
            this._selectImportTypeDialog.close();
          }
        }
      }).then(function (fileId) {
        _this2.downloadService.downloadFile("/webapi/files/" + fileId);
      }).then(function () {
        if (_this2._selectImportTypeDialog) {
          _this2._selectImportTypeDialog.close();
        }
      });
    }
  }, {
    key: "getStudentExportType",
    value: function getStudentExportType() {
      var isShortStudentInfo = $("#shortStudentInfo").prop("checked");
      if (isShortStudentInfo) {
        return strNames.shortExport;
      } else {
        return strNames.fullExport;
      }
    }
  }, {
    key: "getParentExportType",
    value: function getParentExportType() {
      var isShortParentInfo = $("#shortParentInfo").prop("checked");
      if (isShortParentInfo) {
        return strNames.shortExport;
      } else {
        return strNames.fullExport;
      }
    }
  }]);
  return StudentListExporter;
}();
exports.StudentListExporter = StudentListExporter;

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExporterSettingsComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
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
var ExporterSettingsController = /*#__PURE__*/function (_NetCityModalControll) {
  ExporterSettingsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "callback"];
  _inherits(ExporterSettingsController, _NetCityModalControll);
  var _super = _createSuper(ExporterSettingsController);
  /*@ngInject*/
  function ExporterSettingsController($scope, $uibModalInstance, changeTracker, $dialogs, language, callback) {
    var _this;
    _classCallCheck(this, ExporterSettingsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.callback = callback;
    _this.buttons = [];
    _this.header = 'Выберите параметры экспорта';
    var buttonOk = {
      title: "Начать экспорт",
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-ok-sign",
      action: function action() {
        _this.callback();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(buttonOk);
    _this.buttons.push(cancelButton);
    return _this;
  }
  _createClass(ExporterSettingsController, [{
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return ExporterSettingsController;
}(_netcityModalCtrl.NetCityModalController);
var ExporterSettingsComponent = {
  controller: ExporterSettingsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/users/students/exporter-settings.component.html"
};
exports.ExporterSettingsComponent = ExporterSettingsComponent;

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentsImporter = void 0;
var _importValidation = __webpack_require__(434);
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
var StudentsImporter = /*#__PURE__*/function () {
  StudentsImporter.$inject = ["taskQueueService", "$dialogs", "$uibModal", "usersRepository", "language"];
  /*@ngInject*/
  function StudentsImporter(taskQueueService, $dialogs, $uibModal, usersRepository, language) {
    _classCallCheck(this, StudentsImporter);
    this.taskQueueService = taskQueueService;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.usersRepository = usersRepository;
    this.language = language;
  }
  _createClass(StudentsImporter, [{
    key: "execute",
    value: function execute() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var uploadSettings, uploadFileRes, result, skipWarnings, message;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              uploadSettings = {
                url: "/webapi/users/batch-update/validate",
                fileExts: function fileExts() {
                  return ['xls', 'xlsx'];
                },
                invalidFileExtMsg: this.language.Generic.Curriculum.kInvalidImportFileFormat
              };
              _context.next = 3;
              return this.$dialogs.uploadFile(this.language.Generic.Import.kImportStudents, uploadSettings);
            case 3:
              uploadFileRes = _context.sent;
              result = uploadFileRes.result;
              skipWarnings = false;
              if (!(!result.errorList.isSuccess || ((_b = (_a = result.errorList) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) > 0)) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return this.showValidationErrors(result);
            case 9:
              skipWarnings = _context.sent;
            case 10:
              _context.next = 12;
              return this.start(skipWarnings);
            case 12:
              message = _context.sent;
              this.$dialogs.message(message);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
    //отправить запрос на сервер запускающий задачу в очереди
  }, {
    key: "start",
    value: function start(skipWarnings) {
      var _this = this;
      var taskSettings = {
        getTaskFunc: function getTaskFunc() {
          return _this.usersRepository.importStudentsForUpdate(skipWarnings);
        },
        hint: "Данное информационное окно можно закрыть не дожидаясь выполнения импорта."
      };
      return this.taskQueueService.execute(taskSettings);
    }
  }, {
    key: "showValidationErrors",
    value: function showValidationErrors(parseResult) {
      var errors = parseResult.errorList.errors;
      var errorsWraps = [];
      for (var i = 0; i < errors.length; i++) {
        var errWrap = {
          error: errors[i],
          showEnabledValues: errors[i].enabledValues == null || errors[i].enabledValues.length <= 6,
          showSpoilerButtonEnabledValues: errors[i].enabledValues != null && errors[i].enabledValues.length > 6,
          emptyEnabledValues: errors[i].enabledValues == null
        };
        errorsWraps.push(errWrap);
      }
      ;
      var showColumnEnabledValues = errors.some(function (error) {
        return error.enabledValues != null;
      });
      var _model = {
        errorsWraps: errorsWraps,
        showColumnEnabledValues: showColumnEnabledValues,
        isAllRowsHasCriticalErrors: parseResult.errorList.isAllRowsHasCriticalErrors
      };
      var dialog = this.$uibModal.open({
        controller: _importValidation.ImportValidationComponent.controller,
        controllerAs: _importValidation.ImportValidationComponent.controllerAs,
        templateUrl: _importValidation.ImportValidationComponent.templateUrl,
        backdrop: "static",
        size: "lg",
        resolve: {
          model: function model() {
            return _model;
          }
        }
      });
      return dialog.result;
    }
  }]);
  return StudentsImporter;
}();
exports.StudentsImporter = StudentsImporter;

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportValidationComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
var _importErrors = __webpack_require__(435);
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
var ImportValidationController = /*#__PURE__*/function (_NetCityModalControll) {
  ImportValidationController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "model", "printExportService"];
  _inherits(ImportValidationController, _NetCityModalControll);
  var _super = _createSuper(ImportValidationController);
  /*@ngInject*/
  function ImportValidationController($scope, $uibModalInstance, changeTracker, $dialogs, language, model, printExportService) {
    var _this;
    _classCallCheck(this, ImportValidationController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.model = model;
    _this.printExportService = printExportService;
    _this.buttons = [];
    _this.importTypeOnlyValidStudents = 1;
    _this.importTypeOnlyValidColumns = 2;
    _this.mode = null;
    _this.header = 'Ошибки';
    var buttonOk = {
      title: "Продолжить",
      "class": [_nsModal.ButtonClass.primary, "Import"],
      icon: "glyphicon glyphicon-ok-sign",
      isEnabled: function isEnabled() {
        return _this.mode;
      },
      action: function action() {
        _this["continue"]();
      }
    };
    var printButton = {
      title: language.Generic.Buttons.kPrint,
      action: function action() {
        _this.errorsPrint();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons = [buttonOk, printButton, cancelButton];
    return _this;
  }
  _createClass(ImportValidationController, [{
    key: "continue",
    value: function _continue() {
      //если все строки с какими-то ошибками валидации
      if (this.model.isAllRowsHasCriticalErrors) {
        this.$dialogs.message("Импорт невозможен т.к. все записи содержат КРИТИЧЕСКИЕ ошибки.");
        return;
      }
      //считываем настройку варианта импорта
      var skipWarnings = this.mode == this.importTypeOnlyValidColumns;
      this.$uibModalInstance.close(skipWarnings);
    }
    //печать ошибок
  }, {
    key: "errorsPrint",
    value: function errorsPrint() {
      var modelPrint = angular.copy(this.model);
      modelPrint.showColumnEnabledValues = true;
      modelPrint.errorsWraps.forEach(function (w) {
        w.showEnabledValues = true;
        w.showSpoilerButtonEnabledValues = false;
        w.emptyEnabledValues = w.error.enabledValues == null;
      });
      var printScope = {
        "$ctrl": {
          "model": modelPrint
        }
      };
      this.printExportService.print(_importErrors.ImportErrorsComponent.templateUrl, printScope, true);
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return ImportValidationController;
}(_netcityModalCtrl.NetCityModalController);
var ImportValidationComponent = {
  controller: ImportValidationController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/users/students/import-validation.component.html"
};
exports.ImportValidationComponent = ImportValidationComponent;

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportErrorsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ImportErrorsController = /*#__PURE__*/function () {
  function ImportErrorsController() {
    _classCallCheck(this, ImportErrorsController);
  }
  _createClass(ImportErrorsController, [{
    key: "$onInit",
    value: function $onInit() {
      console.log("ready");
    }
  }]);
  return ImportErrorsController;
}();
var ImportErrorsComponent = {
  selector: "importErrors",
  controller: ImportErrorsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/users/students/import-errors.component.html",
  bindings: {
    model: "<"
  }
};
exports.ImportErrorsComponent = ImportErrorsComponent;

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaffImportService = void 0;
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
var StaffImportService = /*#__PURE__*/function () {
  StaffImportService.$inject = ["$dialogs", "taskQueueService", "language"];
  /*@ngInject*/
  function StaffImportService($dialogs, taskQueueService, language) {
    _classCallCheck(this, StaffImportService);
    this.$dialogs = $dialogs;
    this.taskQueueService = taskQueueService;
    this.language = language;
  }
  _createClass(StaffImportService, [{
    key: "import",
    value: function _import() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var separator, help, appendContent, uploadRes;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              separator = '<div class="form-group"><div class="input-group"><div class="input-group-addon">Разделитель</div><input type="text" class="form-control" name="Separator" size="1" value=";" maxlength="1"></div></div>';
              help = "<a href=\"/asp/SetupSchool/import.asp?RT=1\" target=\"_helpImport\">".concat(this.language.Generic.SetupSchoolUI.kHowToUseImport, "</a>");
              appendContent = separator + help;
              _context.next = 5;
              return this.$dialogs.uploadFile(this.language.Generic.Import.kStaffImport, {
                url: "/webapi/users/staff/import",
                contentHtml: appendContent,
                fileExts: function fileExts() {
                  return ["csv"];
                },
                preUploadCheck: function preUploadCheck() {
                  if (!$('input[name="Separator"]').val()) {
                    _this.$dialogs.message("".concat(_this.language.Generic.SetupSchoolUI.kMsgInpuDelimiter, " (").concat(_this.language.Generic.SetupSchoolUI.kMsgExample, ", ',' ").concat(_this.language.Generic.SetupSchoolUI.kMsgOr, " ';')"));
                    return false;
                  }
                  return true;
                },
                submitData: function submitData() {
                  var separator = $('input[name="Separator"]').val();
                  return {
                    separator: separator
                  };
                }
              });
            case 5:
              uploadRes = _context.sent;
              _context.next = 8;
              return this.taskQueueService.execute({
                getTaskFunc: function getTaskFunc() {
                  return Promise.resolve(uploadRes.result);
                },
                logoutputMode: true,
                closeOnEnd: false
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return StaffImportService;
}();
exports.StaffImportService = StaffImportService;

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaffListExporter = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StaffListExporter = /*#__PURE__*/function () {
  StaffListExporter.$inject = ["downloadService", "taskQueueService", "usersRepository"];
  /*@ngInject*/
  function StaffListExporter(downloadService, taskQueueService, usersRepository) {
    _classCallCheck(this, StaffListExporter);
    this.downloadService = downloadService;
    this.taskQueueService = taskQueueService;
    this.usersRepository = usersRepository;
  }
  _createClass(StaffListExporter, [{
    key: "exportStaff",
    value: function exportStaff(filterContext, search) {
      var _this = this;
      this.taskQueueService.execute({
        getTaskFunc: function getTaskFunc() {
          return _this.usersRepository.exportStaff(filterContext, search);
        },
        hint: "Данное информационное окно можно закрыть не дожидаясь выполнения экспорта. Результат будет отправлен Вам на внутреннюю почту."
      }).then(function (fileId) {
        _this.downloadService.downloadFile("/webapi/files/" + fileId);
      });
    }
  }]);
  return StaffListExporter;
}();
exports.StaffListExporter = StaffListExporter;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddWStaffComponent = void 0;
var _addstaff = __webpack_require__(400);
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
var AddWStaffController = /*#__PURE__*/function (_AddStaffController) {
  _inherits(AddWStaffController, _AddStaffController);
  var _super = _createSuper(AddWStaffController);
  function AddWStaffController() {
    _classCallCheck(this, AddWStaffController);
    return _super.apply(this, arguments);
  }
  _createClass(AddWStaffController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = "Сведения о новых сотрудниках";
      this.pageContext.parent = {
        title: this.language.Generic.FilterUsers.kStaffList,
        href: "/asp/SetupSchool/Wizard/StaffW.asp"
      };
      this.pageContext.back.href = "/asp/SetupSchool/Wizard/StaffW.asp";
    }
  }]);
  return AddWStaffController;
}(_addstaff.AddStaffController);
var AddWStaffComponent = {
  templateUrl: "/static/dist/app/school/users/staff/add/addstaff.component.html",
  controller: AddWStaffController,
  controllerAs: "$ctrl"
};
exports.AddWStaffComponent = AddWStaffComponent;

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