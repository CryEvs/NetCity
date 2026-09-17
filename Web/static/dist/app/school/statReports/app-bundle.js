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
/******/ 	return __webpack_require__(__webpack_require__.s = 288);
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

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(289);


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = angular.module("irtech.netcity.school.statreports", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "netcity.helpers", "netcity.validation", "netcity.indicators.directives", "uikit.controls.controllers", "uikit.controls", "irtech.netcity.ui-components", "irtech.netcity.em.statreports.common"]);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
_module.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/fill/", {
    templateUrl: "/static/dist/app/school/statreports/fill/template.html",
    controller: "FillIndicators.View.School"
  }).otherwise({
    redirectTo: "/fill/"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
}).run(function ($rootScope, $appLoader) {
  $rootScope.$on("$routeChangeSuccess", function () {
    $appLoader.hide();
  });
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
angular.module("irtech.netcity.school.statreports").factory("fillIndicatorsRepositorySchool", function (indicatorsRepository) {
  var baseRep = indicatorsRepository.educInstIndicators;
  return {
    baseRep: indicatorsRepository.educInstIndicators,
    get: function get(indicatorGroupId) {
      return baseRep.get(indicatorGroupId);
    },
    save: function save(indicatorValues, groupIndicatorId) {
      return baseRep.saveIndicatorValues(indicatorValues, groupIndicatorId);
    },
    approve: function approve(arrIndicatorGroups) {
      return baseRep.approveIndicatorGroups(arrIndicatorGroups);
    },
    getIndicatorGroups: function getIndicatorGroups() {
      return baseRep.getGroups();
    },
    getIndicatorValues: function getIndicatorValues(indicatorGroupId) {
      return baseRep.getIndicatorValues(indicatorGroupId);
    },
    getCalculatedIndicatorValues: function getCalculatedIndicatorValues(indicatorGroupId) {
      return baseRep.getCalculatedIndicatorValues(indicatorGroupId);
    }
  };
}).controller("FillIndicators.View.School", function (appContext, $scope, $alerts, $dialogs, $errorHandler, $collectionHelper, $controller, fillIndicatorsRepositorySchool) {
  $scope.$parent.page = {
    parent: {
      title: "Статистическая отчетность",
      href: "/angular/school/statforms/",
      //href: "/asp/Reports/StatReports/StatReports.asp?AT=" + appContext.at,
      postTo: true
    },
    title: "Заполнение отчетов вышестоящих организаций"
    //back: {
    //	href: "/asp/Reports/StatReports/StatReports.asp?AT=" + appContext.at
    //}
  };

  $scope.state = {
    hasFillAccess: _.contains(appContext.rights, Rights.arFillStatReports)
  };

  //наследование от базового контроллера
  $controller("FillIndicators.View.Common", {
    $scope: $scope,
    fillIndicatorsRepository: fillIndicatorsRepositorySchool,
    $alerts: $alerts,
    $dialogs: $dialogs,
    $errorHandler: $errorHandler,
    $collectionHelper: $collectionHelper
  });
});

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('irtech.netcity.em.statreports.common', []).factory('indicatorsRepository', function($http, $dialogs, $alerts, $showerModalDialog) {
  var longWork, notify, showError;
  showError = function(error) {
    var errorMessage;
    if (error.data) {
      errorMessage = error.data.message;
      if (!errorMessage) {
        errorMessage = "Ошибка";
      }
      if (error.data.details) {
        errorMessage = errorMessage + "(" + error.data.details + ")";
      }
    } else {
      errorMessage = "Ошибка";
    }
    return $alerts.error(errorMessage);
  };
  notify = function(action, message) {
    action.then(function() {
      return $alerts.success(message);
    }, function(error) {
      return showError(error);
    });
    return action;
  };
  longWork = function(work, message) {
    $showerModalDialog.show();
    work["finally"](function() {
      return $showerModalDialog.close();
    });
    return work;
  };
  return {
    calculators: {
      get: function(indicatorLevel, indicatorValueType) {
        return longWork($http.get("/webapi/calculators/?indicatorLevel=" + indicatorLevel + "&valueType=" + indicatorValueType));
      }
    },
    indicators: {
      getPredefinedGroups: function(indicatorLevel) {
        return longWork(notify($http.get("/webapi/indicators/predefinedGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorGroupsWasLoaded));
      }
    },
    filters: {
      getChildEMs: function() {
        return longWork($http.get("/webapi/em/childEMs"));
      },
      getFuncTypes: function(emId) {
        return longWork($http.get("/webapi/em/" + emId + "/funcTypes"));
      }
    },
    educInstitutions: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educInstitutions"), language.Generic.StatReports.kEducInstitutionsWasLoaded));
      }
    },
    educManagements: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educManagements"), language.Generic.StatReports.kSubEmListWasLoaded));
      }
    },
    educInstIndicators: {
      get: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded));
      },
      getGroups: function() {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/groups")));
      },
      getIndicatorValues: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
      },
      saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
        return notify($http.post("/webapi/educInstitution/indicators/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
      },
      approveIndicatorGroups: function(indicatorGroupIds) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
      },
      approveIndicatorGroup: function(indicatorGroupId, syId, accessType, text) {
        return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType + "&syId=" + syId), text));
      },
      disapproveIndicatorsGroups: function(indicatorGroupId, syId) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kDataOpenedForEditing);
      },
      getCalculatedIndicatorValues: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess));
      }
    },
    emIndicators: {
      subscribed: {
        get: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded), language.Generic.StatReports.kIndicatorListLoading);
        },
        getGroups: function() {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/groups")));
        },
        getIndicatorGroup: function(indicatorGroupId, indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/groups/" + indicatorGroupId + "/?indicatorLevel=" + indicatorLevel)));
        },
        saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
          return notify($http.post("/webapi/em/indicators/subscribed/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
        },
        approveIndicatorGroups: function(indicatorGroupIds) {
          return notify($http.post("/webapi/em/indicators/subscribed/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
        },
        approveIndicatorGroup: function(indicatorGroupId, emId, accessType, text) {
          return notify($http.get("/webapi/em/" + emId + "/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType), text);
        },
        getIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getCalculatedIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess));
        }
      },
      published: {
        get: function(indicatorLevel, indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + (indicatorGroupId ? indicatorGroupId + '/' : '') + "?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorListLoading));
        },
        getGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/roots/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRegionRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/regionGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        renumber: function(numbers) {
          return $http.post("/webapi/em/indicators/published/renumber", numbers);
        },
        regionPublish: function(indicatorLevel) {
          return longWork($http.post("/webapi/em/indicators/published/regionpublish/?indicatorLevel=" + indicatorLevel));
        },
        getIndicatorValues: function(indicatorGroupId, indicatorLevel) {
          var src;
          src = indicatorLevel === 0 ? "educInst" : "em";
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/values/" + src), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getEmAccessJournal: function(indicatorGroupId, funcTypeId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/emAccessJournal")));
        },
        getEducInstAccessJournal: function(indicatorGroupId, funcTypeId, emId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/educInstAccessJournal/?eoFuncType=" + funcTypeId + "&emId=" + emId)));
        },
        editExplanation: function(indicatorGroupInfo) {
          return longWork($http.post("/webapi/em/indicators/published/edit/explanation", indicatorGroupInfo));
        },
        add: function(indicator) {
          return longWork($http.put("/webapi/em/indicators/published", indicator));
        },
        update: function(indicator) {
          return longWork(notify($http.post("/webapi/em/indicators/published", indicator), language.Generic.StatReports.kIndicatorWasSaved));
        },
        remove: function(indicatorId) {
          return longWork($http["delete"]("/webapi/em/indicators/published/" + indicatorId));
        }
      }
    }
  };
});


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

