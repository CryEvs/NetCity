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
/******/ 	return __webpack_require__(__webpack_require__.s = 478);
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
if (document.documentElement.closest === undefined) {
  // Element.prototype.matches
  Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {
    var element = this;
    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
    var index = 0;
    while (elements[index] && elements[index] !== element) {
      ++index;
    }
    return !!elements[index];
  };

  /**
   * Альтернатива функции parents
   */
  // Element.prototype.closest
  Element.prototype.closest = function closest(selector) {
    var node = this;
    while (node) {
      if (node.matches(selector)) return node;else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
    }
    return null;
  };

  /**
   * Альтернатива функции remove. Так как её нет в IE11.
   */
  (function () {
    var arr = [window.Element, window.CharacterData, window.DocumentType];
    var args = [];
    arr.forEach(function (item) {
      if (item) {
        args.push(item.prototype);
      }
    });

    // from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
    (function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
          return;
        }
        Object.defineProperty(item, 'remove', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function remove() {
            this.parentNode.removeChild(this);
          }
        });
      });
    })(args);
  })();

  /**
   * Альтернатива функции URLSearchParams, т.к. её нет в IE11.
   */
  // from: https://stackoverflow.com/questions/45758837/script5009-urlsearchparams-is-undefined-in-ie-11
  (function (w) {
    w.URLSearchParams = w.URLSearchParams || function (searchString) {
      var self = this;
      self.searchString = searchString;
      self.get = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(self.searchString);
        if (results == null) {
          return null;
        } else {
          return decodeURI(results[1]) || 0;
        }
      };
    };
  })(window);
}

/**
 * Альтернатива "has"
 */

