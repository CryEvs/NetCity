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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(6);
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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(12);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(5);
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
/* 13 */,
/* 14 */
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
/* 15 */
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsRepository = void 0;
var _baseRepository = __webpack_require__(22);
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
var RoomsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(RoomsRepository, _BaseRepository);
  var _super = _createSuper(RoomsRepository);
  function RoomsRepository() {
    _classCallCheck(this, RoomsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(RoomsRepository, [{
    key: "getRooms",
    value: function getRooms(detailed, studyOnly, expand) {
      var params = {
        detailed: null,
        studyOnly: null
      };
      if (detailed) {
        params.detailed = true;
      }
      if (studyOnly) {
        params.studyOnly = true;
      }
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/rooms", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "create",
    value: function create(room) {
      return this.$http.put("/webapi/rooms", room).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "findOrCreate",
    value: function findOrCreate(request) {
      return this.$http.put("/webapi/rooms/find-or-create-room", request).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "merge",
    value: function merge(mergeRoomId, roomId) {
      var params = {
        mergeRoomId: mergeRoomId,
        roomId: roomId
      };
      return this.$http.post("/webapi/rooms/integrated", null, {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "getUsed",
    value: function getUsed(ids) {
      var params = {
        id: ids
      };
      return this.$http.get("/webapi/rooms/used", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(ids) {
      var params = {
        id: ids
      };
      return this.$http["delete"]("/webapi/rooms", {
        params: params
      }).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "save",
    value: function save(rooms) {
      return this.$http.post("/webapi/rooms", rooms).then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }, {
    key: "getYearFormationMode",
    value: function getYearFormationMode() {
      return this.$http.get("/webapi/years/yearFormationMode").then(this.handleResponseSimple)["catch"](this.handleError);
    }
  }]);
  return RoomsRepository;
}(_baseRepository.BaseRepository);
exports.RoomsRepository = RoomsRepository;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(12);
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
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(22);
var _repository = __webpack_require__(11);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearsRepository = void 0;
var _repository = __webpack_require__(11);
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
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
/* 57 */
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
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventComponent = void 0;
var _events = __webpack_require__(66);
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _filterpanel = __webpack_require__(67);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var EditEventController = /*#__PURE__*/function () {
  EditEventController.$inject = ["$scope", "eventsRepository", "roomsRepository", "$alerts", "changeTracker", "$longWork", "dateUtils", "appContext", "$log", "yearsRepository", "language"];
  /*@ngInject*/
  function EditEventController($scope, eventsRepository, roomsRepository, $alerts, changeTracker, $longWork, dateUtils, appContext, $log, yearsRepository, language) {
    _classCallCheck(this, EditEventController);
    this.$scope = $scope;
    this.eventsRepository = eventsRepository;
    this.roomsRepository = roomsRepository;
    this.$alerts = $alerts;
    this.changeTracker = changeTracker;
    this.$longWork = $longWork;
    this.dateUtils = dateUtils;
    this.appContext = appContext;
    this.$log = $log;
    this.yearsRepository = yearsRepository;
    this.language = language;
    this.noRoom = {
      id: null,
      roomname: this.language.Generic.Common.kNo
    };
    this.periodicity = {
      "true": this.language.Generic.SetupSchoolCalendar.kYearPeriod,
      "false": this.language.Generic.SetupSchoolCalendar.kNotPeriodicity
    };
    this.readonly = appContext.readOnly;
  }
  _createClass(EditEventController, [{
    key: "withTime",
    get: function get() {
      return this.model.eventType === _events.EventType.ClassEvents || this.model.eventType === _events.EventType.SchoolEvent;
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.ctrl = this;
      this.model.periodicity = this.model.periodicity || false;
      this.room = this.model.room || this.noRoom;
      this.predefined = this.predefined || {};
      if (this.model) {
        if (this.model.startTime) {
          this.startTime2 = angular.copy(this.model.startTime);
          this.endTime2 = angular.copy(this.model.endTime);
          this.model.startTime = this.dateUtils.setTimeOffset(this.model.startTime, 0);
          this.model.endTime = this.dateUtils.setTimeOffset(this.model.endTime, 0);
        } else if (this.predefined.eventDate) {
          this.startTime2 = this.dateUtils.asUTCDate(angular.copy(this.predefined.eventDate));
          this.endTime2 = this.dateUtils.asUTCDate(angular.copy(this.predefined.eventDate));
          this.model.startTime = this.dateUtils.asUTCDate(angular.copy(this.predefined.eventDate));
          this.model.endTime = this.dateUtils.asUTCDate(angular.copy(this.predefined.eventDate));
        } else {
          var tmpDate = this.dateUtils.asUTCDate(new Date());
          this.startTime2 = angular.copy(tmpDate);
          this.endTime2 = angular.copy(tmpDate);
        }
      }
      this.yearLimits = this.predefined.yearLimits;
      this.eventTypeListEnabled = this.predefined.eventTypeListEnabled && this.appContext.hasRights([Rights.arPostSchoolEvent]);
      var promises = [];
      if (!this.yearLimits) {
        var getYearInfo = this.yearsRepository.getYearInfo().then(function (yearInfo) {
          _this.yearLimits = new _filterpanel.DateRange(null, null);
          _this.yearLimits.startDate = _this.dateUtils.asUTCDate(yearInfo.startDate);
          _this.yearLimits.endDate = _this.dateUtils.asUTCDate(yearInfo.endDate);
        });
        promises.push(getYearInfo);
      }
      var prepareEventTypes = this.eventsRepository.getEventsTypes().then(function (eventsTypes) {
        //убираем не внутришкольные события
        _this.eventsTypes = eventsTypes.filter(function (t) {
          return t.key !== _events.EventType.AwardEvents;
        });
        if (!_this.model.id && !_this.hasClassMgmPostClassEvent()) {
          _this.eventsTypes = _this.eventsTypes.filter(function (t) {
            return t.key !== _events.EventType.ClassEvents;
          });
        }
        var predefinedEvent = _this.eventsTypes.filter(function (o) {
          return o.id == _this.predefined.eventTypeId;
        })[0];
        var predefinedEventKey = predefinedEvent && predefinedEvent.key;
        _this.model.eventType = _this.model.eventType || predefinedEventKey || _this.eventsTypes[0].key;
        _this.$log.debug("event types", _this.eventsTypes);
      });
      promises.push(prepareEventTypes);
      Promise.all(promises).then(function () {
        return _this.onChangeType();
      }).then(function () {
        _this.ready = true;
        _this.changeTracker.clearDataChanges($("div.modal.fade"));
        //после первого получения, добавляем отслеживание изменений
        var permissionWatcher = function permissionWatcher(newValue, oldValue) {
          if (newValue !== oldValue) {
            _this.getPermission();
          }
        };
        _this.$scope.$watch(function () {
          return _this.model["class"];
        }, permissionWatcher);
        _this.$scope.$applyAsync();
        _this.onReady();
      });
    }
  }, {
    key: "initDateLimits",
    value: function initDateLimits() {
      this.dateLimits = {
        start: angular.copy(this.yearLimits.startDate),
        end: angular.copy(this.yearLimits.endDate)
      };
      if (this.withTime) {
        this.dateLimits.end.setHours(23, 59);
      }
      var startDate,
        endDate = null;
      if (this.yearLimits) {
        startDate = this.dateUtils.date2str(this.yearLimits.startDate);
        endDate = this.dateUtils.date2str(this.yearLimits.endDate);
      }
      this.dateInvalidMessage = "".concat(this.language.Generic.Common.kEnterDateInFormat, " \n\t\t\t").concat(this.dateUtils.getLocaleFormat(), " \n\t\t\t").concat(this.language.Generic.Common.kInRange, " \n\t\t\t").concat(this.language.Generic.Calendar.kFrom, " \n\t\t\t").concat(startDate, " \n\t\t\t").concat(this.language.Generic.Calendar.kTo, " \n\t\t\t").concat(endDate);
    }
  }, {
    key: "isDateOnly",
    value: function isDateOnly() {
      return [_events.EventType.Vacations, _events.EventType.Holidays].indexOf(this.model.eventType) >= 0;
    }
  }, {
    key: "startDateName",
    value: function startDateName() {
      return this.isDateOnly() ? this.language.Generic.Common.kStartDate : this.language.Generic.Common.kStartTime;
    }
  }, {
    key: "endDateName",
    value: function endDateName() {
      return this.isDateOnly() ? this.language.Generic.Common.kEndDate : this.language.Generic.Common.kEndTime;
    }
  }, {
    key: "hasClassMgmPostClassEvent",
    value: function hasClassMgmPostClassEvent() {
      return this.appContext.hasAnyRight([Rights.arClassMgmPostClassEventAll, Rights.arClassMgmPostClassEventSelf]);
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      if (!date) return;
      date = this.dateUtils.asLocalDateTime(date);
      var options = {
        //era: 'long',
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
      };
      var hasTime = function hasTime(date) {
        return date.getHours() || date.getMinutes();
      };
      if (hasTime(date)) {
        angular.extend(options, {
          timezone: "UTC",
          hour: "numeric",
          minute: "numeric"
        });
      }
      return date.toLocaleString("ru", options);
    }
  }, {
    key: "hasError",
    value: function hasError(object) {
      return object.$invalid && (!object.$pristine || object.$displayErrors);
    }
  }, {
    key: "hasErrorClass",
    value: function hasErrorClass(object) {
      return {
        'has-error': this.hasError(object)
      };
    }
  }, {
    key: "getClasses",
    value: function getClasses() {
      var _this2 = this;
      var needClasses = [_events.EventType.ClassEvents].indexOf(this.model.eventType) > -1;
      if (!needClasses) return Promise.resolve();
      return this.eventsRepository.getEventsClasses().then(function (result) {
        _this2.classes = result || [];
        var predefinedClass = _this2.classes.filter(function (o) {
          return o.id == _this2.predefined.classId;
        })[0];
        _this2.model["class"] = _this2.model["class"] || predefinedClass;
        _this2.$log.debug("classes", _this2.classes);
        return _this2.classes;
      });
    }
  }, {
    key: "getRooms",
    value: function getRooms() {
      var _this3 = this;
      this.needRooms = [_events.EventType.SchoolEvent, _events.EventType.ClassEvents].indexOf(this.model.eventType) > -1;
      if (!this.needRooms || this.readonly) return Promise.resolve();
      var roomedEvent = this.model;
      var room = roomedEvent.room;
      return this.roomsRepository.getRooms().then(function (result) {
        _this3.rooms = [_this3.noRoom].concat(_toConsumableArray(result));
        _this3.$log.debug("rooms", _this3.rooms);
        if (room && room.id) {
          roomedEvent.room = _this3.rooms.find(function (r) {
            return r.id == room.id;
          });
        }
      });
    }
  }, {
    key: "getPermission",
    value: function getPermission() {
      var _this4 = this;
      if (this.appContext.readOnly) {
        this.readonly = true;
        return Promise.resolve();
      }
      if (!this.model.eventType) {
        return Promise.resolve();
      }
      var cls = this.model["class"];
      return this.eventsRepository.getPermission(this.model.eventType, cls && cls.id).then(function (response) {
        return _this4.readonly = response;
      }, function () {
        return _this4.readonly = true;
      });
    }
  }, {
    key: "onChangeType",
    value: function onChangeType() {
      var _this5 = this;
      this.initDateLimits();
      if (this.model.id && this.model.eventType && this.model.eventType == _events.EventType.ClassEvents && !this.hasClassMgmPostClassEvent()) {
        this.readonly = true;
      }
      return this.getClasses().then(function () {
        return _this5.getPermission();
      }).then(function () {
        return _this5.getRooms();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this6 = this;
      var valide = true;
      var setEndTime = false;
      if (this.model.startTime && !this.model.endTime) {
        this.model.endTime = angular.copy(this.model.startTime);
        if (this.endTime2 < this.startTime2) {
          this.endTime2 = angular.copy(this.startTime2);
        }
        setEndTime = true;
      }
      if (this.form.$error) {
        angular.forEach(this.form.$error, function (fields) {
          if (!setEndTime) {
            valide = false;
          }
          angular.forEach(fields, function (field) {
            if (setEndTime && field.$name != "endTime") {
              valide = false;
            }
            if (field.$setDirty) {
              field.$setDirty();
            }
          });
        });
      }
      if (!valide) {
        return Promise.reject("invalid");
      }
      // Решает проблему с "установки текущей даты" вместо пустого поля (неожиданное поведение форматтера DateInput`а)
      /*		if(!document.querySelector('#endTime #dateInputComponent').value){
                  $scope.model.endTime = $scope.model.startTime;
              }
      */
      var dropSeconds = function dropSeconds(date) {
        if (date.setSeconds) {
          date.setSeconds(0);
        }
        if (date.setMilliseconds) {
          date.setMilliseconds(0);
        }
      };
      dropSeconds(this.model.startTime);
      dropSeconds(this.model.endTime);
      if (this.withTime) {
        this.model.startTime = this.dateUtils.setTimeOffset(this.model.startTime, this.startTimeOffset);
        this.model.endTime = this.dateUtils.setTimeOffset(this.model.endTime, this.endTimeOffset);
      }
      if (this.model.endTime && this.model.startTime > this.model.endTime) {
        this.$alerts.error("".concat(this.language.Generic.Events.kErrEventStartDateBeforeEndDate));
        valide = false;
      }
      if (!valide) {
        return Promise.reject("invalid");
      }
      var copyEventModel = angular.copy(this.model);
      if (!copyEventModel.endTime) {
        copyEventModel.endTime = copyEventModel.startTime;
      }
      if (copyEventModel.eventType === _events.EventType.Holidays) {
        var holidayEvent = copyEventModel;
        holidayEvent.schoolYearId = parseInt(this.appContext.yearId);
      }
      if (this.needRooms) {
        var roomedEvent = copyEventModel;
        if (this.room.id == this.noRoom.id) {
          roomedEvent.room = null;
        } else {
          roomedEvent.room = this.room;
        }
      }
      var work;
      if (this.model.id) {
        work = this.eventsRepository.updateEvent(copyEventModel);
      } else {
        work = this.eventsRepository.createEvent(copyEventModel);
      }
      return this.$longWork.execute(work).then(function () {
        _this6.$longWork.close();
        _this6.$alerts.success([_events.EventType.Holidays, _events.EventType.Vacations].indexOf(copyEventModel.eventType) > -1 ? _this6.language.Generic.Common.kDataSaved : _this6.language.Generic.Events.kEventSaved);
      });
    }
  }, {
    key: "get",
    value: function get(source, key, keyColumn, resultColumn) {
      if (!source) return;
      var result = source.find(function (val) {
        return val[keyColumn] == key;
      });
      if (!result) return;
      return result[resultColumn];
    }
  }]);
  return EditEventController;
}();
var EditEventComponent = {
  selector: "editEvent",
  controller: EditEventController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/events/year-events/edit/editEvent.component.html",
  bindings: {
    readonly: "=?",
    model: "<event",
    ctrl: "=",
    predefined: "<",
    onReady: '&'
  }
};
exports.EditEventComponent = EditEventComponent;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventType = void 0;
var EventType;
exports.EventType = EventType;
(function (EventType) {
  EventType["Holidays"] = "Holidays";
  EventType["Vacations"] = "Vacations";
  EventType["ClassEvents"] = "ClassEvents";
  EventType["AwardEvents"] = "AwardEvents";
  EventType["SchoolEvent"] = "SchoolEvent";
})(EventType || (exports.EventType = EventType = {}));

/***/ }),
/* 67 */
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
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventsRegistryComponent = void 0;
var _filterpanel = __webpack_require__(67);
var _registry = __webpack_require__(70);
var _editEventModal = __webpack_require__(71);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EventsRegistryController = /*#__PURE__*/function () {
  EventsRegistryController.$inject = ["$scope", "pageContext", "language", "appContext", "eventsRepository", "yearsRepository", "changeTracker", "dateUtils", "$routeParams", "$longWork", "$uibModal", "$q"];
  /*@ngInject*/
  function EventsRegistryController($scope, pageContext, language, appContext, eventsRepository, yearsRepository, changeTracker, dateUtils, $routeParams, $longWork, $uibModal, $q) {
    var _this = this;
    _classCallCheck(this, EventsRegistryController);
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.language = language;
    this.appContext = appContext;
    this.eventsRepository = eventsRepository;
    this.yearsRepository = yearsRepository;
    this.changeTracker = changeTracker;
    this.dateUtils = dateUtils;
    this.$routeParams = $routeParams;
    this.$longWork = $longWork;
    this.$uibModal = $uibModal;
    this.$q = $q;
    this.yearLimits = null;
    this.initPage();
    this.contextReadonly = this.appContext.readOnly;
    this.readonly = this.contextReadonly;
    var addBtn = {
      id: "addBtn",
      title: language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        return _this.addEvent();
      }
    };
    var defaultFilterValues = {};
    if (this.$routeParams.eventType) {
      var eventType = this.$routeParams.eventType;
      defaultFilterValues.EventFilter = eventType;
    }
    this.registryInfo = {
      url: "/webapi/school/events/registry",
      filtersUrl: "/webapi/school/events/registry/filter",
      fieldDecorators: {
        "name": new _registry.LinkFieldDecorator(function (item) {
          return _this.editEvent(item);
        })
      },
      filtersValues: defaultFilterValues,
      buttons: [addBtn]
    };
    this.init();
    this.loadAny();
  }
  _createClass(EventsRegistryController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleEvents;
      this.pageContext.parent = null;
      this.pageContext.back = null;
    }
    // загрузка нужных сведений с Сервера
  }, {
    key: "loadAny",
    value: function loadAny() {
      var _this2 = this;
      var getYearInfo = this.yearsRepository.getYearInfo().then(function (yearInfo) {
        _this2.yearLimits = new _filterpanel.DateRange(null, null);
        _this2.yearLimits.startDate = _this2.dateUtils.asUTCDate(yearInfo.startDate);
        _this2.yearLimits.endDate = _this2.dateUtils.asUTCDate(yearInfo.endDate);
      });
      this.$q.all([getYearInfo]).then(function () {});
    }
  }, {
    key: "setTitle",
    value: function setTitle(eventType) {
      var titles = {
        1: this.language.SetupSchoolCalendar.kSchoolEvents,
        2: this.language.SetupSchoolCalendar.kClassEvents,
        3: this.language.Generic.SetupSchoolCalendar.kVacations,
        4: this.language.Generic.SetupSchoolCalendar.kHolidays
      };
      this.pageContext.title = titles[eventType] || this.pageContext.title;
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;
      $(document).on("EventFilter:change", function (event, newEventTypeValue, oldValue, filter) {
        var classId = _this3.getFilterById("ClassFilter");
        _this3.changeEventType(newEventTypeValue, classId);
      });
      $(document).on("ClassFilter:change", function (event, newClassIdValue, oldValue, filter) {
        var eventType = _this3.getFilterById("EventFilter");
        _this3.changeEventType(eventType, newClassIdValue);
      });
      this.$scope.$watch(function () {
        return _this3.readonly;
      }, function (readonlyValue, oldReadonlyValue) {
        if (readonlyValue === oldReadonlyValue) {
          return;
        }
        _this3.hideButtons();
      });
    }
  }, {
    key: "hideButtons",
    value: function hideButtons() {
      var buttons = $(".btn");
      var addButton = buttons.has(".glyphicon-plus-sign");
      var deleteButtons = buttons.has(".glyphicon-minus-sign");
      if (this.contextReadonly || this.readonly) {
        addButton.hide();
        deleteButtons.hide();
      } else {
        addButton.show();
        deleteButtons.show();
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      if (!this.readonly && this.yearLimits == null) {
        return;
      }
      this.openNewModal();
    }
  }, {
    key: "editEvent",
    value: function editEvent(event) {
      var _this4 = this;
      if (!this.readonly && this.yearLimits == null) {
        return;
      }
      if (!event && this.controller.selection.selected.length) {
        event = this.controller.selection.items[0];
      }
      if (event) {
        this.getEvent(event.id).then(function (event) {
          return _this4.openNewModal(event);
        });
      } else {
        this.openNewModal();
      }
    }
  }, {
    key: "getEvent",
    value: function getEvent(eventId) {
      var _this5 = this;
      var load = this.eventsRepository.getEvent(eventId).then(function (event) {
        event.periodicity = event.periodicity.toString();
        event.startTime = _this5.dateUtils.asUTCDateTime(event.startTime);
        event.endTime = _this5.dateUtils.asUTCDateTime(event.endTime);
        return event;
      });
      return this.$longWork.execute(load);
    }
  }, {
    key: "changeEventType",
    value: function changeEventType(eventType, classId) {
      var _this6 = this;
      this.hideButtons();
      if (classId == -1) {
        classId = null;
      }
      if (this.oldEventType == eventType && this.oldClassId == classId) {
        return;
      }
      this.oldEventType = eventType;
      this.oldClassId = classId;
      if (this.contextReadonly) {
        return;
      }
      this.eventsRepository.getPermission(eventType, classId).then(function (response) {
        _this6.readonly = response;
        _this6.controller.load();
      });
    }
  }, {
    key: "getFilterById",
    value: function getFilterById(filterId) {
      var fp = this.controller.filterInfo.filterPanel.getValue();
      var values = fp.getValues();
      return values[filterId];
    }
  }, {
    key: "openNewModal",
    value: function openNewModal(eventData) {
      var _this7 = this;
      var modal = this.$uibModal.open({
        templateUrl: _editEventModal.EditEventModalComponent.templateUrl,
        controller: _editEventModal.EditEventModalComponent.controller,
        controllerAs: _editEventModal.EditEventModalComponent.controllerAs,
        size: "md",
        resolve: {
          event: function event() {
            return eventData || {};
          },
          eventTypeId: function eventTypeId() {
            return _this7.getFilterById("EventFilter");
          },
          eventDate: function eventDate() {
            return null;
          },
          classId: function classId() {
            return _this7.getFilterById("ClassFilter");
          },
          changeTracker: function changeTracker() {
            return _this7.changeTracker;
          },
          yearLimits: function yearLimits() {
            return _this7.yearLimits;
          },
          eventTypeListEnabled: false
        }
      });
      modal.result
      //.then((result) => devDebug(result))
      .then(function () {
        return _this7.controller.load();
      });
    }
  }]);
  return EventsRegistryController;
}();
var EventsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: EventsRegistryController,
  controllerAs: "$ctrl"
};
exports.EventsRegistryComponent = EventsRegistryComponent;

/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventModalComponent = void 0;
var _netcityModalCtrl = __webpack_require__(14);
var _nsModal = __webpack_require__(15);
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
var EditEventModalController = /*#__PURE__*/function (_NetCityModalControll) {
  EditEventModalController.$inject = ["$scope", "changeTracker", "$dialogs", "$uibModalInstance", "language", "event", "eventTypeId", "classId", "yearLimits", "eventTypeListEnabled", "eventDate"];
  _inherits(EditEventModalController, _NetCityModalControll);
  var _super = _createSuper(EditEventModalController);
  /*@ngInject*/
  function EditEventModalController($scope, changeTracker, $dialogs, $uibModalInstance, language, event, eventTypeId, classId, yearLimits, eventTypeListEnabled, eventDate) {
    var _this;
    _classCallCheck(this, EditEventModalController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.event = event;
    _this.editCtrl = null;
    if (!(event && event.id)) {
      _this.header = language.Generic.SetupSchoolCalendar.kAddEvent;
    } else {
      _this.header = _this.readonly ? language.Generic.SetupSchoolCalendar.kViewEvent : language.Generic.SetupSchoolCalendar.kEditEvent;
      _this.$scope.$watch(function () {
        return _this.readonly;
      }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
          _this.header = newValue ? language.Generic.SetupSchoolCalendar.kViewEvent : language.Generic.SetupSchoolCalendar.kEditEvent;
        }
      });
    }
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      isEnabled: function isEnabled() {
        return _this.ready && !_this.readonly;
      },
      action: function action() {
        return _this.save();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.cancel();
      }
    }];
    _this.predefined = {
      eventTypeId: eventTypeId,
      classId: classId,
      yearLimits: yearLimits,
      eventTypeListEnabled: eventTypeListEnabled,
      eventDate: eventDate
    };
    return _this;
  }
  _createClass(EditEventModalController, [{
    key: "onReady",
    value: function onReady() {
      this.ready = true;
      this.$scope.$applyAsync();
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      this.editCtrl.save().then(function () {
        return _this2.$uibModalInstance.close();
      }, function () {});
    }
  }]);
  return EditEventModalController;
}(_netcityModalCtrl.NetCityModalController);
var EditEventModalComponent = {
  controller: EditEventModalController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/events/year-events/edit/editEvent.modal.component.html"
};
exports.EditEventModalComponent = EditEventModalComponent;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventPageComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _common = __webpack_require__(5);
var _commonLegacy = __webpack_require__(73);
var _filterpanel = __webpack_require__(67);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditEventPageController = /*#__PURE__*/function () {
  EditEventPageController.$inject = ["$scope", "eventsRepository", "dateUtils", "appContext", "$dialogs", "pageContext", "$location", "yearsRepository", "$window", "$http", "$appLoader", "$log", "$routeParams", "language"];
  /*@ngInject*/
  function EditEventPageController($scope, eventsRepository, dateUtils, appContext, $dialogs, pageContext, $location, yearsRepository, $window, $http, $appLoader, $log, $routeParams, language) {
    var _this = this;
    _classCallCheck(this, EditEventPageController);
    this.$scope = $scope;
    this.eventsRepository = eventsRepository;
    this.dateUtils = dateUtils;
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.pageContext = pageContext;
    this.$location = $location;
    this.yearsRepository = yearsRepository;
    this.$window = $window;
    this.$http = $http;
    this.$appLoader = $appLoader;
    this.$log = $log;
    this.$routeParams = $routeParams;
    this.language = language;
    this.editCtrl = null;
    this.pageContext.title = language.Generic.SetupSchoolCalendar.kAddEvent;
    this.pageContext.back = {
      history: true
    };
    this.hasValue = !!Number($routeParams.eventId);
    if (this.hasValue) {
      this.eventId = parseInt($routeParams.eventId);
    } else {
      this.eventDate = $routeParams.eventDate;
      this.eventType = $routeParams.eventType || $routeParams.EventType;
      this.eventClass = $routeParams["class"];
    }
    if (this.eventId > 0) {
      this.pageContext.title = this.readonly ? this.language.Generic.SetupSchoolCalendar.kViewEvent : this.language.Generic.SetupSchoolCalendar.kEditEvent;
      this.$scope.$watch(function () {
        return _this.readonly;
      }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
          _this.pageContext.title = newValue ? _this.language.Generic.SetupSchoolCalendar.kViewEvent : _this.language.Generic.SetupSchoolCalendar.kEditEvent;
        }
      });
    }
    this.init();
  }
  _createClass(EditEventPageController, [{
    key: "initPageTitle",
    value: function initPageTitle() {
      this.pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleEvents;
      if (this.appContext.hasAnyRight([Rights.arMoveBookEdit, Rights.arCreateCloseEditYear, Rights.arCreateEditTerm])) {
        this.pageContext.parent = {
          title: this.language.Generic.MenuFolders.kFNSchoolYearAndTerms,
          href: "/years/"
        };
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.predefined = {};
      var getYearInfo = this.yearsRepository.getYearInfo().then(function (yearInfo) {
        var yearLimits = new _filterpanel.DateRange(null, null);
        yearLimits.startDate = _this2.dateUtils.asUTCDate(yearInfo.startDate);
        yearLimits.endDate = _this2.dateUtils.asUTCDate(yearInfo.endDate);
        _this2.predefined.yearLimits = yearLimits;
      });
      var prepareEvent = this.initEvent();
      Promise.all([getYearInfo, prepareEvent]).then(function () {
        _this2.ready = true;
        _this2.$scope.$applyAsync();
      });
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this3 = this;
      if (this.eventId) {
        // load and show
        return this.eventsRepository.getEvent(this.eventId).then(function (event) {
          event.periodicity = event.periodicity.toString();
          event.startTime = _this3.dateUtils.asUTCDateTime(event.startTime);
          event.endTime = _this3.dateUtils.asUTCDateTime(event.endTime);
          _this3.$log.debug("edit", event);
          _this3.event = event;
        });
      } else {
        // empty event
        var event = {};
        if (this.eventDate) {
          var getDate = function getDate(val) {
            var date = _this3.dateUtils.asUTCDate(_this3.dateUtils.str2date(val));
            return date;
          };
          event.startTime = getDate(this.eventDate);
          event.endTime = getDate(this.eventDate);
        }
        event.periodicity = "false";
        this.$log.debug("create", event);
        this.predefined.eventTypeId = this.eventType;
        this.predefined.classId = this.eventClass;
        this.event = event;
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      var backInfo = this.pageContext.back;
      if (backInfo && backInfo.history) {
        //браузерный бэк
        if (this.$window.routeChanges > 1) {
          this.$window.history.back();
        } else {
          (0, _common.postTo)(document.referrer);
        }
        return;
      }
      var backHref = backInfo && backInfo.href || this.pageContext.parent && this.pageContext.parent.href;
      if (backHref) {
        if (backHref.indexOf(".asp") > 0) {
          //если указан href на asp страницу
          (0, _commonLegacy.checkForChanges)().then(function () {
            return (0, _common.postTo)(backHref);
          });
        } else {
          //если указан href - angular страницу
          this.$location.path(backHref);
          this.$scope.$apply();
        }
        return;
      }
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      this.editCtrl.save().then(function () {
        return _this4.leave();
      });
    }
  }, {
    key: "onEditReady",
    value: function onEditReady() {
      this.$appLoader.hide();
    }
  }, {
    key: "afterSaveHandler",
    value: function afterSaveHandler(model) {
      this.leave();
    }
  }, {
    key: "afterCancelHandler",
    value: function afterCancelHandler(reason) {
      this.leave();
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this5 = this;
      var confirm = this.language.Generic.SetupSchoolCalendar.kDeleteSingleEventConfirm;
      this.$dialogs.confirm(confirm).then(function () {
        var wait = _this5.$dialogs.wait(_this5.language.Generic.Common.kPerformedOperation);
        var data = {
          itemId: [_this5.$routeParams.eventId]
        };
        _this5.$http.post("/webapi/school/events/registry/command/del", null, {
          params: data
        }).then(function (response) {
          wait.close();
          var result = response.data;
          if (result.success) {
            _this5.$dialogs.message(result.message);
            _this5.leave();
          } else {
            _this5.$dialogs.error(result.message);
          }
        }, function (response) {
          _this5.$dialogs.error(response.data && response.data.message, _this5.language.Generic.Common.kErrCommandExecution);
          wait.close();
        });
      });
    }
  }]);
  return EditEventPageController;
}();
var EditEventPageComponent = {
  controller: EditEventPageController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/events/year-events/edit/editEvent.page.component.html"
};
exports.EditEventPageComponent = EditEventPageComponent;

/***/ }),
/* 73 */
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
var _extensionDeferred = _interopRequireDefault(__webpack_require__(74));
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
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInputDirective = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*@ngInject*/
var TimeInputDirective = function TimeInputDirective(dateUtils) {
  var linkFunk = function linkFunk($scope, element, attr, controller) {
    var timerid;
    var timer = function timer() {
      clearTimeout(timerid);
      var timeoutFunc = function timeoutFunc() {
        $scope.hour = $scope.hour || 0;
        $scope.minute = $scope.minute || 0;
        if (!$scope.model) {
          $scope.model = new Date();
        }
        // let time = ($scope.hour * 60 * 60 * 1000) + ($scope.minute * 60 * 1000);
        var deltaHours = $scope.hour - $scope.initHour;
        var deltaMinutes = $scope.minute - $scope.initMinute;
        //let deltaTime = (deltaHours * 60 * 60 * 1000) + (deltaMinutes * 60 * 1000);
        $scope.offset = $scope.hour * 60 * 60 * 1000 + $scope.minute * 60 * 1000;
        //$scope.model.setHours($scope.hour - $scope.tzOffset);
        //$scope.model.setMinutes($scope.minute);
        dateUtils.addTime($scope.model, deltaHours, deltaMinutes);
      };
      timerid = setTimeout(timeoutFunc, 250);
    };
    var range = function range(upperLimit, step) {
      var count = Math.floor(upperLimit / step);
      return _toConsumableArray(Array(count).keys()).map(function (i) {
        return i * step;
      })
      // `${i}` hack i.toString()
      .map(function (i) {
        return {
          id: i,
          value: "".concat(i).padStart(2, '0')
        };
      });
    };
    $scope.hours = range(24, 1);
    $scope.minutes = range(60, 5);
    $scope.changeHour = function () {
      timer();
    };
    $scope.changeMinute = function () {
      timer();
    };
    $scope.$watch("model", function (newValue) {
      $scope.tzOffset = newValue.getTimezoneOffset() / 60;
      if (newValue && newValue.getHours) {
        var localDate = angular.copy(newValue);
        dateUtils.addTime(localDate, $scope.tzOffset, 0);
        $scope.hour = localDate.getHours();
        $scope.minute = localDate.getMinutes();
        $scope.offset = $scope.hour * 60 * 60 * 1000 + $scope.minute * 60 * 1000;
        $scope.initHour = angular.copy($scope.hour);
        $scope.initMinute = angular.copy($scope.minute);
      }
      return newValue;
    });
  };
  return {
    restrict: "E",
    require: "ngModel",
    replace: false,
    scope: {
      model: "=ngModel",
      offset: "=offset"
    },
    link: linkFunk,
    templateUrl: "/static/dist/app/school/events/year-events/edit/timeInput.directive.html"
  };
};
TimeInputDirective.$inject = ["dateUtils"];
exports.TimeInputDirective = TimeInputDirective;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VacationsRepository = exports.EventsRepository = void 0;
var _baseRepository = __webpack_require__(22);
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
var VacationsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(VacationsRepository, _BaseRepository);
  var _super = _createSuper(VacationsRepository);
  function VacationsRepository() {
    _classCallCheck(this, VacationsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(VacationsRepository, [{
    key: "getClasses",
    value: function getClasses() {
      //устарело. использовать из classes.repository.ts
      return this.$http.get("/webapi/classes").then(function (response) {
        var classes = response.data;
        return classes;
      });
    }
  }, {
    key: "getVacations",
    value: function getVacations(used) {
      var params = {};
      if (typeof used == "boolean") {
        params.used = used;
      }
      return this.$http.get("/webapi/calendar/vacations", {
        params: params
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getClassesVacations",
    value: function getClassesVacations() {
      return this.$http.get("/webapi/calendar/vacations/classes").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "saveClassesVacations",
    value: function saveClassesVacations(classesVacations, classesReset) {
      var _this = this;
      var processing = this.$longWork.show();
      return this.$http.post("/webapi/calendar/vacations/classes", classesVacations).then(function (response) {
        if (response.data) {
          classesReset(classesVacations);
          processing.close();
          _this.$dialogs.message(language.Generic.Common.kDataSaved);
        }
      }, function (response) {
        processing.close();
        var msg = response.data.message || response.data.details;
        _this.$dialogs.error("<div style='overflow: auto; max-height: 400px; overflow-x: hidden;'>".concat(msg, "</div>"));
      });
    }
  }]);
  return VacationsRepository;
}(_baseRepository.BaseRepository);
exports.VacationsRepository = VacationsRepository;
var EventsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(EventsRepository, _BaseRepository2);
  var _super2 = _createSuper(EventsRepository);
  function EventsRepository() {
    _classCallCheck(this, EventsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(EventsRepository, [{
    key: "getEventsTypes",
    value: function getEventsTypes() {
      return this.$http.get("/webapi/events/types").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEventsClasses",
    value: function getEventsClasses() {
      return this.$http.get("/webapi/events/classes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEvents",
    value: function getEvents(filter) {
      return this.$http.get("/webapi/events/", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPagedEvents",
    value: function getPagedEvents(filter) {
      return this.$http.get("/webapi/events/get-paged-list", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEvent",
    value: function getEvent(eventId) {
      return this.$http.get("/webapi/events/".concat(eventId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createEvent",
    value: function createEvent(eventDto) {
      return this.$http.post("/webapi/events/", eventDto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "updateEvent",
    value: function updateEvent(eventDto) {
      return this.$http.put("/webapi/events", eventDto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteEvent",
    value: function deleteEvent(event) {
      return this.$http["delete"]("/webapi/events/" + event.id).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPermission",
    value: function getPermission(eventType, classId) {
      var options = {
        eventType: eventType
      };
      if (classId) options.classId = classId;
      return this.$http.post("/webapi/event/permission", null, {
        params: options
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return EventsRepository;
}(_baseRepository.BaseRepository);
exports.EventsRepository = EventsRepository;

/***/ }),
/* 77 */,
/* 78 */
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
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eventMembers = __webpack_require__(92);
var _emevents = __webpack_require__(93);
var _repositories = __webpack_require__(25);
var _editEventMember = __webpack_require__(96);
var _eventInfo = __webpack_require__(98);
var _editeventFiles = __webpack_require__(99);
var _editParticipation = __webpack_require__(104);
var _awardEventList = __webpack_require__(106);
var _eventMemberList = __webpack_require__(107);
var _editevent = __webpack_require__(109);
var _editEvent = __webpack_require__(65);
var _eventsRegistry = __webpack_require__(69);
var _editEventPage = __webpack_require__(72);
var _timeInput = __webpack_require__(75);
var _years = __webpack_require__(26);
var _repository = __webpack_require__(76);
var _rooms = __webpack_require__(21);
var _nationolymp = __webpack_require__(111);
var _module = angular.module("irtech.netcity.school.events", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/award-events/", _awardEventList.AwardEventListComponent).when("/award-events/:eventId/members", _eventMemberList.AwardEventMemberListComponent).when("/year-events/", _eventsRegistry.EventsRegistryComponent).when("/year-events/:eventId/edit", _editEventPage.EditEventPageComponent).when("/year-events/:eventType", _eventsRegistry.EventsRegistryComponent).otherwise({
    redirectTo: "/award-events/"
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
}).component(_eventMembers.EventMembersComponent.selector, _eventMembers.EventMembersComponent).component(_eventInfo.EventInfoComponent.selector, _eventInfo.EventInfoComponent).component(_editeventFiles.EditAwardEventFilesComponent.selector, _editeventFiles.EditAwardEventFilesComponent).component(_editParticipation.EventParticipationInfoComponent.selector, _editParticipation.EventParticipationInfoComponent).component(_editEvent.EditEventComponent.selector, _editEvent.EditEventComponent).directive("timeInput", _timeInput.TimeInputDirective).service("editEventMemberService", _editEventMember.EditEventMemberService).service("editAwardEventService", _editevent.EditAwardEventService).service("yearsRepository", _years.YearsRepository).service("roomsRepository", _rooms.RoomsRepository).service("eventsRepository", _repository.EventsRepository).service("awardEventsRepository", _emevents.AwardEventsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("eventMembersRepository", _emevents.EventMembersRepository).service("nationOlympRepository", _nationolymp.NationOlympRepository).config(config);

/***/ }),
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEventsRepository = exports.EventMembersRepository = exports.EmEventsRepository = exports.AwardEventsRepository = void 0;
var _repository = __webpack_require__(11);
var _model = __webpack_require__(94);
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayRange = exports.VisitForm = exports.UserEventViewModel = exports.SportTitle = exports.SportCategory = exports.RegistrationType = exports.ParticipiationForm = exports.OlympAppealStatus = exports.EventViewModel = exports.EventType = exports.EventResultsViewModel = exports.EventRemoveResult = exports.EventOrgModel = exports.EventMemberViewModel = exports.EventMemberTitle = exports.EventMemberExpand = exports.EventLevel = exports.AwardEventType = exports.AwardEventStatus = void 0;
var _references = __webpack_require__(95);
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventMemberService = exports.EditEventMemberComponent = void 0;
var _model = __webpack_require__(94);
var _searchSource = _interopRequireDefault(__webpack_require__(56));
var _netcityModalCtrl = __webpack_require__(14);
var _nsModal = __webpack_require__(15);
var Roles = _interopRequireWildcard(__webpack_require__(97));
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
/* 97 */
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventFilesComponent = void 0;
var _editEventAttachment = __webpack_require__(100);
var _emevents = __webpack_require__(93);
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditEventAttachmentComponent = void 0;
var FileSaver = _interopRequireWildcard(__webpack_require__(101));
var _netcityModalCtrl = __webpack_require__(14);
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
/* 101 */
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
} else if ( true && __webpack_require__(102) !== null && __webpack_require__(103) !== null) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventParticipationInfoComponent = void 0;
var _model = __webpack_require__(94);
var _references = __webpack_require__(95);
var _services = __webpack_require__(105);
var Roles = _interopRequireWildcard(__webpack_require__(97));
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventRefsHelper = void 0;
var _model = __webpack_require__(94);
var _references = __webpack_require__(95);
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwardEventListComponent = void 0;
var _references = __webpack_require__(95);
var _model = __webpack_require__(94);
var _selectable = _interopRequireDefault(__webpack_require__(78));
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _common = __webpack_require__(57);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AwardEventListController = /*#__PURE__*/function () {
  AwardEventListController.$inject = ["$alerts", "pageContext", "$dialogs", "$appLoader", "awardEventsRepository", "referencesRepository", "editAwardEventService", "language", "$location", "appContext", "settingsProvider"];
  /*@ngInject*/
  function AwardEventListController($alerts, pageContext, $dialogs, $appLoader, awardEventsRepository, referencesRepository, editAwardEventService, language, $location, appContext, settingsProvider) {
    var _this = this;
    _classCallCheck(this, AwardEventListController);
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.awardEventsRepository = awardEventsRepository;
    this.referencesRepository = referencesRepository;
    this.editAwardEventService = editAwardEventService;
    this.language = language;
    this.$location = $location;
    this.appContext = appContext;
    this.settingsProvider = settingsProvider;
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
    pageContext.clear();
    pageContext.title = language.Generic.MenuFolders.kFNAwardEvents;
    this.readonly = this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arPostAwardEvents]);
    this.data = {
      events: [],
      years: [],
      yearId: this.appContext.globalYearId,
      eventLevel: null,
      awardEventType: null,
      eventStatus: "All",
      refs: _references.References,
      awardEventTypes: _references.References.awardEventTypes,
      selection: new _selectable["default"](),
      awardEventStatus: null
    };
    var prepareEventTypes = this.settingsProvider.ServerSettings.SystemSettings.ModuleNationOlympiad().then(function (val) {
      if (!val || appContext.funcType != _common.FuncType.school) {
        _this.data.awardEventTypes = _this.data.awardEventTypes.filter(function (t) {
          return t.id != _model.AwardEventType.NationOlympiad;
        });
      }
    });
    var prepareYears = this.referencesRepository.getYears().then(function (years) {
      _this.data.years = years;
      if (!_this.data.yearId) {
        _this.data.yearId = _this.data.years[0].id;
      }
    });
    Promise.all([prepareEventTypes, prepareYears]).then(function () {
      _this.load();
    });
  }
  //создание мероприятия
  _createClass(AwardEventListController, [{
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
      this.editAwardEventService.add(settings).then(function () {
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
      this.editAwardEventService["delete"](event.id).then(function () {
        return _this4.load();
      });
    }
  }, {
    key: "isSchoolEvent",
    value: function isSchoolEvent(selectedEvent) {
      var _a, _b;
      return ((_b = (_a = selectedEvent.founder) === null || _a === void 0 ? void 0 : _a.school) === null || _b === void 0 ? void 0 : _b.id) == this.appContext.schoolId;
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
        awardEventStatus: this.data.awardEventStatus,
        awardEventType: this.data.awardEventType,
        eventType: _model.EventType.AwardEvents,
        page: this.paging.page,
        pageSize: this.paging.pageSize
      };
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
        _this5.data.selection.dropSelect();
        _this5.state.emptyData = _this5.data.events.length === 0;
        _this5.$appLoader.hide();
      });
    }
    //просмотр участников мероприятия
  }, {
    key: "viewEventMembers",
    value: function viewEventMembers(event) {
      this.$location.path("/award-events/".concat(event.id, "/members"));
    }
  }]);
  return AwardEventListController;
}();
var AwardEventListComponent = {
  controller: AwardEventListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/events/award-events/list/awardEventList.component.html"
};
exports.AwardEventListComponent = AwardEventListComponent;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwardEventMemberListComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _model = __webpack_require__(94);
var _references = __webpack_require__(95);
var _selectEventMembers = __webpack_require__(108);
var _registry = __webpack_require__(70);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var AwardEventMemberListController = /*#__PURE__*/function () {
  AwardEventMemberListController.$inject = ["pageContext", "$scope", "appContext", "$q", "$alerts", "editEventMemberService", "awardEventsRepository", "eventMembersRepository", "$uibModal", "$longWork", "$routeParams", "$dialogs", "$appLoader", "language"];
  /*@ngInject*/
  function AwardEventMemberListController(pageContext, $scope, appContext, $q, $alerts, editEventMemberService, awardEventsRepository, eventMembersRepository, $uibModal, $longWork, $routeParams, $dialogs, $appLoader, language) {
    _classCallCheck(this, AwardEventMemberListController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.$q = $q;
    this.$alerts = $alerts;
    this.editEventMemberService = editEventMemberService;
    this.awardEventsRepository = awardEventsRepository;
    this.eventMembersRepository = eventMembersRepository;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.language = language;
    this.state = {
      ready: false,
      registryReady: false
    };
    pageContext.title = "Список участников мероприятия";
    pageContext.parent = {
      title: language.Generic.MenuFolders.kFNAwardEvents,
      href: "/award-events"
    };
    pageContext.back = {
      history: true
    };
    this.readonly = this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arEditAwardEventMembers]);
    if (!$routeParams.eventId) {
      $dialogs.error("Неизвестный идентификатор мероприятия");
      return;
    }
    // this.filter = {
    // 	items: {
    // 		viewType: [
    // 			{ id: 1, title: 'Все участники' },
    // 			{ id: 2, title: 'Участники школы' }
    // 		],
    // 		eventMemberTitles: [{ id: "All", name: "Все" }].concat(References.eventMemberTitles)
    // 	},
    // 	selected: {
    // 		viewType: 1,
    // 		eventMemberTitle: "All"
    // 	}
    // };
    this.data = {
      search: {},
      refs: _references.References,
      eventId: $routeParams.eventId,
      event: null,
      curatorStudents: null
    };
    this.init();
  }
  _createClass(AwardEventMemberListController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var addButton, addListButton, editButton, removeButton, loadEvent, loadEventInfo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              addButton = {
                title: "Добавить участника",
                style: "btn-info",
                icon: "glyphicon glyphicon-plus-sign",
                action: function action() {
                  return _this.addMember();
                },
                hide: this.readonly,
                isEnabled: function isEnabled() {
                  return _this.canAddMembers();
                }
              };
              addListButton = {
                title: "Добавить участников",
                style: "btn-info",
                icon: "glyphicon glyphicon-plus-sign",
                action: function action() {
                  return _this.addMemberList();
                },
                hide: this.readonly,
                isEnabled: function isEnabled() {
                  return _this.canAddMembers();
                }
              };
              editButton = {
                title: this.language.Generic.Buttons.kEdit,
                isEnabled: function isEnabled() {
                  return _this.canEditSelectedMember();
                },
                selectionMode: _registry.SelectionMode.Single,
                action: function action() {
                  return _this.editMember(_this.controller.selection.selected[0]);
                },
                style: "btn-warning",
                icon: "glyphicon glyphicon-pencil"
              };
              removeButton = {
                title: this.language.Generic.Buttons.kRemove,
                isEnabled: function isEnabled() {
                  return _this.canEditSelectedMember();
                },
                selectionMode: _registry.SelectionMode.Single,
                action: function action() {
                  return _this.removeMember(_this.controller.selection.selected[0]);
                },
                style: "btn-danger",
                icon: "glyphicon glyphicon-minus-sign"
              };
              this.registryInfo = {
                url: "/webapi/events/".concat(this.data.eventId, "/members-registry/registry"),
                filtersUrl: "/webapi/events/".concat(this.data.eventId, "/members-registry/registry/filter"),
                buttons: [addButton, addListButton, editButton, removeButton],
                linkButtons: [],
                "export": true,
                registryStyles: {
                  table: "table-xs table-bright table-bright-hover",
                  filtersForm: "form-xs"
                },
                fieldDecorators: {
                  "birthDate": new _registry.DateDecorator()
                },
                filterPanelStyles: {
                  compact: true,
                  label: "col-md-4",
                  control: "col-md-8"
                },
                events: {
                  ready: function ready() {
                    _this.state.registryReady = true;
                    console.log("registry ready");
                  }
                },
                selectable: _registry.SelectionMode.Single,
                initialPageSize: 20
              };
              loadEvent = this.awardEventsRepository.getEvent(this.data.eventId).then(function (eventInfo) {
                _this.data.event = new _model.EventViewModel(eventInfo);
              });
              loadEventInfo = loadEvent.then(function () {
                return _this.awardEventsRepository.getEventFiles(_this.data.event.id);
              }).then(function (files) {
                _this.data.event.documents = files;
              });
              _context.next = 9;
              return loadEventInfo;
            case 9:
              addButton.hide = !this.canEditMembers;
              removeButton.hide = !this.canEditMembers;
              editButton.hide = !this.canEditMemberResults;
              this.$scope.$applyAsync();
              this.$appLoader.hide();
              this.state.ready = true;
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
    // filterMembers() {
    // 	this.data.viewMembers = this.data.members.filter((member) => {
    // 		let show = true;
    // 		if (this.filter.selected.viewType === 2) {
    // 			show = show && this.isSchoolStudent(member);
    // 		}
    // 		if (this.filter.selected.eventMemberTitle !== "All") {
    // 			show = show && (member.title && member.title.id === this.filter.selected.eventMemberTitle);
    // 		}
    // 		return show;
    // 	});
    // }
  }, {
    key: "isSchoolStudent",
    value: function isSchoolStudent(member) {
      return parseInt(this.appContext.schoolId) == member.organizationId;
    }
  }, {
    key: "canEditMembers",
    get: function get() {
      var _a;
      if (this.readonly) {
        return false;
      }
      return (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.canEditMembers;
    }
  }, {
    key: "canEditMemberResults",
    get: function get() {
      var _a;
      if (this.readonly) {
        return false;
      }
      return (_a = this.data.event) === null || _a === void 0 ? void 0 : _a.canEditMemberResults;
    }
  }, {
    key: "canEditSelectedMember",
    value: function canEditSelectedMember() {
      if (this.controller.selection.items.length == 0) {
        return false;
      }
      return this.canEditMember(this.controller.selection.items[0]);
    }
  }, {
    key: "canAddMembers",
    value: function canAddMembers() {
      var _a, _b, _c;
      var statusInfo = (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.id;
      return statusInfo != _model.AwardEventStatus.Completed && statusInfo != _model.AwardEventStatus.Canceled;
    }
  }, {
    key: "canEditMember",
    value: function canEditMember(member) {
      var _a, _b;
      if (((_b = (_a = this.data.event.place) === null || _a === void 0 ? void 0 : _a.school) === null || _b === void 0 ? void 0 : _b.id) == this.appContext.schoolId) {
        return true;
      }
      if (this.isSchoolStudent(member)) {
        return true;
      }
      return false;
    }
  }, {
    key: "addMemberList",
    value: function addMemberList() {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        template: _selectEventMembers.SelectEventMembersComponent.template,
        controller: _selectEventMembers.SelectEventMembersComponent.controller,
        controllerAs: _selectEventMembers.SelectEventMembersComponent.controllerAs,
        backdrop: "static",
        size: "lg",
        resolve: {
          eventId: function eventId() {
            return _this2.data.eventId;
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.controller.load();
      });
    }
    //добавить участника
  }, {
    key: "addMember",
    value: function addMember() {
      var _this3 = this;
      var settings = {
        event: this.data.event,
        school: {
          id: this.appContext.schoolId
        }
      };
      this.editEventMemberService.edit(settings).then(function () {
        return _this3.controller.load();
      });
    }
    //редактировать участника
  }, {
    key: "editMember",
    value: function editMember(member) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var work, memberDto, settings;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.canEditMember(member)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              work = this.eventMembersRepository.getEventMember(this.data.eventId, member.id, [_model.EventMemberExpand.Files, _model.EventMemberExpand.Organization]);
              _context2.next = 5;
              return this.$longWork.execute(work);
            case 5:
              memberDto = _context2.sent;
              settings = {
                eventMemberId: member.id,
                school: memberDto.organization,
                user: memberDto.user,
                event: this.data.event,
                participationInfo: new _model.EventMemberViewModel(memberDto, this.data.event.isNationOlympiad)
              };
              _context2.next = 9;
              return this.editEventMemberService.edit(settings);
            case 9:
              this.controller.load();
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
    //удалить участника
  }, {
    key: "removeMember",
    value: function removeMember(member) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this4 = this;
        var work;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.isSchoolStudent(member)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _context3.next = 4;
              return this.$dialogs.confirmDelete("Вы действительно желаете удалить участника?");
            case 4:
              work = this.eventMembersRepository.removeEventMember(this.data.event.id, member.id).then(function () {
                return _this4.controller.load();
              });
              _context3.next = 7;
              return this.$longWork.execute(work);
            case 7:
              this.$longWork.close();
              this.$alerts.success("Участник успешно удалён");
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }]);
  return AwardEventMemberListController;
}();
var AwardEventMemberListComponent = {
  templateUrl: "/static/dist/app/school/events/award-events/members/eventMemberList.component.html",
  controller: AwardEventMemberListController,
  controllerAs: "ctrl"
};
exports.AwardEventMemberListComponent = AwardEventMemberListComponent;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectEventMembersComponent = void 0;
var _netcityModalCtrl = __webpack_require__(14);
var _registry = __webpack_require__(70);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var MarkAsSelectedDecorator = /*#__PURE__*/function () {
  function MarkAsSelectedDecorator(checkIsSelected) {
    _classCallCheck(this, MarkAsSelectedDecorator);
    this.checkIsSelected = checkIsSelected;
    this.template = "<span ng-if=\"!isSelected(row)\">{{content}}</span><del ng-if=\"isSelected(row)\">{{content}}</del>";
  }
  _createClass(MarkAsSelectedDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["isSelected"] = function (row) {
        return _this.checkIsSelected(row);
      };
    }
  }]);
  return MarkAsSelectedDecorator;
}();
var SelectEventMembersController = /*#__PURE__*/function (_NetCityModalControll) {
  SelectEventMembersController.$inject = ["$scope", "$uibModalInstance", "$dialogs", "changeTracker", "language", "$longWork", "$alerts", "eventId", "eventMembersRepository"];
  _inherits(SelectEventMembersController, _NetCityModalControll);
  var _super = _createSuper(SelectEventMembersController);
  /*@ngInject*/
  function SelectEventMembersController($scope, $uibModalInstance, $dialogs, changeTracker, language, $longWork, $alerts, eventId,
  //private members: number[],
  eventMembersRepository) {
    var _this2;
    _classCallCheck(this, SelectEventMembersController);
    _this2 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this2.language = language;
    _this2.$longWork = $longWork;
    _this2.$alerts = $alerts;
    _this2.eventId = eventId;
    _this2.eventMembersRepository = eventMembersRepository;
    _this2.header = "Выбрать участников мероприятия";
    var checkIsSelected = function checkIsSelected(registryItem) {
      return registryItem.alreadyMember;
      //return this.members.indexOf(parseInt(registryItem.id)) > -1;
    };

    var checkSelection = function checkSelection(registryItem) {
      return _this2.controller.selection.items.map(function (x) {
        return +x.id;
      }).indexOf(+registryItem.id) > -1;
    };
    _this2.registryInfo = {
      url: "/webapi/events/".concat(_this2.eventId, "/select-members/registry"),
      filtersUrl: "/webapi/events/".concat(_this2.eventId, "/select-members/registry/filter"),
      buttons: [],
      linkButtons: [],
      "export": false,
      registryStyles: {
        table: "table-xs table-bright table-bright-hover",
        filtersForm: "form-xs"
      },
      fieldDecorators: {
        "lastName": new MarkAsSelectedDecorator(function (registryItem) {
          return checkIsSelected(registryItem);
        }),
        "birthDate": new _registry.DateDecorator()
      },
      filterPanelStyles: {
        compact: true,
        label: "col-md-4",
        control: "col-md-8"
      },
      selectable: _registry.SelectionMode.Multiple,
      rowClasses: {
        "already-member": checkIsSelected
      },
      selectableClick: function selectableClick(row) {
        if (checkIsSelected(row)) {
          return;
        }
        _this2.controller.selection.select(row);
      },
      initialPageSize: 20,
      newPageDontDropSelection: true,
      showSelectAll: true,
      selectAllRecordsTitle: "Выбрать учащихся на всех страницах",
      unselectAllRecordsTitle: "Отменить выделение",
      selectedRecordsTitle: "Выбрано учащихся"
    };
    var saveBtn = {
      title: _this2.language.Generic.Buttons.kAdd,
      "class": ["btn-primary"],
      action: function action() {
        return _this2.save();
      },
      isEnabled: function isEnabled() {
        var _a, _b;
        return _this2.ready && ((_a = _this2.controller) === null || _a === void 0 ? void 0 : _a.state.dataReady) && ((_b = _this2.controller) === null || _b === void 0 ? void 0 : _b.selection.items.length) > 0;
      },
      icon: "glyphicon glyphicon-plus-sign"
    };
    var closeBtn = {
      title: _this2.language.Generic.Buttons.kClose,
      action: function action() {
        return _this2.close();
      }
    };
    _this2.buttons = [saveBtn, closeBtn];
    _this2.$scope.$watch(function () {
      var _a, _b;
      return (_b = (_a = _this2.controller) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.initing;
    }, function (val) {
      if (val == false) {
        _this2.controller.selection.isSelected = function (val) {
          return _this2.controller.selection.items.find(function (x) {
            return +x.id == +val.id;
          });
        };
        _this2.controller.selection.select = function (val) {
          var current = _this2.controller.selection.items.find(function (x) {
            return +x.id == +val.id;
          });
          if (current) {
            _this2.controller.selection.items = _this2.controller.selection.items.filter(function (x) {
              return +x.id != +val.id;
            });
          } else {
            _this2.controller.selection.items.push(val);
          }
        };
        _this2.ready = true;
      }
    });
    return _this2;
  }
  //отмена
  _createClass(SelectEventMembersController, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var promises, success, _iterator, _step, _loop, selectedAmount, successCount;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              promises = [];
              if (!(this.controller.selection.selected.length == 0)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              success = [];
              _iterator = _createForOfIteratorHelper(this.controller.selection.selected);
              _context2.prev = 5;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var user, member, addPromise;
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      user = _step.value;
                      member = {
                        id: null,
                        user: user
                      };
                      addPromise = _this3.eventMembersRepository.addEventMember(_this3.eventId, member, false).then(function (member) {
                        return success.push(member.user);
                      }, function (err) {
                        console.log(member.user.lastName + ": " + err.data.message);
                        _this3.$alerts.error(member.user.lastName + ": " + err.data.message);
                      });
                      promises.push(addPromise);
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context2.next = 12;
                break;
              }
              return _context2.delegateYield(_loop(), "t0", 10);
            case 10:
              _context2.next = 8;
              break;
            case 12:
              _context2.next = 17;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t1 = _context2["catch"](5);
              _iterator.e(_context2.t1);
            case 17:
              _context2.prev = 17;
              _iterator.f();
              return _context2.finish(17);
            case 20:
              _context2.next = 22;
              return this.$longWork.execute(Promise.all(promises));
            case 22:
              selectedAmount = this.controller.selection.selected.length;
              this.controller.selection.dropSelect();
              successCount = success.length;
              this.controller.load();
              if (!successCount) {
                this.$alerts.info("Ни один участник не был добавлен");
              } else if (successCount != selectedAmount) {
                this.$alerts.info("Было добавлено " + successCount + " участников из " + selectedAmount + " выбранных");
              } else {
                this.$alerts.success("Успешно добавлено " + successCount + " участников");
              }
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee, this, [[5, 14, 17, 20]]);
      }));
    }
  }]);
  return SelectEventMembersController;
}(_netcityModalCtrl.NetCityModalController);
var SelectEventMembersComponent = {
  controller: SelectEventMembersController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\" class=\"select-event-members-component\">\n\t\t<content-pre-loader ng-if=\"!$ctrl.ready\"></content-pre-loader>\n\t\t<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\" ng-show=\"$ctrl.ready\"></registry>\n\t\t<div class=\"legend print-block\" ng-show=\"$ctrl.ready && !$ctrl.controller.state.loading\">\t\n\t\t\t<div>\n\t\t\t\t<p>\n\t\t\t\t\t<span class=\"legend-label\" style=\"background-color: #ffe074\"></span>\n\t\t\t\t\t<span class=\"legend-description\"> \u2014 \u0423\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</ns-modal>"
};
exports.SelectEventMembersComponent = SelectEventMembersComponent;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAwardEventService = exports.EditAwardEventComponent = void 0;
var _references = __webpack_require__(95);
var _model = __webpack_require__(94);
var _netcityModalCtrl = __webpack_require__(14);
var _emevents = __webpack_require__(93);
var _founders = __webpack_require__(110);
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
/* 110 */
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NationOlympRepository = void 0;
var _repository = __webpack_require__(11);
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

/***/ })
/******/ ]);