angular.module('irtech.netcity.em.statreports.common').controller('FillIndicators.View.Common', function($scope, fillIndicatorsRepository, $alerts, $dialogs, $errorHandler, $collectionHelper, $appLoader) {
  var fillCalculatedValues, initIndicatorGroups, initIndicators, mappingAddValue, mappingToIndicatorValue;
  $scope.bDataWasChanged;
  $scope.language = language;

  /* mappingAddValue - добавляет ко всем объектам indicator свойство Value */
  mappingAddValue = function(indicatorList) {
    return $collectionHelper.treeForEach(indicatorList, function(ind) {
      return ind.subIndicators;
    }, function(ind) {
      var indicatorValue;
      indicatorValue = $scope.indicatorValuesIndexer[ind.id];
      if (typeof indicatorValue !== 'undefined') {
        return ind.value = indicatorValue.value;
      }
    });
  };
  mappingToIndicatorValue = function(list) {
    return _.map(list, function(indicator) {
      return {
        indicatorId: indicator.id,
        value: indicator.value
      };
    });
  };
  $scope.existsIndicatorGroups = function() {
    return typeof $scope.indicatorGroupsList !== 'undefined' && $scope.indicatorGroupsList.length > 0;
  };

  /*Подгружается список индикаторов и их значений */
  initIndicators = function() {
    $scope.bDataWasChanged = false;
    if ($scope.existsIndicatorGroups()) {
      fillIndicatorsRepository.getIndicatorValues($scope.indicatorGroup.id).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillIndicatorsRepository.get($scope.indicatorGroup.id).then(function(response) {
          $scope.indicatorList = mappingAddValue(response.data);
          $scope.indicator = $scope.indicatorList[0];
          return $scope.isApprovedIndicatorGroup = $scope.indicator.isApproved;
        }, function(response) {
          return $errorHandler.responseHandler(response, language.Generic.StatReports.kErrIndicatorListLoading);
        });
      });
    }
  };
  fillCalculatedValues = function(indicatorGroupId) {
    _.each($scope.indicatorList, function(indicatorGroup, index) {
      if (indicatorGroup.id === indicatorGroupId) {
        $scope.indicatorList[index] = mappingAddValue([$scope.indicatorList[index]])[0];
      }
    });
  };

  /*Загрузка списка групп индикаторов для селекта */
  initIndicatorGroups = function() {
    fillIndicatorsRepository.getIndicatorGroups().then(function(result) {
      $scope.indicatorGroupsList = result.data;
      if (typeof $scope.indicatorGroup === 'undefined' || $scope.indicatorGroup === null) {
        $scope.indicatorGroup = result.data[0];
      } else {
        $scope.indicatorGroup = _.findWhere($scope.indicatorGroupsList, {
          id: $scope.indicatorGroup.id
        });
      }
      $scope.previousIndicator = $scope.indicatorGroup;
      _.each($scope.indicatorGroupsList, function(indicatorGroup) {
        if (indicatorGroup.number === '') {
          indicatorGroup.name = indicatorGroup.name;
        } else {
          indicatorGroup.name = indicatorGroup.number + '. ' + indicatorGroup.name;
        }
        return indicatorGroup;
      });
      initIndicators();
      $appLoader.hide();
    });
  };
  $.extend($scope, {
    calculate: function(indicatorGroupId) {
      return fillIndicatorsRepository.getCalculatedIndicatorValues(indicatorGroupId).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillCalculatedValues(indicatorGroupId);
        return $scope.bDataWasChanged = true;
      }, function(response) {
        return $errorHandler.responseHandler(response, language.Generic.StatReports.kAutomaticCalculationErr);
      });
    },
    inputChange: function() {
      return $scope.bDataWasChanged = true;
    },
    indicatorGroupChange: function() {
      if ($scope.bDataWasChanged) {
        $dialogs.confirm(language.Generic.StatReports.kDataWasChangedContinueWithoutChangingData).then(function() {
          initIndicatorGroups();
        }, function() {
          return $scope.indicatorGroup = $scope.previousIndicator;
        });
      } else {
        initIndicatorGroups();
      }
    },
    prepareSaveData: function() {
      var flatArray, indValues;
      flatArray = $collectionHelper.treeToFlatArray(this.indicatorList, function(ind) {
        return ind.subIndicators;
      });
      indValues = mappingToIndicatorValue(flatArray);
      return _.reject(indValues, function(indValue) {
        return typeof indValue.value === 'undefined' || indValue.value === '' || indValue.value === null;
      });
    },
    approveIndicatorGroup: function(groupId) {
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      return $dialogs.confirm(language.Generic.StatReports.kImpossibleMakeChangesAfterApproval).then(function() {
        var saveData;
        if ($scope.bDataWasChanged) {
          saveData = $scope.prepareSaveData();
          return fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
            $scope.bDataWasChanged = false;
            $scope.approve(groupId);
          }, function(data) {
            $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
            initIndicators();
          });
        } else {
          $scope.approve(groupId);
        }
      });
    },
    approve: function(groupId) {
      fillIndicatorsRepository.approve([groupId]).then(function() {
        return initIndicators();
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kErrApproving);
        return initIndicators();
      });
    },
    save: function() {
      var saveData;
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      saveData = this.prepareSaveData();
      fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
        return $scope.bDataWasChanged = false;
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
        initIndicators();
      });
    }
  });
  initIndicatorGroups();
});