(function (self, undefined) {
  var _DOMTokenList = function () {
    var n = !0,
      t = function t(_t, e, r, o) {
        Object.defineProperty ? Object.defineProperty(_t, e, {
          configurable: !1 === n || !!o,
          get: r
        }) : _t.__defineGetter__(e, r);
      };
    try {
      t({}, "support");
    } catch (e) {
      n = !1;
    }
    return function (n, e) {
      var r = this,
        o = [],
        i = {},
        a = 0,
        c = 0,
        f = function f(n) {
          t(r, n, function () {
            return u(), o[n];
          }, !1);
        },
        l = function l() {
          if (a >= c) for (; c < a; ++c) f(c);
        },
        u = function u() {
          var t,
            r,
            c = arguments,
            f = /\s+/;
          if (c.length) for (r = 0; r < c.length; ++r) if (f.test(c[r])) throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'), t.code = 5, t.name = "InvalidCharacterError", t;
          for (o = "object" == _typeof(n[e]) ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f), "" === o[0] && (o = []), i = {}, r = 0; r < o.length; ++r) i[o[r]] = !0;
          a = o.length, l();
        };
      return u(), t(r, "length", function () {
        return u(), a;
      }), r.toLocaleString = r.toString = function () {
        return u(), o.join(" ");
      }, r.item = function (n) {
        return u(), o[n];
      }, r.contains = function (n) {
        return u(), !!i[n];
      }, r.add = function () {
        u.apply(r, t = arguments);
        for (var t, c, f = 0, p = t.length; f < p; ++f) c = t[f], i[c] || (o.push(c), i[c] = !0);
        a !== o.length && (a = o.length >>> 0, "object" == _typeof(n[e]) ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l());
      }, r.remove = function () {
        u.apply(r, t = arguments);
        for (var t, c = {}, f = 0, p = []; f < t.length; ++f) c[t[f]] = !0, delete i[t[f]];
        for (f = 0; f < o.length; ++f) c[o[f]] || p.push(o[f]);
        o = p, a = p.length >>> 0, "object" == _typeof(n[e]) ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l();
      }, r.toggle = function (n, t) {
        return u.apply(r, [n]), undefined !== t ? t ? (r.add(n), !0) : (r.remove(n), !1) : i[n] ? (r.remove(n), !1) : (r.add(n), !0);
      }, r.forEach = Array.prototype.forEach, r;
    };
  }();
  function ArrayCreate(r) {
    if (1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1) throw new RangeError("Invalid array length");
    var n = [];
    return n.length = r, n;
  }
  function Call(t, l) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function.");
    return t.apply(l, n);
  }
  function CreateDataProperty(e, r, t) {
    var a = {
      value: t,
      writable: !0,
      enumerable: !0,
      configurable: !0
    };
    try {
      return Object.defineProperty(e, r, a), !0;
    } catch (n) {
      return !1;
    }
  }
  function CreateDataPropertyOrThrow(t, r, o) {
    var e = CreateDataProperty(t, r, o);
    if (!e) throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(o) + "` to property `" + Object.prototype.toString.call(r) + "` on object `" + Object.prototype.toString.call(t) + "`");
    return e;
  }
  function CreateMethodProperty(e, r, t) {
    var a = {
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    };
    Object.defineProperty(e, r, a);
  }
  function Get(n, t) {
    return n[t];
  }
  function HasOwnProperty(r, t) {
    return Object.prototype.hasOwnProperty.call(r, t);
  }
  function IsCallable(n) {
    return "function" == typeof n;
  }
  function RequireObjectCoercible(e) {
    if (null === e || e === undefined) throw TypeError(Object.prototype.toString.call(e) + " is not coercible to Object.");
    return e;
  }
  function SameValueNonNumber(e, n) {
    return e === n;
  }
  function ToBoolean(o) {
    return Boolean(o);
  }
  function ToObject(e) {
    if (null === e || e === undefined) throw TypeError();
    return Object(e);
  }
  function GetV(t, e) {
    return ToObject(t)[e];
  }
  function GetMethod(e, n) {
    var r = GetV(e, n);
    if (null === r || r === undefined) return undefined;
    if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
    return r;
  }
  function Type(e) {
    switch (_typeof(e)) {
      case "undefined":
        return "undefined";
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "symbol":
        return "symbol";
      default:
        return null === e ? "null" : "Symbol" in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? "symbol" : "object";
    }
  }
  function CreateIterResultObject(e, r) {
    if ("boolean" !== Type(r)) throw new Error();
    var t = {};
    return CreateDataProperty(t, "value", e), CreateDataProperty(t, "done", r), t;
  }
  function GetPrototypeFromConstructor(t, o) {
    var r = Get(t, "prototype");
    return "object" !== Type(r) && (r = o), r;
  }
  function OrdinaryCreateFromConstructor(r, e) {
    var t = arguments[2] || {},
      o = GetPrototypeFromConstructor(r, e),
      a = Object.create(o);
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(a, n, {
      configurable: !0,
      enumerable: !1,
      writable: !0,
      value: t[n]
    });
    return a;
  }
  function IsConstructor(t) {
    return "object" === Type(t) && "function" == typeof t && !!t.prototype;
  }
  function Construct(r) {
    var t = arguments.length > 2 ? arguments[2] : r,
      o = arguments.length > 1 ? arguments[1] : [];
    if (!IsConstructor(r)) throw new TypeError("F must be a constructor.");
    if (!IsConstructor(t)) throw new TypeError("newTarget must be a constructor.");
    if (t === r) return new (Function.prototype.bind.apply(r, [null].concat(o)))();
    var n = OrdinaryCreateFromConstructor(t, Object.prototype);
    return Call(r, n, o);
  }
  function IsRegExp(e) {
    if ("object" !== Type(e)) return !1;
    var n = "Symbol" in self && "match" in self.Symbol ? Get(e, self.Symbol.match) : undefined;
    if (n !== undefined) return ToBoolean(n);
    try {
      var t = e.lastIndex;
      return e.lastIndex = 0, RegExp.prototype.exec.call(e), !0;
    } catch (l) {} finally {
      e.lastIndex = t;
    }
    return !1;
  }
  function IteratorClose(r, t) {
    if ("object" !== Type(r["[[Iterator]]"])) throw new Error(Object.prototype.toString.call(r["[[Iterator]]"]) + "is not an Object.");
    var e = r["[[Iterator]]"],
      o = GetMethod(e, "return");
    if (o === undefined) return t;
    try {
      var n = Call(o, e);
    } catch (c) {
      var a = c;
    }
    if (t) return t;
    if (a) throw a;
    if ("object" !== Type(n)) throw new TypeError("Iterator's return method returned a non-object.");
    return t;
  }
  function IteratorComplete(t) {
    if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return ToBoolean(Get(t, "done"));
  }
  function IteratorNext(t) {
    if (arguments.length < 2) var e = Call(t["[[NextMethod]]"], t["[[Iterator]]"]);else e = Call(t["[[NextMethod]]"], t["[[Iterator]]"], [arguments[1]]);
    if ("object" !== Type(e)) throw new TypeError("bad iterator");
    return e;
  }
  function IteratorStep(t) {
    var r = IteratorNext(t);
    return !0 !== IteratorComplete(r) && r;
  }
  function IteratorValue(t) {
    if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object.");
    return Get(t, "value");
  }
  function OrdinaryToPrimitive(r, t) {
    if ("string" === t) var e = ["toString", "valueOf"];else e = ["valueOf", "toString"];
    for (var i = 0; i < e.length; ++i) {
      var n = e[i],
        a = Get(r, n);
      if (IsCallable(a)) {
        var o = Call(a, r);
        if ("object" !== Type(o)) return o;
      }
    }
    throw new TypeError("Cannot convert to primitive.");
  }
  function SameValueZero(n, e) {
    return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || 1 / n === Infinity && 1 / e == -Infinity || 1 / n == -Infinity && 1 / e === Infinity || n === e : SameValueNonNumber(n, e));
  }
  function ToInteger(n) {
    if ("symbol" === Type(n)) throw new TypeError("Cannot convert a Symbol value to a number");
    var t = Number(n);
    return isNaN(t) ? 0 : 1 / t === Infinity || 1 / t == -Infinity || t === Infinity || t === -Infinity ? t : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
  }
  function ToLength(n) {
    var t = ToInteger(n);
    return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1);
  }
  function ToPrimitive(e) {
    var t = arguments.length > 1 ? arguments[1] : undefined;
    if ("object" === Type(e)) {
      if (arguments.length < 2) var i = "default";else t === String ? i = "string" : t === Number && (i = "number");
      var r = "function" == typeof self.Symbol && "symbol" == _typeof(self.Symbol.toPrimitive) ? GetMethod(e, self.Symbol.toPrimitive) : undefined;
      if (r !== undefined) {
        var n = Call(r, e, [i]);
        if ("object" !== Type(n)) return n;
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i);
    }
    return e;
  }
  function ToString(t) {
    switch (Type(t)) {
      case "symbol":
        throw new TypeError("Cannot convert a Symbol value to a string");
      case "object":
        return ToString(ToPrimitive(t, String));
      default:
        return String(t);
    }
  }
  function ToPropertyKey(r) {
    var i = ToPrimitive(r, String);
    return "symbol" === Type(i) ? i : ToString(i);
  }
  function TrimString(e, u) {
    var r = RequireObjectCoercible(e),
      t = ToString(r),
      n = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;
    if ("start" === u) var p = String.prototype.replace.call(t, new RegExp("^" + n, "g"), "");else p = "end" === u ? String.prototype.replace.call(t, new RegExp(n + "$", "g"), "") : String.prototype.replace.call(t, new RegExp("^" + n + "|" + n + "$", "g"), "");
    return p;
  }
  var _mutation = function () {
    function e(e) {
      return "function" == typeof Node ? e instanceof Node : e && "object" == _typeof(e) && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12;
    }
    return function n(t) {
      if (1 === t.length) return e(t[0]) ? t[0] : document.createTextNode(t[0] + "");
      for (var o = document.createDocumentFragment(), r = 0; r < t.length; r++) o.appendChild(e(t[r]) ? t[r] : document.createTextNode(t[r] + ""));
      return o;
    };
  }();
  if (!("of" in Array)) {
    CreateMethodProperty(Array, "of", function r() {
      var r = arguments.length,
        t = arguments,
        e = this;
      if (IsConstructor(e)) var a = Construct(e, [r]);else a = ArrayCreate(r);
      for (var o = 0; o < r;) {
        var n = t[o],
          h = ToString(o);
        CreateDataPropertyOrThrow(a, h, n), o += 1;
      }
      return a.length = r, a;
    });
  }
  if (!("fill" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "fill", function t(e) {
      for (var r = arguments[1], n = arguments[2], o = ToObject(this), a = ToLength(Get(o, "length")), h = ToInteger(r), i = h < 0 ? Math.max(a + h, 0) : Math.min(h, a), g = n === undefined ? a : ToInteger(n), M = g < 0 ? Math.max(a + g, 0) : Math.min(g, a); i < M;) {
        o[ToString(i)] = e, i += 1;
      }
      return o;
    });
  }
  if (!("includes" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "includes", function e(r) {
      "use strict";

      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (0 === o) return !1;
      var n = ToInteger(arguments[1]);
      if (n >= 0) var a = n;else (a = o + n) < 0 && (a = 0);
      for (; a < o;) {
        var i = Get(t, ToString(a));
        if (SameValueZero(r, i)) return !0;
        a += 1;
      }
      return !1;
    });
  }
  if (!("DocumentFragment" in self && function () {
    try {
      return new DocumentFragment(), !0;
    } catch (n) {
      return !1;
    }
  }())) {
    !function (t) {
      t.DocumentFragment = function n() {
        return document.createDocumentFragment();
      };
      var e = document.createDocumentFragment();
      t.DocumentFragment.prototype = Object.create(e.constructor.prototype);
    }(self);
  }
  if (!("DocumentFragment" in self && "append" in DocumentFragment.prototype)) {
    !function (t) {
      document.createDocumentFragment().constructor.prototype.append = function n() {
        this.appendChild(_mutation(arguments));
      }, t.DocumentFragment.prototype.append = function e() {
        this.appendChild(_mutation(arguments));
      };
    }(self);
  }
  if (!("DocumentFragment" in self && "prepend" in DocumentFragment.prototype)) {
    !function (t) {
      document.createDocumentFragment().constructor.prototype.prepend = function e() {
        this.insertBefore(_mutation(arguments), this.firstChild);
      }, t.DocumentFragment.prototype.prepend = function n() {
        this.insertBefore(_mutation(arguments), this.firstChild);
      };
    }(self);
  }
  if (!("DOMTokenList" in self && function (e) {
    return !("classList" in e) || !e.classList.toggle("x", !1) && !e.className;
  }(document.createElement("x")))) {
    !function (t) {
      "DOMTokenList" in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList), function () {
        var t = document.createElement("span");
        "classList" in t && (t.classList.toggle("x", !1), t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function s(t) {
          var s = arguments[1];
          if (s === undefined) {
            var e = !this.contains(t);
            return this[e ? "add" : "remove"](t), e;
          }
          return s = !!s, this[s ? "add" : "remove"](t), s;
        }));
      }(), function () {
        var t = document.createElement("span");
        if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b"))) {
          var s = t.classList.constructor.prototype.add;
          t.classList.constructor.prototype.add = function () {
            for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n]);
          };
        }
      }(), function () {
        var t = document.createElement("span");
        if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b"))) {
          var s = t.classList.constructor.prototype.remove;
          t.classList.constructor.prototype.remove = function () {
            for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n]);
          };
        }
      }();
    }(self);
  }
  if (!("Element" in self && "after" in Element.prototype)) {
    Document.prototype.after = Element.prototype.after = function t() {
      if (this.parentNode) {
        for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling);) o = t.indexOf(e);
        this.parentNode.insertBefore(_mutation(arguments), e);
      }
    }, "Text" in self && (Text.prototype.after = Element.prototype.after);
  }
  if (!("Element" in self && "append" in Element.prototype)) {
    Document.prototype.append = Element.prototype.append = function p() {
      this.appendChild(_mutation(arguments));
    };
  }
  if (!("Element" in self && "before" in Element.prototype)) {
    Document.prototype.before = Element.prototype.before = function e() {
      if (this.parentNode) {
        for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling);) o = e.indexOf(t);
        this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild);
      }
    }, "Text" in self && (Text.prototype.before = Element.prototype.before);
  }
  if (!("document" in self && "classList" in document.documentElement && "Element" in self && "classList" in Element.prototype && function () {
    var e = document.createElement("span");
    return e.classList.add("a", "b"), e.classList.contains("b");
  }())) {
    !function (e) {
      var t = !0,
        r = function r(e, _r, n, i) {
          Object.defineProperty ? Object.defineProperty(e, _r, {
            configurable: !1 === t || !!i,
            get: n
          }) : e.__defineGetter__(_r, n);
        };
      try {
        r({}, "support");
      } catch (i) {
        t = !1;
      }
      var n = function n(e, i, l) {
        r(e.prototype, i, function () {
          var e,
            c = this,
            s = "__defineGetter__DEFINE_PROPERTY" + i;
          if (c[s]) return e;
          if (c[s] = !0, !1 === t) {
            for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m) if (f[m]._R === c) {
              o = f[m];
              break;
            }
            o || (o = a.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, c, l);
          } else e = new _DOMTokenList(c, l);
          return r(c, i, function () {
            return e;
          }), delete c[s], e;
        }, !0);
      };
      n(e.Element, "classList", "className"), n(e.HTMLElement, "classList", "className"), n(e.HTMLLinkElement, "relList", "rel"), n(e.HTMLAnchorElement, "relList", "rel"), n(e.HTMLAreaElement, "relList", "rel");
    }(self);
  }
  if (!("document" in self && "matches" in document.documentElement)) {
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function e(t) {
      for (var o = this, r = (o.document || o.ownerDocument).querySelectorAll(t), c = 0; r[c] && r[c] !== o;) ++c;
      return !!r[c];
    };
  }
  if (!("document" in self && "closest" in document.documentElement)) {
    Element.prototype.closest = function e(n) {
      for (var t = this; t;) {
        if (t.matches(n)) return t;
        t = "SVGElement" in window && t instanceof SVGElement ? t.parentNode : t.parentElement;
      }
      return null;
    };
  }
  if (!("Element" in self && "prepend" in Element.prototype)) {
    Document.prototype.prepend = Element.prototype.prepend = function t() {
      this.insertBefore(_mutation(arguments), this.firstChild);
    };
  }
  if (!("Element" in self && "remove" in Element.prototype)) {
    Document.prototype.remove = Element.prototype.remove = function e() {
      this.parentNode && this.parentNode.removeChild(this);
    }, "Text" in self && (Text.prototype.remove = Element.prototype.remove);
  }
  if (!("Element" in self && "replaceWith" in Element.prototype)) {
    Document.prototype.replaceWith = Element.prototype.replaceWith = function e() {
      this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this);
    }, "Text" in self && (Text.prototype.replaceWith = Element.prototype.replaceWith);
  }
  if (!function (n) {
    if (!("Event" in n)) return !1;
    try {
      return new Event("click"), !0;
    } catch (t) {
      return !1;
    }
  }(self)) {
    !function () {
      function e(e, t) {
        if (!e) throw new Error("Not enough arguments");
        var n;
        if ("createEvent" in document) {
          n = document.createEvent("Event");
          var o = !(!t || t.bubbles === undefined) && t.bubbles,
            i = !(!t || t.cancelable === undefined) && t.cancelable;
          return n.initEvent(e, o, i), n;
        }
        return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n;
      }
      var t = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1
      };
      if ("undefined" != typeof document && "undefined" != typeof window) {
        var n = window.Event && window.Event.prototype || null;
        e.NONE = 0, e.CAPTURING_PHASE = 1, e.AT_TARGET = 2, e.BUBBLING_PHASE = 3, window.Event = Window.prototype.Event = e, n && Object.defineProperty(window.Event, "prototype", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: n
        }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function o() {
          var e = this,
            n = arguments[0],
            o = arguments[1];
          if (e === window && n in t) throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
          e._events || (e._events = {}), e._events[n] || (e._events[n] = function (t) {
            var n,
              o = e._events[t.type].list,
              i = o.slice(),
              r = -1,
              c = i.length;
            for (t.preventDefault = function a() {
              !1 !== t.cancelable && (t.returnValue = !1);
            }, t.stopPropagation = function l() {
              t.cancelBubble = !0;
            }, t.stopImmediatePropagation = function s() {
              t.cancelBubble = !0, t.cancelImmediate = !0;
            }, t.currentTarget = e, t.relatedTarget = t.fromElement || null, t.target = t.target || t.srcElement || e, t.timeStamp = new Date().getTime(), t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop); ++r < c && !t.cancelImmediate;) r in i && (n = i[r], o.includes(n) && "function" == typeof n && n.call(e, t));
          }, e._events[n].list = [], e.attachEvent && e.attachEvent("on" + n, e._events[n])), e._events[n].list.push(o);
        }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function i() {
          var e,
            t = this,
            n = arguments[0],
            o = arguments[1];
          t._events && t._events[n] && t._events[n].list && -1 !== (e = t._events[n].list.indexOf(o)) && (t._events[n].list.splice(e, 1), t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]), delete t._events[n]));
        }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function r(e) {
          if (!arguments.length) throw new Error("Not enough arguments");
          if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
          var t = this,
            n = e.type;
          try {
            if (!e.bubbles) {
              e.cancelBubble = !0;
              var o = function o(e) {
                e.cancelBubble = !0, (t || window).detachEvent("on" + n, o);
              };
              this.attachEvent("on" + n, o);
            }
            this.fireEvent("on" + n, e);
          } catch (i) {
            e.target = t;
            do {
              e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode;
            } while (t && !e.cancelBubble);
          }
          return !0;
        }, document.attachEvent("onreadystatechange", function () {
          "complete" === document.readyState && document.dispatchEvent(new e("DOMContentLoaded", {
            bubbles: !0
          }));
        }));
      }
    }();
  }
  if (!("CustomEvent" in self && ("function" == typeof self.CustomEvent || self.CustomEvent.toString().indexOf("CustomEventConstructor") > -1))) {
    self.CustomEvent = function e(t, n) {
      if (!t) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
      var l;
      if (n = n || {
        bubbles: !1,
        cancelable: !1,
        detail: null
      }, "createEvent" in document) try {
        l = document.createEvent("CustomEvent"), l.initCustomEvent(t, n.bubbles, n.cancelable, n.detail);
      } catch (a) {
        l = document.createEvent("Event"), l.initEvent(t, n.bubbles, n.cancelable), l.detail = n.detail;
      } else l = new Event(t, n), l.detail = n && n.detail || null;
      return l;
    }, CustomEvent.prototype = Event.prototype;
  }
  if (!document.contains) {
    !function () {
      function e(e) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do {
          if (this === e) return !0;
        } while (e = e && e.parentNode);
        return !1;
      }
      if ("HTMLElement" in self && "contains" in HTMLElement.prototype) try {
        delete HTMLElement.prototype.contains;
      } catch (t) {}
      "Node" in self ? Node.prototype.contains = e : document.contains = Element.prototype.contains = e;
    }();
  }
  if (!("isNaN" in Number)) {
    !function () {
      var e = self;
      CreateMethodProperty(Number, "isNaN", function r(n) {
        return "number" === Type(n) && !!e.isNaN(n);
      });
    }();
  }
  if (!("getOwnPropertyDescriptor" in Object && "function" == typeof Object.getOwnPropertyDescriptor && function () {
    try {
      return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value;
    } catch (t) {
      return !1;
    }
  }())) {
    !function () {
      var e = Object.getOwnPropertyDescriptor,
        t = function t() {
          try {
            return 1 === Object.defineProperty(document.createElement("div"), "one", {
              get: function get() {
                return 1;
              }
            }).one;
          } catch (e) {
            return !1;
          }
        },
        r = {}.toString,
        n = "".split;
      CreateMethodProperty(Object, "getOwnPropertyDescriptor", function c(o, i) {
        var a = ToObject(o);
        a = ("string" === Type(a) || a instanceof String) && "[object String]" == r.call(o) ? n.call(o, "") : Object(o);
        var u = ToPropertyKey(i);
        if (t) try {
          return e(a, u);
        } catch (l) {}
        if (HasOwnProperty(a, u)) return {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a[u]
        };
      });
    }();
  }
  if (!("isExtensible" in Object)) {
    !function (e) {
      CreateMethodProperty(Object, "isExtensible", function t(n) {
        return "object" === Type(n) && (!e || e(n));
      });
    }(Object.isExtensible);
  }
  if (!("keys" in Object && function () {
    return 2 === Object.keys(arguments).length;
  }(1, 2) && function () {
    try {
      return Object.keys(""), !0;
    } catch (t) {
      return !1;
    }
  }())) {
    CreateMethodProperty(Object, "keys", function () {
      "use strict";

      function t() {
        var t;
        try {
          t = Object.create({});
        } catch (r) {
          return !0;
        }
        return o.call(t, "__proto__");
      }
      function r(t) {
        var r = n.call(t),
          e = "[object Arguments]" === r;
        return e || (e = "[object Array]" !== r && null !== t && "object" == _typeof(t) && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), e;
      }
      var e = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        o = Object.prototype.propertyIsEnumerable,
        c = !o.call({
          toString: null
        }, "toString"),
        l = o.call(function () {}, "prototype"),
        i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        u = function u(t) {
          var r = t.constructor;
          return r && r.prototype === t;
        },
        a = {
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0
        },
        f = function () {
          if ("undefined" == typeof window) return !1;
          for (var t in window) try {
            if (!a["$" + t] && e.call(window, t) && null !== window[t] && "object" == _typeof(window[t])) try {
              u(window[t]);
            } catch (r) {
              return !0;
            }
          } catch (r) {
            return !0;
          }
          return !1;
        }(),
        p = function p(t) {
          if ("undefined" == typeof window || !f) return u(t);
          try {
            return u(t);
          } catch (r) {
            return !1;
          }
        };
      return function s(o) {
        var u = "[object Function]" === n.call(o),
          a = r(o),
          f = "[object String]" === n.call(o),
          s = [];
        if (o === undefined || null === o) throw new TypeError("Cannot convert undefined or null to object");
        var y = l && u;
        if (f && o.length > 0 && !e.call(o, 0)) for (var h = 0; h < o.length; ++h) s.push(String(h));
        if (a && o.length > 0) for (var g = 0; g < o.length; ++g) s.push(String(g));else for (var w in o) t() && "__proto__" === w || y && "prototype" === w || !e.call(o, w) || s.push(String(w));
        if (c) for (var d = p(o), $ = 0; $ < i.length; ++$) d && "constructor" === i[$] || !e.call(o, i[$]) || s.push(i[$]);
        return s;
      };
    }());
  }
  if (!("assign" in Object)) {
    CreateMethodProperty(Object, "assign", function e(t, r) {
      var n = ToObject(t);
      if (1 === arguments.length) return n;
      var o,
        c,
        a,
        l,
        i = Array.prototype.slice.call(arguments, 1);
      for (o = 0; o < i.length; o++) {
        var p = i[o];
        for (p === undefined || null === p ? a = [] : (l = "[object String]" === Object.prototype.toString.call(p) ? String(p).split("") : ToObject(p), a = Object.keys(l)), c = 0; c < a.length; c++) {
          var b,
            y = a[c];
          try {
            var g = Object.getOwnPropertyDescriptor(l, y);
            b = g !== undefined && !0 === g.enumerable;
          } catch (u) {
            b = Object.prototype.propertyIsEnumerable.call(l, y);
          }
          if (b) {
            var j = Get(l, y);
            n[y] = j;
          }
        }
      }
      return n;
    });
  }
  if (!("getOwnPropertyNames" in Object && function () {
    try {
      return Object.getOwnPropertyNames(1), !0;
    } catch (t) {
      return !1;
    }
  }())) {
    !function () {
      var t = {}.toString,
        e = "".split,
        r = [].concat,
        o = Object.prototype.hasOwnProperty,
        c = Object.getOwnPropertyNames || Object.keys,
        n = "object" == _typeof(self) ? c(self) : [];
      CreateMethodProperty(Object, "getOwnPropertyNames", function l(a) {
        var p = ToObject(a);
        if ("[object Window]" === t.call(p)) try {
          return c(p);
        } catch (j) {
          return r.call([], n);
        }
        p = "[object String]" == t.call(p) ? e.call(p, "") : Object(p);
        for (var i = c(p), s = ["length", "prototype"], O = 0; O < s.length; O++) {
          var b = s[O];
          o.call(p, b) && !i.includes(b) && i.push(b);
        }
        if (i.includes("__proto__")) {
          var f = i.indexOf("__proto__");
          i.splice(f, 1);
        }
        return i;
      });
    }();
  }
  if (!("endsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "endsWith", function e(t) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
      var o = ToString(t),
        s = i.length,
        g = r === undefined ? s : ToInteger(r),
        h = Math.min(Math.max(g, 0), s),
        u = o.length,
        a = h - u;
      return !(a < 0) && i.substr(a, u) === o;
    });
  }
  if (!("includes" in String.prototype)) {
    CreateMethodProperty(String.prototype, "includes", function e(t) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      var o = ToString(t),
        g = ToInteger(r),
        a = i.length,
        p = Math.min(Math.max(g, 0), a);
      return -1 !== String.prototype.indexOf.call(i, o, p);
    });
  }
  if (!("startsWith" in String.prototype)) {
    CreateMethodProperty(String.prototype, "startsWith", function t(e) {
      "use strict";

      var r = arguments.length > 1 ? arguments[1] : undefined,
        n = RequireObjectCoercible(this),
        i = ToString(n);
      if (IsRegExp(e)) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
      var o = ToString(e),
        s = ToInteger(r),
        a = i.length,
        g = Math.min(Math.max(s, 0), a);
      return !(o.length + g > a) && 0 === i.substr(g).indexOf(e);
    });
  }
  if (!("trim" in String.prototype && function () {
    var r = "​᠎";
    return !"\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF".trim() && r.trim() === r;
  }())) {
    CreateMethodProperty(String.prototype, "trim", function t() {
      "use strict";

      var t = this;
      return TrimString(t, "start+end");
    });
  }
  if (!("Symbol" in self && 0 === self.Symbol.length)) {
    !function (e, r, n) {
      "use strict";

      function t(e) {
        if ("symbol" === Type(e)) return e;
        throw TypeError(e + " is not a symbol");
      }
      var u,
        o = function () {
          try {
            var r = {};
            return e.defineProperty(r, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!r.t;
          } catch (n) {
            return !1;
          }
        }(),
        i = 0,
        a = "" + Math.random(),
        c = "__symbol:",
        l = c.length,
        f = "__symbol@@" + a,
        s = {},
        v = "defineProperty",
        y = "defineProperties",
        b = "getOwnPropertyNames",
        p = "getOwnPropertyDescriptor",
        h = "propertyIsEnumerable",
        m = e.prototype,
        d = m.hasOwnProperty,
        g = m[h],
        w = m.toString,
        S = Array.prototype.concat,
        P = e.getOwnPropertyNames ? e.getOwnPropertyNames(self) : [],
        O = e[b],
        j = function $(e) {
          if ("[object Window]" === w.call(e)) try {
            return O(e);
          } catch (r) {
            return S.call([], P);
          }
          return O(e);
        },
        E = e[p],
        N = e.create,
        T = e.keys,
        _ = e.freeze || e,
        k = e[v],
        F = e[y],
        I = E(e, b),
        x = function x(e, r, n) {
          if (!d.call(e, f)) try {
            k(e, f, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: {}
            });
          } catch (t) {
            e[f] = {};
          }
          e[f]["@@" + r] = n;
        },
        z = function z(e, r) {
          var n = N(e);
          return j(r).forEach(function (e) {
            q.call(r, e) && L(n, e, r[e]);
          }), n;
        },
        A = function A(e) {
          var r = N(e);
          return r.enumerable = !1, r;
        },
        D = function ee() {},
        M = function M(e) {
          return e != f && !d.call(H, e);
        },
        W = function W(e) {
          return e != f && d.call(H, e);
        },
        q = function re(e) {
          var r = "" + e;
          return W(r) ? d.call(this, r) && this[f] && this[f]["@@" + r] : g.call(this, e);
        },
        B = function B(r) {
          var n = {
            enumerable: !1,
            configurable: !0,
            get: D,
            set: function set(e) {
              u(this, r, {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e
              }), x(this, r, !0);
            }
          };
          try {
            k(m, r, n);
          } catch (o) {
            m[r] = n.value;
          }
          H[r] = k(e(r), "constructor", J);
          var t = E(G.prototype, "description");
          return t && k(H[r], "description", t), _(H[r]);
        },
        C = function C(e) {
          var r = t(e);
          if (Y) {
            var n = V(r);
            if ("" !== n) return n.slice(1, -1);
          }
          if (s[r] !== undefined) return s[r];
          var u = r.toString(),
            o = u.lastIndexOf("0.");
          return u = u.slice(10, o), "" === u ? undefined : u;
        },
        G = function ne() {
          var r = arguments[0];
          if (this instanceof ne) throw new TypeError("Symbol is not a constructor");
          var n = c.concat(r || "", a, ++i);
          r === undefined || null !== r && !isNaN(r) && "" !== String(r) || (s[n] = String(r));
          var t = B(n);
          return o || e.defineProperty(t, "description", {
            configurable: !0,
            enumerable: !1,
            value: C(t)
          }), t;
        },
        H = N(null),
        J = {
          value: G
        },
        K = function K(e) {
          return H[e];
        },
        L = function te(e, r, n) {
          var t = "" + r;
          return W(t) ? (u(e, t, n.enumerable ? A(n) : n), x(e, t, !!n.enumerable)) : k(e, r, n), e;
        },
        Q = function Q(e) {
          return function (r) {
            return d.call(e, f) && d.call(e[f], "@@" + r);
          };
        },
        R = function ue(e) {
          return j(e).filter(e === m ? Q(e) : W).map(K);
        };
      I.value = L, k(e, v, I), I.value = R, k(e, "getOwnPropertySymbols", I), I.value = function oe(e) {
        return j(e).filter(M);
      }, k(e, b, I), I.value = function ie(e, r) {
        var n = R(r);
        return n.length ? T(r).concat(n).forEach(function (n) {
          q.call(r, n) && L(e, n, r[n]);
        }) : F(e, r), e;
      }, k(e, y, I), I.value = q, k(m, h, I), I.value = G, k(n, "Symbol", I), I.value = function (e) {
        var r = c.concat(c, e, a);
        return r in m ? H[r] : B(r);
      }, k(G, "for", I), I.value = function (e) {
        if (M(e)) throw new TypeError(e + " is not a symbol");
        return d.call(H, e) ? e.slice(2 * l, -a.length) : void 0;
      }, k(G, "keyFor", I), I.value = function ae(e, r) {
        var n = E(e, r);
        return n && W(r) && (n.enumerable = q.call(e, r)), n;
      }, k(e, p, I), I.value = function ce(e, r) {
        return 1 === arguments.length || void 0 === r ? N(e) : z(e, r);
      }, k(e, "create", I);
      var U = null === function () {
        return this;
      }.call(null);
      if (I.value = U ? function () {
        var e = w.call(this);
        return "[object String]" === e && W(this) ? "[object Symbol]" : e;
      } : function () {
        if (this === window) return "[object Null]";
        var e = w.call(this);
        return "[object String]" === e && W(this) ? "[object Symbol]" : e;
      }, k(m, "toString", I), u = function u(e, r, n) {
        var t = E(m, r);
        delete m[r], k(e, r, n), e !== m && k(m, r, t);
      }, function () {
        try {
          var r = {};
          return e.defineProperty(r, "t", {
            configurable: !0,
            enumerable: !1,
            get: function get() {
              return !0;
            },
            set: undefined
          }), !!r.t;
        } catch (n) {
          return !1;
        }
      }()) {
        var V;
        try {
          V = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;");
        } catch (Z) {}
        var X = function X() {},
          Y = V && "inferred" === X.name ? V : null;
        e.defineProperty(n.Symbol.prototype, "description", {
          configurable: !0,
          enumerable: !1,
          get: function get() {
            return C(this);
          }
        });
      }
    }(Object, 0, self);
  }
  if (!("Symbol" in self && "iterator" in self.Symbol)) {
    Object.defineProperty(self.Symbol, "iterator", {
      value: self.Symbol("iterator")
    });
  }
  function GetIterator(t) {
    var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator),
      r = Call(e, t);
    if ("object" !== Type(r)) throw new TypeError("bad iterator");
    var o = GetV(r, "next"),
      a = Object.create(null);
    return a["[[Iterator]]"] = r, a["[[NextMethod]]"] = o, a["[[Done]]"] = !1, a;
  }
  if (!("Symbol" in self && "species" in self.Symbol)) {
    Object.defineProperty(Symbol, "species", {
      value: Symbol("species")
    });
  }
  if (!("Map" in self && function (t) {
    try {
      var n = new t.Map([[1, 1], [2, 2]]);
      return 0 === t.Map.length && 2 === n.size && "Symbol" in t && "iterator" in t.Symbol && "function" == typeof n[t.Symbol.iterator];
    } catch (e) {
      return !1;
    }
  }(self))) {
    !function (e) {
      function t(e, t) {
        if ("object" !== Type(e)) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        var r = Object.create(u);
        return Object.defineProperty(r, "[[Map]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: e
        }), Object.defineProperty(r, "[[MapNextIndex]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(r, "[[MapIterationKind]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        }), r;
      }
      var r = function () {
          try {
            var e = {};
            return Object.defineProperty(e, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!e.t;
          } catch (t) {
            return !1;
          }
        }(),
        o = 0,
        a = Symbol("meta_" + (1e8 * Math.random() + "").replace(".", "")),
        n = function n(e) {
          if ("object" == _typeof(e) ? null !== e : "function" == typeof e) {
            if (!Object.isExtensible(e)) return !1;
            if (!Object.prototype.hasOwnProperty.call(e, a)) {
              var t = _typeof(e) + "-" + ++o;
              Object.defineProperty(e, a, {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: t
              });
            }
            return e[a];
          }
          return "" + e;
        },
        i = function i(e, t) {
          var r = n(t);
          if (!1 === r) return p(e, t);
          var o = e._table[r];
          return o !== undefined && o;
        },
        p = function p(e, t) {
          for (var r = 0; r < e._keys.length; r++) {
            var o = e._keys[r];
            if (o !== c && SameValueZero(o, t)) return r;
          }
          return !1;
        },
        l = function l(e, t, r) {
          var o = n(t);
          return !1 !== o && (!1 === r ? delete e._table[o] : e._table[o] = r, !0);
        },
        c = Symbol("undef"),
        y = function f() {
          if (!(this instanceof f)) throw new TypeError('Constructor Map requires "new"');
          var e = OrdinaryCreateFromConstructor(this, f.prototype, {
            _table: {},
            _keys: [],
            _values: [],
            _size: 0,
            _es6Map: !0
          });
          r || Object.defineProperty(e, "size", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0
          });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.set;
          if (!IsCallable(o)) throw new TypeError("Map.prototype.set is not a function");
          try {
            for (var a = GetIterator(t);;) {
              var n = IteratorStep(a);
              if (!1 === n) return e;
              var i = IteratorValue(n);
              if ("object" !== Type(i)) try {
                throw new TypeError("Iterator value " + i + " is not an entry object");
              } catch (u) {
                return IteratorClose(a, u);
              }
              try {
                var p = i[0],
                  l = i[1];
                o.call(e, p, l);
              } catch (s) {
                return IteratorClose(a, s);
              }
            }
          } catch (s) {
            if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) {
              var c,
                y = t.length;
              for (c = 0; c < y; c++) o.call(e, t[c][0], t[c][1]);
            }
          }
          return e;
        };
      Object.defineProperty(y, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {}
      }), r ? Object.defineProperty(y, Symbol.species, {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          return this;
        },
        set: undefined
      }) : CreateMethodProperty(y, Symbol.species, y), CreateMethodProperty(y.prototype, "clear", function b() {
        var e = this;
        if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        for (var t = e._keys, o = 0; o < t.length; o++) e._keys[o] = c, e._values[o] = c;
        return this._size = 0, r || (this.size = this._size), this._table = {}, undefined;
      }), CreateMethodProperty(y.prototype, "constructor", y), CreateMethodProperty(y.prototype, "delete", function (e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
        var o = i(t, e);
        if (!1 !== o) {
          var a = t._keys[o];
          if (a !== c && SameValueZero(a, e)) return this._keys[o] = c, this._values[o] = c, this._size = --this._size, r || (this.size = this._size), l(this, e, !1), !0;
        }
        return !1;
      }), CreateMethodProperty(y.prototype, "entries", function h() {
        return t(this, "key+value");
      }), CreateMethodProperty(y.prototype, "forEach", function (e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
        if (arguments[1]) var r = arguments[1];
        for (var o = t._keys, a = 0; a < o.length; a++) t._keys[a] !== c && t._values[a] !== c && e.call(r, t._values[a], t._keys[a], t);
        return undefined;
      }), CreateMethodProperty(y.prototype, "get", function d(e) {
        var t = this;
        if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
        var r = i(t, e);
        if (!1 !== r) {
          var o = t._keys[r];
          if (o !== c && SameValueZero(o, e)) return t._values[r];
        }
        return undefined;
      }), CreateMethodProperty(y.prototype, "has", function v(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
        var r = i(t, e);
        if (!1 !== r) {
          var o = t._keys[r];
          if (o !== c && SameValueZero(o, e)) return !0;
        }
        return !1;
      }), CreateMethodProperty(y.prototype, "keys", function M() {
        return t(this, "key");
      }), CreateMethodProperty(y.prototype, "set", function w(e, t) {
        var o = this;
        if ("object" !== Type(o)) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
        if (!0 !== o._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(o));
        var a = i(o, e);
        if (!1 !== a) o._values[a] = t;else {
          -0 === e && (e = 0);
          var n = {
            "[[Key]]": e,
            "[[Value]]": t
          };
          o._keys.push(n["[[Key]]"]), o._values.push(n["[[Value]]"]), l(o, e, o._keys.length - 1), ++o._size, r || (o.size = o._size);
        }
        return o;
      }), r && Object.defineProperty(y.prototype, "size", {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          var e = this;
          if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          return this._size;
        },
        set: undefined
      }), CreateMethodProperty(y.prototype, "values", function j() {
        return t(this, "value");
      }), CreateMethodProperty(y.prototype, Symbol.iterator, y.prototype.entries), "name" in y || Object.defineProperty(y, "name", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: "Map"
      });
      var u = {};
      Object.defineProperty(u, "isMapIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0
      }), CreateMethodProperty(u, "next", function _() {
        var e = this;
        if ("object" !== Type(e)) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        var t = e["[[Map]]"],
          r = e["[[MapNextIndex]]"],
          o = e["[[MapIterationKind]]"];
        if (t === undefined) return CreateIterResultObject(undefined, !0);
        if (!t._es6Map) throw new Error(Object.prototype.toString.call(t) + " has a [[MapData]] internal slot.");
        for (var a = t._keys, n = a.length; r < n;) {
          var i = Object.create(null);
          if (i["[[Key]]"] = t._keys[r], i["[[Value]]"] = t._values[r], r += 1, e["[[MapNextIndex]]"] = r, i["[[Key]]"] !== c) {
            if ("key" === o) var p = i["[[Key]]"];else if ("value" === o) p = i["[[Value]]"];else {
              if ("key+value" !== o) throw new Error();
              p = [i["[[Key]]"], i["[[Value]]"]];
            }
            return CreateIterResultObject(p, !1);
          }
        }
        return e["[[Map]]"] = undefined, CreateIterResultObject(undefined, !0);
      }), CreateMethodProperty(u, Symbol.iterator, function g() {
        return this;
      });
      try {
        CreateMethodProperty(e, "Map", y);
      } catch (s) {
        e.Map = y;
      }
    }(self);
  }
  if (!("Set" in self && function () {
    try {
      var e = new self.Set([1, 2]);
      return 0 === self.Set.length && 2 === e.size && "Symbol" in self && "iterator" in self.Symbol && "function" == typeof e[self.Symbol.iterator];
    } catch (t) {
      return !1;
    }
  }())) {
    !function (e) {
      function t(e, t) {
        if ("object" != _typeof(e)) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Set) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e));
        var r = Object.create(i);
        return Object.defineProperty(r, "[[IteratedSet]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: e
        }), Object.defineProperty(r, "[[SetNextIndex]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(r, "[[SetIterationKind]]", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        }), r;
      }
      var r = function () {
          try {
            var e = {};
            return Object.defineProperty(e, "t", {
              configurable: !0,
              enumerable: !1,
              get: function get() {
                return !0;
              },
              set: undefined
            }), !!e.t;
          } catch (t) {
            return !1;
          }
        }(),
        o = Symbol("undef"),
        n = function c() {
          if (!(this instanceof c)) throw new TypeError('Constructor Set requires "new"');
          var e = OrdinaryCreateFromConstructor(this, c.prototype, {
            _values: [],
            _size: 0,
            _es6Set: !0
          });
          r || Object.defineProperty(e, "size", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: 0
          });
          var t = arguments.length > 0 ? arguments[0] : undefined;
          if (null === t || t === undefined) return e;
          var o = e.add;
          if (!IsCallable(o)) throw new TypeError("Set.prototype.add is not a function");
          try {
            for (var n = GetIterator(t);;) {
              var a = IteratorStep(n);
              if (!1 === a) return e;
              var i = IteratorValue(a);
              try {
                o.call(e, i);
              } catch (y) {
                return IteratorClose(n, y);
              }
            }
          } catch (y) {
            if (!Array.isArray(t) && "[object Arguments]" !== Object.prototype.toString.call(t) && !t.callee) throw y;
            var l,
              p = t.length;
            for (l = 0; l < p; l++) o.call(e, t[l]);
          }
          return e;
        };
      Object.defineProperty(n, "prototype", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: {}
      }), r ? Object.defineProperty(n, Symbol.species, {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          return this;
        },
        set: undefined
      }) : CreateMethodProperty(n, Symbol.species, n), CreateMethodProperty(n.prototype, "add", function p(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          if (i !== o && SameValueZero(i, e)) return t;
        }
        return 0 === e && 1 / e == -Infinity && (e = 0), t._values.push(e), this._size = ++this._size, r || (this.size = this._size), t;
      }), CreateMethodProperty(n.prototype, "clear", function y() {
        var e = this;
        if ("object" != _typeof(e)) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
        for (var t = e._values, n = 0; n < t.length; n++) t[n] = o;
        return this._size = 0, r || (this.size = this._size), undefined;
      }), CreateMethodProperty(n.prototype, "constructor", n), CreateMethodProperty(n.prototype, "delete", function (e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          if (i !== o && SameValueZero(i, e)) return n[a] = o, this._size = --this._size, r || (this.size = this._size), !0;
        }
        return !1;
      }), CreateMethodProperty(n.prototype, "entries", function u() {
        return t(this, "key+value");
      }), CreateMethodProperty(n.prototype, "forEach", function f(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
        if (arguments[1]) var r = arguments[1];
        for (var n = t._values, a = 0; a < n.length; a++) {
          var i = n[a];
          i !== o && e.call(r, i, i, t);
        }
        return undefined;
      }), CreateMethodProperty(n.prototype, "has", function d(e) {
        var t = this;
        if ("object" != _typeof(t)) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
        for (var r = t._values, n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== o && SameValueZero(a, e)) return !0;
        }
        return !1;
      });
      var a = function h() {
        return t(this, "value");
      };
      CreateMethodProperty(n.prototype, "values", a), CreateMethodProperty(n.prototype, "keys", a), r && Object.defineProperty(n.prototype, "size", {
        configurable: !0,
        enumerable: !1,
        get: function get() {
          var e = this;
          if ("object" != _typeof(e)) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
          for (var t = e._values, r = 0, n = 0; n < t.length; n++) {
            t[n] !== o && (r += 1);
          }
          return r;
        },
        set: undefined
      }), CreateMethodProperty(n.prototype, Symbol.iterator, a), "name" in n || Object.defineProperty(n, "name", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: "Set"
      });
      var i = {};
      Object.defineProperty(i, "isSetIterator", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: !0
      }), CreateMethodProperty(i, "next", function b() {
        var e = this;
        if ("object" != _typeof(e)) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        if (!e.isSetIterator) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
        var t = e["[[IteratedSet]]"],
          r = e["[[SetNextIndex]]"],
          n = e["[[SetIterationKind]]"];
        if (t === undefined) return CreateIterResultObject(undefined, !0);
        if (!t._es6Set) throw new Error(Object.prototype.toString.call(t) + " does not have [[SetData]] internal slot.");
        for (var a = t._values, i = a.length; r < i;) {
          var l = a[r];
          if (r += 1, e["[[SetNextIndex]]"] = r, l !== o) return "key+value" === n ? CreateIterResultObject([l, l], !1) : CreateIterResultObject(l, !1);
        }
        return e["[[IteratedSet]]"] = undefined, CreateIterResultObject(undefined, !0);
      }), CreateMethodProperty(i, Symbol.iterator, function s() {
        return this;
      });
      try {
        CreateMethodProperty(e, "Set", n);
      } catch (l) {
        e.Set = n;
      }
    }(self);
  }
  if (!("from" in Array && function () {
    try {
      return Array.from({
        length: -Infinity
      }), "a" === Array.from(new self.Set(["a"]))[0] && "a" === Array.from(new self.Map([["a", "one"]]))[0][0];
    } catch (r) {
      return !1;
    }
  }())) {
    !function () {
      function r(r) {
        return "string" == typeof r || "object" == _typeof(r) && "[object String]" === t.call(r);
      }
      var t = Object.prototype.toString,
        e = String.prototype.match;
      CreateMethodProperty(Array, "from", function o(t) {
        var o = this,
          a = arguments.length > 1 ? arguments[1] : undefined;
        if (a === undefined) var n = !1;else {
          if (!1 === IsCallable(a)) throw new TypeError(Object.prototype.toString.call(a) + " is not a function.");
          var i = arguments.length > 2 ? arguments[2] : undefined;
          if (i !== undefined) var l = i;else l = undefined;
          n = !0;
        }
        var u = GetMethod(t, Symbol.iterator);
        if (u !== undefined) {
          if (IsConstructor(o)) var f = Construct(o);else f = ArrayCreate(0);
          for (var c = GetIterator(t, u), s = 0;;) {
            if (s >= Math.pow(2, 53) - 1) {
              var h = new TypeError("Iteration count can not be greater than or equal 9007199254740991.");
              return IteratorClose(c, h);
            }
            var y = ToString(s),
              C = IteratorStep(c);
            if (!1 === C) return f.length = s, f;
            var g = IteratorValue(C);
            if (n) try {
              var p = Call(a, l, [g, s]);
            } catch (b) {
              return IteratorClose(c, b);
            } else p = g;
            try {
              CreateDataPropertyOrThrow(f, y, p);
            } catch (b) {
              return IteratorClose(c, b);
            }
            s += 1;
          }
        }
        if (r(t)) var v = e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];else v = ToObject(t);
        var d = ToLength(Get(v, "length"));
        for (f = IsConstructor(o) ? Construct(o, [d]) : ArrayCreate(d), s = 0; s < d;) {
          y = ToString(s);
          var I = Get(v, y);
          p = !0 === n ? Call(a, l, [I, s]) : I, CreateDataPropertyOrThrow(f, y, p), s += 1;
        }
        return f.length = d, f;
      });
    }();
  }
  if (!("Symbol" in self && "toStringTag" in self.Symbol)) {
    Object.defineProperty(Symbol, "toStringTag", {
      value: Symbol("toStringTag")
    });
  }
  if (!("Promise" in self)) {
    !function () {
      "use strict";

      function n() {
        return tn[q][B] || D;
      }
      function t(n) {
        return n && "object" == _typeof(n);
      }
      function e(n) {
        return "function" == typeof n;
      }
      function r(n, t) {
        return n instanceof t;
      }
      function o(n) {
        return r(n, A);
      }
      function i(n, t, e) {
        if (!t(n)) throw a(e);
      }
      function u() {
        try {
          return b.apply(R, arguments);
        } catch (n) {
          return Y.e = n, Y;
        }
      }
      function c(n, t) {
        return b = n, R = t, u;
      }
      function f(n, t) {
        function e() {
          for (var e = 0; e < o;) t(r[e], r[e + 1]), r[e++] = T, r[e++] = T;
          o = 0, r.length > n && (r.length = n);
        }
        var r = L(n),
          o = 0;
        return function (n, t) {
          r[o++] = n, r[o++] = t, 2 === o && tn.nextTick(e);
        };
      }
      function s(n, t) {
        var o,
          i,
          u,
          f,
          s = 0;
        if (!n) throw a(N);
        var l = n[tn[q][z]];
        if (e(l)) i = l.call(n);else {
          if (!e(n.next)) {
            if (r(n, L)) {
              for (o = n.length; s < o;) t(n[s], s++);
              return s;
            }
            throw a(N);
          }
          i = n;
        }
        for (; !(u = i.next()).done;) if ((f = c(t)(u.value, s++)) === Y) throw e(i[G]) && i[G](), f.e;
        return s;
      }
      function a(n) {
        return new TypeError(n);
      }
      function l(n) {
        return (n ? "" : Q) + new A().stack;
      }
      function h(n, t) {
        var e = "on" + n.toLowerCase(),
          r = F[e];
        E && E.listeners(n).length ? n === X ? E.emit(n, t._v, t) : E.emit(n, t) : r ? r({
          reason: t._v,
          promise: t
        }) : tn[n](t._v, t);
      }
      function v(n) {
        return n && n._s;
      }
      function _(n) {
        if (v(n)) return new n(Z);
        var t, r, o;
        return t = new n(function (n, e) {
          if (t) throw a();
          r = n, o = e;
        }), i(r, e), i(o, e), t;
      }
      function d(n, t) {
        var e = !1;
        return function (r) {
          e || (e = !0, I && (n[M] = l(!0)), t === U ? g(n, r) : y(n, t, r));
        };
      }
      function p(n, t, r, o) {
        return e(r) && (t._onFulfilled = r), e(o) && (n[J] && h(W, n), t._onRejected = o), I && (t._p = n), n[n._c++] = t, n._s !== $ && rn(n, t), t;
      }
      function m(n) {
        if (n._umark) return !0;
        n._umark = !0;
        for (var t, e = 0, r = n._c; e < r;) if (t = n[e++], t._onRejected || m(t)) return !0;
      }
      function w(n, t) {
        function e(n) {
          return r.push(n.replace(/^\s+|\s+$/g, ""));
        }
        var r = [];
        return I && (t[M] && e(t[M]), function o(n) {
          n && K in n && (o(n._next), e(n[K] + ""), o(n._p));
        }(t)), (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(nn, "");
      }
      function j(n, t) {
        return n(t);
      }
      function y(n, t, e) {
        var r = 0,
          i = n._c;
        if (n._s === $) for (n._s = t, n._v = e, t === O && (I && o(e) && (e.longStack = w(e, n)), on(n)); r < i;) rn(n, n[r++]);
        return n;
      }
      function g(n, r) {
        if (r === n && r) return y(n, O, a(V)), n;
        if (r !== S && (e(r) || t(r))) {
          var o = c(k)(r);
          if (o === Y) return y(n, O, o.e), n;
          e(o) ? (I && v(r) && (n._next = r), v(r) ? x(n, r, o) : tn.nextTick(function () {
            x(n, r, o);
          })) : y(n, U, r);
        } else y(n, U, r);
        return n;
      }
      function k(n) {
        return n.then;
      }
      function x(n, t, e) {
        var r = c(e, t)(function (e) {
          t && (t = S, g(n, e));
        }, function (e) {
          t && (t = S, y(n, O, e));
        });
        r === Y && t && (y(n, O, r.e), t = S);
      }
      var T,
        b,
        R,
        S = null,
        C = "object" == _typeof(self),
        F = self,
        P = F.Promise,
        E = F.process,
        H = F.console,
        I = !0,
        L = Array,
        A = Error,
        O = 1,
        U = 2,
        $ = 3,
        q = "Symbol",
        z = "iterator",
        B = "species",
        D = q + "(" + B + ")",
        G = "return",
        J = "_uh",
        K = "_pt",
        M = "_st",
        N = "Invalid argument",
        Q = "\nFrom previous ",
        V = "Chaining cycle detected for promise",
        W = "rejectionHandled",
        X = "unhandledRejection",
        Y = {
          e: S
        },
        Z = function Z() {},
        nn = /^.+\/node_modules\/yaku\/.+\n?/gm,
        tn = function tn(n) {
          var r,
            o = this;
          if (!t(o) || o._s !== T) throw a("Invalid this");
          if (o._s = $, I && (o[K] = l()), n !== Z) {
            if (!e(n)) throw a(N);
            r = c(n)(d(o, U), d(o, O)), r === Y && y(o, O, r.e);
          }
        };
      tn["default"] = tn, function en(n, t) {
        for (var e in t) n[e] = t[e];
      }(tn.prototype, {
        then: function then(n, t) {
          if (this._s === undefined) throw a();
          return p(this, _(tn.speciesConstructor(this, tn)), n, t);
        },
        "catch": function _catch(n) {
          return this.then(T, n);
        },
        "finally": function _finally(n) {
          return this.then(function (t) {
            return tn.resolve(n()).then(function () {
              return t;
            });
          }, function (t) {
            return tn.resolve(n()).then(function () {
              throw t;
            });
          });
        },
        _c: 0,
        _p: S
      }), tn.resolve = function (n) {
        return v(n) ? n : g(_(this), n);
      }, tn.reject = function (n) {
        return y(_(this), O, n);
      }, tn.race = function (n) {
        var t = this,
          e = _(t),
          r = function r(n) {
            y(e, U, n);
          },
          o = function o(n) {
            y(e, O, n);
          },
          i = c(s)(n, function (n) {
            t.resolve(n).then(r, o);
          });
        return i === Y ? t.reject(i.e) : e;
      }, tn.all = function (n) {
        function t(n) {
          y(o, O, n);
        }
        var e,
          r = this,
          o = _(r),
          i = [];
        return (e = c(s)(n, function (n, u) {
          r.resolve(n).then(function (n) {
            i[u] = n, --e || y(o, U, i);
          }, t);
        })) === Y ? r.reject(e.e) : (e || y(o, U, []), o);
      }, tn.Symbol = F[q] || {}, c(function () {
        Object.defineProperty(tn, n(), {
          get: function get() {
            return this;
          }
        });
      })(), tn.speciesConstructor = function (t, e) {
        var r = t.constructor;
        return r ? r[n()] || e : e;
      }, tn.unhandledRejection = function (n, t) {
        H && H.error("Uncaught (in promise)", I ? t.longStack : w(n, t));
      }, tn.rejectionHandled = Z, tn.enableLongStackTrace = function () {
        I = !0;
      }, tn.nextTick = C ? function (n) {
        P ? new P(function (n) {
          n();
        }).then(n) : setTimeout(n);
      } : E.nextTick, tn._s = 1;
      var rn = f(999, function (n, t) {
          var e, r;
          return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T ? void y(t, n._s, n._v) : (e = c(j)(r, n._v)) === Y ? void y(t, O, e.e) : void g(t, e);
        }),
        on = f(9, function (n) {
          m(n) || (n[J] = 1, h(X, n));
        });
      F.Promise = tn;
    }();
  }
  if (!function (r) {
    "use strict";

    try {
      var a = new r.URL("http://example.com");
      if ("href" in a && "searchParams" in a) {
        var e = new URL("http://example.com");
        if (e.search = "a=1&b=2", "http://example.com/?a=1&b=2" === e.href && (e.search = "", "http://example.com/" === e.href)) {
          if (!("sort" in r.URLSearchParams.prototype)) return !1;
          var t = new r.URLSearchParams("a=1"),
            n = new r.URLSearchParams(t);
          if ("a=1" !== String(n)) return !1;
          var c = new r.URLSearchParams({
            a: "1"
          });
          if ("a=1" !== String(c)) return !1;
          var h = new r.URLSearchParams([["a", "1"]]);
          return "a=1" === String(h);
        }
      }
      return !1;
    } catch (m) {
      return !1;
    }
  }(self)) {
    !function (e) {
      "use strict";

      function t(t) {
        return !!t && ("Symbol" in e && "iterator" in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t));
      }
      !function () {
        function n(e) {
          var t = "",
            n = !0;
          return e.forEach(function (e) {
            var r = encodeURIComponent(e.name),
              a = encodeURIComponent(e.value);
            n || (t += "&"), t += r + "=" + a, n = !1;
          }), t.replace(/%20/g, "+");
        }
        function r(e) {
          return e.replace(/((%[0-9A-Fa-f]{2})*)/g, function (e, t) {
            return decodeURIComponent(t);
          });
        }
        function a(e, t) {
          var n = e.split("&");
          t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
          var a = [];
          n.forEach(function (e) {
            if (0 !== e.length) {
              var t = e.indexOf("=");
              if (-1 !== t) var n = e.substring(0, t),
                r = e.substring(t + 1);else n = e, r = "";
              n = n.replace(/\+/g, " "), r = r.replace(/\+/g, " "), a.push({
                name: n,
                value: r
              });
            }
          });
          var i = [];
          return a.forEach(function (e) {
            i.push({
              name: r(e.name),
              value: r(e.value)
            });
          }), i;
        }
        function i(e) {
          if (c) return new s(e);
          var t = document.createElement("a");
          return t.href = e, t;
        }
        function o(e) {
          var r = this;
          this._list = [], e === undefined || null === e || (e instanceof o ? this._list = a(String(e)) : "object" == _typeof(e) && t(e) ? Array.from(e).forEach(function (e) {
            if (!t(e)) throw TypeError();
            var n = Array.from(e);
            if (2 !== n.length) throw TypeError();
            r._list.push({
              name: String(n[0]),
              value: String(n[1])
            });
          }) : "object" == _typeof(e) && e ? Object.keys(e).forEach(function (t) {
            r._list.push({
              name: String(t),
              value: String(e[t])
            });
          }) : (e = String(e), "?" === e.substring(0, 1) && (e = e.substring(1)), this._list = a(e))), this._url_object = null, this._setList = function (e) {
            i || (r._list = e);
          };
          var i = !1;
          this._update_steps = function () {
            i || (i = !0, r._url_object && ("about:" === r._url_object.protocol && -1 !== r._url_object.pathname.indexOf("?") && (r._url_object.pathname = r._url_object.pathname.split("?")[0]), r._url_object.search = n(r._list), i = !1));
          };
        }
        function u(e, t) {
          var n = 0;
          this.next = function () {
            if (n >= e.length) return {
              done: !0,
              value: undefined
            };
            var r = e[n++];
            return {
              done: !1,
              value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value]
            };
          };
        }
        function l(t, n) {
          function r() {
            var e = l.href.replace(/#$|\?$|\?(?=#)/g, "");
            l.href !== e && (l.href = e);
          }
          function u() {
            m._setList(l.search ? a(l.search.substring(1)) : []), m._update_steps();
          }
          if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
          n && (t = function () {
            if (c) return new s(t, n).href;
            var e;
            try {
              var r;
              if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"), e.style.display = "none", document.documentElement.appendChild(e), r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), r.documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"), r.write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported");
              var a = r.createElement("base");
              a.href = n, r.getElementsByTagName("head")[0].appendChild(a);
              var i = r.createElement("a");
              return i.href = t, i.href;
            } finally {
              e && e.parentNode.removeChild(e);
            }
          }());
          var l = i(t || ""),
            f = function () {
              if (!("defineProperties" in Object)) return !1;
              try {
                var e = {};
                return Object.defineProperties(e, {
                  prop: {
                    get: function get() {
                      return !0;
                    }
                  }
                }), e.prop;
              } catch (t) {
                return !1;
              }
            }(),
            h = f ? this : document.createElement("a"),
            m = new o(l.search ? l.search.substring(1) : null);
          return m._url_object = h, Object.defineProperties(h, {
            href: {
              get: function get() {
                return l.href;
              },
              set: function set(e) {
                l.href = e, r(), u();
              },
              enumerable: !0,
              configurable: !0
            },
            origin: {
              get: function get() {
                return "data:" === this.protocol.toLowerCase() ? null : "origin" in l ? l.origin : this.protocol + "//" + this.host;
              },
              enumerable: !0,
              configurable: !0
            },
            protocol: {
              get: function get() {
                return l.protocol;
              },
              set: function set(e) {
                l.protocol = e;
              },
              enumerable: !0,
              configurable: !0
            },
            username: {
              get: function get() {
                return l.username;
              },
              set: function set(e) {
                l.username = e;
              },
              enumerable: !0,
              configurable: !0
            },
            password: {
              get: function get() {
                return l.password;
              },
              set: function set(e) {
                l.password = e;
              },
              enumerable: !0,
              configurable: !0
            },
            host: {
              get: function get() {
                var e = {
                  "http:": /:80$/,
                  "https:": /:443$/,
                  "ftp:": /:21$/
                }[l.protocol];
                return e ? l.host.replace(e, "") : l.host;
              },
              set: function set(e) {
                l.host = e;
              },
              enumerable: !0,
              configurable: !0
            },
            hostname: {
              get: function get() {
                return l.hostname;
              },
              set: function set(e) {
                l.hostname = e;
              },
              enumerable: !0,
              configurable: !0
            },
            port: {
              get: function get() {
                return l.port;
              },
              set: function set(e) {
                l.port = e;
              },
              enumerable: !0,
              configurable: !0
            },
            pathname: {
              get: function get() {
                return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname;
              },
              set: function set(e) {
                l.pathname = e;
              },
              enumerable: !0,
              configurable: !0
            },
            search: {
              get: function get() {
                return l.search;
              },
              set: function set(e) {
                l.search !== e && (l.search = e, r(), u());
              },
              enumerable: !0,
              configurable: !0
            },
            searchParams: {
              get: function get() {
                return m;
              },
              enumerable: !0,
              configurable: !0
            },
            hash: {
              get: function get() {
                return l.hash;
              },
              set: function set(e) {
                l.hash = e, r();
              },
              enumerable: !0,
              configurable: !0
            },
            toString: {
              value: function value() {
                return l.toString();
              },
              enumerable: !1,
              configurable: !0
            },
            valueOf: {
              value: function value() {
                return l.valueOf();
              },
              enumerable: !1,
              configurable: !0
            }
          }), h;
        }
        var c,
          s = e.URL;
        try {
          if (s) {
            if ("searchParams" in (c = new e.URL("http://example.com"))) {
              var f = new l("http://example.com");
              if (f.search = "a=1&b=2", "http://example.com/?a=1&b=2" === f.href && (f.search = "", "http://example.com/" === f.href)) return;
            }
            "href" in c || (c = undefined), c = undefined;
          }
        } catch (m) {}
        if (Object.defineProperties(o.prototype, {
          append: {
            value: function value(e, t) {
              this._list.push({
                name: e,
                value: t
              }), this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          "delete": {
            value: function value(e) {
              for (var t = 0; t < this._list.length;) this._list[t].name === e ? this._list.splice(t, 1) : ++t;
              this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          get: {
            value: function value(e) {
              for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return this._list[t].value;
              return null;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          getAll: {
            value: function value(e) {
              for (var t = [], n = 0; n < this._list.length; ++n) this._list[n].name === e && t.push(this._list[n].value);
              return t;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          has: {
            value: function value(e) {
              for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return !0;
              return !1;
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          set: {
            value: function value(e, t) {
              for (var n = !1, r = 0; r < this._list.length;) this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t, n = !0, ++r) : ++r;
              n || this._list.push({
                name: e,
                value: t
              }), this._update_steps();
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          entries: {
            value: function value() {
              return new u(this._list, "key+value");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          keys: {
            value: function value() {
              return new u(this._list, "key");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          values: {
            value: function value() {
              return new u(this._list, "value");
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          forEach: {
            value: function value(e) {
              var t = arguments.length > 1 ? arguments[1] : undefined;
              this._list.forEach(function (n) {
                e.call(t, n.value, n.name);
              });
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
          },
          toString: {
            value: function value() {
              return n(this._list);
            },
            writable: !0,
            enumerable: !1,
            configurable: !0
          },
          sort: {
            value: function p() {
              for (var e = this.entries(), t = e.next(), n = [], r = {}; !t.done;) {
                var a = t.value,
                  i = a[0];
                n.push(i), Object.prototype.hasOwnProperty.call(r, i) || (r[i] = []), r[i].push(a[1]), t = e.next();
              }
              n.sort();
              for (var o = 0; o < n.length; o++) this["delete"](n[o]);
              for (var u = 0; u < n.length; u++) i = n[u], this.append(i, r[i].shift());
            }
          }
        }), "Symbol" in e && "iterator" in e.Symbol && (Object.defineProperty(o.prototype, e.Symbol.iterator, {
          value: o.prototype.entries,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(u.prototype, e.Symbol.iterator, {
          value: function value() {
            return this;
          },
          writable: !0,
          enumerable: !0,
          configurable: !0
        })), s) for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && "function" == typeof s[h] && (l[h] = s[h]);
        e.URL = l, e.URLSearchParams = o;
      }(), function () {
        if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({
          a: 1
        }).get("a")) {
          var n = e.URLSearchParams;
          e.URLSearchParams = function (e) {
            if (e && "object" == _typeof(e) && t(e)) {
              var r = new n();
              return Array.from(e).forEach(function (e) {
                if (!t(e)) throw TypeError();
                var n = Array.from(e);
                if (2 !== n.length) throw TypeError();
                r.append(n[0], n[1]);
              }), r;
            }
            return e && "object" == _typeof(e) ? (r = new n(), Object.keys(e).forEach(function (t) {
              r.set(t, e[t]);
            }), r) : new n(e);
          };
        }
      }();
    }(self);
  }
})('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

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

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var checksFilter, checksFilter2, dateFilter, dateRange, dateRangeFilter, dependencyTracker, filter, filterPanel, fpStatus, listFilter, listFilter2, listRangeFilter, listWithArrowsFilter, textFilter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

fpStatus = {
  init: "init",
  emptyChoice: "emptyChoice",
  ready: "ready"
};

filterPanel = (function() {
  var template;

  template = '<div class="filters-panel form-horizontal"></div>';

  function filterPanel(container, model, sources, filterPanelHandlers, buttonsPanel, listContainer, lazyInit, checkChanges, filterSize1) {
    this.container = container;
    this.model = model;
    this.sources = sources;
    this.filterPanelHandlers = filterPanelHandlers;
    this.buttonsPanel = buttonsPanel;
    this.listContainer = listContainer;
    this.checkChanges = checkChanges;
    this.filterSize = filterSize1;
    this.filters = [];
    this.handlers_ready = [];
    this.handlers_init = [];
    this.handlers_emptyChoice = [];
    this.filterSize = this.filterSize || {};
    this.filterSize.label = this.filterSize.label || "control-label col-md-4 col-lg-3 col-sm-4";
    this.filterSize.control = this.filterSize.control || "col-md-8 col-lg-5 col-sm-8";
    if (this.buttonsPanel) {
      this.handlers_init.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            return _this.listContainer.html('<div class="col-md-12 alert alert-info" role="alert">' + language.Generic.Movement.kMsgApplyBtnClick + '</div>');
          }
        };
      })(this));
      this.handlers_ready.push((function(_this) {
        return function() {
          _this.buttonsPanel.show();
          if (window.buttonsPanelCtrl) {
            return window.buttonsPanelCtrl.init();
          }
        };
      })(this));
      this.handlers_emptyChoice.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            _this.listContainer.html('<div class="col-md-12 alert alert-danger" role="alert">' + language.Generic.Movement.kMsgNoChoice + '</div>');
          }
        };
      })(this));
    }
    if (this.container.hasClass("filters-panel")) {
      this.panel = this.container;
    } else {
      this.panel = $(template);
      this.container.append(this.panel);
    }
    if (!lazyInit) {
      this.initPanel();
    }
  }

  filterPanel.prototype.initPanel = function() {
    var active, ctor, filterCtrl, filterModel, filterSource, i, len, ref, satisfied;
    this.changeStatus(fpStatus.init);
    if (this.model === null) {
      $.show.error("Ошибка инициализации фильтр-панели. Модель не заполнена.");
      return;
    }
    ref = _.sortBy(this.model.filters, function(item) {
      return item.order;
    });
    for (i = 0, len = ref.length; i < len; i++) {
      filterModel = ref[i];
      active = true;
      filterSource = _.findWhere(this.sources, {
        filterId: filterModel.id
      });
      if (!filterSource) {
        active = false;
      }
      filterCtrl = null;
      ctor = null;
      switch (filterModel.filterType) {
        case "List2":
          ctor = listFilter2;
          break;
        case "List":
          ctor = listFilter;
          break;
        case "ListWithArrows":
          ctor = listWithArrowsFilter;
          break;
        case "DateRange":
          ctor = dateRangeFilter;
          break;
        case "Date":
          ctor = dateFilter;
          break;
        case "Checks2":
          ctor = checksFilter2;
          break;
        case "Checks":
          ctor = checksFilter;
          break;
        case "ListRange":
          ctor = listRangeFilter;
          break;
        case "Text":
          ctor = textFilter;
          break;
        default:
          $.show.error("Ошибка инициализации фильтр-панели. Неподдерживаемый тип фильтра " + filterModel.filterType);
          return;
      }
      filterCtrl = new ctor(this, filterModel);
      if (filterModel.dependencies) {
        satisfied = filterModel.control.dependenciesSatisfied();
        if (!satisfied) {
          active = false;
        }
      }
      if (filterSource) {
        filterCtrl.setSource(filterSource);
      }
      this.setFilterStatus(filterCtrl);
      this.filters.push(filterCtrl);
      if (!active) {
        filterCtrl.changeStatus("inactive");
      }
      filterCtrl.appendToPanel(this.panel);
    }
    this.panel.find(".form-group.aux").insertAfter(this.panel.find('.form-group:last-child'));
    return this.tryReady();
  };

  filterPanel.prototype.tryReady = function() {
    if (!this.checkEmptyChoice()) {
      return this.changeStatus(fpStatus.ready);
    }
  };

  filterPanel.prototype.changeStatus = function(status) {
    var emptyChoiceFilter, fpValues, handler, i, j, k, len, len1, len2, ref, ref1, ref2, results;
    console.log(status);
    this.panel.removeClass(this.status);
    this.status = status;
    this.panel.addClass(this.status);
    if (this.status === fpStatus.ready) {
      fpValues = this.getValues();
      ref = this.handlers_ready;
      for (i = 0, len = ref.length; i < len; i++) {
        handler = ref[i];
        handler(fpValues);
      }
    }
    if (this.status === fpStatus.init) {
      ref1 = this.handlers_init;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        handler = ref1[j];
        handler();
      }
    }
    if (this.status === fpStatus.emptyChoice) {
      emptyChoiceFilter = _.find(this.filters, function(ft) {
        return ft.getStatus() === "emptyChoice";
      });
      ref2 = this.handlers_emptyChoice;
      results = [];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        handler = ref2[k];
        results.push(handler(emptyChoiceFilter));
      }
      return results;
    }
  };

  filterPanel.prototype.setFilterStatus = function(filterCtrl) {
    if (filterCtrl.emptyChoice) {
      if (filterCtrl.model.optionalFlag) {
        return filterCtrl.changeStatus("inactive");
      } else {
        return filterCtrl.changeStatus("emptyChoice");
      }
    } else {
      return filterCtrl.changeStatus("active");
    }
  };

  filterPanel.prototype.getValues = function(excludeFilters) {
    var activeFilters, keyValues, values;
    values = {};
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    keyValues = _.map(activeFilters, function(x) {
      return [x.id, x.getChoice()];
    });
    values = _.object(keyValues);
    return values;
  };

  filterPanel.prototype.getCtxValues = function(excludeFilters) {
    var activeFilters;
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    return _.map(activeFilters, function(x) {
      return {
        filterId: x.id,
        filterValue: x.getChoice(),
        filterText: x.getChoiceText()
      };
    });
  };

  filterPanel.prototype.getTexts = function(forFilters) {
    var filters, keyValues, texts;
    texts = {};
    filters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (forFilters) {
      filters = _.filter(filters, function(ft) {
        return _.contains(forFilters, ft.id);
      });
    }
    keyValues = _.map(filters, function(x) {
      return [x.id, x.getChoiceText()];
    });
    texts = _.object(keyValues);
    return texts;
  };

  filterPanel.prototype.checkChoiceEnabling = function() {
    return _.find(this.filters, function(ft) {
      return ft.getChoiceEnabling();
    });
  };

  filterPanel.prototype.checkEmptyChoice = function() {
    var emptyFilter, i, len, ref;
    ref = _.filter(this.filters, function(item) {
      return item.getStatus() === "active" || item.getStatus() === "emptyChoice";
    });
    for (i = 0, len = ref.length; i < len; i++) {
      emptyFilter = ref[i];
      if (emptyFilter.emptyChoice && !emptyFilter.model.OptionalFlag) {
        this.changeStatus(fpStatus.emptyChoice);
        return true;
      }
    }
    return false;
  };

  filterPanel.prototype.changedValue = function(filter, value, prevValue) {
    var preSendActionsPromise;
    console.log(filter.id + " = " + value);
    if (this.status === fpStatus.init) {
      return;
    }
    preSendActionsPromise = true;
    if (this.checkChanges) {
      preSendActionsPromise = window.checkForChanges;
    }
    return extDeferred.when(preSendActionsPromise).then((function(_this) {
      return function() {
        var ctx, dependentFilters, existNextFilter, i, id, len, nextFilter, nextFilters, requestOptions, val, vals;
        _this.changeStatus(fpStatus.init);
        dependentFilters = filter.getDependency();
        vals = _this.getValues(dependentFilters);
        ctx = {
          selectedData: []
        };
        for (id in vals) {
          val = vals[id];
          ctx.selectedData.push({
            filterId: id,
            filterValue: val
          });
        }
        nextFilters = _.chain(_this.filters).sortBy(function(ft) {
          return ft.model.order;
        }).filter(function(ft) {
          return ft.model.order > filter.model.order;
        }).value();
        existNextFilter = false;
        if (!nextFilters) {
          _this.checkEmptyChoice();
        }
        for (i = 0, len = nextFilters.length; i < len; i++) {
          nextFilter = nextFilters[i];
          if (!nextFilter.model.dependencies) {
            existNextFilter = true;
            continue;
          }
          if (!nextFilter.dependenciesSatisfied()) {
            nextFilter.changeStatus("inactive");
            continue;
          }
          existNextFilter = true;
        }
        requestOptions = {
          action: _this.filterPanelHandlers,
          dataType: "json",
          contentType: 'application/json',
          forceData: JSON.stringify(ctx),
          showProcessing: dependentFilters.length || existNextFilter,
          method: "post"
        };
        if (!dependentFilters.length || !existNextFilter) {
          _this.tryReady();
          if (filter.existStateProvider) {
            requestOptions.showProcessing = false;
            jsSubmit(requestOptions);
          }
          return;
        }
        return jsSubmit(requestOptions).fail(function(xhr) {
          var dependFilter, j, len1, results;
          _this.changeStatus(fpStatus.emptyChoice);
          results = [];
          for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
            dependFilter = dependentFilters[j];
            results.push(dependFilter.changeStatus("inactive"));
          }
          return results;
        }).then(function(response) {
          var filterCtrl, filterSrc, j, k, len1, len2, satisfied;
          for (j = 0, len1 = response.length; j < len1; j++) {
            filterSrc = response[j];
            filterCtrl = _.find(dependentFilters, function(ft) {
              return ft.id === filterSrc.filterId && (!ft.model.dependencies || ft.dependenciesSatisfied());
            });
            if (!filterCtrl) {
              continue;
            }
            filterCtrl.setSource(filterSrc);
            _this.setFilterStatus(filterCtrl);
          }
          vals = _this.getValues();
          for (k = 0, len2 = nextFilters.length; k < len2; k++) {
            filterCtrl = nextFilters[k];
            if (filterCtrl.model.dependencies) {
              satisfied = filterCtrl.dependenciesSatisfied();
              if (!satisfied) {
                filterCtrl.changeStatus("inactive");
              }
            }
          }
          return _this.tryReady();
        });
      };
    })(this));
  };

  filterPanel.prototype.choiceOnFilter = function(filterId, val) {};

  filterPanel.prototype.choiceComplete = function() {};

  filterPanel.prototype.choiceInProgress = function() {};

  filterPanel.prototype.validate = function() {
    var isValid;
    isValid = true;
    _.each(this.filters, function(filter) {
      if (filter.getStatus() !== "active") {
        return;
      }
      if (!filter.validate) {
        return;
      }
      if (!filter.validate()) {
        isValid = false;
      }
    });
    return isValid;
  };

  filterPanel.prototype.ready = function(handler) {
    return this.handlers_ready.push(handler);
  };

  filterPanel.prototype.init = function(handler) {
    return this.handlers_init.push(handler);
  };

  filterPanel.prototype.emptyChoice = function(handler) {
    return this.handlers_emptyChoice.push(handler);
  };

  return filterPanel;

})();

dependencyTracker = (function() {
  function dependencyTracker(dependencies) {
    this.dependencies = dependencies;
  }

  dependencyTracker.prototype.checkDependency = function(vals, dep) {
    var arrValue, relFilterValue, relObject;
    relObject = dep.relatedObject;
    if (relObject.type === "Param") {
      return true;
    }
    if (relObject.type !== "Filter") {
      $.show.error("Неизвестный тип зависимости для фильтра");
      return false;
    }
    relFilterValue = vals[relObject.ref];
    if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
      return false;
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
        arrValue = JSON.parse(dep.relatedValue);
        if (!Array.isArray(arrValue)) {
          return false;
        }
        return _.some(arrValue, function(v) {
          return v === relFilterValue;
        });
      default:
        return false;
    }
  };

  dependencyTracker.prototype.isSatisfied = function(vals) {
    return _.every(this.dependencies, (function(_this) {
      return function(dep) {
        return _this.checkDependency(vals, dep);
      };
    })(this));
  };

  return dependencyTracker;

})();

filter = (function() {
  function filter(panel1, model) {
    var control, filterSize, html, label, ref, ref1, template, titleInfo;
    this.panel = panel1;
    this.model = model;
    this.id = this.model.id;
    this.emptyChoice = false;
    this.childFilters = [];
    this.filterRow = null;
    this.choice = null;
    this.control = (ref = this.control) != null ? ref : null;
    this.status = (ref1 = this.status) != null ? ref1 : null;
    this.choiceEnabling = true;
    this.existStateProvider = this.model.existStateProvider;
    this.model.control = this;
    filterSize = this.panel.filterSize;
    label = "<label class=\"" + filterSize.label + "\">{{{title}}}</label>";
    control = "<div class=\"" + filterSize.control + "\">";
    template = Handlebars.compile('<div class="form-group">' + label + control + '<div id="filter-control"></div> </div> </div>');
    titleInfo = this.model.title;
    html = template({
      title: titleInfo
    });
    this.filterRow = $(html);
    this.filterRow.find("#filter-control").replaceWith(this.control);
  }

  filter.prototype.appendToPanel = function(panel) {
    return panel.append(this.filterRow);
  };

  filter.prototype.changeStatus = function(status) {
    this.filterRow.removeClass(this.status);
    this.status = status;
    this.filterRow.addClass(this.status);
    switch (status) {
      case "inactive":
        return this.disable();
      case "active":
        return this.enable();
    }
  };

  filter.prototype.getChoiceEnabling = function() {
    return this.choiceEnabling;
  };

  filter.prototype.setChoiceEnabling = function(choiceEnabling) {
    return this.choiceEnabling = choiceEnabling;
  };

  filter.prototype.getStatus = function() {
    return this.status;
  };

  filter.prototype.addChild = function(filter) {
    return this.childFilters.push(filter);
  };

  filter.prototype.getChoice = function() {
    return this.choice;
  };

  filter.prototype.getChoiceText = function() {
    return this.choice;
  };

  filter.prototype.setChoice = function(choice) {
    var prevChoice;
    prevChoice = this.choice;
    this.choice = choice;
    this.panel.changedValue(this, choice, prevChoice);
    return this.filterRow.trigger(this.id + ':change', [choice, prevChoice, this]);
  };

  filter.prototype.setSource = function(src) {
    if (src.defaultValue || (src.defaultValue === "")) {
      return this.setChoice(src.defaultValue);
    }
  };

  filter.prototype.getDependency = function() {
    var dependentFilter, dependentFilters, fltFunc, i, j, len, len1, subDependentFilters, testFilter, testFilterModel, testFilters;
    testFilters = _.filter(this.panel.filters, (function(_this) {
      return function(item) {
        return item.model.order > _this.model.order;
      };
    })(this));
    dependentFilters = [];
    for (i = 0, len = testFilters.length; i < len; i++) {
      testFilter = testFilters[i];
      testFilterModel = testFilter.model;
      if (!testFilterModel.dependencies) {
        continue;
      }
      fltFunc = (function(_this) {
        return function(dependency) {
          return (dependency.relatedObject.type === "Filter") && dependency.relatedObject.ref === _this.model.id;
        };
      })(this);
      if (!_.some(testFilterModel.dependencies, fltFunc)) {
        continue;
      }
      dependentFilters.push(testFilter);
    }
    for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
      dependentFilter = dependentFilters[j];
      subDependentFilters = dependentFilter.getDependency();
      if ((subDependentFilters != null ? subDependentFilters.length : void 0) === 0) {
        continue;
      }
      subDependentFilters = _.reject(subDependentFilters, function(subDepFlt) {
        return _.findWhere(dependentFilters, {
          id: subDepFlt.id
        });
      });
      if (subDependentFilters.length === 0) {
        continue;
      }
      dependentFilters = _.union(dependentFilters, subDependentFilters);
    }
    return dependentFilters;
  };

  filter.prototype.dependenciesSatisfied = function() {
    var tracker, vals;
    vals = this.panel.getValues();
    tracker = new dependencyTracker(this.model.dependencies);
    return tracker.isSatisfied(vals);
  };

  return filter;

})();

listFilter = (function(superClass) {
  var allOptionVal, nullOptionVal;

  extend(listFilter, superClass);

  allOptionVal = "-1";

  nullOptionVal = "-2";

  function listFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.sourceIds = [];
    this.control = $("<select></select>").addClass("form-control").attr("name", this.model.id).on("change", function() {
      return ctrl.setChoice($(this).val());
    });
    listFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listFilter.prototype.setSource = function(src) {
    var ctrl, item, itemsCount;
    ctrl = this;
    src.items = src.items || [];
    this.sourceIds = [];
    if (this.model.nullOption) {
      src.items.unshift({
        title: this.model.nullOption,
        value: nullOptionVal
      });
    }
    if (this.model.allOption) {
      this.sourceIds.unshift(allOptionVal);
    }
    this.sourceIds = this.sourceIds.concat(_.pluck(src.items, "value"));
    itemsCount = src.items.length;
    this.emptyChoice = !itemsCount;
    this.control.empty();
    if (itemsCount > 0) {
      if (itemsCount === 1) {
        this.setChoiceEnabling(false);
        item = src.items[0];
        this.setLabel(item.title, item.value);
        if (src.defaultValue) {
          src.defaultValue = item.value;
        }
        if (this.model.hideSingleOption) {
          ctrl.filterRow.addClass("hidden");
        }
      } else {
        this.setList(src.items);
      }
    } else {
      this.setChoiceEnabling(false);
      this.setLabel(this.model.emptyText);
    }
    if (this.model.hideSingleOption && itemsCount !== 1) {
      ctrl.filterRow.removeClass("hidden");
    }
    return listFilter.__super__.setSource.call(this, src);
  };

  listFilter.prototype.setList = function(items) {
    var actualItems, i, item, len, ref, results;
    this.control.show();
    this.enable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    actualItems = items;
    if (this.model.allOption) {
      actualItems.unshift({
        title: this.model.allOption,
        value: allOptionVal
      });
    }
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.control));
    }
    return results;
  };

  listFilter.prototype.setLabel = function(title, value) {
    var valInput;
    this.control.hide();
    this.disable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    this.labelBlock = $("<div></div>");
    this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(title));
    if (value) {
      valInput = $("<input type=\"hidden\" />").attr("name", this.model.id).val(value);
      this.labelBlock.append(valInput);
    }
    return this.labelBlock.insertAfter(this.control);
  };

  listFilter.prototype.setChoice = function(choice) {
    if (!_.contains(this.sourceIds, choice)) {
      choice = _.first(this.sourceIds);
    }
    this.control.val(choice);
    return listFilter.__super__.setChoice.call(this, choice);
  };

  listFilter.prototype.getChoiceText = function() {
    if (this.labelBlock) {
      return this.labelBlock.find('input[type=text]').val();
    } else {
      return $("option:selected", this.control).text();
    }
  };

  listFilter.prototype.enable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").prop("disabled", false);
    } else {
      return this.control.prop("disabled", false);
    }
  };

  listFilter.prototype.disable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").attr("disabled", "disabled");
    } else {
      return this.control.attr("disabled", "disabled");
    }
  };

  return listFilter;

})(filter);

