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
/******/ 	return __webpack_require__(__webpack_require__.s = 513);
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusInactive = exports.statusActive = exports.FilterStatus = exports.FilterDependencyResult = exports.DateRange = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FilterStatus;
exports.FilterStatus = FilterStatus;
(function (FilterStatus) {
  FilterStatus["active"] = "active";
  FilterStatus["inactive"] = "inactive";
  FilterStatus["emptyChoice"] = "emptyChoice";
})(FilterStatus || (exports.FilterStatus = FilterStatus = {}));
var statusActive = "active";
exports.statusActive = statusActive;
var statusInactive = "inactive";
exports.statusInactive = statusInactive;
var FilterDependencyResult;
exports.FilterDependencyResult = FilterDependencyResult;
(function (FilterDependencyResult) {
  FilterDependencyResult[FilterDependencyResult["notSatisfy"] = 0] = "notSatisfy";
  FilterDependencyResult[FilterDependencyResult["satisfy"] = 1] = "satisfy";
})(FilterDependencyResult || (exports.FilterDependencyResult = FilterDependencyResult = {}));
//класс описывающий диапазон дат
var DateRange = /*#__PURE__*/function () {
  function DateRange(startDate, endDate) {
    _classCallCheck(this, DateRange);
    this.startDate = startDate;
    this.endDate = endDate;
    this.source = this.toString();
  }
  _createClass(DateRange, [{
    key: "toString",
    value:
    //#представление диапазона в виде строки
    function toString() {
      // #используем штатную сериализацию даты
      // #она приводит дату в utc формат
      // #соответственно в рамках контрола работа с датами проходит с часами: дата (+часовой пояс)
      var ret = "";
      if (this.startDate) ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
      ret += " - ";
      if (this.endDate) ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
      return ret.replace(/"/g, "");
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.startDate <= this.endDate;
    }
  }], [{
    key: "parseDate",
    value: function parseDate(str) {
      var strDate = str.substring(0, 19);
      var date;
      if (strDate.length == 19) {
        date = new Date(strDate);
      } else {
        date = dateUtils.str2date(strDate);
      }
      return date;
    }
  }, {
    key: "parseRange",
    value: function parseRange(str) {
      var rangeArr = str.split(" - ");
      var startDate;
      var endDate;
      if (rangeArr[0]) startDate = DateRange.parseDate(rangeArr[0]);
      if (rangeArr[1]) endDate = DateRange.parseDate(rangeArr[1]);
      var range = new DateRange(startDate, endDate);
      range.source = str;
      return range;
    }
  }]);
  return DateRange;
}();
exports.DateRange = DateRange;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentPayRepository = void 0;
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
var ParentPayRepository = /*#__PURE__*/function (_BaseRepository) {
  ParentPayRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(ParentPayRepository, _BaseRepository);
  var _super = _createSuper(ParentPayRepository);
  /*@ngInject*/
  function ParentPayRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, ParentPayRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    _this.filterpanelUrl = "/webapi/parentpay/filter";
    return _this;
  }
  _createClass(ParentPayRepository, [{
    key: "getMainFilterPanelUrl",
    value: function getMainFilterPanelUrl() {
      var withMonths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var url = "".concat(this.filterpanelUrl, "?withMonths=").concat(withMonths);
      return url;
    }
  }, {
    key: "getStudentLinks",
    value: function getStudentLinks(paymentIds) {
      return this.$http.get("/webapi/school/parentpay/payrecords/getStudentLinks", {
        params: {
          paymentId: paymentIds
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setStudentLink",
    value: function setStudentLink(studentId, paymentIds) {
      return this.$http.post("/webapi/school/parentpay/payrecords/students", paymentIds, {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "clearStudentLink",
    value: function clearStudentLink(paymentId) {
      return this.$http["delete"]("/webapi/school/parentpay/payrecords/students", {
        params: {
          paymentId: paymentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getParamValue",
    value: function getParamValue(userId, paramId) {
      return this.$http.get("/webapi/userinfo/parameter/value", {
        params: {
          userId: userId,
          paramId: paramId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getMonthParentPay",
    value: function getMonthParentPay(classId, year, month) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.get("/webapi/parentpay/", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveMonthParentPay",
    value: function saveMonthParentPay(classId, year, month, data) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.post("/webapi/parentpay/", data, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecree",
    value: function getPayNormDecree(year, month) {
      var params = {
        year: year,
        month: month,
        schoolId: this.appContext.schoolId
      };
      return this.$http.get("/webapi/parentpay/paynormdecree", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAccessMonth",
    value: function getAccessMonth(emId) {
      var params = {
        emId: emId
      };
      return this.$http.get("/webapi/parentpay/accessmonth", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudentParentPayInfo",
    value: function getStudentParentPayInfo(classId, year, month) {
      var params = {
        classId: classId,
        year: year,
        month: month
      };
      return this.$http.get("/webapi/parentpay/students", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getYearClassStudents",
    value: function getYearClassStudents(classId) {
      var params = {
        classId: classId
      };
      return this.$http.get("/webapi/parentpay/year-class-students", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getInitDebts",
    value: function getInitDebts(studentIds) {
      return this.$http.post("/webapi/parentpay/debts", {
        studentId: studentIds
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getClassIdsIdForClassChief",
    value: function getClassIdsIdForClassChief(userId) {
      return this.$http.get("/webapi/parentpay/classIds", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPrevRepresents",
    value: function getPrevRepresents(studentIds, month) {
      var data = {
        studentId: studentIds,
        month: month
      };
      if (studentIds.length < 10) {
        return this.$http.get("/webapi/parentpay/prevrepresents", {
          params: data
        }).then(this.handleResponse)["catch"](this.handleError);
      }
      return this.$http.post("/webapi/parentpay/prevrepresents", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return ParentPayRepository;
}(_baseRepository.BaseRepository);
exports.ParentPayRepository = ParentPayRepository;

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

/***/ 444:
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumericModelDirective = exports.NumericInputDirectiveLink = void 0;
exports.float2str = float2str;
exports.floatToPlan = floatToPlan;
exports.str2float = str2float;
function float2str(val) {
  if (val == null || typeof val == "undefined") {
    return "";
  }
  //if (val % 1 > 0)
  //		val = val.toFixed(2)
  var str = val.toString();
  str = str.replace(",", ".");
  return str;
}
function str2float(sVal) {
  var allowNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (sVal != null && sVal != "") {
    sVal = sVal.replace(",", ".");
    var fVal = parseFloat(sVal);
    // if(!isNaN(fVal)) {
    // 	sVal = fVal.toString();
    // 	var chDecimal = ",";
    // 	if(chDecimal != ".") {
    // 		var pos = sVal.indexOf(".");
    // 		if(pos >= 0)
    // 			sVal = sVal.substring(0,pos) + chDecimal + sVal.substring(pos+1,sVal.length);
    // 	}
    // }
    return fVal;
  } else {
    return allowNull ? null : 0;
  }
}
function floatToPlan(val) {
  if (val === 0) {
    return "";
  } else {
    if (val % 1 > 0) {
      val = parseFloat(val.toFixed(2));
    }
    return float2str(val);
  }
}
;
var NumericInputDirectiveLink = function NumericInputDirectiveLink(scope, element, attr, ngModel) {
  var digits = "1234567890";
  var extraChars = "";
  var withNegatives = scope.options && scope.options.negative;
  var withFractional = scope.options && scope.options.fractional;
  var withAllowNull = scope.options && scope.options.allownull;
  if (withFractional) {
    extraChars += ".,";
  }
  if (withNegatives) {
    extraChars += "-";
  }
  element.on("keypress", function (e) {
    e = e || window.event;
    var key = e.keyCode || e.which || e.charCode;
    if (key in [8, 9, 46])
      // tab, backspace, delete
      return;
    if (key == 13) {
      element.trigger("blur");
      return false;
    }
    var chr = String.fromCharCode(key);
    return digits.indexOf(chr) > -1 || extraChars.indexOf(chr) > -1;
  });
  element.on('input propertychange paste', function (e) {
    if (e && e.originalEvent && e.originalEvent.data == "," && withFractional) {
      return;
    }
    if (this.value == "0") {
      return;
    }
    var clearLeadingZeros = /^0{2,}[0-9]/gi;
    if (this.value.match(clearLeadingZeros)) {
      this.value = this.value.replace(/^0+/gi, '');
    }
  });
  if (attr["min"] || attr["max"]) {
    if (attr["disabled"]) {
      return;
    }
    var min = attr["min"] && parseFloat(attr["min"]) || null;
    var max = attr["max"] && parseFloat(attr["max"]) || null;
    ngModel.$validators.minmax = function (modelValue, viewValue) {
      if (element.prop["disabled"]) {
        return true;
      }
      if (modelValue != null) {
        if (min != null && modelValue < min) {
          return false;
        }
        if (max != null && modelValue > max) {
          return false;
        }
      }
      return true;
    };
  }
  ngModel.$formatters.push(function (raw) {
    return float2str(raw);
  });
  ngModel.$parsers.push(function (raw) {
    if (raw != null && raw.length) {
      var retStr = "";
      for (var index = 0; index < raw.length; index++) {
        var _char = raw[index];
        if (digits.indexOf(_char) !== -1) {
          retStr += _char;
          continue;
        }
        if (withFractional) {
          if (raw.split('.').length - 1 == 1 || raw.split(',').length - 1 == 1) {
            if (',.'.indexOf(_char) !== -1) {
              retStr += _char;
              continue;
            }
          }
        }
        if (withNegatives) {
          if (_char === "-" && index == 0) {
            retStr += _char;
            continue;
          }
        }
      }
      if (retStr != raw) {
        raw = retStr;
        element.val(retStr);
      }
    }
    return str2float(raw, withAllowNull);
  });
};
exports.NumericInputDirectiveLink = NumericInputDirectiveLink;
var NumericModelDirective = function NumericModelDirective() {
  return {
    require: 'ngModel',
    scope: {
      options: "=numericInput"
    },
    link: NumericInputDirectiveLink
  };
};
exports.NumericModelDirective = NumericModelDirective;
NumericModelDirective.selector = "numericInput";

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCenterDecorator = exports.SelectionMode = exports.RegistryController = exports.PreserveWhiteSpaceDecorator = exports.OrderDirection = exports.MapDecorator = exports.LinkFieldDecorator = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _dependencyTracker = __webpack_require__(507);
var _common = __webpack_require__(44);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      scope["action"] = function () {
        _this.linkAction();
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
var RegistryRequest = /*#__PURE__*/_createClass(function RegistryRequest() {
  _classCallCheck(this, RegistryRequest);
});
var RegistryOrderInfo = /*#__PURE__*/_createClass(function RegistryOrderInfo() {
  _classCallCheck(this, RegistryOrderInfo);
});
var RegistrySearchInfo = /*#__PURE__*/_createClass(function RegistrySearchInfo() {
  _classCallCheck(this, RegistrySearchInfo);
});
var OrderDirection;
exports.OrderDirection = OrderDirection;
(function (OrderDirection) {
  OrderDirection["asc"] = "asc";
  OrderDirection["desc"] = "desc";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
var SelectionMode;
exports.SelectionMode = SelectionMode;
(function (SelectionMode) {
  SelectionMode["Empty"] = "Empty";
  SelectionMode["Multiple"] = "Multiple";
  SelectionMode["Single"] = "Single";
})(SelectionMode || (exports.SelectionMode = SelectionMode = {}));
//умолчательные настройки
var defRegistryInfo = {
  url: null,
  filtersUrl: null,
  buttons: null,
  linkButtons: null,
  fieldDecorators: null,
  extensions: {
    postButtonsTpl: null
  },
  compactFilters: true,
  filtersValues: null
};
var initialPageSize = 50;
var scrollable = false;
var RegistryFieldsHelper = /*#__PURE__*/function () {
  function RegistryFieldsHelper(registryCtrl) {
    _classCallCheck(this, RegistryFieldsHelper);
    this.registryCtrl = registryCtrl;
  }
  _createClass(RegistryFieldsHelper, [{
    key: "initAvailableFields",
    value: function initAvailableFields() {
      var fp = this.registryCtrl.filterInfo.filterPanel.getValue();
      var filterValues = fp.getValues();
      var availableFields = this.registryCtrl.data.registry.fields.filter(function (field) {
        if (!field.dependencies) {
          return true;
        }
        return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
      });
      return availableFields;
    }
  }, {
    key: "initDisplayFilters",
    value: function initDisplayFilters() {
      var _this2 = this;
      //инициализация полей реестра
      var fields = this.initAvailableFields();
      if (this.registryCtrl.data.registryData) {
        fields = fields.filter(function (f) {
          return _this2.registryCtrl.data.registryData.fields.indexOf(f.id) > -1;
        });
      }
      if (this.registryCtrl.registry.fieldDecorators) {
        fields.forEach(function (f) {
          return f.decorator = _this2.registryCtrl.registry.fieldDecorators[f.id];
        });
      }
      this.registryCtrl.data.displayFields = _.sortBy(fields, function (f) {
        return f.order;
      });
    }
  }]);
  return RegistryFieldsHelper;
}();
var RegistryController = /*#__PURE__*/function () {
  RegistryController.$inject = ["$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "registry"];
  /*@ngInject*/
  function RegistryController($injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, registry) {
    var _this3 = this;
    _classCallCheck(this, RegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.$http = this.$injector.get("$http");
    this.$window = this.$injector.get("$window");
    this.$document = this.$injector.get("$document");
    this.$location = this.$injector.get("$location");
    this.downloadService = this.$injector.get("downloadService");
    this.$longWork = this.$injector.get("$longWork");
    this.registry = Object.assign({}, defRegistryInfo, registry);
    this.state = {
      dataReady: false,
      loading: false,
      emptyData: false,
      emptyFilter: false,
      selectable: false,
      withMultiSelection: false,
      exporting: false,
      initing: true
    };
    this.filterInfo = {
      filterPanel: new _common.BehaviorSubject(),
      filterPanelSettings: null
    };
    this.fieldsHelper = new RegistryFieldsHelper(this);
    this.selection = new _multiSelectable["default"]();
    this.data = {
      error: null,
      registry: null,
      registryData: null,
      search: {
        fieldId: null,
        fieldTitle: null,
        text: "",
        fields: []
      },
      fields: null,
      displayFields: null
    };
    this.paging = {
      page: 1,
      pageSize: 50,
      currentPageSize: null,
      totalRows: 0
    };
    $scope.$watch(function () {
      return _this3.paging.currentPageSize;
    }, this.watch.bind(this)); // не был виден контекст в методе
    this.init();
  }
  _createClass(RegistryController, [{
    key: "watch",
    value: function watch(newVal, oldVal) {
      if (newVal && (newVal < 1 || newVal > 999)) {
        this.paging.currentPageSize = oldVal;
      }
    }
  }, {
    key: "clickRow",
    value: function clickRow(event, row) {
      var clickOnTag = event.target && event.target.tagName;
      if (clickOnTag === "A") {
        //исключаем нажатие на линках
        return;
      }
      if (!this.state.withMultiSelection) {
        //эмулирование единственности выбора
        if (!this.selection.isSelected(row)) {
          this.selection.dropSelect();
        }
      }
      this.selection.select(row);
    }
    //инициализация кнопок и действий и их правил показа
  }, {
    key: "initCommandButtons",
    value: function initCommandButtons() {
      var _this4 = this;
      var commands = this.data.registry.commands;
      var buttons = this.registry.buttons;
      var checkSelectionMode = function checkSelectionMode(mode, defaultVal) {
        if (mode === SelectionMode.Empty) {
          return _this4.selection.selected.length === 0;
        } else if (mode === SelectionMode.Single) {
          return _this4.selection.selected.length === 1;
        } else if (mode === SelectionMode.Multiple) {
          return _this4.selection.selected.length > 0;
        }
        return defaultVal;
      };
      this.state.withMultiSelection = false;
      if (commands && commands.length) {
        //если есть команды - то возможность выбора есть
        this.state.selectable = true;
        this.state.withMultiSelection = commands.find(function (c) {
          return c.mode == SelectionMode.Multiple;
        }) != null;
        commands.forEach(function (cmd) {
          cmd.isEnabled = function () {
            return checkSelectionMode(cmd.mode, false);
          };
        });
      }
      if (buttons && buttons.length) {
        this.state.selectable = this.state.selectable || buttons.find(function (b) {
          return b.selectionMode !== null;
        }) != null;
        this.state.withMultiSelection = this.state.withMultiSelection || _.findWhere(buttons, {
          selectionMode: SelectionMode.Multiple
        }) != null;
        buttons.forEach(function (btn) {
          btn.isEnabled = function () {
            return checkSelectionMode(btn.selectionMode, true);
          };
          btn.style = btn.style || "btn-default";
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;
      this.state.initing = true;
      this.btnExport = {
        title: this.language.Generic.Common.kBtnExcel,
        action: function action() {
          return _this5["export"]();
        },
        icon: "glyphicon glyphicon-export"
      };
      this.$http.get(this.registry.url)["catch"](function (response) {
        _this5.$appLoader.hide();
        _this5.data.error = response.data && response.data.message || "Ошибка загрузки реестра";
      }).then(function (response) {
        var registry = response.data;
        _this5.data.registry = registry;
        var fpInfo = registry.filterPanel.filterPanel;
        var fpSources = registry.filterPanel.filterSources;
        _this5.initFilterSources(fpSources);
        _this5.initCommandButtons();
        //первичная инициализация полей реестра
        _this5.data.fields = registry.fields.filter(function (f) {
          return f["default"];
        });
        _this5.$appLoader.hide();
        _this5.filterInfo.filterPanelSettings = {
          url: _this5.registry.filtersUrl,
          info: fpInfo,
          sources: fpSources,
          styles: {
            compact: _this5.registry.compactFilters
          },
          events: {
            ready: function ready(vals) {
              _this5.state.emptyFilter = false;
              _this5.setSearchFields();
              _this5.state.initing = false;
              _this5.$scope.$emit("FilterPanelInitialized", _this5.filterInfo.filterPanel.getValue());
              _this5.$scope.$applyAsync();
            },
            emptyChoice: function emptyChoice(emptyFilter) {
              _this5.state.emptyFilter = true;
              _this5.$scope.$applyAsync();
            }
          }
        };
        _this5.loadingState();
      });
    }
  }, {
    key: "initFilterSources",
    value: function initFilterSources(sources) {
      var filtersValues = this.registry.filtersValues;
      if (!filtersValues) {
        return;
      }
      var filterIds = Object.keys(filtersValues);
      filterIds.forEach(function (filterId) {
        var source = sources.find(function (x) {
          return x.filterId === filterId;
        });
        if (!source) {
          return;
        }
        source.defaultValue = filtersValues[filterId].toString();
      });
    }
  }, {
    key: "loadingState",
    value: function loadingState() {
      var _this6 = this;
      this.$http.get(this.registry.url + "/state").then(function (response) {
        var registryState = {
          fields: [],
          search: null,
          order: null,
          paging: {
            page: 1,
            pageSize: initialPageSize,
            currentPageSize: initialPageSize
          }
        };
        var needLoad = _this6.data.registry.autoLoad;
        if (!response || !response.data) {
          _this6.paging = angular.extend(_this6.paging, registryState.paging);
        } else {
          needLoad = true;
          registryState = response.data;
          _this6.paging = angular.extend(_this6.paging, registryState.paging);
          if (!_this6.paging.pageSize) {
            _this6.paging.pageSize = initialPageSize;
          }
          _this6.paging.currentPageSize = _this6.paging.pageSize;
          if (registryState.fields) {
            _this6.data.fields = _this6.data.registry.fields.filter(function (item) {
              return registryState.fields.indexOf(item.id) != -1;
            });
          }
          if (registryState.search && registryState.search.text) {
            var stateSearchField = _this6.data.registry.fields.find(function (x) {
              return x.id === registryState.search.fieldId;
            });
            _this6.data.search.fieldTitle = stateSearchField.title;
            _this6.data.search.fieldId = stateSearchField.id;
            _this6.data.search.text = decodeURIComponent(registryState.search.text);
          }
          if (registryState.order && registryState.order.fieldId) {
            _this6.fieldsHelper.initDisplayFilters();
            var orderFieldId = registryState.order.fieldId.charAt(0).toLowerCase() + registryState.order.fieldId.substring(1);
            var stateOrderField = _this6.data.fields.find(function (f) {
              return f.id == orderFieldId;
            });
            if (stateOrderField == null) {
              throw "Не обнаружено поле c идентификатором " + registryState.order.fieldId;
            }
            _this6.data.displayFields.forEach(function (f) {
              return f.sortOrder = null;
            });
            stateOrderField.sortOrder = registryState.order.ascending ? OrderDirection.asc : OrderDirection.desc;
          }
        }
        if (needLoad) {
          _this6.load();
        }
        _this6.state.initing = false;
        _this6.$appLoader.hide();
      })["catch"](function () {
        _this6.state.initing = false;
        _this6.$appLoader.hide();
        _this6.data.error = "Ошибка загрузки реестра";
      });
    }
  }, {
    key: "setSearchField",
    value: function setSearchField(field) {
      if (this.data.search && this.data.search.fieldId && this.data.search.fieldId === field.id && this.data.search.fieldTitle === field.title) {
        return;
      }
      this.data.search.text = "";
      this.data.search.fieldTitle = field.title;
      this.data.search.fieldId = field.id;
    }
  }, {
    key: "canExport",
    value: function canExport() {
      var _this7 = this;
      var exportWarn = "Экспорт возможен только в случае заполненного фильтра \"Фамилия\"";
      var searchNotByLastname = function searchNotByLastname() {
        var lastNameId = "lastName";
        var searchFilter = _this7.data.search;
        return searchFilter.text && searchFilter.fieldId !== lastNameId;
      };
      if (searchNotByLastname()) {
        alert(exportWarn);
        return false;
      }
      return true;
    }
  }, {
    key: "equalArrays",
    value: function equalArrays(array1, array2) {
      if (!array1 || !array2) {
        return false;
      }
      return !_.chain(array1).difference(array2).union(_.difference(array2, array1)).value().length;
    }
  }, {
    key: "setSearchFields",
    value: function setSearchFields() {
      var _this8 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var availableFieldsArr = _.pluck(availableFields, "id");
      this.data.search.fields = this.data.registry.fields.filter(function (f) {
        return f.search;
      }).filter(function (item) {
        return availableFieldsArr.find(function (availableField) {
          return availableField === item.id;
        }) !== null;
      });
      if (this.data.search.fields.length) {
        var searchField = this.data.search.fields.find(function (f) {
          return f["default"];
        });
        searchField = this.data.search.fields.find(function (f) {
          return f.searchByDefault;
        }) || searchField;
        if (this.data.search && this.data.search.fieldId && _.some(this.data.search.fields, function (fld) {
          return fld.id === _this8.data.search.fieldId;
        }) && this.data.search.fieldId !== searchField.id) {
          return;
        }
        this.setSearchField(searchField);
      }
    }
  }, {
    key: "setSearch",
    value: function setSearch(_field) {
      var _this9 = this;
      var text = "";
      if (this.data.search && this.data.search.fieldId === _field.id) {
        text = this.data.search.text;
      }
      var modalInstance = this.$uibModal.open({
        template: "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u043E\u043B\u044E \"{{$ctrl.field.title}}\"</h4> \n\t\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.search\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary ng-binding\" ng-click=\"$ctrl.set()\">OK</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>",
        controllerAs: "$ctrl",
        controller: /*#__PURE__*/function () {
          function SetRegistryFieldSearchCtrl($uibModalInstance, search, field) {
            _classCallCheck(this, SetRegistryFieldSearchCtrl);
            this.$uibModalInstance = $uibModalInstance;
            this.search = search;
            this.field = field;
          }
          _createClass(SetRegistryFieldSearchCtrl, [{
            key: "cancel",
            value: function cancel() {
              this.$uibModalInstance.dismiss("cancel");
            }
          }, {
            key: "set",
            value: function set() {
              this.$uibModalInstance.close(this.search);
            }
          }]);
          return SetRegistryFieldSearchCtrl;
        }(),
        resolve: {
          search: function search() {
            return text;
          },
          field: function field() {
            return _field;
          }
        }
      });
      modalInstance.result.then(function (search) {
        if (search) {
          _this9.data.search = $.extend(_this9.data.search, {
            fieldId: _field.id,
            fieldTitle: _field.title,
            text: search
          });
        } else {
          _this9.data.search.text = "";
        }
        _this9.load();
      });
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.data.search.text = "";
      this.load();
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(field, newOrder) {
      if (!newOrder) {
        if (!field.sortOrder) {
          newOrder = OrderDirection.asc;
        } else {
          newOrder = field.sortOrder === OrderDirection.asc ? OrderDirection.desc : OrderDirection.asc;
        }
      }
      this.data.displayFields.forEach(function (f) {
        return f.sortOrder = null;
      });
      field.sortOrder = angular.copy(newOrder);
      this.load();
    }
  }, {
    key: "pageChange",
    value: function pageChange() {
      if (this.state.loading) {
        return;
      }
      this.load();
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this10 = this;
      var errorHandle = function errorHandle(message) {
        _this10.data.error = message;
        _this10.state.dataReady = true;
        _this10.state.loading = false;
      };
      //инициализация запрашиваемых полей
      var initRequestField = function initRequestField() {
        var fp = _this10.filterInfo.filterPanel.getValue();
        var filterValues = fp.getValues();
        var chain = _.chain(_this10.data.fields).filter(function (field) {
          if (!field.dependencies) {
            return true;
          }
          return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
        }).pluck("id");
        return chain.value();
      };
      var setLoadingState = function setLoadingState() {
        var body = _this10.$document.find("body");
        scrollable = body.scrollHeight > _this10.$document[0].documentElement.clientHeight;
        _this10.state.dataReady = false;
        _this10.state.loading = true;
        _this10.selection.dropSelect();
        if (scrollable) {
          body.css({
            "padding-right": "17px"
          });
        }
      };
      var unsetLoadingState = function unsetLoadingState() {
        var body = _this10.$document.find("body");
        if (scrollable) {
          body.css({
            "padding-right": ""
          });
        }
        _this10.state.dataReady = true;
        _this10.state.loading = false;
      };
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      setLoadingState();
      if (!this.paging.currentPageSize) {
        this.paging.currentPageSize = initialPageSize;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues()
        },
        fields: initRequestField(),
        page: this.paging.page,
        pageSize: this.paging.currentPageSize,
        search: null,
        order: null
      };
      if (this.data.search.fieldId && this.data.search.text) {
        data.search = {
          fieldId: this.data.search.fieldId,
          text: this.data.search.text
        };
      }
      var orderField;
      if (this.data.displayFields) {
        var _orderField = this.data.displayFields.find(function (f) {
          return typeof f.sortOrder !== "undefined" && f.sortOrder != null;
        });
        if (_orderField) {
          data.order = {
            fieldId: _orderField.id,
            ascending: _orderField.sortOrder === OrderDirection.asc
          };
        }
      }
      this.$http.post(this.registry.url, data).then(function (response) {
        _this10.data.error = null;
        try {
          _this10.data.registryData = response.data;
          _this10.paging.pageSize = _this10.paging.currentPageSize;
          //инициализация пейджинга
          if (_this10.paging.page !== _this10.data.registryData.page) {
            _this10.paging.page = _this10.data.registryData.page;
          }
          _this10.paging.totalRows = _this10.data.registryData.totalItems;
          //инициализация полей реестра
          _this10.fieldsHelper.initDisplayFilters();
          //инициализация сортировки
          var defOrder = _this10.data.registry.defaultOrder;
          if (orderField) {
            var orderFieldInDisplayFields = _this10.data.displayFields.find(function (f) {
              return f.id == orderField.id;
            });
            if (!orderFieldInDisplayFields) {
              _this10.data.displayFields.forEach(function (f) {
                return f.sortOrder = null;
              });
              orderField = null;
            }
          }
          if (!orderField && defOrder) {
            //todo. наверное нужно заменить this.data.registry.fields на this.data.fields
            orderField = _this10.data.registry.fields.find(function (x) {
              return x.id == defOrder.fieldId;
            });
            if (orderField) {
              orderField.sortOrder = defOrder.ascending ? OrderDirection.asc : OrderDirection.desc;
            }
          }
          //установка номеров строк
          _this10.data.registryData.rows.forEach(function (row, ind) {
            return row.rownum = (_this10.paging.page - 1) * _this10.paging.pageSize + ind + 1;
          });
        } catch (ex) {
          errorHandle("Ошибка обработки данных: " + ex.message);
          return;
        }
        unsetLoadingState();
        _this10.state.emptyData = !response.data.rows.length;
      }, function (response) {
        if (response && response.status === 401) {
          _this10.$dialogs.message(_this10.language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return _this10.$window.location.pathname = "/";
          });
          return;
        }
        errorHandle("Ошибка загрузки данных " + (response && response.data ? response.data.message + (response.data.details ? " " + response.data.details : "") : ""));
      });
    }
  }, {
    key: "clearLoad",
    value: function clearLoad() {
      var _this11 = this;
      this.paging.page = 1;
      if (this.data.search.fieldId && this.data.search && this.data.search.fields && this.data.search.fields.length && !this.data.search.fields.find(function (item) {
        return item.id === _this11.data.search.fieldId;
      })) {
        this.data.search.fieldId = this.data.search.fields[0].id;
        this.data.search.text = null;
      }
      ;
      this.load();
    }
    //экспорт данных
  }, {
    key: "export",
    value: function _export() {
      var _this12 = this;
      var getDefaultExportFields = function getDefaultExportFields() {
        var exportFields = _this12.data.displayFields;
        if (exportFields) {
          exportFields = exportFields.filter(function (field) {
            return field["default"];
          });
        }
        return exportFields;
      };
      if (!this.data.displayFields) {
        this.fieldsHelper.initDisplayFilters();
        this.data.displayFields = getDefaultExportFields();
      }
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues()
        },
        fields: _.pluck(this.data.displayFields, "id"),
        search: this.data.search,
        order: null
      };
      var orderField = this.data.displayFields.find(function (f) {
        return typeof f.sortOrder != "undefined" && f.sortOrder != null;
      });
      if (orderField) {
        data.order = {
          fieldId: orderField.id,
          ascending: orderField.sortOrder === OrderDirection.asc
        };
      }
      this.state.exporting = true;
      var wait = this.$dialogs.wait("Операция выполняется");
      this.$http.post(this.registry.url, data, {
        params: {
          "export": true
        }
      }).then(function (response) {
        var fileId = response.data;
        wait.close();
        var isValidTempFileId = /^[0-9a-f]{24}$/i.test(fileId);
        if (!isValidTempFileId) {
          _this12.$alerts.error("Ошибка экспорта данных.", "Неизвестный ответ");
          return;
        }
        _this12.downloadService.downloadFile("/webapi/files/".concat(fileId));
        _this12.state.exporting = false;
      }, function (response) {
        _this12.state.exporting = false;
        _this12.$alerts.error("Ошибка экспорта данных.", response.data && response.data.message);
        wait.close();
      });
    }
  }, {
    key: "execCmd",
    value:
    //выполнение команды реестра
    function execCmd(cmd) {
      var _this13 = this;
      var confirms = [];
      if (cmd.confirm) {
        confirms.push(function () {
          return _this13.$dialogs.confirm(cmd.confirm);
        });
      }
      extDeferred.when(confirms).then(function () {
        var wait = _this13.$dialogs.wait("Операция выполняется");
        var data = {
          itemId: _.pluck(_this13.selection.selected, "id")
        };
        _this13.$http.post("".concat(_this13.registry.url, "/command/").concat(cmd.id), null, {
          params: data
        }).then(function (response) {
          wait.close();
          var result = response.data;
          if (result.success) {
            _this13.$dialogs.message(result.message);
            _this13.load();
          } else {
            _this13.$dialogs.error(result.message);
            if (result.needReload) {
              _this13.load();
            }
          }
        }, function (response) {
          _this13.$dialogs.error(response.data && response.data.message, "Ошибка выполнения команды");
          wait.close();
        });
      });
    }
  }, {
    key: "settings",
    value:
    //настройки
    function settings() {
      var _this14 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var _oneCheckedOnly = function oneCheckedOnly(checked) {
        return checked && _.countBy(chooseFields, function (field) {
          return field.selected ? 'checked' : 'notChecked';
        }).checked === 1;
      };
      var chooseFields = availableFields.map(function (f) {
        return {
          id: f.id,
          title: f.title,
          selected: _this14.data.fields.find(function (x) {
            return x.id == f.id;
          }) ? true : false,
          oneCheckedOnly: function oneCheckedOnly(checked) {
            return _oneCheckedOnly(checked);
          }
        };
      });
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/global/templates/registrySettings.html",
        controller: 'RegistrySettingsCtrl',
        resolve: {
          fields: function fields() {
            return chooseFields;
          }
        }
      });
      modalInstance.result.then(function (fields) {
        var currentFieldsIds = _this14.data.fields.map(function (f) {
          return f.id;
        });
        var choosingFieldsIds = fields.map(function (f) {
          return f.id;
        });
        var selectedFieldsIds = fields.filter(function (f) {
          return f.selected;
        }).map(function (f) {
          return f.id;
        });
        //todo. что тут творится?
        var fieldIds = _.chain(_this14.data.registry.fields).pluck("id").difference(choosingFieldsIds).intersection(currentFieldsIds).union(selectedFieldsIds).value();
        var notSelectedFields = _this14.data.fields.filter(function (f) {
          return fieldIds.indexOf(f.id) == -1;
        });
        notSelectedFields.forEach(function (f) {
          return f.sortOrder = null;
        });
        _this14.data.fields = _this14.data.registry.fields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this14.data.displayFields = _this14.data.displayFields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this14.load();
      });
    }
  }]);
  return RegistryController;
}();
exports.RegistryController = RegistryController;
angular.module("irtech.netcity.common").controller("RegistryCommonCtrl", RegistryController).controller("SetRegistryFieldSearchCtrl", function ($scope, $uibModalInstance, search, field) {
  $.extend($scope, {
    search: search,
    field: field
  });
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $scope.set = function () {
    $uibModalInstance.close($scope.search);
  };
}).controller("RegistrySettingsCtrl", function ($scope, $uibModalInstance, fields) {
  $scope.fields = fields;
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $scope.set = function () {
    $uibModalInstance.close($scope.fields);
  };
});

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependencyTracker = void 0;
var _filterpanel = __webpack_require__(237);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DependencyTracker = /*#__PURE__*/function () {
  function DependencyTracker(dependencies) {
    _classCallCheck(this, DependencyTracker);
    this.dependencies = dependencies;
  }
  _createClass(DependencyTracker, [{
    key: "isSatisfied",
    value: function isSatisfied(vals) {
      var _this = this;
      var unSatisfiedDep = this.dependencies.find(function (dep) {
        return !_this.checkDependency(vals, dep);
      });
      return unSatisfiedDep == null;
    }
  }, {
    key: "checkDependency",
    value: function checkDependency(vals, dep) {
      var relObject = dep.relatedObject;
      if (relObject.type === "Param") {
        return true;
      }
      if (relObject.type !== "Filter") {
        throw "Неизвестный тип зависимости для фильтра";
      }
      var relFilterValue = vals[relObject.ref];
      if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
        //return false;
        return dep.relatedObjectNotFoundResult == _filterpanel.FilterDependencyResult.satisfy;
      }
      switch (dep.condition) {
        case "Equals":
          return relFilterValue === dep.relatedValue;
        case "Greater":
          return relFilterValue > dep.relatedValue;
        case "Less":
          return relFilterValue < dep.relatedValue;
        case "NotEquals":
          return relFilterValue !== dep.relatedValue;
        case "Any":
          return true;
        case "NotContains":
          return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) < 0;
        case "Contains":
          return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) >= 0;
        case "In":
          var arrValue = JSON.parse(dep.relatedValue);
          if (!Array.isArray(arrValue)) {
            return false;
          }
          return _.some(arrValue, function (v) {
            return v === relFilterValue;
          });
        default:
          return false;
      }
    }
  }]);
  return DependencyTracker;
}();
exports.DependencyTracker = DependencyTracker;

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(514);


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _parentpay = __webpack_require__(242);
var _schoolParentPay = __webpack_require__(515);
var _editparentpay = __webpack_require__(521);
var _floatinput = __webpack_require__(502);
var _parentpayAttendance = __webpack_require__(522);
var _users = __webpack_require__(18);
var _parentpay2 = __webpack_require__(523);
var _module = angular.module("irtech.netcity.school.parentpay", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
_module.service("parentPayRepository", _parentpay.ParentPayRepository).service("usersRepository", _users.UsersRepository).directive("numericInput", _floatinput.NumericModelDirective).directive(_parentpayAttendance.AttendanceListInputDirective.selector, _parentpayAttendance.AttendanceListInputDirective).component(_parentpayAttendance.ParentPayAttendanceComponent.selector, _parentpayAttendance.ParentPayAttendanceComponent).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/edit/", _editparentpay.EditParentPayComponent).when("/view/", _parentpay2.ParentPayComponent).when("/payrecords/registry/", _schoolParentPay.SchoolParentPayRegistryComponent).otherwise(_schoolParentPay.SchoolParentPayRegistryComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolParentpayRegistryController = exports.SchoolParentPayRegistryComponent = void 0;
var _registry = __webpack_require__(373);
var _parentpayRegistry = __webpack_require__(516);
var _setStudentLink = __webpack_require__(519);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SchoolParentpayRegistryController = /*#__PURE__*/function () {
  SchoolParentpayRegistryController.$inject = ["pageContext", "$dialogs", "$uibModal", "$alerts", "language", "parentPayRepository"];
  /*@ngInject*/
  function SchoolParentpayRegistryController(pageContext, $dialogs, $uibModal, $alerts, language, parentPayRepository) {
    var _this = this;
    _classCallCheck(this, SchoolParentpayRegistryController);
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.parentPayRepository = parentPayRepository;
    pageContext.title = language.Generic.MenuFolders.kParentPayPayments;
    pageContext.parent = null;
    var setStudentLinkButton = {
      title: "Указать воспитанника",
      icon: "glyphicon glyphicon-link",
      selectionMode: _registry.SelectionMode.Multiple,
      action: function action() {
        _this.setStudentLink();
      }
    };
    var clearStudentLinkButton = {
      title: "Удалить привязку",
      icon: "glyphicon glyphicon-remove",
      selectionMode: _registry.SelectionMode.Single,
      action: function action() {
        _this.clearStudentLink();
      }
    };
    this.registryInfo = {
      url: "/webapi/school/parentpay/payrecords/registry",
      filtersUrl: "/webapi/school/parentpay/payrecords/registry/filter",
      linkButtons: [],
      fieldDecorators: {
        pay: new _parentpayRegistry.CurrencyDecorator()
      },
      buttons: [setStudentLinkButton, clearStudentLinkButton]
    };
  }
  _createClass(SchoolParentpayRegistryController, [{
    key: "setStudentLink",
    value: function setStudentLink() {
      var _this2 = this;
      var selected = this.controller.selection.selected;
      var modalInstance = this.$uibModal.open({
        templateUrl: _setStudentLink.SetStudentLinkComponent.templateUrl,
        controller: _setStudentLink.SetStudentLinkComponent.controller,
        controllerAs: "$ctrl",
        size: "lg",
        resolve: {
          payments: function payments() {
            return selected;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.controller.load();
      });
    }
  }, {
    key: "isHighlighted",
    value: function isHighlighted(row) {
      return !row.childFio;
    }
  }, {
    key: "clearStudentLink",
    value: function clearStudentLink() {
      var _this3 = this;
      var selected = this.controller.selection.selected;
      this.$dialogs.confirm("Удалить привязку воспитанника?").then(function () {
        _this3.parentPayRepository.clearStudentLink(selected[0].id).then(function () {
          _this3.$alerts.success(_this3.language.Generic.Common.kDataSaved);
          _this3.controller.load();
        });
      });
    }
  }]);
  return SchoolParentpayRegistryController;
}();
exports.SchoolParentpayRegistryController = SchoolParentpayRegistryController;
var SchoolParentPayRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: SchoolParentpayRegistryController,
  controllerAs: "$ctrl"
};
exports.SchoolParentPayRegistryComponent = SchoolParentPayRegistryComponent;

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentpayRegistryController = exports.ParentPayRegistryComponent = exports.CurrencyDecorator = void 0;
var _registryAsCtrl = __webpack_require__(506);
var _setSchoolLink = __webpack_require__(517);
var _founders = __webpack_require__(518);
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
var ParentpayRegistryController = /*#__PURE__*/function (_RegistryController) {
  ParentpayRegistryController.$inject = ["pageContext", "$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "appContext", "parentPayRepository", "taskQueueService"];
  _inherits(ParentpayRegistryController, _RegistryController);
  var _super = _createSuper(ParentpayRegistryController);
  /*@ngInject*/
  function ParentpayRegistryController(pageContext, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, appContext, parentPayRepository, taskQueueService) {
    var _this;
    _classCallCheck(this, ParentpayRegistryController);
    pageContext.title = language.Generic.MenuFolders.kParentPayPayments;
    pageContext.parent = null;
    var importButton = {
      title: language.Generic.Buttons.kImport,
      action: function action() {
        return _this["import"]();
      },
      icon: "glyphicon glyphicon-import"
    };
    var setSchoolLinkButton = {
      title: "Указать ОО",
      icon: "glyphicon glyphicon-link",
      selectionMode: _registryAsCtrl.SelectionMode.Multiple,
      action: function action() {
        _this.setSchoolLink();
      }
    };
    var clearSchoolLinkButton = {
      title: "Удалить привязку ОО",
      icon: "glyphicon glyphicon-remove",
      selectionMode: _registryAsCtrl.SelectionMode.Single,
      action: function action() {
        _this.clearSchoolLink();
      }
    };
    var registry = {
      url: "/webapi/em/parentpay/payrecords/registry",
      filtersUrl: "/webapi/em/parentpay/payrecords/registry/filter",
      linkButtons: appContext.isTopEm && appContext.authorityType == _founders.AuthorityType.Educations ? [importButton] : [],
      fieldDecorators: {
        pay: new CurrencyDecorator()
      },
      buttons: [setSchoolLinkButton, clearSchoolLinkButton],
      extensions: null,
      compactFilters: true
    };
    _this = _super.call(this, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, registry);
    _this.parentPayRepository = parentPayRepository;
    _this.taskQueueService = taskQueueService;
    return _this;
  }
  _createClass(ParentpayRegistryController, [{
    key: "clearSchoolLink",
    value: function clearSchoolLink() {
      var _this2 = this;
      var selected = this.selection.selected;
      this.$dialogs.confirm("Удалить привязку ОО?").then(function () {
        _this2.parentPayRepository.clearSchoolLink(selected[0].id).then(function () {
          _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
          _this2.load();
        });
      });
    }
  }, {
    key: "setSchoolLink",
    value: function setSchoolLink() {
      var _this3 = this;
      var selected = this.selection.selected;
      var modalInstance = this.$uibModal.open({
        templateUrl: _setSchoolLink.SetSchoolLinkComponent.templateUrl,
        controller: _setSchoolLink.SetSchoolLinkComponent.controller,
        controllerAs: "$ctrl",
        size: "lg",
        resolve: {
          payments: function payments() {
            return selected;
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.load();
      });
    }
  }, {
    key: "import",
    value: function _import() {
      var _this4 = this;
      var options = {
        url: "/webapi/em/parentpay/payrecords/registry/import",
        fileExts: function fileExts() {
          return ["xls", "xlsx"];
        }
      };
      this.$dialogs.uploadFile("Импорт платежей", options).then(function (uploadResult) {
        var enqueueInfo = uploadResult.result;
        var taskOptions = {
          getTaskFunc: function getTaskFunc() {
            return Promise.resolve(enqueueInfo);
          }
        };
        return _this4.taskQueueService.execute(taskOptions);
      }).then(function (result) {
        if (result) {
          var message = "";
          if (result.message) {
            message += result.message + "\n";
          }
          message += "\u0412\u0441\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439: ".concat(result.recordsProcessed, ".\n");
          message += "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439: ".concat(result.recordsImported, ".\n");
          message += "\u041A\u043E\u043B-\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B (\u043D\u043E\u043C\u0435\u0440 \u043B\u0438\u0446. \u0441\u0447\u0435\u0442\u0430 \u0438/\u0438\u043B\u0438 \u0424\u0418\u041E \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u043D\u0438\u043A\u0430): ".concat(result.parsedRecords, ".\n");
          if (result.unRecognizedOrgs > 0) {
            message += "\u041A\u043E\u043B-\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E: ".concat(result.unRecognizedOrgs, ".\n");
          }
          if (result.unRecognizedStudents > 0) {
            message += "\u041A\u043E\u043B-\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u043D\u0438\u043A\u0430: ".concat(result.unRecognizedStudents, ".\n");
          }
          message += "\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441\u0432\u044F\u0437\u0435\u0439 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441 \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u043D\u0438\u043A\u0430\u043C\u0438: ".concat(result.newStudentLinks, ".\n");
          if (result.success) {
            _this4.$dialogs.message(message, "Успешный импорт").then(function () {
              return _this4.load();
            });
          } else {
            _this4.$dialogs.error(message, "Ошибка при импорте");
          }
          ;
        }
      });
    }
  }]);
  return ParentpayRegistryController;
}(_registryAsCtrl.RegistryController); //todo. выделить в пространство global
exports.ParentpayRegistryController = ParentpayRegistryController;
var CurrencyDecorator = /*#__PURE__*/function () {
  function CurrencyDecorator() {
    _classCallCheck(this, CurrencyDecorator);
  }
  _createClass(CurrencyDecorator, [{
    key: "format",
    value: function format(value, minorLength) {
      var partsDelimeter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
      var digitsParts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
      var re = '\\d(?=(\\d{' + (digitsParts || 3) + '})+' + (minorLength > 0 ? '\\.' : '$') + ')';
      return value.toFixed(Math.max(0, ~~minorLength)).replace(new RegExp(re, 'g'), '$&' + partsDelimeter);
    }
  }, {
    key: "activate",
    value: function activate(scope, element) {
      var value = parseInt(scope["content"]);
      var formatted = this.format(value, 2);
      scope["content"] = formatted + " р.	";
      element.css("white-space", "pre");
    }
  }]);
  return CurrencyDecorator;
}();
exports.CurrencyDecorator = CurrencyDecorator;
var ImportPayRecordsResult = /*#__PURE__*/_createClass(function ImportPayRecordsResult() {
  _classCallCheck(this, ImportPayRecordsResult);
});
var ParentPayRegistryComponent = {
  controller: ParentpayRegistryController
};
exports.ParentPayRegistryComponent = ParentPayRegistryComponent;

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetSchoolLinkController = exports.SetSchoolLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _searchSource = _interopRequireDefault(__webpack_require__(444));
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
var SetSchoolLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  SetSchoolLinkController.$inject = ["$http", "$scope", "$dialogs", "$alerts", "language", "appContext", "$uibModalInstance", "changeTracker", "payments", "parentPayRepository", "$q"];
  _inherits(SetSchoolLinkController, _NetCityModalControll);
  var _super = _createSuper(SetSchoolLinkController);
  /*@ngInject*/
  function SetSchoolLinkController($http, $scope, $dialogs, $alerts, language, appContext, $uibModalInstance, changeTracker, payments, parentPayRepository, $q) {
    var _this;
    _classCallCheck(this, SetSchoolLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModalInstance = $uibModalInstance;
    _this.payments = payments;
    _this.parentPayRepository = parentPayRepository;
    _this.$q = $q;
    var searchSettings = {
      schools: {
        url: "/webapi/schools/search",
        params: {
          searchParam: "name",
          take: 100
        }
      }
    };
    _this.header = "Привязка ОО";
    _this.search = new _searchSource["default"](searchSettings, $http);
    return _this;
  }
  _createClass(SetSchoolLinkController, [{
    key: "saveProcess",
    value: function saveProcess() {
      var _this2 = this;
      $(document).trigger("showProcessing");
      this.parentPayRepository.setSchoolLink(this.school.id, this.payments.map(function (x) {
        return x.id;
      })).then(function () {
        _this2.$uibModalInstance.close();
        _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var notValidMessage = this.notValid();
      if (notValidMessage) {
        this.$dialogs.message(notValidMessage);
      } else {
        $(document).trigger("showProcessing");
        var confirms = [];
        var confirmFunc = function confirmFunc(confirmMessages) {
          if (confirmMessages && confirmMessages.length) {
            confirmMessages.forEach(function (confirmMessage) {
              return confirms.push(function () {
                return _this3.$dialogs.confirm(confirmMessage);
              });
            });
          }
        };
        this.$q.all([this.confirmCheckSchoolLink().then(confirmFunc), this.confirmDifferentPayOrgs().then(confirmFunc)]).then(function () {
          $(document).trigger("closeProcessing");
          if (confirms.length) {
            extDeferred.when(confirms).then(function () {
              _this3.saveProcess();
            });
          } else {
            _this3.saveProcess();
          }
        });
      }
    }
  }, {
    key: "notValid",
    value: function notValid() {
      if (!this.payments) {
        return "Пустой список платежей";
      }
      if (!this.school) {
        return "Выберите ОО";
      }
      return "";
    }
  }, {
    key: "confirmDifferentPayOrgs",
    value: function confirmDifferentPayOrgs() {
      var _this4 = this;
      return new Promise(function (resolve) {
        if (_.keys(_.groupBy(_this4.payments, "payOrg")).length > 1) {
          resolve(["Внимание! Значения поля \"Организация в платеже\" у выбранных платежей различаются.\nВы желаете продолжить?"]);
        }
        ;
        resolve([]);
      });
    }
  }, {
    key: "confirmCheckSchoolLink",
    value: function confirmCheckSchoolLink() {
      var _this5 = this;
      return this.parentPayRepository.getSchoolLinks(this.payments.map(function (x) {
        return x.id;
      })).then(function (links) {
        if (!links) {
          return [];
        }
        var errorLinks = links.filter(function (link) {
          return link.school != null;
        });
        if (!errorLinks.length) {
          return [];
        }
        var result = errorLinks.map(function (link) {
          return "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u0441 \u041E\u041E ".concat(link.school.name, ".\n\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u0441 ").concat(_this5.school.name, ".\n").concat(link.payDate, ", ").concat(link.payNumber, ", ").concat(link.payInfo, "\n\u0412\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?");
        });
        return result;
      });
    }
  }]);
  return SetSchoolLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.SetSchoolLinkController = SetSchoolLinkController;
var SetSchoolLinkComponent = {
  controller: SetSchoolLinkController,
  templateUrl: "/static/dist/app/em/parentpay/payrecords/registry/setSchoolLink.component.html"
};
exports.SetSchoolLinkComponent = SetSchoolLinkComponent;

/***/ }),

/***/ 518:
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

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetStudentLinkController = exports.SetStudentLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _searchSource = _interopRequireDefault(__webpack_require__(444));
var parentPayRefs = _interopRequireWildcard(__webpack_require__(520));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var SetStudentLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  SetStudentLinkController.$inject = ["$http", "$scope", "$dialogs", "$alerts", "language", "appContext", "$uibModalInstance", "changeTracker", "payments", "parentPayRepository", "$q"];
  _inherits(SetStudentLinkController, _NetCityModalControll);
  var _super = _createSuper(SetStudentLinkController);
  /*@ngInject*/
  function SetStudentLinkController($http, $scope, $dialogs, $alerts, language, appContext, $uibModalInstance, changeTracker, payments, parentPayRepository, $q) {
    var _this;
    _classCallCheck(this, SetStudentLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$dialogs = $dialogs;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$uibModalInstance = $uibModalInstance;
    _this.payments = payments;
    _this.parentPayRepository = parentPayRepository;
    _this.$q = $q;
    var searchSettings = {
      students: {
        url: "/webapi/users/search",
        params: {
          schoolId: function schoolId() {
            return appContext.schoolId;
          },
          student: function student() {
            return true;
          },
          take: 100,
          contains: true
        }
      }
    };
    _this.header = "Привязка воспитанников";
    _this.search = new _searchSource["default"](searchSettings, $http);
    return _this;
  }
  _createClass(SetStudentLinkController, [{
    key: "saveProcess",
    value: function saveProcess() {
      var _this2 = this;
      $(document).trigger("showProcessing");
      this.parentPayRepository.setStudentLink(this.student.id, this.payments.map(function (x) {
        return x.id;
      })).then(function () {
        _this2.$uibModalInstance.close();
        _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var notValidMessage = this.notValid();
      if (notValidMessage) {
        this.$dialogs.message(notValidMessage);
      } else {
        $(document).trigger("showProcessing");
        var confirms = [];
        var confirmFunc = function confirmFunc(confirmMessages) {
          if (confirmMessages && confirmMessages.length) {
            confirmMessages.forEach(function (confirmMessage) {
              return confirms.push(function () {
                return _this3.$dialogs.confirm(confirmMessage);
              });
            });
          }
        };
        this.$q.all([this.confirmDifferentAccountNumbers().then(confirmFunc), this.confirmDifferentStudentAccount().then(confirmFunc), this.confirmCheckStudentLink().then(confirmFunc)]).then(function () {
          $(document).trigger("closeProcessing");
          if (confirms.length) {
            extDeferred.when(confirms).then(function () {
              _this3.saveProcess();
            });
          } else {
            _this3.saveProcess();
          }
        });
      }
    }
  }, {
    key: "notValid",
    value: function notValid() {
      if (!this.payments) {
        return "Пустой список платежей";
      }
      if (!this.student) {
        return "Выберите воспитанника";
      }
      return "";
    }
  }, {
    key: "confirmDifferentAccountNumbers",
    value: function confirmDifferentAccountNumbers() {
      var _this4 = this;
      return new Promise(function (resolve) {
        if (_.keys(_.groupBy(_this4.payments, "accountNumber")).length > 1) {
          resolve(["Внимание! Значения поля \"№ лицевого счета\" у выбранных платежей различаются.\nВы желаете продолжить?"]);
        }
        ;
        resolve([]);
      });
    }
  }, {
    key: "confirmDifferentStudentAccount",
    value: function confirmDifferentStudentAccount() {
      var _this5 = this;
      return this.parentPayRepository.getParamValue(this.student.id, parentPayRefs.UserParams.accountNumber).then(function (accountNumber) {
        if (!accountNumber || !accountNumber.length) {
          return [];
        }
        var payments = _.filter(_this5.payments, function (item) {
          return item.accountNumber && item.accountNumber != accountNumber[0].text;
        });
        if (!payments || !payments.length) {
          return [];
        }
        var result = payments.map(function (payment) {
          return "\u041D\u043E\u043C\u0435\u0440 \u043B\u0438\u0446\u0435\u0432\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430 \u0443 \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u043D\u0438\u043A\u0430 (".concat(accountNumber[0].text, ") \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0432 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u0438 (").concat(payment.accountNumber, ").\n\u0412\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?");
        });
        return result;
      });
    }
  }, {
    key: "confirmCheckStudentLink",
    value: function confirmCheckStudentLink() {
      var _this6 = this;
      return this.parentPayRepository.getStudentLinks(this.payments.map(function (x) {
        return x.id;
      })).then(function (links) {
        if (!links) {
          return [];
        }
        var errorLinks = links.filter(function (link) {
          return link.students != null && link.students.length;
        });
        if (!errorLinks.length) {
          return [];
        }
        var result = errorLinks.map(function (link) {
          return "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436 \u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u0441 \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u043D\u043D\u0438\u043A\u043E\u043C ".concat(link.students.map(function (student) {
            return student.name + " (" + student.currentClassInfo + ")";
          }).join(", "), ".\n\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u0441 ").concat(_this6.student.name, ".\n").concat(link.payDate, ", ").concat(link.payNumber, ", ").concat(link.payInfo, "\n\u0412\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?");
        });
        return result;
      });
    }
  }]);
  return SetStudentLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.SetStudentLinkController = SetStudentLinkController;
var SetStudentLinkComponent = {
  controller: SetStudentLinkController,
  templateUrl: "/static/dist/app/school/parentpay/payrecords/registry/setStudentLink.component.html"
};
exports.SetStudentLinkComponent = SetStudentLinkComponent;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserParams = void 0;
var UserParams = {
  accountNumber: 1126
};
exports.UserParams = UserParams;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditParentPayComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var fEpsilon = 0.00001;
var EditParentPayController = /*#__PURE__*/function () {
  EditParentPayController.$inject = ["appContext", "$scope", "language", "$location", "pageContext", "$dialogs", "$appLoader", "$longWork", "$alerts", "changeTracker", "usersRepository", "parentPayRepository"];
  /*@ngInject*/
  function EditParentPayController(appContext, $scope, language, $location, pageContext, $dialogs, $appLoader, $longWork, $alerts, changeTracker, usersRepository, parentPayRepository) {
    var _this = this;
    _classCallCheck(this, EditParentPayController);
    this.$scope = $scope;
    this.language = language;
    this.$location = $location;
    this.pageContext = pageContext;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.changeTracker = changeTracker;
    this.usersRepository = usersRepository;
    this.parentPayRepository = parentPayRepository;
    this.initDebts = {};
    this.studentsParents = [];
    this.prevRepresents = {};
    this.parentPayTotals = {
      prevDebt: null,
      absentAttendance: null,
      presentAttendance: null,
      toPay: null,
      payVal: null,
      currDebt: null
    };
    this.contextReadOnly = appContext.readOnly;
    this.editAll = appContext.hasAnyRight([Rights.arJournalEditAll]);
    this.selfOnly = appContext.hasAnyRight([Rights.arJournalEditSelf]) && !this.editAll;
    this.pageContext.title = language.Generic.Grade.kParentPayForMonth;
    this.pageContext.parent = {
      title: language.Generic.Grade.kParentPay,
      href: "/view/"
    };
    this.pageContext.back = null;
    var fpValues = null;
    var params = $location.search();
    if (params && params.classId && params.monthId) {
      fpValues = {
        PCLID: params.classId,
        MonthsFilter: params.monthId
      };
    }
    if (!this.contextReadOnly && this.selfOnly) {
      parentPayRepository.getClassIdsIdForClassChief(appContext.userId).then(function (classIds) {
        _this.classIds = classIds;
      });
    }
    this.filterPanelSettings = {
      url: this.parentPayRepository.getMainFilterPanelUrl(),
      sources: null,
      values: fpValues,
      events: {
        ready: function ready(values) {
          _this.classId = values.PCLID;
          _this.outDebtsMode = _this.classId == -1;
          var monthId = values.MonthsFilter;
          _this.$location.search({
            classId: _this.classId,
            monthId: monthId
          });
          _this.year = parseInt(monthId.split("_")[0]);
          _this.month = parseInt(monthId.split("_")[1]);
          _this.load();
        },
        canChange: function canChange() {
          return new Promise(function (resolve) {
            _this.changeTracker.check().then(function () {
              return resolve(true);
            }, function () {
              return resolve(false);
            });
          });
        }
      }
    };
  }
  _createClass(EditParentPayController, [{
    key: "checkClassAccess",
    value: function checkClassAccess(classId) {
      if (this.editAll) {
        return true;
      }
      if (this.selfOnly) {
        return this.classIds.indexOf(Number(classId)) > -1;
      }
      return false;
    }
  }, {
    key: "onChange",
    value: function onChange(studentMonthPays) {
      studentMonthPays.reCalc(this.payNorms);
      this.calcTotals();
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.parentPayForm.$invalid || !this.changeTracker.isDataChanged()) {
        if (this.parentPayForm.$error.required) {
          this.$dialogs.message(this.language.Generic.Grade.kErr_AttendCount_Without_Norm);
          return;
        }
        if (this.parentPayForm.$error.minmax) {
          this.$dialogs.message(this.language.Generic.Grade.kErr_AttendCount + " " + this.maxAttendance + " " + this.language.Generic.Grade.kOrMakeFieldEmpty);
          return;
        }
        if (this.parentPayForm.$error.daysCountOverflow) {
          this.$dialogs.message(this.language.Generic.Grade.kErr_AttendCountSumm + " " + this.maxAttendance);
          return;
        }
        return;
      }
      var saveData = this.studentMonthPays.filter(function (sm) {
        return sm.isFilled;
      }).map(function (sm) {
        return sm.saveData;
      });
      var processing = this.$longWork.show();
      this.parentPayRepository.saveMonthParentPay(this.classId, this.year, this.month, saveData).then(function () {
        _this2.changeTracker.clearDataChanges();
        _this2.$alerts.success("Родительская плата успешно сохранена");
        return _this2.load();
      }).then(function () {
        processing.close();
      });
    }
  }, {
    key: "emptyData",
    get: function get() {
      return !this.studentMonthPays || this.studentMonthPays.length == 0;
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.studentMonthPays = null;
      if (!this.$appLoader.displayed) {
        this.$longWork.show();
      }
      var students;
      var pays;
      var endDate = new Date(this.year, this.month, 0);
      var monthDaysCount = endDate.getDate();
      this.maxAttendance = monthDaysCount;
      var preparePayNormDecree = this.parentPayRepository.getPayNormDecree(this.year, this.month).then(function (res) {
        if (res != null) {
          _this3.payNorms = res.payNorms;
          _this3.emId = res.educManagement.id;
        } else {
          _this3.payNorms = null;
        }
        _this3.noPayNorms = !_this3.payNorms || !_this3.payNorms.length;
      });
      var prepareAccessMonth = function prepareAccessMonth() {
        return new Promise(function (resolve) {
          _this3.accessMonth = false;
          if (!_this3.contextReadOnly) {
            return _this3.parentPayRepository.getAccessMonth(_this3.emId).then(function (res) {
              _this3.accessMonth = res === -1 || res === _this3.month;
            }).then(function () {
              return resolve();
            });
          }
          resolve();
        });
      };
      var prepareStudentList = this.parentPayRepository.getStudentParentPayInfo(this.classId, this.year, this.month).then(function (studentsDto) {
        students = studentsDto;
      });
      var prepareInitDebts = function prepareInitDebts() {
        return new Promise(function (resolve) {
          var studentIds = students.map(function (s) {
            return s.studentId;
          });
          var newStudent = studentIds.find(function (sid) {
            return typeof _this3.initDebts[sid] === "undefined";
          });
          if (newStudent) {
            return _this3.parentPayRepository.getInitDebts(studentIds).then(function (res) {
              _this3.initDebts = res;
              students.forEach(function (st) {
                return _this3.initDebts[st.studentId] = _this3.initDebts[st.studentId] || 0;
              });
            }).then(function () {
              return resolve();
            });
          }
          resolve();
        });
      };
      var prepareStudentParents = function prepareStudentParents() {
        return new Promise(function (resolve) {
          var studentIds = students.map(function (s) {
            return s.studentId;
          });
          var newStudent = studentIds.find(function (sid) {
            return _this3.studentsParents.findIndex(function (sp) {
              return sp.studentId == sid;
            }) == -1;
          });
          if (newStudent) {
            return _this3.usersRepository.getStudentParents(studentIds).then(function (res) {
              _this3.studentsParents = res;
              students.forEach(function (st) {
                if (_this3.studentsParents.findIndex(function (sp) {
                  return sp.studentId == st.studentId;
                }) != -1) {
                  return;
                }
                _this3.studentsParents.push({
                  studentId: st.studentId,
                  parents: []
                });
              });
            }).then(function () {
              return resolve();
            })["catch"](function () {
              return resolve();
            });
          }
          resolve();
        });
      };
      var prepareMonthPays = this.parentPayRepository.getMonthParentPay(this.classId, this.year, this.month).then(function (paysDto) {
        return pays = paysDto;
      });
      var preparePrevRepresentatives = function preparePrevRepresentatives() {
        return new Promise(function (resolve) {
          if (_this3.readOnly) {
            resolve();
          } else {
            var studentIds = students.map(function (s) {
              return s.studentId;
            });
            var defRepresent = pays.filter(function (p) {
              return p.parentId != null;
            }).map(function (p) {
              return p.studentId;
            });
            var undefRepresent = studentIds.filter(function (st) {
              return defRepresent.indexOf(st) < 0;
            });
            if (undefRepresent != null && undefRepresent.length > 0) {
              return _this3.parentPayRepository.getPrevRepresents(undefRepresent, _this3.month).then(function (res) {
                _this3.prevRepresents = res;
              }).then(function () {
                return resolve();
              });
            }
            resolve();
          }
        });
      };
      var prepareReadOnly = function prepareReadOnly() {
        return new Promise(function (resolve) {
          _this3.readOnly = _this3.contextReadOnly || !_this3.accessMonth;
          if (!_this3.readOnly) {
            _this3.readOnly = !_this3.checkClassAccess(_this3.classId);
          }
          resolve();
        });
      };
      var processingEnd = function processingEnd() {
        if (!_this3.$appLoader.displayed) {
          _this3.$longWork.close();
        }
        _this3.$scope.$applyAsync();
        _this3.$appLoader.hide();
      };
      return Promise.all([prepareMonthPays, prepareStudentList, preparePayNormDecree]).then(function () {
        if (_this3.noPayNorms) {
          _this3.readOnly = true;
          _this3.studentMonthPays = null;
          processingEnd();
          return Promise.reject("nopaynorms");
        }
      }).then(function () {
        return prepareAccessMonth();
      }).then(function () {
        return prepareInitDebts();
      }).then(function () {
        return prepareStudentParents();
      }).then(function () {
        return prepareReadOnly();
      }).then(function () {
        return preparePrevRepresentatives();
      }).then(function () {
        _this3.changeTracker.clearDataChanges();
        _this3.studentMonthPays = students.map(function (st) {
          var parents = _this3.studentsParents.find(function (sp) {
            return sp.studentId == st.studentId;
          }).parents;
          var payInfo = pays.find(function (p) {
            return p.studentId == st.studentId;
          });
          var debt = _this3.initDebts[st.studentId];
          return new StudentMonthParentPay(st, parents, _this3.prevRepresents || {}, _this3.outDebtsMode, payInfo, debt);
        });
        _this3.studentMonthPays.forEach(function (s) {
          return s.reCalc(_this3.payNorms);
        });
        _this3.calcTotals();
        processingEnd();
      })["catch"](function (er) {
        console.log(er);
        processingEnd();
      });
    }
  }, {
    key: "calcTotals",
    value: function calcTotals() {
      var _this4 = this;
      this.parentPayTotals.prevDebt = null;
      this.parentPayTotals.absentAttendance = null;
      this.parentPayTotals.presentAttendance = null;
      this.parentPayTotals.toPay = null;
      this.parentPayTotals.payVal = null;
      this.parentPayTotals.currDebt = null;
      this.studentMonthPays.forEach(function (pay) {
        _this4.parentPayTotals.prevDebt += pay.prevDebt;
        _this4.parentPayTotals.absentAttendance += pay.info.absentAttendance;
        _this4.parentPayTotals.presentAttendance += pay.info.presentAttendance;
        _this4.parentPayTotals.toPay += pay.toPay;
        _this4.parentPayTotals.payVal += pay.payVal;
        _this4.parentPayTotals.currDebt += pay.debt;
      });
    }
  }, {
    key: "isAttendanceMismatch",
    value: function isAttendanceMismatch(studentPayInfo) {
      var _this5 = this;
      var payAttendance = studentPayInfo.attendance.filter(function (att) {
        var payNorm = _this5.payNorms.find(function (p) {
          return p.id == att.normId;
        });
        return payNorm && !payNorm.noAttendance;
      }).reduce(function (sum, att) {
        return sum + att.attendance;
      }, 0);
      return payAttendance > 0 && payAttendance != studentPayInfo.info.presentAttendance;
    }
  }]);
  return EditParentPayController;
}();
var StudentMonthParentPay = /*#__PURE__*/function () {
  function StudentMonthParentPay(info, parents, prevRepresents, outDebtsMode, payInfo, initDebt) {
    _classCallCheck(this, StudentMonthParentPay);
    this.info = info;
    this.parents = parents;
    this.studentId = info.studentId;
    if (payInfo) {
      this.payId = payInfo.payId;
      this.debt = payInfo.debt;
      this.content = payInfo.content;
      this.compensation = payInfo.compensation;
      this.toPay = payInfo.toPay;
      this.correction = payInfo.correction;
      this.payVal = payInfo.payVal;
      this.attendance = payInfo.attendance;
      this.parentId = payInfo.parentId;
      this.numMonth = payInfo.numMonth;
    } else {
      this.correction = null;
      this.payVal = null;
      this.parentId = prevRepresents[this.studentId] || 0;
    }
    this.attendance = this.attendance || [];
    if (this.attendance.length == 0 && !this.info.readOnly) {
      this.attendance.push({
        attendance: null,
        normId: info.payNormId,
        numOrder: 1
      });
    }
    if (typeof info.prevDebt == "undefined" || info.prevDebt == null) {
      this.prevDebt = initDebt || 0;
    } else {
      this.prevDebt = info.prevDebt;
    }
    this.outDebtsMode = outDebtsMode;
  }
  _createClass(StudentMonthParentPay, [{
    key: "reCalc",
    value: function reCalc(payNorms) {
      var useNorm;
      var maxAtt = 0;
      var toPay = 0;
      var _iterator = _createForOfIteratorHelper(this.attendance),
        _step;
      try {
        var _loop = function _loop() {
          var attendanceInfo = _step.value;
          var payNorm = payNorms.find(function (p) {
            return p.id == attendanceInfo.normId;
          });
          if (!payNorm) {
            return "continue";
          }
          toPay += payNorm.normValue * attendanceInfo.attendance;
          //вычисление "основного" норматива расчета
          if (!payNorm.noAttendance && attendanceInfo.attendance >= maxAtt) {
            useNorm = payNorm;
            maxAtt = attendanceInfo.attendance;
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.toPay = Number(toPay.toFixed(2));
      this.debt = (this.prevDebt || 0) + (this.payVal || 0) - this.toPay;
      this.content = this.calcContent();
      this.compensation = this.calcCompens(useNorm);
    }
  }, {
    key: "calcContent",
    value: function calcContent() {
      var content = 0;
      if (this.payVal + this.prevDebt > this.toPay + fEpsilon) {
        if (this.prevDebt > fEpsilon) content = this.toPay;else content = this.toPay - this.prevDebt;
      } else if (this.prevDebt > fEpsilon) content = this.payVal + this.prevDebt;else content = this.payVal;
      return content;
    }
  }, {
    key: "calcCompens",
    value: function calcCompens(payNorm) {
      var compens = 0;
      if (!payNorm) {
        return compens;
      }
      if (this.content > fEpsilon && payNorm.normValue > fEpsilon && payNorm.avgValue > fEpsilon) compens = this.content * payNorm.avgValue / payNorm.normValue;
      return compens;
    }
  }, {
    key: "isFilled",
    get: function get() {
      if (this.outDebtsMode) {
        return this.payVal !== null || this.correction !== null;
      } else {
        return this.correction !== null || this.payVal !== null || this.attendance.findIndex(function (a) {
          return a.attendance != null && a.attendance >= 0 && a.normId > 0;
        }) > -1;
      }
    }
  }, {
    key: "saveData",
    get: function get() {
      return {
        studentId: this.studentId,
        content: this.content,
        compensation: this.compensation,
        debt: this.debt,
        payId: this.payId,
        toPay: this.toPay,
        payVal: this.payVal,
        parentId: this.parentId,
        correction: this.correction,
        attendance: this.attendance.filter(function (a) {
          return a.attendance >= 0 && a.normId;
        }).map(function (a) {
          return Object.assign({}, a);
        }),
        outDebtsMode: this.outDebtsMode,
        numMonth: this.numMonth
      };
    }
  }, {
    key: "parentFio",
    get: function get() {
      var _this6 = this;
      return this.parentId ? this.parents.find(function (p) {
        return p.id == _this6.parentId;
      }).name : "";
    }
  }]);
  return StudentMonthParentPay;
}();
var EditParentPayComponent = {
  controller: EditParentPayController,
  reloadOnSearch: false,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/parentpay/edit/editparentpay.component.html"
};
exports.EditParentPayComponent = EditParentPayComponent;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentPayAttendanceComponent = exports.AttendanceListInputDirective = void 0;
var _floatinput = __webpack_require__(502);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ParentPayAttendanceController = /*#__PURE__*/function () {
  function ParentPayAttendanceController() {
    _classCallCheck(this, ParentPayAttendanceController);
    this.forms = [];
  }
  _createClass(ParentPayAttendanceController, [{
    key: "addNorm",
    value: function addNorm() {
      var attendance = {
        attendance: null,
        normId: null,
        numOrder: 1
      };
      this.attendance.push(attendance);
    }
    // Эта ф-ция сейчас вызывается только в режиме readonly, поэтому добавляю условие "... || !att.attendance ...", чтобы лишний раз не выводить "(устарел)"
  }, {
    key: "getAttendancePayNormName",
    value: function getAttendancePayNormName(att) {
      if (!att || !att.normId || !att.attendance) {
        return "";
      }
      var payNorm = this.payNorms.find(function (p) {
        return p.id == att.normId;
      });
      if (!payNorm) {
        return "(устарел)";
      }
      return this.getPayNormName(payNorm);
    }
  }, {
    key: "getPayNormName",
    value: function getPayNormName(payNorm) {
      return payNorm.abbrev + ' (' + payNorm.normValue + '/' + payNorm.avgValue + ')';
    }
  }]);
  return ParentPayAttendanceController;
}();
/*@ngInject*/
var AttendanceListInputDirective = function AttendanceListInputDirective($timeout) {
  return {
    require: 'ngModel',
    scope: {
      options: "=options"
    },
    link: function link(scope, element, attr, ngModel) {
      (0, _floatinput.NumericInputDirectiveLink)(scope, element, attr, ngModel);
      var controlName = attr["name"];
      var attendanceController = scope.$parent.$parent.$ctrl;
      var ngModels = attendanceController.forms.map(function (f) {
        return f[controlName];
      });
      var totalDays = parseInt(attr["max"]);
      ngModel.$validators.daysCountOverflow = function () {
        var sumAttendance = ngModels.reduce(function (sum, ngm) {
          return sum + (ngm && ngm.$$rawModelValue || 0);
        }, 0);
        var valid = sumAttendance <= totalDays;
        ngModels.forEach(function (ngm) {
          return ngm && ngm.$setValidity("daysCountOverflow", valid);
        });
        return valid;
      };
    }
  };
};
AttendanceListInputDirective.$inject = ["$timeout"];
exports.AttendanceListInputDirective = AttendanceListInputDirective;
AttendanceListInputDirective.selector = "attendanceListInput";
var ParentPayAttendanceComponent = {
  selector: "parentPayAttendance",
  controller: ParentPayAttendanceController,
  controllerAs: "$ctrl",
  bindings: {
    attendance: "=",
    maxAttendance: "<",
    payNorms: "<",
    onChange: "&",
    readOnly: "<"
  },
  template: "\n\t\t<div class=\"parentpay-attendance\" ng-form=\"$ctrl.form\">\n\t\t<div class=\"attendance-list\">\n\t\t\t<div ng-repeat=\"payAttendance in $ctrl.attendance\" class=\"attendance-block\" ng-form=\"$ctrl.forms[$index]\">\n\t\t\t\t<div class=\"attendance\" ng-class=\"{'has-error': $ctrl.forms[$index].attendance.$invalid}\">\n\t\t\t\t\t<input ng-if=\"!$ctrl.readOnly\" options=\"{allownull: true}\" attendance-list-input name=\"attendance\" class=\"form-control\" type=\"text\" size=\"1\" maxlength=\"2\" max=\"{{$ctrl.maxAttendance}}\" ng-model=\"payAttendance.attendance\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t\t<input ng-if=\"$ctrl.readOnly\" name=\"attendance\" disabled class=\"form-control\" type=\"text\" size=\"1\" maxlength=\"2\" ng-value=\"payAttendance.attendance\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"paynorm\" ng-class=\"{'has-error': $ctrl.forms[$index].paynorm.$invalid}\">\n\t\t\t\t\t<select ng-if=\"!$ctrl.readOnly\" name=\"paynorm\" class=\"form-control\" ng-required=\"payAttendance.attendance\" ng-options=\"payNorm.id as $ctrl.getPayNormName(payNorm) for payNorm in $ctrl.payNorms\" ng-model=\"payAttendance.normId\" ng-change=\"$ctrl.onChange()\">\n\t\t\t\t\t\t<option value=\"\"></option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<input ng-if=\"$ctrl.readOnly\" disabled class=\"form-control\" type=\"text\" ng-value=\"$ctrl.getAttendancePayNormName(payAttendance)\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"action-panel\" ng-if=\"!$ctrl.readOnly\">\n\t\t\t<a href=\"javascript:void(0)\" ng-click=\"$ctrl.addNorm()\" title=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\" style=\"text-decoration:none;\">\n\t\t\t\t<i class=\"icon-plus\"></i>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t"
};
exports.ParentPayAttendanceComponent = ParentPayAttendanceComponent;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentPayComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var fEpsilon = 0.00001;
var ParentPayController = /*#__PURE__*/function () {
  ParentPayController.$inject = ["appContext", "language", "$location", "pageContext", "$q", "$appLoader", "$longWork", "parentPayRepository"];
  /*@ngInject*/
  function ParentPayController(appContext, language, $location, pageContext, $q, $appLoader, $longWork, parentPayRepository) {
    var _this = this;
    _classCallCheck(this, ParentPayController);
    this.appContext = appContext;
    this.language = language;
    this.$location = $location;
    this.pageContext = pageContext;
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.parentPayRepository = parentPayRepository;
    this.pageContext.title = this.language.Generic.Grade.kParentPay;
    this.pageContext.parent = null;
    this.payMothNames = [this.language.Generic.Common.kSeptember, this.language.Generic.Common.kOctober, this.language.Generic.Common.kNovember, this.language.Generic.Common.kDecember, this.language.Generic.Common.kJanuary, this.language.Generic.Common.kFebruary, this.language.Generic.Common.kMarch, this.language.Generic.Common.kApril, this.language.Generic.Common.kMay, this.language.Generic.Common.kJune, this.language.Generic.Common.kJuly, this.language.Generic.Common.kAugust];
    this.filterPanelSettings = {
      url: this.parentPayRepository.getMainFilterPanelUrl(false),
      events: {
        ready: function ready(values) {
          _this.classId = values.PCLID;
          _this.load();
        }
      }
    };
  }
  _createClass(ParentPayController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var students;
      var prepareStudentList = this.parentPayRepository.getYearClassStudents(this.classId).then(function (studentsDto) {
        students = studentsDto;
        _this2.emptyStudents = !students || students.length == 0;
      });
      var pays;
      var prepareMonthPays = this.parentPayRepository.getMonthParentPay(this.classId, -1, -1).then(function (paysDto) {
        pays = paysDto;
      });
      var initDebts = {};
      var prepareInitDebts = function prepareInitDebts() {
        return new Promise(function (resolve) {
          if (!_this2.emptyStudents) {
            var studentIds = students.map(function (s) {
              return s.id;
            });
            return _this2.parentPayRepository.getInitDebts(studentIds).then(function (res) {
              initDebts = res;
            }).then(function () {
              return resolve();
            });
          }
          resolve();
        });
      };
      return this.$longWork.execute(this.$q.all([prepareStudentList, prepareMonthPays]).then(function () {
        return prepareInitDebts();
      }).then(function () {
        _this2.preparePayMonths(pays);
        if (!_this2.emptyStudents) {
          _this2.studentsPays = students.map(function (st) {
            var lastDebt = initDebts[st.id] || 0;
            var studentName = st.fullName;
            if (st.free) {
              studentName += " ".concat(_this2.language.Generic.Common.kRemovedStudentMark);
            }
            return {
              student: {
                id: st.id,
                name: studentName
              },
              initDebt: lastDebt,
              monthPays: _this2.payMonths.map(function (pm) {
                var pay = pays.find(function (pay) {
                  return pay.studentId == st.id && pay.numMonth == pm.payNumMonth;
                });
                if (pay == undefined) {
                  return {
                    payId: null,
                    compensation: null,
                    content: null,
                    attendanceCount: null
                  };
                } else {
                  lastDebt = pay.debt + pay.correction;
                  return {
                    payId: pay.payId,
                    compensation: pay.compensation,
                    content: pay.content,
                    attendanceCount: pay.attendance && pay.attendance.length > 0 ? pay.attendance.reduce(function (cnt, attendance) {
                      return cnt + attendance.attendance;
                    }, 0) : null
                  };
                }
              }),
              lastDebt: lastDebt
            };
          });
        }
        _this2.$appLoader.hide();
        $(document).trigger("adjust-floating-scrolls");
      }));
    }
  }, {
    key: "getMaxOfArray",
    value: function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
  }, {
    key: "preparePayMonths",
    value: function preparePayMonths(pays) {
      var maxPayMonth = 12;
      if (pays && pays.length > 0) {
        maxPayMonth = this.getMaxOfArray(pays.map(function (x) {
          return x.numMonth;
        }));
        if (maxPayMonth < 12) {
          maxPayMonth++;
        }
      }
      this.payMonths = [];
      for (var payNumMonth = 1; payNumMonth <= maxPayMonth; payNumMonth++) {
        // Похожая логика соответсвия между payNumMonth и yearNumMonth есть в ParentPayController.MapMonthNum, только там обратное преобразование.
        var yearNumMonth = 0;
        var numYear = 2000 + this.appContext.globalYearId;
        if (payNumMonth >= 5) {
          numYear++;
          yearNumMonth = payNumMonth - 4;
        } else {
          yearNumMonth = payNumMonth + 8;
        }
        this.payMonths.push({
          yearNumMonth: yearNumMonth,
          payNumMonth: payNumMonth,
          numYear: numYear,
          title: "".concat(this.payMothNames[payNumMonth - 1], " ").concat(numYear)
        });
      }
    }
  }, {
    key: "editMonth",
    value: function editMonth(payMonth) {
      var params = {
        classId: this.classId,
        monthId: "".concat(payMonth.numYear, "_").concat(payMonth.yearNumMonth)
      };
      this.$location.path("/edit/").search(params);
    }
  }, {
    key: "isNegative",
    value: function isNegative(value) {
      return value < -fEpsilon;
    }
  }, {
    key: "print",
    value: function print() {
      angular.element(".print-block").printUtils().toPrint({
        viewHeader: true
      });
    }
  }, {
    key: "export",
    value: function _export() {
      angular.element(".print-block").printUtils().toExcel({
        viewHeader: true
      });
    }
  }]);
  return ParentPayController;
}();
var ParentPayComponent = {
  controller: ParentPayController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/parentpay/view/parentpay.component.html"
};
exports.ParentPayComponent = ParentPayComponent;

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