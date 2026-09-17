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
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
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

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(259);


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mainscreen = __webpack_require__(260);
//angular = require 'angular'
var _module = angular.module("irtech.netcity.school.main", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.otherwise(_mainscreen.MainScreenComponent);
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
}).filter('htmlToPlaintext', function () {
  return function (text) {
    var retText = text ? String(text).replace(/<[^>]+>/gm, '').trim() : '';
    return retText;
  };
}).filter('trusted', function ($sce) {
  return function (html) {
    return $sce.trustAsHtml(_.unescape(html));
  };
}).config(config);

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainScreenComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _common = __webpack_require__(6);
var _common2 = __webpack_require__(254);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MainScreenController = /*#__PURE__*/function () {
  function MainScreenController(pageContext, appContext, $scope, $http, $document, $location, $appLoader, settingsProvider, $alerts, $q, language) {
    _classCallCheck(this, MainScreenController);
    this.appContext = appContext;
    this.$scope = $scope;
    this.$http = $http;
    this.$document = $document;
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.settingsProvider = settingsProvider;
    this.$alerts = $alerts;
    this.$q = $q;
    this.language = language;
    this.ready = false;
    pageContext.title = language.Generic.MenuFolders.kMainScreen;
    this.userId = appContext.userId;
    this.page = pageContext;
    this.context = appContext;
    this.screenElementTypes = {
      diary: 1,
      announcements: 2,
      schedule: 3,
      activities: 4,
      forum: 5,
      mail: 6,
      ege: 7,
      avgMarkDynReport: 8,
      totalMarksReport: 9,
      parentInfoLetterReport: 10,
      parentInfoTotalReport: 11,
      events: 12,
      netschool: 14,
      sferum: 15 // сферум-плитка
    };

    this.data = {
      announcements: [],
      language: language,
      newMessagesAmount: null,
      lastAnnouncement: null,
      screenElements: {},
      studentTitle: this.appContext.hasRole(Roles.student) ? "обучающегося" : "своего ребёнка"
    };
    this.state = {
      newMessagesReady: false,
      lastAnnouncementReady: false,
      screenElementsReady: false,
      announcementsReady: false
    };
    this.ready = false;
    this.load();
  }
  _createClass(MainScreenController, [{
    key: "complementScreenElements",
    value: function complementScreenElements() {
      var _this = this;
      var emptyList = !Object.values(this.data.screenElements).length;
      return Object.values(this.screenElementTypes).map(function (item) {
        var _a;
        var element = _this.data.screenElements[item];
        var newElement = {
          screenElementType: item,
          order: (_a = element === null || element === void 0 ? void 0 : element.order) !== null && _a !== void 0 ? _a : 0,
          visible: element || emptyList ? true : false
        };
        return newElement;
      });
    }
  }, {
    key: "isExistsRight",
    value: function isExistsRight(screenElementType) {
      switch (screenElementType) {
        case this.screenElementTypes.diary:
          return this.appContext.hasAnyRight([Rights.arAssignmentsViewComplete]) && this.appContext.funcType !== 1;
        case this.screenElementTypes.announcements:
          return this.appContext.hasAnyRight([Rights.arAnnouncementView, Rights.arAnnouncementPost]);
        case this.screenElementTypes.schedule:
          return this.appContext.hasAnyRight([Rights.arCalendarViewSelf, Rights.arCalendarViewAll]);
        case this.screenElementTypes.activities:
          return this.appContext.hasAnyRight([Rights.arLAViewMaterials]) && this.appContext.funcType !== 1 && this.LaIntegrationCourses;
        case this.screenElementTypes.forum:
          return this.appContext.hasAnyRight([Rights.arForumSendReceive]);
        case this.screenElementTypes.mail:
          return this.appContext.hasAnyRight([Rights.arMessagesSendReceive]);
        case this.screenElementTypes.ege:
          return $("ul.navbar-nav > li > ul > li:contains('Результаты ГИА')").length > 0;
        case this.screenElementTypes.avgMarkDynReport:
          return this.appContext.hasAnyRight([Rights.arReportsViewForAssignedClass, Rights.arReportsForAllClasses, Rights.arReportsForAssignedClass]) && this.appContext.funcType !== 1;
        case this.screenElementTypes.totalMarksReport:
          return this.appContext.hasAnyRight([Rights.arReportsViewForAssignedClass, Rights.arReportsForAllClasses, Rights.arReportsForAssignedClass]) && this.appContext.funcType !== 1;
        case this.screenElementTypes.parentInfoLetterReport:
          return this.appContext.hasAnyRight([Rights.arReportsViewForAssignedClass, Rights.arReportsForAllClasses, Rights.arReportsForAssignedClass]);
        case this.screenElementTypes.parentInfoTotalReport:
          return this.appContext.hasAnyRight([Rights.arReportsViewForAssignedClass, Rights.arReportsForAllClasses, Rights.arReportsForAssignedClass]);
        case this.screenElementTypes.events:
          return this.appContext.funcType !== 1 && this.ModuleSchoolAwardEvents && this.appContext.hasAnyRight([Rights.arViewSelfAwardEvents]);
        case this.screenElementTypes.netschool:
          return this.MobileAppAdPage && this.appContext.funcType == 2;
        case this.screenElementTypes.sferum:
          return this.ModuleChats && this.appContext.funcType == 2;
      }
      return false;
    }
  }, {
    key: "isVisible",
    value: function isVisible(screenElementType) {
      var _a;
      return this.data.screenElements ? ((_a = this.data.screenElements[screenElementType]) === null || _a === void 0 ? void 0 : _a.visible) && this.isExistsRight(screenElementType) : false;
    }
  }, {
    key: "saveCheckMenuItems",
    value: function saveCheckMenuItems() {
      var elements = Object.values(this.data.screenElements).filter(function (x) {
        return x.visible;
      }).map(function (x) {
        return {
          order: x.order,
          screenElementType: x.screenElementType,
          visible: x.visible
        };
      });
      this.$http.post("/webapi/users/".concat(this.userId, "/mainscreen"), {
        mainScreenElements: elements
      });
    }
  }, {
    key: "invertCheckMenuItem",
    value: function invertCheckMenuItem(elementIndex) {
      this.data.screenElements[elementIndex].visible = !this.data.screenElements[elementIndex].visible;
      this.stop();
    }
    // Получение количества новых сообщений
  }, {
    key: "loadNewMessagesAmount",
    value: function loadNewMessagesAmount() {
      var _this2 = this;
      this.state.newMessagesReady = false;
      return this.$http.get("/webapi/mail/messages/unread-count").then(function (response) {
        _this2.data.newMessagesAmount = response.data;
        _this2.state.newMessagesReady = true;
        _this2.$scope.$applyAsync(function () {});
      })["catch"](function (response) {
        _this2.state.newMessagesReady = false;
        _this2.$alerts.error(response.data.message, response.data.details);
      });
    }
    // Получение последнего объявления
  }, {
    key: "loadLastAnnouncement",
    value: function loadLastAnnouncement() {
      var _this3 = this;
      this.state.newMessagesReady = false;
      return this.$http.get("/webapi/announcements", {
        params: {
          take: 2,
          fullVersion: false
        }
      }).then(function (response) {
        _this3.data.announcements = response.data;
        _this3.state.announcementsReady = true;
        _this3.$scope.$applyAsync(function () {});
      })["catch"](function (response) {
        _this3.state.announcementsReady = false;
        _this3.$alerts.error(response.data.message, response.data.details);
      });
    }
  }, {
    key: "loadScreenElements",
    value: function loadScreenElements() {
      var _this4 = this;
      this.state.newMessagesReady = false;
      var sortByOrder = function sortByOrder(a, b) {
        var result = 0;
        var index1 = a.id;
        var index2 = b.id;
        if (index1 && index2) {
          if (_this4.data.screenElements[+index1].order < _this4.data.screenElements[+index2].order) {
            result = -1;
          }
          if (_this4.data.screenElements[+index1].order > _this4.data.screenElements[+index2].order) {
            result = 1;
          }
        }
        return result;
      };
      return this.$http.get("/webapi/users/".concat(this.userId, "/mainscreen")).then(function (response) {
        _this4.data.screenElements = response.data ? _.indexBy(response.data, 'screenElementType') : response.data;
        var screenElements = _this4.complementScreenElements();
        _this4.data.screenElements = _.indexBy(screenElements, 'screenElementType');
        _this4.state.screenElementsReady = true;
        _this4.$scope.$applyAsync(function () {
          $(".sortable > .item").sort(sortByOrder).detach().appendTo($(".sortable"));
        });
      })["catch"](function (response) {
        _this4.state.screenElementsReady = false;
        _this4.$alerts.error(response.data.message, response.data.details);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this5 = this;
      _.each(_.filter($(".ui-sortable-handle"), function (item) {
        var _a;
        return (_a = _this5.data.screenElements[+$(item).prop("id")]) === null || _a === void 0 ? void 0 : _a.visible;
      }), function (item, index) {
        return _this5.data.screenElements[+item.id].order = index + 1;
      });
      this.saveCheckMenuItems();
    }
  }, {
    key: "openEvents",
    value: function openEvents() {
      (0, _common.postTo)("/angular/school/talents/studentevents/");
    }
  }, {
    key: "showChats",
    value: function showChats() {
      this.page.checkForChanges().then(function () {
        (0, _common.postTo)("/angular/school/chats");
      });
    }
  }, {
    key: "showAnnouncements",
    value: function showAnnouncements() {
      var _this6 = this;
      this.page.checkForChanges().then(function () {
        if (_this6.context.schoolId) {
          (0, _common.postTo)("/angular/school/announcements/");
        } else {
          (0, _common.postTo)("/angular/em/announcements/");
        }
      });
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this7 = this;
      $("body").addClass("bg-lightgray");
      $(".reports.totals.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/reports/studenttotalmarks");
      });
      $(".reports.infomail.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/reports/parentinfoletter");
      });
      $(".stat.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/reports/studentaveragemarkdyn");
      });
      $(".reports.totalinfo.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/reports/studenttotal");
      });
      $(".ege.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/gia/results/");
      });
      $(".mail.item").on("click", function () {
        sys.mail.inbox();
        return false;
      });
      $(".schedule.item").on("click", function () {
        (0, _common.postTo)("/angular/school/schedule/week/");
      });
      $(".journal.item").on("click", function () {
        (0, _common.postTo)("/angular/school/studentdiary/");
      });
      $(".courses.item").on("click", function () {
        (0, _common.postTo)("/angular/school/activities");
      });
      $(".ads-all.link").on("click", function () {
        _this7.showAnnouncements();
        return false;
      });
      $(document).on("click", ".item.ads .read-more", function () {
        _this7.showAnnouncements();
        return false;
      });
      $(".forum.item").on("click", function () {
        (0, _common2.openPopupWindow)("_forum", "/asp/Forum/Forum.asp", 950, 660);
        return false;
      });
      $(".netschool.item").on("click", function () {
        return (0, _common.postTo)("/angular/school/studentdiary/netschool-app?noNotice");
      });
      $(".sferum.item").on("click", function () {
        _this7.showChats();
        return false;
      });
      $(document).on('click', '.screen_menu .item_screenmenu.head', function (event) {
        $('.screen_menu').toggleClass('close open');
        //event.stopPropagation();
      });

      $(document).on('click', '.screen_menu label[for="item-data-1"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.announcements);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-2"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.mail);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-3"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.diary);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-4"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.schedule);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-5"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.activities);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-6"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.parentInfoLetterReport);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-11"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.parentInfoTotalReport);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-9"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.totalMarksReport);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-8"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.forum);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-7"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.ege);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-10"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.avgMarkDynReport);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-12"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.events);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-14"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.netschool);
        });
        event.stopPropagation();
      });
      $(document).on('click', '.screen_menu label[for="item-data-15"]', function (event) {
        _this7.$scope.$applyAsync(function () {
          _this7.invertCheckMenuItem(_this7.screenElementTypes.sferum);
        });
        event.stopPropagation();
      });
      var loadElements = this.loadScreenElements();
      var loadMessages = this.loadNewMessagesAmount();
      var loadAnnounce = this.loadLastAnnouncement();
      var prepareSettings = this.settingsProvider.ServerSettings.SystemSettings.LaIntegrationCourses().then(function (val) {
        return _this7.LaIntegrationCourses = val;
      });
      var prepareModuleCheck = this.settingsProvider.ServerSettings.SystemSettings.ModuleSchoolAwardEvents().then(function (val) {
        return _this7.ModuleSchoolAwardEvents = val;
      });
      var prepareMobileAppAdPage = this.settingsProvider.ServerSettings.SystemSettings.MobileAppAdPage().then(function (val) {
        _this7.MobileAppAdPage = val;
      });
      var prepareModuleChats = this.settingsProvider.ServerSettings.SystemSettings.ModuleChats().then(function (val) {
        _this7.ModuleChats = val;
      });
      this.$q.all([loadElements, loadMessages, loadAnnounce, prepareSettings, prepareModuleCheck, prepareMobileAppAdPage, prepareModuleChats]).then()["finally"](function () {
        return setTimeout(function () {
          return _this7.$appLoader.hide();
        }, 250);
      });
      $(".sortable").sortable({
        cursor: "move",
        revert: true,
        helper: 'clone',
        placeholder: "ui-state-highlight",
        //   delay: 150,
        //   distance: 5,
        scroll: true,
        scrollSensitivity: 100,
        opacity: 0.7,
        tolerance: "pointer",
        stop: function stop() {
          return _this7.stop();
        }
      });
    }
  }]);
  return MainScreenController;
}();
var MainScreenComponent = {
  controller: MainScreenController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/main/index/mainscreen.component.html"
};
exports.MainScreenComponent = MainScreenComponent;

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