dateRange = (function() {
  function dateRange(startDate1, endDate1) {
    this.startDate = startDate1;
    this.endDate = endDate1;
  }

  dateRange.parseDate = function(str) {
    var date, strDate;
    strDate = str.substring(0, 19);
    date = strDate.length === 19 ? new Date(strDate) : dateUtils.str2date(strDate);
    return date;
  };

  dateRange.parseRange = function(str) {
    var endDate, range, rangeArr, startDate;
    rangeArr = str.split(" - ");
    if (rangeArr[0]) {
      startDate = dateRange.parseDate(rangeArr[0]);
    }
    if (rangeArr[1]) {
      endDate = dateRange.parseDate(rangeArr[1]);
    }
    range = new dateRange(startDate, endDate);
    range.source = str;
    return range;
  };

  dateRange.prototype.toString = function() {
    var ret;
    ret = "";
    if (this.startDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
    }
    ret += " - ";
    if (this.endDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
    }
    return ret.replace(/"/g, "");
  };

  dateRange.prototype.isValid = function() {
    return this.startDate <= this.endDate;
  };

  return dateRange;

})();

dateRangeFilter = (function(superClass) {
  extend(dateRangeFilter, superClass);

  function dateRangeFilter(panel1, model) {
    var baseName, ctrl, dateChanged, endControl, endDateBlur, endDateChanged, endDateChangedAndBlur, separatorCtrl, startControl, startDateBlur, startDateChanged, startDateChangedAndBlur;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.startDateIsChanged = false;
    this.endDateIsChanged = false;
    baseName = this.model.id;
    startControl = $("<input type=\"text\" class=\"input-md form-control start-date\"/>").attr("name", baseName + "_start");
    endControl = $("<input type=\"text\" class=\"input-md form-control end-date\"/>").attr("name", baseName + "_end");
    separatorCtrl = $("<span class=\"input-group-addon\">—</span>");
    this.control = $("<div class=\"input-daterange input-group date\"></div>").append(startControl).append(separatorCtrl).append(endControl);
    dateInput.initDateInput(this.control, "", "", "", {
      autoCorrectDates: false,
      keepEmptyField: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var endDate, range, startDate;
        if (_this.status === 'inactive') {
          return;
        }
        startDate = _this.control.find('.start-date').val();
        endDate = _this.control.find('.end-date').val();
        range = !startDate && !endDate ? null : startDate + " - " + endDate;
        return _this.setChoice(range, true);
      };
    })(this);
    startDateBlur = (function(_this) {
      return function() {
        var dtStartDate, endDate, startDate;
        if (_this.startDateIsChanged) {
          _this.startDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtStartDate = dateRange.parseDate(startDate);
            if (dtStartDate > dateRange.parseDate(endDate)) {
              if (_this.validateDate(dtStartDate)) {
                _this.control.find('.end-date').val(startDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    endDateBlur = (function(_this) {
      return function() {
        var dtEndDate, endDate, startDate;
        if (_this.endDateIsChanged) {
          _this.endDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtEndDate = dateRange.parseDate(endDate);
            if (dtEndDate < dateRange.parseDate(startDate)) {
              if (_this.validateDate(dtEndDate)) {
                _this.control.find('.start-date').val(endDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    startDateChanged = (function(_this) {
      return function() {
        _this.startDateIsChanged = true;
      };
    })(this);
    endDateChanged = (function(_this) {
      return function() {
        _this.endDateIsChanged = true;
      };
    })(this);
    startDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.startDateIsChanged) {
          startDateChanged();
          return startDateBlur();
        }
      };
    })(this);
    endDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.endDateIsChanged) {
          endDateChanged();
          return endDateBlur();
        }
      };
    })(this);
    this.control.find('.start-date').on("blur", startDateBlur);
    this.control.find('.end-date').on("blur", endDateBlur);
    this.control.find('.start-date').on("change", startDateChanged);
    this.control.find('.end-date').on("change", endDateChanged);
    this.control.find('.start-date').datepicker().on("changeDate", startDateChangedAndBlur);
    this.control.find('.end-date').datepicker().on("changeDate", endDateChangedAndBlur);
    dateRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateRangeFilter.prototype.setSource = function(src) {
    var maxDate, minDate, range;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.find('.start-date, .end-date').datepicker("setStartDate", minDate);
    this.control.find('.start-date, .end-date').datepicker("setEndDate", maxDate);
    this.src = src;
    range = new dateRange(minDate, maxDate);
    this.setChoice(range, true);
    return dateRangeFilter.__super__.setSource.call(this, src);
  };

  dateRangeFilter.prototype.getChoice = function() {
    var currChoice, currRange;
    currChoice = this.choice;
    currRange = new dateRange(currChoice.startDate, currChoice.endDate);
    return currRange.toString();
  };

  dateRangeFilter.prototype.getChoiceText = function() {
    var currChoice;
    currChoice = this.choice;
    return moment(currChoice.startDate).format('DD.MM.YYYY') + " - " + moment(currChoice.endDate).format('DD.MM.YYYY');
  };

  dateRangeFilter.prototype.setChoice = function(choice, internal) {
    var endDate, range, startDate;
    if (!choice) {
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    range = choice.startDate || choice.endDate ? choice : dateRange.parseRange(choice);
    dateRangeFilter.__super__.setChoice.call(this, range);
    if (internal) {
      return;
    }
    if (range.startDate) {
      this.control.find('.start-date').datepicker('update', dateUtils.date2str(range.startDate));
    }
    if (range.endDate) {
      this.control.find('.end-date').datepicker('update', dateUtils.date2str(range.endDate));
    }
    startDate = this.control.find('.start-date').val();
    endDate = this.control.find('.end-date').val();
    if (!startDate || !endDate) {
      range = startDate + " - " + endDate;
      return this.setChoice(range, true);
    }
  };

  dateRangeFilter.prototype.validateDate = function(dt) {
    var maxValue, minValue;
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    return dt >= minValue && dt <= maxValue;
  };

  dateRangeFilter.prototype.validate = function() {
    var endDate, maxValue, minValue, startDate;
    if (this.choice.startDate === null || !this.choice.startDate) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate);
      return false;
    }
    if (this.choice.endDate === null || !this.choice.endDate) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    startDate = dateUtils.asUTCDate(this.choice.startDate.clone());
    endDate = dateUtils.asUTCDate(this.choice.endDate.clone());
    if (startDate < minValue || startDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (endDate < minValue || endDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (!this.choice.isValid()) {
      $.show.error(language.Generic.Common.kMsgStartBeforeEnd);
      return false;
    }
    return true;
  };

  dateRangeFilter.prototype.enable = function() {
    return this.control.find("input").prop("disabled", false);
  };

  dateRangeFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateRangeFilter;

})(filter);

dateFilter = (function(superClass) {
  extend(dateFilter, superClass);

  function dateFilter(panel1, model) {
    var baseName, buttonCtrl, control, ctrl, dateChanged, inputCtrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    control = $("<input type=\"text\" class=\"input-md form-control filter-date\"></input>").attr("name", baseName);
    buttonCtrl = $("<button type=\"button\" class=\"btn btn-primary\">").append($("<span class=\"glyphicon glyphicon-calendar\"></span>")).append($("</button>"));
    inputCtrl = $("<span class=\"input-group-btn\">").append(buttonCtrl).append($("</span>"));
    this.control = $("<div class=\"input-group date\">").append(control).append(inputCtrl).append($("</div>"));
    dateInput.initDateInput(this.control, null, null, null, {
      autoCorrectDates: false,
      keepEmptyField: true,
      autoclose: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var filterDate;
        if (_this.status === 'inactive') {
          return;
        }
        filterDate = dateUtils.str2date(_this.control.find('.filter-date').val());
        return _this.setChoice(filterDate, true);
      };
    })(this);
    this.control.find('.filter-date').on("change", dateChanged);
    dateFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateFilter.prototype.setSource = function(src) {
    var filterDate, maxDate, minDate;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.datepicker("setStartDate", minDate);
    this.control.datepicker("setEndDate", maxDate);
    filterDate = moment(src.defaultValue).toDate();
    this.control.datepicker("setDate", filterDate);
    this.setChoice(filterDate, true);
    return this.src = src;
  };

  dateFilter.prototype.setChoice = function(choice, internal) {
    var filterDate;
    if (!choice) {
      dateFilter.__super__.setChoice.call(this, null);
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    if (!internal) {
      this.control.datepicker('update', choice);
    }
    filterDate = dateUtils.str2date(this.control.find('.filter-date').val());
    return dateFilter.__super__.setChoice.call(this, filterDate);
  };

  dateFilter.prototype.validate = function() {
    var filterDate, maxValue, minValue;
    if (this.choice === null || !this.choice) {
      $.show.error(language.Generic.Common.kErrInvalidDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    filterDate = dateUtils.asUTCDate(this.choice.clone());
    if (filterDate < minValue || filterDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidDate + '\n' + language.Generic.Common.kDateMustBeInCurrYear);
      return false;
    }
    return true;
  };

  dateFilter.prototype.enable = function() {
    return this.control.find("input").prop("disabled", false);
  };

  dateFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateFilter;

})(filter);

checksFilter = (function(superClass) {
  extend(checksFilter, superClass);

  function checksFilter(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        if (_this.model.hasSureCheckedFlag && !_this.control.find("input:checked").length > 0) {
          alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
          return false;
        }
        checkboxValues = _this.control.find('input:checked').map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>").on("change", checkboxChanged);
    checksFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.emptyChoice = false;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      if (this.model.emptyText) {
        this.labelBlock = $("<div></div>");
        this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
        this.labelBlock.appendTo(this.control);
        this.emptyChoice = true;
      }
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter.prototype.getChoice = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter.__super__.setChoice.call(this, choice);
  };

  checksFilter.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox\"></div>").append(lbl).appendTo(this.control));
    }
    return results;
  };

  checksFilter.prototype.enable = function() {};

  checksFilter.prototype.disable = function() {};

  checksFilter.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter;

})(filter);

checksFilter2 = (function(superClass) {
  extend(checksFilter2, superClass);

  function checksFilter2(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        if (_this.model.hasSureCheckedFlag && !_this.control.find("input:checked").length > 0) {
          alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
          return false;
        }
        checkboxValues = (_this.control.find('input:checked')).map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>");
    this.control.on("change", checkboxChanged);
    checksFilter2.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter2.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.emptyChoice = false;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      if (this.model.emptyText) {
        this.labelBlock = $("<div></div>");
        this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
        this.labelBlock.appendTo(this.control);
        this.emptyChoice = true;
      }
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter2.prototype.getChoice = function() {
    return (this.control.find('input:checked')).map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter2.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter2.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter2.__super__.setChoice.call(this, choice);
  };

  checksFilter2.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox checkbox-inline checkbox-row\"></div>").append(lbl).appendTo(this.control));
    }
    return results;
  };

  checksFilter2.prototype.enable = function() {};

  checksFilter2.prototype.disable = function() {};

  checksFilter2.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter2;

})(filter);

listRangeFilter = (function(superClass) {
  extend(listRangeFilter, superClass);

  function listRangeFilter(panel1, model) {
    var baseName, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    this.startControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_start").on("change", function() {
      return ctrl.setChoice($(this).val(), 1);
    });
    this.endControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_end").on("change", function() {
      return ctrl.setChoice($(this).val(), 2);
    });
    this.separatorCtrl = $("<span class=\"input-group-addon\">-</span>");
    this.control = $("<div class=\"input-group\"></div>").append(this.startControl).append(this.separatorCtrl).append(this.endControl);
    listRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listRangeFilter.prototype.setSource = function(src) {
    var itemsCount, ref, ref1, ref2;
    this.emptyChoice = ((ref = src.itemsFrom) != null ? ref.length : void 0) === 0;
    this.startControl.empty();
    itemsCount = (ref1 = src.itemsFrom) != null ? ref1.length : void 0;
    if (itemsCount > 0) {
      this.setListFrom(src.itemsFrom);
    }
    this.endControl.empty();
    itemsCount = (ref2 = src.itemsTo) != null ? ref2.length : void 0;
    if (itemsCount > 0) {
      this.setListTo(src.itemsTo);
    }
    this.defVal = src.defaultValue;
    if (this.defVal) {
      this.setChoice(this.defVal);
    }
    return listRangeFilter.__super__.setSource.call(this, src);
  };

  listRangeFilter.prototype.setListFrom = function(items) {
    var actualItems, i, item, len, ref, results;
    this.startControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.startControl));
    }
    return results;
  };

  listRangeFilter.prototype.setListTo = function(items) {
    var actualItems, i, item, len, ref, results;
    this.endControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.endControl));
    }
    return results;
  };

  listRangeFilter.prototype.setChoice = function(choice, partNum) {
    var choiceIndex, endChoice, endChoiceIndex, sepIndex, startChoice, startChoiceIndex;
    if (typeof partNum !== "undefined") {
      if (partNum === 1) {
        endChoice = this.endControl.val();
        this.startControl.val(choice);
        if (choice && endChoice) {
          choiceIndex = $(this.startControl).find("option[value='" + choice + "']")[0].index;
          endChoiceIndex = $(this.endControl).find("option[value='" + endChoice + "']")[0].index;
          if (endChoiceIndex < choiceIndex) {
            this.endControl.val(choice);
          }
        }
      } else if (partNum === 2) {
        startChoice = this.startControl.val();
        this.endControl.val(choice);
        if (choice && startChoice) {
          choiceIndex = $(this.endControl).find("option[value='" + choice + "']")[0].index;
          startChoiceIndex = $(this.startControl).find("option[value='" + startChoice + "']")[0].index;
          if (choiceIndex < startChoiceIndex) {
            this.startControl.val(choice);
          }
        }
      }
      choice = this.getChoice();
    } else {
      sepIndex = choice.indexOf(" - ");
      if (sepIndex) {
        this.startControl.val(choice.substring(0, sepIndex), 1);
        this.endControl.val(choice.substring(sepIndex + 3), 2);
      }
    }
    return listRangeFilter.__super__.setChoice.call(this, choice);
  };

  listRangeFilter.prototype.getChoice = function() {
    return this.startControl.val() + " - " + this.endControl.val();
  };

  listRangeFilter.prototype.enable = function() {
    return this.control.prop("disabled", false);
  };

  listRangeFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return listRangeFilter;

})(filter);

