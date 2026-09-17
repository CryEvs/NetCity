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


var _years = __webpack_require__(2);
var _profiles = __webpack_require__(7);
var _subjects = __webpack_require__(9);
var _parentSubjects = __webpack_require__(17);
var _users = __webpack_require__(20);
var _rooms = __webpack_require__(21);
var _repository = __webpack_require__(23);
var _profiles2 = __webpack_require__(24);
var _repositories = __webpack_require__(25);
var _years2 = __webpack_require__(26);
var _terms = __webpack_require__(27);
var _dateInput = __webpack_require__(29);
var _curriculumplan = __webpack_require__(30);
var _curriculumplan2 = __webpack_require__(42);
var _inputtable = __webpack_require__(43);
var _floatinput = __webpack_require__(44);
var _classicPlantable = __webpack_require__(45);
var _iupPlantable = __webpack_require__(47);
var _print = __webpack_require__(48);
var _classes = __webpack_require__(49);
var _subjects2 = __webpack_require__(10);
var _parentSubjects2 = __webpack_require__(50);
var _terms2 = __webpack_require__(51);
var _termtypeGrades = __webpack_require__(52);
var _termtypes = __webpack_require__(39);
var _eaLimits = __webpack_require__(53);
var _eacalendar = __webpack_require__(54);
var _editSubject = __webpack_require__(55);
var _subjectTeachers = __webpack_require__(58);
var _subjectGroups = __webpack_require__(60);
var _subjectList = __webpack_require__(62);
var _extraActivityPlantable = __webpack_require__(63);
var _edityear = __webpack_require__(64);
var _editEvent = __webpack_require__(65);
var _eventsRegistry = __webpack_require__(68);
var _editEventPage = __webpack_require__(72);
var _timeInput = __webpack_require__(75);
var _repository2 = __webpack_require__(76);
var _curriculumComponents = __webpack_require__(77);
var _limits = __webpack_require__(80);
var _curriculumConstants = __webpack_require__(82);
var _movedaysRegistry = __webpack_require__(83);
var _calendar = __webpack_require__(85);
var _classmeetings = __webpack_require__(86);
var _secretAnswer = __webpack_require__(87);
var _module = angular.module("irtech.netcity.school.calendar", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", "ui.sortable"]);
__webpack_require__(88);
__webpack_require__(89);
_module.service("usersRepository", _users.UsersRepository).service("roomsRepository", _rooms.RoomsRepository).service("vacationsRepository", _repository.VacationsRepository).service("termTypesRepository", _termtypes.TermTypesRepository).service("termsRepository", _terms2.TermsRepository).service("yearsRepository", _years2.YearsRepository).service("subjectGroupsRepository", _repository.SubjectGroupsRepository).service("subjectsRepository", _subjects2.SubjectsRepository).service("parentSubjectsRepository", _parentSubjects2.ParentSubjectsRepository).service("eventsRepository", _repository2.EventsRepository).service("curriculumRepository", _repository.CurriculumRepository).service("profilesRepository", _profiles2.ProfilesRepository).service("classesRepository", _classes.ClassesRepository).service("referencesRepository", _repositories.ReferencesRepository).service("curriculumPlanRepository", _curriculumplan2.CurriculumPlanRepository).service("eaCurriculumRepository", _eacalendar.EaCurriculumRepository).service("curriculumConstants", _curriculumConstants.CurriculumConstants).service("calendarRepository", _calendar.CalendarRepository).service("classmeetingsRepository", _classmeetings.ClassmeetingsRepository).service("greenTextService", _secretAnswer.GreenTextService).directive("compositTable", _inputtable.CompositTableDirective).directive("compositTableRow", _inputtable.CompositTableRowDirective).directive("inputTable", _inputtable.InputTableDirective).directive("inputTableCell", _inputtable.InputTableCellDirective).directive("numericInput", _floatinput.NumericModelDirective).directive("timeInput", _timeInput.TimeInputDirective).component("editDateRangeComponent", _dateInput.EditDateRangeComponent).component("classicCurriculumPlanTable", _classicPlantable.ClassicPlanTableComponent).component("iupCurriculumPlanTable", _iupPlantable.IupPlanTableComponent).component("eaCurriculumPlanTable", _extraActivityPlantable.EaPlanTableComponent).component("printComponent", _print.PrintComponent).component(_editEvent.EditEventComponent.selector, _editEvent.EditEventComponent).component(_subjectGroups.SubjectGroupsComponent.selector, _subjectGroups.SubjectGroupsComponent).component(_subjectTeachers.SubjectTeachersComponent.selector, _subjectTeachers.SubjectTeachersComponent).component(_subjectList.SubjectListComponent.selector, _subjectList.SubjectListComponent).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/years/", _years.YearsComponent).when("/years/:yearId", _edityear.EditYearComponent).when("/termtypes/grades/", _termtypeGrades.TermTypeGradesComponent).when("/vacations/classesRel/", {
    templateUrl: "/static/dist/app/school/calendar/vacations/classesRelations/template.html",
    controller: "VacationsClassesCtrl"
  }).when("/subjects/", _subjects.SubjectsComponent).when("/subjects/:subjectId/", _editSubject.EditSubjectComponent).when("/parentsubjects/", _parentSubjects.ParentSubjectsComponent).when("/events/edit/:eventId", _editEventPage.EditEventPageComponent).when("/events/:eventType", _eventsRegistry.CalendarEventsRegistryComponent).when("/events/", _eventsRegistry.CalendarEventsRegistryComponent).when("/movedays/", _movedaysRegistry.MoveDaysRegistryComponent).when("/terms/", _terms.TermsComponent).when("/profiles/", _profiles.ProfilesComponent).when("/curriculum/plan/:iup?", _curriculumplan.CurriculumComponent).when("/curriculum/limits/", _limits.LimitsComponent).when("/curriculum/components/", _curriculumComponents.CurriculumComponentsComponent).when("/curriculum/ealimits", _eaLimits.EaLimitsComponent).otherwise({
    templateUrl: "/static/dist/app/school/calendar/vacations/classesRelations/template.html",
    controller: "VacationsClassesCtrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearsComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _extDeferred = __webpack_require__(4);
var _common = __webpack_require__(5);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var YearsController = /*#__PURE__*/function () {
  function YearsController($scope, pageContext, $location, $appLoader, yearsRepository, termsRepository, $longWork, contextService, vacationsRepository, profilesRepository, taskQueueService, appContext, $q, $dialogs, dateUtils, language) {
    var _this = this;
    _classCallCheck(this, YearsController);
    this.$scope = $scope;
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.yearsRepository = yearsRepository;
    this.termsRepository = termsRepository;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.vacationsRepository = vacationsRepository;
    this.profilesRepository = profilesRepository;
    this.taskQueueService = taskQueueService;
    this.appContext = appContext;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.dateUtils = dateUtils;
    this.language = language;
    this.data = {
      state: null,
      terms: [],
      vacations: [],
      years: [],
      yearId: null
    };
    this.state = {
      readOnly: false,
      dataReady: false
    };
    this.openFutureYear = function () {
      _this.yearsRepository.getOpenFutureYearConfirms().then(function (confirmList) {
        var confirms = confirmList.confirms.map(function (confirm) {
          return function () {
            return _this.$dialogs.confirm(confirm);
          };
        });
        return _extDeferred.extDeferred.when(confirms);
      }).then(function () {
        return _this.yearsRepository.openFutureYear();
      }).then(function (futureYearId) {
        _this.changeYear(futureYearId);
      });
    };
    //загрузка данных
    this.load = function () {
      var loadYears = _this.contextService.getYears().then(function (years) {
        return _this.data.years = years;
      });
      var getSchoolyearLimits = _this.yearsRepository.getSchoolYearInfo().then(function (yearInfo) {
        _this.yearInfo = yearInfo;
      });
      var getState = _this.yearsRepository.getYearsState().then(function (state) {
        _this.data.state = state;
      });
      var loadVacations = _this.vacationsRepository.getVacations(true).then(function (vacations) {
        _this.data.vacations = vacations;
      });
      var loadTerms = _this.termsRepository.getTerms().then(function (terms) {
        _this.data.terms = terms;
      });
      var loadWithTermTypeNotDefined = _this.profilesRepository.withTermTypeNotDefined().then(function (data) {
        _this.withTermTypeNotDefined = data.length != 0;
      });
      _this.$q.all([loadWithTermTypeNotDefined, loadTerms, loadVacations, loadYears, getState, getSchoolyearLimits]).then(function () {
        _this.$appLoader.hide();
      });
    };
    this.dateFormat = appContext.dateFormat;
    this.data.yearId = parseInt(appContext.yearId);
    this.state.readOnly = this.appContext.readOnly;
    pageContext.title = language.Generic.MenuFolders.kFNSchoolYearAndTerms;
    pageContext.parent = null;
    pageContext.back = null;
    this.rights = {
      hasRightToCreateEditTerm: appContext.hasRights([Rights.arCreateEditTerm]),
      hasRightToEditSchoolTermTypes: appContext.hasRights([Rights.arEditSchoolTermTypes]),
      hasRightToCreateCloseEditYear: appContext.hasRights([Rights.arCreateCloseEditYear])
    };
    this.load();
  }
  _createClass(YearsController, [{
    key: "goTerms",
    value: function goTerms() {
      this.$location.path("/terms/");
    }
  }, {
    key: "goTermTypes",
    value: function goTermTypes() {
      this.$location.path("/termtypes/grades/");
    }
  }, {
    key: "goVacations",
    value: function goVacations() {
      this.$location.path("/events/3");
    }
  }, {
    key: "goVacationsClasses",
    value: function goVacationsClasses() {
      this.$location.path("/vacations/classesRel/");
    }
  }, {
    key: "goWeekendDays",
    value: function goWeekendDays() {
      //postTo("/asp/SetupSchool/Calendar/EditYear.asp");
      this.$location.path("/years/".concat(this.data.yearId));
    }
  }, {
    key: "getFormattedDate",
    value: function getFormattedDate(date) {
      var d = new Date(date);
      return this.dateUtils.date2str(d);
    }
  }, {
    key: "getFormattedTextDate",
    value: function getFormattedTextDate(date) {
      //moment.locale('ru');
      var d = new Date(date);
      return moment(d).format('LL');
    }
  }, {
    key: "changeYear",
    value: function changeYear(yearId) {
      this.$longWork.show();
      this.contextService.changeYear(yearId || this.data.yearId).then(function (result) {
        var page = result.page || window.location.pathname;
        (0, _common.postTo)(page);
      });
    }
  }, {
    key: "createFutureYear",
    value: function createFutureYear() {
      var _this2 = this;
      this.yearsRepository.getCreateFutureYearConfirms().then(function (confirmList) {
        var confirms = confirmList.confirms.map(function (confirm) {
          return function () {
            return _this2.$dialogs.confirm(confirm);
          };
        });
        return _extDeferred.extDeferred.when(confirms);
      }).then(function () {
        return _this2.taskQueueService.execute({
          getTaskFunc: function getTaskFunc() {
            return _this2.yearsRepository.createFutureYear();
          },
          hint: _this2.language.Generic.Common.kProcessingInfoLetter
        });
      }).then(function (futureYearId) {
        _this2.changeYear(futureYearId);
      });
    }
  }]);
  return YearsController;
}();
var YearsComponent = {
  controller: YearsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/years/years.component.html"
};
exports.YearsComponent = YearsComponent;

/***/ }),
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extDeferred = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExtDeferred = /*#__PURE__*/function () {
  function ExtDeferred() {
    _classCallCheck(this, ExtDeferred);
  }
  _createClass(ExtDeferred, [{
    key: "handleDef",
    value: function handleDef(condition) {
      while (typeof condition == "function") {
        condition = condition();
      }
      if (Array.isArray(condition)) {
        condition = this.when.call(condition);
      }
      var internalDef;
      if (typeof condition == 'undefined' || typeof condition == 'boolean') {
        internalDef = $.Deferred();
        if (condition) internalDef.resolve();else internalDef.reject();
        return internalDef.promise();
      }
      if (typeof Promise !== 'undefined' && condition instanceof Promise) {
        internalDef = $.Deferred();
        condition.then(function () {
          return internalDef.resolve();
        }, function () {
          return internalDef.reject();
        });
        return internalDef.promise();
      }
      return condition;
    }
  }, {
    key: "wrapPromise",
    value: function wrapPromise(promiseFunc, success, fail) {
      return function () {
        return $.when(promiseFunc()).then(success, fail);
      };
    }
  }, {
    key: "wrapAlwaysPromise",
    value: function wrapAlwaysPromise(promiseFunc) {
      var _this = this;
      return function () {
        var deferred = $.Deferred();
        var funcResolve = function funcResolve() {
          return deferred.resolve();
        };
        _this.wrapPromise(promiseFunc, funcResolve, funcResolve)();
        return deferred.promise();
      };
    }
  }, {
    key: "resolve",
    value: function resolve() {
      var deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    }
  }, {
    key: "when",
    value: function when(args) {
      var _this2 = this;
      var deferred = $.Deferred();
      var arrDeferred = arguments;
      if (arrDeferred.length == 1 && _typeof(arrDeferred[0]) == 'object') {
        arrDeferred = arguments[0];
      }
      if (arrDeferred.length == 0) {
        deferred.resolve();
        return Promise.resolve();
      }
      var rejectFunc = function rejectFunc() {
        return deferred.reject();
      };
      var successFunc = function successFunc() {
        return deferred.resolve();
      };
      var recThen = function recThen(index) {
        var nextDef = arrDeferred[index];
        var nextDefFunc = function nextDefFunc() {
          return _this2.handleDef(nextDef);
        };
        if (index < arrDeferred.length - 1) {
          return function () {
            return $.when(nextDefFunc()).then(recThen(index + 1), rejectFunc);
          };
        } else if (index == arrDeferred.length - 1) {
          return function () {
            return $.when(nextDefFunc()).then(successFunc, rejectFunc);
          };
        } else {
          return successFunc;
        }
      };
      var firstDef = arrDeferred[0];
      $.when(this.handleDef(firstDef)).then(recThen(1), rejectFunc);
      return new Promise(function (resolve) {
        deferred.then(function () {
          resolve();
        });
      });
    }
  }]);
  return ExtDeferred;
}();
var extDeferred = new ExtDeferred();
exports.extDeferred = extDeferred;