/***/ }),

/***/ 293:
/***/ (function(module, exports) {

angular.module('netcity.indicators.directives', []).directive("indicatorNodes", function($compile) {
  return {
    restrict: 'A',
    scope: false,
    template: '<td ng-bind-template="{{indicator.fullNumber}} {{indicator.name}}"></td>',
    replace: false,
    link: function(scope, element, attrs) {
      var disabled, hasFillAccess, indicatorId, indicatorValueType, inputReadonly, isApproved, strElement;
      indicatorValueType = {
        numeric: "Numeric",
        bool: "Bool"
      };
      indicatorId = scope.indicator.id;
      hasFillAccess = typeof scope.$parent.state === "undefined" || typeof scope.$parent.state !== "undefined" && scope.$parent.state.hasFillAccess;
      isApproved = scope.$parent.isApprovedIndicatorGroup;
      inputReadonly = appContext.readOnly || isApproved || !hasFillAccess;
      scope.fillIndicators = scope.$parent.fillIndicators;
      scope._inputChange = scope.$parent.inputChange;
      if (scope.indicator.subIndicators !== void 0 && scope.indicator.subIndicators !== null) {
        $compile('<td></td>')(scope, function(cloned, scope) {
          element.append(cloned);
          element.addClass("indicator-group");
        });
        return $compile('<tr indicator-nodes ng-repeat="indicator in indicator.subIndicators" indicator="indicator"></tr>')(scope, function(cloned, scope) {
          element.after(cloned);
        });
      } else {
        if (scope.indicator.valueType === indicatorValueType.numeric) {
          scope.content = '<span>' + language.Generic.StatReports.kEnterOnlyNumbers + '</span>';
          scope.numberPattern = {
            test: function(value) {
              return /^\d+$/.test(value);
            }
          };
          strElement = '<td style="text-align: center;"> <div class="has-feedback" ng-class="{\'has-error\': fillIndicators.indicator' + indicatorId + '.$error.pattern, \'calculator-input\': !fillIndicators.indicator' + indicatorId + '.$error.pattern && indicator.calcExpression && ' + !inputReadonly + '}"> <input class="form-control" name="indicator' + indicatorId + '" type="text" ng-pattern="numberPattern" size="10" ng-change="_inputChange()" ng-model="indicator.value" ng-readonly="' + inputReadonly + '"/> <span ng-show="fillIndicators.indicator' + indicatorId + '.$error.pattern" tooltip-html-unsafe="{{content}}" tooltip-placement="right" class="glyphicon glyphicon-remove form-control-feedback input-icon-align"> </span> </div> </td>';
        } else if (scope.indicator.valueType === indicatorValueType.bool) {
          scope.values = [
            {
              id: 0,
              name: 'Нет'
            }, {
              id: 1,
              name: 'Да'
            }
          ];
          disabled = inputReadonly ? 'disabled' : '';
          strElement = '<td style="text-align: center;"> <select ng-model="indicator.value" ng-options="value.id as value.name for value in values" ng-change="_inputChange()" class="form-control" ng-readonly="' + inputReadonly + '"' + disabled + '> <option value=""></option> </select> </td>';
        }
        return $compile(strElement)(scope, function(cloned, scope) {
          element.append(cloned);
        });
      }
    }
  };
}).directive("parameterValue", function($compile) {
  return {
    restrict: 'E',
    scope: false,
    template: '',
    replace: true,
    link: function(scope, element, attrs) {
      var argumentType, parameterId, strElement;
      argumentType = {
        number: "Number",
        text: "Text",
        bool: "Bool"
      };
      if (scope.parameter.type === argumentType.number) {
        parameterId = scope.parameter.id;
        scope.numberPattern = {
          test: function(value) {
            return /^\d+$/.test(value);
          }
        };
        scope.content = '<span>' + language.Generic.StatReports.kEnterOnlyNumbers + '</span>';
        scope.fillParameterValues = scope.$parent.fillParameterValues;
        scope.$parent.$parent.fillParameterValues = scope.$parent.fillParameterValues;
        strElement = '<input type="text" class="form-control" size="10" ng-pattern="numberPattern" ng-model="parameter.value" name="parameter' + parameterId + '" />';
        strElement = '<div class="has-feedback" ng-class="{\'has-error\': fillParameterValues.parameter' + parameterId + '.$error.pattern}">' + strElement;
        strElement = strElement + '		<span ng-show="fillParameterValues.parameter' + parameterId + '.$error.pattern" tooltip-html-unsafe="{{content}}" tooltip-placement="right" class="glyphicon glyphicon-remove form-control-feedback input-icon-align"> </span> </div>';
      } else if (scope.parameter.type === argumentType.text) {
        strElement = '<input type="text" class="input-sm input-parameter-value" size="10" ng-model="parameter.value"/>';
      } else if (scope.parameter.type === argumentType.bool) {
        scope.values = [
          {
            id: '0',
            name: 'Нет'
          }, {
            id: '1',
            name: 'Да'
          }
        ];
        strElement = '  <select ng-model="parameter.value" ng-options="value.id as value.name for value in values" class="form-control"> <option value=""></option> </select>';
      }
      return $compile(strElement)(scope, function(cloned, scope) {
        element.append(cloned);
      });
    }
  };
});


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

angular.module('uikit.controls.controllers', ['ui.bootstrap']).controller('treeSelectCtrl', function($scope, $dialogs, $uibModal, $uibModalInstance, tree, header, treeCfg) {
  var mapParams, selectedNode, showNode, treeSearch;
  treeSearch = function(items, getChildList, searchCriteria) {
    var iterate, recurs;
    console.log("1,5");
    iterate = function(items) {
      var i, item, len, result;
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        result = recurs(item);
        if (result) {
          return result;
        }
      }
      return null;
    };
    recurs = function(item) {
      var childs, searchResult;
      childs = getChildList(item);
      if (!childs || !childs.length || childs.length < 1) {
        return;
      }
      searchResult = _.where(childs, searchCriteria);
      if (searchResult.length > 0) {
        return searchResult[0];
      }
      return iterate(childs);
    };
    return iterate(items);
  };
  showNode = function(node) {
    var parent;
    node.collapsed = false;
    parent = node.getParent();
    if (parent) {
      return showNode(parent);
    }
  };
  mapParams = function() {
    _.each(selectedNode.parameters, function(param) {
      var temp;
      temp = _.findWhere(treeCfg.parameters, {
        argId: param.id
      });
      return param.value = typeof temp === 'undefined' ? null : temp.value;
    });
  };
  if (treeCfg.Current) {
    selectedNode = treeSearch(tree, function(item) {
      return item[treeCfg.childrens];
    }, {
      Id: treeCfg.current
    });
    if (selectedNode) {
      tree.currentNode = selectedNode;
      selectedNode.selected = "selected";
      showNode(selectedNode);
    }
  }
  $.extend($scope, {
    tree: tree,
    header: header,
    language: language,
    treeCfg: treeCfg,
    ok: function(form) {
      var modalInstance;
      selectedNode = this.tree.currentNode;
      if (!selectedNode) {
        $dialogs.notify("Внимание", "Выберите элемент из списка.");
        return;
      }
      if (typeof selectedNode.parameters !== 'undefined' && selectedNode.parameters.length > 0) {
        if (selectedNode.id === treeCfg.current && typeof treeCfg.parameters !== 'undefined') {
          mapParams();
        }
        modalInstance = $uibModal.open({
          templateUrl: '/static/dist/app/em/statReports/common/templates/enterParamValue.html',
          controller: 'Em.Indicators.EditIndicator.EnterParamValues',
          resolve: {
            calculator: function() {
              return selectedNode;
            }
          }
        });
        modalInstance.result.then(function(response) {
          selectedNode.parameters = response;
          return $uibModalInstance.close(selectedNode);
        });
        return;
      }
      return $uibModalInstance.close(selectedNode);
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    }
  });
});

angular.module('uikit.controls.services', ['ui.bootstrap.modal', 'uikit.controls.controllers']).factory('$uiControls', function($uibModal) {
  return {
    treeSelect: function(header, tree, treeCfg) {
      var cfg, defaultCfg, modalInstance;
      defaultCfg = {
        id: "id",
        label: "name",
        childrens: "childrens",
        noText: "Нет данных"
      };
      cfg = $.extend({}, defaultCfg, treeCfg);
      modalInstance = $uibModal.open({
        templateUrl: '/static/dist/app/global/templates/treeSelect.html',
        controller: 'treeSelectCtrl',
        resolve: {
          tree: function() {
            return tree;
          },
          header: function() {
            return angular.copy(header);
          },
          treeCfg: function() {
            return cfg;
          }
        }
      });
      return modalInstance.result;
    }
  };
});

angular.module('uikit.controls', ['uikit.controls.services']);


/***/ }),