listWithArrowsFilter = (function(superClass) {
  extend(listWithArrowsFilter, superClass);

  function listWithArrowsFilter(panel1, model) {
    var buttonGroup, leftButton, rightButton;
    this.panel = panel1;
    this.model = model;
    listWithArrowsFilter.__super__.constructor.call(this, this.panel, this.model);
    $(this.control).addClass("list-with-arrows");
    $(this.control).wrapAll('<div class="input-group">');
    leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>').on("click", (function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").prev('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>').on("click", (function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").next('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton);
    $(this.control).parent().append(buttonGroup);
  }

  return listWithArrowsFilter;

})(listFilter);

listFilter2 = (function(superClass) {
  extend(listFilter2, superClass);

  function listFilter2() {
    return listFilter2.__super__.constructor.apply(this, arguments);
  }

  listFilter2.prototype.setSource = function(src) {
    var ref;
    listFilter2.__super__.setSource.call(this, src);
    if (((ref = src.items) != null ? ref.length : void 0) > 1) {
      return this.select2Control = this.control.select2({
        placeholder: "Введите наименование",
        language: "ru"
      });
    } else {
      this.control.select2();
      this.control.select2('close');
      return this.control.siblings('span.select2').hide();
    }
  };

  return listFilter2;

})(listFilter);

textFilter = (function(superClass) {
  extend(textFilter, superClass);

  function textFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.validationExp = null;
    this.validationErrorMessage = null;
    this.control = $("<input></input>").addClass("form-control").attr("name", this.model.id).on("change", function() {
      return ctrl.setChoice($(this).val());
    });
    textFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  textFilter.prototype.setSource = function(src) {
    this.setChoice(src != null ? src.defaultValue : void 0);
    this.validationExp = src != null ? src.validationExp : void 0;
    this.validationErrorMessage = src != null ? src.validationErrorMessage : void 0;
    return textFilter.__super__.setSource.call(this, src);
  };

  textFilter.prototype.validate = function() {
    var choice;
    if (this.validationExp) {
      choice = this.getChoice();
      if (!choice.match(this.validationExp)) {
        $.show.error('Фильтр "' + this.model.title + '": ' + this.validationErrorMessage);
        return false;
      }
    }
    return true;
  };

  textFilter.prototype.getChoice = function() {
    return $(this.control).val();
  };

  textFilter.prototype.setChoice = function(choice) {
    $(this.control).val(choice);
    if (this.model.optionalFlag || choice) {
      this.emptyChoice = false;
    } else {
      this.emptyChoice = true;
    }
    return textFilter.__super__.setChoice.call(this, choice);
  };

  textFilter.prototype.enable = function() {
    return this.control.prop("disabled", false);
  };

  textFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return textFilter;

})(filter);

(function(exp, name) {
  var exported, exports;
  exported = false;
  if ( true && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})({
  filterPanel: filterPanel,
  dependencyTracker: dependencyTracker,
  fpStatus: fpStatus
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(251)(module)))

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

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(479);


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _repository = __webpack_require__(480);
var _planner = __webpack_require__(481);
var _subjectplans = __webpack_require__(482);
var _editTaskComponent = __webpack_require__(483);
var _viewLessonMapCtrl = __webpack_require__(484);
var _editTaskCtrl = __webpack_require__(487);
var _editLessonMapCtrl = __webpack_require__(488);
var _editSubjectSkillsComponent = __webpack_require__(489);
var _lessonMapsRegistry = __webpack_require__(490);
var _variantAssignment = __webpack_require__(491);
var _variants = __webpack_require__(492);
var _users = __webpack_require__(18);
var _subjectGroups = __webpack_require__(28);
var _editUnit = __webpack_require__(494);
var _copyUnit = __webpack_require__(495);
var _editLesson = __webpack_require__(496);
var _testplans = __webpack_require__(498);
var _copyLesson = __webpack_require__(499);
var _plannerExporter = __webpack_require__(500);
var _intInput = __webpack_require__(501);
var _floatinput = __webpack_require__(502);
var angularModule = angular.module("irtech.netcity.school.planning", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
var moduleInfo = {
  name: "irtech.netcity.school.planning",
  path: "/static/dist/app/school/planning"
};
angularModule.service("lessonMapsRepository", _repository.LessonMapsRepository).service("subjectplansRepository", _subjectplans.SubjectplansRepository).service("unitsRepository", _subjectplans.UnitsRepository).service("lessonsRepository", _subjectplans.LessonsRepository).service("usersRepository", _users.UsersRepository).service("subjectGroupRepository", _subjectGroups.SubjectGroupRepository).service("qaReferencesRepository", _testplans.QaReferencesRepository).service("plannerExporter", _plannerExporter.PlannerExporter).controller("ViewLessonMapCtrl", _viewLessonMapCtrl.ViewLessonMapCtrl).controller("EditTaskCtrl", _editTaskCtrl.EditTaskCtrl).controller("EditLessonMapCtrl", _editLessonMapCtrl.EditLessonMapCtrl).component("editTaskComponent", _editTaskComponent.EditTaskComponent).directive("intInput", _intInput.IntInputDirective).directive("numericInput", _floatinput.NumericModelDirective).component(_editSubjectSkillsComponent.EditSubjectSkillsComponent.selector, _editSubjectSkillsComponent.EditSubjectSkillsComponent).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/subjectplans/", _planner.PlannerComponent).when("/subjectplans/variants/", _variants.SubjectPlanVariantsComponent).when("/subjectplans/variants/assignment", _variantAssignment.VariantAssignmentComponent).when("/lessonmaps/", _lessonMapsRegistry.LessonMapsRegistryComponent).when("/lessonmaps/registry/", _lessonMapsRegistry.LessonMapsRegistryComponent).when("/lessonmaps/view/:lessonMapId", {
    templateUrl: moduleInfo.path + "/lessonmaps/view/viewLessonMap.html",
    controller: "ViewLessonMapCtrl as ctrl"
  }).when("/units/edit/:unitId", _editUnit.EditUnitComponent).when("/units/copy/:unitId", _copyUnit.CopyUnitComponent).when("/lessons/edit/:lessonId", _editLesson.EditLessonComponent).when("/lessons/copy/:lessonId", _copyLesson.CopyLessonComponent).otherwise(_planner.PlannerComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});