/***/ }),
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesController = exports.ProfilesComponent = void 0;
var _profileView = __webpack_require__(8);
var Rights = _interopRequireWildcard(__webpack_require__(3));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProfilesController = /*#__PURE__*/function () {
  ProfilesController.$inject = ["pageContext", "$appLoader", "$location", "profilesRepository", "$q", "changeTracker", "language", "$dialogs", "$alerts", "$longWork", "curriculumConstants", "appContext", "greenTextService", "$sce"];
  /*@ngInject*/
  function ProfilesController(pageContext, $appLoader, $location, profilesRepository, $q, changeTracker, language, $dialogs, $alerts, $longWork, curriculumConstants, appContext, greenTextService, $sce) {
    _classCallCheck(this, ProfilesController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.profilesRepository = profilesRepository;
    this.$q = $q;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.curriculumConstants = curriculumConstants;
    this.appContext = appContext;
    this.greenTextService = greenTextService;
    this.$sce = $sce;
    this.isPreSchool = appContext.funcType === 1;
    this.isNotReadonly = !appContext.readOnly;
    this.hasUserRight_editSchoolTerm = appContext.hasAnyRight([Rights.arEditSchoolTermTypes]);
    this.load();
  }
  _createClass(ProfilesController, [{
    key: "initPageContext",
    value: function initPageContext() {
      this.pageContext.title = this.wizard ? this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + " 4. " + this.language.SetupSchoolCalendar.kTitleProfiles))) : this.language.SetupSchoolCalendar.kTitleProfiles;
      this.pageContext.parent = null;
      this.pageContext.back = null;
    }
  }, {
    key: "goTermTypes",
    value: function goTermTypes() {
      this.$location.path("/termtypes/grades/");
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      //загружаю профили
      var loadProfiles = this.profilesRepository.getProfiles().then(function (data) {
        return _this.profiles = data;
      });
      //загружаю грейды
      this.grades = this.curriculumConstants.getAllPossibleGrades(this.appContext.funcType, true);
      this.maxGrade = this.grades.length;
      var loadWithTermTypeNotDefined = this.profilesRepository.withTermTypeNotDefined().then(function (data) {
        return _this.withTermTypeNotDefined = data.length != 0;
      });
      //жду пока все данные загрузятся
      var loadAll = this.$q.all([loadProfiles, loadWithTermTypeNotDefined]).then(function () {
        _this.initPageContext();
        //загружаю используемые связи профиль-грейд
        _this.profilesRepository.getProfileGradeList(true, _this.wizard).then(function (data) {
          _this.profileUsingGradeList = data;
          try {
            //создаю профили удобные для показа в html
            _this.profileViews = _this.profiles.map(function (profile) {
              return new _profileView.ProfileView(profile, _this.grades, _this.profileUsingGradeList);
            });
            _this.changeTracker.clearDataChanges();
          } catch (error) {
            console.error(error);
          }
          _this.$appLoader.hide();
        });
      });
      return loadAll;
    }
  }, {
    key: "isProfilesHasEqualsNames",
    value: function isProfilesHasEqualsNames() {
      var nonunique = this.profileViews.filter(function (elem, pos, arr) {
        return arr.filter(function (x) {
          return x.name.toLowerCase() === elem.name.toLowerCase();
        }).length > 1;
      });
      if (nonunique && nonunique.length > 0) {
        nonunique.forEach(function (x) {
          return x.isNameNonUnique = true;
        });
        return true;
      }
      return false;
    }
  }, {
    key: "isAnyProfilesHasEmptyName",
    value: function isAnyProfilesHasEmptyName() {
      //выбираю имена профилей которые пустые или состоят из одних пробелов
      var res = this.profileViews.filter(function (x) {
        return x.name.length === 0 || !x.name.trim();
      });
      res.forEach(function (x) {
        return x.isNameEmpty = true;
      });
      return res.length > 0;
    }
  }, {
    key: "isAnyProfilesHasEmptyGrades",
    value: function isAnyProfilesHasEmptyGrades() {
      //профили без грейдов
      var emptyGradeProfiles = this.profileViews.filter(function (x) {
        return x.isEmptyGrade();
      });
      //показать сообщение если не указаны грейды у одного из профилей
      if (emptyGradeProfiles && emptyGradeProfiles.length > 0) {
        emptyGradeProfiles.forEach(function (x) {
          return x.isGradeListEmpty = true;
        });
        return true;
      }
      return false;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return;
      }
      this.profileViews = this.profileViews.filter(function (x) {
        return !(x.id == 0 && x.isEmptyGrade() && (x.name.length === 0 || !x.name.trim()));
      });
      this.profileViews.forEach(function (x) {
        return x.isNameNonUnique = false;
      });
      if (this.isProfilesHasEqualsNames() || this.isAnyProfilesHasEmptyName() || this.isAnyProfilesHasEmptyGrades()) {
        return;
      }
      this.$longWork.show();
      //отправка данных на сервер
      this.profilesRepository.saveProfiles(this.profileViews).then(function () {
        _this2.load();
      }).then(function () {
        _this2.changeTracker.clearDataChanges();
        _this2.$longWork.close();
        _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
      })["catch"](function (err) {
        _this2.$longWork.close();
        console.log(err);
      });
    }
  }, {
    key: "deleteProfile",
    value: function deleteProfile() {
      var _this3 = this;
      var deletedProfiles = this.profileViews.filter(function (p) {
        return p.isDelete;
      });
      if (deletedProfiles.length === 0) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kProfileNotSelectedForDeletion);
        return;
      }
      this.$longWork.show();
      this.profilesRepository.deleteProfile(deletedProfiles).then(function () {
        return _this3.load();
      }).then(function () {
        _this3.$longWork.close();
        _this3.$alerts.success(_this3.language.Generic.Calendar.kMsgDeletedSuccess);
      });
    }
  }, {
    key: "revertChanges",
    value: function revertChanges() {
      var _this4 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return;
      }
      this.$longWork.show();
      this.load().then(function () {
        _this4.$longWork.close();
        _this4.$dialogs.message(_this4.language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "addNewProfile",
    value: function addNewProfile() {
      var profile = {
        id: 0,
        name: "",
        grades: []
      };
      var profileView = new _profileView.ProfileView(profile, this.grades, this.profileUsingGradeList);
      this.profileViews.push(profileView);
    }
  }]);
  return ProfilesController;
}();
exports.ProfilesController = ProfilesController;
var ProfilesComponent = {
  controller: ProfilesController,
  selector: "profiles",
  controllerAs: "$ctrl",
  bindings: {
    wizard: "<?"
  },
  templateUrl: "/static/dist/app/school/calendar/profiles/profiles.component.html"
};
exports.ProfilesComponent = ProfilesComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileView = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*обертка над профилем - удобная для отображения в html*/
var ProfileView = /*#__PURE__*/function () {
  function ProfileView(profile, allGradesList, profileUsingGradeList) {
    _classCallCheck(this, ProfileView);
    this.id = profile.id;
    this.name = profile.name;
    this.grades = profile.grades || [];
    this.allGradesList = allGradesList || [];
    this.profileUsingGradeList = profileUsingGradeList || [];
    this.gradesView = this.getGradesView();
    this.isUsing = this.isProfileUsing();
    this.isDelete = false;
  }
  _createClass(ProfileView, [{
    key: "changeName",
    value: function changeName() {
      this.isNameEmpty = this.name.length === 0 || !this.name.trim() ? true : false;
    }
    //доабвить грейд профилю (используетя например при клике на чекбоксе странице)
  }, {
    key: "changeGrades",
    value: function changeGrades(gradeView) {
      if (gradeView.checked) {
        //если поставили галку
        var findInd = this.grades.findIndex(function (g) {
          return g.id == gradeView.id;
        });
        if (findInd < 0) {
          //если такого нет в грейдах профиля
          this.grades.push(gradeView);
        }
      } else {
        //если убрали галочку
        var _findInd = this.grades.findIndex(function (g) {
          return g.id === gradeView.id;
        });
        if (_findInd != undefined && _findInd >= 0) {
          //если такой есть в грейдах профиля
          this.grades.splice(_findInd, 1); //удалить грейд из профиля
        }
      }

      this.isGradeListEmpty = this.isEmptyGrade() ? true : false;
    }
    //получить греды профиля для удобног отображения в html
  }, {
    key: "getGradesView",
    value: function getGradesView() {
      var _this = this;
      var resList = [];
      //перебираем список из всех возможных грейдов
      this.allGradesList.forEach(function (grade) {
        var gradeView = {
          id: grade.id,
          name: grade.name,
          checked: false,
          isUsing: false
        };
        //если грейда нет в профиле, то указываем, что этот грейд не чекнутый
        if (!_this.isGradeInProfile(grade)) {
          gradeView.checked = false;
        } else {
          gradeView.checked = true;
        }
        //если для этого профиля и этого грейда существует класс
        if (_this.isGradeHasClass(grade)) {
          gradeView.isUsing = true;
        } else {
          gradeView.isUsing = false;
        }
        resList.push(gradeView);
      });
      return resList;
    }
    //проверяет есть ли у профиля указанный грейд
  }, {
    key: "isGradeInProfile",
    value: function isGradeInProfile(grade) {
      if (!this.grades || this.grades.length == 0) {
        return false;
      }
      var profileGradeIds = this.grades.map(function (x) {
        return x.id;
      });
      if (profileGradeIds.includes(grade.id)) {
        return true;
      }
      return false;
    }
    //проверяет привязан ли к грейду хоть один класс
  }, {
    key: "isGradeHasClass",
    value: function isGradeHasClass(grade) {
      var _this2 = this;
      var res = this.profileUsingGradeList.filter(function (item) {
        return item.profileId === _this2.id && item.gradeId === grade.id;
      });
      if (res && res.length > 0) {
        return true;
      }
    }
    //проверяет привязан ли к профилю хоть один класс
  }, {
    key: "isProfileUsing",
    value: function isProfileUsing() {
      if (!this.gradesView) {
        return false;
      }
      if (this.gradesView.find(function (x) {
        return x.isUsing;
      })) {
        return true;
      }
      return false;
    }
    //проверяет есть ли у профиля хоть один грейд
  }, {
    key: "isEmptyGrade",
    value: function isEmptyGrade() {
      var res = this.gradesView.find(function (x) {
        return x.checked;
      });
      if (res) {
        return false;
      }
      return true;
    }
  }]);
  return ProfileView;
}();
exports.ProfileView = ProfileView;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectsController = exports.SubjectsComponent = void 0;
var _subjects = __webpack_require__(10);
var _editSubjectField = __webpack_require__(13);
var _subjectsLanguage = __webpack_require__(16);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectsController = /*#__PURE__*/function () {
  SubjectsController.$inject = ["pageContext", "$location", "$appLoader", "subjectsRepository", "$q", "appContext", "$uibModal", "language"];
  /*@ngInject*/
  function SubjectsController(pageContext, $location, $appLoader, subjectsRepository, $q, appContext, $uibModal, language) {
    _classCallCheck(this, SubjectsController);
    this.$location = $location;
    this.$appLoader = $appLoader;
    this.subjectsRepository = subjectsRepository;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.language = language;
    this.extraActivity = false;
    // максимальное количество предустановленных образовательных областей
    this.maxPredefined = 10;
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity == "true";
    this.languageService = new _subjectsLanguage.SubjectsLanguageService(this.language, this.extraActivity);
    pageContext.title = this.languageService.List;
    pageContext.parent = null;
    pageContext.back = null;
    this.functype = appContext.funcType;
    this.data = {
      subjects: [],
      subjectFields: [],
      parentSubjects: [],
      unusedSubjectFields: []
    };
    this.showSubjectsExtraData = appContext.funcType != 1 && !this.extraActivity;
    this.showSubjectFields = !this.extraActivity;
    this.state = {
      readOnly: appContext.readOnly,
      mode: "grouped",
      status: "all",
      emptyData: false,
      dataReady: false
    };
    this.load();
  }
  _createClass(SubjectsController, [{
    key: "editParentSubjects",
    value: function editParentSubjects() {
      this.$location.path("/parentsubjects/");
    }
  }, {
    key: "createSubjectField",
    value: function createSubjectField() {
      var field = {
        id: null,
        name: ""
      };
      this.editSubjectField(field);
    }
  }, {
    key: "editSubjectField",
    value: function editSubjectField(field) {
      var _this = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _editSubjectField.EditSubjectFieldComponent.templateUrl,
        controller: _editSubjectField.EditSubjectFieldComponent.controller,
        controllerAs: _editSubjectField.EditSubjectFieldComponent.controllerAs,
        resolve: {
          subjectField: function subjectField() {
            return angular.copy(field);
          }
        }
      });
      modalInstance.result.then(function () {
        _this.load();
      });
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var sbjFilter = {
        extraCurricular: this.extraActivity
      };
      var loadSubjects = this.subjectsRepository.getSubjects(sbjFilter, [_subjects.SubjectExpand.Groups, _subjects.SubjectExpand.Teachers, _subjects.SubjectExpand.Using]).then(function (subjects) {
        _this2.data.subjects = _.sortBy(subjects, function (subject) {
          return subject.order;
        });
        _.each(_this2.data.subjects, function (sbj) {
          if (sbj.teachers) {
            sbj.teachersStr = _.reduce(sbj.teachers, function (memo, teacher) {
              return memo += teacher.name + "\n";
            }, "");
          }
          if (sbj.groups && sbj.groups.length) {
            sbj.groupsStr = sbj.groups.length + " (" + _.reduce(sbj.groups, function (memo, group) {
              return memo += group.shortName + ",";
            }, "").slice(0, -1) + ")";
            sbj.groupsStrTitle = _.reduce(sbj.groups, function (memo, group) {
              return memo += group.name + "\n";
            }, "");
          }
        });
      });
      var loadSubjectFields = this.subjectsRepository.getSubjectFields(true).then(function (subjectFields) {
        return _this2.data.subjectFields = _.sortBy(subjectFields, function (subjectField) {
          return subjectField.order;
        });
      });
      var loadParentSubjects = this.subjectsRepository.getParentSubjects().then(function (parentSubjects) {
        return _this2.data.parentSubjects = parentSubjects;
      });
      this.$q.all([loadSubjects, loadSubjectFields, loadParentSubjects]).then(function () {
        _this2.data.unusedSubjectFields = _this2.data.subjectFields.filter(function (sf) {
          return _this2.data.subjects.findIndex(function (sbj) {
            return sbj.subjectField && sbj.subjectField.id == sf.id;
          }) == -1;
        });
        _this2.state.emptyData = false;
        _this2.state.dataReady = true;
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "getParentSubjectButtonText",
    value: function getParentSubjectButtonText() {
      return this.state.readOnly ? this.language.Generic.Buttons.kView : this.language.Generic.Buttons.kChange;
    }
  }, {
    key: "getParentSubjectGlyphicon",
    value: function getParentSubjectGlyphicon() {
      return this.state.readOnly ? "glyphicon glyphicon-eye-open" : "glyphicon glyphicon-pencil";
    }
  }]);
  return SubjectsController;
}();
exports.SubjectsController = SubjectsController;
var SubjectsComponent = {
  controller: SubjectsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/subjects.component.html"
};
exports.SubjectsComponent = SubjectsComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectsRepository = exports.SubjectExpand = void 0;
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
var SubjectExpand;
exports.SubjectExpand = SubjectExpand;
(function (SubjectExpand) {
  SubjectExpand["Teachers"] = "teachers";
  SubjectExpand["Groups"] = "groups";
  SubjectExpand["Using"] = "using";
})(SubjectExpand || (exports.SubjectExpand = SubjectExpand = {}));
var SubjectsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SubjectsRepository, _BaseRepository);
  var _super = _createSuper(SubjectsRepository);
  function SubjectsRepository() {
    _classCallCheck(this, SubjectsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SubjectsRepository, [{
    key: "getSubjects",
    value: function getSubjects(filter, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      if (typeof filter.extraCurricular != "undefined" && filter.extraCurricular != null) {
        params.extraCurricular = filter.extraCurricular;
      }
      if (typeof filter.modular != "undefined" && filter.modular != null) {
        params.modular = filter.modular;
      }
      if (typeof filter.parentSubjectId != "undefined") {
        if (filter.parentSubjectId > 0) {
          params.parentSubjectId = filter.parentSubjectId;
        } else if (filter.parentSubjectId == null) {
          params.parentSubjectId = "null";
        }
      }
      return this.$http.get("/webapi/subjects", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getUnassignedSubjects",
    value: function getUnassignedSubjects(classId) {
      var params = {
        classId: classId
      };
      return this.$http.get("/webapi/subjects/get-unassigned", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getHangingSubjects",
    value: function getHangingSubjects(forClasses) {
      var params = {
        forClasses: forClasses
      };
      return this.$http.get("/webapi/subjects/get-hanging", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getSubject",
    value: function getSubject(id, expand) {
      return this.$http.get("/webapi/subjects/".concat(id), {
        params: {
          expand: expand
        }
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "createSubject",
    value: function createSubject(dto) {
      return this.$http.put("/webapi/subjects", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editSubject",
    value: function editSubject(dto) {
      return this.$http.post("/webapi/subjects", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "orderSubjects",
    value: function orderSubjects(ids) {
      return this.$http.post("/webapi/subjects/order", null, {
        params: {
          id: ids
        }
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getSubjectCodebookInfo",
    value: function getSubjectCodebookInfo(id) {
      return this.$http.get("/webapi/subjects/".concat(id, "/codebook")).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "isCodebookUsing",
    value: function isCodebookUsing(subjectId, codebookId) {
      return this.$http.get("/webapi/subjects/".concat(subjectId, "/codebook/").concat(codebookId, "/using")).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "setSubjectCodebookInfo",
    value: function setSubjectCodebookInfo(id, info) {
      return this.$http.post("/webapi/subjects/".concat(id, "/codebook"), info).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "removeSubjects",
    value: function removeSubjects(ids) {
      return this.$http["delete"]("/webapi/subjects", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSubjectFields",
    value: function getSubjectFields() {
      var useInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onlyUsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var params = {
        useInfo: useInfo,
        onlyUsed: onlyUsed
      };
      return this.$http.get("/webapi/subjectfields", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "removeSubjectFields",
    value: function removeSubjectFields(ids) {
      return this.$http["delete"]("/webapi/subjectfields", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "updateSubjectField",
    value: function updateSubjectField(field) {
      return this.$http.post("/webapi/subjectfields", field).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createSubjectField",
    value: function createSubjectField(field) {
      return this.$http.put("/webapi/subjectfields", field).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editGroup",
    value: function editGroup(subjectId, group) {
      return this.$http.post("/webapi/subjects/".concat(subjectId, "/groups"), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createGroup",
    value: function createGroup(subjectId, group) {
      return this.$http.put("/webapi/subjects/".concat(subjectId, "/groups"), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteGroup",
    value: function deleteGroup(subjectId, ids) {
      return this.$http["delete"]("/webapi/subjects/".concat(subjectId, "/groups"), {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeachers",
    value: function getTeachers(id, used, currYearOnly) {
      var params = {};
      if (used) {
        params.used = used;
      }
      if (currYearOnly) {
        params.currYearOnly = currYearOnly;
      }
      return this.$http.get("/webapi/subjects/".concat(id, "/teachers"), {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "setTeachers",
    value: function setTeachers(id, teacherIds) {
      return this.$http.post("/webapi/subjects/".concat(id, "/teachers"), teacherIds).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getParentSubjects",
    value: function getParentSubjects() {
      var withSubjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.$http.get("/webapi/parentsubjects", {
        params: {
          withSubjects: withSubjects
        }
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }]);
  return SubjectsRepository;
}(_repository.BaseRepository);
exports.SubjectsRepository = SubjectsRepository;

/***/ }),
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSubjectFieldComponent = void 0;
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
var EditSubjectFieldController = /*#__PURE__*/function (_NetCityModalControll) {
  EditSubjectFieldController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "$alerts", "subjectsRepository", "language", "subjectField"];
  _inherits(EditSubjectFieldController, _NetCityModalControll);
  var _super = _createSuper(EditSubjectFieldController);
  /*@ngInject*/
  function EditSubjectFieldController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, $alerts, subjectsRepository, language, subjectField) {
    var _this;
    _classCallCheck(this, EditSubjectFieldController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.subjectsRepository = subjectsRepository;
    _this.language = language;
    _this.subjectField = subjectField;
    _this.mode = subjectField.id > 0 ? "edit" : "create";
    _this.header = _this.mode === "edit" ? language.Generic.SetupSchoolCalendar.kEditSubjectField : language.Generic.SetupSchoolCalendar.kAddSubjectField;
    _this.initButtons();
    return _this;
  }
  _createClass(EditSubjectFieldController, [{
    key: "initButtons",
    value: function initButtons() {
      var _this2 = this;
      this.buttons = [];
      this.buttons.push({
        action: function action() {
          return _this2.ok();
        },
        icon: "glyphicon glyphicon-floppy-save",
        "class": _nsModal.ButtonClass.primary,
        title: this.mode == "edit" ? this.language.Generic.Buttons.kSave : this.language.Generic.Buttons.kAdd
      });
      if (this.mode == "edit") {
        this.buttons.push({
          action: function action() {
            return _this2["delete"]();
          },
          icon: "glyphicon glyphicon-minus-sign",
          "class": _nsModal.ButtonClass.danger,
          title: this.language.Generic.Buttons.kRemove
        });
      }
      this.buttons.push({
        action: function action() {
          return _this2.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle",
        title: this.language.Generic.Buttons.kCancel
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this3 = this;
      var id = this.subjectField.id;
      //todo. запрашивать используется ли обр. область в других орагнизациях. если используется = запрещать удаление
      //сейчас флаг used - опрделяется в том, числе если используется в текущей организации
      if (this.subjectField.used) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kErrDeleteExistsAssignedSubjectSelf);
        return;
      } else if (this.subjectField.usedInOtherSchool) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kErrDeleteExistsAssignedSubject);
        return;
      }
      var confirm = "".concat(this.language.Generic.SetupSchoolCalendar.kSubjectFieldWillBeDeleted, " ").concat(this.language.Generic.Common.kContinue);
      this.$dialogs.confirmDelete(confirm).then(function () {
        return _this3.$longWork.execute(_this3.subjectsRepository.removeSubjectFields([id]));
      }).then(function () {
        _this3.$alerts.success(_this3.language.Generic.SetupSchoolCalendar.kSubjectFieldDeleted);
        _this3.$uibModalInstance.close(_this3.subjectField);
      });
      ;
    }
  }, {
    key: "ok",
    value: function ok() {
      var _this4 = this;
      var promise;
      if (this.mode === "edit") {
        if (this.subjectField.used) {
          this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kErrEditExistsAssignedSubjectSelf);
          return;
        } else if (this.subjectField.usedInOtherSchool) {
          this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kErrEditExistsAssignedSubject);
          return;
        }
        promise = this.subjectsRepository.updateSubjectField(this.subjectField).then(function () {
          _this4.$alerts.success(_this4.language.Generic.SetupSchoolCalendar.kSubjectFieldEdited);
        });
      } else {
        promise = this.subjectsRepository.createSubjectField(this.subjectField).then(function () {
          _this4.$alerts.success(_this4.language.Generic.SetupSchoolCalendar.kSubjectFieldCreated);
        });
      }
      this.$longWork.execute(promise).then(function () {
        _this4.$uibModalInstance.close(_this4.subjectField);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EditSubjectFieldController;
}(_netcityModalCtrl.NetCityModalController);
var EditSubjectFieldComponent = {
  controller: EditSubjectFieldController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editSubjectField/editSubjectField.component.html"
};
exports.EditSubjectFieldComponent = EditSubjectFieldComponent;

/***/ }),
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectsLanguageService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectsLanguageService = /*#__PURE__*/function () {
  function SubjectsLanguageService(language, extraActivity) {
    _classCallCheck(this, SubjectsLanguageService);
    this.language = language;
    this.extraActivity = extraActivity;
  }
  _createClass(SubjectsLanguageService, [{
    key: "SuccessChange",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSuccessChangeExtraActivitySubject : this.language.Generic.SetupSchoolCalendar.kSuccessChangeSubject;
    }
  }, {
    key: "TitleCreate",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kTitleCreateExtraActivitySubject : this.language.Generic.SetupSchoolCalendar.kTitleCreateSubject;
    }
  }, {
    key: "TitleEdit",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kTitleEditExtraActivitySubject : this.language.Generic.SetupSchoolCalendar.kTitleEditSubject;
    }
  }, {
    key: "List",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjectExtraActivityList : this.language.Generic.SetupSchoolCalendar.kSubjectList;
    }
  }, {
    key: "FullName",
    get: function get() {
      return this.language.Generic.SetupSchoolCalendar.kFullName;
    }
  }, {
    key: "EnterFullName",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kEnterSubjectExtraActivityName : this.language.Generic.SetupSchoolCalendar.kEnterSubjectName;
    }
  }, {
    key: "FullNameExist",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjFullNameExtraActivityExists : this.language.Generic.SetupSchoolCalendar.kSubjFullNameExists;
    }
  }, {
    key: "ShortName",
    get: function get() {
      return this.language.Generic.SetupSchoolCalendar.kAbbrName;
    }
  }, {
    key: "EnterShortName",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kEnterSubjectExtraActivityShortName : this.language.Generic.SetupSchoolCalendar.kEnterSubjectShortName;
    }
  }, {
    key: "ShortNameExist",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjShortNameExtraActivityExists : this.language.Generic.SetupSchoolCalendar.kSubjShortNameExists;
    }
  }, {
    key: "Field",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjFieldExtraActivity : this.language.Generic.SetupSchoolCalendar.kSubjField;
    }
  }, {
    key: "FieldS",
    get: function get() {
      return this.language.Generic.SetupSchoolCalendar.kSubjFieldS;
    }
  }, {
    key: "FieldExist",
    get: function get() {
      return this.language.Generic.SetupSchoolCalendar.kSubjFieldNameExists;
    }
  }, {
    key: "Add",
    get: function get() {
      return this.extraActivity ? this.language.Generic.Common.kAddSubjectExtraActivity : this.language.Generic.Common.kAddSubject;
    }
  }, {
    key: "Edit",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kEditSubjectExtraActivity : this.language.Generic.SetupSchoolCalendar.kEditSubject;
    }
  }, {
    key: "Remove",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kRemoveSubjectsExtraActivity : this.language.Generic.SetupSchoolCalendar.kRemoveSubjects;
    }
  }, {
    key: "RemoveWarning",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kRemoveSubjectExtraActivityWarning : this.language.SetupSchoolCalendar.kRemoveSubjectWarning;
    }
  }, {
    key: "WasRemoved",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kWasRemovedExtraActivity : this.language.Generic.SetupSchoolCalendar.kWasRemoved;
    }
  }, {
    key: "NoDel",
    get: function get() {
      return this.extraActivity ? this.language.Generic.Common.kNoDelSubjectsExtraActivity : this.language.Generic.Common.kNoDelSubjects;
    }
  }, {
    key: "SubGroups",
    get: function get() {
      return this.language.Generic.SetupSchoolCalendar.kSubjectSubGroups;
    }
  }, {
    key: "Teachers",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjTeachersExtraActivity : this.language.Generic.SetupSchoolCalendar.kSubjTeachers;
    }
  }, {
    key: "TeachersSaved",
    get: function get() {
      return this.extraActivity ? this.language.Generic.SetupSchoolCalendar.kSubjectExtraActivityTeachersSaved : this.language.Generic.SetupSchoolCalendar.kSubjectTeachersSaved;
    }
  }]);
  return SubjectsLanguageService;
}();
exports.SubjectsLanguageService = SubjectsLanguageService;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentSubjectsComponent = void 0;
var _editParentSubjects = __webpack_require__(18);
var _multiSelectable = _interopRequireDefault(__webpack_require__(19));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ParentSubjectsController = /*#__PURE__*/function () {
  ParentSubjectsController.$inject = ["$longWork", "$appLoader", "$dialogs", "subjectsRepository", "parentSubjectsRepository", "$q", "appContext", "pageContext", "$routeParams", "$uibModal", "language"];
  /*@ngInject*/
  function ParentSubjectsController($longWork, $appLoader, $dialogs, subjectsRepository, parentSubjectsRepository, $q, appContext, pageContext, $routeParams, $uibModal, language) {
    _classCallCheck(this, ParentSubjectsController);
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.subjectsRepository = subjectsRepository;
    this.parentSubjectsRepository = parentSubjectsRepository;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.language = language;
    this.selected = new _multiSelectable["default"]();
    this.wizard = false;
    pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleSubjectGroups;
    pageContext.parent = {
      title: this.language.Generic.SetupSchoolCalendar.kSubjectList,
      href: "/subjects/"
    };
    pageContext.back = {
      href: "/subjects/"
    };
    this.wizard = $routeParams.wizard;
    this.state = {
      readOnly: appContext.readOnly,
      emptyData: false,
      dataReady: false
    };
    this.load();
  }
  //загрузка данных
  _createClass(ParentSubjectsController, [{
    key: "load",
    value: function load() {
      var _this = this;
      var loadParentSubjects = this.subjectsRepository.getParentSubjects(true).then(function (parentSubjects) {
        _this.parentSubjects = parentSubjects;
        _this.state.emptyData = _this.parentSubjects.length == 0;
      });
      return this.$q.all([loadParentSubjects]).then(function () {
        _this.selected.dropSelect();
        _this.state.dataReady = true;
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "canRemove",
    value: function canRemove(parentSubject) {
      return parentSubject.name != this.language.Generic.SetupSchoolCalendar.kLanguages && parentSubject.subjects.length == 0;
    }
  }, {
    key: "getSuppressionSign",
    value: function getSuppressionSign(parentSubject) {
      if (parentSubject.name == this.language.Generic.SetupSchoolCalendar.kLanguages) {
        return "&nbsp;";
      }
      if (parentSubject.subjects.length > 0) {
        return "X";
      }
      return "";
    }
  }, {
    key: "showSubjects",
    value: function showSubjects(parentSubject) {
      if (parentSubject.subjects.length > 0) {
        return parentSubject.subjects.map(function (x) {
          return x.name;
        }).join("<br />");
      }
      return this.language.Generic.SetupSchoolCalendar.kNoSubjects;
    }
  }, {
    key: "editParentSubject",
    value: function editParentSubject(parentSubject) {
      var _this2 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editParentSubjects.EditParentSubjectsComponent.controller,
        controllerAs: _editParentSubjects.EditParentSubjectsComponent.controllerAs,
        templateUrl: _editParentSubjects.EditParentSubjectsComponent.templateUrl,
        resolve: {
          parentSubjectInit: function parentSubjectInit() {
            return angular.copy(parentSubject);
          }
        }
      });
      modalInstance.result.then(function () {
        _this2.load();
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      if (this.selected.items.length == 0) {
        return this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kAltNotSel);
      }
      return this.$dialogs.confirm(this.language.Generic.SetupSchoolCalendar.kConDelWarn + '. ' + this.language.Generic.Common.kContinue).then(function () {
        var work = _this3.parentSubjectsRepository.removeParentSubjects(_this3.selected.items.map(function (x) {
          return x.id;
        })).then(function () {
          return _this3.load();
        });
        return _this3.$longWork.execute(work).then(function () {
          return _this3.$dialogs.message(_this3.language.Generic.SetupSchoolCalendar.kParentSubjectsWasDeleted);
        });
      });
    }
  }]);
  return ParentSubjectsController;
}();
var ParentSubjectsComponent = {
  controller: ParentSubjectsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/parentSubjects/parentSubjects.component.html"
};
exports.ParentSubjectsComponent = ParentSubjectsComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditParentSubjectsComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(19));
var _netcityModalCtrl = __webpack_require__(14);
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
var EditParentSubjectsController = /*#__PURE__*/function (_NetCityModalControll) {
  EditParentSubjectsController.$inject = ["$scope", "$longWork", "changeTracker", "$appLoader", "$dialogs", "subjectsRepository", "parentSubjectsRepository", "$q", "appContext", "$uibModalInstance", "parentSubjectInit", "language"];
  _inherits(EditParentSubjectsController, _NetCityModalControll);
  var _super = _createSuper(EditParentSubjectsController);
  /*@ngInject*/
  function EditParentSubjectsController($scope, $longWork, changeTracker, $appLoader, $dialogs, subjectsRepository, parentSubjectsRepository, $q, appContext, $uibModalInstance, parentSubjectInit, language) {
    var _this;
    _classCallCheck(this, EditParentSubjectsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.$appLoader = $appLoader;
    _this.subjectsRepository = subjectsRepository;
    _this.parentSubjectsRepository = parentSubjectsRepository;
    _this.$q = $q;
    _this.parentSubjectInit = parentSubjectInit;
    _this.language = language;
    _this.selected = new _multiSelectable["default"]();
    _this.emptySubjectField = {
      order: null,
      id: -1,
      name: _this.language.Generic.SetupSchoolCalendar.kFreeSF
    };
    //this.parentSubject = parentSubj;
    _this.subjectId = _this.parentSubjectInit == null || _this.parentSubjectInit.subjects.length == 0 ? -1 : _this.parentSubjectInit.subjects[0].id;
    _this.state = {
      readOnly: appContext.readOnly,
      emptySubjects: false,
      dataReady: false,
      newParentSubject: _this.parentSubjectInit == null,
      constSubjectField: _this.subjectId != -1,
      parentSubjectLanguages: _this.parentSubjectInit != null && _this.parentSubjectInit.name.toUpperCase() == _this.language.Generic.SetupSchoolCalendar.kLanguages.toUpperCase()
    };
    _this.buildButtons();
    _this.load();
    return _this;
  }
  //загрузка данных
  _createClass(EditParentSubjectsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      this.parentSubject = this.state.newParentSubject ? {
        id: -1,
        name: "",
        abbr: "",
        subjects: []
      } : angular.copy(this.parentSubjectInit);
      var loads = [];
      if (this.state.constSubjectField) {
        var loadSubjectField = this.parentSubjectsRepository.getSubjectField(this.state.newParentSubject ? 0 : this.parentSubject.id, this.subjectId).then(function (subjectField) {
          _this2.subjectField = subjectField;
          _this2.subjects = _this2.subjectField.subjects;
          _this2.state.emptySubjects = _this2.subjects.length == 0;
          _this2.selected.dropSelect();
          if (!_this2.state.emptySubjects && _this2.parentSubject.subjects.length > 0) {
            _this2.subjects.filter(function (s) {
              return _this2.parentSubject.subjects.some(function (s2) {
                return s2.id == s.id;
              });
            }).forEach(function (s) {
              return _this2.selected.select(s);
            });
          }
        });
        loads.push(loadSubjectField);
      } else {
        var loadSubjectFields = this.subjectsRepository.getSubjectFields(false, true).then(function (subjectFields) {
          _this2.subjectFields = subjectFields;
          _this2.subjectFields.unshift(_this2.emptySubjectField);
          _this2.curSubjectField = _this2.subjectFields[0];
        });
        loads.push(loadSubjectFields);
        var loadSubjectsWithoutParent = this.subjectsRepository.getSubjects({
          parentSubjectId: null,
          extraCurricular: false
        }).then(function (freeSubjects) {
          _this2.freeSubjects = freeSubjects;
          _this2.freeSubjects.filter(function (x) {
            return x.subjectField == null;
          }).forEach(function (x) {
            x.subjectField = _this2.emptySubjectField;
          });
        });
        loads.push(loadSubjectsWithoutParent);
      }
      var loadAll = this.$q.all(loads).then(function () {
        if (!_this2.state.constSubjectField) {
          _this2.filterSubjectsByField();
        }
        _this2.state.dataReady = true;
        _this2.$appLoader.hide();
        _this2.changeTracker.clearDataChanges($(".modal"));
      });
      return loadAll;
    }
  }, {
    key: "filterSubjectsByField",
    value: function filterSubjectsByField() {
      var _this3 = this;
      this.subjects = this.freeSubjects.filter(function (s) {
        return s.subjectField.id == _this3.curSubjectField.id;
      });
      this.state.emptySubjects = this.subjects.length == 0;
    }
  }, {
    key: "buildButtons",
    value: function buildButtons() {
      var _this4 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this4.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var resetBtn = {
        title: this.language.Generic.Buttons.kReset,
        action: function action() {
          return _this4.reset();
        },
        icon: "glyphicon glyphicon-repeat"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this4.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.header = this.language.Generic.SetupSchoolCalendar.kTitleEditSubjectGroup;
      this.buttons = [saveBtn, resetBtn, cancelBtn];
    }
  }, {
    key: "doConfirms",
    value: function doConfirms() {
      var _this5 = this;
      return (this.selected.items.length < 2 ? this.$dialogs.confirm(this.language.Generic.ServAdmin.kParentSubjectShouldHaveMore) : Promise.resolve()).then(function () {
        return _this5.$dialogs.confirm(_this5.language.Generic.SetupSchoolCalendar.kClConGroupWarning + ". " + _this5.language.Generic.Common.kContinue);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this6 = this;
      if (!this.changeTracker.isDataChanged($(".modal"))) {
        return this.$dialogs.message(this.language.Generic.Common.kNoChanges);
      }
      if (this.parentSubject.name == "") {
        return this.$dialogs.message(this.language.Generic.ServAdmin.kGlobalSubjectNameCantBeEmpty);
      }
      if (this.parentSubject.abbr == "") {
        return this.$dialogs.message(this.language.Generic.ServAdmin.kGlobalSubjectAbbrNameCantBeEmpty);
      }
      this.doConfirms().then(function () {
        var parentSubjects = [];
        _this6.selected.items.forEach(function (sel) {
          parentSubjects.push({
            id: sel.id,
            name: sel.name
          });
        });
        _this6.parentSubject.subjects = parentSubjects;
        var work = _this6.parentSubjectsRepository.editParentSubject(_this6.parentSubject).then(function () {
          return _this6.$uibModalInstance.close();
        });
        return _this6.$longWork.execute(work).then(function () {
          return _this6.$dialogs.message(_this6.language.Generic.SetupSchoolCalendar.kParentSubjectsWasSaved);
        });
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this7 = this;
      if (!this.changeTracker.isDataChanged($(".modal"))) {
        this.$dialogs.message(this.language.Generic.Common.kNoChanges);
        return;
      }
      this.load().then(function () {
        _this7.$dialogs.message(_this7.language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      var _this8 = this;
      this.changeTracker.check($(".modal")).then(function () {
        return _this8.$uibModalInstance.dismiss("cancel");
      });
    }
  }]);
  return EditParentSubjectsController;
}(_netcityModalCtrl.NetCityModalController);
var EditParentSubjectsComponent = {
  controller: EditParentSubjectsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/parentSubjects/editParentSubjects.component.html"
};
exports.EditParentSubjectsComponent = EditParentSubjectsComponent;

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VacationsRepository = exports.SubjectGroupsRepository = exports.ProfilesRepository = exports.CurriculumRepository = void 0;
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
}(_baseRepository.BaseRepository); //устарело. использовать terms.repository.ts
// Раз устарело, то лучше закомментировать, чтобы не было потенциальных конфликтов - а то было - на уровне файла Контроллера - ссылка на новый правильный Репозиторий, 
// но на уровне Приложения (app.ts) - ссылка на этот устаревший.
/*
export class TermsRepository extends BaseRepository {
    getTerms(sgId: number) {
        const params: any = {};
        if (sgId) {
            params.sgId = sgId;
        }
        return this.$http.get("/webapi/terms", { params: params })
            .then(this.handleResponse, this.handleError);
    }

    getTermInfo(termId: number) {
        return this.$http.get("/webapi/terms/" + termId)
            .then(this.handleResponse, this.handleError);
    }

    save(terms) {
        return this.$http.post("/webapi/terms", terms)
            .catch(this.handleError);
    }

}
*/
exports.VacationsRepository = VacationsRepository;
var SubjectGroupsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(SubjectGroupsRepository, _BaseRepository2);
  var _super2 = _createSuper(SubjectGroupsRepository);
  function SubjectGroupsRepository() {
    _classCallCheck(this, SubjectGroupsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(SubjectGroupsRepository, [{
    key: "getEmptyIupGroups",
    value: function getEmptyIupGroups() {
      return this.$http.get("/webapi/subjectgroups/emptyIupGroups").then(this.handleResponse, this.handleError);
    }
  }]);
  return SubjectGroupsRepository;
}(_baseRepository.BaseRepository);
exports.SubjectGroupsRepository = SubjectGroupsRepository;
var CurriculumRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(CurriculumRepository, _BaseRepository3);
  var _super3 = _createSuper(CurriculumRepository);
  function CurriculumRepository() {
    _classCallCheck(this, CurriculumRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(CurriculumRepository, [{
    key: "getLimits",
    value: function getLimits(iup) {
      var extraActivity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var params = {};
      if (iup) {
        params.iup = true;
      }
      params.extraActivity = extraActivity;
      return this.$http.get("/webapi/curriculum/limits", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGrades",
    value: function getGrades() {
      return this.$http.get("/webapi/curriculum/grades").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getLimitsGrades",
    value: function getLimitsGrades() {
      return this.$http.get("/webapi/curriculum/limits/grades").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getHoursCount",
    value: function getHoursCount(sgId, termId) {
      return this.get("/webapi/curriculum/hours/count", {
        params: {
          sgId: sgId,
          termId: termId
        }
      });
    }
  }, {
    key: "getComponents",
    value: function getComponents(iup, expand) {
      var params = {
        expand: expand
      };
      if (iup) {
        params.iup = true;
      }
      return this.get("/webapi/curriculum/components", {
        params: params
      });
    }
  }, {
    key: "getBaseComponent",
    value: function getBaseComponent() {
      return this.get("/webapi/curriculum/components/base");
    }
  }, {
    key: "getEaDirections",
    value: function getEaDirections() {
      return this.$http.get("/webapi/curriculum/eadirections").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGradeSteps",
    value: function getGradeSteps() {
      return this.$http.get("/webapi/curriculum/gradesteps").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createComponent",
    value: function createComponent(component) {
      return this.$http.put("/webapi/curriculum/components", component).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceComponent",
    value: function replaceComponent(componentId, compnentIdTo, schoolyearIds) {
      var data = {
        componentId: compnentIdTo,
        schoolyearIds: schoolyearIds
      };
      return this.post("/webapi/curriculum/components/".concat(componentId, "/replace"), data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "orderComponents",
    value: function orderComponents(componentIds) {
      return this.$http.post("/webapi/curriculum/components/order", null, {
        params: {
          id: componentIds
        }
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "deleteComponents",
    value: function deleteComponents(components) {
      var params = {
        id: components
      };
      return this.$http["delete"]("/webapi/curriculum/components", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveLimits",
    value: function saveLimits(limits, iup) {
      var params = {};
      if (iup) {
        params.iup = iup;
      }
      return this.$http.post("/webapi/curriculum/limits", limits, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return CurriculumRepository;
}(_baseRepository.BaseRepository);
exports.CurriculumRepository = CurriculumRepository;
var ProfilesRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(ProfilesRepository, _BaseRepository4);
  var _super4 = _createSuper(ProfilesRepository);
  function ProfilesRepository() {
    _classCallCheck(this, ProfilesRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(ProfilesRepository, [{
    key: "getProfiles",
    value: function getProfiles() {
      return this.get("/webapi/curriculum/profiles")["catch"](this.handleError);
    }
  }, {
    key: "getProfileGradeClassList",
    value: function getProfileGradeClassList() {
      return this.get("/webapi/curriculum/profiles/getProfileGradeClassList")["catch"](this.handleError);
    }
  }, {
    key: "saveProfiles",
    value: function saveProfiles(profiles) {
      return this.$http.post("/webapi/curriculum/profiles", profiles)["catch"](this.handleError);
    }
  }, {
    key: "deleteProfile",
    value: function deleteProfile(profiles) {
      var id = profiles.map(function (x) {
        return x.id;
      });
      return this.$http["delete"]("/webapi/curriculum/profiles", {
        params: {
          profileId: id
        }
      })["catch"](this.handleError);
    }
  }, {
    key: "isNotAllGradesHasTerms",
    value: function isNotAllGradesHasTerms() {
      return this.get("/webapi/curriculum/profiles/isNotAllGradesHasTerms")["catch"](this.handleError);
    }
  }, {
    key: "withTermTypeNotDefined",
    value: function withTermTypeNotDefined() {
      return this.get("/webapi/curriculum/profiles/withTermTypeNotDefined")["catch"](this.handleError);
    }
  }]);
  return ProfilesRepository;
}(_baseRepository.BaseRepository);
exports.ProfilesRepository = ProfilesRepository;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesRepository = void 0;
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
var ProfilesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ProfilesRepository, _BaseRepository);
  var _super = _createSuper(ProfilesRepository);
  function ProfilesRepository() {
    _classCallCheck(this, ProfilesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ProfilesRepository, [{
    key: "getProfiles",
    value: function getProfiles() {
      return this.$http.get("/webapi/curriculum/profiles").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getProfileGradeList",
    value: function getProfileGradeList(used, wizard) {
      var params = {};
      if (used) {
        params.used = true;
      }
      if (wizard) {
        params.wizard = true;
      }
      return this.$http.get("/webapi/curriculum/profiles/grades", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveProfiles",
    value: function saveProfiles(profiles) {
      return this.$http.post("/webapi/curriculum/profiles", profiles)
      //.then(this.handleResponse)
      ["catch"](this.handleError);
    }
  }, {
    key: "deleteProfile",
    value: function deleteProfile(profiles) {
      var id = profiles.map(function (x) {
        return x.id;
      });
      return this.$http["delete"]("/webapi/curriculum/profiles", {
        params: {
          profileId: id
        }
      })
      //.then(this.handleResponse)
      ["catch"](this.handleError);
    }
  }, {
    key: "isNotAllGradesHasTerms",
    value: function isNotAllGradesHasTerms() {
      return this.$http.get("/webapi/curriculum/profiles/isNotAllGradesHasTerms").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "withTermTypeNotDefined",
    value: function withTermTypeNotDefined() {
      return this.$http.get("/webapi/curriculum/profiles/withTermTypeNotDefined").then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return ProfilesRepository;
}(_baseRepository.BaseRepository);
exports.ProfilesRepository = ProfilesRepository;

/***/ }),
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsController = exports.TermsComponent = void 0;
var _termHelper = _interopRequireDefault(__webpack_require__(28));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TermsController = /*#__PURE__*/function () {
  TermsController.$inject = ["pageContext", "$scope", "$appLoader", "$q", "$location", "$alerts", "$timeout", "termsRepository", "changeTracker", "yearsRepository", "$sce", "greenTextService"];
  /*@ngInject*/
  function TermsController(pageContext, $scope, $appLoader, $q, $location, $alerts, $timeout, termsRepository, changeTracker, yearsRepository, $sce, greenTextService) {
    _classCallCheck(this, TermsController);
    this.language = language;
    this.data = {
      terms: [],
      yearInfo: null
    };
    this.state = {
      dataReady: false
    };
    this.helper = new _termHelper["default"]();

    // настройки дат
    this.dateUtil = dateUtils.asUTCDate;
    this.dateDisplay = null;
    this.dateRangeOptions = {
      calendarMinDate: null,
      calendarMaxDate: null,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.$location = $location;
    this.$alerts = $alerts;
    this.$timeout = $timeout;
    this.$sce = $sce;
    this.greenTextService = greenTextService;
    this.repository = termsRepository;
    this.yearsRepository = yearsRepository;
    this.changeTracker = changeTracker;
    this.pageContext = pageContext;
    this.load();
  }
  _createClass(TermsController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.wizard ? this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + " 8. " + this.language.Generic.SetupSchoolCalendar.kTitleTerms))) : this.language.Generic.SetupSchoolCalendar.kTitleTerms;
      this.pageContext.parent = {
        title: this.language.Generic.MenuFolders.kFNSchoolYearAndTerms,
        href: "/years/"
      };
      this.pageContext.back = {
        history: false
      };
    }
  }, {
    key: "goTermTypes",
    value: function goTermTypes() {
      if (this.wizard) {
        this.$location.path("/termtypes/");
      } else {
        this.$location.path("/termtypes/grades/");
      }
      this.$scope.$applyAsync();
    }
  }, {
    key: "initDateRangeOptions",
    value: function initDateRangeOptions() {
      var yearInfo = this.data.yearInfo;
      var minDate = new Date(yearInfo.startDate);
      var maxDate = new Date(yearInfo.endDate);
      this.dateRangeOptions.calendarMinDate = minDate;
      this.dateRangeOptions.calendarMaxDate = maxDate;
    }
  }, {
    key: "prepareTerms",
    value: function prepareTerms() {
      var termGroups = _.groupBy(this.data.terms, function (term) {
        return term.termTypeId;
      });
      _.each(termGroups, function (group, indx) {
        var firstTerm = _.first(group);
        firstTerm.first = true;
        if (indx > 0) {
          firstTerm.typeChanged = true;
        }
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      var promises = [];
      var termsReady = this.repository.getTerms().then(function (terms) {
        _this.data.terms = terms;
      });
      promises.push(termsReady);
      var yearInfoReady = this.yearsRepository.getYearInfo().then(function (yearInfo) {
        _this.data.yearInfo = yearInfo;
      });
      promises.push(yearInfoReady);
      var queries = this.$q.all(promises);
      queries.then(function () {
        _this.initPage();
        _this.prepareTerms();
        var options = {
          day: "numeric",
          month: "long",
          year: "numeric"
        };
        _this.dateDisplay = "".concat(new Date(_this.data.yearInfo.startDate).toLocaleDateString("ru", options), " - ").concat(new Date(_this.data.yearInfo.endDate).toLocaleDateString("ru", options));
        _this.initDateRangeOptions();
        _this.state.dataReady = true;
        _this.$appLoader.hide();
        _this.changeTracker.clearDataChanges();
      });
    }
  }, {
    key: "inCurrentEducYearRange",
    value: function inCurrentEducYearRange(strDate) {
      if (!strDate) {
        return true;
      }
      var date = new Date(strDate);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();

      // Отбрасываем время
      date = new Date(year, month, day);
      var minDate = new Date(this.data.yearInfo.startDate);
      var maxDate = new Date(this.data.yearInfo.endDate);
      return date >= minDate && date <= maxDate;
    }
  }, {
    key: "alerts",
    get: function get() {
      var _this2 = this;
      return {
        isStartBeforeEnd: function isStartBeforeEnd(term) {
          var startDate = term.startDate;
          var endDate = term.endDate;
          return startDate && endDate && _this2.dateUtil(startDate) > _this2.dateUtil(endDate);
        },
        isInEducYear: function isInEducYear(term) {
          var startDate = term.startDate;
          var endDate = term.endDate;
          return _this2.inCurrentEducYearRange(startDate) && _this2.inCurrentEducYearRange(endDate);
        },
        isTermOverlapped: function isTermOverlapped(term) {
          var terms = _.where(_this2.data.terms, {
            termTypeId: term.termTypeId
          });
          var index = _.findIndex(terms, {
            id: term.id
          });
          if (term.startDate) {
            var startDate = new Date(term.startDate);
            for (var i = index - 1; i >= 0; i--) {
              var currTerm = terms[i];
              var lastEndDate = new Date(currTerm.endDate);
              if (startDate <= lastEndDate) {
                return true;
              }
            }
          }
          return false;
        },
        isTermStartDifferentYearStart: function isTermStartDifferentYearStart(term) {
          if (term.first && term.startDate) {
            var d = dateUtils.asUTCDate(term.startDate);
            var yearStart = dateUtils.asUTCDate(_this2.data.yearInfo.startDate);
            return d.getTime() !== yearStart.getTime();
          }
          return false;
        }
      };
    }

    // валидирует даты учебных периодов
  }, {
    key: "isTermDatesValid",
    value: function isTermDatesValid() {
      var termGroups = _.groupBy(this.data.terms, function (term) {
        return term.termTypeId;
      });
      var termTypes = Object.keys(termGroups);
      for (var i = 0; i < termTypes.length; i++) {
        var termType = termTypes[i];
        var terms = termGroups[termType];
        for (var j = 0; j < terms.length; j++) {
          var term = terms[j];
          if (!term.startDate) {
            return false;
          }
          if (!term.endDate) {
            return false;
          }
          if (!this.alerts.isInEducYear(term)) {
            return false;
          }
          if (this.alerts.isStartBeforeEnd(term)) {
            return false;
          }
          if (this.alerts.isTermOverlapped(term)) {
            return false;
          }
          if (this.alerts.isTermStartDifferentYearStart(term)) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "canShift",
    value: function canShift(terms) {
      return !_.some(terms, function (term) {
        return !term.startDate || !term.endDate;
      });
    }

    // сдвигает периоды
  }, {
    key: "shiftTerms",
    value: function shiftTerms(changeTerm) {
      var changeTerms = _.where(this.data.terms, {
        termTypeId: changeTerm.termTypeId
      });
      if (this.canShift(changeTerms)) {
        var index = _.findIndex(changeTerms, {
          id: changeTerm.id
        });
        var startDt = new Date(changeTerm.startDate);
        var endDt = new Date(changeTerm.endDate);
        if (startDt > endDt) {
          changeTerm.endDate = changeTerm.startDate;
        }

        // обход
        this.helper.backward(changeTerms, index);
        this.helper.forward(changeTerms, index);
        this.$scope.$apply();
      }
    }
  }, {
    key: "canSaveTerms",
    value: function canSaveTerms() {
      var _this3 = this;
      var termGroups = _.chain(this.data.terms).groupBy(function (term) {
        return term.termTypeId;
      }).map(function (value, key) {
        return value;
      }).value();
      var dtLastEndPrev = this.dateUtil(_.chain(termGroups).first().last().value().endDate);
      return _.chain(termGroups).map(function (x) {
        return _.last(x).endDate;
      }).every(function (x) {
        return _this3.dateUtil(x).getTime() === dtLastEndPrev.getTime();
      }).value();
    }
  }, {
    key: "saveTerms",
    value: function saveTerms() {
      var _this4 = this;
      var processing = $.show.processing();
      this.repository.save(this.data.terms).then(function () {
        processing.close();
        _this4.$alerts.success(_this4.language.Generic.SetupSchoolCalendar.kTermDataSaved);
        _this4.load();
      });
    }

    // сохраняет учебные периоды
  }, {
    key: "save",
    value: function save(valid) {
      valid = valid && this.isTermDatesValid();
      if (!valid) {
        return;
      }
      if (this.canSaveTerms()) {
        this.saveTerms();
      } else {
        var message = "".concat(this.language.Generic.SetupSchoolCalendar.kDifferentLastTermEnds, ". ").concat(this.language.Generic.Common.kContinue);
        $.show.confirmation(message).then(this.saveTerms.bind(this));
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load();
    }

    // ленивые методы
  }, {
    key: "lazySave",
    get: function get() {
      return _.debounce(this.save, 1500, true);
    }
  }, {
    key: "lazyReset",
    get: function get() {
      return _.debounce(this.reset, 1500, true);
    }
  }]);
  return TermsController;
}();
exports.TermsController = TermsController;
var TermsComponent = {
  controller: TermsController,
  controllerAs: "ctrl",
  selector: "terms",
  bindings: {
    wizard: "<?"
  },
  templateUrl: "/static/dist/app/school/calendar/terms/terms.component.html"
};
exports.TermsComponent = TermsComponent;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TermHelper = /*#__PURE__*/function () {
  function TermHelper() {
    _classCallCheck(this, TermHelper);
  }
  _createClass(TermHelper, [{
    key: "TermsIterator",
    value: function TermsIterator(aggregate, index) {
      var _index = index;
      var _aggregate = aggregate;
      var _lastIndex = aggregate.length - 1;
      return {
        next: function next() {
          if (_index >= _lastIndex) {
            return null;
          }
          return _aggregate[++index];
        }
      };
    }
  }, {
    key: "ReverseTermsIterator",
    value: function ReverseTermsIterator(aggregate, index) {
      var _index = index;
      var _aggregate = aggregate;
      var _firstIndex = 0;
      return {
        next: function next() {
          if (_index <= _firstIndex) {
            return null;
          }
          return _aggregate[--index];
        }
      };
    }

    // Вычисляет разницу между датами в днях
  }, {
    key: "getDaysDiff",
    value: function getDaysDiff(start, end) {
      var MS_PER_DAY = 1000 * 60 * 60 * 24;
      var diff = end - start;
      var days = Math.floor(diff / MS_PER_DAY);
      return days;
    }
  }, {
    key: "getDateParts",
    value: function getDateParts(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      };
    }
  }, {
    key: "backward",
    value: function backward(terms, index) {
      var iterator = this.ReverseTermsIterator(terms, index);
      var first = terms[index];
      var startDate = new Date(first.startDate);
      var current = iterator.next();
      while (current) {
        var dateInfo = this.getTermDateInfo(current);
        if (dateInfo.endDate > startDate || this.getDaysDiff(dateInfo.endDate, startDate) !== 1) {
          var dateParts = this.getDateParts(startDate);
          dateInfo.endDate = dateUtils.getUTCDate(dateParts.year, dateParts.month, dateParts.day - 1);
          current.endDate = dateInfo.endDate.toISOString();
        }
        if (dateInfo.startDate > dateInfo.endDate) {
          current.startDate = dateInfo.endDate.toISOString();
        }
        startDate = dateInfo.startDate;
        current = iterator.next();
      }
    }
  }, {
    key: "forward",
    value: function forward(terms, index) {
      var iterator = this.TermsIterator(terms, index);
      var first = terms[index];
      var endDate = new Date(first.endDate);
      var current = iterator.next();
      while (current) {
        var dateInfo = this.getTermDateInfo(current);
        if (endDate > dateInfo.startDate || this.getDaysDiff(endDate, dateInfo.startDate) !== 1) {
          var dateParts = this.getDateParts(endDate);
          dateInfo.startDate = dateUtils.getUTCDate(dateParts.year, dateParts.month, dateParts.day + 1);
          current.startDate = dateInfo.startDate.toISOString();
        }
        if (dateInfo.startDate > dateInfo.endDate) {
          current.endDate = dateInfo.startDate.toISOString();
        }
        endDate = dateInfo.endDate;
        current = iterator.next();
      }
    }
  }, {
    key: "getTermDateInfo",
    value: function getTermDateInfo(term) {
      return {
        startDate: new Date(term.startDate),
        endDate: new Date(term.endDate)
      };
    }
  }]);
  return TermHelper;
}();
module.exports = TermHelper;

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumComponent = void 0;
__webpack_require__(31);
var _curriculumplan = __webpack_require__(33);
var _addhours = __webpack_require__(34);
var _copyhours = __webpack_require__(35);
var _iupPlan = __webpack_require__(36);
var _classicPlan = __webpack_require__(38);
var _printCurriculumPlan = __webpack_require__(40);
var _extraActivityPlan = __webpack_require__(41);
var _termtypes = __webpack_require__(39);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var parentSubjectsViewTypes = [{
  id: _curriculumplan.CurriculumPlanSubjectsViewType.subjects,
  name: language.Generic.SetupSchoolCurPlan.kSubjectGroups_Subjects
}, {
  id: _curriculumplan.CurriculumPlanSubjectsViewType.parentSubjects,
  name: language.Generic.SetupSchoolCurPlan.kSubjectGroups_GroupName
}];
var CurriculumPlanController = /*#__PURE__*/function () {
  CurriculumPlanController.$inject = ["$scope", "$q", "$uibModal", "$routeParams", "language", "appContext", "pageContext", "$longWork", "$appLoader", "$dialogs", "$alerts", "classesRepository", "curriculumRepository", "changeTracker", "curriculumPlanRepository", "profilesRepository", "subjectsRepository", "$timeout", "$location", "termTypesRepository", "taskQueueService"];
  /*@ngInject*/
  function CurriculumPlanController($scope, $q, $uibModal, $routeParams, language, appContext, pageContext, $longWork, $appLoader, $dialogs, $alerts, classesRepository, curriculumRepository, changeTracker, curriculumPlanRepository, profilesRepository, subjectsRepository, $timeout, $location, termTypesRepository, taskQueueService) {
    var _this = this;
    _classCallCheck(this, CurriculumPlanController);
    this.$scope = $scope;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.language = language;
    this.appContext = appContext;
    this.pageContext = pageContext;
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.classesRepository = classesRepository;
    this.curriculumRepository = curriculumRepository;
    this.changeTracker = changeTracker;
    this.curriculumPlanRepository = curriculumPlanRepository;
    this.profilesRepository = profilesRepository;
    this.subjectsRepository = subjectsRepository;
    this.$timeout = $timeout;
    this.$location = $location;
    this.termTypesRepository = termTypesRepository;
    this.taskQueueService = taskQueueService;
    this.settings = {
      viewType: _curriculumplan.CurriculumPlanViewType.byClasses,
      parentSubjectsViewType: _curriculumplan.CurriculumPlanSubjectsViewType.subjects
    };
    this.parentSubjectsViewTypes = parentSubjectsViewTypes;
    this.legends = [];
    this.iup = $routeParams.iup === "iup";
    this.extraActivity = ($routeParams.iup || "").toLowerCase() === "extraactivity";
    if (this.extraActivity) {
      this.iup = false;
    }
    this.planMessages = this.extraActivity ? new _curriculumplan.EaPlanMessages() : new _curriculumplan.PlanMessages();
    this.pageContext.title = this.planMessages.kTitleCurriculumPlan;
    this.pageContext.parent = null;
    this.readonly = appContext.readOnly;
    if (this.iup) {
      this.pageContext.title = language.Generic.Curriculum.kIUPTitle;
      this.legends.push({
        "class": "legend-iup-no-classes",
        description: this.language.SetupSchoolCurPlan.kNoIUPClassesForGradeAndTermType
      });
    }
    var prevValues = null;
    var param = this.extraActivity ? "?extraActivity=true" : this.iup ? "?iup=true" : "";
    this.filterPanelSettings = {
      url: "/webapi/curriculum/filters".concat(param),
      events: {
        ready: function ready(fpValues) {
          _this.changeTracker.check().then(function () {
            return _this.refsReady;
          }).then(function () {
            prevValues = fpValues;
            _this.load();
          }, function () {
            if (prevValues) {
              _this.filterPanel;
            }
          });
        },
        emptyChoice: function emptyChoice() {
          _this.emptyData = true;
          _this.refsReady.then(function () {
            return _this.load();
          });
          _this.$scope.$applyAsync();
        }
      }
    };
    var printContext = new _printCurriculumPlan.PrintCurriculumPlanService(!this.iup && !this.extraActivity);
    // настройки печати
    this.printSettings = {
      buildContent: printContext.getCuriculumPlan.bind(printContext),
      options: {
        viewHeader: true
      }
    };
    this.init();
  }
  _createClass(CurriculumPlanController, [{
    key: "isDataChanged",
    get: function get() {
      return this.changeTracker.isDataChanged();
    }
  }, {
    key: "getClearCurriculumPlanBtnTitle",
    value: function getClearCurriculumPlanBtnTitle() {
      return this.planMessages.kClearCurriculumPlanBtnTitle;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      var loads = [];
      var loadSubjects = this.subjectsRepository.getSubjects({
        extraCurricular: this.extraActivity
      }).then(function (subjects) {
        _this2.subjects = subjects;
      });
      loads.push(loadSubjects);
      var loadLimits = this.curriculumRepository.getLimits(this.iup, this.extraActivity).then(function (limits) {
        _this2.limits = limits;
        _this2.noLimits = limits.length === 0;
      });
      loads.push(loadLimits);
      var loadGradeSteps = this.curriculumRepository.getGradeSteps().then(function (steps) {
        _this2.stepRanges = steps;
      });
      loads.push(loadGradeSteps);
      if (this.extraActivity) {
        //this.components = [{ id: 0, name: "" }];
        this.withTermTypeNotDefined = false;
        var loadEaDirections = this.curriculumRepository.getEaDirections().then(function (eaDirections) {
          _this2.eaDirections = eaDirections;
        });
        loads.push(loadEaDirections);
      } else {
        var loadWithTermTypeNotDefined = this.profilesRepository.withTermTypeNotDefined().then(function (data) {
          _this2.withTermTypeNotDefined = data.length != 0;
        });
        loads.push(loadWithTermTypeNotDefined);
        var loadSubjectFields = this.subjectsRepository.getSubjectFields().then(function (subjectFields) {
          _this2.subjectFields = subjectFields;
        });
        loads.push(loadSubjectFields);
        var loadProfiles = this.profilesRepository.getProfiles().then(function (profiles) {
          _this2.profiles = profiles;
        });
        loads.push(loadProfiles);
        var loadComponents = this.curriculumPlanRepository.getComponents(this.iup).then(function (components) {
          _this2.components = components;
        });
        loads.push(loadComponents);
      }
      this.refsReady = Promise.all(loads);
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.ready = false;
      var fpValues = this.filterPanel.getValues();
      var termId = fpValues.termId;
      var profileId = fpValues.profileId;
      var step = parseInt(fpValues.step) || -1;
      var directionId = fpValues.directionId;
      var programId = fpValues.programId;
      var grade = parseInt(fpValues.grade || -1);
      var eaDirectionId = parseInt(fpValues.EADIRID) || -1;
      this.filterState = {
        termId: termId,
        profileId: profileId,
        step: step,
        directionId: directionId,
        programId: programId,
        grade: grade,
        eaDirectionId: eaDirectionId
      };
      var getArgs = {
        termId: termId,
        profileId: profileId,
        step: step,
        grade: grade,
        directionId: directionId,
        programId: programId,
        iup: this.iup,
        extraActivity: this.extraActivity,
        eaDirectionId: eaDirectionId
      };
      this.changeTracker.clearDataChanges();
      var filterGradeMin = -1;
      var filterGradeMax = -1;
      if (step > 0) {
        filterGradeMin = this.stepRanges[step - 1].minGrade;
        filterGradeMax = this.stepRanges[step - 1].maxGrade;
      }
      if (grade > -1) {
        filterGradeMin = grade;
        filterGradeMax = grade;
      }
      var grades;
      if (typeof grade !== "undefined" && grade > -1) {
        grades = [grade];
      }
      var loads = [];
      var eaFactLoads = [];
      var loadHours = this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        _this3.hours = hours;
      });
      loads.push(loadHours);
      if (!this.extraActivity) {
        var loadClasses = this.classesRepository.getYearClasses({
          grades: grades,
          step: step,
          termId: termId,
          profileId: profileId,
          directionId: directionId,
          programId: programId,
          iup: this.iup
        }).then(function (classes) {
          _this3.classes = classes;
          _this3.noClasses = _this3.classes.length === 0;
        });
        loads.push(loadClasses);
      } else {
        // this.extraActivity
        var loadFactLoads = this.curriculumPlanRepository.getEaFactLoads(filterGradeMin, filterGradeMax).then(function (factLoads) {
          eaFactLoads = factLoads;
        });
        loads.push(loadFactLoads);
      }
      if (this.iup) {
        var loadTermType = this.termTypesRepository.getTermTypeByTerm(termId, [_termtypes.TermTypeExpandData.ProfileGrades]).then(function (termType) {
          _this3.termType = termType;
        });
        loads.push(loadTermType);
      }
      var buildModelPromise;
      var prepateModelPromise = Promise.all(loads);
      this.filteredLimits = angular.copy(this.limits);
      if (filterGradeMin != -1 || filterGradeMax != -1) {
        this.filteredLimits = this.limits.filter(function (x) {
          return filterGradeMin <= x.grade && x.grade <= filterGradeMax;
        });
      }
      this.noLimits = this.filteredLimits.length === 0;
      if (this.extraActivity) {
        var directions = eaDirectionId == -1 ? this.eaDirections : this.eaDirections.filter(function (x) {
          return x.id == eaDirectionId;
        });
        this.components = directions;
        var limits = angular.copy(this.filteredLimits);
        this.eaSubjects = angular.copy(this.subjects);
        if (eaDirectionId > 0) {
          this.eaSubjects = this.eaSubjects.filter(function (x) {
            return x.direction != null && x.direction.id == eaDirectionId;
          });
        }
        buildModelPromise = prepateModelPromise.then(function () {
          var eaHours = _this3.hours;
          return _extraActivityPlan.EaCurriculumPlanViewModel.build(_this3.eaSubjects, eaHours, _this3.eaDirections, directions, limits, eaDirectionId, filterGradeMin, filterGradeMax, eaFactLoads);
        });
      } else if (this.iup) {
        buildModelPromise = prepateModelPromise.then(function () {
          var iupHours = _this3.hours;
          _this3.filteredLimits = _this3.filteredLimits.filter(function (x) {
            return _this3.termType.profileGrades.some(function (y) {
              return y.grade == x.grade;
            }) || iupHours.some(function (z) {
              return z.grade == x.grade;
            });
          });
          return _iupPlan.IupCurriculumPlanViewModel.build(_this3.subjects, _this3.subjectFields, _this3.classes, iupHours, _this3.components, _this3.filteredLimits);
        });
      } else {
        buildModelPromise = prepateModelPromise.then(function () {
          var classicHours = _this3.hours;
          return _classicPlan.CurriculumPlanViewModel.build(_this3.subjects, _this3.profiles, _this3.subjectFields, _this3.classes, classicHours, _this3.components, _this3.filteredLimits, _this3.settings);
        });
      }
      return buildModelPromise.then(function (model) {
        _this3.model = model;
        _this3.emptyData = model.planRows.length === 0;
        _this3.$scope.$applyAsync();
        _this3.ready = true;
        _this3.$appLoader.hide();
      });
    }
  }, {
    key: "changeViewType",
    value: function changeViewType() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.load();
            case 2:
              this.readonly = this.appContext.readOnly || this.settings.parentSubjectsViewType === _curriculumplan.CurriculumPlanSubjectsViewType.parentSubjects;
              this.$scope.$applyAsync();
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getOverflows",
    value: function getOverflows() {
      var _this4 = this;
      var overflows = [];
      var _iterator = _createForOfIteratorHelper(this.model.planRows),
        _step;
      try {
        var _loop = function _loop() {
          var componentData = _step.value;
          var componentOverflows = componentData.totals.filter(function (f) {
            return f.overflow && _this4.model.getObjectName(f.object);
          }).map(function (t) {
            return {
              component: componentData.component,
              object: _this4.model.getObjectName(t.object),
              limit: t.limit,
              hours: _this4.extraActivity ? t.pedHours : t.hours
            };
          });
          overflows = overflows.concat(componentOverflows);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return overflows;
    }
  }, {
    key: "validate",
    value: function validate() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var overflows, bolder, floatToPlan, _iterator2, _step2, overflow, confirmText;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              overflows = this.getOverflows();
              if (!overflows.length) {
                _context2.next = 28;
                break;
              }
              bolder = function bolder(str) {
                return "<b>" + str + "</b>";
              };
              floatToPlan = function floatToPlan(str) {
                return str.toString().replace(".", ",");
              };
              _context2.prev = 4;
              _iterator2 = _createForOfIteratorHelper(overflows);
              _context2.prev = 6;
              _iterator2.s();
            case 8:
              if ((_step2 = _iterator2.n()).done) {
                _context2.next = 15;
                break;
              }
              overflow = _step2.value;
              confirmText = (this.extraActivity ? language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1_1 : language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1) + bolder(floatToPlan(overflow.hours)) + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2 + bolder(floatToPlan(overflow.limit)) + (this.extraActivity ? language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3_1 : language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3 + bolder(overflow.component.name)) + " " + overflow.object + '\n' + this.planMessages.kConf_PlanGreaterLimit_5;
              _context2.next = 13;
              return this.$dialogs.confirm(confirmText);
            case 13:
              _context2.next = 8;
              break;
            case 15:
              _context2.next = 20;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](6);
              _iterator2.e(_context2.t0);
            case 20:
              _context2.prev = 20;
              _iterator2.f();
              return _context2.finish(20);
            case 23:
              _context2.next = 28;
              break;
            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2["catch"](4);
              return _context2.abrupt("return", false);
            case 28:
              return _context2.abrupt("return", true);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[4, 25], [6, 17, 20, 23]]);
      }));
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this5 = this;
        var termId, saveModel, valid, taskQueueSettings, result, resultMsg;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              termId = this.filterState.termId;
              saveModel = this.model.getSaveModel();
              saveModel.yearId = parseInt(this.appContext.yearId);
              saveModel.termId = termId;
              saveModel.step = this.filterState.step;
              saveModel.grade = this.filterState.grade;
              saveModel.directionId = this.filterState.directionId;
              saveModel.programId = this.filterState.programId;
              if (!this.iup) {
                saveModel.profileId = this.filterState.profileId;
              }
              _context3.next = 11;
              return this.validate();
            case 11:
              valid = _context3.sent;
              if (valid) {
                _context3.next = 14;
                break;
              }
              return _context3.abrupt("return");
            case 14:
              taskQueueSettings = {
                getTaskFunc: function getTaskFunc() {
                  return _this5.curriculumPlanRepository.save(saveModel);
                }
              };
              _context3.next = 17;
              return this.taskQueueService.execute(taskQueueSettings);
            case 17:
              result = _context3.sent;
              if (result.savingSuccess) {
                this.$scope.$broadcast("curriculum-plan-saved");
                this.changeTracker.clearDataChanges();
              }
              resultMsg = "";
              if (this.iup) {
                if (result.savingSuccess) {
                  resultMsg = language.Generic.Common.kDataSaved;
                  if (result.sgCreated) resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasCreated + result.sgCreated;
                  if (result.sgFailed) resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_1 + result.sgFailed + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_2;
                  if (result.sgDeleted) resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasDeleted + result.sgDeleted;
                } else {
                  resultMsg = this.planMessages.kErrCantSaveCurriculumPlan;
                  resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass;
                  resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample;
                  resultMsg += "\r\n" + language.SetupSchoolCalendar.kGrade + ": " + result.curriculumViolation.grade;
                  resultMsg += "\r\n" + language.Generic.Curriculum.kIupLevel + ": " + result.curriculumViolation.level;
                  resultMsg += "\r\n" + language.Generic.Curriculum.kSubjectGroup + ": " + result.curriculumViolation.subjectGroup;
                  resultMsg += "\r\n\r\n" + this.planMessages.kCurriculumNotChanged;
                }
              } else {
                if (result.savingSuccess) {
                  resultMsg = language.Generic.Common.kDataSaved;
                  if (result.sgCreated) resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasCreated + result.sgCreated;
                  if (result.sgFailed) resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_1 + result.sgFailed + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_2;
                  if (result.sgDeleted) resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasDeleted + result.sgDeleted;
                } else {
                  resultMsg = this.planMessages.kErrCantSaveCurriculumPlan;
                  if (!this.extraActivity) {
                    resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass;
                    resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample;
                    resultMsg += "\r\n" + language.Common.kClass + ": " + result.curriculumViolation["class"];
                    resultMsg += "\r\n" + language.Generic.Common.kSubject + ": " + result.curriculumViolation.subject;
                    resultMsg += "\r\n" + language.Common.kProfile + ": " + result.curriculumViolation.profile;
                  }
                  resultMsg += "\r\n\r\n" + this.planMessages.kCurriculumNotChanged;
                }
              }
              this.$dialogs.message(resultMsg);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "copy",
    value: function copy() {
      var _this6 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _copyhours.CopyCurriculumPlanComponent.templateUrl,
        controller: _copyhours.CopyCurriculumPlanComponent.controller,
        controllerAs: _copyhours.CopyCurriculumPlanComponent.controllerAs,
        resolve: {
          filterState: function filterState() {
            return _this6.filterState;
          },
          subjects: function subjects() {
            return _this6.subjects;
          },
          profiles: function profiles() {
            return _this6.profiles;
          },
          subjectFields: function subjectFields() {
            return _this6.subjectFields;
          },
          classes: function classes() {
            return _this6.classes;
          },
          components: function components() {
            return _this6.components;
          },
          limits: function limits() {
            return _this6.filteredLimits;
          },
          settings: function settings() {
            return _this6.settings;
          },
          planModel: function planModel() {
            return _this6.model;
          }
        }
      });
      modalInstance.result.then(function (planModel) {
        // явно присваиваю перестроенную модель
        _this6.model = planModel;
        _this6.changeTracker.dataWasChanged();
      });
    }
  }, {
    key: "addHours",
    value: function addHours() {
      var _this7 = this;
      var componentsWithLimits = this.extraActivity ? this.components.filter(function (c) {
        return _this7.limits.some(function (l) {
          return l.hours && l.hours > 0.01;
        });
      }) : this.components.filter(function (c) {
        return _this7.limits.some(function (l) {
          return l.componentId == c.id && l.hours && l.hours > 0.01;
        });
      });
      var modalInstance = this.$uibModal.open({
        templateUrl: _addhours.AddHoursComponent.templateUrl,
        controller: _addhours.AddHoursComponent.controller,
        controllerAs: _addhours.AddHoursComponent.controllerAs,
        resolve: {
          components: function components() {
            return componentsWithLimits;
          },
          subjects: function subjects() {
            return _this7.extraActivity ? _this7.eaSubjects : _this7.subjects;
          },
          componentsData: function componentsData() {
            return _this7.model.planRows;
          },
          extraActivity: function extraActivity() {
            return _this7.extraActivity;
          }
        }
      });
      modalInstance.result.then(function (componentSubject) {
        _this7.model.addSubject(componentSubject.component, componentSubject.subject);
        _this7.emptyData = false;
        _this7.changeTracker.dataWasChanged();
        _this7.$scope.$broadcast("curriculum-plan-hours-changed");
        _this7.$scope.$applyAsync();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.load();
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "clear",
    value: function clear() {
      this.model.hours.forEach(function (curHour) {
        curHour.hours = null;
      });
      this.changeTracker.dataWasChanged();
      this.model.calcTotals();
      this.$scope.$broadcast("curriculum-plan-hours-changed");
    }
  }, {
    key: "goTermTypes",
    value: function goTermTypes() {
      this.$location.path("/termtypes/grades/");
    }
  }, {
    key: "getNoLimitsMessage",
    value: function getNoLimitsMessage() {
      return this.extraActivity ? language.Generic.SetupSchoolCalendar.kEaCurriculumLimitsNotDefined : language.Generic.SetupSchoolCalendar.kCurriculumLimitsNotDefined;
    }
  }]);
  return CurriculumPlanController;
}();
var CurriculumComponent = {
  controller: CurriculumPlanController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/curriculumplan.component.html"
};
exports.CurriculumComponent = CurriculumComponent;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)(module)))

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlanMessages = exports.EmptySubjectField = exports.EaPlanMessages = exports.CurriculumPlanViewType = exports.CurriculumPlanSubjectsViewType = exports.ComponentData = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EmptySubjectField = {
  order: null,
  id: -1,
  name: language.Generic.SetupSchoolCalendar.kFreeSF
};
exports.EmptySubjectField = EmptySubjectField;
var CurriculumPlanViewType;
exports.CurriculumPlanViewType = CurriculumPlanViewType;
(function (CurriculumPlanViewType) {
  CurriculumPlanViewType[CurriculumPlanViewType["byClasses"] = 0] = "byClasses";
  CurriculumPlanViewType[CurriculumPlanViewType["byGrades"] = 1] = "byGrades";
})(CurriculumPlanViewType || (exports.CurriculumPlanViewType = CurriculumPlanViewType = {}));
var CurriculumPlanSubjectsViewType;
exports.CurriculumPlanSubjectsViewType = CurriculumPlanSubjectsViewType;
(function (CurriculumPlanSubjectsViewType) {
  CurriculumPlanSubjectsViewType[CurriculumPlanSubjectsViewType["subjects"] = 0] = "subjects";
  CurriculumPlanSubjectsViewType[CurriculumPlanSubjectsViewType["parentSubjects"] = 1] = "parentSubjects";
})(CurriculumPlanSubjectsViewType || (exports.CurriculumPlanSubjectsViewType = CurriculumPlanSubjectsViewType = {}));
var ComponentData = /*#__PURE__*/_createClass(function ComponentData(component) {
  _classCallCheck(this, ComponentData);
  this.component = component;
  this.subjectFieldsData = [];
  this.limits = [];
  this.totals = [];
  this.noFactHours = false;
});
exports.ComponentData = ComponentData;
var PlanMessages = /*#__PURE__*/function () {
  function PlanMessages() {
    _classCallCheck(this, PlanMessages);
  }
  _createClass(PlanMessages, [{
    key: "kTitleCurriculumPlan",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kTitleCurriculumPlan;
    }
  }, {
    key: "kCurriculumEmpty",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kCurriculumEmpty;
    }
  }, {
    key: "kClearCurriculumPlanBtnTitle",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kClearCurriculumPlanBtnTitle;
    }
  }, {
    key: "kConf_PlanGreaterLimit_5",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5;
    }
  }, {
    key: "kErrCantSaveCurriculumPlan",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlan;
    }
  }, {
    key: "kCurriculumNotChanged",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kCurriculumNotChanged;
    }
  }, {
    key: "kChangeCurriculum",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kChangeCurriculum;
    }
  }, {
    key: "kOverflowCurriculum",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kOverflowCurriculum;
    }
  }]);
  return PlanMessages;
}();
exports.PlanMessages = PlanMessages;
var EaPlanMessages = /*#__PURE__*/function () {
  function EaPlanMessages() {
    _classCallCheck(this, EaPlanMessages);
  }
  _createClass(EaPlanMessages, [{
    key: "kTitleCurriculumPlan",
    get: function get() {
      return language.Generic.MenuFolders.kFNEACurriculumPlan;
    }
  }, {
    key: "kCurriculumEmpty",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kCurriculumEmptyEa;
    }
  }, {
    key: "kClearCurriculumPlanBtnTitle",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kClearCurriculumPlanBtnTitleEa;
    }
  }, {
    key: "kConf_PlanGreaterLimit_5",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5Ea;
    }
  }, {
    key: "kErrCantSaveCurriculumPlan",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlanEa;
    }
  }, {
    key: "kCurriculumNotChanged",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kCurriculumNotChangedEa;
    }
  }, {
    key: "kChangeCurriculum",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kChangeCurriculumEa;
    }
  }, {
    key: "kOverflowCurriculum",
    get: function get() {
      return language.Generic.SetupSchoolCurPlan.kOverflowCurriculumEa;
    }
  }]);
  return EaPlanMessages;
}();
exports.EaPlanMessages = EaPlanMessages;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddHoursComponent = void 0;
var _curriculumplan = __webpack_require__(33);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AddHoursController = /*#__PURE__*/function () {
  AddHoursController.$inject = ["$uibModalInstance", "language", "components", "subjects", "componentsData", "extraActivity"];
  /*@ngInject*/
  function AddHoursController($uibModalInstance, language, components, subjects, componentsData, extraActivity) {
    _classCallCheck(this, AddHoursController);
    this.$uibModalInstance = $uibModalInstance;
    this.language = language;
    this.components = components;
    this.subjects = subjects;
    this.componentsData = componentsData;
    this.extraActivity = extraActivity;
    this.header = this.extraActivity ? language.Generic.SetupSchoolCalendar.kAddComponentLimitEa : language.Generic.SetupSchoolCalendar.kAddComponentLimit;
    this.component = this.components[0];
    this.changeComponent();
  }
  _createClass(AddHoursController, [{
    key: "changeComponent",
    value: function changeComponent() {
      var _this = this;
      this.ready = false;
      this.componentData = this.componentsData.find(function (c) {
        return c.component.id == _this.component.id;
      });
      var existsSubjects = [];
      if (this.componentData) {
        existsSubjects = this.componentData.subjectFieldsData.reduce(function (memo, sf) {
          return memo = memo.concat(sf.subjectsData.map(function (sfd) {
            return sfd.subject;
          }));
        }, []);
      }
      //todo. create new if not exists
      this.componentSubjects = this.subjects.filter(function (s) {
        return !existsSubjects.find(function (cs) {
          return cs.id === s.id;
        });
      });
      this.subject = this.componentSubjects[0];
      this.ready = true;
    }
  }, {
    key: "getSubjectFielName",
    value: function getSubjectFielName(subject) {
      return subject.subjectField && subject.subjectField.name || _curriculumplan.EmptySubjectField.name;
    }
  }, {
    key: "add",
    value: function add() {
      this.$uibModalInstance.close({
        subject: this.subject,
        component: this.component
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("close");
    }
  }]);
  return AddHoursController;
}();
var AddHoursComponent = {
  controller: AddHoursController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/addhours.component.html"
};
exports.AddHoursComponent = AddHoursComponent;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyCurriculumPlanComponent = void 0;
var _iupPlan = __webpack_require__(36);
var _classicPlan = __webpack_require__(38);
var _termtypes = __webpack_require__(39);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CopyCurriculumPlanController = /*#__PURE__*/function () {
  CopyCurriculumPlanController.$inject = ["$q", "$uibModalInstance", "$routeParams", "language", "$alerts", "$dialogs", "curriculumPlanRepository", "termsRepository", "filterState", "subjects", "profiles", "subjectFields", "classes", "components", "limits", "settings", "planModel", "termTypesRepository"];
  /*@ngInject*/
  function CopyCurriculumPlanController($q, $uibModalInstance, $routeParams, language, $alerts, $dialogs, curriculumPlanRepository, termsRepository, filterState, subjects, profiles, subjectFields, classes, components, limits, settings, planModel, termTypesRepository) {
    _classCallCheck(this, CopyCurriculumPlanController);
    this.$q = $q;
    this.$uibModalInstance = $uibModalInstance;
    this.language = language;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.curriculumPlanRepository = curriculumPlanRepository;
    this.termsRepository = termsRepository;
    this.filterState = filterState;
    this.subjects = subjects;
    this.profiles = profiles;
    this.subjectFields = subjectFields;
    this.classes = classes;
    this.components = components;
    this.limits = limits;
    this.settings = settings;
    this.planModel = planModel;
    this.termTypesRepository = termTypesRepository;
    this.clearCurriculumPlan = true;
    this.header = "Копирование учебного плана";
    this.iup = !!$routeParams.iup;
    this.init();
  }
  _createClass(CopyCurriculumPlanController, [{
    key: "init",
    value: function init() {
      var _this = this;
      var loadCopiedTerms = this.termsRepository.getTerms().then(function (terms) {
        // фильтрация подходящих для копирования периодов
        var choosedTerm = terms.find(function (x) {
          return x.id == _this.filterState.termId;
        });
        _this.copiedTerms = terms.filter(function (x) {
          return x.termTypeId == choosedTerm.termTypeId && x.id != choosedTerm.id;
        });
      });
      this.$q.when(loadCopiedTerms).then(function () {
        _this.ready = true;
      });
    }
    // копирует учебный план
  }, {
    key: "copyPlan",
    value: function copyPlan() {
      var _this2 = this;
      var promises = [];
      if (this.clearCurriculumPlan) {
        this.clear();
      } else if (this.planModel.hours.some(function (h) {
        return h.hours && h.hours > 0.01;
      })) {
        var confirmMessage = "В учебном плане на текущий период есть заполненные часы.";
        confirmMessage += "\nВ случае продолжения будут объединены часы текущего периода и часы из учебного плана на период '" + this.copiedTerm.termName + "'";
        confirmMessage += "\nВы желаете продолжить?";
        promises.push(this.$dialogs.confirm(confirmMessage));
      }
      var copiedHours;
      var termType;
      // загрузка часов копируемого периода
      var getArgs = {
        termId: this.copiedTerm.id,
        profileId: this.filterState.profileId,
        step: this.filterState.step,
        grade: this.filterState.grade,
        directionId: this.filterState.directionId,
        programId: this.filterState.programId,
        iup: this.iup
      };
      var loadCopiedTermHours = this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        copiedHours = hours;
        return hours;
      });
      if (this.iup) {
        var loadTermType = this.termTypesRepository.getTermTypeByTerm(this.copiedTerm.id, [_termtypes.TermTypeExpandData.ProfileGrades]).then(function (result) {
          _this2.termType = result;
        });
        promises.push(loadTermType);
      }
      promises.push(loadCopiedTermHours);
      return this.$q.all(promises).then(function () {
        // копирование
        _this2.copyPlanHours(copiedHours);
        _this2.planModel = _this2.getRebuildPlanModel();
      });
    }
    // пересобирает модель учебного плана
  }, {
    key: "getRebuildPlanModel",
    value: function getRebuildPlanModel() {
      if (this.iup) {
        return _iupPlan.IupCurriculumPlanViewModel.build(this.subjects, this.subjectFields, this.classes, this.planModel.hours, this.components, this.limits);
      } else {
        return _classicPlan.CurriculumPlanViewModel.build(this.subjects, this.profiles, this.subjectFields, this.classes, this.planModel.hours, this.components, this.limits, this.settings);
      }
    }
    // копирует часы учебного плана
  }, {
    key: "copyPlanHours",
    value: function copyPlanHours(copiedHours) {
      var _this3 = this;
      copiedHours.forEach(function (copiedCurHour) {
        var findCurHour = _this3.planModel.findHour(copiedCurHour.componentId, copiedCurHour.subjectId, copiedCurHour);
        if (findCurHour) {
          findCurHour.hours = copiedCurHour.hours;
        } else {
          _this3.planModel.hours.push(copiedCurHour);
        }
      });
      this.planModel.calcTotals();
    }
    // чистит учебный план
  }, {
    key: "clear",
    value: function clear() {
      this.planModel.hours.forEach(function (curHour) {
        curHour.hours = null;
      });
      this.planModel.calcTotals();
    }
  }, {
    key: "ok",
    value: function ok() {
      var _this4 = this;
      if (this.copiedTerm) {
        this.copyPlan().then(function () {
          // передаю так, чтобы явно обновить модель при копировании
          return _this4.$uibModalInstance.close(_this4.planModel);
        });
      } else {
        this.$alerts.info("Не задан учебный период");
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("close");
    }
  }]);
  return CopyCurriculumPlanController;
}();
var CopyCurriculumPlanComponent = {
  controller: CopyCurriculumPlanController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/copyhours.component.html"
};
exports.CopyCurriculumPlanComponent = CopyCurriculumPlanComponent;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IupCurriculumPlanViewModel = exports.GradeIupLevels = void 0;
var _curriculumplan = __webpack_require__(33);
var _numberUtils = __webpack_require__(37);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var GradeIupLevels = /*#__PURE__*/_createClass(function GradeIupLevels(grade) {
  _classCallCheck(this, GradeIupLevels);
  this.grade = grade;
  //todo. language
  this.levels = [{
    level: 1,
    name: "Б",
    grade: grade.id
  }, {
    level: 2,
    name: "П",
    grade: grade.id
  }, {
    level: 3,
    name: "У",
    grade: grade.id
  }, {
    level: 4,
    name: "Р",
    grade: grade.id
  }];
});
exports.GradeIupLevels = GradeIupLevels;
var IupCurriculumPlanViewModel = /*#__PURE__*/function () {
  function IupCurriculumPlanViewModel(numberUtils) {
    _classCallCheck(this, IupCurriculumPlanViewModel);
    this.numberUtils = numberUtils;
    this.gradesRow = [];
    this.objectsRow = [];
    this.planRows = [];
  }
  _createClass(IupCurriculumPlanViewModel, [{
    key: "getObjectName",
    value: function getObjectName(object) {
      var iupGradeInfo = this.objectsRow.find(function (ig) {
        return ig.grade === object.grade && ig.level === object.level;
      });
      //todo. проверить
      return "\n" + language.SetupSchoolCalendar.kGrade + ": <b>" + object.grade + "</b>\n" + language.Generic.Curriculum.kIupLevel + ": <b>" + iupGradeInfo.name + "</b>";
    }
  }, {
    key: "addSubject",
    value: function addSubject(component, subject) {
      var componentData = this.planRows.find(function (cd) {
        return cd.component.id == component.id;
      });
      var subjectField = subject.subjectField || _curriculumplan.EmptySubjectField;
      if (!componentData) {
        componentData = this.composeComponentData(component, [], []);
        this.planRows.push(componentData);
        //todo. сортировка?
      }

      var subjectFieldData = componentData.subjectFieldsData.find(function (sf) {
        return sf.subjectField.id == subjectField.id;
      });
      if (!subjectFieldData) {
        subjectFieldData = {
          subjectField: subjectField,
          subjectsData: []
        };
        componentData.subjectFieldsData.push(subjectFieldData);
      }
      var newHours = this.objectsRow.map(function (igl) {
        return {
          grade: igl.grade,
          iupLevel: igl.level,
          subjectId: subject.id,
          componentId: component.id,
          hours: null,
          noLimits: !componentData.limits.some(function (l) {
            return l.grade == igl.grade && l.hours && l.hours > 0.01;
          })
        };
      });
      this.hours = this.hours.concat(newHours);
      subjectFieldData.subjectsData.push({
        subject: subject,
        "new": true,
        hours: newHours
      });
      this.calcTotals();
    }
  }, {
    key: "calcTotals",
    value: function calcTotals() {
      var _this = this;
      var subjectIdx = _.indexBy(this.subjects, function (s) {
        return s.id;
      });
      var _iterator = _createForOfIteratorHelper(this.planRows),
        _step;
      try {
        var _loop = function _loop() {
          var componentData = _step.value;
          componentData.totals = [];
          var _iterator2 = _createForOfIteratorHelper(_this.objectsRow),
            _step2;
          try {
            var _loop2 = function _loop2() {
              var obj = _step2.value;
              //todo. check level
              var limit = componentData.limits.find(function (l) {
                return l.grade === obj.grade;
              });
              var gradeComponentHours = _this.hours.filter(function (h) {
                return h.grade == obj.grade && h.iupLevel == obj.level && h.componentId === componentData.component.id;
              });
              var gradeHours = gradeComponentHours.map(function (h) {
                var parentSubject = subjectIdx[h.subjectId].parentSubject;
                var exSubjectId = parentSubject ? -parentSubject.id : h.subjectId;
                return {
                  hours: h.hours,
                  subjectId: exSubjectId
                };
              });
              var maxHours = [];
              gradeHours.forEach(function (h) {
                var maxHour = maxHours.find(function (m) {
                  return m.subjectId == h.subjectId;
                });
                if (maxHour) {
                  if (maxHour.hours < h.hours) {
                    maxHour.hours = h.hours;
                  }
                } else {
                  maxHours.push(angular.copy(h));
                }
              });
              //let totalHours = gradeComponentHours.reduce((sum, hour) => sum += hour.hours, 0);
              var totalHours = maxHours.reduce(function (sum, hour) {
                return sum += hour.hours;
              }, 0);
              totalHours = _this.numberUtils.numberToFixed(totalHours);
              componentData.totals.push({
                object: {
                  grade: obj.grade,
                  level: obj.level
                },
                hours: totalHours,
                limit: limit.hours,
                overflow: totalHours > limit.hours
              });
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
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
    key: "getSaveModel",
    value: function getSaveModel() {
      var _this2 = this;
      var hours = [];
      this.planRows.forEach(function (componentData) {
        return componentData.subjectFieldsData.forEach(function (sfData) {
          return sfData.subjectsData.forEach(function (sd) {
            return hours = hours.concat(sd.hours.filter(function (h) {
              return h.hours && _this2.numberUtils.isGreaterThanOrEqual(h.hours, 0.01);
            }));
          });
        });
      });
      var iupHours = hours;
      var saveModel = {
        yearId: 0,
        termId: 0,
        compId: hours.map(function (h) {
          return h.componentId;
        }),
        subjId: hours.map(function (h) {
          return h.subjectId;
        }),
        iupGrade: iupHours.map(function (h) {
          return h.grade;
        }),
        iupLevel: iupHours.map(function (h) {
          return h.iupLevel;
        }),
        hours: hours.map(function (h) {
          return h.hours;
        }),
        isIup: true,
        extraActivity: false,
        gradeMin: 0,
        gradeMax: 0
      };
      return saveModel;
    }
  }, {
    key: "composeComponentData",
    value: function composeComponentData(component, subjects, hours) {
      var _this3 = this;
      var componentData = new _curriculumplan.ComponentData(component);
      componentData.limits = this.gradesRow.map(function (g) {
        var limit = _this3.limits.find(function (l) {
          return l.componentId == component.id && l.grade == g.grade.id;
        });
        return {
          grade: g.grade.id,
          objects: g.levels.length,
          hours: limit && limit.hours
        };
      });
      var fieldGroups = _.chain(subjects).groupBy(function (s) {
        return s.subjectField && s.subjectField.id;
      }).map(function (g, key) {
        return {
          subjectField: _this3.subjectFields.find(function (sf) {
            return sf.id.toString() == key;
          }) || {
            id: -1,
            name: "Не включен ни в какую обр. область"
          },
          subjects: g
        };
      }).sortBy(function (x) {
        var _a;
        return (_a = x.subjectField.name) === null || _a === void 0 ? void 0 : _a.toUpperCase();
      }).sortBy(function (x) {
        return x.subjectField.order || 9999;
      }).value();
      var _iterator3 = _createForOfIteratorHelper(fieldGroups),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var fieldGroup = _step3.value;
          var subjectFieldData = {
            subjectField: fieldGroup.subjectField,
            subjectsData: []
          };
          var _iterator4 = _createForOfIteratorHelper(fieldGroup.subjects),
            _step4;
          try {
            var _loop3 = function _loop3() {
              var subject = _step4.value;
              var subjectHours = {
                subject: subject,
                hours: []
              };
              var _iterator5 = _createForOfIteratorHelper(_this3.objectsRow),
                _step5;
              try {
                var _loop4 = function _loop4() {
                  var obj = _step5.value;
                  var hour = hours.find(function (h) {
                    return h.grade == obj.grade && h.iupLevel === obj.level && h.subjectId == subject.id && h.componentId === component.id;
                  });
                  if (!hour) {
                    var limits = componentData.limits.find(function (l) {
                      return l.grade == obj.grade;
                    });
                    var noLimits = limits == null || !limits.hours;
                    hour = {
                      grade: obj.grade,
                      iupLevel: obj.level,
                      subjectId: subject.id,
                      componentId: component.id,
                      hours: null,
                      noLimits: noLimits
                    };
                    hours.push(hour);
                  }
                  subjectHours.hours.push(hour);
                };
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  _loop4();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              subjectFieldData.subjectsData.push(subjectHours);
            };
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          componentData.subjectFieldsData.push(subjectFieldData);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return componentData;
    }
  }, {
    key: "findHour",
    value: function findHour(componentId, subjectId, object) {
      return this.hours.find(function (x) {
        return x.componentId === componentId && x.subjectId === subjectId && x.grade === object.grade && x.iupLevel === object.iupLevel;
      });
    }
  }], [{
    key: "build",
    value: function build(subjects, subjectFields, classes, hours, components, limits) {
      var model = new IupCurriculumPlanViewModel(new _numberUtils.NumberUtils());
      model.hours = hours;
      model.limits = limits;
      model.subjectFields = subjectFields;
      model.subjects = subjects;
      // todo. фильтровать паралели по наличию классов
      model.gradesRow = _toConsumableArray(new Set(limits.map(function (x) {
        return x.grade;
      }))).map(function (gr) {
        var iupGrade = new GradeIupLevels({
          id: gr,
          name: gr.toString()
        });
        return iupGrade;
      });
      // для параллелей нет классов
      model.emptyGrades = model.gradesRow.filter(function (gr) {
        return !classes.some(function (cl) {
          return cl.grade.id == gr.grade.id;
        });
      }).map(function (gr) {
        return gr.grade.id;
      });
      model.objectsRow = model.gradesRow.reduce(function (levels, grade) {
        return levels = levels.concat(grade.levels);
      }, []);
      var planRows = [];
      var _iterator6 = _createForOfIteratorHelper(components),
        _step6;
      try {
        var _loop5 = function _loop5() {
          var component = _step6.value;
          var compSubjects = subjects.filter(function (sbj) {
            return hours.find(function (h) {
              return h.subjectId === sbj.id && h.componentId == component.id;
            });
          });
          var componentData = model.composeComponentData(component, compSubjects, hours);
          var noFactHours = !hours.some(function (h) {
            return h.componentId == component.id;
          });
          var noHours = noFactHours && !limits.some(function (l) {
            return l.componentId == component.id && l.hours > 0.01;
          });
          if (!noHours) {
            componentData.noFactHours = noFactHours;
            planRows.push(componentData);
          }
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      model.planRows = planRows;
      model.calcTotals();
      return model;
    }
  }]);
  return IupCurriculumPlanViewModel;
}();
exports.IupCurriculumPlanViewModel = IupCurriculumPlanViewModel;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberUtils = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NumberUtils = /*#__PURE__*/function () {
  //инициализация
  /*@ngInject*/
  function NumberUtils() {
    _classCallCheck(this, NumberUtils);
    this.delta = 1e-12;
  }
  _createClass(NumberUtils, [{
    key: "numberToFixed",
    value: function numberToFixed(num) {
      var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      // use this method with integer digits between (-10, 10)
      var base = Math.pow(10, Math.round(digits));
      var ret = Math.round((num + this.delta) * base) / base;
      return ret;
    }
  }, {
    key: "isEqual",
    value: function isEqual(num1, num2) {
      return this.compareNumbers(num1, num2) == 0;
    }
  }, {
    key: "isGreaterThan",
    value: function isGreaterThan(num1, num2) {
      return this.compareNumbers(num1, num2) == 1;
    }
  }, {
    key: "isGreaterThanOrEqual",
    value: function isGreaterThanOrEqual(num1, num2) {
      return this.compareNumbers(num1, num2) >= 0;
    }
  }, {
    key: "isLessThan",
    value: function isLessThan(num1, num2) {
      return this.compareNumbers(num1, num2) == -1;
    }
  }, {
    key: "isLessThanOrEqual",
    value: function isLessThanOrEqual(num1, num2) {
      return this.compareNumbers(num1, num2) <= 0;
    }
  }, {
    key: "compareNumbers",
    value: function compareNumbers(num1, num2) {
      var diff = num1 - num2;
      if (Math.abs(diff) < this.delta) {
        return 0;
      }
      return diff > 0 ? 1 : -1;
    }
  }]);
  return NumberUtils;
}();
exports.NumberUtils = NumberUtils;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileClasses = exports.CurriculumPlanViewModel = void 0;
var _curriculumplan = __webpack_require__(33);
var _numberUtils = __webpack_require__(37);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProfileClasses = /*#__PURE__*/function () {
  function ProfileClasses(profile) {
    _classCallCheck(this, ProfileClasses);
    this.profile = profile;
    this.grades = [];
  }
  _createClass(ProfileClasses, [{
    key: "classesCount",
    get: function get() {
      return this.grades.reduce(function (cur, grade) {
        return cur += grade.classes.length;
      }, 0);
    }
  }]);
  return ProfileClasses;
}();
exports.ProfileClasses = ProfileClasses;
var GradeClasses = /*#__PURE__*/_createClass(function GradeClasses(grade) {
  _classCallCheck(this, GradeClasses);
  this.grade = grade;
  this.classes = [];
});
var CurriculumPlanViewModel = /*#__PURE__*/function () {
  function CurriculumPlanViewModel(numberUtils) {
    _classCallCheck(this, CurriculumPlanViewModel);
    this.numberUtils = numberUtils;
    this.profilesRow = [];
    this.gradesRow = [];
    this.classesRow = [];
    this.planRows = [];
  }
  _createClass(CurriculumPlanViewModel, [{
    key: "getObjectName",
    value: function getObjectName(object) {
      var classInfo = this.classesRow.find(function (cr) {
        return cr.id === object.classId;
      });
      return language.SetupSchoolCurPlan.kConf_PlanGreaterLimit_4 + "<b>" + classInfo.name + "</b>";
    }
  }, {
    key: "addSubject",
    value: function addSubject(component, subject) {
      var _this = this;
      var componentData = this.planRows.find(function (cd) {
        return cd.component.id == component.id;
      });
      if (!componentData) {
        componentData = new _curriculumplan.ComponentData(component);
        componentData.limits = this.gradesRow.map(function (g) {
          var limit = _this.limits.find(function (l) {
            return l.componentId == component.id && l.grade == g.grade.id;
          });
          return {
            grade: g.grade.id,
            objects: g.classes.length,
            hours: limit && limit.hours
          };
        });
        this.planRows.push(componentData);
        this.calcTotals();
      }
      var subjectField = subject.subjectField || _curriculumplan.EmptySubjectField;
      var subjectFieldData = componentData.subjectFieldsData.find(function (sf) {
        return sf.subjectField.id == subjectField.id;
      });
      if (!subjectFieldData) {
        subjectFieldData = {
          subjectField: subjectField,
          subjectsData: []
        };
        componentData.subjectFieldsData.push(subjectFieldData);
      }
      var newHours = this.classesRow.map(function (cls) {
        var limits = componentData.limits.find(function (l) {
          return l.grade == cls.grade.id;
        });
        var noLimits = limits == null || !limits.hours;
        return {
          classId: cls.id,
          subjectId: subject.id,
          componentId: component.id,
          hours: null,
          noLimits: noLimits
        };
      });
      this.hours = this.hours.concat(newHours);
      subjectFieldData.subjectsData.push({
        subject: subject,
        "new": true,
        hours: newHours
      });
    }
  }, {
    key: "calcTotals",
    value: function calcTotals() {
      var _this2 = this;
      var subjectIdx = _.indexBy(this.subjects, function (s) {
        return s.id;
      });
      var classTotals = {};
      var _iterator = _createForOfIteratorHelper(this.planRows),
        _step;
      try {
        var _loop = function _loop() {
          var componentData = _step.value;
          componentData.totals = [];
          //todo. group by grade if gradeview
          var _iterator3 = _createForOfIteratorHelper(_this2.classesRow),
            _step3;
          try {
            var _loop2 = function _loop2() {
              var cls = _step3.value;
              var limit = componentData.limits.find(function (l) {
                return l.grade === cls.grade.id;
              });
              var parentSubjects = {};
              var classComponentHours = _this2.hours.filter(function (h) {
                return h.classId == cls.id && h.componentId === componentData.component.id;
              }).map(function (h) {
                var parentSubject = subjectIdx[h.subjectId].parentSubject;
                if (parentSubject) {
                  //собираем информацию о максимальных часах
                  var maxHour = parentSubjects[parentSubject.id];
                  if (!maxHour) {
                    maxHour = {
                      hours: 0,
                      subjectId: h.subjectId
                    };
                    parentSubjects[parentSubject.id] = maxHour;
                  }
                  if (maxHour.hours < h.hours) {
                    maxHour.hours = h.hours;
                    maxHour.subjectId = h.subjectId;
                  }
                }
                return {
                  hours: h.hours,
                  subjectId: h.subjectId,
                  parentSubjectId: parentSubject && parentSubject.id || 0
                };
              });
              var totalHours = 0;
              var totalPedHours = 0;
              var _iterator4 = _createForOfIteratorHelper(classComponentHours),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var hoursInfo = _step4.value;
                  totalPedHours += hoursInfo.hours;
                  if (hoursInfo.parentSubjectId && parentSubjects[hoursInfo.parentSubjectId].subjectId !== hoursInfo.subjectId) {
                    //оставляем только максимальные часы
                    continue;
                  }
                  totalHours += hoursInfo.hours;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              totalHours = _this2.numberUtils.numberToFixed(totalHours);
              totalPedHours = _this2.numberUtils.numberToFixed(totalPedHours);
              var totalHoursInfo = {
                object: {
                  classId: cls.id
                },
                hours: totalHours,
                pedHours: totalPedHours,
                limit: limit.hours,
                overflow: totalHours > limit.hours
              };
              if (!classTotals[cls.id]) {
                classTotals[cls.id] = [];
              }
              classTotals[cls.id].push(totalHoursInfo);
              componentData.totals.push(totalHoursInfo);
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.totalRow.totals = [];
      var _iterator2 = _createForOfIteratorHelper(this.classesRow),
        _step2;
      try {
        var _loop3 = function _loop3() {
          var cls = _step2.value;
          var limit = _this2.totalRow.limits.find(function (l) {
            return l.grade === cls.grade.id;
          });
          var componentTotals = classTotals[cls.id];
          var totalHours = 0;
          var totalPedHours = 0;
          if (componentTotals) {
            var _iterator5 = _createForOfIteratorHelper(componentTotals),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var classCompTotal = _step5.value;
                totalHours += classCompTotal.hours;
                totalPedHours += classCompTotal.pedHours;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          _this2.totalRow.totals.push({
            object: {
              classId: cls.id
            },
            hours: totalHours,
            overflow: totalHours > limit.hours,
            limit: limit.hours,
            pedHours: totalPedHours
          });
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "getSaveModel",
    value: function getSaveModel() {
      var _this3 = this;
      var hours = [];
      this.planRows.forEach(function (componentData) {
        return componentData.subjectFieldsData.forEach(function (sfData) {
          return sfData.subjectsData.forEach(function (sd) {
            return hours = hours.concat(sd.hours.filter(function (h) {
              return h.hours && _this3.numberUtils.isGreaterThanOrEqual(h.hours, 0.01);
            }));
          });
        });
      });
      var classicHours = hours;
      var saveModel = {
        yearId: 0,
        termId: 0,
        profileId: 0,
        compId: hours.map(function (h) {
          return h.componentId;
        }),
        subjId: hours.map(function (h) {
          return h.subjectId;
        }),
        classId: classicHours.map(function (h) {
          return h.classId.toString();
        }),
        hours: hours.map(function (h) {
          return h.hours;
        }),
        isIup: false,
        extraActivity: false
      };
      return saveModel;
    }
  }, {
    key: "findHour",
    value: function findHour(componentId, subjectId, object) {
      return this.hours.find(function (x) {
        return x.componentId === componentId && x.subjectId === subjectId && x.classId === object.classId;
      });
    }
  }], [{
    key: "build",
    value: function build(subjects, profiles, subjectFields, classes, hours, components, limits, settings) {
      var model = new CurriculumPlanViewModel(new _numberUtils.NumberUtils());
      model.limits = limits;
      model.hours = hours;
      model.subjects = subjects;
      model.profilesRow = profiles.map(function (p) {
        var profileClasses = classes.filter(function (c) {
          return c.profileId === p.id && !c.iup;
        });
        var gradeClassses = profileClasses.reduce(function (groups, cls) {
          var group = groups.find(function (g) {
            return g.grade.id == cls.grade.id;
          });
          if (!group) {
            group = new GradeClasses(cls.grade);
            groups.push(group);
          }
          group.classes.push(cls);
          return groups;
        }, []);
        var profileInfo = new ProfileClasses(p);
        profileInfo.grades = gradeClassses;
        return profileInfo;
      });
      model.profilesRow = model.profilesRow.filter(function (pc) {
        return pc.classesCount > 0;
      });
      model.gradesRow = model.profilesRow.reduce(function (row, pc) {
        return row.concat(pc.grades);
      }, []);
      model.classesRow = model.gradesRow.reduce(function (row, grade) {
        return row.concat(grade.classes);
      }, []);
      model.totalRow = {
        limits: [],
        totals: []
      };
      model.totalRow.limits = model.gradesRow.map(function (g) {
        var limit = limits.find(function (l) {
          return l.componentId == 0 && l.grade == g.grade.id;
        });
        return {
          grade: g.grade.id,
          objects: g.classes.length,
          hours: limit && limit.hours
        };
      });
      var planRows = [];
      var _iterator6 = _createForOfIteratorHelper(components),
        _step6;
      try {
        var _loop4 = function _loop4() {
          var component = _step6.value;
          var componentData = new _curriculumplan.ComponentData(component);
          componentData.limits = model.gradesRow.map(function (g) {
            var limit = limits.find(function (l) {
              return l.componentId == component.id && l.grade == g.grade.id;
            });
            return {
              grade: g.grade.id,
              objects: g.classes.length,
              hours: limit && limit.hours
            };
          });
          if (!componentData.limits.some(function (l) {
            return l.hours > 0;
          })) {
            return "continue";
          }
          var compSubjects = subjects.filter(function (sbj) {
            return hours.find(function (h) {
              return h.subjectId === sbj.id && h.componentId == component.id;
            });
          });
          var fieldGroups = _.chain(compSubjects).groupBy(function (s) {
            return s.subjectField && s.subjectField.id;
          }).map(function (g, key) {
            return {
              subjectField: subjectFields.find(function (sf) {
                return sf.id.toString() == key;
              }) || _curriculumplan.EmptySubjectField,
              subjects: g
            };
          }).sortBy(function (x) {
            var _a;
            return (_a = x.subjectField.name) === null || _a === void 0 ? void 0 : _a.toUpperCase();
          }).sortBy(function (x) {
            return x.subjectField.order || 9999;
          }).value();
          var _iterator7 = _createForOfIteratorHelper(fieldGroups),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var fieldGroup = _step7.value;
              var subjectFieldData = {
                subjectField: fieldGroup.subjectField,
                subjectsData: []
              };
              var _iterator8 = _createForOfIteratorHelper(fieldGroup.subjects),
                _step8;
              try {
                var _loop5 = function _loop5() {
                  var subject = _step8.value;
                  var newSubject = true;
                  var subjectHours = {
                    subject: subject,
                    hours: []
                  };
                  if (settings.parentSubjectsViewType === _curriculumplan.CurriculumPlanSubjectsViewType.parentSubjects) {
                    if (subject.parentSubject) {
                      var existData = subjectFieldData.subjectsData.find(function (sd) {
                        return sd.subject.id === -subject.parentSubject.id;
                      });
                      if (existData) {
                        subjectHours = existData;
                        newSubject = false;
                      }
                      subjectHours.subject = {
                        id: -subject.parentSubject.id,
                        name: subject.parentSubject.name
                      };
                    }
                  }
                  var idx = 0;
                  var _iterator9 = _createForOfIteratorHelper(model.classesRow),
                    _step9;
                  try {
                    var _loop6 = function _loop6() {
                      var cls = _step9.value;
                      var hour = hours.find(function (h) {
                        return h.classId == cls.id && h.subjectId == subject.id && h.componentId === component.id;
                      });
                      if (!hour) {
                        var _limits = componentData.limits.find(function (l) {
                          return l.grade == cls.grade.id;
                        });
                        var noLimits = _limits == null || !_limits.hours;
                        hour = {
                          classId: cls.id,
                          subjectId: subject.id,
                          componentId: component.id,
                          hours: null,
                          noLimits: noLimits
                        };
                        hours.push(hour);
                      }
                      if (newSubject) {
                        subjectHours.hours.push(hour);
                      } else if (hour.hours > subjectHours.hours[idx].hours) {
                        //в группе предметов отображаем максимальное кол-во часов
                        subjectHours.hours[idx].hours = hour.hours;
                      }
                      idx++;
                    };
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      _loop6();
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                  if (newSubject) {
                    subjectFieldData.subjectsData.push(subjectHours);
                  }
                };
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  _loop5();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              componentData.subjectFieldsData.push(subjectFieldData);
            }
            //filter components without limits
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          planRows.push(componentData);
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _ret = _loop4();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      model.hours = hours;
      model.planRows = planRows;
      model.calcTotals();
      return model;
    }
  }]);
  return CurriculumPlanViewModel;
}();
exports.CurriculumPlanViewModel = CurriculumPlanViewModel;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermTypesRepository = exports.TermTypeExpandData = void 0;
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
var TermTypeExpandData;
exports.TermTypeExpandData = TermTypeExpandData;
(function (TermTypeExpandData) {
  TermTypeExpandData["ProfileGrades"] = "profileGrades";
})(TermTypeExpandData || (exports.TermTypeExpandData = TermTypeExpandData = {}));
var TermTypesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(TermTypesRepository, _BaseRepository);
  var _super = _createSuper(TermTypesRepository);
  function TermTypesRepository() {
    _classCallCheck(this, TermTypesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(TermTypesRepository, [{
    key: "getTermTypes",
    value: function getTermTypes() {
      return this.$http.get("/webapi/calendar/termtypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTermTypesGrades",
    value: function getTermTypesGrades(readOnlyInfo) {
      var params = {};
      if (readOnlyInfo != undefined) {
        params.readOnlyInfo = readOnlyInfo;
      }
      return this.$http.get("/webapi/calendar/termtypes/grades", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveTermTypesGrades",
    value: function saveTermTypesGrades(termTypesGrades) {
      return this.$http.post("/webapi/calendar/termtypes/grades", termTypesGrades).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTermTypeByTerm",
    value: function getTermTypeByTerm(termId, expand) {
      var params = {
        termId: termId
      };
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/calendar/termtypes/get-by-term", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return TermTypesRepository;
}(_baseRepository.BaseRepository);
exports.TermTypesRepository = TermTypesRepository;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintCurriculumPlanService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PrintCurriculumPlanService = /*#__PURE__*/function () {
  function PrintCurriculumPlanService(classic) {
    _classCallCheck(this, PrintCurriculumPlanService);
    this.classic = classic;
  }
  _createClass(PrintCurriculumPlanService, [{
    key: "init",
    value: function init() {
      // таблица учебного плана
      this.planTable = $('#plan-table');
      // таблица заголовков
      this.planTableHeader = $('#plan-table-header');
      // клонированные элементы УП
      this.planTableClone = this.planTable.clone();
      this.planTableHeaderClone = this.planTableHeader.clone();
    }
    // todo: пока просто перетащил логику, чтобы работало
  }, {
    key: "getCuriculumPlan",
    value: function getCuriculumPlan() {
      var _this = this;
      // инициализация таблиц УП
      this.init();
      // раскрашивание заголовков
      var headerCloneRows = this.getHighlightedCurriculumHeaderRows();
      // раскрашивание строк УП
      this.highlightCurriculumRows();
      // добавление заголовков в таблицу учебного плана
      headerCloneRows.get().reverse().forEach(function (headerRow) {
        return $(headerRow).prependTo(_this.planTableClone);
      });
      this.planTableClone.find('#help-row').remove();
      // добавление легенд
      return this.planTableClone.add($('div.legend').clone());
    }
  }, {
    key: "getHighlightedCurriculumHeaderRows",
    value: function getHighlightedCurriculumHeaderRows() {
      var cloneHeaders = this.planTableHeaderClone.find("th");
      this.planTableHeader.find("th").each(function (index, col) {
        var cloneHeader = cloneHeaders.eq(index);
        cloneHeader.css("background-color", $(col).css("background-color"));
      });
      var headerCloneRows = this.planTableHeaderClone.find("tr");
      var element = headerCloneRows.first().find("th").eq(0).addClass("text-center");
      if (this.classic) {
        // для ИУП и ВД этот colspan задал в базовой таблице
        element.prop("colspan", 2);
      }
      this.planTableHeader.find("tr").each(function (index, item) {
        headerCloneRows.eq(index).css("background-color", $(item).css("background-color"));
      });
      return headerCloneRows;
    }
  }, {
    key: "highlightCurriculumRows",
    value: function highlightCurriculumRows() {
      var cloneRows = this.planTableClone.find("tr");
      this.planTable.find("tr").each(function (index, row) {
        var cloneRow = cloneRows.eq(index);
        var cloneCells = cloneRow.find("td");
        cloneRow.css("background-color", $(row).css("background-color"));
        $("td", row).each(function (index, cell) {
          var cloneCell = cloneCells.eq(index);
          if (cloneCell.css("background-color") !== $(cell).css("background-color")) {
            cloneCell.css("background-color", $(cell).css("background-color"));
          }
          // переопределяется положение текста в ячейках
          if (cloneCell.hasClass("text-left") || cloneRow.hasClass("subject-field-row")) {
            cloneCell.css("text-align", "left");
          }
        });
      });
    }
  }]);
  return PrintCurriculumPlanService;
}();
exports.PrintCurriculumPlanService = PrintCurriculumPlanService;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaCurriculumPlanViewModel = exports.DirectionGrades = void 0;
var _curriculumplan = __webpack_require__(33);
var _numberUtils = __webpack_require__(37);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DirectionGrades = /*#__PURE__*/function () {
  function DirectionGrades(direction /*EaDirection*/, grades) {
    var _this = this;
    _classCallCheck(this, DirectionGrades);
    this.direction = direction;
    this.grades = grades.map(function (g) {
      var dirGrade = {
        grade: g,
        directionId: _this.direction.id
      };
      return dirGrade;
    });
  }
  _createClass(DirectionGrades, [{
    key: "gradesCount",
    get: function get() {
      return this.grades.length;
    }
  }]);
  return DirectionGrades;
}();
exports.DirectionGrades = DirectionGrades;
var EaCurriculumPlanViewModel = /*#__PURE__*/function () {
  function EaCurriculumPlanViewModel(filterDirectionId, filterGradeMin, filterGradeMax, eaComponent, allEaDirections, numberUtils) {
    _classCallCheck(this, EaCurriculumPlanViewModel);
    this.filterDirectionId = filterDirectionId;
    this.filterGradeMin = filterGradeMin;
    this.filterGradeMax = filterGradeMax;
    this.eaComponent = eaComponent;
    this.allEaDirections = allEaDirections;
    this.numberUtils = numberUtils;
    this.directionsRow = [];
    this.gradesRow = [];
    this.objectsRow = [];
    this.directionsFactLoads = [];
    this.eaSubjectField = {
      id: -1,
      name: ""
    };
  }
  _createClass(EaCurriculumPlanViewModel, [{
    key: "getObjectName",
    value: function getObjectName(object) {
      var directionInfo = this.directionsRow.find(function (dir) {
        return dir.direction.id === object.directionId;
      });
      if (!directionInfo) {
        return undefined;
      }
      //todo. проверить
      return "\n" + language.SetupSchoolCalendar.kGrade + ": <b>" + object.grade + "</b>\n" + language.Generic.Filter.kDirection + ": <b>" + directionInfo.direction.name + "</b>";
    }
  }, {
    key: "calcTotals",
    value: function calcTotals() {
      var _this2 = this;
      if (this.planRows && this.planRows.length == 1) {
        var componentData = this.planRows[0];
        var _iterator = _createForOfIteratorHelper(this.gradesRow),
          _step;
        try {
          var _loop = function _loop() {
            var obj = _step.value;
            var limit = componentData.limits.find(function (l) {
              return l.grade === obj.grade;
            });
            var gradeComponentHours = _this2.hours.filter(function (h) {
              return h.grade == obj.grade && h.directionId == obj.directionId;
            });
            var totalHours = gradeComponentHours.reduce(function (sum, hour) {
              return sum += hour.hours;
            }, 0);
            totalHours = _this2.numberUtils.numberToFixed(totalHours);
            var total = componentData.totals.find(function (x) {
              return x.object.directionId == _this2.filterDirectionId && x.object.grade == obj.grade;
            });
            if (total) {
              var otherTotals = componentData.totals.filter(function (x) {
                return x.object.directionId != _this2.filterDirectionId && x.object.grade == obj.grade;
              });
              var otherTotalHours = otherTotals.reduce(function (sum, hour) {
                return sum += hour.hours;
              }, 0);
              otherTotalHours = _this2.numberUtils.numberToFixed(otherTotalHours);
              total.hours = totalHours;
              //total.overflow = totalHours + otherTotalHours > limit.hours;
              var gradeOverflow = totalHours + otherTotalHours > limit.hours;
              total.limit = limit.hours;
              total.pedHours = totalHours + otherTotalHours; // Небольшой костыль, суммарную фактическую нагрузку по всем направлениям сохраняем в этом поле
              componentData.totals.filter(function (x) {
                return x.object.grade == obj.grade;
              }).forEach(function (tot) {
                return tot.overflow = gradeOverflow;
              });
            }
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
    }
  }, {
    key: "getSaveModel",
    value: function getSaveModel() {
      var _this3 = this;
      var hours = [];
      this.planRows.forEach(function (componentData) {
        return componentData.subjectFieldsData.forEach(function (sfData) {
          return sfData.subjectsData.forEach(function (sd) {
            return hours = hours.concat(sd.hours.filter(function (h) {
              return h.hours && _this3.numberUtils.isGreaterThanOrEqual(h.hours, 0.01);
            }));
          });
        });
      });
      var eaHours = hours;
      var saveModel = {
        yearId: 0,
        termId: 0,
        compId: hours.map(function (h) {
          return h.componentId;
        }),
        subjId: hours.map(function (h) {
          return h.subjectId;
        }),
        iupGrade: eaHours.map(function (h) {
          return h.grade;
        }),
        eaDirectionIds: eaHours.map(function (h) {
          return h.directionId;
        }),
        hours: hours.map(function (h) {
          return h.hours;
        }),
        isIup: false,
        extraActivity: true,
        eaDirectionId: this.filterDirectionId,
        gradeMin: this.filterGradeMin,
        gradeMax: this.filterGradeMax
      };
      return saveModel;
    }
  }, {
    key: "findHour",
    value: function findHour(componentId, subjectId, object) {
      return null;
    }
  }, {
    key: "composeComponentData",
    value: function composeComponentData(subjects, hours) {
      var _this4 = this;
      var componentData = new _curriculumplan.ComponentData(this.eaComponent);
      componentData.limits = this.gradesRow.map(function (g) {
        var limit = _this4.limits.find(function (l) {
          return l.grade == g.grade;
        });
        return {
          grade: g.grade,
          objects: 1,
          hours: limit && limit.hours
        };
      });
      var subjectFieldData = {
        subjectField: this.eaSubjectField,
        subjectsData: []
      };
      var _iterator2 = _createForOfIteratorHelper(subjects),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var subject = _step2.value;
          var subjectHours = {
            subject: subject,
            hours: []
          };
          var _iterator3 = _createForOfIteratorHelper(_this4.gradesRow),
            _step3;
          try {
            var _loop3 = function _loop3() {
              var obj = _step3.value;
              var hour = hours.find(function (h) {
                return h.grade == obj.grade && h.directionId === obj.directionId && h.subjectId == subject.id;
              });
              if (!hour) {
                var limits = componentData.limits.find(function (l) {
                  return l.grade == obj.grade;
                });
                var noLimits = limits == null || !limits.hours;
                hour = {
                  grade: obj.grade,
                  directionId: obj.directionId,
                  subjectId: subject.id,
                  componentId: obj.directionId,
                  hours: null,
                  noLimits: noLimits
                };
                hours.push(hour);
              }
              subjectHours.hours.push(hour);
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          subjectFieldData.subjectsData.push(subjectHours);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      componentData.subjectFieldsData.push(subjectFieldData);
      return componentData;
    }
  }, {
    key: "addSubject",
    value: function addSubject(component, subject) {
      var componentData = this.planRows.find(function (cd) {
        return cd.component.id == component.id;
      });
      var subjectField = this.eaSubjectField;
      if (!componentData) {
        componentData = this.composeComponentData([], []);
        this.planRows.push(componentData);
        //todo. сортировка?
      }

      var subjectFieldData = componentData.subjectFieldsData.find(function (sf) {
        return sf.subjectField.id == subjectField.id;
      });
      if (!subjectFieldData) {
        subjectFieldData = {
          subjectField: subjectField,
          subjectsData: []
        };
        componentData.subjectFieldsData.push(subjectFieldData);
      }
      var newHours = this.gradesRow.map(function (igl) {
        return {
          grade: igl.grade,
          subjectId: subject.id,
          componentId: component.id,
          directionId: igl.directionId,
          hours: null,
          noLimits: !componentData.limits.some(function (l) {
            return l.grade == igl.grade && l.hours && l.hours > 0.01;
          })
        };
      });
      this.hours = this.hours.concat(newHours);
      subjectFieldData.subjectsData.push({
        subject: subject,
        "new": true,
        hours: newHours
      });
      this.calcTotals();
    }
  }, {
    key: "getDirectionTotals",
    value: function getDirectionTotals(direction, allTotals) {
      var directionTotals = allTotals.filter(function (x) {
        return x.object.directionId == direction.id;
      });
      return directionTotals;
    }
  }], [{
    key: "build",
    value: function build(subjects, hours, allEaDirections, eaDirections, limits, filterDirectionId, filterGradeMin, filterGradeMax, eaFactLoads) {
      var model = new EaCurriculumPlanViewModel(filterDirectionId, filterGradeMin, filterGradeMax, eaDirections[0], allEaDirections, new _numberUtils.NumberUtils());
      model.hours = hours;
      model.limits = limits;
      //let limitsGrades = limits.map(x => x.grade);
      model.directionsRow = eaDirections.map(function (dir) {
        var limitsGrades = limits
        //.filter(lm => lm.componentId == dir.id)
        .map(function (x) {
          return x.grade;
        }).sort(function (a, b) {
          return a - b;
        });
        var dirGrades = new DirectionGrades(dir, limitsGrades);
        return dirGrades;
      });
      model.gradesRow = model.directionsRow.reduce(function (grades, direction) {
        return grades = grades.concat(direction.grades);
      }, []);
      var planRows = [];
      // если можно выводить сразу все Направления, то здесь цикл!
      // for (const component of components) {
      // ...
      var compSubjects = subjects.filter(function (sbj) {
        return hours.find(function (h) {
          return h.subjectId === sbj.id && h.directionId == filterDirectionId;
        });
      });
      var componentData = model.composeComponentData(compSubjects, hours);
      var noFactHours = hours == null || hours.length == 0;
      //let noHours = noFactHours && !limits.some(l => l.componentId == component.id && l.hours > 0.01);
      var noHours = noFactHours && !limits.some(function (l) {
        return l.hours > 0.01;
      });
      if (!noHours) {
        componentData.noFactHours = noFactHours;
        planRows.push(componentData);
      }
      if (model.gradesRow.length && model.gradesRow.length > 0 && planRows.length > 0) {
        var _componentData = planRows[0];
        _componentData.totals = [];
        allEaDirections.forEach(function (dir) {
          model.gradesRow.forEach(function (grade) {
            var total = eaFactLoads.find(function (x) {
              return x.directionId == dir.id && x.grade == grade.grade;
            });
            _componentData.totals.push({
              object: {
                grade: grade.grade,
                directionId: dir.id
              },
              hours: total ? total.hours : null,
              limit: 0,
              overflow: false
            });
          });
        });
      }
      model.countDirections = allEaDirections.length;
      // цикл for components
      model.planRows = planRows;
      model.calcTotals();
      return model;
    }
  }]);
  return EaCurriculumPlanViewModel;
}();
exports.EaCurriculumPlanViewModel = EaCurriculumPlanViewModel;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumPlanRepository = void 0;
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
var CurriculumPlanRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(CurriculumPlanRepository, _BaseRepository);
  var _super = _createSuper(CurriculumPlanRepository);
  function CurriculumPlanRepository() {
    _classCallCheck(this, CurriculumPlanRepository);
    return _super.apply(this, arguments);
  }
  _createClass(CurriculumPlanRepository, [{
    key: "getCurriculum",
    value: function getCurriculum(args) {
      //args.extraActivity = false;
      if (args.step == -1) {
        args.step = null;
      }
      if (args.grade == -1) {
        args.grade = null;
      }
      if (args.profileId == -1) {
        args.profileId = null;
      }
      if (args.directionId == -1) {
        args.directionId = null;
      }
      if (args.programId == -1) {
        args.programId = null;
      }
      if (args.eaDirectionId == -1) {
        args.eaDirectionId = null;
      }
      var postData = args.classId && args.classId.length > 10 || args.subjectId && args.subjectId.length > 10;
      if (postData) {
        return this.$http.post("/webapi/curriculum", args).then(this.handleResponse, this.handleError);
      } else {
        return this.$http.get("/webapi/curriculum", {
          params: args
        }).then(this.handleResponse, this.handleError);
      }
    }
  }, {
    key: "getComponents",
    value: function getComponents(iup) {
      var params = {};
      if (iup) {
        params.iup = true;
      }
      return this.$http.get("/webapi/curriculum/components", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "save",
    value: function save(model) {
      return this.$http.post("/webapi/curriculum/edit", model).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "copy",
    value: function copy(model) {
      return this.$http.post("/webapi/curriculum/copy", model).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEaFactLoads",
    value: function getEaFactLoads(minGrade, maxGrade) {
      var params = {
        minGrade: minGrade,
        maxGrade: maxGrade
      };
      return this.$http.get("/webapi/curriculum/ea-fact-loads", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return CurriculumPlanRepository;
}(_baseRepository.BaseRepository);
exports.CurriculumPlanRepository = CurriculumPlanRepository;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTableDirective = exports.InputTableController = exports.InputTableCellDirective = exports.CompositTableRowDirective = exports.CompositTableDirective = exports.CompositTableController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CompositTableController = /*#__PURE__*/function () {
  function CompositTableController() {
    _classCallCheck(this, CompositTableController);
    this.rows = [];
    this.rowElems = [];
  }
  _createClass(CompositTableController, [{
    key: "$onInit",
    value: function $onInit() {
      this.out = this;
    }
  }, {
    key: "addRow",
    value: function addRow(rowElem, row) {
      this.rows.push(row);
      this.rowElems.push(rowElem);
      this.cells = row[row.length - 1].index;
    }
  }, {
    key: "sync",
    value: function sync() {
      var rowCells = this.rowElems.map(function (r) {
        return r.find("td");
      });
      this.cells = rowCells[0].length;
      var _loop = function _loop(index) {
        var cells = rowCells.map(function (r) {
          return r[index];
        });
        var maxWidth = 0;
        var headerCell = cells[0];
        var dataCell = cells[1];
        maxWidth = dataCell.offsetWidth;
        var cssWidth = maxWidth - 3 + "px";
        var div = headerCell.children[0];
        div.style.width = cssWidth;
      };
      for (var index = 0; index < this.cells; index++) {
        _loop(index);
      }
    }
  }]);
  return CompositTableController;
}();
exports.CompositTableController = CompositTableController;
var CompositTableDirective = function CompositTableDirective() {
  return {
    bindToController: {
      out: "=compositTable"
    },
    controller: CompositTableController
  };
};
exports.CompositTableDirective = CompositTableDirective;
var CompositTableRowDirective = function CompositTableRowDirective() {
  return {
    require: {
      compositTable: "^^"
    },
    link: function link(scope, element, attrs, requires) {
      var compositController = requires.compositTable;
      var cells = element.find("td");
      var row = [];
      cells.each(function (index, cell) {
        row.push({
          index: index,
          element: cell
        });
      });
      compositController.addRow(element, row);
    }
  };
};
exports.CompositTableRowDirective = CompositTableRowDirective;
var InputTableController = /*#__PURE__*/function () {
  InputTableController.$inject = ["$scope"];
  /*@ngInject*/
  function InputTableController($scope) {
    var _this = this;
    _classCallCheck(this, InputTableController);
    this.$scope = $scope;
    $scope.$watch(function () {
      return _this.settings;
    }, function () {
      if (_this.settings) {
        _this.settings.controller = _this;
      }
    });
  }
  _createClass(InputTableController, [{
    key: "save",
    value: function save() {
      this.$scope.$broadcast("input-table-save");
    }
  }, {
    key: "reset",
    value: function reset() {
      this.$scope.$broadcast("input-table-reset");
    }
  }]);
  return InputTableController;
}();
exports.InputTableController = InputTableController;
var InputTableDirective = function InputTableDirective() {
  return {
    bindToController: {
      settings: "=inputTable"
    },
    controller: InputTableController
  };
};
exports.InputTableDirective = InputTableDirective;
var InputTableCellController = /*#__PURE__*/function () {
  InputTableCellController.$inject = ["$scope", "$element", "$compile"];
  /*@ngInject*/
  function InputTableCellController($scope, $element, $compile) {
    var _this2 = this;
    _classCallCheck(this, InputTableCellController);
    this.$scope = $scope;
    this.$element = $element;
    this.$compile = $compile;
    $scope.$on("input-table-reset", function (event, msg) {
      _this2.model = _this2.srcModel;
    });
    $scope.$on("input-table-save", function (event, msg) {
      _this2.srcModel = angular.copy(_this2.model);
    });
  }
  _createClass(InputTableCellController, [{
    key: "inputBlur",
    value: function inputBlur() {
      var span = $("<span ng-class=\"{'waschanged': $ctrl.model !== $ctrl.srcModel}\">{{$ctrl.model | float2str:'onlyPositive'}}</span>");
      this.input.remove();
      if (this.inputTable.settings.onChange) {
        this.inputTable.settings.onChange(this.$element, this.model);
      }
      this.$element.append(span);
      this.$compile(this.$element.contents())(this.$scope);
    }
  }]);
  return InputTableCellController;
}();
/*@ngInject*/
var InputTableCellDirective = function InputTableCellDirective($compile, $timeout) {
  return {
    require: {
      inputTable: "^^"
    },
    bindToController: {
      model: '='
    },
    controllerAs: "$ctrl",
    controller: InputTableCellController,
    link: function link(scope, element) {
      var controller = scope.$ctrl;
      controller.srcModel = angular.copy(controller.model);
      if (controller.inputTable.settings.readonly) {
        return;
      }
      element.on("click", "span", function (e) {
        if (element.hasClass("no-input")) {
          return;
        }
        var span = $(e.target);
        //element.attr("ng-class", "{'waschanged': $ctrl.model !== $ctrl.srcModel}")
        var inputTemplate = "<input type='text' numeric-input=\"{fractional: true}\" ng-model='$ctrl.model' maxlength='4' ng-blur=\"$ctrl.inputBlur()\"/>";
        span.replaceWith(inputTemplate);
        $compile(element.contents())(scope);
        controller.input = element.find("input");
        $timeout(function () {
          controller.input.trigger("select");
        });
      });
    }
  };
};
InputTableCellDirective.$inject = ["$compile", "$timeout"];
exports.InputTableCellDirective = InputTableCellDirective;

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassicPlanTableComponent = void 0;
var _curriculumplan = __webpack_require__(33);
var _commonPlantable = __webpack_require__(46);
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
var ClassicPlanTableController = /*#__PURE__*/function (_BasePlanTableControl) {
  ClassicPlanTableController.$inject = ["$scope", "appContext", "changeTracker", "language", "$timeout"];
  _inherits(ClassicPlanTableController, _BasePlanTableControl);
  var _super = _createSuper(ClassicPlanTableController);
  /*@ngInject*/
  function ClassicPlanTableController($scope, appContext, changeTracker, language, $timeout) {
    var _this;
    _classCallCheck(this, ClassicPlanTableController);
    _this = _super.call(this, $scope, appContext, changeTracker, language, $timeout);
    _this.headerSettings = {
      rows: 3,
      withClassesRow: true,
      withProfilesRow: true
    };
    $scope.$watch(function () {
      return _this.settings && _this.settings.viewType;
    }, function () {
      return _this.$onChanges();
    });
    $scope.$watch(function () {
      return _this.settings && _this.settings.parentSubjectsViewType;
    }, function () {
      return _this.$onChanges();
    });
    return _this;
  }
  _createClass(ClassicPlanTableController, [{
    key: "needVerticalDrawProfile",
    value: function needVerticalDrawProfile(pc) {
      return pc.classesCount < 6 && pc.profile.name.length > 10;
    }
  }, {
    key: "$onChanges",
    value: function $onChanges() {
      this.headerSettings.withClassesRow = true;
      // if(this.appContext.funcType === 3){
      // 	this.headerSettings.rows = 2;
      // 	this.headerSettings.withProfilesRow = false;
      // }
      this.readonly = this.appContext.readOnly;
      // if (this.headerSettings.withClassesRow) {
      // 	this.headerSettings.rows = 3;
      // 	this.readonly = this.appContext.readOnly;
      // }
      // else {
      // 	this.headerSettings.rows = 2;
      // 	this.readonly = true;
      // }
      if (this.settings.parentSubjectsViewType === _curriculumplan.CurriculumPlanSubjectsViewType.parentSubjects) {
        this.readonly = true;
      }
      this.inputSettings.readonly = this.readonly;
    }
  }]);
  return ClassicPlanTableController;
}(_commonPlantable.BasePlanTableController);
var ClassicPlanTableComponent = {
  controller: ClassicPlanTableController,
  bindings: {
    settings: "=",
    model: "="
  },
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/classic/classic.plantable.component.html"
};
exports.ClassicPlanTableComponent = ClassicPlanTableComponent;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasePlanTableController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BasePlanTableController = /*#__PURE__*/function () {
  BasePlanTableController.$inject = ["$scope", "appContext", "changeTracker", "language", "$timeout"];
  /*@ngInject*/
  function BasePlanTableController($scope, appContext, changeTracker, language, $timeout) {
    var _this = this;
    _classCallCheck(this, BasePlanTableController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$timeout = $timeout;
    this.isPreSchool = appContext.funcType === 1;
    this.inputSettings = {
      onChange: function onChange(element, val) {
        _this.changeTracker.dataWasChanged();
        _this.model.calcTotals();
        _this.$scope.$applyAsync();
        _this.$timeout(function () {
          return _this.compositTableCtrl.sync();
        });
      },
      readonly: this.appContext.readOnly
    };
    this.$scope.$on("curriculum-plan-saved", function () {
      _this.compositTableCtrl.sync();
      _this.model.planRows.forEach(function (c) {
        return c.subjectFieldsData.forEach(function (sf) {
          return sf.subjectsData.forEach(function (s) {
            return s["new"] = null;
          });
        });
      });
      _this.inputSettings.controller.save();
    });
    this.$scope.$on("curriculum-plan-hours-changed", function () {
      _this.$timeout(function () {
        return _this.compositTableCtrl.sync();
      });
    });
    this.readonly = this.appContext.readOnly;
  }
  _createClass(BasePlanTableController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;
      this.$timeout(function () {
        return _this2.compositTableCtrl.sync();
      });
    }
  }]);
  return BasePlanTableController;
}();
exports.BasePlanTableController = BasePlanTableController;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IupPlanTableComponent = void 0;
var _commonPlantable = __webpack_require__(46);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IupPlanTableController = /*#__PURE__*/function (_BasePlanTableControl) {
  _inherits(IupPlanTableController, _BasePlanTableControl);
  var _super = _createSuper(IupPlanTableController);
  function IupPlanTableController() {
    _classCallCheck(this, IupPlanTableController);
    return _super.apply(this, arguments);
  }
  _createClass(IupPlanTableController, [{
    key: "$onInit",
    value: function $onInit() {
      this.iupModel = this.model;
      this.viewLegends();
      _get(_getPrototypeOf(IupPlanTableController.prototype), "$onInit", this).call(this);
    }
  }, {
    key: "viewLegends",
    value: function viewLegends() {
      var legendIupNoClasses = this.legends.find(function (x) {
        return x["class"] == "legend-iup-no-classes";
      });
      if (!!legendIupNoClasses) {
        legendIupNoClasses.show = this.iupModel.emptyGrades && !!this.iupModel.emptyGrades.length;
      }
    }
  }, {
    key: "noClasses",
    value: function noClasses(grade) {
      return this.iupModel.emptyGrades.some(function (x) {
        return x == grade;
      });
    }
  }]);
  return IupPlanTableController;
}(_commonPlantable.BasePlanTableController);
var IupPlanTableComponent = {
  controller: IupPlanTableController,
  bindings: {
    settings: "=",
    model: "=",
    legends: "<"
  },
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/iup/iup.plantable.component.html"
};
exports.IupPlanTableComponent = IupPlanTableComponent;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PrintController = /*#__PURE__*/function () {
  function PrintController(language) {
    _classCallCheck(this, PrintController);
    this.language = language;
  }
  _createClass(PrintController, [{
    key: "$onInit",
    value: function $onInit() {
      this.options = this.settings && this.settings.options || {};
    }
    // собирает контент по клику
  }, {
    key: "buildContent",
    value: function buildContent() {
      if (this.settings && this.settings.buildContent && typeof this.settings.buildContent === "function") {
        return this.settings.buildContent();
      }
      return angular.element(".print-block");
    }
  }, {
    key: "print",
    value: function print() {
      this.buildContent().printUtils().toPrint(this.options);
    }
  }, {
    key: "export",
    value: function _export() {
      this.buildContent().printUtils().toExcel(this.options);
    }
  }]);
  return PrintController;
}();
var PrintComponent = {
  templateUrl: "/static/dist/app/global/templates/print.component.html",
  controller: PrintController,
  bindings: {
    settings: "="
  }
};
exports.PrintComponent = PrintComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRepository = exports.ClassExpandProp = void 0;
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
var ClassExpandProp;
exports.ClassExpandProp = ClassExpandProp;
(function (ClassExpandProp) {
  ClassExpandProp["chiefs"] = "chiefs";
  ClassExpandProp["using"] = "using";
  ClassExpandProp["educPrograms"] = "educPrograms";
  ClassExpandProp["room"] = "room";
  ClassExpandProp["hasClassNotWorkingTeacher"] = "hasClassNotWorkingTeacher";
})(ClassExpandProp || (exports.ClassExpandProp = ClassExpandProp = {}));
var ClassesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ClassesRepository, _BaseRepository);
  var _super = _createSuper(ClassesRepository);
  function ClassesRepository() {
    _classCallCheck(this, ClassesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ClassesRepository, [{
    key: "getYearClasses",
    value: function getYearClasses(args) {
      var params = {};
      if (args.grades && args.grades.length) {
        params.grade = args.grades;
      }
      if (args.termId) {
        params.termId = args.termId;
      }
      if (args.profileId && args.profileId > 0) {
        params.profileId = args.profileId;
      }
      if (args.step && args.step > 0) {
        params.step = args.step;
      }
      if (args.directionId && args.directionId > 0) {
        params.directionId = args.directionId;
      }
      if (args.programId && args.programId > 0) {
        params.programId = args.programId;
      }
      if (args.iup) {
        params.iup = args.iup;
      }
      if (args.expand && args.expand.length) {
        params.expand = args.expand;
      }
      if (args.self) {
        params.self = args.self;
      }
      return this.$http.get("/webapi/classes", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getById",
    value: function getById(classId, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/classes/".concat(classId), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "create",
    value: function create(cls, extraData) {
      return this.$http.put("/webapi/classes", cls, {
        params: extraData
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(cls, extraData) {
      return this.$http.post("/webapi/classes", cls, {
        params: extraData
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(cls) {
      return this.$http["delete"]("/webapi/classes", {
        params: {
          id: cls
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassTypes",
    value: function getClassTypes(funcType) {
      return this.$http.get("/webapi/refs/classtypes", {
        params: {
          funcType: funcType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddSpecialization",
    value: function getAddSpecialization() {
      return this.$http.get("/webapi/references/addspecialization").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAgeCategories",
    value: function getAgeCategories() {
      return this.$http.get("/webapi/references/ageCategories").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStayRegimes",
    value: function getStayRegimes() {
      return this.$http.get("/webapi/references/stayRegimes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDouGroupTypes",
    value: function getDouGroupTypes() {
      return this.$http.get("/webapi/references/douGroupTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDouPrograms",
    value: function getDouPrograms() {
      return this.$http.get("/webapi/references/programs").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAges",
    value: function getAges() {
      return this.$http.get("/webapi/references/ages").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassForms",
    value: function getClassForms() {
      return this.$http.get("/webapi/references/classForms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassChiefs",
    value: function getClassChiefs(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/chiefs")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassClassForm",
    value: function getClassClassForm(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/classForm")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassVacations",
    value: function getClassVacations(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/vacations")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGroupDouPrograms",
    value: function getGroupDouPrograms(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/douPrograms")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassLetters",
    value: function getClassLetters(schoolYearId, withAddProg) {
      var data = {};
      if (schoolYearId) {
        data.schoolYearId = schoolYearId;
      }
      if (withAddProg) {
        data.withAddProg = withAddProg;
      }
      return this.$http.get("/webapi/classes/letters", data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherListAndClassChiefs",
    value: function getTeacherListAndClassChiefs(classId) {
      return this.$http.get("/webapi/classes/get-class-teachers", {
        params: {
          classId: classId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setClassChiefs",
    value: function setClassChiefs(classId, chiefs) {
      return this.$http.post("/webapi/classes/set-chiefs", null, {
        params: {
          classId: classId,
          chief: chiefs
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassPeriodType",
    value: function getClassPeriodType(classId) {
      return this.$http.get("/webapi/classes/".concat(classId, "/periodType")).then(this.handleResponse, this.handleError);
    }
  }]);
  return ClassesRepository;
}(_baseRepository.BaseRepository);
exports.ClassesRepository = ClassesRepository;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentSubjectsRepository = void 0;
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
var ParentSubjectsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ParentSubjectsRepository, _BaseRepository);
  var _super = _createSuper(ParentSubjectsRepository);
  function ParentSubjectsRepository() {
    _classCallCheck(this, ParentSubjectsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ParentSubjectsRepository, [{
    key: "getSubjectField",
    value: function getSubjectField(parentSubjectId, subjectId) {
      return this.$http.get("/webapi/parentsubjects/".concat(parentSubjectId, "/subjectfield"), {
        params: {
          subjectId: subjectId
        }
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "editParentSubject",
    value: function editParentSubject(dto) {
      return this.$http.post("/webapi/parentsubjects", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeParentSubjects",
    value: function removeParentSubjects(ids) {
      return this.$http["delete"]("/webapi/parentsubjects", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return ParentSubjectsRepository;
}(_repository.BaseRepository);
exports.ParentSubjectsRepository = ParentSubjectsRepository;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsRepository = void 0;
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
var TermsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(TermsRepository, _BaseRepository);
  var _super = _createSuper(TermsRepository);
  function TermsRepository() {
    _classCallCheck(this, TermsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(TermsRepository, [{
    key: "getTerms",
    value: function getTerms(query) {
      if (!query) {
        var emptyQuery = {};
        query = emptyQuery;
      }
      return this.$http.post("/webapi/terms/search", query).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getTermInfo",
    value: function getTermInfo(termId) {
      return this.$http.get("/webapi/terms/" + termId).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "save",
    value: function save(terms) {
      return this.$http.post("/webapi/terms", terms)["catch"](this.handleError);
    }
  }]);
  return TermsRepository;
}(_repository.BaseRepository);
exports.TermsRepository = TermsRepository;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermTypeGradesController = exports.TermTypeGradesComponent = void 0;
var _common = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TermTypeGradesController = /*#__PURE__*/function () {
  TermTypeGradesController.$inject = ["pageContext", "$dialogs", "$appLoader", "termTypesRepository", "profilesRepository", "subjectGroupsRepository", "$q", "$alerts", "changeTracker", "taskQueueService", "appContext", "language", "greenTextService", "$sce"];
  /*@ngInject*/
  function TermTypeGradesController(pageContext, $dialogs, $appLoader, termTypesRepository, profilesRepository, subjectGroupsRepository, $q, $alerts, changeTracker, taskQueueService, appContext, language, greenTextService, $sce) {
    _classCallCheck(this, TermTypeGradesController);
    this.pageContext = pageContext;
    this.$dialogs = $dialogs;
    this.$appLoader = $appLoader;
    this.termTypesRepository = termTypesRepository;
    this.profilesRepository = profilesRepository;
    this.subjectGroupsRepository = subjectGroupsRepository;
    this.$q = $q;
    this.$alerts = $alerts;
    this.changeTracker = changeTracker;
    this.taskQueueService = taskQueueService;
    this.appContext = appContext;
    this.language = language;
    this.greenTextService = greenTextService;
    this.$sce = $sce;
    this.data = {
      termTypes: [],
      profiles: [],
      termTypesGrades: [],
      profilesGrades: [],
      emptyIupGroup: null
    };
    this.state = {
      readOnly: appContext.readOnly,
      emptyData: false,
      dataReady: false
    };
    this.load();
  }
  _createClass(TermTypeGradesController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.wizard ? this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + " 7. " + this.language.Generic.SetupSchoolCalendar.kTermTypes))) : this.language.Generic.SetupSchoolCalendar.kTermTypes;
      this.pageContext.parent = {
        title: this.language.Generic.MenuFolders.kFNSchoolYearAndTerms,
        href: "/years/"
      };
      this.pageContext.back = {
        history: true
      };
      this.pageContext.showYearTabs = true;
    }
  }, {
    key: "save",
    value: function save() {
      var _this = this;
      var saveData = this.data.profilesGrades;
      var unselected = _.findWhere(saveData, {
        termTypeId: -1
      });
      if (unselected) {
        this.$dialogs.message(this.language.Generic.Common.kDefineTermsTypes + "!");
        return;
      }
      var taskQueueSettings = {
        getTaskFunc: function getTaskFunc() {
          return _this.termTypesRepository.saveTermTypesGrades(saveData);
        }
      };
      this.taskQueueService.execute(taskQueueSettings).then(function () {
        _this.$alerts.success(_this.language.Generic.SetupSchoolCalendar.kMsgSave);
        _this.changeTracker.clearDataChanges();
      });
    }
  }, {
    key: "editGroups",
    value: function editGroups() {
      var grade = this.data.emptyIupGroup.grades[0];
      (0, _common.postTo)("/angular/school/classmanagement/subjectgroups/?classId=".concat(grade, "_1"));
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var loadTermTypes = this.termTypesRepository.getTermTypes().then(function (termTypes) {
        _this2.data.termTypes = termTypes;
      });
      var loadProfiles = this.profilesRepository.getProfiles().then(function (profiles) {
        _this2.data.profiles = profiles;
      });
      var loadTermTypesGrades = this.termTypesRepository.getTermTypesGrades().then(function (termTypesGrades) {
        _this2.data.termTypesGrades = termTypesGrades;
      });
      var getEmptyGroups = this.subjectGroupsRepository.getEmptyIupGroups().then(function (emptyIupGroups) {
        if (emptyIupGroups.length) {
          _this2.data.emptyIupGroup = emptyIupGroups[0];
        }
      });
      this.$q.all([loadTermTypes, loadProfiles, loadTermTypesGrades, getEmptyGroups]).then(function () {
        _this2.initPage();
        var profileGrades = [];
        _this2.data.profiles.forEach(function (profile) {
          var grades = profile.grades.map(function (grade) {
            var val = _this2.data.termTypesGrades.find(function (x) {
              return x.profileId == profile.id && x.grade == grade.id;
            });
            var item = {
              profileId: profile.id,
              grade: grade.id,
              readOnly: val && val.readOnly && true || false,
              termTypeId: val && val.termTypeId || -1
            };
            item.gradeName = grade.name;
            return item;
          });
          profileGrades = profileGrades.concat(grades);
        });
        _this2.data.profilesGrades = profileGrades;
        _this2.changeTracker.clearDataChanges();
        _this2.state.emptyData = false;
        _this2.state.dataReady = true;
        _this2.$appLoader.hide();
      });
    }
  }]);
  return TermTypeGradesController;
}();
exports.TermTypeGradesController = TermTypeGradesController;
var TermTypeGradesComponent = {
  selector: "termtypeGrades",
  bindings: {
    wizard: "<?"
  },
  controller: TermTypeGradesController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/termtypes/grades/termtype.grades.component.html"
};
exports.TermTypeGradesComponent = TermTypeGradesComponent;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaLimitsComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EaLimitsController = /*#__PURE__*/function () {
  EaLimitsController.$inject = ["$longWork", "$alerts", "changeTracker", "$appLoader", "$q", "eaCurriculumRepository", "appContext", "pageContext", "curriculumConstants", "language"];
  /*@ngInject*/
  function EaLimitsController($longWork, $alerts, changeTracker, $appLoader, $q, eaCurriculumRepository, appContext, pageContext, curriculumConstants, language) {
    _classCallCheck(this, EaLimitsController);
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.changeTracker = changeTracker;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.eaCurriculumRepository = eaCurriculumRepository;
    this.language = language;
    pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleEaLimits;
    pageContext.parent = null;
    pageContext.back = null;
    this.state = {
      readOnly: appContext.readOnly,
      dataReady: false
    };
    this.grades = curriculumConstants.getAllPossibleGrades(appContext.funcType), this.load();
  }
  //загрузка данных
  _createClass(EaLimitsController, [{
    key: "load",
    value: function load() {
      var _this = this;
      var loadLimits = this.eaCurriculumRepository.getEaLimits().then(function (limits) {
        _this.limits2 = limits;
      });
      return this.$q.all([loadLimits]).then(function () {
        try {
          _this.limits = [];
          _this.grades.forEach(function (g) {
            var limit = _this.limits2.find(function (lim) {
              return lim.grade == g.id;
            });
            _this.limits.push({
              grade: g.id,
              hours: limit ? limit.hours : null,
              componentId: 0
            });
          });
        } catch (ex) {
          console.error(ex.name + ": " + ex.message);
        }
        _this.state.dataReady = true;
        _this.$appLoader.hide();
        _this.changeTracker.clearDataChanges();
      });
    }
  }, {
    key: "save",
    value: function save(valid) {
      var _this2 = this;
      if (!valid) {
        return Promise.resolve();
      }
      if (this.changeTracker.isDataChanged()) {
        var defLimits = this.limits.filter(function (lim) {
          return lim.hours != null && lim.hours > 0;
        });
        var heavyPromise = this.eaCurriculumRepository.saveEaLimits(defLimits).then(function () {
          _this2.load().then(function () {
            _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
          });
        });
        return this.$longWork.execute(heavyPromise);
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
        return Promise.resolve();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;
      if (this.changeTracker.isDataChanged()) {
        this.load().then(function () {
          _this3.$alerts.info(_this3.language.Generic.Common.kResetChanges);
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }]);
  return EaLimitsController;
}();
var EaLimitsComponent = {
  controller: EaLimitsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/ealimits/eaLimits.component.html"
};
exports.EaLimitsComponent = EaLimitsComponent;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaCurriculumRepository = void 0;
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
var EaCurriculumRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EaCurriculumRepository, _BaseRepository);
  var _super = _createSuper(EaCurriculumRepository);
  function EaCurriculumRepository() {
    _classCallCheck(this, EaCurriculumRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EaCurriculumRepository, [{
    key: "getEaLimits",
    value: function getEaLimits() {
      return this.$http.get("/webapi/curriculum/ealimits").then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "saveEaLimits",
    value: function saveEaLimits(limits) {
      return this.$http.post("/webapi/curriculum/ealimits", limits).then(this.handleResponse, this.handleError);
    }
  }]);
  return EaCurriculumRepository;
}(_repository.BaseRepository);
exports.EaCurriculumRepository = EaCurriculumRepository;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSubjectComponent = void 0;
var _searchSource = _interopRequireDefault(__webpack_require__(56));
var _subjects = __webpack_require__(10);
var _extDeferred = __webpack_require__(4);
var _common = __webpack_require__(57);
var _subjectsLanguage = __webpack_require__(16);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var EditSubjectController = /*#__PURE__*/function () {
  EditSubjectController.$inject = ["$scope", "language", "$http", "pageContext", "$appLoader", "subjectsRepository", "$q", "$alerts", "settingsProvider", "$routeParams", "$location", "$dialogs", "$longWork", "changeTracker", "appContext", "referencesRepository"];
  /*@ngInject*/
  function EditSubjectController($scope, language, $http, pageContext, $appLoader, subjectsRepository, $q, $alerts, settingsProvider, $routeParams, $location, $dialogs, $longWork, changeTracker, appContext, referencesRepository) {
    var _this = this;
    _classCallCheck(this, EditSubjectController);
    this.$scope = $scope;
    this.language = language;
    this.$http = $http;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.subjectsRepository = subjectsRepository;
    this.$q = $q;
    this.$alerts = $alerts;
    this.settingsProvider = settingsProvider;
    this.$routeParams = $routeParams;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.appContext = appContext;
    this.referencesRepository = referencesRepository;
    this.extraActivity = false;
    this.getSubjectFieldTitle = function (hasParentSubject) {
      return hasParentSubject ? _this.language.Generic.SetupSchoolCalendar.kCantChangeSubjField : null;
    };
    //загрузка данных
    this.load = function () {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var freeSubjectField, queries, getModuleQa, prepareGetExtraDirections, loadSubjectInfo, loadSubjectFields;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              freeSubjectField = {
                id: -1,
                name: this.language.Generic.SetupSchoolCalendar.kFreeSF
              };
              queries = [];
              this.state.codifiersReady = false;
              getModuleQa = this.settingsProvider.ServerSettings.SystemSettings.ModuleQA().then(function (setting) {
                return _this2.state.moduleQA = setting;
              });
              queries.push(getModuleQa);
              if (this.extraActivity) {
                prepareGetExtraDirections = this.referencesRepository.getExtraDirections().then(function (result) {
                  _this2.data.directions = result;
                  _this2.state.directionsReady = true;
                });
                queries.push(prepareGetExtraDirections);
              }
              if (this.state.mode === "edit") {
                loadSubjectInfo = this.subjectsRepository.getSubject(this.data.subjectId, [_subjects.SubjectExpand.Teachers, _subjects.SubjectExpand.Groups]).then(function (subjectInfo) {
                  subjectInfo.subjectField = subjectInfo.subjectField || freeSubjectField;
                  subjectInfo.teachers = subjectInfo.teachers || [];
                  subjectInfo.groups = subjectInfo.groups || [];
                  subjectInfo.extraCurricular = subjectInfo.extraCurricular;
                  _this2.data.subjectInfo = subjectInfo;
                  _this2.data.group = subjectInfo.groups && subjectInfo.groups[0];
                }); //this.state.codifiersReady = false;
                //if (this.state.codifiersReady === false) { - также перечитываем с сервера
                getModuleQa.then(function () {
                  if (!_this2.state.moduleQA) {
                    return;
                  }
                  _this2.subjectsRepository.getSubjectCodebookInfo(_this2.data.subjectId).then(function (codeBookInfo) {
                    var unrelateOption = {
                      id: -1,
                      name: _this2.language.Generic.QualityAssessment.kDontBind
                    };
                    codeBookInfo.gradeSchool.list.unshift(unrelateOption);
                    codeBookInfo.gradeSchool.current = codeBookInfo.gradeSchool.current || unrelateOption;
                    codeBookInfo.gradeSchool.initCurrent = angular.copy(codeBookInfo.gradeSchool.current);
                    codeBookInfo.oge.list.unshift(unrelateOption);
                    codeBookInfo.oge.current = codeBookInfo.oge.current || unrelateOption;
                    codeBookInfo.oge.initCurrent = angular.copy(codeBookInfo.oge.current);
                    codeBookInfo.ege.list.unshift(unrelateOption);
                    codeBookInfo.ege.current = codeBookInfo.ege.current || unrelateOption;
                    codeBookInfo.ege.initCurrent = angular.copy(codeBookInfo.ege.current);
                    _this2.data.codeBookInfo = codeBookInfo;
                    _this2.state.codifiersReady = true;
                  });
                });
                //}
                queries.push(loadSubjectInfo);
              } else {
                this.data.subjectInfo = {
                  id: null,
                  name: null,
                  shortName: null,
                  teachers: [],
                  groups: [],
                  parentSubject: null,
                  globalSubject: null,
                  order: null,
                  isModular: false,
                  extraCurricular: this.extraActivity,
                  subjectField: freeSubjectField,
                  direction: null
                };
                this.data.codeBookInfo = {
                  gradeSchool: {},
                  oge: {},
                  ege: {}
                };
              }
              loadSubjectFields = this.subjectsRepository.getSubjectFields().then(function (subjectFields) {
                _this2.data.subjectFields = _.sortBy(subjectFields, function (subjectField) {
                  return subjectField.order;
                });
                _this2.data.subjectFields.unshift(freeSubjectField);
              });
              queries.push(loadSubjectFields);
              _context.next = 11;
              return this.$longWork.execute(this.$q.all(queries)).then(function () {
                if (_this2.extraActivity) {
                  _this2.data.createNewGlobalSubj = true;
                } else {
                  _this2.state.globalSubjectsVisible = true;
                  _this2.data.createNewGlobalSubj = false;
                }
                _this2.initGlobalSubjectSelect();
                _this2.state.emptyData = false;
                _this2.state.dataReady = true;
                _this2.changeTracker.clearDataChanges();
                _this2.$appLoader.hide();
              })["catch"](function () {
                _this2.$appLoader.hide();
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    };
    var mode = $routeParams.subjectId === "new" ? "create" : "edit";
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity == "true";
    this.languageService = new _subjectsLanguage.SubjectsLanguageService(this.language, this.extraActivity);
    this.initPageContext(pageContext, mode);
    this.funcType = appContext.funcType;
    this.data = {
      subjectId: $routeParams.subjectId === "new" ? null : parseInt($routeParams.subjectId),
      subjectInfo: null,
      codeBookInfo: null,
      subjectFields: [],
      createNewGlobalSubj: false,
      group: null,
      directions: []
    };
    if (this.extraActivity) {
      this.data.createNewGlobalSubj = true;
    }
    this.state = {
      readOnly: appContext.readOnly,
      globalSubjectsVisible: true,
      moduleQA: false,
      codifiersReady: false,
      directionsReady: false,
      mode: mode,
      dataReady: false,
      emptyData: false,
      funcType: appContext.funcType
    };
    this.load();
  }
  _createClass(EditSubjectController, [{
    key: "initPageContext",
    value: function initPageContext(pageContext, mode) {
      pageContext.title = mode === "create" ? this.languageService.TitleCreate : this.languageService.TitleEdit;
      pageContext.parent = {
        href: "/subjects/",
        title: this.languageService.List
      };
      pageContext.back = {
        href: "/subjects/"
      };
      if (this.extraActivity) {
        pageContext.parent.href += "?extraActivity=true";
        pageContext.back.href += "?extraActivity=true";
      }
    }
  }, {
    key: "initGlobalSubjectSelect",
    value: function initGlobalSubjectSelect() {
      this.searchCtx = new _searchSource["default"]({
        globalSubjects: {
          url: "/webapi/globalsubjects",
          searchParam: "name",
          minChars: 1
        }
      }, this.$http);
    }
  }, {
    key: "isSchoolFuncType",
    value: function isSchoolFuncType() {
      return this.state.funcType == _common.FuncType.school;
    }
  }, {
    key: "toggleNewGlobalSubj",
    value: function toggleNewGlobalSubj() {
      var _this3 = this;
      console.log("toggle new subj");
      if (this.data.createNewGlobalSubj) {
        this.$dialogs.confirm(this.language.Generic.SetupSchoolCalendar.kCreateNewGlobalSubjectConfirm).then(function () {
          _this3.state.globalSubjectsVisible = false;
          _this3.$scope.$apply();
        }, function () {
          _this3.data.createNewGlobalSubj = false;
          _this3.$scope.$apply();
        });
      } else {
        this.state.globalSubjectsVisible = true;
        this.data.subjectInfo.globalSubject = null;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      if (this.changeTracker.isDataChanged()) this.$dialogs.confirm("Внимание! Текущие изменения формы будут сброшены. Продолжить?").then(function () {
        _this4.load().then(function () {
          return _this4.$dialogs.notify(_this4.language.Generic.Common.kAttention, "Данные успешно восстановлены!", true);
        });
      });else this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.SetupSchoolUI.kDataNotModified, false);
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      var sbj = this.data.subjectInfo;
      if (this.form.$invalid) {
        this.form.displayErrors = true;
        return;
      }
      if (this.data.createNewGlobalSubj) {
        this.data.subjectInfo.globalSubject = {
          id: null,
          name: this.data.subjectInfo.name
        };
      } else if (!sbj.globalSubject || !sbj.globalSubject.id) {
        this.form.displayErrors = true;
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kSelectGlobalSubjectEx);
        return;
      }
      var regExp = new RegExp(this.language.Generic.SetupSchoolCalendar.kForeignLangRegExp, "i");
      var confirms = [];
      if (regExp.test(sbj.name) || regExp.test(sbj.globalSubject.name)) {
        confirms.push(function () {
          return _this5.$dialogs.confirm(_this5.language.Generic.SetupSchoolCalendar.kForeignLangRecomend);
        });
      }
      var checks = [];
      var codifiersChanged = false;
      var checkCodifiersChanged = function checkCodifiersChanged(info, message) {
        if (info.current.id === info.initCurrent.id) {
          return;
        }
        codifiersChanged = true;
        var checkIsUsing = _this5.subjectsRepository.isCodebookUsing(sbj.id, info.initCurrent.id).then(function (isUsing) {
          if (isUsing) {
            confirms.push(function () {
              return _this5.$dialogs.confirm(message);
            });
          }
        });
        checks.push(checkIsUsing);
      };
      if (this.state.moduleQA && this.data.codeBookInfo && this.state.codifiersReady && !this.extraActivity && this.isSchoolFuncType()) {
        checkCodifiersChanged(this.data.codeBookInfo.gradeSchool, this.language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectGradeSchool);
        checkCodifiersChanged(this.data.codeBookInfo.oge, this.language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectOGE);
        checkCodifiersChanged(this.data.codeBookInfo.ege, this.language.Generic.QualityAssessment.kConfirmExistsLessonsOrTestPlansForSubjectEGE);
      }
      var readyToSaveDef = this.$q.defer();
      if (checks.length) {
        this.$longWork.execute(this.$q.all(checks)).then(function () {
          return readyToSaveDef.resolve();
        });
      } else {
        readyToSaveDef.resolve();
      }
      var readyToSave = readyToSaveDef.promise;
      this.$q.when(readyToSave).then(function () {
        return _extDeferred.extDeferred.when(confirms);
      }).then(function () {
        var operations = [];
        var saveCommonInfo;
        if (_this5.state.mode === "edit") {
          saveCommonInfo = _this5.subjectsRepository.editSubject(sbj);
          saveCommonInfo.then(function () {
            return _this5.$alerts.success(_this5.languageService.SuccessChange);
          });
        } else {
          var createSubjectPromise = _this5.subjectsRepository.createSubject(sbj);
          createSubjectPromise.then(function (createdSubj) {
            _this5.$alerts.success(_this5.languageService.SuccessChange);
            _this5.data.subjectId = createdSubj.id;
            _this5.state.mode = "edit";
          });
          saveCommonInfo = createSubjectPromise;
        }
        operations.push(saveCommonInfo);
        if (codifiersChanged) {
          var saveCodebookInfo = _this5.subjectsRepository.setSubjectCodebookInfo(sbj.id, _this5.data.codeBookInfo);
          saveCodebookInfo.then(function () {
            return _this5.$alerts.success(_this5.language.Generic.QualityAssessment.kCodifiersBindingsSaved);
          });
          operations.push(saveCodebookInfo);
        }
        _this5.pageContext.title = _this5.languageService.TitleEdit;
        _this5.$longWork.execute(Promise.all(operations)).then(function () {
          return _this5.load();
        });
      });
    }
  }]);
  return EditSubjectController;
}();
var EditSubjectComponent = {
  controller: EditSubjectController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editSubject/editSubject.component.html"
};
exports.EditSubjectComponent = EditSubjectComponent;

/***/ }),
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectTeachersComponent = void 0;
var _editSubjectTeachers = __webpack_require__(59);
var _subjectsLanguage = __webpack_require__(16);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var SubjectTeachersController = /*#__PURE__*/_createClass( /*@ngInject*/["$scope", "subjectsRepository", "$q", "$longWork", "usersRepository", "$uibModal", "$alerts", "language", function SubjectTeachersController($scope, subjectsRepository, $q, $longWork, usersRepository, $uibModal, $alerts, language) {
  var _this = this;
  _classCallCheck(this, SubjectTeachersController);
  this.$scope = $scope;
  this.subjectsRepository = subjectsRepository;
  this.$q = $q;
  this.$longWork = $longWork;
  this.usersRepository = usersRepository;
  this.$uibModal = $uibModal;
  this.$alerts = $alerts;
  this.language = language;
  this.edit = function () {
    _this.$longWork.show();
    var _usedTeachers;
    var _staffList;
    var getUsedTeachers = _this.subjectsRepository.getTeachers(_this.subject.id, true).then(function (responseTeachers) {
      return _usedTeachers = responseTeachers;
    });
    var getStaffList = _this.usersRepository.getStaffList([3]).then(function (responseStaffList) {
      return _staffList = responseStaffList;
    });
    _this.$q.all([getUsedTeachers, getStaffList]).then(function () {
      var languageService = new _subjectsLanguage.SubjectsLanguageService(_this.language, _this.subject.extraCurricular);
      _this.$longWork.close();
      var modalInstance = _this.$uibModal.open({
        backdrop: 'static',
        templateUrl: _editSubjectTeachers.EducSubjectTeachersComponent.templateUrl,
        controller: _editSubjectTeachers.EducSubjectTeachersComponent.controller,
        controllerAs: _editSubjectTeachers.EducSubjectTeachersComponent.controllerAs,
        resolve: {
          subjectInfo: function subjectInfo() {
            return _this.subject;
          },
          staffList: function staffList() {
            return _staffList;
          },
          usedTeachers: function usedTeachers() {
            return _usedTeachers;
          }
        }
      });
      modalInstance.result.then(function (teachers) {
        _this.subject.teachers = _.sortBy(teachers, function (t) {
          return t.name;
        });
        _this.$scope.$applyAsync();
        _this.onUpdate();
        _this.$alerts.success(languageService.TeachersSaved);
      });
    });
  };
}]);
var SubjectTeachersComponent = {
  selector: "subjectTeachers",
  bindings: {
    subject: '<',
    onUpdate: '&'
  },
  controller: SubjectTeachersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editSubject/subjectTeachers.component.html"
};
exports.SubjectTeachersComponent = SubjectTeachersComponent;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducSubjectTeachersComponent = void 0;
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
var EducSubjectTeachersController = /*#__PURE__*/function (_NetCityModalControll) {
  EducSubjectTeachersController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "subjectsRepository", "language", "subjectInfo", "staffList", "usedTeachers"];
  _inherits(EducSubjectTeachersController, _NetCityModalControll);
  var _super = _createSuper(EducSubjectTeachersController);
  /*@ngInject*/
  function EducSubjectTeachersController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, subjectsRepository, language, subjectInfo, staffList, usedTeachers) {
    var _this;
    _classCallCheck(this, EducSubjectTeachersController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.subjectsRepository = subjectsRepository;
    _this.language = language;
    _this.subjectInfo = subjectInfo;
    _this.staffList = staffList;
    _this.usedTeachers = usedTeachers;
    _this.toggle = function (staff) {
      if (_this.checked(staff)) {
        _this.teachers = _.reject(_this.teachers, function (t) {
          return t.id === staff.id;
        });
      } else {
        _this.teachers.push(staff);
      }
    };
    _this.teachers = angular.copy(subjectInfo.teachers);
    _this.header = language.Generic.SetupSchoolCalendar.kEditSubjTeachers;
    _this.buttons = [{
      action: function action() {
        return _this.ok();
      },
      icon: "glyphicon glyphicon-floppy-save",
      "class": _nsModal.ButtonClass.primary,
      title: _this.language.Generic.Buttons.kSave
    }, {
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle",
      title: _this.language.Generic.Buttons.kCancel
    }];
    return _this;
  }
  _createClass(EducSubjectTeachersController, [{
    key: "checked",
    value: function checked(staff) {
      return _.some(this.teachers, function (t) {
        return t.id === staff.id;
      });
    }
  }, {
    key: "disabled",
    value: function disabled(staff) {
      return _.some(this.usedTeachers, function (t) {
        return t.id === staff.id;
      });
    }
  }, {
    key: "ok",
    value: function ok() {
      var _this2 = this;
      var teacherIds = this.teachers.map(function (t) {
        return t.id;
      });
      var promise = this.subjectsRepository.setTeachers(this.subjectInfo.id, teacherIds);
      this.$longWork.execute(promise).then(function () {
        return _this2.$uibModalInstance.close(_this2.teachers);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EducSubjectTeachersController;
}(_netcityModalCtrl.NetCityModalController);
var EducSubjectTeachersComponent = {
  controller: EducSubjectTeachersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editTeachers/editSubjectTeachers.component.html"
};
exports.EducSubjectTeachersComponent = EducSubjectTeachersComponent;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupsComponent = void 0;
var _editGroup = __webpack_require__(61);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectGroupsController = /*#__PURE__*/function () {
  SubjectGroupsController.$inject = ["subjectsRepository", "$longWork", "$dialogs", "$uibModal", "$alerts", "language"];
  /*@ngInject*/
  function SubjectGroupsController(subjectsRepository, $longWork, $dialogs, $uibModal, $alerts, language) {
    _classCallCheck(this, SubjectGroupsController);
    this.subjectsRepository = subjectsRepository;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
  }
  _createClass(SubjectGroupsController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.subject.groups.length) {
        this.group = this.subject.groups[0];
      }
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      this.editGroupInternal({
        id: null,
        name: "",
        shortName: ""
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup() {
      var group = angular.copy(this.group);
      this.editGroupInternal(group);
    }
  }, {
    key: "delGroup",
    value: function delGroup() {
      var _this = this;
      this.$dialogs.confirmDelete("".concat(this.language.Generic.SetupSchoolCalendar.kRemoveGroup, ". ").concat(this.language.Generic.Common.kContinue)).then(function () {
        return _this.$longWork.execute(_this.subjectsRepository.deleteGroup(_this.subject.id, _this.group.id));
      }).then(function () {
        _this.subject.groups = _this.subject.groups.filter(function (g) {
          return g.id != _this.group.id;
        });
        _this.group = _this.subject.groups[0];
        _this.$alerts.success(_this.language.Generic.SetupSchoolCalendar.kSubjectGroupDeleted);
      });
    }
  }, {
    key: "editGroupInternal",
    value: function editGroupInternal(_group) {
      var _this2 = this;
      var mode = _group.id > 0 ? "edit" : "create";
      var modalInstance = this.$uibModal.open({
        backdrop: 'static',
        templateUrl: _editGroup.EducSubjectGroupComponent.templateUrl,
        controller: _editGroup.EducSubjectGroupComponent.controller,
        controllerAs: _editGroup.EducSubjectGroupComponent.controllerAs,
        resolve: {
          subject: function subject() {
            return _this2.subject;
          },
          group: function group() {
            return _group;
          }
        }
      });
      modalInstance.result.then(function (group) {
        _this2.$longWork.close();
        if (mode === "create") {
          _this2.subject.groups.push(group);
          _this2.subject.groups = _.sortBy(_this2.subject.groups, function (g) {
            return g.name;
          });
          _this2.$alerts.success(_this2.language.Generic.SetupSchoolCalendar.kSubjectGroupCreated);
        } else {
          _this2.subject.groups = _this2.subject.groups.filter(function (g) {
            return g.id != group.id;
          });
          _this2.subject.groups.push(group);
          _this2.subject.groups = _.sortBy(_this2.subject.groups, function (g) {
            return g.name;
          });
          _this2.$alerts.success(_this2.language.Generic.SetupSchoolCalendar.kSubjectGroupEdit);
        }
        _this2.group = _this2.subject.groups[0];
      });
    }
  }]);
  return SubjectGroupsController;
}();
var SubjectGroupsComponent = {
  selector: "subjectGroups",
  bindings: {
    subject: '<',
    onUpdate: '&'
  },
  controller: SubjectGroupsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editSubject/subjectGroups.component.html"
};
exports.SubjectGroupsComponent = SubjectGroupsComponent;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EducSubjectGroupComponent = void 0;
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
var EducSubjectGroupController = /*#__PURE__*/function (_NetCityModalControll) {
  EducSubjectGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "subjectsRepository", "language", "subject", "group"];
  _inherits(EducSubjectGroupController, _NetCityModalControll);
  var _super = _createSuper(EducSubjectGroupController);
  /*@ngInject*/
  function EducSubjectGroupController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, subjectsRepository, language, subject, group) {
    var _this;
    _classCallCheck(this, EducSubjectGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.subjectsRepository = subjectsRepository;
    _this.language = language;
    _this.subject = subject;
    _this.group = group;
    _this.mode = group.id > 0 ? "edit" : "create";
    _this.header = _this.mode === "edit" ? language.Generic.SetupSchoolCalendar.kTitleEditSubGroup : language.Generic.SetupSchoolCalendar.kTitleCreateSubGroup;
    _this.buttons = [{
      action: function action() {
        return _this.ok();
      },
      icon: "glyphicon glyphicon-plus-sign",
      "class": _nsModal.ButtonClass.primary,
      title: _this.language.Generic.Buttons.kSave
    }, {
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle",
      title: _this.language.Generic.Buttons.kCancel
    }];
    return _this;
  }
  _createClass(EducSubjectGroupController, [{
    key: "ok",
    value: function ok() {
      var _this2 = this;
      if (!this.group.name) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kEnterSubGroupName);
        return;
      }
      if (!this.group.shortName) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kEnterSubGroupShortName);
        return;
      }
      var promise;
      if (this.mode === "edit") {
        promise = this.subjectsRepository.editGroup(this.subject.id, this.group);
      } else {
        promise = this.subjectsRepository.createGroup(this.subject.id, this.group);
      }
      this.$longWork.execute(promise).then(function (group) {
        _this2.group.id = group.id;
        _this2.$uibModalInstance.close(_this2.group);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EducSubjectGroupController;
}(_netcityModalCtrl.NetCityModalController);
var EducSubjectGroupComponent = {
  controller: EducSubjectGroupController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/subjects/editSubGroup/editGroup.component.html"
};
exports.EducSubjectGroupComponent = EducSubjectGroupComponent;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectListComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(19));
var _extDeferred = __webpack_require__(4);
var _editSubjectField = __webpack_require__(13);
var _subjectsLanguage = __webpack_require__(16);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectListController = /*#__PURE__*/function () {
  SubjectListController.$inject = ["$longWork", "$dialogs", "$location", "subjectsRepository", "$alerts", "appContext", "$uibModal", "language"];
  /*@ngInject*/
  function SubjectListController($longWork, $dialogs, $location, subjectsRepository, $alerts, appContext, $uibModal, language) {
    var _this = this;
    _classCallCheck(this, SubjectListController);
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$location = $location;
    this.subjectsRepository = subjectsRepository;
    this.$alerts = $alerts;
    this.$uibModal = $uibModal;
    this.language = language;
    this.selection = new _multiSelectable["default"]();
    // максимальное количество предустановленных образовательных областей
    this.maxPredefined = 10;
    this.editSubject = function (subject) {
      _this.$location.path("/subjects/".concat(subject.id));
    };
    this.functype = appContext.funcType;
    this.filterSbjByStatus = function (sbj) {
      if (_this.state.status === "all") {
        return true;
      }
      return sbj.usingInYear;
    };
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity == "true";
    this.showGroups = appContext.funcType != 1 && !this.extraActivity;
    this.languageService = new _subjectsLanguage.SubjectsLanguageService(this.language, this.extraActivity);
    this.state = {
      readOnly: appContext.readOnly,
      mode: "grouped",
      status: "all",
      emptyData: false,
      dataReady: false
    };
    this.initSorting();
  }
  _createClass(SubjectListController, [{
    key: "addSubject",
    value: function addSubject() {
      this.$location.path("/subjects/new");
    }
  }, {
    key: "delSubject",
    value: function delSubject() {
      var _this2 = this;
      var ids = _.pluck(this.selection.selected, "id");
      if (!ids.length) {
        this.$dialogs.message(this.languageService.NoDel);
        return;
      }
      var confirms = [function () {
        return _this2.$dialogs.confirmDelete("".concat(_this2.languageService.RemoveWarning, ". ").concat(_this2.language.Generic.Common.kContinue));
      }, function () {
        return _this2.$dialogs.confirmDelete(_this2.language.Generic.Common.kMsgAreYouSure);
      }];
      _extDeferred.extDeferred.when(confirms).then(function () {
        return _this2.$longWork.execute(_this2.subjectsRepository.removeSubjects(ids));
      }).then(function () {
        _this2.$alerts.success(_this2.languageService.WasRemoved);
        _this2.mainCtrl.load();
      });
    }
  }, {
    key: "hasSubjects",
    value: function hasSubjects() {
      return this.subjects.length != 0;
    }
  }, {
    key: "editSubjectField",
    value: function editSubjectField(field) {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: _editSubjectField.EditSubjectFieldComponent.templateUrl,
        controller: _editSubjectField.EditSubjectFieldComponent.controller,
        controllerAs: _editSubjectField.EditSubjectFieldComponent.controllerAs,
        resolve: {
          subjectField: function subjectField() {
            return angular.copy(field);
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.mainCtrl.load();
      });
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      if (!this.subjects) {
        return;
      }
      if (!this.showSubjectFields) {
        this.state.mode = "simple";
      }
      this.initGroupedSubjects();
      this.selection.dropSelect();
    }
  }, {
    key: "initGroupedSubjects",
    value: function initGroupedSubjects() {
      var _this4 = this;
      this.groupedSubjects = this.subjectFields.map(function (subjectField) {
        return {
          subjectField: subjectField,
          subjects: _this4.subjects.filter(function (subject) {
            return subject.subjectField && subject.subjectField.id === subjectField.id;
          })
        };
      }).filter(function (group) {
        return group.subjects.length > 0;
      });
      var emptySubjectField = {
        subjectField: {
          id: -1,
          name: this.language.Generic.SetupSchoolCalendar.kFreeSF
        },
        subjects: _.filter(this.subjects, function (subject) {
          return subject.subjectField === undefined || subject.subjectField === null;
        })
      };
      if (emptySubjectField.subjects.length > 0) {
        this.groupedSubjects.push(emptySubjectField);
      }
      // сортирует
      var sort = function sort(group) {
        var order = group.subjectField.order;
        var maxOrder = 2147483647;
        if (order) {
          return order;
        }
        // для образовательных областей, у которых не указан order
        return maxOrder;
      };
      if (_.some(this.groupedSubjects)) {
        this.groupedSubjects = _.chain(this.groupedSubjects).sortBy(sort).value();
      }
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(changes) {
      if (changes.subjects) {
        this.subjects = changes.subjects.currentValue;
        this.initGroupedSubjects();
        this.selection.dropSelect();
      }
    }
  }, {
    key: "initSorting",
    value: function initSorting() {
      var _this5 = this;
      var fixHelperModified = function fixHelperModified(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function (index) {
          $(this).width($originals.eq(index).width());
        });
        return $helper;
      };
      this.sortableOptions = {
        placeholder: "highlight",
        helper: fixHelperModified,
        stop: function stop(event, element) {
          $(element.item).parent().parent().parent().parent().prevAll().removeClass("not-active");
          $(element.item).parent().parent().parent().parent().nextAll().removeClass("not-active");
          var orderedIds = [];
          for (var ind in _this5.subjects) {
            var subject = _this5.subjects[ind];
            subject.order = parseInt(ind) + 1;
            orderedIds[ind] = subject.id;
          }
          _this5.subjectsRepository.orderSubjects(orderedIds).then(function () {
            _this5.$alerts.success(_this5.language.Generic.SetupSchoolCalendar.kSubjectsOrderSuccSaved);
          });
        },
        start: function start(event, ui) {
          $(ui.helper).parent().parent().parent().parent().prevAll().addClass("not-active"); //tr
          $(ui.helper).parent().parent().parent().parent().nextAll().addClass("not-active"); //tr
          $(ui.helper).addClass("move");
          $(ui.helper).children().css("border-top", 0);
        }
      };
    }
  }]);
  return SubjectListController;
}();
var SubjectListComponent = {
  selector: "subjectList",
  controller: SubjectListController,
  controllerAs: "$ctrl",
  bindings: {
    mainCtrl: '<ctrl',
    subjects: '<',
    subjectFields: '<',
    showGroups: "<",
    showSubjectFields: "<",
    withSorting: "<",
    withStatusFilter: "<",
    readonly: '<'
  },
  templateUrl: "/static/dist/app/school/calendar/subjects/subjectList.component.html"
};
exports.SubjectListComponent = SubjectListComponent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaPlanTableComponent = void 0;
var _commonPlantable = __webpack_require__(46);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var EaPlanTableController = /*#__PURE__*/function (_BasePlanTableControl) {
  _inherits(EaPlanTableController, _BasePlanTableControl);
  var _super = _createSuper(EaPlanTableController);
  function EaPlanTableController() {
    _classCallCheck(this, EaPlanTableController);
    return _super.apply(this, arguments);
  }
  _createClass(EaPlanTableController, [{
    key: "$onInit",
    value: function $onInit() {
      this.eaModel = this.model;
      //		this.viewLegends();
      _get(_getPrototypeOf(EaPlanTableController.prototype), "$onInit", this).call(this);
    }
  }, {
    key: "needVerticalDrawDirection",
    value: function needVerticalDrawDirection(dg) {
      return dg.gradesCount < 6 && dg.direction.name.length > 10;
    }
  }]);
  return EaPlanTableController;
}(_commonPlantable.BasePlanTableController);
var EaPlanTableComponent = {
  controller: EaPlanTableController,
  bindings: {
    settings: "=",
    model: "=",
    legends: "<"
  },
  templateUrl: "/static/dist/app/school/calendar/curriculum/plan/extraActivity/extraActivity.plantable.component.html"
};
exports.EaPlanTableComponent = EaPlanTableComponent;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditYearComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditYearController = /*#__PURE__*/function () {
  function EditYearController(pageContext, $appLoader, yearsRepository, referencesRepository, $dialogs, changeTracker, $location, $scope, $alerts, $longWork, $routeParams, appContext, language, greenTextService, $sce) {
    _classCallCheck(this, EditYearController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.yearsRepository = yearsRepository;
    this.referencesRepository = referencesRepository;
    this.$dialogs = $dialogs;
    this.changeTracker = changeTracker;
    this.$location = $location;
    this.$scope = $scope;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.$routeParams = $routeParams;
    this.appContext = appContext;
    this.language = language;
    this.greenTextService = greenTextService;
    this.$sce = $sce;
    this.yearId = parseInt(appContext.yearId || $routeParams.yearId);
    this.load();
  }
  _createClass(EditYearController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.wizard ? this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + " 1. " + this.language.Generic.SetupSchoolCalendar.kWizardTitleCreateYear))) : this.language.Generic.SetupSchoolCalendar.kTitleEditYear;
      this.pageContext.back = null;
      if (!this.wizard) {
        this.pageContext.parent = {
          title: this.language.Generic.MenuFolders.kFNSchoolYearAndTerms,
          href: "/years/"
        };
      }
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      var promises = [];
      var loadWeekDays = this.yearsRepository.getWeekDays().then(function (weekDays) {
        _this.weekDays = weekDays;
      });
      promises.push(loadWeekDays);
      if (this.yearId) {
        var loadYearWeekDays = this.yearsRepository.getYearWeekends(this.yearId).then(function (yearWeekDays) {
          _this.yearWeekDays = yearWeekDays;
        });
        var loadYearInfo = this.yearsRepository.getSchoolYearInfoById(this.yearId).then(function (yearInfo) {
          _this.yearInfo = yearInfo;
        });
        promises.push(loadYearWeekDays);
        promises.push(loadYearInfo);
      } else {
        var loadYears = this.referencesRepository.getYears().then(function (years) {
          _this.globalYears = years;
          _this.globalYearId = _this.globalYears[0].id;
        });
        promises.push(loadYears);
        this.yearWeekDays = ["Sunday"];
      }
      Promise.all(promises).then(function () {
        _this.weeksDaysControls = _this.weekDays.map(function (weekDay) {
          return {
            shortName: weekDay.shortName,
            value: weekDay.key,
            checked: _.contains(_this.yearWeekDays, weekDay.key)
          };
        });
        _this.initPage();
        _this.$scope.$apply();
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      var checkedControls = _.where(this.weeksDaysControls, {
        checked: true
      });
      var checkedWeekDays = _.map(checkedControls, 'value');
      if (!this.yearId) {
        this.$longWork.execute(this.yearsRepository.createSchoolYear(this.globalYearId, checkedWeekDays)).then(function (yearInfo) {
          _this2.appContext.yearId = yearInfo.id;
          _this2.yearInfo = yearInfo;
          _this2.yearId = yearInfo.id;
          _this2.$alerts.success(_this2.language.Generic.SetupSchoolCalendar.kYearSaved);
          _this2.$scope.$applyAsync();
          _this2.changeTracker.clearDataChanges();
        });
        return;
      }
      var goBack = function goBack() {
        if (_this2.pageContext.parent) _this2.$location.path(_this2.pageContext.parent.href);
      };
      if (!this.changeTracker.isDataChanged()) {
        goBack();
        this.$alerts.info("Данные не были изменены!");
        return;
      }
      if (checkedControls.length <= 0 || checkedControls.length >= 3) {
        this.$dialogs.confirm(this.language.Generic.SetupSchoolCalendar.kNonStandartHolidays + "\n" + this.language.Generic.Common.kContinue).then(function () {
          return _this2.$longWork.execute(_this2.yearsRepository.editSchoolYear(_this2.yearId, checkedWeekDays)).then(function () {
            return _this2.changeTracker.clearDataChanges();
          }).then(function () {
            return goBack();
          }).then(function () {
            return _this2.$alerts.success("Выходные дни успешно сохранены");
          });
        })["catch"](function () {
          return;
        });
      } else {
        this.$longWork.execute(this.yearsRepository.editSchoolYear(this.yearId, checkedWeekDays)).then(function () {
          return _this2.changeTracker.clearDataChanges();
        }).then(function () {
          return goBack();
        }).then(function () {
          return _this2.$alerts.success("Выходные дни успешно сохранены");
        });
      }
    }
  }]);
  return EditYearController;
}();
var EditYearComponent = {
  selector: "editYear",
  controller: EditYearController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/years/edityear.component.html",
  bindings: {
    yearId: "<?",
    wizard: "<?"
  }
};
exports.EditYearComponent = EditYearComponent;

/***/ }),
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarEventsRegistryComponent = void 0;
var _eventsRegistry = __webpack_require__(69);
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
var CalendarEventsRegistryController = /*#__PURE__*/function (_EventsRegistryCompon) {
  _inherits(CalendarEventsRegistryController, _EventsRegistryCompon);
  var _super = _createSuper(CalendarEventsRegistryController);
  function CalendarEventsRegistryController() {
    _classCallCheck(this, CalendarEventsRegistryController);
    return _super.apply(this, arguments);
  }
  _createClass(CalendarEventsRegistryController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleEvents;
      this.pageContext.parent = {
        title: this.language.Generic.MenuFolders.kFNYear,
        href: "/angular/school/schedule/year/",
        postTo: true
      };
      this.pageContext.back = {
        history: true
      };
    }
  }]);
  return CalendarEventsRegistryController;
}(_eventsRegistry.EventsRegistryComponent.controller);
var CalendarEventsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: CalendarEventsRegistryController,
  controllerAs: "$ctrl"
};
exports.CalendarEventsRegistryComponent = CalendarEventsRegistryComponent;

/***/ }),
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumComponentsComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(78));
var _replaceComp = __webpack_require__(79);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CurriculumComponentsController = /*#__PURE__*/function () {
  CurriculumComponentsController.$inject = ["$alerts", "$dialogs", "language", "appContext", "changeTracker", "$longWork", "pageContext", "$appLoader", "$q", "$uibModal", "curriculumRepository"];
  /*@ngInject*/
  function CurriculumComponentsController($alerts, $dialogs, language, appContext, changeTracker, $longWork, pageContext, $appLoader, $q, $uibModal, curriculumRepository) {
    var _this = this;
    _classCallCheck(this, CurriculumComponentsController);
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.language = language;
    this.appContext = appContext;
    this.changeTracker = changeTracker;
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.curriculumRepository = curriculumRepository;
    this.state = {
      readOnly: this.appContext.readOnly,
      dataReady: false,
      emptyData: true,
      sortMode: false
    };
    this.selection = new _selectable["default"]();
    this.canIUP = this.appContext.funcType === 2 || this.appContext.funcType === 4;
    pageContext.title = language.Generic.SetupSchoolCalendar.kTitleCurriculumComponents;
    pageContext.parent = null;
    this.data = {
      components: [],
      iupComponents: []
    };
    this.initSorting();
    this.lazyCreate = _.debounce(function () {
      return _this.create();
    }, 1500, true);
    this.lazyRemove = _.debounce(function () {
      return _this.remove();
    }, 1500, true);
    this.load();
  }
  _createClass(CurriculumComponentsController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var yearId = parseInt(this.appContext.yearId);
      var componentsReady = this.curriculumRepository.getComponents(false, ["usedYears"]).then(function (components) {
        _this2.data.components = components.filter(function (x) {
          return !x.isDeleted || x.usedYears.findIndex(function (y) {
            return y.id == yearId;
          }) > -1;
        });
      });
      var iupComponentsReady = this.curriculumRepository.getComponents(true).then(function (iupComponents) {
        _this2.data.iupComponents = iupComponents;
      });
      var queries = this.$q.all([componentsReady, iupComponentsReady]);
      queries.then(function () {
        _this2.state.dataReady = true;
        _this2.changeTracker.clearDataChanges();
        _this2.$appLoader.hide();
      });
    }
    // создает компонент
  }, {
    key: "create",
    value: function create() {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/calendar/curriculum/components/add/template.html",
        controller: "AddComponentCtrl"
      });
      modalInstance.result.then(function () {
        return _this3.load();
      });
    }
    // замена компонента
  }, {
    key: "replace",
    value: function replace() {
      var _this4 = this;
      var _component = this.selection.selected;
      if (!_component) {
        return;
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: _replaceComp.ReplaceCurriculumComponentComponent.templateUrl,
        controller: _replaceComp.ReplaceCurriculumComponentComponent.controller,
        controllerAs: _replaceComp.ReplaceCurriculumComponentComponent.controllerAs,
        resolve: {
          component: function component() {
            return angular.copy(_component);
          },
          components: function components() {
            return _this4.data.components;
          }
        }
      });
      modalInstance.result.then(function () {
        return _this4.load();
      });
    }
    // удаляет выбраннуй компоненту
  }, {
    key: "remove",
    value: function remove() {
      var _this5 = this;
      var component = this.selection.selected;
      if (!component) {
        this.$dialogs.message(this.language.Generic.SetupSchoolCalendar.kChooseComponentsForDeleting);
        return;
      }
      // if (component.used) {
      // 	this.$dialogs.message("Нельзя удалить используемую компоненту")
      // 	return;
      // }
      this.$dialogs.confirm(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        return _this5.$longWork.execute(_this5.curriculumRepository.deleteComponents([component.id]));
      }).then(function () {
        _this5.$alerts.success(_this5.language.Generic.SetupSchoolCalendar.kComponentsDeleted);
        _this5.selection.dropSelect();
        _this5.load();
      });
      ;
    }
  }, {
    key: "toggleSortMode",
    value: function toggleSortMode() {
      this.state.sortMode = !this.state.sortMode;
    }
  }, {
    key: "initSorting",
    value: function initSorting() {
      var _this6 = this;
      var fixHelperModified = function fixHelperModified(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function (index) {
          $(this).width($originals.eq(index).width());
        });
        return $helper;
      };
      this.sortableOptions = {
        placeholder: "highlight",
        helper: fixHelperModified,
        stop: function stop(event, element) {
          $(element.item).parent().parent().parent().parent().prevAll().removeClass("not-active");
          $(element.item).parent().parent().parent().parent().nextAll().removeClass("not-active");
          var orderedIds = [];
          for (var ind in _this6.data.components) {
            var subject = _this6.data.components[ind];
            subject.order = parseInt(ind) + 1;
            orderedIds[ind] = subject.id;
          }
          _this6.curriculumRepository.orderComponents(orderedIds).then(function () {
            _this6.$alerts.success("Порядок компонент изменен");
          });
        },
        start: function start(event, ui) {
          $(ui.helper).parent().parent().parent().parent().prevAll().addClass("not-active"); //tr
          $(ui.helper).parent().parent().parent().parent().nextAll().addClass("not-active"); //tr
          $(ui.helper).addClass("move");
          $(ui.helper).children().css("border-top", 0);
        }
      };
    }
  }]);
  return CurriculumComponentsController;
}();
var CurriculumComponentsComponent = {
  controller: CurriculumComponentsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/components/curriculum.components.component.html"
};
exports.CurriculumComponentsComponent = CurriculumComponentsComponent;

/***/ }),
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaceCurriculumComponentComponent = void 0;
var _netcityModalCtrl = __webpack_require__(14);
var _multiSelectable = _interopRequireDefault(__webpack_require__(19));
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
var ReplaceCurriculumComponentController = /*#__PURE__*/function (_NetCityModalControll) {
  ReplaceCurriculumComponentController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "$longWork", "$alerts", "component", "components", "curriculumRepository"];
  _inherits(ReplaceCurriculumComponentController, _NetCityModalControll);
  var _super = _createSuper(ReplaceCurriculumComponentController);
  /*@ngInject*/
  function ReplaceCurriculumComponentController($scope, $uibModalInstance, changeTracker, $dialogs, language, $longWork, $alerts, component, components, curriculumRepository) {
    var _this;
    _classCallCheck(this, ReplaceCurriculumComponentController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.component = component;
    _this.components = components;
    _this.curriculumRepository = curriculumRepository;
    _this.selection = new _multiSelectable["default"]();
    _this.header = "Заменить компонент";
    _this.initButtons();
    if (components && components.length > 1) {
      _this.componentTo = components[0];
    }
    return _this;
  }
  _createClass(ReplaceCurriculumComponentController, [{
    key: "initButtons",
    value: function initButtons() {
      var _this2 = this;
      this.buttons = [];
      this.buttons.push({
        action: function action() {
          return _this2.replace();
        },
        icon: "glyphicon glyphicon-plus-sign",
        isEnabled: function isEnabled() {
          return _this2.component.used;
        },
        title: this.language.Generic.SetupSchool.kReplace
      });
      this.buttons.push({
        action: function action() {
          return _this2.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle",
        title: this.language.Generic.Buttons.kCancel
      });
    }
  }, {
    key: "replace",
    value: function replace() {
      var _this3 = this;
      if (this.form.$invalid || this.selection.items.length == 0) {
        return;
      }
      var work = this.curriculumRepository.replaceComponent(this.component.id, this.componentTo.id, this.selection.items);
      this.$longWork.execute(work).then(function () {
        _this3.$alerts.success("Компонент успешно заменен");
        _this3.changeTracker.clearDataChanges();
        _this3.$uibModalInstance.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return ReplaceCurriculumComponentController;
}(_netcityModalCtrl.NetCityModalController);
var ReplaceCurriculumComponentComponent = {
  controller: ReplaceCurriculumComponentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/components/replace/replace.comp.component.html"
};
exports.ReplaceCurriculumComponentComponent = ReplaceCurriculumComponentComponent;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LimitsComponent = void 0;
var _addLimits = __webpack_require__(81);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var epsilon = 0.005;
var LimitsController = /*#__PURE__*/function () {
  LimitsController.$inject = ["$alerts", "$dialogs", "pageContext", "appContext", "$appLoader", "$q", "$uibModal", "$longWork", "curriculumRepository", "changeTracker", "curriculumConstants", "language", "greenTextService", "$sce"];
  /*@ngInject*/
  function LimitsController($alerts, $dialogs, pageContext, appContext, $appLoader, $q, $uibModal, $longWork, curriculumRepository, changeTracker, curriculumConstants, language, greenTextService, $sce) {
    var _this = this;
    _classCallCheck(this, LimitsController);
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.curriculumRepository = curriculumRepository;
    this.changeTracker = changeTracker;
    this.curriculumConstants = curriculumConstants;
    this.language = language;
    this.greenTextService = greenTextService;
    this.$sce = $sce;
    this.isSchool = this.appContext.funcType === 2;
    this.isAddSchool = this.appContext.funcType === 3;
    this.state = {
      readOnly: this.appContext.readOnly,
      dataReady: false,
      emptyData: true,
      overflow: false,
      overflowLimitTotal: false
    };
    this.addLimits = function (iup) {
      var _addedComponents = _this.getAddedComponents(iup);
      var canAdd = _addedComponents && _addedComponents.length > 0;
      if (canAdd) {
        var modalInstance = _this.$uibModal.open({
          templateUrl: _addLimits.AddLimitsComponent.templateUrl,
          controller: _addLimits.AddLimitsComponent.controller,
          controllerAs: _addLimits.AddLimitsComponent.controllerAs,
          size: "lg",
          resolve: {
            addedComponents: function addedComponents() {
              return _addedComponents;
            }
          }
        });
        modalInstance.result.then(function (addedComponent) {
          _this.setViewed(iup, addedComponent);
        });
      } else {
        alert(_this.language.Generic.SetupSchoolCalendar.kAllCurriculumLimitsDefined);
      }
    };
    this.load();
  }
  _createClass(LimitsController, [{
    key: "initPageContext",
    value: function initPageContext() {
      var wizardStep = this.isAddSchool ? " 4. " : " 5. ";
      this.pageContext.title = this.wizard ? this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + wizardStep + this.language.Generic.SetupSchoolCalendar.kTitleLimits))) : this.language.Generic.SetupSchoolCalendar.kTitleLimits;
      this.pageContext.parent = null;
    }
  }, {
    key: "getLimitsMatrix",
    value: function getLimitsMatrix(iup) {
      var _this2 = this;
      var limitsMatrix = [];
      var components, limits;
      if (iup) {
        components = this.data.iupComponents;
        limits = this.data.iupLimits;
      } else {
        // нужна копия, так как нулевой компонент не должен использоваться на экране добавления
        components = this.data.components;
        var component0 = {
          id: 0,
          name: this.language.Generic.SetupSchoolCalendar.kLimit
        };
        components.unshift(component0);
        limits = this.data.limits;
      }
      // Limits.Hours 0 -> null
      limits.forEach(function (value) {
        if (value.hours === 0) value.hours = null;
      });
      var _loop = function _loop() {
        var component = components[i];
        limitsMatrix[component.id] = [];
        var _loop2 = function _loop2() {
          var grade = _this2.data.grades[k];
          var findedLimit = limits.find(function (limit) {
            return limit.grade === grade.id && limit.componentId === component.id;
          });
          if (findedLimit) {
            limitsMatrix[component.id][grade.id] = findedLimit;
          } else {
            limitsMatrix[component.id][grade.id] = {
              grade: grade.id,
              hours: null,
              componentId: component.id
            };
          }
        };
        for (var k = 0; k < _this2.data.grades.length; k++) {
          _loop2();
        }
      };
      for (var i = 0; i < components.length; i++) {
        _loop();
      }
      return limitsMatrix;
    }
  }, {
    key: "getTotalGradeHours",
    value: function getTotalGradeHours(iup) {
      var _this3 = this;
      var totalGradeHours = [];
      var components, limits;
      if (iup) {
        components = this.data.iupComponents;
        limits = this.data.iupLimits;
      } else {
        components = this.data.components;
        limits = this.data.limits;
      }
      var componentIds = components.map(function (component) {
        return component.id;
      });
      var grades = this.data.grades;
      var _loop3 = function _loop3() {
        var grade = grades[i];
        var totalLimit = _.findWhere(_this3.prepared.limits[0], {
          grade: grade.id
        }) || {
          hours: 0
        };
        var gradeLimits = limits.filter(function (limit) {
          return limit.grade === grade.id && _.contains(componentIds, limit.componentId) && limit.componentId > 0;
        });
        var sumHours = _.reduce(gradeLimits, function (result, limit) {
          if (limit.hours) {
            result += limit.hours;
          }
          return Math.round(result * 100) / 100;
        }, 0);
        var totals = {
          hours: sumHours,
          overflow: sumHours - totalLimit.hours > epsilon
        };
        totalGradeHours.push(totals);
      };
      for (var i = 0; i < grades.length; i++) {
        _loop3();
      }
      return totalGradeHours;
    }
  }, {
    key: "limitsMatrixToArray",
    value: function limitsMatrixToArray(limitsMatrix) {
      var components = Object.keys(limitsMatrix);
      var grades = this.data.grades;
      var limits = [];
      for (var i = 0; i < components.length; i++) {
        var component = components[i];
        for (var k = 0; k < grades.length; k++) {
          var grade = grades[k].id;
          var limit = limitsMatrix[component][grade];
          if (limit.hours) {
            limits.push(limitsMatrix[component][grade]);
          }
        }
      }
      return limits;
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      this.data = {
        components: null,
        iupComponents: null,
        limits: null,
        iupLimits: null,
        grades: this.curriculumConstants.getAllPossibleGrades(this.appContext.funcType, true)
      };
      var componentsReady = this.curriculumRepository.getComponents(false).then(function (components) {
        _this4.data.components = components;
      });
      var iupComponentsReady = this.curriculumRepository.getComponents(true).then(function (iupComponents) {
        _this4.data.iupComponents = iupComponents;
      });
      var limitsReady = this.curriculumRepository.getLimits(false).then(function (limits) {
        _this4.data.limits = limits;
      });
      var iupLimitsReady = this.curriculumRepository.getLimits(true).then(function (iupLimits) {
        _this4.data.iupLimits = iupLimits;
      });
      var queries = this.$q.all([componentsReady, iupComponentsReady, limitsReady, iupLimitsReady]);
      queries.then(function () {
        _this4.initPageContext();
        _this4.prepared = {
          limits: _this4.getLimitsMatrix(false),
          iupLimits: _this4.getLimitsMatrix(true),
          totalGradeHours: null,
          totalIupGradeHours: null,
          viewComponents: [],
          viewIupComponents: []
        };
        _this4.prepared.totalGradeHours = _this4.getTotalGradeHours(false);
        _this4.prepared.totalIupGradeHours = _this4.getTotalGradeHours(true);
        var hasErrorFlag;
        var overflowFlag = false;
        for (var j = 0; j < _this4.prepared.limits[0].length; j++) {
          hasErrorFlag = false;
          if (!_this4.prepared.limits[0][j].hours) {
            for (var i in _this4.prepared.limits) {
              if (_this4.prepared.limits[i][j].hours) {
                hasErrorFlag = true;
                if (!overflowFlag) overflowFlag = !overflowFlag;
                break;
              }
            }
            _this4.prepared.limits[0][j].hasErrorFlag = hasErrorFlag;
          }
          _this4.prepared.limits[0][j].hasErrorFlag = hasErrorFlag;
        }
        _this4.state.overflow = overflowFlag;
        _this4.prepared.viewComponents = _this4.data.components.filter(function (component) {
          return _.some(_this4.data.limits, function (limit) {
            return limit.componentId === component.id;
          });
        });
        _this4.prepared.viewIupComponents = _this4.data.iupComponents.filter(function (component) {
          return _.some(_this4.data.iupLimits, function (limit) {
            return limit.componentId === component.id;
          });
        });
        _this4.state.dataReady = true;
        _this4.changeTracker.clearDataChanges();
        _this4.$appLoader.hide();
      });
    }
  }, {
    key: "digitsOnly",
    value: function digitsOnly(limit) {
      if (limit.hours && typeof limit.hours.replace === "function") {
        limit.hours = limit.hours.replace(/\D/, "");
      }
    }
  }, {
    key: "parseHours",
    value: function parseHours(limit) {
      if (limit.hours && typeof limit.hours.replace === "function") {
        var hours = limit.hours.trim().replace(",", ".");
        var fVal = parseFloat(hours);
        if (isNaN(fVal)) {
          fVal = 0;
        }
        limit.hours = fVal.toString();
      }
    }
  }, {
    key: "changeLimit",
    value: function changeLimit(limit, iup) {
      var limitsMatrix = iup ? this.prepared.iupLimits : this.prepared.limits;
      var grade = limit.grade;
      var totalLimit = _.findWhere(this.prepared.limits[0], {
        grade: grade
      }) || {
        hours: 0
      };
      var components = Object.keys(limitsMatrix).filter(function (comp) {
        return comp > 0;
      });
      var hasErrorFlag;
      var overflowFlag = false;
      for (var j = 0; j < this.prepared.limits[0].length; j++) {
        hasErrorFlag = false;
        if (!this.prepared.limits[0][j].hours) {
          for (var i in this.prepared.limits) {
            if (this.prepared.limits[i][j].hours) {
              hasErrorFlag = true;
              if (!overflowFlag) overflowFlag = !overflowFlag;
              break;
            }
          }
          this.prepared.limits[0][j].hasErrorFlag = hasErrorFlag;
        }
        this.prepared.limits[0][j].hasErrorFlag = hasErrorFlag;
      }
      this.state.overflow = overflowFlag;
      // перед суммированием парсит часы
      this.parseHours(limit);
      var sumHours = components.reduce(function (result, component) {
        var hours = parseFloat(limitsMatrix[component][grade].hours);
        if (isNaN(hours)) {
          return result;
        }
        return result + hours;
      }, 0);
      var totals = {
        hours: Math.round(sumHours * 100) / 100,
        overflow: sumHours - totalLimit.hours > epsilon
      };
      if (iup) {
        this.prepared.totalIupGradeHours[grade] = totals;
      } else {
        this.prepared.totalGradeHours[grade] = totals;
      }
      this.state.overflowLimitTotal = this.prepared.totalGradeHours.some(function (tgh) {
        return tgh.overflow == true;
      }) ? true : false;
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "checkEmptyComp",
    value: function checkEmptyComp(iup, limits) {
      var saved = iup ? this.prepared.viewIupComponents : this.prepared.viewComponents;
      return !saved.every(function (x) {
        return limits.some(function (l) {
          return l.componentId === x.id;
        });
      });
    }
  }, {
    key: "save",
    value: function save(iup) {
      var _this5 = this;
      var limitsMatrix = iup ? this.prepared.iupLimits : this.prepared.limits;
      var limits = this.limitsMatrixToArray(limitsMatrix);
      var saveWithReload = function saveWithReload() {
        var heavyPromise = _this5.curriculumRepository.saveLimits(limits, iup).then(function () {
          _this5.$alerts.success(_this5.language.Generic.Common.kDataSaved);
          _this5.load();
        });
        return _this5.$longWork.execute(heavyPromise);
      };
      if (this.checkEmptyComp(iup, limits)) {
        this.$dialogs.confirm("Внимание! Компонента с пустыми часами будет удалена. Вы уверены?").then(saveWithReload);
      } else {
        saveWithReload();
      }
    }
  }, {
    key: "validateLimits",
    value: function validateLimits(iup) {
      var componentId0 = 0;
      var totalGradeHours = this.prepared.totalGradeHours;
      var grades = this.data.grades;
      var components = iup ? this.prepared.viewIupComponents : this.prepared.viewComponents;
      var limitsMatrix = iup ? this.prepared.iupLimits : this.prepared.limits;
      for (var i = 0; i < grades.length; i++) {
        var grade = grades[i].id;
        for (var k = 0; k < components.length; k++) {
          var component = components[k].id;
          var hours = parseFloat(limitsMatrix[component][grade].hours);
          if (hours < 0) {
            return false;
          }
        }
      }
      if (iup) {
        return true;
      }
      for (var _i = 0; _i < grades.length; _i++) {
        var _grade = grades[_i].id;
        var maxHours = limitsMatrix[componentId0][_grade].hours;
        for (var _k = 1; _k < components.length; _k++) {
          var _component = components[_k].id;
          var _hours = limitsMatrix[_component][_grade].hours;
          if (maxHours && _hours > maxHours) {
            return false;
          }
        }
      }
      for (var _i2 = 0; _i2 < grades.length; _i2++) {
        var _grade2 = grades[_i2].id;
        var total = totalGradeHours[_grade2];
        var _maxHours = limitsMatrix[componentId0][_grade2].hours;
        if (total && total.hours && !_maxHours) {
          return false;
        }
        if (total.hours > _maxHours) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "lazySave",
    value: function lazySave(valid, iup) {
      var _this6 = this;
      if (valid) {
        if (this.changeTracker.isDataChanged()) {
          if (this.validateLimits(iup)) {
            var save = function save() {
              _this6.save(iup);
            };
            var debounceFunc = _.debounce(save, 1500, true);
            debounceFunc();
          }
        } else this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "getAddedComponents",
    value: function getAddedComponents(iup) {
      var filtered = iup ? this.data.iupComponents : this.data.components;
      var excluded = iup ? this.prepared.viewIupComponents : this.prepared.viewComponents;
      return angular.copy(filtered.filter(function (x) {
        return !x.isDeleted;
      }).filter(function (x) {
        return !excluded.some(function (y) {
          return y.id === x.id;
        });
      }));
    }
  }, {
    key: "findComp",
    value: function findComp(iup, component) {
      var findFunc = function findFunc(x) {
        return x.id === component.id;
      };
      if (iup) {
        return this.data.iupComponents.find(findFunc);
      }
      return this.data.components.find(findFunc);
    }
  }, {
    key: "setViewed",
    value: function setViewed(iup, addedComponent) {
      var found = this.findComp(iup, addedComponent);
      if (iup) {
        this.prepared.viewIupComponents.push(found);
      } else {
        this.prepared.viewComponents.push(found);
      }
    }
  }, {
    key: "lazyAddLimits",
    value: function lazyAddLimits(iup) {
      var _this7 = this;
      var add = function add() {
        _this7.addLimits(iup);
      };
      this.changeTracker.dataWasChanged();
      var debounceFunc = _.debounce(add, 1500, true);
      debounceFunc();
    }
  }, {
    key: "reset",
    value: function reset(iup) {
      var _this8 = this;
      if (iup) {
        var iupLimitsReady = this.curriculumRepository.getLimits(true).then(function (iupLimits) {
          _this8.data.iupLimits = iupLimits;
        });
        this.$q.when(iupLimitsReady).then(function () {
          _this8.prepared.iupLimits = _this8.getLimitsMatrix(true);
          _this8.prepared.totalIupGradeHours = _this8.getTotalGradeHours(true);
          _this8.changeTracker.clearDataChanges();
        });
      } else {
        var limitsReady = this.curriculumRepository.getLimits(iup).then(function (limits) {
          _this8.data.limits = limits;
        });
        this.$q.when(limitsReady).then(function () {
          _this8.prepared.limits = _this8.getLimitsMatrix(iup);
          _this8.prepared.totalGradeHours = _this8.getTotalGradeHours(iup);
          _this8.state.overflow = false;
          _this8.state.overflowLimitTotal = false;
          _this8.changeTracker.clearDataChanges();
        });
      }
    }
  }, {
    key: "lazyReset",
    value: function lazyReset(iup) {
      var _this9 = this;
      if (this.changeTracker.isDataChanged()) {
        var reset = function reset() {
          _this9.reset(iup);
        };
        var debounceFunc = _.debounce(reset, 1500, true);
        debounceFunc();
      } else this.$alerts.info(this.language.Generic.Common.kNoChanges);
    }
  }]);
  return LimitsController;
}();
var LimitsComponent = {
  controller: LimitsController,
  selector: "limits",
  controllerAs: "$ctrl",
  bindings: {
    wizard: "<?"
  },
  templateUrl: "/static/dist/app/school/calendar/curriculum/limits/limits.component.html"
};
exports.LimitsComponent = LimitsComponent;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddLimitsComponent = void 0;
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
var AddLimitsController = /*#__PURE__*/function (_NetCityModalControll) {
  AddLimitsController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "addedComponents"];
  _inherits(AddLimitsController, _NetCityModalControll);
  var _super = _createSuper(AddLimitsController);
  /*@ngInject*/
  function AddLimitsController($scope, $uibModalInstance, changeTracker, $dialogs, language, addedComponents) {
    var _this;
    _classCallCheck(this, AddLimitsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.addedComponents = addedComponents;
    _this.buttons = [];
    _this.addedComponent = addedComponents[0];
    _this.header = language.Generic.SetupSchoolCalendar.kAddComponentLimit;
    var saveButton = {
      title: language.Generic.Buttons.kAdd,
      "class": [_nsModal.ButtonClass.primary],
      action: function action() {
        return _this.create();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(saveButton);
    _this.buttons.push(cancelButton);
    return _this;
  }
  _createClass(AddLimitsController, [{
    key: "create",
    value: function create() {
      this.$uibModalInstance.close(this.addedComponent);
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return AddLimitsController;
}(_netcityModalCtrl.NetCityModalController);
var AddLimitsComponent = {
  controller: AddLimitsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/curriculum/limits/add/addLimits.component.html"
};
exports.AddLimitsComponent = AddLimitsComponent;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumConstants = void 0;
var _common = __webpack_require__(57);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CurriculumConstants = /*#__PURE__*/function () {
  CurriculumConstants.$inject = ["language"];
  /*@ngInject*/
  function CurriculumConstants(language) {
    _classCallCheck(this, CurriculumConstants);
    this.language = language;
  }
  _createClass(CurriculumConstants, [{
    key: "getAllPossibleGrades",
    value: function getAllPossibleGrades(funcType, inSingular) {
      if (funcType === _common.FuncType.preSchool) {
        if (inSingular) {
          return [{
            id: 0,
            name: this.language.Generic.Common.kGr0
          }, {
            id: 1,
            name: this.language.Generic.Common.kGr1
          }, {
            id: 2,
            name: this.language.Generic.Common.kGr2
          }, {
            id: 3,
            name: this.language.Generic.Common.kGr3
          }, {
            id: 4,
            name: this.language.Generic.Common.kGr4
          }, {
            id: 5,
            name: this.language.Generic.Common.kGr5
          }, {
            id: 6,
            name: this.language.Generic.Common.kGr6
          }, {
            id: 7,
            name: this.language.Generic.Common.kGr7
          }, {
            id: 8,
            name: this.language.Generic.Common.kGr8
          }];
        }
        return [{
          id: 0,
          name: this.language.Generic.Common.kGr0_s
        }, {
          id: 1,
          name: this.language.Generic.Common.kGr1_s
        }, {
          id: 2,
          name: this.language.Generic.Common.kGr2_s
        }, {
          id: 3,
          name: this.language.Generic.Common.kGr3_s
        }, {
          id: 4,
          name: this.language.Generic.Common.kGr4_s
        }, {
          id: 5,
          name: this.language.Generic.Common.kGr5_s
        }, {
          id: 6,
          name: this.language.Generic.Common.kGr6_s
        }, {
          id: 7,
          name: this.language.Generic.Common.kGr7_s
        }, {
          id: 8,
          name: this.language.Generic.Common.kGr8_s
        }];
      }
      return [{
        id: 0,
        name: "0"
      }, {
        id: 1,
        name: "1"
      }, {
        id: 2,
        name: "2"
      }, {
        id: 3,
        name: "3"
      }, {
        id: 4,
        name: "4"
      }, {
        id: 5,
        name: "5"
      }, {
        id: 6,
        name: "6"
      }, {
        id: 7,
        name: "7"
      }, {
        id: 8,
        name: "8"
      }, {
        id: 9,
        name: "9"
      }, {
        id: 10,
        name: "10"
      }, {
        id: 11,
        name: "11"
      }, {
        id: 12,
        name: "12"
      }];
    }
  }]);
  return CurriculumConstants;
}();
exports.CurriculumConstants = CurriculumConstants;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveDaysRegistryComponent = void 0;
var _filterpanel = __webpack_require__(67);
var _registry = __webpack_require__(70);
var _addMoveDay = __webpack_require__(84);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MoveDaysRegistryController = /*#__PURE__*/function () {
  MoveDaysRegistryController.$inject = ["pageContext", "language", "appContext", "$uibModal", "yearsRepository", "dateUtils", "$q", "$alerts"];
  /*@ngInject*/
  function MoveDaysRegistryController(pageContext, language, appContext, $uibModal, yearsRepository, dateUtils, $q, $alerts) {
    var _this = this;
    _classCallCheck(this, MoveDaysRegistryController);
    this.pageContext = pageContext;
    this.language = language;
    this.appContext = appContext;
    this.$uibModal = $uibModal;
    this.yearsRepository = yearsRepository;
    this.dateUtils = dateUtils;
    this.$q = $q;
    this.$alerts = $alerts;
    this.addMoveDay = function () {
      if (_this.ready) {
        var modalInstance = _this.$uibModal.open({
          templateUrl: _addMoveDay.AddMoveDayComponent.templateUrl,
          controller: _addMoveDay.AddMoveDayComponent.controller,
          controllerAs: _addMoveDay.AddMoveDayComponent.controllerAs,
          resolve: {
            yearLimits: function yearLimits() {
              return _this.yearLimits;
            }
          }
        });
        modalInstance.result.then(function () {
          _this.controller.load();
          _this.$alerts.success("Перенос учебного дня успешно совершён");
        });
      }
    };
    this.initPage();
    var addBtn = {
      id: "addBtn",
      title: language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        return _this.addMoveDay();
      }
    };
    var defaultFilterValues = {};
    this.registryInfo = {
      url: "/webapi/calendar/movedays/registry",
      filtersUrl: "/webapi/calendar/movedays/registry/filter",
      fieldDecorators: {
        "dateFrom": new _registry.DateDecorator(),
        "dateTo": new _registry.DateDecorator()
      },
      emptyDataMessage: this.language.Generic.SetupSchoolCalendar.kNoMovedDaysInYear,
      filtersValues: defaultFilterValues,
      buttons: [addBtn]
    };
    this.loadAny();
  }
  _createClass(MoveDaysRegistryController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.SetupSchoolCalendar.kTitleMoveDays;
      this.pageContext.parent = {
        title: this.language.Generic.MenuFolders.kFNYear,
        href: "/angular/school/schedule/year/",
        postTo: true
      };
      this.pageContext.back = {
        history: true
      };
    }
  }, {
    key: "loadAny",
    value: function loadAny() {
      var _this2 = this;
      var getYearInfo = this.yearsRepository.getYearInfo().then(function (yearInfo) {
        _this2.yearLimits = new _filterpanel.DateRange(null, null);
        _this2.yearLimits.startDate = _this2.dateUtils.asUTCDate(yearInfo.startDate);
        _this2.yearLimits.endDate = _this2.dateUtils.asUTCDate(yearInfo.endDate);
      });
      this.$q.all([getYearInfo]).then(function () {
        _this2.ready = true;
      });
    }
  }]);
  return MoveDaysRegistryController;
}();
var MoveDaysRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: MoveDaysRegistryController,
  controllerAs: "$ctrl"
};
exports.MoveDaysRegistryComponent = MoveDaysRegistryComponent;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddMoveDayComponent = void 0;
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
var AddMoveDayController = /*#__PURE__*/function (_NetCityModalControll) {
  AddMoveDayController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "yearLimits", "dateUtils", "calendarRepository", "classmeetingsRepository", "$longWork"];
  _inherits(AddMoveDayController, _NetCityModalControll);
  var _super = _createSuper(AddMoveDayController);
  /*@ngInject*/
  function AddMoveDayController($scope, $uibModalInstance, changeTracker, $dialogs, language, yearLimits, dateUtils, calendarRepository, classmeetingsRepository, $longWork) {
    var _this;
    _classCallCheck(this, AddMoveDayController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.yearLimits = yearLimits;
    _this.dateUtils = dateUtils;
    _this.calendarRepository = calendarRepository;
    _this.classmeetingsRepository = classmeetingsRepository;
    _this.$longWork = $longWork;
    _this.buttons = [];
    _this.header = language.Generic.SetupSchoolCalendar.kTitleMoveDayEdit;
    var saveButton = {
      title: language.Generic.Common.kSave,
      "class": [_nsModal.ButtonClass.primary],
      action: function action() {
        return _this.create();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(saveButton);
    _this.buttons.push(cancelButton);
    _this.moveDay = {
      dateFrom: null,
      dateTo: null,
      description: ""
    };
    _this.ready = true;
    return _this;
  }
  _createClass(AddMoveDayController, [{
    key: "create",
    value: function create() {
      var _this2 = this;
      this.form.$displayErrors = true;
      if (this.form.$invalid) {
        return;
      }
      if (this.moveDay.dateFrom.getTime() == this.moveDay.dateTo.getTime()) {
        this.$dialogs.error(this.language.Generic.SetupSchoolCalendar.kErrMsgEqual);
        return;
      }
      this.$dialogs.confirm(this.language.Generic.SetupSchoolCalendar.kConfirmMoveDay).then(function () {
        _this2.$longWork.execute(_this2.calendarRepository.addMoveDay(_this2.moveDay)).then(function (result) {
          if (result.addResult < 0) {
            switch (result.addResult) {
              case -1:
                _this2.$dialogs.error(_this2.language.Generic.SetupSchoolCalendar.kNoDayLessons + " " + _this2.dateUtils.date2str(_this2.moveDay.dateFrom));
                break;
              case -2:
                _this2.$dialogs.error(_this2.language.Generic.SetupSchoolCalendar.kDayHaveLessons + " " + _this2.dateUtils.date2str(_this2.moveDay.dateTo));
                break;
              case -3:
                _this2.classmeetingsRepository.getScheduleTime(result.invalidStId).then(function (scheduleTime) {
                  if (!scheduleTime) {
                    _this2.$dialogs.error(_this2.language.Generic.SetupSchoolCalendar.kErrMoveDay);
                  } else {
                    var errorMessage = "".concat(_this2.language.Generic.SetupSchoolCalendar.kInDay, " ").concat(_this2.dateUtils.date2str(_this2.moveDay.dateTo), " ").concat(_this2.language.Generic.SetupSchoolCalendar.kScheduleTimeNotDefined, ": ").concat(_this2.language.Generic.SetupSchoolCalendar.kRelay, " ").concat(scheduleTime.relay, ", ").concat(_this2.language.Generic.SetupSchoolCalendar.kNLesson, " ").concat(scheduleTime.number, ".");
                    errorMessage = "".concat(errorMessage, "</br>").concat(_this2.language.Generic.ClassManagement.kSubjectGroupName, ": ").concat(result.invalidSgName);
                    _this2.$dialogs.error(errorMessage);
                  }
                });
                break;
              default:
                _this2.$dialogs.error(_this2.language.Generic.SetupSchoolCalendar.kErrMoveDay);
                break;
            }
            return;
          }
          _this2.$uibModalInstance.close();
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return AddMoveDayController;
}(_netcityModalCtrl.NetCityModalController);
var AddMoveDayComponent = {
  controller: AddMoveDayController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/calendar/movedays/add/addMoveDay.component.html"
};
exports.AddMoveDayComponent = AddMoveDayComponent;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarRepository = void 0;
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
var CalendarRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(CalendarRepository, _BaseRepository);
  var _super = _createSuper(CalendarRepository);
  function CalendarRepository() {
    _classCallCheck(this, CalendarRepository);
    return _super.apply(this, arguments);
  }
  _createClass(CalendarRepository, [{
    key: "getCalendar",
    value: function getCalendar(options) {
      return this.$http.get("/webapi/calendar", {
        params: options
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addMoveDay",
    value: function addMoveDay(moveDay) {
      return this.$http.post("/webapi/calendar/moveday", moveDay).then(this.handleResponse, this.handleError);
    }
  }]);
  return CalendarRepository;
}(_repository.BaseRepository);
exports.CalendarRepository = CalendarRepository;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeacherStatus = exports.GetClassmeetingExpand = exports.ClassmeetingsRepository = void 0;
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
var ClassmeetingsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ClassmeetingsRepository, _BaseRepository);
  var _super = _createSuper(ClassmeetingsRepository);
  function ClassmeetingsRepository() {
    _classCallCheck(this, ClassmeetingsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ClassmeetingsRepository, [{
    key: "saveTemplate",
    value: function saveTemplate(query, template) {
      return this.$http.post("/webapi/schedule/classmeetings/edit", template, {
        params: query
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteSchedule",
    value: function deleteSchedule(sgId, start, end) {
      var params = {
        sgId: sgId,
        start: start,
        end: end
      };
      return this.$http["delete"]("/webapi/schedule/classmeetings", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getWeekEditTemplate",
    value: function getWeekEditTemplate(sgId, termId, start, end) {
      return this.$http.get("/webapi/schedule/classmeetings/edit", {
        params: {
          sgId: sgId,
          termId: termId,
          start: start,
          end: end
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getClassmeetings",
    value: function getClassmeetings(filter) {
      return this.$http.get("/webapi/schedule/classmeetings", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getClassmeetingsDays",
    value: function getClassmeetingsDays(filter) {
      return this.$http.get("/webapi/schedule/classmeetings/days", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getClassmeetingsTeachers",
    value: function getClassmeetingsTeachers(filter) {
      return this.$http.get("/webapi/schedule/classmeetings/teachers", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getYearCmTeachersSubjects",
    value: function getYearCmTeachersSubjects(teacherId, subjectId, extraActivity) {
      return this.$http.get("/webapi/schedule/classmeetings/year-teachers", {
        params: {
          teacherId: teacherId,
          subjectId: subjectId,
          extraActivity: extraActivity
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getScheduleTimes",
    value: function getScheduleTimes(sgId, variantId, weekDay) {
      return this.$http.get("/webapi/schedule/times", {
        params: {
          sgId: sgId,
          variantId: variantId,
          weekDay: weekDay
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getScheduleTime",
    value: function getScheduleTime(stId) {
      return this.$http.get("/webapi/schedule/time", {
        params: {
          stId: stId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getWeekDays",
    value: function getWeekDays(lanugage, _short) {
      return this.$http.get("/webapi/language/weekdays", {
        params: {
          lng: lanugage,
          shortNames: _short
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
    // Получение информации об удаляемых данных
  }, {
    key: "checkDeleteDaySchedule",
    value: function checkDeleteDaySchedule(request) {
      return this.$http.post("/webapi/schedule/delete/day", request).then(this.handleResponse)["catch"](this.handleError);
    }
    // Удаление расписания на день для указанных классов и параллелей
  }, {
    key: "deleteDaySchedule",
    value: function deleteDaySchedule(request) {
      return this.$http["delete"]("/webapi/schedule/delete/day", {
        data: request,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveScheduleTimes",
    value: function saveScheduleTimes(variantId, weekDay, times) {
      return this.$http.put("/webapi/schedule/times", times, {
        params: {
          variantId: variantId,
          weekDay: weekDay
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteScheduleTimes",
    value: function deleteScheduleTimes(timeIds) {
      return this.$http["delete"]("/webapi/schedule/times", {
        params: {
          timeIds: timeIds
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "applyScheduleToWeek",
    value: function applyScheduleToWeek(variantId, weekDay) {
      return this.$http.post("/webapi/schedule/times/applytoweek", null, {
        params: {
          variantId: variantId,
          weekDay: weekDay
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return ClassmeetingsRepository;
}(_baseRepository.BaseRepository);
exports.ClassmeetingsRepository = ClassmeetingsRepository;
var GetClassmeetingExpand;
exports.GetClassmeetingExpand = GetClassmeetingExpand;
(function (GetClassmeetingExpand) {
  GetClassmeetingExpand["lesson"] = "lesson";
  GetClassmeetingExpand["subjectgroup"] = "subjectgroup";
  GetClassmeetingExpand["room"] = "room";
  GetClassmeetingExpand["time"] = "time";
  GetClassmeetingExpand["teacherId"] = "teacherId";
})(GetClassmeetingExpand || (exports.GetClassmeetingExpand = GetClassmeetingExpand = {}));
var TeacherStatus;
exports.TeacherStatus = TeacherStatus;
(function (TeacherStatus) {
  TeacherStatus[TeacherStatus["all"] = -1] = "all";
  TeacherStatus[TeacherStatus["subjectGroupTeacher"] = 1] = "subjectGroupTeacher";
  TeacherStatus[TeacherStatus["classmeetingTeacher"] = 2] = "classmeetingTeacher";
})(TeacherStatus || (exports.TeacherStatus = TeacherStatus = {}));

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecretAnswerComponent = exports.GreenTextService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Questions = /*#__PURE__*/function () {
  function Questions(language) {
    _classCallCheck(this, Questions);
    this.language = language;
    this.init();
  }
  _createClass(Questions, [{
    key: "init",
    value: function init() {
      this.defaultQuestionList = [{
        id: 0,
        name: this.language.Generic.Common.kUnselected
      }, {
        id: 1,
        name: this.language.Generic.Login.YourMotherMaidenName
      }, {
        id: 2,
        name: this.language.Generic.Login.PetName
      }, {
        id: 3,
        name: this.language.Generic.Login.FavoriteDish
      }, {
        id: 4,
        name: this.language.Generic.Login.ParentsZip
      }, {
        id: 5,
        name: this.language.Generic.Login.GrandmaBirtday
      }, {
        id: 6,
        name: this.language.Generic.Login.PassportNumber
      }, {
        id: 7,
        name: this.language.Generic.Login.FavoritePhoneNumber
      }, {
        id: 8,
        name: this.language.Generic.Login.AskYouOwnQuestion
      }];
    }
  }]);
  return Questions;
}();
var GreenTextService = /*#__PURE__*/function () {
  function GreenTextService() {
    _classCallCheck(this, GreenTextService);
  }
  _createClass(GreenTextService, [{
    key: "greenText",
    value: function greenText(text) {
      return "<span style='color:green'>".concat(text, "</span>");
    }
  }]);
  return GreenTextService;
}();
exports.GreenTextService = GreenTextService;
var SecretAnswerController = /*#__PURE__*/function () {
  SecretAnswerController.$inject = ["appContext", "pageContext", "$appLoader", "$alerts", "$longWork", "entryPageService", "recoveryInfoService", "userInfoRepository", "$sce", "language"];
  /*@ngInject*/
  function SecretAnswerController(appContext, pageContext, $appLoader, $alerts, $longWork, entryPageService, recoveryInfoService, userInfoRepository, $sce, language) {
    var _this = this;
    _classCallCheck(this, SecretAnswerController);
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.entryPageService = entryPageService;
    this.recoveryInfoService = recoveryInfoService;
    this.userInfoRepository = userInfoRepository;
    this.$sce = $sce;
    this.language = language;
    this.page = pageContext;
    this.page.clear();
    this.page.back = {
      href: "/webapi/auth/logout"
    };
    this.defaultQuestionList = new Questions(language).defaultQuestionList;
    this.question = this.defaultQuestionList[0];
    this.userId = appContext.userId;
    this.userInfoRepository.getUserNickname(this.userId).then(function (userDto) {
      _this.getPageTitle(userDto);
      _this.ready = true;
      $appLoader.hide();
    });
  }
  _createClass(SecretAnswerController, [{
    key: "getPageTitle",
    value: function getPageTitle(userDto) {
      this.page.title = this.$sce.trustAsHtml(this.language.Generic.SetupSchool.kSetSecretQuestionAndAnswer + new GreenTextService().greenText(userDto.name));
    }
  }, {
    key: "unSelected",
    value: function unSelected() {
      return this.question.id == 0;
    }
  }, {
    key: "ownQuestion",
    value: function ownQuestion() {
      return this.question.id == 8;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.unSelected()) {
        this.recoveryAnswer = null;
      }
    }
  }, {
    key: "prepareAnswer",
    value: function prepareAnswer() {
      var _a, _b;
      this.recoveryAnswer = (_b = (_a = this.recoveryAnswer) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.replace(/d41d8cd98f00b204e9800998ecf8427e/gi, '');
    }
  }, {
    key: "createRequest",
    value: function createRequest() {
      var request = {
        question: this.question.name,
        answer: this.recoveryAnswer
      };
      if (this.ownQuestion()) {
        request.question = this.recoveryQuestion;
      }
      return request;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      this.prepareAnswer();
      if (this.unSelected()) {
        return;
      }
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      var request = this.createRequest();
      this.$longWork.execute(this.recoveryInfoService.saveRecoveryInfo(request).then(function (response) {
        _this2.$alerts.success(response.message);
        _this2["continue"]();
      }));
    }
  }, {
    key: "continue",
    value: function _continue() {
      this.entryPageService.goToNextEntry();
    }
  }]);
  return SecretAnswerController;
}();
var SecretAnswerComponent = {
  controller: SecretAnswerController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/attention/secret-answer/secret-answer.component.html"
};
exports.SecretAnswerComponent = SecretAnswerComponent;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.calendar").controller("VacationsClassesCtrl", function ($scope, pageContext, $http, $document, $location, $appLoader, vacationsRepository, $q, $alerts, changeTracker) {
  pageContext.title = language.SetupSchoolCalendar.kVacationsClasses;
  pageContext.parent = {
    title: language.Generic.MenuFolders.kFNSchoolYearAndTerms,
    href: "/years/"
  };
  pageContext.back = {
    history: true
  };
  $scope.userId = appContext.userId;
  $.extend($scope, {
    language: language,
    funcType: appContext.funcType,
    data: {
      classes: [],
      classesIds: [],
      grades: [],
      vacations: [],
      vacationsIds: [],
      classesVacations: [],
      classVacationMatrix: [],
      classVacationEtalonMatrix: [],
      classVacationColorMatrix: [],
      classesIndexDictionary: null,
      vacationsIndexDictionary: null,
      gradesChecks: [],
      vacationsChecks: [],
      classesChecks: []
    },
    state: {
      dataReady: false,
      emptyData: true
    }
  });
  $scope.getGradeCheckCondition = function (grade) {
    var firstClassIdByGrade = _.find($scope.data.classes, function (cls) {
      return cls.grade.id === grade;
    }).id;
    var classesByGradeAmount = _.filter($scope.data.classes, function (cls) {
      return cls.grade.id === grade;
    }).length;
    var firstClassIndexByGrade = _.indexOf($scope.data.classesIds, firstClassIdByGrade);
    var trueFlag = true;
    var falseFlag = false;
    for (var i = firstClassIndexByGrade; i < firstClassIndexByGrade + classesByGradeAmount; i++) {
      for (var j = 0; j < $scope.data.vacations.length; j++) {
        trueFlag = trueFlag && $scope.data.classVacationMatrix[i][j];
        falseFlag = falseFlag || $scope.data.classVacationMatrix[i][j];
      }
    }
    return trueFlag ? true : falseFlag ? null : false;
  };
  $scope.changeMatrixColors = function () {
    for (var i = 0; i < $scope.classes.length; i++) {
      for (var j = 0; j < $scope.vacations.length; j++) {
        $scope.classVacationColorMatrix[i][j] = $scope.classVacationMatrix[i][j] !== $scope.classVacationEtalonMatrix[i][j];
      }
    }
  };
  $scope.getVacationCheckCondition = function (vacation) {
    var vacationIndex = _.indexOf($scope.data.vacationsIds, vacation);
    var trueFlag = true;
    var falseFlag = false;
    for (var i = 0; i < $scope.data.classes.length; i++) {
      trueFlag = trueFlag && $scope.data.classVacationMatrix[i][vacationIndex];
      falseFlag = falseFlag || $scope.data.classVacationMatrix[i][vacationIndex];
    }
    return trueFlag ? true : falseFlag ? null : false;
  };
  $scope.getClassCheckCondition = function (cls) {
    var classIndex = _.indexOf($scope.data.classesIds, cls);
    var trueFlag = true;
    var falseFlag = false;
    for (var i = 0; i < $scope.data.vacations.length; i++) {
      trueFlag = trueFlag && $scope.data.classVacationMatrix[classIndex][i];
      falseFlag = falseFlag || $scope.data.classVacationMatrix[classIndex][i];
    }
    return trueFlag ? true : falseFlag ? null : false;
  };
  $scope.setGradeCheckCondition = function (grade, condition) {
    var firstClassIdByGrade = _.find($scope.data.classes, function (cls) {
      return cls.grade.id === grade;
    }).id;
    var classesByGradeAmount = _.filter($scope.data.classes, function (cls) {
      return cls.grade.id === grade;
    }).length;
    var firstClassIndexByGrade = _.indexOf($scope.data.classesIds, firstClassIdByGrade);
    for (var i = firstClassIndexByGrade; i < firstClassIndexByGrade + classesByGradeAmount; i++) {
      for (var j = 0; j < $scope.data.vacations.length; j++) {
        $scope.data.classVacationMatrix[i][j] = condition;
      }
    }
    $scope.checkCell();
  };
  $scope.setClassCheckCondition = function (cls, condition) {
    var classIndex = _.indexOf($scope.data.classesIds, cls);
    for (var i = 0; i < $scope.data.vacations.length; i++) {
      $scope.data.classVacationMatrix[classIndex][i] = condition;
    }
    $scope.data.classesChecks[classIndex] = condition;
    $scope.checkCell();
  };
  $scope.setVacationCheckCondition = function (vacation, condition) {
    var vacationIndex = _.indexOf($scope.data.vacationsIds, vacation);
    for (var i = 0; i < $scope.data.classes.length; i++) {
      $scope.data.classVacationMatrix[i][vacationIndex] = condition;
    }
    $scope.checkCell();
  };
  $scope.checkCell = function () {
    $scope.checkGrades();
    $scope.checkVacations();
    $scope.checkClasses();
  };
  $scope.loadMatrix = function () {
    $scope.data.classVacationMatrix = _.toArray(_.map($scope.data.classes, function (cls) {
      return new Array($scope.data.vacations.length);
    }));
    _.each($scope.data.classesVacations, function (item) {
      return $scope.data.classVacationMatrix[_.indexOf($scope.data.classesIds, item.classId)][_.indexOf($scope.data.vacationsIds, item.vacationId)] = true;
    });
    $scope.data.classVacationEtalonMatrix = _.toArray(_.map($scope.data.classes, function (cls) {
      return new Array($scope.data.vacations.length);
    }));
    _.each($scope.data.classesVacations, function (item) {
      return $scope.data.classVacationEtalonMatrix[_.indexOf($scope.data.classesIds, item.classId)][_.indexOf($scope.data.vacationsIds, item.vacationId)] = true;
    });
    $scope.checkGrades();
    $scope.checkVacations();
    $scope.checkClasses();
  };
  $scope.checkGrades = function () {
    $scope.data.gradesChecks = _.map($scope.data.grades, function (item) {
      return $scope.getGradeCheckCondition(item[0].grade.id);
    });
  };
  $scope.checkVacations = function () {
    $scope.data.vacationsChecks = _.map($scope.data.vacations, function (item) {
      return $scope.getVacationCheckCondition(item.id);
    });
  };
  $scope.checkClasses = function () {
    $scope.data.classesChecks = _.map($scope.data.classes, function (item) {
      return $scope.getClassCheckCondition(item.id);
    });
  };
  $scope.getClassesByGrade = function (grade) {
    return _.toArray(_.filter($scope.data.classes, function (item) {
      return item.grade.id === grade;
    }));
  };
  $scope.getPrevClassGrade = function (classIndex) {
    if (classIndex === 0) {
      return -1;
    }
    return $scope.data.classes[classIndex - 1].grade.id;
  };
  $scope.matrixToClassesVacations = function () {
    var classesVacations = [];
    for (var i = 0; i < $scope.data.classVacationMatrix.length; i++) {
      for (var j = 0; j < $scope.data.classVacationMatrix[i].length; j++) {
        if ($scope.data.classVacationMatrix[i][j]) {
          classesVacations.push({
            vacationId: $scope.data.vacationsIds[j],
            classId: $scope.data.classesIds[i]
          });
        }
      }
    }
    return classesVacations;
  };
  $scope.getGradeIndexById = function (gradeId) {
    for (var i = 0; i < $scope.data.grades.length; i++) {
      if ($scope.data.grades[i][0].grade.id === gradeId) {
        return i;
      }
    }
    return -1;
  };
  $scope.save = function (enable) {
    if (enable) {
      _.debounce(vacationsRepository.saveClassesVacations($scope.matrixToClassesVacations(), $scope.reset), 500, true);
    }
  };
  $scope.checkCellChange = function (classIndex, vacationIndex) {
    if ($scope.data.classVacationMatrix && $scope.data.classVacationMatrix.length) {
      return $scope.data.classVacationMatrix[classIndex][vacationIndex] && !$scope.data.classVacationEtalonMatrix[classIndex][vacationIndex] || !$scope.data.classVacationMatrix[classIndex][vacationIndex] && $scope.data.classVacationEtalonMatrix[classIndex][vacationIndex];
    }
    return false;
  };
  $scope.reset = function (classesVacations) {
    if (classesVacations) {
      $scope.data.classesVacations = classesVacations;
    }
    $appLoader.show();
    $scope.state.dataReady = false;
    $scope.loadMatrix();
    $scope.$applyAsync(function () {
      $scope.state.dataReady = true;
      changeTracker.clearDataChanges();
      $scope.state.emptyData = !$scope.data.classes || !$scope.data.classes.length || !$scope.data.vacations || !$scope.data.vacations.length;
      $appLoader.hide();
    });
  };

  //загрузка данных
  $scope.load = function () {
    var loadClasses = vacationsRepository.getClasses().then(function (classes) {
      $scope.data.classes = classes;
      $scope.data.grades = _.toArray(_.groupBy(classes, function (cls) {
        return cls.grade.id;
      }));
      $scope.data.classesIds = _.pluck(classes, "id");
    });
    var loadVacations = vacationsRepository.getVacations().then(function (vacations) {
      $scope.data.vacations = vacations;
      $scope.data.vacationsIds = _.pluck(vacations, "id");
    });
    var loadClassesVacations = vacationsRepository.getClassesVacations().then(function (classesVacations) {
      $scope.data.classesVacations = classesVacations;
    });
    $q.all([loadClasses, loadVacations, loadClassesVacations]).then(function () {
      $scope.reset();
    });
  };
  $scope.load();
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.calendar").controller("AddComponentCtrl", function ($scope, curriculumRepository, $uibModalInstance, $controller, $dialogs, changeTracker, $alerts) {
  $scope.header = language.Generic.SetupSchoolCalendar.kCreateNewComponent;
  $.extend($scope, {
    language: language,
    data: {
      component: {}
    },
    state: {
      dataReady: true,
      viewReady: true
    }
  });
  $scope.create = function () {
    var component = $scope.data.component;
    if (component.name) {
      curriculumRepository.createComponent($scope.data.component).then(function () {
        $alerts.success(language.Generic.SetupSchoolCalendar.kComponentCreated);
        $uibModalInstance.close();
      });
    } else {
      alert(language.Generic.SetupSchoolCalendar.kEnterComponentName);
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $controller("NetCityModalController", {
    $scope: $scope,
    $dialogs: $dialogs,
    $uibModalInstance: $uibModalInstance,
    changeTracker: changeTracker
  });
});

/***/ })
/******/ ]);