/***/ 295:
/***/ (function(module, exports) {

angular.module('netcity.helpers', []).provider('$collectionHelper', function() {
  this.$get = function() {
    return {
      treeTransform: function(items, transformFunc, getChildList) {
        var recurs, transformCollection, transformItem;
        transformItem = function(item, parent) {
          var childs;
          childs = getChildList(item);
          item = transformFunc(item, parent);
          recurs(childs, item);
          return item;
        };
        transformCollection = function(items, parent) {
          var index, item, j, len;
          for (index = j = 0, len = items.length; j < len; index = ++j) {
            item = items[index];
            items[index] = transformItem(item, parent);
          }
        };
        recurs = function(childs, parent) {
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          transformCollection(childs, parent);
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          transformCollection(items, null);
        } else {
          items = transformItem(items, null);
        }
        return items;
      },
      treeForEach: function(items, getChildList, action) {
        var item, j, len, recurs;
        recurs = function(item) {
          var child, childs, index, j, len, results;
          childs = getChildList(item);
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          results = [];
          for (index = j = 0, len = childs.length; j < len; index = ++j) {
            child = childs[index];
            action(child);
            results.push(recurs(child));
          }
          return results;
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            recurs(item);
          }
        } else {
          action(items);
          recurs(items);
        }
        return items;
      },
      treeToFlatArray: function(items, getChildList) {
        var func, retArr;
        retArr = new Array();
        func = function(items) {
          return _.each(items, function(item) {
            var childs;
            retArr.push(item);
            childs = getChildList(item);
            if (angular.isArray(retArr)) {
              return func(childs);
            }
          });
        };
        func(items);
        return retArr;
      },
      treeSearch: function(items, getChildList, searchCriteria) {
        var iterate, recurs;
        iterate = function(items) {
          var item, j, len, result;
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            result = recurs(item);
            if (result) {
              return result;
            }
          }
          return null;
        };
        recurs = function(item) {
          var childs, searchResult;
          childs = getChildList(item);
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          searchResult = _.where(childs, searchCriteria);
          if (searchResult.length > 0) {
            return searchResult[0];
          }
          return iterate(childs);
        };
        return iterate(items);
      }
    };
  };
}).provider("$autoMapper", function() {
  this.$get = function() {
    var dictionary;
    dictionary = {};
    return {
      createMap: function(sourceKey, destinationKey) {
        var combinedKey, functions;
        combinedKey = sourceKey + "_" + destinationKey;
        dictionary[combinedKey] = {};
        return functions = {
          forMember: function(key, e) {
            dictionary[combinedKey][key] = e;
            return functions;
          },
          forAllMembers: function(func) {
            dictionary[combinedKey].__forAllMembers = func;
            return functions;
          }
        };
      },
      map: function(sourceKey, destinationKey, sourceValue, destinationValue, lazy) {
        var combinedKey, extensions, getValue, i, j, key, len, mapItem, mappings, output, srcVal;
        if (!sourceValue && sourceValue !== false) {
          return;
        }
        getValue = function(item) {
          if (typeof item === "function" && !lazy) {
            return item();
          }
          return item;
        };
        combinedKey = sourceKey + "_" + destinationKey;
        mappings = dictionary[combinedKey];
        output = null;
        key = null;
        extensions = {
          ignore: function() {},
          mapFrom: function(sourceMemberKey) {
            var value;
            if (!this.__sourceValue.hasOwnProperty(sourceMemberKey)) {
              throw sourceKey + "." + sourceMemberKey + " не определено";
            }
            value = getValue(this.__sourceValue[sourceMemberKey]);
            if (mappings.__forAllMembers) {
              return mappings.__forAllMembers(this.__destinationValue, this.__key, value);
            } else {
              return this.__destinationValue[this.__key] = value;
            }
          }
        };
        if (!mappings) {
          throw "Не найден соответствующий маппинг из источника " + sourceKey + " в получателя " + destinationKey;
        }
        mapItem = function(destinationValue, sourceValue) {
          var value;
          for (key in destinationValue) {
            if (!destinationValue.hasOwnProperty(key)) {
              continue;
            }
            if (mappings.hasOwnProperty(key) && mappings[key]) {
              if (typeof mappings[key] === "function") {
                extensions.__key = key;
                extensions.__sourceValue = sourceValue;
                extensions.__destinationValue = destinationValue;
                output = mappings[key].call(extensions);
              } else {
                output = mappings[key];
              }
              if (output) {
                value = getValue(output);
                if (mappings.__forAllMembers) {
                  mappings.__forAllMembers(destinationValue, key, value);
                } else {
                  destinationValue[key] = value;
                }
              }
            } else if (!sourceValue.hasOwnProperty(key)) {
              throw sourceKey + "." + key + " не определено";
            } else {
              value = getValue(sourceValue[key]);
              if (mappings.__forAllMembers) {
                mappings.__forAllMembers(destinationValue, key, value);
              } else {
                destinationValue[key] = value;
              }
            }
          }
        };
        if (sourceValue instanceof Array) {
          if (destinationValue instanceof Array) {
            for (i = j = 0, len = sourceValue.length; j < len; i = ++j) {
              srcVal = sourceValue[i];
              if (!destinationValue[i]) {
                if (typeof destinationKey !== "function") {
                  throw "destinationKey of mapping must be a function in order to initialize the array";
                }
                destinationValue[i] = destinationKey();
              }
              mapItem(destinationValue[i], srcVal);
            }
          } else {
            throw "Cannot map array to object";
          }
        } else if (destinationValue instanceof Array) {
          throw "Cannot map object to array";
        } else {
          mapItem(destinationValue, sourceValue);
        }
      }
    };
  };
});


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

angular.module('netcity.validation', []).provider('$errorHandler', function() {
  this.$get = function($alerts) {
    return {
      responseHandler: function(response, errMessage) {
        this.errorList = [];
        if (response.status === 401) {
          $alerts.error('Ошибка! Ваш сеанс работы был завершен');
        } else {
          if (response.headers('server-validation-exception') === 'true') {
            this.errorList = Array(response.data.message);
          } else {
            errMessage = response.data.message || errMessage || 'Неожиданная ошибка';
            $alerts.error(errMessage, response.data.details);
          }
        }
      },
      errorList: []
    };
  };
});


/***/ })

/******/ });