module.exports = {
  moduleInfo: moduleInfo
};

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessonMapsRepository = void 0;
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
var LessonMapsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(LessonMapsRepository, _BaseRepository);
  var _super = _createSuper(LessonMapsRepository);
  function LessonMapsRepository() {
    _classCallCheck(this, LessonMapsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(LessonMapsRepository, [{
    key: "create",
    value: function create(lessonMap) {
      return this.$http.put("/webapi/lessonmaps", lessonMap).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "update",
    value: function update(lessonMap) {
      return this.$http.post("/webapi/lessonmaps", lessonMap).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getLessonModels",
    value: function getLessonModels() {
      return this.$http.get("/webapi/lessonmaps/models").then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getLessonActivities",
    value: function getLessonActivities(grade) {
      return this.$http.get("/webapi/lessonmaps/activities", {
        params: {
          grade: grade
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "saveLessonMapTask",
    value: function saveLessonMapTask(lessonMapTask) {
      return this.$http.post("/webapi/lessonmaps/task", lessonMapTask).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteLessonMapTask",
    value: function deleteLessonMapTask(lessonMapTaskId) {
      return this.$http["delete"]("/webapi/lessonmaps/task", {
        params: {
          lessonMapTaskId: lessonMapTaskId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "findLessonMap",
    value: function findLessonMap(sgId, lessonId) {
      var params = {
        lessonId: lessonId,
        sgId: sgId
      };
      return this.$http.get("/webapi/lessonmaps", {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getLessonMapInfo",
    value: function getLessonMapInfo(lessonMapId) {
      return this.$http.get("/webapi/lessonmaps/info", {
        params: {
          lessonMapId: lessonMapId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getLessonMapShortInfo",
    value: function getLessonMapShortInfo(lessonMapId) {
      return this.$http.get("/webapi/lessonmaps/shortinfo", {
        params: {
          lessonMapId: lessonMapId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getSubjectSkills",
    value: function getSubjectSkills(grade, subject) {
      return this.$http.get("/webapi/lessonmaps/skills", {
        params: {
          grade: grade,
          subject: subject
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getLessonMapSubjects",
    value: function getLessonMapSubjects(iupClassId) {
      return this.$http.get("/webapi/lessonmaps/subjects", {
        params: {
          iupClassId: iupClassId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getTeacherActivities",
    value: function getTeacherActivities(modelStageId) {
      return this.$http.get("/webapi/lessonmaps/teacheractivities", {
        params: {
          modelStageId: modelStageId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return LessonMapsRepository;
}(_repository.BaseRepository);
exports.LessonMapsRepository = LessonMapsRepository;
module.exports = {
  LessonMapsRepository: LessonMapsRepository
};

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlannerController = exports.PlannerComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _common = __webpack_require__(6);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var nodeType = {
  plan: "plan",
  unit: "unit",
  lesson: "lesson"
};
var PlannerCtx = /*#__PURE__*/_createClass(function PlannerCtx() {
  _classCallCheck(this, PlannerCtx);
  this.unitId = null;
  this.planId = null;
  this.lessonId = null;
  this.elementId = null;
  this.elementType = null;
  this.currElementName = null;
  this.readOnly = null;
  this.plan = null;
});
var GetReportCommand = /*#__PURE__*/function () {
  function GetReportCommand(planId, moduleQa, plannerExporter) {
    _classCallCheck(this, GetReportCommand);
    this.planId = planId;
    this.moduleQa = moduleQa;
    this.plannerExporter = plannerExporter;
  }
  _createClass(GetReportCommand, [{
    key: "execute",
    value: function execute() {
      var _this = this;
      var reportTypes = [{
        id: 0,
        name: language.Generic.Curriculum.kReducedPlan
      }, {
        id: 1,
        name: language.Generic.Curriculum.kReducedPlan_withHA
      }, {
        id: 2,
        name: language.Generic.Curriculum.kFullPlan
      }];
      if (this.moduleQa) {
        reportTypes.push({
          id: 3,
          name: language.Generic.Curriculum.kFullPlan_withDecKES
        });
      }
      var dialogContent = "<form name=\"form\">" + "<div class=\"form-group\">" + "<select class=\"form-control\" name=\"reportType\"></select>" + "</div>" + "</form>";
      var selectRepType;
      var selectReportTypeDialog = {
        title: "Выберите вид отчета",
        message: dialogContent,
        onshow: function onshow(dialog) {
          selectRepType = $(dialog.$modalBody).find("select");
          _.each(reportTypes, function (reportType) {
            selectRepType.append($("<option></option>").attr("value", reportType.id).text(reportType.name));
          });
        },
        buttons: [{
          label: language.Generic.Buttons.kExport,
          action: function action(dialogItself) {
            var reportType = selectRepType.val();
            _this.plannerExporter.exportPlanner(_this.planId, reportType);
            dialogItself.close();
            // Запуск asp версии
            // const reportType = selectRepType.val();
            // let data = { 'PLANID': this.planId, 'kViewReport': reportType };
            // postTo({ path: "/asp/curriculum/PlannerExport.asp", params: data, formParams: { "target": "_blank" } });
          },

          cssClass: 'btn-primary'
        }]
      };
      $.show.dialog(selectReportTypeDialog);
    }
  }]);
  return GetReportCommand;
}();
var PlannerController = /*#__PURE__*/function () {
  PlannerController.$inject = ["pageContext", "appContext", "contextService", "$appLoader", "$alerts", "$dialogs", "subjectplansRepository", "plannerExporter", "settingsProvider", "$scope", "$location", "loggerFactory", "language"];
  /*@ngInject*/
  function PlannerController(pageContext, appContext, contextService, $appLoader, $alerts, $dialogs, subjectplansRepository, plannerExporter, settingsProvider, $scope, $location, loggerFactory, language) {
    _classCallCheck(this, PlannerController);
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.contextService = contextService;
    this.$appLoader = $appLoader;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.subjectplansRepository = subjectplansRepository;
    this.plannerExporter = plannerExporter;
    this.settingsProvider = settingsProvider;
    this.$scope = $scope;
    this.$location = $location;
    this.language = language;
    this.fp = null;
    this.language = language;
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity === "true";
    this.logger = loggerFactory.getInstance("subjectplans");
    pageContext.clear();
    pageContext.title = this.language.Curriculum.kTitlePlanner;
    //pageContext.back = { history: true };
    this.planTree = null;
    this.state = {
      writeAccess: true,
      noVariants: false,
      yearTransitionState: false
    };
    this.options = {
      container: $("#tree"),
      readOnly: !appContext.hasAnyRight([Rights.arCurrMgmCreateAll, Rights.arCurrMgmCreate]) || appContext.readOnly,
      immediatelyLoad: true,
      moduleQA: false,
      ctx: new PlannerCtx()
    };
    this.ctx = this.options.ctx;
    this.init();
  }
  _createClass(PlannerController, [{
    key: "hasWriteAccess",
    value: function hasWriteAccess() {
      return !this.ctx.readOnly && !this.options.readOnly;
    }
  }, {
    key: "getPlan",
    value: function getPlan() {
      var planId = this.ctx.planId;
      if (planId) {
        return this.planTree.find(function (x) {
          return x.key == planId;
        });
      }
      return null;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.initTree();
      this.contextService.isYearTransitionState(this.appContext).then(function (yearTransitionState) {
        _this2.state.yearTransitionState = yearTransitionState;
      });
      var prepareState = this.subjectplansRepository.getPlannerState().then(function (state) {
        angular.extend(_this2.ctx, state);
        if (_this2.ctx.planId) {
          _this2.ctx.plan = _this2.getPlan();
        }
        var queryElemType = _this2.$location.search().elemType;
        if (queryElemType) {
          _this2.ctx.elementType = queryElemType;
        }
      });
      this.settingsProvider.ServerSettings.SystemSettings.ModuleQA().then(function (moduleQa) {
        _this2.options.moduleQa = moduleQa;
      });
      this.filterPanelSettings = {
        url: "/webapi/subjectplans/filter?extraActivity=".concat(this.extraActivity),
        initUrl: "/webapi/subjectplans/filter/init?extraActivity=".concat(this.extraActivity),
        events: {
          ready: function ready() {
            _this2.load();
          },
          emptyChoice: function emptyChoice() {
            _this2.state.noVariants = true;
            _this2.$appLoader.hide();
            _this2.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "load",
    value: function load(extFilter) {
      var _this3 = this;
      var fpVals = this.fp.getValues();
      var fpFilter = {
        yearId: parseInt(this.appContext.yearId),
        subjectId: fpVals.SBJID,
        grade: fpVals.GRADEID,
        variantId: fpVals.VARIANTID || -1,
        extraActivity: this.extraActivity
      };
      var filter = $.extend({}, fpFilter, extFilter);
      var initNodeTypes = function initNodeTypes(treeModel) {
        var activated = false;
        treeModel.forEach(function (plan) {
          plan.nodeType = nodeType.plan;
          if (_this3.ctx.elementType === nodeType.plan && _this3.ctx.planId == parseInt(plan.key)) {
            plan.activate = true;
            plan.focus = true;
            activated = true;
            _this3.ctx.readOnly = _this3.options.readOnly || plan.readOnly || false;
          }
          if (!plan.children) {
            return;
          }
          plan.children.forEach(function (unit) {
            unit.nodeType = nodeType.unit;
            if (_this3.ctx.elementType === nodeType.unit && _this3.ctx.unitId == parseInt(unit.key)) {
              unit.activate = true;
              unit.focus = true;
              activated = true;
              _this3.ctx.readOnly = _this3.options.readOnly || plan.readOnly || false;
              _this3.ctx.planId = parseInt(plan.key);
            }
            if (!unit.children) {
              return;
            }
            unit.children.forEach(function (lesson) {
              lesson.nodeType = nodeType.lesson;
              if (_this3.ctx.elementType === nodeType.lesson && _this3.ctx.lessonId == parseInt(lesson.key)) {
                lesson.activate = true;
                lesson.focus = true;
                activated = true;
                _this3.ctx.readOnly = _this3.options.readOnly || plan.readOnly || false;
                _this3.ctx.planId = parseInt(plan.key);
                _this3.ctx.unitId = parseInt(unit.key);
              }
            });
          });
        });
        if (!activated) {
          //сброс контекста выбора
          _this3.ctx.elementType = null;
        }
        return treeModel;
      };
      var setTreeData = function setTreeData(treeModel) {
        _this3.planTree = treeModel;
        var rootNode = $(_this3.options.container).dynatree("getRoot");
        rootNode.removeChildren();
        rootNode.addChild(_this3.planTree);
        _this3.initPlanAttachments();
      };
      this.subjectplansRepository.getTree(filter).then(initNodeTypes).then(setTreeData).then(function () {
        _this3.state.noVariants = _this3.planTree.length === 0;
        _this3.$appLoader.hide();
        var node = $("#tree").dynatree("getTree").getActiveNode();
        if (!node) {
          return;
        }
        var nodeTopOffset = $(node.li).offset().top;
        var clientHeight = document.documentElement.clientHeight;
        if (clientHeight > nodeTopOffset + 10) {
          //элемент на странице виден - скролл не требуется
          return;
        }
        var scrollSize = nodeTopOffset - clientHeight + 100;
        $('html, body').animate({
          scrollTop: scrollSize
        }, 20);
      });
    }
    //инциализация файловых вложений
  }, {
    key: "initPlanAttachments",
    value: function initPlanAttachments() {
      var plan = this.ctx.plan || this.getPlan();
      if (!plan) {
        return;
      }
      var readOnly = this.ctx.readOnly;
      var fa = this.fa;
      if (!fa) {
        fa = {
          data: {
            context: {
              planId: null
            },
            files: []
          },
          options: {
            multiple: false,
            showDescription: true,
            readonly: readOnly,
            sizeLimit: function sizeLimit(uploadLimits) {
              return uploadLimits.plannerDocFileNoteSizeLimit;
            }
          }
        };
      }
      fa.data.context.planId = plan.key;
      fa.options.readonly = readOnly;
      fa.data.files = [];
      fa.options.onSuccessAttach = function (file) {
        //добавляем файл в "дерево"
        plan.attach = {
          id: file.id,
          originalFileName: file.name,
          description: file.description
        };
      };
      fa.options.onSuccessDetach = function () {
        return plan.attach = null;
      };
      if (plan.attach) {
        var file = {
          id: plan.attach.id,
          name: plan.attach.originalFileName,
          description: plan.attach.description
        };
        fa.data.files.push(file);
      }
      this.fa = fa;
    }
    //инициализации дерева
  }, {
    key: "initTree",
    value: function initTree() {
      var _this4 = this;
      var toggleCookie = function toggleCookie(cookie, flag, ids) {
        var expandInfo = $.cookie(cookie) || "";
        var expandNodes = expandInfo.split("|");
        if (flag) {
          expandNodes = expandNodes.concat(ids);
        } else {
          expandNodes = _.difference(expandNodes, ids);
        }
        expandInfo = expandNodes.join("|");
        $.cookie(cookie, expandInfo, {
          path: "/"
        });
      };
      var cookiePersist = function cookiePersist(flag, node) {
        //сохраняем состояние в куках
        toggleCookie("PL_EXP_".concat(node.data.nodeType), flag, [node.data.key]);
        if (!flag && node.data.nodeType == nodeType.plan && node.childList && node.childList.length) {
          //если схлопываем план - то схлопываем и разделы
          var planUnitIds = node.childList.map(function (n) {
            return n.data.key;
          });
          toggleCookie("PL_EXP_".concat(nodeType.unit), flag, planUnitIds);
        }
      };
      $(this.options.container).dynatree({
        title: "КТП",
        fx: {
          height: "toggle",
          duration: 200
        },
        autoFocus: false,
        onExpand: cookiePersist,
        onQueryExpand: cookiePersist,
        onActivate: function onActivate(node) {
          _this4.logger.debug("activate {node}", {
            node: node
          });
          if (node.data.nodeType === nodeType.plan) {
            _this4.ctx.elementType = nodeType.plan;
            _this4.ctx.planId = node.data.key;
            _this4.ctx.unitId = null;
            _this4.ctx.lessonId = null;
          } else if (node.data.nodeType === nodeType.unit) {
            _this4.ctx.elementType = nodeType.unit;
            _this4.ctx.unitId = node.data.key;
            _this4.ctx.planId = node.parent.data.key;
            _this4.ctx.lessonId = null;
          } else if (node.data.nodeType === nodeType.lesson) {
            _this4.ctx.elementType = nodeType.lesson;
            _this4.ctx.lessonId = node.data.key;
            _this4.ctx.unitId = node.parent.data.key;
            _this4.ctx.planId = node.parent.parent.data.key;
          }
          _this4.ctx.plan = _this4.getPlan() || {};
          _this4.ctx.currElementName = node.data.title;
          _this4.ctx.elementId = node.data.key;
          _this4.ctx.readOnly = _this4.options.readOnly || _this4.ctx.plan.readOnly || false;
          if (_this4.ctx.elementType == nodeType.plan) {
            _this4.initPlanAttachments();
          }
          _this4.$scope.$applyAsync();
        },
        onLazyRead: function onLazyRead(node) {
          var loadNodeType = "";
          var loader = null;
          if (node.data.nodeType === nodeType.plan) {
            loadNodeType = nodeType.unit;
            loader = _this4.subjectplansRepository.getUnits(node.data.key);
          } else if (node.data.nodeType === nodeType.unit) {
            loader = _this4.subjectplansRepository.getLessons(node.data.key);
            loadNodeType = nodeType.lesson;
          } else {
            return;
          }
          loader.then(function (items) {
            if (items.length) {
              items.forEach(function (i) {
                return i.nodeType = loadNodeType;
              });
              node.addChild(items);
            } else {
              node.data.isFolder = false;
            }
          });
        }
      });
    }
  }, {
    key: "copyItem",
    value: function copyItem() {
      if (this.ctx.elementType == nodeType.unit) this.copyUnit();else if (this.ctx.elementType == nodeType.lesson) this.copyLesson();else if (this.ctx.elementType == nodeType.plan) this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgCantCopyPlan);else this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
    }
  }, {
    key: "createItem",
    value: function createItem() {
      if (this.ctx.elementType == nodeType.plan) this.createUnit();else if (this.ctx.elementType == nodeType.unit) this.createLesson();else this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgYouNeedSelectPlanOrUnitFirst);
    }
  }, {
    key: "editItem",
    value: function editItem() {
      if (this.ctx.elementType == nodeType.unit) {
        this.editUnit();
      } else if (this.ctx.elementType == nodeType.lesson) {
        this.editLesson();
      } else if (this.ctx.elementType == nodeType.plan) {
        if (this.ctx.readOnly) {
          this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgCantViewPlan);
        } else {
          this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgCantEditPlan);
        }
      } else {
        this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
      }
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      if (this.ctx.elementType == nodeType.unit) this.deleteUnit();else if (this.ctx.elementType == nodeType.lesson) this.deleteLesson();else if (this.ctx.elementType == nodeType.plan) this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgCantDeletePlan);else this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
    }
  }, {
    key: "createLesson",
    value: function createLesson() {
      this.createOrEditLesson("new");
    }
  }, {
    key: "editLesson",
    value: function editLesson() {
      this.createOrEditLesson(this.ctx.elementId);
    }
  }, {
    key: "createOrEditLesson",
    value: function createOrEditLesson(lessonParam) {
      var fpVals = this.fp.getValues();
      var params = {
        planId: this.ctx.planId,
        unitId: this.ctx.unitId,
        gradeId: fpVals.GRADEID,
        subjectId: fpVals.SBJID,
        readOnly: this.ctx.readOnly,
        extraActivity: this.extraActivity
      };
      this.$location.path("/lessons/edit/".concat(lessonParam)).search(params);
    }
  }, {
    key: "copyLesson",
    value: function copyLesson() {
      if (this.ctx.readOnly) {
        this.$dialogs.message("Невозможно редактировать планы уроков");
        return;
      }
      var fpVals = this.fp.getValues();
      var params = {
        planId: this.ctx.planId,
        unitId: this.ctx.unitId,
        subjectId: fpVals.SBJID,
        extraActivity: this.extraActivity,
        lessonName: this.ctx.currElementName
      };
      this.$location.path("/lessons/copy/".concat(this.ctx.elementId)).search(params);
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson() {
      var _this5 = this;
      this.$dialogs.confirm(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        _this5.subjectplansRepository.deleteLesson(_this5.ctx.planId, _this5.ctx.unitId, _this5.ctx.elementId).then(function () {
          _this5.load();
          _this5.$alerts.success(_this5.language.Generic.Calendar.kLessonWasSuccessfullyDeleted);
        });
      });
    }
  }, {
    key: "createUnit",
    value: function createUnit() {
      this.createOrEditUnit('new');
    }
  }, {
    key: "editUnit",
    value: function editUnit() {
      this.createOrEditUnit(this.ctx.elementId);
    }
  }, {
    key: "createOrEditUnit",
    value: function createOrEditUnit(unitParam) {
      var params = {
        planId: this.ctx.planId,
        readOnly: this.ctx.readOnly,
        extraActivity: this.extraActivity
      };
      this.$location.path("/units/edit/".concat(unitParam)).search(params);
    }
  }, {
    key: "copyUnit",
    value: function copyUnit() {
      if (this.ctx.readOnly) {
        this.$dialogs.message("Невозможно редактировать планы уроков");
        return;
      }
      var fpVals = this.fp.getValues();
      var params = {
        planId: this.ctx.planId,
        subjectId: fpVals.SBJID,
        extraActivity: this.extraActivity,
        unitName: this.ctx.currElementName
      };
      this.$location.path("/units/copy/".concat(this.ctx.elementId)).search(params);
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit() {
      var _this6 = this;
      this.$dialogs.confirm(this.language.Generic.Curriculum.kMsgDeletingUnit).then(function () {
        _this6.subjectplansRepository.deleteUnit(_this6.ctx.planId, _this6.ctx.elementId).then(function () {
          _this6.$alerts.success(_this6.language.Generic.Calendar.kUnitWasSuccessfullyDeleted);
          _this6.load();
        });
      });
    }
  }, {
    key: "exportKTP",
    value: function exportKTP() {
      var _this7 = this;
      if (this.ctx.elementType != nodeType.plan) {
        this.$dialogs.message(this.language.Generic.Curriculum.kForExportSelectVariantWithUnit);
        return;
      }
      this.$dialogs.confirm(this.language.Generic.Curriculum.kExportVariantConfirm.replace("%", "<b>" + this.ctx.currElementName + "</b>")).then(function () {
        (0, _common.postTo)({
          path: "/webapi/subjectplans/export",
          formParams: {
            method: "GET"
          },
          params: {
            PLANID: _this7.ctx.elementId
          }
        });
      });
    }
  }, {
    key: "importKTP",
    value: function importKTP() {
      var _this8 = this;
      if (this.ctx.elementType != nodeType.plan || this.ctx.elementId == 0) {
        this.$dialogs.message(this.language.Generic.Curriculum.kForImportSelectEmptyVariant);
        return;
      }
      var plan = this.getPlan();
      if (plan.isFolder) {
        this.$dialogs.message(this.language.Generic.Curriculum.kForImportSelectEmptyVariant);
        return;
      }
      var fpVals = this.fp.getValues();
      $.show.fileDialog({
        title: this.language.Generic.Curriculum.kImportVariant,
        isAjax: true,
        fileExts: ['.xls'],
        //submitParams: { SJID: fpVals.SBJID, GRADEID: fpVals.GRADEID, PlanID: this.ctx.elementId },
        url: '/webapi/subjectplans/import?planId=' + this.ctx.elementId + "&grade=" + fpVals.GRADEID,
        handlerAjaxSuccess: function handlerAjaxSuccess(response) {
          _this8.$alerts.success(_this8.language.Generic.Curriculum.kImportVariantSuccess);
          _this8.load();
        }
      });
    }
  }, {
    key: "openReport",
    value: function openReport() {
      if (!this.ctx.planId) {
        this.$dialogs.message(this.language.Generic.Curriculum.kErrMsgYouNeedSelectPlanFirst);
        return;
      }
      var planNode = this.getPlan();
      if (!planNode.isFolder) {
        this.$dialogs.message(this.language.Generic.Curriculum.kEmptyPlanUnits);
        return;
      }
      var cmd = new GetReportCommand(this.ctx.planId, this.options.moduleQa, this.plannerExporter);
      cmd.execute();
    }
  }, {
    key: "goVariants",
    value: function goVariants() {
      var path = "/subjectplans/variants/";
      var params = {};
      if (this.extraActivity) {
        params.extraActivity = true;
      }
      this.$location.path(path).search(params);
    }
  }, {
    key: "expandAll",
    value: function expandAll() {
      this.load({
        expandAll: true
      });
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var recFunc = function recFunc(node) {
        node.expand(false);
        node.visit(recFunc);
      };
      this.options.container.dynatree("getRoot").visit(recFunc);
    }
  }]);
  return PlannerController;
}();
exports.PlannerController = PlannerController;
var PlannerComponent = {
  controller: PlannerController,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/planner/planner.component.html"
};
exports.PlannerComponent = PlannerComponent;

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitsRepository = exports.SubjectplansRepository = exports.LessonsRepository = exports.LessonExpandData = void 0;
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
var SubjectplansRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SubjectplansRepository, _BaseRepository);
  var _super = _createSuper(SubjectplansRepository);
  function SubjectplansRepository() {
    _classCallCheck(this, SubjectplansRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SubjectplansRepository, [{
    key: "getTree",
    value: function getTree(args) {
      return this.$http.get("/webapi/subjectplans/tree", {
        params: args
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPlannerState",
    value: function getPlannerState() {
      return this.$http.get("/webapi/subjectplans/state").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getUnits",
    value: function getUnits(planId) {
      return this.$http.get("/webapi/subjectplans/tree/units", {
        params: {
          planId: planId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit(planId, unitId) {
      return this.$http["delete"]("/webapi/subjectplans/units", {
        params: {
          planId: planId,
          unitId: unitId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getLessons",
    value: function getLessons(unitId) {
      return this.$http.get("/webapi/subjectplans/tree/lessons", {
        params: {
          unitId: unitId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson(planId, unitId, lessonId) {
      return this.$http["delete"]("/webapi/subjectplans/lessons", {
        params: {
          planId: planId,
          unitId: unitId,
          lessonId: lessonId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFilterPanel",
    value: function getFilterPanel() {
      return this.$http.get("/webapi/subjectplans/filter").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getVariants",
    value: function getVariants(grade, subjectId, teacherId) {
      var data = {
        grade: grade,
        subjectId: subjectId,
        teacherId: teacherId
      };
      return this.$http.get("/webapi/subjectplan/variants", {
        params: data
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createVariant",
    value: function createVariant(request) {
      return this.$http.put("/webapi/subjectplan/variants", request).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editVariants",
    value: function editVariants(grade, subjectId, data) {
      var params = {
        grade: grade,
        subjectId: subjectId
      };
      return this.$http.post("/webapi/subjectplan/variants/batch-edit", data, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteVariants",
    value: function deleteVariants(id) {
      var params = {
        id: id
      };
      return this.$http["delete"]("/webapi/subjectplan/variants/", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getVariantAssignments",
    value: function getVariantAssignments(sgId) {
      var data = {
        sgId: sgId
      };
      if (sgId.constructor == Array && sgId.length > 30) {
        return this.$http.post("/webapi/subjectplan/variants/assignments/search", data).then(this.handleResponse)["catch"](this.handleError);
      }
      return this.$http.get("/webapi/subjectplan/variants/assignments/search", {
        params: data
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setVariantAssignments",
    value: function setVariantAssignments(data) {
      return this.$http.post("/webapi/subjectplan/variants/assignments", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getStudiedLessons",
    value: function getStudiedLessons(sgId, cmId) {
      var data = {
        sgId: sgId,
        cmId: cmId
      };
      return this.$http.get("/webapi/subjectplans/lessons/studied", {
        params: data
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportPlanner",
    value: function exportPlanner(subjectplanId, reportType) {
      var query = {
        subjectplanId: subjectplanId,
        reportType: reportType
      };
      return this.$http.get("/webapi/subjectplans/export/planner", {
        params: {
          subjectplanId: subjectplanId,
          reportType: reportType
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SubjectplansRepository;
}(_baseRepository.BaseRepository);
exports.SubjectplansRepository = SubjectplansRepository;
var LessonExpandData;
exports.LessonExpandData = LessonExpandData;
(function (LessonExpandData) {
  LessonExpandData["Attachments"] = "attachments";
  LessonExpandData["ContentElements"] = "contentElements";
})(LessonExpandData || (exports.LessonExpandData = LessonExpandData = {}));
var LessonsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(LessonsRepository, _BaseRepository2);
  var _super2 = _createSuper(LessonsRepository);
  function LessonsRepository() {
    _classCallCheck(this, LessonsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(LessonsRepository, [{
    key: "getLesson",
    value: function getLesson(lessonId, expand) {
      var params = {};
      if (expand) {
        params.expand = expand;
      }
      return this.$http.get("/webapi/subjectplans/lessons/" + lessonId, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getLessonName",
    value: function getLessonName(lessonId) {
      return this.$http.get("/webapi/subjectplans/lessons/".concat(lessonId, "/name")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editLessonShort",
    value: function editLessonShort(lesson, fields) {
      var params = {};
      if (fields) {
        params.fields = fields;
      }
      return this.$http.post("/webapi/subjectplans/lessons/short/", lesson, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editLesson",
    value: function editLesson(lesson) {
      return this.$http.post("/webapi/subjectplans/lessons/", lesson).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "copyLesson",
    value: function copyLesson(planId, _copyLesson) {
      return this.$http.post("/webapi/subjectplans/lessons/copy", _copyLesson, {
        params: {
          planId: planId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createLesson",
    value: function createLesson(lesson) {
      return this.$http.put("/webapi/subjectplans/lessons", lesson).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson(lessonId) {
      return this.$http["delete"]("/webapi/subjectplans/lessons", {
        params: {
          lessonId: lessonId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return LessonsRepository;
}(_baseRepository.BaseRepository);
exports.LessonsRepository = LessonsRepository;
var UnitsRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(UnitsRepository, _BaseRepository3);
  var _super3 = _createSuper(UnitsRepository);
  function UnitsRepository() {
    _classCallCheck(this, UnitsRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(UnitsRepository, [{
    key: "getUnit",
    value: function getUnit(unitId) {
      return this.$http.get("/webapi/subjectplans/units/" + unitId).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getUnitsLastNumber",
    value: function getUnitsLastNumber(planId) {
      return this.$http.get("/webapi/subjectplans/units/get-last-number", {
        params: {
          planId: planId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editUnit",
    value: function editUnit(unit) {
      return this.$http.post("/webapi/subjectplans/units", unit).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "copyUnit",
    value: function copyUnit(planId, unit) {
      return this.$http.post("/webapi/subjectplans/units/copy", unit, {
        params: {
          planId: planId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createUnit",
    value: function createUnit(unit) {
      return this.$http.put("/webapi/subjectplans/units", unit).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit(planId, unitId) {
      return this.$http["delete"]("/webapi/subjectplans/units", {
        params: {
          planId: planId,
          unitId: unitId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSubjectPlans",
    value: function getSubjectPlans(subjectId, withUnits) {
      var params = {
        subjectId: subjectId
      };
      if (withUnits) {
        params.withUnits = withUnits;
      }
      return this.$http.get("/webapi/subjectplans", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getUnits",
    value: function getUnits(planId) {
      return this.$http.get("/webapi/subjectplans/units", {
        params: {
          planId: planId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return UnitsRepository;
}(_baseRepository.BaseRepository);
exports.UnitsRepository = UnitsRepository;

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditTaskComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EditTaskComponentController = /*#__PURE__*/_createClass( /* @ngInject */["$q", "$timeout", "changeTracker", "$log", "$scope", function EditTaskComponentController($q, $timeout, changeTracker, $log, $scope) {
  _classCallCheck(this, EditTaskComponentController);
  this.$q = $q;
  this.$timeout = $timeout;
  this.changeTracker = changeTracker;
  this.$log = $log;
  this.language = language;
  this.$scope = $scope;
  // диапазон номеров заданий
  this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.data = {
    activeTree: false
  };
}]); // директива - рекдактирование этапа урока
var EditTaskComponent = {
  templateUrl: "/static/dist/app/school/planning/lessonmaps/directives/editTaskComponent.html",
  controller: EditTaskComponentController,
  bindings: {
    mapTask: "=",
    select2Settings: "=",
    skillsData: "<",
    service: "<",
    onUpdate: "&?",
    needreset: "=?"
  }
};
exports.EditTaskComponent = EditTaskComponent;

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewLessonMapCtrl = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
var _app = __webpack_require__(479);
var _references = _interopRequireDefault(__webpack_require__(485));
var _planningHelper = __webpack_require__(486);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ViewLessonMapCtrl = /*#__PURE__*/function () {
  ViewLessonMapCtrl.$inject = ["pageContext", "appContext", "$appLoader", "$uibModal", "$q", "lessonMapsRepository", "$routeParams"];
  /*@ngInject*/
  function ViewLessonMapCtrl(pageContext, appContext, $appLoader, $uibModal, $q, lessonMapsRepository, $routeParams) {
    _classCallCheck(this, ViewLessonMapCtrl);
    this.language = language;
    pageContext.title = "Просмотр ТКУ";
    pageContext.parent = {
      title: "Дизайнер уроков",
      href: "lessonmaps/"
    };
    pageContext.back = {
      history: true
    };
    this.data = {
      filterInfo: null,
      preparedStages: null,
      mapTasksGroups: null,
      expandStates: {},
      lessonMapInfo: null,
      refs: _references["default"]
    };
    this.state = {
      emptyData: false,
      ready: false
    };
    this.helper = new _planningHelper.PlanningHelper();

    // параметры queryString
    this.lessonMapId = $routeParams.lessonMapId;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$q = $q;
    this.$uibModal = $uibModal;
    this.repository = lessonMapsRepository;
    this.load();
  }
  _createClass(ViewLessonMapCtrl, [{
    key: "canEdit",
    value: function canEdit() {
      return !appContext.readOnly && !this.data.lessonMapInfo.accessInfo.readOnly;
    }
  }, {
    key: "getActivityData",
    value: function getActivityData(activities, type) {
      var activitiesData = _.filter(activities, function (activity) {
        return activity.type === type;
      });

      // Осуществляемые действия
      var activity = _.map(activitiesData, function (a) {
        return a.activity;
      }).join(";\n").trim();
      // Формируемые умения
      var results = _.map(activitiesData, function (a) {
        return a.results;
      }).join(";\n").trim();
      // Выводимая на экран информация по УУД
      var activitiesInfo = {
        activity: activity,
        results: results
      };
      return activitiesInfo;
    }
  }, {
    key: "getModelStageName",
    value: function getModelStageName(mapTask) {
      if (mapTask.modelStage.parentStageNumber) {
        return "\u042D\u0442\u0430\u043F ".concat(mapTask.modelStage.parentStageNumber, ".").concat(mapTask.modelStage.number, ". ").concat(mapTask.modelStage.name);
      }
      return "\u042D\u0442\u0430\u043F ".concat(mapTask.modelStage.number, ". ").concat(mapTask.modelStage.name);
    }
  }, {
    key: "processLessonMapInfo",
    value: function processLessonMapInfo(lessonMapInfo) {
      var _this = this;
      var mapTasks = lessonMapInfo.tasks;
      mapTasks.forEach(function (mapTask) {
        // Выводимая на экран информация по Предметным умениям
        mapTask.skillsInfo = _.map(mapTask.subjectSkills, function (x) {
          return x.name;
        }).join(";\n").trim();
        _this.data.refs.learnActivityTypes.forEach(function (type) {
          mapTask[type.id.toLowerCase()] = _this.getActivityData(mapTask.activities, type.id);
        });

        // форма коммуникации
        mapTask.communicationFormDisplay = null;
        if (mapTask.communicationForm) {
          mapTask.communicationFormDisplay = _.find(_this.data.refs.communicationForms, function (x) {
            return x.id === mapTask.communicationForm;
          }).name;
        }

        // форма контроля
        mapTask.controlFormDisplay = null;
        if (mapTask.controlForm) {
          mapTask.controlFormDisplay = _.find(_this.data.refs.controlForms, function (x) {
            return x.id === mapTask.controlForm;
          }).name;
        }
      });
      var sortMapTasks = _.sortBy(mapTasks, function (mapTask) {
        return mapTask.modelStage.number;
      });
      var mapTaskGroupObj = _.groupBy(sortMapTasks, function (mapTask) {
        return _this.helper.getModelStageName(mapTask.modelStage);
      });
      this.data.mapTasksGroups = Object.keys(mapTaskGroupObj).map(function (key) {
        var tasks = mapTaskGroupObj[key];
        var tasksGroup = {
          name: key,
          mapTasks: tasks,
          expand: false
        };
        tasksGroup.expand = _this.data.expandStates[tasksGroup.name] || false;
        return tasksGroup;
      });

      // нет этапов
      this.state.emptyData = mapTasks.length === 0;
    }
  }, {
    key: "setAndRememberExpand",
    value: function setAndRememberExpand(mapTasksGroup) {
      mapTasksGroup.expand = !mapTasksGroup.expand;
      this.data.expandStates[mapTasksGroup.name] = mapTasksGroup.expand;
    }
  }, {
    key: "expandAll",
    value: function expandAll() {
      var _this2 = this;
      this.data.mapTasksGroups.forEach(function (x) {
        return _this2.setAndRememberExpand(x);
      });
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var _this3 = this;
      this.data.mapTasksGroups.forEach(function (x) {
        return _this3.setAndRememberExpand(x);
      });
    }
  }, {
    key: "getFilterInfo",
    value: function getFilterInfo(lessonMapInfo) {
      return {
        className: lessonMapInfo.classInfo.name,
        subject: lessonMapInfo.subjectGroup.name,
        unit: "\u0420\u0430\u0437\u0434\u0435\u043B ".concat(lessonMapInfo.lesson.unitNum, ". ").concat(lessonMapInfo.lesson.unitName),
        lesson: "\u0423\u0440\u043E\u043A ".concat(lessonMapInfo.lesson.lessonNum, ". ").concat(lessonMapInfo.lesson.lessonName),
        author: lessonMapInfo.umkAuthor.name,
        type: lessonMapInfo.type.name
      };
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      var lessonMapInfoLoad = this.repository.getLessonMapInfo(this.lessonMapId).then(function (lessonMapInfo) {
        _this4.data.lessonMapInfo = lessonMapInfo;
        _this4.data.filterInfo = _this4.getFilterInfo(lessonMapInfo);
        _this4.processLessonMapInfo(lessonMapInfo);
        _this4.state.ready = true;
        _this4.$appLoader.hide();
      });
      this.$q.when(lessonMapInfoLoad);
    }
  }, {
    key: "print",
    value: function print() {
      this.helper.print();
    }
  }, {
    key: "edit",
    value: function edit(_mapTask) {
      var _this5 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/planning/lessonmaps/editTask/taskInfo.html",
        controller: "EditTaskCtrl as ctrl",
        size: "lg",
        resolve: {
          mapTask: function mapTask() {
            return _.clone(_mapTask);
          }
        },
        windowClass: "modal-ctx"
      });
      modalInstance.result.then(function () {
        _this5.load();
      });
    }
  }, {
    key: "addedMapTask",
    value: function addedMapTask() {
      var mapTask = {
        lessonMap: null,
        modelStage: null,
        number: 1,
        task: null,
        teacherActivity: "",
        communicationForm: null,
        controlForm: null,
        activities: [],
        subjectSkills: []
      };
      mapTask.lessonMap = {
        id: this.lessonMapId
      };
      mapTask.modelStage = {
        id: _.first(this.data.lessonMapInfo.model.stages).id
      };
      return mapTask;
    }
  }, {
    key: "add",
    value: function add() {
      var _this6 = this;
      var _mapTask2 = this.addedMapTask();
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/planning/lessonmaps/editTask/taskInfo.html",
        controller: "EditTaskCtrl as ctrl",
        size: "lg",
        resolve: {
          mapTask: function mapTask() {
            return _mapTask2;
          }
        },
        windowClass: "modal-ctx"
      });
      modalInstance.result.then(function () {
        _this6.load();
      });
    }
  }, {
    key: "editLessonMap",
    value: function editLessonMap() {
      var _this7 = this;
      var _lessonMapInfo = {
        id: this.lessonMapId
      };
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/planning/lessonmaps/edit/commonInfo.html",
        controller: "EditLessonMapCtrl as ctrl",
        resolve: {
          lessonMapInfo: function lessonMapInfo() {
            return _lessonMapInfo;
          },
          edit: function edit() {
            return true;
          }
        },
        windowClass: "modal-ctx"
      });
      modalInstance.result.then(function () {
        _this7.load();
      });
    }
  }]);
  return ViewLessonMapCtrl;
}();
exports.ViewLessonMapCtrl = ViewLessonMapCtrl;

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var references = {
  // типы уроков
  lessonTypes: [{
    id: "Combined",
    name: "Комбинированный урок"
  }, {
    id: "NewMaterial",
    name: "Урок изучения нового материала"
  }, {
    id: "FormationOfNewSkills",
    name: "Урок формирования новых умений (способов деятельности)"
  }, {
    id: "ConsolidateNewKnowledgeAndSkills",
    name: "Урок закрепления новых знаний и умений"
  }, {
    id: "GeneralizationAndSystematization",
    name: "Урок обобщения и систематизации изученного"
  }, {
    id: "ControlAndCorrection",
    name: "Урок контроля и коррекции знаний и умений"
  }, {
    id: "PracticalApplication",
    name: "Урок практического применения знаний и умений"
  }],
  learnActivityTypes: [{
    id: "Regulatory",
    name: "Регулятивные УУД"
  }, {
    id: "Communicative",
    name: "Комуникативные УУД"
  }, {
    id: "Cognitive",
    name: "Познавательные УУД"
  }, {
    id: "Personal",
    name: "Личностные УУД"
  }],
  // todo: так было быстрее сделать, потом нужно переделать
  communicationForms: [{
    id: "FrontalWork",
    name: "Фронтальная работа"
  }, {
    id: "InteractionFormGroupWork",
    name: "Групповая работа в форме взаимодействия"
  }, {
    id: "CooperationFormGroupWork",
    name: "Групповая работа в форме сотрудничества"
  }, {
    id: "IndividualIndependentWork",
    name: "Индивидуальная самостоятельная работа"
  }],
  controlForms: [{
    id: "SelfControl",
    name: "Самоконтроль"
  }, {
    id: "MutualControl",
    name: "Взаимоконтроль"
  }, {
    id: "GroupExpertAssessment",
    name: "Групповая экспертная оценка"
  }, {
    id: "IndividualExpertAssessment",
    name: "Индивидуальная экспертная оценка"
  }]
};
module.exports = references;

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlanningHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PlanningHelper = /*#__PURE__*/function () {
  function PlanningHelper() {
    _classCallCheck(this, PlanningHelper);
  }
  _createClass(PlanningHelper, [{
    key: "getAddSettings",
    value: function getAddSettings() {
      var MinSearchTemplLength = 2;
      var createTag = function createTag(params) {
        if (params.term === null && params.term === undefined) {
          return null;
        }
        var term = params.term.trim();
        if (term === "") {
          return null;
        }
        return {
          id: term,
          text: term,
          newTag: true
        };
      };
      var insertTag = function insertTag(data, tag) {
        data.push(tag);
      };
      var addSettings = {
        tags: true,
        createTag: createTag,
        insertTag: insertTag,
        minimumInputLength: MinSearchTemplLength
      };
      return addSettings;
    }
  }, {
    key: "getModalContext",
    value: function getModalContext() {
      return $("div.modal.modal-ctx");
    }
  }, {
    key: "print",
    value: function print() {
      var content = $('.print-block');
      var printUtils = content.printUtils();
      printUtils.toPrint({
        viewHeader: true
      });
    }
  }, {
    key: "setSelectOptions",
    value: function setSelectOptions(selector, newOptions) {
      var select = $(selector);
      if (select.length) {
        var selectOptions = select.prop("options");
        $("option", select).remove();
        newOptions.forEach(function (option) {
          selectOptions[selectOptions.length] = new Option(option.text, option.id);
        });
      }
    }
  }, {
    key: "getModelStageName",
    value: function getModelStageName(modelStage) {
      if (modelStage.parentStageNumber) {
        return "\u042D\u0442\u0430\u043F ".concat(modelStage.parentStageNumber, ".").concat(modelStage.number, ". ").concat(modelStage.name);
      }
      return "\u042D\u0442\u0430\u043F ".concat(modelStage.number, ". ").concat(modelStage.name);
    }
  }]);
  return PlanningHelper;
}();
exports.PlanningHelper = PlanningHelper;

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSkillsPushSelectedTreeItemsUpService = exports.EditTaskCtrl = void 0;
var _references = _interopRequireDefault(__webpack_require__(485));
var _planningHelper = __webpack_require__(486);
var _netcityModalCtrl = __webpack_require__(40);
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
// сервис для проброса наверх Предметных умений
var SubjectSkillsPushSelectedTreeItemsUpService = /*#__PURE__*/function () {
  function SubjectSkillsPushSelectedTreeItemsUpService() {
    _classCallCheck(this, SubjectSkillsPushSelectedTreeItemsUpService);
    this.subjectSkillsSelectedTreeItems = [];
  }
  _createClass(SubjectSkillsPushSelectedTreeItemsUpService, [{
    key: "getSubjectSkillsSelectedTreeItems",
    value: function getSubjectSkillsSelectedTreeItems() {
      return this.subjectSkillsSelectedTreeItems;
    }
  }, {
    key: "setSubjectSkillsSelectedTreeItems",
    value: function setSubjectSkillsSelectedTreeItems(selected) {
      this.subjectSkillsSelectedTreeItems = selected;
    }
  }]);
  return SubjectSkillsPushSelectedTreeItemsUpService;
}();
exports.SubjectSkillsPushSelectedTreeItemsUpService = SubjectSkillsPushSelectedTreeItemsUpService;
var EditTaskCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  EditTaskCtrl.$inject = ["$scope", "$appLoader", "$longWork", "$uibModalInstance", "$alerts", "$q", "$dialogs", "lessonMapsRepository", "changeTracker", "mapTask"];
  _inherits(EditTaskCtrl, _NetCityModalControll);
  var _super = _createSuper(EditTaskCtrl);
  /*@ngInject*/
  function EditTaskCtrl($scope, $appLoader, $longWork, $uibModalInstance, $alerts, $q, $dialogs, lessonMapsRepository, changeTracker, mapTask) {
    var _this;
    _classCallCheck(this, EditTaskCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.header = "Создать/редактировать задание";
    _this.language = language;
    _this.data = {
      skills: null,
      activities: null,
      lessonMap: null,
      refs: _references["default"]
    };
    _this.state = {
      ready: false
    };

    // настройки для элементов директивы
    _this.select2Settings = {
      skills: null,
      cognitiveActivities: null,
      communicativeActivities: null,
      regulatoryActivities: null,
      personalActivities: null,
      teacherActivities: null,
      // справочники
      // todo: пока добавляю сюда
      communicationForms: _references["default"].communicationForms,
      controlForms: _references["default"].controlForms
    };
    _this.helper = new _planningHelper.PlanningHelper();
    // контекст для dataWereChanged
    _this.context = null;
    _this.$appLoader = $appLoader;
    _this.$longWork = $longWork;
    _this.$q = $q;
    _this.$uibModalInstance = $uibModalInstance;
    _this.$alerts = $alerts;
    _this.repository = lessonMapsRepository;
    _this.changeTracker = changeTracker;
    _this.mapTask = mapTask;

    // инициализация сервиса
    _this.subjectSkillsPushSelectedTreeItemsUpService = new SubjectSkillsPushSelectedTreeItemsUpService();
    // данные для дерева Предметных умений
    _this.skillsData = {
      skills: [],
      selected: []
    };
    _this.load();
    return _this;
  }
  _createClass(EditTaskCtrl, [{
    key: "getStageDataActivities",
    value: function getStageDataActivities() {
      var types = this.data.refs.learnActivityTypes;
      var dataActivities = this.mapTask.data.activities;
      var activities = [];
      types.forEach(function (type) {
        var typeActivitiesData = dataActivities[type.id.toLowerCase()] || [];
        var typeActivities = typeActivitiesData.map(function (x) {
          return new Object({
            id: x,
            type: type.id
          });
        });
        activities = activities.concat(typeActivities);
      });
      return activities;
    }
  }, {
    key: "getSkills",
    value: function getSkills() {
      // выбранные в дереве Предметные умения
      var selectedSkills = this.subjectSkillsPushSelectedTreeItemsUpService.getSubjectSkillsSelectedTreeItems();
      return selectedSkills;
    }
  }, {
    key: "successAction",
    value: function successAction(message) {
      this.changeTracker.clearDataChanges(this.context);
      this.$alerts.success(message);
      this.$uibModalInstance.close();
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.checkChanges()) {
        return;
      }
      this.mapTask.modelStage = this.mapTask.data.modelStage;
      this.mapTask.number = this.mapTask.data.number;
      this.mapTask.task = this.mapTask.data.task;
      this.mapTask.activities = this.getStageDataActivities();
      this.mapTask.subjectSkills = this.getSkills();
      this.mapTask.teacherActivity = this.mapTask.data.teacherActivity;
      this.mapTask.communicationForm = this.mapTask.data.communicationForm;
      this.mapTask.controlForm = this.mapTask.data.controlForm;
      this.$longWork.execute(this.repository.saveLessonMapTask(this.mapTask)).then(function () {
        return _this2.successAction(_this2.language.Generic.Common.kDataSaved);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      this.$dialogs.confirm(this.language.Generic.Lessonmap.kConfirmOnDeleteTask).then(function () {
        return _this3.$longWork.execute(_this3.repository.deleteLessonMapTask(_this3.mapTask.id));
      }).then(function () {
        return _this3.successAction(_this3.language.Generic.Lessonmap.kTaskDeleteSuccess);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      if (!this.checkChanges()) {
        return;
      }
      this.load().then(function () {
        _this4.changeTracker.clearDataChanges(_this4.context);
        _this4.needreset = true;
      });
    }
  }, {
    key: "checkChanges",
    value: function checkChanges() {
      var changed = this.changeTracker.isDataChanged(this.context);
      if (!changed) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
      }
      return changed;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "getActivitiesByType",
    value: function getActivitiesByType(type) {
      return _.chain(this.data.activities).filter(function (x) {
        return x.type === type;
      }).map(function (x) {
        return new Object({
          id: x.id,
          text: x.results
        });
      }).value();
    }
  }, {
    key: "getStageActivities",
    value: function getStageActivities(type) {
      return _.chain(this.mapTask.activities).filter(function (x) {
        return x.type === type;
      }).map(function (x) {
        return x.id.toString();
      }).value();
    }
  }, {
    key: "setMapTaskData",
    value: function setMapTaskData() {
      var _this5 = this;
      if (!this.mapTask.data) {
        this.mapTask.data = {};
      }

      // этап
      this.mapTask.data.modelStage = this.mapTask.modelStage;
      // номер задания
      this.mapTask.data.number = this.mapTask.number;
      // задание
      this.mapTask.data.task = this.mapTask.task;
      // деятельность учителя
      this.mapTask.data.teacherActivity = this.mapTask.teacherActivity;
      // форма коммуникации
      this.mapTask.data.communicationForm = this.mapTask.communicationForm;
      // форма контроля
      this.mapTask.data.controlForm = this.mapTask.controlForm;
      // предметные умения
      this.mapTask.data.skills = _.map(this.mapTask.subjectSkills, function (x) {
        return x.id.toString();
      });

      // текущие УУД у этапа
      var activities = {};
      this.data.refs.learnActivityTypes.forEach(function (type) {
        var property = type.id.toLowerCase();
        activities[property] = _this5.getStageActivities(type.id);
      });
      this.mapTask.data.activities = activities;
    }

    // загрузка информации о ТКУ
  }, {
    key: "lessonMapInfoLoad",
    value: function lessonMapInfoLoad() {
      var _this6 = this;
      return this.repository.getLessonMapInfo(this.mapTask.lessonMap.id).then(function (lessonMap) {
        lessonMap.model.stages.forEach(function (stage) {
          stage.displayName = _this6.helper.getModelStageName(stage);
        });
        $.extend(_this6.mapTask.lessonMap, lessonMap);
      });
    }

    // загрузка информации об УУД и Предметных умениях
  }, {
    key: "loadUudAndSkills",
    value: function loadUudAndSkills() {
      var _this7 = this;
      var grade = this.mapTask.lessonMap.classInfo.grade;
      var subject = this.mapTask.lessonMap.subject;
      var loadActivities = this.repository.getLessonActivities(grade).then(function (activities) {
        _this7.data.activities = activities;
      });
      var loadSubjectSkills = this.repository.getSubjectSkills(grade, subject).then(function (skills) {
        _this7.data.skills = skills;
      });
      return this.$q.all([loadActivities, loadSubjectSkills]);
    }
  }, {
    key: "getTeacherActivityOptions",
    value: function getTeacherActivityOptions(modelStage) {
      var options = modelStage.teacherActivities.map(function (x) {
        return {
          id: x.name,
          text: x.name
        };
      }) || [];
      var optionText = this.mapTask.teacherActivity;
      var optionItem = options.find(function (x) {
        return x.text === optionText;
      });
      if (!optionItem) {
        options.push({
          id: optionText,
          text: optionText
        });
      }
      return options;
    }
  }, {
    key: "getTeacherActivitySettings",
    value: function getTeacherActivitySettings() {
      var _this8 = this;
      // этап урока
      var modelStage = _.find(this.mapTask.lessonMap.model.stages, function (x) {
        return x.id === _this8.mapTask.modelStage.id;
      });
      var data = this.getTeacherActivityOptions(modelStage);
      var options = Object.assign({}, {
        data: data,
        search: true
      }, this.helper.getAddSettings());
      return options;
    }
  }, {
    key: "changeModelStage",
    value: function changeModelStage(selector) {
      var _this9 = this;
      // этап урока
      var modelStage = _.find(this.mapTask.lessonMap.model.stages, function (x) {
        return x.id === _this9.mapTask.data.modelStage.id;
      });
      var options = this.getTeacherActivityOptions(modelStage);
      this.helper.setSelectOptions(selector, options);
    }
  }, {
    key: "setSelect2Settings",
    value: function setSelect2Settings() {
      var _this10 = this;
      var MinSearchTemplLength = 2;
      // настройки селектов
      // Предметные умения
      this.select2Settings.skills = {
        data: this.data.skills.map(function (x) {
          return new Object({
            id: x.id,
            text: x.name
          });
        })
      };
      var baseOpts = {
        minimumInputLength: MinSearchTemplLength
      };
      var getActivOpts = function getActivOpts(activType) {
        return Object.assign({}, {
          data: _this10.getActivitiesByType(activType)
        }, baseOpts);
      };

      // УУД. Познавательные
      this.select2Settings.cognitiveActivities = getActivOpts("Cognitive");
      // Коммуникативные
      this.select2Settings.communicativeActivities = getActivOpts("Communicative");
      // Регулятивные
      this.select2Settings.regulatoryActivities = getActivOpts("Regulatory");
      // Личностные
      this.select2Settings.personalActivities = getActivOpts("Personal");
      // Деятельность учителя
      this.select2Settings.teacherActivities = this.getTeacherActivitySettings();
      //
      this.select2Settings.changeModelStage = this.changeModelStage.bind(this);
      // для байндинга
      this.setMapTaskData();
      // для дерева Предметные умения
      this.skillsData.skills = this.data.skills;
      this.skillsData.selected = this.mapTask.data.skills;
    }

    // загрузка
  }, {
    key: "load",
    value: function load() {
      var _this11 = this;
      this.$longWork.show();
      var getData = this.$q.when(this.lessonMapInfoLoad()).then(function () {
        return _this11.loadUudAndSkills();
      });
      return getData.then(function () {
        _this11.setSelect2Settings();
        _this11.state.ready = true;
        // контекст для dataWereChanged
        _this11.context = _this11.helper.getModalContext();
        _this11.$longWork.close();
      });
    }
  }]);
  return EditTaskCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.EditTaskCtrl = EditTaskCtrl;

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLessonMapCtrl = void 0;
var _filters = __webpack_require__(301);
var _references = _interopRequireDefault(__webpack_require__(485));
var _planningHelper = __webpack_require__(486);
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
var EditLessonMapCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  EditLessonMapCtrl.$inject = ["$scope", "appContext", "$http", "$longWork", "$uibModal", "$uibModalInstance", "$alerts", "$q", "$dialogs", "lessonMapsRepository", "lessonMapInfo", "edit", "changeTracker"];
  _inherits(EditLessonMapCtrl, _NetCityModalControll);
  var _super = _createSuper(EditLessonMapCtrl);
  /*@ngInject*/
  function EditLessonMapCtrl($scope, appContext, $http, $longWork, $uibModal, $uibModalInstance, $alerts, $q, $dialogs, lessonMapsRepository, lessonMapInfo, edit, changeTracker) {
    var _this;
    _classCallCheck(this, EditLessonMapCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.header = "Создание/редактирование ТКУ";
    _this.language = language;
    _this.data = {
      models: null,
      author: null,
      lessonType: null,
      lessonModel: null,
      subject: null,
      refs: _references["default"]
    };
    _this.state = {
      ready: false
    };
    _this.filterInfo = {
      filterPanel: null
    };
    _this.helper = new _planningHelper.PlanningHelper();
    _this.context = null;
    _this.form = null;
    _this.$scope = $scope;
    _this.appContext = appContext;
    _this.$http = $http;
    _this.$longWork = $longWork;
    _this.$uibModal = $uibModal;
    _this.$uibModalInstance = $uibModalInstance;
    _this.$alerts = $alerts;
    _this.$q = $q;
    _this.repository = lessonMapsRepository;
    _this.changeTracker = changeTracker;
    _this.lessonMapInfo = lessonMapInfo;
    _this.edit = edit;
    _this.load();
    return _this;
  }
  _createClass(EditLessonMapCtrl, [{
    key: "init",
    value: function init() {
      this.data.subject = _.chain(this.data.refs.lessonMapSubjects).findWhere({
        name: this.lessonMapInfo.subject
      }).value();
      this.data.author = {
        id: this.lessonMapInfo.umkAuthorId,
        name: this.lessonMapInfo.umkAuthor
      };
      this.data.lessonType = _.chain(this.data.refs.lessonTypes).findWhere({
        id: this.lessonMapInfo.type
      }).value();
      this.data.lessonModel = _.chain(this.data.models).findWhere({
        name: this.lessonMapInfo.model
      }).value();
    }
  }, {
    key: "getLessonMap",
    value: function getLessonMap() {
      var lessonId = null,
        sgId = null;
      if (this.filterInfo.filterPanel) {
        var filterValues = this.filterInfo.filterPanel.getValues();
        lessonId = filterValues["LESSONID"];
        sgId = filterValues["SGID"];
      }
      var lesson = {
        id: lessonId
      };
      var subjectGroup = {
        id: sgId
      };
      var lessonMap = {
        id: this.lessonMapInfo.id,
        lesson: lesson,
        subjectGroup: subjectGroup,
        umkAuthor: this.data.author,
        type: null,
        subject: null,
        model: this.data.lessonModel
      };
      if (this.data.lessonType) {
        lessonMap.type = {
          id: this.data.lessonType.id
        };
      }
      if (this.data.subject) {
        lessonMap.subject = this.data.subject.id;
      }
      return lessonMap;
    }
  }, {
    key: "getFilterPanel",
    value: function getFilterPanel() {
      var _this2 = this;
      var params = {
        lessonMapId: this.lessonMapInfo.id
      };
      return this.$http.get("/webapi/lessonmaps/filter", {
        params: params
      })["catch"](function (response) {
        _this2.data.error = response.data && response.data.message || "Ошибка загрузки фильтр-панели";
      }).then(function (response) {
        var data = response.data;
        var fpInfo = data.filterPanel;
        var fpSources = data.filterSources;
        var fltPanel = angular.element(".common-panel");

        // первичная инициализация полей реестра
        var fpUrl = "/webapi/lessonmaps/filter/init";
        var filterSize = {
          label: "control-label col-md-4 col-lg-4 col-sm-4",
          control: "col-md-8 col-lg-8 col-sm-8>"
        };

        // сбрасывает фильтр-панель
        fltPanel.empty();
        var fp = new _filters.filterPanel(fltPanel, fpInfo, fpSources, fpUrl, null, null, false, false, filterSize);
        _this2.filterInfo.filterPanel = fp;
        _this2.$scope.$emit("FilterPanelInitialized", fp);
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var promises = [];
      var loadLessonMapInfo = this.loadLessonMapInfo();
      promises.push(loadLessonMapInfo);
      var loadFilterPanel = this.getFilterPanel();
      promises.push(loadFilterPanel);
      var loadModels = this.repository.getLessonModels().then(function (models) {
        _this3.data.models = models;
      });
      promises.push(loadModels);
      var work = this.$q.all(promises).then(function () {
        return _this3.loadLessonMapSubjects();
      });
      return this.$longWork.execute(work).then(function () {
        _this3.init();
        _this3.fpEvents();

        // текущее состояние
        _this3.state.ready = true;

        // контекст для dataWereChanged
        _this3.context = _this3.helper.getModalContext();
      });
    }
  }, {
    key: "loadLessonMapSubjects",
    value: function loadLessonMapSubjects() {
      var _this4 = this;
      var iupClassId = this.filterInfo.filterPanel.getValues()["PCLID_IUP"];
      return this.repository.getLessonMapSubjects(iupClassId).then(function (subjects) {
        $.extend(_this4.data.refs, {
          lessonMapSubjects: subjects
        });
      });
    }
  }, {
    key: "fpEvents",
    value: function fpEvents() {
      var _this5 = this;
      this.filterInfo.filterPanel.ready(function () {
        _this5.changeTracker.dataWasChanged(_this5.context);
        _this5.loadLessonMapSubjects().then(function () {
          return _this5.$scope.$applyAsync();
        });
      });
      this.filterInfo.filterPanel.emptyChoice(function () {
        _this5.$scope.$applyAsync();
      });
    }
  }, {
    key: "loadUserContext",
    value: function loadUserContext() {
      var config = {
        headers: {
          "at": this.appContext.at
        }
      };
      return this.$http.get("/webapi/context", config).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "loadLessonMapInfo",
    value: function loadLessonMapInfo() {
      var _this6 = this;
      if (this.edit) {
        // редактируется элемент реестра
        return this.repository.getLessonMapShortInfo(this.lessonMapInfo.id).then(function (shortInfo) {
          _this6.fillLessonMapInfo(shortInfo);
        });
      } else {
        return this.loadUserContext().then(function (userCtx) {
          _this6.lessonMapInfo.umkAuthor = userCtx.user.name;
          _this6.lessonMapInfo.umkAuthorId = userCtx.user.id;
        });
      }
    }
  }, {
    key: "fillLessonMapInfo",
    value: function fillLessonMapInfo(shortInfo) {
      this.lessonMapInfo.umkAuthor = shortInfo.umkAuthor.name;
      this.lessonMapInfo.umkAuthorId = shortInfo.umkAuthor.id;
      this.lessonMapInfo.subject = shortInfo.subject;
      this.lessonMapInfo.type = shortInfo.type;
      this.lessonMapInfo.model = shortInfo.model;
    }
  }, {
    key: "mapLessonMap",
    value: function mapLessonMap(findedMap, getMap) {
      findedMap.lessonId = getMap.lessonId;
      findedMap.umkAuthor = getMap.umkAuthor;
      findedMap.subject = getMap.subject;
      findedMap.type = getMap.type;
      findedMap.model = getMap.model;
    }
  }, {
    key: "checkFoundMap",
    value: function checkFoundMap(foundMap, getMap) {
      return foundMap && foundMap.id != getMap.id;
    }
  }, {
    key: "createOrUpdate",
    value: function createOrUpdate() {
      var _this7 = this;
      var getMap = this.getLessonMap();
      var sgId = getMap.subjectGroup.id;
      var lessonId = getMap.lesson.id;

      // показать процессинг
      this.$longWork.show();
      return this.repository.findLessonMap(sgId, lessonId).then(function (foundMap) {
        if (_this7.checkFoundMap(foundMap, getMap)) {
          _this7.$longWork.close();
          _this7.mapLessonMap(foundMap, getMap);
          return _this7.$dialogs.confirm(_this7.language.Curriculum.kLessonMapRewriteWarn).then(function () {
            return _this7.$longWork.execute(_this7.repository.update(foundMap));
          });
        }
        if (_this7.edit) {
          return _this7.repository.update(getMap);
        }
        return _this7.repository.create(getMap);
      })["finally"](function () {
        if (_this7.$longWork.isShowing) {
          _this7.$longWork.close();
        }
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.form.$valid) {
        return false;
      }

      // из фильтр-панели, поэтому отдельная проверка
      if (!this.checkLesson()) {
        this.$dialogs.message(this.language.Generic.Lessonmap.kLessonThemeError);
        return false;
      }
      return true;
    }
  }, {
    key: "checkLesson",
    value: function checkLesson() {
      return this.filterInfo.filterPanel && this.filterInfo.filterPanel.getValues()["LESSONID"];
    }
  }, {
    key: "lessonMapAuthorError",
    value: function lessonMapAuthorError() {
      return this.language.Generic.Lessonmap.kLessonMapAuthorError;
    }
  }, {
    key: "lessonMapSubjectError",
    value: function lessonMapSubjectError() {
      return this.language.Generic.Lessonmap.kLessonMapSubjectError;
    }
  }, {
    key: "lessonMapTypeError",
    value: function lessonMapTypeError() {
      return this.language.Generic.Lessonmap.kLessonMapTypeError;
    }
  }, {
    key: "lessonMapModelError",
    value: function lessonMapModelError() {
      return this.language.Generic.Lessonmap.kLessonMapModelError;
    }
  }, {
    key: "save",
    value: function save() {
      var _this8 = this;
      if (!this.validate()) {
        return;
      }
      if (!this.changeTracker.isDataChanged(this.context)) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
        return;
      }
      this.createOrUpdate().then(function () {
        _this8.changeTracker.clearDataChanges(_this8.context);
        _this8.$alerts.success(_this8.language.Generic.Common.kDataSaved);
        _this8.$uibModalInstance.close();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this9 = this;
      if (!this.changeTracker.isDataChanged(this.context)) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
        return;
      }
      this.load().then(function () {
        // почистить dataWereChanged
        _this9.changeTracker.clearDataChanges(_this9.context);
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
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return EditLessonMapCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.EditLessonMapCtrl = EditLessonMapCtrl;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditSubjectSkillsComponent = void 0;
var _planningHelper = __webpack_require__(486);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Фильтрация
var FilterTree = /*#__PURE__*/function () {
  function FilterTree(filter) {
    _classCallCheck(this, FilterTree);
    this.filter = filter;
  }
  _createClass(FilterTree, [{
    key: "filterFunc",
    value: function filterFunc(value, filterValues) {
      var result = true;
      filterValues.forEach(function (filter) {
        return result = result && value.indexOf(filter) >= 0;
      });
      return result;
    }
  }, {
    key: "checkChildren",
    value: function checkChildren(value) {
      if (!value) {
        return false;
      }
      if (value.isFolder) {
        value.children = this.checkChildrens(value.children);
        return value.children.length > 0;
      }
      return this.filterFunc(value.title.toLowerCase(), this.filter.toLowerCase().split(' '));
    }
  }, {
    key: "checkChildrens",
    value: function checkChildrens(branch) {
      if (!this.filter) {
        return branch;
      }
      return branch.filter(this.checkChildren.bind(this));
    }
  }]);
  return FilterTree;
}();
var EditSubjectSkillsController = /*#__PURE__*/function () {
  EditSubjectSkillsController.$inject = ["$scope", "$timeout", "language", "changeTracker"];
  /* @ngInject */
  function EditSubjectSkillsController($scope, $timeout, language, changeTracker) {
    var _this = this;
    _classCallCheck(this, EditSubjectSkillsController);
    this.$timeout = $timeout;
    this.language = language;
    this.changeTracker = changeTracker;
    // используется при построении дерева
    this.rootKey = 0;
    this.helper = new _planningHelper.PlanningHelper();
    this.defaultSettings = {
      // todo: в данном режиме работает отображение чекбоксов для листьев дерева, в перечислении Modes такого режима не существует
      mode: 3,
      // кастомный обработчик для события включения элемента
      customOnSelectHandler: this.onSelect.bind(this)
    };
    $scope.$watch(function () {
      return _this.filter;
    }, this.updateSubjectSkillsTree.bind(this));
    // todo: костыль для сброса дерева
    $scope.$watch(function () {
      return _this.needreset;
    }, function () {
      if (_this.needreset) {
        // сбрасывает фильтр
        _this.filter = null;
        _this.$timeout(function () {
          try {
            _this.reloadTree();
          } finally {
            _this.needreset = false;
          }
        }, 100);
      }
    });
  }
  _createClass(EditSubjectSkillsController, [{
    key: "reloadTree",
    value: function reloadTree() {
      var tree = $("#tree");
      // сбрасывает все выбранные
      tree.dynatree("getRoot").visit(function (node) {
        return node.select(false);
      });
      // перезагружает дерево
      tree.dynatree(this.subjectSkillsTree.children);
      tree.dynatree("getTree").reload();
      // выбранные элементы синхронизируются с данными сервиса
      var selected = tree.dynatree("getSelectedNodes").map(function (x) {
        return x.data;
      });
      this.onUpdate({
        nodes: selected
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(selected) {
      if (this.needreset) {
        return;
      }
      // зафиксировать изменения
      var context = this.helper.getModalContext();
      this.changeTracker.dataWasChanged(context);
    }
  }, {
    key: "updateSubjectSkillsTree",
    value: function updateSubjectSkillsTree() {
      var filteredTreeNodes = this.filterInSubjectSkillsTree();
      // отображаемое дерево
      this.subjectSkillsTree = {
        children: filteredTreeNodes
      };
    }
  }, {
    key: "filterInSubjectSkillsTree",
    value: function filterInSubjectSkillsTree() {
      return new FilterTree(this.filter).checkChildrens(angular.copy(this.defaultSubjectSkillsTree.children));
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      // дерево Предметных умений
      this.subjectSkillsTree = this.getSubjectSkillsTree();
      // используется при поиске, чтобы каждый раз не перестраивать дерево
      this.defaultSubjectSkillsTree = angular.copy(this.subjectSkillsTree);
    }
    // возвращает дерево Предметных умений
  }, {
    key: "getSubjectSkillsTree",
    value: function getSubjectSkillsTree() {
      // сгруппированные по родителю Предметные умения
      var groupedSubjectSkills = this.getGroupedSubjectSkillsByParent();
      // корневые Предметные умения
      var rootSubjectSkills = groupedSubjectSkills[this.rootKey];
      // построение дерева Предметных умений
      this.buildSubjectSkillsTree(rootSubjectSkills, groupedSubjectSkills);
      // дерево
      return {
        children: rootSubjectSkills
      };
    }
  }, {
    key: "getShortTitle",
    value: function getShortTitle(skillName) {
      var MaxTitleLength = 115;
      if (skillName && skillName.length > MaxTitleLength) {
        return skillName.substring(0, MaxTitleLength - 3) + "...";
      }
      return skillName;
    }
    // строит дерево
  }, {
    key: "buildSubjectSkillsTree",
    value: function buildSubjectSkillsTree(rootSubjectSkills, groupedSubjectSkills) {
      var _this2 = this;
      var children = rootSubjectSkills;
      var level = 0;
      // текущие предметные умения
      var id = this.skillsData.selected;
      while (children && children.length) {
        // установить детей и текущий уровень в дереве
        children.forEach(function (s) {
          s.title = _this2.getShortTitle(s.name);
          s.tooltip = s.name;
          s.level = level;
          s.expand = true;
          s.key = "".concat(s.level, "-").concat(s.id);
          s.children = groupedSubjectSkills[s.id] || [];
          s.isFolder = s.children.length > 0;
          s.select = id.indexOf(s.id.toString()) >= 0;
        });
        // взять детей со следующего уровня
        children = _.flatten(children.map(function (s) {
          return s.children;
        }));
        // увеличить уровень
        level++;
      }
    }
  }, {
    key: "getGroupedSubjectSkillsByParent",
    value: function getGroupedSubjectSkillsByParent() {
      var _this3 = this;
      var skills = this.skillsData.skills || [];
      return _.groupBy(skills, function (s) {
        if (!s.parentId) {
          return _this3.rootKey;
        }
        return s.parentId;
      });
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(selected) {
      var service = this.service;
      service.setSubjectSkillsSelectedTreeItems(selected.nodes);
    }
  }]);
  return EditSubjectSkillsController;
}();
var EditSubjectSkillsComponent = {
  templateUrl: "/static/dist/app/school/planning/lessonmaps/directives/editSubjectSkillsTemplate.html",
  controller: EditSubjectSkillsController,
  selector: "subjectSkillsTree",
  bindings: {
    skillsData: "<",
    service: "<",
    needreset: "=?"
  }
};
exports.EditSubjectSkillsComponent = EditSubjectSkillsComponent;

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessonMapsRegistryComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LessonMapsRegistryController = /*#__PURE__*/function () {
  LessonMapsRegistryController.$inject = ["pageContext", "language", "appContext", "$location", "$uibModal"];
  /*@ngInject*/
  function LessonMapsRegistryController(pageContext, language, appContext, $location, $uibModal) {
    var _this = this;
    _classCallCheck(this, LessonMapsRegistryController);
    this.language = language;
    this.appContext = appContext;
    this.$location = $location;
    this.$uibModal = $uibModal;
    pageContext.title = "Дизайнер уроков";
    pageContext.parent = null;
    var addBtn = {
      title: this.language.Generic.Buttons.kAdd,
      icon: "glyphicon glyphicon-plus-sign",
      action: function action() {
        _this.add();
      }
    };
    var editBtn = {
      title: this.language.Generic.Buttons.kEdit,
      icon: "glyphicon glyphicon-pencil",
      selectionMode: "Single",
      action: function action() {
        _this.edit();
      }
    };
    var viewBtn = {
      title: this.language.Generic.Buttons.kView,
      icon: "glyphicon glyphicon-plus-sign",
      selectionMode: "Single",
      action: function action() {
        _this.view();
      }
    };
    var buttons = [];
    var readOnly = this.appContext.readOnly || !this.appContext.hasAnyRight([Rights.arCurrMgmCreateAll, Rights.arCurrMgmCreate]);
    if (!readOnly) {
      buttons.push(addBtn);
      buttons.push(editBtn);
    }
    buttons.push(viewBtn);
    this.registryInfo = {
      url: "/webapi/lessonmaps/registry",
      filtersUrl: "/webapi/lessonmaps/registry/filter",
      buttons: buttons
    };
  }
  _createClass(LessonMapsRegistryController, [{
    key: "add",
    value: function add() {
      var _this2 = this;
      this.showLessonMapEditor({
        lessonMapInfo: function lessonMapInfo() {
          return _this2.getLessonMapInfo();
        },
        edit: function edit() {
          return false;
        }
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this3 = this;
      // выбранная ТКУ
      var chosen = this.controller.selection.selected[0];
      this.showLessonMapEditor({
        lessonMapInfo: function lessonMapInfo() {
          return _this3.getLessonMapInfo(chosen);
        },
        edit: function edit() {
          return true;
        }
      });
    }
  }, {
    key: "view",
    value: function view() {
      // выбранная ТКУ
      var chosen = this.controller.selection.selected[0];
      this.$location.path("/lessonmaps/view/".concat(chosen.id));
    }
  }, {
    key: "showLessonMapEditor",
    value: function showLessonMapEditor(resolve) {
      var _this4 = this;
      var modalInstance = this.$uibModal.open({
        templateUrl: "/static/dist/app/school/planning/lessonmaps/edit/commonInfo.html",
        controller: "EditLessonMapCtrl as ctrl",
        resolve: resolve,
        windowClass: "modal-ctx"
      });
      modalInstance.result.then(function () {
        _this4.controller.load();
      });
    }
  }, {
    key: "getLessonMapInfo",
    value: function getLessonMapInfo(chosen) {
      var lessonMapInfo = {
        id: null
      };
      if (chosen) {
        lessonMapInfo.id = chosen.id;
      }
      return lessonMapInfo;
    }
  }]);
  return LessonMapsRegistryController;
}();
var LessonMapsRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: LessonMapsRegistryController,
  controllerAs: "$ctrl"
};
exports.LessonMapsRegistryComponent = LessonMapsRegistryComponent;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariantAssignmentComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VariantAssignmentController = /*#__PURE__*/function () {
  VariantAssignmentController.$inject = ["pageContext", "appContext", "$appLoader", "$location", "$alerts", "$longWork", "changeTracker", "subjectGroupRepository", "subjectplansRepository", "language"];
  /*@ngInject*/
  function VariantAssignmentController(pageContext, appContext, $appLoader, $location, $alerts, $longWork, changeTracker, subjectGroupRepository, subjectplansRepository, language) {
    _classCallCheck(this, VariantAssignmentController);
    this.pageContext = pageContext;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.subjectGroupRepository = subjectGroupRepository;
    this.subjectplansRepository = subjectplansRepository;
    this.language = language;
    this.readOnly = this.appContext.readOnly;
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity === "true" || inputParams.extraActivity === true;
    var extraActivityParam = this.extraActivity ? "?extraActivity=true" : "";
    this.pageContext.parent = {
      title: this.language.Curriculum.kTitlePlanner,
      href: "/subjectplans/".concat(extraActivityParam)
    };
    this.pageContext.title = this.language.Curriculum.kTitleVariantsCSGs;
    var backUrl = null;
    if (inputParams.backUrl == "journal_assignments") {
      backUrl = "/angular/school/journal/assignments/";
    }
    this.pageContext.back = backUrl ? {
      history: false,
      href: backUrl,
      postTo: true
    } : {
      history: true
    };
    this.init();
  }
  _createClass(VariantAssignmentController, [{
    key: "save",
    value: function save() {
      var _this = this;
      var processing = this.$longWork.show();
      var saveData = this.subjectGroupRow.map(function (vo) {
        return {
          subjectGroupId: vo.sg.id,
          subjectPlanId: vo.subjectPlanId > 0 ? vo.subjectPlanId : null
        };
      });
      this.subjectplansRepository.setVariantAssignments(saveData).then(function () {
        processing.close();
        _this.changeTracker.clearDataChanges();
        _this.$alerts.success(_this.language.Curriculum.kUsingVariantsInJournalWasSaved);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.filterPanelSettings = {
        url: "/webapi/subjectplans/filter?allOptions=false&variants=false&edit=true&extraActivity=".concat(this.extraActivity),
        initUrl: "/webapi/subjectplans/filter/init?allOptions=false&variants=false&edit=true&extraActivity=".concat(this.extraActivity),
        events: {
          ready: function ready() {
            _this2.load();
          },
          emptyChoice: function emptyChoice() {
            _this2.$appLoader.hide();
          }
        }
      };
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var processing = this.$longWork.show();
      var fpValues = this.filterPanel.getValues();
      var grade = fpValues.GRADEID;
      var subjectId = fpValues.SBJID;
      var teacherId;
      if (!this.appContext.hasRights([Rights.arCurrMgmCreateAll])) {
        teacherId = this.appContext.userId;
      }
      var sgFilter = {
        subjectId: subjectId,
        grade: grade,
        teacherId: teacherId,
        extraCurricular: this.extraActivity
      };
      if (!grade || grade <= 0) {
        sgFilter.grade = null;
      }
      var loadSubjectGroups = this.subjectGroupRepository.getSubjectgroups(sgFilter, false);
      var prepareVariantAssignments = loadSubjectGroups.then(function (subjectGroups) {
        _this3.subjectGroups = subjectGroups;
        var sgIds = subjectGroups.map(function (sg) {
          return sg.id;
        });
        if (!sgIds.length) {
          return Promise.resolve([]);
        }
        return _this3.subjectplansRepository.getVariantAssignments(sgIds);
      }).then(function (variantAssignments) {
        _this3.subjectGroupSubjectPlan = variantAssignments;
        _this3.subjectGroupRow = _this3.subjectGroups.map(function (sg) {
          var sgInfo = {
            id: sg.id
          };
          var csg = sg;
          if (csg && csg["class"]) {
            sgInfo.name = csg["class"].name;
            if (sg.group && sg.group.name) {
              sgInfo.name += "/".concat(sg.group.name);
            }
          } else {
            sgInfo.name = sg.name;
          }
          var assignInfo = variantAssignments.find(function (a) {
            return a.subjectGroupId == sg.id;
          });
          var ret = {
            sg: sgInfo,
            hours: assignInfo && assignInfo.lessonsUsed,
            subjectPlanId: assignInfo && assignInfo.subjectPlanId || 0,
            lessonMapsExists: assignInfo && assignInfo.lessonMapsExists || false
          };
          return ret;
        });
      });
      var loadPlans = this.subjectplansRepository.getVariants(grade, subjectId).then(function (variants) {
        return _this3.subjectPlans = variants;
      });
      Promise.all([loadSubjectGroups, loadPlans, prepareVariantAssignments]).then(function () {
        processing.close();
        _this3.$appLoader.hide();
      });
    }
  }]);
  return VariantAssignmentController;
}();
var VariantAssignmentComponent = {
  controller: VariantAssignmentController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/variantAssignment/variantAssignment.component.html"
};
exports.VariantAssignmentComponent = VariantAssignmentComponent;

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectPlanVariantsComponent = void 0;
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _common = __webpack_require__(25);
var _editVariant = __webpack_require__(493);
var _multiSelectable = _interopRequireDefault(__webpack_require__(38));
var Rights = _interopRequireWildcard(__webpack_require__(10));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SubjectPlanVariantsController = /*#__PURE__*/function () {
  SubjectPlanVariantsController.$inject = ["pageContext", "$appLoader", "$location", "$uibModal", "$longWork", "$dialogs", "$alerts", "appContext", "usersRepository", "subjectplansRepository", "changeTracker", "taskQueueService", "language"];
  /*@ngInject*/
  function SubjectPlanVariantsController(pageContext, $appLoader, $location, $uibModal, $longWork, $dialogs, $alerts, appContext, usersRepository, subjectplansRepository, changeTracker, taskQueueService, language) {
    _classCallCheck(this, SubjectPlanVariantsController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.$location = $location;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.usersRepository = usersRepository;
    this.subjectplansRepository = subjectplansRepository;
    this.changeTracker = changeTracker;
    this.taskQueueService = taskQueueService;
    this.language = language;
    this.selection = new _multiSelectable["default"]();
    this.readOnly = this.appContext.readOnly;
    this.isAdminOrPrincipal = this.appContext.hasRole(Roles.admin) || this.appContext.hasRole(Roles.principal);
    this.hasRightsEditAllVariants = this.appContext.hasRights([Rights.arCurrMgmCreateAll]);
    var inputParams = $location.search();
    this.extraActivity = inputParams.extraActivity === true;
    this.pageContext.parent = {
      title: this.language.Curriculum.kTitlePlanner,
      href: "/subjectplans/?extraActivity=".concat(this.extraActivity)
    };
    this.pageContext.title = language.Curriculum.kTitlePlannerVar;
    this.pageContext.back = {
      history: true
    };
    this.init();
  }
  _createClass(SubjectPlanVariantsController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.filterPanelSettings = {
        url: "/webapi/subjectplans/filter?allOptions=false&variants=false&edit=true&extraActivity=".concat(this.extraActivity),
        initUrl: "/webapi/subjectplans/filter/init?allOptions=false&variants=false&edit=true&extraActivity=".concat(this.extraActivity),
        events: {
          ready: function ready() {
            _this.load();
          },
          emptyChoice: function emptyChoice() {
            _this.$appLoader.hide();
          }
        }
      };
    }
  }, {
    key: "showVariantsAssignment",
    value: function showVariantsAssignment() {
      return this.subjectPlans && this.subjectPlans.length && this.appContext.funcType != _common.FuncType.preSchool;
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var processing = this.$longWork.show();
      var fpValues = this.filterPanel.getValues();
      var grade = fpValues.GRADEID;
      var subjectId = fpValues.SBJID;
      var unUssignedTeacher = {
        id: -1,
        name: "Не назначен",
        subjects: []
      };
      var loadTeachers = this.usersRepository.getTeacherList().then(function (teachers) {
        teachers.unshift(unUssignedTeacher);
        _this2.teachers = teachers;
      });
      var loadPlans = this.subjectplansRepository.getVariants(grade, subjectId).then(function (variants) {
        variants.forEach(function (v) {
          return v.author = v.author || unUssignedTeacher;
        });
        _this2.subjectPlans = variants;
      });
      return Promise.all([loadPlans, loadTeachers]).then(function () {
        processing.close();
        _this2.selection.dropSelect();
        _this2.changeTracker.clearDataChanges();
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "variantsAssignment",
    value: function variantsAssignment() {
      this.$location.path("/subjectplans/variants/assignment");
    }
  }, {
    key: "canEdit",
    value: function canEdit(subjectPlan) {
      if (this.readOnly) {
        return false;
      }
      if (this.isAdminOrPrincipal) {
        return true;
      }
      if (this.hasRightsEditAllVariants) {
        return true;
      }
      if (!subjectPlan.author || !subjectPlan.author.id || subjectPlan.author.id <= 0) {
        return false;
      }
      return subjectPlan.author.id == this.appContext.userId;
    }
  }, {
    key: "canEditAuthors",
    value: function canEditAuthors() {
      return this.isAdminOrPrincipal;
    }
  }, {
    key: "add",
    value: function add() {
      var _this3 = this;
      var fpValues = this.filterPanel.getValues();
      var _grade = fpValues.GRADEID;
      var _subjectId = fpValues.SBJID;
      if (!_subjectId) {
        this.$dialogs.error("Добавление вариантов невозможно. " + this.language.Generic.Curriculum.kNoSubjectsInYear_All);
        return;
      }
      var modalInstance = this.$uibModal.open({
        controller: _editVariant.EditVariantComponent.controller,
        controllerAs: _editVariant.EditVariantComponent.controllerAs,
        templateUrl: _editVariant.EditVariantComponent.templateUrl,
        resolve: {
          grade: function grade() {
            return _grade;
          },
          subjectId: function subjectId() {
            return _subjectId;
          },
          variants: function variants() {
            return _this3.subjectPlans;
          },
          teachers: function teachers() {
            return _this3.teachers;
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.load();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load();
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this4 = this;
      if (!this.selection.items.length) {
        this.$dialogs.message(this.language.Generic.Common.kErrMsgNoChecks);
        return;
      }
      var ids = this.selection.items.map(function (v) {
        return v.id;
      });
      this.$dialogs.confirmDelete(this.language.Generic.Common.kMsgAreYouSure).then(function () {
        var execOptions = {
          getTaskFunc: function getTaskFunc() {
            return _this4.subjectplansRepository.deleteVariants(ids);
          },
          hint: _this4.language.Generic.Common.kProcessingInfoLetter
        };
        return _this4.taskQueueService.execute(execOptions).then(function () {
          _this4.$alerts.success("Варианты успешно удалены");
          return _this4.load();
        });
      });
    }
  }, {
    key: "checkDuplcateName",
    value: function checkDuplcateName(subjectPlans) {
      var spWithDuplicateName = subjectPlans.filter(function (x) {
        return subjectPlans.filter(function (y) {
          return y.name.toLowerCase() === x.name.toLowerCase();
        }).length > 1;
      });
      spWithDuplicateName.forEach(function (x) {
        return x.isInvalid = true;
      });
      return spWithDuplicateName.length != 0;
    }
  }, {
    key: "checkEmptyName",
    value: function checkEmptyName(subjectPlans) {
      var spWithEmptyName = subjectPlans.filter(function (x) {
        return !x.name;
      });
      spWithEmptyName.forEach(function (x) {
        return x.isInvalid = true;
      });
      return spWithEmptyName.length != 0;
    }
  }, {
    key: "save",
    value: function save() {
      var _this5 = this;
      this.subjectPlans.forEach(function (x) {
        return x.isInvalid = false;
      });
      var contantsEmptyName = this.checkEmptyName(this.subjectPlans);
      var containsDuplicateName = this.checkDuplcateName(this.subjectPlans);
      if (contantsEmptyName && containsDuplicateName) {
        this.$dialogs.error("".concat(this.language.Generic.Curriculum.kErrEmptyVariantName, "\n").concat(this.language.Generic.Curriculum.kErrVariantNameRepeat));
        return;
      }
      if (contantsEmptyName) {
        this.$dialogs.error(this.language.Generic.Curriculum.kErrEmptyVariantName);
        return;
      }
      if (containsDuplicateName) {
        this.$dialogs.error(this.language.Generic.Curriculum.kErrVariantNameRepeat);
        return;
      }
      var fpValues = this.filterPanel.getValues();
      var grade = fpValues.GRADEID;
      var subjectId = fpValues.SBJID;
      var saveData = this.subjectPlans.filter(function (sp) {
        return _this5.canEdit(sp);
      }).map(function (sp) {
        var _a;
        return {
          planId: sp.id,
          name: sp.name,
          authorId: ((_a = sp.author) === null || _a === void 0 ? void 0 : _a.id) || null
        };
      });
      if (saveData.length == 0) {
        return;
      }
      var processing = this.$longWork.show();
      this.subjectplansRepository.editVariants(grade, subjectId, saveData).then(function () {
        _this5.changeTracker.clearDataChanges();
        processing.close();
        _this5.$alerts.success(_this5.language.Generic.Curriculum.kVariantsWereChanged);
      });
    }
  }]);
  return SubjectPlanVariantsController;
}();
var SubjectPlanVariantsComponent = {
  controller: SubjectPlanVariantsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/variants/variants.component.html"
};
exports.SubjectPlanVariantsComponent = SubjectPlanVariantsComponent;

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditVariantComponent = void 0;
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _netcityModalCtrl = __webpack_require__(40);
var _nsModal = __webpack_require__(41);
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
var EditVariantController = /*#__PURE__*/function (_NetCityModalControll) {
  EditVariantController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "appContext", "$alerts", "$longWork", "language", "grade", "subjectId", "variants", "teachers", "subjectplansRepository"];
  _inherits(EditVariantController, _NetCityModalControll);
  var _super = _createSuper(EditVariantController);
  /*@ngInject*/
  function EditVariantController($scope, $uibModalInstance, changeTracker, $dialogs, appContext, $alerts, $longWork, language, grade, subjectId, variants, teachers, subjectplansRepository) {
    var _this;
    _classCallCheck(this, EditVariantController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.language = language;
    _this.grade = grade;
    _this.subjectId = subjectId;
    _this.variants = variants;
    _this.teachers = teachers;
    _this.subjectplansRepository = subjectplansRepository;
    $uibModalInstance.rendered.then(function () {
      return _this.$onModalRendered();
    });
    if (!_this.canEditAuthor()) {
      _this.author = teachers.find(function (t) {
        return t.id == _this.appContext.userId;
      });
    }
    _this.header = language.Curriculum.kAddVariantPlanLesson;
    _this.buttons = [{
      action: function action() {
        return _this.save();
      },
      icon: "glyphicon glyphicon-floppy-save",
      "class": _nsModal.ButtonClass.primary,
      title: _this.language.Generic.Buttons.kSave
    }, {
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle",
      "class": _nsModal.ButtonClass["default"],
      title: _this.language.Generic.Buttons.kCancel
    }];
    return _this;
  }
  _createClass(EditVariantController, [{
    key: "$onModalRendered",
    value: function $onModalRendered() {
      var _this2 = this;
      var nameInput = this.form.Name;
      nameInput.$validators["unique"] = function (modelValue) {
        return _this2.variants.findIndex(function (v) {
          return v.name.toLowerCase() == modelValue.toLowerCase();
        }) == -1;
      };
    }
  }, {
    key: "canEditAuthor",
    value: function canEditAuthor() {
      return this.appContext.hasRole(Roles.admin) || this.appContext.hasRole(Roles.principal);
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      var _a;
      this.form.Name.$touched = true;
      if (this.form.$invalid) {
        return;
      }
      var request = {
        grade: this.grade,
        subjectId: this.subjectId,
        name: this.name,
        authorId: (_a = this.author) === null || _a === void 0 ? void 0 : _a.id
      };
      var procesing = this.$longWork.show();
      this.subjectplansRepository.createVariant(request).then(function (ret) {
        procesing.close();
        _this3.$alerts.success(_this3.language.Generic.Curriculum.kVariantWasAdded);
        _this3.$uibModalInstance.close(ret);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return EditVariantController;
}(_netcityModalCtrl.NetCityModalController);
var EditVariantComponent = {
  controller: EditVariantController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/variants/editVariant.component.html"
};
exports.EditVariantComponent = EditVariantComponent;

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUnitComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditUnitController = /*#__PURE__*/function () {
  EditUnitController.$inject = ["pageContext", "$appLoader", "$longWork", "$q", "$alerts", "unitsRepository", "changeTracker", "language", "$routeParams", "$location"];
  /*@ngInject*/
  function EditUnitController(pageContext, $appLoader, $longWork, $q, $alerts, unitsRepository, changeTracker, language, $routeParams, $location) {
    _classCallCheck(this, EditUnitController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$q = $q;
    this.$alerts = $alerts;
    this.unitsRepository = unitsRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$location = $location;
    this.state = {
      readOnly: true,
      createMode: false,
      editMode: false,
      dataReady: false
    };
    this.state.readOnly = $routeParams.readOnly === true;
    if ($routeParams.unitId === "new") {
      this.unitId = 0;
      this.state.createMode = true;
      if (this.state.readOnly) {
        this.$alerts.error("Невозможно создать новый раздел");
        this.$location.path("/subjectplans/");
      }
    } else {
      this.unitId = parseInt($routeParams.unitId);
      this.state.editMode = true;
    }
    this.planId = parseInt($routeParams.planId);
    this.extraActivity = $routeParams.extraActivity === true;
    pageContext.title = this.state.readOnly ? this.language.Generic.Curriculum.kTitleUnitView : this.state.createMode ? this.language.Generic.Curriculum.kTitleUnit : this.language.Generic.Curriculum.kTitleEditUnit;
    pageContext.parent = {
      title: this.language.MenuFolders.kLessonPlans,
      href: "/subjectplans/?extraActivity=".concat(this.extraActivity)
    };
    pageContext.back = {
      history: true
    };
    this.load();
  }
  _createClass(EditUnitController, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.state.dataReady = false;
      var loads = [];
      if (this.state.editMode) {
        // если this.state.readOnly, то получается как бы this.state.viewMode
        var loadUnit = this.unitsRepository.getUnit(this.unitId).then(function (unit) {
          _this.unit = unit;
        });
        loads.push(loadUnit);
      }
      if (!this.state.readOnly) {
        var loadLastNumber = this.unitsRepository.getUnitsLastNumber(this.planId).then(function (lastNamber) {
          _this.unitsLastNumber = lastNamber;
          if (_this.state.createMode) {
            _this.unitsLastNumber++;
          }
          _this.unitNumbers = [];
          for (var i = 1; i <= _this.unitsLastNumber; i++) {
            _this.unitNumbers.push(i);
          }
        });
        loads.push(loadLastNumber);
      }
      return this.$longWork.execute(this.$q.all(loads).then(function () {
        if (_this.state.createMode) {
          _this.unit = {
            id: 0,
            planId: _this.planId,
            name: "",
            description: "",
            unitNumber: _this.unitsLastNumber
          };
        }
        _this.state.dataReady = true;
        _this.changeTracker.clearDataChanges();
        _this.$appLoader.hide();
      }));
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.form.$invalid) {
        return;
      }
      if (this.state.readOnly) {
        return;
      }
      if (this.changeTracker.isDataChanged()) {
        var saveFunc = this.state.createMode ? this.unitsRepository.createUnit(this.unit) : this.unitsRepository.editUnit(this.unit);
        this.$longWork.execute(saveFunc).then(function () {
          _this2.state.dataReady = false;
          _this2.$appLoader.hide();
          _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
          var params = {};
          if (_this2.state.createMode) {
            params = $.extend(params, {
              "elemType": "plan",
              "EXPANDELEM": "Y"
            });
          } else {
            params = $.extend(params, {
              "elemType": "unit",
              "PRESERVETREE": "Y"
            });
          }
          if (_this2.extraActivity) {
            params = $.extend(params, {
              "extraActivity": "true"
            });
          }
          _this2.$location.path("/subjectplans/").search(params);
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
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
  return EditUnitController;
}();
var EditUnitComponent = {
  controller: EditUnitController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/planner/units/editUnit.component.html"
};
exports.EditUnitComponent = EditUnitComponent;

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyUnitComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CopyUnitController = /*#__PURE__*/function () {
  CopyUnitController.$inject = ["pageContext", "$appLoader", "$longWork", "$q", "$alerts", "unitsRepository", "changeTracker", "language", "$routeParams", "$location", "$dialogs", "$sce"];
  /*@ngInject*/
  function CopyUnitController(pageContext, $appLoader, $longWork, $q, $alerts, unitsRepository, changeTracker, language, $routeParams, $location, $dialogs, $sce) {
    _classCallCheck(this, CopyUnitController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$q = $q;
    this.$alerts = $alerts;
    this.unitsRepository = unitsRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$location = $location;
    this.$dialogs = $dialogs;
    this.$sce = $sce;
    this.state = {
      dataReady: false
    };
    this.baseUnitName = $routeParams.unitName;
    this.subjectId = parseInt($routeParams.subjectId);
    this.extraActivity = $routeParams.extraActivity === true;
    //pageContext.title = this.language.Generic.Curriculum.kTitleCopyUnit;
    //pageContext.title = `${this.language.Generic.Curriculum.kTitleCopyUnit} ${this.baseUnitName} ${this.language.Generic.Curriculum.kTo}`;
    //pageContext.title = `${this.language.Generic.Buttons.kCopy} <span style='color:green'>${this.baseUnitName}</span> ${this.language.Generic.Curriculum.kTo}`;
    //pageContext.title = `${this.language.Generic.Buttons.kCopy} "${this.baseUnitName}" ${this.language.Generic.Curriculum.kTo}`;
    pageContext.title = this.$sce.trustAsHtml(this.language.Generic.Buttons.kCopy + " " + this.greenText(this.baseUnitName) + " " + this.language.Generic.Curriculum.kTo);
    pageContext.parent = {
      title: this.language.MenuFolders.kLessonPlans,
      href: "/subjectplans/?extraActivity=".concat(this.extraActivity)
    };
    pageContext.back = {
      history: true
    };
    this.unit = {
      id: parseInt($routeParams.unitId),
      planId: parseInt($routeParams.planId),
      name: "",
      description: "",
      unitNumber: 0
    };
    this.load();
  }
  _createClass(CopyUnitController, [{
    key: "greenText",
    value: function greenText(text) {
      return "<span style='color:green'>" + text + "</span>";
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      this.state.dataReady = false;
      var loadSubjectPlans = this.unitsRepository.getSubjectPlans(this.subjectId).then(function (plans) {
        _this.subjectPlans = plans;
      });
      return this.$longWork.execute(this.$q.all([loadSubjectPlans]).then(function () {
        if (_this.subjectPlans && _this.subjectPlans.length > 0) {
          _this.subjectPlan = _this.subjectPlans.find(function (x) {
            return x.id == _this.unit.planId;
          });
          if (_this.subjectPlan == undefined) {
            _this.subjectPlan = _this.subjectPlans[0];
          }
          _this.changePlan();
        }
        _this.state.dataReady = true;
        _this.changeTracker.clearDataChanges();
        _this.$appLoader.hide();
      }));
    }
  }, {
    key: "changePlan",
    value: function changePlan() {
      this.unitNumbers = [];
      for (var i = 1; i <= this.subjectPlan.maxUnitNumber + 1; i++) {
        this.unitNumbers.push(i);
      }
      this.unit.unitNumber = this.subjectPlan.maxUnitNumber + 1;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.form.$invalid) {
        return;
      }
      var confirm = Promise.resolve();
      if (this.unit.unitNumber != this.subjectPlan.maxUnitNumber + 1) {
        confirm = this.$dialogs.confirm(this.language.Generic.Curriculum.kMsgChangeNUnitInPlan);
      }
      this.$q.when(confirm).then(function () {
        _this2.$longWork.execute(_this2.unitsRepository.copyUnit(_this2.subjectPlan.id, _this2.unit)).then(function () {
          _this2.state.dataReady = false;
          _this2.$appLoader.hide();
          _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
          var params = {
            "elemType": "un"
          };
          if (_this2.extraActivity) {
            params = $.extend(params, {
              "extraActivity": "true"
            });
          }
          _this2.$location.path("/subjectplans/").search(params);
        });
      });
    }
  }]);
  return CopyUnitController;
}();
var CopyUnitComponent = {
  controller: CopyUnitController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/planner/units/copyUnit.component.html"
};
exports.CopyUnitComponent = CopyUnitComponent;

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLessonComponent = void 0;
var _subjectplans = __webpack_require__(482);
var _common = __webpack_require__(25);
var _treeHelper = __webpack_require__(497);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditLessonController = /*#__PURE__*/function () {
  EditLessonController.$inject = ["pageContext", "$appLoader", "$longWork", "$q", "$alerts", "unitsRepository", "lessonsRepository", "qaReferencesRepository", "settingsProvider", "appContext", "$scope", "changeTracker", "language", "$routeParams", "$location", "$dialogs"];
  /*@ngInject*/
  function EditLessonController(pageContext, $appLoader, $longWork, $q, $alerts, unitsRepository, lessonsRepository, qaReferencesRepository, settingsProvider, appContext, $scope, changeTracker, language, $routeParams, $location, $dialogs) {
    var _this = this;
    _classCallCheck(this, EditLessonController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$q = $q;
    this.$alerts = $alerts;
    this.unitsRepository = unitsRepository;
    this.lessonsRepository = lessonsRepository;
    this.qaReferencesRepository = qaReferencesRepository;
    this.settingsProvider = settingsProvider;
    this.appContext = appContext;
    this.$scope = $scope;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$location = $location;
    this.$dialogs = $dialogs;
    this.state = {
      readOnly: true,
      createMode: false,
      editMode: false,
      dataReady: false,
      moduleQA: undefined,
      isDefaultLangRus: undefined,
      enableLessonMaps: undefined
    };
    this.treeSettings = {
      mode: 1 | 2,
      selected: {
        nodes: []
      }
    };
    this.treeHelper = new _treeHelper.TreeHelper();
    this.state.readOnly = $routeParams.readOnly === true;
    //this.state.readOnly = true;
    if ($routeParams.lessonId === "new") {
      this.lessonId = 0;
      this.state.createMode = true;
      if (this.state.readOnly) {
        this.$alerts.error("Невозможно создать новый урок");
        this.$location.path("/subjectplans/");
      }
    } else {
      this.lessonId = parseInt($routeParams.lessonId);
      this.state.editMode = true;
    }
    this.planId = parseInt($routeParams.planId);
    this.unitId = parseInt($routeParams.unitId);
    this.gradeId = parseInt($routeParams.gradeId);
    this.subjectId = parseInt($routeParams.subjectId);
    this.extraActivity = $routeParams.extraActivity === true;
    pageContext.title = this.state.readOnly ? this.language.Generic.Curriculum.kTitleLessonView : this.state.createMode ? this.language.Curriculum.kTitleCreateLessonForUnit : this.language.Curriculum.kTitleEditLesson;
    pageContext.parent = {
      title: this.language.MenuFolders.kLessonPlans,
      href: "/subjectplans/?extraActivity=".concat(this.extraActivity)
    };
    pageContext.back = {
      history: true
    };
    this.getSettings().then(function () {
      _this.load();
    });
  }
  _createClass(EditLessonController, [{
    key: "checkModuleQa",
    value: function checkModuleQa() {
      var _this2 = this;
      if (this.appContext.funcType == _common.FuncType.school && !this.extraActivity) {
        return Promise.resolve(this.settingsProvider.ServerSettings.SystemSettings.ModuleQA().then(function (moduleQA) {
          _this2.state.moduleQA = moduleQA;
        }));
      } else {
        this.state.moduleQA = false;
        return Promise.resolve();
      }
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      var _this3 = this;
      var checkDefaultLang = this.settingsProvider.LocalSettings.IsDefaultLangRus().then(function (res) {
        _this3.state.isDefaultLangRus = res;
      });
      var checkLessonMaps = this.settingsProvider.ServerSettings.SystemSettings.EnableLessonMaps().then(function (res) {
        _this3.state.enableLessonMaps = res;
        //this.state.enableLessonMaps = false;
      });

      var loads = [checkDefaultLang, checkLessonMaps, this.checkModuleQa()];
      return this.$q.all(loads);
    }
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      this.state.dataReady = false;
      var loads = [];
      if (this.state.editMode) {
        // если this.state.readOnly, то получается как бы this.state.viewMode
        var expandParams = [_subjectplans.LessonExpandData.Attachments];
        if (this.state.moduleQA) {
          expandParams.push(_subjectplans.LessonExpandData.ContentElements);
        }
        var loadLesson = this.lessonsRepository.getLesson(this.lessonId, expandParams).then(function (lesson) {
          _this4.lesson = lesson;
          if (_this4.lesson.contentElements && _this4.lesson.contentElements.length) {
            _this4.lesson.contentElements.forEach(function (x) {
              return x.name = "".concat(x.number, ". ").concat(x.name);
            });
            _this4.lesson.contentElements.sort(function (a, b) {
              return _this4.contentElementsComparator(a, b);
            });
          }
          _this4.oldLessonNum = lesson.lessonNum;
        });
        loads.push(loadLesson);
      }
      if (!this.state.readOnly) {
        var loadUnits = this.unitsRepository.getUnits(this.planId).then(function (units) {
          units.forEach(function (x) {
            x.name = "".concat(x.unitNumber, ". ").concat(x.name);
            x.maxLessonNumber = x.maxLessonNumber == null || x.maxLessonNumber == undefined ? 0 : x.maxLessonNumber;
          });
          _this4.units = units;
        });
        loads.push(loadUnits);
        if (this.state.moduleQA) {
          var loadContentElements = this.qaReferencesRepository.getContentElements({
            subjectId: this.subjectId,
            grade: this.gradeId
          }).then(function (elements) {
            _this4.contentElements = elements;
          });
          loads.push(loadContentElements);
        }
      }
      return this.$longWork.execute(this.$q.all(loads).then(function () {
        if (_this4.state.createMode) {
          _this4.lesson = {
            id: 0,
            hours: 1,
            lessonName: "",
            displayName: "",
            homeAssign: "",
            lessonNum: 0,
            unitNum: 0,
            attachmentIds: [],
            plan: {
              id: _this4.planId
            },
            unit: null,
            description: "",
            bookref: "",
            details: "",
            detailInfComponent: "",
            totalLearningAndSubjectSkills: "",
            valuablyFocusedComponent: "",
            teachConditionAndImplementer: "",
            attachments: [],
            contentElements: []
          };
        }
        if (!_this4.state.readOnly && _this4.units && _this4.units.length > 0) {
          _this4.unit = _this4.units.find(function (x) {
            return x.id == _this4.unitId;
          });
          if (_this4.unit == undefined) {
            _this4.unit = _this4.units[0];
          }
          _this4.changeUnit();
        }
        _this4.initFileAttachments();
        if (_this4.displayContentElements && _this4.state.editMode) {
          _this4.prepareContentElements();
        }
        _this4.state.dataReady = true;
        _this4.changeTracker.clearDataChanges();
        _this4.$appLoader.hide();
      }));
    }
  }, {
    key: "initFileAttachments",
    value: function initFileAttachments() {
      var _a;
      var files = ((_a = this.lesson) === null || _a === void 0 ? void 0 : _a.attachments) || [];
      this.fa = {
        options: {
          multiple: true,
          showDescription: true,
          readonly: this.state.readOnly,
          sizeLimit: function sizeLimit(uploadLimits) {
            return uploadLimits.plannerDocFileNoteSizeLimit;
          }
        },
        data: {
          files: files,
          context: {
            lessonId: this.lessonId
          }
        }
      };
    }
  }, {
    key: "prepareContentElements",
    value: function prepareContentElements() {
      if (this.lesson.contentElements && this.lesson.contentElements.length) {
        var selected = this.lesson.contentElements.map(function (c) {
          return c.id;
        });
        var setSelection = function setSelection(item) {
          item.select = selected.indexOf(item.id) > -1;
        };
        new _treeHelper.TreeVisitor(this.contentElements).execute(setSelection);
      }
    }
  }, {
    key: "onChangeContentElements",
    value: function onChangeContentElements(selected) {
      var _this5 = this;
      if (!this.treeHelper.isTreeChanged(selected, this.lesson.contentElements)) {
        return;
      }
      var contentElements = selected.nodes.map(function (n) {
        return {
          id: n.id,
          number: null,
          name: n.title
        };
      });
      contentElements.sort(function (a, b) {
        return _this5.contentElementsComparator(a, b);
      });
      this.lesson.contentElements = contentElements;
      this.changeTracker.dataWasChanged();
      this.$scope.$applyAsync();
    }
  }, {
    key: "contentElementsComparator",
    value: function contentElementsComparator(a, b) {
      var arrA = a.name.split('.');
      var arrB = b.name.split('.');
      for (var index = 0; index < arrA.length; index++) {
        if (arrB.length < index + 1) {
          return -1; // a < b
        }

        var nA = parseInt(arrA[index]);
        var nB = parseInt(arrB[index]);
        if (isNaN(nA) && isNaN(nB)) {
          return nA < nB ? -1 : nA > nB ? 1 : 0;
        }
        if (isNaN(nB)) {
          return -1; // a < b
        }

        if (isNaN(nA)) {
          return 1; // a > b
        }

        if (nA < nB) {
          return -1;
        }
        if (nA > nB) {
          return 1;
        }
        // иначе - продолжаем сравнение следующих элементов массивов
      }

      return 0;
    }
  }, {
    key: "displayContentElements",
    get: function get() {
      return this.contentElements && this.contentElements.length > 0;
    }
  }, {
    key: "changeUnit",
    value: function changeUnit() {
      this.lessonNumbers = [];
      var oldUnit = this.unit.id == this.unitId;
      var maxLessonNumber = this.unit.maxLessonNumber;
      if (!oldUnit || this.state.createMode) {
        maxLessonNumber++;
        this.lesson.lessonNum = maxLessonNumber;
      } else {
        this.lesson.lessonNum = this.oldLessonNum;
      }
      for (var i = 1; i <= maxLessonNumber; i++) {
        this.lessonNumbers.push(i);
      }
      this.lesson.unit = this.unit;
      this.initLessonNum = this.lesson.lessonNum;
    }
  }, {
    key: "save",
    value: function save() {
      var _this6 = this;
      if (this.form.$invalid) {
        return;
      }
      if (this.state.readOnly) {
        return;
      }
      if (this.changeTracker.isDataChanged()) {
        var confirm = Promise.resolve();
        if (this.lesson.lessonNum != this.initLessonNum) {
          confirm = this.$dialogs.confirm(this.language.Generic.Curriculum.kMsgChangeNLessonInUnit);
        }
        this.$q.when(confirm).then(function () {
          _this6.lesson.attachments = _this6.fa.data.files;
          var saveFunc;
          if (_this6.state.createMode) {
            saveFunc = _this6.lessonsRepository.createLesson(_this6.lesson);
          } else {
            saveFunc = _this6.lessonsRepository.editLesson(_this6.lesson);
          }
          _this6.$longWork.execute(saveFunc).then(function () {
            _this6.state.dataReady = false;
            _this6.$appLoader.hide();
            _this6.$alerts.success(_this6.language.Generic.Common.kDataSaved);
            var params = {};
            if (_this6.state.createMode) {
              params = $.extend(params, {
                "elemType": "plan",
                "EXPANDELEM": "Y"
              });
            } else {
              params = $.extend(params, {
                "elemType": "unit",
                "PRESERVETREE": "Y"
              });
            }
            if (_this6.extraActivity) {
              params = $.extend(params, {
                "extraActivity": "true"
              });
            }
            _this6.$location.path("/subjectplans/").search(params);
          });
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this7 = this;
      if (this.changeTracker.isDataChanged()) {
        this.load().then(function () {
          _this7.$alerts.info(_this7.language.Generic.Common.kResetChanges);
        });
      } else {
        this.$alerts.info(this.language.Generic.Common.kNoChanges);
      }
    }
  }]);
  return EditLessonController;
}();
var EditLessonComponent = {
  controller: EditLessonController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/planner/lessons/editLesson.component.html"
};
exports.EditLessonComponent = EditLessonComponent;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeVisitor = exports.TreeHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TreeVisitor = /*#__PURE__*/function () {
  function TreeVisitor(tree) {
    _classCallCheck(this, TreeVisitor);
    this.tree = tree;
  }
  _createClass(TreeVisitor, [{
    key: "execute",
    value: function execute(action) {
      this["do"](this.tree, action);
    }
  }, {
    key: "do",
    value: function _do(branch, action) {
      var _iterator = _createForOfIteratorHelper(branch),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          action(item);
          if (item.children) {
            this["do"](item.children, action);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return TreeVisitor;
}();
exports.TreeVisitor = TreeVisitor;
var TreeHelper = /*#__PURE__*/function () {
  function TreeHelper() {
    _classCallCheck(this, TreeHelper);
  }
  _createClass(TreeHelper, [{
    key: "isTreeChanged",
    value: function isTreeChanged(selected, workElements) {
      var selectedNodes = selected.nodes;
      if (selectedNodes.length == workElements.length) {
        var newValues = selectedNodes.filter(function (sn) {
          return workElements.findIndex(function (we) {
            return we.id == sn.id;
          }) == -1;
        });
        if (newValues.length == 0) {
          return false;
        }
      }
      return true;
    }
  }]);
  return TreeHelper;
}();
exports.TreeHelper = TreeHelper;

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTasksRepository = exports.TestPlansRepository = exports.QaReferencesRepository = void 0;
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
var TestPlansRepository = /*#__PURE__*/function (_BaseRepository) {
  TestPlansRepository.$inject = ["$http", "$dialogs", "$longWork", "downloadService"];
  _inherits(TestPlansRepository, _BaseRepository);
  var _super = _createSuper(TestPlansRepository);
  /*@ngInject*/
  function TestPlansRepository($http, $dialogs, $longWork, downloadService) {
    var _this;
    _classCallCheck(this, TestPlansRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.downloadService = downloadService;
    return _this;
  }
  _createClass(TestPlansRepository, [{
    key: "createTestPlan",
    value: function createTestPlan(assignmentId) {
      return this.$http.post("/webapi/grade/testplan", null, {
        params: {
          assignmentId: assignmentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeTestPlan",
    value: function removeTestPlan(testPlanId) {
      return this.$http["delete"]("/webapi/grade/testplan", {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTestPlan",
    value: function getTestPlan(testPlanId) {
      return this.$http.get("/webapi/grade/testplan", {
        params: {
          id: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTestPlanTestLevels",
    value: function getTestPlanTestLevels(testPlanId, assignmentId) {
      return this.$http.get("/webapi/grade/testplan/testlevels", {
        params: {
          testPlanId: testPlanId,
          assignmentId: assignmentId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "exportTestPlan",
    value: function exportTestPlan(testPlanId, sgId, assignmentId, dwId) {
      var query = "testPlanId=".concat(testPlanId);
      if (sgId) query += "&sgId=".concat(sgId);
      if (dwId) query += "&dwId=".concat(dwId);
      if (assignmentId) query += "&assignmentId=".concat(assignmentId);
      return this.downloadService.downloadFile("/webapi/grade/testplan/export?".concat(query), {
        method: "post"
      });
    }
  }, {
    key: "getVprVariants",
    value: function getVprVariants(assignId) {
      return this.$http.get("/webapi/grade/testplan/vprvariants", {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setTestLevel",
    value: function setTestLevel(testPlanId, testLevel) {
      return this.$http.post("/webapi/grade/testplan/level", null, {
        params: {
          testPlanId: testPlanId,
          testLevel: testLevel
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "import",
    value: function _import(testPlanId, assignmentId, dwId) {
      var params = {
        testPlanId: testPlanId,
        assignmentId: assignmentId,
        dwId: dwId,
        confirm: true
      };
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      return this.$http.post("/webapi/grade/testplan/import", null, {
        params: params,
        headers: headers
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getAssignmentQaInfo",
    value: function getAssignmentQaInfo(assignmentId) {
      return this.$http.post("/webapi/grade/assignments/".concat(assignmentId, "/get-qa-info")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getDiagnosticWorkQaInfo",
    value: function getDiagnosticWorkQaInfo(dwId) {
      return this.$http.post("/webapi/diagnosticWorks/get-qa-info", null, {
        params: {
          dwId: dwId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return TestPlansRepository;
}(_baseRepository.BaseRepository);
exports.TestPlansRepository = TestPlansRepository;
var QaReferencesRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(QaReferencesRepository, _BaseRepository2);
  var _super2 = _createSuper(QaReferencesRepository);
  function QaReferencesRepository() {
    _classCallCheck(this, QaReferencesRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(QaReferencesRepository, [{
    key: "getTestLevels",
    value: function getTestLevels() {
      return this.$http.get("/webapi/references/testLevels").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTaskDifficults",
    value: function getTaskDifficults() {
      return this.$http.get("/webapi/references/taskDifficults").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getTaskMistakeTypes",
    value: function getTaskMistakeTypes() {
      return this.$http.get("/webapi/references/taskMistakeTypes").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getContentElements",
    value: function getContentElements(args) {
      return this.$http.get("/webapi/grade/contentElements", {
        params: args
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return QaReferencesRepository;
}(_baseRepository.BaseRepository);
exports.QaReferencesRepository = QaReferencesRepository;
var TestTasksRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(TestTasksRepository, _BaseRepository3);
  var _super3 = _createSuper(TestTasksRepository);
  function TestTasksRepository() {
    _classCallCheck(this, TestTasksRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(TestTasksRepository, [{
    key: "getTasks",
    value: function getTasks(testPlanId) {
      return this.$http.get("/webapi/grade/testplan/tasks", {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createTask",
    value: function createTask(testPlanId, task) {
      return this.$http.put("/webapi/grade/testplan/tasks", task, {
        params: {
          testPlanId: testPlanId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editTask",
    value: function editTask(task) {
      return this.$http.post("/webapi/grade/testplan/tasks", task).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeTasks",
    value: function removeTasks(testPlanId, ids) {
      return this.$http["delete"]("/webapi/grade/testplan/tasks", {
        params: {
          testPlanId: testPlanId,
          id: ids
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "setTaskOrder",
    value: function setTaskOrder(testPlanId, orderedTaskIds) {
      var postData = '=' + orderedTaskIds.join("&=");
      var settings = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          testPlanId: testPlanId
        }
      };
      return this.$http.post("/webapi/grade/testplan/tasks/order", postData, settings).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getProtocol",
    value: function getProtocol(assignId) {
      return this.$http.get("/webapi/grade/testplan/results", {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveProtocol",
    value: function saveProtocol(assignId, saveData) {
      return this.$http.post("/webapi/grade/testplan/results", saveData, {
        params: {
          assignId: assignId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return TestTasksRepository;
}(_baseRepository.BaseRepository);
exports.TestTasksRepository = TestTasksRepository;

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyLessonComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CopyLessonController = /*#__PURE__*/function () {
  CopyLessonController.$inject = ["pageContext", "$appLoader", "$longWork", "$q", "$alerts", "unitsRepository", "lessonsRepository", "changeTracker", "language", "$routeParams", "$location", "$dialogs", "$sce"];
  /*@ngInject*/
  function CopyLessonController(pageContext, $appLoader, $longWork, $q, $alerts, unitsRepository, lessonsRepository, changeTracker, language, $routeParams, $location, $dialogs, $sce) {
    _classCallCheck(this, CopyLessonController);
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$q = $q;
    this.$alerts = $alerts;
    this.unitsRepository = unitsRepository;
    this.lessonsRepository = lessonsRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.$location = $location;
    this.$dialogs = $dialogs;
    this.$sce = $sce;
    this.state = {
      dataReady: false
    };
    this.lessonId = parseInt($routeParams.lessonId);
    this.baseLessonName = $routeParams.lessonName;
    //this.lessonName = this.baseLessonName;
    this.subjectId = parseInt($routeParams.subjectId);
    this.planId = parseInt($routeParams.planId), this.unitId = parseInt($routeParams.unitId), this.extraActivity = $routeParams.extraActivity === true;
    //pageContext.title = this.language.Generic.Curriculum.kTitleCopyUnit;
    //pageContext.title = `${this.language.Generic.Curriculum.kTitleCopyUnit} ${this.baseUnitName} ${this.language.Generic.Curriculum.kTo}`;
    //pageContext.title = `${this.language.Generic.Buttons.kCopy} <span style='color:green'>${this.baseUnitName}</span> ${this.language.Generic.Curriculum.kTo}`;
    //pageContext.title = `${this.language.Generic.Buttons.kCopy} "${this.baseLessonName}" ${this.language.Generic.Curriculum.kTo}`;
    pageContext.title = this.$sce.trustAsHtml(this.language.Generic.Buttons.kCopy + " " + this.greenText(this.baseLessonName) + " " + this.language.Generic.Curriculum.kTo);
    pageContext.parent = {
      title: this.language.MenuFolders.kLessonPlans,
      href: "/subjectplans/?extraActivity=".concat(this.extraActivity)
    };
    pageContext.back = {
      history: true
    };
    this.load();
  }
  _createClass(CopyLessonController, [{
    key: "greenText",
    value: function greenText(text) {
      return "<span style='color:green'>" + text + "</span>";
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      this.state.dataReady = false;
      var loadSubjectPlans = this.unitsRepository.getSubjectPlans(this.subjectId, true).then(function (plans) {
        _this.subjectPlans = plans.filter(function (x) {
          return x.units && x.units.length > 0;
        });
        if (_this.subjectPlans && _this.subjectPlans.length > 0) {
          _this.subjectPlans.forEach(function (x) {
            //if (x.units && x.units.length > 0) {
            x.units.forEach(function (y) {
              y.name = "".concat(y.unitNumber, ". ").concat(y.name);
            });
            //}
          });
        }
      });

      var loadLessonName = this.lessonsRepository.getLessonName(this.lessonId).then(function (lessonName) {
        _this.lessonName = lessonName;
      });
      return this.$longWork.execute(this.$q.all([loadSubjectPlans, loadLessonName]).then(function () {
        _this.unit = null;
        if (_this.subjectPlans && _this.subjectPlans.length > 0) {
          _this.subjectPlan = _this.subjectPlans.find(function (x) {
            return x.id == _this.planId;
          });
          if (_this.subjectPlan == undefined) {
            _this.subjectPlan = _this.subjectPlans[0];
          } else {
            if (_this.subjectPlan.units && _this.subjectPlan.units.length > 0) {
              _this.unit = _this.subjectPlan.units.find(function (x) {
                return x.id == _this.unitId;
              });
            }
          }
          _this.unit == null ? _this.changePlan() : _this.changeUnit();
        }
        _this.state.dataReady = true;
        _this.changeTracker.clearDataChanges();
        _this.$appLoader.hide();
      }));
    }
  }, {
    key: "changePlan",
    value: function changePlan() {
      if (this.subjectPlan.units && this.subjectPlan.units.length > 0) {
        this.unit = this.subjectPlan.units[0];
        this.changeUnit();
      }
    }
  }, {
    key: "changeUnit",
    value: function changeUnit() {
      if (isNaN(this.unit.maxLessonNumber)) {
        this.unit.maxLessonNumber = 0;
      }
      this.lessonNumbers = [];
      for (var i = 1; i <= this.unit.maxLessonNumber + 1; i++) {
        this.lessonNumbers.push(i);
      }
      this.lessonNum = this.unit.maxLessonNumber + 1;
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      if (this.form.$invalid) {
        return;
      }
      var confirm = Promise.resolve();
      if (this.lessonNum != this.unit.maxLessonNumber + 1) {
        confirm = this.$dialogs.confirm(this.language.Generic.Curriculum.kMsgChangeNLessonInUnit);
      }
      this.$q.when(confirm).then(function () {
        var copyLesson = {
          copyLessonId: _this2.lessonId,
          unitId: _this2.unit.id,
          lessonName: _this2.lessonName,
          lessonNum: _this2.lessonNum
        };
        _this2.$longWork.execute(_this2.lessonsRepository.copyLesson(_this2.subjectPlan.id, copyLesson)).then(function () {
          _this2.state.dataReady = false;
          _this2.$appLoader.hide();
          _this2.$alerts.success(_this2.language.Generic.Common.kDataSaved);
          var params = {
            "elemType": "lesson"
          };
          if (_this2.extraActivity) {
            params = $.extend(params, {
              "extraActivity": "true"
            });
          }
          _this2.$location.path("/subjectplans/").search(params);
        });
      });
    }
  }]);
  return CopyLessonController;
}();
var CopyLessonComponent = {
  controller: CopyLessonController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/planning/subjectplans/planner/lessons/copyLesson.component.html"
};
exports.CopyLessonComponent = CopyLessonComponent;

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

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlannerExporter = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PlannerExporter = /*#__PURE__*/function () {
  PlannerExporter.$inject = ["downloadService", "taskQueueService", "subjectplansRepository"];
  /*@ngInject*/
  function PlannerExporter(downloadService, taskQueueService, subjectplansRepository) {
    _classCallCheck(this, PlannerExporter);
    this.downloadService = downloadService;
    this.taskQueueService = taskQueueService;
    this.subjectplansRepository = subjectplansRepository;
  }
  _createClass(PlannerExporter, [{
    key: "exportPlanner",
    value: function exportPlanner(subjectplanId, reportType) {
      var _this = this;
      this.taskQueueService.execute({
        getTaskFunc: function getTaskFunc() {
          return _this.subjectplansRepository.exportPlanner(subjectplanId, reportType);
        },
        hint: "Данное информационное окно можно закрыть не дожидаясь выполнения экспорта. Результат будет отправлен Вам на внутреннюю почту."
      }).then(function (fileId) {
        console.log("fileId");
        _this.downloadService.downloadFile("/webapi/files/" + fileId);
      });
    }
  }]);
  return PlannerExporter;
}();
exports.PlannerExporter = PlannerExporter;

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntInputDirective = void 0;
__webpack_require__(14);
var IntInputDirective = function IntInputDirective() {
  return {
    restrict: "A",
    scope: {
      intOptions: "=intInput"
    },
    link: function link(scope, element) {
      var baseNavKeys = [37, 39];
      var baseEditKeys = [8, 46];
      var getInputSelection = function getInputSelection(inputBox) {
        if ("selectionStart" in inputBox) {
          //gecko  
          return {
            start: inputBox.selectionStart,
            end: inputBox.selectionEnd
          };
        }
        //and now, the blinkered IE way  
        var bookmark = document.getSelection().getRangeAt(0);
        var selection = inputBox.createTextRange();
        selection.moveToBookmark(bookmark);
        var before = inputBox.createTextRange();
        before.collapse(true);
        before.setEndPoint("EndToStart", selection);
        var beforeLength = before.text.length;
        var selLength = selection.text.length;
        return {
          start: beforeLength,
          end: beforeLength + selLength
        };
      };
      var setInputSelection = function setInputSelection(inputBox, start, end) {
        if (start > end) {
          start = end;
        }
        if ("selectionStart" in inputBox) {
          //gecko  
          inputBox.setSelectionRange(start, end);
          return true;
        } else {
          var r = inputBox.createTextRange();
          r.collapse(true);
          r.moveStart('character', start);
          r.moveEnd('character', end - start);
          r.select();
          return true;
        }
      };
      var GetIntWhich = function GetIntWhich(value) {
        if (value >= 0 && value < 10) {
          return value + 48;
        }
        return 57;
      };
      var valueInMarkRange = function valueInMarkRange(testValue, inputOptions) {
        return (testValue >= inputOptions.minMark || inputOptions.minMark > 0) && testValue <= inputOptions.maxMark;
      };
      var mayContinueInput = function mayContinueInput(testValue, intInputOptions) {
        if (testValue.toString().length >= intInputOptions.maxLength) {
          return false;
        }
        return testValue <= parseInt(intInputOptions.maxMark.toString().substr(0, intInputOptions.maxLength - 1));
      };
      var setVal = function setVal(input, value) {
        input.value = value;
        $(input).trigger("change");
      };
      var keyPressHandler = function keyPressHandler(e) {
        //обработка стрелок не выполняется
        var oMark = e.target;
        var keyCode = e.keyCode || e.which;
        var unprintable = e.charCode === 0;
        //case с одной цифрой
        if (scope.intOptions.maxLength == 1) {
          if (keyCode >= GetIntWhich(scope.intOptions.minMark) && keyCode <= GetIntWhich(scope.intOptions.maxMark)) {
            setVal(oMark, String.fromCharCode(keyCode));
          } else {
            //необходимо только для FF. в остальных браузерах нажатие на данные кнопки обрабатывается только в keyup
            //отбираются только непечатаемые символы
            if (unprintable) {
              if ($.inArray(keyCode, baseNavKeys) > -1) {
                return true;
              } else if ($.inArray(keyCode, baseEditKeys) > -1) {
                return true;
              }
            }
          }
          return false;
        } else if (keyCode >= 48 && keyCode <= 57 && scope.intOptions.maxLength > 1) {
          //сложные случаи с несколькими цифрами
          //текущее значение без учета вводимого символа
          var currVal = oMark.value;
          var selInfo = getInputSelection(oMark);
          var rightCursor = selInfo.start != 0;
          //склеивание нового значения. Если было что-то выделено - замена выделенного
          //символ вставляется после курсора, т.е. можно вставить как в начало так и в конец.
          var testValue = currVal.substring(0, selInfo.start) + String.fromCharCode(keyCode) + currVal.substring(selInfo.end, currVal.length);
          var testValueInt = parseInt(testValue);
          if (testValueInt == 0) {
            if (scope.intOptions.minMark == 0) {
              //если 0 разрешен то вставляем.
              setVal(oMark, 0);
            }
            return false;
          } else if (!valueInMarkRange(testValueInt, scope.intOptions)) {
            //если тестируемая цифра не удовлетворяет границам - отменяем ввод
            return false;
          }
          if (oMark.value == "0" && rightCursor) {
            //если текущее число 0 и курсор справа то очищаем 0
            setVal(oMark, '');
          }
          setVal(oMark, testValue);
          if (!mayContinueInput(testValueInt, scope.intOptions)) {} else if (selInfo.start != selInfo.end) {
            var endIndex = testValue.toString().length;
            setInputSelection(oMark, endIndex, endIndex);
          }
          return false;
        } else if (keyCode == 8 || keyCode == 0) {
          //backspace и delete
          return true;
        } else {
          //остальные
          return false;
        }
      };
      var keyUpHandler = function keyUpHandler(e) {
        e = e || window.event;
        var keyCode = e.keyCode || e.which;
        var markInput = e.target;
        switch (keyCode) {
          case 89:
          case 121:
          case 1053:
          case 1085:
            break;
          case 13:
            break;
          case 37:
            break;
          case 39:
            break;
          default:
            return false;
        }
        ;
      };
      var keyDownHandler = function keyDownHandler(e) {
        e = e || window.event;
        var keyCode = e.keyCode || e.which;
        if (e.ctrlKey) {
          switch (keyCode) {
            case 86:
              return false;
          }
        }
      };
      var initInput = function initInput() {
        element.on("keyup", keyUpHandler);
        element.on("keypress", keyPressHandler);
        element.on("keydown", keyDownHandler);
        element.on("onpaste", function (e) {
          e.preventDefault();
        });
      };
      initInput();
    }
  };
};
exports.IntInputDirective = IntInputDirective;
IntInputDirective.selector = "intInput";

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