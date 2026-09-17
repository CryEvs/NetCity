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
/******/ 	return __webpack_require__(__webpack_require__.s = 503);
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

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(504);


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _individSupportRegistryCtrl = __webpack_require__(505);
var _editSupportCtrl = __webpack_require__(508);
var _editMeasureCtrl = __webpack_require__(509);
var _repository = __webpack_require__(510);
var _editMeasureListComponent = __webpack_require__(511);
var _dateInputComponent = __webpack_require__(512);
var _module = angular.module("irtech.netcity.school.individualsupport", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
var registryTemplate = "/static/dist/app/global/templates/registryAs.html";
_module.service("individSuportRepository", _repository.IndividSuportRepository).component("editMeasureList", _editMeasureListComponent.EditMeasureListComponent).component("editDateInputComponent", _dateInputComponent.EditDateInputComponent).controller("IndividSupportRegistryController", _individSupportRegistryCtrl.IndividSupportRegistryController).controller("EditSupportController", _editSupportCtrl.EditSupportController).controller("EditSupportMeasureController", _editMeasureCtrl.EditSupportMeasureController).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/registry/", {
    templateUrl: registryTemplate,
    controller: "IndividSupportRegistryController as ctrl"
  }).otherwise({
    templateUrl: registryTemplate,
    controller: "IndividSupportRegistryController as ctrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndividSupportRegistryController = void 0;
var _registryAsCtrl = __webpack_require__(506);
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
var IndividSupportRegistryController = /*#__PURE__*/function (_RegistryController) {
  IndividSupportRegistryController.$inject = ["$injector", "pageContext", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "appContext", "individSuportRepository"];
  _inherits(IndividSupportRegistryController, _RegistryController);
  var _super = _createSuper(IndividSupportRegistryController);
  /*@ngInject*/
  function IndividSupportRegistryController($injector, pageContext, $scope, $appLoader, $dialogs, $uibModal, $alerts, appContext, individSuportRepository) {
    var _this;
    _classCallCheck(this, IndividSupportRegistryController);
    pageContext.title = "Индивидуальная поддержка обучающихся";
    pageContext.parent = null;
    var addButton = {
      title: language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        _this.add();
      }
    };
    var registry = {
      url: "/webapi/individualsupport/registry",
      filtersUrl: "/webapi/individualsupport/registry/filter",
      fieldDecorators: {
        "reason": {
          type: "preserveWhiteSpace"
        },
        "studentFio": {
          type: "link",
          action: function action(support) {
            return _this.edit(support);
          }
        }
      },
      buttons: [addButton],
      linkButtons: [],
      extensions: null
    };
    individSuportRepository.getAccessInfo().then(function (accessInfo) {
      addButton.hide = !accessInfo.canAdd;
    });
    return _this = _super.call(this, $injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, registry);
  }
  _createClass(IndividSupportRegistryController, [{
    key: "add",
    value: function add() {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/individualsupport/edit/template.html",
        controller: 'EditSupportController as ctrl',
        size: "lg",
        resolve: {
          supportId: function supportId() {
            return null;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.load();
      });
    }
  }, {
    key: "edit",
    value: function edit(support) {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/individualsupport/edit/template.html",
        controller: 'EditSupportController as ctrl',
        size: "lg",
        resolve: {
          supportId: function supportId() {
            return support.id;
          }
        }
      });
      modalInstance.result.then(function () {
        return _this3.load();
      }, function () {
        return _this3.load();
      });
    }
  }]);
  return IndividSupportRegistryController;
}(_registryAsCtrl.RegistryController);
exports.IndividSupportRegistryController = IndividSupportRegistryController;
IndividSupportRegistryController.language = language;

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

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSupportController = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _searchSource = _interopRequireDefault(__webpack_require__(444));
var Rights = _interopRequireWildcard(__webpack_require__(10));
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
var EditSupportController = /*#__PURE__*/function (_NetCityModalControll) {
  EditSupportController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$http", "$q", "$alerts", "individSuportRepository", "appContext", "language", "supportId"];
  _inherits(EditSupportController, _NetCityModalControll);
  var _super = _createSuper(EditSupportController);
  /*@ngInject*/
  function EditSupportController($scope, $uibModalInstance, changeTracker, $dialogs, $http, $q, $alerts, individSuportRepository, appContext, language, supportId) {
    var _this;
    _classCallCheck(this, EditSupportController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$q = $q;
    _this.$alerts = $alerts;
    _this.individSuportRepository = individSuportRepository;
    _this.appContext = appContext;
    _this.language = language;
    _this.supportId = supportId;
    _this.ready = false;
    _this.individSuportRepository = individSuportRepository;
    _this.$q = $q;
    _this.header = "Редактирование информации об индивидуальной поддержке";
    _this.support = null;
    var searchSettings = {
      students: {
        url: "/webapi/users/search",
        params: {
          schoolId: function schoolId() {
            return _this.appContext.schoolId;
          },
          student: function student() {
            return true;
          },
          schoolYearId: function schoolYearId() {
            return _this.appContext.yearId;
          }
        }
      }
    };
    _this.state = {
      editMode: _this.supportId > 0,
      createMode: !_this.supportId,
      readOnly: _this.appContext.readOnly || !_this.appContext.hasAnyRight([Rights.arAddIndividualSupportStudents, Rights.arIndividualSupportMeasuresEditAll, Rights.arIndividualSupportMeasuresEditSelf])
    };
    _this.data = {
      student: null,
      otherReason: null,
      reasons: [],
      subjects: [],
      search: new _searchSource["default"](searchSettings, $http),
      refs: {
        reasons: [],
        subjects: []
      }
    };
    // селект2-настройки
    _this.select2Settings = {
      students: null,
      reasons: null,
      subjects: null
    };
    _this.init();
    $scope.$watch(function () {
      return _this.data.student;
    }, function (newVal) {
      if (newVal) {
        if (_this.canSelectSubject()) {
          _this.initSupportSubjects();
        }
      }
    });
    return _this;
  }
  _createClass(EditSupportController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var promises = [];
      if (this.supportId > 0) {
        var loadSupportInfo = this.individSuportRepository.getSupport(this.supportId).then(function (support) {
          _this2.support = support;
          _this2.data.student = support.student;
          _this2.data.otherReason = support.otherReason;
          _this2.data.reasons = support.reasons.map(function (x) {
            return x.toString();
          });
          _this2.data.subjects = support.subjects.map(function (x) {
            return x.toString();
          });
        });
        promises.push(loadSupportInfo);
      }
      // const loadReasons = this.individSuportRepository.getSupportReasons().then((reasons) => {
      // 	this.data.refs.reasons = reasons;
      // });
      var loadAccessInfo = this.individSuportRepository.getAccessInfo().then(function (accessInfo) {
        _this2.accessInfo = accessInfo;
      });
      promises.push(loadAccessInfo);
      this.$q.all(promises).then(function () {
        // изменил загрузку причин
        _this2.data.refs.reasons = _this2.accessInfo.reasons;
        _this2.addOptions = {
          disabled: _this2.cantEditing()
        };
        _this2.select2Settings.reasons = _this2.getOptions(_this2.accessInfo.reasons);
        _this2.ready = true;
      });
    }
  }, {
    key: "initSupportSubjects",
    value: function initSupportSubjects() {
      var _this3 = this;
      var student = this.data.student;
      // предметы
      this.individSuportRepository.getSubjects(student.id).then(function (subjects) {
        _this3.data.refs.subjects = subjects;
        _this3.select2Settings.subjects = _this3.getOptions(subjects);
      });
    }
  }, {
    key: "getOptions",
    value: function getOptions(data) {
      var opts = data.map(function (x) {
        return {
          id: x.id,
          text: x.name
        };
      });
      return Object.assign({}, {
        data: opts
      }, this.addOptions);
    }
  }, {
    key: "buildSelect2Settings",
    value: function buildSelect2Settings() {
      this.select2Settings.reasons = {
        data: this.data.refs.reasons.map(function (x) {
          return {
            id: x.id,
            text: x.name
          };
        })
      };
      //this.data.search.students = {
      //	url: "/webapi/users/search",
      //	params: {
      //		schoolId: () => appContext.schoolId,
      //		student: () => true
      //	}
      //};
    }
  }, {
    key: "cantEditing",
    value: function cantEditing() {
      return this.state.readOnly || this.accessInfo.onlyTeacher && !this.accessInfo.isClassChief;
    }
    //let studentsSettings = {
    //	ajax: {
    //		url: "/webapi/users/search",
    //		dataType: "json",
    //		type: "GET",
    //		data: (params: any) => {
    //			return {
    //				schoolId: appContext.schoolId,
    //				name: params.term || "",
    //				student: true,
    //				at: appContext.at
    //			};
    //		},
    //		processResults: (data: any) => {
    //			let results = _.map(data, (item: any) => {
    //				return {
    //					id: item.id,
    //					text: item.name
    //				};
    //			});
    //			this.select2Settings.students.data = results;
    //			//this.$element.select2({data: results})
    //			return results;
    //		},
    //		cache: true
    //	}
    //};
    //this.select2Settings.students = studentsSettings;
    //}
  }, {
    key: "commonInfoExists",
    value: function commonInfoExists() {
      return this.data.student && this.data.student.id && this.data.reasons && this.data.reasons.length;
    }
  }, {
    key: "selectedOtherReason",
    value: function selectedOtherReason() {
      var other = 33;
      return this.data.reasons && this.data.reasons.some(function (x) {
        return parseInt(x) === other;
      });
    }
  }, {
    key: "canSelectSubject",
    value: function canSelectSubject() {
      var learningProblems = 4,
        lowPerformanceInIndividualSubjects = 5;
      return this.data.student && this.data.reasons && this.data.reasons.some(function (x) {
        return parseInt(x) === learningProblems;
      }) && this.data.reasons.some(function (x) {
        return parseInt(x) === lowPerformanceInIndividualSubjects;
      });
    }
  }, {
    key: "add",
    value: function add() {
      var _this4 = this;
      if (!this.commonInfoExists()) {
        return;
      }
      var support = {
        student: this.data.student,
        otherReason: this.data.otherReason,
        reasons: this.data.reasons.map(function (x) {
          return parseInt(x);
        }),
        subjects: this.data.subjects.map(function (x) {
          return parseInt(x);
        })
      };
      this.individSuportRepository.addSupport(support).then(function (support) {
        _this4.support = support;
        _this4.supportId = support.id;
        _this4.state.editMode = true;
        _this4.state.createMode = false;
        _this4.changeTracker.clearDataChanges(_this4.modalCtx);
        _this4.$alerts.success("Информация успешно сохранена");
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      this.support.otherReason = this.data.otherReason;
      this.support.reasons = this.data.reasons.map(function (x) {
        return parseInt(x);
      });
      this.support.subjects = this.data.subjects.map(function (x) {
        return parseInt(x);
      });
      this.individSuportRepository.editSupport(this.support).then(function () {
        _this5.changeTracker.clearDataChanges(_this5.modalCtx);
        _this5.$alerts.success("Информация успешно сохранена");
      });
    }
  }]);
  return EditSupportController;
}(_netcityModalCtrl.NetCityModalController);
exports.EditSupportController = EditSupportController;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSupportMeasureController = void 0;
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
var EditSupportMeasureController = /*#__PURE__*/function (_NetCityModalControll) {
  EditSupportMeasureController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "measure", "$q", "$alerts", "individSuportRepository", "language", "appContext", "supportId"];
  _inherits(EditSupportMeasureController, _NetCityModalControll);
  var _super = _createSuper(EditSupportMeasureController);
  /*@ngInject*/
  function EditSupportMeasureController($scope, $uibModalInstance, changeTracker, $dialogs, measure, $q, $alerts, individSuportRepository, language, appContext, supportId) {
    var _this;
    _classCallCheck(this, EditSupportMeasureController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.measure = measure;
    _this.$q = $q;
    _this.$alerts = $alerts;
    _this.individSuportRepository = individSuportRepository;
    _this.language = language;
    _this.appContext = appContext;
    _this.supportId = supportId;
    _this.ready = false;
    _this.participiationEventTypes = ["Интеллектуальные", "Нравственные", "Профилактические", "Спортивные", "Профориентационные", "Патриотические", "Экологические", "Волонтерство"];
    _this.editMode = _this.measure && _this.measure.id > 0;
    _this.header = _this.editMode ? "Редактирование информации о мере поддержки" : "Добавление информации о мере поддержки";
    _this.init();
    return _this;
  }
  _createClass(EditSupportMeasureController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var promises = [];
      var loadMeasureTypes = this.individSuportRepository.getMeasureTypes().then(function (measureTypes) {
        _this2.measureTypes = measureTypes;
        //todo. фильтр типов мер по текущей роли 
      });

      promises.push(loadMeasureTypes);
      this.$q.when(promises).then(function () {
        _this2.ready = true;
      });
    }
  }, {
    key: "isEventsParticipation",
    value: function isEventsParticipation() {
      //todo. id
      return this.measure && this.measure.measureType && this.measure.measureType.name == 'Участие в мероприятиях';
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var message = this.editMode ? "Успешно обновлена информация о мере индивидуальной поддержки" : "Успешно добавлена информация о мере индивидуальной поддержки";
      var action = this.editMode ? this.individSuportRepository.editSupportMeasure(this.supportId, this.measure) : this.individSuportRepository.addSupportMeasure(this.supportId, this.measure);
      action.then(function (measure) {
        _this3.$alerts.success(message);
        _this3.$uibModalInstance.close(measure);
      });
    }
  }]);
  return EditSupportMeasureController;
}(_netcityModalCtrl.NetCityModalController);
exports.EditSupportMeasureController = EditSupportMeasureController;

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndividSuportRepository = void 0;
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
var IndividSuportRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(IndividSuportRepository, _BaseRepository);
  var _super = _createSuper(IndividSuportRepository);
  function IndividSuportRepository() {
    _classCallCheck(this, IndividSuportRepository);
    return _super.apply(this, arguments);
  }
  _createClass(IndividSuportRepository, [{
    key: "getSupport",
    value: function getSupport(id) {
      return this.$http.get("/webapi/individualsupport/", {
        params: {
          id: id
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "addSupport",
    value: function addSupport(support) {
      return this.$http.put("/webapi/individualsupport/", support).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSupport",
    value: function editSupport(support) {
      return this.$http.post("/webapi/individualsupport/", support).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSupportMeasures",
    value: function getSupportMeasures(supportId) {
      return this.$http.get("/webapi/individualsupport/".concat(supportId, "/measures")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "addSupportMeasure",
    value: function addSupportMeasure(supportId, measure) {
      return this.$http.put("/webapi/individualsupport/".concat(supportId, "/measures"), measure).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSupportMeasure",
    value: function editSupportMeasure(supportId, measure) {
      return this.$http.post("/webapi/individualsupport/".concat(supportId, "/measures"), measure).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteSupportMeasures",
    value: function deleteSupportMeasures(supportId, measureIds) {
      return this.$http["delete"]("/webapi/individualsupport/".concat(supportId, "/measures"), {
        params: {
          id: measureIds
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getMeasureTypes",
    value: function getMeasureTypes() {
      return this.$http.get("/webapi/individualsupport/measureTypes").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSupportReasons",
    value: function getSupportReasons() {
      return this.$http.get("/webapi/individualsupport/supportReasons").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSubjects",
    value: function getSubjects(studentId) {
      return this.$http.get("/webapi/individualsupport/".concat(studentId, "/subjects"), {
        params: {
          studentId: studentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAccessInfo",
    value: function getAccessInfo() {
      return this.$http.get("/webapi/individualsupport/accessinfo").then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return IndividSuportRepository;
}(_repository.BaseRepository);
exports.IndividSuportRepository = IndividSuportRepository;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditMeasureListComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(321));
var _editMeasureCtrl = __webpack_require__(509);
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditMeasureListController = /*#__PURE__*/function () {
  EditMeasureListController.$inject = ["appContext", "individSuportRepository", "$uibModal", "language", "$dialogs"];
  /*@ngInject*/
  function EditMeasureListController(appContext, individSuportRepository, $uibModal, language, $dialogs) {
    _classCallCheck(this, EditMeasureListController);
    this.appContext = appContext;
    this.individSuportRepository = individSuportRepository;
    this.$uibModal = $uibModal;
    this.language = language;
    this.$dialogs = $dialogs;
    this.measures = [];
    this.selection = new _selectable["default"]();
    this.state = {
      readOnly: this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arIndividualSupportMeasuresEditAll, Rights.arIndividualSupportMeasuresEditSelf])
    };
  }
  _createClass(EditMeasureListController, [{
    key: "$onInit",
    value: function $onInit() {
      if (!this.supportId) {
        throw "supportId is not defined";
      }
      this.loadMeasures();
    }
  }, {
    key: "loadMeasures",
    value: function loadMeasures() {
      var _this = this;
      return this.individSuportRepository.getSupportMeasures(this.supportId).then(function (measures) {
        _this.measures = measures;
      });
    }
  }, {
    key: "addMeasure",
    value: function addMeasure() {
      var _this2 = this;
      var _measure = {
        measureType: null,
        user: {
          id: this.appContext.userId
        },
        date: new Date().toISOString(),
        description: "",
        result: "",
        extraInfo: null
      };
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/individualsupport/editMeasure/template.html",
        controller: _editMeasureCtrl.EditSupportMeasureController,
        controllerAs: "ctrl",
        resolve: {
          supportId: function supportId() {
            return _this2.supportId;
          },
          measure: function measure() {
            return _measure;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.loadMeasures();
      });
    }
  }, {
    key: "editMeasure",
    value: function editMeasure(_measure2) {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/individualsupport/editMeasure/template.html",
        controller: _editMeasureCtrl.EditSupportMeasureController,
        controllerAs: "ctrl",
        resolve: {
          supportId: function supportId() {
            return _this3.supportId;
          },
          measure: function measure() {
            return angular.copy(_measure2);
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.loadMeasures();
      });
    }
  }, {
    key: "removeMeasure",
    value: function removeMeasure(measure) {
      var _this4 = this;
      //диалог для удаления
      this.$dialogs.confirmDelete("Вы действительно желаете удалить информацию о проведенном мероприятии?").then(function () {
        _this4.individSuportRepository.deleteSupportMeasures(_this4.supportId, [measure.id]).then(function () {
          _this4.selection.dropSelect();
          _this4.loadMeasures();
        });
      });
    }
  }, {
    key: "canEdit",
    value: function canEdit() {
      if (this.appContext.readOnly) {
        return false;
      }
      if (this.appContext.hasRights([Rights.arIndividualSupportMeasuresEditAll])) {
        return true;
      }
      if (this.appContext.hasRights([Rights.arIndividualSupportMeasuresEditSelf])) {
        var measure = this.selection.selected;
        return measure && measure.user.id == this.appContext.userId;
      }
      return false;
    }
  }]);
  return EditMeasureListController;
}();
var EditMeasureListComponent = {
  templateUrl: "/static/dist/app/school/individualsupport/editMeasure/editMeasureList.html",
  controller: EditMeasureListController,
  bindings: {
    supportId: '=supportid'
  }
};
exports.EditMeasureListComponent = EditMeasureListComponent;

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDateRangeComponent = exports.EditDateInputComponent = void 0;
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseDateInputController = /*#__PURE__*/function () {
  BaseDateInputController.$inject = ["$scope", "$element", "language"];
  /*@ngInject*/
  function BaseDateInputController($scope, $element, language) {
    _classCallCheck(this, BaseDateInputController);
    this.$scope = $scope;
    this.$element = $element;
    this.language = language;
  }
  _createClass(BaseDateInputController, [{
    key: "$onInit",
    value: function $onInit() {
      this.options = this.options || {};
      // элемент, содержащий календарь
      this.setDatePickerContainer();
      // инициализация календаря
      this.initDatepickerComponent(this.datePickerContainer, this.options);
      // инициализация инпутов календаря
      this.setInputValues();
      // построение событий на инпутах
      this.buildEvents();
    }
  }, {
    key: "setDatePickerContainer",
    value: function setDatePickerContainer() {
      this.datePickerContainer = this.$element.find(".input-group");
    }
  }, {
    key: "initDatepickerComponent",
    value: function initDatepickerComponent(component, options) {
      dateInput.initDateInput(component, options.calendarMinDate || new Date(1753, 1, 1), options.calendarMaxDate || null, options.calendarSettings || null, options.datePickerOptions || null, true);
    }
  }, {
    key: "setInputValues",
    value: function setInputValues() {}
  }, {
    key: "buildEvents",
    value: function buildEvents() {}
  }, {
    key: "changeDate",
    value: function changeDate(event) {
      var target = event.target;
      if (this.focused(target)) {
        return;
      }
      var date = dateUtils.str2date(target.value);
      var nsDateModel = this.getNsDateModel(target);
      if (date) {
        this.setNsDateModelValue(nsDateModel, date.toISOString());
      } else {
        this.setNsDateModelValue(nsDateModel, null);
        target.$invalid = true;
      }
      this.$scope.$apply();
      if (this.dateChange && typeof this.dateChange === "function") {
        this.dateChange();
      }
    }
  }, {
    key: "focused",
    value: function focused(target) {
      var inputElement = document.activeElement;
      if (inputElement) {
        return inputElement.name === target.name;
      }
      return false;
    }
  }, {
    key: "watch",
    value: function watch(element, newVal) {
      if (newVal) {
        var strDate = dateUtils.date2str(new Date(newVal));
        element.value = strDate;
      } else {
        element.value = null;
      }
    }
  }, {
    key: "getNsDateModel",
    value: function getNsDateModel(input) {
      return input.getAttribute("ns-date-model");
    }
  }, {
    key: "getNsDateModelValue",
    value: function getNsDateModelValue(nsDateModel) {
      return this.$scope.$eval(nsDateModel);
    }
  }, {
    key: "setNsDateModelValue",
    value: function setNsDateModelValue(nsDateModel, newVal) {
      this.$scope.$eval("".concat(nsDateModel, " = newVal"), {
        newVal: newVal
      });
    }
  }]);
  return BaseDateInputController;
}();
var EditDateRangeController = /*#__PURE__*/function (_BaseDateInputControl) {
  EditDateRangeController.$inject = ["$scope", "$element", "language"];
  _inherits(EditDateRangeController, _BaseDateInputControl);
  var _super = _createSuper(EditDateRangeController);
  /*@ngInject*/
  function EditDateRangeController($scope, $element, language) {
    var _this;
    _classCallCheck(this, EditDateRangeController);
    _this = _super.call(this, $scope, $element, language);
    _this.$scope = $scope;
    _this.$element = $element;
    _this.language = language;
    _this.inputs = _this.$element.find("input");
    return _this;
  }
  _createClass(EditDateRangeController, [{
    key: "setInputValues",
    value: function setInputValues() {
      var _this2 = this;
      this.inputs.toArray().map(function (input) {
        // модель
        var nsDateModel = _this2.getNsDateModel(input);
        // значение модели
        var date = _this2.getNsDateModelValue(nsDateModel);
        if (date) {
          var strDate = dateUtils.date2str(new Date(date));
          var element = angular.element(input);
          var elementDatepicker = _this2.getElementDatePicker(element);
          if (elementDatepicker) {
            elementDatepicker.setDate(strDate);
          }
        }
      });
    }
  }, {
    key: "getElementDatePicker",
    value: function getElementDatePicker(element) {
      return element.data().datepicker || element.parent().data().datepicker;
    }
  }, {
    key: "buildEvents",
    value: function buildEvents() {
      var _this3 = this;
      var changeDateHandler = this.changeDate.bind(this);
      this.inputs.on("changeDate", changeDateHandler);
      this.inputs.on("blur", changeDateHandler);
      this.inputs.toArray().map(function (input) {
        // модель
        var nsDateModel = _this3.getNsDateModel(input);
        _this3.$scope.$watch(nsDateModel, function (newVal) {
          return _this3.watch(input, newVal);
        });
      });
    }
  }]);
  return EditDateRangeController;
}(BaseDateInputController);
var EditDateRangeComponent = {
  template: "\n\t\t<div class=\"input-daterange input-group date\">\n\t\t\t<input track-changes type=\"text\" class=\"input-md form-control\" name=\"start\" ns-date-model=\"$ctrl.startDate\"/>\n\t\t\t<span class=\"input-group-addon\">{{$ctrl.language.Generic.Filter.kIntervalTo}}</span>\n\t\t\t<input track-changes type=\"text\" class=\"input-md form-control\" name=\"end\" ns-date-model=\"$ctrl.endDate\"/>\n\t\t</div>",
  controller: EditDateRangeController,
  bindings: {
    startDate: "=",
    endDate: "=",
    dateChange: "&?",
    options: "="
  }
};
exports.EditDateRangeComponent = EditDateRangeComponent;
var EditDateInputController = /*#__PURE__*/function (_BaseDateInputControl2) {
  EditDateInputController.$inject = ["$scope", "$element", "language"];
  _inherits(EditDateInputController, _BaseDateInputControl2);
  var _super2 = _createSuper(EditDateInputController);
  /*@ngInject*/
  function EditDateInputController($scope, $element, language) {
    var _this4;
    _classCallCheck(this, EditDateInputController);
    _this4 = _super2.call(this, $scope, $element, language);
    _this4.name = _this4.name || "date";
    _this4.isRequired = _this4.isRequired || false;
    return _this4;
  }
  _createClass(EditDateInputController, [{
    key: "trackChanges",
    value: function trackChanges() {
      return !this.notrack;
    }
  }, {
    key: "buildEvents",
    value: function buildEvents() {
      var _this5 = this;
      var changeDateHandler = this.changeDate.bind(this);
      this.$element.find('div.input-group.date').on("changeDate", changeDateHandler);
      this.$element.find('input.date-input').on("blur", changeDateHandler);
      var changedDateInput = this.$element.find('input').get(0);
      var nsDateModel = this.getNsDateModel(changedDateInput);
      this.$scope.$watch(nsDateModel, function (newVal) {
        return _this5.watch(changedDateInput, newVal);
      });
    }
  }, {
    key: "changeDate",
    value: function changeDate(event) {
      var changedDateInput = this.getChangedDateInput(event.target);
      if (this.focused(changedDateInput)) {
        return;
      }
      var date = dateUtils.str2date(changedDateInput.value);
      var nsDateModel = this.getNsDateModel(changedDateInput);
      if (date) {
        this.setNsDateModelValue(nsDateModel, date.toISOString());
      } else {
        this.setNsDateModelValue(nsDateModel, null);
        changedDateInput.$invalid = true;
      }
      this.$scope.$apply();
      if (this.dateChange && typeof this.dateChange === "function") {
        this.dateChange();
      }
    }
  }, {
    key: "getChangedDateInput",
    value: function getChangedDateInput(target) {
      var targetElement = angular.element(target);
      if (targetElement.is('input')) {
        return targetElement.get(0);
      }
      // если обработчик сработал на другом элементе, изменить нужно значение у инпута
      return targetElement.parent().find('input').get(0);
    }
  }]);
  return EditDateInputController;
}(BaseDateInputController);
var EditDateInputComponent = {
  template: "\n\t\t<div class=\"input-group date\">\n\t\t\t<input track-changes=\"{{$ctrl.trackChanges()}}\" type=\"text\" class=\"form-control date-input\" name=\"$ctrl.name\" size=\"11\" maxlength=\"10\" ns-date-model=\"$ctrl.startDate\" ng-required=\"$ctrl.isRequired\">\n\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t<button title=\"\" type=\"button\" class=\"btn btn-primary\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-calendar\"></span>\n\t\t\t\t</button>\n\t\t\t</span>\n\t\t</div>",
  selector: "editDateInput",
  controller: EditDateInputController,
  bindings: {
    startDate: "=date",
    options: "=?",
    dateChange: "&?",
    name: "=?",
    isRequired: "=?",
    notrack: "=?" // необходимость отслеживания изменений
  }
};
exports.EditDateInputComponent = EditDateInputComponent;

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