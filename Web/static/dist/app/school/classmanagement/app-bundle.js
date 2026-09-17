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
/******/ 	return __webpack_require__(__webpack_require__.s = 305);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsRepository = void 0;
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VacationsRepository = exports.SubjectGroupsRepository = exports.ProfilesRepository = exports.CurriculumRepository = void 0;
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsRepository = void 0;
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRelaysRepository = void 0;
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
var ClassesRelaysRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ClassesRelaysRepository, _BaseRepository);
  var _super = _createSuper(ClassesRelaysRepository);
  function ClassesRelaysRepository() {
    _classCallCheck(this, ClassesRelaysRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ClassesRelaysRepository, [{
    key: "getClassesRelays",
    value: function getClassesRelays() {
      return this.$http.get("/webapi/classes-relays").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getScheduleRelays",
    value: function getScheduleRelays() {
      return this.$http.get("/webapi/schedule-relays").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveClassesRelays",
    value: function saveClassesRelays(relays) {
      return this.$http.post("/webapi/classes-relays", relays).then(this.handleResponse, this.handleError);
    }
  }]);
  return ClassesRelaysRepository;
}(_baseRepository.BaseRepository);
exports.ClassesRelaysRepository = ClassesRelaysRepository;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectsRepository = exports.SubjectExpand = void 0;
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

/***/ 227:
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupRepository = exports.SubjectGroupExpandData = void 0;
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
var SubjectGroupExpandData;
exports.SubjectGroupExpandData = SubjectGroupExpandData;
(function (SubjectGroupExpandData) {
  SubjectGroupExpandData["Terms"] = "terms";
  SubjectGroupExpandData["UseInfo"] = "useInfo";
  SubjectGroupExpandData["Modules"] = "modules";
  SubjectGroupExpandData["ShortName"] = "shortName";
})(SubjectGroupExpandData || (exports.SubjectGroupExpandData = SubjectGroupExpandData = {}));
var SubjectGroupRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SubjectGroupRepository, _BaseRepository);
  var _super = _createSuper(SubjectGroupRepository);
  function SubjectGroupRepository() {
    _classCallCheck(this, SubjectGroupRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SubjectGroupRepository, [{
    key: "getSg",
    value: function getSg(sgId, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/subjectgroups/".concat(sgId), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.$http.put("/webapi/subjectgroups/", data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(sgId, data) {
      return this.$http.post("/webapi/subjectgroups/".concat(sgId), data).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "check",
    value: function check(sgId, data) {
      return this.$http.post("/webapi/subjectgroups/check", data, {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "boundedWithAllClassStudents",
    value: function boundedWithAllClassStudents(sgId) {
      return this.$http.get("/webapi/subjectgroups/boundedWithAllClassStudents", {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSgGradingSystems",
    value: function getSgGradingSystems(sgIds) {
      return this.$http.post("/webapi/subjectgroups/gradingSystems", sgIds, {}).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGroups",
    value: function getGroups(subjectId) {
      var params = {};
      return this.$http.get("/webapi/subjects/".concat(subjectId, "/groups"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSubjectgroups",
    value: function getSubjectgroups(filter, comments, expand) {
      var params = {};
      if (!filter) {
        filter = {};
      }
      if (comments) {
        params.comments = comments;
      }
      if (expand) {
        params.expand = expand;
      }
      if (filter && filter.iupClassId && filter.iupClassId.length > 30) {
        return this.$http.post("/webapi/subjectgroups", filter, {
          params: params
        }).then(this.handleResponse, this.handleError);
      }
      params = angular.extend(filter, params);
      return this.$http.get("/webapi/subjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGradesForSg",
    value: function getGradesForSg(sgId, extraCurricular) {
      var params = {
        sgId: sgId,
        extraCurricular: extraCurricular
      };
      return this.$http.get("/webapi/subjectgroups/grades", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getClassSubjectgroups",
    value: function getClassSubjectgroups(classId, subjectId, selfCsgId) {
      var params = {
        classId: classId,
        subjectId: subjectId,
        selfCsgId: selfCsgId
      };
      return this.$http.get("/webapi/classsubjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getGradingSystems",
    value: function getGradingSystems() {
      return this.$http.get("/webapi/references/gradingSystems").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTerms",
    value: function getTerms(sgId, classId) {
      var isIup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var params = {
        classId: classId,
        sgId: sgId,
        isIup: isIup
      };
      return this.$http.get("/webapi/subjectgroups/terms", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeSubjectGroups",
    value: function removeSubjectGroups(sgId) {
      return this.$http["delete"]("/webapi/subjectgroups/remove", {
        params: {
          sgId: sgId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "updateSubjectGroups",
    value: function updateSubjectGroups(updateSgInfos) {
      return this.$http.post("/webapi/subjectgroups/update", updateSgInfos).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkAvailableName",
    value: function checkAvailableName(data, sgId) {
      var params = {};
      if (sgId && sgId.length) {
        params.sgId = sgId;
      }
      return this.$http.post("/webapi/subjectgroups/checkavailablename", data, {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "mergeSubjectGroups",
    value: function mergeSubjectGroups(sgId, sgName) {
      var params = {
        sgId: sgId,
        sgName: sgName
      };
      return this.$http.post("/webapi/subjectgroups/merge", null, {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getMergeSubjects",
    value: function getMergeSubjects(teacherId) {
      var params = {
        teacherId: teacherId
      };
      return this.$http.get("/webapi/subjectgroups/loadsubjects", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return SubjectGroupRepository;
}(_baseRepository.BaseRepository);
exports.SubjectGroupRepository = SubjectGroupRepository;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StayRegime = exports.IupClassId = exports.DouProgram = exports.DouGroupType = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var IupClassId = /*#__PURE__*/function () {
  function IupClassId(complexId) {
    _classCallCheck(this, IupClassId);
    this.complexId = complexId;
    var arr = complexId.split('_');
    var id = parseInt(arr[0]);
    var iupflag = arr[1] == "1";
    if (iupflag) {
      this.classId = null;
      this.grade = id;
      this.iup = true;
    } else {
      this.classId = id;
      this.grade = null;
      this.iup = false;
    }
  }
  _createClass(IupClassId, [{
    key: "ToComplexId",
    value: function ToComplexId() {
      return this.iup ? this.grade + "_1" : this.classId + "_0";
    }
  }], [{
    key: "FromClass",
    value: function FromClass(classId) {
      return new IupClassId(classId + "_0");
    }
  }, {
    key: "FromIupGrade",
    value: function FromIupGrade(grade) {
      return new IupClassId(grade + "_1");
    }
  }]);
  return IupClassId;
}();
exports.IupClassId = IupClassId;
var StayRegime;
exports.StayRegime = StayRegime;
(function (StayRegime) {
  //Полный день
  StayRegime[StayRegime["FullDay"] = 1] = "FullDay";
  /// Сокращенного дня
  StayRegime[StayRegime["Reduced"] = 2] = "Reduced";
  /// Продленного дня
  StayRegime[StayRegime["Extended"] = 3] = "Extended";
  /// Кратковременного пребывания
  StayRegime[StayRegime["Short"] = 4] = "Short";
  /// Круглосуточного пребывания
  StayRegime[StayRegime["Night"] = 5] = "Night";
})(StayRegime || (exports.StayRegime = StayRegime = {}));
var DouGroupType;
exports.DouGroupType = DouGroupType;
(function (DouGroupType) {
  // общеразвивающая
  DouGroupType[DouGroupType["General"] = 1] = "General";
  // оздоровительная
  DouGroupType[DouGroupType["Wellness"] = 2] = "Wellness";
  // комбинированная
  DouGroupType[DouGroupType["Combined"] = 3] = "Combined";
  // компенсирующая
  DouGroupType[DouGroupType["Compensating"] = 4] = "Compensating";
  // для детей раннего возраста
  DouGroupType[DouGroupType["ForYoungChildren"] = 5] = "ForYoungChildren";
  // по присмотру и уходу
  DouGroupType[DouGroupType["CareAndMaintenance"] = 6] = "CareAndMaintenance";
  // семейная дошкольная
  DouGroupType[DouGroupType["FamilyPreschool"] = 7] = "FamilyPreschool";
})(DouGroupType || (exports.DouGroupType = DouGroupType = {}));
var DouProgram;
exports.DouProgram = DouProgram;
(function (DouProgram) {
  // Общеразвивающая программа
  DouProgram[DouProgram["Common"] = 1] = "Common";
  // Адаптированная программа
  DouProgram[DouProgram["Adapted"] = 2] = "Adapted";
})(DouProgram || (exports.DouProgram = DouProgram = {}));

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(306);


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _users = __webpack_require__(18);
var _addPrograms = __webpack_require__(307);
var _addPrograms2 = __webpack_require__(310);
var _editAddProgram = __webpack_require__(311);
var _rooms = __webpack_require__(16);
var _classedit = __webpack_require__(316);
var _profiles = __webpack_require__(319);
var _repository = __webpack_require__(19);
var _classes = __webpack_require__(32);
var _classlist = __webpack_require__(320);
var _repositories = __webpack_require__(322);
var _schooladdress = __webpack_require__(323);
var _subjectGroupList = __webpack_require__(324);
var _subjectGroupEdit = __webpack_require__(326);
var _subjectGroups = __webpack_require__(28);
var _terms = __webpack_require__(20);
var _subjects = __webpack_require__(214);
var _curriculumplan = __webpack_require__(328);
var _rooms2 = __webpack_require__(329);
var _subjectGroupMerge = __webpack_require__(337);
var _enrollment = __webpack_require__(338);
var _eaEnrollment = __webpack_require__(339);
var _enrollment2 = __webpack_require__(341);
var _validation = __webpack_require__(342);
var _classesRelays = __webpack_require__(213);
var _classesRelays2 = __webpack_require__(344);
var _termtypes = __webpack_require__(345);
var _secretAnswer = __webpack_require__(227);
var _addressedit = __webpack_require__(346);
var _fiasclient = __webpack_require__(348);
var _module = angular.module("irtech.netcity.school.classmanagement", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/classes", _classlist.ClassListComponent).when("/classes/:classId", _classedit.ClassEditComponent).when("/subjectgroups", _subjectGroupList.SubjectGroupListComponent).when("/subjectgroups/:sgId", _subjectGroupEdit.SubjectGroupEditComponent).when("/rooms", _rooms2.RoomsComponent).when("/addprograms/", _addPrograms.AddProgramsComponent).when("/addprograms/:programId", _editAddProgram.EditAddProgramComponent).when("/ea-enrollment", _eaEnrollment.EaEnrollmentComponent).when("/sg-enrollment", _enrollment2.EnrollmentComponent).when("/classes-relays", _classesRelays2.ClassesRelaysComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
/*@ngInject*/
var YesEmptyFilter = function YesEmptyFilter(language) {
  return function (val) {
    return val ? language.Generic.Common.kYes : "";
  };
};
YesEmptyFilter.$inject = ["language"];
_module.filter('yesEmpty', YesEmptyFilter).service("roomsRepository", _rooms.RoomsRepository).service("addProgramsRepository", _addPrograms2.AddProgramsRepository).service("referencesRepository", _repositories.ReferencesRepository).service("schoolAddressRepository", _schooladdress.SchoolAddressRepository).service("curriculumRepository", _repository.CurriculumRepository).service("curriculumPlanRepository", _curriculumplan.CurriculumPlanRepository).service("profilesRepository", _profiles.ProfilesRepository).service("classesRepository", _classes.ClassesRepository).service("subjectGroupRepository", _subjectGroups.SubjectGroupRepository).service("termsRepository", _terms.TermsRepository).service("subjectsRepository", _subjects.SubjectsRepository).service("vacationsRepository", _repository.VacationsRepository).service("usersRepository", _users.UsersRepository).service("enrollmentRepository", _enrollment.EnrollmentRepository).service("classesRelaysRepository", _classesRelays.ClassesRelaysRepository).service("termsRepository", _terms.TermsRepository).service("termTypesRepository", _termtypes.TermTypesRepository).component(_addressedit.AddressEditComponent.selector, _addressedit.AddressEditComponent).component("addProgramsComponent", _addPrograms.AddProgramsComponent).component("editAddProgramComponent", _editAddProgram.EditAddProgramComponent).service("usersRepository", _users.UsersRepository).service("sgMergeService", _subjectGroupMerge.SubjectGroupsMergeService).service("greenTextService", _secretAnswer.GreenTextService).service("fiasClient", _fiasclient.FiasClient).directive(_validation.AddSpecializationDirective.selector, _validation.AddSpecializationDirective).directive(_validation.RoomForClassDirective.selector, _validation.RoomForClassDirective).directive(_validation.StayRegimeDirective.selector, _validation.StayRegimeDirective).directive(_validation.ClassTypeDirective.selector, _validation.ClassTypeDirective).directive("roomname", function () {
  return {
    restict: "A",
    require: "ngModel",
    scope: {
      rooms: "="
    },
    link: function link(scope, elm, attrs, ctrl) {
      ctrl.$validators.roomname = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        return !_.chain(scope.rooms).some(function (checkRoom) {
          return trimStr(checkRoom.roomname).toLowerCase() === trimStr(elm.val()).toLowerCase();
        }).value();
      };
    }
  };
}).config(config);

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddProgramsComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _settingsProvider = __webpack_require__(308);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AddProgramsControler = /*#__PURE__*/function () {
  AddProgramsControler.$inject = ["pageContext", "$q", "$appLoader", "$dialogs", "$alerts", "$longWork", "addProgramsRepository", "referencesRepository", "contextService", "appContext", "$location", "settingsProvider", "language", "taskQueueService", "$http"];
  /*@ngInject*/
  function AddProgramsControler(pageContext, $q, $appLoader, $dialogs, $alerts, $longWork, addProgramsRepository, referencesRepository, contextService, appContext, $location, settingsProvider, language, taskQueueService, $http) {
    _classCallCheck(this, AddProgramsControler);
    this.$q = $q;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.addProgramsRepository = addProgramsRepository;
    this.referencesRepository = referencesRepository;
    this.contextService = contextService;
    this.$location = $location;
    this.settingsProvider = settingsProvider;
    this.language = language;
    this.taskQueueService = taskQueueService;
    this.$http = $http;
    this.state = {
      readOnly: true,
      dataReady: false,
      integrationPFDO: false,
      integrationPFDOType: null,
      integrationInLearno: false
    };
    this.search = {
      directionId: -1,
      yearId: null,
      status: 1,
      name: ''
    };
    this.selected = new _multiSelectable["default"]();
    this.rowSpan = {};
    deferredResLoader.loadJsScript("/vendor/components/signalr/jquery.signalR.min.js");
    deferredResLoader.loadJsScript("/webapi/signalr/hubs");
    pageContext.title = language.Generic.SetupSchool.kTitleAddPrograms;
    pageContext.parent = null;
    var search = $location.search();
    this.search.yearId = parseInt(search.yearId || appContext.yearId);
    this.search.directionId = parseInt(search.directionId || -1);
    this.search.status = parseInt(search.status || 1);
    this.appContext = appContext;
    this.readOnly = !appContext.hasAnyRight([Rights.arClassMgmCreateClass]);
    this.init();
  }
  _createClass(AddProgramsControler, [{
    key: "init",
    value: function init() {
      var _this = this;
      var loadPrograms = this.addProgramsRepository.getAll().then(function (programs) {
        _this.programs = programs;
      });
      var loadYears = this.contextService.getYears().then(function (years) {
        _this.years = years;
      });
      var loadDirections = this.addProgramsRepository.getProgDirections().then(function (directions) {
        _this.directions = directions;
        _this.directions.unshift({
          id: -1,
          name: _this.language.Generic.Common.kAll,
          old: false,
          sortOrder: -1
        });
      });
      var loadStatuses = this.referencesRepository.getProgramStatuses().then(function (statuses) {
        _this.statuses = statuses;
      });
      var loadIntegrationPFDOType = this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (integration) {
        _this.state.integrationPFDOType = integration;
        _this.state.integrationPFDO = integration == _settingsProvider.PfdoIntegrationType.Slavin;
        _this.state.integrationInLearno = integration == _settingsProvider.PfdoIntegrationType.InlearnoNavigator;
      });
      var loadProgramPaymentType = this.referencesRepository.getProgramPaymentTypes().then(function (paymentTypes) {
        _this.refPaymentTypes = paymentTypes;
      });
      this.$q.all([loadPrograms, loadDirections, loadYears, loadStatuses, loadIntegrationPFDOType, loadProgramPaymentType]).then(function () {
        return _this.load();
      }).then(function () {
        if (_this.state.integrationPFDO) {
          _this.readOnly = true;
        }
        _this.state.dataReady = true;
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var loadProgramLimits = this.addProgramsRepository.getProgramLimits(this.search.yearId).then(function (limits) {
        _this2.limits = limits;
      });
      return this.$q.all([loadProgramLimits]).then(function () {
        _this2.state.readOnly = _this2.readOnly || _this2.years.find(function (y) {
          return y.id === _this2.search.yearId;
        }).closed === 'Closed';
        _this2.programsWithLimits = _this2.programs.map(function (p) {
          var programLimits = _this2.limits.filter(function (l) {
            return l.programId === p.id;
          }).sort(function (a, b) {
            return a.grade > b.grade ? 1 : a.grade < b.grade ? -1 : 0;
          });
          var progWithLimits = {
            addProgram: p,
            limits: programLimits,
            addresses: null,
            schoolYearId: _this2.search.yearId
          };
          _this2.rowSpan[p.id] = programLimits.length == 0 ? 1 : programLimits.length;
          return progWithLimits;
        });
        _this2.changeFilter();
      });
    }
  }, {
    key: "yearChanged",
    value: function yearChanged() {
      var _this3 = this;
      this.state.dataReady = false;
      this.$appLoader.show();
      this.load().then(function () {
        _this3.state.dataReady = true;
        _this3.$appLoader.hide();
      });
    }
  }, {
    key: "getProgramPaymentTypes",
    value: function getProgramPaymentTypes(program) {
      if (program.paymentTypes === undefined || program.paymentTypes === null || program.paymentTypes.length === 0) {
        return new Array();
      }
      return this.refPaymentTypes.filter(function (pt) {
        return program.paymentTypes.indexOf(pt.key) > -1;
      });
    }
  }, {
    key: "add",
    value: function add() {
      if (this.state.readOnly) {
        return;
      }
      this.$location.path("/addprograms/new").search({
        readOnly: this.state.readOnly,
        yearId: this.search.yearId
      });
    }
  }, {
    key: "edit",
    value: function edit(program) {
      this.$location.path("/addprograms/" + program.id).search({
        readOnly: this.state.readOnly,
        yearId: this.search.yearId,
        integrationPFDO: this.state.integrationPFDO
      });
    }
  }, {
    key: "closeAfterRemove",
    value: function closeAfterRemove() {
      this.$longWork.close();
      this.selected.dropSelect();
      this.$alerts.success(this.language.Generic.Calendar.kMsgDeletedSuccess);
      this.$appLoader.show();
      this.init();
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this4 = this;
      if (this.selected.items.length === 0) {
        this.$dialogs.message(this.language.Generic.SetupSchool.kMsgNoSelectedPrograms);
        return;
      }
      this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        _this4.$longWork.show();
        return _this4.addProgramsRepository.remove(_this4.selected.items);
      }).then(function () {
        _this4.closeAfterRemove();
      });
      ;
    }
  }, {
    key: "changeFilter",
    value: function changeFilter() {
      var _this5 = this;
      this.selected.dropSelect();
      if (this.programsWithLimits == undefined) this.programsWithLimitsFiltered = [];
      this.programsWithLimitsFiltered = this.programsWithLimits.filter(function (x) {
        return (_this5.search.directionId == -1 || x.addProgram.direction.id == _this5.search.directionId) && (_this5.search.status == -1 || x.addProgram.status.id == _this5.search.status) && (_this5.search.name == '' || x.addProgram.name.toLowerCase().indexOf(_this5.search.name.toLowerCase()) > -1);
      });
    }
  }, {
    key: "sync",
    value: function sync() {
      var _this6 = this;
      var getTask = function getTask() {
        return _this6.$http.post("/webapi/integration/inlearno/sync-programs/queue", {
          Organization: _this6.appContext.schoolId,
          IsForAllOrgs: false
        }).then(function (response) {
          return response.data;
        });
      };
      var settings = {
        getTaskFunc: getTask,
        startTaskImmediately: false,
        logoutputMode: true,
        header: "Синхронизация программ",
        initialStatus: "Ожидание ответа Инлёрно",
        closeOnEnd: false
      };
      this.taskQueueService.execute(settings).then(function () {
        _this6.selected.dropSelect();
        _this6.$alerts.success("Программы успешно обновлены");
        _this6.$appLoader.show();
        _this6.init();
      });
    }
  }, {
    key: "toggleChecks",
    value: function toggleChecks(id) {
      return this.selected.select(id);
    }
  }]);
  return AddProgramsControler;
}();
var AddProgramsComponent = {
  controller: AddProgramsControler,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/addPrograms/list/addPrograms.component.html"
};
exports.AddProgramsComponent = AddProgramsComponent;

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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddProgramsRepository = void 0;
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
var AddProgramsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AddProgramsRepository, _BaseRepository);
  var _super = _createSuper(AddProgramsRepository);
  function AddProgramsRepository() {
    _classCallCheck(this, AddProgramsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AddProgramsRepository, [{
    key: "getAll",
    value: function getAll(directionId, status) {
      var params = {};
      if (directionId) {
        params.directionId = directionId;
      }
      if (status) {
        params.status = status;
      }
      return this.get("/webapi/addprograms", {
        params: params
      });
    }
  }, {
    key: "getProgramLimits",
    value: function getProgramLimits(yearId, directionId, status) {
      var params = {
        yearId: yearId
      };
      if (directionId) {
        params.directionId = directionId;
      }
      if (status) {
        params.status = status;
      }
      return this.get("/webapi/addprograms/limits", {
        params: params
      });
    }
  }, {
    key: "getProgramEdit",
    value: function getProgramEdit(progId, yearId) {
      var params = {};
      params.yearId = yearId;
      return this.get("/webapi/addprograms/" + progId, {
        params: params
      });
    }
  }, {
    key: "create",
    value: function create(program) {
      return this.$http.put("/webapi/addprograms", program).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "save",
    value: function save(program) {
      return this.$http.post("/webapi/addprograms", program).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editAddAddress",
    value: function editAddAddress(programId, addProgramAddress) {
      return this.$http.post("/webapi/addprograms/".concat(programId, "/address"), addProgramAddress).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeAddress",
    value: function removeAddress(programId, addProgramAddressId) {
      return this.$http["delete"]("/webapi/addprograms/".concat(programId, "/address/").concat(addProgramAddressId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "publicate",
    value: function publicate(programId) {
      return this.$http.post("/webapi/integration/pfdo/publishprogram?programId=" + programId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPublishStatus",
    value: function getPublishStatus(programId) {
      return this.$http.post("/webapi/integration/pfdo/programstatus?programId=" + programId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replace",
    value: function replace(id, to) {
      //todo.
      return null;
    }
  }, {
    key: "remove",
    value: function remove(ids) {
      return this.$http["delete"]("/webapi/addprograms", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgDirections",
    value: function getProgDirections() {
      return this.get("/webapi/references/progdirections");
    }
  }, {
    key: "getActivityTypes",
    value: function getActivityTypes() {
      return this.get("/webapi/references/addactivitytypes");
    }
  }, {
    key: "getSchoolJuridicalAddress",
    value: function getSchoolJuridicalAddress() {
      return this.get("/webapi/schools/juridicalAddress");
    }
  }]);
  return AddProgramsRepository;
}(_baseRepository.BaseRepository);
exports.AddProgramsRepository = AddProgramsRepository;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAddProgramComponent = void 0;
var _settingsProvider = __webpack_require__(308);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _formValidationHelper = __webpack_require__(312);
var _editAddProgramAddress = __webpack_require__(313);
var _address = __webpack_require__(315);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditAddProgramController = /*#__PURE__*/function () {
  EditAddProgramController.$inject = ["pageContext", "$appLoader", "$longWork", "$alerts", "$uibModal", "addProgramsRepository", "referencesRepository", "schoolAddressRepository", "$q", "$routeParams", "$location", "changeTracker", "$scope", "settingsProvider", "language"];
  /*@ngInject*/
  function EditAddProgramController(pageContext, $appLoader, $longWork, $alerts, $uibModal, addProgramsRepository, referencesRepository, schoolAddressRepository, $q, $routeParams, $location, changeTracker, $scope, settingsProvider, language) {
    _classCallCheck(this, EditAddProgramController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$uibModal = $uibModal;
    this.addProgramsRepository = addProgramsRepository;
    this.referencesRepository = referencesRepository;
    this.schoolAddressRepository = schoolAddressRepository;
    this.$q = $q;
    this.$location = $location;
    this.changeTracker = changeTracker;
    this.$scope = $scope;
    this.settingsProvider = settingsProvider;
    this.language = language;
    // Мин и макс возрасты для программы
    this.minAge = 3;
    this.maxAge = 18;
    this.maxStudents = 100;
    this.state = {
      readOnly: true,
      createMode: false,
      editMode: false,
      dataReady: false,
      integrationIrtechPFDO: false
    };
    this.data = null;
    this.directions = [];
    this.paymentTypes = new _multiSelectable["default"]();
    this.programLimits = [];
    this.ages = [];
    this.countStudents = [];
    this.durationYears = [];
    this.durationMonths = [];
    this.activityTypes = [];
    this.significantProjects = [];
    this.pfdoPublishStatus = {
      status: "",
      extendStatus: "",
      statusDate: null
    };
    pageContext.parent = {
      title: language.Generic.SetupSchool.kTitleAddPrograms,
      href: "/addprograms"
    };
    //todo. устанавливать заголовок согласно состоянию экрана. редактирование или создание программы доп. образования
    pageContext.title = language.Generic.SetupSchool.kTitleAddProgram;
    this.state.readOnly = $routeParams.readOnly === true;
    if ($routeParams.programId === "new") {
      this.programId = 0;
      this.state.createMode = true;
      if (this.state.readOnly) {
        this.$alerts.error("Невозможно создать новую программу");
        this.$location.path("/addprograms/");
      }
    } else {
      this.programId = parseInt($routeParams.programId);
      this.state.editMode = true;
    }
    this.yearId = parseInt($routeParams.yearId);
    this.ages.push(null);
    for (var i = this.minAge; i <= this.maxAge; i++) {
      this.ages.push(i);
    }
    this.durationYears.push(null);
    for (var i = 0; i <= 18; i++) {
      this.durationYears.push(i);
    }
    this.durationMonths.push(null);
    for (var i = 0; i <= 11; i++) {
      this.durationMonths.push(i);
    }
    for (var _i = 0; _i <= this.maxStudents; _i++) {
      this.countStudents.push(_i);
    }
    this.significantProjects.push(null);
    this.makeEmptyLimits();
    this.init();
  }
  _createClass(EditAddProgramController, [{
    key: "init",
    value: function init() {
      var _this = this;
      //todo. load refs
      var loadDirections = this.addProgramsRepository.getProgDirections().then(function (directions) {
        _this.directions = directions;
      });
      var loadProgramTypes = this.referencesRepository.getProgramTypes().then(function (programTypes) {
        _this.programTypes = programTypes;
      });
      var loadProgramPaymentType = this.referencesRepository.getProgramPaymentTypes().then(function (paymentTypes) {
        _this.refPaymentTypes = paymentTypes;
      });
      var loadAdaptationTypes = this.referencesRepository.getAdaptationTypes().then(function (adaptationTypes) {
        _this.adaptationTypes = adaptationTypes;
      });
      var loadEducForms = this.referencesRepository.getProgramEducForms().then(function (educForms) {
        _this.educForms = educForms;
      });
      var loadStatuses = this.referencesRepository.getProgramStatuses().then(function (statuses) {
        _this.statuses = statuses;
      });
      var loadSignificantProjects = this.referencesRepository.getSignificantProjects().then(function (projects) {
        projects.forEach(function (x) {
          return _this.significantProjects.push(x);
        });
      });
      var loadActivityTypes = this.addProgramsRepository.getActivityTypes().then(function (activityTypes) {
        _this.activityTypes = activityTypes;
      });
      var loadJuridicalAddress = this.addProgramsRepository.getSchoolJuridicalAddress().then(function (address) {
        _this.juridicalAddress = address;
      });
      var loadProgramEdit = new Promise(function (resolve) {
        if (!_this.programId || _this.programId <= 0) {
          resolve();
          return;
        }
        _this.addProgramsRepository.getProgramEdit(_this.programId, _this.yearId).then(function (programData) {
          _this.data = programData;
          if (_this.data.addProgram.paymentTypes !== null) {
            _this.data.addProgram.paymentTypes.forEach(function (pt) {
              return _this.paymentTypes.select(pt);
            });
          }
          _this.programLimits = _this.programLimits.map(function (lim) {
            var find = _this.data.limits.find(function (dt) {
              return dt.grade === lim.grade;
            });
            return find === undefined ? lim : find;
          });
          if (_this.data.addresses === null || _this.data.addresses.length === 0) {
            _this.data.addresses = [{
              id: 0,
              name: ''
            }];
          }
          _this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (integration) {
            _this.state.integrationIrtechPFDO = integration == _settingsProvider.PfdoIntegrationType.IRTechEes;
            resolve();
          });
        });
      });
      var initFileAttachment = function initFileAttachment() {
        var file = _this.data.addProgram.attachment ? [_this.data.addProgram.attachment] : null;
        _this.fa = {
          options: {
            readonly: _this.state.readOnly,
            multiple: false,
            showDescription: true
          },
          data: {
            files: file || [],
            context: {
              addProgramAttachId: 1 // здесь реальное значение ид. не имеет значения, здесь как бы отмечаем поле
            }
          }
        };

        var fileImage = _this.data.addProgram.image ? [_this.data.addProgram.image] : null;
        _this.faImage = {
          options: {
            readonly: _this.state.readOnly,
            multiple: false,
            showDescription: true,
            imageFile: true
          },
          data: {
            files: fileImage || [],
            context: {
              addProgramImageId: 1 // здесь реальное значение ид. не имеет значения, здесь как бы отмечаем поле
            }
          }
        };

        var fileContent = _this.data.addProgram.fullContent ? [_this.data.addProgram.fullContent] : null;
        _this.faFullContent = {
          options: {
            readonly: _this.state.readOnly,
            multiple: false,
            showDescription: true
          },
          data: {
            files: fileContent || [],
            context: {
              addProgramFullContentId: 1 // здесь реальное значение ид. не имеет значения, здесь как бы отмечаем поле
            }
          }
        };
      };

      var promises = this.state.readOnly ? [loadProgramEdit] : [loadDirections, loadProgramTypes, loadAdaptationTypes, loadProgramPaymentType, loadProgramEdit, loadEducForms, loadStatuses, loadActivityTypes, loadJuridicalAddress, loadSignificantProjects];
      return this.$q.all(promises).then(function () {
        var _a;
        if (_this.programId === 0) {
          _this.data = {
            addProgram: {
              id: 0,
              name: "",
              shortName: "",
              description: "",
              created: null,
              programContent: "",
              adaptation: false,
              adaptationType: null,
              disabilityChildAdapted: false,
              direction: _this.directions[0],
              programType: _this.programTypes[0],
              federalRequirements: "",
              //useDistanceTech: false,
              target: "",
              result: "",
              materialBase: "",
              healthRequirements: "",
              ageMin: null,
              ageMax: null,
              minPersons: 1,
              maxPersons: 50,
              paymentTypes: null,
              durationYear: null,
              durationMonth: null,
              educForm: _this.educForms[0],
              activityType: _this.activityTypes.filter(function (x) {
                return x.directionId === _this.directions[0].id;
              })[0],
              medReference: false,
              status: _this.statuses[0],
              significantProject: null,
              //status: { id: 1, name: 'Активная программа12' },
              keyWord: "",
              attachment: null,
              image: null,
              fullContent: null,
              seatsNumber: 0,
              pfdoNavId: "",
              pfdoNavDate: null,
              used: false,
              canBeDeleted: true
            },
            limits: [],
            addresses: [{
              id: 0,
              name: '',
              address: null
            }],
            schoolYearId: _this.yearId
          };
        } else if (_this.state.integrationIrtechPFDO && _this.data.addProgram.pfdoNavId !== undefined && _this.data.addProgram.pfdoNavId !== null && ((_a = _this.data.addProgram.pfdoNavId) === null || _a === void 0 ? void 0 : _a.length) > 0) {
          _this.addProgramsRepository.getPublishStatus(_this.data.addProgram.id).then(function (publishStatus) {
            _this.pfdoPublishStatus = {
              status: publishStatus.status,
              extendStatus: publishStatus.extendStatus,
              statusDate: publishStatus.statusDate
            };
          });
        }
        initFileAttachment();
        _this.$scope.$applyAsync();
        _this.$appLoader.hide();
        _this.state.dataReady = true;
      });
    }
  }, {
    key: "makeEmptyLimits",
    value: function makeEmptyLimits() {
      for (var i = 0; i <= 12; i++) {
        this.programLimits.push({
          programId: this.programId,
          grade: i,
          weekHours: null,
          yearHours: null
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;
      this.state.dataReady = false;
      this.changeTracker.clearDataChanges();
      this.$appLoader.show();
      this.init().then(function () {
        _this2.$alerts.success(language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      //let valid = this.addProgramForm.$valid && this.isAgeRangeValid();
      var helper = new _formValidationHelper.FormValidationHelper(null, this.language, null);
      if (!this.addProgramForm.$valid) {
        var invalidControl = this.addProgramForm.$$controls.find(function (c) {
          return c.$invalid;
        });
        if (invalidControl) {
          helper.focusInvalidControl(invalidControl.$$element);
        }
        return;
      }
      if (!this.isAgeRangeValid()) {
        if (this.addProgramForm.AGEMIN) {
          helper.focusInvalidControl(this.addProgramForm.AGEMIN.$$element);
        }
        return;
      }
      if (!this.isCountStudentsValid()) {
        if (this.addProgramForm.MINPERSONS) {
          helper.focusInvalidControl(this.addProgramForm.MINPERSONS.$$element);
        }
        return;
      }
      var invalidLimits = this.programLimits.filter(function (l) {
        return !_this3.isValidLimit(l);
      });
      if (invalidLimits.length > 0) {
        var grade = invalidLimits[0].grade;
        var _invalidControl = this.addProgramForm.$$controls.filter(function (c) {
          return c.$name == "limitsForm";
        })[grade].$$controls[1];
        if (_invalidControl) {
          helper.focusInvalidControl(_invalidControl.$$element);
        }
        return;
      }
      this.data.limits = this.programLimits.filter(function (x) {
        return x.weekHours >= 0.1;
      });
      this.data.addProgram.paymentTypes = this.paymentTypes.selected;
      var mapFunc = function mapFunc(f) {
        return {
          id: f.id
        };
      };
      //this.data.addProgram.attachment = _.map(this.fa.data.files, mapFunc);
      this.data.addProgram.attachment = null;
      if (this.fa.data.files.length === 1) {
        this.data.addProgram.attachment = this.fa.data.files.map(mapFunc)[0];
      }
      this.data.addProgram.image = null;
      if (this.faImage.data.files.length === 1) {
        this.data.addProgram.image = this.faImage.data.files.map(mapFunc)[0];
      }
      this.data.addProgram.fullContent = null;
      if (this.faFullContent.data.files.length === 1) {
        this.data.addProgram.fullContent = this.faFullContent.data.files.map(mapFunc)[0];
      }
      //this.data.addresses = this.data.addresses.filter(x => x.name.trim().length > 0);
      this.data.addProgram.seatsNumber = parseInt(this.data.addProgram.seatsNumber.toFixed(0));
      if (!this.data.addProgram.adaptation && !this.data.addProgram.disabilityChildAdapted) {
        this.data.addProgram.adaptationType = null;
      }
      this.$longWork.show();
      if (this.programId > 0) {
        this.addProgramsRepository.save(this.data).then(function () {
          _this3.onSuccessSave(language.Generic.SetupAddSchool.kAddProgramEditSuccess);
        }, this.$longWork.close);
      } else {
        this.addProgramsRepository.create(this.data).then(function () {
          _this3.onSuccessSave(language.Generic.SetupAddSchool.kAddProgramCreateSuccess);
        }, this.$longWork.close);
      }
    }
  }, {
    key: "onSuccessSave",
    value: function onSuccessSave(successMessage) {
      this.$longWork.close();
      this.changeTracker.clearDataChanges();
      this.$alerts.success(successMessage);
      if (!this.state.integrationIrtechPFDO) {
        this.$location.path("/addprograms/");
      }
    }
  }, {
    key: "publicate",
    value: function publicate() {
      var _this4 = this;
      if (!this.state.integrationIrtechPFDO || !this.state.editMode) {
        return;
      }
      var publicatePromise = this.addProgramsRepository.publicate(this.programId).then(function (publishStatus) {
        _this4.$alerts.success("Программа отправлена на публикацию");
        _this4.pfdoPublishStatus = {
          status: publishStatus.status,
          extendStatus: publishStatus.extendStatus,
          statusDate: publishStatus.statusDate
        };
        _this4.data.addProgram.pfdoNavDate = publishStatus.statusDate;
        //this.$location.path("/addprograms/");
      }).then(function () {
        return _this4.addProgramsRepository.getPublishStatus(_this4.programId);
      }).then(function (publishStatus) {
        _this4.pfdoPublishStatus = {
          status: publishStatus.status,
          extendStatus: publishStatus.extendStatus,
          statusDate: publishStatus.statusDate
        };
        _this4.$scope.$applyAsync();
      });
      this.$longWork.execute(publicatePromise);
    }
  }, {
    key: "isAgeRangeValid",
    value: function isAgeRangeValid() {
      if (this.state.readOnly) {
        return true;
      }
      if (!this.state.dataReady) {
        return true;
      }
      if (this.data === null) {
        return true;
      }
      if (!this.data.addProgram) {
        return true;
      }
      var ageMin = this.data.addProgram.ageMin;
      var ageMax = this.data.addProgram.ageMax;
      return ageMin === null && ageMax === null || ageMin !== null && ageMax !== null && ageMin <= ageMax;
      //return this.checkNumbers(this.data.addProgram.ageMin, this.data.addProgram.ageMax);
    }
  }, {
    key: "isCountStudentsValid",
    value: function isCountStudentsValid() {
      if (!this.state.dataReady || this.state.readOnly || this.data == null || !this.data.addProgram) {
        return true;
      }
      return this.data.addProgram.minPersons <= this.data.addProgram.maxPersons;
    }
  }, {
    key: "isValidLimit",
    value: function isValidLimit(limit) {
      if (this.state.readOnly) {
        return true;
      }
      if (!this.state.dataReady) {
        return true;
      }
      var weekHours = limit.weekHours;
      var yearHours = limit.yearHours;
      return weekHours === null && yearHours === null || weekHours !== null && yearHours === null || weekHours !== null && yearHours !== null && weekHours <= yearHours;
      //return this.checkNumbers(limit.weekHours, limit.yearHours);
    }
    // checkNumbers(num1?: number, num2?: number){
    // 	return (num1 === null && num2 === null) || (num1 !== null && num2 !== null && num1 <= num2);
    // }
  }, {
    key: "filterActivityTypesByDirection",
    value: function filterActivityTypesByDirection() {
      var _this5 = this;
      if (this.data === null) {
        return [];
      }
      if (!this.data.addProgram) {
        return [];
      }
      if (!this.data.addProgram.direction) {
        return [];
      }
      return this.activityTypes.filter(function (x) {
        return x.directionId === _this5.data.addProgram.direction.id;
      });
    }
  }, {
    key: "onChangeDirection",
    value: function onChangeDirection() {
      var _this6 = this;
      if (this.state.readOnly) {
        return;
      }
      this.data.addProgram.activityType = this.activityTypes.filter(function (x) {
        return x.directionId === _this6.data.addProgram.direction.id;
      })[0];
    }
  }, {
    key: "onChangeAdaption",
    value: function onChangeAdaption() {
      if ((this.data.addProgram.adaptation || this.data.addProgram.disabilityChildAdapted) && !this.data.addProgram.adaptationType) {
        this.data.addProgram.adaptationType = this.adaptationTypes[0];
      }
    }
  }, {
    key: "addAddress",
    value: function addAddress() {
      var _a, _b;
      if (this.state.readOnly) {
        return;
      }
      if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.addresses) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        var lastAddress = this.data.addresses[this.data.addresses.length - 1];
        if (lastAddress.id == 0 && lastAddress.name == "") {
          this.$alerts.warning("Прежде чем добавлять новый адрес реализации программы, заполните предыдущий");
          return;
        }
      }
      this.data.addresses.push({
        id: 0,
        name: ''
      });
    }
  }, {
    key: "editAddress",
    value: function editAddress(addProgramAddress) {
      var _this7 = this;
      if (addProgramAddress == null) {
        console.error("addProgramAddress не найден", addProgramAddress);
        return;
      }
      if (addProgramAddress.address == null) {
        var address = null;
        var loadAddress = this.schoolAddressRepository.getSchoolAddress(0, _address.SchoolAddressType.LegalAddress);
        this.$longWork.execute(loadAddress).then(function (editAddressInfo) {
          if (editAddressInfo) {
            address = editAddressInfo;
          } else {
            return true;
          }
        }).then(function (needBaseAddress) {
          if (needBaseAddress) {
            var loadBaseAddress = _this7.schoolAddressRepository.getSchoolAddressBase(0);
            return _this7.$longWork.execute(loadBaseAddress).then(function (baseAddress) {
              address = baseAddress;
            });
          }
        }).then(function () {
          //addProgramAddress.address = address;
          _this7.openEditAddressDialog(addProgramAddress, address);
        });
      } else {
        this.openEditAddressDialog(addProgramAddress, addProgramAddress.address);
      }
    }
  }, {
    key: "openEditAddressDialog",
    value: function openEditAddressDialog(_addProgramAddress, address) {
      var _this8 = this;
      // Создается экземпляр AddressEditInfo на основе EditAddressData
      // Это нужно для работы addressedit компонента (выбор адреса из ФИАС), т.к. там address имеет тип AddressEditInfo
      var addressEditInfo = this.convertEditAddressDataToAddressEditInfo(address);
      this.$uibModal.open({
        templateUrl: _editAddProgramAddress.EditAddProgramAddressComponent.templateUrl,
        controller: _editAddProgramAddress.EditAddProgramAddressComponent.controller,
        controllerAs: _editAddProgramAddress.EditAddProgramAddressComponent.controllerAs,
        backdrop: "static",
        size: "lg",
        resolve: {
          programData: function programData() {
            return _this8.data;
          },
          addProgramAddress: function addProgramAddress() {
            return _addProgramAddress;
          },
          address: function address() {
            return addressEditInfo;
          }
        }
      });
    }
  }, {
    key: "convertEditAddressDataToAddressEditInfo",
    value: function convertEditAddressDataToAddressEditInfo(editAddressData) {
      var _a, _b, _c, _d;
      var convertLocationToAddressItemDto = function convertLocationToAddressItemDto(locationItem) {
        if (!locationItem) {
          return null;
        }
        return {
          id: 0,
          fiasId: locationItem === null || locationItem === void 0 ? void 0 : locationItem.aoGuid,
          name: locationItem === null || locationItem === void 0 ? void 0 : locationItem.name
        };
      };
      return {
        addressId: 0,
        addressType: editAddressData.addressType,
        fiasId: (_a = editAddressData.building) === null || _a === void 0 ? void 0 : _a.houseGuid,
        kladrCode: (_b = editAddressData.building) === null || _b === void 0 ? void 0 : _b.code,
        building: (_c = editAddressData.building) === null || _c === void 0 ? void 0 : _c.name,
        buildingFiasId: (_d = editAddressData.building) === null || _d === void 0 ? void 0 : _d.houseGuid,
        flat: editAddressData.flat,
        corp: editAddressData.corp,
        struc: editAddressData.struc,
        zipCode: editAddressData.zipCode,
        country: null,
        region: convertLocationToAddressItemDto(editAddressData.region),
        district: convertLocationToAddressItemDto(editAddressData.district),
        city: convertLocationToAddressItemDto(editAddressData.city),
        street: convertLocationToAddressItemDto(editAddressData.street)
      };
    }
  }, {
    key: "togglePaymentType",
    value: function togglePaymentType(paymentType) {
      this.paymentTypes.select(paymentType);
    }
  }, {
    key: "isPaymentType",
    value: function isPaymentType(paymentType) {
      return this.paymentTypes.isSelected(paymentType);
    }
  }, {
    key: "getProgramPaymentTypes",
    value: function getProgramPaymentTypes() {
      var _this9 = this;
      if (this.data.addProgram.paymentTypes === null || this.data.addProgram.paymentTypes.length === 0) {
        return new Array();
      }
      return this.refPaymentTypes.filter(function (pt) {
        return _this9.data.addProgram.paymentTypes.indexOf(pt.key) > -1;
      });
    }
  }]);
  return EditAddProgramController;
}();
var EditAddProgramComponent = {
  controller: EditAddProgramController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/addPrograms/edit/editAddProgram.component.html"
};
exports.EditAddProgramComponent = EditAddProgramComponent;

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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditAddProgramAddressComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _extDeferred = __webpack_require__(314);
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
var EditAddProgramAddressController = /*#__PURE__*/function (_NetCityModalControll) {
  EditAddProgramAddressController.$inject = ["$scope", "changeTracker", "$dialogs", "$uibModalInstance", "language", "addProgramsRepository", "programData", "addProgramAddress", "address", "$longWork", "$alerts"];
  _inherits(EditAddProgramAddressController, _NetCityModalControll);
  var _super = _createSuper(EditAddProgramAddressController);
  /*@ngInject*/
  function EditAddProgramAddressController($scope, changeTracker, $dialogs, $uibModalInstance, language, addProgramsRepository, programData, addProgramAddress, address, $longWork, $alerts) {
    var _this;
    _classCallCheck(this, EditAddProgramAddressController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.addProgramsRepository = addProgramsRepository;
    _this.programData = programData;
    _this.addProgramAddress = addProgramAddress;
    _this.address = address;
    _this.$longWork = $longWork;
    _this.$alerts = $alerts;
    _this.editMode = _this.addProgramAddress.id > 0;
    // Редактирование существующей или добавление новой программы
    _this.editProgramMode = _this.programData.addProgram.id > 0;
    _this.header = _this.editMode ? "Редактирование адреса" : "Добавить адрес";
    _this.buttons = [{
      title: language.Generic.Buttons.kSave,
      isEnabled: function isEnabled() {
        return _this.ready && !_this.error;
      },
      "class": ["btn-primary btn-sm"],
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      }
    }, {
      title: language.Generic.Buttons.kRemove,
      isEnabled: function isEnabled() {
        return _this.ready && !_this.error;
      },
      isDisplayed: function isDisplayed() {
        return !!_this.address.buildingFiasId;
      },
      "class": ["btn-sm", "btn-danger"],
      icon: "glyphicon glyphicon-minus-sign",
      action: function action() {
        return _this.remove();
      }
    }, {
      title: language.Generic.Buttons.kCancel,
      "class": ["btn-sm"],
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.cancel();
      }
    }];
    return _this;
  }
  _createClass(EditAddProgramAddressController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      var saveAddress = this.saveModel.getValue();
      // Если изменений нет, то закрываем без сохранения
      if (this.isAddressEqualsToSaveAddress(this.address, saveAddress)) {
        this.$uibModalInstance.close();
        return;
      }
      // Проверка на дубликат
      if (this.programData.addresses.some(function (x) {
        return _this2.isAddressEqualsToSaveAddress(x.address, saveAddress);
      })) {
        this.$alerts.warning("Такой адрес уже есть");
        return;
      }
      // Сохранение строки
      this.addProgramAddress.name = this.formAddressString();
      // Сохранение объекта
      this.addProgramAddress.address = saveAddress;
      // Если это редактирование уже существующей программы доп. образования, то адрес сохраняется
      // Иначе сообщает в changeTracker, что есть изменения, они сохранятся только когда сохранится вся программа
      if (this.editProgramMode) {
        var saveAddProgramAddress = this.addProgramsRepository.editAddAddress(this.programData.addProgram.id, this.addProgramAddress);
        var successMessage = this.editMode ? "Адрес успешно изменён" : "Адрес успешно добавлен";
        this.$longWork.execute(saveAddProgramAddress).then(function (addProgramAddressId) {
          _this2.addProgramAddress.id = addProgramAddressId;
          _this2.$alerts.success(successMessage);
        });
      } else {
        this.changeTracker.dataWasChanged();
      }
      this.$uibModalInstance.close(true);
    }
  }, {
    key: "isAddressEqualsToSaveAddress",
    value: function isAddressEqualsToSaveAddress(address, saveAddress) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      if (!address) {
        return false;
      }
      var isAddressEditInfo = function isAddressEditInfo(object) {
        return "fiasId" in object;
      };
      var isEditAddressData = function isEditAddressData(object) {
        return "isTempAddress" in object;
      };
      if (isAddressEditInfo(address)) {
        return address.building && address.buildingFiasId == saveAddress.building.houseGuid && ((_a = address.street) === null || _a === void 0 ? void 0 : _a.fiasId) == ((_b = saveAddress.street) === null || _b === void 0 ? void 0 : _b.aoGuid) && address.corp == saveAddress.corp && address.struc == saveAddress.struc || ((_c = address.city) === null || _c === void 0 ? void 0 : _c.fiasId) == ((_d = saveAddress.city) === null || _d === void 0 ? void 0 : _d.aoGuid) && ((_e = address.street) === null || _e === void 0 ? void 0 : _e.fiasId) == ((_f = saveAddress.street) === null || _f === void 0 ? void 0 : _f.aoGuid) && address.building == saveAddress.building.name && address.corp == saveAddress.corp && address.struc == saveAddress.struc;
      }
      if (isEditAddressData(address)) {
        return address.building.houseGuid == saveAddress.building.houseGuid && ((_g = address.street) === null || _g === void 0 ? void 0 : _g.aoGuid) == ((_h = saveAddress.street) === null || _h === void 0 ? void 0 : _h.aoGuid) && address.corp == saveAddress.corp && address.struc == saveAddress.struc || ((_j = address.city) === null || _j === void 0 ? void 0 : _j.aoGuid) == ((_k = saveAddress.city) === null || _k === void 0 ? void 0 : _k.aoGuid) && ((_l = address.street) === null || _l === void 0 ? void 0 : _l.aoGuid) == ((_m = saveAddress.street) === null || _m === void 0 ? void 0 : _m.aoGuid) && address.building.name == saveAddress.building.name && address.corp == saveAddress.corp && address.struc == saveAddress.struc;
      }
      return false;
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      var programDataAddressToRemove = this.programData.addresses.filter(function (x) {
        return x.id == _this3.addProgramAddress.id;
      })[0];
      if (programDataAddressToRemove == null) {
        return;
      }
      var confirms = [];
      confirms.push(function () {
        return _this3.$dialogs.confirmDelete(_this3.language.Generic.SetupSchoolUI.kDelConfirm);
      });
      _extDeferred.extDeferred.when(confirms).then(function () {
        var indexToRemove = _this3.programData.addresses.indexOf(programDataAddressToRemove);
        _this3.programData.addresses.splice(indexToRemove, 1);
        if (_this3.editProgramMode) {
          var removeAddress = _this3.addProgramsRepository.removeAddress(_this3.programData.addProgram.id, _this3.addProgramAddress.id);
          _this3.$longWork.execute(removeAddress).then(function () {
            _this3.$alerts.success("Адрес успешно удалён");
          });
        } else {
          _this3.changeTracker.dataWasChanged();
        }
        _this3.$uibModalInstance.close(true);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "formAddressString",
    value: function formAddressString() {
      var _a;
      var addressString = "";
      if (this.editAddress.zipCode) {
        addressString += "".concat(this.editAddress.zipCode, " ");
      }
      addressString += "".concat((_a = this.editAddress.region) === null || _a === void 0 ? void 0 : _a.text);
      // Если регион — это город федерального значения, то сокращение не указывается
      if (this.editAddress.region.typeShort && this.editAddress.region.typeShort != "г") {
        addressString += " ".concat(this.editAddress.region.typeShort, ".");
      }
      if (this.editAddress.district) {
        addressString += ", ".concat(this.editAddress.district.text, " ").concat(this.editAddress.district.typeShort);
      }
      if (this.editAddress.city) {
        addressString += ", ".concat(this.editAddress.city.typeShort, ". ").concat(this.editAddress.city.text);
      }
      if (this.editAddress.street) {
        addressString += " ".concat(this.editAddress.street.typeShort, ". ").concat(this.editAddress.street.text);
      }
      addressString += " \u0434. ".concat(this.editAddress.building.text);
      if (this.editAddress.corpus && !this.editAddress.building.text.includes("корп.")) {
        addressString += ", \u043A\u043E\u0440\u043F. ".concat(this.editAddress.corpus);
      }
      if (this.editAddress.struc && !this.editAddress.building.text.includes("стр.")) {
        addressString += ", \u0441\u0442\u0440. ".concat(this.editAddress.struc);
      }
      return addressString;
    }
  }]);
  return EditAddProgramAddressController;
}(_netcityModalCtrl.NetCityModalController);
var EditAddProgramAddressComponent = {
  controller: EditAddProgramAddressController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/addPrograms/edit/address/editAddProgramAddress.component.html"
};
exports.EditAddProgramAddressComponent = EditAddProgramAddressComponent;

/***/ }),

/***/ 314:
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

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolAddressType = exports.AddressContentType = void 0;
var SchoolAddressType;
exports.SchoolAddressType = SchoolAddressType;
(function (SchoolAddressType) {
  // Почтовый адрес
  SchoolAddressType["PostAddress"] = "P";
  // Юридический адрес
  SchoolAddressType["LegalAddress"] = "L";
})(SchoolAddressType || (exports.SchoolAddressType = SchoolAddressType = {}));
var AddressContentType;
exports.AddressContentType = AddressContentType;
(function (AddressContentType) {
  AddressContentType["country"] = "country";
  AddressContentType["region"] = "region";
  AddressContentType["district"] = "district";
  AddressContentType["city"] = "city";
  AddressContentType["street"] = "street";
  AddressContentType["building"] = "building";
  AddressContentType["unknown"] = "unknown";
})(AddressContentType || (exports.AddressContentType = AddressContentType = {}));

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassEditComponent = void 0;
var _common = __webpack_require__(25);
var _classes = __webpack_require__(30);
var _classes2 = __webpack_require__(32);
var _addPrograms = __webpack_require__(317);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _classchiefsedit = __webpack_require__(318);
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
var ClassesEditController = /*#__PURE__*/function () {
  ClassesEditController.$inject = ["$scope", "classesRepository", "usersRepository", "roomsRepository", "curriculumRepository", "profilesRepository", "vacationsRepository", "addProgramsRepository", "termTypesRepository", "$longWork", "$alerts", "$dialogs", "$uibModal", "$location", "settingsProvider", "pageContext", "$routeParams", "$appLoader", "appContext", "language", "contextService"];
  /*@ngInject*/
  function ClassesEditController($scope, classesRepository, usersRepository, roomsRepository, curriculumRepository, profilesRepository, vacationsRepository, addProgramsRepository, termTypesRepository, $longWork, $alerts, $dialogs, $uibModal, $location, settingsProvider, pageContext, $routeParams, $appLoader, appContext, language, contextService) {
    _classCallCheck(this, ClassesEditController);
    this.$scope = $scope;
    this.classesRepository = classesRepository;
    this.usersRepository = usersRepository;
    this.roomsRepository = roomsRepository;
    this.curriculumRepository = curriculumRepository;
    this.profilesRepository = profilesRepository;
    this.vacationsRepository = vacationsRepository;
    this.addProgramsRepository = addProgramsRepository;
    this.termTypesRepository = termTypesRepository;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$location = $location;
    this.settingsProvider = settingsProvider;
    this.$appLoader = $appLoader;
    this.appContext = appContext;
    this.language = language;
    this.contextService = contextService;
    this.yearTransitionState = false;
    this.readOnly = false;
    this.classChiefs = [];
    this.classVacations = new _multiSelectable["default"]();
    this.classForms = new _multiSelectable["default"]();
    this.profiles = [];
    this.showProfile = true;
    this.douGroupPrograms = new _multiSelectable["default"]();
    this.noContingent = false;
    pageContext.parent = {
      title: language.MenuFolders.kFNClasses,
      href: "/classes/"
    };
    pageContext.back = {
      history: true
    };
    this.data = {
      roomId: null
    };
    var classIdParam = $routeParams.classId;
    if (classIdParam === "new") {
      this.classId = 0;
      this.initRoomId = this.isPreSchool ? -1 : 0;
      this.data.roomId = this.isPreSchool ? -1 : 0;
      pageContext.title = language.Generic.Buttons.kAdd + " " + language.Common.kClass_v;
    } else {
      pageContext.title = language.ClassManagement.kEditingClass;
      this.classId = Number(classIdParam);
    }
    this.editMode = this.classId != 0;
    this.init();
  }
  _createClass(ClassesEditController, [{
    key: "isPreSchool",
    get: function get() {
      return this.appContext.funcType == _common.FuncType.preSchool;
    }
  }, {
    key: "isAddSchool",
    get: function get() {
      return this.appContext.funcType == _common.FuncType.addSchool;
    }
  }, {
    key: "isSchool",
    get: function get() {
      return this.appContext.funcType == _common.FuncType.school;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.classVacations.dropSelect();
      this.classForms.dropSelect();
      this.douGroupPrograms.dropSelect();
      this.contextService.isYearTransitionState(this.appContext).then(function (yearTransitionState) {
        _this.yearTransitionState = yearTransitionState;
      });
      // загрузка общих справочников
      var promises = [this.initCommonRefs()];
      // загрузка общих настроек
      var getEnableStudentsDataQuality = this.settingsProvider.ServerSettings.SystemSettings.EnableStudentsDataQuality().then(function (enableStudentsDataQuality) {
        _this.enableStudentsDataQuality = enableStudentsDataQuality;
      });
      promises.push(getEnableStudentsDataQuality);
      if (this.isPreSchool) {
        promises.push(this.initPreSchoolRefs());
      } else if (this.isSchool) {
        var classFormsRefReady = this.classesRepository.getClassForms().then(function (classForms) {
          _this.forms = classForms;
          if (!_this.classId && classForms && classForms.length) {
            _this.classForms.select(classForms[0].id);
          }
        });
        promises = promises.concat([classFormsRefReady]);
      } else if (this.isAddSchool) {
        var programsReady = this.addProgramsRepository.getAll(null, _addPrograms.AddProgramStatus.ActiveProgram).then(function (addPrgrams) {
          return _this.programs = addPrgrams;
        });
        promises = promises.concat([programsReady]);
      }
      this.classes = [];
      if (this.classId === 0) {
        var strFuncType = _common.FuncType[this.appContext.funcType];
        strFuncType = strFuncType[0].toUpperCase() + strFuncType.substring(1);
        this["class"] = {
          id: null,
          profileId: null,
          iup: false,
          funcType: strFuncType,
          chief: null,
          grade: null,
          letter: null,
          name: null,
          room: null,
          classType: null,
          plannedOccupancy: null,
          hasClassNotWorkingTeacher: null
        };
        var refsReady = Promise.all(promises);
        return refsReady.then(function () {
          if (_this.isAddSchool && (!_this.programs || !_this.programs.length)) {
            _this.$appLoader.hide();
            _this.$dialogs.message(_this.language.Generic.ClassManagement.kDefineAddSchoolEducProgramsW).then(function () {
              _this.$location.path("/classes/");
            }, function () {
              _this.$location.path("/classes/");
            });
          }
          _this.setDefaultClassParams();
          // при добавлении все выбрано
          _this.vacations.forEach(function (v) {
            return _this.classVacations.select(v.id);
          });
          _this.data.roomId = _this.initRoomId;
          _this.dataReady = true;
          _this.$appLoader.hide();
          _this.$scope.$applyAsync();
        });
      } else {
        promises.push(this.initClassData());
        return Promise.all(promises).then(function () {
          _this.changeCurriculum();
          _this.data.roomId = _this.initRoomId;
          if (_this.editMode && _this.isSchool) {
            // #37530. Ограничиваю возможные профили - тем же Типом периода, который сейчас у профиля и параллели редактируемого класса
            if (_this.termTypesGrades != undefined && _this.termTypesGrades.length > 0) {
              var classTermTypeGrade = _this.termTypesGrades.find(function (x) {
                return x.grade == _this["class"].grade.id && x.profileId == _this["class"].profileId;
              });
              if (classTermTypeGrade) {
                var profileIds = _this.termTypesGrades.filter(function (x) {
                  return x.termTypeId == classTermTypeGrade.termTypeId && x.grade == _this["class"].grade.id;
                }).map(function (x) {
                  return x.profileId;
                });
                if (_this.profiles) {
                  _this.profiles = _this.profiles.filter(function (x) {
                    return profileIds.indexOf(x.id) > -1;
                  });
                }
              }
            }
          }
          _this.dataReady = true;
          _this.$appLoader.hide();
          _this.$scope.$applyAsync();
        });
      }
    }
  }, {
    key: "initCommonRefs",
    value: function initCommonRefs() {
      var _this2 = this;
      var teachersReady = this.classesRepository.getTeacherListAndClassChiefs(-1).then(function (teachers) {
        return _this2.teachers = teachers;
      });
      var gradesReady = this.curriculumRepository.getLimitsGrades().then(function (grades) {
        return _this2.grades = grades;
      });
      var lettersReady = this.classesRepository.getClassLetters().then(function (letters) {
        return _this2.letters = letters;
      });
      var classTypesReady = this.classesRepository.getClassTypes(this.appContext.funcType).then(function (classTypes) {
        return _this2.classTypes = classTypes;
      });
      var classRoomsReady = this.roomsRepository.getRooms(null, null, ["using"]).then(function (rooms) {
        _this2.classRooms = rooms;
        if (_this2.isPreSchool) {
          _this2.classRooms.unshift({
            id: -1,
            roomname: "<".concat(_this2.language.Generic.Movement.kNotSelected, ">"),
            corpus: "",
            classes: [],
            used: false,
            study: false
          });
        }
      });
      var profilesReady = this.profilesRepository.getProfiles().then(function (profiles) {
        _this2.profiles = profiles;
        _this2.showProfile = profiles && profiles.length >= 2;
      });
      var vacationsReady = this.vacationsRepository.getVacations().then(function (vacations) {
        return _this2.vacations = vacations;
      });
      var refPromises = [teachersReady, gradesReady, lettersReady, classTypesReady, classRoomsReady, profilesReady, vacationsReady];
      if (this.editMode && this.isSchool) {
        var termTypesReady = this.termTypesRepository.getTermTypesGrades(false).then(function (termTypesGrades) {
          return _this2.termTypesGrades = termTypesGrades;
        });
        refPromises.push(termTypesReady);
      }
      return Promise.all(refPromises);
    }
  }, {
    key: "initPreSchoolRefs",
    value: function initPreSchoolRefs() {
      var _this3 = this;
      var ageCategoriesReady = this.classesRepository.getAgeCategories().then(function (ageCategories) {
        return _this3.ageCategories = ageCategories;
      });
      var agesReady = this.classesRepository.getAges().then(function (ages) {
        return _this3.ages = ages;
      });
      var douGroupTypesReady = this.classesRepository.getDouGroupTypes().then(function (douGroupTypes) {
        return _this3.douGroupTypes = douGroupTypes;
      });
      var stayRegimesReady = this.classesRepository.getStayRegimes().then(function (stayRegimes) {
        return _this3.stayRegimes = stayRegimes;
      });
      var douProgramsReady = this.classesRepository.getDouPrograms().then(function (douPrograms) {
        return _this3.douPrograms = douPrograms;
      });
      var addSpezializationReady = this.classesRepository.getAddSpecialization().then(function (addSpecialization) {
        return _this3.addSpecialization = addSpecialization;
      });
      var classesReady = this.classesRepository.getYearClasses({
        expand: [_classes2.ClassExpandProp.room]
      }).then(function (classes) {
        return _this3.classes = classes;
      });
      return Promise.all([ageCategoriesReady, agesReady, stayRegimesReady, douGroupTypesReady, douProgramsReady, addSpezializationReady, classesReady]);
    }
  }, {
    key: "initClassData",
    value: function initClassData() {
      var _this4 = this;
      var classVacationsReady = this.classesRepository.getClassVacations(this.classId).then(function (classVacations) {
        return classVacations.forEach(function (v) {
          return _this4.classVacations.select(v.id);
        });
      });
      var loadClassInfo = this.classesRepository.getById(this.classId, [_classes2.ClassExpandProp.room, _classes2.ClassExpandProp.chiefs, _classes2.ClassExpandProp.hasClassNotWorkingTeacher]).then(function (cls) {
        var _a;
        _this4["class"] = cls;
        _this4.initRoomId = cls.room && cls.room.id;
        _this4.classChiefs = cls.chiefs;
        _this4.classChief = _this4.classChiefs && _this4.classChiefs[0];
        _this4.noContingent = !((_a = _this4.classChiefs) === null || _a === void 0 ? void 0 : _a.length);
      });
      var promises = [loadClassInfo, classVacationsReady];
      if (this.isPreSchool) {
        var douGroupProgramsReady = this.classesRepository.getGroupDouPrograms(this.classId).then(function (groupPrograms) {
          return groupPrograms.forEach(function (p) {
            return _this4.douGroupPrograms.select(p.id);
          });
        });
        promises.push(douGroupProgramsReady);
      } else if (this.isSchool) {
        var classFormsReady = this.classesRepository.getClassClassForm(this.classId).then(function (classForms) {
          classForms.forEach(function (c) {
            return _this4.classForms.select(c);
          });
        });
        promises = promises.concat([classFormsReady]);
      }
      return Promise.all(promises);
    }
    // группа ГКП
  }, {
    key: "isGkpRoom",
    value: function isGkpRoom(room) {
      return this.classes.some(function (x) {
        var _a;
        return x.stayRegime.id == _classes.StayRegime.Short && ((_a = x.room) === null || _a === void 0 ? void 0 : _a.id) == room.id;
      });
    }
  }, {
    key: "highlightRoom",
    value: function highlightRoom(room) {
      return this.isPreSchool && room.used && !this.isGkpRoom(room);
    }
  }, {
    key: "displayCapacityNoLimits",
    value: function displayCapacityNoLimits() {
      var groupTypeId = this["class"].douGroupType.id;
      return groupTypeId != _classes.DouGroupType.Compensating;
    }
  }, {
    key: "displayCapacityWithOVZ",
    value: function displayCapacityWithOVZ() {
      var groupTypeId = this["class"].douGroupType.id;
      return groupTypeId == _classes.DouGroupType.Combined || groupTypeId == _classes.DouGroupType.Compensating;
    }
  }, {
    key: "changeDouGroupType",
    value: function changeDouGroupType() {
      this.chooseDefaultDouProgram();
      this.$scope.$applyAsync();
    }
  }, {
    key: "changeClassType",
    value: function changeClassType() {
      this.$scope.$applyAsync();
    }
  }, {
    key: "displayAddSpecialization",
    value: function displayAddSpecialization() {
      var groupTypeId = this["class"].douGroupType.id;
      return groupTypeId == _classes.DouGroupType.Combined || groupTypeId == _classes.DouGroupType.Compensating;
    }
  }, {
    key: "displaySeatsForShort",
    value: function displaySeatsForShort() {
      var stayRegime = this["class"].stayRegime.id;
      return stayRegime == _classes.StayRegime.Short;
    }
  }, {
    key: "displayVacations",
    value: function displayVacations() {
      return (!this.classId && this.isSchool || this.classId) && this.vacations && this.vacations.length > 0;
    }
  }, {
    key: "setDefaultClassParams",
    value: function setDefaultClassParams() {
      if (this.classTypes != null && this.classTypes.length > 0) {
        this["class"].classType = this.classTypes[0];
      }
      if (this.grades != null && this.grades.length > 0) {
        this["class"].grade = this.grades[0];
      }
      if (this.classChiefs != null && this.classChiefs.length > 0) {
        this["class"].chief = this.classChiefs[0];
      } else if (this.teachers != null && this.teachers.length > 0) {
        this.classChief = this.teachers[0];
      }
      if (!this["class"].profileId && this.profiles.length > 0) {
        this["class"].profileId = this.profiles[0].id;
      }
      switch (this.appContext.funcType) {
        case _common.FuncType.preSchool:
          {
            var preClass = this["class"];
            if (this.ages != null && this.ages.length > 0) {
              preClass.douGroupAge = this.ages[0];
            }
            if (this.ageCategories != null && this.ageCategories.length > 0) {
              preClass.douGroupAgeCategory = this.ageCategories[0];
            }
            if (this.programs != null && this.programs.length > 0) {
              preClass.program = this.programs[0];
            }
            if (this.douGroupTypes != null && this.douGroupTypes.length > 0) {
              preClass.douGroupType = this.douGroupTypes[0];
            }
            if (this.stayRegimes != null && this.stayRegimes.length > 0) {
              preClass.stayRegime = this.stayRegimes[0];
            }
            if (!this.classId && this.douPrograms && this.douPrograms.length) {
              this.douGroupPrograms.select(this.douPrograms[0].id);
            }
            preClass.noInformika = false;
            break;
          }
        case _common.FuncType.school:
          {
            var schoolClass = this["class"];
            schoolClass.isIup = false;
            break;
          }
        default:
          {
            break;
          }
      }
    }
  }, {
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this5 = this;
        var className, extraData, processing;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.form.$invalid) {
                _context.next = 3;
                break;
              }
              this.form.$displayErrors = true;
              return _context.abrupt("return");
            case 3:
              if (!(!this.validateProfile() || !this.validGrade())) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              if (!this.isPreSchool) {
                _context.next = 16;
                break;
              }
              className = (this["class"].letter + " " + this["class"].grade.name).trim();
              if (!this.wizard) {
                _context.next = 13;
                break;
              }
              _context.next = 10;
              return this.roomsRepository.findOrCreate({
                roomName: className,
                floor: 1,
                seats: 0
              });
            case 10:
              this["class"].room = _context.sent;
              _context.next = 16;
              break;
            case 13:
              if (!(!this["class"].room || this["class"].room.id == -1)) {
                _context.next = 16;
                break;
              }
              this.$dialogs.message(this.language.Generic.ClassManagement.kErrGroupSave);
              return _context.abrupt("return");
            case 16:
              if (this.isPreSchool && !this.displayAddSpecialization()) {
                this["class"].addSpecialization = null;
              }
              extraData = {
                chief: [],
                vacation: this.classVacations.selected
              };
              if (this.isSchool || this.classId === 0) {
                if (this.classChief) {
                  extraData.chief = [this.classChief.id];
                }
              } else {
                if (this.classChiefs) {
                  extraData.chief = _.map(this.classChiefs, 'id');
                }
              }
              if (this.appContext.funcType == _common.FuncType.preSchool) {
                if (!this.wizard) {
                  extraData.douGroupProgram = this.douGroupPrograms.selected;
                }
              } else if (this.appContext.funcType == _common.FuncType.school) {
                extraData.form = this.classForms.selected;
              }
              processing = this.$longWork.show();
              if (this.classId === 0) {
                if (this.appContext.funcType == _common.FuncType.addSchool && !this["class"].classType) {
                  this["class"].classType = {
                    id: 1
                  };
                }
                this.classesRepository.create(this["class"], extraData).then(function (createdClass) {
                  if (_this5.wizard && _this5.isPreSchool) {
                    processing.close();
                    _this5.$alerts.success(_this5.language.ClassManagement.kBindedWithTermType);
                    _this5.$location.path("/classes/");
                  } else {
                    _this5.classesRepository.getClassPeriodType(createdClass.id).then(function (classPeriodType) {
                      processing.close();
                      _this5.changeCurriculum();
                      _this5.$alerts.success("".concat(_this5.language.ClassManagement.kBindedWithTermType, " \"").concat(classPeriodType.name, "\""));
                      _this5.$location.path("/classes/");
                    });
                  }
                });
              } else {
                this.changedToIup().then(function () {
                  _this5.classesRepository.edit(_this5["class"], extraData).then(function () {
                    processing.close();
                    _this5.changeCurriculum();
                    _this5.$alerts.success(_this5.language.ClassManagement.kClassEdited);
                    _this5.$location.path("/classes/");
                  });
                }, function () {
                  processing.close();
                });
              }
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this6 = this;
      this.$appLoader.show();
      this.dataReady = false;
      this.$longWork.execute(this.init()).then(function () {
        _this6.$alerts.success(_this6.language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "editChiefs",
    value: function editChiefs() {
      var _this7 = this;
      var modalInstance = this.$uibModal.open({
        template: _classchiefsedit.ClassChiefsEditComponent.template,
        controller: _classchiefsedit.ClassChiefsEditComponent.controller,
        controllerAs: _classchiefsedit.ClassChiefsEditComponent.controllerAs,
        resolve: {
          editClass: function editClass() {
            return _this7["class"];
          }
        }
      });
      modalInstance.result.then(function () {
        var work = _this7.init();
        _this7.$longWork.execute(work);
      });
    }
  }, {
    key: "changedToIup",
    value: function changedToIup() {
      var _this8 = this;
      if (this.isSchool && !this["class"].isIup && this["class"].iup) {
        if (this.yearTransitionState) {
          this.$dialogs.message(this.language.ClassManagement.kWarnChangeCurrPlanNotAvailableWhenFutureYearExists);
          return Promise.reject();
        } else {
          return this.$dialogs.confirm(this.language.ClassManagement.kConfirmChangeCurrPlanForClass1).then(function () {
            return _this8.$dialogs.confirm(_this8.language.Generic.ClassManagement.kConfirmChangeCurrPlanForClass2);
          });
        }
      }
      return Promise.resolve();
    }
  }, {
    key: "changeCurriculum",
    value: function changeCurriculum() {
      if (this.isSchool) {
        this["class"].isIup = this["class"].iup;
      }
    }
  }, {
    key: "validateProfile",
    value: function validateProfile() {
      var _this9 = this;
      var profile = this.profiles.find(function (pr) {
        return pr.id == _this9["class"].profileId;
      });
      if (!profile || !this["class"].grade) return true;
      return profile.grades.findIndex(function (g) {
        return g.id == _this9["class"].grade.id;
      }) > -1;
    }
  }, {
    key: "validGrade",
    value: function validGrade() {
      var _this10 = this;
      var grade = this.grades.find(function (g) {
        return g.id == _this10["class"].grade.id;
      });
      return _.some(this.profiles, function (pr) {
        return pr.grades.findIndex(function (g) {
          return g.id == grade.id;
        }) > -1;
      });
    }
  }, {
    key: "toggleClassForm",
    value: function toggleClassForm(classForm) {
      this.classForms.select(classForm.id);
    }
  }, {
    key: "isClassForm",
    value: function isClassForm(classForm) {
      return this.classForms.isSelected(classForm.id);
    }
  }, {
    key: "changeClassChief",
    value: function changeClassChief() {
      if (this.classChief) {
        this.noContingent = false;
      }
    }
  }, {
    key: "toggleNoContingent",
    value: function toggleNoContingent() {
      this.noContingent = !this.noContingent;
      if (this.noContingent) {
        this.classChief = null;
      }
    }
  }, {
    key: "toggleVacation",
    value: function toggleVacation(vacation) {
      this.classVacations.select(vacation.id);
    }
  }, {
    key: "isClassVacation",
    value: function isClassVacation(vacation) {
      return this.classVacations.isSelected(vacation.id);
    }
  }, {
    key: "toggleDouProgram",
    value: function toggleDouProgram(douProgram) {
      this.douGroupPrograms.select(douProgram.id);
    }
  }, {
    key: "isCheckedDouProgram",
    value: function isCheckedDouProgram(douProgram) {
      return this.douGroupPrograms.isSelected(douProgram.id);
    }
  }, {
    key: "isDisabledDouProgram",
    value: function isDisabledDouProgram(douProgram) {
      var preClass = this["class"];
      if (douProgram.id == _classes.DouProgram.Common) {
        if (preClass.douGroupType.id != _classes.DouGroupType.FamilyPreschool) {
          if (preClass.douGroupType.id == _classes.DouGroupType.Combined) {
            return this.isCheckedDouProgram(douProgram) && !this.douGroupPrograms.isSelected(_classes.DouProgram.Adapted);
          }
          return true;
        }
      }
      if (douProgram.id == _classes.DouProgram.Adapted) {
        if (preClass.douGroupType.id == _classes.DouGroupType.Compensating || preClass.douGroupType.id == _classes.DouGroupType.ForYoungChildren || preClass.douGroupType.id == _classes.DouGroupType.CareAndMaintenance) {
          return true;
        }
        if (preClass.douGroupType.id == _classes.DouGroupType.Combined) {
          return this.isCheckedDouProgram(douProgram) && !this.douGroupPrograms.isSelected(_classes.DouProgram.Common);
        }
      }
      return false;
    }
  }, {
    key: "chooseDefaultDouProgram",
    value: function chooseDefaultDouProgram() {
      var _this11 = this;
      var groupType = this["class"].douGroupType.id;
      var commonDouProgram = this.douPrograms.find(function (x) {
        return x.id == _classes.DouProgram.Common;
      });
      var adaptedDouProgram = this.douPrograms.find(function (x) {
        return x.id == _classes.DouProgram.Adapted;
      });
      // текущий выбор
      var selected = this.douGroupPrograms.selected;
      // почистить выбранные программы
      this.douGroupPrograms.dropSelect();
      if (groupType == _classes.DouGroupType.General || groupType == _classes.DouGroupType.Wellness || groupType == _classes.DouGroupType.Combined) {
        this.toggleDouProgram(commonDouProgram);
      }
      if (groupType == _classes.DouGroupType.Compensating) {
        this.toggleDouProgram(adaptedDouProgram);
      }
      if (this.isDisabledDouProgram(commonDouProgram)) {
        selected = selected.filter(function (x) {
          return x != _classes.DouProgram.Common;
        });
      }
      if (this.isDisabledDouProgram(adaptedDouProgram)) {
        selected = selected.filter(function (x) {
          return x != _classes.DouProgram.Adapted;
        });
      }
      selected.forEach(function (x) {
        return _this11.douGroupPrograms.select(x);
      });
    }
  }, {
    key: "seatsForShortMaxError",
    value: function seatsForShortMaxError() {
      return "Пожалуйста, введите число, меньшее или равное 35.";
    }
  }, {
    key: "seatsForShortRequiredError",
    value: function seatsForShortRequiredError() {
      return "Это поле необходимо заполнить.";
    }
  }, {
    key: "digitsError",
    value: function digitsError() {
      return "Пожалуйста, вводите только цифры.";
    }
  }, {
    key: "plannedOccupancyMinError",
    value: function plannedOccupancyMinError() {
      return "Пожалуйста, введите число, большее или равное 1.";
    }
  }, {
    key: "plannedOccupancyMaxError",
    value: function plannedOccupancyMaxError() {
      return "Пожалуйста, введите число, меньшее или равное 99.";
    }
  }, {
    key: "seatsForTransferMinError",
    value: function seatsForTransferMinError() {
      return "Пожалуйста, введите число, большее или равное 0.";
    }
  }, {
    key: "roomIdError",
    value: function roomIdError() {
      return this.language.Generic.ClassManagement.kRoomGroupWarn1;
    }
  }, {
    key: "stayRegimeIdError",
    value: function stayRegimeIdError() {
      return this.language.Generic.ClassManagement.kRoomGroupWarn2;
    }
  }, {
    key: "profileIdError",
    value: function profileIdError() {
      return this.language.ClassManagement.kWarnProfileId;
    }
  }, {
    key: "gradeNoProfilesError",
    value: function gradeNoProfilesError() {
      return this.language.ClassManagement.kWarnGradeNoProfiles;
    }
  }]);
  return ClassesEditController;
}();
var ClassEditComponent = {
  controller: ClassesEditController,
  controllerAs: "$ctrl",
  selector: "classEdit",
  templateUrl: "/static/dist/app/school/classmanagement/classes/edit/classedit.component.html",
  bindings: {
    wizard: "<?"
  }
};
exports.ClassEditComponent = ClassEditComponent;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddProgramStatus = void 0;
var AddProgramStatus;
exports.AddProgramStatus = AddProgramStatus;
(function (AddProgramStatus) {
  AddProgramStatus[AddProgramStatus["ActiveProgram"] = 1] = "ActiveProgram";
  AddProgramStatus[AddProgramStatus["DraftProgram"] = 2] = "DraftProgram";
  AddProgramStatus[AddProgramStatus["ArchiveProgram"] = 3] = "ArchiveProgram";
  AddProgramStatus[AddProgramStatus["PublicationProgram"] = 4] = "PublicationProgram";
})(AddProgramStatus || (exports.AddProgramStatus = AddProgramStatus = {}));

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassChiefsEditComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ClassChiefsEditController = /*#__PURE__*/function () {
  ClassChiefsEditController.$inject = ["classesRepository", "$dialogs", "$uibModalInstance", "$q", "language", "editClass"];
  /*@ngInject*/
  function ClassChiefsEditController(classesRepository, $dialogs, $uibModalInstance, $q, language, editClass) {
    var _this = this;
    _classCallCheck(this, ClassChiefsEditController);
    this.classesRepository = classesRepository;
    this.$dialogs = $dialogs;
    this.$uibModalInstance = $uibModalInstance;
    this.$q = $q;
    this.language = language;
    this.editClass = editClass;
    this.buttons = [{
      title: this.language.Generic.Buttons.kSave,
      action: function action() {
        return _this.save();
      },
      icon: "glyphicon glyphicon-floppy-save"
    }, {
      title: this.language.Generic.Buttons.kReset,
      action: function action() {
        return _this.reset();
      },
      icon: "glyphicon glyphicon-repeat"
    }];
    this.header = this.language.ClassManagement.kClassChiefs;
    this.load();
  }
  _createClass(ClassChiefsEditController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var getTeacherListAndClassChiefs = this.classesRepository.getTeacherListAndClassChiefs(this.editClass.id).then(function (teachers) {
        _this2.teachers = teachers;
      });
      this.$q.when(getTeacherListAndClassChiefs).then(function () {
        _this2.onReady();
      });
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this3 = this;
      this.teachers.forEach(function (teacher) {
        var _a;
        teacher.checked = (_a = _this3.editClass.chiefs) === null || _a === void 0 ? void 0 : _a.some(function (x) {
          return x.id == teacher.id;
        });
      });
      this.dataReady = true;
    }
  }, {
    key: "toggleClick",
    value: function toggleClick(teacher) {
      teacher.checked = !teacher.checked;
    }
  }, {
    key: "save",
    value: function save() {
      var _this4 = this;
      var chiefs = this.teachers.filter(function (x) {
        return x.checked;
      }).map(function (x) {
        return x.id;
      });
      if (!chiefs || !chiefs.length) {
        this.$dialogs.message(this.language.ClassManagement.kMsgMustSelectClassChiefs);
        return;
      }
      this.classesRepository.setClassChiefs(this.editClass.id, chiefs).then(function () {
        _this4.$uibModalInstance.close();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.dataReady = false;
      this.load();
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return ClassChiefsEditController;
}();
var ClassChiefsEditComponent = {
  controller: ClassChiefsEditController,
  controllerAs: "$ctrl",
  template: "\n\t\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t\t<div class=\"form-horizontal form-xs\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<span class=\"content-page-preloader\" id=\"preloader\" ng-hide=\"$ctrl.dataReady\">\n\t\t\t\t\t\t\t<span>{{$ctrl.language.Generic.Movement.kPleaseWait}}</span>\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<div ng-if=\"$ctrl.dataReady\" ng-repeat=\"teacher in $ctrl.teachers\" class=\"checkbox\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-checked=\"teacher.checked\" ng-click=\"$ctrl.toggleClick(teacher)\">{{teacher.name}}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ns-modal>"
};
exports.ClassChiefsEditComponent = ClassChiefsEditComponent;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesRepository = void 0;
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRepository = exports.ClassExpandProp = void 0;
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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassListController = exports.ClassListComponent = void 0;
var _classes = __webpack_require__(32);
var _common = __webpack_require__(25);
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _selectable = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ClassListController = /*#__PURE__*/function () {
  ClassListController.$inject = ["pageContext", "appContext", "$appLoader", "language", "$scope", "$dialogs", "$alerts", "$longWork", "$location", "navigationService", "profilesRepository", "settingsProvider", "classesRepository", "subjectsRepository", "contextService", "curriculumRepository", "addProgramsRepository", "greenTextService", "$sce"];
  /*@ngInject*/
  function ClassListController(pageContext, appContext, $appLoader, language, $scope, $dialogs, $alerts, $longWork, $location, navigationService, profilesRepository, settingsProvider, classesRepository, subjectsRepository, contextService, curriculumRepository, addProgramsRepository, greenTextService, $sce) {
    var _this = this;
    _classCallCheck(this, ClassListController);
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.language = language;
    this.$scope = $scope;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.$location = $location;
    this.navigationService = navigationService;
    this.profilesRepository = profilesRepository;
    this.settingsProvider = settingsProvider;
    this.classesRepository = classesRepository;
    this.subjectsRepository = subjectsRepository;
    this.contextService = contextService;
    this.curriculumRepository = curriculumRepository;
    this.addProgramsRepository = addProgramsRepository;
    this.greenTextService = greenTextService;
    this.$sce = $sce;
    this.unbindedGroups = [];
    this.classProfiles = {};
    this.hasHanging = true;
    this.programs = null;
    this.pageContext.clear();
    this.pageContext.title = this.language.ClassManagement.kTitleClasses;
    this.selection = new _selectable["default"]();
    var promises = [];
    this.readOnly = appContext.readOnly || !this.appContext.hasRights([Rights.arClassMgmCreateClass]);
    this.canView = !appContext.readOnly && this.appContext.hasRights([Rights.arClassMgmViewClassSubjAll]);
    this.isPreSchool = appContext.funcType == _common.FuncType.preSchool;
    this.isSchool = appContext.funcType == _common.FuncType.school;
    this.isAddSchool = appContext.funcType == _common.FuncType.addSchool;
    this.canEditTermTypes = !this.isPreSchool && this.appContext.hasRights([Rights.arEditSchoolTermTypes]);
    this.flags = {
      enableStudentsDataQuality: false,
      isRegionEMForSchool: false
    };
    var getYearsReady = this.contextService.getYears(1).then(function (lastYears) {
      var _a;
      _this.isFuture = ((_a = lastYears.find(function (y) {
        return y.closed == "Future";
      })) === null || _a === void 0 ? void 0 : _a.id) == parseInt(_this.appContext.yearId);
      if (_this.isFuture) {
        _this.futureWarning = _this.language.Generic.SetupSchoolCalendar.kWarnFutureClasses.format(_this.language.Common.kClass_es, _this.language.Common.kClassChief_es, _this.language.SchoolSettings.kGrade_Bounds.toLowerCase(), _this.isPreSchool ? "\n" + _this.language.Generic.SetupSchoolCalendar.kAddWarnFutureClassesPreSchool : "");
      }
    });
    promises.push(getYearsReady);
    var getComponentsReady = this.curriculumRepository.getComponents(false).then(function (components) {
      _this.hasComponents = components.length > 0;
    });
    promises.push(getComponentsReady);
    if (this.isAddSchool) {
      var getAddProgramdReady = this.addProgramsRepository.getAll().then(function (programs) {
        _this.programs = programs;
      });
      promises.push(getAddProgramdReady);
    }
    promises.push(this.init());
    promises.push(this.load());
    Promise.all(promises).then(function () {
      _this.initPageContext();
      _this.canView = _this.canView && !_this.wizard;
      _this.hasHanging = _this.hasHanging && !_this.wizard;
      _this.$appLoader.hide();
    });
  }
  _createClass(ClassListController, [{
    key: "initPageContext",
    value: function initPageContext() {
      if (this.wizard) {
        var wizardStep = this.isPreSchool ? "7. " : " 9. ";
        this.pageContext.title = this.$sce.trustAsHtml("".concat(this.language.Generic.Wizard.kWizard, " -> ").concat(this.greenTextService.greenText(this.language.Generic.Wizard.kStrStep + wizardStep + this.language.SetupSchoolCalendar.kWizardTitleClasses)));
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.selection.dropSelect();
      var promises = [];
      var withTermTypeNotDefinedReady = this.profilesRepository.withTermTypeNotDefined().then(function (data) {
        _this2.withTermTypeNotDefined = data.length != 0;
        if (_this2.withTermTypeNotDefined) {
          _this2.readOnly = true;
        }
      });
      var hangingSubjectsReady = this.subjectsRepository.getHangingSubjects(true).then(function (hangingSubjects) {
        _this2.hangingSubjects = hangingSubjects;
        _this2.hasHanging = _this2.hangingSubjects && _this2.hangingSubjects.length > 0;
      });
      promises.push(withTermTypeNotDefinedReady);
      promises.push(hangingSubjectsReady);
      promises.push(this.initFlags());
      this.profilesReady = this.profilesRepository.getProfiles().then(function (profiles) {
        _this2.profiles = profiles;
      });
      promises.push(this.profilesReady);
      if (this.isAddSchool) {
        this.initFilterPanel();
      }
      return Promise.all(promises);
    }
  }, {
    key: "load",
    value: function load(profileId, progDirectionId) {
      var _this3 = this;
      return this.profilesReady.then(function () {
        var getClassesArgs = {
          profileId: profileId,
          directionId: progDirectionId,
          expand: [_classes.ClassExpandProp.chiefs, _classes.ClassExpandProp.using, _classes.ClassExpandProp.room, _classes.ClassExpandProp.educPrograms]
        };
        return _this3.classesRepository.getYearClasses(getClassesArgs);
      }).then(function (classes) {
        _this3.classes = classes;
      }).then(function () {
        _this3.onReady();
      });
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this4 = this;
      this.classes.forEach(function (cls) {
        _this4.classProfiles[cls.id] = _this4.profiles.find(function (p) {
          return p.id == cls.profileId;
        });
      });
      if (this.isPreSchool && this.checkClasses()) {
        this.unbindedGroups = this.getUnbindedGroups();
      }
      this.dataReady = true;
      this.$scope.$applyAsync();
    }
  }, {
    key: "initFlags",
    value: function initFlags() {
      var _this5 = this;
      var promises = [];
      var getIsRegionEMForSchool = this.settingsProvider.ServerSettings.SystemSettings.IsRegionEMForSchool().then(function (isRegionEMForSchool) {
        _this5.flags.isRegionEMForSchool = isRegionEMForSchool;
      });
      promises.push(getIsRegionEMForSchool);
      var getEnableStudentsDataQuality = this.settingsProvider.ServerSettings.SystemSettings.EnableStudentsDataQuality().then(function (enableStudentsDataQuality) {
        _this5.flags.enableStudentsDataQuality = enableStudentsDataQuality;
      });
      promises.push(getEnableStudentsDataQuality);
      return Promise.all(promises);
    }
  }, {
    key: "checkClasses",
    value: function checkClasses() {
      return this.classes && this.classes.length > 0;
    }
  }, {
    key: "getUnbindedGroups",
    value: function getUnbindedGroups() {
      return this.classes.filter(function (x) {
        return !x.room;
      });
    }
  }, {
    key: "hasUnbindedGroups",
    value: function hasUnbindedGroups() {
      return this.unbindedGroups && this.unbindedGroups.length > 0;
    }
  }, {
    key: "hasNoContingent",
    value: function hasNoContingent() {
      var _this6 = this;
      return this.classes.some(function (x) {
        return _this6.noContingent(x);
      });
    }
  }, {
    key: "hasNoStudents",
    value: function hasNoStudents() {
      return this.classes.some(function (x) {
        return !x.using;
      });
    }
  }, {
    key: "noContingent",
    value: function noContingent(dto) {
      return !dto.chiefs || !dto.chiefs.length;
    }
  }, {
    key: "initFilterPanel",
    value: function initFilterPanel() {
      var _this7 = this;
      this.filterPanelSettings = {
        url: "/webapi/classes/filters",
        events: {
          ready: function ready(values) {
            var profileId = values.profileId;
            var directionId = values.directionId;
            _this7.load(profileId, directionId);
          },
          emptyChoice: function emptyChoice() {
            _this7.load(-1, -1);
            _this7.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "add",
    value: function add() {
      this.$location.path("/classes/new");
    }
  }, {
    key: "addTeachers",
    value: function addTeachers(subjectId) {
      var data = {
        SBJID: subjectId,
        FLAG: "NEWTEACHERS"
      };
      this.navigationService.navigateTo("/asp/SetupSchool/Calendar/EditSubjectTeachers.asp", data);
    }
  }, {
    key: "edit",
    value: function edit(cls) {
      this.$location.path("/classes/".concat(cls.id));
    }
  }, {
    key: "drawProfiles",
    value: function drawProfiles() {
      return this.profiles && this.profiles.length && this.profiles.length >= 2;
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this8 = this;
      if (!this.selection.selected) {
        this.$dialogs.message(this.language.Generic.ClassManagement.kMsgNoSelectedClasses + this.language.Common.kClass_es);
        return;
      }
      var id = this.selection.item.id;
      this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        _this8.$longWork.show();
        return _this8.classesRepository["delete"]([id]);
      }).then(function () {
        _this8.$alerts.success(_this8.language.ClassManagement.kClassesDeleted);
        var promises = [];
        promises.push(_this8.init());
        promises.push(_this8.load());
        return Promise.all(promises);
      }).then(function () {
        _this8.$longWork.close();
      });
    }
  }, {
    key: "editClassSubjects",
    value: function editClassSubjects() {
      var classId = this.selection.item.iup ? this.selection.item.grade.id + "_1" : this.selection.item.id + "_0";
      this.navigationService.navigateTo("/subjectgroups/?classId=".concat(classId));
    }
  }, {
    key: "editTermTypes",
    value: function editTermTypes() {
      if (this.wizard) {
        this.navigationService.navigateTo("/termtypes");
      } else {
        this.navigationService.navigateTo('/angular/school/calendar/termtypes/grades/');
      }
    }
  }, {
    key: "editRooms",
    value: function editRooms() {
      this.navigationService.navigateTo("/rooms");
    }
  }, {
    key: "setRelays",
    value: function setRelays() {
      this.navigationService.navigateTo("/classes-relays");
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
  }, {
    key: "viewRelaysBtn",
    value: function viewRelaysBtn() {
      return !this.isPreSchool && !this.appContext.readOnly && !this.flags.isRegionEMForSchool;
    }
  }, {
    key: "viewRoomsBtn",
    value: function viewRoomsBtn() {
      return this.isPreSchool && this.appContext.hasRights([Rights.arCalendarCreateCalendar]);
    }
  }, {
    key: "notExistsAddPrograms",
    value: function notExistsAddPrograms() {
      return this.isAddSchool && (!this.programs || !this.programs.length);
    }
  }]);
  return ClassListController;
}();
exports.ClassListController = ClassListController;
var ClassListComponent = {
  selector: "classes",
  controller: ClassListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/classes/list/classlist.component.html",
  bindings: {
    wizard: "<?"
  }
};
exports.ClassListComponent = ClassListComponent;

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

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolAddressRepository = void 0;
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
var SchoolAddressRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SchoolAddressRepository, _BaseRepository);
  var _super = _createSuper(SchoolAddressRepository);
  function SchoolAddressRepository() {
    _classCallCheck(this, SchoolAddressRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolAddressRepository, [{
    key: "getSchoolAddress",
    value: function getSchoolAddress(schoolId, addressType) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId), {
        params: {
          addressType: addressType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressBase",
    value: function getSchoolAddressBase(schoolId) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId, "/base")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setSchoolAddress",
    value: function setSchoolAddress(schoolId, address) {
      return this.$http.post("/webapi/addresses/schools/".concat(schoolId), address).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeSchoolAddress",
    value: function removeSchoolAddress(schoolId, addressType) {
      return this.$http["delete"]("/webapi/addresses/schools/".concat(schoolId), {
        params: {
          addressType: addressType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return SchoolAddressRepository;
}(_baseRepository.BaseRepository);
exports.SchoolAddressRepository = SchoolAddressRepository;

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupListComponent = void 0;
var _subjectGroups = __webpack_require__(28);
var _common = __webpack_require__(25);
var _classes = __webpack_require__(30);
var _subjectGroupListCurriculum = __webpack_require__(325);
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ViewType;
(function (ViewType) {
  ViewType[ViewType["ByTeachers"] = 0] = "ByTeachers";
  ViewType[ViewType["ByClasses"] = 1] = "ByClasses";
})(ViewType || (ViewType = {}));
var SubjectGroupListController = /*#__PURE__*/function () {
  SubjectGroupListController.$inject = ["$scope", "subjectGroupRepository", "curriculumPlanRepository", "$longWork", "termsRepository", "usersRepository", "pageContext", "appContext", "$appLoader", "$alerts", "$dialogs", "language", "changeTracker", "$location", "$http", "sgMergeService", "taskQueueService"];
  /*@ngInject*/
  function SubjectGroupListController($scope, subjectGroupRepository, curriculumPlanRepository, $longWork, termsRepository, usersRepository, pageContext, appContext, $appLoader, $alerts, $dialogs, language, changeTracker, $location, $http, sgMergeService, taskQueueService) {
    var _this = this;
    _classCallCheck(this, SubjectGroupListController);
    this.$scope = $scope;
    this.subjectGroupRepository = subjectGroupRepository;
    this.curriculumPlanRepository = curriculumPlanRepository;
    this.$longWork = $longWork;
    this.termsRepository = termsRepository;
    this.usersRepository = usersRepository;
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.language = language;
    this.changeTracker = changeTracker;
    this.$location = $location;
    this.$http = $http;
    this.sgMergeService = sgMergeService;
    this.taskQueueService = taskQueueService;
    this.state = {
      dataReady: false,
      emptyData: false,
      filterChanged: false,
      showEmptyMessage: false,
      readOnly: true
    };
    this.subjectGroupsTerms = {};
    this.sgTermsWithTotalHours = [];
    var search = this.$location.search();
    if (search.extracurricular) {
      this.extraCurricular = true;
      this.pageContext.title = this.language.Generic.ClassManagement.kEaSubjectGroups;
    } else {
      this.extraCurricular = false;
      this.pageContext.title = "Предметы";
    }
    this.multipleTeachers = this.appContext.funcType == _common.FuncType.addSchool;
    this.initFilterPanel();
    this.readOnly = this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arClassMgmEditSubjects]);
    this.pageContext.parent = null;
    this.loadGradingSystems = this.subjectGroupRepository.getGradingSystems().then(function (gradingSystems) {
      _this.gradingSystems = gradingSystems;
    });
    this.loadTerms = this.termsRepository.getTerms().then(function (terms) {
      return _this.terms = terms;
    });
    this.loadTeacherSubjects = this.usersRepository.getTeacherList(null, null, true).then(function (teachers) {
      _this.teachers = teachers;
      _this.initSubjectTeachers();
    });
    this.curriculumService = new _subjectGroupListCurriculum.CurriculumService(curriculumPlanRepository);
  }
  _createClass(SubjectGroupListController, [{
    key: "initFilterPanel",
    value: function initFilterPanel() {
      var _this2 = this;
      var filterPanelUrl = "/webapi/subjectgroups/filter";
      if (this.extraCurricular) {
        filterPanelUrl += "?extraActivity=true";
      }
      var fpValues = this.getForceFpValues();
      this.filterPanelSettings = {
        url: filterPanelUrl,
        values: fpValues,
        events: {
          ready: function ready(values) {
            if (!_this2.$appLoader.displayed) {
              _this2.$longWork.show();
            }
            _this2.load().then(function () {
              _this2.$appLoader.hide();
              _this2.$longWork.close();
              _this2.onReady(values);
              _this2.state.dataReady = true;
              _this2.$scope.$applyAsync();
            });
          },
          emptyChoice: function emptyChoice(emptyFilter) {
            _this2.$appLoader.hide();
            var values = emptyFilter.panel.getValues() || {};
            _this2.subjectGroups = [];
            _this2.onReady(values);
            _this2.state.emptyData = true;
            _this2.state.dataReady = false;
            _this2.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "onReady",
    value: function onReady(fpValues) {
      this.state.showEmptyMessage = false;
      this.state.filterChanged = true;
      // определяет признак фильтрации предмето-групп "По классам" и доступность кнопки Добавить
      this.classView = fpValues.ViewType === "1" || !fpValues.ViewType;
      // признак наличия предмето-групп
      this.noSubjectGroups = !this.subjectGroups || !this.subjectGroups.length;
      this.hasSGsWithoutStudents = this.subjectGroups.some(function (sg) {
        return sg.useInfo && !sg.useInfo.hasStudents;
      });
    }
  }, {
    key: "getForceFpValues",
    value: function getForceFpValues() {
      var params = this.$location.search();
      if (params.classId) {
        return {
          ViewType: ViewType.ByClasses.toString(),
          PCLID_IUP: params.classId
        };
      }
      if (params.teacherId) {
        return {
          ViewType: ViewType.ByTeachers.toString(),
          TID: params.teacherId
        };
      }
      return null;
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      this.state.dataReady = false;
      var values = this.filterPanel.getValues();
      this.viewType = values.ViewType;
      var complexId = values.PCLID_IUP;
      if (complexId) {
        var iupClassId = new _classes.IupClassId(complexId);
        this.classId = iupClassId.classId;
        this.iupGrade = iupClassId.grade;
      } else {
        this.classId = null;
        this.iupGrade = null;
      }
      var promises = [];
      promises.push(this.loadGradingSystems);
      promises.push(this.loadTeacherSubjects);
      promises.push(this.loadTerms);
      this.subjectGroupsReady = this.loadSubjectGroups();
      promises.push(this.subjectGroupsReady);
      promises.push(this.loadHours());
      var existsIupClassesReady = this.loadExistsIupClasses();
      promises.push(existsIupClassesReady);
      var ready = Promise.all(promises);
      return ready.then(function () {
        _this3.prepareSubjectGroupTerms();
        _this3.setSgTermsWithTotalHours();
        _this3.changeTracker.clearDataChanges();
      });
    }
  }, {
    key: "setClassFilter",
    value: function setClassFilter(sg) {
      var csg = sg;
      var iupClassId;
      if (csg && csg["class"]) {
        iupClassId = csg["class"].id + "_0";
      } else {
        iupClassId = csg.grades[0] + "_1";
      }
      var fpValues = [{
        filterId: "ViewType",
        filterValue: ViewType.ByClasses.toString()
      }, {
        filterId: "PCLID_IUP",
        filterValue: iupClassId
      }];
      this.filterPanel.reInit(fpValues);
    }
  }, {
    key: "loadExistsIupClasses",
    value: function loadExistsIupClasses() {
      var _this4 = this;
      var url = "/webapi/context/session";
      var config = {
        params: {
          key: "IUPCLASSES"
        }
      };
      return this.$http.get(url, config).then(function (response) {
        _this4.existsIupClasses = response.data;
      });
    }
  }, {
    key: "loadSubjectGroups",
    value: function loadSubjectGroups() {
      var _this5 = this;
      var values = this.filterPanel.getValues();
      var sgFilter = {
        classId: this.classId,
        iupGrade: this.iupGrade,
        extraCurricular: this.extraCurricular
      };
      if (values.SBJID) {
        sgFilter.subjectId = values.SBJID;
      }
      if (values.TID) {
        sgFilter.teacherId = parseInt(values.TID);
      }
      if (values.DIRECTION && values.DIRECTION > 0) {
        sgFilter.eaDirectionId = parseInt(values.DIRECTION);
      }
      return this.subjectGroupRepository.getSubjectgroups(sgFilter, false, [_subjectGroups.SubjectGroupExpandData.Terms, _subjectGroups.SubjectGroupExpandData.UseInfo]).then(function (subjectGroups) {
        _this5.subjectGroups = subjectGroups;
        if (!_this5.multipleTeachers) {
          _this5.subjectGroups.forEach(function (sg) {
            return sg.teacher = sg.teachers && sg.teachers.length ? sg.teachers[0] : null;
          });
        }
      });
    }
  }, {
    key: "loadHours",
    value: function loadHours() {
      var _this6 = this;
      if (this.viewType == ViewType.ByClasses) {
        if (this.classId) {
          return this.curriculumService.initByClassId(this.classId);
        } else {
          return this.curriculumService.initByIupGrade(this.iupGrade);
        }
      }
      return this.subjectGroupsReady.then(function () {
        return _this6.curriculumService.initBySubjectgroups(_this6.subjectGroups);
      });
    }
  }, {
    key: "getSgTerms",
    value: function getSgTerms(sgId) {
      var ret = this.subjectGroupsTerms[sgId];
      return ret;
    }
  }, {
    key: "getPreparedSgTerm",
    value: function getPreparedSgTerm(sgTerm) {
      var hours = Number(sgTerm.hours);
      if (Number.isNaN(hours) || !hours) {
        hours = 0;
      }
      return {
        termName: sgTerm.termName,
        hours: hours
      };
    }
  }, {
    key: "setSgTermsWithTotalHours",
    value: function setSgTermsWithTotalHours() {
      var _this7 = this;
      var sgTermsHoursResult = Object.keys(this.subjectGroupsTerms).map(function (key) {
        return _this7.subjectGroupsTerms[key];
      }).reduce(function (result, sgTerms) {
        sgTerms.forEach(function (sgTerm) {
          var termId = sgTerm.termId;
          var preparedSgTerm = _this7.getPreparedSgTerm(sgTerm);
          var existingSgTerm = result[termId];
          if (existingSgTerm) {
            existingSgTerm.hours += preparedSgTerm.hours;
          } else {
            result[termId] = preparedSgTerm;
          }
        });
        return result;
      }, {});
      this.sgTermsWithTotalHours = Object.values(sgTermsHoursResult);
    }
  }, {
    key: "getGradingSysName",
    value: function getGradingSysName(gradingSysKey) {
      if (this.gradingSystems) {
        var gradingSys = this.gradingSystems.find(function (x) {
          return x.key === gradingSysKey;
        }) || this.gradingSystems.find(Boolean);
        return gradingSys.name;
      } else {
        return "";
      }
    }
  }, {
    key: "canEditGradingSys",
    value: function canEditGradingSys(sg) {
      return !this.readOnly && this.viewType == ViewType.ByClasses && sg.useInfo && !sg.useInfo.hasTotals;
    }
  }, {
    key: "canDelete",
    value: function canDelete(sg) {
      return sg.useInfo && !(sg.useInfo.hasAttendances || sg.useInfo.hasResults || sg.useInfo.hasResultsMonitoring || sg.useInfo.hasTestTaskResults || sg.useInfo.hasTotals);
    }
  }, {
    key: "canMerge",
    value: function canMerge() {
      var rlAdmin = 1;
      return this.state.dataReady && this.viewType == ViewType.ByTeachers && this.existsIupClasses && this.subjectGroups.some(function (sg) {
        return sg.iup;
      }) && this.appContext.hasAnyRight([Rights.arClassMgmEditSubjects]) && !this.noSubjectGroups && this.appContext.hasRole(rlAdmin);
    }
  }, {
    key: "merge",
    value: function merge() {
      var teacherId = parseInt(this.filterPanel.getValues().TID);
      this.sgMergeService.execute(teacherId);
    }
  }, {
    key: "prepareSubjectGroupTerms",
    value: function prepareSubjectGroupTerms() {
      var _this8 = this;
      this.subjectGroupsTerms = {};
      if (!this.terms) {
        return;
      }
      this.subjectGroups.forEach(function (sg) {
        var termsWithHours = sg.terms.map(function (termId) {
          var term = _this8.terms.find(function (t) {
            return t.id == termId;
          });
          var hours = _this8.curriculumService.getSubjectGroupHours(sg, termId);
          var hoursView = hours < 0.01 ? "" : hours.toString();
          return {
            termId: term.id,
            termName: term.termName,
            hours: hoursView
          };
        });
        _this8.subjectGroupsTerms[sg.id] = termsWithHours;
      });
    }
  }, {
    key: "getSubjectGroupTeachers",
    value: function getSubjectGroupTeachers(sg) {
      if (!this.teachers || !this.teachers.length || !this.subjectTeachers) {
        return [];
      }
      return this.subjectTeachers[sg.subject.id];
    }
  }, {
    key: "initSubjectTeachers",
    value: function initSubjectTeachers() {
      if (!this.teachers) {
        this.subjectTeachers = null;
        return;
      }
      var flat = _.flatten(this.teachers.map(function (t) {
        return t.subjects.map(function (s) {
          return {
            subjectId: s.id,
            teacher: t
          };
        });
      }));
      var indexer = _.groupBy(flat, function (x) {
        return x.subjectId;
      });
      this.subjectTeachers = _.mapObject(indexer, function (x) {
        return x.map(function (g) {
          return {
            id: g.teacher.id,
            name: g.teacher.name
          };
        });
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this9 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm("Внимание! Текущие изменения будут сброшены. Продолжить?").then(function () {
          return _this9.$longWork.execute(_this9.load()).then(function () {
            _this9.state.dataReady = true;
            _this9.$dialogs.notify(_this9.language.Generic.Common.kAttention, "Данные успешно востановленны!", false);
          });
        });
      } else {
        this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.SetupSchoolUI.kDataNotModified, false);
      }
    }
  }, {
    key: "save",
    value: function save() {
      var _this10 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
        return;
      }
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return;
      }
      var updateSgInfos = this.getPreparedSubjectGroups();
      var update = this.subjectGroupRepository.updateSubjectGroups(updateSgInfos);
      this.$longWork.execute(update).then(function () {
        _this10.changeTracker.clearDataChanges();
        _this10.$alerts.success(_this10.language.Generic.Common.kDataSaved);
      });
    }
  }, {
    key: "getPreparedSubjectGroups",
    value: function getPreparedSubjectGroups() {
      var _this11 = this;
      var updateSgInfos = this.subjectGroups.map(function (subjectGroup) {
        var teachersIds = [];
        if (subjectGroup.teachers && _this11.multipleTeachers) {
          teachersIds = subjectGroup.teachers.map(function (t) {
            return t.id;
          });
        } else {
          if (!_this11.multipleTeachers && subjectGroup.teacher) {
            teachersIds = [subjectGroup.teacher.id];
          }
        }
        return {
          subjectGroupId: subjectGroup.id,
          teachersId: teachersIds,
          gradingSys: subjectGroup.gradingSys
        };
      });
      if (!updateSgInfos || !updateSgInfos.length) {
        return [];
      }
      return updateSgInfos;
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
  }, {
    key: "add",
    value: function add() {
      var _this12 = this;
      this.changeTracker.check().then(function () {
        var fpValues = _this12.filterPanel.getValues();
        var params = {};
        if (fpValues.ViewType == "0") {
          _this12.$dialogs.error("todo");
          return;
        }
        if (_this12.extraCurricular) {
          params.extracurricular = true;
          if (fpValues.TID && fpValues.TID > 0) {
            params.teacherId = fpValues.TID;
          }
          if (fpValues.DIRECTION && fpValues.DIRECTION > 0) {
            params.direction = fpValues.DIRECTION;
          }
        } else {
          var iupClassId = new _classes.IupClassId(fpValues.PCLID_IUP);
          if (iupClassId.classId) {
            params.classId = iupClassId.classId;
          } else {
            params.grade = iupClassId.grade;
          }
        }
        _this12.$location.path("/subjectgroups/new").search(params);
        _this12.$scope.$applyAsync();
      });
    }
  }, {
    key: "addModular",
    value: function addModular() {
      var _this13 = this;
      this.changeTracker.check().then(function () {
        var fpValues = _this13.filterPanel.getValues();
        var params = {
          modular: true
        };
        if (fpValues.ViewType == "0") {
          _this13.$dialogs.error("todo");
          return;
        }
        if (_this13.extraCurricular) {
          _this13.$dialogs.error("Модульные предметы не разрешены для внеурочной деятельности");
          return;
        }
        var iupClassId = new _classes.IupClassId(fpValues.PCLID_IUP);
        if (iupClassId.classId) {
          params.classId = iupClassId.classId;
        } else {
          params.grade = iupClassId.grade;
        }
        _this13.$location.path("/subjectgroups/new").search(params);
        _this13.$scope.$applyAsync();
      });
    }
  }, {
    key: "edit",
    value: function edit(sg) {
      var _this14 = this;
      this.changeTracker.check().then(function () {
        _this14.$location.path("/subjectgroups/" + sg.id);
        _this14.$scope.$applyAsync();
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this15 = this;
      var sgId = this.subjectGroups.filter(function (sg) {
        return sg.deleted;
      }).map(function (sg) {
        return sg.id;
      });
      if (!sgId || !sgId.length) {
        this.$dialogs.message(this.language.Generic.Common.kNoDelSubjects);
        return;
      }
      var delWarn = this.language.Generic.ClassManagement.kMsgDelSubject + this.language.Common.kClass_r + '. ' + this.language.Generic.Common.kMsgAreYouSure;
      this.$dialogs.confirm(delWarn).then(function () {
        var execOptions = {
          getTaskFunc: function getTaskFunc() {
            return _this15.subjectGroupRepository.removeSubjectGroups(sgId);
          },
          hint: _this15.language.Generic.Common.kProcessingInfoLetter
        };
        _this15.taskQueueService.execute(execOptions).then(function () {
          return _this15.load();
        }).then(function () {
          _this15.state.dataReady = true;
          _this15.$alerts.success(_this15.language.Generic.SetupSchoolCalendar.kWasRemoved);
        });
      });
    }
  }, {
    key: "withModular",
    value: function withModular() {
      return this.classView && !this.extraCurricular && this.appContext.funcType == 2;
    }
  }]);
  return SubjectGroupListController;
}();
var SubjectGroupListComponent = {
  controller: SubjectGroupListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/subjectGroups/list/subjectGroupList.component.html"
};
exports.SubjectGroupListComponent = SubjectGroupListComponent;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumService = void 0;
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
var CurriculumService = /*#__PURE__*/function () {
  function CurriculumService(curriculumPlanRepository) {
    _classCallCheck(this, CurriculumService);
    this.curriculumPlanRepository = curriculumPlanRepository;
  }
  _createClass(CurriculumService, [{
    key: "getSubjectGroupHours",
    value: function getSubjectGroupHours(sg, termId) {
      var csg = sg;
      if (csg && csg["class"]) {
        var curriculumHours = this.curriculumHours.filter(function (c) {
          return c.classId;
        }).filter(function (c) {
          return c.termId == termId && c.subjectId == sg.subject.id && c.classId == csg["class"].id;
        }).reduce(function (sum, c) {
          return sum + c.hours;
        }, 0);
        return curriculumHours;
      } else {
        var _curriculumHours = 0;
        if (this.checkIupCurriculumHours()) {
          _curriculumHours = this.iupCurriculumHours.filter(function (c) {
            return c.iupLevel;
          }).filter(function (c) {
            return c.termId == termId && c.subjectId == sg.subject.id && sg.iupLevel && c.iupLevel == sg.iupLevel.id && sg.grades.indexOf(c.grade) > -1;
          }).reduce(function (sum, c) {
            return sum + c.hours;
          }, 0);
        }
        return _curriculumHours;
      }
    }
  }, {
    key: "checkIupCurriculumHours",
    value: function checkIupCurriculumHours() {
      return this.iupCurriculumHours && !!this.iupCurriculumHours.length;
    }
  }, {
    key: "initByClassId",
    value: function initByClassId(classId) {
      var _this = this;
      var getArgs = {};
      getArgs.iup = false;
      getArgs.classId = [classId];
      return this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        return _this.curriculumHours = hours;
      });
    }
  }, {
    key: "initByIupGrade",
    value: function initByIupGrade(iupGrade) {
      var _this2 = this;
      var getArgs = {};
      getArgs.iup = true;
      getArgs.grade = iupGrade;
      return this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        return _this2.iupCurriculumHours = hours;
      });
    }
  }, {
    key: "initBySubjectgroups",
    value: function initBySubjectgroups(subjectGroups) {
      var curriculumHoursPromise = this.initClasssicCurriculum(subjectGroups);
      var iupHoursPromise = this.initIupCurriculum(subjectGroups);
      return Promise.all([curriculumHoursPromise, iupHoursPromise]);
    }
  }, {
    key: "mapIupSG",
    value: function mapIupSG(sg) {
      return {
        grade: sg.grades[0],
        subjectId: sg.subject.id,
        level: sg.iupLevel
      };
    }
  }, {
    key: "isIupSG",
    value: function isIupSG(sg) {
      return !sg["class"];
    }
  }, {
    key: "hasSGGrades",
    value: function hasSGGrades(sg) {
      return sg.grades && !!sg.grades.length;
    }
  }, {
    key: "isNotExtraCurriculum",
    value: function isNotExtraCurriculum(sg) {
      return !sg.extraCurricular;
    }
  }, {
    key: "initIupCurriculum",
    value: function initIupCurriculum(subjectGroups) {
      var _this3 = this;
      var iupFilters = subjectGroups.filter(this.isIupSG) // фильтрует ИУП'овские предмето-группы
      .filter(this.hasSGGrades) // фильтрует предмето-группы с параллелями
      .filter(this.isNotExtraCurriculum).map(this.mapIupSG);
      var iupGrade = iupFilters.map(function (f) {
        return f.grade;
      });
      var iupLevel = iupFilters.map(function (f) {
        return f.level.id;
      });
      var subjectId = iupFilters.map(function (f) {
        return f.subjectId;
      });
      if (iupGrade.length == 0) {
        return Promise.resolve();
      }
      var getArgs = {
        iup: true,
        grade: _toConsumableArray(new Set(iupGrade)),
        iupLevel: _toConsumableArray(new Set(iupLevel)),
        subjectId: _toConsumableArray(new Set(subjectId))
      };
      return this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        return _this3.iupCurriculumHours = hours;
      });
    }
  }, {
    key: "initClasssicCurriculum",
    value: function initClasssicCurriculum(subjectGroups) {
      var _this4 = this;
      var curriculumPlanFilters = subjectGroups.map(function (x) {
        return x;
      }).filter(function (c) {
        return c["class"];
      }).map(function (c) {
        return {
          classId: c["class"].id,
          subjectId: c.subject.id
        };
      });
      var classId = curriculumPlanFilters.map(function (f) {
        return f.classId;
      });
      var subjectId = curriculumPlanFilters.map(function (f) {
        return f.subjectId;
      });
      if (classId.length == 0) {
        return Promise.resolve();
      }
      var getArgs = {
        iup: false,
        classId: _toConsumableArray(new Set(classId)),
        subjectId: _toConsumableArray(new Set(subjectId))
      };
      return this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
        return _this4.curriculumHours = hours;
      });
    }
  }]);
  return CurriculumService;
}();
exports.CurriculumService = CurriculumService;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupEditComponent = void 0;
var _subjectGroups = __webpack_require__(28);
var _common = __webpack_require__(25);
var _subjects = __webpack_require__(214);
var _subjectSubGroupsService = __webpack_require__(327);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var SubjectGroupEditController = /*#__PURE__*/function () {
  SubjectGroupEditController.$inject = ["$scope", "subjectGroupRepository", "subjectsRepository", "classesRepository", "referencesRepository", "curriculumPlanRepository", "pageContext", "appContext", "$appLoader", "$location", "changeTracker", "language", "$alerts", "navigationService", "$longWork", "usersRepository", "$q", "$routeParams"];
  /*@ngInject*/
  function SubjectGroupEditController($scope, subjectGroupRepository, subjectsRepository, classesRepository, referencesRepository, curriculumPlanRepository, pageContext, appContext, $appLoader, $location, changeTracker, language, $alerts, navigationService, $longWork, usersRepository, $q, $routeParams) {
    _classCallCheck(this, SubjectGroupEditController);
    this.$scope = $scope;
    this.subjectGroupRepository = subjectGroupRepository;
    this.subjectsRepository = subjectsRepository;
    this.classesRepository = classesRepository;
    this.referencesRepository = referencesRepository;
    this.curriculumPlanRepository = curriculumPlanRepository;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$alerts = $alerts;
    this.navigationService = navigationService;
    this.$longWork = $longWork;
    this.usersRepository = usersRepository;
    this.$q = $q;
    this.subjectGroups = null;
    this.noSubjects = false;
    this.modules = new _multiSelectable["default"]();
    this.modulesInvalid = false;
    this.modulesInvalidMsgs = [];
    var search = $location.search();
    this.extraCurricular = search.extracurricular && true || false;
    this.modular = search.modular && true || false;
    this.pageContext.parent = {
      title: this.language.Generic.MenuFolders.kFNClassSubjects,
      href: "/subjectgroups/"
    };
    var sgIdParam = $routeParams.sgId;
    this.grade = $routeParams.grade;
    if (sgIdParam === "new") {
      this.sgId = 0;
      this.classId = search.classId;
    } else {
      this.sgId = Number(sgIdParam);
    }
    this.multipleTeachers = appContext.funcType == _common.FuncType.addSchool;
    this.initPageContext();
    this.subjectSubGroupsService = new _subjectSubGroupsService.SubjectSubGroupsService(this.subjectGroupRepository, this.language);
    this.init();
  }
  _createClass(SubjectGroupEditController, [{
    key: "initPageContext",
    value: function initPageContext() {
      if (this.extraCurricular) {
        this.showGroup = false;
        this.pageContext.parent.title = this.language.Generic.ClassManagement.kEaSubjectGroups;
        this.pageContext.parent.href = "/subjectgroups?extracurricular=true";
      }
      if (this.modular) {
        this.showGroup = true;
        this.pageContext.parent.href = "/subjectgroups";
      }
      if (this.sgId === 0) {
        if (this.extraCurricular) {
          this.pageContext.title = "".concat(this.language.Generic.Common.kAdd, " \u0433\u0440\u0443\u043F\u043F\u0443");
        } else if (this.modular) {
          this.pageContext.title = "".concat(this.language.Generic.Common.kAdd, " ").concat(this.language.Generic.ClassManagement.kModularSubjectGroup.toLowerCase());
        } else {
          this.pageContext.title = "".concat(this.language.Generic.ClassManagement.kBindSubjClass).concat(this.language.Common.kClass_v);
        }
      } else {
        if (this.extraCurricular) {
          this.pageContext.title = "".concat(this.language.Generic.Common.kEdit, " \u0433\u0440\u0443\u043F\u043F\u0443");
        } else if (this.modular) {
          this.pageContext.title = "".concat(this.language.Generic.Common.kEdit, " ").concat(this.language.Generic.ClassManagement.kModularSubjectGroup.toLowerCase());
        } else {
          this.pageContext.title = "".concat(this.language.Generic.Common.kEdit, " ").concat(this.language.Generic.Common.kSubject.toLowerCase());
        }
      }
    }
  }, {
    key: "checkNoSubjects",
    value: function checkNoSubjects() {
      this.noSubjects = !this.subjects || !this.subjects.length;
      if (this.noSubjects) {
        this.readOnly = true;
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      var prepareInitSubjectGroup = this.initSubjectGroup().then(function () {
        return _this.initSubjectGroups();
      }).then(function () {
        return _this.initSubjects();
      }).then(function () {
        var promiseArray = [_this.initTerms(), _this.initSubjectRelatedData()];
        if (_this.isIupGrade()) {
          promiseArray.push(_this.initIupGrades());
          promiseArray.push(_this.initIupLevels());
        }
        return Promise.all(promiseArray);
      });
      var promises = [prepareInitSubjectGroup];
      if (this.extraCurricular) {
        var prepareGetExtraOrgForms = this.referencesRepository.getExtraOrgForms().then(function (result) {
          _this.extraOrgForms = result;
        });
        promises.push(prepareGetExtraOrgForms);
      }
      this.$q.all(promises).then(function () {
        return _this.readyFunc();
      })["catch"](function (result) {
        if (result == "noSubjects") {
          _this.readyFunc();
        }
      });
    }
  }, {
    key: "readyFunc",
    value: function readyFunc() {
      var _this2 = this;
      if (this.isExistsCheckedTermsByAnotherTypes()) {
        this.subjectGroup.terms.every(function (trmId) {
          return _this2.terms.find(function (trm) {
            return trm.id == trmId;
          }).canRemove = true;
        });
      }
      this.dataReady = true;
      this.$appLoader.hide();
      this.$scope.$applyAsync();
    }
  }, {
    key: "initSubjectGroup",
    value: function initSubjectGroup() {
      var _this3 = this;
      if (this.sgId > 0) {
        return this.subjectGroupRepository.getSg(this.sgId, [_subjectGroups.SubjectGroupExpandData.Terms, _subjectGroups.SubjectGroupExpandData.Modules]).then(function (sg) {
          _this3.modular = sg.isModular;
          _this3.extName = sg.extName;
          if (_this3.modular || sg.extraCurricular) {
            _this3.initPageContext();
          }
          _this3.subjectGroup = sg;
          _this3.subjectId = sg.subject.id;
          var csg = sg;
          if (csg && csg["class"]) {
            _this3.classId = csg["class"].id;
          }
        });
      } else {
        this.subjectGroup = {
          id: 0,
          name: "",
          iup: false,
          teachers: [null],
          gradingSys: null,
          subject: null,
          grades: [],
          terms: [],
          iupLevel: null,
          extraCurricular: false
        };
        if (this.classId > 0) {
          return this.classesRepository.getById(this.classId).then(function (cls) {
            var csg = _this3.subjectGroup;
            csg["class"] = {
              id: cls.id,
              name: cls.name,
              grade: cls.grade.id,
              letter: cls.letter,
              funcType: _common.FuncType[cls.funcType]
            };
          });
        } else {
          if (this.extraCurricular) {
            var esg = this.subjectGroup;
            esg.extraOrgForm = null;
            esg.extraCurricular = true;
            return Promise.resolve();
          } else {
            return Promise.resolve();
          }
        }
      }
    }
  }, {
    key: "initSubjectGroups",
    value: function initSubjectGroups() {
      var _this4 = this;
      var sgFilter = {
        extraCurricular: this.extraCurricular
      };
      if (this.isIupGrade()) {
        sgFilter.iupGrade = this.grade || this.subjectGroup.grades;
      } else {
        sgFilter.classId = this.classId;
      }
      return this.subjectGroupRepository.getSubjectgroups(sgFilter).then(function (subjectGroups) {
        _this4.subjectGroups = subjectGroups;
      });
    }
  }, {
    key: "initSubjectGroupsModules",
    value: function initSubjectGroupsModules() {
      var _this5 = this;
      //для выбора доступны все ПГ кроме модульных
      this.subjectGroupModules = this.subjectGroups.filter(function (sg) {
        return !sg.isModular;
      }).filter(function (sg) {
        return !sg.modularSubjectGroup || sg.modularSubjectGroup.id == _this5.sgId;
      });
      if (!this.isIupGrade()) {
        var csg = this.subjectGroup;
        var csgModules = this.subjectGroupModules;
        if (csg.group && csg.group.id > 0) {
          //если модульный предмет делится на подгруппы то отображаем только подгруппы
          this.subjectGroupModules = csgModules.filter(function (csg) {
            var _a;
            return ((_a = csg.group) === null || _a === void 0 ? void 0 : _a.id) > 0;
          });
        } else {
          //отображаем только без подгрупп
          this.subjectGroupModules = csgModules.filter(function (csg) {
            var _a;
            return !csg.group || ((_a = csg.group) === null || _a === void 0 ? void 0 : _a.id) == 0;
          });
        }
      }
      if (this.subjectGroup.modules) {
        this.modules.items = this.subjectGroupModules.filter(function (sg) {
          return _this5.subjectGroup.modules.indexOf(sg.id) != -1;
        });
      }
    }
  }, {
    key: "validateModules",
    value: function validateModules() {
      var _this6 = this;
      if (!this.isIupGrade()) {
        this.modulesInvalid = false;
        return;
      }
      var invalid = this.modules.items.filter(function (sgm) {
        var mismatchGrade = sgm.grades.some(function (mg) {
          return _this6.subjectGroup.grades.indexOf(mg) == -1;
        });
        return mismatchGrade;
      });
      if (invalid.length > 0) {
        this.modulesInvalid = true;
        this.modulesInvalidMsgs = ["Параллели учебных модулей должны соответствовать параллелям модульного предмета"];
      } else {
        this.modulesInvalid = false;
        this.modulesInvalidMsgs = [];
      }
      return invalid;
    }
  }, {
    key: "toggleModule",
    value: function toggleModule(sg) {
      this.modules.select(sg);
      this.validateModules();
    }
  }, {
    key: "initSubjects",
    value: function initSubjects() {
      var _this7 = this;
      if (this.sgId > 0) {
        return this.subjectsRepository.getSubject(this.subjectGroup.subject.id).then(function (subject) {
          if (subject.parentSubject && subject.parentSubject.abbr) {
            subject.name = "".concat(subject.parentSubject.abbr, "/").concat(subject.name);
          }
          _this7.subjects = [subject];
          _this7.subjectGroup.subject = subject;
        });
      } else {
        var getSubjectFunc = function getSubjectFunc(subjects) {
          _this7.subjects = subjects;
          _this7.checkNoSubjects();
          if (_this7.noSubjects) {
            return Promise.reject("noSubjects");
          } else {
            _this7.subjectGroup.subject = Object.assign({}, _this7.subjects[0]);
          }
        };
        if (this.extraCurricular) {
          return this.subjectsRepository.getSubjects({
            extraCurricular: true
          }).then(getSubjectFunc);
        } else if (this.modular) {
          return this.subjectsRepository.getSubjects({
            modular: true
          }, [_subjects.SubjectExpand.Groups]).then(function (subjects) {
            var unusedSubjects = _this7.subjectSubGroupsService.getUnusedSubjects(subjects, _this7.subjectGroups, _this7.isIupGrade(), _this7.modular, _this7.sgId);
            return unusedSubjects;
          }).then(getSubjectFunc);
        } else {
          return this.subjectsRepository.getUnassignedSubjects(this.classId).then(getSubjectFunc);
        }
      }
    }
  }, {
    key: "initIupLevels",
    value: function initIupLevels() {
      var _this8 = this;
      return this.referencesRepository.getIupLevels().then(function (iupLevels) {
        _this8.iupLevels = iupLevels;
        if (!_this8.sgId && _this8.iupLevels && _this8.iupLevels.length) {
          _this8.subjectGroup.iupLevel = Object.assign({}, _this8.iupLevels[0]);
        }
      });
    }
  }, {
    key: "initIupGrades",
    value: function initIupGrades() {
      var _this9 = this;
      return this.subjectGroupRepository.getGradesForSg(this.sgId, this.extraCurricular).then(function (grades) {
        _this9.grades = grades;
        if (!_this9.sgId && _this9.grades && _this9.grades.length && !_this9.extraCurricular) {
          _this9.subjectGroup.grades = _this9.grades.map(function (gr) {
            return gr.id;
          });
        }
      });
    }
  }, {
    key: "initTerms",
    value: function initTerms() {
      var _this10 = this;
      var iupFlag = !this.extraCurricular && this.isIupGrade();
      return this.subjectGroupRepository.getTerms(this.sgId, this.classId, iupFlag).then(function (terms) {
        _this10.terms = terms;
      });
    }
  }, {
    key: "initShowGroup",
    value: function initShowGroup() {
      var _this11 = this;
      this.showGroup = false;
      if (this.isIupGrade()) {
        return Promise.resolve(false);
      }
      var csg = this.subjectGroup;
      var group = csg.group;
      if (!this.subjectGroups || !this.subjectGroup.subject || !this.subjectGroup.subject.id) {
        return Promise.resolve(false);
      }
      return this.subjectSubGroupsService.getAllowedSubGroups(this.subjectGroup.subject.id, this.subjectGroups, this.sgId, group).then(function (groups) {
        _this11.groups = groups;
        if (!_this11.sgId) {
          //создание ПГ
          if (_this11.groups && _this11.groups.length) {
            csg.group = Object.assign({}, _this11.groups[0]);
          }
          _this11.showGroup = _this11.groups && _this11.groups.length > 0;
        } else if (!group || !group.id) {
          //редактирование ПГ. без подгруппы
          if (_this11.groups && _this11.groups.length) {
            csg.group = Object.assign({}, _this11.groups.find(function (gr) {
              return gr.id == 0;
            }));
          }
          _this11.showGroup = _this11.groups && _this11.groups.length > 0;
        } else {
          //редактирование ПГ. с подгруппой
          _this11.showGroup = true;
        }
        return _this11.showGroup;
      });
    }
  }, {
    key: "getShortSubjectName",
    value: function getShortSubjectName(subject) {
      var schoolSubject = subject;
      if (schoolSubject && schoolSubject.shortName) {
        return schoolSubject.shortName;
      }
      if (schoolSubject && schoolSubject.name) {
        return schoolSubject.name;
      }
      return "";
    }
  }, {
    key: "initSubjectRelatedData",
    value: function initSubjectRelatedData() {
      var _this12 = this;
      var promises = [];
      this.subjectId = this.subjectGroup.subject.id;
      var csg = this.subjectGroup;
      if (csg && csg["class"]) {
        var getArgs = {
          classId: [csg["class"].id],
          subjectId: [csg.subject.id],
          iup: false
        };
        var initCurriculum = this.curriculumPlanRepository.getCurriculum(getArgs).then(function (hours) {
          return _this12.curriculumHours = hours;
        });
        promises.push(initCurriculum);
      }
      var initTeachers = this.initTeachers();
      var initGroups = this.initShowGroup();
      promises.push(initTeachers);
      promises.push(initGroups);
      if (this.modular) {
        var initModules = initGroups.then(function () {
          return _this12.initSubjectGroupsModules();
        });
        promises.push(initModules);
      }
      return Promise.all(promises);
    }
  }, {
    key: "toggleTerm",
    value: function toggleTerm(term) {
      if (this.isCheckedTerm(term)) {
        this.subjectGroup.terms = this.subjectGroup.terms.filter(function (termId) {
          return termId != term.id;
        });
      } else {
        this.subjectGroup.terms.push(term.id);
      }
    }
  }, {
    key: "existsCheckedTerms",
    value: function existsCheckedTerms() {
      return this.subjectGroup && this.subjectGroup.terms && this.subjectGroup.terms.length;
    }
  }, {
    key: "existsNotCanRemoveTerms",
    value: function existsNotCanRemoveTerms() {
      return this.terms && this.terms.length && this.terms.some(function (term) {
        return !term.canRemove;
      });
    }
  }, {
    key: "existsOtherTypesTerms",
    value: function existsOtherTypesTerms() {
      return this.terms && this.terms.length && _toConsumableArray(new Set(this.terms.map(function (trm) {
        return trm.termTypeId;
      }))).length > 1;
    }
  }, {
    key: "isCheckedTerm",
    value: function isCheckedTerm(term) {
      return this.subjectGroup.terms.some(function (termId) {
        return termId == term.id;
      });
    }
  }, {
    key: "disabledTermMessage",
    value: function disabledTermMessage(term) {
      var _this13 = this;
      if (!this.subjects || !this.subjects.length) {
        return "Список предметов пустой";
      }
      if (this.readOnly) {
        return "Только для чтения";
      }
      if (this.isCheckedTerm(term) && !term.canRemove) {
        return "Нельзя убрать связь: есть занятия в расписании или итоговые оценки";
      }
      if (this.modular || this.extraCurricular) {
        return "";
      }
      if (this.curriculumHours && !this.curriculumHours.some(function (h) {
        return h.termId == term.id && h.subjectId == _this13.subjectId;
      })) {
        return "Нет часов в учебном плане";
      }
      if (this.terms && this.terms.some(function (trm) {
        return trm.termTypeId != term.termTypeId && _this13.subjectGroup.terms && _this13.subjectGroup.terms.some(function (trmid) {
          return trmid == trm.id;
        });
      }) && !this.subjectGroup.terms.some(function (trmid) {
        return trmid == term.id;
      })) {
        return "Учебные периоды должны быть одного типа";
      }
      return "";
    }
  }, {
    key: "isHiddenTerm",
    value: function isHiddenTerm(term) {
      var _this14 = this;
      if (this.terms && this.terms.some(function (trm) {
        return trm.termTypeId != term.termTypeId && _this14.subjectGroup.terms && _this14.subjectGroup.terms.some(function (trmid) {
          return trmid == trm.id;
        });
      }) && !this.subjectGroup.terms.some(function (trmid) {
        return trmid == term.id;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: "isExistsCheckedTermsByAnotherTypes",
    value: function isExistsCheckedTermsByAnotherTypes() {
      var _this15 = this;
      if (this.terms && this.subjectGroup && this.subjectGroup.terms && this.subjectGroup.terms.length > 1) {
        var termTypes = this.subjectGroup.terms.map(function (trmId) {
          var _a;
          return (_a = _this15.terms.find(function (x) {
            return x.id == trmId;
          })) === null || _a === void 0 ? void 0 : _a.termTypeId;
        });
        return _toConsumableArray(new Set(termTypes)).length > 1;
      }
      return false;
    }
  }, {
    key: "toggleGrade",
    value: function toggleGrade(grade) {
      if (this.isCheckedGrade(grade)) {
        this.subjectGroup.grades = this.subjectGroup.grades.filter(function (grd) {
          return grd != grade.id;
        });
      } else {
        this.subjectGroup.grades.push(grade.id);
      }
      if (this.modular) {
        this.initSubjectGroupsModules();
        this.validateModules();
      }
    }
  }, {
    key: "isCheckedGrade",
    value: function isCheckedGrade(grade) {
      return this.subjectGroup.grades && this.subjectGroup.grades.length && this.subjectGroup.grades.some(function (grd) {
        return grd == grade.id;
      });
    }
  }, {
    key: "isDisabledGrade",
    value: function isDisabledGrade(grade) {
      return this.readOnly || this.sgId > 0 && !this.isIupGrade() || this.isCheckedGrade(grade) && !grade.canRemove;
    }
  }, {
    key: "isIupGrade",
    value: function isIupGrade() {
      return this.grade >= 0 || !this.classId || this.subjectGroup && this.subjectGroup.iup;
    }
  }, {
    key: "initTeachers",
    value: function initTeachers() {
      var _this16 = this;
      return this.subjectsRepository.getTeachers(this.subjectId, false, true).then(function (teachers) {
        _this16.teachers = teachers || [];
        // this.select2Settings.data = this.teachers.map(t => ({
        // 	id: t.id,
        // 	text: t.name,
        // 	obj: t
        // }));
        _this16.teachers = teachers.sort(function (tchr1, tchr2) {
          return tchr1.name > tchr2.name ? 1 : tchr1.name < tchr2.name ? -1 : 0;
        });
        var existsTeacher = _this16.subjectGroup.teachers[0] && _this16.subjectGroup.teachers[0].id && _this16.teachers && _this16.teachers.length && _this16.teachers.some(function (tch) {
          return tch.id == _this16.subjectGroup.teachers[0].id;
        });
        if (_this16.sgId && !existsTeacher && _this16.subjectGroup.teachers[0] && _this16.subjectGroup.teachers[0].id) {
          _this16.usersRepository.getUserInfo(_this16.subjectGroup.teachers[0].id).then(function (teacher) {
            if (teacher && teacher.id == _this16.subjectGroup.teachers[0].id) {
              var teacherInfo = {
                id: teacher.id,
                name: teacher.name
              };
              _this16.teachers.unshift(teacherInfo);
              _this16.subjectGroup.teachers[0] = Object.assign({}, teacherInfo);
            }
          });
        } else {
          if (_this16.teachers && _this16.teachers.length && !existsTeacher) {
            _this16.subjectGroup.teachers[0] = Object.assign({}, _this16.teachers[0]);
          }
        }
      });
    }
  }, {
    key: "changeSubject",
    value: function changeSubject() {
      var _this17 = this;
      var processing = this.$longWork.show();
      return this.initSubjectRelatedData().then(function () {
        _this17.$scope.$applyAsync();
        processing.close();
      });
    }
  }, {
    key: "changeGroup",
    value: function changeGroup() {
      if (this.modular) {
        this.initSubjectGroupsModules();
      }
    }
  }, {
    key: "save",
    value: function save() {
      if (this.form.$invalid || !this.subjectGroup.terms || !this.subjectGroup.terms.length || this.modulesInvalid) {
        this.form.displayErrors = true;
        return;
      }
      if (!this.multipleTeachers) {
        this.subjectGroup.teachers = [this.subjectGroup.teachers[0]];
      }
      if (this.sgId > 0) {
        this.edit();
      } else {
        this.create();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.init();
      this.changeTracker.clearDataChanges();
    }
  }, {
    key: "create",
    value: function create() {
      var _this18 = this;
      var sg = this.subjectGroup;
      var termIds = this.subjectGroup.terms;
      var data = {
        name: this.extName,
        terms: termIds,
        description: sg.comments,
        teachersId: sg.teachers.map(function (t) {
          return t.id;
        }),
        subjectId: sg.subject.id,
        classId: this.classId
      };
      if (this.isIupGrade()) {
        if (sg.iupLevel) {
          data.iupLevel = sg.iupLevel.id;
        } else {
          data.iupLevel = null;
        }
        data.grades = sg.grades;
      }
      var csg = sg;
      if (this.showGroup && csg.group && csg.group.id) {
        data.groupId = csg.group.id;
      }
      if (csg && csg["class"]) {
        data.classId = csg["class"].id;
      }
      if (this.modular) {
        data.isModular = true;
        data.modules = this.modules.items.map(function (sg) {
          return sg.id;
        });
      }
      if (this.extraCurricular) {
        var esg = this.subjectGroup;
        data.extraOrgForm = esg.extraOrgForm.id;
      }
      this.$longWork.show();
      this.subjectGroupRepository.check(this.sgId, data).then(function () {
        return _this18.subjectGroupRepository.create(data);
      }).then(function () {
        _this18.changeTracker.clearDataChanges();
        _this18.$longWork.close();
        _this18.$alerts.success("ПГ успешно создана");
        _this18.navigationService.navigateTo(_this18.pageContext.parent.href, null, null);
        _this18.$alerts.success("ПГ успешно добавлена");
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this19 = this;
      var sg = this.subjectGroup;
      var termIds = this.subjectGroup.terms;
      var data = {
        name: null,
        terms: termIds,
        description: sg.comments,
        teachersId: sg.teachers.map(function (t) {
          return t.id;
        }),
        subjectId: sg.subject.id
      };
      if (this.isIupGrade()) {
        if (sg.iupLevel) {
          data.iupLevel = sg.iupLevel.id;
        } else {
          data.iupLevel = null;
        }
        data.grades = sg.grades;
        data.name = this.extName;
      }
      if (this.modular) {
        data.modules = this.modules.items.map(function (sg) {
          return sg.id;
        });
      }
      if (this.showGroup) {
        data.groupId = this.subjectGroup.group.id;
      }
      var checkData = data;
      checkData.classId = this.classId;
      checkData.isModular = this.modular;
      if (this.extraCurricular) {
        var esg = this.subjectGroup;
        data.extraOrgForm = esg.extraOrgForm.id;
      }
      this.$longWork.show();
      this.subjectGroupRepository.check(this.sgId, checkData).then(function () {
        return _this19.subjectGroupRepository.edit(_this19.sgId, data);
      }).then(function () {
        _this19.changeTracker.clearDataChanges();
        _this19.$longWork.close();
        _this19.$alerts.success("ПГ успешно отредактирована");
        _this19.navigationService.navigateTo(_this19.pageContext.parent.href, null, null);
      });
    }
  }]);
  return SubjectGroupEditController;
}();
var SubjectGroupEditComponent = {
  controller: SubjectGroupEditController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/subjectGroups/edit/subjectGroupEdit.component.html"
};
exports.SubjectGroupEditComponent = SubjectGroupEditComponent;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSubGroupsService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectSubGroupsService = /*#__PURE__*/function () {
  function SubjectSubGroupsService(subjectGroupRepository, language) {
    _classCallCheck(this, SubjectSubGroupsService);
    this.subjectGroupRepository = subjectGroupRepository;
    this.language = language;
    this.withoutGroupItem = {
      id: 0,
      name: this.language.Generic.ClassManagement.kWithoutGroup
    };
  }
  _createClass(SubjectSubGroupsService, [{
    key: "withoutGroupExist",
    value: function withoutGroupExist(subjectId, subjectGroups, sgId) {
      return subjectGroups.some(function (sg) {
        return sg.subject.id == subjectId && !sg.group && (!sgId || sgId != sg.id);
      });
    }
  }, {
    key: "filterUsedGroups",
    value: function filterUsedGroups(groupsList, subjectGroups, sgId, subjectId) {
      var classSubjectgroups = groupsList;
      var busyGroups = subjectGroups.filter(function (sg) {
        return sg.subject.id == subjectId && sg.id != sgId && sg.group && sg.group.id;
      }).map(function (sg) {
        return sg.group.id;
      });
      classSubjectgroups = classSubjectgroups.filter(function (csg) {
        return busyGroups.every(function (bg) {
          return bg != csg.id;
        });
      });
      return classSubjectgroups;
    }
  }, {
    key: "getUnusedSubjects",
    value: function getUnusedSubjects(subjects, subjectGroups, iup, modular, sgId) {
      var unusedSubjects = subjects.filter(function (sbg) {
        var _a;
        var subjectSgs = subjectGroups.filter(function (sg) {
          return sg.subject.id == sbg.id;
        });
        if (!subjectSgs.length) {
          return true;
        }
        if (iup) {
          //todo. проверить наличие ПГ всех уровней? или не ограничивать совсем?
          return true;
        } else {
          if (!((_a = sbg.groups) === null || _a === void 0 ? void 0 : _a.length)) {
            //если нет подгрупп - то предмет исключаем
            return false;
          }
          var classSubjectGroups = subjectSgs;
          var mainGroup = classSubjectGroups.find(function (csg) {
            return !csg.group;
          });
          if (!mainGroup) {
            return true;
          }
          var unusedGroup = sbg.groups.find(function (g) {
            return classSubjectGroups.findIndex(function (csg) {
              var _a;
              return ((_a = csg.group) === null || _a === void 0 ? void 0 : _a.id) == g.id;
            }) == -1;
          });
          if (unusedGroup) {
            return true;
          } else {
            return false;
          }
        }
      });
      return unusedSubjects;
    }
  }, {
    key: "getAllowedSubGroups",
    value: function getAllowedSubGroups(subjectId, subjectGroups, sgId, group) {
      var _this = this;
      var groups;
      var promise = Promise.resolve(null);
      if (sgId && group && group.id) {
        //редактирование ПГ с подгруппой
        //разрешаем только выбор "без подгруппы" при условии: а) ПГ "без подгруппы" нет и б) все ученики класса связаны с данной ПГ
        groups = [Object.assign({}, group)];
        if (!this.withoutGroupExist(subjectId, subjectGroups, sgId)) {
          promise = this.subjectGroupRepository.boundedWithAllClassStudents(sgId).then(function (result) {
            if (result) {
              groups.unshift(_this.withoutGroupItem);
            }
          });
        }
      } else {
        //создание ПГ или редактирование без подгруппы
        //разрешаем выбор всех неиспользованных подгрупп
        promise = this.subjectGroupRepository.getGroups(subjectId).then(function (grps) {
          if (grps.length) {
            groups = _this.filterUsedGroups(grps, subjectGroups, sgId, subjectId);
            if (!_this.withoutGroupExist(subjectId, subjectGroups, sgId)) {
              groups.unshift(_this.withoutGroupItem);
            }
          }
        });
      }
      ;
      return promise.then(function () {
        return groups;
      });
    }
  }]);
  return SubjectSubGroupsService;
}();
exports.SubjectSubGroupsService = SubjectSubGroupsService;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurriculumPlanRepository = void 0;
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsComponent = void 0;
var _roomHelper = __webpack_require__(330);
var _rooms = __webpack_require__(331);
var _addRoom = __webpack_require__(332);
var _mergeRooms = __webpack_require__(333);
var _roomsRemove = __webpack_require__(334);
var _roomsDuplicate = __webpack_require__(335);
var _roomsSeats = __webpack_require__(336);
var _common = __webpack_require__(25);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RoomsController = /*#__PURE__*/function () {
  RoomsController.$inject = ["$scope", "appContext", "pageContext", "$dialogs", "$longWork", "$appLoader", "$uibModal", "$q", "$alerts", "navigationService", "roomsRepository", "usersRepository", "classesRepository", "changeTracker", "language"];
  /*@ngInject*/
  function RoomsController($scope, appContext, pageContext, $dialogs, $longWork, $appLoader, $uibModal, $q, $alerts, navigationService, roomsRepository, usersRepository, classesRepository, changeTracker, language) {
    _classCallCheck(this, RoomsController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.$appLoader = $appLoader;
    this.$uibModal = $uibModal;
    this.$q = $q;
    this.$alerts = $alerts;
    this.navigationService = navigationService;
    this.roomsRepository = roomsRepository;
    this.usersRepository = usersRepository;
    this.classesRepository = classesRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.state = {
      emptyData: false,
      dataReady: false
    };
    this.data = {
      rooms: [],
      floors: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      staffs: []
    };
    this.helpers = {
      roomHelper: new _roomHelper.RoomHelper()
    };
    // признак формирования нового года
    this.yearFormationMode = false;
    pageContext.clear();
    pageContext.title = language.Calendar.kTitleRooms;
    this.kClasses = language.SchoolSettings.kClasses.charAt(0).toUpperCase() + language.SchoolSettings.kClasses.slice(1);
    this.roomsRemoveService = new _roomsRemove.RoomsRemoveService(language, $dialogs, $longWork, roomsRepository);
    this.roomDuplicateService = new _roomsDuplicate.RoomsDuplicateService();
    this.roomsSeatsService = new _roomsSeats.RoomsSeatsService(this.$q, this.classesRepository);
    this.funcType = appContext.funcType;
    this.load();
  }
  _createClass(RoomsController, [{
    key: "addYearPostfix",
    value: function addYearPostfix(room) {
      var _this = this;
      if (this.appContext.readOnly || !this.yearFormationMode) {
        return;
      }
      if (!room.classes || !room.classes.length) {
        return;
      }
      room.classes.forEach(function (c) {
        var addYearPostfix = _this.getAddYearPostFix(c);
        if (addYearPostfix) {
          c.name += " (" + addYearPostfix + ")";
        }
      });
    }
  }, {
    key: "getAddYearPostFix",
    value: function getAddYearPostFix(roomClass) {
      if (roomClass.yearStatus == _rooms.YearStatus.Open) {
        return this.language.Generic.Common.kCurrYearPostfix;
      }
      if (roomClass.yearStatus == _rooms.YearStatus.Future) {
        return this.language.Generic.Common.kFutureYearPostfix;
      }
      return null;
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var promises = [];
      var getYearFormationMode = this.roomsRepository.getYearFormationMode().then(function (yearFormationMode) {
        _this2.yearFormationMode = yearFormationMode;
      });
      promises.push(getYearFormationMode);
      var getStaffs = this.usersRepository.getStaffList().then(function (staffs) {
        _this2.data.staffs = staffs;
      });
      promises.push(getStaffs);
      if (this.appContext.funcType == _common.FuncType.preSchool) {
        var getSeatsValidationData = this.roomsSeatsService.getSeatsValidationData();
        promises.push(getSeatsValidationData);
      }
      var work = this.$q.all(promises).then(function () {
        return _this2.getRooms();
      }).then(function () {
        _this2.state.emptyData = _this2.data.rooms.length == 0;
        _this2.state.dataReady = true;
        _this2.changeTracker.clearDataChanges();
        _this2.$appLoader.hide();
        _this2.showDuplNotify();
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "roomsWithSeatsAbove",
    get: function get() {
      var _this3 = this;
      return this.data.rooms.filter(function (x) {
        var _a;
        return (_a = _this3.roomsSeatsService.getSeatsValidator(x.id)) === null || _a === void 0 ? void 0 : _a.seatsAbove;
      });
    }
  }, {
    key: "hasSeatsBelow",
    value: function hasSeatsBelow(room) {
      var _a;
      return (_a = this.roomsSeatsService.getSeatsValidator(room.id)) === null || _a === void 0 ? void 0 : _a.seatsBelow;
    }
  }, {
    key: "getRoomTooltip",
    value: function getRoomTooltip(room) {
      return this.hasSeatsBelow(room) ? "Нормативная наполняемость ниже рекомендуемой" : undefined;
    }
  }, {
    key: "showDuplNotify",
    value: function showDuplNotify() {
      this.roomDuplicateService.Rooms = this.data.rooms;
      if (this.checkSameRoomName()) {
        this.roomDuplicateService.markDuplicate();
        this.$dialogs.message(this.language.Generic.Calendar.kHasSameRoomNameWarn);
      }
    }
  }, {
    key: "getRooms",
    value: function getRooms() {
      var _this4 = this;
      return this.roomsRepository.getRooms(true).then(function (rooms) {
        _this4.data.rooms = rooms.map(function (room) {
          return _this4.getMapRoom(room);
        });
      });
    }
  }, {
    key: "getMapRoom",
    value: function getMapRoom(room) {
      var viewDto = room;
      this.addYearPostfix(viewDto);
      viewDto.removable = false;
      viewDto.storedName = room.roomname;
      if (room.classes) {
        viewDto.classesStr = room.classes.map(function (cls) {
          return cls.name;
        }).join(", ");
      }
      return viewDto;
    }
    // добавляет новое помещение
  }, {
    key: "add",
    value: function add() {
      var _this5 = this;
      if (this.checkSameRoomName()) {
        return;
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: _addRoom.AddRoomComponent.templateUrl,
        controller: _addRoom.AddRoomComponent.controller,
        controllerAs: _addRoom.AddRoomComponent.controllerAs,
        resolve: {
          rooms: function rooms() {
            return _this5.data.rooms;
          },
          staffs: function staffs() {
            return _this5.data.staffs;
          },
          floors: function floors() {
            return _this5.data.floors;
          }
        }
      });
      modalInstance.result.then(function () {
        return _this5.load();
      }).then(function () {
        return _this5.$alerts.success(_this5.language.Calendar.kCreateRoomsSuccess);
      });
    }
    // объединяет помещения
  }, {
    key: "merge",
    value: function merge() {
      var _this6 = this;
      if (this.checkSameRoomName()) {
        return;
      }
      var modalInstance = this.$uibModal.open({
        templateUrl: _mergeRooms.MergeRoomsComponent.templateUrl,
        controller: _mergeRooms.MergeRoomsComponent.controller,
        controllerAs: _mergeRooms.MergeRoomsComponent.controllerAs,
        resolve: {
          rooms: function rooms() {
            return _this6.data.rooms;
          }
        }
      });
      modalInstance.result.then(function () {
        return _this6.load();
      }).then(function () {
        return _this6.$alerts.success(_this6.language.Calendar.kMergeRoomsSuccess);
      });
    }
    // удаляет помещения
  }, {
    key: "remove",
    value: function remove() {
      var _this7 = this;
      if (this.checkSameRoomName()) {
        return;
      }
      var roomId = this.data.rooms.filter(function (r) {
        return r.removable;
      }).map(function (r) {
        return r.id;
      });
      var checked = roomId && !!roomId.length;
      if (checked) {
        this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
          _this7.roomsRemoveService.remove(roomId).then(function () {
            return _this7.load().then(function () {
              _this7.$alerts.success(_this7.language.Calendar.kRoomsDeleted);
            });
          });
        });
      } else {
        this.$dialogs.message(this.language.Calendar.kErrMsgNotChecked);
      }
    }
    // сохраняет помещения
  }, {
    key: "save",
    value: function save() {
      var _this8 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      } else if (!this.checkRoomsValid()) {
        return;
      } else if (this.checkSameRoomName()) {
        this.roomDuplicateService.markDuplicate();
        var duplicates = this.roomDuplicateService.Duplicates;
        this.$dialogs.message(this.language.Calendar.kMsgRoomExist).then(function () {
          Object.keys(duplicates).forEach(function (key) {
            var rooms = duplicates[key];
            if (rooms.length > 1) {
              rooms.forEach(function (room) {
                return room.roomname = room.storedName;
              });
            }
          });
          _this8.roomDuplicateService.markDuplicate();
        });
      } else {
        var work = this.roomsRepository.save(this.data.rooms).then(function () {
          return _this8.load();
        });
        this.$longWork.execute(work).then(function () {
          return _this8.$alerts.success(_this8.language.Generic.Common.kDataSaved);
        });
      }
    }
    // сбрасывает изменения на странице
  }, {
    key: "reset",
    value: function reset() {
      var _this9 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      } else {
        this.load().then(function () {
          return _this9.$alerts.success(_this9.language.Generic.Common.kResetChanges);
        });
      }
    }
    // перебрасывает на экран классы/объединения/группы
  }, {
    key: "goToClasses",
    value: function goToClasses() {
      var _this10 = this;
      this.changeTracker.check().then(function () {
        _this10.navigationService.navigateTo("/angular/school/classmanagement/classes/");
      });
    }
  }, {
    key: "checkRoomsValid",
    value: function checkRoomsValid() {
      return this.roomsForm.$valid;
    }
  }, {
    key: "checkSameRoomName",
    value: function checkSameRoomName() {
      return this.helpers.roomHelper.hasSameRoomname(this.data.rooms);
    }
  }]);
  return RoomsController;
}();
var RoomsComponent = {
  controller: RoomsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/rooms/list/rooms.component.html"
};
exports.RoomsComponent = RoomsComponent;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RoomHelper = /*#__PURE__*/function () {
  function RoomHelper() {
    _classCallCheck(this, RoomHelper);
  }
  _createClass(RoomHelper, [{
    key: "hasSameRoomname",
    value: function hasSameRoomname(rooms) {
      var has = _.chain(rooms).map(function (room) {
        return room.roomname.trim().toLowerCase();
      }).groupBy().some(function (x) {
        return x.length > 1;
      }).value();
      return has;
    }

    //валидация
  }, {
    key: "validate",
    value: function validate(room) {
      if (!room.roomname) {
        return language.Calendar.kErrMsgEmpty;
      }
      if (room.length && (room.length < 1 || room.length > 100)) {
        return language.Generic.Calendar.kErrLen;
      }
      if (room.width && (room.width < 1 || room.width > 100)) {
        return language.Generic.Calendar.kErrWidth;
      }
      if (!room.seats || room.seats <= 0 || room.seats > 100) {
        return language.Calendar.kErrSeats2;
      }
      if (room.area && (room.area < 1 || room.area > 999)) {
        return language.Generic.Calendar.kErrArea;
      }
      return null;
    }
  }, {
    key: "hasRoomWithHimself",
    value: function hasRoomWithHimself(mergeRoomId, roomId) {
      return mergeRoomId === roomId;
    }
  }]);
  return RoomHelper;
}();
exports.RoomHelper = RoomHelper;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearStatus = void 0;
var YearStatus;
exports.YearStatus = YearStatus;
(function (YearStatus) {
  YearStatus["Open"] = "Open";
  YearStatus["Future"] = "Future";
})(YearStatus || (exports.YearStatus = YearStatus = {}));

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddRoomComponent = void 0;
var _netcityModalCtrl = __webpack_require__(40);
var _roomHelper = __webpack_require__(330);
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
var AddRoomController = /*#__PURE__*/function (_NetCityModalControll) {
  AddRoomController.$inject = ["$scope", "roomsRepository", "$uibModalInstance", "$dialogs", "changeTracker", "$longWork", "language", "rooms", "staffs", "floors"];
  _inherits(AddRoomController, _NetCityModalControll);
  var _super = _createSuper(AddRoomController);
  /*@ngInject*/
  function AddRoomController($scope, roomsRepository, $uibModalInstance, $dialogs, changeTracker, $longWork, language, rooms, staffs, floors) {
    var _this;
    _classCallCheck(this, AddRoomController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.roomsRepository = roomsRepository;
    _this.$longWork = $longWork;
    _this.language = language;
    _this.rooms = rooms;
    _this.staffs = staffs;
    _this.floors = floors;
    _this.helpers = {
      roomHelper: new _roomHelper.RoomHelper()
    };
    _this.state = {
      dataReady: true,
      viewReady: true
    };
    _this.header = language.Calendar.kAddRoom;
    var defaulFloor = 1;
    _this.data = {
      room: {
        floor: defaulFloor,
        study: true
      },
      rooms: rooms,
      staffs: staffs,
      floors: floors
    };
    return _this;
  }
  _createClass(AddRoomController, [{
    key: "create",
    value: function create() {
      var _this2 = this;
      if (this.addNewRoom.$valid) {
        var room = this.data.room;
        this.$longWork.show();
        this.roomsRepository.create(room).then(function (saved) {
          return _this2.$uibModalInstance.close(saved);
        })["finally"](function () {
          return _this2.$longWork.close();
        });
      }
    }
  }]);
  return AddRoomController;
}(_netcityModalCtrl.NetCityModalController);
var AddRoomComponent = {
  controller: AddRoomController,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/rooms/addRoom/addRoom.component.html"
};
exports.AddRoomComponent = AddRoomComponent;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MergeRoomsComponent = void 0;
var _roomHelper = __webpack_require__(330);
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
var MergeRoomsController = /*#__PURE__*/function (_NetCityModalControll) {
  MergeRoomsController.$inject = ["$scope", "roomsRepository", "$uibModalInstance", "$dialogs", "changeTracker", "language", "$longWork", "rooms"];
  _inherits(MergeRoomsController, _NetCityModalControll);
  var _super = _createSuper(MergeRoomsController);
  /*@ngInject*/
  function MergeRoomsController($scope, roomsRepository, $uibModalInstance, $dialogs, changeTracker, language, $longWork, rooms) {
    var _this;
    _classCallCheck(this, MergeRoomsController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.roomsRepository = roomsRepository;
    _this.language = language;
    _this.$longWork = $longWork;
    _this.rooms = rooms;
    _this.helpers = {
      roomHelper: new _roomHelper.RoomHelper()
    };
    _this.state = {
      dataReady: true,
      viewReady: true
    };
    _this.header = language.Calendar.kReplaceRoom;
    var first = rooms.find(Boolean);
    _this.data = {
      mergeRoomId: first.id,
      roomId: first.id,
      rooms: rooms
    };
    return _this;
  }
  _createClass(MergeRoomsController, [{
    key: "merge",
    value: function merge() {
      var _this2 = this;
      if (this.checkRoomWithHimself()) {
        this.$dialogs.message(this.language.Calendar.kMergeRoomWithHimself);
      } else {
        this.$dialogs.confirm(this.language.Calendar.kMergeRoomsWarn).then(function () {
          _this2.$longWork.show();
          _this2.roomsRepository.merge(_this2.data.mergeRoomId, _this2.data.roomId).then(function (saved) {
            return _this2.$uibModalInstance.close(saved);
          })["finally"](function () {
            return _this2.$longWork.close();
          });
        });
      }
    }
  }, {
    key: "checkRoomWithHimself",
    value: function checkRoomWithHimself() {
      return this.helpers.roomHelper.hasRoomWithHimself(this.data.mergeRoomId, this.data.roomId);
    }
  }]);
  return MergeRoomsController;
}(_netcityModalCtrl.NetCityModalController);
var MergeRoomsComponent = {
  controller: MergeRoomsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/rooms/mergeRooms/mergeRooms.component.html"
};
exports.MergeRoomsComponent = MergeRoomsComponent;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsRemoveService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RoomsRemoveService = /*#__PURE__*/function () {
  function RoomsRemoveService(language, $dialogs, $longWork, roomsRepository) {
    _classCallCheck(this, RoomsRemoveService);
    this.language = language;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.roomsRepository = roomsRepository;
  }
  // удаляет помещения
  _createClass(RoomsRemoveService, [{
    key: "remove",
    value: function remove(roomId) {
      var _this = this;
      var work = this.confirmUsedRoomsRemove(roomId).then(function () {
        return _this.roomsRepository.remove(roomId);
      });
      return this.$longWork.execute(work);
    }
  }, {
    key: "confirmUsedRoomsRemove",
    value: function confirmUsedRoomsRemove(roomId) {
      var _this2 = this;
      return this.roomsRepository.getUsed(roomId).then(function (usedRooms) {
        if (_this2.checkUsedRooms(usedRooms)) {
          return _this2.$dialogs.confirm(_this2.language.Calendar.kDeleteRoomsWarn);
        }
      });
    }
  }, {
    key: "checkUsedRooms",
    value: function checkUsedRooms(usedRooms) {
      return usedRooms && !!usedRooms.length;
    }
  }]);
  return RoomsRemoveService;
}();
exports.RoomsRemoveService = RoomsRemoveService;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomsDuplicateService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RoomsDuplicateService = /*#__PURE__*/function () {
  function RoomsDuplicateService() {
    _classCallCheck(this, RoomsDuplicateService);
  }
  _createClass(RoomsDuplicateService, [{
    key: "Rooms",
    set: function set(value) {
      this.rooms = value;
    }
  }, {
    key: "Duplicates",
    get: function get() {
      return this.duplicates;
    }
  }, {
    key: "markDuplicate",
    value: function markDuplicate() {
      var _this = this;
      this.duplicates = this.getDuplicates();
      Object.keys(this.duplicates).forEach(function (key) {
        var rooms = _this.duplicates[key];
        if (rooms.length > 1) {
          rooms.forEach(function (room) {
            return room.duplicate = true;
          });
        } else {
          var single = rooms.find(Boolean);
          single.duplicate = false;
        }
      });
    }
  }, {
    key: "getDuplicates",
    value: function getDuplicates() {
      return this.rooms.reduce(function (res, room) {
        var key = room.roomname.trim().toLowerCase();
        (res[key] = res[key] || []).push(room);
        return res;
      }, {});
    }
  }]);
  return RoomsDuplicateService;
}();
exports.RoomsDuplicateService = RoomsDuplicateService;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeatsInfoValidator = exports.RoomsSeatsService = void 0;
var _classes = __webpack_require__(32);
var _classes2 = __webpack_require__(30);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SeatsInfoValidator = /*#__PURE__*/function () {
  function SeatsInfoValidator(seatsInfo) {
    _classCallCheck(this, SeatsInfoValidator);
    this.seatsInfo = seatsInfo;
  }
  // проверяет заполненность нормативной наполняемости
  _createClass(SeatsInfoValidator, [{
    key: "checkSeats",
    value: function checkSeats() {
      return !!this.seatsInfo.seats && !!this.seatsInfo.recommendedSeats;
    }
  }, {
    key: "seatsAbove",
    get: function get() {
      return this.checkSeats() && this.seatsInfo.seats > this.seatsInfo.recommendedSeats;
    }
  }, {
    key: "seatsBelow",
    get: function get() {
      return this.checkSeats() && this.seatsInfo.seats < this.seatsInfo.recommendedSeats;
    }
  }, {
    key: "recommendedSeats",
    get: function get() {
      return this.seatsInfo.recommendedSeats;
    }
  }]);
  return SeatsInfoValidator;
}();
exports.SeatsInfoValidator = SeatsInfoValidator;
var RoomsSeatsService = /*#__PURE__*/function () {
  function RoomsSeatsService($q, classesRepository) {
    _classCallCheck(this, RoomsSeatsService);
    this.$q = $q;
    this.classesRepository = classesRepository;
    this.preClasses = [];
    this.seatsValidationData = {};
  }
  _createClass(RoomsSeatsService, [{
    key: "load",
    value: function load() {
      var _this = this;
      var args = {
        expand: [_classes.ClassExpandProp.room]
      };
      var classesReady = this.classesRepository.getYearClasses(args).then(function (classes) {
        return _this.preClasses = classes.filter(function (c) {
          return !!c.room;
        });
      });
      return this.$q.when(classesReady);
    }
    // получает первый попавшийся валидатор
  }, {
    key: "getSeatsValidator",
    value: function getSeatsValidator(roomId) {
      var validatorsData = this.seatsValidationData[roomId];
      var validator = null;
      var filterData = validatorsData === null || validatorsData === void 0 ? void 0 : validatorsData.filter(function (x) {
        return !!x.recommendedSeats;
      });
      if (filterData && filterData.length) {
        validator = filterData.reduce(function (prev, curr) {
          return prev.recommendedSeats < curr.recommendedSeats ? prev : curr;
        });
      }
      return validator;
    }
  }, {
    key: "getSeatsValidationData",
    value: function getSeatsValidationData() {
      var _this2 = this;
      return this.load().then(function () {
        var seatsData = _this2.preClasses.map(function (preClass) {
          var seatsInfo = _this2.mapPreClass(preClass);
          _this2.prepareSeatsInfo(seatsInfo);
          return seatsInfo;
        });
        _this2.seatsValidationData = _.chain(seatsData).groupBy(function (x) {
          return x.roomId;
        }).mapObject(function (val) {
          return val.map(function (x) {
            return new SeatsInfoValidator(x);
          });
        }).value();
      });
    }
  }, {
    key: "prepareSeatsInfo",
    value: function prepareSeatsInfo(seatsInfo) {
      var douGroupTypeId = seatsInfo.douGroupTypeId;
      if (douGroupTypeId == _classes2.DouGroupType.General || douGroupTypeId == _classes2.DouGroupType.Wellness || douGroupTypeId == _classes2.DouGroupType.ForYoungChildren || douGroupTypeId == _classes2.DouGroupType.CareAndMaintenance) {
        this.calcCommonRecommendedSeats(seatsInfo);
      } else if (douGroupTypeId == _classes2.DouGroupType.Compensating) {
        this.calcCompensatingRecommendedSeats(seatsInfo);
      } else if (douGroupTypeId == _classes2.DouGroupType.Combined) {
        this.calcCombinedRecommendedSeats(seatsInfo);
      }
    }
    // 
  }, {
    key: "calcCommonRecommendedSeats",
    value: function calcCommonRecommendedSeats(seatsInfo) {
      if (this.lessThanThreeYears(seatsInfo)) {
        seatsInfo.recommendedSeats = Math.round(seatsInfo.area / 2.5);
      } else {
        seatsInfo.recommendedSeats = Math.round(seatsInfo.area / 2);
      }
    }
    // рассчитывает нормативную наполняемость для групп с "Компенсирующей" направленностью
  }, {
    key: "calcCompensatingRecommendedSeats",
    value: function calcCompensatingRecommendedSeats(seatsInfo) {
      var classTypeId = seatsInfo.classTypeId;
      if (this.lessThanThreeYears(seatsInfo)) {
        if (classTypeId == 102 || classTypeId == 120 || classTypeId == 113 || classTypeId == 121 || classTypeId == 103 || classTypeId == 105) {
          seatsInfo.recommendedSeats = 6;
        } else if (classTypeId == 122 || classTypeId == 123) {
          seatsInfo.recommendedSeats = 5;
        }
      } else {
        if (classTypeId == 123 || classTypeId == 103 || classTypeId == 109 || classTypeId == 108) {
          seatsInfo.recommendedSeats = 10;
        } else if (classTypeId == 120 || classTypeId == 121) {
          seatsInfo.recommendedSeats = 6;
        } else if (classTypeId == 113 || classTypeId == 105) {
          seatsInfo.recommendedSeats = 8;
        } else if (classTypeId == 122 || classTypeId == 123) {
          seatsInfo.recommendedSeats = 5;
        }
      }
      // todo: для детей с фонетико-фонематическими нарушениями речи ??
      // todo: для детей с умственной отсталостью легкой степени ??
      // todo: для детей с умственной отсталостью умеренной, тяжелой ??
      // todo: для детей с аутизмом ??
      // todo: для детей со сложным дефектом (имеющих сочетание 2 или более недостатков в физическом и (или) психическом развитии) ??
    }
    // рассчитывает нормативную наполняемость для групп с "Комбинированной" направленностью
  }, {
    key: "calcCombinedRecommendedSeats",
    value: function calcCombinedRecommendedSeats(seatsInfo) {
      var classTypeId = seatsInfo.classTypeId;
      if (this.lessThanThreeYears(seatsInfo)) {
        seatsInfo.recommendedSeats = 10;
      } else {
        if (classTypeId == 120 || classTypeId == 121 || classTypeId == 105 || classTypeId == 108 || classTypeId == 122 || classTypeId == 123) {
          seatsInfo.recommendedSeats = 10;
        } else if (classTypeId == 103 || classTypeId == 113 || classTypeId == 102) {
          seatsInfo.recommendedSeats = 15;
        } else if (classTypeId == 109) {
          seatsInfo.recommendedSeats = 17;
        }
      }
    }
  }, {
    key: "lessThanThreeYears",
    value: function lessThanThreeYears(seatsInfo) {
      return seatsInfo.ageMin < 36;
    }
    // мапит группу
  }, {
    key: "mapPreClass",
    value: function mapPreClass(preClass) {
      return {
        roomId: preClass.room.id,
        preClassId: preClass.id,
        douGroupAgeId: preClass.douGroupAge.id,
        ageMin: preClass.douGroupAge.ageMin,
        ageMax: preClass.douGroupAge.ageMax,
        douGroupTypeId: preClass.douGroupType.id,
        classTypeId: preClass.classType.id,
        area: preClass.room.area,
        seats: preClass.room.seats
      };
    }
  }]);
  return RoomsSeatsService;
}();
exports.RoomsSeatsService = RoomsSeatsService;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectGroupsMergeService = void 0;
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
var SgSetNameCtrl = /*#__PURE__*/function () {
  function SgSetNameCtrl(language, $dialogs, $uibModalInstance, $longWork, subjectGroupRepository, subjectData, rows) {
    _classCallCheck(this, SgSetNameCtrl);
    this.language = language;
    this.$dialogs = $dialogs;
    this.$uibModalInstance = $uibModalInstance;
    this.$longWork = $longWork;
    this.subjectGroupRepository = subjectGroupRepository;
    this.subjectData = subjectData;
    this.rows = rows;
    this.header = this.language.Generic.ClassManagement.kEnterNewNameSG;
    this.buildButtons();
    this.data = {
      sgName: ""
    };
  }
  _createClass(SgSetNameCtrl, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this = this;
      this.buttons = [];
      var recruitBtn = {
        title: this.language.Generic.Buttons.kRecruit,
        action: function action() {
          return _this.recruit();
        }
      };
      this.buttons.push(recruitBtn);
      var closeBtn = {
        title: this.language.Generic.Common.kCancel_2,
        action: function action() {
          return _this.$uibModalInstance.dismiss("cancel");
        }
      };
      this.buttons.push(closeBtn);
    }
  }, {
    key: "checkSgName",
    value: function checkSgName() {
      return this.data.sgName && !!this.data.sgName.trim().length;
    }
  }, {
    key: "recruit",
    value: function recruit() {
      var _this2 = this;
      // #37524. Сейчас здесь вводится т.н. "довесок", он же appendix, в БД это EXTNAME в табл. SUBJECTGROUPS. Вполне может быть пустой строкой.
      /*
      if (!this.checkSgName()) {
          this.$dialogs.message(this.language.Generic.ClassManagement.kEnterNewNameSG);
      }
      else {
          */
      var sgName = this.data.sgName.trim();
      var sgInfo = this.getSelectedRowsInfo(this.rows);
      var checkPromise = this.checkAvailableName(this.subjectData.record.SubjectId, sgName, sgInfo);
      this.$longWork.show();
      checkPromise.then(function () {
        return _this2.subjectGroupRepository.mergeSubjectGroups(sgInfo.sgId, _this2.data.sgName);
      }).then(function () {
        return _this2.$uibModalInstance.close({
          merged: true
        });
      });
      //}
    }
  }, {
    key: "checkAvailableName",
    value: function checkAvailableName(subjectId, sgName, sgInfo) {
      // todo: наверное нужно завести другой dto
      var data = {
        id: 0,
        name: sgName,
        iup: false,
        gradingSys: null,
        grades: sgInfo.grades,
        teachers: null,
        subject: {
          id: subjectId
        },
        iupLevel: null,
        extraCurricular: false
      };
      return this.subjectGroupRepository.checkAvailableName(data, sgInfo.sgId);
    }
  }, {
    key: "getSelectedRowsInfo",
    value: function getSelectedRowsInfo(rows) {
      var sgData = rows.toArray().map(function (r) {
        return angular.element(r).data("record");
      });
      var sgId = sgData.map(function (sg) {
        return sg.SubjectGroupId;
      });
      var concatGradesData = sgData.map(function (sg) {
        return sg.Grades;
      }).reduce(function (x, y) {
        return x.concat(y);
      });
      var grades = _toConsumableArray(new Set(concatGradesData));
      return {
        sgId: sgId,
        grades: grades
      };
    }
  }]);
  return SgSetNameCtrl;
}();
var SgMergeCtrl = /*#__PURE__*/function () {
  function SgMergeCtrl(language, $uibModal, $uibModalInstance, $dialogs, subjectGroupRepository, teacherId) {
    _classCallCheck(this, SgMergeCtrl);
    this.language = language;
    this.$uibModal = $uibModal;
    this.$uibModalInstance = $uibModalInstance;
    this.$dialogs = $dialogs;
    this.subjectGroupRepository = subjectGroupRepository;
    this.teacherId = teacherId;
    this.header = this.language.Generic.ClassManagement.kUnionSubjectGroups;
    this.buttons = [];
  }
  _createClass(SgMergeCtrl, [{
    key: "showSetName",
    value: function showSetName(_subjectData, _rows) {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        template: "\n                <ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\n\t\t\t\t<div ng-form class=\"form-horizontal form-sm\">\n\t\t\t\t\t<ns-form control-size=\"col-md-8 col-sm-8\" label-size=\"col-md-2\">\n\n\t\t\t\t\t\t<ns-form-group title=\"{{$ctrl.language.Generic.ClassManagement.kNewNameSG}}\">\n\t\t\t\t\t\t\t<div class=\"fixin-input-elem\">\n\t\t\t\t\t\t\t\t<span class=\"form-control form-control-title\" ng-model=\"$ctrl.subjectData.record.SubjectName\">\n\t\t\t\t\t\t\t\t\t<span class=\"text\">{{$ctrl.subjectData.record.SubjectName}}</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<i>/</i>\n\t\t\t\t\t\t\t\t\t<input track-changes type=\"text\" maxlength=\"20\" ng-model=\"$ctrl.data.sgName\" class=\"form-control form-control-inline\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ns-form-group>\n\n\t\t\t\t\t</ns-form>\n\t\t\t\t</div>\n\t\t\t\t\n\n                </ns-modal>",
        controllerAs: "$ctrl",
        controller: SgSetNameCtrl,
        resolve: {
          subjectData: function subjectData() {
            return _subjectData;
          },
          rows: function rows() {
            return _rows;
          }
        }
      });
      modalInstance.result.then(function (result) {
        if (result.merged) {
          _this3.$uibModalInstance.close(result);
        }
      });
    }
  }, {
    key: "checkJTableRows",
    value: function checkJTableRows(rows) {
      return rows && rows.length && rows.length >= 2;
    }
  }, {
    key: "merge",
    value: function merge(subjectData) {
      var _this4 = this;
      var rows = this.jTableContainer.find('tr.jtable-row-selected');
      if (this.checkJTableRows(rows)) {
        this.$dialogs.confirm(this.language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep1).then(function () {
          return _this4.$dialogs.confirm(_this4.language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep2);
        }).then(function () {
          return _this4.showSetName(subjectData, rows);
        });
      } else {
        this.$dialogs.message(this.language.Generic.ClassManagement.kCountCheckSubjectGroups);
      }
    }
  }, {
    key: "buildMergeButton",
    value: function buildMergeButton(subjectData) {
      var _this5 = this;
      var chooseBtn = $.uicontrols.button({
        id: "attach",
        size: "btn-sm",
        label: this.language.Generic.Common.kChoose,
        icon: "ok",
        click: function click() {
          var subjectId = subjectData.record.SubjectId;
          var termTypeId = subjectData.record.TermTypeId;
          var iupLevelId = subjectData.record.LevelId;
          var childCallback = function childCallback(data) {
            data.childTable.jtable("load", {
              termTypeId: termTypeId,
              subjectId: subjectId,
              iupLevelId: iupLevelId
            });
          };
          var fields = {
            SubjectGroupId: {
              key: true,
              create: false,
              edit: false,
              list: false
            },
            SubjectName: {
              title: _this5.language.Generic.ClassManagement.kSubjectGroupName,
              edit: false
            },
            Grade: {
              title: _this5.language.Generic.ClassManagement.kGrade,
              edit: false
            },
            Grades: {
              list: false,
              edit: false
            }
          };
          var options = {
            title: _this5.language.Generic.ClassManagement.kSubjectGroups,
            actions: {
              listAction: function listAction(postData, jtParams) {
                return $.Deferred(function ($dfd) {
                  var sgFilter = {
                    teacherId: _this5.teacherId,
                    termTypeId: termTypeId,
                    subjectId: subjectId,
                    iupLevelId: iupLevelId,
                    iup: true
                  };
                  _this5.subjectGroupRepository.getSubjectgroups(sgFilter).then(function (subjectGroups) {
                    var records = subjectGroups.map(function (sg) {
                      return {
                        SubjectGroupId: sg.id,
                        SubjectName: sg.name,
                        Grade: sg.grades.reduce(function (current, g) {
                          return current += ", " + g + " *";
                        }, "").substr(1),
                        Grades: sg.grades
                      };
                    });
                    var data = {
                      Result: "OK",
                      Records: records,
                      TotalRecordCount: records.length
                    };
                    $dfd.resolve(data);
                  });
                });
              }
            },
            selecting: true,
            selectingCheckboxes: true,
            multiselect: true,
            toolbar: {
              items: [{
                text: _this5.language.Generic.ClassManagement.kMerge,
                click: function click() {
                  return _this5.merge(subjectData);
                }
              }]
            },
            fields: fields
          };
          var parentContainer = chooseBtn.closest("tr");
          _this5.jTableContainer.jtable("openChildTable", parentContainer, options, childCallback);
        }
      });
      return chooseBtn;
    }
  }, {
    key: "initJTable",
    value: function initJTable() {
      var _this6 = this;
      this.jTableContainer = angular.element("#jtable-container-id");
      var fields = {
        SubjectId: {
          key: true,
          create: false,
          edit: false,
          list: false
        },
        SubjectGroups: {
          title: '',
          width: 'auto',
          edit: false,
          display: function display(subjectData) {
            return _this6.buildMergeButton(subjectData);
          }
        },
        SubjectName: {
          title: this.language.Generic.ClassManagement.kSubjectName,
          width: 'auto',
          edit: false
        },
        LevelName: {
          title: this.language.Generic.ClassManagement.kLevelName,
          width: 'auto',
          edit: false
        },
        TermTypeName: {
          title: this.language.Generic.SetupSchoolCalendar.kTermType_,
          width: 'auto',
          edit: false
        }
      };
      var options = {
        actions: {
          listAction: function listAction(postData, jtParams) {
            return $.Deferred(function ($dfd) {
              _this6.subjectGroupRepository.getMergeSubjects(_this6.teacherId).then(function (subjects) {
                var records = subjects.map(function (sbj) {
                  return {
                    SubjectId: sbj.id.toString(),
                    SubjectName: sbj.name,
                    LevelId: sbj.level.id == 0 ? '' : sbj.level.id.toString(),
                    LevelName: sbj.level.name,
                    TermTypeId: sbj.termType.id,
                    TermTypeName: sbj.termType.name
                  };
                });
                var data = {
                  Records: records,
                  Result: "OK",
                  TotalRecordCount: records.length
                };
                $dfd.resolve(data);
              });
            });
          }
        },
        openChildAsAccordion: true,
        columnResizable: false,
        columnSelectable: false,
        useBootstrap: true,
        fields: fields
      };
      try {
        this.jTableContainer.jtable(options).jtable("load");
      } catch (e) {
        console.log(e.data.message);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return SgMergeCtrl;
}(); // сервис объединения ПГ
var SubjectGroupsMergeService = /*#__PURE__*/function () {
  function SubjectGroupsMergeService(language, $uibModal, $alerts, $longWork) {
    _classCallCheck(this, SubjectGroupsMergeService);
    this.language = language;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
  }
  _createClass(SubjectGroupsMergeService, [{
    key: "execute",
    value: function execute(teacherId) {
      this.teacherId = teacherId;
      this.showMerge();
    }
  }, {
    key: "showMerge",
    value: function showMerge() {
      var _this7 = this;
      var modalInstance = this.$uibModal.open({
        template: "\n                <ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n                    <div id=\"jtable-container-id\" data-ng-init=\"$ctrl.initJTable()\"></div>\n                </ns-modal>",
        controllerAs: "$ctrl",
        controller: SgMergeCtrl,
        resolve: {
          teacherId: function teacherId() {
            return _this7.teacherId;
          }
        }
      });
      modalInstance.result.then(function (result) {
        return _this7.handleSuccess(result);
      }, this.handleError);
    }
  }, {
    key: "closeProcessing",
    value: function closeProcessing() {
      if (this.$longWork.isShowing) {
        this.$longWork.close();
      }
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(result) {
      this.closeProcessing();
      if (result.merged) {
        this.$alerts.success(this.language.Generic.ClassManagement.kUnionOperationSuccess);
      }
    }
  }, {
    key: "handleError",
    value: function handleError() {
      this.closeProcessing();
    }
  }]);
  return SubjectGroupsMergeService;
}();
exports.SubjectGroupsMergeService = SubjectGroupsMergeService;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrollmentRepository = void 0;
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
var EnrollmentRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(EnrollmentRepository, _BaseRepository);
  var _super = _createSuper(EnrollmentRepository);
  function EnrollmentRepository() {
    _classCallCheck(this, EnrollmentRepository);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollmentRepository, [{
    key: "getSubjectGroupStudents",
    value: function getSubjectGroupStudents(sgId, termId) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.get("/webapi/subjectgroupstudents", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getSgEnrollmentInfo",
    value: function getSgEnrollmentInfo(sgId, termId) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.get("/webapi/sgenrollmentinfo", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "addStudentsToSubjectGroup",
    value: function addStudentsToSubjectGroup(sgId, termId, studentIds) {
      var params = {
        sgId: sgId,
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroupstudents", studentIds, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "removeStudentsFromSubjectGroup",
    value: function removeStudentsFromSubjectGroup(sgId, termId, studentIds) {
      var params = {
        sgId: sgId,
        termId: termId,
        studentIds: studentIds
      };
      return this.$http["delete"]("/webapi/subjectgroupstudents", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSubjectGroupsEnrollment",
    value: function getSubjectGroupsEnrollment(sgEnrollArgs, contextReadOnly) {
      var params = sgEnrollArgs || {};
      params.contextReadOnly = contextReadOnly;
      return this.$http.get("/webapi/subjectgroups-enrollment", {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "saveSubjectGroupsEnrollment",
    value: function saveSubjectGroupsEnrollment(termId, groupEnrollmentInfo) {
      var params = {
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroups-enrollment", groupEnrollmentInfo, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "copySubjectGroupsEnrollment",
    value: function copySubjectGroupsEnrollment(termId, sgIds) {
      var params = {
        termId: termId
      };
      return this.$http.post("/webapi/subjectgroups-enrollment/copy", sgIds, {
        params: params
      }).then(function (response) {
        return response.data;
      }, this.handleError);
    }
  }, {
    key: "getTeacherSubjectGroups",
    value: function getTeacherSubjectGroups(extraCurricular) {
      var params = {
        extraCurricular: extraCurricular
      };
      return this.$http.get("/webapi/users/teacher/subjectgroups", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherClasses",
    value: function getTeacherClasses() {
      return this.$http.get("/webapi/users/teacher/classes").then(this.handleResponse, this.handleError);
    }
  }]);
  return EnrollmentRepository;
}(_repository.BaseRepository);
exports.EnrollmentRepository = EnrollmentRepository;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaEnrollmentComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _eaEnrollmentGroup = __webpack_require__(340);
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
var EaEnrollmentController = /*#__PURE__*/function () {
  EaEnrollmentController.$inject = ["pageContext", "$appLoader", "$uibModal", "$longWork", "$dialogs", "$q", "$alerts", "appContext", "enrollmentRepository", "changeTracker", "language"];
  /*@ngInject*/
  function EaEnrollmentController(pageContext, $appLoader, $uibModal, $longWork, $dialogs, $q, $alerts, appContext, enrollmentRepository, changeTracker, language) {
    _classCallCheck(this, EaEnrollmentController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$q = $q;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.enrollmentRepository = enrollmentRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.selected = new _multiSelectable["default"]();
    pageContext.title = this.language.Generic.MenuFolders.kFNEAEnrollment;
    pageContext.parent = null;
    pageContext.back = null;
    this.state = {
      readOnly: appContext.readOnly || !this.appContext.hasAnyRight([Rights.arClassMgmEnrollClass, Rights.arEnrollSelf]),
      readOnlyBySg: false,
      dataReady: false,
      emptyStudents: true
    };
    this.init();
  }
  _createClass(EaEnrollmentController, [{
    key: "init",
    value: function init() {
      var _this = this;
      var preload = Promise.resolve();
      if (!this.state.readOnly && !this.appContext.hasRights([Rights.arClassMgmEnrollClass]) && this.appContext.hasRights([Rights.arClassMgmViewClassSubjAll])) {
        this.state.readOnlyBySg = true;
        var loadTeacherSubjectGroups = this.enrollmentRepository.getTeacherSubjectGroups(true).then(function (sgIds) {
          _this.teacherSgIds = sgIds;
        });
        preload = loadTeacherSubjectGroups;
      }
      this.filterPanelSettings = {
        url: "/webapi/eaenrollment/filter",
        events: {
          ready: function ready() {
            preload.then(function () {
              _this.load();
            });
          },
          emptyChoice: function emptyChoice() {
            _this.state.dataReady = false;
            _this.$appLoader.hide();
          }
        }
      };
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var fpValues = this.filterPanel.getValues();
      var sgId = fpValues.EASGID;
      var termId = fpValues.TERMID;
      if (this.state.readOnlyBySg) {
        this.state.readOnly = this.teacherSgIds.findIndex(function (x) {
          return x == sgId;
        }) == -1;
      }
      var loadSubjectGroupStudents = this.enrollmentRepository.getSubjectGroupStudents(sgId, termId).then(function (students) {
        _this2.students = students;
        _this2.state.emptyStudents = students.length == 0;
        _this2.students.forEach(function (student) {
          student.name += " ".concat(student.activeClass == null ? _this2.language.Generic.Common.kRemovedStudentMark : student.activeClass.name);
        });
        //return Promise.resolve();
      });
      //this.$appLoader.show();
      return this.$longWork.execute(loadSubjectGroupStudents.then(function () {
        _this2.state.dataReady = true;
        _this2.changeTracker.clearDataChanges();
        _this2.$appLoader.hide();
        //return Promise.resolve();
      }));
    }
  }, {
    key: "addStudents",
    value: function addStudents() {
      var _this3 = this;
      var fpValues = this.filterPanel.getValues();
      var sgId = fpValues.EASGID;
      var _termId = fpValues.TERMID;
      try {
        var modalInstance = this.$uibModal.open({
          controller: _eaEnrollmentGroup.EaEnrollmentGroupComponent.controller,
          controllerAs: _eaEnrollmentGroup.EaEnrollmentGroupComponent.controllerAs,
          templateUrl: _eaEnrollmentGroup.EaEnrollmentGroupComponent.templateUrl,
          resolve: {
            subjectGroupId: function subjectGroupId() {
              return sgId;
            },
            termId: function termId() {
              return _termId;
            }
          }
        });
        modalInstance.result.then(function () {
          _this3.load();
        });
      } catch (ex) {
        console.error(ex);
      }
    }
  }, {
    key: "canRemove",
    value: function canRemove(student) {
      return !student.usedStudent;
    }
  }, {
    key: "removeStudents",
    value: function removeStudents() {
      var _this4 = this;
      if (this.selected.items.length == 0) {
        return this.$dialogs.message(this.language.Generic.Common.kErrMsgNoChecks);
      }
      return this.$dialogs.confirm(this.language.Generic.ClassManagement.kConfirmRemoveStudentsFromSubjectGroup).then(function () {
        var fpValues = _this4.filterPanel.getValues();
        var sgId = fpValues.EASGID;
        var termId = fpValues.TERMID;
        var work = _this4.enrollmentRepository.removeStudentsFromSubjectGroup(sgId, termId, _this4.selected.items.map(function (x) {
          return x.id;
        }));
        return _this4.$longWork.execute(work);
      }).then(function () {
        return _this4.load();
      }).then(function () {
        _this4.$alerts.success(_this4.language.Generic.ClassManagement.kStudentsWasRemovedFromSubjectGroup);
      });
    }
  }]);
  return EaEnrollmentController;
}();
var EaEnrollmentComponent = {
  controller: EaEnrollmentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/enrollment/eaEnrollment.component.html"
};
exports.EaEnrollmentComponent = EaEnrollmentComponent;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EaEnrollmentGroupComponent = void 0;
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _netcityModalCtrl = __webpack_require__(40);
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
var EaEnrollmentGroupController = /*#__PURE__*/function (_NetCityModalControll) {
  EaEnrollmentGroupController.$inject = ["$scope", "$longWork", "changeTracker", "$appLoader", "$dialogs", "enrollmentRepository", "$q", "appContext", "$uibModalInstance", "subjectGroupId", "termId", "language"];
  _inherits(EaEnrollmentGroupController, _NetCityModalControll);
  var _super = _createSuper(EaEnrollmentGroupController);
  /*@ngInject*/
  function EaEnrollmentGroupController($scope, $longWork, changeTracker, $appLoader, $dialogs, enrollmentRepository, $q, appContext, $uibModalInstance, subjectGroupId, termId, language) {
    var _this;
    _classCallCheck(this, EaEnrollmentGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$longWork = $longWork;
    _this.$appLoader = $appLoader;
    _this.enrollmentRepository = enrollmentRepository;
    _this.$q = $q;
    _this.subjectGroupId = subjectGroupId;
    _this.termId = termId;
    _this.language = language;
    _this.students = [];
    _this.selected = new _multiSelectable["default"]();
    _this.header = _this.language.Generic.ClassManagement.kAddStudentsToSubjectGroup;
    _this.state = {
      dataReady: false,
      emptyClasses: true,
      emptyStudents: true
    };
    _this.buildButtons();
    _this.load();
    return _this;
  }
  //загрузка данных
  _createClass(EaEnrollmentGroupController, [{
    key: "load",
    value: function load() {
      var _this2 = this;
      var loadEnrollmentInfo = this.enrollmentRepository.getSgEnrollmentInfo(this.subjectGroupId, this.termId).then(function (info) {
        _this2.sgEnrollmentInfo = info;
        _this2.state.emptyClasses = info.classes.length == 0;
        _this2["class"] = _this2.state.emptyClasses ? null : info.classes[0];
        return _this2.filterStudentsByClass();
      });
      this.$q.all([loadEnrollmentInfo]).then(function () {
        _this2.state.dataReady = true;
        _this2.$appLoader.hide();
        _this2.changeTracker.clearDataChanges($(".modal"));
      });
    }
  }, {
    key: "filterStudentsByClass",
    value: function filterStudentsByClass() {
      var _this3 = this;
      if (this.state.emptyClasses) {
        this.students = [];
      } else {
        this.students = this.sgEnrollmentInfo.students.filter(function (s) {
          return s.classId == _this3["class"].id;
        });
        this.prevClass = this["class"];
      }
      this.state.emptyStudents = this.students.length == 0;
      this.selected.dropSelect();
      this.$scope.$applyAsync();
      return Promise.resolve();
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
        isEnabled: function isEnabled() {
          return _this4.selected.items.length > 0;
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var checkAllBtn = {
        title: this.language.Generic.Common.kCheckAll,
        action: function action() {
          _this4.students.forEach(function (x) {
            if (!_this4.selected.isSelected(x)) {
              _this4.selected.select(x);
            }
          });
          _this4.changeTracker.dataWasChanged($(".modal"));
        },
        isEnabled: function isEnabled() {
          return _this4.selected.items.length < _this4.students.length;
        },
        icon: "glyphicon glyphicon-ok"
      };
      var unCheckAllBtn = {
        title: this.language.Generic.Common.kUnCheckAll,
        action: function action() {
          _this4.selected.dropSelect();
          _this4.changeTracker.clearDataChanges($(".modal"));
        },
        isEnabled: function isEnabled() {
          return _this4.selected.items.length != 0;
        },
        icon: "glyphicon glyphicon-remove"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this4.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, checkAllBtn, unCheckAllBtn, cancelBtn];
    }
  }, {
    key: "checkChanges",
    value: function checkChanges() {
      var _this5 = this;
      if (this.selected.items.length > 0) {
        return this.$dialogs.confirm(this.language.Generic.Common.kDataWereChanged).then(function () {
          return Promise.resolve();
        }, function () {
          _this5["class"] = _this5.prevClass;
          return Promise.reject();
        });
      } else {
        return Promise.resolve();
      }
    }
  }, {
    key: "changeClasses",
    value: function changeClasses() {
      var _this6 = this;
      this.checkChanges().then(function () {
        _this6.$appLoader.show();
        _this6.filterStudentsByClass().then(function () {
          _this6.$appLoader.hide();
        });
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this7 = this;
      if (this.selected.items.length == 0) {
        return this.$dialogs.message(this.language.Generic.Common.kNoChanges);
      }
      var studentIds = this.selected.items.map(function (x) {
        return x.id;
      });
      var work = this.enrollmentRepository.addStudentsToSubjectGroup(this.subjectGroupId, this.termId, studentIds).then(function () {
        return _this7.$uibModalInstance.close();
      });
      return this.$longWork.execute(work).then(function () {
        return _this7.$dialogs.message(_this7.language.Generic.ClassManagement.kStudentsWasAddToSubjectGroup);
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
      this.checkChanges().then(function () {
        return _this8.$uibModalInstance.dismiss("cancel");
      });
    }
  }]);
  return EaEnrollmentGroupController;
}(_netcityModalCtrl.NetCityModalController);
var EaEnrollmentGroupComponent = {
  controller: EaEnrollmentGroupController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/enrollment/eaEnrollmentGroup.component.html"
};
exports.EaEnrollmentGroupComponent = EaEnrollmentGroupComponent;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrollmentComponent = void 0;
var _common = __webpack_require__(25);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var _extDeferred = __webpack_require__(314);
var _classes = __webpack_require__(30);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Abilities = /*#__PURE__*/function () {
  function Abilities() {
    _classCallCheck(this, Abilities);
  }
  _createClass(Abilities, [{
    key: "values",
    get: function get() {
      return [{
        id: 1,
        name: language.Generic.Calendar.kEnableOut
      }, {
        id: 0,
        name: language.Generic.Calendar.kDisableOut
      }];
    }
  }]);
  return Abilities;
}();
var EnrollmentController = /*#__PURE__*/function () {
  EnrollmentController.$inject = ["$scope", "pageContext", "$appLoader", "$longWork", "$dialogs", "$alerts", "appContext", "enrollmentRepository", "changeTracker", "language"];
  /*@ngInject*/
  function EnrollmentController($scope, pageContext, $appLoader, $longWork, $dialogs, $alerts, appContext, enrollmentRepository, changeTracker, language) {
    _classCallCheck(this, EnrollmentController);
    this.$scope = $scope;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.enrollmentRepository = enrollmentRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.groupSelections = [];
    this.subjectNameAbilities = new Abilities().values;
    this.subjectNameAbility = 1;
    this.teacherNameAbilities = new Abilities().values;
    this.teacherNameAbility = 1;
    pageContext.title = this.language.Generic.ClassManagement.kTitleEnrollment;
    pageContext.parent = null;
    pageContext.back = null;
    this.state = {
      readOnly: appContext.readOnly,
      dataReady: false,
      emptyData: true,
      singleSubjectGroupView: false,
      canSave: false,
      canExpand: false
    };
    this.functype = appContext.funcType;
    this.isEmptyFilter = false;
    this.emptyFilterMessage = "";
    this.init();
  }
  _createClass(EnrollmentController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.filterPanelSettings = {
        url: "/webapi/sg-enrollment/filter",
        events: {
          ready: function ready() {
            _this.state.dataReady = false;
            _this.isEmptyFilter = false;
            _this.load();
          },
          emptyChoice: function emptyChoice(emptyFilter) {
            _this.state.dataReady = false;
            _this.state.emptyData = true;
            _this.state.canSave = false;
            _this.state.canExpand = false;
            _this.getEmptyFilterMessage(emptyFilter);
            _this.isEmptyFilter = true;
            _this.$scope.$applyAsync();
            _this.$appLoader.hide();
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
  }, {
    key: "getEmptyFilterMessage",
    value: function getEmptyFilterMessage(emptyFilter) {
      if (emptyFilter.id == "SBJID") {
        var classId = emptyFilter.panel.filters.find(function (x) {
          return x.id == "PCLID_IUP";
        });
        if (classId != undefined && classId.choice) {
          var exClassId = new _classes.IupClassId(classId.choice);
          this.emptyFilterMessage = exClassId.iup ? this.language.Generic.Filter.kNoSubjectsForIupGrade : this.language.Filter.kNoClassSubjectsWithGroups;
          return;
        }
      }
      this.emptyFilterMessage = emptyFilter.model.emptyText;
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var fpValues = this.filterPanel.getValues();
      var iupClassId = fpValues.IUPCLASSID;
      var sgEnrollFilter = {
        classId: fpValues.PCLID_IUP,
        subjectId: fpValues.SBJID,
        iupLevel: fpValues.LEVELID,
        sgId: fpValues.SGID,
        termId: fpValues.TERMID,
        iupClassId: iupClassId
      };
      var loadSubjectGroupEnrollInfo = this.enrollmentRepository.getSubjectGroupsEnrollment(sgEnrollFilter, this.appContext.readOnly).then(function (info) {
        _this2.state.emptyData = info == null || info.subjectGroups == null || info.subjectGroups.length == 0 || info.students == null || info.students.length == 0;
        _this2.state.readOnly = info == null || info.readOnly || _this2.state.emptyData;
        _this2.state.canSave = !_this2.state.readOnly;
        _this2.state.canExpand = info != null && info.canExpand && !_this2.state.emptyData;
        _this2.state.singleSubjectGroupView = fpValues.SGID && fpValues.SGID != "-1";
        _this2.groupEnrollmentInfo = info;
        _this2.showMessageOnIupAllClasses = !_this2.appContext.readOnly && iupClassId && iupClassId == "-1";
        _this2.noStudentsInClass = false;
        if (info != null && info.subjectGroups != null && info.subjectGroups.length > 0 && (info.students == null || info.students.length == 0)) {
          // Список учеников пустой, уточним - какие выбраны классы
          if (fpValues.PCLID_IUP && fpValues.PCLID_IUP.length > 0) {
            var exClassId = new _classes.IupClassId(fpValues.PCLID_IUP);
            if (exClassId.iup) {
              _this2.noStudentsInClass = iupClassId && iupClassId != "-1";
            } else {
              _this2.noStudentsInClass = fpValues.SGID && fpValues.SGID == "-1";
            }
          }
        }
      });
      //this.$appLoader.show();
      return this.$longWork.execute(loadSubjectGroupEnrollInfo).then(function () {
        _this2.prepareEnrollmentInfo();
        if (_this2.offerCopyStudentsGroup) {
          var termName = _this2.filterPanel.getTexts().TERMID;
          _this2.offerCopyMessage = _this2.language.Generic.ClassManagement.kOfferCopyStudentsGroup.replace("%", termName);
        }
        _this2.state.dataReady = true;
        _this2.changeTracker.clearDataChanges();
        _this2.$scope.$applyAsync();
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "prepareEnrollmentInfo",
    value: function prepareEnrollmentInfo() {
      var _this3 = this;
      this.groupSelections = [];
      // define this.state.offerCopyStudentsGroup
      this.offerCopyStudentsGroup = false;
      if (!this.appContext.readOnly && !this.state.canExpand && !this.state.singleSubjectGroupView) {
        var fpValues = this.filterPanel.getValues();
        var iupMode = fpValues.IUPCLASSID != undefined;
        if (iupMode || !this.state.emptyData) {
          // Более понятно здесь обратное условие - Если Классич. ПГ и Нет данных, то этот кусок кода не надо выполнять.
          var termId = fpValues.TERMID;
          var filterTerms = this.filterPanel.filters.find(function (x) {
            return x.id == "TERMID";
          });
          if (filterTerms && [-1, 0].indexOf(filterTerms.sourceIds.indexOf(termId)) == -1) {
            // т.е. (index of termId != -1 && != 0), т.е. выбран не первый уч. период
            // Для ИУП-параллели должны быть выбраны "Все" ИУП-классы
            if (!iupMode || fpValues.IUPCLASSID == "-1") {
              // есть выбранные?
              //this.state.offerCopyStudentsGroup = this.groupSelections.find(x => x.selectedStudents.length > 0 || x.usedStudents.length > 0) == undefined;
              //this.state.offerCopyStudentsGroup = true;
              this.offerCopyStudentsGroup = true;
            }
          }
        }
      }
      if (this.state.emptyData) {
        return;
      }
      this.groupEnrollmentInfo.subjectGroups.forEach(function (sg) {
        var groupSelection = angular.copy(angular.extend({
          editableStudents: new _multiSelectable["default"](),
          allChecked: null,
          allCheckedReadOnly: false
        }, sg));
        // исключаем из "selected" тех, которые "used", после - это два непересекаемых множества
        groupSelection.selectedStudents = groupSelection.selectedStudents.filter(function (x) {
          return groupSelection.usedStudents == null || groupSelection.usedStudents.indexOf(x) == -1;
        });
        groupSelection.selectedStudents.forEach(function (sid) {
          groupSelection.editableStudents.select(sid);
        });
        if (groupSelection.isModular == true) {
          // признак isModular переходит в признак allCheckedReadOnly, т.к. по смыслу они похожи, чтобы не ташить далее 2 признака
          groupSelection.allCheckedReadOnly = true;
        } else if (groupSelection.usedStudents.length > 0 && groupSelection.usedStudents.length == _this3.groupEnrollmentInfo.students.length) {
          groupSelection.allChecked = true;
          groupSelection.allCheckedReadOnly = true;
        } else if (groupSelection.selectedStudents.length == 0) {
          groupSelection.allChecked = false;
        } else if (groupSelection.usedStudents.length + groupSelection.selectedStudents.length == _this3.groupEnrollmentInfo.students.length) {
          groupSelection.allChecked = true;
        }
        _this3.groupSelections.push(groupSelection);
      }); // forEach
      if (!this.state.readOnly) {
        this.state.canSave = this.groupSelections.find(function (x) {
          return x.allCheckedReadOnly == false;
        }) != undefined;
      }
      // уточняем this.state.offerCopyStudentsGroup
      if (this.offerCopyStudentsGroup) {
        // есть выбранные?
        this.offerCopyStudentsGroup = this.groupSelections.find(function (x) {
          return x.selectedStudents.length > 0 || x.usedStudents.length > 0;
        }) == undefined;
      }
    }
  }, {
    key: "isStudentUsedInSubjectGroup",
    value: function isStudentUsedInSubjectGroup(subjectGroup, student) {
      if (subjectGroup.usedStudents.indexOf(student.id) != -1) {
        return true;
      }
      if (this.state.readOnly || subjectGroup.isModular == true) {
        //return subjectGroup.editableStudents.isSelected(student.id);
        return subjectGroup.selectedStudents.indexOf(student.id) != -1;
      }
    }
  }, {
    key: "checkCellChange",
    value: function checkCellChange(subjectGroup, student) {
      if (!subjectGroup || !student) {
        return false;
      }
      if (this.state.readOnly || this.isStudentUsedInSubjectGroup(subjectGroup, student)) {
        return false;
      }
      if (subjectGroup.editableStudents.selected.length == 0) {
        subjectGroup.allChecked = false;
      } else if (subjectGroup.usedStudents.length + subjectGroup.editableStudents.selected.length == this.groupEnrollmentInfo.students.length) {
        subjectGroup.allChecked = true;
      } else {
        subjectGroup.allChecked = null;
      }
      // return 
      // 	((subjectGroup.initialStudents.indexOf(student.id) != -1) && !subjectGroup.editableStudents.isSelected(student.id)) ||
      // 	((subjectGroup.initialStudents.indexOf(student.id) == -1) && subjectGroup.editableStudents.isSelected(student.id));
      var q1 = subjectGroup.selectedStudents.indexOf(student.id) != -1 && !subjectGroup.editableStudents.isSelected(student.id);
      var q2 = subjectGroup.selectedStudents.indexOf(student.id) == -1 && subjectGroup.editableStudents.isSelected(student.id);
      return q1 || q2;
    }
  }, {
    key: "checkAll",
    value: function checkAll(subjectGroup) {
      if (subjectGroup.allChecked === true) {
        subjectGroup.editableStudents.dropSelect();
        this.groupEnrollmentInfo.students.filter(function (x) {
          return subjectGroup.usedStudents == null || subjectGroup.usedStudents.indexOf(x.id) == -1;
        }).forEach(function (x) {
          subjectGroup.editableStudents.select(x.id);
        });
      } else if (subjectGroup.allChecked === false) {
        subjectGroup.editableStudents.dropSelect();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm("Внимание! Текущие изменения будут сброшены. Продолжить?").then(function () {
          return _this4.$longWork.execute(_this4.load());
        }).then(function () {
          return _this4.$dialogs.message("Данные успешно востановленны!");
        });
      } else {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
      }
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.SetupSchoolUI.kDataNotModified, false);
        return;
      }
      var subjectGroups = [];
      this.groupSelections.filter(function (x) {
        return !x.allCheckedReadOnly;
      }).forEach(function (x) {
        var subjectGroup = angular.copy(_this5.groupEnrollmentInfo.subjectGroups.find(function (y) {
          return y.id == x.id;
        }));
        subjectGroup.selectedStudents = x.editableStudents.selected;
        subjectGroups.push(subjectGroup);
      });
      var confirms = [];
      if (subjectGroups.length > 0) {
        var studentWithoutGroup = this.groupEnrollmentInfo.students.find(function (s) {
          return subjectGroups.filter(function (sg) {
            return sg.usedStudents.findIndex(function (x) {
              return x == s.id;
            }) == -1 && sg.selectedStudents.findIndex(function (x) {
              return x == s.id;
            }) == -1;
          }).length == subjectGroups.length;
        });
        if (studentWithoutGroup != undefined) {
          confirms.push(function () {
            return _this5.$dialogs.confirm(_this5.language.ClassManagement.kConfirmNoGroupsForStudent);
          });
        }
      }
      var savedInfo = {
        subjectGroups: subjectGroups,
        students: angular.copy(this.groupEnrollmentInfo.students),
        //students: this.groupEnrollmentInfo.students,
        readOnly: false,
        canExpand: false
      };
      var fpValues = this.filterPanel.getValues();
      var termId = fpValues.TERMID;
      _extDeferred.extDeferred.when(confirms).then(function () {
        return _this5.$longWork.execute(_this5.enrollmentRepository.saveSubjectGroupsEnrollment(termId, savedInfo));
      }).then(function () {
        return _this5.load();
      }).then(function () {
        _this5.$alerts.success(_this5.language.Generic.ClassManagement.kStudentGroupWasSaved);
      });
    }
  }, {
    key: "copy",
    value: function copy() {
      var _this6 = this;
      this.changeTracker.check().then(function () {
        //let copySgs = this.groupEnrollmentInfo.subjectGroups.filter(x => !x.isModular).map(x => x.id);
        var copySgs = _this6.groupEnrollmentInfo.subjectGroups.map(function (x) {
          return x.id;
        });
        if (copySgs.length == 0) {
          return _this6.$dialogs.message("Нет сведений для копирования");
        }
        var fpValues = _this6.filterPanel.getValues();
        var termId = fpValues.TERMID;
        _this6.$dialogs.confirm(_this6.language.Generic.ClassManagement.kConfirmCopyStudGroupsToNextPeriods).then(function () {
          return _this6.$longWork.execute(_this6.enrollmentRepository.copySubjectGroupsEnrollment(termId, copySgs));
        }).then(function () {
          return _this6.load();
        }).then(function () {
          _this6.$alerts.success(_this6.language.Generic.ClassManagement.kStudentGroupWasCopied);
        });
      });
    }
  }, {
    key: "showAbilities",
    value: function showAbilities() {
      if (this.filterPanelSettings == undefined) {
        return false;
      }
      var doShow = this.functype == _common.FuncType.addSchool && this.state.dataReady && !this.state.emptyData && !this.state.singleSubjectGroupView;
      return doShow;
    }
  }, {
    key: "showButtons",
    value: function showButtons() {
      var doShow = this.state.dataReady && !this.state.emptyData && (this.state.canSave || this.state.canExpand);
      //console.log(" ************** - doShow: " + doShow);
      return doShow;
    }
  }, {
    key: "getSubjectGroupTitle",
    value: function getSubjectGroupTitle(subjectGroup) {
      var title = subjectGroup.name;
      if (this.subjectNameAbility == 0 && subjectGroup.group != null) {
        title = subjectGroup.group.name;
      }
      if (this.teacherNameAbility == 1) {
        var sgTeachers = subjectGroup.teachers.reduce(function (teachers, teacher, index) {
          return teachers += (index != 0 ? "<br>" : "") + teacher.name;
        }, "");
        title += "<br>(".concat(sgTeachers, ")");
      }
      return title;
    }
  }]);
  return EnrollmentController;
}();
var EnrollmentComponent = {
  controller: EnrollmentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/enrollment/subjectGroups/enrollment.component.html"
};
exports.EnrollmentComponent = EnrollmentComponent;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StayRegimeDirective = exports.RoomForClassDirective = exports.ClassTypeDirective = exports.AddSpecializationDirective = void 0;
var _classValidation = __webpack_require__(343);
var AddSpecializationDirective = function AddSpecializationDirective() {
  return {
    restrict: "A",
    require: "ngModel",
    scope: {
      addSpec: "=ngModel",
      editClass: "="
    },
    link: function link(scope, element, attrs, ngModel) {
      var validator = new _classValidation.ClassValidationService(scope);
      scope.$watch(function () {
        return scope.addSpec;
      }, function (newValue, oldValue) {
        if (newValue == oldValue || !newValue) {
          return;
        }
        ngModel.$setValidity("addspec", validator.checkAddSpecialization());
      });
    }
  };
};
exports.AddSpecializationDirective = AddSpecializationDirective;
AddSpecializationDirective.selector = "addspec";
var RoomForClassDirective = function RoomForClassDirective() {
  return {
    restrict: "A",
    require: "ngModel",
    scope: {
      roomId: "=ngModel",
      editClass: "=",
      classRooms: "=",
      classes: "="
    },
    link: function link(scope) {
      var validator = new _classValidation.ClassValidationService(new _classValidation.GetComputedScope().execute(scope));
      var form = scope.$parent.$ctrl.form;
      scope.$watch(function () {
        return scope.roomId;
      }, function (newValue, oldValue) {
        if (newValue == oldValue || !newValue) {
          return;
        }
        scope.editClass.room = scope.classRooms.find(function (x) {
          return x.id == newValue;
        });
        if (scope.editClass.funcType != "PreSchool") {
          return;
        }
        if (validator.checkRoomForClass()) {
          form.StayRegime.$setValidity("stayregimeid", true);
          form.CLASSROOM.$setValidity("roomid", true);
        } else {
          form.CLASSROOM.$setValidity("roomid", false);
        }
      });
    }
  };
};
exports.RoomForClassDirective = RoomForClassDirective;
RoomForClassDirective.selector = "roomid";
var StayRegimeDirective = function StayRegimeDirective() {
  return {
    restrict: "A",
    require: "ngModel",
    scope: {
      stayRegime: "=ngModel",
      editClass: "=",
      classRooms: "=",
      classes: "="
    },
    link: function link(scope) {
      var validator = new _classValidation.ClassValidationService(new _classValidation.GetComputedScope().execute(scope));
      var form = scope.$parent.$ctrl.form;
      scope.$watch(function () {
        return scope.stayRegime;
      }, function (newValue, oldValue) {
        if (angular.equals(newValue, oldValue) || !newValue) {
          return;
        }
        if (scope.editClass.funcType != "PreSchool") {
          return;
        }
        if (validator.checkRoomForClass()) {
          form.StayRegime.$setValidity("stayregimeid", true);
          form.CLASSROOM.$setValidity("roomid", true);
        } else {
          form.StayRegime.$setValidity("stayregimeid", false);
        }
      });
    }
  };
};
exports.StayRegimeDirective = StayRegimeDirective;
StayRegimeDirective.selector = "stayregimeid";
var ClassTypeDirective = function ClassTypeDirective() {
  return {
    restrict: "A",
    require: "ngModel",
    scope: {
      classType: "=ngModel",
      editClass: "=",
      invalidClassType: "=",
      classTypes: "="
    },
    link: function link(scope, element, attrs, ngModel) {
      var validator = new _classValidation.ClassValidationService(scope);
      var form = scope.$parent.$ctrl.form;
      scope.$watch(function () {
        return scope.classType;
      }, function (newValue, oldValue) {
        if (angular.equals(newValue, oldValue) || !newValue) {
          return;
        }
        validate();
      });
      scope.$watch(function () {
        return scope.editClass.douGroupType;
      }, function (newValue, oldValue) {
        if (angular.equals(newValue, oldValue)) {
          return;
        }
        validate();
      });
      function validate() {
        if (scope.editClass.funcType != "PreSchool") {
          return;
        }
        var isValid = validator.checkGroupType();
        if (isValid) {
          scope.invalidClassType = null;
        } else {
          var validIds = validator.filter();
          scope.invalidClassType = {
            douGroupType: scope.editClass.douGroupType,
            validClassTypes: scope.classTypes.filter(function (x) {
              return validIds.indexOf(x.id) > -1;
            })
          };
        }
        ngModel.$setValidity("grouptype", isValid);
        if (form.addSpecialization && form.addSpecialization.$modelValue) {
          form.addSpecialization.$setValidity("addspec", validator.checkAddSpecialization());
        }
      }
    }
  };
};
exports.ClassTypeDirective = ClassTypeDirective;
ClassTypeDirective.selector = "grouptype";

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetComputedScope = exports.ClassValidationService = void 0;
var _classes = __webpack_require__(30);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var GetInitRoomId = /*#__PURE__*/_createClass(function GetInitRoomId(scope) {
  _classCallCheck(this, GetInitRoomId);
  var _a;
  if (scope.editClass.id == 0) {
    this.initRoomId = scope.editClass.funcType == "PreSchool" ? -1 : 0;
  } else {
    this.initRoomId = (_a = scope.editClass.room) === null || _a === void 0 ? void 0 : _a.id;
  }
});
var GetComputedScope = /*#__PURE__*/function () {
  function GetComputedScope() {
    _classCallCheck(this, GetComputedScope);
  }
  _createClass(GetComputedScope, [{
    key: "execute",
    value: function execute(scope) {
      scope.initRoomId = new GetInitRoomId(scope).initRoomId;
      return scope;
    }
  }]);
  return GetComputedScope;
}();
exports.GetComputedScope = GetComputedScope;
var ClassValidationService = /*#__PURE__*/function () {
  function ClassValidationService(scope) {
    _classCallCheck(this, ClassValidationService);
    // ссылка на внешний scope
    this.scope = scope;
  }
  _createClass(ClassValidationService, [{
    key: "checkAddSpecialization",
    value: function checkAddSpecialization() {
      var editClass = this.scope.editClass;
      var groupTypeId = editClass.douGroupType.id;
      if (groupTypeId != _classes.DouGroupType.Combined && groupTypeId != _classes.DouGroupType.Compensating) {
        return true;
      }
      var specId = editClass.classType.id;
      var addSpecId = editClass.addSpecialization.id;
      return specId != addSpecId;
    }
  }, {
    key: "checkRoomForClass",
    value: function checkRoomForClass() {
      var editClass = this.scope.editClass;
      // возможность сохранения с пустым помещением
      if (!editClass.room || editClass.room.id <= 0) {
        return true;
      }
      var roomId = editClass.room.id;
      var roomInfo = this.scope.classRooms.find(function (r) {
        return r.id == roomId;
      });
      var isGkpRoom = this.scope.classes.some(function (x) {
        var _a;
        return x.stayRegime.id == _classes.StayRegime.Short && ((_a = x.room) === null || _a === void 0 ? void 0 : _a.id) == roomId;
      });
      // если в помещении/кабинете занимаются ГКП группы и выбран режим ГКП у группы
      var gkpGroupInRoom = isGkpRoom && editClass.stayRegime.id == _classes.StayRegime.Short;
      if (gkpGroupInRoom) {
        return true;
      }
      // если помещение/кабинет не поменялся
      if (roomId == this.scope.initRoomId && (!isGkpRoom || !roomInfo.used)) {
        return true;
      }
      if (!roomInfo.used) {
        return true;
      }
      return false;
    }
  }, {
    key: "filter",
    value: function filter() {
      var douGroupTypeId = this.scope.editClass.douGroupType.id;
      switch (douGroupTypeId) {
        case _classes.DouGroupType.General:
        case _classes.DouGroupType.ForYoungChildren:
        case _classes.DouGroupType.CareAndMaintenance:
        case _classes.DouGroupType.FamilyPreschool:
          return [101];
        case _classes.DouGroupType.Wellness:
          return [106, 107, 126, 116, 114, 127, 128, 129, 130];
        case _classes.DouGroupType.Combined:
          return [120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125];
        case _classes.DouGroupType.Compensating:
          return [120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125];
        default:
          return [];
      }
    }
  }, {
    key: "checkGroupType",
    value: function checkGroupType() {
      return this.filter().indexOf(this.scope.editClass.classType.id) > -1;
    }
  }]);
  return ClassValidationService;
}();
exports.ClassValidationService = ClassValidationService;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRelaysComponent = void 0;
var _classes = __webpack_require__(32);
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ClassesRelaysController = /*#__PURE__*/function () {
  ClassesRelaysController.$inject = ["pageContext", "$appLoader", "$longWork", "$dialogs", "$q", "$alerts", "appContext", "$scope", "classesRelaysRepository", "profilesRepository", "termsRepository", "termTypesRepository", "classesRepository", "changeTracker", "language"];
  /*@ngInject*/
  function ClassesRelaysController(pageContext, $appLoader, $longWork, $dialogs, $q, $alerts, appContext, $scope, classesRelaysRepository, profilesRepository, termsRepository, termTypesRepository, classesRepository, changeTracker, language) {
    _classCallCheck(this, ClassesRelaysController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$q = $q;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.$scope = $scope;
    this.classesRelaysRepository = classesRelaysRepository;
    this.profilesRepository = profilesRepository;
    this.termsRepository = termsRepository;
    this.termTypesRepository = termTypesRepository;
    this.classesRepository = classesRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.dictProfiles = {};
    pageContext.title = this.language.Generic.ClassManagement.kTitleRelays + this.language.Common.kClass_es;
    pageContext.parent = {
      title: language.ClassManagement.kTitleClasses,
      href: "/classes/"
    };
    //pageContext.back = null;
    this.state = {
      readOnly: appContext.readOnly || !appContext.hasAnyRight([Rights.arClassMgmCreateClass]),
      dataReady: false,
      emptyClasses: true,
      onlyOneProfile: true,
      onlyOneTermType: true
    };
    this.load(-1);
  }
  _createClass(ClassesRelaysController, [{
    key: "load",
    value: function load(termTypeId) {
      var _this = this;
      this.state.dataReady = false;
      var loadClassesRelays = this.classesRelaysRepository.getClassesRelays().then(function (classesRelays) {
        _this.classesRelays = classesRelays;
      });
      var loadScheduleRelays = this.classesRelaysRepository.getScheduleRelays().then(function (relays) {
        _this.relays = relays;
      });
      var loadProfiles = this.profilesRepository.getProfiles().then(function (profiles) {
        _this.profiles = profiles;
      });
      var loadTerms = this.termsRepository.getTerms().then(function (terms) {
        _this.terms = terms;
      });
      var loadTermTypes = this.termTypesRepository.getTermTypes().then(function (termTypes) {
        _this.termTypes = termTypes;
      });
      var getClassesArgs = {
        expand: [_classes.ClassExpandProp.chiefs]
      };
      var loadClasses = this.classesRepository.getYearClasses(getClassesArgs).then(function (classes) {
        _this.yearClasses = classes;
        _this.state.emptyClasses = _this.yearClasses == null || _this.yearClasses.length == 0;
      });
      return this.$longWork.execute(this.$q.all([loadClassesRelays, loadScheduleRelays, loadProfiles, loadTerms, loadTermTypes, loadClasses]).then(function () {
        _this.state.onlyOneProfile = true;
        _this.state.onlyOneTermType = true;
        if (!_this.state.emptyClasses) {
          _this.profiles = _this.profiles.filter(function (x) {
            return _this.yearClasses.find(function (y) {
              return y.profileId == x.id;
            }) != undefined;
          });
          _this.terms = _this.terms.filter(function (x) {
            return _this.classesRelays.find(function (cr) {
              return cr.termId == x.id;
            }) != undefined;
          });
          _this.termTypes = _this.termTypes.filter(function (x) {
            return _this.terms.find(function (y) {
              return y.termTypeId == x.id;
            });
          });
          _this.state.onlyOneProfile = _this.profiles.length == 1;
          if (!_this.state.onlyOneProfile) {
            _this.profiles.forEach(function (x) {
              _this.dictProfiles[x.id] = x.name;
            });
          }
          _this.state.onlyOneTermType = _this.termTypes.length == 1;
          if (_this.state.onlyOneTermType) {
            _this.termTypeName = _this.termTypes[0].name;
          }
          _this.termType = termTypeId == -1 ? _this.termTypes[0] : _this.termTypes.find(function (x) {
            return x.id == termTypeId;
          });
          _this.doChangeTermType();
        }
        _this.state.dataReady = true;
        _this.changeTracker.clearDataChanges();
        _this.$appLoader.hide();
      }));
    }
  }, {
    key: "checkChanges",
    value: function checkChanges() {
      var _this2 = this;
      if (this.changeTracker.isDataChanged()) {
        return this.$dialogs.confirm(this.language.Generic.Common.kDataWereChanged).then(function () {
          // this.changeTracker.clearDataChanges(); - если здесь это вызвать, то происходят непонятные вещи - путается рабочий Тип периода,
          // иногда таблица как бы сама меняет Тип периода в ответ на изменение Смены.
          return Promise.resolve();
        }, function () {
          //this.termType = angular.copy(this.prevTermType);
          _this2.termType = _this2.termTypes.find(function (x) {
            return x.id == _this2.prevTermTypeId;
          });
          //this.$scope.$applyAsync();
          return Promise.reject();
        });
      } else {
        return Promise.resolve();
      }
    }
  }, {
    key: "changeTermType",
    value: function changeTermType() {
      var _this3 = this;
      this.checkChanges().then(function () {
        _this3.doChangeTermType();
      });
    }
  }, {
    key: "doChangeTermType",
    value: function doChangeTermType() {
      var _this4 = this;
      try {
        this.termTypeTerms = this.terms.filter(function (x) {
          return x.termTypeId == _this4.termType.id;
        });
        var termIds = this.termTypeTerms.map(function (x) {
          return x.id;
        });
        // Если присваивать напрямую, а не копировать (angular.copy), то - если данные поменять, и потом переключить фильтр по Типу периода,
        // то будет вопрос "... продолжить без сохранения данных?", отвечаем на него "Да", соответсвенно переходим без сохранения изменений
        // на новый Тип периода, но потом в фильтре выбираем этот первоначальный Тип периода, переходим на него - но там будут изменённые данные,
        // а не первоначальные.
        // Вроде это не очень хорошо, поэтому работаем здесь с копией первоначальных данных, чтобы эти первоначальные данные не портить.
        this.editClassesRelays = angular.copy(this.classesRelays.filter(function (x) {
          return termIds.includes(x.termId);
        }));
        var classIds = this.editClassesRelays.map(function (x) {
          return x.classId;
        });
        this.editClasses = this.yearClasses.filter(function (x) {
          return classIds.includes(x.id);
        });
        //this.prevTermType = angular.copy(this.termType);
        this.prevTermTypeId = this.termType.id;
        this.changeTracker.clearDataChanges();
        this.$scope.$applyAsync();
      } catch (ex) {
        console.error(ex);
      }
    }
  }, {
    key: "showButtons",
    value: function showButtons() {
      var doShow = this.state.dataReady && !this.state.readOnly && !this.state.emptyClasses;
      //console.log(" ************** - doShow: " + doShow);
      return doShow;
    }
  }, {
    key: "checkRelayChange",
    value: function checkRelayChange(classId, termId) {
      if (this.state.readOnly) {
        return false;
      }
      var initialClassRelay = this.classesRelays.find(function (x) {
        return x.classId == classId && x.termId == termId;
      });
      if (!initialClassRelay) {
        return false;
      }
      var editClassRelay = this.getRelayByClassAndTerm(classId, termId);
      if (!editClassRelay) {
        return false;
      }
      return editClassRelay.relay != initialClassRelay.relay;
    }
  }, {
    key: "getRelayByClassAndTerm",
    value: function getRelayByClassAndTerm(classId, termId) {
      var editClassRelay = this.editClassesRelays.find(function (x) {
        return x.classId == classId && x.termId == termId;
      });
      return editClassRelay;
    }
  }, {
    key: "getRelayText",
    value: function getRelayText(classId, termId) {
      var editClassRelay = this.getRelayByClassAndTerm(classId, termId);
      if (!editClassRelay) {
        return "";
      }
      return editClassRelay.relay.toString();
    }
  }, {
    key: "getClassChiefName",
    value: function getClassChiefName(classDto) {
      if (classDto && classDto.chiefs && classDto.chiefs.length && classDto.chiefs.length > 0) {
        return classDto.chiefs[0].name;
      }
      return "";
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$longWork.execute(this.classesRelaysRepository.saveClassesRelays(this.editClassesRelays)).then(function () {
          _this5.state.dataReady = false;
          _this5.$appLoader.hide();
          _this5.load(_this5.prevTermTypeId).then(function () {
            _this5.$alerts.info(_this5.language.Generic.Common.kDataSaved);
          });
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.changeTracker.isDataChanged()) {
        // this.load(this.prevTermTypeId).then(() => {
        // 	this.$alerts.info(this.language.Generic.Common.kResetChanges);
        // });
        this.doChangeTermType(); // там происходит восстановление через angular.copy(), поэтому незачем делать полную перезагрузку
        this.$alerts.info(this.language.Generic.Common.kResetChanges);
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }]);
  return ClassesRelaysController;
}();
var ClassesRelaysComponent = {
  controller: ClassesRelaysController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/classmanagement/classes/classesRelays/classesRelays.component.html"
};
exports.ClassesRelaysComponent = ClassesRelaysComponent;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermTypesRepository = exports.TermTypeExpandData = void 0;
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentTypeHelper = exports.AddressEditComponent = void 0;
var _fiasAddress = __webpack_require__(347);
var _common = __webpack_require__(44);
var _address = __webpack_require__(315);
var _legacyAddress = __webpack_require__(349);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContentTypeHelper = /*#__PURE__*/function () {
  function ContentTypeHelper() {
    _classCallCheck(this, ContentTypeHelper);
  }
  _createClass(ContentTypeHelper, null, [{
    key: "getPrevContentType",
    value: function getPrevContentType(contentType) {
      if (contentType == _address.AddressContentType.region) {
        return [_address.AddressContentType.country];
      }
      if (contentType == _address.AddressContentType.district) {
        return [_address.AddressContentType.region];
      }
      if (contentType == _address.AddressContentType.street) {
        return [_address.AddressContentType.city, _address.AddressContentType.district, _address.AddressContentType.region];
      }
      if (contentType == _address.AddressContentType.building) {
        return [_address.AddressContentType.street, _address.AddressContentType.city];
      }
      if (contentType == _address.AddressContentType.city) {
        return [_address.AddressContentType.district, _address.AddressContentType.region];
      }
      return [_address.AddressContentType.region];
    }
  }]);
  return ContentTypeHelper;
}();
exports.ContentTypeHelper = ContentTypeHelper;
var AddressEditController = /*#__PURE__*/function () {
  AddressEditController.$inject = ["$scope", "fiasClient", "loggerFactory", "$http"];
  /*@ngInject*/
  function AddressEditController($scope, fiasClient, loggerFactory, $http) {
    _classCallCheck(this, AddressEditController);
    this.$scope = $scope;
    this.fiasClient = fiasClient;
    this.loggerFactory = loggerFactory;
    this.$http = $http;
    this.fiasMode = false;
    this.fiasUnknown = false;
    this.ready = false;
  }
  _createClass(AddressEditController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.saveModel = new _common.BehaviorSubject();
      if (this.fiasMode) {
        this.provider = new _fiasAddress.FiasAddressProvider(this.fiasClient, 20, this.loggerFactory, this.$http);
      } else {
        this.provider = new _legacyAddress.LegacyAddressProvider();
      }
      this.provider.prepareAddress(this.address).then(function (editModel) {
        _this.editAddress = editModel;
        _this.initFiasUnknown();
        _this.select2Settings = {
          region: _this.getDefaultSettings("регион", _address.AddressContentType.region),
          district: _this.getDefaultSettings("мун. район", _address.AddressContentType.district),
          city: _this.getDefaultSettings("нас. пункт", _address.AddressContentType.city),
          street: _this.getDefaultSettings("улицу", _address.AddressContentType.street),
          building: _this.getDefaultSettings("дом", _address.AddressContentType.building)
        };
        if (!_this.fiasMode) {
          _this.select2Settings.country = _this.getDefaultSettings("страна", _address.AddressContentType.country);
        }
        _this.ready = true;
        _this.syncAddress();
        _this.$scope.$applyAsync();
      }, function (reason) {
        _this.ready = true;
        _this.error = reason;
        _this.$scope.$applyAsync();
      });
    }
  }, {
    key: "isFederalCityRegion",
    value: function isFederalCityRegion() {
      if (!this.fiasMode) {
        return false;
      }
      var regionFiasItem = this.editAddress.region;
      var federalCityCodes = ["77", "78", "92"];
      var isFederal = federalCityCodes.some(function (code) {
        return regionFiasItem === null || regionFiasItem === void 0 ? void 0 : regionFiasItem.code.startsWith(code);
      });
      return isFederal;
    }
  }, {
    key: "showStreet",
    get: function get() {
      if (this.editAddress.city != null) {
        return true;
      }
      if (!this.fiasMode) {
        return false;
      }
      return this.isFederalCityRegion;
    }
  }, {
    key: "fiasBuldingSelected",
    get: function get() {
      if (!this.fiasMode) {
        return false;
      }
      var buildingFiasItem = this.editAddress.building;
      if (!buildingFiasItem || buildingFiasItem == null || buildingFiasItem == undefined) {
        return false;
      }
      return !buildingFiasItem.unknown;
    }
  }, {
    key: "initAjaxSettings",
    value: function initAjaxSettings(contentType) {
      var _this2 = this;
      var getPrevChoice = function getPrevChoice(contentType) {
        var prevContentTypes = ContentTypeHelper.getPrevContentType(contentType);
        if (prevContentTypes == null) {
          return null;
        }
        var prevChoice = prevContentTypes.map(function (c) {
          return _this2.editAddress[c];
        }).find(function (c) {
          return c != null && c.id != "-1";
        });
        return prevChoice;
      };
      return {
        url: this.provider.getUrl(contentType),
        delay: 250,
        cache: true,
        type: "GET",
        dataType: "json",
        escapeMarkup: function escapeMarkup(markup) {
          return markup;
        },
        params: {
          contentType: "application/json"
        },
        data: function data(params) {
          var lastChoise = getPrevChoice(contentType);
          return _this2.provider.getQuery(contentType, lastChoise, params.term);
        },
        processResults: function processResults(data, query) {
          var mappedData = _this2.provider.processResult(contentType, data, query);
          return {
            results: mappedData
          };
        }
      };
    }
    // Настройки по умолчанию
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings(inputTitle, contentType) {
      var _this3 = this;
      var ajaxSettings = this.initAjaxSettings(contentType);
      var defaultLimit = this.fiasMode ? 1 : 0;
      var data = [];
      data.push(this.editAddress[contentType]);
      var defaultSettings = {
        limit: 20,
        minimumInputLength: contentType == _address.AddressContentType.building || contentType == _address.AddressContentType.street ? 1 : defaultLimit,
        language: "ru",
        allowClear: true,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 " + inputTitle,
        ajax: ajaxSettings,
        templateResult: function templateResult(item) {
          return _this3.provider.displayResult(item);
        },
        templateSelection: function templateSelection(item) {
          return _this3.provider.displaySelection(item);
        },
        data: data,
        initSelection: function initSelection(element, callback) {
          var current = _this3.editAddress[contentType];
          if (current) {
            callback(current);
          } else {
            callback([]);
          }
        },
        clear: new _common.Subject(),
        onChange: function onChange() {
          switch (contentType) {
            case _address.AddressContentType.country:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              _this3.select2Settings.district.clear.next();
              _this3.select2Settings.region.clear.next();
              break;
            case _address.AddressContentType.region:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              _this3.select2Settings.district.clear.next();
              break;
            case _address.AddressContentType.city:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              break;
            case _address.AddressContentType.district:
              _this3.select2Settings.building.clear.next();
              _this3.select2Settings.street.clear.next();
              _this3.select2Settings.city.clear.next();
              break;
            case _address.AddressContentType.street:
              _this3.select2Settings.building.clear.next();
              break;
          }
          _this3.syncAddress();
          _this3.$scope.$applyAsync();
        }
      };
      return defaultSettings;
    }
  }, {
    key: "isFilled",
    value: function isFilled() {
      return this.editAddress.region && this.editAddress.city && this.editAddress.building;
    }
  }, {
    key: "syncAddress",
    value: function syncAddress() {
      var commonModel = this.provider.getSaveModel();
      var saveAddressData = {
        id: this.address.addressId,
        addressType: this.address.addressType,
        country: commonModel.country,
        region: commonModel.region,
        district: commonModel.district,
        city: commonModel.city,
        street: commonModel.street,
        building: null,
        corp: this.editAddress.corpus,
        flat: this.editAddress.flat,
        struc: this.editAddress.struc,
        zipCode: this.editAddress.zipCode
      };
      if (this.editAddress.building) {
        saveAddressData.building = {
          name: this.editAddress.building.text,
          code: null,
          type: null,
          zip: null
        };
        var fiasBuilding = this.editAddress.building;
        if (fiasBuilding && fiasBuilding.aoGuid) {
          saveAddressData.building.name = fiasBuilding.houseNum || saveAddressData.building.name;
          saveAddressData.building.id = fiasBuilding.id;
          saveAddressData.building.aoGuid = fiasBuilding.aoGuid;
          saveAddressData.building.houseGuid = fiasBuilding.houseGuid;
          saveAddressData.building.zip = fiasBuilding.zip;
        }
      }
      this.initFiasUnknown();
      this.saveModel.next(saveAddressData);
    }
  }, {
    key: "initFiasUnknown",
    value: function initFiasUnknown() {
      if (this.fiasMode) {
        var fiasModel = this.provider.addressModel;
        this.fiasUnknown = fiasModel.isUnknown();
      }
    }
  }]);
  return AddressEditController;
}();
var AddressEditComponent = {
  selector: "addressEdit",
  controller: AddressEditController,
  bindings: {
    address: "=",
    saveModel: "=",
    fiasMode: "<?",
    editAddress: "=?",
    isSchoolAddress: "<?",
    ready: "=?",
    error: "=?",
    form: "<?"
  },
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/components/address/addressedit.component.html"
};
exports.AddressEditComponent = AddressEditComponent;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiasAddressProvider = exports.FiasAddressModel = exports.FiasAddressItem = void 0;
var _addressedit = __webpack_require__(346);
var _fiasclient = __webpack_require__(348);
var _address = __webpack_require__(315);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FiasAddressItem = /*#__PURE__*/function () {
  function FiasAddressItem() {
    _classCallCheck(this, FiasAddressItem);
  }
  _createClass(FiasAddressItem, [{
    key: "getSaveItem",
    value: function getSaveItem() {
      return {
        id: this.id,
        aoGuid: this.aoGuid,
        houseGuid: this.houseGuid,
        code: this.code,
        type: this.type,
        zip: this.zip,
        name: this.text
      };
    }
  }]);
  return FiasAddressItem;
}();
exports.FiasAddressItem = FiasAddressItem;
var FiasAddressModel = /*#__PURE__*/function () {
  function FiasAddressModel() {
    _classCallCheck(this, FiasAddressModel);
  }
  _createClass(FiasAddressModel, [{
    key: "corpus",
    get: function get() {
      if (!this.building) {
        return "";
      }
      if (this.building.unknown) {
        return this._corpus;
      }
      return this.building.buildNum;
    },
    set: function set(val) {
      this._corpus = val;
    }
  }, {
    key: "struc",
    get: function get() {
      if (!this.building) {
        return "";
      }
      if (this.building.unknown) {
        return this._struc;
      }
      return this.building.strucNum;
    },
    set: function set(val) {
      this._struc = val;
    }
  }, {
    key: "zipCode",
    get: function get() {
      if (this.building && this.building.zip) {
        return this.building.zip;
      }
      if (this.street && this.street.zip) {
        return this.street.zip;
      }
      if (this.city && this.city.zip) {
        return this.city.zip;
      }
      return "";
    }
  }, {
    key: "isUnknown",
    value: function isUnknown() {
      return this.region && this.region.unknown || this.district && this.district.unknown || this.city && this.city.unknown || this.street && this.street.unknown || this.building && this.building.unknown;
    }
  }, {
    key: "getSaveModel",
    value: function getSaveModel() {
      var region = this.region && this.region.getSaveItem();
      var district = this.district && this.district.getSaveItem();
      var city = this.city && this.city.id && this.city.getSaveItem();
      var street = this.street && this.street.getSaveItem();
      var commonData = {
        country: null,
        region: region,
        district: district,
        city: city,
        street: street
      };
      return commonData;
    }
  }]);
  return FiasAddressModel;
}();
exports.FiasAddressModel = FiasAddressModel;
var FiasAddressProvider = /*#__PURE__*/function () {
  function FiasAddressProvider(fiasClient, limit, loggerFactory, $http) {
    _classCallCheck(this, FiasAddressProvider);
    this.fiasClient = fiasClient;
    this.limit = limit;
    this.$http = $http;
    this.logger = loggerFactory.getInstance("FiasAddressProvider");
  }
  _createClass(FiasAddressProvider, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      return this.addressModel.getSaveModel();
    }
  }, {
    key: "prepareAddress",
    value: function prepareAddress(addressEdit) {
      var _this = this;
      var promiseChain = this.$http.get("/webapi/settings/externalAddressServiceUrl").then(function (response) {
        return _this.fiasClient.url = response.data;
      })["catch"](function () {
        return Promise.reject("Произошла ошибка связи с сервисом адресов ФИАС.\nПопробуйте позже или воспользуйтесь обычным режимом ввода.");
      });
      var model = new FiasAddressModel();
      model.flat = addressEdit.flat;
      model.corpus = addressEdit.corp;
      model.struc = addressEdit.struc;
      //model.zipCode = addressEdit.zipCode;
      if (addressEdit.region) {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.region, addressEdit.region).then(function (resRegion) {
            return model.region = resRegion;
          });
        });
      }
      if (addressEdit.district) {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.district, addressEdit.district, model.region).then(function (resDistrict) {
            return model.district = resDistrict;
          });
        });
      }
      if (addressEdit.city) {
        promiseChain = promiseChain.then(function () {
          var _a;
          if (((_a = model.district) === null || _a === void 0 ? void 0 : _a.type) == "Город" && (addressEdit.city.name == model.district.text || addressEdit.city.kladr == addressEdit.district.kladr)) {
            //фикс для Наро-Фоминск
            return Promise.resolve(null);
          }
          return _this.prepareItem(_address.AddressContentType.city, addressEdit.city, model.district || model.region).then(function (resCity) {
            return model.city = resCity;
          });
        });
      }
      if (addressEdit.street && addressEdit.street.name != "Нет") {
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.street, addressEdit.street, model.city || model.district).then(function (resStreet) {
            return model.street = resStreet;
          });
        });
      }
      if (addressEdit.building) {
        var building = {
          id: null,
          name: addressEdit.building,
          fiasId: addressEdit.buildingFiasId,
          corp: addressEdit.corp,
          struc: addressEdit.struc
        };
        promiseChain = promiseChain.then(function () {
          return _this.prepareItem(_address.AddressContentType.building, building, model.street || model.city).then(function (resbuilding) {
            return model.building = resbuilding;
          });
        });
      }
      return promiseChain.then(function () {
        _this.addressModel = model;
        return model;
      });
    }
  }, {
    key: "prepareItem",
    value: function prepareItem(contentType, item, parent) {
      var _this2 = this;
      var unknownItem = new FiasAddressItem();
      unknownItem.id = item.fiasId;
      unknownItem.text = item.name;
      unknownItem.unknown = true;
      unknownItem.contentType = contentType;
      if (parent && parent.unknown) {
        return Promise.resolve(unknownItem);
      }
      var fiasParent = parent;
      var searchByName = true;
      var fiasSearch;
      if (contentType == _address.AddressContentType.street && item.fiasId) {
        fiasSearch = this.fiasClient.searchByAoGuid(contentType, item.fiasId, this.limit, parent && parent.contentType, parent && parent.id);
        searchByName = false;
      } else {
        fiasSearch = this.fiasClient.search(contentType, item.name, this.limit, parent && parent.contentType, parent && parent.id);
      }
      fiasSearch["catch"](function (xhr) {
        _this2.logger.error("\u043E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043A \u0424\u0418\u0410\u0421", xhr);
      });
      return fiasSearch.then(function (resultsByName) {
        _this2.logger.debug("prepare ".concat(contentType, " results: ") + JSON.stringify(resultsByName));
        if (contentType == _address.AddressContentType.building) {
          var buildingDto = item;
          resultsByName = resultsByName.filter(function (r) {
            return r.buildNum == buildingDto.corp && r.strucNum == buildingDto.struc;
          });
        }
        if (resultsByName.length > 1 && item.fiasId && parent && parent.id) {
          //пробуем уточнить результаты поиком по id
          return _this2.fiasClient.searchByAoGuid(contentType, item.fiasId, _this2.limit, parent && parent.contentType, parent.id).then(function (resultsById) {
            var filtered = resultsByName.filter(function (r) {
              return resultsById.some(function (ri) {
                return ri.aoGuid == r.aoGuid;
              });
            });
            if (contentType == _address.AddressContentType.building) {
              filtered = resultsByName.filter(function (r) {
                return resultsById.some(function (ri) {
                  return ri.houseGuid == r.houseGuid;
                });
              });
            }
            if (filtered.length) {
              return filtered[0];
            }
            return resultsByName[0];
          });
        }
        if (resultsByName.length) {
          return resultsByName[0];
        }
        if (contentType == _address.AddressContentType.city) {
          var isFederalCity = (fiasParent.type == "Город" || fiasParent.typeShort == "г") && !new RegExp('[^0]').test(fiasParent.code.substr(2));
          if (isFederalCity) {
            return null;
          }
        }
        var canSearchById = searchByName && item.fiasId && parent && parent.id;
        var hasUnsupportedChars = ['-', '/', '(', ')'].some(function (c) {
          return item.name.indexOf(c) != -1;
        });
        if (!unknownItem.id) {
          // если unknownItem.id является null, undefined или "", то во избежание ошибок (поиска) это значение изменяется
          unknownItem.id = " ";
        }
        if (!canSearchById || !hasUnsupportedChars && contentType != _address.AddressContentType.building) {
          return unknownItem;
        }
        return _this2.fiasClient.searchByAoGuid(contentType, item.fiasId, _this2.limit, parent && parent.contentType, parent && parent.id).then(function (results) {
          if (results.length) {
            return results[0];
          }
          return unknownItem;
        });
      })["catch"](function () {
        return Promise.reject("Произошла ошибка связи с сервисом адресов ФИАС.\nПопробуйте позже или воспользуйтесь обычным режимом ввода.");
      });
    }
  }, {
    key: "getUrl",
    value: function getUrl(contentType) {
      return "https://fias.ir-tech.ru/location";
    }
  }, {
    key: "getQuery",
    value: function getQuery(contentType, parent, name) {
      var parentContentType = parent && parent.contentType;
      var parentId = parent && parent.id;
      if (!parentId && contentType != _address.AddressContentType.region) {
        //если не определен родитель результат поиска должен быть пустым
        contentType = _address.AddressContentType.region;
        name = "unknown";
      }
      var limit = this.limit;
      if (contentType == _address.AddressContentType.city && parent && parent.contentType == _address.AddressContentType.region) {
        //поиск по имени нас.пункта в регионе возвращает в том числе и нас. пункты в мун. районах, которые потом отфильтровываются
        //эти записи могут занимать весь лимит, поэтому здесь увеличиваем лимит.
        limit = limit * 2;
      }
      var params = _fiasclient.FiasClient.buildQuery(contentType, limit, null, name, parentContentType, parentId);
      return params;
    }
  }, {
    key: "processResult",
    value: function processResult(contentType, data, query) {
      var preresult = _fiasclient.FiasClient.processReferences(data.result);
      var mappedResults = preresult.map(_fiasclient.FiasClient.prepeareData);
      var prevContentType = _addressedit.ContentTypeHelper.getPrevContentType(contentType);
      if (prevContentType && prevContentType.length > 1) {
        var nearestContentType = prevContentType[0];
        var nearestAddressItem = this.addressModel[nearestContentType];
        if (!nearestAddressItem) {
          //если не заполнено адреснное поле - ближайшего родительского адресного элемента
          var filter = function filter(o) {
            if (!o.parents) {
              return true;
            }
            var actualNearestParent = o.parents.find(function (p) {
              return p.currentStatus === 0 && p.contentType === nearestContentType;
            });
            //убираем из результатов адреса, для которыъ есть актуальный ближайший родитель (для города - мун. район)
            return !actualNearestParent;
          };
          mappedResults = mappedResults.filter(filter);
        }
      }
      if (query.term && mappedResults.length === 0 && contentType === _address.AddressContentType.building) {
        var unknownItem = new FiasAddressItem();
        unknownItem.id = query.term;
        unknownItem.text = query.term;
        unknownItem.unknown = true;
        unknownItem.contentType = contentType;
        mappedResults.push(unknownItem);
      }
      this.uniqFullNames(mappedResults);
      var count = function count(x) {
        return x.parents && x.parents.length || 0;
      };
      return mappedResults.sort(function (a, b) {
        return count(a) - count(b);
      });
    }
  }, {
    key: "uniqFullNames",
    value: function uniqFullNames(list) {
      list.forEach(function (item) {
        var _double = list.find(function (c) {
          return c.text == item.text && c.id != item.id && c.fullName == item.fullName;
        });
        if (_double && item.zip) {
          item.fullName += " (" + item.zip + ")";
        }
      });
    }
  }, {
    key: "displayResult",
    value: function displayResult(item) {
      return this.format(item, item.parents, true);
    }
  }, {
    key: "displaySelection",
    value: function displaySelection(item) {
      var _a;
      if (item.contentType == _address.AddressContentType.street) {
        var streetParents = (_a = item.parents) === null || _a === void 0 ? void 0 : _a.filter(function (p) {
          return p.contentType == _address.AddressContentType.street;
        });
        return this.format(item, streetParents, false, false);
      }
      return this.format(item);
    }
  }, {
    key: "map",
    value: function map(contentType, item) {
      return {
        id: item.fiasId,
        text: item.name,
        meta: item,
        contentType: contentType
      };
    }
  }, {
    key: "getParentName",
    value: function getParentName(item, parents, fullName) {
      var _a;
      var parent = parents[parents.length - 1];
      var parentName = parent.name;
      if (parent.typeShort) {
        parentName += " " + parent.typeShort;
      }
      if (item.fullName) {
        if (item.contentType == _address.AddressContentType.city) {
          return item.fullName;
        }
        if (item.contentType == _address.AddressContentType.street) {
          if (parent.contentType == _address.AddressContentType.street) {
            //если улицы в родителях есть элем. план. стр-ры - то в fullName сервис ФИАС не отдает ее наименование. 
            //поэтому сами собираем наименование
            return item.fullName + " (" + parentName + ")";
          }
          if (parent.contentType == _address.AddressContentType.district) {
            //если улицы в родителях нет нас. пункта - то исправляем наименование
            //до фикса полное наименование следующее - Московская обл, ул Советская
            try {
              var nameParts = item.fullName.split(',');
              if (nameParts.length == 2) {
                nameParts.splice(1, 0, parent.typeShort + " " + parent.name);
                return nameParts.join(', ');
              }
            } catch (e) {
              console.log(e);
            }
          }
          //в остальных случаях наименование правильное
          return item.fullName;
        }
      }
      if (fullName) {
        parentName = parent.contentType == item.contentType ? "".concat(parent.fullName, ", ").concat(parent.name) : ((_a = parent.fullName) === null || _a === void 0 ? void 0 : _a.length) > 0 ? parent.fullName : parent.name;
      }
      return parentName;
    }
  }, {
    key: "getDisplayText",
    value: function getDisplayText(item) {
      var displayText;
      if (item.contentType === _address.AddressContentType.region) {
        displayText = "".concat(item.code.substr(0, 2), " ").concat(item.text, " ").concat(item.typeShort);
      } else {
        displayText = item.text;
        if (item.type) {
          displayText = item.type + " " + displayText;
        } else if (item.typeShort) {
          displayText = item.typeShort + (item.typeShort.endsWith(".") ? " " : ". ") + displayText;
        }
      }
      if (item.currentStatus > 0) {
        //todo. уточнить неактуальный статус
        //todo. вместо текста стилизовать option
        displayText += " (адрес неактуальный)";
      }
      return displayText;
    }
  }, {
    key: "format",
    value: function format(item, parents, html, fullName) {
      if (!item || typeof item == "string" || !item.contentType) {
        if (item.text) {
          return item.text;
        }
        return item;
      }
      if (item.unknown) {
        return $("<span>".concat(item.text, " <i>\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0424\u0418\u0410\u0421 \u044D\u043B\u0435\u043C\u0435\u043D\u0442</i> </span>"));
      }
      var displayText = this.getDisplayText(item);
      var withParents = parents && parents && parents.length > 0;
      if (withParents) {
        var parentName = this.getParentName(item, parents, fullName);
        if (html) {
          return $("<div>".concat(displayText, "</div><small><i>").concat(parentName, "</i></small>"));
        } else {
          return "".concat(displayText, " (").concat(parentName, ")");
        }
      }
      return displayText;
    }
  }]);
  return FiasAddressProvider;
}();
exports.FiasAddressProvider = FiasAddressProvider;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiasClient = void 0;
var _fiasAddress = __webpack_require__(347);
var _address = __webpack_require__(315);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FiasClient = /*#__PURE__*/function () {
  FiasClient.$inject = ["$http"];
  /*@ngInject*/
  function FiasClient($http) {
    _classCallCheck(this, FiasClient);
    this.$http = $http;
    //public url: string = "http://10.11.19.31/location";
    this.url = "https://fias.ir-tech.ru/location";
  }
  _createClass(FiasClient, [{
    key: "searchByAoGuid",
    value: function searchByAoGuid(contentType, aoGuid, limit, parentType, parentId) {
      var params = FiasClient.buildQuery(contentType, limit, aoGuid, null, parentType, parentId);
      var headersConfig = {
        at: undefined,
        "sec-fetch-mode": undefined
      };
      var httpConfig = {
        params: params,
        headers: headersConfig,
        withCredentials: false
      };
      return this.$http.get(this.url, httpConfig).then(function (response) {
        var preresult = FiasClient.processReferences(response.data.result);
        if (contentType == "building") {
          //проблема на стороне сервиса ФИАС. при поиске по id домов, возвращается неправильное имя
          preresult.forEach(function (b) {
            b.name = b.houseNum;
            if (b.strucNum) {
              b.name += "-" + b.strucNum;
            }
          });
        }
        var mappedResults = preresult.map(FiasClient.prepeareData);
        return mappedResults;
      });
    }
  }, {
    key: "search",
    value: function search(contentType, query, limit, parentType, parentId) {
      var params = FiasClient.buildQuery(contentType, limit, null, query, parentType, parentId);
      var headersConfig = {
        at: undefined,
        "sec-fetch-mode": undefined
      };
      var httpConfig = {
        params: params,
        headers: headersConfig,
        withCredentials: false
      };
      return this.$http.get(this.url, httpConfig).then(function (response) {
        var preresult = FiasClient.processReferences(response.data.result);
        var mappedResults = preresult.map(FiasClient.prepeareData);
        return mappedResults;
      });
    }
  }], [{
    key: "buildQuery",
    value: function buildQuery(contentType, limit, fiasaoguid, query, parentType, parentId) {
      if (query) {
        if (contentType == _address.AddressContentType.region) {
          var patterns = [/\s?а?обл\.?$/i, /\s?АО\s?/i, /^Г\.?\s/, /^респ\.?\s/i, /\sкрай\.?$/i, /\sАвтономный округ.*$/i, /\sреспублика.*$/i];
          patterns.forEach(function (pattern) {
            return query = query.replace(pattern, "");
          });
        } else if (contentType == _address.AddressContentType.street || contentType == _address.AddressContentType.city) {
          query = query.replace(/\?/ig, "");
        }
      }
      var queryParams = {
        limit: limit,
        //* bounds(ctx.delta, 1, 3),
        contentType: contentType,
        actual: true,
        withParent: true,
        byRef: true,
        parentType: null,
        parentId: null
      };
      if (query) {
        queryParams.query = query;
      }
      if (fiasaoguid) {
        queryParams.fiasaoguid = fiasaoguid;
      }
      if (parentType) {
        if (parentType == _address.AddressContentType.unknown) {
          queryParams.contentType = _address.AddressContentType.unknown;
        } else {
          queryParams.parentType = parentType;
          queryParams.parentId = parentId;
          //queryParams[parentType + "Id"] = parentId;
        }
      }

      return queryParams;
    }
  }, {
    key: "prepeareData",
    value: function prepeareData(o) {
      var item = new _fiasAddress.FiasAddressItem();
      item.id = o.id;
      item.aoGuid = o.aoGuid;
      item.text = o.name;
      item.code = o.code;
      item.currentStatus = o.currentStatus;
      item.contentType = o.contentType;
      item.parents = o.parents;
      item.type = o.type;
      item.typeShort = o.typeShort;
      item.zip = o.zip;
      item.fullName = o.fullName;
      if (o.houseGuid) {
        item.houseGuid = o.houseGuid;
        item.buildNum = o.buildNum;
        item.strucNum = o.strucNum;
        item.houseNum = o.houseNum;
        if (o.houseNum && (o.buildNum || o.strucNum)) {
          var extraParts = [];
          if (o.buildNum) {
            extraParts.push("корп. " + o.buildNum);
          }
          if (o.strucNum) {
            extraParts.push("стр. " + o.strucNum);
          }
          item.text = o.houseNum + " (" + extraParts.join(", ") + ")";
        }
      }
      return item;
    }
  }, {
    key: "processReferences",
    value: function processReferences(list) {
      var dictionary = {};
      var refElement = function refElement(element) {
        if (!element) return;
        if (element.$ref) {
          return dictionary[element.$ref];
        }
        if (element.$id) dictionary[element.$id] = element;
        element.parents = references(element.parents);
        return element;
      };
      var references = function references(elements) {
        if (!elements) return;
        var result = [];
        for (var index in elements) {
          var element = elements[index];
          result.push(refElement(element));
        }
        return result;
      };
      return references(list);
    }
  }]);
  return FiasClient;
}();
exports.FiasClient = FiasClient;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyAddressProvider = exports.LegacyAddressModel = exports.LegacyAddressItem = void 0;
var _address = __webpack_require__(315);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LegacyAddressItem = /*#__PURE__*/function () {
  function LegacyAddressItem() {
    _classCallCheck(this, LegacyAddressItem);
  }
  _createClass(LegacyAddressItem, [{
    key: "getSaveItem",
    value: function getSaveItem() {
      return {
        internalId: parseInt(this.id),
        name: this.text,
        code: null,
        type: "",
        zip: null
      };
    }
  }]);
  return LegacyAddressItem;
}();
exports.LegacyAddressItem = LegacyAddressItem;
var LegacyAddressModel = /*#__PURE__*/function () {
  function LegacyAddressModel() {
    _classCallCheck(this, LegacyAddressModel);
  }
  _createClass(LegacyAddressModel, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      var country = this.country && this.country.getSaveItem();
      var region = this.region && this.region.getSaveItem();
      var district = this.district && this.district.getSaveItem();
      var city = this.city && this.city.getSaveItem();
      var street = this.street && this.street.getSaveItem();
      var commonData = {
        country: country,
        region: region,
        district: district,
        city: city,
        street: street
      };
      return commonData;
    }
  }]);
  return LegacyAddressModel;
}();
exports.LegacyAddressModel = LegacyAddressModel;
var LegacyAddressProvider = /*#__PURE__*/function () {
  function LegacyAddressProvider() {
    _classCallCheck(this, LegacyAddressProvider);
  }
  _createClass(LegacyAddressProvider, [{
    key: "getSaveModel",
    value: function getSaveModel() {
      return this.addressModel.getSaveModel();
    }
  }, {
    key: "prepareAddress",
    value: function prepareAddress(addressEdit) {
      var _this = this;
      var promiseChain = Promise.resolve();
      var model = new LegacyAddressModel();
      model.flat = addressEdit.flat;
      model.corpus = addressEdit.corp;
      model.struc = addressEdit.struc;
      model.zipCode = addressEdit.zipCode;
      if (addressEdit.country) {
        model.country = new LegacyAddressItem();
        model.country.contentType = _address.AddressContentType.country;
        model.country.id = addressEdit.country.id.toString();
        model.country.text = addressEdit.country.name;
      }
      if (addressEdit.region) {
        model.region = new LegacyAddressItem();
        model.region.contentType = _address.AddressContentType.region;
        model.region.id = addressEdit.region.id.toString();
        model.region.text = addressEdit.region.name;
        if (addressEdit.region.kladr) {
          model.region.text = addressEdit.region.kladr + " " + model.region.text;
        }
      }
      if (addressEdit.district) {
        model.district = new LegacyAddressItem();
        model.district.contentType = _address.AddressContentType.district;
        model.district.id = addressEdit.district.id.toString();
        model.district.text = addressEdit.district.name;
      }
      if (addressEdit.city) {
        model.city = new LegacyAddressItem();
        model.city.contentType = _address.AddressContentType.city;
        model.city.id = addressEdit.city.id.toString();
        model.city.text = addressEdit.city.name;
        if (addressEdit.city.typeShort) {
          model.city.text = addressEdit.city.typeShort + ". " + model.city.text;
        }
      }
      if (addressEdit.street) {
        model.street = new LegacyAddressItem();
        model.street.contentType = _address.AddressContentType.street;
        model.street.id = addressEdit.street.id.toString();
        model.street.text = addressEdit.street.name;
        if (addressEdit.street.typeShort) {
          model.street.text = addressEdit.street.typeShort + ". " + model.street.text;
        }
      }
      if (addressEdit.building) {
        model.building = new LegacyAddressItem();
        model.building.text = addressEdit.building;
      }
      return promiseChain.then(function () {
        _this.addressModel = model;
        return model;
      });
    }
  }, {
    key: "getUrl",
    value: function getUrl(contentType) {
      switch (contentType) {
        case _address.AddressContentType.country:
          return "/webapi/addresses/countries";
        case _address.AddressContentType.city:
          return "/webapi/addresses/cities";
        case _address.AddressContentType.region:
          return "/webapi/addresses/states";
        case _address.AddressContentType.district:
          return "/webapi/addresses/provinces";
        case _address.AddressContentType.street:
          return "/webapi/addresses/locations";
        case _address.AddressContentType.building:
          return "/webapi/addresses/cities";
      }
    }
  }, {
    key: "getQuery",
    value: function getQuery(contentType, parent, name) {
      var params = {
        name: name
      };
      switch (contentType) {
        case _address.AddressContentType.country:
          break;
        case _address.AddressContentType.region:
          params.countryId = parent.id;
          break;
        case _address.AddressContentType.district:
          params.stateId = parent.id;
          break;
        case _address.AddressContentType.city:
          if (parent.contentType == _address.AddressContentType.region) {
            params.stateId = parent.id;
          } else if (parent.contentType == _address.AddressContentType.district) {
            params.provinceId = parent.id;
          }
          break;
        case _address.AddressContentType.street:
          params.cityId = parent.id;
          break;
        case _address.AddressContentType.building:
          params.stateId = parent.id;
          break;
      }
      return params;
    }
  }, {
    key: "processResult",
    value: function processResult(contentType, data, query) {
      var mappedData = data.map(function (i) {
        var item = new LegacyAddressItem();
        item.id = i.id.toString();
        item.text = i.name;
        if (contentType == _address.AddressContentType.region && i.kladr) {
          item.text = i.kladr.substr(0, 2) + " " + item.text;
        }
        if (contentType == _address.AddressContentType.street && i.typeShort) {
          item.text = i.typeShort + ". " + item.text;
        }
        item.contentType = contentType;
        return item;
      });
      return mappedData;
    }
  }, {
    key: "displayResult",
    value: function displayResult(item) {
      return this.format(item);
    }
  }, {
    key: "displaySelection",
    value: function displaySelection(item) {
      return this.format(item);
    }
  }, {
    key: "map",
    value: function map(contentType, item) {
      return {
        id: item.fiasId,
        text: item.name,
        meta: item,
        contentType: contentType
      };
    }
  }, {
    key: "format",
    value: function format(item) {
      return item.text;
    }
  }]);
  return LegacyAddressProvider;
}();
exports.LegacyAddressProvider = LegacyAddressProvider;

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